import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function LandingPage() {
  const [menuActive, setMenuActive] = useState(false);
  const [caModalVisible, setCaModalVisible] = useState(false);
  const [copyMsgVisible, setCopyMsgVisible] = useState(false);

  const toggleFAQ = (e) => {
    e.currentTarget.classList.toggle('active');
  };

  const copyCA = () => {
    const caText = "0x553E1479999432aBF4D7c4aD613faac6b62Fcb5b";
    navigator.clipboard.writeText(caText);
    setCopyMsgVisible(true);
    setTimeout(() => setCopyMsgVisible(false), 2000);
  };

  return (
    <>
      <Head>
        <title>ZYNETHIC | Global AI Community Token</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="ZYNETHIC ($ZNTC) - The Global AI community token. Building the future of AI + Web3 on the Base Network." />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        :root {
            --primary-bg: #010409; --accent-metal: #0a1120; --base-blue: #0052ff; 
            --base-glow: #00f7ff; --text-main: #f8fafc; --text-dim: #94a3b8;
            --glass-bg: rgba(10, 17, 32, 0.7); --glass-border: rgba(255, 255, 255, 0.1);
            --blue-shadow: 0 0 25px rgba(0, 82, 255, 0.3); --pinksale-solid: #f33a7e;
            --pinksale-glow: 0 0 20px rgba(243, 58, 126, 0.5);
        }
        body { background-color: var(--primary-bg); color: var(--text-main); font-family: 'Plus Jakarta Sans', sans-serif; margin: 0; padding: 0; line-height: 1.6; overflow-x: hidden; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .navbar { display: flex; justify-content: space-between; align-items: center; padding: 15px 8%; position: fixed; width: 100%; top: 0; z-index: 1000; box-sizing: border-box; background: rgba(1, 4, 9, 0.85); backdrop-filter: blur(15px); border-bottom: 1px solid var(--glass-border); }
        .logo-area { display: flex; align-items: center; gap: 10px; }
        .logo-img { width: 35px; height: 35px; object-fit: contain; }
        .logo-text { font-weight: 800; font-size: 1.6rem; letter-spacing: 1px; color: #fff; text-transform: uppercase; }
        .menu-btn { background: var(--glass-bg); border: 1px solid var(--glass-border); color: var(--base-glow); padding: 10px 20px; border-radius: 12px; cursor: pointer; transition: 0.3s; backdrop-filter: blur(5px); }
        .menu-content { display: ${menuActive ? 'block' : 'none'}; position: absolute; right: 8%; top: 75px; background: rgba(10, 17, 32, 0.95); min-width: 260px; border: 1px solid var(--glass-border); border-radius: 15px; backdrop-filter: blur(25px); padding: 25px; z-index: 1001; }
        .menu-content a { color: #fff; text-decoration: none; display: block; margin-bottom: 18px; font-weight: 600; font-size: 0.95rem; }
        .hero { text-align: center; padding: 180px 0 100px; background: radial-gradient(circle at center, rgba(0, 82, 255, 0.15) 0%, transparent 70%); }
        .hero h1 { font-size: clamp(3.5rem, 12vw, 6rem); margin: 0; font-weight: 800; background: linear-gradient(135deg, #fff 30%, var(--base-blue) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .btn-group { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-top: 45px; }
        .btn { padding: 16px 35px; border-radius: 14px; font-weight: 700; text-decoration: none; transition: 0.4s; display: flex; align-items: center; gap: 10px; }
        .btn-primary { background: var(--base-blue); color: #fff; }
        .btn-whitepaper { background: var(--glass-bg); color: #fff; border: 1px solid var(--glass-border); }
        .presale-card { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 30px; padding: 50px 30px; margin: 20px auto; max-width: 650px; }
        .p-table-row { display: flex; justify-content: space-between; padding: 15px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .btn-pinksale-small { background: var(--pinksale-solid); color: #fff; padding: 12px 35px; border-radius: 12px; font-weight: 800; text-decoration: none; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(243, 58, 126, 0.7); } 70% { box-shadow: 0 0 0 15px rgba(243, 58, 126, 0); } 100% { box-shadow: 0 0 0 0 rgba(243, 58, 126, 0); } }
        .security-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; margin-top: 50px; }
        .sec-card { background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 30px; border-radius: 20px; }
        .roadmap-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-top: 50px; }
        .roadmap-item { background: var(--glass-bg); padding: 35px; border-radius: 24px; border: 1px solid var(--glass-border); }
        .faq-item { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 15px; margin-bottom: 15px; overflow: hidden; }
        .faq-question { padding: 20px 25px; cursor: pointer; display: flex; justify-content: space-between; font-weight: 700; }
        .faq-answer { padding: 0 25px; max-height: 0; overflow: hidden; transition: 0.4s; color: var(--text-dim); }
        .faq-item.active .faq-answer { padding: 0 25px 25px 25px; max-height: 300px; }
        .ca-modal { display: ${caModalVisible ? 'flex' : 'none'}; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); align-items: center; justify-content: center; }
        .ca-modal-content { background: var(--accent-metal); padding: 45px; border-radius: 30px; border: 1px solid var(--base-blue); text-align: center; max-width: 500px; position: relative; }
        .section-title { text-align: center; margin: 100px 0 20px; font-size: 2.5rem; font-weight: 800; }
        footer { text-align: center; padding: 80px 20px; color: var(--text-dim); border-top: 1px solid var(--glass-border); }
      `}</style>

      {/* MODAL CA */}
      <div className="ca-modal" onClick={() => setCaModalVisible(false)}>
        <div className="ca-modal-content" onClick={e => e.stopPropagation()}>
          <i className="fa-solid fa-xmark" onClick={() => setCaModalVisible(false)} style={{position:'absolute', top:'25px', right:'30px', cursor:'pointer', fontSize:'1.8rem', color:'var(--text-dim)'}}/>
          <h3 style={{color:'var(--base-glow)', fontSize:'1.5rem'}}>CONTRACT ADDRESS</h3>
          <p style={{color:'var(--text-dim)'}}>Verified ZYNETHIC on Base Network</p>
          <div style={{background:'#000', padding:'18px', borderRadius:'15px', border:'1px dashed var(--base-glow)', margin:'30px 0', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
            <span style={{fontFamily:'monospace', color:'#fff'}}>0x553E1479999432aBF4D7c4aD613faac6b62Fcb5b</span>
            <i className="fa-solid fa-copy" onClick={copyCA} style={{color:'var(--base-glow)', cursor:'pointer', fontSize:'1.3rem'}}/>
          </div>
          {copyMsgVisible && <p style={{color:'#00ff88', fontWeight:'700'}}>Transaction Ready: Address Copied!</p>}
        </div>
      </div>

      <nav className="navbar">
        <div className="logo-area">
          <img src="https://raw.githubusercontent.com/zynethic/zntc-icon/main/zntc.png" className="logo-img" alt="logo" />
          <div className="logo-text">ZYNE<span>THIC</span></div>
        </div>
        <div className="menu-container">
          <button className="menu-btn" onClick={() => setMenuActive(!menuActive)}>EXPLORE <i className="fa-solid fa-chevron-down"/></button>
          <div className="menu-content">
            <a href="#tokenomics" onClick={() => setMenuActive(false)}>TOKENOMICS</a>
            <a href="#roadmap" onClick={() => setMenuActive(false)}>ROADMAP</a>
            <a href="#vision" onClick={() => setMenuActive(false)}>VISION</a>
            <a href="https://whitepaper.zynethic.xyz/" target="_blank">WHITEPAPER</a>
          </div>
        </div>
      </nav>

      <div className="container">
        <section className="hero">
          <h1>ZYNETHIC</h1>
          <p>The Global Badge of Honor for the AI + Web3 Revolution. Join the community-driven movement building a transparent future of decentralized intelligence on Base.</p>
          <div className="btn-group">
            <a className="btn btn-primary" href="https://basescan.org/address/0x553E1479999432aBF4D7c4aD613faac6b62Fcb5b" target="_blank"><i className="fa-solid fa-bolt"/> VIEW ON BASE</a>
            <a className="btn btn-whitepaper" href="https://whitepaper.zynethic.xyz/" target="_blank"><i className="fa-solid fa-book-open"/> READ WHITEPAPER</a>
          </div>
        </section>

        <div style={{textAlign:'center', margin:'50px auto', maxWidth:'650px'}}>
          <div style={{background:'rgba(0,247,255,0.1)', color:'var(--base-glow)', padding:'6px 18px', borderRadius:'30px', display:'inline-block', fontSize:'0.75rem', fontWeight:'800', border:'1px solid rgba(0,247,255,0.2)'}}>ECOSYSTEM PHASE 1: PRE-LAUNCH</div>
          <h2 style={{fontSize:'1.8rem', fontWeight:'800', marginTop:'20px'}}>$ZNTC Token Presale is STARTING SOON</h2>
          <div className="presale-card">
            <div className="p-table-row" style={{borderBottom:'2px solid var(--base-blue)'}}><label>Description</label><span>Details</span></div>
            <div className="p-table-row"><label>Name</label><span>ZYNETHIC</span></div>
            <div className="p-table-row"><label>Ticker</label><span>$ZNTC</span></div>
            <div className="p-table-row"><label>Network</label><span>Base Mainnet</span></div>
            <div className="p-table-row" style={{border:'none'}}><label>Allocation</label><span>14,000,000</span></div>
          </div>
          <a className="btn-pinksale-small" href="#">STARTING SOON</a>
          <div className="security-grid">
            <div className="sec-card"><i className="fa-solid fa-shield-virus" style={{fontSize:'2.2rem', color:'var(--base-glow)'}}/><h4>Audit</h4></div>
            <div className="sec-card"><i className="fa-solid fa-lock" style={{fontSize:'2.2rem', color:'var(--base-glow)'}}/><h4>LP Lock</h4></div>
            <div className="sec-card" onClick={() => setCaModalVisible(true)} style={{cursor:'pointer'}}><i className="fa-solid fa-file-shield" style={{fontSize:'2.2rem', color:'var(--base-glow)'}}/><h4>Contract</h4></div>
          </div>
        </div>

        <h2 className="section-title" id="tokenomics">Institutional Tokenomics</h2>
        <div className="presale-card" style={{maxWidth:'900px'}}>
           <div className="p-table-row" style={{borderBottom:'2px solid var(--base-blue)'}}><label>Asset Group</label><span>Allocation</span></div>
           <div className="p-table-row"><label>Community Presale</label><span>35% (14M)</span></div>
           <div className="p-table-row"><label>Locked Liquidity</label><span>25% (10M)</span></div>
           <div className="p-table-row"><label>Marketing</label><span>15% (6M)</span></div>
           <div className="p-table-row"><label>Team</label><span>15% (6M)</span></div>
           <div className="p-table-row" style={{border:'none'}}><label>Strategic Burn</label><span>10% (4M)</span></div>
        </div>

        <h2 className="section-title" id="roadmap">Strategic Roadmap 2026</h2>
        <div className="roadmap-grid">
          <div className="roadmap-item"><h3>Phase 1</h3><ul><li>Genesis Deployment</li><li>Presale Event</li></ul></div>
          <div className="roadmap-item"><h3>Phase 2</h3><ul><li>DEX Listing</li><li>CG/CMC Tracking</li></ul></div>
          <div className="roadmap-item"><h3>Phase 3</h3><ul><li>AI Beta Dashboard</li><li>Vault Staking</li></ul></div>
          <div className="roadmap-item"><h3>Phase 4</h3><ul><li>CEX Expansion</li><li>Full AI Engine</li></ul></div>
        </div>

        <h2 className="section-title">F.A.Q</h2>
        <div className="faq-container">
          {["What is ZYNETHIC?", "Why Base Network?", "Is it safe?"].map((q, i) => (
            <div key={i} className="faq-item" onClick={toggleFAQ}>
              <div className="faq-question">{q} <i className="fa-solid fa-chevron-down"/></div>
              <div className="faq-answer">ZYNETHIC is the future of AI + Web3 integration, providing security and community-led growth on the Base L2 network.</div>
            </div>
          ))}
        </div>

        <div style={{textAlign:'center', marginTop:'100px'}}>
          <a href="https://x.com/zynethic" target="_blank" style={{color:'var(--text-dim)', fontSize:'2.2rem', margin:'0 25px'}}><i className="fa-brands fa-x-twitter"/></a>
          <a href="https://t.me/zynethic_global_community" target="_blank" style={{color:'var(--text-dim)', fontSize:'2.2rem', margin:'0 25px'}}><i className="fa-brands fa-telegram"/></a>
        </div>

        <footer>© 2026 ZYNETHIC ECOSYSTEM. BUILT ON BASE L2.</footer>
      </div>
    </>
  );
}
