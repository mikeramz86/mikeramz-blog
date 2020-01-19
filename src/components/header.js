import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `2rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        // padding: `1.45rem 1.0875rem`,
        padding: `2rem 1.0875rem`,
        // textDecoration: `none`


      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            float: `left`,

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
              paddingLeft: 25,

              float: `right`

              
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
              float: `right`

      
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
              float: `right`

      
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
