'use client'
import { useState, useRef, useEffect } from 'react'
import '../ui/styles/window.css'
import { usePathname } from 'next/navigation';
import { useOpenApps } from './contexts/OpenAppsContext'; // Update the import path as necessary

export default function Window({ children }: { children: React.ReactNode}) {
    //console.log('Rendering Window component');
    const [isActive, setIsActive] = useState(true)
    const [isDragging, setIsDragging] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const windowRef = useRef(null);
    const { openApps, setOpenApps } = useOpenApps();  // Use the context
    const pathname = usePathname(); // Assume this gives a unique identifier for each window

    /*
    TODO: esto tiene mala pinta, no se si es correct, me esta dando una neurisma, lo dejamos por ahora,
    !pero hay que revisarlo buena suerte yo del futuro, la vas a necesitar
    Contexto: es un hook que se ejecuta cuando se monta el componente, y se ejecuta cuando se desmonta para guardar el estado de 
    este al montarlo de nuevo, si se hace click en el valor que aparecera en el footer (como de un menu de windows se tratase)
    */
    useEffect(() => {
        const windowState = { isActive, position }; // Capture all relevant state
        const windowComponent = { name: pathname, component: Window, state: windowState };
        setOpenApps(prevApps => [...prevApps.filter(app => app.name !== pathname), windowComponent]);
    
        return () => {
            setOpenApps(prevApps => prevApps.filter(app => app.name !== pathname));
        };
    }, [pathname, isActive, position, setOpenApps]);

    const handleClose = () => {
        setIsActive(false)
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        const rect = (windowRef.current as HTMLElement | null)?.getBoundingClientRect() // Add type assertion and handle null
        setPosition({ x: e.clientX - (rect?.left ?? 0), y: e.clientY - (rect?.top ?? 0) }) // Add null check
        document.addEventListener('mouseup', handleMouseUp)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return
        const dx = e.clientX - position.x
        const dy = e.clientY - position.y
        if (windowRef.current) {
            (windowRef.current as HTMLElement).style.transform = `translate(${dx}px, ${dy}px)`
        }
    }

    const handleMouseUp = () => {
        setIsDragging(false)
        document.removeEventListener('mouseup', handleMouseUp)
    }
    useEffect(() => {
        if (windowRef.current) {
            (windowRef.current as HTMLElement).style.transform = `translate(200px, 200px)`
        }
    }, [])
    return (
        isActive && (
        <div className="window" ref={windowRef} style={{ zIndex: isActive ? 1 : -1 }}>
            <div className="top-bar" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <div className="window-controls">
                <button onClick={handleClose}>x</button>
            </div>
            </div>
            <main>
                {children}
            </main>
        </div>
        )
    )
}