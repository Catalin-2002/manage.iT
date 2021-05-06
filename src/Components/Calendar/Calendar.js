import React, { useState } from 'react';
import DatePicker from 'react-date-picker';

function Calendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
       <p>Choose the deadline of your project</p>
      <DatePicker
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default Calendar;