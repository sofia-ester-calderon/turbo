import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import { Article } from "./components/Article";
import { Page } from "./components/Page";
import { Hero } from "./components/Hero";
import { Grid } from "./components/Grid";
import { Card } from "./components/Card";
import { RecommendedArticles } from "./components/RecommendedArticles";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    article: Article,
    page: Page,
    hero: Hero,
    grid: Grid,
    card: Card,
    recommended_articles: RecommendedArticles,
  },
  enableFallbackComponent: true,
});
