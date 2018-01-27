import React, { Component } from 'react';


class AppointmentForm extends Component {

  state = {
    selectedMonth: 'January'
  }

  months = [
    { month: 'January', days: 31 },
    { month: 'February ', days: 28 },
    { month: 'March', days: 31 },
    { month: 'April', days: 30 },
    { month: 'May', days: 31 },
    { month: 'June', days: 30 },
    { month: 'July', days: 31 },
    { month: 'March', days: 31 },
    { month: 'August', days: 31 },
    { month: 'September', days: 30 },
    { month: 'October', days: 31 },
    { month: 'November', days: 30 },
    { month: 'December', days: 31 },
  ]

  handleMonthChange = month => {
    this.setState({ selectedMonth: month })
  }

  
  render(){

    const monthOptions = this.months.map(month => {
      const option = this.state.selectedMonth === month.month ? 
      <option value={month.days} selected >{month.month}</option> : 
      <option value={month.days}>{month.month}</option>;
      return option;
    });

    let daysInMonth = [];
    for( let i = 1; i < this.state.selectedMonth; i++){
      daysInMonth.push(i);
    }
    const dayOptions = daysInMonth.map(day => {
      return <option value={day}>{day}</option>
    })
    console.log('dayoptions', daysInMonth)
    console.log('dayoptions', dayOptions)
    return(
      <section class="hero is-warning">
        <div class="hero-body">
          <div class="container has-text-centered">
            <form>
                <div class="field">
                  <div class="label">Appointment type</div>
                <div class="select is-large">
                  <select>
                    <option>Massage Therapy</option>
                    <option>With options</option>
                  </select>
                </div>
                </div>
                <div class="field">
                  <div class="label">Month</div>
                <div class="select is-large">
                  <select onChange={ value => this.handleMonthChange(value) }>
                    {monthOptions}
                  </select>
                </div>
                </div>
                <div class="field">
                  <div class="label">Day</div>
                <div class="select is-large">
                  <select>
                    {dayOptions}
                  </select>
                </div>
                </div>

            </form>
          </div>
        </div>
      </section>
    );
  }
}


export default AppointmentForm