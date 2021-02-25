import React from 'react';
export default function Header() {
    return (
            <div className="navbar-inner">
                <p className="heading">Screenshot Any Page</p>
            <style jsx>{`
                .navbar-inner{
                    width: 100%;
                    position: fixed;
                    background: #333;
                    padding: 15px 0;
                    color: #fff;
                }
                p.heading{
                    padding: 5px 15px;
                    font-family: 'Segoe UI',Arial,sans-serif;
                    font-size: 22px;
                    margin: 5px;    
                }
                `}</style>
             </div>
    )
}