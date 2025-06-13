import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <div className="mt-48 text-center">
        <div className="flex justify-center mb-5">
          <Button variant="outline" className="rounded-full">Idea to website in minutes, not hours.</Button>
        </div>
        <h1 className="text-7xl font-bold text-center dark:text-slate-300 max-w-4xl mx-auto">
          Automate Your Work With Fuzzie.
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto py-5">
          Get the best beam tracking services in the world with our state of the
          art, cutting edge beam detection technology.
        </p>
        <div className="flex justify-center items-center gap-5">
          <Button size="lg">
            Get Started
            <ArrowRight />
          </Button>
          <Button size="lg" variant="outline">
            Explore Beams
          </Button>
        </div>
      </div>

      <div className="container px-4 mx-auto my-30 ">
        <div className="border-foreground/15 bg-foreground/5 rounded-2xl sm:rounded-3xl border p-2 sm:p-4 shadow-md">
          <div className="w-full overflow-hidden rounded-lg sm:rounded-xl border border-foreground/15">
            <img
              src="https://assets.aceternity.com/pro/aceternity-landing.webp"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </div>
      </div>

      {/* <div className="absolute h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div> */}
    </div>

  );
};

export default Hero;
