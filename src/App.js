import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
//todo step 6 sort
// this will be the carrot that you click and have employees displayed in descending or ascending order

//todo step 7 css

//todo step 8 read me

//todo step 9 refactor after mvp is reached

function App() {
  const [employeeArray, setEmployeeArray] = useState([]);
  // const [inputsObj, setInputsObj] = useState({});

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((fetchData) => {
        // console.log(fetchData.results);
        setEmployeeArray(fetchData.results);
      });
  }, []);

  // const handleInputs = (e) => {
  //   // set our state variable of an empty object to clone
  //   // step one we get something back from state
  //   var clone = inputsObj;
  //   // here we are using [] notation to go through an object because we dont know what the key will be, only the value
  //   //step two we do something to state
  //   clone[e.target.name] = e.target.value;
  //   // here we update our state variable with the new value
  //   // step three then we set state back to updated value
  //   setInputsObj(clone);

  //   console.log({ ...inputsObj });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleNameSearch = (e) => {
    //  here we filter through employee array and we use include not as an array method but as a string method to go through each employees name and return only employees who match our target value
    let smallerArray = employeeArray.filter((each) => {
      return (
        each.name.first.toLowerCase().includes(e.target.value.toLowerCase()) ||
        each.name.last.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setEmployeeArray(smallerArray);
  };

  return (
    <>
      {/* name represents the key and "userInput value" represents the input value */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleNameSearch} />
      </form>

      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>CellPhone</th>
          </tr>
        </thead>
        {employeeArray.map((each, index) => {
          return (
            <tbody key={index}>
            <tr>
              <td>
                <img src={each.picture.thumbnail} alt={"thumbnail of employee"}/>
              </td>
              <td>{each.name.first}</td>
              <td>{each.name.last}</td>
              <td>{each.email}</td>
              <td>{each.cell}</td>
            </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
}

export default App;
