export const fetchResp = (response => {
    if (response.ok) {
        // 200-299
        return response.json();
    }
    throw new Error(response.status, response.statusText)
});