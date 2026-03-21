const NOTION_API_KEY = process.env.NOTION_API_KEY;

// Map each year to its Notion database ID
// Add new years here as you create new databases
const YEAR_DATABASES = {
    "2025-2026": process.env.NOTION_TEAM_DATABASE_ID,
};

export const AVAILABLE_YEARS = Object.keys(YEAR_DATABASES).sort().reverse();
export const DEFAULT_YEAR = AVAILABLE_YEARS[0];

const TEAM_ORDER = [
    "Executive Team",
    "Consulting Team",
    "Research Team",
    "Junior Consultants",
    "Junior Analysts",
];

const ROLE_PRIORITY = {
    "President": 0,
    "Director of Communications": 1,
    "Director of Community Relations": 1,
    "Director of Events": 1,
    "Director of Academics": 1,
    "Director of Technology": 1,
    "Director of Corporate Relations": 1,
    "Director of Internal": 1,
    "Head of Consulting": 2,
    "Head of Research": 2,
    "Engagement Manager": 3,
    "Project Manager": 4,
    "Product Manager": 4,
    "Research Manager": 4,
    "Senior Consultant": 5,
};

function getPropertyValue(property) {
    if (!property) return "";
    switch (property.type) {
        case "title":
            return property.title?.map((t) => t.plain_text).join("") || "";
        case "rich_text":
            return property.rich_text?.map((t) => t.plain_text).join("") || "";
        case "email":
            return property.email || "";
        case "select":
            return property.select?.name || "";
        case "number":
            return property.number ?? 0;
        case "files":
            return property.files?.[0]?.file?.url || property.files?.[0]?.external?.url || "";
        default:
            return "";
    }
}

async function queryDatabase(databaseId, startCursor) {
    const body = { page_size: 100 };
    if (startCursor) body.start_cursor = startCursor;

    const res = await fetch(
        `https://api.notion.com/v1/databases/${databaseId}/query`,
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${NOTION_API_KEY}`,
                "Notion-Version": "2022-06-28",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        }
    );

    if (!res.ok) {
        throw new Error(`Notion API error: ${res.status} ${await res.text()}`);
    }

    return res.json();
}

export async function getTeamMembers(year = DEFAULT_YEAR) {
    const databaseId = YEAR_DATABASES[year];
    if (!databaseId) {
        throw new Error(`No database configured for year: ${year}`);
    }

    let allPages = [];
    let cursor;
    do {
        const data = await queryDatabase(databaseId, cursor);
        allPages.push(...data.results);
        cursor = data.has_more ? data.next_cursor : null;
    } while (cursor);

    const members = allPages.map((page) => {
        const props = page.properties;
        return {
            name: getPropertyValue(props.Name),
            role: getPropertyValue(props.Role),
            email: getPropertyValue(props.Email),
            team: getPropertyValue(props.Team),
            photo: getPropertyValue(props["Profile Picture"]),
        };
    });

    const grouped = {};
    for (const team of TEAM_ORDER) {
        grouped[team] = members
            .filter((m) => m.team === team)
            .sort((a, b) => {
                const pa = ROLE_PRIORITY[a.role] ?? 99;
                const pb = ROLE_PRIORITY[b.role] ?? 99;
                if (pa !== pb) return pa - pb;
                return a.name.localeCompare(b.name);
            });
    }

    return grouped;
}

export async function getAllYearsTeamData() {
    const results = {};
    await Promise.all(
        AVAILABLE_YEARS.map(async (year) => {
            results[year] = await getTeamMembers(year);
        })
    );
    return results;
}
