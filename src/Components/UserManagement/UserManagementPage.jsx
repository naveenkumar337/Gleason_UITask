import React, { useEffect, useState, useContext } from 'react';
import { FasIcons } from '../Icons';
import UserViewTable from './UserViewTable';
import { GlobalContext } from '../../StateManagement/Context';
export default function UserManagementPage() {
	const { state, fetchUsers } = useContext(GlobalContext);
	
	useEffect(() => {
		fetchUsers();
	}, []);
	return (
		<>
			<div className="user-section">
				<div className="header-section">
					<div>
						<FasIcons.FaLessThan className="small"></FasIcons.FaLessThan>
						<span className="ms-2">Naveen kumar</span>
					</div>
				</div>
				<div className="user-table">
					<div className="row user-table-header rounded-1">
						<div className="col-md-6 text-center p-2 user-view">View User</div>
						<div className="col-md-6 text-center p-2">Grant Permission</div>
					</div>
					{
						<div>
							{!state.Message && <p>Loading...</p>}
							{(state.Message && state.Message.ResponseCode <= 0) && (
								<p className="text-danger">Some thing went wrong</p>
							)}
							{(state.Message && state.Message.ResponseCode > 0) && <UserViewTable />}
						</div>
					}
				</div>
			</div>
		</>
	);
}
