import { all } from 'redux-saga/effects';

import clientes from './cliente/sagas';

export default function* rootSaga() {
  return yield all([
    clientes,
  ]);
}
