"use client";

import { useEffect } from "react";

export default function ViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blog/${slug}/views`, { method: "POST" }).catch((err) =>
      console.error("View track error:", err),
    );
  }, [slug]);

  return null;
}
