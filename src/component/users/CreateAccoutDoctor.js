import axios from 'axios'

import {
    AutoComplete,
    Button,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
  } from 'antd';
  import React, { useState } from 'react';
  const { Option } = Select;
  
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  
  const CreateAccoutDoctor = () => {
    const [form] = Form.useForm();
  
 
      const onFinish = async (values) => {
        await axios.post("http://localhost:3002/AccountDoctor",values)
      };
    
  
   
    const [autoCompleteResult, setAutoCompleteResult] = useState([]);
  

    return (
        <div className='containertr'>
            <div className='box'>
      <Form 
    className='forms'
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
    
        scrollToFirstError
      >
        <Form.Item
          name="fullName"
          label="FullName"
          rules={[

            {
              required: true,
              message: 'Please input FullName',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="motherName"
          label="MotherName"
          rules={[

            {
              required: true,
              message: 'Please input MotherName',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={'specialization'}
          label="Specialization"
          rules={[

            {
              required: true,
              message: 'Please input Specialization',
            },
          ]}
        >
          <Select placeholder="Select province">
        <Option value="Eye">Eye</Option>
        <Option value="Heart">Heart</Option>
      </Select>
        </Form.Item>



<Form.Item
          name="address"
          label="Address"
          rules={[
          
            {
              required: true,
              message: 'Please input your Address',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phoneNum"
          label="PhoneNumber"
          rules={[
          
            {
              required: true,
              message: 'Please input your Address',
            },
          ]}
        >
          <Input />
        </Form.Item>
        

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
  
       
  

  
     
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
      </div>
      </div>
    );
  };
  
  export default CreateAccoutDoctor;