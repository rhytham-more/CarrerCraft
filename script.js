document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
    const navLinks = document.querySelector(".nav-links")
    const navButtons = document.querySelector(".nav-buttons")
  
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex"
      navButtons.style.display = navButtons.style.display === "flex" ? "none" : "flex"
    })
  
    // Image slider
    const sliderContainer = document.querySelector(".slider-container")
    const images = sliderContainer.querySelectorAll("img")
    let currentIndex = 0
  
    function slideImages() {
      currentIndex = (currentIndex + 1) % images.length
      sliderContainer.style.transform = `translateX(-${currentIndex * 320}px)`
    }
  
    setInterval(slideImages, 3000)
  
    // Animate content items on scroll
    const contentItems = document.querySelectorAll(".content-item, .feature-item")
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)
  
    contentItems.forEach((item) => observer.observe(item))
  
    // Resume upload form handling
    const resumeUploadForm = document.getElementById("resumeUploadForm")
    const resumeFile = document.getElementById("resumeFile")
    const uploadStatus = document.getElementById("uploadStatus")
  
    resumeUploadForm.addEventListener("submit", (e) => {
      e.preventDefault()
      const file = resumeFile.files[0]
      if (file) {
        // Simulating file upload
        uploadStatus.textContent = "Uploading..."
        setTimeout(() => {
          uploadStatus.textContent = "Resume uploaded successfully!"
          resumeUploadForm.reset()
        }, 2000)
      } else {
        uploadStatus.textContent = "Please select a file to upload."
      }
    })
  })
  
  console.log("CareerCraft script loaded successfully!")
  
  