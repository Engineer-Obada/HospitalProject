
import  React, { useState,useRef, useEffect } from 'react';
import * as ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../../App.css"
import {  Col, Radio, Row, Select, Typography, Menu, Space, Table,Dropdown  } from 'antd';
import { Button, Checkbox, Form, Input ,Badge, Calendar,Modal} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { data1 } from '../../data';
import {Navigate, useNavigate} from "react-router-dom"
import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom"
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import "../../App.css"
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  FieldTimeOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';
import { Link,NavLink } from 'react-router-dom';
import Page1 from './Page1';
import FormReserv from './FormReserv';
import AddRoomOpertion from './AddRoomOpertion';
import axios from 'axios';
import TimeDoctor from './TimeDoctor';
const { Header, Content, Footer, Sider } = Layout;

const items = [
  { 
    key: '1',
  icon: <VideoCameraOutlined />,
  label: "Page 1",
  onClick: () => { Navigate('/')}
  },
  { 
    key: '1',
  icon: <VideoCameraOutlined />,
  label: "Page 1",
  onClick: () => { Navigate('/ca')}
  },
]
var dataCell;
var data;
var dataRoom;



    const  listData = [
        {
          type: 'red',
          content: 'Eye',
          Doctor: 'Joooohn Brown',
          Specializtion: 'New York No. 1 Lake Park',
          date:"03/08/2022",
        },
        {
          type: 'green',
          content: 'Heart',
          Doctor: 'memo Brown',
          Specializtion: 'New York No. 1 Lake Park',
          date:"03/08/2022",

        },
        {
          type: 'orange',
          content: 'Heart',
          Doctor: 'dd Brown',
          Specializtion: 'New York No. 1 Lake Park',
          date:"05/08/2022",

        },
      ];
      

  const getMonthData = (value) => {
    if (value.month() === 8) {
      return 1394;
    }
  };
  
  /*-----------------------------------------------------------------------*/

  
const CalenderDoctor = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleReserv, setIsModalVisibleReserv] = useState(false);
  const [isModalVisibleDoctor, setIsModalVisibleDoctor] = useState(false);
  const [isModalVisibleRoom, setIsModalVisibleRoom] = useState(false);
  const [isModalVisibleTime, setIsModalVisibleTime] = useState(false);
  const [Rooms, setRooms] = useState([]);
  const [RoomReserv, setRoomreserv] = useState([]);



  useEffect(()=>{
    loadFields();
  },[])
  const loadFields = async()=>{
      const result = await axios.get("http://localhost:3002/FormReserv")
      
      setRoomreserv(result.data)
    
         
  

  }


/*----------------------------------------------------------------------------------------- */
const monthCellRender = (value) => {
  const num = getMonthData(value);
  console.log(value.date());

  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
};


/*----------------------------------------------------------------------------------------- */
const [searchText, setSearchText] = useState('');
const [searchedColumn, setSearchedColumn] = useState('');

const searchInput = useRef(null);

const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm();
  setSearchText(selectedKeys[0]);
  setSearchedColumn(dataIndex);
};

const handleReset = (clearFilters) => {
  clearFilters();
  setSearchText('');
};

const getColumnSearchProps = (dataIndex) => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
    <div
      style={{
        padding: 8,
      }}
    >
      <Input
        ref={searchInput}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
        style={{
          marginBottom: 8,
          display: 'block',
        }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{
            width: 90,
          }}
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters && handleReset(clearFilters)}
          size="small"
          style={{
            width: 90,
          }}
        >
          Reset
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            confirm({
              closeDropdown: false,
            });
            setSearchText(selectedKeys[0]);
            setSearchedColumn(dataIndex);
          }}
        >
          Filter
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered) => (
    <SearchOutlined
      style={{
        color: filtered ? '#1890ff' : undefined,
      }}
    />
  ),
  onFilter: (value, record) =>
    record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
  onFilterDropdownVisibleChange: (visible) => {
    if (visible) {
      setTimeout(() => searchInput.current?.select(), 100);
    }
  },
  render: (text) =>
    searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{
          backgroundColor: '#ffc069',
          padding: 0,
        }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    ),
});


const columns = [
  {
    title: 'Doctor',
    dataIndex: 'doctor',
    key: 'doctor',
    width: '30%',
    ...getColumnSearchProps('doctor'),
  },
  {
    title: 'Specializtion',
    dataIndex: 'specialization',
    key: 'specialization',
    ...getColumnSearchProps('specialization'),
    sorter: (a, b) => a.specialization.length - b.specialization.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Patient',
    dataIndex: 'patient',
    key: 'patient',
    ...getColumnSearchProps('patient'),
    sorter: (a, b) => a.patient.length - b.patient.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'MotherName',
    dataIndex: 'motherName',
    key: 'motherName',
    ...getColumnSearchProps('motherName'),
    sorter: (a, b) => a.motherName.length - b.motherName.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Opration',
    dataIndex: 'opration',
    key: 'opration',
    ...getColumnSearchProps('opration'),
    sorter: (a, b) => a.opration.length - b.opration.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Narcosis',
    dataIndex: 'narcosis',
    key: 'narcosis',
    ...getColumnSearchProps('narcosis'),
    sorter: (a, b) => a.narcosis.length - b.narcosis.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'medical_diagnosis',
    dataIndex: 'medical_diagnosis',
    key: 'medical_diagnosis',
    ...getColumnSearchProps('medical_diagnosis'),
    sorter: (a, b) => a.medical_diagnosis.length - b.medical_diagnosis.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Room_id',
    dataIndex: 'room_id',
    key: 'room_id',
    ...getColumnSearchProps('room_id'),
    sorter: (a, b) => a.room_id.length - b.room_id.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'internalAccept_id',
    dataIndex: 'internalAccept_id',
    key: 'internalAccept_id',
    ...getColumnSearchProps('internalAccept_id'),
    sorter: (a, b) => a.internalAccept_id.length - b.internalAccept_id.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Confirm',
    dataIndex: 'confirm',
    key: 'confirm',
    ...getColumnSearchProps('confirm'),
    sorter: (a, b) => a.confirm.length - b.confirm.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    ...getColumnSearchProps('date'),
    sorter: (a, b) => a.date.length - b.date.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'HourNum',
    dataIndex: 'hourNum',
    key: 'hourNum',
    ...getColumnSearchProps('hourNum'),
    sorter: (a, b) => a.hourNum.length - b.hourNum.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Timestart',
    dataIndex: 'timestart',
    key: 'timestart',
    ...getColumnSearchProps('timestart'),
    sorter: (a, b) => a.timestart.length - b.timestart.length,
    sortDirections: ['descend', 'ascend'],
  } 
];

