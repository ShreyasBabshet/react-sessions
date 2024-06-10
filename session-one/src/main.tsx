import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { AppComponent } from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* 
      const html = App({});
    */}
    <App />

    {/* 
      const instance = new AppComponent({})
      const html = instance.render();
    */}
    <AppComponent />
  </React.StrictMode>,
)
