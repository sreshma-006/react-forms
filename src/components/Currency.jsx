import React from "react";
function Currency(props) {
  return (
    <form className="form-personal" action="">
        <span className="span1">1</span><span className="span3">---------------------------------</span><span className="span1">2</span><span className="span3">---------------------------------</span><span className="span2">3</span><br />
      <label htmlFor="Country">Choose Country:</label>
      <br />
      <select
        name="country"
        id="Country"
        value={props.data.country}
        onChange={props.renderchange}
      >
        <option value="">--Choose Country--</option>
        <option value="savings account">United States</option>
        <option value="current account">India</option>
        <option value="savings account">Australia</option>
        <option value="Spain">Spain</option>
        <option value="NewZealand">NewZealand</option>
        <option value="South Africa">South Africa</option>
      </select>
      <br />
      <label htmlFor="Currency">Choose Currency:</label>
      <br />
      <select
        name="currency"
        id="Currency"
        value={props.data.currency}
        onChange={props.renderchange}
      >
        <option value="">--Choose Currency--</option>
        <option value="Rupee">Rupee</option>
        <option value="USD">USD</option>
        <option value="Australian Dollar">Australian Dollar</option>
        <option value="Euro">Euro </option>
        <option value="Newzeland Dollar">Newzeland Dollar</option>
        <option value="South African Rand">South African Rand</option>
      </select>
      <label>ACH Routing Number:</label>
      <input
        type="text"
        placeholder="ACH routing number"
        value={props.data.ach}
        onChange={props.renderchange}
        name="ach"
      />{" "}
      <br />
      <label>Account Number:</label><br />
      <input
        type="text"
        placeholder="Account number"
        value={props.data.accountnumber}
        onChange={props.renderchange}
        name="accountnumber"
      />
      <br />
      <label htmlFor="account">Account Type:</label>
      <br />
      <select
        name="accounttype"
        onChange={props.renderchange}
        value={props.data.accounttype}
        id="account"
      >
        <option value="">--Choose Account Type--</option>
        <option value="savings account">savings account</option>
        <option value="current account">current account</option>
      </select>
      <br />
      <button className="link1" onClick={props.prev}>
        PREVIOUS
      </button>
      <button className="link1" onClick={props.next}>
        NEXT
      </button>
    </form>
  );
}
export default Currency;