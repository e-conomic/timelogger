import React from 'react';
import Table from '../components/Table';

export default function Entries() {
	return (
		<>
			<div className="row">
				<div className="col-auto mr-auto">
					<button className="btn btn-primary" type="submit">Add entries</button>
				</div>

				<div className="col-auto">
					<form className="form-inline my-2 my-lg-0 float-right">
						<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</div>

			<Table />
		</>
	);
}