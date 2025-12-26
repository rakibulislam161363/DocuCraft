import ContentDisplay from "@/components/ContentDisplay";
import { getDocumentByCategory } from "@/utils/docs-utils";
import { getDocuments } from "@/lib/doc";

async function Categoriepage({params}) {
    const {name} = await params;

    const docs = getDocuments();
    const matchedDocs = getDocumentByCategory(docs, name);
  return (
    <ContentDisplay id={matchedDocs[0].id}/>
  )
}

export default Categoriepage