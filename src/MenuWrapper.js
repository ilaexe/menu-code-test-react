import React from "react";
import MenuNavbar from "./MenuNavbar";
import MenuList from "./MenuList";
class MenuWrapper extends React.Component {
  render() {
    const categories = Object.keys(this.props.data);

    var myarray = [];
    Object.entries(this.props.data).map(([category, dishes]) => {
      myarray.push([category, dishes]);
    });

    return (
      <div>
        <main>
          <div className="navbar">
            <MenuNavbar category={categories} />
          </div>
          <div className="content">
            <div className="main">
              <div>
                <MenuList list={myarray} />
              </div>
            </div>
            <div className="sidebar">
              <h1>Cart component</h1>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default MenuWrapper;
