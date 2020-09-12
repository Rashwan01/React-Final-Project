import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="page-footer font-small bg-dark blue fixed-bottom">
          <div className="footer-copyright text-center py-3 text-white">
            © {new Date().getFullYear()} Copyright:
            <a href="/me"> Team </a>
          </div>
        </footer>
      </>
    );
  }
}
export default Footer