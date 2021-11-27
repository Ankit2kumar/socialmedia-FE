import './profile.css';
import Topbar from '../../components/topBar/TopBar';
import Sidebar from '../../components/sidebar/SideBar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';

export default function Profile() {
	return (
		<>
			<Topbar />
			<div className="profile">
				<Sidebar />
				<div className="profileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img
								className="profileCoverImg"
								src="assets/posts/post3.jpeg"
								alt=""
							/>
							<img
								className="profileUserImg"
								src="assets/person/person7.jpeg"
								alt=""
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">Safak Kocaoglu</h4>
							<span className="profileInfoDesc">Hello my friends!</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed />
						<RightBar profile />
					</div>
				</div>
			</div>
		</>
	);
}
