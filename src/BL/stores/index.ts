import {
    GOOGLE_STORE,
    TESLA_STORE,
    MICROSOFT_STORE
} from '../consts/store';

import TeslaStore from './Tesla.store';
import GoogleStore from './Google.store';
import MicrosoftStore from "./Microsoft.store";

/**
 * Initiate all stores
 */
const googleStore = new GoogleStore();
const microsoftStore = new MicrosoftStore();
const teslaStore = new TeslaStore();

/**
 * Save the instance in global object
 */
const rootStores = {
    [MICROSOFT_STORE]: microsoftStore,
    [GOOGLE_STORE]: googleStore,
    [TESLA_STORE]: teslaStore
};

// Debugging purpose
if (process.env.NODE_ENV !== 'production') {
    (window as any)['stores'] = rootStores;
}

export default rootStores;
