import React from "react";
import MenuNavbar from "./MenuNavbar";
import MenuList from "./MenuList";
import Cart from "./Cart";
import Swal from 'sweetalert2'



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
        if(it.name == "Cheesecake"){
          Swal.fire({
            title:'Oops',
            text:"There is just 1 piece of Cheesecake left"
           })
        }

         it.count++;
         alreadyPresent = true;
      }
    });
    if (!alreadyPresent) {
      cartItems.push({ ...dish, count: 1 });
      console.log("Cartitems",cartItems)
    }
    this.setState({ cartItems }); 

    this.checkConstraint(cartItems);

  }



  removeFromCart(dish) {
    const cartItems = this.state.cartItems.slice();

    cartItems.forEach((it) => {
      if (it.id == dish.id) {
        it.count -= 1;
      }
      if(it.count <1){
      cartItems.splice(cartItems.indexOf(it), 1);
      }
    })
    
    this.setState({cartItems});
  }

  filterData(e) {
    this.setState({ selectedValue: e.currentTarget.innerHTML });
  }


  checkConstraint(cartItems){

    var result = [];
    cartItems.reduce(function (res, value) {
      if (!res[value.category]) {
        res[value.category] = { category: value.category, count: 0 };
        result.push(res[value.category]);
      }
      res[value.category].count += value.count;
      return res;
    }, {});

    result.forEach(it=>{
       if(it.count > 2){
         Swal.fire({
           title:'Oops',
           text:"you cannot have more than 2 dish per category"
          })
        }
    })

  }



  render() {
    const categories = Object.keys(this.props.data);

    let myarray = [];
    Object.entries(this.props.data).map(([category, dishes]) => {
       dishes = dishes.map((element) => ({ ...element,
        category: category
      }))
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
