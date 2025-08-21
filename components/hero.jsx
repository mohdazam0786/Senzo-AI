"use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// const HeroSection = () => {
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const imageElement = imageRef.current;

//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const scrollThreshold = 100;

//       if (scrollPosition > scrollThreshold) {
//         imageElement.classList.add("scrolled");
//       } else {
//         imageElement.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <section className="w-full pt-36 md:pt-48 pb-10">
//       <div className="space-y-6 text-center">
//         <div className="space-y-6 mx-auto">
//           <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
//             Your AI Career Coach for
//             <br />
//             Professional Success
//           </h1>
//           <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
//             Advance your career with personalized guidance, interview prep, and
//             AI-powered tools for job success.
//           </p>
//         </div>
//         <div className="flex justify-center space-x-4">
//           <Link href="/dashboard">
//             <Button size="lg" className="px-8">
//               Get Started
//             </Button>
//           </Link>
//           <Link href="https://www.youtube.com/roadsidecoder">
//             <Button size="lg" variant="outline" className="px-8">
//               Watch Demo
//             </Button>
//           </Link>
//         </div>
//         <div className="hero-image-wrapper mt-5 md:mt-0">
//           <div ref={imageRef} className="hero-image">
//             <Image
//               src="/banner.jpeg"
//               width={1280}
//               height={720}
//               alt="Dashboard Preview"
//               className="rounded-lg shadow-2xl border mx-auto"
//               priority
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, TrendingUp } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-primary rounded-full opacity-20 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-hero rounded-full opacity-15 blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-primary/30 text-sm font-medium text-primary glow-primary animate-pulse">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Career Guidance
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-bold leading-tight">
                Accelerate Your <span className="hero-text">Career Growth</span>{" "}
                with AI
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Transform your career journey with personalized AI coaching,
                industry insights, and expert guidance. Build winning resumes,
                ace interviews, and land your dream job.
              </p>
            </div>

            <div className="flex space-x-4">
              <Link href="/dashboard">
                <Button size="lg" className="px-8">
                  Get Started
                </Button>
              </Link>
              
            </div>
            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-8">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>10K+ Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-success" />
                  <span>95% Success Rate</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative rounded-2xl overflow-hidden glow-primary border-2 border-primary/20 hover-glow">
              <Image
                src="/bann.png"
                width={1280}
                height={720}
                alt="Dashboard Preview"
                className="rounded-lg shadow-2xl border mx-auto"
                priority
              />

              {/* Floating Cards */}
              <div className="absolute top-4 left-4 glass rounded-xl p-4 animate-fade-in-down border border-success/30 glow-secondary">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-foreground text-sm font-medium">
                    AI Analysis Complete
                  </span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 glass rounded-xl p-4 animate-fade-in-up border border-primary/30 glow-primary">
                <div className="text-foreground text-sm">
                  <div className="font-semibold">Career Match</div>
                  <div className="text-muted-foreground">98% Compatible</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-gradient-primary opacity-30 blur-2xl animate-pulse" />
            <div
              className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-gradient-hero opacity-25 blur-2xl animate-pulse"
              style={{ animationDelay: "2s" }}
            />
            <div className="absolute top-1/2 -right-4 w-4 h-4 rounded-full bg-primary animate-ping" />
            <div
              className="absolute bottom-1/3 -left-4 w-3 h-3 rounded-full bg-secondary animate-ping"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
