
import blogs from "@/app/data/blogs";

export default async function SingleBlog({params}){
   const {id} = await params;

   const blog = blogs.find((blog) => blog.id === id);

   const {title, description} = blog;
    return(
        <div>
            <h1 className="text-xl font-blod">{title}</h1>
            <p className="mt-6">{description}</p>
        </div>
    )
}