'use client'
import { useState, useRef, useEffect } from 'react'
import '../../ui/styles/folders.css'
import { ComponentType } from 'react';
export default function Folder({ folder }: { folder: String }) {
    const [isActive, setIsActive] = useState(true)
    const [isDragging, setIsDragging] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const folderRef = useRef(null)
    const [Component, setComponent] = useState<ComponentType | null>(null);

    useEffect(() => {
        import(`./folders_types/${folder}`).then((module) => {
            setComponent(() => module.default);
        });
    }, [folder]);

    const handleClose = () => {
        setIsActive(false)
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        const rect = (folderRef.current as HTMLElement | null)?.getBoundingClientRect() // Add type assertion and handle null
        setPosition({ x: e.clientX - (rect?.left ?? 0), y: e.clientY - (rect?.top ?? 0) }) // Add null check
        document.addEventListener('mouseup', handleMouseUp)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return
        const dx = e.clientX - position.x
        const dy = e.clientY - position.y
        if (folderRef.current) {
        (folderRef.current as HTMLElement).style.transform = `translate(${dx}px, ${dy}px)`
        }
    }

    const handleMouseUp = () => {
        setIsDragging(false)
        document.removeEventListener('mouseup', handleMouseUp)
    }
    useEffect(() => {
        if (folderRef.current) {
            (folderRef.current as HTMLElement).style.transform = `translate(200px, 200px)`
        }
    }, [])
    return (
        isActive && (
        <div className="folder" ref={folderRef} style={{ zIndex: isActive ? 1 : -1 }}>
            <div className="top-bar" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
            <div className="folder-controls">
                <button onClick={handleClose}>x</button>
            </div>
            </div>
            <div className='folderMain'>
                {Component && <Component /> as JSX.Element}
            </div>
        </div>
        )
    )
}