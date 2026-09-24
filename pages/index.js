import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCaModalOpen, setIsCaModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const menuRef = useRef(null);

  // Toggle Dropdown Menu
  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => setIsMenuOpen(false);

  // Otomatis menutup menu ketika pengguna klik di luar area dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openCAModal = () => setIsCaModalOpen(true);
  const closeCAModal = () => {
    setIsCaModalOpen(false);
    setIsCopied(false);
  };

  const copyCA = () => {
    const caText = "0x553E1479999432aBF4D7c4aD613faac6b62Fcb5b";
    navigator.clipboard.writeText(caText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  const toggleFaq = (e) => {
    e.currentTarget.classList.toggle("active");
  };

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Head>
        <title>ZYNETHIC | Global AI Community Token</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta content="ZYNETHIC ($ZNTC) - The Global AI community token. Building the future of AI + Web3 on the Base Network." name="description" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet" />
      </Head>

      {/* MODAL CONTRACT ADDRESS */}
      {isCaModalOpen && (
        <div className="ca-modal" onClick={(e) => e.target.className === 'ca-modal' && closeCAModal()}>
          <div className="ca-modal-content">
            <i className="fa-solid fa-xmark modal-close-btn" onClick={closeCAModal}></i>
            <h3 className="modal-title">CONTRACT ADDRESS</h3>
            <p className="modal-subtitle">Verified ZYNETHIC on Base Network</p>
            <div className="ca-box">
              <span id="ca-value">0x553E1479999432aBF4D7c4aD613faac6b62Fcb5b</span>
              <i className="fa-solid fa-copy copy-icon" onClick={copyCA}></i>
            </div>
            {isCopied && <p className="copy-msg">Transaction Ready: Address Copied!</p>}
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo-area">
          <img alt="ZYNETHIC Icon" className="logo-img" src="https://raw.githubusercontent.com/zynethic/zntc-icon/main/zntc.png" />
          <div className="logo-text">ZYNE<span>THIC</span></div>
        </div>

        {/* CONTAINER MENU DENGAN REF */}
        <div className="menu-container" ref={menuRef}>
          <button className="menu-btn" onClick={toggleMenu} type="button">
            EXPLORE <i className={`fa-solid fa-chevron-down ${isMenuOpen ? 'rotate-icon' : ''}`} style={{ marginLeft: '8px', fontSize: '0.8rem', transition: '0.3s' }}></i>
          </button>
          
          <div className={`menu-content ${isMenuOpen ? 'active' : ''}`}>
            <a href="#tokenomics" onClick={closeMenu}>TOKENOMICS</a>
            <a href="#roadmap" onClick={closeMenu}>ROADMAP</a>
            <a href="#vision" onClick={closeMenu}>VISION</a>
            <a href="https://whitepaper.zynethic.xyz/" target="_blank" rel="noreferrer" onClick={closeMenu}>WHITEPAPER</a>
            
            <hr className="menu-divider" />
            
            <a href="https://app.zynethic.xyz/" target="_blank" rel="noreferrer" className="menu-link-highlight" onClick={closeMenu}>
              ZYNETHIC APP
            </a>
            
            <hr className="menu-divider" />

            <a href="https://ai.zynethic.xyz/" target="_blank" rel="noreferrer" className="menu-link-highlight" onClick={closeMenu}>
              ZYNETHIC AI HUB
            </a>

            <hr className="menu-divider" />
            
            <p className="network-tag">NETWORK: BASE L2</p>
          </div>
        </div>
      </nav>

      <div className="container">
        {/* HERO SECTION */}
        <section className="hero">
          <h1>ZYNETHIC</h1>
          <p>The Global Badge of Honor for the AI + Web3 Revolution. Join the community-driven movement building a transparent future of decentralized intelligence on Base.</p>
          <div className="btn-group">
            <a className="btn btn-primary" href="https://basescan.org/address/0x553E1479999432aBF4D7c4aD613faac6b62Fcb5b" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-bolt"></i> VIEW ON BASE
            </a>
            <a className="btn btn-whitepaper" href="https://whitepaper.zynethic.xyz/" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-book-open"></i> READ WHITEPAPER
            </a>
          </div>
        </section>

        {/* PRESALE INFO */}
        <div style={{ textAlign: 'center', margin: '50px auto', maxWidth: '650px' }}>
          <div className="badge-phase">ECOSYSTEM PHASE 1: PRE-LAUNCH</div>
          <h2 style={{ margin: '0 0 30px 0', fontSize: '1.8rem', fontWeight: 800 }}>$ZNTC Token Presale is STARTING SOON</h2>
          <div className="presale-card">
            <div className="p-table-row header-row">
              <label>Description</label>
              <span className="label-sub">Details</span>
            </div>
            <div className="p-table-row"><label>Name</label><span>ZYNETHIC</span></div>
            <div className="p-table-row"><label>Ticker</label><span>$ZNTC</span></div>
            <div className="p-table-row"><label>Network</label><span>Base Mainnet</span></div>
            <div className="p-table-row" style={{ border: 'none' }}><label>Allocation</label><span>14,000,000</span></div>
          </div>
          <a className="btn-pinksale-small" href="#" target="_blank" rel="noreferrer">STARTING SOON</a>
          
          <div className="security-grid">
            <div className="sec-card">
              <i className="fa-solid fa-shield-virus"></i>
              <h4>Security Audit</h4>
            </div>
            <div className="sec-card">
              <i className="fa-solid fa-lock"></i>
              <h4>LP 1Y Lock</h4>
            </div>
            <div className="sec-card" onClick={openCAModal} style={{ cursor: 'pointer' }}>
              <i className="fa-solid fa-file-shield"></i>
              <h4>Smart Contract</h4>
            </div>
          </div>
        </div>

        {/* TOKENOMICS */}
        <h2 className="section-title" id="tokenomics">Institutional Tokenomics</h2>
        <p className="protocol-tag">Protocol Status: Verified &amp; Immutable (No-Mint)</p>
        <div className="presale-card" style={{ maxWidth: '900px', padding: '30px' }}>
          <div className="p-table-row header-row">
            <label style={{ flex: 2 }}>Asset Group</label>
            <label style={{ flex: 1, textAlign: 'center' }}>Allocation %</label>
            <label style={{ flex: 1.5, textAlign: 'right' }}>Total ZNTC</label>
          </div>
          <div className="p-table-row"><label style={{ flex: 2 }}>Community Presale</label><span style={{ flex: 1, textAlign: 'center' }}>35%</span><span style={{ flex: 1.5 }}>14,000,000</span></div>
          <div className="p-table-row"><label style={{ flex: 2 }}>Locked Liquidity</label><span style={{ flex: 1, textAlign: 'center' }}>25%</span><span style={{ flex: 1.5 }}>10,000,000</span></div>
          <div className="p-table-row"><label style={{ flex: 2 }}>Global Marketing</label><span style={{ flex: 1, textAlign: 'center' }}>15%</span><span style={{ flex: 1.5 }}>6,000,000</span></div>
          <div className="p-table-row"><label style={{ flex: 2 }}>Development Team</label><span style={{ flex: 1, textAlign: 'center' }}>15%</span><span style={{ flex: 1.5 }}>6,000,000</span></div>
          <div className="p-table-row" style={{ border: 'none' }}><label style={{ flex: 2 }}>Strategic Burn</label><span style={{ flex: 1, textAlign: 'center' }}>10%</span><span style={{ flex: 1.5 }}>4,000,000</span></div>
        </div>

        {/* ROADMAP */}
        <h2 className="section-title" id="roadmap">Strategic Roadmap 2026</h2>
        <div className="roadmap-grid">
          <div className="roadmap-item"><h3>Phase 1 (Q1)</h3><ul><li>Genesis Deployment</li><li>Security Audit</li><li>Global Presale</li></ul></div>
          <div className="roadmap-item"><h3>Phase 2 (Q2)</h3><ul><li>DEX Listing</li><li>CMC/CG Tracking</li><li>Deflationary Burn</li></ul></div>
          <div className="roadmap-item"><h3>Phase 3 (Q3)</h3><ul><li>AI Dashboard Beta</li><li>Vault Staking</li></ul></div>
          <div className="roadmap-item"><h3>Phase 4 (Q4)</h3><ul><li>Exchange Expansion</li><li>Full AI Engine</li></ul></div>
        </div>

        {/* VISION */}
        <h2 className="section-title" id="vision">Our Philosophy</h2>
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          <p className="philosophy-text">ZYNETHIC is built on the core principle of <strong>Code as Law</strong>. We are a sanctuary for global innovators, merging Artificial Intelligence with the immutable transparency of Base to return power back to the community.</p>
        </div>

        {/* FAQ */}
        <h2 className="section-title">F.A.Q</h2>
        <div className="faq-container">
          <div className="faq-item" onClick={toggleFaq}>
            <div className="faq-question">What is the main goal of $ZNTC? <i className="fa-solid fa-chevron-down"></i></div>
            <div className="faq-answer">Pathing the future of AI + Web3, $ZNTC serves as a global community token for decentralized intelligence and AI tools utility.</div>
          </div>
          <div className="faq-item" onClick={toggleFaq}>
            <div className="faq-question">Why is ZYNETHIC built on Base? <i className="fa-solid fa-chevron-down"></i></div>
            <div className="faq-answer">Base Network offers institutional-grade security, low transaction fees, and high scalability for Web3 + AI execution.</div>
          </div>
          <div className="faq-item" onClick={toggleFaq}>
            <div className="faq-question">Is the Smart Contract safe? <i className="fa-solid fa-chevron-down"></i></div>
            <div className="faq-answer">Absolutely. Our smart contract is verified on Basescan, non-mintable, and liquidity is locked.</div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="social-footer">
          <a href="https://x.com/zynethic" target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
          <a href="https://t.me/zynethic_global_community" target="_blank" rel="noreferrer"><i className="fa-brands fa-telegram"></i></a>
        </div>
        <footer>&#169; 2026 ZYNETHIC ECOSYSTEM. BUILT ON BASE L2.</footer>
      </div>
    </div>
  );
}
