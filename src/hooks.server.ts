import { ADMIN_LOGIN } from '$env/static/private';

export const handle = async ({ event, resolve }) => {
    const url = new URL(event.request.url);
    const path = url.pathname;

    // Check if the request is for the /api/admin endpoint
    if (path.includes('/api/cv')) {
        const auth = event.request.headers.get('Authorization');

        if (!auth || auth !== `Basic ${btoa(ADMIN_LOGIN)}`) {
            return new Response('Unauthorized', {
                status: !auth ? 401 : 403,
                headers: {
                    'WWW-Authenticate': 'Basic realm="User Visible Realm", charset="UTF-8"'
                }
            });
        }
    }

    // Allow other requests to pass through without authentication
    return resolve(event);
};
