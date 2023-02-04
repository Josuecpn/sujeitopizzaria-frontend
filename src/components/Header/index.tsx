import { useContext } from "react"; 
import Link from "next/link";
import styles from "./styles.module.scss";

import { FiLogOut } from "react-icons/fi"; 
import Image from "next/image";
import { AuthContext } from '../../contexts/AuthContext';

export function Header() {
  const { signOut } = useContext(AuthContext)

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/dashboard">
          <Image src="/logo.svg" width={190} height={60} alt="Painel"/>
        </Link>

        <nav className={styles.menuNav}>
          <Link href="/category" legacyBehavior>
            <a>Categoria</a>
          </Link>

          <Link href="/product" legacyBehavior>
            <a>Cardápio</a>
          </Link>

          <button onClick={signOut}>
            <FiLogOut color="#FFF" size={24} />
          </button>
        </nav>

      </div>
    </header>
  );
}
