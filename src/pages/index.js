import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/layout';
import Gallery from 'components/gallery';
import Downloads from 'components/downloads';
import Title from 'components/title';
import Video from 'components/video';
import Break from 'components/break';
import { Container, Anchor } from 'components/links/links.css';

const Index = ({ data }) => (
  <Layout
    background={data.homeJson.background}
    // eslint-disable-next-line
    title={"Mr Cardon's AP Human Geography"}
  >
    <Title as="h2" size="large">
      {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
    </Title>
    <Break />
    <Video video={data.homeJson.video} />
    <Break />
    <Gallery items={data.homeJson.gallery} />
    <Break />
    <Downloads />
    <Container style={{ marginBottom: '3rem' }}>
      <Anchor
        style={{ fontSize: '5rem' }}
        href="https://calendar.google.com/calendar/embed?src=alan.cardon%40pfisd.net&amp;ctz=America/Chicago"
      >
        Calendar
      </Anchor>
    </Container>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      background
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      video {
        path
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
