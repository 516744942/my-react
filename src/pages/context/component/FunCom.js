import React, { useContext } from 'react'
import { ThemeContext, UserContext } from '../Context';

export default function FunCom() {
  const ctx = useContext(ThemeContext)
  const { name } = useContext(UserContext)
  return (
    <div>
      <div>FunCom: {ctx.themeColor}</div>
      <div>FunComName: {name}</div>
    </div>
  )
}
