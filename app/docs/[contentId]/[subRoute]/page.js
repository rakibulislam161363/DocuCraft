import ContentDisplay from "@/components/ContentDisplay"
 async function  Page({params}) {
   const {subRoute} = await params; 
  return (
    <div>
        <ContentDisplay id={subRoute} />
    </div>
  )
}

export default Page
