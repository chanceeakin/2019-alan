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

const FolkCulture = ({ data }) => (
  <Layout
    background={data.folkCultureJson.background}
    title={data.folkCultureJson.title}
  >
    <Box>
      <Title as="h2" size="large">
        {data.folkCultureJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Break />
    <Video video={data.folkCultureJson.video} />
    <Break />
    <TagGallery items={data.folkCultureJson.tagGallery} />
    <Break />
    <Audio audio={data.folkCultureJson.audio} />
    <Break />
    <Links
      links={data.folkCultureJson.links}
      esri={data.folkCultureJson.esri}
    />
  </Layout>
);

FolkCulture.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FolkCulture;

export const query = graphql`
  query FolkCultureQuery {
    folkCultureJson {
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
