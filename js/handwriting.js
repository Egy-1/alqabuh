/**
 * منصة القبة التعليمية - ملف استدعاء دورة تحسين الخط ديناميكياً (handwriting.js)
 */

document.addEventListener('DOMContentLoaded', () => {
    // ============ 1. بيانات دورة تحسين الخط ============
    const handwritingCourse = {
        title: 'دورة تحسين الخط العربي الشاملة',
        subtitle: 'قائمة تشغيل إتقان خطي النسخ والرقعة',
        playlistUrl: 'https://www.youtube.com/embed/videoseries?list=PLBcGXRCBuu65jzHdM-DLG2Bd_JXPhY3GL&rel=0',
        description: 'سلسلة تعليمية متكاملة لضبط مقاييس الحروف، طريقة الإمساك بالقلم، وتحسين الخط بخطوات تدريجية مبسطة.'
    };

    const container = document.getElementById('dynamic-video-container');

    // ============ 2. عرض الكورس ============
    function renderHandwritingCourse() {
        if (!container) return;

        container.style.opacity = '0';
        container.style.transform = 'translateY(15px)';
        container.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

        setTimeout(() => {
            container.innerHTML = `
                <div class="playlist-header">
                    <i class="fas fa-play-circle"></i>
                    <div>
                        <h3>${handwritingCourse.title}</h3>
                        <p>${handwritingCourse.subtitle}</p>
                    </div>
                </div>
                <div class="video-player">
                    <iframe 
                        src="${handwritingCourse.playlistUrl}" 
                        title="${handwritingCourse.title}" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen
                        loading="lazy">
                    </iframe>
                </div>
                <div class="playlist-footer">
                    <i class="fas fa-info-circle"></i> 
                    <span>${handwritingCourse.description}</span>
                </div>
            `;
            
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 150);
    }

    renderHandwritingCourse();

    // ============ 3. شريط تقدم القراءة ============
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            scrollProgress.style.width = scrollPercent + '%';
        }, { passive: true });
    }

    // ============ 4. زر العودة للأعلى ============
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

    // ============ 5. عدّادات الإحصائيات ============
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

    // ============ 6. تأثيرات الظهور (Reveal) ============
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
