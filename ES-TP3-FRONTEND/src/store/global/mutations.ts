import { MutationTree } from 'vuex';
import { GlobalState } from './state';

export enum GlobalMutationTypes {
  SET_DEVE_EXIBIR_SNACKBAR = 'SET_DEVE_EXIBIR_SNACKBAR',
  SET_CONTADOR_LOADING = 'SET_CONTADOR_LOADING',
}

const mutations: MutationTree<GlobalState> = {
  [GlobalMutationTypes.SET_DEVE_EXIBIR_SNACKBAR](state: GlobalState, deveExibir: boolean) {
    state.deveExibirSnackbar = deveExibir;
  },
  [GlobalMutationTypes.SET_CONTADOR_LOADING](state: GlobalState, contador: number) {
    state.contadorLoading += contador;
  },
};

export default mutations;
