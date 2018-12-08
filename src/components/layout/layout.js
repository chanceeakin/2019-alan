import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import Hero from 'components/hero';
import GlobalStyle from 'global.css.js';

const Layout = ({ data, children, background, title }) => (
  <div>
    <GlobalStyle />
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    <Hero background={background} title={title} />
    {children}
  </div>
);

Layout.propTypes = {
  background: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
