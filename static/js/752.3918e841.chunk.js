"use strict";(self.webpackChunkipa_dictionary_lookup=self.webpackChunkipa_dictionary_lookup||[]).push([[752],{59752:function(e,n,t){t.r(n),t.d(n,{IpaLookup:function(){return Y}});var r,i=t(29439),o=t(19860),s=t(9019),a=t(57829),c=t(69099),l=t(47723),u=t(47313),d=t(4942),p=t(1413),h=t(57845),f=t(17592);!function(e){e.DESELECTED="deselected",e.REQUIRED="required",e.FORBIDDEN="forbidden"}(r||(r={}));var x=(0,f.ZP)(c.Z)((function(e){var n=e.selected,t=e.theme;return{minWidth:t.spacing(5),lineHeight:"1rem",textTransform:"none",color:t.palette.selectionButtonColors.text[n],backgroundColor:t.palette.selectionButtonColors.background[n],border:0,margin:"1px",padding:"6px","&:hover":{backgroundColor:t.palette.selectionButtonColors.background.hover[n]}}})),g=t(46417);function m(e){var n=e.label,t=e.symbols,i=e.state,s=e.setState,c=(0,o.Z)(),l=function(e,n,t){return function(){t((0,p.Z)((0,p.Z)({},n),{},(0,d.Z)({},e,function(e){var n=Object.values(r);return n[(n.indexOf(e)+1)%n.length]}(n[e]))))}};return(0,g.jsxs)(a.Z,{mb:c.spacing(2),children:[n&&(0,g.jsx)(h.p,{children:n}),t.map((function(e){return(0,g.jsx)(x,{variant:"contained",selected:i[e],onClick:l(e,i,s),children:e},e)}))]})}function j(e){return e.reduce((function(e,n){return e[n]=r.DESELECTED,e}),{})}var Z=t(60251),b=t(85281);function v(e){var n=e.open;return(0,g.jsx)(Z.Z,{sx:{position:"absolute",color:"#fff",zIndex:function(e){return e.zIndex.drawer+1}},open:n,children:(0,g.jsx)(b.Z,{color:"inherit"})})}var y=t(93824),S=t(66835),k=t(57861),C=t(67478),D=t(51629),P=t(23477),E=t(24076),R=t(82295),w=t(42461),I=t(1691),q=t(61113),B=t(37771),z=t(23313),T=t(28879),M=t(5439);function O(e){var n=e.data,t=(0,o.Z)(),r=(0,u.useState)(0),a=(0,i.Z)(r,2),c=a[0],l=a[1],d=(0,u.useState)(10),p=(0,i.Z)(d,2),h=p[0],f=p[1],x=(0,u.useState)(""),m=(0,i.Z)(x,2),j=m[0],Z=m[1],b=(0,u.useCallback)((0,M.Ds)((function(e){return Z(e)})),[Z]),v=(0,u.useState)(!1),y=(0,i.Z)(v,2),O=y[0],F=y[1],L=(0,u.useMemo)((function(){if(""!==j){if(O){var e=new RegExp(j);return n.filter((function(n){return n.pronunciation.some((function(n){return e.exec(n)}))||e.exec(n.spelling)}))}return n.filter((function(e){return e.pronunciation.some((function(e){return e.includes(j)}))||e.spelling.includes(j)}))}return n}),[n,O,j]);return(0,g.jsx)(D.Z,{component:R.Z,children:(0,g.jsxs)(S.Z,{size:"small",children:[(0,g.jsx)(P.Z,{children:(0,g.jsxs)(E.Z,{sx:{bgcolor:t.palette.primary.main},children:[(0,g.jsx)(U,{children:"Spelling"}),(0,g.jsx)(U,{children:"Phonetic"})]})}),(0,g.jsxs)(k.Z,{children:[(0,g.jsx)(E.Z,{children:(0,g.jsx)(C.Z,{sx:{paddingTop:0,paddingBottom:0,paddingRight:0},colSpan:2,children:(0,g.jsxs)(s.ZP,{container:!0,flexDirection:"row",children:[(0,g.jsx)(w.Z,{sx:{height:33,fontSize:"0.875rem",flexGrow:1},placeholder:"search",disableUnderline:!0,onChange:function(e){b(e.target.value)}}),(0,g.jsx)(I.Z,{title:"Use regular expression",children:(0,g.jsx)(_,{isRegexMode:O,onClick:function(){return F((function(e){return!e}))},children:(0,g.jsx)(q.Z,{children:".*"})})})]})})},"i:search"),(h>0?L.slice(c*h,c*h+h):L).map((function(e){return(0,g.jsxs)(E.Z,{children:[(0,g.jsx)(C.Z,{children:e.spelling}),(0,g.jsx)(C.Z,{children:e.pronunciation.join(", ")})]},e.spelling)}))]}),(0,g.jsx)(B.Z,{children:(0,g.jsx)(E.Z,{children:(0,g.jsx)(z.Z,{rowsPerPageOptions:[10,15,20,25,100],colSpan:2,count:L.length,rowsPerPage:h,page:c,SelectProps:{native:!0},onPageChange:function(e,n){l(n)},onRowsPerPageChange:function(e){f(parseInt(e.target.value,10)),l(0)},ActionsComponent:T.Z})})})]})})}var U=(0,f.ZP)(C.Z)((function(e){var n=e.theme;return{color:n.palette.primary.contrastText,fontWeight:n.typography.fontWeightBold}})),_=(0,f.ZP)(c.Z)((function(e){var n=e.isRegexMode,t=e.theme;return{padding:"0px 6px",margin:"6px",minWidth:0,color:n?t.palette.primary.contrastText:t.palette.text.primary,backgroundColor:n?t.palette.primary.main:"transparent","&:hover":(0,p.Z)({},n?{backgroundColor:t.palette.primary[(0,M.U_)(t.palette.mode)]}:{})}})),F=function(){var e=null;return{get:function(){return e},create:function(n){return null==n?null:(null!=e||(e=function(e){return{search:(0,M.gh)((function(n){return e.filter((function(e){var t=n.letters.required.every((function(n){return e.spelling.includes(n)})),r=n.ipaSymbols.required.every((function(n){return e.pronunciation.some((function(e){return e.includes(n)}))})),i=n.letters.forbidden.every((function(n){return!e.spelling.includes(n)})),o=n.ipaSymbols.forbidden.every((function(n){return e.pronunciation.some((function(e){return!e.includes(n)}))}));return t&&r&&i&&o}))}),(function(e){var n=e.letters.required.join(""),t=e.letters.forbidden.join(""),r=e.ipaSymbols.required.join(""),i=e.ipaSymbols.forbidden.join("");return"searchFullDictionary/rl:".concat(n,";bl:").concat(t,";rp:").concat(r,";bp").concat(i)}))}}(n)),e)}}}(),L=t(21991),W=t(84084),N=t(47131);function Q(e){var n=e.tooltip,t=(0,o.Z)();return(0,g.jsx)(I.Z,{title:n,children:(0,g.jsx)(N.Z,{sx:{top:-2,padding:0,marginLeft:t.spacing(.5)},children:(0,g.jsx)(W.Z,{fontSize:"small"})})})}var A=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],G=["b","d","d\u0292","\xf0","f","\u0261","h","j","k","\u026b","m","n","\u014b","p","\u0279","s","\u0283","t","t\u0283","\u03b8","v","w","z","\u0292"],H=["\u0251","\xe6","\u025b","\u025d","\u0254","\u0259","\u026a","\u028a","i","u"],J=["a\u026a","a\u028a","\u0254\u026a","e\u026a","o\u028a"],K=[G,H,J].flat(),V=function(e){return(0,u.useState)(j(e))},X=function(e,n){return Object.entries(e).filter((function(e){var t=(0,i.Z)(e,2);t[0];return t[1]===n})).map((function(e){var n=(0,i.Z)(e,2),t=n[0];n[1];return t}))};function Y(){var e=(0,y.Z)(),n=e.data,t="success"!==e.status,d=(0,o.Z)(),p=V(A),f=(0,i.Z)(p,2),x=f[0],Z=f[1],b=V(K),S=(0,i.Z)(b,2),k=S[0],C=S[1],D=(0,u.useMemo)((function(){return{letters:{required:X(x,r.REQUIRED),forbidden:X(x,r.FORBIDDEN)},ipaSymbols:{required:X(k,r.REQUIRED),forbidden:X(k,r.FORBIDDEN)}}}),[x,k]),P=(0,u.useMemo)((function(){return null!=n?F.create(n):null}),[n]),E=(0,u.useMemo)((function(){return null===P||void 0===P?void 0:P.search(D)}),[P,D]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(v,{open:t}),(0,g.jsxs)(s.ZP,{container:!0,children:[(0,g.jsxs)(s.ZP,{item:!0,xs:12,md:6,children:[(0,g.jsxs)(h.p,{variant:"h6",children:["Letters",(0,g.jsx)(Q,{tooltip:"Clicking on a button changes the requirement for the dictionary. Blue is required, red is forbidden, white is either."})]}),(0,g.jsx)(m,{symbols:A,state:x,setState:Z}),(0,g.jsx)(h.p,{variant:"h6",children:"Phonemes"}),(0,g.jsx)(m,{label:"Consonants",symbols:G,state:k,setState:C}),(0,g.jsxs)(s.ZP,{container:!0,flexDirection:"row",children:[(0,g.jsx)(a.Z,{mr:d.spacing(2),children:(0,g.jsx)(m,{label:"Monophthongs",symbols:H,state:k,setState:C})}),(0,g.jsx)(m,{label:"Diphthongs",symbols:J,state:k,setState:C})]}),(0,g.jsx)(a.Z,{mb:d.spacing(2),children:(0,g.jsx)(c.Z,{sx:{textTransform:"none",fontWeight:"bold"},variant:"contained",endIcon:(0,g.jsx)(L.Z,{}),onClick:function(){Z(j(A)),C(j(K))},children:"Reset"})})]}),(0,g.jsxs)(s.ZP,{item:!0,xs:12,md:6,children:[(0,g.jsxs)(h.p,{variant:"h6",children:["Dictionary",(0,g.jsx)(Q,{tooltip:"Search can be used for both spelling and phonetic lookup."})]}),(0,g.jsxs)(a.Z,{sx:{position:"relative"},children:[(0,g.jsx)(O,{data:null!==E&&void 0!==E?E:[]}),(0,g.jsxs)(h.p,{sx:{opacity:.8,fontSize:"0.75rem",marginTop:d.spacing(1)},textAlign:"center",children:["Data source:\xa0",(0,g.jsx)(l.Z,{href:"https://github.com/open-dict-data/ipa-dict",sx:{color:d.palette.text.secondary,textDecorationColor:d.palette.text.secondary},target:"_blank",title:"Github Page",rel:"noopener noreferrer",alignSelf:"center",children:"https://github.com/open-dict-data/ipa-dict"})]})]})]})]})]})}}}]);