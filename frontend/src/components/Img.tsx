import classnames from "classnames";

const size = {
  default: "",
  small: "w-144 h-144",
  big: "w-480 h-480",
};

interface ImgProps {
  variant: "default" | "small" | "big";
  className?: string;
  src: string;
  alt: string;
}

export default function Img({ variant, src, alt, className }: ImgProps) {
  return (
    <img
      className={classnames(size[variant], { className })}
      src={src}
      alt={alt}
    />
  );
}
