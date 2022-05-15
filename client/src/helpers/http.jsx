export class HttpError extends Error {
    constructor(status, statusText) {
        super("My custom exception" + statusText);
        this.status = status;
    }
}

export async function fetchJSON(url) {
    const res = await fetch(url);
    if (res.status === 204) {
        return null;
    } else if (res.ok) {
        return await res.json();
    } else {
        throw new HttpError(res.status, res.statusText);
    }
}

export async function deleteJSON(url, object) {
    const res = await fetch(url, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(object),
    });
    if (!res.ok) {
        throw new Error(`Failed to delete ${res.status}: ${res.statusText}`);
    }
}

export async function postJSON(url, object) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(object),
    });
    if (!res.ok) {
        throw new Error(`Failed to post ${res.status}: ${res.statusText}`);
    }
}


export async function fetchJSON_client(url) {
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`Failed to fetch ${res.status}: ${res.statusText}`);
    }
    return await res.json();
}