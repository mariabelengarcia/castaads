import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ id, image, title, text }) {
  return (
    <Link to={`/trabajos/${id}`} className="card-link">
      <div className="card">
        <img src={image} alt={title} className="card-img" />

        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </Link>
  );
}
