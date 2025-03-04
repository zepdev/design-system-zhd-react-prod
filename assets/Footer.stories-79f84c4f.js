import{Z as c,l as y,a as n}from"./index.es16-fea76d43.js";import{j as e}from"./jsx-runtime-1a9d9a93.js";import{H as B}from"./HeaderLongComponent-899472c1.js";import{M as T}from"./MultiLinkList-9fa346cc.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./ZsdButton-850a5174.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./ZsdLink-8a57babc.js";import"./HeaderShortComponent-9c5de447.js";import"./LinkListItem-7a3c4116.js";import"./index.es2-0ce091fd.js";const r=({socialMediaLinks:s,socialMediaTitle:f,footerLinks:u,headline:p,description:L,tagline:z,...x})=>{const b=new Date().getFullYear();return e.jsxs("div",{className:"zep-bg-greyscale-200","data-testid":"zep-footer",children:[p&&e.jsx("div",{className:"zep-px-0.5 sm:zep-px-1 md:zep-px-2.5 xl:zep-pt-4 md:zep-py-3 zep-py-1.5 sm:zep-py-2.5",children:e.jsx(B,{headline:p,description:L,tagline:z})}),e.jsx(T,{...x}),e.jsxs("div",{className:"zep-flex zep-flex-col zep-w-full",children:[e.jsxs("div",{className:"zep-px-0.5 sm:zep-px-1 md:zep-px-2.5 xl:zep-pt-4 md:zep-py-3 zep-py-1.5 sm:zep-py-2.5  zep-flex zep-items-center zep-gap-2.5",children:[e.jsx("p",{className:"zep-text-typography-dark-100 zep-typography-headlineXS-fluid-cqi",children:f}),e.jsx("div",{className:"zep-flex zep-gap-1",children:s.map((i,o)=>e.jsx("div",{className:"zep-rounded-full zep-bg-darkgrey-500 zep-h-1.5 zep-w-1.5 zep-flex zep-items-center zep-justify-center",children:e.jsx(c,{label:"",icon:i.icon,href:i.href,target:i.target})},`${i.href}-${o}`))})]}),e.jsxs("div",{className:"zep-px-0.5 sm:zep-px-1 md:zep-px-2.5 zep-flex md:zep-gap-4 md:zep-flex-row zep-flex-col xl:zep-items-center xl:zep-gap-5 zep-gap-1 zep-py-1.5 zep-border-t-1 zep-border-t-greyscale-400 zep-w-full",children:[e.jsx("p",{className:"zep-text-typography-dark-100 zep-typography-bodyText",children:`© ${b} Zeppelin Power Systems GmbH`}),e.jsx("div",{className:"zep-flex sm:zep-gap-3 zep-gap-1 sm:zep-items-center sm:zep-flex-row sm:zep-flex-wrap zep-flex-col",children:u.map((i,o)=>e.jsx(c,{className:"zep-text-typography-dark-100",label:i.label,mode:y.Inline,target:i.target,href:i.href},`${i.label}-${o}`))})]})]})]})};try{r.displayName="Footer",r.__docgenInfo={description:"",displayName:"Footer",props:{socialMediaLinks:{defaultValue:null,description:"",name:"socialMediaLinks",required:!0,type:{name:"LinkProps[]"}},socialMediaTitle:{defaultValue:null,description:"",name:"socialMediaTitle",required:!0,type:{name:"string"}},footerLinks:{defaultValue:null,description:"",name:"footerLinks",required:!0,type:{name:"LinkProps[]"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}}}}}catch{}const t={links:[{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"},{icon:"arrow-right",href:"https://www.google.com",label:"link inline"}],headline:"Headline optional"},Z={title:"Patterns/Footer",component:r,tags:["autodocs"],argTypes:{}},l={args:{socialMediaTitle:"Folgen Sie uns auf",linkLists:[t,t,t,t,t],footerLinks:[{label:"inline link",href:"https://www.google.com",target:n.Blank},{label:"inline link",href:"https://www.google.com",target:n.Blank},{label:"inline link",href:"https://www.google.com",target:n.Blank},{label:"inline link",href:"https://www.google.com",target:n.Blank}],socialMediaLinks:[{socialIcon:"youtube",href:"https://www.facebook.com",target:n.Blank},{socialIcon:"linkedin",href:"https://www.facebook.com",target:n.Blank}]}},a={args:{headline:"Headline",description:"This is optional headline inside footer",tagline:"Optional",socialMediaTitle:"Folgen Sie uns auf",linkLists:[t,t,t,t,t],footerLinks:[{label:"inline link",href:"https://www.google.com",target:n.Blank},{label:"inline link",href:"https://www.google.com",target:n.Blank},{label:"inline link",href:"https://www.google.com",target:n.Blank},{label:"inline link",href:"https://www.google.com",target:n.Blank}],socialMediaLinks:[{socialIcon:"youtube",href:"https://www.facebook.com",target:n.Blank},{socialIcon:"linkedin",href:"https://www.facebook.com",target:n.Blank}]}};var m,g,k;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    socialMediaTitle: 'Folgen Sie uns auf',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    footerLinks: [{
      label: 'inline link',
      href: 'https://www.google.com',
      target: LinkTarget.Blank
    }, {
      label: 'inline link',
      href: 'https://www.google.com',
      target: LinkTarget.Blank
    }, {
      label: 'inline link',
      href: 'https://www.google.com',
      target: LinkTarget.Blank
    }, {
      label: 'inline link',
      href: 'https://www.google.com',
      target: LinkTarget.Blank
    }],
    socialMediaLinks: [{
      socialIcon: 'youtube',
      href: 'https://www.facebook.com',
      target: LinkTarget.Blank
    }, {
      socialIcon: 'linkedin',
      href: 'https://www.facebook.com',
      target: LinkTarget.Blank
    }]
  } as FooterProps
}`,...(k=(g=l.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var d,w,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    description: 'This is optional headline inside footer',
    tagline: 'Optional',
    socialMediaTitle: 'Folgen Sie uns auf',
    linkLists: [mockLinkList, mockLinkList, mockLinkList, mockLinkList, mockLinkList],
    footerLinks: [{
      label: 'inline link',
      href: 'https://www.google.com',
      target: LinkTarget.Blank
    }, {
      label: 'inline link',
      href: 'https://www.google.com',
      target: LinkTarget.Blank
    }, {
      label: 'inline link',
      href: 'https://www.google.com',
      target: LinkTarget.Blank
    }, {
      label: 'inline link',
      href: 'https://www.google.com',
      target: LinkTarget.Blank
    }],
    socialMediaLinks: [{
      socialIcon: 'youtube',
      href: 'https://www.facebook.com',
      target: LinkTarget.Blank
    }, {
      socialIcon: 'linkedin',
      href: 'https://www.facebook.com',
      target: LinkTarget.Blank
    }]
  } as FooterProps
}`,...(h=(w=a.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};const C=["Default","WithHeadline"];export{l as Default,a as WithHeadline,C as __namedExportsOrder,Z as default};
