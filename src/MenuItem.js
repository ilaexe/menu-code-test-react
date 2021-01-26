import React from "react";
import "./MenuItem.css";
import Card from "react-bootstrap/Card";

class MenuItem extends React.Component {


  render() {
    return (
      <div>
        <div>
          {this.props.item.map((item) => (
            <li key={item.id}>
              <div>
                <Card className="item">
                  <Card.Body>
                    <div>
                      <Card.Title>{item.name}</Card.Title>
                    </div>
                    <div>
                      <Card.Text>{item.price}</Card.Text>
                    </div>
                    <br></br>
                    <div className="row">
                      <img src="https://res.cloudinary.com/glovoapp/image/fetch///https://glovoapp.com/images/svg/plus.svg" onClick={() =>this.props.addToCart(item)} />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </li>
          ))}
        </div>
      </div>
    );
  }
}

export default MenuItem;
