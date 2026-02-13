import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Industrial Technical Archive Configuration
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Tom Coffey — Archive",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "yourdomain.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "IBM Plex Sans",
        body: "IBM Plex Sans",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f3f3f4",
          lightgray: "#e1e1e3",
          gray: "#8a8a8f",
          darkgray: "#2c2c30",
          dark: "#0f0f11",
          secondary: "#000000",
          tertiary: "#5c5c60",
          highlight: "rgba(0, 0, 0, 0.05)",
          textHighlight: "rgba(0, 120, 255, 0.18)",
        },
        darkMode: {
          light: "#0b0b0c",
          lightgray: "#17181a",
          gray: "#5f6064",
          darkgray: "#d8d8da",
          dark: "#f2f2f3",
          secondary: "#ffffff",
          tertiary: "#9a9a9f",
          highlight: "rgba(255, 255, 255, 0.06)",
          textHighlight: "rgba(0, 120, 255, 0.25)",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
