import React from 'react';
import ReactDOM from 'react-dom'
import './css/main.scss'

import './Results'

class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            url: '',
            method: '',
            request: {}

        };
    }
// **********************************************
handleSubmit = async e => {
    // fetch data form API 
    e.preventDefault();
    let url = this.state.url;
    let raw = await fetch(url); // star wars API
    let data = await raw.json();
    let results = {
        Headers: raw.headers,
        Response: data
    }
    this.props.handler(results)
}



// **********************************


    handleUrl = e =>{
        let url = e.target.value;
        this.setState({url});
    }

    handleClick = e =>{
        e.preventDefault();
        let results = document.getElementById('div2')
        let words = <div>{this.state.method} <span>{this.state.url}</span> </div>
        ReactDOM.render(words, results);
    }

    handleMethod = e =>{
        let method = e.target.value;
        this.setState({method});

    }

    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>

            <div class="div1">
                <h2>URL:</h2>
                
   
                <input type="url" id="url" onChange={this.handleUrl} />
                <button type="submit" >GO!</button>
            </div>

            <div class="div3">
               <input type="radio" name="method" onChange={this.handleMethod} value="get"/>GET
               <input type="radio" name="method" onChange={this.handleMethod} value="post"/>POST
               <input type="radio" name="method" onChange={this.handleMethod} value="put"/>PUT
               <input type="radio" name="method" onChange={this.handleMethod} value="delete"/>DELETE
            </div>

            <div id="div2">
            </div>

            </form>
            </section>
        )
    }



}

export default Main;