import { useEffect, useState } from "react";
import axios from "axios";

function Img({ pictureName, isCity }) {
  const [picture, setPicture] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API_KEY_PIC = import.meta.env.VITE_REACT_APP_PICTURE_API_KEY;
        const response = await axios.get(
          `https://pixabay.com/api/?key=${API_KEY_PIC}&q=${pictureName}&image_type=all`
        );
        setPicture(response.data);
      } catch (error) {
        null;
      }
    };
    fetchData();
  }, [pictureName, isCity]);

  const randomImageNumber = () => {
    const randomNumber = Math.floor(Math.random() * picture.hits.length);
    return randomNumber;
  };

  if (!pictureName || !isCity || !picture.hits[randomImageNumber()]) {
    return null;
  }
  return (
    <div className="image">
      <img src={picture.hits[randomImageNumber()].webformatURL} alt="Image" />
    </div>
  );
}

export default Img;
