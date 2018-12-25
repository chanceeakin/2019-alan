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

const Urban = ({ data }) => (
  <Layout background={data.urbanJson.background} title={data.urbanJson.title}>
    <Box>
      <Title as="h2" size="large">
        {data.urbanJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Break />
    <Video video={data.urbanJson.video} />
    <Break />
    <TagGallery items={data.urbanJson.tagGallery} />
    <Break />
    <Audio audio={data.urbanJson.audio} />
    <Break />
    <Links links={data.urbanJson.links} esri={data.urbanJson.esri} />
  </Layout>
);

Urban.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Urban;

export const query = graphql`
  query UrbanQuery {
    urbanJson {
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
