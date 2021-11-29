import { useContext, useRef } from 'react';
import './login.css';
import { AuthContext } from '../../context/AuthContext';
import { loginCall } from '../../apiCalls';
import CircularProgress from '@mui/material/CircularProgress';

function Login() {
	const email = useRef();
	const password = useRef();
	const { user, isFetching, error, dispatch } = useContext(AuthContext);

	const handleClick = (event) => {
		event.preventDefault();
		loginCall(
			{ email: email.current.value, password: password.current.value },
			dispatch
		);
		// history.push(/home profile ) but only on success
	};

	console.log(user);
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
								placeholder="Email"
								type="email"
								className="loginInput"
								ref={email}
							/>
							<input
								required
								minLength="6"
								placeholder="Password"
								type="password"
								className="loginInput"
								ref={password}
							/>
							<button
								className="loginButton"
								type="submit"
								disabled={isFetching}
							>
								{isFetching ? (
									<CircularProgress
										color="white"
										size="20px"
										style={{
											display: 'flex',
											alignSelf: 'center',
										}}
									/>
								) : (
									'Log In'
								)}
							</button>
							<span className="loginForgot">Forgot Password?</span>
							<button className="loginRegisterButton">
								Login
								{/* {isFetching ? (
									<CircularProgress
										color="white"
										size="20px"
										style={{
											display: 'flex',
											alignSelf: 'center',
										}}
									/>
								) : (
									'Create a new account'
								)} */}
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Login;
