import { MDXRemote } from "next-mdx-remote/rsc";

export default function MdxRender(props: { content: string }) {
  return (
    <div className={"max-w-full prose-sm"}>
      <MDXRemote source={props.content} />
    </div>
  );
}