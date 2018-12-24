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

const Industry = ({ data }) => (
  <Layout
    background={data.industryJson.background}
    title={data.industryJson.title}
  >
    <Box>
      <Title as="h2" size="large">
        {data.industryJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Break />
    <Video video={data.industryJson.video} />
    <Break />
    <TagGallery items={data.industryJson.tagGallery} />
    <Break />
    <Audio audio={data.industryJson.audio} />
    <Break />
    <Links links={data.industryJson.links} esri={data.industryJson.esri} />
  </Layout>
);

Industry.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Industry;

export const query = graphql`
  query IndustryQuery {
    industryJson {
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
