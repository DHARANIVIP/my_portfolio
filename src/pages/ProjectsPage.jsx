import { Projects } from '../components/Projects'
import { GithubStats } from '../components/GithubStats'

export function ProjectsPage() {
  return (
    <div className="page">
      <Projects />
      <GithubStats />
    </div>
  )
}
