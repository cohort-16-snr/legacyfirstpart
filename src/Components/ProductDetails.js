import React from "react";
import "./ProductReview.css";
import Cart from "./Cart";
import InfoSizeAndQuantity from "./InfoSizeAndQuantity";
import Nav from "./Nav";
import Slides from "./Slides";
import StyleSelect from "./StyleSelect";
import axios from "axios";

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      styles: {},
      related: {},
      displayedStyle: {},
    };
    this.getStyle = this.getStyle.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344",
        {
          headers: {
            Authorization: "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",
          },
        }
      )
      .then((data) =>
        this.setState({
          data: data.data,
        })
      )
      .then(() =>
        axios.get(
          "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/styles",
          {
            headers: {
              Authorization: "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",
            },
          }
        )
      )
      .then((styles) => this.setState({ styles: styles.data }))
      .then(
        () =>
          axios.get(
            "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/40344/related"
          ),
        {
          headers: {
            Authorization: "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",
          },
        }
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  getStyle(id) {
    const styles = this.state.styles;
    for (const style of styles) {
      if (style.style_id === id) {
        this.setState({ displayedStyle: style });
      }
    }
  }

  render() {
    return (
      <div className="App min-h-screen container mx-auto">
        <Nav />
        <div className=" grid grid-flow-col  ">
          <div className=" bg-transparent ">
            <Slides styles={this.state.styles.results} />
          </div>
          <div className="grid grid-flow-row">
            <InfoSizeAndQuantity
              ratingStar={this.state.styles}
              info={this.state.data}
            />
            <StyleSelect
              styleSelector={this.getStyle}
              styles={this.state.styles.results}
            />
            <Cart />
          </div>
        </div>
        <div className="grid grid-flow-col">
          <div className="">
            <h5>{this.state.data.name}</h5>
            <p>{this.state.data.description}</p>
          </div>
          <div className="">
            <ul>
              <li className="flex flex-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Some Stuff about guarantee
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
