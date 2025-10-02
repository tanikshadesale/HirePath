'Use client';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { FileText, GraduationCap, LayoutDashboard, PenBox, StarIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

const Header = () => {
    return (
        <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
            <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
               <Link href="/">
                  <Image
                   src="/logo.png" 
                   alt="Hirepath Logo" 
                   width={200} 
                   height={60} 
                   className="h-12 py-1 w-auto object-contain"
                   />
               </Link>

               <div className="flex items-center space-x-2 md:space-x-4">
                  <SignedIn>
                    <Link href="/dashboard">
                       <Button variant="outline">
                          <LayoutDashboard  className="h-4 w-4" />
                        <span className="hidden-md:block">Industry Insights</span>
                       </Button>
                    </Link>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                          <Button>
                          <StarIcon  className="h-4 w-4" />
                          <span className="hidden-md:block">Growth Tools</span>
                          </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link href={"/resume"} className="flex items-center gap-2">
                           <FileText  className="h-4 w-4" />
                           <span>Build resume</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/ai-cover-letter"} className="flex items-center gap-2">
                           <PenBox  className="h-4 w-4" />
                           Cover Letter
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"/interview"} className="flex items-center gap-2">
                           <GraduationCap  className="h-4 w-4" />
                           Interview Prep
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href={"ai-mock-interview"} className="flex items-center gap-2">
                           <FileText  className="h-4 w-4" />
                            Mock Interview
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                 </SignedIn>
                  <SignedOut>
                    <SignInButton>
                        <Button variant="outline">Sign In</Button>
                    </SignInButton>
                  </SignedOut>
                  <SignedIn>
                    <UserButton 
                    appearance={{
                        elements: {
                            avatarBox:"w-10 h-10",
                            userButtonPopoverCard: "shadow-xl",
                            userPreviewMainIdentifier: "font-semibold",
                    }
                    }}
                    afterSignOutUrl="/"
                    />
                  </SignedIn>
               </div> 
            </nav>
        </header>
    );
}
export default Header;