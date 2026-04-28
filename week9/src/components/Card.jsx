import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'

const Card = (props) =>  {

  return (
      <div className="Card">
          <Link to={`/edit/${props.id}`}>
            <img className="moreButton" alt="edit button" src={more} />
          </Link>

          <Link to={`/crewmate/${props.id}`}>
            <h2 className="title">{props.name}</h2>
          </Link>

          <h3>Color: {props.color}</h3>
          <h3>Role: {props.role}</h3>
          <p>Suspicion Level: {props.suspicion}</p>

          <p>
            {props.role === "Impostor" ? "🚨 SUS" : "✅ Trustworthy"}
          </p>
      </div>
  );
};

export default Card