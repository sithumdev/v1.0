import Link from "next/link";
import { Button } from "../components";
import { PERSONAL_DETAILS } from "../data/data";

export default function Header() {
  return (
    <nav className="items-center justify-between hidden lg:flex">
      <ul className="flex items-center justify-between gap-5">
        <li translate="no">
          <Link href="/">{PERSONAL_DETAILS.name}</Link>
        </li>
        <li>
          <Link href="#services" scroll>
            Services
          </Link>
        </li>
        <li>
          <Link href="#aboutme" scroll>
            About Me
          </Link>
        </li>
      </ul>
      <Button>
        <Link href="#projects" scroll>
          See My Work
        </Link>
      </Button>
    </nav>
  );
}
