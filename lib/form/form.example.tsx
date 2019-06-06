import * as React from "react";
import Form, {FormValue} from "./form";
import {useState} from "react";
import Validator from "./validate";

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  })
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}

  ])
  const [errors, setErrors] = useState({})
  const onSubmit = () => {
    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 3, maxLength: 8},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/}
    ]
    const errors = Validator(formData, rules)
    setErrors(errors)
    console.log(errors)
  }
  return (
    <Form value={formData} fields={fields} buttons={
      <>
        <button>取消</button>
        <button type="submit">提交</button>
      </>
    }
          errors={errors}
          onChange={newValue => setFormData(newValue)}
          onSubmit={onSubmit}
    />
  )
}
export default FormExample