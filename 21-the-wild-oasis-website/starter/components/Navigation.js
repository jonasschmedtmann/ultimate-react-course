export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <a href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-accent-400 transition-colors">
            About
          </a>
        </li>
        <li>
          <a
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </a>
        </li>
      </ul>
    </nav>
  );
}
