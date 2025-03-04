import{j as i}from"./jsx-runtime-1a9d9a93.js";import{c as g}from"./clsx-0839fdbe.js";import{M as V}from"./mediaTextSmall-18a4dedb.js";import{H as E}from"./HeaderLongComponent-899472c1.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es18-4b39ea0e.js";import"./index.es31-95f1013f.js";import"./index.es16-fea76d43.js";import"./index.es13-3580608c.js";import"./ZsdButton-850a5174.js";import"./index.es24-01fa0cce.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./ZsdLink-8a57babc.js";const d=({items:n,headline:p,...Z})=>{const s=n.length>12?n.slice(0,12):n;return i.jsx("div",{"data-testid":"media-text-pattern",className:g("zep-flex","zep-flex-col","md:zep-gap-4","sm:zep-gap-3","zep-gap-2.5"),children:i.jsxs("div",{className:"",children:[i.jsx("div",{"data-testid":"media-text-small-pattern-headline",className:"zep-mb-2.5 sm:zep-mb-3 md:zep-mb-4 xl:zep-mb-5 zep-max-w-[952px]",children:p&&i.jsx(E,{headline:p,...Z})}),i.jsx("div",{"data-testid":"media-text-small-pattern-items",className:g("zep-grid","zep-gap-1","md:zep-gap-1.5","xl:zep-gap-2",{"xl:zep-grid-cols-3":[2,3,6,9].includes(s.length),"xl:zep-grid-cols-4":[4,5,7,8,10,11,12].includes(s.length),"md:zep-grid-cols-2":[0,1,2,4].includes(s.length),"md:zep-grid-cols-3":[3,5,6,7,8,9,10,11,12].includes(s.length),"sm:zep-grid-cols-2":!0}),children:n.map((W,O)=>i.jsx(V,{...W},O))})]})})};try{d.displayName="MediaTextSmallPattern",d.__docgenInfo={description:"",displayName:"MediaTextSmallPattern",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MediaTextSmallProps[]"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"link"'},{value:'"primary-button"'},{value:'"secondary-button"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}}}}}catch{}const re={title:"Patterns/MediaTextSmallPattern",component:d,tags:["autodocs"],argTypes:{items:{control:{type:"array"}}}},e=["Lorem Ipsum dolor sit amet","Lorem Ipsum dolor sit amet","Lorem Ipsum dolor sit amet","Lorem Ipsum dolor sit amet","Lorem Ipsum dolor sit amet"],t={args:{items:new Array(2).fill({headline:"Headline",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",orderedLists:e}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec"}},a={args:{items:new Array(2).fill({headline:"Headline ",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",orderedLists:e}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec"}},r={args:{items:new Array(3).fill({headline:"Headline",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",orderedLists:e}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec"}},o={args:{items:new Array(4).fill({headline:"Headline",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",orderedLists:e}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec"}},l={args:{items:new Array(5).fill({headline:"Headline",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",orderedLists:e}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec"}},m={args:{items:new Array(6).fill({headline:"Headline",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",orderedLists:e}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec"}},u={args:{items:new Array(7).fill({headline:"Headline",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",orderedLists:e}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec"}},c={args:{items:new Array(8).fill({headline:"Headline",imageSrc:"https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg",imageAlt:"worker img",description:"This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",orderedLists:e}),headline:"Lösungen für Marine",tagline:"Zeppelin Power Systems",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec"}};var h,q,w;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline',
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec'
  } as MediaTextSmallPatternProps
}`,...(w=(q=t.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var f,S,L;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: new Array(2).fill({
      headline: 'Headline ',
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec'
  } as MediaTextSmallPatternProps
}`,...(L=(S=a.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var A,b,v;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: new Array(3).fill({
      headline: 'Headline',
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec'
  } as MediaTextSmallPatternProps
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var j,x,y;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: new Array(4).fill({
      headline: 'Headline',
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec'
  } as MediaTextSmallPatternProps
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var z,_,P;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: new Array(5).fill({
      headline: 'Headline',
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec'
  } as MediaTextSmallPatternProps
}`,...(P=(_=l.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var T,D,M;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: new Array(6).fill({
      headline: 'Headline',
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec'
  } as MediaTextSmallPatternProps
}`,...(M=(D=m.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var k,C,I;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: new Array(7).fill({
      headline: 'Headline',
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec'
  } as MediaTextSmallPatternProps
}`,...(I=(C=u.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var H,N,F;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: new Array(8).fill({
      headline: 'Headline',
      imageSrc: 'https://www.zeppelin-cat.de/content/dam/zeppelin/baumaschinen/service/header_teaser/Service_Schrauben.jpg.imagethumb.original.jpg',
      imageAlt: 'worker img',
      description: 'This is the description,Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
      orderedLists: mockOrderedListItem
    }),
    headline: 'Lösungen für Marine',
    tagline: 'Zeppelin Power Systems',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec'
  } as MediaTextSmallPatternProps
}`,...(F=(N=c.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};const oe=["Default","WithHeadline","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items"];export{t as Default,r as With3Items,o as With4Items,l as With5Items,m as With6Items,u as With7Items,c as With8Items,a as WithHeadline,oe as __namedExportsOrder,re as default};
