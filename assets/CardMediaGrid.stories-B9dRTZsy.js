import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{c as l}from"./clsx-B-dksMZM.js";import{H as P}from"./HeaderLongComponent-BQsd5VEZ.js";import{C as A}from"./CardMedia-CjydFDBa.js";import{L as B}from"./Layout-CkmeVxQV.js";import{f as n}from"./focus-MNa1V5My.js";import{m as i}from"./mocks-v7E6ixZS.js";import"./index-yBjzXJbu.js";import"./index.es16-CtGfWpDE.js";import"./index.es32-D9mbuw9C.js";import"./index.es13-DrwoFUlW.js";import"./index.es17-CiSAzvV-.js";import"./RichText-CoAczXHp.js";import"./index-BOnQTV8N.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./getUrlWithTrailingSlash-CiYGomte.js";import"./ZsdButton-CXxgDonv.js";import"./index.es36-BF3AzYXZ.js";import"./index-Dp3B9jqt.js";import"./getDataLayer-CP2Cgxnv.js";import"./tw-merge-Ds6tgvmq.js";const p=({cards:r,imageOrientation:q="horizontal",id:_,...L})=>a.jsxs(B,{id:_,wrapperClassname:"zep-bg-background-medium",className:l("zep-flex","zep-flex-col","zep-justify-start","lg:zep-gap-4","sm:zep-gap-3","zep-gap-2","zep-py-3","sm:zep-py-4","md:zep-py-5","zep-items-start"),children:[a.jsx(P,{...L}),a.jsx("div",{"data-testid":"cards-container",className:l("zep-grid","zep-w-full","zep-gap-2","sm:zep-gap-2.5","lg:zep-gap-3","zep-grid-cols-1","sm:zep-grid-cols-2","lg:zep-grid-cols-3","xl:zep-grid-cols-4"),children:r.map(m=>a.jsx(A,{...m,imageOrientation:q,fullWidth:!0},m.headline))})]});try{p.displayName="CardMediaGrid",p.__docgenInfo={description:"",displayName:"CardMediaGrid",props:{cards:{defaultValue:null,description:"",name:"cards",required:!0,type:{name:"CardMediaProps[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},imageOrientation:{defaultValue:{value:"horizontal"},description:"",name:"imageOrientation",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"horizontal"'},{value:'"vertical"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary-dark"'},{value:'"secondary-dark"'},{value:'"link"'},{value:'"none"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"left"'},{value:'"right"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const e={imageSrc:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",imageAlt:"construction site",headline:"Testing",description:"Testing",linkSrc:"https://www.zeppelin.com",linkText:"Click me"},v={...e,imageSrc:"https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800"},E=[{imageSrc:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",imageAlt:"excavator",headline:"Short Title",description:"Brief description.",linkSrc:"https://www.zeppelin.com",linkText:"Learn more"},{imageSrc:"https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800",imageAlt:"bulldozer",headline:"Medium Length Title Here",description:"This is a medium length description that spans multiple lines and provides more context about the card content.",linkSrc:"https://www.zeppelin.com",linkText:"View details"},{imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?w=800",imageAlt:"crane",headline:"This is a Much Longer Title That Wraps to Multiple Lines",description:"This description is significantly longer than the others to test how the grid handles cards with varying amounts of content. The layout should remain consistent with all links aligned at the bottom.",linkSrc:"https://www.zeppelin.com",linkText:"Explore"},{imageSrc:"https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?w=800",imageAlt:"loader",headline:"Another Card",description:"Standard description text.",linkSrc:"https://www.zeppelin.com",linkText:"Read more"}],oe={title:"Patterns/CardMediaGrid",component:p,tags:["autodocs"],argTypes:{}},t={decorators:[r=>a.jsx("button",{className:l(n,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:a.jsx(r,{})})],args:{cards:[e,e],headline:"Card Media Grid with 2 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:i}},o={decorators:[r=>a.jsx("button",{className:l(n,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:a.jsx(r,{})})],args:{cards:[v,v],headline:"Card Media Grid with vertical images",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",imageOrientation:"vertical",description:i}},s={decorators:[r=>a.jsx("button",{className:l(n,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:a.jsx(r,{})})],args:{cards:[e,e,e],headline:"Card Media Grid with 3 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:i}},d={decorators:[r=>a.jsx("button",{className:l(n,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:a.jsx(r,{})})],args:{cards:[e,e,e,e],headline:"Card Media Grid with 4 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:i}},c={decorators:[r=>a.jsx("button",{className:l(n,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:a.jsx(r,{})})],args:{cards:[e,e,e,e,e,e],headline:"Card Media Grid with 6 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",theme:"power-systems",description:i}},u={decorators:[r=>a.jsx("button",{className:l(n,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:a.jsx(r,{})})],args:{cards:E,headline:"Grid with Varying Content Lengths",tagline:"Testing card height consistency",linkSrc:"https://www.zeppelin.com",linkText:"View all",theme:"power-systems",description:i}};var h,g,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard],
    headline: 'Card Media Grid with 2 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaGridProps
}`,...(w=(g=t.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var f,k,z;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCardVertical, mockCardVertical],
    headline: 'Card Media Grid with vertical images',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    imageOrientation: 'vertical',
    description: mockRichTextShort
  } as CardMediaGridProps
}`,...(z=(k=o.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var C,y,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard, mockCard],
    headline: 'Card Media Grid with 3 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaGridProps
}`,...(x=(y=s.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var S,T,b;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard, mockCard, mockCard],
    headline: 'Card Media Grid with 4 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaGridProps
}`,...(b=(T=d.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var M,G,V;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: [mockCard, mockCard, mockCard, mockCard, mockCard, mockCard],
    headline: 'Card Media Grid with 6 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaGridProps
}`,...(V=(G=c.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var j,N,R;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    cards: mockCardsVaryingText,
    headline: 'Grid with Varying Content Lengths',
    tagline: 'Testing card height consistency',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'View all',
    theme: 'power-systems',
    description: mockRichTextShort
  } as CardMediaGridProps
}`,...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};const se=["Default","CardMediaGridVertical","CardMediaGrid3Cards","CardMediaGrid4Cards","CardMediaGrid6Cards","CardMediaGridVaryingContent"];export{s as CardMediaGrid3Cards,d as CardMediaGrid4Cards,c as CardMediaGrid6Cards,u as CardMediaGridVaryingContent,o as CardMediaGridVertical,t as Default,se as __namedExportsOrder,oe as default};
