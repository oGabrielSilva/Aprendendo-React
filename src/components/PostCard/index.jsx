import './styles.css'

export const PostCard = ({ post }) => (
    <div className="post">
        <img src={post.cover} alt={post.title}></img>
        <div className="post-content">
            <h1>{`${post.id} ${post.title}`}</h1>
            <p>
                <span>{post.body}</span>
            </p>
        </div>
    </div>
);
