function Header() {
  return (
    <nav className="#ff8a65 deep-orange lighten-2">
      <div className="nav-wrapper">
        <a href="" className="brand-logo">
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              href="https://shumnairyna.github.io/react_shop/"
              target="_blank"
              rel="noreferrer">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
