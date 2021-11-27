import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

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
					{Users.map((u) => (
						<Online key={u.id} user={u} />
					))}
				</ul>
			</div>
		</div>
	);
}

export default RightBar;
