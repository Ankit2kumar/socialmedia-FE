import React from 'react';
import './online.css';

function Online({ user }) {
	return (
		<>
			<li className="rightBarFriend">
				<div className="rightBarProfileImgContainer">
					<img
						src={user.profilePicture}
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
