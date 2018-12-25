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

const Migration = ({ data }) => (
  <Layout
    background={data.migrationJson.background}
    title={data.migrationJson.title}
  >
    <Box>
      <Title as="h2" size="large">
        {data.migrationJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Break />
    <Video video={data.migrationJson.video} />
    <Break />
    <TagGallery items={data.migrationJson.tagGallery} />
    <Break />
    <Audio audio={data.migrationJson.audio} />
    <Break />
    <Links links={data.migrationJson.links} esri={data.migrationJson.esri} />
  </Layout>
);

Migration.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Migration;

export const query = graphql`
  query MigrationQuery {
    migrationJson {
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
