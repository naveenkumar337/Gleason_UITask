import React, { useReducer } from 'react';
import { LoginService, FetchUser, AddUser,UpdateUser } from '../Serviceses/Services';
import initialState from './State';
import reducer from './Reducer';
import { createBrowserHistory } from 'history';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
	const history = createBrowserHistory();
	const [state, dispatch] = useReducer(reducer, initialState);

	function fetchUsers() {
		FetchUser()
			.then((res) => {
				var data = res.data;
				if (data.objResponse.ResponseCode > 0) {
					dispatch({
						type: 'USERS_FETCH',
						payload: data
					});
				} else {
					dispatch({
						type: 'USER_ERROR',
						payload: {
							Code: data.objResponse.ResponseCode,
							Message: data.objResponse.ResponseMessage
						}
					});
				}
			})
			.catch((err) => {
				dispatch({
					type: 'USER_ERROR',
					payload: {
						Code: 401,
						Message: err.message
					}
				});
			});
	}
	function userLogin(userName, passWord) {
		LoginService(userName, passWord)
			.then((res) => {
				var data = res.data;
				if (data.ResponseCode > 0) {
					dispatch({
						type: 'USER_VALID'
					});
					history.push('/dashboard');
				} else alert(JSON.stringify(data));
			})
			.catch((err) => {
				dispatch({
					type: 'USER_ERROR',
					payload: {
						Code: err.statusCode,
						Message: err.message
					}
				});
			});
	}
	function deleteUser(id) {
		dispatch({
			type: 'USER_DELETE',
			payload: id
		});
	}
	function addUser(userInfo) {
		var arr = [];
		for (let role in userInfo.Roles) {
			if (role === '1') {
				arr.push({
					Role: 'User',
					RoleType: 1
				});
			} else {
				arr.push({
					Role: 'Admin',
					RoleType: 2
				});
			}
		}
		var obj = {
			UserName: userInfo.UserName,
			FirstName: userInfo.FirstName,
			LastName: userInfo.LastName,
			Email: userInfo.Email,
			Customer:userInfo.Customer,
			addRoles: arr
		};
		AddUser(obj)
			.then((res) => {
				if (res.data.objResponse.ResponseCode > 0) {
					dispatch({
						type: 'USER_ADD',
						payload: res.data
					});
				}
			})
			.catch((err) => {
				dispatch({
					type: 'USER_ERROR',
					payload: {
						Code: err.statusCode,
						Message: err.message
					}
				});
			});
	}
	function updateUser(userInfo) {
		UpdateUser(userInfo).then((res) => {
			if (res.data.objResponse.ResponseCode > 0) {
				dispatch({
					type: 'USER_Update',
					payload: res.data
				});
			}
		})
		.catch((err) => {
			dispatch({
				type: 'USER_ERROR',
				payload: {
					Code: err.statusCode,
					Message: err.message
				}
			});
		});
	}
	return (
		<GlobalContext.Provider
			value={{
				state,
				login: userLogin,
				update: updateUser,
				adduser: addUser,
				deleteuser: deleteUser,
				fetchUsers: fetchUsers
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
