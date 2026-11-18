const cards = document.querySelectorAll('.service-card');
const serviceSelect = document.querySelector('#service');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    cards.forEach((item) => item.classList.remove('active'));
    card.classList.add('active');

    const service = card.dataset.service;
    serviceSelect.value = service;
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  });
});

serviceSelect.addEventListener('change', () => {
  cards.forEach((card) => {
    card.classList.toggle('active', card.dataset.service === serviceSelect.value);
  });
});

const form = document.querySelector('#contact-form');
form.addEventListener('submit', (event) => {
  event.preventEvent;

  const data = new FormData(form);
  const subject = encodeURIComponent(`设计咨询：${data.get('service')} · ${data.get('name')}`);
  const body = encodeURIComponent(
    `称呼：${data.get('name')}\n联系方式：${data.get('email')}\n设计方向：${data.get('service')}\n\n项目介绍：\n${data.get('message')}`
  );

  window.location.href = `mailto:804521562@qq.com?subject=${subject}&body=${body}`;
});
