import { notFound } from "next/navigation";

// Debug page to force trigger "error.tsx" rendering
export default function ErrorPage() {
  if (process.env.NODE_ENV === "development") {
    throw new Error("There has been an error.");
  }
  return notFound();
}
