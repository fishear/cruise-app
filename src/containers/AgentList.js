import React, {Component} from 'react'
import { connect } from 'react-redux'
import AgentList from '../components/AgentList'
import {initAgents, addResource,deleteResource} from '../reducers/agents'
class AgentListContainer extends Component {
	componentWillMount(){
		this._loadAgents()
	}
	componentWillReceiveProps(nextProps) {
        this.props = nextProps
        console.log(nextProps,'newProps ALC')
    }
	_loadAgents () {
		let agents = localStorage.getItem('agents')
		var InitialData = [{hostname:'bjstdmngbgr02@thoughtworks.com',ip:'192.168.1.2',status:'idle',resources:['chrome','firefox']},
			{hostname:'bjstdmngbgr03@thoughtworks.com',ip:'192.168.1.3',status:'idle',resources:['chrome','firefox']},
			{hostname:'bjstdmngbgr04@thoughtworks.com',ip:'192.168.1.4',status:'idle',resources:['chrome','firefox']}
			]
		agents = agents? JSON.parse(agents): InitialData
		this.props.initAgents(agents)
	}
	handleDeleteResource(agentIndex,resourceIndex){
		let newAgents = []
			this.props.agents.forEach(function(agent,index){
				let newResouce=[]
				agent.resources.forEach(function(r,i){
					if(index===agentIndex && i===resourceIndex){
						return
					}else{
						newResouce.push(r)
					}
				})
				let newAgent = {
					...agent,
					resources: newResouce
				}
				newAgents.push(newAgent)
			})
		localStorage.setItem('agents',JSON.stringify(newAgents))
		if(this.props.onDeleteResource){
			// this.props.onDeleteResource 是 connect 传进来的
      		// 会 dispatch 一个 action 去删除资源
			this.props.onDeleteResource(agentIndex,resourceIndex)
		}
		
	}
	handleAddResources(agentIndex,resourceNameStr){
		let rcList = resourceNameStr.split(',')
		let newAgents = []
			this.props.agents.forEach(function(agent,index){
				let newResouce=[]
				agent.resources.forEach(function(r,i){
					newResouce.push(r)
				})
				if(index===agentIndex){
					newResouce = newResouce.concat(rcList)
				}
				let newAgent = {
					...agent,
					resources: newResouce
				}
				newAgents.push(newAgent)
			})
		localStorage.setItem('agents',JSON.stringify(newAgents))
		if(this.props.onAddResources){
			// this.props.onAddResources 是 connect 传进来的
      		// 会 dispatch 一个 action 去添加资源
			this.props.onAddResources(agentIndex,resourceNameStr)
		}
	}
	render(){
		console.log(this.props.agents,'alc render')
		return (
			<AgentList agents={this.props.agents} onDeleteResource={this.handleDeleteResource.bind(this)} onAddResources={this.handleAddResources.bind(this)} />
			)
	}
}
const mapStateToProps = (state) => {
	return {
		agents: state.agents
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		initAgents: (agents) => {
			dispatch(initAgents(agents))
		},
		onDeleteResource: (agentIndex,resourceIndex) => {
			dispatch(deleteResource(agentIndex,resourceIndex))
		},
		onAddResources: (agentIndex,resourceNameStr) => {
			dispatch(addResource(agentIndex,resourceNameStr))
		}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(AgentListContainer)