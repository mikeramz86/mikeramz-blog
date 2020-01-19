import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
          <Link
            to="/contact"
            style={{
              margin: 0,
              color: `white`,
              textDecoration: `none`,
            }}
          >
              Contact
          </Link>
          <Link
            to="/project"
            style={{
              margin: 0,
              color: `white`,
              textDecoration: `none`,
              paddingLeft: 25,
      
            }}
          >
              Projects
          </Link>
          <Link
            to="/blog"
            style={{
              margin: 0,
              color: `white`,
              textDecoration: `none`,
              paddingLeft: 25,
      
            }}
          >
              Blog
          </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
