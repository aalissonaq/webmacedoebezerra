import { Table } from 'rsuite';
//import EditIcon from '@rsuite/icons/Edit';
//import TrashIcon from '@rsuite/icons/Trash';
//import { FiEdit2, FiUserPlus, FiTrash2 } from "react-icons/fi";


const { Column, HeaderCell, Cell, } = Table;

const TableComponent = ({ data, config, actions, content, onRowClick }) => {
  return (
    <Table
      onRowClick={onRowClick}
      height={460}
      data={data}
      wordWrap
    >
      {config.map((c) => (
        <Column
          flexGrow={!c.width ? 1 : 0}
          width={c.width}
          fixed={c.fixed}
          align={c.align}
          verticalAlign='middle'

        >
          <HeaderCell>{c.label}</HeaderCell>
          {
            !c.content
              ? (<Cell dataKey={c.key} />)
              : (<Cell >{(item) => c.content(item)}</Cell>)
          }

        </Column>
      ))
      }

      <Column
        width={100}
        fixed="right"
        align="center"
      >
        <HeaderCell>Ações</HeaderCell>
        <Cell>
          {(item) => actions(item)}
        </Cell>
      </Column>
    </Table >
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
