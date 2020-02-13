<template>
  <div>
    <div>
      <h3>Default Radio</h3>
      <md-radio v-model="radio" :value="false">Boolean</md-radio>
      <md-radio v-model="radio" value="my-radio">String</md-radio>
      <md-radio v-model="radio" :value="objA">Object A</md-radio>
      <md-radio v-model="radio" :value="objB">Object B</md-radio>
      <md-radio v-model="radio">No Value</md-radio>
      <md-radio v-model="radio" disabled>Disabled</md-radio>

      <small>Model value: {{ radio }}</small>
    </div>
    <div>
      <h3>Radio with hue colors</h3>
      <md-radio v-model="radio" value="accent">
        Accent
        <small>(Default)</small>
      </md-radio>
      <md-radio v-model="radio" value="Primary" class="md-primary">Primary</md-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegularRadio",
  data: () => ({
    objA: { name: "a" },
    objB: { name: "b" },
    radio: false
  })
};
</script>

<style lang="scss" scoped>
small {
  display: block;
}
</style>