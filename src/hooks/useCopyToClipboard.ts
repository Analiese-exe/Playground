import { useCallback, useEffect, useState } from "react";

async function copyText(text: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to the textarea strategy below.
    }
  }

  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "absolute";
  helper.style.left = "-9999px";
  document.body.appendChild(helper);
  helper.select();
  const copied = document.execCommand("copy");
  document.body.removeChild(helper);
  return copied;
}

export function useCopyToClipboard(text: string, defaultLabel = "E-mail", successLabel = "Copied!") {
  const [label, setLabel] = useState(defaultLabel);

  useEffect(() => {
    setLabel(defaultLabel);
  }, [defaultLabel]);

  const copy = useCallback(async () => {
    const copied = await copyText(text);

    if (!copied) {
      return false;
    }

    setLabel(successLabel);
    return true;
  }, [successLabel, text]);

  useEffect(() => {
    if (label !== successLabel) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setLabel(defaultLabel);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [defaultLabel, label, successLabel]);

  return {
    copy,
    label,
    copied: label === successLabel
  };
}
