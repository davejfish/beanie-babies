export default function createBeanieDetails(root) {
    const head = document.getElementById('page-name');
    const name = root.querySelector('.beanie-name');
    const img = root.querySelector('img');
    const [birthday, release, theme, astro] = root.querySelectorAll('p');

    return ({ beanie }) => {
        head.textContent = beanie.title;
        name.textContent = beanie.title;
        img.src = beanie.image;
        birthday.textContent = beanie.birthday;
        release.textContent = beanie.releaseDate;
        theme.textContent = beanie.theme;
        astro.textContent = beanie.astroSign;
    };
}