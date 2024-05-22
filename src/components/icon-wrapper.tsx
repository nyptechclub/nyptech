import Image from "next/image";

export default function IconWrapper(props: {
  className?: string;
  icon: string;
  size?: number;
}) {
  const defaultSize = 24;
  return (
    <Image
      className={props.className}
      src={`/assets/icons/${props.icon}.svg`}
      alt={"Icon"}
      width={props.size || defaultSize}
      height={props.size || defaultSize}
    />
  );
}