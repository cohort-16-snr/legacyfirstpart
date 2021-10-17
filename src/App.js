import React from "react";
import ProductDetails from "./Components/ProductDetails";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/")
      .then((data) => console.log(data));
  }
  render() {
    return <ProductDetails />;
  }
}

export default App;
