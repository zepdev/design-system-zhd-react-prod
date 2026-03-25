import{j as l}from"./jsx-runtime-1a9d9a93.js";import{c as d}from"./clsx-0839fdbe.js";import{H as B}from"./HeaderShortComponent-b94ef72c.js";import{L as N}from"./Layout-fc6ef0e0.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const s=({className:i,backgroundVariant:x="white",...P})=>{const j="md:zep-w-[35%]",z=x==="gray"?"zep-bg-background-medium":void 0;return l.jsx(N,{className:d(i,"zep-py-3","sm:zep-py-4","md:zep-py-5"),wrapperClassname:z,testId:"header-short",children:l.jsx(B,{...P,className:d("zep-w-full",j)})})};try{s.displayName="HeaderShort",s.__docgenInfo={description:"",displayName:"HeaderShort",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},backgroundVariant:{defaultValue:{value:"white"},description:"",name:"backgroundVariant",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}}}}}catch{}const G={title:"Patterns/HeaderShort",component:s,tags:["autodocs"],argTypes:{backgroundVariant:{control:"select",options:["white","gray"]}}},e={args:{headline:"Headline",tagline:"Tagline"}},a={args:{headline:"Headline is longer than expected, This is just a long sample.",tagline:"Tagline"}},r={args:{headline:"Component without Tagline"}},n={args:{tagline:"Tagline",headline:"Component without Arrow"}},o={args:{backgroundVariant:"gray",tagline:"Tagline",headline:"Component with gray background"}},t={args:{backgroundVariant:"white",tagline:"Tagline",headline:"Component with white background"}};var p,c,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline'
  } as HeaderShortProps
}`,...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline'
  } as HeaderShortProps
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var w,y,C;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    headline: 'Component without Tagline'
  } as HeaderShortProps
}`,...(C=(y=r.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var H,S,f;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    tagline: 'Tagline',
    headline: 'Component without Arrow'
  } as HeaderShortProps
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var T,k,b;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    backgroundVariant: 'gray',
    tagline: 'Tagline',
    headline: 'Component with gray background'
  } as HeaderShortProps
}`,...(b=(k=o.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var V,W,_;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    backgroundVariant: 'white',
    tagline: 'Tagline',
    headline: 'Component with white background'
  } as HeaderShortProps
}`,...(_=(W=t.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const I=["Default","LongHeadline","ComponentWithoutTagline","ComponentWithoutArrow","ComponentWithGrayBackground","ComponentWithWhiteBackground"];export{o as ComponentWithGrayBackground,t as ComponentWithWhiteBackground,n as ComponentWithoutArrow,r as ComponentWithoutTagline,e as Default,a as LongHeadline,I as __namedExportsOrder,G as default};
