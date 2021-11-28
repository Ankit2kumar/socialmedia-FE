import React from 'react';
import './online.css';

function Online({ user }) {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<>
			<li className="rightBarFriend">
				<div className="rightBarProfileImgContainer">
					<img
						src={PF + user.profilePicture}
						alt=""
						className="rightBarProfileImg"
					/>
					<span className="rightBarOnline"></span>
				</div>
				<span className="rightBarUserName">{user.username}</span>
			</li>
		</>
	);
}

export default Online;
