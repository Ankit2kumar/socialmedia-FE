import './sidebar.css';
import RssFeedSharpIcon from '@mui/icons-material/RssFeedSharp';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';

function SideBar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<RssFeedSharpIcon className="sidebarIcon" />
						<span className="sidebarListItemText">Feed</span>
					</li>
					<li className="sidebarListItem">
						<ChatIcon className="sidebarIcon" />
						<span className="sidebarListItemText">chats</span>
					</li>
					<li className="sidebarListItem">
						<VideoLibraryIcon className="sidebarIcon" />
						<span className="sidebarListItemText">Videos</span>
					</li>
					<li className="sidebarListItem">
						<GroupIcon className="sidebarIcon" />
						<span className="sidebarListItemText">Groups</span>
					</li>
					<li className="sidebarListItem">
						<BookmarkIcon className="sidebarIcon" />
						<span className="sidebarListItemText">Bookmarks</span>
					</li>
					<li className="sidebarListItem">
						<HelpOutlineIcon className="sidebarIcon" />
						<span className="sidebarListItemText">Questions</span>
					</li>
					<li className="sidebarListItem">
						<WorkOutlineIcon className="sidebarIcon" />
						<span className="sidebarListItemText">Jobs</span>
					</li>
					<li className="sidebarListItem">
						<EventIcon className="sidebarIcon" />
						<span className="sidebarListItemText">Events</span>
					</li>
					<li className="sidebarListItem">
						<SchoolIcon className="sidebarIcon" />
						<span className="sidebarListItemText">Courses</span>
					</li>
				</ul>
				<button className="sidebarButton">Show More</button>
				<hr className="sidebarHr" />
				<ul className="sidebarFriendList">
					<li className="sidebarFriend">
						<img
							src="/assets/person/person2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">Dane Isaac</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/person2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">Dane Isaac</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/person2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">Dane Isaac</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/person2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">Dane Isaac</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/person2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">Dane Isaac</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/person2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">Dane Isaac</span>
					</li>
					<li className="sidebarFriend">
						<img
							src="/assets/person/person2.jpeg"
							alt=""
							className="sidebarFriendImg"
						/>
						<span className="sidebarFriendName">Dane Isaac</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SideBar;
