import React from "react";

// import { Container } from './styles';

interface IApp {}

// eslint-disable-next-line no-empty-pattern
const App: React.FC<IApp> = ({}) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-white text-4xl font-bold bg-gray-900">Vite + React + TailwindCSS - Template</div>
  );
};

export default App;
