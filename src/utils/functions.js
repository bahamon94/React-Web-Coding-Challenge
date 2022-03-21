export const formatDate = new Date().toLocaleString("en-US",{
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  timeZone: 'UTC',
  timeZoneName: 'short'
})

