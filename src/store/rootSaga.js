import { all } from 'redux-saga/effects';

import cliente from './modules/cliente/reducer';

export default function* rootSaga() {
  return yield all([
    cliente
  ]);
}
