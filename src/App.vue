<template>
  <div id="app">
    <HeaderV2/>
    <br>
    <router-view/>
  </div>
</template>

<script>
import HeaderV2 from "./components/layout/HeaderV2";
export default {
  name: "app",
  components: {
    HeaderV2
  }
};
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
