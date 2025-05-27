import{j as e}from"./jsx-runtime-1a9d9a93.js";import{c as r}from"./clsx-0839fdbe.js";import{H as P}from"./HeaderLongComponent-f514cb83.js";import{C as V}from"./CardMedia-d02da830.js";import{L as j}from"./Layout-fc6ef0e0.js";import{S as q}from"./Scrollbar-bd0f93ab.js";import{f as u}from"./focus-d7245c50.js";import{m as s}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-2e85d74f.js";import"./index.es32-95f1013f.js";import"./index.es13-903b34be.js";import"./index.es17-40e95622.js";import"./RichText-c0de080b.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./ZsdButton-72aad3c9.js";import"./index.es36-796b080a.js";import"./index-ff2c9236.js";import"./getDataLayer-2559cd39.js";import"./tw-merge-1166cefb.js";const d=({cards:l,imageOrientation:b="horizontal",id:T,...M})=>e.jsxs(j,{id:T,wrapperClassname:"zep-bg-background-medium",className:r("zep-flex","zep-flex-col","zep-justify-start","lg:zep-gap-4","sm:zep-gap-3","zep-gap-2","zep-py-3","sm:zep-py-4","md:zep-py-5","zep-items-start"),children:[e.jsx(P,{...M}),e.jsx(q,{scrollOrientation:"horizontal",dataTestId:"cards-container",controlId:"card-media-scrollbar",className:r("zep-flex","zep-gap-1","sm:zep-gap-1.5","lg:zep-gap-2"),children:l.map(c=>e.jsx(V,{...c,imageOrientation:b},c.headline))})]});try{d.displayName="CardMediaPattern",d.__docgenInfo={description:"",displayName:"CardMediaPattern",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardMediaProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},imageOrientation:{defaultValue:{value:"horizontal"},description:"",name:"imageOrientation",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"horizontal"'},{value:'"vertical"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-dark"'},{value:'"secondary-dark"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"left"'},{value:'"right"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const a={imageSrc:"https://www.khplant.co.za/wp-content/uploads/2015/08/cat-logo.jpg",imageAlt:"construction site",headline:"Testing",description:"Testing",linkSrc:"https://www.zeppelin.com",linkText:"Click me"},p={...a,imageSrc:"https://www.zeppelin-cat.at/content/dam/zeppelin/baumaschinen/at/sonderangebote/Brosch%C3%BCre.JPG.imagethumb.original.jpg"},$={title:"Patterns/CardMediaPattern",component:d,tags:["autodocs"],argTypes:{}},n={decorators:[l=>e.jsx("button",{className:r(u,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(l,{})})],args:{cards:[a,a],headline:"Card Media with 2 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:s}},t={decorators:[l=>e.jsx("button",{className:r(u,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(l,{})})],args:{cards:[p,p],headline:"Card Media with 2 cards with vertical images",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",imageOrientation:"vertical",description:s}},i={decorators:[l=>e.jsx("button",{className:r(u,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(l,{})})],args:{cards:[a,a,a],headline:"Card Media with 3 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:s}},o={decorators:[l=>e.jsx("button",{className:r(u,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:e.jsx(l,{})})],args:{cards:[a,a,a,a,a],headline:"Card Media with 3+ cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:s}};var m,v,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard],
    headline: 'Card Media with 2 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,g,w;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCardVertical, mockCardVertical],
    headline: 'Card Media with 2 cards with vertical images',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    imageOrientation: 'vertical',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(w=(g=t.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var k,z,C;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard, mockCard],
    headline: 'Card Media with 3 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(C=(z=i.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var y,x,S;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard, mockCard, mockCard, mockCard],
    headline: 'Card Media with 3+ cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaPatternProps
}`,...(S=(x=o.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const ee=["Default","CardMediaVertical","CardMedia3Cards","CardMedia3PlusCards"];export{i as CardMedia3Cards,o as CardMedia3PlusCards,t as CardMediaVertical,n as Default,ee as __namedExportsOrder,$ as default};
