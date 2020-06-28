import React from 'react';
import Header from './component/Header'
import Footer from './component/Footer'
import Main from './component/Main'
import './component/css/App.scss';
import './component/css/reset.css'


function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  ) 

}

export default App;
