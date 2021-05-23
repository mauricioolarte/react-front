import React from 'react';
import logoAvatar from '../Images/user-icon.webp';


const Header = () => {


	return (

		<>
			<header classNameName="header">
				{/* <img className="header__img" src={logoMarca} alt="logo" /> */}
				<div className="header__menu">
					<div className="header__menu--profile">
						<img src={logoAvatar} alt="" />
						<p>Perfil</p>
					</div>
					<ul>
						<li><a href="/">Cuenta</a></li>
						<li><a href="/">Cerrar Sesión</a></li>
					</ul>

				</div>
			</header>
		</>




	)

}


export { Header };