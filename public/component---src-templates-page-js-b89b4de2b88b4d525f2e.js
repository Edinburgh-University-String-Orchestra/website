(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"3nLz":function(t,e,a){"use strict";a("t+fG")("fixed",(function(t){return function(){return t(this,"tt","","")}}))},EYWl:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("3nLz"),a("sC2a");var n=a("q1tI"),r=a.n(n),o=a("TJpk"),i=a.n(o),c=a("T/ZZ"),l=a.n(c),p=a("IpnI"),m=a.n(p);var s=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t,e,a,n,o=this.props,c=o.postNode,p=o.postPath,s=o.postSEO,u="";if(s){var d=c.frontmatter;t=d.title,e=d.description?d.description:c.excerpt,d.thumbnail&&(u=d.thumbnail.childImageSharp.fixed.src),a=l()(m.a.siteUrl,"/"===(n=p)?n:n.replace(/\/$/,""))}else t=m.a.siteTitle,e=m.a.siteDescription,u=m.a.siteLogo;u=l()(m.a.siteUrl,u);var h=l()(m.a.siteUrl,m.a.pathPrefix),E=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:t,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:""}];return s&&E.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:t,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:t,alternateName:m.a.siteTitleAlt?m.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:u},description:e}),r.a.createElement(i.a,null,r.a.createElement("meta",{name:"description",content:e}),r.a.createElement("meta",{name:"image",content:u}),r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(E)),r.a.createElement("meta",{property:"og:url",content:s?a:h}),s&&r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:title",content:t}),r.a.createElement("meta",{property:"og:description",content:e}),r.a.createElement("meta",{property:"og:image",content:u}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:creator",content:m.a.userTwitter}),r.a.createElement("meta",{name:"twitter:title",content:t}),r.a.createElement("meta",{name:"twitter:description",content:e}),r.a.createElement("meta",{name:"twitter:image",content:u}))},n}(n.Component)},sweJ:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return s})),a.d(e,"pageQuery",(function(){return u}));var n=a("q1tI"),r=a.n(n),o=a("TJpk"),i=a.n(o),c=a("83Zx"),l=a("EYWl"),p=a("IpnI"),m=a.n(p);var s=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props.pageContext.slug,e=this.props.data.markdownRemark,a=e.frontmatter;return a.id||(a.id=t),r.a.createElement(c.a,null,r.a.createElement(i.a,null,r.a.createElement("title",null,a.title+" – "+m.a.siteTitle)),r.a.createElement(l.a,{postPath:t,postNode:e,postSEO:!0}),r.a.createElement("div",{className:"container"},r.a.createElement("article",null,r.a.createElement("header",{className:"page-header"},r.a.createElement("h1",null,a.title)),r.a.createElement("div",{className:"page",dangerouslySetInnerHTML:{__html:e.html}}))))},n}(n.Component),u="2299296067"}}]);
//# sourceMappingURL=component---src-templates-page-js-b89b4de2b88b4d525f2e.js.map