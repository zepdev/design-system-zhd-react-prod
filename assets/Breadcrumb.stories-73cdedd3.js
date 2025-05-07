import{j as e}from"./jsx-runtime-1a9d9a93.js";import{h as r}from"./index.es13-903b34be.js";import{N as l}from"./index.es16-f8867412.js";import{l as n}from"./index.es17-40e95622.js";import{c as o}from"./clsx-0839fdbe.js";import{r as y}from"./index-8b3efc3f.js";import"./index.es31-95f1013f.js";import"./_commonjsHelpers-de833af9.js";const c=({items:a})=>{var x,d;const[m,g]=y.useState((a==null?void 0:a.length)<3);return a.length===1?null:e.jsxs("div",{className:"zep-px-1 sm:zep-px-1.5 md:zep-px-[66px] lg:zep-px-[120px] zep-py-0.5 md:zep-py-0.5 zep-flex zep-justify-between md:zep-justify-start zep-items-center",children:[e.jsx("div",{className:"zep-block md:zep-hidden",children:m?e.jsx("div",{className:"zep-flex zep-flex-wrap zep-gap-0.25 zep-items-center",children:a.map((p,t)=>e.jsxs("div",{className:"zep-flex zep-items-center zep-gap-0.25",children:[t+1===a.length?e.jsx("p",{className:"zep-typography-supportText zep-text-typography-dark-100 zep-max-w-max",children:p.title}):e.jsx(l,{label:p==null?void 0:p.title,href:p.path,mode:n.Standalone,className:o("zep-typography-supportText zep-text-typography-dark-100 zep-max-w-max")}),t+1!==a.length&&e.jsx(r,{color:"#262626",className:"zep-h-[18px] zep-w-[18px]",name:"chevron-mini-right"})]},p==null?void 0:p.title))}):e.jsxs("div",{className:"zep-flex zep-gap-0.25 zep-flex-wrap",children:[e.jsxs("div",{className:"zep-flex zep-items-center zep-gap-0.25",children:[e.jsx(l,{label:(x=a[0])==null?void 0:x.title,href:a[0].path,mode:n.Standalone,className:o("zep-typography-supportText zep-text-typography-dark-100 zep-max-w-max")}),e.jsx(r,{color:"#262626",className:"zep-h-[18px] zep-w-[18px]",name:"chevron-mini-right"})]}),e.jsxs("div",{onClick:()=>g(!0),className:"zep-flex zep-items-center zep-gap-0.25",children:[e.jsx("div",{className:"zep-bg-[#E5E5E5] zep-px-[10px] zep-text-typography-dark-100 zep-rounded-4",children:"..."}),e.jsx(r,{color:"#262626",className:"zep-h-[18px] zep-w-[18px]",name:"chevron-mini-right"})]}),e.jsx("p",{className:"zep-typography-supportText zep-text-typography-dark-100",children:(d=a[a.length-1])==null?void 0:d.title})]})}),e.jsx("div",{className:"zep-hidden md:zep-block",children:e.jsx("div",{className:"zep-flex zep-gap-0.25 zep-items-center",children:a.map((p,t)=>e.jsxs("div",{className:"zep-flex zep-items-center zep-gap-0.25",children:[t+1===a.length?e.jsx("span",{className:"zep-typography-supportText zep-text-typography-dark-100 zep-max-w-max",children:p.title}):e.jsx(l,{label:p==null?void 0:p.title,href:p.path,mode:n.Standalone,className:o("zep-typography-supportText zep-text-typography-dark-100 zep-max-w-max")}),t+1!==a.length&&e.jsx(r,{color:"#262626",className:"zep-h-[18px] zep-w-[18px]",name:"chevron-mini-right"})]},p==null?void 0:p.title))})})]})};try{c.displayName="Breadcrumb",c.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"BreadcrumbItem[]"}}}}}catch{}const _={title:"Components/Breadcrumb",component:c,tags:["autodocs"],argTypes:{}},s={args:{items:[{path:"/",title:"Home"},{path:"/link-2",title:"Link 2"},{path:"/link-3",title:"Link 3"},{path:"/link-4",title:"Link 4"},{path:"/link-5",title:"Link 5"}]}};var i,h,z;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: [{
      path: '/',
      title: 'Home'
    }, {
      path: '/link-2',
      title: 'Link 2'
    }, {
      path: '/link-3',
      title: 'Link 3'
    }, {
      path: '/link-4',
      title: 'Link 4'
    }, {
      path: '/link-5',
      title: 'Link 5'
    }]
  } as BreadcrumbProps
}`,...(z=(h=s.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};const L=["Default"];export{s as Default,L as __namedExportsOrder,_ as default};
