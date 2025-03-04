import{A as v,z as r}from"./ArticleCard-d061ee69.js";import{j as n}from"./jsx-runtime-1a9d9a93.js";import{D as z}from"./index.es20-ed882ee4.js";import{r as H}from"./index-8b3efc3f.js";import{H as q}from"./HeaderLongComponent-899472c1.js";import{L as P}from"./Layout-921eb155.js";import"./index.es16-fea76d43.js";import"./index.es31-95f1013f.js";import"./index.es13-3580608c.js";import"./index.es4-1a6c2338.js";import"./index.es35-79e31a69.js";import"./index.es24-01fa0cce.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./ZsdButton-850a5174.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./ZsdLink-8a57babc.js";const o=({articles:e,headline:t,tagline:f,description:w,linkHref:b,linkText:T})=>{const[m,I]=H.useState(1),l=(m-1)*10,L=l+10;return n.jsxs(P,{testId:"zep-articles-section",children:[n.jsx(q,{type:"link",headline:t,tagline:f,description:w,linkText:T,linkHref:b}),n.jsx("div",{className:"zep-mt-2.5 sm:zep-mt-3 md:zep-mt-4 lg:zep-mt-5 zep-flex zep-flex-col zep-gap-1.5 md:zep-gap-2 zep-mb-[40px] sm:zep-mb-3 md:zep-mb-4 lg:zep-mb-5",children:e==null?void 0:e.slice(l,L).map(A=>n.jsx(v,{article:A}))}),e.length>10&&n.jsx(z,{currentPage:m,totalElements:e.length,setCurrentPage:I,itemsPerPage:10})]})};try{o.displayName="Articles",o.__docgenInfo={description:"",displayName:"Articles",props:{articles:{defaultValue:null,description:"",name:"articles",required:!0,type:{name:"Article[]"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const Q={title:"Patterns/Articles",component:o,tags:["autodocs"],argTypes:{}},i={args:{headline:"Headline",tagline:"Tagline",linkText:"standalone link",linkHref:"https://www.google.com/",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",articles:[{title:"Technische Kompetenz im Food Bereich",image:r,chipText:"CHEMIE | 18.01.2024",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",linkUrl:"https://www.google.com/",linkText:"Zur Publikation"}]}},s={args:{headline:"Headline",tagline:"Tagline",linkText:"standalone link",linkHref:"https://www.google.com/",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",articles:Array.from({length:11},(e,t)=>({title:"Technische Kompetenz im Food Bereich",image:r,chipText:(t+1).toString(),description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",linkUrl:"https://www.google.com/",linkText:"Zur Publikation"}))}},a={args:{headline:"Headline",tagline:"Tagline",linkText:"standalone link",linkHref:"https://www.google.com/",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.",articles:Array.from({length:40},(e,t)=>({title:"Technische Kompetenz im Food Bereich",image:r,chipText:(t+1).toString(),description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",linkUrl:"https://www.google.com/",linkText:"Zur Publikation"}))}};var p,d,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    linkText: 'standalone link',
    linkHref: 'https://www.google.com/',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    articles: [{
      title: 'Technische Kompetenz im Food Bereich',
      image: zeptemp,
      chipText: 'CHEMIE | 18.01.2024',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      linkUrl: 'https://www.google.com/',
      linkText: 'Zur Publikation'
    }]
  } as ArticlesProps
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,g,y;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    linkText: 'standalone link',
    linkHref: 'https://www.google.com/',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    articles: Array.from({
      length: 11
    }, (_, index) => ({
      title: 'Technische Kompetenz im Food Bereich',
      image: zeptemp,
      chipText: (index + 1).toString(),
      // chipText values: "1", "2", ..., "40"
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      linkUrl: 'https://www.google.com/',
      linkText: 'Zur Publikation'
    }))
  } as ArticlesProps
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var h,k,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    headline: 'Headline',
    tagline: 'Tagline',
    linkText: 'standalone link',
    linkHref: 'https://www.google.com/',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis  dis parturient montes, nascetur ridiculus mus.',
    articles: Array.from({
      length: 40
    }, (_, index) => ({
      title: 'Technische Kompetenz im Food Bereich',
      image: zeptemp,
      chipText: (index + 1).toString(),
      // chipText values: "1", "2", ..., "40"
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
      linkUrl: 'https://www.google.com/',
      linkText: 'Zur Publikation'
    }))
  } as ArticlesProps
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const W=["Default","Items11","MultipleItems"];export{i as Default,s as Items11,a as MultipleItems,W as __namedExportsOrder,Q as default};
