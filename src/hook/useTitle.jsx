import { useEffect } from "react";

export function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    // Cleanup: restore title on unmount
    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}
