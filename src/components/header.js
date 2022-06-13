import react,{useContext} from 'react';
import NoteContext from "./noteContext";

const Header = ()=>{
    const a = useContext(NoteContext);
    return(
        <div className="but">
            {console.log(a.clicked)}
        <div style={a.clicked ? a.none : a.block}>
          <input
            type="input"
            onChange={a.track}
            placeholder="Enter your capital"
            pattern="[0-9]*"
            style={{
              display: "block",
              width: "20%",
              margin: "20px auto",
              padding: "3px",
              fontSize: "16px",
            }}
          />
          <button className="proceed-btn" onClick={a.displaypie}>
            Click Here to Proceed
          </button>
        </div>
      </div>
   )
}
export default Header