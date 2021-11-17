import PropTypes from 'prop-types';

const Roles = {
	UserID: PropTypes.number,
	Role: PropTypes.string,
	RoleType: PropTypes.number
};

const UserInfo = {
	UserID: PropTypes.number,
	UserName: PropTypes.string,
	FirstName: PropTypes.string,
	LastName: PropTypes.string,
	Customer: PropTypes.string,
	Roles: PropTypes.arrayOf(Roles)
};
export const initialState = {
	isHavingError: (PropTypes.boolean = false),
	isLogedIn: (PropTypes.boolean = false),
	Message: {
		ResponseCode: PropTypes.number,
		ResponseMessage: PropTypes.string
	},
	ListUserInfo: PropTypes.arrayOf(UserInfo)
};

export default initialState;
