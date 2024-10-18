import { useContext, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import SearchResult from "./components/SearchResult";

function Discover() {
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const {token} = useContext(AuthContext)


  const options = {
    methods: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleChangeSearch = (evt) => {
    if (!evt.target.value) {
      setSearchResults([]);
      return false;
    }

    fetch(
      `https://api.spotify.com/v1/search?q=${evt.target.value}&type=track%2Calbum%2Cartist%2Cplaylist`,
      options
    )
      .then((res) => {
        if (res.status == 401) {
          throw new Error(res.status);
        }

        return res.json();
      })
      .then((res) => setSearchResults(res?.tracks.items))
      .catch((err) => navigate("/login"));
  };

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
      <form className="flex flex-row items-center w-1/4 p-5">
        <BsSearch className="text-white mr-3" />
        <input
          type="text"
          className="bg-transparent p-3 w-full border-0 border-b-2 border-pink-300 rounded text-white"
          placeholder="Search"
          onChange={(evt) => handleChangeSearch(evt)}
        />
      </form>

      <section>
        {searchResults && (
          <ul className="mt-20 flex flex-col items-start">
            {searchResults.map((search, index) => (
              <SearchResult search={search} key={search.id} index={index} handleClickPreviewSong={handleClickPreviewSong}/> 
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default Discover;
