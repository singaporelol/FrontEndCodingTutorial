let p=new Promise((resolve, reject)=>{
  setTimeout(function(){
    console.log('模拟异步请求')
    resolve({name:"zhangsan"})
  },3000)
})

p.then(data=>{
  console.log(data);
  return data
}).then(data=>{
  console.log(data)
}).catch(reject=>console.log('aaa'))