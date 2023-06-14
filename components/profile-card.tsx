import Image from "next/image";
import { Card } from "./ui/card";

export default function ProfileCard() {
  return (
    <Card className="relative flex justify-center flex-col">
      <div className="overflow-hidden rounded-full flex self-center items-center justify-center w-[150px] h-[150px]">
        <Image
          src="/profile.jpg"
          alt="Profile Image"
          width={200}
          height={200}
          priority
        />
      </div>

      <p className="text-primary dark:text-secondary text-4xl font-semibold tracking-wide mt-8 text-center">
        Mike 👋
      </p>
    </Card>
  );
}
