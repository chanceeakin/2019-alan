import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Gallery from 'components/gallery';

const Index = ({ data }) => (
  <Layout
    background={data.homeJson.background}
    title={"Mr Cardon's AP Human Geography"}
  >
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      background
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
