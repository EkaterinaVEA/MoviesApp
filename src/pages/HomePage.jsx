import { useEffect, useState } from "react";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTranding } from "../services/api";
import {MovieList} from "../components/MovieList/MovieList";
import Pagination  from "../components/Pagination/Pagination"
import Loader from "../components/Loader/Loader";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("idle");
  const [totalPages, setTotalPages] = useState(null);
  
  const { isExact } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const currentPage = Number(new URLSearchParams(location.search).get("page")) || 1;

  useEffect(() => {
  
  async function getMovies() {
      if (!isExact) {
        history.push("/");
        toast.warning("Page not found");
      }
    setStatus("pending");
      try {
          const data = await getTranding(currentPage);
          const { results, total_pages } = data;
          setMovies(results);
          setTotalPages(total_pages);
          setStatus("resolved");
    } catch (error) {
        console.log(error);
        setStatus("idle");
    }
  }
  getMovies();
  }, [currentPage, history, isExact])

    const handleClickPage = ({selected}) => {
     history.push({
      ...location,
      search: selected === 0 ? "":`page=${selected+1}`,
     })
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
if (status === "idle") {
    return (
      <></>
    )
  }
  if (status === "pending") {
    return (
      <Loader />
    )
  }
  if (status === "resolved")
  {
    return (
    <>
        {movies && <MovieList movies={movies} />}
        <Pagination
          totalPages={totalPages}
          onClick={handleClickPage}
          currentPage={currentPage} />
        
    </>
    )
  }
};