import React from 'react'
import Link from 'gatsby-link'
import Web3Container from '../components/Web3/Web3Container'

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Web3Container/>
    <p>...</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
