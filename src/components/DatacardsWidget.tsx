import { useEffect, useId } from "react";

const DEFAULT_WIDGET_SRC =
  "https://app.datacards.ai/a/aiflow/company-questions/intercom?theme=dark";

interface DatacardsWidgetProps {
  src?: string;
}

export function DatacardsWidget({ src = DEFAULT_WIDGET_SRC }: DatacardsWidgetProps) {
  const id = useId();
  const iframeId = `datacards-widget-${id}`;

  useEffect(() => {
    let rafId = 0;
    let pending: { width: number; height: number } | null = null;

    function flush() {
      rafId = 0;
      const data = pending;
      pending = null;
      if (!data) return;
      const iframe = document.getElementById(iframeId) as HTMLIFrameElement | null;
      if (!iframe) return;
      iframe.style.width = `min(${data.width}px, 90vw)`;
      iframe.style.height = `${data.height}px`;
    }

    function onMessage(e: MessageEvent) {
      if (e.data?.type !== "datacards-widget:resize") return;
      pending = { width: e.data.width, height: e.data.height };
      if (rafId) return;
      rafId = requestAnimationFrame(flush);
    }

    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("message", onMessage);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [iframeId]);

  return (
    <iframe
      id={iframeId}
      src={src}
      allowTransparency
      style={{
        position: "fixed",
        bottom: 24,
        left: "50%",
        display: "block",
        transform: "translate3d(-50%, 0, 0)",
        width: "min(580px, 95vw)",
        height: 82,
        border: "none",
        background: "transparent",
        zIndex: 2147483647,
        transition: "width 220ms cubic-bezier(.4,0,.2,1)",
      }}
      title="Datacards Widget"
    />
  );
}
