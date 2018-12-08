import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import TagGallery from 'components/imgTagGallery';

const Agriculture = ({ data }) => (
  <Layout
    background={data.agricultureJson.background}
    title={data.agricultureJson.title}
  >
    <Box>
      <Title as="h2" size="large">
        {data.agricultureJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <TagGallery items={data.agricultureJson.tagGallery} />
    <div style={{ height: '50vh' }} />
  </Layout>
);

Agriculture.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Agriculture;

export const query = graphql`
  query AgricultureQuery {
    agricultureJson {
      title
      background
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      tagGallery {
        title
        path
      }
    }
  }
`;
