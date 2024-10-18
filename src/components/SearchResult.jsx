import React from "react";
import PreviewButton from "./PreviewButton";

function SearchResult({ search, index, handleClickPreviewSong }) {
  return (
    <article className="p-6 mr-6 mb-5 w-2/5 flex flex-row bg-opacity-80 backdrop-blur bg-white/5 rounded cursor-pointer text-center hover:bg-opacity-60 items-center">
      <span className="text-white ">{index + 1} .</span>
      <div className="mx-3">
        <img src={search.album.images[2].url} className=" mx-auto" />
      </div>

      <div className="text-left ml-3">
        <p className="font-bold text-white">{search.name}</p>
        <p className="text-white">{search.artists[0].name}</p>
      </div>

      <PreviewButton previewUrl={search.preview_url} handleClickPreviewSong={handleClickPreviewSong}/> 
    </article>
  );
}

export default SearchResult;
