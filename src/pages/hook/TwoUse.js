import React, { useState, useMemo, useCallback, PureComponent } from 'react'

export default function TwoUse(props) {
  return (
    <div>
      <UseMemoPage />
      <UseCallbackPage />
    </div>
  )
}


function UseMemoPage(params) {
  const initialState = 0
  const [count, setCount] = useState(initialState)
  const expensive = useMemo(() => {
    console.log('computed')
    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += 1
    }

    return sum
  }, [count])


  const [value, setValue] = useState('')
  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>count:{count}</p>
      <p>value:{value}</p>
      <p>expensive:{expensive}</p>
      <button onClick={() => setCount(count + 1)} >add</button>
      <input value={value} onChange={event => setValue(event.target.value)} />
    </div>
  )
}

function UseCallbackPage(params) {
  const initialState = 0
  const [count, setCount] = useState(initialState)


  const [value, setValue] = useState('')
  const addClick = useCallback(
    () => {
      console.log('computed11')
      let sum = 0;
      for (let i = 0; i < count; i++) {
        sum += 1
      }
      return sum
    }, [])
  return (
    <div>
      <h3>UseMemoPage</h3>
      <p>count:{count}</p>
      <p>value:{value}</p>
      <button onClick={() => setCount(count + 1)} >add</button>
      <button onClick={() => setCount(count)} >equal</button>
      <input value={value} onChange={event => setValue(event.target.value)} />
      <Child addClick={addClick} count={count} ></Child>
    </div>
  )
}

class Child extends PureComponent {
  render() {
    console.log('render child')
    const { addClick,count} = this.props
    return (
      <div>
        {count}
        <h3>h3</h3>
        <button onClick={() => addClick()}>add</button>
      </div>
    );
  }
}

