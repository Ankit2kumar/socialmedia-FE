import './profile.css';
import { useEffect, useState } from 'react';
import Topbar from '../../components/topBar/TopBar';
import Sidebar from '../../components/sidebar/SideBar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';
import axios from 'axios';
import { useParams } from 'react-router';

export default function Profile() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const [user, setUser] = useState({});

	const username = useParams().username;

	useEffect(() => {
		const fetchUser = async () => {
			/*
			const res = await fetch(url)  for a get method
			const resData = await res.json()
			*/

			const res = await axios.get(`/users?username=${username}`);
			setUser(res.data);
		};

		fetchUser();
	}, [username]);

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
								src={user.coverPicture || PF + 'person/noCover.jpeg'}
								alt=""
							/>
							<img
								className="profileUserImg"
								src={user.profilePicture || PF + 'person/noAvatar.jpeg'}
								alt=""
							/>
						</div>
						<div className="profileInfo">
							<h4 className="profileInfoName">{user.username}</h4>
							<span className="profileInfoDesc">{user.desc}</span>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed username={username} />
						<RightBar user={user} />
					</div>
				</div>
			</div>
		</>
	);
}
