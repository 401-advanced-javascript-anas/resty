import React from 'react';
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
        let words = this.state.words;
        this.setState({words});
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
            <h3>{this.state.method}</h3>
               <input type="radio" name="method" onClick={this.handleMethod} value="get"/>GET
               <input type="radio" name="method" onClick={this.handleMethod} value="post"/>POST
               <input type="radio" name="method" onClick={this.handleMethod} value="put"/>PUT
               <input type="radio" name="method" onClick={this.handleMethod} value="delete"/>DELETE
            </div>

            <div class="div2">
            <h3>{this.state.words}</h3>
            </div>

            </form>
            </section>
        )
    }



}

export default Main;