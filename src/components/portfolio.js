import { useState,useContext } from "react";
import PassiveTrackingCard from "./PassiveTrackingCard";

import FactorsCard from "./FactorsCard";
import NoteContext from "./noteContext";
import Charts from "./Charts";
const Portfolio =  () =>{
    const a = useContext(NoteContext)
    return (
        <div style={a.clicked ? a.block : a.none}>
        <h3 className="sector">Your sector Wise Distribution Is here</h3>
        <Charts></Charts>
        <FactorsCard
          snpreturns={a.snpreturns}
          value={a.value}
          portreturns={a.portreturns}
          gain={a.gain}
          initial={a.initial}
          surplus={a.surplus}
        />
        {a.btnpop
          ? a.companies.map((item, index) => {
              return (
                <PassiveTrackingCard
                  id={index}
                  name={item.name}
                  clr={item.color}
                  allocation={item.allocation}
                  value={item.value}
                  onCheck={a.popup}
                />
              );
            })
          : a.comp.map((item) => {
              return (
                <PassiveTrackingCard
                  name={item.name}
                  clr={item.color}
                  allocation={item.allocation}
                  value={item.value}
                />
              );
            })}
        {!a.btnpop ? (
          <button className="close-btn" onClick={a.popbtn}>
            Close
          </button>
        ) : null}
      </div>
    )
}

export default Portfolio