import React, {Component } from 'react';
import { connect } from 'react-redux';
import { loadMyAppointments, bookAppointment } from './actions';

class MyAppointments extends Component { 
  componentDidMount() {
   return this.props.loadMyAppointments();
  }

  render(){
    const { appointments, loading} = this.props;
    const MyAppointments = appointments.map(appointment => {
      return (
      <article class="animated slideInUp message is-warning">
      <div class="message-header">
        <p>Service type: {appointment.service}</p>
        <button class="delete" aria-label="delete">Cancel</button>
      </div>
      <div class="message-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
      </div>
      </article>);
    })
    return(
      <section class="hero is-light">
        <div class="container has-text-centered">
        <br/>
        <br/>
        <br/>
        <h3 class="title">My Appointments</h3>
          {MyAppointments}
        </div>
      </section>
    );
  }
}

export default connect(({ auth, loading, appointments }) => ({
  user: auth.user,
  loading,
  appointments
}), { loadMyAppointments, bookAppointment }
)(MyAppointments);