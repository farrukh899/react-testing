export default function (state = null, action) {
    switch (action.type) {
        case 'SELECTED_ARTICLE':
            return action.payload;
            break;
        default:
    }
    return state;
}
