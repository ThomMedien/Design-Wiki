import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Quartz 4",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Space Grotesk",
        body: "IBM Plex Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          // background & surfaces
          light: "#f5f5f7",
          lightgray: "#d0d4d8",
          // neutral text / borders
          gray: "#8b8f98",
          darkgray: "#3b3f46",
          dark: "#111418",
          // industrial accent tones
          secondary: "#4b6478",
          tertiary: "#9aa4b2",
          // subtle selection / hover
          highlight: "rgba(75, 100, 120, 0.10)",
          // text highlight for search/selection
          textHighlight: "#3b82f688",
        },
        darkMode: {
          // background & surfaces
          light: "#111418",
          lightgray: "#2a2f36",
          // neutral text / borders
          gray: "#6b7280",
          darkgray: "#d1d5db",
          dark: "#e5e7eb",
          // industrial accent tones
          secondary: "#7ea2c9",
          tertiary: "#9ca3af",
          // subtle selection / hover
          highlight: "rgba(126, 162, 201, 0.18)",
          // text highlight for search/selection
          textHighlight: "#facc1588",
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
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config