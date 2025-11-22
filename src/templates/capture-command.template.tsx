import { Action, ActionPanel, Form, showToast, Toast } from "@raycast/api";
import { captureToObsidian } from "../utils";

type CaptureFormValues = {
  content: string;
};

// This is a generic template function. You would typically create a specific
// command file that calls this or uses its structure.
export default function CommandTemplate({
  title,
  placeholder,
}: {
  title: string;
  placeholder: string;
}) {
  async function handleSubmit(values: CaptureFormValues) {
    if (!values.content) {
      await showToast({
        style: Toast.Style.Failure,
        title: "Content is required",
      });
      return;
    }
    await captureToObsidian(values.content);
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} title="Capture" />
        </ActionPanel>
      }
    >
      <Form.TextArea id="content" placeholder={placeholder} title={title} />
    </Form>
  );
}
