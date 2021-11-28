import React from "react";
import "./SongRow.css";

function SongRow({ track, key, tabIndex, handleClick }) {
  return (
    <div
      className="songRow"
      tabIndex={tabIndex}
      key={key}
      onClick={handleClick}
    >
      <img
        className="songRow__album"
        src={track.album.images[0].url}
        alt="Gambar Album"
      />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
