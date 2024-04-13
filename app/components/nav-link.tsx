'use client'
import '../ui/styles/nav-links.css';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
export default function NavLink({ href, src, alt, id }: { href: string, src: string, alt: string, id: string }) {
    const pathname = usePathname();

    const isSelected = pathname === href;

    return (
        <Link href={href} >
            <Image src={src} alt={alt} width={100} height={100} id={id} className={isSelected ? "selected" : ""}/>
            <span className={isSelected ? "selected" : ""}>{alt}</span>
        </Link>
    )

}