import React, { useState, useEffect } from 'react'

const Timezone = () => {
  const [dateTime, setDateTime] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [dayNumber, setDayNumber] = useState('')
  const [year, setYear] = useState('')
  const [timeZone, setTimeZone] = useState('')
  const [locale, setLocale] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      // Obtener la zona horaria y el idioma del usuario
      const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
      const userLocale = Intl.DateTimeFormat().resolvedOptions().locale
      const dayName = now.toLocaleString(userLocale, { weekday: 'long' })
      const month = now.toLocaleString(userLocale, { month: 'long' })
      const dayNumber = now.toLocaleString(userLocale, { day: 'numeric' })
      const year = now.toLocaleString(userLocale, { year: 'numeric' })
      const hour = now.toLocaleString(userLocale, {
        hour: 'numeric',
        hour12: false,
      })
      const minute = now.toLocaleString(userLocale, { minute: 'numeric' })
      const second = now.toLocaleString(userLocale, { second: 'numeric' })

      setDateTime(`${hour}:${minute}:${second}`)
      setDay(dayName)
      setDayNumber(dayNumber)
      setMonth(month)
      setYear(year)
      setTimeZone(
        currentTimeZone
          .replace('_', ' ')
          .replace('-', ' ')
          .replace('_', ' ')
          .replace('/', ' '),
      )
      setLocale(userLocale)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <p>{dateTime}</p>
      <div>
        <p>
          {day} {dayNumber} {month} {year}
        </p>
      </div>
      <div>
        <p>{timeZone}</p>
        <p>{locale}</p>
      </div>
    </div>
  )
}

export default Timezone
