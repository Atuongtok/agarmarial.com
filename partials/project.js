
    // Animate content on scroll using Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'slideIn 1s ease forwards';
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.content').forEach(section => {
      observer.observe(section);
    });