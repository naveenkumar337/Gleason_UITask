import React, { useContext, useState } from 'react';
import { Grid, _ } from 'gridjs-react';
import UserEntryForm from './UserEntryForm';
import { GlobalContext } from '../../StateManagement/Context';
import { FisIcons } from '../Icons';

export default function UserViewTable() {
	const { state, adduser } = useContext(GlobalContext);
	const [pageState, setState] = useState({
		enablePopUp: false,
		userID: 0,
		user: {}
	});
	const HandleToggle = (ev) => {
		setState((prevState) => ({
			...prevState,
			enablePopUp: false
		}));
	};
	const _formSubmit = (values) => {
		adduser(values);
		setState((prevState) => ({
			...prevState,
			enablePopUp: false
		}));
	};
	const ModalHandler = (ev) => {
		setState((prevState) => ({
			enablePopUp: !prevState.enablePopUp,
			userID: ev ? parseInt(ev.target.getAttribute('data-key')) : 0,
			user: state.ListUserInfo.filter((e) => e.UserID === pageState.userID)
		}));
	};
	return (
		<>
			<div className="p-1">
				<label name="customer" className="form-label">
					Customer
				</label>
				<select name="customer" className="form-select w-50">
					<option value="">select one</option>
					<option value="GEMS">Gleaseon</option>
					<option value="TCS">TCS</option>
				</select>
			</div>
			<div>
				<div className="d-flex mt-2 justify-content-between">
					<span>
						<span className="badge rounded-circle bg-secondary">
							<strong>
								<FisIcons.FiRefreshCcw className="" />
							</strong>
						</span>
					</span>
					<span>
						<button className="btn btn-link text-decoration-none" onClick={ModalHandler}>
							Add New User +
						</button>
					</span>
				</div>
				<Grid
					data={[...mapRecords(state.ListUserInfo ? state.ListUserInfo : null, ModalHandler)]}
					columns={[
						{ name: 'User', sort: { enabled: true } },
						{ name: 'EmailAddress', sort: { enabled: true } },
						{ name: 'Customer', sort: { enabled: true } },
						'Roles',
						'Actions'
					]}
					pagination={{
						limit: 5
					}}
					search={true}
					className={{ table: 'table table-responsive table-sm table-striped',paginationButton:"btn btn-default btn-sm",paginationButtonCurrent:"btn btn-sm btn-primary" }}
				></Grid>
				{
					<UserEntryForm
						show={pageState.enablePopUp}
						props={pageState.user}
						formSubmit={_formSubmit}
						toggleHandler={HandleToggle}
					/>
				}
			</div>
		</>
	);
}

function mapRecords(data, _Handler) {
	var newArray = [];
	if (data) {
		for (let user of data) {
			newArray.push([
				user.UserName,
				user.Email,
				user.Customer,
				!user.lstRoles ? '' : user.lstRoles.map((i) => i.Role).join(','),
				_(
					<button className="btn btn-sm btn-primary" data-key={user.UserID} onClick={_Handler}>
						Edit
					</button>
				)
			]);
		}
		return newArray;
	} else return null;
}
