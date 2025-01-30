import Link from "next/link";
import { tagColors } from "@/app/utils/tagColors";

type Post = {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

const posts: Post[] = [
  {
    id: "1",
    title: "Hello World!",
    date: "January 29, 2025",
    description:
      "Every journey begins with a single step, and this is mine. Welcome to The Creative Developer – a space where I share thoughts on software engineering, automation, scalability, and the art of building great systems...",
    tags: ["Introduction", "Idea"],
  },
  // {
  //   id: "2",
  //   title: "A Deep Dive into Golang Concurrency",
  //   date: "January 12, 2025",
  //   description:
  //     "Golang provides powerful concurrency mechanisms, such as goroutines and channels, making it ideal for scalable applications...",
  //   tags: ["Golang", "Concurrency"],
  // },
  // {
  //   id: "3",
  //   title: "Optimizing Database Queries for Scalability",
  //   date: "January 10, 2025",
  //   description:
  //     "Efficient indexing and query optimization are crucial for performance...",
  //   tags: ["Database", "Scalability"],
  // },
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Blog Posts List */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="border-b border-gray-300 pb-6 last:border-none hover:bg-gray-100 transition p-4 rounded-md"
        >
          <p className="text-sm text-gray-500">{post.date}</p>
          <h2 className="text-2xl font-semibold text-gray-800 mt-1">
            <Link href={`/posts/${post.id}`}>
              <span className="hover:text-blue-600 transition">{post.title}</span>
            </Link>
          </h2>
          <p className="text-gray-700 mt-2">{post.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs font-semibold px-2.5 py-1 rounded bg-gray-200 text-gray-800 ${
                  tagColors[tag] || "bg-gray-300"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
