import{_ as C,c as j,o as _,a as t,b as M,d as l,w as e,n as h,u as S,e as R,f as y,g as A,r as o,h as s}from"./index-DK-O6LKg.js";const B={components:{},setup(){const d=S(),n=R(()=>(d.value,!1)),x=d;return{showAnchor:n,displayMode:A(),wrapperStyle:y(()=>x.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:y(()=>n.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"demo/pages/docs/nuxtjs/zhCN/index.md"}}},I={key:0,style:{width:"192px"}};function V(d,n,x,u,z,D){const v=o("edit-on-github-header"),i=o("n-h2"),p=o("n-a"),N=o("router-link"),a=o("n-p"),f=o("n-code"),c=o("n-scrollbar"),g=o("n-card"),m=o("n-text"),r=o("n-anchor-link"),k=o("n-anchor");return _(),j("div",{class:"doc",style:h(u.wrapperStyle)},[t("div",{style:h(u.contentStyle)},[l(v,{"relative-url":"demo/pages/docs/nuxtjs/zhCN/index.md",text:"Nuxt.js"}),l(i,{id:"注意"},{default:e(()=>n[0]||(n[0]=[s("注意")])),_:1}),l(a,null,{default:e(()=>[n[2]||(n[2]=s("本文档涉及到 SSR，请先了解")),l(N,{to:"ssr#注意",custom:""},{default:e(({navigate:w,href:b})=>[l(p,{href:b,onClick:w},{default:e(()=>n[1]||(n[1]=[s("SSR 的注意事项")])),_:2},1032,["href","onClick"])]),_:1}),n[3]||(n[3]=s("。"))]),_:1}),l(i,{id:"Nuxt.js-示例"},{default:e(()=>n[4]||(n[4]=[s("Nuxt.js 示例")])),_:1}),l(a,null,{default:e(()=>[n[6]||(n[6]=s("参考")),l(p,{href:"https://github.com/07akioni/naive-ui-nuxt-demo",target:"_blank"},{default:e(()=>n[5]||(n[5]=[s("例子")])),_:1}),n[7]||(n[7]=s("。"))]),_:1}),l(i,{id:"使用-Nuxt-Module"},{default:e(()=>n[8]||(n[8]=[s("使用 Nuxt Module")])),_:1}),l(a,null,{default:e(()=>n[9]||(n[9]=[s("这和上一个示例使用的是同样的方式。")])),_:1}),l(a,null,{default:e(()=>[n[11]||(n[11]=s("在你的 Nuxt 应用中使用下列命令安装此")),l(p,{href:"https://github.com/07akioni/nuxtjs-naive-ui",target:"_blank"},{default:e(()=>n[10]||(n[10]=[s("模块")])),_:1}),n[12]||(n[12]=s("："))]),_:1}),l(g,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:e(()=>[l(c,{"x-scrollable":"","content-style":"padding: 16px;"},{default:e(()=>[l(f,null,{default:e(()=>n[13]||(n[13]=[t("pre",null,[t("span",{class:"hljs-comment"},"# npm"),s(`
npx nuxi module add nuxtjs-naive-ui

`),t("span",{class:"hljs-comment"},"# pnpm"),s(`
pnpm dlx nuxi module add nuxtjs-naive-ui`)],-1)])),_:1})]),_:1})]),_:1}),l(i,{id:"在-Nuxt-中使用自动引入"},{default:e(()=>n[14]||(n[14]=[s("在 Nuxt 中使用自动引入")])),_:1}),l(a,null,{default:e(()=>[n[18]||(n[18]=s("同样可以使用 ")),l(m,{code:""},{default:e(()=>n[15]||(n[15]=[s("unplugin-auto-import")])),_:1}),n[19]||(n[19]=s(" 插件来自动导入 API，使用 ")),l(m,{code:""},{default:e(()=>n[16]||(n[16]=[s("unplugin-vue-components")])),_:1}),n[20]||(n[20]=s(" 插件来按需自动加载组件。在这种情况下，")),l(m,{code:""},{default:e(()=>n[17]||(n[17]=[s("nuxt.config.ts")])),_:1}),n[21]||(n[21]=s(" 会比上面的例子多几行配置。"))]),_:1}),l(g,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:e(()=>[l(c,{"x-scrollable":"","content-style":"padding: 16px;"},{default:e(()=>[l(f,null,{default:e(()=>n[22]||(n[22]=[t("pre",null,[t("span",{class:"hljs-keyword"},"import"),s(),t("span",{class:"hljs-title class_"},"AutoImport"),s(),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { "),t("span",{class:"hljs-title class_"},"NaiveUiResolver"),s(" } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(),t("span",{class:"hljs-title class_"},"Components"),s(),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),s(`

`),t("span",{class:"hljs-comment"},"// https://nuxt.com/docs/api/configuration/nuxt-config"),s(`
`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(),t("span",{class:"hljs-title function_"},"defineNuxtConfig"),s(`({
  `),t("span",{class:"hljs-attr"},"modules"),s(": ["),t("span",{class:"hljs-string"},"'nuxtjs-naive-ui'"),s(`],
  `),t("span",{class:"hljs-attr"},"vite"),s(`: {
    `),t("span",{class:"hljs-attr"},"plugins"),s(`: [
      `),t("span",{class:"hljs-title class_"},"AutoImport"),s(`({
        `),t("span",{class:"hljs-attr"},"imports"),s(`: [
          {
            `),t("span",{class:"hljs-string"},"'naive-ui'"),s(`: [
              `),t("span",{class:"hljs-string"},"'useDialog'"),s(`,
              `),t("span",{class:"hljs-string"},"'useMessage'"),s(`,
              `),t("span",{class:"hljs-string"},"'useNotification'"),s(`,
              `),t("span",{class:"hljs-string"},"'useLoadingBar'"),s(`
            ]
          }
        ]
      }),
      `),t("span",{class:"hljs-title class_"},"Components"),s(`({
        `),t("span",{class:"hljs-attr"},"resolvers"),s(": ["),t("span",{class:"hljs-title class_"},"NaiveUiResolver"),s(`()]
      })
    ]
  }
})`)],-1)])),_:1})]),_:1})]),_:1})],4),u.showAnchor?(_(),j("div",I,[l(k,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[l(r,{title:"注意",href:"#注意"}),l(r,{title:"Nuxt.js 示例",href:"#Nuxt.js-示例"}),l(r,{title:"使用 Nuxt Module",href:"#使用-Nuxt-Module"}),l(r,{title:"在 Nuxt 中使用自动引入",href:"#在-Nuxt-中使用自动引入"})]),_:1})])):M("",!0)],4)}const U=C(B,[["render",V]]);export{U as default};
