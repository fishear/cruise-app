const INIT_RESOURCES = 'INIT_RESOURCES'
const ADD_RESOURCE= 'ADD_RESOURCE'
const DELETE_RESOURCE = 'DELETE_RESOURCE'

export default function(state,action){
	if(!state){
		state = {
			resources: []
		}
	}
	switch (action.type) {
		case INIT_RESOURCES:
			return {
				resources:[
					...state.resources,
					...action.resources
				]
			}
		case ADD_RESOURCE:
			return {
				resources: [...state.resource,action.resource]
			}
		case DELETE_RESOURCE:
			return {
				resources: [
					...state.resources.slice(0,action.resourceIndex),
					...state.resources.slice(action.resourceIndex+1)
				]
			}
		default:
			return state
	}
}

export const initResources = (agentIndex,resources) => {
	return {type: INIT_RESOURCES,agentIndex,resources}
}

export const addResource = (resource,agentIndex) => {
	return {type: ADD_RESOURCE,resource}
}

export const deleteResource = (resourceIndex,agentIndex) => {
	return {type: DELETE_RESOURCE,resourceIndex,agentIndex}
}