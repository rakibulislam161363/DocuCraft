import ContentDisplay from "@/components/ContentDisplay"
import { getDocuments } from "@/lib/doc"
import { getDocumentByAuthore } from "@/utils/docs-utils"


 async function Authorpage({params}) {
    const {name} = await params;

    const docs = getDocuments();
    const matchedDocs = getDocumentByAuthore(docs, name);
  return (
    <ContentDisplay id={matchedDocs[0].id}/>
  )
}

export default Authorpage