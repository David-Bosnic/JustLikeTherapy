import { join } from "path";
import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

import { skeleton } from "@skeletonlabs/tw-plugin";
import { myCustomTheme } from "./customTheme";
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(
      require.resolve("@skeletonlabs/skeleton"),
      "../**/*.{html,js,svelte,ts}",
    ),
  ],
  theme: {
    extend: {
      backgroundImage: {
        parallax: 'url("./src/lib/svg/Bulbs.svg")',
      },
      backgroundSize: {
        "10%": "10%",
        "50%": "50%",
      },
    },
  },
  plugins: [
    forms,
    typography,
    skeleton({
      themes: {
        custom: [myCustomTheme],
        preset: [],
      },
    }),
  ],
} satisfies Config;
