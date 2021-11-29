import { Password } from '@mui/icons-material';
import axios from 'axios';
import { useRef } from 'react';
import { useHistory } from 'react-router';
import './register.css';

function Register() {
	const URL = 'http://localhost:8800/api/auth/register';
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const passwordAgain = useRef();
	const history = useHistory();

	const handleClick = async (e) => {
		e.preventDefault();
		if (passwordAgain.current.value !== password.current.value) {
			password.current.setCustomValidity("Passwords don't match!");
		} else {
			const user = {
				username: username.current.value,
				email: email.current.value,
				password: password.current.value,
			};
			try {
				await axios.post('/auth/register', user);
				history.push('/login');
			} catch (error) {
				console.log(error);
			}
		}
	};
	return (
		<>
			<div className="login">
				<div className="loginWrapper">
					<div className="loginLeft">
						<h3 className="loginLogo">Connecto</h3>
						<span className="loginDesc">
							Connect with people around the globe with{' '}
							<strong>Connecto</strong>.
						</span>
					</div>
					<div className="loginRight">
						<form className="loginBox" onSubmit={handleClick}>
							<input
								required
								ref={username}
								placeholder="Username"
								className="loginInput"
							/>
							<input
								required
								ref={email}
								type="email"
								placeholder="Email"
								className="loginInput"
							/>
							<input
								required
								ref={password}
								type="password"
								placeholder="Password"
								className="loginInput"
								minLength="6"
							/>
							<input
								required
								ref={passwordAgain}
								type="password"
								placeholder="Password Again"
								className="loginInput"
							/>
							<button type="submit" className="loginButton">
								Sign Up
							</button>
							<button type="reset" className="loginButton">
								Reset
							</button>

							<button className="loginRegisterButton">
								Log into your Account
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
