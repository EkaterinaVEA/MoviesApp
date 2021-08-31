import { NavLink } from "react-router-dom";
import { Nav, List, Item } from "./Navigation.styles";
import { BiCameraMovie } from "react-icons/bi";

const Navigation = () => {
    return (
        <Nav>
            <List>
                <BiCameraMovie size="50" />
                <Item>
                    <NavLink
                        exact to="/"
                        className="navLink"
                        activeClassName="activeLink"
                    >
                        Home
                    </NavLink>
                </Item>
                <Item>
                    <NavLink
                    to="/movies"
                    className="navLink"
                    activeClassName="activeLink"
                    >
                        Movies
                    </NavLink>
                </Item>
            </List>
        </Nav>
    )
}

export default Navigation;