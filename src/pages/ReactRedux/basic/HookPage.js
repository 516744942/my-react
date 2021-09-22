import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
export default function HookPage() {
  const count = useSelector(count => count);
  const dispatch = useDispatch()
 
  const add = useCallback(() => {
    dispatch({ type: 'ADD' })
  }, [dispatch])
  return (
    <div>
      <div>HookPage</div>
      <div>{count}</div>
      <button onClick={add}>add</button>
    </div>
  );
}
