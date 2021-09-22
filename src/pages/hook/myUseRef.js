import React, { useRef } from 'react'

export default function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    console.log(inputEl)
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  };
  // return (
  //   <>
  //     <input ref={inputEl} type="text" />
  //     <button onClick={onButtonClick}>Focus the input</button>
  //   </>
  // );
  return (
    <>
      TextInputWithFocusButton:
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}