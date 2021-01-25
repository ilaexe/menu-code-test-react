import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import "./MenuList.css";

class MenuList extends React.Component {
  render() {
    var dishes = this.props.list;

    return (
      <div>
        {dishes.map((element, index) => {
          return (
            <div key={index}>
              <h1>{element[0]}</h1>
              <ul className="dishes">
                <div>
                  <MenuItem item={element[1]} />
                </div>
              </ul>
            </div>
          );
        })}
        )
      </div>
    );
  }
}

export default MenuList;
