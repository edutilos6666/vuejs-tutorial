<template>
  <div>
    <div>
      <!-- here @/assets/ does not work (@means begin path from src, not from public)-->
      <md-icon md-src="/assets/svg/icon-add.svg"/>
      <md-icon md-src="/assets/svg/icon-home.svg"/>
      <md-icon md-src="/assets/svg/icon-menu.svg"/>
      <md-icon md-src="/assets/svg/icon-thumbs-up.svg"/>
      <md-icon md-src="/assets/svg/icon-verified.svg"/>
    </div>

    <div>
      <md-icon md-src="/assets/svg/icon-add.svg"/>
      <md-icon class="md-size-2x" md-src="/assets/svg/icon-home.svg"/>
      <md-icon class="md-size-3x" md-src="/assets/svg/icon-menu.svg"/>
      <md-icon class="md-size-4x" md-src="/assets/svg/icon-thumbs-up.svg"/>
      <md-icon class="md-size-5x" md-src="/assets/svg/icon-verified.svg"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SvgAssets"
};
</script>