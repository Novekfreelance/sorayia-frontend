"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
    creditsUtilises: number;
    creditsTotaux: number;
  }
>(({ className, creditsUtilises, creditsTotaux, ...props }, ref) => {
  // Calcul du pourcentage de crédits utilisés
  const pourcentageUtilise = React.useMemo(() => {
    if (!creditsTotaux || creditsTotaux === 0) return 0;
    const result = (creditsUtilises / creditsTotaux) * 100;
    return Number(result.toFixed(2));
  }, [creditsUtilises, creditsTotaux]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 bg-primary transition-all rounded-r-full"
        style={{ transform: `translateX(-${100 - pourcentageUtilise}%)` }} // Utiliser pourcentageUtilise pour le calcul dynamique
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = "Progress";

export { Progress };
