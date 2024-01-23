import { Button } from "../components";

export default function Header() {
  return (
    <nav className="items-center justify-between hidden lg:flex">
      <ul className="flex items-center justify-between gap-5">
        <li translate="no">Sithum Basnayaka</li>
        <li>Services</li>
        <li>About Me</li>
      </ul>
      <Button>See My Work</Button>
    </nav>
  );
}
