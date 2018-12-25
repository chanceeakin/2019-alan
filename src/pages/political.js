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

const Political = ({ data }) => (
  <Layout
    background={data.politicalJson.background}
    title={data.politicalJson.title}
  >
    <Box>
      <Title as="h2" size="large">
        {data.politicalJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Break />
    <Video video={data.politicalJson.video} />
    <Break />
    <TagGallery items={data.politicalJson.tagGallery} />
    <Break />
    <Audio audio={data.politicalJson.audio} />
    <Break />
    <Links links={data.politicalJson.links} esri={data.politicalJson.esri} />
  </Layout>
);

Political.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Political;

export const query = graphql`
  query PoliticalQuery {
    politicalJson {
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
