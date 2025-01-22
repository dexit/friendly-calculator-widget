import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Copy } from "lucide-react";

export const EmbedCode = () => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.origin;
  const embedCode = `<iframe src="${currentUrl}/embed" width="100%" height="800px" frameborder="0" style="border: 1px solid #eee; border-radius: 8px;"></iframe>`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(embedCode);
      setCopied(true);
      toast.success("Embed code copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy embed code");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Embed Calculator</h2>
      <div className="flex flex-col space-y-2">
        <label htmlFor="embed-code" className="text-sm font-medium">
          Copy this code to embed the calculator on your website:
        </label>
        <div className="flex gap-2">
          <Input
            id="embed-code"
            value={embedCode}
            readOnly
            className="font-mono text-sm"
          />
          <Button
            onClick={copyToClipboard}
            variant="outline"
            className={copied ? "bg-green-50" : ""}
          >
            <Copy className="h-4 w-4 mr-2" />
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Preview:</h3>
        <div className="border rounded-lg overflow-hidden">
          <iframe
            src="/embed"
            width="100%"
            height="800"
            frameBorder="0"
            title="Foster Allowance Calculator Preview"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};