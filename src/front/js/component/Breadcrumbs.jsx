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

            {pathname.map((name, index) => {
                const routeTo = `/${pathname.slice(0, index + 1).join('/')}`;
                const isLast = index === pathname.length - 1;
            
                return isLast ? (
                <li key={routeTo}><strong>{name[0].toUpperCase() + name.slice(1,name.length)}</strong></li>
            ) : (
                <li key={routeTo}>
                    <Link to={routeTo}>{name}</Link>
                </li>
            );
            })}
        </ul>
        </section>
    );
};