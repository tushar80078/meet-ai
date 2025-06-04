import ResponseDialog from "@/components/responsive-dialog";
import MeetingForm from "./new-meetings-form";
import { useRouter } from "next/navigation";

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewAMeetingDialog = ({ onOpenChange, open }: NewAgentDialogProps) => {
  const router = useRouter();
  return (
    <ResponseDialog
      title="New Meeting"
      description="Create a new meeting"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        onSuccess={(id) => {
          onOpenChange(false);
          router.push(`meetings/${id}`);
        }}
        onCancel={() => onOpenChange(false)}
      />
    </ResponseDialog>
  );
};

export default NewAMeetingDialog;
