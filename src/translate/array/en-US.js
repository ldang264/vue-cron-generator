export const cases = [
  {
    label: 'Every second',
    value: '* * * * * ?'
  },
  {
    label: 'Every 30 minutes',
    value: '0 */30 * * * ?'
  },
  {
    label: 'Every hour at minutes 15, 30 and 45',
    value: '0 15,30,45 * * * ?'
  },
  {
    label: 'Every even hour',
    value: '0 0 0/2 * * ?'
  },
  {
    label: 'Every uneven hour',
    value: '0 0 1/2 * * ?'
  },
  {
    label: 'Every day at midnight - 12am',
    value: '0 0 0 * * ?'
  },
  {
    label: 'Every day at noon - 12pm',
    value: '0 0 12 * * ?'
  },
  {
    label: 'Every Monday at noon',
    value: '0 0 12 * * MON'
  },
  {
    label: 'Every Weekday at noon',
    value: '0 0 12 * * MON-FRI'
  },
  {
    label: 'Every 4 days staring on the 1st of the month, at noon',
    value: '0 0 12 1/4 * ?'
  },
  {
    label: 'Every month on the last day of the month, at noon',
    value: '0 0 12 L * ?'
  },
  {
    label: 'Every month on the second to last day of the month, at noon',
    value: '0 0 12 L-2 * ?'
  },
  {
    label: 'Every month on the last weekday, at noon',
    value: '0 0 12 LW * ?'
  },
  {
    label: 'Every month on the nearest Weekday to the 1st of the month, at noon',
    value: '0 0 12 1W * ?'
  },
  {
    label: 'Every month on the last Sunday, at noon',
    value: '0 0 12 ? * 1L'
  },
  {
    label: 'Every month on the first Friday of the Month, at noon',
    value: '0 0 12 ? * 6#1'
  },
  {
    label: 'Every day at noon in January and June',
    value: '0 0 12 * JAN,JUN ?'
  }
]
