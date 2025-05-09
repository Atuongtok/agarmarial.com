// Get the container
const container = document.getElementById('form-container');

// Create the form
const form = document.createElement('form');
form.style.width = '300px';
form.style.margin = '50px auto';
form.style.padding = '20px';
form.style.border = '1px solid #ccc';
form.style.borderRadius = '8px';
form.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
form.style.fontFamily = 'Arial, sans-serif';

// Name field
const nameLabel = document.createElement('label');
nameLabel.textContent = 'Name';
nameLabel.style.display = 'block';

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.name = 'name';
nameInput.placeholder = 'Enter your name';
nameInput.required = true;
Object.assign(nameInput.style, {
  width: '100%', padding: '10px', marginBottom: '15px',
  border: '1px solid #ccc', borderRadius: '4px'
});

// Email field
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Email';
emailLabel.style.display = 'block';

const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.name = 'email';
emailInput.placeholder = 'Enter your email';
emailInput.required = true;
Object.assign(emailInput.style, {
  width: '100%', padding: '10px', marginBottom: '15px',
  border: '1px solid #ccc', borderRadius: '4px'
});

// Submit button
const submitBtn = document.createElement('button');
submitBtn.type = 'submit';
submitBtn.textContent = 'Submit';
Object.assign(submitBtn.style, {
  width: '100%', padding: '10px', border: 'none',
  backgroundColor: '#28a745', color: 'white',
  fontWeight: 'bold', cursor: 'pointer', borderRadius: '4px'
});

submitBtn.addEventListener('mouseenter', () => {
  submitBtn.style.backgroundColor = '#218838';
});
submitBtn.addEventListener('mouseleave', () => {
  submitBtn.style.backgroundColor = '#28a745';
});

// Focus styling
[nameInput, emailInput].forEach(input => {
  input.addEventListener('focus', () => {
    input.style.borderColor = '#007BFF';
  });
  input.addEventListener('blur', () => {
    input.style.borderColor = '#ccc';
  });
});

// Message display
const message = document.createElement('div');
message.style.marginTop = '15px';
message.style.fontSize = '14px';
message.style.display = 'flex';
message.style.alignItems = 'center';

// Green tick element (✓)
const greenTick = document.createElement('span');
greenTick.textContent = '✓';
greenTick.style.color = 'green';
greenTick.style.fontSize = '18px';
greenTick.style.marginRight = '8px';
greenTick.style.display = 'none'; // hidden initially

// Append elements to the form
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(submitBtn);
form.appendChild(message);
message.appendChild(greenTick); // tick goes inside message container

// Add to page
container.appendChild(form);

// Form submit handler
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name || !email) {
    greenTick.style.display = 'none'; // hide tick
    message.textContent = ' Please fill in all fields.';
    message.style.color = 'red';
    message.prepend(greenTick); // just in case
  } else {
    greenTick.style.display = 'inline';
    message.style.color = 'green';
    message.textContent = ` Thanks, ${name}! We received your email: ${email}`;
    message.prepend(greenTick); // tick + message
    form.reset();
  }
});
// create the form header

const nav = document.createElement('h1');
nav.textContent = 'welcome to my javascript form';
nav.style.textAlign = 'center';
nav.style.marginTop = '-330px';
nav.style.fontSize = '20px';
nav.style.border = '2px solid #fff';
document.body.appendChild(nav);

//animation

document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("form-container");
    let direction = 1; // 1 = down, -1 = up
    let position = 0;
  
    function animate() {
      // Move between -20px and 20px vertically
      position += direction * 0.5; // speed
      if (position > 20 || position < -20) {
        direction *= -1; // reverse direction
      }
  
      content.style.transform = `translateY(${position}px)`;
      requestAnimationFrame(animate); // keep the animation going
    }
  
    animate(); // start animation
  });