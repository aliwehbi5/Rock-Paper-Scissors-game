import{f as u}from"./footerComponent-w5Hofih-.js";import{_ as d,r as m,c as t,a as s,n as a,t as v,b as c,w as p,d as n,E as i,o as r}from"./index-Bd48xD3y.js";const _={class:"main-div"},g={class:"your-picked"},k={class:"btn"},f=["type"],w={key:0,class:"result"},M={class:"house-picked"},y={key:0,class:"btn"},b=["type"],B={key:1,class:"loading-btn"},T={name:"nextMove",data(){return{move:null,houseMove:null,showHousePickedBtn:!1,showLoadingBtn:!0,showResult:!1,resultText:"",score:0}},created(){this.move=this.$route.params.move},mounted(){this.choiceMove(),setTimeout(()=>{this.showHousePickedBtn=!0,this.showLoadingBtn=!1,this.showTheResult()},2e3)},methods:{choiceMove(){const l=["paper","rock","scissors"],e=Math.floor(Math.random()*3);this.houseMove=l[e]},showTheResult(){localStorage.getItem("score")?(i.emit("score",localStorage.getItem("score")),this.score=localStorage.getItem("score")):i.emit("score",0),this.move===this.houseMove?this.resultText="It's a draw":this.move==="rock"&&this.houseMove==="scissors"||this.move==="paper"&&this.houseMove==="rock"||this.move==="scissors"&&this.houseMove==="paper"?(this.resultText="You win!",this.score++,console.log(this.score),localStorage.setItem("score",this.score),i.emit("score",this.score)):(this.resultText="House wins!",this.score--,console.log(this.score),localStorage.setItem("score",this.score),i.emit("score",this.score)),this.showResult=!0}}},I=Object.assign(T,{setup(l){return(e,o)=>{const h=m("router-link");return r(),t("main",null,[s("div",_,[s("div",g,[o[0]||(o[0]=s("h2",null,"You Picked",-1)),s("div",k,[s("button",{class:a(e.move+"-btn move"),type:e.move},null,10,f)])]),e.showResult?(r(),t("div",w,[s("h1",null,v(e.resultText),1),c(h,{to:"/"},{default:p(()=>o[1]||(o[1]=[s("button",{class:"play-again"},"Play Again",-1)])),_:1})])):n("",!0),s("div",M,[o[2]||(o[2]=s("h2",null,"House Picked",-1)),e.showHousePickedBtn?(r(),t("div",y,[s("button",{class:a(e.houseMove+"-btn move"),type:e.houseMove},null,10,b)])):n("",!0),e.showLoadingBtn?(r(),t("div",B)):n("",!0)])]),c(u)])}}}),C=d(I,[["__scopeId","data-v-2ed56369"]]);export{C as default};