// Есть набор чисел в массиве, который представляет количество последовательных дней возможного бронирования квартиры,
// Вы в качестве арендодателя хотите выбрать последовательность, которая максимизирует количество дней пребывания,
// однако Вам нужно как минимум 1-дневный перерыв между бронированиями для уборки. Написать ф-цию нахождения. Пример:
// [7, 1, 2, 5] => 12
// 7 => Авг 1 - Авг 7
// 1 => Авг 7 - Авг 8
// 2 => Авг 8 - Авг 10
// 5 => Авг 10 - Авг 15
//
//     [3, 6, 4] => 7
//     [4, 10, 3, 1, 5] => 15

const arr = [16, 7, 12, 16, 11, 16];

function maxDayInArr(arr) {

    let maxSum = Math.max(...arr);
    let firstIndex,
        secondIndex;

    for (let i = 0; i < arr.length; i++) {
        let firstItem;
        const step = 2;
        firstItem = i + step;
        for (let j = firstItem; j < arr.length; j++) {
            if (((arr[i] + arr[j])) > maxSum) {
                maxSum = arr[i] + arr[j];
                firstIndex = i;
                secondIndex = j;
            }
        }
    }

    function madeNewArr() {
        secondIndex--;
        arr.splice(secondIndex, 3)
        if (firstIndex === 0) {
            arr.splice(0, 2)
        } else {
            firstIndex--;
            arr.splice(firstIndex, 3)
        }

        return arr
    }

    let testArr = madeNewArr();

    return {
        testArr,
        maxSum,
    }

}

function resultSum(arr) {
    let resultObj = maxDayInArr(arr);
    let lengthArr = resultObj.testArr.length;

    if (lengthArr !== 0) {
        let arrResult = maxDayInArr(resultObj.testArr);
        return arrResult.maxSum += resultObj.maxSum;

    }
    return resultObj.maxSum
}


console.log(resultSum(arr))

