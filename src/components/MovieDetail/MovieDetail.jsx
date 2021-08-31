import PropTypes from "prop-types";
import { NavLink, useRouteMatch } from "react-router-dom";
import { Container, Wrapper, Image, MovieTitle, Title, List, Item, Content, Rating, About, Overview, LinksWrapper } from "./MovieDetail.styles";
import defaultImg from "../../images/defaultImg.png";

export function MovieDetail({ posterPath, title, genres, voteRate, voteCount, releaseDate, overview }) {
    const { url } = useRouteMatch();

    return (
        <Container>
            <Image src={posterPath ? `https://image.tmdb.org/t/p/original${posterPath}` : defaultImg} />
            <Wrapper>
                <MovieTitle>{`${title} (${releaseDate.substring(0, 4)})`}</MovieTitle>
                <List>
                    <Item>
                        <Title>Vote / Votes</Title>
                        <Content>
                            <Rating>{voteRate}</Rating> / {voteCount}
                        </Content>
                    </Item>
                    <Item>
                        <Title>Original Title</Title>
                        <Content>{title}</Content>
                    </Item>
                    <Item>
                        <Title>Genres</Title>
                        <Content>{genres}</Content>
                    </Item>
                    <About>About</About>
                    <Overview>{overview}</Overview>
                </List>
                <LinksWrapper>
                    <NavLink to={`${url}/cast`}
                            className="infoLink"
                            activeClassName="infoLinkActive">Cast</NavLink>
                    <NavLink to={`${url}/review`}
                            className="infoLink"
                            activeClassName="infoLinkActive">Review</NavLink>
                </LinksWrapper>
            </Wrapper>
        </Container>
    )
}

MovieDetail.propTypes = {
    title: PropTypes.string,
    posterPath: PropTypes.string,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    voteCount: PropTypes.number,
    voteRate: PropTypes.number,
    genres:PropTypes.string,
}