import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = props => <NavLink {...props} 
className="nav-link" 
activeClassName="active"
/>;

class Promo extends Component {

  render(){
    const { header1, header2 } = this.props;
    return(
      <section class="hero is-warning is-bold is-small promo-block">
        <div class="hero-body">
          <div class="container">
          <br/>
          <br/>
            <h1 class="animated fadeIn title">
              { header1 }
            </h1>
            <h2 class="animated fadeIn subtitle">
              { header2 }
            </h2>
            <div class="field">
            <a class="button is-white is-outlined">
              <NavBarLink exact to="/appointment">Book Appointment</NavBarLink>
            </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Promo;