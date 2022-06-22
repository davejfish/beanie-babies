// import services and utilities
import { getBeanie } from '../services/beanies-service.js';
// import component creators
import createBeanieDetails from '../components/beanieDetails.js';
// declare state variables
import state from '../state.js';
// write handler functions
async function handleLoadPage() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    state.beanie = await getBeanie(id);
    display();
}
// Create each component: 
// - pass in the root element via querySelector
// - pass any needed handler functions as properties of an actions object 
const beanieDetails = createBeanieDetails(document.querySelector('#details'));

// Roll-up display function that renders (calls with state) each component
function display() {
    // Call each component passing in props that are the pieces of state this component needs
    beanieDetails({ beanie: state.beanie });
}

// Call display on page load
handleLoadPage();