
//! Esta clase tiene la seguridad de que el usuario esta identificado dado que se usa solo en 
//! componentes bajo la ruta /a/... las cuales son todas hijas del layaout de auth de la aplicacion que
//! verifica la autenticacion del usuario

import { UserData } from "../../types/User";
import Image from 'next/image';
import '../../ui/styles/profile.css';

/**
 * The function `Profile` is a React component that displays user profile information including name,
 * age, role, image, and description.
 * @param  - The `Profile` component takes a prop called `userData` which is an object of type
 * `UserData`. The `userData` object should have the following properties:
 * @returns The `Profile` component is being returned. It takes a `userData` object as a prop and
 * displays the user's name, age, role, image, description, and additional information in a structured
 * layout within a `div` element.
 */
export default function Profile({ userData }: { userData: UserData }) {
    return (
        <div className="profileDiv">
            <div className="profileIntroduction">
                <div className="profileIntro">
                    <h1>{userData.name}</h1>
                    <h2>{userData.age} años</h2>
                    <h2>{userData.role}</h2>
                </div>
                <div className="profileImage">
                    <Image src={userData.image} alt="profile" />
                </div>
            </div>
            <div className="profileDescription">
                <h2>About me</h2>
                <p>{userData.description}</p>
                <p>{userData.aboutme}</p>
            </div>
        </div>
    );
}