// const arr=[1,2,3,4];

// const double_arr=arr.map((item)=>item*2);
// // console.log(double_arr);


// const arr=[1,2,3,4,5,6,7,8,9];
// const cal_even_arr=arr.filter((item)=> item%2==0);
// console.log(cal_even_arr);

// const students = [
//   { name: 'Quincy', grade: 96 },
//   { name: 'Jason', grade: 84 },
//   { name: 'Alexis', grade: 100 },
//   { name: 'Sam', grade: 65 },
//   { name: 'Katie', grade: 90 }
// ];


// const marks=students.filter((student)=> student.grade>80  && student.name=='Katie');
// console.log(marks);


// const numbers=[1,2,3,57,432,5,6,8,0];
// const new_arr=numbers.filter((item)=>item>4)

// console.log(new_arr);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const opr=books.filter((bk)=>bk.publish>1987 && bk.genre=='Science')
  console.log(opr);
  