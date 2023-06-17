import Image from "next/image";
import { Card } from "./ui/card";
import { siteContent } from "@/config/site";

export default function ProfileCard() {
  return (
    <Card className="relative flex justify-center flex-col">
      <div className="overflow-hidden rounded-full flex self-center items-center justify-center w-[150px] h-[150px] pointer-events-none">
        <Image
          src="/profile.jpg"
          alt={siteContent?.profile}
          width={200}
          height={200}
          priority
        />
      </div>

      <h1 className="text-primary dark:text-secondary text-4xl font-semibold tracking-wide mt-8 text-center">
        Mike 👋🏻
      </h1>
    </Card>
  );
}
