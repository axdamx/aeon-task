
const Navbar = () => {

  return (
    <nav className="navbar">
      <a href="/" className="navbar-title mr-5">
        AEON
      </a>
      <div>
        <a href="/" className="navbar-title">
          Showcase
        </a>
        <a href="/" className="navbar-title">
          Docs
        </a>
        <a href="/" className="navbar-title">
          Blog
        </a>
        <a href="/" className="navbar-title">
          Analytics
        </a>
        <a href="/" className="navbar-title">
          Templates
        </a>
        <a href="/" className="navbar-title">
          Enterprise
        </a>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
    </nav>
  );
}

export default Navbar;
