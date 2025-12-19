import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle2 } from 'lucide-react';
import { toast } from '../components/ui/sonner';
import emailjs from '@emailjs/browser';
import '../styles/GoldTheme.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  /* EmailJS Integration */
  const formRef = React.useRef();

  /* Existing state can remain for controlled inputs if needed, 
     but emailjs.sendForm works best with the form reference directly.
     We will keep formData state to clear the form after submission.
  */
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Import locally to avoid top-level redundant imports if not eager
  // But standard practice is top level. We will use the global emailjs if imported or the library functions.
  // Ideally we imported it at the top. Let's assume we will add the import at the top in a separate edit or this one.
  // Actually, I need to add `import emailjs from '@emailjs/browser';` at top.
  // For this block, I will implement the handle change and submit logic.

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // service_id, template_id, public_key
    emailjs
      .sendForm(
        'service_qabxpug',
        'template_2ukmb79',
        formRef.current,
        {
          publicKey: 'q8R-BFjnK5JqIa1Pm',
        }
      )
      .then(
        () => {
          toast.success('Mesajınız Gönderildi!', {
            description: 'En kısa sürede sizinle iletişime geçeceğiz.',
          });
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
          });
        },
        (error) => {
          console.error('FAILED...', error.text);
          toast.error('Bir Hata Oluştu', {
            description: 'Lütfen daha sonra tekrar deneyin veya telefon ile iletişime geçin.',
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)' }}>
      <div className="luxury-container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          {/* Left Content */}
          <div>
            <div
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                background: 'var(--bg-overlay)',
                border: '1px solid var(--border-gold)',
                borderRadius: '24px',
                marginBottom: '16px',
              }}
            >
              <span style={{ fontSize: '14px', color: 'var(--gold-primary)', fontWeight: 600 }}>İLETİŞİM</span>
            </div>

            <h2
              style={{
                fontSize: '48px',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '20px',
                letterSpacing: '-0.5px',
              }}
            >
              Hemen
              <br />
              <span
                style={{
                  background: 'var(--gold-metallic)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Başlayın
              </span>
            </h2>

            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', marginBottom: '40px', lineHeight: 1.6 }}>
              Profesyonel altın ticaret yazılımımız hakkında detaylı bilgi almak ve demo talep etmek için bizimle iletişime geçin.
            </p>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: 'var(--bg-overlay)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                  }}
                >
                  <Phone size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>İletişim</div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)' }}>Samet Bodur</div>
                  <div style={{ fontSize: '16px', color: 'var(--text-primary)', marginTop: '4px' }}>+90 553 704 05 18</div>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: 'var(--bg-overlay)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                  }}
                >
                  <Phone size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>İletişim</div>
                  <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)' }}>Kaan Yıldırım</div>
                  <div style={{ fontSize: '16px', color: 'var(--text-primary)', marginTop: '4px' }}>+90 551 277 07 27</div>
                </div>
              </div>
            </div>

            {/* Gold Image */}
            <div
              className="perspective-image"
              style={{
                marginTop: '40px',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1572107833346-add549545c63"
                alt="Gold Trading"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="glass-card" style={{ padding: '48px' }}>
            <h3 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '24px' }}>Bilgi Talep Formu</h3>

            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Ad Soyad *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease',
                    background: 'white',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-light)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>E-posta *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease',
                    background: 'white',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-light)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Telefon *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease',
                    background: 'white',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-light)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Şirket Adı</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease',
                    background: 'white',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-light)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>Mesajınız *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease',
                    background: 'white',
                    resize: 'vertical',
                  }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--gold-primary)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--border-light)')}
                />
              </div>

              <button
                type="submit"
                className="btn-gold-primary"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                }}
              >
                {isSubmitting ? (
                  'Gönderiliyor...'
                ) : (
                  <>
                    Gönder
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          section > div > div {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          h2 {
            font-size: 36px !important;
          }
          .glass-card {
            padding: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;