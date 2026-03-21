import { getAllYearsTeamData, AVAILABLE_YEARS, DEFAULT_YEAR } from '@/lib/notion'
import TeamContent from './TeamContent'

export const revalidate = 60

export default async function TeamPage() {
    const allYearsData = await getAllYearsTeamData()
    return (
        <TeamContent
            allYearsData={allYearsData}
            availableYears={AVAILABLE_YEARS}
            defaultYear={DEFAULT_YEAR}
        />
    )
}
