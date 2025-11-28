"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
  Suspense,
} from "react";
import { useSearchParams } from "next/navigation";

const DEFAULT_NAME = "Elif Kaya";

type NameContextType = {
  name: string;
};

const NameContext = createContext<NameContextType>({ name: DEFAULT_NAME });

function NameProviderContent({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const [name, setName] = useState(DEFAULT_NAME);

  useEffect(() => {
    const queryName = searchParams.get("name");
    if (queryName && queryName.trim().length > 0) {
      const cleaned = queryName.trim();
      setName(cleaned);
      if (typeof window !== "undefined") {
        localStorage.setItem("preferredName", cleaned);
      }
      return;
    }

    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("preferredName");
      if (stored && stored.trim().length > 0) {
        setName(stored.trim());
      }
    }
  }, [searchParams]);

  return <NameContext.Provider value={{ name }}>{children}</NameContext.Provider>;
}

export function NameProvider({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <NameProviderContent>{children}</NameProviderContent>
    </Suspense>
  );
}

export function useName() {
  return useContext(NameContext);
}
