/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `daily-capture` command */
  export type DailyCapture = ExtensionPreferences & {
  /** QuickAdd Choice Name - The exact name of the QuickAdd choice to trigger. */
  "choiceName": string,
  /** Variable Name - The named variable in your QuickAdd template (e.g., 'text' for {{VALUE:text}}) */
  "variableName": string,
  /** Obsidian Vault Name (Optional) - Specify the vault name if you have multiple vaults. */
  "vaultName"?: string
}
  /** Preferences accessible in the `in-progress` command */
  export type InProgress = ExtensionPreferences & {
  /** QuickAdd Choice Name - The exact name of the QuickAdd choice to trigger. */
  "choiceName": string,
  /** Variable Name - The named variable in your QuickAdd template (e.g., 'text' for {{VALUE:text}}) */
  "variableName": string,
  /** Obsidian Vault Name (Optional) - Specify the vault name if you have multiple vaults. */
  "vaultName"?: string
}
}

declare namespace Arguments {
  /** Arguments passed to the `daily-capture` command */
  export type DailyCapture = {}
  /** Arguments passed to the `in-progress` command */
  export type InProgress = {}
}

