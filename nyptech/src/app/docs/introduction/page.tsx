"use client"
import { Copy, File, Folder } from "lucide-react";
import Link from "next/link";
import CopyCode from "../../_components/copy";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
const installation = () => {
    return ( 
        <div className="flex flex-col text-3xl">
            <div className="flex container flex-col py-5">
                Introduction
                <div className="text-sm w-50">
                We have decided to use nextjs for the frontend with the app router to allow us to create a separation of concerns throughout our app.
                To create a fast prototyping environment, we have decided to use <Link href="https://v0.dev" className="btn btn-link">v0</Link> with Shadcn to provide responsive and clean ui in a relatively shorter period of time.
                The purpose of DaisyUI is to provide a shortening of commonly used tailwind names (like class-variance-authority) as well as providing theming for different color combinations. Lastly it can be used by pure html files for prototyping.
                </div>

            </div>
            <Link href="#installation" className="flex container flex-col self-start py-5">
                Installation
            </Link>
            <div className="flex container flex-col text-sm">
            You can deploy and try out any of our sample examples.
                <div className="flex text-base m-5 gap-2 flex-row">
                <Link href="https://vercel.com/new/clone?repository-url=https://github.com/nyp-tech/nyp-tech/tree/main/spline-example&demo-title=SampleNYPTECH&demo-description=Deploy-Sample-App-NYPTECH" className="btn">Spline</Link>
                <Link href="https://vercel.com/new/clone?repository-url=https://github.com/nyp-tech/nyp-tech/tree/main/flask-npx&demo-title=Flask%20Hello%20World&demo-description=Use%20Python%20on%20Vercel%20with%20Serverless%20Functions%20using%20the%20Python%20Runtime.&demo-url=https://python-hello-world.vercel.app/&demo-image=https://assets.vercel.com/image/upload/v1669994600/random/python.png" className="btn">Flask</Link>
                <Link href="https://vercel.com/new/clone?repository-url=https://github.com/nyp-tech/nyp-tech/tree/main/pnpm&demo-title=SampleNYPTECH&demo-description=Deploy-Sample-App-NYPTECH" className="btn">PNPM</Link>
                <Link href="https://vercel.com/new/clone?repository-url=https://github.com/nyp-tech/nyp-tech/tree/main/npx-example&demo-title=SampleNYPTECH&demo-description=Deploy-Sample-App-NYPTECH" className="btn">NPX</Link>
                </div>
                For now just deploy the NPX example, click and deploy from the NPX button above. 
                <CopyCode text="cd npx-example"/>
                Go into the folder
                <CopyCode text="npm install"/>
                Install dependencies
                <CopyCode text="npm run dev"/>
                <div className="flex flex-row"> 
                <Link href="http://localhost:3000/" className="link">Visit Localhost</Link><div>&nbsp;or visit&nbsp;</div> <Link href="http://localhost:3000/params/hello-world" className="link">a params example</Link>
                </div>

            </div>
            <Link href="#hello-world" className="flex container flex-col py-5">
                Hello World
            </Link>
                <div className="flex text-base container flex-col">
                Add the hello folder and add a page.tsx inside like this:
                <ul className="menu bg-base-200 rounded-box m-5">
                <li>
                <a><Folder/>APP</a>
                <ul>
                <li><a><Folder/>hello (Add this folder)</a><ul>
                <li><a><File/>page.tsx (Add this page)</a></li>
                  </ul></li>
                <li><a><Folder/>params/[params_example]</a><ul>
                <li><a><File/>page.tsx</a></li>
                  </ul></li>
                  <li><a><File/>gloabals.css</a></li>
                  <li><a><File/>favicon.ico</a></li>
                  <li><a><File/>Layout.tsx</a></li>
                  <li><a><File/>Loading.tsx</a></li>
                  <li><a><File/>not-found.tsx</a></li>
                  <li><a><File/>page.tsx</a></li>
                </ul> 
                </li>
                </ul>
                In page.tsx type:
                <img src="/example.png" className="rounded-xl m-5"></img>
                Congrats! You just made your first page!
                <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Resources</AccordionTrigger>
        <AccordionContent className="flex flex-col text-left items-start">
          <Link href="https://nextjs.org/docs" className="btn btn-link">
            Nextjs Docs
          </Link>
          <Link href="https://ui.shadcn.com/docs" className="btn btn-link">
            Shadcn Docs
          </Link>
          <Link href="https://daisyui.com/" className="btn btn-link">
            DaisyUI Docs
          </Link>
          <Link href="https://v2.tailwindcss.com/docs" className="btn btn-link">
            Tailwind Docs
          </Link>
          If you feel that you want to learn more about the technologies used so far, do give these resources a look.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Hosting</AccordionTrigger>
        <AccordionContent>
         We recommend using 
         <Link href="https://vercel.com">Vercel</Link> for hosting but you can wish to choose other hosting providers. The above video guides you through the entire installation process. We recommend using react server components for simple backends, and if the backend requires a significant amount of processing / websockets, do consider backend as a service providers like <Link href="https://convex.dev/" className="link">Convex</Link> or <Link href="https://supabase.com/" className="link">Supabase</Link> as well as other languages in a vps.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Next Steps</AccordionTrigger>
        <AccordionContent>
Join our workshops, events or even our APIs, we will try to support you the best we can. If you have a service idea, do put in the <Link href="/#form" className="btn btn-link">feedback form </Link> as well as volunteer your service to maintain this microservice.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
                </div>
        </div>
     );
}
 
export default installation;