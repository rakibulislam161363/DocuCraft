import BlogItems from "@/components/blogs"
import blogs from "../data/blogs"
import Link from "next/link"

function BlogsPage() {
  return (
    <div>
        {blogs.map((blog)=> <Link href={`/blogs/${blog.id}`} key={blog.id}><BlogItems  title={blog.title}/></Link>)}
    </div>
  )
}

export default BlogsPage