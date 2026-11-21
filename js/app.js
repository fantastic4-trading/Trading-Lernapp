const app=document.getElementById('app');
const score=JSON.parse(localStorage.getItem('tradingScore')||'{}');
function candleSVG(k){const cs=CANDLES[k];const w=40*cs.length+20;let s=`<svg viewBox="0 0 ${w} 110" width="${Math.min(w*1.6,260)}" height="170">`;
cs.forEach(([o,h,l,c],i)=>{const x=20+i*40,col=c>=o?'#22c55e':'#ef4444',y=v=>105-v;s+=`<line x1="${x+10}" y1="${y(h)}" x2="${x+10}" y2="${y(l)}" stroke="${col}" stroke-width="2"/><rect x="${x}" y="${y(Math.max(o,c))}" width="20" height="${Math.max(2,Math.abs(c-o))}" fill="${col}"/>`});return s+'</svg>';}
function trendSVG(k){const col={up:'#22c55e',down:'#ef4444',range:'#eab308'}[k]||'#3b82f6';let s=`<svg viewBox="0 0 100 100" width="240" height="160"><polyline points="${TRENDS[k]}" fill="none" stroke="${col}" stroke-width="2"/>`;
if(k=='dca')s+='<circle cx="25" cy="45" r="3" fill="#22c55e"/><circle cx="50" cy="65" r="3" fill="#22c55e"/><circle cx="75" cy="82" r="3" fill="#22c55e"/><line x1="0" y1="64" x2="100" y2="64" stroke="#eab308" stroke-dasharray="3"/><text x="2" y="61" fill="#eab308" font-size="6">Ø Einstieg</text>';
if(k=='grab')s+='<line x1="0" y1="35" x2="100" y2="35" stroke="#94a3b8" stroke-dasharray="3"/><text x="2" y="31" fill="#94a3b8" font-size="6">altes Hoch (Liquidität)</text><circle cx="62" cy="15" r="3" fill="#ef4444"/>';
if(k=='breakout')s+='<line x1="0" y1="44" x2="100" y2="44" stroke="#94a3b8" stroke-dasharray="3"/><circle cx="75" cy="42" r="3" fill="#22c55e"/><text x="70" y="52" fill="#94a3b8" font-size="6">Retest</text>';
if(k=='fib'){[[0,10],[0.382,40.6],[0.5,50],[0.618,59.4],[0.786,72.9],[1,90]].forEach(([f,y])=>{s+=`<line x1="45" y1="${y}" x2="100" y2="${y}" stroke="${f>=0.618&&f<=0.786?'#eab308':'#475569'}" stroke-dasharray="2"/><text x="88" y="${y-1}" fill="#94a3b8" font-size="5">${f}</text>`});}
if(k=='range')s+='<line x1="0" y1="25" x2="100" y2="25" stroke="#94a3b8" stroke-dasharray="3"/><line x1="0" y1="72" x2="100" y2="72" stroke="#94a3b8" stroke-dasharray="3"/>';return s+'</svg>';}
function patternSVG(k){const P=PATTERNS[k];let s='<svg viewBox="0 0 100 100" width="240" height="160">';
(P.h||[]).forEach(([y,t])=>{s+=`<line x1="0" y1="${y}" x2="100" y2="${y}" stroke="#eab308" stroke-dasharray="3"/><text x="2" y="${y-2}" fill="#eab308" font-size="6">${t}</text>`});
(P.l||[]).forEach(([a,b,c,d])=>{s+=`<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="#94a3b8" stroke-dasharray="3"/>`});
return s+`<polyline points="${P.p}" fill="none" stroke="#3b82f6" stroke-width="2"/></svg>`;}
function pic(k){return !k?'':(CANDLES[k]?candleSVG(k):(typeof PATTERNS!=='undefined'&&PATTERNS[k]?patternSVG(k):trendSVG(k)));}
const LV=['','Einsteiger','Fortgeschritten','Profi'],PASS=0.8;
function pct(t){return score[t]===undefined?0:score[t]/DATA[t].quiz.length;}
function unlocked(l){if(localStorage.getItem('alleFrei'))return true;for(let i=1;i<l;i++)for(const t in DATA)if((DATA[t].level||1)==i&&pct(t)<PASS)return false;return true;}
function home(){let s='';for(let l=1;l<=3;l++){const ts=Object.keys(DATA).filter(t=>(DATA[t].level||1)==l),open=unlocked(l);
s+=`<h2>${open?'🔓':'🔒'} Level ${l}: ${LV[l]}</h2>${open?'':'<p class="small">Freischalten: alle Quiz im vorherigen Level mit mindestens 80 % bestehen.</p>'}<div class="grid">`+ts.map(t=>`<div class="card" style="${open?'':'opacity:.4'}"><b>${t}</b><br><span class="small">${DATA[t].cards.length} Karten · ${score[t]!==undefined?'Quiz: '+score[t]+'/'+DATA[t].quiz.length+(pct(t)>=PASS?' ✅':''):'Quiz offen'}</span><br>${open?`<button onclick="intro('${t}')">Lernen</button><button class="alt" onclick="quiz('${t}',0,0)">Quiz</button>`:''}</div>`).join('')+'</div>';}
s+=`<h2>Werkzeuge</h2><div class="grid"><div class="card"><b>📊 Chart-Training</b><br><span class="small">Muster im Chart erkennen</span><br><button onclick="chartTrain()">Starten</button></div><div class="card"><b>📒 Journal</b><br><span class="small">Trades eintragen und auswerten</span><br><button onclick="journal()">Öffnen</button></div><div class="card"><b>✅ Trade-Checkliste</b><br><button onclick="check()">Öffnen</button></div><div class="card"><b>🧮 Rechner</b><br><span class="small">Risiko · CRV · Zinseszins · DCA · Gebühren</span><br><button onclick="tools()">Öffnen</button></div><div class="card"><b>Nachschlagen</b><br><button onclick="lookup()">Suche</button></div></div>
<p class="small">Nur zu Lernzwecken, keine Anlageberatung. <a href="#" style="color:#64748b" onclick="localStorage.setItem('alleFrei',1);home()">Lehrermodus: alles freischalten</a></p>`;app.innerHTML=s;}
const CHECK=['Trend auf höherer Zeiteinheit bestimmt','Einstieg an einem klaren Level (Unterstützung, Fib, FVG, Liquidity Grab)','Stop-Loss dort, wo die Idee widerlegt ist','CRV mindestens 1:2, auch nach Gebühren','Positionsgröße mit 1 % Risiko berechnet','Hebel passt, Liquidationspreis liegt weit hinter dem Stop','Tages- und Wochenlimit noch nicht erreicht','Keine wichtigen US-Daten in den nächsten 30 Minuten','Kein FOMO, kein Revenge-Trade, ich bin ruhig','Trade im Journal vorbereitet'];
function check(){app.innerHTML='<h2>Trade-Checkliste</h2><p class="small">Erst wenn alles abgehakt ist, wird der Trade freigegeben.</p><div class="card" style="text-align:left">'+CHECK.map((c,i)=>`<label style="display:block;padding:6px 0"><input type="checkbox" class="ck" style="width:auto" onchange="ckUp()"> ${c}</label>`).join('')+'</div><div id="ckr" class="card"></div><button class="alt" onclick="check()">Zurücksetzen</button><button class="alt" onclick="home()">Start</button>';ckUp();}
function ckUp(){const b=[...document.querySelectorAll('.ck')],n=b.filter(x=>x.checked).length;document.getElementById('ckr').innerHTML=n==b.length?'<b style="color:#22c55e">✅ Trade freigegeben</b>':`<b style="color:#ef4444">⛔ Noch ${b.length-n} Punkte offen, kein Trade</b>`;}
function intro(t){app.innerHTML=`<h2>${t}</h2><div class="card">${DATA[t].intro}</div><button onclick="cards('${t}',0)">Lernkarten starten</button>${t=='Risikomanagement'?'<button onclick="tools()">Rechner</button>':''}<button class="alt" onclick="home()">Start</button>`;}
function cards(t,i,back){const c=DATA[t].cards[i],n=DATA[t].cards.length;app.innerHTML=`<h2>${t}</h2><p class="small">Karte ${i+1}/${n}, antippen zum Umdrehen</p><div class="card flip" onclick="cards('${t}',${i},${!back})"><b>${c[0]}</b><br>${pic(c[2])}${back?'<p>'+c[1]+'</p>':''}</div>
<button class="alt" onclick="cards('${t}',${Math.max(0,i-1)})">◀</button><button onclick="${i+1<n?`cards('${t}',${i+1})`:`quiz('${t}',0,0)`}">${i+1<n?'▶':'Zum Quiz'}</button><button class="alt" onclick="home()">Start</button>`;}
function quiz(t,i,p){const q=DATA[t].quiz;if(i>=q.length){if(score[t]===undefined||p>score[t]){score[t]=p;localStorage.setItem('tradingScore',JSON.stringify(score));}
app.innerHTML=`<h2>${t}</h2><div class="card">Ergebnis: ${p}/${q.length}</div><button onclick="quiz('${t}',0,0)">Nochmal</button><button class="alt" onclick="home()">Start</button>`;return;}
const [f,o,r]=q[i];app.innerHTML=`<h2>${t}</h2><p class="small">Frage ${i+1}/${q.length}</p><div class="card">${f}</div>`+o.map((x,k)=>`<button class="opt alt" id="o${k}">${x}</button>`).join('');
o.forEach((x,k)=>document.getElementById('o'+k).onclick=()=>{document.querySelectorAll('.opt').forEach(b=>b.disabled=true);document.getElementById('o'+r).classList.add('ok');if(k!==r)document.getElementById('o'+k).classList.add('bad');setTimeout(()=>quiz(t,i+1,p+(k===r?1:0)),1300);});}
function lookup(){app.innerHTML=`<h2>Nachschlagen</h2><input id="s" placeholder="z. B. Funding, OI, Hammer …"><div id="r"></div><button class="alt" onclick="home()">Start</button>`;
const all=[];for(const t in DATA)DATA[t].cards.forEach(c=>all.push([t,...c]));const r=document.getElementById('r');
const show=q=>{r.innerHTML=all.filter(a=>(a[1]+a[2]).toLowerCase().includes(q.toLowerCase())).map(a=>`<div class="g"><b>${a[1]}</b> <span class="small">(${a[0]})</span><br>${a[2]}</div>`).join('');};
document.getElementById('s').oninput=e=>show(e.target.value);show('');}
function tools(){app.innerHTML=`<h2>Rechner</h2>
<div class="card" style="text-align:left"><b>1. Positionsgröße & Risiko</b><br>
Kapital ($)<input id="k" type="number" value="3000">Risiko pro Trade (%)<input id="r" type="number" value="1" step="0.1">
Einstieg<input id="e" type="number" value="100">Stop-Loss<input id="s" type="number" value="98">CRV (Gewinn : 1)<input id="c" type="number" value="3" step="0.5">
<div id="o1"></div></div>
<div class="card" style="text-align:left"><b>2. CRV-Simulation</b><br>
Anzahl Trades<input id="n" type="number" value="100">Trefferquote (%)<input id="q" type="number" value="30">
<button onclick="sim()">Neu simulieren</button><div id="o2"></div><canvas id="cv" width="700" height="260" style="width:100%;background:#0f172a;border-radius:8px"></canvas></div>
<div class="card" style="text-align:left"><b>3. Zinseszins mit Trefferquote</b><br>
Startkapital ($)<input id="zk" type="number" value="3000">Risiko pro Trade (%)<input id="zr" type="number" value="1" step="0.1">
CRV (Gewinn : 1)<input id="zc" type="number" value="3" step="0.5">Trefferquote (%)<input id="zq" type="number" value="30">
Trades pro Woche<input id="zw" type="number" value="4">Wochen<input id="zn" type="number" value="52"><div id="o3"></div>
<canvas id="cz" width="700" height="220" style="width:100%;background:#0f172a;border-radius:8px"></canvas>
<p class="small">So liest du das: Pro Trade riskierst du einen festen Prozentsatz deines <i>aktuellen</i> Kontos. Ein Gewinn bringt Risiko × CRV, ein Verlust kostet das Risiko. Die blaue Linie zeigt den erwarteten Verlauf mit Wiederanlage (Zinseszins), die graue denselben Erwartungswert ohne Wiederanlage. Die grüne Linie ist ein zufälliger Beispieldurchlauf: So holprig sieht die Realität aus, obwohl die Regeln gleich bleiben. Gebühren und Slippage sind nicht eingerechnet. Ist der Erwartungswert negativ, arbeitet der Zinseszins gegen dich.</p></div>
<div class="card" style="text-align:left"><b>4. DCA-Durchschnittspreis</b><br>
Kaufkurse (durch Komma getrennt)<input id="dp" value="50, 40, 30">Betrag pro Kauf ($)<input id="da" type="number" value="100">Gemeinsamer Stop<input id="ds" type="number" value="25"><div id="o4"></div></div>
<div class="card" style="text-align:left"><b>5. Gebühren-Rechner</b><br>
Stop-Abstand (%)<input id="gs" type="number" value="0.35" step="0.05">Gebühr Einstieg (%)<input id="ge" type="number" value="0.06" step="0.01">Gebühr Ausstieg (%)<input id="ga" type="number" value="0.06" step="0.01">CRV brutto (Gewinn : 1)<input id="gc" type="number" value="2" step="0.5"><div id="o5"></div>
<p class="small">Typisch: Limit/Maker ca. 0,02 %, Market/Taker ca. 0,05–0,06 % je Seite. Die Gebühr fällt auf den Positionswert an. Je enger der Stop, desto größer die Position und desto teurer der Trade in R.</p></div>
<button class="alt" onclick="home()">Start</button>`;
['gs','ge','ga','gc'].forEach(i=>document.getElementById(i).oninput=fees);fees();
['dp','da','ds'].forEach(i=>document.getElementById(i).oninput=dca);dca();
['k','r','e','s','c'].forEach(i=>document.getElementById(i).oninput=calc);['zk','zr','zc','zq','zw','zn'].forEach(i=>document.getElementById(i).oninput=zins);
['n','q','r','c','k'].forEach(i=>document.getElementById(i).addEventListener('input',sim));calc();sim();zins();}
const v=i=>parseFloat(document.getElementById(i).value)||0,eur=x=>x.toLocaleString('en-US',{style:'currency',currency:'USD'});
function calc(){const k=v('k'),r=v('r'),e=v('e'),s=v('s'),c=v('c');const risk=k*r/100,d=Math.abs(e-s),qty=d?risk/d:0,tp=e>s?e+d*c:e-d*c;
document.getElementById('o1').innerHTML=`<p>Risiko pro Trade: <b>${eur(risk)}</b><br>Möglicher Gewinn: <b style="color:#22c55e">${eur(risk*c)}</b><br>Positionsgröße: <b>${qty.toFixed(4)} Stück</b> (Wert ${eur(qty*e)})<br>Take-Profit bei: <b>${tp.toFixed(2)}</b><br>Richtung: ${e>s?'Long':'Short'}<br>Break-even-Trefferquote: <b>${(100/(1+c)).toFixed(1)} %</b></p>`;}
function line(cv,series,cols){const x=cv.getContext('2d');x.clearRect(0,0,cv.width,cv.height);const all=series.flat(),mx=Math.max(...all),mn=Math.min(...all),pad=20;
const Y=y=>cv.height-pad-(y-mn)/((mx-mn)||1)*(cv.height-2*pad);x.fillStyle='#94a3b8';x.font='12px sans-serif';x.fillText(eur(mx),4,14);x.fillText(eur(mn),4,cv.height-4);
series.forEach((s,j)=>{x.strokeStyle=cols[j];x.lineWidth=2;x.beginPath();s.forEach((y,i)=>{const X=pad+i/(s.length-1)*(cv.width-2*pad);i?x.lineTo(X,Y(y)):x.moveTo(X,Y(y));});x.stroke();});}
function sim(){const n=v('n'),q=v('q')/100,r=v('r')/100,c=v('c');let kap=v('k'),fix=v('k'),w=0,l=0,streak=0,maxS=0,peak=kap,dd=0;const a=[kap],b=[fix];
for(let i=0;i<n;i++){const win=Math.random()<q;if(win){w++;streak=0;kap+=kap*r*c;fix+=v('k')*r*c}else{l++;streak++;maxS=Math.max(maxS,streak);kap-=kap*r;fix-=v('k')*r}
peak=Math.max(peak,kap);dd=Math.max(dd,(peak-kap)/peak);a.push(kap);b.push(fix);}
const ev=q*c-(1-q);document.getElementById('o2').innerHTML=`<p>Treffer: <b style="color:#22c55e">${w}</b> · Verluste: <b style="color:#ef4444">${l}</b> · längste Verlustserie: <b>${maxS}</b><br>
Endkapital (mit Zinseszins): <b>${eur(kap)}</b> · ohne Wiederanlage: ${eur(fix)}<br>Max. Drawdown: <b>${(dd*100).toFixed(1)} %</b> · Erwartungswert: <b>${ev.toFixed(2)}R</b> pro Trade</p><p class="small">Jeder Klick ist ein neuer Zufallsdurchlauf, so siehst du, wie stark Ergebnisse schwanken, obwohl die Regeln gleich bleiben.</p>`;
line(document.getElementById('cv'),[b,a],['#64748b','#22c55e']);}
function fees(){const s=v('gs'),f=v('ge')+v('ga'),c=v('gc');if(!s){return;}const fr=f/s,win=c-fr,loss=1+fr,be=loss/(win+loss)*100,be0=100/(1+c);
document.getElementById('o5').innerHTML=`<p>Gebühren pro Trade: <b style="color:#ef4444">${fr.toFixed(2)}R</b><br>Gewinn netto: <b style="color:#22c55e">${win.toFixed(2)}R</b> statt ${c}R · Verlust netto: <b style="color:#ef4444">${loss.toFixed(2)}R</b> statt 1R<br>
Nötige Trefferquote: <b>${be.toFixed(1)} %</b> (ohne Gebühren ${be0.toFixed(1)} %)</p>${fr>=0.2?'<p class="small" style="color:#eab308">⚠️ Die Gebühren fressen einen großen Teil des Risikos. Stop weiter setzen, Limit-Orders nutzen oder weniger traden.</p>':''}`;}
function dca(){const ps=document.getElementById('dp').value.split(/[;,]/).map(x=>parseFloat(x)).filter(x=>x>0),a=v('da'),st=v('ds');if(!ps.length)return;
const qty=ps.reduce((s,p)=>s+a/p,0),inv=a*ps.length,avg=inv/qty,loss=inv-qty*st;
document.getElementById('o4').innerHTML=`<p>Investiert: <b>${eur(inv)}</b> · Menge: ${qty.toFixed(4)}<br>Durchschnittspreis: <b style="color:#eab308">${avg.toFixed(2)}</b> (erster Kauf: ${ps[0]})<br>Verlust bei Stop ${st}: <b style="color:#ef4444">${eur(Math.max(0,loss))}</b>. Passt das zu deinem Risiko pro Trade?</p>`;}
function zins(){const k=v('zk'),r=v('zr')/100,c=v('zc'),q=v('zq')/100,t=Math.round(v('zw')*v('zn'));
const g=Math.pow(1+r*c,q)*Math.pow(1-r,1-q),ev=q*c-(1-q);const a=[k],b=[k],s=[k];
for(let i=1;i<=t;i++){a.push(a[i-1]*g);b.push(k+k*r*ev*i);s.push(s[i-1]*(Math.random()<q?1+r*c:1-r));}
const wins=Math.round(t*q);document.getElementById('o3').innerHTML=`<p>${t} Trades, davon erwartet <b style="color:#22c55e">${wins} Treffer</b> und <b style="color:#ef4444">${t-wins} Verluste</b>.<br>
Erwartungswert: <b>${ev.toFixed(2)}R</b> pro Trade (${(r*ev*100).toFixed(2)} % des Kontos)<br>
Erwartetes Endkapital mit Zinseszins: <b style="color:#3b82f6">${eur(a[t])}</b><br>Ohne Wiederanlage: ${eur(b[t])}<br>
Zufälliger Beispieldurchlauf: <b style="color:#22c55e">${eur(s[t])}</b></p>`;
line(document.getElementById('cz'),[b,a,s],['#64748b','#3b82f6','#22c55e']);}

