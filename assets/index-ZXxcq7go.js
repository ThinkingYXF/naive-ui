import{_ as C,c as h,o as j,a as t,b as S,d as e,w as o,n as v,u as U,e as A,f as _,g as I,r as l,h as n}from"./index-DK-O6LKg.js";const M={components:{},setup(){const p=U(),s=A(()=>(p.value,!1)),f=p;return{showAnchor:s,displayMode:I(),wrapperStyle:_(()=>f.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:_(()=>s.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"demo/pages/docs/nuxtjs/enUS/index.md"}}},R={key:0,style:{width:"192px"}};function D(p,s,f,u,B,V){const y=l("edit-on-github-header"),i=l("n-h2"),d=l("n-a"),w=l("router-link"),a=l("n-p"),x=l("n-code"),c=l("n-scrollbar"),g=l("n-card"),m=l("n-text"),r=l("n-anchor-link"),k=l("n-anchor");return j(),h("div",{class:"doc",style:v(u.wrapperStyle)},[t("div",{style:v(u.contentStyle)},[e(y,{"relative-url":"demo/pages/docs/nuxtjs/enUS/index.md",text:"Nuxt.js"}),e(i,{id:"Caveat"},{default:o(()=>s[0]||(s[0]=[n("Caveat")])),_:1}),e(a,null,{default:o(()=>[s[2]||(s[2]=n("This document pertains to SSR (Server-Side Rendering). Please familiarize yourself with the ")),e(w,{to:"ssr#Caveat",custom:""},{default:o(({navigate:b,href:N})=>[e(d,{href:N,onClick:b},{default:o(()=>s[1]||(s[1]=[n("SSR Caveats")])),_:2},1032,["href","onClick"])]),_:1}),s[3]||(s[3]=n(" before proceeding."))]),_:1}),e(i,{id:"Nuxt.js-Demo"},{default:o(()=>s[4]||(s[4]=[n("Nuxt.js Demo")])),_:1}),e(a,null,{default:o(()=>[s[6]||(s[6]=n("You can refer to ")),e(d,{href:"https://github.com/07akioni/naive-ui-nuxt-demo",target:"_blank"},{default:o(()=>s[5]||(s[5]=[n("example")])),_:1}),s[7]||(s[7]=n("."))]),_:1}),e(i,{id:"Using-Nuxt-Module"},{default:o(()=>s[8]||(s[8]=[n("Using Nuxt Module")])),_:1}),e(a,null,{default:o(()=>s[9]||(s[9]=[n("This is the same approach which previous demo uses.")])),_:1}),e(a,null,{default:o(()=>[s[11]||(s[11]=n("Install the ")),e(d,{href:"https://github.com/07akioni/nuxtjs-naive-ui",target:"_blank"},{default:o(()=>s[10]||(s[10]=[n("module")])),_:1}),s[12]||(s[12]=n(" to your Nuxt application with one command:"))]),_:1}),e(g,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:o(()=>[e(c,{"x-scrollable":"","content-style":"padding: 16px;"},{default:o(()=>[e(x,null,{default:o(()=>s[13]||(s[13]=[t("pre",null,[t("span",{class:"hljs-comment"},"# npm"),n(`
npx nuxi module add nuxtjs-naive-ui

`),t("span",{class:"hljs-comment"},"# pnpm"),n(`
pnpm dlx nuxi module add nuxtjs-naive-ui`)],-1)])),_:1})]),_:1})]),_:1}),e(i,{id:"Using-Auto-Import-in-Nuxt"},{default:o(()=>s[14]||(s[14]=[n("Using Auto Import in Nuxt")])),_:1}),e(a,null,{default:o(()=>[s[18]||(s[18]=n("You can also use the ")),e(m,{code:""},{default:o(()=>s[15]||(s[15]=[n("unplugin-auto-import")])),_:1}),s[19]||(s[19]=n(" plugin to automatically import APIs and the ")),e(m,{code:""},{default:o(()=>s[16]||(s[16]=[n("unplugin-vue-components")])),_:1}),s[20]||(s[20]=n(" plugin to automatically import components on demand. In this case, the ")),e(m,{code:""},{default:o(()=>s[17]||(s[17]=[n("nuxt.config.ts")])),_:1}),s[21]||(s[21]=n(" file will have a few additional configuration lines compared to the example above."))]),_:1}),e(g,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:o(()=>[e(c,{"x-scrollable":"","content-style":"padding: 16px;"},{default:o(()=>[e(x,null,{default:o(()=>s[22]||(s[22]=[t("pre",null,[t("span",{class:"hljs-keyword"},"import"),n(),t("span",{class:"hljs-title class_"},"AutoImport"),n(),t("span",{class:"hljs-keyword"},"from"),n(),t("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),n(`
`),t("span",{class:"hljs-keyword"},"import"),n(" { "),t("span",{class:"hljs-title class_"},"NaiveUiResolver"),n(" } "),t("span",{class:"hljs-keyword"},"from"),n(),t("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),n(`
`),t("span",{class:"hljs-keyword"},"import"),n(),t("span",{class:"hljs-title class_"},"Components"),n(),t("span",{class:"hljs-keyword"},"from"),n(),t("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),n(`

`),t("span",{class:"hljs-comment"},"// https://nuxt.com/docs/api/configuration/nuxt-config"),n(`
`),t("span",{class:"hljs-keyword"},"export"),n(),t("span",{class:"hljs-keyword"},"default"),n(),t("span",{class:"hljs-title function_"},"defineNuxtConfig"),n(`({
  `),t("span",{class:"hljs-attr"},"modules"),n(": ["),t("span",{class:"hljs-string"},"'nuxtjs-naive-ui'"),n(`],
  `),t("span",{class:"hljs-attr"},"vite"),n(`: {
    `),t("span",{class:"hljs-attr"},"plugins"),n(`: [
      `),t("span",{class:"hljs-title class_"},"AutoImport"),n(`({
        `),t("span",{class:"hljs-attr"},"imports"),n(`: [
          {
            `),t("span",{class:"hljs-string"},"'naive-ui'"),n(`: [
              `),t("span",{class:"hljs-string"},"'useDialog'"),n(`,
              `),t("span",{class:"hljs-string"},"'useMessage'"),n(`,
              `),t("span",{class:"hljs-string"},"'useNotification'"),n(`,
              `),t("span",{class:"hljs-string"},"'useLoadingBar'"),n(`
            ]
          }
        ]
      }),
      `),t("span",{class:"hljs-title class_"},"Components"),n(`({
        `),t("span",{class:"hljs-attr"},"resolvers"),n(": ["),t("span",{class:"hljs-title class_"},"NaiveUiResolver"),n(`()]
      })
    ]
  }
})`)],-1)])),_:1})]),_:1})]),_:1})],4),u.showAnchor?(j(),h("div",R,[e(k,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:o(()=>[e(r,{title:"Caveat",href:"#Caveat"}),e(r,{title:"Nuxt.js Demo",href:"#Nuxt.js-Demo"}),e(r,{title:"Using Nuxt Module",href:"#Using-Nuxt-Module"}),e(r,{title:"Using Auto Import in Nuxt",href:"#Using-Auto-Import-in-Nuxt"})]),_:1})])):S("",!0)],4)}const T=C(M,[["render",D]]);export{T as default};
