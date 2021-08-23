import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { FiUserPlus } from "react-icons/fi";

import Table from './../../components/Table';
import { allClientes } from './../../store/modules/cliente/actions';


const Cliente = () => {

  const dispatch = useDispatch();
  const { clientes } = useSelector((state) => state.clientes);
  useEffect(() => {
    dispatch(allClientes());
  }, []);

  return (
    <div className="col p-4 overflow-auto h-100">
      <div className="row">
        <div className="col-12">

          <div className="w-100 d-flex justify-content-between">
            <h2 className="titlePages">Clientes</h2>
            <div>
              <button className="btn btn-primary btn-sm">
                <span className="mdi mdi-account-plus-outlin p-2">
                  <FiUserPlus style={{ marginRight: '10px', fontSize: '1.5em' }} />
                  Novo Cliente</span>
              </button>
            </div>
          </div>

          <Table
            data={clientes}
            config={[
              { label: 'NOME', key: 'nome', fixed: true, align: "left" },
            ]}
            actions={(cliente) => (
              <Button color="blue" size="xs">
                Infor
              </Button>
            )}
            onRowClick={(cliente) => {
              alert(cliente.documento.numero);
            }}

          />


        </div>
      </div>
    </div>
  );
};

export default Cliente;
