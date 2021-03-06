import React from 'react';
import { Transition } from 'react-spring';
import {
  Container,
  Button,
  Dropdown,
  DropdownList,
  StyledLink,
} from './nav.css';

class Nav extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    const { displayMenu } = this.state;
    return (
      <Container>
        <Dropdown>
          <Button onClick={this.showDropdownMenu}>Content</Button>
          <Transition
            items={displayMenu}
            from={{ opacity: 0, transform: 'translateY(-10px)' }}
            enter={{ opacity: 1, transform: 'translateY(0px)' }}
            leave={{ opacity: 0, transform: 'translateY(-10px)' }}
          >
            {displayMenu =>
              displayMenu &&
              (props => {
                return (
                  <ul style={props}>
                    <DropdownList>
                      <StyledLink to="/agriculture">Agriculture</StyledLink>
                    </DropdownList>
                    <DropdownList>
                      <StyledLink to="/development">Development</StyledLink>
                    </DropdownList>
                    <DropdownList>
                      <StyledLink to="/ethnicity">Ethnicity</StyledLink>
                    </DropdownList>
                    <DropdownList>
                      <StyledLink to="/folkCulture">Folk Culture</StyledLink>
                    </DropdownList>
                    <DropdownList>
                      <StyledLink to="/industry">Industry</StyledLink>
                    </DropdownList>
                    <DropdownList>
                      <StyledLink to="/language">Language</StyledLink>
                    </DropdownList>
                    <DropdownList>
                      <StyledLink to="/migration">Migration</StyledLink>
                    </DropdownList>
                    <DropdownList>
                      <StyledLink to="/natureAndPerspective">
                        Nature and Perspective
                      </StyledLink>
                    </DropdownList>
                    <DropdownList>
                      <StyledLink to="/political">Political</StyledLink>
                    </DropdownList>
                    <DropdownList>
                      <StyledLink to="/population">Population</StyledLink>
                    </DropdownList>
                    <DropdownList>
                      <StyledLink to="/religion">Religion</StyledLink>
                    </DropdownList>
                    <DropdownList>
                      <StyledLink to="/services">Services</StyledLink>
                    </DropdownList>
                    <DropdownList>
                      <StyledLink to="/urban">Urban</StyledLink>
                    </DropdownList>
                  </ul>
                );
              })
            }
          </Transition>
        </Dropdown>
      </Container>
    );
  }
}
export default Nav;
