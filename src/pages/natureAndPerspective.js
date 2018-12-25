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

const NatureAndPerspective = ({ data }) => (
  <Layout
    background={data.natureAndPerspectiveJson.background}
    title={data.natureAndPerspectiveJson.title}
  >
    <Box>
      <Title as="h2" size="large">
        {
          data.natureAndPerspectiveJson.content.childMarkdownRemark
            .rawMarkdownBody
        }
      </Title>
    </Box>
    <Break />
    <Video video={data.natureAndPerspectiveJson.video} />
    <Break />
    <TagGallery items={data.natureAndPerspectiveJson.tagGallery} />
    <Break />
    <Audio audio={data.natureAndPerspectiveJson.audio} />
    <Break />
    <Links
      links={data.natureAndPerspectiveJson.links}
      esri={data.natureAndPerspectiveJson.esri}
    />
  </Layout>
);

NatureAndPerspective.propTypes = {
  data: PropTypes.object.isRequired,
};

export default NatureAndPerspective;

export const query = graphql`
  query NatureAndPerspectiveQuery {
    natureAndPerspectiveJson {
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
