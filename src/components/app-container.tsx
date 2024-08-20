import NavigationBar from "@/components/navigation-bar";

export default function AppContainer(props: { children: React.ReactNode }) {
  return (
    <div className={"h-dvh grid grid-rows-[auto,1fr]"} data-theme={"dark"}>
      <NavigationBar />
      {props.children}
    </div>
  );
}