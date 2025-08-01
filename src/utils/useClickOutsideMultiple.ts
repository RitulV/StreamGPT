import { useEffect, type RefObject } from "react";

type OutsideClickHandler = (event: MouseEvent | TouchEvent) => void;

export const useClickOutsideMultiple = (
  refs: Array<RefObject<HTMLImageElement | HTMLLIElement | null>>,
  handler: OutsideClickHandler
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Check if the click is contained by any of the provided refs
      const isContained = refs.some(
        (ref) => ref.current && ref.current.contains(event.target as Node)
      );
      if (isContained) {
        return;
      }
      // If not contained by any ref, call the handler
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
};
