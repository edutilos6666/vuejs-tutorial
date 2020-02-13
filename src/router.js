import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ButtonsWithIconsExample from "./views/MaterialExamples/ButtonExamples/ButtonsWithIconsExample.vue";
import FloatingActionButtons from "./views/MaterialExamples/ButtonExamples/FloatingActionButtons.vue";
import LinksAndButtons from "./views/MaterialExamples/ButtonExamples/LinksAndButtons.vue";
import HelloWorld from "./views/HelloWorld.vue";
import WorkerPage from "./views/WorkerPage.vue";
import RegularCards from "./views/MaterialExamples/CardExamples/RegularCards.vue";
import CardsWithImages from "./views/MaterialExamples/CardExamples/CardsWithImages.vue";
import CardBackgroundWithAspectRatio from "./views/MaterialExamples/CardExamples/CardBackgroundWithAspectRatio.vue";
import CardThemes from "./views/MaterialExamples/CardExamples/CardThemes.vue";
import CardExpansionControl from "./views/MaterialExamples/CardExamples/CardExpansionControl.vue";
import BBDefaultFixedStyle from "./views/MaterialExamples/BottomBarExamples/BBDefaultFixedStyle.vue";
import BBShiftEffect from "./views/MaterialExamples/BottomBarExamples/BBShiftEffect.vue";
import BBMorphingStates from "./views/MaterialExamples/BottomBarExamples/BBMorphingStates.vue";
import BBCustomTemplates from "./views/MaterialExamples/BottomBarExamples/BBCustomTemplates.vue";
import BadgeWithButtons from "./views/MaterialExamples/BadgeExamples/BadgeWithButtons.vue";
import BadgeWithLists from "./views/MaterialExamples/BadgeExamples/BadgeWithLists.vue";
import DenseBadge from "./views/MaterialExamples/BadgeExamples/DenseBadge.vue";
import AppRegularToolbars from "./views/MaterialExamples/AppExamples/AppRegularToolbars.vue";
import AppFixedToolbars from "./views/MaterialExamples/AppExamples/AppFixedToolbars.vue";
import AppRevealAfterScroll from "./views/MaterialExamples/AppExamples/AppRevealAfterScroll.vue";
import AppFlexibleHeightAndTextSize from "./views/MaterialExamples/AppExamples/AppFlexibleHeightAndTextSize.vue";
import AppLastToolbarRowFixed from "./views/MaterialExamples/AppExamples/AppLastToolbarRowFixed.vue";
import AppOverlappingContent from "./views/MaterialExamples/AppExamples/AppOverlappingContent.vue";
import AvatarDefault from "./views/MaterialExamples/AvatarExamples/AvatarDefault.vue";
import AvatarPlaceholder from "./views/MaterialExamples/AvatarExamples/AvatarPlaceholder.vue";
import AvatarMultipleSizes from "./views/MaterialExamples/AvatarExamples/AvatarMultipleSizes.vue";
import PaperContent from "./views/MaterialExamples/ContentExamples/PaperContent.vue";
import DatepickerBasic from "./views/MaterialExamples/DatepickerExamples/DatepickerBasic";
import DatepickerLabeled from "./views/MaterialExamples/DatepickerExamples/DatepickerLabeled";
import DatepickerWithDifferentTypeBinding from "./views/MaterialExamples/DatepickerExamples/DatepickerWithDifferentTypeBinding";
import DatepickerInitialDateSelected from "./views/MaterialExamples/DatepickerExamples/DatepickerInitialDateSelected";
import DatepickerImmediateSelection from "./views/MaterialExamples/DatepickerExamples/DatepickerImmediateSelection";
import DatepickerNoWeekendsAvailable from "./views/MaterialExamples/DatepickerExamples/DatepickerNoWeekendsAvailable";
import CustomDialogMarkup from "./views/MaterialExamples/DialogExamples/CustomDialogMarkup";
import Alert from "./views/MaterialExamples/DialogExamples/Alert";
import Confirms from "./views/MaterialExamples/DialogExamples/Confirms";
import Prompts from "./views/MaterialExamples/DialogExamples/Prompts";
import DividerExample from "./views/MaterialExamples/DividerExamples/DividerExample";
import DrawerTemporary from "./views/MaterialExamples/DrawerExamples/DrawerTemporary";
import DrawerPermanent from "./views/MaterialExamples/DrawerExamples/DrawerPermanent";
import DrawerClipped from "./views/MaterialExamples/DrawerExamples/DrawerClipped";
import DrawerCard from "./views/MaterialExamples/DrawerExamples/DrawerCard";
import DrawerPersistent from "./views/MaterialExamples/DrawerExamples/DrawerPersistent";
import DrawerMiniDrawerAlwaysVisible from "./views/MaterialExamples/DrawerExamples/DrawerMiniDrawerAlwaysVisible";
import ESDefault from "./views/MaterialExamples/EmptyStateExamples/ESDefault";
import ESRounded from "./views/MaterialExamples/EmptyStateExamples/ESRounded";
import ESHueColors from "./views/MaterialExamples/EmptyStateExamples/ESHueColors";
import FormValidation from "./views/MaterialExamples/FormExamples/FormValidation";
import FormAutocompleteStaticData from "./views/MaterialExamples/FormExamples/FormAutocompleteStaticData";
import FormAutocompleteTrigger from "./views/MaterialExamples/FormExamples/FormAutocompleteTrigger";
import FormAutocompleteBoxLayout from "./views/MaterialExamples/FormExamples/FormAutocompleteBoxLayout";
import FormAutocompleteCustomTemplate from "./views/MaterialExamples/FormExamples/FormAutocompleteCustomTemplate";
import FormAutocompleteSearchAlgo from "./views/MaterialExamples/FormExamples/FormAutocompleteSearchAlgo";
import FormAutocompleteAsyncOptions from "./views/MaterialExamples/FormExamples/FormAutocompleteAsyncOptions";
import FormCheckbox from "./views/MaterialExamples/FormExamples/FormCheckbox";
import FormCheckboxHueColors from "./views/MaterialExamples/FormExamples/FormCheckboxHueColors";
import FormCheckboxTrueFalseValue from "./views/MaterialExamples/FormExamples/FormCheckboxTrueFalseValue";
import FormChips from "./views/MaterialExamples/FormExamples/FormChips";
import FormFile from "./views/MaterialExamples/FormExamples/FormFile";
import Basic from "./views/MaterialExamples/FormExamples/InputAndTextArea/Basic";
import Validation from "./views/MaterialExamples/FormExamples/InputAndTextArea/Validation";
import CharacterCount from "./views/MaterialExamples/FormExamples/InputAndTextArea/CharacterCount";
import InputWithIcons from "./views/MaterialExamples/FormExamples/InputAndTextArea/InputWithIcons";
import InputWithInlineActions from "./views/MaterialExamples/FormExamples/InputAndTextArea/InputWithInlineActions";
import InputWithPrefixesAndSuffixes from "./views/MaterialExamples/FormExamples/InputAndTextArea/InputWithPrefixesAndSuffixes";
import Radio from "./views/MaterialExamples/FormExamples/Radio";
import Select from "./views/MaterialExamples/FormExamples/Select";
import Switch from "./views/MaterialExamples/FormExamples/Switch";
import MaterialIcons from "./views/MaterialExamples/IconExamples/MaterialIcons";
import CustomFonts from "./views/MaterialExamples/IconExamples/CustomFonts";
import SVGAssets from "./views/MaterialExamples/IconExamples/SVGAssets";
import SingleLine from "./views/MaterialExamples/ListExamples/SingleLine";
import DoubleLine from "./views/MaterialExamples/ListExamples/DoubleLine";
import TripleLine from "./views/MaterialExamples/ListExamples/TripleLine";
import ListActions from "./views/MaterialExamples/ListExamples/ListActions";
import Controls from "./views/MaterialExamples/ListExamples/Controls";
import Expansion from "./views/MaterialExamples/ListExamples/Expansion";
import StartAndEnd from "./views/MaterialExamples/MenuExamples/StartAndEnd";
import Alignments from "./views/MaterialExamples/MenuExamples/Alignments";
import Sizes from "./views/MaterialExamples/MenuExamples/Sizes";
import AutoClose from "./views/MaterialExamples/MenuExamples/AutoClose";
import RichContentAndIconAlignment from "./views/MaterialExamples/MenuExamples/RichContentAndIconAlignment";
import ProgressBar from "./views/MaterialExamples/ProgressExamples/ProgressBar";
import Spinner from "./views/MaterialExamples/ProgressExamples/Spinner";
import SnackbarBasic from "./views/MaterialExamples/SnackbarExamples/SnackbarBasic";
import SDPositions from "./views/MaterialExamples/SpeedDialExamples/SDPositions";
import SDEffects from "./views/MaterialExamples/SpeedDialExamples/SDEffects";
import SDTriggers from "./views/MaterialExamples/SpeedDialExamples/SDTriggers";
import HorizontalSteppersDefaultLayout from "./views/MaterialExamples/SteppersExamples/HorizontalSteppersDefaultLayout";
import HorizontalSteppersAlternativeLayout from "./views/MaterialExamples/SteppersExamples/HorizontalSteppersAlternativeLayout";
import VerticalSteppers from "./views/MaterialExamples/SteppersExamples/VerticalSteppers";
import LinearSteppers from "./views/MaterialExamples/SteppersExamples/LinearSteppers";
import NonEditableSteps from "./views/MaterialExamples/SteppersExamples/NonEditableSteps";
import VueRouterIntegration from "./views/MaterialExamples/SteppersExamples/VueRouterIntegration";
import SubheaderBasic from "./views/MaterialExamples/SubheaderExamples/SubheaderBasic";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/hello-world",
      name: "hello-world",
      component: HelloWorld
    },
    {
      path: "/worker",
      name: "worker",
      component: WorkerPage
    },
    {
      path: "/buttons-with-icons-example",
      name: "ButtonsWithIconsExample",
      component: ButtonsWithIconsExample
    },
    {
      path: "/floating-action-buttons",
      name: "FloatingActionButtons",
      component: FloatingActionButtons
    },
    {
      path: "/links-and-buttons",
      name: "LinksAndButtons",
      component: LinksAndButtons
    },
    {
      path: "/regular-cards",
      name: "RegularCards",
      component: RegularCards
    },
    {
      path: "/cards-with-images",
      name: "CardsWithImages",
      component: CardsWithImages
    },
    {
      path: "/card-background-with-aspect-ratio",
      name: "CardBackgroundWithAspectRatio",
      component: CardBackgroundWithAspectRatio
    },
    {
      path: "/cardthemes",
      name: "CardThemes",
      component: CardThemes
    },
    {
      path: "/cardexpansioncontrol",
      name: "CardExpansionControl",
      component: CardExpansionControl
    },
    {
      path: "/bbdefaultfixedstyle",
      name: "BBDefaultFixedStyle",
      component: BBDefaultFixedStyle
    },
    {
      path: "/bbshifteffect",
      name: "BBShiftEffect",
      component: BBShiftEffect
    },
    {
      path: "/bbmorphingstates",
      name: "BBMorphingStates",
      component: BBMorphingStates
    },
    {
      path: "/bbcustomtemplates",
      name: "BBCustomTemplates",
      component: BBCustomTemplates
    },
    {
      path: "/badgewithbuttons",
      name: "BadgeWithButtons",
      component: BadgeWithButtons
    },
    {
      path: "/badgewithlists",
      name: "BadgeWithLists",
      component: BadgeWithLists
    },
    {
      path: "/densebadge",
      name: "DenseBadge",
      component: DenseBadge
    },
    {
      path: "/appregulartoolbars",
      name: "AppRegularToolbars",
      component: AppRegularToolbars
    },
    {
      path: "/appfixedtoolbars",
      name: "AppFixedToolbars",
      component: AppFixedToolbars
    },
    {
      path: "/apprevealafterscroll",
      name: "AppRevealAfterScroll",
      component: AppRevealAfterScroll
    },
    {
      path: "/appflexibleheightandtextsize",
      name: "AppFlexibleHeightAndTextSize",
      component: AppFlexibleHeightAndTextSize
    },
    {
      path: "/applasttoolbarrowfixed",
      name: "AppLastToolbarRowFixed",
      component: AppLastToolbarRowFixed
    },
    {
      path: "/appoverlappingcontent",
      name: "AppOverlappingContent",
      component: AppOverlappingContent
    },
    {
      path: "/avatardefault",
      name: "AvatarDefault",
      component: AvatarDefault
    },
    {
      path: "/avatarplaceholder",
      name: "AvatarPlaceholder",
      component: AvatarPlaceholder
    },
    {
      path: "/avatarmultiplesizes",
      name: "AvatarMultipleSizes",
      component: AvatarMultipleSizes
    },
    {
      path: "/papercontent",
      name: "PaperContent",
      component: PaperContent
    },
    {
      path: "/datepickerbasic",
      name: "DatepickerBasic",
      component: DatepickerBasic
    },
    {
      path: "/datepickerlabeled",
      name: "DatepickerLabeled",
      component: DatepickerLabeled
    },
    {
      path: "/datepickerwithdifferenttypebinding",
      name: "DatepickerWithDifferentTypeBinding",
      component: DatepickerWithDifferentTypeBinding
    },
    {
      path: "/datepickerinitialdateselected",
      name: "DatepickerInitialDateSelected",
      component: DatepickerInitialDateSelected
    },
    {
      path: "/datepickerimmediateselection",
      name: "DatepickerImmediateSelection",
      component: DatepickerImmediateSelection
    },
    {
      path: "/datepickernoweekendsavailable",
      name: "DatepickerNoWeekendsAvailable",
      component: DatepickerNoWeekendsAvailable
    },
    {
      path: "/customdialogmarkup",
      name: "CustomDialogMarkup",
      component: CustomDialogMarkup
    },
    {
      path: "/alert",
      name: "Alert",
      component: Alert
    },
    {
      path: "/confirms",
      name: "Confirms",
      component: Confirms
    },
    {
      path: "/prompts",
      name: "Prompts",
      component: Prompts
    },
    {
      path: "/dividerexample",
      name: "DividerExample",
      component: DividerExample
    },
    {
      path: "/drawertemporary",
      name: "DrawerTemporary",
      component: DrawerTemporary
    },
    {
      path: "/drawerpermanent",
      name: "DrawerPermanent",
      component: DrawerPermanent
    },
    {
      path: "/drawerclipped",
      name: "DrawerClipped",
      component: DrawerClipped
    },
    {
      path: "/drawercard",
      name: "DrawerCard",
      component: DrawerCard
    },
    {
      path: "/drawerpersistent",
      name: "DrawerPersistent",
      component: DrawerPersistent
    },
    {
      path: "/drawerminidraweralwaysvisible",
      name: "DrawerMiniDrawerAlwaysVisible",
      component: DrawerMiniDrawerAlwaysVisible
    },
    {
      path: "/esdefault",
      name: "ESDefault",
      component: ESDefault
    },
    {
      path: "/esrounded",
      name: "ESRounded",
      component: ESRounded
    },
    {
      path: "/eshuecolors",
      name: "ESHueColors",
      component: ESHueColors
    },
    {
      path: "/formvalidation",
      name: "FormValidation",
      component: FormValidation
    },
    {
      path: "/formautocompletestaticdata",
      name: "FormAutocompleteStaticData",
      component: FormAutocompleteStaticData
    },
    {
      path: "/formautocompletetrigger",
      name: "FormAutocompleteTrigger",
      component: FormAutocompleteTrigger
    },
    {
      path: "/formautocompleteboxlayout",
      name: "FormAutocompleteBoxLayout",
      component: FormAutocompleteBoxLayout
    },
    {
      path: "/formautocompletecustomtemplate",
      name: "FormAutocompleteCustomTemplate",
      component: FormAutocompleteCustomTemplate
    },
    {
      path: "/formautocompletesearchalgo",
      name: "FormAutocompleteSearchAlgo",
      component: FormAutocompleteSearchAlgo
    },
    {
      path: "/formautocompleteasyncoptions",
      name: "FormAutocompleteAsyncOptions",
      component: FormAutocompleteAsyncOptions
    },
    {
      path: "/formcheckbox",
      name: "FormCheckbox",
      component: FormCheckbox
    },
    {
      path: "/formcheckboxhuecolors",
      name: "FormCheckboxHueColors",
      component: FormCheckboxHueColors
    },
    {
      path: "/formcheckboxtruefalsevalue",
      name: "FormCheckboxTrueFalseValue",
      component: FormCheckboxTrueFalseValue
    },
    {
      path: "/formchips",
      name: "FormChips",
      component: FormChips
    },
    {
      path: "/formfile",
      name: "FormFile",
      component: FormFile
    },
    {
      path: "/basic",
      name: "Basic",
      component: Basic
    },
    {
      path: "/validation",
      name: "Validation",
      component: Validation
    },
    {
      path: "/charactercount",
      name: "CharacterCount",
      component: CharacterCount
    },
    {
      path: "/inputwithicons",
      name: "InputWithIcons",
      component: InputWithIcons
    },
    {
      path: "/inputwithinlineactions",
      name: "InputWithInlineActions",
      component: InputWithInlineActions
    },
    {
      path: "/inputwithprefixesandsuffixes",
      name: "InputWithPrefixesAndSuffixes",
      component: InputWithPrefixesAndSuffixes
    },
    {
      path: "/radio",
      name: "Radio",
      component: Radio
    },
    {
      path: "/select",
      name: "Select",
      component: Select
    },
    {
      path: "/switch",
      name: "Switch",
      component: Switch
    },
    {
      path: "/materialicons",
      name: "MaterialIcons",
      component: MaterialIcons
    },
    {
      path: "/customfonts",
      name: "CustomFonts",
      component: CustomFonts
    },
    {
      path: "/svgassets",
      name: "SVGAssets",
      component: SVGAssets
    },
    {
      path: "/singleline",
      name: "SingleLine",
      component: SingleLine
    },
    {
      path: "/doubleline",
      name: "DoubleLine",
      component: DoubleLine
    },
    {
      path: "/tripleline",
      name: "TripleLine",
      component: TripleLine
    },
    {
      path: "/listactions",
      name: "ListActions",
      component: ListActions
    },
    {
      path: "/controls",
      name: "Controls",
      component: Controls
    },
    {
      path: "/expansion",
      name: "Expansion",
      component: Expansion
    },
    {
      path: "/startandend",
      name: "StartAndEnd",
      component: StartAndEnd
    },
    {
      path: "/alignments",
      name: "Alignments",
      component: Alignments
    },
    {
      path: "/sizes",
      name: "Sizes",
      component: Sizes
    },
    {
      path: "/autoclose",
      name: "AutoClose",
      component: AutoClose
    },
    {
      path: "/richcontentandiconalignment",
      name: "RichContentAndIconAlignment",
      component: RichContentAndIconAlignment
    },
    {
      path: "/progressbar",
      name: "ProgressBar",
      component: ProgressBar
    },
    {
      path: "/spinner",
      name: "Spinner",
      component: Spinner
    },
    {
      path: "/snackbarbasic",
      name: "SnackbarBasic",
      component: SnackbarBasic
    },
    {
      path: "/sdpositions",
      name: "SDPositions",
      component: SDPositions
    },
    {
      path: "/sdeffects",
      name: "SDEffects",
      component: SDEffects
    },
    {
      path: "/sdtriggers",
      name: "SDTriggers",
      component: SDTriggers
    },
    {
      path: "/horizontalsteppersdefaultlayout",
      name: "HorizontalSteppersDefaultLayout",
      component: HorizontalSteppersDefaultLayout
    },
    {
      path: "/horizontalsteppersalternativelayout",
      name: "HorizontalSteppersAlternativeLayout",
      component: HorizontalSteppersAlternativeLayout
    },
    {
      path: "/verticalsteppers",
      name: "VerticalSteppers",
      component: VerticalSteppers
    },
    {
      path: "/linearsteppers",
      name: "LinearSteppers",
      component: LinearSteppers
    },
    {
      path: "/noneditablesteps",
      name: "NonEditableSteps",
      component: NonEditableSteps
    },
    {
      path: "/vuerouterintegration",
      name: "VueRouterIntegration",
      component: VueRouterIntegration
    },
    {
      path: "/subheaderbasic",
      name: "SubheaderBasic",
      component: SubheaderBasic
    }
  ]
});
