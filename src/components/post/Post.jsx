import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';
import { useState } from 'react';

const Post = ({ post }) => {
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img
							className="postProfileImg"
							src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
							alt=""
						/>
						<span className="postUsername">
							{Users.filter((u) => u.id === post.userId)[0].username}
						</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVertIcon />
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.desc}</span>
					<img className="postImg" src={post.photo} alt="" />
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
