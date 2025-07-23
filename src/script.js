
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });

  
  
  document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".fade-on-scroll");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.remove("opacity-0");
          el.classList.add("animate__animated");

          // Determine animation type based on position or content
          if (el.querySelector("img")?.src.includes("13da3e6b")) {
            el.classList.add("animate__fadeInLeft");
          } else if (el.querySelector("img")?.src.includes("a1e5170a")) {
            el.classList.add("animate__fadeInRight");
          } else if (el.querySelector("img")?.src.includes("download")) {
            el.classList.add("animate__fadeInLeft");
          } else if (el.querySelector("img")?.src.includes("images.png")) {
            el.classList.add("animate__fadeInRight");
          } else {
            el.classList.add("animate__fadeIn"); // fallback animation
          }

          // Remove classes after animation ends
          el.addEventListener("animationend", () => {
            el.classList.remove("animate__animated", "animate__fadeInLeft", "animate__fadeInRight", "animate__fadeInDown", "animate__fadeInUp", "animate__fadeIn");
          }, { once: true });
        }
      });
    }, {
      threshold: 0.3
    });

    targets.forEach(t => observer.observe(t));
  });


  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#animated-images");
    const images = container.querySelectorAll("img");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          container.classList.remove("opacity-0");

          images.forEach((img, index) => {
            // Remove any previous animation classes
            img.classList.remove("animate__animated", "animate__flipInY", "animate__flipInX", "animate__bounceIn");

            // Add animation base
            img.classList.add("animate__animated");

            // Choose animation type based on image index
            if (index <= 2) {
              img.classList.add("animate__flipInY");
            } else if (index === 3) {
              img.classList.add("animate__bounceIn");
            } else {
              img.classList.add("animate__flipInX");
            }

            // Optional: stagger animation delay
            img.style.animationDelay = `${index * 0.2}s`;

            // Remove animation class after it finishes so it can re-trigger
            img.addEventListener("animationend", () => {
              img.classList.remove("animate__animated", "animate__flipInY", "animate__flipInX", "animate__bounceIn");
              img.style.animationDelay = "";
            }, { once: true });
          });
        }
      });
    }, {
      threshold: 0.3
    });

    observer.observe(container);
  });


  
  document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".fade-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const el = entry.target;

          if (entry.isIntersecting) {
            // Make it visible
            el.classList.remove("opacity-0");

            // Trigger animation
            el.classList.add("animate__animated", "animate__fadeInLeft");

            // Remove the animation classes after animation ends so it can re-trigger next time
            el.addEventListener("animationend", () => {
              el.classList.remove("animate__animated", "animate__fadeInLeft");
            }, { once: true });
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    boxes.forEach(box => observer.observe(box));
  });

