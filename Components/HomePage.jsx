import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-header">
        <h1>Battlémon</h1>
      </div>
      <main>
        <div className="main-container">
          <img className="main-img" src="/Daco_5392079.png" alt="pokemons" />
          <div className="main-button-container">
            <button className="main-button">
              {" "}
              <Link to="/pokemon-list">Create Account</Link>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;