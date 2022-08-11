import React from 'react';
import { withRouter } from 'react-router-dom';

// note: page where you put infant name and birthday -> root '/'

import LogSheet from '/client/components/LogSheet.jsx'

const CreateSheet = props => {

//   const currDate = new Date();
//   currDate.setHours(0, 0, 0, 0)
  return (
    <body>
      <div>
        <h3>Complete infant information to continue...</h3>
        
        <form>
          <label for="fname">First Name</label>
            <input type="text" name="fname" placeholder="enter first name" required></input>
          <label for="lname">Last Name</label>
            <input type="text" name="lname" placeholder="enter last name" required></input>
          <label for="birthday">Birth Date</label>
            <input type="date" id="birthday" name="birthday" value="2022-08-11" min="2020-01-01" max="2022-08-11"></input>
        </form>
        <LogSheet />
      </div>
    </body>
  );
};

export default CreateSheet