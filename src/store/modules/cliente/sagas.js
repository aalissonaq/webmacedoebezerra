import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import { updateClientes } from './actions';
import types from './types';
import api from './../../../services/api';

export function* allClientes() {
  try {
    const { data: res } = yield call(api.get, '/cliente');

    if (res.err) {
      alert('Error: ' + res.err);
      return false;
    }
    yield put(updateClientes({ clientes: res.clientes }));

  } catch (err) {
    console.log(err);
  }
}

export default all([
  takeLatest(types.ALL_CLIENTES, allClientes),
  // @cliente/All getClientes
]);
