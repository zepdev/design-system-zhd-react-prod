import{G as e,a as s}from"./global-variants-893e06e6.js";import{j as o}from"./jsx-runtime-1a9d9a93.js";import{b as d}from"./commonCSS-cc68a568.js";import{H as g}from"./HeaderLongComponent-08286e07.js";import{I as f}from"./InfographicImage-289d3a3a.js";import{L as b}from"./Layout-fc6ef0e0.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-90aad98d.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./clsx-0839fdbe.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./RichText-8b59c071.js";import"./ZsdButton-5f1a4816.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./useContainerDimensions-42dc9502.js";const i=({variant:a=e.Zps,header:n,infographic:r,id:c})=>{const p=()=>{switch(a){case e.Zps:return s.ZpsBg;case e.Cat:return s.CatBg}};return o.jsxs(b,{id:c,wrapperClassname:d[p()],className:"zep-py-3 sm:zep-py-4 md:zep-py-5",children:[n&&n.headline&&o.jsx(g,{...n,variant:p()}),o.jsx(f,{className:"zep-mt-1 sm:zep-mt-1.5 md:zep-mt-2 xl:zep-mt-4",imageUrl:r.imageUrl,imageAlt:r.imageAlt,points:r.points,variant:a})]})};try{i.displayName="InfographicImagePattern",i.__docgenInfo={description:"",displayName:"InfographicImagePattern",props:{header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"HeaderLongComponentProps"}},infographic:{defaultValue:null,description:"",name:"infographic",required:!0,type:{name:"InfographicImageProps"}},variant:{defaultValue:{value:"GlobalVariants.Zps"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"ZPS"'},{value:'"CAT"'}]}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}}}}}catch{}const w={title:"Patterns/InfographicImagePattern",component:i,tags:["autodocs"],argTypes:{variant:{control:{type:"radio",options:Object.keys(e)}}}},t={args:{variant:e.Zps,header:{headline:"Die Funktionsweise der Unterbrechungsfreien Stromversorgung (USV) einfach erklärt",tagline:"Zeppelin Power Systems Lösungen für STrom & Wärme",type:"primary-button",linkHref:"",linkText:"Kontaktieren Sie unsere Experten"},infographic:{imageUrl:"https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto",imageAlt:"Image alt",points:[{x:20,y:20,description:"Tooltip content",label:"Label"},{x:40,y:30,description:"Tooltip content",label:"Label"},{x:15,y:80,description:"Tooltip content",label:"Label"},{x:85,y:70,description:"Tooltip content",label:"Label"}]}}};var l,m,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: GlobalVariants.Zps,
    header: {
      headline: 'Die Funktionsweise der Unterbrechungsfreien Stromversorgung (USV) einfach erklärt',
      tagline: 'Zeppelin Power Systems Lösungen für STrom & Wärme',
      type: 'primary-button',
      linkHref: '',
      linkText: 'Kontaktieren Sie unsere Experten'
    },
    infographic: {
      imageUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto',
      imageAlt: 'Image alt',
      points: [{
        x: 20,
        y: 20,
        description: 'Tooltip content',
        label: 'Label'
      }, {
        x: 40,
        y: 30,
        description: 'Tooltip content',
        label: 'Label'
      }, {
        x: 15,
        y: 80,
        description: 'Tooltip content',
        label: 'Label'
      }, {
        x: 85,
        y: 70,
        description: 'Tooltip content',
        label: 'Label'
      }]
    }
  } as InfographicImagePatternProps
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const A=["Default"];export{t as Default,A as __namedExportsOrder,w as default};
