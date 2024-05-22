import IconWrapper from "@/components/icon-wrapper";
import Link from "next/link";

const iconSize = 40;

const socials = [
  {
    name: "Discord",
    url: "https://nyptech-go.vercel.app/discord",
    icon: <IconWrapper icon={"discord"} size={iconSize} />,
  },
  {
    name: "WhatsApp",
    url: "https://nyptech-go.vercel.app/whatsapp",
    icon: <IconWrapper icon={"whatsapp"} size={iconSize} />,
  },
  {
    name: "Telegram",
    url: "https://nyptech-go.vercel.app/telegram",
    icon: <IconWrapper icon={"telegram"} size={iconSize} />,
  },
  {
    name: "Instagram",
    url: "https://nyptech-go.vercel.app/instagram",
    icon: <IconWrapper icon={"instagram"} size={iconSize} />,
  },
  {
    name: "LinkedIn",
    url: "https://nyptech-go.vercel.app/linkedin",
    icon: <IconWrapper icon={"linkedin"} size={iconSize} />,
  },
];

export default function ContactSection(props: { className?: string }) {
  return (
    <section className={`px-6 grid place-items-center ${props.className}`}>
      <div className={"text-center"}>
        <h1 className={"text-5xl font-bold max-lg:text-3xl"}>Get to know us better!</h1>
        <p className={"mt-4 text-xl text-gray-500 max-lg:text-md"}>View our latest updates!</p>
        <p className={"mt-6 flex gap-4 justify-center"}>
          {socials.map((social) => (
            <Link key={social.name} className={"transition hover:scale-95"} href={social.url}>
              {social.icon}
            </Link>
          ))}
        </p>
      </div>
    </section>
  );
}