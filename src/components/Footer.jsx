function Footer() {
  return (
    <footer className="page-footer #ffab91 deep-orange lighten-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://shumnairyna.github.io/react_shop/"
            target="_blank"
            rel="noreferrer">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
