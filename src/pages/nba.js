import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Nba = () => {
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from NBA Page</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Nba
