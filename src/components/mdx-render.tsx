import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { highlight } from "sugar-high";

export default function MdxRender(props: { content: string }) {
  return (
    <div className={"prose max-w-full"}>
      <MDXRemote
        source={props.content}
        components={{
          a: (props) => {
            if (props.href?.startsWith("/")) {
              return <Link href={props.href}>{props.children}</Link>;
            }
            if (props.href?.startsWith("#")) {
              return <a {...props} />;
            }
            return <a target="_blank" rel="noopener noreferrer" {...props} />;
          },
          img: (props) => {
            return <img className={"rounded-lg"} src={props.src} alt={props.alt} />;
          },
          code: (props) => {
            return <code dangerouslySetInnerHTML={{ __html: highlight(props.children?.toString() ?? "") }} />;
          },
        }}
      />
    </div>
  );
}