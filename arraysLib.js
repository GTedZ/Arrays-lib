let api = function everything() {
    if (this.target == 'undefined') return new everything();

    const arrayEquality = (stopOnException, ...arrs) => {   // this should be changed so that it actually creates a copy of each array and after 
        let non_included_elements = new Set();              // each match the element is removed from the array [1, 2, 3] and [1, 3, 3] only returns 
        if (arrs.length <= 1) return true;                  // [2] as the difference
        const length = arrs[0].length;

        if (!arrs.every(arr => arr.length == length) && stopOnException) return false;

        for (let main_array_index = 0; main_array_index < arrs.length; main_array_index++) {
            const main_array = arrs[main_array_index];

            for (let element of main_array) {

                for (let secondary_array_index = 0; secondary_array_index < arrs.length; secondary_array_index++) {
                    if (secondary_array_index == main_array_index) continue;
                    const secondary_array = arrs[secondary_array_index];
                    if (!elementIncluded(element, secondary_array)) {
                        if (stopOnException) return false;
                        else handleAddElementToSet(element, non_included_elements)
                    }
                }

            }
        }

        if (stopOnException) return true;
        else return Array.from(non_included_elements);

        function handleAddElementToSet(element, set) {
            if (typeof element == 'object') return handleObject(element, array);
            else if (typeof element == 'function') return handleFunction(element, array);
            else return set.add(element);
        }
    }

    this.arrayEquality = (...arrs) => {
        return arrayEquality(true, ...arrs);
    }

    this.findDifference = (...arrs) => {
        return arrayEquality(false, ...arrs);
    }

    // helper functions

    function elementIncluded(element, array) {
        if (typeof element == 'object') return handleObject(element, array);
        else if (typeof element == 'function') return handleFunction(element, array);
        else return array.includes(element);
    }

}

module.exports = new api();