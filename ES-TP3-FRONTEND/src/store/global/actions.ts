import { ActionTree } from 'vuex';
import { GlobalState } from './state';
import { GlobalMutationTypes } from './mutations';
import { RootState } from '@/store';

export enum GlobalActionTypes {
  DEVE_EXIBIR_SNACKBAR = 'DEVE_EXIBIR_SNACKBAR',
  INICIAR_LOADING = 'INICIAR_LOADING',
  FINALIZAR_LOADING = 'FINALIZAR_LOADING',
}

const actions: ActionTree<GlobalState, RootState> = {

  async [GlobalActionTypes.DEVE_EXIBIR_SNACKBAR]({ commit }, deveExibir: boolean) {
    commit(GlobalMutationTypes.SET_DEVE_EXIBIR_SNACKBAR, deveExibir);
  },
  
  [GlobalActionTypes.INICIAR_LOADING]({ commit }) {
    commit(GlobalMutationTypes.SET_CONTADOR_LOADING, 1);
  },

  [GlobalActionTypes.FINALIZAR_LOADING]({ commit, state }) {
    if (state.contadorLoading > 0) {
      commit(GlobalMutationTypes.SET_CONTADOR_LOADING, -1);
    }
  },
};

export default actions;
