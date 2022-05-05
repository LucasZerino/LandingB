import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Hero from '../sections/hero/Herodev.js'
import Descricao from '../sections/Descrição/Descricao'
import Publi from '../sections/Publi/Publi'
import Footercontact from '../sections/footercontact/footercontact'


class Index extends React.Component {

  

  render() {
    const { site } = this.props.data

    return (
      <div>
        <Helmet>
          <title>{site.meta.title}</title>
          <meta name="description" content={site.meta.description} />
        </Helmet>
        <Layout
          isHome={true}
          sections={['HOME', 'PLANOS', 'CONTRATAR']}
        >
          <Hero />
          <Descricao />
          <Publi />
          <Footercontact/>
        </Layout>
      </div>
    )
  }
}

export default Index

export const creativeOneQuery = graphql`
  query {
    site {
      meta: siteMetadata {
        title
        description
      }
    }
  }
`