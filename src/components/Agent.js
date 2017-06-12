import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ResourceList from './ResourceList'
import ResourceModal from './ResourceModal'

class Agent extends Component {
	static propTypes = {
		agent: PropTypes.object.isRequired,
		index: PropTypes.number,
		onAddResources: PropTypes.func,
		onDeleteResource: PropTypes.func
	}
	componentWillReceiveProps(nextProps) {
        this.props = nextProps
        console.log(nextProps,'nextA')
    }
	render () {
		return (
			<div className='agent'>
				<div className='agent-info'>
					<span className='hostname'>{this.props.agent.hostname} </span> |
					<span>{this.props.agent.status} </span> |
					<span>{this.props.agent.ip}</span> 
				</div>
				<div className='agent-func'>
					<ResourceModal name={this.props.agent.hostname} onAddResources={this.props.onAddResources.bind(this)} agentIndex={this.props.index}/>
					<ResourceList resources={this.props.agent.resources} agentIndex={this.props.index} onDeleteResource={this.props.onDeleteResource.bind(this)}/>
				</div>
			</div>
			)
	}
}

export default Agent