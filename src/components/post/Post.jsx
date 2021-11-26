import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = ({ post }) => {
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postProfileImg"
							src="/assets/person/person.jpeg"
							alt=""
						/>
						<span className="postUsername">Maria Jonas</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVertIcon />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img className="postImg" src={post.profilePicture} alt="" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img className="likeIcon" src="/assets/like-icon.png" alt="" />
						<img className="likeIcon" src="/assets/heart-icon.png" alt="" />
						<span className="postLikeCounter">{post.like} people like it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">{post.comment}Comments</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
