import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 0;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h3`
  padding: 1rem;
  align-self: center;
  font-size: 3rem;
`;

export const Subtitle = styled.h5`
  padding: 1rem;
  align-self: center;
  font-size: 2rem;
`;

export const Anchor = styled.a`
  padding: 1rem;
  align-self: center;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  text-decoration: none;
  &:hover {
    color: #000;
  }
`;
