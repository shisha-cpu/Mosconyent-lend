

        setInterval(() => {
            const elements = document.querySelectorAll('.glitch');
            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            randomElement.style.animation = 'glitch 0.3s';
            setTimeout(() => {
                randomElement.style.animation = '';
            }, 300);
        }, 3000);

 
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            document.querySelector('.hero-title').style.transform = `skewY(${rate / 20}deg)`;
        });


        document.querySelectorAll('.brutal-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.borderColor = 'var(--yellow)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.borderColor = 'var(--white)';
            });
        });

 
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const item = this.parentElement;
                item.classList.toggle('active');
            });
        });


        const subtitle = document.querySelector('.hero-subtitle');
        const originalText = subtitle.textContent;
        subtitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                subtitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1000);
