import * as React from 'react';
import Form, {FormValue} from './form';
import {useState} from 'react';
import Validator, {noError} from './validate';
import Button from '../button';

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: '',
    password: ''
  });
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}}

  ]);
  const [errors, setErrors] = useState({});
  const onSubmit = () => {
    const rules = [
      {key: 'username', required: true},
      {key: 'username', minLength: 3, maxLength: 8},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/}
    ];
    const errors = Validator(formData, rules);
    if (noError(errors)) {
      return;
    }
    setErrors(errors);
    console.log(errors);
  };
  return (
    <Form value={formData} fields={fields} buttons={
      <>
        <Button>取消</Button>
        <Button level={'important'} type="submit">提交</Button>
      </>
    }
          errors={errors}
          onChange={newValue => setFormData(newValue)}
          onSubmit={onSubmit}
    />
  );
};
export default FormExample;