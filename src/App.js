import Home from './pages/home/Home';
import Login from '../src/pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import { Switch, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/profile/:username">
					<Profile />
				</Route>
			</Switch>
		</>
	);
}

export default App;
