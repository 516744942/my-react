import React from "react";
import _Form from "./Form";
import Field from "./Field";
import useForm from "./useForm";

const Form = React.forwardRef(_Form); //实现了一个ref的转发
Form.useForm = useForm;

export {Field, useForm};
export default Form;
