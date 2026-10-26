import { concatenation } from './concatenation.js';

const button = document.querySelector<HTMLButtonElement>('#concat-btn');
const result = document.querySelector<HTMLParagraphElement>('#result');

button?.addEventListener('click', () => {
  if (result) {
    result.textContent = concatenation('Hello', 'TypeScript');
  }
});
