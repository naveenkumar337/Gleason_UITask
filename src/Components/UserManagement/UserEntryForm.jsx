import React,{useContext} from 'react';
import { Form, Formik, Field, ErrorMessage} from 'formik';
import * as yup from 'yup';
import { GlobalContext } from '../../StateManagement/Context';
export default function UserEntryForm({ show, props, toggleHandler,formSubmit }) {
	
	return (
		<div class={`modal w-100 modal-responsive ${show ? 'd-block' : 'd-none'}`} id="myModal">
			<div class="modal-dialog w-100 m-dialog">
				<div class="modal-content w-100">
					<div class="modal-header m-header">
						<h4 class="modal-title">{props.name}</h4>
						<button type="button" className="close btn btn-rounded p-0 btn-default" onClick={(e) => toggleHandler(e)}>
							<span className="h6">&times;</span>
						</button>
					</div>
					<div class="modal-body m-body">
						<UserForm user={props[0]} formSubmitHandler={formSubmit} />
					</div>
				</div>
			</div>
		</div>
	);
}

function UserForm({user,formSubmitHandler}) {
	const _ValidationShema = yup.object().shape({
		Customer: yup.string().oneOf(['GEMS', 'TCS'], 'Required').required('Required'),
		FirstName: yup.string().required('Required'),
		LastName: yup.string().required('Required'),
		UserName: yup.string().required('Required'),
		Email: yup.string().email('Please give valid email').required('Required'),
		Roles: yup.array().required('Required')
	});
	console.log("user",user)
	var initialState={
		FirstName: '',
		LastName: '',
		Customer: '',
		Email: '',
		UserName: '',
		Roles: []
	};
	if(user!==undefined){
		initialState={
			FirstName:user.FirstName,
			LastName:user.LastName,
			Customer:user.Customer,
			Email:user.Email,
			UserName:user.UserName,
			Roles:user.lstRoles.map(e=>e.RoleType.toString())
		}	
	}
	console.log(initialState)
	return (
		<>
			<Formik validationSchema={_ValidationShema} initialValues={initialState} onSubmit={formSubmitHandler}>
				<Form>
					<div className="row">
						<div className="col-sm-6">
							<label htmlFor="Customer">Customer</label>
							<Field component="select" name="Customer" className="form-select">
								<option value="">Select Any One...</option>
								<option value="GEMS">Gleason</option>
								<option value="TCS">TCS</option>
							</Field>
							<ErrorMessage component="div"  className="text-danger" name="Customer" />
						</div>
						<div className="col-sm-6">
							<label htmlFor="UserName">UserName</label>
							<Field name="UserName" id="UserName" className="form-control" />
							<ErrorMessage component="div"  className="text-danger" name="UserName" />
						</div>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className="col">
								<label htmlFor="FirstName">FirstName</label>
								<Field name="FirstName" id="FirstName" className="form-control" />
								<ErrorMessage component="div"  className="text-danger" name="FirstName" />
							</div>
							<div className="col">
								<label htmlFor="LastName">LirstName</label>
								<Field name="LastName" id="LirstName" className="form-control" />
								<ErrorMessage component="div"  className="text-danger" name="LastName" />
							</div>
							<div className="col">
								<label htmlFor="Email">Email</label>
								<Field name="Email" id="Email" className="form-control" />
								<ErrorMessage component="div"   className="text-danger" name="Email" />
							</div>
						</div>
						<div className="col-sm-6">
							<div id="checkbox-group">Roles</div>
							<div role="group" aria-labelledby="checkbox-group">
								<label>
									<Field type="checkbox" id="Roles" name="Roles" value="1" />
									User
								</label>
								<label>
									<Field type="checkbox" name="Roles" value="2" />
									Admin
								</label>
								<ErrorMessage component="div"  className="text-danger" name="Roles" />
							</div>
						</div>
					</div>
					<div className="d-flex m-3 float-end">
						<button className="btn btn-sm btn-success me-3" type="submit">
							Submit
						</button>
						<button className="btn btn-sm btn-primary" type="reset">
							Reset
						</button>
					</div>
				</Form>
			</Formik>
		</>
	);
}
