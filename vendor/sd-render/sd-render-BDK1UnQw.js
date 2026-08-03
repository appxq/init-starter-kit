import { defineComponent as C, inject as A, openBlock as l, createElementBlock as c, normalizeClass as S, renderSlot as ke, createBlock as a, withCtx as f, createTextVNode as E, toDisplayString as F, createCommentVNode as b, getCurrentInstance as hi, withDirectives as Q, resolveDynamicComponent as N, mergeProps as he, Fragment as y, renderList as T, vShow as X, resolveComponent as Z, normalizeStyle as j, createSlots as Y, createElementVNode as v, createVNode as h, computed as _, useCssVars as Ae, withModifiers as U, ref as R, nextTick as ci, reactive as bi, markRaw as de, h as gi } from "vue";
import { af as I, ag as Fi, R as V, ah as Ne, ai as D, aj as P, ak as ae, al as ve, am as yi, an as oe, ao as vi, ap as wi, aq as Ci, ar as Si, as as We, at as Ii, au as Mi, av as Ri, aw as ki, ax as Me, ay as Re, az as Oi, aA as Pi, aB as z, a as $i, aC as Ei, q as He, J as Li, c as ji, d as Di, e as Ti, f as Vi, h as qe, F as le, o as ie, p as Ge, A as we, B as Ui, C as Je, K as Bi, D as zi, M as Ai, G as Ke, aD as me, l as Oe, H as Ni, L as Wi, I as Ze, Q as Hi, m as Qe, _ as Ye, aE as qi, aF as Gi, aG as Ji, aH as Ki, aI as Zi, aJ as je, T as Qi, aK as Yi, aL as Xi, i as _i, j as xi } from "./sd-lib-CnAtQ_WL.js";
import { useMediaQuery as et, useDark as H } from "@vueuse/core";
import { ElTag as ue, ElCard as Xe, ElTooltip as ne, ElIcon as be, ElCollapse as it, ElCollapseItem as tt, ElCol as ge, ElRow as Fe, ElScrollbar as ot, ElSpace as lt, ElButton as q, ElTabs as nt, ElTabPane as st, ElAlert as _e, ElFormItem as xe, ElInput as ye, ElAvatar as rt, ElDialog as ei, ElButtonGroup as dt, ElPopconfirm as pe, ElBadge as at, ElCheckboxGroup as ft, ElCheckboxButton as ut, ElCheckbox as pt, ElColorPicker as mt, ElDivider as ii, ElDropdown as ht, ElDropdownMenu as ct, ElDropdownItem as bt, ElUpload as Pe, ElAutocomplete as gt, ElImage as ti, ElLink as Ft, ElInputNumber as yt, ElInputOtp as vt, ElProgress as wt, ElRadioGroup as oi, ElRadioButton as Ct, ElRadio as li, ElRate as St, ElSegmented as It, ElSelect as Mt, ElOption as Rt, ElSlider as kt, ElStatistic as Ot, ElSteps as Pt, ElStep as $t, ElSwitch as Et, ElInputTag as Lt, ElText as jt, ElTimePicker as ni, ElTimeSelect as Dt, ElTour as Tt, ElTourStep as Vt, ElForm as Ut, ElLoadingDirective as Bt } from "element-plus/es";
import "element-plus/es/components/base/style/index";
import "element-plus/es/components/card/style/index";
import "element-plus/es/components/icon/style/index";
import "element-plus/es/components/tooltip/style/index";
import "element-plus/es/components/collapse/style/index";
import "element-plus/es/components/collapse-item/style/index";
import "element-plus/es/components/row/style/index";
import "element-plus/es/components/col/style/index";
import "element-plus/es/components/scrollbar/style/index";
import "element-plus/es/components/space/style/index";
import "element-plus/es/components/button/style/index";
import { ElMessage as x, ElMessageBox as te, ElNotification as si, ElLoading as zt } from "element-plus";
import "element-plus/es/components/tabs/style/index";
import "element-plus/es/components/tab-pane/style/index";
import "element-plus/es/components/tag/style/index";
import "element-plus/es/components/alert/style/index";
import "element-plus/es/components/input/style/index";
import "element-plus/es/components/avatar/style/index";
import "element-plus/es/components/dialog/style/index";
import "element-plus/es/components/badge/style/index";
import "element-plus/es/components/button-group/style/index";
import "element-plus/es/components/popconfirm/style/index";
import "element-plus/es/components/checkbox-group/style/index";
import "element-plus/es/components/checkbox/style/index";
import "element-plus/es/components/checkbox-button/style/index";
import ce from "axios";
import "element-plus/es/components/color-picker/style/index";
import fe from "dayjs";
import "element-plus/es/components/divider/style/index";
import "element-plus/es/components/dropdown/style/index";
import "element-plus/es/components/dropdown-menu/style/index";
import "element-plus/es/components/dropdown-item/style/index";
import "element-plus/es/components/upload/style/index";
import "element-plus/es/components/autocomplete/style/index";
import At from "fuse.js";
import "element-plus/es/components/image/style/index";
import { Mode as Nt } from "vanilla-jsoneditor";
import Wt from "json-editor-vue";
import "element-plus/es/components/link/style/index";
import "element-plus/es/components/input-number/style/index";
import "element-plus/es/components/input-otp/style/index";
import "element-plus/es/components/progress/style/index";
import Ht from "@chenfengyuan/vue-qrcode";
import "element-plus/es/components/radio-group/style/index";
import "element-plus/es/components/radio/style/index";
import "element-plus/es/components/radio-button/style/index";
import "element-plus/es/components/rate/style/index";
import "element-plus/es/components/segmented/style/index";
import "element-plus/es/components/select/style/index";
import "element-plus/es/components/option/style/index";
import "element-plus/es/components/slider/style/index";
import "element-plus/es/components/statistic/style/index";
import "element-plus/es/components/steps/style/index";
import "element-plus/es/components/step/style/index";
import "element-plus/es/components/switch/style/index";
import "element-plus/es/components/input-tag/style/index";
import "element-plus/es/components/text/style/index";
import "element-plus/es/components/time-picker/style/index";
import "element-plus/es/components/form-item/style/index";
import "element-plus/es/components/time-select/style/index";
import "element-plus/es/components/tour/style/index";
import "element-plus/es/components/tour-step/style/index";
import { useRoute as ri, useRouter as di } from "vue-router";
import { Panel as qt, Handle as Gt, VueFlow as Jt } from "@vue-flow/core";
import "@vue-flow/core/dist/style.css";
import "@vue-flow/core/dist/theme-default.css";
import "element-plus/es/components/loading/style/index";
import "element-plus/es/components/form/style/index";
import "element-plus/es/components/timeline-item/style/index";
import "element-plus/es/components/popover/style/index";
import "element-plus/es/components/table/style/index";
import "element-plus/es/components/table-column/style/index";
import "element-plus/es/components/select-v2/style/index";
import "element-plus/es/components/pagination/style/index";
import "element-plus/es/components/option-group/style/index";
import "element-plus/es/components/descriptions/style/index";
import "element-plus/es/components/descriptions-item/style/index";
import "element-plus/es/components/date-picker/style/index";
import "vanilla-jsoneditor/themes/jse-theme-dark.css";
import "dagre";
import "element-plus/es/components/carousel/style/index";
import "element-plus/es/components/carousel-item/style/index";
import "element-plus/es/components/menu/style/index";
import "element-plus/es/components/sub-menu/style/index";
import "element-plus/es/components/menu-item/style/index";
import "element-plus/es/components/skeleton/style/index";
import "element-plus/es/components/skeleton-item/style/index";
import "element-plus/es/components/cascader/style/index";
import "element-plus/es/locale/lang/th";
import "element-plus/es/components/date-picker-panel/style/index";
import "element-plus/es/components/tree-v2/style/index";
import { AES as Kt, pad as Zt, mode as Qt, enc as ai } from "crypto-ts";
import Yt from "node-rsa";
const Ce = /* @__PURE__ */ Object.assign({ "./affix-render.vue": () => Promise.resolve().then(() => no), "./card-render.vue": () => Promise.resolve().then(() => Mo), "./collapse-render.vue": () => Promise.resolve().then(() => $o), "./grid-render.vue": () => Promise.resolve().then(() => Vo), "./object-group-render.vue": () => Promise.resolve().then(() => Ao), "./scrollbar-render.vue": () => Promise.resolve().then(() => qo), "./space-render.vue": () => Promise.resolve().then(() => Zo), "./sub-form-render.vue": () => Promise.resolve().then(() => il), "./tab-render.vue": () => Promise.resolve().then(() => sl), "./table-render.vue": () => Promise.resolve().then(() => ml) }), Xt = {
  install(e) {
    for (const i in Ce)
      Ce[i] && Ce[i]().then((t) => {
        const o = t.default.name;
        o && e.component(o, t.default);
      });
  }
}, Se = /* @__PURE__ */ Object.assign({ "./alert-ui.vue": () => Promise.resolve().then(() => Sl), "./apexchart-ui.vue": () => Promise.resolve().then(() => kl), "./autonumber-input.vue": () => Promise.resolve().then(() => Bl), "./avatar-ui.vue": () => Promise.resolve().then(() => Wl), "./btn-editor-input.vue": () => Promise.resolve().then(() => Ql), "./button-ui.vue": () => Promise.resolve().then(() => xl), "./carousel-ui.vue": () => Promise.resolve().then(() => ln), "./cascader-form-input.vue": () => Promise.resolve().then(() => dn), "./chart-ui.vue": () => Promise.resolve().then(() => pn), "./checkbox-input.vue": () => Promise.resolve().then(() => bn), "./code-input.vue": () => Promise.resolve().then(() => wn), "./color-input.vue": () => Promise.resolve().then(() => Mn), "./crop-upload-input.vue": () => Promise.resolve().then(() => Pn), "./datagrid-form-ui.vue": () => Promise.resolve().then(() => jn), "./datagrid-sql-ui.vue": () => Promise.resolve().then(() => Un), "./date-input.vue": () => Promise.resolve().then(() => Nn), "./date-panel-input.vue": () => Promise.resolve().then(() => Gn), "./date-range-input.vue": () => Promise.resolve().then(() => Qn), "./divider-ui.vue": () => Promise.resolve().then(() => xn), "./dropdown-ui.vue": () => Promise.resolve().then(() => os), "./dynamic-input.vue": () => Promise.resolve().then(() => rs), "./file-upload-input.vue": () => Promise.resolve().then(() => gs), "./group-list-input.vue": () => Promise.resolve().then(() => ws), "./html-input.vue": () => Promise.resolve().then(() => Ms), "./html-ui.vue": () => Promise.resolve().then(() => Ps), "./icon-input.vue": () => Promise.resolve().then(() => js), "./image-ui.vue": () => Promise.resolve().then(() => Bs), "./json-input.vue": () => Promise.resolve().then(() => Ws), "./liff-ui.vue": () => Promise.resolve().then(() => Js), "./link-ui.vue": () => Promise.resolve().then(() => Ys), "./list-ui.vue": () => Promise.resolve().then(() => er), "./masked-input.vue": () => Promise.resolve().then(() => nr), "./multiple-date.vue": () => Promise.resolve().then(() => ar), "./number-input.vue": () => Promise.resolve().then(() => cr), "./objectid-input.vue": () => Promise.resolve().then(() => yr), "./otp-input.vue": () => Promise.resolve().then(() => Sr), "./picture-upload-input.vue": () => Promise.resolve().then(() => Lr), "./progress-ui.vue": () => Promise.resolve().then(() => Vr), "./qrcode-ui.vue": () => Promise.resolve().then(() => Ar), "./radio-input.vue": () => Promise.resolve().then(() => qr), "./radio-text-input.vue": () => Promise.resolve().then(() => Zr), "./rate-input.vue": () => Promise.resolve().then(() => _r), "./record-ui.vue": () => Promise.resolve().then(() => od), "./report-ui.vue": () => Promise.resolve().then(() => rd), "./scan-code-ui.vue": () => Promise.resolve().then(() => ud), "./segmented-ui.vue": () => Promise.resolve().then(() => cd), "./select-data-input.vue": () => Promise.resolve().then(() => yd), "./select-form-input.vue": () => Promise.resolve().then(() => Sd), "./select-input.vue": () => Promise.resolve().then(() => kd), "./select-path-input.vue": () => Promise.resolve().then(() => Ed), "./select-sql-input.vue": () => Promise.resolve().then(() => Td), "./side-menu-ui.vue": () => Promise.resolve().then(() => zd), "./slider-input.vue": () => Promise.resolve().then(() => Hd), "./smart-card-ui.vue": () => Promise.resolve().then(() => Kd), "./statistic-ui.vue": () => Promise.resolve().then(() => ta), "./step-ui.vue": () => Promise.resolve().then(() => sa), "./svg-input.vue": () => Promise.resolve().then(() => ua), "./svg-ui.vue": () => Promise.resolve().then(() => ca), "./switch-input.vue": () => Promise.resolve().then(() => wa), "./tags-input.vue": () => Promise.resolve().then(() => ka), "./text-input.vue": () => Promise.resolve().then(() => Ea), "./text-ui.vue": () => Promise.resolve().then(() => Ta), "./textarea-input.vue": () => Promise.resolve().then(() => za), "./time-input.vue": () => Promise.resolve().then(() => Ha), "./time-range-input.vue": () => Promise.resolve().then(() => Ka), "./time-select-input.vue": () => Promise.resolve().then(() => Xa), "./tour-ui.vue": () => Promise.resolve().then(() => tf), "./tree-ui.vue": () => Promise.resolve().then(() => sf), "./vue-ui.vue": () => Promise.resolve().then(() => ff) }), _t = {
  install(e) {
    for (const i in Se)
      Se[i] && Se[i]().then((t) => {
        const o = t.default.name;
        o && e.component(o, t.default);
      });
  }
}, xt = (e) => {
  e.use(Xt), e.use(_t);
}, pp = {
  install: xt
  // SdFormRender,
}, eo = C({
  name: "ContainerRenderWrapper",
  components: {},
  props: {
    field: Object
  },
  setup(e) {
    return {
      annotated: A("annotated")
    };
  },
  computed: {
    customClass() {
      return this.field.options.customClass ? this.field.options.customClass.join(" ") : "";
    }
  }
});
function io(e, i, t, o, n, m) {
  const s = ue;
  return l(), c("div", {
    class: S(["container-wrapper", [e.customClass]]),
    style: { position: "relative" }
  }, [
    ke(e.$slots, "default"),
    e.annotated() && (e.field.component == "object-group" || e.field.component == "sub-form") ? (l(), a(s, {
      key: 0,
      type: "info",
      effect: "plain",
      size: "small",
      style: { position: "absolute", top: "-19px", right: "0", "z-index": "999" }
    }, {
      default: f(() => [
        E(F(e.field.options.name), 1)
      ]),
      _: 1
    })) : b("", !0)
  ], 2);
}
const W = /* @__PURE__ */ I(eo, [["render", io]]), $e = C({
  props: {
    field: Object,
    objGroupName: {
      type: String,
      default: ""
    }
  },
  setup() {
    return {
      refList: null
    };
  },
  methods: {
    alert(e, i = "info", t = 4e3) {
      try {
        x({
          grouping: !0,
          type: i,
          message: e,
          duration: t
        });
      } catch (o) {
        console.log(o.message);
      }
    },
    initRefList() {
      this.refList !== null && this.field.options.name && (this.refList[this.field.options.name] = this);
    },
    getFieldRef(e, i = !1) {
      let t = this.refList[e];
      return !t && i && this.alert("Ref Not Found `" + e + "`", "error"), t;
    },
    getFormRef() {
      return this.refList.sd_form_ref;
    }
  }
}), ee = C({
  mixins: [$e],
  data() {
    return {
      activeTabName: "",
      activeCollapseName: []
    };
  },
  computed: {
    customClass() {
      return this.field.options.customClass || "";
    },
    formModel() {
      return this.globalModel.formModel;
    }
  },
  mounted() {
    this.callSetHidden();
  },
  setup() {
    return {
      // refList,
      sfRefList: null,
      globalModel: null,
      getFormConfig: null
    };
  },
  methods: {
    container() {
      return !0;
    },
    callSetHidden() {
      this.field.options.hidden === !0 && this.setHidden(!0);
    },
    setHidden(e) {
      this.field.options.hidden = e;
      let i = (t) => {
        let o = t.options.name, n = this.getFieldRef(o);
        e && n && n.clearFieldRules && n.clearFieldRules(), !e && n && n.buildFieldRules && n.buildFieldRules();
      };
      Fi(this.field, i);
    },
    unregisterFromRefList() {
      if (this.refList !== null && this.field.options.name) {
        let e = this.field.options.name;
        delete this.refList[e];
      }
    },
    getTabIndex() {
      return this.field.tabs.length > 0 && this.field.tabs.forEach((e, i) => {
        if (e.options.active === !0)
          return i;
      }), -1;
    },
    activeTab(e) {
      e >= 0 && e < this.field.tabs.length && this.field.tabs.forEach((i, t) => {
        i.options.active = t === e, t === e && (this.activeTabName = i.options.name);
      });
    },
    disableTab(e) {
      e >= 0 && e < this.field.tabs.length && (this.field.tabs[e].options.disabled = !0);
    },
    enableTab(e) {
      e >= 0 && e < this.field.tabs.length && (this.field.tabs[e].options.disabled = !1);
    },
    hideTab(e) {
      e >= 0 && e < this.field.tabs.length && (this.field.tabs[e].options.hidden = !0);
    },
    showTab(e) {
      e >= 0 && e < this.field.tabs.length && (this.field.tabs[e].options.hidden = !1);
    },
    setFieldOption(e, i) {
      this.field.options.hasOwnProperty(e) && (this.field.options[e] = i);
    },
    addCssClass(e) {
      this.field.options.customClass ? this.field.options.customClass.push(e) : this.field.options.customClass = [e];
    },
    refField(e) {
      try {
        return this.refList[e] ? this.refList[e] : null;
      } catch (i) {
        return this.alert(i.message, "error"), null;
      }
    },
    hideFields(e) {
      try {
        e.forEach((i) => {
          this.refField(i).hide();
        });
      } catch (i) {
        this.alert(i.message, "error");
      }
    },
    showFields(e) {
      try {
        e.forEach((i) => {
          this.refField(i).show();
        });
      } catch (i) {
        this.alert(i.message, "error");
      }
    },
    hide() {
      try {
        this.field.options.hidden === !1 && (this.field.options.hidden = !0);
      } catch (e) {
        this.alert(e.message, "error");
      }
    },
    show() {
      try {
        this.field.options.hidden === !0 && (this.field.options.hidden = !1);
      } catch (e) {
        this.alert(e.message, "error");
      }
    },
    removeCssClass(e) {
      if (!this.field.options.customClass)
        return;
      let i = -1;
      this.field.options.customClass.map((t, o) => {
        t === e && (i = o);
      }), i > -1 && this.field.options.customClass.splice(i, 1);
    }
  }
}), J = C({
  data() {
    return {
      sdEvents: {},
      fieldRefList: {},
      currentInstance: null
    };
  },
  created() {
    this.setCurrentInstance();
  },
  setup() {
    return {
      refList: null
    };
  },
  methods: {
    setCurrentInstance() {
      this.currentInstance = hi();
    },
    // Emitter handle =========================================
    emit$(e, i) {
      this.sdEvents[e] && this.sdEvents[e].forEach((t) => {
        t(...i);
      });
    },
    on$(e, i) {
      this.sdEvents[e] = this.sdEvents[e] || [], this.sdEvents[e].push(i);
    },
    off$(e, i = null) {
      if (this.sdEvents[e]) {
        if (i == null) {
          this.sdEvents[e].length = 0;
          return;
        }
        for (let t = 0; t < this.sdEvents[e].length; t++)
          if (this.sdEvents[e][t] === i) {
            this.sdEvents[e].splice(t, 1);
            break;
          }
      }
    },
    dispatch: function(i, t, o) {
      let n = this.currentInstance.parent, m = n.type.name;
      for (; n && (!m || m !== i); )
        n = n.parent, n && (m = n.type.name);
      if (n && n.ctx.emit$)
        try {
          i === "SdFormRender" ? n.ctx.emit$(t, o) : n.ctx.emit$.call(n.ctx, t, o);
        } catch (s) {
          console.log(s);
        }
    },
    broadcast: function(i, t, o) {
      try {
        this.fieldRefList && Object.keys(this.fieldRefList).forEach((n) => {
          if (this.fieldRefList[n].currentInstance.type.typeName === i) {
            let s = this.fieldRefList[n];
            s.emit$.call(s, t, o);
          }
        }), this.refList && Object.keys(this.refList).forEach((n) => {
          if (this.refList[n].currentInstance.type.typeName === i) {
            let s = this.refList[n];
            s.emit$.call(s, t, o);
          }
        });
      } catch (n) {
        console.log(n);
      }
    }
  }
}), to = C({
  name: "affix-render",
  typeName: "FormContainer",
  components: {
    ContainerRenderWrapper: W
    // ...FieldComponents,
  },
  mixins: [ee, J],
  inject: ["refList", "sfRefList", "globalModel"],
  setup() {
    return { isMobile: et("(max-width: 480px)") };
  },
  computed: {
    // ปิด affix เมื่อเปิด option disableOnMobile + อยู่บนจอมือถือ
    affixDisabled() {
      return !!this.field.options.disableOnMobile && this.isMobile;
    },
    // มือถือ+ปิด affix → render เป็น div ธรรมดา, นอกนั้น → el-affix
    affixTag() {
      return this.affixDisabled ? "div" : "el-affix";
    },
    // div ไม่ต้องรับ affix props; el-affix รับ props ครบตามเดิม
    affixBindProps() {
      return this.affixDisabled ? {} : {
        offset: this.field.options.offsetAffix,
        position: this.field.options.vPosition,
        target: this.field.options.target,
        "z-index": this.field.options.zIndex
      };
    }
  },
  data() {
    return {};
  },
  beforeCreate() {
  },
  created() {
    this.initRefList();
  },
  mounted() {
  },
  methods: {},
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function oo(e, i, t, o, n, m) {
  const s = W;
  return l(), a(s, {
    field: e.field,
    style: { "margin-bottom": "0px" }
  }, {
    default: f(() => [
      Q((l(), a(N(e.affixTag), he({
        ref: e.field.id,
        key: e.field.id,
        class: ["affix-container", [e.customClass]]
      }, e.affixBindProps), {
        default: f(() => [
          e.field.fields && e.field.fields.length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.fields, (u, p) => (l(), c(y, null, [
            u.category === "container" ? (l(), a(N(u.component + "-render"), {
              field: u,
              key: u.id ? u.id : p,
              "parent-list": e.field.fields,
              "index-of-parent-list": p,
              "parent-field": e.field,
              "obj-group-name": e.objGroupName ? e.objGroupName : ""
            }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"])) : (l(), a(N(u.component), {
              field: u,
              builder: null,
              "builder-status": !1,
              key: u.id ? u.id : p,
              "parent-list": e.field.fields,
              "index-of-parent-list": p,
              "parent-field": e.field,
              "obj-group-name": e.objGroupName ? e.objGroupName : ""
            }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"]))
          ], 64))), 256)) : b("", !0)
        ]),
        _: 1
      }, 16, ["class"])), [
        [X, !e.field.options.hidden]
      ])
    ]),
    _: 1
  }, 8, ["field"]);
}
const lo = /* @__PURE__ */ I(to, [["render", oo], ["__scopeId", "data-v-8b4333c7"]]), no = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lo
}, Symbol.toStringTag, { value: "Module" })), so = C({
  name: "card-render",
  typeName: "FormContainer",
  components: {
    ContainerRenderWrapper: W
    // ...FieldComponents,
  },
  mixins: [ee, J],
  inject: ["refList", "sfRefList", "globalModel"],
  computed: {},
  data() {
    return {
      // headerColor: !!this.field.options.headerColor ? this.field.options.headerColor : 'var(--el-border-color)',
    };
  },
  beforeCreate() {
  },
  created() {
    this.initRefList();
  },
  mounted() {
  },
  methods: {
    onClickFolded() {
      this.field.options.folded ? this.field.options.folded = !1 : this.field.options.folded = !0;
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
}), ro = { class: "card-header clear-fix" }, ao = {
  key: 0,
  class: "custom-label wcard-head"
}, fo = { class: "wcard-icon" }, uo = { class: "wcard-titles" }, po = { class: "wcard-sub" }, mo = { class: "wcard-icon" }, ho = { class: "wcard-titles" }, co = { class: "wcard-sub" }, bo = { class: "wcard-titles" }, go = { class: "wcard-sub" }, Fo = { class: "wcard-icon wcard-icon--rear" }, yo = { class: "wcard-titles" }, vo = { class: "wcard-sub" }, wo = { class: "wcard-icon wcard-icon--rear" }, Co = { class: "wcard-sub ml-1" };
function So(e, i, t, o, n, m) {
  const s = V, u = ne, p = Z("arrow-down"), g = Z("arrow-up"), w = be, L = Xe, r = W;
  return l(), a(r, {
    field: e.field,
    style: { "margin-bottom": "15px" }
  }, {
    default: f(() => [
      Q((l(), a(L, {
        key: e.field.id,
        class: S(["card-container", [
          e.field.options.folded ? "folded" : "",
          e.field.options.themes ? e.field.options.themes : "",
          e.customClass,
          e.field.options.headerType || "",
          e.field.options.headerEffect || "plain",
          e.field.options.headerDisable ? "card-nav" : "",
          e.field.options.bgbody ? "bgbody" : ""
        ]]),
        shadow: e.field.options.shadow,
        "body-style": { padding: e.field.options.folded ? "0px" : e.field.options.headerDisable ? "7px 10px" : "15px 15px 5px 15px" },
        "body-class": e.field.options.headerDisable ? "el-card__header" : "",
        style: j({ width: e.field.options.cardWidth != "" ? e.field.options.cardWidth + " !important" : "" }),
        ref: e.field.id
      }, Y({
        default: f(() => [
          e.field.fields && e.field.fields.length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.fields, (d, k) => (l(), c(y, null, [
            d.category === "container" ? (l(), a(N(d.component + "-render"), {
              field: d,
              key: d.id ? d.id : k,
              "parent-list": e.field.fields,
              "index-of-parent-list": k,
              "parent-field": e.field,
              "obj-group-name": e.objGroupName ? e.objGroupName : ""
            }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"])) : (l(), a(N(d.component), {
              field: d,
              builder: null,
              "builder-status": !1,
              key: d.id ? d.id : k,
              "parent-list": e.field.fields,
              "index-of-parent-list": k,
              "parent-field": e.field,
              "obj-group-name": e.objGroupName ? e.objGroupName : ""
            }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"]))
          ], 64))), 256)) : b("", !0)
        ]),
        _: 2
      }, [
        e.field.options.headerDisable ? void 0 : {
          name: "header",
          fn: f(() => [
            v("div", ro, [
              e.field.options.labelIconClass ? (l(), c("span", ao, [
                e.field.options.labelIconPosition === "front" ? (l(), c(y, { key: 0 }, [
                  e.field.options.labelTooltip ? (l(), c(y, { key: 0 }, [
                    h(u, {
                      content: e.field.options.labelTooltip
                    }, {
                      default: f(() => [
                        v("span", fo, [
                          e.field.options.labelIconText ? (l(), c(y, { key: 1 }, [
                            E(F(e.field.options.labelIconClass), 1)
                          ], 64)) : (l(), a(s, {
                            key: 0,
                            "icon-name": e.field.options.labelIconClass
                          }, null, 8, ["icon-name"]))
                        ])
                      ]),
                      _: 1
                    }, 8, ["content"]),
                    v("div", uo, [
                      v("span", {
                        class: "wcard-title",
                        style: j({ color: e.field.options.labelColor })
                      }, F(e.field.options.label), 5),
                      v("span", po, F(e.field.options.subLabel), 1)
                    ])
                  ], 64)) : (l(), c(y, { key: 1 }, [
                    v("span", mo, [
                      e.field.options.labelIconText ? (l(), c(y, { key: 1 }, [
                        E(F(e.field.options.labelIconClass), 1)
                      ], 64)) : (l(), a(s, {
                        key: 0,
                        "icon-name": e.field.options.labelIconClass
                      }, null, 8, ["icon-name"]))
                    ]),
                    v("div", ho, [
                      v("span", {
                        class: "wcard-title",
                        style: j({ color: e.field.options.labelColor })
                      }, F(e.field.options.label), 5),
                      v("span", co, F(e.field.options.subLabel), 1)
                    ])
                  ], 64))
                ], 64)) : e.field.options.labelIconPosition === "rear" ? (l(), c(y, { key: 1 }, [
                  e.field.options.labelTooltip ? (l(), c(y, { key: 0 }, [
                    v("div", bo, [
                      v("span", {
                        class: "wcard-title",
                        style: j({ color: e.field.options.labelColor })
                      }, F(e.field.options.label), 5),
                      v("span", go, F(e.field.options.subLabel), 1)
                    ]),
                    h(u, {
                      content: e.field.options.labelTooltip
                    }, {
                      default: f(() => [
                        v("span", Fo, [
                          e.field.options.labelIconText ? (l(), c(y, { key: 1 }, [
                            E(F(e.field.options.labelIconClass), 1)
                          ], 64)) : (l(), a(s, {
                            key: 0,
                            "icon-name": e.field.options.labelIconClass
                          }, null, 8, ["icon-name"]))
                        ])
                      ]),
                      _: 1
                    }, 8, ["content"])
                  ], 64)) : (l(), c(y, { key: 1 }, [
                    v("div", yo, [
                      v("span", {
                        class: "wcard-title",
                        style: j({ color: e.field.options.labelColor })
                      }, F(e.field.options.label), 5),
                      v("span", vo, F(e.field.options.subLabel), 1)
                    ]),
                    v("span", wo, [
                      e.field.options.labelIconText ? (l(), c(y, { key: 1 }, [
                        E(F(e.field.options.labelIconClass), 1)
                      ], 64)) : (l(), a(s, {
                        key: 0,
                        "icon-name": e.field.options.labelIconClass
                      }, null, 8, ["icon-name"]))
                    ])
                  ], 64))
                ], 64)) : b("", !0)
              ])) : (l(), c("span", {
                key: 1,
                class: "custom-label",
                style: j({ color: e.field.options.labelColor })
              }, [
                E(F(e.field.options.label) + " ", 1),
                v("span", Co, F(e.field.options.subLabel), 1)
              ], 4)),
              e.field.options.showFold ? (l(), a(w, {
                key: 2,
                onClick: e.onClickFolded,
                class: "el-icon--right",
                style: { cursor: "pointer" }
              }, {
                default: f(() => [
                  e.field.options.folded ? (l(), a(g, { key: 1 })) : (l(), a(p, { key: 0 }))
                ]),
                _: 1
              }, 8, ["onClick"])) : b("", !0)
            ])
          ]),
          key: "0"
        }
      ]), 1032, ["class", "shadow", "body-style", "body-class", "style"])), [
        [X, !e.field.options.hidden]
      ])
    ]),
    _: 1
  }, 8, ["field"]);
}
const Io = /* @__PURE__ */ I(so, [["render", So], ["__scopeId", "data-v-265376dd"]]), Mo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Io
}, Symbol.toStringTag, { value: "Module" })), Ro = C({
  name: "collapse-render",
  typeName: "FormContainer",
  components: {
    ContainerRenderWrapper: W
    // ...FieldComponents,
  },
  mixins: [ee, J],
  inject: ["refList", "sfRefList", "globalModel"],
  computed: {
    visibleTabs() {
      return this.field.tabs.filter((e) => !e.options.hidden);
    }
  },
  beforeCreate() {
  },
  created() {
    this.initRefList();
  },
  mounted() {
    this.initActiveTab();
  },
  methods: {
    initActiveTab() {
      if (this.field.component === "collapse" && this.field.tabs.length > 0)
        if (this.field.options.accordion) {
          let e = this.field.tabs.filter((i) => i.options.active === !0);
          e.length > 0 ? this.activeCollapseName = e[0].options.name : this.activeCollapseName = this.field.tabs[0].options.name;
        } else {
          let e = [];
          this.field.tabs.forEach((i) => {
            i.options.active && e.push(i.options.name);
          }), this.activeCollapseName = e;
        }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
}), ko = { class: "custom-collapses-title" };
function Oo(e, i, t, o, n, m) {
  const s = V, u = tt, p = it, g = W;
  return l(), a(g, {
    field: e.field,
    style: { "margin-bottom": "15px" }
  }, {
    default: f(() => [
      Q((l(), c("div", {
        key: e.field.id,
        class: "collapse-container"
      }, [
        h(p, {
          modelValue: e.activeCollapseName,
          "onUpdate:modelValue": i[0] || (i[0] = (w) => e.activeCollapseName = w),
          accordion: !!e.field.options.accordion,
          ref: e.field.id,
          class: S([e.customClass])
        }, {
          default: f(() => [
            (l(!0), c(y, null, T(e.visibleTabs, (w, L) => (l(), a(u, {
              key: L,
              title: w.options.label,
              disabled: w.options.disabled,
              name: w.options.name
            }, {
              title: f(() => [
                v("span", ko, [
                  w.options.icon ? (l(), a(s, {
                    key: 0,
                    "icon-name": w.options.icon
                  }, null, 8, ["icon-name"])) : b("", !0),
                  v("span", null, F(w.options.label), 1)
                ])
              ]),
              default: f(() => [
                (l(!0), c(y, null, T(w.fields, (r, d) => (l(), c(y, null, [
                  r.category === "container" ? (l(), a(N(r.component + "-render"), {
                    field: r,
                    key: r.id ? r.id : d,
                    "parent-list": w.fields,
                    "index-of-parent-list": d,
                    "parent-field": e.field,
                    "obj-group-name": e.objGroupName ? e.objGroupName : ""
                  }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"])) : (l(), a(N(r.component), {
                    field: r,
                    builder: null,
                    "builder-status": !1,
                    key: r.id ? r.id : d,
                    "parent-list": w.fields,
                    "index-of-parent-list": d,
                    "parent-field": e.field,
                    "obj-group-name": e.objGroupName ? e.objGroupName : ""
                  }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"]))
                ], 64))), 256))
              ]),
              _: 2
            }, 1032, ["title", "disabled", "name"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "accordion", "class"])
      ])), [
        [X, !e.field.options.hidden]
      ])
    ]),
    _: 1
  }, 8, ["field"]);
}
const Po = /* @__PURE__ */ I(Ro, [["render", Oo], ["__scopeId", "data-v-e477f3cf"]]), $o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Po
}, Symbol.toStringTag, { value: "Module" })), Eo = C({
  name: "grid-col-render",
  typeName: "FormContainer",
  components: {
    // ...FieldComponents,
  },
  mixins: [$e, J],
  inject: ["refList", "globalModel", "getFormConfig", "previewState"],
  props: {
    parentField: Object,
    parentList: Array,
    indexOfParentList: Number,
    colHeight: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      layoutProps: {
        span: this.field.options.span,
        md: this.field.options.md || 12,
        sm: this.field.options.sm || 12,
        xs: this.field.options.xs || 12,
        offset: this.field.options.offset || 0,
        push: this.field.options.push || 0,
        pull: this.field.options.pull || 0
      }
    };
  },
  setup() {
    return {
      getFormConfig: A("getFormConfig")
    };
  },
  computed: {
    formConfig() {
      return this.getFormConfig();
    },
    customClass() {
      return this.field.options.customClass || "";
    },
    colHeightStyle() {
      return this.colHeight ? { height: this.colHeight + "px" } : {};
    },
    bgColorStyle() {
      return this.field.options.bgColor ? { backgroundColor: this.field.options.bgColor } : {};
    }
  },
  beforeCreate() {
  },
  created() {
    this.initLayoutProps(), this.initRefList();
  },
  mounted() {
  },
  methods: {
    initLayoutProps() {
      if (this.field.options.responsive)
        if (this.previewState) {
          this.layoutProps.md = void 0, this.layoutProps.sm = void 0, this.layoutProps.xs = void 0;
          let e = this.formConfig.layoutType;
          e === "Phone" ? this.layoutProps.span = this.field.options.xs || 12 : e === "Pad" ? this.layoutProps.span = this.field.options.sm || 12 : this.layoutProps.span = this.field.options.md || 12;
        } else
          this.layoutProps.span = void 0;
      else
        this.layoutProps.md = void 0, this.layoutProps.sm = void 0, this.layoutProps.xs = 24;
    }
  },
  beforeUnmount() {
  }
});
function Lo(e, i, t, o, n, m) {
  const s = ge;
  return Q((l(), a(s, he({
    class: ["grid-cell", [e.customClass]]
  }, e.layoutProps, {
    style: { colHeightStyle: e.colHeightStyle, ...e.bgColorStyle },
    key: e.field.id
  }), {
    default: f(() => [
      e.field.fields && e.field.fields.length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.fields, (u, p) => (l(), c(y, null, [
        u.category === "container" ? (l(), a(N(u.component + "-render"), {
          field: u,
          key: u.id ? u.id : p,
          "parent-list": e.field.fields,
          "index-of-parent-list": p,
          "parent-field": e.field,
          "obj-group-name": e.objGroupName ? e.objGroupName : ""
        }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"])) : (l(), a(N(u.component), {
          field: u,
          builder: null,
          "builder-status": !1,
          key: u.id ? u.id : p,
          "parent-list": e.field.fields,
          "index-of-parent-list": p,
          "parent-field": e.field,
          "obj-group-name": e.objGroupName ? e.objGroupName : ""
        }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"]))
      ], 64))), 256)) : b("", !0)
    ]),
    _: 1
  }, 16, ["class", "style"])), [
    [X, !e.field.options.hidden]
  ]);
}
const fi = /* @__PURE__ */ I(Eo, [["render", Lo]]), jo = C({
  name: "grid-render",
  typeName: "FormContainer",
  components: {
    ContainerRenderWrapper: W,
    GridColRender: fi
  },
  mixins: [ee, J],
  inject: ["refList", "sfRefList", "globalModel"],
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initRefList();
  },
  mounted() {
  },
  methods: {},
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Do(e, i, t, o, n, m) {
  const s = fi, u = Fe, p = W;
  return l(), a(p, { field: e.field }, {
    default: f(() => [
      Q((l(), a(u, {
        key: e.field.id,
        gutter: e.field.options.gutter,
        class: S(["grid-container", [e.customClass]]),
        ref: e.field.id
      }, {
        default: f(() => [
          (l(!0), c(y, null, T(e.field.cols, (g, w) => (l(), a(s, {
            key: w,
            field: g,
            "parent-list": e.field.cols,
            "index-of-parent-list": Number(w),
            "parent-field": e.field,
            "obj-group-name": e.objGroupName ? e.objGroupName : "",
            "col-height": e.field.options.colHeight
          }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name", "col-height"]))), 128))
        ]),
        _: 1
      }, 8, ["gutter", "class"])), [
        [X, !e.field.options.hidden]
      ])
    ]),
    _: 1
  }, 8, ["field"]);
}
const To = /* @__PURE__ */ I(jo, [["render", Do], ["__scopeId", "data-v-3e72ec8c"]]), Vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: To
}, Symbol.toStringTag, { value: "Module" })), Uo = C({
  name: "object-group-render",
  typeName: "FormContainer",
  components: {
    ContainerRenderWrapper: W
    // ...FieldComponents,
  },
  mixins: [ee, J],
  inject: ["refList", "sfRefList", "globalModel"],
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initRefList();
  },
  mounted() {
  },
  methods: {
    onClickFolded() {
      this.field.options.folded ? this.field.options.folded = !1 : this.field.options.folded = !0;
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Bo(e, i, t, o, n, m) {
  const s = Xe, u = W;
  return l(), a(u, {
    field: e.field,
    style: { "margin-bottom": "0px" }
  }, {
    default: f(() => [
      Q((l(), a(s, {
        key: e.field.id,
        class: S(["object-group-container", [e.customClass]]),
        shadow: "never",
        ref: e.field.id
      }, {
        default: f(() => [
          e.field.fields && e.field.fields.length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.fields, (p, g) => (l(), c(y, null, [
            p.category === "container" ? (l(), a(N(p.component + "-render"), {
              field: p,
              key: p.id ? p.id : g,
              "parent-list": e.field.fields,
              "index-of-parent-list": g,
              "parent-field": e.field,
              "obj-group-name": e.field.options.name ? e.field.options.name : ""
            }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"])) : (l(), a(N(p.component), {
              field: p,
              builder: null,
              "builder-status": !1,
              key: p.id ? p.id : g,
              "parent-list": e.field.fields,
              "index-of-parent-list": g,
              "parent-field": e.field,
              "obj-group-name": e.field.options.name ? e.field.options.name : ""
            }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"]))
          ], 64))), 256)) : b("", !0)
        ]),
        _: 1
      }, 8, ["class"])), [
        [X, !e.field.options.hidden]
      ])
    ]),
    _: 1
  }, 8, ["field"]);
}
const zo = /* @__PURE__ */ I(Uo, [["render", Bo], ["__scopeId", "data-v-36c5f3e4"]]), Ao = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zo
}, Symbol.toStringTag, { value: "Module" })), No = C({
  name: "scrollbar-render",
  typeName: "FormContainer",
  components: {
    ContainerRenderWrapper: W
    // ...FieldComponents,
  },
  mixins: [ee, J],
  inject: ["refList", "sfRefList", "globalModel"],
  computed: {
    getHeight() {
      return this.field.options.autoHeigth ? this.scrollerHeight : this.field.options.height ? this.field.options.height : void 0;
    }
  },
  watch: {
    "field.options.height": {
      deep: !0,
      handler(e) {
        const i = this.field.options.height ? this.field.options.height : 0;
        this.scrollerHeight = window.innerHeight - i + "px";
      }
    }
  },
  data() {
    return {
      scrollerHeight: "0",
      resizeCleanup: null
    };
  },
  beforeCreate() {
  },
  created() {
    this.initRefList();
  },
  mounted() {
    const e = this.field.options.height ? this.field.options.height : 0;
    this.scrollerHeight = window.innerHeight - e + "px", this.resizeCleanup = Ne(() => {
      this.$nextTick(() => {
        const i = this.field.options.height ? this.field.options.height : 0;
        this.scrollerHeight = window.innerHeight - i + "px";
      });
    });
  },
  methods: {},
  beforeUnmount() {
    this.resizeCleanup?.(), this.unregisterFromRefList();
  }
});
function Wo(e, i, t, o, n, m) {
  const s = ot, u = W;
  return l(), a(u, {
    field: e.field,
    style: { "margin-bottom": "0px" }
  }, {
    default: f(() => [
      Q((l(), a(s, {
        ref: e.field.id,
        key: e.field.id,
        class: S(["scrollbar-container", [e.customClass]]),
        always: e.field.options.always,
        native: e.field.options.native,
        wrapClass: e.field.options.wrapClass,
        viewClass: e.field.options.viewClass,
        noresize: e.field.options.noresize,
        tag: e.field.options.tagHtml,
        minSize: e.field.options.minSize,
        height: e.getHeight,
        "max-height": e.field.options.maxHeight ? e.field.options.maxHeight : void 0
      }, {
        default: f(() => [
          e.field.fields && e.field.fields.length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.fields, (p, g) => (l(), c(y, null, [
            p.category === "container" ? (l(), a(N(p.component + "-render"), {
              field: p,
              key: p.id ? p.id : g,
              "parent-list": e.field.fields,
              "index-of-parent-list": g,
              "parent-field": e.field,
              "obj-group-name": e.objGroupName ? e.objGroupName : ""
            }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"])) : (l(), a(N(p.component), {
              field: p,
              builder: null,
              "builder-status": !1,
              key: p.id ? p.id : g,
              "parent-list": e.field.fields,
              "index-of-parent-list": g,
              "parent-field": e.field,
              "obj-group-name": e.objGroupName ? e.objGroupName : ""
            }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"]))
          ], 64))), 256)) : b("", !0)
        ]),
        _: 1
      }, 8, ["class", "always", "native", "wrapClass", "viewClass", "noresize", "tag", "minSize", "height", "max-height"])), [
        [X, !e.field.options.hidden]
      ])
    ]),
    _: 1
  }, 8, ["field"]);
}
const Ho = /* @__PURE__ */ I(No, [["render", Wo], ["__scopeId", "data-v-e02996fd"]]), qo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ho
}, Symbol.toStringTag, { value: "Module" })), Go = C({
  name: "space-render",
  typeName: "FormContainer",
  components: {
    ContainerRenderWrapper: W
    // ...FieldComponents,
  },
  mixins: [ee, J],
  inject: ["refList", "sfRefList", "globalModel"],
  computed: {},
  beforeCreate() {
  },
  created() {
    this.initRefList();
  },
  mounted() {
  },
  methods: {},
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Jo(e, i, t, o, n, m) {
  const s = lt, u = W;
  return l(), a(u, {
    field: e.field,
    style: j([{ "margin-bottom": "0px" }, { textAlign: e.field.options.contentPosition || "left" }])
  }, {
    default: f(() => [
      Q((l(), a(s, {
        ref: e.field.id,
        key: e.field.id,
        class: S(["space-container", [e.customClass]]),
        wrap: e.field.options.wrap,
        fill: e.field.options.fill,
        size: e.field.options.size,
        alignment: e.field.options.alignment,
        direction: e.field.options.direction,
        prefixCls: e.field.options.prefixCls,
        spacer: e.field.options.spacer
      }, {
        default: f(() => [
          e.field.fields && e.field.fields.length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.fields, (p, g) => (l(), c(y, null, [
            p.category === "container" ? (l(), a(N(p.component + "-render"), {
              field: p,
              key: p.id ? p.id : g,
              "parent-list": e.field.fields,
              "index-of-parent-list": g,
              "parent-field": e.field,
              "obj-group-name": e.objGroupName ? e.objGroupName : ""
            }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"])) : (l(), a(N(p.component), {
              field: p,
              builder: null,
              "builder-status": !1,
              key: p.id ? p.id : g,
              "parent-list": e.field.fields,
              "index-of-parent-list": g,
              "parent-field": e.field,
              "obj-group-name": e.objGroupName ? e.objGroupName : ""
            }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"]))
          ], 64))), 256)) : b("", !0)
        ]),
        _: 1
      }, 8, ["class", "wrap", "fill", "size", "alignment", "direction", "prefixCls", "spacer"])), [
        [X, !e.field.options.hidden]
      ])
    ]),
    _: 1
  }, 8, ["field", "style"]);
}
const Ko = /* @__PURE__ */ I(Go, [["render", Jo], ["__scopeId", "data-v-cafd5b38"]]), Zo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ko
}, Symbol.toStringTag, { value: "Module" })), Qo = C({
  name: "sub-form-render",
  typeName: "FormContainer",
  components: {
    ContainerRenderWrapper: W
    // ...FieldComponents,
  },
  mixins: [ee, J],
  inject: ["refList", "sfRefList", "globalModel", "getFormConfig"],
  //, 'getFormConfig'
  data() {
    return {
      rowIdData: [],
      fieldSchemaData: [],
      actionDisabled: !1,
      sumSpan: 0,
      originModel: {}
    };
  },
  computed: {
    widgetSize() {
      return this.field.options.size != null && this.field.options.size != "" ? this.field.options.size : this.getFormConfig().size;
    },
    getTotalCols() {
      let e = 0, i = 0;
      for (const t in this.field.fields) {
        let o = this.field.fields[t];
        if (e = e + o.options.columnSpan, e > 24)
          break;
        i++;
      }
      return i;
    }
  },
  beforeCreate() {
  },
  created() {
    this.originModel = D(this.formModel), this.initRefList(), this.registerSubFormToRefList(), this.initRowIdData(!0), this.initFieldSchemaData(), this.initEventHandler();
  },
  mounted() {
    this.handleSubFormFirstRowAdd();
  },
  methods: {
    getLabelAlign(e, i) {
      return i.options.labelAlign || e.options.labelAlign;
    },
    registerSubFormToRefList() {
      this.field.component === "sub-form" && (this.sfRefList[this.field.options.name] = this);
    },
    initRowIdData(e) {
      if (this.field.component === "sub-form") {
        this.rowIdData.splice(0, this.rowIdData.length);
        let i = this.formModel[this.field.options.name];
        i && i.length > 0 && (i.forEach(() => {
          this.rowIdData.push("id" + ae());
        }), e && setTimeout(() => {
          this.handleSubFormRowChange(i);
        }, 200));
      }
    },
    handleSubFormRowChange(e) {
      try {
        if (this.field.options.onSubFormRowChange) {
          const t = P(this.field.options.onSubFormRowChange, ["subFormData"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "error");
      }
    },
    // drag จบ: vuedraggable reorder rowIdData (ตัวที่ผูก :list) ให้แล้ว — เหลือ sync อีก 2 array ให้ตรง index เดียวกัน
    onSubFormRowDragEnd(e) {
      const i = e?.oldIndex, t = e?.newIndex;
      i == null || t == null || i === t || this.reorderSubFormRow(i, t);
    },
    reorderSubFormRow(e, i) {
      const t = (m, s, u) => {
        if (!Array.isArray(m) || s < 0 || s >= m.length) return;
        const [p] = m.splice(s, 1);
        m.splice(u, 0, p);
      };
      let o = this.formModel[this.field.options.name] || [];
      t(o, e, i), t(this.fieldSchemaData, e, i);
      const n = this.rowIdData[i];
      this.handleSubFormRowReorder(o, e, i, n), this.handleSubFormRowChange(o);
    },
    handleSubFormRowReorder(e, i, t, o) {
      try {
        if (this.field.options.onSubFormRowReorder) {
          const m = P(this.field.options.onSubFormRowReorder, ["subFormData", "oldIndex", "newIndex", "rowId"]).call(this, e, i, t, o);
          m && typeof m.then == "function" && m.catch((s) => this.alert(s?.message || String(s), "warning"));
        }
      } catch (n) {
        this.alert(n.message, "error");
      }
    },
    initFieldSchemaData() {
      if (this.field.component !== "sub-form")
        return;
      let e = this.rowIdData.length;
      if (this.fieldSchemaData.splice(0, this.fieldSchemaData.length), e > 0)
        for (let i = 0; i < e; i++)
          new Promise((o, n) => {
            let m = [];
            this.field.fields.forEach((s) => {
              m.push(this.cloneFieldSchema(s));
            }), o(m);
          }).then((o) => {
            this.fieldSchemaData.push(o);
          }).catch((o) => {
            this.alert(o.message, "error");
          });
    },
    cloneFieldSchema(e) {
      let i = D(e);
      return i.id = e.component + ae(), i;
    },
    initEventHandler() {
      this.field.component === "sub-form" && this.on$("setFormData", (e) => {
        this.initRowIdData(!1), this.initFieldSchemaData();
        let i = e[this.field.options.name] || [];
        setTimeout(() => {
          this.handleSubFormRowChange(i);
        }, 200);
      });
    },
    handleSubFormFirstRowAdd() {
      if (this.field.component === "sub-form" && this.field.options.showBlankRow && this.rowIdData.length === 1) {
        let e = this.formModel[this.field.options.name] || [];
        this.handleSubFormRowAdd(e, this.rowIdData[0]), this.handleSubFormRowChange(e);
      }
    },
    handleSubFormRowAdd(e, i) {
      try {
        if (this.field.options.onSubFormRowAdd) {
          const o = P(this.field.options.onSubFormRowAdd, ["subFormData", "newRowId"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "error");
      }
    },
    addToRowIdData() {
      this.rowIdData.push("id" + ae());
    },
    insertToRowIdData(e) {
      this.rowIdData.splice(e, 0, "id" + ae());
    },
    deleteFromRowIdData(e) {
      this.rowIdData.splice(e, 1);
    },
    getRowIdData() {
      return this.rowIdData;
    },
    getFieldRefOfSubForm(e, i) {
      let t = e + "@row" + this.rowIdData[i];
      return this.getFieldRef(t);
    },
    addToFieldSchemaData(e = void 0) {
      let i = [];
      this.field.fields.forEach((t) => {
        i.push(this.cloneFieldSchema(t));
      }), e === void 0 ? this.fieldSchemaData.push(i) : this.fieldSchemaData.splice(e, 0, i);
    },
    deleteFromFieldSchemaData(e) {
      this.fieldSchemaData.splice(e, 1);
    },
    addSubFormRow() {
      let e = {};
      this.field.fields.forEach((t) => {
        t.formItemFlag && (e[t.options.name] = t.options.defaultValue);
      });
      let i = this.formModel[this.field.options.name] || [];
      i.push(e), this.addToRowIdData(), this.addToFieldSchemaData(), this.handleSubFormRowAdd(i, this.rowIdData[i.length - 1]), this.handleSubFormRowChange(i);
    },
    insertSubFormRow(e) {
      let i = {};
      this.field.fields.forEach((o) => {
        o.formItemFlag && (i[o.options.name] = o.options.defaultValue);
      });
      let t = this.formModel[this.field.options.name] || [];
      t.splice(e, 0, i), this.insertToRowIdData(e), this.addToFieldSchemaData(e), this.handleSubFormRowInsert(t, this.rowIdData[e]), this.handleSubFormRowChange(t);
    },
    handleSubFormRowInsert(e, i) {
      try {
        if (this.field.options.onSubFormRowInsert) {
          const o = P(this.field.options.onSubFormRowInsert, ["subFormData", "newRowId"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "error");
      }
    },
    deleteSubFormRow(e) {
      te.confirm("Delete this row?", "Prompt", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel"
        // type: 'warning',
      }).then(() => {
        let i = this.formModel[this.field.options.name] || [], t = D(i[e]);
        i.splice(e, 1), this.deleteFromRowIdData(e), this.deleteFromFieldSchemaData(e), this.handleSubFormRowDelete(i, t), this.handleSubFormRowChange(i);
      }).catch(() => {
      });
    },
    handleSubFormRowDelete(e, i) {
      try {
        if (this.field.options.onSubFormRowDelete) {
          const o = P(this.field.options.onSubFormRowDelete, ["subFormData", "deletedDataRow"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "error");
      }
    },
    getSubFormRowCount() {
      return this.rowIdData ? this.rowIdData.length : 0;
    },
    disableSubFormRow(e) {
      for (const i in this.field.fields)
        if (Object.prototype.hasOwnProperty.call(this.field.fields, i)) {
          let o = this.field.fields[i].options.name + "@row" + this.rowIdData[e], n = this.getFieldRef(o);
          n ? n.setDisabled(!0) : setTimeout(() => {
            n = this.getFieldRef(o), n && n.setDisabled(!0);
          }, 100);
        }
    },
    enableSubFormRow(e) {
      for (const i in this.field.fields)
        if (Object.prototype.hasOwnProperty.call(this.field.fields, i)) {
          let o = this.field.fields[i].options.name + "@row" + this.rowIdData[e], n = this.getFieldRef(o);
          n ? n.setDisabled(!1) : setTimeout(() => {
            n = this.getFieldRef(o), n && n.setDisabled(!1);
          }, 100);
        }
    },
    disableSubForm() {
      if (this.rowIdData.length > 0)
        for (const e in this.rowIdData)
          Object.prototype.hasOwnProperty.call(this.rowIdData, e) && (this.rowIdData[e], this.disableSubFormRow(e));
      this.actionDisabled = !0;
    },
    enableSubForm() {
      if (this.rowIdData.length > 0)
        for (const e in this.rowIdData)
          Object.prototype.hasOwnProperty.call(this.rowIdData, e) && (this.rowIdData[e], this.enableSubFormRow(e));
      this.actionDisabled = !1;
    },
    resetSubForm() {
      if (this.field.component === "sub-form") {
        let e = this.formModel[this.field.options.name];
        if (e && (e.splice(0, e.length), this.rowIdData.splice(0, this.rowIdData.length)), this.field.component === "sub-form") {
          const i = D(this.originModel[this.field.options.name]);
          i && i.length > 0 && i.forEach((t, o) => {
            e.push(t);
          }), e && e.length > 0 && (e.forEach((t, o) => {
            this.addToRowIdData(), this.addToFieldSchemaData();
          }), this.handleSubFormRowChange(e));
        }
      }
    },
    getSubFormValues() {
      if (this.field.component === "sub-form")
        return this.formModel[this.field.options.name];
      this.alert("None sub form type", "error");
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
}), Yo = ["title"], Xo = {
  key: 2,
  class: "row-number-span"
}, _o = {
  key: 0,
  class: "row-number-span"
};
function xo(e, i, t, o, n, m) {
  const s = V, u = q, p = ge, g = Fe, w = ne, L = Z("draggable"), r = W;
  return l(), a(r, {
    field: e.field,
    style: { "margin-bottom": "15px" }
  }, {
    default: f(() => [
      Q((l(), c("div", {
        key: e.field.id,
        class: "sub-form-container"
      }, [
        h(g, {
          class: S(["header-row", [e.widgetSize]])
        }, {
          default: f(() => [
            e.field.options.actionPosition === "left" ? (l(), a(p, {
              key: 0,
              span: 2,
              class: "action-header-column"
            }, {
              default: f(() => [
                h(u, {
                  disabled: e.actionDisabled,
                  circle: "",
                  plain: "",
                  type: "success",
                  size: e.widgetSize,
                  class: "action-button",
                  onClick: e.addSubFormRow,
                  title: "Add new row"
                }, {
                  default: f(() => [
                    h(s, { "icon-name": "el-plus" })
                  ]),
                  _: 1
                }, 8, ["disabled", "size", "onClick"])
              ]),
              _: 1
            })) : e.field.options.showRowNumber ? (l(), a(p, {
              key: 1,
              span: 2,
              class: "action-header-column action-label"
            }, {
              default: f(() => [
                h(g, null, {
                  default: f(() => [
                    h(p, { span: 24 }, {
                      default: f(() => [...i[0] || (i[0] = [
                        v("span", {
                          class: "action-label",
                          style: { "margin-left": "10px" }
                        }, "#", -1)
                      ])]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : b("", !0),
            h(p, {
              span: e.field.options.actionPosition === "left" ? 22 : e.field.options.showRowNumber ? 20 : 22,
              class: "fields-header-column"
            }, {
              default: f(() => [
                h(g, null, {
                  default: f(() => [
                    (l(!0), c(y, null, T(e.field.fields, (d, k) => (l(), c(y, {
                      key: d.id + "thc"
                    }, [
                      e.getTotalCols > Number(k) ? (l(), a(p, {
                        key: 0,
                        span: d.options.columnSpan,
                        class: S([[e.getLabelAlign(e.field, d), d.options.required ? "is-required" : ""], "field-header-column"]),
                        style: { "padding-right": "5px", "padding-left": "5px", height: "100%" }
                      }, {
                        default: f(() => [
                          d.options.labelIconClass ? (l(), c("span", {
                            key: 0,
                            class: "custom-label",
                            style: j({ color: d.options.labelColor })
                          }, [
                            d.options.labelIconPosition === "front" ? (l(), c(y, { key: 0 }, [
                              d.options.labelTooltip ? (l(), c(y, { key: 0 }, [
                                h(w, {
                                  content: d.options.labelTooltip
                                }, {
                                  default: f(() => [
                                    h(s, {
                                      "icon-name": d.options.labelIconClass,
                                      class: "mr-1",
                                      size: "13px"
                                    }, null, 8, ["icon-name"])
                                  ]),
                                  _: 2
                                }, 1032, ["content"]),
                                E(F(d.options.label), 1)
                              ], 64)) : (l(), c(y, { key: 1 }, [
                                h(s, {
                                  "icon-name": d.options.labelIconClass,
                                  class: "mr-1",
                                  size: "13px"
                                }, null, 8, ["icon-name"]),
                                E(F(d.options.label), 1)
                              ], 64))
                            ], 64)) : d.options.labelIconPosition === "rear" ? (l(), c(y, { key: 1 }, [
                              d.options.labelTooltip ? (l(), c(y, { key: 0 }, [
                                E(F(d.options.label), 1),
                                h(w, {
                                  content: d.options.labelTooltip
                                }, {
                                  default: f(() => [
                                    h(s, {
                                      "icon-name": d.options.labelIconClass,
                                      class: "ml-1",
                                      size: "13px"
                                    }, null, 8, ["icon-name"])
                                  ]),
                                  _: 2
                                }, 1032, ["content"])
                              ], 64)) : (l(), c(y, { key: 1 }, [
                                E(F(d.options.label), 1),
                                h(s, {
                                  "icon-name": d.options.labelIconClass,
                                  class: "ml-1",
                                  size: "13px"
                                }, null, 8, ["icon-name"])
                              ], 64))
                            ], 64)) : b("", !0)
                          ], 4)) : (l(), c("span", {
                            key: 1,
                            title: d.options.labelTooltip,
                            style: j({ color: d.options.labelColor })
                          }, F(d.options.label), 13, Yo))
                        ]),
                        _: 2
                      }, 1032, ["span", "class"])) : b("", !0)
                    ], 64))), 128))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["span"]),
            e.field.options.actionPosition === "right" ? (l(), a(p, {
              key: 2,
              span: 2,
              class: "action-header-column",
              style: { "justify-content": "flex-end" }
            }, {
              default: f(() => [
                h(u, {
                  disabled: e.actionDisabled,
                  circle: "",
                  plain: "",
                  type: "success",
                  size: e.widgetSize,
                  class: "action-button",
                  onClick: e.addSubFormRow,
                  title: "Add new row"
                }, {
                  default: f(() => [
                    h(s, { "icon-name": "el-plus" })
                  ]),
                  _: 1
                }, 8, ["disabled", "size", "onClick"])
              ]),
              _: 1
            })) : b("", !0)
          ]),
          _: 1
        }, 8, ["class"]),
        h(L, he({
          list: e.rowIdData,
          "item-key": "id",
          tag: "div"
        }, { ghostClass: "ghost", animation: 200 }, {
          disabled: !e.field.options.rowDraggable || e.actionDisabled,
          handle: ".drag-handler",
          onEnd: e.onSubFormRowDragEnd
        }), {
          item: f(({ element: d, index: k }) => [
            (l(), a(g, {
              class: S(["sub-form-row", [e.widgetSize]]),
              key: d
            }, {
              default: f(() => [
                e.field.options.actionPosition === "left" ? (l(), a(p, {
                  key: 0,
                  span: 2,
                  class: "sub-form-action-column hide-label action-button-column"
                }, {
                  default: f(() => [
                    e.field.options.rowDraggable ? (l(), a(u, {
                      key: 0,
                      disabled: e.actionDisabled,
                      circle: "",
                      plain: "",
                      class: "drag-handler",
                      size: e.widgetSize,
                      title: "Drag to reorder"
                    }, {
                      default: f(() => [
                        h(s, { "icon-name": "addon-grip-vertical" })
                      ]),
                      _: 1
                    }, 8, ["disabled", "size"])) : b("", !0),
                    e.field.options.showRowInsertButton !== !1 ? (l(), a(u, {
                      key: 1,
                      disabled: e.actionDisabled,
                      circle: "",
                      plain: "",
                      type: "success",
                      size: e.widgetSize,
                      onClick: (B) => e.insertSubFormRow(Number(k) + 1),
                      title: "insert new row",
                      icon: "Plus"
                    }, null, 8, ["disabled", "size", "onClick"])) : b("", !0),
                    h(u, {
                      disabled: e.actionDisabled,
                      circle: "",
                      plain: "",
                      type: "danger",
                      size: e.widgetSize,
                      onClick: (B) => e.deleteSubFormRow(k),
                      title: "delete this row",
                      icon: "Delete"
                    }, null, 8, ["disabled", "size", "onClick"]),
                    e.field.options.showRowNumber ? (l(), c("span", Xo, "#" + F(Number(k) + 1), 1)) : b("", !0)
                  ]),
                  _: 2
                }, 1024)) : e.field.options.showRowNumber ? (l(), a(p, {
                  key: 1,
                  span: 2,
                  class: "sub-form-action-column hide-label action-button-column"
                }, {
                  default: f(() => [
                    e.field.options.showRowNumber ? (l(), c("span", _o, "#" + F(Number(k) + 1), 1)) : b("", !0)
                  ]),
                  _: 2
                }, 1024)) : b("", !0),
                h(p, {
                  span: e.field.options.actionPosition === "left" ? 22 : e.field.options.showRowNumber ? 20 : 22
                }, {
                  default: f(() => [
                    h(g, null, {
                      default: f(() => [
                        e.fieldSchemaData.length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.fields, (B, se) => (l(), a(p, {
                          key: B.id + "tc" + d,
                          span: B.options.columnSpan,
                          class: "sub-form-field-column hide-label",
                          style: { "padding-right": "5px", "padding-left": "5px", "margin-bottom": "5px", height: "100%" }
                        }, {
                          default: f(() => [
                            (l(), a(N(B.component), {
                              field: e.fieldSchemaData[k][se],
                              key: e.fieldSchemaData[k][se].id,
                              "parent-list": e.field.fields,
                              "index-of-parent-list": se,
                              "parent-field": e.field,
                              "sub-form-row-id": d,
                              "sub-form-row-index": k,
                              "sub-form-col-index": se
                            }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "sub-form-row-id", "sub-form-row-index", "sub-form-col-index"]))
                          ]),
                          _: 2
                        }, 1032, ["span"]))), 128)) : b("", !0)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["span"]),
                e.field.options.actionPosition === "right" ? (l(), a(p, {
                  key: 2,
                  span: 2,
                  class: "sub-form-action-column hide-label action-button-column",
                  style: { "justify-content": "flex-end" }
                }, {
                  default: f(() => [
                    e.field.options.rowDraggable ? (l(), a(u, {
                      key: 0,
                      disabled: e.actionDisabled,
                      circle: "",
                      plain: "",
                      class: "drag-handler",
                      size: e.widgetSize,
                      title: "Drag to reorder"
                    }, {
                      default: f(() => [
                        h(s, { "icon-name": "addon-grip-vertical" })
                      ]),
                      _: 1
                    }, 8, ["disabled", "size"])) : b("", !0),
                    e.field.options.showRowInsertButton !== !1 ? (l(), a(u, {
                      key: 1,
                      disabled: e.actionDisabled,
                      size: e.widgetSize,
                      circle: "",
                      plain: "",
                      type: "success",
                      onClick: (B) => e.insertSubFormRow(Number(k) + 1),
                      title: "insert new row",
                      icon: "Plus"
                    }, null, 8, ["disabled", "size", "onClick"])) : b("", !0),
                    h(u, {
                      disabled: e.actionDisabled,
                      size: e.widgetSize,
                      circle: "",
                      plain: "",
                      type: "danger",
                      onClick: (B) => e.deleteSubFormRow(k),
                      title: "delete this row",
                      icon: "Delete"
                    }, null, 8, ["disabled", "size", "onClick"])
                  ]),
                  _: 2
                }, 1024)) : b("", !0)
              ]),
              _: 2
            }, 1032, ["class"]))
          ]),
          _: 1
        }, 16, ["list", "disabled", "onEnd"])
      ])), [
        [X, !e.field.options.hidden]
      ])
    ]),
    _: 1
  }, 8, ["field"]);
}
const el = /* @__PURE__ */ I(Qo, [["render", xo], ["__scopeId", "data-v-8ad26f19"]]), il = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: el
}, Symbol.toStringTag, { value: "Module" })), tl = C({
  name: "tab-render",
  typeName: "FormContainer",
  components: {
    ContainerRenderWrapper: W
    // ...FieldComponents,
  },
  mixins: [ee, J],
  inject: ["refList", "sfRefList", "globalModel"],
  computed: {
    visibleTabs() {
      return this.field.tabs.filter((e) => !e.options.hidden);
    }
  },
  beforeCreate() {
  },
  created() {
    this.initRefList();
  },
  mounted() {
    this.initActiveTab();
  },
  methods: {
    initActiveTab() {
      if (this.field.component === "tab" && this.field.tabs.length > 0) {
        let e = this.field.tabs.filter((i) => i.options.active === !0);
        e.length > 0 ? this.activeTabName = e[0].options.name : this.activeTabName = this.field.tabs[0].options.name;
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
}), ol = { class: "custom-tabs-label" };
function ll(e, i, t, o, n, m) {
  const s = V, u = st, p = nt, g = W;
  return l(), a(g, {
    field: e.field,
    style: { "margin-bottom": "15px" }
  }, {
    default: f(() => [
      Q((l(), c("div", {
        key: e.field.id,
        class: "tab-container"
      }, [
        h(p, {
          modelValue: e.activeTabName,
          "onUpdate:modelValue": i[0] || (i[0] = (w) => e.activeTabName = w),
          type: e.field.options.displayType,
          "tab-position": e.field.options.tabPosition,
          ref: e.field.id,
          class: S([e.customClass])
        }, {
          default: f(() => [
            (l(!0), c(y, null, T(e.visibleTabs, (w, L) => (l(), a(u, {
              key: L,
              label: w.options.label,
              disabled: w.options.disabled,
              name: w.options.name,
              lazy: !!e.field.options.lazy
            }, {
              label: f(() => [
                v("span", ol, [
                  w.options.icon ? (l(), a(s, {
                    key: 0,
                    "icon-name": w.options.icon
                  }, null, 8, ["icon-name"])) : b("", !0),
                  v("span", null, F(w.options.label), 1)
                ])
              ]),
              default: f(() => [
                (l(!0), c(y, null, T(w.fields, (r, d) => (l(), c(y, null, [
                  r.category === "container" ? (l(), a(N(r.component + "-render"), {
                    field: r,
                    key: r.id ? r.id : d,
                    "parent-list": w.fields,
                    "index-of-parent-list": d,
                    "parent-field": e.field,
                    "obj-group-name": e.objGroupName ? e.objGroupName : ""
                  }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"])) : (l(), a(N(r.component), {
                    field: r,
                    builder: null,
                    "builder-status": !1,
                    key: r.id ? r.id : d,
                    "parent-list": w.fields,
                    "index-of-parent-list": d,
                    "parent-field": e.field,
                    "obj-group-name": e.objGroupName ? e.objGroupName : ""
                  }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"]))
                ], 64))), 256))
              ]),
              _: 2
            }, 1032, ["label", "disabled", "name", "lazy"]))), 128))
          ]),
          _: 1
        }, 8, ["modelValue", "type", "tab-position", "class"])
      ])), [
        [X, !e.field.options.hidden]
      ])
    ]),
    _: 1
  }, 8, ["field"]);
}
const nl = /* @__PURE__ */ I(tl, [["render", ll], ["__scopeId", "data-v-292f3a08"]]), sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nl
}, Symbol.toStringTag, { value: "Module" })), rl = C({
  name: "table-cell-render",
  typeName: "FormContainer",
  components: {
    // ...FieldComponents,
  },
  mixins: [$e, J],
  inject: ["refList", "globalModel"],
  props: {
    parentField: Object,
    parentList: Array,
    indexOfParentList: Number,
    rowIndex: Number,
    colIndex: Number
  },
  computed: {
    customClass() {
      return this.field.options.customClass || "";
    },
    bgColorStyle() {
      return this.field.options.bgColor ? { backgroundColor: this.field.options.bgColor } : {};
    }
  },
  beforeCreate() {
  },
  created() {
  },
  mounted() {
  },
  methods: {},
  beforeUnmount() {
  }
}), dl = ["colspan", "rowspan"];
function al(e, i, t, o, n, m) {
  return l(), c("td", {
    class: S(["table-cell", [e.customClass]]),
    colspan: e.field.options.colspan || 1,
    rowspan: e.field.options.rowspan || 1,
    style: j({ width: e.field.options.cellWidth + " !important" || "", height: e.field.options.cellHeight + " !important" || "", ...e.bgColorStyle })
  }, [
    (l(!0), c(y, null, T(e.field.fields, (s, u) => (l(), c(y, null, [
      s.category === "container" ? (l(), a(N(s.component + "-render"), {
        field: s,
        key: s.id ? s.id : u,
        "parent-list": e.field.fields,
        "index-of-parent-list": u,
        "parent-field": e.field,
        "obj-group-name": e.objGroupName ? e.objGroupName : ""
      }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"])) : (l(), a(N(s.component), {
        field: s,
        builder: null,
        "builder-status": !1,
        key: s.id ? s.id : u,
        "parent-list": e.field.fields,
        "index-of-parent-list": u,
        "parent-field": e.field,
        "obj-group-name": e.objGroupName ? e.objGroupName : ""
      }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name"]))
    ], 64))), 256))
  ], 14, dl);
}
const ui = /* @__PURE__ */ I(rl, [["render", al], ["__scopeId", "data-v-7cfc555a"]]), fl = C({
  name: "table-render",
  typeName: "FormContainer",
  components: {
    ContainerRenderWrapper: W,
    TableCellRender: ui
  },
  mixins: [ee, J],
  inject: ["refList", "sfRefList", "globalModel"],
  computed: {
    bordered() {
      return this.field.options.border && this.field.options.border === !0 ? "table-bordered" : "";
    }
  },
  beforeCreate() {
  },
  created() {
    this.initRefList();
  },
  mounted() {
  },
  methods: {},
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function ul(e, i, t, o, n, m) {
  const s = ui, u = W;
  return l(), a(u, {
    field: e.field,
    style: { "margin-bottom": "15px" }
  }, {
    default: f(() => [
      Q((l(), c("div", {
        key: e.field.id,
        class: "table-container"
      }, [
        v("table", {
          ref: e.field.id,
          class: S(["table", [e.customClass, e.bordered]])
        }, [
          v("tbody", null, [
            (l(!0), c(y, null, T(e.field.rows, (p, g) => (l(), c("tr", {
              key: p.id
            }, [
              (l(!0), c(y, null, T(p.cols, (w, L) => (l(), c(y, null, [
                w.merged ? b("", !0) : (l(), a(s, {
                  field: w,
                  key: L,
                  "parent-list": e.field.cols,
                  "index-of-parent-list": L,
                  "parent-field": e.field,
                  "obj-group-name": e.objGroupName ? e.objGroupName : "",
                  "row-index": g,
                  "col-index": L
                }, null, 8, ["field", "parent-list", "index-of-parent-list", "parent-field", "obj-group-name", "row-index", "col-index"]))
              ], 64))), 256))
            ]))), 128))
          ])
        ], 2)
      ])), [
        [X, !e.field.options.hidden]
      ])
    ]),
    _: 1
  }, 8, ["field"]);
}
const pl = /* @__PURE__ */ I(fl, [["render", ul], ["__scopeId", "data-v-1f4873e1"]]), ml = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: pl
}, Symbol.toStringTag, { value: "Module" })), pi = {
  builder: Object,
  field: Object,
  parentField: Object,
  parentList: Array,
  indexOfParentList: {
    type: Number,
    default: -1
  },
  builderStatus: {
    type: Boolean,
    default: !1
  },
  subFormRowIndex: {
    type: Number,
    default: -1
  },
  subFormColIndex: {
    type: Number,
    default: -1
  },
  subFormRowId: {
    type: String,
    default: ""
  },
  objGroupName: {
    type: String,
    default: ""
  },
  buildRules: {
    type: Array
    //default: []
  },
  displayStyle: {
    type: String,
    default: "block"
  }
}, mi = C({
  props: pi,
  computed: {
    customClass() {
      return this.field.options.customClass ? this.field.options.customClass.join(" ") : "";
    },
    selected() {
      return !!this.builder && this.field.id === this.builder.selectedId;
    }
  },
  methods: {
    alert(e, i = "info", t = 4e3) {
      try {
        x({
          grouping: !0,
          type: i,
          message: e,
          duration: t
        });
      } catch (o) {
        this.alert(o.message, "error");
      }
    },
    selectField(e) {
      this.builder && (this.builder.setSelected(e), setTimeout(() => {
        this.builder.emitEvent("field-selected", this.parentField);
      }, 100));
    },
    selectParentField() {
      this.parentField ? this.builder.setSelected(this.parentField) : this.builder.clearSelected();
    },
    moveUpField() {
      this.builder.moveUpField(this.parentList, this.indexOfParentList), this.builder.emitHistoryChange();
    },
    moveDownField() {
      this.builder.moveDownField(this.parentList, this.indexOfParentList), this.builder.emitHistoryChange();
    },
    cloneFields(e) {
      try {
        if (this.parentList && this.builderStatus && this.builder) {
          let i = this.builder.cloneAllFields(e);
          this.parentList.splice(this.indexOfParentList + 1, 0, i), this.builder.setSelected(i), this.builder.emitHistoryChange();
        }
      } catch (i) {
        this.alert(i.message, "error");
      }
    },
    addLibFields(e) {
      try {
        this.parentList && this.builderStatus && this.builder && te.prompt("Please input library name", "Fields Library", {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          inputValue: e.options && e.options.label ? e.options.label : "",
          inputValidator: (i) => !!i
        }).then(({ value: i }) => {
          this.builder.addLibrary(i, e);
        }).catch(() => {
        });
      } catch (i) {
        this.alert(i.message, "error");
      }
    },
    removeAcePop(e) {
      this.builder && (this.builder.acePop = this.builder.acePop.filter((i) => i.name !== "var_" + e && i.name !== "name_" + e && i.name !== "ref_" + e));
    },
    removeField() {
      if (this.parentList) {
        let e = null;
        this.parentList.length === 1 ? this.parentField && (e = this.parentField) : this.parentList.length === 1 + this.indexOfParentList ? e = this.parentList[this.indexOfParentList - 1] : e = this.parentList[this.indexOfParentList + 1], this.$nextTick(() => {
          this.removeAcePop(this.builder.selectedFieldName), this.parentList.splice(this.indexOfParentList, 1), this.builder.setSelected(e), this.builder.emitHistoryChange();
        });
      }
    }
  }
}), Ee = C({
  name: "StaticContentWrapper",
  components: {},
  mixins: [mi],
  setup(e) {
    return {
      fieldColor: _(() => {
        let t = {
          basic_input: "#409EFF",
          advanced_input: "#67c23a",
          display_ui: "#626aef",
          container: "#e6a23c"
        };
        return e.field.category != null ? t[e.field.category] : "#409EFF";
      })
    };
  },
  methods: {}
}), De = () => {
  Ae((e) => ({
    v2de7e8dc: e.fieldColor
  }));
}, Te = Ee.setup;
Ee.setup = Te ? (e, i) => (De(), Te(e, i)) : De;
const hl = {
  key: 0,
  class: "field-action"
}, cl = {
  key: 1,
  class: "drag-handler background-opacity"
}, bl = { title: "Drag" }, gl = { key: 0 };
function Fl(e, i, t, o, n, m) {
  const s = V;
  return l(), c("div", {
    class: S(["field-wrapper", { "builder-time-bottom-margin": !!e.builder }])
  }, [
    !e.field.options.hidden || e.builderStatus === !0 ? (l(), c("div", {
      key: 0,
      class: S(["static-content-item", [e.selected ? "selected" : "", e.customClass]]),
      style: j({ display: e.displayStyle }),
      onClick: i[0] || (i[0] = U((u) => e.selectField(e.field), ["stop"]))
    }, [
      ke(e.$slots, "default", {}, void 0, !0)
    ], 6)) : b("", !0),
    e.builder ? (l(), c(y, { key: 1 }, [
      e.builder.selectedId === e.field.id ? (l(), c("div", hl, [
        v("i", {
          title: "Select Parent",
          onClick: i[1] || (i[1] = U((u) => e.selectParentField(), ["stop"]))
        }, [
          h(s, { "icon-name": "addon-select-parent" })
        ]),
        e.parentList && e.parentList.length > 1 ? (l(), c("i", {
          key: 0,
          title: "Move Up",
          onClick: i[2] || (i[2] = U((u) => e.moveUpField(), ["stop"]))
        }, [
          h(s, { "icon-name": "el-top" })
        ])) : b("", !0),
        e.parentList && e.parentList.length > 1 ? (l(), c("i", {
          key: 1,
          title: "Move Down",
          onClick: i[3] || (i[3] = U((u) => e.moveDownField(), ["stop"]))
        }, [
          h(s, { "icon-name": "el-bottom" })
        ])) : b("", !0),
        v("i", {
          title: "Clone",
          onClick: i[4] || (i[4] = U((u) => e.cloneFields(e.field), ["stop"]))
        }, [
          h(s, { "icon-name": "el-copy-document" })
        ]),
        v("i", {
          title: "Add Library",
          onClick: i[5] || (i[5] = U((u) => e.addLibFields(e.field), ["stop"]))
        }, [
          h(s, { "icon-name": "addon-library" })
        ]),
        v("i", {
          title: "Remove",
          onClick: i[6] || (i[6] = U((...u) => e.removeField && e.removeField(...u), ["stop"]))
        }, [
          h(s, { "icon-name": "el-delete" })
        ])
      ])) : b("", !0),
      e.builder.selectedId === e.field.id ? (l(), c("div", cl, [
        v("i", bl, [
          h(s, {
            "icon-name": "el-rank",
            size: "14px"
          })
        ]),
        v("i", null, F(e.field.name ? e.field.name : e.field.component), 1),
        e.field.options.hidden === !0 ? (l(), c("i", gl, [
          h(s, {
            "icon-name": "el-hide",
            size: "14px"
          })
        ])) : b("", !0)
      ])) : b("", !0)
    ], 64)) : b("", !0)
  ], 2);
}
const $ = /* @__PURE__ */ I(Ee, [["render", Fl], ["__scopeId", "data-v-67efe709"]]), yl = function(e) {
  return {
    number: "/^[-]?\\d+(\\.\\d+)?$/",
    letter: "/^[A-Za-z]+$/",
    letterAndNumber: "/^[A-Za-z0-9]+$/",
    letterStartNumberIncluded: "/^[A-Za-z]+[A-Za-z\\d]*$/",
    letterWithThai: "/^[A-Za-zก-ฮ]+$/",
    letterAndNumberWithThai: "/^[A-Za-zก-ฮ0-9]+$/",
    letterStartNumberIncludedWithThai: "/^[A-Za-zก-ฮ]+[A-Za-zก-ฮ\\d]*$/",
    thaiLetter: "/^[ก-ฮ]+$/",
    mobilePhone: "/^[0][3-9][0-9]{8}$/",
    //^(0[689]{1})+([0-9]{8})+$
    email: "/^([-_A-Za-z0-9.]+)@([_A-Za-z0-9]+\\.)+[A-Za-z0-9]{2,3}$/",
    //'/^\w+([.-]?\w+)_@\w+(_[_.-]?\w+)_(.\w{2,3})+$/', //
    url: "/[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/",
    //'/^([hH][tT]{2}[pP]:\\/\\/|[hH][tT]{2}[pP][sS]:\\/\\/)(([A-Za-z0-9-~]+)\\.)+([A-Za-z0-9-~\\/])+$/',
    variable: "/^[a-z][a-z0-9_]+$/",
    variableFull: "/^[A-Za-z|_id][A-Za-z0-9_]+$/",
    code: "/^[A-Za-z0-9._-]+$/"
  }[e];
}, G = function(e, i, t, o, n) {
  if (ve(t) || t.length <= 0) {
    o();
    return;
  }
  if (new Function("return " + yl(e))().test(t))
    o();
  else {
    let u = i.errorMsg || n;
    o(new Error(u));
  }
}, Ie = {
  number(e, i, t) {
    G("number", e, i, t, "[" + e.label + "] contains non-numeric characters");
  },
  letter(e, i, t) {
    G("letter", e, i, t, "[" + e.label + "] contains non-alphabetic characters");
  },
  letterAndNumber(e, i, t) {
    G("letterAndNumber", e, i, t, "[" + e.label + "] only letters or numbers can be entered");
  },
  letterStartNumberIncluded(e, i, t) {
    G("letterStartNumberIncluded", e, i, t, "[" + e.label + "] must start with a letter, may contain numbers");
  },
  letterWithThai(e, i, t) {
    G("letterWithThai", e, i, t, "[" + e.label + "] contains non-alphabetic characters");
  },
  letterAndNumberWithThai(e, i, t) {
    G("letterAndNumberWithThai", e, i, t, "[" + e.label + "] only letters or numbers can be entered");
  },
  letterStartNumberIncludedWithThai(e, i, t) {
    G("letterStartNumberIncludedWithThai", e, i, t, "[" + e.label + "] must start with a letter, may contain numbers");
  },
  thaiLetter(e, i, t) {
    G("thaiLetter", e, i, t, "[" + e.label + "] contains thai non-alphabetic characters");
  },
  mobilePhone(e, i, t) {
    G("mobilePhone", e, i, t, "[" + e.label + "] mobile phone number format is wrong");
  },
  email(e, i, t) {
    G("email", e, i, t, "[" + e.label + "] is not a valid email address.");
  },
  url(e, i, t) {
    G("url", e, i, t, "[" + e.label + "] is not a valid  URL.");
  },
  variable(e, i, t) {
    G("variable", e, i, t, "[" + e.label + "] must be in English or numbers only and do not contain spaces.");
  },
  variableFull(e, i, t) {
    G("variableFull", e, i, t, "[" + e.label + "] must be in English or numbers only and do not contain spaces.");
  },
  code(e, i, t) {
    G("code", e, i, t, "[" + e.label + "] allows only A-Z, 0-9, . - _ (no spaces)");
  },
  regExp(e, i, t) {
    if (ve(i) || i.length <= 0) {
      t();
      return;
    }
    if (new Function("return " + e.regExp)().test(i))
      t();
    else {
      let m = e.errorMsg || "[" + e.label + "]invalid value";
      t(new Error(m));
    }
  },
  citizenId(e, i, t) {
    if (ve(i) || i.length <= 0) {
      t();
      return;
    }
    let o = i.replaceAll("-", "");
    if (o.length != 13) {
      t(new Error(`[${e.label}] must contain 13 digits.`));
      return;
    }
    let n = o.split("").reverse().join(""), m = 0;
    for (let g = 1; g < 13; g++) {
      let w = g + 1, L = Number(n.charAt(g)) * w;
      m = m + L;
    }
    let p = (11 - m % 11) % 10;
    if (Number(n.charAt(0)) === p)
      t();
    else {
      let g = e.errorMsg || "[" + e.label + "] is not a valid Citizen Id";
      t(new Error(g));
    }
  }
}, O = C({
  props: pi,
  mixins: [J],
  data() {
    return {
      oldFieldValue: null,
      defaultValue: null,
      fieldModel: null,
      rules: [],
      enableValidate: !0,
      fileList: [],
      fileListBeforeRemove: [],
      uploadBtnHidden: !1,
      previewIndex: 1,
      fieldEditor: null,
      uploadHeaders: {},
      uploadData: { key: "" },
      customToolbar: null,
      router: di(),
      route: ri()
      //   sdEvents: {} as any,
      //   fieldRefList: null as any,
    };
  },
  computed: {
    formConfig() {
      return this.getFormConfig();
    },
    widgetSize() {
      return this.field.options.size != null && this.field.options.size !== "" ? this.field.options.size : this.parentField && this.parentField.component === "sub-form" && this.parentField.options.size ? this.parentField.options.size : this.field.options.size != null ? this.field.options.size : this.formConfig.size;
    },
    subFormName() {
      return this.parentField ? this.parentField.options.name : "";
    },
    subFormItemFlag() {
      return this.parentField ? this.parentField.component === "sub-form" : !1;
    },
    formModel() {
      return this.globalModel.formModel;
    },
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? this.fieldModel : this.fieldModel;
      },
      set(e) {
        e != null ? this.setFieldValue(e) : this.setFieldValue(null);
      }
    },
    parentId() {
      let e = "", i = "", t = 0;
      const o = this.getFormRef();
      if (this.field.options.defaultFilterParent) {
        if (o && o.sdform && !this.field.options.dependEnable) {
          const n = o.sdform._id ? o.sdform._id : null;
          if (this.fieldEditor && this.fieldEditor.getParentFormId && this.fieldEditor.getParentFormId === n)
            return o && o.formParams ? (t = o.formParams.xrstatx ? o.formParams.xrstatx : 0, i = o.formParams && o.formParams._id ? o.formParams._id : null) : (t = this.formParams && this.formParams.xrstatx ? this.formParams.xrstatx : 0, i = this.formParams && this.formParams._id ? this.formParams._id : null), e = o.formDataId, !this.builderStatus && e && i && (t ? this.show() : this.hide()), e;
        }
      } else if (this.field.options.parentPath)
        return o && o.formParams ? (e = oe(o.formParams, this.field.options.parentPath) || "", t = o.formParams.xrstatx ? o.formParams.xrstatx : 0, i = o.formParams && o.formParams._id ? o.formParams._id : null) : (e = oe(this.formParams, this.field.options.parentPath) || "", t = this.formParams && this.formParams.xrstatx ? this.formParams.xrstatx : 0, i = this.formParams && this.formParams._id ? this.formParams._id : null), !this.builderStatus && e && i && (t ? this.show() : this.hide()), e;
      return e;
    },
    params() {
      return this.getFormRef() && this.getFormRef().formParams ? this.getFormRef().formParams : this.formParams ? this.formParams : {};
    },
    parentPath() {
      return !this.field.options.defaultFilterParent && this.field.options.parentPath ? this.field.options.parentPath : "";
    }
  },
  inject: ["globalUserState"],
  setup() {
    return {
      //refList,
      getFormConfig: null,
      globalOptionModel: null,
      getOptionModel: null,
      globalModel: null,
      globalUserState: null,
      globalApiUrl: null,
      globalAuthToken: null,
      globalSdForm: null,
      formParams: {}
    };
  },
  methods: {
    // ---- internal perf/cleanup helpers ----
    // cache compiled user-code function ต่อ instance (non-reactive) — กัน new Function() recompile ทุก event
    // (เช่น onInput ที่ยิงทุก keystroke); key = argNames + code → recompile เฉพาะตอน code เปลี่ยน (builder แก้สด)
    // allowAsync = false → บังคับ sync (สำหรับ onValidate / event กลุ่ม return-value ที่ห้ามคืน Promise)
    compileUserFn(e, i = [], t = !0) {
      if (!e) return null;
      const o = this;
      o._fnCache || (o._fnCache = /* @__PURE__ */ Object.create(null));
      const n = (t ? "a|" : "s|") + i.join(",") + "|" + e;
      let m = o._fnCache[n];
      return m || (m = P(e, i, t), o._fnCache[n] = m), m;
    },
    // setTimeout ที่ track id ไว้ clear ตอน unmount — กัน callback รันบน instance ที่ unmount ไปแล้ว
    setSafeTimeout(e, i) {
      const t = this;
      t._timers || (t._timers = []);
      const o = setTimeout(e, i);
      return t._timers.push(o), o;
    },
    clearSafeTimers() {
      const e = this;
      e._timers && (e._timers.forEach((i) => clearTimeout(i)), e._timers = []);
    },
    // ========================== Start SdFramework ==================================
    notify(e, i = "info", t = "Notification", o = 5e3) {
      try {
        si({
          title: t,
          type: i,
          message: e,
          duration: o
        });
      } catch (n) {
        console.log(n.message);
      }
    },
    alert(e, i = "info", t = 4e3) {
      try {
        x({
          grouping: !0,
          type: i,
          message: e,
          duration: t
        });
      } catch (o) {
        console.log(o.message);
      }
    },
    confirm(e, i, t = "info", o = "Confirm") {
      try {
        te.confirm(e, o, {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: t
        }).then(() => {
          if (i)
            try {
              i();
            } catch (n) {
              this.alert(n.message, "error");
            }
        }).catch(() => {
        });
      } catch (n) {
        console.log(n.message);
      }
    },
    prompt(e, i, t = {}, o = "info", n = "Prompt") {
      try {
        te.prompt(e, n, {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: o,
          ...t
        }).then(({ value: m }) => {
          if (i)
            try {
              i(m);
            } catch (s) {
              this.alert(s.message, "error");
            }
        }).catch(() => {
        });
      } catch (m) {
        console.log(m.message);
      }
    },
    refField(e) {
      try {
        return this.refList[e] ? this.refList[e] : null;
      } catch (i) {
        return this.alert(i.message, "error"), null;
      }
    },
    string2Json(e) {
      try {
        return JSON.parse(e);
      } catch {
        return [];
      }
    },
    json2String(e) {
      try {
        return JSON.stringify(e);
      } catch {
        return "";
      }
    },
    deepClone(e) {
      try {
        return D(e);
      } catch (i) {
        return this.alert(i.message, "error"), {};
      }
    },
    numberFormat(e, i = 0, t = "currency", o = "THB") {
      try {
        return Pi(e, i, t, o);
      } catch (n) {
        return this.alert(n.message, "error"), null;
      }
    },
    object2Path(e) {
      try {
        return Oi(e);
      } catch (i) {
        return this.alert(i.message, "error"), {};
      }
    },
    setFieldValue(e) {
      (this.field.component === "picture-upload-input" || this.field.component === "file-upload-input" || this.field.component === "crop-upload-input") && e && (this.fileList = e);
      try {
        this.field.formItemFlag && (this.fieldModel = e, this.syncUpdateFormModel(e));
      } catch (i) {
        this.alert(i.message, "error");
      }
    },
    setValue(e) {
      try {
        (this.field.component === "picture-upload-input" || this.field.component === "file-upload-input" || this.field.component === "crop-upload-input") && (this.fieldValue = e, e ? Array.isArray(e) ? this.fileList = e : this.fileList.splice(0, 0, D(e)) : this.fileList.splice(0, this.fileList.length)), this.fieldValue = e, e !== this.oldFieldValue && (this.emitFieldDataChange(e, this.oldFieldValue), this.oldFieldValue = D(e));
      } catch (i) {
        this.alert(i.message, "error");
      }
    },
    getValue() {
      return this.field.component === "picture-upload-input" || this.field.component === "file-upload-input" || this.field.component === "crop-upload-input" ? this.fileList : this.fieldValue;
    },
    getText() {
      if (this.field.component === "picture-upload-input" || this.field.component === "file-upload-input" || this.field.component === "crop-upload-input")
        return JSON.stringify(this.fileList);
      try {
        let e = this.fieldValue;
        if (this.field.options.optionItems) {
          let t = this.field.options.optionItems.filter((o) => o.value == e);
          t[0] && t[0].label && (e = t[0].label);
        }
        return e;
      } catch (e) {
        return this.alert(e.message, "error"), "";
      }
    },
    hideFields(e) {
      try {
        e.forEach((i) => {
          this.refField(i).hide();
        });
      } catch (i) {
        this.alert(i.message, "error");
      }
    },
    showFields(e) {
      try {
        e.forEach((i) => {
          this.refField(i).show();
        });
      } catch (i) {
        this.alert(i.message, "error");
      }
    },
    hide() {
      try {
        this.field.options.hidden === !1 && (this.field.options.hidden = !0, this.field.component === "picture-upload-input" || this.field.component === "file-upload-input" || this.field.component === "crop-upload-input" || this.setValue(null), this.clearFieldRules());
      } catch (e) {
        this.alert(e.message, "error");
      }
    },
    show() {
      try {
        this.field.options.hidden === !0 && (this.field.options.hidden = !1, this.field.component === "picture-upload-input" || this.field.component === "file-upload-input" || this.field.component === "crop-upload-input" || this.setValue(this.field.options.defaultValue), this.buildFieldRules());
      } catch (e) {
        this.alert(e.message, "error");
      }
    },
    disabled() {
      try {
        this.field.options.disabled === !1 && (this.field.options.disabled = !0);
      } catch (e) {
        this.alert(e.message, "error");
      }
    },
    enable() {
      try {
        this.field.options.disabled === !0 && (this.field.options.disabled = !1);
      } catch (e) {
        this.alert(e.message, "error");
      }
    },
    focus(e = 110) {
      if (this.fieldEditor) {
        let i = this.fieldEditor.$el;
        i.nextElementSibling && (i = i.nextElementSibling), this.setSafeTimeout(() => {
          let t = i.querySelector("input, textarea, select");
          t ? t.focus() : i.focus();
        }, e);
      } else
        this.alert("Element not found");
    },
    trigger(e) {
      try {
        if (e == "onChange")
          this.emitFieldDataChange(this.fieldValue, this.fieldValue);
        else if (e == "onAppendButtonClick")
          this.emitAppendButtonClick();
        else {
          let t = "this.fieldEditor.$el.dispatchEvent(new Event('" + e.replace("on", "").toLowerCase() + "'));";
          this.compileUserFn(t).call(this);
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    getFieldName() {
      return this.getPropName();
    },
    getPropName() {
      return this.subFormItemFlag && !this.builderStatus ? this.subFormName + "." + this.subFormRowIndex + "." + this.field.options.name : this.field.options.name;
    },
    getInput() {
      return this.fieldEditor ? this.fieldEditor.$el : (this.alert("Element not found"), null);
    },
    getOptionsModel() {
      return this.field.options ? this.field.options : (this.alert("Options not found"), null);
    },
    getItemList() {
      return this.field.options && this.field.options.optionItems ? this.field.options.optionItems : (this.alert("Items not found"), null);
    },
    disableOption(e) {
      this.disableOptionOfList(this.field.options.optionItems, e);
    },
    enableOption(e) {
      this.enableOptionOfList(this.field.options.optionItems, e);
    },
    dayjs(e) {
      return fe(e);
    },
    getAge(e, i = "YYYY-MM-DD") {
      let t = fe(e, i), o = fe(), n = o.diff(t, "year"), m = o.diff(t, "month"), s = o.diff(t, "day");
      var u = m % 12;
      return { ageOfYear: n, monthOfYear: u, ageOfMonth: m, ageOfDay: s };
    },
    genUidTime() {
      return Re();
    },
    generateId() {
      return ae();
    },
    isNull() {
      return ve(this.getValue());
    },
    isNotNull() {
      return Me(this.getValue());
    },
    isEmptyStr() {
      return ki(this.getValue());
    },
    isEmptyObj() {
      return Ri(this.getValue());
    },
    ucfirst() {
      return Mi(this.getValue());
    },
    lcfirst() {
      return Ii(this.getValue());
    },
    htmlEncode() {
      return We(this.getValue());
    },
    string2boolean(e) {
      return Si(e);
    },
    inStrFormatted(e) {
      return Ci(e);
    },
    inIntFormatted(e) {
      return wi(e);
    },
    setObjectByPath(e, i, t) {
      return vi(e, i, t);
    },
    getObjectByPath(e, i) {
      return oe(e, i);
    },
    getQueryParam(e) {
      return yi(e);
    },
    clearValidateAll() {
      this.builderStatus || this.getFormRef().clearValidate();
    },
    clearValidateField(e) {
      this.builderStatus || !this.field || !this.field.formItemFlag || (e || (e = this.getPropName()), this.getFormRef().clearValidate(e));
    },
    // ========================== end SdFramework ==================================
    initFieldModel() {
      if (!(!this.field || !this.field.formItemFlag)) {
        if (this.subFormItemFlag && !this.builderStatus) {
          let e = this.formModel[this.subFormName];
          e == null && (e = this.formModel[this.subFormName] = []), e[this.subFormRowIndex] == null && (e[this.subFormRowIndex] = {}), (e === void 0 || e[this.subFormRowIndex] === void 0 || e[this.subFormRowIndex][this.field.options.name] === void 0) && this.field.options.defaultValue !== void 0 ? (this.fieldValue = this.field.options.defaultValue, e[this.subFormRowIndex][this.field.options.name] = this.field.options.defaultValue) : e[this.subFormRowIndex][this.field.options.name] === void 0 ? (this.fieldValue = null, e[this.subFormRowIndex][this.field.options.name] = null) : this.fieldValue = e[this.subFormRowIndex][this.field.options.name], this.setSafeTimeout(() => {
            this.handleOnChangeForSubForm(this.fieldValue, this.oldFieldValue, e, this.subFormRowId);
          }, 200), this.oldFieldValue = D(this.fieldValue), this.defaultValue = D(this.fieldValue);
          return;
        }
        if (this.objGroupName && !this.builderStatus) {
          this.formModel[this.objGroupName][this.field.options.name] === void 0 && this.field.options.defaultValue !== void 0 ? this.fieldValue = this.field.options.defaultValue : this.formModel[this.objGroupName][this.field.options.name] === void 0 ? this.formModel[this.objGroupName][this.field.options.name] = null : this.fieldValue = this.formModel[this.objGroupName][this.field.options.name], this.oldFieldValue = D(this.fieldValue), this.defaultValue = D(this.fieldValue);
          return;
        }
        this.formModel[this.field.options.name] === void 0 && this.field.options.defaultValue !== void 0 ? this.fieldValue = this.field.options.defaultValue : this.formModel[this.field.options.name] === void 0 ? this.formModel[this.field.options.name] = null : this.fieldValue = this.formModel[this.field.options.name], this.oldFieldValue = D(this.fieldValue), this.defaultValue = D(this.fieldValue);
      }
    },
    initFileList() {
      this.field.component !== "picture-upload-input" && this.field.component !== "file-upload-input" && this.field.component !== "crop-upload-input" || this.builderStatus === !0 || this.fieldValue && (Array.isArray(this.fieldValue) ? this.fileList = D(this.fieldValue) : this.fileList.splice(0, 0, D(this.fieldValue)));
    },
    handleOnChange(e, i) {
      if (!this.builderStatus)
        try {
          this.field.options.onChange && this.compileUserFn(this.field.options.onChange, ["value", "oldValue"]).call(this, e, i);
        } catch (t) {
          this.alert(t.message, "warning");
        }
    },
    handleOnChangeForSubForm(e, i, t, o) {
      if (!this.builderStatus)
        try {
          this.field.options.onChange && this.compileUserFn(this.field.options.onChange, ["value", "oldValue", "subFormData", "rowId"]).call(this, e, i, t, o);
        } catch (n) {
          this.alert(n.message, "warning");
        }
    },
    addAcePop(e) {
      this.builderStatus && (this.builder.acePop.push({
        meta: "FD",
        name: "var_" + e,
        caption: "SDVar-" + e,
        value: `const ${e} = this.refField('${e}')`,
        score: 2
      }), this.builder.acePop.push({
        meta: "FD",
        name: "ref_" + e,
        caption: "SDRef-" + e,
        value: `this.refField('${e}')`,
        score: 2
      }), this.builder.acePop.push({
        meta: "Props",
        name: "name_" + e,
        caption: "SDName-" + e,
        value: `'${e}'`,
        score: 2
      }));
    },
    removeAcePop(e) {
      this.builderStatus && (this.builder.acePop = this.builder.acePop.filter((i) => i.name !== "var_" + e && i.name !== "name_" + e && i.name !== "ref_" + e));
    },
    initEventHandler() {
      try {
        this.on$("setFormData", (e) => {
          this.subFormItemFlag || (this.fieldValue = e[this.field.options.name]);
        }), this.on$("field-value-changed", (e, i) => {
          if (this.subFormItemFlag) {
            let t = this.formModel[this.subFormName];
            this.handleOnChangeForSubForm(e, i, t, this.subFormRowId);
          } else
            this.handleOnChange(e, i);
        }), this.on$("reloadOptionItems", (e) => {
          (e.length === 0 || e.indexOf(this.field.options.name) > -1) && this.initOptionItems(!0);
        });
      } catch (e) {
        this.alert(e.message, "error");
      }
    },
    initOptionItems(e = !0) {
      if (!this.builderStatus && (this.field.component === "radio-input" || this.field.component === "checkbox-input" || this.field.component === "select-input")) {
        const i = this.getOptionModel();
        i && i.hasOwnProperty(this.field.options.name) && (e ? this.reloadOptions(i[this.field.options.name]) : this.loadOptions(i[this.field.options.name]));
      }
    },
    disableChangeValidate() {
      this.rules && (this.enableValidate = !1);
    },
    enableChangeValidate() {
      try {
        if (!this.rules)
          return;
        this.enableValidate = !0;
      } catch (e) {
        this.alert(e.message, "error");
      }
    },
    disableOptionOfList(e, i) {
      try {
        e && e.length > 0 && e.forEach((t) => {
          t.value === i && (t.disabled = !0);
        });
      } catch (t) {
        this.alert(t.message, "error");
      }
    },
    enableOptionOfList(e, i) {
      try {
        e && e.length > 0 && e.forEach((t) => {
          t.value === i && (t.disabled = !1);
        });
      } catch (t) {
        this.alert(t.message, "error");
      }
    },
    emitFieldDataChange(e, i) {
      try {
        this.emit$("field-value-changed", [e, i]), this.dispatch("SdFormRender", "fieldChange", [this.field.options.name, e, i, this.subFormName, this.subFormRowIndex]);
      } catch (t) {
        this.alert(t.message, "error");
      }
    },
    syncUpdateFormModel(e) {
      try {
        if (this.builderStatus)
          return;
        if (this.subFormItemFlag) {
          let t = (this.formModel[this.subFormName] || [{}])[this.subFormRowIndex];
          t && (t[this.field.options.name] = e);
        } else this.objGroupName ? this.formModel[this.objGroupName][this.field.options.name] = e : this.formModel[this.field.options.name] = e;
      } catch (i) {
        this.alert(i.message, "error");
      }
    },
    uniqueId(e, i, t) {
      if (i === "" || !i)
        t(new Error("Value is not valid"));
      else {
        const o = this.getFormRef(), n = o.sdform && o.sdform._id ? o.sdform._id : null, m = o.formData && o.formData._id ? o.formData._id : null, s = { providerId: n, providerType: "FORM" };
        this.globalUserState && this.globalUserState.crudCheckUnique ? this.globalUserState.crudCheckUnique({ dataId: m, sdProvider: s, fieldValue: i, fieldName: this.field.options.name }, t, this.field.options.label) : t(new Error("Api not found"));
      }
    },
    buildFieldRules() {
      if (!(!this.field || !this.field.formItemFlag && this.field.options.hidden || this.builderStatus)) {
        if (this.rules.splice(0, this.rules.length), this.field.options.required && this.rules.push({
          required: !0,
          // trigger: ['blur', 'change'],
          trigger: [],
          message: this.field.options.requiredHint || "Input value should be not null."
        }), this.field.options.validation && typeof this.field.options.validation == "object") {
          let e = this.field.options.validation;
          for (const i of e)
            i == "unique" ? this.rules.push({
              validator: this.uniqueId,
              trigger: [],
              label: this.field.options.label,
              errorMsg: this.field.options.validationHint
            }) : Ie[i] ? this.rules.push({
              validator: Ie[i],
              trigger: [],
              label: this.field.options.label,
              errorMsg: this.field.options.validationHint
            }) : this.rules.push({
              validator: Ie.regExp,
              trigger: [],
              regExp: i,
              label: this.field.options.label,
              errorMsg: this.field.options.validationHint
            });
        }
        if (this.field.options.onValidate)
          try {
            let e = (i, t, o) => this.compileUserFn(this.field.options.onValidate, ["rule", "value", "callback"], !1).call(this, i, t, o);
            this.rules.push({
              validator: e,
              trigger: [],
              label: this.field.options.label
            });
          } catch (e) {
            this.alert(e.message, "warning");
          }
      }
    },
    handleOnCreated() {
      try {
        this.field.options.onCreated && this.compileUserFn(this.field.options.onCreated).call(this);
      } catch (e) {
        this.alert(e.message, "warning");
      }
    },
    handleOnClear() {
      try {
        this.handleChangeEvent(""), this.field.options.onClear && this.compileUserFn(this.field.options.onClear).call(this);
      } catch (e) {
        this.alert(e.message, "warning");
      }
    },
    handleOnMounted() {
      try {
        this.field.options.onMounted && this.compileUserFn(this.field.options.onMounted).call(this);
      } catch (e) {
        this.alert(e.message, "warning");
      }
    },
    // คู่กับ handleOnMounted — รันตอน field ถูก unmount (เรียกจาก lifecycle hook `unmounted` ของ mixin)
    // ใช้เก็บกวาด resource ของ field เอง เช่น clearInterval/clearTimeout, dispose chart instance
    handleOnUnmount() {
      try {
        this.field.options.onUnmount && this.compileUserFn(this.field.options.onUnmount).call(this);
      } catch (e) {
        this.alert(e.message, "warning");
      }
    },
    registerToRefList(e) {
      try {
        if (this.refList !== null && this.field.options.name)
          if (this.subFormItemFlag && !this.builderStatus)
            e && (delete this.refList[e + "@row" + this.subFormRowId], this.removeAcePop(e + "@row" + this.subFormRowId)), this.refList[this.field.options.name + "@row" + this.subFormRowId] = this, this.addAcePop(this.field.options.name + "@row" + this.subFormRowId);
          else {
            if (e && (delete this.refList[e], this.removeAcePop(e)), this.builderStatus) {
              const i = this.field.options.name;
              this.subFormItemFlag ? this.builder.restoreSchemaState(i, this.subFormName) : this.builder.restoreSchemaState(i, this.objGroupName);
            }
            this.refList[this.field.options.name] = this, this.addAcePop(this.field.options.name);
          }
      } catch (i) {
        this.alert(i.message, "error");
      }
    },
    unregisterFromRefList() {
      try {
        if (this.refList !== null && this.field.options.name) {
          let e = this.field.options.name;
          this.subFormItemFlag && !this.builderStatus ? (delete this.refList[e + "@row" + this.subFormRowId], this.removeAcePop(e + "@row" + this.subFormRowId)) : (this.builderStatus && (this.subFormItemFlag ? this.builder.delSchemaState(e, this.subFormName) : this.builder.delSchemaState(e, this.objGroupName)), delete this.refList[e], this.removeAcePop(e));
        }
      } catch (e) {
        this.alert(e.message, "error");
      }
    },
    // Event Fields ============================
    handleFocusCustomEvent(e) {
      this.oldFieldValue = D(this.fieldValue);
      try {
        this.field.options.onFocus && this.compileUserFn(this.field.options.onFocus, ["event"]).call(this, e);
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    handleBlurCustomEvent(e) {
      try {
        this.enableValidate && this.dispatch("SdFormRender", "fieldValidation", [this.getPropName()]), this.field.options.onBlur && this.compileUserFn(this.field.options.onBlur, ["event"]).call(this, e);
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    handleAddTagEvent(e) {
      try {
        this.enableValidate && this.dispatch("SdFormRender", "fieldValidation", [this.getPropName()]), this.field.options.onInput && this.compileUserFn(this.field.options.onAddTag, ["value"]).call(this, e);
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    handleRemoveTagEvent(e) {
      try {
        this.enableValidate && this.dispatch("SdFormRender", "fieldValidation", [this.getPropName()]), this.field.options.onInput && this.compileUserFn(this.field.options.onRemoveTag, ["value"]).call(this, e);
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    handleInputCustomEvent(e) {
      this.syncUpdateFormModel(e);
      try {
        this.enableValidate && this.dispatch("SdFormRender", "fieldValidation", [this.getPropName()]), this.field.options.onInput && this.compileUserFn(this.field.options.onInput, ["value"]).call(this, e);
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    handleChangeEvent(e) {
      try {
        this.syncUpdateFormModel(e), this.emitFieldDataChange(e, this.oldFieldValue), this.oldFieldValue = D(e), this.enableValidate && this.dispatch("SdFormRender", "fieldValidation", [this.getPropName()]);
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    emitAppendButtonClick() {
      try {
        if (this.field.options.onAppendButtonClick)
          try {
            this.compileUserFn(this.field.options.onAppendButtonClick).call(this);
          } catch (e) {
            this.alert(e.message, "warning");
          }
        else
          this.dispatch("SdFormRender", "appendButtonClick", [this]);
      } catch (e) {
        this.alert(e.message, "warning");
      }
    },
    refreshDefaultValue() {
      try {
        this.field.options.defaultValue !== void 0 && (this.field.component === "picture-upload-input" || this.field.component === "file-upload-input" || this.field.component === "crop-upload-input" || this.setValue(this.field.options.defaultValue));
      } catch (e) {
        this.alert(e.message, "error");
      }
    },
    remoteQuery(e) {
      try {
        this.field.options.onRemoteQuery && this.compileUserFn(this.field.options.onRemoteQuery, ["keyword"]).call(this, e);
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    handleButtonWidgetClick() {
      if (!this.builderStatus)
        try {
          this.field.options.onClick ? this.compileUserFn(this.field.options.onClick).call(this) : this.dispatch("SdFormRender", "buttonClick", [this]);
        } catch (e) {
          this.alert(e.message, "warning");
        }
    },
    //The following are the API methods that the component supports external calls ==========================================
    getFormRef() {
      return this.refList.sd_form_ref;
    },
    getFieldEditor() {
      return this.$refs.fieldEditor;
    },
    getFieldRef(e, i = !1) {
      let t = this.refList[e];
      return !t && i && this.alert("Ref Not Found `" + e + "`", "error"), t;
    },
    resetField() {
      try {
        if (!(this.field.component === "picture-upload-input" || this.field.component === "file-upload-input" || this.field.component === "crop-upload-input")) {
          let e = this.defaultValue;
          this.setValue(e);
        }
      } catch (e) {
        this.alert(e.message, "error");
      }
    },
    setFieldOption(e, i) {
      this.field.options.hasOwnProperty(e) && (this.field.options[e] = i);
    },
    setReadonly(e) {
      this.field.options.readonly = e;
    },
    setDisabled(e) {
      this.field.options.disabled = e;
    },
    setAppendButtonVisible(e) {
      this.field.options.appendButton = e;
    },
    setAppendButtonDisabled(e) {
      this.field.options.appendButtonDisabled = e;
    },
    setHidden(e) {
      this.field.options.hidden = e, e ? this.clearFieldRules() : this.buildFieldRules();
    },
    setRequired(e) {
      this.field.options.required = e, this.buildFieldRules();
    },
    getLabel() {
      return this.field.options.label;
    },
    setLabel(e) {
      this.field.options.label = e;
    },
    clearFieldRules() {
      this.field.formItemFlag && this.rules.splice(0, this.rules.length);
    },
    setFocus(e = 110) {
      this.getFieldEditor() && this.getFieldEditor().focus && this.setSafeTimeout(() => {
        this.getFieldEditor().focus();
      }, e);
    },
    clearSelectedOptions() {
      this.field.component !== "checkbox" && this.field.component !== "radio" && this.field.component !== "select" || (this.field.component === "checkbox" || this.field.component === "select" && this.field.options.multiple ? this.fieldModel = [] : this.fieldModel = "");
    },
    loadOptions(e) {
      this.field.options.optionItems = D(e), this.clearSelectedOptions();
    },
    reloadOptions(e) {
      this.field.options.optionItems = D(e);
    },
    getOptionItems() {
      return this.field.options.optionItems;
    },
    setUploadHeader(e, i) {
      this.uploadHeaders[e] = i;
    },
    setUploadData(e, i) {
      this.uploadData[e] = i;
    },
    setToolbar(e) {
      this.customToolbar = e;
    },
    isSubFormItem() {
      return this.parentField ? this.parentField.component === "sub-form" : !1;
    },
    addCssClass(e) {
      this.field.options.customClass ? this.field.options.customClass.push(e) : this.field.options.customClass = [e];
    },
    removeCssClass(e) {
      if (!this.field.options.customClass)
        return;
      let i = -1;
      this.field.options.customClass.map((t, o) => {
        t === e && (i = o);
      }), i > -1 && this.field.options.customClass.splice(i, 1);
    },
    async copyClipboard(e) {
      try {
        await this.getFormRef().copyClipboard(e);
      } catch (i) {
        console.error(i);
      }
    }
  },
  // lifecycle hook ระดับ mixin → Vue merge เข้าทุก field ที่ใช้ CoreFieldMixin อัตโนมัติ
  // (ไม่ต้องเรียกเองในแต่ละ field) คู่ symmetric กับ mounted ที่ field เรียก handleOnMounted
  unmounted() {
    this.handleOnUnmount(), this.clearSafeTimers(), this._fnCache = null;
  }
}), vl = C({
  name: "alert-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {
    handleOnClose(e) {
      try {
        if (this.field.options.onClose) {
          const t = P(this.field.options.onClose, ["event"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function wl(e, i, t, o, n, m) {
  const s = _e, u = $;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(s, {
        ref: "fieldEditor",
        key: e.field.id,
        style: { "margin-bottom": "10px" },
        type: e.field.options.alertType,
        title: e.field.options.title,
        description: e.field.options.content,
        center: !!e.field.options.center,
        closable: !!e.field.options.closable,
        "close-text": e.field.options.closeText,
        effect: e.field.options.effect,
        "show-icon": !!e.field.options.showIcon,
        onClose: e.handleOnClose
      }, null, 8, ["type", "title", "description", "center", "closable", "close-text", "effect", "show-icon", "onClose"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Cl = /* @__PURE__ */ I(vl, [["render", wl], ["__scopeId", "data-v-14bdd0f7"]]), Sl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cl
}, Symbol.toStringTag, { value: "Module" })), Il = C({
  name: "apexchart-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
    // SdChart,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  beforeCreate() {
  },
  data() {
    return {
      isDark: H()
    };
  },
  computed: {
    params() {
      return this.getFormRef() && this.getFormRef().formParams ? this.getFormRef().formParams : this.formParams ? this.formParams : {};
    }
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  methods: {
    clickEvent(e, i) {
      try {
        return this.field.options.clickEvent ? new Function("row", "index", ...z, this.field.options.clickEvent).call(this, e, i) : !0;
      } catch (t) {
        return this.alert(t.message, "warning"), !1;
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Ml(e, i, t, o, n, m) {
  const s = $i, u = $;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    class: S(["datagrid-container"]),
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      e.builderStatus ? (l(), a(s, {
        ref: "fieldEditor",
        key: e.field.id,
        "sql-id": e.field.options.sqlId || "",
        width: e.field.options.width || void 0,
        height: e.field.options.heightImg || void 0,
        title: e.field.options.title || "",
        mockup: !0,
        "build-state": e.builderStatus,
        "user-state": e.globalUserState
      }, null, 8, ["sql-id", "width", "height", "title", "build-state", "user-state"])) : (l(), a(s, {
        ref: "fieldEditor",
        key: e.field.id,
        "sql-id": e.field.options.sqlId || "",
        params: e.params,
        "y-dataset": e.field.options.yDatasetApex || void 0,
        width: e.field.options.width || void 0,
        height: e.field.options.heightImg || void 0,
        title: e.field.options.title || "",
        "scales-x-label": e.field.options.scalesXLabel || "",
        "scales-y-label": e.field.options.scalesYLabel || "",
        "x-field": e.field.options.xField || "",
        "title-display": !!e.field.options.titleDisplay,
        "legend-display": !!e.field.options.legendDisplay,
        "scales-x-display": !!e.field.options.scalesXDisplay,
        "scales-y-display": !!e.field.options.scalesYDisplay,
        "grid-display": !!e.field.options.gridDisplay,
        type: e.field.options.achartType || void 0,
        "x-type": e.field.options.xacType || "category",
        "custom-options": e.field.options.customOptions || void 0,
        "legend-custom": e.field.options.legendCustom || void 0,
        "scales-x-custom": e.field.options.scalesXCustom || void 0,
        "scales-y-custom": e.field.options.scalesYCustom || void 0,
        "data-labels-show": !!e.field.options.dataLabelsShow,
        "toolbar-show": !!e.field.options.toolbarShow,
        "tooltip-show": !!e.field.options.tooltipShow,
        "zoom-enable": !!e.field.options.zoomEnable,
        "build-state": e.builderStatus,
        "user-state": e.globalUserState
      }, null, 8, ["sql-id", "params", "y-dataset", "width", "height", "title", "scales-x-label", "scales-y-label", "x-field", "title-display", "legend-display", "scales-x-display", "scales-y-display", "grid-display", "type", "x-type", "custom-options", "legend-custom", "scales-x-custom", "scales-y-custom", "data-labels-show", "toolbar-show", "tooltip-show", "zoom-enable", "build-state", "user-state"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"]);
}
const Rl = /* @__PURE__ */ I(Il, [["render", Ml], ["__scopeId", "data-v-d1bf8e60"]]), kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rl
}, Symbol.toStringTag, { value: "Module" })), Le = C({
  name: "FormItemWrapper",
  components: {},
  mixins: [mi],
  setup(e) {
    const i = _(() => {
      let d = {
        basic_input: "#409EFF",
        advanced_input: "#67c23a",
        display_ui: "#626aef",
        container: "#e6a23c"
      };
      return e.field.category != null ? d[e.field.category] : "#409EFF";
    }), t = A("getFormConfig"), o = A("annotated"), n = A("refList"), m = _(() => t()), s = _(() => !(n && n[e.field.options.name])), u = _(() => e.field.options.labelHidden ? "" : e.field.options.label), p = _(() => e.field.options.size != null ? e.field.options.size : e.builder.formConfig.size), g = _(() => e.field.options.labelHidden ? 0 : e.field.options.labelWidth ? e.field.options.labelWidth : e.builder ? e.builder.formConfig.labelWidth : m.value.labelWidth), w = _(() => e.field.options.labelAlign ? e.field.options.labelAlign : e.builder ? e.builder.formConfig.labelAlign || "label-left-align" : m.value.labelAlign || "label-left-align"), L = _(() => e.parentField ? e.parentField.options.name : ""), r = _(() => e.parentField ? e.parentField.component === "sub-form" : !1);
    return {
      formConfig: m,
      label: u,
      labelWidth: g,
      labelAlign: w,
      subFormName: L,
      subFormItemFlag: r,
      widgetSize: p,
      fieldColor: i,
      annotated: o,
      registerRefError: s
    };
  },
  methods: {
    getPropName() {
      return this.subFormItemFlag && !this.builderStatus ? this.subFormName + "." + this.subFormRowIndex + "." + this.field.options.name : this.field.options.name;
    }
  }
}), Ve = () => {
  Ae((e) => ({
    v44e8eb22: e.fieldColor
  }));
}, Ue = Le.setup;
Le.setup = Ue ? (e, i) => (Ve(), Ue(e, i)) : Ve;
const Ol = ["data-id"], Pl = {
  key: 0,
  class: "field-action"
}, $l = {
  key: 1,
  class: "drag-handler background-opacity"
}, El = { title: "Drag" }, Ll = { key: 0 }, jl = { key: 1 };
function Dl(e, i, t, o, n, m) {
  const s = V, u = ne, p = ue, g = xe;
  return l(), c("div", {
    class: S(["field-wrapper", { "builder-time-bottom-margin": !!e.builder }]),
    "data-id": e.field.options.name
  }, [
    !e.field.options.hidden || e.builderStatus === !0 ? (l(), a(g, {
      key: 0,
      label: e.label,
      "label-width": e.labelWidth + "px",
      title: e.field.options.labelTooltip,
      size: e.widgetSize,
      rules: e.buildRules,
      prop: e.getPropName(),
      class: S([e.selected ? "selected" : "", e.labelAlign, e.customClass, e.field.options.required ? "required" : "", e.field.options.labelHidden ? "label-hide" : ""]),
      onClick: i[0] || (i[0] = U((w) => e.selectField(e.field), ["stop"]))
    }, {
      label: f(() => [
        e.field.options.labelHidden ? b("", !0) : (l(), c(y, { key: 0 }, [
          e.field.options.labelIconClass ? (l(), c("span", {
            key: 0,
            class: "custom-label",
            style: j({ color: e.field.options.labelColor })
          }, [
            e.field.options.labelIconPosition === "front" ? (l(), c(y, { key: 0 }, [
              e.field.options.labelTooltip ? (l(), c(y, { key: 0 }, [
                h(u, {
                  content: e.field.options.labelTooltip
                }, {
                  default: f(() => [
                    h(s, {
                      "icon-name": e.field.options.labelIconClass,
                      class: "mr-1",
                      size: "13px"
                    }, null, 8, ["icon-name"])
                  ]),
                  _: 1
                }, 8, ["content"]),
                E(" " + F(e.label), 1)
              ], 64)) : (l(), c(y, { key: 1 }, [
                h(s, {
                  "icon-name": e.field.options.labelIconClass,
                  class: "mr-1",
                  size: "13px"
                }, null, 8, ["icon-name"]),
                E(F(e.label), 1)
              ], 64))
            ], 64)) : e.field.options.labelIconPosition === "rear" ? (l(), c(y, { key: 1 }, [
              e.field.options.labelTooltip ? (l(), c(y, { key: 0 }, [
                E(F(e.label) + " ", 1),
                h(u, {
                  content: e.field.options.labelTooltip
                }, {
                  default: f(() => [
                    h(s, {
                      "icon-name": e.field.options.labelIconClass,
                      class: "ml-1",
                      size: "13px"
                    }, null, 8, ["icon-name"])
                  ]),
                  _: 1
                }, 8, ["content"])
              ], 64)) : (l(), c(y, { key: 1 }, [
                E(F(e.label) + " ", 1),
                h(s, {
                  "icon-name": e.field.options.labelIconClass,
                  class: "ml-1",
                  size: "13px"
                }, null, 8, ["icon-name"])
              ], 64))
            ], 64)) : b("", !0)
          ], 4)) : e.field.options.labelColor ? (l(), c("span", {
            key: 1,
            class: "custom-label",
            style: j({ color: e.field.options.labelColor })
          }, F(e.label), 5)) : b("", !0)
        ], 64))
      ]),
      default: f(() => [
        ke(e.$slots, "default", {}, void 0, !0),
        e.annotated() ? (l(), a(p, {
          key: 0,
          type: "warning",
          effect: "plain",
          size: "small",
          style: { position: "absolute", top: "0", right: "0", "z-index": "999" }
        }, {
          default: f(() => [
            E(F(e.field.options.name), 1)
          ]),
          _: 1
        })) : b("", !0)
      ]),
      _: 3
    }, 8, ["label", "label-width", "title", "size", "rules", "prop", "class"])) : b("", !0),
    e.builder ? (l(), c(y, { key: 1 }, [
      e.builder.selectedId === e.field.id ? (l(), c("div", Pl, [
        v("i", {
          title: "Select Parent",
          onClick: i[1] || (i[1] = U((w) => e.selectParentField(), ["stop"]))
        }, [
          h(s, { "icon-name": "addon-select-parent" })
        ]),
        e.parentList && e.parentList.length > 1 ? (l(), c("i", {
          key: 0,
          title: "Move Up",
          onClick: i[2] || (i[2] = U((w) => e.moveUpField(), ["stop"]))
        }, [
          h(s, { "icon-name": "el-top" })
        ])) : b("", !0),
        e.parentList && e.parentList.length > 1 ? (l(), c("i", {
          key: 1,
          title: "Move Down",
          onClick: i[3] || (i[3] = U((w) => e.moveDownField(), ["stop"]))
        }, [
          h(s, { "icon-name": "el-bottom" })
        ])) : b("", !0),
        v("i", {
          title: "Clone",
          onClick: i[4] || (i[4] = U((w) => e.cloneFields(e.field), ["stop"]))
        }, [
          h(s, { "icon-name": "el-copy-document" })
        ]),
        v("i", {
          title: "Add Library",
          onClick: i[5] || (i[5] = U((w) => e.addLibFields(e.field), ["stop"]))
        }, [
          h(s, { "icon-name": "addon-library" })
        ]),
        v("i", {
          title: "Remove",
          onClick: i[6] || (i[6] = U((...w) => e.removeField && e.removeField(...w), ["stop"]))
        }, [
          h(s, { "icon-name": "el-delete" })
        ])
      ])) : b("", !0),
      e.builder.selectedId === e.field.id ? (l(), c("div", $l, [
        v("i", El, [
          h(s, {
            "icon-name": "el-rank",
            size: "14px"
          })
        ]),
        v("i", null, F(e.field.name ? e.field.name : e.field.component), 1),
        e.field.options.hidden === !0 ? (l(), c("i", Ll, [
          h(s, {
            "icon-name": "el-hide",
            size: "14px",
            style: { color: "var(--el-color-warning)" }
          })
        ])) : b("", !0),
        e.registerRefError ? (l(), c("i", jl, [
          h(u, { content: "Can't register RefInput, Create a new one or refresh the screen." }, {
            default: f(() => [
              h(s, {
                "icon-name": "el-warn-triangle-filled",
                size: "14px",
                style: { color: "var(--el-color-danger)" }
              })
            ]),
            _: 1
          })
        ])) : b("", !0)
      ])) : b("", !0)
    ], 64)) : b("", !0)
  ], 10, Ol);
}
const M = /* @__PURE__ */ I(Le, [["render", Dl], ["__scopeId", "data-v-0cb4e76b"]]), Tl = C({
  name: "autonumber-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? String(this.fieldModel) : null;
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    },
    inputType() {
      return "hidden";
    }
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Vl(e, i, t, o, n, m) {
  const s = V, u = ye, p = M;
  return l(), a(p, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(u, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (g) => e.fieldValue = g),
        disabled: e.field.options.disabled,
        readonly: e.field.options.readonly,
        size: e.widgetSize,
        class: "hide-spin-button",
        type: "text",
        placeholder: e.field.options.placeholder,
        clearable: e.field.options.clearable,
        minlength: e.field.options.minLength,
        maxlength: e.field.options.maxLength,
        "show-word-limit": e.field.options.showWordLimit,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onInput: e.handleInputCustomEvent,
        onChange: e.handleChangeEvent
      }, Y({
        suffix: f(() => [
          h(s, {
            "icon-name": e.field.options.suffixIcon
          }, null, 8, ["icon-name"])
        ]),
        _: 2
      }, [
        e.field.options.prefixText ? {
          name: "prepend",
          fn: f(() => [
            E(F(e.field.options.prefixText), 1)
          ]),
          key: "0"
        } : void 0,
        e.field.options.suffixText ? {
          name: "append",
          fn: f(() => [
            E(F(e.field.options.suffixText), 1)
          ]),
          key: "1"
        } : void 0,
        e.field.options.prefixIcon ? {
          name: "prefix",
          fn: f(() => [
            h(s, {
              "icon-name": e.field.options.prefixIcon
            }, null, 8, ["icon-name"])
          ]),
          key: "2"
        } : void 0
      ]), 1032, ["modelValue", "disabled", "readonly", "size", "placeholder", "clearable", "minlength", "maxlength", "show-word-limit", "onFocus", "onBlur", "onInput", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Ul = /* @__PURE__ */ I(Tl, [["render", Vl]]), Bl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ul
}, Symbol.toStringTag, { value: "Module" })), zl = C({
  name: "avatar-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {
    handleOnError(e) {
      try {
        if (this.field.options.onError) {
          const t = P(this.field.options.onError, ["event"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Al(e, i, t, o, n, m) {
  const s = rt, u = $;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(s, {
        ref: "fieldEditor",
        key: e.field.id,
        alt: e.field.options.alt ? e.field.options.alt : void 0,
        fit: e.field.options.fit,
        icon: e.field.options.clearIcon,
        shape: e.field.options.shape,
        size: e.field.options.sizeImg,
        src: e.field.options.src,
        style: j(`font-size: ${e.field.options.sizeImg - 20}px`),
        onClose: e.handleOnError
      }, null, 8, ["alt", "fit", "icon", "shape", "size", "src", "style", "onClose"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"]);
}
const Nl = /* @__PURE__ */ I(zl, [["render", Al], ["__scopeId", "data-v-9b381b55"]]), Wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Nl
}, Symbol.toStringTag, { value: "Module" })), Hl = C({
  name: "btn-editor-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
    // SdDynamicInput,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted(), this.resizeCleanup = Ne(async () => {
      await ci(() => {
        this.popupWidth = Ei("80%");
      });
    });
  },
  data() {
    return {
      resizeCleanup: null,
      showPopupFlag: !1,
      popupWidth: "80%"
    };
  },
  computed: {
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null)
          return this.fieldModel;
      },
      set(e) {
        e != null ? this.setFieldValue(e) : this.setFieldValue(null);
      }
    },
    inputType() {
      return "hidden";
    },
    checkInputValue() {
      let e = !1;
      return this.fieldModel !== void 0 && this.fieldModel !== null ? typeof this.fieldModel == "object" ? Object.keys(this.fieldModel).length > 0 : !!this.fieldModel : e;
    }
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {
    handleOpen() {
      this.showPopupFlag = !0;
    },
    handleClose() {
      this.showPopupFlag = !1;
    }
  },
  beforeUnmount() {
    this.resizeCleanup?.(), this.unregisterFromRefList();
  }
}), ql = { key: 0 }, Gl = {
  role: "heading",
  class: "el-dialog__title"
}, Jl = { class: "dialog-footer" };
function Kl(e, i, t, o, n, m) {
  const s = V, u = q, p = He, g = ei, w = M;
  return l(), a(w, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(u, {
        plain: "",
        type: e.checkInputValue ? "primary" : "",
        onClick: e.handleOpen,
        size: e.widgetSize,
        disabled: !!e.field.options.disabled
      }, {
        default: f(() => [
          e.field.options.inputTypeBtn && (e.field.options.inputTypeBtn === "html-editor" || e.field.options.inputTypeBtn === "html-mini-editor") ? (l(), a(s, {
            key: 0,
            "icon-name": "addon-html5",
            class: "mr-1"
          })) : e.field.options.inputTypeBtn && e.field.options.inputTypeBtn === "css-editor" ? (l(), a(s, {
            key: 1,
            "icon-name": "addon-css3",
            class: "mr-1"
          })) : e.field.options.inputTypeBtn && e.field.options.inputTypeBtn === "js-editor" ? (l(), a(s, {
            key: 2,
            "icon-name": "addon-js",
            class: "mr-1"
          })) : e.field.options.inputTypeBtn && e.field.options.inputTypeBtn === "json-editor" ? (l(), a(s, {
            key: 3,
            "icon-name": "json-input",
            class: "mr-1"
          })) : (l(), a(s, {
            key: 4,
            "icon-name": "btn-editor",
            class: "mr-1"
          })),
          E(" " + F(e.field.options.actionLabel ? e.field.options.actionLabel : "Edit"), 1)
        ]),
        _: 1
      }, 8, ["type", "onClick", "size", "disabled"]),
      e.showPopupFlag ? (l(), c("div", ql, [
        h(g, {
          title: "Crop Picture",
          modelValue: e.showPopupFlag,
          "onUpdate:modelValue": i[1] || (i[1] = (L) => e.showPopupFlag = L),
          width: e.popupWidth,
          "show-close": !1,
          class: "dialog-grid dialog-form",
          "append-to-body": "",
          "close-on-click-modal": !1,
          "close-on-press-escape": !1,
          "destroy-on-close": !0
        }, {
          header: f(({ close: L, titleId: r, titleClass: d }) => [
            v("span", Gl, F(e.field.options.label ? e.field.options.label : "Editor"), 1)
          ]),
          footer: f(() => [
            v("div", Jl, [
              h(u, {
                plain: "",
                onClick: e.handleClose
              }, {
                default: f(() => [...i[2] || (i[2] = [
                  E("Close", -1)
                ])]),
                _: 1
              }, 8, ["onClick"])
            ])
          ]),
          default: f(() => [
            h(p, {
              ref: "fieldEditor",
              modelValue: e.fieldValue,
              "onUpdate:modelValue": i[0] || (i[0] = (L) => e.fieldValue = L),
              size: e.widgetSize,
              readonly: e.field.options.disabled || e.field.options.readonly,
              "data-list": e.field.options.optionItems,
              "input-options": e.field.options.inputOptions,
              "input-type": e.field.options.inputTypeBtn ? e.field.options.inputTypeBtn : "textarea-editor",
              "user-state": e.globalUserState,
              onFocus: e.handleFocusCustomEvent,
              onBlur: e.handleBlurCustomEvent,
              onChange: e.handleChangeEvent
            }, null, 8, ["modelValue", "size", "readonly", "data-list", "input-options", "input-type", "user-state", "onFocus", "onBlur", "onChange"])
          ]),
          _: 1
        }, 8, ["modelValue", "width"])
      ])) : b("", !0)
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Zl = /* @__PURE__ */ I(Hl, [["render", Kl]]), Ql = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zl
}, Symbol.toStringTag, { value: "Module" })), Yl = C({
  name: "button-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  computed: {},
  data() {
    return {
      isDark: H()
    };
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {
    emitButtonClick(e, i) {
      try {
        if (e.onClick)
          try {
            const o = P(e.onClick, ["btn", "index"]).call(this, e, i);
            o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
          } catch (t) {
            this.alert(t.message, "warning");
          }
        else
          this.dispatch("SdFormRender", "onClick", [this]);
      } catch (t) {
        this.alert(t.message, "warning");
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Xl(e, i, t, o, n, m) {
  const s = V, u = q, p = pe, g = dt, w = at, L = $;
  return l(), a(L, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left", marginBottom: e.field.options.marginBottom + "px" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), c("div", {
        ref: "fieldEditor",
        key: e.field.id
      }, [
        e.field.options.buttonGroup ? (l(), a(g, { key: 0 }, {
          default: f(() => [
            e.field.options.buttons && Object.keys(e.field.options.buttons).length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.options.buttons, (r, d) => (l(), c(y, null, [
              r.confirm ? (l(), a(p, {
                key: 0,
                title: r.confirmTitle,
                onConfirm: (k) => e.emitButtonClick(r, Number(d))
              }, {
                reference: f(() => [
                  h(u, {
                    type: r.type ? r.type : "",
                    size: e.widgetSize,
                    plain: !!r.plain,
                    circle: !!r.circle,
                    round: !!r.round,
                    dark: e.isDark,
                    disabled: !!e.field.options.disabled || !!r.disabled,
                    "loading-icon": "Eleme",
                    loading: r.loading,
                    color: r.color
                  }, {
                    default: f(() => [
                      r.prefixIcon ? (l(), a(s, {
                        key: 0,
                        "icon-name": r.prefixIcon
                      }, null, 8, ["icon-name"])) : b("", !0),
                      v("span", null, F(r.label), 1),
                      r.suffixIcon ? (l(), a(s, {
                        key: 1,
                        "icon-name": r.suffixIcon,
                        class: S(r.label ? "ml-1" : "")
                      }, null, 8, ["icon-name", "class"])) : b("", !0)
                    ]),
                    _: 2
                  }, 1032, ["type", "size", "plain", "circle", "round", "dark", "disabled", "loading", "color"])
                ]),
                _: 2
              }, 1032, ["title", "onConfirm"])) : (l(), a(u, {
                key: 1,
                type: r.type ? r.type : "",
                size: e.widgetSize,
                plain: !!r.plain,
                circle: !!r.circle,
                round: !!r.round,
                dark: e.isDark,
                disabled: !!e.field.options.disabled || !!r.disabled,
                "loading-icon": "Eleme",
                loading: r.loading,
                color: r.color,
                tag: r.tag,
                href: r.tag && r.tag == "a" ? r.href : "",
                target: r.blank ? "_blank" : "_self",
                onClick: U((k) => e.emitButtonClick(r, Number(d)), ["prevent"])
              }, {
                default: f(() => [
                  r.prefixIcon ? (l(), a(s, {
                    key: 0,
                    "icon-name": r.prefixIcon
                  }, null, 8, ["icon-name"])) : b("", !0),
                  v("span", null, F(r.label), 1),
                  r.suffixIcon ? (l(), a(s, {
                    key: 1,
                    "icon-name": r.suffixIcon,
                    class: S(r.label ? "ml-1" : "")
                  }, null, 8, ["icon-name", "class"])) : b("", !0)
                ]),
                _: 2
              }, 1032, ["type", "size", "plain", "circle", "round", "dark", "disabled", "loading", "color", "tag", "href", "target", "onClick"]))
            ], 64))), 256)) : b("", !0)
          ]),
          _: 1
        })) : (l(), c(y, { key: 1 }, [
          e.field.options.buttons && Object.keys(e.field.options.buttons).length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.options.buttons, (r, d) => (l(), c(y, null, [
            r.badge ? (l(), a(w, {
              key: 0,
              value: r.badge,
              max: r.badgeMax,
              class: "ml-1 mr-1"
            }, {
              default: f(() => [
                h(u, {
                  type: r.type ? r.type : "",
                  size: e.widgetSize,
                  plain: !!r.plain,
                  circle: !!r.circle,
                  round: !!r.round,
                  dark: e.isDark,
                  disabled: !!e.field.options.disabled || !!r.disabled,
                  "loading-icon": "Eleme",
                  loading: r.loading,
                  color: r.color,
                  tag: r.tag,
                  href: r.tag && r.tag == "a" ? r.href : "",
                  target: r.blank ? "_blank" : "_self",
                  onClick: U((k) => e.emitButtonClick(r, Number(d)), ["prevent"])
                }, {
                  default: f(() => [
                    r.prefixIcon ? (l(), a(s, {
                      key: 0,
                      "icon-name": r.prefixIcon
                    }, null, 8, ["icon-name"])) : b("", !0),
                    v("span", null, F(r.label), 1),
                    r.suffixIcon ? (l(), a(s, {
                      key: 1,
                      "icon-name": r.suffixIcon,
                      class: S(r.label ? "ml-1" : "")
                    }, null, 8, ["icon-name", "class"])) : b("", !0)
                  ]),
                  _: 2
                }, 1032, ["type", "size", "plain", "circle", "round", "dark", "disabled", "loading", "color", "tag", "href", "target", "onClick"])
              ]),
              _: 2
            }, 1032, ["value", "max"])) : r.confirm ? (l(), a(p, {
              key: 1,
              title: r.confirmTitle,
              onConfirm: (k) => e.emitButtonClick(r, Number(d))
            }, {
              reference: f(() => [
                h(u, {
                  type: r.type ? r.type : "",
                  size: e.widgetSize,
                  plain: !!r.plain,
                  circle: !!r.circle,
                  round: !!r.round,
                  dark: e.isDark,
                  disabled: !!e.field.options.disabled || !!r.disabled,
                  "loading-icon": "Eleme",
                  loading: r.loading,
                  color: r.color
                }, {
                  default: f(() => [
                    r.prefixIcon ? (l(), a(s, {
                      key: 0,
                      "icon-name": r.prefixIcon
                    }, null, 8, ["icon-name"])) : b("", !0),
                    v("span", null, F(r.label), 1),
                    r.suffixIcon ? (l(), a(s, {
                      key: 1,
                      "icon-name": r.suffixIcon,
                      class: S(r.label ? "ml-1" : "")
                    }, null, 8, ["icon-name", "class"])) : b("", !0)
                  ]),
                  _: 2
                }, 1032, ["type", "size", "plain", "circle", "round", "dark", "disabled", "loading", "color"])
              ]),
              _: 2
            }, 1032, ["title", "onConfirm"])) : (l(), a(u, {
              key: 2,
              type: r.type ? r.type : "",
              size: e.widgetSize,
              plain: !!r.plain,
              circle: !!r.circle,
              round: !!r.round,
              dark: e.isDark,
              disabled: !!e.field.options.disabled || !!r.disabled,
              "loading-icon": "Eleme",
              loading: r.loading,
              color: r.color,
              tag: r.tag,
              href: r.tag && r.tag == "a" ? r.href : "",
              target: r.blank ? "_blank" : "_self",
              onClick: U((k) => e.emitButtonClick(r, Number(d)), ["prevent"])
            }, {
              default: f(() => [
                r.prefixIcon ? (l(), a(s, {
                  key: 0,
                  "icon-name": r.prefixIcon
                }, null, 8, ["icon-name"])) : b("", !0),
                v("span", null, F(r.label), 1),
                r.suffixIcon ? (l(), a(s, {
                  key: 1,
                  "icon-name": r.suffixIcon,
                  class: S(r.label ? "ml-1" : "")
                }, null, 8, ["icon-name", "class"])) : b("", !0)
              ]),
              _: 2
            }, 1032, ["type", "size", "plain", "circle", "round", "dark", "disabled", "loading", "color", "tag", "href", "target", "onClick"]))
          ], 64))), 256)) : b("", !0)
        ], 64))
      ]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"]);
}
const _l = /* @__PURE__ */ I(Yl, [["render", Xl], ["__scopeId", "data-v-3d7bb4e8"]]), xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _l
}, Symbol.toStringTag, { value: "Module" })), en = C({
  name: "carousel-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
    // SdUiCarousel,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  beforeCreate() {
  },
  data() {
    return {
      isDark: H()
    };
  },
  computed: {
    dataProvider() {
      if ((this.field.options.where || this.field.options.orderBy) && this.field.options.formId) {
        const e = {
          providerId: this.field.options.formId,
          providerType: "FORM"
        };
        return e.options = {}, this.field.options.where && (e.options.where = this.field.options.where), this.field.options.orderBy && (e.options.orderBy = this.field.options.orderBy), e;
      } else
        return;
    },
    showWhenParent() {
      if (this.field.options.showWhenParent && !this.builderStatus) {
        const e = this.getFormRef();
        let i = "";
        return e && e.formParams ? i = this.getObjectByPath(e.formParams, this.field.options.parentPath) || "" : i = this.getObjectByPath(this.formParams, this.field.options.parentPath) || "", !!i;
      } else
        return !0;
    }
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  methods: {
    clickEvent(e, i) {
      try {
        return this.field.options.clickEvent ? new Function("row", "index", ...z, this.field.options.clickEvent).call(this, e, i) : !0;
      } catch (t) {
        return this.alert(t.message, "warning"), !1;
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function tn(e, i, t, o, n, m) {
  const s = Li, u = $;
  return e.showWhenParent ? (l(), a(u, {
    key: 0,
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    class: S(["datagrid-container"]),
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(s, {
        ref: "fieldEditor",
        key: e.field.id,
        "form-id": e.field.options.formId,
        "provider-type": e.field.options.providerType || "FORM",
        "data-provider": e.dataProvider,
        "parent-id": e.parentId,
        params: e.params,
        "parent-path": e.parentPath,
        "icon-field": e.field.options.iconField || void 0,
        "title-field": e.field.options.titleField || void 0,
        "title-enable": !!e.field.options.titleEnable,
        "icon-name": e.field.options.iconName || "",
        "title-name": e.field.options.titleName || "",
        "detail-content": e.field.options.detailContent || void 0,
        "detail-max-row": e.field.options.detailMaxRow || void 0,
        height: e.field.options.height || void 0,
        "limit-row": e.field.options.limitRow || 30,
        "indicator-position": e.field.options.indicatorPosition || "",
        autoplay: !!e.field.options.autoplay,
        interval: e.field.options.interval || void 0,
        "motion-blur": !!e.field.options.motionBlur,
        "vertical-enable": !!e.field.options.verticalEnable,
        trigger: e.field.options.viewTrigger || void 0,
        "type-card": !!e.field.options.typeCard,
        "title-content": e.field.options.titleContent || void 0,
        "total-enable": !!e.field.options.totalEnable,
        "custom-value": e.field.options.customValue || void 0,
        "click-event": e.field.options.clickEvent ? e.clickEvent : void 0,
        "enable-ws": !!e.field.options.enableWs,
        "user-state": e.globalUserState,
        "build-state": e.builderStatus
      }, null, 8, ["form-id", "provider-type", "data-provider", "parent-id", "params", "parent-path", "icon-field", "title-field", "title-enable", "icon-name", "title-name", "detail-content", "detail-max-row", "height", "limit-row", "indicator-position", "autoplay", "interval", "motion-blur", "vertical-enable", "trigger", "type-card", "title-content", "total-enable", "custom-value", "click-event", "enable-ws", "user-state", "build-state"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"])) : b("", !0);
}
const on = /* @__PURE__ */ I(en, [["render", tn], ["__scopeId", "data-v-53fcc79d"]]), ln = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: on
}, Symbol.toStringTag, { value: "Module" })), nn = C({
  name: "cascader-form-input",
  typeName: "FormField",
  components: { FormItemWrapper: M },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? typeof this.fieldModel == "string" && this.fieldModel !== "" ? this.string2Json(this.fieldModel) : this.fieldModel : null;
      },
      set(e) {
        e != null ? this.setFieldValue(e) : this.setFieldValue(null);
      }
    },
    cascaderProps() {
      return {
        multiple: !!this.field.options.multiple,
        checkStrictly: !!this.field.options.checkStrictly
      };
    }
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return { fieldEditor: e, formParams: i };
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function sn(e, i, t, o, n, m) {
  const s = ji, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        disabled: e.builderStatus ? !0 : e.field.options.disabled,
        clearable: e.field.options.clearable,
        filterable: e.builderStatus ? !1 : e.field.options.filterable,
        placeholder: e.field.options.placeholder || void 0,
        props: e.cascaderProps,
        "form-id": e.field.options.formId || "",
        "value-field": e.field.options.valueField || "_id",
        "label-field": e.field.options.labelField || "",
        "parent-field": e.field.options.parentField || "",
        "root-value": e.field.options.rootValue ?? null,
        separator: e.field.options.separator || " / ",
        where: e.field.options.where || "",
        "order-by": e.field.options.orderBy || null,
        limit: e.field.options.limit || 1e3,
        "save-with-label": !!e.field.options.saveWithLabel,
        "user-state": e.globalUserState,
        onChange: e.handleChangeEvent,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent
      }, null, 8, ["modelValue", "disabled", "clearable", "filterable", "placeholder", "props", "form-id", "value-field", "label-field", "parent-field", "root-value", "separator", "where", "order-by", "limit", "save-with-label", "user-state", "onChange", "onFocus", "onBlur"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const rn = /* @__PURE__ */ I(nn, [["render", sn]]), dn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rn
}, Symbol.toStringTag, { value: "Module" })), an = C({
  name: "chart-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
    // SdChart,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  beforeCreate() {
  },
  data() {
    return {
      isDark: H()
    };
  },
  computed: {
    params() {
      return this.getFormRef() && this.getFormRef().formParams ? this.getFormRef().formParams : this.formParams ? this.formParams : {};
    }
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  methods: {
    clickEvent(e, i) {
      try {
        return this.field.options.clickEvent ? new Function("row", "index", ...z, this.field.options.clickEvent).call(this, e, i) : !0;
      } catch (t) {
        return this.alert(t.message, "warning"), !1;
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function fn(e, i, t, o, n, m) {
  const s = Di, u = $;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    class: S(["datagrid-container"]),
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      e.builderStatus ? (l(), a(s, {
        ref: "fieldEditor",
        key: e.field.id,
        "sql-id": e.field.options.sqlId || "",
        width: e.field.options.width || void 0,
        height: e.field.options.heightImg || void 0,
        title: e.field.options.title || "",
        type: e.field.options.chartType || "bar",
        mockup: !0,
        "build-state": e.builderStatus,
        "user-state": e.globalUserState
      }, null, 8, ["sql-id", "width", "height", "title", "type", "build-state", "user-state"])) : (l(), a(s, {
        ref: "fieldEditor",
        key: e.field.id,
        "sql-id": e.field.options.sqlId || "",
        params: e.params,
        "y-dataset": e.field.options.yDataset || void 0,
        width: e.field.options.width || void 0,
        height: e.field.options.heightImg || void 0,
        title: e.field.options.title || "",
        "scales-x-label": e.field.options.scalesXLabel || "",
        "scales-y-label": e.field.options.scalesYLabel || "",
        "x-field": e.field.options.xField || "",
        "title-display": !!e.field.options.titleDisplay,
        "legend-display": !!e.field.options.legendDisplay,
        "scales-x-display": !!e.field.options.scalesXDisplay,
        "scales-y-display": !!e.field.options.scalesYDisplay,
        "grid-display": !!e.field.options.gridDisplay,
        type: e.field.options.chartType || "bar",
        "x-type": e.field.options.xType || "category",
        "custom-options": e.field.options.customOptions || void 0,
        "legend-custom": e.field.options.legendCustom || void 0,
        "scales-x-custom": e.field.options.scalesXCustom || void 0,
        "scales-y-custom": e.field.options.scalesYCustom || void 0,
        "build-state": e.builderStatus,
        "user-state": e.globalUserState
      }, null, 8, ["sql-id", "params", "y-dataset", "width", "height", "title", "scales-x-label", "scales-y-label", "x-field", "title-display", "legend-display", "scales-x-display", "scales-y-display", "grid-display", "type", "x-type", "custom-options", "legend-custom", "scales-x-custom", "scales-y-custom", "build-state", "user-state"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"]);
}
const un = /* @__PURE__ */ I(an, [["render", fn], ["__scopeId", "data-v-c0f6576e"]]), pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: un
}, Symbol.toStringTag, { value: "Module" })), mn = C({
  name: "checkbox-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null)
          return typeof this.fieldModel == "string" && this.fieldModel !== "" ? this.string2Json(this.fieldModel) : typeof this.fieldModel == "object" && Array.isArray(this.fieldModel) && this.fieldModel.length > 0 ? this.fieldModel : void 0;
      },
      set(e) {
        e != null ? typeof e == "string" && e !== "" ? this.setFieldValue(this.string2Json(e)) : typeof e == "object" && Array.isArray(e) && e.length > 0 ? this.setFieldValue(e) : this.setFieldValue(null) : this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initOptionItems(), this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function hn(e, i, t, o, n, m) {
  const s = ut, u = pt, p = ge, g = Fe, w = ft, L = M;
  return l(), a(L, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(w, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (r) => e.fieldValue = r),
        class: S({ "check-group-block": e.field.options.displayStyle === "flex" }),
        disabled: e.field.options.disabled,
        size: e.widgetSize,
        min: e.field.options.minCheck,
        max: e.field.options.maxCheck,
        onChange: e.handleChangeEvent,
        style: { width: "100%" }
      }, {
        default: f(() => [
          e.field.options.buttonStyle ? (l(!0), c(y, { key: 0 }, T(e.field.options.optionItems, (r, d) => (l(), a(s, {
            key: d,
            value: r.value,
            disabled: r.disabled,
            border: e.field.options.border,
            style: j({ display: e.field.options.displayStyle })
          }, {
            default: f(() => [
              E(F(r.label), 1)
            ]),
            _: 2
          }, 1032, ["value", "disabled", "border", "style"]))), 128)) : (l(), c(y, { key: 1 }, [
            e.field.options.showCol && e.field.options.showCol > 0 ? (l(), a(g, { key: 0 }, {
              default: f(() => [
                (l(!0), c(y, null, T(e.field.options.optionItems, (r, d) => (l(), a(p, {
                  span: e.field.options.showCol
                }, {
                  default: f(() => [
                    (l(), a(u, {
                      key: d,
                      value: r.value,
                      disabled: r.disabled,
                      border: e.field.options.border,
                      style: j({ display: e.field.options.displayStyle })
                    }, {
                      default: f(() => [
                        E(F(r.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled", "border", "style"]))
                  ]),
                  _: 2
                }, 1032, ["span"]))), 256))
              ]),
              _: 1
            })) : (l(!0), c(y, { key: 1 }, T(e.field.options.optionItems, (r, d) => (l(), a(u, {
              key: d,
              value: r.value,
              disabled: r.disabled,
              border: e.field.options.border,
              style: j({ display: e.field.options.displayStyle })
            }, {
              default: f(() => [
                E(F(r.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "disabled", "border", "style"]))), 128))
          ], 64))
        ]),
        _: 1
      }, 8, ["modelValue", "class", "disabled", "size", "min", "max", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const cn = /* @__PURE__ */ I(mn, [["render", hn], ["__scopeId", "data-v-41c9d41a"]]), bn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: cn
}, Symbol.toStringTag, { value: "Module" })), gn = C({
  name: "code-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
    // SdAceEditor,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    // gate ปุ่ม Validate — เฉพาะ editor ภาษา LaTeX (report template)
    isLatex() {
      return ["latex", "stex", "tex"].includes(this.field.options.lang);
    },
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null)
          return String(this.fieldModel);
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  data() {
    return {
      isDark: H(),
      validating: !1
    };
  },
  methods: {
    // 3b-wire — compile template ที่พิมพ์ค้าง (server-side) แล้ว feed error กลับเป็น diagnostics ในบรรทัดที่ผิด
    async validateLatex() {
      const e = this.$refs.fieldEditor, i = this.getFormRef()?.formData?._id;
      if (!i) {
        x.warning("Save the report before validating.");
        return;
      }
      const t = this.globalUserState?.host, o = this.globalUserState?.user?.token;
      this.validating = !0;
      try {
        await ce.post(
          `${t}/v1/files/create-latex`,
          { reportId: i, params: {}, pdf_latex: this.fieldValue },
          { headers: { Authorization: `Bearer ${o}` }, responseType: "blob" }
        ), e?.setDiagnostics?.([]), x.success("LaTeX compiled successfully.");
      } catch (n) {
        let m = "Compile failed.", s = [];
        try {
          const u = await n.response?.data?.text?.();
          if (u) {
            const p = JSON.parse(u);
            p.message && (m = p.message), Array.isArray(p.errors) && (s = p.errors.map((g) => ({ line: g.line || 1, message: g.message })));
          }
        } catch {
        }
        e?.setDiagnostics?.(s), x.error(m);
      } finally {
        this.validating = !1;
      }
    }
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
}), Fn = {
  key: 0,
  class: "latex-toolbar"
};
function yn(e, i, t, o, n, m) {
  const s = q, u = Ti, p = M;
  return l(), a(p, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      e.isLatex && !e.builderStatus ? (l(), c("div", Fn, [
        h(s, {
          size: e.widgetSize,
          loading: e.validating,
          plain: "",
          onClick: e.validateLatex
        }, {
          default: f(() => [...i[1] || (i[1] = [
            E("Validate", -1)
          ])]),
          _: 1
        }, 8, ["size", "loading", "onClick"])
      ])) : b("", !0),
      h(u, {
        ref: "fieldEditor",
        value: e.fieldValue,
        "onUpdate:value": i[0] || (i[0] = (g) => e.fieldValue = g),
        readonly: e.field.options.disabled || e.field.options.readonly,
        lang: e.field.options.lang,
        "min-lines": e.field.options.minLines,
        "max-lines": e.field.options.maxLines,
        "min-height": e.field.options.minHeight,
        class: "custom-ace",
        size: e.widgetSize,
        placeholder: e.field.options.placeholder,
        onOnInput: e.handleInputCustomEvent,
        onOnBlur: e.handleBlurCustomEvent,
        onOnFocus: e.handleFocusCustomEvent,
        onOnChange: e.handleChangeEvent
      }, null, 8, ["value", "readonly", "lang", "min-lines", "max-lines", "min-height", "size", "placeholder", "onOnInput", "onOnBlur", "onOnFocus", "onOnChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const vn = /* @__PURE__ */ I(gn, [["render", yn], ["__scopeId", "data-v-1a3ed238"]]), wn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vn
}, Symbol.toStringTag, { value: "Module" })), Cn = C({
  name: "color-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null)
          return String(this.fieldModel);
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = R(["#409EFF", "#67C23A", "#E6A23C", "#F56C6C", "#626aef", "#909399", "#303133", "#606266", "#D4D7DE", "#EBEDF0"]);
    return {
      fieldEditor: e,
      predefineColors: i
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Sn(e, i, t, o, n, m) {
  const s = mt, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        size: e.widgetSize,
        "show-alpha": e.field.options.showAlpha,
        predefine: e.predefineColors,
        disabled: e.field.options.disabled,
        onChange: e.handleChangeEvent
      }, null, 8, ["modelValue", "size", "show-alpha", "predefine", "disabled", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const In = /* @__PURE__ */ I(Cn, [["render", Sn], ["__scopeId", "data-v-a95a64b8"]]), Mn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: In
}, Symbol.toStringTag, { value: "Module" })), Rn = C({
  name: "crop-upload-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
    // SdCropImageInput,
  },
  mixins: [O],
  data() {
    return {
      // isDisabled: this.field.options.disabled,
    };
  },
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState", "globalAuthToken", "globalSdForm"],
  computed: {
    previewList() {
      const e = [];
      for (const i of this.fileList)
        i.url && e.push(i.url);
      return e;
    },
    realUploadURL() {
      let e = this.field.options.uploadURL;
      return e || (this.globalUserState ? this.globalUserState.host + "/v1/files/form-upload" : "");
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.field.options.disabled, this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = R(null);
    return {
      fieldEditor: e,
      imageRef: i
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {
    handlePictureUpload(e) {
      e.toBlob(async (i) => {
        const t = new FormData();
        t.append("file", i, "crop-file.png"), t.append("formId", this.globalSdForm._id), t.append("category", "cropper"), await ce.post(this.realUploadURL, t, {
          headers: {
            Authorization: `Bearer ${this.globalAuthToken}`,
            "Content-Type": "multipart/form-data"
          }
        }).then((o) => {
          if (o.data && o.data.fileName && o.data.filePath) {
            const n = o.data, m = {
              name: n.fileName,
              status: "success",
              url: n.filePath,
              uid: Re(),
              response: n
            }, s = [m];
            let u = null;
            if (this.field.options.onUploadSuccess)
              try {
                u = new Function("result", "file", "fileList", ...z, this.field.options.onUploadSuccess).call(this, n, m, s);
              } catch (p) {
                this.alert(p.message, "warning");
              }
            this.updateFieldModelAndEmitDataChangeForUpload(s, u, n), this.fileList = D(s), this.alert("File uploaded successfully", "success");
          } else
            this.alert("File uploaded failed", "warning");
        }).catch((o) => {
          const n = {
            name: "crop-file.png",
            status: "fail",
            uid: Re()
          };
          this.handleUploadError(o, n, [n]), this.alert(o.message, "warning");
        });
      });
    },
    handleUploadError(e, i, t) {
      try {
        if (this.field.options.onUploadError) {
          const n = P(this.field.options.onUploadError, ["error", "file", "fileList"]).call(this, e, i, t);
          n && typeof n.then == "function" && n.catch((m) => this.alert(m?.message || String(m), "warning"));
        } else
          this.alert(e, "warning");
      } catch (o) {
        this.alert(o.message, "warning");
      }
    },
    updateFieldModelAndEmitDataChangeForUpload(e, i, t) {
      let o = D(this.fileList);
      i && i.name && i.url ? this.fileList.push({
        name: i.name,
        url: i.url
      }) : t && t.name && t.url ? this.fileList.push({
        name: t.name,
        url: t.url
      }) : this.fileList = D(e), this.syncUpdateFormModel(this.fileList), this.emitFieldDataChange(this.fileList, o);
    },
    updateFieldModelAndEmitDataChangeForRemove(e) {
      let i = D(this.fileList), t = -1;
      this.fileListBeforeRemove.map((o, n) => {
        o.name === e.name && (o.url === e.url || o.uid && o.uid === e.uid) && (t = n);
      }), t > -1 && this.fileList.splice(t, 1), this.syncUpdateFormModel(this.fileList), this.emitFieldDataChange(this.fileList, i);
    },
    handleBeforeRemove(e) {
      this.fileListBeforeRemove = D(e);
    },
    handlePictureRemove(e) {
      const i = e.response;
      this.handleBeforeRemove(this.fileList), ce.delete(`${this.globalUserState.host}/v1/files/remove-one`, {
        data: i,
        headers: {
          Authorization: `Bearer ${this.globalAuthToken}`
        }
      }).then((t) => {
        this.updateFieldModelAndEmitDataChangeForRemove(e);
        let o = D(this.fileList);
        try {
          if (this.field.options.onFileRemove) {
            const m = P(this.field.options.onFileRemove, ["file", "fileList"]).call(this, e, o);
            m && typeof m.then == "function" && m.catch((s) => this.alert(s?.message || String(s), "warning"));
          }
        } catch (n) {
          this.alert(n.message, "warning");
        }
      }).catch((t) => {
        console.log(t);
      });
    }
  }
});
function kn(e, i, t, o, n, m) {
  const s = Vi, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        disabled: e.field.options.disabled || !!e.builderStatus,
        modelValue: e.fileList,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fileList = p),
        "flip-enable": !!e.field.options.flipEnable,
        width: e.field.options.width || 150,
        height: e.field.options.heightImg || 150,
        "resize-enable": !!e.field.options.resizeEnable,
        "rotate-enable": !!e.field.options.rotateEnable,
        "after-croppered": e.handlePictureUpload,
        "after-delete": e.handlePictureRemove,
        onChange: e.handleChangeEvent
      }, null, 8, ["disabled", "modelValue", "flip-enable", "width", "height", "resize-enable", "rotate-enable", "after-croppered", "after-delete", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const On = /* @__PURE__ */ I(Rn, [["render", kn], ["__scopeId", "data-v-5bfdb1e5"]]), Pn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: On
}, Symbol.toStringTag, { value: "Module" })), $n = C({
  name: "datagrid-form-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
    // SdCrudGrid,
    // SdReport,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  beforeCreate() {
  },
  data() {
    return {
      isDark: H()
    };
  },
  computed: {
    // scope ของ state ที่จำ: ฟอร์มแม่ + varname ของ widget — ฟอร์มปลายทางเดียวกันถูกวางหลายจุดก็ไม่ชนกัน
    stateScope() {
      return `${this.globalModel?.sdformModel?.dataid || ""}.${this.field.options.name || ""}`;
    },
    dataProvider() {
      if ((this.field.options.where || this.field.options.orderBy) && this.field.options.formId) {
        const e = {
          providerId: this.field.options.formId,
          providerType: "FORM"
        };
        return e.options = {}, this.field.options.where && (e.options.where = this.field.options.where), this.field.options.orderBy && (e.options.orderBy = this.field.options.orderBy), e;
      } else
        return;
    },
    expandProvider() {
      if (this.field.options.expandSqlId)
        return {
          providerId: this.field.options.expandSqlId,
          providerType: "SQL"
        };
    },
    showWhenParent() {
      if (this.field.options.showWhenParent && !this.builderStatus) {
        const e = this.getFormRef();
        let i = "";
        return e && e.formParams ? i = this.getObjectByPath(e.formParams, this.field.options.parentPath) || "" : i = this.getObjectByPath(this.formParams, this.field.options.parentPath) || "", !!i;
      } else
        return !0;
    }
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  methods: {
    insertBefore(e, i) {
      try {
        if (this.field.options.onInsertBefore) {
          const o = P(this.field.options.onInsertBefore, ["row", "index"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    updateBefore(e, i) {
      try {
        if (this.field.options.onUpdateBefore) {
          const o = P(this.field.options.onUpdateBefore, ["row", "index"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    viewBefore(e, i) {
      try {
        if (this.field.options.onViewBefore) {
          const o = P(this.field.options.onViewBefore, ["row", "index"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    beforeSave(e) {
      try {
        if (this.field.options.onBeforeSave) {
          const t = P(this.field.options.onBeforeSave, ["row"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    afterDelete(e, i) {
      try {
        if (this.field.options.onAfterDelete) {
          const o = P(this.field.options.onAfterDelete, ["row", "index"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    allowDeleteFunc(e, i) {
      try {
        return this.field.options.allowDeleteFunc ? new Function("row", "index", ...z, this.field.options.allowDeleteFunc).call(this, e, i) : !0;
      } catch (t) {
        return this.alert(t.message, "warning"), !1;
      }
    },
    allowCloneFunc(e, i) {
      try {
        return this.field.options.allowCloneFunc ? new Function("row", "index", ...z, this.field.options.allowCloneFunc).call(this, e, i) : !0;
      } catch (t) {
        return this.alert(t.message, "warning"), !1;
      }
    },
    emitButtonBarClick(e, i) {
      try {
        if (e.onClick)
          try {
            const o = P(e.onClick, ["btnRow", "btnIndex"]).call(this, e, i);
            o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
          } catch (t) {
            this.alert(t.message, "warning");
          }
        else
          this.dispatch("SdFormRender", "onClick", [this]);
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    emitButtonRowClick(e, i, t, o) {
      try {
        if (e.onClick)
          try {
            const m = P(e.onClick, ["btnRow", "btnIndex", "dataRow", "dataIndex"]).call(this, e, i, t, o);
            m && typeof m.then == "function" && m.catch((s) => this.alert(s?.message || String(s), "warning"));
          } catch (n) {
            this.alert(n.message, "warning");
          }
        else
          this.dispatch("SdFormRender", "onClick", [this]);
      } catch (n) {
        this.alert(n.message, "warning");
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function En(e, i, t, o, n, m) {
  const s = V, u = q, p = pe, g = le, w = qe, L = $;
  return e.showWhenParent ? (l(), a(L, {
    key: 0,
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    class: S(["datagrid-container"]),
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(w, {
        ref: "fieldEditor",
        key: e.field.id,
        "form-id": e.field.options.formId,
        "provider-type": e.field.options.providerType || "FORM",
        "data-provider": e.dataProvider,
        "state-key": !!e.field.options.rememberState,
        "state-scope": e.stateScope,
        "parent-id": e.parentId,
        params: e.params,
        "init-data": e.field.options.initData ? e.field.options.initData : {},
        readonly: e.field.options.readonly || e.field.options.disabled,
        resizable: !!e.field.options.resizable,
        "index-column": !!e.field.options.indexColumn,
        "system-column": !!e.field.options.systemColumn,
        "action-enable": !!e.field.options.actionEnable,
        "action-crud-enable": !!e.field.options.actionCrudEnable,
        "title-enable": !!e.field.options.titleEnable,
        "rawdata-btn-enable": !!e.field.options.rawdataBtnEnable,
        "export-btn-enable": !!e.field.options.exportBtnEnable,
        "export-row-btn-enable": !!e.field.options.exportRowBtnEnable,
        "add-btn-enable": !!e.field.options.addBtnEnable,
        "add-btn-label": e.field.options.addBtnLabel || "Add",
        "action-label": e.field.options.actionLabel || "Actions",
        "action-width": e.field.options.actionWidth || void 0,
        "display-fields": e.field.options.displayFields || void 0,
        "search-fields": e.field.options.searchField || void 0,
        "aggr-column": e.field.options.aggrColumn || void 0,
        "edit-column": e.field.options.editColumn || void 0,
        "sum-column": e.field.options.sumColumn || void 0,
        "expand-count-children-name": e.field.options.expandCountChildrenName || "hasChildren",
        "expand-provider": e.expandProvider,
        "clone-enable-label-field": e.field.options.cloneEnableLabelField || "",
        height: e.field.options.height || "auto",
        "max-height": e.field.options.maxHeight || "auto",
        "icon-name": e.field.options.iconName || "",
        "key-id": e.field.options.keyId || "_id",
        "row-key": e.field.options.rowKey || "dataid",
        "placeholder-search": e.field.options.placeholder || "Search...",
        "subform-width": e.field.options.subformWidth || 600,
        "sum-decimal": e.field.options.sumDecimal || 0,
        "sum-label": e.field.options.sumLabel || "Total",
        "total-inline": !!e.field.options.totalInline,
        "sum-all-page": !!e.field.options.sumAllPage,
        "title-name": e.field.options.titleName || "",
        "group-key": e.field.options.groupKey || "",
        "limit-row": e.field.options.limitRow || 30,
        "infinite-scroll": !!e.field.options.infiniteScroll,
        "allow-delete-func": e.field.options.allowDeleteFunc ? e.allowDeleteFunc : void 0,
        "allow-clone-func": e.field.options.allowCloneFunc ? e.allowCloneFunc : void 0,
        "enable-ws": !!e.field.options.enableWs,
        "parent-path": e.parentPath,
        "insert-before": e.insertBefore,
        "update-before": e.updateBefore,
        "view-before": e.viewBefore,
        "before-save": e.beforeSave,
        "after-delete": e.afterDelete,
        "user-state": e.globalUserState,
        "build-state": e.builderStatus
      }, {
        actions: f(() => [
          e.field.options.buttonsBar && Object.keys(e.field.options.buttonsBar).length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.options.buttonsBar, (r, d) => (l(), c(y, null, [
            r.confirm ? (l(), a(p, {
              key: 0,
              title: r.confirmTitle,
              onConfirm: (k) => e.emitButtonBarClick(r, Number(d))
            }, {
              reference: f(() => [
                h(u, {
                  type: r.type ? r.type : "",
                  plain: !!r.plain,
                  circle: !!r.circle,
                  round: !!r.round,
                  dark: e.isDark,
                  disabled: !!e.field.options.disabled || !!r.disabled,
                  "loading-icon": "Eleme",
                  loading: r.loading,
                  color: r.color
                }, {
                  default: f(() => [
                    r.prefixIcon ? (l(), a(s, {
                      key: 0,
                      "icon-name": r.prefixIcon,
                      class: S(r.label ? "" : "ml-1")
                    }, null, 8, ["icon-name", "class"])) : b("", !0),
                    v("span", null, F(r.label), 1),
                    r.suffixIcon ? (l(), a(s, {
                      key: 1,
                      "icon-name": r.suffixIcon,
                      class: S(r.label ? "ml-1" : "")
                    }, null, 8, ["icon-name", "class"])) : b("", !0)
                  ]),
                  _: 2
                }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color"])
              ]),
              _: 2
            }, 1032, ["title", "onConfirm"])) : (l(), a(u, {
              key: 1,
              type: r.type ? r.type : "",
              plain: !!r.plain,
              circle: !!r.circle,
              round: !!r.round,
              dark: e.isDark,
              disabled: !!e.field.options.disabled || !!r.disabled,
              "loading-icon": "Eleme",
              loading: r.loading,
              color: r.color,
              tag: r.tag,
              href: r.tag && r.tag == "a" ? r.href : "",
              target: r.blank ? "_blank" : "_self",
              onClick: U((k) => e.emitButtonBarClick(r, Number(d)), ["prevent"])
            }, {
              default: f(() => [
                r.prefixIcon ? (l(), a(s, {
                  key: 0,
                  "icon-name": r.prefixIcon,
                  class: S(r.label ? "" : "ml-1")
                }, null, 8, ["icon-name", "class"])) : b("", !0),
                v("span", null, F(r.label), 1),
                r.suffixIcon ? (l(), a(s, {
                  key: 1,
                  "icon-name": r.suffixIcon,
                  class: S(r.label ? "ml-1" : "")
                }, null, 8, ["icon-name", "class"])) : b("", !0)
              ]),
              _: 2
            }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color", "tag", "href", "target", "onClick"]))
          ], 64))), 256)) : b("", !0)
        ]),
        actionBtnRow: f((r) => [
          h(g, {
            "report-list": e.field.options.reportList || [],
            size: "small",
            params: r.row,
            "user-state": e.globalUserState,
            "margin-enable": !0
          }, null, 8, ["report-list", "params", "user-state"]),
          e.field.options.buttonsRow && Object.keys(e.field.options.buttonsRow).length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.options.buttonsRow, (d, k) => (l(), c(y, null, [
            d.confirm ? (l(), a(p, {
              key: 0,
              title: d.confirmTitle,
              onConfirm: (B) => e.emitButtonRowClick(d, Number(k), r.row, r.index)
            }, {
              reference: f(() => [
                h(u, {
                  size: "small",
                  type: d.type ? d.type : "",
                  plain: !!d.plain,
                  circle: !!d.circle,
                  round: !!d.round,
                  dark: e.isDark,
                  disabled: !!e.field.options.disabled || !!d.disabled,
                  "loading-icon": "Eleme",
                  loading: d.loading,
                  color: d.color
                }, {
                  default: f(() => [
                    d.prefixIcon ? (l(), a(s, {
                      key: 0,
                      "icon-name": d.prefixIcon,
                      class: S(d.label ? "" : "ml-1")
                    }, null, 8, ["icon-name", "class"])) : b("", !0),
                    v("span", null, F(d.label), 1),
                    d.suffixIcon ? (l(), a(s, {
                      key: 1,
                      "icon-name": d.suffixIcon,
                      class: S(d.label ? "ml-1" : "")
                    }, null, 8, ["icon-name", "class"])) : b("", !0)
                  ]),
                  _: 2
                }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color"])
              ]),
              _: 2
            }, 1032, ["title", "onConfirm"])) : (l(), a(u, {
              key: 1,
              size: "small",
              type: d.type ? d.type : "",
              plain: !!d.plain,
              circle: !!d.circle,
              round: !!d.round,
              dark: e.isDark,
              disabled: !!e.field.options.disabled || !!d.disabled,
              "loading-icon": "Eleme",
              loading: d.loading,
              color: d.color,
              tag: d.tag,
              href: d.tag && d.tag == "a" ? d.href : "",
              target: d.blank ? "_blank" : "_self",
              onClick: U((B) => e.emitButtonRowClick(d, Number(k), r.row, r.index), ["prevent"])
            }, {
              default: f(() => [
                d.prefixIcon ? (l(), a(s, {
                  key: 0,
                  "icon-name": d.prefixIcon,
                  class: S(d.label ? "" : "ml-1")
                }, null, 8, ["icon-name", "class"])) : b("", !0),
                v("span", null, F(d.label), 1),
                d.suffixIcon ? (l(), a(s, {
                  key: 1,
                  "icon-name": d.suffixIcon,
                  class: S(d.label ? "ml-1" : "")
                }, null, 8, ["icon-name", "class"])) : b("", !0)
              ]),
              _: 2
            }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color", "tag", "href", "target", "onClick"]))
          ], 64))), 256)) : b("", !0)
        ]),
        _: 1
      }, 8, ["form-id", "provider-type", "data-provider", "state-key", "state-scope", "parent-id", "params", "init-data", "readonly", "resizable", "index-column", "system-column", "action-enable", "action-crud-enable", "title-enable", "rawdata-btn-enable", "export-btn-enable", "export-row-btn-enable", "add-btn-enable", "add-btn-label", "action-label", "action-width", "display-fields", "search-fields", "aggr-column", "edit-column", "sum-column", "expand-count-children-name", "expand-provider", "clone-enable-label-field", "height", "max-height", "icon-name", "key-id", "row-key", "placeholder-search", "subform-width", "sum-decimal", "sum-label", "total-inline", "sum-all-page", "title-name", "group-key", "limit-row", "infinite-scroll", "allow-delete-func", "allow-clone-func", "enable-ws", "parent-path", "insert-before", "update-before", "view-before", "before-save", "after-delete", "user-state", "build-state"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"])) : b("", !0);
}
const Ln = /* @__PURE__ */ I($n, [["render", En], ["__scopeId", "data-v-1dac8809"]]), jn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ln
}, Symbol.toStringTag, { value: "Module" })), Dn = C({
  name: "datagrid-sql-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
    // SdCrudGrid,
    // SdReport,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  beforeCreate() {
  },
  data() {
    return {
      isDark: H()
    };
  },
  computed: {
    // scope ของ state ที่จำ: ฟอร์มแม่ + varname ของ widget — sql เดียวกันถูกวางหลายจุดก็ไม่ชนกัน
    stateScope() {
      return `${this.globalModel?.sdformModel?.dataid || ""}.${this.field.options.name || ""}`;
    },
    dataProvider() {
      if (this.field.options.orderBy && this.field.options.sqlId) {
        const e = {
          providerId: this.field.options.sqlId,
          providerType: "FORM"
        };
        return e.options = {}, this.field.options.orderBy && (e.options.orderBy = this.field.options.orderBy), e;
      } else
        return;
    },
    expandProvider() {
      if (this.field.options.expandSqlId)
        return {
          providerId: this.field.options.expandSqlId,
          providerType: "SQL"
        };
    },
    params() {
      return this.getFormRef() && this.getFormRef().formParams ? this.getFormRef().formParams : this.formParams ? this.formParams : {};
    },
    parentId() {
      if (this.field.options.defaultFilterParent && !this.field.options.dependEnable && this.getFormRef() && this.getFormRef().formParentId) {
        const e = this.getFormRef().formIdParent ? this.getFormRef().formIdParent : null;
        if (this.fieldEditor && this.fieldEditor.getParentFormId && this.fieldEditor.getParentFormId === e)
          return this.getFormRef().formParentId;
      }
      return this.field.options.parentPath ? this.getFormRef() && this.getFormRef().formParams ? this.getFormRef().formParams && this.getFormRef().formParams[this.field.options.parentPath] ? this.getFormRef().formParams[this.field.options.parentPath] : "" : this.formParams && this.formParams[this.field.options.parentPath] ? this.formParams[this.field.options.parentPath] : "" : "";
    }
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  methods: {
    insertBefore(e, i) {
      try {
        if (this.field.options.onInsertBefore) {
          const o = P(this.field.options.onInsertBefore, ["row", "index"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    updateBefore(e, i) {
      try {
        if (this.field.options.onUpdateBefore) {
          const o = P(this.field.options.onUpdateBefore, ["row", "index"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    viewBefore(e, i) {
      try {
        if (this.field.options.onViewBefore) {
          const o = P(this.field.options.onViewBefore, ["row", "index"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    beforeSave(e) {
      try {
        if (this.field.options.onBeforeSave) {
          const t = P(this.field.options.onBeforeSave, ["row"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    afterDelete(e, i) {
      try {
        if (this.field.options.onAfterDelete) {
          const o = P(this.field.options.onAfterDelete, ["row", "index"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    allowDeleteFunc(e, i) {
      try {
        return this.field.options.allowDeleteFunc ? new Function("row", "index", ...z, this.field.options.allowDeleteFunc).call(this, e, i) : !0;
      } catch (t) {
        return this.alert(t.message, "warning"), !1;
      }
    },
    allowCloneFunc(e, i) {
      try {
        return this.field.options.allowCloneFunc ? new Function("row", "index", ...z, this.field.options.allowCloneFunc).call(this, e, i) : !0;
      } catch (t) {
        return this.alert(t.message, "warning"), !1;
      }
    },
    emitButtonBarClick(e, i) {
      try {
        if (e.onClick)
          try {
            const o = P(e.onClick, ["btnRow", "btnIndex"]).call(this, e, i);
            o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
          } catch (t) {
            this.alert(t.message, "warning");
          }
        else
          this.dispatch("SdFormRender", "onClick", [this]);
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    emitButtonRowClick(e, i, t, o) {
      try {
        if (e.onClick)
          try {
            const m = P(e.onClick, ["btnRow", "btnIndex", "dataRow", "dataIndex"]).call(this, e, i, t, o);
            m && typeof m.then == "function" && m.catch((s) => this.alert(s?.message || String(s), "warning"));
          } catch (n) {
            this.alert(n.message, "warning");
          }
        else
          this.dispatch("SdFormRender", "onClick", [this]);
      } catch (n) {
        this.alert(n.message, "warning");
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Tn(e, i, t, o, n, m) {
  const s = V, u = q, p = pe, g = le, w = qe, L = $;
  return l(), a(L, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    class: S(["datagrid-container"]),
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(w, {
        ref: "fieldEditor",
        key: e.field.id,
        "form-id": e.field.options.sqlId,
        "provider-type": e.field.options.providerType || "SQL",
        "data-provider": e.dataProvider,
        "state-key": !!e.field.options.rememberState,
        "state-scope": e.stateScope,
        params: e.params,
        "init-data": e.field.options.initData ? e.field.options.initData : {},
        readonly: e.field.options.readonly || e.field.options.disabled,
        resizable: !!e.field.options.resizable,
        "index-column": !!e.field.options.indexColumn,
        "action-enable": !!e.field.options.actionEnable,
        "title-enable": !!e.field.options.titleEnable,
        "action-label": e.field.options.actionLabel || "Actions",
        "action-width": e.field.options.actionWidth || void 0,
        "display-fields": e.field.options.displayFieldsSql || void 0,
        "search-fields": e.field.options.searchFieldSql || void 0,
        height: e.field.options.height || "auto",
        "max-height": e.field.options.maxHeight || "auto",
        "icon-name": e.field.options.iconName || "",
        "key-id": e.field.options.keyId || "_id",
        "row-key": e.field.options.rowKey || "dataid",
        "enable-ws": !!e.field.options.enableWs,
        "placeholder-search": e.field.options.placeholder || "Search...",
        "title-name": e.field.options.titleName || "",
        "limit-row": e.field.options.limitRow || 30,
        "infinite-scroll": !!e.field.options.infiniteScroll,
        "user-state": e.globalUserState,
        "build-state": e.builderStatus
      }, {
        actions: f(() => [
          e.field.options.buttonsBar && Object.keys(e.field.options.buttonsBar).length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.options.buttonsBar, (r, d) => (l(), c(y, null, [
            r.confirm ? (l(), a(p, {
              key: 0,
              title: r.confirmTitle,
              onConfirm: (k) => e.emitButtonBarClick(r, Number(d))
            }, {
              reference: f(() => [
                h(u, {
                  type: r.type ? r.type : "",
                  plain: !!r.plain,
                  circle: !!r.circle,
                  round: !!r.round,
                  dark: e.isDark,
                  disabled: !!e.field.options.disabled || !!r.disabled,
                  "loading-icon": "Eleme",
                  loading: r.loading,
                  color: r.color
                }, {
                  default: f(() => [
                    r.prefixIcon ? (l(), a(s, {
                      key: 0,
                      "icon-name": r.prefixIcon,
                      class: S(r.label ? "" : "ml-1")
                    }, null, 8, ["icon-name", "class"])) : b("", !0),
                    v("span", null, F(r.label), 1),
                    r.suffixIcon ? (l(), a(s, {
                      key: 1,
                      "icon-name": r.suffixIcon,
                      class: S(r.label ? "ml-1" : "")
                    }, null, 8, ["icon-name", "class"])) : b("", !0)
                  ]),
                  _: 2
                }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color"])
              ]),
              _: 2
            }, 1032, ["title", "onConfirm"])) : (l(), a(u, {
              key: 1,
              type: r.type ? r.type : "",
              plain: !!r.plain,
              circle: !!r.circle,
              round: !!r.round,
              dark: e.isDark,
              disabled: !!e.field.options.disabled || !!r.disabled,
              "loading-icon": "Eleme",
              loading: r.loading,
              color: r.color,
              tag: r.tag,
              href: r.tag && r.tag == "a" ? r.href : "",
              target: r.blank ? "_blank" : "_self",
              onClick: U((k) => e.emitButtonBarClick(r, Number(d)), ["prevent"])
            }, {
              default: f(() => [
                r.prefixIcon ? (l(), a(s, {
                  key: 0,
                  "icon-name": r.prefixIcon,
                  class: S(r.label ? "" : "ml-1")
                }, null, 8, ["icon-name", "class"])) : b("", !0),
                v("span", null, F(r.label), 1),
                r.suffixIcon ? (l(), a(s, {
                  key: 1,
                  "icon-name": r.suffixIcon,
                  class: S(r.label ? "ml-1" : "")
                }, null, 8, ["icon-name", "class"])) : b("", !0)
              ]),
              _: 2
            }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color", "tag", "href", "target", "onClick"]))
          ], 64))), 256)) : b("", !0)
        ]),
        actionBtnRow: f((r) => [
          h(g, {
            "report-list": e.field.options.reportList || [],
            size: "small",
            params: r.row,
            "user-state": e.globalUserState,
            "margin-enable": !0
          }, null, 8, ["report-list", "params", "user-state"]),
          e.field.options.buttonsRow && Object.keys(e.field.options.buttonsRow).length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.options.buttonsRow, (d, k) => (l(), c(y, null, [
            d.confirm ? (l(), a(p, {
              key: 0,
              title: d.confirmTitle,
              onConfirm: (B) => e.emitButtonRowClick(d, Number(k), r.row, r.index)
            }, {
              reference: f(() => [
                h(u, {
                  size: "small",
                  type: d.type ? d.type : "",
                  plain: !!d.plain,
                  circle: !!d.circle,
                  round: !!d.round,
                  dark: e.isDark,
                  disabled: !!e.field.options.disabled || !!d.disabled,
                  "loading-icon": "Eleme",
                  loading: d.loading,
                  color: d.color
                }, {
                  default: f(() => [
                    d.prefixIcon ? (l(), a(s, {
                      key: 0,
                      "icon-name": d.prefixIcon,
                      class: S(d.label ? "" : "ml-1")
                    }, null, 8, ["icon-name", "class"])) : b("", !0),
                    v("span", null, F(d.label), 1),
                    d.suffixIcon ? (l(), a(s, {
                      key: 1,
                      "icon-name": d.suffixIcon,
                      class: S(d.label ? "ml-1" : "")
                    }, null, 8, ["icon-name", "class"])) : b("", !0)
                  ]),
                  _: 2
                }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color"])
              ]),
              _: 2
            }, 1032, ["title", "onConfirm"])) : (l(), a(u, {
              key: 1,
              size: "small",
              type: d.type ? d.type : "",
              plain: !!d.plain,
              circle: !!d.circle,
              round: !!d.round,
              dark: e.isDark,
              disabled: !!e.field.options.disabled || !!d.disabled,
              "loading-icon": "Eleme",
              loading: d.loading,
              color: d.color,
              tag: d.tag,
              href: d.tag && d.tag == "a" ? d.href : "",
              target: d.blank ? "_blank" : "_self",
              onClick: U((B) => e.emitButtonRowClick(d, Number(k), r.row, r.index), ["prevent"])
            }, {
              default: f(() => [
                d.prefixIcon ? (l(), a(s, {
                  key: 0,
                  "icon-name": d.prefixIcon,
                  class: S(d.label ? "" : "ml-1")
                }, null, 8, ["icon-name", "class"])) : b("", !0),
                v("span", null, F(d.label), 1),
                d.suffixIcon ? (l(), a(s, {
                  key: 1,
                  "icon-name": d.suffixIcon,
                  class: S(d.label ? "ml-1" : "")
                }, null, 8, ["icon-name", "class"])) : b("", !0)
              ]),
              _: 2
            }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color", "tag", "href", "target", "onClick"]))
          ], 64))), 256)) : b("", !0)
        ]),
        _: 1
      }, 8, ["form-id", "provider-type", "data-provider", "state-key", "state-scope", "params", "init-data", "readonly", "resizable", "index-column", "action-enable", "title-enable", "action-label", "action-width", "display-fields", "search-fields", "height", "max-height", "icon-name", "key-id", "row-key", "enable-ws", "placeholder-search", "title-name", "limit-row", "infinite-scroll", "user-state", "build-state"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"]);
}
const Vn = /* @__PURE__ */ I(Dn, [["render", Tn], ["__scopeId", "data-v-c26b554a"]]), Un = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vn
}, Symbol.toStringTag, { value: "Module" })), Bn = C({
  name: "date-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M,
    SdDatePickerBE: ie
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    // เปิดโหมด พ.ศ.ไทย อัตโนมัติเมื่อ format มี token B (เช่น DD/MM/BBBB) · ค่ายังเก็บ ค.ศ.
    isBuddhist() {
      return /B{1,4}/.test(this.field.options.format || "");
    },
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null)
          return String(this.fieldModel);
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.field.options.initCurrent && this.field.options.valueFormat && !this.fieldValue && this.setFieldValue(fe().format(this.field.options.valueFormat)), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function zn(e, i, t, o, n, m) {
  const s = ie, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      v("div", {
        class: S([e.field.options.autoFullWidth ? "auto-full-width" : ""])
      }, [
        h(s, {
          ref: "fieldEditor",
          type: e.field.options.dateType,
          modelValue: e.fieldValue,
          "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
          buddhist: e.isBuddhist,
          readonly: e.field.options.readonly,
          disabled: e.field.options.disabled,
          size: e.widgetSize,
          clearable: e.field.options.clearable,
          editable: e.field.options.editable,
          format: e.field.options.format,
          "value-format": e.field.options.valueFormat,
          placeholder: e.field.options.placeholder || "Select Date",
          "disabled-date": (p) => e.field.options.disabledDate ? p.getTime() > Date.now() : !1,
          onFocus: e.handleFocusCustomEvent,
          onBlur: e.handleBlurCustomEvent,
          onChange: e.handleChangeEvent
        }, null, 8, ["type", "modelValue", "buddhist", "readonly", "disabled", "size", "clearable", "editable", "format", "value-format", "placeholder", "disabled-date", "onFocus", "onBlur", "onChange"])
      ], 2)
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const An = /* @__PURE__ */ I(Bn, [["render", zn], ["__scopeId", "data-v-0ae45f53"]]), Nn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: An
}, Symbol.toStringTag, { value: "Module" })), Wn = C({
  name: "date-panel-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M,
    SdDatePickerPanelBE: Ge
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    // เปิดโหมด พ.ศ.ไทย อัตโนมัติเมื่อ format มี token B (เช่น DD/MM/BBBB) · ค่ายังเก็บ ค.ศ.
    isBuddhist() {
      return /B{1,4}/.test(this.field.options.format || "");
    },
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null)
          return String(this.fieldModel);
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    }
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.field.options.initCurrent && this.field.options.valueFormat && !this.fieldValue && this.setFieldValue(fe().format(this.field.options.valueFormat)), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Hn(e, i, t, o, n, m) {
  const s = Ge, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        type: e.field.options.dateType,
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        buddhist: e.isBuddhist,
        disabled: e.field.options.disabled,
        border: e.field.options.border,
        "value-format": e.field.options.valueFormat,
        "disabled-date": (p) => e.field.options.disabledDate ? p.getTime() > Date.now() : !1,
        onChange: e.handleChangeEvent
      }, null, 8, ["type", "modelValue", "buddhist", "disabled", "border", "value-format", "disabled-date", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const qn = /* @__PURE__ */ I(Wn, [["render", Hn]]), Gn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qn
}, Symbol.toStringTag, { value: "Module" })), Jn = C({
  name: "date-range-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M,
    SdDatePickerBE: ie
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    // เปิดโหมด พ.ศ.ไทย อัตโนมัติเมื่อ format มี token B · ค่ายังเก็บ ค.ศ.
    isBuddhist() {
      return /B{1,4}/.test(this.field.options.format || "");
    },
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? typeof this.fieldModel == "string" && this.fieldModel !== "" ? this.string2Json(this.fieldModel) : typeof this.fieldModel == "object" && Object.values(this.fieldModel).length > 0 ? this.fieldModel : null : null;
      },
      set(e) {
        e != null ? typeof e == "string" && e !== "" ? this.setFieldValue(this.string2Json(e)) : typeof e == "object" && Object.values(e).length > 0 ? this.setFieldValue(e) : this.setFieldValue(null) : this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Kn(e, i, t, o, n, m) {
  const s = ie, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        type: e.field.options.dateType,
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        buddhist: e.isBuddhist,
        disabled: e.field.options.disabled,
        readonly: e.field.options.readonly,
        size: e.widgetSize,
        "range-separator": e.field.options.rangeSeparator,
        clearable: e.field.options.clearable,
        editable: e.field.options.editable,
        format: e.field.options.format,
        "value-format": e.field.options.valueFormat,
        "start-placeholder": e.field.options.startPlaceholder || "Start Date",
        "end-placeholder": e.field.options.endPlaceholder || "End Date",
        "disabled-date": (p) => e.field.options.disabledDate ? p.getTime() > Date.now() : !1,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onChange: e.handleChangeEvent
      }, null, 8, ["type", "modelValue", "buddhist", "disabled", "readonly", "size", "range-separator", "clearable", "editable", "format", "value-format", "start-placeholder", "end-placeholder", "disabled-date", "onFocus", "onBlur", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Zn = /* @__PURE__ */ I(Jn, [["render", Kn], ["__scopeId", "data-v-b67a42e2"]]), Qn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Zn
}, Symbol.toStringTag, { value: "Module" })), Yn = C({
  name: "divider-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Xn(e, i, t, o, n, m) {
  const s = ii, u = $;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(s, {
        ref: "fieldEditor",
        key: e.field.id,
        direction: "horizontal",
        "content-position": e.field.options.contentPosition
      }, {
        default: f(() => [
          E(F(e.field.options.label), 1)
        ]),
        _: 1
      }, 8, ["content-position"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const _n = /* @__PURE__ */ I(Yn, [["render", Xn]]), xn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _n
}, Symbol.toStringTag, { value: "Module" })), es = C({
  name: "dropdown-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  computed: {
    // widgetSize() {
    // 	return !!this.field.options.size && this.field.options.size != null ? this.field.options.size : this.formConfig.size;
    // },
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {
    handleCommand(e) {
      try {
        if (this.field.options.onCommand) {
          const t = P(this.field.options.onCommand, ["command"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function is(e, i, t, o, n, m) {
  const s = V, u = Z("arrow-down"), p = be, g = q, w = bt, L = ct, r = ht, d = $;
  return l(), a(d, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      v("div", {
        class: S({ paragraph: !!e.field.options.paragraph }),
        style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left", marginBottom: e.field.options.marginBottom + "px" })
      }, [
        (l(), a(r, {
          ref: "fieldEditor",
          key: e.field.id,
          onCommand: e.handleCommand,
          "max-height": e.field.options.maxHeight ? e.field.options.maxHeight : "",
          placement: e.field.options.placement ? e.field.options.placement : "bottom",
          trigger: e.field.options.triggerMenu ? e.field.options.triggerMenu : "hover",
          disabled: !!e.field.options.disabled
        }, {
          dropdown: f(() => [
            e.field.options.menuList && Object.keys(e.field.options.menuList).length > 0 ? (l(), a(L, { key: 0 }, {
              default: f(() => [
                (l(!0), c(y, null, T(e.field.options.menuList, (k, B) => (l(), a(w, {
                  command: k.command,
                  divided: k.divided,
                  disabled: k.disabled
                }, {
                  default: f(() => [
                    k.icon ? (l(), a(s, {
                      key: 0,
                      "icon-name": k.icon
                    }, null, 8, ["icon-name"])) : b("", !0),
                    E(" " + F(k.label), 1)
                  ]),
                  _: 2
                }, 1032, ["command", "divided", "disabled"]))), 256))
              ]),
              _: 1
            })) : b("", !0)
          ]),
          default: f(() => [
            e.field.options.menuType && e.field.options.menuType === "button" ? (l(), a(g, {
              key: 0,
              size: e.widgetSize,
              type: e.field.options.tagType && e.field.options.tagType !== "error" ? e.field.options.tagType : "info",
              plain: ""
            }, {
              default: f(() => [
                e.field.options.prefixIcon ? (l(), a(s, {
                  key: 0,
                  "icon-name": e.field.options.prefixIcon,
                  class: "mr-1"
                }, null, 8, ["icon-name"])) : b("", !0),
                E(" " + F(e.field.options.label || "Menu") + " ", 1),
                h(p, { class: "el-icon--right" }, {
                  default: f(() => [
                    h(u)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["size", "type"])) : (l(), c("span", {
              key: 1,
              class: "el-dropdown-link",
              style: j({ color: e.field.options.tagType ? `var(--el-color-${e.field.options.tagType})` : "var(--el-color-primary)" })
            }, [
              e.field.options.prefixIcon ? (l(), a(s, {
                key: 0,
                "icon-name": e.field.options.prefixIcon
              }, null, 8, ["icon-name"])) : b("", !0),
              E(" " + F(e.field.options.label || "Menu") + " ", 1),
              h(p, { class: "el-icon--right" }, {
                default: f(() => [
                  h(u)
                ]),
                _: 1
              })
            ], 4))
          ]),
          _: 1
        }, 8, ["onCommand", "max-height", "placement", "trigger", "disabled"]))
      ], 6)
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const ts = /* @__PURE__ */ I(es, [["render", is], ["__scopeId", "data-v-331ecc16"]]), os = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ts
}, Symbol.toStringTag, { value: "Module" })), ls = C({
  name: "dynamic-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
    // SdDynamicInput,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  data() {
    return {};
  },
  computed: {
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null)
          return this.fieldModel;
      },
      set(e) {
        e != null ? this.setFieldValue(e) : this.setFieldValue(null);
      }
    },
    inputType() {
      return "hidden";
    }
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {},
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function ns(e, i, t, o, n, m) {
  const s = He, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        size: e.widgetSize,
        readonly: e.field.options.disabled || e.field.options.readonly,
        "data-list": e.field.options.optionItems,
        "input-options": e.field.options.inputOptions,
        "input-type": e.field.options.inputType ? e.field.options.inputType : "",
        "user-state": e.globalUserState,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onChange: e.handleChangeEvent
      }, null, 8, ["modelValue", "size", "readonly", "data-list", "input-options", "input-type", "user-state", "onFocus", "onBlur", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const ss = /* @__PURE__ */ I(ls, [["render", ns]]), rs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ss
}, Symbol.toStringTag, { value: "Module" })), ds = C({
  name: "file-upload-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  data() {
    return {
      // isDisabled: this.field.options.disabled,
    };
  },
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState", "globalAuthToken", "globalSdForm"],
  computed: {
    previewList() {
      return this.fileList.map((e) => e.url);
    },
    realUploadURL() {
      let e = this.field.options.uploadURL;
      return e || (this.globalUserState ? this.globalUserState.host + "/v1/files/form-upload" : "");
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.initInputValue(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.initApi(), this.field.options.disabled, this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = R(null);
    return {
      fieldEditor: e,
      imageRef: i
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {
    initApi() {
      this.setUploadHeader("Authorization", `Bearer ${this.globalAuthToken}`), this.globalSdForm && this.globalSdForm._id && (this.setUploadData("formId", this.globalSdForm._id), this.setUploadData("category", "file"));
    },
    initInputValue() {
      !this.builderStatus && this.fileList && (this.uploadBtnHidden = this.fileList.length >= this.field.options.limit);
    },
    handleFileExceed() {
      let e = this.field.options.limit;
      this.alert(`Limit ${e} file can not exceed`, "warning");
    },
    beforeFileUpload(e) {
      let i = !1, t = e.name.substring(e.name.lastIndexOf(".") + 1);
      if (this.field.options && this.field.options.fileTypes) {
        let m = this.field.options.fileTypes;
        m.length > 0 && (i = m.some((s) => t.toLowerCase() === s.toLowerCase()));
      }
      if (!i)
        return this.alert(`File must be ${t} format!`, "warning"), !1;
      let o = !1, n = 5;
      return this.field.options && this.field.options.fileMaxSize && (n = this.field.options.fileMaxSize), o = e.size / 1024 / 1024 <= n, o ? (this.uploadData.key = e.name, this.handleOnBeforeUpload(e)) : (this.alert(`File size can not exceed ${n}MB`, "warning"), !1);
    },
    handleOnBeforeUpload(e) {
      try {
        if (this.field.options.onBeforeUpload) {
          let t = new Function("file", ...z, this.field.options.onBeforeUpload).call(this, e);
          return typeof t == "boolean" ? t : !0;
        }
        return !0;
      } catch (i) {
        return this.alert(i.message, "warning"), !1;
      }
    },
    updateFieldModelAndEmitDataChangeForUpload(e, i, t) {
      let o = D(this.fileList);
      i && i.name && i.url ? this.fileList.push({
        name: i.name,
        url: i.url
      }) : t && t.name && t.url ? this.fileList.push({
        name: t.name,
        url: t.url
      }) : this.fileList = D(e), this.syncUpdateFormModel(this.fileList), this.emitFieldDataChange(this.fileList, o);
    },
    handleFileUpload(e, i, t) {
      if (i.status === "success") {
        i.response && (i.url = e.filePath);
        let o = null;
        if (this.field.options.onUploadSuccess)
          try {
            o = new Function("result", "file", "fileList", ...z, this.field.options.onUploadSuccess).call(this, e, i, t);
          } catch (n) {
            this.alert(n.message, "error");
          }
        this.updateFieldModelAndEmitDataChangeForUpload(t, o, e), o && o.name ? i.name = o.name : i.name = i.name || e.name || e.fileName || e.filename, o && o.url ? i.url = o.url : i.url = i.url || e.url, this.fileList = D(t), this.uploadBtnHidden = t.length >= this.field.options.limit;
      }
    },
    updateFieldModelAndEmitDataChangeForRemove(e) {
      let i = D(this.fileList), t = -1;
      this.fileListBeforeRemove.map((o, n) => {
        o.name === e.name && (o.url === e.url || o.uid && o.uid === e.uid) && (t = n);
      }), t > -1 && this.fileList.splice(t, 1), this.syncUpdateFormModel(this.fileList), this.emitFieldDataChange(this.fileList, i);
    },
    removeUploadFile(e) {
      const i = e.response;
      te.confirm("Are you sure you want to delete this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        ce.delete(`${this.globalUserState.host}/v1/files/remove-one`, {
          data: i,
          headers: {
            Authorization: `Bearer ${this.globalAuthToken}`
          }
        }).then((t) => {
          this.fileList.splice(this.fileList.indexOf(e), 1), this.updateFieldModelAndEmitDataChangeForRemove(e);
          let o = D(this.fileList);
          this.uploadBtnHidden = o.length >= this.field.options.limit;
          try {
            if (this.field.options.onFileRemove) {
              const m = P(this.field.options.onFileRemove, ["file", "fileList"]).call(this, e, o);
              m && typeof m.then == "function" && m.catch((s) => this.alert(s?.message || String(s), "warning"));
            }
          } catch (n) {
            this.alert(n.message, "warning");
          }
        }).catch((t) => {
          console.log(t);
        });
      }).catch(() => {
      });
    },
    handleUploadError(e, i, t) {
      try {
        if (this.field.options.onUploadError) {
          const n = P(this.field.options.onUploadError, ["error", "file", "fileList"]).call(this, e, i, t);
          n && typeof n.then == "function" && n.catch((m) => this.alert(m?.message || String(m), "warning"));
        } else
          this.alert(e, "warning");
      } catch (o) {
        this.alert(o.message, "warning");
      }
    }
  }
}), as = { class: "upload-file-list" }, fs = ["title"], us = ["href"], ps = {
  class: "el-icon-download file-action",
  title: "Download"
}, ms = ["onClick"], hs = {
  key: 0,
  class: "el-upload__tip"
};
function cs(e, i, t, o, n, m) {
  const s = q, u = Z("Document"), p = be, g = ii, w = V, L = Z("Delete"), r = Pe, d = M;
  return l(), a(d, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(r, {
        style: { width: "100%" },
        class: S(["fileUploadInput", { hideUploadDiv: e.uploadBtnHidden }]),
        ref: "fieldEditor",
        disabled: e.field.options.disabled || !!e.builderStatus,
        action: e.realUploadURL,
        data: e.uploadData,
        headers: e.uploadHeaders,
        "show-file-list": e.field.options.showFileList,
        "with-credentials": e.field.options.withCredentials,
        multiple: e.field.options.multipleSelect,
        "file-list": e.fileList,
        "onUpdate:fileList": i[0] || (i[0] = (k) => e.fileList = k),
        limit: e.field.options.limit,
        "on-exceed": e.handleFileExceed,
        "before-upload": e.beforeFileUpload,
        "on-success": e.handleFileUpload,
        "on-error": e.handleUploadError
      }, {
        file: f(({ file: k }) => [
          v("div", as, [
            v("span", {
              class: "upload-file-name",
              title: k.name
            }, [
              h(p, null, {
                default: f(() => [
                  h(u)
                ]),
                _: 1
              }),
              E(" " + F(k.name), 1)
            ], 8, fs),
            h(g, { direction: "vertical" }),
            v("a", {
              href: k.url,
              download: "",
              target: "_blank"
            }, [
              v("span", ps, [
                h(w, { "icon-name": "addon-download" })
              ])
            ], 8, us),
            e.field.options.disabled ? b("", !0) : (l(), c(y, { key: 0 }, [
              h(g, { direction: "vertical" }),
              v("span", {
                class: "file-action",
                title: "Remove",
                onClick: (B) => e.removeUploadFile(k)
              }, [
                h(p, null, {
                  default: f(() => [
                    h(L)
                  ]),
                  _: 1
                })
              ], 8, ms)
            ], 64))
          ])
        ]),
        tip: f(() => [
          e.field.options.uploadTip ? (l(), c("div", hs, F(e.field.options.uploadTip), 1)) : b("", !0)
        ]),
        default: f(() => [
          h(s, {
            type: "success",
            plain: "",
            icon: "Plus"
          }, {
            default: f(() => [...i[1] || (i[1] = [
              E("Click to upload", -1)
            ])]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class", "disabled", "action", "data", "headers", "show-file-list", "with-credentials", "multiple", "file-list", "limit", "on-exceed", "before-upload", "on-success", "on-error"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const bs = /* @__PURE__ */ I(ds, [["render", cs], ["__scopeId", "data-v-d7e0942e"]]), gs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bs
}, Symbol.toStringTag, { value: "Module" })), Fs = C({
  name: "group-list-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  data() {
    return {
      loading: !0,
      categoryItems: [],
      // ค่าของ param ที่ where ใช้ ณ ตอนที่ดึงรายการมาล่าสุด — ต่างจากปัจจุบันเมื่อไหร่ = ต้องดึงใหม่
      loadedKey: null
    };
  },
  computed: {
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null)
          return String(this.fieldModel);
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    },
    groupField() {
      return this.field.options.groupField ? [this.field.options.groupField] : [];
    },
    params() {
      const i = { ...this.getFormRef() && this.getFormRef().formParams ? this.getFormRef().formParams : this.formParams ? this.formParams : {} };
      if (this.subFormItemFlag && this.subFormName) {
        const m = this.formModel[this.subFormName], s = m ? m[this.subFormRowIndex] : null;
        s && Object.assign(i, s);
      }
      const t = /:([\w.]+)/g, o = String(this.field.options.where || "");
      let n = t.exec(o);
      for (; n !== null; ) {
        const m = (n[1] || "").split(".");
        if (m[0]) {
          const u = m.reduce((p, g) => p?.[g], i);
          if (u == null) {
            let p = i;
            for (let g = 0; g < m.length - 1; g++) {
              const w = m[g];
              (p[w] === null || p[w] === void 0 || typeof p[w] != "object") && (p[w] = {}), p = p[w];
            }
            p[m[m.length - 1]] = "";
          }
        }
        n = t.exec(o);
      }
      return i;
    },
    // ลายเซ็นของค่าที่ where ใช้กรอง — ใช้ตัดสินว่ารายการที่ cache ไว้ยังใช้ได้อยู่ไหม
    //   where ว่าง = ไม่มีอะไรให้เปลี่ยน → คืน '' คงที่ = โหลดครั้งเดียวเหมือนเดิม
    whereKey() {
      const e = String(this.field.options.where || "");
      if (!e) return "";
      const i = /:([\w.]+)/g, t = [];
      let o = i.exec(e);
      for (; o !== null; ) {
        const m = (o[1] || "").split(".").reduce((s, u) => s?.[u], this.params);
        t.push(String(m)), o = i.exec(e);
      }
      return t.join("|");
    }
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  methods: {
    async querySearchCategory(e, i) {
      const t = this.whereKey;
      if ((this.loading || this.loadedKey !== t) && this.globalUserState && this.groupField.length > 0) {
        const m = {
          providerId: this.field.options.formId || "",
          providerType: "FORM",
          options: {
            select: this.groupField,
            groupBy: this.groupField,
            where: this.field.options.where ? this.field.options.where : "",
            orderBy: this.field.options.orderBy || void 0
          },
          params: this.params
        }, s = this.field.options.groupField ? this.field.options.groupField : "_id";
        await this.globalUserState.crudGetAll(
          { sdProvider: m, totalEnable: !1 },
          (u) => {
            this.categoryItems = u.data.map((p) => ({ value: p[s], label: p[s] })), this.loading = !1, this.loadedKey = t;
          },
          () => {
            this.loading = !1, this.loadedKey = t, this.categoryItems = [];
          }
        );
      }
      const o = new At(this.categoryItems, {
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
      }), n = e ? o.search("'" + e).map((m) => m.item) : this.categoryItems;
      i(n);
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function ys(e, i, t, o, n, m) {
  const s = gt, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        "fetch-suggestions": e.querySearchCategory,
        clearable: e.field.options.clearable,
        disabled: e.field.options.disabled,
        readonly: e.field.options.readonly,
        placeholder: e.field.options.placeholder,
        size: e.widgetSize,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onInput: e.handleInputCustomEvent,
        onSelect: e.handleChangeEvent,
        onChange: e.handleChangeEvent
      }, {
        loading: f(() => [...i[1] || (i[1] = [
          v("svg", {
            class: "circular",
            viewBox: "0 0 50 50"
          }, [
            v("circle", {
              class: "path",
              cx: "25",
              cy: "25",
              r: "20",
              fill: "none"
            })
          ], -1)
        ])]),
        _: 1
      }, 8, ["modelValue", "fetch-suggestions", "clearable", "disabled", "readonly", "placeholder", "size", "onFocus", "onBlur", "onInput", "onSelect", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const vs = /* @__PURE__ */ I(Fs, [["render", ys], ["__scopeId", "data-v-fc626291"]]), ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vs
}, Symbol.toStringTag, { value: "Module" })), Cs = C({
  name: "html-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
    // SdHtmlEditor,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? String(this.fieldModel) : "";
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  data() {
    return {
      isDark: H()
    };
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Ss(e, i, t, o, n, m) {
  const s = we, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        mode: e.field.options.mode,
        size: e.widgetSize,
        height: e.field.options.minHeight,
        readonly: e.field.options.disabled || e.field.options.readonly,
        placeholder: e.field.options.placeholder,
        tooltip: e.field.options.tooltip,
        "char-count-max": e.field.options.charCountMax,
        onChange: e.handleChangeEvent,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        "user-state": e.globalUserState
      }, null, 8, ["modelValue", "mode", "size", "height", "readonly", "placeholder", "tooltip", "char-count-max", "onChange", "onFocus", "onBlur", "user-state"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Is = /* @__PURE__ */ I(Cs, [["render", Ss]]), Ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Is
}, Symbol.toStringTag, { value: "Module" })), Rs = C({
  name: "html-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
    // SdHtmlEditor,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  beforeCreate() {
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function ks(e, i, t, o, n, m) {
  const s = we, u = $;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(s, {
        ref: "fieldEditor",
        key: e.field.id,
        modelValue: e.field.options.content,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.field.options.content = p),
        mode: "mini",
        readonly: !0,
        "user-state": e.globalUserState
      }, null, 8, ["modelValue", "user-state"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Os = /* @__PURE__ */ I(Rs, [["render", ks]]), Ps = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Os
}, Symbol.toStringTag, { value: "Module" })), $s = C({
  name: "icon-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
    // SdIcon,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  data() {
    return {
      dataObject: {}
    };
  },
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? this.field.options.multiple && this.field.options.multiple ? typeof this.fieldModel == "string" && this.fieldModel !== "" ? this.string2Json(this.fieldModel) : typeof this.fieldModel == "object" && Object.keys(this.fieldModel).length > 0 ? this.fieldModel : [] : this.fieldModel : null;
      },
      set(e) {
        e != null ? this.field.options.multiple && this.field.options.multiple ? typeof e == "string" && e !== "" ? this.setFieldValue(this.string2Json(e)) : typeof e == "object" && Object.keys(e).length > 0 ? this.setFieldValue(e) : this.setFieldValue([]) : this.setFieldValue(e) : this.setFieldValue(null);
      }
    },
    allowDefaultFirstOption() {
      return !!this.field.options.filterable && !!this.field.options.allowCreate;
    },
    getDateObject() {
      return this.dataObjectUpdate();
    }
  },
  beforeCreate() {
  },
  created() {
    this.initOptionItems(), this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  async mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  watch: {
    getDateObject: {
      deep: !1,
      handler(e) {
        let i = [];
        if (this.field.options.sourcePath)
          for (const t in e) {
            const o = e[t], n = oe(o, this.field.options.sourcePath);
            if (n && typeof n == "object")
              for (const m in n) {
                let s = n[m];
                this.field.options.prefixProp && (s.prefixProp = o[this.field.options.prefixProp] ? o[this.field.options.prefixProp] : ""), this.field.options.groupProp && (s.groupProp = o[this.field.options.groupProp] ? o[this.field.options.groupProp] : ""), i.push(s);
              }
          }
        this.onItemListChange(i), e && Object.keys(e).length > 0 || this.onItemListChange([]);
      }
    }
    // 'getFormRef().formVar.sql_join': {
    // 	deep: true,
    // 	handler(val) {
    // 		console.log('val', val);
    // 		this.dataObjectUpdate();
    // 	},
    // },
  },
  methods: {
    onItemListChange(e) {
      try {
        if (this.field.options.onItemListChange) {
          const t = P(this.field.options.onItemListChange, ["itemList"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    dataObjectUpdate() {
      let e = this.field.options && this.field.options.sourceField ? this.field.options.sourceField : [];
      if (this.field.options && this.field.options.sourceDynamic && this.getFormRef() && this.getFormRef().formVar && this.getFormRef().formVar[this.field.options.sourceDynamic]) {
        const t = this.getFormRef().formVar[this.field.options.sourceDynamic];
        e.push(...t);
      }
      let i = {};
      if (e && e.length > 0) {
        for (const t of e)
          if (this.refField && this.refField(t) && this.refField(t).fieldEditor) {
            const o = this.refField(t).fieldEditor, n = o.selectInput.itemSelected && Object.keys(o.selectInput.itemSelected).length > 0 ? o.selectInput.itemSelected : null;
            n && (i[t] = n);
          }
      }
      return i;
    },
    getValueSelect(e) {
      return e && e.value ? e.value : e;
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Es(e, i, t, o, n, m) {
  const s = Ui, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        class: "full-width-input",
        "allow-create": !!e.field.options.allowCreate,
        disabled: e.field.options.disabled,
        placeholder: e.field.options.placeholder || "Search by icon name...",
        size: e.widgetSize,
        "el-icons": !!e.field.options.elIcons,
        onClear: e.handleOnClear,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onChange: e.handleChangeEvent
      }, null, 8, ["modelValue", "allow-create", "disabled", "placeholder", "size", "el-icons", "onClear", "onFocus", "onBlur", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Ls = /* @__PURE__ */ I($s, [["render", Es], ["__scopeId", "data-v-8e741c15"]]), js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ls
}, Symbol.toStringTag, { value: "Module" })), Ds = C({
  name: "image-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {},
  beforeUnmount() {
    this.unregisterFromRefList();
  }
}), Ts = { class: "image-slot" };
function Vs(e, i, t, o, n, m) {
  const s = V, u = ti, p = $;
  return l(), a(p, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(u, {
        ref: "fieldEditor",
        key: e.field.id,
        alt: e.field.options.alt ? e.field.options.alt : void 0,
        fit: e.field.options.fit,
        src: e.field.options.src,
        "close-on-press-escape": !!e.field.options.closeOnPressEscape,
        infinite: !!e.field.options.infinite,
        "initial-index": e.field.options.initialIndex,
        lazy: !!e.field.options.lazy,
        loading: e.field.options.loading,
        "max-scale": e.field.options.maxScale,
        "min-scale": e.field.options.minScale,
        "preview-src-list": e.field.options.previewSrcList,
        "preview-teleported": e.field.options.alt,
        "z-index": e.field.options.zIndex,
        "zoom-rate": e.field.options.zoomRate,
        style: j(`width: ${e.field.options.width || 100}px; height: ${e.field.options.heightImg || 100}px;`)
      }, {
        placeholder: f(() => [...i[0] || (i[0] = [
          v("div", { class: "image-slot image-load" }, [
            E("Loading"),
            v("span", { class: "dot" }, "...")
          ], -1)
        ])]),
        error: f(() => [
          v("div", Ts, [
            h(s, { "icon-name": "image-ui" })
          ])
        ]),
        _: 1
      }, 8, ["alt", "fit", "src", "close-on-press-escape", "infinite", "initial-index", "lazy", "loading", "max-scale", "min-scale", "preview-src-list", "preview-teleported", "z-index", "zoom-rate", "style"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"]);
}
const Us = /* @__PURE__ */ I(Ds, [["render", Vs], ["__scopeId", "data-v-836345dd"]]), Bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Us
}, Symbol.toStringTag, { value: "Module" })), zs = C({
  name: "json-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M,
    JsonEditorVue: Wt
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? typeof this.fieldModel == "string" && this.fieldModel !== "" ? this.string2Json(this.fieldModel) : typeof this.fieldModel == "object" ? this.fieldModel : this.field.options.valueType && this.field.options.valueType === "object" ? {} : [] : this.field.options.valueType && this.field.options.valueType === "object" ? {} : [];
      },
      set(e) {
        e != null ? typeof e == "string" && e !== "" ? this.setFieldValue(this.string2Json(e)) : typeof e == "object" ? this.setFieldValue(e) : this.field.options.valueType && this.field.options.valueType === "object" ? this.setFieldValue({}) : this.setFieldValue([]) : this.field.options.valueType && this.field.options.valueType === "object" ? this.setFieldValue({}) : this.setFieldValue([]);
      }
    },
    mode() {
      return Nt.tree;
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  data() {
    return {
      isDark: H()
    };
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {
    handleChange(e) {
      e && e.json ? this.handleChangeEvent(e.json) : this.handleChangeEvent(void 0);
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function As(e, i, t, o, n, m) {
  const s = Z("JsonEditorVue"), u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        "main-menu-bar": !1,
        mode: e.mode,
        style: { width: "100%" },
        "navigation-bar": !1,
        size: e.widgetSize,
        class: S(e.isDark ? "jse-theme-dark" : ""),
        "read-only": e.field.options.disabled,
        onChange: e.handleChange
      }, null, 8, ["modelValue", "mode", "size", "class", "read-only", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Ns = /* @__PURE__ */ I(zs, [["render", As]]), Ws = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ns
}, Symbol.toStringTag, { value: "Module" })), Hs = C({
  name: "liff-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $,
    SdLiff: Je
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  setup() {
    const e = R(null), i = R(null);
    return { fieldEditor: e, sdLiffRef: i };
  },
  methods: {
    // รัน user JS ของ event ผ่าน sandbox (pattern เดียวกับ scan-code-ui / smart-card-ui)
    runUserEvent(e, i, t) {
      if (e)
        try {
          const n = P(e, i).call(this, ...t);
          n && typeof n.then == "function" && n.catch((m) => this.alert(m?.message || String(m), "warning"));
        } catch (o) {
          this.alert(o.message, "warning");
        }
    },
    // === passive emits → user event ===
    handleReady() {
      this.runUserEvent(this.field.options.onReady, [], []);
    },
    handleProfile(e) {
      this.runUserEvent(this.field.options.onProfile, ["profile"], [e]);
    },
    handleToken(e) {
      this.runUserEvent(this.field.options.onToken, ["idToken"], [e]);
    },
    handleError(e) {
      this.runUserEvent(this.field.options.onError, ["message"], [e]);
    },
    // === actions: forward ไป SdLiff ให้ designer เรียกผ่าน this.refField('ชื่อ').xxx() ===
    login() {
      return this.sdLiffRef?.login();
    },
    logout() {
      this.sdLiffRef?.logout();
    },
    getIdToken() {
      return this.sdLiffRef?.getIdToken() ?? null;
    },
    scan() {
      return this.sdLiffRef ? this.sdLiffRef.scan() : Promise.resolve(null);
    },
    share(e) {
      return this.sdLiffRef ? this.sdLiffRef.share(e) : Promise.resolve(!1);
    },
    sendMessages(e) {
      return this.sdLiffRef ? this.sdLiffRef.sendMessages(e) : Promise.resolve();
    }
  }
});
function qs(e, i, t, o, n, m) {
  const s = V, u = ue, p = Je, g = $;
  return l(), a(g, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), c("div", {
        ref: "fieldEditor",
        key: e.field.id
      }, [
        e.builderStatus ? (l(), a(u, {
          key: 0,
          type: "info",
          effect: "plain",
          "disable-transitions": ""
        }, {
          default: f(() => [
            h(s, {
              "icon-name": "liff-ui",
              class: "mr-1"
            }),
            E(" LINE LIFF" + F(e.field.options.name ? ": " + e.field.options.name : ""), 1)
          ]),
          _: 1
        })) : (l(), a(p, {
          key: 1,
          ref: "sdLiffRef",
          "liff-id": e.field.options.liffId,
          "auto-login": e.field.options.autoLogin,
          indicator: e.field.options.indicator,
          "indicator-position": e.field.options.indicatorCorner,
          onReady: e.handleReady,
          onProfile: e.handleProfile,
          onToken: e.handleToken,
          onError: e.handleError
        }, null, 8, ["liff-id", "auto-login", "indicator", "indicator-position", "onReady", "onProfile", "onToken", "onError"]))
      ]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Gs = /* @__PURE__ */ I(Hs, [["render", qs]]), Js = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Gs
}, Symbol.toStringTag, { value: "Module" })), Ks = C({
  name: "link-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Zs(e, i, t, o, n, m) {
  const s = V, u = ne, p = Ft, g = $;
  return l(), a(g, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), c("div", {
        ref: "fieldEditor",
        key: e.field.id,
        class: S({ paragraph: !!e.field.options.paragraph }),
        style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left", marginBottom: e.field.options.marginBottom + "px" })
      }, [
        h(p, {
          underline: e.field.options.underline,
          type: e.field.options.linkType,
          href: e.field.options.href,
          target: e.field.options.target,
          style: j({ fontSize: e.field.options.fontSize + "px" }),
          class: S({ bold: !!e.field.options.bold, italic: !!e.field.options.italic })
        }, {
          default: f(() => [
            e.field.options.labelIconClass && e.field.options.labelIconPosition === "front" ? (l(), c(y, { key: 0 }, [
              e.field.options.labelTooltip ? (l(), a(u, {
                key: 0,
                content: e.field.options.labelTooltip,
                effect: "dark"
              }, {
                default: f(() => [
                  h(s, {
                    "icon-name": e.field.options.labelIconClass
                  }, null, 8, ["icon-name"])
                ]),
                _: 1
              }, 8, ["content"])) : (l(), a(s, {
                key: 1,
                "icon-name": e.field.options.labelIconClass
              }, null, 8, ["icon-name"]))
            ], 64)) : b("", !0),
            E(" " + F(e.field.options.content) + " ", 1),
            e.field.options.labelIconClass && e.field.options.labelIconPosition === "rear" ? (l(), c(y, { key: 1 }, [
              e.field.options.labelTooltip ? (l(), a(u, {
                key: 0,
                content: e.field.options.labelTooltip,
                effect: "dark"
              }, {
                default: f(() => [
                  h(s, {
                    "icon-name": e.field.options.labelIconClass
                  }, null, 8, ["icon-name"])
                ]),
                _: 1
              }, 8, ["content"])) : (l(), a(s, {
                key: 1,
                "icon-name": e.field.options.labelIconClass
              }, null, 8, ["icon-name"]))
            ], 64)) : b("", !0)
          ]),
          _: 1
        }, 8, ["underline", "type", "href", "target", "style", "class"])
      ], 6))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Qs = /* @__PURE__ */ I(Ks, [["render", Zs], ["__scopeId", "data-v-f3464b8f"]]), Ys = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qs
}, Symbol.toStringTag, { value: "Module" })), Xs = C({
  name: "list-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
    // SdUiListView,
    // SdReport,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  beforeCreate() {
  },
  data() {
    return {
      isDark: H()
    };
  },
  computed: {
    dataProvider() {
      if ((this.field.options.where || this.field.options.orderBy) && this.field.options.formId) {
        const e = {
          providerId: this.field.options.formId,
          providerType: "FORM"
        };
        return e.options = {}, this.field.options.where && (e.options.where = this.field.options.where), this.field.options.orderBy && (e.options.orderBy = this.field.options.orderBy), e;
      } else
        return;
    },
    showWhenParent() {
      if (this.field.options.showWhenParent && !this.builderStatus) {
        const e = this.getFormRef();
        let i = "";
        return e && e.formParams ? i = this.getObjectByPath(e.formParams, this.field.options.parentPath) || "" : i = this.getObjectByPath(this.formParams, this.field.options.parentPath) || "", !!i;
      } else
        return !0;
    }
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  methods: {
    insertBefore(e, i) {
      try {
        if (this.field.options.onInsertBefore) {
          const o = P(this.field.options.onInsertBefore, ["row", "index"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    updateBefore(e, i) {
      try {
        if (this.field.options.onUpdateBefore) {
          const o = P(this.field.options.onUpdateBefore, ["row", "index"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    viewBefore(e, i) {
      try {
        if (this.field.options.onViewBefore) {
          const o = P(this.field.options.onViewBefore, ["row", "index"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    beforeSave(e) {
      try {
        if (this.field.options.onBeforeSave) {
          const t = P(this.field.options.onBeforeSave, ["row"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    afterDelete(e, i) {
      try {
        if (this.field.options.onAfterDelete) {
          const o = P(this.field.options.onAfterDelete, ["row", "index"]).call(this, e, i);
          o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
        }
      } catch (t) {
        this.alert(t.message, "warning");
      }
    },
    allowDeleteFunc(e, i) {
      try {
        return this.field.options.allowDeleteFunc ? new Function("row", "index", ...z, this.field.options.allowDeleteFunc).call(this, e, i) : !0;
      } catch (t) {
        return this.alert(t.message, "warning"), !1;
      }
    },
    clickEvent(e, i) {
      try {
        return this.field.options.clickEvent ? new Function("row", "index", ...z, this.field.options.clickEvent).call(this, e, i) : !0;
      } catch (t) {
        return this.alert(t.message, "warning"), !1;
      }
    },
    selectEvent(e, i) {
      try {
        return this.field.options.onselect ? new Function("row", "index", ...z, this.field.options.onselect).call(this, e, i) : !0;
      } catch (t) {
        return this.alert(t.message, "warning"), !1;
      }
    },
    unselectEvent(e, i) {
      try {
        return this.field.options.onunselect ? new Function("row", "index", ...z, this.field.options.onunselect).call(this, e, i) : !0;
      } catch (t) {
        return this.alert(t.message, "warning"), !1;
      }
    },
    emitButtonRowClick(e, i, t, o) {
      try {
        if (e.onClick)
          try {
            const m = P(e.onClick, ["btnRow", "btnIndex", "dataRow", "dataIndex"]).call(this, e, i, t, o);
            m && typeof m.then == "function" && m.catch((s) => this.alert(s?.message || String(s), "warning"));
          } catch (n) {
            this.alert(n.message, "warning");
          }
        else
          this.dispatch("SdFormRender", "onClick", [this]);
      } catch (n) {
        this.alert(n.message, "warning");
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function _s(e, i, t, o, n, m) {
  const s = le, u = V, p = q, g = pe, w = Bi, L = $;
  return e.showWhenParent ? (l(), a(L, {
    key: 0,
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    class: S(["datagrid-container"]),
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(w, {
        ref: "fieldEditor",
        key: e.field.id,
        "form-id": e.field.options.formId,
        "provider-type": e.field.options.providerType || "FORM",
        "data-provider": e.dataProvider,
        "parent-id": e.parentId,
        params: e.params,
        "init-data": e.field.options.initData ? e.field.options.initData : {},
        column: e.field.options.listColumn ? e.field.options.listColumn : 4,
        "search-fields": e.field.options.searchField && Object.keys(e.field.options.searchField).length > 0 ? e.field.options.searchField : void 0,
        "icon-field": e.field.options.iconField || void 0,
        "title-field": e.field.options.titleField || void 0,
        "status-field": e.field.options.statusField || void 0,
        "color-field": e.field.options.colorField || void 0,
        "group-field": e.field.options.groupField || void 0,
        "title-enable": !!e.field.options.titleEnable,
        "icon-name": e.field.options.iconName || "",
        "subform-width": e.field.options.subformWidth || 600,
        "title-name": e.field.options.titleName || "",
        "action-enable": !!e.field.options.actionEnable,
        "add-btn-enable": !!e.field.options.addBtnEnable,
        "update-btn-enable": !!e.field.options.updateBtnEnable,
        "del-btn-enable": !!e.field.options.delBtnEnable,
        "reload-btn-enable": !!e.field.options.reloadBtnEnable,
        "view-btn-enable": !!e.field.options.viewBtnEnable,
        "detail-content": e.field.options.detailContent || void 0,
        "detail-max-row": e.field.options.detailMaxRow || void 0,
        "disable-no-more": !!e.field.options.disableNoMore,
        height: e.field.options.height || void 0,
        "icon-wigth": e.field.options.iconWigth || void 0,
        "limit-row": e.field.options.limitRow || 30,
        "list-type": e.field.options.listType || "listview",
        "no-more-label": e.field.options.noMoreLabel || void 0,
        "scroll-distance": e.field.options.scrollDistance || void 0,
        "search-placeholder": e.field.options.searchPlaceholder || void 0,
        "status-content": e.field.options.statusContent || void 0,
        "title-content": e.field.options.titleContent || void 0,
        "total-enable": !!e.field.options.totalEnable,
        "custom-value": e.field.options.customValue || void 0,
        "allow-delete-func": e.field.options.allowDeleteFunc ? e.allowDeleteFunc : void 0,
        "click-event": e.field.options.clickEvent ? e.clickEvent : void 0,
        "select-event": e.field.options.onselect ? e.selectEvent : void 0,
        "unselect-event": e.field.options.onunselect ? e.unselectEvent : void 0,
        "enable-ws": !!e.field.options.enableWs,
        "ws-refresh": !!e.field.options.wsRefresh,
        "parent-path": e.parentPath,
        "insert-before": e.insertBefore,
        "update-before": e.updateBefore,
        "view-before": e.viewBefore,
        "before-save": e.beforeSave,
        "after-delete": e.afterDelete,
        "user-state": e.globalUserState,
        "build-state": e.builderStatus
      }, {
        actionBtnRow: f((r) => [
          h(s, {
            "report-list": e.field.options.reportList || [],
            size: "small",
            params: r.row,
            "user-state": e.globalUserState,
            "margin-enable": !0
          }, null, 8, ["report-list", "params", "user-state"]),
          e.field.options.buttonsRow && Object.keys(e.field.options.buttonsRow).length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.options.buttonsRow, (d, k) => (l(), c(y, null, [
            d.confirm ? (l(), a(g, {
              key: 0,
              title: d.confirmTitle,
              onConfirm: (B) => e.emitButtonRowClick(d, +k, r.row, r.index)
            }, {
              reference: f(() => [
                h(p, {
                  size: "small",
                  type: d.type ? d.type : "",
                  plain: !!d.plain,
                  circle: !!d.circle,
                  round: !!d.round,
                  dark: e.isDark,
                  disabled: !!e.field.options.disabled || !!d.disabled,
                  "loading-icon": "Eleme",
                  loading: d.loading,
                  color: d.color
                }, {
                  default: f(() => [
                    d.prefixIcon ? (l(), a(u, {
                      key: 0,
                      "icon-name": d.prefixIcon,
                      class: S(d.label ? "" : "ml-1")
                    }, null, 8, ["icon-name", "class"])) : b("", !0),
                    v("span", null, F(d.label), 1),
                    d.suffixIcon ? (l(), a(u, {
                      key: 1,
                      "icon-name": d.suffixIcon,
                      class: S(d.label ? "ml-1" : "")
                    }, null, 8, ["icon-name", "class"])) : b("", !0)
                  ]),
                  _: 2
                }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color"])
              ]),
              _: 2
            }, 1032, ["title", "onConfirm"])) : (l(), a(p, {
              key: 1,
              size: "small",
              type: d.type ? d.type : "",
              plain: !!d.plain,
              circle: !!d.circle,
              round: !!d.round,
              dark: e.isDark,
              disabled: !!e.field.options.disabled || !!d.disabled,
              "loading-icon": "Eleme",
              loading: d.loading,
              color: d.color,
              tag: d.tag,
              href: d.tag && d.tag == "a" ? d.href : "",
              target: d.blank ? "_blank" : "_self",
              onClick: U((B) => e.emitButtonRowClick(d, +k, r.row, r.index), ["prevent"])
            }, {
              default: f(() => [
                d.prefixIcon ? (l(), a(u, {
                  key: 0,
                  "icon-name": d.prefixIcon,
                  class: S(d.label ? "" : "ml-1")
                }, null, 8, ["icon-name", "class"])) : b("", !0),
                v("span", null, F(d.label), 1),
                d.suffixIcon ? (l(), a(u, {
                  key: 1,
                  "icon-name": d.suffixIcon,
                  class: S(d.label ? "ml-1" : "")
                }, null, 8, ["icon-name", "class"])) : b("", !0)
              ]),
              _: 2
            }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color", "tag", "href", "target", "onClick"]))
          ], 64))), 256)) : b("", !0)
        ]),
        _: 1
      }, 8, ["form-id", "provider-type", "data-provider", "parent-id", "params", "init-data", "column", "search-fields", "icon-field", "title-field", "status-field", "color-field", "group-field", "title-enable", "icon-name", "subform-width", "title-name", "action-enable", "add-btn-enable", "update-btn-enable", "del-btn-enable", "reload-btn-enable", "view-btn-enable", "detail-content", "detail-max-row", "disable-no-more", "height", "icon-wigth", "limit-row", "list-type", "no-more-label", "scroll-distance", "search-placeholder", "status-content", "title-content", "total-enable", "custom-value", "allow-delete-func", "click-event", "select-event", "unselect-event", "enable-ws", "ws-refresh", "parent-path", "insert-before", "update-before", "view-before", "before-save", "after-delete", "user-state", "build-state"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"])) : b("", !0);
}
const xs = /* @__PURE__ */ I(Xs, [["render", _s], ["__scopeId", "data-v-66bf7a89"]]), er = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xs
}, Symbol.toStringTag, { value: "Module" })), ir = C({
  name: "masked-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
    // SdMaskedInput,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? String(this.fieldModel) : null;
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    },
    smallSize() {
      return this.field.options.size != null && this.field.options.size === "small";
    },
    largeSize() {
      return this.field.options.size != null && this.field.options.size === "large";
    }
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
}), tr = { class: "el-input__wrapper el-input__wrapper" };
function or(e, i, t, o, n, m) {
  const s = zi, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      v("div", {
        class: S(["el-input el-input", { "el-input--small": e.smallSize, "el-input--large": e.largeSize, "is-disabled": e.field.options.disabled }])
      }, [
        v("div", tr, [
          h(s, {
            class: "el-input__inner el-input__inner",
            ref: "fieldEditor",
            modelValue: e.fieldValue,
            "onUpdate:modelValue": [
              i[0] || (i[0] = (p) => e.fieldValue = p),
              e.handleInputCustomEvent
            ],
            disabled: e.field.options.disabled,
            readonly: e.field.options.readonly,
            autoClear: !1,
            mask: e.field.options.mask,
            unmask: e.field.options.unmask,
            slotChar: e.field.options.slotChar,
            placeholder: e.field.options.showMask ? e.field.options.mask : "",
            onFocus: e.handleFocusCustomEvent,
            onBlur: e.handleBlurCustomEvent,
            onChange: e.handleChangeEvent
          }, null, 8, ["modelValue", "disabled", "readonly", "mask", "unmask", "slotChar", "placeholder", "onFocus", "onBlur", "onUpdate:modelValue", "onChange"])
        ])
      ], 2)
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const lr = /* @__PURE__ */ I(ir, [["render", or]]), nr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lr
}, Symbol.toStringTag, { value: "Module" })), sr = C({
  name: "multiple-date",
  typeName: "FormField",
  components: {
    FormItemWrapper: M,
    SdDatePickerBE: ie
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    // เปิดโหมด พ.ศ.ไทย อัตโนมัติเมื่อ format มี token B · ค่ายังเก็บ ค.ศ.
    isBuddhist() {
      return /B{1,4}/.test(this.field.options.format || "");
    },
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? typeof this.fieldModel == "string" && this.fieldModel !== "" ? this.string2Json(this.fieldModel) : typeof this.fieldModel == "object" && Object.values(this.fieldModel).length > 0 ? this.fieldModel : null : null;
      },
      set(e) {
        e != null ? typeof e == "string" && e !== "" ? this.setFieldValue(this.string2Json(e)) : typeof e == "object" && Object.values(e).length > 0 ? this.setFieldValue(e) : this.setFieldValue(null) : this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function rr(e, i, t, o, n, m) {
  const s = ie, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      v("div", {
        class: S([e.field.options.autoFullWidth ? "auto-full-width" : ""])
      }, [
        h(s, {
          ref: "fieldEditor",
          type: e.field.options.dateType,
          modelValue: e.fieldValue,
          "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
          buddhist: e.isBuddhist,
          readonly: e.field.options.readonly,
          disabled: e.field.options.disabled,
          size: e.widgetSize,
          clearable: e.field.options.clearable,
          editable: e.field.options.editable,
          format: e.field.options.format,
          "value-format": e.field.options.valueFormat,
          placeholder: e.field.options.placeholder || "Select Date",
          "disabled-date": (p) => e.field.options.disabledDate ? p.getTime() > Date.now() : !1,
          onFocus: e.handleFocusCustomEvent,
          onBlur: e.handleBlurCustomEvent,
          onChange: e.handleChangeEvent
        }, null, 8, ["type", "modelValue", "buddhist", "readonly", "disabled", "size", "clearable", "editable", "format", "value-format", "placeholder", "disabled-date", "onFocus", "onBlur", "onChange"])
      ], 2)
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const dr = /* @__PURE__ */ I(sr, [["render", rr], ["__scopeId", "data-v-315f06a2"]]), ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dr
}, Symbol.toStringTag, { value: "Module" })), fr = C({
  name: "number-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null) {
          const e = Number(this.fieldModel);
          return isNaN(e) ? void 0 : e;
        } else
          return;
      },
      set(e) {
        if (e != null) {
          const i = Number(e);
          isNaN(i) ? this.setFieldValue(null) : this.setFieldValue(i);
        } else
          this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
}), ur = {
  key: 1,
  class: "mr-1"
}, pr = { key: 1 };
function mr(e, i, t, o, n, m) {
  const s = V, u = yt, p = M;
  return l(), a(p, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(u, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (g) => e.fieldValue = g),
        class: S(["full-width-input", { "left-input": e.field.options.controlsPosition == "right" }]),
        disabled: e.field.options.disabled,
        size: e.widgetSize,
        "controls-position": e.field.options.controlsPosition,
        placeholder: e.field.options.placeholder,
        min: e.field.options.min,
        max: e.field.options.max,
        precision: e.field.options.precision,
        step: e.field.options.step,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onChange: e.handleChangeEvent
      }, Y({ _: 2 }, [
        e.field.options.prefixIcon || e.field.options.prefixText ? {
          name: "prefix",
          fn: f(() => [
            e.field.options.prefixIcon ? (l(), a(s, {
              key: 0,
              "icon-name": e.field.options.prefixIcon,
              class: "mr-1"
            }, null, 8, ["icon-name"])) : b("", !0),
            e.field.options.prefixText ? (l(), c("span", ur, F(e.field.options.prefixText), 1)) : b("", !0)
          ]),
          key: "0"
        } : void 0,
        e.field.options.suffixIcon || e.field.options.suffixText ? {
          name: "suffix",
          fn: f(() => [
            e.field.options.suffixIcon ? (l(), a(s, {
              key: 0,
              "icon-name": e.field.options.suffixIcon,
              class: "mr-1"
            }, null, 8, ["icon-name"])) : b("", !0),
            i[1] || (i[1] = E()),
            e.field.options.suffixText ? (l(), c("span", pr, F(e.field.options.suffixText), 1)) : b("", !0)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["modelValue", "class", "disabled", "size", "controls-position", "placeholder", "min", "max", "precision", "step", "onFocus", "onBlur", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const hr = /* @__PURE__ */ I(fr, [["render", mr], ["__scopeId", "data-v-fb135eaa"]]), cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hr
}, Symbol.toStringTag, { value: "Module" })), br = C({
  name: "objectid-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? String(this.fieldModel) : null;
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    },
    inputType() {
      return "hidden";
    }
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function gr(e, i, t, o, n, m) {
  const s = V, u = ye, p = M;
  return l(), a(p, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(u, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (g) => e.fieldValue = g),
        disabled: e.field.options.disabled,
        readonly: e.field.options.readonly,
        size: e.widgetSize,
        class: "hide-spin-button",
        type: "text",
        placeholder: e.field.options.placeholder,
        clearable: e.field.options.clearable,
        minlength: e.field.options.minLength,
        maxlength: e.field.options.maxLength,
        "show-word-limit": e.field.options.showWordLimit,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onInput: e.handleInputCustomEvent,
        onChange: e.handleChangeEvent
      }, Y({
        suffix: f(() => [
          h(s, {
            "icon-name": e.field.options.suffixIcon
          }, null, 8, ["icon-name"])
        ]),
        _: 2
      }, [
        e.field.options.prefixText ? {
          name: "prepend",
          fn: f(() => [
            E(F(e.field.options.prefixText), 1)
          ]),
          key: "0"
        } : void 0,
        e.field.options.suffixText ? {
          name: "append",
          fn: f(() => [
            E(F(e.field.options.suffixText), 1)
          ]),
          key: "1"
        } : void 0,
        e.field.options.prefixIcon ? {
          name: "prefix",
          fn: f(() => [
            h(s, {
              "icon-name": e.field.options.prefixIcon
            }, null, 8, ["icon-name"])
          ]),
          key: "2"
        } : void 0
      ]), 1032, ["modelValue", "disabled", "readonly", "size", "placeholder", "clearable", "minlength", "maxlength", "show-word-limit", "onFocus", "onBlur", "onInput", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Fr = /* @__PURE__ */ I(br, [["render", gr]]), yr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fr
}, Symbol.toStringTag, { value: "Module" })), vr = C({
  name: "otp-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? String(this.fieldModel) : "";
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    }
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {
    // ยิงเมื่อ el-input-otp กรอกครบทุกช่อง (event 'finish') — value = OTP ที่กรอกครบ
    handleFinishEvent(e) {
      try {
        if (this.field.options.onFinish) {
          const t = P(this.field.options.onFinish, ["value"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    }
  }
});
function wr(e, i, t, o, n, m) {
  const s = vt, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        length: e.field.options.length,
        type: e.field.options.type,
        mask: e.field.options.mask,
        separator: e.field.options.separator || void 0,
        disabled: e.field.options.disabled,
        readonly: e.field.options.readonly,
        size: e.widgetSize,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onChange: e.handleChangeEvent,
        onFinish: e.handleFinishEvent
      }, null, 8, ["modelValue", "length", "type", "mask", "separator", "disabled", "readonly", "size", "onFocus", "onBlur", "onChange", "onFinish"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Cr = /* @__PURE__ */ I(vr, [["render", wr]]), Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cr
}, Symbol.toStringTag, { value: "Module" })), Ir = C({
  name: "picture-upload-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  data() {
    return {
      // isDisabled: this.field.options.disabled,
    };
  },
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState", "globalAuthToken", "globalSdForm"],
  computed: {
    previewList() {
      const e = [];
      for (const i of this.fileList)
        i.url && e.push(i.url);
      return e;
    },
    realUploadURL() {
      let e = this.field.options.uploadURL;
      return e || (this.globalUserState ? this.globalUserState.host + "/v1/files/form-upload" : "");
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.initInputValue(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.initApi(), this.field.options.disabled, this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = R(null);
    return {
      fieldEditor: e,
      imageRef: i
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {
    initApi() {
      this.setUploadHeader("Authorization", `Bearer ${this.globalAuthToken}`), this.globalSdForm && this.globalSdForm._id && (this.setUploadData("formId", this.globalSdForm._id), this.setUploadData("category", "picture"));
    },
    initInputValue() {
      !this.builderStatus && this.fileList && (this.uploadBtnHidden = this.fileList.length >= this.field.options.limit);
    },
    handlePictureExceed() {
      let e = this.field.options.limit;
      this.alert(`Limit ${e} picture can not exceed`, "warning");
    },
    beforePictureUpload(e) {
      let i = !1;
      if (this.field.options && this.field.options.fileTypes) {
        let n = this.field.options.fileTypes;
        n.length > 0 && (i = n.some((m) => e.type === "image/" + m));
      }
      if (!i)
        return this.alert(`Picture must be ${e.type} format!`, "warning"), !1;
      let t = !1, o = 5;
      return this.field.options && this.field.options.fileMaxSize && (o = this.field.options.fileMaxSize), t = e.size / 1024 / 1024 <= o, t ? (this.uploadData.key = e.name, this.handleOnBeforeUpload(e)) : (this.alert(`Picture size can not exceed ${o}MB`, "warning"), !1);
    },
    handleOnBeforeUpload(e) {
      try {
        if (this.field.options.onBeforeUpload) {
          let t = new Function("file", ...z, this.field.options.onBeforeUpload).call(this, e);
          return typeof t == "boolean" ? t : !0;
        }
        return !0;
      } catch (i) {
        return this.alert(i.message, "warning"), !1;
      }
    },
    updateFieldModelAndEmitDataChangeForUpload(e, i, t) {
      let o = D(this.fileList);
      i && i.name && i.url ? this.fileList.push({
        name: i.name,
        url: i.url
      }) : t && t.name && t.url ? this.fileList.push({
        name: t.name,
        url: t.url
      }) : this.fileList = D(e), this.syncUpdateFormModel(this.fileList), this.emitFieldDataChange(this.fileList, o);
    },
    handlePictureUpload(e, i, t) {
      if (i.status === "success") {
        i.response && (i.url = e.filePath);
        let o = null;
        if (this.field.options.onUploadSuccess)
          try {
            o = new Function("result", "file", "fileList", ...z, this.field.options.onUploadSuccess).call(this, e, i, t);
          } catch (n) {
            this.alert(n.message, "warning");
          }
        this.updateFieldModelAndEmitDataChangeForUpload(t, o, e), this.fileList = D(t), this.uploadBtnHidden = t.length >= this.field.options.limit;
      }
    },
    updateFieldModelAndEmitDataChangeForRemove(e) {
      let i = D(this.fileList), t = -1;
      this.fileListBeforeRemove.map((o, n) => {
        o.name === e.name && (o.url === e.url || o.uid && o.uid === e.uid) && (t = n);
      }), t > -1 && this.fileList.splice(t, 1), this.syncUpdateFormModel(this.fileList), this.emitFieldDataChange(this.fileList, i);
    },
    handleBeforeRemove(e) {
      this.fileListBeforeRemove = D(e);
    },
    handlePictureRemove(e) {
      const i = e.response;
      te.confirm("Are you sure you want to delete this item?", "Confirmation", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(() => {
        if (this.handleBeforeRemove(this.fileList), !i) {
          this.updateFieldModelAndEmitDataChangeForRemove(e), this.uploadBtnHidden = this.fileList.length >= this.field.options.limit;
          try {
            if (this.field.options.onFileRemove) {
              const o = P(this.field.options.onFileRemove, ["file", "fileList"]).call(this, e, D(this.fileList));
              o && typeof o.then == "function" && o.catch((n) => this.alert(n?.message || String(n), "warning"));
            }
          } catch (t) {
            this.alert(t.message, "warning");
          }
          return;
        }
        ce.delete(`${this.globalUserState.host}/v1/files/remove-one`, {
          data: i,
          headers: {
            Authorization: `Bearer ${this.globalAuthToken}`
          }
        }).then((t) => {
          this.updateFieldModelAndEmitDataChangeForRemove(e);
          let o = D(this.fileList);
          this.uploadBtnHidden = o.length >= this.field.options.limit;
          try {
            if (this.field.options.onFileRemove) {
              const m = P(this.field.options.onFileRemove, ["file", "fileList"]).call(this, e, o);
              m && typeof m.then == "function" && m.catch((s) => this.alert(s?.message || String(s), "warning"));
            }
          } catch (n) {
            this.alert(n.message, "warning");
          }
        }).catch((t) => {
          console.log(t);
        });
      }).catch(() => {
      });
    },
    handleUploadError(e, i, t) {
      try {
        if (this.field.options.onUploadError) {
          const n = P(this.field.options.onUploadError, ["error", "file", "fileList"]).call(this, e, i, t);
          n && typeof n.then == "function" && n.catch((m) => this.alert(m?.message || String(m), "warning"));
        } else
          this.alert(e, "warning");
      } catch (o) {
        this.alert(o.message, "warning");
      }
    },
    handlePictureCardPreview(e) {
      e.url && (this.previewIndex = this.previewList.indexOf(e.url), this.imageRef.$el.children[0].click());
    }
  }
}), Mr = { class: "el-upload-list__item-status-label" }, Rr = { class: "el-upload-list__item-actions" }, kr = ["onClick"], Or = ["onClick"], Pr = {
  key: 0,
  class: "el-upload__tip"
};
function $r(e, i, t, o, n, m) {
  const s = ti, u = Z("Check"), p = be, g = Z("ZoomIn"), w = Z("Delete"), L = Z("Plus"), r = Pe, d = M;
  return l(), a(d, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(r, {
        class: S({ hideUploadDiv: e.uploadBtnHidden }),
        ref: "fieldEditor",
        disabled: e.field.options.disabled || !!e.builderStatus,
        action: e.realUploadURL,
        data: e.uploadData,
        headers: e.uploadHeaders,
        "show-file-list": e.field.options.showFileList,
        "with-credentials": e.field.options.withCredentials,
        multiple: e.field.options.multipleSelect,
        "list-type": "picture-card",
        "file-list": e.fileList,
        "onUpdate:fileList": i[0] || (i[0] = (k) => e.fileList = k),
        limit: e.field.options.limit,
        "on-exceed": e.handlePictureExceed,
        "before-upload": e.beforePictureUpload,
        "on-preview": e.handlePictureCardPreview,
        "on-success": e.handlePictureUpload,
        "on-error": e.handleUploadError
      }, {
        file: f(({ file: k }) => [
          h(s, {
            ref: "imageRef",
            style: { width: "100%", height: "100%" },
            src: k.url,
            "preview-src-list": e.previewList,
            "initial-index": e.previewIndex,
            fit: "cover",
            "preview-teleported": ""
          }, null, 8, ["src", "preview-src-list", "initial-index"]),
          v("label", Mr, [
            h(p, null, {
              default: f(() => [
                h(u)
              ]),
              _: 1
            })
          ]),
          v("span", Rr, [
            v("span", {
              class: "el-upload-list__item-preview",
              onClick: (B) => e.handlePictureCardPreview(k)
            }, [
              h(p, null, {
                default: f(() => [
                  h(g)
                ]),
                _: 1
              })
            ], 8, kr),
            e.field.options.disabled ? b("", !0) : (l(), c("span", {
              key: 0,
              class: "el-upload-list__item-delete",
              onClick: (B) => e.handlePictureRemove(k)
            }, [
              h(p, null, {
                default: f(() => [
                  h(w)
                ]),
                _: 1
              })
            ], 8, Or))
          ])
        ]),
        tip: f(() => [
          e.field.options.uploadTip ? (l(), c("div", Pr, F(e.field.options.uploadTip), 1)) : b("", !0)
        ]),
        default: f(() => [
          h(p, null, {
            default: f(() => [
              h(L)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class", "disabled", "action", "data", "headers", "show-file-list", "with-credentials", "multiple", "file-list", "limit", "on-exceed", "before-upload", "on-preview", "on-success", "on-error"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Er = /* @__PURE__ */ I(Ir, [["render", $r], ["__scopeId", "data-v-f2fe4ce7"]]), Lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Er
}, Symbol.toStringTag, { value: "Module" })), jr = C({
  name: "progress-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  computed: {},
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {
    handleOnClose(e) {
      try {
        if (this.field.options.onClose) {
          const t = P(this.field.options.onClose, ["event"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Dr(e, i, t, o, n, m) {
  const s = wt, u = $;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(s, {
        ref: "fieldEditor",
        key: e.field.id,
        duration: e.field.options.duration,
        indeterminate: !!e.field.options.indeterminate,
        percentage: e.field.options.percentage,
        "show-text": !!e.field.options.showText,
        status: e.field.options.status,
        striped: !!e.field.options.striped,
        "striped-flow": !!e.field.options.stripedFlow,
        "stroke-linecap": e.field.options.strokeLinecap,
        "stroke-width": e.field.options.strokeWidth < 51 ? e.field.options.strokeWidth : void 0,
        "text-inside": !!e.field.options.textInside,
        type: e.field.options.type,
        format: e.field.options.format || void 0,
        color: e.field.options.colors && e.field.options.colors.length > 0 ? e.field.options.colors : void 0,
        width: e.field.options.width > 39 ? e.field.options.width : void 0
      }, null, 8, ["duration", "indeterminate", "percentage", "show-text", "status", "striped", "striped-flow", "stroke-linecap", "stroke-width", "text-inside", "type", "format", "color", "width"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"]);
}
const Tr = /* @__PURE__ */ I(jr, [["render", Dr], ["__scopeId", "data-v-89a839e4"]]), Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tr
}, Symbol.toStringTag, { value: "Module" })), Ur = C({
  name: "qrcode-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $,
    VueQrcode: Ht
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Br(e, i, t, o, n, m) {
  const s = Z("VueQrcode"), u = $;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), c("div", {
        ref: "fieldEditor",
        key: e.field.id,
        class: S({ paragraph: !!e.field.options.paragraph }),
        style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left", marginBottom: e.field.options.marginBottom + "px" })
      }, [
        v("span", {
          class: S([e.field.options.sizeClass ? e.field.options.sizeClass : "text-6"])
        }, [
          e.field.options.textValue ? (l(), a(s, {
            key: 0,
            value: e.field.options.textValue || "",
            options: { width: e.field.options.width || 100 },
            style: { "border-radius": "6px" }
          }, null, 8, ["value", "options"])) : b("", !0)
        ], 2)
      ], 6))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const zr = /* @__PURE__ */ I(Ur, [["render", Br], ["__scopeId", "data-v-14161622"]]), Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zr
}, Symbol.toStringTag, { value: "Module" })), Nr = C({
  name: "radio-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? this.fieldModel : null;
      },
      set(e) {
        e != null ? this.setFieldValue(e) : this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initOptionItems(), this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Wr(e, i, t, o, n, m) {
  const s = Ct, u = li, p = ge, g = Fe, w = oi, L = M;
  return l(), a(L, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(w, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (r) => e.fieldValue = r),
        class: S({ "radio-group-block": e.field.options.displayStyle === "flex" }),
        disabled: e.field.options.disabled,
        size: e.widgetSize,
        style: { width: "100%" },
        onChange: e.handleChangeEvent
      }, {
        default: f(() => [
          e.field.options.buttonStyle ? (l(!0), c(y, { key: 0 }, T(e.field.options.optionItems, (r, d) => (l(), a(s, {
            key: d,
            value: r.value,
            disabled: r.disabled,
            border: e.field.options.border,
            style: j({ display: e.field.options.displayStyle })
          }, {
            default: f(() => [
              E(F(r.label), 1)
            ]),
            _: 2
          }, 1032, ["value", "disabled", "border", "style"]))), 128)) : (l(), c(y, { key: 1 }, [
            e.field.options.showCol && e.field.options.showCol > 0 ? (l(), a(g, { key: 0 }, {
              default: f(() => [
                (l(!0), c(y, null, T(e.field.options.optionItems, (r, d) => (l(), a(p, {
                  span: e.field.options.showCol
                }, {
                  default: f(() => [
                    (l(), a(u, {
                      key: d,
                      value: r.value,
                      disabled: r.disabled,
                      border: e.field.options.border,
                      style: j({ display: e.field.options.displayStyle })
                    }, {
                      default: f(() => [
                        E(F(r.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["value", "disabled", "border", "style"]))
                  ]),
                  _: 2
                }, 1032, ["span"]))), 256))
              ]),
              _: 1
            })) : (l(!0), c(y, { key: 1 }, T(e.field.options.optionItems, (r, d) => (l(), a(u, {
              key: d,
              value: r.value,
              disabled: r.disabled,
              border: e.field.options.border,
              style: j({ display: e.field.options.displayStyle })
            }, {
              default: f(() => [
                E(F(r.label), 1)
              ]),
              _: 2
            }, 1032, ["value", "disabled", "border", "style"]))), 128))
          ], 64))
        ]),
        _: 1
      }, 8, ["modelValue", "class", "disabled", "size", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Hr = /* @__PURE__ */ I(Nr, [["render", Wr], ["__scopeId", "data-v-9ae0dedd"]]), qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hr
}, Symbol.toStringTag, { value: "Module" })), Gr = C({
  name: "radio-text-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  data() {
    return {
      textValue: {},
      valueRaw: ""
    };
  },
  computed: {
    valueState: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? typeof this.fieldModel == "object" && Object.keys(this.fieldModel).length > 0 ? (this.textValue[this.fieldModel.value] = this.fieldModel.text, this.fieldModel.value) : typeof this.fieldModel == "string" ? this.fieldModel : "" : "";
      },
      set(e) {
        this.valueRaw = e;
      }
    },
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? this.fieldModel : null;
      },
      set(e) {
        if (e != null)
          if (typeof e == "object" && Object.keys(e).length > 0)
            this.setFieldValue(e);
          else if (typeof e == "string")
            this.setFieldValue({
              value: e,
              text: this.textValue[e]
            });
          else
            return {};
        else
          this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initOptionItems(), this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {
    customChange(e) {
      this.fieldValue = e, this.handleChangeEvent(this.fieldValue);
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Jr(e, i, t, o, n, m) {
  const s = ye, u = li, p = ge, g = Fe, w = oi, L = M;
  return l(), a(L, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(w, {
        ref: "fieldEditor",
        modelValue: e.valueState,
        "onUpdate:modelValue": i[0] || (i[0] = (r) => e.valueState = r),
        class: S({ "radio-group-block": e.field.options.displayStyle === "flex" }),
        disabled: e.field.options.disabled,
        size: e.widgetSize,
        style: { width: "100%" },
        onChange: e.customChange
      }, {
        default: f(() => [
          e.field.options.showCol && e.field.options.showCol > 0 ? (l(), a(g, { key: 0 }, {
            default: f(() => [
              (l(!0), c(y, null, T(e.field.options.optionItems, (r, d) => (l(), a(p, {
                span: e.field.options.showCol
              }, {
                default: f(() => [
                  (l(), a(u, {
                    key: d,
                    value: r.value,
                    disabled: r.disabled,
                    border: !1,
                    style: { display: "flex" }
                  }, {
                    default: f(() => [
                      E(F(r.label) + " ", 1),
                      r.text ? (l(), a(s, {
                        key: 0,
                        size: "small",
                        disabled: e.valueState != r.value || e.field.options.disabled,
                        modelValue: e.textValue[r.value],
                        "onUpdate:modelValue": (k) => e.textValue[r.value] = k,
                        style: j(`width: ${r.width}px`),
                        onChange: (k) => e.customChange(r.value)
                      }, Y({ _: 2 }, [
                        r.suffix ? {
                          name: "append",
                          fn: f(() => [
                            E(F(r.suffix), 1)
                          ]),
                          key: "0"
                        } : void 0
                      ]), 1032, ["disabled", "modelValue", "onUpdate:modelValue", "style", "onChange"])) : b("", !0)
                    ]),
                    _: 2
                  }, 1032, ["value", "disabled"]))
                ]),
                _: 2
              }, 1032, ["span"]))), 256))
            ]),
            _: 1
          })) : (l(!0), c(y, { key: 1 }, T(e.field.options.optionItems, (r, d) => (l(), a(u, {
            key: d,
            value: r.value,
            disabled: r.disabled,
            border: !1,
            style: { display: "flex" }
          }, {
            default: f(() => [
              E(F(r.label) + " ", 1),
              r.text ? (l(), a(s, {
                key: 0,
                size: "small",
                disabled: e.valueState != r.value || e.field.options.disabled,
                modelValue: e.textValue[r.value],
                "onUpdate:modelValue": (k) => e.textValue[r.value] = k,
                style: j(`width: ${r.width}px`),
                onChange: (k) => e.customChange(r.value)
              }, Y({ _: 2 }, [
                r.suffix ? {
                  name: "append",
                  fn: f(() => [
                    E(F(r.suffix), 1)
                  ]),
                  key: "0"
                } : void 0
              ]), 1032, ["disabled", "modelValue", "onUpdate:modelValue", "style", "onChange"])) : b("", !0)
            ]),
            _: 2
          }, 1032, ["value", "disabled"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "class", "disabled", "size", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Kr = /* @__PURE__ */ I(Gr, [["render", Jr], ["__scopeId", "data-v-10f388a2"]]), Zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kr
}, Symbol.toStringTag, { value: "Module" })), Qr = C({
  name: "rate-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null) {
          const e = Number(this.fieldModel);
          return isNaN(e) ? 0 : e;
        } else
          return 0;
      },
      set(e) {
        if (e != null) {
          const i = Number(e);
          isNaN(i) ? this.setFieldValue(0) : this.setFieldValue(i);
        } else
          this.setFieldValue(0);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Yr(e, i, t, o, n, m) {
  const s = St, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        disabled: e.field.options.disabled,
        max: e.field.options.max,
        size: e.widgetSize,
        clearable: e.field.options.clearable,
        "low-threshold": e.field.options.lowThreshold,
        "high-threshold": e.field.options.highThreshold,
        "allow-half": e.field.options.allowHalf,
        "score-template": e.field.options.scoreTemplate,
        "show-text": e.field.options.showText,
        "show-score": e.field.options.showScore,
        onChange: e.handleChangeEvent
      }, null, 8, ["modelValue", "disabled", "max", "size", "clearable", "low-threshold", "high-threshold", "allow-half", "score-template", "show-text", "show-score", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Xr = /* @__PURE__ */ I(Qr, [["render", Yr], ["__scopeId", "data-v-a4f7a549"]]), _r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xr
}, Symbol.toStringTag, { value: "Module" })), xr = C({
  name: "record-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
    // SdUiRecordView,
    // SdReport,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  beforeCreate() {
  },
  data() {
    return {
      isDark: H(),
      recordData: null
    };
  },
  computed: {
    dataProvider() {
      if ((this.field.options.where || this.field.options.orderBy) && this.field.options.formId) {
        const e = {
          providerId: this.field.options.formId,
          providerType: "FORM"
        };
        return e.options = {}, this.field.options.where && (e.options.where = this.field.options.where), e;
      } else
        return;
    },
    emptyText() {
      return this.field.options.emptyText || "";
    },
    recordReady() {
      return !this.field.options.dataId || this.builderStatus ? !0 : !!this.dataId;
    },
    showWhenParent() {
      if (this.field.options.showWhenParent && !this.builderStatus) {
        const e = this.getFormRef();
        let i = "";
        return e && e.formParams ? i = this.getObjectByPath(e.formParams, this.field.options.parentPath) || "" : i = this.getObjectByPath(this.formParams, this.field.options.parentPath) || "", !!i;
      } else
        return !0;
    },
    dataId() {
      if (this.field.options.dataId) {
        const e = this.refField(this.field.options.dataId);
        if (e) {
          const i = e.getValue();
          return i ? typeof i == "string" ? i : typeof i == "object" && i.value ? i.value : void 0 : void 0;
        } else {
          if (this.subFormItemFlag) {
            const i = this.field.options.dataId + "@row" + this.subFormRowId;
            if (this.refList[i]) {
              const t = this.refList[i].getValue();
              return t ? typeof t == "string" ? t : typeof t == "object" && t.value ? t.value : void 0 : void 0;
            }
          }
          return;
        }
      }
    }
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  methods: {
    insertBefore(e) {
      try {
        if (this.field.options.onInsertBefore) {
          const t = P(this.field.options.onInsertBefore, ["row", "index"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    updateBefore(e) {
      try {
        if (this.field.options.onUpdateBefore) {
          const t = P(this.field.options.onUpdateBefore, ["row", "index"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    viewBefore(e) {
      try {
        if (this.field.options.onViewBefore) {
          const t = P(this.field.options.onViewBefore, ["row", "index"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    beforeSave(e) {
      try {
        if (this.field.options.onBeforeSave) {
          const t = P(this.field.options.onBeforeSave, ["row"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    afterDelete(e) {
      try {
        if (this.field.options.onAfterDelete) {
          const t = P(this.field.options.onAfterDelete, ["row", "index"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    allowDeleteFunc(e) {
      try {
        return this.field.options.allowDeleteFunc ? new Function("row", "index", ...z, this.field.options.allowDeleteFunc).call(this, e) : !0;
      } catch (i) {
        return this.alert(i.message, "warning"), !1;
      }
    },
    emitButtonRowClick(e, i, t) {
      try {
        if (e.onClick)
          try {
            const n = P(e.onClick, ["btnRow", "btnIndex", "dataRow", "dataIndex"]).call(this, e, i, t);
            n && typeof n.then == "function" && n.catch((m) => this.alert(m?.message || String(m), "warning"));
          } catch (o) {
            this.alert(o.message, "warning");
          }
        else
          this.dispatch("SdFormRender", "onClick", [this]);
      } catch (o) {
        this.alert(o.message, "warning");
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
}), ed = {
  key: 0,
  class: "record-empty-text"
};
function id(e, i, t, o, n, m) {
  const s = le, u = V, p = q, g = pe, w = Ai, L = $;
  return e.showWhenParent && (e.recordReady || e.emptyText) ? (l(), a(L, {
    key: 0,
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    class: S(["ui-container"]),
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      e.recordReady ? (l(), a(w, {
        ref: "fieldEditor",
        key: e.field.id,
        "form-id": e.field.options.formId,
        "provider-type": e.field.options.providerType || "FORM",
        "data-provider": e.dataProvider,
        "parent-id": e.parentId,
        "data-id": e.dataId,
        params: e.params,
        "block-ui-fields": e.field.options.blockUiFields || void 0,
        "init-data": e.field.options.initData ? e.field.options.initData : {},
        "title-enable": !!e.field.options.titleEnable,
        "icon-name": e.field.options.iconName || "",
        "subform-width": e.field.options.subformWidth || 600,
        "title-name": e.field.options.titleName || "",
        "label-width": e.field.options.labelWidth || "",
        column: e.field.options.column || 3,
        "action-enable": !!e.field.options.actionEnable,
        "add-btn-enable": !!e.field.options.addBtnEnable,
        "block-enable": !!e.field.options.blockEnable,
        "border-enable": !!e.field.options.borderEnable,
        "vertical-enable": !!e.field.options.verticalEnable,
        "last-record": !!e.field.options.lastRecord,
        "list-view-btn-enable": !!e.field.options.listViewBtnEnable,
        "list-view-read-only": !!e.field.options.listViewReadOnly,
        "update-btn-enable": !!e.field.options.updateBtnEnable,
        "del-btn-enable": !!e.field.options.delBtnEnable,
        "reload-btn-enable": !!e.field.options.reloadBtnEnable,
        "view-btn-enable": !!e.field.options.viewBtnEnable,
        "allow-delete-func": e.field.options.allowDeleteFunc ? e.allowDeleteFunc : void 0,
        "enable-ws": !!e.field.options.enableWs,
        "custom-content-enable": !!e.field.options.customContentEnable,
        "custom-content": e.field.options.customContent || "",
        "auto-action-footer": e.field.options.autoActionFooter !== !1,
        "meta-by-field": e.field.options.metaByField || "created_by.name",
        "meta-time-field": e.field.options.metaTimeField || "created_at",
        "parent-path": e.parentPath,
        "insert-before": e.insertBefore,
        "update-before": e.updateBefore,
        "view-before": e.viewBefore,
        "before-save": e.beforeSave,
        "after-delete": e.afterDelete,
        "user-state": e.globalUserState,
        "build-state": e.builderStatus
      }, {
        actions: f((r) => [
          h(s, {
            "report-list": e.field.options.reportList || [],
            size: "small",
            params: r.row,
            "user-state": e.globalUserState,
            "margin-enable": !0
          }, null, 8, ["report-list", "params", "user-state"]),
          e.field.options.buttonsRow && Object.keys(e.field.options.buttonsRow).length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.options.buttonsRow, (d, k) => (l(), c(y, null, [
            d.confirm ? (l(), a(g, {
              key: 0,
              title: d.confirmTitle,
              onConfirm: (B) => e.emitButtonRowClick(d, +k, r.row)
            }, {
              reference: f(() => [
                h(p, {
                  type: d.type ? d.type : "",
                  plain: !!d.plain,
                  circle: !!d.circle,
                  round: !!d.round,
                  dark: e.isDark,
                  disabled: !!e.field.options.disabled || !!d.disabled,
                  "loading-icon": "Eleme",
                  loading: d.loading,
                  size: "small",
                  color: d.color
                }, {
                  default: f(() => [
                    d.prefixIcon ? (l(), a(u, {
                      key: 0,
                      "icon-name": d.prefixIcon,
                      class: S(d.label ? "" : "ml-1")
                    }, null, 8, ["icon-name", "class"])) : b("", !0),
                    v("span", null, F(d.label), 1),
                    d.suffixIcon ? (l(), a(u, {
                      key: 1,
                      "icon-name": d.suffixIcon,
                      class: S(d.label ? "ml-1" : "")
                    }, null, 8, ["icon-name", "class"])) : b("", !0)
                  ]),
                  _: 2
                }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color"])
              ]),
              _: 2
            }, 1032, ["title", "onConfirm"])) : (l(), a(p, {
              key: 1,
              type: d.type ? d.type : "",
              plain: !!d.plain,
              circle: !!d.circle,
              round: !!d.round,
              dark: e.isDark,
              disabled: !!e.field.options.disabled || !!d.disabled,
              "loading-icon": "Eleme",
              loading: d.loading,
              color: d.color,
              tag: d.tag,
              size: "small",
              href: d.tag && d.tag == "a" ? d.href : "",
              target: d.blank ? "_blank" : "_self",
              onClick: U((B) => e.emitButtonRowClick(d, +k, r.row), ["prevent"])
            }, {
              default: f(() => [
                d.prefixIcon ? (l(), a(u, {
                  key: 0,
                  "icon-name": d.prefixIcon,
                  class: S(d.label ? "" : "ml-1")
                }, null, 8, ["icon-name", "class"])) : b("", !0),
                v("span", null, F(d.label), 1),
                d.suffixIcon ? (l(), a(u, {
                  key: 1,
                  "icon-name": d.suffixIcon,
                  class: S(d.label ? "ml-1" : "")
                }, null, 8, ["icon-name", "class"])) : b("", !0)
              ]),
              _: 2
            }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color", "tag", "href", "target", "onClick"]))
          ], 64))), 256)) : b("", !0)
        ]),
        _: 1
      }, 8, ["form-id", "provider-type", "data-provider", "parent-id", "data-id", "params", "block-ui-fields", "init-data", "title-enable", "icon-name", "subform-width", "title-name", "label-width", "column", "action-enable", "add-btn-enable", "block-enable", "border-enable", "vertical-enable", "last-record", "list-view-btn-enable", "list-view-read-only", "update-btn-enable", "del-btn-enable", "reload-btn-enable", "view-btn-enable", "allow-delete-func", "enable-ws", "custom-content-enable", "custom-content", "auto-action-footer", "meta-by-field", "meta-time-field", "parent-path", "insert-before", "update-before", "view-before", "before-save", "after-delete", "user-state", "build-state"])) : (l(), c("div", ed, F(e.emptyText), 1))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"])) : b("", !0);
}
const td = /* @__PURE__ */ I(xr, [["render", id], ["__scopeId", "data-v-e0c8551b"]]), od = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: td
}, Symbol.toStringTag, { value: "Module" })), ld = C({
  name: "report-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
    // SdReport,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  beforeCreate() {
  },
  data() {
    return {
      isDark: H()
    };
  },
  computed: {
    params() {
      return this.getFormRef() && this.getFormRef().formParams ? this.getFormRef().formParams : this.formParams ? this.formParams : {};
    }
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  methods: {
    clickEvent(e, i) {
      try {
        return this.field.options.clickEvent ? new Function("row", "index", ...z, this.field.options.clickEvent).call(this, e, i) : !0;
      } catch (t) {
        return this.alert(t.message, "warning"), !1;
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function nd(e, i, t, o, n, m) {
  const s = le, u = V, p = q, g = $;
  return l(), a(g, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    class: S(["datagrid-container"]),
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      e.field.options.reportList && Object.keys(e.field.options.reportList).length > 0 ? (l(), a(s, {
        ref: "fieldEditor",
        key: e.field.id,
        "report-list": e.field.options.reportList || [],
        label: e.field.options.providerType || "Report",
        size: e.widgetSize,
        "margin-enable": !!e.field.options.marginEnable,
        params: e.params,
        "user-state": e.globalUserState
      }, null, 8, ["report-list", "label", "size", "margin-enable", "params", "user-state"])) : (l(), a(p, {
        key: 1,
        plain: "",
        size: e.widgetSize,
        disabled: !0
      }, {
        default: f(() => [
          h(u, { "icon-name": "report-ui" }),
          i[0] || (i[0] = E()),
          v("span", null, F(e.field.options.providerType || "Report"), 1)
        ]),
        _: 1
      }, 8, ["size"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"]);
}
const sd = /* @__PURE__ */ I(ld, [["render", nd], ["__scopeId", "data-v-7a37e132"]]), rd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: sd
}, Symbol.toStringTag, { value: "Module" })), dd = C({
  name: "scan-code-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $,
    SdScan: Ke
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  setup() {
    return { fieldEditor: R(null) };
  },
  methods: {
    // รัน user JS ของ event ผ่าน sandbox (pattern เดียวกับ button-ui)
    runUserEvent(e, i, t) {
      if (e)
        try {
          const n = P(e, i).call(this, ...t);
          n && typeof n.then == "function" && n.catch((m) => this.alert(m?.message || String(m), "warning"));
        } catch (o) {
          this.alert(o.message, "warning");
        }
    },
    handleScan(e, i) {
      this.runUserEvent(this.field.options.onScan, ["value", "qty"], [e, i]);
    },
    handleScanError(e) {
      this.runUserEvent(this.field.options.onScanError, ["debug"], [e]);
    }
  }
});
function ad(e, i, t, o, n, m) {
  const s = V, u = ue, p = Ke, g = $;
  return l(), a(g, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), c("div", {
        ref: "fieldEditor",
        key: e.field.id
      }, [
        e.builderStatus ? (l(), a(u, {
          key: 0,
          type: "info",
          effect: "plain",
          "disable-transitions": ""
        }, {
          default: f(() => [
            h(s, {
              "icon-name": "scan-ui",
              class: "mr-1"
            }),
            E(" Scan listener" + F(e.field.options.name ? ": " + e.field.options.name : ""), 1)
          ]),
          _: 1
        })) : b("", !0),
        h(p, {
          preset: e.field.options.preset,
          target: e.field.options.target,
          "min-length": e.field.options.minLength,
          "avg-time-by-char": e.field.options.avgTimeByChar,
          "extended-charset": e.field.options.extendedCharset,
          "single-scan-qty": e.field.options.singleScanQty,
          "suffix-key-codes": e.field.options.suffixKeyCodes,
          indicator: e.field.options.indicator,
          "indicator-position": e.field.options.indicatorCorner,
          "indicator-timeout": e.field.options.indicatorTimeout,
          "indicator-scan-only": e.field.options.indicatorScanOnly,
          disabled: e.builderStatus || !!e.field.options.hidden || !!e.field.options.disabled,
          onScan: e.handleScan,
          onScanError: e.handleScanError
        }, null, 8, ["preset", "target", "min-length", "avg-time-by-char", "extended-charset", "single-scan-qty", "suffix-key-codes", "indicator", "indicator-position", "indicator-timeout", "indicator-scan-only", "disabled", "onScan", "onScanError"])
      ]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const fd = /* @__PURE__ */ I(dd, [["render", ad]]), ud = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fd
}, Symbol.toStringTag, { value: "Module" })), pd = C({
  name: "segmented-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  data() {
    return {
      defaultValue: "1"
    };
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  computed: {
    direction() {
      return this.field.options.direction ? this.field.options.direction : "horizontal";
    },
    menuList() {
      return this.field.options.segmentedList && Object.keys(this.field.options.segmentedList).length > 0 ? this.field.options.segmentedList : [];
    },
    tabField() {
      const e = this.field.options.tabField || null;
      if (this.refList[e])
        return this.refList[e];
    }
  },
  mounted() {
    if (this.registerToRefList(), this.tabField) {
      let e = Number(this.defaultValue);
      this.tabField.activeTab(e - 1);
    }
    this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {
    onUiChange(e) {
      try {
        if (this.tabField) {
          let i = Number(e);
          this.tabField.activeTab(i - 1);
        }
        if (this.field.options.onUiChange) {
          const t = P(this.field.options.onUiChange, ["value"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function md(e, i, t, o, n, m) {
  const s = V, u = It, p = $;
  return l(), a(p, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      v("div", {
        class: S({ paragraph: !!e.field.options.paragraph }),
        style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left", marginBottom: e.field.options.marginBottom + "px" })
      }, [
        (l(), a(u, {
          ref: "fieldEditor",
          key: e.field.id,
          modelValue: e.defaultValue,
          "onUpdate:modelValue": i[0] || (i[0] = (g) => e.defaultValue = g),
          options: e.menuList,
          direction: e.direction,
          block: !!e.field.options.block,
          size: e.widgetSize,
          onChange: e.onUiChange
        }, {
          default: f((g) => [
            v("div", {
              class: S(["flex", "items-center", "gap-2", "flex-col", e.direction === "horizontal" && "p-2"])
            }, [
              g.item.icon ? (l(), a(s, {
                key: 0,
                "icon-name": g.item.icon,
                class: "text-7"
              }, null, 8, ["icon-name"])) : b("", !0),
              v("div", null, F(g.item.label), 1)
            ], 2)
          ]),
          _: 1
        }, 8, ["modelValue", "options", "direction", "block", "size", "onChange"]))
      ], 6)
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const hd = /* @__PURE__ */ I(pd, [["render", md], ["__scopeId", "data-v-df2d6bff"]]), cd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hd
}, Symbol.toStringTag, { value: "Module" })), bd = C({
  name: "select-data-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
    // SdCrudSelectSubForm,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? typeof this.fieldModel == "string" && this.fieldModel !== "" ? this.string2Json(this.fieldModel) : typeof this.fieldModel == "object" && Object.keys(this.fieldModel).length > 0 ? this.fieldModel : null : null;
      },
      set(e) {
        e != null ? typeof e == "string" && e !== "" ? this.setFieldValue(this.string2Json(e)) : typeof e == "object" && Object.keys(e).length > 0 ? this.setFieldValue(e) : this.setFieldValue(null) : this.setFieldValue(null);
      }
    },
    allowDefaultFirstOption() {
      return !!this.field.options.filterable && !!this.field.options.allowCreate;
    },
    params() {
      return this.field.options.listId && ["sdform-list", "sdform-ui-list", "sdform-db-list", "sql-list", "api-list", "report-list"].includes(this.field.options.listId) ? { form_license: this.form_license } : {};
    },
    valueField() {
      const e = me;
      if (this.field.options.listId) {
        for (const i of e)
          if (i.value === this.field.options.listId)
            return i.valueField;
      }
      return "_id";
    },
    labelField() {
      const e = me;
      if (this.field.options.listId) {
        for (const i of e)
          if (i.value === this.field.options.listId)
            return i.labelField;
      }
      return [];
    },
    searchField() {
      const e = me;
      if (this.field.options.listId) {
        for (const i of e)
          if (i.value === this.field.options.listId)
            return i.searchField;
      }
      return [];
    },
    labelTemp() {
      const e = me;
      if (this.field.options.listId) {
        for (const i of e)
          if (i.value === this.field.options.listId)
            return i.labelTemp;
      }
      return "";
    },
    valueObjectId() {
      const e = me;
      if (this.field.options.listId) {
        for (const i of e)
          if (i.value === this.field.options.listId)
            return i.valueObjectId;
      }
      return !1;
    },
    form_license() {
      return this.globalUserState && this.globalUserState.connectInfo && this.globalUserState.connectInfo.register_id ? this.globalUserState.connectInfo.register_id : "";
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    if (this.registerToRefList(), this.field.options.initCurrent && this.field.options.listId && this.globalUserState && !this.fieldValue?.value) {
      const e = this.globalUserState;
      this.field.options.listId === "user-list" ? this.setFieldValue({
        value: e.user.user_id,
        label: e.user.fname + " " + e.user.lname + ` ( ${e.user.email} )`
      }) : this.field.options.listId === "site-list" ? this.setFieldValue({
        value: e.user.site.code,
        label: e.user.site.name
      }) : this.field.options.listId === "unit-list" && this.setFieldValue({
        value: e.user.unit.code,
        label: e.user.unit.name
      });
    }
    this.handleOnMounted();
  },
  data() {
    return {};
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function gd(e, i, t, o, n, m) {
  const s = Oe, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        placeholder: e.field.options.placeholder || void 0,
        size: e.widgetSize,
        disabled: e.field.options.disabled,
        clearable: e.field.options.clearable,
        "allow-create": e.field.options.allowCreate,
        filterable: e.builderStatus ? !1 : e.field.options.filterable,
        multiple: e.field.options.multiple,
        "multiple-limit": e.field.options.multipleLimit || void 0,
        "provider-type": "SYS",
        "form-id": e.field.options.listId || "",
        limit: e.field.options.limit || 20,
        "form-btn-enable": e.field.options.getDataOnLoad,
        "enable-object-type": !0,
        "value-object-id": e.valueObjectId,
        "value-field": e.valueField,
        "label-field": e.labelField,
        "search-field": e.searchField,
        "label-template": e.labelTemp,
        params: e.params,
        "build-state": e.builderStatus,
        onClear: e.handleOnClear,
        onChange: e.handleChangeEvent,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        "user-state": e.globalUserState
      }, null, 8, ["modelValue", "placeholder", "size", "disabled", "clearable", "allow-create", "filterable", "multiple", "multiple-limit", "form-id", "limit", "form-btn-enable", "value-object-id", "value-field", "label-field", "search-field", "label-template", "params", "build-state", "onClear", "onChange", "onFocus", "onBlur", "user-state"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Fd = /* @__PURE__ */ I(bd, [["render", gd]]), yd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fd
}, Symbol.toStringTag, { value: "Module" })), vd = C({
  name: "select-form-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
    // SdCrudSelectSubForm,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null)
          if (typeof this.fieldModel == "string" && this.fieldModel !== "") {
            const e = this.string2Json(this.fieldModel);
            return e && e.value ? this.string2Json(e) : this.fieldModel;
          } else return typeof this.fieldModel == "object" && Object.keys(this.fieldModel).length > 0 ? this.fieldModel : null;
        else
          return null;
      },
      set(e) {
        if (e != null)
          if (typeof e == "string" && e !== "") {
            const i = this.string2Json(e);
            i && i.value ? this.setFieldValue(i) : this.setFieldValue(e);
          } else typeof e == "object" && Object.keys(e).length > 0 ? this.setFieldValue(e) : this.setFieldValue(null);
        else
          this.setFieldValue(null);
      }
    },
    allowDefaultFirstOption() {
      return !!this.field.options.filterable && !!this.field.options.allowCreate;
    },
    dependField() {
      const e = this.field.options.dependField || null;
      if (this.refList[e])
        return this.refList[e].fieldEditor;
      if (this.subFormItemFlag) {
        const i = e + "@row" + this.subFormRowId;
        if (this.refList[i])
          return this.refList[i].fieldEditor;
      }
    },
    showWhenParent() {
      if (this.field.options.showWhenParent && !this.builderStatus) {
        const e = this.getFormRef();
        let i = "";
        return e && e.formParams ? i = this.getObjectByPath(e.formParams, this.field.options.parentPath) || "" : i = this.getObjectByPath(this.formParams, this.field.options.parentPath) || "", !!i;
      } else
        return !0;
    }
    //valueObjectId() {},
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  data() {
    return {};
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  methods: {
    handleChangeSelect(e) {
      try {
        if (this.field.options.parentMode) {
          const i = this.getFormRef(), t = this.getOptionsModel();
          i && i.formParams ? t && t.name && (i.formParams.xparentx = i.formParams[t.name] && i.formParams[t.name].value ? i.formParams[t.name].value : null, i.formParams.xrstatx = e ? 1 : 0) : t && t.name && (this.formParams.xparentx = this.formParams[t.name] && this.formParams[t.name].value ? this.formParams[t.name].value : null, this.formParams.xrstatx = e ? 1 : 0);
        }
        this.handleChangeEvent(e);
      } catch (i) {
        this.alert(i.message, "warning");
      }
    }
  }
});
function wd(e, i, t, o, n, m) {
  const s = Oe, u = M;
  return e.showWhenParent ? (l(), a(u, {
    key: 0,
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        placeholder: e.field.options.placeholder || void 0,
        size: e.widgetSize,
        disabled: e.field.options.disabled,
        clearable: e.field.options.clearable,
        filterable: e.builderStatus ? !1 : e.field.options.filterable,
        "allow-create": e.field.options.allowCreate,
        "default-first-option": e.allowDefaultFirstOption,
        multiple: e.field.options.multiple,
        "multiple-limit": e.field.options.multipleLimit || void 0,
        "provider-type": "FORM",
        "form-id": e.field.options.formId || "",
        where: e.field.options.where || "",
        "order-by": e.field.options.orderBy || void 0,
        limit: e.field.options.limit || 20,
        "form-btn-enable": e.field.options.formBtnEnable,
        "enable-object-type": !0,
        "refresh-label": !!e.field.options.refreshLabel,
        "value-field": e.field.options.valueField || "_id",
        "label-field": e.field.options.labelField || [],
        "ref-field": e.field.options.refField || [],
        "search-field": e.field.options.searchField || [],
        "label-template": e.field.options.labelTemplate,
        "options-template": e.field.options.optionsTemplate,
        "clone-enable-label-field": e.field.options.cloneEnableLabelField || void 0,
        "depend-enable": e.field.options.dependEnable,
        "depend-field": e.dependField,
        "getdata-on-load": !!e.field.options.getDataOnLoad,
        "parent-id": e.parentId,
        params: e.params,
        "build-state": e.builderStatus,
        onClear: e.handleOnClear,
        onChange: e.handleChangeSelect,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        "user-state": e.globalUserState
      }, null, 8, ["modelValue", "placeholder", "size", "disabled", "clearable", "filterable", "allow-create", "default-first-option", "multiple", "multiple-limit", "form-id", "where", "order-by", "limit", "form-btn-enable", "refresh-label", "value-field", "label-field", "ref-field", "search-field", "label-template", "options-template", "clone-enable-label-field", "depend-enable", "depend-field", "getdata-on-load", "parent-id", "params", "build-state", "onClear", "onChange", "onFocus", "onBlur", "user-state"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"])) : b("", !0);
}
const Cd = /* @__PURE__ */ I(vd, [["render", wd]]), Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cd
}, Symbol.toStringTag, { value: "Module" })), Id = C({
  name: "select-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? this.field.options.multiple && this.field.options.multiple ? typeof this.fieldModel == "string" && this.fieldModel !== "" ? this.string2Json(this.fieldModel) : typeof this.fieldModel == "object" && Object.values(this.fieldModel).length > 0 ? this.fieldModel : [] : this.fieldModel : null;
      },
      set(e) {
        e != null ? this.field.options.multiple && this.field.options.multiple ? typeof e == "string" && e !== "" ? this.setFieldValue(this.string2Json(e)) : typeof e == "object" && Object.values(e).length > 0 ? this.setFieldValue(e) : this.setFieldValue([]) : this.setFieldValue(e) : this.setFieldValue(null);
      }
    },
    allowDefaultFirstOption() {
      return !!this.field.options.filterable && !!this.field.options.allowCreate;
    }
  },
  beforeCreate() {
  },
  created() {
    this.initOptionItems(), this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Md(e, i, t, o, n, m) {
  const s = Rt, u = Mt, p = M;
  return l(), a(p, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(u, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (g) => e.fieldValue = g),
        class: "full-width-input",
        disabled: e.field.options.disabled,
        size: e.widgetSize,
        clearable: e.field.options.clearable,
        filterable: e.builderStatus ? !1 : e.field.options.filterable,
        "allow-create": e.field.options.allowCreate,
        "default-first-option": e.allowDefaultFirstOption,
        "automatic-dropdown": e.field.options.automaticDropdown,
        multiple: e.field.options.multiple,
        "multiple-limit": e.field.options.multipleLimit ? e.field.options.multipleLimit : void 0,
        placeholder: e.field.options.placeholder || "Please Select",
        remote: e.field.options.remote,
        "remote-method": e.remoteQuery,
        onClear: e.handleOnClear,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onChange: e.handleChangeEvent
      }, {
        default: f(() => [
          (l(!0), c(y, null, T(e.field.options.optionItems, (g) => (l(), a(s, {
            key: g.value,
            label: g.label,
            value: g.value,
            disabled: g.disabled
          }, null, 8, ["label", "value", "disabled"]))), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "size", "clearable", "filterable", "allow-create", "default-first-option", "automatic-dropdown", "multiple", "multiple-limit", "placeholder", "remote", "remote-method", "onClear", "onFocus", "onBlur", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Rd = /* @__PURE__ */ I(Id, [["render", Md], ["__scopeId", "data-v-fc573572"]]), kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rd
}, Symbol.toStringTag, { value: "Module" })), Od = C({
  name: "select-path-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
    // SdSelectPathData,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  data() {
    return {
      dataObject: {}
    };
  },
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? this.field.options.multiple && this.field.options.multiple ? typeof this.fieldModel == "string" && this.fieldModel !== "" ? this.string2Json(this.fieldModel) : typeof this.fieldModel == "object" && Object.keys(this.fieldModel).length > 0 ? this.fieldModel : [] : this.fieldModel : null;
      },
      set(e) {
        e != null ? this.field.options.multiple && this.field.options.multiple ? typeof e == "string" && e !== "" ? this.setFieldValue(this.string2Json(e)) : typeof e == "object" && Object.keys(e).length > 0 ? this.setFieldValue(e) : this.setFieldValue([]) : this.setFieldValue(e) : this.setFieldValue(null);
      }
    },
    allowDefaultFirstOption() {
      return !!this.field.options.filterable && !!this.field.options.allowCreate;
    },
    getDateObject() {
      return this.dataObjectUpdate();
    }
  },
  beforeCreate() {
  },
  created() {
    this.initOptionItems(), this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  async mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  watch: {
    getDateObject: {
      deep: !1,
      handler(e) {
        let i = [];
        if (this.field.options.sourcePath)
          for (const t in e) {
            const o = e[t], n = oe(o, this.field.options.sourcePath);
            if (n && typeof n == "object")
              for (const m in n) {
                let s = n[m];
                this.field.options.prefixProp && (s.prefixProp = oe(o, this.field.options.prefixProp)), this.field.options.groupProp && (s.groupProp = oe(o, this.field.options.groupProp)), i.push(s);
              }
          }
        this.onItemListChange(i), e && Object.keys(e).length > 0 || this.onItemListChange([]);
      }
    }
    // 'getFormRef().formVar.sql_join': {
    // 	deep: true,
    // 	handler(val) {
    // 		console.log('val', val);
    // 		this.dataObjectUpdate();
    // 	},
    // },
  },
  methods: {
    onItemListChange(e) {
      try {
        if (this.field.options.onItemListChange) {
          const t = P(this.field.options.onItemListChange, ["itemList"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    dataObjectUpdate() {
      let e = this.field.options && this.field.options.sourceField ? this.field.options.sourceField : [];
      if (this.field.options && this.field.options.sourceDynamic && this.getFormRef() && this.getFormRef().formVar && this.getFormRef().formVar[this.field.options.sourceDynamic]) {
        const t = this.getFormRef().formVar[this.field.options.sourceDynamic];
        e.push(...t);
      }
      let i = {};
      if (e && e.length > 0) {
        for (const t of e)
          if (this.refField && this.refField(t) && this.refField(t).fieldEditor) {
            const o = this.refField(t).fieldEditor, n = o.selectInput.itemSelected && Object.keys(o.selectInput.itemSelected).length > 0 ? o.selectInput.itemSelected : null;
            n && (i[t] = n);
          } else if (this.subFormItemFlag) {
            const o = t + "@row" + this.subFormRowId;
            if (this.refField && this.refField(o) && this.refField(o).fieldEditor) {
              const n = this.refField(o).fieldEditor, m = n.selectInput.itemSelected && Object.keys(n.selectInput.itemSelected).length > 0 ? n.selectInput.itemSelected : null;
              m && (i[o] = m);
            }
          }
      }
      return i;
    },
    getValueSelect(e) {
      return e && e.value ? e.value : e;
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Pd(e, i, t, o, n, m) {
  const s = Ni, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        class: "full-width-input",
        clearable: e.field.options.clearable,
        filterable: e.builderStatus ? !1 : e.field.options.filterable,
        "allow-create": e.field.options.allowCreate,
        "default-first-option": e.allowDefaultFirstOption,
        disabled: e.field.options.disabled,
        placeholder: e.field.options.placeholder || "Please Select",
        size: e.widgetSize,
        "data-object": e.getDateObject,
        "fixed-options": e.field.options.dataOptions || void 0,
        "prefix-prop": e.field.options.prefixProp,
        "space-char": e.field.options.spaceChar,
        "sql-tag": e.field.options.sqlTag,
        "system-field-addon": e.field.options.systemFieldAddon,
        path: e.field.options.sourcePath,
        "group-field": e.field.options.groupProp,
        "value-field": e.field.options.valueProp,
        "label-field": e.field.options.labelProp || [],
        "label-template": e.field.options.labelCustom,
        multiple: e.field.options.multiple,
        "multiple-limit": e.field.options.multipleLimit ? e.field.options.multipleLimit : void 0,
        onClear: e.handleOnClear,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onChange: e.handleChangeEvent
      }, null, 8, ["modelValue", "clearable", "filterable", "allow-create", "default-first-option", "disabled", "placeholder", "size", "data-object", "fixed-options", "prefix-prop", "space-char", "sql-tag", "system-field-addon", "path", "group-field", "value-field", "label-field", "label-template", "multiple", "multiple-limit", "onClear", "onFocus", "onBlur", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const $d = /* @__PURE__ */ I(Od, [["render", Pd], ["__scopeId", "data-v-c4a11139"]]), Ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $d
}, Symbol.toStringTag, { value: "Module" })), Ld = C({
  name: "select-sql-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
    // SdCrudSelectSubForm,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? typeof this.fieldModel == "string" && this.fieldModel !== "" ? this.string2Json(this.fieldModel) : typeof this.fieldModel == "object" && Object.keys(this.fieldModel).length > 0 ? this.fieldModel : null : null;
      },
      set(e) {
        e != null ? typeof e == "string" && e !== "" ? this.setFieldValue(this.string2Json(e)) : typeof e == "object" && Object.keys(e).length > 0 ? this.setFieldValue(e) : this.setFieldValue(null) : this.setFieldValue(null);
      }
    },
    allowDefaultFirstOption() {
      return !!this.field.options.filterable && !!this.field.options.allowCreate;
    },
    form_license() {
      return this.globalUserState && this.globalUserState.connectInfo && this.globalUserState.connectInfo.register_id ? this.globalUserState.connectInfo.register_id : "";
    },
    params() {
      return this.getFormRef() && this.getFormRef().formParams ? this.getFormRef().formParams : this.formParams ? this.formParams : {};
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  data() {
    return {};
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function jd(e, i, t, o, n, m) {
  const s = Oe, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        placeholder: e.field.options.placeholder || void 0,
        size: e.widgetSize,
        disabled: e.field.options.disabled,
        clearable: e.field.options.clearable,
        filterable: e.builderStatus ? !1 : e.field.options.filterable,
        "allow-create": e.field.options.allowCreate,
        "default-first-option": e.allowDefaultFirstOption,
        multiple: e.field.options.multiple,
        "multiple-limit": e.field.options.multipleLimit || void 0,
        "provider-type": "SQL",
        "form-id": e.field.options.sqlId || "",
        limit: e.field.options.limit || 20,
        "form-btn-enable": !1,
        "enable-object-type": !0,
        "value-field": e.field.options.valueFieldSql || "_id",
        "label-field": e.field.options.labelFieldSql || [],
        "search-field": e.field.options.searchFieldSql || [],
        "label-template": e.field.options.labelTemplateSql,
        "options-template": e.field.options.optionsTemplateSql,
        "parent-id": e.field.options.parentId || "",
        "value-object-id": e.field.options.valueObjectId,
        params: e.params,
        "build-state": e.builderStatus,
        onClear: e.handleOnClear,
        onChange: e.handleChangeEvent,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        "user-state": e.globalUserState
      }, null, 8, ["modelValue", "placeholder", "size", "disabled", "clearable", "filterable", "allow-create", "default-first-option", "multiple", "multiple-limit", "form-id", "limit", "value-field", "label-field", "search-field", "label-template", "options-template", "parent-id", "value-object-id", "params", "build-state", "onClear", "onChange", "onFocus", "onBlur", "user-state"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Dd = /* @__PURE__ */ I(Ld, [["render", jd]]), Td = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Dd
}, Symbol.toStringTag, { value: "Module" })), Vd = C({
  name: "side-menu-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
    // SdUiMenu,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  beforeCreate() {
  },
  data() {
    return {
      isDark: H()
    };
  },
  computed: {
    dataProvider() {
      if ((this.field.options.where || this.field.options.orderBy) && this.field.options.formId) {
        const e = {
          providerId: this.field.options.formId,
          providerType: "FORM"
        };
        return e.options = {}, this.field.options.where && (e.options.where = this.field.options.where), this.field.options.orderBy && (e.options.orderBy = this.field.options.orderBy), e;
      } else
        return;
    },
    showWhenParent() {
      if (this.field.options.showWhenParent && !this.builderStatus) {
        const e = this.getFormRef();
        let i = "";
        return e && e.formParams ? i = this.getObjectByPath(e.formParams, this.field.options.parentPath) || "" : i = this.getObjectByPath(this.formParams, this.field.options.parentPath) || "", !!i;
      } else
        return !0;
    }
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  methods: {
    clickEvent(e, i) {
      try {
        return this.field.options.clickEvent ? new Function("row", "index", ...z, this.field.options.clickEvent).call(this, e, i) : !0;
      } catch (t) {
        return this.alert(t.message, "warning"), !1;
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Ud(e, i, t, o, n, m) {
  const s = Wi, u = $;
  return e.showWhenParent ? (l(), a(u, {
    key: 0,
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    class: S(["datagrid-container"]),
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(s, {
        ref: "fieldEditor",
        key: e.field.id,
        "form-id": e.field.options.formId,
        "provider-type": e.field.options.providerType || "FORM",
        "data-provider": e.dataProvider,
        "parent-id": e.parentId,
        params: e.params,
        "parent-path": e.parentPath,
        "icon-field": e.field.options.iconField || void 0,
        "label-field": e.field.options.labelOneField || void 0,
        "path-field": e.field.options.pathField || void 0,
        "role-field": e.field.options.roleField || void 0,
        "sub-menu-field": e.field.options.subMenuField || void 0,
        "sub-menu-prefix": e.field.options.subMenuPrefix || void 0,
        "bg-color": e.field.options.bgMenuColor || void 0,
        "text-color": e.field.options.textColor || void 0,
        "border-color": e.field.options.borderColor || void 0,
        "class-interaction": e.field.options.classInteraction || void 0,
        "default-active": e.field.options.defaultActive || void 0,
        "expand-default": e.field.options.expandDefault || void 0,
        "expand-height": e.field.options.expandHeight || void 0,
        "margin-top": e.field.options.marginTop || void 0,
        "menu-width": e.field.options.menuWidth || void 0,
        top: e.field.options.top || void 0,
        left: e.field.options.left || void 0,
        "border-disable": !!e.field.options.borderDisable,
        "expand-enable": !!e.field.options.expandEnable,
        "fixed-enable": !!e.field.options.fixedEnable,
        "unique-opened": !!e.field.options.uniqueOpened,
        "limit-row": e.field.options.limitRow || 30,
        trigger: e.field.options.viewTrigger || void 0,
        "custom-value": e.field.options.customValue || void 0,
        "click-event": e.field.options.clickEvent ? e.clickEvent : void 0,
        "user-state": e.globalUserState,
        "build-state": e.builderStatus
      }, null, 8, ["form-id", "provider-type", "data-provider", "parent-id", "params", "parent-path", "icon-field", "label-field", "path-field", "role-field", "sub-menu-field", "sub-menu-prefix", "bg-color", "text-color", "border-color", "class-interaction", "default-active", "expand-default", "expand-height", "margin-top", "menu-width", "top", "left", "border-disable", "expand-enable", "fixed-enable", "unique-opened", "limit-row", "trigger", "custom-value", "click-event", "user-state", "build-state"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"])) : b("", !0);
}
const Bd = /* @__PURE__ */ I(Vd, [["render", Ud], ["__scopeId", "data-v-375e200e"]]), zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bd
}, Symbol.toStringTag, { value: "Module" })), Ad = C({
  name: "slider-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null) {
          const e = Number(this.fieldModel);
          return isNaN(e) ? 0 : e;
        } else
          return 0;
      },
      set(e) {
        if (e != null) {
          const i = Number(e);
          isNaN(i) ? this.setFieldValue(0) : this.setFieldValue(i);
        } else
          this.setFieldValue(0);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Nd(e, i, t, o, n, m) {
  const s = kt, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        disabled: e.field.options.disabled,
        "show-stops": e.field.options.showStops,
        min: e.field.options.min,
        max: e.field.options.max,
        step: e.field.options.step,
        range: e.field.options.range,
        vertical: e.field.options.vertical,
        onChange: e.handleChangeEvent
      }, null, 8, ["modelValue", "disabled", "show-stops", "min", "max", "step", "range", "vertical", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Wd = /* @__PURE__ */ I(Ad, [["render", Nd], ["__scopeId", "data-v-01943245"]]), Hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wd
}, Symbol.toStringTag, { value: "Module" })), qd = C({
  name: "smart-card-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $,
    SdSmartCard: Ze
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  },
  setup() {
    return { fieldEditor: R(null) };
  },
  methods: {
    // รัน user JS ของ event ผ่าน sandbox (pattern เดียวกับ scan-code-ui / button-ui)
    runUserEvent(e, i, t) {
      if (e)
        try {
          const n = P(e, i).call(this, ...t);
          n && typeof n.then == "function" && n.catch((m) => this.alert(m?.message || String(m), "warning"));
        } catch (o) {
          this.alert(o.message, "warning");
        }
    },
    handleCardRead(e, i, t) {
      this.runUserEvent(this.field.options.onCardRead, ["data", "ok", "error"], [e, i, t]);
    },
    handleCardRemoved() {
      this.runUserEvent(this.field.options.onCardRemoved, [], []);
    },
    handleReaderConnected() {
      this.runUserEvent(this.field.options.onReaderConnected, [], []);
    },
    handleReaderDisconnected() {
      this.runUserEvent(this.field.options.onReaderDisconnected, [], []);
    },
    handleConnected() {
      this.runUserEvent(this.field.options.onConnected, [], []);
    },
    handleDisconnected() {
      this.runUserEvent(this.field.options.onDisconnected, [], []);
    }
  }
});
function Gd(e, i, t, o, n, m) {
  const s = V, u = ue, p = Ze, g = $;
  return l(), a(g, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), c("div", {
        ref: "fieldEditor",
        key: e.field.id
      }, [
        e.builderStatus ? (l(), a(u, {
          key: 0,
          type: "info",
          effect: "plain",
          "disable-transitions": ""
        }, {
          default: f(() => [
            h(s, {
              "icon-name": "card-pos",
              class: "mr-1"
            }),
            E(" Smart card listener" + F(e.field.options.name ? ": " + e.field.options.name : ""), 1)
          ]),
          _: 1
        })) : b("", !0),
        h(p, {
          host: e.field.options.host,
          port: e.field.options.port,
          token: e.field.options.token,
          secure: e.field.options.secure,
          reconnect: e.field.options.reconnect,
          indicator: e.field.options.indicator,
          "indicator-position": e.field.options.indicatorCorner,
          "indicator-timeout": e.field.options.indicatorTimeout,
          disabled: e.builderStatus || !!e.field.options.hidden || !!e.field.options.disabled,
          onCardRead: e.handleCardRead,
          onCardRemoved: e.handleCardRemoved,
          onReaderConnected: e.handleReaderConnected,
          onReaderDisconnected: e.handleReaderDisconnected,
          onConnected: e.handleConnected,
          onDisconnected: e.handleDisconnected
        }, null, 8, ["host", "port", "token", "secure", "reconnect", "indicator", "indicator-position", "indicator-timeout", "disabled", "onCardRead", "onCardRemoved", "onReaderConnected", "onReaderDisconnected", "onConnected", "onDisconnected"])
      ]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Jd = /* @__PURE__ */ I(qd, [["render", Gd]]), Kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jd
}, Symbol.toStringTag, { value: "Module" })), Zd = C({
  name: "statistic-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
    // SdHtmlEditor,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  beforeCreate() {
  },
  computed: {},
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {},
  beforeUnmount() {
    this.unregisterFromRefList();
  }
}), Qd = { style: { display: "inline-flex", "align-items": "center" } }, Yd = { key: 1 }, Xd = { key: 1 }, _d = {
  key: 0,
  class: "statistic-footer"
}, xd = { class: "footer-item" };
function ea(e, i, t, o, n, m) {
  const s = V, u = ne, p = Ot, g = we, w = $;
  return l(), a(w, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), c("div", {
        class: S(["statistic-card", [e.field.options.displayType, e.field.options.headerType || "", "paragraph"]]),
        ref: "fieldEditor",
        key: e.field.id
      }, [
        h(p, {
          value: e.field.options.valueNum,
          formatter: e.field.options.formatter || void 0,
          "decimal-separator": e.field.options.decimalSeparator,
          "group-separator": e.field.options.groupSeparator,
          precision: e.field.options.precision,
          style: j(`width: ${e.field.options.width || 100}px;`)
        }, Y({
          title: f(() => [
            v("div", Qd, [
              E(F(e.field.options.title) + " ", 1),
              e.field.options.labelTooltip ? (l(), a(u, {
                key: 0,
                content: e.field.options.labelTooltip
              }, {
                default: f(() => [
                  h(s, {
                    "icon-name": e.field.options.labelIconClass ? e.field.options.labelIconClass : "el-info-filled",
                    class: "ml-1"
                  }, null, 8, ["icon-name"])
                ]),
                _: 1
              }, 8, ["content"])) : (l(), c(y, { key: 1 }, [
                e.field.options.labelIconClass ? (l(), a(s, {
                  key: 0,
                  "icon-name": e.field.options.labelIconClass
                }, null, 8, ["icon-name"])) : b("", !0)
              ], 64))
            ])
          ]),
          _: 2
        }, [
          e.field.options.prefixIcon || e.field.options.prefixText ? {
            name: "prefix",
            fn: f(() => [
              e.field.options.prefixIcon ? (l(), a(s, {
                key: 0,
                "icon-name": e.field.options.prefixIcon,
                class: "mr-2"
              }, null, 8, ["icon-name"])) : b("", !0),
              e.field.options.prefixText ? (l(), c("span", Yd, F(e.field.options.prefixText), 1)) : b("", !0)
            ]),
            key: "0"
          } : void 0,
          e.field.options.suffixIcon || e.field.options.suffixText ? {
            name: "suffix",
            fn: f(() => [
              e.field.options.suffixIcon ? (l(), a(s, {
                key: 0,
                "icon-name": e.field.options.suffixIcon,
                class: "ml-1"
              }, null, 8, ["icon-name"])) : b("", !0),
              i[1] || (i[1] = E()),
              e.field.options.suffixText ? (l(), c("span", Xd, F(e.field.options.suffixText), 1)) : b("", !0)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["value", "formatter", "decimal-separator", "group-separator", "precision", "style"]),
        e.field.options.footer ? (l(), c("div", _d, [
          v("div", xd, [
            h(g, {
              modelValue: e.field.options.footer,
              "onUpdate:modelValue": i[0] || (i[0] = (L) => e.field.options.footer = L),
              mode: "mini",
              readonly: !0,
              "user-state": e.globalUserState
            }, null, 8, ["modelValue", "user-state"])
          ])
        ])) : b("", !0)
      ], 2))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"]);
}
const ia = /* @__PURE__ */ I(Zd, [["render", ea], ["__scopeId", "data-v-a66186a8"]]), ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ia
}, Symbol.toStringTag, { value: "Module" })), oa = C({
  name: "step-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  data() {
    return {
      defaultValue: 0
    };
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  computed: {
    direction() {
      return this.field.options.direction ? this.field.options.direction : "horizontal";
    },
    menuList() {
      return this.field.options.stepList && Object.keys(this.field.options.stepList).length > 0 ? this.field.options.stepList : [];
    },
    valField() {
      const e = this.field.options.valField || null;
      return this.refList[e] ? this.refList[e].getValue() : 0;
    }
  },
  watch: {
    valField: {
      deep: !1,
      handler(e) {
        this.defaultValue = e;
      }
    }
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {
    next() {
      this.defaultValue++;
    },
    previous() {
      this.defaultValue--;
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function la(e, i, t, o, n, m) {
  const s = $t, u = Pt, p = $;
  return l(), a(p, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(u, {
        ref: "fieldEditor",
        key: e.field.id,
        active: Number(e.defaultValue) ? Number(e.defaultValue) : 0,
        "align-center": !!e.field.options.alignCenter,
        simple: !!e.field.options.simple,
        space: e.field.options.space ? e.field.options.space : "",
        direction: e.field.options.direction ? e.field.options.direction : "horizontal",
        "process-status": e.field.options.processStatus ? e.field.options.processStatus : "process",
        "finish-status": e.field.options.finishStatus ? e.field.options.finishStatus : "success"
      }, {
        default: f(() => [
          (l(!0), c(y, null, T(e.field.options.stepList, (g, w) => (l(), a(s, {
            title: g.label,
            description: g.desc,
            icon: g.icon
          }, null, 8, ["title", "description", "icon"]))), 256))
        ]),
        _: 1
      }, 8, ["active", "align-center", "simple", "space", "direction", "process-status", "finish-status"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const na = /* @__PURE__ */ I(oa, [["render", la], ["__scopeId", "data-v-36741146"]]), sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: na
}, Symbol.toStringTag, { value: "Module" })), ra = C({
  name: "svg-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  data() {
    return {
      uploadBtnHidden: !!this.fieldValue,
      dialogVisible: !1,
      dialogImageUrl: ""
    };
  },
  watch: {
    fieldValue: {
      deep: !1,
      handler(e) {
        this.commitFile(e);
      }
    }
  },
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? String(this.fieldModel) : "";
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : (this.fileList = [], this.setFieldValue(null));
      }
    }
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {
    commitFile(e) {
      if (e) {
        this.uploadBtnHidden = !0;
        const i = We(e);
        this.fileList = [
          {
            name: "svg-icon.svg",
            url: `data:image/svg+xml;charset=UTF-8,${i}`
          }
        ];
      } else
        this.fileList = [], this.uploadBtnHidden = !1;
    },
    beforeUpload(e) {
      return e.type !== "image/svg+xml" ? (x.error("Avatar picture must be SVG format!"), !1) : e.size / 1024 / 1024 > 1 ? (x.error("Avatar picture size can not exceed 1MB!"), !1) : !0;
    },
    async handleCardPreview(e) {
      this.dialogImageUrl = e.url, this.dialogVisible = !0;
    },
    async handleChange(e, i) {
      if (e.url) {
        const o = await (await fetch(e.url).then((n) => n.blob())).text();
        this.fieldValue = o, this.handleChangeEvent(o), this.uploadBtnHidden = !0;
      } else
        this.handleChangeEvent(null);
    },
    handleRemove() {
      this.fieldValue = "", this.handleChangeEvent(null), this.uploadBtnHidden = !1;
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
}), da = ["src"];
function aa(e, i, t, o, n, m) {
  const s = Z("Plus"), u = be, p = Pe, g = ei, w = M;
  return l(), a(w, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(p, {
        ref: "fieldEditor",
        action: "#",
        "auto-upload": !1,
        class: S([{ hideUploadDiv: e.uploadBtnHidden }, "avatar-uploader"]),
        disabled: e.field.options.disabled || !!e.builderStatus,
        "list-type": "picture-card",
        "file-list": e.fileList,
        "onUpdate:fileList": i[0] || (i[0] = (L) => e.fileList = L),
        limit: 1,
        "on-preview": e.handleCardPreview,
        "on-change": e.handleChange,
        "on-remove": e.handleRemove,
        "before-upload": e.beforeUpload
      }, {
        tip: f(() => [...i[2] || (i[2] = [
          v("div", { class: "el-upload__tip" }, "SVG files with a size less than 1MB", -1)
        ])]),
        default: f(() => [
          h(u, null, {
            default: f(() => [
              h(s)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class", "disabled", "file-list", "on-preview", "on-change", "on-remove", "before-upload"]),
      h(g, {
        modelValue: e.dialogVisible,
        "onUpdate:modelValue": i[1] || (i[1] = (L) => e.dialogVisible = L)
      }, {
        default: f(() => [
          v("img", {
            "w-full": "",
            src: e.dialogImageUrl,
            alt: "Preview Icon"
          }, null, 8, da)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const fa = /* @__PURE__ */ I(ra, [["render", aa], ["__scopeId", "data-v-46c91e56"]]), ua = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: fa
}, Symbol.toStringTag, { value: "Module" })), pa = C({
  name: "svg-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function ma(e, i, t, o, n, m) {
  const s = Hi, u = V, p = $;
  return l(), a(p, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), c("div", {
        ref: "fieldEditor",
        key: e.field.id,
        class: S({ paragraph: !!e.field.options.paragraph }),
        style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left", marginBottom: e.field.options.marginBottom + "px" })
      }, [
        v("span", {
          class: S([e.field.options.sizeClass ? e.field.options.sizeClass : "text-6"])
        }, [
          e.field.options.svgData ? (l(), c(y, { key: 0 }, [
            e.field.options.svgValue ? (l(), a(s, {
              key: 0,
              "svg-data": e.field.options.svgValue
            }, null, 8, ["svg-data"])) : b("", !0)
          ], 64)) : (l(), c(y, { key: 1 }, [
            e.field.options.svgValue ? (l(), a(u, {
              key: 0,
              "icon-name": e.field.options.svgValue
            }, null, 8, ["icon-name"])) : b("", !0)
          ], 64))
        ], 2)
      ], 6))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const ha = /* @__PURE__ */ I(pa, [["render", ma], ["__scopeId", "data-v-f8779646"]]), ca = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ha
}, Symbol.toStringTag, { value: "Module" })), ba = C({
  name: "switch-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? !!this.fieldModel : !1;
      },
      set(e) {
        e != null ? this.setFieldValue(!!e) : this.setFieldValue(!1);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
}), ga = { class: "custom-active-action" }, Fa = { class: "custom-active-action" };
function ya(e, i, t, o, n, m) {
  const s = V, u = Et, p = M;
  return l(), a(p, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(u, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (g) => e.fieldValue = g),
        disabled: e.field.options.disabled,
        "active-text": e.field.options.activeText,
        "inactive-text": e.field.options.inactiveText,
        "active-value": !0,
        "inactive-value": !1,
        "inline-prompt": e.field.options.inlinePrompt,
        width: e.field.options.switchWidth,
        style: j({ "--el-switch-on-color": e.field.options.activeColor, "--el-switch-off-color": e.field.options.inactiveColor }),
        onChange: e.handleChangeEvent
      }, {
        "active-action": f(() => [
          v("span", ga, [
            h(s, {
              "icon-name": e.field.options.activeIcon
            }, null, 8, ["icon-name"])
          ])
        ]),
        "inactive-action": f(() => [
          v("span", Fa, [
            h(s, {
              "icon-name": e.field.options.inactiveIcon
            }, null, 8, ["icon-name"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "active-text", "inactive-text", "inline-prompt", "width", "style", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const va = /* @__PURE__ */ I(ba, [["render", ya], ["__scopeId", "data-v-60c683b8"]]), wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: va
}, Symbol.toStringTag, { value: "Module" })), Ca = C({
  name: "tags-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? typeof this.fieldModel == "string" && this.fieldModel !== "" ? this.string2Json(this.fieldModel) : typeof this.fieldModel == "object" && Object.values(this.fieldModel).length > 0 ? this.fieldModel : null : null;
      },
      set(e) {
        if (e != null)
          if (typeof this.fieldModel == "string") {
            const i = this.fieldModel ? this.string2Json(this.fieldModel) : [];
            i.push(...e), this.setFieldValue(i);
          } else typeof e == "object" && this.setFieldValue(e);
        else
          this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
}), Sa = { key: 1 }, Ia = { key: 1 };
function Ma(e, i, t, o, n, m) {
  const s = V, u = Lt, p = M;
  return l(), a(p, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(u, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (g) => e.fieldValue = g),
        disabled: e.field.options.disabled,
        readonly: e.field.options.readonly,
        size: e.widgetSize,
        placeholder: e.field.options.placeholder,
        clearable: e.field.options.clearable,
        maxlength: e.field.options.maxLength ? e.field.options.maxLength : void 0,
        max: e.field.options.max ? e.field.options.max : void 0,
        "tag-type": e.field.options.tagType,
        "tag-effect": e.field.options.tagEffect,
        trigger: e.field.options.trigger,
        draggable: e.field.options.draggable,
        onAddTag: e.handleAddTagEvent,
        onRemoveTag: e.handleRemoveTagEvent,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onInput: e.handleInputCustomEvent,
        onChange: e.handleChangeEvent
      }, Y({ _: 2 }, [
        e.field.options.prefixIcon || e.field.options.prefixText ? {
          name: "prefix",
          fn: f(() => [
            e.field.options.prefixIcon ? (l(), a(s, {
              key: 0,
              "icon-name": e.field.options.prefixIcon,
              class: "mr-1"
            }, null, 8, ["icon-name"])) : b("", !0),
            e.field.options.prefixText ? (l(), c("span", Sa, F(e.field.options.prefixText), 1)) : b("", !0)
          ]),
          key: "0"
        } : void 0,
        e.field.options.suffixIcon || e.field.options.suffixText ? {
          name: "suffix",
          fn: f(() => [
            e.field.options.suffixIcon ? (l(), a(s, {
              key: 0,
              "icon-name": e.field.options.suffixIcon
            }, null, 8, ["icon-name"])) : b("", !0),
            i[1] || (i[1] = E()),
            e.field.options.suffixText ? (l(), c("span", Ia, F(e.field.options.suffixText), 1)) : b("", !0)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["modelValue", "disabled", "readonly", "size", "placeholder", "clearable", "maxlength", "max", "tag-type", "tag-effect", "trigger", "draggable", "onAddTag", "onRemoveTag", "onFocus", "onBlur", "onInput", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Ra = /* @__PURE__ */ I(Ca, [["render", Ma]]), ka = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ra
}, Symbol.toStringTag, { value: "Module" })), Oa = C({
  name: "text-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? String(this.fieldModel) : null;
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    },
    inputType() {
      return this.field.options.type === "number" ? "text" : this.field.options.type;
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Pa(e, i, t, o, n, m) {
  const s = V, u = q, p = ye, g = M;
  return l(), a(g, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(p, {
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (w) => e.fieldValue = w),
        disabled: e.field.options.disabled,
        readonly: e.field.options.readonly,
        size: e.widgetSize,
        class: "hide-spin-button",
        type: e.inputType,
        "show-password": e.field.options.showPassword,
        placeholder: e.field.options.placeholder,
        clearable: e.field.options.clearable,
        minlength: e.field.options.minLength,
        maxlength: e.field.options.maxLength,
        "show-word-limit": e.field.options.showWordLimit,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onInput: e.handleInputCustomEvent,
        onChange: e.handleChangeEvent
      }, Y({
        suffix: f(() => [
          h(s, {
            "icon-name": e.field.options.suffixIcon
          }, null, 8, ["icon-name"])
        ]),
        _: 2
      }, [
        e.field.options.prefixText ? {
          name: "prepend",
          fn: f(() => [
            E(F(e.field.options.prefixText), 1)
          ]),
          key: "0"
        } : void 0,
        e.field.options.appendButton || e.field.options.suffixText ? {
          name: "append",
          fn: f(() => [
            !e.field.options.appendButton && e.field.options.suffixText ? (l(), c(y, { key: 0 }, [
              E(F(e.field.options.suffixText), 1)
            ], 64)) : (l(), a(u, {
              key: 1,
              disabled: e.field.options.disabled || e.field.options.appendButtonDisabled,
              onClick: U(e.emitAppendButtonClick, ["prevent"])
            }, {
              default: f(() => [
                e.field.options.buttonIcon ? (l(), a(s, {
                  key: 0,
                  "icon-name": e.field.options.buttonIcon,
                  class: "mr-1"
                }, null, 8, ["icon-name"])) : b("", !0),
                E(" " + F(e.field.options.suffixText), 1)
              ]),
              _: 1
            }, 8, ["disabled", "onClick"]))
          ]),
          key: "1"
        } : void 0,
        e.field.options.prefixIcon ? {
          name: "prefix",
          fn: f(() => [
            h(s, {
              "icon-name": e.field.options.prefixIcon
            }, null, 8, ["icon-name"])
          ]),
          key: "2"
        } : void 0
      ]), 1032, ["modelValue", "disabled", "readonly", "size", "type", "show-password", "placeholder", "clearable", "minlength", "maxlength", "show-word-limit", "onFocus", "onBlur", "onInput", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const $a = /* @__PURE__ */ I(Oa, [["render", Pa]]), Ea = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $a
}, Symbol.toStringTag, { value: "Module" })), La = C({
  name: "text-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  beforeCreate() {
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function ja(e, i, t, o, n, m) {
  const s = V, u = ne, p = jt, g = $;
  return l(), a(g, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "display-style": "flex",
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), c("div", {
        ref: "fieldEditor",
        key: e.field.id,
        class: S({ paragraph: !!e.field.options.paragraph }),
        style: j([{ display: "flex" }, { textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left", marginBottom: e.field.options.marginBottom + "px" }])
      }, [
        e.field.options.labelIconClass && e.field.options.labelIconPosition === "front" ? (l(), c(y, { key: 0 }, [
          e.field.options.labelTooltip ? (l(), a(u, {
            key: 0,
            content: e.field.options.labelTooltip
          }, {
            default: f(() => [
              h(s, {
                "icon-name": e.field.options.labelIconClass
              }, null, 8, ["icon-name"])
            ]),
            _: 1
          }, 8, ["content"])) : (l(), a(s, {
            key: 1,
            "icon-name": e.field.options.labelIconClass
          }, null, 8, ["icon-name"]))
        ], 64)) : b("", !0),
        h(p, {
          truncated: e.field.options.wrapText ? void 0 : !0,
          "line-clamp": e.field.options.wrapText ? e.field.options.wrapText : void 0,
          style: j({ fontSize: e.field.options.fontSize + "px", color: e.field.options.fontColor }),
          class: S({ underline: !!e.field.options.underline, bold: !!e.field.options.bold, italic: !!e.field.options.italic })
        }, {
          default: f(() => [
            E(F(e.field.options.content), 1)
          ]),
          _: 1
        }, 8, ["truncated", "line-clamp", "style", "class"]),
        e.field.options.labelIconClass && e.field.options.labelIconPosition === "rear" ? (l(), c(y, { key: 1 }, [
          e.field.options.labelTooltip ? (l(), a(u, {
            key: 0,
            content: e.field.options.labelTooltip
          }, {
            default: f(() => [
              h(s, {
                "icon-name": e.field.options.labelIconClass
              }, null, 8, ["icon-name"])
            ]),
            _: 1
          }, 8, ["content"])) : (l(), a(s, {
            key: 1,
            "icon-name": e.field.options.labelIconClass
          }, null, 8, ["icon-name"]))
        ], 64)) : b("", !0)
      ], 6))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Da = /* @__PURE__ */ I(La, [["render", ja], ["__scopeId", "data-v-b76cd20b"]]), Ta = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Da
}, Symbol.toStringTag, { value: "Module" })), Va = C({
  name: "textarea-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? String(this.fieldModel) : null;
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Ua(e, i, t, o, n, m) {
  const s = ye, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        type: "textarea",
        ref: "fieldEditor",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        disabled: e.field.options.disabled,
        readonly: e.field.options.readonly,
        size: e.widgetSize,
        autosize: e.field.options.autoSize,
        placeholder: e.field.options.placeholder,
        rows: e.field.options.rows,
        minlength: e.field.options.minLength,
        maxlength: e.field.options.maxLength,
        "show-word-limit": e.field.options.showWordLimit,
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onInput: e.handleInputCustomEvent,
        onChange: e.handleChangeEvent
      }, null, 8, ["modelValue", "disabled", "readonly", "size", "autosize", "placeholder", "rows", "minlength", "maxlength", "show-word-limit", "onFocus", "onBlur", "onInput", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Ba = /* @__PURE__ */ I(Va, [["render", Ua]]), za = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ba
}, Symbol.toStringTag, { value: "Module" })), Aa = C({
  name: "time-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null)
          return String(this.fieldModel);
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.field.options.initCurrent && !this.fieldValue && this.setFieldValue(fe().format("HH:mm:ss")), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Na(e, i, t, o, n, m) {
  const s = ni, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      v("div", {
        class: S([e.field.options.autoFullWidth ? "auto-full-width" : ""])
      }, [
        h(s, {
          ref: "fieldEditor",
          modelValue: e.fieldValue,
          "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
          class: S([e.field.options.autoFullWidth ? "auto-full-width" : ""]),
          disabled: e.field.options.disabled,
          readonly: e.field.options.readonly,
          size: e.widgetSize,
          "arrow-control": e.field.options.arrowControl,
          clearable: e.field.options.clearable,
          editable: e.field.options.editable,
          format: e.field.options.format,
          "value-format": "HH:mm:ss",
          placeholder: e.field.options.placeholder || "Select Time",
          onFocus: e.handleFocusCustomEvent,
          onBlur: e.handleBlurCustomEvent,
          onChange: e.handleChangeEvent
        }, null, 8, ["modelValue", "class", "disabled", "readonly", "size", "arrow-control", "clearable", "editable", "format", "placeholder", "onFocus", "onBlur", "onChange"])
      ], 2)
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Wa = /* @__PURE__ */ I(Aa, [["render", Na], ["__scopeId", "data-v-45369194"]]), Ha = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wa
}, Symbol.toStringTag, { value: "Module" })), qa = C({
  name: "time-range-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        return this.fieldModel !== void 0 && this.fieldModel !== null ? typeof this.fieldModel == "string" && this.fieldModel !== "" ? this.string2Json(this.fieldModel) : typeof this.fieldModel == "object" && Object.values(this.fieldModel).length > 0 ? this.fieldModel : null : null;
      },
      set(e) {
        e != null ? typeof e == "string" && e !== "" ? this.setFieldValue(this.string2Json(e)) : typeof e == "object" && Object.values(e).length > 0 ? this.setFieldValue(e) : this.setFieldValue(null) : this.setFieldValue(null);
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Ga(e, i, t, o, n, m) {
  const s = ni, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      h(s, {
        ref: "fieldEditor",
        "is-range": "",
        modelValue: e.fieldValue,
        "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
        class: S([e.field.options.autoFullWidth ? "full-width-input" : ""]),
        disabled: e.field.options.disabled,
        readonly: e.field.options.readonly,
        size: e.widgetSize,
        "range-separator": e.field.options.rangeSeparator,
        clearable: e.field.options.clearable,
        editable: e.field.options.editable,
        format: e.field.options.format,
        "value-format": "HH:mm:ss",
        "start-placeholder": e.field.options.startPlaceholder || "Start Time",
        "end-placeholder": e.field.options.endPlaceholder || "End Time",
        onFocus: e.handleFocusCustomEvent,
        onBlur: e.handleBlurCustomEvent,
        onChange: e.handleChangeEvent
      }, null, 8, ["modelValue", "class", "disabled", "readonly", "size", "range-separator", "clearable", "editable", "format", "start-placeholder", "end-placeholder", "onFocus", "onBlur", "onChange"])
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Ja = /* @__PURE__ */ I(qa, [["render", Ga], ["__scopeId", "data-v-b059ddb1"]]), Ka = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ja
}, Symbol.toStringTag, { value: "Module" })), Za = C({
  name: "time-select-input",
  typeName: "FormField",
  components: {
    FormItemWrapper: M
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel"],
  computed: {
    fieldValue: {
      get() {
        if (this.fieldModel !== void 0 && this.fieldModel !== null)
          return String(this.fieldModel);
      },
      set(e) {
        e != null ? this.setFieldValue(String(e)) : this.setFieldValue(null);
      }
    },
    minTime() {
      if (this.field.options.minTime) {
        const e = this.refField(this.field.options.minTime);
        if (e) {
          const i = e.getValue();
          return i && typeof i == "string" ? i : void 0;
        } else {
          if (this.subFormItemFlag) {
            const i = this.field.options.minTime + "@row" + this.subFormRowId;
            if (this.refList[i]) {
              const t = this.refList[i].getValue();
              return t && typeof t == "string" ? t : void 0;
            }
          }
          return this.field.options.minTime;
        }
      }
    },
    maxTime() {
      if (this.field.options.maxTime) {
        const e = this.refField(this.field.options.maxTime);
        if (e) {
          const i = e.getValue();
          return i && typeof i == "string" ? i : void 0;
        } else {
          if (this.subFormItemFlag) {
            const i = this.field.options.maxTime + "@row" + this.subFormRowId;
            if (this.refList[i]) {
              const t = this.refList[i].getValue();
              return t && typeof t == "string" ? t : void 0;
            }
          }
          return this.field.options.maxTime;
        }
      }
    }
  },
  beforeCreate() {
  },
  created() {
    this.initFieldModel(), this.initEventHandler(), this.buildFieldRules(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function Qa(e, i, t, o, n, m) {
  const s = Dt, u = M;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      v("div", {
        class: S([e.field.options.autoFullWidth ? "auto-full-width" : ""])
      }, [
        h(s, {
          ref: "fieldEditor",
          modelValue: e.fieldValue,
          "onUpdate:modelValue": i[0] || (i[0] = (p) => e.fieldValue = p),
          class: S([e.field.options.autoFullWidth ? "auto-full-width" : ""]),
          disabled: e.field.options.disabled,
          readonly: e.field.options.readonly,
          size: e.widgetSize,
          clearable: e.field.options.clearable,
          editable: e.field.options.editable,
          format: e.field.options.format,
          "include-end-time": e.field.options.includeEndTime,
          effect: e.field.options.effect,
          start: e.field.options.start,
          end: e.field.options.end,
          step: e.field.options.step,
          "max-time": e.maxTime,
          "min-time": e.minTime,
          placeholder: e.field.options.placeholder || "Select Time",
          onFocus: e.handleFocusCustomEvent,
          onBlur: e.handleBlurCustomEvent,
          onChange: e.handleChangeEvent
        }, null, 8, ["modelValue", "class", "disabled", "readonly", "size", "clearable", "editable", "format", "include-end-time", "effect", "start", "end", "step", "max-time", "min-time", "placeholder", "onFocus", "onBlur", "onChange"])
      ], 2)
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const Ya = /* @__PURE__ */ I(Za, [["render", Qa], ["__scopeId", "data-v-365dcbe8"]]), Xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ya
}, Symbol.toStringTag, { value: "Module" })), _a = C({
  name: "tour-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $
    // SdHtmlEditor,
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  beforeCreate() {
  },
  computed: {},
  data() {
    return {
      isDark: H()
    };
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    return {
      fieldEditor: R(null)
    };
  },
  methods: {
    handleOnFinish() {
      try {
        if (this.field.options.onFinish) {
          const i = P(this.field.options.onFinish).call(this);
          i && typeof i.then == "function" && i.catch((t) => this.alert(t?.message || String(t), "warning"));
        }
      } catch (e) {
        this.alert(e.message, "warning");
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function xa(e, i, t, o, n, m) {
  const s = V, u = q, p = we, g = Vt, w = Tt, L = $;
  return l(), a(L, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    style: j({ textAlign: e.field.options.textAlign ? e.field.options.textAlign : "left", marginBottom: e.field.options.marginBottom + "px" }),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), c("div", {
        ref: "fieldEditor",
        key: e.field.id
      }, [
        h(u, {
          disabled: !!e.field.options.disabled,
          type: e.field.options.linkType,
          size: e.widgetSize,
          plain: !!e.field.options.plain,
          round: !!e.field.options.round,
          circle: !!e.field.options.circle,
          onClick: i[0] || (i[0] = U((r) => e.field.options.open = !0, ["prevent"]))
        }, {
          default: f(() => [
            e.field.options.prefixIcon ? (l(), a(s, {
              key: 0,
              "icon-name": e.field.options.prefixIcon
            }, null, 8, ["icon-name"])) : b("", !0),
            v("span", null, F(e.field.options.label), 1),
            e.field.options.suffixIcon ? (l(), a(s, {
              key: 1,
              "icon-name": e.field.options.suffixIcon,
              class: "ml-1"
            }, null, 8, ["icon-name"])) : b("", !0)
          ]),
          _: 1
        }, 8, ["disabled", "type", "size", "plain", "round", "circle"]),
        h(w, {
          modelValue: e.field.options.open,
          "onUpdate:modelValue": i[1] || (i[1] = (r) => e.field.options.open = r),
          mask: !!e.field.options.maskTour,
          type: e.field.options.tourType,
          "z-index": e.field.options.zIndex ? e.field.options.zIndex : void 0,
          onFinish: e.handleOnFinish
        }, Y({
          default: f(() => [
            e.field.options.steps ? (l(!0), c(y, { key: 0 }, T(e.field.options.steps, (r, d) => (l(), a(g, {
              target: e.refField(r.target)?.$el,
              title: r.title
            }, {
              default: f(() => [
                h(p, {
                  modelValue: r.content,
                  "onUpdate:modelValue": (k) => r.content = k,
                  mode: "mini",
                  readonly: !0,
                  "user-state": e.globalUserState
                }, null, 8, ["modelValue", "onUpdate:modelValue", "user-state"])
              ]),
              _: 2
            }, 1032, ["target", "title"]))), 256)) : b("", !0)
          ]),
          _: 2
        }, [
          e.field.options.indicators ? {
            name: "indicators",
            fn: f(({ current: r, total: d }) => [
              v("span", null, F(r + 1) + " / " + F(d), 1)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["modelValue", "mask", "type", "z-index", "onFinish"])
      ]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "style", "sub-form-row-id"]);
}
const ef = /* @__PURE__ */ I(_a, [["render", xa], ["__scopeId", "data-v-fbe88553"]]), tf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ef
}, Symbol.toStringTag, { value: "Module" })), of = C({
  name: "tree-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $,
    SdCrudTree: Qe
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  data() {
    return {
      isDark: H()
    };
  },
  computed: {
    // labelField editor เป็น multi → อาจได้ array; SdCrudTree ต้องการ string → ใช้ตัวแรก
    labelFieldStr() {
      const e = this.field.options.labelField;
      return Array.isArray(e) ? e[0] || "" : e || "";
    },
    showWhenParent() {
      if (this.field.options.showWhenParent && !this.builderStatus) {
        const e = this.getFormRef();
        let i = "";
        return e && e.formParams ? i = this.getObjectByPath(e.formParams, this.field.options.parentPath) || "" : i = this.getObjectByPath(this.formParams, this.field.options.parentPath) || "", !!i;
      } else
        return !0;
    }
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = A("formParams", {});
    return {
      fieldEditor: e,
      formParams: i
    };
  },
  methods: {
    insertBefore(e) {
      try {
        if (this.field.options.onInsertBefore) {
          const t = P(this.field.options.onInsertBefore, ["row"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    updateBefore(e) {
      try {
        if (this.field.options.onUpdateBefore) {
          const t = P(this.field.options.onUpdateBefore, ["row"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    viewBefore(e) {
      try {
        if (this.field.options.onViewBefore) {
          const t = P(this.field.options.onViewBefore, ["row"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    beforeSave(e) {
      try {
        if (this.field.options.onBeforeSave) {
          const t = P(this.field.options.onBeforeSave, ["row"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    afterDelete(e) {
      try {
        if (this.field.options.onAfterDelete) {
          const t = P(this.field.options.onAfterDelete, ["row"]).call(this, e);
          t && typeof t.then == "function" && t.catch((o) => this.alert(o?.message || String(o), "warning"));
        }
      } catch (i) {
        this.alert(i.message, "warning");
      }
    },
    allowDeleteFunc(e) {
      try {
        return this.field.options.allowDeleteFunc ? new Function("row", ...z, this.field.options.allowDeleteFunc).call(this, e) : !0;
      } catch (i) {
        return this.alert(i.message, "warning"), !1;
      }
    },
    clickEvent(e) {
      try {
        return this.field.options.clickEvent ? new Function("row", ...z, this.field.options.clickEvent).call(this, e) : !0;
      } catch (i) {
        return this.alert(i.message, "warning"), !1;
      }
    },
    selectEvent(e) {
      try {
        return this.field.options.onselect ? new Function("row", ...z, this.field.options.onselect).call(this, e) : !0;
      } catch (i) {
        return this.alert(i.message, "warning"), !1;
      }
    },
    unselectEvent(e) {
      try {
        return this.field.options.onunselect ? new Function("row", ...z, this.field.options.onunselect).call(this, e) : !0;
      } catch (i) {
        return this.alert(i.message, "warning"), !1;
      }
    },
    emitButtonRowClick(e, i, t, o) {
      try {
        if (e.onClick)
          try {
            const m = P(e.onClick, ["btnRow", "btnIndex", "dataRow", "dataIndex"]).call(this, e, i, t, o);
            m && typeof m.then == "function" && m.catch((s) => this.alert(s?.message || String(s), "warning"));
          } catch (n) {
            this.alert(n.message, "warning");
          }
        else
          this.dispatch("SdFormRender", "onClick", [this]);
      } catch (n) {
        this.alert(n.message, "warning");
      }
    }
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function lf(e, i, t, o, n, m) {
  const s = le, u = V, p = q, g = pe, w = Qe, L = $;
  return e.showWhenParent ? (l(), a(L, {
    key: 0,
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    class: S(["datagrid-container"]),
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(w, {
        ref: "fieldEditor",
        key: e.field.id,
        "form-id": e.field.options.formId,
        "value-field": e.field.options.valueField || "_id",
        "label-field": e.labelFieldStr,
        "parent-field": e.field.options.parentField,
        "root-value": e.field.options.rootValue ? e.field.options.rootValue : null,
        "detail-content": e.field.options.content || void 0,
        params: e.params,
        where: e.field.options.where || "",
        "order-by": e.field.options.orderBy || void 0,
        limit: e.field.options.limitRow || 1e3,
        "title-enable": !!e.field.options.titleEnable,
        "title-name": e.field.options.titleName || "",
        "icon-name": e.field.options.iconName || "",
        height: e.field.options.height || void 0,
        "item-size": e.field.options.itemSize || void 0,
        "default-expand-all": !!e.field.options.defaultExpandAll,
        "search-fields": e.field.options.searchField && Object.keys(e.field.options.searchField).length > 0 ? e.field.options.searchField : void 0,
        "search-mode": e.field.options.searchMode || "data",
        "search-placeholder": e.field.options.searchPlaceholder || void 0,
        "add-btn-enable": !!e.field.options.addBtnEnable,
        "append-btn-enable": !!e.field.options.appendBtnEnable,
        "view-btn-enable": !!e.field.options.viewBtnEnable,
        "update-btn-enable": !!e.field.options.updateBtnEnable,
        "del-btn-enable": !!e.field.options.delBtnEnable,
        "reload-btn-enable": !!e.field.options.reloadBtnEnable,
        "init-data": e.field.options.initData ? e.field.options.initData : {},
        "enable-ws": !!e.field.options.enableWs,
        "allow-delete-func": e.field.options.allowDeleteFunc ? e.allowDeleteFunc : void 0,
        "click-event": e.field.options.clickEvent ? e.clickEvent : void 0,
        "select-event": e.field.options.onselect ? e.selectEvent : void 0,
        "unselect-event": e.field.options.onunselect ? e.unselectEvent : void 0,
        "insert-before": e.insertBefore,
        "update-before": e.updateBefore,
        "view-before": e.viewBefore,
        "before-save": e.beforeSave,
        "after-delete": e.afterDelete,
        "user-state": e.globalUserState,
        "build-state": e.builderStatus
      }, {
        actionBtnRow: f((r) => [
          h(s, {
            "report-list": e.field.options.reportList || [],
            size: "small",
            params: r.row,
            "user-state": e.globalUserState,
            "margin-enable": !0
          }, null, 8, ["report-list", "params", "user-state"]),
          e.field.options.buttonsRow && Object.keys(e.field.options.buttonsRow).length > 0 ? (l(!0), c(y, { key: 0 }, T(e.field.options.buttonsRow, (d, k) => (l(), c(y, null, [
            d.confirm ? (l(), a(g, {
              key: 0,
              title: d.confirmTitle,
              onConfirm: (B) => e.emitButtonRowClick(d, +k, r.row, 0)
            }, {
              reference: f(() => [
                h(p, {
                  size: "small",
                  type: d.type ? d.type : "",
                  plain: !!d.plain,
                  circle: !!d.circle,
                  round: !!d.round,
                  dark: e.isDark,
                  disabled: !!d.disabled,
                  "loading-icon": "Eleme",
                  loading: d.loading,
                  color: d.color
                }, {
                  default: f(() => [
                    d.prefixIcon ? (l(), a(u, {
                      key: 0,
                      "icon-name": d.prefixIcon,
                      class: S(d.label ? "" : "ml-1")
                    }, null, 8, ["icon-name", "class"])) : b("", !0),
                    v("span", null, F(d.label), 1),
                    d.suffixIcon ? (l(), a(u, {
                      key: 1,
                      "icon-name": d.suffixIcon,
                      class: S(d.label ? "ml-1" : "")
                    }, null, 8, ["icon-name", "class"])) : b("", !0)
                  ]),
                  _: 2
                }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color"])
              ]),
              _: 2
            }, 1032, ["title", "onConfirm"])) : (l(), a(p, {
              key: 1,
              size: "small",
              type: d.type ? d.type : "",
              plain: !!d.plain,
              circle: !!d.circle,
              round: !!d.round,
              dark: e.isDark,
              disabled: !!d.disabled,
              "loading-icon": "Eleme",
              loading: d.loading,
              color: d.color,
              tag: d.tag,
              href: d.tag && d.tag == "a" ? d.href : "",
              target: d.blank ? "_blank" : "_self",
              onClick: U((B) => e.emitButtonRowClick(d, +k, r.row, 0), ["prevent"])
            }, {
              default: f(() => [
                d.prefixIcon ? (l(), a(u, {
                  key: 0,
                  "icon-name": d.prefixIcon,
                  class: S(d.label ? "" : "ml-1")
                }, null, 8, ["icon-name", "class"])) : b("", !0),
                v("span", null, F(d.label), 1),
                d.suffixIcon ? (l(), a(u, {
                  key: 1,
                  "icon-name": d.suffixIcon,
                  class: S(d.label ? "ml-1" : "")
                }, null, 8, ["icon-name", "class"])) : b("", !0)
              ]),
              _: 2
            }, 1032, ["type", "plain", "circle", "round", "dark", "disabled", "loading", "color", "tag", "href", "target", "onClick"]))
          ], 64))), 256)) : b("", !0)
        ]),
        _: 1
      }, 8, ["form-id", "value-field", "label-field", "parent-field", "root-value", "detail-content", "params", "where", "order-by", "limit", "title-enable", "title-name", "icon-name", "height", "item-size", "default-expand-all", "search-fields", "search-mode", "search-placeholder", "add-btn-enable", "append-btn-enable", "view-btn-enable", "update-btn-enable", "del-btn-enable", "reload-btn-enable", "init-data", "enable-ws", "allow-delete-func", "click-event", "select-event", "unselect-event", "insert-before", "update-before", "view-before", "before-save", "after-delete", "user-state", "build-state"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"])) : b("", !0);
}
const nf = /* @__PURE__ */ I(of, [["render", lf], ["__scopeId", "data-v-753b3431"]]), sf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nf
}, Symbol.toStringTag, { value: "Module" })), rf = C({
  name: "vue-ui",
  typeName: "FormField",
  components: {
    StaticContentWrapper: $,
    SDCustomContent: Ye
  },
  mixins: [O],
  inject: ["refList", "getFormConfig", "globalOptionModel", "globalModel", "getOptionModel", "globalUserState"],
  computed: {
    // data = ค่าฟิลด์ในฟอร์ม (live reactive) → ใช้ {{ fieldName }}, v-for="i in items", v-if ในเทมเพลตได้
    vueData() {
      return this.formModel || {};
    },
    // params = context รอบนอก: formParams (มี _id/dataId, xsitex, xunitx, params ที่ส่งเข้า form)
    // + userInfo (identity จาก user store). params ชนะ data เมื่อ key ซ้ำ (ตาม SDCustomContent)
    // หมายเหตุ: zone ที่ widget เขียนเอง (data/function/instance) อยู่ใน vueState → ส่งเป็น prop `:state` แยก ไม่ปนตรงนี้
    vueParams() {
      const e = this.params || {};
      return {
        ...e,
        userInfo: this.globalUserState ? this.globalUserState.user : null,
        dataId: e._id || null
      };
    },
    // el-* register global ใช้ได้ในเทมเพลตทันที — ตรงนี้ส่งเฉพาะ component ที่ไม่ได้ register global
    // markRaw กัน component object โดน reactive wrap (Vue warn + เสีย perf)
    vueComponents() {
      return {
        VueFlow: de(Jt),
        Handle: de(Gt),
        Panel: de(qt),
        // 🔴 ต้อง register ชื่อ kebab ตรงๆ ด้วย — Vue แปลง <sd-date-picker-be> เป็น 'SdDatePickerBe'
        //    (e เล็ก) ซึ่งไม่ตรงกับ 'SdDatePickerBE' ⇒ resolve ไม่เจอ tag หายเงียบๆ
        SdDatePickerBE: de(ie),
        "sd-date-picker-be": de(ie),
        SdReport: this.sdReportBound,
        "sd-report": this.sdReportBound
      };
    }
  },
  created() {
    this.initEventHandler(), this.handleOnCreated();
  },
  mounted() {
    this.registerToRefList(), this.handleOnMounted();
  },
  setup() {
    const e = R(null), i = bi({}), t = A("globalUserState", null), o = de(
      C({
        name: "SdReportBound",
        inheritAttrs: !1,
        setup(n, { attrs: m }) {
          return () => gi(le, { userState: t, ...m });
        }
      })
    );
    return {
      fieldEditor: e,
      vueState: i,
      sdReportBound: o,
      // inject formParams → ให้ computed `params`/`parentId` ใน CoreFieldMixin มีค่าอ่านได้ตอน render (กัน Vue warn ใน builder)
      formParams: A("formParams", {})
    };
  },
  beforeUnmount() {
    this.unregisterFromRefList();
  }
});
function df(e, i, t, o, n, m) {
  const s = Ye, u = $;
  return l(), a(u, {
    "build-rules": e.rules,
    field: e.field,
    builder: e.builder,
    "builder-status": e.builderStatus,
    "parent-field": e.parentField,
    "parent-list": e.parentList,
    "index-of-parent-list": e.indexOfParentList,
    "sub-form-row-index": e.subFormRowIndex,
    "sub-form-col-index": e.subFormColIndex,
    "sub-form-row-id": e.subFormRowId
  }, {
    default: f(() => [
      (l(), a(s, {
        ref: "fieldEditor",
        key: e.field.id,
        content: e.field.options.content,
        data: e.vueData,
        params: e.vueParams,
        state: e.vueState,
        components: e.vueComponents,
        "show-error-detail": e.builderStatus
      }, null, 8, ["content", "data", "params", "state", "components", "show-error-detail"]))
    ]),
    _: 1
  }, 8, ["build-rules", "field", "builder", "builder-status", "parent-field", "parent-list", "index-of-parent-list", "sub-form-row-index", "sub-form-col-index", "sub-form-row-id"]);
}
const af = /* @__PURE__ */ I(rf, [["render", df]]), ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: af
}, Symbol.toStringTag, { value: "Module" }));
function Be() {
  return {
    fields: [],
    formConfig: D(uf())
  };
}
function uf() {
  return {
    modelName: "formData",
    refName: "sdForm",
    rulesName: "rules",
    labelWidth: 120,
    labelPosition: "top",
    size: "",
    labelAlign: "label-right-align",
    cssCode: "",
    customClass: "",
    functions: "",
    layoutType: "PC",
    jsonVersion: 3,
    onFormCreated: "",
    onFormMounted: "",
    onParentChange: "",
    onFormDataChange: "",
    onFormUnmounted: ""
  };
}
function pf(e, i) {
  if (!e) return "";
  let t = e.replace(/\\n/g, "").replace(/[\s\r\n'"]/g, "").replace(/-----BEGIN.*?-----/g, "").replace(/-----END.*?-----/g, "");
  const o = "-----BEGIN PUBLIC KEY-----", n = "-----END PUBLIC KEY-----", m = t.match(/.{1,64}/g)?.join(`
`) || t;
  return `${o}
${m}
${n}`;
}
const mf = (e, i) => {
  try {
    return new Yt(i).decryptPublic(e, "utf8");
  } catch {
    return "";
  }
}, hf = async function(e, i) {
  if (!e) return {};
  const { key: t, iv: o, data: n } = e, m = (u) => {
    try {
      if (!u) return null;
      const p = mf(t, pf(u, "public"));
      if (!p) return null;
      const w = Kt.decrypt(n, ze(p), { iv: ze(o), mode: Qt.CBC, padding: Zt.PKCS7 }).toString(ai.Utf8);
      return w ? JSON.parse(w) : null;
    } catch {
      return null;
    }
  };
  let s = null;
  return i.connectInfo && i.connectInfo.public_key && (s = m(i.connectInfo.public_key)), s === null && (s = m(`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCJUKaPfUKzZtBiKOsKYYGCZCFr
EJEOZ+q/iJBak+bXAN9HVvlL/9u+rNy+HlEtWJAffA2MIXkXV8lzAqeMFmjjee/N
FDOtUsg8r6dqxCMULJpEnZ2ou370CL+XDlxn3oKorwM7LPTe2qr1DTvwVvLJx2hl
tjverk8X5A9+IBcvMQIDAQAB
-----END PUBLIC KEY-----`)), s !== null ? s : {};
};
function ze(e) {
  return ai.Hex.parse(e);
}
const cf = C({
  name: "SdFormRender",
  emits: ["formChange"],
  components: {
    // ...FieldComponents,
  },
  mixins: [J],
  // reloadPopupForm มาจาก host SdFormRender (ancestor) — มีค่าเฉพาะตอนฟอร์มนี้ถูกเปิดใน popup
  // Vue ไม่ inject ค่า provide ของตัวเอง → top-level form จะได้ default null
  inject: {
    _reloadPopupForm: { from: "reloadPopupForm", default: null },
    _closePopupForm: { from: "closePopupForm", default: null }
  },
  props: {
    sdform: {
      type: Object,
      required: !0
    },
    parentId: {
      type: String,
      default: ""
    },
    formRender: {
      type: Object
    },
    formData: {
      type: Object,
      default: () => ({})
    },
    optionModel: {
      type: Object,
      default: () => ({})
    },
    previewState: {
      type: Boolean,
      default: !1
    },
    disabled: {
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
    params: {
      type: Object,
      default: {}
    },
    apiUrl: {
      type: String,
      default: ""
    },
    authToken: {
      type: String,
      default: ""
    },
    submitFunc: Function,
    userState: {
      type: Object,
      required: !0
    }
  },
  data() {
    return {
      formRenderModel: {},
      formDataModel: {},
      // fieldRefList: {}  as any, in EmitterMixin
      subFormRefList: {},
      formId: null,
      externalComponents: {},
      onCreated: !1,
      onMounted: !1,
      onUnmounted: !1,
      onParentChange: !1,
      onResetForm: !1,
      showInput: !0,
      parentDisable: !1,
      ProviderType: je,
      useUserState: this.$props.userState,
      showPopupFlag: !1,
      showPopupGridFlag: !1,
      readonlyParent: !1,
      formDataParent: {},
      backdropParent: !1,
      formIdParent: this.sdform.joiner_field.joiner_enable && this.sdform.joiner_field.form_id !== "" ? D(this.sdform.joiner_field.form_id.value) : "",
      dataIdParent: "",
      router: di(),
      route: ri(),
      isDark: H(),
      copyClipboard: Yi,
      loadedForm: !1,
      // joiner ยัง resolve label ของ parent ไม่เสร็จ → overlay กันกดมั่ว. ไม่มี joiner = พร้อมทันที
      joinerReady: !this.sdform.joiner_field.joiner_enable,
      subFormBindProps: {},
      gridBindProps: {},
      customParams: {},
      formVar: {},
      dataError: !!this.formData.xerrorx && typeof this.formData.xerrorx == "object" && Object.keys(this.formData.xerrorx).length > 0
    };
  },
  provide() {
    return {
      refList: this.fieldRefList,
      sfRefList: this.subFormRefList,
      getFormConfig: () => this.formRenderModel.formConfig,
      globalOptionModel: this.optionModel,
      getOptionModel: () => this.optionModel,
      globalModel: {
        formDataOld: this.formData,
        // formData: this.formDataModel,
        formModel: this.formDataModel,
        sdformModel: this.sdform
      },
      globalUserState: this.userState,
      formParams: this.formParams,
      globalApiUrl: this.sdform.form_db && this.sdform.form_db.api_url ? this.sdform.form_db.api_url : this.apiUrl,
      globalAuthToken: this.authToken,
      globalSdForm: this.sdform,
      previewState: this.previewState,
      annotated: () => this.annotated,
      subFormOpen: this.subFormOpen,
      gridOpen: this.gridOpen,
      reloadPopupForm: this.reloadPopupForm,
      closePopupForm: this.closePopupForm
    };
  },
  computed: {
    formConfig() {
      return this.formRenderModel.formConfig;
    },
    fields() {
      return this.formRenderModel.fields;
    },
    labelPosition() {
      return this.formConfig && this.formConfig.labelPosition ? this.formConfig.labelPosition : "left";
    },
    labelWidth() {
      return this.formConfig && this.formConfig.labelWidth ? this.formConfig.labelWidth + "px" : "120px";
    },
    labelAlign() {
      return this.formConfig && this.formConfig.labelAlign ? this.formConfig.labelAlign : "label-left-align";
    },
    size() {
      return this.formConfig && this.formConfig.size ? this.formConfig.size : "default";
    },
    customClass() {
      return this.formConfig && this.formConfig.customClass ? this.formConfig.customClass : "";
    },
    formParentId() {
      return this.sdform.joiner_field && this.sdform.joiner_field.joiner_enable ? this.formDataModel[this.sdform.joiner_field.field_name] && this.formDataModel[this.sdform.joiner_field.field_name].value ? this.formDataModel[this.sdform.joiner_field.field_name].value : null : this.formDataModel._id;
    },
    formDataId() {
      return this.formDataModel._id;
    },
    formParams() {
      const { xparentx: e, ...i } = this.params || {}, t = this.userState.appParams ? this.userState.appParams : {};
      return { ...i, ...this.formDataModel, ...t, ...this.customParams };
    }
  },
  watch: {
    //disabled
    disabled: {
      deep: !1,
      handler(e) {
        e ? this.disableForm() : this.enableForm();
      }
    }
  },
  setup() {
    const e = R(), i = R();
    let t;
    return {
      renderFormRef: e,
      parentInput: i,
      loadingStart: () => {
        t = zt.service({
          lock: !0,
          text: "Loading",
          background: "rgba(0, 0, 0, 0.7)",
          fullscreen: !0
        });
      },
      loadingClose: () => {
        t.close();
      }
    };
  },
  beforeCreate() {
  },
  created() {
  },
  async mounted() {
    await this.createForm();
  },
  methods: {
    subFormOpen(e) {
      this.showPopupFlag = Me(e.modelValue) ? e.modelValue : !0;
      const i = {
        modelValue: this.showPopupFlag,
        formId: this.formIdParent,
        cancelCallback: this.subFormClose,
        params: this.formParams
        // backdrop: false,
        // readonly: false,
        // afterSaveCallback: undefined,
        // annotated: false,
        // parentId: '',
        // dataId: '',
        // initData: undefined,
      };
      this.subFormBindProps = { ...i, ...e };
    },
    subFormClose() {
      this.showPopupFlag = !1, this.subFormBindProps = {
        modelValue: this.showPopupFlag
      };
    },
    // เปิด CRUD grid popup — mirror ของ subFormOpen แต่ผูกกับ <sd-crud-popup-grid>
    gridOpen(e) {
      this.showPopupGridFlag = Me(e.modelValue) ? e.modelValue : !0;
      const i = {
        modelValue: this.showPopupGridFlag,
        formId: "",
        parentId: "",
        cancelCallback: this.gridClose,
        params: this.formParams
      };
      this.gridBindProps = { ...i, ...e };
    },
    gridClose() {
      this.showPopupGridFlag = !1, this.gridBindProps = {
        modelValue: this.showPopupGridFlag
      };
    },
    async createForm() {
      if (this.loadedForm = !1, this.formRender)
        this.formRenderModel = this.formRender;
      else {
        const e = await hf(this.sdform.form_model, this.userState);
        e ? e.model ? this.formRenderModel = e.model : this.formRenderModel = Be() : this.formRenderModel = Be();
      }
      this.buildFormModel(this.formRenderModel ? this.formRenderModel.fields : null), this.initFormRender();
    },
    parentSubFormOpen() {
      this.subFormOpen({
        modelValue: this.showPopupFlag,
        dataId: this.dataIdParent,
        initData: this.formDataParent,
        backdrop: this.backdropParent,
        readonly: this.readonlyParent,
        afterSaveCallback: this.handleAferSaveParentForm,
        cancelCallback: this.handleCancelParentForm
      });
    },
    async handleOpenParentFormAdd() {
      this.parentDisable = !0, this.formDataParent = {}, this.readonlyParent = !1, this.backdropParent = !1, this.showPopupFlag = !0, this.dataIdParent = "", this.parentSubFormOpen();
    },
    handleOpenParentFormEdit() {
      this.parentDisable = !0, this.formDataParent = D(this.parentInput.itemSelected), this.readonlyParent = !1, this.backdropParent = !1, this.showPopupFlag = !0, this.dataIdParent = this.parentInput.value.value, this.parentSubFormOpen();
    },
    handleOpenParentFormView() {
      this.parentDisable = !0, this.formDataParent = D(this.parentInput.itemSelected), this.readonlyParent = !0, this.backdropParent = !0, this.showPopupFlag = !0, this.dataIdParent = this.parentInput.value.value, this.parentSubFormOpen();
    },
    handleAferSaveParentForm(e, i) {
      this.parentInput.addRawData(e), this.parentInput.multiItemsList(this.parentInput.rawData), this.parentInput.value = e._id, this.parentDisable = !1, this.formDataParent = {}, this.readonlyParent = !1, this.showPopupFlag = !1;
    },
    handleCancelParentForm() {
      this.parentDisable = !1, this.formDataParent = {}, this.readonlyParent = !1, this.showPopupFlag = !1;
    },
    async handleJoinerChange() {
      let e = null, i = null;
      if (this.sdform.joiner_field.joiner_enable && this.formData[this.sdform.joiner_field.field_name] && (i = this.formData[this.sdform.joiner_field.field_name]), this.formDataModel[this.sdform.joiner_field.field_name]) {
        let t = this.formData._id ? this.formData._id : "";
        this.formDataModel.xparentx = this.formDataModel[this.sdform.joiner_field.field_name].value || null, e = this.formDataModel[this.sdform.joiner_field.field_name];
        const o = await Qi(this.sdform.dataid, t, this.formDataModel, this.$data.useUserState);
        o.data ? (this.showInput = !1, x.warning(o.message)) : this.showInput = !0;
      } else
        this.formDataModel.xparentx = null, this.showInput = !1;
      try {
        this.onParentChange = !0, this.formConfig && this.formConfig.onParentChange && await P(this.formConfig.onParentChange, ["fieldName", "newValue", "oldValue", "formModel", "showInput"]).call(this, this.sdform.joiner_field.field_name, e, i, this.formDataModel, this.showInput);
      } catch (t) {
        this.alert(t.message, "warning");
      }
      this.onResetForm && (this.onResetForm = !1, this.resetDataFunc());
    },
    notify(e, i = "info", t = "Notification", o = 5e3) {
      try {
        si({
          title: t,
          type: i,
          message: e,
          duration: o
        });
      } catch (n) {
        console.log(n.message);
      }
    },
    alert(e, i = "info", t = 4e3) {
      try {
        x({
          grouping: !0,
          type: i,
          message: e,
          duration: t
        });
      } catch (o) {
        console.log(o.message);
      }
    },
    confirm(e, i, t = "info", o = "Confirm") {
      try {
        te.confirm(e, o, {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: t
        }).then(() => {
          if (i)
            try {
              i();
            } catch (n) {
              this.alert(n.message, "error");
            }
        }).catch(() => {
        });
      } catch (n) {
        console.log(n.message);
      }
    },
    prompt(e, i, t = {}, o = "info", n = "Prompt") {
      try {
        te.prompt(e, n, {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: o,
          ...t
        }).then(({ value: m }) => {
          if (i)
            try {
              i(m);
            } catch (s) {
              this.alert(s.message, "error");
            }
        }).catch(() => {
        });
      } catch (m) {
        console.log(m.message);
      }
    },
    // emitCall(eventName:any, params:any){
    //     this.$emit(eventName, ...params)
    // },
    buildFormModel(e) {
      if (this.initSystemDataModel(), e && e.length > 0)
        for (const i of e)
          this.buildDataModel(i);
      this.$nextTick(() => {
        this.addFieldChangeEventHandler(), this.handleOnMounted(), this.disabled ? this.disableForm() : this.enableForm(), this.loadedForm = !0;
      });
    },
    // set system fields ลง formDataModel — แยกออกมาเพื่อเรียกครั้งเดียว (เดิมถูกรันซ้ำทุก node ใน buildDataModel)
    initSystemDataModel() {
      this.formDataModel._id = this.formData._id ? this.formData._id : "", this.sdform.joiner_field.joiner_enable ? (this.formDataModel[this.sdform.joiner_field.field_name] = this.formData[this.sdform.joiner_field.field_name], this.formDataModel.xparentx = this.formDataModel[this.sdform.joiner_field.field_name] ? this.formDataModel[this.sdform.joiner_field.field_name].value : null) : this.formDataModel.xparentx = null, this.formDataModel.xsitex = this.formData.xsitex ? this.formData.xsitex : null, this.formDataModel.xunitx = this.formData.xunitx ? this.formData.xunitx : null, this.formDataModel.xrstatx = this.formData.xrstatx ? this.formData.xrstatx : null, this.formDataModel.xversionx = this.formData.xversionx ? this.formData.xversionx : null, this.formDataModel.xerrorx = this.formData.xerrorx ? this.formData.xerrorx : null, this.formDataModel.created_by = this.formData.created_by ? this.formData.created_by : null, this.formDataModel.created_at = this.formData.created_at ? this.formData.created_at : null, this.formDataModel.updated_at = this.formData.updated_at ? this.formData.updated_at : null, this.formDataModel.updated_by = this.formData.updated_by ? this.formData.updated_by : null;
    },
    buildDataModel(e) {
      if (e.category === "container")
        if (e.component === "grid")
          e.cols && e.cols.length > 0 && e.cols.forEach((i) => {
            this.buildDataModel(i);
          });
        else if (e.component === "table")
          e.rows && e.rows.length > 0 && e.rows.forEach((i) => {
            i.cols && i.cols.length > 0 && i.cols.forEach((t) => {
              this.buildDataModel(t);
            });
          });
        else if (e.component === "tab")
          e.tabs && e.tabs.length > 0 && e.tabs.forEach((i) => {
            i.fields && i.fields.length > 0 && i.fields.forEach((t) => {
              this.buildDataModel(t);
            });
          });
        else if (e.component === "sub-form") {
          let i = e.options.name;
          if (this.formData.hasOwnProperty(i)) {
            let t = this.formData[i];
            this.formDataModel[i] = D(t);
          } else {
            let t = {};
            e.options.showBlankRow ? (e.fields.forEach((o) => {
              o.formItemFlag && (t[o.options.name] = o.options.defaultValue);
            }), this.formDataModel[i] = [t]) : this.formDataModel[i] = [];
          }
        } else if (e.component === "object-group") {
          let i = e.options.name;
          this.formDataModel[i] = {}, this.buildDataModelObjGroup(i, e.fields);
        } else e.component === "grid-col" || e.component === "table-cell" ? e.fields && e.fields.length > 0 && e.fields.forEach((i) => {
          this.buildDataModel(i);
        }) : e.fields && e.fields.length > 0 && e.fields.forEach((i) => {
          this.buildDataModel(i);
        });
      else if (e.formItemFlag)
        if (!this.formData.hasOwnProperty(e.options.name))
          this.formDataModel[e.options.name] = e.options.defaultValue;
        else {
          let i = this.formData[e.options.name];
          this.formDataModel[e.options.name] = D(i);
        }
    },
    buildDataModelObjGroup(e, i) {
      for (const t in i)
        if (Object.prototype.hasOwnProperty.call(i, t)) {
          const o = i[t];
          if (o.fields)
            this.buildDataModelObjGroup(e, o.fields);
          else if (o.rows)
            this.buildDataModelObjGroup(e, o.rows);
          else if (o.tabs)
            this.buildDataModelObjGroup(e, o.tabs);
          else if (o.cols)
            this.buildDataModelObjGroup(e, o.cols);
          else if (o.formItemFlag && o.options.name)
            if (this.formData[e] && this.formData[e].hasOwnProperty(o.options.name)) {
              let n = this.formData[e][o.options.name];
              this.formDataModel[e][o.options.name] = D(n);
            } else
              this.formDataModel[e][o.options.name] = o.options.defaultValue;
        }
    },
    async handleOnMounted() {
      try {
        if (this.sdform.joiner_field && this.sdform.joiner_field.joiner_enable && (this.showInput = !1, this.annotated && this.disabled ? this.showInput = !0 : this.formDataModel[this.sdform.joiner_field.field_name] ? this.showInput = !0 : this.parentId != "" && (this.joinerReady = !1, this.parentInput.getDataOne(
          {
            providerId: this.sdform.joiner_field.form_id.value,
            providerType: je.FORM,
            params: { id: this.parentId },
            options: { where: "_id = CONVERT(:id, 'objectId')" }
          },
          (e) => {
            this.parentInput.value = this.parentId, this.joinerReady = !0;
          }
        ))), this.onMounted = !0, this.formConfig && this.formConfig.onFormMounted) {
          const i = P(this.formConfig.onFormMounted).call(this);
          i && typeof i.then == "function" && i.catch((t) => this.alert(t?.message || String(t), "warning"));
        }
      } catch (e) {
        this.alert(e.message, "warning");
      }
    },
    // parentInput (joiner select) resolve label เสร็จ → ปลด overlay ให้ฟอร์มกดได้
    onJoinerReady() {
      this.joinerReady = !0;
    },
    handleOnUnmounted() {
      try {
        if (this.onUnmounted = !0, this.formConfig && this.formConfig.onFormUnmounted) {
          const i = P(this.formConfig.onFormUnmounted).call(this);
          i && typeof i.then == "function" && i.catch((t) => this.alert(t?.message || String(t), "warning"));
        }
      } catch (e) {
        this.alert(e.message, "warning");
      }
    },
    initFormRender(e = !0) {
      this.formId = "sdRender" + ae(), e && this.insertCustomStyleAndScriptNode(), this.handleOnCreated(), this.addFieldValidateEventHandler(), this.registerFormToRefList();
    },
    insertCustomStyleAndScriptNode() {
      this.formConfig && this.formConfig.cssCode && Ki(this.formConfig.cssCode, this.previewState ? "" : this.formId), this.formConfig && this.formConfig.functions && Zi(this.formConfig.functions, this.previewState ? "" : this.formId);
    },
    addFieldChangeEventHandler() {
      try {
        this.off$("fieldChange"), this.on$("fieldChange", (e, i, t, o, n) => {
          this.onMounted && (this.handleFieldDataChange(e, i, t, o, n), this.$emit("formChange", e, i, t, this.formDataModel, o, n));
        });
      } catch (e) {
        this.alert(e.message, "warning");
      }
    },
    handleFieldDataChange(e, i, t, o, n) {
      try {
        if (this.formConfig && this.formConfig.onFormDataChange) {
          const s = P(this.formConfig.onFormDataChange, ["fieldName", "newValue", "oldValue", "formModel", "subFormName", "subFormRowIndex"]).call(this, e, i, t, this.formDataModel, o, n);
          s && typeof s.then == "function" && s.catch((u) => this.alert(u?.message || String(u), "warning"));
        }
      } catch (m) {
        this.alert(m.message, "warning");
      }
    },
    addFieldValidateEventHandler() {
      try {
        this.off$("fieldValidation"), this.on$("fieldValidation", (e) => {
          this.getNativeForm() && new Promise((t, o) => {
            let n = this.getNativeForm().validateField(e);
            t(n);
          }).then((t) => {
          }).catch((t) => {
          });
        });
      } catch (e) {
        this.alert(e.message, "warning");
      }
    },
    registerFormToRefList() {
      this.fieldRefList.sd_form_ref = this;
    },
    handleOnCreated() {
      try {
        if (this.onCreated = !0, this.formConfig && this.formConfig.onFormCreated) {
          const i = P(this.formConfig.onFormCreated).call(this);
          i && typeof i.then == "function" && i.catch((t) => this.alert(t?.message || String(t), "warning"));
        }
      } catch (e) {
        this.alert(e.message, "warning");
      }
    },
    //=========================================== end init=========================================
    findFieldAndSetDisabled(e, i) {
      let t = this.getFieldRef(e);
      t ? t.setDisabled(i) : this.findFieldOfSubFormAndSetDisabled(e, i);
    },
    findFieldOfSubFormAndSetDisabled(e, i) {
      for (const t of this.findFieldNameInSubForm(e)) {
        let o = this.getFieldRef(t);
        o && o.setDisabled(i);
      }
    },
    findFieldAndSetHidden(e, i) {
      let t = this.getFieldRef(e);
      t ? t.setHidden(i) : this.findFieldOfSubFormAndSetHidden(e, i);
    },
    findFieldOfSubFormAndSetHidden(e, i) {
      this.findFieldNameInSubForm(e).forEach((t) => {
        let o = this.getFieldRef(t);
        o && o.setHidden(i);
      });
    },
    findFieldNameInSubForm(e) {
      let i = [], t = null, o = (n, m) => {
        n.options && n.options.name === e && (t = m.options.name);
      };
      if (Ji(this.fields, o), t) {
        let n = this.getFieldRef(t);
        if (n) {
          let m = n.getRowIdData();
          m && m.length > 0 && m.forEach((s) => {
            i.push(e + "@row" + s);
          });
        }
      }
      return i;
    },
    //=========================================== start api function=========================================
    getFormRef() {
      return this;
    },
    getNativeForm() {
      return this.renderFormRef;
    },
    getFieldRef(e, i = !1) {
      let t = this.fieldRefList[e];
      return !t && i && this.alert("Ref Not Found `" + e + "`", "warning"), t;
    },
    submitForm(e = 1) {
      this.submitFunc && this.submitFunc(e);
    },
    clearFormDataModel() {
      for (let e in this.formDataModel)
        delete this.formDataModel[e];
    },
    getParentValue() {
      return this.formDataModel[this.sdform.joiner_field.field_name] ? this.formDataModel[this.sdform.joiner_field.field_name] : null;
    },
    openForm(e, i, t, o, n) {
      const m = {
        formId: e,
        dataId: i,
        parentId: t,
        initData: o,
        ...n
      };
      this.subFormOpen(m);
    },
    openGrid(e, i = "", t) {
      const o = {
        formId: e,
        parentId: i,
        ...t
      };
      this.gridOpen(o);
    },
    // host: เปลี่ยน formId ของ popup → :key เปลี่ยน → <sd-crud-popup-form> remount เป็นฟอร์มใหม่
    // options: dataId, parentId, initData, params, afterSaveCallback ... (จะ replace bind ชุดเดิม)
    reloadPopupForm(e, i = {}) {
      this.subFormOpen({ formId: e, ...i });
    },
    // public API เรียกจากใน event ของฟอร์มที่เปิดใน popup: this.getFormRef().reloadPopup('id2', { dataId })
    // วิ่งขึ้นไปหา host ผ่าน inject แล้วสั่ง reload — ฟอร์มที่ไม่ได้อยู่ใน popup จะเตือน
    reloadPopup(e, i = {}) {
      const t = this._reloadPopupForm;
      t ? t(e, i) : this.alert("reloadPopup ใช้ได้เฉพาะฟอร์มที่เปิดใน popup", "warning");
    },
    // host: ปิด popup ที่ตัวเองเปิดอยู่ — วิ่งผ่าน cancelCallback ชุดที่ open ไว้ เพื่อให้ callback ที่ caller ผูก (เช่น refresh list) ทำงานเหมือนกดปุ่ม Close
    closePopupForm() {
      (this.subFormBindProps && typeof this.subFormBindProps.cancelCallback == "function" ? this.subFormBindProps.cancelCallback : this.subFormClose)();
    },
    // public API เรียกจากใน event ของฟอร์มที่เปิดใน popup: this.getFormRef().closePopup()
    // วิ่งขึ้นไปหา host ผ่าน inject แล้วสั่งปิด — ฟอร์มที่ไม่ได้อยู่ใน popup จะเตือน (pattern เดียวกับ reloadPopup)
    closePopup() {
      const e = this._closePopupForm;
      e ? e() : this.alert("closePopup ใช้ได้เฉพาะฟอร์มที่เปิดใน popup", "warning");
    },
    setFormModel(e) {
      if (e)
        if (typeof e == "string" || e.constructor === Object) {
          let i = null;
          if (typeof e == "string" ? i = JSON.parse(e) : i = e, !i.formConfig || !i.fields) {
            this.alert("Invalid format of form json.", "warning");
            return;
          }
          this.clearFormDataModel(), this.buildFormModel(i.fields), this.formRenderModel.formConfig = i.formConfig, this.formRenderModel.fields = i.fields, this.insertCustomStyleAndScriptNode(), this.$nextTick(() => {
            this.initFormRender(!1), this.handleOnMounted();
          });
        } else
          this.alert("Set form json failed.", "warning");
    },
    reloadOptionData(e) {
      let i = [];
      e && typeof e == "string" ? i = [e] : e && Array.isArray(e) && (i = [...e]), this.broadcast("FormField", "reloadOptionItems", i);
    },
    getFormData(e = !0) {
      if (!e)
        return this.formDataModel;
      let i = function() {
      }, t = new window.Promise(function(o, n) {
        i = function(m, s) {
          s ? n(s) : o(m);
        };
      });
      return this.getNativeForm().validate((o) => {
        o ? i(this.formDataModel) : i(this.formDataModel, "Validation Failed");
      }), t;
    },
    setFormData(e) {
      Object.keys(this.formDataModel).forEach((i) => {
        e && e.hasOwnProperty(i) && (this.formDataModel[i] = D(e[i]));
      }), this.broadcast("FormContainer", "setFormData", [this.formDataModel]), this.broadcast("FormField", "setFormData", [this.formDataModel]);
    },
    getFieldValue(e) {
      let i = this.getFieldRef(e);
      if (i && i.getValue)
        return i.getValue();
      if (!i) {
        let t = [];
        return this.findFieldNameInSubForm(e).forEach((o) => {
          let n = this.getFieldRef(o);
          n && n.getValue && t.push(n.getValue());
        }), t;
      }
    },
    setFieldValue(e, i) {
      let t = this.getFieldRef(e);
      t && t.setValue && t.setValue(i), t || this.findFieldNameInSubForm(e).forEach((o) => {
        let n = this.getFieldRef(o);
        n && n.setValue && n.setValue(i);
      });
    },
    getSubFormValues(e, i = !0) {
      return this.subFormRefList[e].getSubFormValues(i);
    },
    disableForm() {
      this.parentDisable = !0;
      let e = Object.keys(this.fieldRefList);
      for (const i of e) {
        let t = this.getFieldRef(i);
        t && (t.field && t.field.component === "sub-form" ? t.disableSubForm() : t.setDisabled && t.setDisabled(!0));
      }
    },
    enableForm() {
      this.parentDisable = !1;
      let e = Object.keys(this.fieldRefList);
      for (const i of e) {
        let t = this.getFieldRef(i);
        t && (t.field && t.field.component === "sub-form" ? t.enableSubForm() : t.setDisabled && t.setDisabled(!1));
      }
    },
    resetForm() {
      this.parentInput && this.sdform.joiner_field.change_enable ? (this.onResetForm = !0, this.parentInput.value = this.formData[this.sdform.joiner_field.field_name] ? this.formData[this.sdform.joiner_field.field_name] : void 0) : this.resetDataFunc();
    },
    resetDataFunc() {
      Object.keys(this.subFormRefList).forEach((t) => {
        this.subFormRefList[t].resetSubForm && this.subFormRefList[t].resetSubForm();
      }), Object.keys(this.fieldRefList).forEach((t) => {
        let o = this.getFieldRef(t);
        o && !o.subFormItemFlag && o.resetField && o.resetField();
      }), setTimeout(() => {
        this.clearValidate();
      }, 100);
    },
    clearValidate(e) {
      this.getNativeForm().clearValidate(e);
    },
    validateForm(e) {
      this.getNativeForm().validate((i) => {
        e(i);
      });
    },
    validateFields() {
    },
    disableField(e) {
      e && (typeof e == "string" ? this.findFieldAndSetDisabled(e, !0) : Array.isArray(e) && e.forEach((i) => {
        this.findFieldAndSetDisabled(i, !0);
      }));
    },
    enableField(e) {
      e && (typeof e == "string" ? this.findFieldAndSetDisabled(e, !1) : Array.isArray(e) && e.forEach((i) => {
        this.findFieldAndSetDisabled(i, !1);
      }));
    },
    hideField(e) {
      e && (typeof e == "string" ? this.findFieldAndSetHidden(e, !0) : Array.isArray(e) && e.forEach((i) => {
        this.findFieldAndSetHidden(i, !0);
      }));
    },
    showField(e) {
      e && (typeof e == "string" ? this.findFieldAndSetHidden(e, !1) : Array.isArray(e) && e.forEach((i) => {
        this.findFieldAndSetHidden(i, !1);
      }));
    },
    getFieldInput() {
      return Gi(this.formRenderModel.fields);
    },
    getContainerFields() {
      return qi(this.formRenderModel.fields);
    },
    addEC(e, i) {
      this.externalComponents[e] = i;
    },
    hasEC(e) {
      return this.externalComponents.hasOwnProperty(e);
    },
    getEC(e) {
      return this.externalComponents[e];
    }
  },
  beforeUnmount() {
    this.handleOnUnmounted();
  }
}), bf = ["data-id"], gf = { style: { margin: "0px" } }, Ff = {
  key: 2,
  class: "widget-wrapper"
}, yf = { key: 0 }, vf = { key: 1 };
function wf(e, i, t, o, n, m) {
  const s = V, u = ne, p = q, g = Xi, w = ue, L = xe, r = _e, d = Ut, k = _i, B = xi, se = Bt;
  return l(), c(y, null, [
    Q((l(), a(d, {
      "label-position": e.labelPosition,
      size: e.size,
      class: S([[e.customClass], "render-form"]),
      "label-width": e.labelWidth,
      "validate-on-rule-change": !1,
      model: e.formDataModel,
      ref: "renderFormRef",
      onSubmit: i[1] || (i[1] = U(() => {
      }, ["prevent"]))
    }, {
      default: f(() => [
        e.sdform.joiner_field && e.sdform.joiner_field.joiner_enable ? (l(), c("div", {
          key: 0,
          class: "joiner-wrapper",
          "data-id": e.sdform.joiner_field && e.sdform.joiner_field.joiner_enable ? e.sdform.joiner_field.form_id.value : null
        }, [
          e.sdform.joiner_field.joiner_enable ? (l(), a(L, {
            key: 0,
            label: e.sdform.joiner_field.joiner_label,
            "label-width": e.labelWidth,
            size: e.size,
            "label-position": e.labelPosition,
            class: S([e.labelAlign]),
            required: "",
            prop: e.sdform.joiner_field.field_name
          }, {
            label: f(() => [
              v("span", null, [
                E(F(e.sdform.joiner_field.joiner_label) + " ", 1),
                e.sdform.joiner_field.joiner_hint ? (l(), a(u, {
                  key: 0,
                  content: e.sdform.joiner_field.joiner_hint,
                  effect: "dark"
                }, {
                  default: f(() => [
                    h(s, {
                      "icon-name": "el-info-filled",
                      size: "13px"
                    })
                  ]),
                  _: 1
                }, 8, ["content"])) : b("", !0)
              ])
            ]),
            default: f(() => [
              h(g, {
                ref: "parentInput",
                modelValue: e.formDataModel[e.sdform.joiner_field.field_name],
                "onUpdate:modelValue": i[0] || (i[0] = (K) => e.formDataModel[e.sdform.joiner_field.field_name] = K),
                filterable: "",
                "build-state": !!e.showInput && !e.sdform.joiner_field.change_enable,
                placeholder: e.sdform.joiner_field.joiner_placeholder,
                "value-object-id": !0,
                "enable-object-type": !0,
                "joiner-object": !0,
                disabled: e.parentDisable,
                "data-provider": {
                  providerId: e.sdform.joiner_field.form_id.value,
                  providerType: e.ProviderType.FORM,
                  params: e.formParams ? e.formParams : null,
                  options: { orderBy: e.sdform.joiner_field.order_by, where: e.sdform.joiner_field.sql_filter }
                },
                "value-field": e.sdform.joiner_field.joiner_variable,
                "search-field": e.sdform.joiner_field.search_fields,
                "label-field": e.sdform.joiner_field.label_fields,
                "ref-field": e.sdform.joiner_field.ref_fields,
                "label-template": e.sdform.joiner_field.label_template,
                "user-state": e.userState,
                style: j({ width: e.sdform.joiner_field.joiner_size + "%" }),
                size: e.size,
                onReady: e.onJoinerReady,
                onChange: e.handleJoinerChange
              }, Y({ _: 2 }, [
                e.disabled ? void 0 : {
                  name: "prefix",
                  fn: f(() => [
                    e.showInput ? b("", !0) : (l(), c(y, { key: 0 }, [
                      e.sdform.joiner_field.insert_enable ? (l(), a(p, {
                        key: 0,
                        type: "success",
                        size: "small",
                        icon: "Plus",
                        plain: "",
                        circle: "",
                        onClick: U(e.handleOpenParentFormAdd, ["prevent"]),
                        style: { margin: "0px" }
                      }, null, 8, ["onClick"])) : b("", !0)
                    ], 64)),
                    e.showInput && e.sdform.joiner_field.edit_enable ? (l(), a(p, {
                      key: 1,
                      type: "primary",
                      size: "small",
                      icon: "Edit",
                      plain: "",
                      circle: "",
                      onClick: U(e.handleOpenParentFormEdit, ["prevent"]),
                      style: { margin: "0px" }
                    }, null, 8, ["onClick"])) : b("", !0),
                    e.showInput && !e.sdform.joiner_field.edit_enable && e.sdform.joiner_field.view_enable ? (l(), a(p, {
                      key: 2,
                      type: "info",
                      size: "small",
                      icon: "View",
                      plain: "",
                      circle: "",
                      onClick: U(e.handleOpenParentFormView, ["prevent"]),
                      style: { margin: "0px" }
                    }, null, 8, ["onClick"])) : b("", !0)
                  ]),
                  key: "0"
                }
              ]), 1032, ["modelValue", "build-state", "placeholder", "disabled", "data-provider", "value-field", "search-field", "label-field", "ref-field", "label-template", "user-state", "style", "size", "onReady", "onChange"]),
              e.annotated ? (l(), a(w, {
                key: 0,
                type: "warning",
                effect: "plain",
                size: "small",
                style: { position: "absolute", top: "0", right: "0", "z-index": "999" }
              }, {
                default: f(() => [
                  E(F(e.sdform.joiner_field.field_name), 1)
                ]),
                _: 1
              })) : b("", !0)
            ]),
            _: 1
          }, 8, ["label", "label-width", "size", "label-position", "class", "prop"])) : b("", !0)
        ], 8, bf)) : b("", !0),
        e.dataError ? (l(), a(r, {
          key: 1,
          title: "Data Validation Error",
          type: "error",
          style: { "margin-bottom": "15px" }
        }, {
          default: f(() => [
            v("ul", gf, [
              (l(!0), c(y, null, T(e.formData.xerrorx, (K, re) => (l(), c("li", null, [
                v("b", null, [
                  v("u", null, F(re), 1)
                ]),
                E(" " + F(K), 1)
              ]))), 256))
            ])
          ]),
          _: 1
        })) : b("", !0),
        e.showInput ? (l(), c("div", Ff, [
          (l(!0), c(y, null, T(e.fields, (K, re) => (l(), c(y, null, [
            K.category === "container" ? (l(), a(N(K.component + "-render"), {
              field: K,
              key: K.id ? K.id : re,
              "parent-list": e.fields,
              "index-of-parent-list": re,
              "parent-field": null
            }, null, 8, ["field", "parent-list", "index-of-parent-list"])) : (l(), a(N(K.component), {
              field: K,
              "form-model": e.formDataModel,
              builder: null,
              "builder-status": !1,
              key: K.id ? K.id : re,
              "parent-list": e.fields,
              "index-of-parent-list": re,
              "parent-field": null
            }, null, 8, ["field", "form-model", "parent-list", "index-of-parent-list"]))
          ], 64))), 256))
        ])) : b("", !0)
      ]),
      _: 1
    }, 8, ["label-position", "size", "class", "label-width", "model"])), [
      [se, !e.joinerReady]
    ]),
    e.showPopupFlag ? (l(), c("div", yf, [
      (l(), a(k, he({
        key: e.subFormBindProps.formId,
        ref: "refSubForm"
      }, e.subFormBindProps, {
        "is-sub-form": !0,
        "user-state": e.userState
      }), null, 16, ["user-state"]))
    ])) : b("", !0),
    e.showPopupGridFlag ? (l(), c("div", vf, [
      h(B, he({ ref: "refGrid" }, e.gridBindProps, { "user-state": e.userState }), null, 16, ["user-state"])
    ])) : b("", !0)
  ], 64);
}
const Cf = /* @__PURE__ */ I(cf, [["render", wf], ["__scopeId", "data-v-6ce45eb2"]]), mp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cf
}, Symbol.toStringTag, { value: "Module" }));
export {
  mp as S,
  pp as i
};
