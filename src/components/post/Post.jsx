import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Post = () => {
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
						<span className="postDate">2 mins ago</span>
					</div>
					<div className="postTopRight">
						<MoreVertIcon />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">Hey! It is my first post ever!</span>
					<img className="postImg" src="/assets/posts/post1.jpeg" alt="" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img className="likeIcon" src="/assets/like-icon.png" alt="" />
						<img className="likeIcon" src="/assets/heart-icon.png" alt="" />
						<span className="postLikeCounter">32 people like it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">9 Comments</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
