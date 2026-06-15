import React from 'react';

function App() {
  const styles = {
    page: {
      minHeight: '100vh',
      background: '#0a0a0a',
      color: '#ffffff',
      fontFamily: "'Poppins', sans-serif",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      overflow: 'hidden',
      position: 'relative',
    },
    glow: {
      position: 'absolute',
      width: '500px',
      height: '500px',
      background: 'radial-gradient(circle, rgba(0, 198, 255, 0.15) 0%, rgba(0, 198, 255, 0) 70%)',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      filter: 'blur(50px)',
      zIndex: 0,
    },
    content: {
      textAlign: 'center',
      zIndex: 1,
      animation: 'fadeIn 2s ease-in-out',
    },
    title: {
      fontFamily: "'Orbitron', sans-serif",
      fontSize: 'clamp(3rem, 10vw, 6rem)',
      fontWeight: 900,
      background: 'linear-gradient(90deg, #00C6FF, #0072FF)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      margin: 0,
      letterSpacing: '2px',
      textShadow: '0 0 30px rgba(0, 198, 255, 0.5)',
    },
    subtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      fontWeight: 300,
      color: '#a0a0a0',
      marginTop: '20px',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    button: {
      marginTop: '40px',
      padding: '14px 32px',
      fontSize: '1rem',
      fontWeight: 600,
      color: '#fff',
      background: 'linear-gradient(90deg, #00C6FF, #0072FF)',
      border: 'none',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      boxShadow: '0 0 20px rgba(0, 198, 255, 0.4)',
    },
  };

  const keyframes = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div style={styles.page}>
        <div style={styles.glow}></div>
        <div style={styles.content}>
          <h1 style={styles.title}>AURONTRA</h1>
          <p style={styles.subtitle}>
            Crafting the future of digital experiences. Where innovation meets elegance.
          </p>
          <a href="mailto:utkarsh@example.com">
            <button 
              style={styles.button}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Get In Touch
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
