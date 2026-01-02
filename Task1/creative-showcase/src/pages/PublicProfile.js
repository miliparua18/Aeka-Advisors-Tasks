import { useParams, Link } from "react-router-dom";
import "./PublicProfile.css";

function PublicProfile() {
  const { username } = useParams();

  const images = JSON.parse(localStorage.getItem(username)) || [];

  return (
    <div className="profile-container">
      <h2>{username}'s Gallery</h2>

      <Link to="/">← Back to Home</Link>

      <div className="masonry">
        {images.length === 0 ? (
          <p>No images uploaded by this user.</p>
        ) : (
          images.map((img, index) => (
            <img key={index} src={img} alt="user artwork" />
          ))
        )}
      </div>
    </div>
  );
}

export default PublicProfile;

