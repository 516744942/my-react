import React from "react";
import FieldContext from "./FieldContext";
import useForm from "./useForm";

export default function Form({form, children, onFinish, onFinishFailed}, ref) {
  const [formInstance] = useForm(form);
  React.useImperativeHandle(ref, () => formInstance); //将方法 挂在父组件上
  console.log("formInstance", formInstance); //sy-log
  formInstance.setCallback({
    onFinish,
    onFinishFailed
  });
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        formInstance.submit();
      }}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
}
