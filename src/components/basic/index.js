import * as React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import Layout from '../layout';

import makeData from '../../util/makeData';

const Styles = styled.div`
	padding: 1rem;

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
			margin: 0;
			padding: 0.5rem;
			border-bottom: 1px solid black;
			border-right: 1px solid black;

			:last-child {
				border-right: 0;
			}
		}
	}
`;
function Table({ columns, data }) {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns,
		data
	});

	// Render the UI for your table
	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row, i) => {
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
	);
}

export default function Basic() {
	const columns = React.useMemo(
		() => [
			{
				Header: 'Name',
				columns: [
					{
						Header: 'First Name',
						accessor: 'firstName'
					},
					{
						Header: 'Last Name',
						accessor: 'lastName'
					}
				]
			},
			{
				Header: 'Info',
				columns: [
					{
						Header: 'Age',
						accessor: 'age',
                        width: '100px'

					},
					{
						Header: 'Visits',
						accessor: 'visits',
                        width: '100px'

                    },
					{
						Header: 'Status',
						accessor: 'status',
                        width: '100px'

                    },
					{
						Header: 'Profile Progress',
						accessor: 'progress',
                        width: '100px'
					}
				]
			}
		],
		[]
	);

	const data = React.useMemo(() => makeData(20), []);
    
    console.log({data})

	return (
		<Layout title="React Table: Basic">
			<p className="p-0">
				<a
					className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
					href="https://github.com/tannerlinsley/react-table/tree/master/examples/basic/src"
				>
					Repository Source
				</a>
			</p>
			<p>
				<a
					className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
					href="https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/basic"
				>
					Source code in codesandbox
				</a>
			</p>
			<Styles>
				<Table columns={columns} data={data} />
			</Styles>
		</Layout>
	);
}
