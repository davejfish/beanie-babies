// import services and utilities
import { getBeanies } from './services/beanies-service.js';
// import component creators
import createBeanieList from './components/beanieList.js';
// declare state variables
import state from './state.js';
// write handler functions
async function handleLoadPage() {
    state.beanies = await getBeanies();
    display();
}
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const beaniesList = createBeanieList(document.querySelector('#beanie-cards'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    beaniesList({ beanies: state.beanies });
}

// Call display on page load
handleLoadPage();
