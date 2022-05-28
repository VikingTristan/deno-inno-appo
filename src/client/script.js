function createInnovationDayElement(title, images, link, description) {
    const innovationDayElement = document.createElement("div");
    innovationDayElement.classList.add("innovation-day");
    const headerElement = document.createElement("h2");
    headerElement.textContent = title;

    innovationDayElement.appendChild(headerElement);

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = description;

    innovationDayElement.appendChild(descriptionElement);

    images?.forEach(image => {
        const imageElement = document.createElement("img");
        imageElement.src = image;
        innovationDayElement.appendChild(imageElement);
    });

    if (link) {
        const linkElement = document.createElement("a");
        linkElement.href = link;
        linkElement.textContent = link;
        innovationDayElement.appendChild(linkElement);
    }

    return innovationDayElement;
}

fetch('/api/innovation-days')
    .then(response => response.json())
    .then(innovationDays => {
        const innovationsContainerElement = document.getElementById("container")

        innovationDays?.forEach(innovationDay => {
            innovationsContainerElement.appendChild(createInnovationDayElement(innovationDay.title, innovationDay.images, innovationDay.link, innovationDay.description))
        });
    });