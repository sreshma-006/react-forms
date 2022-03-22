import React from "react";
function Business(props){
    return(
        <div>
        <form className="form-personal" action="">
        <span className="span1">1</span><span className="span3">---------------------------------</span><span className="span2">2</span><span className="span3">---------------------------------</span><span className="span2">3</span><br />
        <div className="nav-bar">
        <button onClick={props.prev}  className="inner-nav">Personal</button>
        <button onClick={props.next}  className="inner-nav">Business</button><br />
        </div>
        <label>Business Name:</label>
            <input type="text" placeholder="Business name" /> <br />
            <label>Email:</label>
            <input type="email" placeholder="Email" /><br />
            <label>Phone Number:</label>
            <input type="text" placeholder="Phone number" /><br />
            <button className="link1" onClick={props.next}>
        NEXT
      </button>
        </form>

        </div>
    )
}
export default Business