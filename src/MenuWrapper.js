import React from "react";
import MenuNavbar from "./MenuNavbar";
import MenuList from "./MenuList";
import Cart from "./Cart";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
class MenuWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedValue: "", cartItems: [] };

    this.filterData = this.filterData.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(dish) {
    const cartItems = this.state.cartItems.slice();
    let alreadyPresent = false;
    cartItems.forEach((it) => {
      if (it.id === dish.id) {
        it.count++;
        alreadyPresent = true;
      }
    });
    if (!alreadyPresent) {
      cartItems.push({ ...dish, count: 1 });
    }
    this.setState({ cartItems });
  }

  removeFromCart(dish) {
    const cartItems = this.state.cartItems.slice();

    cartItems.forEach((it) => {
      if (it.id == dish.id && it.count !== 0) {
        it.count -= 1;
      }
    });
    this.setState({ cartItems });
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
                <MenuList
                  list={myarray}
                  filter={this.state.selectedValue}
                  addToCart={this.addToCart}
                />
              </div>
            </div>
            <div className="sidebar">
              <h1>Cart</h1>
              <div>
                <Cart
                  cartItems={this.state.cartItems}
                  removeFromCart={this.removeFromCart}
                ></Cart>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default MenuWrapper;
