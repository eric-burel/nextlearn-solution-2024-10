// Debug page to force trigger "error.tsx" rendering
export default function ErrorPage() {
  throw new Error("There has been an error.");
}
