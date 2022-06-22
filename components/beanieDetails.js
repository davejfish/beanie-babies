export default function createBeanieDetails(root) {
    const head = document.getElementById('page-name');
    const name = root.querySelector('.beanie-name');
    const img = root.querySelector('img');
    const [birthday, release, theme, astro] = root.querySelectorAll('p');

    return ({ beanie }) => {
        head.textContent = beanie.title;
        name.textContent = beanie.title;
        img.src = beanie.image;
        birthday.textContent = `birthday: ${beanie.birthday}`;
        release.textContent = `release date: ${beanie.releaseDate}`;
        theme.textContent = `theme: ${beanie.theme}`;
        astro.textContent = `star sign: ${beanie.astroSign}`;
    };
}