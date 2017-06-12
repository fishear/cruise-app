import React, { Component } from 'react'
import { Modal, Icon } from 'antd';

class ResourceModal extends Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
      input: ''
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
    if(this.props.onAddResources){
      this.props.onAddResources(this.props.agentIndex,this.state.input)
    }
  }
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  handleContentChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }
  render() {
    return (
      <div className='f-add' >
        <span onClick={this.showModal}>
        <Icon type="plus" />Specify Resources
        </span>
        <Modal
          title={'Specify Resoure for '+ this.props.name +'; seperate multiple resource names with commas'}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <input size="60" value={this.state.input} onChange={this.handleContentChange.bind(this)}/>
        </Modal>
      </div>
    );
  }
}

export default ResourceModal