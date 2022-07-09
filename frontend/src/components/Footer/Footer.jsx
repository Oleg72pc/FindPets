import React from 'react';
import './footer.css'

function Footer(props) {
  return (
    <>
      <footer>
        <p className="footer1">
          Copyright &copy;
          <script>document.write(new Date().getFullYear());</script>
        </p>
        <p className="footer1">All rights reserved | Organisation Name</p>
      </footer>
    </>
  );
}

export default Footer;
