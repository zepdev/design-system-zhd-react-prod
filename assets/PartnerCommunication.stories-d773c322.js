import{G as r}from"./global-variants-4c710595.js";import{j as a}from"./jsx-runtime-1a9d9a93.js";import{c as P}from"./index-ff2c9236.js";import{c as p}from"./clsx-0839fdbe.js";import{L as _}from"./Layout-fc6ef0e0.js";import{t as C}from"./tw-merge-1166cefb.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const i=({id:o,headline:z,partners:n,variant:x})=>{const f={[r.Zps]:["zep-text-typography-primary-default"],[r.Cat]:["zep-text-typography-dark-100"],[r.Zsd]:["zep-text-typography-dark-100"],[r.Zhd]:["zep-text-typography-dark-100"]},y=P([`zep-py-2
       sm:zep-py-2.5 
       md:zep-py-2 
       lg:zep-py-3 
       zep-gap-1.5 
       sm:zep-gap-2 
       lg:zep-gap-3.5
       zep-flex-col 
       zep-flex 
       zep-items-center 
       md:zep-flex-row
       `],{variants:{variant:f},defaultVariants:{variant:r.Zps}});return a.jsxs(_,{id:o,testId:"zep-partner-communication",wrapperClassname:"zep-bg-greyscale-200",className:C(y({variant:x})),children:[a.jsx("h4",{className:p("md:zep-w-1/3","zep-text-center","md:zep-text-left","zep-typography-headlineMD-fluid-cqi"),children:z}),a.jsx("div",{className:p("zep-w-full","zep-flex-1","md:zep-flex-wrap"),children:a.jsx("div",{className:"zep-flex zep-flex-wrap zep-items-center zep-justify-center zep-text-center zep-gap-1.5 xl:zep-gap-2",children:n==null?void 0:n.map((e,h)=>a.jsx("div",{className:"zep-flex zep-items-center zep-justify-center",children:a.jsx("img",{alt:e==null?void 0:e.imageAlt,className:"zep-h-[32px] sm:zep-h-[40px] xl:zep-h-[56px]",src:e==null?void 0:e.image})},h))})})]})};try{i.displayName="PartnerCommunication",i.__docgenInfo={description:"",displayName:"PartnerCommunication",props:{headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},partners:{defaultValue:null,description:"",name:"partners",required:!1,type:{name:"{ image: string; imageAlt: string; }[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZSD"'},{value:'"ZHD"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const v=[{imageAlt:"partnerlogo CAT",image:"./assets/Logo_cat.svg"},{imageAlt:"partnerlogo KBB",image:"./assets/Logo_KBB.svg"},{imageAlt:"partnerlogo Turbolader",image:"./assets/Logo_Turbolader.svg"},{imageAlt:"partnerlogo Napier",image:"./assets/Logo_Napier.svg"},{imageAlt:"partnerlogo MAK",image:"./assets/Logo_MAK.svg"}],V={title:"Components/Partner Communication",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(r),"default"]}}}},t={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",partners:v}},s={args:{headline:"Wir sind exklusive Service-Partner von diesen Herstellern:",variant:"ZPS",partners:v}};var l,m,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    partners: logos
  } as PartnerCommunicationProps
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,g,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    headline: 'Wir sind exklusive Service-Partner von diesen Herstellern:',
    variant: 'ZPS',
    partners: logos
  } as PartnerCommunicationProps
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const W=["Default","With10Logos"];export{t as Default,s as With10Logos,W as __namedExportsOrder,V as default};
