const state = [];

state.beanies = [];
state.beanie = {};

export function initialize() {
    state.beanies = [];
    state.beanie = {
        title: 'thug nasty nasty',
        image: '../assets/ningyou.png',
        birthday: '11/08/1988',
        releaseDate: '1988',
        theme: 'superfish',
        astroSign: 'scorpio'
    };
}

initialize();

export default state;