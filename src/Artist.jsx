import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function Artist() {
  const [artist, setArtist] = useState({});

  const { id } = useParams();

  const { token } = useContext(AuthContext);

  const options = {
    methods: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/artists/${id}`, options)
      .then((response) => {
        if (response.status == 401) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then((response) => setArtist(response));
  }, []);

  return (
    <div>
      { artist.name  && (
        <div className="flex flex-row p-5 bg-purple-700 w-1/2 rounded ">
          <div className="w-1/3 rounded">
            <img src={artist.images[1].url} />
          </div>
          <div className="w-2/3 ml-5">
            <h1 className="text-white text-4xl font-bold">
              {artist.name.toUpperCase()}
            </h1>
            <h2 className="text-white ">
              {artist.genres.map((value, index) => {
                if(index > 0){
                  return ', ' + value.charAt(0).toUpperCase() + value.slice(1)
                }

                return value.charAt(0).toUpperCase() + value.slice(1)
              })} 
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Artist;
