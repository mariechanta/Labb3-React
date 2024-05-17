
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link href="/teachers">Lärare</Link></li>
        <li><Link href="/students">Elever</Link></li>
        <li><Link href="/classrooms">Klassrum</Link></li>
        <li><Link href="/assignments">Uppgifter</Link></li>
        <li><Link href="/calendar">Kalender</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
