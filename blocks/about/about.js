export default function decorate(block) {
  const divs = block.children;

  const containerElm = document.createElement('div');

  [...divs].forEach((div) => {
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('image-container');
    const pcitureElm = div.querySelector('picture');
    imgDiv.append(pcitureElm);

    const pElems = div.querySelectorAll('p');
    [...pElems].forEach((p, index) => {
      if (index === 0) {
        const h1Elem = document.createElement('h1');
        h1Elem.textContent = p.textContent;
        imgDiv.append(h1Elem);
      }
      if (index === 1) {
        const h2Elem = document.createElement('h2');
        h2Elem.textContent = p.textContent;
        imgDiv.append(h2Elem);
      }
    });

    containerElm.append(imgDiv);
  });

  block.innerHTML = '';
  block.append(containerElm);
}
