import $ from './dom';

const themes = ["festive", "azure", "flamingo"];
let $usersDna = document.getElementsByClassName('users-dna');
let $usersDnaTitle = document.getElementsByClassName('users-dna-title');

/**
 * Find the buttons in the DOM and attach onclick to change the body class accordingly
 */
export default function bindThemeEvents() {
    for (let themeIndex = 0; themeIndex < themes.length; themeIndex++) {
        document.getElementById('theme-btn-' + themeIndex).onclick = function () {
            document.body.className = themes[themeIndex];
        };
    }

    //User DNA blocks bind event
    Object.keys($usersDnaTitle).map(function(objectKey) {
        $usersDnaTitle[objectKey].onclick = function(e){
            //Toggle only one block
            //$.toggleClass(e.currentTarget, 'active');

            //Toggle both block at the same time
            toggleUsersDNA()
        };
    });
}

//User DNA blocks toggle
function toggleUsersDNA() {
    Object.keys($usersDna).map(function(objectKey) {
        $.toggleClass($usersDna[objectKey], 'active');
    });
}