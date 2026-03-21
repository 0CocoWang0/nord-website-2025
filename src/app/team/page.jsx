import { getTeamMembers } from '@/lib/notion'
import TeamContent from './TeamContent'

export const revalidate = 60 // revalidate every 60 seconds

export default async function TeamPage() {
    const teams = await getTeamMembers()
    return <TeamContent teams={teams} />
}
