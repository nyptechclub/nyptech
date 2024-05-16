import NextBreadcrumb from "./components/breadcrumb";

export default function DocsLayout({
    children, ...props
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex flex-col container bg-base">
        <div className="w-full text-4xl py-10 font-bold">
        <NextBreadcrumb
          homeElement={'Home'}
        />
            Documentation
        </div>  
        {children}
      </div>
    );
  }