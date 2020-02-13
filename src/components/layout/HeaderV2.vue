<template>
  <div>
    <md-toolbar class="md-dense md-primary">
      <div class="md-toolbar-section-start">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>

        <!-- add menus here -->
        <md-menu md-size="small">
          <md-button class="md-primary" md-menu-trigger>Todo List</md-button>
          <md-menu-content>
            <md-menu-item>
              <md-button class="md-primary" to="/">Todo</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/hello-world">Hello World</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/worker">Worker</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/about">About</md-button>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
        <md-menu md-size="huge">
          <md-button class="md-primary" md-menu-trigger>Material</md-button>
          <md-menu-content>
            <md-menu-item>
              <md-button class="md-primary" to="/buttons-with-icons-example">Buttons with Icons</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/floating-action-buttons">Floating Action Buttons</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/links-and-buttons">Links And Buttons</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/regular-cards">Regular Cards</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/cards-with-images">Cards With Images</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button
                class="md-primary"
                to="/card-background-with-aspect-ratio"
              >Card Background With Aspect Ratio</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/cardthemes">CardThemes</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/cardexpansioncontrol">CardExpansionControl</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/bbdefaultfixedstyle">BBDefaultFixedStyle</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/bbshifteffect">BBShiftEffect</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/bbmorphingstates">BBMorphingStates</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/bbcustomtemplates">BBCustomTemplates</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/badgewithbuttons">BadgeWithButtons</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/badgewithlists">BadgeWithLists</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/densebadge">DenseBadge</md-button>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>

      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button">
          <md-icon>refresh</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>
      </div>
    </md-toolbar>
  </div>
</template>

<style lang="scss" scoped>
.md-toolbar + .md-toolbar {
  margin-top: 16px;
}
</style>

<script>
export default {
  name: "ContentActions"
};
</script>
<style scoped>
/* .md-menu-content {
  height: 500px;
} */
</style>

