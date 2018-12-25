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

const Services = ({ data }) => (
  <Layout
    background={data.servicesJson.background}
    title={data.servicesJson.title}
  >
    <Box>
      <Title as="h2" size="large">
        {data.servicesJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Break />
    <Video video={data.servicesJson.video} />
    <Break />
    <TagGallery items={data.servicesJson.tagGallery} />
    <Break />
    <Audio audio={data.servicesJson.audio} />
    <Break />
    <Links links={data.servicesJson.links} esri={data.servicesJson.esri} />
  </Layout>
);

Services.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Services;

export const query = graphql`
  query ServicesQuery {
    servicesJson {
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
