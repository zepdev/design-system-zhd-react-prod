import{j as i}from"./jsx-runtime-1a9d9a93.js";import{c as S}from"./clsx-0839fdbe.js";import{H as ie}from"./HeaderLongComponent-899472c1.js";import{C as se}from"./CardSquare-b3092783.js";import{L as ae}from"./Layout-921eb155.js";import{S as ne}from"./Scrollbar-cd109586.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-fea76d43.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./ZsdButton-850a5174.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./ZsdLink-8a57babc.js";import"./useContainerDimensions-42dc9502.js";const h=({items:e,headline:w,...re})=>{const r=e.length>12?e.slice(0,12):e;return i.jsxs(ae,{className:S("zep-flex","zep-flex-col","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:[w&&i.jsx(ie,{headline:w,...re}),i.jsx(ne,{scrollOrientation:"horizontal",dataTestId:"zep-card-square-list",className:S("zep-flex","md:zep-overflow-hidden","zep-grid","md:zep-grid-flow-row","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-2":r.length<=2,"xl:zep-grid-cols-3":[3,5,6,9].includes(r.length),"xl:zep-grid-cols-4":[4,7,8,10,11,12].includes(r.length),"md:zep-grid-cols-2":[0,1,2,4].includes(r.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(r.length),"sm:zep-grid-cols-2":[0,1,2,3,4,5,6,7,8,9,10,11,12].includes(r.length)}),controlId:"zep-card-square-scrollbar",children:e==null?void 0:e.map(f=>i.jsx(se,{...f,cardListsLength:e.length},f.headline))})]})};try{h.displayName="CardSquareList",h.__docgenInfo={description:"",displayName:"CardSquareList",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CardSquareProps[]"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const qe={title:"Patterns/CardSquareList",component:h,tags:["autodocs"],argTypes:{items:{control:{type:"array"}}}},s={args:{items:new Array(2).fill({headline:"Headline",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description"})}},a={args:{items:new Array(2).fill({headline:"Headline ",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"}),headline:"Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt",tagline:"Zeppelin Power Systems Lösungen für Marine",linkText:"Alle Lösungen für Marine anzeigen",type:"link"}},n={args:{items:new Array(3).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"})}},t={args:{items:new Array(4).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"})}},o={args:{items:new Array(5).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"})}},l={args:{items:new Array(6).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"})}},d={args:{items:new Array(7).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"})}},m={args:{items:new Array(8).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"})}},p={args:{items:new Array(9).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"})}},c={args:{items:new Array(10).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"})}},g={args:{items:new Array(11).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"})}},u={args:{items:new Array(12).fill({headline:"Headline",imageSrc:"./assets/worker.png",imageAlt:"worker img",description:"This is the description"})}};var k,A,y;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'This is the description'
    })
  } as CardSquareListProps
}`,...(y=(A=s.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var H,T,q;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline ',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    }),
    headline: 'Zukunftsweisende Antriebslösungen und mehr für die moderne Schifffahrt',
    tagline: 'Zeppelin Power Systems Lösungen für Marine',
    linkText: 'Alle Lösungen für Marine anzeigen',
    type: 'link'
  } as CardSquareListProps
}`,...(q=(T=a.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var z,L,x;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: new Array(3).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    })
  } as CardSquareListProps
}`,...(x=(L=n.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};var C,I,W;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    })
  } as CardSquareListProps
}`,...(W=(I=t.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var P,v,_;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    })
  } as CardSquareListProps
}`,...(_=(v=o.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var b,j,V;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: new Array(6).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    })
  } as CardSquareListProps
}`,...(V=(j=l.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var M,F,E;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: new Array(7).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    })
  } as CardSquareListProps
}`,...(E=(F=d.parameters)==null?void 0:F.docs)==null?void 0:E.source}}};var N,Z,D;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: new Array(8).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    })
  } as CardSquareListProps
}`,...(D=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:D.source}}};var O,R,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: new Array(9).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    })
  } as CardSquareListProps
}`,...(B=(R=p.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var G,J,K;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: new Array(10).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    })
  } as CardSquareListProps
}`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    items: new Array(11).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    })
  } as CardSquareListProps
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,$,ee;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    items: new Array(12).fill({
      headline: 'Headline',
      imageSrc: './assets/worker.png',
      imageAlt: 'worker img',
      description: 'This is the description'
    })
  } as CardSquareListProps
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};const ze=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items","With9Items","With10Items","With11Items","With12Items"];export{s as Default,c as With10Items,g as With11Items,u as With12Items,n as With3Items,t as With4Items,o as With5Items,l as With6Items,d as With7Items,m as With8Items,p as With9Items,a as WithHeadline,ze as __namedExportsOrder,qe as default};
