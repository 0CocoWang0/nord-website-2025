import { redirect } from 'next/navigation'
import { DEFAULT_YEAR } from '@/lib/notion'

export default function TeamPage() {
    redirect(`/team/${DEFAULT_YEAR}`)
}
