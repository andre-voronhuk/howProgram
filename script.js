var $ = document.querySelector.bind(document);

function tabNavigation() {


    var html = {
        links: [...$('.tab-links').children],
        contents: [...$('.tab-content').children],
        openTab: $(`[data-open]`),

    };

    function hideAllTabContent() {


        html.contents.forEach(section => {
            section.style.display = 'none';

        });
    }
    function removeAllActiveClass() {
        html.links.forEach(tab => {
            tab.className -= ' active';
            console.log("Removing inative classes  ");
        });
    }
    function showCurrentTab(id) {
        hideAllTabContent();


        console.log(id);
        const tabContent = $('#' + id);

        tabContent.style.display = 'block';

    }
    function selectTab(event) {
        const target = event.currentTarget;
        showCurrentTab(target.dataset.id);
        removeAllActiveClass();
        target.className += ' active';
    }

    function listenForChange() {
        html.links.forEach(tab => {

            tab.addEventListener('click', selectTab);
        });

    }
    function init() {
        hideAllTabContent();
        listenForChange();
        html.openTab.click();
    }
    return {
        init
    };

}
addEventListener('load', () => {
    var navi = tabNavigation();
    navi.init();

});