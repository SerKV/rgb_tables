const td = <td>item</td>;

const tr = (
	<tr>
		{td}
		{td}
		{td}
	</tr>);

const tbody = (
	<tbody>
	{tr}
	{tr}
	{tr}
	</tbody>
);

function App () {
	const colors = ['red', 'green', 'blue', 'coral'];

	return colors.map((color) => <table key={color} className={`table ${color}`}>{tbody}</table>);
};

export default App;
