import ResponseDialog from "@/components/responsive-dialog";
import AgentForm from "./agent-form";

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewAgentDialog = ({ onOpenChange, open }: NewAgentDialogProps) => {
  return (
    <ResponseDialog
      title="New Agent"
      description="Create a new agent"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
      />
    </ResponseDialog>
  );
};

export default NewAgentDialog;
