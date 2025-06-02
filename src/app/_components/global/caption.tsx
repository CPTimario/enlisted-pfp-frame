import { useState } from "react";
import { Button } from "./button";

export default function CaptionCopyBlock() {
  const caption = `I am [Name], and I’ve been 𝗘𝗡𝗟𝗜𝗦𝗧𝗘𝗗! Not just called, but chosen and empowered to be strong in God’s grace. I am ready to persevere like a farmer, be disciplined like an athlete, and focused on the mission Jesus has given me. There’s no backing down! 🪖⚔️🔥

1 𝘠𝘰𝘶 𝘵𝘩𝘦𝘯, 𝘮𝘺 𝘤𝘩𝘪𝘭𝘥, 𝘣𝘦 𝘴𝘵𝘳𝘦𝘯𝘨𝘵𝘩𝘦𝘯𝘦𝘥 𝘣𝘺 𝘵𝘩𝘦 𝘨𝘳𝘢𝘤𝘦 𝘵𝘩𝘢𝘵 𝘪𝘴 𝘪𝘯 𝘊𝘩𝘳𝘪𝘴𝘵 𝘑𝘦𝘴𝘶𝘴, 2 𝘢𝘯𝘥 𝘸𝘩𝘢𝘵 𝘺𝘰𝘶 𝘩𝘢𝘷𝘦 𝘩𝘦𝘢𝘳𝘥 𝘧𝘳𝘰𝘮 𝘮𝘦 𝘪𝘯 𝘵𝘩𝘦 𝘱𝘳𝘦𝘴𝘦𝘯𝘤𝘦 𝘰𝘧 𝘮𝘢𝘯𝘺 𝘸𝘪𝘵𝘯𝘦𝘴𝘴𝘦𝘴 𝘦𝘯𝘵𝘳𝘶𝘴𝘵 𝘵𝘰 𝘧𝘢𝘪𝘵𝘩𝘧𝘶𝘭 𝘮𝘦𝘯,[𝘢] 𝘸𝘩𝘰 𝘸𝘪𝘭𝘭 𝘣𝘦 𝘢𝘣𝘭𝘦 𝘵𝘰 𝘵𝘦𝘢𝘤𝘩 𝘰𝘵𝘩𝘦𝘳𝘴 𝘢𝘭𝘴𝘰. 3 𝘚𝘩𝘢𝘳𝘦 𝘪𝘯 𝘴𝘶𝘧𝘧𝘦𝘳𝘪𝘯𝘨 𝘢𝘴 𝘢 𝘨𝘰𝘰𝘥 𝘴𝘰𝘭𝘥𝘪𝘦𝘳 𝘰𝘧 𝘊𝘩𝘳𝘪𝘴𝘵 𝘑𝘦𝘴𝘶𝘴. 4 𝘕𝘰 𝘴𝘰𝘭𝘥𝘪𝘦𝘳 𝘨𝘦𝘵𝘴 𝘦𝘯𝘵𝘢𝘯𝘨𝘭𝘦𝘥 𝘪𝘯 𝘤𝘪𝘷𝘪𝘭𝘪𝘢𝘯 𝘱𝘶𝘳𝘴𝘶𝘪𝘵𝘴, 𝘴𝘪𝘯𝘤𝘦 𝘩𝘪𝘴 𝘢𝘪𝘮 𝘪𝘴 𝘵𝘰 𝘱𝘭𝘦𝘢𝘴𝘦 𝘵𝘩𝘦 𝘰𝘯𝘦 𝘸𝘩𝘰 𝘦𝘯𝘭𝘪𝘴𝘵𝘦𝘥 𝘩𝘪𝘮. 5 𝘈𝘯 𝘢𝘵𝘩𝘭𝘦𝘵𝘦 𝘪𝘴 𝘯𝘰𝘵 𝘤𝘳𝘰𝘸𝘯𝘦𝘥 𝘶𝘯𝘭𝘦𝘴𝘴 𝘩𝘦 𝘤𝘰𝘮𝘱𝘦𝘵𝘦𝘴 𝘢𝘤𝘤𝘰𝘳𝘥𝘪𝘯𝘨 𝘵𝘰 𝘵𝘩𝘦 𝘳𝘶𝘭𝘦𝘴. 6 𝘐𝘵 𝘪𝘴 𝘵𝘩𝘦 𝘩𝘢𝘳𝘥-𝘸𝘰𝘳𝘬𝘪𝘯𝘨 𝘧𝘢𝘳𝘮𝘦𝘳 𝘸𝘩𝘰 𝘰𝘶𝘨𝘩𝘵 𝘵𝘰 𝘩𝘢𝘷𝘦 𝘵𝘩𝘦 𝘧𝘪𝘳𝘴𝘵 𝘴𝘩𝘢𝘳𝘦 𝘰𝘧 𝘵𝘩𝘦 𝘤𝘳𝘰𝘱𝘴. 7 𝘛𝘩𝘪𝘯𝘬 𝘰𝘷𝘦𝘳 𝘸𝘩𝘢𝘵 𝘐 𝘴𝘢𝘺, 𝘧𝘰𝘳 𝘵𝘩𝘦 𝘓𝘰𝘳𝘥 𝘸𝘪𝘭𝘭 𝘨𝘪𝘷𝘦 𝘺𝘰𝘶 𝘶𝘯𝘥𝘦𝘳𝘴𝘵𝘢𝘯𝘥𝘪𝘯𝘨 𝘪𝘯 𝘦𝘷𝘦𝘳𝘺𝘵𝘩𝘪𝘯𝘨.

- 2 𝘛𝘪𝘮𝘰𝘵𝘩𝘺 2:1-7 𝘌𝘚𝘝

💬 𝘈𝘳𝘦 𝘺𝘰𝘶 𝘳𝘦𝘢𝘥𝘺 𝘵𝘰 𝘦𝘯𝘤𝘰𝘶𝘯𝘵𝘦𝘳 𝘎𝘰𝘥, 𝘧𝘪𝘨𝘩𝘵 𝘧𝘰𝘳, 𝘢𝘯𝘥 𝘦𝘮𝘣𝘳𝘢𝘤𝘦 𝘺𝘰𝘶𝘳 𝘤𝘢𝘭𝘭𝘪𝘯𝘨 𝘵𝘩𝘪𝘴 𝘠𝘊 2025?

𝗦𝗘𝗘 𝗬𝗢𝗨 𝗧𝗛𝗜𝗦 𝗝𝗨𝗡𝗘 𝟵-𝟭𝟭!

#ENCampusPasig #ENLISTED2025 #YC2025`;

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(caption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl flex flex-col gap-2 items-stretch mt-6">
      <label className="text-lg font-semibold">Caption</label>

      <textarea
        readOnly
        value={caption}
        className="w-full border border-gray-300 rounded-lg p-4 text-sm md:text-base bg-gray-50 resize-none"
        rows={5}
      />

      <Button
        onClick={handleCopy}
        variant={"primary"}
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}
