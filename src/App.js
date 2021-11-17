import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LoginPage from './Components/Login/LoginPage';
import { SideBar } from './Components/DashBoard/SideBar';
import Index from './Components/DashBoard/Index';
import HomeIndex from './Components/HomeIndex';
import { GlobalProvider } from './StateManagement/Context';
function App() {
	return (
		<GlobalProvider>
			<div>
				<HomeIndex />
				{/* <Index /> */}
			</div>
		</GlobalProvider>
	);
}

export default App;
