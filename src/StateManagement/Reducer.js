// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	console.log("action reducer")
	console.log(action.payload)
	switch (action.type) {
		case 'USER_VALID':
			return {
				...state,				
				isLogedIn: true
			};
		case 'USER_INVALID':
			return {
				...state,
				isLogedIn: false
			};
		case 'USERS_FETCH':
			return {
				...state,
				ListUserInfo: action.payload.objUserInfo ?? null,
				Message: action.payload.objResponse ?? null,
			};
		case 'USER_ADD':
			return {
				...state,
				ListUserInfo: action.payload.objUserInfo ?? null,
				Message: action.payload.objResponse ?? null,
			};
		case 'USER_UPDATE':
			return {
				...state,
				ListUserInfo: action.payload.objUserInfo ?? null,
				Message: action.payload.objResponse ?? null,
			};
		case 'USER_ERROR':{
			return {
				...state,
				isHavingError:true,
				Message:{
					ResponseCode:action.payload.Code,
					ResponseMessage:action.payload.Message
				}
			}
		}
		default:
			return state;
	}
};
