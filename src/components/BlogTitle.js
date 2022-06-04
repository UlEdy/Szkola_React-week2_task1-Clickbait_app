const styles = {
	backgroundColor: '#55efc4',
	display: 'flex',
	flexDirection: 'column',
    borderRadius: 5,
	margin: 50,
	padding: 10,
	h2: {
		color: '#7d3651',
	},
};

const BlogTitle = ({ title, intro }) => (
	<div style={styles}>
		<h2 style={styles.h2}>{title}</h2>
		<p>{intro.substring(0, 25).concat('...')}</p>
	</div>
);

export default BlogTitle;
