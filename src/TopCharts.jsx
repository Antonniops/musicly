import React, { useContext, useEffect, useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import PreviewButton from "./components/PreviewButton";

function TopCharts() {
  const [charts, setCharts] = useState([]);

  const navigate = useNavigate();

  const { token } = useContext(AuthContext);

  const options = {
    methods: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    fetch(
      "https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C5EId1m4DNwTf3at31w8bPJ%2C2takcwOaAZWiXQijPHIx7B%2C01vv2AjxgP4uUyb8waYO5Y%2C4s6LhHAV5SEsOV0lC2tjvJ%2C5UOzQpO62ljPFDqquxGDqT",
      options
    )
      .then((res) => {
        if (res.status == 401) {
          throw new Error(res.status);
        }

        return res.json();
      })
      .then((res) => setCharts(res.tracks))
      .catch((err) => navigate("/login"));
  }, []);

  const handleClickPreviewSong = async (previewUrl) => {
    var audio = new Audio(previewUrl);

    try {
      await audio.play();
      console.log("Playing...");
    } catch (err) {
      console.log("Failed to play..." + err);
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-white font-semibold"> Top Charts</h1>
      {charts && (
        <ul className="mt-20 flex flex-col items-start">
          {charts.map((chart, index) => (
            <article
              key={chart.id}
              className="p-6 mr-6 mb-5 w-full md:w-4/5 lg:w-3/5 flex flex-row bg-opacity-80 backdrop-blur bg-white/5 rounded cursor-pointer text-center hover:bg-opacity-60 items-center"
            >
              <span className="text-white">{index + 1} .</span>
              <div className="mx-3">
                <img src={chart.album.images[2].url} className=" mx-auto" />
              </div>

              <div className="text-left ml-3">
                <p className="font-bold text-white">{chart.name}</p>
                <p className="text-white">{chart.artists[0].name}</p>
              </div>


              <PreviewButton previewUrl={chart.preview_url} handleClickPreviewSong={handleClickPreviewSong}/> 
            </article>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TopCharts;
