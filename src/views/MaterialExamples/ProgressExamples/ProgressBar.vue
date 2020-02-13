<template>
  <div>
    <div>
      <h3>ProgressBar determinate</h3>
      <md-progress-bar md-mode="determinate" :md-value="amount"></md-progress-bar>
      <md-progress-bar class="md-accent" md-mode="determinate" :md-value="amount"></md-progress-bar>
      <input type="range" v-model.number="amount">
      {{ amount }}%
    </div>

    <div>
      <h3>ProgressBar indeterminate</h3>
      <md-progress-bar md-mode="indeterminate"></md-progress-bar>
      <md-progress-bar class="md-accent" md-mode="indeterminate"></md-progress-bar>
    </div>

    <div>
      <h3>ProgressBar buffer</h3>
      <md-progress-bar md-mode="buffer" :md-value="amount2" :md-buffer="buffer2"></md-progress-bar>
      <md-progress-bar class="md-accent" md-mode="buffer" :md-value="amount2" :md-buffer="buffer2"></md-progress-bar>
      <div>
        Progress
        <br>
        <input type="range" v-model.number="amount2">
        {{ amount2 }}%
      </div>

      <div>
        Buffer
        <br>
        <input type="range" v-model.number="buffer2">
        {{ buffer2 }}%
      </div>
    </div>

    <div>
      <h3>ProgressBar Query</h3>
      <md-progress-bar md-mode="query"></md-progress-bar>
      <md-progress-bar class="md-accent" md-mode="query"></md-progress-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBarDeterminate",
  data: () => ({
    amount: 0,
    amount2: 25,
    buffer2: 40
  })
};
</script>

<style lang="scss" scoped>
.md-progress-bar {
  margin: 24px;
}
</style>