import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import TagGallery from 'components/imgTagGallery';
import Audio from 'components/audio';
import Links from 'components/links';
import Video from 'components/video';
import Break from 'components/break';

const Ethnicity = ({ data }) => (
  <Layout
    background={data.ethnicityJson.background}
    title={data.ethnicityJson.title}
  >
    <Box>
      <Title as="h2" size="large">
        {data.ethnicityJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Break />
    <Video video={data.ethnicityJson.video} />
    <Break />
    <TagGallery items={data.ethnicityJson.tagGallery} />
    <Break />
    <Audio audio={data.ethnicityJson.audio} />
    <Break />
    <Links links={data.ethnicityJson.links} esri={data.ethnicityJson.esri} />
  </Layout>
);

Ethnicity.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Ethnicity;

export const query = graphql`
  query EthnicityQuery {
    ethnicityJson {
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
      audio {
        title
        path
      }
      links {
        title
        path
      }
      esri {
        title
        path
      }
      video {
        title
        path
      }
    }
  }
`;
