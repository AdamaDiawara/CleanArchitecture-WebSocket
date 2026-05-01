"use client";

import React, { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./styles.css";

type MapProps = {
  styleUrl?: string;
  center?: [number, number]; // [lng, lat]
  zoom?: number;
  height?: string | number;
  onLoad?: (map: maplibregl.Map) => void;
};

export default function Map({
  styleUrl = "https://demotiles.maplibre.org/style.json",
  center = [2.3522, 48.8566],
  zoom = 12,
  height = "400px",
  onLoad,
}: MapProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (mapRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: styleUrl,
      center: [center[0], center[1]],
      zoom,
    });

    mapRef.current = map;

    map.on("load", () => {
      // ensure map is correctly sized inside responsive layouts
      map.resize();
      onLoad?.(map);
    });

    return () => {
      try {
        map.remove();
      } catch {
        /* ignore */
      }
      mapRef.current = null;
    };
  }, [styleUrl, center, zoom, onLoad]);

  return <div className="map-wrapper" ref={containerRef} style={{ height }} />;
}
