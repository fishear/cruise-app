const INIT_AGENTS = 'INIT_AGENTS'
const ADD_RESOURCE= 'ADD_RESOURCE'
const DELETE_RESOURCE = 'DELETE_RESOURCE'

export default function(state,action){
	if(!state){
		state = {
			agents: []
		}
	}
	switch (action.type) {
		case INIT_AGENTS:
			return {
				agents:[
					...state.agents,
					...action.agents
				]
			}
		case ADD_RESOURCE:
			let rcList = action.resourceNameStr.split(',')
			let newAddAgents = []
				state.agents.forEach(function(agent,index){
					let newResouce=[]
					agent.resources.forEach(function(r,i){
						newResouce.push(r)
					})
					if(index===action.agentIndex){
						newResouce = newResouce.concat(rcList)
					}
					let newAgent = {
						...agent,
						resources: newResouce
					}
					newAddAgents.push(newAgent)
				})
			return {
				agents: newAddAgents
			}
		case DELETE_RESOURCE:
			
			let newAgents = []
			state.agents.forEach(function(agent,index){
				let newResouce=[]
				agent.resources.forEach(function(r,i){
					if(index===action.agentIndex && i===action.resourceIndex){
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
			
			return {agents:newAgents}
		default:
			return state
	}
}

export const initAgents = (agents) => {
	return {type: INIT_AGENTS,agents}
}

export const addResource = (agentIndex,resourceNameStr) => {
	return {type: ADD_RESOURCE,agentIndex,resourceNameStr}
}

export const deleteResource = (agentIndex,resourceIndex) => {
	return {type: DELETE_RESOURCE,agentIndex,resourceIndex}
}
