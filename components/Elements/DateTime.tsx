import React from 'react'
import { format } from 'date-fns'

function DateTime({ date, dateFormat, timeFormat, conjection, showtime }:any) {
  return (
    <>
      {format(new Date(date), dateFormat)}
      {
        true == showtime ?
          <>
            {conjection}
            {format(new Date(date), timeFormat)}
          </>
          :
          null
      }
    </>
  )
}

DateTime.defaultProps = {
  dateFormat: "MMMM dd, yyyy",
  conjection: " at ",
  timeFormat: 'h:m a',
  showtime: false
};

export default DateTime