import Topbar from '../../components/topBar/TopBar';
import Sidebar from '../../components/sidebar/SideBar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/RightBar';
import './home.css';

export default function Home() {
	return (
		<>
			<Topbar />
			<div className="homeContainer">
				<Sidebar />
				<Feed />
				<Rightbar />
			</div>
		</>
	);
}
