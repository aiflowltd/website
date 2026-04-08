import { useEffect } from "react";

const WIDGET_SRC =
  "http://localhost:3000/a/mihai/personal/intercom?theme=light";
// http://localhost:3000/mihai/personal
/** Fixed Datacards embed + resize handshake; mounted once in App for all routes. */
export function DatacardsWidget() {
  useEffect(() => {
    let rafId = 0;
    let pending: { width: number; height: number } | null = null;

    function flush() {
      rafId = 0;
      const data = pending;
      pending = null;
      if (!data) return;
      const iframe = document.getElementById(
        "datacards-widget",
      ) as HTMLIFrameElement | null;
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
  }, []);

  return (
    <iframe
      id="datacards-widget"
      src={WIDGET_SRC}
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
