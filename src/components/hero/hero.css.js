import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  margin-top: 0;
  width: calc(100vw);
  height: 85vh;
  overflow-y: hidden;
  z-index: 1;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  opacity: 0.8;

  ${MEDIA.TABLET`
    display: none;
  `};
`;

export const Title = styled.h1`
  position: absolute;
  font-size: 85px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  ${MEDIA.TABLET`
  font-size: 7rem;
  `};
`;
