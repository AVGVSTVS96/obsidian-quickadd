/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Script Commands Folder - Path to your Raycast Script Commands folder (e.g., ~/scripts/raycast) */
  "scriptCommandsPath": string,
  /** Default Vault (Optional) - Default Obsidian vault name for all captures */
  "defaultVault"?: string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `create-script-command` command */
  export type CreateScriptCommand = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `create-script-command` command */
  export type CreateScriptCommand = {}
}

