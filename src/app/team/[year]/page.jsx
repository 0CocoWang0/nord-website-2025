import { notFound } from 'next/navigation'
import { getTeamMembers, AVAILABLE_YEARS, DEFAULT_YEAR } from '@/lib/notion'
import TeamContent from '../TeamContent'

export const revalidate = 60

export async function generateMetadata({ params }) {
    const { year } = await params
    return {
        title: `${year} Team`,
        description: `Meet the ${year} NORD Consulting team at McGill University. Our consultants deliver pro-bono, data-driven solutions for Montreal's non-profits.`,
    }
}

export async function generateStaticParams() {
    return AVAILABLE_YEARS.map((year) => ({ year }))
}

export default async function TeamYearPage({ params }) {
    const { year } = await params

    if (!AVAILABLE_YEARS.includes(year)) {
        notFound()
    }

    const teams = await getTeamMembers(year)
    return (
        <TeamContent
            teams={teams}
            availableYears={AVAILABLE_YEARS}
            currentYear={year}
            defaultYear={DEFAULT_YEAR}
        />
    )
}
