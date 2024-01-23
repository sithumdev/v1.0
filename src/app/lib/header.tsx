import { Button } from "../components";

export default function Header() {
  return (
    <nav>
      <ul>
        <li translate="no">Sithum Basnayaka</li>
        <li>Services</li>
        <li>About Me</li>
        <li>
          <Button>See My Work</Button>
        </li>
      </ul>
    </nav>
  );
}
