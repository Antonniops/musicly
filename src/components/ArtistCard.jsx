import React from "react";
import { Link } from "react-router-dom";

function ArtistCard({artist}) {
  return (
    <Link to={`/artists/${artist.id}`}>
      <article className="p-6 mr-6 bg-opacity-80 backdrop-blur bg-white/5 rounded cursor-pointer text-center hover:bg-opacity-60">
        <div>
          <img src={artist.images[2].url} className="rounded-full mx-auto" />
        </div>

        <div className="mt-3">
          <p className="font-bold text-white">{artist.name}</p>
        </div>

        <span className="text-gray-400 text-sm">
          {artist.followers.total} OYENTES MENSUALES
        </span>
      </article>
    </Link>
  );
}

export default ArtistCard;
