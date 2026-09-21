import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Head>
        <title>ZYNETHIC | Global AI Community Token</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta content="ZYNETHIC ($ZNTC) - The Global AI community token. Building the future of AI + Web3 on the Base Network." name="description" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet" />
      </Head>

      <div dangerouslySetInnerHTML={{ __html: `
        <style>
            :root {
                --primary-bg: #010409; 
                --accent-metal: #0a1120; 
                --base-blue: #0052ff; 
                --base-glow: #00f7ff; 
                --text-main: #f8fafc;
                --text-dim: #94a3b8;
                --glass-bg: rgba(10, 17, 32, 0.7);
                --glass-border: rgba(255, 255, 255, 0.1);
                --blue-shadow: 0 0 25px rgba(0, 82, 255, 0.3);
                --pinksale-solid: #f33a7e;
                --pinksale-glow: 0 0 20px rgba(243, 58, 126, 0.5);
            }
            body { background-color: var(--primary-bg); color: var(--text-main); font-family: 'Plus Jakarta Sans', sans-serif; margin: 0; padding: 0; line-height: 1.6; overflow-x: hidden; }
            .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
            .navbar { display: flex; justify-content: space-between; align-items: center; padding: 15px 8%; position: fixed; width: 100%; top: 0; z-index: 1000; box-sizing: border-box; background: rgba(1, 4, 9, 0.85); backdrop-filter: blur(15px); border-bottom: 1px solid var(--glass-border); }
            .logo-area { display: flex; align-items: center; gap: 10px; }
            .logo-img { width: 35px; height: 35px; object-fit: contain; }
            .logo-text { font-weight: 800; font-size: 1.6rem; letter-spacing: 1px; color: #fff; display: flex; align-items: center; text-transform: uppercase; }
            .logo-text span { color: #fff; } 
            .menu-btn { background: var(--glass-bg); border: 1px solid var(--glass-border); color: var(--base-glow); padding: 10px 20px; border-radius: 12px; cursor: pointer; transition: 0.3s; backdrop-filter: blur(5px); }
            .menu-btn:hover { border-color: var(--base-glow); box-shadow: var(--blue-shadow); }
            #menu-content { 
                display: none; position: absolute; right: 8%; top: 75px; background: rgba(10, 17, 32, 0.95); 
                min-width: 260px; border: 1px solid var(--glass-border); border-radius: 15px; 
                backdrop-filter: blur(25px); padding: 25px; z-index: 1001; box-shadow: 0 25px 50px rgba(0,0,0,0.6);
            }
            .menu-content.active { display: block !important; animation: slideIn 0.3s ease; }
            @keyframes slideIn { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; transform: translateY(0); } }
            .menu-content a { color: #fff; text-decoration: none; display: block; margin-bottom: 18px; font-weight: 600; font-size: 0.95rem; transition: 0.3s; }
            .menu-content a:hover { color: var(--base-glow); transform: translateX(5px); }
            .hero { text-align: center; padding: 180px 0 100px; background: radial-gradient(circle at center, rgba(0, 82, 255, 0.15) 0%, transparent 70%); }
            .hero h1 { font-size: clamp(3.5rem, 12vw, 6rem); margin: 0; font-weight: 800; background: linear-gradient(135deg, #fff 30%, var(--base-blue) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 30px rgba(0,82,255,0.3)); letter-spacing: -2px; }
            .hero p { color: var(--text-dim); font-size: clamp(1.1rem, 2.5vw, 1.4rem); margin: 25px auto; max-width: 800px; font-weight: 500; }
            .btn-group { display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-top: 45px; }
            .btn { padding: 16px 35px; border-radius: 14px; font-weight: 700; text-decoration: none; transition: 0.4s; font-size: 1rem; display: flex; align-items: center; gap: 10px; border: 1px solid transparent; }
            .btn-primary { background: var(--base-blue); color: #fff; box-shadow: 0 10px 30px rgba(0,82,255,0.4); }
            .btn-whitepaper { background: var(--glass-bg); color: #fff; border: 1px solid var(--glass-border); backdrop-filter: blur(10px); }
            .btn:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 15px 40px rgba(0,82,255,0.5); }
            .p-table-row { display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
            .p-table-row label { color: var(--text-dim); font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; flex: 1; text-align: left; }
            .p-table-row span { color: #fff; font-weight: 700; font-size: 1.1rem; flex: 1; text-align: right; font-variant-numeric: tabular-nums; }
            @keyframes pulse-pinksale {
                0% { box-shadow: 0 0 0 0 rgba(243, 58, 126, 0.7); }
                70% { box-shadow: 0 0 0 15px rgba(243, 58, 126, 0); }
                100% { box-shadow: 0 0 0 0 rgba(243, 58, 126, 0); }
            }
            .btn-pinksale-small { background: var(--pinksale-solid); color: #fff; padding: 12px 35px; border-radius: 12px; font-weight: 800; text-decoration: none; display: inline-block; margin-top: 25px; font-size: 0.9rem; letter-spacing: 1px; transition: 0.4s; border: none; box-shadow: var(--pinksale-glow); text-transform: uppercase; animation: pulse-pinksale 2s infinite; }
            .faq-container { max-width: 800px; margin: 50px auto; }
            .faq-item { background: var(--glass-bg); border: 1px solid var(--glass-border); border-radius: 15px; margin-bottom: 15px; overflow: hidden; transition: 0.3s; }
            .faq-question { padding: 20px 25px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; font-weight: 700; color: #fff; }
            .faq-answer { padding: 0 25px; max-height: 0; overflow: hidden; transition: 0.4s ease-out; color: var(--text-dim); font-size: 0.95rem; line-height: 1.8; }
            .faq-item.active { border-color: var(--base-blue); box-shadow: var(--blue-shadow); }
            .faq-item.active .faq-answer { padding: 0 25px 25px 25px; max-height: 300px; }
            .security-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; margin-top: 50px; }
            .sec-card { background: var(--glass-bg); border: 1px solid var(--glass-border); padding: 30px; border-radius: 20px; transition: 0.4s; backdrop-filter: blur(10px); }
            .sec-card i { font-size: 2.2rem; color: var(--base-glow); margin-bottom: 20px; filter: drop-shadow(0 0 10px var(--base-glow)); }
            .presale-card { background: var(--glass-bg); border: 1px solid var(--glass-border); backdrop-filter: blur(20px); border-radius: 30px; padding: 50px 30px; margin: 20px auto 50px auto; max-width: 650px; text-align: center; box-shadow: 0 40px 100px rgba(0,0,0,0.4); }
            .roadmap-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; margin-top: 50px; }
            .roadmap-item { background: var(--glass-bg); padding: 35px; border-radius: 24px; border: 1px solid var(--glass-border); position: relative; transition: 0.3s; }
            .ca-modal { display: none; position: fixed; z-index: 2000; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); backdrop-filter: blur(10px); align-items: center; justify-content: center; }
            .ca-modal-content { background: var(--accent-metal); padding: 45px; border-radius: 30px; border: 1px solid var(--base-blue); text-align: center; width: 90%; max-width: 500px; box-shadow: 0 0 60px rgba(0,82,255,0.3); }
            .ca-box { background: #000; padding: 18px; border-radius: 15px; border: 1px dashed var(--base-glow); margin: 30px 0; display: flex; align-items: center; justify-content: space-between; }
            .section-title { text-align: center; margin: 100px 0 20px; font-size: 2.5rem; font-weight: 800; letter-spacing: -1px; }
            .social-footer a { color: var(--text-dim); font-size: 2.2rem; margin: 0 25px; transition: 0.4s; display: inline-block; }
            footer { text-align: center; padding: 80px 20px; color: var(--text-dim); font-size: 0.9rem; border-top: 1px solid var(--glass-border); letter-spacing: 1px; }
            @media (max-width: 768px) { .navbar { padding: 15px 5%; } .hero { padding: 140px 0 60px; } }
        </style>

        <div class='ca-modal' id='caModal'>
          <div class='ca-modal-content'>
            <i class='fa-solid fa-xmark' onclick='closeCAModal()' style='position:absolute; top:25px; right:30px; cursor:pointer; font-size:1.8rem; color:var(--text-dim)'></i>
            <h3 style='color:var(--base-glow); font-size:1.5rem;'>CONTRACT ADDRESS</h3>
            <p style='font-size:1rem; color:var(--text-dim)'>Verified ZYNETHIC on Base Network</p>
            <div class='ca-box'>
              <span id='ca-value' style='font-family:monospace; font-size:0.9rem; color:#fff;'>0x553E1479999432aBF4D7c4aD613faac6b62Fcb5b</span>
              <i class='fa-solid fa-copy' onclick='copyCA()' style='color:var(--base-glow); cursor:pointer; font-size:1.3rem;'></i>
            </div>
            <p id='copy-msg' style='font-size:0.9rem; color:#00ff88; display:none; font-weight:700;'>Transaction Ready: Address Copied!</p>
          </div>
        </div>

        <nav class='navbar'>
          <div class='logo-area'>
            <img alt='ZYNETHIC Icon' class='logo-img' src='https://raw.githubusercontent.com/zynethic/zntc-icon/main/zntc.png'/>
            <div class='logo-text'>ZYNE<span>THIC</span></div>
          </div>
          <div class='menu-container'>
            <button class='menu-btn' onclick='toggleMenu()'>EXPLORE <i class='fa-solid fa-chevron-down' style='margin-left:8px; font-size:0.8rem;'></i></button>
            <div class='menu-content' id='menu-content'>
              <a href='#tokenomics' onclick='toggleMenu()'>TOKENOMICS</a>
              <a href='#roadmap' onclick='toggleMenu()'>ROADMAP</a>
              <a href='#vision' onclick='toggleMenu()'>VISION</a>
              <a href='https://whitepaper.zynethic.xyz/' target='_blank'>WHITEPAPER</a>
              <a href='https://app.zynethic.xyz/' target='_blank' style='color: var(--base-glow);'>ZYNETHIC APP</a>
              <hr style='border:0; border-top:1px solid var(--glass-border); margin:15px 0;'/>
              <p style='font-size:0.75rem; color:var(--base-glow); font-weight:800; margin:0;'>NETWORK: BASE L2</p>
            </div>
          </div>
        </nav>

        <div class='container'>
            <section class='hero'>
              <h1>ZYNETHIC</h1>
              <p>The Global Badge of Honor for the AI + Web3 Revolution. Join the community-driven movement building a transparent future of decentralized intelligence on Base.</p>
              <div class='btn-group'>
                <a class='btn btn-primary' href='https://basescan.org/address/0x553E1479999432aBF4D7c4aD613faac6b62Fcb5b' target='_blank'><i class='fa-solid fa-bolt'></i> VIEW ON BASE</a>
                <a class='btn btn-whitepaper' href='https://whitepaper.zynethic.xyz/' target='_blank'><i class='fa-solid fa-book-open'></i> READ WHITEPAPER</a>
              </div>
            </section>

            <div style='text-align:center; margin: 50px auto; max-width: 650px;'>
              <div style='background:rgba(0,247,255,0.1); color:var(--base-glow); padding:6px 18px; border-radius:30px; display:inline-block; font-size:0.75rem; font-weight:800; margin-bottom:20px; border:1px solid rgba(0,247,255,0.2);'>ECOSYSTEM PHASE 1: PRE-LAUNCH</div>
              <h2 style='margin:0 0 30px 0; font-size:1.8rem; font-weight: 800;'>$ZNTC Token Presale is STARTING SOON</h2>
              <div class='presale-card'>
                <div class='p-table-row' style='border-bottom:2px solid var(--base-blue); padding-bottom:15px;'>
                   <label>Description</label><span style='font-size:0.9rem; color:var(--text-dim); font-weight:600; text-transform:uppercase;'>Details</span>
                </div>
                <div class='p-table-row'><label>Name</label><span>ZYNETHIC</span></div>
                <div class='p-table-row'><label>Ticker</label><span>$ZNTC</span></div>
                <div class='p-table-row'><label>Network</label><span>Base Mainnet</span></div>
                <div class='p-table-row' style='border:none'><label>Allocation</label><span>14,000,000</span></div>
              </div>
              <a class='btn-pinksale-small' href='#' target='_blank'>STARTING SOON</a>
              <div class='security-grid'>
                <div class='sec-card'><i class='fa-solid fa-shield-virus'></i><h4 style='font-size:0.9rem; margin:0;'>Security Audit</h4></div>
                <div class='sec-card'><i class='fa-solid fa-lock'></i><h4 style='font-size:0.9rem; margin:0;'>LP 1Y Lock</h4></div>
                <div class='sec-card' onclick='openCAModal()' style='cursor:pointer'><i class='fa-solid fa-file-shield'></i><h4 style='font-size:0.9rem; margin:0;'>Smart Contract</h4></div>
              </div>
            </div>

            <h2 class='section-title' id='tokenomics'>Institutional Tokenomics</h2>
            <p style='text-align:center; color:var(--base-glow); font-size:0.8rem; font-weight:800; margin-bottom:20px; text-transform:uppercase;'>Protocol Status: Verified &amp; Immutable (No-Mint)</p>
            <div class='presale-card' style='max-width:900px; padding:30px;'>
              <div class='p-table-row' style='border-bottom:2px solid var(--base-blue); padding-bottom:15px;'>
                 <label style='flex: 2;'>Asset Group</label><label style='flex: 1; text-align: center;'>Allocation %</label><label style='flex: 1.5; text-align: right;'>Total ZNTC</label>
              </div>
              <div class='p-table-row'><label style='flex: 2;'>Community Presale</label><span style='flex: 1; text-align: center;'>35%</span><span style='flex: 1.5;'>14,000,000</span></div>
              <div class='p-table-row'><label style='flex: 2;'>Locked Liquidity</label><span style='flex: 1; text-align: center;'>25%</span><span style='flex: 1.5;'>10,000,000</span></div>
              <div class='p-table-row'><label style='flex: 2;'>Global Marketing</label><span style='flex: 1; text-align: center;'>15%</span><span style='flex: 1.5;'>6,000,000</span></div>
              <div class='p-table-row'><label style='flex: 2;'>Development Team</label><span style='flex: 1; text-align: center;'>15%</span><span style='flex: 1.5;'>6,000,000</span></div>
              <div class='p-table-row' style='border:none'><label style='flex: 2;'>Strategic Burn</label><span style='flex: 1; text-align: center;'>10%</span><span style='flex: 1.5;'>4,000,000</span></div>
            </div>

            <h2 class='section-title' id='roadmap'>Strategic Roadmap 2026</h2>
            <div class='roadmap-grid'>
              <div class='roadmap-item'><h3>Phase 1 (Q1)</h3><ul><li>Genesis Deployment</li><li>Security Audit</li><li>Global Presale</li></ul></div>
              <div class='roadmap-item'><h3>Phase 2 (Q2)</h3><ul><li>DEX Listing</li><li>CMC/CG Tracking</li><li>Deflationary Burn</li></ul></div>
              <div class='roadmap-item'><h3>Phase 3 (Q3)</h3><ul><li>AI Dashboard Beta</li><li>Vault Staking</li></ul></div>
              <div class='roadmap-item'><h3>Phase 4 (Q4)</h3><ul><li>Exchange Expansion</li><li>Full AI Engine</li></ul></div>
            </div>

            <h2 class='section-title' id='vision'>Our Philosophy</h2>
            <div style='text-align:center; max-width:850px; margin:0 auto;'>
              <p style='color:var(--text-dim); line-height:2.2; font-size:1.1rem;'>ZYNETHIC is built on the core principle of <strong>Code as Law</strong>. We are a sanctuary for global innovators, merging Artificial Intelligence with the immutable transparency of Base to return power back to the community.</p>
            </div>

            <h2 class='section-title'>F.A.Q</h2>
            <div class='faq-container'>
              <div class='faq-item' onclick='this.classList.toggle("active")'><div class='faq-question'>What is the main goal of $ZNTC? <i class='fa-solid fa-chevron-down'></i></div><div class='faq-answer'>$ZNTC is designed as a global community token to support the future development of AI + Web3.</div></div>
              <div class='faq-item' onclick='this.classList.toggle("active")'><div class='faq-question'>Why is ZYNETHIC built on Base? <i class='fa-solid fa-chevron-down'></i></div><div class='faq-answer'>Base Network offers institutional-grade security, low fees, and scalability.</div></div>
              <div class='faq-item' onclick='this.classList.toggle("active")'><div class='faq-question'>Is the Smart Contract safe? <i class='fa-solid fa-chevron-down'></i></div><div class='faq-answer'>Absolutely. Our contract is verified on Basescan and liquidity is locked.</div></div>
            </div>

            <div class='social-footer' style='text-align:center; margin-top:100px;'>
               <a href='https://x.com/zynethic' target='_blank'><i class='fa-brands fa-x-twitter'></i></a>
               <a href='https://t.me/zynethic_global_community' target='_blank'><i class='fa-brands fa-telegram'></i></a>
            </div>
            <footer>&#169; 2026 ZYNETHIC ECOSYSTEM. BUILT ON BASE L2.</footer>
        </div>

        <script>
          function toggleMenu() { document.getElementById("menu-content").classList.toggle("active"); }
          function openCAModal() { document.getElementById("caModal").style.display = "flex"; }
          function closeCAModal() { document.getElementById("caModal").style.display = "none"; document.getElementById("copy-msg").style.display = "none"; }
          function copyCA() {
              var caText = document.getElementById("ca-value").innerText;
              navigator.clipboard.writeText(caText).then(function() {
                  var msg = document.getElementById("copy-msg");
                  if(msg) msg.style.display = "block";
                  setTimeout(function() { if(msg) msg.style.display = "none"; }, 2000);
              });
          }
          window.onclick = function(event) { if (event.target == document.getElementById("caModal")) { closeCAModal(); } }
        </script>
      ` }} />
    </div>
  );
}
