<template id="app">
  <section>
    <header v-if="isAutenticado">
      <v-app-bar class="toolbar" :color="cor" height="80px">
        <v-icon @click="drawer = !drawer" color="primary" large>mdi-menu</v-icon>
        <h3 class="ml-5 d-flex justify-center">Ações Sustentáveis - Gerenciador</h3>
        <v-toolbar-title class="ml-5 flex-grow-1"> <!-- Use flex-grow-1 para esticar o título -->
          <v-img :width="tamanhoImagem" :src="imagemCabecalho"></v-img>

        </v-toolbar-title>

        <v-btn icon @click="fazerLogout"> <!-- Botão de logout à direita -->
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list class="pa-1">
          <v-list-item>
            <v-list-item-avatar>
              <v-icon medium color="primary" @click="drawer = !drawer">mdi-close</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title class="title font-weight-bold mt-1">Menu</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-item @click="teste">
            <v-list-item-content>
              <v-list-item-title class="ml-4">Inicio</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="dashboard">
            <v-list-item-content>
              <v-list-item-title class="ml-4">Dashboard Ações</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="estatisticas">
            <v-list-item-content>
              <v-list-item-title class="ml-4">Estatisticas</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <!-- <v-list-group> -->
            <!-- <template v-slot:activator>
              <v-list-item-content class="ml-4">
                <v-list-item-title>Graficos</v-list-item-title>
              </v-list-item-content>
            </template>
             <v-list-item @click="estatisticas">
              <v-list-item-content>
                <v-list-item-title class="ml-4">Estatisticas</v-list-item-title>
              </v-list-item-content>
            </v-list-item> 
          </v-list-group> -->

        </v-list>
      </v-navigation-drawer>
    </header>
    <main>
      <v-container fluid class="px-0">
        <router-view />
      </v-container>
    </main>

  </section>
</template>

<script lang="ts">
import { LoginActionTypes } from '@/store/login/actions';
import { LoginGetterTypes } from '@/store/login/getters';
import { StoreNamespaces } from '@/store/namespaces';
import { Component, Vue, Prop } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
const namespaces = namespace(StoreNamespaces.LOGIN);

@Component({})
export default class BaseLayout extends Vue {

  @namespaces.Action(LoginActionTypes.LOGOUT)
  public logout!: () => Promise<void>;

  @namespaces.Getter(LoginGetterTypes.AUTENTICADO)
  public isAutenticado!:boolean;

  public imagemCabecalho: string = "https://www.hemoce.ce.gov.br/wp-content/uploads/sites/105/2021/02/sustentavel-600x600.png";
  public tamanhoImagem = "80px";


  public drawer: boolean = false;
  public cor: string = '#00CED1';

  public teste() {
    if (this.$route.name !== 'teste') {
      this.$router.push({ name: 'teste' });
    }
  }

  public dashboard() {
    if (this.$route.name !== 'dashboard') {
      this.$router.push({ name: 'dashboard' });
    }
  }

  public estatisticas() {
    if (this.$route.name !== 'estatisticas') {
      this.$router.push({ name: 'estatisticas' });
    }
  }



  public async fazerLogout() {
    await this.logout();
    this.$router.push({ name: 'login' });

  }


}
</script>

<style scoped>
.toolbar {
  height: 60px;
  background: #ffffff;
}

.titulo-cabecalho {
  font-size: 28px;
  color: #444444;
}
</style>