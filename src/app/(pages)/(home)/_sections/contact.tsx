import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    name: "Discord",
    url: "https://go.nyptech.club/discord",
    icon: <Image className={"invert"} src={"/assets/icons/discord.svg"} alt={"Discord"} fill />,
  },
  {
    name: "WhatsApp",
    url: "https://go.nyptech.club/whatsapp",
    icon: <Image className={"invert"} src={"/assets/icons/whatsapp.svg"} alt={"WhatsApp"} fill />,
  },
  {
    name: "Telegram",
    url: "https://go.nyptech.club/telegram",
    icon: <Image className={"invert"} src={"/assets/icons/telegram.svg"} alt={"Telegram"} fill />,
  },
  {
    name: "Instagram",
    url: "https://go.nyptech.club/instagram",
    icon: <Image className={"invert"} src={"/assets/icons/instagram.svg"} alt={"Instagram"} fill />,
  },
  {
    name: "LinkedIn",
    url: "https://go.nyptech.club/linkedin",
    icon: <Image className={"invert"} src={"/assets/icons/linkedin.svg"} alt={"LinkedIn"} fill />,
  },
];

export default function ContactSection() {
  return (
    <section className={"hero min-h-full lg:min-h-[80%]"}>
      <div className={"hero-content"}>
        <div className={"text-center"}>
          <div className={"mb-4 text-6xl font-bold max-md:text-4xl"}>Get to know us better!</div>
          <div className={"max-md:text-md mb-8 text-lg"}>
            Join one of our social media channels to get latest updates and opportunities from us!
          </div>
          <div className={"flex justify-center gap-8 max-md:gap-6"}>
            {socials.map((social) => (
              <Link
                key={social.name}
                className={"relative aspect-square w-12 transition hover:scale-110 max-md:w-8"}
                href={social.url}
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}