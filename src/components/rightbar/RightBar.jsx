import './rightbar.css';

function RightBar() {
	return (
		<div className="rightBar">
			<div className="rightBarWrapper">
				<div className="birthdayContainer">
					<img className="birthdayImg" src="/assets/gift.png" alt="" />
					<span className="birthdayText">
						<b>John Doe</b> and <b>6 other friends</b> have birthday today
					</span>
				</div>
				<img className="rightBarAd" src="/assets/ad.jpeg" alt="" />
				<h4 className="rightBarTitle">Online friends</h4>
				<ul className="rightBarFriendList">
					<li className="rightBarFriend">
						<div className="rightBarProfileImgContainer">
							<img
								src="/assets/person/person3.jpeg"
								alt=""
								className="rightBarProfileImg"
							/>
							<span className="rightBarOnline"></span>
						</div>
						<span className="rightBarUserName">Alicia John</span>
					</li>
					<li className="rightBarFriend">
						<div className="rightBarProfileImgContainer">
							<img
								src="/assets/person/person3.jpeg"
								alt=""
								className="rightBarProfileImg"
							/>
							<span className="rightBarOnline"></span>
						</div>
						<span className="rightBarUserName">Alicia John</span>
					</li>
					<li className="rightBarFriend">
						<div className="rightBarProfileImgContainer">
							<img
								src="/assets/person/person3.jpeg"
								alt=""
								className="rightBarProfileImg"
							/>
							<span className="rightBarOnline"></span>
						</div>
						<span className="rightBarUserName">Alicia John</span>
					</li>
					<li className="rightBarFriend">
						<div className="rightBarProfileImgContainer">
							<img
								src="/assets/person/person3.jpeg"
								alt=""
								className="rightBarProfileImg"
							/>
							<span className="rightBarOnline"></span>
						</div>
						<span className="rightBarUserName">Alicia John</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default RightBar;
