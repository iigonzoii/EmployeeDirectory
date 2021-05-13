import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
import EmployeeTable from "./components/EmployeeTable";
import SearchForm from "./components/SearchForm";
//todo step 7 css

//todo step 8 read me

//todo step 9 refactor after mvp is reached

function App() {
  const [employeeArray, setEmployeeArray] = useState([]);
  const [employeeArrayFiltered, setEmployeeArrayFiltered] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=15")
      .then((response) => response.json())
      .then((fetchData) => {
        setEmployeeArray(fetchData.results);
        setEmployeeArrayFiltered(fetchData.results);
      });
  }, []);
  // *keep in app?
  const sortByName = () => {
    // props.employeeArray
    let sortArray = employeeArray.sort((a, b) => {
      return a.name.first > b.name.first ? 1 : -1;
    });
    // props.setEmployeeArray
    setEmployeeArray([...sortArray]);
    console.log(employeeArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // *keep these functions in app?
  const handleNameSearch = (e) => {
    //  here we filter through employee array and we use include to go through each employees name and return only employees who match users input
    let smallerArray = employeeArray.filter((each) => {
      return (
        each.name.first.toLowerCase().includes(e.target.value.toLowerCase()) ||
        each.name.last.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    setEmployeeArrayFiltered(smallerArray);
  };

  return (
    /*    <Header/>

      <Search/>
      <Table/>
      <TableData/>   */
    <>
      <header>
        Employee Directory
      </header>
      <SearchForm
        handleSubmit={handleSubmit}
        handleNameSearch={handleNameSearch}
      />
      <EmployeeTable
        sortByName={sortByName}
        employeeArrayFiltered={employeeArrayFiltered}
      />
    </>
  );
}

export default App;
