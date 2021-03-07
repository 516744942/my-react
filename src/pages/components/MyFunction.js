import React, { useState, useEffect } from 'react'


export default function MyFunction() {
  const [date, setDate] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    // 相当于 componentDidMount,componentDidUpdate,  componentWillUnmount
    const timer = setInterval(() => {
      setDate(new Date().toLocaleTimeString())
    }, 1000)
    // 
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    < div >
      { date}
    </div>
  )
}
