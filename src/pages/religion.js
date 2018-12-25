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

const Religion = ({ data }) => (
  <Layout
    background={data.religionJson.background}
    title={data.religionJson.title}
  >
    <Box>
      <Title as="h2" size="large">
        {data.religionJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Break />
    <Video video={data.religionJson.video} />
    <Break />
    <TagGallery items={data.religionJson.tagGallery} />
    <Break />
    <Audio audio={data.religionJson.audio} />
    <Break />
    <Links links={data.religionJson.links} esri={data.religionJson.esri} />
  </Layout>
);

Religion.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Religion;

export const query = graphql`
  query ReligionQuery {
    religionJson {
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
