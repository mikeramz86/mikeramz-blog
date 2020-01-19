import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectPage = () => (
  <Layout>
    <SEO title="Portfolio Page" />
    <h2>This will be your Portfolio Page</h2>
    <p>My projects will live here</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ProjectPage
