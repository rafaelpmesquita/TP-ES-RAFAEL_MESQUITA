import { GetterTree } from 'vuex';
import { GlobalState } from './state';
import { RootState } from '@/store';

export enum GlobalGetterTypes {
  DEVE_EXIBIR_SNACKBAR = 'DEVE_EXIBIR_SNACKBAR',
  EM_LOADING = 'EM_LOADING',
}

const getters: GetterTree<GlobalState, RootState> = {
  [GlobalGetterTypes.DEVE_EXIBIR_SNACKBAR](state) {
    return state.deveExibirSnackbar;
  },
  [GlobalGetterTypes.EM_LOADING](state) {
    return state.contadorLoading > 0;
  },
};

export default getters;
