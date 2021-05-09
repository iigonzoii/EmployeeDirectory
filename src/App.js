import "./App.css";
import { useEffect, useState } from "react";

// on page load we want to have a table display... make a table in html using jsx to populate in further steps

// step one make a fetch to fill form on page load
// refer to tutorial components and props for the fetch we built  **CHECK**

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
    // ! when putting multiple query params it got really upset and refused to work with me. i had it set to bring back only the things i needed. it kept bringing back objects and wouldnt let me bring back more than one user. spent a bunch of time with react telling me .map isnt a function, when in reality i wasnt getting back an array, i was getting back an object
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
          <table key={index}>
            <tr>
    <th>Picture</th>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Email</th>
    <th>CellPhone</th>
  </tr>
  <tr>
<td><img src ={each.picture.thumbnail}/></td>
<td>{each.name.first}</td>
<td>{each.name.last}</td>
<td>{each.email}</td>
<td>{each.cell}</td>
  </tr>
          
            
          </table>
        );
      })}
    </>
  );
}

export default App;
