import React from "react";
import MenuNavbar from "./MenuNavbar";
import MenuList from "./MenuList";
class MenuWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedValue: "" };

    this.filterData = this.filterData.bind(this);
  }

  filterData(e) {
    this.setState({ selectedValue: e.currentTarget.innerHTML });
  }

  render() {
    const categories = Object.keys(this.props.data);

    var myarray = [];
    Object.entries(this.props.data).map(([category, dishes]) => {
      myarray.push([category, dishes]);
    });

    myarray = myarray.filter((dish) => {
      return dish[0].includes(this.state.selectedValue);
    });

    return (
      <div>
        <main>
          <div className="navbar">
            <MenuNavbar
              category={categories}
              filter={this.props.filter}
              filterData={this.filterData}
            />
          </div>
          <div className="content">
            <div className="main">
              <div>
                <MenuList list={myarray} filter={this.state.selectedValue} />
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
