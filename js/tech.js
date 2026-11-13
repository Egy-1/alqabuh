(function(){
/* ===== كتب مكتبة التكنولوجيا ===== */
var BOOKS=[
{t:'أساسيات الكمبيوتر',s:'مدخل إلى مكونات الحاسوب',a:'#1d4380',b:'#0e2247',pages:[
 {t:'ما هو الحاسوب؟',p:'الحاسوب جهاز إلكتروني يستقبل البيانات، ويعالجها وفق تعليمات محددة، ثم يخزنها ويخرج النتائج.',l:['إدخال|إعطاء الجهاز البيانات','معالجة|تنفيذ التعليمات على البيانات','تخزين|حفظ البيانات للرجوع إليها','إخراج|عرض النتائج على الشاشة أو الطابعة']},
 {t:'المكونات الرئيسية',l:['اللوحة الأم|تربط جميع المكونات ببعضها','وحدة المعالجة المركزية (CPU)|تنفذ التعليمات وتُعد عقل الجهاز','ذاكرة الوصول العشوائي (RAM)|ذاكرة سريعة مؤقتة للبرامج قيد التشغيل','وحدة إمدادات الطاقة|توزع الكهرباء على المكونات']},
 {t:'مكونات مساعدة',l:['بطاقة الرسومات|تعالج الصورة والفيديو والألعاب','كارت الصوت|يعالج الصوت وإخراجه','نظام التبريد|مراوح ومشتتات تمنع ارتفاع الحرارة','حالة الكمبيوتر|صندوق يحمي المكونات وينظمها']},
 {t:'العتاد والبرمجيات',p:'العتاد (Hardware) هو الأجزاء المادية التي نلمسها، والبرمجيات (Software) هي التعليمات والبرامج التي تشغّل هذا العتاد.',l:['لا يعمل أحدهما دون الآخر','نظام التشغيل هو الوسيط بينهما']}]},
{t:'أجهزة الإدخال والإخراج',s:'كيف نتواصل مع الحاسوب',a:'#0f766e',b:'#073b37',pages:[
 {t:'أجهزة الإدخال',p:'هي الأجهزة التي ترسل البيانات والأوامر إلى الحاسوب.',l:['لوحة المفاتيح|لكتابة النصوص والأوامر','الفأرة|للتأشير والنقر','كاميرا الويب|لالتقاط الصور والفيديو','الميكروفون|لتسجيل الصوت','الماسح الضوئي|لتحويل الورق إلى صور رقمية']},
 {t:'أجهزة الإخراج',p:'هي الأجهزة التي تعرض نتائج المعالجة للمستخدم.',l:['الشاشة|لعرض الصورة والنص','السماعات وسماعات الرأس|لإخراج الصوت','الطابعة|لطباعة المستندات على الورق','جهاز العرض|لعرض الشاشة على جدار كبير']},
 {t:'أجهزة تعمل في الاتجاهين',l:['الشاشة اللمسية|تعرض وتستقبل اللمس','محرك USB|يقرأ الملفات ويكتبها','سماعة الرأس مع ميكروفون|تدخل الصوت وتخرجه'],p:'بعض الأجهزة تجمع وظيفتي الإدخال والإخراج معاً.'}]},
{t:'أجهزة التخزين',s:'أين تُحفظ بياناتنا؟',a:'#8a2a3b',b:'#3d1019',pages:[
 {t:'الذاكرة والتخزين',p:'ذاكرة RAM مؤقتة وتُمسح بياناتها عند إغلاق الجهاز، أما أجهزة التخزين فتحفظ الملفات بصورة دائمة.'},
 {t:'أنواع أجهزة التخزين',l:['القرص الصلب (HDD)|أقراص ميكانيكية، سعة كبيرة وسعر أقل وسرعة أقل','محرك الحالة الصلبة (SSD)|بلا أجزاء متحركة، أسرع وأهدأ','القرص البصري|CD وDVD، يُقرأ بالليزر','فلاش USB|صغير ومحمول لنقل الملفات']},
 {t:'وحدات القياس',p:'تقاس سعة التخزين بالبايت، وكل وحدة أكبر من التي قبلها بنحو ألف مرة.',l:['كيلوبايت (KB)','ميغابايت (MB)','جيجابايت (GB)','تيرابايت (TB)'],},
 {t:'احفظ نسخة احتياطية',p:'الأجهزة قد تتعطل في أي وقت، فاحتفظ بنسخة من ملفاتك المهمة على جهاز آخر أو في التخزين السحابي.'}]},
{t:'الشبكات والإنترنت',s:'كيف تتصل الأجهزة ببعضها',a:'#8a6a12',b:'#3d2e05',pages:[
 {t:'ما هي الشبكة؟',p:'الشبكة مجموعة أجهزة مرتبطة معاً لتتبادل البيانات وتشارك الموارد مثل الطابعة والإنترنت.'},
 {t:'أجهزة الشبكة',l:['بطاقة الشبكة|تمكّن الجهاز من الاتصال بالشبكة','جهاز التوجيه (الراوتر)|يوزع الاتصال على الأجهزة ويوجه البيانات','المودم|يربط شبكتك بمزود خدمة الإنترنت','مودم النطاق العريض المتنقل|يوفر الإنترنت عبر شبكات الهاتف']},
 {t:'استخدام آمن',l:['اختر كلمة مرور قوية لشبكة الواي فاي','حدّث النظام والبرامج باستمرار','لا تفتح الروابط والملفات المجهولة','فعّل برنامج الحماية']}]},
{t:'البرمجيات وأنظمة التشغيل',s:'العقل الذي يدير الجهاز',a:'#5b3a99',b:'#25143f',pages:[
 {t:'نظام التشغيل',p:'هو البرنامج الأساسي الذي يدير العتاد ويشغّل بقية البرامج، وأشهر أنظمته:',l:['Windows|الأكثر استخداماً على الحواسيب الشخصية','Linux|مفتوح المصدر ويستخدم في الخوادم','macOS|نظام حواسيب آبل']},
 {t:'البرامج الأساسية في النظام',l:['المفكرة|لكتابة النصوص البسيطة','الآلة الحاسبة|للعمليات الحسابية','الرسام|لرسم الصور وتعديلها','مستكشف الملفات|لتصفح الملفات والمجلدات','إدارة المهام|لمتابعة البرامج وإيقاف المتوقف منها','سلة المهملات|تحتفظ بالملفات المحذوفة مؤقتاً']},
 {t:'البرامج المكتبية والحماية',l:['Word|لكتابة المستندات','Excel|للجداول والحسابات','PowerPoint|للعروض التقديمية','المتصفح|لتصفح الإنترنت','برنامج الحماية|يكتشف البرمجيات الضارة']}]}
];

var q=function(s){return document.querySelector(s)};
var shelf=q('#qbShelf'),V=q('#qbV'),bookEl=q('#qbBook'),sz=q('#qbSz'),ttl=q('#qbTitle'),ind=q('#qbInd'),prev=q('#qbPrev'),next=q('#qbNext'),st=q('#qbSt'),xb=q('#qbX');
var leaves=[],f=0,max=0,wide=true,cur=null,lastBtn=null;
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.textContent=x;return e}
function cover(b,c){var d=el('div',c);d.style.setProperty('--a',b.a);d.style.setProperty('--b',b.b);d.append(el('strong','',b.t),el('em','',b.s),el('small','',b.pages.length+' صفحات'));return d}

BOOKS.forEach(function(b,i){
  var btn=el('button','qb-card');btn.type='button';btn.setAttribute('aria-label','افتح كتاب '+b.t);
  btn.appendChild(cover(b,'qb-cover'));
  btn.onclick=function(){openBook(i,btn)};
  shelf.appendChild(btn);
});

function page(p,n,b){
  var d=el('div','qb-pg');d.style.setProperty('--a',b.a);
  d.appendChild(el('h3','',p.t));
  if(p.p)d.appendChild(el('p','',p.p));
  if(p.l){var u=el('ul');p.l.forEach(function(x){
    var li=el('li'),k=x.split('|');
    if(k[1]){li.appendChild(el('b','',k[0]+':'));li.appendChild(document.createTextNode(' '+k[1]))}else li.textContent=x;
    u.appendChild(li)});d.appendChild(u)}
  d.appendChild(el('span','qb-n',n));return d;
}
function leaf(fr,bk){
  var l=el('div','qb-leaf'),a=el('div','qb-face fr');a.appendChild(fr);l.appendChild(a);
  if(bk){var c=el('div','qb-face bk');c.appendChild(bk);l.appendChild(c)}
  return l;
}
function build(b){
  bookEl.innerHTML='';leaves=[];
  var faces=[cover(b,'qb-cv')];
  b.pages.forEach(function(p,i){faces.push(page(p,i+1,b))});
  if(wide){
    if((faces.length-1)%2)faces.push(el('div','qb-pg'));
    leaves.push(leaf(faces[0],faces[1]));
    for(var k=1;2*k<faces.length;k++)leaves.push(leaf(faces[2*k],faces[2*k+1]||el('div','qb-pg')));
  }else faces.forEach(function(x){leaves.push(leaf(x,null))});
  leaves.forEach(function(l){bookEl.appendChild(l)});
  max=leaves.length-1;f=0;z();
}
function z(){leaves.forEach(function(l,k){l.style.zIndex=k<f?k:leaves.length-k;l.classList.toggle('f',k<f)})}
function ui(){
  var N=cur.pages.length;
  bookEl.classList.toggle('cv',wide&&f===0);
  ind.textContent=f===0?'الغلاف':wide?'صفحة '+(2*f-1)+(2*f<=N?' – '+(2*f):''):'صفحة '+f+' من '+N;
  prev.disabled=f===0;next.disabled=f===max;
}
function go(d){
  var nf=f+d;if(nf<0||nf>max)return;
  var i=d>0?f:nf;f=nf;z();leaves[i].style.zIndex=999;
  setTimeout(z,450);ui();
}
function openBook(i,btn){
  cur=BOOKS[i];lastBtn=btn;
  var r=btn.getBoundingClientRect();
  V.style.setProperty('--ox',(r.left+r.width/2)+'px');V.style.setProperty('--oy',(r.top+r.height/2)+'px');
  ttl.textContent=cur.t;wide=window.innerWidth>=820;
  sz.className='qb-sz '+(wide?'wide':'one');
  V.classList.add('show');document.body.style.overflow='hidden';
  build(cur);
  bookEl.style.fontSize=(sz.offsetWidth/(wide?52:21))+'px';
  ui();void V.offsetWidth;V.classList.add('in');
  setTimeout(function(){go(1)},800);
  xb.focus({preventScroll:true});
}
function closeBook(){
  V.classList.remove('in');document.body.style.overflow='';
  setTimeout(function(){V.classList.remove('show');bookEl.innerHTML=''},600);
  if(lastBtn)lastBtn.focus({preventScroll:true});
}
prev.onclick=function(){go(-1)};next.onclick=function(){go(1)};xb.onclick=closeBook;
document.addEventListener('keydown',function(e){
  if(!V.classList.contains('in'))return;
  if(e.key==='Escape')closeBook();
  else if(e.key==='ArrowLeft')go(1);
  else if(e.key==='ArrowRight')go(-1);
});
var x0=null;
st.addEventListener('pointerdown',function(e){x0=e.clientX});
st.addEventListener('pointerup',function(e){
  if(x0===null)return;var dx=e.clientX-x0;x0=null;
  if(Math.abs(dx)>45)go(dx>0?1:-1);
});
})();
