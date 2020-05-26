import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const HeaderStyled = styled.header`
  background: rebeccapurple;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  .page-link {
    margin-left: 15px;
    color: white;
    float: left;
    display: block;
    text-align: center;
    padding: 14px 16px;
  }
  .page-link a {
    color: white;
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => {
  // const data = useStaticQuery(graphql``)

  return (
    <HeaderStyled>
      <div>
        <ul>
          <li className="page-link">
            {" "}
            <Link to="/">{siteTitle}</Link>
          </li>
          <li className="page-link">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="page-link">
            <Link to="/nfl">NFL</Link>
          </li>
          <li className="page-link">
            <Link to="/nba">NBA</Link>
          </li>
          <li className="page-link">
            <Link to="/mlb">MLB</Link>
          </li>
        </ul>
      </div>
    </HeaderStyled>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
