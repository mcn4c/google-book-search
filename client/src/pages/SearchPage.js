import React, { Component } from "react";
import Container from "../components/Grid"
import Search from "../components/Search";
import Button from "../components/Button";
import API from "../utils/api";


class SearchPage extends Component () {


    state={

        results: [],
        booksName: "",
        books: {},
        }

        componentDidMount(){
            API.getBooks("harry potter")
            .then(res=> this.setState({results: res.data.items}))
    
         };

    //captures user input
    handleInputChange = e => {
        const { value } = e.target;
        setSearchValue(value);
    };
    //on submit makes api call
     handleFormSubmit = event => {
        event.preventDefault();
        API.getbooks(this.state.booksName)
            .then(res => {
                this.setState({results:res.data.items})
                console.log(res.data.items);
            })
            .catch(error => alert(error));
    };


    saveBook = (event)=>{
      
        let id = event.target.getAttribute('id')
        
        const books = this.state.results.filter(result => result.id === id)
      
        for (let i = 0; i < books.length; i++) {
       
        var bookSaved = {
            
            title : books[i].volumeInfo.title,
            author : books[i].volumeInfo.authors,
            synopsis : books[i].volumeInfo.description,
            image: books[i].volumeInfo.imageLinks.thumbnail,
            link: books[i].volumeInfo.previewLink,

        }
        }
        // saving book to database.
        API.saveBook(book)
        .then(res=>{
          console.log(res);
          this.setState({message: book.title + " by "+ book.author + "is saved to your database"})
        })
        
      }

      render() {

    return (





<div>
<form>
<Container>
    <Row>
        <Col size="xs-9 sm-10">
            <Search 
            onChange={this.handleInputChange}/>
        </Col>
        <Col size="xs-3 sm-2">
            <Button onClick={this.handleFormSubmit}>Search</Button>
        </Col>
    </Row>
</Container>
</form>

<Container>
              {this.state.results.length ? (
                    <ul className="list-group search-results">
                    {this.state.results.map(result => (
                      <li key={result.id} className="list-group-item display-inline">
                        <img src={result.volumeInfo.imageLinks.thumbnail} className="thumbnail" alt={result.id}/>
                        <a href={result.volumeInfo.previewLink}><button className="btn btn-primary m-2 button">View</button></a> 
                          <button className="btn btn-success m-2 button" onClick={this.bookSaved} id ={result.id}>Save</button> 
                          <h4>{result.volumeInfo.title} by {result.volumeInfo.authors}</h4>
                        <p className="text-break">{result.volumeInfo.description}</p>
      
                      </li>
                    ))}
                  </ul>
              ) : (
                <p>No matches</p>
              )
              }
          
            </Container>
            </div>
    )
};
};

export default SearchPage;