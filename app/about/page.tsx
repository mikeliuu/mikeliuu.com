import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <Card className="relative flex flex-col text-primary dark:text-secondary w-full xs:w-9/12 h-full p-6 xs:p-12">
      <h1 className="text-primary dark:text-secondary text-4xl font-semibold tracking-wide mb-6">
        About Me
      </h1>

      <p className="leading-loose">
        Hi there, I am Mike Liu! An experienced digital marketer and web
        developer with a strong focus on SEO optimization. Throughout my career,
        I have successfully driven user engagement and improved search
        visibility for various industries. Proficient in developing SEO-friendly
        websites and executing effective campaign strategies, I bring a
        combination of technical expertise and digital marketing insights to
        achieve exceptional results. With a track record of delivering
        impressive conversion rates and implementing performance optimization
        strategies.
      </p>
    </Card>
  );
}
