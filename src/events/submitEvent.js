import dom from '../dom.js';
import { submitHandler } from '../handlers/submitHandler.js';

export const submitEvent = () => {
    dom.form.addEventListener('submit', submitHandler);
};
