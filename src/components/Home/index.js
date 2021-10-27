// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamsData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const dataTeams = data.teams
    const updatedData = dataTeams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsData: updatedData, isLoading: false})
  }

  teamDetailsData = () => {
    const {teamsData} = this.state
    return teamsData.map(item => <TeamCard teamCardData={item} key={item.id} />)
  }

  onLoading = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="background-container">
        <div className="top-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo-size"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="team-card-container">
          {isLoading ? this.onLoading() : this.teamDetailsData()}
        </ul>
      </div>
    )
  }
}

export default Home