const columnsRoom = [
  {
    title: 'Doctor',
    dataIndex: 'Doctor',
    key: 'Doctor',
    width: '30%',
    ...getColumnSearchProps('Doctor'),
  },
  {
    title: 'Specializtion',
    dataIndex: 'Specializtion',
    key: 'Specializtion',
    ...getColumnSearchProps('Specializtion'),
    sorter: (a, b) => a.Specializtion.length - b.Specializtion.length,
    sortDirections: ['descend', 'ascend'],
  }
];
/*------------------------------------------------------------------------------------------ */

  const showModal = () => {
    setIsModalVisible(true);
    
  };
  const showModalDoctor = () => {
  
    setIsModalVisibleDoctor(true);
    console.log(RoomReserv);
 
  
  };
  const showModalReserv = () => {
  
    setIsModalVisibleReserv(true);
 
  
  };
  const showModalTime= () => {
  
    setIsModalVisibleTime(true);
 
  
  };
  const handleOkTime = () => {
    setIsModalVisibleTime(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleOkDoctor = () => {
    setIsModalVisibleDoctor(false);
  };
  
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleCancelTime = () => {
    setIsModalVisibleTime(false);
  };
  const handleCancelDoctor = () => {
    setIsModalVisibleRoom(false);
  };
  const handleOkRoom = () => {
    setIsModalVisibleRoom(false);
  };
  
  const handleCancelRoom = () => {
    setIsModalVisibleRoom(false);
  };
  const handleOkReserv = () => {
    setIsModalVisibleReserv(false);
  };
  
  const handleCancelreserv = () => {
    setIsModalVisibleReserv(false);
  };
  
const showOperationsRooms = (d)=>{
  setIsModalVisibleRoom(true);
  dataRoom = listData.filter(({date,content})=> date === dataCell && content === d )

  
}
const getListData = (value) => {
  let listData;
  const dateValue = value.format("DD-MM-yyyy")
  data = data1.filter(({date})=> date === dateValue )
  return data || [];
  
}
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <div className='father'>
    <ul className="events">
      {listData.map((item) => (
        <>
        <li className='ss'  key={item.content} onClick={ e=>showOperationsRooms(item.content)}>
           <Badge status={item.Type} text={item.OpertionRoom} />
        </li>

        </>
      )
      )
      }
    </ul>
           <Link  to={`/TableOpertionDoctor/${value.format("DD-MM-yyyy")}`}><i className='expand bi bi-capsule btn btn-success  btn-sm '></i></Link>

        
          {/* <i className='expand  i bi-arrows-angle-expand btn btn-primary  btn-sm ' onClick={showModal}></i> */}

      </div>
    );
  };
  /*--------------------------------------------------- */


  const handelSelected = (e)=>{
    var myString;
    myString = `${e._d}`;
    var splitWords = myString.split(" ");
    // console.log(splitWords[0]);

    const stringValue = e.format("DD/MM/yyyy");
    dataCell = stringValue
    data = data1.filter(({date})=> date === stringValue )
    // console.log(stringValue);

  
  }
return (
  <>

  
      <div>
        <Menu mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="2" icon={<AppstoreOutlined />} onClick={ showModalReserv}>
          Add Time
          </Menu.Item>
        
         </Menu>
  </div>
 
       <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
       {dataCell}
      </Modal>
      <Modal title="Basic" visible={isModalVisibleDoctor} onOk={handleOkDoctor} onCancel={handleCancelDoctor}>
      <Table columns={columns}  dataSource={data} />
      </Modal>
      {/* <Modal title="Basic" visible={isModalVisibleRoom} onOk={handleOkRoom} onCancel={handleCancelRoom}>
      <Table columns={columnsRoom} dataSource={dataRoom}/>
      </Modal> */}
      <Modal title="Appointment Booking" visible={isModalVisibleReserv} onOk={handleOkReserv} onCancel={handleCancelreserv}>
       {<TimeDoctor />}
      </Modal>
      <Modal title="AddRoomOpertion" visible={isModalVisibleTime} onOk={handleOkTime} onCancel={handleCancelTime}>
      {<AddRoomOpertion />}
      </Modal>
      <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} onSelect={e=>handelSelected(e)} />
     

    


    </>
)

};

export default CalenderDoctor;
