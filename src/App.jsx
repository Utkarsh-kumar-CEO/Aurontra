import React, { useState, useEffect } from 'react'

export default function App() {
  const [chatOpen, setChatOpen] = useState(false)
  const [msg, setMsg] = useState('')
  const [chats, setChats] = useState([
    {from: 'ai', text: 'Hey! I am Aurontra AI 🤖 I can build websites, write code, create stores, and automate marketing. What should we build today?'}
  ])
  const [mobileMenu, setMobileMenu] = useState(false)

  const sendMsg = () => {
    if(!msg) return
    setChats([...chats, 
      {from: 'user', text: msg}, 
      {from: 'ai', text: 'That sounds amazing! With Aurontra Pro you can build this in 2 minutes. Want me to generate a demo?'}
    ])
    setMsg('')
  }

  useEffect(() => {
    document.title = 'Aurontra - AI Platform by Utkarsh Kumar'
  }, [])

  return (
    <div style={{background: '#000', color: '#fff', fontFamily: 'Inter, system-ui, Arial'}}>
      
      {/* Navbar */}
      <nav style={{padding: '15px 5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'fixed', width: '90%', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)', zIndex: 100, borderBottom: '1px solid #111'}}>
        <h2 style={{color: '#00e5ff', fontWeight: 800, fontSize: '24px', letterSpacing: '-1px'}}>AURONTRA</h2>
        <div style={{display: window.innerWidth > 768 ? 'flex' : 'none', gap: '35px', alignItems: 'center'}}>
          <a href="#features" style={{color: '#ccc', textDecoration: 'none', fontSize: '15px'}}>Features</a>
          <a href="#solutions" style={{color: '#ccc', textDecoration: 'none', fontSize: '15px'}}>Solutions</a>
          <a href="#pricing" style={{color: '#ccc', textDecoration: 'none', fontSize: '15px'}}>Pricing</a>
          <a href="#founder" style={{color: '#ccc', textDecoration: 'none', fontSize: '15px'}}>Founder</a>
          <button style={{padding:
