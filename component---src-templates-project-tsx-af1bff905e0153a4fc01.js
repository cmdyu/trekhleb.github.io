(self.webpackChunktrekhleb_github_io=self.webpackChunktrekhleb_github_io||[]).push([[142],{3818:function(e,t,l){var n=l(5301).w_;e.exports.W=function(e){return n({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M8.465,11.293c1.133-1.133,3.109-1.133,4.242,0L13.414,12l1.414-1.414l-0.707-0.707c-0.943-0.944-2.199-1.465-3.535-1.465 S7.994,8.935,7.051,9.879L4.929,12c-1.948,1.949-1.948,5.122,0,7.071c0.975,0.975,2.255,1.462,3.535,1.462 c1.281,0,2.562-0.487,3.536-1.462l0.707-0.707l-1.414-1.414l-0.707,0.707c-1.17,1.167-3.073,1.169-4.243,0 c-1.169-1.17-1.169-3.073,0-4.243L8.465,11.293z"}},{tag:"path",attr:{d:"M12,4.929l-0.707,0.707l1.414,1.414l0.707-0.707c1.169-1.167,3.072-1.169,4.243,0c1.169,1.17,1.169,3.073,0,4.243 l-2.122,2.121c-1.133,1.133-3.109,1.133-4.242,0L10.586,12l-1.414,1.414l0.707,0.707c0.943,0.944,2.199,1.465,3.535,1.465 s2.592-0.521,3.535-1.465L19.071,12c1.948-1.949,1.948-5.122,0-7.071C17.121,2.979,13.948,2.98,12,4.929z"}}]})(e)}},1880:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return C}});var n=l(7294),a=l(2427),r=l(9197),c=l(4110),m=l(6577),s=l(2916),u=l(5376),i=l(5537),o=l(2971),E=l(2103),v=l(682),d=l(8508),h=l(4052),Z=l(7784),p=l(6981),g=l(8362),k=l(1074),N=l(403),f=l(618),y=l(6104),b=l(1462),x=l(2733),L=l(3818),P=l(1935),D=l(8388);var j=e=>{var t,l;const{achievement:a}=e,r=(0,P.p)({imagePath:null==a||null===(t=a.image)||void 0===t?void 0:t.srcPath});if(!a)return null;const c=null!=a&&a.date?n.createElement("div",{className:"mt-3"},n.createElement(o.Z,{startDate:a.date,className:"text-xs text-gray-500",withDay:!0})):null,m={url:null==r?void 0:r.src},s=a.link?n.createElement("div",{className:"mt-3"},n.createElement(f.Z,{link:a.link,className:"text-sm underline",startEnhancer:n.createElement(L.W,{size:16})},(null===(l=a.link)||void 0===l?void 0:l.caption)||"Details")):null;return n.createElement(E.ZP,{key:a.title},n.createElement(v.ZP,{link:m},n.createElement(h.Z,{fluidImage:r})),n.createElement(D.ZP,null,n.createElement(f.Z,{link:m},a.title),c,s))};var R=e=>{const{achievements:t}=e;if(!t||!t.length)return null;const l=t.map(((e,t)=>n.createElement(j,{achievement:e,key:t})));return n.createElement("div",{className:"mt-6 mb-6"},n.createElement(k.Z,{className:"mb-3"},n.createElement(y.Z,{level:y._.h2,id:"achievements"},"Achievements"),n.createElement(b.Z,{className:"ml-3 self-start"},t.length)),n.createElement(x.ZP,null,l))};var w=e=>{var t;const{project:l}=e;if(!l)return null;const a=null!=l&&l.tags?n.createElement("div",null,n.createElement(d.Z,{tags:l.tags,numToShow:5})):null,r=n.createElement(o.Z,{startDate:l.startDate,endDate:l.endDate,className:"text-xs text-gray-500"}),c=(0,N.$_)(l),m={url:null==l||null===(t=l.srcURL)||void 0===t?void 0:t.url,caption:"Stars on GitHub"},y="number"==typeof c?n.createElement(g.Z,{stars:c,link:m,className:"text-xs text-gray-500 font-light"}):null,b=l.summary?l.summary.map(((e,t)=>n.createElement("p",{key:t},e))):null,x=b?n.createElement("div",{className:"mb-3 font-light"},b):null,L=l.archived?void 0:l.demoURL||l.srcURL,P=l.demoURL&&!l.archived?n.createElement(Z.Z,{link:l.demoURL,startEnhancer:n.createElement(s.Z,null),className:"mr-4"},"Demo"):null,D=l.srcURL&&!l.archived?n.createElement(Z.Z,{link:l.srcURL,startEnhancer:n.createElement(u.h,null)},"Source Code"):null,j=l.cover?n.createElement(h.Z,{image:l.cover}):null,w=n.createElement("div",{className:"mb-6"},n.createElement(E.ZP,null,n.createElement(v.ZP,{link:L,className:"h-96"},j))),U=null!=l&&l.archived?n.createElement(k.Z,{className:"py-6"},n.createElement(p.Z,null)):null,_=P||D?n.createElement(k.Z,{className:"py-6"},P,D):null,C=null!=l&&l.links&&null!=l&&l.links.length?null==l?void 0:l.links.map(((e,t)=>n.createElement("li",{key:t},n.createElement(f.Z,{link:e,className:"text-sm underline",startEnhancer:n.createElement(i.F,{size:14})},(null==e?void 0:e.caption)||"Read more")))):null,z=C?n.createElement("ul",{className:"mt-3"},C):null,S=n.createElement(k.Z,{className:"mb-3 justify-between"},n.createElement("div",null,r),n.createElement("div",null,y)),W=n.createElement(R,{achievements:null==l?void 0:l.achievements});return n.createElement(n.Fragment,null,w,S,x,a,z,_,U,W)};var U=e=>{const{project:t}=e;return t?n.createElement(a.Z,null,n.createElement(c.ZP,{title:(null==t?void 0:t.name)||"",description:null!=t&&t.summary&&null!=t&&t.summary.length?t.summary[0]:""}),n.createElement(k.Z,null,n.createElement(r.Z,null,t.name),n.createElement(b.Z,{className:"ml-3 self-start"},"project")),n.createElement(w,{project:t})):n.createElement(m.ZP,{type:m.hW},"Project not found")},_=l(824);var C=e=>{const{pageContext:t}=e,{projectID:l=null}=t,a=l&&l in _.q?_.q[l]:null;return n.createElement(U,{project:a})}}}]);
//# sourceMappingURL=component---src-templates-project-tsx-af1bff905e0153a4fc01.js.map