import Link from "next/link";
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { twJoin } from "tailwind-merge";

const iconSize = 35;

const socials = [
  {
    name: "Discord",
    url: "https://nyptech-go.vercel.app/discord",
    icon: <FaDiscord size={iconSize} />,
  },
  {
    name: "WhatsApp",
    url: "https://nyptech-go.vercel.app/whatsapp",
    icon: <FaWhatsapp size={iconSize} />,
  },
  {
    name: "Telegram",
    url: "https://nyptech-go.vercel.app/telegram",
    icon: <FaTelegram size={iconSize} />,
  },
  {
    name: "Instagram",
    url: "https://nyptech-go.vercel.app/instagram",
    icon: <FaInstagram size={iconSize} />,
  },
  {
    name: "LinkedIn",
    url: "https://nyptech-go.vercel.app/linkedin",
    icon: <FaLinkedin size={iconSize} />,
  },
];

export default function ContactSection(props: { className?: string }) {
  return (
    <section className={twJoin("hero", props.className)}>
      <div className={"hero-content"}>
        <div className={"text-center"}>
          <h1 className={"mb-4 text-4xl font-bold max-lg:text-3xl"}>
            Get to know us better!
          </h1>
          <p className={"text-gray-600 dark:text-gray-400"}>
            View our latest updates!
          </p>
          <p className={"mt-6 flex gap-4 justify-center"}>
            {socials.map((social) => (
              <Link
                key={social.name}
                className={"transition hover:scale-95"}
                href={social.url}
              >
                {social.icon}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}