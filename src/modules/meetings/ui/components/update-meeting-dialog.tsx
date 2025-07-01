import ResponseDialog from "@/components/responsive-dialog";
import MeetingForm from "./new-meetings-form";
import { MeetingsGetOne } from "../../types";

interface UpdateMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: MeetingsGetOne;
}

const UpdateMeetingDialog = ({
  onOpenChange,
  open,
  initialValues,
}: UpdateMeetingDialogProps) => {
  return (
    <ResponseDialog
      title="Edit Meeting"
      description="Edit the meeting details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        onSuccess={() => {
          onOpenChange(false);
        }}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponseDialog>
  );
};

export default UpdateMeetingDialog;
