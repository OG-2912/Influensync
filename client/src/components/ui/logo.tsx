import { SiInfluxdb } from "react-icons/si";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className = "", showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <SiInfluxdb className="h-8 w-8 text-primary animate-pulse" />
      {showText && (
        <h1 className="text-2xl font-bold gradient-text">
          InfluenSync
        </h1>
      )}
    </div>
  );
}
