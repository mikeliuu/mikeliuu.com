import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <Card className="relative flex flex-col text-primary dark:text-secondary w-full xs:w-9/12 h-full p-6 xs:p-12">
      <h1 className="text-primary dark:text-secondary text-4xl font-semibold tracking-wide mb-6">
        About Me
      </h1>

      <p className="leading-loose">
        Hello! I&apos;m Mike, a skilled web developer with over 2 years of
        experience, primarily focusing on frontend technologies like ReactJS,
        JavaScript, and TypeScript. I&apos;m passionate about creating
        user-friendly interfaces and have a strong track record of delivering
        high-quality solutions that enhance the user experience. In addition to
        my frontend expertise, I&apos;m also excited to embark on my journey as
        a backend developer, learning and growing in Java and Spring Boot to
        craft comprehensive web solutions that drive business success.
      </p>
    </Card>
  );
}
