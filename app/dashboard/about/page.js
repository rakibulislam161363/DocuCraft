"use client";

import { useRouter } from "next/navigation";

function AboutPage() {
  const router = useRouter()
  const handleClick = () => {
    router.push("/blogs");
  };
  return (
    <div>
      <h1>AboutPage</h1>
      <button
        onClick={handleClick}
        className="p-4 px-4 py-2 bg-blue-500 rounded-2xl"
      >
        go to blogs
      </button>
    </div>
  );
}

export default AboutPage;
