"use client";

import React from "react";

interface CircleProgressProps {
  creditsUtilises: number;
  creditsTotaux: number;
}

// Fonction pour calculer le d du path SVG pour le cercle de progression
const calculateSvgPath = (percentage: number): string => {
  const radius = 100; // Rayon du cercle
  const radians = (percentage / 100) * 2 * Math.PI; // Convertir pourcentage en radians
  const endX = Math.cos(radians) * radius; // Calculer x du point de fin
  const endY = Math.sin(radians) * radius; // Calculer y du point de fin
  const largeArcFlag = percentage > 50 ? 1 : 0; // Déterminer si l'arc doit être grand ou non

  // M = point de départ, A = arc, Z = fermer le chemin
  return `M0,0 L${radius},0 A${radius},${radius} 0 ${largeArcFlag},1 ${endX},${endY} Z`;
};

const CircleProgress: React.FC<CircleProgressProps> = ({
  creditsUtilises,
  creditsTotaux,
}) => {
  const pourcentageUtilise = React.useMemo(() => {
    if (!creditsTotaux || creditsTotaux === 0) return 0;
    return (creditsUtilises / creditsTotaux) * 100;
  }, [creditsUtilises, creditsTotaux]);

  const pathD = React.useMemo(
    () => calculateSvgPath(pourcentageUtilise),
    [pourcentageUtilise]
  );

  return (
    <svg width="125" height="125" viewBox="-100 -100 200 200">
      <circle cx="0" cy="0" r="100" fill="#496297" />
      <path fill="#1D3E80" d={pathD} />
    </svg>
  );
};

export default CircleProgress;
