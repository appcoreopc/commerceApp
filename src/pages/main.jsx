
import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

const IndexPage = (props) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>

    <Img fixed={props.data.imageMain.childImageSharp.fixed} width="1000" />
  </div>
)

export default IndexPage

export const pageQuery = graphql`
query {
    imageMain: file(relativePath: {eq: "1.jpg"}) {
      childImageSharp {
        fixed(width: 1000) {
          base64
          tracedSVG
          aspectRatio
          src
          width
          height
        }
      }
    }
  }
`;
