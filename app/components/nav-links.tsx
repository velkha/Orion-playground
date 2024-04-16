import '../ui/styles/nav-links.css';
import NavLink from './nav-link';
import Clock from './clock';
export default function NavLinks() {
  

  return (
    <nav>
      <div>
        <ul>
          <li>
            <NavLink href="/apps/calculadora" src="/python.svg" alt="calculadora" id="calculadora" />
          </li>
          <li>
            <NavLink href="/apps/spline" src="/python.svg" alt="spline" id="spline" />
          </li>
          <li>
            <NavLink href="/apps/3dworld" src="/python.svg" alt="3dworld" id="3dworld" />
          </li>
        </ul>
      </div>
    </nav>
  );
}