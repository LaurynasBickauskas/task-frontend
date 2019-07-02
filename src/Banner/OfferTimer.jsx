import React, { Component } from 'react';
import moment from 'moment';
import TimeItem from './TimeItem';
const TimeLabels = ["days", "hours", "minutes", "seconds"];
class OfferTimer extends Component {  
  // could get something from outside if not next midnight is needed
  constructor(props){
    super(props);
    this.state = { 
      counters: this.getCounters(),
      changer: true,
    }
  }
  componentDidMount () {
    this.interval = setInterval(this.updateCounters, 1000);
  }
  componentWillUnmount () {
    clearInterval(this.interval);
  }
  updateCounters = () => {
    this.setState({counters: this.getCounters(), changer:!this.state.changer});
  } 
  getCounters =() => {
    const diff = moment(moment().add(1,"day").startOf('day').diff(moment()));    
    return [
      (diff.format('dd')==="Th" ? "00" : diff.format('dd')),
      diff.format('hh'),
      diff.format('mm'),
      diff.format('ss')];
  }
  

  render() {
    const {counters} = this.state;
    return (
        <div className="row justify-content-lg-start justify-content-center">
          <div className="triangle-right"/>
          {counters.map((item, i)=>
            <TimeItem key={i} label={TimeLabels[i]} count={item}/>
          )}
          <div className="triangle-left"/>
        </div >
    );
  }
}

export default OfferTimer;
