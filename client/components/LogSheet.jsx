import React from 'react';
import { Component } from 'react';

import DayTable from '/client/components/DayTable.jsx'

class LogSheet extends Component {
  render(){
      return(
          <div id="logsheet" class="content-box">
            <h1>WORK</h1>
            <DayTable />
          </div>
      );

  }

  
};

export default LogSheet;