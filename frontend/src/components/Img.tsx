const size = {
  default: "",
  small: "w-144 h-144",
  big: "w-480 h-480",
};

interface ImgProps {
  variant: "default" | "small" | "big";
  src: string;
  alt: string;
}

export default function Img({ variant, src, alt }: ImgProps) {
  return <img className={size[variant]} src={src} alt={alt} />;
}
