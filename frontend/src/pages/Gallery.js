import { useEffect, useState } from "react";
import axios from "axios";
import photo from "../assets/gallery/bgga2.jpeg";
import backgroundImage from "../assets/bgyellow.png";

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/obtener_archivos/")
      .then((response) => {
        const galleryData = response.data.collections.galeria;
        const images = Object.values(galleryData).map(
          (item) => item.multimedia
        );
        setGalleryImages(images);
      })
      .catch((error) => {
        console.error("Error fetching gallery data:", error);
      });
  }, []);

  return (
    <>
      <div className="relative h-full">
        <img
          src={photo}
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-1/2 left-[150px] transform -translate-y-1/2 text-white">
          <h1 className="text-4xl font-bold">GALLERY</h1>
        </div>
      </div>
      <div
        className="bg-cover bg-center w-full h-fit flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="grid grid-cols-5 gap-4 m-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center"
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
