import axios from "axios";
import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import SearchBar from "./components/SearchBar";
function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  useEffect(() => {
    const key = process.env.REACT_APP_PIXABAY_API_KEY;
    const url = `https://pixabay.com/api/?key=${key}&q=${term}`;
    axios.get(url).then((result) => {
      const data = result.data.hits;
      setImages(data);
    });
  }, [term]);
  return (
    <>
      <SearchBar setTerm={setTerm} />
      {images.length > 0 ? (
        <div className="container mx-auto">
          <div className="mx-auto max-w-xs md:max-w-3xl lg:max-w-5xl grid lg:grid-cols-4 lg:gap-10 md:grid-cols-3 md:gap-6 ">
            <ImageCard images={images} />
          </div>
        </div>
      ) : (
        <h1 className="text-center text-indigo-800 font-semibold text-3xl">
          Sorry, No image found !
        </h1>
      )}
    </>
  );
}

export default App;
