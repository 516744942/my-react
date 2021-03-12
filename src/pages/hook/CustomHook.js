import React, { useEffect, useState } from 'react';

export default function CustomHook() {
  return (
    <div>
      <div>
        自定义hook:
        {UserClock().toLocaleString()}
      </div>
    </div>
  );
}


// 自定义一个hook,命名要以use开头
const initialState = new Date()
function UserClock() {
  const [date, setDate] = useState(initialState)
  useEffect(() => {
    let timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    return () => {
      clearInterval(timer)
    };
  }, [])
  return date
}

