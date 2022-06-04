import BlogTitle from './components/BlogTitle';

const styles = {
	backgroundColor: '#00b894',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-around',
};

const posts = [
	{
		id: 1,
		title: 'Pilne: Co to był za dzień!',
		intro: 'Tego świat jeszcze nie widział',
	},
	{
		id: 2,
		title: 'Wszyscy zazdroszą Polakom!',
		intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie wymyślił',
	},
	{
		id: 3,
		title: 'Adam Małysz Zgolił wąs',
		intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy',
	}
];

function App() {
	return (
		<div style={styles}>
			{posts.map(({ id, title, intro }) => (
				<BlogTitle key={id} title={title} intro={intro} />
			))}
		</div>
	);
};

export default App;
