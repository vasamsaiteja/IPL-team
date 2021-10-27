// Write your code here
import {Component} from 'react'

import LatestMatch from '../LatestMatch'
// import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {teamDetails: {}}

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    console.log(updatedData)
    this.setState({teamDetails: updatedData})
  }

  renderTeamDetails = () => {
    const {teamDetails} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamDetails
    console.log('recentMatches', typeof recentMatches)
    console.log('recentMatches', recentMatches)

    return (
      <div>
        <img src={teamBannerUrl} alt="team" />
        <div>
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>

        {/* <ul>
          {recentMatches.map(item => (
            <MatchCard opponent={item} key={item.id} />
          ))}
        </ul> */}
      </div>
    )
  }

  render() {
    return <div>{this.renderTeamDetails()}</div>
  }
}
export default TeamMatches
