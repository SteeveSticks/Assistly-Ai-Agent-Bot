import Link from "next/link";
import Avatar from "./Avatar";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="bg-white shadow-sm flex justify-between p-2">
      <Link href="/" className="flex items-center text-2xl font-light">
        {/* Aavatar */}
        <Avatar seed="PAPAFAM Support Agent" />
        <div className="space-y-1">
          <h1>Assistly</h1>
          <h2 className="text-sm">Your customisable AI Chat Agent</h2>
        </div>
      </Link>

      <div className="flex items-center">
        <SignedIn>
          <UserButton showName />
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <div className="cursor-pointer transition">Sign In</div>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
