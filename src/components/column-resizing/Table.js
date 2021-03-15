import React from 'react';
import { useTable, useBlockLayout, useResizeColumns } from 'react-table';

export function Table({ columns, data }) {
    const defaultColumn = React.useMemo(
        () => ({
            minWidth: 30,
            width: 150,
            maxWidth: 400,
        }),
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        resetResizing,
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
        },
        useBlockLayout,
        useResizeColumns
    );

    return (
        <>
            <button onClick={resetResizing}>Reset Resizing</button>
            <div>
                <div {...getTableProps()} className="table">
                    <div>
                        {headerGroups.map(headerGroup => (
                            <div {...headerGroup.getHeaderGroupProps()} className="tr">
                                {headerGroup.headers.map(column => (
                                    <div {...column.getHeaderProps()} className="th">
                                        {column.render('Header')}
                                        {/* Use column.getResizerProps to hook up the events correctly */}
                                        <div
                                            {...column.getResizerProps()}
                                            className={`resizer ${column.isResizing ? 'isResizing' : ''}`} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            prepareRow(row);
                            return (
                                <div {...row.getRowProps()} className="tr">
                                    {row.cells.map(cell => {
                                        return (
                                            <div {...cell.getCellProps()} className="td">
                                                {cell.render('Cell')}
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <pre>
                <code>{JSON.stringify(state, null, 2)}</code>
            </pre>
        </>
    );
}
