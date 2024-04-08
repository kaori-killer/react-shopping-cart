import classnames from "classnames";
import { Image } from "../types";

const IMAGE_SIZES = {
  default: "",
  small: "w-144 h-144",
  big: "w-480 h-480",
};

interface ImgProps {
  variant: "default" | "small" | "big";
  className?: string;
  image: Image;
}

export default function ProductImages({ variant, className, image }: ImgProps) {
  if (!image) {
    return null;
  }

  return (
    <img
      className={classnames(IMAGE_SIZES[variant], { className })}
      src={image.url}
      alt="Product Image"
    />
  );
}
