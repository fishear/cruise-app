import React, { Component } from 'react';
import { Layout,Menu } from 'antd';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import agentsReducer from '../reducers/agents'
import AgentList from './AgentList'
const { Header, Content } = Layout;

const store = createStore(agentsReducer)

class CruiseApp extends Component {
  state = {
    current: 'agents',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Layout className="layout">
        <Header style={{backgroundColor:'#fff'}}>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="dashboard" disabled>
              DASHBOARD
            </Menu.Item>
            <Menu.Item key="mycruise" disabled>
              MY CRUISE
            </Menu.Item>
            <Menu.Item key="agents">
              AGENTS
            </Menu.Item>
            <Menu.Item key="help" disabled>
              HELP
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{padding:'0 50px',backgroundColor:'#fff'}}>
          <Provider store={store}>
            <AgentList />
          </Provider>
        </Content>
        </Layout>
    );
  }
}


export default CruiseApp;