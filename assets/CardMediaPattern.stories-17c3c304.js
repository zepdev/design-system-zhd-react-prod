import{j as a}from"./jsx-runtime-1a9d9a93.js";import{r as S}from"./index-8b3efc3f.js";import{c as i}from"./clsx-0839fdbe.js";import{H as L}from"./HeaderLongComponent-899472c1.js";import{A as N}from"./AnchorNavigationList-c54f9f2a.js";import{S as _}from"./Scrollbar-cd109586.js";import{C as P}from"./CardMedia-647e6365.js";import{f as u}from"./focus-d7245c50.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-fea76d43.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./ZsdButton-850a5174.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./ZsdLink-8a57babc.js";import"./AnchorNavigationTab-612bcfd6.js";const A=S.createContext({}),V=()=>S.useContext(A),H=({cards:e,scrollToIdLink:n,linkLabel:d})=>{const{imageOrientation:p}=V(),c=e.map(t=>({...t,imageOrientation:p}));return a.jsxs("div",{id:n,className:"zep-flex-col zep-flex sm:zep-gap-2.5 zep-gap-2",children:[a.jsx("h4",{className:"zep-typography-headlineSM-fluid-cqi zep-text-typography-dark-100 zep-text-left",children:d}),a.jsx(_,{className:i("zep-w-full","zep-overflow-x-auto"),dataTestId:"cards-container",controlId:`cards-section-${n}`,scrollOrientation:"horizontal",children:a.jsx("div",{className:i("zep-flex","zep-gap-1","sm:zep-gap-1.5","xl:zep-gap-2","zep-w-fit"),children:c.map(t=>a.jsx(P,{...t}))})})]})},m=({className:e,tabs:n,imageOrientation:d="horizontal",...p})=>{const c=n.map(({cards:t,...q})=>q);return a.jsx(A.Provider,{value:{imageOrientation:d},children:a.jsxs("div",{className:i("zep-bg-greyscale-0","zep-flex","zep-flex-col","xl:zep-gap-5","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5","zep-items-start","zep-w-full","zep-max-w-[1920px]","zep-py-3","zep-pl-1","sm:zep-px-2.5","sm:zep-py-4","md:zep-px-[65px]","md:zep-py-[80px]","xl:zep-px-[121px]","xl:zep-py-[120px]"),children:[a.jsx(L,{...p}),a.jsxs("div",{className:"zep-flex zep-w-full zep-flex-col zep-gap-3.5",children:[a.jsx("div",{className:"zep-sticky zep-top-[0] zep-z-[1000] zep-bg-greyscale-0 zep-w-full",children:a.jsx(N,{tabs:c})}),a.jsx("div",{className:"zep-flex zep-flex-col xl:zep-gap-5 md:zep-gap-4 sm:zep-gap-3 zep-gap-2",children:n.map(t=>a.jsx(H,{...t}))})]})]})})};try{m.displayName="CardMediaPattern",m.__docgenInfo={description:"",displayName:"CardMediaPattern",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"CardsSectionProps[]"}},imageOrientation:{defaultValue:{value:"horizontal"},description:"",name:"imageOrientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}}}}}catch{}const g={imageSrc:"https://images.unsplash.com/photo-1615842974426-55c372fd8d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",imageAlt:"construction site",headline:"Testing",description:"Testing Testing Testing Testing v v Testing Testing Testing Testing v Testing v Testing Testing v v v Testing v Testing Testing Testing Testing Testing Testing Testing Testing",onDownload:()=>null,linkText:"Click me"},j=e=>({linkLabel:"Tab Label",scrollToIdLink:`tab-${e}`,cards:Array.from({length:2}).map(()=>g)}),W=e=>({linkLabel:"Tab Label",scrollToIdLink:`tab-${e}`,cards:Array.from({length:3}).map(()=>g)}),O=e=>({linkLabel:"Tab Label",scrollToIdLink:`tab-${e}`,cards:Array.from({length:5}).map(()=>g)}),ie={title:"Patterns/CardMediaPattern",component:m,tags:["autodocs"],argTypes:{}},s={args:{tabs:Array.from({length:3}).map((e,n)=>j(n)),headline:"Card Media with 2 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},r={decorators:[e=>a.jsx("button",{className:i(u,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:a.jsx(e,{})})],args:{tabs:Array.from({length:2}).map((e,n)=>j(n)),headline:"Card Media with 2 cards with vertical images",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",imageOrientation:"vertical",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},o={decorators:[e=>a.jsx("button",{className:i(u,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:a.jsx(e,{})})],args:{tabs:Array.from({length:3}).map((e,n)=>W(n)),headline:"Card Media with 3 cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}},l={decorators:[e=>a.jsx("button",{className:i(u,"zep-focus-visible:zep-outline-none","zep-rounded-8","zep-w-full"),children:a.jsx(e,{})})],args:{tabs:Array.from({length:3}).map((e,n)=>O(n)),headline:"Card Media with 3+ cards",tagline:"Tagline",linkSrc:"https://www.zeppelin.com",linkText:"Standalone link",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus."}};var f,z,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tabs: Array.from({
      length: 3
    }).map((_, index) => tabWithTwo(index)),
    headline: 'Card Media with 2 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as CardMediaPatternProps
}`,...(x=(z=s.parameters)==null?void 0:z.docs)==null?void 0:x.source}}};var h,b,T;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    tabs: Array.from({
      length: 2
    }).map((_, index) => tabWithTwo(index)),
    headline: 'Card Media with 2 cards with vertical images',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    imageOrientation: 'vertical',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as CardMediaPatternProps
}`,...(T=(b=r.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var w,C,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    tabs: Array.from({
      length: 3
    }).map((_, index) => tabWithThree(index)),
    headline: 'Card Media with 3 cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as CardMediaPatternProps
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var v,k,M;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  decorators: [Story => <button className={clsx(focusRing, 'zep-focus-visible:zep-outline-none', 'zep-rounded-8', 'zep-w-full')}>
        <Story />
      </button>],
  args: {
    tabs: Array.from({
      length: 3
    }).map((_, index) => tabWithMoreThanThree(index)),
    headline: 'Card Media with 3+ cards',
    tagline: 'Tagline',
    linkSrc: 'https://www.zeppelin.com',
    linkText: 'Standalone link',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.'
  } as CardMediaPatternProps
}`,...(M=(k=l.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};const se=["Default","CardMediaVertical","CardMedia3Cards","CardMedia3PlusCards"];export{o as CardMedia3Cards,l as CardMedia3PlusCards,r as CardMediaVertical,s as Default,se as __namedExportsOrder,ie as default};
