import { Button, Form, Input, Radio } from 'antd';
import { DatePicker, Select, Space, Tooltip, Typography } from 'antd';

import React, { useState } from 'react';
import { TimePicker } from 'antd';
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/locale/zh_CN';
const FormReserv = () => {
  const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY'];

  const { Option } = Select;
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    values["date"] = moment(values.Date).format("DD-MM-YYYY")
    values["timestart"] = moment(values.timestart).format("HH:mm:ss")
    await axios.post("http://localhost:3002/FormReserv",values)
    console.log(values);
  };
  return (
    <Form
    name="complex-form"
    onFinish={onFinish}
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
  >
    
    <Form.Item label="Doctor">
  
        <Form.Item
          name={'doctor'}
          noStyle
          rules={[
            {
              required: true,
              message: 'Province is required',
            },
          ]}
        >
          <Select placeholder="Select province">
            <Option value="Ahmad">Ahmad</Option>
            <Option value="Rami">Rami</Option>
          </Select>
        </Form.Item>
        

    </Form.Item>
    <Form.Item label="Specialization">
  
  <Form.Item
    name={'specialization'}
    noStyle
    rules={[
      {
        required: true,
        message: 'Province is required',
      },
    ]}
  >
    <Select placeholder="Select province">
      <Option value="Eye">Eye</Option>
      <Option value="Heart">Heart</Option>
    </Select>
  </Form.Item>
  

</Form.Item>
    
  <Form.Item label="Patient">
  
  <Form.Item
    name={'patient'}
    noStyle
    rules={[
      {
        required: true,
        message: 'Province is required',
      },
    ]}
  >
  <Input />
  </Form.Item>
  

</Form.Item>

<Form.Item label="MotherName">
  
  <Form.Item
    name={'motherName'}
    noStyle
    rules={[
      {
        required: true,
        message: 'Province is required',
      },
    ]}
  >
  <Input />
  </Form.Item>
  

</Form.Item>

<Form.Item label="OprationType">
  
  <Form.Item
    name={'opration'}
    noStyle
    rules={[
      {
        required: true,
        message: 'Province is required',
      },
    ]}
  >
    <Select placeholder="Select province">
      <Option value="Eye">Eye</Option>
      <Option value="Heart">Heart</Option>
    </Select>
  </Form.Item>
  
  

</Form.Item>




<Form.Item label="Narcosis">
  <Form.Item
    name={'narcosis'}
    noStyle
    rules={[
      {
        required: true,
        message: 'Province is required',
      },
    ]}
  >
   <Input />
  </Form.Item>
</Form.Item>

<Form.Item label="Medical_diagnosis">
  <Form.Item
    name={'medical_diagnosis'}
    noStyle
    rules={[
      {
        required: true,
        message: 'Province is required',
      },
    ]}
  >
   <Input />
  </Form.Item>
</Form.Item>


<Form.Item label="Room_id">
  
  <Form.Item
    name={'room_id'}
    noStyle
    rules={[
      {
        required: true,
        message: 'Province is required',
      },
    ]}
  >
    <Select placeholder="Select province">
      <Option value="1">1</Option>
      <Option value="2">2</Option>
      <Option value="3">3</Option>
      <Option value="4">4</Option>
      <Option value="4">4</Option>
      <Option value="5">5</Option>

    </Select>
  </Form.Item>
</Form.Item>

<Form.Item label="InternalAccept_id">
  
  <Form.Item
    name={'internalAccept_id'}
    noStyle
    rules={[
      {
        required: true,
        message: 'Province is required',
      },
    ]}
  >
   <Input />
  </Form.Item>
</Form.Item>

<Form.Item label="Confirm">
  
  <Form.Item
    name={'confirm'}
    noStyle
    rules={[
      {
        required: true,
        message: 'Province is required',
      },
    ]}
  >
    <Select placeholder="Select province">
      <Option value="Null">Not Yet</Option>
      <Option value="1">Yes</Option>
      <Option value="2">No</Option>
   

    </Select>
  </Form.Item>
</Form.Item>
<Form.Item label="Date">
    
    <Form.Item
      name={'date'} 
      noStyle
      rules={[
        {
          required: true,
          message: 'Province is required',
        },
      ]}
    >
              <DatePicker format="DD-MM-YYYY" />
    </Form.Item>
    

</Form.Item>
<Form.Item label="HourNumber">
    
    <Form.Item
      name={'hourNum'} 
      noStyle
      rules={[
        {
          required: true,
          message: 'Province is required',
        },
      ]}
    >
            <Select placeholder="Select province">
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4">4</Option>
            <Option value="5">5</Option>
    </Select>
    </Form.Item>
</Form.Item>

<Form.Item label="TimeStart">
    
    <Form.Item
      name={'timestart'} 
      noStyle
      rules={[
        {
          required: true,
          message: 'Province is required',
        },
      ]}
    >
          <TimePicker format="HH:mm:ss"  />

    </Form.Item>
    

</Form.Item>


   
   
    <Form.Item label=" " colon={false}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>);
};

export default FormReserv;