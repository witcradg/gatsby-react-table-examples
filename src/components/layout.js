import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/global.css"

const Layout = (props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <React.Fragment>
      <Header siteTitle={props.title || data.site.siteMetadata?.title || `Title`} />
      <div className= 'mt-0 mb-0 mx-auto max-w-5xl p-5 pt-6 pl-4'>
        <main>{props.children}</main>
      </div>
      </React.Fragment>
  )
}

export default Layout
