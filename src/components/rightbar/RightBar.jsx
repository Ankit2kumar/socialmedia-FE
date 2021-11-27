import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function rightBar({ profile }) {
	const HomerightBar = () => {
		return (
			<>
				<div className="birthdayContainer">
					<img className="birthdayImg" src="assets/gift.png" alt="" />
					<span className="birthdayText">
						<b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
					</span>
				</div>
				<img className="rightBarAd" src="assets/ad.jpeg" alt="" />
				<h4 className="rightBarTitle">Online Friends</h4>
				<ul className="rightBarFriendList">
					{Users.map((u) => (
						<Online key={u.id} user={u} />
					))}
				</ul>
			</>
		);
	};

	const ProfilerightBar = () => {
		return (
			<>
				<h4 className="rightBarTitle">User information</h4>
				<div className="rightBarInfo">
					<div className="rightBarInfoItem">
						<span className="rightBarInfoKey">City:</span>
						<span className="rightBarInfoValue">New York</span>
					</div>
					<div className="rightBarInfoItem">
						<span className="rightBarInfoKey">From:</span>
						<span className="rightBarInfoValue">Madrid</span>
					</div>
					<div className="rightBarInfoItem">
						<span className="rightBarInfoKey">Relationship:</span>
						<span className="rightBarInfoValue">Single</span>
					</div>
				</div>
				<h4 className="rightBarTitle">User friends</h4>
				<div className="rightBarFollowings">
					<div className="rightBarFollowing">
						<img
							src="assets/person/1.jpeg"
							alt=""
							className="rightBarFollowingImg"
						/>
						<span className="rightBarFollowingName">John Carter</span>
					</div>
					<div className="rightBarFollowing">
						<img
							src="assets/person/2.jpeg"
							alt=""
							className="rightBarFollowingImg"
						/>
						<span className="rightBarFollowingName">John Carter</span>
					</div>
					<div className="rightBarFollowing">
						<img
							src="assets/person/3.jpeg"
							alt=""
							className="rightBarFollowingImg"
						/>
						<span className="rightBarFollowingName">John Carter</span>
					</div>
					<div className="rightBarFollowing">
						<img
							src="assets/person/4.jpeg"
							alt=""
							className="rightBarFollowingImg"
						/>
						<span className="rightBarFollowingName">John Carter</span>
					</div>
					<div className="rightBarFollowing">
						<img
							src="assets/person/5.jpeg"
							alt=""
							className="rightBarFollowingImg"
						/>
						<span className="rightBarFollowingName">John Carter</span>
					</div>
					<div className="rightBarFollowing">
						<img
							src="assets/person/6.jpeg"
							alt=""
							className="rightBarFollowingImg"
						/>
						<span className="rightBarFollowingName">John Carter</span>
					</div>
				</div>
			</>
		);
	};
	return (
		<div className="rightBar">
			<div className="rightBarWrapper">
				{profile ? <ProfilerightBar /> : <HomerightBar />}
			</div>
		</div>
	);
}
