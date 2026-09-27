import './Header.css';

function Header({ storeName, cartCount }) {
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
      <a className="header-action cart-link" href="#cart" aria-label={`Shopping cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}>
        <span className="cart-icon" aria-hidden="true">🛒</span>
        <span className="cart-badge" aria-hidden="true">{cartCount}</span>
      </a>
    </header>
  );
}

export default Header;
