import NextBreadcrumb from "@/app/docs/components/breadcrumb";

export default function DocsLayout({
    children, ...props
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex flex-col container">
        <div className="w-full text-4xl py-10 font-bold">
        <NextBreadcrumb
          homeElement={'Home'}
        />
        
            Blog
        </div>  
        {children}
      </div>
    );
  }