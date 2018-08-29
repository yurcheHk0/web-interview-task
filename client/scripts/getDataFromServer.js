const url = 'http://localhost:5000/fetch-dna-match';

import areValuesEquals from './areValuesEquals';
import renderView from './renderView';

/**
 * Get data from server
 */
export default function getDataFromServer() {
    fetch(url)
        .then((resp) => resp.json())
            .then((data) => data.data)
                .then(function (data) {

                    let yourDna = prepareData(data.your_dna) || [];
                    let otherDna = prepareData(data.other_dna) || [];

                    markIfEq(yourDna, otherDna);

                    renderView('my-dni', otherDna);
                    renderView('other-dni', otherDna);

                 });
}

function prepareData(dna) {
    let result = [];
    dna.map(function (sub_regions) {
        return sub_regions.sub_regions.map(function (sub_regions) {
            return sub_regions.sub_regions.map(function (sub_regions) {
                return result.push(sub_regions);
            });
        });
    });
    return result;
}

function markIfEq (yourDna, otherDna) {
    yourDna.map(function (yourDna) {
        return otherDna.map(function (otherDna) {
            if (otherDna.region === yourDna.region) {
                otherDna.value = Number(otherDna.value);
                yourDna.value = Number(yourDna.value);

                if (areValuesEquals(otherDna, yourDna)) {
                    otherDna.eq = true;
                }
            }
        });
    });
}
