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
      setName(queryName.trim());
    } else {
      setName(DEFAULT_NAME);
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
