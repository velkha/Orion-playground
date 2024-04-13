import '../ui/styles/nav-links.css';
import NavLink from './nav-link';
import Clock from './clock';
export default function NavLinks() {
  

  return (
    <nav>
      <Clock/>
      <div>
        <ul>
          <li>
            <NavLink href="/calculadora" src="/python.svg" alt="calculadora" id="calculadora" />
          </li>
          
          <li>
            <NavLink href="/calculadora" src="/python.svg" alt="calculadora" id="calculadora" />
          </li>

          <li>
            <NavLink href="/3dworld" src="/python.svg" alt="3dworld" id="3dworld" />
          </li>

          <li>
            <NavLink href="/spline" src="/python.svg" alt="spline" id="spline" />
          </li>
        </ul>
      </div>
    </nav>
  );
}