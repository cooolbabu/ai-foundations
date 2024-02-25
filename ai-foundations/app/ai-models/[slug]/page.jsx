import { getModelInfo } from "@/lib/getModelInfo";

export default async function FlanT5XL({ params: { slug } }) {
  const modelInfo = await getModelInfo(slug);
  return (
    <>
      <h1 className="font-bold">{modelInfo.title}</h1>
      <h1>{modelInfo.title}</h1>
      <h2 className="">{modelInfo.title}</h2>
      <h3 className="font-bold">{modelInfo.title}</h3>

      <article
        dangerouslySetInnerHTML={{ __html: modelInfo.body }}
        className="mt-3 prose border-b"
      ></article>
    </>
  );
}
