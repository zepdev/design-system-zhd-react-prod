import{j as e}from"./jsx-runtime-1a9d9a93.js";import{S as d}from"./index.es4-5d673532.js";import{r as c}from"./index-8b3efc3f.js";import{M as p}from"./ModalComponent-cf741ef3.js";import"./index.es35-79e31a69.js";import"./index.es31-95f1013f.js";import"./index.es13-751bc762.js";import"./ZsdButton-d300a7eb.js";import"./index-ff2c9236.js";import"./clsx-0839fdbe.js";import"./tw-merge-1166cefb.js";import"./_commonjsHelpers-de833af9.js";const I={title:"Components/ModalComponent",component:p,tags:["autodocs"]},u=t=>{const[m,o]=c.useState(!1),l=()=>o(!0),i=()=>{o(!1),t.onClose&&t.onClose()};return e.jsxs(e.Fragment,{children:[e.jsx(d,{onClick:l,children:"Open Modal"}),e.jsx(p,{isOpen:m,label:"Close",onClose:i,children:e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."})})]})},n=u.bind({});n.args={isOpen:!1,onClose:()=>{}};var s,r,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (args.onClose) args.onClose();
  };
  return <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <ModalComponent isOpen={open} label='Close' onClose={handleClose}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </ModalComponent>
    </>;
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const L=["Default"];export{n as Default,L as __namedExportsOrder,I as default};
