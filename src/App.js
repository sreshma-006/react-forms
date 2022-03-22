import React from "react";
import "./App.css";
import Frompersonal from "./components/Formpersonal";
import Business from "./components/Business";
import Currency from "./components/Currency";
import Address from "./components/Address";
function App() {
  const [fromData, setfromData] = React.useState({
    step: 1,
    firstname: "",
    lastname: "",
    email: "",
    businessname: "",
    phonenumber: "",
    country: "",
    currency: "",
    ach: "",
    accountnumber: "",
    accounttype: "",
    city: "",
    postalcode: "",
    address: "",
  });
  console.log(fromData)
  function nextstep() {
    setfromData((prev) => {
      return {
        ...prev,
        step: prev.step + 1,
      };
    });
  }
  function handleinnerChange(){
    setfromData(prev=>{
      return{
        ...prev,
        step:1
      }
    })
  }
  function handleinnerChange2(){
    setfromData(prev=>{
      return{
        ...prev,
        step:10
      }
    })
  }
  function prevstep() {
    setfromData((prev) => {
      return {
        ...prev,
        step: prev.step - 1,
      };
    });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setfromData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const { step } = fromData;
  switch (step) {
    case 1:
      return <Frompersonal 
      next={nextstep}
      prev={prevstep}
      renderchange={handleChange}
      innerChange={handleinnerChange}
      data={fromData}
      />;
      case 2:
      return <Business 
      next={nextstep}
      prev={prevstep}
      renderchange={handleChange}
      data={fromData}
      innerChange={handleinnerChange}
      />;
    case 3:
      return <Currency 
      next={nextstep}
      prev={prevstep}
      renderchange={handleChange}
      data={fromData}
      />;
    case 4:
      return <Address 
      prev={prevstep}
      renderchange={handleChange}
      data={fromData}/>;
    default:
      return <Frompersonal />;
  }
}

export default App;