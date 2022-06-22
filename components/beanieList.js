export default function createBeanieList(root) {
    return ({ beanies }) => {
        root.innerHTML = '';
        for (let beanie of beanies) {
            const card = beanieCard({ beanie });
            root.append(card);
        }
    };
}

export function beanieCard({ beanie }) {
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.classList.add('card');
    a.href = `detail/?id=${beanie.id}`;

    const img = document.createElement('img');
    img.src = beanie.image;
    img.alt = beanie.title;

    const h2 = document.createElement('h2');
    h2.textContent = beanie.title;

    a.append(img, h2);
    li.append(a);
    return li;
}