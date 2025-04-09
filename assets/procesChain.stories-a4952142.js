import{j as e}from"./jsx-runtime-1a9d9a93.js";import{N as k,a as z,l as x}from"./index.es16-90aad98d.js";import{c as i}from"./clsx-0839fdbe.js";import{H as C}from"./HeaderLongComponent-632ad27c.js";import{L as I}from"./Layout-fc6ef0e0.js";import{S as b}from"./Scrollbar-bd0f93ab.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-07a6e58c.js";import"./ZsdButton-5f1a4816.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";const s=({contentItems:o,headline:u,linkChain:g,...f})=>e.jsxs(I,{className:"zep-flex zep-flex-col md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5 zep-w-full sm:zep-px-1",children:[u&&e.jsx(C,{headline:u,...f}),e.jsx(b,{scrollOrientation:"horizontal",controlId:"process-chain-scrollbar",className:"zep-w-full",children:e.jsx("div",{className:"xl:zep-w-full zep-w-fit zep-flex zep-gap-2 md:zep-gap-2.5",children:o.map((l,c)=>e.jsx("div",{className:i("xl:zep-grow xl:zep-w-auto zep-min-w-[286px]"),children:e.jsxs("div",{className:i("zep-relative zep-bg-primary-default zep-text-greyscale-0 xl:zep-max-w-full zep-max-w-[300px] zep-p-1.5 zep-h-full"),children:[e.jsxs("div",{className:i("zep-flex","zep-flex-col","zep-items-start"),children:[e.jsx("h4",{"data-testid":"process-chain-headline",className:"zep-typography-headlineSM-fluid-cqi  zep-break-all zep-mb-1",children:l.headline}),g?l.linkItems&&l.linkItems.map((n,a)=>e.jsx("div",{className:i({"zep-mt-1.5":a!==0}),children:e.jsx(k,{label:"inline link",iconPlacement:"before",icon:n.icon,href:n.link,target:z.Blank,mode:x.Inline})},a)):e.jsx("ul",{className:"zep-pl-1.5",children:l.listItems&&l.listItems.map((n,a)=>e.jsx("li",{className:"zep-list-disc",children:n},a))})]}),c<o.length-1&&e.jsx("div",{className:"zep-absolute zep-left-auto -zep-right-1 zep-border-t-transparent zep-border-b-transparent zep-border-t-[18px] zep-border-b-[18px] zep-top-1/3 zep-border-l-[16px] zep-border-l-primary-default zep-translate-y-1/2"})]})},c))})})]});try{s.displayName="ProcessChain",s.__docgenInfo={description:"",displayName:"ProcessChain",props:{contentItems:{defaultValue:null,description:"",name:"contentItems",required:!0,type:{name:"ProcessChainItem[]"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},linkChain:{defaultValue:null,description:"",name:"linkChain",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"search"'},{value:'"alert"'},{value:'"link"'},{value:'"list"'},{value:'"table"'},{value:'"email"'},{value:'"location"'},{value:'"time"'},{value:'"copy"'},{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"delete-circle"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}}}catch{}const R={title:"Components/ProcessChain",component:s,tags:["autodocs"],argTypes:{}},t={args:{linkChain:!1,contentItems:[{headline:"List Chain 1",listItems:["list item","list item","list item"]},{headline:"List Chain 2",listItems:["list item","list item","list item"]},{headline:"List Chain 3",listItems:["list item","list item","list item","list item"]},{headline:"List Chain 4",listItems:["list item","list item","list item"]}]}},r={args:{linkChain:!0,contentItems:[{headline:"Link Chain 1",linkItems:[{icon:"arrow-long-right",link:"https://www.google.com"},{icon:"arrow-long-right",link:"https://www.example.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  2",linkItems:[{icon:"arrow-long-right",link:"https://www.github.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]},{headline:"Link Chain  3",linkItems:[{icon:"arrow-long-right",link:"https://www.stackoverflow.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  4",linkItems:[{icon:"arrow-long-right",link:"https://www.linkedin.com"},{icon:"arrow-long-right",link:"https://www.twitter.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]},{headline:"Link Chain  5",linkItems:[{icon:"arrow-long-right",link:"https://www.linkedin.com"},{icon:"arrow-long-right",link:"https://www.twitter.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]}]}};var m,p,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    linkChain: false,
    contentItems: [{
      headline: 'List Chain 1',
      listItems: ['list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 2',
      listItems: ['list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 3',
      listItems: ['list item', 'list item', 'list item', 'list item']
    }, {
      headline: 'List Chain 4',
      listItems: ['list item', 'list item', 'list item']
    }
    // {
    //   headline: 'List Chain 5',
    //   listItems: ['list item', 'list item', 'list item'],
    // },
    ]
  }
}`,...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var d,v,w;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    linkChain: true,
    contentItems: [{
      headline: 'Link Chain 1',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.google.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.example.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }]
    }, {
      headline: 'Link Chain  2',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.github.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }]
    }, {
      headline: 'Link Chain  3',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.stackoverflow.com'
      }]
    }, {
      headline: 'Link Chain  4',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.linkedin.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.twitter.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }]
    }, {
      headline: 'Link Chain  5',
      linkItems: [{
        icon: 'arrow-long-right',
        link: 'https://www.linkedin.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.twitter.com'
      }, {
        icon: 'arrow-long-right',
        link: 'https://www.gitlab.com'
      }]
    }]
  }
}`,...(w=(v=r.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const Z=["ListChain","LinkChain"];export{r as LinkChain,t as ListChain,Z as __namedExportsOrder,R as default};
