

function SearchForm(props) {
    return (
        /*    <Header/>
              <Search/>
              <Table/>
              <TableData/>   */
        <>
            <form onSubmit={props.handleSubmit}>
                <input type="text" onChange={props.handleNameSearch} />
            </form>
        </>
    );
}

export default SearchForm;
