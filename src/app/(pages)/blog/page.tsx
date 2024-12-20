import FilterButton from "@/app/(pages)/blog/_components/filter-button";
import PostItem from "@/app/(pages)/blog/_components/post-item";
import { getPosts } from "@/lib/blog";
import { RouteProps } from "@/types";

const filters = [
  {
    name: "All",
    category: undefined,
  },
  {
    name: "Events",
    category: "events",
  },
  {
    name: "Club",
    category: "club",
  },
  {
    name: "Tech",
    category: "tech",
  },
];

export default async function Page(props: RouteProps) {
  const { category } = await props.searchParams;

  const filter = filters.find((filter) => filter.category === category) ?? filters[0];
  const posts = getPosts().filter((post) => !filter.category || post.metadata.category === filter.category);

  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[70%] space-y-2 max-lg:w-[90%]"}>
        <div className={"flex gap-2 overflow-x-auto"}>
          {filters.map((filter) => (
            <FilterButton
              key={filter.category}
              label={filter.name}
              name={"category"}
              value={filter.category}
              active={filter.category === category}
            />
          ))}
        </div>
        <div className={"flex flex-col gap-2"}>
          {posts.map((post) => (
            <PostItem key={post.metadata.slug} post={post.metadata} />
          ))}
        </div>
      </div>
    </main>
  );
}