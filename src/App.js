import "./App.css";
import { useEffect, useState } from "react";
import React from "react";

// on page load we want to have a table display... make a table in html using jsx to populate in further steps
// !CHECK

// todostep one make a fetch to fill form on page load
// refer to tutorial components and props for the fetch we built  **CHECK**
// !CHECK

//todo step two make a form
// image, name, phone, email
// use map to create the table row by row?
// we need a row created for each person, we need their information displayed in each column **CHECK**
// !CHECK

//todo step three figure out what data goes where
// check out docs on api **CHECK**
// !CHECK

//todo step 4 put data in form from fetch
// !CHECK

//todo step 5 filter
// make search input field that ties to the table and uses filter to update the fields

//todo step 6 sort
// this will be the carrot that you click and have employees displayed in descending or ascending order

//todo step 7 css

//todo step 8 read me

//todo step 9 refactor after mvp is reached

// ? video walkthrough, css issue,  onchange or handleinput/handle submit? i think another question but i cant remember.

function App() {
  const [employeeArray, setEmployeeArray] = useState([]);
  const [inputsObj, setInputsObj] = useState({});

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((fetchData) => {
        console.log(fetchData.results);
        setEmployeeArray(fetchData.results);
      });
  }, []);

  const handleInputs = (e) => {
    // set our state variable of an empty object to clone
    // step one we get something back from state
    var clone = inputsObj;
    // here we are using [] notation to go through an object because we dont know what the key will be, only the value
    //step two we do something to state
    clone[e.target.name] = e.target.value;
    // here we update our state variable with the new value
    // step three then we set state back to updated value
    setInputsObj(clone);

    console.log({ ...inputsObj });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleNameSearch = (e) => {
    //  here we filter through employee array and we use include not as an array method but as a string method to go through each employees first name and return only employees who match our target value
    let smallerArray = employeeArray.filter((each) => {
      return each.name.first.toLowerCase().includes(e.target.value.toLowerCase()) || each.name.last.toLowerCase().includes(e.target.value.toLowerCase()) ;
    });
    setEmployeeArray(smallerArray)
    // console.log(smallerArray);
  };

  return (
    <>
      {/* name represents the key and "userInput value" represents the input value */}
      <form onSubmit={handleSubmit}>
        {/* <input type="text" name="name" onChange={handleInputs} /> */}
        <input type="text" name="name" onChange={handleNameSearch}/>
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
      </table>
      {employeeArray.map((each, index) => {
        return (
          <tr key={index}>
            <td>
              <img src={each.picture.thumbnail} />
            </td>
            <td>{each.name.first}</td>
            <td>{each.name.last}</td>
            <td>{each.email}</td>
            <td>{each.cell}</td>
          </tr>
        );
      })}
    </>
  );
}

export default App;
