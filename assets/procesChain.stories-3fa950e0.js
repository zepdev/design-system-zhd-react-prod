import{j as e}from"./jsx-runtime-1a9d9a93.js";import{N as x}from"./index.es16-0479d967.js";import{a as I,l as L}from"./index.es17-40e95622.js";import{i as r}from"./RichText-c5dc8216.js";import{c as p}from"./clsx-0839fdbe.js";import{H as y}from"./HeaderLongComponent-dc3f8f90.js";import{L as b}from"./Layout-fc6ef0e0.js";import{S as v}from"./Scrollbar-bd0f93ab.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./ZsdButton-e6acc11f.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./getDataLayer-1420585a.js";import"./tw-merge-1166cefb.js";const a=({linkChain:m,contentItems:g,id:u,headline:o,...z})=>e.jsxs(b,{id:u,className:"zep-flex zep-flex-col md:zep-gap-4 sm:zep-gap-3 zep-gap-2.5 zep-w-full",children:[o&&e.jsx(y,{headline:o,...z}),e.jsx(v,{scrollOrientation:"horizontal",controlId:"process-chain-scrollbar",className:"zep-w-full",children:e.jsx("div",{className:"zep-w-fit lg:zep-w-full zep-flex zep-items-stretch zep-gap-2 lg:zep-gap-1.5",children:g.map((l,C)=>e.jsx("div",{className:"zep-w-[300px] lg:zep-w-auto lg:zep-basis-1/5 lg:zep-flex-shrink lg:zep-flex-grow",children:e.jsx("div",{className:p("zep-relative zep-bg-indigo-500 zep-text-greyscale-0 zep-w-full zep-p-1.5 zep-h-full"),children:e.jsxs("div",{className:p("zep-flex","zep-flex-col","zep-items-start","zep-gap-1"),children:[e.jsx("h4",{"data-testid":"process-chain-headline",className:"zep-typography-headlineSM-fluid-cqi  zep-hyphens-auto zep-break-normal",children:l.headline}),m?e.jsx("div",{className:"zep-flex-col zep-flex zep-gap-0.5",children:l.linkItems.map((t,s)=>e.jsx(x,{label:"inline link",iconPlacement:"before",icon:t.icon,href:t.link,target:I.Blank,mode:L.Inline},s))}):e.jsx(r,{className:"zep-flex-col zep-flex zep-gap-0.5",type:"bullet",children:l.listItems.map((t,s)=>e.jsx(r.Item,{className:"zep-py-[0] zep-h-auto",children:t},`${t}-${s}`))})]})})},C))})})]});try{a.displayName="ProcessChain",a.__docgenInfo={description:"",displayName:"ProcessChain",props:{linkChain:{defaultValue:null,description:"",name:"linkChain",required:!0,type:{name:"any"}},contentItems:{defaultValue:null,description:"",name:"contentItems",required:!0,type:{name:"any"}},id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"any"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"any"}}}}}catch{}const G={title:"Components/ProcessChain",component:a,tags:["autodocs"],argTypes:{}},i={args:{linkChain:!1,contentItems:[{headline:"List Chain 1",listItems:["list item","list item","list item"]},{headline:"List Chain 2",listItems:["list item","list item","list item"]},{headline:"List Chain 3",listItems:["list item","list item","list item","list item"]},{headline:"List Chain 4",listItems:["list item","list item","list item"]}]}},n={args:{linkChain:!0,hasIcon:!1,contentItems:[{headline:"Link Chain 1",linkItems:[{link:"https://www.google.com"},{link:"https://www.example.com"},{link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  2",linkItems:[{link:"https://www.github.com"},{link:"https://www.gitlab.com"},{link:"https://www.gitlab.com"}]},{headline:"Link Chain  3",linkItems:[{link:"https://www.stackoverflow.com"},{link:"https://www.stackoverflow.com"},{link:"https://www.stackoverflow.com"}]},{headline:"Link Chain  4",linkItems:[{link:"https://www.linkedin.com"},{link:"https://www.twitter.com"},{link:"https://www.gitlab.com"},{link:"https://www.gitlab.com"}]}]}};var c,h,w;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var d,k,f;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    linkChain: true,
    hasIcon: false,
    contentItems: [{
      headline: 'Link Chain 1',
      linkItems: [{
        link: 'https://www.google.com'
      }, {
        link: 'https://www.example.com'
      }, {
        link: 'https://www.stackoverflow.com'
      }]
    }, {
      headline: 'Link Chain  2',
      linkItems: [{
        link: 'https://www.github.com'
      }, {
        link: 'https://www.gitlab.com'
      }, {
        link: 'https://www.gitlab.com'
      }]
    }, {
      headline: 'Link Chain  3',
      linkItems: [{
        link: 'https://www.stackoverflow.com'
      }, {
        link: 'https://www.stackoverflow.com'
      }, {
        link: 'https://www.stackoverflow.com'
      }]
    }, {
      headline: 'Link Chain  4',
      linkItems: [{
        link: 'https://www.linkedin.com'
      }, {
        link: 'https://www.twitter.com'
      }, {
        link: 'https://www.gitlab.com'
      }, {
        link: 'https://www.gitlab.com'
      }]
    }]
  }
}`,...(f=(k=n.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};const J=["ListChain","LinkChain"];export{n as LinkChain,i as ListChain,J as __namedExportsOrder,G as default};
