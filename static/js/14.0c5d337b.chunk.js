(this["webpackJsonpekseer-dashboard"]=this["webpackJsonpekseer-dashboard"]||[]).push([[14],{365:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(82),c=n.n(a),i=n(107),r=n(13),s=n(0),o=n(311),l=n(234),d=n(174),j=n(235),u=n(236),b=n(325),h=n(56),O=n(423),p=n(128),x=n(298),m=n(1),f=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=(n[0],n[1],function(){var t=Object(i.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(x.a)({method:"DELETE",url:"".concat("https://backend-test.alsahaba.sa/api","/user/").concat(null===e||void 0===e?void 0:e.patient.id,"/delete")}).then((function(e){window.location.reload()})).catch((function(e){alert("An error occured!")}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}());return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(O.a,{children:Object(m.jsx)(o.a,{container:!0,spacing:h.b,children:Object(m.jsx)(o.a,{item:!0,xs:12,children:Object(m.jsxs)(l.a,{className:"popup-container",children:[Object(m.jsx)(d.a,{title:"Consultation"}),Object(m.jsx)(j.a,{}),Object(m.jsxs)(u.a,{className:"popup-body",style:{top:"250px",overflowY:"auto",height:"75vh"},children:[Object(m.jsx)(b.a,{id:"closeBtn",onClick:null===e||void 0===e?void 0:e.handleClose,children:"X"}),Object(m.jsx)(o.a,{container:!0,spacing:h.b,children:Object(m.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(m.jsxs)(p.a,{title:null===e||void 0===e?void 0:e.patient.full_name,children:[Object(m.jsxs)("h2",{children:["Are you sure you want to delete this ",(null===e||void 0===e?void 0:e.patient.is_doctor)?"doctor?":"patient?"]}),Object(m.jsx)(b.a,{style:{color:"red"},onClick:a,children:"Yes"}),Object(m.jsx)(b.a,{style:{color:"green"},onClick:null===e||void 0===e?void 0:e.handleClose,children:"No"})]})})})]})]})})})})})}},383:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(82),c=n.n(a),i=n(107),r=n(13),s=n(0),o=n(311),l=n(234),d=n(174),j=n(235),u=n(236),b=n(325),h=n(56),O=n(423),p=n(557),x=n(128),m=n(298),f=n(1),v=function(e){return Object(s.useEffect)((function(){document.getElementById("image-viewer2").style.display="block"}),[]),Object(f.jsx)(O.a,{id:"image-viewer2",children:Object(f.jsx)(o.a,{container:!0,spacing:h.b,children:Object(f.jsx)(o.a,{item:!0,xs:12,children:Object(f.jsxs)(l.a,{className:"popup-container",children:[Object(f.jsx)(d.a,{title:"Consultation"}),Object(f.jsx)(j.a,{}),Object(f.jsxs)(u.a,{className:"popup-body",style:{top:"250px",overflowY:"auto",height:"75vh"},children:[Object(f.jsx)(b.a,{id:"closeBtn",onClick:function(){null===e||void 0===e||e.handleCloseShowSelectedConsultation()},children:"X"}),Object(f.jsx)(o.a,{container:!0,spacing:h.b,children:Object(f.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(f.jsxs)(x.a,{title:"Consultation",children:[Object(f.jsxs)("div",{className:"mt-4",children:[Object(f.jsx)("h5",{children:"Chief Complaint:"}),Object(f.jsx)("strong",{children:null===e||void 0===e?void 0:e.consultation.chief_complaint})]}),Object(f.jsxs)("div",{className:"mt-4",children:[Object(f.jsx)("h5",{children:"History of Illness:"}),Object(f.jsx)("strong",{children:null===e||void 0===e?void 0:e.consultation.history_of_illness})]}),Object(f.jsxs)("div",{className:"mt-4",children:[Object(f.jsx)("h5",{children:"Review of systems:"}),Object(f.jsx)("strong",{children:null===e||void 0===e?void 0:e.consultation.review_of_systems})]}),Object(f.jsxs)("div",{className:"mt-4",children:[Object(f.jsx)("h5",{children:"Examinations:"}),Object(f.jsx)("strong",{children:null===e||void 0===e?void 0:e.consultation.examination})]}),Object(f.jsxs)("div",{className:"mt-4",children:[Object(f.jsx)("h5",{children:"Assessments/Plans:"}),Object(f.jsx)("strong",{children:null===e||void 0===e?void 0:e.consultation.assessment})]}),Object(f.jsxs)("div",{className:"mt-4",children:[Object(f.jsx)("h5",{children:"Medication:"}),Object(f.jsx)("strong",{children:null===e||void 0===e?void 0:e.consultation.medication})]}),Object(f.jsxs)("div",{className:"mt-4",children:[Object(f.jsx)("h5",{children:"Order Labs / Home Medication / Image / Others:"}),Object(f.jsx)("strong",{children:(null===e||void 0===e?void 0:e.consultation.order_labs)?null===e||void 0===e?void 0:e.consultation.order_labs:"none"})]}),Object(f.jsxs)("div",{className:"mt-4",children:[Object(f.jsx)("h5",{children:"Order Labs / Home Medication / Image / Others uploads:"}),(null===e||void 0===e?void 0:e.consultation.upload_order_labs)?Object(f.jsx)("a",{href:null===e||void 0===e?void 0:e.consultation.upload_order_labs,children:"View file/image"}):"none"]}),Object(f.jsxs)("div",{className:"mt-4",children:[Object(f.jsx)("h5",{children:"Sick leave:"}),Object(f.jsx)("strong",{children:null===e||void 0===e?void 0:e.consultation.sick_leave})]}),Object(f.jsxs)("div",{className:"mt-4 mb-4",children:[Object(f.jsx)("h5",{children:"Created At:"}),Object(f.jsx)("strong",{children:function(e){var t=new Date(e).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).split(" "),n=Object(r.a)(t,5),a=n[0],c=n[1],i=n[2],s=n[3],o=n[4],l=a.toUpperCase();return"".concat(c," ").concat(l," ").concat(i," ").concat(s," ").concat(o)}(null===e||void 0===e?void 0:e.consultation.created_at)})]})]})})})]})]})})})})},g=function(e){var t="https://backend-test.alsahaba.sa/api",n=Object(s.useState)([]),a=Object(r.a)(n,2),g=a[0],y=a[1],w=Object(s.useState)([]),_=Object(r.a)(w,2),C=_[0],k=_[1],S=Object(s.useState)(null),N=Object(r.a)(S,2),E=N[0],I=N[1],B=Object(s.useState)(!1),D=Object(r.a)(B,2),L=D[0],q=D[1],P=Object(s.useState)(!1),U=Object(r.a)(P,2),A=U[0],F=U[1],M=Object(s.useState)(!1),R=Object(r.a)(M,2),X=(R[0],R[1]),Y=function(){var n=Object(i.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return X(!0),n.next=3,m.a.get("".concat(t,"/consultations/")).then((function(t){var n;y(t.data),X(!1);var a=0;if(!1===(null===e||void 0===e||null===(n=e.patient)||void 0===n?void 0:n.is_doctor))for(;a<t.data.length;){if(t.data[a].patient_id===(null===e||void 0===e?void 0:e.patient.id)){q(!0);break}q(!1),a++}else for(;a<t.data.length;){if(t.data[a].doctor_id===(null===e||void 0===e?void 0:e.patient.id)){q(!0);break}q(!1),a++}}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),H=function(){var e=Object(i.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat(t,"/users/")).then((function(e){k(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(e){var t=new Date(e).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).split(" "),n=Object(r.a)(t,5),a=n[0],c=n[1],i=n[2],s=n[3],o=n[4],l=a.toUpperCase();return"".concat(c," ").concat(l," ").concat(i," ").concat(s," ").concat(o)};return Object(s.useEffect)((function(){document.getElementById("image-viewer").style.display="block",Y(),H()}),[]),Object(f.jsxs)(f.Fragment,{children:[A&&Object(f.jsx)(v,{consultation:E,handleCloseShowSelectedConsultation:function(){F(!1)}}),Object(f.jsx)(O.a,{id:"image-viewer",onClick:function(){document.getElementById("image-viewer").style.display="none"},children:Object(f.jsx)(o.a,{container:!0,spacing:h.b,children:Object(f.jsx)(o.a,{item:!0,xs:12,children:Object(f.jsxs)(l.a,{className:"popup-container",children:[Object(f.jsx)(d.a,{title:"Consultation"}),Object(f.jsx)(j.a,{}),Object(f.jsxs)(u.a,{className:"popup-body",style:{top:"250px",overflowY:"auto",height:"75vh"},children:[Object(f.jsx)(b.a,{id:"closeBtn",onClick:null===e||void 0===e?void 0:e.handleCloseConsultations,children:"X"}),Object(f.jsx)(o.a,{container:!0,spacing:h.b,children:Object(f.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(f.jsx)(x.a,{title:null===e||void 0===e?void 0:e.patient.full_name,children:L?Object(f.jsx)(f.Fragment,{children:g&&(null===g||void 0===g?void 0:g.filter((function(t){var n,a,c;return(null===e||void 0===e||null===(n=e.patient)||void 0===n?void 0:n.is_doctor)?t.doctor_id===(null===e||void 0===e||null===(a=e.patient)||void 0===a?void 0:a.id):t.patient_id===(null===e||void 0===e||null===(c=e.patient)||void 0===c?void 0:c.id)})).map((function(t,n){return Object(f.jsx)(p.a,{as:"ol",className:"borderBottom",children:null===C||void 0===C?void 0:C.filter((function(n){var a;return(null===e||void 0===e||null===(a=e.patient)||void 0===a?void 0:a.is_doctor)?t.patient_id===n.id:t.doctor_id===n.id})).map((function(a){var c;return Object(f.jsxs)(p.a.Item,{as:"li",className:"d-flex justify-content-between align-items-center",style:{cursor:"pointer",marginLeft:"-25px"},onClick:function(){return I(t),void F(!0)},children:[n+1,".",Object(f.jsxs)("div",{className:"ms-2 me-auto",children:[Object(f.jsx)("div",{className:"fw-bold",children:t.chief_complaint}),Object(f.jsx)("strong",{style:{color:"gray"},children:(null===e||void 0===e||null===(c=e.patient)||void 0===c?void 0:c.is_doctor)?Object(f.jsxs)("p",{children:[" ","Patient ID/Iqama: \xa0",a.iqama_number]}):Object(f.jsxs)("p",{children:[" ","Dr. ID/Iqama: \xa0",a.iqama_number]})}),Object(f.jsx)("br",{}),Object(f.jsx)("strong",{children:a.full_name})]}),Object(f.jsx)("strong",{children:J(t.created_at)})]},a.id)}))},t.id)})))}):Object(f.jsx)("h5",{className:"ml-4",children:"No consultations yet!"})})})})]})]})})})})]})}},563:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var a=n(3),c=n(14),i=n(82),r=n.n(i),s=n(107),o=n(13),l=n(0),d=n.n(l),j=n(240),u=n(311),b=n(234),h=n(174),O=n(314),p=n(382),x=n(235),m=n(56),f=n(414),v=n(418),g=n(417),y=n(413),w=n(415),_=n(416),C=n(17),k=n(298),S=n(423),N=n(236),E=n(325),I=n(173),B=n(128),D=n(383),L=n(1),q=function(e){var t=d.a.useState(!1),n=Object(o.a)(t,2),a=n[0],c=n[1],i=d.a.useState([]),j=Object(o.a)(i,2),O=j[0],p=j[1],f=d.a.useState(!1),v=Object(o.a)(f,2),g=(v[0],v[1]);return Object(l.useEffect)((function(){var e=function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",new Promise((function(e){var t=new Image;t.onload=function(){e(!0)},t.onerror=function(){e(!1)}})));case 4:return e.prev=4,e.t0=e.catch(0),console.error("Error checking file type:",e.t0),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(){return e.apply(this,arguments)}}();(function(){var t=Object(s.a)(r.a.mark((function t(){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,g(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(L.jsxs)(L.Fragment,{children:[a&&Object(L.jsx)(D.a,{patient:O,handleCloseConsultations:function(){c(!1)}}),Object(L.jsx)(S.a,{children:Object(L.jsx)(u.a,{container:!0,spacing:m.b,children:Object(L.jsx)(u.a,{item:!0,xs:12,children:Object(L.jsxs)(b.a,{className:"popup-container",children:[Object(L.jsx)(h.a,{title:"Consultation"}),Object(L.jsx)(x.a,{}),Object(L.jsxs)(N.a,{className:"popup-body",id:"popupCustom",children:[Object(L.jsx)(E.a,{id:"closeBtn",onClick:function(){return e.handleClose()},children:"X"}),Object(L.jsx)(u.a,{container:!0,spacing:m.b,children:Object(L.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(L.jsx)(B.a,{title:e.patient.full_name,children:Object(L.jsx)(u.a,{container:!0,direction:"column",id:"poppins",spacing:1,children:Object(L.jsxs)(u.a,{item:!0,children:[Object(L.jsxs)(I.a,{variant:"h3",gutterBottom:!0,children:["Patient name: \xa0",Object(L.jsx)("span",{id:"small-text",children:e.patient.full_name})]}),Object(L.jsxs)(I.a,{variant:"h3",gutterBottom:!0,children:["ID/Iqama number: \xa0",Object(L.jsx)("span",{id:"small-text",children:e.patient.iqama_number})]}),Object(L.jsxs)(I.a,{variant:"h3",gutterBottom:!0,children:["Date of birth: \xa0",Object(L.jsx)("span",{id:"small-text",children:e.patient.date_of_birth})]}),Object(L.jsxs)(I.a,{variant:"h3",gutterBottom:!0,children:["Mobile number: \xa0",Object(L.jsx)("span",{id:"small-text",children:e.patient.mobile_number})]}),Object(L.jsxs)(I.a,{variant:"h3",gutterBottom:!0,children:["E-mail: \xa0",Object(L.jsx)("span",{id:"small-text",children:e.patient.email})]}),Object(L.jsxs)(I.a,{variant:"h3",gutterBottom:!0,children:["Nationality: \xa0",Object(L.jsx)("span",{id:"small-text",children:e.patient.nationality})]}),Object(L.jsxs)(I.a,{variant:"h3",gutterBottom:!0,children:["Last login: \xa0",Object(L.jsx)("span",{id:"small-text",children:function(e){var t=new Date(e).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).split(" "),n=Object(o.a)(t,5),a=n[0],c=n[1],i=n[2],r=n[3],s=n[4],l=a.toUpperCase();return"".concat(c," ").concat(l," ").concat(i," ").concat(r," ").concat(s)}(e.patient.last_login)})]}),Object(L.jsx)(E.a,{variant:"contained",color:"primary",disableElevation:!0,type:"submit",onClick:function(){return t=e.patient,c(!0),void p(t);var t},children:"Show Consultations"})]})})})})})]})]})})})})]})},P=n(365),U=Object(j.a)({table:{minWidth:350},searchControl:{width:"100%",paddingRight:"8px",paddingLeft:"16px",marginBottom:"16px",marginTop:"16px"}});function A(){var e=U(),t="https://backend-test.alsahaba.sa/api",n=d.a.useState([]),i=Object(o.a)(n,2),j=i[0],S=i[1],N=d.a.useState([]),E=Object(o.a)(N,2),I=E[0],B=E[1],D=d.a.useState(""),A=Object(o.a)(D,2),F=A[0],M=A[1],R=d.a.useState(!1),X=Object(o.a)(R,2),Y=X[0],H=X[1],J=d.a.useState(!1),T=Object(o.a)(J,2),V=T[0],W=T[1],z=d.a.useState({}),G=Object(o.a)(z,2),K=G[0],Q=G[1],Z=function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(t,"/users/")).then((function(e){S(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get("".concat(t,"/search?query=").concat(F)).then((function(e){S(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(e){var t=new Date(e).toLocaleDateString("en-US",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).split(" "),n=Object(o.a)(t,5),a=n[0],c=n[1],i=n[2],r=n[3],s=n[4],l=a.toUpperCase();return"".concat(c," ").concat(l," ").concat(i," ").concat(r," ").concat(s)};return Object(l.useEffect)((function(){var e=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",new Promise((function(e,t){var n=new Image;n.onload=function(){e(!0)},n.onerror=function(){e(!1)}})));case 4:return e.prev=4,e.t0=e.catch(0),console.error("Error checking file type for patient ".concat(t.id,":"),e.t0),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}();(function(){var t=Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null===j||void 0===j||j.filter((function(e){return!e.is_doctor})).forEach(function(){var t=Object(s.a)(r.a.mark((function t(n){var i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(K[n.id]){t.next=5;break}return t.next=3,e(n);case 3:i=t.sent,Q(i?function(e){return Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},n.id,"image"))}:function(e){return Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},n.id,"non-image"))});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[j]),Object(l.useEffect)((function(){Z()}),[]),Object(L.jsxs)(d.a.Fragment,{children:[Y&&Object(L.jsx)(q,{patient:I,handleClose:function(){H(!1)}}),V&&Object(L.jsx)(P.a,{patient:I,handleClose:function(){W(!1)}}),Object(L.jsx)(u.a,{container:!0,spacing:m.b,children:Object(L.jsx)(u.a,{item:!0,xs:12,children:Object(L.jsxs)(b.a,{children:[Object(L.jsxs)(u.a,{container:!0,direction:"row",justifyContent:"space-between",alignItems:"center",children:[Object(L.jsx)(u.a,{item:!0,children:Object(L.jsx)(h.a,{title:"Registered Patients"})}),Object(L.jsx)(u.a,{item:!0,style:{marginRight:"25px"},children:Object(L.jsx)(O.a,{className:e.searchControl,id:"input-search-profile",value:F,onChange:function(e){""===e.target.value?(M(e.target.value),Z()):(M(e.target.value),$())},placeholder:"Search patients",startAdornment:Object(L.jsx)(p.a,{position:"start",children:Object(L.jsx)(C.V,{stroke:1.5,size:"1.3rem",className:e.startAdornment})}),"aria-describedby":"search-helper-text",inputProps:{"aria-label":"weight"},labelWidth:0})})]}),Object(L.jsx)(x.a,{}),Object(L.jsx)(y.a,{children:Object(L.jsxs)(f.a,{className:e.table,"aria-label":"simple table",children:[Object(L.jsx)(w.a,{children:Object(L.jsxs)(_.a,{children:[Object(L.jsx)(g.a,{children:"#"}),Object(L.jsx)(g.a,{children:"Patient name"}),Object(L.jsx)(g.a,{align:"left",children:"ID/Iqama number"}),Object(L.jsx)(g.a,{align:"left",style:{whiteSpace:"nowrap"},children:"Date of birth"}),Object(L.jsx)(g.a,{align:"left",children:"Mobile number"}),Object(L.jsx)(g.a,{align:"left",children:"E-mail"}),Object(L.jsx)(g.a,{align:"left",children:"Nationality"}),Object(L.jsx)(g.a,{align:"left",children:"Registered date"}),Object(L.jsx)(g.a,{align:"left",children:"Last login"}),Object(L.jsx)(g.a,{align:"left"}),Object(L.jsx)(g.a,{align:"left"})]})}),Object(L.jsx)(v.a,{children:j&&(null===j||void 0===j?void 0:j.filter((function(e){return!e.is_doctor})).map((function(e,t){return Object(L.jsxs)(_.a,{children:[Object(L.jsx)(g.a,{align:"left",children:t+1}),Object(L.jsx)(g.a,{component:"th",children:e.full_name}),Object(L.jsx)(g.a,{align:"left",children:e.iqama_number}),Object(L.jsx)(g.a,{align:"left",children:e.date_of_birth}),Object(L.jsx)(g.a,{align:"left",children:e.mobile_number}),Object(L.jsx)(g.a,{align:"left",children:e.email}),Object(L.jsx)(g.a,{align:"left",children:e.nationality}),Object(L.jsx)(g.a,{align:"left",children:ee(e.created_at)}),Object(L.jsx)(g.a,{align:"left",children:ee(e.last_login)}),Object(L.jsx)(g.a,{align:"left",onClick:function(){return function(e){H(!0),B(e)}(e)},children:Object(L.jsx)("img",{src:"images/eye.png",id:"delete-icon"})}),Object(L.jsx)(g.a,{align:"left",onClick:function(){return function(e){W(!0),B(e)}(e)},children:Object(L.jsx)("img",{src:"images/trash-bin.png",id:"delete-icon"})})]},e.id)})))})]})})]})})})]})}}}]);
//# sourceMappingURL=14.0c5d337b.chunk.js.map