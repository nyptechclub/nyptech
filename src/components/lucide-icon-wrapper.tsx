import { icons } from "lucide-react";

export default function LucideIconWrapper(props: {
  className?: string;
  icon: string;
  size?: number;
}) {
  const defaultSize = 24;
  const Icon = icons[props.icon as keyof typeof icons];
  return <Icon className={props.className} size={props.size || defaultSize} />;
}