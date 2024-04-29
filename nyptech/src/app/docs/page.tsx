"use client"
import Link from "next/link";
import CopyCode from "../_components/copy";

const Documentation = () => {
    return ( 
        <section className="flex flex-col">
            Endpoints:
            <div>
                Here are some of the api endpoints that we provide
            </div>
            <div className="m-5 p-5 rounded-xl bg-neutral-300 flex flex-col">
            This is the main page for TES to introduce our club.
            <Link href="https://nyptech.vercel.app" className="btn" id="main">Main Page
            </Link>
            
            <br></br>
            Activities
            <CopyCode text="https://nyptech.vercel.app/api/activities"/>
            Excos
            <CopyCode text="https://nyptech.vercel.app/apie/excos"/>
            Hero Section
            <CopyCode text="https://nyptech.vercel.app/api/hero"/>
            Socials            
            <CopyCode text="https://nyptech.vercel.app/api/socials"/>
            </div>
            <div className="m-5 p-5 rounded-xl bg-neutral-300 flex flex-col">
            Url shortener Service for our club
            <br></br>
            <Link href="https://nyptech-go.vercel.app" className="btn" id="url">Url Shortner
            </Link>

            Create
            <CopyCode text="https://nyptech-go.vercel.app/api/create"/>
            Retrive
            <CopyCode text="https://nyptech-go.vercel.app/api/retrieve"/>
            Update
            <CopyCode text="https://nyptech-go.vercel.app/api/update"/>
            Delete            
            <CopyCode text="https://nyptech-go.vercel.app/api/delete"/>
            <Link href="https://nyptech-go.vercel.app/instagram" className="link">Visit</Link>
            <CopyCode text="https://nyptech-go.vercel.app/{link}"/>
            </div>

        </section>
     );
}
 
export default Documentation;