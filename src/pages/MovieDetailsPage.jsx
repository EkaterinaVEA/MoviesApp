import { useEffect, useState, Suspense, lazy, useRef } from "react";
import { Route, useRouteMatch, useParams, useHistory, useLocation } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MovieDetail } from "../components/MovieDetail/MovieDetail";
import { getMovieInfoById } from "../services/api";
import { BackBtn } from "../components/MovieDetail/MovieDetail.styles";
import Loader from "../components/Loader/Loader";

const CastPage = lazy(() => import('../pages/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));

export default function MovieDetailsPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const history = useHistory();
    const { path } = useRouteMatch();
    const location = useLocation();
    const locationState = useRef(location.state?.from).current;

    useEffect(() => {
        async function getMovie() {
            try {
                const movie = await getMovieInfoById(id);
                if (!movie) {
                    throw new Error("Page not found");
                }
                setMovie(movie);
            } catch (error) {
                history.push("/");
                toast.warning("Page not found")
            }
        }
        getMovie();
    }, [id, history]);

    const OnGoBack = () => {
    history.push(locationState ?? "/");
  };

    return (
        <>
            <BackBtn onClick={OnGoBack}>
                <IoArrowBackCircleOutline size="50" />
                Back
            </BackBtn>
            {movie && <MovieDetail
                title={movie.title}
                posterPath={movie.poster_path}
                overview={movie.overview}
                releaseDate={movie.release_date}
                voteRate={movie.vote_average}
                voteCount={movie.vote_count}
                genres={movie.genres.map((genre) => genre.name).join(", ")}
            />}
            <Suspense fallback={<Loader />}>
                <Route path={`${path}/cast`}>
                        <CastPage />
                </Route>
                <Route path={`${path}/review`}>
                        <ReviewsPage />
                </Route>
            </Suspense>
            </>
    )
}