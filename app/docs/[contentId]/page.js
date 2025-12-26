// import ContentDisplay from "@/components/ContentDisplay";
// import { getDocumentContent, getDocuments } from "@/lib/doc";

// সব ডকুমেন্টের জন্য route prebuild করবে
// export async function generateStaticParams() {
//   const documents = getDocuments();

//   return documents.map((doc) => ({
//     contentId: doc.id,
//   }));
// }
import ContentDisplay from "@/components/ContentDisplay";
// একক ডকুমেন্ট রেন্ডার করবে
export default async function Page({ params }) {
  const { contentId } = await params;
 console.log(contentId)
  return (
    
    <div>
      <ContentDisplay id={contentId} />
    </div>
  );
}
