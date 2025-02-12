import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <Card className="relative flex flex-col text-primary dark:text-secondary w-full xs:w-9/12 h-full p-6 xs:p-12">
      <h1 className="text-primary dark:text-secondary text-4xl font-semibold tracking-wide mb-6">
        About Me
      </h1>

      <p className="leading-loose">
        Hi, I&apos;m Mike, an experienced web developer specializing in frontend
        technologies such as ReactJS, JavaScript, and TypeScript. I&apos;m
        passionate about crafting user-friendly interfaces and have a proven
        track record of delivering high-quality solutions that enhance the user
        experience. In my free time, I enjoy playing football, exploring new
        destinations, and recently discovered a passion for snowboarding. Feel
        free to reach out if you share any of these interests!
      </p>
    </Card>
  );
}
