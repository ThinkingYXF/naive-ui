import{_ as C,c as g,o as _,a as n,b as N,d as t,w as e,n as x,u as P,e as A,f as v,g as V,r as a,h as s}from"./index-DK-O6LKg.js";const B={components:{},setup(){const h=P(),l=A(()=>(h.value,!1)),m=h;return{showAnchor:l,displayMode:V(),wrapperStyle:v(()=>m.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:v(()=>l.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"demo/pages/docs/vitepress/zhCN/index.md"}}},M={key:0,style:{width:"192px"}};function T(h,l,m,j,D,L){const k=a("edit-on-github-header"),u=a("n-h2"),y=a("n-a"),w=a("router-link"),r=a("n-p"),p=a("n-text"),o=a("n-h3"),c=a("n-code"),i=a("n-scrollbar"),d=a("n-card"),f=a("n-anchor-link"),b=a("n-anchor");return _(),g("div",{class:"doc",style:x(j.wrapperStyle)},[n("div",{style:x(j.contentStyle)},[t(k,{"relative-url":"demo/pages/docs/vitepress/zhCN/index.md",text:"Vitepress"}),t(u,{id:"注意"},{default:e(()=>l[0]||(l[0]=[s("注意")])),_:1}),t(r,null,{default:e(()=>[l[2]||(l[2]=s("本文档涉及到 SSR，请先了解")),t(w,{to:"ssr#注意",custom:""},{default:e(({navigate:S,href:R})=>[t(y,{href:R,onClick:S},{default:e(()=>l[1]||(l[1]=[s("SSR 的注意事项")])),_:2},1032,["href","onClick"])]),_:1}),l[3]||(l[3]=s("。"))]),_:1}),t(u,{id:"例子"},{default:e(()=>l[4]||(l[4]=[s("例子")])),_:1}),t(r,null,{default:e(()=>[l[8]||(l[8]=s("这是一个使用 ")),t(p,{code:""},{default:e(()=>l[5]||(l[5]=[s("naive-ui")])),_:1}),l[9]||(l[9]=s("、")),t(p,{code:""},{default:e(()=>l[6]||(l[6]=[s("vitepress")])),_:1}),l[10]||(l[10]=s(" 的")),t(y,{href:"https://github.com/07akioni/naive-ui-vitepress-demo",target:"_blank"},{default:e(()=>l[7]||(l[7]=[s("样例")])),_:1}),l[11]||(l[11]=s("，支持 SSR。"))]),_:1}),t(r,null,{default:e(()=>l[12]||(l[12]=[s("你可以直接使用这个样例。")])),_:1}),t(u,{id:"从零开始的关键步骤"},{default:e(()=>l[13]||(l[13]=[s("从零开始的关键步骤")])),_:1}),t(r,null,{default:e(()=>l[14]||(l[14]=[s("如果你希望从头开始改造一个 vitepress 项目，遵循下列步骤")])),_:1}),t(o,{id:"0.-安装-<n-text-code>@css-render/vue3-ssr</n-text>"},{default:e(()=>[l[16]||(l[16]=s("0. 安装 ")),t(p,{code:""},{default:e(()=>l[15]||(l[15]=[s("@css-render/vue3-ssr")])),_:1})]),_:1}),t(r,null,{default:e(()=>[l[18]||(l[18]=s("确保其版本 ")),t(p,{code:""},{default:e(()=>l[17]||(l[17]=[s(">=0.15.14")])),_:1}),l[19]||(l[19]=s("。"))]),_:1}),t(d,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:e(()=>[t(i,{"x-scrollable":"","content-style":"padding: 16px;"},{default:e(()=>[t(c,null,{default:e(()=>l[20]||(l[20]=[n("pre",null,[n("span",{class:"hljs-comment"},"# npm"),s(`
npm install --save-dev @css-render/vue3-ssr

`),n("span",{class:"hljs-comment"},"# pnpm"),s(`
pnpm install --save-dev @css-render/vue3-ssr`)],-1)])),_:1})]),_:1})]),_:1}),t(o,{id:"1.-把下面的内容增加到-<n-text-code>.vitepress/theme/index.js</n-text>"},{default:e(()=>[l[22]||(l[22]=s("1. 把下面的内容增加到 ")),t(p,{code:""},{default:e(()=>l[21]||(l[21]=[s(".vitepress/theme/index.js")])),_:1})]),_:1}),t(d,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:e(()=>[t(i,{"x-scrollable":"","content-style":"padding: 16px;"},{default:e(()=>[t(c,null,{default:e(()=>l[23]||(l[23]=[n("pre",null,[n("span",{class:"hljs-comment"},"// .vitepress/theme/index.js"),s(`

`),n("span",{class:"hljs-keyword"},"import"),s(" { setup } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'@css-render/vue3-ssr'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(" { "),n("span",{class:"hljs-title class_"},"NConfigProvider"),s(" } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'naive-ui'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(" { useRoute } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vitepress'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(),n("span",{class:"hljs-title class_"},"DefaultTheme"),s(),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vitepress/theme'"),s(`
`),n("span",{class:"hljs-keyword"},"import"),s(" { defineComponent, h, inject } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vue'"),s(`

`),n("span",{class:"hljs-keyword"},"const"),s(" { "),n("span",{class:"hljs-title class_"},"Layout"),s(" } = "),n("span",{class:"hljs-title class_"},"DefaultTheme"),s(`

`),n("span",{class:"hljs-keyword"},"const"),s(),n("span",{class:"hljs-title class_"},"CssRenderStyle"),s(" = "),n("span",{class:"hljs-title function_"},"defineComponent"),s(`({
  `),n("span",{class:"hljs-title function_"},"setup"),s("("),n("span",{class:"hljs-params"}),s(`) {
    `),n("span",{class:"hljs-keyword"},"const"),s(" collect = "),n("span",{class:"hljs-title function_"},"inject"),s("("),n("span",{class:"hljs-string"},"'css-render-collect'"),s(`)
    `),n("span",{class:"hljs-keyword"},"return"),s(` {
      `),n("span",{class:"hljs-attr"},"style"),s(": "),n("span",{class:"hljs-title function_"},"collect"),s(`()
    }
  },
  `),n("span",{class:"hljs-title function_"},"render"),s("("),n("span",{class:"hljs-params"}),s(`) {
    `),n("span",{class:"hljs-keyword"},"return"),s(),n("span",{class:"hljs-title function_"},"h"),s("("),n("span",{class:"hljs-string"},"'css-render-style'"),s(`, {
      `),n("span",{class:"hljs-attr"},"innerHTML"),s(": "),n("span",{class:"hljs-variable language_"},"this"),s("."),n("span",{class:"hljs-property"},"style"),s(`
    })
  }
})

`),n("span",{class:"hljs-keyword"},"const"),s(),n("span",{class:"hljs-title class_"},"VitepressPath"),s(" = "),n("span",{class:"hljs-title function_"},"defineComponent"),s(`({
  `),n("span",{class:"hljs-title function_"},"setup"),s("("),n("span",{class:"hljs-params"}),s(`) {
    `),n("span",{class:"hljs-keyword"},"const"),s(" route = "),n("span",{class:"hljs-title function_"},"useRoute"),s(`()
    `),n("span",{class:"hljs-keyword"},"return"),s(),n("span",{class:"hljs-function"},"() =>"),s(` {
      `),n("span",{class:"hljs-keyword"},"return"),s(),n("span",{class:"hljs-title function_"},"h"),s("("),n("span",{class:"hljs-string"},"'vitepress-path'"),s(", "),n("span",{class:"hljs-literal"},"null"),s(", [route."),n("span",{class:"hljs-property"},"path"),s(`])
    }
  }
})

`),n("span",{class:"hljs-keyword"},"const"),s(),n("span",{class:"hljs-title class_"},"NaiveUIProvider"),s(" = "),n("span",{class:"hljs-title function_"},"defineComponent"),s(`({
  `),n("span",{class:"hljs-title function_"},"render"),s("("),n("span",{class:"hljs-params"}),s(`) {
    `),n("span",{class:"hljs-keyword"},"return"),s(),n("span",{class:"hljs-title function_"},"h"),s(`(
      `),n("span",{class:"hljs-title class_"},"NConfigProvider"),s(`,
      { `),n("span",{class:"hljs-attr"},"abstract"),s(": "),n("span",{class:"hljs-literal"},"true"),s(", "),n("span",{class:"hljs-attr"},"inlineThemeDisabled"),s(": "),n("span",{class:"hljs-literal"},"true"),s(` },
      {
        `),n("span",{class:"hljs-attr"},"default"),s(": "),n("span",{class:"hljs-function"},"() =>"),s(` [
          `),n("span",{class:"hljs-title function_"},"h"),s("("),n("span",{class:"hljs-title class_"},"Layout"),s(", "),n("span",{class:"hljs-literal"},"null"),s(", { "),n("span",{class:"hljs-attr"},"default"),s(": "),n("span",{class:"hljs-variable language_"},"this"),s("."),n("span",{class:"hljs-property"},"$slots"),s("."),n("span",{class:"hljs-property"},"default"),s(`?.() }),
          `),n("span",{class:"hljs-keyword"},"import"),s("."),n("span",{class:"hljs-property"},"meta"),s("."),n("span",{class:"hljs-property"},"env"),s("."),n("span",{class:"hljs-property"},"SSR"),s(" ? ["),n("span",{class:"hljs-title function_"},"h"),s("("),n("span",{class:"hljs-title class_"},"CssRenderStyle"),s("), "),n("span",{class:"hljs-title function_"},"h"),s("("),n("span",{class:"hljs-title class_"},"VitepressPath"),s(")] : "),n("span",{class:"hljs-literal"},"null"),s(`
        ]
      }
    )
  }
})

`),n("span",{class:"hljs-keyword"},"export"),s(),n("span",{class:"hljs-keyword"},"default"),s(` {
  `),n("span",{class:"hljs-attr"},"extends"),s(": "),n("span",{class:"hljs-title class_"},"DefaultTheme"),s(`,
  `),n("span",{class:"hljs-title class_"},"Layout"),s(": "),n("span",{class:"hljs-title class_"},"NaiveUIProvider"),s(`,
  `),n("span",{class:"hljs-attr"},"enhanceApp"),s(": "),n("span",{class:"hljs-function"},[s("("),n("span",{class:"hljs-params"},"{ app }"),s(") =>")]),s(` {
    `),n("span",{class:"hljs-keyword"},"if"),s(" ("),n("span",{class:"hljs-keyword"},"import"),s("."),n("span",{class:"hljs-property"},"meta"),s("."),n("span",{class:"hljs-property"},"env"),s("."),n("span",{class:"hljs-property"},"SSR"),s(`) {
      `),n("span",{class:"hljs-keyword"},"const"),s(" { collect } = "),n("span",{class:"hljs-title function_"},"setup"),s(`(app)
      app.`),n("span",{class:"hljs-title function_"},"provide"),s("("),n("span",{class:"hljs-string"},"'css-render-collect'"),s(`, collect)
    }
  }
}`)],-1)])),_:1})]),_:1})]),_:1}),t(o,{id:"2.-把下面的内容增加到-<n-text-code>.vitepress/config.mts</n-text>"},{default:e(()=>[l[25]||(l[25]=s("2. 把下面的内容增加到 ")),t(p,{code:""},{default:e(()=>l[24]||(l[24]=[s(".vitepress/config.mts")])),_:1})]),_:1}),t(d,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:e(()=>[t(i,{"x-scrollable":"","content-style":"padding: 16px;"},{default:e(()=>[t(c,null,{default:e(()=>l[26]||(l[26]=[n("pre",null,[n("span",{class:"hljs-keyword"},"import"),s(" { defineConfig } "),n("span",{class:"hljs-keyword"},"from"),s(),n("span",{class:"hljs-string"},"'vitepress'"),s(`

`),n("span",{class:"hljs-keyword"},"const"),s(),n("span",{class:"hljs-attr"},"fileAndStyles"),s(": "),n("span",{class:"hljs-title class_"},"Record"),s("<"),n("span",{class:"hljs-built_in"},"string"),s(", "),n("span",{class:"hljs-built_in"},"string"),s(`> = {}

`),n("span",{class:"hljs-keyword"},"export"),s(),n("span",{class:"hljs-keyword"},"default"),s(),n("span",{class:"hljs-title function_"},"defineConfig"),s(`({
  `),n("span",{class:"hljs-comment"},"// ..."),s(`
  `),n("span",{class:"hljs-attr"},"vite"),s(`: {
    `),n("span",{class:"hljs-attr"},"ssr"),s(`: {
      `),n("span",{class:"hljs-attr"},"noExternal"),s(": ["),n("span",{class:"hljs-string"},"'naive-ui'"),s(", "),n("span",{class:"hljs-string"},"'date-fns'"),s(", "),n("span",{class:"hljs-string"},"'vueuc'"),s(`]
    }
  },
  `),n("span",{class:"hljs-title function_"},"postRender"),s("("),n("span",{class:"hljs-params"},"context"),s(`) {
    `),n("span",{class:"hljs-keyword"},"const"),s(" styleRegex = "),n("span",{class:"hljs-regexp"},"/<css-render-style>((.|\\s)+)<\\/css-render-style>/"),s(`
    `),n("span",{class:"hljs-keyword"},"const"),s(" vitepressPathRegex = "),n("span",{class:"hljs-regexp"},"/<vitepress-path>(.+)<\\/vitepress-path>/"),s(`
    `),n("span",{class:"hljs-keyword"},"const"),s(" style = styleRegex."),n("span",{class:"hljs-title function_"},"exec"),s("(context."),n("span",{class:"hljs-property"},"content"),s(")?.["),n("span",{class:"hljs-number"},"1"),s(`]
    `),n("span",{class:"hljs-keyword"},"const"),s(" vitepressPath = vitepressPathRegex."),n("span",{class:"hljs-title function_"},"exec"),s("(context."),n("span",{class:"hljs-property"},"content"),s(")?.["),n("span",{class:"hljs-number"},"1"),s(`]
    `),n("span",{class:"hljs-keyword"},"if"),s(` (vitepressPath && style) {
      fileAndStyles[vitepressPath] = style
    }
    context.`),n("span",{class:"hljs-property"},"content"),s(" = context."),n("span",{class:"hljs-property"},"content"),s("."),n("span",{class:"hljs-title function_"},"replace"),s("(styleRegex, "),n("span",{class:"hljs-string"},"''"),s(`)
    context.`),n("span",{class:"hljs-property"},"content"),s(" = context."),n("span",{class:"hljs-property"},"content"),s("."),n("span",{class:"hljs-title function_"},"replace"),s("(vitepressPathRegex, "),n("span",{class:"hljs-string"},"''"),s(`)
  },
  `),n("span",{class:"hljs-title function_"},"transformHtml"),s("("),n("span",{class:"hljs-params"},"code, id"),s(`) {
    `),n("span",{class:"hljs-keyword"},"const"),s(" html = id."),n("span",{class:"hljs-title function_"},"split"),s("("),n("span",{class:"hljs-string"},"'/'"),s(")."),n("span",{class:"hljs-title function_"},"pop"),s(`()
    `),n("span",{class:"hljs-keyword"},"if"),s(` (!html)
      `),n("span",{class:"hljs-keyword"},"return"),s(`
    `),n("span",{class:"hljs-keyword"},"const"),s(" style = fileAndStyles["),n("span",{class:"hljs-string"},[s("`/"),n("span",{class:"hljs-subst"},"${html}"),s("`")]),s(`]
    `),n("span",{class:"hljs-keyword"},"if"),s(` (style) {
      `),n("span",{class:"hljs-keyword"},"return"),s(" code."),n("span",{class:"hljs-title function_"},"replace"),s("("),n("span",{class:"hljs-regexp"},"/<\\/head>/"),s(", "),n("span",{class:"hljs-string"},[s("`"),n("span",{class:"hljs-subst"},"${style}"),s("</head>`")]),s(`)
    }
  }
})`)],-1)])),_:1})]),_:1})]),_:1}),t(o,{id:"3.-在-markdown-文件中开始使用-naive-ui"},{default:e(()=>l[27]||(l[27]=[s("3. 在 markdown 文件中开始使用 naive-ui")])),_:1}),t(d,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:e(()=>[t(i,{"x-scrollable":"","content-style":"padding: 16px;"},{default:e(()=>[t(c,null,{default:e(()=>l[28]||(l[28]=[n("pre",null,[s(`...

`),n("span",{class:"language-xml"},[n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"script"),s(),n("span",{class:"hljs-attr"},"setup"),s(">")])]),s(`
import { NButton } from 'naive-ui'
`),n("span",{class:"language-xml"},[n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"script"),s(">")])]),s(`

`),n("span",{class:"language-xml"},[n("span",{class:"hljs-tag"},[s("<"),n("span",{class:"hljs-name"},"NButton"),s(">")])]),s("Hello World"),n("span",{class:"language-xml"},[n("span",{class:"hljs-tag"},[s("</"),n("span",{class:"hljs-name"},"NButton"),s(">")])]),s(`

...`)],-1)])),_:1})]),_:1})]),_:1})],4),j.showAnchor?(_(),g("div",M,[t(b,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:e(()=>[t(f,{title:"注意",href:"#注意"}),t(f,{title:"例子",href:"#例子"}),t(f,{title:"从零开始的关键步骤",href:"#从零开始的关键步骤"})]),_:1})])):N("",!0)],4)}const z=C(B,[["render",T]]);export{z as default};
