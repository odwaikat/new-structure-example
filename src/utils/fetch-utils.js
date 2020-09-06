/**
 * Makes a fetch request to the provided url. The credentials fetch option is
 * always set to same-origin.
 * @function
 * @param {string} url - the url to make request
 * @param {object} options - options for the make request
 * @returns {Object}
 */
export const makeRequest = (url, options) => {
    return fetch(url, {
            ...options,
            credentials: 'same-origin',
            headers: {
                'secret-key': '$2b$10$UcZdTANTSJeXeKvwvu2/1ONX8Cr3QeDJK68wkhKIaKCDm9XRwy8n.'
            },
        })
        .then((response) => {
            // Provide an explicit alternative that has no warning
            response.cloneDangerously = response.clone

            // Replace the original `clone()` with one that has a warning
            response.clone = () => {
                console.warn( // See DESKTOP-348 and DESKTOP-349
                    'Calling clone on a response may break other functions ' +
                    'of the response, such as `response.text()`. Proceed at ' +
                    'your own risk. If you know what you are doing, you can ' +
                    'use `response.cloneDangerously()` to avoid this warning.'
                )
                return response.cloneDangerously()
            }

            return response
        })
}

/**
 * Form encodes nested URL query parameters using recursion
 * Adapted from http://stackoverflow.com/questions/1714786/querystring-encoding-of-a-javascript-object
 * @function
 * @param {object} obj - the object to encode a Uniform Resource Identifier (URI)
 * @param {string} prefix - the prefix value to use to encode a URI
 * @returns {String}
 */
export const formEncode = (obj, prefix) => {
    return Object.keys(obj)
        .map((key) => {
            const name = prefix ? `${prefix}[${key}]` : key
            const value = obj[key]
            if (value !== null && typeof value === 'object') {
                return formEncode(value, name)
            }
            return `${window.encodeURIComponent(name)}=${window.encodeURIComponent(value)}`
        })
        .join('&')
}

export const makeFormEncodedRequest = (url, data, options, contentType = 'application/x-www-form-urlencoded') => {
    return makeRequest(url, {
        ...options,
        body: formEncode(data),
        headers: {
            ...(options.headers || {}),
            'Content-Type': contentType,
            'secret-key': '$2b$10$UcZdTANTSJeXeKvwvu2/1ONX8Cr3QeDJK68wkhKIaKCDm9XRwy8n.'
        },
    })
}

export const requestAPIData = (url, method = 'GET', requestParams, formEncodedRequest = false, signal) => {
    if (formEncodedRequest) {
        return new Promise((resolve, reject) => {
            makeFormEncodedRequest(url, requestParams, {method})
                .then((response) => response.clone().json())
                .then((responseJSON) => resolve(responseJSON))
                .catch((error) => {
                    console.error(error)
                    reject({
                        error
                    })
                })
        })

    }
    return new Promise((resolve, reject) => {
        makeRequest(url, {signal})
            .then((response) => response.text())
            .then((responseJSON) => {
                resolve(JSON.parse(responseJSON))
            })
            .catch((error) => {
                console.error(error)
                reject({
                    error
                })
            })
    })
}