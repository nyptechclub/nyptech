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
        <div className="flex container flex-col text-3xl card">
            <div className="flex container flex-col py-5">
                Introduction
                <div className="text-sm w-50">
                We have decided to use nextjs for the frontend with the app router to allow us to create a separation of concerns throughout our app.
                To create a fast prototyping environment, we have decided to use <Link href="https://v0.dev" className="btn btn-link">v0</Link> with Shadcn to provide responsive and clean ui in a relatively shorter period of time.
                The purpose of DaisyUI is to provide a shortening of commonly used tailwind names (like class-variance-authority) as well as providing theming for different color combinations. Lastly it can be used by pure html files for prototyping.
                </div>

            </div>
            <Link href="#installation" className="flex container flex-col self-start card-body">
                Installation
            </Link>
                <div className="text-base">
                <CopyCode text="npx create-next-app@latest hello-world"/>
    For this just accept the default configuration.
    <CopyCode text="npx shadcn-ui@latest init"/>
    Install shadcnUI, choose the default slate option.
    <CopyCode text="npm install -D @tailwindcss/typography"/> Install tailwind typpography. 
    <CopyCode text="npm i -D daisyui@latest"/>
    Install DaisyUI
    <CopyCode text='daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",],
    },'/>
    Add the themes below prefix and above the theme in the 
    <code>tailwind.config.ts</code>
    <CopyCode text="@tailwind base;
@tailwind components;
@tailwind utilities;"/> Go to your globals.css file and replace the file content with this.
<CopyCode text="npm install"/> Do a npm install to make sure all node modules are available.
<CopyCode text="npx shadcn-ui@latest add button
"/>Install a component from shadcn (Button for this example) 
<code>https://ui.shadcn.com/docs</code>
<CopyCode text='<html lang="en" data-theme="cupcake">
'/>Go to the layout.tsx to change the theme of your page.
<ul className="menu bg-base-200 w-56 rounded-box">
  <li><a><Folder/>.next</a></li>
  <li><a><Folder/>node_modules</a></li>
  <li><a><Folder/>public</a></li>
  <li>
    <a><Folder/>src</a>
    <ul>
      <li><a><Folder/>app</a>
      <ul>
        <li><a><File/>layout.tsx</a></li>
        <li><a><File/>page.tsx</a></li>
        <li><a><File/>globals.css</a></li>
        <li><a><File/>favicon.ico</a></li>
      </ul>
      </li>
      <li><a><Folder/>components</a>
      <ul>
        <li>
        <a><Folder/>ui</a>
        </li>
      </ul>
      </li>
      <li>
        <a><Folder/>lib</a>
        <ul>
          <li><a><File/>utils.ts</a></li>
        </ul>
      </li>
    </ul>
  </li>
    <li><a><File/>.eslintrc.json</a></li>
    <li><a><File/>.gitignore</a></li>
    <li><a><File/>components.json</a></li>
    <li><a><File/>next.config.mjs</a></li>
    <li><a><File/>package-lock.json</a></li>
    <li><a><File/>package.json</a></li>
    <li><a><File/>postcss.config.js</a></li>
    <li><a><File/>tailwind.config.js</a></li>
    <li><a><File/>tsconfig.json</a></li>
</ul>
This is how your folder should look like now.
<iframe width="100%" height="500" src="https://www.youtube.com/embed/bZv34JUOapU" title="Frontend only installation" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            <Link href="#hello-world" className="flex container flex-col card-body" id="hello-world">
                Hello World
            </Link>
            <div className="flex container text-base flex-wrap">
            <CopyCode text="npm run dev"/> Copy the command to the terminal and open&nbsp;<Link href="http://localhost:3000" className="link">&nbsp;in a new link</Link>&nbsp;Within the app folder, create a new folder&nbsp;<code>hello-world</code> and type sfc, and press&nbsp;<kbd className="kbd">Tab</kbd>&nbsp;Type&nbsp;<code>HelloPage</code>&nbsp;and write&nbsp;<code>return(&quot;hello world&quot;)</code>&nbsp;return to your <Link href="http://localhost:3000/hello-world">browser</Link> And check that hello world is displayed.&nbsp;<Link href="https://nyptech.vercel.app/hello-world" className="btn-link">Compare</Link> Below is a simple video to demonstrate this process.
            </div>

                <div className="text-base">
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
         We recommend using <Link href="https://vercel.com">Vercel</Link> for hosting but you can wish to choose other hosting providers. The above video guides you through the entire installation process. We recommend using react server components for simple backends, and if the backend requires a significant amount of processing / websockets, do consider backend as a service providers like <Link href="https://convex.dev/" className="link">Convex</Link> or <Link href="https://supabase.com/" className="link">Supabase</Link> as well as other languages in a vps.
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