const td=<td>item</td>

function App () {
	return (
		<>
			<table className="table red">
				<tbody>
				<tr>
					{td}
					{td}
					{td}
				</tr>
				<tr>
					{td}
					{td}
					{td}
				</tr>
				<tr>
					{td}
					{td}
					{td}
				</tr>
				</tbody>
			</table>

			<table className="table green">
				<tbody>
				<tr>
					{td}
					{td}
					{td}
				</tr>
				<tr>
					{td}
					{td}
					{td}
				</tr>
				<tr>
					{td}
					{td}
					{td}
				</tr>
				</tbody>
			</table>

			<table className="table blue">
				<tbody>
				<tr>
					<td>item</td>
					<td>item</td>
					<td>item</td>
				</tr>
				<tr>
					<td>item</td>
					<td>item</td>
					<td>item</td>
				</tr>
				<tr>
					<td>item</td>
					<td>item</td>
					<td>item</td>
				</tr>
				</tbody>
			</table>
		</>
	);
}

export default App;
