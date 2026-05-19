import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{M as h}from"./MultiLinkList-BeQ9o4IV.js";import{S as u}from"./SingleLinkList-CcUv94M_.js";import{m as k}from"./mocks-v7E6ixZS.js";import"./index-yBjzXJbu.js";import"./clsx-B-dksMZM.js";import"./HeaderLongComponent-ISXMNTGR.js";import"./index.es16-CtGfWpDE.js";import"./index.es32-D9mbuw9C.js";import"./index.es13-DrwoFUlW.js";import"./index.es17-CiSAzvV-.js";import"./RichText-RFdOvo6X.js";import"./index-BOnQTV8N.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./getUrlWithTrailingSlash-CiYGomte.js";import"./ZsdButton-C7wGszeV.js";import"./index.es36-BF3AzYXZ.js";import"./index-Dp3B9jqt.js";import"./getDataLayer-CP2Cgxnv.js";import"./tw-merge-Ds6tgvmq.js";import"./LinkListItem-CxmlSfD1.js";import"./index.es2-B2kfYg2g.js";import"./index.es33-DhYa1GDY.js";import"./Layout-CkmeVxQV.js";import"./HeaderShortComponent-MjiBRk6D.js";const t=({id:r,linkLists:e,headline:a})=>e.length===0?null:e.length===1?l.jsx(u,{title:a,...e[0]}):l.jsx(h,{id:r,headline:a,linkLists:e});try{t.displayName="ContactSection",t.__docgenInfo={description:"",displayName:"ContactSection",props:{linkLists:{defaultValue:null,description:"",name:"linkLists",required:!0,type:{name:"LinkListItemProps[]"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const O={title:"Patterns/ContactSection",component:t,tags:["autodocs"],argTypes:{}},n={args:{headline:"Pressekontakt",linkLists:[{headline:"Sina Koch",description:k,links:[{href:"",label:"inline link"},{href:"",label:"inline link"}]}]}},i={args:{headline:"Sie brauchen Unterstützung - wir helfen Ihnen gerne",linkLists:[{headline:"Deutschland",links:[{href:"",label:"inline link"}]},{headline:"International",links:[{href:"",label:"inline link"}]}]}};var o,s,p;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const v=["Single","Multi"];export{i as Multi,n as Single,v as __namedExportsOrder,O as default};
