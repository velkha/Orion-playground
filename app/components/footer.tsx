import Link from 'next/link';
import Image from 'next/image';
import '../ui/styles/footer.css';

export default function Footer() {
  return (
    <footer>
      <Link href="/">
            <Image src="/windows-144.png" alt="Logo" width={100} height={100} />
        </Link>
    </footer>
  );
}