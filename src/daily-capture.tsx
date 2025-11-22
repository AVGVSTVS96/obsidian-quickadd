import { Action, ActionPanel, Form, showToast, Toast } from "@raycast/api";
import { captureToObsidian } from "./utils";

type CaptureFormValues = {
  content: string;
};

export default function DailyCapture() {
  async function handleSubmit(values: CaptureFormValues) {
    if (!values.content) {
      await showToast({
        style: Toast.Style.Failure,
        title: "Content cannot be empty",
      });
      return;
    }
    await captureToObsidian(values.content);
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm
            onSubmit={handleSubmit}
            title="Capture to Daily Note"
          />
        </ActionPanel>
      }
    >
      <Form.TextArea
        id="content"
        placeholder="Enter your note, task, or thought..."
        title="Daily Capture"
      />
    </Form>
  );
}
