import{r as o,R as n}from"./index-CTjT7uj6.js";import{q as u}from"./index-C_Tnvy0I.js";import{r as l}from"./plugin-BTKdjWkq.js";import{d as h}from"./index-DXJrW9ju.js";import{u as f}from"./useRouteRef-G389X3lg.js";import{m as d}from"./makeStyles-DFHNDtjR.js";import{SearchBarBase as y}from"./SearchBar-56EzJGHb.js";import"./iframe-BA_2Hnq-.js";import"../sb-preview/runtime.js";import"./ApiRef-BSBwTmJJ.js";import"./api-CKDuuaL7.js";import"./appWrappers-CT26PT20.js";import"./interopRequireDefault-BbjLfwJi.js";import"./createSvgIcon-s1DURs_u.js";import"./capitalize-CDPu30qc.js";import"./defaultTheme-CzJIUhLY.js";import"./withStyles-Cy0w16fh.js";import"./hoist-non-react-statics.cjs-yZcCaz5O.js";import"./useControlled-CogIeAPD.js";import"./index-QA7F3UF1.js";import"./createSvgIcon-ErQpyllY.js";import"./isMuiElement-Cb6QZSLO.js";import"./unstable_useId-B3Hiq1YI.js";import"./MockTranslationApi-Bm0rhTQl.js";import"./index-CFaqwFgm.js";import"./classCallCheck-BNzALLS0.js";import"./inherits-Ax9O35oZ.js";import"./toArray-BIgjzDMT.js";import"./TranslationApi-eOxINumg.js";import"./ConfigApi-DBUUc3nU.js";import"./useAnalytics-DTrkS1Gy.js";import"./WebStorage-D5Fgivzj.js";import"./useAsync-CXA3qup_.js";import"./useMountedState-DkESzBh4.js";import"./componentData-CM4hSmEF.js";import"./mapValues-r4uG88u0.js";import"./toString-C6iK1gA3.js";import"./ApiProvider-CuNQiN7Z.js";import"./index-BRV0Se7Z.js";import"./CssBaseline-DDRFgeWI.js";import"./ThemeProvider-CVGcooNy.js";import"./jsx-runtime-Cw0GR0a5.js";import"./palettes-B20oCNII.js";import"./Plugin-BUQb664E.js";import"./Search-DezP_mrV.js";import"./useDebounce-4fqASXX_.js";import"./SearchContext-BQYqBmky.js";import"./lodash-CoGan1YB.js";import"./TextField-YyKRxugA.js";import"./FormLabel-D8pcgbzB.js";import"./formControlState-ByiNFc8I.js";import"./useFormControl-F4cJWIkJ.js";import"./InputLabel-bCDtCbdp.js";import"./Select-CyUQsmod.js";import"./react-is.production.min-D0tnNtx9.js";import"./useTheme-C1RDaILZ.js";import"./Popover-sv14Y19J.js";import"./Modal-SXLhKrl2.js";import"./Portal-DHXjgkAG.js";import"./Paper-BK9DXOUE.js";import"./Grow-SXlwBtiL.js";import"./utils-Bbz8jn0C.js";import"./TransitionGroupContext-BtzQ-Cv7.js";import"./List-DYtqLDXv.js";import"./ListContext-DydK1sOh.js";import"./InputAdornment-r5A7I09D.js";import"./Typography-DtBgvzFq.js";import"./IconButton-M_kcka7o.js";import"./ButtonBase-DWNP_al0.js";import"./Button-C0UHdKih.js";const R=()=>{const r=f(l),t=h();return o.useCallback(({query:i})=>{const m=u.stringify({query:i},{addQueryPrefix:!0});t(`${r()}${m}`)},[t,r])},S=d({searchBarRoot:{fontSize:"1.5em"},searchBarOutline:{border:"1px solid #555",borderRadius:"6px"}}),g=r=>{var a;const t=S(r),[i,m]=o.useState(""),e=o.useRef(null),p=R(),c=o.useCallback(()=>{var s;p({query:((s=e.current)==null?void 0:s.value)??""})},[p]);return n.createElement(y,{value:i,onSubmit:c,onChange:m,inputProps:{ref:e},InputProps:{...r.InputProps,classes:{root:t.searchBarRoot,notchedOutline:t.searchBarOutline,...(a=r.InputProps)==null?void 0:a.classes}},...r})};g.__docgenInfo={description:"The search bar created specifically for the composable home page.",methods:[],displayName:"HomePageSearchBar"};export{g as HomePageSearchBar};
