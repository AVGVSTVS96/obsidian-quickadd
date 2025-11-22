import {
  closeMainWindow,
  getPreferenceValues,
  open,
  showToast,
  Toast,
} from "@raycast/api";

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

    await showToast({
      style: Toast.Style.Success,
      title: "Captured to Obsidian",
      message: `Choice: ${choiceName}`,
    });

    await open(urlString);
    await closeMainWindow({ clearRootSearch: true });
  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Failed to Capture",
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    });
  }
}
