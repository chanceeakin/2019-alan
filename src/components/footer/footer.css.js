import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 25vh;
  background-color: #dedede;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 3rem;
`;

export const Subtitle = styled.h5`
  font-size: 2rem;
  align-self: center;
`;

export const Paragraph = styled.p``;

export const Link = styled.a`
  text-decoration: none;
  &:hover {
    color: inherit;
  }
`;

export const Bottom = styled.div`
  width: calc(100vw - 2rem);
  background-color: #d0d0d0;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
`;
