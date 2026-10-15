const HTML = String.raw`<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#090a0c">
<title>BiiLHex Studio</title>
<style>
:root{--bg:#08090b;--panel:#101216;--panel2:#15171c;--line:#292d35;--text:#f2f3f5;--muted:#969ca7;--silver:#c8ccd3;--good:#8dd7b0;--bad:#ff9696}
*{box-sizing:border-box}body{margin:0;background:radial-gradient(ellipse at 50% -20%,#22252d 0%,var(--bg) 48%);color:var(--text);font:14px/1.5 Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Arial,sans-serif}
button,input,select,textarea{font:inherit}button{cursor:pointer}.app{min-height:100vh;display:grid;grid-template-columns:246px minmax(0,1fr)}
.sidebar{border-right:1px solid var(--line);background:#0b0c0f;padding:24px 15px;display:flex;flex-direction:column;gap:25px}
.brand{display:flex;align-items:center;gap:11px;padding:0 9px}.mark{width:39px;height:39px;border:1px solid #555b66;border-radius:12px;display:grid;place-items:center;background:linear-gradient(145deg,#292c33,#090a0c);font-weight:900;letter-spacing:-2px}.brand-name{font-weight:800;letter-spacing:1.4px}.brand-sub{font-size:10px;color:var(--muted);letter-spacing:2px}
.nav-label{font-size:10px;color:#737984;letter-spacing:1.7px;padding:0 11px;margin-bottom:8px}.nav{display:grid;gap:5px}.nav button{width:100%;border:1px solid transparent;background:transparent;color:#aeb3bd;text-align:left;padding:11px 12px;border-radius:10px;display:flex;gap:12px;align-items:center}.nav button:hover,.nav button.active{background:linear-gradient(90deg,#252830,#15171b);border-color:#333740;color:#fff}.nav .ico{width:19px;text-align:center;color:#c7cbd2;font-size:16px}.side-bottom{margin-top:auto}.profile{border:1px solid var(--line);border-radius:12px;padding:12px;display:flex;gap:10px;align-items:center}.avatar{width:34px;height:34px;border-radius:10px;background:#242730;display:grid;place-items:center;font-weight:800}.small{font-size:11px;color:var(--muted)}
main{min-width:0;padding:26px clamp(16px,3vw,42px) 38px}.topbar{display:flex;align-items:center;justify-content:space-between;gap:15px;border-bottom:1px solid var(--line);padding-bottom:20px;margin-bottom:28px}.crumb{color:var(--muted);font-size:12px}.top-actions{display:flex;gap:9px;align-items:center}.status-pill{border:1px solid #343941;border-radius:99px;padding:7px 11px;color:#b9bec7;font-size:11px}.menu-btn{display:none}
h1{font-size:clamp(25px,3vw,34px);letter-spacing:-1px;margin:0 0 7px}.subtitle{color:var(--muted);margin:0 0 25px;max-width:720px}.eyebrow{font-size:10px;letter-spacing:2px;color:#aeb3bd;text-transform:uppercase;margin-bottom:9px}
.page{display:none}.page.active{display:block}.grid{display:grid;gap:15px}.stats{grid-template-columns:repeat(4,minmax(0,1fr));margin:22px 0}.card{background:linear-gradient(145deg,rgba(24,26,32,.96),rgba(13,14,17,.98));border:1px solid var(--line);border-radius:15px;padding:19px;min-width:0}.stat-top{display:flex;justify-content:space-between;align-items:center;color:var(--muted);font-size:12px}.stat-icon{border:1px solid #3a3e47;border-radius:9px;padding:5px 8px;color:#e2e4e8}.stat-value{font-size:29px;font-weight:750;letter-spacing:-1px;margin:12px 0 2px}.stat-note{font-size:11px;color:var(--muted)}
.section-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:26px 0 13px}.section-head h2{font-size:16px;margin:0}.section-head p{color:var(--muted);font-size:12px;margin:3px 0 0}
.tools{grid-template-columns:repeat(3,minmax(0,1fr))}.tool{padding:18px;cursor:pointer;transition:transform .15s,border-color .15s}.tool:hover{transform:translateY(-2px);border-color:#555b66}.tool-icon{width:40px;height:40px;border-radius:12px;background:#20232a;border:1px solid #3b404a;display:grid;place-items:center;font-size:18px;margin-bottom:14px}.tool h3{font-size:14px;margin:0 0 5px}.tool p{font-size:12px;color:var(--muted);margin:0 0 14px}.arrow{color:#d3d6dc}
.row{display:flex;gap:12px;align-items:center;flex-wrap:wrap}.field{display:grid;gap:7px;margin-bottom:15px}.field label{color:#c2c6ce;font-size:12px}.field input,.field select,.field textarea{width:100%;background:#090a0d;border:1px solid #343842;border-radius:9px;padding:12px;color:#f2f3f5;outline:none}.field input:focus,.field select:focus,.field textarea:focus{border-color:#858b96}.field textarea{min-height:92px;resize:vertical}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}.btn{border:1px solid #414650;background:#191b20;color:#f2f3f5;border-radius:9px;padding:10px 14px;font-weight:650}.btn:hover{background:#24272e}.btn.primary{background:#e5e7eb;color:#101114;border-color:#e5e7eb}.btn:disabled{opacity:.5;cursor:not-allowed}.btn.danger{color:#ffaaaa;border-color:#673a3a}.panel-title{font-size:16px;margin:0 0 5px}.panel-desc{font-size:12px;color:var(--muted);margin:0 0 20px}.hint{font-size:11px;color:var(--muted);margin-top:7px}.notice{border:1px solid #383d46;background:#15171c;border-radius:10px;padding:12px;color:#c8ccd4;font-size:12px;margin:14px 0}.notice.warn{border-color:#68552f;color:#e5d1a2}.notice.good{border-color:#315843;color:var(--good)}.notice.bad{border-color:#653737;color:var(--bad)}
.table-wrap{overflow:auto;border:1px solid var(--line);border-radius:12px}.table{width:100%;border-collapse:collapse;min-width:600px}.table th,.table td{text-align:left;padding:13px 15px;border-bottom:1px solid var(--line);font-size:12px}.table th{color:var(--muted);font-weight:600;background:#121419}.table tr:last-child td{border-bottom:0}.empty{text-align:center;color:var(--muted);padding:35px 12px!important}
.settings-layout{display:grid;grid-template-columns:1fr 1fr;gap:15px}.checkline{display:flex;gap:9px;align-items:flex-start;color:#c5c9d0;font-size:12px}.checkline input{margin-top:4px}
footer{border-top:1px solid var(--line);padding-top:20px;margin-top:35px;display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;color:#707681;font-size:11px}
@media(max-width:1050px){.stats{grid-template-columns:repeat(2,minmax(0,1fr))}.tools{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:720px){.app{display:block}.sidebar{position:fixed;z-index:5;inset:0 auto 0 0;width:260px;transform:translateX(-105%);transition:transform .2s;box-shadow:20px 0 50px #0008}.sidebar.open{transform:translateX(0)}.menu-btn{display:inline-block}main{padding:17px 14px 28px}.topbar{margin-bottom:23px}.stats{gap:10px}.card{padding:15px}.stat-value{font-size:25px}.tools,.settings-layout,.form-grid{grid-template-columns:1fr}.top-actions .status-pill{display:none}}
</style>
</head>
<body>
<div class="app">
<aside class="sidebar" id="sidebar">
  <div class="brand"><div class="mark">BH</div><div><div class="brand-name">BiiLHex</div><div class="brand-sub">STUDIO</div></div></div>
  <div><div class="nav-label">WORKSPACE</div><nav class="nav" id="nav">
    <button class="active" data-page="dashboard"><span class="ico">▦</span>Dashboard</button>
    <button data-page="upload"><span class="ico">⇧</span>Upload Center</button>
    <button data-page="animations"><span class="ico">◈</span>Animations</button>
    <button data-page="library"><span class="ico">▤</span>My Library</button>
    <button data-page="history"><span class="ico">◷</span>Upload History</button>
  </nav></div>
  <div><div class="nav-label">PREFERENCES</div><nav class="nav"><button data-page="settings"><span class="ico">⚙</span>Settings</button></nav></div>
  <div class="side-bottom"><div class="profile"><div class="avatar">BH</div><div><strong>BiiLHex Studio</strong><div class="small">Asset workspace</div></div></div><div class="small" style="padding:14px 8px 0">by BiiLxLangz</div></div>
</aside>
<main>
  <div class="topbar"><div class="row"><button class="btn menu-btn" id="menu">☰</button><div><div class="crumb">BiiLHex Studio / <span id="crumb">Dashboard</span></div></div></div><div class="top-actions"><span class="status-pill" id="connection">● API belum dicek</span><button class="btn" id="checkApi">Check API</button></div></div>
  <section class="page active" id="page-dashboard">
    <div class="eyebrow">Creator workspace</div><h1>Dashboard</h1><p class="subtitle">Satu tempat untuk mengelola aset Roblox. Upload dan koneksi API akan aktif setelah backend dikonfigurasi.</p>
    <div class="grid stats">
      <div class="card"><div class="stat-top">Library Assets <span class="stat-icon">▤</span></div><div class="stat-value" id="statAssets">0</div><div class="stat-note">Aset tersimpan di perangkat ini</div></div>
      <div class="card"><div class="stat-top">Upload History <span class="stat-icon">◷</span></div><div class="stat-value" id="statHistory">0</div><div class="stat-note">Catatan aktivitas lokal</div></div>
      <div class="card"><div class="stat-top">Animations <span class="stat-icon">◈</span></div><div class="stat-value" id="statAnimations">0</div><div class="stat-note">Aset bertipe Animation</div></div>
      <div class="card"><div class="stat-top">API Status <span class="stat-icon">⌁</span></div><div class="stat-value" style="font-size:19px" id="statApi">Unknown</div><div class="stat-note">Status endpoint backend</div></div>
    </div>
    <div class="section-head"><div><h2>Creative Tools</h2><p>Pilih fitur untuk mulai bekerja.</p></div></div>
    <div class="grid tools">
      <div class="card tool" data-go="upload"><div class="tool-icon">⇧</div><h3>Upload Center</h3><p>Kirim file asset ke Roblox Open Cloud.</p><span class="arrow">Open tool ↗</span></div>
      <div class="card tool" data-go="animations"><div class="tool-icon">◈</div><h3>Animations</h3><p>Upload dan catat aset animasi.</p><span class="arrow">Open tool ↗</span></div>
      <div class="card tool" data-go="library"><div class="tool-icon">▤</div><h3>My Library</h3><p>Lihat dan kelola catatan aset.</p><span class="arrow">Open tool ↗</span></div>
      <div class="card tool" data-go="history"><div class="tool-icon">◷</div><h3>Upload History</h3><p>Periksa hasil permintaan upload.</p><span class="arrow">Open tool ↗</span></div>
      <div class="card tool" data-go="settings"><div class="tool-icon">⚙</div><h3>Settings</h3><p>Periksa konfigurasi dan koneksi.</p><span class="arrow">Open settings ↗</span></div>
      <div class="card"><div class="tool-icon">◇</div><h3>Studio Status</h3><p id="dashboardStatus">Menunggu pemeriksaan API.</p><span class="small">BiiLHex • Black Silver</span></div>
    </div>
    <div class="notice warn">Keamanan: jangan masukkan API key ke halaman publik. Simpan secret di konfigurasi backend Cloudflare. Login OAuth per pengguna memerlukan konfigurasi aplikasi Roblox tersendiri.</div>
  </section>

  <section class="page" id="page-upload">
    <div class="eyebrow">Asset management</div><h1>Upload Center</h1><p class="subtitle">Kirim asset melalui backend Roblox Open Cloud yang sudah dikonfigurasi.</p>
    <div class="card"><h2 class="panel-title">Asset details</h2><p class="panel-desc">Isi metadata dan pilih file. Maksimal 20 MB pada antarmuka ini.</p>
      <form id="uploadForm">
        <div class="form-grid"><div class="field"><label for="targetType">Creator type</label><select id="targetType" name="targetType"><option value="user">User account</option><option value="group">Group</option></select></div><div class="field"><label for="creatorId">Creator ID</label><input id="creatorId" name="creatorId" inputmode="numeric" pattern="[0-9]+" required placeholder="Roblox user/group ID"></div></div>
        <div class="field"><label for="assetType">Asset type</label><select id="assetType" name="assetType"><option value="Audio">Audio</option><option value="Animation">Animation</option><option value="Decal">Decal / Image</option><option value="Model">Model</option></select></div>
        <div class="field"><label for="assetName">Asset name</label><input id="assetName" name="name" required maxlength="50" placeholder="Nama asset"></div>
        <div class="field"><label for="description">Description</label><textarea id="description" name="description" maxlength="1000" placeholder="Deskripsi (opsional)"></textarea></div>
        <div class="field"><label for="file">Choose file</label><input id="file" name="file" type="file" required><div class="hint">Roblox menentukan format dan kelayakan berdasarkan jenis asset serta izin akun.</div></div>
        <div class="row"><button class="btn primary" id="uploadButton" type="submit">Submit upload</button><button class="btn" type="reset">Reset form</button></div>
        <div id="uploadStatus" class="notice" role="status">Siap. Upload memerlukan API key yang valid di backend.</div>
      </form>
    </div>
  </section>

  <section class="page" id="page-animations">
    <div class="eyebrow">Animation workspace</div><h1>Animations</h1><p class="subtitle">Upload animasi melalui form dengan jenis asset Animation, lalu catat ID-nya di Library.</p>
    <div class="card"><h2 class="panel-title">Quick start</h2><p class="panel-desc">Buka Upload Center dengan jenis aset Animation yang sudah dipilih.</p><button class="btn primary" id="openAnimationUpload">Upload Animation ↗</button></div>
    <div class="section-head"><div><h2>Saved animations</h2><p>Catatan animasi di perangkat ini.</p></div></div>
    <div class="table-wrap"><table class="table"><thead><tr><th>Name</th><th>Asset ID</th><th>Saved</th></tr></thead><tbody id="animationRows"></tbody></table></div>
  </section>

  <section class="page" id="page-library">
    <div class="eyebrow">Your assets</div><h1>My Library</h1><p class="subtitle">Catatan asset yang disimpan di browser ini. Data lokal tidak otomatis tersinkron ke perangkat lain.</p>
    <div class="row" style="margin-bottom:14px"><input id="librarySearch" placeholder="Cari nama atau ID asset..." style="flex:1;min-width:180px;background:#090a0d;border:1px solid #343842;border-radius:9px;padding:11px;color:#eee"><button class="btn" id="addAsset">+ Add asset ID</button><button class="btn" id="exportLibrary">Export JSON</button></div>
    <div class="table-wrap"><table class="table"><thead><tr><th>Name</th><th>Type</th><th>Asset ID</th><th>Saved</th><th>Action</th></tr></thead><tbody id="libraryRows"></tbody></table></div>
    <div class="notice">Asset ID yang ditambahkan manual hanya menjadi catatan lokal. Website ini tidak bisa memastikan kepemilikan atau status moderasi asset tanpa integrasi API yang sesuai.</div>
  </section>

  <section class="page" id="page-history">
    <div class="eyebrow">Activity</div><h1>Upload History</h1><p class="subtitle">Riwayat yang dicatat oleh browser ini, termasuk hasil dan error upload.</p>
    <div class="row" style="margin-bottom:14px"><button class="btn" id="exportHistory">Export history</button><button class="btn danger" id="clearHistory">Clear history</button></div>
    <div class="table-wrap"><table class="table"><thead><tr><th>Time</th><th>Name</th><th>Type</th><th>Status</th><th>Operation / Details</th></tr></thead><tbody id="historyRows"></tbody></table></div>
  </section>

  <section class="page" id="page-settings">
    <div class="eyebrow">Configuration</div><h1>Settings</h1><p class="subtitle">Pengaturan tampilan dan informasi backend. Secret API tidak disimpan di browser.</p>
    <div class="settings-layout">
      <div class="card"><h2 class="panel-title">Backend connection</h2><p class="panel-desc">Gunakan endpoint relatif agar halaman dapat di-host bersama Worker.</p><div class="field"><label>Health endpoint</label><input value="/api/health" readonly></div><div class="field"><label>Upload endpoint</label><input value="/api/assets/upload" readonly></div><button class="btn primary" id="settingsCheck">Test connection</button><div id="settingsStatus" class="notice">Belum diperiksa.</div></div>
      <div class="card"><h2 class="panel-title">Local data</h2><p class="panel-desc">Data ini tersimpan pada browser/perangkat saat ini.</p><div class="field"><label>Library entries</label><input id="settingsAssetCount" readonly value="0"></div><div class="field"><label>History entries</label><input id="settingsHistoryCount" readonly value="0"></div><button class="btn" id="backupData">Download local backup</button></div>
    </div>
    <div class="notice warn">Jangan menempelkan API key ke kolom website atau membagikannya. Untuk website publik yang mengunggah ke akun masing-masing, implementasikan OAuth Roblox dengan validasi server dan penyimpanan token yang aman.</div>
  </section>
  <footer><span>BiiLHex Studio · by BiiLxLangz</span><span>Black / Silver Interface</span></footer>
</main>
</div>
<script>
const $=s=>document.querySelector(s);
const store={
 get(k){try{return JSON.parse(localStorage.getItem('bh_'+k)||'[]')}catch{return []}},
 set(k,v){localStorage.setItem('bh_'+k,JSON.stringify(v))}
};
let currentPage='dashboard';
function safe(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function dateNow(){return new Date().toLocaleString()}
function navigate(page){
 currentPage=page;
 document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id==='page-'+page));
 document.querySelectorAll('[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
 $('#crumb').textContent=({dashboard:'Dashboard',upload:'Upload Center',animations:'Animations',library:'My Library',history:'Upload History',settings:'Settings'})[page]||page;
 $('#sidebar').classList.remove('open');render();
}
document.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.page)));
document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>navigate(b.dataset.go)));
$('#menu').onclick=()=>$('#sidebar').classList.toggle('open');
function download(name,data){const a=document.createElement('a');const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});a.href=URL.createObjectURL(blob);a.download=name;a.click();URL.revokeObjectURL(a.href)}
function render(){
 const assets=store.get('library'),hist=store.get('history');
 $('#statAssets').textContent=assets.length;$('#statHistory').textContent=hist.length;
 $('#statAnimations').textContent=assets.filter(a=>a.type==='Animation').length;
 $('#settingsAssetCount').value=assets.length;$('#settingsHistoryCount').value=hist.length;
 const filter=($('#librarySearch')?.value||'').toLowerCase();
 const shown=assets.filter(a=>(a.name+' '+a.id+' '+a.type).toLowerCase().includes(filter));
 $('#libraryRows').innerHTML=shown.length?shown.map(a=>\`<tr><td>${safe(a.name)}</td><td>${safe(a.type)}</td><td>${safe(a.id||'—')}</td><td>${safe(a.saved||'')}</td><td><button class="btn danger" data-delete="${safe(a.key)}">Delete</button></td></tr>\`).join(''):'<tr><td class="empty" colspan="5">Belum ada aset tersimpan.</td></tr>';
 $('#animationRows').innerHTML=assets.filter(a=>a.type==='Animation').map(a=>\`<tr><td>${safe(a.name)}</td><td>${safe(a.id||'—')}</td><td>${safe(a.saved||'')}</td></tr>\`).join('')||'<tr><td colspan="3" class="empty">Belum ada animasi tersimpan.</td></tr>';
 $('#historyRows').innerHTML=hist.length?hist.map(h=>\`<tr><td>${safe(h.time)}</td><td>${safe(h.name)}</td><td>${safe(h.type)}</td><td>${safe(h.status)}</td><td>${safe(h.detail)}</td></tr>\`).join(''):'<tr><td colspan="5" class="empty">Belum ada riwayat upload.</td></tr>';
 document.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>{store.set('library',store.get('library').filter(a=>a.key!==b.dataset.delete));render()});
}
async function checkApi(){
 $('#connection').textContent='● Checking...';$('#statApi').textContent='Checking';
 try{const r=await fetch('/api/health',{cache:'no-store'});const d=await r.json();if(!r.ok||!d.ok)throw Error('Health check failed');
 $('#connection').textContent='● API online';$('#statApi').textContent='Online';$('#dashboardStatus').textContent='Backend health endpoint merespons.';
 $('#settingsStatus').className='notice good';$('#settingsStatus').textContent='API aktif: '+(d.service||'service')+'. Ini belum memverifikasi API key Roblox.';
 }catch(e){$('#connection').textContent='● API offline';$('#statApi').textContent='Offline';$('#dashboardStatus').textContent='Endpoint /api/health tidak dapat diakses.';
 $('#settingsStatus').className='notice bad';$('#settingsStatus').textContent='Tidak dapat menghubungi /api/health. Pastikan backend sudah di-deploy.'}
}
$('#checkApi').onclick=checkApi;$('#settingsCheck').onclick=checkApi;
$('#openAnimationUpload').onclick=()=>{navigate('upload');$('#assetType').value='Animation'};
$('#assetType').addEventListener('change',()=>{if($('#assetType').value==='Animation')$('#uploadForm').dataset.type='Animation'});
$('#uploadForm').onsubmit=async e=>{
 e.preventDefault();
 const file=$('#file').files[0],btn=$('#uploadButton'),status=$('#uploadStatus');
 if(!file){status.className='notice bad';status.textContent='Pilih file terlebih dahulu.';return}
 if(file.size>20*1024*1024){status.className='notice bad';status.textContent='Ukuran file melewati batas antarmuka 20 MB.';return}
 const data=new FormData(e.currentTarget);btn.disabled=true;status.className='notice';status.textContent='Mengirim permintaan ke backend...';
 let result={name:data.get('name'),type:data.get('assetType'),time:dateNow(),status:'Failed',detail:'Tidak diketahui'};
 try{
  const r=await fetch('/api/assets/upload',{method:'POST',body:data});
  const out=await r.json();
  if(!r.ok)throw Error(out.error||out.details||('HTTP '+r.status));
  result.status='Accepted';result.detail=out.operationPath||out.message||'Roblox menerima permintaan; status akhir belum diverifikasi.';
  const assetId=out.assetId||out.result?.assetId||'';
  if(assetId)store.set('library',[{key:crypto.randomUUID(),name:result.name,type:result.type,id:String(assetId),saved:dateNow()},...store.get('library')]);
  status.className='notice good';status.textContent='Permintaan diterima backend. '+result.detail+(assetId?' Asset ID: '+assetId:'');
 }catch(err){result.detail=err.message;status.className='notice bad';status.textContent='Upload gagal: '+err.message}
 finally{const rows=store.get('history');rows.unshift(result);store.set('history',rows.slice(0,200));btn.disabled=false;render()}
};
$('#librarySearch').addEventListener('input',render);
$('#addAsset').onclick=()=>{
 const name=prompt('Nama asset:');if(!name)return;
 const id=prompt('Roblox asset ID:');if(!id||!/^\d+$/.test(id)){alert('ID harus berupa angka.');return}
 const type=prompt('Jenis asset (Audio, Animation, Decal, Model):','Audio')||'Audio';
 store.set('library',[{key:crypto.randomUUID(),name:name.slice(0,100),id,type,saved:dateNow()},...store.get('library')]);render()
};
$('#exportLibrary').onclick=()=>download('biilhex-library.json',store.get('library'));
$('#exportHistory').onclick=()=>download('biilhex-history.json',store.get('history'));
$('#backupData').onclick=()=>download('biilhex-backup.json',{library:store.get('library'),history:store.get('history'),exportedAt:dateNow()});
$('#clearHistory').onclick=()=>{if(confirm('Hapus semua riwayat lokal?')){store.set('history',[]);render()}};
render();checkApi();
</script>
</body>
</html>
`;

