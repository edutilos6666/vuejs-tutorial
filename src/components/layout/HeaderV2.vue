<template>
  <div>
    <md-toolbar class="md-dense md-primary">
      <div class="md-toolbar-section-start">
        <md-button class="md-icon-button">
          <md-icon>menu</md-icon>
        </md-button>

        <!-- Hello World Examples(TodoList, WorkerList, HelloWorld, About)  -->
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

        <!-- Material Vue Examples -->
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

            <md-menu-item>
              <md-button class="md-primary" to="/drawertemporary">DrawerTemporary</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/drawerpermanent">DrawerPermanent</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/drawerclipped">DrawerClipped</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/drawercard">DrawerCard</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/drawerpersistent">DrawerPersistent</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button
                class="md-primary"
                to="/drawerminidraweralwaysvisible"
              >DrawerMiniDrawerAlwaysVisible</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/esdefault">ESDefault</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/esrounded">ESRounded</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/eshuecolors">ESHueColors</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/formvalidation">FormValidation</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button
                class="md-primary"
                to="/formautocompletestaticdata"
              >FormAutocompleteStaticData</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/formautocompletetrigger">FormAutocompleteTrigger</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button
                class="md-primary"
                to="/formautocompleteboxlayout"
              >FormAutocompleteBoxLayout</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button
                class="md-primary"
                to="/formautocompletecustomtemplate"
              >FormAutocompleteCustomTemplate</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button
                class="md-primary"
                to="/formautocompletesearchalgo"
              >FormAutocompleteSearchAlgo</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button
                class="md-primary"
                to="/formautocompleteasyncoptions"
              >FormAutocompleteAsyncOptions</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/formcheckbox">FormCheckbox</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/formcheckboxhuecolors">FormCheckboxHueColors</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button
                class="md-primary"
                to="/formcheckboxtruefalsevalue"
              >FormCheckboxTrueFalseValue</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/formchips">FormChips</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/formfile">FormFile</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/basic">Basic</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/validation">Validation</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/charactercount">CharacterCount</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/inputwithicons">InputWithIcons</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/inputwithinlineactions">InputWithInlineActions</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button
                class="md-primary"
                to="/inputwithprefixesandsuffixes"
              >InputWithPrefixesAndSuffixes</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/radio">Radio</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/select">Select</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/switch">Switch</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/materialicons">MaterialIcons</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/customfonts">CustomFonts</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/svgassets">SVGAssets</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/singleline">SingleLine</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/doubleline">DoubleLine</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/tripleline">TripleLine</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/listactions">ListActions</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/controls">Controls</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/expansion">Expansion</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/startandend">StartAndEnd</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/alignments">Alignments</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/sizes">Sizes</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/autoclose">AutoClose</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button
                class="md-primary"
                to="/richcontentandiconalignment"
              >RichContentAndIconAlignment</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/progressbar">ProgressBar</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/spinner">Spinner</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/snackbarbasic">SnackbarBasic</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/sdpositions">SpeedDial Positions</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/sdeffects">SpeedDial Effects</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/sdtriggers">SpeedDial Triggers</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button
                class="md-primary"
                to="/horizontalsteppersdefaultlayout"
              >HorizontalSteppersDefaultLayout</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button
                class="md-primary"
                to="/horizontalsteppersalternativelayout"
              >HorizontalSteppersAlternativeLayout</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/verticalsteppers">VerticalSteppers</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/linearsteppers">LinearSteppers</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/noneditablesteps">NonEditableSteps</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/vuerouterintegration">VueRouterIntegration</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/subheaderbasic">SubheaderBasic</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/basictable">BasicTable</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/tablewithinacard">TableWithinACard</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/customtemplate">CustomTemplate</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/sort">Sort</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/customsortfunction">CustomSortFunction</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/fixedheaders">FixedHeaders</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/searchandemptystate">SearchAndEmptyState</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/singleselection">SingleSelection</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/multipleselection">MultipleSelection</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/navigationaltabs">NavigationalTabs</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/tabwithinnercontent">TabWithInnerContent</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/tabwithhuecolors">TabWithHueColors</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/tabwithsvgicons">TabWithSVGIcons</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/tabwithcustomtemplate">TabWithCustomTemplate</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/regulartoolbars">RegularToolbars</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button
                class="md-primary"
                to="/toolbarwithdifferentsizes"
              >ToolbarWithDifferentSizes</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button
                class="md-primary"
                to="/toolbarwithrowstitleandicons"
              >ToolbarWithRowsTitleAndIcons</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/textposition">Tooltip TextPosition</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/delay">Tooltip Delay</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/trigger">Tooltip Trigger</md-button>
            </md-menu-item>
          </md-menu-content>
        </md-menu>

        <!-- PrimeVue Examples -->
        <md-menu md-size="small">
          <md-button class="md-primary" md-menu-trigger>PrimeVue</md-button>
          <md-menu-content>
            <md-menu-item>
              <md-button class="md-primary" to="/quickstart">PrimeVue QuickStart</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/pvautocomplete">PVAutoComplete</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/pvcalendarexample">PVCalendarExample</md-button>
            </md-menu-item>
            <md-menu-item>
              <md-button class="md-primary" to="/pveditorexample">PVEditorExample</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/pvpiechart">PVPieChart</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/pvbarchart">PVBarChart</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/pvcarouselexample">PVCarouselExample</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/pvdatatableexample">PVDataTableExample</md-button>
            </md-menu-item>

            <md-menu-item>
              <md-button class="md-primary" to="/pvdataviewexample">PVDataViewExample</md-button>
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

