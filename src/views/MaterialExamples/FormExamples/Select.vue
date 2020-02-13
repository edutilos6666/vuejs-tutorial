<template>
  <div>
    <div>
      <h3>Single Select</h3>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-field>
            <label for="movie">Movie</label>
            <md-select v-model="movie" name="movie" id="movie">
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp-fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item">
          <md-field>
            <md-select v-model="country" name="country" id="country" placeholder="Country">
              <md-option value="australia">Australia</md-option>
              <md-option value="brazil">Brazil</md-option>
              <md-option value="japan">Japan</md-option>
              <md-option value="united-states">United States</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item">
          <md-field>
            <label for="font">Font</label>
            <md-select v-model="font" name="font" id="font">
              <md-option value="arial">Arial</md-option>
              <md-option value="calibri">Calibri</md-option>
              <md-option value="cambria">Cambria</md-option>
              <md-option value="comic-sans">Comic Sans</md-option>
              <md-option value="consolas">Consolas</md-option>
              <md-option value="courier">Courier</md-option>
              <md-option value="droid-sans">Droid Sans</md-option>
              <md-option value="georgia">Georgia</md-option>
              <md-option value="helvetica">Helvetica</md-option>
              <md-option value="impact">Impact</md-option>
              <md-option value="roboto">Roboto</md-option>
              <md-option value="segoe-ui">Segoe UI</md-option>
              <md-option value="times-new-roman">Times New Roman</md-option>
              <md-option value="ubuntu">Ubuntu</md-option>
              <md-option value="verdana">Verdana</md-option>
            </md-select>
          </md-field>
        </div>
      </div>

      <md-button class="md-primary md-raised" @click="movie = 'pulp-fiction'">Set Pulp Fiction</md-button>
    </div>

    <div>
      <h3>Multiple Select</h3>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-field>
            <label for="movies">Movies</label>
            <md-select v-model="selectedMovies" name="movies" id="movies" multiple>
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp-fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-field>

          <div>
            <strong>Selected movies:</strong>
            {{ selectedMovies }}
          </div>
        </div>
      </div>
    </div>

    <div>
      <h3>Dense Select</h3>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-field>
            <label for="movies">Movies</label>
            <md-select v-model="movies" name="movies" id="movies" md-dense multiple>
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp-fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item">
          <md-field>
            <label for="country">Country</label>
            <md-select v-model="country" name="country" id="country" md-dense>
              <md-option value="australia">Australia</md-option>
              <md-option value="brazil">Brazil</md-option>
              <md-option value="japan">Japan</md-option>
              <md-option value="united-states">United States</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item">
          <md-field>
            <label for="font">Font</label>
            <md-select v-model="font" name="font" id="font" md-dense>
              <md-option value="arial">Arial</md-option>
              <md-option value="calibri">Calibri</md-option>
              <md-option value="cambria">Cambria</md-option>
              <md-option value="comic-sans">Comic Sans</md-option>
              <md-option value="consolas">Consolas</md-option>
              <md-option value="courier">Courier</md-option>
              <md-option value="droid-sans">Droid Sans</md-option>
              <md-option value="georgia">Georgia</md-option>
              <md-option value="helvetica">Helvetica</md-option>
              <md-option value="impact">Impact</md-option>
              <md-option value="roboto">Roboto</md-option>
              <md-option value="segoe-ui">Segoe UI</md-option>
              <md-option value="times-new-roman">Times New Roman</md-option>
              <md-option value="ubuntu">Ubuntu</md-option>
              <md-option value="verdana">Verdana</md-option>
            </md-select>
          </md-field>
        </div>
      </div>
    </div>

    <div>
      <h3>Select Groups</h3>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-field>
            <label for="food">Food</label>
            <md-select v-model="food1" name="food" id="food">
              <md-optgroup label="Baked Goods">
                <md-option value="apple-pie">Apple Pie</md-option>
                <md-option value="chocolate-cake">Chocolate Cake</md-option>
              </md-optgroup>

              <md-optgroup label="Fruits">
                <md-option value="apples">Apples</md-option>
                <md-option value="bananas">Bananas</md-option>
                <md-option value="oranges">Oranges</md-option>
                <md-option value="peaches">Peaches</md-option>
              </md-optgroup>

              <md-optgroup label="Vegetables">
                <md-option value="broccoli">Broccoli</md-option>
                <md-option value="carrots">Carrots</md-option>
                <md-option value="cucumbers">Cucumbers</md-option>
              </md-optgroup>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item">
          <md-field>
            <label for="food">Food</label>
            <md-select v-model="food2" name="food" id="food" md-dense>
              <md-optgroup label="Baked Goods">
                <md-option value="apple-pie">Apple Pie</md-option>
                <md-option value="chocolate-cake">Chocolate Cake</md-option>
              </md-optgroup>

              <md-optgroup label="Fruits">
                <md-option value="apples">Apples</md-option>
                <md-option value="bananas">Bananas</md-option>
                <md-option value="oranges">Oranges</md-option>
                <md-option value="peaches">Peaches</md-option>
              </md-optgroup>

              <md-optgroup label="Vegetables">
                <md-option value="broccoli">Broccoli</md-option>
                <md-option value="carrots">Carrots</md-option>
                <md-option value="cucumbers">Cucumbers</md-option>
              </md-optgroup>
            </md-select>
          </md-field>
        </div>
      </div>
    </div>

    <div>
      <h3>Select Disabled</h3>
      <div class="md-layout md-gutter">
        <div class="md-layout-item">
          <md-field>
            <label for="movie">Disabled Select</label>
            <md-select v-model="movie" name="movie" id="movie" disabled>
              <md-option value="fight-club">Fight Club</md-option>
              <md-option value="godfather">Godfather</md-option>
              <md-option value="godfather-ii">Godfather II</md-option>
              <md-option value="godfather-iii">Godfather III</md-option>
              <md-option value="godfellas">Godfellas</md-option>
              <md-option value="pulp-fiction">Pulp Fiction</md-option>
              <md-option value="scarface">Scarface</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item">
          <md-field>
            <label for="country">Disabled Options</label>
            <md-select v-model="country" name="country" id="country">
              <md-option value="australia">Australia</md-option>
              <md-option value="brazil" disabled>Brazil</md-option>
              <md-option value="japan">Japan</md-option>
              <md-option value="united-states">United States</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item">
          <md-field>
            <label for="food">Disabled groups</label>
            <md-select v-model="food" name="food" id="food">
              <md-optgroup label="Baked Goods" disabled>
                <md-option value="apple-pie">Apple Pie</md-option>
                <md-option value="chocolate-cake">Chocolate Cake</md-option>
              </md-optgroup>

              <md-optgroup label="Fruits">
                <md-option value="apples">Apples</md-option>
                <md-option value="bananas">Bananas</md-option>
                <md-option value="oranges">Oranges</md-option>
                <md-option value="peaches">Peaches</md-option>
              </md-optgroup>

              <md-optgroup label="Vegetables">
                <md-option value="broccoli">Broccoli</md-option>
                <md-option value="carrots">Carrots</md-option>
                <md-option value="cucumbers">Cucumbers</md-option>
              </md-optgroup>
            </md-select>
          </md-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicSelect",
  data: () => ({
    movie: "godfather",
    country: null,
    font: null,
    selectedMovies: [],
    movies: [],
    food1: null,
    food2: "carrots",
    food: null
  })
};
</script>