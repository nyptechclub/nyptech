import { Calendar } from "lucide-react";

export default function Page() {
  const posts = [
    {
      title: "Post 1",
      content: "This is the first post",
    },
    {
      title: "Post 2",
      content: "This is the second post",
    },
  ];

  return (
    <main className={"h-full"}>
      <div className={"mt-6 flex flex-col gap-4 items-center"}>
        {posts.map((post, index) => (
          <article
            key={index}
            className={"p-4 w-[70%] bg-base-200 rounded-xl shadow-xl cursor-pointer transition hover:bg-base-300"}
          >
            <div>
              <h1 className={"text-xl font-bold"}>{post.title}</h1>
              <p className={"my-2"}>{post.content}</p>
              <span className={"flex gap-1 items-center"}>
                <Calendar />
                <span>June 2, 2024</span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}