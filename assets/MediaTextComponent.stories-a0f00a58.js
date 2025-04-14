import{M as E,v}from"./MediaTextComponent-3075c0bb.js";import{a as e}from"./mocks-dd8b5ca4.js";import"./jsx-runtime-1a9d9a93.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./clsx-0839fdbe.js";import"./ResponsivePlayer-6c3e5e44.js";import"./iframe-458e9b2c.js";import"../sb-preview/runtime.js";import"./index-9d475cdf.js";import"./VideoCookieLayer-ab7c7f63.js";import"./ZsdButton-f8c16446.js";import"./index.es13-751bc762.js";import"./index.es35-79e31a69.js";import"./index.es31-95f1013f.js";import"./index-ff2c9236.js";import"./tw-merge-1166cefb.js";import"./RichText-58942226.js";import"./index.es16-90aad98d.js";import"./getUrlWithTrailingSlash-1f1feb13.js";const k=""+new URL("horz-dda4cc64.png",import.meta.url).href,Z={title:"Components/MediaTextComponent",component:E,tags:["autodocs"],argTypes:{}},t={args:{mediaUrl:k,mediaType:"image",imageOrientation:"horizontal",mediaAlignment:"left",headline:"Example Headline",content:e,alt:"",buttonText:"Read More",contentAlignment:"center",labelPrimary:"aaaa",urlPrimary:"https://zhd-cdn.stage.dx.zndbx.cloud/5_Zeppelin_Geschaeftsbericht_2023_46a77d6df2.pdf"}},a={args:{mediaUrl:v,mediaType:"image",imageOrientation:"vertical",mediaAlignment:"left",headline:"Example Headline",content:e,alt:"",buttonText:"Read More",contentAlignment:"center"}},n={args:{mediaUrl:v,mediaType:"image",imageOrientation:"vertical",mediaAlignment:"right",headline:"Example Headline",content:e,alt:"",buttonText:"Read More"}},i={args:{mediaUrl:"https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4",mediaType:"video",mediaAlignment:"left",contentAlignment:"center",headline:"Example Headline",content:e,alt:"",buttonText:"Read More",videoThumbnail:"https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q="}},r={args:{mediaUrl:"./assets/hero_image.png",mediaType:"image",mediaAlignment:"left",headline:"Example Headline",content:e,alt:"",buttonText:"Read More"}},o={args:{mediaUrl:"./assets/hero_image.png",imageOrientation:"horizontal",mediaType:"image",mediaAlignment:"right",headline:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",content:e,alt:"",buttonText:"Read More"}};var m,s,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    mediaUrl: horizontal,
    mediaType: 'image',
    imageOrientation: 'horizontal',
    mediaAlignment: 'left',
    headline: 'Example Headline',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More',
    contentAlignment: 'center',
    labelPrimary: 'aaaa',
    urlPrimary: 'https://zhd-cdn.stage.dx.zndbx.cloud/5_Zeppelin_Geschaeftsbericht_2023_46a77d6df2.pdf'
  }
}`,...(d=(s=t.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var l,c,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    mediaUrl: vertical,
    mediaType: 'image',
    imageOrientation: 'vertical',
    mediaAlignment: 'left',
    headline: 'Example Headline',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More',
    contentAlignment: 'center'
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var g,h,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    mediaUrl: vertical,
    mediaType: 'image',
    imageOrientation: 'vertical',
    mediaAlignment: 'right',
    headline: 'Example Headline',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More'
  }
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,T,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    mediaUrl: 'https://videos.pexels.com/video-files/20422317/20422317-hd_1920_1080_25fps.mp4',
    mediaType: 'video',
    mediaAlignment: 'left',
    contentAlignment: 'center',
    headline: 'Example Headline',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More',
    videoThumbnail: 'https://media.istockphoto.com/id/2065674519/photo/rolling-says-macro.jpg?s=2048x2048&w=is&k=20&c=FO-u3p_njEoIh7GusFYgrOo1RxF0EXobx0BXH6vMB4Q='
  }
}`,...(f=(T=i.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var y,R,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    mediaUrl: './assets/hero_image.png',
    mediaType: 'image',
    mediaAlignment: 'left',
    headline: 'Example Headline',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More'
  }
}`,...(b=(R=r.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var _,A,M;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    mediaUrl: './assets/hero_image.png',
    imageOrientation: 'horizontal',
    mediaType: 'image',
    mediaAlignment: 'right',
    headline: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    content: mockRichText,
    alt: '',
    buttonText: 'Read More'
  }
}`,...(M=(A=o.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};const q=["Default","WithVerticalImageLeft","WithVerticalImageRight","WithVideo","WithLinks","WithMediaAlignmentRight"];export{t as Default,r as WithLinks,o as WithMediaAlignmentRight,a as WithVerticalImageLeft,n as WithVerticalImageRight,i as WithVideo,q as __namedExportsOrder,Z as default};
