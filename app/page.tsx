import ProfileCard from "@/components/profile-card";
import WeatherCard from "@/components/weather-card";
import GoogleMapCard from "@/components/google-map-card";
import ContactCard from "@/components/contact-card";
import AboutCard from "@/components/about-card";

export default function Home() {
  return (
    <section className="flex justify-center">
      <div className="w-full flex justify-center items-center mx-auto my-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xs:gap-12 md:gap-14">
          <ProfileCard />

          <WeatherCard />

          <GoogleMapCard />

          <ContactCard />

          <AboutCard />
        </div>
      </div>
    </section>
  );
}
