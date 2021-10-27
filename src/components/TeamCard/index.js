// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamCardData} = props
  const {id, name, teamImageUrl} = teamCardData
  return (
    <Link to={`/team-matches/${id}`} className="item-link">
      <li className="list-card-container">
        <img src={teamImageUrl} alt={name} className="team-logo-size" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
