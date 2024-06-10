import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className='z-10 text-xl'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/cabins'
            className='hover:text-accent-400 transition-colors'
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='hover:text-accent-400 transition-colors'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='/contact'
            className='hover:text-accent-400 transition-colors'
          >
            Contact us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
