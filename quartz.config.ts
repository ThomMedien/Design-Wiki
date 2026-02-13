import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
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
        // Clean, utilitarian fonts
        header: "Space Grotesk",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        // Concrete, steel, and warning-orange accent
        lightMode: {
          light: "#f2f2f2",          // page background (concrete)
          lightgray: "#d4d4d8",      // cards / panels
          gray: "#6b7280",           // secondary text
          darkgray: "#111827",       // primary text
          dark: "#020617",           // strongest text
          secondary: "#f97316",      // industrial accent (warning orange)
          tertiary: "#4b5563",       // muted accent / borders
          highlight: "rgba(216, 181, 157, 0.75)", // hover / selection
          textHighlight: "#facc1588",             // search / mark highlight
        },
        darkMode: {
          light: "#020617",          // page background (near-black steel)
          lightgray: "#111827",      // cards / panels
          gray: "#4b5563",           // secondary text
          darkgray: "#e5e7eb",       // primary text
          dark: "#f9fafb",           // strongest text
          secondary: "#f97316",      // industrial accent (same orange)
          tertiary: "#9ca3af",       // muted accent / borders
          highlight: "rgba(192, 151, 123, 0.81)", // hover / selection
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