(this["webpackJsonpekseer-dashboard"]=this["webpackJsonpekseer-dashboard"]||[]).push([[15],{382:function(t,e,n){"use strict";var a=n(3),i=n(4),c=n(2),s=n(0),r=n(8),o=n(144),l=n(222),d=n(9),j=n(173),u=n(84),h=n(6),b=n(167),m=n(223);function O(t){return Object(b.a)("MuiInputAdornment",t)}var x=Object(m.a)("MuiInputAdornment",["root","filled","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),p=n(11),f=n(1),v=Object(h.a)("div",{},{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(t,e){var n=t.styleProps;return Object(o.a)(Object(c.a)({},e["position".concat(Object(d.a)(n.position))],!0===n.disablePointerEvents&&e.disablePointerEvents,"filled"===n.variant&&e.filled),e.root||{})}})((function(t){var e=t.theme,n=t.styleProps;return Object(c.a)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:e.palette.action.active},"filled"===n.variant&&Object(a.a)({},"&.".concat(x.positionStart,"&:not(.").concat(x.hiddenLabel,")"),{marginTop:16}),"start"===n.position&&{marginRight:8},"end"===n.position&&{marginLeft:8},!0===n.disablePointerEvents&&{pointerEvents:"none"})})),g=s.forwardRef((function(t,e){var n=Object(p.a)({props:t,name:"MuiInputAdornment"}),a=n.children,o=n.className,h=n.component,b=void 0===h?"div":h,m=n.disablePointerEvents,x=void 0!==m&&m,g=n.disableTypography,y=void 0!==g&&g,_=n.position,N=n.variant,C=Object(i.a)(n,["children","className","component","disablePointerEvents","disableTypography","position","variant"]),S=Object(u.b)()||{},w=N;N&&S.variant,S&&!w&&(w=S.variant);var A=Object(c.a)({},n,{hiddenLabel:S.hiddenLabel,size:S.size,disablePointerEvents:x,position:_,variant:w}),P=function(t){var e=t.classes,n=t.disablePointerEvents,a=t.hiddenLabel,i=t.position,c=t.size,s=t.variant,r={root:["root",n&&"disablePointerEvents",i&&"position".concat(Object(d.a)(i)),s,a&&"hiddenLabel",c&&"size".concat(Object(d.a)(c))]};return Object(l.a)(r,O,e)}(A);return Object(f.jsx)(u.a.Provider,{value:null,children:Object(f.jsx)(v,Object(c.a)({as:b,styleProps:A,className:Object(r.a)(P.root,o),ref:e},C,{children:"string"!==typeof a||y?Object(f.jsxs)(s.Fragment,{children:["start"===_?Object(f.jsx)("span",{className:"notranslate",dangerouslySetInnerHTML:{__html:"&#8203;"}}):null,a]}):Object(f.jsx)(j.a,{color:"text.secondary",children:a})}))})}));e.a=g},423:function(t,e,n){"use strict";var a=n(14),i=n(146),c=n(337),s=n.n(c),r=n(0),o=n(338),l=n(1),d=r.forwardRef((function(t,e){var n=t.bsPrefix,c=t.fluid,r=void 0!==c&&c,d=t.as,j=void 0===d?"div":d,u=t.className,h=Object(i.a)(t,["bsPrefix","fluid","as","className"]),b=Object(o.c)(n,"container"),m="string"===typeof r?"-".concat(r):"-fluid";return Object(l.jsx)(j,Object(a.a)(Object(a.a)({ref:e},h),{},{className:s()(u,r?"".concat(b).concat(m):b)}))}));d.displayName="Container",e.a=d},561:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return M}));var a=n(82),i=n.n(a),c=n(107),s=n(13),r=n(0),o=n.n(r),l=n(240),d=n(311),j=n(234),u=n(174),h=n(314),b=n(382),m=n(235),O=n(56),x=n(414),p=n(418),f=n(417),v=n(413),g=n(415),y=n(416),_=n(325),N=n(17),C=n(298),S=n(423),w=n(236),A=n(173),P=n(128),I=n(301),E=n(1),k=function(t){var e="https://backend-test.alsahaba.sa/api",n=Object(r.useState)([]),a=Object(s.a)(n,2),o=a[0],l=a[1],u=Object(r.useState)([]),h=Object(s.a)(u,2),b=h[0],m=h[1],x=Object(r.useState)([]),p=Object(s.a)(x,2),f=p[0],v=p[1],g=function(){var t=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("".concat(e,"/consultations/")).then((function(t){l(t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("".concat(e,"/calls/")).then((function(t){m(t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("".concat(e,"/users/")).then((function(t){v(t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),S=function(t){var e=new Date(t).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).split(" "),n=Object(s.a)(e,5),a=n[0],i=n[1],c=n[2],r=n[3],o=n[4],l=a.toUpperCase();return"".concat(i," ").concat(l," ").concat(c," ").concat(r," ").concat(o)};return Object(r.useEffect)((function(){g(),y(),N()}),[]),Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(I.a,{open:null===t||void 0===t?void 0:t.showModal,onClose:null===t||void 0===t?void 0:t.handleCloseConsultation,"aria-labelledby":"total-income-pattern-modal-title","aria-describedby":"total-income-pattern-modal-description",children:Object(E.jsx)(d.a,{container:!0,spacing:O.b,children:Object(E.jsx)(d.a,{item:!0,xs:12,children:Object(E.jsx)(j.a,{className:"popup-container",children:Object(E.jsxs)(w.a,{className:"popup-body",style:{top:"250px",overflowY:"auto",height:"75vh"},children:[Object(E.jsx)(_.a,{id:"closeBtn",onClick:null===t||void 0===t?void 0:t.handleCloseConsultation,children:"X"}),Object(E.jsx)(d.a,{container:!0,spacing:O.b,children:Object(E.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(E.jsxs)(E.Fragment,{children:["consultation_created"===(null===t||void 0===t?void 0:t.payment_status)&&o&&(null===o||void 0===o?void 0:o.filter((function(e){return e.id===(null===t||void 0===t?void 0:t.consultation)})).map((function(t,e){var n=f.find((function(e){return e.id===t.patient_id})),a=f.find((function(e){return e.id===t.doctor_id}));return Object(E.jsxs)(P.a,{title:"Consultation",children:[Object(E.jsxs)("div",{className:"mt-4 mb-4",children:[Object(E.jsx)("h5",{children:"Patient's Name:"}),Object(E.jsx)("strong",{children:n?n.full_name:"N/A"})," ",Object(E.jsxs)("strong",{children:["ID/Iqama ",n?n.iqama_number:"N/A"]})]}),Object(E.jsxs)("div",{className:"mt-4 mb-4",children:[Object(E.jsx)("h5",{children:"Doctor's Name:"}),Object(E.jsx)("strong",{children:a?a.full_name:"N/A"})," ",Object(E.jsxs)("strong",{children:["ID/Iqama ",a?a.iqama_number:"N/A"]})]}),Object(E.jsxs)("div",{className:"mt-4",children:[Object(E.jsx)("h5",{children:"Chief Complaint:"}),Object(E.jsx)("strong",{children:t.chief_complaint})]}),Object(E.jsxs)("div",{className:"mt-4",children:[Object(E.jsx)("h5",{children:"History of Illness:"}),Object(E.jsx)("strong",{children:t.history_of_illness})]}),Object(E.jsxs)("div",{className:"mt-4",children:[Object(E.jsx)("h5",{children:"Review of systems:"}),Object(E.jsx)("strong",{children:t.review_of_systems})]}),Object(E.jsxs)("div",{className:"mt-4",children:[Object(E.jsx)("h5",{children:"Examinations:"}),Object(E.jsx)("strong",{children:t.examination})]}),Object(E.jsxs)("div",{className:"mt-4",children:[Object(E.jsx)("h5",{children:"Assessments/Plans:"}),Object(E.jsx)("strong",{children:t.assessment})]}),Object(E.jsxs)("div",{className:"mt-4",children:[Object(E.jsx)("h5",{children:"Medication:"}),Object(E.jsx)("strong",{children:t.medication})]}),Object(E.jsxs)("div",{className:"mt-4",children:[Object(E.jsx)("h5",{children:"Order labs / Home Medication / Image / Others::"}),Object(E.jsx)("strong",{children:t.order_labs?t.order_labs:"none"})]}),Object(E.jsxs)("div",{className:"mt-4",children:[Object(E.jsx)("h5",{children:"Order labs / Home Medication / Image / Others: uploads:"}),Object(E.jsx)("strong",{children:t.upload_order_labs?Object(E.jsx)("a",{href:t.upload_order_labs,children:"View"}):"none"})]}),Object(E.jsxs)("div",{className:"mt-4",children:[Object(E.jsx)("h5",{children:"Sick leave:"}),Object(E.jsx)("strong",{children:t.sick_leave})]}),Object(E.jsxs)("div",{className:"mt-4 mb-4",children:[Object(E.jsx)("h5",{children:"Created At:"}),Object(E.jsx)("strong",{children:S(t.created_at)})]})]},t.id)}))),"doctor_joined"===(null===t||void 0===t?void 0:t.payment_status)&&b&&(null===b||void 0===b?void 0:b.filter((function(e){return e.payment_id===(null===t||void 0===t?void 0:t.payment_id)})).map((function(t,e){var n=f.find((function(e){return e.id===t.patient_id})),a=f.find((function(e){return e.id===t.doctor_id}));return Object(E.jsxs)(P.a,{title:"Consultation",children:[Object(E.jsxs)("div",{className:"mt-4 mb-4",children:[Object(E.jsx)("h5",{children:"Patient's Name:"}),Object(E.jsx)("strong",{children:n?n.full_name:"N/A"})," ",Object(E.jsxs)("strong",{children:["ID/Iqama ",n?n.iqama_number:"N/A"]})]}),Object(E.jsxs)("div",{className:"mt-4 mb-4",children:[Object(E.jsx)("h5",{children:"Doctor's Name:"}),Object(E.jsx)("strong",{children:a?a.full_name:"N/A"})," ",Object(E.jsxs)("strong",{children:["ID/Iqama ",a?a.iqama_number:"N/A"]})]})]},t.id)}))),"call_initiated"===(null===t||void 0===t?void 0:t.payment_status)&&b&&(null===b||void 0===b?void 0:b.filter((function(e){return e.payment_id===(null===t||void 0===t?void 0:t.payment_id)})).map((function(t,e){var n=f.find((function(e){return e.id===t.patient_id}));return Object(E.jsx)(P.a,{title:"Consultation",children:Object(E.jsxs)("div",{className:"mt-4 mb-4",children:[Object(E.jsx)("h5",{children:"Patient's Name:"}),Object(E.jsx)("strong",{children:n?n.full_name:"N/A"})," ",Object(E.jsxs)("strong",{children:["ID/Iqama ",n?n.iqama_number:"N/A"]})]})},t.id)})))]})})})]})})})})})})},D=function(t){var e,n=o.a.useState(!1),a=Object(s.a)(n,2),i=a[0],c=a[1],l=o.a.useState(!1),h=Object(s.a)(l,2),b=h[0],x=h[1],p=Object(r.useState)([]),f=Object(s.a)(p,2),v=f[0],g=f[1],y=function(t){c(!1),g(t),c(!0),x(!0)};return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(S.a,{children:[i&&Object(E.jsx)(k,{consultation:v,payment_status:t.payment.payment_status,payment_id:t.payment.id,showModal:b,handleCloseConsultation:function(){x(!1)}}),Object(E.jsx)(d.a,{container:!0,spacing:O.b,children:Object(E.jsx)(d.a,{item:!0,xs:12,children:Object(E.jsxs)(j.a,{className:"popup-container",children:[Object(E.jsx)(u.a,{title:"Payment Info"}),Object(E.jsx)(m.a,{}),Object(E.jsxs)(w.a,{className:"popup-body",id:"popupCustom",children:[Object(E.jsx)(_.a,{id:"closeBtn",onClick:function(){return t.handleClose()},children:"X"}),Object(E.jsx)(d.a,{container:!0,spacing:O.b,children:Object(E.jsx)(d.a,{item:!0,xs:12,sm:6,children:Object(E.jsx)(P.a,{title:t.payment.order_id,children:Object(E.jsx)(d.a,{container:!0,direction:"column",id:"poppins",spacing:1,children:Object(E.jsxs)(d.a,{item:!0,children:[Object(E.jsxs)(A.a,{variant:"h3",gutterBottom:!0,children:["Order ID: \xa0",Object(E.jsx)("span",{id:"small-text",children:t.payment.order_id})]}),Object(E.jsxs)(A.a,{variant:"h3",gutterBottom:!0,children:["Creation Time: \xa0",Object(E.jsx)("span",{id:"small-text",children:function(t){var e=new Date(t).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).split(" "),n=Object(s.a)(e,5),a=n[0],i=n[1],c=n[2],r=n[3],o=n[4],l=a.toUpperCase();return"".concat(i," ").concat(l," ").concat(c," ").concat(r," ").concat(o)}(t.payment.creation_time)})]}),Object(E.jsxs)(A.a,{variant:"h3",gutterBottom:!0,children:["Message: \xa0",Object(E.jsx)("span",{id:"small-text",children:t.payment.message})]}),Object(E.jsxs)(A.a,{variant:"h3",gutterBottom:!0,children:["Status: \xa0",Object(E.jsx)("span",{id:"small-text",children:t.payment.status})]}),Object(E.jsxs)(A.a,{variant:"h3",gutterBottom:!0,children:["Total Authorized Amount: \xa0",Object(E.jsx)("span",{id:"small-text",children:t.payment.total_authorized_amount})]}),Object(E.jsxs)(A.a,{variant:"h3",gutterBottom:!0,children:["Total Cuthorized Amount: \xa0",Object(E.jsx)("span",{id:"small-text",children:t.payment.total_captured_amount})]}),Object(E.jsxs)(A.a,{variant:"h3",gutterBottom:!0,children:["Payment Info: \xa0",Object(E.jsx)("span",{id:"small-text",children:t.payment.payment_info})]}),Object(E.jsxs)(A.a,{variant:"h3",gutterBottom:!0,children:["Payment Mechanism: \xa0",Object(E.jsx)("span",{id:"small-text",children:t.payment.payment_mechanism})]}),Object(E.jsxs)(A.a,{variant:"h3",gutterBottom:!0,children:["Brand: \xa0",Object(E.jsx)("span",{id:"small-text",children:t.payment.brand})]}),Object(E.jsxs)(A.a,{variant:"h3",gutterBottom:!0,children:["Scheme: \xa0",Object(E.jsx)("span",{id:"small-text",children:t.payment.scheme})]}),Object(E.jsxs)(A.a,{variant:"h3",gutterBottom:!0,children:["Expiry Month: \xa0",Object(E.jsx)("span",{id:"small-text",children:t.payment.expiry_month})]}),Object(E.jsxs)(A.a,{variant:"h3",gutterBottom:!0,children:["Expiry Month: \xa0",Object(E.jsx)("span",{id:"small-text",children:t.payment.expiry_year})]}),Object(E.jsxs)(A.a,{variant:"h3",gutterBottom:!0,children:["Consultation Status: \xa0",Object(E.jsx)("span",{id:"small-text",children:t.payment.payment_status})]}),(null===t||void 0===t||null===(e=t.payment)||void 0===e?void 0:e.call_id)&&Object(E.jsx)(_.a,{variant:"contained",color:"primary",onClick:function(){return y(null===t||void 0===t?void 0:t.payment.call_id)},disableElevation:!0,type:"submit",children:"Show Consultation"})]})})})})})]})]})})})]})})},B=Object(l.a)({table:{minWidth:350},searchControl:{width:"100%",paddingRight:"8px",paddingLeft:"16px",marginBottom:"16px",marginTop:"16px"}});function M(){var t=B(),e="https://backend-test.alsahaba.sa/api",n=o.a.useState([]),a=Object(s.a)(n,2),l=a[0],S=a[1],w=o.a.useState(""),A=Object(s.a)(w,2),P=A[0],I=A[1],k=Object(r.useState)(1),M=Object(s.a)(k,2),T=M[0],L=M[1],q=o.a.useState([]),z=Object(s.a)(q,2),R=z[0],U=z[1],F=Object(r.useState)(""),H=Object(s.a)(F,2),J=H[0],V=H[1],W=o.a.useState(!1),X=Object(s.a)(W,2),Y=X[0],G=X[1],K=function(){var t=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("".concat(e,"/payments")).then((function(t){S(t.data)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Q=function(){var t=Object(c.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("".concat(e,"/payment-search?query=").concat(P)).then((function(t){S(t.data),L(1)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Z=function(t){var e=new Date(t).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).split(" "),n=Object(s.a)(e,5),a=n[0],i=n[1],c=n[2],r=n[3],o=n[4],l=a.toUpperCase();return"".concat(i," ").concat(l," ").concat(c," ").concat(r," ").concat(o)};Object(r.useEffect)((function(){K()}),[]);var $=10*(T-1),tt=$+10,et=l.filter((function(t){return"CAPTURED"===J?"CAPTURED"===t.status||"SUCCESS"===t.status:!J||t.status===J})).slice($,tt),nt=10*T>=l.length;return Object(E.jsxs)(o.a.Fragment,{children:[Y&&Object(E.jsx)(D,{payment:R,handleClose:function(){G(!1)}}),Object(E.jsx)(d.a,{container:!0,spacing:O.b,children:Object(E.jsx)(d.a,{item:!0,xs:12,children:Object(E.jsxs)(j.a,{children:[Object(E.jsxs)(d.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(E.jsx)(d.a,{item:!0,children:Object(E.jsx)(u.a,{title:"All Payments"})}),Object(E.jsx)(d.a,{item:!0,children:Object(E.jsxs)("select",{value:J,className:t.searchControl,onChange:function(t){return V(t.target.value)},style:{height:"40px"},children:[Object(E.jsx)("option",{value:"",children:"All Status"}),Object(E.jsx)("option",{value:"CAPTURED",children:"Success"}),Object(E.jsx)("option",{value:"FAILED",children:"Failed"})]})}),Object(E.jsx)(d.a,{item:!0,style:{marginRight:"25px"},children:Object(E.jsx)(h.a,{className:t.searchControl,id:"input-search-profile",value:P,onChange:function(t){""===t.target.value?(I(t.target.value),K()):(I(t.target.value),Q())},placeholder:"Order ID",startAdornment:Object(E.jsx)(b.a,{position:"start",children:Object(E.jsx)(N.V,{stroke:1.5,size:"1.3rem",className:t.startAdornment})}),"aria-describedby":"search-helper-text",inputProps:{"aria-label":"weight"},labelWidth:0})})]}),Object(E.jsx)(m.a,{}),Object(E.jsx)(v.a,{children:Object(E.jsxs)(x.a,{className:t.table,"aria-label":"simple table",children:[Object(E.jsx)(g.a,{children:Object(E.jsxs)(y.a,{children:[Object(E.jsx)(f.a,{children:"#"}),Object(E.jsx)(f.a,{children:"Order ID"}),Object(E.jsx)(f.a,{align:"left",children:"Creation Time"}),Object(E.jsx)(f.a,{align:"left",children:"Message"}),Object(E.jsx)(f.a,{align:"left",children:"Status"}),Object(E.jsx)(f.a,{align:"left",children:"Total Authorized Amount"}),Object(E.jsx)(f.a,{align:"left",children:"Total Captured Amount"}),Object(E.jsx)(f.a,{align:"left",children:"Payment Info"}),Object(E.jsx)(f.a,{align:"left",children:"Consultation Status"})]})}),Object(E.jsx)(p.a,{children:et.map((function(t,e){return Object(E.jsxs)(y.a,{onClick:function(){return function(t){G(!0),U(t)}(t)},children:[Object(E.jsx)(f.a,{align:"left",children:e+1}),Object(E.jsx)(f.a,{component:"th",children:t.order_id}),Object(E.jsx)(f.a,{align:"left",children:Z(t.creation_time)}),Object(E.jsx)(f.a,{align:"left",children:t.message}),Object(E.jsx)(f.a,{align:"left",children:t.status}),Object(E.jsx)(f.a,{align:"left",children:t.total_authorized_amount}),Object(E.jsx)(f.a,{align:"left",children:t.total_captured_amount}),Object(E.jsx)(f.a,{align:"left",children:Object(E.jsxs)("div",{children:[t.payment_mechanism,": "," ",t.payment_info," ",t.expiry_month,"/",t.expiry_year]})}),Object(E.jsx)(f.a,{align:"left",children:t.payment_status?t.payment_status:"none"})]},t.id)}))})]})}),Object(E.jsxs)(d.a,{container:!0,justifyContent:"center",children:[" ",T>1&&Object(E.jsx)(_.a,{onClick:function(){L((function(t){return Math.max(t-1,1)}))},variant:"outlined",children:"Show Previous Page"}),!nt&&Object(E.jsx)(_.a,{onClick:function(){L((function(t){return t+1}))},variant:"outlined",children:"Show More"})]})]})})})]})}}}]);
//# sourceMappingURL=15.2a9286c1.chunk.js.map