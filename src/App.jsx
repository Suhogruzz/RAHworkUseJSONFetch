import './App.css';
import Component from './components/Component';
const URL = import.meta.env.VITE_LOCALHOST;
const PORT = 7070;

const dataUrl = `${URL}${PORT}/data`;
const errorUrl = `${URL}${PORT}/error`;
const loadingUrl = `${URL}${PORT}/loading`;

export default function App() {
  return (
    <div className="App">
      <Component url={dataUrl} title="DATA" />
      <Component url={errorUrl} title="ERROR" />
      <Component url={loadingUrl} title="LOADING" />
    </div>
  );
}