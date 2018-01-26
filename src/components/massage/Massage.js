import React, { Component } from 'react';
import Article from './Article';
import Promo from './Promo';

class Massage extends Component {

  render(){
    return(
      <div>
      <Promo/>
      <Article/>
      <Promo/>
      <Article/>
      </div>
    );
  }
}

export default Massage