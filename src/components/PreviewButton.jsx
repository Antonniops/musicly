import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

function PreviewButton({ previewUrl, handleClickPreviewSong }) {
  return (
    <button
      className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-3 ml-auto hover:opacity-70 text-white"
      onClick={() => handleClickPreviewSong(previewUrl)}
      title="Preview"
    >
      <BsFillPlayFill />
    </button>
  );
}

export default PreviewButton;
