import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';
import SideBar from '../../components/sidebar/SideBar';
import TopBar from '../../components/topBar/TopBar';
import './home.css';

function Home() {
	return (
		<>
			<TopBar />
			<div className="homeContainer">
				<SideBar />
				<Feed />
				<RightBar />
			</div>
		</>
	);
}

export default Home;
