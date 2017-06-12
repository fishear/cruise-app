import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Agent from './Agent'

class AgentList extends Component {
	static propTypes = {
		agents: PropTypes.array,
		onDeleteResource: PropTypes.func
	}
	static defaultProps = {
		agents: []
	}
	componentWillReceiveProps(nextProps) {
        this.props = nextProps
        console.log(nextProps,'newProps AL')
    }
	handleDeleteComment(agentIndex,resourceIndex){
		if(this.props.onDeleteResource){
			this.props.onDeleteResource(agentIndex,resourceIndex)
		}
	}
	handleAddResources(agentIndex,resourceNameStr){
		if(this.props.onAddResources){
			this.props.onAddResources(agentIndex,resourceNameStr)
		}
	}
	render(){
		console.log(this.props.agents,'render');
		return (
			<div>
				{this.props.agents.map((agent,i) => 
					<Agent agent={agent} key={i} index={i} onDeleteResource={this.handleDeleteComment.bind(this)} onAddResources={this.handleAddResources.bind(this)}/>
				)}
			</div>
			)
	}
}

export default AgentList