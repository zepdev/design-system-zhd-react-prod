import{j as i}from"./jsx-runtime-1a9d9a93.js";import{c as T}from"./clsx-0839fdbe.js";import{H as y}from"./HeaderShortComponent-9c5de447.js";import{L as _}from"./Layout-921eb155.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const n=({className:t,...s})=>{const S=s.showArrow?"md:zep-w-[40%]":"md:zep-w-[35%]";return i.jsx(_,{className:t,testId:"header-short",children:i.jsx(y,{...s,className:T("zep-w-full",S)})})};try{n.displayName="HeaderShort",n.__docgenInfo={description:"",displayName:"HeaderShort",props:{showArrow:{defaultValue:null,description:"",name:"showArrow",required:!1,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const L={title:"Patterns/HeaderShort",component:n,tags:["autodocs"],argTypes:{}},e={args:{headline:"Headline",tagline:"Tagline",showArrow:!0}},r={args:{headline:"Headline is longer than expected, This is just a long sample.",tagline:"Tagline",showArrow:!0}},a={args:{headline:"Component without Tagline",showArrow:!0}},o={args:{tagline:"Tagline",headline:"Component without Arrow",showArrow:!1}};var l,d,p;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,c,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,g,w;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    headline: 'Component without Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(w=(g=a.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var f,A,H;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tagline: 'Tagline',
    headline: 'Component without Arrow',
    showArrow: false
  } as HeaderShortProps
}`,...(H=(A=o.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};const V=["Default","LongHeadline","ComponentWithoutTagline","ComponentWithoutArrow"];export{o as ComponentWithoutArrow,a as ComponentWithoutTagline,e as Default,r as LongHeadline,V as __namedExportsOrder,L as default};
