(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[148],{7464:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/collection",function(){return t(8442)}])},8442:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>C});var n=t(4848),c=t(6540),l=t(5767),r=t(270),a=t.n(r),i=t(9965),s=t.n(i),d=t(6715),h=t(4335);async function u(e,o){let t=new TextEncoder,n=await crypto.subtle.importKey("raw",t.encode(o),{name:"HMAC",hash:"SHA-256"},!1,["sign"]);return btoa(String.fromCharCode(...new Uint8Array(await crypto.subtle.sign("HMAC",n,t.encode(e)))))}async function _(){try{let e=JSON.stringify({}),o=Math.floor(Date.now()/1e3).toString(),t=await u(e,"iO0HgZuPjY6OVm9UxpG9hGuhWujuiERL8t5CFvrJB0tWSN18TsWl86eNxZJkFpYMv0mm7tz2MnM6g0v8wQPYTw==");console.log("Запрос информации обо всех коллекциях");let n=await h.A.get("".concat("https://api.eralab.net/api","/collections"),{headers:{"Content-Type":"application/json","X-TIMESTAMP":o,"X-SIGNATURE":t}});return console.log("Информация обо всех коллекциях получена:",n.data),n.data}catch(e){throw console.error("Ошибка при получении информации о коллекциях:",e),Error("Не удалось загрузить информацию о коллекциях.")}}let C=()=>{let[e,o]=(0,c.useState)([]),[t,r]=(0,c.useState)(!0),[i,h]=(0,c.useState)(!1),u=(0,d.useRouter)(),{userAccountId:C}=u.query;if((0,c.useEffect)(()=>{(async()=>{r(!0),h(!1);try{let e=await _();console.log("Полученные данные о коллекциях:",e),o(e)}catch(e){console.error("Ошибка при загрузке информации о коллекциях:",e),h(!0)}finally{r(!1)}})()},[]),i)throw Error("Network Error");let m=(e,o)=>{let t=C||localStorage.getItem("userAccountId");t?u.push("/nfts?collectionName=".concat(encodeURIComponent(e),"&collectionAddress=").concat(encodeURIComponent(o),"&userAccountId=").concat(encodeURIComponent(t))):alert("Адрес кошелька пользователя не найден!")};return(0,n.jsx)(l.A,{children:(0,n.jsxs)("div",{className:a().centeredContainer,children:[(0,n.jsx)("h1",{className:a().header,children:"Collections"}),t?(0,n.jsx)("p",{children:"Загрузка данных коллекций..."}):(0,n.jsx)("div",{className:a().collectionGrid,children:e.map(e=>(0,n.jsxs)("div",{className:a().collectionCard,onClick:()=>m(e.collectionName,e.collectionAddress),children:[(0,n.jsx)(s(),{src:e.collectionImage,alt:e.collectionName,width:70,height:70,className:a().collectionImage}),(0,n.jsxs)("div",{className:a().collectionContent,children:[(0,n.jsx)("h4",{children:e.collectionName}),(0,n.jsx)("p",{children:e.description})]})]},e.collectionAddress))})]})})}},270:e=>{e.exports={centeredContainer:"Collection_centeredContainer__DJ9Nj",header:"Collection_header__vbbVF",collectionGrid:"Collection_collectionGrid__r5miI",collectionCard:"Collection_collectionCard__dOJov",collectionImage:"Collection_collectionImage__a64CQ",collectionContent:"Collection_collectionContent__Ov2mY"}}},e=>{var o=o=>e(e.s=o);e.O(0,[909,965,636,593,792],()=>o(7464)),_N_E=e.O()}]);