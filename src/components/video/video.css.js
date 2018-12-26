import styled from 'styled-components';

export const Container = styled.div`
  padding: 4rem;
  width: calc(100vw - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const Title = styled.h3`
  align-self: center;
  font-size: 3rem;
`;

export const VideoContainer = styled.div`
  overflow: hidden;
  position: relative;
  padding-top: 56.25%;
  iframe {
    border: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
`;
