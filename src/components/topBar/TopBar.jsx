import './topbar.css';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';

const TopBar = () => {
	return (
		<div className="topBarContainer">
			<div className="topBarLeft">
				<span className="logo">Connecto</span>
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
				<img src="/assets/person/person.jpeg" alt="" className="topBarImg" />
			</div>
		</div>
	);
};

export default TopBar;
