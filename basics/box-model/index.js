const awesome = document.querySelector('[data-element="awesome"]');
const intrinsicSwitch = document.querySelector('#intrinsic-switch');

// Set sizing attribute based on switch
intrinsicSwitch.addEventListener('change', () => {
  awesome.setAttribute(
    'data-sizing',
    intrinsicSwitch.checked ? 'intrinsic' : 'extrinsic',
  );
});

const alertBox = document.querySelector('[role="alert"]');
const diagram = document.querySelector('svg');
const sizeSwitch = document.querySelector('#size-switcher');

const messages = {
  'content-box': `
      <p>If the box is <code>600px</code> wide and we have a border width of <code>10px</code>, a margin of <code>20px</code>, and <code>10px</code> of padding, the total width of the box would be <code>640px</code>.</p>
    `,
  'border-box': `
      <p>If the box is <code>600px</code> wide and we have a border width of <code>10px</code>, a margin of <code>20px</code>, and <code>10px</code> of padding, the total width of the box would be <code>600px</code>.</p>
    `,
};

const renderMessage = (key = 'border-box') => {
  alertBox.innerHTML = messages[key];
};

// Set sizing attribute based on switch
sizeSwitch.addEventListener('change', () => {
  let sizing = sizeSwitch.checked ? 'border-box' : 'content-box';
  diagram.setAttribute('data-size', sizing);
  renderMessage(sizing);
});

renderMessage();
