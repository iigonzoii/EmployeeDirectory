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

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((fetchData) => {
        setEmployeeArray(fetchData.results);
      });
  }, []);

  const sortByName = () => {
    
    let sortArray = employeeArray.sort((a, b) => {
      return (a.name.first > b.name.first ? 1 : -1);
    });
    setEmployeeArray([...sortArray]);
    console.log(employeeArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const handleNameSearch = (e) => {
    //  here we filter through employee array and we use include to go through each employees name and return only employees who match users input
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
      <button onClick={sortByName}></button>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleNameSearch} />
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
                  <img
                    src={each.picture.thumbnail}
                    alt={"thumbnail of employee"}
                  />
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
