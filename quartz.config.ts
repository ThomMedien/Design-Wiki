import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration: Soft Industrial / Pastel Blueprint
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Design Wiki",
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
        // "Space Grotesk" for that technical feel, "IBM Plex Sans" for the body
        header: "Space Grotesk",
        body: "IBM Plex Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f5f7",          // Off-white matte concrete
          lightgray: "#e2e2e9",      // Soft borders / subtle dividers
          gray: "#8e9196",           // Muted secondary text
          darkgray: "#4a4a4e",       // Soft charcoal primary text
          dark: "#2d2d30",           // Deepest gray (no pure black)
          secondary: "#89a4b1",      // Muted slate blue (Pastel Industrial)
          tertiary: "#b19894",       // Dusty rose/copper (Muted accent)
          highlight: "rgba(137, 164, 177, 0.15)", 
          textHighlight: "#e2e2e9",
        },
        darkMode: {
          light: "#1a1b1e",          // Matte dark slate
          lightgray: "#2a2b2e",      // Industrial panels
          gray: "#71717a",           // Steel gray text
          darkgray: "#d4d4d8",       // Soft light gray text
          dark: "#f4f4f5",           // Clean white text
          secondary: "#a3b8c2",      // Pale steel blue
          tertiary: "#c9ada7",       // Muted clay
          highlight: "rgba(163, 184, 194, 0.15)",
          textHighlight: "#2a2b2e",
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
      Plugin.CustomOgImages(),
    ],
  },
}

export default config