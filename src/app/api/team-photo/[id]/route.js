const NOTION_API_KEY = process.env.NOTION_API_KEY;

export async function GET(request, { params }) {
    const { id } = await params;

    // Fetch the page from Notion to get the current image URL
    const pageRes = await fetch(`https://api.notion.com/v1/pages/${id}`, {
        headers: {
            Authorization: `Bearer ${NOTION_API_KEY}`,
            "Notion-Version": "2022-06-28",
        },
    });

    if (!pageRes.ok) {
        return new Response("Not found", { status: 404 });
    }

    const page = await pageRes.json();
    const fileProp = page.properties?.["Profile Picture"];
    const imageUrl =
        fileProp?.files?.[0]?.file?.url ||
        fileProp?.files?.[0]?.external?.url;

    if (!imageUrl) {
        return new Response("No image", { status: 404 });
    }

    // Fetch the actual image
    const imageRes = await fetch(imageUrl);
    if (!imageRes.ok) {
        return new Response("Image fetch failed", { status: 502 });
    }

    const contentType = imageRes.headers.get("content-type") || "image/jpeg";
    const imageBuffer = await imageRes.arrayBuffer();

    return new Response(imageBuffer, {
        headers: {
            "Content-Type": contentType,
            // Cache for 1 day in browser, 7 days on CDN; serve stale while revalidating
            "Cache-Control": "public, s-maxage=604800, max-age=86400, stale-while-revalidate=86400",
        },
    });
}
