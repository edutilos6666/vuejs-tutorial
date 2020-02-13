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

            <md-menu-item>
              <md-button class="md-primary" to="/appregulartoolbars">AppRegularToolbars</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/appfixedtoolbars">AppFixedToolbars</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/apprevealafterscroll">AppRevealAfterScroll</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button
                class="md-primary"
                to="/appflexibleheightandtextsize"
              >AppFlexibleHeightAndTextSize</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/applasttoolbarrowfixed">AppLastToolbarRowFixed</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/appoverlappingcontent">AppOverlappingContent</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/avatardefault">AvatarDefault</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/avatarplaceholder">AvatarPlaceholder</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/avatarmultiplesizes">AvatarMultipleSizes</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/papercontent">PaperContent</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/datepickerbasic">DatepickerBasic</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button
                class="md-primary"
                to="/datepickerwithdifferenttypebinding"
              >DatepickerWithDifferentTypeBinding</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/datepickerlabeled">DatepickerLabeled</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button
                class="md-primary"
                to="/datepickerinitialdateselected"
              >DatepickerInitialDateSelected</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button
                class="md-primary"
                to="/datepickerimmediateselection"
              >DatepickerImmediateSelection</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button
                class="md-primary"
                to="/datepickernoweekendsavailable"
              >DatepickerNoWeekendsAvailable</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/customdialogmarkup">CustomDialogMarkup</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/alert">Alert</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/confirms">Confirms</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/prompts">Prompts</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/dividerexample">DividerExample</md-button>
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

