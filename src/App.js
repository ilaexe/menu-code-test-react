import React from 'react';
import { render } from 'react-dom';
import MenuWrapper from './MenuWrapper';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import data from "../menu-data.json";



class App extends React.Component {

  constructor(){
      super();
      this.state ={
            mydata : data,
      };
  }



  filterDishes(key){

  }

    render() {

        return <div className="App">
                <header>
                    <h1>OpenTable Menu</h1>
                </header>
                <main>
                <MenuWrapper data={this.state.mydata} />
                </main>
               </div>;
    }
}

render(<App />, document.getElementById('root'));
