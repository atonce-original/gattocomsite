(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{7464:(e,o,c)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/collection",function(){return c(8701)}])},8701:(e,o,c)=>{"use strict";c.r(o),c.d(o,{default:()=>m});var n=c(4848),l=c(6540);let t=e=>{let{children:o}=e;return(0,n.jsx)("div",{children:(0,n.jsx)("main",{children:o})})};var r=c(270),a=c.n(r),i=c(9965),s=c.n(i),d=c(6715),u=c(4335);async function h(){try{console.log("Запрос информации обо всех коллекциях");let e=await u.A.get("".concat("https://api.eralab.net/api","/collection/all"));return console.log("Информация обо всех коллекциях получена:",e.data),e.data}catch(e){throw console.error("Ошибка при получении информации о коллекциях:",e),Error("Не удалось загрузить информацию о коллекциях.")}}let m=()=>{let[e,o]=(0,l.useState)([]),[c,r]=(0,l.useState)(!0),[i,u]=(0,l.useState)(null),m=(0,d.useRouter)(),{userAccountId:_}=m.query;(0,l.useEffect)(()=>{h().then(e=>{console.log("Полученные данные о коллекциях:",e),o(e),r(!1)}).catch(e=>{console.error("Ошибка при загрузке информации о коллекциях:",e),u("Не удалось загрузить информацию о коллекциях."),r(!1)})},[]);let p=(e,o)=>{if(_)m.push("/nfts?collectionName=".concat(encodeURIComponent(e),"&collectionAddress=").concat(encodeURIComponent(o),"&userAccountId=").concat(encodeURIComponent(_)));else{let c=localStorage.getItem("userAccountId");c?m.push("/nfts?collectionName=".concat(encodeURIComponent(e),"&collectionAddress=").concat(encodeURIComponent(o),"&userAccountId=").concat(encodeURIComponent(c))):alert("Адрес кошелька пользователя не найден!")}};return(0,n.jsx)(t,{children:(0,n.jsx)("div",{className:a().centeredContainer,children:c?(0,n.jsx)("p",{children:"Загрузка данных коллекций..."}):i?(0,n.jsx)("p",{className:a().errorBoundary,children:i}):(0,n.jsx)("div",{className:a().collectionGrid,children:e.map(e=>(0,n.jsxs)("div",{className:a().collectionCard,onClick:()=>p(e.collectionName,e.collectionAddress),children:[(0,n.jsx)(s(),{src:e.collectionImage,alt:e.collectionName,width:100,height:100,className:a().collectionImage}),(0,n.jsx)("h4",{children:e.collectionName}),(0,n.jsx)("p",{children:e.description})]},e.collectionAddress))})})})}},270:e=>{e.exports={centeredContainer:"Collection_centeredContainer__DJ9Nj",collectionGrid:"Collection_collectionGrid__r5miI",collectionCard:"Collection_collectionCard__dOJov",collectionImage:"Collection_collectionImage__a64CQ"}}},e=>{var o=o=>e(e.s=o);e.O(0,[909,965,636,593,792],()=>o(7464)),_N_E=e.O()}]);