export default async function InvoicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <div>Invoice id: {(await params).id}</div>;
}
