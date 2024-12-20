import Image from "next/image";
import Link from "next/link";

const iconSize = 35;
const socials = [
  {
    name: "Discord",
    url: "https://go.nyptech.club/discord",
    icon: (
      <Image className={"invert"} src={"/assets/icons/discord.svg"} alt={"Icon"} width={iconSize} height={iconSize} />
    ),
  },
  {
    name: "WhatsApp",
    url: "https://go.nyptech.club/whatsapp",
    icon: (
      <Image className={"invert"} src={"/assets/icons/whatsapp.svg"} alt={"Icon"} width={iconSize} height={iconSize} />
    ),
  },
  {
    name: "Telegram",
    url: "https://go.nyptech.club/telegram",
    icon: (
      <Image className={"invert"} src={"/assets/icons/telegram.svg"} alt={"Icon"} width={iconSize} height={iconSize} />
    ),
  },
  {
    name: "Instagram",
    url: "https://go.nyptech.club/instagram",
    icon: (
      <Image className={"invert"} src={"/assets/icons/instagram.svg"} alt={"Icon"} width={iconSize} height={iconSize} />
    ),
  },
  {
    name: "LinkedIn",
    url: "https://go.nyptech.club/linkedin",
    icon: (
      <Image className={"invert"} src={"/assets/icons/linkedin.svg"} alt={"Icon"} width={iconSize} height={iconSize} />
    ),
  },
];

export default function ContactSection() {
  return (
    <section className={"hero min-h-full lg:min-h-[80%]"}>
      <div className={"hero-content"}>
        <div className={"text-center"}>
          <div className={"mb-4 text-4xl font-bold max-lg:text-3xl"}>Get to know us better!</div>
          <div>View our latest updates!</div>
          <div className={"mt-6 flex justify-center gap-4"}>
            {socials.map((social) => (
              <Link key={social.name} className={"transition hover:scale-95"} href={social.url}>
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}