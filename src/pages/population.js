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

const Population = ({ data }) => (
  <Layout
    background={data.populationJson.background}
    title={data.populationJson.title}
  >
    <Box>
      <Title as="h2" size="large">
        {data.populationJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Break />
    <Video video={data.populationJson.video} />
    <Break />
    <TagGallery items={data.populationJson.tagGallery} />
    <Break />
    <Audio audio={data.populationJson.audio} />
    <Break />
    <Links links={data.populationJson.links} esri={data.populationJson.esri} />
  </Layout>
);

Population.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Population;

export const query = graphql`
  query PopulationQuery {
    populationJson {
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