const json = (data, status = 200) => Response.json(data, {
  status,
  headers: { "Cache-Control": "no-store" }
});

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "GET" && url.pathname === "/api/health") {
      return json({ ok: true, service: "BiiLHex Studio" });
    }

    if (request.method === "GET" && url.pathname === "/") {
      return new Response(HTML, {
        headers: {
          "content-type": "text/html; charset=utf-8",
          "X-Content-Type-Options": "nosniff",
          "Cache-Control": "no-cache"
        }
      });
    }

    if (request.method === "POST" && url.pathname === "/api/assets/upload") {
      if (!env.ROBLOX_API_KEY) {
        return json({
          error: "ROBLOX_API_KEY belum disetel di Cloudflare Worker Secrets."
        }, 500);
      }

      let form;
      try {
        form = await request.formData();
      } catch {
        return json({ error: "Form upload tidak valid." }, 400);
      }

      const targetType = String(form.get("targetType") || "");
      const creatorId = String(form.get("creatorId") || "");
      const name = String(form.get("name") || "").trim();
      const description = String(form.get("description") || "").trim();
      const assetType = String(form.get("assetType") || "");
      const file = form.get("file");

      if (
        !["user", "group"].includes(targetType) ||
        !/^\d+$/.test(creatorId) ||
        !name || name.length > 50 ||
        description.length > 1000 ||
        !["Audio", "Animation", "Decal", "Model"].includes(assetType) ||
        !(file instanceof File) || file.size === 0 ||
        file.size > 20 * 1024 * 1024
      ) {
        return json({
          error: "Data tidak valid. Periksa creator ID, nama, jenis aset, dan file maksimal 20 MB."
        }, 400);
      }

      const creator = targetType === "group"
        ? { groupId: Number(creatorId) }
        : { userId: Number(creatorId) };

      const metadata = {
        assetType,
        displayName: name,
        description,
        creationContext: { creator }
      };

      const body = new FormData();
      body.append("request", new Blob([JSON.stringify(metadata)], {
        type: "application/json"
      }));
      body.append("fileContent", file, file.name);

      let response;
      try {
        response = await fetch("https://apis.roblox.com/assets/v1/assets", {
          method: "POST",
          headers: { "x-api-key": env.ROBLOX_API_KEY },
          body
        });
      } catch {
        return json({ error: "Tidak dapat menghubungi Roblox Open Cloud." }, 502);
      }

      const raw = await response.text();
      let result;
      try { result = JSON.parse(raw); } catch { result = {}; }

      if (!response.ok) {
        return json({
          error: "Roblox menolak permintaan upload.",
          details: result.message || result.error || ("HTTP " + response.status)
        }, response.status);
      }

      return json({
        ok: true,
        message: "Permintaan upload diterima Roblox. Status akhir mungkin masih diproses.",
        operationPath: result.path || null,
        result
      });
    }

    return json({ error: "Endpoint tidak ditemukan." }, 404);
  }
};
