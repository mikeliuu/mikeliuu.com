"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Card } from "./ui/card";
import { classMerge } from "@/lib/utils";
import { ProgressBar } from "./ui/progress-bar";
import { siteContent } from "@/config/site";

export default function GoogleMapCard() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [percentage, setPercentage] = useState(5);

  useEffect(() => {
    if (percentage >= 99) return;

    const interval = setInterval(() => {
      setPercentage((prev) => prev + Math.floor(Math.random() * 10) + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [percentage]);

  const mapOtpions = {
    q: "london,united%20kingdom",
    center: "51.549713,-0.103281",
    zoom: 8,
  };

  const googleMapUrl = useMemo(
    () =>
      `https://www.google.com/maps/embed/v1/search?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&q=${mapOtpions?.q}&center=${mapOtpions?.center}&zoom=${mapOtpions?.zoom}`,
    [],
  );

  const onIframeLoad: React.ReactEventHandler<HTMLIFrameElement> = (event) => {
    setIsLoaded(!!event?.target);
  };

  return (
    <Card className="overflow-hidden relative flex justify-center flex-col p-0">
      <div className="ssr-only">{siteContent.map}</div>

      {!isLoaded && (
        <div className="text-primary dark:text-secondary flex justify-center items-center p-8">
          <ProgressBar progress={percentage} />
        </div>
      )}

      <iframe
        className={classMerge("google-map border-none hidden", {
          block: isLoaded,
        })}
        title="Google Map for my location"
        width="100%"
        height="100%"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        src={googleMapUrl}
        onLoad={onIframeLoad}
      />
    </Card>
  );
}
