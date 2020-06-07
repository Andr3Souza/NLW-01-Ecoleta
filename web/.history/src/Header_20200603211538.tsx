import React from "react";

interface HeaderProps {
  title: string;
}

//Todo componente usar letra maiúscula no Início
const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <h1>Ecoleta</h1>
    </header>
  );
};

export default Header;
