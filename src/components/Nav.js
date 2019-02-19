/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
    <NavStyles>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/popular">
        <a>Popular</a>
      </Link>
      <Link href="/nowPlaying">
        <a>Now Playing</a>
      </Link>
      <Link href="/topRated">
        <a>Top Rated</a>
      </Link>
      <div>
        <form>
          <input type="text" placeholder="Search Movies"></input>
        </form>
      </div>
    </NavStyles>
)

export default Nav;