import { useState } from 'react'

function App() {
  return (
    <>


      {/* Hero Section */}
      <section className="hero container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <img src="/logo.png" alt="OmniSchool Logo" style={{ height: '100px', width: 'auto' }} />
              <h1 style={{ marginBottom: 0, zIndex: 10 }}>Elevate Your Institution</h1>
          </div>
          <p>The premium, all-in-one cloud platform designed to give Principals, Administrators, and Teachers total control over their school.</p>
      </section>

      {/* Video Demo Section */}
      <section className="features container" style={{ paddingTop: '2rem' }}>
          <div className="section-title">
              <h2>See Everything OmniSchool Can Do</h2>
              <p>A complete walkthrough of the dashboard, student and fee management, payroll, and the dedicated Hifz module.</p>
          </div>
          <div className="hero-image" style={{ maxWidth: '900px' }}>
              <video controls preload="metadata" poster="/screenshots/Dashboard-1.png" style={{ width: '100%', display: 'block' }}>
                  <source src="/videos/demo-english.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
          </div>
          <div className="hero-cta" style={{ marginTop: '2rem' }}>
              <a href="mailto:contact@muhaimintech.com?subject=OmniSchool%20Free%20Trial%20Request" className="btn btn-primary">Start Your Free Trial</a>
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

      {/* Call to Action */}
      <section className="hero container" style={{ paddingTop: '2rem' }}>
          <h2>Ready to modernize your school?</h2>
          <p>Stop fighting your software. Let OmniSchool handle the administration so you can focus on education.</p>
          <a href="mailto:contact@muhaimintech.com?subject=OmniSchool%20Sales%20Inquiry" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>Contact Sales</a>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer container">
          <div className="footer-content">
              <div className="footer-brand">
                  <div className="nav-brand" style={{ marginBottom: '1rem' }}>
                      <img src="/logo.png" alt="OmniSchool Logo" className="nav-logo" />
                      <span>OmniSchool</span>
                  </div>
                  <p>The ultimate SaaS solution for comprehensive school management and administration.</p>
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
