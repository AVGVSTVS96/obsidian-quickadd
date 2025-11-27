# QuickAdd Capture for Raycast

Capture content to Obsidian via the QuickAdd plugin without context switching. Obsidian stays in the background while you capture.

## How It Works

This extension generates [Raycast Script Commands](https://manual.raycast.com/script-commands) for each capture you create. Each capture appears directly in Raycast search - type the name, enter your text, done.

## Setup

### 1. Prerequisites

- [QuickAdd plugin](https://github.com/chhoumann/quickadd) installed in Obsidian with at least one Capture choice
- Your QuickAdd choice must use a **named variable** like `{{VALUE:text}}`

### 2. One-Time Raycast Setup

Script Commands need a directory. Do this once:

1. Create a folder for scripts: `mkdir -p ~/scripts/raycast`
2. Open Raycast Preferences (`Cmd+,`)
3. Go to **Extensions** tab
4. Click **+** → **Add Script Directory**
5. Select `~/scripts/raycast`

### 3. Configure Extension

1. Open Raycast and run **"Create QuickAdd Capture"**
2. It will prompt you to set the **Script Commands Folder** - enter: `~/scripts/raycast`
3. Optionally set a **Default Vault** if you use multiple vaults

### 4. Create Your First Capture

1. Run **"Create QuickAdd Capture"**
2. Fill in the form:
   - **Command Name**: What you'll type in Raycast (e.g., "Daily Capture")
   - **QuickAdd Choice**: Exact name from Obsidian (case-sensitive)
   - **Variable Name**: The variable in your template (e.g., `text` for `{{VALUE:text}}`)
3. Done! The capture now appears in Raycast search.

## Usage

1. Open Raycast
2. Type your capture name (e.g., "daily")
3. Enter your text in the argument field
4. Press Enter

Obsidian receives the content in the background - you never leave your current app.

## Tips

- **Set aliases** in Raycast for faster access (e.g., `dc` → Daily Capture)
- Create multiple captures for different QuickAdd choices
- Each script is a standalone file - edit or delete them directly in `~/scripts/raycast`

## Troubleshooting

**Capture not appearing in Raycast?**
- Verify you added `~/scripts/raycast` as a Script Directory in Raycast Preferences
- Check the script exists: `ls ~/scripts/raycast`

**Capture not working?**
- Ensure QuickAdd choice name matches exactly (case-sensitive)
- Verify the variable name matches your template
- Check that QuickAdd is enabled in Obsidian

**Extra blank line in captured content?**
- Edit your Capture format in Obsidian and remove trailing whitespace
