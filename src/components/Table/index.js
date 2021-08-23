import { Table } from 'rsuite';
//import EditIcon from '@rsuite/icons/Edit';
//import TrashIcon from '@rsuite/icons/Trash';
//import { FiEdit2, FiUserPlus, FiTrash2 } from "react-icons/fi";


const { Column, HeaderCell, Cell, } = Table;

const TableComponent = ({ data, config, actions, onRowClick }) => {
  return (
    <Table
      onRowClick={onRowClick}
      height={550}
      data={data}
    //wordWrap
    >
      {config.map((c) => (
        <Column
          flexGrow={!c.width ? 1 : 0}
          width={c.width}
          fixed={c.fixed}
          align={c.align}

        >
          <HeaderCell>{c.label}</HeaderCell>
          <Cell dataKey={c.key} />
        </Column>
      ))}

      <Column
        width={150}
        fixed="right"
      >
        <HeaderCell>Ações</HeaderCell>
        <Cell>
          {(item) => actions(item)}
        </Cell>
      </Column>
    </Table>
  );

}

/*
 <Column width={120} fixed="right">
        <HeaderCell>Action</HeaderCell>

        <Cell>
          {rowData => {
            function handleAction() {
              alert(`firstName:${rowData.firstName}`);
            }
            return (
              <span>
                <a onClick={handleAction}>
                  <EditIcon style={{ fontSize: '1.5em', color: '#C77129' }} />
                </a> |{' '}
                <a onClick={handleAction}>
                  <TrashIcon style={{ fontSize: '1.5em', color: 'red' }} /> </a>
              </span>
            );
          }}
        </Cell>
      </Column>

*/

export default TableComponent;
