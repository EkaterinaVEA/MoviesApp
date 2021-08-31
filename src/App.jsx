import './App.css';
import { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { AppBar } from "./components/AppBar/AppBar";
import Loader from "./components/Loader/Loader";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
const HomePage = lazy(() => import("./pages/HomePage"));
const SearchMoviePage = lazy(() => import("./pages/SearchMoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <Container>
              <Section>
                <HomePage />
              </Section>
            </Container>
          </Route>
          <Route path="/movies" exact>
             <Container>
              <Section>
                <SearchMoviePage />
              </Section>
            </Container>
          </Route>
          <Route path="/movies/:id">
             <Container>
              <Section>
                <MovieDetailsPage />
              </Section>
            </Container>
          </Route>
        </Switch>
      </Suspense>
      <Redirect to="/" />
    </>
  );
}

export default App;
