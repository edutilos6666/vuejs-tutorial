<template>
  <div>
    <div class="container">
      <img alt="Vue logo" src="@/assets/primevue-logo.png">
      <HelloPrimeVue msg="Welcome to Your PrimeVue App"/>
      <form @submit.prevent="greet">
        <PVInputText type="text" v-model="text"/>
        <PVButton type="submit" label="Submit"/>
        <h3>{{message}}</h3>
      </form>
    </div>

    <PVToast/>
  </div>
</template>

<script>
import HelloPrimeVue from "./HelloPrimeVue.vue";

export default {
  data() {
    return {
      message: null,
      text: null
    };
  },
  methods: {
    greet() {
      this.$toast.add({ severity: "info", summary: "Hello " + this.text });
      this.message = "Hello " + this.text;
    }
  },
  components: {
    HelloPrimeVue
  }
};
</script>

<style scoped>
.container {
  text-align: center;
}
body .p-button {
  margin-left: 0.2em;
}

form {
  margin-top: 2em;
}
</style>