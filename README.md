# Obsidian QuickAdd Capture for Raycast

This extension allows you to quickly capture notes and tasks to Obsidian via the QuickAdd plugin, all without ever leaving your current application.

## Setup Instructions

### 1. Critical Prerequisite: Configure QuickAdd

For this extension to work, you **must** configure your QuickAdd choices to use **named variables**. This is a one-time setup per choice.

1.  In Obsidian, go to `Settings` > `Community Plugins` > `QuickAdd`.
2.  For each choice you want to use (e.g., "Daily Capture"), click the gear icon to configure it.
3.  Find the **Capture Format** section and enable the toggle.
4.  In the format box, ensure your template uses a named variable, like `{{VALUE:text}}`.

    -   **Example**: If you want to create a task, your format should be `- [ ] {{VALUE:text}}`.

    The name `text` is important; it must match the `variableName` preference in this Raycast extension's settings (the default is `text`).

### 2. Configure the Extension in Raycast

1.  After installing the extension, open Raycast and find one of the new commands (e.g., "Daily Capture").
2.  Press `⌘ + ,` to open the extension preferences.
3.  For each command, ensure the **QuickAdd Choice Name** matches the exact name of your choice in Obsidian.
4.  (Optional) If you use multiple Obsidian vaults, enter the exact name of your target vault in the **Obsidian Vault Name** field.

### 3. Set Aliases (Recommended)

For the fastest workflow, set short aliases for your commands.

1.  In Raycast, go to `Settings` > `Extensions`.
2.  Find the "Obsidian QuickAdd Capture" extension.
3.  Assign aliases to your commands, for example:
    -   `dc` for "Daily Capture"
    -   `ip` for "In Progress"

## How to Add a New Command

Because Raycast requires commands to be declared upfront, you must edit the extension's files to add a new command. This has been made as simple as possible.

**Step 1: Duplicate a Command File**

-   In the extension's source code, go to the `src/commands/` directory.
-   Duplicate an existing file (e.g., `daily-capture.tsx`) and rename it for your new command (e.g., `new-idea.tsx`).
-   Open the new file and change the function name and the UI text (e.g., `title` and `placeholder`).

**Step 2: Declare the New Command in `package.json`**

-   Open the `package.json` file at the root of the extension.
-   Find the `"commands": [...]` array.
-   Copy the entire JSON object for an existing command and paste it as a new item in the array.
-   Update the `name` (must match the filename from Step 1), `title`, `description`, and the `default` value for the `choiceName` preference.

**Step 3: Rebuild the Extension**

-   In your terminal, run `bun run dev` to have Raycast recognize the new command.
