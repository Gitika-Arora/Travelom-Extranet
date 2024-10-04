import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { twMerge } from 'tailwind-merge';
import Tailwind from 'primereact/passthrough/tailwind';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind, ptOptions: { mergeSections: true, mergeProps: true, classNameMergeFunction: twMerge } }}>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
