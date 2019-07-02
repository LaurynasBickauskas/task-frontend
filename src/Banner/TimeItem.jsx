import React, { Component } from 'react';
import './styles.scss';

class TimeItem extends Component {

  render() {
    const {label, count} = this.props;
    return (
        <div className="col-2">
            <div className="timer-number text-center">{count}</div>
            <div className="timer-label text-center">{label}</div>
        </div>
    );
  }
}

export default TimeItem;
