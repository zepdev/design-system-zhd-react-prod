import{j as l}from"./jsx-runtime-1a9d9a93.js";import{M as h}from"./MultiLinkList-2c610275.js";import{S as u}from"./SingleLinkList-80c28cdb.js";import{m as k}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./HeaderLongComponent-67cfc593.js";import"./index.es16-0479d967.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./index.es17-40e95622.js";import"./RichText-d929395f.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./ZsdButton-722e972e.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./getDataLayer-1420585a.js";import"./tw-merge-1166cefb.js";import"./LinkListItem-989347bd.js";import"./index.es2-e8c3dc72.js";import"./Layout-fc6ef0e0.js";import"./HeaderShortComponent-bd83f2cb.js";const t=({id:r,linkLists:e,headline:a})=>e.length===0?null:e.length===1?l.jsx(u,{title:a,...e[0]}):l.jsx(h,{id:r,headline:a,linkLists:e});try{t.displayName="ContactSection",t.__docgenInfo={description:"",displayName:"ContactSection",props:{linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const U={title:"Patterns/ContactSection",component:t,tags:["autodocs"],argTypes:{}},n={args:{headline:"Pressekontakt",linkLists:[{headline:"Sina Koch",description:k,links:[{href:"",label:"inline link"},{href:"",label:"inline link"}]}]}},i={args:{headline:"Sie brauchen Unterstützung - wir helfen Ihnen gerne",linkLists:[{headline:"Deutschland",links:[{href:"",label:"inline link"}]},{headline:"International",links:[{href:"",label:"inline link"}]}]}};var o,s,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(p=(s=n.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var m,c,d;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const F=["Single","Multi"];export{i as Multi,n as Single,F as __namedExportsOrder,U as default};
