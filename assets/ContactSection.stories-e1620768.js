import{j as o}from"./jsx-runtime-1a9d9a93.js";import{M as h}from"./MultiLinkList-b1f30934.js";import{S as k}from"./SingleLinkList-488cd7f9.js";import{G as f}from"./global-variants-893e06e6.js";import{m as g}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./HeaderLongComponent-9fedcf73.js";import"./index.es16-90aad98d.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-0c7ce182.js";import"./ZsdButton-7c6bd027.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./LinkListItem-f3f1208b.js";import"./index.es2-13477cb5.js";import"./commonCSS-cc68a568.js";import"./getDataLayer-1420585a.js";import"./Layout-fc6ef0e0.js";import"./HeaderShortComponent-c99efe6b.js";const t=({id:r,variant:a=f.Zps,linkLists:e,headline:l})=>e.length===0?null:e.length===1?o.jsx(k,{title:l,...e[0],variant:a}):o.jsx(h,{id:r,headline:l,linkLists:e,variant:a});try{t.displayName="ContactSection",t.__docgenInfo={description:"",displayName:"ContactSection",props:{variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const U={title:"Patterns/ContactSection",component:t,tags:["autodocs"],argTypes:{}},n={args:{headline:"Pressekontakt",linkLists:[{headline:"Sina Koch",description:g,links:[{href:"",label:"inline link"},{href:"",label:"inline link"}]}]}},i={args:{headline:"Sie brauchen Unterstützung - wir helfen Ihnen gerne",linkLists:[{headline:"Deutschland",links:[{href:"",label:"inline link"}]},{headline:"International",links:[{href:"",label:"inline link"}]}]}};var s,p,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    headline: 'Pressekontakt',
    linkLists: [{
      headline: 'Sina Koch',
      description: mockRichTextShort,
      links: [{
        href: '',
        label: 'inline link'
      }, {
        href: '',
        label: 'inline link'
      }]
    }]
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,d,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    headline: 'Sie brauchen Unterstützung - wir helfen Ihnen gerne',
    linkLists: [{
      headline: 'Deutschland',
      links: [{
        href: '',
        label: 'inline link'
      }]
    }, {
      headline: 'International',
      links: [{
        href: '',
        label: 'inline link'
      }]
    }]
  }
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const A=["Single","Multi"];export{i as Multi,n as Single,A as __namedExportsOrder,U as default};
