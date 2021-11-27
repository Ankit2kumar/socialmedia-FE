import './register.css';

function Register() {
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
						<div className="loginBox">
							<input placeholder="Username" className="loginInput" />
							<input placeholder="Email" className="loginInput" />
							<input placeholder="Password" className="loginInput" />
							<input placeholder="Password Again" className="loginInput" />
							<button className="loginButton">Sign Up</button>

							<button className="loginRegisterButton">
								Log into your Account
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Register;
