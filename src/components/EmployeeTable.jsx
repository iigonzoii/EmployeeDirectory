function EmployeeTable(props) {
    return (
        <>
            <table style={{ width: "100%" }}>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th> Firstname
                            <button onClick={props.sortByName}>sort</button>
                            </th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>CellPhone</th>
                    </tr>
                </thead>
                {props.employeeArrayFiltered.map((each, index) => {
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

export default EmployeeTable;
