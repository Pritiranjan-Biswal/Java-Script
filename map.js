// const arr=[1,2,3,4];

// const double_arr=arr.map((item)=>item*2);
// // console.log(double_arr);


// const arr=[1,2,3,4,5,6,7,8,9];
// const cal_even_arr=arr.filter((item)=> item%2==0);
// console.log(cal_even_arr);

const students = [
  { name: 'Quincy', grade: 96 },
  { name: 'Jason', grade: 84 },
  { name: 'Alexis', grade: 100 },
  { name: 'Sam', grade: 65 },
  { name: 'Katie', grade: 90 }
];


const marks=students.filter((student)=> student.grade>80  && student.name=='Katie');
console.log(marks);
