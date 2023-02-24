let api = function everything() {
    if (this.target == 'undefined') return new everything();

    const arrayEquality = (...arrs) => {
        if (arrs.length <= 1) return true;
        const length = arrs[0].length;

        if (!arrs.every(arr => arr.length == length)) return false;

        for (let main_array_index = 0; main_array_index < arrs.length; main_array_index++) {
            const main_array = arrs[main_array_index];

            for (let element of main_array) {

                for (let secondary_array_index = 0; secondary_array_index < arrs.length; secondary_array_index++) {
                    if (secondary_array_index == main_array_index) continue;
                    const secondary_array = arrs[secondary_array_index];
                    if (!elementIncluded(element, secondary_array)) return false;
                }

            }
        }

        return true;
    }

    this.arrayEquality = (...arrs) => {
        return arrayEquality(...arrs);
    }

    this.findDifference = (...arrs) => {

    }

    // helper functions

    function elementIncluded(element, array) {
        if (typeof element == 'object') return handleObject(element, array);
        else if (typeof element == 'function') return handleFunction(element, array);
        else return array.includes(element);
    }

}

module.exports = new api();