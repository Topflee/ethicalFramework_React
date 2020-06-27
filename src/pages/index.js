import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "../styles/QuestionFormat.css"
import Login from "../components/Login"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Login/>
    <br />
  </Layout>
)

export default IndexPage
