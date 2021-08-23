import { all } from 'redux-saga/effects';

import clientes from './modules/cliente/reducer';

export default function* rootSaga() {
  return yield all([
    clientes
  ]);
}
