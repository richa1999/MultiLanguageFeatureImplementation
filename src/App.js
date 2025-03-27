import React from 'react'
import { useState } from 'react';
import About from './components/About';


function App() {
    const [lang, setLang] = useState("en");
  return (
    <div>
        <header>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value={"hi"}>Hindi</option>
            <option value={"en"}>English</option>
            <option value={"ru"}>Russian</option>
            <option value={"sp"}>Spanish</option>
        </select>
    </header>
    <About lang={lang} />
    </div>
  )
}

export default App