let downloadedBooks = new Set();

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function findBookNames() {
    const warriorAreas = document.querySelectorAll('.DigitalEntitySummary-module__container_3pUojes0Jk94VKwEcoGXyq');
    const bookNames = [];

    for (const warriorArea of warriorAreas) {
        const imageContainer = warriorArea.querySelector('[id^="content-image-"]');
        
        if (imageContainer) {
            const bookName = imageContainer.id.split('-')[2];
            if (!downloadedBooks.has(bookName)) {
                bookNames.push(bookName);
                downloadedBooks.add(bookName);
            }
        }
    }

    return bookNames;
}

async function clickElements(bookNames) {
    for (const bookName of bookNames) {
        const usbButton = document.querySelector(`#DOWNLOAD_AND_TRANSFER_ACTION_${bookName}`);
        usbButton.click();
        await delay(1000);

        const radioButton = document.querySelector(`#download_and_transfer_list_${bookName}_0`);
        radioButton.click();
        await delay(1000);

        const confirmButton = document.querySelector(`#DOWNLOAD_AND_TRANSFER_ACTION_${bookName}_CONFIRM`);
        confirmButton.click();
        await delay(1000);

        const closeButton = document.querySelector('#notification-close');
        closeButton.click();
        await delay(1000);
    }
}

async function processPage() {
    const bookNames = findBookNames();
    await clickElements(bookNames);
}

async function processAllPages() {
    // 获取当前活跃的页面的索引
    let activePageIndex = Array.from(document.querySelectorAll('.page-item')).findIndex(item => item.classList.contains('active'));

    while (activePageIndex < document.querySelectorAll('.page-item').length - 1) {
        // 处理当前页面
        await processPage();

        // 获取所有的页面链接元素
        const pageItems = document.querySelectorAll('.page-item');

        // 点击下一个页面链接
        pageItems[activePageIndex + 1].click();

        // 等待页面加载
        await delay(5000);

        // 更新活跃的页面的索引
        activePageIndex = Array.from(document.querySelectorAll('.page-item')).findIndex(item => item.classList.contains('active'));
    }

    // 处理最后一个页面
    await processPage();
}

processAllPages();
