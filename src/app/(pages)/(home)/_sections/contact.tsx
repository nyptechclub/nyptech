import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const iconSize = 35;
const socials = [
  {
    name: "Discord",
    url: "https://nyptech-go.vercel.app/discord",
    icon: (
      <Image className={"invert"} src={"/assets/icons/discord.svg"} alt={"Icon"} width={iconSize} height={iconSize} />
    ),
  },
  {
    name: "WhatsApp",
    url: "https://nyptech-go.vercel.app/whatsapp",
    icon: (
      <Image className={"invert"} src={"/assets/icons/whatsapp.svg"} alt={"Icon"} width={iconSize} height={iconSize} />
    ),
  },
  {
    name: "Telegram",
    url: "https://nyptech-go.vercel.app/telegram",
    icon: (
      <Image className={"invert"} src={"/assets/icons/telegram.svg"} alt={"Icon"} width={iconSize} height={iconSize} />
    ),
  },
  {
    name: "Instagram",
    url: "https://nyptech-go.vercel.app/instagram",
    icon: (
      <Image className={"invert"} src={"/assets/icons/instagram.svg"} alt={"Icon"} width={iconSize} height={iconSize} />
    ),
  },
  {
    name: "LinkedIn",
    url: "https://nyptech-go.vercel.app/linkedin",
    icon: (
      <Image className={"invert"} src={"/assets/icons/linkedin.svg"} alt={"Icon"} width={iconSize} height={iconSize} />
    ),
  },
];

export default function ContactSection(props: { className?: string }) {
  return (
    <section className={clsx("hero", props.className)}>
      <div className={"hero-content"}>
        <div className={"text-center"}>
          <h1 className={"mb-4 text-4xl font-bold max-lg:text-3xl"}>Get to know us better!</h1>
          <p className={"text-gray-600 dark:text-gray-400"}>View our latest updates!</p>
          <p className={"mt-6 flex gap-4 justify-center"}>
            {socials.map((social) => (
              <Link key={social.name} className={"transition hover:scale-95"} href={social.url}>
                {social.icon}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}