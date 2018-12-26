import React from 'react';
import {
  Container,
  Content,
  Title,
  Subtitle,
  Paragraph,
  Link,
  Bottom,
} from './footer.css';
import Github from './github';

const Footer = () => (
  <>
    <Container>
      <Content>
        <Title>Tutorial Hours</Title>
        <Paragraph>Wednesdays: 4:20pm-5:20pm</Paragraph>
        <Paragraph>Thursdays: 4:20pm-5:20pm</Paragraph>
      </Content>
      <Content>
        <Title>Contact</Title>
        <Link href="mailto:alan.cardon@pfisd.net">alan.cardon@pfisd.net</Link>
      </Content>
    </Container>
    <Bottom>
      <Subtitle>© 2018-2019 Alan Cardon and Chance Eakin</Subtitle>
      <a href="https://github.com/chanceeakin/2019-alan">
        <Github height={32} width={32} />
      </a>
    </Bottom>
  </>
);

export default Footer;
