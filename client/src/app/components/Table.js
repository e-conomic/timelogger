import React from 'react';

export default function Table() {
	return (
		<table className="table">
			<thead className="thead-dark">
				<tr>
					<th scope="col">#</th>
					<th scope="col">Project Name</th>
					<th scope="col">abc</th>
					<th scope="col">xyz</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>Project 1</td>
					<td>abc</td>
					<td>xyz</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Project 2</td>
					<td>abc</td>
					<td>xyz</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Project 3</td>
					<td>abc</td>
					<td>xyz</td>
				</tr>
			</tbody>
		</table>
	);
}