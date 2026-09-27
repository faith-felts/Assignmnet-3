import './Header.css';

function Header({ storeName }) {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label={`${storeName} home`}>
        <span className="wordmark-mark">CC</span>
        <span>{storeName}</span>
      </a>
      <nav className="nav-menu" aria-label="Main navigation">
        <a href="#collection" className="nav-link">Shop</a>
        <a href="#story" className="nav-link">Our story</a>
        <a href="#footer" className="nav-link">Contact</a>
      </nav>
      <a className="header-action" href="#collection">
        <span>Explore</span>
        <span aria-hidden="true">→</span>
      </a>
    </header>
  );
}

export default Header;
