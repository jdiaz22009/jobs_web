import Image from "next/image";

export interface IimageProps {
  src: string;
  alt: string;
  className: string;
  width: number;
  height: number;
  priority?: boolean | undefined;
}

const ImageComponent = ({
  src,
  alt,
  priority,
  width,
  height,
  className,
}: IimageProps) => {
  return (
    <Image
      loading="lazy"
      className={className}
      src={src}
      alt={alt}
      priority={priority}
      width={width}
      height={height}
    />
  );
};

export default ImageComponent;
