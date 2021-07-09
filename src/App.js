import React from 'react'
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
const colors = ['red', 'green', 'blue', 'coral','red', 'green', 'blue', 'coral'];

function App () {

	return colors.map((color) => <table key={color} className={`table ${color}`}>{tbody}</table>);
};

export default App;