// ---------- Chart-Training: zufällig erzeugte Kerzencharts ----------
const PAT={up:'Aufwärtstrend',down:'Abwärtstrend',range:'Range',grabH:'Liquidity Grab über dem Hoch',grabL:'Liquidity Grab unter dem Tief',retest:'Breakout & Retest'};
const PEXP={up:'Höhere Hochs und höhere Tiefs.',down:'Tiefere Hochs und tiefere Tiefs.',range:'Kurs pendelt zwischen zwei Grenzen.',grabH:'Kurzer Docht über das alte Hoch, Schluss wieder darunter, danach fällt der Kurs.',grabL:'Kurzer Docht unter das alte Tief, Schluss wieder darüber, danach steigt der Kurs.',retest:'Ausbruch über den Widerstand, Rücklauf an das Level, dann weiter nach oben.'};
function genPath(k){const r=()=>Math.random()*4-2,p=[];let x=50;
const seg=(to,n)=>{const st=(to-x)/n;for(let i=0;i<n;i++){x+=st+r();p.push(x);}};
if(k=='up'){[[40,4],[60,4],[50,3],[72,4],[62,3],[85,4]].forEach(s=>seg(...s));}
if(k=='down'){[[60,4],[40,4],[50,3],[28,4],[38,3],[15,4]].forEach(s=>seg(...s));}
if(k=='range'){[[70,4],[30,4],[70,4],[30,4],[68,4],[45,2]].forEach(s=>seg(...s));}
if(k=='grabH'){[[70,4],[45,4],[68,4],[50,3],[66,3]].forEach(s=>seg(...s));p.push('H');x=62;seg(35,5);}
if(k=='grabL'){[[30,4],[55,4],[32,4],[50,3],[34,3]].forEach(s=>seg(...s));p.push('L');x=38;seg(65,5);}
if(k=='retest'){[[60,4],[40,3],[60,3],[42,3],[78,4],[61,3],[85,4]].forEach(s=>seg(...s));}
return p;}
function chartSVG(k){const p=genPath(k),c=[];let prev=50,lastHi=0,lastLo=100;
p.forEach(v=>{if(v=='H'){const o=prev,cl=prev-2;c.push([o,lastHi+8,cl-2,cl]);prev=cl;return;}if(v=='L'){const o=prev,cl=prev+2;c.push([o,cl+2,lastLo-8,cl]);prev=cl;return;}
const o=prev,cl=v;c.push([o,Math.max(o,cl)+Math.random()*3,Math.min(o,cl)-Math.random()*3,cl]);prev=cl;lastHi=Math.max(lastHi,Math.max(o,cl));lastLo=Math.min(lastLo,Math.min(o,cl));});
const w=c.length*12+10;let s=`<svg viewBox="0 0 ${w} 110" style="width:100%;max-height:240px;background:#0f172a;border-radius:8px">`;
c.forEach(([o,h,l,cl],i)=>{const x=6+i*12,col=cl>=o?'#22c55e':'#ef4444',y=v=>105-v;s+=`<line x1="${x+4}" y1="${y(h)}" x2="${x+4}" y2="${y(l)}" stroke="${col}"/><rect x="${x}" y="${y(Math.max(o,cl))}" width="8" height="${Math.max(1,Math.abs(cl-o))}" fill="${col}"/>`});return s+'</svg>';}
let ct={n:0,ok:0};
function chartTrain(){const ks=Object.keys(PAT),k=ks[Math.floor(Math.random()*ks.length)];const opts=[k,...ks.filter(x=>x!=k).sort(()=>Math.random()-.5).slice(0,2)].sort(()=>Math.random()-.5);
app.innerHTML=`<h2>Chart-Training</h2><p class="small">Was siehst du? Richtig: ${ct.ok}/${ct.n}</p><div class="card">${chartSVG(k)}</div>`+opts.map(o=>`<button class="opt alt" id="c_${o}">${PAT[o]}</button>`).join('')+'<div id="cr"></div><button class="alt" onclick="home()">Start</button>';
opts.forEach(o=>document.getElementById('c_'+o).onclick=()=>{document.querySelectorAll('.opt').forEach(b=>b.disabled=true);ct.n++;if(o==k)ct.ok++;document.getElementById('c_'+k).classList.add('ok');if(o!=k)document.getElementById('c_'+o).classList.add('bad');
document.getElementById('cr').innerHTML=`<div class="card">${PEXP[k]}</div><button onclick="chartTrain()">Nächster Chart</button>`;});}

