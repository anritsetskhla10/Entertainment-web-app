import { Link } from "react-router-dom"
import { StyledNav } from "./StyledNav"



function Nav() {
  return (
    <StyledNav>
        <Link to={'/home'}>
        <img src="/images/logo.svg" alt="logo icon" className="logo" />
        </Link>
    <ul>
       <li>
        <Link to={'/home'}><img src="/images/icon-nav-home.svg" alt="home icon" /></Link>
        </li> 
        <li>
        <Link to={'/movies'}><img src="/images/icon-nav-movies.svg" alt="movies icon" /></Link>
        </li>
        <li>
          <Link to={'/series'}><img src="/images/icon-nav-tv-series.svg" alt="series icon" /></Link>
        </li>
        <li>
          <Link to={'/bookmark'}><img src="/images/icon-nav-bookmark.svg" alt="bookmark icon" /></Link>
        </li> 
    </ul>
    <Link to={'/login'} className="loginLink">
        <img src="/images/image-avatar.png" className="avatar" alt="avatar icon" />
    </Link>
    </StyledNav>
  )
}

export default Nav
