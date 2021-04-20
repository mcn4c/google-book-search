import React, { useState } from "react";
import Search from "../components/Search";
import Button from "../components/Button";
import API from "../utils/api";


function SearchPage() {


    const [searchValue, setSearchValue] = useState("")

    //captures user input
    const handleInputChange = e => {
        const { value } = e.target;
        setSearchValue(value);
    };
    //on submit makes api call
    const handleFormSubmit = event => {
        event.preventDefault();
        API.getbooks(searchValue)
            .then(data => console.log(data))
            .catch(error => alert(error));
    };


    return (






<form>
<Container>
    <Row>
        <Col size="xs-9 sm-10">
            <Search 
            onChange={handleInputChange}/>
        </Col>
        <Col size="xs-3 sm-2">
            <Button onClick={handleFormSubmit}>Search</Button>
        </Col>
    </Row>
</Container>
</form>
    )
}

export default SearchPage;