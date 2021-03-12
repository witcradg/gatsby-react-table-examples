import React from 'react';
import styled from 'styled-components';

import Layout from '../layout';
import getColumnDefinitions from './columnDefinitions';

import makeData from '../../util/makeData';
import { Table } from './Table';

const Styles = styled.div`
	padding: 1rem;
	${'' /* These styles are suggested for the table fill all available space in its containing element */} display: block;
	${'' /* These styles are required for a horizontaly scrollable table overflow */} overflow: auto;

	.table {
		border-spacing: 0;
		border: 1px solid black;

		.thead {
			${'' /* These styles are required for a scrollable body to align with the header properly */} overflow-y: auto;
			overflow-x: hidden;
		}

		.tbody {
			${'' /* These styles are required for a scrollable table body */} overflow-y: scroll;
			overflow-x: hidden;
			height: 250px;
		}

		.tr {
			:last-child {
				.td {
					border-bottom: 0;
				}
			}
			border-bottom: 1px solid black;
		}

		.th,
		.td {
			margin: 0;
			padding: 0.5rem;
			border-right: 1px solid black;

			${'' /* In this example we use an absolutely position resizer,
       so this is required. */} position: relative;

			:last-child {
				border-right: 0;
			}

			.resizer {
				right: 0;
				background: blue;
				width: 10px;
				height: 100%;
				position: absolute;
				top: 0;
				z-index: 1;
				${'' /* prevents from scrolling while dragging on touch devices */} touch-action :none;

				&.isResizing {
					background: red;
				}
			}
		}
	}
`;

export const headerProps = (props, { column }) => getStyles(props, column.align);

export const cellProps = (props, { cell }) => getStyles(props, cell.column.align);

const getStyles = (props, align = 'left') => [
	props,
	{
		style: {
			justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
			alignItems: 'flex-start',
			display: 'flex'
		}
	}
];

export const IndeterminateCheckbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
	const defaultRef = React.useRef();
	const resolvedRef = ref || defaultRef;

	React.useEffect(
		() => {
			resolvedRef.current.indeterminate = indeterminate;
		},
		[ resolvedRef, indeterminate ]
	);

	return (
		<React.Fragment>
			<input type="checkbox" ref={resolvedRef} {...rest} />
		</React.Fragment>
	);
});

export default function FullWidthResizableTable() {
	const columns = React.useMemo(() => getColumnDefinitions(), []);

	const data = React.useMemo(() => makeData(20), []);

	return (
		<React.Fragment>
			<Layout title="React Table: Full Width Resizable">
				<div>
					<p className="p-0">
						<a
							className="anchor"
							href="https://github.com/tannerlinsley/react-table/tree/master/examples/full-width-resizable-table/src"
						>
							Repository Source
						</a>
					</p>
					<p>
						<a
							className="anchor"
							href="https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/full-width-resizable-table"
						>
							Source code in codesandbox
						</a>
					</p>
				</div>
			</Layout>
			<Styles>
				<Table columns={columns} data={data} />
			</Styles>
		</React.Fragment>
	);
}
