import React from 'react';

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Andy Lam</p>
      <p>Find me on: <a href="https://github.com/LamKD98">GitHub</a></p>
    </footer>
  );
}

export default Footer;
