import { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  let isDisabled = (height <= 2.5 && weight <= 300);

  const handleWeight = (event) => {
    setWeight(event.target.value);
    console.log("weight", weight);
  };

  const handleHeight = (event) => {
    setHeight(event.target.value);
    console.log("height", height);
  };

  const handleClick = () => {
    let calcbmi;
    if (height > 0 && height <= 2.5 && weight > 0 && weight <= 300) {
      calcbmi = weight / (height * height);
      setBmi(calcbmi.toFixed(1));
    } else setBmi("PLEASE ENTER DETAILS");
    console.log("bmi", bmi);
  };
  if (bmi <= 18.4) {
    var underweight = bmi;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    var normal = bmi;
  } else if (bmi >= 25.0 && bmi <= 39.9) {
    var overweight = bmi;
  } else if (bmi >= 40.0) {
    var obese = bmi;
  }
  return (
    <>
      <h1>My BMI Calculator</h1>
      <div className="inputs">
        <input
          type="number"
          step="0.01"
          placeholder="Enter Height"
          value={height}
          onChange={handleHeight}
          max="2.5"
          inputMode="text"
        ></input>m &nbsp;&nbsp; (max 2.5m)
        <br />
        <input
          type="number"
          step="1"
          placeholder="Enter Weight"
          value={weight}
          onChange={handleWeight}
          max="300"
          inputMode="text"
        ></input>
        kg &nbsp;&nbsp; (max 300kg)
        <br /> <br />
      </div>
      <button
        className={isDisabled ? "calcbtn": "disablebtn"}
        onClick={handleClick}
        disabled={ isDisabled ? false : true}
      >
        CALCULATE
      </button>
      <p style={{ fontSize: "28px", fontWeight: "bold" }}>BMI :{" " + bmi}</p>
      <hr style={{ width: "30%", margin: "auto" }} />
      <h3>BMI REFERENCE TABLE</h3>
      <table className="tbl" cellSpacing={0} cellPadding={5}>
        <tbody>
          <tr>
            <th className="thead">BMI</th>
            <th>Status</th>
          </tr>
          <tr>
            <td className="tdbmi1">less than 18.4</td>
            <td className={underweight ? "tdval1glow" : "tdval1"}>
              Underweight
            </td>
          </tr>
          <tr>
            <td className="tdbmi2">18.5 - 24.9</td>
            <td className={normal ? "tdval2glow" : "tdval2"}>Normal</td>
          </tr>
          <tr>
            <td className="tdbmi3">25.0 - 39.9</td>
            <td className={overweight ? "tdval3glow" : "tdval3"}>Overweight</td>
          </tr>
          <tr>
            <td className="tdbmi4">more than 40.0</td>
            <td className={obese ? "tdval4glow" : "tdval4"}>Obese</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
