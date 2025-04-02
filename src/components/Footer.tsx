import Link from "next/link";
import { base } from "@/config/base";
import pkg from "../../package.json";
import { FaFacebook, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-8 md:flex-row md:justify-center md:px-12">
        <div className="text-center md:text-left">
          <span className="text-lg font-semibold">{base.title}</span>
          <p className="mt-1">All rights reserved 2025</p>
          <p className="">{`Web version: ${pkg.version}`}</p>
        </div>

        <div className="flex space-x-6">
          
        </div>
      </div>
    </footer>
  );
}
