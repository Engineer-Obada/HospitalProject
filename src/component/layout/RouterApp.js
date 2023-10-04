import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Layout, Menu } from 'antd';
import Icon from '@ant-design/icons';
import Calender from '../pages/Calender';
import CalenderDoctor from '../pages/CalenderDoctor';
import Page1 from '../pages/Page1';
import Home from '../pages/Home';
import AddUsers from '../users/AddUsers';
import EditUser from '../users/EditUser';
import User from '../users/User';
import Pagenotfound from '../pages/Pagenotfound';
import Navbar from './Navbar';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import External from '../pages/External';
import Beds from '../pages/Beds';
import Login from '../pages/Login';
import Folder from '../pages/Folder';

import Ex from '../users/Ex';
import ExternalEdit from '../users/ExternalEdit';
import TableOpertionDoctor from '../pages/TableOpertionDoctor';

import {
  AppstoreOutlined,
  CalendarOutlined,
  FormOutlined,
  InsertRowLeftOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import Internal from '../pages/Internal';
import CreateAccoutPatient from '../users/CreateAccoutPatient';
import CreateAccoutDoctor from '../users/CreateAccoutDoctor';
import InternalEdit from '../users/InternalEdit';
import OpertionEdit from '../users/OpertionEdit';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class RouterApp extends Component {

    state = {
        collapsed: false,
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <Router>
                <Layout style={{ minHeight: '100vh',}}>
                
                    <Sider style={{paddingTop:110 }}
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}>
                        <div className="logo" />

                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<UserOutlined />}  >
                                
                                <span>Users</span>
                                <Link to="/" />
                            
                            </Menu.Item>
                            <Menu.Item key="2" icon={<UserOutlined />}  >
                                
                                <span>CreateAccoutPatient</span>
                                <Link to="/CreateAccoutPatient" />
                            
                            </Menu.Item>
                            <Menu.Item key="8" icon={<UserOutlined />}  >
                                
                                <span>CreateAccoutDoctor</span>
                                <Link to="/CreateAccoutDoctor" />
                            
                            </Menu.Item>
                            <Menu.Item key="9" icon={<CalendarOutlined />}  >
                                
                                <span>CalendarDoctor</span>
                                <Link to="/CalenderDoctor" />
                            
                            </Menu.Item>
                            <Menu.Item key="3" icon={<CalendarOutlined />}>
                                <span>Calender</span>
                                <Link to="/meseros" />
                            </Menu.Item>
                            <Menu.Item key="4" icon={<FormOutlined />}>
                                <span>external admission</span>
                                <Link to="/external" />
                            </Menu.Item>
                            <Menu.Item key="5" icon={<FormOutlined />}>
                                <span>internal admission </span>
                                <Link to="/internal" />
                            </Menu.Item>
                            <Menu.Item key="11" icon={<FormOutlined />}>
                                <span>Folder</span>
                                <Link to="/Folder" />
                            </Menu.Item>
                            <Menu.Item key="10" icon={<FormOutlined />}>
                                <span>Opertion</span>
                                <Link to="/TableOpertionDoctor" />
                            </Menu.Item>
                            <Menu.Item key="6" icon={<InsertRowLeftOutlined />}>
                                <span>Beds </span>
                                <Link to="/Beds" />
                            </Menu.Item>
                            <Menu.Item key="7" icon={<InsertRowLeftOutlined />}>
                                <span>Login </span>
                                <Link to="/Login" />
                            </Menu.Item>
                          
                        </Menu>
                    </Sider>
                    <Layout>
                        {/* <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}> */}


                        {/* </Header> */}
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route exact path="/TableOpertionDoctor/:datea" element={<TableOpertionDoctor />} />
                            <Route exact path="/OpertionEdit/edit/:id" element={<OpertionEdit />} />

                            <Route exact path="/Login" element={<Login />} />
                            <Route exact path="/CreateAccoutPatient" element={<CreateAccoutPatient />} />
                            <Route exact path="/CreateAccoutDoctor" element={<CreateAccoutDoctor />} />
                            <Route path="/meseros" element={<Calender />} />
                            <Route path="/CalenderDoctor" element={<CalenderDoctor />} />
                            <Route path="/external" element={<External />} />
                            <Route path="/internal" element={<Internal />} />
                            {/* <Route path="/Folder" element={<Folder />} /> */}
                            <Route path="/TableOpertionDoctor" element={<TableOpertionDoctor />} />
                            <Route path="/Beds" element={<Beds />} />
                            <Route exact path='/add/users' element={ <AddUsers />}></Route>
                            <Route exact path='/user/:id' element={ <User />}></Route>
                            <Route exact path='/External/:id' element={ <Ex />}></Route>
                            <Route exact path='/Internal/:id' element={ <Ex />}></Route>

                            <Route exact path='/user/edit/:id' element={ <EditUser />}></Route>
                            <Route exact path='/ExternalEdit/edit/:id' element={ <ExternalEdit />}></Route>
                            <Route exact path='/InternallEdit/edit/:id' element={ <InternalEdit/>}></Route>


                            <Route exact path='*' element={ <Pagenotfound />}></Route>
                             </Routes>
                        </Content>
                  
                    </Layout>

                </Layout>
            </Router>
        );
    }
}


export default RouterApp;