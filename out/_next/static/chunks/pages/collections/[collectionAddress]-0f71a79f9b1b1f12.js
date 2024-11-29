(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[496],{6761:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/collections/[collectionAddress]",function(){return n(1629)}])},6076:(e,t,n)=>{"use strict";n.d(t,{u:()=>o});var r=n(3110),a=n(4335);class s{getTimestamp(){return Math.floor(Date.now()/1e3).toString()}async generateSignature(e){let t=new TextEncoder,n=t.encode(this.secretKey),r=await crypto.subtle.importKey("raw",n,{name:"HMAC",hash:"SHA-256"},!1,["sign"]);return btoa(Array.from(new Uint8Array(await crypto.subtle.sign("HMAC",r,t.encode(e)))).map(e=>String.fromCharCode(e)).join(""))}async request(e){try{return(await this.client.request(e)).data}catch(e){throw console.error("Ошибка API запроса:",e),e}}constructor(e,t){this.addSignatureAndTimestamp=async e=>{let t=JSON.stringify(e.data||e.params||{}),n=this.getTimestamp(),a=await this.generateSignature(t);return e.headers||(e.headers=new r.$t),e.headers.set("Content-Type","application/json"),e.headers.set("X-TIMESTAMP",n),e.headers.set("X-SIGNATURE",a),e},this.secretKey=t,this.client=a.A.create({baseURL:e}),this.client.interceptors.request.use(this.addSignatureAndTimestamp)}}let o=new s("https://api.eralab.net/api","iO0HgZuPjY6OVm9UxpG9hGuhWujuiERL8t5CFvrJB0tWSN18TsWl86eNxZJkFpYMv0mm7tz2MnM6g0v8wQPYTw==")},1530:(e,t,n)=>{"use strict";n.d(t,{$P:()=>s,Us:()=>o});var r=n(6076),a=n(1080);async function s(e){let t="nftDetails_".concat(e),n=(0,a.p)(t,5);if(n)return console.log("Детали NFT получены из кэша."),n;let s=await r.u.request({method:"GET",url:"/nfts/".concat(e)});return(0,a.$)(t,s),s}async function o(e,t,n){try{return console.log("Fetching NFTs:",{walletAddress:e,collectionAddress:t,page:n}),await r.u.request({method:"GET",url:"/nfts/filtered-user-collection-nfts",params:{walletAddress:e,collectionAddress:t,page:n}})}catch(e){throw console.error("Error fetching NFTs:",e),Error("Failed to load NFTs.")}}},1080:(e,t,n)=>{"use strict";n.d(t,{$:()=>a,p:()=>r});let r=(e,t)=>{let n=localStorage.getItem(e);if(!n)return null;let{data:r,timestamp:a}=JSON.parse(n);return(Date.now()-a)/6e4>t?(localStorage.removeItem(e),null):r},a=(e,t)=>{let n={data:t,timestamp:Date.now()};localStorage.setItem(e,JSON.stringify(n))}},1629:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r=n(4848),a=n(6540),s=n(6715),o=n(571),l=n(9965),c=n.n(l),i=n(4496);let d=e=>{let{imageUrl:t,collectionName:n}=e;return(0,r.jsx)("div",{children:t?(0,r.jsx)(c(),{src:(0,i.Z)(t),alt:n||"Коллекция",layout:"responsive",width:1170,height:300,priority:!0}):(0,r.jsx)("p",{children:"Баннер отсутствует."})})},u=e=>{let{tabs:t,activeTab:n,onTabChange:a}=e;return(0,r.jsx)("div",{children:t.map(e=>(0,r.jsx)("button",{onClick:()=>a(e),className:n===e?"active":"",children:e},e))})};var h=n(9922),m=n.n(h);let p=e=>{let{nft:t,collectionAddress:n}=e,a=(0,s.useRouter)();return(0,r.jsxs)("div",{className:m().cardContainer,onClick:()=>{a.push("/collections/".concat(encodeURIComponent(n),"/").concat(encodeURIComponent(t.nftAddress)))},children:[(0,r.jsx)(c(),{src:(0,i.Z)(t.imageUrl||"https://i.ibb.co/BsfbVYc/NFT-games.png"),alt:t.name||"NFT",width:150,height:150,className:m().cardImage}),(0,r.jsx)("div",{className:m().cardContent,children:(0,r.jsx)("p",{className:m().cardName,children:t.name||"Без названия"})})]})};var _=n(8742),f=n.n(_);let N=e=>{let{activeTab:t,nfts:n,collectionInfo:a,onLoadMore:s,isLoadingMore:o}=e;switch(t){case"Мои NFT":return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:f().nftGrid,children:n.map(e=>(0,r.jsx)(p,{nft:e,collectionAddress:(null==a?void 0:a.collectionAddress)||""},e.nftAddress))}),(0,r.jsx)("button",{onClick:s,disabled:o,className:f().loadMoreButton,children:o?"Загрузка...":"Загрузить ещё"})]});case"Все NFT":return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:f().nftGrid,children:n.map(e=>(0,r.jsx)(p,{nft:e,collectionAddress:(null==a?void 0:a.collectionAddress)||""},e.nftAddress))}),(0,r.jsx)("button",{onClick:s,disabled:o,className:f().loadMoreButton,children:o?"Загрузка...":"Загрузить ещё"})]});case"Описание":return(0,r.jsx)("p",{children:(null==a?void 0:a.collectionDescription)||"Описание отсутствует."});case"Видео":return(null==a?void 0:a.video)?(0,r.jsx)("video",{src:a.video,controls:!0}):(0,r.jsx)("p",{children:"Видео отсутствует."});default:return null}};var g=n(270),C=n.n(g),v=n(6076),T=n(1080);async function x(e){let t="collectionDetail_".concat(e),n=(0,T.p)(t,5);if(n)return console.log("Детали коллекции получены из кэша."),n;let r=await v.u.request({method:"GET",url:"/collections/".concat(e)});return(0,T.$)(t,r),r}var j=n(1530);let w=()=>{var e;let t=(0,s.useRouter)(),{collectionAddress:n}=t.query,l=(0,o.c5)(),c=(null==l?void 0:null===(e=l.account)||void 0===e?void 0:e.address)||null,[i,h]=(0,a.useState)(null),[m,p]=(0,a.useState)([]),[_,f]=(0,a.useState)(!0),[g,v]=(0,a.useState)(!1),[T,w]=(0,a.useState)("NFT"),[y,b]=(0,a.useState)(!1),[S,F]=(0,a.useState)(1);(0,a.useEffect)(()=>{let e=async()=>{if(!n||!c){console.error("Collection address or wallet address is missing"),v(!0);return}f(!0);try{let e=await x(n);h(e),h(e);let t=await (0,j.Us)(c,n,S);p(t)}catch(e){console.error("Error loading collection details:",e),v(!0)}finally{f(!1)}};t.isReady&&e()},[t.isReady,n,c,S]);let A=async()=>{if(c&&n){b(!0);try{let e=await (0,j.Us)(c,n,S+1);p(t=>[...t,...e]),F(e=>e+1)}catch(e){console.error("Error loading more NFTs:",e)}finally{b(!1)}}};return _?(0,r.jsx)("p",{children:"Загрузка..."}):g||!i?(0,r.jsx)("p",{children:"Ошибка при загрузке данных коллекции."}):(0,r.jsxs)("div",{className:C().container,children:[(0,r.jsx)(d,{imageUrl:i.collectionBanner||i.collectionImage,collectionName:i.collectionName}),(0,r.jsx)("h1",{className:C().collectionName,children:i.collectionName}),(0,r.jsx)(u,{tabs:["Мои NFT","Все NFT","Описание","Видео"],activeTab:T,onTabChange:w}),(0,r.jsx)("div",{className:C().tabContent,children:(0,r.jsx)(N,{activeTab:T,nfts:m,collectionInfo:i,onLoadMore:A,isLoadingMore:y})})]})}},4496:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});let r=e=>e?e.startsWith("ipfs://")?e.replace("ipfs://","https://ipfs.io/ipfs/"):e:"https://i.ibb.co/BsfbVYc/NFT-games.png"},9922:e=>{e.exports={cardContainer:"NFTCard_cardContainer___KnMG",cardImage:"NFTCard_cardImage__7CfJg",cardContent:"NFTCard_cardContent__scGok",cardName:"NFTCard_cardName__Gfzlf"}},8742:e=>{e.exports={nftGrid:"TabContent_nftGrid__sSskV",loadMoreButton:"TabContent_loadMoreButton__fnPKb"}},270:e=>{e.exports={centeredContainer:"Collection_centeredContainer__DJ9Nj",header:"Collection_header__vbbVF",collectionGrid:"Collection_collectionGrid__r5miI",collectionCard:"Collection_collectionCard__dOJov",collectionImage:"Collection_collectionImage__a64CQ",collectionContent:"Collection_collectionContent__Ov2mY"}}},e=>{var t=t=>e(e.s=t);e.O(0,[556,965,636,593,792],()=>t(6761)),_N_E=e.O()}]);