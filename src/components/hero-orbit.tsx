import { ReactNode } from "react";

interface HeroOrbitProps {
  children: ReactNode;
  size: number;
  rotation?: number;
  orbitSpinDuration?: number;
  objectSpinDuration?: number;
}

export default function HeroOrbit({
  size,
  rotation,
  children,
  orbitSpinDuration,
  objectSpinDuration,
}: HeroOrbitProps) {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="animate-spin"
        style={{
          animationDuration: `${orbitSpinDuration || 0}s`,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation || 0}deg)`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <div
            className="animate-spin"
            style={{
              animationDuration: `${objectSpinDuration || 0}s`,
            }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${(rotation || 0) * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
