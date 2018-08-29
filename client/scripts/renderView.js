/**
 * Render result
 */
export default function renderView(idName, data) {
    let $el = document.getElementById(idName);
    let elem = prepareItem(data, idName);

    appendHtml($el, elem);
}

function prepareItem(data, idName){
    let li = '';

    data.map(function(item){
        if (idName === 'my-dni') {
            li = li + '<li> Ethnicity: '  + item.region + ', percentage: ' +  item.value + '</li>';
        } else {
            if (item.eq) {
                li = li + '<li>[EQ] Region: '  + item.region + ', percentage: ' +  item.value + '</li>';
            } else {
                li = li + '<li>Region: '  + item.region + ', percentage: ' +  item.value + '</li>';
            }
        }
    });

    return li;
}

function appendHtml(el, str) {
    el.innerHTML = str;
}