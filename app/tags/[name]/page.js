import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getDocumentByTag } from "@/utils/docs-utils";

async function Page({params}) {
const {name} = await params;

const docs = getDocuments();
const matchedDocs = getDocumentByTag(docs, name);

  return (
    <ContentDisplay id={matchedDocs[0].id} />
  )
}

export default Page