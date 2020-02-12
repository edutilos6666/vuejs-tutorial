<template>
  <md-table-row>
    <md-table-cell>{{worker.fname}}</md-table-cell>
    <md-table-cell>{{worker.lname}}</md-table-cell>
    <md-table-cell md-numeric>{{worker.age}}</md-table-cell>
    <md-table-cell md-numeric>{{worker.wage}}</md-table-cell>
    <md-table-cell>
      <md-button class="md-icon-button md-primary" v-on:click="showEditWorker">
        <md-icon>edit</md-icon>
      </md-button>
    </md-table-cell>
    <md-table-cell>
      <md-button class="md-icon-button md-accent" v-on:click="deleteWorker">
        <md-icon>delete</md-icon>
      </md-button>
    </md-table-cell>
  </md-table-row>
</template>
<script>
export default {
  name: "Worker",
  props: ["worker"],
  methods: {
    deleteWorker() {
      this.$emit("delete-worker", this.worker);
    },
    showEditWorker() {
      this.$emit("show-edit-worker", this.worker);
    }
  }
};
</script>

<style scoped>
</style>


