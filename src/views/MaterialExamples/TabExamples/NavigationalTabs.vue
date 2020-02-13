<template>
  <div>
    <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/singleselection" exact></md-tab>
      <md-tab id="tab-pages" md-label="Pages" to="/multipleselection">
        <md-list>
          <md-list-item to="/searchandemptystate">Go to Subpage 1</md-list-item>
          <md-list-item to="/fixedheaders">Go to Subpage 2</md-list-item>
        </md-list>
      </md-tab>
      <md-tab id="tab-posts" md-label="Posts" to="/customsortfunction"></md-tab>
      <md-tab id="tab-favorites" md-label="Favorites" to="/sort"></md-tab>
      <md-tab id="tab-disabled" md-label="Disabled" md-disabled></md-tab>
    </md-tabs>
    <h2>Mirror Subpage</h2>
    <md-tabs md-sync-route>
      <md-tab id="tab-pages-1" md-label="Pages 1" to="/searchandemptystate">Subpage 1</md-tab>
      <md-tab id="tab-pages-2" md-label="Pages 2" to="/fixedheaders">Subpage 2</md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: "TabRouter"
};
</script>