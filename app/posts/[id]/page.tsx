import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { notFound } from "next/navigation";

type Post = {
  id: string;
  title: string;
  date: string;
  content: string;
};

const posts: Record<string, Post> = {
  "1": {
    id: "1",
    title: "Hello World",
    date: "January 29, 2025",
    content: `
  Welcome to *The Creative Developer*!  
  
  If you're reading this, it means the blog is live, and the journey has officially begun. 🎉  
  
  ### Why Start a New Blog?  
  As a software developer, I spend over 30 hours a week debugging, automating tasks, and scaling systems. Every day, I come across **new techniques, optimizations, and insights** that make development more efficient and exciting.  
  
  Over time, I’ve realized that **sharing knowledge not only helps others but also strengthens my own understanding**. Documenting my learnings, experiments, and challenges allows me to revisit concepts, refine ideas, and contribute to the developer community.  
  
  I already run a **personal blog** where I write about my life, adventures, and thoughts outside of tech:  
  ➡️ [blog.rituljain.com](https://blog.rituljain.com/)  
  
  However, I wanted to create a dedicated space **just for tech**—a place where I can freely "nerd out" and explore everything that fascinates me in the world of **software engineering, automation, and system design**.  
  
  ### What’s Next?  
  I’ll be posting regularly about **engineering challenges, best practices, and interesting discoveries**.  

  If you're a fellow developer, I hope you find value in these posts.  
  Let’s learn, build, and explore together!  
  
  See you in the next post! 🚀  
  
  ---
  `,
  },
};

// ✅ Ensure Next.js pre-renders the blog posts correctly
export async function generateStaticParams() {
    return Object.keys(posts).map((id) => ({ id }));
  }
  
  // ✅ Use `async` function since `params` is now a `Promise`
  export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params; // ✅ Await params to get the actual value
  
    if (!resolvedParams?.id || !posts[resolvedParams.id]) {
      return notFound(); // ✅ Show 404 if post is missing
    }
  
    const post = posts[resolvedParams.id];

  return (
    <article className="max-w-prose mx-auto py-12 px-6 md:px-0 font-serif text-gray-900 leading-relaxed">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
      <p className="text-md text-gray-600 italic mb-8">Published on {post.date}</p>

      {/* ✅ FIX: Define how Markdown elements should be rendered */}
      <ReactMarkdown
        className="prose lg:prose-lg prose-gray"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({ children }) => <h1 className="text-4xl font-bold mt-8 mb-4">{children}</h1>,
          h2: ({ children }) => <h2 className="text-3xl font-semibold mt-6 mb-3">{children}</h2>,
          h3: ({ children }) => <h3 className="text-2xl font-medium mt-5 mb-3">{children}</h3>,
          p: ({ children }) => <p className="text-lg leading-relaxed mb-4">{children}</p>,
          ul: ({ children }) => <ul className="list-disc ml-6 space-y-2">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal ml-6 space-y-2">{children}</ol>,
          li: ({ children }) => <li className="text-lg">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          a: ({ href, children }) => (
            <a href={href} className="text-blue-600 hover:underline">
              {children}
            </a>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600">
              {children}
            </blockquote>
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
