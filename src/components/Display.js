import React from "react";

function Display(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        {props.children}
        <button className="close-btn" onClick={props.close}>
          Close
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}
export default Display;
