import React from 'react'
import Header from './componet/Header';
import Main from './componet/Main';
import Footer from './componet/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

render() {
  return (
    <div>
<Header/>
<Main/>
<Footer/>
      </div>
    )
  }
}


export default App;