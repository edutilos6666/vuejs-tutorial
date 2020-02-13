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
    }
  ]
});
