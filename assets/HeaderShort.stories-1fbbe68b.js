import{a as W}from"./global-variants-b59ea106.js";import{j as l}from"./jsx-runtime-1a9d9a93.js";import{c as d}from"./clsx-0839fdbe.js";import{H as j}from"./HeaderShortComponent-bd83f2cb.js";import{L as N}from"./Layout-fc6ef0e0.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const s=({className:i,...b})=>{const A="md:zep-w-[35%]";return l.jsx(N,{className:d(i,"zep-py-3","sm:zep-py-4","md:zep-py-5"),testId:"header-short",children:l.jsx(j,{...b,className:d("zep-w-full",A)})})};try{s.displayName="HeaderShort",s.__docgenInfo={description:"",displayName:"HeaderShort",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}}}}}catch{}const G={title:"Patterns/HeaderShort",component:s,tags:["autodocs"],argTypes:{}},e={args:{headline:"Headline",tagline:"Tagline"}},a={args:{headline:"Headline is longer than expected, This is just a long sample.",tagline:"Tagline"}},r={args:{headline:"Component without Tagline"}},n={args:{tagline:"Tagline",headline:"Component without Arrow"}},o={args:{variant:W.ZpsBg,tagline:"Tagline",headline:"Component with background ZPS"}},t={args:{variant:W.CatBg,tagline:"Tagline",headline:"Component with background CAT"}};var p,c,m;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline'
  } as HeaderShortProps
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var g,u,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline'
  } as HeaderShortProps
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var C,S,T;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    headline: 'Component without Tagline'
  } as HeaderShortProps
}`,...(T=(S=r.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var H,f,w;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    tagline: 'Tagline',
    headline: 'Component without Arrow'
  } as HeaderShortProps
}`,...(w=(f=n.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var y,x,P;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariantExtended.ZpsBg,
    tagline: 'Tagline',
    headline: 'Component with background ZPS'
  } as HeaderShortProps
}`,...(P=(x=o.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var _,B,k;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariantExtended.CatBg,
    tagline: 'Tagline',
    headline: 'Component with background CAT'
  } as HeaderShortProps
}`,...(k=(B=t.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};const D=["Default","LongHeadline","ComponentWithoutTagline","ComponentWithoutArrow","ComponentWithBackgroundZPS","ComponentWithBackgroundCat"];export{t as ComponentWithBackgroundCat,o as ComponentWithBackgroundZPS,n as ComponentWithoutArrow,r as ComponentWithoutTagline,e as Default,a as LongHeadline,D as __namedExportsOrder,G as default};
