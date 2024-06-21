import { Action, ActionTree } from 'vuex';
import { ActionMutationsTypes } from './mutations';
import { RootState } from '@/store';
import { Container } from 'typescript-ioc';
import { AcoesService } from '@/service/AcoesService';
import { ActionState } from './state';
import Acoes from '@/models/Acoes';

export enum ActionActionTypes {
  ACOES = 'ACOES',
  CADASTRAR = 'CADASTRAR',
}

const actions: ActionTree<ActionState, RootState> = {

  async [ActionActionTypes.ACOES]({ commit }) {
    const service = Container.get(
      AcoesService,
    ) as AcoesService;
    const data = await service.buscarAcoes();
    commit(ActionMutationsTypes.ACOES, data);
  },
  async [ActionActionTypes.CADASTRAR]({ commit }, request: Acoes) {
    const service = Container.get(
      AcoesService,
    ) as AcoesService;
    const data = await service.adicionarAcao(request);
    commit(ActionMutationsTypes.ACOES, data);
  },

};

export default actions;
