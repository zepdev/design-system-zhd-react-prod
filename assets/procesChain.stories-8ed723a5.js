import{j as i}from"./jsx-runtime-1a9d9a93.js";import{c as l}from"./clsx-0839fdbe.js";import{Z as z,a as C,l as x}from"./index.es16-fea76d43.js";import{H as I}from"./HeaderLongComponent-899472c1.js";import{L}from"./Layout-921eb155.js";import{S as b}from"./Scrollbar-cd109586.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./ZsdButton-850a5174.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./ZsdLink-8a57babc.js";const o=({contentItems:s,headline:m,linkChain:u,...f})=>i.jsxs(L,{className:"zep-flex zep-flex-col md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5 zep-w-full sm:zep-px-1",children:[m&&i.jsx(I,{headline:m,...f}),i.jsx(b,{scrollOrientation:"horizontal",controlId:"process-chain-scrollbar",className:"zep-w-full",children:i.jsx("div",{className:"xl:zep-w-full zep-w-fit zep-flex zep-gap-2 md:zep-gap-2.5",children:s.map((e,p)=>i.jsx("div",{className:l("xl:zep-grow xl:zep-w-auto zep-min-w-[286px]"),children:i.jsxs("div",{className:l("zep-relative zep-bg-primary-default zep-text-greyscale-0 xl:zep-max-w-full zep-max-w-[300px] zep-p-1.5 zep-h-full"),children:[i.jsxs("div",{className:l("zep-flex","zep-flex-col","zep-items-start"),children:[i.jsx("h4",{"data-testid":"process-chain-headline",className:"zep-typography-headlineSM-fluid-cqi  zep-break-all zep-mb-1",children:e.headline}),u?e.linkItems&&e.linkItems.map((n,t)=>i.jsx("div",{className:l({"zep-mt-1.5":t!==0}),children:i.jsx(z,{label:"inline link",iconPlacement:"before",icon:n.icon,href:n.link,target:C.Blank,mode:x.Inline})},t)):i.jsx("ul",{className:"zep-pl-1.5",children:e.listItems&&e.listItems.map((n,t)=>i.jsx("li",{className:"zep-list-disc",children:n},t))})]}),p<s.length-1&&i.jsx("div",{className:"zep-absolute zep-left-auto -zep-right-1 zep-border-t-transparent zep-border-b-transparent zep-border-t-[18px] zep-border-b-[18px] zep-top-1/3 zep-border-l-[16px] zep-border-l-primary-default zep-translate-y-1/2"})]})},p))})})]});try{o.displayName="ProcessChain",o.__docgenInfo={description:"",displayName:"ProcessChain",props:{contentItems:{defaultValue:null,description:"",name:"contentItems",required:!0,type:{name:"ProcessChainItem[]"}},linkChain:{defaultValue:null,description:"",name:"linkChain",required:!0,type:{name:"boolean"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const Z={title:"Components/ProcessChain",component:o,tags:["autodocs"],argTypes:{}},a={args:{linkChain:!1,contentItems:[{headline:"List Chain 1",listItems:["list item","list item","list item"]},{headline:"List Chain 2",listItems:["list item","list item","list item"]},{headline:"List Chain 3",listItems:["list item","list item","list item","list item"]},{headline:"List Chain 4",listItems:["list item","list item","list item"]},{headline:"List Chain 5",listItems:["list item","list item","list item"]}]}},r={args:{linkChain:!0,contentItems:[{headline:"Link Chain 1",linkItems:[{icon:"arrow-long-right",link:"https://www.google.com"},{icon:"arrow-long-right",link:"https://www.example.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  2",linkItems:[{icon:"arrow-long-right",link:"https://www.github.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]},{headline:"Link Chain  3",linkItems:[{icon:"arrow-long-right",link:"https://www.stackoverflow.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"},{icon:"arrow-long-right",link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  4",linkItems:[{icon:"arrow-long-right",link:"https://www.linkedin.com"},{icon:"arrow-long-right",link:"https://www.twitter.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]},{headline:"Link Chain  5",linkItems:[{icon:"arrow-long-right",link:"https://www.linkedin.com"},{icon:"arrow-long-right",link:"https://www.twitter.com"},{icon:"arrow-long-right",link:"https://www.gitlab.com"}]}]}};var c,h,w;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    }, {
      headline: 'List Chain 5',
      listItems: ['list item', 'list item', 'list item']
    }]
  }
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var d,g,k;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(k=(g=r.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};const A=["ListChain","LinkChain"];export{r as LinkChain,a as ListChain,A as __namedExportsOrder,Z as default};
