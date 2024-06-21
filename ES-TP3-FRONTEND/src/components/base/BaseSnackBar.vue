<template>
    <v-snackbar v-model="snackbarInterno" color="white">
        <v-icon :style="{ color: iconSnackbar === 'check_circle_outline' ? 'green' : 'red' }" class="mr-1">{{ iconSnackbar
        }}</v-icon>
        <span class="textoSnackbar">{{ textoSnackbar }}</span>
    </v-snackbar>
</template>
  
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component({
    components: {},
})

export default class BaseSnackBar extends Vue {
    @Prop()
    public snackbar!: boolean;

    @Prop()
    public iconSnackbar!: string;

    @Prop()
    public textoSnackbar!: string;

    public snackbarInterno: boolean = false;

    @Watch('snackbar')
    snackBarValue(val:boolean) {
        this.snackbarInterno = val;
    }

    @Watch('snackbarInterno',{immediate:true})
    snackBarValueInterno(val:boolean) {
        this.$emit('snackbar-value',val)
    }
    

}
</script>
  
<style>
.textoSnackbar {
    color: black;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
}
</style>
