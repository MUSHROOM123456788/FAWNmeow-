function animateEmoji(containerId) {
  const emojiList = ['🦨','🦊','🦅','🐹','🐈‍⬛','🐰','🦇','🦭','🐋','🦦','🦝','🐇','🦔','🌸','🪻','🍓','🍒','⛸️'];
  const container = document.getElementById(containerId);
  container.innerHTML = ''; // clear previous

  const emojis = emojiList.map(emoji => {
    const span = document.createElement('span');
    span.textContent = emoji;
    container.appendChild(span);
    return span;
  });

  let t = 0;
  function animate() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const padding = 50;

    emojis.forEach((el, i) => {
      const total = emojis.length;
      const phase = (i / total + t / 300) % 1;
      let x=0, y=0;

      if(phase < 0.25){
        const p = phase / 0.25;
        x = padding + p*(width-2*padding);
        y = padding;
      } else if(phase < 0.5){
        const p = (phase-0.25)/0.25;
        x = width-padding;
        y = padding + p*(height-2*padding);
      } else if(phase < 0.75){
        const p = (phase-0.5)/0.25;
        x = width-padding - p*(width-2*padding);
        y = height-padding;
      } else {
        const p = (phase-0.75)/0.25;
        x = padding;
        y = height-padding - p*(height-2*padding);
      }

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.style.position = 'absolute';
      el.style.fontSize = '40px';
    });

    t += 1;
    requestAnimationFrame(animate);
  }

  animate();
}

// Run for both pages
document.addEventListener('DOMContentLoaded', () => {
  animateEmoji('emoji-circle-main');
  animateEmoji('emoji-circle-emo');
});
// Make the seal button open the Emo page
document.getElementById('seal-btn').addEventListener('click', () => {
  document.getElementById('main-page').style.display = 'none';
  document.getElementById('emo-page').style.display = 'block';
});
// Seal button
document.getElementById('seal-btn').addEventListener('click', () => {
    window.location.href = 'emo.html';
});

// Emoji animation
const emojiList = ['🦨','🦊','🦅','🐹','🐈‍⬛','🐰','🦇','🦭','🐋','🦦','🦝','🐇','🦔','🌸','🪻','🍓','🍒','⛸️'];
const emojiContainer = document.getElementById('emoji-circle');

const emojis = emojiList.map(emoji => {
    const span = document.createElement('span');
    span.textContent = emoji;
    emojiContainer.appendChild(span);
    return span;
});

let t = 0;
function animateEmojis() {
    const width = window.innerWidth;
    const height = document.body.scrollHeight;
    const padding = 30;

    emojis.forEach((el, i) => {
        const total = emojis.length;
        const phase = (i / total + t / 300) % 1;

        let x=0, y=0;
        if(phase < 0.25){
            const p = phase / 0.25;
            x = padding + p*(width-2*padding);
            y = padding;
        } else if(phase < 0.5){
            const p = (phase-0.25)/0.25;
            x = width-padding;
            y = padding + p*(height-2*padding);
        } else if(phase < 0.75){
            const p = (phase-0.5)/0.25;
            x = width-padding - p*(width-2*padding);
            y = height-padding;
        } else {
            const p = (phase-0.75)/0.25;
            x = padding;
            y = height-padding - p*(height-2*padding);
        }

        el.style.left = `${x}px`;
        el.style.top = `${y}px`;
    });

    t += 1;
    requestAnimationFrame(animateEmojis);
}

document.addEventListener('DOMContentLoaded', () => animateEmojis());
// Ensure emojis circle full viewport
function animateEmoji(containerId) {
  const emojiList = ['🦨','🦊','🦅','🐹','🐈‍⬛','🐰','🦇','🦭','🐋','🦦','🦝','🐇','🦔','🌸','🪻','🍓','🍒','⛸️'];
  const container = document.getElementById(containerId);
  const emojis = emojiList.map(emoji => {
    const span = document.createElement('span');
    span.textContent = emoji;
    container.appendChild(span);
    return span;
  });

  let t = 0;
  function animate() {
    const width = window.innerWidth;
    const height = window.innerHeight; // full viewport
    const padding = 50;

    emojis.forEach((el, i) => {
      const total = emojis.length;
      const phase = (i / total + t / 300) % 1;
      let x=0, y=0;

      if(phase < 0.25){
        const p = phase / 0.25;
        x = padding + p*(width-2*padding);
        y = padding;
      } else if(phase < 0.5){
        const p = (phase-0.25)/0.25;
        x = width-padding;
        y = padding + p*(height-2*padding);
      } else if(phase < 0.75){
        const p = (phase-0.5)/0.25;
        x = width-padding - p*(width-2*padding);
        y = height-padding;
      } else {
        const p = (phase-0.75)/0.25;
        x = padding;
        y = height-padding - p*(height-2*padding);
      }

      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
    });

    t += 1;
    requestAnimationFrame(animate);
  }

  animate();
}

// Run emoji animations
document.addEventListener('DOMContentLoaded', () => {
  animateEmoji('emoji-circle-main');
  animateEmoji('emoji-circle-emo');
});
