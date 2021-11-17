import React, { useContext } from 'react';
import { Formik, Field, ErrorMessage, Form } from 'formik';
import * as yup from 'yup';
import { GlobalContext } from '../../StateManagement/Context';
const initialValues = { userName: '', passWord: '' };
const valideSchema = yup.object({
	userName: yup.string().required('required'),
	passWord: yup.string().required('required')
});

export default function LoginPage() {
	const { state,login } = useContext(GlobalContext);
	const onSubmit = (values) => {	 	
		
		login(values.userName,values.passWord);
	};
	return (
		<div className="container min-vh-100 login-page">
			<div className="d-flex align-items-center vh-100 justify-content-center">
				<div className="rounded-1 login-form w-50 p-5">
					<div className="text-center">
						<h5>GEMS Cloud Web Application</h5>
					</div>
					<div>
						<Formik initialValues={initialValues} validationSchema={valideSchema} onSubmit={onSubmit}>
							<Form className="justify-content-center">
								<div className="mt-3 col-sm-12">
									<Field
										className="form-control form-control-lg"
										name="userName"
										placeholder="Enter UserName"
									/>
									<ErrorMessage name="userName">
										{(msg) => <span className="text-danger">* Required</span>}
									</ErrorMessage>
								</div>
								<div className="mt-2 col-sm-12">
									<Field
										name="passWord"
										className="form-control form-control-lg"
										placeholder="Enter UserName"
									/>
									<ErrorMessage name="passWord">
										{(msg) => <span className="text-danger">* Required</span>}
									</ErrorMessage>
								</div>
								<div className="text-center">
									<button className="btn  btn-success w-100 btn-lg mt-3">Login</button>
								</div>
							</Form>
						</Formik>
					</div>
				</div>
			</div>
			{state.isHavingError?<div className="text-danger">{JSON.stringify(state.Message)}</div>:null}
		</div>
	);
}
