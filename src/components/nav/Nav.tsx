import { StyledNav } from "./StyledNav"

function Nav() {
  return (
    <StyledNav>
        <a href="#">
        <img src="/images/logo.svg" alt="logo icon" className="logo" />
    </a>
    <ul>
        <li><img src="/images/icon-nav-home.svg" alt="home icon" /></li>
        <li><img src="/images/icon-nav-movies.svg" alt="movies icon" /></li>
        <li><img src="/images/icon-nav-tv-series.svg" alt="series icon" /></li>
        <li><img src="/images/icon-nav-bookmark.svg" alt="bookmark icon" /></li>
    </ul>
    <a href="#">
        <img src="/images/image-avatar.png" className="avatar" alt="avatar icon" />
    </a>
    </StyledNav>
  )
}

export default Nav
