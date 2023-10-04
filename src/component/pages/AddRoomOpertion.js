import { Button,DatePicker, Form, Input, Select, Space, Tooltip, Typography } from 'antd';
import axios from 'axios'
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/locale/zh_CN';

import { ConfigProvider } from 'antd';

import React from 'react';
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const weekFormat = 'MM/DD';
const monthFormat = 'YYYY/MM';
const dateFormatList = ['DD/MM/YYYY'];

const { Option } = Select;
const AddRoomOpertion = () => {
  const onFinish = async (values) => {
    values["Date"] = moment(values.Date).format("DD-MM-YYYY")
    await axios.post("http://localhost:3002/Rooms",values)
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
      
      <Form.Item label="OpertionRoom">
    
          <Form.Item
            name={'OpertionRoom'}
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
      <Form.Item label="Type">
    
    <Form.Item
      name={'Type'}
      noStyle
      rules={[
        {
          required: true,
          message: 'Province is required',
        },
      ]}
    >
      <Select placeholder="Select province">
        <Option value="green">green</Option>
        <Option value="red">red</Option>
      </Select>
    </Form.Item>
    

</Form.Item>
      
    <Form.Item label="Days">
    
    <Form.Item
      name={'Days'}
      noStyle
      rules={[
        {
          required: true,
          message: 'Province is required',
        },
      ]}
    >
      <Select placeholder="Select province">
        <Option value="Sun">Sun</Option>
        <Option value="Mon">Mon</Option>
        <Option value="Tue">Tue</Option>
        <Option value="Wed">Wed</Option>
        <Option value="Thu">Thu</Option>
      </Select>
    </Form.Item>
    

</Form.Item>

<Form.Item label="Date">
    
    <Form.Item
      name={'Date'} 
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
     
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddRoomOpertion