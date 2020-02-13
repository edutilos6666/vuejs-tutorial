<template>
  <div>
    <div>
      <h2>Standalone Chip</h2>
      <md-chip>Static</md-chip>
      <md-chip class="md-primary" md-deletable>Deletable</md-chip>
      <md-chip class="md-accent" md-clickable>Clickable</md-chip>
      <md-chip md-disabled>Disabled</md-chip>
    </div>
    <div>
      <h2>Editable Chips</h2>
      <md-chips v-model="fruits" md-placeholder="Add fruit..."></md-chips>
    </div>
    <div>
      <h2>Readonly Chips</h2>
      <md-chips v-model="cities" md-static></md-chips>
    </div>

    <div>
      <h2>Chips with CustomTemplate</h2>
      <md-chips v-model="projects" :md-limit="5" md-placeholder="Add project...">
        <template slot="md-chip" slot-scope="{ chip }">
          {{ chip }}
          <small v-if="chip === currentProject">(Marcos Moura)</small>
        </template>

        <div class="md-helper-text">Up to 5 projects</div>
      </md-chips>
    </div>

    <div>
      <h2>Duplicated Chips</h2>
      <md-chips class="md-primary" v-model="chips" md-placeholder="Add genre...">
        <div class="md-helper-text">Default</div>
      </md-chips>
      <md-chips class="md-primary shake-on-error" v-model="chips" md-placeholder="Add genre...">
        <div class="md-helper-text">Shake duplicated chip on insertion</div>
      </md-chips>
      <md-chips
        class="md-primary pulse-on-error"
        v-model="chips"
        md-placeholder="Add genre..."
        md-check-duplicated
      >
        <div class="md-helper-text">Always pulse duplicated chip</div>
      </md-chips>
    </div>

    <div>
      <h2>Formatted Chips</h2>
      <md-chips
        class="md-primary"
        v-model="clubs"
        md-placeholder="Add club..."
        :md-format="toUppercase"
      >
        <label>La Liga Clubs</label>
        <div class="md-helper-text">Three uppercase letters</div>
      </md-chips>

      <md-chips
        class="md-primary"
        v-model="artists"
        md-placeholder="Add artist..."
        :md-format="formatName"
      >
        <label>Artists</label>
        <div
          class="md-helper-text"
        >Try inserting `Eugène Ysaÿe`. The formatter will remove diacritics.</div>
      </md-chips>
    </div>

    <div>
      <h2>Chips with Hue Colors</h2>
      <md-chip class="md-primary" v-for="chip in primary" :key="chip">{{ chip }}</md-chip>
      <md-chip class="md-accent" v-for="chip in accent" :key="chip" md-clickable>{{ chip }}</md-chip>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleChip",
  data: () => ({
    fruits: ["Orange", "Apple", "Pineapple"],
    cities: ["New York", "Amsterdam", "Tokyo", "Rome"],
    currentProject: "Vue Material",
    projects: ["Vue Material", "Element UI", "Quasar"],
    chips: ["Pop", "Rock", "Jazz", "Metal"],
    clubs: ["FCB", "MAD"],
    artists: [
      "Claude Debussy",
      "Jules Massenet",
      "Gabriel Dupont",
      "Emma Bardac",
      "Mary Garden"
    ],
    primary: ["Orange", "Apple", "Pineapple"],
    accent: ["Cat", "Dog", "Rabbit"]
  }),
  methods: {
    toUppercase(str) {
      str = str.replace(/\s/g, "").toUpperCase();
      if (str.length !== 3) return false;
      return str;
    },
    formatName(str) {
      let words = str.split(" ").filter(str => str !== "");
      // remove accents / diacritics
      words = words.map(str =>
        str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      );
      // capitalize
      words = words.map(str => str[0].toUpperCase() + str.slice(1));
      return words.join(" ");
    }
  }
};
</script>