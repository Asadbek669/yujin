function renderDramas(containerId, dramas, limit = 10) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  dramas.slice(0, limit).forEach(drama => {
    const slide = document.createElement("a");
    slide.className = "slide";
    slide.href = drama.link;
    slide.target = "_blank"; // Telegram yangi oynada
    slide.rel = "noopener";

    slide.innerHTML = `
      <img src="${drama.poster}" alt="${drama.title}">
      <div class="slide-name">${drama.title}</div>
    `;

    container.appendChild(slide);
  });
}
