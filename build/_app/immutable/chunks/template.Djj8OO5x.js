import{k as u,l as i,e as f,T as v,m as p,h as d,o,p as h,u as T}from"./runtime.BxAj6XuL.js";function E(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function n(r,t){var e=f;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function y(r,t){var e=(t&v)!==0,_=(t&p)!==0,a,c=!r.startsWith("<!>");return()=>{if(d)return n(o,null),o;a===void 0&&(a=E(c?r:"<!>"+r),e||(a=i(a)));var s=_?document.importNode(a,!0):a.cloneNode(!0);if(e){var m=i(s),l=s.lastChild;n(m,l)}else n(s,s);return s}}function M(r=""){if(!d){var t=u(r+"");return n(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=u()),T(e)),n(e,e),e}function x(){if(d)return n(o,null),o;var r=document.createDocumentFragment(),t=document.createComment(""),e=u();return r.append(t,e),n(t,e),r}function N(r,t){if(d){f.nodes_end=o,h();return}r!==null&&r.before(t)}export{N as a,n as b,x as c,M as d,y as t};
