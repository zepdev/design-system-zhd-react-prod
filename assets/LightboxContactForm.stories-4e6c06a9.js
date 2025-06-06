import{j as a}from"./jsx-runtime-1a9d9a93.js";import{L as c}from"./global-variants-3afa6a98.js";import{c as t}from"./TextArea-9b39ccf8.js";import{M as g}from"./ModalComponent-0786dffe.js";import{C as f}from"./ContactForm-33888020.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es13-751bc762.js";import"./clsx-0839fdbe.js";import"./focus-d7245c50.js";import"./index-9d475cdf.js";import"./ZsdButton-722e972e.js";import"./index.es17-40e95622.js";import"./index.es35-79e31a69.js";import"./index.es31-95f1013f.js";import"./index-ff2c9236.js";import"./getDataLayer-1420585a.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./tw-merge-1166cefb.js";import"./HeaderLongComponent-67cfc593.js";import"./index.es16-0479d967.js";import"./RichText-d929395f.js";import"./MultiLinkList-2c610275.js";import"./LinkListItem-989347bd.js";import"./index.es2-e8c3dc72.js";import"./Layout-fc6ef0e0.js";const i=({onSubmit:r,locale:e,isOpen:d,setIsOpen:u,loading:h,contactArea:l,contactList:o,privacyPolicyUrl:y})=>a.jsx(g,{isOpen:d,label:t[e].close,onClose:()=>u(!1),children:a.jsx(f,{onSubmit:r,locale:e,headline:l?`${t[e].lightboxHeadline} ${l}`:t[e].lightboxHeadlineFallback,tagline:t[e].lightboxTagline,linkLists:o&&(o==null?void 0:o.length)>0?o:[{headline:t[e].linkListGermany,links:[{label:"0800 - 5892787",icon:"phone",href:"tel:0800-5892787"}]},{headline:t[e].linkListInternational,links:[{label:"+49 40 853 151-222",icon:"phone",href:"tel:+49 40 853 151-222"}]}],loading:h,privacyPolicyUrl:y})});try{i.displayName="LightboxContactForm",i.__docgenInfo={description:"",displayName:"LightboxContactForm",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: unknown) => void"}},locale:{defaultValue:null,description:"",name:"locale",required:!0,type:{name:"enum",value:[{value:'"en"'},{value:'"de"'}]}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},setIsOpen:{defaultValue:null,description:"",name:"setIsOpen",required:!0,type:{name:"(x: boolean) => void"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},contactArea:{defaultValue:null,description:"",name:"contactArea",required:!1,type:{name:"string"}},contactList:{defaultValue:null,description:"",name:"contactList",required:!1,type:{name:"LinkListItemProps[]"}},privacyPolicyUrl:{defaultValue:null,description:"",name:"privacyPolicyUrl",required:!0,type:{name:"string"}}}}}catch{}const A={title:"Patterns/LightboxContactForm",component:i,tags:["autodocs"],argTypes:{locale:{control:{type:"radio",options:Object.keys(c)}}}},n={decorators:[r=>a.jsx("div",{className:"zep-h-[800px]",children:a.jsx(r,{})})],args:{locale:c.EN,isOpen:!0,privacyPolicyUrl:"https://www.google.com",contactList:[{headline:"Germany",links:[{label:"0800 5892787",icon:"phone",href:"tel:0800-5892787"}]}]}};var s,p,m;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  decorators: [Story => <div className="zep-h-[800px]">
        <Story />
      </div>],
  args: {
    locale: LocaleVariants.EN,
    isOpen: true,
    privacyPolicyUrl: 'https://www.google.com',
    contactList: [{
      headline: 'Germany',
      links: [{
        label: '0800 5892787',
        icon: 'phone',
        href: 'tel:0800-5892787'
      }]
    }]
  } as LightboxContactFormProps
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const R=["Default"];export{n as Default,R as __namedExportsOrder,A as default};
