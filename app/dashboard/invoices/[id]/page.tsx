export default async function InvoicePage({ params }: any) {
  return <div>Invoice id: {(await params).id}</div>;
}
