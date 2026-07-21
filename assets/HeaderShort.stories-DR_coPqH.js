import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{c as d}from"./clsx-B-dksMZM.js";import{H as q}from"./HeaderShortComponent-MjiBRk6D.js";import{L as N}from"./Layout-CkmeVxQV.js";import"./index-yBjzXJbu.js";const s=({className:i,backgroundVariant:W="white",disableBottomPadding:_=!1,...v})=>{const P="md:zep-w-[35%]",B=W==="gray"?"zep-bg-background-medium":void 0,j=_?["zep-pt-3","sm:zep-pt-4","md:zep-pt-5"]:["zep-py-3","sm:zep-py-4","md:zep-py-5"];return l.jsx(N,{className:d(i,...j),wrapperClassname:B,testId:"header-short",children:l.jsx(q,{...v,headlineSize:"xl",className:d("zep-w-full",P)})})};try{s.displayName="HeaderShort",s.__docgenInfo={description:"",displayName:"HeaderShort",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},backgroundVariant:{defaultValue:{value:"white"},description:"",name:"backgroundVariant",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"gray"'}]}},disableBottomPadding:{defaultValue:{value:"false"},description:"",name:"disableBottomPadding",required:!1,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},headlineSize:{defaultValue:null,description:"",name:"headlineSize",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"xl"'}]}}}}}catch{}const I={title:"Patterns/HeaderShort",component:s,tags:["autodocs"],argTypes:{backgroundVariant:{control:"select",options:["white","gray"]}}},e={args:{headline:"Headline",tagline:"Tagline"}},a={args:{headline:"Headline is longer than expected, This is just a long sample.",tagline:"Tagline"}},r={args:{headline:"Component without Tagline"}},n={args:{tagline:"Tagline",headline:"Component without Arrow"}},t={args:{backgroundVariant:"gray",tagline:"Tagline",headline:"Component with gray background"}},o={args:{backgroundVariant:"white",tagline:"Tagline",headline:"Component with white background"}};var p,c,g;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline'
  } as HeaderShortProps
}`,...(g=(c=e.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,u,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    headline: 'Headline is longer than expected, This is just a long sample.',
    tagline: 'Tagline'
  } as HeaderShortProps
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var w,y,f;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    headline: 'Component without Tagline'
  } as HeaderShortProps
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,C,H;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    tagline: 'Tagline',
    headline: 'Component without Arrow'
  } as HeaderShortProps
}`,...(H=(C=n.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var T,b,k;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    backgroundVariant: 'gray',
    tagline: 'Tagline',
    headline: 'Component with gray background'
  } as HeaderShortProps
}`,...(k=(b=t.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var V,z,x;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    backgroundVariant: 'white',
    tagline: 'Tagline',
    headline: 'Component with white background'
  } as HeaderShortProps
}`,...(x=(z=o.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};const O=["Default","LongHeadline","ComponentWithoutTagline","ComponentWithoutArrow","ComponentWithGrayBackground","ComponentWithWhiteBackground"];export{t as ComponentWithGrayBackground,o as ComponentWithWhiteBackground,n as ComponentWithoutArrow,r as ComponentWithoutTagline,e as Default,a as LongHeadline,O as __namedExportsOrder,I as default};
