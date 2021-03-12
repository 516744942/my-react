import React, { useState, useEffect } from 'react';
const initialState = 0
export default function BasicHook(props) {
  const [count, setCount] = useState(initialState)
  
  // didMount,didUpdate类似
  useEffect(() => {
    console.log('effect count')
    document.title = `点击了${count}次`
    // 
 
  }, [count]) //effect条件执行
  // 
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    console.log('effect date')
    let timers = setInterval(() => {
      setDate(new Date())
    }, 1000);
    //  willUnmounet
    return () =>  clearInterval(timers);
  }, [])

  return (
    <div>
      {count}
      {date.toLocaleString()}
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}

