import{a as l,l as q}from"./index.es17-40e95622.js";import{j as a}from"./jsx-runtime-1a9d9a93.js";import{N as g}from"./index.es16-2e85d74f.js";import{g as S}from"./getDataLayer-2559cd39.js";import{g as v}from"./getUrlWithTrailingSlash-860fbe2b.js";import{s as h}from"./slugify-95689b5e.js";import{L as k}from"./Layout-fc6ef0e0.js";import{G as c}from"./global-variants-4c710595.js";import{M as _}from"./MultiLinkList-9f38ee4b.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es32-95f1013f.js";import"./index.es13-903b34be.js";import"./clsx-0839fdbe.js";import"./HeaderLongComponent-a26df638.js";import"./RichText-a2693b93.js";import"./ZsdButton-1c43bc58.js";import"./index.es36-796b080a.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./LinkListItem-570a962f.js";import"./index.es2-46abbd4f.js";import"./index.es33-fbb642fb.js";const j=t=>t?{"youtube-circle":"youtube-colored","instagram-circle":"instagram-colored","linkedin-circle":"linkedin-colored","facebook-circle":"facebook-colored","twitter-circle":"twitter-colored","xing-circle":"xing-colored",youtube:"youtube-colored",instagram:"instagram-colored",linkedin:"linkedin-colored",facebook:"facebook-colored",twitter:"twitter-colored",xing:"xing-colored"}[t]||t:void 0,u=({socialMediaLinks:t,socialMediaTitle:p,footerLinks:I,footerText:d,variant:B=c.Zhd,prominentSocialIcons:m=!1,...T})=>{const V=new Date().getFullYear(),i=S();return a.jsxs("div",{className:"zep-flex zep-flex-col zep-items-center zep-gap-1 sm:zep-gap-1.5 md:zep-gap-2.5",children:[d&&a.jsx(k,{children:a.jsx("span",{className:"zep-typography-supportText zep-text-typography-dark-70 zep-opacity-70",children:d})}),a.jsxs(k,{wrapperClassname:"!zep-mb-[0] zep-bg-greyscale-200 zep-pt-1 md:zep-pt-1.5 lg:zep-pt-2.5",children:[a.jsx(_,{linkListItemClassname:"zep-px-[0] sm:zep-px-[0] md:zep-px-[0]",isPatternPart:!0,isFooterList:!0,...T}),a.jsx("div",{"data-testid":"zep-footer",children:a.jsxs("div",{className:"zep-flex zep-flex-col zep-w-full",children:[a.jsxs("div",{className:"lg:zep-pt-5 md:zep-py-3 zep-py-1.5 sm:zep-py-2.5 md:zep-px-[0px] zep-flex zep-items-center zep-gap-2.5",children:[a.jsx("p",{className:"zep-text-darkgrey-500 zep-typography-headlineXS-fluid-cqi",children:p}),a.jsx("div",{className:"zep-flex zep-gap-1",children:t.map(e=>{var f;const r=m?j(e.socialIcon):e.socialIcon;return a.jsx("div",{className:m?"zep-rounded-full zep-h-2 zep-w-2 zep-flex zep-items-center zep-justify-center [&>a]:zep-w-[32px] [&>a]:zep-h-[32px] [&_svg]:zep-w-[32px] [&_svg]:zep-h-[32px]":"zep-rounded-full zep-h-1.5 zep-w-1.5 zep-flex zep-items-center zep-justify-center [&>a]:zep-w-[24px] [&>a]:zep-h-[24px]",children:a.jsx(g,{label:"",target:(f=e.href)!=null&&f.startsWith("http")?l.Blank:l.Self,socialIcon:r,icon:e.icon,href:v(e.href),onClickCapture:()=>{i==null||i.push({event:"interaction_footer",link_text:e.socialIcon,link_context:e.socialIcon,link_section:`module-footer-${h((e==null?void 0:e.socialIcon)||"")}`})}})},e.socialIcon||e.icon)})})]}),a.jsxs("div",{className:"zep-flex lg:zep-flex-row zep-flex-col lg:zep-items-center lg:zep-gap-5 zep-gap-1 zep-py-1.5 zep-border-t-1 zep-border-t-greyscale-700 zep-w-full",children:[a.jsx("p",{className:"zep-text-greyscale-900 zep-typography-bodyText",children:`© ${V} ${B===c.Zsd?"Zeppelin Systems GmbH":"Zeppelin GmbH"}`}),a.jsx("div",{className:"zep-flex sm:zep-gap-3 zep-gap-1 sm:zep-items-center sm:zep-flex-row sm:zep-flex-wrap zep-flex-col",children:I.map(e=>{var r;return a.jsx(g,{className:"zep-text-primary-default",target:(r=e.href)!=null&&r.startsWith("http")?l.Blank:l.Self,label:e.label,mode:q.Inline,onClickCapture:()=>{i==null||i.push({event:"interaction_footer",link_text:e.label,link_context:e.label,link_section:`module-footer-${h(e.label)}`})},href:v(e.href)},e.label)})})]})]})})]})]})};try{u.displayName="Footer",u.__docgenInfo={description:"",displayName:"Footer",props:{socialMediaLinks:{defaultValue:null,description:"",name:"socialMediaLinks",required:!0,type:{name:"LinkProps[]"}},socialMediaTitle:{defaultValue:null,description:"",name:"socialMediaTitle",required:!0,type:{name:"string"}},footerLinks:{defaultValue:null,description:"",name:"footerLinks",required:!0,type:{name:"LinkProps[]"}},footerText:{defaultValue:null,description:"",name:"footerText",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"GlobalVariants.Zhd"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'},{value:'"ZSD"'},{value:'"ZHD"'}]}},prominentSocialIcons:{defaultValue:{value:"false"},description:`When true, displays social icons larger (40x40) and uses colored variants.
Default: false (maintains backward compatibility)`,name:"prominentSocialIcons",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-dark"'},{value:'"secondary-dark"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"left"'},{value:'"right"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},isPatternPart:{defaultValue:null,description:"",name:"isPatternPart",required:!1,type:{name:"boolean"}},linkListItemClassname:{defaultValue:null,description:"",name:"linkListItemClassname",required:!1,type:{name:"string"}},isFooterList:{defaultValue:null,description:"",name:"isFooterList",required:!1,type:{name:"boolean"}}}}}catch{}const n={links:[{href:"https://www.google.com",label:"link inline"},{href:"https://www.google.com",label:"link inline"},{href:"https://www.google.com",label:"link inline"},{href:"https://www.google.com",label:"link inline"}],headline:"Headline optional"},ae={title:"Patterns/Footer",component:u,tags:["autodocs"],argTypes:{prominentSocialIcons:{control:"boolean",description:"When true, displays larger colorful social icons (40x40 instead of 24x24)"},variant:{control:"select",options:Object.values(c)}}},o={args:{socialMediaTitle:"Folgen Sie uns auf",linkLists:[n,n,n,n,n],footerLinks:[{label:"inline link",href:"https://www.google.com",target:l.Blank},{label:"inline link",href:"https://www.google.com",target:l.Blank},{label:"inline link",href:"https://www.google.com",target:l.Blank},{label:"inline link",href:"https://www.google.com",target:l.Blank}],socialMediaLinks:[{socialIcon:"linkedin-circle",href:"https://www.linkedin.com",target:l.Blank},{socialIcon:"youtube-circle",href:"https://www.youtube.com",target:l.Blank},{socialIcon:"instagram-circle",href:"https://www.instagram.com",target:l.Blank}],prominentSocialIcons:!1}},s={args:{variant:c.Zsd,socialMediaTitle:"Folgen Sie uns auf",linkLists:[n,n,n,n,n],footerLinks:[{label:"inline link",href:"https://www.google.com",target:l.Blank},{label:"inline link",href:"https://www.google.com",target:l.Blank},{label:"inline link",href:"https://www.google.com",target:l.Blank},{label:"inline link",href:"https://www.google.com",target:l.Blank}],socialMediaLinks:[{socialIcon:"linkedin-circle",href:"https://www.linkedin.com",target:l.Blank},{socialIcon:"youtube-circle",href:"https://www.youtube.com",target:l.Blank},{socialIcon:"instagram-circle",href:"https://www.instagram.com",target:l.Blank}],prominentSocialIcons:!0}};var w,z,y;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
      socialIcon: 'linkedin-circle',
      href: 'https://www.linkedin.com',
      target: LinkTarget.Blank
    }, {
      socialIcon: 'youtube-circle',
      href: 'https://www.youtube.com',
      target: LinkTarget.Blank
    }, {
      socialIcon: 'instagram-circle',
      href: 'https://www.instagram.com',
      target: LinkTarget.Blank
    }],
    prominentSocialIcons: false
  } as FooterProps
}`,...(y=(z=o.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var b,L,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zsd,
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
      socialIcon: 'linkedin-circle',
      href: 'https://www.linkedin.com',
      target: LinkTarget.Blank
    }, {
      socialIcon: 'youtube-circle',
      href: 'https://www.youtube.com',
      target: LinkTarget.Blank
    }, {
      socialIcon: 'instagram-circle',
      href: 'https://www.instagram.com',
      target: LinkTarget.Blank
    }],
    prominentSocialIcons: true
  } as FooterProps
}`,...(x=(L=s.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};const ne=["Default","ProminentSocialIcons"];export{o as Default,s as ProminentSocialIcons,ne as __namedExportsOrder,ae as default};
