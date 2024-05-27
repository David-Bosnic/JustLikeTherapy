import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const myCustomTheme: CustomThemeConfig = {
  name: "my-custom-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `Quicksand`,
    "--theme-font-family-heading": `Quicksand`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "0 0 0",
    "--on-secondary": "255 255 255",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "255 255 255",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #2fd236
    "--color-primary-50": "224 248 225", // #e0f8e1
    "--color-primary-100": "213 246 215", // #d5f6d7
    "--color-primary-200": "203 244 205", // #cbf4cd
    "--color-primary-300": "172 237 175", // #acedaf
    "--color-primary-400": "109 224 114", // #6de072
    "--color-primary-500": "47 210 54", // #2fd236
    "--color-primary-600": "42 189 49", // #2abd31
    "--color-primary-700": "35 158 41", // #239e29
    "--color-primary-800": "28 126 32", // #1c7e20
    "--color-primary-900": "23 103 26", // #17671a
    // secondary | #4F46E5
    "--color-secondary-50": "229 227 251", // #e5e3fb
    "--color-secondary-100": "220 218 250", // #dcdafa
    "--color-secondary-200": "211 209 249", // #d3d1f9
    "--color-secondary-300": "185 181 245", // #b9b5f5
    "--color-secondary-400": "132 126 237", // #847eed
    "--color-secondary-500": "79 70 229", // #4F46E5
    "--color-secondary-600": "71 63 206", // #473fce
    "--color-secondary-700": "59 53 172", // #3b35ac
    "--color-secondary-800": "47 42 137", // #2f2a89
    "--color-secondary-900": "39 34 112", // #272270
    // tertiary | #0EA5E9
    "--color-tertiary-50": "219 242 252", // #dbf2fc
    "--color-tertiary-100": "207 237 251", // #cfedfb
    "--color-tertiary-200": "195 233 250", // #c3e9fa
    "--color-tertiary-300": "159 219 246", // #9fdbf6
    "--color-tertiary-400": "86 192 240", // #56c0f0
    "--color-tertiary-500": "14 165 233", // #0EA5E9
    "--color-tertiary-600": "13 149 210", // #0d95d2
    "--color-tertiary-700": "11 124 175", // #0b7caf
    "--color-tertiary-800": "8 99 140", // #08638c
    "--color-tertiary-900": "7 81 114", // #075172
    // success | #84cc16
    "--color-success-50": "237 247 220", // #edf7dc
    "--color-success-100": "230 245 208", // #e6f5d0
    "--color-success-200": "224 242 197", // #e0f2c5
    "--color-success-300": "206 235 162", // #ceeba2
    "--color-success-400": "169 219 92", // #a9db5c
    "--color-success-500": "132 204 22", // #84cc16
    "--color-success-600": "119 184 20", // #77b814
    "--color-success-700": "99 153 17", // #639911
    "--color-success-800": "79 122 13", // #4f7a0d
    "--color-success-900": "65 100 11", // #41640b
    // warning | #EAB308
    "--color-warning-50": "254 248 224", // #fef8e0
    "--color-warning-100": "253 246 213", // #fdf6d5
    "--color-warning-200": "253 244 203", // #fdf4cb
    "--color-warning-300": "251 237 171", // #fbedab
    "--color-warning-400": "249 224 108", // #f9e06c
    "--color-warning-500": "246 211 45", // #f6d32d
    "--color-warning-600": "221 190 41", // #ddbe29
    "--color-warning-700": "185 158 34", // #b99e22
    "--color-warning-800": "148 127 27", // #947f1b
    "--color-warning-900": "121 103 22", // #796716
    // error | #D41976
    "--color-error-50": "249 221 234", // #f9ddea
    "--color-error-100": "246 209 228", // #f6d1e4
    "--color-error-200": "244 198 221", // #f4c6dd
    "--color-error-300": "238 163 200", // #eea3c8
    "--color-error-400": "225 94 159", // #e15e9f
    "--color-error-500": "212 25 118", // #D41976
    "--color-error-600": "191 23 106", // #bf176a
    "--color-error-700": "159 19 89", // #9f1359
    "--color-error-800": "127 15 71", // #7f0f47
    "--color-error-900": "104 12 58", // #680c3a
    // surface | #495a8f
    "--color-surface-50": "228 230 238", // #e4e6ee
    "--color-surface-100": "219 222 233", // #dbdee9
    "--color-surface-200": "210 214 227", // #d2d6e3
    "--color-surface-300": "182 189 210", // #b6bdd2
    "--color-surface-400": "128 140 177", // #808cb1
    "--color-surface-500": "73 90 143", // #495a8f
    "--color-surface-600": "66 81 129", // #425181
    "--color-surface-700": "55 68 107", // #37446b
    "--color-surface-800": "44 54 86", // #2c3656
    "--color-surface-900": "36 44 70", // #242c46
  },
};
