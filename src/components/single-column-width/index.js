import React from 'react';
import { useTable } from 'react-table';
import styled from 'styled-components';
import Layout from '../layout';

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

export default function Retool() {
	const data = React.useMemo(
		() => [
			{
				name: 'Kim Parrish',
				address: '4420 Valley Street, Garnerville, NY 10923',
				date: '07/11/2020',
				order: '87349585892118'
			},
			{
				name: 'Michele Castillo',
				address: '637 Kyle Street, Fullerton, NE 68638',
				date: '07/11/2020',
				order: '58418278790810'
			},
			{
				name: 'Eric Ferris',
				address: '906 Hart Country Lane, Toccoa, GA 30577',
				date: '07/10/2020',
				order: '81534454080477'
			},
			{
				name: 'Gloria Noble',
				address: '2403 Edgewood Avenue, Fresno, CA 93721',
				date: '07/09/2020',
				order: '20452221703743'
			},
			{
				name: 'Darren Daniels',
				address: '882 Hide A Way Road, Anaktuvuk Pass, AK 99721',
				date: '07/07/2020',
				order: '22906126785176'
			},
			{
				name: 'Ted McDonald',
				address: '796 Bryan Avenue, Minneapolis, MN 55406',
				date: '07/07/2020',
				order: '87574505851064'
			}
		],
		[]
	);

	const columns = React.useMemo(
		() => [
			{
				Header: 'User Info',
				columns: [
					{
						Header: 'Name',
						accessor: 'name',
						width: '400px'
					},
					{
						Header: 'Address',
						accessor: 'address'
					}
				]
			},
			{
				Header: 'Order Info',
				columns: [
					{
						Header: 'Date',
						accessor: 'date'
					},
					{
						Header: 'Order #',
						accessor: 'order'
					}
				]
			}
		],
		[]
	);

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
