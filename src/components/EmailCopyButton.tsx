import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { MailIcon } from "@/components/icons";

interface EmailCopyButtonProps {
  email: string;
}

export function EmailCopyButton({ email }: EmailCopyButtonProps) {
  const { copy, copied, label } = useCopyToClipboard(email);

  return (
    <button
      type="button"
      className={`copy-button${copied ? " is-copied" : ""}`}
      aria-label="Copy email address"
      onClick={() => {
        void copy();
      }}
    >
      <MailIcon className="lucide-icon" />
      <span>{label}</span>
    </button>
  );
}
