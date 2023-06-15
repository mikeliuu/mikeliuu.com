import ThemeToggle from "@/components/theme-toggle";
import ProfileCard from "@/components/profile-card";
import WeatherCard from "@/components/weather-card";
import GoogleMapCard from "@/components/google-map-card";
import ContactCard from "@/components/contact-card";

export default function Home() {
  return (
    <main className="relative min-h-screen py-14 px-8 md:py-20">
      <header className="absolute top-0 right-0 w-full py-6 px-8">
        <ThemeToggle className="justify-end" />
      </header>

      <section className="flex justify-center">
        <div className="w-full flex justify-center items-center mx-auto my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xs:gap-12 md:gap-14">
            <ProfileCard />

            <WeatherCard />

            <GoogleMapCard />

            <ContactCard />
          </div>
        </div>
      </section>
    </main>
  );
}
