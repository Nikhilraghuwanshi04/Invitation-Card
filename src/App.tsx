import React, { useState, useEffect } from 'react'
import './App.css'
import brideImage from './assets/bride.jpg';
import groomImage from './assets/groom.jpg';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCard = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    // Create fireworks
    const createFirework = () => {
      const animatedBg = document.querySelector('.animated-bg')
      if (!animatedBg) return

      const firework = document.createElement('div')
      firework.className = 'firework'
      
      // Random position
      firework.style.left = Math.random() * 100 + 'vw'
      firework.style.top = Math.random() * 100 + 'vh'
      
      // Random color
      const colors = ['#FFD700', '#FF69B4', '#9370DB', '#00CED1', '#FFA500']
      firework.style.background = colors[Math.floor(Math.random() * colors.length)]
      
      animatedBg.appendChild(firework)

      // Remove firework after animation
      setTimeout(() => {
        firework.remove()
      }, 1500)
    }

    // Create stars
    const createStars = () => {
      const animatedBg = document.querySelector('.animated-bg')
      if (!animatedBg) return

      const star = document.createElement('div')
      star.className = 'sparkle'
      star.style.left = Math.random() * 100 + 'vw'
      star.style.top = Math.random() * 100 + 'vh'
      animatedBg.appendChild(star)

      setTimeout(() => {
        star.remove()
      }, 2000)
    }

    // Create initial stars
    for (let i = 0; i < 50; i++) {
      createStars()
    }

    // Create fireworks and stars at intervals
    const fireworkInterval = setInterval(createFirework, 1000)
    const starInterval = setInterval(createStars, 500)

    return () => {
      clearInterval(fireworkInterval)
      clearInterval(starInterval)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="animated-bg"></div>
      <div className={`card-container ${isOpen ? 'opened' : ''}`} onClick={toggleCard}>
        <div className="card shadow-lg">
          <div className="envelope-flap"></div>
          
          <div className="card-front">
            <div className="envelope-seal">
              <span>💑</span>
            </div>
            <h2 className="text-primary mb-3 fs-2">शादी का निमंत्रण</h2>
            <h3 className="text-secondary mb-4">Wedding Invitation</h3>
            <p className="text-muted fs-5 mb-2">आपकी उपस्थिति की प्रार्थना है</p>
            <p className="text-muted fs-5">Request your presence</p>
            
            <div className="click-hint">
              <p className="text-sm text-muted">
                कार्ड खोलने के लिए क्लिक करें<br/>
                Click to open the card
              </p>
            </div>
          </div>
          
          <div className="card-back">
            <div className="card-content">
              <div className="couple-photos">
                <div className="photo-container">
                  <img 
                    src={groomImage} 
                    alt="Groom"
                    className="groom-photo"
                  />
                </div>
                <div className="photo-container">
                  <img 
                    src={brideImage} 
                    alt="Bride"
                    className="bride-photo"
                  />
                </div>
              </div>

              <div className="hearts-divider">💕</div>
              
              <h2 className="fs-2 text-primary">
              राजन & नेहा
              </h2>
              <h3 className="fs-3 text-secondary mb-4">
                Rajan & Neha
              </h3>

              <div className="wedding-date">
                <p className="fs-5 mb-2">मांगलिक कार्यक्रम</p>
                <h4 className="fs-4 text-primary">मंगलवार, 11 फरवरी, 2024</h4>
                <p className="fs-5">Tuesday, February 11th, 2024</p>
                <p className="mt-2">मंढा - दोपहर 12:00 बजे</p>
                <p className="mt-2">घुड़चढ़ी - रात्रि 8:00 बजे</p>
              </div>
              <div className="wedding-date">
                <p className="fs-5 mb-2">रिसेप्शन</p>
                <h4 className="fs-4 text-primary">बुधवार, 14 फरवरी, 2024</h4>
                <p className="fs-5">Friday, February 14th, 2024</p>
                <p className="mt-2">  रात्रि 8:00 बजे</p>
                <p>8:00 PM onwards</p>
              </div>
              
              <div className="venue-details">
                <p className="fs-5 mb-3">
                  <strong>स्थान / Venue</strong>
                </p>
                <p className="mt-2">मांगलिक कार्यक्रम हमारे निवास स्थान रामपुरी में संपन्न होगा।</p>
                <h4 className='mb-2'>रिसेप्शन स्थान</h4>
                <p className="mb-2">🏰 गुलशन पैलेस</p>
                <p className="mb-2">Gulshan palace</p>
                <p className="mb-2">रूड़की रोड, मुज़फ्फरनगर</p>
                <p>roorke road, muzaffarnagar</p>
              </div>
              
              <div className="mt-4 pt-3 border-top">
                <p className="fs-6 text-muted">
                  आपका स्वागत है<br/>
                  Awaiting your presence
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App