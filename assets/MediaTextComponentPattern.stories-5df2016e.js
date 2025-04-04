import{j as i}from"./jsx-runtime-1a9d9a93.js";import{M as x}from"./MediaTextComponent-b7a909e9.js";import{H as A}from"./HeaderLongComponent-117f27ac.js";import{L}from"./Layout-fc6ef0e0.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./ResponsivePlayer-1c913ba4.js";import"./iframe-f290ccec.js";import"../sb-preview/runtime.js";import"./index-9d475cdf.js";import"./VideoCookieLayer-5f4f7fa8.js";import"./ZsdButton-223655ed.js";import"./index.es13-751bc762.js";import"./index.es35-79e31a69.js";import"./index.es31-95f1013f.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./ZsdLink-5a3c8625.js";import"./index.es16-90aad98d.js";import"./global-variants-893e06e6.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-92c5419e.js";import"./index.es18-4b39ea0e.js";const r=({items:n,...e})=>i.jsxs(L,{"data-testid":"zep-mediatext-pattern",children:[i.jsx("div",{className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5",children:e.headline&&i.jsx(A,{headline:e.headline,...e})}),i.jsx("div",{className:"zep-inline-grid md:zep-grid zep-gap-3 sm:zep-gap-4 xl:zep-gap-5",children:n.map((k,b)=>i.jsx(x,{...k},b))})]});try{r.displayName="MediaTextComponentPattern",r.__docgenInfo={description:"",displayName:"MediaTextComponentPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MediaTextComponentProps[]"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZPS_BG"'},{value:'"CAT_BG"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const Q={title:"Patterns/MediaTextComponentPattern",component:r,tags:["autodocs"],argTypes:{}},t={args:{items:new Array(4).fill(null).map((n,e)=>({mediaUrl:"./assets/hero_image.png",imageOrientation:"horizontal",mediaType:"image",mediaPosition:e%2===0?"left":"right",headline:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",buttonText:"Read More"})),headline:"Zukunftsweisende Antriebslösungen",tagline:"tagline",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus Dosieren aus Silos und Containern.",linkText:"Alle Lösungen",type:"link"}},a={args:{items:new Array(4).fill(null).map((n,e)=>({mediaUrl:"./assets/hero_image.png",imageOrientation:"horizontal",mediaType:"image",mediaPosition:e%2===0?"left":"right",headline:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",links:[{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"}],buttonText:"Read More"})),headline:"Zukunftsweisende Antriebslösungen",tagline:"tagline",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus Dosieren aus Silos und Containern.",linkText:"Alle Lösungen",type:"link"}},l={args:{items:new Array(4).fill(null).map((n,e)=>({mediaUrl:"./assets/vertical-image.png",imageOrientation:"vertical",mediaType:"image",mediaPosition:e%2===0?"left":"right",headline:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",buttonText:"Read More"})),headline:"Zukunftsweisende Antriebslösungen",tagline:"tagline",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus Dosieren aus Silos und Containern.",linkText:"Alle Lösungen",type:"link"}},o={args:{items:new Array(4).fill(null).map((n,e)=>({videoThumbnail:"https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=",mediaUrl:"https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4",mediaType:"video",mediaPosition:e%2===0?"left":"right",headline:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",buttonText:"Read More"})),headline:"Zukunftsweisende Antriebslösungen",tagline:"tagline",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus Dosieren aus Silos und Containern.",linkText:"Alle Lösungen",type:"link"}};var s,u,m;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill(null).map((_, index) => ({
      mediaUrl: './assets/hero_image.png',
      imageOrientation: 'horizontal',
      mediaType: 'image',
      mediaPosition: index % 2 === 0 ? 'left' : 'right',
      // Alternating positions
      headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      buttonText: 'Read More'
    })),
    headline: 'Zukunftsweisende Antriebslösungen',
    tagline: 'tagline',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus Dosieren aus Silos und Containern.',
    linkText: 'Alle Lösungen',
    type: 'link'
  } as MediaTextComponentPatternProps
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,p,c;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill(null).map((_, index) => ({
      mediaUrl: './assets/hero_image.png',
      imageOrientation: 'horizontal',
      mediaType: 'image',
      mediaPosition: index % 2 === 0 ? 'left' : 'right',
      // Alternating positions
      headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      links: [{
        icon: 'arrow-right',
        href: 'https://www.google.com',
        label: 'link inline'
      }, {
        icon: 'arrow-right',
        href: 'https://www.google.com',
        label: 'link inline'
      }, {
        icon: 'arrow-right',
        href: 'https://www.google.com',
        label: 'link inline'
      }, {
        icon: 'arrow-right',
        href: 'https://www.google.com',
        label: 'link inline'
      }, {
        icon: 'arrow-right',
        href: 'https://www.google.com',
        label: 'link inline'
      }, {
        icon: 'arrow-right',
        href: 'https://www.google.com',
        label: 'link inline'
      }, {
        icon: 'arrow-right',
        href: 'https://www.google.com',
        label: 'link inline'
      }, {
        icon: 'arrow-right',
        href: 'https://www.google.com',
        label: 'link inline'
      }, {
        icon: 'arrow-right',
        href: 'https://www.google.com',
        label: 'link inline'
      }, {
        icon: 'arrow-right',
        href: 'https://www.google.com',
        label: 'link inline'
      }],
      buttonText: 'Read More'
    })),
    headline: 'Zukunftsweisende Antriebslösungen',
    tagline: 'tagline',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus Dosieren aus Silos und Containern.',
    linkText: 'Alle Lösungen',
    type: 'link'
  } as MediaTextComponentPatternProps
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var g,h,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill(null).map((_, index) => ({
      mediaUrl: './assets/vertical-image.png',
      imageOrientation: 'vertical',
      mediaType: 'image',
      mediaPosition: index % 2 === 0 ? 'left' : 'right',
      // Alternating positions
      headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      buttonText: 'Read More'
    })),
    headline: 'Zukunftsweisende Antriebslösungen',
    tagline: 'tagline',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus Dosieren aus Silos und Containern.',
    linkText: 'Alle Lösungen',
    type: 'link'
  } as MediaTextComponentPatternProps
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,f,w;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill(null).map((_, index) => ({
      videoThumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q=',
      mediaUrl: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
      mediaType: 'video',
      mediaPosition: index % 2 === 0 ? 'left' : 'right',
      // Alternating positions
      headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
      buttonText: 'Read More'
    })),
    headline: 'Zukunftsweisende Antriebslösungen',
    tagline: 'tagline',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus Dosieren aus Silos und Containern.',
    linkText: 'Alle Lösungen',
    type: 'link'
  } as MediaTextComponentPatternProps
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const Y=["Default","WithLinkList","VerticalImage","WithVideo"];export{t as Default,l as VerticalImage,a as WithLinkList,o as WithVideo,Y as __namedExportsOrder,Q as default};
