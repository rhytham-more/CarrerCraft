document.addEventListener("DOMContentLoaded", () => {
    // Loading Screen Animation
    const loadingScreen = document.querySelector(".loading-screen")
    setTimeout(() => {
      loadingScreen.style.opacity = "0"
      loadingScreen.style.transition = "opacity 0.5s ease"
      setTimeout(() => {
        loadingScreen.style.display = "none"
      }, 500)
    }, 2000)
  
    // File Upload Handling
    const fileInput = document.querySelector(".file-input")
    const uploadLabel = document.querySelector(".upload-label")
  
    fileInput.addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        const fileName = e.target.files[0].name
        uploadLabel.innerHTML = `<i class="fas fa-check"></i> ${fileName}`
        uploadLabel.style.borderColor = "#4CAF50"
      }
    })
  
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      })
    })
  
    // Intersection Observer for Animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)
  
    // Observe elements for fade-in animation
    document.querySelectorAll(".feature-card, .step").forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(20px)"
      el.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      observer.observe(el)
    })
  
    // Particle Effect for Hero Section
    const createParticle = (x, y) => {
      const particle = document.createElement("div")
      particle.className = "particle"
      particle.style.left = x + "px"
      particle.style.top = y + "px"
      document.body.appendChild(particle)
  
      setTimeout(() => {
        particle.remove()
      }, 1000)
    }
  
    // Mouse trail effect
    document.addEventListener("mousemove", (e) => {
      if (Math.random() > 0.9) {
        createParticle(e.clientX, e.clientY)
      }
    })
  
    // Dynamic header background
    let lastScroll = 0
    window.addEventListener("scroll", () => {
      const header = document.querySelector("header")
      const currentScroll = window.pageYOffset
  
      if (currentScroll > lastScroll) {
        header.style.transform = "translateY(-100%)"
      } else {
        header.style.transform = "translateY(0)"
      }
  
      if (currentScroll === 0) {
        header.style.background = "transparent"
      } else {
        header.style.background = "rgba(0, 0, 0, 0.9)"
      }
  
      lastScroll = currentScroll
    })
  })
  
  