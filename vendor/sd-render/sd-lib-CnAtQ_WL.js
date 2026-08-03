import { ElImage as Vt, ElIcon as qe, ElDialog as Ce, ElButton as ie, ElTooltip as sl, ElForm as vt, ElFormItem as wt, ElInput as Te, ElDivider as Pa, ElDropdown as St, ElDropdownMenu as Ft, ElDropdownItem as _t, ElUpload as rl, ElPagination as Ma, ElPopover as lt, ElCol as dt, ElCheckbox as Va, ElColorPicker as dl, ElRow as Et, ElInputNumber as ea, ElText as We, ElButtonGroup as Co, ElTag as ta, ElAvatar as ul, ElTable as aa, ElTableColumn as Xe, ElSpace as Bi, ElLink as Ea, ElRate as Oi, ElScrollbar as Do, ElTimelineItem as Ni, ElCard as pl, ElAlert as la, ElTabs as ji, ElTabPane as Ui, ElSwitch as At, ElSelectV2 as Io, ElLoadingDirective as oa, ElSelect as Lt, ElOption as Bt, ElOptionGroup as Ri, ElDescriptions as $o, ElDescriptionsItem as To, ElCollapse as zi, ElCollapseItem as Hi, ElDatePicker as ml, ElTimePicker as qi, ElRadioGroup as Wi, ElRadioButton as xi, ElCarousel as Ki, ElCarouselItem as Gi, ElMenu as Yi, ElMenuItem as Ji, ElSubMenu as Xi, ElSkeleton as Qi, ElSkeletonItem as Zi, ElCascader as en, ElDatePickerPanel as tn, ElTreeV2 as an } from "element-plus/es";
import "element-plus/es/components/base/style/index";
import "element-plus/es/components/dialog/style/index";
import "element-plus/es/components/button/style/index";
import "element-plus/es/components/icon/style/index";
import "element-plus/es/components/image/style/index";
import * as ln from "vue";
import { openBlock as n, createElementBlock as v, normalizeClass as Y, createElementVNode as $, toDisplayString as A, createCommentVNode as b, defineComponent as O, ref as q, nextTick as Qt, resolveComponent as X, Fragment as L, createVNode as d, normalizeStyle as le, withCtx as r, createTextVNode as I, createBlock as h, reactive as ke, markRaw as Po, inject as R, renderList as J, resolveDynamicComponent as Ot, mergeProps as ae, toHandlers as Mo, withModifiers as j, renderSlot as re, computed as Z, watch as tt, unref as be, provide as ze, watchEffect as on, toRaw as nn, withDirectives as Ve, vShow as Vo, onMounted as xe, normalizeProps as ia, guardReactiveProps as na, createSlots as Ye, defineAsyncComponent as Eo, resolveDirective as Ao, withKeys as sn, onUnmounted as Lo, useAttrs as rn, useId as dn, onBeforeUnmount as Bo, Teleport as hl, Transition as fl, shallowRef as un, readonly as $t } from "vue";
import { Editor as Nt, Node as ut, mergeAttributes as ot, getMarkRange as pn, Extension as Qe, isList as mn } from "@tiptap/core";
import hn from "@tiptap/extension-list-item";
import Il from "@tiptap/extension-text";
import $l from "@tiptap/extension-paragraph";
import Tl from "@tiptap/extension-code";
import Pl from "@tiptap/extension-hard-break";
import "@tiptap/extension-dropcursor";
import "@tiptap/extension-gapcursor";
import "@tiptap/extension-floating-menu";
import "element-plus/es/components/card/style/index";
import "element-plus/es/components/col/style/index";
import "element-plus/es/components/timeline-item/style/index";
import "element-plus/es/components/scrollbar/style/index";
import "element-plus/es/components/text/style/index";
import "element-plus/es/components/avatar/style/index";
import "element-plus/es/components/input/style/index";
import { useRouter as Oo, useRoute as No } from "vue-router";
import { ElMessageBox as ye, ElTooltip as fn, ElButton as kt, ElCheckbox as sa, ElInput as Ct, ElFormItem as ra, ElForm as da, ElDialog as jt, ElDropdownItem as Aa, ElDropdownMenu as La, ElDropdown as Ba, ElMessage as B, ElPopover as Dt, ElUpload as cn, ElLoading as Da, ElCol as bn, localeContextKey as Ia } from "element-plus";
import "element-plus/es/components/tabs/style/index";
import "element-plus/es/components/tab-pane/style/index";
import "element-plus/es/components/alert/style/index";
import "element-plus/es/components/row/style/index";
import "element-plus/es/components/tag/style/index";
import "element-plus/es/components/loading/style/index";
import "element-plus/es/components/form/style/index";
import "element-plus/es/components/switch/style/index";
import "element-plus/es/components/select/style/index";
import "element-plus/es/components/option-group/style/index";
import "element-plus/es/components/option/style/index";
import "element-plus/es/components/checkbox/style/index";
import "element-plus/es/components/form-item/style/index";
import "element-plus/es/components/popover/style/index";
import "element-plus/es/components/table/style/index";
import "element-plus/es/components/table-column/style/index";
import "element-plus/es/components/select-v2/style/index";
import "element-plus/es/components/link/style/index";
import "element-plus/es/components/collapse/style/index";
import "element-plus/es/components/collapse-item/style/index";
import "element-plus/es/components/input-number/style/index";
import "element-plus/es/components/descriptions/style/index";
import "element-plus/es/components/descriptions-item/style/index";
import { useDark as de } from "@vueuse/core";
import jo from "json-editor-vue";
import { Mode as Uo } from "vanilla-jsoneditor";
import "element-plus/es/components/color-picker/style/index";
import "element-plus/es/components/radio-group/style/index";
import "element-plus/es/components/radio-button/style/index";
import "element-plus/es/components/time-picker/style/index";
import "element-plus/es/components/date-picker/style/index";
import "vanilla-jsoneditor/themes/jse-theme-dark.css";
import { useVueFlow as gn, VueFlow as yn, Position as ga } from "@vue-flow/core";
import Ml from "dagre";
import "element-plus/es/components/pagination/style/index";
import "element-plus/es/components/button-group/style/index";
import "element-plus/es/components/dropdown/style/index";
import "element-plus/es/components/dropdown-menu/style/index";
import "element-plus/es/components/dropdown-item/style/index";
import "element-plus/es/components/carousel/style/index";
import "element-plus/es/components/carousel-item/style/index";
import "element-plus/es/components/menu/style/index";
import "element-plus/es/components/sub-menu/style/index";
import "element-plus/es/components/divider/style/index";
import "element-plus/es/components/menu-item/style/index";
import "element-plus/es/components/tooltip/style/index";
import "element-plus/es/components/skeleton/style/index";
import "element-plus/es/components/skeleton-item/style/index";
import "element-plus/es/components/cascader/style/index";
import Ro from "element-plus/es/locale/lang/th";
import "element-plus/es/components/date-picker-panel/style/index";
import "element-plus/es/components/tree-v2/style/index";
import we from "dayjs";
import zo from "dompurify";
import vn from "cropperjs";
import { EditorState as Ga, Compartment as qt } from "@codemirror/state";
import { EditorView as et, lineNumbers as wn, highlightActiveLineGutter as Sn, highlightSpecialChars as Fn, drawSelection as _n, dropCursor as kn, rectangularSelection as Cn, crosshairCursor as Dn, highlightActiveLine as In, placeholder as $n, keymap as Tn } from "@codemirror/view";
import { history as Pn, defaultKeymap as Mn, historyKeymap as Vn, indentWithTab as En } from "@codemirror/commands";
import { syntaxTree as Vl, syntaxHighlighting as An, StreamLanguage as Ln, foldGutter as Bn, indentOnInput as On, bracketMatching as Nn, foldKeymap as jn, HighlightStyle as Un } from "@codemirror/language";
import { parser as Ho } from "@lezer/javascript";
import { completeFromList as Rn, closeBrackets as zn, autocompletion as Hn, closeBracketsKeymap as qn, completionKeymap as Wn, snippetCompletion as Oa } from "@codemirror/autocomplete";
import { forceLinting as El, linter as Al, lintGutter as xn } from "@codemirror/lint";
import { scopeCompletionSource as Kn, javascript as Gn, localCompletionSource as Yn } from "@codemirror/lang-javascript";
import { tags as me } from "@lezer/highlight";
import { Editor as Ae, FloatingMenu as Jn, BubbleMenu as Xn, EditorContent as Qn, useEditor as Zn, nodeViewProps as Fe, NodeViewWrapper as it, VueNodeViewRenderer as pt, NodeViewContent as es, getMarkAttributes as Na } from "@tiptap/vue-3";
import { splitCell as ts, mergeCells as as, CellSelection as ls } from "prosemirror-tables";
import { TextSelection as ja, AllSelection as cl, Plugin as os } from "prosemirror-state";
import is from "@tiptap/extension-placeholder";
import ns from "@tiptap/extension-character-count";
import ss from "@tiptap/extension-document";
import rs from "@tiptap/extension-heading";
import ds from "@tiptap/extension-blockquote";
import us from "@tiptap/extension-code-block";
import ps from "@tiptap/extension-code-block-lowlight";
import { createLowlight as ms, common as hs } from "lowlight";
import fs from "highlight.js/lib/languages/css";
import cs from "highlight.js/lib/languages/javascript";
import bs from "highlight.js/lib/languages/typescript";
import gs from "highlight.js/lib/languages/xml";
import ys from "@tiptap/extension-bullet-list";
import vs from "@tiptap/extension-ordered-list";
import ws from "@tiptap/extension-image";
import "element-plus/es/components/upload/style/index";
import ce from "axios";
import Ss from "@tiptap/extension-task-list";
import Fs from "@tiptap/extension-task-item";
import { Table as _s } from "@tiptap/extension-table";
import ks from "@tiptap/extension-table-row";
import Cs from "@tiptap/extension-table-header";
import Ds from "@tiptap/extension-table-cell";
import Is from "@tiptap/extension-bold";
import $s from "@tiptap/extension-underline";
import Ts from "@tiptap/extension-italic";
import Ps from "@tiptap/extension-strike";
import Ms from "@tiptap/extension-link";
import Vs from "@tiptap/extension-color";
import Es from "@tiptap/extension-text-style";
import As from "@tiptap/extension-highlight";
import Ls from "@tiptap/extension-youtube";
import Bs from "@tiptap/extension-subscript";
import Os from "@tiptap/extension-superscript";
import Ns from "@tiptap/extension-horizontal-rule";
import js from "@tiptap/extension-history";
import Us from "@tiptap/extension-text-align";
import { defineStore as Rs } from "pinia";
import "element-plus/es/components/rate/style/index";
import "element-plus/es/components/space/style/index";
import { Chart as zs, CategoryScale as Hs, LinearScale as qs, BarElement as Ws, Title as xs, Tooltip as Ks, Legend as Gs, Filler as Ys, plugins as Js, TimeScale as Xs, TimeSeriesScale as Qs, RadialLinearScale as Zs, LineElement as er, PointElement as tr, ArcElement as ar, BarController as lr, LineController as or, PieController as ir, DoughnutController as nr, PolarAreaController as sr, RadarController as rr, BubbleController as dr, ScatterController as ur } from "chart.js";
import { Chart as pr } from "vue-chartjs";
import "chartjs-adapter-moment";
import mr from "vue3-apexcharts";
import hr from "vue-clipboard3";
import fr from "fuse.js";
import Ya from "pdfmake/build/pdfmake";
import Ll from "html-to-pdfmake";
import { f as cr } from "./sd-fonts-DL2H6WH7.js";
import * as ya from "xlsx";
import { Document as br, Paragraph as Wt, Table as Bl, TableRow as Ol, TableCell as Ja, WidthType as va, TableLayoutType as Nl, BorderStyle as wa, Packer as gr } from "docx";
import { saveAs as yr } from "file-saver";
import vr from "jsbarcode";
import Me from "onscan.js";
const wr = {
  name: "SvgData",
  props: {
    svgData: {
      type: String,
      required: !0
    },
    className: {
      type: String
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: String,
      default: "16px"
    }
  }
}, U = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [l, o] of t)
    a[l] = o;
  return a;
}, Sr = ["innerHTML"];
function Fr(e, t, a, l, o, i) {
  return n(), v("i", {
    class: "el-icon svg-icon",
    innerHTML: a.svgData
  }, null, 8, Sr);
}
const Ze = /* @__PURE__ */ U(wr, [["render", Fr], ["__scopeId", "data-v-7c4acdd9"]]), _r = {
  name: "SvgIcon",
  props: {
    iconName: {
      type: String,
      required: !0
    },
    className: {
      type: String
    },
    title: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "currentColor"
    },
    size: {
      type: String,
      default: "16px"
    }
  },
  computed: {
    iconClass() {
      return `#icon-${this.iconName}`;
    },
    svgClass() {
      return this.className ? "el-icon svg-icon " + this.className : "el-icon svg-icon";
    }
  }
}, kr = { "aria-hidden": "true" }, Cr = ["xlink:href", "fill"], Dr = { key: 0 };
function Ir(e, t, a, l, o, i) {
  return n(), v("i", {
    class: Y(i.svgClass)
  }, [
    (n(), v("svg", kr, [
      $("use", {
        "xlink:href": i.iconClass,
        fill: a.color
      }, null, 8, Cr),
      a.title ? (n(), v("title", Dr, A(a.title), 1)) : b("", !0)
    ]))
  ], 2);
}
const ve = /* @__PURE__ */ U(_r, [["render", Ir], ["__scopeId", "data-v-bebc8483"]]);
var Ge = /* @__PURE__ */ ((e) => (e.None = "None", e.String = "String", e.Integer = "Integer", e.Number = "Number", e.Boolean = "Boolean", e.Array = "Array", e.Object = "Object", e.ObjectId = "ObjectId", e.StringDate = "StringDate", e.ArrayDate = "ArrayDate", e.Date = "Date", e.Timestamp = "Timestamp", e.Binary = "Binary", e.StringArray = "String|Array", e.ObjectArray = "Object|Array", e.Any = "Any", e))(Ge || {}), fe = /* @__PURE__ */ ((e) => (e.SYS = "SYS", e.FORM = "FORM", e.SQL = "SQL", e))(fe || {}), ge = /* @__PURE__ */ ((e) => (e.ASC = "ASC", e.DESC = "DESC", e))(ge || {});
const gw = [
  {
    value: "user-list",
    label: "Member List",
    valueField: "_id",
    labelField: ["fname", "lname", "email"],
    searchField: ["profile.fname", "profile.lname"],
    valueObjectId: !0,
    labelTemp: "{{fname}} {{lname}} ( {{email}} )"
  },
  {
    value: "roles-list",
    label: "Roles List",
    valueField: "role_name",
    labelField: ["role_name", "role_description"],
    searchField: ["role_name"],
    valueObjectId: !1,
    labelTemp: "{{role_name}}"
  },
  {
    value: "sdform-list",
    label: "SdForm All List ",
    valueField: "_id",
    labelField: ["form_name", "form_version"],
    searchField: ["form_name"],
    valueObjectId: !0,
    labelTemp: "{{form_name}} ({{form_version}})"
  },
  {
    value: "sdform-db-list",
    label: "SdForm DB List",
    valueField: "_id",
    labelField: ["form_name", "form_version"],
    searchField: ["form_name"],
    valueObjectId: !0,
    labelTemp: "{{form_name}} ({{form_version}})"
  },
  {
    value: "sdform-ui-list",
    label: "SdForm UI List",
    valueField: "_id",
    labelField: ["form_name", "form_version"],
    searchField: ["form_name"],
    valueObjectId: !0,
    labelTemp: "{{form_name}} ({{form_version}})"
  },
  {
    value: "sql-list",
    label: "SQL List",
    valueField: "_id",
    labelField: ["sql_name"],
    searchField: ["sql_name"],
    valueObjectId: !0,
    labelTemp: ""
  },
  {
    value: "api-list",
    label: "API List",
    valueField: "_id",
    labelField: ["api_name"],
    searchField: ["api_name"],
    valueObjectId: !0,
    labelTemp: ""
  },
  {
    value: "report-list",
    label: "Report List",
    valueField: "_id",
    labelField: ["pdf_name"],
    searchField: ["pdf_name"],
    valueObjectId: !0,
    labelTemp: ""
  },
  {
    value: "packages-list",
    label: "Packages List",
    valueField: "_id",
    labelField: ["app_name", "app_code"],
    searchField: ["app_name", "app_code"],
    valueObjectId: !0,
    labelTemp: "{{app_name}} ( {{app_code}} )"
  }
  // {
  // 	value: 'sdform-table-list',
  // 	label: 'SdForm List (Table)',
  // 	valueField: 'form_table',
  // 	labelField: ['form_name', 'form_version'],
  // 	searchField: ['form_name'],
  // 	valueObjectId: true,
  // 	labelTemp: '{{form_name}} ({{form_version}})',
  // },
], _e = [
  "eval",
  "Function",
  "setImmediate",
  "requestAnimationFrame",
  "require",
  "arguments",
  "constructor",
  "yield",
  "fetch",
  "XMLHttpRequest",
  "WebSocket",
  // localStorage เปิดให้ใช้ได้ (2026-08-04) — จอสั่งยา CPOE ต้องเก็บตะกร้าไว้ระหว่างที่หมอถูกเรียกออกจากห้อง
  // popup ตั้ง backdrop:false อยู่แล้ว (กดนอกกล่องไม่ปิด) แต่กัน reload/ปิดแท็บไม่ได้ → ต้องมีที่เก็บจริง
  // ⚠️ key ที่เขียนจาก event ควรตั้ง prefix ของตัวเอง (เช่น `cpoe:cart:<visitId>`) กันชนกับ key ของ app
  // 'localStorage',
  "sessionStorage",
  "indexedDB",
  "document",
  "window",
  "location",
  "history",
  "navigator",
  "performance",
  "FileReader",
  "URL",
  "URLSearchParams",
  "Worker",
  "SharedArrayBuffer",
  "Atomics",
  "WebAssembly",
  "Reflect",
  "Proxy",
  "Symbol",
  "GeneratorFunction",
  "AsyncFunction"
], yw = function(e, t = [], a = !0) {
  if (a && /\bawait\b/.test(e)) {
    const o = Object.getPrototypeOf(async function() {
    }).constructor;
    return new o(...t, ..._e, e);
  }
  return new Function(...t, ..._e, e);
}, Ut = function() {
  return Math.floor(Math.random() * 1e5 + Math.random() * 2e4 + Math.random() * 5e3);
}, vw = function() {
  let e = Math.floor(Math.random() * 1e5 + Math.random() * 2e4 + Math.random() * 5e3), t = we().valueOf() + "" + e;
  return Number(t.slice(0, 17));
}, Pe = function(e) {
  return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
};
function oe(e) {
  return window.innerWidth < 768 ? "96%" : window.innerWidth >= 768 && window.innerWidth < 992 ? "95%" : (window.innerWidth >= 992, e);
}
function ww(e) {
  let a = window.location.search.substring(1).split("&");
  for (let l = 0; l < a.length; l++) {
    const o = a[l];
    if (o) {
      let i = o.split("=");
      if (i[0] == e && i[1])
        return i[1];
    }
  }
  return "";
}
const P = function(e) {
  if (e !== void 0)
    return JSON.parse(JSON.stringify(e));
};
function Sw(e) {
  return e == null;
}
function bl(e) {
  return e != null;
}
function Fw(e) {
  return e === void 0 || !e && e !== 0 && e !== "0" || !/[^\s]/.test(e);
}
function gl(e) {
  return Object.keys(e).length === 0;
}
function xt(e, t) {
  e.category && e.category === "container" ? $r(e, t) : e.formItemFlag && e.formItemFlag && t(e);
}
function $r(e, t) {
  e.component === "grid" ? e.cols.forEach((a) => {
    a.fields.forEach((l) => {
      xt(l, t);
    });
  }) : e.component === "table" ? e.rows.forEach((a) => {
    a.cols.forEach((l) => {
      l.fields.forEach((o) => {
        xt(o, t);
      });
    });
  }) : e.component === "tab" || e.component === "collapse" ? e.tabs.forEach((a) => {
    a.fields.forEach((l) => {
      xt(l, t);
    });
  }) : e.component === "sub-form" ? e.fields.forEach((a) => {
    xt(a, t);
  }) : e.category === "container" && e.fields.forEach((a) => {
    xt(a, t);
  });
}
function Pt(e, t, a = null) {
  e && e.map((l) => {
    l.formItemFlag ? t(l, a) : l.component === "grid" ? l.cols.map((o) => {
      Pt(o.fields, t, l);
    }) : l.component === "table" ? l.rows.map((o) => {
      o.cols.map((i) => {
        Pt(i.fields, t, l);
      });
    }) : l.component === "tab" || l.component === "collapse" ? l.tabs.map((o) => {
      Pt(o.fields, t, l);
    }) : (l.component === "sub-form" || l.category === "container") && Pt(l.fields, t, l);
  });
}
function Mt(e, t) {
  e && e.map((a) => {
    a.category === "container" && t(a), a.component === "grid" ? a.cols.map((l) => {
      Mt(l.fields, t);
    }) : a.component === "table" ? a.rows.map((l) => {
      l.cols.map((o) => {
        Mt(o.fields, t);
      });
    }) : a.component === "tab" || a.component === "collapse" ? a.tabs.map((l) => {
      Mt(l.fields, t);
    }) : (a.component === "sub-form" || a.category === "container") && Mt(a.fields, t);
  });
}
const _w = function(e, t = "") {
  try {
    let a = document.getElementsByTagName("body")[0], l = document.getElementById("sdform_global_functions");
    if (a) {
      l && a.removeChild(l), t && (l = document.getElementById("sdform_global_functions-" + t), l && a.removeChild(l));
      let o = document.createElement("script");
      o.id = t ? "sdform_global_functions-" + t : "sdform_global_functions", o.type = "text/javascript", o.innerHTML = e, a.appendChild(o);
    }
  } catch (a) {
    console.log("error", a);
  }
}, kw = function(e, t = "") {
  let a = document.getElementsByTagName("head")[0], l = document.getElementById("sdform-custom-css");
  if (a) {
    l && a.removeChild(l), t && (l = document.getElementById("sdform-custom-css-" + t), l && a.removeChild(l));
    let o = document.createElement("style");
    o.type = "text/css", o.rel = "stylesheet", o.id = t ? "sdform-custom-css-" + t : "sdform-custom-css";
    try {
      o.appendChild(document.createTextNode(e));
    } catch {
      o.styleSheet.cssText = e;
    }
    a.appendChild(o);
  }
}, Cw = function(e, t = 0, a = "currency", l = "THB") {
  return new Intl.NumberFormat("th-TH", {
    style: a,
    currency: l,
    minimumFractionDigits: t
  }).format(e);
};
function Dw(e) {
  if (!e)
    return [];
  let t = [];
  return Pt(e, (l) => {
    t.push({
      component: l.component,
      name: l.options.name,
      field: l
    });
  }), t;
}
function Iw(e) {
  if (!e)
    return [];
  let t = [];
  return Mt(e, (l) => {
    t.push({
      component: l.component,
      name: l.options.name,
      container: l
    });
  }), t;
}
const yl = function(e) {
  let t = {};
  for (const a in e)
    t[`{{${a}}}`] = e[a];
  return t;
}, Tr = (e) => ["true", "True", "1"].includes(e);
function $w(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Tw(e) {
  return e.charAt(0).toLowerCase() + e.slice(1);
}
function Pw(e) {
  return `(${e.map((t) => JSON.stringify(t.toString())).join(", ")})`;
}
function Mw(e) {
  return `(${e.join(", ")})`;
}
function Vw(e) {
  let t = e.replace(/\s+/g, " ");
  return t = Be(t, "%", "%25"), t = Be(t, "> <", "><"), t = Be(t, "; }", ";}"), t = Be(t, "<", "%3c"), t = Be(t, ">", "%3e"), t = Be(t, '"', "'"), t = Be(t, "#", "%23"), t = Be(t, "{", "%7b"), t = Be(t, "}", "%7d"), t = Be(t, "|", "%7c"), t = Be(t, "^", "%5e"), t = Be(t, "`", "%60"), t = Be(t, "@", "%40"), t;
}
function Be(e, t, a) {
  return e.replace(new RegExp(Pr(t), "g"), a);
}
function Pr(e) {
  return e.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function ll(e, t, a) {
  let l = t.split("."), o = e;
  for (let i = 0; i < l.length; i++) {
    let s = l[i];
    s && (i === l.length - 1 ? o[s] = a : ((!o[s] || typeof o[s] != "object" || Array.isArray(o[s])) && (o[s] = {}), o = o[s]));
  }
}
function pe(e, t) {
  try {
    let a = t.split("."), l = e;
    for (let o = 0, i = a.length; o < i; o++) {
      let s = a[o];
      if (s)
        if (bl(l) && Object.prototype.hasOwnProperty.call(l, s))
          l = l[s];
        else
          return null;
      else
        return null;
    }
    return l;
  } catch {
    return null;
  }
}
function Rt(e) {
  return zo.sanitize(e, {});
}
function ue(e, t) {
  const a = (i) => `{{###~${i}~###}}`, l = Object.keys(t).map((i, s) => ({
    key: i,
    val: t[i],
    token: a(s)
  })), o = l.reduce((i, s) => i.replace(new RegExp(s.key, "g"), s.token), e);
  return l.reduce((i, s) => i.replace(new RegExp(s.token, "g"), s.val), o);
}
function Mr(e, t, a = "params") {
  let l = !1;
  try {
    e ? l = new Function(a, ..._e, `return Boolean(${e})`).call(null, t) : l = !1;
  } catch {
    l = !1;
  }
  return l;
}
function Vr(e, t, a = "params") {
  let l = null;
  try {
    e ? l = new Function(a, ..._e, `return ${e}`).call(null, t) : l = null;
  } catch {
    l = null;
  }
  return l;
}
function Ua(e, t = 1) {
  if (!e || ((t < 0 || t > 1) && (t = 1), e = e.trim().replace(/^#/, ""), !/^([0-9A-F]{3}){1,2}$/i.test(e)))
    return "";
  let a, l, o;
  return e.length === 3 && e[0] && e[1] && e[2] ? (a = parseInt(e[0] + e[0], 16), l = parseInt(e[1] + e[1], 16), o = parseInt(e[2] + e[2], 16)) : (a = parseInt(e.substring(0, 2), 16), l = parseInt(e.substring(2, 4), 16), o = parseInt(e.substring(4, 6), 16)), `rgba(${a}, ${l}, ${o}, ${t})`;
}
const Er = O({
  name: "SdCropImageInput",
  components: {},
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: null,
    disabled: {
      type: Boolean,
      default: !1
    },
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 150
    },
    resizeEnable: {
      type: Boolean,
      default: !1
    },
    rotateEnable: {
      type: Boolean,
      default: !0
    },
    flipEnable: {
      type: Boolean,
      default: !0
    },
    afterCroppered: {
      type: Function
    },
    afterDelete: {
      type: Function
    }
  },
  data() {
    return {
      resizeCleanup: null,
      showPopupFlag: !1,
      popupWidth: "450px",
      picture: "",
      tempFixed: `
					<cropper-canvas background style="width: 100%; height: 400px">
						<cropper-image  rotatable scalable skewable translatable></cropper-image>
						<cropper-shade hidden></cropper-shade>
						<cropper-handle action="move" plain></cropper-handle>
						<cropper-selection width="${this.width}" height="${this.height}"  movable outlined >
							<cropper-crosshair centered theme-color="#39f"></cropper-crosshair>
							<cropper-handle action="move" theme-color="rgba(255, 255, 255, 0.1)"></cropper-handle>
						</cropper-selection>
					</cropper-canvas>
				`,
      tempResize: `
					<cropper-canvas background style="width: 100%; height: 400px">
						<cropper-image  rotatable scalable skewable translatable></cropper-image>
						<cropper-shade hidden></cropper-shade>
						<cropper-handle action="move" plain></cropper-handle>
						<cropper-selection width="${this.width}" height="${this.height}"  movable resizable outlined >
							<cropper-crosshair centered theme-color="#39f"></cropper-crosshair>
							<cropper-handle action="move" theme-color="rgba(255, 255, 255, 0.1)"></cropper-handle>
							<cropper-handle action="n-resize"></cropper-handle>
							<cropper-handle action="e-resize"></cropper-handle>
							<cropper-handle action="s-resize"></cropper-handle>
							<cropper-handle action="w-resize"></cropper-handle>
							<cropper-handle action="ne-resize"></cropper-handle>
							<cropper-handle action="nw-resize"></cropper-handle>
							<cropper-handle action="se-resize"></cropper-handle>
							<cropper-handle action="sw-resize"></cropper-handle>
						</cropper-selection>
					</cropper-canvas>
				`,
      scrollerHeight: 0,
      cropper: {}
    };
  },
  computed: {
    value: {
      get() {
        return this.modelValue !== void 0 && this.modelValue !== null ? typeof this.modelValue == "object" && Object.keys(this.modelValue).length > 0 ? this.modelValue : typeof this.modelValue == "string" && this.modelValue !== "" ? this.modelValue : null : null;
      },
      set(e) {
        let t = null;
        e != null && (e !== "" || typeof e == "object" && Object.keys(e).length > 0) && (t = e), this.$emit("update:modelValue", t), this.$emit("change", t);
      }
    },
    priviewDataURL() {
      let e = "";
      if (this.value)
        if (typeof this.modelValue == "object" && Object.keys(this.modelValue).length > 0)
          for (const t of this.value)
            t.url && (e = t.url);
        else typeof this.modelValue == "string" && this.modelValue !== "" ? e = this.modelValue : e = "";
      return e;
    }
  },
  created() {
  },
  mounted() {
    this.scrollerHeight = window.innerHeight - 220, this.resizeCleanup = Pe(async () => {
      await Qt(() => {
        this.scrollerHeight = window.innerHeight - 220, this.popupWidth = oe("450px");
      });
    });
  },
  setup(e, t) {
    const a = q(), l = q(), o = q();
    return {
      uploadInput: a,
      imgCrop: l,
      cropperBox: o
    };
  },
  unmounted() {
    this.resizeCleanup?.();
  },
  methods: {
    onCropperImageOpen() {
      const e = new Image();
      e.src = this.picture, e.alt = "Picture", this.cropper = new vn(e, {
        container: this.cropperBox,
        template: this.resizeEnable ? this.tempResize : this.tempFixed
      });
      const t = this.cropper.getCropperSelection();
      t && (t.width = this.width, t.height = this.height, t.$center());
    },
    selectFile(e) {
      this.picture = "";
      const { files: t } = e.target;
      if (t && t[0]) {
        const a = t[0], l = new FileReader();
        l.readAsDataURL(a), l.onload = () => {
          this.picture = String(l.result), this.showPopupFlag = !0, this.uploadInput && (this.uploadInput.value = "");
        };
      }
    },
    deleteCropFile() {
      ye.confirm("Are you sure you want to delete this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        this.afterDelete ? typeof this.value == "object" && this.value[0] ? this.afterDelete(this.value[0]) : (this.picture = "", this.value = null) : (this.picture = "", this.value = null);
      }).catch(() => {
      });
    },
    async saveCropFile() {
      const e = this.cropper.getCropperSelection();
      if (e) {
        const t = await e.$toCanvas();
        t && (this.afterCroppered ? this.afterCroppered(t) : this.value = t.toDataURL());
      }
      this.picture = "", this.showPopupFlag = !1;
    },
    cancelCropFile() {
      this.picture = "", this.showPopupFlag = !1;
    },
    rotateImg() {
      const e = this.cropper.getCropperImage();
      e && e.$rotate(90 * Math.PI / 180);
    },
    flipImg() {
      const e = this.cropper.getCropperImage();
      e && e.$scale(-1, 1);
    }
  }
}), Ar = { class: "crop-image" }, Lr = {
  key: 0,
  class: "crop-preview"
}, Br = {
  key: 0,
  class: "preview-actions"
}, Or = ["disabled"], Nr = ["disabled"], jr = { key: 0 }, Ur = {
  role: "heading",
  class: "el-dialog__title"
}, Rr = {
  ref: "cropperBox",
  class: "cropper-container"
}, zr = { class: "dialog-footer" };
function Hr(e, t, a, l, o, i) {
  const s = Vt, u = X("delete"), m = qe, f = X("Plus"), c = ve, F = ie, D = Ce;
  return n(), v(L, null, [
    $("ul", Ar, [
      e.priviewDataURL ? (n(), v("li", Lr, [
        d(s, {
          style: le(`width: ${e.width}px; height: ${e.height}px`),
          src: e.priviewDataURL,
          fit: e.resizeEnable ? "none" : "cover"
        }, null, 8, ["style", "src", "fit"]),
        e.disabled ? b("", !0) : (n(), v("span", Br, [
          e.disabled ? b("", !0) : (n(), v("span", {
            key: 0,
            class: "btn-action",
            onClick: t[0] || (t[0] = (...g) => e.deleteCropFile && e.deleteCropFile(...g))
          }, [
            d(m, null, {
              default: r(() => [
                d(u)
              ]),
              _: 1
            })
          ]))
        ]))
      ])) : b("", !0),
      e.priviewDataURL ? b("", !0) : (n(), v("button", {
        key: 1,
        class: Y(["select-picture", { "select-disabled": e.disabled }]),
        style: le(`width: ${e.width}px; height: ${e.height}px`),
        disabled: e.disabled
      }, [
        d(m, null, {
          default: r(() => [
            d(f)
          ]),
          _: 1
        }),
        $("input", {
          ref: "uploadInput",
          type: "file",
          accept: "image/jpg, image/jpeg, image/png, image/gif",
          title: "",
          onChange: t[1] || (t[1] = (...g) => e.selectFile && e.selectFile(...g)),
          disabled: e.disabled
        }, null, 40, Nr)
      ], 14, Or))
    ]),
    e.showPopupFlag ? (n(), v("div", jr, [
      d(D, {
        title: "Crop Picture",
        modelValue: e.showPopupFlag,
        "onUpdate:modelValue": t[2] || (t[2] = (g) => e.showPopupFlag = g),
        width: e.popupWidth,
        "show-close": !1,
        class: "dialog-grid dialog-form",
        "append-to-body": "",
        onOpened: e.onCropperImageOpen,
        "close-on-click-modal": !1,
        "close-on-press-escape": !1,
        "destroy-on-close": !0
      }, {
        header: r(({ close: g, titleId: C, titleClass: _ }) => [
          $("span", Ur, [
            d(c, { "icon-name": "crop-input" }),
            t[3] || (t[3] = I(" Crop Picture", -1))
          ])
        ]),
        footer: r(() => [
          $("div", zr, [
            d(F, {
              plain: "",
              type: "success",
              onClick: e.saveCropFile
            }, {
              default: r(() => [
                d(c, {
                  "icon-name": "crop-input",
                  class: "mr-1"
                }),
                t[4] || (t[4] = I(" Crop", -1))
              ]),
              _: 1
            }, 8, ["onClick"]),
            e.flipEnable ? (n(), h(F, {
              key: 0,
              plain: "",
              onClick: e.flipImg
            }, {
              default: r(() => [
                d(c, {
                  "icon-name": "addon-flip-horizontal",
                  class: "mr-1"
                }),
                t[5] || (t[5] = I(" Flip", -1))
              ]),
              _: 1
            }, 8, ["onClick"])) : b("", !0),
            e.rotateEnable ? (n(), h(F, {
              key: 1,
              plain: "",
              onClick: e.rotateImg
            }, {
              default: r(() => [
                d(c, {
                  "icon-name": "el-refresh",
                  class: "mr-1"
                }),
                t[6] || (t[6] = I(" Rotate", -1))
              ]),
              _: 1
            }, 8, ["onClick"])) : b("", !0),
            d(F, {
              plain: "",
              onClick: e.cancelCropFile
            }, {
              default: r(() => [...t[7] || (t[7] = [
                I("Cancel", -1)
              ])]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        default: r(() => [
          $("div", Rr, null, 512)
        ]),
        _: 1
      }, 8, ["modelValue", "width", "onOpened"])
    ])) : b("", !0)
  ], 64);
}
const Ew = /* @__PURE__ */ U(Er, [["render", Hr], ["__scopeId", "data-v-1ac4323d"]]), Sa = ke({
  acePop: [],
  aceSnippet: [],
  memberSchema: {}
  // type-aware dot completion ของ context ปัจจุบัน
});
function qr() {
  return {
    state: Sa,
    /** set completer ของ context ปัจจุบัน — เรียกตอน view/dialog ที่มี code editor mounted */
    setCompleter(e = [], t = []) {
      Sa.acePop = e, Sa.aceSnippet = t;
    },
    /** set memberSchema (dot completion) ของ context — เช่น ApiFactory→apiMemberSchema, builder→fieldMemberSchema */
    setMemberSchema(e = {}) {
      Sa.memberSchema = e;
    }
  };
}
function Tt(e) {
  return Un.define([
    { tag: me.comment, color: e.comment, fontStyle: "italic" },
    { tag: [me.keyword, me.modifier, me.controlKeyword, me.operatorKeyword], color: e.keyword },
    { tag: [me.string, me.special(me.string)], color: e.string },
    { tag: [me.number, me.bool, me.null], color: e.number },
    { tag: [me.function(me.variableName), me.function(me.propertyName)], color: e.func },
    { tag: [me.propertyName], color: e.property },
    { tag: [me.variableName, me.definition(me.variableName)], color: e.variable },
    { tag: [me.className, me.typeName], color: e.type },
    { tag: [me.operator, me.punctuation], color: e.operator },
    { tag: me.regexp, color: e.regexp }
  ]);
}
const jl = {
  // default — ตัวเดิม (light: GitHub-ish, dark: One Dark) ← ค่าเริ่มต้น
  default: {
    light: Tt({ comment: "#6a737d", keyword: "#d73a49", string: "#22863a", number: "#005cc5", func: "#6f42c1", variable: "#24292e", type: "#6f42c1", property: "#005cc5", operator: "#24292e", regexp: "#032f62" }),
    dark: Tt({ comment: "#7d8799", keyword: "#c678dd", string: "#98c379", number: "#d19a66", func: "#61afef", variable: "#e5c07b", type: "#e5c07b", property: "#e06c75", operator: "#abb2bf", regexp: "#56b6c2" })
  },
  // GitHub — โทนมาตรฐาน คุ้นเคย
  github: {
    light: Tt({ comment: "#6e7781", keyword: "#cf222e", string: "#0a3069", number: "#0550ae", func: "#8250df", variable: "#1f2328", type: "#953800", property: "#0550ae", operator: "#24292e", regexp: "#0a3069" }),
    dark: Tt({ comment: "#8b949e", keyword: "#ff7b72", string: "#a5d6ff", number: "#79c0ff", func: "#d2a8ff", variable: "#e6edf3", type: "#ffa657", property: "#79c0ff", operator: "#e6edf3", regexp: "#a5d6ff" })
  },
  // VSCode — Light+ / Dark+ (default ของ VSCode)
  vscode: {
    light: Tt({ comment: "#008000", keyword: "#0000ff", string: "#a31515", number: "#098658", func: "#795e26", variable: "#001080", type: "#267f99", property: "#001080", operator: "#000000", regexp: "#811f3f" }),
    dark: Tt({ comment: "#6a9955", keyword: "#569cd6", string: "#ce9178", number: "#b5cea8", func: "#dcdcaa", variable: "#9cdcfe", type: "#4ec9b0", property: "#9cdcfe", operator: "#d4d4d4", regexp: "#d16969" })
  }
}, Wr = "default", xr = et.theme({
  "&": {
    color: "var(--el-text-color-primary)",
    backgroundColor: "var(--el-fill-color-blank)",
    fontSize: "13px",
    border: "1px solid var(--el-border-color)",
    borderRadius: "var(--el-border-radius-base)"
  },
  "&.cm-focused": { outline: "none", borderColor: "var(--el-color-primary)" },
  ".cm-content": {
    fontFamily: "'Fira Code', 'Consolas', 'Menlo', monospace",
    caretColor: "var(--el-color-primary)"
  },
  // fix line-height ตายตัว → minLines/maxLines แม่นยำเป็น "จำนวนบรรทัด" จริง (ต้องตรงกับ LINE_HEIGHT_PX)
  ".cm-line": { lineHeight: "20px" },
  ".cm-cursor, .cm-dropCursor": { borderLeftColor: "var(--el-color-primary)" },
  // selection: !important เพื่อชนะ '.cm-focused .cm-selectionBackground' default ของ CM (specificity สูงตอน focus)
  "&.cm-focused .cm-selectionBackground, .cm-selectionBackground": {
    backgroundColor: "var(--el-color-primary-light-5) !important"
  },
  ".cm-content ::selection": { backgroundColor: "var(--el-color-primary-light-5)" },
  ".cm-gutters": {
    backgroundColor: "var(--el-fill-color-light)",
    color: "var(--el-text-color-secondary)",
    border: "none",
    borderRight: "1px solid var(--el-border-color-lighter)"
  },
  // active line: โปร่งแสง + โทนเทา (ไม่ทึบ, ไม่ชนโทนฟ้าของ selection) → selection ทะลุเห็นได้ ไม่บัง
  ".cm-activeLine": { backgroundColor: "color-mix(in srgb, var(--el-text-color-primary) 6%, transparent)" },
  ".cm-activeLineGutter": { backgroundColor: "var(--el-fill-color-dark)" },
  ".cm-foldPlaceholder": {
    backgroundColor: "var(--el-fill-color-dark)",
    border: "none",
    color: "var(--el-text-color-secondary)"
  },
  ".cm-matchingBracket, &.cm-focused .cm-matchingBracket": {
    backgroundColor: "var(--el-color-primary-light-8)",
    outline: "1px solid var(--el-color-primary-light-5)"
  },
  // autocomplete popup
  ".cm-tooltip": {
    backgroundColor: "var(--el-bg-color-overlay)",
    border: "1px solid var(--el-border-color)",
    borderRadius: "var(--el-border-radius-base)",
    boxShadow: "var(--el-box-shadow-light)",
    color: "var(--el-text-color-primary)"
  },
  ".cm-tooltip-autocomplete > ul > li": { padding: "2px 6px" },
  ".cm-tooltip-autocomplete > ul > li[aria-selected]": {
    backgroundColor: "var(--el-color-primary)",
    color: "var(--el-color-white)"
  },
  ".cm-completionDetail": { color: "var(--el-text-color-secondary)", fontStyle: "italic", marginLeft: "8px" },
  ".cm-completionIcon": { color: "var(--el-text-color-secondary)", opacity: "0.8" }
});
function Ul(e) {
  return {
    label: e.caption ?? e.value ?? "",
    apply: e.value ?? e.caption ?? "",
    detail: e.meta ?? "",
    type: "variable",
    boost: typeof e.score == "number" ? e.score : 0
  };
}
function Kr(e, t) {
  if (!Array.isArray(t)) return [];
  const a = [];
  for (const l of t) {
    if (!l || l.message == null) continue;
    const o = Math.min(Math.max(Number(l.line) || 1, 1), e.lines), i = e.line(o);
    a.push({ from: i.from, to: i.to, severity: l.severity || "error", message: String(l.message) });
  }
  return a;
}
function Gr(e) {
  const t = (String(e.content ?? "").split(`
`)[0] ?? "").slice(0, 40);
  return Oa(String(e.content ?? ""), {
    label: e.name ?? t,
    detail: t,
    type: "snippet",
    boost: -1
    // ให้ acePop ขึ้นก่อน snippet เล็กน้อย
  });
}
function Yr(e) {
  if (typeof e == "string") return { label: e, type: "property" };
  const t = e.apply ?? e.label;
  return typeof t == "string" && /\$\{|\$\d/.test(t) ? Oa(t, { label: e.label, detail: e.detail, type: e.type ?? "method" }) : { label: e.label, apply: t, detail: e.detail, type: e.type ?? "method" };
}
const qo = 8, Q = (e, t) => ({ label: e, apply: t ?? e, type: "method" }), Jr = {
  $Array: [
    { label: "length", type: "property" },
    Q("map", "map(${1:fn})"),
    Q("filter", "filter(${1:fn})"),
    Q("forEach", "forEach(${1:fn})"),
    Q("reduce", "reduce(${1:fn}, ${2:init})"),
    Q("find", "find(${1:fn})"),
    Q("findIndex", "findIndex(${1:fn})"),
    Q("some", "some(${1:fn})"),
    Q("every", "every(${1:fn})"),
    Q("includes", "includes(${1:val})"),
    Q("indexOf", "indexOf(${1:val})"),
    Q("join", "join(${1:sep})"),
    Q("slice", "slice(${1:start}, ${2:end})"),
    Q("splice", "splice(${1:start}, ${2:count})"),
    Q("concat", "concat(${1:arr})"),
    Q("push", "push(${1:val})"),
    Q("pop", "pop()"),
    Q("shift", "shift()"),
    Q("unshift", "unshift(${1:val})"),
    Q("sort", "sort(${1:fn})"),
    Q("reverse", "reverse()"),
    Q("flat", "flat()"),
    Q("keys", "keys()"),
    Q("values", "values()"),
    Q("entries", "entries()")
  ],
  $String: [
    { label: "length", type: "property" },
    Q("toLowerCase", "toLowerCase()"),
    Q("toUpperCase", "toUpperCase()"),
    Q("trim", "trim()"),
    Q("split", "split(${1:sep})"),
    Q("replace", "replace(${1:pat}, ${2:rep})"),
    Q("replaceAll", "replaceAll(${1:pat}, ${2:rep})"),
    Q("slice", "slice(${1:start}, ${2:end})"),
    Q("substring", "substring(${1:start}, ${2:end})"),
    Q("includes", "includes(${1:val})"),
    Q("indexOf", "indexOf(${1:val})"),
    Q("startsWith", "startsWith(${1:val})"),
    Q("endsWith", "endsWith(${1:val})"),
    Q("padStart", "padStart(${1:len}, ${2:pad})"),
    Q("padEnd", "padEnd(${1:len}, ${2:pad})"),
    Q("charAt", "charAt(${1:i})"),
    Q("match", "match(${1:re})"),
    Q("repeat", "repeat(${1:n})"),
    Q("toString", "toString()")
  ],
  $Number: [Q("toFixed", "toFixed(${1:digits})"), Q("toString", "toString()"), Q("toPrecision", "toPrecision(${1:p})")]
};
function Wo(e, t) {
  return t ? Array.isArray(t) ? t : e.$types?.[t] ?? Jr[t] ?? null : null;
}
function rt(e, t) {
  return t.slice(e.from, e.to);
}
function bt(e, t) {
  for (let a = e?.firstChild; a; a = a.nextSibling) if (a.name === t) return a;
  return null;
}
function ol(e) {
  let t = e?.lastChild;
  for (; t && (t.name === ")" || t.name === "]" || t.name === ";" || t.name === "await"); ) t = t.prevSibling;
  return t;
}
function il(e, t, a) {
  const l = Wo(e, t);
  return l ? l.find((o) => (typeof o == "string" ? o : o.label) === a) ?? null : null;
}
function Jt(e, t, a, l, o) {
  if (!t || o > qo) return null;
  switch (t.name) {
    case "AwaitExpression":
    case "ParenthesizedExpression":
      return Jt(e, ol(t), a, l, o + 1);
    case "this":
      return e.this ?? null;
    case "VariableName":
      return Rl(e, rt(t, a), l, o + 1);
    case "CallExpression": {
      const i = t.firstChild;
      if (!i) return null;
      if (i.name === "MemberExpression") {
        const s = Jt(e, i.firstChild, a, l, o + 1), u = bt(i, "PropertyName");
        return il(e, s, u ? rt(u, a) : "")?.returns ?? null;
      }
      return i.name === "VariableName" ? Rl(e, rt(i, a), l, o + 1) : null;
    }
    case "MemberExpression": {
      const i = Jt(e, t.firstChild, a, l, o + 1), s = bt(t, "PropertyName");
      return il(e, i, s ? rt(s, a) : "")?.returns ?? null;
    }
    // literal → type ของ JS เอง
    case "ObjectExpression": {
      const i = [];
      for (let s = t.firstChild; s; s = s.nextSibling) {
        if (s.name !== "Property") continue;
        const u = bt(s, "PropertyDefinition") || bt(s, "PropertyName");
        u && i.push({ label: rt(u, a), type: "property" });
      }
      return i;
    }
    case "ArrayExpression":
      return "$Array";
    case "String":
      return "$String";
    case "Number":
      return "$Number";
  }
  return null;
}
function Rl(e, t, a, l) {
  if (!t || t === "$types" || l > qo) return null;
  const o = e[t];
  if (typeof o == "string" || Array.isArray(o)) return o;
  const i = Xr(a, t);
  if (!i) return null;
  let s = Jt(e, i.rhs, a.docText, a, l + 1);
  return i.property && (s = il(e, s, i.property)?.returns ?? null), s;
}
function Xr(e, t) {
  const { docTree: a, docText: l, beforePos: o } = e;
  let i = null;
  const s = (u, m, f) => {
    m && u < o && (!i || u > i.from) && (i = { from: u, rhs: m, property: f });
  };
  return a.iterate({
    enter(u) {
      if (u.from >= o) return;
      const m = u.node;
      if (m.name === "VariableDeclaration") {
        const f = bt(m, "Equals");
        if (!f) return;
        const c = ol(m);
        for (let F = m.firstChild; F && F !== f; F = F.nextSibling)
          F.name === "VariableDefinition" && rt(F, l) === t ? s(F.from, c, null) : F.name === "ObjectPattern" && Qr(F, l, t) && s(F.from, c, t);
      } else if (m.name === "AssignmentExpression") {
        const f = m.firstChild;
        f && f.name === "VariableName" && rt(f, l) === t && s(f.from, ol(m), null);
      }
    }
  }), i;
}
function Qr(e, t, a) {
  for (let l = e.firstChild; l; l = l.nextSibling) {
    if (l.name !== "PatternProperty") continue;
    const o = bt(l, "VariableDefinition") || bt(l, "PropertyName");
    if (o && rt(o, t) === a) return !0;
  }
  return !1;
}
function Zr(e) {
  let t = 0, a = "", l = e.length - 1;
  for (; l >= 0; l--) {
    const o = e[l];
    if (a) {
      o === a && e[l - 1] !== "\\" && (a = "");
      continue;
    }
    if (o === '"' || o === "'" || o === "`") {
      a = o;
      continue;
    }
    if (o === ")" || o === "]" || o === "}") t++;
    else if (o === "(" || o === "[" || o === "{") {
      if (t === 0) break;
      t--;
    } else if (t === 0 && /[\s;=+\-*/%<>!&|,?:]/.test(o)) break;
  }
  return e.slice(l + 1);
}
function ed(e, t, a) {
  let o = Ho.parse(t).topNode.firstChild;
  return o && o.name === "ExpressionStatement" && (o = o.firstChild), Wo(e, Jt(e, o, t, a, 0));
}
function zl(e) {
  const t = String(e ?? "").trim();
  return t ? /^\d+(\.\d+)?$/.test(t) ? `${t}px` : t : "";
}
const td = {
  Math,
  JSON,
  Object,
  Array,
  String,
  Number,
  Boolean,
  Date,
  Promise,
  RegExp,
  Map,
  Set,
  Symbol,
  parseInt,
  parseFloat,
  isNaN,
  isFinite,
  encodeURIComponent,
  decodeURIComponent,
  console
}, ad = Kn(td), he = (e, t, a) => Oa(t ?? e, { label: e, detail: a ?? "Vue directive", type: "keyword" }), ld = [
  he("v-if", 'v-if="${1:condition}"', "conditional"),
  he("v-else-if", 'v-else-if="${1:condition}"'),
  he("v-else", "v-else"),
  he("v-for", 'v-for="${1:item} in ${2:list}"', "list render"),
  he("v-show", 'v-show="${1:condition}"'),
  he("v-model", 'v-model="${1:value}"', "two-way bind"),
  he("v-bind", 'v-bind:${1:attr}="${2:value}"', "bind (: shorthand)"),
  he("v-on", 'v-on:${1:event}="${2:handler}"', "event (@ shorthand)"),
  he("v-slot", "v-slot:${1:name}", "slot (# shorthand)"),
  he("v-html", 'v-html="${1:html}"'),
  he("v-text", 'v-text="${1:text}"'),
  he("v-pre", "v-pre"),
  he("v-once", "v-once"),
  he("v-cloak", "v-cloak"),
  he("v-memo", 'v-memo="${1:deps}"'),
  he("@click", '@click="${1:handler}"', "event shorthand"),
  he("@input", '@input="${1:handler}"'),
  he("@change", '@change="${1:handler}"'),
  he("@submit", '@submit.prevent="${1:handler}"'),
  he(":class", ':class="${1:value}"', "bind shorthand"),
  he(":style", ':style="${1:value}"'),
  he(":key", ':key="${1:value}"'),
  he(":value", ':value="${1:value}"'),
  he(":disabled", ':disabled="${1:value}"')
], ct = (e, t, a) => Oa(t, { label: e, detail: a ?? "LaTeX template", type: "keyword" }), od = [
  ct("\\VAR", "\\VAR{${1:field}}", "output value (auto-escape)"),
  ct("\\BLOCK for", "\\BLOCK{for ${1:row} in ${2:rows}}\n	$0\n\\BLOCK{endfor}", "loop rows"),
  ct("\\BLOCK if", `\\BLOCK{if \${1:condition}}
	$0
\\BLOCK{endif}`, "conditional (raw value)"),
  ct("\\BLOCK else", "\\BLOCK{else}", "else branch"),
  ct("\\BLOCK endfor", "\\BLOCK{endfor}", "end loop"),
  ct("\\BLOCK endif", "\\BLOCK{endif}", "end if"),
  ct("\\#{ }", "\\#{${1:comment}}", "comment (not rendered)")
], id = O({
  name: "SdCodeMirror",
  emits: ["update:value", "init", "onChange", "onInput", "onBlur", "onFocus"],
  props: {
    value: { type: String, default: "" },
    lang: { type: String, default: "javascript" },
    // js/javascript | json | nosql | html | vue | sql | pgsql | latex/stex
    theme: { type: String, default: "" },
    // Ace theme name (ส่งมา = infer dark/light เพื่อ drop-in; ไม่ส่ง = ตาม useDark ของแอป)
    syntaxTheme: { type: String, default: "default" },
    // palette: 'default' (One Dark) | 'github' | 'vscode'
    dark: { type: Boolean, default: void 0 },
    // explicit override; undefined = auto
    readonly: { type: Boolean, default: !1 },
    wrap: { type: Boolean, default: !1 },
    options: { type: Object, default: () => ({}) },
    // { enableLiveAutocompletion, ... } (Ace compat)
    placeholder: { type: String, default: "" },
    minLines: { type: Number, default: void 0 },
    // จำกัดความสูงเป็น "จำนวนบรรทัด"
    maxLines: { type: Number, default: void 0 },
    // เกินจำนวนนี้ → scroll
    minHeight: { type: String, default: "300" },
    // ใช้เมื่อไม่ได้ระบุ minLines (เลขล้วน=px, หรือ '50vh')
    maxHeight: { type: String, default: "" },
    // ทางเลือก: กำหนด max เป็น px/vh ตรงๆ (เหนือกว่า maxLines)
    // autocomplete data (รับ format Ace เดิมได้เลย)
    acePop: { type: Array, default: () => [] },
    aceSnippet: { type: Array, default: () => [] },
    memberSchema: { type: Object, default: () => ({}) },
    // typed schema (ดู comment ที่ helper inference)
    autoBeautify: { type: Boolean, default: !1 },
    // beautify อัตโนมัติตอน load (เหมาะ editor แสดงผล/readonly)
    diagnostics: { type: Array, default: () => [] }
    // external diagnostics [{ line, message, severity? }] — เช่น LaTeX compile error
  },
  setup() {
    const e = de(), t = qr();
    return { isDark: e, cmCompleter: t };
  },
  data() {
    return {};
  },
  computed: {
    // dark/light: explicit prop > infer จากชื่อ ace theme (drop-in) > ตามธีมแอป
    isDarkMode() {
      if (typeof this.dark == "boolean") return this.dark;
      const e = (this.theme || "").toLowerCase();
      return /(night|dark|dracula|monokai|twilight|cobalt|merbivore|terminal|vibrant|ambiance|chaos|mono_industrial|pastel_on_dark|solarized_dark|idle_fingers)/.test(e) ? !0 : e && /(sqlserver|light|chrome|clouds$|dawn|dreamweaver|eclipse|github|textmate|tomorrow$|xcode|kuroir|katzenmilch|crimson|solarized_light)/.test(e) ? !1 : !!this.isDark;
    },
    liveAutocomplete() {
      return (this.options || {}).enableLiveAutocompletion !== !1;
    }
  },
  mounted() {
    this._build();
  },
  beforeUnmount() {
    this._destroyed = !0, this._view?.destroy();
  },
  methods: {
    // ===== สร้าง editor =====
    async _build() {
      this._cLang = new qt(), this._cTheme = new qt(), this._cReadonly = new qt(), this._cWrap = new qt(), this._cHeight = new qt(), this._contentBackup = this.value, this._isSettingContent = !1, this._snippetCache = { src: null, items: [] };
      const e = await this._loadLangExt(this.lang);
      if (this._destroyed) return;
      const t = Ga.create({
        doc: this.value,
        extensions: this._extensions(e)
      });
      this._view = Po(
        new et({
          state: t,
          parent: this.$refs.host
        })
      ), this.$emit("init", this._view), this.autoBeautify && this.beautify();
    },
    _extensions(e) {
      const t = this;
      return [
        wn(),
        Sn(),
        Fn(),
        Pn(),
        Bn(),
        _n(),
        kn(),
        Ga.allowMultipleSelections.of(!0),
        On(),
        Nn(),
        zn(),
        Cn(),
        Dn(),
        In(),
        $n(this.placeholder || ""),
        Hn({
          override: [
            (a) => t._memberSource(a),
            (a) => t._flatSource(a),
            // JS มาตรฐาน (เฉพาะ lang js): local var/keyword + global API (Math/JSON/console...)
            (a) => t._isJsLang() ? Yn(a) : null,
            (a) => t._isJsLang() ? ad(a) : null,
            // Vue directive (v-if/v-for/@/:) — เฉพาะ lang vue
            (a) => t._vueDirectiveSource(a),
            // LaTeX template (\VAR/\BLOCK directive + field/param names ใน brace) — เฉพาะ lang latex/stex
            (a) => t._latexCompletionSource(a),
            // ภาษาอื่น (html/sql/pgsql/vue/css): completion ในตัวของภาษานั้น
            (a) => t._isJsLang() ? null : t._langDataCompletion(a)
          ],
          activateOnTyping: this.liveAutocomplete,
          icons: !0
        }),
        Tn.of([
          { key: "Mod-Alt-l", preventDefault: !0, run: () => (t.beautify(), !0) },
          // format code (Ctrl/Cmd+Alt+L)
          ...qn,
          ...Mn,
          ...Vn,
          ...Wn,
          ...jn,
          En
        ]),
        // syntax error: เส้นหยัก + gutter marker + tooltip real-time (linter เช็ค lang เอง → js เท่านั้น)
        this._jsLinter(),
        this._externalLinter(),
        xn(),
        // dynamic compartments
        this._cLang.of(e),
        this._cTheme.of(this._themeExt()),
        this._cReadonly.of(this._readonlyExt()),
        this._cWrap.of(this.wrap ? et.lineWrapping : []),
        // static + height (compartment → reactive ตาม minLines/maxLines/maxHeight)
        xr,
        this._cHeight.of(this._heightExt()),
        et.updateListener.of((a) => {
          if (!a.docChanged || t._isSettingContent) return;
          const l = a.state.doc.toString();
          t._contentBackup = l, t.$emit("update:value", l), t.$emit("onChange", l), t.$emit("onInput", l);
        }),
        et.domEventHandlers({
          blur: (a) => t.$emit("onBlur", a),
          focus: (a) => t.$emit("onFocus", a)
        })
      ];
    },
    // ===== extension factories =====
    _isJsLang() {
      const e = (this.lang || "").toLowerCase();
      return e === "javascript" || e === "js";
    },
    /** Vue directive completion (v-if/v-for/@/:) — เฉพาะ lang vue, ในตำแหน่ง attribute เท่านั้น */
    _vueDirectiveSource(e) {
      if ((this.lang || "").toLowerCase() !== "vue") return null;
      const t = e.matchBefore(/[@:#]?[\w-]*$/);
      if (!t) return null;
      const a = Vl(e.state).resolveInner(e.pos, -1);
      let l = !1, o = !1;
      for (let i = a; i; i = i.parent)
        (i.name === "OpenTag" || i.name === "SelfClosingTag") && (l = !0), i.name === "TagName" && (o = !0);
      return !l || o ? null : { from: t.from, options: ld, validFor: /^[@:#]?[\w-]*$/ };
    },
    /** LaTeX template completion — เฉพาะ lang latex/stex: ใน \VAR{}/\BLOCK{} → field/param names (จาก acePop) · หลัง `\` → directive snippet */
    _latexCompletionSource(e) {
      if (!/^(latex|stex|tex)$/i.test(this.lang || "")) return null;
      const t = e.state.doc.lineAt(e.pos), a = e.state.sliceDoc(t.from, e.pos);
      if (/\\(?:VAR|BLOCK)\{[^{}]*$/.test(a)) {
        const o = (this.acePop || []).map(Ul);
        if (!o.length) return null;
        const i = e.matchBefore(/[\w.$]*$/);
        return { from: i ? i.from : e.pos, options: o, validFor: /^[\w.$]*$/ };
      }
      const l = a.match(/\\([A-Za-z]*)$/);
      return l ? { from: e.pos - (l[1] ?? "").length - 1, options: od, validFor: /^\\[A-Za-z]*$/ } : null;
    },
    /** completion ของภาษาปัจจุบัน (html tag/attr, sql keyword, vue nested) ผ่าน language data */
    async _langDataCompletion(e) {
      const t = e.state.languageDataAt("autocomplete", e.pos);
      for (const a of t) {
        const l = typeof a == "function" ? await a(e) : Array.isArray(a) ? Rn(a)(e) : null;
        if (l) return l;
      }
      return null;
    },
    /** โหลด language extension — js sync (core), ภาษาอื่น lazy (dynamic import → vite code-split) */
    async _loadLangExt(e) {
      switch ((e || "javascript").toLowerCase()) {
        case "json":
        case "nosql":
          return (await import("@codemirror/lang-json")).json();
        case "css":
          return (await import("@codemirror/lang-css")).css();
        case "html":
          return (await import("@codemirror/lang-html")).html();
        case "vue":
          return (await import("@codemirror/lang-vue")).vue();
        case "sql": {
          const t = await import("@codemirror/lang-sql");
          return t.sql({ dialect: t.StandardSQL });
        }
        case "pgsql":
        case "postgresql": {
          const t = await import("@codemirror/lang-sql");
          return t.sql({ dialect: t.PostgreSQL });
        }
        case "latex":
        case "stex":
        case "tex":
          return Ln.define((await import("@codemirror/legacy-modes/mode/stex")).stex);
        default:
          return Gn();
      }
    },
    _themeExt() {
      const e = jl[this.syntaxTheme] ?? jl[Wr], t = this.isDarkMode ? e.dark : e.light;
      return [An(t), et.theme({}, { dark: this.isDarkMode })];
    },
    _readonlyExt() {
      return [Ga.readOnly.of(this.readonly), et.editable.of(!this.readonly)];
    },
    _heightStyle() {
      const t = {};
      return t.minHeight = this.minLines ? `${this.minLines * 20}px` : zl(this.minHeight), this.maxHeight ? t.maxHeight = zl(this.maxHeight) : this.maxLines && (t.maxHeight = `${this.maxLines * 20}px`), t;
    },
    _heightExt() {
      return et.theme({ "&": this._heightStyle() });
    },
    // ===== completion sources =====
    /** member-aware + type inference: `sdform.` (var) / chain / object-array literal → method ตาม type */
    _memberSource(e) {
      if (/^(pgsql|postgresql)$/i.test(this.lang || "")) return null;
      const t = this._effMemberSchema();
      if (!t || !Object.keys(t).length) return null;
      const a = e.state.doc.lineAt(e.pos), o = e.state.sliceDoc(a.from, e.pos).match(/\.([\w$]*)$/);
      if (!o) return null;
      const i = e.pos - (o[1] ?? "").length - 1, s = Zr(e.state.sliceDoc(a.from, i));
      if (!s) return null;
      const u = {
        docText: e.state.doc.toString(),
        docTree: Vl(e.state),
        beforePos: i - s.length
        // จุดเริ่ม chain → decl ต้องอยู่ก่อนหน้านี้
      }, m = ed(t, s, u);
      return !m || !m.length ? null : {
        from: i + 1,
        options: m.map(Yr),
        validFor: /^[\w$]*$/
      };
    },
    /** lang=vue เป็น template editor (scope = data/params) → ไม่ดึง JS completer ของ context อื่น (form event/api) จาก global store */
    _skipGlobalCompleter() {
      return (this.lang || "").toLowerCase() === "vue";
    },
    /** acePop/aceSnippet ที่ใช้จริง: props ถ้าส่งมา ไม่งั้น fallback global store (useCmCompleter) — เว้น vue template */
    _effAcePop() {
      return this.acePop?.length ? this.acePop : this._skipGlobalCompleter() ? [] : this.cmCompleter.state.acePop;
    },
    _effAceSnippet() {
      return this.aceSnippet?.length ? this.aceSnippet : this._skipGlobalCompleter() ? [] : this.cmCompleter.state.aceSnippet;
    },
    /** memberSchema: props ถ้าส่งมา ($types/keys) ไม่งั้น fallback global store (context set ไว้) — เว้น vue template */
    _effMemberSchema() {
      const e = this.memberSchema;
      return e && Object.keys(e).length ? e : this._skipGlobalCompleter() ? {} : this.cmCompleter.state.memberSchema || {};
    },
    /** flat: acePop + aceSnippet (อ่าน array ปัจจุบันทุกครั้ง → dynamic add/remove ใช้ได้เลย) */
    _flatSource(e) {
      if (/^(pgsql|postgresql)$/i.test(this.lang || "")) return null;
      const t = e.matchBefore(/[\w$]*/);
      if (!t || t.from === t.to && !e.explicit) return null;
      const a = this._effAcePop(), l = this._effAceSnippet();
      this._snippetCache.src !== l && (this._snippetCache = { src: l, items: (l || []).map(Gr) });
      const o = [...(a || []).map(Ul), ...this._snippetCache.items];
      return o.length ? { from: t.from, options: o, validFor: /^[\w$]*$/ } : null;
    },
    // ===== public API (compat กับ SdAceEditor) =====
    focus() {
      this._view?.focus();
    },
    blur() {
      this._view?.contentDOM?.blur();
    },
    selectAll() {
      this._view && this._view.dispatch({ selection: { anchor: 0, head: this._view.state.doc.length } });
    },
    /** format code ทั้งเอกสาร (js-beautify) — เรียกผ่าน ref หรือกด Mod-Alt-L (Ctrl/Cmd+Alt+L) · sql/pgsql ไม่รองรับ */
    async beautify() {
      if (!this._view) return;
      const e = this._view.state.doc.toString(), t = await this._runBeautify(e);
      t != null && t !== e && this._setDoc(t);
    },
    async _runBeautify(e) {
      if (!e.trim()) return null;
      const t = (this.lang || "javascript").toLowerCase(), a = await import("js-beautify"), l = a.html ? a : a.default, o = { indent_with_tabs: !0, preserve_newlines: !0, max_preserve_newlines: 2, end_with_newline: !1, wrap_line_length: 0 };
      switch (t) {
        case "html":
        case "vue":
          return l.html(e, o);
        case "css":
          return l.css(e, o);
        case "json":
        case "nosql":
        case "js":
        case "javascript":
          return l.js(e, o);
        default:
          return null;
      }
    },
    setValue(e) {
      this._setDoc(e ?? "");
    },
    getValue() {
      return this._view ? this._view.state.doc.toString() : this.value;
    },
    getEditorAnnotations() {
      if (!this._view || !this._isJsLang()) return [];
      const e = this._view.state.doc;
      return this._jsSyntaxErrors(e.toString()).map((t) => {
        const a = e.lineAt(t.from);
        return { row: a.number - 1, column: t.from - a.from, text: "Syntax error", type: "error" };
      });
    },
    /**
     * หา syntax error ของโค้ด JS ด้วย Lezer parser → คืนช่วง { from, to } ใน "โค้ดจริง"
     * โค้ด event/API รันใน async function wrapper ตอน runtime → wrap ก่อน parse
     * กัน false-positive จาก top-level await/return ที่จริงๆ ถูกต้อง
     * ใช้ร่วมกันทั้ง gate (getEditorAnnotations) และ visual lint (_jsLinter)
     */
    _jsSyntaxErrors(e) {
      const t = `(async function () {
`, a = t.length, l = e.length, o = t + e + `
})`, i = (f) => Math.min(Math.max(f - a, 0), l), s = [], u = /* @__PURE__ */ new Set(), m = Ho.parse(o).cursor();
      do {
        if (!m.type.isError) continue;
        let f = i(m.from), c = Math.max(i(m.to), f);
        f === c && (c < l ? c++ : f = Math.max(0, f - 1)), !u.has(f) && (u.add(f), s.push({ from: f, to: c }));
      } while (m.next());
      return s;
    },
    /** CodeMirror linter — เส้นหยัก + gutter marker + tooltip แบบ real-time (เฉพาะ JS) */
    _jsLinter() {
      const e = this;
      return Al((t) => e._isJsLang() ? e._jsSyntaxErrors(t.state.doc.toString()).map((a) => ({
        from: a.from,
        to: a.to,
        severity: "error",
        message: "Syntax error"
      })) : []);
    },
    /** linter รับ diagnostics จากภายนอก (prop `diagnostics` หรือ method `setDiagnostics`) — ทุก lang เช่น LaTeX compile error */
    _externalLinter() {
      const e = this;
      return Al((t) => Kr(t.state.doc, e._extDiag ?? e.diagnostics));
    },
    /** ป้อน diagnostics แบบ imperative ผ่าน ref → override prop `diagnostics` · ส่ง [] = เคลียร์ */
    setDiagnostics(e) {
      this._extDiag = Array.isArray(e) ? e : [], this._view && El(this._view);
    },
    /** เพิ่ม completion items แบบ imperative (เก็บต่อท้าย acePop ปัจจุบัน) */
    addCompleter(e) {
      Array.isArray(e) && this.acePop.push(...e);
    },
    /** เพิ่ม snippet items แบบ imperative */
    addSnippet(e) {
      Array.isArray(e) && this.aceSnippet.push(...e);
    },
    // ===== internal =====
    _setDoc(e) {
      if (this._view && this._contentBackup !== e) {
        try {
          this._isSettingContent = !0, this._view.dispatch({
            changes: { from: 0, to: this._view.state.doc.length, insert: e }
          });
        } finally {
          this._isSettingContent = !1;
        }
        this._contentBackup = e;
      }
    }
  },
  watch: {
    value(e) {
      this._contentBackup !== e && this._setDoc(e);
    },
    isDarkMode() {
      this._view?.dispatch({ effects: this._cTheme.reconfigure(this._themeExt()) });
    },
    syntaxTheme() {
      this._view?.dispatch({ effects: this._cTheme.reconfigure(this._themeExt()) });
    },
    readonly() {
      this._view?.dispatch({ effects: this._cReadonly.reconfigure(this._readonlyExt()) });
    },
    async lang(e) {
      const t = await this._loadLangExt(e);
      this.lang !== e || !this._view || this._view.dispatch({ effects: this._cLang.reconfigure(t) });
    },
    wrap(e) {
      this._view?.dispatch({ effects: this._cWrap.reconfigure(e ? et.lineWrapping : []) });
    },
    minLines() {
      this._view?.dispatch({ effects: this._cHeight.reconfigure(this._heightExt()) });
    },
    maxLines() {
      this._view?.dispatch({ effects: this._cHeight.reconfigure(this._heightExt()) });
    },
    minHeight() {
      this._view?.dispatch({ effects: this._cHeight.reconfigure(this._heightExt()) });
    },
    maxHeight() {
      this._view?.dispatch({ effects: this._cHeight.reconfigure(this._heightExt()) });
    },
    diagnostics: {
      deep: !0,
      handler() {
        this._extDiag = null, this._view && El(this._view);
      }
    }
  }
}), nd = {
  ref: "host",
  class: "sd-codemirror"
};
function sd(e, t, a, l, o, i) {
  return n(), v("div", nd, null, 512);
}
const xo = /* @__PURE__ */ U(id, [["render", sd]]), rd = O({
  name: "Menubar",
  components: {},
  props: {
    editor: {
      type: Nt,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  methods: {
    generateCommandButtonComponentSpecs() {
      return this.editor.extensionManager.extensions.reduce((t, a) => {
        const { button: l } = a.options;
        if (!l || typeof l != "function") return t;
        const o = l({
          editor: this.editor,
          t: this.t,
          extension: a
        });
        return Array.isArray(o) ? [...t, ...o] : [...t, o];
      }, []);
    }
  }
}), dd = { class: "el-tiptap-editor__menu-bar" };
function ud(e, t, a, l, o, i) {
  return n(), v("div", dd, [
    (n(!0), v(L, null, J(e.generateCommandButtonComponentSpecs(), (s, u) => (n(), h(Ot(s.component), ae({
      key: "command-button" + u,
      "enable-tooltip": e.enableTooltip
    }, { ref_for: !0 }, s.componentProps, { readonly: e.isCodeViewMode }, Mo(s.componentEvents || {})), null, 16, ["enable-tooltip", "readonly"]))), 128))
  ]);
}
const Ko = /* @__PURE__ */ U(rd, [["render", ud]]);
function pd() {
}
function Go(e, t, a) {
  return e < t ? t : e > a ? a : e;
}
function md(e) {
  const t = new FileReader();
  return new Promise((a, l) => {
    t.onload = (o) => a(o.target.result), t.onerror = l, t.readAsDataURL(e);
  });
}
const hd = O({
  name: "icon",
  props: {
    name: String
  },
  computed: {
    icon() {
      return `editor-${this.name}`;
    }
  }
});
function fd(e, t, a, l, o, i) {
  const s = ve;
  return n(), h(s, {
    "icon-name": e.icon,
    class: "text-4"
  }, null, 8, ["icon-name"]);
}
const Yo = /* @__PURE__ */ U(hd, [["render", fd]]), cd = O({
  components: {
    ElTooltip: fn,
    VIcon: Yo
  },
  props: {
    icon: {
      type: String,
      required: !0
    },
    isActive: {
      type: Boolean,
      default: !1
    },
    tooltip: {
      type: String,
      required: !0
    },
    enableTooltip: {
      type: Boolean,
      required: !0
    },
    command: {
      type: Function,
      default: pd
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    placement: {
      type: String,
      default: "top"
    }
  },
  computed: {
    commandButtonClass() {
      return {
        "el-tiptap-editor__command-button": !0,
        "el-tiptap-editor__command-button--active": this.isActive,
        "el-tiptap-editor__command-button--readonly": this.readonly
      };
    }
  },
  methods: {
    onClick() {
      this.readonly || this.command();
    }
  }
});
function bd(e, t, a, l, o, i) {
  const s = X("v-icon"), u = sl;
  return n(), v("div", null, [
    d(u, {
      content: e.tooltip,
      "show-after": 350,
      disabled: !e.enableTooltip || e.readonly,
      effect: "dark",
      placement: e.placement
    }, {
      default: r(() => [
        $("span", {
          class: Y(e.commandButtonClass),
          onMousedown: t[0] || (t[0] = j(() => {
          }, ["prevent"])),
          onClick: t[1] || (t[1] = (...m) => e.onClick && e.onClick(...m))
        }, [
          d(s, { name: e.icon }, null, 8, ["name"])
        ], 34)
      ]),
      _: 1
    }, 8, ["content", "disabled", "placement"])
  ]);
}
const H = /* @__PURE__ */ U(cd, [["render", bd]]);
function ua(e) {
  const { selection: t, doc: a } = e, { from: l, to: o } = t;
  let i = !0, s = !1;
  return a.nodesBetween(l, o, (u) => {
    const m = u.type.name;
    return i && (m === "table" || m === "table_row" || m === "table_column" || m === "table_cell") && (i = !1, s = !0), i;
  }), s;
}
function gd(e) {
  return ua(e) && as(e);
}
function yd(e) {
  return ua(e) && ts(e);
}
const vd = O({
  name: "MergeCellCommandButton",
  components: {
    CommandButton: H
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    }
  },
  computed: {
    isTableActive() {
      return ua(this.editor.state);
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0);
    return { t: e, enableTooltip: t };
  },
  methods: {
    mergeCell() {
      return this.editor.commands.mergeCells();
    },
    splitCell() {
      return this.editor.commands.splitCell();
    },
    toggleHeaderCell() {
      return this.editor.commands.toggleHeaderCell();
    },
    alignLeft() {
      return this.editor.commands.unsetTextAlign();
    },
    alignCenter() {
      let e = this.editor.commands;
      return this.editor.isActive({ textAlign: "center" }) ? e.unsetTextAlign() : e.setTextAlign("center");
    },
    alignRight() {
      let e = this.editor.commands;
      return this.editor.isActive({ textAlign: "right" }) ? e.unsetTextAlign() : e.setTextAlign("right");
    },
    alignJustify() {
      let e = this.editor.commands;
      return this.editor.isActive({ textAlign: "justify" }) ? e.unsetTextAlign() : e.setTextAlign("justify");
    }
  }
});
function wd(e, t, a, l, o, i) {
  const s = H;
  return n(), v(L, null, [
    d(s, {
      command: e.mergeCell,
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.Table.buttons.merge_cells"),
      readonly: !e.isTableActive,
      icon: "merge-cells"
    }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
    d(s, {
      command: e.splitCell,
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.Table.buttons.split_cell"),
      readonly: !e.isTableActive,
      icon: "split-cells"
    }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
    d(s, {
      command: e.toggleHeaderCell,
      "enable-tooltip": e.enableTooltip,
      tooltip: "Header Cell",
      readonly: !e.isTableActive,
      icon: "table-header"
    }, null, 8, ["command", "enable-tooltip", "readonly"]),
    d(s, {
      command: e.alignLeft,
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.TextAlign.buttons.align_left.tooltip"),
      readonly: !e.isTableActive,
      icon: "align-left"
    }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
    d(s, {
      command: e.alignCenter,
      "enable-tooltip": e.enableTooltip,
      "is-active": e.editor.isActive({ textAlign: "center" }),
      tooltip: e.t("editor.extensions.TextAlign.buttons.align_center.tooltip"),
      readonly: !e.isTableActive,
      icon: "align-center"
    }, null, 8, ["command", "enable-tooltip", "is-active", "tooltip", "readonly"]),
    d(s, {
      command: e.alignRight,
      "enable-tooltip": e.enableTooltip,
      "is-active": e.editor.isActive({ textAlign: "right" }),
      tooltip: e.t("editor.extensions.TextAlign.buttons.align_right.tooltip"),
      readonly: !e.isTableActive,
      icon: "align-right"
    }, null, 8, ["command", "enable-tooltip", "is-active", "tooltip", "readonly"]),
    d(s, {
      command: e.alignJustify,
      "enable-tooltip": e.enableTooltip,
      "is-active": e.editor.isActive({ textAlign: "justify" }),
      tooltip: e.t("editor.extensions.TextAlign.buttons.align_justify.tooltip"),
      readonly: !e.isTableActive,
      icon: "align-justify"
    }, null, 8, ["command", "enable-tooltip", "is-active", "tooltip", "readonly"])
  ], 64);
}
const Jo = /* @__PURE__ */ U(vd, [["render", wd]]), Sd = O({
  name: "MergeCellBubbleMenu",
  components: {
    MergeCellCommandButton: Jo
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    }
  }
}), Fd = { class: "mergecell-bubble-menu" };
function _d(e, t, a, l, o, i) {
  const s = Jo;
  return n(), v("div", Fd, [
    d(s, { editor: e.editor }, null, 8, ["editor"])
  ]);
}
const Xo = /* @__PURE__ */ U(Sd, [["render", _d]]), kd = O({
  name: "UnlinkCommandButton",
  components: {
    CommandButton: H
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0);
    return { t: e, enableTooltip: t };
  },
  methods: {
    unlink() {
      return this.editor.commands.unsetLink();
    }
  }
});
function Cd(e, t, a, l, o, i) {
  const s = H;
  return n(), h(s, {
    command: e.unlink,
    "enable-tooltip": e.enableTooltip,
    tooltip: e.t("editor.extensions.Link.unlink.tooltip"),
    icon: "unlink"
  }, null, 8, ["command", "enable-tooltip", "tooltip"]);
}
const Qo = /* @__PURE__ */ U(kd, [["render", Cd]]), Dd = O({
  name: "EditLinkCommandButton",
  components: {
    ElDialog: jt,
    ElForm: da,
    ElFormItem: ra,
    ElInput: Ct,
    ElCheckbox: sa,
    ElButton: kt,
    CommandButton: H
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    },
    initLinkAttrs: {
      type: Object,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0);
    return { t: e, enableTooltip: t };
  },
  data() {
    return {
      resizeCleanup: null,
      linkAttrs: this.initLinkAttrs,
      editLinkDialogVisible: !1,
      popupWidth: "40%"
    };
  },
  mounted() {
    this.popupWidth = oe("40%"), this.resizeCleanup = Pe(() => {
      this.$nextTick(() => {
        this.popupWidth = oe("40%");
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    updateLinkAttrs() {
      let e = this.editor.commands;
      this.linkAttrs.openInNewTab ? e.setLink({
        href: this.linkAttrs.href,
        target: "_blank"
      }) : e.setLink({ href: this.linkAttrs.href }), this.closeEditLinkDialog();
    },
    openEditLinkDialog() {
      this.initLinkAttrs && this.initLinkAttrs.href && (this.linkAttrs.href = this.initLinkAttrs.href, this.linkAttrs.openInNewTab = this.initLinkAttrs.target === "_blank"), this.editLinkDialogVisible = !0;
    },
    closeEditLinkDialog() {
      this.editLinkDialogVisible = !1;
    }
  }
});
function Id(e, t, a, l, o, i) {
  const s = H, u = Te, m = wt, f = vt, c = ie, F = Ce;
  return n(), v("div", null, [
    d(s, {
      command: e.openEditLinkDialog,
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.Link.edit.tooltip"),
      icon: "edit"
    }, null, 8, ["command", "enable-tooltip", "tooltip"]),
    d(F, {
      title: e.t("editor.extensions.Link.edit.control.title"),
      modelValue: e.editLinkDialogVisible,
      "onUpdate:modelValue": t[2] || (t[2] = (D) => e.editLinkDialogVisible = D),
      "append-to-body": !0,
      width: e.popupWidth,
      custom: "el-tiptap-edit-link-dialog"
    }, {
      footer: r(() => [
        d(c, {
          round: "",
          onClick: e.closeEditLinkDialog
        }, {
          default: r(() => [
            I(A(e.t("editor.extensions.Link.edit.control.cancel")), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        d(c, {
          type: "primary",
          round: "",
          onMousedown: t[1] || (t[1] = j(() => {
          }, ["prevent"])),
          onClick: e.updateLinkAttrs
        }, {
          default: r(() => [
            I(A(e.t("editor.extensions.Link.edit.control.confirm")), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: r(() => [
        d(f, {
          model: e.linkAttrs,
          "label-position": "right"
        }, {
          default: r(() => [
            d(m, {
              label: e.t("editor.extensions.Link.edit.control.href"),
              prop: "href"
            }, {
              default: r(() => [
                d(u, {
                  modelValue: e.linkAttrs.href,
                  "onUpdate:modelValue": t[0] || (t[0] = (D) => e.linkAttrs.href = D),
                  autocomplete: "off"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["label"])
          ]),
          _: 1
        }, 8, ["model"])
      ]),
      _: 1
    }, 8, ["title", "modelValue", "width"])
  ]);
}
const Zo = /* @__PURE__ */ U(Dd, [["render", Id]]), $d = O({
  name: "OpenLinkCommandButton",
  components: {
    CommandButton: H
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    },
    url: {
      type: String,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0);
    return { t: e, enableTooltip: t };
  },
  methods: {
    openLink() {
      if (this.url) {
        const e = window.open();
        e && (e.opener = null, e.location.href = this.url);
      }
    }
  }
});
function Td(e, t, a, l, o, i) {
  const s = H;
  return n(), h(s, {
    command: e.openLink,
    "enable-tooltip": e.enableTooltip,
    tooltip: e.t("editor.extensions.Link.open.tooltip"),
    icon: "external-link"
  }, null, 8, ["command", "enable-tooltip", "tooltip"]);
}
const ei = /* @__PURE__ */ U($d, [["render", Td]]), Pd = O({
  name: "LinkBubbleMenu",
  components: {
    OpenLinkCommandButton: ei,
    EditLinkCommandButton: Zo,
    UnlinkCommandButton: Qo
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    }
  },
  computed: {
    linkAttrs() {
      return this.editor.getAttributes("link");
    }
  }
}), Md = { class: "link-bubble-menu" };
function Vd(e, t, a, l, o, i) {
  const s = ei, u = Zo, m = Qo;
  return n(), v("div", Md, [
    re(e.$slots, "prepend"),
    d(s, {
      editor: e.editor,
      url: e.linkAttrs.href
    }, null, 8, ["editor", "url"]),
    d(u, {
      editor: e.editor,
      "init-link-attrs": e.linkAttrs
    }, null, 8, ["editor", "init-link-attrs"]),
    d(m, { editor: e.editor }, null, 8, ["editor"])
  ]);
}
const ti = /* @__PURE__ */ U(Pd, [["render", Vd]]), Ed = O({
  name: "MenuBubble",
  components: {
    BubbleMenu: Xn,
    LinkBubbleMenu: ti,
    MergeCellBubbleMenu: Xo,
    VIcon: Yo,
    FloatingMenu: Jn
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    },
    menuBubbleOptions: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      activeMenu: "none",
      isLinkBack: !1,
      activeImage: !1
    };
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1), l = q();
    return { t: e, enableTooltip: t, isCodeViewMode: a, parentRef: l };
  },
  computed: {
    bubbleMenuEnable() {
      return this.linkMenuEnable || this.textMenuEnable;
    },
    linkMenuEnable() {
      const { schema: e } = this.editor;
      return !!e.marks.link;
    },
    textMenuEnable() {
      return this.editor.extensionManager.extensions.some((t) => t.options.bubble);
    },
    isLinkSelection() {
      const { state: e } = this.editor, { tr: t } = e, { selection: a } = t;
      return this.$_isLinkSelection(a);
    },
    isTableActive() {
      return ua(this.editor.state);
    }
  },
  watch: {
    "editor.state.selection": function(e) {
      if (this.$_isLinkSelection(e))
        this.isLinkBack || this.setMenuType(
          "link"
          /* LINK */
        );
      else {
        const t = this.editor.state;
        this.activeImage = !!t.selection.node, this.activeMenu = this.$_getCurrentMenuType(), this.isLinkBack = !1;
      }
    }
  },
  methods: {
    generateCommandButtonComponentSpecs() {
      return this.editor.extensionManager.extensions.reduce((t, a) => {
        if (!a.options.bubble) return t;
        const { button: l } = a.options;
        if (!l || typeof l != "function") return t;
        const o = l({
          editor: this.editor,
          t: this.t,
          // i18n
          extension: a
        });
        return Array.isArray(o) ? [...t, ...o] : [...t, o];
      }, []);
    },
    linkBack() {
      this.setMenuType(
        "default"
        /* DEFAULT */
      ), this.isLinkBack = !0;
    },
    setMenuType(e) {
      this.activeMenu = e;
    },
    $_isLinkSelection(e) {
      return this.editor.isActive("link");
    },
    $_getCurrentMenuType() {
      return this.isLinkSelection ? "link" : this.editor.state.selection instanceof ls ? "cell" : (this.editor.state.selection instanceof ja || this.editor.state.selection instanceof cl) && !this.activeImage ? "default" : "none";
    }
  }
}), Ad = { ref: "parentRef" }, Ld = { class: "el-tiptap-editor__menu-floating" };
function Bd(e, t, a, l, o, i) {
  const s = X("v-icon"), u = ti, m = Xo, f = X("bubble-menu"), c = H, F = Pa, D = X("floating-menu");
  return n(), v("div", Ad, [
    e.editor ? (n(), h(f, {
      key: 0,
      editor: e.editor,
      "tippy-options": { duration: 100, appendTo: e.parentRef ? e.parentRef : "parent" },
      "should-show": ({ editor: g, view: C, state: _, oldState: p, from: y, to: S }) => e.activeImage ? !1 : g.isActive("paragraph") && _.selection.$anchor.parentOffset !== _.selection.$head.parentOffset
    }, {
      default: r(() => [
        $("div", {
          class: Y([{
            "el-tiptap-editor__menu-bubble--active": e.bubbleMenuEnable
          }, "el-tiptap-editor__menu-bubble"])
        }, [
          e.activeMenu === "link" ? (n(), h(u, {
            key: 0,
            editor: e.editor
          }, {
            prepend: r(() => [
              e.textMenuEnable ? (n(), v("div", {
                key: 0,
                class: "el-tiptap-editor__command-button",
                onMousedown: t[0] || (t[0] = j(() => {
                }, ["prevent"])),
                onClick: t[1] || (t[1] = (...g) => e.linkBack && e.linkBack(...g))
              }, [
                d(s, { name: "arrow-left" })
              ], 32)) : b("", !0)
            ]),
            _: 1
          }, 8, ["editor"])) : b("", !0),
          e.activeMenu === "cell" ? (n(), h(m, {
            key: 1,
            editor: e.editor
          }, null, 8, ["editor"])) : e.activeMenu === "default" ? (n(!0), v(L, { key: 2 }, J(e.generateCommandButtonComponentSpecs(), (g, C) => (n(), h(Ot(g.component), ae({
            key: "command-button" + C,
            "enable-tooltip": e.enableTooltip
          }, { ref_for: !0 }, g.componentProps, { readonly: e.isCodeViewMode }, Mo(g.componentEvents || {})), null, 16, ["enable-tooltip", "readonly"]))), 128)) : b("", !0)
        ], 2)
      ]),
      _: 1
    }, 8, ["editor", "tippy-options", "should-show"])) : b("", !0),
    e.editor ? (n(), h(D, {
      key: 1,
      editor: e.editor,
      "tippy-options": { duration: 100, appendTo: e.parentRef ? e.parentRef : "parent" },
      "should-show": ({ editor: g, view: C, state: _, oldState: p }) => _.selection.$anchor.parentOffset == _.selection.$head.parentOffset && _.selection.$head.parentOffset == 0 && g.isActive("paragraph") && g.isActive("table")
    }, {
      default: r(() => [
        $("div", Ld, [
          d(c, {
            command: e.editor.commands.addColumnAfter,
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Table.buttons.add_column_after"),
            placement: "right",
            readonly: !e.isTableActive,
            icon: "add_column_after"
          }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
          d(c, {
            command: e.editor.commands.addColumnBefore,
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Table.buttons.add_column_before"),
            placement: "right",
            readonly: !e.isTableActive,
            icon: "add_column_before"
          }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
          d(c, {
            command: e.editor.commands.deleteColumn,
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Table.buttons.delete_column"),
            placement: "right",
            readonly: !e.isTableActive,
            icon: "delete_column"
          }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
          d(F, { style: { margin: "5px 0" } }),
          d(c, {
            command: e.editor.commands.addRowAfter,
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Table.buttons.add_row_after"),
            placement: "right",
            readonly: !e.isTableActive,
            icon: "add_row_after"
          }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
          d(c, {
            command: e.editor.commands.addRowBefore,
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Table.buttons.add_row_before"),
            placement: "right",
            readonly: !e.isTableActive,
            icon: "add_row_before"
          }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]),
          d(c, {
            command: e.editor.commands.deleteRow,
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Table.buttons.delete_row"),
            placement: "right",
            readonly: !e.isTableActive,
            icon: "delete_row"
          }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"])
        ])
      ]),
      _: 1
    }, 8, ["editor", "tippy-options", "should-show"])) : b("", !0)
  ], 512);
}
const ai = /* @__PURE__ */ U(Ed, [["render", Bd]]), Od = {
  editor: {
    extensions: {
      Bold: {
        tooltip: "Bold"
      },
      Underline: {
        tooltip: "Underline"
      },
      Italic: {
        tooltip: "Italic"
      },
      Strike: {
        tooltip: "Strike through"
      },
      Heading: {
        tooltip: "Heading",
        buttons: {
          paragraph: "Paragraph",
          heading: "Heading"
        }
      },
      Blockquote: {
        tooltip: "Block quote"
      },
      CodeBlock: {
        tooltip: "Code block"
      },
      Link: {
        add: {
          tooltip: "Apply link",
          control: {
            title: "Apply Link",
            href: "Href",
            open_in_new_tab: "Open in new tab",
            confirm: "Apply",
            cancel: "Cancel"
          }
        },
        edit: {
          tooltip: "Edit link",
          control: {
            title: "Edit Link",
            href: "Href",
            open_in_new_tab: "Open in new tab",
            confirm: "Update",
            cancel: "Cancel"
          }
        },
        unlink: {
          tooltip: "Unlink"
        },
        open: {
          tooltip: "Open link"
        }
      },
      Image: {
        buttons: {
          insert_image: {
            tooltip: "Insert image",
            external: "Insert Image By Url",
            upload: "Upload Image"
          },
          remove_image: {
            tooltip: "Remove"
          },
          image_options: {
            tooltip: "Image options"
          },
          display: {
            tooltip: "Display",
            inline: "Inline",
            block: "Break Text",
            left: "Float Left",
            right: "Float Right"
          }
        },
        control: {
          insert_by_url: {
            title: "Insert image",
            placeholder: "Url of image",
            confirm: "Insert",
            cancel: "Cancel",
            invalid_url: "Please enter the correct url"
          },
          upload_image: {
            title: "Upload image",
            button: "Choose an image file or drag it here"
          },
          edit_image: {
            title: "Edit image",
            confirm: "Update",
            cancel: "Cancel",
            form: {
              src: "Image Url",
              alt: "Alternative Text",
              width: "Width",
              height: "Height"
            }
          }
        }
      },
      Iframe: {
        tooltip: "Insert iFrame",
        control: {
          title: "Insert iFrame",
          placeholder: "Href",
          confirm: "Insert",
          cancel: "Cancel"
        }
      },
      BulletList: {
        tooltip: "Bullet list"
      },
      OrderedList: {
        tooltip: "Ordered list"
      },
      TodoList: {
        tooltip: "Todo list"
      },
      TextAlign: {
        buttons: {
          align_left: {
            tooltip: "Align left"
          },
          align_center: {
            tooltip: "Align center"
          },
          align_right: {
            tooltip: "Align right"
          },
          align_justify: {
            tooltip: "Align justify"
          }
        }
      },
      FontType: {
        tooltip: "Font family"
      },
      FontSize: {
        tooltip: "Font size",
        default: "default"
      },
      TextColor: {
        tooltip: "Text color"
      },
      TextHighlight: {
        tooltip: "Text highlight"
      },
      LineHeight: {
        tooltip: "Line height"
      },
      Table: {
        tooltip: "Table",
        buttons: {
          insert_table: "Insert Table",
          add_column_before: "Add Column Before",
          add_column_after: "Add Column After",
          delete_column: "Delete Column",
          add_row_before: "Add Row Before",
          add_row_after: "Add Row After",
          delete_row: "Delete Row",
          merge_cells: "Merge Cells",
          split_cell: "Split Cell",
          delete_table: "Delete Table"
        }
      },
      Indent: {
        buttons: {
          indent: {
            tooltip: "Indent"
          },
          outdent: {
            tooltip: "Outdent"
          }
        }
      },
      FormatClear: {
        tooltip: "Clear format"
      },
      HorizontalRule: {
        tooltip: "Horizontal rule"
      },
      History: {
        tooltip: {
          undo: "Undo",
          redo: "Redo"
        }
      },
      Fullscreen: {
        tooltip: {
          fullscreen: "Full screen",
          exit_fullscreen: "Exit full screen"
        }
      },
      Print: {
        tooltip: "Print"
      },
      Preview: {
        tooltip: "Preview",
        dialog: {
          title: "Preview"
        }
      },
      SelectAll: {
        tooltip: "Select all"
      },
      CodeView: {
        tooltip: "Code view"
      }
    },
    characters: "Characters"
  }
}, Hl = {
  buildI18nHandler(e = Od) {
    return function(a) {
      return a.split(".").reduce((o, i) => o[i], e);
    };
  }
};
function Nd(e) {
  return {
    characters: Z(() => e.value?.storage.characterCount.characters())
  };
}
function jd(e) {
  const t = q(!1), a = q(""), l = (o) => {
    t.value = o;
  };
  return tt(t, (o) => {
    o ? a.value = be(e).getHTML() : be(e).commands.setContent(
      a.value,
      !0
      /* emitUpdate */
    );
  }), ze("isCodeViewMode", t), ze("toggleIsCodeViewMode", l), {
    isCodeViewMode: t,
    codeViewHtml: a
  };
}
const ql = "px";
function Ud({
  width: e,
  height: t
}) {
  return [{
    width: isNaN(Number(e)) ? e : `${e}${ql}`,
    height: isNaN(Number(t)) ? t : `${t}${ql}`
  }];
}
const Rd = O({
  name: "ElementTiptap",
  emits: ["update:modelValue", "update:content", "onUpdate", "change", "onCreate", "onTransaction", "onBlur", "onFocus", "onDestroy"],
  components: {
    EditorContent: Qn,
    MenuBar: Ko,
    MenuBubble: ai
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    // content: {
    // 	type: String,
    // 	default: '',
    // },
    extensions: {
      type: Array,
      default: []
    },
    placeholder: {
      type: String,
      default: ""
    },
    lang: {
      type: String,
      default: "en"
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    output: {
      type: String,
      default: "html",
      validator(e) {
        return ["html", "json"].includes(e);
      }
    },
    spellcheck: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    tooltip: {
      type: Boolean,
      default: !0
    },
    enableCharCount: {
      type: Boolean,
      default: !0
    },
    charCountMax: {
      type: Number,
      default: void 0
    },
    // ----- I18n -----
    locale: {
      type: Object,
      default: void 0
    },
    // ----- Editor Class -----
    editorClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorContentClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorMenubarClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorBubbleMenuClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorFooterClass: {
      type: [String, Array, Object],
      default: void 0
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  watch: {
    modelValue(e) {
      this.editor && (this.editActive === !0 ? this.editActive = !1 : (this.content = e, this.editor.commands.setContent(e)));
    },
    charCountMax: {
      handler(e) {
        if (this.editor && this.editor.extensionManager.extensions)
          for (const t in this.editor.extensionManager.extensions) {
            const a = this.editor.extensionManager.extensions[t];
            a && a.name && a.name == "characterCount" && (a.options.limit = e);
          }
      }
    }
  },
  computed: {
    editorStyle() {
      return Ud({
        width: this.width,
        height: this.height || void 0
      });
    },
    countMax() {
      return this.charCountMax || void 0;
    }
  },
  setup(e, { emit: t }) {
    const a = q(""), l = q(!1), o = e.extensions;
    o.push(
      is.configure({
        emptyEditorClass: "el-tiptap-editor--empty",
        emptyNodeClass: "el-tiptap-editor__placeholder",
        showOnlyCurrent: !1,
        placeholder: ({ node: _ }) => e.placeholder
      })
    ), e.enableCharCount !== !1 && o.push(
      ns.configure({
        limit: e.charCountMax
      })
    );
    const i = ({ editor: _ }) => {
      let p;
      e.output === "html" ? p = _.getHTML() : p = _.getJSON(), l.value = !0, a.value = p, t("update:modelValue", p), t("update:content", p), t("onUpdate", p, _), t("change", p);
    }, s = Zn({
      content: a.value,
      extensions: o,
      editable: !e.readonly,
      onCreate: (_) => {
        a.value = e.modelValue, _.editor.commands.setContent(a.value), t("onCreate", _);
      },
      onTransaction: (_) => {
        t("onTransaction", _);
      },
      onFocus: (_) => {
        t("onFocus", _);
      },
      onBlur: (_) => {
        t("onBlur", _);
      },
      onDestroy: (_) => {
        t("onDestroy", _);
      },
      onUpdate: i
    });
    on(() => {
      be(s)?.setOptions({
        editorProps: {
          attributes: {
            spellcheck: String(e.spellcheck)
          }
        }
      });
    });
    const u = Hl.buildI18nHandler(nn(e.locale)), m = (..._) => u.apply(Hl, _), f = q(!1), c = (_) => {
      f.value = _;
    };
    ze("isFullscreen", f), ze("toggleFullscreen", c), ze("enableTooltip", e.tooltip), ze("userState", e.userState);
    const { isCodeViewMode: F, codeViewHtml: D } = jd(s);
    ze("isCodeViewMode", F);
    const { characters: g } = Nd(s), C = Z(() => e.enableCharCount && !be(F));
    return ze("t", m), ze("et", this), {
      t: m,
      onUpdate: i,
      editor: s,
      content: a,
      editActive: l,
      characters: g,
      showFooter: C,
      isFullscreen: f,
      isCodeViewMode: F,
      codeViewHtml: D
    };
  }
}), zd = { class: "el-tiptap-editor__characters" };
function Hd(e, t, a, l, o, i) {
  const s = ai, u = Ko, m = xo, f = X("editor-content");
  return e.editor ? (n(), v("div", {
    key: 0,
    style: le(e.editorStyle),
    class: Y([
      {
        "el-tiptap-editor": !0,
        "el-tiptap-editor--fullscreen": e.isFullscreen,
        "el-tiptap-editor--with-footer": e.showFooter
      },
      e.editorClass
    ])
  }, [
    e.readonly ? b("", !0) : (n(), h(s, {
      key: 0,
      editor: e.editor,
      class: Y(e.editorBubbleMenuClass)
    }, null, 8, ["editor", "class"])),
    e.readonly ? b("", !0) : (n(), h(u, {
      key: 1,
      editor: e.editor,
      class: Y(e.editorMenubarClass)
    }, null, 8, ["editor", "class"])),
    e.isCodeViewMode && !e.readonly ? (n(), v("div", {
      key: 2,
      class: Y({
        "el-tiptap-editor__ace": !0,
        "border-bottom-radius": e.isCodeViewMode
      })
    }, [
      d(m, {
        lang: "html",
        "auto-beautify": !0,
        value: e.codeViewHtml,
        "onUpdate:value": t[0] || (t[0] = (c) => e.codeViewHtml = c),
        "min-lines": 18,
        "max-lines": 30,
        style: { width: "100%" }
      }, null, 8, ["value"])
    ], 2)) : b("", !0),
    Ve(d(f, {
      editor: e.editor,
      class: Y([
        {
          "el-tiptap-editor__content": !0,
          "el-tiptap-editor__content_readonly": e.readonly
        },
        e.editorContentClass
      ])
    }, null, 8, ["editor", "class"]), [
      [Vo, !e.isCodeViewMode]
    ]),
    e.showFooter && !e.readonly ? (n(), v("div", {
      key: 3,
      class: Y([
        {
          "el-tiptap-editor__footer": !0
        },
        e.editorFooterClass
      ])
    }, [
      $("span", zd, A(e.t("editor.characters")) + ": " + A(e.characters) + " " + A(e.countMax ? `/ ${e.countMax}` : ""), 1)
    ], 2)) : b("", !0)
  ], 6)) : b("", !0);
}
const qd = /* @__PURE__ */ U(Rd, [["render", Hd]]), Wd = ut.create({
  name: "title",
  // schema
  content: "inline*",
  addOptions() {
    return {
      ...this.parent?.(),
      placeholder: ""
    };
  },
  parseHTML() {
    return [{ tag: "h1" }];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["h1", ot(e), 0];
  }
}), Wl = ss.extend({
  addOptions() {
    return {
      title: !1
    };
  },
  content() {
    return this.options.title ? "title block+" : "block+";
  },
  addExtensions() {
    return this.options.title ? [Wd] : [];
  }
}), xd = O({
  name: "HeadingDropdown",
  components: {
    ElDropdown: Ba,
    ElDropdownMenu: La,
    ElDropdownItem: Aa,
    CommandButton: H
  },
  props: {
    editor: {
      type: Nt,
      required: !0
    },
    levels: {
      type: Array,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  methods: {
    toggleHeading(e) {
      let t = this.editor.commands;
      e > 0 ? t.toggleHeading({ level: e }) : t.setParagraph();
    }
  }
}), Kd = { key: 1 };
function Gd(e, t, a, l, o, i) {
  const s = H, u = _t, m = Ft, f = St;
  return n(), h(f, {
    disabled: e.isCodeViewMode,
    placement: "bottom",
    trigger: "click",
    "popper-class": "el-tiptap-dropdown-popper",
    onCommand: e.toggleHeading
  }, {
    dropdown: r(() => [
      d(m, {
        slot: "dropdown",
        class: "el-tiptap-dropdown-menu"
      }, {
        default: r(() => [
          (n(!0), v(L, null, J([0, ...e.levels], (c) => (n(), h(u, {
            key: c,
            command: c,
            class: Y([
              {
                "el-tiptap-dropdown-menu__item--active": c > 0 ? e.editor.isActive("heading", {
                  level: c
                }) : e.editor.isActive("paragraph")
              },
              "el-tiptap-dropdown-menu__item"
            ])
          }, {
            default: r(() => [
              c > 0 ? (n(), h(Ot("h" + c), {
                key: 0,
                "data-item-type": "heading"
              }, {
                default: r(() => [
                  I(A(e.t("editor.extensions.Heading.buttons.heading")) + " " + A(c), 1)
                ]),
                _: 2
              }, 1024)) : (n(), v("span", Kd, A(e.t("editor.extensions.Heading.buttons.paragraph")), 1))
            ]),
            _: 2
          }, 1032, ["command", "class"]))), 128))
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      $("span", null, [
        d(s, {
          "enable-tooltip": e.enableTooltip,
          "is-active": e.editor.isActive("heading"),
          tooltip: e.t("editor.extensions.Heading.tooltip"),
          readonly: e.isCodeViewMode,
          icon: "heading"
        }, null, 8, ["enable-tooltip", "is-active", "tooltip", "readonly"])
      ])
    ]),
    _: 1
  }, 8, ["disabled", "onCommand"]);
}
const Yd = /* @__PURE__ */ U(xd, [["render", Gd]]), xl = rs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, extension: t }) {
        return {
          component: Yd,
          componentProps: {
            levels: t.options.levels,
            editor: e
          }
        };
      }
    };
  }
}), Jd = ds.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleBlockquote();
            },
            isActive: e.isActive("blockquote"),
            icon: "quote-right",
            tooltip: t("editor.extensions.Blockquote.tooltip")
          }
        };
      }
    };
  }
});
us.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleCodeBlock();
            },
            isActive: e.isActive("codeBlock"),
            icon: "code",
            tooltip: t("editor.extensions.CodeBlock.tooltip")
          }
        };
      }
    };
  }
});
const pa = ms(hs);
pa.register("html", gs);
pa.register("css", fs);
pa.register("js", cs);
pa.register("ts", bs);
const Xd = ps.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleCodeBlock();
            },
            isActive: e.isActive("codeBlock"),
            icon: "code",
            tooltip: t("editor.extensions.CodeBlock.tooltip")
          }
        };
      },
      lowlight: pa
      // languageClassPrefix: 'language-',
      // defaultLanguage: 'plaintext',
    };
  }
}), Kl = ys.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleBulletList();
            },
            isActive: e.isActive("bulletList"),
            icon: "list-ul",
            tooltip: t("editor.extensions.BulletList.tooltip")
          }
        };
      }
    };
  }
  // addExtensions() {
  // 	return [ListItem];
  // },
}), Gl = vs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleOrderedList();
            },
            isActive: e.isActive("orderedList"),
            icon: "list-ol",
            tooltip: t("editor.extensions.OrderedList.tooltip")
          }
        };
      }
    };
  },
  addExtensions() {
    return [hn];
  }
}), Qd = { class: "mb-2" }, Zd = {
  class: "ml-2 text-3",
  style: { "padding-bottom": "10px" }
}, eu = ["src"], tu = { class: "el-upload-list__item-actions" }, au = ["onClick"], lu = ["onClick"], ou = /* @__PURE__ */ O({
  __name: "SdGallery",
  props: {
    uploadType: String,
    perPage: { type: Number, required: !1, default: 30 },
    readonly: { type: Boolean, required: !1, default: !1 },
    userState: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = ke({}), a = ke({
      type: {
        editor: {
          group: "editor_img",
          uploadUrl: "/v1/files/editor-image-upload",
          deleteUrl: "/v1/files/remove-one"
        }
      },
      total: 0,
      offset: 0,
      totalPage: 0,
      previewIndex: 0
    }), l = q([]), o = q(null), i = e, s = ke({
      providerId: "getfiles-gallery",
      providerType: fe.SYS,
      options: {
        page: 1,
        limit: i.perPage ? i.perPage : 30
      },
      params: { userId: i.userState.user?.user_id }
    }), u = Z({
      get() {
        return s.options?.page || 1;
      },
      set(w) {
        s.options ? s.options.page = w : s.options = { page: w };
      }
    });
    xe(() => {
      m();
    });
    function m() {
      i.userState.crudGetAll({ sdProvider: s, totalEnable: !0 }, (w) => {
        a.total = w.total, a.offset = w.offset, a.totalPage = w.data.length;
        const T = w.data;
        l.value = [], T.forEach((V) => {
          l.value.push({
            name: V.name,
            url: V.file_path,
            response: V
          });
        });
      });
    }
    const f = Z(() => l.value.map((w) => w.url)), c = Z(() => i.uploadType ? i.uploadType : "editor"), F = Z(() => a.total.toLocaleString()), D = Z(() => (a.totalPage > 0 ? a.offset + 1 : a.offset).toLocaleString()), g = Z(() => (a.offset + a.totalPage).toLocaleString());
    function C(w) {
      m();
    }
    function _() {
      u.value = 1, m();
    }
    const p = (w) => w.type.split("/")[0] !== "image" ? (B.error("Upload picture must be image format!"), !1) : w.size / 1024 / 1024 > 15 ? (B.error("Upload picture size can not exceed 15MB!"), !1) : !0, y = (w) => {
      ye.confirm("Are you sure you want to delete this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        const T = w.response, V = {
          fileName: T.file_name ? T.file_name : T.fileName ? T.fileName : "",
          fileGroup: T.file_group ? T.file_group : T.fileGroup ? T.fileGroup : "",
          fileId: T._id ? T._id : T.fileId ? T.fileId : ""
        };
        await ce.delete(`${i.userState.host}${a.type[c.value].deleteUrl}`, {
          data: V,
          headers: {
            Authorization: `Bearer ${i.userState.user?.token}`
          }
        }).then((E) => {
          l.value = l.value.filter((W) => W.uid !== w.uid), a.total--, a.totalPage--;
        }).catch((E) => {
          console.log(E);
        });
      }).catch(() => {
      });
    }, S = (w, T, V) => {
      a.total++, a.totalPage++, l.value[l.value.length - 1] = {
        name: w.fileName,
        url: w.filePath,
        response: w
      };
    }, N = (w) => {
      a.previewIndex = f.value.indexOf(w.url), o.value.$el.children[0].click();
    };
    return (w, T) => {
      const V = ie, E = X("Plus"), W = qe, te = Vt, x = X("zoom-in"), je = X("Delete"), Ke = rl, nt = Ma;
      return n(), v(L, null, [
        $("div", Qd, [
          d(V, {
            type: "info",
            plain: "",
            icon: "Refresh",
            onClick: _
          }),
          $("span", Zd, "Showing " + A(D.value) + "-" + A(g.value) + " of " + A(F.value) + " items.", 1)
        ]),
        d(Ke, {
          class: "avatar-uploader",
          action: e.userState.host + a.type[c.value].uploadUrl,
          headers: {
            Authorization: `Bearer ${i.userState.user?.token}`
          },
          "show-file-list": !0,
          data: t,
          "list-type": "picture-card",
          "file-list": l.value,
          "onUpdate:fileList": T[0] || (T[0] = (Le) => l.value = Le),
          disabled: !!e.readonly,
          "on-success": S,
          "before-upload": p
        }, {
          file: r(({ file: Le }) => [
            $("div", null, [
              $("img", {
                class: "el-upload-list__item-thumbnail",
                src: Le.url,
                alt: ""
              }, null, 8, eu),
              d(te, {
                ref_key: "imageRef",
                ref: o,
                style: { width: "100%", height: "100%" },
                src: Le.url,
                "preview-src-list": f.value,
                "initial-index": a.previewIndex,
                fit: "cover",
                "preview-teleported": ""
              }, null, 8, ["src", "preview-src-list", "initial-index"]),
              $("span", tu, [
                re(w.$slots, "action", { file: Le }, void 0, !0),
                $("span", {
                  class: "el-upload-list__item-preview",
                  onClick: (Ne) => N(Le)
                }, [
                  d(W, null, {
                    default: r(() => [
                      d(x)
                    ]),
                    _: 1
                  })
                ], 8, au),
                e.readonly ? b("", !0) : (n(), v("span", {
                  key: 0,
                  class: "el-upload-list__item-delete",
                  onClick: (Ne) => y(Le)
                }, [
                  d(W, null, {
                    default: r(() => [
                      d(je)
                    ]),
                    _: 1
                  })
                ], 8, lu))
              ])
            ])
          ]),
          default: r(() => [
            d(W, null, {
              default: r(() => [
                d(E)
              ]),
              _: 1
            })
          ]),
          _: 3
        }, 8, ["action", "headers", "data", "file-list", "disabled"]),
        a.total > (s.options?.limit || 0) ? (n(), h(nt, {
          key: 0,
          "current-page": u.value,
          "onUpdate:currentPage": T[1] || (T[1] = (Le) => u.value = Le),
          "page-size": i.perPage,
          onCurrentChange: C,
          class: "mt-1",
          background: "",
          layout: "prev, pager, next",
          total: a.total
        }, null, 8, ["current-page", "page-size", "total"])) : b("", !0)
      ], 64);
    };
  }
}), iu = /* @__PURE__ */ U(ou, [["__scopeId", "data-v-b25f6961"]]), Xa = {};
function nu(e) {
  return new Promise((t, a) => {
    const l = {
      complete: !1,
      width: 0,
      height: 0,
      src: e
    };
    if (!e) {
      a(l);
      return;
    }
    if (Xa[e]) {
      t({ ...Xa[e] });
      return;
    }
    const o = new Image();
    o.onload = () => {
      l.width = o.width, l.height = o.height, l.complete = !0, Xa[e] = { ...l }, t(l);
    }, o.onerror = () => {
      a(l);
    }, o.src = e;
  });
}
var He = /* @__PURE__ */ ((e) => (e.INLINE = "inline", e.BREAK_TEXT = "block", e.FLOAT_LEFT = "left", e.FLOAT_RIGHT = "right", e))(He || {});
const Yl = "[Element-Tiptap Tip]", su = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/, ru = 200, du = He.INLINE, li = 1.7, $a = "100%";
class oi {
  static warn(t) {
    console.warn(`${Yl} ${t}`);
  }
  static error(t) {
    console.error(`${Yl} ${t}`);
  }
}
const uu = O({
  name: "ImageCommandButton",
  components: {
    ElDialog: jt,
    ElUpload: cn,
    ElPopover: Dt,
    CommandButton: H
  },
  props: {
    editor: {
      type: Nt,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1), l = R("userState");
    return { t: e, enableTooltip: t, isCodeViewMode: a, userState: l };
  },
  data() {
    return {
      resizeCleanup: null,
      imageUploadDialogVisible: !1,
      uploading: !1,
      popupWidth: "80%"
    };
  },
  computed: {
    imageNodeOptions() {
      return this.editor.extensionManager.extensions.find((e) => e.name === "image").options;
    }
  },
  mounted() {
    this.popupWidth = oe("80%"), this.resizeCleanup = Pe(() => {
      this.$nextTick(() => {
        this.popupWidth = oe("80%");
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    openUrlPrompt() {
      ye.prompt("", this.t("editor.extensions.Image.control.insert_by_url.title"), {
        confirmButtonText: this.t("editor.extensions.Image.control.insert_by_url.confirm"),
        cancelButtonText: this.t("editor.extensions.Image.control.insert_by_url.cancel"),
        inputPlaceholder: this.t("editor.extensions.Image.control.insert_by_url.placeholder"),
        inputPattern: this.imageNodeOptions.urlPattern,
        inputErrorMessage: this.t("editor.extensions.Image.control.insert_by_url.invalid_url"),
        roundButton: !0
      }).then(({ value: e }) => {
        this.editor.commands.setImage({ src: e });
      }).catch((e) => {
      });
    },
    handleSelect(e) {
      this.editor.commands.setImage({ src: e.url }), this.imageUploadDialogVisible = !1;
    },
    async uploadImage(e) {
      const { file: t } = e, a = this.imageNodeOptions.uploadRequest, l = Da.service({
        target: ".el-tiptap-upload"
      });
      try {
        let o = this.editor.commands;
        const i = await (a ? a(t) : md(t));
        o.setImage({ src: i }), this.imageUploadDialogVisible = !1;
      } catch (o) {
        oi.error(String(o));
      } finally {
        this.$nextTick(() => {
          l.close();
        });
      }
    }
  }
}), pu = { class: "el-tiptap-popper__menu" }, mu = ["onClick"];
function hu(e, t, a, l, o, i) {
  const s = H, u = lt, m = X("CircleCheck"), f = qe, c = iu, F = Ce;
  return n(), v("div", null, [
    d(u, {
      disabled: e.isCodeViewMode,
      placement: "bottom",
      trigger: "click",
      "popper-class": "el-tiptap-popper"
    }, {
      reference: r(() => [
        $("span", null, [
          d(s, {
            "enable-tooltip": e.enableTooltip,
            tooltip: e.t("editor.extensions.Image.buttons.insert_image.tooltip"),
            readonly: e.isCodeViewMode,
            icon: "image"
          }, null, 8, ["enable-tooltip", "tooltip", "readonly"])
        ])
      ]),
      default: r(() => [
        $("div", pu, [
          $("div", {
            class: "el-tiptap-popper__menu__item",
            onClick: t[0] || (t[0] = (...D) => e.openUrlPrompt && e.openUrlPrompt(...D))
          }, [
            $("span", null, A(e.t("editor.extensions.Image.buttons.insert_image.external")), 1)
          ]),
          $("div", {
            class: "el-tiptap-popper__menu__item",
            onClick: t[1] || (t[1] = (D) => e.imageUploadDialogVisible = !0)
          }, [
            $("span", null, A(e.t("editor.extensions.Image.buttons.insert_image.upload")), 1)
          ])
        ])
      ]),
      _: 1
    }, 8, ["disabled"]),
    d(F, {
      modelValue: e.imageUploadDialogVisible,
      "onUpdate:modelValue": t[2] || (t[2] = (D) => e.imageUploadDialogVisible = D),
      title: e.t("editor.extensions.Image.control.upload_image.title"),
      width: e.popupWidth,
      "append-to-body": !0
    }, {
      default: r(() => [
        d(c, {
          "upload-type": "editor",
          readonly: !e.editor?.isEditable,
          "user-state": e.userState
        }, {
          action: r(({ file: D }) => [
            e.editor?.isEditable ? (n(), v("span", {
              key: 0,
              class: "el-upload-list__item-delete",
              onClick: (g) => e.handleSelect(D)
            }, [
              d(f, null, {
                default: r(() => [
                  d(m)
                ]),
                _: 1
              })
            ], 8, mu)) : b("", !0)
          ]),
          _: 1
        }, 8, ["readonly", "user-state"])
      ]),
      _: 1
    }, 8, ["modelValue", "title", "width"])
  ]);
}
const fu = /* @__PURE__ */ U(uu, [["render", hu]]), cu = O({
  name: "RemoveImageCommandButton",
  components: {
    CommandButton: H
  },
  props: {
    editor: Fe.editor,
    node: Fe.node
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0);
    return { t: e, enableTooltip: t };
  },
  methods: {
    removeImage() {
      this.editor.commands.deleteSelection();
    }
  }
});
function bu(e, t, a, l, o, i) {
  const s = H;
  return n(), h(s, {
    command: e.removeImage,
    "enable-tooltip": e.enableTooltip,
    tooltip: e.t("editor.extensions.Image.buttons.remove_image.tooltip"),
    icon: "trash-alt"
  }, null, 8, ["command", "enable-tooltip", "tooltip"]);
}
const ii = /* @__PURE__ */ U(cu, [["render", bu]]), gu = O({
  components: {
    ElDialog: jt,
    ElForm: da,
    ElFormItem: ra,
    ElInput: Ct,
    ElCol: bn,
    ElButton: kt,
    CommandButton: H
  },
  props: {
    node: Fe.node,
    updateAttrs: Fe.updateAttributes
  },
  data() {
    return {
      resizeCleanup: null,
      editImageDialogVisible: !1,
      popupWidth: "40%",
      imageAttrs: {}
    };
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0);
    return { t: e, enableTooltip: t };
  },
  mounted() {
    this.popupWidth = oe("40%"), this.resizeCleanup = Pe(() => {
      this.$nextTick(() => {
        this.popupWidth = oe("40%");
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    syncImageAttrs() {
      this.imageAttrs = this.getImageAttrs();
    },
    getImageAttrs() {
      return {
        src: this.node.attrs.src,
        alt: this.node.attrs.alt,
        width: this.node.attrs.width,
        height: this.node.attrs.height
      };
    },
    updateImageAttrs() {
      let { width: e, height: t } = this.imageAttrs;
      e = parseInt(e, 10), t = parseInt(t, 10), this.updateAttrs({
        alt: this.imageAttrs.alt,
        width: e >= 0 ? e : null,
        height: t >= 0 ? t : null
      }), this.closeEditImageDialog();
    },
    openEditImageDialog() {
      this.editImageDialogVisible = !0;
    },
    closeEditImageDialog() {
      this.editImageDialogVisible = !1;
    }
  }
});
function yu(e, t, a, l, o, i) {
  const s = H, u = Te, m = wt, f = dt, c = vt, F = ie, D = Ce;
  return n(), v("div", null, [
    d(s, {
      command: e.openEditImageDialog,
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.Image.buttons.image_options.tooltip"),
      icon: "ellipsis-h"
    }, null, 8, ["command", "enable-tooltip", "tooltip"]),
    d(D, {
      modelValue: e.editImageDialogVisible,
      "onUpdate:modelValue": t[3] || (t[3] = (g) => e.editImageDialogVisible = g),
      title: e.t("editor.extensions.Image.control.edit_image.title"),
      "append-to-body": !0,
      width: e.popupWidth,
      class: "el-tiptap-edit-image-dialog",
      onOpen: e.syncImageAttrs
    }, {
      footer: r(() => [
        d(F, {
          round: "",
          onClick: e.closeEditImageDialog
        }, {
          default: r(() => [
            I(A(e.t("editor.extensions.Image.control.edit_image.cancel")), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        d(F, {
          type: "primary",
          round: "",
          onClick: e.updateImageAttrs
        }, {
          default: r(() => [
            I(A(e.t("editor.extensions.Image.control.edit_image.confirm")), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: r(() => [
        d(c, {
          model: e.imageAttrs,
          "label-position": "top"
        }, {
          default: r(() => [
            d(m, {
              label: e.t("editor.extensions.Image.control.edit_image.form.src")
            }, {
              default: r(() => [
                d(u, {
                  value: e.imageAttrs.src,
                  autocomplete: "off",
                  disabled: ""
                }, null, 8, ["value"])
              ]),
              _: 1
            }, 8, ["label"]),
            d(m, {
              label: e.t("editor.extensions.Image.control.edit_image.form.alt")
            }, {
              default: r(() => [
                d(u, {
                  modelValue: e.imageAttrs.alt,
                  "onUpdate:modelValue": t[0] || (t[0] = (g) => e.imageAttrs.alt = g),
                  autocomplete: "off"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["label"]),
            d(m, null, {
              default: r(() => [
                d(f, { span: 11 }, {
                  default: r(() => [
                    d(m, {
                      label: e.t("editor.extensions.Image.control.edit_image.form.width")
                    }, {
                      default: r(() => [
                        d(u, {
                          modelValue: e.imageAttrs.width,
                          "onUpdate:modelValue": t[1] || (t[1] = (g) => e.imageAttrs.width = g),
                          type: "number"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                }),
                d(f, {
                  span: 11,
                  push: 2
                }, {
                  default: r(() => [
                    d(m, {
                      label: e.t("editor.extensions.Image.control.edit_image.form.height")
                    }, {
                      default: r(() => [
                        d(u, {
                          modelValue: e.imageAttrs.height,
                          "onUpdate:modelValue": t[2] || (t[2] = (g) => e.imageAttrs.height = g),
                          type: "number"
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"])
      ]),
      _: 1
    }, 8, ["modelValue", "title", "width", "onOpen"])
  ]);
}
const ni = /* @__PURE__ */ U(gu, [["render", yu]]), vu = O({
  name: "ImageDisplayCommandButton",
  components: {
    ElPopover: Dt,
    CommandButton: H
  },
  props: {
    node: Fe.node,
    updateAttrs: Fe.updateAttributes
  },
  data() {
    return {
      displayCollection: [He.INLINE, He.BREAK_TEXT, He.FLOAT_LEFT, He.FLOAT_RIGHT]
    };
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = q(null);
    return { t: e, enableTooltip: t, popoverRef: a };
  },
  computed: {
    currDisplay() {
      return this.node.attrs.display;
    }
  },
  methods: {
    hidePopover() {
      this.popoverRef.hide();
    }
  }
}), wu = { class: "el-tiptap-popper__menu" }, Su = ["onClick"];
function Fu(e, t, a, l, o, i) {
  const s = H, u = lt;
  return n(), h(u, {
    placement: "top",
    trigger: "click",
    "popper-class": "el-tiptap-popper",
    ref: "popoverRef"
  }, {
    reference: r(() => [
      $("span", null, [
        d(s, {
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.Image.buttons.display.tooltip"),
          icon: "image-align"
        }, null, 8, ["enable-tooltip", "tooltip"])
      ])
    ]),
    default: r(() => [
      $("div", wu, [
        (n(!0), v(L, null, J(e.displayCollection, (m) => (n(), v("div", {
          key: m,
          class: Y([{
            "el-tiptap-popper__menu__item--active": m === e.currDisplay
          }, "el-tiptap-popper__menu__item"]),
          onMousedown: t[0] || (t[0] = (...f) => e.hidePopover && e.hidePopover(...f)),
          onClick: (f) => e.updateAttrs({ display: m })
        }, [
          $("span", null, A(e.t(`editor.extensions.Image.buttons.display.${m}`)), 1)
        ], 42, Su))), 128))
      ])
    ]),
    _: 1
  }, 512);
}
const si = /* @__PURE__ */ U(vu, [["render", Fu]]), _u = O({
  components: {
    ImageDisplayCommandButton: si,
    EditImageCommandButton: ni,
    RemoveImageCommandButton: ii
  },
  props: {
    // editor: {
    // 	type: Object as PropType<import('@tiptap/core').Editor>,
    // 	required: true,
    // },
    editor: Fe.editor,
    node: Fe.node,
    updateAttrs: Fe.updateAttributes
  }
}), ku = { class: "image-bubble-menu" };
function Cu(e, t, a, l, o, i) {
  const s = si, u = ni, m = ii;
  return n(), v("div", ku, [
    d(s, {
      node: e.node,
      "update-attrs": e.updateAttrs
    }, null, 8, ["node", "update-attrs"]),
    d(u, {
      node: e.node,
      "update-attrs": e.updateAttrs
    }, null, 8, ["node", "update-attrs"]),
    d(m, {
      node: e.node,
      editor: e.editor
    }, null, 8, ["node", "editor"])
  ]);
}
const ri = /* @__PURE__ */ U(_u, [["render", Cu]]), Fa = 20, Jl = 1e5, Du = O({
  name: "ImageView",
  components: {
    ElPopover: Dt,
    NodeViewWrapper: it,
    ImageBubbleMenu: ri
  },
  props: Fe,
  data() {
    return {
      maxSize: {
        width: Jl,
        height: Jl
      },
      originalSize: {
        width: 0,
        height: 0
      },
      resizeDirections: [
        "tl",
        "tr",
        "bl",
        "br"
        /* BOTTOM_RIGHT */
      ],
      resizing: !1,
      resizeOb: null,
      resizerState: {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }
    };
  },
  computed: {
    src() {
      return this.node.attrs.src;
    },
    width() {
      return this.node.attrs.width;
    },
    height() {
      return this.node.attrs.height;
    },
    display() {
      return this.node.attrs.display;
    },
    imageViewClass() {
      return ["image-view", `image-view--${this.display}`, "drag-handle"];
    }
  },
  async created() {
    const e = await nu(this.src);
    e.complete || (e.width = Fa, e.height = Fa), this.originalSize = {
      width: e.width,
      height: e.height
    };
  },
  mounted() {
  },
  beforeUnmount() {
  },
  methods: {
    // https://github.com/scrumpy/tiptap/issues/361#issuecomment-540299541
    selectImage() {
      this.editor?.commands.setNodeSelection(this.getPos());
    },
    /* invoked when window or editor resize */
    getMaxSize() {
      const { width: e } = getComputedStyle(this.editor.view.dom);
      this.maxSize.width = parseInt(e, 10);
    },
    /* on resizer handler mousedown
     * record the position where the event is triggered and resize direction
     * calculate the initial width and height of the image
     */
    onMouseDown(e, t) {
      e.preventDefault(), e.stopPropagation(), this.resizerState.x = e.clientX, this.resizerState.y = e.clientY;
      const a = this.originalSize.width, l = this.originalSize.height, o = a / l;
      let { width: i, height: s } = this.node.attrs;
      const u = this.maxSize.width;
      i && !s ? (i = i > u ? u : i, s = Math.round(i / o)) : s && !i ? (i = Math.round(s * o), i = i > u ? u : i) : !i && !s ? (i = a > u ? u : a, s = Math.round(i / o)) : i = i > u ? u : i, this.resizerState.w = i, this.resizerState.h = s, this.resizerState.dir = t, this.resizing = !0, this.onEvents();
    },
    onMouseMove(e) {
      if (e.preventDefault(), e.stopPropagation(), !this.resizing) return;
      const { x: t, y: a, w: l, h: o, dir: i } = this.resizerState, s = (e.clientX - t) * (/l/.test(i) ? -1 : 1), u = (e.clientY - a) * (/t/.test(i) ? -1 : 1);
      this.updateAttributes?.({
        width: Go(l + s, Fa, this.maxSize.width),
        height: Math.max(o + u, Fa)
      });
    },
    onMouseUp(e) {
      e.preventDefault(), e.stopPropagation(), this.resizing && (this.resizing = !1, this.resizerState = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        dir: ""
      }, this.offEvents(), this.selectImage());
    },
    onEvents() {
      document.addEventListener("mousemove", this.onMouseMove, !0), document.addEventListener("mouseup", this.onMouseUp, !0);
    },
    offEvents() {
      document.removeEventListener("mousemove", this.onMouseMove, !0), document.removeEventListener("mouseup", this.onMouseUp, !0);
    }
  }
}), Iu = ["src", "title", "alt", "width", "height"], $u = {
  key: 0,
  class: "image-resizer"
}, Tu = ["onMousedown"];
function Pu(e, t, a, l, o, i) {
  const s = ri, u = lt, m = X("node-view-wrapper");
  return n(), h(m, {
    as: "span",
    class: Y(e.imageViewClass),
    "data-drag-handle": ""
  }, {
    default: r(() => [
      $("div", {
        class: Y({
          "image-view__body--focused": e.selected && e.editor?.isEditable,
          "image-view__body--resizing": e.resizing && e.editor?.isEditable,
          "image-view__body": e.editor?.isEditable
        })
      }, [
        $("img", {
          src: e.src,
          title: e.node.attrs.title,
          alt: e.node.attrs.alt,
          width: e.width,
          height: e.height,
          class: "image-view__body__image",
          onClick: t[0] || (t[0] = (...f) => e.selectImage && e.selectImage(...f))
        }, null, 8, Iu),
        e.editor?.isEditable ? Ve((n(), v("div", $u, [
          (n(!0), v(L, null, J(e.resizeDirections, (f) => (n(), v("span", {
            key: f,
            class: Y([`image-resizer__handler--${f}`, "image-resizer__handler"]),
            onMousedown: (c) => e.onMouseDown(c, f)
          }, null, 42, Tu))), 128))
        ], 512)), [
          [Vo, e.selected || e.resizing]
        ]) : b("", !0),
        e.editor?.isEditable ? (n(), h(u, {
          key: 1,
          visible: e.selected,
          "show-arrow": !1,
          placement: "top",
          "popper-class": "el-tiptap-image-popper"
        }, {
          reference: r(() => [...t[1] || (t[1] = [
            $("div", { class: "image-view__body__placeholder" }, null, -1)
          ])]),
          default: r(() => [
            d(s, {
              node: e.node,
              editor: e.editor,
              "update-attrs": e.updateAttributes
            }, null, 8, ["node", "editor", "update-attrs"])
          ]),
          _: 1
        }, 8, ["visible"])) : b("", !0)
      ], 2)
    ]),
    _: 1
  }, 8, ["class"]);
}
const Mu = /* @__PURE__ */ U(Du, [["render", Pu]]), Vu = ws.extend({
  // https://github.com/ueberdosis/tiptap/issues/1206
  inline() {
    return !0;
  },
  group() {
    return "inline";
  },
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: ru,
        parseHTML: (e) => {
          const t = e.style.width || e.getAttribute("width") || null;
          return t == null ? null : parseInt(t, 10);
        },
        renderHTML: (e) => ({
          width: e.width
        })
      },
      height: {
        default: null,
        parseHTML: (e) => {
          const t = e.style.height || e.getAttribute("height") || null;
          return t == null ? null : parseInt(t, 10);
        },
        renderHTML: (e) => ({
          height: e.height
        })
      },
      display: {
        default: du,
        parseHTML: (e) => {
          const { cssFloat: t, display: a } = e.style;
          let l = e.getAttribute("data-display") || e.getAttribute("display");
          return l ? l = /(inline|block|left|right)/.test(l) ? l : He.INLINE : t === "left" && !a ? l = He.FLOAT_LEFT : t === "right" && !a ? l = He.FLOAT_RIGHT : !t && a === "block" ? l = He.BREAK_TEXT : l = He.INLINE, l;
        },
        renderHTML: (e) => ({
          "data-display": e.display
        })
      }
    };
  },
  addOptions() {
    return {
      ...this.parent?.(),
      inline: !0,
      uploadRequest: null,
      urlPattern: su,
      button({ editor: e }) {
        return {
          component: fu,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  draggable: !0,
  addNodeView() {
    return pt(Mu);
  },
  parseHTML() {
    return [
      {
        tag: "img[src]"
      }
    ];
  }
  // addExtensions() {
  // 	return [Gapcursor, Dropcursor];
  // },
}), Eu = O({
  name: "TaskItemView",
  components: {
    NodeViewWrapper: it,
    NodeViewContent: es,
    ElCheckbox: sa
  },
  props: Fe,
  computed: {
    done: {
      get() {
        return this.node?.attrs.done;
      },
      set(e) {
        this.updateAttributes?.({
          done: e
        });
      }
    }
  }
}), Au = ["data-type", "data-done"], Lu = { contenteditable: "false" };
function Bu(e, t, a, l, o, i) {
  const s = Va, u = X("node-view-content"), m = X("node-view-wrapper");
  return n(), h(m, { class: "task-item-wrapper" }, {
    default: r(() => [
      $("li", {
        "data-type": e.node?.type.name,
        "data-done": e.done.toString(),
        "data-drag-handle": ""
      }, [
        $("span", Lu, [
          d(s, {
            modelValue: e.done,
            "onUpdate:modelValue": t[0] || (t[0] = (f) => e.done = f)
          }, null, 8, ["modelValue"])
        ]),
        d(u, { class: "todo-content" })
      ], 8, Au)
    ]),
    _: 1
  });
}
const Ou = /* @__PURE__ */ U(Eu, [["render", Bu]]), Nu = Fs.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      done: {
        default: !1,
        parseHTML: (e) => e.getAttribute("data-done") === "true"
      }
    };
  },
  renderHTML({ node: e, HTMLAttributes: t }) {
    const { done: a } = e.attrs;
    return [
      "li",
      ot(this.options.HTMLAttributes, t, {
        "data-type": this.name
      }),
      // el-checkbox dom
      [
        "span",
        {
          contenteditable: "false"
        },
        [
          "span",
          {
            class: `el-checkbox ${a ? "is-checked" : ""}`,
            style: "pointer-events: none;"
          },
          ["input", { class: `el-checkbox__input ${a ? "is-checked" : ""}` }, ["span", { class: "el-checkbox__inner" }]]
        ]
      ],
      ["div", { class: "todo-content" }, 0]
    ];
  },
  addNodeView() {
    return pt(Ou);
  }
}), ju = Ss.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleTaskList();
            },
            isActive: e.isActive("taskList"),
            icon: "tasks",
            tooltip: t("editor.extensions.TodoList.tooltip")
          }
        };
      }
    };
  },
  addExtensions() {
    return [Nu];
  }
}), _a = 5, Xl = 10, ka = 2, Uu = O({
  name: "CreateTablePopover",
  components: {
    ElPopover: Dt
  },
  setup(e, { emit: t }) {
    const a = R("t"), l = q(), o = q(!1);
    return { t: a, popoverVisible: o, popoverRef: l, confirmCreateTable: (s, u) => {
      be(l).hide(), t("createTable", { row: s, col: u });
    } };
  },
  data() {
    return {
      tableGridSize: {
        row: _a,
        col: _a
      },
      selectedTableGridSize: {
        row: ka,
        col: ka
      }
    };
  },
  methods: {
    selectTableGridSize(e, t) {
      e === this.tableGridSize.row && (this.tableGridSize.row = Math.min(e + 1, Xl)), t === this.tableGridSize.col && (this.tableGridSize.col = Math.min(t + 1, Xl)), this.selectedTableGridSize.row = e, this.selectedTableGridSize.col = t;
    },
    resetTableGridSize() {
      this.tableGridSize = {
        row: _a,
        col: _a
      }, this.selectedTableGridSize = {
        row: ka,
        col: ka
      };
    }
  }
}), Ru = { class: "table-grid-size-editor" }, zu = { class: "table-grid-size-editor__body" }, Hu = ["onMouseover", "onMousedown"], qu = { class: "table-grid-size-editor__footer" }, Wu = { style: { width: "100%" } }, xu = { style: { padding: "5px 20px" } };
function Ku(e, t, a, l, o, i) {
  const s = lt;
  return n(), h(s, {
    ref: "popoverRef",
    modelValue: e.popoverVisible,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => e.popoverVisible = u),
    placement: "right",
    trigger: "hover",
    "popper-class": "el-tiptap-popper",
    onAfterLeave: e.resetTableGridSize
  }, {
    reference: r(() => [
      $("div", Wu, [
        $("div", xu, A(e.t("editor.extensions.Table.buttons.insert_table")), 1)
      ])
    ]),
    default: r(() => [
      $("div", Ru, [
        $("div", zu, [
          (n(!0), v(L, null, J(e.tableGridSize.row, (u) => (n(), v("div", {
            key: "r" + u,
            class: "table-grid-size-editor__row"
          }, [
            (n(!0), v(L, null, J(e.tableGridSize.col, (m) => (n(), v("div", {
              key: "c" + m,
              class: Y([{
                "table-grid-size-editor__cell--selected": m <= e.selectedTableGridSize.col && u <= e.selectedTableGridSize.row
              }, "table-grid-size-editor__cell"]),
              onMouseover: (f) => e.selectTableGridSize(u, m),
              onMousedown: (f) => e.confirmCreateTable(u, m)
            }, [...t[1] || (t[1] = [
              $("div", { class: "table-grid-size-editor__cell__inner" }, null, -1)
            ])], 42, Hu))), 128))
          ]))), 128))
        ]),
        $("div", qu, A(e.selectedTableGridSize.row) + " X " + A(e.selectedTableGridSize.col), 1)
      ])
    ]),
    _: 1
  }, 8, ["modelValue", "onAfterLeave"]);
}
const di = /* @__PURE__ */ U(Uu, [["render", Ku]]), Gu = O({
  name: "TablePopover",
  components: {
    ElPopover: Dt,
    CommandButton: H,
    CreateTablePopover: di
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1), l = q();
    return { t: e, enableTooltip: t, isCodeViewMode: a, popoverRef: l };
  },
  computed: {
    isTableActive() {
      return ua(this.editor.state);
    },
    enableMergeCells() {
      return gd(this.editor.state);
    },
    enableSplitCell() {
      return yd(this.editor.state);
    }
  },
  methods: {
    createTable({ row: e, col: t }) {
      this.commands().insertTable({
        rows: e,
        cols: t,
        withHeaderRow: !0
      });
    },
    commands() {
      return this.editor.commands;
    }
  }
});
function Yu(e, t, a, l, o, i) {
  const s = H, u = di, m = _t, f = Pa, c = Ft, F = St;
  return n(), h(F, {
    placement: "bottom",
    trigger: "click",
    ref: "popoverRef",
    "max-height": 200
  }, {
    dropdown: r(() => [
      d(c, { class: "el-tiptap-dropdown-menu" }, {
        default: r(() => [
          d(m, {
            class: "el-tiptap-dropdown-menu__item",
            style: { padding: "0" }
          }, {
            default: r(() => [
              d(u, { onCreateTable: e.createTable }, null, 8, ["onCreateTable"])
            ]),
            _: 1
          }),
          d(f, { style: { margin: "5px 0" } }),
          d(m, {
            onClick: e.commands().addColumnBefore,
            class: Y([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              $("span", null, A(e.t("editor.extensions.Table.buttons.add_column_before")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(m, {
            onClick: e.commands().addColumnAfter,
            class: Y([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              $("span", null, A(e.t("editor.extensions.Table.buttons.add_column_after")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(m, {
            onClick: e.commands().deleteColumn,
            class: Y([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              $("span", null, A(e.t("editor.extensions.Table.buttons.delete_column")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(f, { style: { margin: "5px 0" } }),
          d(m, {
            onClick: e.commands().addRowBefore,
            class: Y([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              $("span", null, A(e.t("editor.extensions.Table.buttons.add_row_before")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(m, {
            onClick: e.commands().addRowAfter,
            class: Y([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              $("span", null, A(e.t("editor.extensions.Table.buttons.add_row_after")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(m, {
            onClick: e.commands().deleteRow,
            class: Y([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              $("span", null, A(e.t("editor.extensions.Table.buttons.delete_row")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(f, { style: { margin: "5px 0" } }),
          d(m, {
            onClick: e.commands().mergeCells,
            class: Y([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              $("span", null, A(e.t("editor.extensions.Table.buttons.merge_cells")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(m, {
            onClick: e.commands().splitCell,
            class: Y([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              $("span", null, A(e.t("editor.extensions.Table.buttons.split_cell")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"]),
          d(f, { style: { margin: "5px 0" } }),
          d(m, {
            onClick: e.commands().deleteTable,
            class: Y([{ "el-tiptap-popper__menu__item--disabled": !e.isTableActive }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              $("span", null, A(e.t("editor.extensions.Table.buttons.delete_table")), 1)
            ]),
            _: 1
          }, 8, ["onClick", "class"])
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      $("span", null, [
        d(s, {
          "is-active": e.isTableActive,
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.Table.tooltip"),
          readonly: e.isCodeViewMode,
          icon: "table"
        }, null, 8, ["is-active", "enable-tooltip", "tooltip", "readonly"])
      ])
    ]),
    _: 1
  }, 512);
}
const Ju = /* @__PURE__ */ U(Gu, [["render", Yu]]), Ql = _s.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: Ju,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addExtensions() {
    return [ks, Cs, Ds];
  }
}), Xu = O({
  name: "IframeCommandButton",
  components: {
    CommandButton: H
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  methods: {
    async openInsertVideoControl() {
      ye.prompt("", this.t("editor.extensions.Iframe.control.title"), {
        confirmButtonText: this.t("editor.extensions.Iframe.control.confirm"),
        cancelButtonText: this.t("editor.extensions.Iframe.control.cancel"),
        inputPlaceholder: this.t("editor.extensions.Iframe.control.placeholder"),
        roundButton: !0
      }).then(({ value: e }) => {
        this.editor.commands.setIframe({ src: e });
      }).catch((e) => {
      });
    }
  }
});
function Qu(e, t, a, l, o, i) {
  const s = H;
  return n(), h(s, {
    command: e.openInsertVideoControl,
    "enable-tooltip": e.enableTooltip,
    tooltip: e.t("editor.extensions.Iframe.tooltip"),
    readonly: e.isCodeViewMode,
    icon: "iframe"
  }, null, 8, ["command", "enable-tooltip", "tooltip", "readonly"]);
}
const Zu = /* @__PURE__ */ U(Xu, [["render", Qu]]);
O({
  name: "IframeView",
  components: {
    NodeViewWrapper: it
  },
  props: Fe
});
const ep = ut.create({
  name: "iframe",
  // schema
  group: "block",
  selectable: !1,
  addAttributes() {
    return {
      ...this.parent?.(),
      src: {
        default: null,
        parseHTML: (e) => e.getAttribute("src")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "iframe"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return [
      "iframe",
      ot(e, {
        frameborder: 0,
        allowfullscreen: "true"
      })
    ];
  },
  addCommands() {
    return {
      setIframe: (e) => ({ commands: t }) => t.insertContent({
        type: this.name,
        attrs: e
      })
    };
  },
  addOptions() {
    return {
      button({ editor: e }) {
        return {
          component: Zu,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addNodeView() {
    return ({ editor: e, node: t, getPos: a, HTMLAttributes: l, decorations: o, extension: i }) => {
      const s = document.createElement("div"), u = document.createElement("iframe");
      return u.className = "iframe__embed", u.src = t.attrs.src, s.append(u), {
        dom: s
      };
    };
  }
}), Zl = Is.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleBold();
            },
            isActive: e.isActive("bold"),
            icon: "bold",
            tooltip: t("editor.extensions.Bold.tooltip")
          }
        };
      }
    };
  }
}), eo = $s.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleUnderline();
            },
            isActive: e.isActive("underline"),
            icon: "underline",
            tooltip: t("editor.extensions.Underline.tooltip")
          }
        };
      }
    };
  }
}), to = Ts.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleItalic();
            },
            isActive: e.isActive("italic"),
            icon: "italic",
            tooltip: t("editor.extensions.Italic.tooltip")
          }
        };
      }
    };
  }
}), tp = Ps.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleStrike();
            },
            isActive: e.isActive("strike"),
            icon: "strikethrough",
            tooltip: t("editor.extensions.Strike.tooltip")
          }
        };
      }
    };
  }
}), ap = O({
  name: "AddLinkCommandButton",
  components: {
    ElDialog: jt,
    ElForm: da,
    ElFormItem: ra,
    ElInput: Ct,
    ElCheckbox: sa,
    ElButton: kt,
    CommandButton: H
  },
  props: {
    editor: {
      type: Nt,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !0);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  data() {
    return {
      resizeCleanup: null,
      linkAttrs: {
        href: "",
        openInNewTab: !0
      },
      popupWidth: "40%",
      addLinkDialogVisible: !1
    };
  },
  // watch: {
  // 	addLinkDialogVisible() {
  // 		this.linkAttrs = { href: '', openInNewTab: true };
  // 	},
  // },
  computed: {
    initAttrs() {
      return this.editor.getAttributes("link");
    }
  },
  mounted() {
    this.popupWidth = oe("40%"), this.resizeCleanup = Pe(() => {
      this.$nextTick(() => {
        this.popupWidth = oe("40%");
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    openAddLinkDialog() {
      this.initAttrs && this.initAttrs.href ? (this.linkAttrs.href = this.initAttrs.href, this.linkAttrs.openInNewTab = this.initAttrs.target === "_blank") : this.linkAttrs = { href: "", openInNewTab: !0 }, this.addLinkDialogVisible = !0;
    },
    closeAddLinkDialog() {
      this.addLinkDialogVisible = !1;
    },
    addLink() {
      let e = this.editor.commands;
      this.linkAttrs.openInNewTab ? e.setLink({
        href: this.linkAttrs.href,
        target: "_blank"
      }) : e.setLink({ href: this.linkAttrs.href }), this.closeAddLinkDialog();
    }
  }
});
function lp(e, t, a, l, o, i) {
  const s = H, u = Te, m = wt, f = vt, c = ie, F = Ce;
  return n(), v("div", null, [
    d(s, {
      "is-active": e.editor.isActive("link"),
      readonly: e.isCodeViewMode,
      command: e.openAddLinkDialog,
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.Link.add.tooltip"),
      icon: "link"
    }, null, 8, ["is-active", "readonly", "command", "enable-tooltip", "tooltip"]),
    d(F, {
      modelValue: e.addLinkDialogVisible,
      "onUpdate:modelValue": t[2] || (t[2] = (D) => e.addLinkDialogVisible = D),
      title: e.t("editor.extensions.Link.add.control.title"),
      "append-to-body": !0,
      width: e.popupWidth,
      class: "el-tiptap-edit-link-dialog"
    }, {
      footer: r(() => [
        d(c, {
          round: "",
          onClick: e.closeAddLinkDialog
        }, {
          default: r(() => [
            I(A(e.t("editor.extensions.Link.add.control.cancel")), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        d(c, {
          type: "primary",
          round: "",
          onMousedown: t[1] || (t[1] = j(() => {
          }, ["prevent"])),
          onClick: e.addLink
        }, {
          default: r(() => [
            I(A(e.t("editor.extensions.Link.add.control.confirm")), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: r(() => [
        d(f, {
          model: e.linkAttrs,
          "label-position": "right"
        }, {
          default: r(() => [
            d(m, {
              label: e.t("editor.extensions.Link.add.control.href"),
              prop: "href"
            }, {
              default: r(() => [
                d(u, {
                  modelValue: e.linkAttrs.href,
                  "onUpdate:modelValue": t[0] || (t[0] = (D) => e.linkAttrs.href = D),
                  autocomplete: "off"
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }, 8, ["label"])
          ]),
          _: 1
        }, 8, ["model"])
      ]),
      _: 1
    }, 8, ["modelValue", "title", "width"])
  ]);
}
const op = /* @__PURE__ */ U(ap, [["render", lp]]), ao = Ms.extend({
  priority: 100,
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e }) {
        return {
          component: op,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      new os({
        props: {
          handleClick(e, t) {
            const { schema: a, doc: l, tr: o } = e.state;
            if (a.marks && a.marks.link) {
              const i = pn(l.resolve(t), a.marks.link);
              if (!i) return !1;
              const s = l.resolve(i.from), u = l.resolve(i.to), m = o.setSelection(new ja(s, u));
              return e.dispatch(m), !0;
            }
            return !1;
          }
        }
      })
    ];
  }
}), ui = [
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#000000"
], ip = O({
  name: "ColorPopover",
  components: {
    ElButton: kt,
    ElPopover: Dt,
    ElInput: Ct,
    CommandButton: H
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    }
  },
  setup(e) {
    const t = R("t"), a = R("enableTooltip", !0), l = R("isCodeViewMode", !1), o = q(), i = q("");
    function s(m) {
      let f = e.editor.commands;
      m ? f.setColor(m) : f.unsetColor(), be(o).hide();
    }
    const u = Z(() => Na(e.editor.state, "textStyle").color || "");
    return tt(u, (m) => {
      i.value = m;
    }), {
      t,
      enableTooltip: a,
      isCodeViewMode: l,
      popoverRef: o,
      colorText: i,
      selectedColor: u,
      confirmColor: s
    };
  },
  computed: {
    colorSet() {
      return this.editor.extensionManager.extensions.find((t) => t.name === "color").options.colors;
    }
  }
}), np = { class: "color-set" }, sp = ["onClick"], rp = { class: "color__wrapper" }, dp = { class: "color-hex" };
function up(e, t, a, l, o, i) {
  const s = dl, u = ie, m = H, f = lt;
  return n(), h(f, {
    disabled: e.isCodeViewMode,
    placement: "bottom",
    trigger: "click",
    "popper-class": "el-tiptap-popper",
    ref: "popoverRef"
  }, {
    reference: r(() => [
      $("span", null, [
        d(m, {
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.TextColor.tooltip"),
          icon: "font-color",
          readonly: e.isCodeViewMode
        }, null, 8, ["enable-tooltip", "tooltip", "readonly"])
      ])
    ]),
    default: r(() => [
      $("div", np, [
        (n(!0), v(L, null, J(e.colorSet, (c) => (n(), v("div", {
          key: c,
          class: "color__wrapper"
        }, [
          $("div", {
            style: le({
              "background-color": c
            }),
            class: Y([{ "color--selected": e.selectedColor === c }, "color"]),
            onMousedown: t[0] || (t[0] = j(() => {
            }, ["prevent"])),
            onClick: j((F) => e.confirmColor(c), ["stop"])
          }, null, 46, sp)
        ]))), 128)),
        $("div", rp, [
          $("div", {
            class: "color color--remove",
            onMousedown: t[1] || (t[1] = j(() => {
            }, ["prevent"])),
            onClick: t[2] || (t[2] = j((c) => e.confirmColor(), ["stop"]))
          }, null, 32)
        ])
      ]),
      $("div", dp, [
        d(s, {
          modelValue: e.colorText,
          "onUpdate:modelValue": t[3] || (t[3] = (c) => e.colorText = c),
          class: "color-hex__input ml-1",
          teleported: !1
        }, null, 8, ["modelValue"]),
        d(u, {
          text: "",
          type: "primary",
          size: "small",
          class: "color-hex__button",
          onClick: t[4] || (t[4] = (c) => e.confirmColor(e.colorText))
        }, {
          default: r(() => [...t[5] || (t[5] = [
            I(" OK ", -1)
          ])]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["disabled"]);
}
const pp = /* @__PURE__ */ U(ip, [["render", up]]), lo = Vs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      colors: ui,
      button({ editor: e, t }) {
        return {
          component: pp,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addExtensions() {
    return [Es];
  }
}), mp = O({
  name: "HighlightPopover",
  components: {
    ElButton: kt,
    ElPopover: Dt,
    ElInput: Ct,
    CommandButton: H
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    }
  },
  setup(e) {
    const t = R("t"), a = R("enableTooltip", !0), l = R("isCodeViewMode", !1), o = q(null), i = q(!1), s = q("");
    function u(f) {
      let c = e.editor.commands;
      f ? c.setHighlight({ color: f }) : c.unsetHighlight(), be(o).hide();
    }
    const m = Z(() => Na(e.editor.state, "highlight").color || "");
    return tt(m, (f) => {
      s.value = f;
    }), {
      t,
      colorBg: s,
      enableTooltip: a,
      isCodeViewMode: l,
      popoverRef: o,
      selectedColor: m,
      popoverVisible: i,
      confirmColor: u
    };
  },
  computed: {
    colorSet() {
      return this.editor.extensionManager.extensions.find((t) => t.name === "highlight").options.colors;
    }
  }
}), hp = { class: "color-set" }, fp = ["onClick"], cp = { class: "color__wrapper" }, bp = { class: "color-hex" };
function gp(e, t, a, l, o, i) {
  const s = dl, u = ie, m = H, f = lt;
  return n(), h(f, {
    disabled: e.isCodeViewMode,
    placement: "bottom",
    trigger: "click",
    "popper-class": "el-tiptap-popper",
    ref: "popoverRef"
  }, {
    reference: r(() => [
      $("span", null, [
        d(m, {
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.TextHighlight.tooltip"),
          icon: "highlight",
          readonly: e.isCodeViewMode
        }, null, 8, ["enable-tooltip", "tooltip", "readonly"])
      ])
    ]),
    default: r(() => [
      $("div", hp, [
        (n(!0), v(L, null, J(e.colorSet, (c) => (n(), v("div", {
          key: c,
          class: "color__wrapper"
        }, [
          $("div", {
            style: le({
              "background-color": c
            }),
            class: Y([{ "color--selected": e.selectedColor === c }, "color"]),
            onMousedown: t[0] || (t[0] = j(() => {
            }, ["prevent"])),
            onClick: j((F) => e.confirmColor(c), ["stop"])
          }, null, 46, fp)
        ]))), 128)),
        $("div", cp, [
          $("div", {
            class: "color color--remove",
            onMousedown: t[1] || (t[1] = j(() => {
            }, ["prevent"])),
            onClick: t[2] || (t[2] = j((c) => e.confirmColor(), ["stop"]))
          }, null, 32)
        ])
      ]),
      $("div", bp, [
        d(s, {
          modelValue: e.colorBg,
          "onUpdate:modelValue": t[3] || (t[3] = (c) => e.colorBg = c),
          class: "color-hex__input ml-1",
          teleported: !1
        }, null, 8, ["modelValue"]),
        d(u, {
          text: "",
          type: "primary",
          size: "small",
          class: "color-hex__button",
          onClick: t[4] || (t[4] = (c) => e.confirmColor(e.colorBg))
        }, {
          default: r(() => [...t[5] || (t[5] = [
            I(" OK ", -1)
          ])]),
          _: 1
        })
      ])
    ]),
    _: 1
  }, 8, ["disabled"]);
}
const yp = /* @__PURE__ */ U(mp, [["render", gp]]), oo = As.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      multicolor: !0,
      colors: ui,
      button({ editor: e, t }) {
        return {
          component: yp,
          componentProps: {
            editor: e
          }
        };
      }
    };
  }
}), vp = [
  "Arial",
  "Arial Black",
  "Georgia",
  "Impact",
  "Tahoma",
  "Times New Roman",
  "Verdana",
  "Courier New",
  "Lucida Console",
  "Monaco",
  "monospace"
], wp = vp.reduce(
  (e, t) => (e[t] = t, e),
  {}
), Sp = O({
  name: "FontFamilyDropdown",
  components: {
    ElDropdown: Ba,
    ElDropdownMenu: La,
    ElDropdownItem: Aa,
    CommandButton: H
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  computed: {
    fontFamilies() {
      return this.editor.extensionManager.extensions.find((t) => t.name === "fontFamily").options.fontFamilyMap;
    },
    activeFontFamily() {
      return Na(this.editor.state, "textStyle").fontFamily || "";
    }
  },
  methods: {
    toggleFontType(e) {
      e === this.activeFontFamily ? this.editor.commands.unsetFontFamily() : this.editor.commands.setFontFamily(e);
    }
  }
}), Fp = ["data-font"];
function _p(e, t, a, l, o, i) {
  const s = H, u = _t, m = Ft, f = St;
  return n(), h(f, {
    placement: "bottom",
    trigger: "click",
    onCommand: e.toggleFontType,
    "max-height": 200
  }, {
    dropdown: r(() => [
      d(m, { class: "el-tiptap-dropdown-menu" }, {
        default: r(() => [
          (n(!0), v(L, null, J(e.fontFamilies, (c) => (n(), h(u, {
            key: c,
            command: c,
            class: Y([{
              "el-tiptap-dropdown-menu__item--active": c === e.activeFontFamily
            }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              $("span", {
                "data-font": c,
                style: le({ "font-family": c })
              }, A(c), 13, Fp)
            ]),
            _: 2
          }, 1032, ["command", "class"]))), 128))
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      $("span", null, [
        d(s, {
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.FontType.tooltip"),
          readonly: e.isCodeViewMode,
          icon: "font-family"
        }, null, 8, ["enable-tooltip", "tooltip", "readonly"])
      ])
    ]),
    _: 1
  }, 8, ["onCommand"]);
}
const kp = /* @__PURE__ */ U(Sp, [["render", _p]]), Cp = Qe.create({
  name: "fontFamily",
  addOptions() {
    return {
      types: ["textStyle"],
      fontFamilyMap: wp,
      button({ editor: e, t }) {
        return {
          component: kp,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontFamily: {
            default: null,
            parseHTML: (e) => e.style.fontFamily.replace(/['"]/g, ""),
            renderHTML: (e) => e.fontFamily ? {
              style: `font-family: ${e.fontFamily}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontFamily: (e) => ({ chain: t }) => t().setMark("textStyle", { fontFamily: e }).run(),
      unsetFontFamily: () => ({ chain: e }) => e().setMark("textStyle", { fontFamily: null }).removeEmptyTextStyle().run()
    };
  }
  // addExtensions() {
  // 	return [TextStyle];
  // },
}), Dp = [
  "8",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "24",
  "30",
  "36",
  "48",
  "60",
  "72"
], pi = "default", Ip = /([\d.]+)px/i;
function $p(e) {
  const t = e.match(Ip);
  if (!t) return "";
  const a = t[1];
  return a || "";
}
const Tp = O({
  name: "FontSizeDropdown",
  components: {
    ElDropdown: Ba,
    ElDropdownMenu: La,
    ElDropdownItem: Aa,
    CommandButton: H
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1);
    return { t: e, enableTooltip: t, isCodeViewMode: a, defaultSize: pi };
  },
  computed: {
    fontSizes() {
      return this.editor.extensionManager.extensions.find((t) => t.name === "fontSize").options.fontSizes;
    },
    activeFontSize() {
      return Na(this.editor.state, "textStyle").fontSize || "";
    }
  },
  methods: {
    toggleFontSize(e) {
      e === this.activeFontSize ? this.editor.commands.unsetFontSize() : this.editor.commands.setFontSize(e);
    }
  }
}), Pp = { "data-font-size": "default" }, Mp = ["data-font-size"];
function Vp(e, t, a, l, o, i) {
  const s = H, u = _t, m = Ft, f = St;
  return n(), h(f, {
    placement: "bottom",
    trigger: "click",
    onCommand: e.toggleFontSize,
    "max-height": 200
  }, {
    dropdown: r(() => [
      d(m, { class: "el-tiptap-dropdown-menu" }, {
        default: r(() => [
          d(u, {
            command: e.defaultSize,
            class: Y([{
              "el-tiptap-dropdown-menu__item--active": e.activeFontSize === e.defaultSize
            }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              $("span", Pp, A(e.t("editor.extensions.FontSize.default")), 1)
            ]),
            _: 1
          }, 8, ["command", "class"]),
          (n(!0), v(L, null, J(e.fontSizes, (c) => (n(), h(u, {
            key: c,
            command: c,
            class: Y([{
              "el-tiptap-dropdown-menu__item--active": c === e.activeFontSize
            }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              $("span", { "data-font-size": c }, A(c), 9, Mp)
            ]),
            _: 2
          }, 1032, ["command", "class"]))), 128))
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      $("span", null, [
        d(s, {
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.FontSize.tooltip"),
          readonly: e.isCodeViewMode,
          icon: "font-size"
        }, null, 8, ["enable-tooltip", "tooltip", "readonly"])
      ])
    ]),
    _: 1
  }, 8, ["onCommand"]);
}
const Ep = /* @__PURE__ */ U(Tp, [["render", Vp]]), Ap = Qe.create({
  name: "fontSize",
  addOptions() {
    return {
      types: ["textStyle"],
      fontSizes: Dp,
      button({ editor: e, t }) {
        return {
          component: Ep,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          fontSize: {
            default: null,
            parseHTML: (e) => $p(e.style.fontSize) || "",
            renderHTML: (e) => e.fontSize ? {
              style: `font-size: ${e.fontSize}px`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setFontSize: (e) => ({ chain: t }) => t().setMark("textStyle", { fontSize: e }).run(),
      unsetFontSize: () => ({ chain: e }) => e().setMark("textStyle", { fontSize: pi }).removeEmptyTextStyle().run()
    };
  }
  // addExtensions() {
  // 	return [TextStyle];
  // },
}), Lp = O({
  name: "AddYoutubeCommandButton",
  components: {
    ElDialog: jt,
    ElForm: da,
    ElFormItem: ra,
    ElInput: Ct,
    ElCheckbox: sa,
    ElButton: kt,
    CommandButton: H
  },
  props: {
    editor: {
      type: Nt,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !0);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  data() {
    return {
      youtubeAttrs: {
        url: "",
        width: 640,
        height: 480
      },
      addYoutubeDialogVisible: !1
    };
  },
  computed: {
    initAttrs() {
      return this.editor.getAttributes("youtube");
    }
  },
  methods: {
    openAddYoutubeDialog() {
      this.initAttrs && this.initAttrs.src ? (this.youtubeAttrs.url = this.initAttrs.src, this.youtubeAttrs.width = this.initAttrs.width, this.youtubeAttrs.height = this.initAttrs.height) : this.youtubeAttrs = { url: "", width: 640, height: 480 }, this.addYoutubeDialogVisible = !0;
    },
    closeAddYoutubeDialog() {
      this.addYoutubeDialogVisible = !1;
    },
    addVideo() {
      this.editor.commands.setYoutubeVideo({
        src: this.youtubeAttrs.url,
        width: Math.max(320, this.youtubeAttrs.width) || 640,
        height: Math.max(180, this.youtubeAttrs.height) || 480
      }), this.closeAddYoutubeDialog();
    }
  }
});
function Bp(e, t, a, l, o, i) {
  const s = H, u = Te, m = wt, f = ea, c = dt, F = Et, D = vt, g = ie, C = Ce;
  return n(), v("div", null, [
    d(s, {
      "is-active": e.editor.isActive("youtube"),
      readonly: e.isCodeViewMode,
      command: e.openAddYoutubeDialog,
      "enable-tooltip": e.enableTooltip,
      tooltip: "Insert Youtube",
      icon: "video"
    }, null, 8, ["is-active", "readonly", "command", "enable-tooltip"]),
    d(C, {
      modelValue: e.addYoutubeDialogVisible,
      "onUpdate:modelValue": t[4] || (t[4] = (_) => e.addYoutubeDialogVisible = _),
      title: "Insert Youtube",
      "append-to-body": !0,
      width: "400px",
      class: "el-tiptap-edit-link-dialog"
    }, {
      footer: r(() => [
        d(g, {
          round: "",
          onClick: e.closeAddYoutubeDialog
        }, {
          default: r(() => [
            I(A(e.t("editor.extensions.Link.add.control.cancel")), 1)
          ]),
          _: 1
        }, 8, ["onClick"]),
        d(g, {
          type: "primary",
          round: "",
          onMousedown: t[3] || (t[3] = j(() => {
          }, ["prevent"])),
          onClick: e.addVideo
        }, {
          default: r(() => [
            I(A(e.t("editor.extensions.Link.add.control.confirm")), 1)
          ]),
          _: 1
        }, 8, ["onClick"])
      ]),
      default: r(() => [
        d(D, {
          model: e.youtubeAttrs,
          "label-position": "top"
        }, {
          default: r(() => [
            d(m, {
              label: "Enter YouTube URL",
              prop: "url"
            }, {
              default: r(() => [
                d(u, {
                  modelValue: e.youtubeAttrs.url,
                  "onUpdate:modelValue": t[0] || (t[0] = (_) => e.youtubeAttrs.url = _),
                  autocomplete: "off",
                  clearable: ""
                }, null, 8, ["modelValue"])
              ]),
              _: 1
            }),
            d(F, { gutter: 20 }, {
              default: r(() => [
                d(c, { span: 12 }, {
                  default: r(() => [
                    d(m, {
                      label: "Width",
                      prop: "width"
                    }, {
                      default: r(() => [
                        d(f, {
                          modelValue: e.youtubeAttrs.width,
                          "onUpdate:modelValue": t[1] || (t[1] = (_) => e.youtubeAttrs.width = _),
                          autocomplete: "off",
                          min: 320,
                          max: 1024
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                d(c, { span: 12 }, {
                  default: r(() => [
                    d(m, {
                      label: "Height",
                      prop: "height"
                    }, {
                      default: r(() => [
                        d(f, {
                          modelValue: e.youtubeAttrs.height,
                          "onUpdate:modelValue": t[2] || (t[2] = (_) => e.youtubeAttrs.height = _),
                          autocomplete: "off",
                          min: 180,
                          max: 720
                        }, null, 8, ["modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model"])
      ]),
      _: 1
    }, 8, ["modelValue"])
  ]);
}
const Op = /* @__PURE__ */ U(Lp, [["render", Bp]]), Np = Ls.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e }) {
        return {
          component: Op,
          componentProps: {
            editor: e
          }
        };
      }
    };
  }
}), jp = Bs.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleSubscript();
            },
            isActive: e.isActive("subscript"),
            icon: "subscript",
            tooltip: "Subscript"
          }
        };
      }
    };
  }
}), Up = Os.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.toggleSuperscript();
            },
            isActive: e.isActive("superscript"),
            icon: "superscript",
            tooltip: "Superscript"
          }
        };
      }
    };
  }
}), Rp = { class: "ml-2 text-3" }, zp = ["src"], Hp = /* @__PURE__ */ O({
  __name: "SdUploadFile",
  props: {
    uploadType: String,
    perPage: { type: Number, required: !1, default: 30 },
    readonly: { type: Boolean, required: !1, default: !1 },
    handlePreview: {
      type: Function,
      required: !1
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = q(""), a = q(!1), l = ke({}), o = ke({
      type: {
        editor: {
          group: "editor_file",
          uploadUrl: "/v1/files/editor-file-upload",
          deleteUrl: "/v1/files/remove-one"
        }
      },
      total: 0,
      offset: 0,
      totalPage: 0
    }), i = q([]), s = e, u = ke({
      providerId: "getfiles-uploadfile",
      providerType: fe.SYS,
      options: {
        page: 1,
        limit: s.perPage ? s.perPage : 30
      },
      params: { userId: s.userState.user?.user_id }
    }), m = Z({
      get() {
        return u.options?.page || 1;
      },
      set(w) {
        u.options ? u.options.page = w : u.options = { page: w };
      }
    });
    xe(() => {
      f();
    });
    function f() {
      s.userState.crudGetAll({ sdProvider: u, totalEnable: !0 }, (w) => {
        o.total = w.total, o.offset = w.offset, o.totalPage = w.data.length;
        const T = w.data;
        i.value = [], T.forEach((V) => {
          i.value.push({
            name: V.name,
            url: V.file_path,
            response: V,
            percentage: 100
          });
        });
      });
    }
    const c = Z(() => s.uploadType ? s.uploadType : "editor"), F = Z(() => o.total.toLocaleString()), D = Z(() => (o.totalPage > 0 ? o.offset + 1 : o.offset).toLocaleString()), g = Z(() => (o.offset + o.totalPage).toLocaleString());
    function C(w) {
      f();
    }
    function _() {
      m.value = 1, f();
    }
    const p = (w) => {
      const T = w.type, V = w.name;
      let E = T.split("/")[1] || "";
      if (!E || E.length > 5) {
        const te = V.split(".");
        E = te.length > 1 ? te.pop().toLowerCase() : "none";
      }
      if (["zip", "rar", "csv", "doc", "docx", "xls", "xlsx", "pdf"].includes(E)) {
        if (w.size / 1024 / 1024 > 15)
          return B.error("Upload File size can not exceed 15MB!"), !1;
      } else return B.error("Upload File must be zip, rar, csv, doc, docx, xls, xlsx, pdf format!"), !1;
      return !0;
    }, y = (w, T) => w.percentage == 100 ? ye.confirm(`Are you sure you want to delete ${w.name} ?`, "Confirmation", {
      confirmButtonText: "OK",
      cancelButtonText: "Cancel",
      type: "warning"
    }).then(
      () => !0,
      () => !1
    ) : !0, S = (w) => {
      if (w.percentage == 100) {
        const T = w.response, V = {
          fileName: T.file_name ? T.file_name : T.fileName ? T.fileName : "",
          fileGroup: T.file_group ? T.file_group : T.fileGroup ? T.fileGroup : "",
          fileId: T._id ? T._id : T.fileId ? T.fileId : ""
        };
        ce.delete(`${s.userState.host}${o.type[c.value].deleteUrl}`, {
          data: V,
          headers: {
            Authorization: `Bearer ${s.userState.user?.token}`
          }
        }).then((E) => {
          i.value = i.value.filter((W) => W.uid !== w.uid), o.total--, o.totalPage--;
        }).catch((E) => {
          console.log(E);
        });
      }
    }, N = (w, T, V) => {
      o.total++, o.totalPage++, i.value[i.value.length - 1] = {
        name: w.fileName,
        url: w.filePath,
        response: w,
        percentage: 100
      };
    };
    return (w, T) => {
      const V = ie, E = We, W = rl, te = Ma, x = Ce;
      return n(), v(L, null, [
        d(W, {
          action: e.userState.host + o.type[c.value].uploadUrl,
          headers: {
            Authorization: `Bearer ${s.userState.user?.token}`
          },
          "show-file-list": !0,
          data: l,
          "list-type": "text",
          "file-list": i.value,
          "onUpdate:fileList": T[0] || (T[0] = (je) => i.value = je),
          disabled: !!e.readonly,
          "on-preview": e.handlePreview,
          "on-remove": S,
          "before-remove": y,
          "on-success": N,
          "before-upload": p
        }, {
          trigger: r(() => [
            d(V, { type: "primary" }, {
              default: r(() => [...T[3] || (T[3] = [
                I("Click to upload", -1)
              ])]),
              _: 1
            })
          ]),
          tip: r(() => [
            $("div", null, [
              d(E, {
                style: { "font-size": "12px" },
                type: "warning"
              }, {
                default: r(() => [...T[4] || (T[4] = [
                  I("Format zip, rar, csv, doc, docx, xls, xlsx, pdf files with a size less than 15MB.", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: r(() => [
            d(V, {
              class: "ml-1",
              style: { "margin-top": "0px" },
              type: "info",
              plain: "",
              icon: "Refresh",
              onClick: _
            }),
            $("span", Rp, "Showing " + A(D.value) + "-" + A(g.value) + " of " + A(F.value) + " items.", 1)
          ]),
          _: 1
        }, 8, ["action", "headers", "data", "file-list", "disabled", "on-preview"]),
        o.total > (u.options?.limit || 0) ? (n(), h(te, {
          key: 0,
          "current-page": m.value,
          "onUpdate:currentPage": T[1] || (T[1] = (je) => m.value = je),
          "page-size": s.perPage,
          onCurrentChange: C,
          class: "mt-1",
          background: "",
          layout: "prev, pager, next",
          total: o.total
        }, null, 8, ["current-page", "page-size", "total"])) : b("", !0),
        d(x, {
          modelValue: a.value,
          "onUpdate:modelValue": T[2] || (T[2] = (je) => a.value = je)
        }, {
          default: r(() => [
            $("img", {
              "w-full": "",
              src: t.value,
              alt: "Preview Image"
            }, null, 8, zp)
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), qp = O({
  name: "UploadFileCommandButton",
  components: {
    ElDialog: jt,
    ElForm: da,
    ElFormItem: ra,
    ElInput: Ct,
    ElCheckbox: sa,
    ElButton: kt,
    CommandButton: H
  },
  props: {
    editor: {
      type: Nt,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !0), l = R("userState");
    return { t: e, enableTooltip: t, isCodeViewMode: a, userState: l };
  },
  data() {
    return {
      resizeCleanup: null,
      linkAttrs: {
        href: "",
        openInNewTab: !0
      },
      popupWidth: "50%",
      uploadFileDialogVisible: !1
    };
  },
  // watch: {
  // 	addLinkDialogVisible() {
  // 		this.linkAttrs = { href: '', openInNewTab: true };
  // 	},
  // },
  computed: {
    initAttrs() {
      return this.editor.getAttributes("link");
    }
  },
  mounted() {
    this.popupWidth = oe("50%"), this.resizeCleanup = Pe(() => {
      this.$nextTick(() => {
        this.popupWidth = oe("50%");
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    openUploadFileLinkDialog() {
      this.uploadFileDialogVisible = !0;
    },
    closeUploadFileDialog() {
      this.uploadFileDialogVisible = !1;
    },
    addLink(e) {
      let t = this.editor.commands;
      this.linkAttrs.openInNewTab ? t.setLink({
        href: e.url ? e.url : "#",
        target: "_blank"
      }) : t.setLink({ href: e.url ? e.url : "#" }), this.closeUploadFileDialog();
    }
  }
});
function Wp(e, t, a, l, o, i) {
  const s = H, u = Hp, m = Ce;
  return n(), v("div", null, [
    d(s, {
      readonly: e.isCodeViewMode,
      command: e.openUploadFileLinkDialog,
      "enable-tooltip": e.enableTooltip,
      tooltip: "Upload File",
      icon: "upload-file"
    }, null, 8, ["readonly", "command", "enable-tooltip"]),
    d(m, {
      modelValue: e.uploadFileDialogVisible,
      "onUpdate:modelValue": t[0] || (t[0] = (f) => e.uploadFileDialogVisible = f),
      title: "Upload File",
      "append-to-body": !0,
      width: e.popupWidth,
      class: "el-tiptap-edit-link-dialog"
    }, {
      default: r(() => [
        d(u, {
          "upload-type": "editor",
          readonly: !e.editor?.isEditable,
          "handle-preview": e.addLink,
          "user-state": e.userState
        }, null, 8, ["readonly", "handle-preview", "user-state"])
      ]),
      _: 1
    }, 8, ["modelValue", "width"])
  ]);
}
const xp = /* @__PURE__ */ U(qp, [["render", Wp]]), Kp = Qe.create({
  name: "UploadFile",
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e }) {
        return {
          component: xp,
          componentProps: {
            editor: e
          }
        };
      }
    };
  }
}), io = Ns.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.setHorizontalRule();
            },
            icon: "horizontal-rule",
            tooltip: t("editor.extensions.HorizontalRule.tooltip")
          }
        };
      }
    };
  }
}), no = js.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return [
          {
            component: H,
            componentProps: {
              command: () => {
                e.commands.undo();
              },
              icon: "undo",
              tooltip: t("editor.extensions.History.tooltip.undo")
            }
          },
          {
            component: H,
            componentProps: {
              command: () => {
                e.commands.redo();
              },
              icon: "redo",
              tooltip: t("editor.extensions.History.tooltip.redo")
            }
          }
        ];
      }
    };
  }
}), so = Us.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      types: ["heading", "paragraph", "list_item", "title"],
      button({ editor: e, extension: t, t: a }) {
        return t.options.alignments.reduce((l, o) => l.concat({
          component: H,
          componentProps: {
            command: () => {
              e.isActive({ textAlign: o }) ? e.commands.unsetTextAlign() : e.commands.setTextAlign(o);
            },
            isActive: o === "left" ? !1 : e.isActive({ textAlign: o }),
            icon: `align-${o}`,
            tooltip: a(`editor.extensions.TextAlign.buttons.align_${o}.tooltip`)
          }
        }), []);
      }
    };
  }
});
var Yt = /* @__PURE__ */ ((e) => (e[e.max = 7] = "max", e[e.min = 0] = "min", e[e.more = 1] = "more", e[e.less = -1] = "less", e))(Yt || {});
function Gp(e, t, a, l) {
  const { doc: o, selection: i } = e;
  if (!o || !i || !(i instanceof ja || i instanceof cl))
    return e;
  const { from: s, to: u } = i;
  return o.nodesBetween(s, u, (m, f) => {
    const c = m.type;
    return a.includes(c.name) ? (e = Yp(e, f, t), !1) : !mn(m.type.name, l.extensionManager.extensions);
  }), e;
}
function Yp(e, t, a) {
  if (!e.doc) return e;
  const l = e.doc.nodeAt(t);
  if (!l) return e;
  const s = Go((l.attrs.indent || 0) + a, 0, 7);
  if (s === l.attrs.indent) return e;
  const u = {
    ...l.attrs,
    indent: s
  };
  return e.setNodeMarkup(t, l.type, u, l.marks);
}
function ro({ delta: e, types: t }) {
  return ({ state: a, dispatch: l, editor: o }) => {
    const { selection: i } = a;
    let { tr: s } = a;
    return s = s.setSelection(i), s = Gp(s, e, t, o), s.docChanged ? (l && l(s), !0) : !1;
  };
}
const uo = Qe.create({
  name: "indent",
  addOptions() {
    return {
      types: ["paragraph", "heading", "blockquote"],
      minIndent: Yt.min,
      maxIndent: Yt.max,
      button({ editor: e, t }) {
        return [
          {
            component: H,
            componentProps: {
              command: () => {
                e.commands.indent();
              },
              icon: "indent",
              tooltip: t("editor.extensions.Indent.buttons.indent.tooltip")
            }
          },
          {
            component: H,
            componentProps: {
              command: () => {
                e.commands.outdent();
              },
              icon: "outdent",
              tooltip: t("editor.extensions.Indent.buttons.outdent.tooltip")
            }
          }
        ];
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: 0,
            parseHTML: (e) => {
              const t = e.getAttribute("data-indent");
              return (t ? parseInt(t, 10) : 0) || 0;
            },
            renderHTML: (e) => e.indent ? { "data-indent": e.indent } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      indent: () => ro({
        delta: Yt.more,
        types: this.options.types
      }),
      outdent: () => ro({
        delta: Yt.less,
        types: this.options.types
      })
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.indent(),
      "Shift-Tab": () => this.editor.commands.outdent()
    };
  }
}), mi = ["paragraph", "heading", "list_item", "todo_item"], hi = /^\d+(.\d+)?$/;
function Jp(e, t) {
  const { selection: a, doc: l } = e, { from: o, to: i } = a;
  let s = !0, u = !1;
  return l.nodesBetween(o, i, (m) => {
    const f = m.type, c = m.attrs.lineHeight || $a;
    return mi.includes(f.name) ? s && t === c ? (s = !1, u = !0, !1) : f.name !== "list_item" && f.name !== "todo_item" : s;
  }), u;
}
function Xp(e) {
  if (!e) return "";
  let t = String(e);
  if (hi.test(t)) {
    const a = parseFloat(t);
    t = String(Math.round(a * 100)) + "%";
  }
  return parseFloat(t) * li + "%";
}
function Qp(e) {
  if (!e || e === $a) return "";
  let t = e;
  if (hi.test(e)) {
    const a = parseFloat(e);
    if (t = String(Math.round(a * 100)) + "%", t === $a) return "";
  }
  return parseFloat(t) / li + "%";
}
function Zp(e, t) {
  const { selection: a, doc: l } = e;
  if (!a || !l || !(a instanceof ja || a instanceof cl))
    return e;
  const { from: o, to: i } = a, s = [], u = t && t !== $a ? t : null;
  return l.nodesBetween(o, i, (m, f) => {
    const c = m.type;
    return mi.includes(c.name) ? ((m.attrs.lineHeight || null) !== u && s.push({
      node: m,
      pos: f,
      nodeType: c
    }), c.name !== "list_item" && c.name !== "todo_item") : !0;
  }), s.length && s.forEach((m) => {
    const { node: f, pos: c, nodeType: F } = m;
    let { attrs: D } = f;
    D = {
      ...D,
      lineHeight: u
    }, e = e.setNodeMarkup(c, F, D, f.marks);
  }), e;
}
function em(e) {
  return ({ state: t, dispatch: a }) => {
    const { selection: l } = t;
    let { tr: o } = t;
    return o = o.setSelection(l), o = Zp(o, e), o.docChanged ? (a && a(o), !0) : !1;
  };
}
const tm = O({
  name: "LineHeightDropdown",
  components: {
    ElDropdown: Ba,
    ElDropdownMenu: La,
    ElDropdownItem: Aa,
    CommandButton: H
  },
  props: {
    editor: {
      type: Ae,
      required: !0
    }
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1);
    return { t: e, enableTooltip: t, isCodeViewMode: a };
  },
  computed: {
    lineHeights() {
      return this.editor.extensionManager.extensions.find((t) => t.name === "lineHeight").options.lineHeights;
    }
  },
  methods: {
    isLineHeightActive(e) {
      return Jp(this.editor.state, e);
    }
  }
});
function am(e, t, a, l, o, i) {
  const s = H, u = _t, m = Ft, f = St;
  return n(), h(f, {
    placement: "bottom",
    trigger: "click",
    onCommand: t[0] || (t[0] = (c) => e.editor.commands.setLineHeight(c))
  }, {
    dropdown: r(() => [
      d(m, {
        slot: "dropdown",
        class: "el-tiptap-dropdown-menu"
      }, {
        default: r(() => [
          (n(!0), v(L, null, J(e.lineHeights, (c) => (n(), h(u, {
            key: c,
            command: c,
            class: Y([{
              "el-tiptap-dropdown-menu__item--active": e.isLineHeightActive(c)
            }, "el-tiptap-dropdown-menu__item"])
          }, {
            default: r(() => [
              $("span", null, A(c), 1)
            ]),
            _: 2
          }, 1032, ["command", "class"]))), 128))
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      $("span", null, [
        d(s, {
          "enable-tooltip": e.enableTooltip,
          tooltip: e.t("editor.extensions.LineHeight.tooltip"),
          readonly: e.isCodeViewMode,
          icon: "text-height"
        }, null, 8, ["enable-tooltip", "tooltip", "readonly"])
      ])
    ]),
    _: 1
  });
}
const lm = /* @__PURE__ */ U(tm, [["render", am]]), om = Qe.create({
  name: "lineHeight",
  addOptions() {
    return {
      types: ["paragraph", "heading", "list_item", "todo_item"],
      lineHeights: ["100%", "115%", "150%", "200%", "250%", "300%"],
      button({ editor: e }) {
        return {
          component: lm,
          componentProps: {
            editor: e
          }
        };
      }
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: null,
            parseHTML: (e) => Qp(e.style.lineHeight) || null,
            renderHTML: (e) => e.lineHeight ? {
              style: `line-height: ${Xp(e.lineHeight)};`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setLineHeight: (e) => em(e),
      unsetLineHeight: () => ({ commands: e }) => this.options.types.every((t) => e.resetAttributes(t, "lineHeight"))
    };
  }
}), po = Qe.create({
  name: "formatClear",
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.unsetAllMarks();
            },
            icon: "clear-format",
            tooltip: t("editor.extensions.FormatClear.tooltip")
          }
        };
      }
    };
  }
}), im = O({
  name: "FullscreenCommandButton",
  components: {
    CommandButton: H
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isFullscreen", !1), l = R("toggleFullscreen");
    return { t: e, enableTooltip: t, isFullscreen: a, toggleFullscreen: l };
  },
  computed: {
    buttonTooltip() {
      return this.isFullscreen ? this.t("editor.extensions.Fullscreen.tooltip.exit_fullscreen") : this.t("editor.extensions.Fullscreen.tooltip.fullscreen");
    }
  }
});
function nm(e, t, a, l, o, i) {
  const s = H;
  return n(), v("div", null, [
    d(s, {
      command: () => e.toggleFullscreen(!e.isFullscreen),
      "enable-tooltip": e.enableTooltip,
      tooltip: e.buttonTooltip,
      icon: e.isFullscreen ? "compress" : "expand",
      "is-active": e.isFullscreen
    }, null, 8, ["command", "enable-tooltip", "tooltip", "icon", "is-active"])
  ]);
}
const sm = /* @__PURE__ */ U(im, [["render", nm]]), rm = Qe.create({
  name: "fullscreen",
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e }) {
        return {
          component: sm
        };
      }
    };
  }
});
function dm(e) {
  const a = Array.from(document.querySelectorAll("style, link")).reduce((s, u) => s + u.outerHTML, "") + e.outerHTML, l = document.createElement("iframe");
  l.id = "el-tiptap-iframe", l.setAttribute("style", "position: absolute; width: 0; height: 0; top: -10px; left: -10px;"), document.body.appendChild(l);
  const o = l.contentWindow, i = l.contentDocument || l.contentWindow && l.contentWindow.document;
  i && (i.open(), i.write(a), i.close()), o && (l.onload = function() {
    try {
      setTimeout(() => {
        o.focus();
        try {
          o.document.execCommand("print", !1) || o.print();
        } catch {
          o.print();
        }
        o.close();
      }, 10);
    } catch (s) {
      oi.error(s);
    }
    setTimeout(function() {
      document.body.removeChild(l);
    }, 100);
  });
}
function um(e) {
  const t = e.dom.closest(".el-tiptap-editor__content");
  return t ? (dm(t), !0) : !1;
}
const pm = Qe.create({
  name: "print",
  addOptions() {
    return {
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.print();
            },
            icon: "print",
            tooltip: t("editor.extensions.Print.tooltip")
          }
        };
      }
    };
  },
  addCommands() {
    return {
      print: () => ({ view: e }) => um(e)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-p": () => this.editor.commands.print()
    };
  }
});
Qe.create({
  name: "selectAll",
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e, t }) {
        return {
          component: H,
          componentProps: {
            command: () => {
              e.commands.selectAll();
            },
            icon: "select-all",
            tooltip: t("editor.extensions.SelectAll.tooltip")
          }
        };
      }
    };
  }
});
const mm = O({
  name: "CodeViewCommandButton",
  components: {
    CommandButton: H
  },
  setup() {
    const e = R("t"), t = R("enableTooltip", !0), a = R("isCodeViewMode", !1), l = R("toggleIsCodeViewMode");
    return { t: e, enableTooltip: t, isCodeViewMode: a, toggleIsCodeViewMode: l };
  }
});
function hm(e, t, a, l, o, i) {
  const s = H;
  return n(), v("div", null, [
    d(s, {
      command: () => e.toggleIsCodeViewMode(!e.isCodeViewMode),
      "enable-tooltip": e.enableTooltip,
      tooltip: e.t("editor.extensions.CodeView.tooltip"),
      icon: "file-code",
      "is-active": e.isCodeViewMode
    }, null, 8, ["command", "enable-tooltip", "tooltip", "is-active"])
  ]);
}
const fm = /* @__PURE__ */ U(mm, [["render", hm]]), cm = {
  minLines: 5,
  // maxLines: 25,
  wrap: !0,
  printMargin: !0,
  useWorker: !1,
  mode: "html"
}, bm = Qe.create({
  name: "codeView",
  addOptions() {
    return {
      ...this.parent?.(),
      button({ editor: e }) {
        return {
          component: fm
        };
      },
      editorOptions: {
        ...cm
      }
    };
  }
  // onBeforeCreate() {
  // 	if (!this.options.codemirror) {
  // 		Logger.warn('"CodeView" extension requires the CodeMirror library.');
  // 		return;
  // 	}
  // },
}), gm = O({
  name: "ElButtonView",
  components: {
    NodeViewWrapper: it
  },
  props: Fe,
  data() {
    return {
      isDark: de()
    };
  },
  mounted() {
  },
  methods: {
    getContent(e) {
      return e.map((t) => t.text).join("");
    }
  }
});
function ym(e, t, a, l, o, i) {
  const s = ve, u = ie, m = X("node-view-wrapper");
  return n(), h(m, { class: "vue-component" }, {
    default: r(() => [
      d(u, ae(e.node.attrs, { dark: e.isDark }), {
        default: r(() => [
          (n(!0), v(L, null, J(e.node.content.content, (f, c) => (n(), v(L, null, [
            f.type.name === "ElIcon" ? (n(), h(s, {
              key: 0,
              "icon-name": f.attrs.icon,
              class: "mr-1"
            }, null, 8, ["icon-name"])) : (n(), v(L, { key: 1 }, [
              I(A(e.getContent(f.content.content)), 1)
            ], 64))
          ], 64))), 256))
        ]),
        _: 1
      }, 16, ["dark"])
    ]),
    _: 1
  });
}
const vm = /* @__PURE__ */ U(gm, [["render", ym]]), mo = ut.create({
  name: "ElButton",
  group: "block",
  content: "block+",
  addAttributes() {
    return {
      type: {
        default: "primary"
      },
      size: {
        default: "default"
      },
      plain: {
        default: !1
      },
      text: {
        default: !1
      },
      bg: {
        default: !1
      },
      link: {
        default: !1
      },
      round: {
        default: !1
      },
      circle: {
        default: !1
      },
      disabled: {
        default: !1
      },
      tag: {
        default: "button"
      },
      icon: {
        default: ""
      },
      color: {
        default: ""
      },
      class: {
        default: ""
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "el-button"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["el-button", ot(e), 0];
  },
  addNodeView() {
    return pt(vm);
  }
}), wm = O({
  name: "ElButtonGroupView",
  components: {
    NodeViewWrapper: it
  },
  props: Fe,
  data() {
    return {
      //isDark: useDark(),
    };
  },
  mounted() {
  },
  methods: {
    getContent(e) {
      return e.map((t) => t.text).join("");
    }
  }
});
function Sm(e, t, a, l, o, i) {
  const s = ie, u = Co, m = X("node-view-wrapper");
  return n(), h(m, { class: "vue-component" }, {
    default: r(() => [
      d(u, ia(na(e.node.attrs)), {
        default: r(() => [
          (n(!0), v(L, null, J(e.node.content.content, (f, c) => (n(), v(L, null, [
            f.type.name === "ElButton" ? (n(), h(s, ae({
              key: 0,
              ref_for: !0
            }, f.attrs), {
              default: r(() => [
                I(A(e.getContent(f.content.content)), 1)
              ]),
              _: 2
            }, 1040)) : b("", !0)
          ], 64))), 256))
        ]),
        _: 1
      }, 16)
    ]),
    _: 1
  });
}
const Fm = /* @__PURE__ */ U(wm, [["render", Sm]]), ho = ut.create({
  name: "ElButtonGroup",
  group: "block",
  content: "block+",
  addAttributes() {
    return {
      class: {
        default: ""
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "el-button-group"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["el-button-group", ot(e), 0];
  },
  addNodeView() {
    return pt(Fm);
  }
}), _m = O({
  name: "EliconView",
  components: {
    NodeViewWrapper: it
  },
  props: Fe,
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    getContent() {
      return this.node.content.content.map((t) => t.text).join("");
    }
  }
});
function km(e, t, a, l, o, i) {
  const s = ve, u = X("node-view-wrapper");
  return n(), h(u, { class: "vue-component" }, {
    default: r(() => [
      d(s, {
        "icon-name": e.node.attrs.icon
      }, null, 8, ["icon-name"])
    ]),
    _: 1
  });
}
const Cm = /* @__PURE__ */ U(_m, [["render", km]]), fo = ut.create({
  name: "ElIcon",
  group: "block",
  content: "inline*",
  addAttributes() {
    return {
      icon: {
        default: ""
      },
      class: {
        default: ""
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "el-icon"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["el-icon", ot(e), 0];
  },
  addNodeView() {
    return pt(Cm);
  }
}), Dm = O({
  name: "ElTagView",
  components: {
    NodeViewWrapper: it
  },
  props: Fe,
  data() {
    return { isDark: de() };
  },
  mounted() {
  },
  methods: {
    getContent() {
      return this.node.content.content.map((t) => t.text).join("");
    }
  }
});
function Im(e, t, a, l, o, i) {
  const s = ta, u = X("node-view-wrapper");
  return n(), h(u, { class: "vue-component" }, {
    default: r(() => [
      d(s, ae(e.node.attrs, { dark: e.isDark }), {
        default: r(() => [
          I(A(e.getContent()), 1)
        ]),
        _: 1
      }, 16, ["dark"])
    ]),
    _: 1
  });
}
const $m = /* @__PURE__ */ U(Dm, [["render", Im]]), co = ut.create({
  name: "ElTag",
  group: "block",
  content: "inline*",
  addAttributes() {
    return {
      type: {
        default: "primary"
      },
      size: {
        default: "default"
      },
      effect: {
        default: "light"
      },
      closable: {
        default: !1
      },
      round: {
        default: !1
      },
      class: {
        default: ""
      },
      color: {
        default: ""
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "el-tag"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["el-tag", ot(e), 0];
  },
  addNodeView() {
    return pt($m);
  }
}), Tm = O({
  name: "ElImageView",
  components: {
    NodeViewWrapper: it
  },
  props: Fe,
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    getContent() {
      return this.node.content.content.map((t) => t.text).join("");
    }
  }
});
function Pm(e, t, a, l, o, i) {
  const s = Vt, u = X("node-view-wrapper");
  return n(), h(u, { class: "vue-component" }, {
    default: r(() => [
      d(s, ia(na(e.node.attrs)), null, 16)
    ]),
    _: 1
  });
}
const Mm = /* @__PURE__ */ U(Tm, [["render", Pm]]), bo = ut.create({
  name: "ElImage",
  group: "block",
  content: "inline*",
  addAttributes() {
    return {
      src: {
        default: ""
      },
      fit: {
        default: "cover"
      },
      style: {
        default: ""
      },
      class: {
        default: ""
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "el-image"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["el-image", ot(e), 0];
  },
  addNodeView() {
    return pt(Mm);
  }
}), Vm = O({
  name: "ElAvatarView",
  components: {
    NodeViewWrapper: it
  },
  props: Fe,
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    getContent() {
      return this.node.content.content.map((t) => t.text).join("");
    }
  }
});
function Em(e, t, a, l, o, i) {
  const s = ul, u = X("node-view-wrapper");
  return n(), h(u, { class: "vue-component" }, {
    default: r(() => [
      d(s, ia(na(e.node.attrs)), null, 16)
    ]),
    _: 1
  });
}
const Am = /* @__PURE__ */ U(Vm, [["render", Em]]), go = ut.create({
  name: "ElAvatar",
  group: "block",
  content: "inline*",
  addAttributes() {
    return {
      src: {
        default: ""
      },
      fit: {
        default: "cover"
      },
      shape: {
        default: "circle"
      },
      size: {
        default: "default"
      },
      icon: {
        default: ""
      },
      style: {
        default: ""
      },
      class: {
        default: ""
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "el-avatar"
      }
    ];
  },
  renderHTML({ HTMLAttributes: e }) {
    return ["el-avatar", ot(e), 0];
  },
  addNodeView() {
    return pt(Am);
  }
}), Lm = O({
  name: "SdHtmlEditor",
  emits: ["update:modelValue", "onUpdate", "change", "create", "transaction", "blur", "focus", "destroy"],
  props: {
    modelValue: null,
    mode: { type: String, default: "mini" },
    placeholder: {
      type: String,
      default: ""
    },
    lang: {
      type: String,
      default: "en"
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    tooltip: {
      type: Boolean,
      default: !0
    },
    enableCharCount: {
      type: Boolean,
      default: !0
    },
    charCountMax: {
      type: Number,
      default: void 0
    },
    locale: {
      type: Object,
      default: void 0
    },
    // ----- Editor Class -----
    editorClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorContentClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorMenubarClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorBubbleMenuClass: {
      type: [String, Array, Object],
      default: void 0
    },
    editorFooterClass: {
      type: [String, Array, Object],
      default: void 0
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t), this.$emit("change", t);
      }
    }
  },
  data() {
    return {
      extensions: []
      // refEditor: null as any,
    };
  },
  watch: {
    // mode: {
    // 	handler(val) {
    // 		if (val == 'mini' && !this.readonly) {
    // 			this.extensions = [
    // 				Document,
    // 				Text,
    // 				Paragraph,
    // 				Heading,
    // 				Bold.configure({ bubble: true }),
    // 				Underline.configure({ bubble: true }),
    // 				Italic.configure({ bubble: true }),
    // 				Link.configure({ bubble: true }),
    // 				TextAlign,
    // 				Highlight.configure({ bubble: true }),
    // 				Color.configure({ bubble: true }),
    // 				FormatClear.configure({ bubble: true }),
    // 				Indent,
    // 				OrderedList,
    // 				BulletList,
    // 				HardBreak,
    // 				Code,
    // 				HorizontalRule,
    // 				History,
    // 			];
    // 		} else {
    // 			this.extensions = [
    // 				Document,
    // 				Text,
    // 				Paragraph,
    // 				Heading,
    // 				Bold.configure({ bubble: true }),
    // 				Underline.configure({ bubble: true }),
    // 				Italic.configure({ bubble: true }),
    // 				Strike.configure({ bubble: true }),
    // 				Link.configure({ bubble: true }),
    // 				Blockquote,
    // 				TextAlign,
    // 				Table.configure({ resizable: true }),
    // 				Highlight.configure({ bubble: true }),
    // 				Color.configure({ bubble: true }),
    // 				FontSize,
    // 				FontFamily,
    // 				Subscript.configure({ bubble: true }),
    // 				Superscript.configure({ bubble: true }),
    // 				FormatClear.configure({ bubble: true }),
    // 				Indent,
    // 				OrderedList,
    // 				BulletList,
    // 				TaskList,
    // 				Youtube,
    // 				Image,
    // 				UploadFile,
    // 				// SelectAll,
    // 				HardBreak,
    // 				Code,
    // 				// Gapcursor,
    // 				// Dropcursor,
    // 				// CodeBlock,
    // 				CodeBlockLowlight,
    // 				LineHeight,
    // 				HorizontalRule,
    // 				Iframe,
    // 				Print,
    // 				CodeView,
    // 				Fullscreen,
    // 				History,
    // 			];
    // 		}
    // 	},
    // },
  },
  methods: {
    onUpdate(e, t) {
      this.$emit("onUpdate", e, t);
    },
    onFocus(e) {
      this.$emit("focus", e.event);
    },
    onBlur(e) {
      this.$emit("blur", e.event);
    },
    onDestroy() {
      this.$emit("destroy");
    },
    onTransaction(e) {
      this.$emit("transaction", e.transaction);
    },
    onCreate(e) {
      this.$emit("create", e.event);
    }
  },
  created() {
    this.mode == "mini" && !this.readonly ? this.extensions = [
      Wl,
      Il,
      $l,
      xl,
      Zl.configure({ bubble: !0 }),
      eo.configure({ bubble: !0 }),
      to.configure({ bubble: !0 }),
      ao.configure({ bubble: !0 }),
      so,
      Ql.configure({ resizable: !0 }),
      oo.configure({ bubble: !0 }),
      lo.configure({ bubble: !0 }),
      po.configure({ bubble: !0 }),
      uo,
      Gl,
      Kl,
      Pl,
      Tl,
      io,
      no,
      mo,
      ho,
      fo,
      co,
      bo,
      go
    ] : this.extensions = [
      Wl,
      Il,
      $l,
      xl,
      Zl.configure({ bubble: !0 }),
      eo.configure({ bubble: !0 }),
      to.configure({ bubble: !0 }),
      tp.configure({ bubble: !0 }),
      ao.configure({ bubble: !0 }),
      Jd,
      so,
      Ql.configure({ resizable: !0 }),
      oo.configure({ bubble: !0 }),
      lo.configure({ bubble: !0 }),
      Ap,
      Cp,
      jp.configure({ bubble: !0 }),
      Up.configure({ bubble: !0 }),
      po.configure({ bubble: !0 }),
      uo,
      Gl,
      Kl,
      ju,
      Np,
      Vu,
      Kp,
      // SelectAll,
      Pl,
      Tl,
      // Gapcursor,
      // Dropcursor,
      // CodeBlock,
      Xd,
      om,
      io,
      ep,
      pm,
      rm,
      no,
      bm,
      mo,
      ho,
      fo,
      co,
      bo,
      go
    ];
  }
});
function Bm(e, t, a, l, o, i) {
  const s = qd;
  return n(), h(s, {
    modelValue: e.value,
    "onUpdate:modelValue": t[0] || (t[0] = (u) => e.value = u),
    extensions: e.extensions,
    placeholder: e.placeholder,
    lang: e.lang,
    width: e.width,
    height: e.height,
    readonly: e.readonly,
    tooltip: e.tooltip,
    charCountMax: e.charCountMax,
    locale: e.locale,
    editorClass: e.editorClass,
    editorContentClass: e.editorContentClass,
    editorBubbleMenuClass: e.editorBubbleMenuClass,
    editorMenubarClass: e.editorMenubarClass,
    editorFooterClass: e.editorFooterClass,
    enableCharCount: e.enableCharCount,
    userState: e.userState,
    onOnCreate: e.onCreate,
    onOnTransaction: e.onTransaction,
    onOnDestroy: e.onDestroy,
    onOnBlur: e.onBlur,
    onOnFocus: e.onFocus,
    onOnUpdate: e.onUpdate
  }, null, 8, ["modelValue", "extensions", "placeholder", "lang", "width", "height", "readonly", "tooltip", "charCountMax", "locale", "editorClass", "editorContentClass", "editorBubbleMenuClass", "editorMenubarClass", "editorFooterClass", "enableCharCount", "userState", "onOnCreate", "onOnTransaction", "onOnDestroy", "onOnBlur", "onOnFocus", "onOnUpdate"]);
}
const Ra = /* @__PURE__ */ U(Lm, [["render", Bm]]), Qa = {
  getUserAgent() {
    return navigator.userAgent;
  }
}, Om = O({
  name: "SdMaskedInput",
  emits: ["update:modelValue", "focus", "change", "blur", "keydown", "complete", "keypress", "paste"],
  props: {
    modelValue: null,
    slotChar: {
      type: String,
      default: "_"
    },
    mask: {
      type: String,
      default: ""
    },
    autoClear: {
      type: Boolean,
      default: !0
    },
    unmask: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    tokens: {
      type: Object,
      default: {
        9: /[0-9]/,
        "#": /[A-Za-z]/,
        "*": /[A-Za-zก-ฮ0-9]/,
        ก: /[ก-ฮ]/,
        a: /[a-z]/,
        A: /[A-Z]/
      }
    }
  },
  data() {
    return {
      tests: null,
      partialPosition: null,
      len: null,
      firstNonMaskPos: null,
      defs: null,
      androidChrome: null,
      lastRequiredNonMaskPos: null,
      buffer: null,
      defaultBuffer: null,
      focus: null,
      caretTimeoutId: null,
      focusText: null,
      oldVal: null,
      isValueChecked: null
    };
  },
  watch: {
    mask: {
      deep: !0,
      handler(e) {
        this.initMask();
      }
    }
  },
  mounted() {
    this.initMask();
  },
  updated() {
    this.isValueUpdated() && this.updateValue();
  },
  computed: {
    filled() {
      return this.modelValue != null && this.modelValue.toString().length > 0;
    }
  },
  methods: {
    initMask() {
      this.tests = [], this.partialPosition = this.mask.length, this.len = this.mask.length, this.firstNonMaskPos = null, this.defs = this.tokens;
      let e = Qa.getUserAgent();
      this.androidChrome = /chrome/i.test(e) && /android/i.test(e);
      let t = this.mask.split("");
      for (let a = 0; a < t.length; a++) {
        let l = t[a];
        l === "?" ? (this.len--, this.partialPosition = a) : this.defs[l] ? (this.tests.push(new RegExp(this.defs[l])), this.firstNonMaskPos === null && (this.firstNonMaskPos = this.tests.length - 1), a < this.partialPosition && (this.lastRequiredNonMaskPos = this.tests.length - 1)) : this.tests.push(null);
      }
      this.buffer = [];
      for (let a = 0; a < t.length; a++) {
        let l = t[a];
        l !== "?" && (this.defs[l] ? this.buffer.push(this.getPlaceholder(a)) : this.buffer.push(l));
      }
      this.defaultBuffer = this.buffer.join(""), this.updateValue(!1);
    },
    onChange(e) {
      let t = this.unmask ? this.getUnmaskedValue() : e.target.value;
      this.$emit("change", this.defaultBuffer !== t ? t : "");
    },
    onInput(e) {
      this.androidChrome ? this.handleAndroidInput(e) : this.handleInputChange(e), this.$emit("update:modelValue", e.target.value);
    },
    onFocus(e) {
      if (this.readonly)
        return;
      this.focus = !0, clearTimeout(this.caretTimeoutId);
      let t;
      this.focusText = this.$el.value, t = this.checkVal(), this.caretTimeoutId = setTimeout(() => {
        this.$el === document.activeElement && (this.writeBuffer(), t === this.mask.replace("?", "").length ? this.caret(0, t) : this.caret(t));
      }, 100), this.$emit("focus", e);
    },
    onBlur(e) {
      if (this.focus = !1, this.checkVal(), this.updateModel(e), this.$el.value !== this.focusText) {
        let t = document.createEvent("HTMLEvents");
        t.initEvent("change", !0, !1), this.$el.dispatchEvent(t);
      }
      this.$emit("blur", e);
    },
    onKeyDown(e) {
      if (this.readonly)
        return;
      let t = e.which || e.keyCode, a, l, o, i = /iphone/i.test(Qa.getUserAgent());
      this.oldVal = this.$el.value, t === 8 || t === 46 || i && t === 127 ? (a = this.caret(), l = a.begin, o = a.end, o - l === 0 && (l = t !== 46 ? this.seekPrev(l) : o = this.seekNext(l - 1), o = t === 46 ? this.seekNext(o) : o), this.clearBuffer(l, o), this.shiftL(l, o - 1), this.updateModel(e), e.preventDefault()) : t === 13 ? (this.$el.blur(), this.updateModel(e)) : t === 27 && (this.$el.value = this.focusText, this.caret(0, this.checkVal()), this.updateModel(e), e.preventDefault()), this.$emit("keydown", e);
    },
    onKeyPress(e) {
      if (!this.readonly) {
        var t = e.which || e.keyCode, a = this.caret(), l, o, i, s;
        e.ctrlKey || e.altKey || e.metaKey || t < 32 || (t && t !== 13 && (a.end - a.begin !== 0 && (this.clearBuffer(a.begin, a.end), this.shiftL(a.begin, a.end - 1)), l = this.seekNext(a.begin - 1), l < this.len && (o = String.fromCharCode(t), this.tests[l].test(o) && (this.shiftR(l), this.buffer[l] = o, this.writeBuffer(), i = this.seekNext(l), /android/i.test(Qa.getUserAgent()) ? setTimeout(() => {
          this.caret(i);
        }, 0) : this.caret(i), a.begin <= this.lastRequiredNonMaskPos && (s = this.isCompleted()))), e.preventDefault()), this.updateModel(e), s && this.$emit("complete", e), this.$emit("keypress", e));
      }
    },
    onPaste(e) {
      this.handleInputChange(e), this.$emit("paste", e);
    },
    caret(e, t) {
      let a, l, o;
      if (!(!this.$el.offsetParent || this.$el !== document.activeElement))
        if (typeof e == "number")
          l = e, o = typeof t == "number" ? t : l, this.$el.setSelectionRange ? this.$el.setSelectionRange(l, o) : this.$el.createTextRange && (a = this.$el.createTextRange(), a.collapse(!0), a.moveEnd("character", o), a.moveStart("character", l), a.select());
        else {
          let i = document;
          return this.$el.setSelectionRange ? (l = this.$el.selectionStart, o = this.$el.selectionEnd) : i.selection && i.selection.createRange && (a = i.selection.createRange(), l = 0 - a.duplicate().moveStart("character", -1e5), o = l + a.text.length), { begin: l, end: o };
        }
    },
    isCompleted() {
      for (let e = this.firstNonMaskPos; e <= this.lastRequiredNonMaskPos; e++)
        if (this.tests[e] && this.buffer[e] === this.getPlaceholder(e))
          return !1;
      return !0;
    },
    getPlaceholder(e) {
      return e < this.slotChar.length ? this.slotChar.charAt(e) : this.slotChar.charAt(0);
    },
    seekNext(e) {
      for (; ++e < this.len && !this.tests[e]; ) ;
      return e;
    },
    seekPrev(e) {
      for (; --e >= 0 && !this.tests[e]; ) ;
      return e;
    },
    shiftL(e, t) {
      let a, l;
      if (!(e < 0)) {
        for (a = e, l = this.seekNext(t); a < this.len; a++)
          if (this.tests[a]) {
            if (l < this.len && this.tests[a].test(this.buffer[l]))
              this.buffer[a] = this.buffer[l], this.buffer[l] = this.getPlaceholder(l);
            else
              break;
            l = this.seekNext(l);
          }
        this.writeBuffer(), this.caret(Math.max(this.firstNonMaskPos, e));
      }
    },
    shiftR(e) {
      let t, a, l, o;
      for (t = e, a = this.getPlaceholder(e); t < this.len; t++)
        if (this.tests[t])
          if (l = this.seekNext(t), o = this.buffer[t], this.buffer[t] = a, l < this.len && this.tests[l].test(o))
            a = o;
          else
            break;
    },
    handleAndroidInput(e) {
      var t = this.$el.value, a = this.caret();
      if (this.oldVal && this.oldVal.length && this.oldVal.length > t.length) {
        for (this.checkVal(!0); a.begin > 0 && !this.tests[a.begin - 1]; ) a.begin--;
        if (a.begin === 0)
          for (; a.begin < this.firstNonMaskPos && !this.tests[a.begin]; ) a.begin++;
        this.caret(a.begin, a.begin);
      } else {
        for (this.checkVal(!0); a.begin < this.len && !this.tests[a.begin]; ) a.begin++;
        this.caret(a.begin, a.begin);
      }
      this.isCompleted() && this.$emit("complete", e);
    },
    clearBuffer(e, t) {
      let a;
      for (a = e; a < t && a < this.len; a++)
        this.tests[a] && (this.buffer[a] = this.getPlaceholder(a));
    },
    writeBuffer() {
      this.$el.value = this.buffer.join("");
    },
    checkVal(e = !1) {
      this.isValueChecked = !0;
      let t = this.$el.value, a = -1, l, o, i;
      for (l = 0, i = 0; l < this.len; l++)
        if (this.tests[l]) {
          for (this.buffer[l] = this.getPlaceholder(l); i++ < t.length; )
            if (o = t.charAt(i - 1), this.tests[l].test(o)) {
              this.buffer[l] = o, a = l;
              break;
            }
          if (i > t.length) {
            this.clearBuffer(l + 1, this.len);
            break;
          }
        } else
          this.buffer[l] === t.charAt(i) && i++, l < this.partialPosition && (a = l);
      return e ? this.writeBuffer() : a + 1 < this.partialPosition ? this.autoClear || this.buffer.join("") === this.defaultBuffer ? (this.$el.value && (this.$el.value = ""), this.clearBuffer(0, this.len)) : this.writeBuffer() : (this.writeBuffer(), this.$el.value = this.$el.value.substring(0, a + 1)), this.partialPosition ? l : this.firstNonMaskPos;
    },
    handleInputChange(e) {
      if (!this.readonly) {
        var t = this.checkVal(!0);
        this.caret(t), this.updateModel(e), this.isCompleted() && this.$emit("complete", e);
      }
    },
    getUnmaskedValue() {
      let e = [];
      for (let t = 0; t < this.buffer.length; t++) {
        let a = this.buffer[t];
        this.tests[t] && a !== this.getPlaceholder(t) && e.push(a);
      }
      return e.join("");
    },
    updateModel(e) {
      let t = this.unmask ? this.getUnmaskedValue() : e.target.value;
      this.$emit("update:modelValue", this.defaultBuffer !== t ? t : "");
    },
    updateValue(e = !0) {
      this.$el && (this.modelValue == null ? (this.$el.value = "", e && this.$emit("update:modelValue", "")) : (this.$el.value = this.modelValue, this.checkVal(), setTimeout(() => {
        if (this.$el && (this.writeBuffer(), this.checkVal(), e)) {
          let t = this.unmask ? this.getUnmaskedValue() : this.$el.value;
          this.$emit("update:modelValue", this.defaultBuffer !== t ? t : "");
        }
      }, 10)), this.focusText = this.$el.value);
    },
    isValueUpdated() {
      return this.unmask ? this.modelValue != this.getUnmaskedValue() : this.defaultBuffer !== this.$el.value && this.$el.value !== this.modelValue;
    }
  }
}), Nm = ["disabled", "readonly"];
function jm(e, t, a, l, o, i) {
  return n(), v("input", {
    disabled: e.disabled,
    readonly: e.readonly,
    onChange: t[0] || (t[0] = (...s) => e.onChange && e.onChange(...s)),
    onInput: t[1] || (t[1] = (...s) => e.onInput && e.onInput(...s)),
    onFocus: t[2] || (t[2] = (...s) => e.onFocus && e.onFocus(...s)),
    onBlur: t[3] || (t[3] = (...s) => e.onBlur && e.onBlur(...s)),
    onKeydown: t[4] || (t[4] = (...s) => e.onKeyDown && e.onKeyDown(...s)),
    onKeypress: t[5] || (t[5] = (...s) => e.onKeyPress && e.onKeyPress(...s)),
    onPaste: t[6] || (t[6] = (...s) => e.onPaste && e.onPaste(...s))
  }, null, 40, Nm);
}
const Aw = /* @__PURE__ */ U(Om, [["render", jm]]), Kt = /* @__PURE__ */ new Map(), Za = /* @__PURE__ */ new Set(), Gt = /* @__PURE__ */ new Map(), yo = (e) => `${e.formId}::${e.valueField}::${(e.labelField || []).join(",")}::${e.labelTemplate || ""}`, vo = (e, t) => `${e}::${t}`, gt = Rs("selectLabel", {
  state: () => ({
    // trigger เดียวสำหรับ reactivity — bump เมื่อ cache เปลี่ยน เพื่อให้ cell ที่อ่านอยู่ re-eval
    tick: 0
  }),
  actions: {
    /**
     * resolve label ของ ids (batch). ยิงเฉพาะ id ที่ยังไม่ cache และยังไม่ pending → 1 request ต่อ batch
     */
    async ensureLabels(e, t, a) {
      if (!e || !e.formId || !e.valueField) return;
      const l = yo(e);
      let o = Kt.get(l);
      o || (o = /* @__PURE__ */ new Map(), Kt.set(l, o));
      const i = [];
      for (const s of t) {
        if (s == null || s === "" || o.has(s)) continue;
        const u = `${l}::${s}`;
        Za.has(u) || (Za.add(u), i.push(s));
      }
      if (i.length !== 0)
        try {
          const s = e.valueField === "_id" || !!e.valueObjectId, u = {
            // fileter เป็น array → backend แปลเป็น WHERE valueField IN (...)
            fileter: { [e.valueField]: i },
            limit: i.length
          };
          s && (u.fileterObjectId = [e.valueField]);
          const m = {
            providerId: e.formId,
            providerType: "FORM",
            params: {},
            options: u
          }, f = await at(m, !1, a), c = f && f.response && f.data && f.data.data ? f.data.data : [];
          for (const F of i) {
            const D = ci(c, [F], e.valueField, e.labelField, e.labelTemplate || "");
            o.set(F, D !== "" ? D : null);
          }
        } catch (s) {
          console.error("useSelectLabelStore.ensureLabels failed:", s);
        } finally {
          for (const s of i)
            Za.delete(`${l}::${s}`);
          this.tick++;
        }
    },
    /**
     * อ่าน label สดจาก cache
     * @returns string = label ที่ resolve ได้ | null = ยังไม่รู้ผล/ไม่เจอ → caller ต้อง fallback เอง
     */
    getLabel(e, t) {
      this.tick;
      const a = typeof e == "string" ? e : yo(e), l = Kt.get(a);
      if (!l) return null;
      const o = l.get(t);
      return o ?? null;
    },
    /**
     * อ่าน raw record ของ id จาก cache (sync) สำหรับ joiner
     * @returns raw doc | null = ยังไม่ cache → caller ต้อง fetch เอง
     */
    getRaw(e, t, a) {
      if (!e || !t || a == null || a === "") return null;
      const l = Gt.get(vo(e, t));
      return l ? l.get(a) ?? null : null;
    },
    /**
     * เก็บ raw record ลง cache หลัง fetch สด (getDataOne) เพื่อ dedupe ข้ามการเปิดฟอร์มครั้งถัดไป
     */
    setRaw(e, t, a, l) {
      if (!e || !t || a == null || a === "" || l == null) return;
      const o = vo(e, t);
      let i = Gt.get(o);
      i || (i = /* @__PURE__ */ new Map(), Gt.set(o, i)), i.set(a, l);
    },
    /**
     * ล้าง cache ของ source form ที่เพิ่ง save/update (label/raw อาจเปลี่ยน)
     * เรียกจาก event 'formdata:saved' หลัง saveData/removeData
     */
    invalidateByProvider(e) {
      if (!e) return;
      let t = !1;
      for (const a of Array.from(Kt.keys()))
        a.startsWith(`${e}::`) && (Kt.delete(a), t = !0);
      for (const a of Array.from(Gt.keys()))
        a.startsWith(`${e}::`) && (Gt.delete(a), t = !0);
      t && this.tick++;
    }
  }
}), at = async (e, t, a) => await ce.post(
  `${a.host}/widget/crud/getdata-all`,
  { sdProvider: e, totalEnable: t },
  {
    headers: {
      Authorization: `Bearer ${a.user?.token}`
    }
  }
).then((o) => o.data && o.data.message ? { response: !0, data: o.data, message: o.data.message } : { response: !1, data: null, message: "Can't get data" }).catch((o) => o.response && o.response.data && o.response.data.message ? { response: !1, data: null, message: o.response.data.message } : { response: !1, data: null, message: "Can't get data (error)" }), Xt = async (e, t) => await ce.post(
  `${t.host}/widget/crud/getdata-one`,
  { sdProvider: e },
  {
    headers: {
      Authorization: `Bearer ${t.user?.token}`
    }
  }
).then((l) => l.data && l.data.message ? { response: !0, data: l.data, message: l.data.message } : { response: !1, data: null, message: "Can't get data" }).catch((l) => l.response && l.response.data && l.response.data.message ? { response: !1, data: null, message: l.response.data.message } : { response: !1, data: null, message: "Can't get data" }), $e = async (e, t) => await ce.post(
  `${t.host}/widget/sdform/getform`,
  { formId: e },
  {
    headers: {
      Authorization: `Bearer ${t.user?.token}`
    }
  }
).then((l) => {
  if (l.data && l.data.message) {
    let o = l.data.data;
    return o.dataid = o._id, { response: !0, data: o, message: l.data.message };
  } else
    return { response: !1, data: void 0, message: "Can't get form" };
}).catch((l) => l.response && l.response.data && l.response.data.message ? { response: !1, data: void 0, message: l.response.data.message } : { response: !1, data: void 0, message: "Can't get form" }), Um = async (e, t, a) => await ce.post(
  `${a.host}/widget/sdform/getform-version`,
  { formId: e, versionName: t },
  {
    headers: {
      Authorization: `Bearer ${a.user?.token}`
    }
  }
).then((o) => {
  if (o.data && o.data.message) {
    let i = o.data.data;
    return i.dataid = i._id, { response: !0, data: i, message: o.data.message };
  } else
    return { response: !1, data: void 0, message: "Can't get form" };
}).catch((o) => o.response && o.response.data && o.response.data.message ? { response: !1, data: void 0, message: o.response.data.message } : { response: !1, data: void 0, message: "Can't get form" }), za = async (e, t) => await ce.post(
  `${t.host}/widget/sdform/insert-empty`,
  { formId: e },
  {
    headers: {
      Authorization: `Bearer ${t.user?.token}`
    }
  }
).then((l) => {
  if (l.data && l.data.message) {
    let o = l.data.data;
    return o.dataid = l.data.id, o._id = l.data.id, o;
  } else
    return null;
}).catch((l) => null), Rm = async (e, t, a) => await ce.delete(`${a.host}/widget/sdform/delete-empty`, {
  headers: {
    Authorization: `Bearer ${a.user?.token}`
  },
  data: { formId: e, dataId: t }
}).then((o) => !0).catch((o) => !1), yt = async (e, t, a, l, o) => await ce.put(
  `${o.host}/widget/sdform/save-data`,
  { formId: e, dataId: t, dataUpdate: a, rstat: l },
  {
    headers: {
      Authorization: `Bearer ${o.user?.token}`
    }
  }
).then((s) => {
  if (s.data && s.data.message) {
    let u = s.data.data;
    return u._id = s.data.id, u.dataid = u._id, gt().invalidateByProvider(e), { data: u, message: s.data.message };
  } else
    return { data: null, message: s.data.message };
}).catch((s) => s.response && s.response.data && s.response.data.message ? { data: null, message: s.response.data.message } : { data: null, message: "Can't save data" }), Ha = async (e, t, a) => await ce.delete(`${a.host}/widget/sdform/remove-data`, {
  headers: {
    Authorization: `Bearer ${a.user?.token}`
  },
  data: { formId: e, dataId: t }
}).then((o) => (gt().invalidateByProvider(e), !0)).catch((o) => !1), Lw = async (e, t, a) => await ce.delete(`${a.host}/widget/sdform/delete-data`, {
  headers: {
    Authorization: `Bearer ${a.user?.token}`
  },
  data: { formId: e, dataId: t }
}).then((o) => (gt().invalidateByProvider(e), !0)).catch((o) => !1), zm = [
  "_id",
  "xparentx",
  "xsitex",
  "xsitex.code",
  "xsitex.name",
  "xunitx",
  "xunitx.code",
  "xunitx.name",
  "xrstatx",
  "xversionx",
  "xerrorx",
  "created_by",
  "created_by.id",
  "created_by.name",
  "created_at",
  "updated_by",
  "updated_by.id",
  "updated_by.name",
  "updated_at"
], Bw = (e, t) => e && Object.keys(e).length > 0 && e[t] && e[t].type ? e[t].type : ["_id", "xparentx"].includes(t) ? Ge.ObjectId : Ge.Any, fi = (e, t) => {
  const a = e && e.form_db && e.form_db.schema ? e.form_db.schema : null;
  return a && Object.keys(a).length > 0 && t && a[t] && a[t].type ? a[t].type : ["_id", "xparentx"].includes(t) ? Ge.ObjectId : Ge.Any;
}, wo = (e, t) => ["_id", "xparentx"].includes(t) ? !0 : fi(e, t) === "ObjectId", Ow = async (e, t, a, l) => await ce.put(
  `${l.host}/widget/sdform/check-parent`,
  { formId: e, dataId: t, formData: a },
  {
    headers: {
      Authorization: `Bearer ${l.user?.token}`
    }
  }
).then((i) => {
  if (i.data && i.data.message) {
    let s = i.data.data;
    return s._id = i.data.id, s.dataid = s._id, { data: s, message: i.data.message };
  } else
    return { data: i.data.data, message: i.data.message };
}).catch((i) => i.response && i.response.data && i.response.data.message ? { data: i.response.data.data, message: i.response.data.message } : { data: null, message: "Can't save data" }), Zt = (e, t) => {
  if (e.form_share.form_sharing === "private") {
    let a = "";
    if (e.created_by && e.created_by.id && (a = e.created_by.id), t.user_id !== a)
      return !1;
  } else if (e.form_share.form_sharing === "assign") {
    let a = "";
    if (e.created_by && e.created_by.id && (a = e.created_by.id), t.user_id !== a) {
      const l = e.form_share.form_assign, o = t.roles;
      let i = !1;
      if (o.forEach((s) => {
        if (l.includes(s)) {
          i = !0;
          return;
        }
      }), !i)
        return !1;
    }
  }
  return !0;
}, ma = (e) => e.includes("admin") || e.includes("super"), Oe = (e, t) => {
  let a = !1, l = !1;
  if (e.form_options.data_manager && Object.keys(e.form_options.data_manager).length > 0) {
    const o = e.form_options.data_manager;
    t.roles.forEach((s) => {
      if (o.includes(s)) {
        l = !0;
        return;
      }
    });
  }
  if (e.created_by.id === t.user_id || l || ma(t.roles))
    a = !0;
  else if (e.form_share.insert_policy)
    if (e.form_share.insert_assign && Object.keys(e.form_share.insert_assign).length > 0) {
      const o = e.form_share.insert_assign;
      t.roles.forEach((s) => {
        if (o.includes(s)) {
          a = !0;
          return;
        }
      });
    } else
      a = !0;
  return a;
}, Je = (e, t, a) => {
  let l = !1, o = !1;
  if (e.form_options.data_manager && Object.keys(e.form_options.data_manager).length > 0) {
    const i = e.form_options.data_manager;
    a.roles.forEach((u) => {
      if (i.includes(u)) {
        o = !0;
        return;
      }
    });
  }
  if (e.created_by && (e.created_by.id === a.user_id || o || ma(a.roles)))
    l = !0;
  else if (t && t.created_by && t.created_by.id && t.created_by.id === a.user_id)
    l = !0;
  else if (e.form_share.update_policy)
    if (e.form_share.update_assign && Object.keys(e.form_share.update_assign).length > 0) {
      const i = e.form_share.update_assign;
      a.roles.forEach((u) => {
        if (i.includes(u)) {
          l = !0;
          return;
        }
      });
    } else
      l = !0;
  return l;
}, vl = (e, t, a) => {
  let l = !1, o = !1;
  if (e.form_options.data_manager && Object.keys(e.form_options.data_manager).length > 0) {
    const i = e.form_options.data_manager;
    a.roles.forEach((u) => {
      if (i.includes(u)) {
        o = !0;
        return;
      }
    });
  }
  if (e.created_by.id === a.user_id || o || ma(a.roles))
    l = !0;
  else if (t && t.created_by && t.created_by.id && t.created_by.id === a.user_id)
    l = !0;
  else if (e.form_share.delete_policy)
    if (e.form_share.delete_assign && Object.keys(e.form_share.delete_assign).length > 0) {
      const i = e.form_share.delete_assign;
      a.roles.forEach((u) => {
        if (i.includes(u)) {
          l = !0;
          return;
        }
      });
    } else
      l = !0;
  return l;
}, qa = (e, t, a) => {
  let l = !1, o = !1;
  if (e.form_options.data_manager && Object.keys(e.form_options.data_manager).length > 0) {
    const i = e.form_options.data_manager;
    a.roles.forEach((u) => {
      if (i.includes(u)) {
        o = !0;
        return;
      }
    });
  }
  return e.created_by && (e.created_by.id === a.user_id || o || ma(a.roles)) ? l = !0 : e.form_share.data_sharing && (e.form_share.data_sharing == "private" ? t && t.created_by && t.created_by.id && t.created_by.id === a.user_id && (l = !0) : e.form_share.data_sharing == "public" ? l = !0 : e.form_share.data_sharing == "site" ? t && t.xsitex && t.xsitex.code && t.xsitex.code === a.site.code && (l = !0) : e.form_share.data_sharing == "unit" && t && t.xunitx && t.xunitx.code && t.xunitx.code === a.unit.code && (l = !0)), l;
}, Hm = (e, t) => {
  let a = !1;
  if (e.form_options.data_manager && Object.keys(e.form_options.data_manager).length > 0) {
    const o = e.form_options.data_manager;
    t.roles.forEach((s) => {
      o.includes(s);
    });
  }
  const l = t.roles;
  return a = ma(l), a;
}, Ee = (e, t, a, l = "") => {
  if (e != null) {
    if (t === "xrstatx")
      return e == 0 ? "Empty" : e == 1 ? "Save Draft" : e == 2 ? "Submited" : e == 3 ? "Deleted" : e;
    {
      let o = a.form_db.schema;
      if (l && a.form_db.schema[l] && a.form_db.schema[l].subField && (o = a.form_db.schema[l].subField), o[t]) {
        const i = o[t], s = ["switch-input"], u = ["radio-input", "select-input", "checkbox-input"], m = ["date-input", "date-panel-input", "date-range-input", "time-input", "time-range-input", "multiple-date"], f = ["file-upload-input", "picture-upload-input", "crop-upload-input"], c = ["tags-input"], F = ["number-input"], D = ["select-form-input", "select-data-input", "select-sql-input"];
        if (s.includes(i.component))
          return e ? "True" : "False";
        if (u.includes(i.component)) {
          const g = a.form_db.data_list[i.fieldName] ? a.form_db.data_list[i.fieldName] : [];
          if (Array.isArray(e)) {
            const C = e;
            let _ = [];
            return C.forEach((p, y) => {
              const S = g.find((N) => !!N && N.value == p);
              S != null && S != null ? _.push(S.label) : _.push(p);
            }), _.join(", ");
          } else {
            const C = g.find((_) => !!_ && _.value == e);
            if (C != null && C != null)
              return C.label;
          }
          return e;
        } else if (m.includes(i.component)) {
          if ((i.component == "time-input" || i.component == "time-range-input") && (i.valueFormat = "HH:mm:ss"), Array.isArray(e)) {
            const g = e;
            let C = [];
            return g.forEach((_, p) => {
              if (i.format && i.valueFormat) {
                const y = we(_, i.valueFormat);
                C.push(/B/.test(i.format) ? y.locale("th").format(i.format) : y.format(i.format));
              } else
                C.push(_);
            }), C.length > 2 ? C.join(", ") : C.join(" - ");
          } else if (i.format && i.valueFormat) {
            const g = we(e, i.valueFormat);
            return /B/.test(i.format) ? g.locale("th").format(i.format) : g.format(i.format);
          }
        } else if (f.includes(i.component)) {
          const g = e;
          return g && Array.isArray(g) ? g.map((C) => C.url).join(", ") : e;
        } else {
          if (c.includes(i.component))
            return e && Array.isArray(e) ? e.join(", ") : e;
          if (F.includes(i.component)) {
            const g = Number(e);
            if (!isNaN(g)) {
              const C = Number(i.format);
              return isNaN(C) ? g.toLocaleString("en-US") : g.toLocaleString("en-US", { minimumFractionDigits: C, maximumFractionDigits: C });
            }
            return e;
          } else if (i.component === "cascader-form-input") {
            const g = i.inputOptions?.separator || " / ";
            if (i.inputOptions?.saveWithLabel) {
              if (Array.isArray(e))
                return e.map((C) => C?.label ?? "").filter(Boolean).join(", ");
              if (e && typeof e == "object")
                return e.label ?? JSON.stringify(e);
            } else if (Array.isArray(e))
              return e.length > 0 && Array.isArray(e[0]) ? e.map((C) => C.join(g)).join(", ") : e.join(g);
            return e;
          } else if (D.includes(i.component)) {
            if (i.multiple)
              return e.label ? e.label : e.value ? Object.keys(e.value).length > 0 ? e.value.join ? e.value.join(", ") : e.value : null : e && Array.isArray(e) ? e.join(", ") : e;
            if (i.component === "select-form-input" && i.inputOptions && i.inputOptions.refreshLabel) {
              const g = i.inputOptions, C = e && typeof e == "object" ? e.value : e;
              if (C && g.formId) {
                const _ = gt().getLabel(
                  { formId: g.formId, valueField: g.valueField || "_id", labelField: g.labelField || [], labelTemplate: g.labelTemplate || "" },
                  C
                );
                if (_ != null) return _;
              }
            }
            return e && e.label ? e.label : e;
          } else if (i.component === "radio-text-input") {
            const C = (a.form_db.data_list[i.fieldName] ? a.form_db.data_list[i.fieldName] : []).find(
              (_) => !!_ && _.value == e.value
            );
            return C != null && C != null ? C.text ? `${C.label} ${e.text} ${C.suffix}` : C.label : e;
          } else {
            if (i.type === "Boolean")
              return e ? "True" : "False";
            if (i.type === "Array" || i.multiple)
              return e && Array.isArray(e) ? e.join(", ") : e;
            if (["Number", "Integer"].includes(i.type)) {
              const g = Number(e);
              if (!isNaN(g)) {
                const C = Number(i.format);
                return isNaN(C) ? g.toLocaleString("en-US") : g.toLocaleString("en-US", { minimumFractionDigits: C, maximumFractionDigits: C });
              }
              return e;
            } else if (["StringDate", "ArrayDate", "Date", "Timestamp"].includes(i.type)) {
              if (Array.isArray(e)) {
                const g = e;
                let C = [];
                return g.forEach((_, p) => {
                  i.format && i.valueFormat ? C.push(we(_, i.valueFormat).format(i.format)) : C.push(_);
                }), C.length > 2 ? C.join(", ") : C.join(" - ");
              } else if (i.format && i.valueFormat)
                return we(e, i.valueFormat).format(i.format);
            } else return ["String|Array", "Object|Array"].includes(i.type) ? e && Array.isArray(e) ? e.join(", ") : e : typeof e == "object" ? JSON.stringify(e) : e;
          }
        }
      }
      return e;
    }
  } else
    return e;
}, ci = (e, t, a, l, o) => {
  let i = [];
  for (const s of t)
    for (const u of e)
      if (u[a] && u[a] === s) {
        let m = [], f = {};
        l.forEach((c) => {
          const F = pe(u, c);
          F ? (m.push(F), f[`{{${c}}}`] = F) : f[`{{${c}}}`] = "";
        }), o && o != "" ? i.push(ue(o, f)) : i.push(m.join(" "));
        break;
      }
  return i.join(", ");
}, Nw = (e, t, a) => {
  let l = "", o = [], i = {};
  return t.forEach((s) => {
    const u = pe(e, s);
    u ? (o.push(u), i[`{{${s}}}`] = u) : i[`{{${s}}}`] = "";
  }), a && a != "" ? l = ue(a, i) : l = o.join(" "), l;
}, qm = O({
  name: "SdGridColumnDynamic",
  components: {
    // SdHtmlEditor,
  },
  props: {
    sdformModel: {
      type: Object,
      required: !0
    },
    rawData: {
      type: Object,
      required: !0
    },
    subSchema: {
      type: Object
    },
    subIndex: {
      type: Number,
      default: -1
    },
    parentName: {
      type: String,
      default: ""
    },
    fieldName: {
      type: String,
      required: !0
    },
    fieldSetting: {
      type: Object,
      default: {}
    },
    rawValue: {
      type: Boolean,
      default: !1
    },
    subformWidth: {
      type: Number,
      default: 600
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  computed: {
    dataDispaly() {
      return this.subIndex > -1 ? this.parentName ? this.rawData[this.parentName][this.subIndex] : this.rawData[this.subIndex] : this.parentName ? this.rawData[this.parentName] : this.rawData;
    },
    fieldPath() {
      return this.parentName ? `${this.parentName}.${this.fieldName}` : this.fieldName;
    },
    schema() {
      return this.subSchema && this.subSchema[this.fieldName] ? this.subSchema[this.fieldName] : this.sdformModel.form_db.schema[this.fieldName] ? this.sdformModel.form_db.schema[this.fieldName] : {};
    }
  },
  data() {
    return {
      previewIndex: 0,
      labelValue: null
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
    previewList(e) {
      const t = [];
      for (const a of e)
        a.url && t.push(a.url);
      return t;
    },
    getTagType(e) {
      const t = this.getschemaValue(this.sdformModel.form_db.schema, "format", e, "primary,plain");
      return t && t.split(",")[0] || "primary";
    },
    getTagEffect(e) {
      const t = this.getschemaValue(this.sdformModel.form_db.schema, "format", e, "primary,plain");
      return t && t.split(",")[1] || "plain";
    },
    getschemaValue(e, t, a, l) {
      if (e[a]) {
        const o = e[a];
        return o[t] ? o[t] : l;
      }
      return l;
    },
    getValue(e, t, a, l, o = "") {
      let i = a.split(".");
      const s = i.length - 1;
      if (s > 0 && this.subIndex === -1 && i[s]) {
        const f = i[s];
        i = i.slice(0, s);
        let c = i.length > 0 ? i.join(".") : i.join();
        if (e[c] && e[c].type && e[c].type == "Array") {
          let F = pe(t, c), D = [];
          for (const g in F)
            if (Object.prototype.hasOwnProperty.call(F, g)) {
              let _ = F[g][f];
              _ && (this.rawValue ? D.push(_) : D.push(Ee(_, a, l)));
            }
          return D.join(", ");
        }
      }
      let u = a;
      this.subIndex > -1 && (u = `${this.parentName}.${this.subIndex}.${this.fieldName}`);
      let m = pe(t, u);
      return this.rawValue ? m ?? null : Ee(m, a, l, o);
    }
  }
});
function Wm(e, t, a, l, o, i) {
  const s = ve, u = ie, m = X("sd-value-widget", !0), f = Xe, c = aa, F = lt, D = Vt, g = Bi, C = We, _ = Ea, p = rl, y = ta, S = Ze, N = Ra, w = Oi;
  return e.schema.component === "sub-form" && !e.rawValue ? (n(), h(F, {
    key: 0,
    width: e.subformWidth,
    trigger: "click"
  }, {
    reference: r(() => [
      d(u, { size: "small" }, {
        default: r(() => [
          d(s, {
            "icon-name": "table",
            class: "mr-1"
          }),
          t[3] || (t[3] = I(" View", -1))
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      d(c, {
        data: e.dataDispaly[e.fieldName]
      }, {
        default: r(() => [
          e.schema.subField ? (n(!0), v(L, { key: 0 }, J(e.schema.subField, (T) => (n(), h(f, {
            prop: T.fieldName,
            "column-key": T.fieldName,
            "min-width": 80,
            label: e.getschemaValue(e.schema.subField, "label", T.fieldName, ""),
            width: e.getschemaValue(e.schema.subField, "width", T.fieldName, ""),
            align: e.getschemaValue(e.schema.subField, "align", T.fieldName, "left"),
            sortable: e.getschemaValue(e.schema.subField, "sortable", T.fieldName, !1),
            fixed: e.getschemaValue(e.schema.subField, "fixed", T.fieldName, !1)
          }, {
            default: r((V) => [
              d(m, {
                "sdform-model": e.sdformModel,
                "sub-schema": e.schema.subField,
                "field-name": T.fieldName,
                "parent-name": e.fieldName,
                "subform-width": e.subformWidth,
                "raw-data": e.rawData,
                "sub-index": V.$index,
                "raw-value": e.rawValue,
                "user-state": e.userState
              }, null, 8, ["sdform-model", "sub-schema", "field-name", "parent-name", "subform-width", "raw-data", "sub-index", "raw-value", "user-state"])
            ]),
            _: 2
          }, 1032, ["prop", "column-key", "label", "width", "align", "sortable", "fixed"]))), 256)) : b("", !0)
        ]),
        _: 1
      }, 8, ["data"])
    ]),
    _: 1
  }, 8, ["width"])) : (e.schema.component === "picture-upload-input" || e.schema.component === "crop-upload-input") && !e.rawValue ? (n(), h(g, {
    key: 1,
    wrap: ""
  }, {
    default: r(() => [
      e.dataDispaly[e.fieldName] ? (n(!0), v(L, { key: 0 }, J(e.dataDispaly[e.fieldName], (T, V) => (n(), h(D, {
        ref_for: !0,
        ref: "imageRef",
        style: { width: "40px", height: "40px" },
        src: T.url,
        "preview-src-list": e.previewList(e.dataDispaly[e.fieldName]),
        "initial-index": e.previewIndex,
        fit: "cover",
        "zoom-rate": 1.2,
        "max-scale": 7,
        "min-scale": 0.2,
        "preview-teleported": ""
      }, null, 8, ["src", "preview-src-list", "initial-index"]))), 256)) : b("", !0)
    ]),
    _: 1
  })) : e.schema.component === "file-upload-input" && !e.rawValue ? (n(), v(L, { key: 2 }, [
    e.dataDispaly[e.fieldName] ? (n(), h(p, {
      key: 0,
      "file-list": e.dataDispaly[e.fieldName],
      "onUpdate:fileList": t[0] || (t[0] = (T) => e.dataDispaly[e.fieldName] = T),
      class: "upload-file-view",
      "show-file-list": !0,
      "auto-upload": !1,
      disabled: !0
    }, {
      file: r(({ file: T }) => [
        d(_, {
          class: "",
          href: T.url,
          type: "primary",
          target: "_blank"
        }, {
          default: r(() => [
            d(s, {
              "icon-name": "el-document",
              class: "mr-1"
            }),
            d(C, {
              type: e.fieldSetting.textType ? e.fieldSetting.textType : e.schema.textType ? e.schema.textType : "",
              style: le(`width:${e.schema.width ? e.schema.width : 150}px;`),
              truncated: "",
              title: T.name
            }, {
              default: r(() => [
                I(A(T.name), 1)
              ]),
              _: 2
            }, 1032, ["type", "style", "title"])
          ]),
          _: 2
        }, 1032, ["href"])
      ]),
      _: 1
    }, 8, ["file-list"])) : b("", !0)
  ], 64)) : e.schema.component === "tags-input" ? (n(), v(L, { key: 3 }, [
    e.dataDispaly[e.fieldName] ? (n(!0), v(L, { key: 0 }, J(e.dataDispaly[e.fieldName], (T) => (n(), h(y, {
      key: T,
      type: e.getTagType(e.fieldSetting),
      effect: e.getTagEffect(e.fieldSetting),
      class: "mr-1 mb-0.5"
    }, {
      default: r(() => [
        I(A(T), 1)
      ]),
      _: 2
    }, 1032, ["type", "effect"]))), 128)) : b("", !0)
  ], 64)) : e.schema.component === "svg-input" && !e.rawValue ? (n(), v(L, { key: 4 }, [
    e.dataDispaly[e.fieldName] ? (n(), h(S, {
      key: 0,
      "svg-data": e.dataDispaly[e.fieldName],
      class: "text-7"
    }, null, 8, ["svg-data"])) : b("", !0)
  ], 64)) : e.schema.component === "html-input" && !e.rawValue ? (n(), v(L, { key: 5 }, [
    e.dataDispaly[e.fieldName] ? (n(), h(N, {
      key: 0,
      modelValue: e.dataDispaly[e.fieldName],
      "onUpdate:modelValue": t[1] || (t[1] = (T) => e.dataDispaly[e.fieldName] = T),
      mode: "mini",
      readonly: !0,
      "user-state": e.userState
    }, null, 8, ["modelValue", "user-state"])) : b("", !0)
  ], 64)) : e.schema.component === "rate-input" && !e.rawValue ? (n(), v(L, { key: 6 }, [
    e.dataDispaly[e.fieldName] ? (n(), h(w, ae({
      key: 0,
      modelValue: e.dataDispaly[e.fieldName],
      "onUpdate:modelValue": t[2] || (t[2] = (T) => e.dataDispaly[e.fieldName] = T),
      disabled: ""
    }, e.schema.inputOptions ? e.schema.inputOptions : {}), null, 16, ["modelValue"])) : b("", !0)
  ], 64)) : (n(), v(L, { key: 7 }, [
    e.rawValue ? (n(), v(L, { key: 1 }, [
      I(A(e.getValue(e.sdformModel.form_db.schema, e.rawData, e.fieldPath, e.sdformModel)), 1)
    ], 64)) : (n(), h(C, {
      key: 0,
      style: le(e.schema.component == "color-input" ? `color:${e.dataDispaly[e.fieldName]}` : ""),
      type: e.fieldSetting.textType ? e.fieldSetting.textType : e.schema.textType ? e.schema.textType : "",
      truncated: !e.fieldSetting.wrapText || !e.getschemaValue(e.sdformModel.form_db.schema, "wrapText", e.fieldName, void 0),
      "line-clamp": e.fieldSetting.wrapText || e.getschemaValue(e.sdformModel.form_db.schema, "wrapText", e.fieldName, void 0)
    }, {
      default: r(() => [
        I(A(e.getValue(e.sdformModel.form_db.schema, e.rawData, e.fieldPath, e.sdformModel)), 1)
      ]),
      _: 1
    }, 8, ["style", "type", "truncated", "line-clamp"]))
  ], 64));
}
const ha = /* @__PURE__ */ U(qm, [["render", Wm], ["__scopeId", "data-v-6f6b7a15"]]), xm = O({
  name: "SdUiListView",
  components: {
    // SdCrudPopupGrid,
    // SdValueWidget,
  },
  props: {
    formId: {
      type: String,
      required: !0
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    dataProvider: {
      type: Object,
      default: null
    },
    parentId: {
      type: String,
      default: ""
    },
    initData: {
      type: Object,
      default: {}
    },
    params: {
      type: Object,
      default: {}
    },
    listType: {
      type: String,
      default: "listview"
    },
    noMoreLabel: {
      type: String,
      default: "No more"
    },
    searchPlaceholder: {
      type: String,
      default: "Search..."
    },
    disableNoMore: {
      type: Boolean,
      default: !1
    },
    scrollDistance: {
      type: Number,
      default: 0
    },
    column: {
      type: Number,
      default: 4
    },
    detailMaxRow: {
      type: Number,
      default: 3
    },
    iconWigth: {
      type: Number,
      default: 48
    },
    iconField: {
      type: String,
      default: ""
    },
    titleContent: {
      type: String,
      default: ""
    },
    titleField: {
      type: String,
      default: ""
    },
    detailContent: {
      type: String,
      default: ""
    },
    statusContent: {
      type: String,
      default: ""
    },
    statusField: {
      type: String,
      default: ""
    },
    colorField: {
      type: String,
      default: ""
    },
    groupField: {
      type: String,
      default: ""
    },
    searchFields: {
      type: Array,
      default: void 0
    },
    formModel: {
      type: Object,
      default: {}
    },
    limitRow: {
      type: Number,
      default: 30
    },
    addBtnEnable: {
      type: Boolean,
      default: !0
    },
    updateBtnEnable: {
      type: Boolean,
      default: !0
    },
    delBtnEnable: {
      type: Boolean,
      default: !0
    },
    viewBtnEnable: {
      type: Boolean,
      default: !1
    },
    reloadBtnEnable: {
      type: Boolean,
      default: !0
    },
    totalEnable: {
      type: Boolean,
      default: !0
    },
    actionEnable: {
      type: Boolean,
      default: !0
    },
    titleEnable: {
      type: Boolean,
      default: !0
    },
    iconName: {
      type: String,
      default: ""
    },
    titleName: {
      type: String,
      default: ""
    },
    subformWidth: {
      type: Number,
      default: 600
    },
    height: {
      type: String,
      default: "100%"
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    parentPath: {
      type: String,
      default: ""
    },
    enableWs: {
      type: Boolean,
      default: !0
    },
    // โหมด ws แบบ refresh: ได้ message แล้ว query ใหม่จากหน้า 1 (debounce) แทน patch ราย row
    // — patch ไม่กรอง where / ไม่ re-sort → เพี้ยนกับจอคิวที่ filter ตาม status
    wsRefresh: {
      type: Boolean,
      default: !1
    },
    userState: {
      type: Object,
      required: !0
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    insertBefore: {
      type: Function
    },
    updateBefore: {
      type: Function
    },
    viewBefore: {
      type: Function
    },
    beforeSave: {
      type: Function
    },
    afterDelete: {
      type: Function
    },
    allowDeleteFunc: {
      type: Function
    },
    clickEvent: {
      type: Function
    },
    selectEvent: {
      type: Function
    },
    unselectEvent: {
      type: Function
    },
    customValue: {
      type: Array,
      default: void 0
    }
  },
  data() {
    return {
      keyId: "_id",
      rowKey: "dataid",
      inputType: ["picture-upload-input", "crop-upload-input"],
      rawData: [],
      total: 0,
      totalPage: 0,
      offset: 0,
      defaultParams: {},
      searchText: "",
      noMore: !1,
      preLoading: !1,
      showPopupFlag: !1,
      backdrop: !1,
      apiUrl: "",
      sdformModel: this.formModel,
      formData: {},
      formReadOnly: !1,
      optionData: {},
      isInsert: !0,
      selectIndex: 0,
      // key ของ row ที่ผู้ใช้คลิก select อยู่ (ใช้ทำ highlight) — null = ไม่มีการ select
      selectedKey: null,
      afterDeleteForm: void 0,
      titleNameForm: "",
      iconForm: "",
      allowInsert: !1,
      page: 1,
      limit: this.limitRow,
      optionProvider: { limit: this.limitRow, page: 1 },
      useUserState: this.$props.userState,
      dpFormData: { providerId: this.formId, providerType: this.providerType },
      wsConn: void 0,
      wsRefreshTimer: null,
      widgetId: "SdUiListView-" + Ut(),
      sdFunc: {},
      isFormEnable: this.providerType === "FORM",
      groupItems: [],
      groupValue: {},
      loadEnable: !1,
      defaultImg: this.userState.host?.replace("api", "") + "assets/image/noimg.png",
      defaultParentId: this.parentId,
      defaultWhere: this.dataProvider && this.dataProvider.options && this.dataProvider.options.where ? this.dataProvider.options.where : ""
    };
  },
  watch: {
    params: {
      deep: !0,
      handler(e) {
        e && (e.xparentx && e._id ? delete e.xparentx : this.parentPath ? e[this.parentPath] && (e.xparentx = e[this.parentPath], this.changeParentId(e[this.parentPath])) : delete e.xparentx, this.defaultParams = { ...this.defaultParams, ...e });
      }
    },
    parentId: {
      deep: !0,
      handler(e) {
        this.changeParentId(e);
      }
    }
  },
  computed: {
    colSpan() {
      return () => 24 / this.column;
    },
    htmlValue() {
      return (e, t) => {
        let a = {}, l = this.sdformModel.form_db.schema;
        for (const o in l) {
          let i = pe(t, o);
          a[`{{${o}}}`] = Ee(i, o, this.sdformModel);
        }
        if (this.customValue) {
          for (const o in this.customValue)
            if (this.customValue[o]) {
              let i = this.customValue[o];
              if (i.expressions)
                try {
                  const u = `return ${ue(i.expressions, a)}`, m = new Function("row", ..._e, u);
                  a[`{{${i.fieldName}}}`] = m.call(this.sdformModel, t);
                } catch (s) {
                  a[`{{${i.fieldName}}}`] = s;
                }
              else
                a[`{{${i.fieldName}}}`] = "";
            }
        }
        return Rt(ue(e, a));
      };
    },
    getParentFormId() {
      return this.sdformModel && this.sdformModel.joiner_field && this.sdformModel.joiner_field.joiner_enable && this.sdformModel.joiner_field.form_id ? this.sdformModel.joiner_field.form_id.value : null;
    },
    backdropForm() {
      return !!this.sdformModel.form_options?.backdrop;
    }
  },
  async created() {
    this.apiUrl = "";
  },
  setup(e, t) {
    const a = q();
    return {
      subFormOpen: R("subFormOpen", void 0),
      formRef: a
    };
  },
  unmounted() {
    this.wsConn?.wsDisconnect(), this.wsRefreshTimer && (clearTimeout(this.wsRefreshTimer), this.wsRefreshTimer = null);
  },
  async mounted() {
    if (!this.buildState)
      if (this.providerType === "SQL" || this.providerType === "SYS")
        this.initSQL(), this.loadEnable = !0;
      else if (this.userState.formStore[this.formId])
        this.initForm(this.userState.formStore[this.formId]), this.loadEnable = !0;
      else if (this.useUserState.user) {
        const e = await $e(this.formId, this.useUserState);
        e.response && e.data ? (this.initForm(e.data), this.loadEnable = !0) : B.warning(e.message);
      } else
        B.warning("Unauthorized");
    this.sdFunc = {
      subFormOpen: this.subFormOpen,
      handleCancel: this.handleCancel,
      handleUpdate: this.handleUpdate,
      handleAdd: this.handleAdd,
      handleView: this.handleView,
      userState: this.userState,
      params: this.params,
      ElMessage: B,
      sdformModel: this.sdformModel,
      wsConn: this.wsConn
    };
  },
  methods: {
    changeParentId(e) {
      this.defaultParentId = e, this.defaultParams.xparentx = this.defaultParentId, this.params.xparentx = this.defaultParentId, this.dpFormData.params.xparentx = this.defaultParentId, this.dpFormData.options || (this.dpFormData.options = {});
      let t = !1;
      e ? (t = !0, this.defaultWhere ? this.dpFormData.options.where = this.defaultWhere + " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')") : (this.defaultWhere !== this.dpFormData.options.where && (t = !0), this.dpFormData.options.where = this.defaultWhere), t && this.handleRefresh();
    },
    initSQL() {
      this.fixApiUrl && this.fixApiUrl != "" && (this.apiUrl = this.fixApiUrl), this.titleName && (this.titleNameForm = this.titleName), this.dataProvider ? this.dpFormData = P(this.dataProvider) : this.dpFormData = { providerId: this.formId, providerType: this.providerType }, this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.searchFields && (this.dpFormData.options.search = this.searchFields);
      const e = P(this.dpFormData.params), t = P(this.params);
      this.defaultParams = { ...t, ...e }, this.dpFormData.params = P(this.defaultParams), this.noMore || this.getDataList();
    },
    initForm(e) {
      this.searchText = "", this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Oe(this.sdformModel, this.userState.user)), this.sdformModel.form_event.after_delete && this.sdformModel.form_event.enable && (this.afterDeleteForm = new Function("formData", ..._e, this.sdformModel.form_event.after_delete)), this.iconName || (this.iconForm = "", this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = ""), this.titleName ? this.titleNameForm = this.titleName : this.titleNameForm = this.sdformModel.form_name ? `${this.sdformModel.form_name}` : "", this.dataProvider ? this.dpFormData = P(this.dataProvider) : (this.dpFormData.providerId = this.formId, this.dpFormData.providerType = fe.FORM), this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.parentId != "" && (this.params.xparentx = this.parentId, this.dpFormData.options && this.dpFormData.options.where ? this.dpFormData.options.where += " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')"), this.searchFields ? this.dpFormData.options.search = this.searchFields : this.dpFormData.options.search = this.sdformModel.form_options.search_fields ? this.sdformModel.form_options.search_fields : [];
      const t = P(this.dpFormData.params), a = P(this.params);
      this.defaultParams = { ...a, ...t }, this.dpFormData.params = P(this.defaultParams), this.dpFormData.options.orderBy || (this.dpFormData.options.orderBy = [{ column: "created_at", sort: ge.DESC }]), this.noMore || this.getDataList(), this.enableWs && this.sdformModel.form_options && this.sdformModel.form_options.enable_websocket && (this.wsConn = this.userState.connectWebSocket("gridform", this.sdformModel.dataid, this.widgetId, (l) => {
        if (l.from != "server" && (l.from != this.userState.user?.username || l.params && l.params.widget && l.params.widget !== this.widgetId)) {
          if (this.wsRefresh) {
            this.wsRefreshReload();
            return;
          }
          let o = -1;
          const i = P(l.data);
          l.params && P(l.params), o = this.keyIdIndex(i._id), l.method == "insert" ? qa(this.sdformModel, i, this.useUserState.user) && (this.total = this.total + 1, this.totalPage = this.totalPage + 1, this.rawData.push(i)) : l.method == "update" ? o >= 0 && (this.rawData[o] = i) : l.method == "delete" && o >= 0 && (this.rawData.splice(o, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1);
        }
      }));
    },
    keyIdIndex(e) {
      let t = this.keyId;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    rowKeyIndex(e) {
      let t = this.rowKey;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    allowUpdate(e, t, a) {
      return Je(e, t, a);
    },
    allowDelete(e, t, a) {
      return vl(e, t, a);
    },
    afterSave(e, t, a = null) {
      t || (this.showPopupFlag = !1, this.handlePopUpForm()), a && (this.isInsert = !1), this.selectIndex = this.keyIdIndex(e[this.keyId]);
      const l = this.isInsert;
      if (e)
        if (this.isInsert) {
          let o = P(e);
          this.rawData = [o].concat(this.rawData), this.isInsert = !1, this.selectIndex = -1, this.total = this.total + 1, this.totalPage = this.totalPage + 1, this.wsConn?.wsSend({ data: o, method: "insert", keyid: this.keyId, params: { widget: this.widgetId } });
        } else
          this.selectIndex != -1 && (this.rawData[this.selectIndex] = P(e)), this.wsConn?.wsSend({ data: e, method: "update", keyid: this.keyId, params: { widget: this.widgetId } });
      this.$emit("aftersave", l, e, this.rawData, this.selectIndex);
    },
    async getDataList(e) {
      this.preLoading = !0;
      const t = this.total === 0, a = await at(this.dpFormData, t, this.useUserState);
      if (a.response) {
        if (a.data && a.data.data) {
          const l = P(a.data.data);
          if (this.optionProvider.page === 1 ? this.rawData = l : this.rawData.push(...l), this.groupField)
            for (const o in l) {
              const i = l[o], s = this.getValue(i, this.groupField);
              this.groupItems.includes(s) || (this.groupItems.push(s), this.groupValue[i._id] = s);
            }
          this.offset = a.data.offset, this.totalPage = l.length, this.totalPage > 0 ? this.offset + 1 : this.offset, t && (this.total = a.data.total), this.totalPage > 0 ? this.totalPage === this.limit ? (this.page++, this.dpFormData.options && (this.dpFormData.options.page = this.page)) : this.noMore = !0 : this.noMore = !0, e && e(this.rawData);
        }
        this.preLoading = !1;
      } else
        B.warning(a.message), this.preLoading = !1;
    },
    async nextLoad2() {
      this.buildState || this.getDataList();
    },
    async nextLoad(e) {
      this.buildState || e === "bottom" && !this.noMore && this.getDataList();
    },
    handleRefresh() {
      this.optionProvider.page = 1, this.optionProvider.fileter = null, this.dpFormData.params = this.defaultParams, this.searchText = "", this.total = 0, this.page = 1, this.noMore = !1, this.dpFormData.params.q && delete this.dpFormData.params.q, this.getDataList();
    },
    async refreshData() {
      this.noMore = !1, await this.getDataList();
    },
    // wsRefresh mode: query ใหม่จากหน้า 1 โดยคง search/filter เดิม — debounce รวม message ที่มาติดกันเป็นรอบเดียว
    wsRefreshReload() {
      this.wsRefreshTimer && clearTimeout(this.wsRefreshTimer), this.wsRefreshTimer = setTimeout(() => {
        this.wsRefreshTimer = null, this.optionProvider.page = 1, this.page = 1, this.total = 0, this.noMore = !1, this.getDataList();
      }, 400);
    },
    handleSearch() {
      this.optionProvider.page = 1, this.page = 1, this.searchText != "" ? this.dpFormData.params.q = `%${this.searchText}%` : delete this.dpFormData.params.q, this.noMore = !1, this.total = 0, this.getDataList();
    },
    async handleCancel() {
      this.showPopupFlag = !1, this.handlePopUpForm();
    },
    handlePopUpForm() {
      this.subFormOpen && this.subFormOpen({
        modelValue: this.showPopupFlag,
        initData: this.formData,
        backdrop: this.backdrop,
        readonly: this.formReadOnly,
        formId: this.formId,
        parentId: this.defaultParentId,
        params: this.params,
        beforeSaveCallback: this.beforeSave,
        cancelCallback: this.handleCancel,
        afterSaveCallback: this.afterSave
      });
    },
    handleAdd() {
      this.formData = { ...this.initData }, this.isInsert = !0, this.selectIndex = -1, this.backdrop = this.backdropForm, this.formReadOnly = !1, this.showPopupFlag = !0, this.handlePopUpForm(), this.insertBefore && this.insertBefore(null, 0);
    },
    handleUpdate(e, t) {
      this.isInsert = !1, this.selectIndex = t, this.showPopupFlag = !0, this.backdrop = this.backdropForm, this.formData = e, this.formReadOnly = !1, this.handlePopUpForm(), this.updateBefore && this.updateBefore(e, this.selectIndex);
    },
    handleView(e, t) {
      this.isInsert = !1, this.selectIndex = t, this.showPopupFlag = !0, this.backdrop = !0, this.formData = e, this.formReadOnly = !0, this.handlePopUpForm(), this.viewBefore && this.viewBefore(e, this.selectIndex);
    },
    handleClick(e, t) {
      this.isInsert = !1, this.selectIndex = t;
      const a = e[this.keyId];
      a != null && this.selectedKey === a ? (this.selectedKey = null, this.unselectEvent && this.unselectEvent(e, t)) : (this.selectedKey = a, this.selectEvent && this.selectEvent(e, t)), this.clickEvent && this.clickEvent(e, t);
    },
    isSelected(e) {
      return this.selectedKey != null && e[this.keyId] === this.selectedKey;
    },
    handleDelete(e, t) {
      const a = e[this.keyId];
      this.selectIndex = t;
      let l = !0;
      this.allowDeleteFunc && (l = this.allowDeleteFunc(e, t)), l && ye.confirm("Are you sure you want to remove this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (await Ha(this.sdformModel.dataid, a, this.useUserState)) {
          if (this.wsConn?.wsSend({ data: e, method: "delete", keyid: this.keyId, params: { widget: this.widgetId } }), this.rawData.splice(this.selectIndex, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1, e[this.keyId] != null && this.selectedKey === e[this.keyId] && (this.selectedKey = null), this.afterDelete && this.afterDelete(e, this.selectIndex), this.sdformModel.form_event.enable && this.afterDeleteForm)
            try {
              this.afterDeleteForm.call(this.sdFunc, e);
            } catch (i) {
              B.error(i.message);
            }
          B.success("Delete completed.");
        } else
          B.warning("Unable to remove data");
      }).catch((o) => {
        console.log(o);
      });
    },
    getValue(e, t) {
      let a = pe(e, t);
      return a ? Ee(a, t, this.sdformModel) : "";
    },
    getSchema(e) {
      return this.providerType === "FORM" ? this.sdformModel.form_db.schema[e] : this.sdformModel.form_db && this.sdformModel.form_db.schema ? this.sdformModel.form_db.schema[e] : {};
    },
    getImage(e, t) {
      if (!t)
        return;
      let a = this.getSchema(t);
      if (a && a.component)
        return this.inputType.includes(a.component) && e[t] && Object.keys(e[t]).length > 0 && e[t][0] ? e[t][0].url ? e[t][0].url : e[t][0] : void 0;
    },
    getDatetime(e) {
      return e ? we(e).format("DD/MM/YYYY HH:mm") : "";
    },
    totalLabel() {
      return this.total.toLocaleString();
    },
    convertHexToRgba(e, t = 1) {
      return Ua(e, t);
    }
    // groupCheck(rawData: any) {
    // 	const gvalue = this.getValue(rawData, this.groupField);
    // 	if (this.groupItems.includes(gvalue)) {
    // 		return false;
    // 	} else {
    // 		this.groupItems.push(gvalue);
    // 		return true;
    // 	}
    // },
  }
}), Km = {
  key: 0,
  class: "list-box"
}, Gm = { class: "list-title" }, Ym = {
  key: 0,
  class: "text-5"
}, Jm = {
  key: 3,
  style: { "font-size": "12px", "font-weight": "300" }
}, Xm = {
  key: 0,
  class: "list-search"
}, Qm = {
  key: 1,
  class: "list-view"
}, Zm = {
  key: 0,
  class: "list-group"
}, eh = ["onClick"], th = {
  key: 0,
  class: "list-icon"
}, ah = { class: "list-body" }, lh = { class: "body-title" }, oh = ["innerHTML"], ih = { class: "body-content" }, nh = ["innerHTML"], sh = ["innerHTML"], rh = {
  key: 3,
  class: "list-actions"
}, dh = {
  key: 0,
  class: "list-group",
  style: { "text-align": "center" }
}, uh = {
  key: 1,
  class: "timeline-box",
  style: { width: "100%", height: "100%" }
}, ph = { class: "list-title" }, mh = {
  key: 0,
  class: "text-5"
}, hh = {
  key: 3,
  style: { "font-size": "12px", "font-weight": "300" }
}, fh = { class: "timeline-title" }, ch = ["innerHTML"], bh = { class: "timeline-content" }, gh = ["innerHTML"], yh = {
  key: 2,
  class: "thumbnail-box",
  style: { width: "100%", height: "100%" }
}, vh = { class: "list-title" }, wh = {
  key: 0,
  class: "text-5"
}, Sh = {
  key: 3,
  style: { "font-size": "12px", "font-weight": "300" }
}, Fh = {
  key: 0,
  class: "list-search"
}, _h = { key: 1 }, kh = ["onClick"], Ch = ["innerHTML"], Dh = {
  key: 3,
  class: "thumbnail-box",
  style: { width: "100%", height: "100%" }
}, Ih = { class: "list-title" }, $h = {
  key: 0,
  class: "text-5"
}, Th = {
  key: 3,
  style: { "font-size": "12px", "font-weight": "300" }
}, Ph = {
  key: 0,
  class: "list-search"
}, Mh = { key: 1 }, Vh = { class: "el-image__error" }, Eh = ["innerHTML"], Ah = ["innerHTML"], Lh = ["innerHTML"], Bh = {
  key: 3,
  class: "thumbnail-actions"
};
function Oh(e, t, a, l, o, i) {
  const s = Ze, u = ve, m = X("Loading"), f = qe, c = ie, F = X("search"), D = Te, g = ul, C = ha, _ = We, p = Do, y = Ni, S = dt, N = X("Picture"), w = Vt, T = pl;
  return n(), v(L, null, [
    e.listType === "listview" ? (n(), v("div", Km, [
      $("div", Gm, [
        e.titleEnable ? (n(), v("span", Ym, [
          e.iconForm != "" ? (n(), h(s, {
            key: 0,
            "svg-data": e.iconForm
          }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h(u, {
            key: 1,
            "icon-name": e.iconName
          }, null, 8, ["icon-name"])) : (n(), h(u, {
            key: 2,
            "icon-name": "icon-sdform"
          })),
          I(" " + A(e.titleNameForm) + " ", 1),
          e.totalEnable ? (n(), v("span", Jm, " ( " + A(e.totalLabel()) + " )", 1)) : b("", !0)
        ])) : b("", !0),
        e.preLoading ? (n(), h(f, {
          key: 1,
          class: "is-loading ml-1"
        }, {
          default: r(() => [
            d(m)
          ]),
          _: 1
        })) : b("", !0)
      ]),
      e.searchFields ? (n(), v("div", Xm, [
        d(D, {
          modelValue: e.searchText,
          "onUpdate:modelValue": t[0] || (t[0] = (V) => e.searchText = V),
          placeholder: e.searchPlaceholder,
          clearable: "",
          onChange: e.handleSearch,
          class: "input-search"
        }, Ye({
          prefix: r(() => [
            d(f, { class: "el-input__icon" }, {
              default: r(() => [
                d(F)
              ]),
              _: 1
            })
          ]),
          append: r(() => [
            d(c, {
              icon: "Refresh",
              onClick: e.handleRefresh
            }, null, 8, ["onClick"])
          ]),
          _: 2
        }, [
          e.addBtnEnable && e.allowInsert ? {
            name: "prepend",
            fn: r(() => [
              d(c, {
                type: "success",
                plain: "",
                icon: "Plus",
                onClick: e.handleAdd
              }, null, 8, ["onClick"])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["modelValue", "placeholder", "onChange"])
      ])) : b("", !0),
      e.loadEnable ? (n(), v("ul", Qm, [
        d(p, {
          onEndReached: e.nextLoad,
          distance: e.scrollDistance ? e.scrollDistance : void 0,
          style: le(`overflow: auto; min-height: 100px; height: ${e.height}`)
        }, {
          default: r(() => [
            (n(!0), v(L, null, J(e.rawData, (V, E) => (n(), v(L, {
              key: V._id
            }, [
              e.groupField && e.groupValue[V._id] ? (n(), v("li", Zm, A(e.groupValue[V._id]), 1)) : b("", !0),
              $("li", {
                class: Y(["list-item", { "is-selected": e.isSelected(V) }]),
                onClick: (W) => e.handleClick(V, E)
              }, [
                e.iconField ? (n(), v("span", th, [
                  d(g, {
                    shape: "square",
                    fit: "cover",
                    style: le(`width: ${e.iconWigth}px; height: ${e.iconWigth}px; background-color: transparent;`),
                    icon: "Picture",
                    src: e.getImage(V, e.iconField)
                  }, null, 8, ["style", "src"])
                ])) : b("", !0),
                $("span", ah, [
                  $("div", lh, [
                    d(_, { truncated: "" }, {
                      default: r(() => [
                        e.titleField ? (n(), h(C, {
                          key: 0,
                          "sdform-model": e.sdformModel,
                          "field-name": e.titleField,
                          "field-setting": e.getSchema(e.titleField),
                          "subform-width": e.subformWidth,
                          "raw-data": V,
                          "user-state": e.userState
                        }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"])) : (n(), v("span", {
                          key: 1,
                          innerHTML: e.htmlValue(e.titleContent, V)
                        }, null, 8, oh))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  $("div", ih, [
                    e.detailContent ? (n(), v("span", {
                      key: 0,
                      innerHTML: e.htmlValue(e.detailContent, V)
                    }, null, 8, nh)) : b("", !0)
                  ])
                ]),
                e.statusField ? (n(), v("span", {
                  key: 1,
                  class: "list-status hide-on-actions",
                  style: le({ color: e.colorField && V[e.colorField] ? V[e.colorField] : void 0 })
                }, [
                  d(C, {
                    "sdform-model": e.sdformModel,
                    "field-name": e.statusField,
                    "field-setting": e.getSchema(e.statusField),
                    "subform-width": e.subformWidth,
                    "raw-data": V,
                    "user-state": e.userState
                  }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"])
                ], 4)) : b("", !0),
                e.statusContent ? (n(), v("span", {
                  key: 2,
                  class: "list-status hide-on-actions",
                  style: le({ color: e.colorField && V[e.colorField] ? V[e.colorField] : void 0 }),
                  innerHTML: e.htmlValue(e.statusContent, V)
                }, null, 12, sh)) : b("", !0),
                e.actionEnable ? (n(), v("span", rh, [
                  re(e.$slots, "actionBtnRow", {
                    row: V,
                    index: E
                  }, void 0, !0),
                  V[e.keyId] && e.isFormEnable && e.viewBtnEnable ? (n(), h(c, {
                    key: 0,
                    plain: "",
                    circle: "",
                    type: "info",
                    icon: "View",
                    size: "small",
                    title: "View",
                    onClick: j((W) => e.handleView(V, E), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0),
                  V[e.keyId] && e.isFormEnable && e.updateBtnEnable && e.allowUpdate(e.sdformModel, V, e.useUserState.user) ? (n(), h(c, {
                    key: 1,
                    plain: "",
                    circle: "",
                    type: "primary",
                    icon: "Edit",
                    size: "small",
                    title: "Edit",
                    onClick: j((W) => e.handleUpdate(V, E), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0),
                  V[e.keyId] && e.isFormEnable && e.delBtnEnable && e.allowDelete(e.sdformModel, V, e.useUserState.user) ? (n(), h(c, {
                    key: 2,
                    plain: "",
                    circle: "",
                    type: "danger",
                    icon: "Delete",
                    size: "small",
                    title: "Delete",
                    onClick: j((W) => e.handleDelete(V, E), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0)
                ])) : b("", !0)
              ], 10, eh)
            ], 64))), 128)),
            e.noMore && !e.disableNoMore ? (n(), v("li", dh, A(e.noMoreLabel), 1)) : b("", !0)
          ]),
          _: 3
        }, 8, ["onEndReached", "distance", "style"])
      ])) : b("", !0)
    ])) : b("", !0),
    e.listType === "timeline" ? (n(), v("div", uh, [
      $("div", ph, [
        e.titleEnable ? (n(), v("span", mh, [
          e.iconForm != "" ? (n(), h(s, {
            key: 0,
            "svg-data": e.iconForm
          }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h(u, {
            key: 1,
            "icon-name": e.iconName
          }, null, 8, ["icon-name"])) : (n(), h(u, {
            key: 2,
            "icon-name": "icon-sdform"
          })),
          I(" " + A(e.titleNameForm) + " ", 1),
          e.totalEnable ? (n(), v("span", hh, " ( " + A(e.totalLabel()) + " )", 1)) : b("", !0)
        ])) : b("", !0),
        e.preLoading ? (n(), h(f, {
          key: 1,
          class: "is-loading ml-1"
        }, {
          default: r(() => [
            d(m)
          ]),
          _: 1
        })) : b("", !0)
      ]),
      e.loadEnable ? (n(), h(p, {
        key: 0,
        tag: "el-timeline",
        onEndReached: e.nextLoad,
        distance: e.scrollDistance ? e.scrollDistance : void 0,
        style: le(`overflow: auto; min-height: 100px; height: ${e.height}`)
      }, {
        default: r(() => [
          (n(!0), v(L, null, J(e.rawData, (V, E) => (n(), h(y, {
            key: V._id,
            timestamp: V.created_at ? e.getDatetime(V.created_at) : void 0,
            placement: "top",
            color: e.colorField && V[e.colorField] ? V[e.colorField] : void 0
          }, {
            default: r(() => [
              $("div", fh, [
                d(_, { truncated: "" }, {
                  default: r(() => [
                    e.titleField ? (n(), h(C, {
                      key: 0,
                      "sdform-model": e.sdformModel,
                      "field-name": e.titleField,
                      "field-setting": e.getSchema(e.titleField),
                      "subform-width": e.subformWidth,
                      "raw-data": V,
                      "user-state": e.userState
                    }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"])) : (n(), v("span", {
                      key: 1,
                      innerHTML: e.htmlValue(e.titleContent, V)
                    }, null, 8, ch))
                  ]),
                  _: 2
                }, 1024)
              ]),
              $("div", bh, [
                e.detailContent ? (n(), v("span", {
                  key: 0,
                  innerHTML: e.htmlValue(e.detailContent, V)
                }, null, 8, gh)) : b("", !0)
              ])
            ]),
            _: 2
          }, 1032, ["timestamp", "color"]))), 128))
        ]),
        _: 1
      }, 8, ["onEndReached", "distance", "style"])) : b("", !0)
    ])) : b("", !0),
    e.listType === "listicon" ? (n(), v("div", yh, [
      $("div", vh, [
        e.titleEnable ? (n(), v("span", wh, [
          e.iconForm != "" ? (n(), h(s, {
            key: 0,
            "svg-data": e.iconForm
          }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h(u, {
            key: 1,
            "icon-name": e.iconName
          }, null, 8, ["icon-name"])) : (n(), h(u, {
            key: 2,
            "icon-name": "icon-sdform"
          })),
          I(" " + A(e.titleNameForm) + " ", 1),
          e.totalEnable ? (n(), v("span", Sh, " ( " + A(e.totalLabel()) + " )", 1)) : b("", !0)
        ])) : b("", !0),
        e.preLoading ? (n(), h(f, {
          key: 1,
          class: "is-loading ml-1"
        }, {
          default: r(() => [
            d(m)
          ]),
          _: 1
        })) : b("", !0)
      ]),
      e.searchFields ? (n(), v("div", Fh, [
        d(D, {
          modelValue: e.searchText,
          "onUpdate:modelValue": t[1] || (t[1] = (V) => e.searchText = V),
          placeholder: e.searchPlaceholder,
          clearable: "",
          onChange: e.handleSearch,
          class: "input-search"
        }, {
          prefix: r(() => [
            d(f, { class: "el-input__icon" }, {
              default: r(() => [
                d(F)
              ]),
              _: 1
            })
          ]),
          append: r(() => [
            d(c, {
              icon: "Refresh",
              onClick: e.handleRefresh
            }, null, 8, ["onClick"])
          ]),
          _: 1
        }, 8, ["modelValue", "placeholder", "onChange"])
      ])) : (n(), v("br", _h)),
      e.loadEnable ? (n(), h(p, {
        key: 2,
        tag: "el-row",
        gutter: 15,
        onEndReached: e.nextLoad,
        distance: e.scrollDistance ? e.scrollDistance : void 0,
        style: le(`overflow: auto; min-height: 50px; height: ${e.height}`)
      }, {
        default: r(() => [
          (n(!0), v(L, null, J(e.rawData, (V, E) => (n(), h(S, {
            key: V._id,
            xs: 12,
            sm: 6,
            md: 6,
            lg: e.colSpan(),
            xl: e.colSpan(),
            style: { display: "flex", "justify-content": "center" }
          }, {
            default: r(() => [
              $("div", {
                class: Y(["listicon-item", { "is-selected": e.isSelected(V) }]),
                style: { "margin-bottom": "15px", "text-align": "center", cursor: "pointer" },
                onClick: (W) => e.handleClick(V, E)
              }, [
                d(g, {
                  shape: "square",
                  fit: "cover",
                  style: le(`margin-bottom: 2px; width: ${e.iconWigth}px; height: ${e.iconWigth}px; background-color: transparent;`),
                  icon: "Picture",
                  src: e.getImage(V, e.iconField)
                }, null, 8, ["style", "src"]),
                $("div", {
                  style: le(`text-align: center; max-width: ${e.iconWigth + 40}px;`)
                }, [
                  d(_, {
                    class: "body-title",
                    truncated: ""
                  }, {
                    default: r(() => [
                      e.titleField ? (n(), h(C, {
                        key: 0,
                        "sdform-model": e.sdformModel,
                        "field-name": e.titleField,
                        "field-setting": e.getSchema(e.titleField),
                        "subform-width": e.subformWidth,
                        "raw-data": V,
                        "user-state": e.userState
                      }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"])) : (n(), v("span", {
                        key: 1,
                        innerHTML: e.htmlValue(e.titleContent, V)
                      }, null, 8, Ch))
                    ]),
                    _: 2
                  }, 1024)
                ], 4)
              ], 10, kh)
            ]),
            _: 2
          }, 1032, ["lg", "xl"]))), 128))
        ]),
        _: 1
      }, 8, ["onEndReached", "distance", "style"])) : b("", !0)
    ])) : b("", !0),
    e.listType === "thumbnail" ? (n(), v("div", Dh, [
      $("div", Ih, [
        e.titleEnable ? (n(), v("span", $h, [
          e.iconForm != "" ? (n(), h(s, {
            key: 0,
            "svg-data": e.iconForm
          }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h(u, {
            key: 1,
            "icon-name": e.iconName
          }, null, 8, ["icon-name"])) : (n(), h(u, {
            key: 2,
            "icon-name": "icon-sdform"
          })),
          I(" " + A(e.titleNameForm) + " ", 1),
          e.totalEnable ? (n(), v("span", Th, " ( " + A(e.totalLabel()) + " )", 1)) : b("", !0)
        ])) : b("", !0),
        e.preLoading ? (n(), h(f, {
          key: 1,
          class: "is-loading ml-1"
        }, {
          default: r(() => [
            d(m)
          ]),
          _: 1
        })) : b("", !0)
      ]),
      e.searchFields ? (n(), v("div", Ph, [
        d(D, {
          modelValue: e.searchText,
          "onUpdate:modelValue": t[2] || (t[2] = (V) => e.searchText = V),
          placeholder: e.searchPlaceholder,
          clearable: "",
          onChange: e.handleSearch,
          class: "input-search"
        }, Ye({
          prefix: r(() => [
            d(f, { class: "el-input__icon" }, {
              default: r(() => [
                d(F)
              ]),
              _: 1
            })
          ]),
          append: r(() => [
            d(c, {
              icon: "Refresh",
              onClick: e.handleRefresh
            }, null, 8, ["onClick"])
          ]),
          _: 2
        }, [
          e.addBtnEnable && e.allowInsert ? {
            name: "prepend",
            fn: r(() => [
              d(c, {
                type: "success",
                plain: "",
                icon: "Plus",
                onClick: e.handleAdd
              }, null, 8, ["onClick"])
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["modelValue", "placeholder", "onChange"])
      ])) : (n(), v("br", Mh)),
      e.loadEnable ? (n(), h(p, {
        key: 2,
        tag: "el-row",
        gutter: 15,
        onEndReached: e.nextLoad,
        distance: e.scrollDistance ? e.scrollDistance : void 0,
        style: le(`overflow: auto; min-height: 50px; height: ${e.height}`)
      }, {
        default: r(() => [
          (n(!0), v(L, null, J(e.rawData, (V, E) => (n(), h(S, {
            key: V._id,
            xs: 24,
            sm: 12,
            md: 6,
            lg: e.colSpan(),
            xl: e.colSpan(),
            style: { display: "flex", "justify-content": "center" }
          }, {
            default: r(() => [
              d(T, {
                shadow: "never",
                class: Y(["thumbnail-item", { "is-selected": e.isSelected(V) }]),
                style: le(`margin-bottom: 15px; cursor: pointer; width: 100%; max-width: ${e.iconWigth}px;
						${e.colorField && V[e.colorField] ? `border-color: ${e.convertHexToRgba(V[e.colorField], 1)};` : ""}
						${e.colorField && V[e.colorField] ? `background-color: ${e.convertHexToRgba(V[e.colorField], 0.1)};` : ""}
						position: relative;`),
                onClick: (W) => e.handleClick(V, E)
              }, {
                default: r(() => [
                  e.iconField ? (n(), h(w, {
                    key: 0,
                    style: le(`width: 100%; height: ${e.iconWigth - 20}px;`),
                    src: e.getImage(V, e.iconField),
                    fit: "cover"
                  }, {
                    error: r(() => [
                      $("div", Vh, [
                        d(f, { style: { "font-size": "50px" } }, {
                          default: r(() => [
                            d(N)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }, 8, ["style", "src"])) : b("", !0),
                  $("div", null, [
                    d(_, {
                      class: "body-title",
                      truncated: ""
                    }, {
                      default: r(() => [
                        e.titleField ? (n(), h(C, {
                          key: 0,
                          "sdform-model": e.sdformModel,
                          "field-name": e.titleField,
                          "field-setting": e.getSchema(e.titleField),
                          "subform-width": e.subformWidth,
                          "raw-data": V,
                          "user-state": e.userState
                        }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"])) : (n(), v("span", {
                          key: 1,
                          innerHTML: e.htmlValue(e.titleContent, V)
                        }, null, 8, Eh))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  e.detailContent ? (n(), h(_, {
                    key: 1,
                    "line-clamp": e.detailMaxRow
                  }, {
                    default: r(() => [
                      e.detailContent ? (n(), v("span", {
                        key: 0,
                        innerHTML: e.htmlValue(e.detailContent, V)
                      }, null, 8, Ah)) : b("", !0)
                    ]),
                    _: 2
                  }, 1032, ["line-clamp"])) : b("", !0),
                  e.statusField || e.statusContent ? (n(), v("div", {
                    key: 2,
                    class: "thumbnail-status",
                    style: le({ color: e.colorField && V[e.colorField] ? V[e.colorField] : void 0 })
                  }, [
                    e.statusField ? (n(), h(C, {
                      key: 0,
                      "sdform-model": e.sdformModel,
                      "field-name": e.statusField,
                      "field-setting": e.getSchema(e.statusField),
                      "subform-width": e.subformWidth,
                      "raw-data": V,
                      "user-state": e.userState
                    }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"])) : (n(), v("span", {
                      key: 1,
                      innerHTML: e.htmlValue(e.statusContent, V)
                    }, null, 8, Lh))
                  ], 4)) : b("", !0),
                  e.actionEnable ? (n(), v("span", Bh, [
                    re(e.$slots, "actionBtnRow", {
                      row: V,
                      index: E
                    }, void 0, !0),
                    V[e.keyId] && e.isFormEnable && e.viewBtnEnable ? (n(), h(c, {
                      key: 0,
                      plain: "",
                      circle: "",
                      type: "info",
                      icon: "View",
                      size: "small",
                      title: "View",
                      onClick: j((W) => e.handleView(V, E), ["prevent"])
                    }, null, 8, ["onClick"])) : b("", !0),
                    V[e.keyId] && e.isFormEnable && e.updateBtnEnable && e.allowUpdate(e.sdformModel, V, e.useUserState.user) ? (n(), h(c, {
                      key: 1,
                      plain: "",
                      circle: "",
                      type: "primary",
                      icon: "Edit",
                      size: "small",
                      title: "Edit",
                      onClick: j((W) => e.handleUpdate(V, E), ["prevent"])
                    }, null, 8, ["onClick"])) : b("", !0),
                    V[e.keyId] && e.isFormEnable && e.delBtnEnable && e.allowDelete(e.sdformModel, V, e.useUserState.user) ? (n(), h(c, {
                      key: 2,
                      plain: "",
                      circle: "",
                      type: "danger",
                      icon: "Delete",
                      size: "small",
                      title: "Delete",
                      onClick: j((W) => e.handleDelete(V, E), ["prevent"])
                    }, null, 8, ["onClick"])) : b("", !0)
                  ])) : b("", !0)
                ]),
                _: 2
              }, 1032, ["class", "style", "onClick"])
            ]),
            _: 2
          }, 1032, ["lg", "xl"]))), 128))
        ]),
        _: 3
      }, 8, ["onEndReached", "distance", "style"])) : b("", !0)
    ])) : b("", !0)
  ], 64);
}
const Nh = /* @__PURE__ */ U(xm, [["render", Oh], ["__scopeId", "data-v-01b66da0"]]), jw = /* @__PURE__ */ O({
  __name: "SdAppList",
  props: {
    userState: {
      type: Object,
      required: !0
    },
    searchEnable: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: "Apps"
    },
    icon: {
      type: String,
      default: "icon-box"
    },
    limit: {
      type: Number,
      default: 120
    },
    path: {
      type: String,
      default: "/module/app-viewer?appId="
    }
  },
  setup(e) {
    const t = e, a = ke({
      formId: "getmodules",
      router: Oo(),
      searchFields: t.searchEnable ? ["app_name", "app_desc", "app_code", "app_category"] : void 0,
      // dpFormData: {
      // 	providerId: '68f5f4ce2bdb232a29533e50',
      // 	providerType: 'FORM',
      // 	options: {
      // 		where: `app_publisher = '2' AND (app_share = 'public' OR (app_share = 'private' AND \`created_by.id\`= CONVERT(:xuser_idx, 'objectId')) OR (app_share = 'assign' AND \`app_assign_roles.value\` IN(:xrolesx) ) )`,
      // 	},
      // } as SdProvider,
      formModel: {
        dataid: "fix",
        form_name: "App Factory",
        form_detail: null,
        form_icon: "",
        form_table: "module_packages",
        form_tag: ["module_builder"],
        form_category: "",
        form_feature: "pro",
        feature_token: "",
        form_type: "form_only",
        form_mobile: !1,
        form_version: "v1",
        version_parent: "",
        version_count: 0,
        version_description: "",
        joiner_field: {
          form_parent: "",
          joiner_enable: !1,
          joiner_label: "Parent",
          joiner_variable: "_id",
          form_id: "",
          field_name: "parent_id",
          label_fields: [],
          label_template: "",
          search_fields: [],
          ref_fields: [],
          sql_filter: "",
          order_by: [],
          ref_form: null,
          insert_enable: !0,
          edit_enable: !0,
          view_enable: !0,
          change_enable: !1,
          joiner_size: 100,
          joiner_hint: "",
          joiner_placeholder: "Please select..."
        },
        form_license: "",
        form_model: "",
        form_approve: !0,
        form_enable: !0,
        form_options: {
          data_manager: [],
          auto_save: !1,
          allowed_clone: !1,
          popup_size: 70,
          system_form: !0,
          query_tool: "disable",
          unique_record: "disable",
          unique_submitted: !1,
          unique_field: "",
          display_fields: ["app_logo", "app_name", "app_code", "app_desc", "app_category", "app_share"],
          search_fields: ["app_name", "app_code", "app_category", "app_desc"],
          enable_websocket: !0
        },
        form_share: {
          form_sharing: "private",
          form_assign: [],
          data_sharing: "private",
          insert_policy: !0,
          insert_assign: [],
          update_policy: !1,
          update_assign: [],
          delete_policy: !1,
          delete_assign: [],
          form_token: {
            token_enable: !1,
            token_unique: !0,
            token_edit: !1,
            token_result: !0,
            token_header: !0,
            token_footer: !0,
            token_code: "",
            token_uid: "",
            token_user: "",
            token_commit: !0,
            token_commit_content: ""
          }
        },
        form_db: {
          api_url: "",
          autonum: {},
          schema: {
            app_name: {
              fieldName: "app_name",
              label: "App Name",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "text-input",
              componentName: "Text Input",
              hidden: !1,
              required: !0,
              readonly: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "250",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {
                minlength: null,
                maxlength: 255,
                showWordLimit: !0
              }
            },
            app_desc: {
              fieldName: "app_desc",
              label: "Descriptions",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "text-input",
              componentName: "Text Input",
              hidden: !1,
              required: !1,
              readonly: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "300",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {
                minlength: null,
                maxlength: null,
                showWordLimit: !1
              }
            },
            app_code: {
              fieldName: "app_code",
              label: "Package Code",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "text-input",
              componentName: "Text Input",
              hidden: !1,
              required: !0,
              readonly: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "200",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {
                minlength: null,
                maxlength: null,
                showWordLimit: !1
              },
              textType: "success"
            },
            app_category: {
              fieldName: "app_category",
              label: "Category",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "group-list-input",
              componentName: "Group List",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "200",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: "67ce615d63dfa2219b7ea957",
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            app_share: {
              fieldName: "app_share",
              label: "App Sharing",
              defaultValue: "public",
              subField: null,
              type: "String",
              component: "radio-input",
              componentName: "Radio Button",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !0,
              width: "150",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {},
              filters: !0
            },
            app_assign_roles: {
              fieldName: "app_assign_roles",
              label: "Roles",
              defaultValue: null,
              subField: null,
              type: "Object|Array",
              component: "select-data-input",
              componentName: "Select Data List",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !0,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            app_note: {
              fieldName: "app_note",
              label: "Note",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "html-input",
              componentName: "HTML Editor",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            app_logo: {
              fieldName: "app_logo",
              label: "Logo",
              defaultValue: null,
              subField: null,
              type: "Array",
              component: "crop-upload-input",
              componentName: "Crop Picture",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "130",
              align: "center",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            app_packages: {
              fieldName: "app_packages",
              label: "App Packages",
              defaultValue: null,
              subField: {
                tab_form: {
                  fieldName: "tab_form",
                  label: "Form",
                  subField: null,
                  defaultValue: null,
                  component: "select-data-input",
                  componentName: "Select Data List",
                  type: "Object|Array",
                  hidden: !1,
                  required: !1,
                  disabled: !1,
                  hint: null,
                  multiple: !1,
                  choiceType: !1,
                  refFormId: null,
                  refField: null,
                  refFormType: !1,
                  groupField: null,
                  inputOptions: {},
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: "",
                  comment: "",
                  widgetDisplay: "widget",
                  joinerType: !1
                },
                tab_icon: {
                  fieldName: "tab_icon",
                  label: "Icon",
                  subField: null,
                  defaultValue: null,
                  component: "icon-input",
                  componentName: "Icon List",
                  type: "String|Array",
                  hidden: !1,
                  required: !1,
                  disabled: !1,
                  hint: null,
                  choiceType: !1,
                  refFormId: null,
                  refField: null,
                  refFormType: !1,
                  groupField: null,
                  inputOptions: {},
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: "",
                  comment: "",
                  widgetDisplay: "widget",
                  joinerType: !1
                },
                tab_label: {
                  fieldName: "tab_label",
                  label: "Label",
                  subField: null,
                  defaultValue: null,
                  component: "text-input",
                  componentName: "Text Input",
                  type: "String",
                  hidden: !1,
                  required: !1,
                  readonly: !1,
                  disabled: !1,
                  hint: null,
                  choiceType: !1,
                  refFormId: null,
                  refField: null,
                  refFormType: !1,
                  groupField: null,
                  inputOptions: {
                    minlength: null,
                    maxlength: null,
                    showWordLimit: !1
                  },
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: "",
                  comment: "",
                  widgetDisplay: "widget",
                  joinerType: !1
                },
                tab_roles: {
                  fieldName: "tab_roles",
                  label: "Roles",
                  subField: null,
                  defaultValue: null,
                  component: "select-data-input",
                  componentName: "Select Data List",
                  type: "Object|Array",
                  hidden: !1,
                  required: !1,
                  disabled: !1,
                  hint: null,
                  multiple: !0,
                  choiceType: !1,
                  refFormId: null,
                  refField: null,
                  refFormType: !1,
                  groupField: null,
                  inputOptions: {},
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: "",
                  comment: "",
                  widgetDisplay: "widget",
                  joinerType: !1
                },
                tab_widget_name: {
                  fieldName: "tab_widget_name",
                  label: "Widget Name",
                  subField: null,
                  defaultValue: "",
                  component: "text-input",
                  componentName: "Text Input",
                  type: "String",
                  hidden: !1,
                  required: !1,
                  readonly: !1,
                  disabled: !1,
                  hint: null,
                  choiceType: !1,
                  refFormId: null,
                  refField: null,
                  refFormType: !1,
                  groupField: null,
                  inputOptions: {
                    minlength: null,
                    maxlength: null,
                    showWordLimit: !1
                  },
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: "",
                  comment: "",
                  widgetDisplay: "widget",
                  joinerType: !1
                },
                tab_options: {
                  fieldName: "tab_options",
                  label: "Options",
                  subField: null,
                  defaultValue: "",
                  component: "btn-editor-input",
                  componentName: "Button Editor",
                  type: "String|Array",
                  hidden: !1,
                  required: !1,
                  disabled: !1,
                  hint: null,
                  choiceType: !1,
                  refFormId: null,
                  refField: null,
                  refFormType: !1,
                  groupField: null,
                  inputOptions: {},
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: "",
                  comment: "",
                  widgetDisplay: "widget",
                  joinerType: !1
                }
              },
              type: "Array",
              component: "sub-form",
              componentName: "Sub Form",
              hidden: !1,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            "app_packages.tab_roles": {
              fieldName: "app_packages.tab_roles",
              label: "Roles",
              defaultValue: null,
              subField: null,
              type: "Object|Array",
              component: "select-data-input",
              componentName: "Select Data List",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !0,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            "app_packages.tab_label": {
              fieldName: "app_packages.tab_label",
              label: "Label",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "text-input",
              componentName: "Text Input",
              hidden: !1,
              required: !1,
              readonly: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {
                minlength: null,
                maxlength: null,
                showWordLimit: !1
              }
            },
            "app_packages.tab_icon": {
              fieldName: "app_packages.tab_icon",
              label: "Icon",
              defaultValue: null,
              subField: null,
              type: "String|Array",
              component: "icon-input",
              componentName: "Icon List",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            "app_packages.tab_form": {
              fieldName: "app_packages.tab_form",
              label: "Form",
              defaultValue: null,
              subField: null,
              type: "Object|Array",
              component: "select-data-input",
              componentName: "Select Data List",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !0,
              inputOptions: {}
            },
            "app_packages.tab_options": {
              fieldName: "app_packages.tab_options",
              label: "Options",
              defaultValue: "",
              subField: null,
              type: "String|Array",
              component: "btn-editor-input",
              componentName: "Button Editor",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            app_info: {
              fieldName: "app_info",
              label: "App Info",
              defaultValue: null,
              subField: null,
              type: "String",
              component: "html-input",
              componentName: "HTML Editor",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            "app_packages.tab_widget_name": {
              fieldName: "app_packages.tab_widget_name",
              label: "Widget Name",
              defaultValue: "",
              subField: null,
              type: "String",
              component: "text-input",
              componentName: "Text Input",
              hidden: !1,
              required: !1,
              readonly: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !1,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {
                minlength: null,
                maxlength: null,
                showWordLimit: !1
              }
            },
            app_publisher: {
              fieldName: "app_publisher",
              label: "Publisher",
              defaultValue: "1",
              subField: null,
              type: "String",
              component: "radio-input",
              componentName: "Radio Button",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !0,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            },
            app_mode: {
              fieldName: "app_mode",
              label: "App Mode",
              defaultValue: "module",
              subField: null,
              type: "String",
              component: "radio-input",
              componentName: "Radio Button",
              hidden: !1,
              required: !1,
              disabled: !1,
              hint: null,
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: !0,
              width: "",
              align: "left",
              sortable: !1,
              fixed: "",
              comment: "",
              widgetDisplay: "widget",
              joinerType: !1,
              refFormId: null,
              refField: null,
              refFormType: !1,
              groupField: null,
              valueObjectId: !1,
              inputOptions: {}
            }
          },
          data_list: {
            app_share: [
              {
                label: "Private",
                value: "private"
              },
              {
                label: "Public",
                value: "public"
              },
              {
                label: "Assign to",
                value: "assign"
              }
            ],
            app_publisher: [
              {
                label: "Draft",
                value: "1"
              },
              {
                label: "Publisher",
                value: "2"
              }
            ],
            app_mode: [
              {
                label: "Module",
                value: "module"
              },
              {
                label: "Page",
                value: "page"
              }
            ]
          },
          index: {}
        },
        form_event: {
          enable: !0,
          data_validation: [],
          api_onevent: [],
          open_next_form: [],
          update_relational_fields: [],
          delete_children_record: [],
          clone_children_record: [],
          harvest_data: [],
          after_save: "",
          after_delete: "",
          update_children: !0
        },
        updated_by: {
          id: "642a888fa09ccdfdd8291833",
          name: "supat maneewong (iencoded@gmail.com)"
        },
        updated_at: "2025-11-14 16:25:01",
        created_by: {
          id: "642a888fa09ccdfdd8291833",
          name: "supat maneewong (iencoded@gmail.com)"
        },
        created_at: "2025-10-20 15:37:34"
      }
    });
    function l(o, i) {
      a.router.push(t.path + o._id);
    }
    return xe(() => {
    }), (o, i) => {
      const s = Nh;
      return n(), h(s, {
        "form-id": a.formId,
        "provider-type": "SYS",
        "search-fields": a.searchFields,
        column: 6,
        "limit-row": e.limit,
        "scroll-distance": 600,
        "icon-wigth": 78,
        "icon-field": "app_logo",
        "title-field": "app_name",
        "title-name": e.title,
        "icon-name": e.icon,
        "list-type": "listicon",
        "form-model": a.formModel,
        "click-event": l,
        "user-state": e.userState
      }, null, 8, ["form-id", "search-fields", "limit-row", "title-name", "icon-name", "form-model", "user-state"]);
    };
  }
});
function nl(e) {
  return e.includes("admin") || e.includes("super");
}
const jh = Eo(() => import("./sd-render-BDK1UnQw.js").then((e) => e.S)), Uh = O({
  name: "SdCrudForm",
  components: {
    SdFormRenderAsync: jh
  },
  props: {
    formId: {
      type: String,
      required: !0
    },
    dataId: {
      type: String,
      default: ""
    },
    parentId: {
      type: String,
      default: ""
    },
    initData: {
      type: Object,
      default: {}
    },
    params: {
      type: Object,
      default: {}
    },
    optionData: {
      type: Object
    },
    beforeSave: Function,
    afterSave: Function,
    changeVersion: Function,
    nextInsert: {
      type: Boolean,
      default: !1
    },
    showFooter: {
      type: Boolean,
      default: !0
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    annotated: {
      type: Boolean,
      default: !1
    },
    isSubForm: {
      type: Boolean,
      default: !1
    },
    showTitle: {
      type: Boolean,
      default: !1
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      formReadonly: this.readonly,
      saveDart: !1,
      reSaveDart: !1,
      autoSave: !1,
      //this.sdformModel.form_options.auto_save
      appMode: !1,
      //this.sdformModel.form_type == 'form_ui'
      afterSaveForm: void 0,
      isInsert: !0,
      rstat: 0,
      rstatSubmit: 1,
      enableSubmit: !0,
      apiUrl: "",
      userBy: this.userState.user,
      hideForm: !1,
      loadForm: !1,
      hideMsg: "",
      allowInsert: !1,
      allowUpdate: !1,
      btnDisableSubmit: !1,
      btnDisable: !1,
      defaultParams: {},
      useUserState: this.$props.userState,
      sdformModel: {},
      formData: {},
      curFormId: this.formId,
      nextOpenForm: {},
      sdFunc: {}
    };
  },
  computed: {
    showInput() {
      return this.refSdForm ? this.refSdForm.showInput : !0;
    },
    // joiner ยัง resolve label ของ parent ไม่เสร็จ → กัน Submit จนกว่าจะพร้อม
    // ฟอร์มยังไม่ mount (async component ยัง preload อยู่) = ยังไม่พร้อม → false → กัน Submit ไว้ก่อน
    joinerReady() {
      return this.refSdForm ? this.refSdForm.joinerReady : !1;
    },
    dataError() {
      return !!this.formData.xerrorx && typeof this.formData.xerrorx == "object" && Object.keys(this.formData.xerrorx).length > 0;
    }
  },
  setup() {
    const e = q(), t = q(), a = R("subFormOpen", void 0);
    return {
      refSdForm: e,
      subFormOpen: a,
      loading: t
    };
  },
  async mounted() {
    if (this.loadForm = !1, this.formId != "")
      if (this.userState.formStore[this.formId])
        this.initForm(this.userState.formStore[this.formId]);
      else if (this.useUserState) {
        const e = await $e(this.formId, this.useUserState);
        e.response && e.data ? e.data.dataid && this.initForm(e.data) : B.warning(e.message);
      } else
        B.warning("UserState not found.");
    else
      B.warning("FormId not found.");
    this.sdFunc = {
      subFormOpen: this.subFormOpen,
      handleCancel: this.handleCancel,
      handleAfterSave: this.handleAfterSave,
      userState: this.userState,
      params: this.params,
      ElMessage: B,
      sdformModel: this.sdformModel,
      nextOpenForm: this.nextOpenForm,
      refSdForm: this.refSdForm
    };
  },
  async beforeUnmount() {
    this.formData && this.formData._id && bl(this.formData.xrstatx) && this.formData.xrstatx === 0 && (this.isInsert = !0, this.sdformModel.dataid && (await Rm(this.sdformModel.dataid, this.formData._id, this.useUserState) || B.warning("Unable to delete empty data")));
  },
  methods: {
    async initForm(e) {
      const t = e._id || this.formId;
      if (this.sdformModel = P(e), this.userState.formStore[t] = this.sdformModel, this.hideMsg = "", this.hideForm = !1, this.userState.versionStore[this.formId] || (this.userState.versionStore[this.formId] = {}), this.userState.versionStore[this.formId][`${e.form_version}`] = t, !this.appMode && !this.annotated) {
        if (await this.getFormDataRecord(), this.formData.xversionx && this.formData.xversionx !== this.sdformModel.form_version) {
          let o = !0;
          if (this.userState.versionStore[this.formId][this.formData.xversionx] && (this.curFormId = this.userState.versionStore[this.formId][this.formData.xversionx], this.userState.formStore[this.curFormId] && (this.sdformModel = P(this.userState.formStore[this.curFormId]), o = !1)), o) {
            const i = await Um(this.formId, this.formData.xversionx, this.useUserState);
            i.response && i.data && i.data.dataid && (this.sdformModel = P(i.data), this.userState.formStore[i.data.dataid] = this.sdformModel, this.userState.versionStore[this.formId][`${this.sdformModel.form_version}`] = i.data.dataid);
          }
        }
        this.changeVersion && this.changeVersion(this.sdformModel);
      }
      if (this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, !this.userBy && this.userState.user && (this.userBy = this.userState.user), this.autoSave = this.sdformModel.form_options.auto_save, this.appMode = this.sdformModel.form_type == "form_ui", this.userState.user && (this.allowInsert = Oe(this.sdformModel, this.userState.user), this.allowUpdate = Je(this.sdformModel, this.formData, this.userState.user)), !nl(this.userState.systemRoles)) {
        if (this.sdformModel.form_share.form_sharing === "private") {
          let o = "";
          this.sdformModel.created_by && this.sdformModel.created_by.id && (o = this.sdformModel.created_by.id), this.userBy?.user_id !== o && (this.hideMsg = "You don't have permission to use this form.", this.hideForm = !0);
        } else if (this.sdformModel.form_share.form_sharing === "assign") {
          let o = "";
          if (this.sdformModel.created_by && this.sdformModel.created_by.id && (o = this.sdformModel.created_by.id), this.userBy?.user_id !== o) {
            const i = this.sdformModel.form_share.form_assign, s = this.userBy && this.userBy.roles ? this.userBy.roles : [];
            let u = !1;
            s.forEach((m) => {
              if (i.includes(m)) {
                u = !0;
                return;
              }
            }), u || (this.hideMsg = "You don't have permission to use this form.", this.hideForm = !0);
          }
        }
      }
      this.formData.xrstatx && this.formData.xrstatx > 1 && (this.formReadonly = !0), this.sdformModel.form_options.query_tool && this.sdformModel.form_options.query_tool != "disable" ? (this.saveDart = !0, this.rstatSubmit = 2, this.formData.xrstatx && this.formData.xrstatx !== 0 ? this.enableSubmit = !0 : this.enableSubmit = !1, this.enableSubmit && (this.sdformModel.form_options.query_tool === "enable_error_check" ? this.dataError ? this.btnDisable = !0 : this.btnDisable = !1 : this.btnDisable = !1, this.formData.xrstatx && this.formData.xrstatx === 2 ? this.userState.user && (this.reSaveDart = Hm(this.sdformModel, this.userState.user)) : this.reSaveDart = !1)) : this.saveDart = !1;
      const a = P(this.formData), l = P(this.params);
      this.defaultParams = { ...l, ...a }, this.sdformModel.form_event && this.sdformModel.form_event.after_save && this.sdformModel.form_event.enable && (this.afterSaveForm = new Function("isInsert", "formData", "formOldData", ..._e, this.sdformModel.form_event.after_save)), this.loading?.close(), this.loadForm = !0;
    },
    async getFormDataRecord() {
      if (this.sdformModel.form_type === "form_ui") {
        this.initData && Object.keys(this.initData).length > 0 && (this.formData = P(this.initData));
        return;
      }
      if (this.initData && this.initData._id)
        this.formData = P(this.initData);
      else if (this.dataId && this.dataId != "")
        await this.userState.crudGetOne(
          {
            sdProvider: {
              providerId: this.formId,
              providerType: "FORM",
              options: {
                where: "_id = CONVERT(:dataid, 'objectId')"
              },
              params: { dataid: this.dataId }
            }
          },
          (e) => {
            e.data ? this.formData = P(e.data) : B.warning("Unable to get data");
          },
          () => {
            B.warning("Unable to get data");
          }
        );
      else {
        const e = await za(this.sdformModel._id || this.sdformModel.dataid, this.useUserState);
        e ? (this.refSdForm && this.refSdForm.resetForm(), this.formData = { ...e, ...P(this.initData) }) : B.warning("Unable to create empty data");
      }
    },
    async afterSubmit(e, t) {
      if (this.afterSave && await this.afterSave(e, t), this.nextInsert)
        this.initData._id || this.dataId != "" || this.getFormDataRecord();
      else if (this.sdformModel.form_event.enable && this.sdformModel.form_event.open_next_form && Object.values(this.sdformModel.form_event.open_next_form).length > 0)
        for (const a of this.sdformModel.form_event.open_next_form) {
          let l = "true";
          if (a.cond && (l = a.cond), Mr(l, e) && a.form) {
            if (this.subFormOpen) {
              const o = yl(e);
              let i = {};
              if (a.initdata && Object.values(a.initdata).length > 0)
                for (const s of a.initdata) {
                  const u = Vr(s.value, e);
                  ll(i, s.field, u);
                }
              this.nextOpenForm = {
                formId: a.form,
                parentId: ue(a.parentId, o),
                dataId: ue(a.dataId, o),
                initData: i
              }, this.nextOpenForm.dataId ? this.nextOpenForm.isInsert = !1 : this.nextOpenForm.isInsert = !0, this.subFormOpen({
                modelValue: !0,
                formId: this.nextOpenForm.formId,
                parentId: this.nextOpenForm.parentId,
                dataId: this.nextOpenForm.dataId,
                initData: this.nextOpenForm.initData,
                params: this.params,
                readonly: !1,
                afterSaveCallback: this.handleAfterSave,
                cancelCallback: this.handleCancel
              });
            }
            break;
          }
        }
    },
    handleAfterSave(e, t) {
      let a = this.nextOpenForm.isInsert ? "insert" : "update";
      const l = this.userState.connectWebSocket("gridform", this.nextOpenForm.formId, "", (o) => {
      });
      setTimeout(() => {
        l.wsSend({ data: e, method: a, keyid: "_id" }), l.wsDisconnect();
      }, 500), this.handleCancel();
    },
    handleCancel() {
      this.subFormOpen({
        modelValue: !1,
        formId: this.formId,
        cancelCallback: () => {
        }
      });
    },
    //form event
    async onFormChange(e, t, a, l, o, i) {
      if (this.autoSave && !this.formReadonly)
        this.btnDisableSubmit = !0, this.onSubmit(1, !0);
      else if (!this.formReadonly) {
        const s = this.sdformModel.form_db.schema[e] ? this.sdformModel.form_db.schema[e] : {}, u = ["picture-upload-input", "file-upload-input", "crop-upload-input"];
        if (s.component && u.includes(s.component)) {
          let m = P(this.formData);
          m[e] = t;
          const f = await yt(this.sdformModel.dataid, this.formData._id, m, this.formData.xrstatx, this.useUserState);
          f.data && this.formData.xrstatx !== 0 && this.afterSubmit(P(f), !0);
        }
      }
    },
    onSubmit(e, t = !1) {
      this.appMode ? B.warning("App mode.") : this.refSdForm.getFormData().then(async (a) => {
        let l = {};
        this.beforeSave && (l = this.beforeSave(a)), a = { ...this.formData, ...a, ...l }, a.xversionx = this.sdformModel.form_version, this.formData.xrstatx && (this.isInsert = !1);
        const o = await yt(this.formId, this.formData._id, a, e, this.useUserState), i = o.data;
        if (this.btnDisableSubmit = !1, i) {
          if (i._id = this.formData._id, this.formData = P(i), this.sdformModel.form_event.enable && this.afterSaveForm && !t)
            try {
              this.afterSaveForm.call(this.sdFunc, this.isInsert, i, this.formData);
            } catch (s) {
              B.error(s.message);
            }
          this.afterSubmit(i, t);
        } else
          B.warning(o.message);
      }).catch((a) => {
        typeof a == "string" ? B.warning(a) : B.warning(a.message);
      });
    }
  }
});
function Rh(e, t, a, l, o, i) {
  const s = la, u = X("SdFormRenderAsync"), m = ie, f = dt, c = Et;
  return n(), v(L, null, [
    e.hideForm ? (n(), h(s, {
      key: 0,
      title: e.hideMsg,
      type: "warning",
      "show-icon": "",
      style: { "margin-bottom": "10px" },
      closable: !1
    }, null, 8, ["title"])) : (n(), v(L, { key: 1 }, [
      e.loadForm ? (n(), h(u, {
        key: 0,
        ref: "refSdForm",
        sdform: e.sdformModel,
        "parent-id": e.parentId,
        "form-data": e.formData,
        "option-model": e.optionData,
        disabled: e.formReadonly,
        "api-url": e.apiUrl,
        params: e.params,
        annotated: e.annotated,
        "is-sub-form": e.isSubForm,
        "auth-token": e.userState.user?.token,
        "submit-func": e.onSubmit,
        "user-state": e.userState,
        onFormChange: e.onFormChange
      }, {
        default: r(() => [
          re(e.$slots, "inputForm")
        ]),
        _: 3
      }, 8, ["sdform", "parent-id", "form-data", "option-model", "disabled", "api-url", "params", "annotated", "is-sub-form", "auth-token", "submit-func", "user-state", "onFormChange"])) : b("", !0)
    ], 64)),
    !e.readonly && e.showInput && !e.appMode && e.showFooter ? (n(), h(c, { key: 2 }, {
      default: r(() => [
        d(f, {
          span: 24,
          style: { "text-align": "right" }
        }, {
          default: r(() => [
            e.reSaveDart ? (n(), h(m, {
              key: 0,
              type: "warning",
              onClick: t[0] || (t[0] = j((F) => e.onSubmit(1), ["prevent"])),
              plain: ""
            }, {
              default: r(() => [...t[4] || (t[4] = [
                I("Re-Save Dart", -1)
              ])]),
              _: 1
            })) : b("", !0),
            !e.hideForm && !e.formReadonly ? (n(), v(L, { key: 1 }, [
              e.saveDart ? (n(), h(m, {
                key: 0,
                type: "success",
                onClick: t[1] || (t[1] = j((F) => e.onSubmit(1), ["prevent"])),
                disabled: e.btnDisableSubmit || !e.joinerReady
              }, {
                default: r(() => [...t[5] || (t[5] = [
                  I("Save Dart", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])) : b("", !0),
              e.enableSubmit ? (n(), h(m, {
                key: 1,
                type: "primary",
                onClick: t[2] || (t[2] = j((F) => e.onSubmit(e.rstatSubmit), ["prevent"])),
                disabled: e.btnDisableSubmit || e.btnDisable || !e.joinerReady
              }, {
                default: r(() => [...t[6] || (t[6] = [
                  I("Submit", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])) : b("", !0),
              d(m, {
                onClick: t[3] || (t[3] = (F) => e.refSdForm.resetForm())
              }, {
                default: r(() => [...t[7] || (t[7] = [
                  I("Reset", -1)
                ])]),
                _: 1
              })
            ], 64)) : b("", !0),
            re(e.$slots, "closeForm")
          ]),
          _: 3
        })
      ]),
      _: 3
    })) : b("", !0)
  ], 64);
}
const wl = /* @__PURE__ */ U(Uh, [["render", Rh]]), zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wl
}, Symbol.toStringTag, { value: "Module" })), Hh = Eo(() => Promise.resolve().then(() => zh)), qh = O({
  name: "SdAppViewer",
  components: { SdCrudForm: Hh },
  props: {
    appIdDefault: {
      type: String,
      default: ""
    },
    userState: {
      type: Object,
      required: !0
    },
    lazyLoad: {
      type: Boolean,
      default: !0
    },
    customComponents: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      appFormId: "68f5f4ce2bdb232a29533e50",
      dpAppData: {
        providerId: "getapp-one",
        providerType: "SYS"
      },
      useUserState: this.userState,
      appData: {},
      appId: this.appIdDefault,
      tab: "1",
      dataId: "",
      parentId: "",
      params: {},
      appTitle: "AppName",
      appTitleSub: "",
      appIcon: null,
      appInfo: "",
      appTabs: [],
      showInfo: !1,
      permissionDenied: !1
    };
  },
  computed: {},
  created() {
    this.dpAppData.params = this.route.query ? this.route.query : {};
  },
  async mounted() {
    await this.initApp();
  },
  unmounted() {
    this.params = {}, this.appId = this.appIdDefault, this.tab = "1", this.dataId = "", this.parentId = "", this.appIcon = null, this.appTitle = "AppName", this.appTitleSub = "", this.appInfo = "", this.appTabs = [];
  },
  setup(e, t) {
    return { route: No() };
  },
  methods: {
    async initApp() {
      const e = await Xt(this.dpAppData, this.useUserState);
      e && e.response && e.data && e.data.data && (this.appData = P(e.data.data), this.appPermission(this.appData, this.useUserState.user) ? (this.updateMainParams(), this.appTitle = this.appData.app_name || "AppName", this.appIcon = this.appData.app_logo || null, this.appTitleSub = this.appData.app_desc || "", this.appInfo = this.appData.app_info || "", this.appTabs = this.appData.app_packages || []) : this.permissionDenied = !0);
    },
    updateMainParams() {
      this.route.query ? this.params = P(this.route.query) : this.params = P, this.route.query && this.route.query.appId ? this.appId = String(this.route.query.appId) : this.appId = this.appIdDefault, this.route.query && this.route.query.tab && (this.tab = String(this.route.query.tab)), this.route.query && this.route.query.dataId && (this.dataId = String(this.route.query.dataId)), this.route.query && this.route.query.parentId && (this.parentId = String(this.route.query.parentId));
    },
    getImage(e) {
      if (e && Object.keys(e).length > 0 && e[0])
        return e[0].url ? e[0].url : e[0];
    },
    getFormId(e) {
      let t = "";
      return e && e.value && (t = e.value), t;
    },
    getSelectValue(e) {
      let t = "";
      return e && e.value && (t = e.value), t;
    },
    handleAppInfo() {
      this.showInfo = !0;
    },
    handleTabChange(e) {
    },
    appPermission(e, t) {
      let a = !1;
      if (e.app_share === "public")
        a = !0;
      else if (e.app_share === "private")
        (e.created_by.id === t.user_id || nl(t.roles)) && (a = !0);
      else if (e.app_share === "assign") {
        const l = e.app_assign_roles, o = t.roles;
        nl(t.roles) ? a = !0 : o.forEach((i) => {
          if (l.includes(i)) {
            a = !0;
            return;
          }
        });
      }
      return a;
    }
  }
}), Wh = {
  key: 0,
  class: "app_page"
}, xh = { class: "app_header" }, Kh = { class: "app_title text-6" }, Gh = { class: "ml-2" }, Yh = { class: "ml-1 sub-title" }, Jh = { class: "app_actions" }, Xh = { class: "app_content" }, Qh = { class: "tabs-label" }, Zh = { class: "tabs-content" }, ef = {
  key: 1,
  class: "tabs-content"
}, tf = { key: 2 }, af = {
  role: "heading",
  class: "el-dialog__title"
};
function lf(e, t, a, l, o, i) {
  const s = ul, u = ie, m = ve, f = wl, c = la, F = Ui, D = ji, g = Ra, C = Ce, _ = Ao("can");
  return n(), v(L, null, [
    e.appId ? (n(), v("div", Wh, [
      $("div", xh, [
        $("span", Kh, [
          d(s, {
            shape: "square",
            fit: "cover",
            style: { width: "32px", height: "32px" },
            icon: "Picture",
            src: e.getImage(e.appIcon)
          }, null, 8, ["src"]),
          $("span", Gh, A(e.appTitle), 1),
          t[3] || (t[3] = I()),
          $("span", Yh, A(e.appTitleSub), 1)
        ]),
        $("span", Jh, [
          e.appInfo ? (n(), h(u, {
            key: 0,
            circle: "",
            plain: "",
            icon: "InfoFilled",
            onClick: e.handleAppInfo
          }, null, 8, ["onClick"])) : b("", !0),
          re(e.$slots, "actions", {}, void 0, !0)
        ])
      ]),
      $("div", Xh, [
        e.appTabs.length > 1 ? (n(), h(D, {
          key: 0,
          modelValue: e.tab,
          "onUpdate:modelValue": t[0] || (t[0] = (p) => e.tab = p),
          type: "card",
          class: "app-tabs",
          onTabChange: e.handleTabChange
        }, {
          default: r(() => [
            (n(!0), v(L, null, J(e.appTabs, (p, y) => (n(), h(F, {
              key: y + 1,
              label: p.tab_label,
              name: String(y + 1),
              lazy: e.lazyLoad
            }, {
              label: r(() => [
                $("span", Qh, [
                  p.tab_icon ? (n(), h(m, {
                    key: 0,
                    "icon-name": p.tab_icon,
                    class: "mr-1"
                  }, null, 8, ["icon-name"])) : b("", !0),
                  $("span", null, A(p.tab_label), 1)
                ])
              ]),
              default: r(() => [
                Ve((n(), v("div", Zh, [
                  p.tab_widget_name ? (n(), h(Ot(e.customComponents[p.tab_widget_name]), ae({
                    key: 0,
                    ref_for: !0
                  }, p.tab_options ? p.tab_options : {}, {
                    key: y + 1,
                    "user-state": e.userState
                  }), null, 16, ["user-state"])) : (n(), v(L, { key: 1 }, [
                    p.tab_form && e.getFormId(p.tab_form) ? (n(), h(f, {
                      key: 0,
                      "form-id": e.getFormId(p.tab_form),
                      "data-id": e.dataId,
                      "parent-id": e.parentId,
                      params: e.params,
                      "show-title": !1,
                      "next-insert": !0,
                      "user-state": e.userState
                    }, null, 8, ["form-id", "data-id", "parent-id", "params", "user-state"])) : b("", !0)
                  ], 64))
                ])), [
                  [
                    _,
                    p.tab_roles && Object.keys(e.getSelectValue(p.tab_roles)).length > 0 ? e.getSelectValue(p.tab_roles) : e.userState.user?.roles,
                    void 0,
                    { any: !0 }
                  ]
                ]),
                Ve(d(c, {
                  title: "You don't have permission to access.",
                  type: "warning",
                  "show-icon": ""
                }, null, 512), [
                  [
                    _,
                    e.appTabs[0].tab_roles && Object.keys(e.getSelectValue(e.appTabs[0].tab_roles)).length > 0 ? e.getSelectValue(e.appTabs[0].tab_roles) : e.userState.user?.roles,
                    void 0,
                    {
                      any: !0,
                      not: !0
                    }
                  ]
                ])
              ]),
              _: 2
            }, 1032, ["label", "name", "lazy"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "onTabChange"])) : e.appTabs.length === 1 && e.appTabs[0].tab_form && e.getFormId(e.appTabs[0].tab_form) ? Ve((n(), v("div", ef, [
          d(f, {
            "form-id": e.getFormId(e.appTabs[0].tab_form),
            "data-id": e.dataId,
            "parent-id": e.parentId,
            params: e.params,
            "show-title": !1,
            "next-insert": !0,
            "user-state": e.userState
          }, null, 8, ["form-id", "data-id", "parent-id", "params", "user-state"])
        ])), [
          [
            _,
            e.appTabs[0].tab_roles && Object.keys(e.getSelectValue(e.appTabs[0].tab_roles)).length > 0 ? e.getSelectValue(e.appTabs[0].tab_roles) : e.userState.user?.roles,
            void 0,
            { any: !0 }
          ]
        ]) : b("", !0),
        Ve(d(c, {
          title: "You don't have permission to access.",
          type: "warning",
          "show-icon": ""
        }, null, 512), [
          [
            _,
            e.appTabs[0].tab_roles && Object.keys(e.getSelectValue(e.appTabs[0].tab_roles)).length > 0 ? e.getSelectValue(e.appTabs[0].tab_roles) : e.userState.user?.roles,
            void 0,
            {
              any: !0,
              not: !0
            }
          ]
        ])
      ])
    ])) : b("", !0),
    e.permissionDenied ? (n(), h(c, {
      key: 1,
      title: "You don't have permission to access this application.",
      type: "warning",
      "show-icon": ""
    })) : b("", !0),
    e.showInfo ? (n(), v("div", tf, [
      d(C, {
        title: "App Info",
        modelValue: e.showInfo,
        "onUpdate:modelValue": t[2] || (t[2] = (p) => e.showInfo = p),
        width: "70%",
        "show-close": !0,
        class: "dialog-grid dialog-form",
        "body-class": "app-popup",
        "append-to-body": "",
        "close-on-click-modal": !0,
        "close-on-press-escape": !0,
        "destroy-on-close": !0
      }, {
        header: r(({ close: p, titleId: y, titleClass: S }) => [
          $("span", af, [
            d(m, { "icon-name": "el-info-filled" }),
            t[4] || (t[4] = I(" App Info ", -1))
          ])
        ]),
        default: r(() => [
          e.appInfo ? (n(), h(g, {
            key: 0,
            modelValue: e.appInfo,
            "onUpdate:modelValue": t[1] || (t[1] = (p) => e.appInfo = p),
            mode: "mini",
            readonly: !0,
            "user-state": e.userState
          }, null, 8, ["modelValue", "user-state"])) : b("", !0)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ])) : b("", !0)
  ], 64);
}
const Uw = /* @__PURE__ */ U(qh, [["render", lf], ["__scopeId", "data-v-1446cb78"]]);
zs.register(
  Hs,
  qs,
  Ws,
  xs,
  Ks,
  Gs,
  Ys,
  Js,
  Xs,
  Qs,
  Zs,
  er,
  tr,
  ar,
  lr,
  or,
  ir,
  nr,
  sr,
  rr,
  dr,
  ur
);
const of = O({
  name: "SdChart",
  // cast as any — กัน type ภายในของ vue-chartjs (ChartComponent) leak ตอน gen .d.ts
  components: { Chart: pr },
  props: {
    sqlId: {
      type: String,
      required: !0
    },
    params: {
      type: Object,
      default: {}
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    type: {
      type: String,
      default: "bar"
    },
    title: {
      type: String,
      default: "Chart"
    },
    titleDisplay: {
      type: Boolean,
      default: !0
    },
    gridDisplay: {
      type: Boolean,
      default: !0
    },
    legendDisplay: {
      type: Boolean,
      default: !0
    },
    legendCustom: {
      type: Object,
      default: {}
    },
    scalesXDisplay: {
      type: Boolean,
      default: !0
    },
    scalesXLabel: {
      type: String,
      default: ""
    },
    scalesXCustom: {
      type: Object,
      default: {}
    },
    xField: {
      type: String,
      default: ""
    },
    xType: {
      type: String,
      default: "category"
    },
    scalesYDisplay: {
      type: Boolean,
      default: !0
    },
    scalesYLabel: {
      type: String,
      default: ""
    },
    scalesYCustom: {
      type: Object,
      default: {}
    },
    yDataset: {
      type: Array,
      default: []
    },
    customOptions: {
      type: Object,
      default: {}
    },
    userState: {
      type: Object,
      required: !0
    },
    mockup: {
      type: Boolean,
      default: !1
    },
    buildState: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      // data: {
      // 	datasets: [],
      // } as ChartData,
      options: {},
      dataMockup: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{ label: "Count", data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11] }]
      },
      optionsMockup: {},
      defaultParams: this.params,
      rawData: [],
      loadEnable: !1,
      preLoading: !1,
      showChart: !1,
      apiUrl: "",
      isDark: de(),
      useUserState: this.$props.userState
    };
  },
  watch: {
    isDark: {
      deep: !1,
      handler(e) {
        this.createOptions(), this.optionsMockup = this.createOpMockup();
      }
    }
  },
  computed: {
    color() {
      return de().value ? "#414243" : "#e4e7ed";
    },
    dataChart() {
      const e = {}, t = this.rawData.map((l) => {
        if (l[this.xField])
          return l[this.xField];
      });
      e.labels = t;
      const a = [];
      if (this.yDataset && this.yDataset.length > 0)
        for (const [l, o] of this.yDataset.entries()) {
          const i = o.custom ? o.custom : {}, s = this.rawData.map((u) => {
            if (u[o.field])
              return u[o.field];
          });
          a.push({
            data: s,
            label: o.label ? o.label : "Unit" + l,
            type: o.type ? o.type : "bar",
            borderColor: o.borderColor && Object.keys(o.borderColor).length > 0 ? o.borderColor : void 0,
            backgroundColor: o.backgroundColor && Object.keys(o.backgroundColor).length > 0 ? o.backgroundColor : void 0,
            fill: o.fill ? o.fill : void 0,
            ...i
          });
        }
      return e.datasets = a, e;
    }
  },
  created() {
    this.apiUrl = "";
  },
  mounted() {
    this.buildState || (this.loadEnable = !0), this.optionsMockup = this.createOpMockup(), this.initdata();
  },
  unmounted() {
  },
  setup(e, t) {
    return {
      chartRef: q()
    };
  },
  methods: {
    async initdata() {
      const e = {
        providerId: this.sqlId,
        providerType: fe.SQL,
        params: this.params
      };
      if (this.rawData = [], this.loadEnable) {
        const t = await at(e, !1, this.useUserState);
        t && t.response && t.data && t.data.data && (this.rawData = P(t.data.data), this.xField && (this.createOptions(), this.showChart = !0));
      }
    },
    createOptions() {
      this.options = {
        responsive: !0,
        plugins: {
          legend: {
            display: this.legendDisplay,
            ...this.legendCustom
          },
          title: {
            display: this.titleDisplay,
            text: this.title
          }
        },
        scales: {
          x: {
            type: this.xType,
            display: this.scalesXDisplay,
            time: this.xType === "time" ? {
              displayFormats: {
                quarter: "MMM YYYY"
              }
            } : void 0,
            title: {
              display: !0,
              text: this.scalesXLabel
            },
            grid: {
              display: this.gridDisplay,
              color: function(e) {
                return de().value ? "#414243" : "#e4e7ed";
              }
            },
            ...this.scalesXCustom
          },
          y: {
            display: this.scalesYDisplay,
            title: {
              display: !0,
              text: this.scalesYLabel
            },
            grid: {
              display: this.gridDisplay,
              color: function(e) {
                return de().value ? "#414243" : "#e4e7ed";
              }
            },
            ...this.scalesYCustom
          }
        },
        ...this.customOptions
      };
    },
    createOpMockup() {
      return {
        responsive: !0,
        scales: {
          x: {
            type: this.xType,
            display: this.scalesXDisplay,
            title: {
              display: !0,
              text: this.scalesXLabel
            },
            grid: {
              display: this.gridDisplay,
              color: function(e) {
                return de().value ? "#414243" : "#e4e7ed";
              }
            }
          },
          y: {
            display: this.scalesYDisplay,
            title: {
              display: !0,
              text: this.scalesYLabel
            },
            grid: {
              display: this.gridDisplay,
              color: function(e) {
                return de().value ? "#414243" : "#e4e7ed";
              }
            }
          }
        }
      };
    }
  }
});
function nf(e, t, a, l, o, i) {
  const s = X("chart");
  return n(), v("div", {
    ref: "chartRef",
    style: le(`width: ${e.width ? e.width + "px" : "100%"}; height: ${e.height ? e.height + "px" : "100%"}`)
  }, [
    e.mockup && e.buildState ? (n(), h(s, {
      key: 0,
      type: e.type,
      data: e.dataMockup,
      options: e.optionsMockup
    }, null, 8, ["type", "data", "options"])) : (n(), v(L, { key: 1 }, [
      e.showChart ? (n(), h(s, {
        key: 0,
        type: e.type,
        data: e.dataChart,
        options: e.options
      }, null, 8, ["type", "data", "options"])) : b("", !0)
    ], 64))
  ], 4);
}
const Rw = /* @__PURE__ */ U(of, [["render", nf]]), sf = O({
  name: "SdApexChart",
  components: { ApexChart: mr },
  props: {
    sqlId: {
      type: String,
      required: !0
    },
    params: {
      type: Object,
      default: {}
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    type: {
      type: String
      //timeline,pyramid,boxPlot
    },
    title: {
      type: String,
      default: "Chart"
    },
    titleDisplay: {
      type: Boolean,
      default: !0
    },
    gridDisplay: {
      type: Boolean,
      default: !0
    },
    gridCustom: {
      type: Object,
      default: {}
    },
    legendDisplay: {
      type: Boolean,
      default: !0
    },
    legendCustom: {
      type: Object,
      default: {}
    },
    scalesXDisplay: {
      type: Boolean,
      default: !0
    },
    scalesXLabel: {
      type: String,
      default: ""
    },
    scalesXCustom: {
      type: Object,
      default: {}
    },
    xField: {
      type: String,
      default: ""
    },
    xType: {
      type: String,
      default: "category"
    },
    scalesYDisplay: {
      type: Boolean,
      default: !0
    },
    scalesYLabel: {
      type: String,
      default: ""
    },
    scalesYCustom: {
      type: Object,
      default: {}
    },
    yDataset: {
      type: Array,
      default: []
    },
    customOptions: {
      type: Object,
      default: {}
    },
    userState: {
      type: Object,
      required: !0
    },
    mockup: {
      type: Boolean,
      default: !1
    },
    dataLabelsShow: {
      type: Boolean,
      default: !1
    },
    toolbarShow: {
      type: Boolean,
      default: !1
    },
    zoomEnable: {
      type: Boolean,
      default: !0
    },
    tooltipShow: {
      type: Boolean,
      default: !0
    },
    buildState: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      // data: {
      // 	datasets: [],
      // } as ChartData,
      options: {},
      dataMockup: [
        { name: "Count", type: "bar", data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11] },
        { name: "Value", type: "line", data: [80, 40, 20, 12, 11, 40, 20, 12, 39, 10, 40, 39] }
      ],
      optionsMockup: {},
      defaultParams: this.params,
      rawData: [],
      loadEnable: !1,
      preLoading: !1,
      showChart: !1,
      apiUrl: "",
      isDark: de(),
      useUserState: this.$props.userState
    };
  },
  watch: {
    isDark: {
      deep: !1,
      handler(e) {
        this.createOptions(), this.optionsMockup = this.createOpMockup();
      }
    }
  },
  computed: {
    color() {
      return de().value ? "#414243" : "#e4e7ed";
    },
    dataChart() {
      let e = [];
      if (this.yDataset && this.yDataset.length > 0)
        for (const [t, a] of this.yDataset.entries()) {
          const l = a.custom ? a.custom : {}, o = this.rawData.map((i) => {
            if (a.type === "heatmap" || a.type === "treemap") {
              if (i[a.field] && i[this.xField])
                return { x: i[this.xField], y: i[a.field] };
            } else if (i[a.field])
              return i[a.field];
          });
          a.type === "radialBar" ? e = o : e.push({
            data: o,
            name: a.name ? a.name : "Unit" + t,
            type: a.type ? a.type : "bar",
            color: a.color && Object.keys(a.color).length > 0 ? a.color : void 0,
            hidden: !!a.hidden,
            zIndex: a.zIndex != null || a.zIndex != null ? a.zIndex : void 0,
            group: a.group ? a.group : void 0,
            ...l
          });
        }
      return e;
    }
  },
  created() {
    this.apiUrl = "";
  },
  mounted() {
    this.buildState || (this.loadEnable = !0), this.optionsMockup = this.createOpMockup(), this.initdata();
  },
  unmounted() {
  },
  setup(e, t) {
    return {
      chartRef: q()
    };
  },
  methods: {
    async initdata() {
      const e = {
        providerId: this.sqlId,
        providerType: fe.SQL,
        params: this.params
      };
      if (this.rawData = [], this.loadEnable) {
        const t = await at(e, !1, this.useUserState);
        t && t.response && t.data && t.data.data && (this.rawData = P(t.data.data), this.xField && (this.createOptions(), this.showChart = !0));
      }
    },
    createOptions() {
      const e = this.rawData.map((t) => {
        if (t[this.xField])
          return t[this.xField];
      });
      this.options = {
        chart: {
          type: this.type ? this.type : void 0,
          toolbar: {
            show: this.toolbarShow
          },
          zoom: {
            enabled: this.zoomEnable
          },
          background: "transparent"
        },
        title: {
          text: this.titleDisplay ? this.title : void 0
        },
        legend: {
          show: this.legendDisplay,
          ...this.legendCustom
        },
        grid: {
          show: this.gridDisplay,
          borderColor: de().value ? "#414243" : "#e4e7ed",
          ...this.gridCustom
        },
        dataLabels: {
          enabled: this.dataLabelsShow
        },
        labels: this.type === "radialBar" && e ? e : void 0,
        xaxis: {
          type: this.xType,
          categories: e || [],
          title: {
            text: this.scalesXLabel
          },
          axisBorder: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          axisTicks: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          ...this.scalesXCustom
        },
        yaxis: {
          show: this.scalesYDisplay,
          title: {
            text: this.scalesYLabel
          },
          axisBorder: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          axisTicks: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          ...this.scalesYCustom
        },
        tooltip: {
          enabled: this.tooltipShow,
          theme: "dark"
        },
        theme: {
          mode: de().value ? "dark" : "light"
        },
        ...this.customOptions
      };
    },
    createOpMockup() {
      return {
        chart: {
          toolbar: {
            show: this.toolbarShow
          },
          zoom: {
            enabled: this.zoomEnable
          },
          background: "transparent"
        },
        title: {
          text: this.titleDisplay ? this.title : void 0
        },
        legend: {
          show: this.legendDisplay,
          ...this.legendCustom
        },
        dataLabels: {
          enabled: this.dataLabelsShow
        },
        grid: {
          show: this.gridDisplay,
          borderColor: de().value ? "#414243" : "#e4e7ed",
          ...this.gridCustom
        },
        xaxis: {
          type: this.xType,
          categories: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          title: {
            text: this.scalesXLabel
          },
          axisBorder: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          axisTicks: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          ...this.scalesXCustom
        },
        yaxis: {
          show: this.scalesYDisplay,
          title: {
            text: this.scalesYLabel
          },
          axisBorder: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          axisTicks: {
            color: de().value ? "#414243" : "#e4e7ed"
          },
          ...this.scalesYCustom
        },
        tooltip: {
          enabled: this.tooltipShow,
          theme: "dark"
        },
        theme: {
          mode: de().value ? "dark" : "light"
        },
        ...this.customOptions
      };
    }
  }
});
function rf(e, t, a, l, o, i) {
  const s = X("ApexChart");
  return n(), v("div", {
    ref: "chartRef",
    style: le(`width: ${e.width ? e.width + "px" : "100%"}; height: ${e.height ? e.height + "px" : "100%"}`)
  }, [
    e.mockup && e.buildState ? (n(), h(s, {
      key: 0,
      height: "100%",
      options: e.optionsMockup,
      series: e.dataMockup
    }, null, 8, ["options", "series"])) : (n(), v(L, { key: 1 }, [
      e.showChart ? (n(), h(s, {
        key: 0,
        height: "100%",
        options: e.options,
        series: e.dataChart
      }, null, 8, ["options", "series"])) : b("", !0)
    ], 64))
  ], 4);
}
const zw = /* @__PURE__ */ U(sf, [["render", rf]]), df = O({
  name: "SdExportData",
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: null,
    dataProvider: {
      type: Object,
      required: !0
    },
    fileName: {
      type: String,
      default: "Export",
      required: !0
    },
    dynamicName: {
      type: String,
      default: ""
    },
    popupName: {
      type: String,
      default: "Export Data"
    },
    popupWidth: {
      type: String,
      default: "50%"
    },
    backdrop: {
      type: Boolean,
      default: !1
    },
    cancelCallback: {
      type: Function,
      required: !0
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      resizeCleanup: null,
      fName: "",
      fullName: "",
      filePath: "",
      showFile: !1,
      popupWidthdefault: this.popupWidth
    };
  },
  created() {
  },
  computed: {
    showPopupFlag: {
      get() {
        return this.modelValue;
      },
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t), this.$emit("change", e);
      }
    }
  },
  setup(e, t) {
    return {};
  },
  mounted() {
    this.resizeCleanup = Pe(() => {
      this.$nextTick(() => {
        this.popupWidthdefault = oe(this.popupWidth);
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    handleOpen() {
      const e = Da.service({ lock: !0, text: "Loading", background: "rgba(0, 0, 0, 0.7)", fullscreen: !0 });
      this.fullName = `${this.fileName}`, this.fName = `${this.fileName}`, this.showFile = !1, this.userState.exportData(
        { sdProvider: this.dataProvider, fileName: this.fileName, dynamicName: this.dynamicName },
        (t) => {
          this.fName = `${t.fileName}`, this.fullName = `${t.fileName}`, this.filePath = `${t.filePath}`, this.showFile = !0, e.close();
        },
        () => {
          e.close();
        }
      ), this.popupWidthdefault = oe(this.popupWidth);
    },
    handleCancel() {
      this.cancelCallback && this.cancelCallback();
    },
    async handleClose() {
      if (this.showFile) {
        this.showFile = !1;
        const e = `export/${this.userState.user?.username}`;
        let t = { filePath: this.filePath, fileName: this.fName, fileType: "json", fileGroup: e, fileId: "" };
        await ce.delete(`${this.userState.host}/v1/files/remove-one`, {
          data: t,
          headers: {
            Authorization: `Bearer ${this.userState.user?.token}`
          }
        }).then((a) => {
        }).catch((a) => {
          console.log(a);
        });
      }
    }
  }
}), uf = {
  role: "heading",
  class: "el-dialog__title"
}, pf = { class: "dialog-footer" };
function mf(e, t, a, l, o, i) {
  const s = X("Document"), u = qe, m = Ea, f = ie, c = Ce;
  return n(), h(c, {
    title: e.popupName,
    modelValue: e.showPopupFlag,
    "onUpdate:modelValue": t[1] || (t[1] = (F) => e.showPopupFlag = F),
    width: e.popupWidthdefault,
    "show-close": !0,
    class: "dialog-grid dialog-form",
    "before-close": e.handleCancel,
    onOpen: e.handleOpen,
    onClose: e.handleClose,
    "append-to-body": "",
    "close-on-click-modal": e.backdrop,
    "close-on-press-escape": !0,
    "destroy-on-close": !0
  }, {
    header: r(({ close: F, titleId: D, titleClass: g }) => [
      $("span", uf, A(e.popupName), 1)
    ]),
    footer: r(() => [
      $("div", pf, [
        d(f, {
          onClick: t[0] || (t[0] = (F) => e.showPopupFlag = !1)
        }, {
          default: r(() => [...t[3] || (t[3] = [
            I("Close", -1)
          ])]),
          _: 1
        })
      ])
    ]),
    default: r(() => [
      re(e.$slots, "popup", {}, () => [
        t[2] || (t[2] = I(" Download click here => ", -1)),
        e.showFile ? (n(), h(m, {
          key: 0,
          type: "primary",
          href: e.filePath,
          target: "_blank"
        }, {
          default: r(() => [
            d(u, { class: "mr-1" }, {
              default: r(() => [
                d(s)
              ]),
              _: 1
            }),
            I(" " + A(e.fullName), 1)
          ]),
          _: 1
        }, 8, ["href"])) : b("", !0)
      ])
    ]),
    _: 3
  }, 8, ["title", "modelValue", "width", "before-close", "onOpen", "onClose", "close-on-click-modal"]);
}
const hf = /* @__PURE__ */ U(df, [["render", mf]]), ff = O({
  name: "SdGridSortHeader",
  props: {
    prop: {
      type: String,
      required: !0
    },
    label: {
      type: String,
      default: ""
    },
    sortable: {
      type: Boolean,
      default: !1
    },
    // current multi-sort state (= optionProvider.orderBy)
    sortState: {
      type: Array,
      default: () => []
    }
  },
  emits: ["sort"],
  computed: {
    // find this column's index in sortState (compare with backticks stripped — supports both `col` and col)
    sortIndex() {
      return this.sortState.findIndex((e) => this.normalize(e.column) === this.prop);
    },
    direction() {
      const e = this.sortState[this.sortIndex];
      return e ? String(e.sort).toUpperCase() === "DESC" ? "DESC" : "ASC" : null;
    },
    // sort priority (1-based), shown when sorting by multiple columns
    orderNo() {
      return this.sortIndex + 1;
    },
    showOrder() {
      return this.sortState.length > 1;
    }
  },
  methods: {
    normalize(e) {
      return String(e).replace(/`/g, "");
    },
    // dir: 'ASC'/'DESC' = set direction directly (caret click); undefined = cycle (label click)
    onSort(e, t) {
      this.$emit("sort", { prop: this.prop, shiftKey: t.shiftKey, dir: e });
    }
  }
}), cf = { class: "sd-sort-th__label" }, bf = { class: "caret-wrapper" }, gf = {
  key: 0,
  class: "sd-sort-th__order"
}, yf = { key: 1 };
function vf(e, t, a, l, o, i) {
  return e.sortable ? (n(), v("span", {
    key: 0,
    class: Y(["sd-sort-th", { ascending: e.direction === "ASC", descending: e.direction === "DESC" }]),
    onClick: t[2] || (t[2] = j((s) => e.onSort(void 0, s), ["stop"])),
    title: "Click to cycle sort · Click a caret to set direction · Shift+click to sort by multiple columns"
  }, [
    $("span", cf, A(e.label), 1),
    $("span", bf, [
      $("i", {
        class: "sort-caret ascending",
        onClick: t[0] || (t[0] = j((s) => e.onSort("ASC", s), ["stop"]))
      }),
      $("i", {
        class: "sort-caret descending",
        onClick: t[1] || (t[1] = j((s) => e.onSort("DESC", s), ["stop"]))
      })
    ]),
    e.direction && e.showOrder ? (n(), v("span", gf, A(e.orderNo), 1)) : b("", !0)
  ], 2)) : (n(), v("span", yf, A(e.label), 1));
}
const zt = /* @__PURE__ */ U(ff, [["render", vf], ["__scopeId", "data-v-310dbc77"]]), wf = O({
  name: "SdGridColumnBy",
  components: { SdGridSortHeader: zt },
  props: {
    columnProp: {
      type: String,
      default: "created_by"
    },
    columnLabel: {
      type: String,
      default: "Created By"
    },
    width: {
      type: String,
      default: "180"
    },
    // เปิด custom multi-sort (รับ sortState + emit sort) — ใช้ใน SdCrudGrid
    customSort: {
      type: Boolean,
      default: !1
    },
    sortable: {
      type: Boolean,
      default: !0
    },
    // field ที่ใช้ sort จริง — created_by เป็น object {name,...} จึง sort ด้วย `<columnProp>.name` เป็น default
    sortProp: {
      type: String,
      default: ""
    },
    // current multi-sort state (= optionProvider.orderBy)
    sortState: {
      type: Array,
      default: () => []
    },
    sortDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["sort"],
  computed: {
    sortColumn() {
      return this.sortProp || `${this.columnProp}.name`;
    }
  },
  methods: {
    getName(e) {
      const t = e[this.columnProp] && e[this.columnProp].name ? e[this.columnProp].name : "";
      return t != "" ? t.split(" (")[0] : null;
    },
    getFullName(e) {
      return e[this.columnProp] && e[this.columnProp].name ? e[this.columnProp].name : null;
    }
  }
});
function Sf(e, t, a, l, o, i) {
  const s = zt, u = sl, m = Xe;
  return e.customSort ? (n(), h(m, {
    key: 0,
    prop: e.columnProp,
    label: e.columnLabel,
    "min-width": e.width,
    align: "left"
  }, {
    header: r(() => [
      d(s, {
        prop: e.sortColumn,
        label: e.columnLabel,
        sortable: !e.sortDisabled && e.sortable,
        "sort-state": e.sortState,
        onSort: t[0] || (t[0] = (f) => e.$emit("sort", f))
      }, null, 8, ["prop", "label", "sortable", "sort-state"])
    ]),
    default: r((f) => [
      d(u, {
        content: e.getFullName(f.row)
      }, {
        default: r(() => [
          I(A(e.getName(f.row)), 1)
        ]),
        _: 2
      }, 1032, ["content"])
    ]),
    _: 1
  }, 8, ["prop", "label", "min-width"])) : (n(), h(m, {
    key: 1,
    prop: e.columnProp,
    label: e.columnLabel,
    width: e.width,
    align: "left"
  }, {
    default: r((f) => [
      d(u, {
        content: e.getFullName(f.row)
      }, {
        default: r(() => [
          I(A(e.getName(f.row)), 1)
        ]),
        _: 2
      }, 1032, ["content"])
    ]),
    _: 1
  }, 8, ["prop", "label", "width"]));
}
const bi = /* @__PURE__ */ U(wf, [["render", Sf]]), Ff = O({
  name: "SdGridColumnDate",
  components: { SdGridSortHeader: zt },
  props: {
    columnProp: {
      type: String,
      default: "created_at"
    },
    columnLabel: {
      type: String,
      default: "Created"
    },
    sortable: {
      type: Boolean,
      default: !0
    },
    width: {
      type: String,
      default: "110"
    },
    // เปิด custom multi-sort (รับ sortState + emit sort) — ใช้ใน SdCrudGrid; ถ้า false คง native sortable เดิม
    customSort: {
      type: Boolean,
      default: !1
    },
    // current multi-sort state (= optionProvider.orderBy)
    sortState: {
      type: Array,
      default: () => []
    },
    sortDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["sort"],
  computed: {},
  methods: {
    thDate(e) {
      return e[this.columnProp] ? we(e[this.columnProp]).format("DD/MM/YYYY") : null;
    }
  }
});
function _f(e, t, a, l, o, i) {
  const s = zt, u = Xe;
  return e.customSort ? (n(), h(u, {
    key: 0,
    prop: e.columnProp,
    label: e.columnLabel,
    "min-width": e.width,
    align: "center",
    sortable: !1
  }, {
    header: r(() => [
      d(s, {
        prop: e.columnProp,
        label: e.columnLabel,
        sortable: !e.sortDisabled && e.sortable,
        "sort-state": e.sortState,
        onSort: t[0] || (t[0] = (m) => e.$emit("sort", m))
      }, null, 8, ["prop", "label", "sortable", "sort-state"])
    ]),
    default: r((m) => [
      I(A(e.thDate(m.row)), 1)
    ]),
    _: 1
  }, 8, ["prop", "label", "min-width"])) : (n(), h(u, {
    key: 1,
    prop: e.columnProp,
    label: e.columnLabel,
    width: e.width,
    align: "center",
    sortable: e.sortable
  }, {
    default: r((m) => [
      I(A(e.thDate(m.row)), 1)
    ]),
    _: 1
  }, 8, ["prop", "label", "width", "sortable"]));
}
const gi = /* @__PURE__ */ U(Ff, [["render", _f]]), kf = O({
  name: "SdGridColumnDynamic",
  components: { SdGridColumnDate: gi, SdGridColumnBy: bi, SdValueWidget: ha, SdGridSortHeader: zt },
  props: {
    formModel: {
      type: Object,
      required: !0
    },
    systemColumn: {
      type: Boolean,
      default: !0
    },
    rawValue: {
      type: Boolean,
      default: !1
    },
    subformWidth: {
      type: Number,
      default: 600
    },
    displayFields: {
      type: Array,
      default: void 0
    },
    editColumn: {
      type: Array
    },
    keyId: {
      type: String,
      default: "_id"
    },
    rowKey: {
      type: String,
      default: "dataid"
    },
    userState: {
      type: Object,
      required: !0
    },
    afterSave: Function,
    // multi-sort state (= optionProvider.orderBy), passed down so headers can render the indicator
    sortState: {
      type: Array,
      default: () => []
    },
    // disable custom sort (e.g. group mode) — headers become non-clickable
    sortDisabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["sort"],
  computed: {
    filters() {
      return (e, t) => {
        if (t.filters) {
          let a = t.filtersItems ? t.filtersItems : void 0;
          if (this.formModel.form_db.data_list[t.fieldName] && !a) {
            a = [];
            for (const l in this.formModel.form_db.data_list[t.fieldName])
              if (Object.prototype.hasOwnProperty.call(this.formModel.form_db.data_list[t.fieldName], l)) {
                const o = this.formModel.form_db.data_list[t.fieldName][l];
                a.push({
                  value: o.value,
                  text: `${o.label}`
                });
              }
          } else if (e[t.fieldName].component == "switch-input" && !a)
            return [
              { value: !0, text: "True" },
              { value: !1, text: "False" }
            ];
          return a;
        } else if (this.getschemaValue(e, "filters", t.fieldName, !1)) {
          if (this.formModel.form_db.data_list[t.fieldName]) {
            let a = [];
            for (const l in this.formModel.form_db.data_list[t.fieldName])
              if (Object.prototype.hasOwnProperty.call(this.formModel.form_db.data_list[t.fieldName], l)) {
                const o = this.formModel.form_db.data_list[t.fieldName][l];
                a.push({
                  value: o.value,
                  text: `${o.label}`
                });
              }
            return a;
          } else if (e[t.fieldName].component == "switch-input")
            return [
              { value: !0, text: "True" },
              { value: !1, text: "False" }
            ];
        }
      };
    },
    htmlValue() {
      return (e, t, a) => {
        let l = yl(t);
        if (!this.rawValue)
          for (const o in t)
            l[`{{${o}}}`] = Ee(t[o], o, this.formModel);
        if (a.expressions)
          try {
            const i = `return ${ue(a.expressions, l)}`, s = new Function("row", ..._e, i);
            l["{{expressions}}"] = s.call(this.formModel, t);
          } catch (o) {
            l["{{expressions}}"] = o;
          }
        else
          l["{{expressions}}"] = "";
        return Rt(ue(e, l));
      };
    },
    columnFields() {
      return this.displayFields ? this.displayFields : this.formDisplayConvent(this.formModel.form_options.display_fields);
    }
  },
  data() {
    return {
      currRow: {}
    };
  },
  async created() {
  },
  methods: {
    formDisplayConvent(e) {
      let t = [];
      return e.forEach((a) => {
        t.push({ fieldName: a });
      }), t;
    },
    afterSubmit(e, t) {
      this.afterSave && this.afterSave(e, t, this.currRow);
    },
    async editChange(e) {
      e.xversionx = this.formModel.form_version;
      const t = await yt(this.formModel.dataid, e[this.keyId], e, 1, this.userState), a = t.data;
      a ? (a[this.rowKey] = e[this.keyId], this.afterSubmit(a, !1)) : B.warning(t.message);
    },
    backupRow(e) {
      this.currRow = P(e);
    },
    getschemaValue(e, t, a, l) {
      if (e[a]) {
        const o = e[a];
        return o[t] ? o[t] : l;
      }
      return l;
    },
    getValue(e, t, a) {
      let l = pe(e, t);
      return this.rawValue ? l ?? null : Ee(l, t, a);
    },
    getValueType(e, t, a) {
      let l = pe(e, t);
      if (this.rawValue)
        return l ?? null;
      if (typeof l == "boolean")
        return l ? "True" : "False";
      if (typeof l == "object")
        if (l.join && Array.isArray(l)) {
          const o = l;
          let i = [];
          return o.forEach((s, u) => {
            a.format && a.valueFormat ? i.push(we(s, a.valueFormat).format(a.format)) : i.push(s);
          }), i.length > 2 ? i.join(", ") : i.join(" - ");
        } else
          return l.label ? l.label : l;
      else if (typeof l == "number") {
        const o = Number(l);
        if (!isNaN(o)) {
          const i = Number(a.format);
          return isNaN(i) ? o.toLocaleString("en-US") : o.toLocaleString("en-US", { minimumFractionDigits: i, maximumFractionDigits: i });
        }
        return l;
      } else if (typeof l == "string" && a.format && a.valueFormat)
        return we(l, a.valueFormat).format(a.format);
      return l;
    }
  }
}), Cf = ["innerHTML"], Df = ["innerHTML"];
function If(e, t, a, l, o, i) {
  const s = zt, u = ha, m = Xe, f = ea, c = Te, F = At, D = Io, g = We, C = gi, _ = bi;
  return n(), v(L, null, [
    e.columnFields && Object.keys(e.columnFields).length > 0 ? (n(), v(L, { key: 0 }, [
      e.formModel && e.formModel.form_db && e.formModel.form_db.schema && Object.keys(e.formModel.form_db.schema).length > 0 ? (n(!0), v(L, { key: 0 }, J(e.columnFields, (p) => (n(), v(L, null, [
        e.formModel.form_db.schema[p.fieldName] && !p.htmlValue ? (n(), v(L, { key: 0 }, [
          e.formModel.form_db.schema[p.fieldName].subField && e.formModel.form_db.schema[p.fieldName].component == "object-group" && ["Object"].includes(e.getschemaValue(e.formModel.form_db.schema, "type", p.fieldName, "")) && e.formModel.form_db.schema[p.fieldName].widgetDisplay && e.formModel.form_db.schema[p.fieldName].widgetDisplay == "widget" && !e.rawValue ? (n(), h(m, {
            key: 0,
            "min-width": 80,
            label: p.label || e.getschemaValue(e.formModel.form_db.schema, "label", p.fieldName, ""),
            width: p.width || e.getschemaValue(e.formModel.form_db.schema, "width", p.fieldName, ""),
            align: p.align || e.getschemaValue(e.formModel.form_db.schema, "align", p.fieldName, "left"),
            sortable: !1,
            filters: e.filters(e.formModel.form_db.schema, p),
            fixed: p.fixed || e.getschemaValue(e.formModel.form_db.schema, "fixed", p.fieldName, !1)
          }, {
            default: r((y) => [
              e.formModel.form_db.schema[p.fieldName].subField ? (n(!0), v(L, { key: 0 }, J(e.formModel.form_db.schema[p.fieldName].subField, (S) => (n(), h(m, {
                prop: `${p.fieldName}.${S.fieldName}`,
                "column-key": `${p.fieldName}.${S.fieldName}`,
                "min-width": 80,
                label: e.getschemaValue(e.formModel.form_db.schema[p.fieldName].subField, "label", S.fieldName, ""),
                width: e.getschemaValue(e.formModel.form_db.schema[p.fieldName].subField, "width", S.fieldName, ""),
                align: e.getschemaValue(e.formModel.form_db.schema[p.fieldName].subField, "align", S.fieldName, "left"),
                sortable: !1,
                fixed: e.getschemaValue(e.formModel.form_db.schema[p.fieldName].subField, "fixed", S.fieldName, !1)
              }, {
                header: r(() => [
                  d(s, {
                    prop: `${p.fieldName}.${S.fieldName}`,
                    label: e.getschemaValue(e.formModel.form_db.schema[p.fieldName].subField, "label", S.fieldName, ""),
                    sortable: !e.sortDisabled && e.getschemaValue(e.formModel.form_db.schema[p.fieldName].subField, "sortable", S.fieldName, !1),
                    "sort-state": e.sortState,
                    onSort: t[0] || (t[0] = (N) => e.$emit("sort", N))
                  }, null, 8, ["prop", "label", "sortable", "sort-state"])
                ]),
                default: r((N) => [
                  d(u, {
                    "sdform-model": e.formModel,
                    "sub-schema": e.formModel.form_db.schema[p.fieldName].subField,
                    "field-name": S.fieldName,
                    "parent-name": p.fieldName,
                    "subform-width": e.subformWidth,
                    "raw-data": N.row,
                    "raw-value": e.rawValue,
                    "user-state": e.userState
                  }, null, 8, ["sdform-model", "sub-schema", "field-name", "parent-name", "subform-width", "raw-data", "raw-value", "user-state"])
                ]),
                _: 2
              }, 1032, ["prop", "column-key", "label", "width", "align", "fixed"]))), 256)) : b("", !0)
            ]),
            _: 2
          }, 1032, ["label", "width", "align", "filters", "fixed"])) : (n(), h(m, {
            key: 1,
            prop: p.fieldName,
            "column-key": p.fieldName,
            "min-width": 80,
            label: p.label || e.getschemaValue(e.formModel.form_db.schema, "label", p.fieldName, ""),
            width: p.width || e.getschemaValue(e.formModel.form_db.schema, "width", p.fieldName, ""),
            align: p.align || e.getschemaValue(e.formModel.form_db.schema, "align", p.fieldName, "left"),
            sortable: !1,
            filters: e.filters(e.formModel.form_db.schema, p),
            fixed: p.fixed || e.getschemaValue(e.formModel.form_db.schema, "fixed", p.fieldName, !1)
          }, {
            header: r(() => [
              d(s, {
                prop: p.fieldName,
                label: p.label || e.getschemaValue(e.formModel.form_db.schema, "label", p.fieldName, ""),
                sortable: !e.sortDisabled && (p.sortable || e.getschemaValue(e.formModel.form_db.schema, "sortable", p.fieldName, !1)),
                "sort-state": e.sortState,
                onSort: t[1] || (t[1] = (y) => e.$emit("sort", y))
              }, null, 8, ["prop", "label", "sortable", "sort-state"])
            ]),
            default: r((y) => [
              y.row[e.keyId] && e.editColumn && e.editColumn.includes(p.fieldName) && ["number-input", "text-input", "switch-input", "select-input", "radio-input"].includes(e.formModel.form_db.schema[p.fieldName].component) ? (n(), v(L, { key: 0 }, [
                e.formModel.form_db.schema[p.fieldName].component == "number-input" ? (n(), h(f, ae({
                  key: 0,
                  modelValue: y.row[p.fieldName],
                  "onUpdate:modelValue": (S) => y.row[p.fieldName] = S,
                  style: { width: "100%" }
                }, { ref_for: !0 }, e.formModel.form_db.schema[p.fieldName].inputOptions ? e.formModel.form_db.schema[p.fieldName].inputOptions : {}, {
                  onChange: (S) => e.editChange(y.row),
                  onFocus: (S) => e.backupRow(y.row)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange", "onFocus"])) : ["text-input"].includes(e.formModel.form_db.schema[p.fieldName].component) ? (n(), h(c, ae({
                  key: 1,
                  modelValue: y.row[p.fieldName],
                  "onUpdate:modelValue": (S) => y.row[p.fieldName] = S
                }, { ref_for: !0 }, e.formModel.form_db.schema[p.fieldName].inputOptions ? e.formModel.form_db.schema[p.fieldName].inputOptions : {}, {
                  onChange: (S) => e.editChange(y.row),
                  onFocus: (S) => e.backupRow(y.row)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange", "onFocus"])) : e.formModel.form_db.schema[p.fieldName].component == "switch-input" ? (n(), h(F, ae({
                  key: 2,
                  modelValue: y.row[p.fieldName],
                  "onUpdate:modelValue": (S) => y.row[p.fieldName] = S,
                  "active-text": "True"
                }, { ref_for: !0 }, e.formModel.form_db.schema[p.fieldName].inputOptions ? e.formModel.form_db.schema[p.fieldName].inputOptions : {}, {
                  onChange: (S) => e.editChange(y.row),
                  onFocus: (S) => e.backupRow(y.row)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange", "onFocus"])) : ["select-input", "radio-input"].includes(e.formModel.form_db.schema[p.fieldName].component) && e.formModel.form_db.data_list[p.fieldName] && !e.getschemaValue(e.formModel.form_db.schema, "multiple", p.fieldName, !1) ? (n(), h(D, ae({
                  key: 3,
                  modelValue: y.row[p.fieldName],
                  "onUpdate:modelValue": (S) => y.row[p.fieldName] = S
                }, { ref_for: !0 }, e.formModel.form_db.schema[p.fieldName].inputOptions ? e.formModel.form_db.schema[p.fieldName].inputOptions : {}, {
                  onChange: (S) => e.editChange(y.row),
                  onFocus: (S) => e.backupRow(y.row),
                  options: e.formModel.form_db.data_list[p.fieldName]
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onChange", "onFocus", "options"])) : b("", !0)
              ], 64)) : (n(), h(u, {
                key: 1,
                "sdform-model": e.formModel,
                "field-name": p.fieldName,
                "field-setting": p,
                "subform-width": e.subformWidth,
                "raw-data": y.row,
                "raw-value": e.rawValue,
                "user-state": e.userState
              }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "raw-value", "user-state"]))
            ]),
            _: 2
          }, 1032, ["prop", "column-key", "label", "width", "align", "filters", "fixed"]))
        ], 64)) : (n(), h(m, {
          key: 1,
          prop: p.fieldName,
          "column-key": p.fieldName,
          "min-width": 80,
          label: p.label || "",
          width: p.width || "",
          align: p.align || "left",
          fixed: p.fixed || !1
        }, {
          default: r((y) => [
            d(g, {
              type: p.textType || void 0,
              truncated: !p.wrapText || void 0,
              "line-clamp": p.wrapText || void 0
            }, {
              default: r(() => [
                p.htmlValue ? (n(), v("span", {
                  key: 0,
                  innerHTML: e.htmlValue(p.htmlValue, y.row, p)
                }, null, 8, Cf)) : b("", !0)
              ]),
              _: 2
            }, 1032, ["type", "truncated", "line-clamp"])
          ]),
          _: 2
        }, 1032, ["prop", "column-key", "label", "width", "align", "fixed"]))
      ], 64))), 256)) : (n(!0), v(L, { key: 1 }, J(e.columnFields, (p) => (n(), v(L, null, [
        p.htmlValue ? (n(), h(m, {
          key: 1,
          prop: p.fieldName,
          "column-key": p.fieldName,
          "min-width": 80,
          label: p.label || "",
          width: p.width || "",
          align: p.align || "left",
          fixed: p.fixed || !1
        }, {
          default: r((y) => [
            d(g, {
              type: p.textType || void 0,
              truncated: !p.wrapText || void 0,
              "line-clamp": p.wrapText || void 0
            }, {
              default: r(() => [
                p.htmlValue ? (n(), v("span", {
                  key: 0,
                  innerHTML: e.htmlValue(p.htmlValue, y.row, p)
                }, null, 8, Df)) : b("", !0)
              ]),
              _: 2
            }, 1032, ["type", "truncated", "line-clamp"])
          ]),
          _: 2
        }, 1032, ["prop", "column-key", "label", "width", "align", "fixed"])) : (n(), h(m, {
          key: 0,
          prop: p.fieldName,
          "column-key": p.fieldName,
          "min-width": 80,
          label: p.label || "",
          width: p.width || "",
          align: p.align || "left",
          sortable: !1,
          filters: p.filters ? p.filtersItems : void 0,
          fixed: p.fixed || !1
        }, {
          header: r(() => [
            d(s, {
              prop: p.fieldName,
              label: p.label || "",
              sortable: !e.sortDisabled && (p.sortable || !1),
              "sort-state": e.sortState,
              onSort: t[2] || (t[2] = (y) => e.$emit("sort", y))
            }, null, 8, ["prop", "label", "sortable", "sort-state"])
          ]),
          default: r((y) => [
            e.rawValue ? (n(), v(L, { key: 1 }, [
              I(A(e.getValueType(y.row, p.fieldName, p)), 1)
            ], 64)) : (n(), h(g, {
              key: 0,
              type: p.textType ? p.textType : "",
              truncated: !p.wrapText || void 0,
              "line-clamp": p.wrapText || void 0
            }, {
              default: r(() => [
                I(A(e.getValueType(y.row, p.fieldName, p)), 1)
              ]),
              _: 2
            }, 1032, ["type", "truncated", "line-clamp"]))
          ]),
          _: 2
        }, 1032, ["prop", "column-key", "label", "width", "align", "filters", "fixed"]))
      ], 64))), 256))
    ], 64)) : (n(), v(L, { key: 1 }, [
      e.formModel && e.formModel.form_db && e.formModel.form_db.schema ? (n(!0), v(L, { key: 0 }, J(e.formModel.form_db.schema, (p) => (n(), h(m, {
        prop: p.fieldName,
        "column-key": p.fieldName,
        "min-width": 80,
        label: e.getschemaValue(e.formModel.form_db.schema, "label", p.fieldName, ""),
        width: e.getschemaValue(e.formModel.form_db.schema, "width", p.fieldName, ""),
        align: e.getschemaValue(e.formModel.form_db.schema, "align", p.fieldName, "left"),
        sortable: !1,
        filters: e.filters(e.formModel.form_db.schema, p),
        fixed: e.getschemaValue(e.formModel.form_db.schema, "fixed", p.fieldName, !1)
      }, {
        header: r(() => [
          d(s, {
            prop: p.fieldName,
            label: e.getschemaValue(e.formModel.form_db.schema, "label", p.fieldName, ""),
            sortable: !e.sortDisabled && e.getschemaValue(e.formModel.form_db.schema, "sortable", p.fieldName, !1),
            "sort-state": e.sortState,
            onSort: t[3] || (t[3] = (y) => e.$emit("sort", y))
          }, null, 8, ["prop", "label", "sortable", "sort-state"])
        ]),
        default: r((y) => [
          d(u, {
            "sdform-model": e.formModel,
            "field-name": p.fieldName,
            "field-setting": p,
            "subform-width": e.subformWidth,
            "raw-data": y.row,
            "raw-value": e.rawValue,
            "user-state": e.userState
          }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "raw-value", "user-state"])
        ]),
        _: 2
      }, 1032, ["prop", "column-key", "label", "width", "align", "filters", "fixed"]))), 256)) : b("", !0)
    ], 64)),
    re(e.$slots, "default"),
    e.systemColumn ? (n(), v(L, { key: 2 }, [
      e.formModel && e.formModel.form_options && e.formModel.form_options.query_tool != "disable" ? (n(), h(m, {
        key: 0,
        prop: "xrstatx",
        label: "Rstat",
        width: 100,
        align: "center"
      }, {
        default: r((p) => [
          I(A(e.getValue(p.row, "xrstatx", e.formModel)), 1)
        ]),
        _: 1
      })) : b("", !0),
      e.formModel && e.formModel.form_db ? (n(), h(C, {
        key: 1,
        "custom-sort": "",
        "sort-state": e.sortState,
        "sort-disabled": e.sortDisabled,
        onSort: t[4] || (t[4] = (p) => e.$emit("sort", p))
      }, null, 8, ["sort-state", "sort-disabled"])) : b("", !0),
      e.formModel && e.formModel.form_db ? (n(), h(_, { key: 2 })) : b("", !0)
    ], 64)) : b("", !0)
  ], 64);
}
const $f = /* @__PURE__ */ U(kf, [["render", If]]), Ta = "sdgrid:", yi = 1;
function vi(e, t) {
  try {
    localStorage.setItem(Ta + e, JSON.stringify({ v: yi, ...t }));
  } catch {
  }
}
function wi(e) {
  try {
    const t = localStorage.getItem(Ta + e);
    if (!t) return null;
    const a = JSON.parse(t);
    return !a || a.v !== yi ? (localStorage.removeItem(Ta + e), null) : a;
  } catch {
    return null;
  }
}
function Si(e) {
  try {
    localStorage.removeItem(Ta + e);
  } catch {
  }
}
const Tf = O({
  name: "SdCrudGrid",
  components: {},
  emits: ["aftersave"],
  props: {
    formId: {
      type: String,
      required: !0
    },
    // จำ page/search/filter/sort ลง localStorage — false = ปิด (พฤติกรรมเดิม),
    // true = ใช้ key อัตโนมัติ `crud:<formId>` (dynamic ต่อฟอร์ม), string = กำหนด key เอง
    stateKey: {
      type: [String, Boolean],
      default: !1
    },
    // scope เสริมของ auto key (เช่น `<hostFormId>.<varname>` จาก datagrid ในฟอร์ม)
    // — ฟอร์มเดียวกันถูกวางหลาย widget ก็แยก state กัน
    stateScope: {
      type: String,
      default: ""
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    parentId: {
      type: String,
      default: ""
    },
    params: {
      type: Object,
      default: {}
    },
    initData: {
      type: Object,
      default: {}
    },
    dataProvider: {
      type: Object,
      default: null
    },
    expandProvider: {
      type: Object
    },
    expandCountChildrenName: {
      type: String,
      default: "hasChildren"
    },
    insertBefore: {
      type: Function
    },
    updateBefore: {
      type: Function
    },
    viewBefore: {
      type: Function
    },
    beforeSave: {
      type: Function
    },
    afterDelete: {
      type: Function
    },
    allowDeleteFunc: {
      type: Function
    },
    allowCloneFunc: {
      type: Function
    },
    placeholderSearch: {
      type: String,
      default: "Search..."
    },
    actionLabel: {
      type: String,
      default: "Actions"
    },
    actionEnable: {
      type: Boolean,
      default: !0
    },
    actionCrudEnable: {
      type: Boolean,
      default: !0
    },
    totalInline: {
      type: Boolean,
      default: !0
    },
    addBtnLabel: {
      type: String,
      default: "Add"
    },
    addBtnEnable: {
      type: Boolean,
      default: !0
    },
    exportBtnEnable: {
      type: Boolean,
      default: !1
    },
    exportRowBtnEnable: {
      type: Boolean,
      default: !1
    },
    cloneEnableLabelField: {
      type: String,
      default: ""
    },
    rawdataBtnEnable: {
      type: Boolean,
      default: !1
    },
    systemColumn: {
      type: Boolean,
      default: !0
    },
    indexColumn: {
      type: Boolean,
      default: !0
    },
    actionWidth: {
      type: Number,
      default: null
    },
    subformWidth: {
      type: Number,
      default: 600
    },
    maxHeight: {
      type: [String, Number],
      default: "auto"
    },
    height: {
      type: [String, Number],
      default: "auto"
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    resizable: {
      type: Boolean,
      default: !1
    },
    iconName: {
      type: String,
      default: ""
    },
    titleEnable: {
      type: Boolean,
      default: !0
    },
    titleName: {
      type: String,
      default: ""
    },
    keyId: {
      type: String,
      default: "_id"
    },
    rowKey: {
      type: String,
      default: "dataid"
    },
    groupKey: {
      type: String
    },
    aggrColumn: {
      type: Array
    },
    sumColumn: {
      type: Array
    },
    sumLabel: {
      type: String,
      default: "Total"
    },
    sumDecimal: {
      type: Number,
      default: 0
    },
    sumAllPage: {
      type: Boolean,
      default: !1
    },
    editColumn: {
      type: Array
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    parentPath: {
      type: String,
      default: ""
    },
    enableWs: {
      type: Boolean,
      default: !0
    },
    userState: {
      type: Object,
      required: !0
    },
    displayFields: {
      type: Array,
      default: void 0
    },
    searchFields: {
      type: Array,
      default: void 0
    },
    limitRow: {
      type: Number,
      default: 30
    },
    // เปิด infinite scroll: ปิด pagination + ไม่ count total (หลบ count ช้าเมื่อข้อมูลเป็นล้าน row) แล้วโหลดเพิ่มตอน scroll
    infiniteScroll: {
      type: Boolean,
      default: !1
    },
    buildState: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      rawData: [],
      tableKey: 0,
      total: 0,
      totalPage: 0,
      offset: 0,
      loadingMore: !1,
      // กำลังโหลด batch ถัดไป (infinite scroll) — แยกจาก preLoading เพื่อไม่ให้ overlay บังทั้งตาราง
      hasMore: !0,
      // ยังมีข้อมูลให้โหลดต่อไหม (infinite scroll)
      scrollEl: null,
      // scroll wrapper ภายใน el-table ที่ผูก scroll listener ไว้
      defaultParams: {},
      defaultSort: [],
      userSorted: !1,
      // whether the user has started sorting — if not, defaultSort is just a fallback (not counted in the priority order)
      searchText: "",
      sumEnable: !1,
      sumData: {},
      preLoading: !1,
      showPopupFlag: !1,
      backdrop: !1,
      apiUrl: "",
      sdformModel: {},
      formData: {},
      formReadOnly: !1,
      optionData: {},
      isInsert: !0,
      selectIndex: 0,
      afterDeleteForm: void 0,
      titleNameForm: "",
      iconForm: "",
      allowInsert: !1,
      limit: this.limitRow,
      optionProvider: { limit: this.limitRow, page: 1 },
      useUserState: this.$props.userState,
      showExport: !1,
      showRawValue: !1,
      dpFormData: { providerId: this.formId, providerType: fe.FORM },
      dpExpandData: null,
      isExpand: !1,
      expandedRows: [],
      wsConn: void 0,
      groupId: "",
      showExportRow: !1,
      exportName: "",
      widgetId: "SdCrudGrid-" + Ut(),
      dpExportRow: {
        providerId: "",
        providerType: fe.FORM,
        options: { where: "_id = CONVERT(:id, 'objectId')" },
        params: { id: "" }
      },
      sdFunc: {},
      isFormEnable: this.providerType === "FORM",
      defaultParentId: this.parentId,
      defaultWhere: this.dataProvider && this.dataProvider.options && this.dataProvider.options.where ? this.dataProvider.options.where : ""
    };
  },
  watch: {
    params: {
      deep: !0,
      handler(e) {
        e && (e.xparentx && e._id ? delete e.xparentx : this.parentPath ? e[this.parentPath] && (e.xparentx = e[this.parentPath], this.changeParentId(e[this.parentPath])) : delete e.xparentx, this.defaultParams = { ...this.defaultParams, ...e });
      }
    },
    parentId: {
      deep: !0,
      handler(e) {
        this.changeParentId(e);
      }
    }
  },
  computed: {
    // defaultPopUpForm() {
    // 	return {
    // 		formId: this.formId,
    // 		parentId: this.defaultParentId,
    // 		cancelCallback: this.handleCancel,
    // 	};
    // },
    backdropForm() {
      return !!this.sdformModel.form_options?.backdrop;
    },
    // key จริงที่ใช้เก็บ state — '' = ปิดการจำ
    // true = auto key แบบ dynamic: `crud:<formId>[:<stateScope>][:<parentId>]`
    // แยกทั้งต่อ widget (ฟอร์มเดียวถูกเรียกซ้ำหลายจุด) และต่อ record / string = กำหนดเอง
    persistKey() {
      if (this.stateKey === !0) {
        let e = `crud:${this.formId}`;
        return this.stateScope && (e += `:${this.stateScope}`), this.defaultParentId && (e += `:${this.defaultParentId}`), e;
      }
      return typeof this.stateKey == "string" && this.stateKey !== "" ? this.stateKey : "";
    },
    actionWidthAuto() {
      let e = this.readonly ? 80 : this.groupKey ? 145 : 120;
      return this.cloneEnableLabelField && (e += 30), this.exportRowBtnEnable && (e += 30), this.actionWidth && (e += this.actionWidth), e;
    },
    totalLabel() {
      return this.total.toLocaleString();
    },
    // infinite scroll ใช้ร่วมกับ tree/lazy expand (groupKey) ไม่ได้ — fallback กลับเป็น pagination
    isInfinite() {
      return this.infiniteScroll && !this.groupKey;
    },
    // infinite ต้องมี height คงที่เพื่อให้เกิด scroll container ในตาราง — ถ้าผู้ใช้ไม่ตั้ง height/max-height เลย บังคับ default
    effectiveHeight() {
      const e = (t) => t === "auto" || t == null;
      return this.isInfinite && e(this.height) && e(this.maxHeight) ? 500 : this.height;
    },
    // label มุมขวา: infinite ไม่รู้ total (ไม่ count) จึงแสดงแค่จำนวนที่โหลดมาแล้ว
    showingLabel() {
      return this.isInfinite ? `Loaded ${this.rowEndLabel} items` : `Showing ${this.rowStartLabel}-${this.rowEndLabel} of ${this.totalLabel} items.`;
    },
    ddId() {
      return this.parentId;
    },
    rowStartLabel() {
      return (this.totalPage > 0 ? this.offset + 1 : this.offset).toLocaleString();
    },
    rowEndLabel() {
      return (this.offset + this.totalPage).toLocaleString();
    },
    getSummary() {
      return (e) => {
        const { columns: t, data: a } = e, l = new Intl.NumberFormat("en-US", {
          minimumFractionDigits: this.sumDecimal,
          maximumFractionDigits: this.sumDecimal
        }), o = [];
        return t.forEach((i, s) => {
          if (s == 0) {
            o[s] = this.sumLabel;
            return;
          }
          const u = i.property;
          if (this.sumData[u])
            if (this.sumAllPage || this.groupKey && this.wsConn) {
              let m = Number(this.sumData[u]);
              o[s] = l.format(m);
            } else {
              const f = a.map((c) => Number(c[u])).reduce((c, F) => {
                const D = Number(F);
                return Number.isNaN(D) ? c : c + F;
              }, 0);
              o[s] = l.format(f);
            }
          else
            o[s] = null;
        }), o;
      };
    },
    getParentFormId() {
      return this.sdformModel && this.sdformModel.joiner_field && this.sdformModel.joiner_field.joiner_enable && this.sdformModel.joiner_field.form_id ? this.sdformModel.joiner_field.form_id.value : null;
    }
  },
  created() {
  },
  setup(e, t) {
    const a = q(), l = q(), o = () => {
      a.value.clearFilter();
    }, i = () => {
      a.value.clearSort();
    };
    return {
      subFormOpen: R("subFormOpen", void 0),
      tableRef: a,
      clearFilter: o,
      clearSort: i,
      formRef: l
    };
  },
  unmounted() {
    this.wsConn?.wsDisconnect(), this.teardownInfiniteScroll();
  },
  async mounted() {
    if (this.apiUrl = "", !this.buildState)
      if (this.providerType === "SQL")
        this.initSQL();
      else if (this.userState.formStore[this.formId])
        this.initForm(this.userState.formStore[this.formId]);
      else if (this.useUserState.user) {
        const e = await $e(this.formId, this.useUserState);
        e.response && e.data ? this.initForm(e.data) : B.warning(e.message);
      } else
        B.warning("Unauthorized");
    this.sdFunc = {
      subFormOpen: this.subFormOpen,
      handleCancel: this.handleCancel,
      handleUpdate: this.handleUpdate,
      handleAdd: this.handleAdd,
      handleView: this.handleView,
      userState: this.userState,
      params: this.params,
      ElMessage: B,
      sdformModel: this.sdformModel,
      wsConn: this.wsConn,
      tableRef: this.tableRef
    }, this.setupInfiniteScroll();
  },
  methods: {
    changeParentId(e) {
      this.defaultParentId = e, this.defaultParams.xparentx = this.defaultParentId, this.params.xparentx = this.defaultParentId, this.dpFormData.params.xparentx = this.defaultParentId, this.dpFormData.options || (this.dpFormData.options = {});
      let t = !1;
      e ? (t = !0, this.defaultWhere ? this.dpFormData.options.where = this.defaultWhere + " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')") : (this.defaultWhere !== this.dpFormData.options.where && (t = !0), this.dpFormData.options.where = this.defaultWhere), t && this.handleRefresh();
    },
    genIndex(e) {
      let t = this.rowStartLabel.replace(",", "");
      return t ? (e + Number(t)).toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 }) : "";
    },
    handleExportOpen() {
      this.showExport = !0;
    },
    handleExportClose(e) {
      this.showExport = !1;
    },
    initSQL() {
      this.fixApiUrl && this.fixApiUrl != "" && (this.apiUrl = this.fixApiUrl), this.titleName && (this.titleNameForm = this.titleName), this.dataProvider ? this.dpFormData = P(this.dataProvider) : this.dpFormData = { providerId: this.formId, providerType: this.providerType }, this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.searchFields && (this.dpFormData.options.search = this.searchFields);
      const e = P(this.dpFormData.params), t = P(this.params);
      this.defaultParams = { ...t, ...e }, this.defaultSort = P(this.optionProvider.orderBy), this.dpFormData.params = P(this.defaultParams), this.hydrateState(), this.getDataList(this.dpFormData);
    },
    // ---- state persistence: จำ/คืน page/search/filter/sort ผ่าน localStorage (เฉพาะเมื่อมี stateKey/persistKey) ----
    hydrateState() {
      if (!this.persistKey) return;
      const e = wi(this.persistKey);
      e && (!this.isInfinite && e.page && e.page > 1 && (this.optionProvider.page = e.page), e.searchText && (this.searchText = e.searchText, this.dpFormData.params.q = `%${e.searchText}%`), e.fileter && Object.keys(e.fileter).length > 0 && (this.optionProvider.fileter = e.fileter), e.userSorted && e.orderBy && e.orderBy.length > 0 && (this.optionProvider.orderBy = e.orderBy, this.userSorted = !0));
    },
    persistState() {
      this.persistKey && vi(this.persistKey, {
        page: this.isInfinite ? 1 : this.optionProvider.page || 1,
        searchText: this.searchText,
        fileter: this.optionProvider.fileter || null,
        orderBy: this.userSorted ? this.optionProvider.orderBy : null,
        userSorted: this.userSorted
      });
    },
    initForm(e) {
      this.searchText = "", this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Oe(this.sdformModel, this.userState.user)), this.sdformModel.form_event.after_delete && this.sdformModel.form_event.enable && (this.afterDeleteForm = new Function("formData", ..._e, this.sdformModel.form_event.after_delete)), this.iconName || (this.iconForm = "", this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = ""), this.titleName ? this.titleNameForm = this.titleName : this.titleNameForm = this.sdformModel.form_name ? `${this.sdformModel.form_name}` : "", this.dataProvider ? this.dpFormData = P(this.dataProvider) : (this.dpFormData.providerId = this.formId, this.dpFormData.providerType = fe.FORM), this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.parentId != "" && (this.params.xparentx = this.parentId, this.dpFormData.options && this.dpFormData.options.where ? this.dpFormData.options.where += " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')"), this.searchFields ? this.dpFormData.options.search = this.searchFields : this.dpFormData.options.search = this.sdformModel.form_options.search_fields ? this.sdformModel.form_options.search_fields : [];
      const t = P(this.dpFormData.params), a = P(this.params);
      if (this.defaultParams = { ...a, ...t }, this.defaultSort = P(this.optionProvider.orderBy), this.dpFormData.params = P(this.defaultParams), this.sumColumn && Object.values(this.sumColumn).length > 0 && (this.dpFormData.options.sum = this.sumColumn), this.groupKey)
        if (this.expandProvider)
          this.dpExpandData = P(this.expandProvider);
        else {
          if (this.dpExpandData = { providerId: this.formId, providerType: fe.FORM }, this.dpFormData.options.select && this.dpFormData.options.select.length > 0) {
            const l = [`\`${this.groupKey}\``, `\`${this.groupKey}\` AS \`${this.rowKey}\``, `COUNT(*) AS \`${this.expandCountChildrenName}\``];
            this.dpFormData.options.select.push(...l);
          } else
            this.dpFormData.options.select = [`\`${this.groupKey}\``, `\`${this.groupKey}\` AS \`${this.rowKey}\``, `COUNT(*) AS \`${this.expandCountChildrenName}\``];
          if (this.aggrColumn && Object.values(this.aggrColumn).length > 0 && this.dpFormData.options.select.push(...this.aggrColumn), this.sumColumn && Object.values(this.sumColumn).length > 0)
            for (const l of this.sumColumn)
              this.dpFormData.options.select.push(`SUM(\`${l}\`) AS \`${l}\``);
          this.dpExpandData.options || (this.dpExpandData.options = {}), this.dpExpandData.options.select = ["*", `\`${this.keyId}\` AS \`${this.rowKey}\``], this.dpExpandData.options.where = `\`${this.groupKey}\` = :xgidx`, this.dpFormData.options.groupBy = [`\`${this.groupKey}\``], this.dpFormData.options.orderBy = [{ column: `\`${this.groupKey}\``, sort: ge.ASC }];
        }
      this.dpFormData.options.orderBy || (this.dpFormData.options.orderBy = [{ column: "created_at", sort: ge.DESC }], this.defaultSort = [{ column: "created_at", sort: ge.DESC }]), this.dpExportRow.providerId = this.formId, this.hydrateState(), this.getDataList(this.dpFormData), this.enableWs && this.sdformModel.form_options && this.sdformModel.form_options.enable_websocket && (this.wsConn = this.userState.connectWebSocket("gridform", this.sdformModel.dataid, this.widgetId, (l) => {
        if (l.from != "server" && (l.from != this.userState.user?.username || l.params && l.params.widget && l.params.widget !== this.widgetId)) {
          let o = -1;
          const i = P(l.data), s = l.params ? P(l.params) : null;
          if (o = this.keyIdIndex(i._id), this.groupKey && this.dpExpandData && i[this.groupKey]) {
            if (l.method == "insert") {
              this.addRowExpand(i[this.groupKey], i);
              const u = this.rowKeyIndex(i[this.groupKey]);
              this.rawData[u] && this.rawData[u][this.expandCountChildrenName] && (this.rawData[u][this.expandCountChildrenName] = this.rawData[u][this.expandCountChildrenName] + 1);
            } else if (l.method == "update") {
              let u = i[this.groupKey];
              s && s.gid && (u = s.gid), this.updateRowExpand(i[this.groupKey], i, u);
            } else if (l.method == "delete") {
              this.removeRowExpand(i[this.groupKey], i);
              const u = this.rowKeyIndex(i[this.groupKey]);
              this.rawData[u] && this.rawData[u][this.expandCountChildrenName] && (this.rawData[u][this.expandCountChildrenName] = this.rawData[u][this.expandCountChildrenName] - 1);
            }
            this.refreshData();
          } else
            l.method == "insert" ? qa(this.sdformModel, i, this.useUserState.user) && (this.total = this.total + 1, this.totalPage = this.totalPage + 1, this.rawData.push(i)) : l.method == "update" ? o >= 0 && (this.rawData[o] = i) : l.method == "delete" && o >= 0 && (this.rawData.splice(o, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1), this.sumAllPage && this.refreshData();
        }
      }));
    },
    allowUpdate(e, t, a) {
      return Je(e, t, a);
    },
    allowDelete(e, t, a) {
      return vl(e, t, a);
    },
    afterSave(e, t, a = null) {
      t || (this.showPopupFlag = !1, this.handlePopUpForm()), a && (this.isInsert = !1, this.groupKey && this.dpExpandData && a[this.groupKey] && (this.groupId = a[this.groupKey])), this.selectIndex = this.keyIdIndex(e[this.keyId]);
      const l = this.isInsert;
      if (e)
        if (this.isInsert) {
          let o = P(e);
          if (this.groupKey && this.dpExpandData && o[this.groupKey]) {
            this.addRowExpand(o[this.groupKey], o);
            const i = this.rowKeyIndex(o[this.groupKey]);
            this.rawData[i] && this.rawData[i][this.expandCountChildrenName] && (this.rawData[i][this.expandCountChildrenName] = this.rawData[i][this.expandCountChildrenName] + 1), this.wsConn && this.refreshData();
          } else
            this.rawData = [o].concat(this.rawData), this.isInsert = !1, this.selectIndex = -1, this.total = this.total + 1, this.totalPage = this.totalPage + 1, this.sumAllPage && this.refreshData();
          this.wsConn?.wsSend({ data: o, method: "insert", keyid: this.keyId, params: { widget: this.widgetId } });
        } else
          this.groupKey && this.dpExpandData && e[this.groupKey] ? (this.groupId || (this.groupId = e[this.groupKey]), this.updateRowExpand(e[this.groupKey], e, this.groupId), this.wsConn && this.refreshData()) : this.selectIndex != -1 && (this.rawData[this.selectIndex] = P(e), this.sumAllPage && this.refreshData()), this.wsConn?.wsSend({ data: e, method: "update", keyid: this.keyId, params: { gid: this.groupId, widget: this.widgetId } });
      this.$emit("aftersave", l, e, this.rawData, this.selectIndex);
    },
    // A3: batch resolve label สดสำหรับ column select-form-input ที่เปิด refreshLabel (1 request/column)
    // cache เติมแล้ว tick++ → cell (SdValueWidget) re-render เป็น label สด override snapshot
    resolveRefreshLabels() {
      const e = this.sdformModel?.form_db?.schema;
      if (!e || !Array.isArray(this.rawData) || this.rawData.length === 0) return;
      const t = gt();
      for (const a in e) {
        const l = e[a];
        if (!l || l.component !== "select-form-input") continue;
        const o = l.inputOptions;
        if (!o || !o.refreshLabel || !o.formId) continue;
        const i = /* @__PURE__ */ new Set(), s = [];
        for (const u of this.rawData) {
          const m = u[a], f = m && typeof m == "object" ? m.value : m;
          f && typeof f == "string" && !i.has(f) && (i.add(f), s.push(f));
        }
        s.length > 0 && t.ensureLabels(
          { formId: o.formId, valueField: o.valueField || "_id", labelField: o.labelField || [], labelTemplate: o.labelTemplate || "", valueObjectId: !!o.valueObjectId },
          s,
          this.useUserState
        );
      }
    },
    // append=true = โหลด batch ถัดไปต่อท้าย (infinite scroll); false = โหลดใหม่แทนที่ทั้งหมด
    async getDataList(e, t, a = !1) {
      this.isInfinite && !a && (this.optionProvider.page = 1, this.hasMore = !0), a ? this.loadingMore = !0 : this.preLoading = !0;
      const l = this.isInfinite ? !1 : this.total === 0, o = await at(e, l, this.useUserState);
      if (o.response) {
        if (o.data && o.data.data) {
          const i = P(o.data.data);
          a ? this.rawData.push(...i) : (this.rawData = i, this.offset = o.data.offset), this.resolveRefreshLabels(), this.isInfinite ? (this.totalPage = this.rawData.length, this.hasMore = i.length >= this.limit) : (this.totalPage = i.length, l && (this.total = o.data.total)), t && t(this.rawData), o.data.dataSum && o.data.dataSum[0] && (this.sumEnable = !0, this.sumData = o.data.dataSum[0]);
        }
      } else
        B.warning(o.message);
      a ? this.loadingMore = !1 : this.preLoading = !1, this.isInfinite && this.hasMore && this.$nextTick(() => {
        const i = this.scrollEl;
        i && i.scrollHeight <= i.clientHeight && this.loadMore();
      });
    },
    // โหลด batch ถัดไป — กันยิงซ้ำระหว่างกำลังโหลด/ไม่มีข้อมูลแล้ว
    loadMore() {
      !this.isInfinite || this.loadingMore || this.preLoading || !this.hasMore || (this.optionProvider.page = (this.optionProvider.page || 1) + 1, this.getDataList(this.dpFormData, void 0, !0));
    },
    // ผูก scroll listener กับ scroll wrapper ภายใน el-table (el-table ไม่มี scroll event ในตัว)
    setupInfiniteScroll() {
      this.isInfinite && this.$nextTick(() => {
        const t = this.tableRef?.$el?.querySelector(".el-table__body-wrapper .el-scrollbar__wrap");
        !t || t === this.scrollEl || (this.teardownInfiniteScroll(), this.scrollEl = t, t.addEventListener("scroll", this.onTableScroll, { passive: !0 }), this.hasMore && t.scrollHeight <= t.clientHeight && this.loadMore());
      });
    },
    onTableScroll() {
      const e = this.scrollEl;
      if (!e)
        return;
      e.scrollHeight - e.scrollTop - e.clientHeight <= 80 && this.loadMore();
    },
    teardownInfiniteScroll() {
      this.scrollEl && (this.scrollEl.removeEventListener("scroll", this.onTableScroll), this.scrollEl = null);
    },
    loadExpand(e, t, a) {
      if (this.dpExpandData) {
        this.dpExpandData.params || (this.dpExpandData.params ? this.dpExpandData.params = { ...this.dpExpandData.params, ...e } : this.dpExpandData.params = P(e));
        const l = this.groupKey;
        l && e[l] != null && e[l] != null && (this.dpExpandData.params.xgidx = e[l], ce.post(
          `${this.userState.host}/widget/crud/getdata-all`,
          {
            sdProvider: this.dpExpandData,
            totalEnable: !1
          },
          {
            headers: {
              Authorization: `Bearer ${this.userState.user?.token}`
            }
          }
        ).then(async (o) => {
          if (o && o.data && o.data.data) {
            const i = P(o.data.data);
            this.total = this.total + i.length, this.totalPage = this.totalPage + i.length, a(i);
          } else
            a([]);
        }).catch((o) => {
          o.response && o.response.data && o.response.data.message ? B.warning(o.response.data.message) : B.warning(o.message);
        }));
      }
    },
    keyIdIndex(e) {
      let t = this.keyId;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    rowKeyIndex(e) {
      let t = this.rowKey;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    getIndex(e, t) {
      if (this.isExpand || this.expandedRows.length > 0) {
        const a = this.keyId;
        return this.rawData.findIndex((o) => o[a] === e[a]);
      }
      return t;
    },
    handleExpand(e, t) {
      this.isExpand = t;
      try {
        if (t)
          this.expandedRows.push(e[this.rowKey]);
        else {
          const a = this.expandedRows.indexOf(e[this.rowKey]);
          this.expandedRows.splice(a, 1);
          let l = this.$refs.tableRef.store.states.treeData.value, o = this.$refs.tableRef.store.states.lazyTreeNodeMap.value;
          for (const i in l)
            if (Object.prototype.hasOwnProperty.call(l, i) && e[this.rowKey] == i) {
              o[i].length && (this.total = this.total - o[i].length, this.totalPage = this.totalPage - o[i].length), o[i] = [];
              const s = l[i];
              s.loaded = !1, s.children = [], s.expanded = !1;
              break;
            }
        }
      } catch (a) {
        console.log(a);
      }
    },
    async removeRowExpand(e, t) {
      try {
        let a = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e];
        if (a) {
          const l = a.findIndex((i) => i[this.rowKey] === t[this.rowKey]);
          a.splice(l, 1);
          const o = this.rowKeyIndex(e);
          if (a.length == 0) {
            this.rawData.splice(o, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1;
            const i = this.expandedRows.indexOf(t[this.rowKey]);
            this.expandedRows.splice(i, 1);
          }
          if (this.expandedRows.includes(e))
            this.total = this.total - 1, this.totalPage = this.totalPage - 1, await this.sumExpandUpdate(a, e, t);
          else
            for (const i in this.sumData)
              this.rawData[o] && this.rawData[o][i] && (this.rawData[o][i] = this.rawData[o][i] - t[i]);
        }
      } catch (a) {
        console.log(a);
      }
    },
    async updateRowExpand(e, t, a) {
      try {
        if (a !== e) {
          await this.removeRowExpand(a, t);
          const l = this.rowKeyIndex(a);
          this.rawData[l] && this.rawData[l][this.expandCountChildrenName] && (this.rawData[l][this.expandCountChildrenName] = this.rawData[l][this.expandCountChildrenName] - 1);
          let o = !1;
          const i = this.rowKeyIndex(e);
          this.rawData[i] || (o = !0), await this.addRowExpand(e, t), o || this.rawData[i] && this.rawData[i][this.expandCountChildrenName] && (this.rawData[i][this.expandCountChildrenName] = this.rawData[i][this.expandCountChildrenName] + 1);
        } else {
          let l = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e];
          if (l) {
            const o = l.findIndex((i) => i[this.rowKey] === t[this.rowKey]);
            l[o] = P(t), await this.sumExpandUpdate(l, e, t);
          }
        }
      } catch (l) {
        console.log(l);
      }
    },
    async addRowExpand(e, t) {
      const a = this.rowKeyIndex(e);
      let l = !1;
      this.rawData[a] || (await this.refreshData(), l = !0), this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e] || (this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e] = []);
      let o = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e];
      if (o)
        if (o.push(t), l)
          this.expandedRows.includes(e) && (this.total = this.total + 1, this.totalPage = this.totalPage + 1);
        else if (this.expandedRows.includes(e))
          this.total = this.total + 1, this.totalPage = this.totalPage + 1, await this.sumExpandUpdate(o, e, t);
        else
          for (const i in this.sumData)
            this.rawData[a] && this.rawData[a][i] && (this.rawData[a][i] = this.rawData[a][i] + t[i]);
    },
    async sumExpandUpdate(e, t, a) {
      if (this.sumEnable)
        if (this.sumAllPage)
          this.refreshData();
        else {
          let l = {}, o = !0;
          const i = this.rowKeyIndex(t);
          e.forEach((s) => {
            for (const u in this.sumData)
              l[u] || (l[u] = 0), o && (this.rawData[i][u] = 0), l[u] += s[u], this.rawData[i][u] += s[u];
            o = !1;
          });
        }
    },
    getChildren(e) {
      try {
        const t = this.rowKey;
        return this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e[t]];
      } catch (t) {
        return console.log(t), null;
      }
    },
    handleCurrentChange(e) {
      this.dpExpandData && this.resetExpand(), this.persistState(), this.getDataList(this.dpFormData);
    },
    handleRefresh() {
      this.persistKey && Si(this.persistKey), this.optionProvider.page = 1, this.optionProvider.fileter = null, this.dpFormData.params = this.defaultParams, this.optionProvider.orderBy = P(this.defaultSort), this.userSorted = !1, this.searchText = "", this.total = 0, this.dpFormData.params.q && delete this.dpFormData.params.q, this.clearSort(), this.clearFilter(), this.dpExpandData && this.resetExpand(), this.getDataList(this.dpFormData);
    },
    reloadData() {
      this.dpExpandData && this.resetExpand();
    },
    async refreshData() {
      if (await this.getDataList(this.dpFormData), this.groupKey) {
        let e = 0;
        for (const t of this.expandedRows) {
          this.$refs.tableRef.store.states.lazyTreeNodeMap.value[t] || (this.$refs.tableRef.store.states.lazyTreeNodeMap.value[t] = []);
          let a = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[t];
          a && (e = e + a.length);
        }
        this.total = this.total + e, this.totalPage = this.totalPage + e;
      }
    },
    resetExpand() {
      try {
        let e = this.$refs.tableRef.store.states.treeData.value, t = this.$refs.tableRef.store.states.lazyTreeNodeMap.value;
        this.expandedRows = [];
        for (const a in e)
          if (Object.prototype.hasOwnProperty.call(e, a)) {
            t[a] = [];
            const l = e[a];
            l.loaded = !1, l.children = [], l.expanded = !1;
          }
      } catch (e) {
        console.log(e);
      }
    },
    // multi-column sort. dir set (caret click) = apply that direction; dir undefined (label click) = cycle ASC→DESC→off.
    // Shift+click accumulates multiple columns; plain click replaces with a single column.
    handleSort(e) {
      const { prop: t, shiftKey: a, dir: l } = e, o = `\`${t}\``, i = (D) => String(D).replace(/`/g, "");
      let s = this.userSorted ? P(this.optionProvider.orderBy || []) : [];
      const u = s.findIndex((D) => i(D.column) === t), m = u >= 0 ? s[u] : null, f = m ? String(m.sort).toUpperCase() : null, c = (D) => {
        a ? m ? m.sort = D : s.push({ column: o, sort: D }) : s = [{ column: o, sort: D }];
      }, F = () => {
        a ? u >= 0 && s.splice(u, 1) : s = [];
      };
      l ? f === l ? F() : c(l === "DESC" ? ge.DESC : ge.ASC) : f === null ? c(ge.ASC) : f === "ASC" ? c(ge.DESC) : F(), s.length === 0 ? (this.userSorted = !1, this.optionProvider.orderBy = P(this.defaultSort)) : (this.userSorted = !0, this.optionProvider.orderBy = s), this.optionProvider.page = 1, this.dpExpandData && this.resetExpand(), this.persistState(), this.getDataList(this.dpFormData);
    },
    handleSearch() {
      this.searchText != "" ? this.dpFormData.params.q = `%${this.searchText}%` : delete this.dpFormData.params.q, this.dpExpandData && this.resetExpand(), this.total = 0, this.optionProvider.page = 1, this.persistState(), this.getDataList(this.dpFormData);
    },
    handleFilter(e) {
      for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          let a = e[t];
          gl(a) ? delete this.optionProvider.fileter[t] : (this.optionProvider.fileter || (this.optionProvider.fileter = {}), this.optionProvider.fileter[t] = a);
        }
      this.dpExpandData && this.resetExpand(), this.total = 0, this.optionProvider.page = 1, this.persistState(), this.getDataList(this.dpFormData);
    },
    async handleCancel() {
      this.showPopupFlag = !1, this.handlePopUpForm();
    },
    handlePopUpForm() {
      this.subFormOpen && this.subFormOpen({
        modelValue: this.showPopupFlag,
        initData: this.formData,
        backdrop: this.backdrop,
        readonly: this.formReadOnly,
        formId: this.formId,
        parentId: this.defaultParentId,
        params: this.params,
        beforeSaveCallback: this.beforeSave,
        cancelCallback: this.handleCancel,
        afterSaveCallback: this.afterSave
      });
    },
    handleAdd() {
      this.formData = { ...this.initData }, this.isInsert = !0, this.selectIndex = -1, this.backdrop = this.backdropForm, this.formReadOnly = !1, this.groupId = "", this.showPopupFlag = !0, this.handlePopUpForm(), this.insertBefore && this.insertBefore(null, 0);
    },
    handleClone(e, t) {
      this.isInsert = !0, this.selectIndex = -1, this.showPopupFlag = !1, this.backdrop = !1, this.formData = P(e), this.formReadOnly = !1, this.groupId = "", delete this.formData[this.keyId], this.formData[this.cloneEnableLabelField] = this.formData[this.cloneEnableLabelField] + " clone";
      let a = !0;
      this.allowCloneFunc && (a = this.allowCloneFunc(e, t)), a && ye.confirm("Are you sure you want to clone this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (this.sdformModel.dataid) {
          const l = await za(this.sdformModel.dataid, this.useUserState);
          if (l) {
            this.formData = { ...l, ...this.formData };
            let o = {};
            this.beforeSave && (o = this.beforeSave(this.formData), this.formData = { ...this.formData, ...o }), this.formData.xclonex = e[this.keyId], this.formData.dataid = this.formData[this.keyId], this.formData.xrstatx = 0, this.formData.xversionx = this.sdformModel.form_version;
            const i = await yt(this.sdformModel.dataid, this.formData[this.keyId], this.formData, 1, this.useUserState), s = i.data;
            s ? (s[this.rowKey] = this.formData[this.keyId], this.afterSave(s, !1)) : B.warning(i.message);
          } else
            B.warning("Unable to create empty data");
        }
      }).catch((l) => {
        console.log(l);
      });
    },
    handleUpdate(e, t) {
      this.isInsert = !1, this.selectIndex = this.getIndex(e, t), this.showPopupFlag = !0, this.backdrop = this.backdropForm, this.formData = e, this.formReadOnly = !1, this.groupKey ? this.groupId = e[this.groupKey] : this.groupId = "", this.handlePopUpForm(), this.updateBefore && this.updateBefore(e, this.selectIndex);
    },
    handleView(e, t) {
      this.isInsert = !1, this.selectIndex = this.getIndex(e, t), this.showPopupFlag = !0, this.backdrop = !0, this.formData = e, this.formReadOnly = !0, this.groupKey ? this.groupId = e[this.groupKey] : this.groupId = "", this.handlePopUpForm(), this.viewBefore && this.viewBefore(e, this.selectIndex);
    },
    handleDelete(e, t) {
      const a = e[this.keyId];
      this.selectIndex = this.getIndex(e, t), this.groupKey ? this.groupId = e[this.groupKey] : this.groupId = "";
      let l = !0;
      this.allowDeleteFunc && (l = this.allowDeleteFunc(e, t)), l && ye.confirm("Are you sure you want to remove this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (await Ha(this.sdformModel.dataid, a, this.useUserState)) {
          if (this.wsConn?.wsSend({ data: e, method: "delete", keyid: this.keyId, params: { widget: this.widgetId } }), this.groupKey && this.dpExpandData) {
            this.removeRowExpand(e[this.groupKey], e);
            const i = this.rowKeyIndex(e[this.groupKey]);
            this.rawData[i] && this.rawData[i][this.expandCountChildrenName] && (this.rawData[i][this.expandCountChildrenName] = this.rawData[i][this.expandCountChildrenName] - 1), this.wsConn && this.refreshData(), this.afterDelete && this.afterDelete(e, this.selectIndex);
          } else
            this.rawData.splice(this.selectIndex, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1, this.sumAllPage && this.refreshData(), this.afterDelete && this.afterDelete(e, this.selectIndex);
          if (this.sdformModel.form_event.enable && this.afterDeleteForm)
            try {
              this.afterDeleteForm.call(this.sdFunc, e);
            } catch (i) {
              B.error(i.message);
            }
          B.success("Delete completed.");
        } else
          B.warning("Unable to remove data");
      }).catch((o) => {
        console.log(o);
      });
    },
    handleEditField(e, t, a, l) {
      const o = e[this.keyId];
      this.selectIndex = this.getIndex(e, t), this.groupKey ? this.groupId = e[this.groupKey] : this.groupId = "", ye.confirm("Are you sure you want to edit value this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        const i = await yt(this.sdformModel.dataid, o, a, 1, this.useUserState);
        i ? (l && l(i), B.success("Edit value completed.")) : B.warning("Unable to edit data");
      }).catch(() => {
      });
    },
    handleExportRowOpen(e) {
      this.dpExportRow.params.id = e[this.keyId], this.exportName = e[this.cloneEnableLabelField] ? e[this.cloneEnableLabelField] : e[this.keyId], this.showExportRow = !0;
    },
    handleExportRowClose(e) {
      this.dpExportRow.params.id = "", this.exportName = "", this.showExportRow = !1;
    }
  }
}), Pf = { class: "card-header" }, Mf = {
  key: 0,
  class: "mb-2",
  style: { position: "relative" }
}, Vf = { class: "text-6" }, Ef = { style: { position: "absolute", top: "0px", right: "0px" } }, Af = {
  class: "ml-1 text-3",
  style: { height: "32px", display: "inline-grid", "align-content": "center" }
}, Lf = {
  class: "text-3",
  style: { height: "32px", display: "inline-grid", "align-content": "center" }
}, Bf = { class: "card-footer" }, Of = {
  key: 0,
  class: "infinite-status",
  style: { "text-align": "center", padding: "8px 0" }
};
function Nf(e, t, a, l, o, i) {
  const s = Ze, u = ve, m = We, f = ie, c = Pa, F = Va, D = dt, g = Te, C = Ma, _ = Et, p = ta, y = Xe, S = $f, N = aa, w = pl, T = hf, V = oa;
  return n(), v(L, null, [
    d(w, {
      class: "box-card",
      shadow: "never"
    }, {
      header: r(() => [
        $("div", Pf, [
          (e.iconName != "" || e.iconForm != "" || e.titleNameForm != "") && e.titleEnable ? (n(), v("div", Mf, [
            d(m, { truncated: "" }, {
              default: r(() => [
                $("span", Vf, [
                  e.iconForm != "" ? (n(), h(s, {
                    key: 0,
                    "svg-data": e.iconForm
                  }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h(u, {
                    key: 1,
                    "icon-name": e.iconName
                  }, null, 8, ["icon-name"])) : (n(), h(u, {
                    key: 2,
                    "icon-name": "icon-sdform"
                  })),
                  I(" " + A(e.titleNameForm), 1)
                ])
              ]),
              _: 1
            }),
            $("span", Ef, [
              re(e.$slots, "actionsBar", {}, void 0, !0)
            ])
          ])) : b("", !0),
          d(_, { gutter: 20 }, {
            default: r(() => [
              d(D, {
                class: "mb-2",
                xs: 24,
                sm: 14,
                md: 16,
                lg: 16,
                xl: 16,
                style: { display: "inline-flex" }
              }, {
                default: r(() => [
                  e.addBtnEnable && e.allowInsert && !e.readonly ? (n(), h(f, {
                    key: 0,
                    type: "success",
                    plain: "",
                    icon: "Plus",
                    onClick: e.handleAdd
                  }, {
                    default: r(() => [
                      I(A(e.addBtnLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : b("", !0),
                  t[6] || (t[6] = I()),
                  re(e.$slots, "actions", {}, void 0, !0),
                  e.rawdataBtnEnable ? (n(), h(c, {
                    key: 1,
                    direction: "vertical",
                    style: { height: "30px" }
                  })) : b("", !0),
                  e.rawdataBtnEnable ? (n(), h(F, {
                    key: 2,
                    modelValue: e.showRawValue,
                    "onUpdate:modelValue": t[0] || (t[0] = (E) => e.showRawValue = E),
                    label: "Raw Data",
                    border: ""
                  }, null, 8, ["modelValue"])) : b("", !0),
                  e.rawdataBtnEnable ? (n(), h(c, {
                    key: 3,
                    direction: "vertical",
                    style: { height: "30px" }
                  })) : b("", !0),
                  e.exportBtnEnable ? (n(), h(f, {
                    key: 4,
                    plain: "",
                    icon: "Download",
                    onClick: e.handleExportOpen
                  }, null, 8, ["onClick"])) : b("", !0),
                  d(f, {
                    type: "info",
                    plain: "",
                    icon: "Refresh",
                    onClick: e.handleRefresh
                  }, null, 8, ["onClick"]),
                  $("span", Af, [
                    d(m, { "line-clamp": "2" }, {
                      default: r(() => [
                        I(A(e.showingLabel), 1)
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 3
              }),
              e.optionProvider.search && e.optionProvider.search.length > 0 ? (n(), h(D, {
                key: 0,
                class: "mb-2",
                xs: 24,
                sm: 10,
                md: 8,
                lg: 8,
                xl: 8
              }, {
                default: r(() => [
                  d(g, {
                    modelValue: e.searchText,
                    "onUpdate:modelValue": t[1] || (t[1] = (E) => e.searchText = E),
                    placeholder: e.placeholderSearch,
                    onChange: e.handleSearch,
                    clearable: ""
                  }, {
                    append: r(() => [
                      d(f, {
                        type: "info",
                        icon: "Search",
                        onClick: e.handleSearch
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "onChange"])
                ]),
                _: 1
              })) : b("", !0),
              e.totalInline ? b("", !0) : (n(), h(D, {
                key: 1,
                xs: 24,
                sm: 24,
                md: 16,
                style: { display: "inline-flex" }
              }, {
                default: r(() => [
                  re(e.$slots, "actionsPager", {}, () => [
                    e.total > e.limit ? (n(), h(C, {
                      key: 0,
                      class: "mb-2",
                      "current-page": e.optionProvider.page,
                      "onUpdate:currentPage": t[2] || (t[2] = (E) => e.optionProvider.page = E),
                      "page-size": e.limit,
                      onCurrentChange: e.handleCurrentChange,
                      background: "",
                      layout: "prev, pager, next",
                      total: e.total
                    }, null, 8, ["current-page", "page-size", "onCurrentChange", "total"])) : b("", !0)
                  ], !0)
                ]),
                _: 3
              })),
              e.totalInline ? b("", !0) : (n(), h(D, {
                key: 2,
                class: "mb-2",
                xs: 24,
                sm: 24,
                md: 8,
                style: { "text-align": "right" }
              }, {
                default: r(() => [
                  $("span", Lf, [
                    d(m, { "line-clamp": "2" }, {
                      default: r(() => [
                        I(A(e.showingLabel), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  d(f, {
                    type: "info",
                    plain: "",
                    icon: "Refresh",
                    onClick: e.handleRefresh
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              }))
            ]),
            _: 3
          })
        ])
      ]),
      default: r(() => [
        Ve((n(), h(N, {
          ref: "tableRef",
          data: e.rawData,
          stripe: "",
          border: e.resizable,
          "show-summary": e.sumEnable,
          "summary-method": e.getSummary,
          style: { width: "100%" },
          height: e.effectiveHeight,
          "max-height": e.maxHeight,
          "row-key": e.groupKey ? e.rowKey : void 0,
          lazy: !!e.groupKey,
          load: e.groupKey ? e.loadExpand : void 0,
          "expand-row-keys": e.groupKey ? e.expandedRows : void 0,
          "tree-props": e.groupKey ? { children: "children", hasChildren: e.expandCountChildrenName } : void 0,
          onExpandChange: e.handleExpand,
          onFilterChange: e.handleFilter
        }, {
          default: r(() => [
            e.actionEnable ? (n(), h(y, {
              key: 0,
              fixed: "",
              label: e.actionLabel,
              width: e.actionWidthAuto
            }, {
              default: r((E) => [
                e.actionCrudEnable ? (n(), v(L, { key: 0 }, [
                  E.row[e.keyId] && e.isFormEnable ? (n(), h(f, {
                    key: 0,
                    plain: "",
                    circle: "",
                    type: "info",
                    icon: "View",
                    size: "small",
                    title: "View",
                    onClick: j((W) => e.handleView(E.row, E.$index), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0),
                  E.row[e.keyId] && e.isFormEnable && !e.readonly && e.allowUpdate(e.sdformModel, E.row, e.useUserState.user) && e.exportRowBtnEnable ? (n(), h(f, {
                    key: 1,
                    plain: "",
                    circle: "",
                    type: "info",
                    icon: "Download",
                    size: "small",
                    title: "Export",
                    onClick: j((W) => e.handleExportRowOpen(E.row), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0),
                  E.row[e.keyId] && e.isFormEnable && !e.readonly && e.allowInsert && e.cloneEnableLabelField ? (n(), h(f, {
                    key: 2,
                    plain: "",
                    circle: "",
                    type: "success",
                    icon: "CopyDocument",
                    size: "small",
                    title: "Clone",
                    onClick: j((W) => e.handleClone(E.row, E.$index), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0),
                  E.row[e.keyId] && e.isFormEnable && !e.readonly && e.allowUpdate(e.sdformModel, E.row, e.useUserState.user) ? (n(), h(f, {
                    key: 3,
                    plain: "",
                    circle: "",
                    type: "primary",
                    icon: "Edit",
                    size: "small",
                    title: "Edit",
                    onClick: j((W) => e.handleUpdate(E.row, E.$index), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0),
                  E.row[e.keyId] && e.isFormEnable && !e.readonly && e.allowDelete(e.sdformModel, E.row, e.useUserState.user) ? (n(), h(f, {
                    key: 4,
                    plain: "",
                    circle: "",
                    type: "danger",
                    icon: "Delete",
                    size: "small",
                    title: "Delete",
                    onClick: j((W) => e.handleDelete(E.row, E.$index), ["prevent"])
                  }, null, 8, ["onClick"])) : b("", !0)
                ], 64)) : b("", !0),
                e.groupKey && E.row[e.expandCountChildrenName] ? (n(), h(p, {
                  key: 1,
                  type: "info",
                  effect: "light",
                  size: "small"
                }, {
                  default: r(() => [
                    I(A(E.row[e.expandCountChildrenName]), 1)
                  ]),
                  _: 2
                }, 1024)) : b("", !0),
                re(e.$slots, "actionBtnRow", {
                  row: E.row,
                  index: E.$index
                }, void 0, !0)
              ]),
              _: 3
            }, 8, ["label", "width"])) : b("", !0),
            re(e.$slots, "actionColumn", {}, void 0, !0),
            e.indexColumn ? (n(), h(y, {
              key: 1,
              type: "index",
              index: e.genIndex,
              label: "#",
              width: 100,
              align: "center"
            }, null, 8, ["index"])) : b("", !0),
            e.sdformModel && Object.keys(e.sdformModel).length > 0 || e.displayFields && e.displayFields.length > 0 ? (n(), h(S, {
              key: 2,
              "form-model": e.sdformModel,
              "display-fields": e.displayFields,
              "subform-width": e.subformWidth,
              "system-column": e.systemColumn,
              "edit-column": e.editColumn,
              "key-id": e.keyId,
              "row-key": e.rowKey,
              "user-state": e.userState,
              "after-save": e.afterSave,
              "raw-value": e.showRawValue,
              "sort-state": e.optionProvider.orderBy || [],
              "sort-disabled": !!e.groupKey,
              onSort: e.handleSort
            }, {
              default: r(() => [
                re(e.$slots, "default", {}, void 0, !0)
              ]),
              _: 3
            }, 8, ["form-model", "display-fields", "subform-width", "system-column", "edit-column", "key-id", "row-key", "user-state", "after-save", "raw-value", "sort-state", "sort-disabled", "onSort"])) : b("", !0)
          ]),
          _: 3
        }, 8, ["data", "border", "show-summary", "summary-method", "height", "max-height", "row-key", "lazy", "load", "expand-row-keys", "tree-props", "onExpandChange", "onFilterChange"])), [
          [V, e.preLoading]
        ]),
        $("div", Bf, [
          e.isInfinite ? (n(), v("div", Of, [
            e.loadingMore ? (n(), h(m, {
              key: 0,
              type: "info",
              size: "small"
            }, {
              default: r(() => [...t[7] || (t[7] = [
                I("Loading...", -1)
              ])]),
              _: 1
            })) : !e.hasMore && e.rawData.length > 0 ? (n(), h(m, {
              key: 1,
              type: "info",
              size: "small"
            }, {
              default: r(() => [
                I("— All loaded (" + A(e.totalPage.toLocaleString()) + " items) —", 1)
              ]),
              _: 1
            })) : b("", !0)
          ])) : b("", !0),
          !e.isInfinite && e.total > e.limit ? (n(), h(C, {
            key: 1,
            "current-page": e.optionProvider.page,
            "onUpdate:currentPage": t[3] || (t[3] = (E) => e.optionProvider.page = E),
            "page-size": e.limit,
            onCurrentChange: e.handleCurrentChange,
            class: "mt-3",
            background: "",
            layout: "prev, pager, next",
            total: e.total
          }, null, 8, ["current-page", "page-size", "onCurrentChange", "total"])) : b("", !0)
        ])
      ]),
      _: 3
    }),
    d(T, {
      "file-name": "backup-data",
      modelValue: e.showExport,
      "onUpdate:modelValue": t[4] || (t[4] = (E) => e.showExport = E),
      "data-provider": e.dpFormData,
      "user-state": e.userState,
      "cancel-callback": e.handleExportClose
    }, null, 8, ["modelValue", "data-provider", "user-state", "cancel-callback"]),
    d(T, {
      "file-name": "backup-data",
      modelValue: e.showExportRow,
      "onUpdate:modelValue": t[5] || (t[5] = (E) => e.showExportRow = E),
      "dynamic-name": e.exportName,
      "data-provider": e.dpExportRow,
      "user-state": e.userState,
      "cancel-callback": e.handleExportRowClose
    }, null, 8, ["modelValue", "dynamic-name", "data-provider", "user-state", "cancel-callback"])
  ], 64);
}
const jf = /* @__PURE__ */ U(Tf, [["render", Nf], ["__scopeId", "data-v-53428c88"]]), Uf = O({
  name: "SdCrudPopupForm",
  components: {},
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: null,
    formId: {
      type: String,
      required: !0
    },
    dataId: {
      type: String,
      default: ""
    },
    parentId: {
      type: String,
      default: ""
    },
    initData: {
      type: Object,
      default: {}
    },
    params: {
      type: Object,
      default: {}
    },
    // null = ไม่ระบุ → ใช้ค่า backdrop ของฟอร์มที่เปิด (resolvedBackdrop); ระบุ true/false มา = override
    backdrop: {
      type: Boolean,
      default: null
    },
    optionData: {
      type: Object,
      default: {}
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    annotated: {
      type: Boolean,
      default: !1
    },
    isSubForm: {
      type: Boolean,
      default: !1
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    cancelCallback: {
      type: Function,
      required: !0
    },
    afterSaveCallback: {
      type: Function
    },
    beforeSaveCallback: {
      type: Function
    },
    userState: {
      type: Object,
      required: !0
    },
    // รูปแบบ container ตอนเปิดฟอร์ม — ไม่ส่งมา = 'dialog' (พฤติกรรมเดิม)
    popupType: {
      type: String,
      default: "dialog"
    },
    // ทิศของ drawer (ใช้เฉพาะตอน popupType = 'drawer'): rtl=ขวา, ltr=ซ้าย, ttb=บน, btt=ล่าง
    drawerDirection: {
      type: String,
      default: "rtl"
    }
  },
  data() {
    return {
      resizeCleanup: null,
      sdformModel: {},
      apiUrl: this.userState.host,
      useUserState: this.userState,
      popupName: "Form",
      popupWidth: "70%",
      showContent: !1,
      allowInsert: !1,
      allowUpdate: !1,
      iconForm: "",
      versionForm: "",
      afterDeleteForm: void 0,
      titleNameForm: "",
      popupWidthdefault: "70%"
    };
  },
  async created() {
  },
  computed: {
    showPopupFlag: {
      get() {
        return this.modelValue;
      },
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t), this.$emit("change", e);
      }
    },
    // container ที่จะ render: el-drawer เมื่อ popupType = 'drawer', นอกนั้น el-dialog
    popupComponent() {
      return this.popupType === "drawer" ? "el-drawer" : "el-dialog";
    },
    // attr ที่ต่างกันระหว่าง dialog/drawer: dialog ใช้ width, drawer ใช้ size + direction
    popupSizeBind() {
      return this.popupType === "drawer" ? { size: this.popupWidth, direction: this.drawerDirection } : { width: this.popupWidth };
    },
    popupClass() {
      return this.popupType === "drawer" ? "drawer-grid drawer-form" : "dialog-grid dialog-form";
    },
    // close-on-click-modal: ระบุ backdrop ผ่าน prop มา → ใช้ค่านั้น; ไม่ระบุ (null) → ใช้ค่าของฟอร์มที่เปิด; ฟอร์มยังไม่โหลด → false
    resolvedBackdrop() {
      return this.backdrop !== null && this.backdrop !== void 0 ? this.backdrop : !!this.userState?.formStore?.[this.formId]?.form_options?.backdrop;
    }
  },
  setup(e, t) {
    const a = ke({}), l = q(), o = q();
    return { options: a, formRef: l, loading: o };
  },
  mounted() {
    this.handleOpen(), this.resizeCleanup = Pe(() => {
      this.$nextTick(() => {
        this.popupWidth = oe(this.popupWidthdefault);
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    async handleOpen() {
      if (this.showContent = !1, this.formId != "")
        if (this.userState.formStore[this.formId])
          this.initForm(this.userState.formStore[this.formId]);
        else if (this.useUserState.user) {
          const e = await $e(this.formId, this.useUserState);
          e.response && e.data ? e.data.dataid && this.initForm(e.data) : B.warning(e.message);
        } else
          B.warning("Unauthorized");
      else
        B.warning("FormId not found.");
    },
    handleCancel() {
      this.cancelCallback && this.cancelCallback();
    },
    updateForm(e) {
      e.form_icon ? this.iconForm = e.form_icon : this.iconForm = "", e.form_version ? this.versionForm = e.form_version : this.versionForm = "";
    },
    initForm(e) {
      this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Oe(this.sdformModel, this.userState.user), this.allowUpdate = Je(this.sdformModel, this.initData, this.userState.user)), this.titleNameForm = this.sdformModel.form_name ? this.sdformModel.form_name : "", this.popupName = `${this.titleNameForm}`, this.sdformModel.form_options && this.sdformModel.form_options.popup_size && (this.popupWidth = `${this.sdformModel.form_options.popup_size}%`, this.popupWidthdefault = this.popupWidth), this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = "", this.loading?.close(), this.showContent = !0, this.popupWidth = oe(this.popupWidthdefault);
    }
  }
}), Rf = ["id"];
function zf(e, t, a, l, o, i) {
  const s = Ze, u = ve, m = ta, f = ie, c = wl;
  return n(), h(Ot(e.popupComponent), ae({
    title: e.popupName,
    modelValue: e.showPopupFlag,
    "onUpdate:modelValue": t[0] || (t[0] = (F) => e.showPopupFlag = F)
  }, e.popupSizeBind, {
    "show-close": !0,
    class: e.popupClass,
    "before-close": e.handleCancel,
    "append-to-body": "",
    "close-on-click-modal": e.resolvedBackdrop,
    "close-on-press-escape": !0,
    "destroy-on-close": !0
  }), {
    header: r(({ titleId: F, titleClass: D }) => [
      $("span", {
        role: "heading",
        id: F,
        class: Y(D)
      }, [
        e.iconForm != "" ? (n(), h(s, {
          key: 0,
          "svg-data": e.iconForm
        }, null, 8, ["svg-data"])) : (n(), h(u, {
          key: 1,
          "icon-name": "icon-sdform"
        })),
        I(" " + A(e.popupName) + " ", 1),
        e.versionForm ? (n(), h(m, {
          key: 2,
          type: "success"
        }, {
          default: r(() => [
            I(A(e.versionForm), 1)
          ]),
          _: 1
        })) : b("", !0)
      ], 10, Rf)
    ]),
    default: r(() => [
      e.showContent ? (n(), h(c, {
        key: 0,
        ref: "formRef",
        "form-id": e.formId,
        "data-id": e.dataId,
        "parent-id": e.parentId,
        "init-data": e.initData,
        params: e.params,
        "option-data": e.optionData,
        readonly: e.readonly,
        annotated: e.annotated,
        "is-sub-form": e.isSubForm,
        "fix-api-url": e.fixApiUrl,
        "user-state": e.userState,
        "change-version": e.updateForm,
        "before-save": e.beforeSaveCallback,
        "after-save": e.afterSaveCallback
      }, {
        closeForm: r(() => [
          d(f, {
            onClick: j(e.handleCancel, ["prevent"])
          }, {
            default: r(() => [...t[1] || (t[1] = [
              I("Close", -1)
            ])]),
            _: 1
          }, 8, ["onClick"])
        ]),
        _: 1
      }, 8, ["form-id", "data-id", "parent-id", "init-data", "params", "option-data", "readonly", "annotated", "is-sub-form", "fix-api-url", "user-state", "change-version", "before-save", "after-save"])) : b("", !0)
    ]),
    _: 1
  }, 16, ["title", "modelValue", "class", "before-close", "close-on-click-modal"]);
}
const Hf = /* @__PURE__ */ U(Uf, [["render", zf]]), qf = O({
  name: "SdCrudPopupGrid",
  components: {
    // SdCrudGrid,
  },
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: null,
    formId: {
      type: String,
      required: !0
    },
    // ส่งต่อให้ SdCrudGrid — true = จำ page/search/filter/sort ต่อฟอร์ม (key `crud:<formId>`)
    stateKey: {
      type: [String, Boolean],
      default: !1
    },
    parentId: {
      type: String,
      default: ""
    },
    initData: {
      type: Object,
      default: {}
    },
    params: {
      type: Object,
      default: {}
    },
    dataProvider: {
      type: Object,
      default: null
    },
    backdrop: {
      type: Boolean,
      default: !1
    },
    optionData: {
      type: Object,
      default: {}
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    annotated: {
      type: Boolean,
      default: !1
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    cancelCallback: {
      type: Function
    },
    afterSaveCallback: {
      type: Function
    },
    userState: {
      type: Object,
      required: !0
    },
    expandProvider: {
      type: Object
    },
    expandCountChildrenName: {
      type: String,
      default: "hasChildren"
    },
    placeholderSearch: {
      type: String,
      default: "Search..."
    },
    actionLabel: {
      type: String,
      default: "Actions"
    },
    actionEnable: {
      type: Boolean,
      default: !0
    },
    totalInline: {
      type: Boolean,
      default: !0
    },
    addBtnLabel: {
      type: String,
      default: "Add"
    },
    addBtnEnable: {
      type: Boolean,
      default: !0
    },
    exportBtnEnable: {
      type: Boolean,
      default: !1
    },
    exportRowBtnEnable: {
      type: Boolean,
      default: !1
    },
    cloneEnableLabelField: {
      type: String,
      default: ""
    },
    rawdataBtnEnable: {
      type: Boolean,
      default: !1
    },
    systemColumn: {
      type: Boolean,
      default: !0
    },
    indexColumn: {
      type: Boolean,
      default: !0
    },
    actionWidth: {
      type: Number,
      default: null
    },
    subformWidth: {
      type: Number,
      default: 600
    },
    maxHeight: {
      type: [String, Number],
      default: "auto"
    },
    height: {
      type: [String, Number],
      default: "auto"
    },
    resizable: {
      type: Boolean,
      default: !1
    },
    iconName: {
      type: String,
      default: ""
    },
    titleName: {
      type: String,
      default: ""
    },
    keyId: {
      type: String,
      default: "_id"
    },
    rowKey: {
      type: String,
      default: "dataid"
    },
    groupKey: {
      type: String
    },
    aggrColumn: {
      type: Array
    },
    sumColumn: {
      type: Array
    },
    sumLabel: {
      type: String,
      default: "Total"
    },
    sumDecimal: {
      type: Number,
      default: 0
    },
    sumAllPage: {
      type: Boolean,
      default: !1
    },
    editColumn: {
      type: Array
    },
    displayFields: {
      type: Array,
      default: void 0
    },
    searchFields: {
      type: Array,
      default: void 0
    },
    width: {
      type: String,
      default: "90%"
    },
    limitRow: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      resizeCleanup: null,
      sdformModel: {},
      apiUrl: this.userState.host,
      useUserState: this.userState,
      popupName: "CRUD Grid",
      popupWidth: this.width,
      showContent: !1,
      allowInsert: !1,
      allowUpdate: !1,
      iconForm: "",
      afterDeleteForm: void 0,
      titleNameForm: "",
      popupWidthdefault: "90%"
    };
  },
  async created() {
  },
  computed: {
    showPopupFlag: {
      get() {
        return this.modelValue;
      },
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t), this.$emit("change", e);
      }
    }
  },
  setup(e, t) {
    const a = ke({}), l = q();
    return { options: a, refCrudGrid: l };
  },
  mounted() {
    this.handleOpen(), this.resizeCleanup = Pe(() => {
      this.$nextTick(() => {
        this.popupWidth = oe(this.popupWidthdefault);
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    async handleOpen() {
      if (this.showContent = !1, this.formId != "")
        if (this.userState.formStore[this.formId])
          this.initForm(this.userState.formStore[this.formId]);
        else if (this.useUserState.user) {
          const e = await $e(this.formId, this.useUserState);
          e.response && e.data ? e.data.dataid && this.initForm(e.data) : B.warning(e.message);
        } else
          B.warning("Unauthorized");
      else
        B.warning("FormId not found");
    },
    handleCancel() {
      this.cancelCallback && this.cancelCallback();
    },
    initForm(e) {
      this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.showContent = !0, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Oe(this.sdformModel, this.userState.user), this.allowUpdate = Je(this.sdformModel, this.initData, this.userState.user)), this.titleNameForm = this.sdformModel.form_name ? this.sdformModel.form_name : "", this.popupName = `${this.titleNameForm}`, this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = "", this.popupWidth = oe(this.popupWidthdefault);
    }
  }
}), Wf = {
  role: "heading",
  class: "el-dialog__title"
};
function xf(e, t, a, l, o, i) {
  const s = Ze, u = ve, m = jf, f = Ce;
  return n(), h(f, {
    title: e.popupName,
    modelValue: e.showPopupFlag,
    "onUpdate:modelValue": t[0] || (t[0] = (c) => e.showPopupFlag = c),
    width: e.popupWidth,
    "show-close": !0,
    class: "dialog-grid dialog-form",
    "before-close": e.handleCancel,
    "append-to-body": "",
    "close-on-click-modal": e.backdrop,
    "close-on-press-escape": !0,
    "destroy-on-close": !0
  }, {
    header: r(({ close: c, titleId: F, titleClass: D }) => [
      $("span", Wf, [
        e.iconForm != "" ? (n(), h(s, {
          key: 0,
          "svg-data": e.iconForm
        }, null, 8, ["svg-data"])) : (n(), h(u, {
          key: 1,
          "icon-name": "icon-sdform"
        })),
        I(" " + A(e.popupName), 1)
      ])
    ]),
    default: r(() => [
      e.showContent ? (n(), h(m, {
        key: 0,
        ref: "refCrudGrid",
        "form-id": e.formId,
        "state-key": e.stateKey,
        "parent-id": e.parentId,
        params: e.params,
        "init-data": e.initData,
        readonly: e.readonly,
        "action-enable": e.actionEnable,
        "action-label": e.actionLabel,
        "action-width": e.actionWidth,
        "add-btn-enable": e.addBtnEnable,
        "add-btn-label": e.addBtnLabel,
        "data-provider": e.dataProvider,
        "display-fields": e.displayFields,
        "expand-count-children-name": e.expandCountChildrenName,
        "expand-provider": e.expandProvider,
        "export-btn-enable": e.exportBtnEnable,
        "export-row-btn-enable": e.exportRowBtnEnable,
        "clone-enable-label-field": e.cloneEnableLabelField,
        height: e.height,
        "icon-name": e.iconName,
        "index-column": e.indexColumn,
        "key-id": e.keyId,
        "max-height": e.maxHeight,
        "placeholder-search": e.placeholderSearch,
        "rawdata-btn-enable": e.rawdataBtnEnable,
        resizable: e.resizable,
        "row-key": e.rowKey,
        "search-fields": e.searchFields,
        "subform-width": e.subformWidth,
        "sum-decimal": e.sumDecimal,
        "sum-label": e.sumLabel,
        "system-column": e.systemColumn,
        "total-inline": e.totalInline,
        "title-enable": !1,
        "title-name": e.titleName,
        "fix-api-url": e.fixApiUrl,
        "aggr-column": e.aggrColumn,
        "edit-column": e.editColumn,
        "group-key": e.groupKey,
        "sum-all-page": e.sumAllPage,
        "sum-column": e.sumColumn,
        "limit-row": e.limitRow,
        "user-state": e.userState
      }, null, 8, ["form-id", "state-key", "parent-id", "params", "init-data", "readonly", "action-enable", "action-label", "action-width", "add-btn-enable", "add-btn-label", "data-provider", "display-fields", "expand-count-children-name", "expand-provider", "export-btn-enable", "export-row-btn-enable", "clone-enable-label-field", "height", "icon-name", "index-column", "key-id", "max-height", "placeholder-search", "rawdata-btn-enable", "resizable", "row-key", "search-fields", "subform-width", "sum-decimal", "sum-label", "system-column", "total-inline", "title-name", "fix-api-url", "aggr-column", "edit-column", "group-key", "sum-all-page", "sum-column", "limit-row", "user-state"])) : b("", !0)
    ]),
    _: 1
  }, 8, ["title", "modelValue", "width", "before-close", "close-on-click-modal"]);
}
const Kf = /* @__PURE__ */ U(qf, [["render", xf]]), el = /* @__PURE__ */ new Map();
function Gf(e, t) {
  let a = el.get(e);
  return a || (a = $e(e, t), el.set(e, a), a.finally(() => el.delete(e))), a;
}
const Yf = O({
  name: "SdSelectRemoteList",
  emits: ["update:modelValue", "change", "visibleChange", "remoteMethod", "ready"],
  props: {
    modelValue: null,
    dataProvider: {
      type: Object,
      required: !0
    },
    valueField: {
      type: String,
      default: "_id",
      required: !0
    },
    fieldName: {
      type: String
    },
    labelField: {
      type: Array,
      required: !0
    },
    searchField: {
      type: Array
    },
    refField: {
      type: Array
    },
    labelTemplate: {
      type: String,
      default: ""
    },
    optionsTemplate: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Please select..."
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    multipleLimit: {
      type: Number
    },
    enableObjectType: {
      type: Boolean,
      default: !1
    },
    refreshLabel: {
      type: Boolean,
      default: !1
    },
    valueObjectId: {
      type: Boolean,
      default: !1
    },
    joinerObject: {
      type: Boolean,
      default: !1
    },
    formBtnEnable: {
      type: Boolean,
      default: !1
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    limit: {
      type: Number,
      default: 20
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      apiUrl: "",
      itemsList: [],
      rawData: [],
      itemSelected: {},
      formModel: {},
      formId: "",
      loading: !1,
      htmlRender: Rt,
      search: [],
      checkAll: !1,
      indeterminate: !1,
      defaultParams: {},
      defaultSort: [],
      defaultFilter: [],
      defaultWhere: "",
      optionProvider: { limit: this.limit, page: 1 },
      useUserState: this.$props.userState,
      queryState: "",
      multiSelected: []
    };
  },
  watch: {
    value: {
      deep: !0,
      handler(e) {
        e && !this.multiple && this.getSelectData(e, void 0, !0), e ? this.multiple && (e && e.length === 0 ? (this.checkAll = !1, this.indeterminate = !1) : e && e.length === this.itemsList.length ? (this.checkAll = !0, this.indeterminate = !1) : this.indeterminate = !0) : (this.checkAll = !1, this.indeterminate = !1);
      }
    }
  },
  computed: {
    // แปลง template ({{field}}) เป็นข้อความ โดย convert ค่าตาม field type ก่อน (date/select/number/boolean ฯลฯ)
    // คืน string ดิบ — ฝั่ง template เป็นคนห่อ htmlRender เอง (กัน render ซ้ำ)
    convertValue() {
      return (e, t) => {
        let a = {};
        if (t && typeof t == "object") {
          for (const o in t)
            o !== "_raw" && (a[`{{${o}}}`] = t[o] ?? "");
          let l = this.formModel?.form_db?.schema;
          if (l)
            for (const o in l) {
              let i = pe(t, o);
              i !== void 0 && (a[`{{${o}}}`] = Ee(i, o, this.formModel) ?? "");
            }
          for (const o of e.match(/\{\{[^}]+\}\}/g) || []) {
            if (o in a) continue;
            const i = pe(t, o.slice(2, -2).trim());
            i != null && typeof i != "object" && (a[o] = i);
          }
        }
        return ue(e, a).replace(/\{\{[^}]*\}\}/g, "");
      };
    },
    // template เริ่มต้นจาก labelField (เช่น "{{f1}} {{f2}}") ใช้เป็น fallback ตอนไม่ได้ตั้ง labelTemplate/optionsTemplate
    labelFieldTemplate() {
      return (this.labelField || []).map((e) => `{{${e}}}`).join(" ");
    },
    // template สำหรับ option ใน dropdown — ถ้าไม่ได้ตั้ง optionsTemplate ให้ fallback ไปใช้ labelTemplate ก่อน
    // (ให้ option list แสดงเหมือน selected box) แล้วค่อย fallback ไป labelField ดิบเป็นลำดับสุดท้าย
    optionsFieldTemplate() {
      return this.optionsTemplate || this.labelTemplate || this.labelFieldTemplate;
    },
    // มี template ที่ต้องอ้าง field ดิบ → ต้อง fetch raw record มา render
    // (label snapshot ที่ save มามีแค่ {value,label} ไม่มี field ดิบ เลย render template ไม่ได้)
    needTemplateRaw() {
      return !!this.labelTemplate || !!this.optionsTemplate;
    },
    value: {
      get() {
        if (this.modelValue !== void 0 && this.modelValue !== null)
          if (this.multiple) {
            let e = this.modelValue;
            return typeof this.modelValue == "string" && this.modelValue !== "" && (e = this.json2Array(this.modelValue)), this.enableObjectType && (e = e.value ? e.value : e), typeof e == "object" && Array.isArray(e) && e.length > 0 ? e : null;
          } else if (this.enableObjectType) {
            let e = this.modelValue;
            if (typeof this.modelValue == "string" && this.modelValue !== "")
              e = this.json2Array(this.modelValue), e && e.value || (e = this.modelValue);
            else if (typeof this.modelValue == "object" && Object.keys(this.modelValue).length > 0)
              e = this.modelValue;
            else
              return null;
            return this.value2Object(e);
          } else
            return this.modelValue;
        else
          return null;
      },
      set(e) {
        let t = null;
        e != null && (e !== "" || typeof e == "object" && Object.keys(e).length > 0) ? this.multiple ? (this.itemSelected = this.rawData.filter((a) => {
          let l = e;
          if (a[this.valueField] && l.includes(a[this.valueField]))
            return a[this.valueField];
        }), typeof e == "string" && e !== "" ? t = this.json2Array(e) : t = e, this.setAllMulti(t, this.rawData), this.enableObjectType && (t = this.value2Object(t))) : (this.itemSelected = this.rawData.find((a) => {
          let l = e;
          if (typeof e == "object" && Object.keys(e).length > 0 && e.value && (l = e.value), a[this.valueField] && a[this.valueField] == l)
            return a[this.valueField];
        }), this.enableObjectType ? t = this.value2Object(e) : t = e) : this.itemSelected = null, this.buildState && (this.itemsList = []), this.$emit("update:modelValue", t), this.$emit("change", t, this.itemSelected);
      }
    }
  },
  async created() {
    if (this.userState.host && (this.apiUrl = this.userState.host), this.dataProvider && (this.searchField && this.searchField.length > 0 ? this.search = P(this.searchField) : this.search = P(this.labelField), this.optionProvider.search = this.search, this.dataProvider.params || (this.dataProvider.params = {}), this.dataProvider.options ? (this.dataProvider.options.page || (this.dataProvider.options.page = 1), this.dataProvider.options.limit || (this.dataProvider.options.limit = this.limit), this.dataProvider.options.search = this.search, this.optionProvider = this.dataProvider.options) : this.dataProvider.options = this.optionProvider, this.defaultParams = P(this.dataProvider.params), this.defaultSort = P(this.optionProvider.orderBy), this.defaultFilter = P(this.optionProvider.fileter), this.defaultWhere = this.optionProvider.where ? this.optionProvider.where : "", (this.joinerObject || this.formBtnEnable || this.needTemplateRaw) && (this.formId = this.dataProvider.providerId, this.dataProvider.providerType == "FORM")))
      if (this.userState.formStore[this.formId])
        this.formModel = P(this.userState.formStore[this.formId]);
      else if (this.useUserState) {
        const e = await Gf(this.formId, this.useUserState);
        e.response && e.data ? e.data.dataid && (this.userState.formStore[this.formId] = P(e.data), this.formModel = P(e.data)) : B.warning("Form not found.");
      } else
        B.warning("UserState not found.");
  },
  setup(e, t) {
    return {
      refSelect: q()
    };
  },
  async mounted() {
    this.value && !this.multiple && await this.getSelectData(this.value), this.$emit("ready");
  },
  methods: {
    async getSelectData(e, t, a = !1) {
      if (e)
        if (this.multiple) {
          let l = [];
          this.enableObjectType && e.value ? l = e.value : l = e, (this.valueObjectId || wo(this.formModel, this.valueField)) && (this.optionProvider.fileterObjectId ? this.optionProvider.fileterObjectId.includes(this.valueField) || this.optionProvider.fileterObjectId.push(this.valueField) : this.optionProvider.fileterObjectId = [this.valueField]), l.length > 0 && (this.optionProvider.fileter ? this.optionProvider.fileter[this.valueField] = l : this.optionProvider.fileter = { [this.valueField]: l }, this.dataProvider.params && this.dataProvider.params.q && (this.dataProvider.params.q = ""), this.dataProvider.options = this.optionProvider, await this.getDataAll(this.dataProvider, (o) => {
            e.length === 0 ? (this.checkAll = !1, this.indeterminate = !1) : e.length === this.itemsList.length ? (this.checkAll = !0, this.indeterminate = !1) : this.indeterminate = !0, this.value = l, t && t(o);
          }));
        } else {
          let l = "", o = !1;
          if (this.enableObjectType ? (e.label && e.value !== e.label && (o = !0), e.value ? l = `${e.value}` : l = `${e}`) : typeof e == "string" && (l = `${e}`), l !== "" && (!o || this.refreshLabel || this.needTemplateRaw)) {
            if (this.itemSelected && this.itemSelected[this.valueField] && this.itemSelected[this.valueField] === l) {
              if (!a) {
                let m = l;
                this.enableObjectType && (m = this.value2Object(l)), this.$emit("change", m, this.itemSelected);
              }
              return;
            }
            if (this.dataProvider.providerType === "FORM" && this.formId) {
              const m = gt().getRaw(this.formId, this.valueField, l);
              if (m) {
                this.itemSelected = P(m), this.addRawData(this.itemSelected), this.multiItemsList(this.rawData);
                let f = l;
                this.enableObjectType && (f = this.value2Object(l)), t && t(this.itemSelected), a || this.$emit("change", f, this.itemSelected);
                return;
              }
            }
            const s = !!this.valueObjectId || wo(this.formModel, this.valueField) ? `\`${this.valueField}\` = CONVERT(:xinputValex, 'objectId')` : `\`${this.valueField}\` = :xinputValex`, u = {
              ...this.dataProvider,
              options: {
                ...this.optionProvider,
                where: this.optionProvider.where ? `${this.optionProvider.where} AND ${s}` : s
              },
              params: { ...this.dataProvider.params, xinputValex: l, q: "" }
            };
            await this.getDataOne(u, (m) => {
              this.itemSelected = P(m), this.dataProvider.providerType === "FORM" && this.formId && m && gt().setRaw(this.formId, this.valueField, l, m);
              let f = l;
              this.enableObjectType && (f = this.value2Object(l)), t && t(m), a || this.$emit("change", f, m);
            });
          }
        }
      else
        this.itemSelected = null;
    },
    handleClear() {
      this.itemSelected = null, this.rawData = [], this.itemsList = [], this.queryState = "", this.multiSelected = [];
    },
    handleClearList() {
      this.rawData = [], this.itemsList = [], this.queryState = "", this.multiSelected = [];
    },
    handleRemote(e) {
      if (this.buildState) {
        this.itemsList = [];
        return;
      }
      !e && this.queryState && this.queryState.length > 1 && (e = this.queryState), !(this.queryState === e && this.itemsList && this.itemsList.length > 0 && !(this.queryState === "" && this.itemsList.length === 1)) && (this.$emit("remoteMethod", e), this.queryState = e, this.optionProvider.page = 1, this.optionProvider.orderBy = P(this.defaultSort), this.optionProvider.fileter = P(this.defaultFilter), e !== "" ? this.dataProvider.params.q = `%${e}%` : this.dataProvider.params.q = "", this.dataProvider.options = this.optionProvider, this.getDataAll(this.dataProvider, (t) => {
        this.itemsList.length === 0 && (this.queryState = "");
      }));
    },
    handleVisibleChange(e) {
      this.$emit("visibleChange", e);
    },
    handleRemoveTag(e) {
      const t = this.multiSelected.findIndex((a) => !!a[this.valueField] && a[this.valueField] === e);
      this.multiSelected.splice(t, 1);
    },
    setAllMulti(e, t) {
      for (const a of e) {
        const l = this.multiSelected.findIndex((i) => !!i[this.valueField] && i[this.valueField] === a), o = t.find((i) => !!i[this.valueField] && i[this.valueField] === a);
        o && (l > -1 ? this.multiSelected[l] = o : this.multiSelected.push(o));
      }
    },
    value2Object(e) {
      if (e)
        if (e.value) {
          const { _raw: t, ...a } = e;
          return a;
        } else {
          let t = e;
          if (this.multiple) {
            const o = [...this.rawData, ...this.multiSelected];
            t = ci(o, e, this.valueField, this.labelField, this.labelTemplate);
          } else {
            let o = this.itemsList.find((i) => !!i.value && i.value == e);
            o && o.label && (t = o.label);
          }
          let a = {};
          if (this.refField) {
            let o = {};
            this.itemSelected ? o = P(this.itemSelected) : o = this.rawData.find((i) => {
              if (this.multiple) {
                let s = e;
                if (i[this.valueField] && s.includes(i[this.valueField]))
                  return i[this.valueField];
              } else {
                let s = e;
                if (typeof e == "object" && Object.keys(e).length > 0 && e.value && (s = e.value), i[this.valueField] && i[this.valueField] == s)
                  return i[this.valueField];
              }
            }), this.refField.forEach((i) => {
              const s = pe(o, i);
              ll(a, i, s);
            });
          }
          let l = {};
          if (this.joinerObject && this.itemSelected) {
            let o;
            if (this.fieldName ? o = pe(this.itemSelected, this.fieldName) : this.formModel.joiner_field.joiner_enable && (o = pe(this.itemSelected, this.formModel.joiner_field.field_name)), o) {
              const i = P(o);
              let s = 1;
              for (const u in i) {
                const m = /xtbxlv/g;
                u.search(m) !== -1 && (s++, l[u] = i[u] ? i[u] : null);
              }
              l[`xtbxlv${s}_xfx${this.valueField}`] = i.value ? i.value : null;
            }
          }
          return {
            value: e,
            label: t,
            ...l,
            ...a
          };
        }
      else
        return null;
    },
    handleCheckAll(e) {
      this.indeterminate = !1, e ? this.value = this.itemsList.map((t) => t.value) : this.value = [];
    },
    json2Array(e) {
      try {
        return JSON.parse(e);
      } catch {
        return [];
      }
    },
    multiItemsList(e) {
      e && e.length > 0 ? this.itemsList = e.map((t) => {
        if (t[this.valueField])
          return this.getItemsList(t);
      }) : this.itemsList = [];
    },
    // คืน rawData ของ item ที่เลือก เพื่อใช้กับ convertValue ตอน render label
    // value เป็น object: ใช้ _raw ถ้ามี → ไม่งั้นหา raw doc จาก list ที่โหลดมา (ค่าที่ save ไม่เก็บ _raw แล้ว) → fallback object เดิม
    // value เป็น scalar: หาใน rawData ด้วย valueField
    // คืน raw doc ของ item ที่เลือก (มี field ดิบครบ) — ไม่มี raw จริง → null (อย่าคืน snapshot {value,label} มา render template)
    // value เป็น object: ใช้ _raw ถ้ามี → ไม่งั้นหา raw doc จาก list ที่โหลดมา → ไม่เจอคืน null
    // value เป็น scalar: หาใน rawData ด้วย valueField → ไม่เจอคืน null
    labelRaw(e) {
      return e && typeof e == "object" ? e._raw ? e._raw : this.rawData.find((t) => t[this.valueField] === e.value) ?? null : this.rawData.find((t) => t[this.valueField] === e) ?? null;
    },
    // ข้อความที่โชว์ในช่อง select เมื่อเลือกค่าแล้ว:
    // มี raw doc → convert ตาม schema; ไม่มี raw (ยังไม่โหลด list) → fallback label snapshot ที่ติดมากับค่าเลย
    // (อย่า render template กับ snapshot — static text ในเทมเพลต เช่น "( )" จะรอดการ strip placeholder แล้วโชว์ "()")
    selectedLabel(e) {
      const t = this.labelRaw(e);
      if (t) {
        const a = this.convertValue(this.labelTemplate ? this.labelTemplate : this.labelFieldTemplate, t);
        if (a && a.trim() !== "") return a;
      }
      return e && typeof e == "object" ? `${e.label ?? e.value ?? ""}` : `${e ?? ""}`;
    },
    getItemsList(e) {
      let t = [];
      this.labelField.forEach((i) => {
        const s = pe(e, i);
        s && t.push(s);
      });
      let a = t.join(" "), l = {};
      this.refField && this.refField.forEach((i) => {
        const s = pe(e, i);
        ll(l, i, s);
      });
      let o = {};
      if (this.joinerObject) {
        let i;
        if (this.fieldName ? i = pe(e, this.fieldName) : this.formModel.joiner_field.joiner_enable && (i = pe(e, this.formModel.joiner_field.field_name)), i) {
          const s = P(i);
          let u = 1;
          for (const m in s) {
            const f = /xtbxlv/g;
            m.search(f) !== -1 && (u++, o[m] = s[m] ? s[m] : null);
          }
          o[`xtbxlv${u}_xfx${this.valueField}`] = s.value ? s.value : null;
        }
      }
      return { value: e[this.valueField], label: a, _raw: e, ...o, ...l };
    },
    async getDataAll(e, t) {
      this.loading = !0, await ce.post(
        `${this.apiUrl}/widget/crud/getdata-all`,
        {
          sdProvider: e,
          totalEnable: !1
        },
        {
          headers: {
            Authorization: `Bearer ${this.userState.user?.token}`
          }
        }
      ).then((a) => {
        a && a.data && a.data.data && (this.rawData = P(a.data.data), this.multiItemsList(a.data.data), t && t(this.rawData)), this.loading = !1;
      }).catch((a) => {
        a.response && a.response.data && a.response.data.message ? B.warning(a.response.data.message) : B.warning(a.message), this.loading = !1, this.itemsList = [];
      });
    },
    async getDataOne(e, t) {
      this.loading = !0, await ce.post(
        `${this.apiUrl}/widget/crud/getdata-one`,
        { sdProvider: e },
        {
          headers: {
            Authorization: `Bearer ${this.userState.user?.token}`
          }
        }
      ).then((a) => {
        a.data && a.data.message && (this.itemSelected = P(a.data.data), this.addRawData(this.itemSelected), this.multiItemsList(this.rawData), t && t(this.itemSelected)), this.loading = !1;
      }).catch((a) => {
        this.loading = !1;
      });
    },
    addRawData(e) {
      if (this.dataProvider.providerType == "FORM") {
        const t = this.rawData.findIndex((a) => a._id === e._id);
        t !== -1 ? this.rawData[t] = P(e) : this.rawData.unshift(P(e));
      } else {
        const t = this.rawData.findIndex((a) => a[this.valueField] === e[this.valueField]);
        t !== -1 ? this.rawData[t] = P(e) : this.rawData.unshift(P(e));
      }
    }
  }
}), Jf = ["innerHTML"], Xf = ["innerHTML"], Qf = ["innerHTML"];
function Zf(e, t, a, l, o, i) {
  const s = Va, u = Bt, m = Lt;
  return n(), h(m, {
    ref: "refSelect",
    modelValue: e.value,
    "onUpdate:modelValue": t[1] || (t[1] = (f) => e.value = f),
    multiple: e.multiple,
    "multiple-limit": e.multipleLimit,
    remote: "",
    "remote-show-suffix": "",
    placeholder: e.placeholder,
    "remote-method": e.handleRemote,
    loading: e.loading,
    "suffix-icon": e.buildState ? "" : "ArrowDown",
    onRemoveTag: e.handleRemoveTag,
    onClear: e.handleClear,
    onVisibleChange: e.handleVisibleChange
  }, Ye({
    prefix: r(() => [
      re(e.$slots, "prefix")
    ]),
    label: r(({ value: f }) => [
      $("div", {
        innerHTML: e.htmlRender(e.selectedLabel(f))
      }, null, 8, Qf)
    ]),
    default: r(() => [
      e.optionsTemplate ? (n(!0), v(L, { key: 0 }, J(e.itemsList, (f) => (n(), h(u, {
        key: f.value,
        label: f.label,
        value: e.enableObjectType && !e.multiple ? f : f.value,
        style: { height: "auto", "border-bottom": "1px solid var(--el-border-color)", position: "relative" }
      }, {
        default: r(() => [
          $("div", {
            innerHTML: e.htmlRender(e.convertValue(e.optionsTemplate, f._raw))
          }, null, 8, Jf)
        ]),
        _: 2
      }, 1032, ["label", "value"]))), 128)) : b("", !0),
      e.optionsTemplate ? b("", !0) : (n(!0), v(L, { key: 1 }, J(e.itemsList, (f) => (n(), h(u, {
        key: f.value,
        label: f.label,
        value: e.enableObjectType && !e.multiple ? f : f.value
      }, {
        default: r(() => [
          $("div", {
            innerHTML: e.htmlRender(e.convertValue(e.optionsFieldTemplate, f._raw))
          }, null, 8, Xf)
        ]),
        _: 2
      }, 1032, ["label", "value"]))), 128))
    ]),
    _: 2
  }, [
    e.multiple && !e.multipleLimit ? {
      name: "header",
      fn: r(() => [
        d(s, {
          modelValue: e.checkAll,
          "onUpdate:modelValue": t[0] || (t[0] = (f) => e.checkAll = f),
          indeterminate: e.indeterminate,
          onChange: e.handleCheckAll
        }, {
          default: r(() => [...t[2] || (t[2] = [
            I(" Select All ", -1)
          ])]),
          _: 1
        }, 8, ["modelValue", "indeterminate", "onChange"])
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["modelValue", "multiple", "multiple-limit", "placeholder", "remote-method", "loading", "suffix-icon", "onRemoveTag", "onClear", "onVisibleChange"]);
}
const Sl = /* @__PURE__ */ U(Yf, [["render", Zf]]), ec = O({
  name: "SdCrudSelect",
  components: {
    // SdSelectRemoteList,
    // SdCrudPopupForm,
  },
  emits: ["update:modelValue", "change", "visibleChange", "remoteMethod"],
  props: {
    modelValue: null,
    formId: {
      type: String,
      required: !0
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    parentId: {
      type: String,
      default: ""
    },
    params: {
      type: Object
    },
    valueField: {
      type: String,
      default: "_id"
    },
    labelField: {
      type: Array,
      required: !0
    },
    searchField: {
      type: Array
    },
    refField: {
      type: Array
    },
    labelTemplate: {
      type: String,
      default: ""
    },
    optionsTemplate: {
      type: String,
      default: ""
    },
    orderBy: {
      type: Array,
      default: []
    },
    where: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Please select..."
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    enableObjectType: {
      type: Boolean,
      default: !1
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    formBtnEnable: {
      type: Boolean,
      default: !0
    },
    cloneEnableLabelField: {
      type: String,
      default: ""
    },
    allowCreate: {
      type: Boolean,
      default: !1
    },
    limit: {
      type: Number,
      default: 20
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    dependEnable: {
      type: Boolean,
      default: !1
    },
    dependField: {
      type: Object
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      value: this.modelValue,
      apiUrl: "",
      userBy: this.userState.user,
      useUserState: this.$props.userState,
      sdformModel: {},
      formData: {},
      disable: !1,
      loadForm: !1,
      curFormId: this.formId,
      insertBtnEnable: !1,
      updateBtnEnable: !1,
      viewBtnEnable: !1,
      readonlySelect: !1,
      backdropSelect: !1,
      showPopupFlag: !1,
      dataId: "",
      defaultWhere: this.where,
      isInsert: !0,
      dpSelect: {
        providerId: this.formId,
        providerType: this.providerType,
        params: this.params ? { parentId: this.parentId, ...this.params } : { parentId: this.parentId },
        options: { orderBy: this.orderBy, where: this.where, limit: this.limit }
      }
    };
  },
  watch: {
    "dependField.value": {
      deep: !1,
      handler(e) {
        if (this.dependEnable) {
          if (!e)
            this.value = null, this.dataId = "", this.formData = {}, this.disable = !1, this.readonlySelect = !1, this.isInsert = !0;
          else if (this.selectInput) {
            const t = this.selectInput.itemSelected && this.selectInput.itemSelected.xparentx ? this.selectInput.itemSelected.xparentx : "";
            this.dependParentId !== t && (this.value = null, this.dataId = "", this.formData = {}, this.disable = !1, this.readonlySelect = !1, this.isInsert = !0);
          }
        }
      }
    }
  },
  computed: {
    dependOn() {
      return this.dependEnable ? this.dependField ? !!this.dependField.value : !1 : !0;
    },
    dependParentId() {
      return this.dependEnable && this.dependField && this.dependField.selectInput ? this.dependField.selectInput.itemSelected && this.dependField.selectInput.itemSelected._id ? this.dependField.selectInput.itemSelected._id : "" : this.parentId;
    }
  },
  setup() {
    const e = q(), t = q();
    return {
      refSdForm: e,
      selectInput: t
    };
  },
  async mounted() {
    if (this.dpSelect.options || (this.dpSelect.options = {}), this.dependParentId ? this.dpSelect.options.where ? this.dpSelect.options.where += " AND xparentx = CONVERT(:parentId, 'objectId')" : this.dpSelect.options.where = "xparentx = CONVERT(:parentId, 'objectId')" : this.dpSelect.options.where = this.defaultWhere, this.formBtnEnable && this.providerType == "FORM") {
      if (this.userState.formStore[this.formId])
        this.sdformModel = P(this.userState.formStore[this.formId]);
      else if (this.useUserState.user) {
        const e = await $e(this.formId, this.useUserState);
        e.response && e.data ? e.data.dataid && (this.userState.formStore[this.formId] = P(e.data), this.sdformModel = P(e.data)) : B.warning("Form not found.");
      } else
        B.warning("Unauthorized");
      this.sdformModel._id && (this.viewBtnEnable = Zt(this.sdformModel, this.useUserState.user), this.insertBtnEnable = Oe(this.sdformModel, this.useUserState.user), this.selectInput.itemSelected && (this.updateBtnEnable = Je(this.sdformModel, this.selectInput.itemSelected, this.useUserState.user)));
    }
  },
  methods: {
    async handleOpenFormAdd() {
      this.disable = !0, this.formData = {}, this.readonlySelect = !1, this.backdropSelect = !1, this.showPopupFlag = !0, this.dataId = "";
    },
    handleOpenFormEdit() {
      this.formData = P(this.selectInput.itemSelected), this.readonlySelect = !1, this.backdropSelect = !1, this.showPopupFlag = !0, this.getDataId();
    },
    handleClone() {
      this.disable = !0, this.formData = P(this.selectInput.itemSelected), this.readonlySelect = !1, this.backdropSelect = !1, this.showPopupFlag = !1, this.dataId = "";
      const e = this.formData._id;
      delete this.formData._id, this.formData[this.cloneEnableLabelField] = this.formData[this.cloneEnableLabelField] + " clone", ye.confirm("Are you sure you want to clone this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (this.sdformModel.dataid) {
          const t = await za(this.sdformModel.dataid, this.useUserState);
          if (t) {
            this.formData = { ...t, ...this.formData }, this.formData.xversionx = this.sdformModel.form_version, this.formData.xclonex = e, this.formData.dataid = this.formData._id, this.formData.xrstatx = 0;
            const a = await yt(this.sdformModel.dataid, this.formData._id, this.formData, 1, this.useUserState), l = a.data;
            l ? (l.dataid = this.formData._id, this.handleAferSaveForm(l, !1)) : B.warning(a.message);
          } else
            B.warning("Unable to create empty data");
        }
      }).catch((t) => {
        console.log(t);
      });
    },
    handleOpenFormView() {
      this.disable = !0, this.formData = P(this.selectInput.itemSelected), this.readonlySelect = !0, this.backdropSelect = !0, this.showPopupFlag = !0, this.getDataId();
    },
    handleAferSaveForm(e, t) {
      this.selectInput.rawData = [{ ...P(e) }], this.selectInput.value = e[this.valueField], this.dataId = "", this.formData = {}, this.disable = !1, this.readonlySelect = !1, this.showPopupFlag = !1;
    },
    async handleCancelForm() {
      this.dataId = "", this.formData = {}, this.disable = !1, this.readonlySelect = !1, this.showPopupFlag = !1;
    },
    handleRemote(e) {
      this.$emit("remoteMethod", e), this.dpSelect.params.parentId = this.dependParentId, this.dpSelect.options || (this.dpSelect.options = {}), this.dependParentId ? this.dpSelect.options.where ? this.dpSelect.options.where += " AND xparentx = CONVERT(:parentId, 'objectId')" : this.dpSelect.options.where = "xparentx = CONVERT(:parentId, 'objectId')" : this.dpSelect.options.where = this.defaultWhere;
    },
    handleVisibleChange(e) {
      this.$emit("visibleChange", e);
    },
    handleChange(e, t) {
      let a = this.value;
      this.formBtnEnable && this.sdformModel._id && this.providerType == "FORM" && (this.viewBtnEnable = Zt(this.sdformModel, this.useUserState.user), this.insertBtnEnable = Oe(this.sdformModel, this.useUserState.user), t && (this.updateBtnEnable = Je(this.sdformModel, t, this.useUserState.user))), this.$emit("update:modelValue", a), this.$emit("change", a, t), this.getDataId(), this.dataId ? this.isInsert = !1 : this.isInsert = !0;
    },
    getDataId() {
      this.selectInput && this.selectInput.itemSelected && this.selectInput.itemSelected._id ? (this.dataId = this.selectInput.itemSelected._id, this.formData = this.selectInput.itemSelected) : (this.dataId = "", this.formData = {});
    },
    getValueSelect(e) {
      return this.enableObjectType ? e.value ? e.value : null : e;
    }
  }
}), tc = { key: 2 };
function ac(e, t, a, l, o, i) {
  const s = ie, u = Hf, m = Sl;
  return n(), h(m, {
    ref: "selectInput",
    filterable: "",
    clearable: "",
    modelValue: e.value,
    "onUpdate:modelValue": t[1] || (t[1] = (f) => e.value = f),
    multiple: e.multiple,
    "allow-create": e.allowCreate,
    placeholder: e.placeholder,
    "enable-object-type": e.enableObjectType,
    disabled: e.readonly || e.disable || !e.dependOn,
    "data-provider": e.dpSelect,
    "value-field": e.valueField,
    "search-field": e.searchField,
    "label-field": e.labelField,
    "ref-field": e.refField,
    limit: e.limit,
    "label-template": e.labelTemplate,
    "options-template": e.optionsTemplate,
    "user-state": e.userState,
    onRemoteMethod: e.handleRemote,
    onVisibleChange: e.handleVisibleChange,
    onChange: e.handleChange
  }, Ye({ _: 2 }, [
    !e.readonly && !e.multiple && e.providerType == "FORM" && e.formBtnEnable ? {
      name: "prefix",
      fn: r(() => [
        e.isInsert ? (n(), v(L, { key: 0 }, [
          e.insertBtnEnable ? (n(), h(s, {
            key: 0,
            type: "success",
            size: "small",
            icon: "Plus",
            plain: "",
            circle: "",
            onClick: j(e.handleOpenFormAdd, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0)
        ], 64)) : (n(), v(L, { key: 1 }, [
          e.updateBtnEnable ? (n(), h(s, {
            key: 0,
            type: "primary",
            size: "small",
            icon: "Edit",
            plain: "",
            circle: "",
            onClick: j(e.handleOpenFormEdit, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0),
          e.cloneEnableLabelField && e.insertBtnEnable ? (n(), h(s, {
            key: 1,
            type: "warning",
            size: "small",
            icon: "CopyDocument",
            plain: "",
            circle: "",
            onClick: j(e.handleClone, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0),
          e.viewBtnEnable ? (n(), h(s, {
            key: 2,
            type: "info",
            size: "small",
            icon: "View",
            plain: "",
            circle: "",
            onClick: j(e.handleOpenFormView, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0)
        ], 64)),
        e.showPopupFlag ? (n(), v("div", tc, [
          d(u, {
            ref: "refSdForm",
            modelValue: e.showPopupFlag,
            "onUpdate:modelValue": t[0] || (t[0] = (f) => e.showPopupFlag = f),
            "form-id": e.formId,
            "data-id": e.dataId,
            "parent-id": e.dependParentId,
            "init-data": e.formData,
            params: e.params,
            readonly: e.readonlySelect,
            backdrop: e.backdropSelect,
            "user-state": e.userState,
            "after-save-callback": e.handleAferSaveForm,
            "cancel-callback": e.handleCancelForm
          }, null, 8, ["modelValue", "form-id", "data-id", "parent-id", "init-data", "params", "readonly", "backdrop", "user-state", "after-save-callback", "cancel-callback"])
        ])) : b("", !0)
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["modelValue", "multiple", "allow-create", "placeholder", "enable-object-type", "disabled", "data-provider", "value-field", "search-field", "label-field", "ref-field", "limit", "label-template", "options-template", "user-state", "onRemoteMethod", "onVisibleChange", "onChange"]);
}
const Hw = /* @__PURE__ */ U(ec, [["render", ac]]), lc = O({
  name: "SdCrudSelectSubForm",
  components: {
    // SdSelectRemoteList,
  },
  emits: ["update:modelValue", "change", "visibleChange", "remoteMethod", "update:crudPopupForm"],
  props: {
    modelValue: null,
    formId: {
      type: String,
      required: !0
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    parentId: {
      type: String,
      default: ""
    },
    params: {
      type: Object
    },
    valueField: {
      type: String,
      default: "_id"
    },
    labelField: {
      type: Array,
      required: !0
    },
    searchField: {
      type: Array
    },
    refField: {
      type: Array
    },
    labelTemplate: {
      type: String,
      default: ""
    },
    optionsTemplate: {
      type: String,
      default: ""
    },
    orderBy: {
      type: Array,
      default: void 0
    },
    where: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: "Please select..."
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    enableObjectType: {
      type: Boolean,
      default: !1
    },
    refreshLabel: {
      type: Boolean,
      default: !1
    },
    getdataOnLoad: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    formBtnEnable: {
      type: Boolean,
      default: !1
    },
    cloneEnableLabelField: {
      type: String,
      default: ""
    },
    valueObjectId: {
      type: Boolean,
      default: !1
    },
    allowCreate: {
      type: Boolean,
      default: !1
    },
    limit: {
      type: Number,
      default: 20
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    dependEnable: {
      type: Boolean,
      default: !1
    },
    dependField: {
      type: Object
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      // value: this.modelValue as any,
      apiUrl: "",
      userBy: this.userState.user,
      useUserState: this.$props.userState,
      sdformModel: {},
      formData: {},
      disableAction: !1,
      loadForm: !1,
      curFormId: this.formId,
      insertBtnEnable: !1,
      updateBtnEnable: !1,
      viewBtnEnable: !1,
      readonlySelect: !1,
      backdropSelect: !1,
      showPopupFlag: !1,
      dataId: "",
      defaultWhere: this.where,
      defaultParentId: this.parentId,
      defaultDependParentId: void 0,
      defaultParams: this.params ? { parentId: this.parentId, ...this.params } : { parentId: this.parentId },
      defaultOptions: { orderBy: this.orderBy, where: this.where, limit: this.limit },
      isInsert: !0,
      parentState: !0
    };
  },
  watch: {
    params: {
      deep: !0,
      handler(e) {
        e && (this.defaultParams = { ...this.defaultParams, ...e });
      }
    },
    parentId: {
      deep: !0,
      handler(e) {
        e && (e !== this.defaultParentId ? this.defaultParentId ? (this.value = null, this.dataId = "", this.formData = {}, this.disableAction = !1, this.readonlySelect = !1, this.isInsert = !0, this.$emit("change", null), this.selectInput.handleClear()) : (this.defaultParentId = e, this.defaultOptions.where = this.defaultWhere, this.selectInput.handleClear()) : this.parentState ? (this.value = null, this.dataId = "", this.formData = {}, this.disableAction = !1, this.readonlySelect = !1, this.isInsert = !0, this.selectInput.handleClear(), this.$emit("change", null), this.parentState = !1) : this.selectInput.handleClear());
      }
    },
    "dependField.value": {
      deep: !1,
      handler(e) {
        if (this.dependEnable)
          if (e && (typeof e == "object" && Object.keys(e).length > 0 || typeof e == "string" && e !== "")) {
            if (this.selectInput) {
              const t = this.selectInput.itemSelected && this.selectInput.itemSelected.xparentx ? this.selectInput.itemSelected.xparentx : "";
              t && this.dependParentId !== t ? (this.value = null, this.dataId = "", this.formData = {}, this.disableAction = !1, this.readonlySelect = !1, this.isInsert = !0, this.$emit("change", null), this.selectInput.handleClearList()) : this.selectInput.handleClearList();
            }
          } else
            this.value = null, this.dataId = "", this.formData = {}, this.disableAction = !1, this.readonlySelect = !1, this.isInsert = !0, this.$emit("change", null), this.selectInput && this.selectInput.handleClearList();
      }
    },
    modelValue: {
      deep: !1,
      async handler(e) {
        e ? this.selectInput && !this.multiple && (this.defaultParams.parentId = this.dependParentId, this.providerType == "FORM" && (this.dependEnable ? this.formBtnEnable && this.subFormOpen ? (this.defaultOptions.where = this.defaultWhere, await this.selectInput.getSelectData(this.getValueSelect(e))) : (this.defaultOptions.where = this.defaultWhere, await this.selectInput.getSelectData(this.getValueSelect(e))) : (this.selectInput && this.selectInput.itemSelected ? this.selectInput.itemSelected.xparentx && this.selectInput.itemSelected.xparentx !== this.defaultParentId && this.parentId === this.selectInput.itemSelected.xparentx ? this.parentState = !0 : this.parentState = !1 : this.parentState = !1, await this.selectInput.getSelectData(this.getValueSelect(e)))), this.multiple || this.enableObjectType || await this.selectInput.getSelectData(this.getValueSelect(e))) : (this.isInsert = !0, this.selectInput.handleClear());
      }
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t);
      }
    },
    backdrop() {
      return !!this.sdformModel.form_options?.backdrop;
    },
    dependOn() {
      return this.dependEnable ? this.dependField ? !!this.dependField.value && (typeof this.dependField.value == "object" && Object.keys(this.dependField.value).length > 0 || typeof this.dependField.value == "string" && this.dependField.value !== "") : !1 : !0;
    },
    dependParentId() {
      if (this.dependEnable && this.dependField && this.dependField.selectInput) {
        const e = this.dependField.selectInput.itemSelected && this.dependField.selectInput.itemSelected._id ? this.dependField.selectInput.itemSelected._id : "";
        if (e)
          return e;
      }
      return this.parentId;
    },
    defaultPopUpForm() {
      return {
        formId: this.formId,
        parentId: this.dependParentId,
        cancelCallback: this.handleCancelForm,
        afterSaveCallback: this.handleAferSaveForm
      };
    },
    selectParams() {
      return this.defaultParams;
    },
    selectOptions() {
      return this.defaultOptions;
    },
    getParentFormId() {
      return this.sdformModel && this.sdformModel.joiner_field && this.sdformModel.joiner_field.joiner_enable && this.sdformModel.joiner_field.form_id ? this.sdformModel.joiner_field.form_id.value : null;
    }
  },
  setup() {
    const e = q(), t = q();
    return {
      subFormOpen: R("subFormOpen", void 0),
      refSdForm: e,
      selectInput: t
    };
  },
  async mounted() {
    await this.formBtnRender(), await this.itemInit();
  },
  methods: {
    async itemInit() {
      this.selectInput && this.value && (this.formBtnEnable && this.subFormOpen || this.dependEnable || this.multiple || this.getdataOnLoad) && (this.selectInput.itemSelected && Object.keys(this.selectInput.itemSelected).length > 0 && this.selectInput.itemSelected || await this.selectInput.getSelectData(this.getValueSelect(this.value), async (t) => {
        this.dependField && !this.dependField.dependEnable && !this.dependField.formBtnEnable && this.dependField.selectInput && (!this.dependField.selectInput.itemSelected || this.dependField.selectInput.itemSelected && Object.keys(this.dependField.selectInput.itemSelected).length === 0) && await this.dependField.selectInput.getSelectData(this.getValueSelect(this.dependField.value));
      }));
    },
    async formBtnRender() {
      if (this.providerType == "FORM") {
        if (this.userState.formStore[this.formId])
          this.sdformModel = P(this.userState.formStore[this.formId]);
        else if (this.useUserState.user)
          if (this.formId) {
            const e = await $e(this.formId, this.useUserState);
            e.response && e.data ? e.data.dataid && (this.userState.formStore[this.formId] = P(e.data), this.sdformModel = P(e.data)) : B.warning("Form not found.");
          } else
            B.warning("Please select form.");
        else
          B.warning("Unauthorized");
        this.sdformModel._id && (this.viewBtnEnable = Zt(this.sdformModel, this.useUserState.user), this.insertBtnEnable = Oe(this.sdformModel, this.useUserState.user), this.selectInput && this.selectInput.itemSelected && (this.updateBtnEnable = Je(this.sdformModel, this.selectInput.itemSelected, this.useUserState.user)));
      }
    },
    async handleOpenFormAdd() {
      this.disableAction = !0, this.formData = {}, this.readonlySelect = !1, this.backdropSelect = this.backdrop, this.showPopupFlag = !0, this.dataId = "", this.handlePopUpForm();
    },
    handleOpenFormEdit() {
      this.disableAction = !0, this.formData = P(this.selectInput.itemSelected), this.readonlySelect = !1, this.backdropSelect = this.backdrop, this.showPopupFlag = !0, this.getDataId(), this.handlePopUpForm();
    },
    handleClone() {
      this.disableAction = !0, this.formData = P(this.selectInput.itemSelected), this.readonlySelect = !1, this.backdropSelect = !1, this.showPopupFlag = !1, this.dataId = "";
      const e = this.formData._id;
      delete this.formData._id, this.formData[this.cloneEnableLabelField] = this.formData[this.cloneEnableLabelField] + " clone", ye.confirm("Are you sure you want to clone this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (this.sdformModel.dataid) {
          const t = await za(this.sdformModel.dataid, this.useUserState);
          if (t) {
            this.formData = { ...t, ...this.formData }, this.formData.xversionx = this.sdformModel.form_version, this.formData.xclonex = e, this.formData.dataid = this.formData._id, this.formData.xrstatx = 0;
            const a = await yt(this.sdformModel.dataid, this.formData._id, this.formData, 1, this.useUserState), l = a.data;
            l ? (l.dataid = this.formData._id, this.handleAferSaveForm(l, !1)) : (this.disableAction = !1, B.warning(a.message));
          } else
            this.disableAction = !1, B.warning("Unable to create empty data");
        }
      }).catch((t) => {
        this.disableAction = !1;
      });
    },
    handleOpenFormView() {
      this.disableAction = !0, this.formData = P(this.selectInput.itemSelected), this.readonlySelect = !0, this.backdropSelect = !0, this.showPopupFlag = !0, this.getDataId(), this.handlePopUpForm();
    },
    handleAferSaveForm(e, t) {
      this.selectInput.addRawData(e), this.selectInput.multiItemsList(this.selectInput.rawData), this.selectInput.value = e[this.valueField], this.dataId = "", this.formData = {}, this.disableAction = !1, this.readonlySelect = !1, this.showPopupFlag = !1, this.handlePopUpForm();
    },
    async handleCancelForm() {
      this.dataId = "", this.formData = {}, this.disableAction = !1, this.readonlySelect = !1, this.showPopupFlag = !1, this.handlePopUpForm();
    },
    handlePopUpForm() {
      this.subFormOpen && this.subFormOpen({
        modelValue: this.showPopupFlag,
        dataId: this.dataId,
        initData: this.formData,
        backdrop: this.backdropSelect,
        readonly: this.readonlySelect,
        ...this.defaultPopUpForm
      });
    },
    handleRemote(e) {
      this.buildState || (this.$emit("remoteMethod", e), this.defaultParams.parentId = this.dependParentId, this.defaultOptions.where = this.defaultWhere, this.dependParentId && (this.defaultOptions.where ? this.defaultOptions.where += " AND xparentx = CONVERT(:parentId, 'objectId')" : this.defaultOptions.where = "xparentx = CONVERT(:parentId, 'objectId')"));
    },
    handleVisibleChange(e) {
      this.$emit("visibleChange", e);
    },
    handleChange(e, t) {
      try {
        let a = e;
        this.providerType == "FORM" && (this.sdformModel && this.sdformModel._id && (this.viewBtnEnable = Zt(this.sdformModel, this.useUserState.user), this.insertBtnEnable = Oe(this.sdformModel, this.useUserState.user), t && (this.updateBtnEnable = Je(this.sdformModel, t, this.useUserState.user))), this.getDataId(), this.dataId ? this.isInsert = !1 : this.isInsert = !0), this.$emit("change", a, t);
      } catch (a) {
        console.log(a);
      }
    },
    getDataId() {
      this.selectInput && this.selectInput.itemSelected && this.selectInput.itemSelected._id ? (this.dataId = this.selectInput.itemSelected._id, this.formData = this.selectInput.itemSelected) : (this.dataId = "", this.formData = {});
    },
    getValueSelect(e) {
      return this.enableObjectType ? e && e.value ? e.value : null : e;
    }
  }
});
function oc(e, t, a, l, o, i) {
  const s = ie, u = Sl;
  return n(), h(u, {
    ref: "selectInput",
    filterable: "",
    clearable: "",
    modelValue: e.value,
    "onUpdate:modelValue": t[0] || (t[0] = (m) => e.value = m),
    multiple: e.multiple,
    "allow-create": e.allowCreate,
    placeholder: e.placeholder,
    "enable-object-type": e.enableObjectType,
    "refresh-label": e.refreshLabel,
    disabled: e.disabled || e.disableAction || !e.dependOn,
    "data-provider": {
      providerId: e.formId,
      providerType: e.providerType,
      params: e.selectParams,
      options: e.selectOptions
    },
    "value-field": e.valueField,
    "search-field": e.searchField,
    "label-field": e.labelField,
    "ref-field": e.refField,
    limit: e.limit,
    "value-object-id": e.valueObjectId,
    "form-btn-enable": e.formBtnEnable || e.getdataOnLoad,
    "label-template": e.labelTemplate,
    "options-template": e.optionsTemplate,
    "user-state": e.userState,
    "build-state": e.buildState,
    onRemoteMethod: e.handleRemote,
    onVisibleChange: e.handleVisibleChange,
    onChange: e.handleChange
  }, Ye({ _: 2 }, [
    !e.disabled && !e.multiple && e.providerType == "FORM" && e.formBtnEnable && e.subFormOpen && e.dependOn ? {
      name: "prefix",
      fn: r(() => [
        e.isInsert ? (n(), v(L, { key: 0 }, [
          e.insertBtnEnable ? (n(), h(s, {
            key: 0,
            type: "success",
            size: "small",
            icon: "Plus",
            plain: "",
            circle: "",
            onClick: j(e.handleOpenFormAdd, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0)
        ], 64)) : (n(), v(L, { key: 1 }, [
          e.updateBtnEnable ? (n(), h(s, {
            key: 0,
            type: "primary",
            size: "small",
            icon: "Edit",
            plain: "",
            circle: "",
            onClick: j(e.handleOpenFormEdit, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0),
          e.cloneEnableLabelField && e.insertBtnEnable ? (n(), h(s, {
            key: 1,
            type: "warning",
            size: "small",
            icon: "CopyDocument",
            plain: "",
            circle: "",
            onClick: j(e.handleClone, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0),
          !e.updateBtnEnable && e.viewBtnEnable ? (n(), h(s, {
            key: 2,
            type: "info",
            size: "small",
            icon: "View",
            plain: "",
            circle: "",
            onClick: j(e.handleOpenFormView, ["prevent"]),
            style: { margin: "0px" }
          }, null, 8, ["onClick"])) : b("", !0)
        ], 64))
      ]),
      key: "0"
    } : void 0
  ]), 1032, ["modelValue", "multiple", "allow-create", "placeholder", "enable-object-type", "refresh-label", "disabled", "data-provider", "value-field", "search-field", "label-field", "ref-field", "limit", "value-object-id", "form-btn-enable", "label-template", "options-template", "user-state", "build-state", "onRemoteMethod", "onVisibleChange", "onChange"]);
}
const ic = /* @__PURE__ */ U(lc, [["render", oc]]), Fi = /* @__PURE__ */ O({
  __name: "SdSelectPathData",
  props: {
    modelValue: null,
    disabled: {
      type: Boolean,
      default: !1
    },
    dataObject: {
      type: Object,
      default: {}
    },
    path: {
      type: String,
      default: ""
    },
    fixedOptions: {
      type: Object
    },
    groupField: {
      type: String,
      default: ""
    },
    valueField: {
      type: String,
      default: ""
    },
    labelField: {
      type: Array,
      default: []
    },
    labelTemplate: {
      type: String,
      default: ""
    },
    allowCreate: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    },
    sqlTag: {
      type: Boolean,
      default: !1
    },
    prefixProp: {
      type: String,
      default: ""
    },
    spaceChar: {
      type: String,
      default: "."
    },
    systemFieldAddon: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const a = e, l = ke({
      checkAll: !1,
      indeterminate: !1,
      disableAction: !1,
      dataObjectMode: !0,
      onMounted: !1
    }), o = (F) => {
      a.multiple && (F && F.length === 0 ? (l.checkAll = !1, l.indeterminate = !1) : F && F.length === f.value.length ? (l.checkAll = !0, l.indeterminate = !1) : l.indeterminate = !0);
    }, i = t, s = Z({
      get() {
        return a.modelValue;
      },
      set(F) {
        i("update:modelValue", F);
      }
    });
    function u(F) {
      i("change", F);
    }
    function m(F) {
      l.indeterminate = !1, F ? s.value = f.value.map((D) => D.value) : s.value = [];
    }
    xe(() => {
      c();
    }), tt(
      () => a.dataObject,
      (F) => {
        c();
      },
      { deep: !1 }
    ), tt(
      () => a.fixedOptions,
      (F) => {
        c();
      },
      { deep: !1 }
    );
    const f = q([]), c = () => {
      f.value = [];
      let F = "", D = "";
      if (a.fixedOptions && Object.keys(a.fixedOptions).length > 0) {
        if (f.value = P(a.fixedOptions), l.dataObjectMode = !1, a.systemFieldAddon && a.valueField && a.labelField.length > 0) {
          let g = [
            { value: "_id", label: "_id" },
            { value: "xparentx", label: "xparentx" },
            { value: "xsitex.code", label: "xsitex.code" },
            { value: "xsitex.name", label: "xsitex.name" },
            { value: "xunitx.code", label: "xunitx.code" },
            { value: "xunitx.name", label: "xunitx.name" },
            { value: "updated_by.id", label: "updated_by.id" },
            { value: "updated_by.name", label: "updated_by.name" },
            { value: "created_by.id", label: "created_by.id" },
            { value: "created_by.name", label: "created_by.name" },
            { value: "updated_at", label: "updated_at" },
            { value: "created_at", label: "created_at" },
            { value: "xrstatx", label: "xrstatx" }
          ];
          f.value = [...f.value, ...g];
        }
      } else if (l.dataObjectMode = !0, l.disableAction = Object.keys(a.dataObject).length === 0 && !!a.path, !l.disableAction)
        for (const g in a.dataObject) {
          const C = a.dataObject[g], _ = pe(C, a.path);
          if (a.prefixProp) {
            const y = pe(C, a.prefixProp);
            F = y || a.prefixProp, a.sqlTag && (F = `\`${F}\``);
          }
          if (a.groupField) {
            const y = pe(C, a.groupField);
            D = y ? "----- " + y + " -----" : "----- " + g + " -----";
          }
          let p = [];
          if (_ && typeof _ == "object")
            for (const y in _) {
              let S = _[y], N = S[a.valueField] ? S[a.valueField] : y;
              a.sqlTag && (N = `\`${N}\``), F && (N = `${F}${a.spaceChar}${N}`);
              let w = [];
              for (const V of a.labelField) {
                const E = S[V] = S[V] ? S[V] : V;
                w.push(E);
              }
              let T = w.join(" ");
              if (a.labelTemplate !== "") {
                const V = yl(S);
                T = ue(a.labelTemplate, V);
              }
              p.push({
                value: N,
                label: T
              });
            }
          if (a.systemFieldAddon && a.valueField && a.labelField.length > 0) {
            let y = [
              { value: "_id", label: "_id" },
              { value: "xparentx", label: "xparentx" },
              { value: "xsitex.code", label: "xsitex.code" },
              { value: "xsitex.name", label: "xsitex.name" },
              { value: "xunitx.code", label: "xunitx.code" },
              { value: "xunitx.name", label: "xunitx.name" },
              { value: "updated_by.id", label: "updated_by.id" },
              { value: "updated_by.name", label: "updated_by.name" },
              { value: "created_by.id", label: "created_by.id" },
              { value: "created_by.name", label: "created_by.name" },
              { value: "updated_at", label: "updated_at" },
              { value: "created_at", label: "created_at" },
              { value: "xrstatx", label: "xrstatx" }
            ];
            F ? y = y.map((S) => a.sqlTag ? { value: `${F}${a.spaceChar}\`${S.value}\``, label: S.label } : { value: `${F}${a.spaceChar}${S.value}`, label: S.label }) : a.sqlTag && (y = y.map((S) => ({ value: `\`${S.value}\``, label: S.label }))), p = [...p, ...y];
          }
          a.groupField ? f.value.push({ label: D, options: p }) : f.value.push(...p);
        }
      if (a.multiple) {
        const g = s.value;
        g ? g && g.length === 0 ? (l.checkAll = !1, l.indeterminate = !1) : g && g.length === f.value.length ? (l.checkAll = !0, l.indeterminate = !1) : l.indeterminate = !0 : (l.checkAll = !1, l.indeterminate = !1);
      }
      return f;
    };
    return tt(s, (F) => {
      o(F);
    }), (F, D) => {
      const g = Va, C = Bt, _ = Ri, p = Lt;
      return n(), h(p, {
        modelValue: s.value,
        "onUpdate:modelValue": D[1] || (D[1] = (y) => s.value = y),
        placeholder: "Please select...",
        disabled: e.disabled || l.disableAction,
        filterable: !0,
        clearable: !0,
        "allow-create": e.allowCreate,
        onChange: u,
        multiple: e.multiple
      }, Ye({
        default: r(() => [
          e.groupField ? (n(!0), v(L, { key: 0 }, J(f.value, (y) => (n(), h(_, {
            key: y.label,
            label: y.label
          }, {
            default: r(() => [
              (n(!0), v(L, null, J(y.options, (S) => (n(), h(C, {
                key: S.value,
                label: S.label,
                value: S.value
              }, null, 8, ["label", "value"]))), 128))
            ]),
            _: 2
          }, 1032, ["label"]))), 128)) : (n(!0), v(L, { key: 1 }, J(f.value, (y) => (n(), h(C, {
            key: y.value,
            label: y.label,
            value: y.value
          }, null, 8, ["label", "value"]))), 128))
        ]),
        _: 2
      }, [
        e.multiple ? {
          name: "header",
          fn: r(() => [
            d(g, {
              modelValue: l.checkAll,
              "onUpdate:modelValue": D[0] || (D[0] = (y) => l.checkAll = y),
              indeterminate: l.indeterminate,
              onChange: m
            }, {
              default: r(() => [...D[2] || (D[2] = [
                I(" Select All ", -1)
              ])]),
              _: 1
            }, 8, ["modelValue", "indeterminate"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["modelValue", "disabled", "allow-create", "multiple"]);
    };
  }
}), nc = /* @__PURE__ */ O({
  __name: "SdFormSchemaForm",
  props: {
    joinerField: {},
    formDb: {},
    form_id: {},
    form_table: {},
    index: {},
    refGrid: {},
    initData: {},
    formLicense: {},
    cancelCallback: { type: Function }
  },
  setup(e) {
    const t = e, a = ke({
      typeList: [
        { value: "Any", label: "Any" },
        { value: "String", label: "String" },
        { value: "Integer", label: "Integer" },
        { value: "Number", label: "Number" },
        // { value: 'Double', label: 'Double' },
        { value: "Boolean", label: "Boolean" },
        { value: "Array", label: "Array" },
        { value: "Object", label: "Object" },
        { value: "ObjectId", label: "ObjectId" },
        { value: "StringDate", label: "StringDate" },
        // { value: 'Date', label: 'Date' },
        // { value: 'Timestamp', label: 'Timestamp' },
        // { value: 'Binary', label: 'Binary' },
        { value: "String|Array", label: "String|Array" },
        { value: "Object|Array", label: "Object|Array" }
      ],
      fieldName: ""
    }), l = q(), o = q({
      fieldName: "",
      label: "",
      type: Ge.Any,
      hint: "",
      defaultValue: null,
      component: "custom-input",
      componentName: "Custom Input",
      hidden: !0,
      required: !1,
      readonly: !0,
      disabled: !0,
      valueFormat: null,
      format: null,
      multiple: !1,
      choiceType: null,
      joinerType: !1,
      refFormId: null,
      refField: null,
      refFormType: !1,
      subField: null,
      width: "",
      align: "left",
      sortable: !1,
      fixed: void 0,
      comment: "",
      widgetDisplay: "widget",
      wrapText: void 0,
      textType: void 0
    });
    function i() {
      t.cancelCallback && t.cancelCallback();
    }
    const s = (u) => {
      u && u.validate(async (m) => {
        m && (a.fieldName ? a.fieldName === o.value.fieldName ? (t.formDb.schema[o.value.fieldName] = o.value, i()) : t.formDb.schema[o.value.fieldName] ? B.warning("This field is already in the system.") : (t.formDb.schema[o.value.fieldName] = o.value, i()) : t.formDb.schema[o.value.fieldName] ? B.warning("This field is already in the system.") : (t.formDb.schema[o.value.fieldName] = o.value, i()));
      });
    };
    return xe(() => {
      o.value = {
        fieldName: "",
        label: "",
        type: Ge.Any,
        hint: "",
        defaultValue: null,
        component: "custom-input",
        componentName: "Custom Input",
        hidden: !0,
        required: !1,
        readonly: !0,
        disabled: !0,
        valueFormat: null,
        format: null,
        multiple: !1,
        choiceType: null,
        joinerType: !1,
        refFormId: null,
        refField: null,
        refFormType: !1,
        subField: null,
        width: "",
        align: "left",
        sortable: !1,
        fixed: void 0,
        comment: "",
        widgetDisplay: "widget",
        wrapText: void 0,
        textType: void 0
      }, t.initData && Object.keys(t.initData).length > 0 && (a.fieldName = t.initData.fieldName, o.value = { ...o.value, ...t.initData });
    }), (u, m) => {
      const f = la, c = Te, F = wt, D = Fi, g = dt, C = At, _ = Et, p = ie, y = vt;
      return n(), h(y, {
        ref_key: "schemaFormRef",
        ref: l,
        model: o.value,
        "label-position": "top",
        onKeyup: m[8] || (m[8] = sn(j((S) => s(l.value), ["prevent"]), ["enter"]))
      }, {
        default: r(() => [
          d(f, {
            title: "No effect on database",
            type: "warning",
            closable: !1,
            class: "mb-1"
          }),
          d(_, { gutter: 10 }, {
            default: r(() => [
              d(g, {
                md: 12,
                sm: 12,
                xs: 24
              }, {
                default: r(() => [
                  d(F, {
                    label: "Field Name",
                    prop: "fieldName",
                    required: ""
                  }, {
                    default: r(() => [
                      d(c, {
                        modelValue: o.value.fieldName,
                        "onUpdate:modelValue": m[0] || (m[0] = (S) => o.value.fieldName = S),
                        type: "fieldName",
                        disabled: !!a.fieldName,
                        clearable: !0
                      }, null, 8, ["modelValue", "disabled"])
                    ]),
                    _: 1
                  }),
                  d(F, {
                    label: "Type",
                    prop: "type",
                    required: ""
                  }, {
                    default: r(() => [
                      d(D, {
                        modelValue: o.value.type,
                        "onUpdate:modelValue": m[1] || (m[1] = (S) => o.value.type = S),
                        "allow-create": !1,
                        placeholder: "Please Type...",
                        "fixed-options": a.typeList,
                        multiple: !1
                      }, null, 8, ["modelValue", "fixed-options"])
                    ]),
                    _: 1
                  }),
                  d(F, {
                    label: "Value Format",
                    prop: "valueFormat"
                  }, {
                    default: r(() => [
                      d(c, {
                        modelValue: o.value.valueFormat,
                        "onUpdate:modelValue": m[2] || (m[2] = (S) => o.value.valueFormat = S),
                        type: "text",
                        clearable: !0
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              d(g, {
                md: 12,
                sm: 12,
                xs: 24
              }, {
                default: r(() => [
                  d(F, {
                    label: "Label",
                    prop: "label",
                    required: ""
                  }, {
                    default: r(() => [
                      d(c, {
                        modelValue: o.value.label,
                        "onUpdate:modelValue": m[3] || (m[3] = (S) => o.value.label = S),
                        type: "text",
                        clearable: !0
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  d(F, {
                    label: "Multiple (*Type Array)",
                    prop: "multiple"
                  }, {
                    default: r(() => [
                      d(C, {
                        modelValue: o.value.multiple,
                        "onUpdate:modelValue": m[4] || (m[4] = (S) => o.value.multiple = S),
                        "active-text": "True"
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  d(F, {
                    label: "Format",
                    prop: "format"
                  }, {
                    default: r(() => [
                      d(c, {
                        modelValue: o.value.format,
                        "onUpdate:modelValue": m[5] || (m[5] = (S) => o.value.format = S),
                        type: "text",
                        clearable: !0
                      }, null, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          d(F, {
            label: "Hint",
            prop: "hint"
          }, {
            default: r(() => [
              d(c, {
                modelValue: o.value.hint,
                "onUpdate:modelValue": m[6] || (m[6] = (S) => o.value.hint = S),
                type: "text",
                clearable: !0
              }, null, 8, ["modelValue"])
            ]),
            _: 1
          }),
          d(F, null, {
            default: r(() => [
              d(p, {
                type: "primary",
                onClick: m[7] || (m[7] = j((S) => s(l.value), ["prevent"]))
              }, {
                default: r(() => [...m[9] || (m[9] = [
                  I("Submit", -1)
                ])]),
                _: 1
              }),
              d(p, {
                onClick: j(i, ["prevent"])
              }, {
                default: r(() => [...m[10] || (m[10] = [
                  I("Close", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["model"]);
    };
  }
}), sc = /* @__PURE__ */ O({
  __name: "SdSubSchema",
  props: {
    formDb: {},
    subSchema: {},
    parentField: {},
    enableAction: {}
  },
  setup(e) {
    const t = e, a = ke({
      schemaDataList: [],
      preLoading: !1
    }), l = Z(() => (a.preLoading = !1, Object.values(t.subSchema)));
    xe(() => {
    });
    function o(i, s) {
      ye.prompt("Please input comment", "Edit Comment", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel"
      }).then(({ value: u }) => {
        i.comment = u;
      }).catch(() => {
      });
    }
    return (i, s) => {
      const u = ie, m = Xe, f = X("Link"), c = qe, F = X("Aim"), D = aa, g = lt, C = Te, _ = Bt, p = Lt, y = At, S = We, N = oa;
      return Ve((n(), h(D, {
        data: l.value,
        style: { width: "100%" }
      }, {
        default: r(() => [
          e.enableAction ? (n(), h(m, {
            key: 0,
            fixed: "",
            label: "Actions",
            width: 220,
            align: "center"
          }, {
            default: r((w) => [
              d(u, {
                plain: "",
                type: "primary",
                size: "small",
                title: "Edit Comment",
                icon: "ChatDotSquare",
                onClick: j((T) => o(w.row, w.$index), ["prevent"])
              }, null, 8, ["onClick"])
            ]),
            _: 1
          })) : b("", !0),
          d(m, {
            fixed: "",
            prop: "fieldName",
            label: "Field Name",
            "min-width": 250
          }),
          d(m, {
            prop: "label",
            label: "Label",
            "min-width": 220
          }, {
            default: r((w) => [
              I(A(w.row.label) + " ", 1),
              w.row.joinerType ? (n(), h(c, { key: 0 }, {
                default: r(() => [
                  d(f)
                ]),
                _: 1
              })) : b("", !0),
              !w.row.joinerType && w.row.refFormType ? (n(), h(c, { key: 1 }, {
                default: r(() => [
                  d(F)
                ]),
                _: 1
              })) : b("", !0)
            ]),
            _: 1
          }),
          d(m, {
            prop: "defaultValue",
            label: "Default Value",
            "min-width": 150
          }),
          d(m, {
            prop: "type",
            label: "Type",
            width: "180"
          }),
          d(m, {
            prop: "componentName",
            label: "Component",
            width: "180"
          }, {
            default: r((w) => [
              I(A(w.row.componentName) + " ", 1),
              w.row.choiceType && e.formDb.data_list[e.parentField + "." + w.row.fieldName] ? (n(), h(g, {
                key: 0,
                width: 400,
                trigger: "click"
              }, {
                reference: r(() => [
                  d(u, {
                    size: "small",
                    plain: "",
                    circle: "",
                    icon: "View"
                  })
                ]),
                default: r(() => [
                  d(D, {
                    data: e.formDb.data_list[e.parentField + "." + w.row.fieldName]
                  }, {
                    default: r(() => [
                      d(m, {
                        property: "value",
                        label: "Value"
                      }),
                      d(m, {
                        property: "label",
                        label: "Label"
                      })
                    ]),
                    _: 1
                  }, 8, ["data"])
                ]),
                _: 2
              }, 1024)) : b("", !0)
            ]),
            _: 1
          }),
          e.enableAction ? (n(), v(L, { key: 1 }, [
            d(m, {
              prop: "width",
              label: "Width",
              "min-width": 100
            }, {
              default: r((w) => [
                d(C, {
                  modelValue: w.row.width,
                  "onUpdate:modelValue": (T) => w.row.width = T,
                  maxlength: "3",
                  type: "number"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            d(m, {
              prop: "align",
              label: "Align",
              "min-width": 110
            }, {
              default: r((w) => [
                d(p, {
                  modelValue: w.row.align,
                  "onUpdate:modelValue": (T) => w.row.align = T
                }, {
                  default: r(() => [
                    d(_, {
                      value: "left",
                      label: "Left"
                    }),
                    d(_, {
                      value: "center",
                      label: "Center"
                    }),
                    d(_, {
                      value: "right",
                      label: "Right"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            d(m, {
              prop: "fixed",
              label: "Fixed",
              "min-width": 115
            }, {
              default: r((w) => [
                d(p, {
                  modelValue: w.row.fixed,
                  "onUpdate:modelValue": (T) => w.row.fixed = T
                }, {
                  default: r(() => [
                    d(_, {
                      value: "",
                      label: "Disable"
                    }),
                    d(_, {
                      value: "left",
                      label: "Left"
                    }),
                    d(_, {
                      value: "right",
                      label: "Right"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            d(m, {
              prop: "widgetDisplay",
              label: "Display",
              "min-width": 115
            }, {
              default: r((w) => [
                d(p, {
                  modelValue: w.row.widgetDisplay,
                  "onUpdate:modelValue": (T) => w.row.widgetDisplay = T
                }, {
                  default: r(() => [
                    d(_, {
                      value: "widget",
                      label: "Widget"
                    }),
                    d(_, {
                      value: "text",
                      label: "Text"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            d(m, {
              prop: "wrapText",
              label: "Wrap",
              "min-width": 90
            }, {
              default: r((w) => [
                d(C, {
                  modelValue: w.row.wrapText,
                  "onUpdate:modelValue": (T) => w.row.wrapText = T,
                  maxlength: "2",
                  type: "number"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            d(m, {
              prop: "textType",
              label: "Text Type",
              "min-width": 120,
              align: "center"
            }, {
              default: r((w) => [
                d(p, {
                  modelValue: w.row.textType,
                  "onUpdate:modelValue": (T) => w.row.textType = T
                }, {
                  default: r(() => [
                    d(_, {
                      value: "",
                      label: "Default"
                    }),
                    d(_, {
                      value: "primary",
                      label: "primary"
                    }),
                    d(_, {
                      value: "success",
                      label: "success"
                    }),
                    d(_, {
                      value: "info",
                      label: "info"
                    }),
                    d(_, {
                      value: "warning",
                      label: "warning"
                    }),
                    d(_, {
                      value: "danger",
                      label: "danger"
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            d(m, {
              prop: "sortable",
              label: "Allow Sort",
              "min-width": 110
            }, {
              default: r((w) => [
                d(y, {
                  modelValue: w.row.sortable,
                  "onUpdate:modelValue": (T) => w.row.sortable = T
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            })
          ], 64)) : b("", !0),
          d(m, {
            prop: "hint",
            label: "Hint",
            "min-width": 200
          }),
          d(m, {
            prop: "format",
            label: "Format",
            width: "200"
          }),
          d(m, {
            prop: "required",
            label: "Required",
            width: "90",
            align: "center"
          }, {
            default: r((w) => [
              w.row.required ? (n(), h(S, {
                key: 0,
                type: "success"
              }, {
                default: r(() => [...s[0] || (s[0] = [
                  I("True", -1)
                ])]),
                _: 1
              })) : (n(), h(S, {
                key: 1,
                type: "danger"
              }, {
                default: r(() => [...s[1] || (s[1] = [
                  I("Fasle", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          }),
          d(m, {
            prop: "hidden",
            label: "Hidden",
            width: "90",
            align: "center"
          }, {
            default: r((w) => [
              w.row.hidden ? (n(), h(S, {
                key: 0,
                type: "success"
              }, {
                default: r(() => [...s[2] || (s[2] = [
                  I("True", -1)
                ])]),
                _: 1
              })) : (n(), h(S, {
                key: 1,
                type: "danger"
              }, {
                default: r(() => [...s[3] || (s[3] = [
                  I("Fasle", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          }),
          d(m, {
            prop: "readonly",
            label: "Readonly",
            width: "90",
            align: "center"
          }, {
            default: r((w) => [
              w.row.readonly ? (n(), h(S, {
                key: 0,
                type: "success"
              }, {
                default: r(() => [...s[4] || (s[4] = [
                  I("True", -1)
                ])]),
                _: 1
              })) : (n(), h(S, {
                key: 1,
                type: "danger"
              }, {
                default: r(() => [...s[5] || (s[5] = [
                  I("Fasle", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          }),
          d(m, {
            prop: "disabled",
            label: "Disabled",
            width: "90",
            align: "center"
          }, {
            default: r((w) => [
              w.row.disabled ? (n(), h(S, {
                key: 0,
                type: "success"
              }, {
                default: r(() => [...s[6] || (s[6] = [
                  I("True", -1)
                ])]),
                _: 1
              })) : (n(), h(S, {
                key: 1,
                type: "danger"
              }, {
                default: r(() => [...s[7] || (s[7] = [
                  I("Fasle", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          }),
          d(m, {
            prop: "choiceType",
            label: "Choice Type",
            width: "110",
            align: "center"
          }, {
            default: r((w) => [
              w.row.choiceType ? (n(), h(S, {
                key: 0,
                type: "success"
              }, {
                default: r(() => [...s[8] || (s[8] = [
                  I("True", -1)
                ])]),
                _: 1
              })) : (n(), h(S, {
                key: 1,
                type: "danger"
              }, {
                default: r(() => [...s[9] || (s[9] = [
                  I("Fasle", -1)
                ])]),
                _: 1
              }))
            ]),
            _: 1
          }),
          d(m, {
            prop: "comment",
            label: "comment",
            "min-width": 150
          })
        ]),
        _: 1
      }, 8, ["data"])), [
        [N, a.preLoading]
      ]);
    };
  }
}), rc = hr();
async function dc(e) {
  try {
    await rc.toClipboard(e), B({
      message: "Copied to clipboard",
      type: "success"
    });
  } catch (t) {
    console.error(t);
  }
}
const uc = { key: 3 }, pc = { class: "items-box" }, mc = { class: "opt-item" }, hc = { class: "dialog-footer" }, fc = { key: 4 }, cc = { class: "dialog-footer" }, bc = { key: 5 }, gc = { class: "dialog-footer" }, yc = { key: 6 }, vc = /* @__PURE__ */ O({
  __name: "SdFormSchema",
  props: {
    joinerField: {},
    formDb: {},
    enableAction: {},
    form_id: {},
    form_table: {},
    versionDescription: {},
    index: {},
    refGrid: {},
    formLicense: {},
    autoSave: { type: Function },
    userState: {}
  },
  setup(e) {
    const t = e, a = ke({
      schemaDataList: [],
      preLoading: !1,
      showPopupJoiner: !1,
      formSelect: {},
      subSchema: [],
      defaultJoiner: P(t.joinerField),
      showDataDicDialogFlag: !1,
      showSchemaFlag: !1,
      aname: "{{attribute_name}}",
      formDataDic: {},
      popupWidthParent: "70%",
      popupWidthDic: "80%",
      isDark: de(),
      popSubSchema: {},
      versionDescription: t.versionDescription,
      activeCommt: "0",
      activeNumber: "0",
      isInsert: !0,
      oldParentField: t.joinerField.field_name,
      showSchemaAddFlag: !1,
      initSchema: {},
      parentField: ""
    }), l = q();
    function o() {
      a.initSchema = {}, a.showSchemaAddFlag = !0;
    }
    function i(z, k) {
      a.initSchema = z, a.showSchemaAddFlag = !0;
    }
    function s() {
      a.initSchema = {}, a.showSchemaAddFlag = !1;
    }
    function u(z, k) {
      a.popSubSchema = z.subField, a.parentField = z.fieldName, a.showSchemaFlag = !0;
    }
    new Promise(function(z, k) {
      a.preLoading = !0, z(Object.values(t.formDb.schema));
    });
    const m = t.userState, f = Z(() => t.joinerField.form_id && t.joinerField.form_id.label ? t.joinerField.form_id.label ? t.joinerField.form_id.label : t.joinerField.form_id : "");
    Z({
      get() {
        return t.joinerField.field_name;
      },
      set(z) {
        z.match(/^[a-z][a-z0-9_]+$/) ? t.joinerField.field_name = z : B.warning("Variables must be in English or numbers only and do not contain spaces.");
      }
    });
    const c = Z(() => t.joinerField && t.joinerField.label_fields ? t.joinerField.label_fields.join(", ") : "");
    Z(() => a.formSelect && a.formSelect.form_name ? a.formSelect.form_name : "");
    const F = Z(() => t.joinerField && t.joinerField.search_fields ? t.joinerField.search_fields.join(", ") : ""), D = Z(() => t.joinerField && t.joinerField.ref_fields ? t.joinerField.ref_fields.join(", ") : ""), g = Z(() => (a.preLoading = !1, Object.values(t.formDb.schema)));
    tt(
      () => t.form_id,
      async (z, k) => {
        z != k && t.joinerField.form_id && t.joinerField.form_id.value && y(t.joinerField.form_id.value);
      },
      { deep: !0 }
    );
    let C;
    Lo(() => C?.()), xe(() => {
      a.popupWidthParent = oe("70%"), a.popupWidthDic = oe("80%"), C = Pe(async () => {
        Qt(() => {
          a.popupWidthParent = oe("70%"), a.popupWidthDic = oe("80%");
        });
      }), t.joinerField.form_id && t.joinerField.form_id.value && y(t.joinerField.form_id.value), t.joinerField.field_name === "" && (t.joinerField.field_name = "parent_id"), t.joinerField.joiner_variable === "" && (t.joinerField.joiner_variable = "_id"), t.joinerField.joiner_label === "" && (t.joinerField.joiner_label = "Parent"), a.isInsert = !t.joinerField.joiner_enable;
    });
    const _ = () => {
      t.joinerField.order_by.push({
        column: "",
        sort: ge.ASC
      });
    }, p = (z, k) => {
      t.joinerField.order_by.splice(k, 1);
    }, y = (z) => {
      if (z !== "") {
        const k = {
          providerId: "getsdform-all",
          providerType: fe.SYS,
          params: { form_license: t.formLicense },
          options: {
            fileterObjectId: ["_id"],
            fileter: { _id: [z] }
          }
        };
        m.crudGetOne(
          { sdProvider: k },
          (K) => {
            S(t.joinerField.form_id, K.data);
          },
          () => {
            S(t.joinerField.form_id, null);
          }
        );
      }
    }, S = (z, k) => {
      if (k)
        if (k.dataid = k._id, a.formSelect = P(k), a.formDataDic = P(k), a.subSchema = [], a.formSelect) {
          if (t.joinerField.form_parent = a.formSelect._id, a.formSelect.joiner_field && a.formSelect.joiner_field.joiner_enable && (t.joinerField.form_parent = a.formSelect.joiner_field.form_parent), (t.joinerField.joiner_label == "" || t.joinerField.joiner_label == "Parent") && (t.joinerField.joiner_label = a.formSelect.form_name), a.formSelect.form_db && a.formSelect.form_db.schema)
            for (const K in a.formSelect.form_db.schema) {
              let G = a.formSelect.form_db.schema[K];
              a.subSchema.push({
                value: G.fieldName,
                label: `[ ${G.fieldName} ] ` + G.label
              });
            }
          else
            a.subSchema = [];
          if (a.formSelect.joiner_field && a.formSelect.joiner_field.form_id && a.formSelect.joiner_field.joiner_enable) {
            const K = P(a.formSelect.joiner_field.form_id), G = P(a.formSelect.joiner_field.ref_form);
            let Ue = 1, st = {};
            if (G) {
              for (const mt in G)
                Ue++;
              st = {
                [`xtbxlv${Ue}_xfx_id`]: K.value,
                ...G
              };
            } else
              st = {
                [`xtbxlv${Ue}_xfx_id`]: K.value
              };
            t.joinerField.ref_form = P(st);
          }
        } else
          a.subSchema = [];
      else
        a.formSelect = null, a.subSchema = [];
    };
    function N() {
      t.refGrid && t.index !== void 0 && t.refGrid.rawData[t.index].form_db && (t.refGrid.rawData[t.index].form_db.schema = t.formDb.schema, t.refGrid.rawData[t.index].form_db.index = t.formDb.index);
    }
    function w() {
      t.refGrid && t.index !== void 0 && t.refGrid.rawData[t.index].joiner_field && (t.refGrid.rawData[t.index].joiner_field = t.joinerField, t.refGrid.rawData[t.index].form_db.schema = t.formDb.schema);
    }
    function T(z, k) {
      if (k && z !== "") {
        let K = {
          providerId: "getsdform-one",
          providerType: fe.SYS,
          params: {
            id: z
          }
        };
        m.crudGetOne(
          { sdProvider: K },
          (G) => {
            a.formDataDic = P(G.data), a.showDataDicDialogFlag = !0;
          },
          () => {
            a.formDataDic = P(a.formSelect);
          }
        );
      } else
        a.formDataDic = P(a.formSelect), a.showDataDicDialogFlag = !0;
    }
    function V() {
      a.showPopupJoiner = !0;
    }
    function E() {
      if (t.joinerField.form_id && t.joinerField.form_id.value) {
        W();
        for (const z in t.joinerField.form_id)
          if (Object.prototype.hasOwnProperty.call(t.joinerField.form_id, z)) {
            const k = t.joinerField.form_id[z];
            let K = t.joinerField.field_name + "." + z;
            if (z == "value")
              t.formDb.schema[K] = {
                fieldName: K,
                label: t.joinerField.joiner_label,
                defaultValue: null,
                component: "parent-input",
                componentName: "Parent Input",
                type: Ge.ObjectId,
                hidden: !1,
                required: !0,
                readonly: !0,
                disabled: !0,
                hint: t.joinerField.joiner_hint,
                valueFormat: null,
                format: null,
                multiple: !1,
                choiceType: null,
                joinerType: !0,
                refFormId: k,
                refField: t.joinerField.joiner_variable,
                refFormType: !1,
                subField: null,
                width: "",
                align: "left",
                sortable: !1,
                fixed: void 0,
                comment: "",
                widgetDisplay: "widget",
                wrapText: void 0,
                textType: void 0
              };
            else if (z == "label")
              t.formDb.schema[K] = {
                fieldName: K,
                label: t.joinerField.joiner_label,
                defaultValue: null,
                component: "custom-input",
                componentName: "Custom Input",
                type: Ge.String,
                hidden: !1,
                required: !0,
                readonly: !0,
                disabled: !0,
                hint: null,
                valueFormat: null,
                format: null,
                multiple: !1,
                choiceType: null,
                joinerType: !0,
                refFormId: t.joinerField.form_id.value,
                refField: t.joinerField.joiner_variable,
                refFormType: !1,
                subField: null,
                width: "",
                align: "left",
                sortable: !1,
                fixed: void 0,
                comment: "",
                widgetDisplay: "widget",
                wrapText: void 0,
                textType: void 0
              };
            else if (z.search(/xtbxlv/g) !== -1) {
              let G = z.split("xfx"), Ue = z.split("lv"), st = "0";
              if (Ue.length > 1 && Ue[1]) {
                const mt = Ue[1].split("_");
                mt[0] && (st = mt[0]);
              }
              t.formDb.schema[K] = {
                fieldName: K,
                label: "refID LV" + st,
                defaultValue: null,
                component: "custom-input",
                componentName: "Custom Input",
                type: Ge.ObjectId,
                hidden: !1,
                required: !0,
                readonly: !0,
                disabled: !0,
                hint: null,
                valueFormat: null,
                format: null,
                multiple: !1,
                choiceType: null,
                joinerType: !0,
                refFormId: k,
                refField: G[1],
                refFormType: !0,
                subField: null,
                width: "",
                align: "left",
                sortable: !1,
                fixed: void 0,
                comment: "",
                widgetDisplay: "widget",
                wrapText: void 0,
                textType: void 0
              };
            }
            t.formDb.schema[K] && a.schemaDataList.push(t.formDb.schema[K]);
          }
        t.joinerField.ref_fields && t.joinerField.ref_fields.forEach((z) => {
          const k = t.joinerField.field_name + "." + z;
          if (zm.includes(z))
            t.formDb.schema[k] = {
              fieldName: k,
              label: k,
              defaultValue: null,
              component: "custom-input",
              componentName: "Custom Input",
              type: fi(a.formSelect, z),
              hidden: !0,
              required: !1,
              readonly: !0,
              disabled: !0,
              hint: "",
              valueFormat: null,
              format: null,
              multiple: !1,
              choiceType: null,
              joinerType: !0,
              refFormId: t.joinerField.form_id.value,
              refField: z,
              refFormType: !1,
              subField: null,
              width: "",
              align: "left",
              sortable: !1,
              fixed: void 0,
              comment: "",
              widgetDisplay: "widget",
              wrapText: void 0,
              textType: void 0
            }, t.formDb.schema[k] && a.schemaDataList.push(t.formDb.schema[k]);
          else if (a.formSelect.form_db && a.formSelect.form_db.schema)
            for (const K in a.formSelect.form_db.schema) {
              let G = a.formSelect.form_db.schema[K];
              if (G.fieldName === z) {
                t.formDb.schema[k] = {
                  fieldName: k,
                  label: G.label,
                  defaultValue: G.defaultValue,
                  component: "custom-input",
                  componentName: "Custom Input",
                  type: G.type,
                  hidden: G.hidden,
                  required: G.required,
                  readonly: G.readonly,
                  disabled: G.disabled,
                  hint: G.hint,
                  valueFormat: G.valueFormat,
                  format: G.format,
                  multiple: G.multiple,
                  choiceType: G.choiceType,
                  joinerType: !0,
                  refFormId: t.joinerField.form_id.value,
                  refField: z,
                  refFormType: !1,
                  subField: null,
                  width: "",
                  align: "left",
                  sortable: !1,
                  fixed: void 0,
                  comment: "",
                  widgetDisplay: "widget",
                  wrapText: void 0,
                  textType: void 0,
                  inputOptions: G.inputOptions || {}
                }, t.formDb.schema[k] && a.schemaDataList.push(t.formDb.schema[k]);
                break;
              }
            }
        });
      }
    }
    function W() {
      a.schemaDataList = a.schemaDataList.filter((z) => z.joinerType !== !0);
      for (const z in t.formDb.schema)
        t.formDb.schema[z].joinerType === !0 && (delete t.formDb.schema[z], a.isInsert = !1);
    }
    function te(z) {
      z && z.validate(async (k) => {
        if (k) {
          if (t.joinerField.joiner_enable = !0, a.defaultJoiner = P(t.joinerField), E(), w(), !a.isInsert && a.oldParentField !== t.joinerField.field_name) {
            const K = {
              [a.oldParentField]: t.joinerField.field_name
            };
            await m.schemaRename(
              {
                rename: K,
                form_table: t.form_table
              },
              (G) => {
                a.oldParentField = t.joinerField.field_name, t.autoSave && t.autoSave();
              },
              () => {
                B.warning("Schema update error occurred");
              }
            );
          }
          a.showPopupJoiner = !1;
        }
      });
    }
    function x() {
      ye.confirm("Are you going to disable the joiner?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        t.joinerField.joiner_enable = !1, W(), w();
      }).catch(() => {
      });
    }
    function je(z) {
      z && (z.resetFields(), t.joinerField.form_parent = P(a.defaultJoiner.form_parent), t.joinerField.joiner_enable = P(a.defaultJoiner.joiner_enable), t.joinerField.joiner_label = P(a.defaultJoiner.joiner_label), t.joinerField.joiner_variable = P(a.defaultJoiner.joiner_variable), t.joinerField.form_id = P(a.defaultJoiner.form_id), t.joinerField.field_name = P(a.defaultJoiner.field_name), t.joinerField.label_fields = P(a.defaultJoiner.label_fields), t.joinerField.label_template = P(a.defaultJoiner.label_template), t.joinerField.search_fields = P(a.defaultJoiner.search_fields), t.joinerField.ref_fields = P(a.defaultJoiner.ref_fields), t.joinerField.sql_filter = P(a.defaultJoiner.sql_filter), t.joinerField.order_by = P(a.defaultJoiner.order_by), t.joinerField.ref_form = P(a.defaultJoiner.ref_form), t.joinerField.form_id && t.joinerField.form_id.value && y(t.joinerField.form_id.value));
    }
    function Ke(z, k) {
      ye.confirm("Are you sure you want to delete this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        z.fieldName && t.formDb.schema[z.fieldName] && delete t.formDb.schema[z.fieldName], a.schemaDataList.splice(k, 1);
      }).catch(() => {
      });
    }
    function nt(z, k) {
      ye.confirm("Are you sure you want to create index?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        m.schemaCreateIndex(
          { form_id: t.form_id, form_table: t.form_table, form_index: t.formDb.index, indexField: z.fieldName, indexType: 1 },
          (K) => {
            K.indexName && (t.formDb.index[z.fieldName] = K.indexName, N());
          }
        );
      }).catch(() => {
      });
    }
    function Le(z, k) {
      ye.confirm("Are you sure you want to drop index?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        m.schemaDropIndex({ indexField: z.fieldName, form_id: t.form_id, form_table: t.form_table, form_index: t.formDb.index }, () => {
          delete t.formDb.index[z.fieldName], N();
        });
      }).catch(() => {
      });
    }
    function Ne(z, k) {
      ye.prompt("Please input comment", "Edit Comment", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel"
      }).then(({ value: K }) => {
        z.comment = K;
      }).catch(() => {
      });
    }
    return (z, k) => {
      const K = ie, G = To, Ue = $o, st = la, mt = ve, De = We, ne = dt, ht = Et, ft = ta, Re = Te, xa = ea, Fl = lt, _l = Hi, kl = zi, se = Xe, ki = X("Link"), fa = qe, Ci = X("Aim"), Cl = aa, Ie = Bt, Ht = Lt, It = At, Di = Ra, Ii = Sl, Se = wt, Ka = Fi, Dl = X("InfoFilled"), $i = Ea, Ti = Io, Pi = X("draggable"), Mi = vt, ca = Ce, Vi = X("sd-form-schema", !0), Ei = sc, Ai = nc, Li = oa;
      return n(), v(L, null, [
        d(Ue, {
          title: "Parent Form",
          column: 3,
          size: "default",
          border: "",
          style: { "margin-bottom": "15px" }
        }, Ye({
          default: r(() => [
            e.joinerField.joiner_enable ? (n(), h(G, { key: 0 }, {
              label: r(() => [
                k[31] || (k[31] = I(" Parent Form ", -1)),
                e.joinerField.joiner_enable && e.joinerField.form_id && e.joinerField.form_id.value ? (n(), h(K, {
                  key: 0,
                  type: "warning",
                  size: "small",
                  circle: "",
                  plain: "",
                  icon: "Link",
                  onClick: k[0] || (k[0] = j((M) => a.showDataDicDialogFlag = !0, ["prevent"]))
                })) : b("", !0)
              ]),
              default: r(() => [
                I(" " + A(f.value), 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable ? (n(), h(G, { key: 1 }, {
              label: r(() => [...k[32] || (k[32] = [
                I("Field Name", -1)
              ])]),
              default: r(() => [
                I(" " + A(e.joinerField.field_name) + " -> ( " + A(e.joinerField.joiner_variable) + " ) ", 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable ? (n(), h(G, { key: 2 }, {
              label: r(() => [...k[33] || (k[33] = [
                I("Parent Label", -1)
              ])]),
              default: r(() => [
                I(" " + A(e.joinerField.joiner_label), 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable ? (n(), h(G, { key: 3 }, {
              label: r(() => [...k[34] || (k[34] = [
                I("Label Fields", -1)
              ])]),
              default: r(() => [
                I(" " + A(c.value), 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable ? (n(), h(G, { key: 4 }, {
              label: r(() => [...k[35] || (k[35] = [
                I("Searching Fields", -1)
              ])]),
              default: r(() => [
                I(" " + A(F.value), 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable ? (n(), h(G, { key: 5 }, {
              label: r(() => [...k[36] || (k[36] = [
                I("Reference Fields", -1)
              ])]),
              default: r(() => [
                I(" " + A(D.value), 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable && e.joinerField.label_template ? (n(), h(G, { key: 6 }, {
              label: r(() => [...k[37] || (k[37] = [
                I("Template Label", -1)
              ])]),
              default: r(() => [
                I(" " + A(e.joinerField.label_template), 1)
              ]),
              _: 1
            })) : b("", !0),
            e.joinerField.joiner_enable && e.joinerField.sql_filter ? (n(), h(G, { key: 7 }, {
              label: r(() => [...k[38] || (k[38] = [
                I("SQL Filter", -1)
              ])]),
              default: r(() => [
                I(" " + A(e.joinerField.sql_filter), 1)
              ]),
              _: 1
            })) : b("", !0)
          ]),
          _: 2
        }, [
          e.enableAction ? {
            name: "extra",
            fn: r(() => [
              e.joinerField.joiner_enable ? b("", !0) : (n(), h(K, {
                key: 0,
                type: "success",
                plain: "",
                icon: "Aim",
                onClick: j(V, ["prevent"])
              }, {
                default: r(() => [...k[28] || (k[28] = [
                  I("Join Parent Form", -1)
                ])]),
                _: 1
              })),
              e.joinerField.joiner_enable ? (n(), h(K, {
                key: 1,
                type: "primary",
                plain: "",
                icon: "Edit",
                onClick: j(V, ["prevent"])
              }, {
                default: r(() => [...k[29] || (k[29] = [
                  I("Edit Parent Form", -1)
                ])]),
                _: 1
              })) : b("", !0),
              e.joinerField.joiner_enable ? (n(), h(K, {
                key: 2,
                type: "danger",
                plain: "",
                icon: "Delete",
                onClick: j(x, ["prevent"])
              }, {
                default: r(() => [...k[30] || (k[30] = [
                  I("Disable", -1)
                ])]),
                _: 1
              })) : b("", !0)
            ]),
            key: "0"
          } : void 0
        ]), 1024),
        e.joinerField.joiner_enable ? b("", !0) : (n(), h(st, {
          key: 0,
          title: "The parent form has not been created yet.",
          type: "info",
          "show-icon": "",
          closable: !1,
          style: { "margin-bottom": "15px" }
        })),
        Object.keys(e.formDb.autonum).length > 0 ? (n(), h(kl, {
          key: 1,
          modelValue: a.activeNumber,
          "onUpdate:modelValue": k[1] || (k[1] = (M) => a.activeNumber = M)
        }, {
          default: r(() => [
            d(_l, {
              title: "Auto Number ( Manage Count Number )",
              name: "1"
            }, {
              title: r(() => [
                d(De, {
                  class: "mx-1",
                  type: "primary"
                }, {
                  default: r(() => [
                    d(mt, { "icon-name": "addon-random" }),
                    k[39] || (k[39] = I(" Auto number ( Manage Count Number )", -1))
                  ]),
                  _: 1
                })
              ]),
              default: r(() => [
                $("div", null, [
                  d(ht, { gutter: 10 }, {
                    default: r(() => [
                      d(ne, { span: 2 }, {
                        default: r(() => [...k[40] || (k[40] = [
                          I("Field", -1)
                        ])]),
                        _: 1
                      }),
                      d(ne, { span: 2 }, {
                        default: r(() => [...k[41] || (k[41] = [
                          I("PerDay", -1)
                        ])]),
                        _: 1
                      }),
                      d(ne, { span: 2 }, {
                        default: r(() => [...k[42] || (k[42] = [
                          I("BySite", -1)
                        ])]),
                        _: 1
                      }),
                      d(ne, { span: 3 }, {
                        default: r(() => [...k[43] || (k[43] = [
                          I("Prefix", -1)
                        ])]),
                        _: 1
                      }),
                      d(ne, { span: 3 }, {
                        default: r(() => [...k[44] || (k[44] = [
                          I("Suffix", -1)
                        ])]),
                        _: 1
                      }),
                      d(ne, { span: 3 }, {
                        default: r(() => [...k[45] || (k[45] = [
                          I("Increment", -1)
                        ])]),
                        _: 1
                      }),
                      d(ne, { span: 3 }, {
                        default: r(() => [
                          d(De, {
                            class: "mx-1",
                            type: "success"
                          }, {
                            default: r(() => [...k[46] || (k[46] = [
                              I(" Count By Site", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      d(ne, { span: 5 }, {
                        default: r(() => [
                          d(De, {
                            class: "mx-1",
                            type: "success"
                          }, {
                            default: r(() => [...k[47] || (k[47] = [
                              I(" Count Total", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  (n(!0), v(L, null, J(e.formDb.autonum, (M) => (n(), h(ht, {
                    gutter: 10,
                    style: { "margin-bottom": "10px" }
                  }, {
                    default: r(() => [
                      d(ne, { span: 2 }, {
                        default: r(() => [
                          d(ft, {
                            type: "info",
                            effect: "plain"
                          }, {
                            default: r(() => [
                              I(A(M.label), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 2 }, {
                        default: r(() => [
                          M.perDay ? (n(), h(ft, {
                            key: 0,
                            type: "primary",
                            effect: "plain"
                          }, {
                            default: r(() => [...k[48] || (k[48] = [
                              I("True", -1)
                            ])]),
                            _: 1
                          })) : (n(), h(ft, {
                            key: 1,
                            type: "info",
                            effect: "plain"
                          }, {
                            default: r(() => [...k[49] || (k[49] = [
                              I("False", -1)
                            ])]),
                            _: 1
                          }))
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 2 }, {
                        default: r(() => [
                          M.bySite ? (n(), h(ft, {
                            key: 0,
                            type: "primary",
                            effect: "plain"
                          }, {
                            default: r(() => [...k[50] || (k[50] = [
                              I("True", -1)
                            ])]),
                            _: 1
                          })) : (n(), h(ft, {
                            key: 1,
                            type: "info",
                            effect: "plain"
                          }, {
                            default: r(() => [...k[51] || (k[51] = [
                              I("False", -1)
                            ])]),
                            _: 1
                          }))
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 3 }, {
                        default: r(() => [
                          d(Re, {
                            modelValue: M.prefix,
                            "onUpdate:modelValue": (ee) => M.prefix = ee,
                            disabled: !0
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 3 }, {
                        default: r(() => [
                          d(Re, {
                            modelValue: M.suffix,
                            "onUpdate:modelValue": (ee) => M.suffix = ee,
                            disabled: !0
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 3 }, {
                        default: r(() => [
                          d(xa, {
                            modelValue: M.increment,
                            "onUpdate:modelValue": (ee) => M.increment = ee,
                            min: 1,
                            "controls-position": "right",
                            style: { width: "100%" },
                            disabled: !0
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 3 }, {
                        default: r(() => [
                          d(Fl, {
                            width: 400,
                            trigger: "click"
                          }, {
                            reference: r(() => [
                              d(K, { style: { width: "100%" } }, {
                                default: r(() => [...k[52] || (k[52] = [
                                  I("Edit Count", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            default: r(() => [
                              d(be(jo), {
                                modelValue: M.countSite,
                                "onUpdate:modelValue": (ee) => M.countSite = ee,
                                "main-menu-bar": !1,
                                mode: be(Uo).tree,
                                style: { width: "100%" },
                                class: Y(a.isDark ? "jse-theme-dark" : "")
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "mode", "class"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024),
                      d(ne, { span: 5 }, {
                        default: r(() => [
                          d(xa, {
                            modelValue: M.count,
                            "onUpdate:modelValue": (ee) => M.count = ee,
                            min: 1,
                            "controls-position": "right",
                            style: { width: "100%" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024))), 256))
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : b("", !0),
        Ve((n(), h(Cl, {
          data: g.value,
          style: { width: "100%" }
        }, {
          default: r(() => [
            e.enableAction ? (n(), h(se, {
              key: 0,
              fixed: "",
              label: "Actions",
              width: 260,
              align: "left"
            }, {
              header: r(() => [
                k[54] || (k[54] = I(" Actions ", -1)),
                d(K, {
                  plain: "",
                  type: "success",
                  size: "small",
                  title: "Add",
                  icon: "Plus",
                  onClick: j(o, ["prevent"])
                }, {
                  default: r(() => [...k[53] || (k[53] = [
                    I(" Add Schema ", -1)
                  ])]),
                  _: 1
                })
              ]),
              default: r((M) => [
                d(K, {
                  plain: "",
                  type: "info",
                  size: "small",
                  title: "Edit Comment",
                  icon: "ChatDotSquare",
                  onClick: j((ee) => Ne(M.row, M.$index), ["prevent"])
                }, null, 8, ["onClick"]),
                e.formDb.index && e.formDb.index[M.row.fieldName] ? (n(), h(K, {
                  key: 0,
                  plain: "",
                  type: "warning",
                  size: "small",
                  onClick: j((ee) => Le(M.row, M.$index), ["prevent"])
                }, {
                  default: r(() => [...k[55] || (k[55] = [
                    I(" Drop Index ", -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])) : (n(), h(K, {
                  key: 1,
                  plain: "",
                  type: "success",
                  size: "small",
                  onClick: j((ee) => nt(M.row, M.$index), ["prevent"])
                }, {
                  default: r(() => [...k[56] || (k[56] = [
                    I(" Create Index ", -1)
                  ])]),
                  _: 1
                }, 8, ["onClick"])),
                d(K, {
                  plain: "",
                  type: "danger",
                  size: "small",
                  title: "Remove",
                  icon: "Delete",
                  onClick: j((ee) => Ke(M.row, M.$index), ["prevent"])
                }, null, 8, ["onClick"]),
                M.row.component === "custom-input" || M.row.joinerType ? (n(), h(K, {
                  key: 2,
                  plain: "",
                  type: "primary",
                  size: "small",
                  title: "Edit",
                  icon: "Edit",
                  onClick: j((ee) => i(M.row, M.$index), ["prevent"])
                }, null, 8, ["onClick"])) : b("", !0)
              ]),
              _: 1
            })) : b("", !0),
            d(se, {
              fixed: "",
              prop: "fieldName",
              label: "Field Name",
              "min-width": 250
            }),
            d(se, {
              prop: "label",
              label: "Label",
              "min-width": 220
            }, {
              default: r((M) => [
                I(A(M.row.label) + " ", 1),
                M.row.joinerType ? (n(), h(fa, { key: 0 }, {
                  default: r(() => [
                    d(ki)
                  ]),
                  _: 1
                })) : b("", !0),
                !M.row.joinerType && M.row.refFormType ? (n(), h(fa, { key: 1 }, {
                  default: r(() => [
                    d(Ci)
                  ]),
                  _: 1
                })) : b("", !0)
              ]),
              _: 1
            }),
            d(se, {
              prop: "defaultValue",
              label: "Default Value",
              "min-width": 150
            }),
            d(se, {
              prop: "type",
              label: "Type",
              width: "180"
            }),
            d(se, {
              prop: "componentName",
              label: "Component",
              width: "180"
            }, {
              default: r((M) => [
                I(A(M.row.componentName) + " ", 1),
                M.row.choiceType && e.formDb.data_list[M.row.fieldName] ? (n(), h(Fl, {
                  key: 0,
                  width: 400,
                  trigger: "click"
                }, {
                  reference: r(() => [
                    d(K, {
                      size: "small",
                      plain: "",
                      circle: "",
                      icon: "View"
                    })
                  ]),
                  default: r(() => [
                    d(Cl, {
                      data: e.formDb.data_list[M.row.fieldName]
                    }, {
                      default: r(() => [
                        d(se, {
                          property: "value",
                          label: "Value"
                        }),
                        d(se, {
                          property: "label",
                          label: "Label"
                        })
                      ]),
                      _: 1
                    }, 8, ["data"])
                  ]),
                  _: 2
                }, 1024)) : b("", !0)
              ]),
              _: 1
            }),
            d(se, {
              prop: "refField",
              label: "Parent Field",
              "min-width": 200
            }, {
              default: r((M) => [
                M.row.refField ? (n(), h(K, {
                  key: 0,
                  type: "warning",
                  size: "small",
                  plain: "",
                  icon: "View",
                  onClick: j((ee) => T(
                    M.row.refFormId,
                    !!M.row.refField && !!M.row.joinerType && !!M.row.refFormType || !!M.row.refField && !M.row.joinerType && !!M.row.refFormType
                  ), ["prevent"])
                }, {
                  default: r(() => [
                    I(A(M.row.refField), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick"])) : b("", !0)
              ]),
              _: 1
            }),
            d(se, {
              prop: "subField",
              label: "Sub Fields",
              "min-width": 110,
              align: "center"
            }, {
              default: r((M) => [
                M.row.subField ? (n(), h(K, {
                  key: 0,
                  size: "small",
                  plain: "",
                  circle: "",
                  onClick: j((ee) => u(M.row, M.$index), ["prevent"])
                }, {
                  default: r(() => [
                    d(mt, { "icon-name": "table" })
                  ]),
                  _: 1
                }, 8, ["onClick"])) : b("", !0)
              ]),
              _: 1
            }),
            e.enableAction ? (n(), v(L, { key: 1 }, [
              d(se, {
                prop: "width",
                label: "Width",
                "min-width": 100
              }, {
                default: r((M) => [
                  d(Re, {
                    modelValue: M.row.width,
                    "onUpdate:modelValue": (ee) => M.row.width = ee,
                    maxlength: "3",
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "align",
                label: "Align",
                "min-width": 110
              }, {
                default: r((M) => [
                  d(Ht, {
                    modelValue: M.row.align,
                    "onUpdate:modelValue": (ee) => M.row.align = ee
                  }, {
                    default: r(() => [
                      d(Ie, {
                        value: "left",
                        label: "Left"
                      }),
                      d(Ie, {
                        value: "center",
                        label: "Center"
                      }),
                      d(Ie, {
                        value: "right",
                        label: "Right"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "fixed",
                label: "Fixed",
                "min-width": 115
              }, {
                default: r((M) => [
                  d(Ht, {
                    modelValue: M.row.fixed,
                    "onUpdate:modelValue": (ee) => M.row.fixed = ee
                  }, {
                    default: r(() => [
                      d(Ie, {
                        value: "",
                        label: "Disable"
                      }),
                      d(Ie, {
                        value: "left",
                        label: "Left"
                      }),
                      d(Ie, {
                        value: "right",
                        label: "Right"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "widgetDisplay",
                label: "Display",
                "min-width": 115
              }, {
                default: r((M) => [
                  d(Ht, {
                    modelValue: M.row.widgetDisplay,
                    "onUpdate:modelValue": (ee) => M.row.widgetDisplay = ee
                  }, {
                    default: r(() => [
                      d(Ie, {
                        value: "widget",
                        label: "Widget"
                      }),
                      d(Ie, {
                        value: "text",
                        label: "Text"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "wrapText",
                label: "Wrap",
                "min-width": 90
              }, {
                default: r((M) => [
                  d(Re, {
                    modelValue: M.row.wrapText,
                    "onUpdate:modelValue": (ee) => M.row.wrapText = ee,
                    maxlength: "2",
                    type: "number"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "textType",
                label: "Text Type",
                "min-width": 120,
                align: "center"
              }, {
                default: r((M) => [
                  d(Ht, {
                    modelValue: M.row.textType,
                    "onUpdate:modelValue": (ee) => M.row.textType = ee
                  }, {
                    default: r(() => [
                      d(Ie, {
                        value: "",
                        label: "Default"
                      }),
                      d(Ie, {
                        value: "primary",
                        label: "primary"
                      }),
                      d(Ie, {
                        value: "success",
                        label: "success"
                      }),
                      d(Ie, {
                        value: "info",
                        label: "info"
                      }),
                      d(Ie, {
                        value: "warning",
                        label: "warning"
                      }),
                      d(Ie, {
                        value: "danger",
                        label: "danger"
                      })
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "sortable",
                label: "Allow Sort",
                "min-width": 110
              }, {
                default: r((M) => [
                  d(It, {
                    modelValue: M.row.sortable,
                    "onUpdate:modelValue": (ee) => M.row.sortable = ee
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              d(se, {
                prop: "filters",
                label: "Filters",
                "min-width": 110
              }, {
                default: r((M) => [
                  e.formDb.data_list[M.row.fieldName] || M.row.component == "switch-input" ? (n(), h(It, {
                    key: 0,
                    modelValue: M.row.filters,
                    "onUpdate:modelValue": (ee) => M.row.filters = ee
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : b("", !0)
                ]),
                _: 1
              })
            ], 64)) : b("", !0),
            d(se, {
              prop: "hint",
              label: "Hint",
              "min-width": 200
            }),
            d(se, {
              prop: "format",
              label: "Format",
              width: "200"
            }),
            d(se, {
              prop: "required",
              label: "Required",
              width: "90",
              align: "center"
            }, {
              default: r((M) => [
                M.row.required ? (n(), h(De, {
                  key: 0,
                  type: "success"
                }, {
                  default: r(() => [...k[57] || (k[57] = [
                    I("True", -1)
                  ])]),
                  _: 1
                })) : (n(), h(De, {
                  key: 1,
                  type: "danger"
                }, {
                  default: r(() => [...k[58] || (k[58] = [
                    I("Fasle", -1)
                  ])]),
                  _: 1
                }))
              ]),
              _: 1
            }),
            d(se, {
              prop: "hidden",
              label: "Hidden",
              width: "90",
              align: "center"
            }, {
              default: r((M) => [
                M.row.hidden ? (n(), h(De, {
                  key: 0,
                  type: "success"
                }, {
                  default: r(() => [...k[59] || (k[59] = [
                    I("True", -1)
                  ])]),
                  _: 1
                })) : (n(), h(De, {
                  key: 1,
                  type: "danger"
                }, {
                  default: r(() => [...k[60] || (k[60] = [
                    I("Fasle", -1)
                  ])]),
                  _: 1
                }))
              ]),
              _: 1
            }),
            d(se, {
              prop: "readonly",
              label: "Readonly",
              width: "90",
              align: "center"
            }, {
              default: r((M) => [
                M.row.readonly ? (n(), h(De, {
                  key: 0,
                  type: "success"
                }, {
                  default: r(() => [...k[61] || (k[61] = [
                    I("True", -1)
                  ])]),
                  _: 1
                })) : (n(), h(De, {
                  key: 1,
                  type: "danger"
                }, {
                  default: r(() => [...k[62] || (k[62] = [
                    I("Fasle", -1)
                  ])]),
                  _: 1
                }))
              ]),
              _: 1
            }),
            d(se, {
              prop: "disabled",
              label: "Disabled",
              width: "90",
              align: "center"
            }, {
              default: r((M) => [
                M.row.disabled ? (n(), h(De, {
                  key: 0,
                  type: "success"
                }, {
                  default: r(() => [...k[63] || (k[63] = [
                    I("True", -1)
                  ])]),
                  _: 1
                })) : (n(), h(De, {
                  key: 1,
                  type: "danger"
                }, {
                  default: r(() => [...k[64] || (k[64] = [
                    I("Fasle", -1)
                  ])]),
                  _: 1
                }))
              ]),
              _: 1
            }),
            d(se, {
              prop: "choiceType",
              label: "Choice Type",
              width: "110",
              align: "center"
            }, {
              default: r((M) => [
                M.row.choiceType ? (n(), h(De, {
                  key: 0,
                  type: "success"
                }, {
                  default: r(() => [...k[65] || (k[65] = [
                    I("True", -1)
                  ])]),
                  _: 1
                })) : (n(), h(De, {
                  key: 1,
                  type: "danger"
                }, {
                  default: r(() => [...k[66] || (k[66] = [
                    I("Fasle", -1)
                  ])]),
                  _: 1
                }))
              ]),
              _: 1
            }),
            d(se, {
              prop: "index",
              label: "Index",
              width: "120",
              align: "center"
            }, {
              default: r((M) => [
                I(A(e.formDb.index[M.row.fieldName] ? e.formDb.index[M.row.fieldName] : ""), 1)
              ]),
              _: 1
            }),
            d(se, {
              prop: "comment",
              label: "comment",
              "min-width": 150
            })
          ]),
          _: 1
        }, 8, ["data"])), [
          [Li, a.preLoading]
        ]),
        e.versionDescription ? (n(), h(kl, {
          key: 2,
          modelValue: a.activeCommt,
          "onUpdate:modelValue": k[3] || (k[3] = (M) => a.activeCommt = M),
          style: { "margin-top": "-1px" }
        }, {
          default: r(() => [
            d(_l, {
              title: "Descriptions",
              name: "1"
            }, {
              default: r(() => [
                d(Di, {
                  modelValue: a.versionDescription,
                  "onUpdate:modelValue": k[2] || (k[2] = (M) => a.versionDescription = M),
                  mode: "mini",
                  readonly: !0,
                  "user-state": be(m)
                }, null, 8, ["modelValue", "user-state"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue"])) : b("", !0),
        a.showPopupJoiner ? (n(), v("div", uc, [
          d(ca, {
            title: "Join Parent Form",
            modelValue: a.showPopupJoiner,
            "onUpdate:modelValue": k[22] || (k[22] = (M) => a.showPopupJoiner = M),
            width: a.popupWidthParent,
            "show-close": !0,
            class: "dialog-grid dialog-form",
            "append-to-body": "",
            "close-on-click-modal": !0,
            "close-on-press-escape": !0,
            "destroy-on-close": !0
          }, {
            footer: r(() => [
              $("div", hc, [
                d(K, {
                  onClick: k[20] || (k[20] = j((M) => te(l.value), ["prevent"])),
                  type: "success",
                  plain: ""
                }, {
                  default: r(() => [...k[77] || (k[77] = [
                    I("Save Joiner", -1)
                  ])]),
                  _: 1
                }),
                e.joinerField.joiner_enable ? (n(), h(K, {
                  key: 0,
                  onClick: k[21] || (k[21] = j((M) => je(l.value), ["prevent"])),
                  type: "default",
                  plain: ""
                }, {
                  default: r(() => [...k[78] || (k[78] = [
                    I("Reset", -1)
                  ])]),
                  _: 1
                })) : b("", !0)
              ])
            ]),
            default: r(() => [
              d(Mi, {
                ref_key: "joinFormRef",
                ref: l,
                model: e.joinerField,
                "label-width": "auto",
                "label-position": "top"
              }, {
                default: r(() => [
                  d(ht, { gutter: 20 }, {
                    default: r(() => [
                      d(ne, {
                        md: 12,
                        sm: 24,
                        xs: 24
                      }, {
                        default: r(() => [
                          d(Se, {
                            label: "Parent Form",
                            prop: "form_id",
                            required: ""
                          }, {
                            default: r(() => [
                              d(Ii, {
                                "user-state": be(m),
                                modelValue: e.joinerField.form_id,
                                "onUpdate:modelValue": k[4] || (k[4] = (M) => e.joinerField.form_id = M),
                                filterable: "",
                                clearable: "",
                                placeholder: "Please select form...",
                                "value-object-id": !0,
                                "enable-object-type": !0,
                                "joiner-object": !0,
                                "field-name": "joiner_field.form_id",
                                "data-provider": { providerId: "getsdform-all", providerType: be(fe).SYS, params: { form_license: e.formLicense } },
                                "value-field": "_id",
                                "search-field": ["form_name"],
                                "label-field": ["form_name"],
                                onChange: S
                              }, null, 8, ["user-state", "modelValue", "data-provider"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      d(ne, {
                        md: 12,
                        sm: 24,
                        xs: 24
                      }, {
                        default: r(() => [
                          d(Se, {
                            label: "Joiner Label",
                            prop: "joiner_label",
                            required: ""
                          }, {
                            default: r(() => [
                              d(Re, {
                                modelValue: e.joinerField.joiner_label,
                                "onUpdate:modelValue": k[5] || (k[5] = (M) => e.joinerField.joiner_label = M)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  d(ht, { gutter: 20 }, {
                    default: r(() => [
                      d(ne, {
                        md: 12,
                        sm: 24,
                        xs: 24
                      }, {
                        default: r(() => [
                          d(Se, {
                            label: "Join Parent Field",
                            prop: "joiner_variable"
                          }, {
                            default: r(() => [
                              d(Re, {
                                modelValue: e.joinerField.joiner_variable,
                                "onUpdate:modelValue": k[6] || (k[6] = (M) => e.joinerField.joiner_variable = M),
                                disabled: !0
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      d(ne, {
                        md: 12,
                        sm: 24,
                        xs: 24
                      }, {
                        default: r(() => [
                          d(Se, {
                            label: "Field Name",
                            prop: "field_name",
                            required: ""
                          }, {
                            default: r(() => [
                              d(Re, {
                                modelValue: e.joinerField.field_name,
                                "onUpdate:modelValue": k[7] || (k[7] = (M) => e.joinerField.field_name = M)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  d(ht, { gutter: 20 }, {
                    default: r(() => [
                      d(ne, {
                        md: 12,
                        sm: 24,
                        xs: 24
                      }, {
                        default: r(() => [
                          d(Se, {
                            label: "Label Fields",
                            prop: "label_fields",
                            required: ""
                          }, {
                            default: r(() => [
                              d(Ka, {
                                modelValue: e.joinerField.label_fields,
                                "onUpdate:modelValue": k[8] || (k[8] = (M) => e.joinerField.label_fields = M),
                                "allow-create": !0,
                                placeholder: "Please field...",
                                "fixed-options": a.subSchema,
                                multiple: !0
                              }, null, 8, ["modelValue", "fixed-options"])
                            ]),
                            _: 1
                          }),
                          d(Se, {
                            label: "Ref Fields",
                            prop: "ref_fields"
                          }, {
                            default: r(() => [
                              d(Ka, {
                                modelValue: e.joinerField.ref_fields,
                                "onUpdate:modelValue": k[9] || (k[9] = (M) => e.joinerField.ref_fields = M),
                                "allow-create": !0,
                                placeholder: "Please field...",
                                "fixed-options": a.subSchema,
                                multiple: !0
                              }, null, 8, ["modelValue", "fixed-options"])
                            ]),
                            _: 1
                          }),
                          d(Se, {
                            label: "Hint",
                            prop: "joiner_hint"
                          }, {
                            default: r(() => [
                              d(Re, {
                                modelValue: e.joinerField.joiner_hint,
                                "onUpdate:modelValue": k[10] || (k[10] = (M) => e.joinerField.joiner_hint = M)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          d(Se, {
                            label: "Size (%)",
                            prop: "joiner_size"
                          }, {
                            default: r(() => [
                              d(xa, {
                                modelValue: e.joinerField.joiner_size,
                                "onUpdate:modelValue": k[11] || (k[11] = (M) => e.joinerField.joiner_size = M),
                                min: 10,
                                max: 100,
                                step: 10
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      d(ne, {
                        md: 12,
                        sm: 24,
                        xs: 24
                      }, {
                        default: r(() => [
                          d(Se, {
                            label: "Search Fields",
                            prop: "search_fields",
                            required: ""
                          }, {
                            default: r(() => [
                              d(Ka, {
                                modelValue: e.joinerField.search_fields,
                                "onUpdate:modelValue": k[12] || (k[12] = (M) => e.joinerField.search_fields = M),
                                "allow-create": !0,
                                placeholder: "Please field...",
                                "fixed-options": a.subSchema,
                                multiple: !0
                              }, null, 8, ["modelValue", "fixed-options"])
                            ]),
                            _: 1
                          }),
                          d(Se, {
                            label: "Placeholder",
                            prop: "joiner_placeholder"
                          }, {
                            default: r(() => [
                              d(Re, {
                                modelValue: e.joinerField.joiner_placeholder,
                                "onUpdate:modelValue": k[13] || (k[13] = (M) => e.joinerField.joiner_placeholder = M)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          d(ht, { gutter: 20 }, {
                            default: r(() => [
                              d(ne, {
                                md: 6,
                                sm: 12,
                                xs: 24
                              }, {
                                default: r(() => [
                                  d(Se, {
                                    label: "Insert Enable",
                                    prop: "insert_enable"
                                  }, {
                                    default: r(() => [
                                      d(It, {
                                        modelValue: e.joinerField.insert_enable,
                                        "onUpdate:modelValue": k[14] || (k[14] = (M) => e.joinerField.insert_enable = M)
                                      }, null, 8, ["modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              d(ne, {
                                md: 6,
                                sm: 12,
                                xs: 24
                              }, {
                                default: r(() => [
                                  d(Se, {
                                    label: "Edit Enable",
                                    prop: "edit_enable"
                                  }, {
                                    default: r(() => [
                                      d(It, {
                                        modelValue: e.joinerField.edit_enable,
                                        "onUpdate:modelValue": k[15] || (k[15] = (M) => e.joinerField.edit_enable = M)
                                      }, null, 8, ["modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              d(ne, {
                                md: 6,
                                sm: 12,
                                xs: 24
                              }, {
                                default: r(() => [
                                  d(Se, {
                                    label: "View Enable",
                                    prop: "view_enable"
                                  }, {
                                    default: r(() => [
                                      d(It, {
                                        modelValue: e.joinerField.view_enable,
                                        "onUpdate:modelValue": k[16] || (k[16] = (M) => e.joinerField.view_enable = M)
                                      }, null, 8, ["modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              d(ne, {
                                md: 6,
                                sm: 12,
                                xs: 24
                              }, {
                                default: r(() => [
                                  d(Se, {
                                    label: "Allow to change",
                                    prop: "change_enable"
                                  }, {
                                    default: r(() => [
                                      d(It, {
                                        modelValue: e.joinerField.change_enable,
                                        "onUpdate:modelValue": k[17] || (k[17] = (M) => e.joinerField.change_enable = M)
                                      }, null, 8, ["modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  d(ht, { gutter: 20 }, {
                    default: r(() => [
                      d(ne, { span: 24 }, {
                        default: r(() => [
                          d(Se, { label: "Attributes ( Fields Name )" }, {
                            default: r(() => [
                              (n(!0), v(L, null, J(a.subSchema, (M) => (n(), h(K, {
                                color: "#626aef",
                                size: "small",
                                dark: a.isDark,
                                class: "mb-1",
                                plain: "",
                                onClick: (ee) => be(dc)("{{" + M.value + "}}")
                              }, {
                                default: r(() => [
                                  I(A(M.value), 1)
                                ]),
                                _: 2
                              }, 1032, ["dark", "onClick"]))), 256))
                            ]),
                            _: 1
                          }),
                          d(Se, {
                            label: "Label Template",
                            prop: "label_template"
                          }, {
                            label: r(() => [
                              k[69] || (k[69] = I(" Label Template ", -1)),
                              d(ft, {
                                size: "small",
                                type: "info"
                              }, {
                                default: r(() => [
                                  d(fa, null, {
                                    default: r(() => [
                                      d(Dl)
                                    ]),
                                    _: 1
                                  }),
                                  k[67] || (k[67] = I(" Using Attribute by ", -1)),
                                  d(De, { type: "primary" }, {
                                    default: r(() => [
                                      I(A(a.aname), 1)
                                    ]),
                                    _: 1
                                  }),
                                  k[68] || (k[68] = I(" into Value ", -1))
                                ]),
                                _: 1
                              })
                            ]),
                            default: r(() => [
                              d(Re, {
                                modelValue: e.joinerField.label_template,
                                "onUpdate:modelValue": k[18] || (k[18] = (M) => e.joinerField.label_template = M)
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          d(Se, {
                            label: "Filter ( SQL )",
                            prop: "sql_filter"
                          }, {
                            label: r(() => [
                              k[75] || (k[75] = I(" Filters ( WHERE SQL ) ", -1)),
                              d(ft, {
                                size: "small",
                                type: "info"
                              }, {
                                default: r(() => [
                                  d(fa, null, {
                                    default: r(() => [
                                      d(Dl)
                                    ]),
                                    _: 1
                                  }),
                                  k[72] || (k[72] = I(" Add a param with ", -1)),
                                  d(De, { type: "primary" }, {
                                    default: r(() => [...k[70] || (k[70] = [
                                      I(":param_name", -1)
                                    ])]),
                                    _: 1
                                  }),
                                  k[73] || (k[73] = I(" *ObjectId type: ", -1)),
                                  d(De, { type: "warning" }, {
                                    default: r(() => [...k[71] || (k[71] = [
                                      I("CONVERT(:param_name, 'objectId')", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              d($i, {
                                icon: "Link",
                                type: "primary",
                                target: "_blank",
                                href: "https://noql.synatic.dev/sql-syntax/introduction/",
                                class: "ml-2"
                              }, {
                                default: r(() => [...k[74] || (k[74] = [
                                  I("SQL Syntax", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            default: r(() => [
                              d(Re, {
                                modelValue: e.joinerField.sql_filter,
                                "onUpdate:modelValue": k[19] || (k[19] = (M) => e.joinerField.sql_filter = M),
                                placeholder: "`field_name` = :param_name AND `field_name.sub_name` = :param_name2"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          }),
                          d(Se, {
                            label: "Order By",
                            class: "option-items-pane"
                          }, {
                            default: r(() => [
                              $("div", pc, [
                                d(Pi, ae({
                                  tag: "ul",
                                  list: e.joinerField.order_by,
                                  "item-key": "id"
                                }, {
                                  group: "optionGroup",
                                  ghostClass: "ghost",
                                  handle: ".drag-option"
                                }), {
                                  item: r(({ element: M, index: ee }) => [
                                    $("li", mc, [
                                      d(Ti, {
                                        modelValue: M.column,
                                        "onUpdate:modelValue": (ba) => M.column = ba,
                                        options: a.subSchema,
                                        placeholder: "Please field...",
                                        filterable: !0,
                                        clearable: !0,
                                        class: "mr-1",
                                        style: { width: "450px" }
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                      d(Ht, {
                                        modelValue: M.sort,
                                        "onUpdate:modelValue": (ba) => M.sort = ba,
                                        style: { width: "150px" }
                                      }, {
                                        default: r(() => [
                                          (n(), h(Ie, {
                                            key: be(ge).ASC,
                                            label: be(ge).ASC,
                                            value: be(ge).ASC
                                          }, null, 8, ["label", "value"])),
                                          (n(), h(Ie, {
                                            key: be(ge).DESC,
                                            label: be(ge).DESC,
                                            value: be(ge).DESC
                                          }, null, 8, ["label", "value"]))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"]),
                                      d(K, {
                                        circle: "",
                                        plain: "",
                                        class: "icon-drag drag-option ml-1"
                                      }, {
                                        default: r(() => [
                                          d(mt, {
                                            class: "text-4 ml-0.3",
                                            "icon-name": "addon-grip-vertical"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      d(K, {
                                        circle: "",
                                        plain: "",
                                        type: "danger",
                                        onClick: (ba) => p(M, ee),
                                        icon: "Delete",
                                        class: "col-delete-button"
                                      }, null, 8, ["onClick"])
                                    ])
                                  ]),
                                  _: 1
                                }, 16, ["list"])
                              ]),
                              d(K, {
                                round: "",
                                plain: "",
                                icon: "Plus",
                                type: "success",
                                onClick: _
                              }, {
                                default: r(() => [...k[76] || (k[76] = [
                                  I("Add OrderBy", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"])
            ]),
            _: 1
          }, 8, ["modelValue", "width"])
        ])) : b("", !0),
        a.showDataDicDialogFlag ? (n(), v("div", fc, [
          d(ca, {
            title: `Data Dic - ${a.formDataDic && a.formDataDic._id ? a.formDataDic.form_name : ""}`,
            class: "dialog-grid dialog-form",
            modelValue: a.showDataDicDialogFlag,
            "onUpdate:modelValue": k[24] || (k[24] = (M) => a.showDataDicDialogFlag = M),
            "show-close": !0,
            "append-to-body": "",
            draggable: "",
            width: a.popupWidthDic,
            "close-on-click-modal": !0,
            "close-on-press-escape": !0,
            "destroy-on-close": !1
          }, {
            footer: r(() => [
              $("div", cc, [
                d(K, {
                  onClick: k[23] || (k[23] = (M) => a.showDataDicDialogFlag = !1)
                }, {
                  default: r(() => [...k[79] || (k[79] = [
                    I("Close", -1)
                  ])]),
                  _: 1
                })
              ])
            ]),
            default: r(() => [
              a.formDataDic && a.formDataDic._id ? (n(), h(Vi, {
                key: 0,
                "joiner-field": a.formDataDic.joiner_field,
                "form-db": a.formDataDic.form_db,
                form_id: a.formDataDic._id ? a.formDataDic._id : "",
                form_table: a.formDataDic.form_table,
                "form-license": a.formDataDic.form_license,
                "user-state": e.userState,
                "enable-action": !1
              }, null, 8, ["joiner-field", "form-db", "form_id", "form_table", "form-license", "user-state"])) : b("", !0)
            ]),
            _: 1
          }, 8, ["title", "modelValue", "width"])
        ])) : b("", !0),
        a.showSchemaFlag ? (n(), v("div", bc, [
          d(ca, {
            title: "Sub Schema",
            class: "dialog-grid dialog-form",
            modelValue: a.showSchemaFlag,
            "onUpdate:modelValue": k[26] || (k[26] = (M) => a.showSchemaFlag = M),
            "show-close": !0,
            "append-to-body": "",
            width: a.popupWidthDic,
            "close-on-click-modal": !0,
            "close-on-press-escape": !0,
            "destroy-on-close": !1
          }, {
            footer: r(() => [
              $("div", gc, [
                d(K, {
                  onClick: k[25] || (k[25] = (M) => a.showSchemaFlag = !1)
                }, {
                  default: r(() => [...k[80] || (k[80] = [
                    I("Close", -1)
                  ])]),
                  _: 1
                })
              ])
            ]),
            default: r(() => [
              d(Ei, {
                "form-db": e.formDb,
                "parent-field": a.parentField,
                "sub-schema": a.popSubSchema,
                "enable-action": e.enableAction
              }, null, 8, ["form-db", "parent-field", "sub-schema", "enable-action"])
            ]),
            _: 1
          }, 8, ["modelValue", "width"])
        ])) : b("", !0),
        a.showSchemaAddFlag ? (n(), v("div", yc, [
          d(ca, {
            title: "Custom Schema",
            class: "dialog-grid dialog-form",
            modelValue: a.showSchemaAddFlag,
            "onUpdate:modelValue": k[27] || (k[27] = (M) => a.showSchemaAddFlag = M),
            "show-close": !0,
            "append-to-body": "",
            width: "600px",
            "close-on-click-modal": !0,
            "close-on-press-escape": !0,
            "destroy-on-close": !1
          }, {
            default: r(() => [
              d(Ai, {
                "form-db": e.formDb,
                "form-license": e.formLicense,
                form_id: e.form_id,
                form_table: e.form_table,
                "joiner-field": e.joinerField,
                "ref-grid": e.refGrid,
                "init-data": a.initSchema,
                "cancel-callback": s
              }, null, 8, ["form-db", "form-license", "form_id", "form_table", "joiner-field", "ref-grid", "init-data"])
            ]),
            _: 1
          }, 8, ["modelValue"])
        ])) : b("", !0)
      ], 64);
    };
  }
}), wc = /* @__PURE__ */ U(vc, [["__scopeId", "data-v-f62d8f6f"]]), Sc = O({
  name: "SdDataDicPopup",
  components: {},
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: null,
    formId: {
      type: String,
      required: !0
    },
    backdrop: {
      type: Boolean,
      default: !0
    },
    cancelCallback: {
      type: Function,
      required: !0
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      resizeCleanup: null,
      sdformModel: {},
      apiUrl: this.userState.host,
      useUserState: this.userState,
      popupName: "Data Dic",
      popupWidth: "90%",
      showForm: !1,
      iconForm: "",
      titleNameForm: "",
      popupWidthdefault: "90%"
    };
  },
  async created() {
  },
  computed: {
    showPopupFlag: {
      get() {
        return this.modelValue;
      },
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t), this.$emit("change", e);
      }
    }
  },
  setup(e, t) {
    return { options: ke({}) };
  },
  mounted() {
    this.handleOpen(), this.resizeCleanup = Pe(() => {
      this.$nextTick(() => {
        this.popupWidth = oe(this.popupWidthdefault);
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    async handleOpen() {
      if (this.formId != "")
        if (this.userState.formStore[this.formId])
          this.initForm(this.userState.formStore[this.formId]);
        else if (this.useUserState.user) {
          const e = await $e(this.formId, this.useUserState);
          e.response && e.data ? e.data.dataid && this.initForm(e.data) : B.warning("Form not found");
        } else
          B.warning("Unauthorized.");
      else
        B.warning("FormId not found");
    },
    handleCancel() {
      this.cancelCallback && this.cancelCallback();
    },
    initForm(e) {
      this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.showForm = !0, this.titleNameForm = this.sdformModel.form_name ? this.sdformModel.form_name : "", this.popupName = `${this.titleNameForm}`, this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = "", this.popupWidth = oe(this.popupWidthdefault);
    }
  }
}), Fc = {
  role: "heading",
  class: "el-dialog__title"
}, _c = { class: "dialog-footer" };
function kc(e, t, a, l, o, i) {
  const s = Ze, u = ve, m = wc, f = ie, c = Ce;
  return n(), h(c, {
    title: `Data Dic  - ${e.popupName}`,
    modelValue: e.showPopupFlag,
    "onUpdate:modelValue": t[0] || (t[0] = (F) => e.showPopupFlag = F),
    width: e.popupWidth,
    "show-close": !0,
    class: "dialog-grid dialog-form",
    "before-close": e.handleCancel,
    "append-to-body": "",
    "close-on-click-modal": e.backdrop,
    "close-on-press-escape": !0,
    "destroy-on-close": !0
  }, {
    header: r(({ close: F, titleId: D, titleClass: g }) => [
      $("span", Fc, [
        e.iconForm != "" ? (n(), h(s, {
          key: 0,
          "svg-data": e.iconForm
        }, null, 8, ["svg-data"])) : (n(), h(u, {
          key: 1,
          "icon-name": "icon-sdform"
        })),
        I(" Data Dic - " + A(e.popupName), 1)
      ])
    ]),
    footer: r(() => [
      $("div", _c, [
        d(f, {
          onClick: j(e.handleCancel, ["prevent"])
        }, {
          default: r(() => [...t[1] || (t[1] = [
            I("Close", -1)
          ])]),
          _: 1
        }, 8, ["onClick"])
      ])
    ]),
    default: r(() => [
      d(m, {
        "joiner-field": e.sdformModel.joiner_field,
        "form-db": e.sdformModel.form_db,
        form_id: e.formId,
        form_table: e.sdformModel.form_table,
        "form-license": e.sdformModel.form_license,
        "version-description": e.sdformModel.version_description,
        "user-state": e.userState,
        "enable-action": !1
      }, null, 8, ["joiner-field", "form-db", "form_id", "form_table", "form-license", "version-description", "user-state"])
    ]),
    _: 1
  }, 8, ["title", "modelValue", "width", "before-close", "close-on-click-modal"]);
}
const qw = /* @__PURE__ */ U(Sc, [["render", kc]]), Cc = /* @__PURE__ */ O({
  __name: "SdDynamicInput",
  props: {
    modelValue: {},
    readonly: { type: Boolean },
    inputType: {},
    size: {},
    dataList: {},
    inputOptions: {},
    userState: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(e, { emit: t }) {
    const a = e, l = ke({
      inputType: a.inputType,
      inputOptions: {},
      isDark: de(),
      arrayList: ["multiselect-editor"],
      stringList: [
        "text-editor",
        "textarea-editor",
        "select-editor",
        "radio-editor",
        "html-editor",
        "color-editor",
        "js-editor",
        "css-editor",
        "datetime-editor",
        "date-editor",
        "time-editor"
      ]
    }), o = q(["#409EFF", "#67C23A", "#E6A23C", "#F56C6C", "#626aef", "#909399", "#303133", "#606266", "#D4D7DE", "#EBEDF0"]), i = Z(() => a.inputType), s = Z(() => a.inputOptions), u = Z({
      get() {
        return l.inputType === "text-editor" ? String(a.modelValue) : a.modelValue;
      },
      set(D) {
        m("update:modelValue", D);
      }
    });
    tt(i, (D, g) => {
      D == "number-editor" ? typeof !a.modelValue == "number" && (l.stringList.includes(g) ? u.value = isNaN(u.value) ? void 0 : Number(u.value) : u.value = void 0) : l.stringList.includes(D) ? typeof !a.modelValue == "string" && (l.arrayList.includes(g) || g == "json-editor" ? u.value = String(a.modelValue).toString() : u.value = String(u.value)) : D == "boolean-editor" ? typeof !a.modelValue == "boolean" && (l.stringList.includes(g) ? u.value = Tr(u.value) : g == "number-editor" ? u.value = u.value > 0 : u.value = !!(u.value && !gl(u.value))) : l.arrayList.includes(D) ? typeof !a.modelValue == "object" && (l.arrayList.includes(g) || (u.value = [])) : D == "json-editor" && typeof !a.modelValue == "object" && (l.arrayList.includes(g) || (u.value = [])), l.inputType = D;
    }), tt(s, (D, g) => {
      l.inputOptions = D;
    }), xe(() => {
      l.inputType = a.inputType, l.inputOptions = a.inputOptions;
    });
    const m = t;
    function f(D) {
      m("change", D);
    }
    function c(D) {
      m("focus", D);
    }
    function F(D) {
      m("blur", D);
    }
    return (D, g) => {
      const C = Te, _ = ea, p = ml, y = qi, S = At, N = Bt, w = Lt, T = xi, V = Wi, E = dl, W = Ra, te = xo;
      return n(), v(L, null, [
        l.inputType === "text-editor" ? (n(), h(C, ae({
          key: 0,
          modelValue: u.value,
          "onUpdate:modelValue": g[0] || (g[0] = (x) => u.value = x),
          type: "text",
          size: e.size || void 0,
          clearable: !0
        }, l.inputOptions ? l.inputOptions : void 0, {
          disabled: !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: F,
          onChange: f
        }), null, 16, ["modelValue", "size", "disabled"])) : b("", !0),
        l.inputType === "number-editor" ? (n(), h(_, ae({
          key: 1,
          modelValue: u.value,
          "onUpdate:modelValue": g[1] || (g[1] = (x) => u.value = x),
          style: { width: "100%" },
          size: e.size || void 0
        }, l.inputOptions ? l.inputOptions : void 0, {
          disabled: !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: F,
          onChange: f
        }), null, 16, ["modelValue", "size", "disabled"])) : b("", !0),
        l.inputType === "datetime-editor" ? (n(), h(p, ae({
          key: 2,
          modelValue: u.value,
          "onUpdate:modelValue": g[2] || (g[2] = (x) => u.value = x),
          type: "datetime",
          disabled: !!e.readonly || e.readonly,
          clearable: !0,
          size: e.size
        }, l.inputOptions ? l.inputOptions : void 0, {
          format: "DD/MM/YYYY HH:mm",
          "value-format": "YYYY-MM-DD HH:mm:ss",
          placeholder: "Select Date Time...",
          onFocus: c,
          onBlur: F,
          onChange: f
        }), null, 16, ["modelValue", "disabled", "size"])) : b("", !0),
        l.inputType === "date-editor" ? (n(), h(p, ae({
          key: 3,
          modelValue: u.value,
          "onUpdate:modelValue": g[3] || (g[3] = (x) => u.value = x),
          type: "date",
          disabled: !!e.readonly || e.readonly,
          clearable: !0,
          size: e.size
        }, l.inputOptions ? l.inputOptions : void 0, {
          format: "DD/MM/YYYY",
          "value-format": "YYYY-MM-DD",
          placeholder: "Select Date...",
          onFocus: c,
          onBlur: F,
          onChange: f
        }), null, 16, ["modelValue", "disabled", "size"])) : b("", !0),
        l.inputType === "time-editor" ? (n(), h(y, ae({
          key: 4,
          modelValue: u.value,
          "onUpdate:modelValue": g[4] || (g[4] = (x) => u.value = x),
          disabled: !!e.readonly || e.readonly,
          size: e.size
        }, l.inputOptions ? l.inputOptions : void 0, {
          clearable: !0,
          format: "HH:mm",
          "value-format": "HH:mm:ss",
          placeholder: "Select Time...",
          onFocus: c,
          onBlur: F,
          onChange: f
        }), null, 16, ["modelValue", "disabled", "size"])) : b("", !0),
        l.inputType === "boolean-editor" ? (n(), h(S, ae({
          key: 5,
          modelValue: u.value,
          "onUpdate:modelValue": g[5] || (g[5] = (x) => u.value = x),
          "active-text": u.value ? "True" : "False"
        }, l.inputOptions ? l.inputOptions : void 0, {
          disabled: !!e.readonly || e.readonly,
          size: e.size || void 0,
          onFocus: c,
          onBlur: F,
          onChange: f
        }), null, 16, ["modelValue", "active-text", "disabled", "size"])) : b("", !0),
        l.inputType === "textarea-editor" ? (n(), h(C, ae({
          key: 6,
          modelValue: u.value,
          "onUpdate:modelValue": g[6] || (g[6] = (x) => u.value = x),
          type: "textarea",
          rows: 3,
          size: e.size || void 0
        }, l.inputOptions ? l.inputOptions : void 0, {
          disabled: !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: F,
          onChange: f
        }), null, 16, ["modelValue", "size", "disabled"])) : b("", !0),
        l.inputType === "select-editor" ? (n(), h(w, ae({
          key: 7,
          modelValue: u.value,
          "onUpdate:modelValue": g[7] || (g[7] = (x) => u.value = x),
          style: { width: "100%" },
          clearable: !0,
          size: e.size || void 0,
          placeholder: "Please Select..."
        }, l.inputOptions ? l.inputOptions : void 0, {
          disabled: !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: F,
          onChange: f
        }), {
          default: r(() => [
            (n(!0), v(L, null, J(e.dataList, (x) => (n(), h(N, {
              key: x.value,
              label: x.label,
              value: x.value ? x.value : ""
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 16, ["modelValue", "size", "disabled"])) : b("", !0),
        l.inputType === "radio-editor" ? (n(), h(V, ae({
          key: 8,
          modelValue: u.value,
          "onUpdate:modelValue": g[8] || (g[8] = (x) => u.value = x)
        }, l.inputOptions ? l.inputOptions : void 0, {
          disabled: !!e.readonly || e.readonly,
          size: e.size || void 0,
          onFocus: c,
          onBlur: F,
          onChange: f
        }), {
          default: r(() => [
            (n(!0), v(L, null, J(e.dataList, (x) => (n(), h(T, {
              key: x.value,
              value: x.value ? x.value : "",
              label: x.label
            }, null, 8, ["value", "label"]))), 128))
          ]),
          _: 1
        }, 16, ["modelValue", "disabled", "size"])) : b("", !0),
        l.inputType === "multiselect-editor" ? (n(), h(w, ae({
          key: 9,
          modelValue: u.value,
          "onUpdate:modelValue": g[9] || (g[9] = (x) => u.value = x)
        }, l.inputOptions ? l.inputOptions : void 0, {
          multiple: "",
          size: e.size || void 0,
          style: { width: "100%" },
          disabled: !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: F,
          onChange: f
        }), {
          default: r(() => [
            (n(!0), v(L, null, J(e.dataList, (x) => (n(), h(N, {
              key: x.value,
              label: x.label,
              value: x.value ? x.value : ""
            }, null, 8, ["label", "value"]))), 128))
          ]),
          _: 1
        }, 16, ["modelValue", "size", "disabled"])) : b("", !0),
        l.inputType === "color-editor" ? (n(), h(E, ae({
          key: 10,
          modelValue: u.value,
          "onUpdate:modelValue": g[10] || (g[10] = (x) => u.value = x),
          size: e.size || void 0,
          "show-alpha": !0
        }, l.inputOptions ? l.inputOptions : void 0, {
          predefine: o.value,
          disabled: !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: F,
          onChange: f
        }), null, 16, ["modelValue", "size", "predefine", "disabled"])) : b("", !0),
        l.inputType === "json-editor" ? (n(), h(be(jo), {
          key: 11,
          modelValue: u.value,
          "onUpdate:modelValue": g[11] || (g[11] = (x) => u.value = x),
          "main-menu-bar": !1,
          "navigation-bar": !1,
          mode: be(Uo).tree,
          style: { width: "100%" },
          size: e.size || void 0,
          class: Y(l.isDark ? "jse-theme-dark" : ""),
          "read-only": !!e.readonly || e.readonly,
          onFocus: c,
          onBlur: F,
          onChange: f
        }, null, 8, ["modelValue", "mode", "size", "class", "read-only"])) : b("", !0),
        l.inputType === "html-editor" ? (n(), h(W, ae({
          key: 12,
          modelValue: u.value,
          "onUpdate:modelValue": g[12] || (g[12] = (x) => u.value = x),
          mode: "full",
          size: e.size || void 0
        }, l.inputOptions ? l.inputOptions : void 0, {
          readonly: !!e.readonly || e.readonly,
          "user-state": e.userState,
          onFocus: c,
          onBlur: F,
          onChange: f
        }), null, 16, ["modelValue", "size", "readonly", "user-state"])) : b("", !0),
        l.inputType === "html-mini-editor" ? (n(), h(W, ae({
          key: 13,
          modelValue: u.value,
          "onUpdate:modelValue": g[13] || (g[13] = (x) => u.value = x),
          mode: "mini",
          size: e.size || void 0
        }, l.inputOptions ? l.inputOptions : void 0, {
          readonly: !!e.readonly || e.readonly,
          "user-state": e.userState,
          onFocus: c,
          onBlur: F,
          onChange: f
        }), null, 16, ["modelValue", "size", "readonly", "user-state"])) : b("", !0),
        l.inputType === "css-editor" ? (n(), h(te, ae({
          key: 14,
          value: u.value,
          "onUpdate:value": g[14] || (g[14] = (x) => u.value = x)
        }, l.inputOptions ? l.inputOptions : void 0, {
          readonly: !!e.readonly || e.readonly,
          lang: "css",
          class: "custom-ace",
          "min-lines": 2,
          "max-lines": 25,
          size: e.size || void 0,
          onOnBlur: F,
          onOnFocus: c,
          onOnChange: f
        }), null, 16, ["value", "readonly", "size"])) : b("", !0),
        l.inputType === "js-editor" ? (n(), h(te, ae({
          key: 15,
          value: u.value,
          "onUpdate:value": g[15] || (g[15] = (x) => u.value = x)
        }, l.inputOptions ? l.inputOptions : void 0, {
          readonly: !!e.readonly || e.readonly,
          lang: "javascript",
          class: "custom-ace",
          "min-lines": 2,
          "max-lines": 25,
          size: e.size || void 0,
          onOnBlur: F,
          onOnFocus: c,
          onOnChange: f
        }), null, 16, ["value", "readonly", "size"])) : b("", !0)
      ], 64);
    };
  }
}), Ww = /* @__PURE__ */ U(Cc, [["__scopeId", "data-v-f8d6fc22"]]), Dc = {
  role: "heading",
  class: "el-dialog__title"
}, Ic = { style: { width: "100%", "min-height": "500px", height: "500px" } }, $c = {
  key: 0,
  style: { color: "var(--el-color-warning)", "font-size": "9px" }
}, xw = /* @__PURE__ */ O({
  __name: "SdFormErd",
  props: {
    modelValue: null,
    formId: {
      type: String,
      required: !0
    },
    backdrop: {
      type: Boolean,
      default: !0
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    cancelCallback: {
      type: Function,
      required: !0
    },
    afterSaveCallback: {
      type: Function
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: t }) {
    const a = t, l = e, o = ke({
      sdformModel: {},
      apiUrl: l.userState.host,
      useUserState: l.userState,
      popupName: "Form",
      popupWidth: "90%",
      showContent: !1,
      iconForm: "",
      afterDeleteForm: void 0,
      titleNameForm: "",
      popupWidthdefault: "90%",
      formList: null,
      nodes: [],
      edges: []
    }), { findNode: i, fitView: s } = gn(), u = Z({
      get() {
        return l.modelValue;
      },
      set(g) {
        a("update:modelValue", g), a("change", g);
      }
    });
    let m;
    Lo(() => m?.()), xe(() => {
      c(), m = Pe(() => {
        Qt(() => {
          o.popupWidth = oe(o.popupWidthdefault);
        });
      });
    });
    async function f(g = "TB") {
      const C = new Ml.graphlib.Graph(), _ = g === "LR";
      C.setDefaultEdgeLabel(() => ({})), C.setGraph({ rankdir: g }), await Qt(async () => {
        o.nodes.forEach((p) => {
          const y = i(p.id);
          y ? C.setNode(p.id, { width: y.dimensions.width || 200, height: y.dimensions.height || 50 }) : C.setNode(p.id, { width: 200, height: 50 });
        }), o.edges.forEach((p) => {
          C.setEdge(p.source, p.target);
        }), Ml.layout(C), o.nodes = await o.nodes.map((p) => {
          const y = C.node(p.id);
          return {
            ...p,
            targetPosition: _ ? ga.Left : ga.Top,
            sourcePosition: _ ? ga.Right : ga.Bottom,
            position: {
              x: y.x - y.width / 2,
              y: y.y - y.height / 2
            }
          };
        }), o.showContent = !0, setTimeout(() => {
          s();
        }, 450);
      });
    }
    async function c() {
      if (o.showContent = !1, l.formId != "")
        if (l.userState.formStore[l.formId])
          D(l.userState.formStore[l.formId]);
        else if (o.useUserState) {
          const g = await $e(l.formId, o.useUserState);
          g.response && g.data ? g.data.dataid && D(g.data) : B.warning("Form not found.");
        } else
          B.warning("UserState not found.");
      else
        B.warning("FormId not found.");
    }
    function F() {
      l.cancelCallback && (l.cancelCallback(), o.showContent = !1);
    }
    async function D(g) {
      o.showContent = !1, o.sdformModel = g, l.userState.formStore[l.formId] = o.sdformModel, l.fixApiUrl && l.fixApiUrl != "" ? o.apiUrl = l.fixApiUrl : o.sdformModel.form_db.api_url && o.sdformModel.form_db.api_url != "" ? o.apiUrl = o.sdformModel.form_db.api_url : o.apiUrl = window.APP_CONFIG.API_URL, o.titleNameForm = o.sdformModel.form_name ? o.sdformModel.form_name : "", o.popupName = `${o.titleNameForm}`, o.sdformModel.form_icon ? o.iconForm = o.sdformModel.form_icon : o.iconForm = "", o.popupWidth = oe(o.popupWidthdefault);
      let C = o.sdformModel._id;
      o.sdformModel.joiner_field.joiner_enable && (C = o.sdformModel.joiner_field.form_parent), await l.userState.crudGetAll({ sdProvider: { providerId: "get-erd-list", providerType: "SYS", params: { parent: C } }, totalEnable: !1 }, async (_) => {
        o.formList = P(_.data);
        const p = { x: 0, y: 0 };
        for (const y in o.formList)
          if (Object.prototype.hasOwnProperty.call(o.formList, y)) {
            const S = o.formList[y];
            o.nodes.push({
              id: S._id,
              type: "special",
              position: p,
              data: {
                label: S.form_name,
                icon: S.form_icon,
                ref_fields: S.ref_fields,
                isParent: C == S._id,
                curNode: S._id == l.formId
              }
              // style: {
              // 	color: element._id == this.formId ? '#5cb85c' : '#5d78ff',
              // 	borderColor: element._id == this.formId ? '#5cb85c' : '#5d78ff',
              // 	backgroundColor: element._id == this.formId ? 'rgba(92, 184, 92, .1)' : 'rgba(93,120,255, .1)',
              // },
            }), S.form_id && o.edges.push({
              id: `e${S._id}-${S.form_id}`,
              type: "smoothstep",
              source: S.form_id,
              target: S._id,
              label: S.field_name,
              // markerEnd: MarkerType.ArrowClosed,
              animated: S.form_id == l.formId || S._id == l.formId,
              style: { stroke: "#f0ad4e" },
              labelStyle: { fill: "#444" },
              labelBgStyle: { fill: "#f0ad4e" }
            });
          }
        f("TB");
      });
    }
    return (g, C) => {
      const _ = Ze, p = ve, y = Ce;
      return n(), h(y, {
        title: o.popupName,
        modelValue: u.value,
        "onUpdate:modelValue": C[0] || (C[0] = (S) => u.value = S),
        width: 1200,
        "show-close": !0,
        class: "dialog-grid dialog-form",
        "before-close": F,
        "append-to-body": "",
        "close-on-click-modal": e.backdrop,
        "close-on-press-escape": !0,
        "destroy-on-close": !0
      }, {
        header: r(({ close: S, titleId: N, titleClass: w }) => [
          $("span", Dc, [
            o.iconForm != "" ? (n(), h(_, {
              key: 0,
              "svg-data": o.iconForm
            }, null, 8, ["svg-data"])) : (n(), h(p, {
              key: 1,
              "icon-name": "icon-sdform"
            })),
            I(" ERD " + A(o.popupName), 1)
          ])
        ]),
        default: r(() => [
          $("div", Ic, [
            o.showContent ? (n(), h(be(yn), {
              key: 0,
              nodes: o.nodes,
              edges: o.edges,
              class: "basic-flow",
              "default-viewport": { zoom: 1.2 },
              "min-zoom": 0.2,
              "max-zoom": 4,
              "fit-view-on-init": ""
            }, {
              "node-special": r((S) => [
                $("div", {
                  class: "vue-flow__node-default",
                  style: le({
                    width: "200px",
                    fontSize: "18px",
                    color: `var(--el-color-${S.data.curNode ? "warning" : "success"})`,
                    backgroundColor: `var(--el-color-${S.data.curNode ? "warning" : "success"}-light-9)`,
                    borderColor: `var(--el-color-${S.data.curNode ? "warning" : "success"}-light-8)`
                  })
                }, [
                  $("div", null, [
                    S.data.icon && S.data.icon != "" ? (n(), h(_, {
                      key: 0,
                      "svg-data": S.data.icon
                    }, null, 8, ["svg-data"])) : (n(), h(p, {
                      key: 1,
                      "icon-name": "icon-sdform"
                    })),
                    I(" " + A(S.data.label), 1)
                  ]),
                  S.data.isParent ? b("", !0) : (n(), v("div", $c, A(S.data.ref_fields && Object.keys(S.data.ref_fields).length > 0 ? `REF: ${S.data.ref_fields.join(", ")}` : ""), 1))
                ], 4)
              ]),
              _: 1
            }, 8, ["nodes", "edges"])) : b("", !0)
          ])
        ]),
        _: 1
      }, 8, ["title", "modelValue", "close-on-click-modal"]);
    };
  }
}), Tc = O({
  name: "SdGrid",
  props: {
    dataProvider: {
      type: Object,
      required: !0
    },
    expandProvider: {
      type: Object
    },
    insertBefore: {
      type: Function
    },
    updateBefore: {
      type: Function
    },
    viewBefore: {
      type: Function
    },
    afterDelete: {
      type: Function
    },
    expandCountChildrenName: {
      type: String,
      default: "hasChildren"
    },
    placeholderSearch: {
      type: String,
      default: "Search..."
    },
    actionLabel: {
      type: String,
      default: "Actions"
    },
    actionEnable: {
      type: Boolean,
      default: !0
    },
    totalInline: {
      type: Boolean,
      default: !0
    },
    addBtnLabel: {
      type: String,
      default: "Add"
    },
    addBtnEnable: {
      type: Boolean,
      default: !0
    },
    maxHeight: {
      type: [String, Number],
      default: "auto"
    },
    height: {
      type: [String, Number],
      default: "auto"
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    resizable: {
      type: Boolean,
      default: !1
    },
    iconName: {
      type: String,
      default: ""
    },
    titleName: {
      type: String,
      default: ""
    },
    keyId: {
      type: String,
      default: "_id"
    },
    rowKey: {
      type: String
    },
    sumLabel: {
      type: String,
      default: "Total"
    },
    sumDecimal: {
      type: Number,
      default: 0
    },
    popupWidth: {
      type: String,
      default: "70%"
    },
    popupName: {
      type: String,
      default: "Form"
    },
    userState: {
      type: Object,
      required: !0
    },
    // จำ page/search/filter/sort ลง localStorage ต่อ key นี้ — ว่าง = ปิด (พฤติกรรมเดิม)
    stateKey: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      resizeCleanup: null,
      apiUrl: "",
      rawData: [],
      total: 0,
      totalPage: 0,
      offset: 0,
      defaultParams: {},
      defaultSort: [],
      searchText: "",
      sumEnable: !1,
      sumData: {},
      preLoading: !1,
      showPopupFlag: !1,
      backdrop: !1,
      limit: 30,
      optionProvider: { limit: 30, page: 1 },
      popupWidthdefault: this.popupWidth,
      isExpand: !1,
      expandedRows: [],
      sortUi: null
      // sort ที่ผู้ใช้เลือกในหัวตาราง — ใช้คืน arrow ผ่าน :default-sort ตอน restore
    };
  },
  computed: {
    totalLabel() {
      return this.total.toLocaleString();
    },
    // คืน arrow sort ในหัวตารางตาม state ที่ restore มา (el-table อ่านครั้งเดียวตอน mount)
    defaultSortEl() {
      return this.sortUi ? { prop: this.sortUi.prop, order: this.sortUi.order } : void 0;
    },
    rowStartLabel() {
      return (this.totalPage > 0 ? this.offset + 1 : this.offset).toLocaleString();
    },
    rowEndLabel() {
      return (this.offset + this.totalPage).toLocaleString();
    }
  },
  created() {
    this.apiUrl = this.userState.host, this.dataProvider && (this.dataProvider.params || (this.dataProvider.params = {}), this.dataProvider.options ? (this.dataProvider.options.page || (this.dataProvider.options.page = 1), this.dataProvider.options.limit ? this.limit = this.dataProvider.options.limit : this.dataProvider.options.limit = this.limit, this.optionProvider = this.dataProvider.options) : this.dataProvider.options = this.optionProvider, this.defaultParams = P(this.dataProvider.params), this.defaultSort = P(this.optionProvider.orderBy), this.hydrateState(), this.expandProvider && this.optionProvider.select && this.optionProvider.select.push("COUNT(*) AS hasChildren"), this.getDataList(this.dataProvider));
  },
  setup(e, t) {
    const a = q();
    return {
      tableRef: a,
      clearFilter: () => {
        a.value.clearFilter();
      },
      clearSort: () => {
        a.value.clearSort();
      }
    };
  },
  mounted() {
    this.popupWidthdefault = oe(this.popupWidth), this.resizeCleanup = Pe(() => {
      this.$nextTick(() => {
        this.popupWidthdefault = oe(this.popupWidth);
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    async getDataList(e, t) {
      this.preLoading = !0;
      const a = this.total === 0;
      await ce.post(
        `${this.apiUrl}/widget/crud/getdata-all`,
        {
          sdProvider: e,
          totalEnable: a
        },
        {
          headers: {
            Authorization: `Bearer ${this.userState.user?.token}`
          }
        }
      ).then((l) => {
        l && l.data && l.data.data && (this.rawData = P(l.data.data), a && (this.total = l.data.total), this.offset = l.data.offset, this.totalPage = l.data.data.length, t && t(this.rawData), l.data.dataSum && l.data.dataSum[0] && (this.sumEnable = !0, this.sumData = l.data.dataSum[0])), this.preLoading = !1;
      }).catch((l) => {
        l.response && l.response.data && l.response.data.message ? B.warning(l.response.data.message) : B.warning(l.message), this.preLoading = !1;
      });
    },
    loadExpand(e, t, a) {
      if (e.dataid = e._id || null, this.expandProvider) {
        this.expandProvider.params ? this.expandProvider.params = { ...this.expandProvider.params, ...e } : this.expandProvider.params = P(e);
        const l = this.rowKey;
        l && e[l] != null && e[l] != null && (this.expandProvider.params.rowKey = e[l], ce.post(
          `${this.apiUrl}/widget/crud/getdata-all`,
          {
            sdProvider: this.expandProvider,
            totalEnable: !1
          },
          {
            headers: {
              Authorization: `Bearer ${this.userState.user?.token}`
            }
          }
        ).then(async (o) => {
          if (o && o.data && o.data.data) {
            const i = P(o.data.data);
            this.total = this.total + i.length, this.totalPage = this.totalPage + i.length, a(i);
          }
        }).catch((o) => {
          o.response && o.response.data && o.response.data.message ? B.warning(o.response.data.message) : B.warning(o.message);
        }));
      }
    },
    keyIdIndex(e) {
      const t = this.keyId;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    getIndex(e, t) {
      if (this.isExpand || this.expandedRows.length > 0) {
        const a = this.keyId;
        return this.rawData.findIndex((o) => o[a] === e[a]);
      }
      return t;
    },
    handleExpand(e, t) {
      const a = this.rowKey || this.keyId;
      if (this.isExpand = t, t)
        this.expandedRows.push(e[a]);
      else {
        const l = this.expandedRows.indexOf(e[a]);
        this.expandedRows.splice(l, 1);
        let o = this.$refs.tableRef.store.states.treeData.value, i = this.$refs.tableRef.store.states.lazyTreeNodeMap.value;
        for (const s in o)
          if (Object.prototype.hasOwnProperty.call(o, s) && e[a] == s) {
            i[s].length && (this.total = this.total - i[s].length, this.totalPage = this.totalPage - i[s].length), i[s] = [];
            const u = o[s];
            u.loaded = !1, u.children = [], u.expanded = !1;
            break;
          }
      }
    },
    removeRowExpand(e, t) {
      const a = this.rowKey || this.keyId;
      let l = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e];
      if (l) {
        const o = l.findIndex((i) => i[a] === t[a]);
        l.splice(o, 1), this.expandedRows.includes(e) && (this.total = this.total - 1, this.totalPage = this.totalPage - 1);
      }
    },
    updateRowExpand(e, t) {
      const a = this.rowKey || this.keyId;
      let l = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e];
      if (l) {
        const o = l.findIndex((i) => i[a] === t[a]);
        l[o] = P(t);
      }
    },
    addRowExpand(e, t) {
      this.rowKey || this.keyId, this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e] || (this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e] = []);
      let a = this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e];
      a && (a.push(t), this.expandedRows.includes(e) && (this.total = this.total + 1, this.totalPage = this.totalPage + 1));
    },
    getChildren(e) {
      const t = this.rowKey;
      return this.$refs.tableRef.store.states.lazyTreeNodeMap.value[e[t]];
    },
    // ---- state persistence: จำ/คืน page/search/filter/sort ผ่าน localStorage (เฉพาะเมื่อมี stateKey) ----
    hydrateState() {
      if (!this.stateKey) return;
      const e = wi(this.stateKey);
      e && (e.page && e.page > 1 && (this.optionProvider.page = e.page), e.searchText && (this.searchText = e.searchText, this.dataProvider.params.q = `%${e.searchText}%`), e.fileter && Object.keys(e.fileter).length > 0 && (this.optionProvider.fileter = e.fileter), e.orderBy && e.orderBy.length > 0 && (this.optionProvider.orderBy = e.orderBy), this.sortUi = e.sortUi || null);
    },
    persistState() {
      this.stateKey && vi(this.stateKey, {
        page: this.optionProvider.page || 1,
        searchText: this.searchText,
        fileter: this.optionProvider.fileter || null,
        orderBy: this.optionProvider.orderBy || null,
        sortUi: this.sortUi
      });
    },
    handleCurrentChange(e) {
      this.expandProvider && this.resetExpand(), this.persistState(), this.getDataList(this.dataProvider);
    },
    handleRefresh() {
      this.optionProvider.page = 1, this.optionProvider.fileter = null, this.optionProvider.orderBy = P(this.defaultSort), this.dataProvider.params = P(this.defaultParams), this.searchText = "", this.sortUi = null, this.total = 0, this.dataProvider.options = this.optionProvider, this.stateKey && Si(this.stateKey), this.clearSort(), this.clearFilter(), this.expandProvider && this.resetExpand(), this.getDataList(this.dataProvider);
    },
    reloadData() {
      this.expandProvider && this.resetExpand(), this.getDataList(this.dataProvider);
    },
    resetExpand(e = !0) {
      let t = this.$refs.tableRef.store.states.treeData.value, a = this.$refs.tableRef.store.states.lazyTreeNodeMap.value;
      for (const l in t)
        if (Object.prototype.hasOwnProperty.call(t, l)) {
          a[l] = [];
          const o = t[l];
          o.loaded = !1, o.children = [], o.expanded = !1;
        }
    },
    handleSort(e) {
      let t = P(this.defaultSort);
      if (e.order !== null) {
        const a = { column: `\`${e.prop}\``, sort: e.order == "descending" ? ge.DESC : ge.ASC };
        t ? t.push(a) : t = [a];
      }
      JSON.stringify(t) !== JSON.stringify(this.optionProvider.orderBy) && (this.optionProvider.orderBy = t, this.sortUi = e.order !== null ? { prop: e.prop, order: e.order } : null, this.expandProvider && this.resetExpand(), this.optionProvider.page = 1, this.dataProvider.options = this.optionProvider, this.persistState(), this.getDataList(this.dataProvider));
    },
    handleSearch() {
      this.searchText != "" ? this.dataProvider.params.q = `%${this.searchText}%` : delete this.dataProvider.params.q, this.total = 0, this.optionProvider.page = 1, this.expandProvider && this.resetExpand(), this.persistState(), this.getDataList(this.dataProvider);
    },
    handleFilter(e) {
      for (const t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) {
          let a = e[t];
          gl(a) ? delete this.optionProvider.fileter[t] : (this.optionProvider.fileter || (this.optionProvider.fileter = {}), this.optionProvider.fileter[t] = a);
        }
      this.expandProvider && this.resetExpand(), this.optionProvider.page = 1, this.dataProvider.options = this.optionProvider, this.total = 0, this.persistState(), this.getDataList(this.dataProvider);
    },
    handleAdd() {
      this.showPopupFlag = !0, this.backdrop = !1, this.insertBefore && this.insertBefore(null, 0);
    },
    handleUpdate(e, t) {
      this.showPopupFlag = !0, this.backdrop = !1, this.updateBefore && this.updateBefore(e, t);
    },
    handleView(e, t) {
      this.showPopupFlag = !0, this.backdrop = !0, this.viewBefore && this.viewBefore(e, t);
    },
    handleDelete(e, t) {
      const a = e[this.keyId];
      ye.confirm("Are you sure you want to delete this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        ce.delete(`${this.apiUrl}/widget/crud/delete-data`, {
          headers: {
            Authorization: `Bearer ${this.userState.user?.token}`
          },
          data: {
            id: a,
            sdProvider: this.dataProvider
          }
        }).then((l) => {
          this.expandProvider && e[this.expandCountChildrenName] ? (this.resetExpand(), this.afterDelete && this.afterDelete(e, t)) : (this.rawData.splice(t, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1, this.afterDelete && this.afterDelete(e, t)), l && l.data && l.data.message ? B.success(l.data.message) : B.success("Delete completed.");
        }).catch((l) => {
          l.response && l.response.data && l.response.data.message ? B.warning(l.response.data.message) : B.warning(l.message);
        });
      }).catch(() => {
      });
    },
    handleEditField(e, t, a, l) {
      const o = e[this.keyId];
      ye.confirm("Are you sure you want to edit value this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        ce.put(
          `${this.apiUrl}/widget/crud/update-data`,
          {
            id: o,
            data: a,
            sdProvider: this.dataProvider,
            upsert: !1
          },
          {
            headers: {
              Authorization: `Bearer ${this.userState.user?.token}`
            }
          }
        ).then((i) => {
          l(e), B.success("Edit value completed.");
        }).catch((i) => {
          i.response && i.response.data && i.response.data.message ? B.warning(i.response.data.message) : B.warning(i.message);
        });
      }).catch(() => {
      });
    },
    getSummary(e) {
      const { columns: t, data: a } = e, l = [];
      return t.forEach((o, i) => {
        if (i == 0) {
          l[i] = this.sumLabel;
          return;
        }
        const s = o.property;
        if (this.sumData[s]) {
          let u = Number(this.sumData[s]);
          l[i] = u.toLocaleString("en-US", { minimumFractionDigits: this.sumDecimal, maximumFractionDigits: this.sumDecimal });
        } else
          l[i] = null;
      }), l;
    }
  }
}), Pc = { class: "card-header" }, Mc = {
  key: 0,
  class: "mb-2",
  style: { position: "relative" }
}, Vc = { class: "text-6" }, Ec = { style: { position: "absolute", top: "0px", right: "0px" } }, Ac = {
  class: "text-3",
  style: { height: "32px", display: "inline-grid", "align-content": "center" }
}, Lc = {
  class: "text-3",
  style: { height: "32px", display: "inline-grid", "align-content": "center" }
}, Bc = { class: "card-footer" }, Oc = { key: 0 };
function Nc(e, t, a, l, o, i) {
  const s = ve, u = We, m = ie, f = dt, c = Te, F = Ma, D = Et, g = Xe, C = aa, _ = pl, p = Ce, y = oa;
  return n(), v(L, null, [
    d(_, {
      class: "box-card",
      shadow: "never"
    }, {
      header: r(() => [
        $("div", Pc, [
          e.iconName != "" || e.titleName != "" ? (n(), v("div", Mc, [
            d(u, { truncated: "" }, {
              default: r(() => [
                $("span", Vc, [
                  e.iconName != "" ? (n(), h(s, {
                    key: 0,
                    "icon-name": e.iconName
                  }, null, 8, ["icon-name"])) : b("", !0),
                  I(" " + A(e.titleName), 1)
                ])
              ]),
              _: 1
            }),
            $("span", Ec, [
              re(e.$slots, "actionsBar", {}, void 0, !0)
            ])
          ])) : b("", !0),
          d(D, { gutter: 20 }, {
            default: r(() => [
              d(f, {
                class: "mb-2",
                xs: 24,
                sm: 24,
                md: 14,
                style: { display: "inline-flex" }
              }, {
                default: r(() => [
                  e.addBtnEnable ? (n(), h(m, {
                    key: 0,
                    type: "success",
                    plain: "",
                    icon: "Plus",
                    onClick: e.handleAdd
                  }, {
                    default: r(() => [
                      I(A(e.addBtnLabel), 1)
                    ]),
                    _: 1
                  }, 8, ["onClick"])) : b("", !0),
                  t[4] || (t[4] = I()),
                  re(e.$slots, "actions", {}, void 0, !0),
                  e.totalInline ? (n(), v(L, { key: 1 }, [
                    d(m, {
                      type: "info",
                      plain: "",
                      icon: "Refresh",
                      onClick: e.handleRefresh,
                      class: "mr-1"
                    }, null, 8, ["onClick"]),
                    $("span", Ac, [
                      d(u, { "line-clamp": 2 }, {
                        default: r(() => [
                          $("span", null, A(e.rowStartLabel) + "-" + A(e.rowEndLabel) + " of " + A(e.totalLabel) + " items.", 1)
                        ]),
                        _: 1
                      })
                    ])
                  ], 64)) : b("", !0)
                ]),
                _: 3
              }),
              e.optionProvider.search ? (n(), h(f, {
                key: 0,
                class: "mb-2",
                xs: 24,
                sm: 24,
                md: 10
              }, {
                default: r(() => [
                  d(c, {
                    modelValue: e.searchText,
                    "onUpdate:modelValue": t[0] || (t[0] = (S) => e.searchText = S),
                    placeholder: e.placeholderSearch,
                    onChange: e.handleSearch,
                    clearable: ""
                  }, {
                    append: r(() => [
                      d(m, {
                        type: "info",
                        icon: "Search",
                        onClick: j(e.handleSearch, ["prevent"])
                      }, null, 8, ["onClick"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "placeholder", "onChange"])
                ]),
                _: 1
              })) : b("", !0),
              e.totalInline ? b("", !0) : (n(), h(f, {
                key: 1,
                xs: 24,
                sm: 24,
                md: 16,
                style: { display: "inline-flex" }
              }, {
                default: r(() => [
                  re(e.$slots, "actionsPager", {}, () => [
                    e.total > e.limit ? (n(), h(F, {
                      key: 0,
                      class: "mb-2",
                      "current-page": e.optionProvider.page,
                      "onUpdate:currentPage": t[1] || (t[1] = (S) => e.optionProvider.page = S),
                      "page-size": e.limit,
                      onCurrentChange: e.handleCurrentChange,
                      background: "",
                      layout: "prev, pager, next",
                      total: e.total
                    }, null, 8, ["current-page", "page-size", "onCurrentChange", "total"])) : b("", !0)
                  ], !0)
                ]),
                _: 3
              })),
              e.totalInline ? b("", !0) : (n(), h(f, {
                key: 2,
                class: "mb-2",
                xs: 24,
                sm: 24,
                md: 8,
                style: { "text-align": "right" }
              }, {
                default: r(() => [
                  $("span", Lc, [
                    d(u, { "line-clamp": "2" }, {
                      default: r(() => [
                        I(" Showing " + A(e.rowStartLabel) + "-" + A(e.rowEndLabel) + " of " + A(e.totalLabel) + " items. ", 1)
                      ]),
                      _: 1
                    })
                  ]),
                  d(m, {
                    type: "info",
                    plain: "",
                    icon: "Refresh",
                    onClick: e.handleRefresh
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              }))
            ]),
            _: 3
          })
        ])
      ]),
      default: r(() => [
        Ve((n(), h(C, {
          ref: "tableRef",
          data: e.rawData,
          stripe: "",
          border: e.resizable,
          "show-summary": e.sumEnable,
          "summary-method": e.getSummary,
          style: { width: "100%" },
          onSortChange: e.handleSort,
          "default-sort": e.defaultSortEl,
          height: e.height,
          "max-height": e.maxHeight,
          "row-key": e.rowKey,
          onExpandChange: e.handleExpand,
          lazy: !!e.expandProvider,
          load: e.expandProvider ? e.loadExpand : void 0,
          "tree-props": e.expandProvider ? { children: "children", hasChildren: e.expandCountChildrenName } : void 0,
          onFilterChange: e.handleFilter
        }, {
          default: r(() => [
            e.actionEnable ? (n(), h(g, {
              key: 0,
              fixed: "",
              label: e.actionLabel,
              width: e.readonly ? 80 : e.expandProvider ? 145 : 120
            }, {
              default: r((S) => [
                S.row[e.keyId] ? (n(), h(m, {
                  key: 0,
                  plain: "",
                  circle: "",
                  type: "info",
                  icon: "View",
                  size: "small",
                  title: "View",
                  onClick: j((N) => e.handleView(S.row, S.$index), ["prevent"])
                }, null, 8, ["onClick"])) : b("", !0),
                S.row[e.keyId] && !e.readonly ? (n(), h(m, {
                  key: 1,
                  plain: "",
                  circle: "",
                  type: "primary",
                  icon: "Edit",
                  size: "small",
                  title: "Edit",
                  onClick: j((N) => e.handleUpdate(S.row, S.$index), ["prevent"])
                }, null, 8, ["onClick"])) : b("", !0),
                S.row[e.keyId] && !e.readonly ? (n(), h(m, {
                  key: 2,
                  plain: "",
                  circle: "",
                  type: "danger",
                  icon: "Delete",
                  size: "small",
                  title: "Delete",
                  onClick: j((N) => e.handleDelete(S.row, S.$index), ["prevent"])
                }, null, 8, ["onClick"])) : b("", !0)
              ]),
              _: 1
            }, 8, ["label", "width"])) : b("", !0),
            re(e.$slots, "default", {}, void 0, !0)
          ]),
          _: 3
        }, 8, ["data", "border", "show-summary", "summary-method", "onSortChange", "default-sort", "height", "max-height", "row-key", "onExpandChange", "lazy", "load", "tree-props", "onFilterChange"])), [
          [y, e.preLoading]
        ]),
        $("div", Bc, [
          e.total > e.limit ? (n(), h(F, {
            key: 0,
            "current-page": e.optionProvider.page,
            "onUpdate:currentPage": t[2] || (t[2] = (S) => e.optionProvider.page = S),
            "page-size": e.limit,
            onCurrentChange: e.handleCurrentChange,
            class: "mt-3",
            background: "",
            layout: "prev, pager, next",
            total: e.total
          }, null, 8, ["current-page", "page-size", "onCurrentChange", "total"])) : b("", !0)
        ])
      ]),
      _: 3
    }),
    e.showPopupFlag ? (n(), v("div", Oc, [
      d(p, {
        title: e.popupName,
        modelValue: e.showPopupFlag,
        "onUpdate:modelValue": t[3] || (t[3] = (S) => e.showPopupFlag = S),
        width: e.popupWidthdefault,
        "show-close": !0,
        class: "dialog-grid dialog-form",
        "append-to-body": "",
        "close-on-click-modal": e.backdrop,
        "close-on-press-escape": !0,
        "destroy-on-close": !0
      }, {
        default: r(() => [
          re(e.$slots, "popup", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["title", "modelValue", "width", "close-on-click-modal"])
    ])) : b("", !0)
  ], 64);
}
const Kw = /* @__PURE__ */ U(Tc, [["render", Nc], ["__scopeId", "data-v-38a4fa99"]]), jc = O({
  name: "SdGridColumnIndex",
  props: {
    columnLabel: {
      type: String,
      default: "#"
    },
    width: {
      type: String,
      default: "100"
    },
    refSdgrid: {
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
});
function Uc(e, t, a, l, o, i) {
  const s = Xe;
  return n(), h(s, {
    type: "index",
    index: (u) => {
      if (e.refSdgrid) {
        let m = e.refSdgrid.rowStartLabel.replace(",", "");
        return m && (m = u + Number(m)), m.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
      }
    },
    label: e.columnLabel,
    width: e.width,
    align: "center"
  }, null, 8, ["index", "label", "width"]);
}
const Gw = /* @__PURE__ */ U(jc, [["render", Uc]]), Rc = O({
  name: "SdGridColumnDate",
  props: {
    columnProp: {
      type: String,
      default: ""
    },
    columnLabel: {
      type: String,
      default: ""
    },
    sortable: {
      type: Boolean,
      default: !1
    },
    width: {
      type: String,
      default: "110"
    },
    decimal: {
      type: Number,
      default: 2
    },
    locale: {
      type: String,
      default: "en-EN"
    }
  },
  computed: {},
  methods: {
    numberFormat(e) {
      if (bl(e[this.columnProp])) {
        let t = 0;
        return isNaN(e[this.columnProp]) || (t = Number(e[this.columnProp])), t.toLocaleString(this.locale, { minimumFractionDigits: this.decimal, maximumFractionDigits: this.decimal });
      }
      return null;
    }
  }
});
function zc(e, t, a, l, o, i) {
  const s = Xe;
  return n(), h(s, {
    prop: e.columnProp,
    label: e.columnLabel,
    width: e.width,
    sortable: e.sortable
  }, {
    default: r((u) => [
      I(A(e.numberFormat(u.row)), 1)
    ]),
    _: 1
  }, 8, ["prop", "label", "width", "sortable"]);
}
const Yw = /* @__PURE__ */ U(Rc, [["render", zc]]), Hc = [
  {
    value: "addon-api",
    label: "Api"
  },
  {
    value: "addon-bandaid",
    label: "Bandaid"
  },
  {
    value: "addon-block",
    label: "Block"
  },
  {
    value: "addon-box-seam",
    label: "Box Seam"
  },
  {
    value: "addon-boxes",
    label: "Boxes"
  },
  {
    value: "addon-braces-asterisk",
    label: "Braces Asterisk"
  },
  {
    value: "addon-browser",
    label: "Browser"
  },
  {
    value: "addon-bug",
    label: "Bug"
  },
  {
    value: "addon-building",
    label: "Building"
  },
  {
    value: "addon-calculator",
    label: "Calculator"
  },
  {
    value: "addon-capsule-pill",
    label: "Capsule Pill"
  },
  {
    value: "addon-capsule",
    label: "Capsule"
  },
  {
    value: "addon-card-pos",
    label: "Card Pos"
  },
  {
    value: "addon-chart-line",
    label: "Chart Line"
  },
  {
    value: "addon-chart-pie",
    label: "Chart Pie"
  },
  {
    value: "addon-chart",
    label: "Chart"
  },
  {
    value: "addon-cloud-arrow-down",
    label: "Cloud Arrow Down"
  },
  {
    value: "addon-cloud-arrow-up",
    label: "Cloud Arrow Up"
  },
  {
    value: "addon-code",
    label: "Code"
  },
  {
    value: "addon-css-file",
    label: "Css File"
  },
  {
    value: "addon-css3",
    label: "Css3"
  },
  {
    value: "addon-csv-file",
    label: "Csv File"
  },
  {
    value: "addon-database",
    label: "Database"
  },
  {
    value: "addon-db-network",
    label: "Db Network"
  },
  {
    value: "addon-delete-column",
    label: "Delete Column"
  },
  {
    value: "addon-delete-row",
    label: "Delete Row"
  },
  {
    value: "addon-description",
    label: "Description"
  },
  {
    value: "addon-development",
    label: "Development"
  },
  {
    value: "addon-diagram",
    label: "Diagram"
  },
  {
    value: "addon-doc-file",
    label: "Doc File"
  },
  {
    value: "addon-download",
    label: "Download"
  },
  {
    value: "addon-drag-move",
    label: "Drag Move"
  },
  {
    value: "addon-drawing",
    label: "Drawing"
  },
  {
    value: "addon-excel",
    label: "Excel"
  },
  {
    value: "addon-fingerprint",
    label: "Fingerprint"
  },
  {
    value: "addon-flip-horizontal",
    label: "Flip Horizontal"
  },
  {
    value: "addon-flow",
    label: "Flow"
  },
  {
    value: "addon-form",
    label: "Form"
  },
  {
    value: "addon-function",
    label: "Function"
  },
  {
    value: "addon-grip-horizontal",
    label: "Grip Horizontal"
  },
  {
    value: "addon-grip-vertical",
    label: "Grip Vertical"
  },
  {
    value: "addon-heart-pulse-fill",
    label: "Heart Pulse Fill"
  },
  {
    value: "addon-hospital",
    label: "Hospital"
  },
  {
    value: "addon-html-file",
    label: "Html File"
  },
  {
    value: "addon-html5",
    label: "Html5"
  },
  {
    value: "addon-import",
    label: "Import"
  },
  {
    value: "addon-insert-column",
    label: "Insert Column"
  },
  {
    value: "addon-insert-column2",
    label: "Insert Column2"
  },
  {
    value: "addon-insert-row",
    label: "Insert Row"
  },
  {
    value: "addon-insert-row2",
    label: "Insert Row2"
  },
  {
    value: "addon-js-file",
    label: "Js File"
  },
  {
    value: "addon-js",
    label: "Js"
  },
  {
    value: "addon-json-file",
    label: "Json File"
  },
  {
    value: "addon-lego",
    label: "Lego"
  },
  {
    value: "addon-library",
    label: "Library"
  },
  {
    value: "addon-license",
    label: "License"
  },
  {
    value: "addon-list",
    label: "List"
  },
  {
    value: "addon-lungs-fill",
    label: "Lungs Fill"
  },
  {
    value: "addon-merge-cells",
    label: "Merge Cells"
  },
  {
    value: "addon-mongodb",
    label: "Mongodb"
  },
  {
    value: "addon-nav",
    label: "Nav"
  },
  {
    value: "addon-nav2",
    label: "Nav2"
  },
  {
    value: "addon-nodejs",
    label: "Nodejs"
  },
  {
    value: "addon-paintbrush",
    label: "Paintbrush"
  },
  {
    value: "addon-parameter",
    label: "Parameter"
  },
  {
    value: "addon-pdf-bw",
    label: "Pdf Bw"
  },
  {
    value: "addon-pdf-file",
    label: "Pdf File"
  },
  {
    value: "addon-pdf-report",
    label: "Pdf Report"
  },
  {
    value: "addon-pdf",
    label: "Pdf"
  },
  {
    value: "addon-person-box",
    label: "Person Box"
  },
  {
    value: "addon-plugin",
    label: "Plugin"
  },
  {
    value: "addon-png-file",
    label: "Png File"
  },
  {
    value: "addon-postcard-heart",
    label: "Postcard Heart"
  },
  {
    value: "addon-prescription",
    label: "Prescription"
  },
  {
    value: "addon-prescription2",
    label: "Prescription2"
  },
  {
    value: "addon-puzzle-fill",
    label: "Puzzle Fill"
  },
  {
    value: "addon-puzzle",
    label: "Puzzle"
  },
  {
    value: "addon-puzzle2",
    label: "Puzzle2"
  },
  {
    value: "addon-qr-code-scan",
    label: "Qr Code Scan"
  },
  {
    value: "addon-qr-code",
    label: "Qr Code"
  },
  {
    value: "addon-random",
    label: "Random"
  },
  {
    value: "addon-results",
    label: "Results"
  },
  {
    value: "addon-select-parent",
    label: "Select Parent"
  },
  {
    value: "addon-site",
    label: "Site"
  },
  {
    value: "addon-sql-open",
    label: "Sql Open"
  },
  {
    value: "addon-sql",
    label: "Sql"
  },
  {
    value: "addon-summary",
    label: "Summary"
  },
  {
    value: "addon-table",
    label: "Table"
  },
  {
    value: "addon-terminal",
    label: "Terminal"
  },
  {
    value: "addon-thermometer-half",
    label: "Thermometer Half"
  },
  {
    value: "addon-timeline",
    label: "Timeline"
  },
  {
    value: "addon-translate",
    label: "Translate"
  },
  {
    value: "addon-universal",
    label: "Universal"
  },
  {
    value: "addon-upc-scan",
    label: "Upc Scan"
  },
  {
    value: "addon-upload",
    label: "Upload"
  },
  {
    value: "addon-users",
    label: "Users"
  },
  {
    value: "addon-widget",
    label: "Widget"
  },
  {
    value: "addon-window-plus",
    label: "Window Plus"
  },
  {
    value: "addon-word",
    label: "Word"
  },
  {
    value: "addon-xls-file",
    label: "Xls File"
  },
  {
    value: "affix",
    label: "Affix"
  },
  {
    value: "alert-ui",
    label: "Alert Ui"
  },
  {
    value: "autonumber-input",
    label: "Autonumber Input"
  },
  {
    value: "avatar-ui",
    label: "Avatar Ui"
  },
  {
    value: "block-ui",
    label: "Block Ui"
  },
  {
    value: "btn-editor",
    label: "Btn Editor"
  },
  {
    value: "button-ui",
    label: "Button Ui"
  },
  {
    value: "card-pos",
    label: "Card Pos"
  },
  {
    value: "card",
    label: "Card"
  },
  {
    value: "carousel-ui",
    label: "Carousel Ui"
  },
  {
    value: "chart-ui",
    label: "Chart Ui"
  },
  {
    value: "checkbox-input",
    label: "Checkbox Input"
  },
  {
    value: "code-input",
    label: "Code Input"
  },
  {
    value: "collapse",
    label: "Collapse"
  },
  {
    value: "collapse2",
    label: "Collapse2"
  },
  {
    value: "color-input",
    label: "Color Input"
  },
  {
    value: "crop-input",
    label: "Crop Input"
  },
  {
    value: "custom-component",
    label: "Custom Component"
  },
  {
    value: "data-grid-ui",
    label: "Data Grid Ui"
  },
  {
    value: "date-input",
    label: "Date Input"
  },
  {
    value: "date-input2",
    label: "Date Input2"
  },
  {
    value: "date-input3",
    label: "Date Input3"
  },
  {
    value: "date-range-input",
    label: "Date Range Input"
  },
  {
    value: "description",
    label: "Description"
  },
  {
    value: "divider",
    label: "Divider"
  },
  {
    value: "drag",
    label: "Drag"
  },
  {
    value: "drawing-input",
    label: "Drawing Input"
  },
  {
    value: "dropdown-input",
    label: "Dropdown Input"
  },
  {
    value: "dropdown-ui",
    label: "Dropdown Ui"
  },
  {
    value: "dynamic-input",
    label: "Dynamic Input"
  },
  {
    value: "editor-add_column_after",
    label: "Add_column_after"
  },
  {
    value: "editor-add_column_before",
    label: "Add_column_before"
  },
  {
    value: "editor-add_row_after",
    label: "Add_row_after"
  },
  {
    value: "editor-add_row_before",
    label: "Add_row_before"
  },
  {
    value: "editor-align-center",
    label: "Align Center"
  },
  {
    value: "editor-align-justify",
    label: "Align Justify"
  },
  {
    value: "editor-align-left",
    label: "Align Left"
  },
  {
    value: "editor-align-right",
    label: "Align Right"
  },
  {
    value: "editor-arrow-left",
    label: "Arrow Left"
  },
  {
    value: "editor-bold",
    label: "Bold"
  },
  {
    value: "editor-clear-format",
    label: "Clear Format"
  },
  {
    value: "editor-code",
    label: "Code"
  },
  {
    value: "editor-compress",
    label: "Compress"
  },
  {
    value: "editor-delete_column",
    label: "Delete_column"
  },
  {
    value: "editor-delete_row",
    label: "Delete_row"
  },
  {
    value: "editor-edit",
    label: "Edit"
  },
  {
    value: "editor-ellipsis-h",
    label: "Ellipsis H"
  },
  {
    value: "editor-expand",
    label: "Expand"
  },
  {
    value: "editor-external-link",
    label: "External Link"
  },
  {
    value: "editor-file-code",
    label: "File Code"
  },
  {
    value: "editor-font-color",
    label: "Font Color"
  },
  {
    value: "editor-font-family",
    label: "Font Family"
  },
  {
    value: "editor-font-size",
    label: "Font Size"
  },
  {
    value: "editor-heading",
    label: "Heading"
  },
  {
    value: "editor-highlight",
    label: "Highlight"
  },
  {
    value: "editor-horizontal-rule",
    label: "Horizontal Rule"
  },
  {
    value: "editor-iframe",
    label: "Iframe"
  },
  {
    value: "editor-image-align",
    label: "Image Align"
  },
  {
    value: "editor-image",
    label: "Image"
  },
  {
    value: "editor-indent",
    label: "Indent"
  },
  {
    value: "editor-italic",
    label: "Italic"
  },
  {
    value: "editor-link",
    label: "Link"
  },
  {
    value: "editor-list-ol",
    label: "List Ol"
  },
  {
    value: "editor-list-ul",
    label: "List Ul"
  },
  {
    value: "editor-merge-cells",
    label: "Merge Cells"
  },
  {
    value: "editor-outdent",
    label: "Outdent"
  },
  {
    value: "editor-print",
    label: "Print"
  },
  {
    value: "editor-quote-right",
    label: "Quote Right"
  },
  {
    value: "editor-redo",
    label: "Redo"
  },
  {
    value: "editor-select-all",
    label: "Select All"
  },
  {
    value: "editor-split-cells",
    label: "Split Cells"
  },
  {
    value: "editor-strikethrough",
    label: "Strikethrough"
  },
  {
    value: "editor-subscript",
    label: "Subscript"
  },
  {
    value: "editor-superscript",
    label: "Superscript"
  },
  {
    value: "editor-table-header",
    label: "Table Header"
  },
  {
    value: "editor-table",
    label: "Table"
  },
  {
    value: "editor-tasks",
    label: "Tasks"
  },
  {
    value: "editor-text-height",
    label: "Text Height"
  },
  {
    value: "editor-trash-alt",
    label: "Trash Alt"
  },
  {
    value: "editor-underline",
    label: "Underline"
  },
  {
    value: "editor-undo",
    label: "Undo"
  },
  {
    value: "editor-unlink",
    label: "Unlink"
  },
  {
    value: "editor-upload-file",
    label: "Upload File"
  },
  {
    value: "editor-video",
    label: "Video"
  },
  {
    value: "el-add-location",
    label: "Add Location"
  },
  {
    value: "el-aim",
    label: "Aim"
  },
  {
    value: "el-alarm-clock",
    label: "Alarm Clock"
  },
  {
    value: "el-apple",
    label: "Apple"
  },
  {
    value: "el-arrow-down-bold",
    label: "Arrow Down Bold"
  },
  {
    value: "el-arrow-down",
    label: "Arrow Down"
  },
  {
    value: "el-arrow-left-bold",
    label: "Arrow Left Bold"
  },
  {
    value: "el-arrow-left",
    label: "Arrow Left"
  },
  {
    value: "el-arrow-right-bold",
    label: "Arrow Right Bold"
  },
  {
    value: "el-arrow-right",
    label: "Arrow Right"
  },
  {
    value: "el-arrow-up-bold",
    label: "Arrow Up Bold"
  },
  {
    value: "el-arrow-up",
    label: "Arrow Up"
  },
  {
    value: "el-avatar",
    label: "Avatar"
  },
  {
    value: "el-back",
    label: "Back"
  },
  {
    value: "el-baseball",
    label: "Baseball"
  },
  {
    value: "el-basketball",
    label: "Basketball"
  },
  {
    value: "el-bell-filled",
    label: "Bell Filled"
  },
  {
    value: "el-bell",
    label: "Bell"
  },
  {
    value: "el-bicycle",
    label: "Bicycle"
  },
  {
    value: "el-bottom-left",
    label: "Bottom Left"
  },
  {
    value: "el-bottom-right",
    label: "Bottom Right"
  },
  {
    value: "el-bottom",
    label: "Bottom"
  },
  {
    value: "el-bowl",
    label: "Bowl"
  },
  {
    value: "el-box",
    label: "Box"
  },
  {
    value: "el-briefcase",
    label: "Briefcase"
  },
  {
    value: "el-brush-filled",
    label: "Brush Filled"
  },
  {
    value: "el-brush",
    label: "Brush"
  },
  {
    value: "el-burger",
    label: "Burger"
  },
  {
    value: "el-calendar",
    label: "Calendar"
  },
  {
    value: "el-camera-filled",
    label: "Camera Filled"
  },
  {
    value: "el-camera",
    label: "Camera"
  },
  {
    value: "el-caret-bottom",
    label: "Caret Bottom"
  },
  {
    value: "el-caret-left",
    label: "Caret Left"
  },
  {
    value: "el-caret-right",
    label: "Caret Right"
  },
  {
    value: "el-caret-top",
    label: "Caret Top"
  },
  {
    value: "el-cellphone",
    label: "Cellphone"
  },
  {
    value: "el-chat-dot-round",
    label: "Chat Dot Round"
  },
  {
    value: "el-chat-dot-square",
    label: "Chat Dot Square"
  },
  {
    value: "el-chat-line-round",
    label: "Chat Line Round"
  },
  {
    value: "el-chat-line-square",
    label: "Chat Line Square"
  },
  {
    value: "el-chat-round",
    label: "Chat Round"
  },
  {
    value: "el-chat-square",
    label: "Chat Square"
  },
  {
    value: "el-check",
    label: "Check"
  },
  {
    value: "el-checked",
    label: "Checked"
  },
  {
    value: "el-cherry",
    label: "Cherry"
  },
  {
    value: "el-chicken",
    label: "Chicken"
  },
  {
    value: "el-chrome-filled",
    label: "Chrome Filled"
  },
  {
    value: "el-circle-check-filled",
    label: "Circle Check Filled"
  },
  {
    value: "el-circle-check",
    label: "Circle Check"
  },
  {
    value: "el-circle-close-filled",
    label: "Circle Close Filled"
  },
  {
    value: "el-circle-close",
    label: "Circle Close"
  },
  {
    value: "el-circle-plus-filled",
    label: "Circle Plus Filled"
  },
  {
    value: "el-circle-plus",
    label: "Circle Plus"
  },
  {
    value: "el-clock",
    label: "Clock"
  },
  {
    value: "el-close-bold",
    label: "Close Bold"
  },
  {
    value: "el-close",
    label: "Close"
  },
  {
    value: "el-cloudy",
    label: "Cloudy"
  },
  {
    value: "el-coffee-cup",
    label: "Coffee Cup"
  },
  {
    value: "el-coffee",
    label: "Coffee"
  },
  {
    value: "el-coin",
    label: "Coin"
  },
  {
    value: "el-cold-drink",
    label: "Cold Drink"
  },
  {
    value: "el-collection-tag",
    label: "Collection Tag"
  },
  {
    value: "el-collection",
    label: "Collection"
  },
  {
    value: "el-comment",
    label: "Comment"
  },
  {
    value: "el-compass",
    label: "Compass"
  },
  {
    value: "el-connection",
    label: "Connection"
  },
  {
    value: "el-coordinate",
    label: "Coordinate"
  },
  {
    value: "el-copy-document",
    label: "Copy Document"
  },
  {
    value: "el-cpu",
    label: "Cpu"
  },
  {
    value: "el-credit-card",
    label: "Credit Card"
  },
  {
    value: "el-crop",
    label: "Crop"
  },
  {
    value: "el-d-arrow-left",
    label: "D Arrow Left"
  },
  {
    value: "el-d-arrow-right",
    label: "D Arrow Right"
  },
  {
    value: "el-d-caret",
    label: "D Caret"
  },
  {
    value: "el-data-analysis",
    label: "Data Analysis"
  },
  {
    value: "el-data-board",
    label: "Data Board"
  },
  {
    value: "el-data-line",
    label: "Data Line"
  },
  {
    value: "el-delete-filled",
    label: "Delete Filled"
  },
  {
    value: "el-delete-location",
    label: "Delete Location"
  },
  {
    value: "el-delete",
    label: "Delete"
  },
  {
    value: "el-dessert",
    label: "Dessert"
  },
  {
    value: "el-discount",
    label: "Discount"
  },
  {
    value: "el-dish-dot",
    label: "Dish Dot"
  },
  {
    value: "el-dish",
    label: "Dish"
  },
  {
    value: "el-document-add",
    label: "Document Add"
  },
  {
    value: "el-document-checked",
    label: "Document Checked"
  },
  {
    value: "el-document-copy",
    label: "Document Copy"
  },
  {
    value: "el-document-delete",
    label: "Document Delete"
  },
  {
    value: "el-document-remove",
    label: "Document Remove"
  },
  {
    value: "el-document",
    label: "Document"
  },
  {
    value: "el-download",
    label: "Download"
  },
  {
    value: "el-drizzling",
    label: "Drizzling"
  },
  {
    value: "el-edit-pen",
    label: "Edit Pen"
  },
  {
    value: "el-edit",
    label: "Edit"
  },
  {
    value: "el-eleme-filled",
    label: "Eleme Filled"
  },
  {
    value: "el-eleme",
    label: "Eleme"
  },
  {
    value: "el-element-plus",
    label: "Element Plus"
  },
  {
    value: "el-expand",
    label: "Expand"
  },
  {
    value: "el-failed",
    label: "Failed"
  },
  {
    value: "el-female",
    label: "Female"
  },
  {
    value: "el-files",
    label: "Files"
  },
  {
    value: "el-film",
    label: "Film"
  },
  {
    value: "el-filter",
    label: "Filter"
  },
  {
    value: "el-finished",
    label: "Finished"
  },
  {
    value: "el-first-aid-kit",
    label: "First Aid Kit"
  },
  {
    value: "el-flag",
    label: "Flag"
  },
  {
    value: "el-fold",
    label: "Fold"
  },
  {
    value: "el-folder-add",
    label: "Folder Add"
  },
  {
    value: "el-folder-checked",
    label: "Folder Checked"
  },
  {
    value: "el-folder-delete",
    label: "Folder Delete"
  },
  {
    value: "el-folder-opened",
    label: "Folder Opened"
  },
  {
    value: "el-folder-remove",
    label: "Folder Remove"
  },
  {
    value: "el-folder",
    label: "Folder"
  },
  {
    value: "el-food",
    label: "Food"
  },
  {
    value: "el-football",
    label: "Football"
  },
  {
    value: "el-fork-spoon",
    label: "Fork Spoon"
  },
  {
    value: "el-fries",
    label: "Fries"
  },
  {
    value: "el-full-screen",
    label: "Full Screen"
  },
  {
    value: "el-goblet-full",
    label: "Goblet Full"
  },
  {
    value: "el-goblet-square-full",
    label: "Goblet Square Full"
  },
  {
    value: "el-goblet-square",
    label: "Goblet Square"
  },
  {
    value: "el-goblet",
    label: "Goblet"
  },
  {
    value: "el-gold-medal",
    label: "Gold Medal"
  },
  {
    value: "el-goods-filled",
    label: "Goods Filled"
  },
  {
    value: "el-goods",
    label: "Goods"
  },
  {
    value: "el-grape",
    label: "Grape"
  },
  {
    value: "el-grid",
    label: "Grid"
  },
  {
    value: "el-guide",
    label: "Guide"
  },
  {
    value: "el-handbag",
    label: "Handbag"
  },
  {
    value: "el-headset",
    label: "Headset"
  },
  {
    value: "el-help-filled",
    label: "Help Filled"
  },
  {
    value: "el-help",
    label: "Help"
  },
  {
    value: "el-hide",
    label: "Hide"
  },
  {
    value: "el-histogram",
    label: "Histogram"
  },
  {
    value: "el-home-filled",
    label: "Home Filled"
  },
  {
    value: "el-hot-water",
    label: "Hot Water"
  },
  {
    value: "el-house",
    label: "House"
  },
  {
    value: "el-ice-cream-round",
    label: "Ice Cream Round"
  },
  {
    value: "el-ice-cream-square",
    label: "Ice Cream Square"
  },
  {
    value: "el-ice-cream",
    label: "Ice Cream"
  },
  {
    value: "el-ice-drink",
    label: "Ice Drink"
  },
  {
    value: "el-ice-tea",
    label: "Ice Tea"
  },
  {
    value: "el-info-filled",
    label: "Info Filled"
  },
  {
    value: "el-iphone",
    label: "Iphone"
  },
  {
    value: "el-key",
    label: "Key"
  },
  {
    value: "el-knife-fork",
    label: "Knife Fork"
  },
  {
    value: "el-lightning",
    label: "Lightning"
  },
  {
    value: "el-link",
    label: "Link"
  },
  {
    value: "el-list",
    label: "List"
  },
  {
    value: "el-loading",
    label: "Loading"
  },
  {
    value: "el-location-filled",
    label: "Location Filled"
  },
  {
    value: "el-location-information",
    label: "Location Information"
  },
  {
    value: "el-location",
    label: "Location"
  },
  {
    value: "el-lock",
    label: "Lock"
  },
  {
    value: "el-lollipop",
    label: "Lollipop"
  },
  {
    value: "el-magic-stick",
    label: "Magic Stick"
  },
  {
    value: "el-magnet",
    label: "Magnet"
  },
  {
    value: "el-male",
    label: "Male"
  },
  {
    value: "el-management",
    label: "Management"
  },
  {
    value: "el-map-location",
    label: "Map Location"
  },
  {
    value: "el-medal",
    label: "Medal"
  },
  {
    value: "el-memo",
    label: "Memo"
  },
  {
    value: "el-menu",
    label: "Menu"
  },
  {
    value: "el-message-box",
    label: "Message Box"
  },
  {
    value: "el-message",
    label: "Message"
  },
  {
    value: "el-mic",
    label: "Mic"
  },
  {
    value: "el-microphone",
    label: "Microphone"
  },
  {
    value: "el-milk-tea",
    label: "Milk Tea"
  },
  {
    value: "el-minus",
    label: "Minus"
  },
  {
    value: "el-money",
    label: "Money"
  },
  {
    value: "el-monitor",
    label: "Monitor"
  },
  {
    value: "el-moon-night",
    label: "Moon Night"
  },
  {
    value: "el-moon",
    label: "Moon"
  },
  {
    value: "el-more-filled",
    label: "More Filled"
  },
  {
    value: "el-more",
    label: "More"
  },
  {
    value: "el-mostly-cloudy",
    label: "Mostly Cloudy"
  },
  {
    value: "el-mouse",
    label: "Mouse"
  },
  {
    value: "el-mug",
    label: "Mug"
  },
  {
    value: "el-mute-notification",
    label: "Mute Notification"
  },
  {
    value: "el-mute",
    label: "Mute"
  },
  {
    value: "el-no-smoking",
    label: "No Smoking"
  },
  {
    value: "el-notebook",
    label: "Notebook"
  },
  {
    value: "el-notification",
    label: "Notification"
  },
  {
    value: "el-odometer",
    label: "Odometer"
  },
  {
    value: "el-office-building",
    label: "Office Building"
  },
  {
    value: "el-open",
    label: "Open"
  },
  {
    value: "el-operation",
    label: "Operation"
  },
  {
    value: "el-opportunity",
    label: "Opportunity"
  },
  {
    value: "el-orange",
    label: "Orange"
  },
  {
    value: "el-paperclip",
    label: "Paperclip"
  },
  {
    value: "el-partly-cloudy",
    label: "Partly Cloudy"
  },
  {
    value: "el-pear",
    label: "Pear"
  },
  {
    value: "el-phone-filled",
    label: "Phone Filled"
  },
  {
    value: "el-phone",
    label: "Phone"
  },
  {
    value: "el-picture-filled",
    label: "Picture Filled"
  },
  {
    value: "el-picture-rounded",
    label: "Picture Rounded"
  },
  {
    value: "el-picture",
    label: "Picture"
  },
  {
    value: "el-pie-chart",
    label: "Pie Chart"
  },
  {
    value: "el-place",
    label: "Place"
  },
  {
    value: "el-platform",
    label: "Platform"
  },
  {
    value: "el-plus",
    label: "Plus"
  },
  {
    value: "el-pointer",
    label: "Pointer"
  },
  {
    value: "el-position",
    label: "Position"
  },
  {
    value: "el-postcard",
    label: "Postcard"
  },
  {
    value: "el-pouring",
    label: "Pouring"
  },
  {
    value: "el-present",
    label: "Present"
  },
  {
    value: "el-price-tag",
    label: "Price Tag"
  },
  {
    value: "el-printer",
    label: "Printer"
  },
  {
    value: "el-promotion",
    label: "Promotion"
  },
  {
    value: "el-quartz-watch",
    label: "Quartz Watch"
  },
  {
    value: "el-question-filled",
    label: "Question Filled"
  },
  {
    value: "el-rank",
    label: "Rank"
  },
  {
    value: "el-reading-lamp",
    label: "Reading Lamp"
  },
  {
    value: "el-reading",
    label: "Reading"
  },
  {
    value: "el-refresh-left",
    label: "Refresh Left"
  },
  {
    value: "el-refresh-right",
    label: "Refresh Right"
  },
  {
    value: "el-refresh",
    label: "Refresh"
  },
  {
    value: "el-refrigerator",
    label: "Refrigerator"
  },
  {
    value: "el-remove-filled",
    label: "Remove Filled"
  },
  {
    value: "el-remove",
    label: "Remove"
  },
  {
    value: "el-right",
    label: "Right"
  },
  {
    value: "el-scale-to-original",
    label: "Scale To Original"
  },
  {
    value: "el-school",
    label: "School"
  },
  {
    value: "el-scissor",
    label: "Scissor"
  },
  {
    value: "el-search",
    label: "Search"
  },
  {
    value: "el-select",
    label: "Select"
  },
  {
    value: "el-sell",
    label: "Sell"
  },
  {
    value: "el-semi-select",
    label: "Semi Select"
  },
  {
    value: "el-service",
    label: "Service"
  },
  {
    value: "el-set-up",
    label: "Set Up"
  },
  {
    value: "el-setting",
    label: "Setting"
  },
  {
    value: "el-share",
    label: "Share"
  },
  {
    value: "el-ship",
    label: "Ship"
  },
  {
    value: "el-shop",
    label: "Shop"
  },
  {
    value: "el-shopping-bag",
    label: "Shopping Bag"
  },
  {
    value: "el-shopping-cart-full",
    label: "Shopping Cart Full"
  },
  {
    value: "el-shopping-cart",
    label: "Shopping Cart"
  },
  {
    value: "el-shopping-trolley",
    label: "Shopping Trolley"
  },
  {
    value: "el-smoking",
    label: "Smoking"
  },
  {
    value: "el-soccer",
    label: "Soccer"
  },
  {
    value: "el-sold-out",
    label: "Sold Out"
  },
  {
    value: "el-sort-down",
    label: "Sort Down"
  },
  {
    value: "el-sort-up",
    label: "Sort Up"
  },
  {
    value: "el-sort",
    label: "Sort"
  },
  {
    value: "el-stamp",
    label: "Stamp"
  },
  {
    value: "el-star-filled",
    label: "Star Filled"
  },
  {
    value: "el-star",
    label: "Star"
  },
  {
    value: "el-stopwatch",
    label: "Stopwatch"
  },
  {
    value: "el-success-filled",
    label: "Success Filled"
  },
  {
    value: "el-sugar",
    label: "Sugar"
  },
  {
    value: "el-suitcase-line",
    label: "Suitcase Line"
  },
  {
    value: "el-suitcase",
    label: "Suitcase"
  },
  {
    value: "el-sunny",
    label: "Sunny"
  },
  {
    value: "el-sunrise",
    label: "Sunrise"
  },
  {
    value: "el-sunset",
    label: "Sunset"
  },
  {
    value: "el-switch-button",
    label: "Switch Button"
  },
  {
    value: "el-switch-filled",
    label: "Switch Filled"
  },
  {
    value: "el-switch",
    label: "Switch"
  },
  {
    value: "el-takeaway-box",
    label: "Takeaway Box"
  },
  {
    value: "el-ticket",
    label: "Ticket"
  },
  {
    value: "el-tickets",
    label: "Tickets"
  },
  {
    value: "el-timer",
    label: "Timer"
  },
  {
    value: "el-toilet-paper",
    label: "Toilet Paper"
  },
  {
    value: "el-tools",
    label: "Tools"
  },
  {
    value: "el-top-left",
    label: "Top Left"
  },
  {
    value: "el-top-right",
    label: "Top Right"
  },
  {
    value: "el-top",
    label: "Top"
  },
  {
    value: "el-trend-charts",
    label: "Trend Charts"
  },
  {
    value: "el-trophy-base",
    label: "Trophy Base"
  },
  {
    value: "el-trophy",
    label: "Trophy"
  },
  {
    value: "el-turn-off",
    label: "Turn Off"
  },
  {
    value: "el-umbrella",
    label: "Umbrella"
  },
  {
    value: "el-unlock",
    label: "Unlock"
  },
  {
    value: "el-upload-filled",
    label: "Upload Filled"
  },
  {
    value: "el-upload",
    label: "Upload"
  },
  {
    value: "el-user-filled",
    label: "User Filled"
  },
  {
    value: "el-user",
    label: "User"
  },
  {
    value: "el-van",
    label: "Van"
  },
  {
    value: "el-video-camera-filled",
    label: "Video Camera Filled"
  },
  {
    value: "el-video-camera",
    label: "Video Camera"
  },
  {
    value: "el-video-pause",
    label: "Video Pause"
  },
  {
    value: "el-video-play",
    label: "Video Play"
  },
  {
    value: "el-view",
    label: "View"
  },
  {
    value: "el-wallet-filled",
    label: "Wallet Filled"
  },
  {
    value: "el-wallet",
    label: "Wallet"
  },
  {
    value: "el-warn-triangle-filled",
    label: "Warn Triangle Filled"
  },
  {
    value: "el-warning-filled",
    label: "Warning Filled"
  },
  {
    value: "el-warning",
    label: "Warning"
  },
  {
    value: "el-watch",
    label: "Watch"
  },
  {
    value: "el-watermelon",
    label: "Watermelon"
  },
  {
    value: "el-wind-power",
    label: "Wind Power"
  },
  {
    value: "el-zoom-in",
    label: "Zoom In"
  },
  {
    value: "el-zoom-out",
    label: "Zoom Out"
  },
  {
    value: "file-upload-input",
    label: "File Upload Input"
  },
  {
    value: "grid",
    label: "Grid"
  },
  {
    value: "group-list-input",
    label: "Group List Input"
  },
  {
    value: "html-input",
    label: "Html Input"
  },
  {
    value: "html-ui",
    label: "Html Ui"
  },
  {
    value: "icon-input",
    label: "Icon Input"
  },
  {
    value: "icon-box",
    label: "Box"
  },
  {
    value: "icon-css3",
    label: "Css3"
  },
  {
    value: "icon-html5",
    label: "Html5"
  },
  {
    value: "icon-js",
    label: "Js"
  },
  {
    value: "icon-line",
    label: "Line"
  },
  {
    value: "icon-mongo",
    label: "Mongo"
  },
  {
    value: "icon-pdf",
    label: "Pdf"
  },
  {
    value: "icon-picture",
    label: "Picture"
  },
  {
    value: "icon-puzzle",
    label: "Puzzle"
  },
  {
    value: "icon-puzzle2",
    label: "Puzzle2"
  },
  {
    value: "icon-sdform",
    label: "Sdform"
  },
  {
    value: "icon-sql-database",
    label: "Sql Database"
  },
  {
    value: "icon-ts",
    label: "Ts"
  },
  {
    value: "image-ui",
    label: "Image Ui"
  },
  {
    value: "image-upload-input",
    label: "Image Upload Input"
  },
  {
    value: "json-input",
    label: "Json Input"
  },
  {
    value: "link-ui",
    label: "Link Ui"
  },
  {
    value: "list-ui",
    label: "List Ui"
  },
  {
    value: "logo",
    label: "Logo"
  },
  {
    value: "logo2",
    label: "Logo2"
  },
  {
    value: "logo3",
    label: "Logo3"
  },
  {
    value: "map-input",
    label: "Map Input"
  },
  {
    value: "masked-input",
    label: "Masked Input"
  },
  {
    value: "multiple-date",
    label: "Multiple Date"
  },
  {
    value: "node-tree",
    label: "Node Tree"
  },
  {
    value: "number-input",
    label: "Number Input"
  },
  {
    value: "object-group",
    label: "Object Group"
  },
  {
    value: "objectid-input",
    label: "Objectid Input"
  },
  {
    value: "popver-ui",
    label: "Popver Ui"
  },
  {
    value: "progress-ui",
    label: "Progress Ui"
  },
  {
    value: "qr-code-scan",
    label: "Qr Code Scan"
  },
  {
    value: "radio-input",
    label: "Radio Input"
  },
  {
    value: "radio-text-input",
    label: "Radio Text Input"
  },
  {
    value: "rate-input",
    label: "Rate Input"
  },
  {
    value: "redo",
    label: "Redo"
  },
  {
    value: "report-ui",
    label: "Report Ui"
  },
  {
    value: "rich-editor-field",
    label: "Rich Editor Field"
  },
  {
    value: "scrollbar",
    label: "Scrollbar"
  },
  {
    value: "segmented-ui",
    label: "Segmented Ui"
  },
  {
    value: "select-data-input",
    label: "Select Data Input"
  },
  {
    value: "select-form-input",
    label: "Select Form Input"
  },
  {
    value: "select-input",
    label: "Select Input"
  },
  {
    value: "select-path-input",
    label: "Select Path Input"
  },
  {
    value: "select-script-input",
    label: "Select Script Input"
  },
  {
    value: "side-menu-ui",
    label: "Side Menu Ui"
  },
  {
    value: "slider-input",
    label: "Slider Input"
  },
  {
    value: "slot-field",
    label: "Slot Field"
  },
  {
    value: "space",
    label: "Space"
  },
  {
    value: "static-text",
    label: "Static Text"
  },
  {
    value: "statistic-ui",
    label: "Statistic Ui"
  },
  {
    value: "step-ui",
    label: "Step Ui"
  },
  {
    value: "sub-form",
    label: "Sub Form"
  },
  {
    value: "svg-ui",
    label: "Svg Ui"
  },
  {
    value: "switch-input",
    label: "Switch Input"
  },
  {
    value: "tab",
    label: "Tab"
  },
  {
    value: "table",
    label: "Table"
  },
  {
    value: "tags-input",
    label: "Tags Input"
  },
  {
    value: "text-input",
    label: "Text Input"
  },
  {
    value: "text-ui",
    label: "Text Ui"
  },
  {
    value: "textarea-input",
    label: "Textarea Input"
  },
  {
    value: "time-input",
    label: "Time Input"
  },
  {
    value: "time-range-input",
    label: "Time Range Input"
  },
  {
    value: "time-select",
    label: "Time Select"
  },
  {
    value: "timeline-ui",
    label: "Timeline Ui"
  },
  {
    value: "tour-ui",
    label: "Tour Ui"
  },
  {
    value: "undo",
    label: "Undo"
  }
], qc = [
  {
    value: "add-location",
    label: "Add Location"
  },
  {
    value: "aim",
    label: "Aim"
  },
  {
    value: "alarm-clock",
    label: "Alarm Clock"
  },
  {
    value: "apple",
    label: "Apple"
  },
  {
    value: "arrow-down-bold",
    label: "Arrow Down Bold"
  },
  {
    value: "arrow-down",
    label: "Arrow Down"
  },
  {
    value: "arrow-left-bold",
    label: "Arrow Left Bold"
  },
  {
    value: "arrow-left",
    label: "Arrow Left"
  },
  {
    value: "arrow-right-bold",
    label: "Arrow Right Bold"
  },
  {
    value: "arrow-right",
    label: "Arrow Right"
  },
  {
    value: "arrow-up-bold",
    label: "Arrow Up Bold"
  },
  {
    value: "arrow-up",
    label: "Arrow Up"
  },
  {
    value: "avatar",
    label: "Avatar"
  },
  {
    value: "back",
    label: "Back"
  },
  {
    value: "baseball",
    label: "Baseball"
  },
  {
    value: "basketball",
    label: "Basketball"
  },
  {
    value: "bell-filled",
    label: "Bell Filled"
  },
  {
    value: "bell",
    label: "Bell"
  },
  {
    value: "bicycle",
    label: "Bicycle"
  },
  {
    value: "bottom-left",
    label: "Bottom Left"
  },
  {
    value: "bottom-right",
    label: "Bottom Right"
  },
  {
    value: "bottom",
    label: "Bottom"
  },
  {
    value: "bowl",
    label: "Bowl"
  },
  {
    value: "box",
    label: "Box"
  },
  {
    value: "briefcase",
    label: "Briefcase"
  },
  {
    value: "brush-filled",
    label: "Brush Filled"
  },
  {
    value: "brush",
    label: "Brush"
  },
  {
    value: "burger",
    label: "Burger"
  },
  {
    value: "calendar",
    label: "Calendar"
  },
  {
    value: "camera-filled",
    label: "Camera Filled"
  },
  {
    value: "camera",
    label: "Camera"
  },
  {
    value: "caret-bottom",
    label: "Caret Bottom"
  },
  {
    value: "caret-left",
    label: "Caret Left"
  },
  {
    value: "caret-right",
    label: "Caret Right"
  },
  {
    value: "caret-top",
    label: "Caret Top"
  },
  {
    value: "cellphone",
    label: "Cellphone"
  },
  {
    value: "chat-dot-round",
    label: "Chat Dot Round"
  },
  {
    value: "chat-dot-square",
    label: "Chat Dot Square"
  },
  {
    value: "chat-line-round",
    label: "Chat Line Round"
  },
  {
    value: "chat-line-square",
    label: "Chat Line Square"
  },
  {
    value: "chat-round",
    label: "Chat Round"
  },
  {
    value: "chat-square",
    label: "Chat Square"
  },
  {
    value: "check",
    label: "Check"
  },
  {
    value: "checked",
    label: "Checked"
  },
  {
    value: "cherry",
    label: "Cherry"
  },
  {
    value: "chicken",
    label: "Chicken"
  },
  {
    value: "chrome-filled",
    label: "Chrome Filled"
  },
  {
    value: "circle-check-filled",
    label: "Circle Check Filled"
  },
  {
    value: "circle-check",
    label: "Circle Check"
  },
  {
    value: "circle-close-filled",
    label: "Circle Close Filled"
  },
  {
    value: "circle-close",
    label: "Circle Close"
  },
  {
    value: "circle-plus-filled",
    label: "Circle Plus Filled"
  },
  {
    value: "circle-plus",
    label: "Circle Plus"
  },
  {
    value: "clock",
    label: "Clock"
  },
  {
    value: "close-bold",
    label: "Close Bold"
  },
  {
    value: "close",
    label: "Close"
  },
  {
    value: "cloudy",
    label: "Cloudy"
  },
  {
    value: "coffee-cup",
    label: "Coffee Cup"
  },
  {
    value: "coffee",
    label: "Coffee"
  },
  {
    value: "coin",
    label: "Coin"
  },
  {
    value: "cold-drink",
    label: "Cold Drink"
  },
  {
    value: "collection-tag",
    label: "Collection Tag"
  },
  {
    value: "collection",
    label: "Collection"
  },
  {
    value: "comment",
    label: "Comment"
  },
  {
    value: "compass",
    label: "Compass"
  },
  {
    value: "connection",
    label: "Connection"
  },
  {
    value: "coordinate",
    label: "Coordinate"
  },
  {
    value: "copy-document",
    label: "Copy Document"
  },
  {
    value: "cpu",
    label: "Cpu"
  },
  {
    value: "credit-card",
    label: "Credit Card"
  },
  {
    value: "crop",
    label: "Crop"
  },
  {
    value: "d-arrow-left",
    label: "D Arrow Left"
  },
  {
    value: "d-arrow-right",
    label: "D Arrow Right"
  },
  {
    value: "d-caret",
    label: "D Caret"
  },
  {
    value: "data-analysis",
    label: "Data Analysis"
  },
  {
    value: "data-board",
    label: "Data Board"
  },
  {
    value: "data-line",
    label: "Data Line"
  },
  {
    value: "delete-filled",
    label: "Delete Filled"
  },
  {
    value: "delete-location",
    label: "Delete Location"
  },
  {
    value: "delete",
    label: "Delete"
  },
  {
    value: "dessert",
    label: "Dessert"
  },
  {
    value: "discount",
    label: "Discount"
  },
  {
    value: "dish-dot",
    label: "Dish Dot"
  },
  {
    value: "dish",
    label: "Dish"
  },
  {
    value: "document-add",
    label: "Document Add"
  },
  {
    value: "document-checked",
    label: "Document Checked"
  },
  {
    value: "document-copy",
    label: "Document Copy"
  },
  {
    value: "document-delete",
    label: "Document Delete"
  },
  {
    value: "document-remove",
    label: "Document Remove"
  },
  {
    value: "document",
    label: "Document"
  },
  {
    value: "download",
    label: "Download"
  },
  {
    value: "drizzling",
    label: "Drizzling"
  },
  {
    value: "edit-pen",
    label: "Edit Pen"
  },
  {
    value: "edit",
    label: "Edit"
  },
  {
    value: "eleme-filled",
    label: "Eleme Filled"
  },
  {
    value: "eleme",
    label: "Eleme"
  },
  {
    value: "element-plus",
    label: "Element Plus"
  },
  {
    value: "expand",
    label: "Expand"
  },
  {
    value: "failed",
    label: "Failed"
  },
  {
    value: "female",
    label: "Female"
  },
  {
    value: "files",
    label: "Files"
  },
  {
    value: "film",
    label: "Film"
  },
  {
    value: "filter",
    label: "Filter"
  },
  {
    value: "finished",
    label: "Finished"
  },
  {
    value: "first-aid-kit",
    label: "First Aid Kit"
  },
  {
    value: "flag",
    label: "Flag"
  },
  {
    value: "fold",
    label: "Fold"
  },
  {
    value: "folder-add",
    label: "Folder Add"
  },
  {
    value: "folder-checked",
    label: "Folder Checked"
  },
  {
    value: "folder-delete",
    label: "Folder Delete"
  },
  {
    value: "folder-opened",
    label: "Folder Opened"
  },
  {
    value: "folder-remove",
    label: "Folder Remove"
  },
  {
    value: "folder",
    label: "Folder"
  },
  {
    value: "food",
    label: "Food"
  },
  {
    value: "football",
    label: "Football"
  },
  {
    value: "fork-spoon",
    label: "Fork Spoon"
  },
  {
    value: "fries",
    label: "Fries"
  },
  {
    value: "full-screen",
    label: "Full Screen"
  },
  {
    value: "goblet-full",
    label: "Goblet Full"
  },
  {
    value: "goblet-square-full",
    label: "Goblet Square Full"
  },
  {
    value: "goblet-square",
    label: "Goblet Square"
  },
  {
    value: "goblet",
    label: "Goblet"
  },
  {
    value: "gold-medal",
    label: "Gold Medal"
  },
  {
    value: "goods-filled",
    label: "Goods Filled"
  },
  {
    value: "goods",
    label: "Goods"
  },
  {
    value: "grape",
    label: "Grape"
  },
  {
    value: "grid",
    label: "Grid"
  },
  {
    value: "guide",
    label: "Guide"
  },
  {
    value: "handbag",
    label: "Handbag"
  },
  {
    value: "headset",
    label: "Headset"
  },
  {
    value: "help-filled",
    label: "Help Filled"
  },
  {
    value: "help",
    label: "Help"
  },
  {
    value: "hide",
    label: "Hide"
  },
  {
    value: "histogram",
    label: "Histogram"
  },
  {
    value: "home-filled",
    label: "Home Filled"
  },
  {
    value: "hot-water",
    label: "Hot Water"
  },
  {
    value: "house",
    label: "House"
  },
  {
    value: "ice-cream-round",
    label: "Ice Cream Round"
  },
  {
    value: "ice-cream-square",
    label: "Ice Cream Square"
  },
  {
    value: "ice-cream",
    label: "Ice Cream"
  },
  {
    value: "ice-drink",
    label: "Ice Drink"
  },
  {
    value: "ice-tea",
    label: "Ice Tea"
  },
  {
    value: "info-filled",
    label: "Info Filled"
  },
  {
    value: "iphone",
    label: "Iphone"
  },
  {
    value: "key",
    label: "Key"
  },
  {
    value: "knife-fork",
    label: "Knife Fork"
  },
  {
    value: "lightning",
    label: "Lightning"
  },
  {
    value: "link",
    label: "Link"
  },
  {
    value: "list",
    label: "List"
  },
  {
    value: "loading",
    label: "Loading"
  },
  {
    value: "location-filled",
    label: "Location Filled"
  },
  {
    value: "location-information",
    label: "Location Information"
  },
  {
    value: "location",
    label: "Location"
  },
  {
    value: "lock",
    label: "Lock"
  },
  {
    value: "lollipop",
    label: "Lollipop"
  },
  {
    value: "magic-stick",
    label: "Magic Stick"
  },
  {
    value: "magnet",
    label: "Magnet"
  },
  {
    value: "male",
    label: "Male"
  },
  {
    value: "management",
    label: "Management"
  },
  {
    value: "map-location",
    label: "Map Location"
  },
  {
    value: "medal",
    label: "Medal"
  },
  {
    value: "memo",
    label: "Memo"
  },
  {
    value: "menu",
    label: "Menu"
  },
  {
    value: "message-box",
    label: "Message Box"
  },
  {
    value: "message",
    label: "Message"
  },
  {
    value: "mic",
    label: "Mic"
  },
  {
    value: "microphone",
    label: "Microphone"
  },
  {
    value: "milk-tea",
    label: "Milk Tea"
  },
  {
    value: "minus",
    label: "Minus"
  },
  {
    value: "money",
    label: "Money"
  },
  {
    value: "monitor",
    label: "Monitor"
  },
  {
    value: "moon-night",
    label: "Moon Night"
  },
  {
    value: "moon",
    label: "Moon"
  },
  {
    value: "more-filled",
    label: "More Filled"
  },
  {
    value: "more",
    label: "More"
  },
  {
    value: "mostly-cloudy",
    label: "Mostly Cloudy"
  },
  {
    value: "mouse",
    label: "Mouse"
  },
  {
    value: "mug",
    label: "Mug"
  },
  {
    value: "mute-notification",
    label: "Mute Notification"
  },
  {
    value: "mute",
    label: "Mute"
  },
  {
    value: "no-smoking",
    label: "No Smoking"
  },
  {
    value: "notebook",
    label: "Notebook"
  },
  {
    value: "notification",
    label: "Notification"
  },
  {
    value: "odometer",
    label: "Odometer"
  },
  {
    value: "office-building",
    label: "Office Building"
  },
  {
    value: "open",
    label: "Open"
  },
  {
    value: "operation",
    label: "Operation"
  },
  {
    value: "opportunity",
    label: "Opportunity"
  },
  {
    value: "orange",
    label: "Orange"
  },
  {
    value: "paperclip",
    label: "Paperclip"
  },
  {
    value: "partly-cloudy",
    label: "Partly Cloudy"
  },
  {
    value: "pear",
    label: "Pear"
  },
  {
    value: "phone-filled",
    label: "Phone Filled"
  },
  {
    value: "phone",
    label: "Phone"
  },
  {
    value: "picture-filled",
    label: "Picture Filled"
  },
  {
    value: "picture-rounded",
    label: "Picture Rounded"
  },
  {
    value: "picture",
    label: "Picture"
  },
  {
    value: "pie-chart",
    label: "Pie Chart"
  },
  {
    value: "place",
    label: "Place"
  },
  {
    value: "platform",
    label: "Platform"
  },
  {
    value: "plus",
    label: "Plus"
  },
  {
    value: "pointer",
    label: "Pointer"
  },
  {
    value: "position",
    label: "Position"
  },
  {
    value: "postcard",
    label: "Postcard"
  },
  {
    value: "pouring",
    label: "Pouring"
  },
  {
    value: "present",
    label: "Present"
  },
  {
    value: "price-tag",
    label: "Price Tag"
  },
  {
    value: "printer",
    label: "Printer"
  },
  {
    value: "promotion",
    label: "Promotion"
  },
  {
    value: "quartz-watch",
    label: "Quartz Watch"
  },
  {
    value: "question-filled",
    label: "Question Filled"
  },
  {
    value: "rank",
    label: "Rank"
  },
  {
    value: "reading-lamp",
    label: "Reading Lamp"
  },
  {
    value: "reading",
    label: "Reading"
  },
  {
    value: "refresh-left",
    label: "Refresh Left"
  },
  {
    value: "refresh-right",
    label: "Refresh Right"
  },
  {
    value: "refresh",
    label: "Refresh"
  },
  {
    value: "refrigerator",
    label: "Refrigerator"
  },
  {
    value: "remove-filled",
    label: "Remove Filled"
  },
  {
    value: "remove",
    label: "Remove"
  },
  {
    value: "right",
    label: "Right"
  },
  {
    value: "scale-to-original",
    label: "Scale To Original"
  },
  {
    value: "school",
    label: "School"
  },
  {
    value: "scissor",
    label: "Scissor"
  },
  {
    value: "search",
    label: "Search"
  },
  {
    value: "select",
    label: "Select"
  },
  {
    value: "sell",
    label: "Sell"
  },
  {
    value: "semi-select",
    label: "Semi Select"
  },
  {
    value: "service",
    label: "Service"
  },
  {
    value: "set-up",
    label: "Set Up"
  },
  {
    value: "setting",
    label: "Setting"
  },
  {
    value: "share",
    label: "Share"
  },
  {
    value: "ship",
    label: "Ship"
  },
  {
    value: "shop",
    label: "Shop"
  },
  {
    value: "shopping-bag",
    label: "Shopping Bag"
  },
  {
    value: "shopping-cart-full",
    label: "Shopping Cart Full"
  },
  {
    value: "shopping-cart",
    label: "Shopping Cart"
  },
  {
    value: "shopping-trolley",
    label: "Shopping Trolley"
  },
  {
    value: "smoking",
    label: "Smoking"
  },
  {
    value: "soccer",
    label: "Soccer"
  },
  {
    value: "sold-out",
    label: "Sold Out"
  },
  {
    value: "sort-down",
    label: "Sort Down"
  },
  {
    value: "sort-up",
    label: "Sort Up"
  },
  {
    value: "sort",
    label: "Sort"
  },
  {
    value: "stamp",
    label: "Stamp"
  },
  {
    value: "star-filled",
    label: "Star Filled"
  },
  {
    value: "star",
    label: "Star"
  },
  {
    value: "stopwatch",
    label: "Stopwatch"
  },
  {
    value: "success-filled",
    label: "Success Filled"
  },
  {
    value: "sugar",
    label: "Sugar"
  },
  {
    value: "suitcase-line",
    label: "Suitcase Line"
  },
  {
    value: "suitcase",
    label: "Suitcase"
  },
  {
    value: "sunny",
    label: "Sunny"
  },
  {
    value: "sunrise",
    label: "Sunrise"
  },
  {
    value: "sunset",
    label: "Sunset"
  },
  {
    value: "switch-button",
    label: "Switch Button"
  },
  {
    value: "switch-filled",
    label: "Switch Filled"
  },
  {
    value: "switch",
    label: "Switch"
  },
  {
    value: "takeaway-box",
    label: "Takeaway Box"
  },
  {
    value: "ticket",
    label: "Ticket"
  },
  {
    value: "tickets",
    label: "Tickets"
  },
  {
    value: "timer",
    label: "Timer"
  },
  {
    value: "toilet-paper",
    label: "Toilet Paper"
  },
  {
    value: "tools",
    label: "Tools"
  },
  {
    value: "top-left",
    label: "Top Left"
  },
  {
    value: "top-right",
    label: "Top Right"
  },
  {
    value: "top",
    label: "Top"
  },
  {
    value: "trend-charts",
    label: "Trend Charts"
  },
  {
    value: "trophy-base",
    label: "Trophy Base"
  },
  {
    value: "trophy",
    label: "Trophy"
  },
  {
    value: "turn-off",
    label: "Turn Off"
  },
  {
    value: "umbrella",
    label: "Umbrella"
  },
  {
    value: "unlock",
    label: "Unlock"
  },
  {
    value: "upload-filled",
    label: "Upload Filled"
  },
  {
    value: "upload",
    label: "Upload"
  },
  {
    value: "user-filled",
    label: "User Filled"
  },
  {
    value: "user",
    label: "User"
  },
  {
    value: "van",
    label: "Van"
  },
  {
    value: "video-camera-filled",
    label: "Video Camera Filled"
  },
  {
    value: "video-camera",
    label: "Video Camera"
  },
  {
    value: "video-pause",
    label: "Video Pause"
  },
  {
    value: "video-play",
    label: "Video Play"
  },
  {
    value: "view",
    label: "View"
  },
  {
    value: "wallet-filled",
    label: "Wallet Filled"
  },
  {
    value: "wallet",
    label: "Wallet"
  },
  {
    value: "warn-triangle-filled",
    label: "Warn Triangle Filled"
  },
  {
    value: "warning-filled",
    label: "Warning Filled"
  },
  {
    value: "warning",
    label: "Warning"
  },
  {
    value: "watch",
    label: "Watch"
  },
  {
    value: "watermelon",
    label: "Watermelon"
  },
  {
    value: "wind-power",
    label: "Wind Power"
  },
  {
    value: "zoom-in",
    label: "Zoom In"
  },
  {
    value: "zoom-out",
    label: "Zoom Out"
  }
], Wc = O({
  name: "SdIcon",
  // components: { svg-icon },
  emits: ["update:modelValue", "change"],
  props: {
    modelValue: null,
    elIcons: {
      type: Boolean,
      default: !1
    },
    placeholder: {
      type: String,
      default: "Search by icon name"
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    allowCreate: {
      type: Boolean,
      default: !1
    },
    multiple: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      // setter
      set(e) {
        let t = e;
        this.$emit("update:modelValue", t);
      }
    }
  },
  data() {
    return {
      itemsData: [],
      loading: !1
    };
  },
  created() {
    this.elIcons ? this.restaurants = P(qc) : this.restaurants = P(Hc);
  },
  setup(e, t) {
    return {
      restaurants: q([])
    };
  },
  mounted() {
  },
  unmounted() {
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e);
    },
    remoteMethod(e) {
      const t = {
        // isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: true,
        // findAllMatches: false,
        // minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: [
          {
            name: "label",
            weight: 0.3
          },
          {
            name: "value",
            weight: 0.7
          }
        ],
        includeScore: !0,
        useExtendedSearch: !0
      }, a = this;
      new Promise(function(o, i) {
        const s = new fr(a.restaurants, t), u = e ? s.search("'" + e).map((m) => m.item) : a.restaurants;
        a.loading = !0, u ? o(u) : i([]);
      }).then((o) => {
        this.loading = !1, this.itemsData = P(o);
      }).catch((o) => {
        this.loading = !1, this.itemsData = [];
      });
    }
  }
}), xc = { class: "value" }, Kc = { class: "value" };
function Gc(e, t, a, l, o, i) {
  const s = ve, u = Bt, m = Lt;
  return n(), h(m, {
    modelValue: e.value,
    "onUpdate:modelValue": t[0] || (t[0] = (f) => e.value = f),
    filterable: "",
    remote: "",
    "reserve-keyword": "",
    "remote-show-suffix": "",
    clearable: "",
    multiple: e.multiple,
    "allow-create": e.allowCreate,
    disabled: e.disabled,
    "remote-method": e.remoteMethod,
    placeholder: e.placeholder,
    loading: e.loading,
    onChange: e.handleChange
  }, {
    label: r(({ label: f, value: c }) => [
      d(s, {
        "icon-name": e.elIcons ? "el-" + c : c,
        size: "14px",
        class: "mr-1"
      }, null, 8, ["icon-name"]),
      t[1] || (t[1] = I()),
      $("span", xc, A(f), 1)
    ]),
    default: r(() => [
      (n(!0), v(L, null, J(e.itemsData, (f) => (n(), h(u, {
        key: f.value,
        label: f.label,
        value: f.value
      }, {
        default: r(() => [
          d(s, {
            "icon-name": e.elIcons ? "el-" + f.value : f.value,
            size: "14px",
            class: "mr-1"
          }, null, 8, ["icon-name"]),
          t[2] || (t[2] = I()),
          $("span", Kc, A(f.label), 1)
        ]),
        _: 2
      }, 1032, ["label", "value"]))), 128))
    ]),
    _: 1
  }, 8, ["modelValue", "multiple", "allow-create", "disabled", "remote-method", "placeholder", "loading", "onChange"]);
}
const Jw = /* @__PURE__ */ U(Wc, [["render", Gc]]), Yc = O({
  name: "OptionsItemSetting",
  props: {
    typeSelect: String,
    modelValue: {
      type: Array,
      default: [],
      required: !0
    },
    readonly: Boolean
  },
  data() {
    return {
      resizeCleanup: null,
      showImportDialogFlag: !1,
      optionLines: "",
      cascaderOptions: "",
      showImportCascaderDialogFlag: !1,
      //separator: '||',
      separator: ",",
      optionItems: [],
      popupWidth: "50%"
    };
  },
  mounted() {
    this.optionItems = this.modelValue, this.popupWidth = oe("50%"), this.resizeCleanup = Pe(() => {
      this.$nextTick(() => {
        this.popupWidth = oe("50%");
      });
    });
  },
  beforeUnmount() {
    this.resizeCleanup?.();
  },
  methods: {
    focusText(e) {
      e.target.select();
    },
    emitDefaultValueChange() {
    },
    deleteOption(e, t) {
      this.optionItems.splice(t, 1), this.$emit("update:modelValue", this.optionItems);
    },
    addOption() {
      let e = this.optionItems.length + 1;
      this.optionItems.push({
        value: String(e),
        label: "new option " + e
      }), this.$emit("update:modelValue", this.optionItems);
    },
    importOptions() {
      this.optionLines = "", this.optionItems.length > 0 && this.optionItems.forEach((e) => {
        e.value === e.label ? this.optionLines += e.value + `
` : this.optionLines += e.value + this.separator + e.label + `
`;
      }), this.showImportDialogFlag = !0;
    },
    saveOptions() {
      let e = this.optionLines.split(`
`);
      e.length > 0 ? (this.optionItems = [], e.forEach((t) => {
        t && t.trim() && (t.indexOf(this.separator) !== -1 ? this.optionItems.push({
          value: t.split(this.separator)[0],
          label: t.split(this.separator)[1]
        }) : this.optionItems.push({
          value: t,
          label: t
        }));
      })) : this.optionItems = [], this.showImportDialogFlag = !1;
    }
  }
}), Jc = { class: "option-items-pane" }, Xc = { class: "opt-item" }, Qc = { key: 1 }, Zc = {
  key: 3,
  class: ""
}, eb = { class: "dialog-footer" };
function tb(e, t, a, l, o, i) {
  const s = Te, u = ve, m = ie, f = X("draggable"), c = We, F = Co, D = Ce;
  return n(), v("div", Jc, [
    e.optionItems && e.optionItems.length > 0 ? (n(), h(f, ae({
      key: 0,
      tag: "ul",
      list: e.optionItems,
      "item-key": "id"
    }, {
      group: "optionsGroup",
      ghostClass: "ghost",
      handle: ".drag-option"
    }), {
      item: r(({ element: g, index: C }) => [
        $("li", Xc, [
          d(s, {
            modelValue: g.value,
            "onUpdate:modelValue": (_) => g.value = _,
            style: { width: "30%" },
            class: "mr-1",
            onFocus: e.focusText,
            disabled: !!e.readonly || e.readonly
          }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "disabled"]),
          d(s, {
            modelValue: g.label,
            "onUpdate:modelValue": (_) => g.label = _,
            style: { width: "50%" },
            onFocus: e.focusText,
            disabled: !!e.readonly || e.readonly
          }, null, 8, ["modelValue", "onUpdate:modelValue", "onFocus", "disabled"]),
          e.readonly ? b("", !0) : (n(), h(m, {
            key: 0,
            circle: "",
            plain: "",
            class: "icon-drag drag-option ml-1"
          }, {
            default: r(() => [
              d(u, {
                class: "text-4 ml-0.3",
                "icon-name": "addon-grip-vertical"
              })
            ]),
            _: 1
          })),
          e.readonly ? b("", !0) : (n(), h(m, {
            key: 1,
            circle: "",
            plain: "",
            type: "danger",
            onClick: (_) => e.deleteOption(g, C),
            icon: "Delete",
            class: "col-delete-button"
          }, null, 8, ["onClick"]))
        ])
      ]),
      _: 1
    }, 16, ["list"])) : (n(), v("div", Qc, [
      d(c, { type: "info" }, {
        default: r(() => [...t[3] || (t[3] = [
          I("No Data", -1)
        ])]),
        _: 1
      })
    ])),
    e.readonly ? b("", !0) : (n(), h(F, { key: 2 }, {
      default: r(() => [
        d(m, {
          round: "",
          plain: "",
          icon: "Plus",
          size: "small",
          type: "success",
          onClick: e.addOption
        }, {
          default: r(() => [...t[4] || (t[4] = [
            I("Add Item", -1)
          ])]),
          _: 1
        }, 8, ["onClick"]),
        d(m, {
          round: "",
          plain: "",
          icon: "EditPen",
          size: "small",
          type: "primary",
          onClick: e.importOptions
        }, {
          default: r(() => [...t[5] || (t[5] = [
            I("Import Items", -1)
          ])]),
          _: 1
        }, 8, ["onClick"])
      ]),
      _: 1
    })),
    e.showImportDialogFlag ? (n(), v("div", Zc, [
      d(D, {
        title: "Import Options",
        modelValue: e.showImportDialogFlag,
        "onUpdate:modelValue": t[2] || (t[2] = (g) => e.showImportDialogFlag = g),
        draggable: "",
        width: e.popupWidth,
        "show-close": !0,
        class: "dialog-code-editor",
        "append-to-body": "",
        "close-on-click-modal": !1,
        "close-on-press-escape": !1,
        "destroy-on-close": !0
      }, {
        footer: r(() => [
          $("div", eb, [
            d(m, {
              type: "primary",
              onClick: e.saveOptions
            }, {
              default: r(() => [...t[6] || (t[6] = [
                I("Save", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            d(m, {
              onClick: t[1] || (t[1] = (g) => e.showImportDialogFlag = !1)
            }, {
              default: r(() => [...t[7] || (t[7] = [
                I("Cancel", -1)
              ])]),
              _: 1
            })
          ])
        ]),
        default: r(() => [
          d(s, {
            type: "textarea",
            rows: 15,
            modelValue: e.optionLines,
            "onUpdate:modelValue": t[0] || (t[0] = (g) => e.optionLines = g)
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }, 8, ["modelValue", "width"])
    ])) : b("", !0)
  ]);
}
const Xw = /* @__PURE__ */ U(Yc, [["render", tb], ["__scopeId", "data-v-209b3971"]]);
function ab(e) {
  try {
    const t = document.createElement("canvas");
    return vr(t, e, {
      format: "CODE128",
      displayValue: !1,
      margin: 0
    }), t.toDataURL("image/png");
  } catch (t) {
    return console.warn("[SdReport] barcode generate failed:", t), "";
  }
}
const lb = O({
  name: "SdReport",
  components: {},
  props: {
    reportList: {
      type: Array,
      required: !0
    },
    params: {
      type: Object,
      default: {}
    },
    size: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Report"
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    userState: {
      type: Object,
      required: !0
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    marginEnable: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      resizeCleanup: null,
      keyId: "_id",
      rowKey: "dataid",
      inputType: ["picture-upload-input", "crop-upload-input"],
      defaultParams: this.params,
      reportData: {},
      paramsInput: [],
      popupDownloadName: "Report",
      showPopupFlag: !1,
      showReportPopupFlag: !1,
      showDownloadPopupFlag: !1,
      popupReportWidth: "80%",
      popupWidthdefault: "60%",
      popupWidth: "30%",
      reportType: "pdf",
      scrollerHeight: 0,
      showFile: !1,
      downloadPath: "",
      filePath: "",
      fullName: "",
      pdfUrl: null,
      backdrop: !1,
      preLoading: !1,
      apiUrl: "",
      useUserState: this.$props.userState,
      loadEnable: !1,
      htmlStyle: {
        b: { bold: !0 },
        strong: { bold: !0 },
        u: { decoration: "underline" },
        del: { decoration: "lineThrough" },
        s: { decoration: "lineThrough" },
        em: { italics: !0 },
        i: { italics: !0 },
        h1: { fontSize: 24, bold: !0, marginBottom: 5 },
        h2: { fontSize: 22, bold: !0, marginBottom: 5 },
        h3: { fontSize: 20, bold: !0, marginBottom: 5 },
        h4: { fontSize: 18, bold: !0, marginBottom: 5 },
        h5: { fontSize: 16, bold: !0, marginBottom: 5 },
        h6: { fontSize: 14, bold: !0, marginBottom: 5 },
        a: { color: "blue", decoration: "underline" },
        strike: { decoration: "lineThrough" },
        p: { margin: [0, 0, 0, 0], preserveTrailingSpaces: !1, preserveLeadingSpaces: !1 },
        ul: { marginBottom: 5, marginLeft: 5 },
        table: { marginBottom: 5 },
        th: { bold: !0, fillColor: "#EEEEEE" }
      }
    };
  },
  computed: {},
  created() {
    this.apiUrl = "", Ya.vfs = cr, Ya.fonts = {
      THSarabun: {
        normal: "THSarabun.ttf",
        bold: "THSarabun-Bold.ttf",
        italics: "THSarabun-Italic.ttf",
        bolditalics: "THSarabun-BoldItalic.ttf"
      }
    };
  },
  setup(e, t) {
    const a = q(), l = q(null), o = q();
    return {
      formParamsRef: a,
      pdfFrame: l,
      reportLoading: o
    };
  },
  unmounted() {
    this.resizeCleanup?.();
  },
  async mounted() {
    this.buildState || (this.loadEnable = !0), this.scrollerHeight = window.innerHeight - 220, this.resizeCleanup = Pe(async () => {
      await Qt(() => {
        this.scrollerHeight = window.innerHeight - 220, this.popupReportWidth = oe("80%"), this.popupWidth = oe("30%"), this.popupWidthdefault = oe("60%");
      });
    });
  },
  methods: {
    submitForm(e) {
      e && e.validate(async (t) => {
        t && (this.showPopupFlag = !1, this.reportLoading = Da.service({ lock: !0, text: "Loading", background: "rgba(0, 0, 0, 0.7)", fullscreen: !0 }), this.typeReport(this.reportType, this.reportData, this.defaultParams));
      });
    },
    handleParamsReport() {
      this.submitForm(this.formParamsRef);
    },
    handleParamsCancel() {
      this.showPopupFlag = !1;
    },
    handleReportCancel() {
      this.pdfUrl && this.pdfUrl.startsWith("blob:") && URL.revokeObjectURL(this.pdfUrl), this.pdfUrl = null, this.showReportPopupFlag = !1;
    },
    createPdf(e) {
      try {
        const t = Ya.createPdf(e);
        t.getDataUrl ? t.getDataUrl((a) => {
          this.pdfUrl = a, this.reportLoading?.close(), this.showReportPopupFlag = !0;
        }) : this.reportLoading?.close();
      } catch (t) {
        this.reportLoading?.close(), console.log(t);
      }
    },
    value2Path(e, t) {
      const a = {};
      let l = t.form_db.schema;
      for (const o in e)
        if (Object.prototype.hasOwnProperty.call(e, o)) {
          const i = e[o];
          let s = !0;
          for (const u in l)
            if (u.search(o) > -1) {
              s = !1;
              let m = Ee(i, u, t);
              a[`{{${o}}}`] = m;
            }
          s && (a[`{{${o}}}`] = i);
        }
      return a;
    },
    async tableContent(e, t, a) {
      let l = 1, o = [], i = [], s = t.pdf_column || [], u = t.pdf_tb_header ? t.pdf_tb_header : [];
      const m = t.pdf_fontsize ? t.pdf_fontsize : 14;
      let f = !0, c = [], F = {}, D = {}, g = {}, C = {};
      for (const [_, p] of e.entries()) {
        let y = [], S = this.value2Path(p, a);
        for (const N in s)
          if (Object.prototype.hasOwnProperty.call(s, N)) {
            const w = s[N];
            let T = "";
            if (w.col_field && w.col_value === null)
              T = ue(`{{${w.col_field}}}`, S);
            else {
              if (w.col_expressions)
                try {
                  const E = `return ${ue(w.col_expressions, S)}`, W = new Function("row", ..._e, E);
                  S["{{expressions}}"] = W.call(a, p);
                } catch (V) {
                  S["{{expressions}}"] = V;
                }
              T = ue(w.col_value ?? "", S);
            }
            if (!w.col_group)
              if (w.col_sum) {
                let V = "num";
                const E = ["num", "num1", "num2"];
                w.col_format && E.includes(w.col_format) && (V = w.col_format);
                const W = Number(T);
                isNaN(W) ? C[w.col_field] || (C[w.col_field] = "") : C[w.col_field] ? C[w.col_field].text = C[w.col_field].text + W : C[w.col_field] = {
                  text: W,
                  bold: !0,
                  fillColor: w.col_fillcolor || void 0,
                  alignment: w.col_alignment || "left",
                  fontSize: m,
                  format: V
                };
              } else
                C[w.col_field] || (C[w.col_field] = "");
            if (w.col_format)
              try {
                if (w.col_format === "num") {
                  const V = Number(T);
                  isNaN(V) || (T = V.toLocaleString("en-US"));
                } else if (w.col_format === "num1") {
                  const V = Number(T);
                  isNaN(V) || (T = V.toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 }));
                } else if (w.col_format === "num2") {
                  const V = Number(T);
                  isNaN(V) || (T = V.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
                } else w.col_format === "date" ? T = we(T).format("DD/MM/YYYY") : w.col_format === "datetime" ? T = we(T).format("DD/MM/YYYY HH:mm") : w.col_format === "boolean" && (T = T ? "True" : "False");
              } catch {
              }
            if (w.col_group)
              D[w.col_field] = T, g[w.col_field] = w.col_fillcolor || "#eee";
            else {
              if (f) {
                let V = w.col_width || "*";
                if (o.push(V), u.length === 0) {
                  let E = w.col_label || w.col_field;
                  i.push({
                    text: E,
                    bold: !0,
                    fillColor: "#ddd",
                    alignment: w.col_alignment || "left",
                    fontSize: m
                  });
                }
              }
              if (w.col_html) {
                const V = Ll(`<span>${T}</span>`, {
                  defaultStyles: this.htmlStyle,
                  // removeExtraBlanks: true,
                  tableAutoSize: !0,
                  ignoreStyles: ["line-height", "font-family"]
                });
                y.push({
                  columns: [V],
                  fillColor: w.col_fillcolor || void 0,
                  alignment: w.col_alignment || "left",
                  fontSize: m
                });
              } else
                y.push({
                  text: T,
                  fillColor: w.col_fillcolor || void 0,
                  alignment: w.col_alignment || "left",
                  fontSize: m
                });
            }
          }
        if (f = !1, Object.keys(D).length > 0) {
          let N = {}, w = 5;
          for (const T in D)
            if (Object.prototype.hasOwnProperty.call(D, T)) {
              const V = D[T];
              N[T] || (Object.keys(N).length > 0 ? (N[T] = w + 10, w = N[T]) : N[T] = w), F[T] || (F[T] = ""), g[T] || (g[T] = "#eee"), F[T] !== V && (F[T] = V, c.push([
                {
                  text: V,
                  marginLeft: N[T],
                  bold: !0,
                  fillColor: g[T],
                  alignment: "left",
                  fontSize: m,
                  colSpan: o.length
                }
              ]));
            }
        }
        c.push(y);
      }
      if (C) {
        let _ = [], p = !1;
        for (const y in C)
          if (Object.prototype.hasOwnProperty.call(C, y)) {
            const S = P(C[y]);
            S !== "" && (p = !0, S.text && !isNaN(Number(S.text)) && (S.format === "num1" ? S.text = Number(S.text).toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : S.format === "num2" ? S.text = Number(S.text).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : S.text = Number(S.text).toLocaleString("en-US")), delete S.format), _.push(S);
          }
        p && c.push(_);
      }
      return u.length === 0 && (u = [i]), l = u.length, {
        headerRows: l,
        widths: o,
        body: u.concat(c)
      };
    },
    async dataConvert(e, t, a) {
      let l = t.pdf_column || [], o = [];
      for (const [i, s] of e.entries()) {
        let u = {}, m = this.value2Path(s, a);
        for (const f in l)
          if (Object.prototype.hasOwnProperty.call(l, f)) {
            const c = l[f];
            let F = "";
            if (c.col_field && c.col_value === null)
              F = ue(`{{${c.col_field}}}`, m);
            else {
              if (c.col_expressions)
                try {
                  const C = `return ${ue(c.col_expressions, m)}`, _ = new Function("row", ..._e, C);
                  m["{{expressions}}"] = _.call(a, s);
                } catch (g) {
                  m["{{expressions}}"] = g;
                }
              F = ue(c.col_value ?? "", m);
            }
            if (c.col_format)
              try {
                if (c.col_format === "num") {
                  const g = Number(F);
                  isNaN(g) || (F = g.toFixed(0), F = Number(F));
                } else if (c.col_format === "num1") {
                  const g = Number(F);
                  isNaN(g) || (F = g.toFixed(1), F = Number(F));
                } else if (c.col_format === "num2") {
                  const g = Number(F);
                  isNaN(g) || (F = g.toFixed(2), F = Number(F));
                } else c.col_format === "date" ? F = we(F).format("DD/MM/YYYY") : c.col_format === "datetime" ? F = we(F).format("DD/MM/YYYY HH:mm") : c.col_format === "boolean" && (F = F ? "True" : "False");
              } catch {
              }
            let D = c.col_label || c.col_field;
            u[D] = F;
          }
        o.push(u);
      }
      return o;
    },
    async excelReport(e, t = {}, a = !1) {
      let l = [];
      if (e.pdf_sql && e.pdf_sql.value) {
        const o = {
          providerId: e.pdf_sql.value,
          providerType: fe.SQL,
          params: t
        };
        e.pdf_fontsize && e.pdf_fontsize;
        let i = {}, s = "";
        e.pdf_form_id && (s = e.pdf_form_id);
        const u = await $e(s, this.useUserState);
        u && u.data && (i = u.data);
        const m = await at(o, !1, this.useUserState);
        if (m && m.response && m.data && m.data.data) {
          const f = P(m.data.data);
          let c = {};
          if (f && (f[0] && f[0]._id ? c = this.value2Path(f[0], i) : c = this.value2Path(f, i)), e.pdf_content) {
            const F = e.pdf_content;
            for (const [D, g] of F.entries())
              if (g.content_widget) {
                let C = "";
                if (g.content_value && (typeof g.content_value == "object" ? C = g.content_value : C = ue(g.content_value, c)), g.content_widget === "table")
                  if (Object.keys(e.pdf_column).length > 0) {
                    const _ = await this.dataConvert(f, e, i);
                    l.push({
                      name: e.pdf_name,
                      data: _
                    });
                  } else
                    l.push({
                      name: e.pdf_name,
                      data: f
                    });
                else if (g.content_widget === "subtable") {
                  if (C && C.subTableField) {
                    let _ = [];
                    f[0] && f[0]._id ? _ = f[0][C.subTableField] ? f[0][C.subTableField] : [] : _ = f[C.subTableField] ? f[C.subTableField] : [];
                    let p = C.header ? C.header : [];
                    const y = C.column ? C.column : [];
                    let S = [];
                    for (const [N, w] of _.entries()) {
                      let T = [], V = this.value2Path(w, i), E = 0;
                      for (const W in w)
                        if (Object.prototype.hasOwnProperty.call(w, W)) {
                          w[W];
                          let te = !1;
                          if (y.length > 0 ? y.includes(W) && (te = !0) : te = !0, te) {
                            let x = ue(`{{${W}}}`, V);
                            p.length > 0 && typeof p[0] != "object" && p[E] && (typeof p[E] == "string" ? p[E] : String(p[E])), T[W] = x, E++;
                          }
                        }
                      S.push(T);
                    }
                    Object.keys(_).length > 0 && l.push({
                      name: C.subTableField,
                      data: S
                    });
                  }
                } else if (g.content_widget === "sub_report" && C !== "") {
                  const _ = {
                    providerId: "getreport-one",
                    providerType: fe.SYS,
                    params: { reportId: C }
                  }, p = await Xt(_, this.useUserState);
                  if (p && p.response && p.data && p.data.data) {
                    const y = p.data.data;
                    let S = !0;
                    if (this.permissionReport(y)) {
                      if (y.pdf_params && Object.keys(y.pdf_params).length > 0) {
                        for (const w in y.pdf_params)
                          if (Object.prototype.hasOwnProperty.call(y.pdf_params, w)) {
                            const T = y.pdf_params[w];
                            if (T.param_var && t[T.param_var] === void 0) {
                              S = !1;
                              break;
                            }
                          }
                      }
                      if (S) {
                        let w = await this.excelReport(y, t, !0);
                        w && Object.keys(w).length > 0 && (l = l.concat(w));
                      }
                    }
                  }
                }
              }
          }
        }
      }
      return l;
    },
    async pdfReport(e, t = {}, a = !1) {
      let l = [], o = {}, i = { content: l };
      if (e.pdf_sql && e.pdf_sql.value) {
        const s = {
          providerId: e.pdf_sql.value,
          providerType: fe.SQL,
          params: t
        }, u = e.pdf_fontsize ? e.pdf_fontsize : 14;
        let m = {}, f = "";
        e.pdf_form_id && (f = e.pdf_form_id);
        const c = await $e(f, this.useUserState);
        c && c.data && (m = c.data);
        const F = await at(s, !1, this.useUserState);
        if (F && F.response && F.data && F.data.data) {
          const D = P(F.data.data);
          let g = {};
          if (D && (D[0] && D[0]._id ? g = this.value2Path(D[0], m) : g = this.value2Path(D, m)), e.pdf_content) {
            const C = e.pdf_content;
            for (const [_, p] of C.entries())
              if (p.content_widget) {
                let y = "";
                if (p.content_value && (typeof p.content_value == "object" ? y = p.content_value : y = ue(p.content_value, g)), p.content_widget === "text")
                  l.push({
                    text: y,
                    alignment: p.content_align || "left",
                    marginLeft: p.content_ml || void 0,
                    marginRight: p.content_mr || void 0,
                    marginTop: p.content_mt || void 0,
                    marginBottom: p.content_mb || void 0,
                    fontSize: p.content_fontsize || u,
                    bold: p.content_bold || void 0,
                    italics: p.content_italics || void 0,
                    color: p.content_color || void 0,
                    background: p.content_bgcolor || void 0,
                    decoration: p.content_decoration || void 0,
                    decorationStyle: p.content_linestyle || void 0
                  });
                else if (p.content_widget === "html") {
                  const S = Ll(y, {
                    defaultStyles: this.htmlStyle,
                    // removeExtraBlanks: true,
                    tableAutoSize: !0,
                    ignoreStyles: ["line-height", "font-family"]
                  });
                  l.push({
                    columns: [S],
                    alignment: p.content_align || "left",
                    marginLeft: p.content_ml || void 0,
                    marginRight: p.content_mr || void 0,
                    marginTop: p.content_mt || void 0,
                    marginBottom: p.content_mb || void 0,
                    fontSize: p.content_fontsize || u,
                    bold: p.content_bold || void 0,
                    italics: p.content_italics || void 0,
                    color: p.content_color || void 0,
                    background: p.content_bgcolor || void 0,
                    decoration: p.content_decoration || void 0,
                    decorationStyle: p.content_linestyle || void 0
                  });
                } else if (p.content_widget === "image") {
                  let S = 100, N = 100;
                  if (p.content_width && (S = p.content_width), p.content_height && (N = p.content_height), y !== "") {
                    const w = "img-" + Ut(), T = y.split(", ");
                    o[w] = T[0], l.push({
                      image: w,
                      cover: { width: S, height: N, valign: "center", align: "center" },
                      alignment: p.content_align || "left",
                      marginLeft: p.content_ml || void 0,
                      marginRight: p.content_mr || void 0,
                      marginTop: p.content_mt || void 0,
                      marginBottom: p.content_mb || void 0
                    });
                  }
                } else if (p.content_widget === "qrcode") {
                  let S = 100;
                  p.content_width ? S = p.content_width : p.content_height && (S = p.content_height), y !== "" && l.push({
                    qr: y,
                    fit: S,
                    alignment: p.content_align || "left",
                    marginLeft: p.content_ml || void 0,
                    marginRight: p.content_mr || void 0,
                    marginTop: p.content_mt || void 0,
                    marginBottom: p.content_mb || void 0
                  });
                } else if (p.content_widget === "barcode") {
                  if (y !== "") {
                    const S = ab(y);
                    if (S !== "") {
                      let N = 200;
                      p.content_width && (N = p.content_width);
                      const w = {
                        image: S,
                        width: N,
                        alignment: p.content_align || "left",
                        marginLeft: p.content_ml || void 0,
                        marginRight: p.content_mr || void 0,
                        marginTop: p.content_mt || void 0,
                        marginBottom: p.content_mb || void 0
                      };
                      p.content_height && (w.height = p.content_height), l.push(w);
                    }
                  }
                } else if (p.content_widget === "table") {
                  const S = await this.tableContent(D, e, m);
                  let N = e.pdf_tb_layout ? e.pdf_tb_layout : void 0;
                  l.push({
                    layout: N,
                    table: S,
                    alignment: p.content_align || "left",
                    marginLeft: p.content_ml || void 0,
                    marginRight: p.content_mr || void 0,
                    marginTop: p.content_mt || void 0,
                    marginBottom: p.content_mb || void 0
                  });
                } else if (p.content_widget === "subtable") {
                  if (y && y.subTableField) {
                    let S = [];
                    D[0] && D[0]._id ? S = D[0][y.subTableField] ? D[0][y.subTableField] : [] : S = D[y.subTableField] ? D[y.subTableField] : [];
                    let N = y.widths ? y.widths : [], w = y.header ? y.header : [];
                    const T = y.alignment ? y.alignment : [], V = y.column ? y.column : [];
                    let E = [], W = [], te = !0, x = !1;
                    for (const [je, Ke] of S.entries()) {
                      let nt = [], Le = this.value2Path(Ke, m), Ne = 0;
                      for (const z in Ke)
                        if (Object.prototype.hasOwnProperty.call(Ke, z)) {
                          Ke[z];
                          let k = !1;
                          if (V.length > 0 ? V.includes(z) && (k = !0) : k = !0, k) {
                            let K = ue(`{{${z}}}`, Le), G = T[Ne] || "left";
                            if (G === "l" || G === "L" ? G = "left" : G === "c" || G === "C" ? G = "center" : (G === "r" || G === "R") && (G = "rigth"), te)
                              if (N[Ne] || (N[Ne] = "*"), w.length > 0) {
                                if (typeof w[0] != "object")
                                  if (x = !0, w[Ne]) {
                                    const Ue = typeof w[Ne] == "string" ? w[Ne] : String(w[Ne]);
                                    W.push({
                                      text: Ue,
                                      bold: !0,
                                      fillColor: "#ddd",
                                      alignment: G,
                                      fontSize: u
                                    });
                                  } else
                                    W.push({
                                      text: z,
                                      bold: !0,
                                      fillColor: "#ddd",
                                      alignment: G,
                                      fontSize: u
                                    });
                              } else
                                W.push({
                                  text: z,
                                  bold: !0,
                                  fillColor: "#ddd",
                                  alignment: G,
                                  fontSize: u
                                });
                            nt.push({
                              text: K,
                              alignment: G,
                              fontSize: u
                            }), Ne++;
                          }
                        }
                      te = !1, E.push(nt);
                    }
                    if (Object.keys(S).length > 0) {
                      w.length === 0 ? w = [W] : x && (w = [W]);
                      const Ke = {
                        headerRows: w.length,
                        widths: N,
                        body: w.concat(E)
                      };
                      let nt = e.pdf_tb_layout ? e.pdf_tb_layout : void 0;
                      l.push({
                        layout: nt,
                        table: Ke,
                        alignment: p.content_align || "left",
                        marginLeft: p.content_ml || void 0,
                        marginRight: p.content_mr || void 0,
                        marginTop: p.content_mt || void 0,
                        marginBottom: p.content_mb || void 0
                      });
                    }
                  }
                } else if (p.content_widget === "sub_report" && y !== "") {
                  const S = {
                    providerId: "getreport-one",
                    providerType: fe.SYS,
                    params: { reportId: y }
                  }, N = await Xt(S, this.useUserState);
                  if (N && N.response && N.data && N.data.data) {
                    const w = N.data.data;
                    let T = !0;
                    if (this.permissionReport(w)) {
                      if (w.pdf_params && Object.keys(w.pdf_params).length > 0) {
                        for (const E in w.pdf_params)
                          if (Object.prototype.hasOwnProperty.call(w.pdf_params, E)) {
                            const W = w.pdf_params[E];
                            if (W.param_var && t[W.param_var] === void 0) {
                              T = !1;
                              break;
                            }
                          }
                      }
                      if (T) {
                        let E = await this.pdfReport(w, t, !0);
                        E && (E.content && (l = l.concat(E.content)), E.images && (o = {
                          ...o,
                          ...E.images
                        }));
                      }
                    }
                  }
                }
              }
          }
        }
        a || (i.defaultStyle = {
          font: "THSarabun",
          fontSize: u
        }, e.pdf_watermark && (i.watermark = { text: e.pdf_watermark, opacity: 0.1, bold: !0, italics: !1, fontSize: 75, angle: 45 }), e.pdf_orientation && (i.pageOrientation = e.pdf_orientation), e.pdf_page_size && e.pdf_page_size === "custom" && e.pdf_custom_size && e.pdf_custom_size.width && e.pdf_custom_size.height ? i.pageSize = {
          width: e.pdf_custom_size.width,
          height: e.pdf_custom_size.height
        } : i.pageSize = e.pdf_page_size, e.pdf_ml && e.pdf_mt && e.pdf_mr && e.pdf_mb ? i.pageMargins = [e.pdf_ml, e.pdf_mt, e.pdf_mr, e.pdf_mb] : i.pageMargins = 20, i.header = function(D, g, C) {
          const _ = [];
          return e.pdf_page_date && _.push({ text: "Print Date: " + we().format("DD/MM/YYYY"), alignment: "right", marginRight: e.pdf_mr, marginTop: 5, fontSize: 11 }), e.pdf_title && e.pdf_showheader === "everyPage" && _.push({ text: e.pdf_title, alignment: "center", bold: !0, fontSize: u + 6, marginBottom: 5 }), _;
        }, i.footer = function(D, g) {
          const C = [];
          if (e.pdf_page_num) {
            const _ = "Page " + D.toString() + " of " + g;
            C.push({ text: _, alignment: "right", marginRight: 20, marginTop: 0, marginBottom: 5, fontSize: 11 });
          }
          return C;
        }, e.pdf_bg && Array.isArray(e.pdf_bg) && e.pdf_bg.length > 0 && (o.pdf_bg = this.getImage(e.pdf_bg), i.background = function(D, g) {
          return {
            image: "pdf_bg",
            cover: { width: e.pdf_custom_size.width || 200, height: e.pdf_custom_size.height || 200, valign: "center", align: "center" }
          };
        })), Object.keys(o).length > 0 && (i.images = o), e.pdf_title && (e.pdf_showheader === "firstPage" ? l = [{ text: e.pdf_title, alignment: "center", bold: !0, fontSize: u + 6, marginBottom: 5 }, ...l] : e.pdf_ml && e.pdf_mt && e.pdf_mr && e.pdf_mb ? i.pageMargins = [e.pdf_ml, e.pdf_mt + 25, e.pdf_mr, e.pdf_mb] : i.pageMargins = [20, 45, 20, 20]), i.content = l;
      }
      return i;
    },
    async createReport(e, t) {
      this.reportType = t;
      const a = {
        providerId: "getreport-one",
        providerType: fe.SYS,
        params: { reportId: e }
      };
      let l = !0;
      this.defaultParams = P(this.params);
      const o = await Xt(a, this.useUserState);
      if (o && o.response && o.data && o.data.data) {
        if (this.reportData = o.data.data, !this.permissionReport(this.reportData))
          return B.warning("Permission denied."), !1;
        if (this.reportData.pdf_params && Object.keys(this.reportData.pdf_params).length > 0) {
          this.paramsInput = this.reportData.pdf_params;
          for (const i in this.reportData.pdf_params)
            if (Object.prototype.hasOwnProperty.call(this.reportData.pdf_params, i)) {
              const s = this.reportData.pdf_params[i];
              s.param_var && this.defaultParams[s.param_var] === void 0 && (l = !1, s.param_type === "boolean" ? this.defaultParams[s.param_var] = JSON.parse(s.param_default) : s.param_type === "number" ? this.defaultParams[s.param_var] = Number(s.param_default) : s.param_default === "date()" ? this.defaultParams[s.param_var] = we().format("YYYY-MM-DD HH:mm:ss") : this.defaultParams[s.param_var] = s.param_default, this.showPopupFlag = !0);
            }
        }
        l && (this.reportLoading = Da.service({ lock: !0, text: "Loading", background: "rgba(0, 0, 0, 0.7)", fullscreen: !0 }), this.typeReport(t, this.reportData, this.defaultParams));
      }
    },
    async typeReport(e, t, a = {}, l = !1) {
      if (e === "excel") {
        const o = await this.excelReport(t, a);
        let i = "output";
        t.pdf_name && (i = t.pdf_name), this.createExcel(o, i);
      } else if (e === "word")
        this.popupDownloadName = "Report", t.pdf_name && (t.pdf_name, this.popupDownloadName = "Report " + t.pdf_name), t.pdf_temp && Object.keys(t.pdf_temp).length > 0 ? (t.pdf_temp[0].url ? t.pdf_temp[0].url : "") ? await ce.post(
          `${this.userState.host}/v1/files/create-word`,
          { reportId: t._id, params: a },
          {
            headers: {
              Authorization: `Bearer ${this.userState.user?.token}`
            }
          }
        ).then((i) => {
          i.data && i.data.message && i.data.url && (this.filePath = i.data.filePath, this.fullName = i.data.fileName, this.downloadPath = i.data.url, this.showFile = !0, this.showDownloadPopupFlag = !0), this.reportLoading?.close();
        }).catch((i) => {
          this.reportLoading?.close();
        }) : (this.reportLoading?.close(), B.warning("Template not found.")) : (this.reportLoading?.close(), B.warning("Template not found."));
      else if (e === "latex")
        await ce.post(
          `${this.userState.host}/v1/files/create-latex`,
          { reportId: t._id, params: a },
          {
            headers: {
              Authorization: `Bearer ${this.userState.user?.token}`
            },
            responseType: "blob"
          }
        ).then((o) => {
          this.pdfUrl = URL.createObjectURL(new Blob([o.data], { type: "application/pdf" })), this.showReportPopupFlag = !0, this.reportLoading?.close();
        }).catch(async (o) => {
          this.reportLoading?.close();
          let i = "Create report failed.";
          try {
            const s = await o.response?.data?.text?.();
            if (s) {
              const u = JSON.parse(s);
              u.message && (i = u.message);
            }
          } catch {
          }
          B.error(i);
        });
      else {
        const o = await this.pdfReport(t, a);
        this.createPdf(o);
      }
    },
    async createWord(e, t, a) {
      try {
        const l = new br({
          sections: [
            {
              properties: {
                page: {
                  size: {
                    width: 12240,
                    // 8.5 inch ใน DXA
                    height: 15840
                    // 11 inch ใน DXA
                  },
                  margin: {
                    top: 1440,
                    // 1 inch
                    right: 1440,
                    bottom: 1440,
                    left: 1440
                  }
                }
              },
              children: [
                new Wt("Debug Table Width"),
                // ตารางทดสอบที่ 1 - ใช้ FIXED layout
                new Bl({
                  width: { size: 100, type: va.PERCENTAGE },
                  layout: Nl.FIXED,
                  // columnWidths: [3000, 7000], // รวม 10000
                  rows: [
                    new Ol({
                      children: [
                        new Ja({
                          width: { size: 4e3, type: va.DXA },
                          // ← กำหนดใน cell
                          children: [new Wt("Cell 1")]
                        }),
                        new Ja({
                          width: { size: 6e3, type: va.DXA },
                          // ← กำหนดใน cell
                          children: [new Wt("Cell 2")]
                        })
                      ]
                    })
                  ]
                }),
                new Wt(" "),
                // เว้นบรรทัด
                // ตารางทดสอบที่ 2 - ใช้ AUTOFIT สำหรับเปรียบเทียบ
                new Bl({
                  width: {
                    size: 5e3,
                    // แคบกว่า
                    type: va.DXA
                  },
                  layout: Nl.AUTOFIT,
                  borders: {
                    top: { style: wa.DOUBLE, size: 8, color: "0000FF" },
                    bottom: { style: wa.DOUBLE, size: 8, color: "0000FF" },
                    left: { style: wa.DOUBLE, size: 8, color: "0000FF" },
                    right: { style: wa.DOUBLE, size: 8, color: "0000FF" }
                  },
                  rows: [
                    new Ol({
                      children: [
                        new Ja({
                          children: [new Wt("ตาราง AUTOFIT - 5000")],
                          shading: { fill: "CCCCFF" }
                        })
                      ]
                    })
                  ]
                })
              ]
            }
          ]
        }), o = await gr.toBlob(l);
        yr(o, "debug-table-width.docx"), this.reportLoading?.close();
      } catch (l) {
        this.reportLoading?.close(), console.log(l);
      }
    },
    createExcel(e, t) {
      try {
        if (Object.keys(e).length > 0) {
          const a = ya.utils.book_new();
          for (const [l, o] of e.entries())
            if (o.data && o.name) {
              const i = ya.utils.json_to_sheet(o.data);
              ya.utils.book_append_sheet(a, i, o.name);
            }
          ya.writeFileXLSX(a, `${t}.xlsx`);
        } else
          B.warning("Data not found.");
        this.reportLoading?.close();
      } catch (a) {
        this.reportLoading?.close(), console.log(a);
      }
    },
    permissionReport(e) {
      if (e.pdf_share && e.pdf_share === "private") {
        let t = "";
        if (e.created_by && e.created_by.id && (t = e.created_by.id), this.userState.user) {
          if (this.userState.user.user_id !== t)
            return !1;
        } else
          return !1;
      } else if (e.pdf_share && e.pdf_share === "assign")
        if (e.pdf_assign_roles) {
          let t = "";
          if (e.created_by && e.created_by.id && (t = e.created_by.id), this.userState.user) {
            if (this.userState.user.user_id !== t) {
              const a = e.pdf_assign_roles, l = this.userState.user.roles;
              let o = !1;
              if (l.forEach((i) => {
                if (a.includes(i)) {
                  o = !0;
                  return;
                }
              }), !o)
                return !1;
            }
          } else
            return !1;
        } else
          return !1;
      return !0;
    },
    getImage(e) {
      if (e)
        return Object.keys(e).length > 0 && e[0] ? e[0].url ? e[0].url : e[0] : Object.keys(e).length > 0 && e.url ? e.url : e;
    },
    getDatetime(e) {
      return e ? we(e).format("DD/MM/YYYY HH:mm") : "";
    },
    convertHexToRgba(e, t = 1) {
      return Ua(e, t);
    },
    pixel2Twip(e) {
      return e * 15;
    },
    async handleClose() {
      if (this.showFile) {
        this.showFile = !1;
        const e = `export/${this.userState.user?.username}`;
        let t = { filePath: this.filePath, fileName: this.fullName, fileType: "docx", fileGroup: e, fileId: "" };
        await ce.delete(`${this.userState.host}/v1/files/remove-one`, {
          data: t,
          headers: {
            Authorization: `Bearer ${this.userState.user?.token}`
          }
        }).then((a) => {
        }).catch((a) => {
          console.log(a);
        });
      }
    }
  }
}), ob = { key: 2 }, ib = { class: "dialog-footer" }, nb = { key: 3 }, sb = {
  role: "heading",
  class: "el-dialog__title"
}, rb = ["src"], db = { key: 4 };
function ub(e, t, a, l, o, i) {
  const s = ve, u = X("arrow-down"), m = qe, f = ie, c = _t, F = Ft, D = St, g = Te, C = ea, _ = At, p = ml, y = ic, S = wt, N = vt, w = Ce, T = X("Document"), V = Ea;
  return n(), v(L, null, [
    Object.keys(e.reportList).length > 1 ? (n(), h(D, {
      key: 0,
      class: Y(e.marginEnable ? "ml-1 mr-1" : "")
    }, {
      dropdown: r(() => [
        d(F, null, {
          default: r(() => [
            (n(!0), v(L, null, J(e.reportList, (E, W) => (n(), h(c, {
              key: W,
              onClick: (te) => e.createReport(E.reportId, E.type)
            }, {
              default: r(() => [
                E.type === "excel" ? (n(), h(s, {
                  key: 0,
                  "icon-name": "addon-excel"
                })) : E.type === "word" ? (n(), h(s, {
                  key: 1,
                  "icon-name": "addon-word"
                })) : (n(), h(s, {
                  key: 2,
                  "icon-name": "addon-pdf"
                })),
                $("span", null, A(E.label), 1)
              ]),
              _: 2
            }, 1032, ["onClick"]))), 128))
          ]),
          _: 1
        })
      ]),
      default: r(() => [
        d(f, {
          plain: "",
          size: e.size
        }, {
          default: r(() => [
            d(s, { "icon-name": "report-ui" }),
            t[4] || (t[4] = I()),
            $("span", null, A(e.label), 1),
            t[5] || (t[5] = I()),
            d(m, { class: "el-icon--right" }, {
              default: r(() => [
                d(u)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["size"])
      ]),
      _: 1
    }, 8, ["class"])) : (n(!0), v(L, { key: 1 }, J(e.reportList, (E, W) => (n(), h(f, {
      key: W,
      plain: "",
      size: e.size,
      onClick: (te) => e.createReport(E.reportId, E.type)
    }, {
      default: r(() => [
        E.type === "excel" ? (n(), h(s, {
          key: 0,
          "icon-name": "addon-excel"
        })) : E.type === "word" ? (n(), h(s, {
          key: 1,
          "icon-name": "addon-word"
        })) : (n(), h(s, {
          key: 2,
          "icon-name": "addon-pdf"
        })),
        $("span", null, A(E.label), 1)
      ]),
      _: 2
    }, 1032, ["size", "onClick"]))), 128)),
    e.showPopupFlag ? (n(), v("div", ob, [
      d(w, {
        title: "Report Parameters",
        modelValue: e.showPopupFlag,
        "onUpdate:modelValue": t[1] || (t[1] = (E) => e.showPopupFlag = E),
        width: e.popupWidth,
        "show-close": !0,
        class: "dialog-grid dialog-form",
        "append-to-body": "",
        "close-on-click-modal": !0,
        "close-on-press-escape": !0,
        "destroy-on-close": !0
      }, {
        footer: r(() => [
          $("div", ib, [
            d(f, {
              type: "primary",
              icon: "Edit",
              onClick: j(e.handleParamsReport, ["prevent"])
            }, {
              default: r(() => [...t[6] || (t[6] = [
                I("Submit", -1)
              ])]),
              _: 1
            }, 8, ["onClick"]),
            d(f, {
              onClick: j(e.handleParamsCancel, ["prevent"])
            }, {
              default: r(() => [...t[7] || (t[7] = [
                I("Close", -1)
              ])]),
              _: 1
            }, 8, ["onClick"])
          ])
        ]),
        default: r(() => [
          d(N, {
            ref: "formParamsRef",
            model: e.defaultParams,
            "label-position": "top",
            size: "default",
            onSubmit: t[0] || (t[0] = j((E) => e.submitForm(e.formParamsRef), ["prevent"]))
          }, {
            default: r(() => [
              (n(!0), v(L, null, J(e.paramsInput, (E, W) => (n(), v(L, { key: W }, [
                E.param_var ? (n(), h(S, {
                  key: 0,
                  prop: E.param_var,
                  label: E.param_label ? E.param_label : E.param_var,
                  required: E.param_required
                }, {
                  default: r(() => [
                    E.param_type === "text" ? (n(), h(g, {
                      key: 0,
                      modelValue: e.defaultParams[E.param_var],
                      "onUpdate:modelValue": (te) => e.defaultParams[E.param_var] = te,
                      type: "text",
                      clearable: !0
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : E.param_type === "number" ? (n(), h(C, {
                      key: 1,
                      modelValue: e.defaultParams[E.param_var],
                      "onUpdate:modelValue": (te) => e.defaultParams[E.param_var] = te,
                      style: { width: "100%" }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : E.param_type === "boolean" ? (n(), h(_, {
                      key: 2,
                      modelValue: e.defaultParams[E.param_var],
                      "onUpdate:modelValue": (te) => e.defaultParams[E.param_var] = te,
                      "active-text": e.defaultParams[E.param_var] ? "True" : "False"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "active-text"])) : E.param_type === "datetime" ? (n(), h(p, {
                      key: 3,
                      modelValue: e.defaultParams[E.param_var],
                      "onUpdate:modelValue": (te) => e.defaultParams[E.param_var] = te,
                      type: "datetime",
                      clearable: !0,
                      style: { width: "100%" },
                      format: "DD/MM/YYYY HH:mm",
                      "value-format": "YYYY-MM-DD HH:mm:ss",
                      placeholder: "Select Date Time..."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : E.param_type === "date" ? (n(), h(p, {
                      key: 4,
                      modelValue: e.defaultParams[E.param_var],
                      "onUpdate:modelValue": (te) => e.defaultParams[E.param_var] = te,
                      type: "date",
                      clearable: !0,
                      style: { width: "100%" },
                      format: "DD/MM/YYYY",
                      "value-format": "YYYY-MM-DD",
                      placeholder: "Select Date..."
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : E.param_type === "form" && E.param_sform && E.param_sform.value ? (n(), h(y, {
                      key: 5,
                      modelValue: e.defaultParams[E.param_var],
                      "onUpdate:modelValue": (te) => e.defaultParams[E.param_var] = te,
                      clearable: !0,
                      filterable: !0,
                      "form-id": E.param_sform.value,
                      "enable-object-type": !1,
                      "value-field": E.param_svalue,
                      "label-field": E.param_slabel,
                      "search-field": E.param_slabel,
                      "user-state": e.userState
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "form-id", "value-field", "label-field", "search-field", "user-state"])) : b("", !0)
                  ]),
                  _: 2
                }, 1032, ["prop", "label", "required"])) : b("", !0)
              ], 64))), 128))
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        _: 1
      }, 8, ["modelValue", "width"])
    ])) : b("", !0),
    e.showReportPopupFlag ? (n(), v("div", nb, [
      d(w, {
        title: "Report Preview",
        modelValue: e.showReportPopupFlag,
        "onUpdate:modelValue": t[2] || (t[2] = (E) => e.showReportPopupFlag = E),
        width: e.popupReportWidth,
        "show-close": !0,
        class: "dialog-grid dialog-form",
        "body-class": "pdf-popup",
        "append-to-body": "",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "destroy-on-close": !0
      }, {
        header: r(({ close: E, titleId: W, titleClass: te }) => [
          $("span", sb, [
            d(s, { "icon-name": "icon-pdf" }),
            t[8] || (t[8] = I(" Report Preview ", -1))
          ])
        ]),
        default: r(() => [
          e.pdfUrl ? (n(), v("iframe", {
            key: 0,
            ref: "pdfFrame",
            src: e.pdfUrl,
            style: le([{ width: "100%", "min-height": "400px" }, `height: ${e.scrollerHeight}px`]),
            class: "pdf-viewer",
            frameborder: "0"
          }, null, 12, rb)) : b("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "width"])
    ])) : b("", !0),
    e.showDownloadPopupFlag ? (n(), v("div", db, [
      d(w, {
        title: e.popupDownloadName,
        modelValue: e.showDownloadPopupFlag,
        "onUpdate:modelValue": t[3] || (t[3] = (E) => e.showDownloadPopupFlag = E),
        width: e.popupWidthdefault,
        "show-close": !0,
        class: "dialog-grid dialog-form",
        onClose: e.handleClose,
        "append-to-body": "",
        "close-on-click-modal": e.backdrop,
        "close-on-press-escape": !0,
        "destroy-on-close": !0
      }, {
        default: r(() => [
          t[9] || (t[9] = I(" Download click here => ", -1)),
          e.showFile ? (n(), h(V, {
            key: 0,
            type: "primary",
            href: e.downloadPath,
            target: "_blank"
          }, {
            default: r(() => [
              d(m, { class: "mr-1" }, {
                default: r(() => [
                  d(T)
                ]),
                _: 1
              }),
              I(" " + A(e.fullName), 1)
            ]),
            _: 1
          }, 8, ["href"])) : b("", !0)
        ]),
        _: 1
      }, 8, ["title", "modelValue", "width", "onClose", "close-on-click-modal"])
    ])) : b("", !0)
  ], 64);
}
const Qw = /* @__PURE__ */ U(lb, [["render", ub], ["__scopeId", "data-v-f058c5ae"]]), pb = O({
  name: "SdUiCarousel",
  components: {},
  props: {
    formId: {
      type: String,
      required: !0
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    dataProvider: {
      type: Object,
      default: null
    },
    parentId: {
      type: String,
      default: ""
    },
    params: {
      type: Object,
      default: {}
    },
    detailMaxRow: {
      type: Number,
      default: 2
    },
    interval: {
      type: Number,
      default: 3e3
    },
    indicatorPosition: {
      type: String,
      default: ""
    },
    trigger: {
      type: String,
      default: "click"
    },
    iconField: {
      type: String,
      default: ""
    },
    titleContent: {
      type: String,
      default: ""
    },
    titleField: {
      type: String,
      default: ""
    },
    detailContent: {
      type: String,
      default: ""
    },
    limitRow: {
      type: Number,
      default: 30
    },
    typeCard: {
      type: Boolean,
      default: !1
    },
    motionBlur: {
      type: Boolean,
      default: !1
    },
    autoplay: {
      type: Boolean,
      default: !0
    },
    verticalEnable: {
      type: Boolean,
      default: !1
    },
    totalEnable: {
      type: Boolean,
      default: !0
    },
    titleEnable: {
      type: Boolean,
      default: !0
    },
    iconName: {
      type: String,
      default: ""
    },
    titleName: {
      type: String,
      default: ""
    },
    height: {
      type: String,
      default: "200px"
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    parentPath: {
      type: String,
      default: ""
    },
    enableWs: {
      type: Boolean,
      default: !0
    },
    userState: {
      type: Object,
      required: !0
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    clickEvent: {
      type: Function
    },
    customValue: {
      type: Array,
      default: void 0
    }
  },
  data() {
    return {
      keyId: "_id",
      rowKey: "dataid",
      inputType: ["picture-upload-input", "crop-upload-input"],
      rawData: [],
      total: 0,
      totalPage: 0,
      offset: 0,
      defaultParams: {},
      searchText: "",
      noMore: !1,
      preLoading: !1,
      showPopupFlag: !1,
      backdrop: !1,
      apiUrl: "",
      sdformModel: {},
      formData: {},
      formReadOnly: !1,
      optionData: {},
      isInsert: !0,
      selectIndex: 0,
      afterDeleteForm: void 0,
      titleNameForm: "",
      iconForm: "",
      allowInsert: !1,
      page: 1,
      limit: this.limitRow,
      optionProvider: { limit: this.limitRow, page: 1 },
      useUserState: this.$props.userState,
      dpFormData: { providerId: this.formId, providerType: fe.FORM },
      wsConn: void 0,
      widgetId: "SdUiCarousel-" + Ut(),
      isFormEnable: this.providerType === "FORM",
      loadEnable: !1,
      defaultParentId: this.parentId,
      defaultWhere: this.dataProvider && this.dataProvider.options && this.dataProvider.options.where ? this.dataProvider.options.where : ""
    };
  },
  watch: {
    params: {
      deep: !0,
      handler(e) {
        e && (e.xparentx && e._id ? delete e.xparentx : this.parentPath ? e[this.parentPath] && (e.xparentx = e[this.parentPath], this.changeParentId(e[this.parentPath])) : delete e.xparentx, this.defaultParams = { ...this.defaultParams, ...e });
      }
    },
    parentId: {
      deep: !0,
      handler(e) {
        this.changeParentId(e);
      }
    }
  },
  computed: {
    htmlValue() {
      return (e, t) => {
        let a = {}, l = this.sdformModel.form_db.schema;
        for (const o in l) {
          let i = pe(t, o);
          a[`{{${o}}}`] = Ee(i, o, this.sdformModel);
        }
        if (this.customValue) {
          for (const o in this.customValue)
            if (this.customValue[o]) {
              let i = this.customValue[o];
              if (i.expressions)
                try {
                  const u = `return ${ue(i.expressions, a)}`, m = new Function("row", ..._e, u);
                  a[`{{${i.fieldName}}}`] = m.call(this.sdformModel, t);
                } catch (s) {
                  a[`{{${i.fieldName}}}`] = s;
                }
              else
                a[`{{${i.fieldName}}}`] = "";
            }
        }
        return Rt(ue(e, a));
      };
    },
    getParentFormId() {
      return this.sdformModel && this.sdformModel.joiner_field && this.sdformModel.joiner_field.joiner_enable && this.sdformModel.joiner_field.form_id ? this.sdformModel.joiner_field.form_id.value : null;
    }
  },
  created() {
    this.apiUrl = "";
  },
  setup(e, t) {
    return {
      formRef: q()
    };
  },
  unmounted() {
    this.wsConn?.wsDisconnect();
  },
  async mounted() {
    if (!this.buildState)
      if (this.providerType === "SQL")
        this.initSQL(), this.loadEnable = !0;
      else if (this.userState.formStore[this.formId])
        this.initForm(this.userState.formStore[this.formId]), this.loadEnable = !0;
      else if (this.useUserState.user) {
        const e = await $e(this.formId, this.useUserState);
        e.response && e.data ? (this.initForm(e.data), this.loadEnable = !0) : B.warning(e.message);
      } else
        B.warning("Unauthorized");
  },
  methods: {
    changeParentId(e) {
      this.defaultParentId = e, this.defaultParams.xparentx = this.defaultParentId, this.params.xparentx = this.defaultParentId, this.dpFormData.params.xparentx = this.defaultParentId, this.dpFormData.options || (this.dpFormData.options = {});
      let t = !1;
      e ? (t = !0, this.defaultWhere ? this.dpFormData.options.where = this.defaultWhere + " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')") : (this.defaultWhere !== this.dpFormData.options.where && (t = !0), this.dpFormData.options.where = this.defaultWhere), t && this.handleRefresh();
    },
    initSQL() {
      this.fixApiUrl && this.fixApiUrl != "" && (this.apiUrl = this.fixApiUrl), this.titleName && (this.titleNameForm = this.titleName), this.dataProvider ? this.dpFormData = P(this.dataProvider) : this.dpFormData = { providerId: this.formId, providerType: this.providerType }, this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider;
      const e = P(this.dpFormData.params), t = P(this.params);
      this.defaultParams = { ...t, ...e }, this.dpFormData.params = P(this.defaultParams), this.getDataList();
    },
    initForm(e) {
      this.searchText = "", this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Oe(this.sdformModel, this.userState.user)), this.sdformModel.form_event.after_delete && this.sdformModel.form_event.enable && (this.afterDeleteForm = new Function("formData", ..._e, this.sdformModel.form_event.after_delete)), this.iconName || (this.iconForm = "", this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = ""), this.titleName ? this.titleNameForm = this.titleName : this.titleNameForm = this.sdformModel.form_name ? `${this.sdformModel.form_name}` : "", this.dataProvider ? this.dpFormData = P(this.dataProvider) : (this.dpFormData.providerId = this.formId, this.dpFormData.providerType = fe.FORM), this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.parentId != "" && (this.params.xparentx = this.parentId, this.dpFormData.options && this.dpFormData.options.where ? this.dpFormData.options.where += " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')");
      const t = P(this.dpFormData.params), a = P(this.params);
      this.defaultParams = { ...a, ...t }, this.dpFormData.params = P(this.defaultParams), this.dpFormData.options.orderBy || (this.dpFormData.options.orderBy = [{ column: "created_at", sort: ge.DESC }]), this.getDataList(), this.enableWs && this.sdformModel.form_options && this.sdformModel.form_options.enable_websocket && (this.wsConn = this.userState.connectWebSocket("gridform", this.sdformModel.dataid, this.widgetId, (l) => {
        if (l.from != "server" && (l.from != this.userState.user?.username || l.params && l.params.widget && l.params.widget !== this.widgetId)) {
          let o = -1;
          const i = P(l.data);
          l.params && P(l.params), o = this.keyIdIndex(i._id), l.method == "insert" ? qa(this.sdformModel, i, this.useUserState.user) && (this.total = this.total + 1, this.totalPage = this.totalPage + 1, this.rawData.push(i)) : l.method == "update" ? o >= 0 && (this.rawData[o] = i) : l.method == "delete" && o >= 0 && (this.rawData.splice(o, 1), this.total = this.total - 1, this.totalPage = this.totalPage - 1);
        }
      }));
    },
    keyIdIndex(e) {
      let t = this.keyId;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    rowKeyIndex(e) {
      let t = this.rowKey;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    async getDataList(e) {
      this.preLoading = !0;
      const t = this.total === 0, a = await at(this.dpFormData, t, this.useUserState);
      if (a.response) {
        if (a.data && a.data.data) {
          const l = P(a.data.data);
          this.rawData = l, this.offset = a.data.offset, this.totalPage = l.length, this.totalPage > 0 ? this.offset + 1 : this.offset, this.total = this.totalPage, this.noMore = !0, e && e(this.rawData);
        }
        this.preLoading = !1;
      } else
        B.warning(a.message), this.preLoading = !1;
    },
    handleRefresh() {
      this.optionProvider.page = 1, this.optionProvider.fileter = null, this.dpFormData.params = this.defaultParams, this.searchText = "", this.total = 0, this.page = 1, this.noMore = !1, this.dpFormData.params.q && delete this.dpFormData.params.q, this.getDataList();
    },
    async refreshData() {
      this.noMore = !1, await this.getDataList();
    },
    handleClick(e, t) {
      this.isInsert = !1, this.selectIndex = t, this.clickEvent && this.clickEvent(e, t);
    },
    getValue(e, t) {
      let a = pe(e, t);
      return a ? Ee(a, t, this.sdformModel) : "";
    },
    getSchema(e) {
      return this.sdformModel.form_db.schema[e];
    },
    getImage(e, t) {
      if (!t)
        return;
      let a = this.getSchema(t);
      if (a && a.component)
        return this.inputType.includes(a.component) && e[t] ? Object.keys(e[t]).length > 0 && e[t][0] ? e[t][0].url ? e[t][0].url : e[t][0] : Object.keys(e[t]).length > 0 && e[t].url ? e[t].url : e[t] : void 0;
    },
    getDatetime(e) {
      return e ? we(e).format("DD/MM/YYYY HH:mm") : "";
    },
    totalLabel() {
      return this.total.toLocaleString();
    },
    convertHexToRgba(e, t = 1) {
      return Ua(e, t);
    }
    // groupCheck(rawData: any) {
    // 	const gvalue = this.getValue(rawData, this.groupField);
    // 	if (this.groupItems.includes(gvalue)) {
    // 		return false;
    // 	} else {
    // 		this.groupItems.push(gvalue);
    // 		return true;
    // 	}
    // },
  }
}), mb = { class: "list-title" }, hb = {
  key: 0,
  class: "text-5"
}, fb = {
  key: 3,
  style: { "font-size": "12px", "font-weight": "300" }
}, cb = { style: { position: "relative" } }, bb = { class: "el-image__error" }, gb = {
  key: 1,
  class: "img-content"
}, yb = ["innerHTML"], vb = ["innerHTML"], wb = { class: "text-card" }, Sb = { style: { "text-align": "center" } }, Fb = ["innerHTML"], _b = ["innerHTML"];
function kb(e, t, a, l, o, i) {
  const s = Ze, u = ve, m = X("Loading"), f = qe, c = X("Picture"), F = Vt, D = ha, g = We, C = Gi, _ = Ki;
  return n(), v(L, null, [
    $("div", mb, [
      e.titleEnable ? (n(), v("span", hb, [
        e.iconForm != "" ? (n(), h(s, {
          key: 0,
          "svg-data": e.iconForm
        }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h(u, {
          key: 1,
          "icon-name": e.iconName
        }, null, 8, ["icon-name"])) : (n(), h(u, {
          key: 2,
          "icon-name": "icon-sdform"
        })),
        I(" " + A(e.titleNameForm) + " ", 1),
        e.totalEnable ? (n(), v("span", fb, " ( " + A(e.totalLabel()) + " )", 1)) : b("", !0)
      ])) : b("", !0),
      e.preLoading ? (n(), h(f, {
        key: 1,
        class: "is-loading ml-1"
      }, {
        default: r(() => [
          d(m)
        ]),
        _: 1
      })) : b("", !0)
    ]),
    e.noMore ? (n(), h(_, {
      key: 0,
      class: "carousel-box",
      "indicator-position": e.indicatorPosition,
      motionBlur: e.motionBlur,
      interval: e.interval,
      autoplay: !!e.autoplay,
      direction: e.verticalEnable ? "vertical" : "horizontal",
      type: e.typeCard ? "card" : void 0,
      trigger: e.trigger,
      height: e.height
    }, {
      default: r(() => [
        (n(!0), v(L, null, J(e.rawData, (p, y) => (n(), v(L, {
          key: p._id
        }, [
          e.iconField ? (n(), h(C, {
            key: 0,
            class: Y(["carousel-img", { "event-enable": !!e.clickEvent }]),
            onClick: (S) => e.handleClick(p, y)
          }, {
            default: r(() => [
              $("div", cb, [
                e.iconField ? (n(), h(F, {
                  key: 0,
                  style: le(`width: 100%; height: ${e.height}`),
                  src: e.getImage(p, e.iconField),
                  fit: "cover"
                }, {
                  error: r(() => [
                    $("div", bb, [
                      d(f, { style: { "font-size": "50px" } }, {
                        default: r(() => [
                          d(c)
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 8, ["style", "src"])) : b("", !0),
                e.titleField || e.titleContent || e.detailContent ? (n(), v("div", gb, [
                  $("div", null, [
                    d(g, {
                      class: "body-title",
                      truncated: ""
                    }, {
                      default: r(() => [
                        e.titleField ? (n(), h(D, {
                          key: 0,
                          "sdform-model": e.sdformModel,
                          "field-name": e.titleField,
                          "field-setting": e.getSchema(e.titleField),
                          "raw-data": p,
                          "user-state": e.userState
                        }, null, 8, ["sdform-model", "field-name", "field-setting", "raw-data", "user-state"])) : (n(), v("span", {
                          key: 1,
                          innerHTML: e.htmlValue(e.titleContent, p)
                        }, null, 8, yb))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  e.detailContent ? (n(), h(g, {
                    key: 0,
                    "line-clamp": e.detailMaxRow
                  }, {
                    default: r(() => [
                      e.detailContent ? (n(), v("span", {
                        key: 0,
                        innerHTML: e.htmlValue(e.detailContent, p)
                      }, null, 8, vb)) : b("", !0)
                    ]),
                    _: 2
                  }, 1032, ["line-clamp"])) : b("", !0)
                ])) : b("", !0)
              ])
            ]),
            _: 2
          }, 1032, ["class", "onClick"])) : (n(), h(C, {
            key: 1,
            class: Y(["carousel-text", { "event-enable": !!e.clickEvent }]),
            onClick: (S) => e.handleClick(p, y)
          }, {
            default: r(() => [
              $("div", wb, [
                $("div", null, [
                  $("div", Sb, [
                    d(g, {
                      class: "body-title",
                      truncated: ""
                    }, {
                      default: r(() => [
                        e.titleField ? (n(), h(D, {
                          key: 0,
                          "sdform-model": e.sdformModel,
                          "field-name": e.titleField,
                          "field-setting": e.getSchema(e.titleField),
                          "raw-data": p,
                          "user-state": e.userState
                        }, null, 8, ["sdform-model", "field-name", "field-setting", "raw-data", "user-state"])) : (n(), v("span", {
                          key: 1,
                          innerHTML: e.htmlValue(e.titleContent, p)
                        }, null, 8, Fb))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  e.detailContent ? (n(), h(g, {
                    key: 0,
                    "line-clamp": e.detailMaxRow
                  }, {
                    default: r(() => [
                      e.detailContent ? (n(), v("span", {
                        key: 0,
                        innerHTML: e.htmlValue(e.detailContent, p)
                      }, null, 8, _b)) : b("", !0)
                    ]),
                    _: 2
                  }, 1032, ["line-clamp"])) : b("", !0)
                ])
              ])
            ]),
            _: 2
          }, 1032, ["class", "onClick"]))
        ], 64))), 128))
      ]),
      _: 1
    }, 8, ["indicator-position", "motionBlur", "interval", "autoplay", "direction", "type", "trigger", "height"])) : b("", !0)
  ], 64);
}
const Zw = /* @__PURE__ */ U(pb, [["render", kb], ["__scopeId", "data-v-d3d3ab7d"]]), Cb = O({
  name: "SdUiMenu",
  components: {},
  props: {
    formId: {
      type: String,
      required: !0
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    dataProvider: {
      type: Object,
      default: null
    },
    parentId: {
      type: String,
      default: ""
    },
    params: {
      type: Object,
      default: {}
    },
    trigger: {
      type: String,
      default: "click"
    },
    iconField: {
      type: String,
      default: ""
    },
    labelField: {
      type: String,
      default: ""
    },
    pathField: {
      type: String,
      default: ""
    },
    roleField: {
      type: String,
      default: ""
    },
    subMenuField: {
      type: String,
      default: ""
    },
    subMenuPrefix: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    bgColor: {
      type: String,
      default: ""
    },
    borderColor: {
      type: String,
      default: ""
    },
    defaultActive: {
      type: String,
      default: ""
    },
    menuWidth: {
      type: Number,
      default: 250
    },
    expandHeight: {
      type: Number,
      default: 59
    },
    top: {
      type: Number
    },
    left: {
      type: Number
    },
    limitRow: {
      type: Number,
      default: 1e3
    },
    marginTop: {
      type: Number,
      default: 0
    },
    borderDisable: {
      type: Boolean,
      default: !1
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    classInteraction: {
      type: String,
      default: ""
    },
    userState: {
      type: Object,
      required: !0
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    uniqueOpened: {
      type: Boolean,
      default: !1
    },
    expandEnable: {
      type: Boolean,
      default: !0
    },
    fixedEnable: {
      type: Boolean,
      default: !0
    },
    parentPath: {
      type: String,
      default: ""
    },
    expandDefault: {
      type: String,
      default: "expand"
    },
    clickEvent: {
      type: Function
    },
    customValue: {
      type: Array,
      default: void 0
    }
  },
  data() {
    return {
      resizeCleanup: null,
      keyId: "_id",
      rowKey: "dataid",
      inputType: ["picture-upload-input", "crop-upload-input"],
      rawData: [],
      total: 0,
      totalPage: 0,
      offset: 0,
      defaultParams: {},
      searchText: "",
      noMore: !1,
      preLoading: !1,
      showPopupFlag: !1,
      backdrop: !1,
      apiUrl: "",
      sdformModel: {},
      formData: {},
      formReadOnly: !1,
      optionData: {},
      isInsert: !0,
      selectIndex: 0,
      afterDeleteForm: void 0,
      titleNameForm: "",
      iconForm: "",
      allowInsert: !1,
      page: 1,
      router: Oo(),
      route: No(),
      limit: this.limitRow,
      optionProvider: { limit: this.limitRow, page: 1 },
      useUserState: this.$props.userState,
      dpFormData: { providerId: this.formId, providerType: fe.FORM },
      wsConn: void 0,
      isFormEnable: this.providerType === "FORM",
      scrollerHeight: 0,
      isCollapse: this.expandDefault === "collapse",
      loadEnable: !1,
      menuWidthOnexpand: this.isCollapse ? 64 : this.menuWidth,
      defaultParentId: this.parentId,
      defaultWhere: this.dataProvider && this.dataProvider.options && this.dataProvider.options.where ? this.dataProvider.options.where : ""
    };
  },
  watch: {
    params: {
      deep: !0,
      handler(e) {
        e && (e.xparentx && e._id ? delete e.xparentx : this.parentPath ? e[this.parentPath] && (e.xparentx = e[this.parentPath], this.changeParentId(e[this.parentPath])) : delete e.xparentx, this.defaultParams = { ...this.defaultParams, ...e });
      }
    },
    parentId: {
      deep: !0,
      handler(e) {
        this.changeParentId(e);
      }
    }
  },
  computed: {
    htmlValue() {
      return (e, t) => {
        let a = {}, l = this.sdformModel.form_db.schema;
        for (const o in l) {
          let i = pe(t, o);
          a[`{{${o}}}`] = Ee(i, o, this.sdformModel);
        }
        if (this.customValue) {
          for (const o in this.customValue)
            if (this.customValue[o]) {
              let i = this.customValue[o];
              if (i.expressions)
                try {
                  const u = `return ${ue(i.expressions, a)}`, m = new Function("row", ..._e, u);
                  a[`{{${i.fieldName}}}`] = m.call(this.sdformModel, t);
                } catch (s) {
                  a[`{{${i.fieldName}}}`] = s;
                }
              else
                a[`{{${i.fieldName}}}`] = "";
            }
        }
        return Rt(ue(e, a));
      };
    },
    getParentFormId() {
      return this.sdformModel && this.sdformModel.joiner_field && this.sdformModel.joiner_field.joiner_enable && this.sdformModel.joiner_field.form_id ? this.sdformModel.joiner_field.form_id.value : null;
    }
  },
  created() {
    if (this.apiUrl = "", this.expandEnable) {
      let e = window.localStorage.getItem("side_menu_" + this.formId);
      e ? this.isCollapse = e == "true" : window.localStorage.setItem("side_menu_" + this.formId, String(this.isCollapse)), this.isCollapse ? this.menuWidthOnexpand = 64 : this.menuWidthOnexpand = this.menuWidth;
    }
  },
  setup(e, t) {
    return {
      formRef: q()
    };
  },
  unmounted() {
    this.wsConn?.wsDisconnect();
  },
  beforeUnmount() {
    if (this.resizeCleanup?.(), this.classInteraction) {
      const e = this.$el.parentNode.offsetParent.offsetParent.querySelector(`.${this.classInteraction}`);
      e && (e.style.marginLeft = "0px");
    }
  },
  async mounted() {
    if (this.scrollerHeight = window.innerHeight - this.marginTop, this.resizeCleanup = Pe(() => {
      this.$nextTick(() => {
        this.scrollerHeight = window.innerHeight - this.marginTop;
      });
    }), !this.buildState)
      if (this.providerType === "SQL")
        this.initSQL(), this.loadEnable = !0;
      else if (this.userState.formStore[this.formId])
        this.initForm(this.userState.formStore[this.formId]), this.loadEnable = !0;
      else if (this.useUserState.user) {
        const e = await $e(this.formId, this.useUserState);
        e.response && e.data ? (this.initForm(e.data), this.loadEnable = !0) : B.warning(e.message);
      } else
        B.warning("Unauthorized");
    if (this.classInteraction) {
      const e = this.$el.parentNode.offsetParent.offsetParent.querySelector(`.${this.classInteraction}`);
      e && (e.style.marginLeft = `${this.menuWidthOnexpand}px`);
    }
  },
  methods: {
    changeParentId(e) {
      this.defaultParentId = e, this.defaultParams.xparentx = this.defaultParentId, this.params.xparentx = this.defaultParentId, this.dpFormData.params.xparentx = this.defaultParentId, this.dpFormData.options || (this.dpFormData.options = {});
      let t = !1;
      e ? (t = !0, this.defaultWhere ? this.dpFormData.options.where = this.defaultWhere + " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')") : (this.defaultWhere !== this.dpFormData.options.where && (t = !0), this.dpFormData.options.where = this.defaultWhere), t && this.handleRefresh();
    },
    initSQL() {
      this.fixApiUrl && this.fixApiUrl != "" && (this.apiUrl = this.fixApiUrl), this.dataProvider ? this.dpFormData = P(this.dataProvider) : this.dpFormData = { providerId: this.formId, providerType: this.providerType }, this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider;
      const e = P(this.dpFormData.params), t = P(this.params);
      this.defaultParams = { ...t, ...e }, this.dpFormData.params = P(this.defaultParams), this.getDataList();
    },
    initForm(e) {
      this.searchText = "", this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Oe(this.sdformModel, this.userState.user)), this.sdformModel.form_event.after_delete && this.sdformModel.form_event.enable && (this.afterDeleteForm = new Function("formData", ..._e, this.sdformModel.form_event.after_delete)), this.dataProvider ? this.dpFormData = P(this.dataProvider) : (this.dpFormData.providerId = this.formId, this.dpFormData.providerType = fe.FORM), this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.parentId != "" && (this.params.xparentx = this.parentId, this.dpFormData.options && this.dpFormData.options.where ? this.dpFormData.options.where += " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')");
      const t = P(this.dpFormData.params), a = P(this.params);
      this.defaultParams = { ...a, ...t }, this.dpFormData.params = P(this.defaultParams), this.dpFormData.options.orderBy || (this.dpFormData.options.orderBy = [{ column: "created_at", sort: ge.DESC }]), this.getDataList();
    },
    keyIdIndex(e) {
      let t = this.keyId;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    rowKeyIndex(e) {
      let t = this.rowKey;
      return this.rawData.findIndex((l) => l[t] === e);
    },
    async getDataList(e) {
      this.preLoading = !0;
      const t = this.total === 0, a = await at(this.dpFormData, t, this.useUserState);
      if (a.response) {
        if (a.data && a.data.data) {
          const l = P(a.data.data);
          this.rawData = l, this.offset = a.data.offset, this.totalPage = l.length, this.totalPage > 0 ? this.offset + 1 : this.offset, this.total = this.totalPage, this.noMore = !0, e && e(this.rawData);
        }
        this.preLoading = !1;
      } else
        B.warning(a.message), this.preLoading = !1;
    },
    handleRefresh() {
      this.optionProvider.page = 1, this.optionProvider.fileter = null, this.dpFormData.params = this.defaultParams, this.searchText = "", this.total = 0, this.page = 1, this.noMore = !1, this.dpFormData.params.q && delete this.dpFormData.params.q, this.getDataList();
    },
    async refreshData() {
      this.noMore = !1, await this.getDataList();
    },
    handleClick(e, t, a = !1) {
      this.isInsert = !1, this.selectIndex = t, this.clickEvent ? this.clickEvent(e, t) : a ? this.pathField && this.subMenuPrefix && e[`${this.subMenuPrefix}${this.pathField}`] && this.router.push(e[`${this.subMenuPrefix}${this.pathField}`]) : this.pathField && e[this.pathField] && this.router.push(e[this.pathField]);
    },
    expandClick(e) {
      if (this.isCollapse ? this.isCollapse = !1 : this.isCollapse = !0, this.isCollapse ? this.menuWidthOnexpand = 64 : this.menuWidthOnexpand = this.menuWidth, this.classInteraction) {
        const t = this.$el.parentNode.offsetParent.offsetParent.querySelector(`.${this.classInteraction}`);
        t && (t.style.marginLeft = `${this.menuWidthOnexpand}px`);
      }
      window.localStorage.setItem("side_menu_" + this.formId, String(this.isCollapse));
    },
    getValue(e, t) {
      let a = pe(e, t);
      return a ? Ee(a, t, this.sdformModel) : "";
    },
    getSchema(e) {
      return this.sdformModel.form_db.schema[e];
    },
    getImage(e, t) {
      if (!t)
        return;
      let a = this.getSchema(t);
      if (a && a.component)
        return this.inputType.includes(a.component) && e[t] ? Object.keys(e[t]).length > 0 && e[t][0] ? e[t][0].url ? e[t][0].url : e[t][0] : Object.keys(e[t]).length > 0 && e[t].url ? e[t].url : e[t] : void 0;
    },
    getDatetime(e) {
      return e ? we(e).format("DD/MM/YYYY HH:mm") : "";
    },
    totalLabel() {
      return this.total.toLocaleString();
    },
    convertHexToRgba(e, t = 1) {
      return Ua(e, t);
    }
    // groupCheck(rawData: any) {
    // 	const gvalue = this.getValue(rawData, this.groupField);
    // 	if (this.groupItems.includes(gvalue)) {
    // 		return false;
    // 	} else {
    // 		this.groupItems.push(gvalue);
    // 		return true;
    // 	}
    // },
  }
}), Db = { key: 0 }, Ib = {
  key: 1,
  class: "menu-label"
}, $b = {
  key: 1,
  class: "menu-label"
}, Tb = {
  key: 1,
  class: "menu-label"
};
function Pb(e, t, a, l, o, i) {
  const s = ve, u = Ji, m = Pa, f = Xi, c = Yi, F = Do, D = Ao("can");
  return n(), v(L, null, [
    d(F, {
      class: "menu-wrapper",
      height: `${e.fixedEnable ? `${e.scrollerHeight}px` : ""} `,
      style: le(`position: ${e.fixedEnable ? "fixed" : "inherit"}; ${e.top !== void 0 ? `top: ${e.top}px;` : ""} ${e.left !== void 0 ? `left: ${e.left}px;` : ""}`)
    }, {
      default: r(() => [
        d(c, {
          class: "side-menu",
          style: le(`width: ${e.fixedEnable ? `${e.menuWidthOnexpand}px` : ""}; 
			min-height: ${e.fixedEnable ? `${e.scrollerHeight}px` : ""}; 
			${e.borderDisable ? "border: inherit;" : ""}
			${e.bgColor ? `background-color: ${e.bgColor};` : ""} ${e.borderColor ? `border-color: ${e.borderColor};` : ""}`),
          collapse: e.isCollapse,
          "collapse-transition": !1,
          "unique-opened": e.uniqueOpened,
          router: !1,
          "default-active": e.defaultActive || e.route.fullPath,
          "text-color": e.textColor || void 0,
          "menu-trigger": e.trigger
        }, {
          default: r(() => [
            e.expandEnable ? (n(), v("div", Db, [
              d(u, {
                class: "menu-expand",
                style: le(`height: ${e.expandHeight}px;`),
                index: "xexpandx",
                onClick: e.expandClick
              }, {
                default: r(() => [
                  e.isCollapse ? (n(), h(s, {
                    key: 0,
                    "icon-name": "el-expand"
                  })) : (n(), h(s, {
                    key: 1,
                    "icon-name": "el-fold"
                  }))
                ]),
                _: 1
              }, 8, ["style", "onClick"]),
              d(m, {
                direction: "horizontal",
                style: le([{ margin: "0px" }, `${e.borderColor ? `border-color: ${e.borderColor};` : ""}`])
              }, null, 8, ["style"])
            ])) : b("", !0),
            (n(!0), v(L, null, J(e.rawData, (g, C) => (n(), v(L, {
              key: g._id
            }, [
              e.subMenuField && g[e.subMenuField] ? Ve((n(), h(f, {
                key: 0,
                index: e.pathField && g[e.pathField] ? g[e.pathField] : String(C),
                onClick: (_) => e.pathField && g[e.pathField] ? e.handleClick(g, +C) : void 0
              }, {
                title: r(() => [
                  e.iconField ? (n(), h(s, {
                    key: 0,
                    class: "menu-icon",
                    "icon-name": g[e.iconField]
                  }, null, 8, ["icon-name"])) : b("", !0),
                  e.labelField ? (n(), v("span", Ib, A(g[e.labelField]), 1)) : b("", !0)
                ]),
                default: r(() => [
                  (n(!0), v(L, null, J(g[e.subMenuField], (_, p) => Ve((n(), h(u, {
                    key: _._id,
                    class: "sub-menu-item",
                    index: e.pathField && e.subMenuPrefix && _[`${e.subMenuPrefix}${e.pathField}`] ? _[`${e.subMenuPrefix}${e.pathField}`] : String(C),
                    onClick: (y) => e.pathField && e.subMenuPrefix && _[`${e.subMenuPrefix}${e.pathField}`] ? e.handleClick(_, +p, !0) : void 0
                  }, {
                    default: r(() => [
                      e.iconField && e.subMenuPrefix ? (n(), h(s, {
                        key: 0,
                        class: "menu-icon",
                        "icon-name": _[`${e.subMenuPrefix}${e.iconField}`]
                      }, null, 8, ["icon-name"])) : b("", !0),
                      e.labelField && e.subMenuPrefix ? (n(), v("span", $b, A(_[`${e.subMenuPrefix}${e.labelField}`]), 1)) : b("", !0)
                    ]),
                    _: 2
                  }, 1032, ["index", "onClick"])), [
                    [
                      D,
                      e.roleField && e.subMenuPrefix && _[`${e.subMenuPrefix}${e.roleField}`] ? _[`${e.subMenuPrefix}${e.roleField}`] : ["user"],
                      void 0,
                      { any: !0 }
                    ]
                  ])), 128))
                ]),
                _: 2
              }, 1032, ["index", "onClick"])), [
                [
                  D,
                  e.roleField && g[e.roleField] ? g[e.roleField] : ["user"],
                  void 0,
                  { any: !0 }
                ]
              ]) : Ve((n(), h(u, {
                key: 1,
                class: "menu-item",
                index: e.pathField && g[e.pathField] ? g[e.pathField] : String(C),
                onClick: (_) => e.pathField && g[e.pathField] ? e.handleClick(g, +C) : void 0
              }, {
                default: r(() => [
                  e.iconField ? (n(), h(s, {
                    key: 0,
                    class: "menu-icon",
                    "icon-name": g[e.iconField]
                  }, null, 8, ["icon-name"])) : b("", !0),
                  e.labelField ? (n(), v("span", Tb, A(g[e.labelField]), 1)) : b("", !0)
                ]),
                _: 2
              }, 1032, ["index", "onClick"])), [
                [
                  D,
                  e.roleField && g[e.roleField] ? g[e.roleField] : ["user"],
                  void 0,
                  { any: !0 }
                ]
              ])
            ], 64))), 128))
          ]),
          _: 1
        }, 8, ["style", "collapse", "unique-opened", "default-active", "text-color", "menu-trigger"])
      ]),
      _: 1
    }, 8, ["height", "style"]),
    $("span", {
      style: le(`width: ${e.fixedEnable ? `${e.menuWidthOnexpand}px` : ""}; `)
    }, null, 4)
  ], 64);
}
const eS = /* @__PURE__ */ U(Cb, [["render", Pb]]), _i = zo(window);
_i.addHook("uponSanitizeAttribute", (e, t) => {
  /^(v-|:|@|#|\.)/.test(t.attrName) && (t.forceKeepAttr = !0);
});
const So = /* @__PURE__ */ new Map(), Fo = /* @__PURE__ */ new Map();
let tl = null;
function Mb() {
  return tl || (tl = import("@vue/compiler-dom")), tl;
}
const Vb = O({
  name: "SDCustomContent",
  emits: ["rendered"],
  props: {
    // HTML / Vue template string ที่จะ render
    content: {
      type: String,
      default: ""
    },
    // ตัวแปรสำหรับ binding — {{ name }}, v-for="i in list", v-if="ok"
    data: {
      type: Object,
      default: () => ({})
    },
    // context เพิ่มเติม (override data เมื่อ key ชนกัน) เช่น params จากฟอร์ม
    params: {
      type: Object,
      default: () => ({})
    },
    // state zone — reactive bag ของ host widget (เช่น vue-ui.vueState)
    // host ยัด data/function/instance อะไรก็ได้ แล้ว template เข้าถึงตรงๆ (live, reactive — push/assign แล้ว re-render เอง)
    // แยกจาก params เพื่อให้ host เก็บ reference สดได้โดยไม่ต้อง spread (กัน reactivity ขาด + ไม่ copy ทุก render)
    state: {
      type: Object,
      default: () => ({})
    },
    // widget component เพิ่มเติมที่ไม่ได้ register global (el-* ไม่ต้องส่ง)
    components: {
      type: Object,
      default: () => ({})
    },
    // เปิด DOMPurify sanitize
    sanitize: {
      type: Boolean,
      default: !0
    },
    // true = โชว์ error detail เต็ม (builder/dev debug) · false = โชว์ errorFallbackText แทน (runtime/end-user)
    showErrorDetail: {
      type: Boolean,
      default: !0
    },
    // ข้อความนุ่มๆ ที่ end-user เห็นตอน widget error (ใช้เมื่อ showErrorDetail = false)
    errorFallbackText: {
      type: String,
      default: "Unable to display this content"
    }
  },
  data() {
    return {
      dynamicComp: null,
      error: ""
    };
  },
  computed: {
    // กัน "ฟอร์มขาวทั้งหน้า": scope proxy ใช้ `key in obj` กับ data/params/state
    // ถ้า designer ส่ง primitive (เช่น this.vueState = 'x' / 123 / true) → `key in primitive` throw ทุก render
    // errorCaptured จับไม่ได้ (เกิดใน proxy ก่อน render) → ตรวจ type ที่นี่แล้วโชว์ error box แทน (บอกตรงว่า prop ไหนผิด)
    // null/undefined = ผ่าน (prop มี default {} อยู่แล้ว) ; array นับเป็น object → ผ่าน (ใช้ใน proxy ได้)
    scopeTypeError() {
      const e = (t, a) => a == null ? "" : typeof a != "object" ? `SDCustomContent: prop "${t}" ต้องเป็น object/array แต่ได้ ${typeof a} (${String(a).slice(0, 30)}) — ตรวจค่า vueState หรือ data/params ที่ส่งเข้า widget` : "";
      return e("data", this.data) || e("params", this.params) || e("state", this.state);
    }
  },
  watch: {
    content: "rebuild",
    sanitize: "rebuild"
  },
  created() {
    this.rebuild();
  },
  // จับ render error ของ inner dynamic component (เช่น identifier undefined, expression พัง) → แสดงกล่อง error เดียวกับ compile error
  // return false → กันไม่ให้ error ทะลุขึ้นไป crash ทั้งฟอร์ม
  errorCaptured(e) {
    return this.error = `SDCustomContent render error: ${e?.message || String(e)}`, this.dynamicComp = null, !1;
  },
  methods: {
    // แปลง self-closing custom element <el-x ... /> → <el-x ...></el-x> ก่อนเข้า DOMPurify
    // HTML parser (DOMPurify) ไม่รองรับ self-closing สำหรับ custom element (ไม่ใช่ void element)
    // ปล่อยไว้ → element ถัดไปถูก nest เข้าไปข้างใน → ปุ่ม/widget ซ้อนกัน
    // จับเฉพาะ tag ที่มี '-' ในชื่อ (custom element / el-*) — เว้น void html (br/img/input/hr ...)
    // regex รองรับ attr ที่มี > อยู่ใน quote (เช่น @click="a>b") ผ่านการ match string ก่อน
    normalizeSelfClosing(e) {
      return e.replace(/<([A-Z][\w-]*|[a-zA-Z][\w-]*-[\w-]*)((?:"[^"]*"|'[^']*'|[^'">])*?)\s*\/>/g, "<$1$2></$1>");
    },
    // sanitize template — เก็บ custom element (el-*, widget) + Vue directive attr ไว้
    sanitizeTemplate(e) {
      const t = Fo.get(e);
      if (t !== void 0) return t;
      const a = _i.sanitize(e, {
        // อนุญาต custom element ทั้งหมด (เป็น Vue component ที่ resolve ตอน runtime)
        CUSTOM_ELEMENT_HANDLING: {
          tagNameCheck: () => !0,
          attributeNameCheck: () => !0,
          allowCustomizedBuiltInElements: !0
        },
        // component ที่ชื่อไม่มีขีด (vue-flow: Handle/Panel) — DOMPurify ไม่นับเป็น custom element
        // (CUSTOM_ELEMENT regex บังคับมีขีด) → ไม่ใส่ตรงนี้ = โดนลบ tag ทิ้งเงียบๆ เหลือแต่ลูก
        ADD_TAGS: ["handle", "panel"],
        ADD_ATTR: ["target"]
      });
      return Fo.set(e, a), a;
    },
    // compile template string -> render function (ใช้ runtime ของแอปตัวเดียว ไม่สร้าง Vue ซ้ำ)
    async compileTemplate(e) {
      const t = So.get(e);
      if (t) return t;
      const { compile: a } = await Mb(), { code: l } = a(e, { mode: "function", hoistStatic: !0 }), o = new Function("Vue", l)(ln);
      return o._rc = !0, So.set(e, o), o;
    },
    // scope ที่ template มองเห็น — อ่านจาก props.data / props.params / props.state แบบ live
    // (อ่านตอน render → ถูก track เป็น reactive → ค่าเปลี่ยนแล้ว re-render เอง)
    // precedence เมื่อ key ชนกัน: params > state > data
    //   - params = system/formParams (สำคัญสุด ไม่ให้ zone ทับ identity/_id)
    //   - state  = zone ของ host widget (data/function/instance ที่ host ยัดเข้ามา)
    //   - data   = form model (ค่าฟิลด์)
    buildScopeProxy() {
      const e = this, t = (l) => {
        const o = (i) => i !== null && typeof i == "object" && l in i;
        return o(e.params) ? e.params[l] : o(e.state) ? e.state[l] : o(e.data) ? e.data[l] : void 0;
      }, a = (l) => typeof l == "string" && l[0] !== "_" && l[0] !== "$";
      return new Proxy(
        {},
        {
          get(l, o) {
            return t(o);
          },
          has(l, o) {
            return a(o);
          },
          // Vue render proxy เช็ค setup binding ด้วย hasOwn(setupState, key) = getOwnPropertyDescriptor (ไม่ใช่ operator `in`)
          // ต้อง implement เพื่อให้ {{ identifier }} / :bind ใน template resolve ผ่าน scope นี้ ไม่งั้นหลุดไป global → ReferenceError
          // หมายเหตุ: ตั้ง enumerable:false + ไม่ทำ ownKeys → กัน Vue dev (exposeSetupStateOnRenderContext) เดินวน key
          // ของ scope (รวม system keys _id/xsitex จาก formParams) จนเกิด warning ตอน render
          getOwnPropertyDescriptor(l, o) {
            if (a(o))
              return { enumerable: !1, configurable: !0, writable: !0, value: t(o) };
          }
        }
      );
    },
    // สร้าง dynamic component ใหม่เมื่อ content/sanitize เปลี่ยน (ไม่ rebuild ตอน data เปลี่ยน)
    async rebuild() {
      this.error = "";
      const e = this.normalizeSelfClosing(this.content || ""), t = this.sanitize ? this.sanitizeTemplate(e) : e;
      if (!t.trim()) {
        this.dynamicComp = null;
        return;
      }
      try {
        const a = await this.compileTemplate(t), l = this;
        this.dynamicComp = Po(
          O({
            name: "SDCustomContentInner",
            components: l.components,
            setup() {
              return l.buildScopeProxy();
            },
            render: a
          })
        ), this.$nextTick(() => this.$emit("rendered", this.getRefs()));
      } catch (a) {
        this.error = `SDCustomContent compile error: ${a?.message || String(a)}`, this.dynamicComp = null;
      }
    },
    // === helper: เข้าถึง ref ของ widget/tag ภายใน template ===
    // ใช้จาก host: <SDCustomContent ref="cc" /> แล้ว this.$refs.cc.getRef('myInput')
    // หมายเหตุ: เรียกได้หลัง render เสร็จ (ดัก event @rendered หรือรอ $nextTick)
    // inner component instance (ตัว render เนื้อหา) — เผื่อต้องการ low-level
    getInner() {
      return this.$refs.inner;
    },
    // get ref ตามชื่อที่เขียน ref="name" ใน template (คืน widget instance หรือ DOM element)
    getRef(e) {
      const t = this.$refs.inner;
      return t && t.$refs ? t.$refs[e] : void 0;
    },
    // get ทุก ref เป็น object { name: instance|element }
    getRefs() {
      const e = this.$refs.inner;
      return e && e.$refs ? e.$refs : {};
    },
    // get DOM element ของ ref — ถ้าเป็น component คืน $el, ถ้าเป็น DOM ref คืนตัวมันเอง
    getEl(e) {
      const t = this.getRef(e);
      if (t)
        return t.$el ?? t;
    }
  }
}), Eb = {
  key: 1,
  class: "sd-custom-content__error"
};
function Ab(e, t, a, l, o, i) {
  const s = la, u = X("WarningFilled"), m = qe, f = We;
  return e.dynamicComp && !e.scopeTypeError ? (n(), h(Ot(e.dynamicComp), {
    key: 0,
    ref: "inner"
  }, null, 512)) : e.error || e.scopeTypeError ? (n(), v("div", Eb, [
    e.showErrorDetail ? (n(), h(s, {
      key: 0,
      title: e.error || e.scopeTypeError,
      type: "error",
      closable: !1,
      "show-icon": ""
    }, null, 8, ["title"])) : (n(), h(f, {
      key: 1,
      type: "info"
    }, {
      default: r(() => [
        d(m, { class: "sd-custom-content__fallback-icon" }, {
          default: r(() => [
            d(u)
          ]),
          _: 1
        }),
        I(" " + A(e.errorFallbackText), 1)
      ]),
      _: 1
    }))
  ])) : b("", !0);
}
const Wa = /* @__PURE__ */ U(Vb, [["render", Ab], ["__scopeId", "data-v-6597befa"]]), Lb = O({
  name: "SdUiRecordView",
  components: {
    SDCustomContent: Wa
    // SdCrudPopupGrid,
    // SdValueWidget,
  },
  props: {
    formId: {
      type: String,
      required: !0
    },
    providerType: {
      type: String,
      default: "FORM"
    },
    blockUiFields: {
      type: Array,
      default: void 0
    },
    dataProvider: {
      type: Object,
      default: null
    },
    parentId: {
      type: String,
      default: ""
    },
    dataId: {
      type: String,
      default: ""
    },
    initData: {
      type: Object,
      default: {}
    },
    params: {
      type: Object,
      default: {}
    },
    column: {
      type: Number,
      default: 3
    },
    lastRecord: {
      type: Boolean,
      default: !0
    },
    blockEnable: {
      type: Boolean,
      default: !1
    },
    listViewBtnEnable: {
      type: Boolean,
      default: !1
    },
    listViewReadOnly: {
      type: Boolean,
      default: !1
    },
    borderEnable: {
      type: Boolean,
      default: !0
    },
    verticalEnable: {
      type: Boolean,
      default: !1
    },
    addBtnEnable: {
      type: Boolean,
      default: !0
    },
    updateBtnEnable: {
      type: Boolean,
      default: !0
    },
    delBtnEnable: {
      type: Boolean,
      default: !0
    },
    viewBtnEnable: {
      type: Boolean,
      default: !1
    },
    reloadBtnEnable: {
      type: Boolean,
      default: !0
    },
    actionEnable: {
      type: Boolean,
      default: !1
    },
    titleEnable: {
      type: Boolean,
      default: !0
    },
    iconName: {
      type: String,
      default: ""
    },
    titleName: {
      type: String,
      default: ""
    },
    subformWidth: {
      type: Number,
      default: 600
    },
    labelWidth: {
      type: String,
      default: ""
    },
    fixApiUrl: {
      type: String,
      default: ""
    },
    parentPath: {
      type: String,
      default: ""
    },
    enableWs: {
      type: Boolean,
      default: !0
    },
    userState: {
      type: Object,
      required: !0
    },
    buildState: {
      type: Boolean,
      default: !1
    },
    insertBefore: {
      type: Function
    },
    updateBefore: {
      type: Function
    },
    viewBefore: {
      type: Function
    },
    beforeSave: {
      type: Function
    },
    afterDelete: {
      type: Function
    },
    allowDeleteFunc: {
      type: Function
    },
    // === Custom Content mode ===
    // เปิดใช้ → render ผ่าน SDCustomContent (customContent) แทน el-descriptions
    customContentEnable: {
      type: Boolean,
      default: !1
    },
    // Vue template string สำหรับ SDCustomContent
    customContent: {
      type: String,
      default: ""
    },
    // true → widget render action footer ให้อัตโนมัติ · false → เขียนปุ่มเองใน template ผ่าน can/actions
    autoActionFooter: {
      type: Boolean,
      default: !0
    },
    // field name สำหรับ meta ใน auto footer (ผู้บันทึก / เวลา) — ว่าง = ไม่แสดง
    metaByField: {
      type: String,
      default: ""
    },
    metaTimeField: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isDark: de(),
      rawData: null,
      // footer meta tooltip — โชว์เฉพาะตอนข้อความถูกตัด (ellipsis) เท่านั้น
      byOverflow: !1,
      timeOverflow: !1,
      defaultParams: {},
      preLoading: !1,
      showPopupFlag: !1,
      showPopupGridFlag: !1,
      backdrop: !1,
      apiUrl: "",
      sdformModel: {},
      formData: {},
      formReadOnly: !1,
      optionData: {},
      isInsert: !0,
      recordId: this.dataId,
      titleNameForm: this.titleName,
      iconForm: "",
      limit: 1,
      optionProvider: { limit: 1, page: 1 },
      allowInsert: !1,
      useUserState: this.$props.userState,
      dpFormData: { providerId: this.formId, providerType: fe.FORM },
      wsConn: void 0,
      widgetId: "SdUiRecordView-" + Ut(),
      sdFunc: {},
      isFormEnable: this.providerType === "FORM",
      afterDeleteForm: void 0,
      defaultParentId: this.parentId,
      defaultWhere: this.dataProvider && this.dataProvider.options && this.dataProvider.options.where ? this.dataProvider.options.where : "",
      defaultWhereParent: ""
    };
  },
  watch: {
    params: {
      deep: !0,
      handler(e) {
        e && (e.xparentx && e._id ? delete e.xparentx : this.parentPath ? e[this.parentPath] && (e.xparentx = e[this.parentPath], this.changeParentId(e[this.parentPath])) : delete e.xparentx, this.defaultParams = { ...this.defaultParams, ...e });
      }
    },
    parentId: {
      deep: !0,
      handler(e) {
        this.changeParentId(e);
      }
    },
    dataId: {
      deep: !0,
      handler(e) {
        this.recordId = e, console.log("dataId", e), this.handleReload();
      }
    }
  },
  computed: {
    // จำนวน item ใน skeleton ให้ใกล้เคียงเนื้อหาจริง — อิงจำนวน field ที่จะแสดง (fallback 4)
    skeletonItemCount() {
      const e = Array.isArray(this.blockUiFields) ? this.blockUiFields.length : 0;
      return e > 0 ? e : 4;
    },
    htmlValue() {
      return (e, t, a) => {
        let l = {}, o = this.sdformModel.form_db.schema;
        for (const i in o) {
          let s = pe(t, i);
          l[`{{${i}}}`] = Ee(s, i, this.sdformModel);
        }
        if (a.expressions)
          try {
            const s = `return ${ue(a.expressions, l)}`, u = new Function("row", ..._e, s);
            l["{{expressions}}"] = u.call(this.sdformModel, t);
          } catch (i) {
            l["{{expressions}}"] = i;
          }
        else
          l["{{expressions}}"] = "";
        return Rt(ue(e, l));
      };
    },
    getParentFormId() {
      return this.sdformModel && this.sdformModel.joiner_field && this.sdformModel.joiner_field.joiner_enable && this.sdformModel.joiner_field.form_id ? this.sdformModel.joiner_field.form_id.value : null;
    },
    // === Custom Content scope ===
    // data = record ดิบ (reactive) → ใช้ {{ fieldName }} / v-if / v-for กับค่าจริงได้
    customData() {
      return this.rawData || {};
    },
    // params = context รอบนอก + helper + action API (params ชนะ data เมื่อ key ซ้ำ ตาม SDCustomContent)
    customParams() {
      return {
        ...this.params || {},
        userInfo: this.useUserState ? this.useUserState.user : null,
        recordId: this.recordId,
        hasData: !!this.rawData,
        row: this.rawData || {},
        // fmt('fieldName') → ค่าแสดงผลตาม schema (select→label, date format ฯลฯ)
        fmt: (t) => this.getValue(this.rawData, t),
        // fmtTime('fieldName') → ค่าเวลา format แบบไทยอ่านง่าย "6 มิ.ย. 69 · 13:34"
        fmtTime: (t) => this.fmtDateTime(this.getValue(this.rawData, t)),
        // actions.* → เรียก handler เดิม (เปิด popup form ตาม subFormOpen)
        actions: {
          add: () => this.handleAdd(),
          edit: () => this.handleUpdate(this.recordId),
          view: () => this.handleView(this.recordId),
          del: () => this.handleDelete(this.recordId),
          reload: () => this.handleReload(),
          listView: () => this.handleCrudGrid()
        },
        // can.* → ปุ่มควรโชว์ไหม (manual mode) — permission ล้วน + สถานะ record
        // ไม่ผูก btnEnable flags ของ auto footer เพราะ manual mode user เขียนปุ่มเอง
        can: {
          add: this.permAdd,
          edit: this.permEdit,
          view: this.permView,
          del: this.permDelete,
          reload: !!this.recordId,
          listView: !0
        }
      };
    },
    // permission + enable flags (ใช้ทั้ง auto footer และ scope can.*) — ตรงกับเงื่อนไขปุ่มในโหมด el-descriptions
    canAdd() {
      return !this.dataId && !this.rawData && !!this.addBtnEnable && !!this.allowInsert;
    },
    canEdit() {
      return !this.recordId || !this.rawData || !this.updateBtnEnable || !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : this.allowUpdate(this.sdformModel, this.rawData, this.useUserState.user);
    },
    canView() {
      return !this.recordId || !this.rawData || !this.viewBtnEnable || !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : this.allowView(this.sdformModel, this.rawData, this.useUserState.user);
    },
    canDelete() {
      return !this.recordId || !this.rawData || !this.delBtnEnable || !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : this.allowDelete(this.sdformModel, this.rawData, this.useUserState.user);
    },
    canReload() {
      return !!this.reloadBtnEnable && !!this.recordId;
    },
    canListView() {
      return !!this.listViewBtnEnable;
    },
    // gate ระดับ form — user เข้าถึง form นี้ได้ไหม (form_sharing: private/assign)
    // false → ซ่อนทั้ง record view (ไม่แสดง record + ปุ่มใด ๆ)
    // builder preview (buildState) ไม่ gate เพื่อให้ออกแบบเห็นผลได้เสมอ
    allowForm() {
      return this.buildState ? !0 : !this.sdformModel || !this.sdformModel.form_share || !this.useUserState.user ? !1 : Zt(this.sdformModel, this.useUserState.user);
    },
    // === permission ล้วน (สำหรับ can.* ใน manual footer) — ไม่ผูก btnEnable flags ===
    // เรียก dataXSharing สดทุกตัว (reactive ตาม user/record) — ไม่พึ่ง allowInsert ที่ set ครั้งเดียว
    permAdd() {
      return !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : Oe(this.sdformModel, this.useUserState.user);
    },
    permEdit() {
      return !this.recordId || !this.rawData || !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : this.allowUpdate(this.sdformModel, this.rawData, this.useUserState.user);
    },
    permView() {
      return !this.recordId || !this.rawData || !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : this.allowView(this.sdformModel, this.rawData, this.useUserState.user);
    },
    permDelete() {
      return !this.recordId || !this.rawData || !this.sdformModel || !this.sdformModel.dataid || !this.useUserState.user ? !1 : this.allowDelete(this.sdformModel, this.rawData, this.useUserState.user);
    },
    backdropForm() {
      return !!this.sdformModel.form_options?.backdrop;
    }
  },
  created() {
  },
  setup(e, t) {
    const a = q();
    return {
      subFormOpen: R("subFormOpen", void 0),
      formRef: a
    };
  },
  unmounted() {
    this.wsConn?.wsDisconnect();
  },
  async mounted() {
    if (this.apiUrl = "", !this.buildState)
      if (this.userState.formStore[this.formId])
        this.initForm(this.userState.formStore[this.formId]);
      else if (this.useUserState.user) {
        const e = await $e(this.formId, this.useUserState);
        e.response && e.data ? this.initForm(e.data) : B.warning(e.message);
      } else
        B.warning("Unauthorized");
    this.sdFunc = {
      subFormOpen: this.subFormOpen,
      handleCancel: this.handleCancel,
      handleUpdate: this.handleUpdate,
      handleAdd: this.handleAdd,
      handleView: this.handleView,
      userState: this.userState,
      params: this.params,
      ElMessage: B,
      sdformModel: this.sdformModel,
      wsConn: this.wsConn
    };
  },
  methods: {
    changeParentId(e) {
      this.defaultParentId = e, this.defaultParams.xparentx = this.defaultParentId, this.params.xparentx = this.defaultParentId, this.dpFormData.params.xparentx = this.defaultParentId, e ? this.defaultWhereParent = "xparentx = CONVERT(:xparentx, 'objectId')" : this.defaultWhereParent = "", this.recordId = "", this.handleReload();
    },
    handleAdd() {
      this.formData = { ...this.initData }, this.isInsert = !0, this.showPopupFlag = !0, this.backdrop = this.backdropForm, this.formReadOnly = !1, this.handlePopUpForm(), this.insertBefore && this.insertBefore(null);
    },
    handleUpdate(e) {
      this.isInsert = !1, this.showPopupFlag = !0, this.backdrop = this.backdropForm, this.formData = this.rawData, this.formReadOnly = !1, this.handlePopUpForm(), this.updateBefore && this.updateBefore(this.rawData);
    },
    handleDelete(e) {
      ye.confirm("Are you sure you want to remove this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (await Ha(this.sdformModel.dataid, e, this.useUserState)) {
          if (this.wsConn?.wsSend({ data: this.rawData, method: "delete", keyid: "_id", params: { widget: this.widgetId } }), this.afterDelete && this.afterDelete(this.rawData), this.sdformModel.form_event.enable && this.afterDeleteForm)
            try {
              this.afterDeleteForm.call(this.sdFunc, this.rawData);
            } catch (a) {
              B.error(a.message);
            }
          this.rawData = null, this.recordId = "", B.success("Delete completed.");
        } else
          B.warning("Unable to remove data");
      }).catch((t) => {
        console.log(t);
      });
    },
    handleView(e) {
      this.isInsert = !1, this.showPopupFlag = !0, this.backdrop = !0, this.formData = this.rawData, this.formReadOnly = !0, this.handlePopUpForm(), this.viewBefore && this.viewBefore(this.rawData);
    },
    handleReload() {
      this.isInsert = !1, this.showPopupFlag = !1, this.dpFormData.options || (this.dpFormData.options = {}), this.params.xdataidx = this.recordId, this.recordId ? (this.defaultWhere ? this.defaultWhereParent ? this.dpFormData.options.where = this.defaultWhere + ` AND ${this.defaultWhereParent} AND _id = CONVERT(:xdataidx, 'objectId')` : this.dpFormData.options.where = this.defaultWhere + " AND _id = CONVERT(:xdataidx, 'objectId')" : this.defaultWhereParent ? this.dpFormData.options.where = `${this.defaultWhereParent} AND _id = CONVERT(:xdataidx, 'objectId')` : this.dpFormData.options.where = "_id = CONVERT(:xdataidx, 'objectId')", this.dpFormData.params.xdataidx = this.recordId, this.getDataOne(this.dpFormData)) : this.lastRecord ? (this.defaultWhere ? this.defaultWhereParent ? this.dpFormData.options.where = this.defaultWhere + ` AND ${this.defaultWhereParent}` : this.dpFormData.options.where = this.defaultWhere : this.defaultWhereParent ? this.dpFormData.options.where = this.defaultWhereParent : this.dpFormData.options.where = "", this.getDataOne(this.dpFormData)) : (this.rawData = null, this.recordId = "");
    },
    async handleCancel() {
      this.showPopupFlag = !1, this.handlePopUpForm();
    },
    handlePopUpForm() {
      this.subFormOpen && this.subFormOpen({
        modelValue: this.showPopupFlag,
        initData: this.formData,
        backdrop: this.backdrop,
        readonly: this.formReadOnly,
        formId: this.formId,
        parentId: this.defaultParentId,
        params: this.params,
        cancelCallback: this.handleCancel,
        beforeSaveCallback: this.beforeSave,
        afterSaveCallback: this.afterSave
      });
    },
    handleCrudGrid() {
      this.showPopupGridFlag = !0;
    },
    handleCrudGridCloe() {
      this.showPopupGridFlag = !1;
    },
    initForm(e) {
      this.sdformModel = e, this.userState.formStore[this.formId] = this.sdformModel, this.fixApiUrl && this.fixApiUrl != "" ? this.apiUrl = this.fixApiUrl : this.sdformModel.form_db.api_url && this.sdformModel.form_db.api_url != "" ? this.apiUrl = this.sdformModel.form_db.api_url : this.apiUrl = window.APP_CONFIG.API_URL, this.userState.user && (this.allowInsert = Oe(this.sdformModel, this.userState.user)), this.sdformModel.form_event.after_delete && this.sdformModel.form_event.enable && (this.afterDeleteForm = new Function("formData", ..._e, this.sdformModel.form_event.after_delete)), this.iconName || (this.iconForm = "", this.sdformModel.form_icon ? this.iconForm = this.sdformModel.form_icon : this.iconForm = ""), this.titleName ? this.titleNameForm = this.titleName : this.titleNameForm = this.sdformModel.form_name ? `${this.sdformModel.form_name}` : "", this.dataProvider ? this.dpFormData = P(this.dataProvider) : (this.dpFormData.providerId = this.formId, this.dpFormData.providerType = fe.FORM), this.dpFormData.params || (this.dpFormData.params = {}), this.dpFormData.options ? (this.dpFormData.options.page || (this.dpFormData.options.page = 1), this.dpFormData.options.limit ? this.limit = this.dpFormData.options.limit : this.dpFormData.options.limit = this.limit, this.optionProvider = this.dpFormData.options) : this.dpFormData.options = this.optionProvider, this.parentId != "" && (this.params.xparentx = this.parentId, this.dpFormData.options && this.dpFormData.options.where ? this.dpFormData.options.where += " AND xparentx = CONVERT(:xparentx, 'objectId')" : this.dpFormData.options.where = "xparentx = CONVERT(:xparentx, 'objectId')"), (!this.lastRecord || this.dataId) && (this.params.xdataidx = this.recordId, this.dpFormData.options && this.dpFormData.options.where ? this.dpFormData.options.where += " AND _id = CONVERT(:xdataidx, 'objectId')" : this.dpFormData.options.where = "_id = CONVERT(:xdataidx, 'objectId')"), this.dpFormData.options.orderBy = [{ column: "created_at", sort: ge.DESC }];
      const t = P(this.dpFormData.params), a = P(this.params);
      this.defaultParams = { ...a, ...t }, this.dpFormData.params = P(this.defaultParams), (this.lastRecord || this.dataId) && this.getDataOne(this.dpFormData), this.enableWs && this.sdformModel.form_options && this.sdformModel.form_options.enable_websocket && (this.wsConn = this.userState.connectWebSocket("gridform", this.sdformModel.dataid, this.widgetId, (l) => {
        if (l.from != "server" && (l.from != this.userState.user?.username || l.params && l.params.widget && l.params.widget !== this.widgetId) && l.keyid) {
          const o = P(l.data), i = o[l.keyid];
          l.method == "insert" ? this.lastRecord && !this.dataId && (this.parentId ? o.xparentx && o.xparentx == this.parentId && (this.rawData = P(o), this.recordId = o[l.keyid]) : (this.rawData = P(o), this.recordId = o[l.keyid])) : l.method == "update" ? i == this.recordId && (this.rawData = P(o)) : l.method == "delete" && i == this.recordId && (this.rawData = null, this.recordId = "");
        }
      }));
    },
    async getDataOne(e, t) {
      if (!this.buildState) {
        this.preLoading = !0;
        const a = await Xt(e, this.useUserState);
        a.response ? (a.data && a.data.data ? (this.rawData = P(a.data.data), this.recordId = this.rawData._id, t && t(this.rawData)) : (this.rawData = null, this.recordId = ""), this.preLoading = !1) : (String(a.message || "").startsWith("Data not found") ? (this.rawData = null, this.recordId = "") : B.warning(a.message), this.preLoading = !1);
      }
    },
    // เช็คว่า element ถูกตัดด้วย ellipsis ไหม (scrollWidth เกิน clientWidth) → เปิด tooltip เฉพาะตอนนั้น
    checkOverflow(e, t) {
      const a = e.currentTarget;
      this[t] = a.scrollWidth > a.clientWidth;
    },
    getValue(e, t) {
      let a = pe(e, t);
      return a ? Ee(a, t, this.sdformModel) : "";
    },
    // format วันเวลาแบบไทยอ่านง่าย: "6 มิ.ย. 69 · 13:34" (ปี พ.ศ. 2 หลัก)
    // ค่าว่าง → '' · parse ไม่ได้ → คืนค่าดิบ (กันข้อมูลแปลก ๆ หาย)
    fmtDateTime(e) {
      if (!e) return "";
      const t = we(e);
      return t.isValid() ? t.locale("th").format("D MMM BB · HH:mm") : String(e);
    },
    allowView(e, t, a) {
      return qa(e, t, a);
    },
    allowUpdate(e, t, a) {
      return Je(e, t, a);
    },
    allowDelete(e, t, a) {
      return vl(e, t, a);
    },
    afterSave(e, t, a = null) {
      t || (this.showPopupFlag = !1, this.handlePopUpForm()), a && (this.isInsert = !1);
      const l = this.isInsert;
      if (e)
        if (this.isInsert) {
          let o = P(e);
          this.rawData = P(e), this.recordId = e._id, this.wsConn?.wsSend({ data: o, method: "insert", keyid: "_id", params: { widget: this.widgetId } });
        } else
          this.rawData = P(e), this.recordId = e._id, this.wsConn?.wsSend({ data: e, method: "update", keyid: "_id", params: { widget: this.widgetId } });
      this.$emit("aftersave", l, e, a);
    },
    getSchema(e) {
      return this.sdformModel.form_db.schema[e];
    }
  }
}), Bb = {
  key: 0,
  class: "rv-skel-title"
}, Ob = {
  key: 0,
  class: "wcard-foot"
}, Nb = { class: "wcard-meta" }, jb = { class: "wcard-actions" }, Ub = { class: "text-6" }, Rb = ["innerHTML"];
function zb(e, t, a, l, o, i) {
  const s = Zi, u = Qi, m = Wa, f = sl, c = ie, F = Ze, D = ve, g = ha, C = To, _ = $o, p = Kf;
  return n(), v(L, null, [
    e.allowForm && e.preLoading ? (n(), h(u, {
      key: 0,
      animated: "",
      class: Y(["rv-skeleton", { blockUi: e.blockEnable }])
    }, {
      template: r(() => [
        e.titleEnable ? (n(), v("div", Bb, [
          d(s, { variant: "text" })
        ])) : b("", !0),
        $("div", {
          class: "rv-skel-grid",
          style: le({ gridTemplateColumns: `repeat(${e.column > 0 ? e.column : 1}, minmax(0, 1fr))` })
        }, [
          (n(!0), v(L, null, J(e.skeletonItemCount, (y) => (n(), v("div", {
            key: y,
            class: Y(["rv-skel-item", { vertical: !!e.verticalEnable }])
          }, [
            d(s, {
              variant: "text",
              class: "rv-skel-label"
            }),
            d(s, {
              variant: "text",
              class: "rv-skel-value"
            })
          ], 2))), 128))
        ], 4)
      ]),
      _: 1
    }, 8, ["class"])) : e.allowForm && e.customContentEnable ? (n(), v("div", {
      key: 1,
      class: Y(["rv-custom", { blockUi: e.blockEnable }])
    }, [
      (n(), h(m, {
        ref: "customContentRef",
        key: `${e.formId}-cc`,
        content: e.customContent,
        data: e.customData,
        params: e.customParams,
        "show-error-detail": !!e.buildState
      }, null, 8, ["content", "data", "params", "show-error-detail"])),
      e.actionEnable && e.autoActionFooter ? (n(), v("div", Ob, [
        $("div", Nb, [
          e.metaByField && e.rawData ? (n(), h(f, {
            key: 0,
            content: e.getValue(e.rawData, e.metaByField),
            placement: "top",
            disabled: !e.byOverflow
          }, {
            default: r(() => [
              $("span", {
                class: "wcard-by",
                onMouseenter: t[0] || (t[0] = (y) => e.checkOverflow(y, "byOverflow"))
              }, A(e.getValue(e.rawData, e.metaByField)), 33)
            ]),
            _: 1
          }, 8, ["content", "disabled"])) : b("", !0),
          e.metaTimeField && e.rawData ? (n(), h(f, {
            key: 1,
            content: e.fmtDateTime(e.getValue(e.rawData, e.metaTimeField)),
            placement: "top",
            disabled: !e.timeOverflow
          }, {
            default: r(() => [
              $("span", {
                class: "wcard-time",
                onMouseenter: t[1] || (t[1] = (y) => e.checkOverflow(y, "timeOverflow"))
              }, A(e.fmtDateTime(e.getValue(e.rawData, e.metaTimeField))), 33)
            ]),
            _: 1
          }, 8, ["content", "disabled"])) : b("", !0)
        ]),
        $("div", jb, [
          re(e.$slots, "actions", { row: e.rawData }, void 0, !0),
          e.canAdd ? (n(), h(c, {
            key: 0,
            size: "small",
            plain: "",
            circle: "",
            type: "success",
            icon: "Plus",
            title: "Add",
            onClick: t[2] || (t[2] = j((y) => e.handleAdd(), ["prevent"]))
          })) : b("", !0),
          e.canEdit ? (n(), h(c, {
            key: 1,
            size: "small",
            plain: "",
            circle: "",
            type: "primary",
            icon: "Edit",
            title: "Edit",
            onClick: t[3] || (t[3] = j((y) => e.handleUpdate(e.recordId), ["prevent"]))
          })) : b("", !0),
          e.canView ? (n(), h(c, {
            key: 2,
            size: "small",
            plain: "",
            circle: "",
            type: "info",
            icon: "View",
            title: "View",
            onClick: t[4] || (t[4] = j((y) => e.handleView(e.recordId), ["prevent"]))
          })) : b("", !0),
          e.canDelete ? (n(), h(c, {
            key: 3,
            size: "small",
            plain: "",
            circle: "",
            type: "danger",
            icon: "Delete",
            title: "Delete",
            onClick: t[5] || (t[5] = j((y) => e.handleDelete(e.recordId), ["prevent"]))
          })) : b("", !0),
          e.canListView ? (n(), h(c, {
            key: 4,
            size: "small",
            plain: "",
            circle: "",
            color: "#626aef",
            dark: e.isDark,
            type: "info",
            icon: "Grid",
            title: "List View",
            onClick: t[6] || (t[6] = j((y) => e.handleCrudGrid(), ["prevent"]))
          }, null, 8, ["dark"])) : b("", !0),
          e.canReload ? (n(), h(c, {
            key: 5,
            size: "small",
            plain: "",
            circle: "",
            icon: "Refresh",
            title: "Reload",
            onClick: t[7] || (t[7] = j((y) => e.handleReload(), ["prevent"]))
          })) : b("", !0)
        ])
      ])) : b("", !0)
    ], 2)) : e.allowForm ? (n(), h(_, {
      key: 2,
      class: Y({ blockUi: e.blockEnable, "rv-no-border": !e.borderEnable }),
      column: e.column,
      border: e.borderEnable,
      "label-width": e.labelWidth,
      direction: e.verticalEnable ? "vertical" : "horizontal"
    }, Ye({
      default: r(() => [
        e.rawData ? (n(!0), v(L, { key: 0 }, J(e.blockUiFields, (y, S) => (n(), h(C, {
          label: y.label,
          align: y.align,
          "label-align": y.labelAlign,
          "min-width": y.minWidth,
          "label-width": y.labelWidth,
          width: y.width,
          span: y.span,
          rowspan: y.rowspan
        }, {
          default: r(() => [
            y.htmlValue ? (n(), v("span", {
              key: 0,
              innerHTML: e.htmlValue(y.htmlValue, e.rawData, y)
            }, null, 8, Rb)) : (n(), h(g, {
              key: 1,
              "sdform-model": e.sdformModel,
              "field-name": y.fieldName,
              "field-setting": e.getSchema(y.fieldName),
              "subform-width": e.subformWidth,
              "raw-data": e.rawData,
              "user-state": e.userState
            }, null, 8, ["sdform-model", "field-name", "field-setting", "subform-width", "raw-data", "user-state"]))
          ]),
          _: 2
        }, 1032, ["label", "align", "label-align", "min-width", "label-width", "width", "span", "rowspan"]))), 256)) : (n(), h(C, {
          key: 1,
          width: "10",
          "min-width": 10
        }, {
          default: r(() => [...t[15] || (t[15] = [
            I(" No Data... ", -1)
          ])]),
          _: 1
        }))
      ]),
      _: 2
    }, [
      e.titleEnable ? {
        name: "title",
        fn: r(() => [
          $("span", Ub, [
            e.iconForm != "" ? (n(), h(F, {
              key: 0,
              "svg-data": e.iconForm
            }, null, 8, ["svg-data"])) : e.iconName != "" ? (n(), h(D, {
              key: 1,
              "icon-name": e.iconName
            }, null, 8, ["icon-name"])) : (n(), h(D, {
              key: 2,
              "icon-name": "icon-sdform"
            })),
            I(" " + A(e.titleNameForm), 1)
          ])
        ]),
        key: "0"
      } : void 0,
      e.actionEnable ? {
        name: "extra",
        fn: r(() => [
          re(e.$slots, "actions", { row: e.rawData }, void 0, !0),
          !e.dataId && !e.rawData && e.addBtnEnable && e.allowInsert ? (n(), h(c, {
            key: 0,
            size: "small",
            plain: "",
            type: "success",
            icon: "Plus",
            title: "Add",
            onClick: t[8] || (t[8] = j((y) => e.handleAdd(), ["prevent"]))
          })) : b("", !0),
          e.recordId && e.rawData && e.updateBtnEnable && e.allowUpdate(e.sdformModel, e.rawData, e.useUserState.user) ? (n(), h(c, {
            key: 1,
            plain: "",
            type: "primary",
            icon: "Edit",
            title: "Edit",
            size: "small",
            onClick: t[9] || (t[9] = j((y) => e.handleUpdate(e.recordId), ["prevent"]))
          })) : b("", !0),
          e.recordId && e.rawData && e.delBtnEnable && e.allowDelete(e.sdformModel, e.rawData, e.useUserState.user) ? (n(), h(c, {
            key: 2,
            plain: "",
            type: "danger",
            icon: "Delete",
            title: "Delete",
            size: "small",
            onClick: t[10] || (t[10] = j((y) => e.handleDelete(e.recordId), ["prevent"]))
          })) : b("", !0),
          e.recordId && e.rawData && e.viewBtnEnable && e.allowView(e.sdformModel, e.rawData, e.useUserState.user) ? (n(), h(c, {
            key: 3,
            plain: "",
            type: "info",
            icon: "View",
            title: "View",
            size: "small",
            onClick: t[11] || (t[11] = j((y) => e.handleView(e.recordId), ["prevent"]))
          })) : b("", !0),
          e.listViewBtnEnable ? (n(), h(c, {
            key: 4,
            plain: "",
            color: "#626aef",
            dark: e.isDark,
            type: "info",
            icon: "Grid",
            size: "small",
            title: "List View",
            onClick: t[12] || (t[12] = j((y) => e.handleCrudGrid(), ["prevent"]))
          }, null, 8, ["dark"])) : b("", !0),
          e.reloadBtnEnable && e.recordId ? (n(), h(c, {
            key: 5,
            plain: "",
            type: "default",
            icon: "Refresh",
            title: "Reload",
            size: "small",
            onClick: t[13] || (t[13] = j((y) => e.handleReload(), ["prevent"]))
          })) : b("", !0)
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["class", "column", "border", "label-width", "direction"])) : b("", !0),
    e.sdformModel.dataid && e.showPopupGridFlag ? (n(), h(p, {
      key: 3,
      modelValue: e.showPopupGridFlag,
      "onUpdate:modelValue": t[14] || (t[14] = (y) => e.showPopupGridFlag = y),
      backdrop: !0,
      "parent-id": e.parentId,
      readonly: e.listViewReadOnly,
      "form-id": e.sdformModel.dataid,
      "user-state": e.userState,
      "cancel-callback": e.handleCrudGridCloe
    }, null, 8, ["modelValue", "parent-id", "readonly", "form-id", "user-state", "cancel-callback"])) : b("", !0)
  ], 64);
}
const tS = /* @__PURE__ */ U(Lb, [["render", zb], ["__scopeId", "data-v-57b5ca41"]]), Hb = O({
  name: "SdCascaderForm",
  inheritAttrs: !1,
  emits: ["update:modelValue", "change"],
  props: {
    // ─── Widget-specific props ───────────────────────────────────────────────
    formId: {
      type: String,
      required: !0
    },
    valueField: {
      type: String,
      default: "_id"
    },
    labelField: {
      type: String,
      required: !0
    },
    parentField: {
      type: String,
      required: !0
    },
    rootValue: {
      type: null,
      default: null
    },
    // ถ้ามีค่า จะ inject xparentx เข้า params อัตโนมัติ — รับได้ทั้ง string และ { value, label }
    parentId: {
      default: ""
    },
    params: {
      type: Object,
      default: () => ({})
    },
    limit: {
      type: Number,
      default: 1e3
    },
    // NoQL WHERE clause เช่น "`status` = 'active'"
    where: {
      type: String,
      default: ""
    },
    // sort เช่น [{ column: 'name', sort: 'ASC' }]
    orderBy: {
      type: Array,
      default: null
    },
    // เก็บทั้ง value และ label — modelValue จะเป็น { value, label } แทน plain array
    saveWithLabel: {
      type: Boolean,
      default: !1
    },
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      treeOptions: [],
      loading: !1,
      defaultParams: {}
    };
  },
  computed: {
    // ส่ง $attrs ต่อไปยัง el-cascader ยกเว้น modelValue และ event ที่เราจัดการเอง
    cascaderPassAttrs() {
      const { modelValue: e, "onUpdate:modelValue": t, onChange: a, ...l } = this.$attrs;
      return l;
    },
    // แปลง { value, label } กลับเป็น plain value เพื่อให้ el-cascader แสดงผลถูกต้อง
    displayValue() {
      const e = this.$attrs?.modelValue ?? null;
      return !this.saveWithLabel || e == null ? e : typeof e == "object" && !Array.isArray(e) && "value" in e ? e.value : e;
    },
    // merge value/label/children เข้ากับ :props ที่ user ส่งมา (multiple, checkStrictly ฯลฯ)
    mergedCascaderProps() {
      return {
        ...this.$attrs?.props ?? {},
        value: this.valueField,
        label: this.labelField,
        children: "children"
      };
    }
  },
  mounted() {
    this.defaultParams = { ...this.params }, this.loadData();
  },
  watch: {
    formId() {
      this.loadData();
    },
    params: {
      deep: !0,
      handler(e) {
        this.defaultParams = { ...e }, this.loadData();
      }
    },
    where() {
      this.loadData();
    },
    orderBy: {
      deep: !0,
      handler() {
        this.loadData();
      }
    },
    parentId: {
      deep: !0,
      handler() {
        this.loadData();
      }
    }
  },
  methods: {
    // รองรับทั้ง plain ID และ {value, label} object (จาก select-form-input)
    resolveParentId(e) {
      return e !== null && typeof e == "object" && "value" in e ? e.value : e;
    },
    buildTree(e) {
      const t = {};
      e.forEach((o) => {
        t[o[this.valueField]] = { ...o, children: [] };
      });
      const a = [];
      e.forEach((o) => {
        const i = this.resolveParentId(o[this.parentField]), s = t[o[this.valueField]];
        !i || i === this.rootValue || !t[i] ? a.push(s) : t[i].children.push(s);
      });
      const l = (o) => {
        o.forEach((i) => {
          i.children?.length === 0 ? delete i.children : i.children && l(i.children);
        });
      };
      return l(a), a;
    },
    buildParams() {
      const e = { ...this.defaultParams }, t = this.resolveParentId(this.parentId);
      return t && (e.xparentx = t), e;
    },
    loadData() {
      this.loading = !0;
      const e = { limit: this.limit };
      this.where && (e.where = this.where), this.orderBy && (e.orderBy = this.orderBy), this.userState.crudGetAll(
        {
          sdProvider: {
            providerId: this.formId,
            providerType: "FORM",
            options: e,
            params: this.buildParams()
          },
          totalEnable: !1
        },
        (t) => {
          this.loading = !1, t?.data && Array.isArray(t.data) ? this.treeOptions = this.buildTree(t.data) : this.treeOptions = [];
        }
      );
    },
    handleChange(e) {
      if (!this.saveWithLabel || e == null || Array.isArray(e) && e.length === 0) {
        this.$emit("update:modelValue", e), this.$emit("change", e);
        return;
      }
      const a = this.$refs.cascaderRef?.getCheckedNodes?.(!1) ?? [], l = this.$attrs?.separator ?? " / ";
      if (this.$attrs?.props?.multiple ?? !1) {
        const i = a.map((s) => ({
          value: s.pathNodes ? s.pathNodes.map((u) => u.value) : [s.value],
          label: s.pathNodes ? s.pathNodes.map((u) => u.label).join(l) : s.label
        }));
        this.$emit("update:modelValue", i), this.$emit("change", i);
      } else {
        const i = a[0];
        if (!i) {
          this.$emit("update:modelValue", null), this.$emit("change", null);
          return;
        }
        const s = {
          value: i.pathNodes ? i.pathNodes.map((u) => u.value) : [i.value],
          label: i.pathNodes ? i.pathNodes.map((u) => u.label).join(l) : i.label
        };
        this.$emit("update:modelValue", s), this.$emit("change", s);
      }
    },
    reload() {
      this.loadData();
    }
  }
});
function qb(e, t, a, l, o, i) {
  const s = en;
  return n(), h(s, ae({ ref: "cascaderRef" }, e.cascaderPassAttrs, {
    "model-value": e.displayValue,
    options: e.treeOptions,
    props: e.mergedCascaderProps,
    style: { width: "100%" },
    onChange: e.handleChange
  }), null, 16, ["model-value", "options", "props", "onChange"]);
}
const aS = /* @__PURE__ */ U(Hb, [["render", qb]]), Wb = ".el-date-picker__header, .el-date-range-picker__header", _o = ".el-date-picker__header-label, .el-date-range-picker__header-label", lS = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SdDatePickerBE",
  props: {
    modelValue: { default: null },
    buddhist: { type: Boolean, default: !1 },
    type: { default: "date" },
    format: {},
    editable: { type: Boolean }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { expose: t, emit: a }) {
    const l = e, o = a, i = rn(), s = q(), u = R(Ia, void 0);
    ze(
      Ia,
      Z(() => l.buddhist ? Ro : u?.value)
    );
    const m = `sd-be-picker-${dn()}`, f = Z({
      get: () => l.modelValue,
      set: (p) => o("update:modelValue", p)
    }), c = Z(() => {
      if (!l.buddhist || l.format) return l.format;
      switch (l.type) {
        case "datetime":
        case "datetimerange":
          return "DD/MM/BBBB HH:mm";
        case "month":
        case "monthrange":
          return "MM/BBBB";
        case "year":
        case "years":
          return "BBBB";
        case "week":
          return "BBBB [สัปดาห์]ww";
        default:
          return "DD/MM/BBBB";
      }
    }), F = Z(() => {
      const p = i.popperClass || i["popper-class"] || "";
      return l.buddhist ? `${m} ${p}`.trim() : p;
    });
    function D(p) {
      const y = Number(p);
      return y >= 1900 && y <= 2400 ? String(y + 543) : p;
    }
    function g(p) {
      p.querySelectorAll(".el-year-table").forEach((y) => {
        const S = document.createTreeWalker(y, NodeFilter.SHOW_TEXT);
        let N;
        for (; N = S.nextNode(); ) {
          const w = N.nodeValue ?? "";
          if (!/\d{4}/.test(w)) continue;
          const T = w.replace(/\d{4}/g, D);
          T !== w && (N.nodeValue = T);
        }
      }), p.querySelectorAll(_o).forEach((y) => {
        const S = y.textContent ?? "";
        if (!/\d{4}/.test(S)) return;
        let N = S.replace(/\d{4}/g, D).replace(/ปี/g, "").trim();
        N.startsWith("พ.ศ.") || (N = `พ.ศ. ${N}`), y.textContent !== N && (y.textContent = N);
      }), p.querySelectorAll(Wb).forEach((y) => {
        const S = y.querySelectorAll(_o), N = S[0], w = S[1], T = w?.parentElement;
        N && w && T && T === N.parentElement && /\d{4}/.test(N.textContent ?? "") && T.insertBefore(w, N);
      });
    }
    let C = null;
    function _(p) {
      const y = i.onVisibleChange;
      if (typeof y == "function" && y(p), !!l.buddhist) {
        if (!p) {
          C?.disconnect(), C = null;
          return;
        }
        requestAnimationFrame(() => {
          const S = document.querySelector(`.${m}`);
          S && (g(S), C = new MutationObserver(() => g(S)), C.observe(S, { childList: !0, subtree: !0, characterData: !0 }));
        });
      }
    }
    return Bo(() => C?.disconnect()), t({
      pickerRef: s,
      focus: (...p) => s.value?.focus?.(...p),
      blur: () => s.value?.blur?.(),
      handleOpen: () => s.value?.handleOpen?.(),
      handleClose: () => s.value?.handleClose?.(),
      onPick: (...p) => s.value?.onPick?.(...p)
    }), (p, y) => {
      const S = ml;
      return n(), h(S, ae({
        ref_key: "pickerRef",
        ref: s
      }, p.$attrs, {
        modelValue: f.value,
        "onUpdate:modelValue": y[0] || (y[0] = (N) => f.value = N),
        type: e.type,
        format: c.value,
        editable: e.buddhist ? !1 : e.editable,
        "popper-class": F.value,
        onVisibleChange: _,
        onChange: y[1] || (y[1] = (N) => o("change", N))
      }), Ye({ _: 2 }, [
        J(p.$slots, (N, w) => ({
          name: w,
          fn: r((T) => [
            re(p.$slots, w, ia(na(T || {})))
          ])
        }))
      ]), 1040, ["modelValue", "type", "format", "editable", "popper-class"]);
    };
  }
}), xb = ".el-date-picker__header, .el-date-range-picker__header", ko = ".el-date-picker__header-label, .el-date-range-picker__header-label", oS = /* @__PURE__ */ O({
  inheritAttrs: !1,
  __name: "SdDatePickerPanelBE",
  props: {
    modelValue: { default: null },
    buddhist: { type: Boolean, default: !1 },
    type: { default: "date" },
    editable: { type: Boolean, default: !0 }
  },
  emits: ["update:modelValue", "change"],
  setup(e, { expose: t, emit: a }) {
    const l = e, o = a, i = q(), s = q(), u = R(Ia, void 0);
    ze(
      Ia,
      Z(() => l.buddhist ? Ro : u?.value)
    );
    const m = Z({
      get: () => l.modelValue,
      set: (D) => {
        o("update:modelValue", D), o("change", D);
      }
    });
    function f(D) {
      const g = Number(D);
      return g >= 1900 && g <= 2400 ? String(g + 543) : D;
    }
    function c(D) {
      D.querySelectorAll(".el-year-table").forEach((g) => {
        const C = document.createTreeWalker(g, NodeFilter.SHOW_TEXT);
        let _;
        for (; _ = C.nextNode(); ) {
          const p = _.nodeValue ?? "";
          if (!/\d{4}/.test(p)) continue;
          const y = p.replace(/\d{4}/g, f);
          y !== p && (_.nodeValue = y);
        }
      }), D.querySelectorAll(ko).forEach((g) => {
        const C = g.textContent ?? "";
        if (!/\d{4}/.test(C)) return;
        let _ = C.replace(/\d{4}/g, f).replace(/ปี/g, "").trim();
        _.startsWith("พ.ศ.") || (_ = `พ.ศ. ${_}`), g.textContent !== _ && (g.textContent = _);
      }), D.querySelectorAll(xb).forEach((g) => {
        const C = g.querySelectorAll(ko), _ = C[0], p = C[1], y = p?.parentElement;
        _ && p && y && y === _.parentElement && /\d{4}/.test(_.textContent ?? "") && y.insertBefore(p, _);
      });
    }
    let F = null;
    return xe(() => {
      !l.buddhist || !i.value || (c(i.value), F = new MutationObserver(() => i.value && c(i.value)), F.observe(i.value, { childList: !0, subtree: !0, characterData: !0 }));
    }), Bo(() => F?.disconnect()), t({ panelRef: s }), (D, g) => {
      const C = tn;
      return n(), v("div", {
        ref_key: "rootRef",
        ref: i,
        class: "sd-date-panel-be"
      }, [
        d(C, ae({
          ref_key: "panelRef",
          ref: s
        }, D.$attrs, {
          modelValue: m.value,
          "onUpdate:modelValue": g[0] || (g[0] = (_) => m.value = _),
          type: e.type,
          editable: e.buddhist ? !1 : e.editable
        }), Ye({ _: 2 }, [
          J(D.$slots, (_, p) => ({
            name: p,
            fn: r((y) => [
              re(D.$slots, p, ia(na(y || {})))
            ])
          }))
        ]), 1040, ["modelValue", "type", "editable"])
      ], 512);
    };
  }
});
function Kb(e) {
  return typeof e.key == "string" && e.key.length === 1 ? e.key : Me.decodeKeyEvent(e);
}
const Gb = O({
  name: "SdScan",
  emits: [
    "update:modelValue",
    // (code)            — โค้ดล่าสุด (optional, ใช้/ไม่ใช้ก็ได้)
    "scan",
    // (code, qty)       — สแกนสำเร็จ (event หลัก)
    "scan-error",
    // (debug)           — สแกนไม่ผ่าน validation
    "key-detect",
    // (keyCode, event)  — ทุก keydown (รวมปุ่มที่ไม่ใช่ตัวอักษร)
    "key-process",
    // (char, event)     — ทุกอักขระที่ถูกประมวลผล
    "paste",
    // (text, event)     — เมื่อ reactToPaste = true
    "scan-button-long-press"
    // ปุ่มสแกน hardware กดค้าง
  ],
  props: {
    /** โค้ดล่าสุดที่สแกนได้ (v-model) — optional convenience, ไม่จำเป็นต้องผูก */
    modelValue: {
      type: String,
      default: ""
    },
    /**
     * โปรไฟล์ hardware สำเร็จรูป — เซ็ตง่ายๆ ตัวเดียวจบ (override props react* ด้านล่าง):
     * - 'keyboard' : scanner USB/Bluetooth ที่จำลองคีย์บอร์ด (ค่าเริ่มต้น)
     * - 'paste'    : scanner ในมือถือ/กล้อง ที่ paste ค่าเข้ามา
     * - 'both'     : รับทั้ง keyboard + paste
     * - ''         : ไม่ใช้ preset, คุมเองผ่าน props react* / options
     */
    preset: {
      type: String,
      default: "keyboard"
    },
    /**
     * จุดที่ผูก listener — รับได้ 3 แบบ:
     * - 'document' (default) : ดักทั้งหน้า
     * - CSS selector string  : เช่น '#scan-zone' (ผูกที่ element นั้น, element ต้องถูก focus ถึงจะรับ keydown)
     * - HTMLElement / Document object ตรงๆ
     */
    target: {
      type: [String, Object],
      default: "document"
    },
    /** ปิดการทำงานชั่วคราว (detach listener) */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * แสดงสถานะเล็กๆ ที่มุมจอ:
     * - 'none'   (default) : ซ่อนทุกอย่าง (headless ล้วน)
     * - 'dot'    : จุดเล็กๆ ล้วน บอกสถานะด้วยสี (พร้อม / กำลังสแกน / ปิด) — ย่อสุด
     * - 'status' : จุด + ข้อความสถานะ (ไม่โชว์ value) — แบบย่อ บอกแค่สถานะ
     * - 'badge'  : จุด + ข้อความสถานะ + โค้ดล่าสุด — เต็ม
     */
    indicator: {
      type: String,
      default: "none"
    },
    /** ตำแหน่ง indicator */
    indicatorPosition: {
      type: String,
      default: "bottom-right"
    },
    /**
     * auto-hide indicator (วินาที) — หลังมีสถานะแสดง ถ้าเงียบครบ N วิ จะ fade หายไป
     * แล้วโผล่กลับเมื่อมีสแกนใหม่. 0 = แสดงตลอด (ไม่หาย)
     */
    indicatorTimeout: {
      type: Number,
      default: 0
    },
    /**
     * แสดง indicator เฉพาะตอนสแกน "สำเร็จ" เท่านั้น
     * - ไม่โผล่/ไม่เปลี่ยนเป็นสถานะ "กำลังสแกน" ระหว่างพิมพ์ (กันกวน)
     * - error ก็ไม่แสดง
     * เหมาะใช้คู่ indicatorTimeout > 0 = pop ป้ายเฉพาะตอนยิงผ่าน
     */
    indicatorScanOnly: {
      type: Boolean,
      default: !1
    },
    /** ใช้ keyCodeMapper เสริมสำหรับอักขระพิเศษใน QR/URL (ปิดได้ถ้าต้องการ behavior เดิมของ lib) */
    extendedCharset: {
      type: Boolean,
      default: !0
    },
    // ===== onScan.js options (เต็มรูปแบบ — จูนกับ hardware ได้) =====
    /** keyCode ที่ถือเป็น "จบการสแกน" (มักเป็น [13]=Enter หรือ [9]=Tab) */
    suffixKeyCodes: {
      type: Array,
      default: () => [9, 13]
    },
    /** keyCode ที่ถือเป็น "เริ่มการสแกน" */
    prefixKeyCodes: {
      type: Array,
      default: () => []
    },
    /** ความยาวขั้นต่ำของโค้ด */
    minLength: {
      type: Number,
      default: 6
    },
    /** เวลาเฉลี่ยต่ออักขระ (ms) — มากกว่านี้ถือว่าเป็นการพิมพ์มือ ไม่ใช่สแกน */
    avgTimeByChar: {
      type: Number,
      default: 30
    },
    /** หน่วงก่อนเช็คว่าสแกนจบ (ms) */
    timeBeforeScanTest: {
      type: Number,
      default: 100
    },
    /** keyCode ปุ่มสแกน hardware (ถ้าปุ่มทำตัวเป็นคีย์) — false = ไม่มี */
    scanButtonKeyCode: {
      type: [Number, Boolean],
      default: !1
    },
    scanButtonLongPressTime: {
      type: Number,
      default: 500
    },
    /** ไม่ประมวลผลสแกนถ้า element ที่ focus อยู่ match selector/element นี้ (เช่น 'input, textarea') */
    ignoreIfFocusOn: {
      type: [Boolean, String, Object, Array],
      default: !1
    },
    stopPropagation: {
      type: Boolean,
      default: !1
    },
    preventDefault: {
      type: Boolean,
      default: !1
    },
    /** จับ event ใน capture phase (ก่อน listener ที่ลึกกว่าใน DOM) */
    captureEvents: {
      type: Boolean,
      default: !1
    },
    /** ดักจาก keyboard (scanner USB/BT ที่จำลองคีย์บอร์ด) */
    reactToKeydown: {
      type: Boolean,
      default: !0
    },
    /** ดักจาก paste (scanner ในมือถือ / กล้อง ที่ paste ค่า) */
    reactToPaste: {
      type: Boolean,
      default: !1
    },
    /** จำนวน item ต่อการสแกน 1 ครั้ง */
    singleScanQty: {
      type: Number,
      default: 1
    },
    /** override keyCodeMapper เอง (สำคัญกว่า extendedCharset) */
    keyCodeMapper: {
      type: Function,
      default: null
    },
    /** escape-hatch — option object ดิบของ onScan.js, merge ทับ props ทั้งหมด (priority สูงสุด) */
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      // เก็บ element ที่ attach ไว้จริง เพื่อ detach ถูกตัว (กรณี target เปลี่ยน)
      attachedEl: null,
      // state สำหรับ indicator
      scanning: !1,
      lastCode: "",
      flash: !1,
      // indicatorTimeout > 0: เริ่มซ่อน รอ activity ถึงโผล่
      indicatorVisible: !1,
      scanResetTimer: void 0,
      flashTimer: void 0,
      hideTimer: void 0
    };
  },
  computed: {
    statusState() {
      return this.disabled ? "disabled" : this.scanning ? "scanning" : "ready";
    },
    statusLabel() {
      switch (this.statusState) {
        case "scanning":
          return "Scanning...";
        case "disabled":
          return "Off";
        default:
          return "Ready";
      }
    },
    indicatorTitle() {
      return this.indicator === "badge" && this.lastCode ? `${this.statusLabel} · ${this.lastCode}` : this.statusLabel;
    },
    /** indicator ควรแสดงตอนนี้ไหม — timeout<=0 แสดงตลอด, >0 แสดงเฉพาะตอนมี activity ล่าสุด */
    indicatorShown() {
      return this.indicatorTimeout <= 0 ? !0 : this.indicatorVisible;
    },
    /** signature ของ option ที่ serializable ได้ — เปลี่ยนแล้ว reattach */
    optionsKey() {
      return JSON.stringify({
        pst: this.preset,
        // target อาจเป็น element object → ใช้ marker
        t: typeof this.target == "string" ? this.target : "[el]",
        d: this.disabled,
        sb: this.scanButtonKeyCode,
        sbt: this.scanButtonLongPressTime,
        tb: this.timeBeforeScanTest,
        avg: this.avgTimeByChar,
        min: this.minLength,
        suf: this.suffixKeyCodes,
        pre: this.prefixKeyCodes,
        ign: typeof this.ignoreIfFocusOn == "object" && this.ignoreIfFocusOn !== null ? "[obj]" : this.ignoreIfFocusOn,
        sp: this.stopPropagation,
        pd: this.preventDefault,
        cap: this.captureEvents,
        rk: this.reactToKeydown,
        rp: this.reactToPaste,
        q: this.singleScanQty,
        ext: this.extendedCharset,
        opt: this.options
      });
    }
  },
  watch: {
    optionsKey() {
      this.reattach();
    },
    disabled(e) {
      e ? this.detach() : this.attach();
    }
  },
  mounted() {
    this.attach();
  },
  unmounted() {
    this.detach(), this.scanResetTimer && clearTimeout(this.scanResetTimer), this.flashTimer && clearTimeout(this.flashTimer), this.hideTimer && clearTimeout(this.hideTimer);
  },
  methods: {
    /** ประกอบ option object ส่งเข้า onScan.js — callback แปลงเป็น $emit */
    buildOptions() {
      const e = {
        onScan: (t, a) => this.handleScan(t, a),
        onScanError: (t) => {
          this.scanning = !1, this.$emit("scan-error", t);
        },
        onKeyDetect: (t, a) => this.$emit("key-detect", t, a),
        onKeyProcess: (t, a) => {
          this.markScanning(), this.$emit("key-process", t, a);
        },
        onPaste: (t, a) => this.$emit("paste", t, a),
        onScanButtonLongPress: () => this.$emit("scan-button-long-press"),
        scanButtonKeyCode: this.scanButtonKeyCode,
        scanButtonLongPressTime: this.scanButtonLongPressTime,
        timeBeforeScanTest: this.timeBeforeScanTest,
        avgTimeByChar: this.avgTimeByChar,
        minLength: this.minLength,
        suffixKeyCodes: this.suffixKeyCodes,
        prefixKeyCodes: this.prefixKeyCodes,
        ignoreIfFocusOn: this.ignoreIfFocusOn,
        stopPropagation: this.stopPropagation,
        preventDefault: this.preventDefault,
        captureEvents: this.captureEvents,
        reactToKeydown: this.reactToKeydown,
        reactToPaste: this.reactToPaste,
        singleScanQty: this.singleScanQty
      };
      switch (this.preset) {
        case "keyboard":
          e.reactToKeydown = !0, e.reactToPaste = !1;
          break;
        case "paste":
          e.reactToKeydown = !1, e.reactToPaste = !0;
          break;
        case "both":
          e.reactToKeydown = !0, e.reactToPaste = !0;
          break;
      }
      return typeof this.keyCodeMapper == "function" ? e.keyCodeMapper = this.keyCodeMapper : this.extendedCharset && (e.keyCodeMapper = Kb), { ...e, ...this.options };
    },
    /** ตั้งสถานะ "กำลังสแกน" + auto-reset ถ้าเงียบไป (สำหรับ indicator) */
    markScanning() {
      this.indicatorScanOnly || (this.scanning = !0, this.pokeIndicator(), this.scanResetTimer && clearTimeout(this.scanResetTimer), this.scanResetTimer = window.setTimeout(() => {
        this.scanning = !1;
      }, 400));
    },
    /** มี activity → แสดง indicator แล้วตั้งเวลา auto-hide (เฉพาะ indicatorTimeout > 0) */
    pokeIndicator() {
      this.indicatorTimeout <= 0 || (this.indicatorVisible = !0, this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = window.setTimeout(() => {
        this.indicatorVisible = !1;
      }, this.indicatorTimeout * 1e3));
    },
    handleScan(e, t) {
      this.scanning = !1, this.scanResetTimer && clearTimeout(this.scanResetTimer), this.lastCode = e, this.pokeIndicator(), this.flash = !0, this.flashTimer && clearTimeout(this.flashTimer), this.flashTimer = window.setTimeout(() => {
        this.flash = !1;
      }, 600), this.$emit("update:modelValue", e), this.$emit("scan", e, t);
    },
    /** แปลง target prop → DOM element จริง */
    resolveTargetEl() {
      const e = this.target;
      if (e === "document" || e === void 0 || e === null) return document;
      if (typeof e == "string") {
        const t = document.querySelector(e);
        return t || (console.warn(`[SdScan] target selector "${e}" not found — falling back to document`), document);
      }
      return e;
    },
    attach() {
      if (this.disabled) return;
      const e = this.resolveTargetEl();
      e && (Me.isAttachedTo(e) && Me.detachFrom(e), Me.attachTo(e, this.buildOptions()), this.attachedEl = e);
    },
    detach() {
      this.attachedEl && Me.isAttachedTo(this.attachedEl) && Me.detachFrom(this.attachedEl), this.attachedEl = null, this.scanning = !1;
    },
    reattach() {
      this.detach(), this.$nextTick(() => this.attach());
    },
    // ===== public methods (เรียกผ่าน ref ได้) =====
    /** จำลองการสแกน — string หรือ array ของ keyCode/event object (สำหรับเทส / trigger เอง) */
    simulateScan(e) {
      const t = this.attachedEl;
      t && Me.isAttachedTo(t) && Me.simulate(t, e);
    },
    /** อัปเดต option ระหว่างทาง (ไม่ reattach) — สำหรับ tune แบบ live */
    applyOptions(e) {
      const t = this.attachedEl;
      t && Me.isAttachedTo(t) && Me.setOptions(t, e);
    },
    getCurrentOptions() {
      const e = this.attachedEl;
      return e && Me.isAttachedTo(e) ? Me.getOptions(e) : null;
    },
    isScanning() {
      const e = this.attachedEl;
      return e && Me.isAttachedTo(e) ? Me.isScanInProgressFor(e) : !1;
    }
  }
}), Yb = ["title"], Jb = {
  key: 0,
  class: "sd-scan-indicator__label"
}, Xb = {
  key: 1,
  class: "sd-scan-indicator__code"
};
function Qb(e, t, a, l, o, i) {
  return e.indicator !== "none" ? (n(), h(hl, {
    key: 0,
    to: "body"
  }, [
    d(fl, { name: "sd-scan-fade" }, {
      default: r(() => [
        e.indicatorShown ? (n(), v("div", {
          key: 0,
          class: Y(["sd-scan-indicator", [`is-${e.statusState}`, `pos-${e.indicatorPosition}`, { "is-flash": e.flash }]]),
          title: e.indicatorTitle
        }, [
          t[0] || (t[0] = $("span", { class: "sd-scan-indicator__dot" }, null, -1)),
          e.indicator !== "dot" ? (n(), v("span", Jb, A(e.statusLabel), 1)) : b("", !0),
          e.indicator === "badge" && e.lastCode ? (n(), v("span", Xb, A(e.lastCode), 1)) : b("", !0)
        ], 10, Yb)) : b("", !0)
      ]),
      _: 1
    })
  ])) : b("", !0);
}
const iS = /* @__PURE__ */ U(Gb, [["render", Qb], ["__scopeId", "data-v-f8dba78e"]]), Zb = "card-reading", eg = "card-read", tg = "card-removed", ag = "reader-connected", lg = "reader-disconnected", og = O({
  name: "SdSmartCard",
  emits: [
    "connected",
    // ()                       — ws เปิดสำเร็จ
    "disconnected",
    // (CloseEvent)              — ws ปิด (หลุด/ปิดเอง)
    "card-reading",
    // ()                       — ตรวจพบบัตร กำลังอ่าน (ยังไม่เสร็จ)
    "card-read",
    // (data|null, ok, error)    — อ่านบัตรเสร็จ (event หลัก)
    "card-removed",
    // ()                       — ถอดบัตรออก
    "reader-connected",
    // ()                       — เครื่องอ่านพร้อมใช้งาน
    "reader-disconnected",
    // ()                       — เครื่องอ่านหลุด/ไม่พบ
    "message",
    // (AgentMessage)            — message ดิบทุกตัว (escape hatch)
    "error"
    // (Event)                   — ws error
  ],
  props: {
    /**
     * URL ของ agent แบบเต็ม — ถ้าให้มา ใช้ตรงๆ (override host/port/token/secure)
     * เช่น 'ws://localhost:8765/?token=change-me'
     */
    url: {
      type: String,
      default: ""
    },
    /** host ของ agent (ใช้เมื่อไม่ระบุ url) */
    host: {
      type: String,
      default: "localhost"
    },
    /** port ของ agent (ใช้เมื่อไม่ระบุ url) */
    port: {
      type: Number,
      default: 8765
    },
    /** token auth (ตรงกับ config.token ของ agent — dev default = 'change-me') */
    token: {
      type: String,
      default: "change-me"
    },
    /** ใช้ wss (TLS) แทน ws — ใช้เมื่อไม่ระบุ url */
    secure: {
      type: Boolean,
      default: !1
    },
    /** ต่อ ws อัตโนมัติตอน mount */
    autoConnect: {
      type: Boolean,
      default: !0
    },
    /** ปิดการทำงานชั่วคราว (ปิด ws + ไม่ reconnect) */
    disabled: {
      type: Boolean,
      default: !1
    },
    /** auto-reconnect เมื่อ ws หลุด (exponential backoff) */
    reconnect: {
      type: Boolean,
      default: !0
    },
    /** ดีเลย์เริ่มต้นก่อน reconnect (ms) — จะคูณเพิ่มแบบ backoff ทุกครั้งที่ fail */
    reconnectDelay: {
      type: Number,
      default: 1e3
    },
    /** เพดานดีเลย์ reconnect (ms) */
    reconnectMaxDelay: {
      type: Number,
      default: 3e4
    },
    /**
     * แสดงสถานะเล็กๆ ที่มุมจอ:
     * - 'none'   (default) : ซ่อนทุกอย่าง (headless ล้วน)
     * - 'dot'    : จุดเล็กๆ ล้วน บอกสถานะด้วยสี — ย่อสุด
     * - 'status' : จุด + ข้อความสถานะ (ไม่โชว์ value) — แบบย่อ
     * - 'badge'  : จุด + ข้อความสถานะ + cid ล่าสุด — เต็ม
     */
    indicator: {
      type: String,
      default: "none"
    },
    /** ตำแหน่ง indicator */
    indicatorPosition: {
      type: String,
      default: "bottom-right"
    },
    /**
     * auto-hide indicator (วินาที) — หลังมีสถานะแสดง ถ้าเงียบครบ N วิ จะ fade หายไป
     * แล้วโผล่กลับเมื่อมี activity ใหม่. 0 = แสดงตลอด (ไม่หาย)
     */
    indicatorTimeout: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      ws: null,
      // connection state — แยกจาก reader/card state
      connState: "closed",
      // hardware state (อัปเดตจาก event ที่ push มา)
      readerPresent: !1,
      cardPresent: !1,
      reading: !1,
      lastData: null,
      lastCid: "",
      lastError: "",
      // indicator
      flash: !1,
      indicatorVisible: !1,
      // reconnect
      attempts: 0,
      manualClose: !1,
      // ตั้ง true ตอน disconnect()/disabled เพื่อไม่ให้ reconnect
      everConnected: !1,
      // เคยต่อ agent ติดอย่างน้อย 1 ครั้ง → อนุญาต reconnect (ไม่เคยติด = ไม่มี agent บนเครื่องนี้ ไม่ต้อง retry เปล่า)
      reconnectTimer: void 0,
      flashTimer: void 0,
      hideTimer: void 0
    };
  },
  computed: {
    /** URL จริงที่ใช้ต่อ — prop url ชนะ, ไม่งั้นประกอบจาก host/port/token/secure */
    wsUrl() {
      if (this.url) return this.url;
      const e = this.secure ? "wss" : "ws", t = this.token ? `?token=${encodeURIComponent(this.token)}` : "";
      return `${e}://${this.host}:${this.port}/${t}`;
    },
    /** สถานะรวมสำหรับ indicator */
    statusState() {
      return this.disabled ? "disabled" : this.connState === "connecting" ? "connecting" : this.connState !== "open" ? "offline" : this.reading ? "reading" : this.readerPresent ? "ready" : "no-reader";
    },
    statusLabel() {
      switch (this.statusState) {
        case "disabled":
          return "Off";
        case "offline":
          return "Offline";
        case "connecting":
          return "Connecting...";
        case "no-reader":
          return "No reader";
        case "reading":
          return "Reading...";
        default:
          return "Ready";
      }
    },
    indicatorTitle() {
      return this.indicator === "badge" && this.lastCid ? `${this.statusLabel} · ${this.lastCid}` : this.statusLabel;
    },
    /** indicator ควรแสดงตอนนี้ไหม — timeout<=0 แสดงตลอด, >0 แสดงเฉพาะตอนมี activity ล่าสุด */
    indicatorShown() {
      return this.indicatorTimeout <= 0 ? !0 : this.indicatorVisible;
    },
    /** signature ของ option ที่กระทบการต่อ — เปลี่ยนแล้ว reconnect */
    connectKey() {
      return JSON.stringify({
        u: this.url,
        h: this.host,
        p: this.port,
        t: this.token,
        s: this.secure
      });
    }
  },
  watch: {
    connectKey() {
      this.disabled || this.reconnectNow();
    },
    disabled(e) {
      e ? this.disconnect() : this.connect();
    }
  },
  mounted() {
    this.autoConnect && !this.disabled && this.connect();
  },
  unmounted() {
    this.teardown(), this.flashTimer && clearTimeout(this.flashTimer), this.hideTimer && clearTimeout(this.hideTimer);
  },
  methods: {
    /** เปิด ws ไป agent */
    connect() {
      this.disabled || this.ws && (this.connState === "open" || this.connState === "connecting") || (this.manualClose = !1, this.openSocket());
    },
    openSocket() {
      this.clearReconnect(), this.connState = "connecting", this.pokeIndicator();
      let e;
      try {
        e = new WebSocket(this.wsUrl);
      } catch {
        this.connState = "closed", this.scheduleReconnect();
        return;
      }
      this.ws = e, e.onopen = () => {
        this.connState = "open", this.attempts = 0, this.everConnected = !0, this.pokeIndicator(), this.$emit("connected");
      }, e.onmessage = (t) => this.handleMessage(t), e.onerror = (t) => this.$emit("error", t), e.onclose = (t) => {
        const a = this.connState !== "closed";
        this.connState = "closed", this.ws = null, this.readerPresent = !1, this.cardPresent = !1, this.reading = !1, a && this.$emit("disconnected", t), this.pokeIndicator(), this.manualClose || this.scheduleReconnect();
      };
    },
    /** ปิด ws เอง (ไม่ reconnect) */
    disconnect() {
      this.manualClose = !0, this.teardown(), this.connState = "closed", this.readerPresent = !1, this.cardPresent = !1, this.reading = !1;
    },
    /** ปิดแล้วต่อใหม่ทันที (reset backoff) */
    reconnectNow() {
      this.teardown(), this.attempts = 0, this.everConnected = !1, this.connect();
    },
    /** ปิด socket + ล้าง handler + ยกเลิก reconnect ที่ค้าง */
    teardown() {
      this.clearReconnect();
      const e = this.ws;
      if (e) {
        e.onopen = null, e.onmessage = null, e.onerror = null, e.onclose = null;
        try {
          e.close();
        } catch {
        }
      }
      this.ws = null;
    },
    clearReconnect() {
      this.reconnectTimer && (clearTimeout(this.reconnectTimer), this.reconnectTimer = void 0);
    },
    /** ตั้งเวลา reconnect แบบ exponential backoff (มีเพดาน) */
    scheduleReconnect() {
      if (!this.reconnect || this.manualClose || this.disabled || !this.everConnected) return;
      this.clearReconnect();
      const e = Math.min(this.reconnectDelay * 2 ** this.attempts, this.reconnectMaxDelay);
      this.attempts += 1, this.reconnectTimer = window.setTimeout(() => {
        this.reconnectTimer = void 0, this.openSocket();
      }, e);
    },
    /** แปลง message จาก agent → state + $emit */
    handleMessage(e) {
      let t;
      try {
        t = JSON.parse(e.data);
      } catch {
        return;
      }
      switch (this.$emit("message", t), t.event) {
        case Zb:
          this.cardPresent = !0, this.reading = !0, this.pokeIndicator(), this.$emit("card-reading");
          break;
        case eg:
          this.reading = !1, t.ok && t.data ? (this.lastData = t.data, this.lastCid = t.data.cid || "", this.lastError = "", this.cardPresent = !0, this.doFlash(), this.$emit("card-read", t.data, !0, "")) : (this.lastError = t.error || "read-failed", this.$emit("card-read", null, !1, this.lastError)), this.pokeIndicator();
          break;
        case tg:
          this.cardPresent = !1, this.reading = !1, this.pokeIndicator(), this.$emit("card-removed");
          break;
        case ag:
          this.readerPresent = !0, this.pokeIndicator(), this.$emit("reader-connected");
          break;
        case lg:
          this.readerPresent = !1, this.cardPresent = !1, this.reading = !1, this.pokeIndicator(), this.$emit("reader-disconnected");
          break;
      }
    },
    /** flash indicator สั้นๆ เมื่ออ่านบัตรสำเร็จ */
    doFlash() {
      this.flash = !0, this.flashTimer && clearTimeout(this.flashTimer), this.flashTimer = window.setTimeout(() => {
        this.flash = !1;
      }, 600);
    },
    /** มี activity → แสดง indicator แล้วตั้งเวลา auto-hide (เฉพาะ indicatorTimeout > 0) */
    pokeIndicator() {
      this.indicatorTimeout <= 0 || (this.indicatorVisible = !0, this.hideTimer && clearTimeout(this.hideTimer), this.hideTimer = window.setTimeout(() => {
        this.indicatorVisible = !1;
      }, this.indicatorTimeout * 1e3));
    },
    // ===== public methods (เรียกผ่าน ref ได้) =====
    /** ต่อ ws (ถ้ายังไม่ต่อ) */
    open() {
      this.connect();
    },
    /** ปิด ws เอง */
    close() {
      this.disconnect();
    },
    /** ต่อใหม่ทันที (reset backoff) */
    reconnectSocket() {
      this.manualClose = !1, this.reconnectNow();
    },
    isConnected() {
      return this.connState === "open";
    },
    /** ข้อมูลบัตรที่อ่านได้ล่าสุด (null ถ้ายังไม่เคยอ่านสำเร็จ) */
    getLastData() {
      return this.lastData;
    }
  }
}), ig = ["title"], ng = {
  key: 0,
  class: "sd-smartcard-indicator__label"
}, sg = {
  key: 1,
  class: "sd-smartcard-indicator__code"
};
function rg(e, t, a, l, o, i) {
  return e.indicator !== "none" ? (n(), h(hl, {
    key: 0,
    to: "body"
  }, [
    d(fl, { name: "sd-smartcard-fade" }, {
      default: r(() => [
        e.indicatorShown ? (n(), v("div", {
          key: 0,
          class: Y(["sd-smartcard-indicator", [`is-${e.statusState}`, `pos-${e.indicatorPosition}`, { "is-flash": e.flash }]]),
          title: e.indicatorTitle
        }, [
          t[0] || (t[0] = $("span", { class: "sd-smartcard-indicator__dot" }, null, -1)),
          e.indicator !== "dot" ? (n(), v("span", ng, A(e.statusLabel), 1)) : b("", !0),
          e.indicator === "badge" && e.lastCid ? (n(), v("span", sg, A(e.lastCid), 1)) : b("", !0)
        ], 10, ig)) : b("", !0)
      ]),
      _: 1
    })
  ])) : b("", !0);
}
const nS = /* @__PURE__ */ U(og, [["render", rg], ["__scopeId", "data-v-b20b37cd"]]), dg = "https://static.line-scdn.net/liff/edge/2/sdk.js";
let Ca = null;
const al = /* @__PURE__ */ new Map();
function ug() {
  return window.liff ? Promise.resolve(window.liff) : Ca || (Ca = new Promise((e, t) => {
    const a = document.createElement("script");
    a.src = dg, a.async = !0, a.onload = () => {
      window.liff ? e(window.liff) : t(new Error("LIFF SDK loaded but window.liff is undefined"));
    }, a.onerror = () => t(new Error("Failed to load LIFF SDK from CDN")), document.head.appendChild(a);
  }), Ca);
}
function pg() {
  const e = q(!1), t = q(!1), a = q(null), l = q(!1), o = q(!1), i = un(null);
  function s() {
    if (!window.liff) throw new Error("LIFF not initialized — call init() first");
    return window.liff;
  }
  async function u(_) {
    if (!_) {
      a.value = "liffId is required";
      return;
    }
    t.value = !0, a.value = null;
    try {
      let p = al.get(_);
      p || (p = ug().then((S) => S.init({ liffId: _ })), al.set(_, p)), await p;
      const y = s();
      e.value = !0, o.value = y.isInClient(), l.value = y.isLoggedIn(), l.value && (i.value = await y.getProfile());
    } catch (p) {
      a.value = p instanceof Error ? p.message : String(p), al.delete(_);
    } finally {
      t.value = !1;
    }
  }
  function m(_) {
    s().login(_ ? { redirectUri: _ } : void 0);
  }
  function f() {
    s().logout(), l.value = !1, i.value = null;
  }
  async function c() {
    const _ = s();
    return _.isLoggedIn() ? (i.value = await _.getProfile(), l.value = !0, i.value) : (m(), null);
  }
  function F() {
    return s().getIDToken();
  }
  async function D() {
    return (await s().scanCodeV2()).value;
  }
  async function g(_) {
    await s().sendMessages(_);
  }
  async function C(_) {
    const p = await s().shareTargetPicker(_);
    return !!p && p.status === "success";
  }
  return {
    // state (read-only ออกนอก)
    ready: $t(e),
    loading: $t(t),
    error: $t(a),
    loggedIn: $t(l),
    inClient: $t(o),
    profile: $t(i),
    // actions
    init: u,
    login: m,
    logout: f,
    fetchProfile: c,
    getIdToken: F,
    scan: D,
    sendMessages: g,
    share: C
  };
}
const mg = ["title"], hg = {
  key: 0,
  class: "sd-liff-indicator__label"
}, fg = /* @__PURE__ */ O({
  __name: "SdLiff",
  props: {
    liffId: {},
    autoLogin: { type: Boolean, default: !1 },
    indicator: { default: "none" },
    indicatorPosition: { default: "bottom-right" }
  },
  emits: ["ready", "profile", "token", "scan", "shareDone", "error"],
  setup(e, { expose: t, emit: a }) {
    const l = e, o = a, i = pg();
    xe(async () => {
      if (await i.init(l.liffId), i.error.value) {
        o("error", i.error.value);
        return;
      }
      if (o("ready"), l.autoLogin && !i.loggedIn.value) {
        i.login();
        return;
      }
      s();
    });
    function s() {
      i.profile.value && (o("profile", i.profile.value), o("token", i.getIdToken()));
    }
    async function u() {
      try {
        await i.fetchProfile() && s();
      } catch (p) {
        g(p);
      }
    }
    function m() {
      i.logout();
    }
    function f() {
      return i.getIdToken();
    }
    async function c() {
      try {
        const p = await i.scan();
        return p && o("scan", p), p;
      } catch (p) {
        return g(p), null;
      }
    }
    async function F(p) {
      try {
        const y = await i.share(p ?? [{ type: "text", text: "Shared from SDForm" }]);
        return o("shareDone", y), y;
      } catch (y) {
        return g(y), !1;
      }
    }
    async function D(p) {
      try {
        await i.sendMessages(p ?? [{ type: "text", text: "Sent from SDForm" }]), o("shareDone", !0);
      } catch (y) {
        g(y);
      }
    }
    function g(p) {
      o("error", p instanceof Error ? p.message : String(p));
    }
    const C = Z(() => i.error.value ? "error" : i.loading.value ? "loading" : i.loggedIn.value ? "success" : "idle"), _ = Z(() => i.error.value ? "LIFF error" : i.loading.value ? "LIFF connecting…" : i.loggedIn.value ? i.profile.value?.displayName || "LINE ready" : "LINE not logged in");
    return t({
      login: u,
      logout: m,
      getIdToken: f,
      scan: c,
      share: F,
      sendMessages: D,
      // state (readonly refs จาก useLiff)
      ready: i.ready,
      loading: i.loading,
      error: i.error,
      loggedIn: i.loggedIn,
      inClient: i.inClient,
      profile: i.profile
    }), (p, y) => (n(), h(hl, { to: "body" }, [
      d(fl, { name: "sd-liff-fade" }, {
        default: r(() => [
          e.indicator !== "none" ? (n(), v("div", {
            key: 0,
            class: Y(["sd-liff-indicator", [`is-${C.value}`, `pos-${e.indicatorPosition}`]]),
            title: _.value
          }, [
            y[0] || (y[0] = $("span", { class: "sd-liff-indicator__dot" }, null, -1)),
            e.indicator !== "dot" ? (n(), v("span", hg, A(_.value), 1)) : b("", !0)
          ], 10, mg)) : b("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), sS = /* @__PURE__ */ U(fg, [["__scopeId", "data-v-01d16ab7"]]), cg = O({
  name: "SdCrudTree",
  components: { SDCustomContent: Wa },
  emits: ["node-click", "select", "unselect", "aftersave", "afterdelete"],
  props: {
    // ─── Data source (หลักการเดียวกับ SdCascaderForm) ────────────────────────
    formId: {
      type: String,
      required: !0
    },
    valueField: {
      type: String,
      default: "_id"
    },
    labelField: {
      type: String,
      required: !0
    },
    // template 1 บรรทัด render ผ่าน SDCustomContent — ใส่หลาย field/el-* ได้
    // เช่น "{{o_name}} <el-tag size='small'>{{code}}</el-tag>" — ว่าง = ใช้ labelField
    detailContent: {
      type: String,
      default: ""
    },
    parentField: {
      type: String,
      required: !0
    },
    // parentField value ที่ถือว่าเป็น root (null = field ว่าง/ไม่มี parent)
    rootValue: {
      type: null,
      default: null
    },
    params: {
      type: Object,
      default: () => ({})
    },
    limit: {
      type: Number,
      default: 1e3
    },
    // NoQL WHERE เช่น "`status` = 'active'"
    where: {
      type: String,
      default: ""
    },
    // sort เช่น [{ column: 'name', sort: 'ASC' }]
    orderBy: {
      type: Array,
      default: null
    },
    userState: {
      type: Object,
      required: !0
    },
    // ─── Header / display ────────────────────────────────────────────────────
    titleEnable: {
      type: Boolean,
      default: !1
    },
    // ว่าง = ดึง form_name (default) · ใส่ = ใช้ค่านี้ (pattern เดียวกับ SdUiListView)
    titleName: {
      type: String,
      default: ""
    },
    // ว่าง = ดึง form_icon (default) · ใส่ = ใช้ svg-icon ชื่อนี้
    iconName: {
      type: String,
      default: ""
    },
    // '' / 'auto' = สูงตามเนื้อหา · '100%' = เต็ม parent · '300px' = fixed (scroll)
    height: {
      type: String,
      default: ""
    },
    defaultExpandAll: {
      type: Boolean,
      default: !0
    },
    highlightCurrent: {
      type: Boolean,
      default: !0
    },
    emptyText: {
      type: String,
      default: "No data"
    },
    // row height ของ virtual scroll (el-tree-v2) — ต้องพอให้ปุ่ม actions อยู่ได้
    itemSize: {
      type: Number,
      default: 40
    },
    // field ที่ใช้ค้นหา — มีค่า = แสดง search box + กรองตาม field เหล่านี้ (pattern เดียวกับ SdUiListView)
    searchFields: {
      type: Array,
      default: void 0
    },
    // 'data' = กรอง client-side จาก node ที่โหลด (เก็บ tree hierarchy, ไม่ยิง API)
    // 'db'   = ยิง query ไป DB (เหมือน list view) → คืน matched rows → แสดงเป็น flat list
    searchMode: {
      type: String,
      default: "data"
    },
    searchPlaceholder: {
      type: String,
      default: "Search..."
    },
    // ─── CRUD toggles + labels (ตามรูป Append/Edit/Delete) ───────────────────
    addBtnEnable: {
      type: Boolean,
      default: !0
    },
    appendBtnEnable: {
      type: Boolean,
      default: !0
    },
    viewBtnEnable: {
      type: Boolean,
      default: !0
    },
    updateBtnEnable: {
      type: Boolean,
      default: !0
    },
    delBtnEnable: {
      type: Boolean,
      default: !0
    },
    reloadBtnEnable: {
      type: Boolean,
      default: !0
    },
    addRootLabel: {
      type: String,
      default: "Add"
    },
    reloadLabel: {
      type: String,
      default: "Reload"
    },
    appendLabel: {
      type: String,
      default: "Append"
    },
    viewLabel: {
      type: String,
      default: "View"
    },
    editLabel: {
      type: String,
      default: "Edit"
    },
    deleteLabel: {
      type: String,
      default: "Delete"
    },
    deleteConfirmText: {
      type: String,
      default: "Are you sure you want to remove this item?"
    },
    // ─── Modal form options (ส่งต่อให้ subFormOpen เหมือน SdUiListView) ──────
    backdropForm: {
      type: Boolean,
      default: !1
    },
    initData: {
      type: Object,
      default: () => ({})
    },
    // realtime sync ข้าม client (topic 'gridform' เดียวกับ SdUiListView) — เปิดได้เมื่อ form ตั้ง enable_websocket
    enableWs: {
      type: Boolean,
      default: !0
    },
    // true = อยู่ใน builder (preview) → ไม่โหลดข้อมูลจริง
    buildState: {
      type: Boolean,
      default: !1
    },
    // ─── Hooks (เหมือน SdUiListView) ─────────────────────────────────────────
    insertBefore: {
      type: Function,
      default: null
    },
    updateBefore: {
      type: Function,
      default: null
    },
    viewBefore: {
      type: Function,
      default: null
    },
    beforeSave: {
      type: Function,
      default: null
    },
    afterDelete: {
      type: Function,
      default: null
    },
    allowDeleteFunc: {
      type: Function,
      default: null
    },
    clickEvent: {
      type: Function,
      default: null
    },
    selectEvent: {
      type: Function,
      default: null
    },
    unselectEvent: {
      type: Function,
      default: null
    }
  },
  setup() {
    return { subFormOpen: R("subFormOpen", void 0) };
  },
  data() {
    return {
      treeData: [],
      loading: !1,
      defaultParams: {},
      selectedKey: null,
      titleNameForm: "",
      // title ที่ resolve แล้ว (titleName || form_name)
      iconForm: "",
      // svg data ของ form_icon (เมื่อไม่ได้กำหนด iconName)
      sdformModel: null,
      // form model เต็ม (ใช้ title/icon + form_event + ws)
      wsConn: void 0,
      widgetId: "SdCrudTree-" + Ut(),
      afterDeleteForm: void 0,
      // compiled form_event.after_delete
      sdFunc: {},
      // context (this) ที่ส่งให้ form_event
      lastInsert: !1,
      // จำว่า action ล่าสุดเป็น insert หรือ update (ใช้ตอน wsSend)
      searchText: "",
      searchTimer: void 0,
      // debounce สำหรับ db search
      treeHeight: 400,
      // el-tree-v2 ต้องการ height เป็น number (virtual) — คำนวณตาม mode
      expandedKeys: [],
      // key ที่ expand อยู่ (ใช้คำนวณ height auto)
      resizeObserver: void 0
    };
  },
  computed: {
    // map field ของ data → el-tree-v2 (value = node key, label, children)
    treeProps() {
      return {
        value: this.valueField,
        label: this.labelField,
        children: "children"
      };
    },
    // auto = สูงตามเนื้อหา (ไม่กำหนด height หรือ 'auto')
    isAutoHeight() {
      const e = (this.height || "").trim();
      return !e || e === "auto";
    },
    // style ของ root: auto → ปล่อยสูงตามเนื้อหา · อื่นๆ → ตามค่าที่ใส่ (100% / 300px)
    heightStyle() {
      return this.isAutoHeight ? "auto" : this.height;
    }
  },
  async mounted() {
    this.defaultParams = { ...this.params }, this.titleNameForm = this.titleName, this.updateTreeHeight();
    const e = this.$refs.bodyRef;
    e && typeof ResizeObserver < "u" && (this.resizeObserver = new ResizeObserver(() => this.updateTreeHeight()), this.resizeObserver.observe(e)), !this.buildState && (await this.loadModel(), this.loadData());
  },
  unmounted() {
    this.wsConn?.wsDisconnect(), this.resizeObserver?.disconnect(), this.searchTimer && clearTimeout(this.searchTimer);
  },
  watch: {
    formId() {
      this.loadData();
    },
    params: {
      deep: !0,
      handler(e) {
        this.defaultParams = { ...e }, this.loadData();
      }
    },
    where() {
      this.loadData();
    },
    orderBy: {
      deep: !0,
      handler() {
        this.loadData();
      }
    }
  },
  methods: {
    // รองรับทั้ง plain ID และ { value, label } (จาก select-form-input)
    resolveParentId(e) {
      return e !== null && typeof e == "object" && "value" in e ? e.value : e;
    },
    // แปลง flat records → nested tree (logic เดียวกับ SdCascaderForm)
    buildTree(e) {
      const t = {};
      e.forEach((o) => {
        t[o[this.valueField]] = { ...o, children: [] };
      });
      const a = [];
      e.forEach((o) => {
        const i = this.resolveParentId(o[this.parentField]), s = t[o[this.valueField]];
        !i || i === this.rootValue || !t[i] ? a.push(s) : t[i].children.push(s);
      });
      const l = (o) => {
        o.forEach((i) => {
          i.children?.length === 0 ? delete i.children : i.children && l(i.children);
        });
      };
      return l(a), a;
    },
    // โหลด form model (cache ที่ formStore เหมือน SdUiListView) แล้ว init title/icon/form_event/ws
    async loadModel() {
      let e = this.userState.formStore?.[this.formId];
      if (!e) {
        const t = await $e(this.formId, this.userState);
        t.response && t.data && (e = t.data);
      }
      e && this.initForm(e);
    },
    initForm(e) {
      this.sdformModel = e, this.userState.formStore && (this.userState.formStore[this.formId] = e), this.titleName || (this.titleNameForm = e.form_name ? `${e.form_name}` : ""), this.iconName || (this.iconForm = e.form_icon || ""), e.form_event?.after_delete && e.form_event?.enable && (this.afterDeleteForm = new Function("formData", ..._e, e.form_event.after_delete)), this.sdFunc = {
        subFormOpen: this.subFormOpen,
        userState: this.userState,
        params: this.params,
        ElMessage: B,
        sdformModel: this.sdformModel,
        wsConn: this.wsConn,
        handleAppend: this.handleAppend,
        handleUpdate: this.handleUpdate,
        handleView: this.handleView
      }, this.setupWs();
    },
    // realtime: tree ต้อง rebuild → reload ทั้งหมดเมื่อมี event จาก client อื่น
    setupWs() {
      this.enableWs && this.sdformModel?.form_options?.enable_websocket && (this.wsConn = this.userState.connectWebSocket("gridform", this.sdformModel.dataid, this.widgetId, (e) => {
        const t = e.from === this.userState.user?.username && !(e.params && e.params.widget && e.params.widget !== this.widgetId);
        e.from !== "server" && !t && this.loadData();
      }), this.sdFunc.wsConn = this.wsConn);
    },
    loadData() {
      if (this.buildState) return;
      this.loading = !0;
      const e = this.searchMode === "db" && !!this.searchText && !!this.searchFields?.length, t = { limit: this.limit };
      this.where && (t.where = this.where), this.orderBy && (t.orderBy = this.orderBy);
      const a = { ...this.defaultParams };
      e && (t.search = this.searchFields, a.q = `%${this.searchText}%`), this.userState.crudGetAll(
        {
          sdProvider: {
            providerId: this.formId,
            providerType: "FORM",
            options: t,
            params: a
          },
          totalEnable: !1
        },
        (l) => {
          this.loading = !1;
          const o = l?.data && Array.isArray(l.data) ? l.data : [];
          e ? this.treeData = o : (this.treeData = this.buildTree(o), this.$nextTick(() => {
            this.defaultExpandAll && this.expandAllNodes(), this.searchMode === "data" && this.searchText && this.applyClientFilter(), this.updateTreeHeight();
          }));
        },
        () => {
          this.loading = !1, this.treeData = [];
        }
      );
    },
    // ─── CRUD: เปิดฟอร์มผ่าน subFormOpen (parity กับ SdUiListView) ───────────
    openForm(e) {
      if (!this.subFormOpen) {
        B.warning("subFormOpen not available (need form runtime)");
        return;
      }
      this.subFormOpen({
        modelValue: e.modelValue ?? !0,
        initData: e.initData,
        backdrop: this.backdropForm,
        readonly: !!e.readonly,
        formId: this.formId,
        parentId: e.parentId,
        params: this.params,
        beforeSaveCallback: this.beforeSave,
        cancelCallback: this.handleCancel,
        // required prop ของ SdCrudPopupForm
        afterSaveCallback: this.afterSave
      });
    },
    // Add root: parent ว่าง
    handleAddRoot() {
      this.buildState || (this.lastInsert = !0, this.insertBefore && this.insertBefore(null), this.openForm({ initData: { ...this.initData }, parentId: "" }));
    },
    // Append child: parent = node ที่กด → ต้อง seed ค่า parentField ใน initData
    // เองด้วย (form ถึงจะบันทึก parent ถูก) — parent_id เก็บแบบ { value, label } ตาม select-form-input
    handleAppend(e) {
      if (this.buildState) return;
      this.lastInsert = !0;
      const t = this.resolveParentId(e[this.valueField]), a = {
        ...this.initData,
        [this.parentField]: {
          value: e[this.valueField],
          label: e[this.labelField]
        }
      };
      this.insertBefore && this.insertBefore(e), this.openForm({ initData: a, parentId: t });
    },
    handleUpdate(e) {
      if (this.buildState) return;
      this.lastInsert = !1, this.updateBefore && this.updateBefore(e);
      const t = this.resolveParentId(e[this.parentField]);
      this.openForm({ initData: e, parentId: t ?? "" });
    },
    handleView(e) {
      if (this.buildState) return;
      this.viewBefore && this.viewBefore(e);
      const t = this.resolveParentId(e[this.parentField]);
      this.openForm({ initData: e, parentId: t ?? "", readonly: !0 });
    },
    // ปิด modal: เรียก subFormOpen ซ้ำด้วย modelValue:false (provider InitApp/runtime จะ set flag = false)
    handleCancel() {
      this.openForm({ initData: {}, parentId: "", modelValue: !1 });
    },
    // หลัง save เสร็จ: ปิด modal (ถ้าไม่ใช่ autoSave) + notify ws + reload (เหมือน SdUiListView)
    afterSave(e, t = !1) {
      t || this.openForm({ initData: {}, parentId: "", modelValue: !1 }), e && this.wsConn?.wsSend({
        data: e,
        method: this.lastInsert ? "insert" : "update",
        keyid: this.valueField,
        params: { widget: this.widgetId }
      }), this.loadData(), this.$emit("aftersave", e);
    },
    handleDelete(e) {
      this.buildState || this.allowDeleteFunc && !this.allowDeleteFunc(e) || ye.confirm(this.deleteConfirmText, "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(async () => {
        if (await Ha(this.formId, e[this.valueField], this.userState)) {
          if (this.wsConn?.wsSend({ data: e, method: "delete", keyid: this.valueField, params: { widget: this.widgetId } }), this.selectedKey != null && e[this.valueField] === this.selectedKey && (this.selectedKey = null), this.afterDelete && this.afterDelete(e), this.$emit("afterdelete", e), this.sdformModel?.form_event?.enable && this.afterDeleteForm)
            try {
              this.afterDeleteForm.call(this.sdFunc, e);
            } catch (a) {
              B.error(a.message);
            }
          this.loadData(), B.success("Delete completed.");
        } else
          B.warning("Unable to remove data");
      }).catch(() => {
      });
    },
    // ─── Selection (click) ───────────────────────────────────────────────────
    handleNodeClick(e) {
      if (this.buildState) return;
      const t = e[this.valueField];
      t != null && this.selectedKey === t ? (this.selectedKey = null, this.unselectEvent && this.unselectEvent(e), this.$emit("unselect", e)) : (this.selectedKey = t, this.selectEvent && this.selectEvent(e), this.$emit("select", e)), this.clickEvent && this.clickEvent(e), this.$emit("node-click", e);
    },
    // ─── el-tree-v2: height / filter / expand ────────────────────────────────
    // el-tree-v2 (virtual) ต้องการ height เป็น number เสมอ → คำนวณตาม mode ของ prop height
    updateTreeHeight() {
      if (this.isAutoHeight) {
        const e = this.countVisibleNodes();
        this.treeHeight = Math.max(e, 1) * this.itemSize;
      } else if (this.height.trim().endsWith("%")) {
        const e = this.$refs.bodyRef;
        e && e.clientHeight > 0 && (this.treeHeight = e.clientHeight);
      } else
        this.treeHeight = parseInt(this.height, 10) || 400;
    },
    // นับ node ที่มองเห็น (เฉพาะที่ ancestor ทุกตัว expand อยู่) — ใช้กับ height auto
    countVisibleNodes() {
      let e = 0;
      const t = (a) => {
        a.forEach((l) => {
          e++, l.children?.length && this.expandedKeys.includes(l[this.valueField]) && t(l.children);
        });
      };
      return t(this.treeData), e;
    },
    // expand/collapse แล้ว → อัปเดต expandedKeys + คำนวณ height ใหม่ (เฉพาะ auto ที่กระทบ)
    onNodeToggle(e, t) {
      const a = t?.key;
      a != null && (t.expanded ? this.expandedKeys.includes(a) || this.expandedKeys.push(a) : this.expandedKeys = this.expandedKeys.filter((l) => l !== a), this.isAutoHeight && this.updateTreeHeight());
    },
    // search box → แยกตาม searchMode
    handleSearch() {
      this.searchMode === "db" ? (this.searchTimer && clearTimeout(this.searchTimer), this.searchTimer = setTimeout(() => this.loadData(), 300)) : this.applyClientFilter();
    },
    applyClientFilter() {
      this.$refs.treeRef?.filter?.(this.searchText);
    },
    // data mode: กรองจากทุก field ใน searchFields (case-insensitive) — ว่าง = แสดงหมด
    filterMethod(e, t) {
      if (!e) return !0;
      const a = this.searchFields?.length ? this.searchFields : [this.labelField], l = String(e).toLowerCase();
      return a.some((o) => {
        let i = t?.[o];
        return i !== null && typeof i == "object" && "label" in i && (i = i.label), String(i ?? "").toLowerCase().includes(l);
      });
    },
    // expand-all: el-tree-v2 ไม่มี default-expand-all → set keys เองหลังโหลด
    expandAllNodes() {
      const e = [], t = (l) => {
        l.forEach((o) => {
          e.push(o[this.valueField]), o.children?.length && t(o.children);
        });
      };
      t(this.treeData), this.expandedKeys = e, this.$refs.treeRef?.setExpandedKeys?.(e);
    },
    reload() {
      this.loadData();
    }
  }
}), bg = {
  key: 0,
  class: "sd-crud-tree__header"
}, gg = {
  key: 0,
  class: "sd-crud-tree__title"
}, yg = { class: "sd-crud-tree__header-actions" }, vg = {
  key: 1,
  class: "sd-crud-tree__search"
}, wg = {
  ref: "bodyRef",
  class: "sd-crud-tree__body"
}, Sg = { class: "sd-crud-tree__node" }, Fg = { class: "sd-crud-tree__label" }, _g = { class: "sd-crud-tree__actions" };
function kg(e, t, a, l, o, i) {
  const s = Ze, u = ve, m = X("Plus"), f = qe, c = ie, F = X("Refresh"), D = X("Search"), g = Te, C = Wa, _ = X("View"), p = X("EditPen"), y = X("Delete"), S = an, N = oa;
  return n(), v("div", {
    class: "sd-crud-tree",
    style: le({ height: e.heightStyle })
  }, [
    e.titleEnable || e.addBtnEnable || e.reloadBtnEnable || e.$slots.actionsBar ? (n(), v("div", bg, [
      e.titleEnable ? (n(), v("span", gg, [
        e.iconForm ? (n(), h(s, {
          key: 0,
          "svg-data": e.iconForm
        }, null, 8, ["svg-data"])) : e.iconName ? (n(), h(u, {
          key: 1,
          "icon-name": e.iconName
        }, null, 8, ["icon-name"])) : (n(), h(u, {
          key: 2,
          "icon-name": "icon-sdform"
        })),
        I(" " + A(e.titleNameForm), 1)
      ])) : b("", !0),
      $("div", yg, [
        re(e.$slots, "actionsBar", {}, void 0, !0),
        e.addBtnEnable ? (n(), h(c, {
          key: 0,
          type: "success",
          circle: "",
          size: "small",
          title: e.addRootLabel,
          onClick: e.handleAddRoot
        }, {
          default: r(() => [
            d(f, null, {
              default: r(() => [
                d(m)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["title", "onClick"])) : b("", !0),
        e.reloadBtnEnable ? (n(), h(c, {
          key: 1,
          circle: "",
          size: "small",
          loading: e.loading,
          title: e.reloadLabel,
          onClick: e.reload
        }, {
          default: r(() => [
            d(f, null, {
              default: r(() => [
                d(F)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["loading", "title", "onClick"])) : b("", !0)
      ])
    ])) : b("", !0),
    e.searchFields ? (n(), v("div", vg, [
      d(g, {
        modelValue: e.searchText,
        "onUpdate:modelValue": t[0] || (t[0] = (w) => e.searchText = w),
        placeholder: e.searchPlaceholder,
        clearable: "",
        onInput: e.handleSearch
      }, {
        prefix: r(() => [
          d(f, null, {
            default: r(() => [
              d(D)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["modelValue", "placeholder", "onInput"])
    ])) : b("", !0),
    Ve((n(), v("div", wg, [
      d(S, {
        ref: "treeRef",
        data: e.treeData,
        props: e.treeProps,
        height: e.treeHeight,
        "item-size": e.itemSize,
        "expand-on-click-node": !1,
        "highlight-current": e.highlightCurrent,
        "filter-method": e.filterMethod,
        "empty-text": e.emptyText,
        onNodeClick: e.handleNodeClick,
        onNodeExpand: e.onNodeToggle,
        onNodeCollapse: e.onNodeToggle
      }, {
        default: r(({ node: w, data: T }) => [
          $("div", Sg, [
            $("span", Fg, [
              e.detailContent ? (n(), h(C, {
                key: 0,
                content: e.detailContent,
                data: T
              }, null, 8, ["content", "data"])) : (n(), v(L, { key: 1 }, [
                I(A(w.label), 1)
              ], 64))
            ]),
            $("span", _g, [
              re(e.$slots, "actionBtnRow", {
                row: T,
                node: w
              }, void 0, !0),
              e.appendBtnEnable ? (n(), h(c, {
                key: 0,
                type: "success",
                circle: "",
                plain: "",
                size: "small",
                title: e.appendLabel,
                onClick: j((V) => e.handleAppend(T), ["stop"])
              }, {
                default: r(() => [
                  d(f, null, {
                    default: r(() => [
                      d(m)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "onClick"])) : b("", !0),
              e.viewBtnEnable ? (n(), h(c, {
                key: 1,
                type: "info",
                circle: "",
                plain: "",
                size: "small",
                title: e.viewLabel,
                onClick: j((V) => e.handleView(T), ["stop"])
              }, {
                default: r(() => [
                  d(f, null, {
                    default: r(() => [
                      d(_)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "onClick"])) : b("", !0),
              e.updateBtnEnable ? (n(), h(c, {
                key: 2,
                type: "primary",
                circle: "",
                plain: "",
                size: "small",
                title: e.editLabel,
                onClick: j((V) => e.handleUpdate(T), ["stop"])
              }, {
                default: r(() => [
                  d(f, null, {
                    default: r(() => [
                      d(p)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "onClick"])) : b("", !0),
              e.delBtnEnable ? (n(), h(c, {
                key: 3,
                type: "danger",
                circle: "",
                plain: "",
                size: "small",
                title: e.deleteLabel,
                onClick: j((V) => e.handleDelete(T), ["stop"])
              }, {
                default: r(() => [
                  d(f, null, {
                    default: r(() => [
                      d(y)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["title", "onClick"])) : b("", !0)
            ])
          ])
        ]),
        _: 3
      }, 8, ["data", "props", "height", "item-size", "highlight-current", "filter-method", "empty-text", "onNodeClick", "onNodeExpand", "onNodeCollapse"])
    ])), [
      [N, e.loading]
    ])
  ], 4);
}
const rS = /* @__PURE__ */ U(cg, [["render", kg], ["__scopeId", "data-v-5db24e92"]]), Cg = O({
  name: "SdUnitSwitcher",
  emits: ["switched"],
  props: {
    userState: {
      type: Object,
      required: !0
    },
    // เปิด section ห้องตรวจ — ปิด (default) = dropdown มีเฉพาะ UNITS
    roomEnable: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      units: [],
      rooms: [],
      allowAll: !1,
      loading: !1,
      loaded: !1,
      switching: !1,
      keyword: ""
    };
  },
  computed: {
    currentCode() {
      return this.userState?.user?.unit?.code || "";
    },
    currentName() {
      return this.userState?.user?.unit?.name || "-";
    },
    currentRoomId() {
      return this.userState?.user?.room?.id || "";
    },
    currentRoomName() {
      return this.userState?.user?.room?.name || "";
    },
    displayLabel() {
      return this.roomEnable && this.currentRoomName ? `${this.currentName} / ${this.currentRoomName}` : this.currentName;
    },
    // ค้นหาฝั่ง client จาก list ที่โหลดแล้ว (endpoint คืนสูงสุด 500 แถว) — ค้นทั้ง code และชื่อ
    filteredUnits() {
      const e = this.keyword.trim().toLowerCase();
      return e ? this.units.filter((t) => {
        const a = (t.unit_code || "").toLowerCase(), l = (t.unit_name || "").toLowerCase();
        return a.includes(e) || l.includes(e);
      }) : this.units;
    },
    filteredRooms() {
      if (!this.roomEnable)
        return [];
      const e = this.keyword.trim().toLowerCase();
      return e ? this.rooms.filter((t) => {
        const a = (t.code || "").toLowerCase(), l = (t.name || "").toLowerCase(), o = (t.unit?.label || "").toLowerCase();
        return a.includes(e) || l.includes(e) || o.includes(e);
      }) : this.rooms;
    }
  },
  methods: {
    async loadOptions() {
      this.loading = !0;
      try {
        const e = [this.userState.getUnitOptions()];
        this.roomEnable && e.push(this.userState.getRoomOptions());
        const [t, a] = await Promise.all(e);
        this.units = t.units, this.allowAll = t.allowAll, this.rooms = a ? a.rooms : [], this.loaded = !0;
      } finally {
        this.loading = !1;
      }
    },
    handleVisibleChange(e) {
      e && !this.loaded && !this.loading && this.loadOptions(), e && (this.keyword = "");
    },
    async handleCommand(e) {
      if (!(!e || !e.data || this.switching)) {
        this.switching = !0;
        try {
          let t = !1;
          e.kind === "room" ? t = await this.userState.switchRoom(e.data._id) : t = await this.userState.switchUnit(e.data._id), t && this.$emit("switched", e);
        } finally {
          this.switching = !1;
        }
      }
    }
  }
}), Dg = ["title"], Ig = { class: "sd-unit-switcher__name sd-unit-switcher__name--unit" }, $g = { class: "sd-unit-switcher__name sd-unit-switcher__name--room" }, Tg = {
  key: 0,
  class: "sd-unit-switcher__section"
}, Pg = { class: "sd-unit-switcher__code" }, Mg = { class: "sd-unit-switcher__code" }, Vg = {
  key: 0,
  class: "sd-unit-switcher__unit-tag"
};
function Eg(e, t, a, l, o, i) {
  const s = Te, u = _t, m = Ft, f = St;
  return e.userState && e.userState.user ? (n(), h(f, {
    key: 0,
    trigger: "click",
    "popper-class": "sd-unit-switcher__popper",
    onVisibleChange: e.handleVisibleChange,
    onCommand: e.handleCommand
  }, {
    dropdown: r(() => [
      d(m, { class: "sd-unit-switcher__menu" }, {
        default: r(() => [
          $("div", {
            class: "sd-unit-switcher__search",
            onClick: t[1] || (t[1] = j(() => {
            }, ["stop"]))
          }, [
            d(s, {
              modelValue: e.keyword,
              "onUpdate:modelValue": t[0] || (t[0] = (c) => e.keyword = c),
              size: "small",
              placeholder: "Search...",
              clearable: ""
            }, null, 8, ["modelValue"])
          ]),
          e.loading ? (n(), h(u, {
            key: 0,
            disabled: ""
          }, {
            default: r(() => [...t[4] || (t[4] = [
              I("Loading...", -1)
            ])]),
            _: 1
          })) : (n(), v(L, { key: 1 }, [
            e.roomEnable && e.filteredUnits.length > 0 ? (n(), v("div", Tg, "Units")) : b("", !0),
            e.filteredUnits.length === 0 && e.filteredRooms.length === 0 ? (n(), h(u, {
              key: 1,
              disabled: ""
            }, {
              default: r(() => [...t[5] || (t[5] = [
                I("No results found", -1)
              ])]),
              _: 1
            })) : b("", !0),
            (n(!0), v(L, null, J(e.filteredUnits, (c) => (n(), h(u, {
              key: c._id,
              command: { kind: "unit", data: c },
              disabled: e.switching || c.unit_code === e.currentCode
            }, {
              default: r(() => [
                $("span", {
                  class: Y(["sd-unit-switcher__item", { "is-current": c.unit_code === e.currentCode }])
                }, [
                  $("span", Pg, A(c.unit_code), 1),
                  $("span", null, A(c.unit_name), 1)
                ], 2)
              ]),
              _: 2
            }, 1032, ["command", "disabled"]))), 128)),
            e.roomEnable && e.filteredRooms.length > 0 ? (n(), v(L, { key: 2 }, [
              t[6] || (t[6] = $("div", { class: "sd-unit-switcher__section" }, "Rooms", -1)),
              (n(!0), v(L, null, J(e.filteredRooms, (c) => (n(), h(u, {
                key: c._id,
                command: { kind: "room", data: c },
                disabled: e.switching || c._id === e.currentRoomId
              }, {
                default: r(() => [
                  $("span", {
                    class: Y(["sd-unit-switcher__item", { "is-current": c._id === e.currentRoomId }])
                  }, [
                    $("span", Mg, A(c.code), 1),
                    $("span", null, A(c.name), 1),
                    c.unit ? (n(), v("span", Vg, A(c.unit.label), 1)) : b("", !0)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["command", "disabled"]))), 128))
            ], 64)) : b("", !0)
          ], 64))
        ]),
        _: 1
      })
    ]),
    default: r(() => [
      $("span", {
        class: "sd-unit-switcher__label",
        title: e.displayLabel
      }, [
        $("span", Ig, A(e.currentName), 1),
        e.roomEnable && e.currentRoomName ? (n(), v(L, { key: 0 }, [
          t[2] || (t[2] = $("span", { class: "sd-unit-switcher__sep" }, "/", -1)),
          $("span", $g, A(e.currentRoomName), 1)
        ], 64)) : b("", !0),
        t[3] || (t[3] = $("span", { class: "sd-unit-switcher__caret" }, null, -1))
      ], 8, Dg)
    ]),
    _: 1
  }, 8, ["onVisibleChange", "onCommand"])) : b("", !0);
}
const dS = /* @__PURE__ */ U(Cg, [["render", Eg], ["__scopeId", "data-v-c7742a41"]]);
export {
  Rm as $,
  Ra as A,
  Jw as B,
  sS as C,
  Aw as D,
  Xw as E,
  Qw as F,
  iS as G,
  Fi as H,
  nS as I,
  Zw as J,
  Nh as K,
  eS as L,
  tS as M,
  dS as N,
  Hp as O,
  ha as P,
  Ze as Q,
  ve as R,
  Uw as S,
  Ow as T,
  vl as U,
  Oe as V,
  Hm as W,
  Je as X,
  qa as Y,
  Lw as Z,
  Wa as _,
  zw as a,
  fi as a0,
  Bw as a1,
  $e as a2,
  Um as a3,
  Nw as a4,
  Ee as a5,
  za as a6,
  wo as a7,
  Zt as a8,
  Ha as a9,
  Cw as aA,
  _e as aB,
  oe as aC,
  gw as aD,
  Iw as aE,
  Dw as aF,
  Pt as aG,
  kw as aH,
  _w as aI,
  fe as aJ,
  dc as aK,
  Sl as aL,
  yt as aa,
  at as ab,
  Xt as ac,
  zm as ad,
  ci as ae,
  U as af,
  $r as ag,
  Pe as ah,
  P as ai,
  yw as aj,
  Ut as ak,
  Sw as al,
  ww as am,
  pe as an,
  ll as ao,
  Mw as ap,
  Pw as aq,
  Tr as ar,
  Vw as as,
  Tw as at,
  $w as au,
  gl as av,
  Fw as aw,
  bl as ax,
  vw as ay,
  yl as az,
  jw as b,
  aS as c,
  Rw as d,
  xo as e,
  Ew as f,
  wl as g,
  jf as h,
  Hf as i,
  Kf as j,
  Hw as k,
  ic as l,
  rS as m,
  qw as n,
  lS as o,
  oS as p,
  Ww as q,
  xw as r,
  wc as s,
  Kw as t,
  bi as u,
  gi as v,
  $f as w,
  Gw as x,
  Yw as y,
  zt as z
};
