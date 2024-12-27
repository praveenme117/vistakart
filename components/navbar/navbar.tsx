import { HomeIcon } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between gap-4 px-4 py-2 sm:px-6 sm:py-4">
        <div className="flex gap-2 items-center">
            <HomeIcon className="h-6 w-6" />Home
        </div>
        <div className="flex gap-2 items-center">
            About
        </div>
        <div className="flex gap-2 items-center">
            Contact
        </div>

    </div>
  )
}