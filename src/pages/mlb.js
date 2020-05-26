import React, { useEffect } from "react"
import { Link } from "gatsby"
import MyD3Component from "../components/mlb/BarChart"

import Layout from "../components/layout"
import SEO from "../components/seo"

const data = [
  [400, 200],
  [210, 140],
  [722, 300],
  [70, 160],
  [250, 50],
  [110, 280],
  [699, 225],
  [90, 220],
]

const Mlb = () => {
  useEffect(() => {}, [])

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from MLB Page</h1>
      <MyD3Component data={data} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default Mlb
