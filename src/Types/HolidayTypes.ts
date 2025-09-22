export type HolidayResponse = {
  name: 'Christmas Day',
  description: "Christmas Day celebrates Jesus Christ's birth.",
  date: '2025-12-25',
  type: [ 'National holiday', 'Christian' ]
}

export type Holiday = {
  date: string,
  name: string,
  description: string,
  daysToGo: number
}