<template>
  <div>
    <WorkerList
      v-bind:workers="workers"
      v-on:delete-worker="deleteWorker"
      v-on:show-edit-worker="handleShowEditWorker"
    />
    <AddWorker v-on:add-worker="addWorker"/>
    <EditWorker
      v-bind:worker="worker"
      v-bind:showEditWorker="showEditWorker"
      v-on:update-worker="updateWorker"
      v-on:close-edit-worker="handleCloseEditWorker"
    />
  </div>
</template>
<script>
import WorkerList from "../components/Worker/WorkerList.vue";
import AddWorker from "../components/Worker/AddWorker.vue";
import EditWorker from "../components/Worker/EditWorker.vue";
import uuid from "uuid";
export default {
  name: "WorkerPage",
  components: {
    WorkerList,
    AddWorker,
    EditWorker
  },
  data() {
    return {
      workers: [
        { id: uuid.v4(), fname: "foo", lname: "bar", age: 10, wage: 100.0 },
        { id: uuid.v4(), fname: "foo2", lname: "bar2", age: 20, wage: 200.0 },
        { id: uuid.v4(), fname: "foo3", lname: "bar3", age: 30, wage: 300.0 },
        { id: uuid.v4(), fname: "foo4", lname: "bar4", age: 40, wage: 400.0 }
      ],
      worker: null,
      showEditWorker: false
    };
  },
  methods: {
    addWorker(worker) {
      // eslint-disable-next-line
      console.log(worker);
      this.workers = [...this.workers, worker];
    },
    deleteWorker(worker) {
      this.workers = this.workers.filter(one => one.id !== worker.id);
    },
    handleShowEditWorker(worker) {
      this.worker = worker;
      this.showEditWorker = !this.showEditWorker;
      // eslint-disable-next-line
      console.log("HERE");
    },
    handleCloseEditWorker() {
      this.showEditWorker = false;
    },
    updateWorker(worker) {
      this.workers.forEach(one => {
        if ((one.id = worker.id)) {
          one = { ...worker };
        }
      });
    }
  }
};
</script>
<style scoped>
</style>


