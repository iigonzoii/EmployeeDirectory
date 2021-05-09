import "./App.css";
import { useEffect, useState } from "react";

// on page load we want to have a table display... make a table in html using jsx to populate in further steps

// step one make a fetch to fill form on page load
// refer to tutorial components and props for the fetch we built

// step two make a form
// image, name, phone, email
// use map to create the table row by row?
// we need a row created for each person, we need their information displayed in each column

// step three figure out what data goes where
// check out docs on api

// step 4 put data in form from fetch

// step 5 filter
// make search input field that ties to the table and uses filter to update the fields

// step 6 sort
// step 7 css
// step 8 read me
// step 9 refactor after mvp is reached
function App() {
  const [employeeArray, setEmployeeArray] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((fetchData) => {
        console.log(fetchData.results)
        setEmployeeArray(fetchData.results);
      });
      ;
  }, []);

  return (
    <>
      {employeeArray.map((each, index) => {
        return (
          <div key={index}>
            <h2>{each.name.first} {each.name.last} {each.email} {each.cell}</h2>
          </div>
        );
      })}
    </>
  );
}

export default App;
