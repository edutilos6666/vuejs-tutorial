<template>
  <div>
    <div>
      <h3>Spinner determinate</h3>
      <md-progress-spinner md-mode="determinate" :md-value="amount"></md-progress-spinner>
      <md-progress-spinner class="md-accent" md-mode="determinate" :md-value="amount"></md-progress-spinner>
      <div>
        <input type="range" v-model.number="amount">
        {{ amount }}%
      </div>
    </div>

    <div>
      <h3>Spinner indeterminate</h3>
      <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
      <md-progress-spinner class="md-accent" md-mode="indeterminate"></md-progress-spinner>
    </div>

    <div>
      <h3>Spinner Sizes</h3>
      <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
      <md-progress-spinner :md-diameter="30" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
      <md-progress-spinner class="md-accent" :md-stroke="3" md-mode="indeterminate"></md-progress-spinner>
      <md-progress-spinner class="md-accent" :md-diameter="30" md-mode="indeterminate"></md-progress-spinner>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressSpinnerDeterminate",
  data: () => ({
    amount: 20
  })
};
</script>

<style lang="scss" scoped>
.md-progress-spinner {
  margin: 24px;
}
</style>