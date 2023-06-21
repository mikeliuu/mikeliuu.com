"use client";

import { useToggle } from "@/lib/hooks/useToggle";
import { ChangeEventHandler, useEffect, useState } from "react";
import CountUp from "react-countup";
import { Card } from "./ui/card";
import { Toggle } from "./ui/toggle";
import { siteContent } from "@/config/site";

export type Temperature = {
  temp_c: number | null;
  temp_f: number | null;
};

export default function WeatherCard() {
  const [temp, setTemp] = useState<Temperature>();
  const [tempType, setTempType] = useState<"c" | "f">("c");

  const [isChecked, toggleChecked] = useToggle();

  const fetchWeather = async (query: string) => {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_WHEATHER_API_KEY!,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);

      const result = JSON.parse(await response.text());

      setTemp({
        temp_c: result?.current?.temp_c,
        temp_f: result?.current?.temp_f,
      });
    } catch (error) {
      console.error({ error });
    }
  };

  const handleToggle: ChangeEventHandler<HTMLInputElement> = (event) => {
    toggleChecked();

    setTempType(event.target.checked ? "f" : "c");
  };

  useEffect(() => {
    fetchWeather("london");
  }, []);

  return (
    <Card
      id="weather-card"
      className="flex items-center justify-center flex-col"
    >
      <div className="relative flex flex-row mb-8">
        <p className="text-primary dark:text-secondary text-8xl font-semibold tracking-wide my-6">
          <CountUp
            duration={1}
            start={0}
            end={(isChecked ? temp?.temp_f : temp?.temp_c) ?? 0}
          />
        </p>

        <p className="absolute -top-1.5 -right-3 text-primary opacity-30 dark:opacity-100 dark:text-info text-3xl font-medium">
          {tempType === "c" ? "°C" : "°F"}
        </p>
      </div>

      <div className="flex flex-row items-center">
        <p className="text-primary opacity-30 dark:opacity-100 dark:text-info text-md font-medium">
          °C
        </p>

        <Toggle
          inputClass="weather-toggle"
          className="mx-2"
          checked={isChecked}
          onChange={handleToggle}
        />

        <p className="text-primary opacity-30 dark:opacity-100 dark:text-info text-md font-medium">
          °F
        </p>
      </div>
    </Card>
  );
}
