(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3XHS":function(e,a,t){"use strict";t.r(a),t.d(a,"query",(function(){return u}));var n=t("q1tI"),r=t.n(n),l=(t("Wbzz"),t("Bl7J")),i=t("wG+1"),c=t("gHVR"),m=t.n(c),s=t("jYam"),o=t("1eu9"),d=t.n(o),u="1053723469";a.default=function(e){var a=e.data.prismic.about;return a?r.a.createElement(l.a,null,r.a.createElement("article",{className:m.a.hero},r.a.createElement("div",{className:m.a.text_area},r.a.createElement(s.a,null),i.RichText.render(a.title),i.RichText.render(a.intro)),r.a.createElement(d.a,{Tag:"section",className:m.a.hero_image,fluid:a.imageSharp.childImageSharp.fluid,backgroundColor:"#9CDEF2"})),r.a.createElement("article",{className:m.a.jobs_skills_wrap},r.a.createElement("div",{className:m.a.skills},a.body.map((function(e){if("skills"===e.type)return e.fields.map((function(e){return r.a.createElement("div",{className:m.a.skill},i.RichText.render(e.skill_title),i.RichText.render(e.skill_text))}))}))),r.a.createElement("div",{className:m.a.jobs},r.a.createElement("h1",{className:m.a.mobileHeader},"Work Experience"),a.body.map((function(e){if("job_timeline"===e.type)return e.fields.map((function(e,a){var t=Object(i.Date)(e.start_date),n=Intl.DateTimeFormat("en-US",{year:"numeric",month:"long"}).format(t),l=Object(i.Date)(e.end_date),c=Intl.DateTimeFormat("en-US",{year:"numeric",month:"long"}).format(l),s=0===a?"Present":c;return r.a.createElement("div",{className:m.a.job},r.a.createElement("h3",{className:m.a.title},e.job_title),r.a.createElement("div",{className:m.a.date},n," - ",s),r.a.createElement("div",{className:m.a.company_city},e.company," | ",e.city))}))}))))):null}}}]);
//# sourceMappingURL=component---src-pages-about-js-6164aa06424af6cf5800.js.map