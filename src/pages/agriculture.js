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
    <Break />
    <Video video={data.agricultureJson.video} />
    <Break />
    <TagGallery items={data.agricultureJson.tagGallery} />
    <Break />
    <Audio audio={data.agricultureJson.audio} />
    <Break />
    <Links
      links={data.agricultureJson.links}
      esri={data.agricultureJson.esri}
    />
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
