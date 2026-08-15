import { useState } from 'react'

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar container">
          <div className="nav-brand">
              <img src="/logo.png" alt="OmniSchool Logo" className="nav-logo" />
              <span>OmniSchool</span>
          </div>
          <div className="nav-links">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact">Contact</a>
              <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Log In</button>
              <button className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Get Started</button>
          </div>
      </nav>

      {/* Hero Section */}
      <section className="hero container">
          <h1>Elevate Your Institution</h1>
          <p>The premium, all-in-one cloud platform designed to give Principals, Administrators, and Teachers total control over their school.</p>
          
          <div className="hero-cta">
              <button className="btn btn-primary">Start Your Free Trial</button>
          </div>

          <div className="hero-image" style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.15)', border: '1px solid #e2e8f0' }}>
              <img src="/screenshots/Dashboard-1.png" alt="OmniSchool Dashboard Preview" style={{ width: '100%', display: 'block' }} />
          </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features container">
          <div className="section-title">
              <h2>Powerful Core Modules</h2>
              <p>Everything you need to run a modern educational institution, all in one place.</p>
          </div>

          <div className="grid">
              <div className="feature-card">
                  <i className="bi bi-mortarboard-fill feature-icon"></i>
                  <h3>Student Management</h3>
                  <p>Say goodbye to messy spreadsheets. Track enrollments, academic progress, and complete student histories with a single click.</p>
              </div>

              <div className="feature-card">
                  <i className="bi bi-wallet2 feature-icon"></i>
                  <h3>Automated Ledger</h3>
                  <p>Generate monthly fee vouchers instantly. Track incoming fees against overhead expenses and payroll to see your true bottom line.</p>
              </div>

              <div className="feature-card">
                  <i className="bi bi-calendar-check-fill feature-icon"></i>
                  <h3>Unified Attendance</h3>
                  <p>Track both Student and Employee attendance in one place. Identify chronic absenteeism immediately with real-time analytics.</p>
              </div>

              <div className="feature-card">
                  <i className="bi bi-book-half feature-icon"></i>
                  <h3>Dedicated Hifz Diary</h3>
                  <p>The only modern SaaS platform featuring a built-in Hifz module. Track daily Sabaq, generate reports, and run test tracking.</p>
              </div>
              
              <div className="feature-card">
                  <i className="bi bi-heart-fill feature-icon"></i>
                  <h3>Donation Matrix</h3>
                  <p>Seamlessly manage donor contributions, run targeted campaigns, and generate professional receipts effortlessly.</p>
              </div>
              
              <div className="feature-card">
                  <i className="bi bi-shield-lock-fill feature-icon"></i>
                  <h3>Enterprise Security</h3>
                  <p>Role-based access control ensures that teachers only see what they need to, while admins maintain total oversight.</p>
              </div>
          </div>
      </section>

      {/* Interface Showcase */}
      <section className="features container" style={{ paddingTop: '2rem' }}>
          <div className="section-title">
              <h2>Beautiful & Intuitive Interface</h2>
              <p>See OmniSchool in action. Designed for speed, clarity, and ease of use.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
              {["Dashboard-1.png", "Student-List.png", "Fee-Monthly-Ledger.png", "Employee-Attendence.png", "Hifz-Progress.png", "Expense-ledger.png"].map((img, i) => (
                  <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
                      <img src={`/screenshots/${img}`} alt={img.split('.')[0].replace(/-/g, ' ')} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
                      <div style={{ padding: '1rem', backgroundColor: 'white', textAlign: 'center', fontWeight: '600', color: '#1e293b' }}>
                          {img.split('.')[0].replace(/-/g, ' ')}
                      </div>
                  </div>
              ))}
          </div>
      </section>

      {/* Call to Action */}
      <section className="hero container" style={{ paddingTop: '2rem' }}>
          <h2>Ready to modernize your school?</h2>
          <p>Stop fighting your software. Let OmniSchool handle the administration so you can focus on education.</p>
          <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Contact Sales</button>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer container">
          <div className="footer-content">
              <div className="footer-brand">
                  <div className="nav-brand" style={{ marginBottom: '1rem' }}>
                      <img src="/logo.png" alt="OmniSchool Logo" className="nav-logo" />
                      <span>OmniSchool</span>
                  </div>
                  <p>A premium SaaS Cloud Platform designed specifically for educational institutions.</p>
              </div>
              
              <div className="footer-links">
                  <h4>Product</h4>
                  <ul>
                      <li><a href="#">Features</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Security</a></li>
                  </ul>
              </div>
              
              <div className="footer-links">
                  <h4>Company</h4>
                  <ul>
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                  </ul>
              </div>
              
              <div className="footer-links">
                  <h4>Contact</h4>
                  <ul>
                      <li><a href="mailto:contact@muhaimintech.com">contact@muhaimintech.com</a></li>
                      <li><a href="https://muhaimintech.com/" target="_blank" rel="noopener noreferrer">www.muhaimintech.com</a></li>
                      <li style={{ marginTop: '0.5rem', color: 'var(--primary-color)', fontWeight: 600 }}>A Product of Muhaimin Technologies</li>
                  </ul>
              </div>
          </div>
          <div className="footer-bottom">
              &copy; 2026 Muhaimin Technologies. All rights reserved.
          </div>
      </footer>
    </>
  )
}

export default App
