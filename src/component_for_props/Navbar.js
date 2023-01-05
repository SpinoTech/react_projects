// inside a components any file should be in camital initial lattered
import React from 'react'
import PropTypes from 'prop-types'

// personal css styling using java script
const styles={
  'border-radius' : '40px',
  'padding':'10px'

}
export default function Navbar(props) {
  return (
    <>
      {/* it's a simple navbar from bootstrap */}

      <nav className={`navbar navbar-expand-lg bg-${props.mode.backgroundColor}`}>
        <div className="container-fluid">
          <a className="navbar-brand" style={props.mode} href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" style={props.mode} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" style={props.mode} aria-current="page" href="/about">about</a> */}
              </li>

            </ul>

            {/* custom color palets buttons */}
            <button type="button" class="btn btn-outline-primary mx-2"style={styles} onClick={props.blue_theme}></button>
            <button type="button" class="btn btn-outline-secondary mx-2 " style={styles} onClick={props.ass_theme}></button>
            <button type="button" class="btn btn-outline-success mx-2 " style={styles} onClick={props.green_theme}></button>
            <button type="button" class="btn btn-outline-danger mx-2 " style={styles} onClick={props.red_theme}></button>
            <button type="button" class="btn btn-outline-warning mx-2 " style={styles} onClick={props.yellow_theme}></button>
            <button type="button" class="btn btn-outline-info mx-2 " style={styles} onClick={props.sky_theme}></button>

            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={props.mode}>{props.btntext}</label>
            </div>

          </div>
        </div>
      </nav>

    </>
  )
}
// this proptype sets the value only string .
Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

// setting dafault props
Navbar.defaultProps = {
  title: "no title",

};