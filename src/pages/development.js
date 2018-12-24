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
    background={data.developmentJson.background}
    title={data.developmentJson.title}
  >
    <Box>
      <Title as="h2" size="large">
        {data.developmentJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Break />
    <Video video={data.developmentJson.video} />
    <Break />
    <TagGallery items={data.developmentJson.tagGallery} />
    <Break />
    <Audio audio={data.developmentJson.audio} />
    <Break />
    <Links
      links={data.developmentJson.links}
      esri={data.developmentJson.esri}
    />
  </Layout>
);

Agriculture.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Agriculture;

export const query = graphql`
  query DevelopmentQuery {
    developmentJson {
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
