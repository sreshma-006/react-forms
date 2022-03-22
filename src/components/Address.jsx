import React from "react";
export default function Address(props) {
  return (
    <form className="form-personal">
        <span className="span1">1</span><span className="span3">---------------------------------</span><span className="span1">2</span><span className="span3">---------------------------------</span><span className="span1">3</span><br />
      <label>Country:</label>
      <br />
      <input type="text" placeholder=" Country" name="country" onChange={props.renderchange} value={props.data.country}/> <br />
      <label>City:</label>
      <br />
      <input type="text" placeholder="City" name="city" onChange={props.renderchange} value={props.data.city}/>
      <br />
      <label>Postal Code:</label>
      <br />
      <input type="email" placeholder="Postal Code" name="postalcode" onChange={props.renderchange} value={props.data.postalcode}/>
      <br />
      <label>Address:</label>
      <br />
      <input type="text" placeholder="Address" name="address" onChange={props.renderchange} value={props.data.address}/>
      <br />
      <button className="link1" onClick={props.prev}>
        PREVIOUS
      </button>
      <button type="submit" className="link1">
        SUBMIT
      </button>
    </form>
  );
}
