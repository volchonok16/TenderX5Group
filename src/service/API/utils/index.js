export const methodHTTP = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
    PATCH: 'PATCH'
};

export const convertGetParamsToString = (getParams) => {
    const esc = encodeURIComponent;

    return Object.keys(getParams)
        .map(k => typeof getParams[k] === 'object'
            ? (getParams[k] || []).map(v => esc(k) + '=' + esc(v)).join('&')
            : esc(k) + '=' + esc(getParams[k])
        )
        .join('&');
};