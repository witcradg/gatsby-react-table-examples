export default function getColumnDefinitions() {
	const getDefinitions = () => {
        return [
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
    ];
};

return getDefinitions();
}