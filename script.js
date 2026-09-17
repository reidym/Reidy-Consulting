document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

// Use the real profile images uploaded to the repository.
const heroPortrait = document.querySelector(".portrait-placeholder");
if (heroPortrait) {
  heroPortrait.style.backgroundImage = 'url("Martin-Reidy_headshot%20jpg.jpg")';
  heroPortrait.style.backgroundSize = "cover";
  heroPortrait.style.backgroundPosition = "center 20%";
  heroPortrait.style.backgroundRepeat = "no-repeat";
  heroPortrait.setAttribute("role", "img");
  heroPortrait.setAttribute("aria-label", "Portrait of Martin Reidy");
  heroPortrait.querySelectorAll("span, strong, small").forEach((el) => {
    el.style.display = "none";
  });
}

const aboutPortrait = document.querySelector(".about-monogram");
if (aboutPortrait) {
  aboutPortrait.style.backgroundImage = 'url("PXL_20260604_084142141.jpg")';
  aboutPortrait.style.backgroundSize = "cover";
  aboutPortrait.style.backgroundPosition = "center 24%";
  aboutPortrait.style.backgroundRepeat = "no-repeat";
  aboutPortrait.setAttribute("role", "img");
  aboutPortrait.setAttribute("aria-label", "Martin Reidy at the MFAA Excellence Awards");
  aboutPortrait.querySelectorAll("span, small").forEach((el) => {
    el.style.display = "none";
  });
}
