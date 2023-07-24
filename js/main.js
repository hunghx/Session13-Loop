// Cấu trúc lặp for
for (let i = 0; i < 10; i++) {
  // khối code thực thi khi thỏa mãn điều kiên lặp
}

// hiển thị 100 số tự nhiên đầu tiên
for (let i = 0; i < 100; i++) {
  console.log(`${i+1} x 5 = ${(i+1)*5}`);
}
// let count = 1;
// for (let i = 2; i < 100; i = i + 2) {
//     // 49 lần lặp
//     console.log("lần lặp thứ "+count);
//     count++;
// }

// kết hợp js vào html để thay đổi nội dung của 1 thẻ html
//  lấy ra thẻ tbody thông qua id
let tbody = document.getElementById("table-body");
console.log(tbody);
// tbody.innerHTML = "<tr><td>1 x 5 = 5</td></tr><tr><td>1 x 5 = 5</td></tr><tr><td>2 x 5 = 10</td></tr><tr><td>3 x 5 = 15</td></tr>" ;

let box = document.getElementById("box");
// box.innerHTML= "<h1>Hello World</h1>";
box.innerText = "Đây là nội dung của box";
 let str = "";
for(let i = 1 ; i<=10 ;i++){
    str = str + `<tr><td>${i} x 5 = ${i*5}</td></tr>` //i=1 :  <tr><td>1 x 5 = 5</td></tr>
                                                    // i=2 : <tr><td>1 x 5 = 5</td></tr><tr><td>2 x 5 = 10</td></tr>
}
// tbody.innerHTML = str;

// Nối chuỗi bằng dấu ``
let x=10;
console.log(`Giá trị ${"đây là chuỗi con"} của biến ${x+5} x * 10 = ${x*10}`);
// tính tổng của 100 sô tự nhiên đầu tiên , của n số tự nhiên đầu tiên(n nhập vào);
// Input =100 ;
// Output = 5050;
// biến tổng 
// Nhập vào giá trị 
// let n = +prompt("Nhập vào số tự nhiên n để tính tổng")
// if(n>0){
// let sum = 0; // chưa tính tổng 
// for (let i = 1; i <=n ; i++){
//     sum = sum + i;
// }
// //  hiển thị ra kết quả
// document.write(sum);
// }

// Cấu trục lặp while và do ... while 
// cho phép nhập đến khi nhập số 0 thì dừng lại
// let sum = 0;
// let n;
// while(n>0){ // điều kiện để thực thi khối lệnh
//     // thực thi khối lệnh
//     n = +prompt("Nhập vào 1 số");
// }

// cấu trúc lặp do ... while 

// do{
//     // thực thi khối lệnh 
//  n = +prompt("Nhập vào 1 số");
// }while(n>=0); // n=0 => điều kiện while bị sai => không thực thi khối lệnh và thoát khỏi vòng lặp

// từ khóa break , continue
// break giúp dừng và thoát khỏi vòng lặp ngay lập tức
// continue giúp bỏ qua toàn bộ khối lệnh bên dưới nó để bước qua vòng lăp mới
for(let i =1;i<10;i++){
    if(i==5){
        // break;
        continue;
    }
    console.log(i);
}

// cho phép nhập đến khi nhập số 0 thì dừng lại

// while (true) {
//     let n = +prompt("Nhâp vào 1 số bất kì ");
//     if(n==0){
//         // thì dừng vòng lặp
//         break;
//     }
// }
// let sum = 0;
// let i = 0;
// while(i<10){
//     sum += i;
//     i++;
// }
// vòng lập lồng nhau

// in bảng củu chương
let col = "";
for(let i=1;i<10;i++){
      col+=`<th>${i}x</th>`
}

let row = "";
for(let i=1;i<=10;i++){
    // i chạy từ 1  đên 9  -> bảng cửu chương
    let item = ""
    for(let j=1;j<10;j++){
            // với mỗi giá trị của i , thì j chạy từ 1 -> 10 // cấc phép nhân từ 1->10
            item+=`<td>${j} x ${i} = ${i*j}</td>`
    }
    row+=`<tr>${item}</tr>`
}
document.getElementById("table-head").innerHTML = `<tr>${col}</tr>`;
document.getElementById("table-body").innerHTML = `<tr>${row}</tr>`;

