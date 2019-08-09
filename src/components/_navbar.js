import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import '../css/_navbar.css';

class _navbar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
          };
        this.toggle = this.toggle.bind(this);
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
        return(
            <React.Fragment>
                <Navbar light expand="md">
                <NavbarBrand href="/">E-Week</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>Schedule</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href='/schedule'>Event</DropdownItem>
                            <DropdownItem href="/schedule/planning">Planning</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/scores">Scores</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>Forms</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem href="/forms/attendance">Attendance</DropdownItem>
                            <DropdownItem href="/forms/placement">Judging</DropdownItem>
                            <DropdownItem href="/forms/complaint">Complaints</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>Resources</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>Q&A Forums</DropdownItem>
                            <DropdownItem href="/links">Useful Links</DropdownItem>
                            <DropdownItem>Contact Us</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
        );
    }
}

export default _navbar;