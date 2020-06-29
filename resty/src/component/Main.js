import React from 'react';
import ReactDOM from 'react-dom'
import './css/main.scss'

class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            words: '',
            method: ''
        }
    }

    handleWord = e =>{
        let words = e.target.value;
        this.setState({words});
    }

    handleClick = e =>{
        e.preventDefault();
        let results = document.getElementById('div2')
        let words = <div>{this.state.method} <span>{this.state.words}</span> </div>
        ReactDOM.render(words, results);
    }

    handleMethod = e =>{
        let method = e.target.value;
        this.setState({method});

    }

    render() {
        return (
            <section>
                <form>

            <div class="div1">
                <h2>URL:</h2>
   
                <input type="url" id="url" onChange={this.handleWord} />
                <button onClick={this.handleClick} >GO!</button>
            </div>

            <div class="div3">
               <input type="radio" name="method" onClick={this.handleMethod} value="get"/>GET
               <input type="radio" name="method" onClick={this.handleMethod} value="post"/>POST
               <input type="radio" name="method" onClick={this.handleMethod} value="put"/>PUT
               <input type="radio" name="method" onClick={this.handleMethod} value="delete"/>DELETE
            </div>

            <div id="div2">
            </div>

            </form>
            </section>
        )
    }



}

export default Main;