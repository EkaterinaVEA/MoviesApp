import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import defaultImg from "../../images/defaultImg.png";
import { Item, Image,Title, Info, Rating, Genre } from "./MovieItem.styles";

export function MovieItem({ id, posterPath, title, genres, rating }) {
  const location = useLocation();
  return (
    <Item>
      <Link
        className="filmListItemLink"
        to={{
          pathname: `/movies/${id}`,
          state: { from: location },
        }}>
        <Image
          src={posterPath ? `https://image.tmdb.org/t/p/original${posterPath}` : defaultImg}
          alt={title}
          width="300"
          height="450"
        />
        <Title>{title}</Title>
        <Info>
            <Genre>{genres}</Genre>          
            <Rating>{rating}</Rating>
        </Info>
      </Link>
    </Item>
  );
};
MovieItem.propTypes = {
    id: PropTypes.number.isRequired,
    posterPath: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    genres: PropTypes.string,
}