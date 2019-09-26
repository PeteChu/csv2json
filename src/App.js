import React from "react";
import "./App.css";
import TextInput from "./components/TextInput";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput1: "",
      textInput2: "",
      convertTo: "JSON"
    };
    this._textInputHandler1 = this._textInputHandler1.bind(this);
    this._textInputHandler2 = this._textInputHandler2.bind(this);
  }

  _textInputHandler1(e) {
    this.setState({ textInput1: e.target.value });
  }

  _textInputHandler2(e) {
    this.setState({ textInput2: e.target.value });
  }

  _convert() {
    const text = this.state.textInput1;

    switch (this.state.convertTo) {
      case "JSON":
        this._convertCSVToJSON(text);
        break;
      case "CSV":
        this._convertJSONToCSV(text);
        break;
      default:
        this._convertCSVToJSON(text);
    }
  }

  _clear() {
    this.setState({ textInput1: "", textInput2: "" });
  }

  _convertCSVToJSON(csv) {
    // TODO Convert JSON to CSV
    let json = [];
    if (this._IsValidCSV(csv)) {
      let data = csv.trim().split("\n");
      let columnName = data[0]
        .split(",")
        .map(name => name.trim().replace(/["]/g, ""));
      let csvData = data.slice(1).map(line => line.split(","));
      json = csvData.map(row => {
        let tmp = {};
        row.map((value, index) => {
          tmp[columnName[index]] = value.trim().replace(/["]/g, "");
        });
        return tmp;
      });
    }
    this.setState({ textInput2: JSON.stringify(json, undefined, 4) });
  }

  _convertJSONToCSV(json) {
    // TODO Convert CSV to JSON
    console.log("Convert JSON to CSV");
  }

  _IsValidCSV() {
    return true;
  }

  _IsValidJSON() {
    return true;
  }

  render() {
    return (
      <div className="App">
        <h1 className="Title">CSV2JSON</h1>
        <TextInput
          styleName="TextInput InputText"
          placeholder="Place your input here ..."
          text={this.state.textInput1}
          onChange={this._textInputHandler1}
        />
        <div className="Actions">
          <button
            className="ActionButton"
            id="convert"
            onClick={this._convert.bind(this)}
          >
            Convert
          </button>
          <button
            className="ActionButton"
            id="clear"
            onClick={this._clear.bind(this)}
          >
            Clear
          </button>
        </div>
        <TextInput
          styleName="TextInput InputText"
          text={this.state.textInput2}
          onChange={this._textInputHandler2}
        />
      </div>
    );
  }
}

export default App;
