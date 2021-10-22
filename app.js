const progress_bar = document.querySelector("#progress-bar");
const section = document.querySelector("section");

const animationProgressBar = () => {
  const client_top = -section.getBoundingClientRect().top;
  const client_height = section.getBoundingClientRect().height;
  const document_client_height = document.documentElement.clientHeight;

  let progress_width = Math.floor(
    (client_top / (client_height - document_client_height)) * 100
  );

  if (progress_width < 0) {
    progress_bar.style.width = `0%`;
  }

  progress_bar.style.width = `${progress_width}%`;

  console.log(progress_width);
};

window.addEventListener("scroll", animationProgressBar);
