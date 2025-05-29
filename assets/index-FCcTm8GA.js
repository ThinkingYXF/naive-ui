import{_ as F,c as b,o as k,a as l,b as N,d as a,w as t,n as w,u as B,e as P,f as T,g as G,r,h as s}from"./index-DK-O6LKg.js";const M={components:{},setup(){const u=B(),n=P(()=>!u.value),f=u;return{showAnchor:n,displayMode:G(),wrapperStyle:T(()=>f.value?"padding: 16px 16px 24px 16px;":"display: flex; flex-wrap: nowrap; padding: 32px 24px 56px 56px;"),contentStyle:T(()=>n.value?"width: calc(100% - 228px); margin-right: 36px;":"width: 100%; padding-right: 12px;"),url:"demo/pages/docs/customize-theme/zhCN/index.md"}}},I={key:0,style:{width:"192px"}};function z(u,n,f,h,V,E){const C=r("edit-on-github-header"),e=r("n-text"),p=r("n-p"),v=r("n-a"),y=r("router-link"),o=r("n-h2"),i=r("n-code"),j=r("n-scrollbar"),m=r("n-card"),x=r("n-li"),O=r("n-ol"),d=r("n-anchor-link"),S=r("n-anchor");return k(),b("div",{class:"doc",style:w(h.wrapperStyle)},[l("div",{style:w(h.contentStyle)},[a(C,{"relative-url":"demo/pages/docs/customize-theme/zhCN/index.md",text:"调整主题"}),a(p,null,{default:t(()=>[n[1]||(n[1]=s("Naive UI 通过使用 ")),a(e,{code:""},{default:t(()=>n[0]||(n[0]=[s("n-config-provider")])),_:1}),n[2]||(n[2]=s(" 调整主题。"))]),_:1}),a(p,null,{default:t(()=>n[3]||(n[3]=[s("默认情况下所有组件均为亮色主题，无需任何配置。")])),_:1}),a(p,null,{default:t(()=>[n[6]||(n[6]=s("了解更多关于 ")),a(e,{code:""},{default:t(()=>n[4]||(n[4]=[s("n-config-provider")])),_:1}),n[7]||(n[7]=s(" 的信息，参见 ")),a(y,{to:"../components/config-provider",custom:""},{default:t(({navigate:c,href:g})=>[a(v,{href:g,onClick:c},{default:t(()=>n[5]||(n[5]=[s("全局化配置")])),_:2},1032,["href","onClick"])]),_:1}),n[8]||(n[8]=s("。"))]),_:1}),a(o,{id:"使用暗色主题"},{default:t(()=>n[9]||(n[9]=[s("使用暗色主题")])),_:1}),a(p,null,{default:t(()=>[n[13]||(n[13]=s("将 ")),a(e,{code:""},{default:t(()=>n[10]||(n[10]=[s("n-config-provider")])),_:1}),n[14]||(n[14]=s(" 的 ")),a(e,{code:""},{default:t(()=>n[11]||(n[11]=[s("theme")])),_:1}),n[15]||(n[15]=s(" 设为从 naive-ui 导入的 ")),a(e,{code:""},{default:t(()=>n[12]||(n[12]=[s("darkTheme")])),_:1}),n[16]||(n[16]=s(" 来设定暗色主题。"))]),_:1}),a(p,null,{default:t(()=>[n[19]||(n[19]=s("若 ")),a(e,{code:""},{default:t(()=>n[17]||(n[17]=[s("theme")])),_:1}),n[20]||(n[20]=s(" 为 ")),a(e,{code:""},{default:t(()=>n[18]||(n[18]=[s("undefined")])),_:1}),n[21]||(n[21]=s(" 则不会影响内部组件的主题。"))]),_:1}),a(m,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[a(j,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[a(i,null,{default:t(()=>n[22]||(n[22]=[l("pre",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"n-config-provider"),s(),l("span",{class:"hljs-attr"},":theme"),s("="),l("span",{class:"hljs-string"},'"darkTheme"'),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"app"),s(" />")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(">")]),l("span",{class:"language-javascript"},[s(`
  `),l("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`
  `),l("span",{class:"hljs-keyword"},"import"),s(" { darkTheme } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),l("span",{class:"hljs-keyword"},"export"),s(),l("span",{class:"hljs-keyword"},"default"),s(),l("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),l("span",{class:"hljs-title function_"},"setup"),s("("),l("span",{class:"hljs-params"}),s(`) {
      `),l("span",{class:"hljs-keyword"},"return"),s(` {
        darkTheme
      }
    }
  })
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")])],-1)])),_:1})]),_:1})]),_:1}),a(o,{id:"获取主题变量"},{default:t(()=>n[23]||(n[23]=[s("获取主题变量")])),_:1}),a(p,null,{default:t(()=>[n[27]||(n[27]=s("无论是默认的亮色主题(")),a(e,{code:""},{default:t(()=>n[24]||(n[24]=[s("lightTheme")])),_:1}),n[28]||(n[28]=s(")，还是修改后的暗色主题(")),a(e,{code:""},{default:t(()=>n[25]||(n[25]=[s("darkTheme")])),_:1}),n[29]||(n[29]=s(")，亦或我们通过调整得到的自定义主题，在该主题生效范围内的组件中都可以通过 ")),a(y,{to:"./theme#use-theme-vars",custom:""},{default:t(({navigate:c,href:g})=>[a(v,{href:g,onClick:c},{default:t(()=>n[26]||(n[26]=[s("useThemeVars")])),_:2},1032,["href","onClick"])]),_:1}),n[30]||(n[30]=s(" 来获取主题变量。"))]),_:1}),a(o,{id:"调整主题变量"},{default:t(()=>n[31]||(n[31]=[s("调整主题变量")])),_:1}),a(p,null,{default:t(()=>n[32]||(n[32]=[s("你不需要写任何 CSS（Scss、Less...）。")])),_:1}),a(p,null,{default:t(()=>n[33]||(n[33]=[s("配置的全局主题变量会对后代组件生效的主题变量覆盖。")])),_:1}),a(p,null,{default:t(()=>[n[37]||(n[37]=s("通过设定 ")),a(e,{code:""},{default:t(()=>n[34]||(n[34]=[s("n-config-provider")])),_:1}),n[38]||(n[38]=s(" 的 ")),a(e,{code:""},{default:t(()=>n[35]||(n[35]=[s("theme-overrides")])),_:1}),n[39]||(n[39]=s(" 来调整主题变量。naive-ui 导出了 ")),a(e,{code:""},{default:t(()=>n[36]||(n[36]=[s("GlobalThemeOverrides")])),_:1}),n[40]||(n[40]=s(" 类型帮助你定义主题。"))]),_:1}),a(p,null,{default:t(()=>[n[42]||(n[42]=s("具体可使用变量请参考 ")),a(e,{code:""},{default:t(()=>n[41]||(n[41]=[s("GlobalThemeOverrides")])),_:1}),n[43]||(n[43]=s(" 类型提示。"))]),_:1}),a(p,null,{default:t(()=>n[44]||(n[44]=[s("如果想要查看更多的主题变量，可在 Naive UI 主页的右下角的 edit 按钮查看。")])),_:1}),a(p,null,{default:t(()=>n[45]||(n[45]=[s("可以修改对应的主题变量，导出后可以拿到 themeOverrides 对象。")])),_:1}),a(m,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[a(j,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[a(i,null,{default:t(()=>n[46]||(n[46]=[l("pre",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(">")]),l("span",{class:"language-javascript"},[s(`
  `),l("span",{class:"hljs-keyword"},"import"),s(" { "),l("span",{class:"hljs-title class_"},"NConfigProvider"),s(" } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),l("span",{class:"hljs-comment"},[s(`/**
   * js 文件下使用这个做类型提示
   * `),l("span",{class:"hljs-doctag"},"@type"),s(` import('naive-ui').GlobalThemeOverrides
   */`)]),s(`
  `),l("span",{class:"hljs-keyword"},"const"),s(` themeOverrides = {
    `),l("span",{class:"hljs-attr"},"common"),s(`: {
      `),l("span",{class:"hljs-attr"},"primaryColor"),s(": "),l("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),l("span",{class:"hljs-title class_"},"Button"),s(`: {
      `),l("span",{class:"hljs-attr"},"textColor"),s(": "),l("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),l("span",{class:"hljs-title class_"},"Select"),s(`: {
      `),l("span",{class:"hljs-attr"},"peers"),s(`: {
        `),l("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
          `),l("span",{class:"hljs-attr"},"textColor"),s(": "),l("span",{class:"hljs-string"},"'#FF0000'"),s(`
        }
      }
    }
    `),l("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),l("span",{class:"hljs-comment"},"// ..."),s(`
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"n-config-provider"),s(),l("span",{class:"hljs-attr"},":theme-overrides"),s("="),l("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")])],-1)])),_:1})]),_:1})]),_:1}),a(o,{id:"TS-下使用主题变量"},{default:t(()=>n[47]||(n[47]=[s("TS 下使用主题变量")])),_:1}),a(p,null,{default:t(()=>n[48]||(n[48]=[s("如果你正在使用 ts 写代码，这块比较适合你。")])),_:1}),a(m,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[a(j,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[a(i,null,{default:t(()=>n[49]||(n[49]=[l("pre",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"lang"),s("="),l("span",{class:"hljs-string"},'"ts"'),s(">")]),l("span",{class:"language-javascript"},[s(`
  `),l("span",{class:"hljs-keyword"},"import"),s(" { "),l("span",{class:"hljs-title class_"},"NConfigProvider"),s(", "),l("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(" } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),l("span",{class:"hljs-keyword"},"const"),s(),l("span",{class:"hljs-attr"},"themeOverrides"),s(": "),l("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(` = {
    `),l("span",{class:"hljs-attr"},"common"),s(`: {
      `),l("span",{class:"hljs-attr"},"primaryColor"),s(": "),l("span",{class:"hljs-string"},"'#FF0000'"),s(`
    },
    `),l("span",{class:"hljs-title class_"},"Button"),s(`: {
      `),l("span",{class:"hljs-attr"},"textColor"),s(": "),l("span",{class:"hljs-string"},"'#FF0000'"),s(`
    }
  }

  `),l("span",{class:"hljs-comment"},"// ..."),s(`
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"n-config-provider"),s(),l("span",{class:"hljs-attr"},":theme-overrides"),s("="),l("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")])],-1)])),_:1})]),_:1})]),_:1}),a(o,{id:"调整组件主题变量"},{default:t(()=>n[50]||(n[50]=[s("调整组件主题变量")])),_:1}),a(p,null,{default:t(()=>n[51]||(n[51]=[s("组件主题变量使用方法同全局主题变量使用方法，并且组件主题变量会覆盖全局主题变量。")])),_:1}),a(m,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[a(j,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[a(i,null,{default:t(()=>n[52]||(n[52]=[l("pre",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"lang"),s("="),l("span",{class:"hljs-string"},'"ts"'),s(">")]),l("span",{class:"language-javascript"},[s(`
  `),l("span",{class:"hljs-keyword"},"import"),s(" { "),l("span",{class:"hljs-title class_"},"SelectProps"),s(", "),l("span",{class:"hljs-title class_"},"ButtonProps"),s(" } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'naive-ui'"),s(`

  type `),l("span",{class:"hljs-title class_"},"SelectThemeOverrides"),s(" = "),l("span",{class:"hljs-title class_"},"NonNullable"),s("<"),l("span",{class:"hljs-title class_"},"SelectProps"),s("["),l("span",{class:"hljs-string"},"'themeOverrides'"),s(`]>
  type `),l("span",{class:"hljs-title class_"},"ButtonThemeOverrides"),s(" = "),l("span",{class:"hljs-title class_"},"NonNullable"),s("<"),l("span",{class:"hljs-title class_"},"ButtonProps"),s("["),l("span",{class:"hljs-string"},"'themeOverrides'"),s(`]>

  `),l("span",{class:"hljs-keyword"},"const"),s(),l("span",{class:"hljs-attr"},"selectThemeOverrides"),s(": "),l("span",{class:"hljs-title class_"},"SelectThemeOverrides"),s(` = {
    `),l("span",{class:"hljs-attr"},"menuBoxShadow"),s(`:
      `),l("span",{class:"hljs-string"},"'0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)'"),s(`,
    `),l("span",{class:"hljs-attr"},"peers"),s(`: {
      `),l("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
        `),l("span",{class:"hljs-attr"},"textColor"),s(": "),l("span",{class:"hljs-string"},"'#FF0000'"),s(`,
        `),l("span",{class:"hljs-attr"},"heightMedium"),s(": "),l("span",{class:"hljs-string"},"'42px'"),s(`
      }
    }
  }
  `),l("span",{class:"hljs-keyword"},"const"),s(),l("span",{class:"hljs-attr"},"buttonThemeOverrides"),s(": "),l("span",{class:"hljs-title class_"},"ButtonThemeOverrides"),s(` = {
    `),l("span",{class:"hljs-attr"},"heightMedium"),s(": "),l("span",{class:"hljs-string"},"'40px'"),s(`,
    `),l("span",{class:"hljs-attr"},"textColor"),s(": "),l("span",{class:"hljs-string"},"'rgba(24, 127, 231, 1)'"),s(`
  }

  `),l("span",{class:"hljs-comment"},"// ..."),s(`
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"n-select"),s(`
    `),l("span",{class:"hljs-attr"},"v-model:value"),s("="),l("span",{class:"hljs-string"},'"value"'),s(`
    `),l("span",{class:"hljs-attr"},":options"),s("="),l("span",{class:"hljs-string"},'"options"'),s(`
    `),l("span",{class:"hljs-attr"},":theme-overrides"),s("="),l("span",{class:"hljs-string"},'"selectThemeOverrides"'),s(`
  />`)]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"n-button"),s(),l("span",{class:"hljs-attr"},":theme-overrides"),s("="),l("span",{class:"hljs-string"},'"buttonThemeOverrides"'),s(">")]),s("theme"),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"n-button"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")])],-1)])),_:1})]),_:1})]),_:1}),a(o,{id:"不同主题下调整主题变量"},{default:t(()=>n[53]||(n[53]=[s("不同主题下调整主题变量")])),_:1}),a(p,null,{default:t(()=>n[54]||(n[54]=[s("如果你想要在亮色和暗色上同时使用不同的主题变量，可以来看看这个。")])),_:1}),a(m,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[a(j,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[a(i,null,{default:t(()=>n[55]||(n[55]=[l("pre",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(">")]),l("span",{class:"language-javascript"},[s(`
  `),l("span",{class:"hljs-keyword"},"import"),s(" { "),l("span",{class:"hljs-title class_"},"NConfigProvider"),s(", darkTheme } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),l("span",{class:"hljs-comment"},[s(`/**
   * `),l("span",{class:"hljs-doctag"},"@type"),s(` import('naive-ui').GlobalThemeOverrides
   */`)]),s(`
  `),l("span",{class:"hljs-keyword"},"const"),s(` lightThemeOverrides = {
    `),l("span",{class:"hljs-attr"},"common"),s(`: {
      `),l("span",{class:"hljs-attr"},"primaryColor"),s(": "),l("span",{class:"hljs-string"},"'#000000'"),s(`
    }
    `),l("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),l("span",{class:"hljs-keyword"},"const"),s(` darkThemeOverrides = {
    `),l("span",{class:"hljs-attr"},"common"),s(`: {
      `),l("span",{class:"hljs-attr"},"primaryColor"),s(": "),l("span",{class:"hljs-string"},"'#FFFFFF'"),s(`
    }
    `),l("span",{class:"hljs-comment"},"// ..."),s(`
  }

  `),l("span",{class:"hljs-keyword"},"const"),s(" theme = "),l("span",{class:"hljs-literal"},"null"),s(`
  `),l("span",{class:"hljs-comment"},"// ..."),s(`
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"n-config-provider"),s(`
    `),l("span",{class:"hljs-attr"},":theme"),s("="),l("span",{class:"hljs-string"},'"theme"'),s(`
    `),l("span",{class:"hljs-attr"},":theme-overrides"),s("="),l("span",{class:"hljs-string"},'"theme === null ? lightThemeOverrides : darkThemeOverrides"'),s(`
  >`)]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")])],-1)])),_:1})]),_:1})]),_:1}),a(o,{id:"使用-peers-主题变量"},{default:t(()=>n[56]||(n[56]=[s("使用 peers 主题变量")])),_:1}),a(p,null,{default:t(()=>n[57]||(n[57]=[s("很多时候组件内部都会复用另一个组件，因此出现了 peers 的主题变量。")])),_:1}),a(p,null,{default:t(()=>[n[59]||(n[59]=s("peers 相关的主题变量还没有暴露，使用 ")),a(e,{code:""},{default:t(()=>n[58]||(n[58]=[s("GlobalThemeOverrides")])),_:1}),n[60]||(n[60]=s(" 可以查看对应组件的 peers 变量。"))]),_:1}),a(p,null,{default:t(()=>n[61]||(n[61]=[s("具体哪些可使用的 peers 后续会更新。")])),_:1}),a(m,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[a(j,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[a(i,null,{default:t(()=>n[62]||(n[62]=[l("pre",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(),l("span",{class:"hljs-attr"},"lang"),s("="),l("span",{class:"hljs-string"},'"ts"'),s(">")]),l("span",{class:"language-javascript"},[s(`
  `),l("span",{class:"hljs-keyword"},"import"),s(" { "),l("span",{class:"hljs-title class_"},"NConfigProvider"),s(", "),l("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(" } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),l("span",{class:"hljs-keyword"},"const"),s(),l("span",{class:"hljs-attr"},"themeOverrides"),s(": "),l("span",{class:"hljs-title class_"},"GlobalThemeOverrides"),s(` = {
    `),l("span",{class:"hljs-title class_"},"Select"),s(`: {
      `),l("span",{class:"hljs-attr"},"peers"),s(`: {
        `),l("span",{class:"hljs-title class_"},"InternalSelection"),s(`: {
          `),l("span",{class:"hljs-attr"},"textColor"),s(": "),l("span",{class:"hljs-string"},"'#FF0000'"),s(`
        },
        `),l("span",{class:"hljs-title class_"},"InternalSelectMenu"),s(`: {
          `),l("span",{class:"hljs-attr"},"borderRadius"),s(": "),l("span",{class:"hljs-string"},"'6px'"),s(`
        }
      }
    },
    `),l("span",{class:"hljs-title class_"},"DataTable"),s(`: {
      `),l("span",{class:"hljs-attr"},"paginationMargin"),s(": "),l("span",{class:"hljs-string"},"'40px 0 0 0'"),s(`,
      `),l("span",{class:"hljs-attr"},"peers"),s(`: {
        `),l("span",{class:"hljs-title class_"},"Empty"),s(`: {
          `),l("span",{class:"hljs-attr"},"textColor"),s(": "),l("span",{class:"hljs-string"},"'#ccc'"),s(`
        },
        `),l("span",{class:"hljs-title class_"},"Pagination"),s(`: {
          `),l("span",{class:"hljs-attr"},"itemTextColor"),s(": "),l("span",{class:"hljs-string"},"'#ccc'"),s(`
        }
      }
    }
    `),l("span",{class:"hljs-comment"},"// ..."),s(`
  }
  `),l("span",{class:"hljs-comment"},"// ..."),s(`
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"n-config-provider"),s(),l("span",{class:"hljs-attr"},":theme-overrides"),s("="),l("span",{class:"hljs-string"},'"themeOverrides"'),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"my-app"),s(" />")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")])],-1)])),_:1})]),_:1})]),_:1}),a(o,{id:"同步-body-元素的样式"},{default:t(()=>n[63]||(n[63]=[s("同步 body 元素的样式")])),_:1}),a(p,null,{default:t(()=>[n[65]||(n[65]=s("出于以下原因，你可能需要将某些样式设定在 ")),a(e,{code:""},{default:t(()=>n[64]||(n[64]=[s("document.body")])),_:1}),n[66]||(n[66]=s(" 上。"))]),_:1}),a(O,null,{default:t(()=>[a(x,null,{default:t(()=>n[67]||(n[67]=[s("naive-ui 会设定一些非响应式的全局样式（例如字体），它们在默认状况下工作良好，但是不能响应主题的变化。")])),_:1}),a(x,null,{default:t(()=>[a(e,{code:""},{default:t(()=>n[68]||(n[68]=[s("n-config-provider")])),_:1}),n[69]||(n[69]=s(" 无法将全局样式同步到它以外的地方（例如 body 背景色）。"))]),_:1})]),_:1}),a(p,null,{default:t(()=>[n[74]||(n[74]=s("通过使用 ")),a(e,{code:""},{default:t(()=>n[70]||(n[70]=[s("n-global-style")])),_:1}),n[75]||(n[75]=s(" 可以将常见的全局样式同步到 body 上。在下面的例子中，")),a(e,{code:""},{default:t(()=>n[71]||(n[71]=[s("n-global-style")])),_:1}),n[76]||(n[76]=s(" 会将 ")),a(e,{code:""},{default:t(()=>n[72]||(n[72]=[s("n-config-provider")])),_:1}),n[77]||(n[77]=s(" 提供的主题同步到 ")),a(e,{code:""},{default:t(()=>n[73]||(n[73]=[s("document.body")])),_:1}),n[78]||(n[78]=s(" 上。"))]),_:1}),a(m,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[a(j,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[a(i,null,{default:t(()=>n[79]||(n[79]=[l("pre",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"app"),s(" />")]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"n-global-style"),s(" />")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"n-config-provider"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")])],-1)])),_:1})]),_:1})]),_:1}),a(o,{id:"主题编辑器"},{default:t(()=>n[80]||(n[80]=[s("主题编辑器")])),_:1}),a(p,null,{default:t(()=>[n[82]||(n[82]=s("naive-ui 提供主题编辑器帮助你方便的编辑主题并导出对应配置。它可以被嵌套于 ")),a(e,{code:""},{default:t(()=>n[81]||(n[81]=[s("n-config-provider")])),_:1}),n[83]||(n[83]=s(" 中。"))]),_:1}),a(p,null,{default:t(()=>[n[85]||(n[85]=s("主题编辑器不包含在全局安装中（")),a(e,{code:""},{default:t(()=>n[84]||(n[84]=[s("app.use(naive)")])),_:1}),n[86]||(n[86]=s("）。你需要显式引入来使用它。"))]),_:1}),a(m,{embedded:"",bordered:!1,class:"md-card","content-style":"padding: 0;"},{default:t(()=>[a(j,{"x-scrollable":"","content-style":"padding: 16px;"},{default:t(()=>[a(i,null,{default:t(()=>n[87]||(n[87]=[l("pre",null,[l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`
  `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"n-theme-editor"),s(">")]),s(`
    `),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"app"),s(" />")]),s(`
  `),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"n-theme-editor"),s(">")]),s(`
`),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"template"),s(">")]),s(`

`),l("span",{class:"hljs-tag"},[s("<"),l("span",{class:"hljs-name"},"script"),s(">")]),l("span",{class:"language-javascript"},[s(`
  `),l("span",{class:"hljs-keyword"},"import"),s(" { defineComponent } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'vue'"),s(`
  `),l("span",{class:"hljs-keyword"},"import"),s(" { "),l("span",{class:"hljs-title class_"},"NThemeEditor"),s(" } "),l("span",{class:"hljs-keyword"},"from"),s(),l("span",{class:"hljs-string"},"'naive-ui'"),s(`

  `),l("span",{class:"hljs-keyword"},"export"),s(),l("span",{class:"hljs-keyword"},"default"),s(),l("span",{class:"hljs-title function_"},"defineComponent"),s(`({
    `),l("span",{class:"hljs-attr"},"components"),s(`: {
      `),l("span",{class:"hljs-title class_"},"NThemeEditor"),s(`
    }
  })
`)]),l("span",{class:"hljs-tag"},[s("</"),l("span",{class:"hljs-name"},"script"),s(">")])],-1)])),_:1})]),_:1})]),_:1})],4),h.showAnchor?(k(),b("div",I,[a(S,{"internal-scrollable":"",bound:16,type:"block",style:{width:"192px",position:"sticky",top:"32px","max-height":"calc(100vh - 32px - 64px)",height:"auto"},"offset-target":"#doc-layout","ignore-gap":!0},{default:t(()=>[a(d,{title:"使用暗色主题",href:"#使用暗色主题"}),a(d,{title:"获取主题变量",href:"#获取主题变量"}),a(d,{title:"调整主题变量",href:"#调整主题变量"}),a(d,{title:"TS 下使用主题变量",href:"#TS-下使用主题变量"}),a(d,{title:"调整组件主题变量",href:"#调整组件主题变量"}),a(d,{title:"不同主题下调整主题变量",href:"#不同主题下调整主题变量"}),a(d,{title:"使用 peers 主题变量",href:"#使用-peers-主题变量"}),a(d,{title:"同步 body 元素的样式",href:"#同步-body-元素的样式"}),a(d,{title:"主题编辑器",href:"#主题编辑器"})]),_:1})])):N("",!0)],4)}const A=F(M,[["render",z]]);export{A as default};
