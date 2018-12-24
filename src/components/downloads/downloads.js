import React from 'react';
import {
  Container,
  DownloadsContainer,
  Download,
  Anchor,
  Title,
  Subtitle,
} from './downloads.css';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Downloads = () => (
  <Container>
    <Title>Downloads</Title>
    <DownloadsContainer>
      <Anchor
        href="https://ce-cdn-space.sfo2.digitaloceanspaces.com/alan/SQ3R%20alt.docx"
        download="sq3r-alt.docx"
      >
        <Download icon={faFileDownload} />
        <Subtitle>SQ3R</Subtitle>
      </Anchor>
      <Anchor
        href="https://ce-cdn-space.sfo2.digitaloceanspaces.com/alan/SQ3R%20Reading%20Worksheet-advanced.docx"
        download="sq3r-advanced.docx"
      >
        <Download icon={faFileDownload} />
        <Subtitle>SQ3R Advanced</Subtitle>
      </Anchor>
    </DownloadsContainer>
  </Container>
);

export default Downloads;
