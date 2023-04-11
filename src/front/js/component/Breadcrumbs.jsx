import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathname = location.pathname.split('/').filter((x) => x);

    return (
        <section id="breadcrumbs" className="breadcrumbs">
            <ul>
                {pathname.length > 0 ? (
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                ) : null} 

                {/* Reemplazar guiones por espacios en blanco antes de renderizar */}
                {pathname.map((name, index) => {
                    const routeTo = `/${pathname.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathname.length - 1;
                    
                    // Reemplazar guiones con espacios en blanco
                    const displayName = name.replace(/-/g, ' ');

                    return isLast ? (
                        <li key={routeTo}><strong>{displayName[0].toUpperCase() + displayName.slice(1, displayName.length)}</strong></li>
                    ) : (
                        <li key={routeTo}>
                            <Link to={routeTo}>{displayName}</Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
