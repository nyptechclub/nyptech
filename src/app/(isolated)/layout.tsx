export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className={"h-dvh"} data-theme={"light"}>
      {props.children}
    </div>
  );
}