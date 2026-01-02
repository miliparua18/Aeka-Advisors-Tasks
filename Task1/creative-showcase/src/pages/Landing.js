import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {

  // Get images stored in localStorage
  const getRandomImages = () => {
    let allImages = [];

    for (let key in localStorage) {
      try {
        const value = JSON.parse(localStorage.getItem(key));

        if (
          Array.isArray(value) &&
          value.length > 0 &&
          typeof value[0] === "string" &&
          value[0].startsWith("data:image")
        ) {
          allImages = allImages.concat(value);
        }
      } catch (error) {}
    }

    return allImages.sort(() => 0.5 - Math.random()).slice(0, 9);
  };

  // Default images
  const defaultImages = [
    "/images/img1.webp",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg"
  ];

  const storedImages = getRandomImages();
  const images = storedImages.length === 0 ? defaultImages : storedImages;

  return (
    <div className="landing-container">

      {/* 🔹 Creative Showcase Section */}
      <div className="showcase-section">
        <h1 className="title">Creative Showcase</h1>
        <p className="subtitle">Explore user-shared digital memories</p>
        <div className="auth-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn btn-outline">Sign Up</Link>
        </div>
      </div>

      {/* 🔹 Images Section */}
      <div className="images-section">
        {images.map((img, index) => (
          <img key={index} src={img} alt="gallery" />
        ))}
      </div>

    </div>
  );
}

export default Landing;



