import React from "react";
function Formpersonal(props) {
  return (
    <form className="form-personal">
        
        <span className="span1">1</span><span className="span3">---------------------------------</span><span className="span2">2</span><span className="span3">---------------------------------</span><span className="span2">3</span><br />
        <div className="nav-bar">
        <button onClick={props.innerChange}  className="inner-nav">Personal</button>
        <button onClick={props.next}  className="inner-nav">Business</button><br />
        </div>
      <label>First Name:</label>
      <br />
      <input
        type="text"
        placeholder="First name"
        name="firstname"
        onChange={props.renderchange}
        value={props.data.firstname}
      />{" "}
      <br />
      <label>Last Name:</label>
      <br />
      <input
        type="text"
        placeholder="last name"
        name="lastname"
        onChange={props.renderchange}
        value={props.data.lastname}
      />
      <br />
      <label>Email:</label>
      <br />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={props.renderchange}
        value={props.data.email}
      />
      <br />
      <label>Phone Number:</label>
      <br />
      <input
        type="text"
        placeholder="Phone number"
        name="phonenumber"
        onChange={props.renderchange}
        value={props.data.phonenumber}
      />
      <br />
      <button className="link1" onClick={props.next}>
        NEXT
      </button>
    </form>
  );
}
export default Formpersonal;