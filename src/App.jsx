import toast, { Toaster } from "react-hot-toast";

import { getPhotos } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const { results, total_pages } = await getPhotos(query, page);
        // console.log(results);
        if (!results.length) {
          setIsEmpty(true);
          return;
        }
        setImages((prevImages) => [...prevImages, ...results]);
        setVisible(page >= total_pages);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [page, query]);
  const onHandleSubmit = (value) => {
    setQuery(value);
  };
  console.log(images);
  return (
    <div>
      <Loader />
      <SearchBar onSubmit={onHandleSubmit} />
      <Toaster />
    </div>
  );
};

export default App;
