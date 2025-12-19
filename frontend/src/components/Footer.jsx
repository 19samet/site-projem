import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import '../styles/GoldTheme.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
        borderTop: '1px solid var(--border-light)',
        padding: '60px 7.6923% 30px',
      }}
    >
      <div className="luxury-container">
        {/* Main Footer Content */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          {/* Brand Column */}
          <div>
            <div
              style={{
                fontSize: '24px',
                fontWeight: 700,
                background: 'var(--gold-metallic)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '16px',
              }}
            >
              HASKASA
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Profesyonel altın ticaret ve borsa analizi otomasyon yazılımı. RFID teknolojisi ve gerçek zamanlı finansal kontrol.
            </p>
            <div className="gold-accent-line" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>Hızlı Bağlantılar</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ fontSize: '14px', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  Özellikler
                </a>
              </li>
              <li>
                <a
                  onClick={() => document.getElementById('technology')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ fontSize: '14px', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  Teknoloji
                </a>
              </li>
              <li>
                <a
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ fontSize: '14px', color: 'var(--text-secondary)', cursor: 'pointer', transition: 'color 0.3s ease' }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>İletişim Bilgileri</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={16} color="var(--gold-primary)" />
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>+90 553 704 05 18</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={16} color="var(--gold-primary)" />
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Samet Bodur</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '30px',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>
            © {currentYear} HASKASA. Tüm hakları saklıdır.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a
              href="#"
              style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              Gizlilik Politikası
            </a>
            <a
              href="#"
              style={{ fontSize: '14px', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s ease' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--gold-primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
            >
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
          footer > div > div:last-child {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
