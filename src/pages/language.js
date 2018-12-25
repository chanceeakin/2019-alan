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

const Language = ({ data }) => (
  <Layout
    background={data.languageJson.background}
    title={data.languageJson.title}
  >
    <Box>
      <Title as="h2" size="large">
        {data.languageJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </Box>
    <Break />
    <Video video={data.languageJson.video} />
    <Break />
    <TagGallery items={data.languageJson.tagGallery} />
    <Break />
    <Audio audio={data.languageJson.audio} />
    <Break />
    <Links links={data.languageJson.links} esri={data.languageJson.esri} />
  </Layout>
);

Language.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Language;

export const query = graphql`
  query LanguageQuery {
    languageJson {
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
