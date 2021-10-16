import React from "react";
import ProductDetails from "./Components/ProductDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data=[]
    };
  }
  getData(){
    axios.get
  }
  render() {
    return <ProductDetails />;
  }
}

export default App;
