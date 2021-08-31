import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchMovies } from "../services/api";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination/Pagination";
import SearchForm from "../components/SearchForm/SearchForm";
import {MovieList} from "../components/MovieList/MovieList";

export default function SearchMoviesPage() {
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState("idle");
    const history = useHistory();
    const location = useLocation();
    const currentPage = Number(new URLSearchParams(location.search).get("page")) || 1;
    const searchQuery = new URLSearchParams(location.search).get("query");
    const [totalPages, setTotalPages] = useState(null);

    useEffect(() => {
        if (!searchQuery) { 
        return
    }
        async function getMovies() {
            setStatus("pending");
        try {
            const data = await getSearchMovies(searchQuery, currentPage);
            const { results, total_pages } = data;
            if (!results.length) {
          throw new Error("Results not found");
        }
            setMovies(results);
            setTotalPages(total_pages);
            setStatus("resolved");
        }
        catch (error) {
            console.log(error);
            toast.warning("Results not found");
            setStatus("rejected");
      }
    }
    getMovies();
    }, [searchQuery, currentPage])

    const handleChangeQuery = query => {
    if (!query || query === searchQuery) {
            toast.info('Please, enter new query!');
        return;
    }
    setMovies([]);
    history.push({
    ...location,
    search: `query=${query}&page=${1}`,
    });
    }
    
    const handlePageClick = ({selected}) => {
     history.push({
      ...location,
      search: `query=${searchQuery}&page=${selected + 1}`,
     })
    window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (status === "idle") {
        return (
            <SearchForm onSearch={handleChangeQuery} />
        )
    }
    if (status === "pending") {
        return (
            <>
            <SearchForm onSearch={handleChangeQuery} />
            <Loader />
            </>
        )
    }
    if (status === "resolved") {
        return (
            <>
            <SearchForm onSearch={handleChangeQuery} />
            {movies && <MovieList movies={movies} />}
            <Pagination
            totalPages={totalPages}
            onClick={handlePageClick}
            currentPage={currentPage} />
            </>
        )
    }
    if (status === "rejected") {
        return (
            <SearchForm onSearch={handleChangeQuery} />
        )
    }
}