import { RefObject, useEffect, useMemo, useState } from "react";

export default function useOnScreen<T extends HTMLElement>(ref: RefObject<T>) {
  const [isIntersecting, setIntersecting] = useState(false);
  const [observer, setObserver] = useState<IntersectionObserver>();

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    setObserver(obs);
  }, []);

  useEffect(() => {
    if (observer && ref?.current) observer.observe(ref.current);
    return () => {
      if (observer) observer.disconnect();
    };
  }, [observer, ref]);

  return isIntersecting;
}
