(function(){
/* أنواع المحتوى */
var TYPES={debate:'مناظرات',atheism:'الإلحاد وقصصه',convert:'قصص من أسلموا',aqeeda:'عقيدة وغيبيات',seerah:'سيرة وتاريخ',fikr:'فكر وقضايا',dialogue:'حوارات',tarbiya:'تربية وسلوك'};

/* الأقسام: كل فيديو = [معرّف يوتيوب, العنوان, [الأنواع]] */
var SECS=[
{k:'h',n:'د. هيثم طلعت',d:'مناظرات وحوارات في الإيمان والإلحاد',v:[
['huPMNLlXFNg','أخطر مناظرة في حياتي',['debate']],
['4IIaoKdsTf8','السحرة',['aqeeda']],
['byfPLUZ1XQE','رأيت إبليس تحت صنم',['aqeeda']],
['CSIry2i0nTI','كيف أتخلص من الإباحية',['tarbiya']],
['Jfl9kguMZj4','مناظرة مع ملحدة تقول: الإله الظالم',['debate','atheism']],
['VBBx_F3ojoM','ثقافتين مختلفتين',['fikr']],
['4l0GnWJq9HM','متهاجمش النسوية',['fikr']],
['tso10ucwnUk','هل هناك إعجاز علمي عند اليونانيين؟',['fikr']],
['EgdNUrQnc1Y','الفأر وقع في المصيدة',['debate']],
['NjVSKsy_Yf8','هل أتينا إلى الدنيا مجبرين؟',['aqeeda','atheism']],
['z1Em6FG9Vhs','هل كان الإنسان قرداً؟',['atheism']],
['-Nf3XINMI28','الإلحاد يجتاح إيران والفرق بين الحين والقرين',['atheism']],
['d3lRi0RfUtw','من اللادينية والإلحاد إلى الإسلام',['convert','atheism']]]},
{k:'a',n:'الشيخ عمرو حسن',d:'العقيدة والسيرة وقضايا الأمة',v:[
['GpwTffeRV1k','يوم القيامة',['aqeeda']],
['MK8OZLqDJsM','ضوابط التكفير',['fikr']],
['oPcavvF33ns','الإيمان بالحوض والشفاعة',['aqeeda']],
['wwnKflDHW5E','الإيمان بالقضاء والقدر',['aqeeda']],
['Oys00YjkOSk','هل انتشر الإسلام بالسيف؟',['atheism','seerah']],
['RS9uS_U0f6M','ولادة أعظم مخلوق',['seerah']],
['mVVkSoolXY0','هدم الكعبة',['seerah']],
['vCfgEKUKliI','الإمام البخاري',['seerah']],
['e2owNxF3EtU','سد يأجوج ومأجوج',['aqeeda']],
['svy3CZI97TA','نعيم القبر',['aqeeda']],
['2xx_MUU843c','حقيقة شيخ الإسلام ابن تيمية',['seerah','fikr']],
['oZqwlwgApqQ','جزيرة الدجال',['aqeeda']],
['Yyy3Ypj0h_M','سر التهجير | قضايا أمة',['fikr']],
['6bp2GMz_-Gw','من هم الأشاعرة؟',['aqeeda','fikr']],
['bqEg4O7lAQE','الشيخ ابن عثيمين',['seerah']],
['CYf9CvKtGCA','أصحاب مركز تكوين | قضايا أمة',['fikr','atheism']],
['z6XLGxBTQjA','الرد على عبدالله الشريف | قضايا أمة',['fikr']],
['drX_tTw5VPw','علماء المسلمين بين الحقيقة والاتهام',['fikr']]]},
{k:'n',n:'د. عمرو نور الدين',d:'حوارات وقصص الداخلين في الإسلام',v:[
['tNa_6AWYxdE','سنا تدخل الإسلام بعد نقاش طويل',['convert','dialogue']],
['4NL2kf8yDzs','إسلام الشماس عادل نبيل',['convert']],
['MIctTLvf550','إسلام المستشار باسم سليمان',['convert']],
['Wsexs5_ZpuY','هندوسي يدخل الإسلام',['convert']],
['ZYGYhX_Q6U0','مسيحي مصري يحكي قصة إسلامه',['convert']],
['i49MJezyMlo','حوار مع مريم غبور (مسيحية سابقة)',['dialogue']],
['j6Pp3JSjADQ','حوار ممتع مع مسيحية سابقة',['dialogue']],
['kJnCtQFs5yo','ميرا ونقاش حول الصلب والتثليث',['dialogue','debate']],
['KPezWavWek0','نقاش مضحك بين د. عمرو ومسيحية',['dialogue']]]},
{k:'s',n:'قصص دخلوا الإسلام',d:'قصص مؤثرة لأشخاص اعتنقوا الإسلام',v:[
['4ev7yKZrKbY','مغنّي راب يدخل الإسلام',['convert']],
['Aj8o20-eEm4','تحوّل من ملحد إلى إمام',['convert','atheism']],
['O12XRdaTlJc','المسيح بشّر بالإسلام',['convert']],
['x-oJk_c4dZA','من بوذا إلى الله',['convert']],
['SUpxr19gMxs','أستاذ ياباني يدخل الإسلام',['convert']],
['E9LLg5zM8pU','10 مسلمين من آسيا يدخلون الإسلام',['convert']]]}
];

var $=function(s){return document.querySelector(s)};
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.textContent=x;return e}
var st={sec:'all',type:'all',q:'',open:{}},LIM=6;
var tabs=$('#dsTabs'),chips=$('#dsChips'),out=$('#dsOut'),cnt=$('#dsCount');

function norm(s){return s.replace(/[\u064B-\u0652\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').toLowerCase()}
function match(v,useType){
  if(useType&&st.type!=='all'&&v[2].indexOf(st.type)<0)return false;
  return !st.q||norm(v[1]).indexOf(norm(st.q))>-1;
}
function secList(){return SECS.filter(function(s){return st.sec==='all'||s.k===st.sec})}

function drawTabs(){
  if(!tabs)return;
  tabs.innerHTML='';
  var all=SECS.reduce(function(a,s){return a+s.v.length},0);
  [{k:'all',n:'كل الأقسام',c:all,d:'عرض الجميع'}].concat(SECS.map(function(s){return{k:s.k,n:s.n,c:s.v.length,d:s.d}})).forEach(function(s){
    var b=el('button','ds-tab');b.type='button';b.setAttribute('aria-pressed',st.sec===s.k);
    b.append(el('b','',s.n),el('span','',s.c+' فيديو'));
    b.onclick=function(){st.sec=s.k;render()};tabs.appendChild(b);
  });
}
function drawChips(){
  if(!chips)return;
  chips.innerHTML='';
  var base=[];secList().forEach(function(s){s.v.forEach(function(v){if(match(v,false))base.push(v)})});
  var list=[['all','الكل',base.length]];
  Object.keys(TYPES).forEach(function(t){
    var n=base.filter(function(v){return v[2].indexOf(t)>-1}).length;
    if(n)list.push([t,TYPES[t],n]);
  });
  list.forEach(function(x){
    var b=el('button','ds-chip',x[1]);b.type='button';b.setAttribute('aria-pressed',st.type===x[0]);
    b.appendChild(el('i','',x[2]));b.onclick=function(){st.type=x[0];render()};chips.appendChild(b);
  });
}

function card(v){
  // استخدام عنصر div عادي وليس زر لتجنب أي تفاعل خاطئ للكارد
  var cardDiv=document.createElement('div');
  cardDiv.className = 'ds-v';
  cardDiv.style.cssText = 'padding:0; background:#fffdf8; border-radius:10px; overflow:hidden; border:1px solid #e3dac3; transform:none !important; pointer-events:auto;';

  var frameBox=document.createElement('div');
  frameBox.className = 'ds-th';
  frameBox.style.cssText = 'position:relative; width:100%; padding-bottom:56.25%; background:#000; z-index:5;';

  var iframe=document.createElement('iframe');
  iframe.src='https://www.youtube.com/embed/'+v[0];
  iframe.title=v[1];
  iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
  iframe.allowFullscreen=true;
  iframe.style.cssText = 'position:absolute; top:0; left:0; width:100%; height:100%; border:0; z-index:10; pointer-events:auto;';
  
  frameBox.appendChild(iframe);

  var bd=document.createElement('div');
  bd.className = 'ds-b';
  bd.style.cssText = 'padding:11px 13px 13px;';
  
  var titleEl=document.createElement('h4');
  titleEl.textContent=v[1];
  titleEl.style.cssText = 'margin:0 0 8px; font-size:.98rem; line-height:1.6; font-weight:600; color:#1c2433;';
  bd.appendChild(titleEl);
  
  var tg=document.createElement('div');
  tg.className = 'ds-tg';
  v[2].forEach(function(t){
    var span=document.createElement('span');
    span.textContent=TYPES[t];
    tg.appendChild(span);
  });
  bd.appendChild(tg);

  cardDiv.append(frameBox,bd);
  return cardDiv;
}

function render(){
  if(!out)return;
  if(st.type!=='all'){
    var ok=secList().some(function(s){return s.v.some(function(v){return match(v,true)})});
    if(!ok)st.type='all';
  }
  drawTabs();drawChips();out.innerHTML='';
  var total=0;
  secList().forEach(function(s){
    var items=s.v.filter(function(v){return match(v,true)});
    if(!items.length)return;
    total+=items.length;
    var sec=el('section','ds-sec'),h=el('div','ds-sh'),l=el('div');
    l.append(el('h3','',s.n),el('p','',s.d));h.append(l,el('em','',items.length+' فيديو'));
    var g=el('div','ds-grid');
    var lim=(st.sec==='all'&&!st.open[s.k]&&!st.q)?LIM:items.length;
    items.slice(0,lim).forEach(function(v){g.appendChild(card(v))});
    sec.append(h,g);
    if(items.length>lim){
      var m=el('button','ds-more','عرض كل فيديوهات القسم ('+items.length+')');m.type='button';
      m.onclick=function(){st.open[s.k]=true;render()};sec.appendChild(m);
    }
    out.appendChild(sec);
  });
  if(cnt)cnt.textContent=total?('النتائج: '+total+' فيديو'):'';
  if(!total)out.appendChild(el('div','ds-empty','لا توجد فيديوهات مطابقة. جرّب تغيير القسم أو نوع المحتوى.'));
}

var searchInput=$('#dsQ');
if(searchInput){
  searchInput.addEventListener('input',function(e){st.q=e.target.value.trim();render()});
}

render();
})();
