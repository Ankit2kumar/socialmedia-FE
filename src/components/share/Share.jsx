import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CelebrationIcon from '@mui/icons-material/Celebration';

function Share() {
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img
						className="shareProfileImg"
						src="/assets/person/person.jpeg"
						alt=""
					/>
					<input
						placeholder="What's new, update us..."
						className="shareInput"
					/>
				</div>
				<hr className="shareHr" />
				<div className="shareBottom">
					<div className="shareOptions">
						<div className="shareOption">
							<PermMediaIcon htmlColor="tomato" className="shareIcon" />
							<span className="shareOptionText">Photo or Video</span>
						</div>
						<div className="shareOption">
							<AlternateEmailIcon htmlColor="grey" className="shareIcon" />
							<span className="shareOptionText">Tag</span>
						</div>
						<div className="shareOption">
							<LocationOnIcon htmlColor="green" className="shareIcon" />
							<span className="shareOptionText">Location</span>
						</div>
						<div className="shareOption">
							<InsertEmoticonIcon htmlColor="goldenrod" className="shareIcon" />
							<span className="shareOptionText">Feelings</span>
						</div>

						<div className="shareOption">
							<CelebrationIcon htmlColor="magenta" className="shareIcon" />
							<span className="shareOptionText">Celebrations</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Share;
