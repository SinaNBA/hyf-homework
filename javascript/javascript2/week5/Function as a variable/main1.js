var myArr = [function () {
        console.log('Im func1')
    },
    function () {
        console.log('Im func2')
    },
    function () {
        console.log('Im func2')
    }
];

for (let i = 0; i < myArr.length; i++) {
    myArr[i]();
}