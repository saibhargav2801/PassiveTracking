
import { useState,useContext } from "react";
import Chart from "react-apexcharts";
import Display from "./Display.js";
import NoteContext from "./noteContext";

const Charts = ()=>{
    const a = useContext(NoteContext)

    return (<div className="charts">
    <div className="pie">
      <p className="capital">{a.capital}$</p>
      <Chart
        style={{ textAlign: "left" }}
        options={a.options}
        series={a.options.series}
        type="donut"
        width="400"
      />
    </div>
    <div className="area">
      <Chart
        options={a.state.options}
        series={a.state.series}
        type="area"
        height={250}
        width={350}
      />
    </div>
  </div>)
}
export default Charts