// ---------- Trading-Journal ----------
const J=()=>JSON.parse(localStorage.getItem('journal')||'[]'),Jsave=j=>localStorage.setItem('journal',JSON.stringify(j));
function journal(){const j=J(),n=j.length,w=j.filter(t=>t.r>0).length,sum=j.reduce((s,t)=>s+t.r,0),usd=j.reduce((s,t)=>s+(t.usd||0),0);
let st='<p>Noch keine Trades eingetragen.</p>';if(n){const wr=w/n,avgW=w?j.filter(t=>t.r>0).reduce((s,t)=>s+t.r,0)/w:0,avgL=n-w?-j.filter(t=>t.r<=0).reduce((s,t)=>s+t.r,0)/(n-w):0;
st=`<p>Trades: <b>${n}</b> · Trefferquote: <b>${(wr*100).toFixed(1)} %</b><br>Ø Gewinn: ${avgW.toFixed(2)}R · Ø Verlust: ${avgL.toFixed(2)}R<br>Erwartungswert: <b style="color:${sum>=0?'#22c55e':'#ef4444'}">${(sum/n).toFixed(2)}R</b> pro Trade · Summe: ${sum.toFixed(2)}R · ${eur(usd)}</p>
${n<50?`<p class="small">Fahrplan: noch ${50-n} Trades bis zur Auswertung nach Stufe 2.</p>`:''}`;}
app.innerHTML=`<h2>Trading-Journal</h2><div class="card" style="text-align:left">${st}<canvas id="jc" width="700" height="180" style="width:100%;background:#0f172a;border-radius:8px"></canvas></div>
<div class="card" style="text-align:left"><b>Neuer Trade</b><br>Datum<input id="jd" type="date" value="${new Date().toISOString().slice(0,10)}">Markt<input id="jm" placeholder="z. B. BTC">
Richtung<select id="jr" style="width:100%;padding:10px;border-radius:8px"><option>Long</option><option>Short</option></select>
Setup<select id="js" style="width:100%;padding:10px;border-radius:8px">${['Liquidity Grab','Fibonacci','FVG','Range','Breakout & Retest','DCA','Sonstiges'].map(x=>`<option>${x}</option>`).join('')}</select>
Art<select id="ja" style="width:100%;padding:10px;border-radius:8px"><option>Paper</option><option>Echtgeld</option></select>
Ergebnis in R (z. B. 3 oder -1)<input id="jx" type="number" step="0.1">Ergebnis in $ (optional)<input id="ju" type="number" step="0.01">Notiz / Gefühl<input id="jn">
<button onclick="jAdd()">Speichern</button></div>
<div class="card" style="text-align:left">${j.slice().reverse().map((t,i)=>`<div class="g">${t.d} · ${t.m} · ${t.dir} · ${t.s} · ${t.a} · <b style="color:${t.r>0?'#22c55e':'#ef4444'}">${t.r}R</b> ${t.n?'· '+t.n:''} <a href="#" style="color:#64748b" onclick="jDel(${n-1-i})">löschen</a></div>`).join('')}</div>
<button class="alt" onclick="jCsv()">Als CSV für Excel exportieren</button><button class="alt" onclick="home()">Start</button>`;
if(n){const eq=[0];j.forEach(t=>eq.push(eq[eq.length-1]+t.r));const cv=document.getElementById('jc'),x=cv.getContext('2d'),mx=Math.max(...eq,1),mn=Math.min(...eq,-1),Y=y=>170-(y-mn)/(mx-mn)*160;
x.strokeStyle='#475569';x.beginPath();x.moveTo(0,Y(0));x.lineTo(700,Y(0));x.stroke();x.strokeStyle='#3b82f6';x.lineWidth=2;x.beginPath();eq.forEach((y,i)=>{const X=10+i/(eq.length-1||1)*680;i?x.lineTo(X,Y(y)):x.moveTo(X,Y(y));});x.stroke();x.fillStyle='#94a3b8';x.fillText('Kontokurve in R',10,14);}}
function jAdd(){const g=i=>document.getElementById(i).value,r=parseFloat(g('jx'));if(isNaN(r)){alert('Bitte Ergebnis in R eintragen');return;}
const j=J();j.push({d:g('jd'),m:g('jm'),dir:g('jr'),s:g('js'),a:g('ja'),r,usd:parseFloat(g('ju'))||0,n:g('jn')});Jsave(j);journal();}
function jDel(i){if(!confirm('Trade löschen?'))return;const j=J();j.splice(i,1);Jsave(j);journal();}
function jCsv(){const rows=[['Datum','Markt','Richtung','Setup','Art','R','USD','Notiz'],...J().map(t=>[t.d,t.m,t.dir,t.s,t.a,String(t.r).replace('.',','),String(t.usd).replace('.',','),t.n])];
const csv='\ufeff'+rows.map(r=>r.map(x=>'"'+String(x??'').replace(/"/g,'""')+'"').join(';')).join('\n');const l=document.createElement('a');l.href=URL.createObjectURL(new Blob([csv],{type:'text/csv'}));l.download='trading-journal.csv';l.click();}

window.addEventListener('DOMContentLoaded',home);
