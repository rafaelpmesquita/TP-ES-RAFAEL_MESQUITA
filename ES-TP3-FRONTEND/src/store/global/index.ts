import { Module } from 'vuex';
import { GlobalState, state } from './state';
import { RootState } from '@/store';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const global: Module<GlobalState, RootState> = {
    actions,
    state,
    mutations,
    getters,
    namespaced: true,
};

export default global;
