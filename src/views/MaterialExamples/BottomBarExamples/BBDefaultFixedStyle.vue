<template>
  <div>
    <div class="phone-viewport">
      <md-bottom-bar md-sync-route>
        <md-bottom-bar-item to="#" exact md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item to="#" md-label="Posts" md-icon="delete"></md-bottom-bar-item>
        <md-bottom-bar-item
          to="#"
          md-label="Favorites"
          md-icon="favorite"
        ></md-bottom-bar-item>
      </md-bottom-bar>
    </div>

    <div class="phone-viewport">
      <md-bottom-bar class="md-accent" md-sync-route>
        <md-bottom-bar-item to="#" exact md-label="Home" md-icon="home"></md-bottom-bar-item>
        <md-bottom-bar-item to="#" md-label="Posts" md-icon="edit"></md-bottom-bar-item>
        <md-bottom-bar-item
          to="#"
          md-label="Favorites"
          md-icon="favorite"
        ></md-bottom-bar-item>
      </md-bottom-bar>
    </div>

    <div class="phone-viewport">
      <md-bottom-bar class="md-accent" md-sync-route>
        <md-bottom-bar-item to="#" md-label="Post 1" md-icon="delete"></md-bottom-bar-item>
        <md-bottom-bar-item to="#" md-label="Post 2" md-icon="edit"></md-bottom-bar-item>
      </md-bottom-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: "BarRouter"
};
</script>

<style lang="scss" scoped>
.phone-viewport {
  width: 322px;
  height: 200px;
  display: inline-flex;
  align-items: flex-end;
  overflow: hidden;
  border: 1px solid rgba(#000, 0.26);
  background: rgba(#000, 0.06);
}
</style>