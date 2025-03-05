"use client";
import { NavIcon } from "@/styles/icons";
import * as T from "@/styles/typography";
import Link from "next/link";
import { NavbarData } from "@/config/NavBar";

const Navbar = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-4">
      <Link href={"/"}>
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-gray-600 rounded-4xl p-2 sm:p-8 sm:px-2 sm:gap-10">
          <T.H4>Nova.Alchemy</T.H4>

          <div className="flex sm:items-center justify-end ">
            <h6 className="pr-1">Design Agency</h6>
            <NavIcon />
          </div>
        </div>
      </Link>
      <div className="grid grid-cols-4 gap-2  p-8 text-center rounded-3xl self-start ">
        {NavbarData.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="hover:underline hover:text-gray-300" key={index}>
              {item.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
