"use client"

import React, { useState, useEffect } from 'react';

export default function Relogio() {
  const [dateTime, setDateTime] = useState<string>(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 id="titulo">Relógio 🕗</h1>
      <p id="relogio">{dateTime}</p>
    </div>
  );
}