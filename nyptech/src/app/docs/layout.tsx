import NextBreadcrumb from "./components/breadcrumb";

export default function DocsLayout({
    children, ...props
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex flex-col container">
        <div className="w-full text-5xl p-15">
        <NextBreadcrumb
          homeElement={'Home'}
        />
            Documentation
        </div>  
        {children}
      </div>
    );
  }