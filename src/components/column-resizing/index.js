import React from 'react'
import styled from 'styled-components'
import Layout from '../layout';
import getColumnDefinitions from '../../util/columnDefinitions';

import makeData from '../../util/makeData'
import { Table } from './Table';

const Styles = styled.div`
  padding: 1rem;

  .table {
    display: inline-block;
    border-spacing: 0;
    border: 1px solid black;

    .tr {
      :last-child {
        .td {
          border-bottom: 0;
        }
      }
    }

    .th,
    .td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      ${'' /* In this example we use an absolutely position resizer,
       so this is required. */}
      position: relative;

      :last-child {
        border-right: 0;
      }

      .resizer {
        display: inline-block;
        background: blue;
        width: 10px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(50%);
        z-index: 1;
        ${'' /* prevents from scrolling while dragging on touch devices */}
        touch-action:none;

        &.isResizing {
          background: red;
        }
      }
    }
  }
`

export default function ColumnResizing() {
  const columns = React.useMemo(() => getColumnDefinitions(), []);

  const data = React.useMemo(() => makeData(10), [])

  return (
      <Layout title="React Table: Column Resizing">
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
    </Layout>
  )
}

