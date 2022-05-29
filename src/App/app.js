import React, { Component } from 'react';

import '../Common/Style/reset.css'
import '../Common/Style/base.css'


import Header from './Hader/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer';

class App extends Component {
  state = {
    cartData: {

    }
  };

 

  addCount = (id,count) => {
    this.setState((prevCount) => ({
      cartData: {
        ...prevCount.cartData,
        [id] : (prevCount.cartData[id] || 0) + count,
      }
    })
    );
  }

  render() {
    return (
      <>
        <Header
          cartDataTwo={this.state.cartData} />
        <button
          onClick={() => this.addCount(2,5)} > ТЕСТ КНОПКИ</button>
        <Main
          cartDataProops={this.addCount} />
        <Footer />
      </>
    );
  }
}

export default App


//const App = () => {
//    return (
//        <>
//            <Header />
//            <Main/>
//            <Footer/>
//        </>
//    )
//};








//let H1 = () => {
//    return <h1 id="test"> Usergergeeerssoyoy </h1>;
//  };
  
//  let P = () => {
//    return (
//        <>
//       {/*на 10-й строке должен был быть див, но мы убрали и заменили реакт фрагментом, чтоб избежать большой вложенности*/}
//        <p id="test"> ysergergeeerssoyoy </p>
//            <p id="test"> loremwwww10 </p>
//            <h1> Usergergeeerssoyoy  Usergergeeerssoyoy Usergergeeerssoyoy</h1>
//      </>
//    );
//  };
  
//  let App = () => {
//    return (
//      <>
//        <H1 />
//        <P />
//      </>
//    );
//  };