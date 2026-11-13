/* ==========================================
   صفحة اللغة العربية - منطق ديناميكي محسّن
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // ============ 1. بيانات الدورات ============
    const coursesData = {
        'reading': {
            title: 'دورة تعلم القراءة',
            subtitle: 'سلسلة تأسيس المهارات القرائية من الصفر',
            playlistUrl: 'https://www.youtube.com/embed/videoseries?list=PLhfhkdQ8PQkwgWiEqOkQl7_4vmPwO2D46',
            description: 'دورة متكاملة لتأسيس وتعلم القراءة الصحيحة والتهجئة بخطوات واضحة ومبسطة.'
        },
        'non-native': {
            title: 'القراءة لغير الناطقين بها',
            subtitle: 'قائمة تشغيل كاملة لتعلم الأساسيات (22 فيديو)',
            playlistUrl: 'https://www.youtube.com/embed/videoseries?list=PLFCSL6fix-ZoYpKUNL1s_RHQoQkDm65Sk',
            description: 'دورة مخصصة لتعلم القراءة والمفردات العربية بطريقة سهلة ومبسطة لغير الناطقين بها.'
        }
    };

    const container = document.getElementById('dynamic-video-container');
    const tabButtons = document.querySelectorAll('.course-tab-btn');

    // ============ 2. عرض الكورس ============
    function renderCourse(courseKey) {
        const course = coursesData[courseKey];
        if (!course || !container) return;

        // تأثير انتقالي
        container.style.opacity = '0';
        container.style.transform = 'translateY(15px)';
        container.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        setTimeout(() => {
            container.innerHTML = `
                <div class="playlist-header">
                    <i class="fas fa-play-circle"></i>
                    <div>
                        <h3>${course.title}</h3>
                        <p>${course.subtitle}</p>
                    </div>
                </div>
                <div class="video-player">
                    <iframe 
                        src="${course.playlistUrl}" 
                        title="${course.title}" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        loading="lazy">
                    </iframe>
                </div>
                <div class="playlist-footer">
                    <i class="fas fa-info-circle"></i> 
                    <span>${course.description}</span>
                </div>
            `;
            
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 150);
    }

    // عرض أول دورة افتراضياً
    if (container) renderCourse('reading');

    // ============ 3. تفعيل التبويبات ============
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const courseKey = button.getAttribute('data-course');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderCourse(courseKey);
        });
    });

    // ============ 4. شريط تقدم القراءة ============
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            scrollProgress.style.width = scrollPercent + '%';
        }, { passive: true });
    }

    // ============ 5. زر العودة للأعلى ============
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============ 6. عدّادات الإحصائيات ============
    const statNumbers = document.querySelectorAll('.stat-number');
    const animateCounter = (el) => {
        const target = parseInt(el.dataset.target, 10) || 0;
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        
        const interval = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(interval);
            }
            el.textContent = current + suffix;
        }, 30);
    };

    // تشغيل العدّادات عند ظهورها
    if ('IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(num => counterObserver.observe(num));
    } else {
        statNumbers.forEach(animateCounter);
    }

    // ============ 7. تأثيرات الظهور (Reveal) ============
    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('active'));
    }
});
