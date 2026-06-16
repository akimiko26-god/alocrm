import React from 'react';

export function Card({ children, title, ...props }) {
  return (
    <div className="card" {...props}>
      {title && <h3 className="card-title">{title}</h3>}
      {children}
    </div>
  );
}
