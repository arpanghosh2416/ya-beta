import { useEffect, useRef } from "react";

export default function useClickOutside(callbackFn) {
  const domNodeRef = useRef(null);
  const callbackRef = useRef(callbackFn);

  // keep latest callback without re-binding the event listener
  useEffect(() => {
    callbackRef.current = callbackFn;
  }, [callbackFn]);

  useEffect(() => {
    const handler = (event) => {
      if (!domNodeRef.current?.contains(event.target)) {
        callbackRef.current?.();
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return domNodeRef;
}
