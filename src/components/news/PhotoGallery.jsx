import React, { useEffect } from "react";

const PhotoGallery = () => {
  useEffect(() => {
    window.scroll({ top: 500, left: 0, behavior: "smooth" });
  });

  return (
    <div>
      Photo Gallery
      <div className="h-52 flex items-center justify-center">
        <p className="text-dark font-medium">- NO CONTENT AVAILABLE -</p>
      </div>
    </div>
  );
};

export default PhotoGallery;
