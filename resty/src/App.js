import React from 'react';
import Header from './component/Header'
import Footer from './component/Footer'
import Main from './component/Main'
import Results from './component/Results'
import './component/css/App.scss';
import './component/css/reset.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {},
    };
  }

  handleForm = (results) => {
    this.setState({ result: results });
  };



render() {
  return (
    <React.Fragment>
      <Header />
      <Main handler = {this.handleForm}/>
      <Results result = {this.state.result}/>
      <Footer />
    </React.Fragment>
  );
 }

}

export default App;
