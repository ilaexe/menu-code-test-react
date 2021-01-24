import React from "react";
import "./MenuWrapper.css";
import Nav from "react-bootstrap/Nav";

class MenuNavbar extends React.Component {
  render() {
      return  <div className="filter">
      <Nav variant="pills" defaultActiveKey="/" className="NavbarItems" className="col-sm-6">
        { this.props.category.map( (cat, index) =>
          <Nav.Item key={index} >
          <span>{cat}</span>
          </Nav.Item>
        )}
        </Nav>
        </div>
  }
}

export default MenuNavbar;
