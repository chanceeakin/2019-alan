import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

export const DownloadsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  min-height: 20vh;

  ${MEDIA.TABLET`
    display: block;
  `};
`;

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  &:hover {
    color: inherit;
  }
`;

export const Download = styled(FontAwesomeIcon)`
  font-size: 5rem
  color: #777;
`;

export const Title = styled.h3`
  font-size: 3rem;
  align-self: center;
  padding: 0.5rem;
`;

export const Subtitle = styled.h3`
  font-size: 2rem;
  padding: 0.5rem;
`;
