import axios from 'axios';
import { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

function Feed({ username }) {
	const [posts, setPosts] = useState([]);
	const [text, setText] = useState('');

	useEffect(() => {
		const fetchPosts = async () => {
			const res = username
				? await axios.get('posts/profile/' + username)
				: await axios.get('posts/timeline/619cdabf2ff48403b4241837');
			console.log(res, '<<<');
			//setPosts(res.data);
		};

		fetchPosts();
	}, [username]);
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share />

				{posts.map((p) => (
					<Post key={p._id} post={p} />
				))}
			</div>
		</div>
	);
}

export default Feed;
