import React, { Component } from "react";
import Container from "../components/Grid";
import API from "../utils/api";


class ViewSaved extends Component{
    state={
        results:[],        
        id :""
    };
    // componenetDidmount to bring all the result when page load
    componentDidMount(){
        API.getallbooks()
        .then(res=> this.setState({results: res.data}))

    };
    // to delete the book
    deleteBook= (event) =>{
      let  id = event.target.getAttribute('id')
        API.deletebook(id)
        .then (res=> {
        if (res.status= 200) {
          this.setState({id:id})   
          // filtering to take out deleted book
          const newBooks = this.state.results.filter(result=>result._id !== this.state.id) 
           this.setState({results :newBooks})
        }}
        );    
    };
  
    render(){
        return(
            <Container>
                {this.state.results.length ? (
                      <ul className="list-group search-results">
                      {this.state.results.map(result => (
                        <li key={result._id} className="list-group-item display-inline">
                          <img src={result.image} className="thumbnail" alt={result._id}/>
                            <h4>{result.title} by {result.author}</h4><a href={result.prevlink}><button className="btn btn-primary m-2">View</button></a> 
                            <button className="btn btn-success m-2" onClick={this.deleteBook} id ={result._id}>Delete</button> 
                          <p className="text-break">{result.description}</p>
        
                        </li>
                      ))}
                    </ul>
                ) : (
                    <Container>
                    
                    <a href="/search"><button className="btn btn-primary">Start Search</button></a>
                    </Container>
                )
                }
              
            </Container>
        )
    }
}
export default ViewSaved;