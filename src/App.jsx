import React from 'react'
import LandingPage from './pages/LandingPage'
import BusinessPage from './pages/BusinessPage'

export default function App() {
  const [view, setView] = React.useState('landing')
  return view === 'landing'
    ? <LandingPage onTryPrototype={() => setView('business')} />
    : <BusinessPage onExit={() => setView('landing')} />
}
