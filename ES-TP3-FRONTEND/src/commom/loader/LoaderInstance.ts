import _Vue from 'vue';
import store from '@/store';
import { StoreNamespaces } from '@/store/namespaces';
import { GlobalActionTypes } from '@/store/global/actions';

export default class LoaderInstance {
  public instance!: _Vue;

  public async iniciar(): Promise<void> {
    await store.dispatch(`${StoreNamespaces.GLOBAL}/${GlobalActionTypes.INICIAR_LOADING}`);
  }

  public async finalizar(): Promise<void> {
    await store.dispatch(`${StoreNamespaces.GLOBAL}/${GlobalActionTypes.FINALIZAR_LOADING}`);
  }
}
