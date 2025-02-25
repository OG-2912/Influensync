import { SiInfluxdb } from "react-icons/si";

interface LogoProps {
  className?: string;
  showText?: boolean;
  showImage?: boolean;
  imageSize?: "sm" | "md" | "lg";
}

const IMAGE_SIZES = {
  sm: "h-8 w-8",
  md: "h-12 w-12",
  lg: "h-16 w-16"
};

export function Logo({ 
  className = "", 
  showText = true, 
  showImage = false,
  imageSize = "md" 
}: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showImage ? (
        <img 
          src="/assets/logo.jpeg" 
          alt="InfluenSync Logo" 
          className={`rounded-full object-cover ${IMAGE_SIZES[imageSize]}`}
        />
      ) : (
        <SiInfluxdb className="h-8 w-8 text-primary animate-pulse" />
      )}
      {showText && (
        <h1 className="text-2xl font-bold gradient-text">
          InfluenSync
        </h1>
      )}
    </div>
  );
}