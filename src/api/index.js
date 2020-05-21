import fetch from '../utils/fetch';

export function getData() {
    return fetch({
        url: '/api/banner/friendlyLink',
        method: 'get',
    })
}
