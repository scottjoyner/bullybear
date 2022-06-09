import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LeaderboardPage = () => {
  return (
    <>
      <MetaTags title="Leaderboard" description="Leaderboard page" />

      <h1>LeaderboardPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/LeaderboardPage/LeaderboardPage.js</code>
      </p>
      <p>
        My default route is named <code>leaderboard</code>, link to me with `
        <Link to={routes.leaderboard()}>Leaderboard</Link>`
      </p>
    </>
  )
}

export default LeaderboardPage
