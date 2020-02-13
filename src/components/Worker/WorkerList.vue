<template>
  <div>
    <h3>Worker List</h3>
    <md-table md-card>
      <md-table-row>
        <md-table-head>First Name</md-table-head>
        <md-table-head>Last Name</md-table-head>
        <md-table-head md-numeric>Age</md-table-head>
        <md-table-head md-numeric>Wage</md-table-head>
        <md-table-head>
          <md-icon>edit</md-icon>
        </md-table-head>
        <md-table-head>
          <md-icon>delete</md-icon>
        </md-table-head>
      </md-table-row>
      <Worker
        v-bind:key="worker.id"
        v-for="worker in workers"
        v-bind:worker="worker"
        v-on:delete-worker="deleteWorker"
        v-on:show-edit-worker="showEditWorker"
      />
    </md-table>
  </div>
</template>
<script>
import Worker from "./Worker.vue";
export default {
  name: "WorkerList",
  components: {
    Worker
  },
  props: ["workers"],
  methods: {
    deleteWorker(worker) {
      // eslint-disable-next-line
      console.log("delete worker", worker);
      this.$emit("delete-worker", worker);
    },
    showEditWorker(worker) {
      this.$emit("show-edit-worker", worker);
    }
  }
};
</script>

<style scoped>
</style>


