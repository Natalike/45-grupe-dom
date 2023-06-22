function renderHeader(isHomePage) {
    const bodyDOM = document.body;
    const url = isHomePage ? '' : '.';
    const HTML = `<header>
                        <a href="${url}./".Home</a>
                        <a href="${url}./clicer/"./Clicer</a>
                        <a href="${url}./list/">List</a>
                        </header>`;
    }

    bodyDOM.insertAdjacentHTML('afterbegin', HTML);


export { renderHeader };