import React from 'react'
import { format, parseISO } from 'date-fns'

const DateFormatter = ({ dateString, className }: any) => {
  return (
    <time dateTime={dateString} className={className}>
      {format(parseISO(dateString), 'MMM dd, yyyy')}
    </time>
  )
}

export default DateFormatter