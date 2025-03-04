import{j as e}from"./jsx-runtime-1a9d9a93.js";import{r as u}from"./index-8b3efc3f.js";import{u as T}from"./useContainerDimensions-42dc9502.js";import{y as w,j as L}from"./index.es35-79e31a69.js";import{c as N}from"./index-ff2c9236.js";import{c as l}from"./clsx-0839fdbe.js";import{G as i}from"./global-variants-0e6e1510.js";import"./_commonjsHelpers-de833af9.js";import"./index.es31-95f1013f.js";const C=L("zep-absolute zep-flex-col zep-drop-shadow-md zep-z-[1500]",{variants:{show:{true:"zep-flex sm:zep-hidden sm:group-hover:zep-flex",false:"zep-hidden sm:zep-hidden sm:group-hover:zep-flex"},align:{start:"zep-items-start zep-justify-start",center:"zep-items-center zep-justify-center",end:"zep-items-end zep-justify-end"},position:{top:"zep-bottom-[calc(100%_+_4px)]",right:"zep-left-[calc(100%_+_14px)]",bottom:"zep-top-[calc(100%_+_4px)]",left:"zep-right-[calc(100%_+_14px)]"},color:{light:"zep-bg-greyscale-0 zep-text-typography-dark-100",dark:"zep-bg-greyscale-900 zep-text-typography-light-100",zps:"zep-bg-primary-default zep-text-typography-light-100",cat:"zep-bg-background-dark zep-text-typography-light-100"}},defaultVariants:{align:"center",color:"dark"}}),V=L("zep-flex zep-absolute zep-box-border",{variants:{align:{start:"",center:"",end:""},position:{top:"zep-top-[100%]",right:"zep-right-[calc(100%_-_11px)] zep-rotate-90",bottom:"zep-bottom-[100%] zep-rotate-180",left:"zep-left-[calc(100%_-_11px)] -zep-rotate-90"},color:{light:"zep-text-typography-light-100",dark:"zep-text-typography-dark-100",zps:"zep-text-primary-default",cat:"zep-text-typography-dark-100"}},compoundVariants:[{align:"start",position:["left","right"],className:"zep-bottom-[calc(100%_-_12px)]"},{align:"end",position:["left","right"],className:"zep-top-[calc(100%_-_12px)]"}],defaultVariants:{position:"top",color:"dark"}}),k=()=>e.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",fill:"currentColor"})}),q=()=>e.jsx("svg",{width:"26",height:"5",viewBox:"0 0 26 5",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8 0L12.2929 4.29289C12.6834 4.68342 13.3166 4.68342 13.7071 4.29289L18 0H8Z",fill:"currentColor"})}),S=({className:t,label:p,description:o,position:a,color:s,align:r,onClose:c,show:n})=>e.jsxs("div",{className:w(C({align:r,color:s,position:a,show:n}),t),children:[e.jsx("button",{className:"zep-flex sm:zep-hidden zep-self-end zep-m-0.5",onClick:c,children:e.jsx(k,{})}),e.jsxs("div",{className:"zep-max-w-[300px] zep-px-1 zep-py-0.5 zep-break-words zep-w-max",children:[p&&e.jsx("p",{className:"zep-typography-headlineXS-fluid-cqi zep-mb-1",children:p}),e.jsx("p",{className:"zep-typography-supportText",children:o})]}),e.jsx("div",{className:V({position:a,color:s,align:r}),children:e.jsx(q,{})})]}),A=({children:t,label:p,description:o,className:a,color:s="dark",position:r="top",align:c="center"})=>{const[n,x]=u.useState(!1),I=P=>{P.stopPropagation(),x(!1)};return e.jsxs("div",{className:w("zep-inline-flex zep-relative zep-justify-center zep-items-center zep-group",a),"data-testid":"zep-tooltip",onClick:()=>x(!0),children:[e.jsx(S,{label:p,description:o,color:s,position:r,align:c,show:n,onClose:I,className:a}),t]})},z=({point:t,setActivePoint:p,activePoint:o,width:a})=>{const s={[i.Zps]:[l("zep-shadow-[0_0_0_10px_rgba(39,22,111,1)] md:group-hover:zep-shadow-[0_0_0_5px_rgba(39,22,111,1)] [&>p]:zep-text-primary-default",o===t&&"zep-shadow-[0_0_0_3px_rgba(39,22,111,1)]")]},r=N([l("zep-w-1 zep-h-1 md:zep-w-1.25 md:zep-h-1.25 zep-rounded-full zep-transition-all md:group-hover:zep-w-2 md:group-hover:zep-h-2",o===t?"zep-w-2 zep-h-2 ":"")],{variants:{variant:s},defaultVariants:{variant:i.Zps}});return e.jsxs("div",{onClick:()=>{a&&a<990&&p(t)},style:{left:`${t.x}%`,top:`${t.y}%`},className:"zep-absolute zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full zep-bg-typography-light-100",children:[e.jsx("div",{className:"zep-hidden md:zep-block",children:e.jsx(A,{color:"zps",label:t.label,description:t.description,children:e.jsx("div",{className:"zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full zep-flex zep-justify-center zep-items-center zep-group",children:e.jsx("div",{className:l(r({variant:i.Zps}),"zep-flex zep-justify-center zep-items-center"),children:t.step&&e.jsx("p",{children:t.step})})})})}),e.jsx("div",{className:"md:zep-hidden zep-w-2.5 zep-h-2.5 md:zep-w-3 md:zep-h-3 zep-rounded-full zep-flex zep-justify-center zep-items-center zep-group",children:e.jsx("div",{className:l(r({variant:i.Zps}),"zep-flex zep-justify-center zep-items-center"),children:t.step&&e.jsx("p",{className:"zep-typography-supportText",children:t.step})})})]})},Z=z;try{z.displayName="InfoPoint",z.__docgenInfo={description:"",displayName:"InfoPoint",props:{point:{defaultValue:null,description:"",name:"point",required:!0,type:{name:"Point"}},activePoint:{defaultValue:null,description:"",name:"activePoint",required:!1,type:{name:"Point"}},setActivePoint:{defaultValue:null,description:"",name:"setActivePoint",required:!0,type:{name:"(x: Point) => void"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"number"}}}}}catch{}const g=({point:t,activePoint:p,setActivePoint:o})=>{const a={[i.Zps]:[l("zep-bg-greyscale-200 zep-text-typography-dark-100",p===t&&"zep-shadow-[inset_0_0_0_4px_rgba(39,22,111,1)]")]},s=N(["zep-p-1 zep-min-w-[80%] sm:zep-min-w-[60%] zep-w-full"],{variants:{variant:a},defaultVariants:{variant:i.Zps}});return e.jsxs("div",{id:`${t.x}${t.y}`,onClick:()=>o(t),className:l(s({variant:i.Zps}),"card",p===t&&"active","zep-snap-center"),children:[e.jsx("p",{className:"zep-text-headlineXS-fluid-cqi zep-mb-1 zep-text-start",children:t.label}),e.jsx("p",{className:"zep-typography-bodyText zep-text-start",children:t.description})]})},$=g;try{g.displayName="PointCard",g.__docgenInfo={description:"",displayName:"PointCard",props:{point:{defaultValue:null,description:"",name:"point",required:!0,type:{name:"Point"}},activePoint:{defaultValue:null,description:"",name:"activePoint",required:!1,type:{name:"Point"}},setActivePoint:{defaultValue:null,description:"",name:"setActivePoint",required:!0,type:{name:"(x: Point) => void"}}}}}catch{}const h=({imageUrl:t,imageAlt:p,points:o})=>{const[a,s]=u.useState(),r=u.useRef(null),{width:c}=T(r);return u.useEffect(()=>{const n=document.getElementById(`${a==null?void 0:a.x}${a==null?void 0:a.y}`);n&&n.scrollIntoView({behavior:"smooth",inline:"center"})},[a]),e.jsxs("div",{children:[e.jsxs("div",{"data-testid":"zep-infographic-image",className:"zep-relative",ref:r,children:[e.jsx("img",{src:t,alt:p}),o==null?void 0:o.map(n=>e.jsx(Z,{width:c,point:n,activePoint:a,setActivePoint:s},n.x))]}),e.jsx("div",{className:"zep-flex zep-overflow-x-scroll  md:zep-hidden zep-gap-0.5 zep-py-0.5 ",children:o.map(n=>e.jsx($,{point:n,setActivePoint:s,activePoint:a},n.x))})]})};try{h.displayName="InfographicImage",h.__docgenInfo={description:"",displayName:"InfographicImage",props:{imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"",name:"imageAlt",required:!1,type:{name:"string"}},points:{defaultValue:null,description:"",name:"points",required:!0,type:{name:"Point[]"}}}}}catch{}const H={title:"Components/InfographicImage",component:h,tags:["autodocs"],argTypes:{}},d={decorators:[t=>e.jsx("button",{children:e.jsx(t,{})})],args:{imageUrl:"https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto",imageAlt:"Image alt",points:[{x:20,y:20,description:"Tooltip content",label:"Label"},{x:40,y:30,description:"Tooltip content",label:"Label"},{x:15,y:80,description:"Tooltip content",label:"Label"},{x:85,y:70,description:"Tooltip content",label:"Label"}]}},m={decorators:[t=>e.jsx("button",{children:e.jsx(t,{})})],args:{imageUrl:"https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto",imageAlt:"Image alt",points:[{x:20,y:20,description:"Tooltip content",label:"Label",step:"1"},{x:40,y:30,description:"Tooltip content",label:"Label",step:"2"},{x:15,y:80,description:"Tooltip content",label:"Label",step:"3"},{x:85,y:70,description:"Tooltip content",label:"Label",step:"4"}]}};var f,y,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <button>
        <Story />
      </button>],
  args: {
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
  } as InfographicImageProps
}`,...(b=(y=d.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var _,j,v;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  decorators: [Story => <button>
        <Story />
      </button>],
  args: {
    imageUrl: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-12/22/11/asset/buzzfeed-prod-fastlane-01/sub-buzz-13082-1513961489-5.jpg?output-format=auto&output-quality=auto',
    imageAlt: 'Image alt',
    points: [{
      x: 20,
      y: 20,
      description: 'Tooltip content',
      label: 'Label',
      step: '1'
    }, {
      x: 40,
      y: 30,
      description: 'Tooltip content',
      label: 'Label',
      step: '2'
    }, {
      x: 15,
      y: 80,
      description: 'Tooltip content',
      label: 'Label',
      step: '3'
    }, {
      x: 85,
      y: 70,
      description: 'Tooltip content',
      label: 'Label',
      step: '4'
    }]
  } as InfographicImageProps
}`,...(v=(j=m.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const O=["Default","WithSteps"];export{d as Default,m as WithSteps,O as __namedExportsOrder,H as default};
