<template>
  <div>
    <md-tabs>
      <md-tab id="tab-home" md-label="Home" to="#" exact>Home Tab</md-tab>

      <md-tab id="tab-pages" md-label="Pages" to="#">
        Pages tab
        <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
      </md-tab>

      <md-tab id="tab-posts" md-label="Posts" to="#">
        Posts tab
        <p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.</p>
      </md-tab>

      <md-tab id="tab-favorites" md-label="Favorites" to="#">
        Favorites tab
        <p>Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias sequi odio qui harum dolorem sunt quasi corporis.</p>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: "TabContent"
};
</script>