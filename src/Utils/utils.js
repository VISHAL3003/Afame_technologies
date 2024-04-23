export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}

export const scrollFunction = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView();
}


