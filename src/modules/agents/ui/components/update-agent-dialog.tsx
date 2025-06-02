import ResponseDialog from "@/components/responsive-dialog";
import AgentForm from "./agent-form";
import { AgentGetOne } from "../../types";

interface UpdateAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialValues: AgentGetOne;
}

const UpdateAgentDialog = ({
  onOpenChange,
  open,
  initialValues,
}: UpdateAgentDialogProps) => {
  return (
    <ResponseDialog
      title="Edit Agent"
      description="Edit the agent details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initialValues}
      />
    </ResponseDialog>
  );
};

export default UpdateAgentDialog;
