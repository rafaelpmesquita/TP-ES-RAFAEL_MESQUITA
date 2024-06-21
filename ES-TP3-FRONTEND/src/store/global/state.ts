
export class GlobalState {
  public deveExibirSnackbar: boolean = false;
  public contadorLoading: number = 0;
}

export const state: GlobalState = Object.assign(new GlobalState(), {
  deveExibirSnackbar: false,
  contadorLoading: 0,
});

export default state;
