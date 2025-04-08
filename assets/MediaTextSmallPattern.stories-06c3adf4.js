import{a as e}from"./mocks-dd8b5ca4.js";import{j as a}from"./jsx-runtime-1a9d9a93.js";import{c as g}from"./clsx-0839fdbe.js";import{M as E}from"./mediaTextSmall-f4f32bde.js";import{H as D}from"./HeaderLongComponent-bb5ef4b2.js";import{L as G}from"./Layout-fc6ef0e0.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./RichText-8b59c071.js";import"./index.es16-90aad98d.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./ZsdButton-5f1a4816.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const d=({items:l,id:V,headline:p,...j})=>{const n=l.length>12?l.slice(0,12):l;return a.jsx(G,{id:V,className:g("zep-flex","zep-flex-col","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:a.jsxs("div",{"data-testid":"media-text-pattern",children:[a.jsx("div",{"data-testid":"media-text-small-pattern-headline",className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5 zep-max-w-[952px]",children:p&&a.jsx(D,{headline:p,...j})}),a.jsx("div",{"data-testid":"media-text-small-pattern-items",children:l&&a.jsx("div",{className:g("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-3":[2,3,6,9].includes(n.length),"xl:zep-grid-cols-4":[4,5,7,8,10,11,12].includes(n.length),"md:zep-grid-cols-2":[0,1,2,4].includes(n.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(n.length),"sm:zep-grid-cols-2":!0}),children:l.map((B,N)=>a.jsx(E,{...B},N))})})]})})};try{d.displayName="MediaTextSmallPattern",d.__docgenInfo={description:"",displayName:"MediaTextSmallPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MediaTextSmallProps[]"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const ue={title:"Patterns/MediaTextSmallPattern",component:d,tags:["autodocs"],argTypes:{items:{control:{type:"array"}}}},i={args:{items:new Array(2).fill({headline:"Headline",content:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},r={args:{items:new Array(2).fill({headline:"Headline",content:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},t={args:{items:new Array(3).fill({headline:"Headline",content:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},s={args:{items:new Array(4).fill({headline:"Headline",content:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},o={args:{items:new Array(5).fill({headline:"Headline",content:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},u={args:{items:new Array(6).fill({headline:"Headline",content:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},m={args:{items:new Array(7).fill({headline:"Headline",content:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}},c={args:{items:new Array(8).fill({headline:"Headline",content:e,imageAlt:"image alt",imageSrc:"./assets/image-4_3.png"}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:e}};var v,h,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,w,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(y=(w=r.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var S,P,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: new Array(3).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(T=(P=t.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var k,A,M;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(M=(A=s.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var _,H,z;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(z=(H=o.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var L,R,Z;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    items: new Array(6).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(Z=(R=u.parameters)==null?void 0:R.docs)==null?void 0:Z.source}}};var I,F,b;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: new Array(7).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(b=(F=m.parameters)==null?void 0:F.docs)==null?void 0:b.source}}};var C,W,q;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: new Array(8).fill({
      headline: 'Headline',
      content: mockRichText,
      imageAlt: 'image alt',
      imageSrc: './assets/image-4_3.png'
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: mockRichText
  } as MediaTextSmallPatternProps
}`,...(q=(W=c.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};const me=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items"];export{i as Default,t as With3Items,s as With4Items,o as With5Items,u as With6Items,m as With7Items,c as With8Items,r as WithHeadline,me as __namedExportsOrder,ue as default};
