import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Figure = styled.figure``;

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

export const Image = styled.img`
  width: calc(33vw - 5rem);
  height: auto;
  border: 1px solid #e5e5e5;

  ${MEDIA.TABLET`
    width: calc(100vw - 8rem);
  `};
`;
