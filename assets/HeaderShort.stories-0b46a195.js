import{G as e,a as V}from"./global-variants-893e06e6.js";import{j as p}from"./jsx-runtime-1a9d9a93.js";import{c as d}from"./clsx-0839fdbe.js";import{H as B}from"./HeaderShortComponent-c99efe6b.js";import{L as G}from"./Layout-fc6ef0e0.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const i=({className:l,..._})=>{const k="md:zep-w-[35%]";return p.jsx(G,{className:d(l,"zep-py-3","sm:zep-py-4","md:zep-py-5"),testId:"header-short",children:p.jsx(B,{..._,className:d("zep-w-full",k)})})};try{i.displayName="HeaderShort",i.__docgenInfo={description:"",displayName:"HeaderShort",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}}}}}catch{}const D={title:"Patterns/HeaderShort",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:[...Object.keys(e),"default"]}}}},a={args:{variant:e.Zps,headline:"Headline",tagline:"Tagline",showArrow:!0}},r={args:{variant:e.Zps,headline:"Headline is longer than expected, This is just a long sample.",tagline:"Tagline",showArrow:!0}},n={args:{variant:e.Zps,headline:"Component without Tagline",showArrow:!0}},o={args:{variant:e.Zps,tagline:"Tagline",headline:"Component without Arrow",showArrow:!1}},t={args:{variant:V.ZpsBg,tagline:"Tagline",headline:"Component with background ZPS",showArrow:!1}},s={args:{variant:V.CatBg,tagline:"Tagline",headline:"Component with background CAT",showArrow:!1}};var c,m,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Headline',
    tagline: 'Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,h,w;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(w=(h=r.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,C,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    headline: 'Component without Tagline',
    showArrow: true
  } as HeaderShortProps
}`,...(S=(C=n.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var A,T,H;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    tagline: 'Tagline',
    headline: 'Component without Arrow',
    showArrow: false
  } as HeaderShortProps
}`,...(H=(T=o.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var y,Z,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariantExtended.ZpsBg,
    tagline: 'Tagline',
    headline: 'Component with background ZPS',
    showArrow: false
  } as HeaderShortProps
}`,...(b=(Z=t.parameters)==null?void 0:Z.docs)==null?void 0:b.source}}};var v,x,P;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariantExtended.CatBg,
    tagline: 'Tagline',
    headline: 'Component with background CAT',
    showArrow: false
  } as HeaderShortProps
}`,...(P=(x=s.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const I=["Default","LongHeadline","ComponentWithoutTagline","ComponentWithoutArrow","ComponentWithBackgroundZPS","ComponentWithBackgroundCat"];export{s as ComponentWithBackgroundCat,t as ComponentWithBackgroundZPS,o as ComponentWithoutArrow,n as ComponentWithoutTagline,a as Default,r as LongHeadline,I as __namedExportsOrder,D as default};
