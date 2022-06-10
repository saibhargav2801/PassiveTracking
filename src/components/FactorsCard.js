import React from "react";

function FactorsCard(props) {
  return (
    <div className="factors">
      <div className="factors-card">
        <div className="fcard">
          <h3>{props.value}</h3>
          <p>Value Today</p>
        </div>
        <div className="fcard">
          <h3 style={{ color: "rgb(28, 105, 48)" }}>{props.portreturns}</h3>
          <p>Portfolio Returns</p>
        </div>
        <div className="fcard">
          <h3>{props.snpreturns}</h3>
          <p>S&P500 Returns</p>
        </div>
      </div>
      <div className="factors-card">
        <div className="fcard">
          <h3 style={{ color: "rgb(28, 105, 48)" }}>{props.surplus}</h3>
          <p>Surplus Returns</p>
        </div>
        <div className="fcard">
          <h3>{props.initial}</h3>
          <p>Initial Investment</p>
        </div>
        <div className="fcard">
          <h3>{props.gain}</h3>
          <p>Gain</p>
        </div>
      </div>
    </div>
  );
}
export default FactorsCard;
