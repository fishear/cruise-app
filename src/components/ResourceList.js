import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Icon} from 'antd'
class ResourceList extends Component {
	static propTypes = {
		resources: PropTypes.array,
		agentIndex: PropTypes.number,
		onDeleteResource: PropTypes.func
	}
	static defaultProps = {
		resources: []
	}
	componentWillReceiveProps(nextProps) {
        this.props = nextProps
        console.log(nextProps,'nextR')
    }
	handleDeleteResource(resourceIndex){
		if(this.props.onDeleteResource){
			this.props.onDeleteResource(this.props.agentIndex,resourceIndex)
		}
	}
	render(){
		return (
			<div className='list'> |
			{this.props.resources.map((resource,i) => 
				<div key={i} className='resourceItem'>
				<span className='itemName'>{resource}</span>
				<Icon type="close-circle" onClick={this.handleDeleteResource.bind(this,i)} className='deleteIcon'/>
				</div>
			)}
			</div>
			)
	}
}

export default ResourceList