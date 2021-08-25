import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Button, IconButton, Drawer } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';
import { FiUserPlus, FiSave, FiTrash2 } from "react-icons/fi";


import Table from './../../components/Table';
import { allClientes } from './../../store/modules/cliente/actions';




const Cliente = () => {

  const dispatch = useDispatch();
  const { clientes } = useSelector((state) => state.clientes);
  useEffect(() => {
    dispatch(allClientes());
  }, []);

  const [visible, setVisible] = useState(false);

  const handleOpen = () => {
    setVisible(true);
  }
  const handleClose = () => {
    setVisible(false);
  }

  return (

    <div className="col p-4 overflow-auto h-100">

      <Drawer
        show={visible}
        onHide={handleClose}
        size="md"
      >
        <Drawer.Header>
          <Drawer.Title>
            <h3 className="titleDrower">
              Novo Cliente
            </h3>
          </Drawer.Title>
        </Drawer.Header>
        <Drawer.Body>
          <hr />
          <text>Formulário do Cliente</text>
        </Drawer.Body>
        <Drawer.Footer>
          <Button onClick={handleClose} appearance="subtle" color="green">
            <FiSave size='1.5rem' className="me-2" />
            Salvar
          </Button>
          <Button onClick={handleClose} appearance="subtle" color="red">
            <FiTrash2 size='1.5rem' className="me-2" />
            Cancelar</Button>
        </Drawer.Footer>
      </Drawer>

      <div className="row">
        <div className="col-12">

          <div className="w-100 d-flex justify-content-between">
            <h2 className="titlePages">Clientes</h2>
            <div>
              <button
                onClick={handleOpen}
                className="btn btn-primary btn-sm">
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
              {
                label: 'CPF/CNPJ',
                content: (item) =>
                  item.documento.tipo === 'cpf'
                    ? item.documento.numero.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
                    : item.documento.numero.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"),
                align: "center"
              },

              { label: 'TELEFONE', key: 'telefone', align: "center" },
              { label: 'E-MAIL', key: 'email', align: "left" },
              {
                label: 'SEXO',
                content: (item) => item.sexo === 'M' ? 'Masculino' : 'Feminino',
                align: "center"
              },
              { label: 'Cadastrado em', content: (item) => moment(item.dataCadastro).format('DD/MM/YYYY'), align: "center" },
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
