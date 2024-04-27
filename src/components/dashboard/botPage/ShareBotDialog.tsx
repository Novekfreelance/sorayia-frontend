import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

interface ShareBotDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  id: string;
}

const ShareBotDialog = ({ open, setOpen, id }: ShareBotDialogProps) => {
  const [generatedCode, setGeneratedCode] = useState("");

  useEffect(() => {
    setGeneratedCode(generateCode(id));
  }, [id]);

  const generateCode = (id: string) => {
    return `<sorayia room_id="${id}"></sorayia>`;
  };

  const handleClick = () => {
    navigator.clipboard.writeText(generatedCode);
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-2xl px-8">
        <h3 className="text-base-400">
          To make the widget appear on your web page, simply copy and paste the
          snippet below into the footer of your website.
        </h3>
        <pre className="rounded-lg overflow-auto bg-slate-800 text-white text-base-400 break-words whitespace-pre-wrap py-4 px-2">
          <code className="language-html">{generatedCode}</code>
        </pre>
        <Button onClick={handleClick}>Copier le code</Button>
      </DialogContent>
    </Dialog>
  );
};

export default ShareBotDialog;
