/**
 * منصة القبة التعليمية - ملف البيانات والتفاعل لقسم أدباء وشعراء (writers-poets.js)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // قاعدة بيانات الأدباء والشعراء بالصور المحلية المضمونة لكل شخصية
    const writersData = {
        egyptianWriters: [
            {
                id: 'naguib',
                name: 'نجيب محفوظ',
                role: 'الحائز على جائزة نوبل في الأدب',
                dates: '1911 - 2006',
                image: '../img-basics/naguib.jpg',
                bio: 'نجيب محفوظ عبد العزيز إبراهيم أحمد الباشا، الروائي والكاتب المصري العالمي. يُعد أول أديب عربي حائز على جائزة نوبل في الأدب عام 1988. تميزت أعماله بتصوير الحياة المصرية الواقعية في الأحياء الشعبية، ومن أشهر أعماله: الثلاثية، أولاد حارتنا، وميرامار.'
            },
            {
                id: 'taha',
                name: 'طه حسين',
                role: 'عميد الأدب العربي',
                dates: '1889 - 1973',
                image: '../img-basics/taha.jpg',
                bio: 'طه حسين علي بن سيد أحمد، أديب ومفكر مصري شهير، لُقب بـ "عميد الأدب العربي". فقد بصره في طفولته لكنه قهر الإعاقة ليصبح علماً من أعلام النهضة الفكرية والأدبية الحديثة في الوطن العربي. من أبرز مؤلفاته كتاب "الأيام"، وفي الشعر الجاهلي، ومستقبل الثقافة في مصر.'
            },
            {
                id: 'aqkad',
                name: 'عباس محمود العقاد',
                role: 'أديب ومفكر موسوعي',
                dates: '1889 - 1964',
                image: '../img-basics/aqkad.jpg',
                bio: 'عباس محمود العقاد، الكاتب والمفكر والصحفي والشاعر المصري العملاق، وأحد أهم أعلام الأدب العربي في القرن العشرين. امتاز بثقافته الموسوعية وعصاميته الفذة. أسس "مدرسة الديوان" مع إبراهيم المازني وميخائيل نعيمة. من أشهر كتبه عبقريات الإسلام، و"سارة".'
            },
            {
                id: 'tawfik',
                name: 'توفيق الحكيم',
                role: 'رائد المسرح الذهني العربي',
                dates: '1898 - 1987',
                image: '../img-basics/tawfik.jpg',
                bio: 'توفيق إسماعيل الحكيم، كاتب وروائي ومسرحي مصري بارز، يُعد من أساطير الرواية والمسرح العربي وأبرز رواد "المسرح الذهني". تركت مؤلفاته بصمة خالدة في المكتبة العربية، مثل مسرحية أهل الكهف، وبيجاميون، ورواية عصفور من الشرق.'
            },
            {
                id: 'manfaluti',
                name: 'مصطفى لطفي المنفلوطي',
                role: 'من أبرز أدباء النثر والإنشاء',
                dates: '1876 - 1924',
                image: '../img-basics/manfaluti.jpg',
                bio: 'مصطفى لطفي بن محمد لطفي المنفلوطي، أديب وشاعر مصري نابغ اشتهر بأسلوبه البياني الراقي في النثر وإنشاء المقالات الاجتماعية والإنسانية المؤثرة. من أشهر أعماله كتاب "النظرات" و"العبرات".'
            },
            {
                id: 'rafie',
                name: 'مصطفى صادق الرافعي',
                role: 'من أعلام البلاغة والأدب العربي',
                dates: '1880 - 1937',
                image: '../img-basics/rafie.jpg',
                bio: 'مصطفى صادق بن عبد القادر الرافعي، أديب وشاعر مصري عظيم. لُقب بـ "معجزة الأدب العربي" نظراً لقوة أسلوبه وعمق بلاغته وفصاحته النادرة. دافع بقوة عن لغة القرآن الكريم. من أبرز مؤلفاته: تاريخ آداب العرب، وحي القلم.'
            }
        ],
        egyptianPoets: [
            {
                id: 'shawqi',
                name: 'أحمد شوقي',
                role: 'أمير الشعراء',
                dates: '1868 - 1932',
                image: '../img-basics/shawqi.jpg',
                bio: 'أحمد شوقي علي أحمد شوقي، شاعر مصري عظيم يُعد من أعظم شعراء العربية في العصر الحديث، وبُايع بـ "أمير الشعراء" عام 1927. ترك ديواناً ضخماً هو "الشوقيات"، وأبدع في المسرح الشعري كمسرحية مجنون ليلى.'
            },
            {
                id: 'hafez',
                name: 'حافظ إبراهيم',
                role: 'شاعر النيل',
                dates: '1872 - 1932',
                image: '../img-basics/hafez.jpg',
                bio: 'محمد حافظ إبراهيم، شاعر مصري شهير لُقب بـ "شاعر النيل". تميز بشعره الاجتماعي والسياسي المعبر عن هموم وطنه ومجتمعه بصوت جهوري وأسلوب عذب. له قصائد خالدة في حب مصر واللغة العربية.'
            },
            {
                id: 'baroudi',
                name: 'محمود سامي البارودي',
                role: 'رائد النهضة الشعرية الحديثة',
                dates: '1838 - 1904',
                image: '../img-basics/baroudi.jpg',
                bio: 'محمود سامي بن حسن الحسين البارودي، رائد مدرسة الإحياء والبعث في الشعر العربي الحديث وزعيم البعث الفكري والسياسي. لُقب بـ "رب السيف والقلم". أعاد للشعر العربي رونقه وقوته.'
            }
        ],
        arabPoets: [
            {
                id: 'antarah',
                name: 'عنترة بن شداد',
                role: 'فارس العرب وأشهر شعراء الجاهلية',
                dates: '525 م - 608 م',
                image: '../img-basics/antarah.jpg',
                bio: 'عنترة بن شداد العبسي، من أشهر شعراء الفرسان في العصر الجاهلي وأحد أصحاب المعلقات السبع الشهيرة. عُرف بشجاعته الفائقة، وفخره بنسبه، وحبه العفيف لابنة عمه عبلة. جمع شعره بين رقة العاطفة وحماسة المعارك.'
            }
        ]
    };

    // عناصر DOM
    const egyptianWritersGrid = document.getElementById('egyptian-writers-grid');
    const egyptianPoetsGrid = document.getElementById('egyptian-poets-grid');
    const arabPoetsGrid = document.getElementById('arab-poets-grid');

    const modalOverlay = document.getElementById('writerModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalImg = document.getElementById('modalImg');
    const modalName = document.getElementById('modalName');
    const modalLife = document.getElementById('modalLife');
    const modalBio = document.getElementById('modalBio');

    // دالة توليد الكاردات (مع حماية تامة تظهر لوجو المنصة كبديل احتياطي لو الصورة مش موجودة)
    function renderCards(dataArray, containerElement) {
        if (!containerElement) return;
        containerElement.innerHTML = '';

        dataArray.forEach(person => {
            const card = document.createElement('div');
            card.className = 'writer-card';
            card.innerHTML = `
                <div class="writer-img-wrapper">
                    <img src="${person.image}" alt="${person.name}" class="writer-img" onerror="this.onerror=null; this.src='../images/logo.png';">
                </div>
                <div class="writer-info">
                    <h3 class="writer-name">${person.name}</h3>
                    <p class="writer-role">${person.role}</p>
                    <p class="writer-dates"><i class="fas fa-calendar-alt"></i> ${person.dates}</p>
                    <button class="details-btn" data-id="${person.id}">
                        <i class="fas fa-info-circle"></i> تفاصيل عنه
                    </button>
                </div>
            `;
            containerElement.appendChild(card);
        });
    }

    // عرض الأقسام الثلاثة
    renderCards(writersData.egyptianWriters, egyptianWritersGrid);
    renderCards(writersData.egyptianPoets, egyptianPoetsGrid);
    renderCards(writersData.arabPoets, arabPoetsGrid);

    // دالة فتح النافذة المنبثقة للتفاصيل
    function openWriterModal(personId) {
        let allPeople = [
            ...writersData.egyptianWriters,
            ...writersData.egyptianPoets,
            ...writersData.arabPoets
        ];

        const person = allPeople.find(p => p.id === personId);
        if (!person) return;

        modalImg.src = person.image;
        modalImg.onerror = function() { this.src = '../images/logo.png'; };
        modalName.textContent = person.name;
        modalLife.textContent = `${person.role} (${person.dates})`;
        modalBio.textContent = person.bio;

        modalOverlay.classList.add('active');
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
    }

    // ربط الأحداث
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.details-btn');
        if (btn) {
            const personId = btn.getAttribute('data-id');
            openWriterModal(personId);
        }
    });

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
});
