import './topbar.css';
import { Link } from 'react-router-dom';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const TopBar = () => {
	const { user } = useContext(AuthContext);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	return (
		<div className="topBarContainer">
			<div className="topBarLeft">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<span className="logo">Connecto</span>
				</Link>
			</div>
			<div className="topBarCenter">
				<div className="searchBar">
					<SearchIcon className="searchIcon" />
					<input
						placeholder="search for friends or posts"
						className="searchInput"
					/>
				</div>
			</div>
			<div className="topBarRight">
				<div className="topBarLinks">
					<span className="topBarLinks">Homepage</span>
					<span className="topBarLinks">Timeline</span>
				</div>
				<div className="topBarIcons">
					<div className="topBarIconItem">
						<PersonIcon />
						<span className="topBarIconBadge">1</span>
					</div>
					<div className="topBarIconItem">
						<ChatIcon />
						<span className="topBarIconBadge">5</span>
					</div>
					<div className="topBarIconItem">
						<CircleNotificationsIcon />
						<span className="topBarIconBadge">6</span>
					</div>
				</div>
				<Link to={`/profile/${user.username}`}>
					<img
						src={
							user.profilePicture
								? PF + user.profilePicture
								: PF + 'person/noAvatar.jpeg'
						}
						alt=""
						className="topBarImg"
					/>
				</Link>
			</div>
		</div>
	);
};

export default TopBar;
