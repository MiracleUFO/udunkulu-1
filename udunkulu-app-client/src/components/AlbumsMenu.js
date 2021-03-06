import React from "react";
import { Link } from "react-router-dom";
import Browse from "../assets/img/browse.png";
import Albums from "../assets/img/albums.png";
import Artists from "../assets/img/artists.png";
import Favorites from "../assets/img/favorites.png";
import "../assets/css/AlbumsMenu.css";

const AlbumsMenu = () => {
  return (
    <div id="albums-dashboard">
      <section className="dashboard-main">
        <div className="dashboard-nav">
          <img src={Browse} />
          <Link to="/browse" className="link">
            <span>Browse</span>
          </Link>
        </div>
        <div className="dashboard-nav dashboard-albums">
          <img src={Albums} />
          <Link to="/albums" className="link">
            <span>Albums</span>
          </Link>
        </div>
        <div className="dashboard-nav">
          <img src={Artists} />
          <Link to="/artists" className="link">
            <span>Artists</span>
          </Link>
        </div>
      </section>
      <section className="my-music">
        <p className="dashboard-nav">My Music</p>
        <div className="dashboard-nav">
          <img src={Favorites} />
          <Link to="/favorites" className="link">
            <span>Favorites</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AlbumsMenu;
