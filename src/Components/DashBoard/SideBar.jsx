import React, { useState } from 'react';
import { FisIcons, FasIcons, VscGraph, BasIcons, IoMdSettings } from '../Icons';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import UserManagementPage from '../UserManagement/UserManagementPage';
import Index from '../UserManagement/Index';
export function SideBar() {
	const [toggle, setToggle] = useState(false);
	return (
		<>
			<div className="sidebar-menu overflow-hidden">
				<div className="row table-responsive">
					<div className={`sidebar ${toggle ? '' : 'toggle'}`}>
						<div className="w-auto heading mt-3 text-center">
							<span></span>
							<div>
								<span className="h6 text-center">Naveen Kumar</span>
								<select>
									<option selected value=""></option>
									<option value="">LogOut</option>
								</select>
							</div>
						</div>
						<ul className="w-auto list-group">
							<li className="w-auto list-group-item border-0">
								<Link className="text-decoration-none" to="/dashboard">
									<strong>
										<BasIcons.BsGraphUp style={{ fontWeight: 'bold' }} />
									</strong>
									DashBoard								
								</Link>
							</li>
							<li className="w-auto list-group-item border-0">
								<Link className="text-decoration-none" to="/UserPage">
									<BasIcons.BsReverseLayoutTextWindowReverse style={{ fontWeight: 'bold' }} />
									UserManagement 
								</Link>
							</li>
						</ul>
					</div>
					<div className="col ps-0 mt-0">
						<div className="navbar d-flex justify-content-between pt-0 p-2 navbar-light bg-light">
							<a
								className="navbar-brand cursor-pointer font-weight-bold"
								onClick={() => setToggle(!toggle)}
							>
								<span>
									<FasIcons.FaBars></FasIcons.FaBars>
								</span>
							</a>
							<div>
								<div className="btn-group ms-2">
									<button
										type="button"
										className="btn btn-sm btn-danger dropdown-toggle"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
								<span>
									<FasIcons.FaFlagCheckered></FasIcons.FaFlagCheckered>
								</span>
									</button>									
								</div>
								<IoMdSettings  className="ms-2"></IoMdSettings>
								<BasIcons.BsThreeDotsVertical className="ms-2"></BasIcons.BsThreeDotsVertical>
								<BasIcons.BsFullscreen className="ms-2"></BasIcons.BsFullscreen>
							</div>
						</div>
						<div className="p-1 body-section">
						<Routes>
								<Route path="/userpage" element={<Index />}></Route>
								<Route path="/*" element={<Dashboard />}></Route>
							</Routes>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
