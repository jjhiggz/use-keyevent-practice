import { useCallback, useEffect } from "react";

type UseKeyProps = {
  keys: (
    | "Escape"
    | "Enter"
    | "Tab"
    | "Shift"
    | "j"
    | "k"
    | "l"
    | "h"
    | "ArrowRight"
    | "ArrowLeft"
    | "ArrowDown"
    | "ArrowUp"
  )[];
  handler: () => void;
  activeWhen?: boolean;
  onKey?: "up" | "down" | "press";
};

const useKeyListener = ({
  onKey = "down",
  keys,
  handler,
  activeWhen = true,
}: UseKeyProps) => {
  const eventListener = useCallback(
    (e: any) => {
      if (keys.includes(e.key)) {
        handler();
      }
    },
    [handler, keys]
  );

  useEffect(() => {
    if (activeWhen) {
      document.addEventListener("key" + onKey, eventListener);
    }
    if (!activeWhen) {
      document.removeEventListener("key" + onKey, eventListener);
    }
    return () => {
      document.removeEventListener("key" + onKey, eventListener);
    };
  }, [eventListener, activeWhen, onKey]);
};

export default useKeyListener;
