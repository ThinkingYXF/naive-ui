import{_ as C,c as g,o as f,a as n,b as S,d as l,w as e,n as _,u as A,e as D,f as k,g as P,r as t,h as s}from"./index-DK-O6LKg.js";const z={components:{},setup(){const i=A(),a=D(()=>(i.value,!1)),j=i;return{showAnchor:a,displayMode:P(),wrapperStyle:k(()=>j.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:k(()=>a.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"demo/pages/docs/import-on-demand/zhCN/index.md"}}},I={key:0,style:{width:"192px"}};function B(i,a,j,d,M,T){const y=t("edit-on-github-header"),p=t("n-p"),v=t("n-a"),w=t("router-link"),h=t("n-h2"),o=t("n-code"),r=t("n-scrollbar"),c=t("n-card"),m=t("n-text"),u=t("n-anchor-link"),x=t("n-anchor");return f(),g("div",{class:"doc",style:_(d.wrapperStyle)},[n("div",{style:_(d.contentStyle)},[l(y,{"relative-url":"demo/pages/docs/import-on-demand/zhCN/index.md",text:"按需引入（Tree Shaking）"}),l(p,null,{default:e(()=>a[0]||(a[0]=[s("Naive UI 支持 tree shaking，组件、语言、主题均可 tree-shaking。")])),_:1}),l(p,null,{default:e(()=>a[1]||(a[1]=[s("默认情况组件主题为亮色，语言为英文，无需额外导入。")])),_:1}),l(p,null,{default:e(()=>[a[3]||(a[3]=s("了解更多关于主题设定的信息，参见")),l(w,{to:"customize-theme",custom:""},{default:e(({navigate:b,href:N})=>[l(v,{href:N,onClick:b},{default:e(()=>a[2]||(a[2]=[s("调整主题")])),_:2},1032,["href","onClick"])]),_:1}),a[4]||(a[4]=s("。"))]),_:1}),l(h,{id:"手动引入"},{default:e(()=>a[5]||(a[5]=[s("手动引入")])),_:1}),l(c,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:e(()=>[l(r,{"x-scrollable":"","content-style":"padding: 16px;"},{default:e(()=>[l(o,null,{default:e(()=>a[6]||(a[6]=[n("pre",null,[n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"script"),s(">")]),n("span",{class:"language-javascript"},[s(`
  `),n("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vue'"),s(`
  `),n("span",{class:"hljs-keyword"},"import"),s(" { "),n("span",{class:"hljs-title class_"},"NConfigProvider"),s(", "),n("span",{class:"hljs-title class_"},"NInput"),s(", "),n("span",{class:"hljs-title class_"},"NDatePicker"),s(", "),n("span",{class:"hljs-title class_"},"NSpace"),s(" } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'naive-ui'"),s(`
  `),n("span",{class:"hljs-comment"},"// theme"),s(`
  `),n("span",{class:"hljs-keyword"},"import"),s(" { createTheme, inputDark, datePickerDark } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'naive-ui'"),s(`
  `),n("span",{class:"hljs-comment"},"// locale & dateLocale"),s(`
  `),n("span",{class:"hljs-keyword"},"import"),s(" { zhCN, dateZhCN } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),n("span",{class:"hljs-keyword"},"export"),s(),n("span",{class:"hljs-keyword"},"default"),s(),n("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),n("span",{class:"hljs-attr"},"components"),s(`: {
      `),n("span",{class:"hljs-title class_"},"NConfigProvider"),s(`,
      `),n("span",{class:"hljs-title class_"},"NInput"),s(`,
      `),n("span",{class:"hljs-title class_"},"NDatePicker"),s(`,
      `),n("span",{class:"hljs-title class_"},"NSpace"),s(`
    },
    `),n("span",{class:"hljs-title function_"},"setup"),s("("),n("span",{class:"hljs-params"}),s(`) {
      `),n("span",{class:"hljs-keyword"},"return"),s(` {
        `),n("span",{class:"hljs-attr"},"darkTheme"),s(": "),n("span",{class:"hljs-title function_"},"createTheme"),s(`([inputDark, datePickerDark]),
        zhCN,
        dateZhCN
      }
    }
  })
`)]),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-config-provider"),s(),n("span",{class:"hljs-attr"},":theme"),s("="),n("span",{class:"hljs-string"},'"darkTheme"'),s(),n("span",{class:"hljs-attr"},":locale"),s("="),n("span",{class:"hljs-string"},'"zhCN"'),s(),n("span",{class:"hljs-attr"},":date-locale"),s("="),n("span",{class:"hljs-string"},'"dateZhCN"'),s(">")]),s(`
    `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-space"),s(),n("span",{class:"hljs-attr"},"vertical"),s(">")]),s(`
      `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-input"),s(" />")]),s(`
      `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-date-picker"),s(" />")]),s(`
    `),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"n-space"),s(">")]),s(`
  `),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"style"),s(">")]),n("span",{class:"language-css"},[s(`
  `),n("span",{class:"hljs-selector-tag"},"body"),s(` {
    `),n("span",{class:"hljs-attribute"},"background"),s(`: black;
  }
`)]),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"style"),s(">")])],-1)])),_:1})]),_:1})]),_:1}),l(h,{id:"自动引入"},{default:e(()=>a[7]||(a[7]=[s("自动引入")])),_:1}),l(p,null,{default:e(()=>[a[9]||(a[9]=s("可以使用 ")),l(m,{code:""},{default:e(()=>a[8]||(a[8]=[s("unplugin-auto-import")])),_:1}),a[10]||(a[10]=s(" 插件来自动导入 API。"))]),_:1}),l(p,null,{default:e(()=>[a[12]||(a[12]=s("如果使用模板方式进行开发，可以使用 ")),l(m,{code:""},{default:e(()=>a[11]||(a[11]=[s("unplugin-vue-components")])),_:1}),a[13]||(a[13]=s(" 插件来按需自动加载组件，插件会自动解析模板中的使用到的组件，并导入组件。"))]),_:1}),l(c,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:e(()=>[l(r,{"x-scrollable":"","content-style":"padding: 16px;"},{default:e(()=>[l(o,null,{default:e(()=>a[14]||(a[14]=[n("pre",null,[n("span",{class:"hljs-keyword"},"import"),s(" vue "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'@vitejs/plugin-vue'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(),n("span",{class:"hljs-title class_"},"AutoImport"),s(),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'unplugin-auto-import/vite'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(" { "),n("span",{class:"hljs-title class_"},"NaiveUiResolver"),s(" } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'unplugin-vue-components/resolvers'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(),n("span",{class:"hljs-title class_"},"Components"),s(),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'unplugin-vue-components/vite'"),s(`
`),n("span",{class:"hljs-comment"},"// vite.config.ts"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(" { defineConfig } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vite'"),s(`

`),n("span",{class:"hljs-comment"},"// https://vitejs.dev/config/"),s(`
`),n("span",{class:"hljs-keyword"},"export"),s(),n("span",{class:"hljs-keyword"},"default"),s(),n("span",{class:"hljs-title function_"},"defineConfig"),s(`({
  `),n("span",{class:"hljs-attr"},"plugins"),s(`: [
    `),n("span",{class:"hljs-title function_"},"vue"),s(`(),
    `),n("span",{class:"hljs-title class_"},"AutoImport"),s(`({
      `),n("span",{class:"hljs-attr"},"imports"),s(`: [
        `),n("span",{class:"hljs-string"},"'vue'"),s(`,
        {
          `),n("span",{class:"hljs-string"},"'naive-ui'"),s(`: [
            `),n("span",{class:"hljs-string"},"'useDialog'"),s(`,
            `),n("span",{class:"hljs-string"},"'useMessage'"),s(`,
            `),n("span",{class:"hljs-string"},"'useNotification'"),s(`,
            `),n("span",{class:"hljs-string"},"'useLoadingBar'"),s(`
          ]
        }
      ]
    }),
    `),n("span",{class:"hljs-title class_"},"Components"),s(`({
      `),n("span",{class:"hljs-attr"},"resolvers"),s(": ["),n("span",{class:"hljs-title class_"},"NaiveUiResolver"),s(`()]
    })
  ]
})`)],-1)])),_:1})]),_:1})]),_:1}),l(h,{id:"按需全局安装组件（手动）"},{default:e(()=>a[15]||(a[15]=[s("按需全局安装组件（手动）")])),_:1}),l(c,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:e(()=>[l(r,{"x-scrollable":"","content-style":"padding: 16px;"},{default:e(()=>[l(o,null,{default:e(()=>a[16]||(a[16]=[n("pre",null,[n("span",{class:"hljs-keyword"},"import"),s(` {
  `),n("span",{class:"hljs-comment"},"// create naive ui"),s(`
  create,
  `),n("span",{class:"hljs-comment"},"// component"),s(`
  `),n("span",{class:"hljs-title class_"},"NButton"),s(`
} `),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'naive-ui'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vue'"),s(`

`),n("span",{class:"hljs-keyword"},"const"),s(" naive = "),n("span",{class:"hljs-title function_"},"create"),s(`({
  `),n("span",{class:"hljs-attr"},"components"),s(": ["),n("span",{class:"hljs-title class_"},"NButton"),s(`]
})

`),n("span",{class:"hljs-keyword"},"const"),s(" app = "),n("span",{class:"hljs-title function_"},"createApp"),s(`()
app.`),n("span",{class:"hljs-title function_"},"use"),s("(naive)")],-1)])),_:1})]),_:1})]),_:1}),l(p,null,{default:e(()=>a[17]||(a[17]=[s("安装后，你可以这样在 SFC 中使用你安装的组件。")])),_:1}),l(c,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:e(()=>[l(r,{"x-scrollable":"","content-style":"padding: 16px;"},{default:e(()=>[l(o,null,{default:e(()=>a[18]||(a[18]=[n("pre",null,[n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"n-button"),s(">")]),s("naive-ui"),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"n-button"),s(">")]),s(`
`),n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"template"),s(">")])],-1)])),_:1})]),_:1})]),_:1})],4),d.showAnchor?(f(),g("div",I,[l(x,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[l(u,{title:"手动引入",href:"#手动引入"}),l(u,{title:"自动引入",href:"#自动引入"}),l(u,{title:"按需全局安装组件（手动）",href:"#按需全局安装组件（手动）"})]),_:1})])):S("",!0)],4)}const V=C(z,[["render",B]]);export{V as default};
