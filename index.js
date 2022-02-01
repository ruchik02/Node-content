const fs=require('fs');
// fs.writeFileSync('read.txt',"Welcome to my channel ");
// fs.writeFileSync('read.txt'," Thapa technical ,Welcome to my channel ");
// fs.appendFileSync('read.txt',"Ruchika sharma");
// const buf_data=fs.readFileSync('read.txt');
// console.log(buf_data);
// org_data=buf_data.toString();
// console.log(org_data);
fs.renameSync('read.txt',"readwrite.txt");
