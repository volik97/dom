const banners = Array.from(document.querySelectorAll("div.reveal"));

function bannerVisible(element) {
  const { top, bottom } = element.getBoundingClientRect();
  if (bottom < 0 || top > window.innerHeight) {
    return false;
  } else {
    return true;
  }
}

function bannerShotoTam() {
  for (let banner of banners) {
    if (bannerVisible(banner)) {
      banner.classList.add("reveal_active");
    } else {
      banner.classList.remove("reveal_active");
    }
  }
}

window.addEventListener("scroll", bannerShotoTam);