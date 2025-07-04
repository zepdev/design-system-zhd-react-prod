import{j as l}from"./jsx-runtime-1a9d9a93.js";import{S as h}from"./SingleLinkList-c8558955.js";import{M as u}from"./MultiLinkList-96ed518b.js";import{m as k}from"./mocks-dd8b5ca4.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./HeaderShortComponent-bd83f2cb.js";import"./clsx-0839fdbe.js";import"./LinkListItem-4473f8f8.js";import"./index.es2-5389b911.js";import"./index.es32-95f1013f.js";import"./index.es13-903b34be.js";import"./index.es33-fbb642fb.js";import"./ZsdButton-85afd3a3.js";import"./index.es17-40e95622.js";import"./index.es36-796b080a.js";import"./index-ff2c9236.js";import"./getDataLayer-2559cd39.js";import"./getUrlWithTrailingSlash-9d839ee0.js";import"./tw-merge-1166cefb.js";import"./index.es16-2e85d74f.js";import"./RichText-291e7b9b.js";import"./Layout-fc6ef0e0.js";import"./HeaderLongComponent-885b373a.js";const t=({id:r,linkLists:e,headline:a})=>e.length===0?null:e.length===1?l.jsx(h,{title:a,...e[0]}):l.jsx(u,{id:r,headline:a,linkLists:e});try{t.displayName="ContactSection",t.__docgenInfo={description:"",displayName:"ContactSection",props:{linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const F={title:"Patterns/ContactSection",component:t,tags:["autodocs"],argTypes:{}},n={args:{headline:"Pressekontakt",linkLists:[{headline:"Sina Koch",description:k,links:[{href:"",label:"inline link"},{href:"",label:"inline link"}]}]}},i={args:{headline:"Sie brauchen Unterstützung - wir helfen Ihnen gerne",linkLists:[{headline:"Deutschland",links:[{href:"",label:"inline link"}]},{headline:"International",links:[{href:"",label:"inline link"}]}]}};var o,s,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const O=["Single","Multi"];export{i as Multi,n as Single,O as __namedExportsOrder,F as default};
