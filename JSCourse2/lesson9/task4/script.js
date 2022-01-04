const getMessagesForBestStudents = (all, badList) => all.filter((elem) => !badList.includes(elem)).map((elem) => 'Good job, ' + elem);

console.log(getMessagesForBestStudents(['a', 'b', 'c', 'd'], ['b', 'd']));
