import React from 'react';

export default function getColumnDefinitions() {
	const getDefinitions = () => {
		 return [
            {
                Header: 'Name',
                columns: [
                {
                    Header: 'First Name',
                    accessor: 'firstName',
                },
                {
                    Header: 'Last Name',
                    accessor: 'lastName',
                    width: 400
                },
                ],
            },
            {
                Header: 'Info',
                columns: [
                {
                    Header: 'Age',
                    accessor: 'age',
                    width: 50,
                    align: 'right',
                },
                {
                    Header: 'Visits',
                    accessor: 'visits',
                    width: 50,
                    align: 'right',
                },
                {
                    Header: 'Status',
                    accessor: 'status',
                },
                {
                    Header: 'Profile Progress',
                    accessor: 'progress',
                },
                ],
            },
         ];
	};

	return getDefinitions();
}
