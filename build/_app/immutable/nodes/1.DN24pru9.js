import"../chunks/disclose-version.Bg9kRutz.js";import{v as d,w as f,x as v,y as h,z as u,A as _,B as x,C as $,D as k,E as y,F as E,G as w,H as z,c as l,r as g,s as A}from"../chunks/runtime.KlklEXRR.js";import{s as B,a as b,b as C}from"../chunks/store.BxmYLH3V.js";import{a as D,t as F}from"../chunks/template.Cgrog5q9.js";import{s as G}from"../chunks/entry.Ba8LPmJk.js";function H(s=!1){const e=v,t=e.l.u;if(!t)return;let n=()=>$(e.s);if(s){let a=0,r={};const p=k(()=>{let i=!1;const c=e.s;for(const o in c)c[o]!==r[o]&&(r[o]=c[o],i=!0);return i&&a++,a});n=()=>_(p)}t.b.length&&d(()=>{m(e,n),u(t.b)}),f(()=>{const a=h(()=>t.m.map(x));return()=>{for(const r of a)typeof r=="function"&&r()}}),t.a.length&&f(()=>{m(e,n),u(t.a)})}function m(s,e){if(s.l.s)for(const t of s.l.s)_(t);e()}const S=()=>{const s=G;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},j={subscribe(s){return S().page.subscribe(s)}};var q=F("<h1> </h1> <p> </p>",1);function N(s,e){y(e,!1);const t=B(),n=()=>C(j,"$page",t);H();var a=q(),r=E(a),p=l(r,!0);g(r);var i=A(r,2),c=l(i,!0);g(i),w(()=>{var o;b(p,n().status),b(c,(o=n().error)==null?void 0:o.message)}),D(s,a),z()}export{N as component};