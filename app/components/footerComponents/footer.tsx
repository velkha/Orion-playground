'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../../ui/styles/footer.css'
import Clock from './clock'
import { useOpenApps } from '../contexts/OpenAppsContext';
import { ComponentType } from 'react';
export default function Footer() {

  const { openApps } = useOpenApps();

  const handleClick = (app: any) => {
    //TODO: gestionar la apertura del componente con todos sus estados para replicar que no se hubiese cerrado, ni idea
    //de como hacerlo por ahora ni siquiera se si es posible
    /* 
      IDEAS:
      - Generar una interfaz para todos los componentes que se puedan abrir y que tengan un estado de este estilo
      y que todos tengan un metodo (tipo override de java) para recrearlo con las propiedades importantes 
      (Ej en el de spline se guarde el punto de la camara en el que se encontraba el usuario antes de cerrar la ventana)
      (En las ventanas de carpetas simplemente la carpeta correspondiente y se reabra en la misma ruta, como extra se podria
        mantener la seleccionada)...
      
      - Crear un hook que se encargue de guardar el estado de los componentes abiertos en el localStorage y que se encargue de
      reabrirlos al cargar la pagina, pero esto no se si es posible, ya que no se si se puede guardar un componente en el localStorage

      


    */
    alert(`Reopen ${app.name} with state: ${JSON.stringify(app.state)}`);
  };

  return (
    <footer className="footer">
      <div className="footer-section">
        <Link href="/">
          <button>
            <Image src="/windows-144.png" alt="Logo" width={100} height={100} />
          </button>
        </Link>
      </div>
      <div className="footer-section">
          <div>|| -</div>
          {openApps.map((app, index) => (
            <div key={index} className="app" onClick={() => handleClick(app)}>
              {app.name}
            </div>
          ))}
          <div>- ||</div>
      </div>
      <div className="footer-section">
        <Clock />
      </div>
    </footer>
  )
}