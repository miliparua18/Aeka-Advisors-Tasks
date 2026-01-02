import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const user = localStorage.getItem("currentUser");

  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      const savedImages = JSON.parse(localStorage.getItem(user)) || [];
      setImages(savedImages);
    }
  }, [user, navigate]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select an image");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedImages = [...images, reader.result];
      setImages(updatedImages);
      localStorage.setItem(user, JSON.stringify(updatedImages));
    };

    reader.readAsDataURL(file);
    setFile(null);
  };

  const handleDelete = (indexToDelete) => {
    const updatedImages = images.filter((_, index) => index !== indexToDelete);
    setImages(updatedImages);
    localStorage.setItem(user, JSON.stringify(updatedImages));
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <h2>{user}'s Dashboard</h2>

      <hr />

      <h3>Upload New Image</h3>
      <div className="upload-section">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>

      <hr />

      <h3>Your Uploaded Images</h3>

      {images.length === 0 ? (
        <p>No images uploaded yet.</p>
      ) : (
        images.map((img, index) => (
          <div className="image-row" key={index}>
            <img src={img} alt="uploaded" />

            <button
              className="delete-btn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </div>
        ))
      )}
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;


