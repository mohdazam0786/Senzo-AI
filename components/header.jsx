// import React from "react";
// import { Button } from "./ui/button";
// import {
//   PenBox,
//   LayoutDashboard,
//   FileText,
//   GraduationCap,
//   ChevronDown,
//   StarsIcon,
// } from "lucide-react";
// import Link from "next/link";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import Image from "next/image";
// import { checkUser } from "@/lib/checkUser";

// export default async function Header() {
//   await checkUser();

//   return (
//     <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
//       <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <Link href="/">
//           <Image
//             src={"/senzo-logo.png"}
//             alt="Sensai Logo"
//             width={240}
//             height={240}
//             className="h-16 py-1 w-auto object-contain"
//           />
//         </Link>

//         {/* Action Buttons */}
//         <div className="flex items-center space-x-2 md:space-x-4">
//           <SignedIn>
//             <Link href="/dashboard">
//               <Button
//                 variant="outline"
//                 className="hidden md:inline-flex items-center gap-2"
//               >
//                 <LayoutDashboard className="h-4 w-4" />
//                 Industry Insights
//               </Button>
//               <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
//                 <LayoutDashboard className="h-4 w-4" />
//               </Button>
//             </Link>

//             {/* Growth Tools Dropdown */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button className="flex items-center gap-2">
//                   <StarsIcon className="h-4 w-4" />
//                   <span className="hidden md:block">Growth Tools</span>
//                   <ChevronDown className="h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 <DropdownMenuItem asChild>
//                   <Link href="/resume" className="flex items-center gap-2">
//                     <FileText className="h-4 w-4" />
//                     Build Resume
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link
//                     href="/ai-cover-letter"
//                     className="flex items-center gap-2"
//                   >
//                     <PenBox className="h-4 w-4" />
//                     Cover Letter
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link href="/interview" className="flex items-center gap-2">
//                     <GraduationCap className="h-4 w-4" />
//                     Interview Prep
//                   </Link>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </SignedIn>

//           <SignedOut>
//             <SignInButton>
//               <Button variant="outline">Sign In</Button>
//             </SignInButton>
//           </SignedOut>

//           <SignedIn>
//             <UserButton
//               appearance={{
//                 elements: {
//                   avatarBox: "w-10 h-10",
//                   userButtonPopoverCard: "shadow-xl",
//                   userPreviewMainIdentifier: "font-semibold",
//                 },
//               }}
//               afterSignOutUrl="/"
//             />
//           </SignedIn>
//         </div>
//       </nav>
//     </header>
//   );
// }


"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
  Brain,
  Menu,
  X,
} from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/90 backdrop-blur-md glow-border">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
  href="/"
  className="flex items-center space-x-2 font-manrope font-bold text-4xl transition-all duration-300"
>
  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-transparent hover:bg-transparent">
    <Brain className="w-10 h-10 text-blue-600" />
  </div>
  <span className="hero-text">Senzo</span>
</Link>

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="nav-link"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="nav-link"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="nav-link"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="nav-link"
            >
              Pricing
            </Link>
          </div> */}

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="outline" className="items-center gap-2">
                  <LayoutDashboard className="h-4 w-4" />
                  Industry Insights
                </Button>
              </Link>

              {/* Growth Tools Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <StarsIcon className="h-4 w-4" />
                    Growth Tools
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/resume" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Build Resume
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      href="/ai-cover-letter"
                      className="flex items-center gap-2"
                    >
                      <PenBox className="h-4 w-4" />
                      Cover Letter
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/interview" className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Interview Prep
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                    userButtonPopoverCard: "shadow-xl",
                    userPreviewMainIdentifier: "font-semibold",
                  },
                }}
                afterSignOutUrl="/"
              />
            </SignedIn>

            <SignedOut>
              <SignInButton>
                <Button variant="outline">Sign In</Button>
              </SignInButton>
            </SignedOut>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300 border border-primary/20 hover:border-primary/40"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20 animate-fade-in-down bg-background/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              <SignedIn>
                <div className="pt-4 border-t border-primary/20 space-y-2">
                  <Link href="/dashboard">
                    <Button variant="outline" className="w-full">
                      Industry Insights
                    </Button>
                  </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="w-full flex items-center justify-center gap-2">
                        <StarsIcon className="h-4 w-4" /> Growth Tools
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem asChild>
                        <Link
                          href="/resume"
                          className="flex items-center gap-2"
                        >
                          <FileText className="h-4 w-4" />
                          Build Resume
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/ai-cover-letter"
                          className="flex items-center gap-2"
                        >
                          <PenBox className="h-4 w-4" />
                          Cover Letter
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link
                          href="/interview"
                          className="flex items-center gap-2"
                        >
                          <GraduationCap className="h-4 w-4" />
                          Interview Prep
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <UserButton afterSignOutUrl="/" />
                </div>
              </SignedIn>
              <SignedOut>
                <div className="pt-4 border-t border-primary/20 space-y-2">
                  <SignInButton>
                    <Button variant="ghost" className="w-full">
                      Sign In
                    </Button>
                  </SignInButton>
                </div>
              </SignedOut>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
