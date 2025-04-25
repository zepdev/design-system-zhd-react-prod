import{j as a}from"./jsx-runtime-1a9d9a93.js";import{H as E}from"./HeaderLongComponent-0551974b.js";import{S as H}from"./Scrollbar-bd0f93ab.js";import{A as D}from"./AnchorNavigationCard-51b04c8d.js";import{L as M}from"./Layout-fc6ef0e0.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./index.es16-0479d967.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./index.es17-40e95622.js";import"./clsx-0839fdbe.js";import"./RichText-a41fbc71.js";import"./getUrlWithTrailingSlash-1f1feb13.js";import"./ZsdButton-cf61637d.js";import"./index.es35-79e31a69.js";import"./index-ff2c9236.js";import"./getDataLayer-1420585a.js";import"./tw-merge-1166cefb.js";const c=({navigationCards:e,className:_="",headline:v,...j})=>a.jsxs(M,{className:"zep-flex zep-flex-col zep-gap-2.5 sm:zep-gap-3 md:zep-gap-4",children:[v&&a.jsx(E,{headline:v,...j}),a.jsx(H,{scrollOrientation:"horizontal",dataTestId:"zep-anchor-navigation-list",controlId:"anchor-navigation-scrollbar",className:`zep-flex zep-gap-1 md:zep-gap-1.5 lg:zep-gap-2 zep-w-full zep-border-b-1 zep-border-greyscale-400 zep-p-0.75 ${_}`,children:e==null?void 0:e.map(d=>a.jsx(D,{...d},d.linkLabel))})]});try{c.displayName="AnchorNavigationList",c.__docgenInfo={description:"",displayName:"AnchorNavigationList",props:{navigationCards:{defaultValue:null,description:"",name:"navigationCards",required:!0,type:{name:'Omit<AnchorNavigationCardProps, "variant">[]'}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},headline:{defaultValue:null,description:"",name:"headline",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"BlocksContent"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"none"'},{value:'"primary-dark"'},{value:'"secondary-dark"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((ev: MouseEvent<HTMLElement, MouseEvent>) => void)"}},tagline:{defaultValue:null,description:"",name:"tagline",required:!1,type:{name:"string"}},linkText:{defaultValue:null,description:"",name:"linkText",required:!1,type:{name:"string"}},linkHref:{defaultValue:null,description:"",name:"linkHref",required:!1,type:{name:"string"}},headerButtonIcon:{defaultValue:null,description:"",name:"headerButtonIcon",required:!1,type:{name:"enum",value:[{value:'"arrow-up"'},{value:'"arrow-down"'},{value:'"arrow-left"'},{value:'"arrow-right"'},{value:'"caret-up"'},{value:'"caret-down"'},{value:'"caret-left"'},{value:'"caret-right"'},{value:'"chevron-double-up"'},{value:'"chevron-double-down"'},{value:'"chevron-up"'},{value:'"chevron-down"'},{value:'"chevron-left"'},{value:'"chevron-right"'},{value:'"chevron-mini-up"'},{value:'"chevron-mini-down"'},{value:'"chevron-mini-left"'},{value:'"chevron-mini-right"'},{value:'"arrow-corner-right-up"'},{value:'"arrow-corner-right-down"'},{value:'"arrow-corner-left-up"'},{value:'"arrow-corner-left-down"'},{value:'"arrow-long-up"'},{value:'"arrow-long-down"'},{value:'"arrow-long-left"'},{value:'"arrow-long-right"'},{value:'"unfold-less"'},{value:'"unfold-more"'},{value:'"pause"'},{value:'"stop"'},{value:'"microphone-filled"'},{value:'"volume-up-filled"'},{value:'"volume-off-filled"'},{value:'"volume-down-filled"'},{value:'"volume-up"'},{value:'"volume-off"'},{value:'"volume-down"'},{value:'"microphone"'},{value:'"play"'},{value:'"email"'},{value:'"speech-bubble"'},{value:'"phone"'},{value:'"laptop"'},{value:'"screen"'},{value:'"smartphone"'},{value:'"tablet"'},{value:'"sort-alpha"'},{value:'"sort"'},{value:'"logout"'},{value:'"login"'},{value:'"password"'},{value:'"show"'},{value:'"hide"'},{value:'"unlock"'},{value:'"lock"'},{value:'"check-circle"'},{value:'"check-circle-filled"'},{value:'"menu-horizontal"'},{value:'"menu-vertical"'},{value:'"menu-burger"'},{value:'"alarm-off-filled"'},{value:'"alarm-off"'},{value:'"alarm-filled"'},{value:'"alarm"'},{value:'"expand2"'},{value:'"shrink"'},{value:'"shrink2"'},{value:'"expand"'},{value:'"graph-descend"'},{value:'"file"'},{value:'"graph-ascend"'},{value:'"dashboard"'},{value:'"language"'},{value:'"location"'},{value:'"list"'},{value:'"pin"'},{value:'"location-pin"'},{value:'"user-single-circle"'},{value:'"user-single"'},{value:'"calendar-information"'},{value:'"calendar-clock"'},{value:'"external-link"'},{value:'"download"'},{value:'"loader"'},{value:'"upload"'},{value:'"table"'},{value:'"check"'},{value:'"shopping-cart"'},{value:'"close"'},{value:'"heart-filled"'},{value:'"star-filled"'},{value:'"star"'},{value:'"heart"'},{value:'"add-circle-filled"'},{value:'"delete-circle-filled"'},{value:'"alert-circle-filled"'},{value:'"warning-triangle-filled"'},{value:'"info-circle-filled"'},{value:'"help-circle-filled"'},{value:'"link"'},{value:'"link-off"'},{value:'"wifi"'},{value:'"trash"'},{value:'"edit"'},{value:'"calendar-month"'},{value:'"calendar-today"'},{value:'"time"'},{value:'"copy"'},{value:'"sync"'},{value:'"print"'},{value:'"zoom-out"'},{value:'"zoom-in"'},{value:'"search"'},{value:'"delete-circle"'},{value:'"alert"'},{value:'"warning-triangle"'},{value:'"info-circle"'},{value:'"help-circle"'},{value:'"tune"'},{value:'"wrench"'},{value:'"settings"'},{value:'"settings-filled"'},{value:'"home"'},{value:'"share"'},{value:'"share-2"'},{value:'"add"'},{value:'"minus"'},{value:'"marine-ship"'},{value:'"add-circle"'}]}},headerButtonIconPosition:{defaultValue:null,description:"",name:"headerButtonIconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"none"'}]}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"enum",value:[{value:'"_self"'},{value:'"_blank"'}]}}}}}catch{}const se={title:"Patterns/AnchorNavigationList",component:c,tags:["autodocs"],argTypes:{navigationCards:{control:{type:"array"}}}},l={args:{navigationCards:[{linkLabel:"Training",scrollToIdLink:"test"}]}},r={args:{navigationCards:new Array(2).fill({linkLabel:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test"})}},n={args:{navigationCards:new Array(3).fill({linkLabel:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test"})}},o={args:{navigationCards:new Array(4).fill({linkLabel:"Training",scrollToIdLink:"test"})}},i={args:{navigationCards:new Array(5).fill({linkLabel:"Dual Study Program",scrollToIdLink:"test"})}},t={args:{navigationCards:new Array(6).fill({linkLabel:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test"})}},s={args:{navigationCards:new Array(7).fill({linkLabel:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test"})}},u={args:{navigationCards:new Array(8).fill({linkLabel:"Gasmotoren Baureihe CG132 B (400 - 1.000 kW)",scrollToIdLink:"test"})}};var p,m,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    navigationCards: [{
      linkLabel: 'Training',
      scrollToIdLink: 'test'
    }]
  } as AnchorNavigationListProps
}`,...(g=(m=l.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,f,k;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(2).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(k=(f=r.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var L,y,w;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(3).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var I,b,C;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(4).fill({
      linkLabel: 'Training',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(C=(b=o.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var A,B,T;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(5).fill({
      linkLabel: 'Dual Study Program',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(T=(B=i.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var W,G,N;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(6).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(N=(G=t.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var z,x,P;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(7).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(P=(x=s.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var q,S,V;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    navigationCards: new Array(8).fill({
      linkLabel: 'Gasmotoren Baureihe CG132 B (400 - 1.000 kW)',
      scrollToIdLink: 'test'
    })
  } as AnchorNavigationListProps
}`,...(V=(S=u.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};const ue=["Default","With2Items","With3Items","With4Items","With5Items","With6Items","With7Items","With8Items"];export{l as Default,r as With2Items,n as With3Items,o as With4Items,i as With5Items,t as With6Items,s as With7Items,u as With8Items,ue as __namedExportsOrder,se as default};
