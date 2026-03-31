"use client"

import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";

export default function MainHeader() {
  const path = usePathname();

  return (
    <header className={classes.header}>
      <MainHeaderBackground />

      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="Logo" width={80} height={80} priority />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals" className={path.startsWith("/meals") ? classes.active : ""}>Meals</Link>
          </li>
          <li>
            <Link href="/community" className={path.startsWith("/community") ? classes.active : ""}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
