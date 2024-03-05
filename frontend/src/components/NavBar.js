export const NavBar = () => {
  return (
    <div className="navWrapper">
      <nav>
        <ul className="navList">
          <span>
            <a href="/">YK APPS</a>
          </span>
          <li>
            <button>Dark Mode/Light Mode</button>
          </li>
          <li>
            <a href="/" aria-current="true">
              Explore
            </a>
          </li>
          <li>
            <a href="/" aria-current="true">
              Create
            </a>
          </li>
          <li>
            <a href="/your-cocktail-selection" aria-current="true">
              Your Cocktail Selection
            </a>
          </li>
          <li>
            <a href="/" aria-current="true">
              Cabine Crew
            </a>
          </li>
          <li>
            <button>Menu Collapse</button>
          </li>
          <li>
            <a href="/" aria-current="true">
              Login/Join
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
