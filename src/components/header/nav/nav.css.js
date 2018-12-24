import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: block;
    list-style: none;
    padding: 0;
    position: absolute;
    z-index: 10;
    top: 20px;
    background: #fff;
    right: calc(-25% - 1rem);
    border: 1px solid #e5e5e5;
    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      padding: 1rem;
      text-align: center;
    }
  }
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const Button = styled.div`
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1.3rem;
`;

export const DropdownList = styled.li`
  position: relative;
  display: inline-block;
`;
