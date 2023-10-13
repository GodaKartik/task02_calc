import { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topRow: "",
      calculation: "",
      resultRow: "",
      operator: "",
    };
  }

  render() {
    const BUTTONS = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "="];
    const SYMBOLS = ["⌫", "/", "*", "-", "+"];
    let numbers = BUTTONS.map((button) => {
      return (
        <button
          className="calc-button"
          style={{
            color: "white",
            fontSize: "20px",
            backgroundColor: "#070B26",
            height: "70px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            if (button !== "=") {
              this.setState({ topRow: this.state.topRow.concat(button) });
            } else {
              this.setState({ resultRow: eval(this.state.topRow) });
            }
          }}
        >
          {button}
        </button>
      );
    });
    let symbols = SYMBOLS.map((symbol) => {
      return (
        <button
          style={{
            color: "white",
            fontSize: "20px",
            backgroundColor: "#070B26",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => {
            if (symbol === "⌫") {
              if (this.state.topRow.length > 0) {
                this.setState({ topRow: this.state.topRow.substring(0, this.state.topRow.length - 1) });
              }
            } else {
              if (!SYMBOLS.includes(this.state.topRow.slice(-1)) && this.state.topRow.length !== 0) {
                this.setState({ topRow: this.state.topRow.concat(symbol) });
              }
              if (this.state.resultRow.length !== 0) {
                this.setState({ topRow: this.state.resultRow + symbol, resultRow: "" });
              }
            }
          }}
        >
          {symbol}
        </button>
      );
    });
    return (
      <div
        style={{
          color: "white",
          backgroundColor: "#191970",
          width: "fit-content",
          borderRadius: "10px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "5%",
        }}
      >
        <div
          style={{
            textAlign: "right",
            padding: "2px",
            fontSize: "24px",
            height: "32px",
            color: "grey",
            backgroundColor: "#172D67",
            borderRadius: "10px 10px 0px 0px",
          }}
        >
          {this.state.topRow}
        </div>
        <div
          style={{
            textAlign: "right",
            padding: "10px",
            fontSize: "32px",
            height: "36px",
            backgroundColor: "#172D67",
          }}
        >
          {this.state.resultRow}
        </div>
        <div
          style={{
            display: "flex",
          }}
        >
          <span
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 75px)",
            }}
          >
            {numbers}
          </span>
          <span
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 75px)",
            }}
          >
            {symbols}
          </span>
        </div>
        <button
          onClick={() => {
            this.setState({ topRow: "", resultRow: "" });
          }}
          style={{
            width: "100%",
            color: "white",
            backgroundColor: "#070B26",
            border: "none",
            padding: "3%",
            borderTop: "0.5px white solid",
            cursor: "pointer",
            fontSize: "20px",
            borderRadius: "0px 0px 10px 10px",
          }}
        >
          Clear All
        </button>
      </div>
    );
  }
}

export default Calculator;
