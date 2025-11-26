import {
  getPreferenceValues,
  popToRoot,
  showHUD,
  showToast,
  Toast,
} from "@raycast/api";
import { runAppleScript } from "@raycast/utils";

type Preferences = {
  choiceName: string;
  variableName: string;
  vaultName?: string;
};

export async function captureToObsidian(content: string) {
  const preferences = getPreferenceValues<Preferences>();
  const { choiceName, variableName, vaultName } = preferences;

  if (!(choiceName && variableName)) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Preferences Not Set",
      message:
        "Please set QuickAdd Choice Name and Variable Name in the extension preferences.",
    });
    return;
  }

  try {
    // Build URL manually with encodeURIComponent to control encoding
    let urlString = `obsidian://quickadd?choice=${encodeURIComponent(choiceName)}`;
    urlString += `&value-${encodeURIComponent(variableName)}=${encodeURIComponent(content)}`;

    if (vaultName) {
      urlString += `&vault=${encodeURIComponent(vaultName)}`;
    }

    await openQuickAddInBackground(urlString);
    
    // Clear navigation stack to prevent form persistence on next open
    await popToRoot();
    
    // Show HUD and close window (command terminates after this)
    await showHUD("Captured to Obsidian", { clearRootSearch: true });
  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Failed to Capture",
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
}

async function openQuickAddInBackground(urlString: string) {
  await runAppleScript(
    `
on run argv
  set theUrl to item 1 of argv
  do shell script "open -g " & quoted form of theUrl
end run
`,
    [urlString],
  );
}
