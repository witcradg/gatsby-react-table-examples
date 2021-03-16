import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import Layout from '../layout';
import getColumnDefinitions from './columnDefinitions';

import getData from './getData';

const Styles = styled.div`
	table {
		border-spacing: 0;
		border: 1px solid black;

		tr {
			:last-child {
				td {
					border-bottom: 0;
				}
			}
		}

		th,
		td {
			padding: 0.5rem;
			border-bottom: 1px solid black;
			border-right: 1px solid black;

			:last-child {
				border-right: 0;
			}
		}

		th {
			background: green;
			border-bottom: 3px solid blue;
			color: white;
			font-weight: bold;
		}
	}
`;

export default function SetSingleColumnWidth() {

    const columns = React.useMemo(() => getColumnDefinitions(), []);

	const data = React.useMemo(() => getData(10), []);

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

	return (
		<Layout title="React Table: Set Single Column Width">
			<Styles>
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps([ { width: column.width } ])}>
										{column.render('Header')}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</Styles>
			<div>
				<p className="p-4 pt-2 pb-0">Note:</p>

				<p className="px-4 text-lg">The Name column has been artificially forced to 
                400px to show how to set width by defining an additonal column attribute. 
                This can also be used for setting a className or other attributes. 
                It is based on the following links</p>
				<p className="px-4">
					<a className="anchor" href="https://retool.com/blog/building-a-react-table-component/">
						https://retool.com/blog/building-a-react-table-component
					</a>
				</p>
				<p className="px-4">
					<a
						className="anchor"
						href="https://stackoverflow.com/questions/64371735/react-table-how-to-fix-width-of-th-elements"
					>
						https://stackoverflow.com/questions/64371735/react-table-how-to-fix-width-of-th-elements
					</a>
				</p>
			</div>
		</Layout>
	);
}
