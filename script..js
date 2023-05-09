const insert = () => {
    let type = document.querySelector('#type').value;
    let label = document.querySelector('#label').value;

    switch(type) {
      case 'text':
        appendText(label);
        break;
      case 'button':
        appendButton(label);
        break;
      case 'radio':
        appendRadio(label);
        break;
      case 'checkbox':
        appendCheckbox(label);
        break;
    }
  }

  const appendText = (label = "No label") => {
    let el = document.createElement('input');

    el.setAttribute('type', 'text');
    el.setAttribute('class', 'form-control my-2');
    el.setAttribute('placeholder', label);

    let container = document.createElement('div');
    container.setAttribute('class', 'input-container');
    container.append(el);

    document.querySelector('#display').append(container);
  }

  const appendButton = (label = "No label") => {
    let el = document.createElement('button');

    el.setAttribute('type', 'text');
    el.setAttribute('class', 'btn btn-primary my-2');
    el.textContent = label;

    let container = document.createElement('div');
    container.setAttribute('class', 'button-container');
    container.append(el);

    document.querySelector('#display').append(container);
  }

  const appendRadio = (label = "No label") => {
    let el = document.createElement('input');

    el.setAttribute('type', 'radio');
    el.setAttribute('name', 'radio-group');
    el.setAttribute('id', label);
    el.setAttribute('class', 'form-check-input');

    let labelEl = document.createElement('label');
    labelEl.setAttribute('for', label);
    labelEl.setAttribute('class', 'form-check-label');
    labelEl.textContent = label;

    let container = document.createElement('div');
    container.setAttribute('class', 'radio-container');
    container.append(el, labelEl);

    document.querySelector('#display').append(container);
  }

  const appendCheckbox = (label = "No label") => {
    let el = document.createElement('input');

    el.setAttribute('type', 'checkbox');
    el.setAttribute('id', label);
    el.setAttribute('class', 'form-check-input');

    let labelEl = document.createElement('label');
    labelEl.setAttribute('for', label);
    labelEl.setAttribute('class', 'form-check-label');
    labelEl.textContent = label;

    let container = document.createElement('div');
    container.setAttribute('class', 'checkbox-container');
    container.append(el, labelEl);

    document.querySelector('#display').append(container);
  }

  const removeInsertedElement = () => {
    let insertedElement = document.querySelector('#display > *:last-child');
    if (insertedElement) {
      insertedElement.remove();
    }
  }