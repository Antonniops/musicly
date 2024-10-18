import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import ArtistCard from "./components/ArtistCard";

function TopArtists() {
  const [artists, setArtists] = useState([]);

  const navigate = useNavigate();

  const {token} = useContext(AuthContext)

  const options = {
    methods: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://api.spotify.com/v1/artists?ids=1i8SpTcr7yvPOmcqrbnVXY%2C47MpMsUfWtgyIIBEFOr4FE%2C1vCWHaC5f2uS3yhpwWbIA6",
      options
    )
      .then((res) => {
        if (res.status == 401) {
          throw new Error(res.status);
        }

        return res.json();
      })
      .then((response) => setArtists(response.artists))
      .catch((err) => navigate("/login"));
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-white font-semibold"> Top Artists</h1>
      {artists && (
        <ul className="mt-20 flex flex-row">
          {artists.map((artist) => (
           <ArtistCard artist={artist} key={artist.name}/> 
          ))}
        </ul>
      )}
    </div>
  );
}

export default TopArtists;
