import styles from './styles.module.scss';
import { VscGithubInverted } from 'react-icons/vsc';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';

export function LoginBox() {

    const { signInUrl } = useContext(AuthContext);

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Ingrese y comparta sus mensajes</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size="24" /> 
                Ingresar con Github
            </a>
        </div>
    )
}