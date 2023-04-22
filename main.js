/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@stencil/core/internal/client/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BUILD": () => (/* reexport safe */ _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD),
/* harmony export */   "Build": () => (/* binding */ Build),
/* harmony export */   "CSS": () => (/* binding */ CSS),
/* harmony export */   "Context": () => (/* binding */ Context),
/* harmony export */   "Env": () => (/* reexport safe */ _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.Env),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "H": () => (/* binding */ H),
/* harmony export */   "HTMLElement": () => (/* binding */ H),
/* harmony export */   "Host": () => (/* binding */ Host),
/* harmony export */   "NAMESPACE": () => (/* reexport safe */ _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE),
/* harmony export */   "STENCIL_DEV_MODE": () => (/* binding */ STENCIL_DEV_MODE),
/* harmony export */   "addHostEventListeners": () => (/* binding */ addHostEventListeners),
/* harmony export */   "bootstrapLazy": () => (/* binding */ bootstrapLazy),
/* harmony export */   "cmpModules": () => (/* binding */ cmpModules),
/* harmony export */   "connectedCallback": () => (/* binding */ connectedCallback),
/* harmony export */   "consoleDevError": () => (/* binding */ consoleDevError),
/* harmony export */   "consoleDevInfo": () => (/* binding */ consoleDevInfo),
/* harmony export */   "consoleDevWarn": () => (/* binding */ consoleDevWarn),
/* harmony export */   "consoleError": () => (/* binding */ consoleError),
/* harmony export */   "createEvent": () => (/* binding */ createEvent),
/* harmony export */   "defineCustomElement": () => (/* binding */ defineCustomElement),
/* harmony export */   "disconnectedCallback": () => (/* binding */ disconnectedCallback),
/* harmony export */   "doc": () => (/* binding */ doc),
/* harmony export */   "forceModeUpdate": () => (/* binding */ forceModeUpdate),
/* harmony export */   "forceUpdate": () => (/* binding */ forceUpdate),
/* harmony export */   "getAssetPath": () => (/* binding */ getAssetPath),
/* harmony export */   "getConnect": () => (/* binding */ getConnect),
/* harmony export */   "getContext": () => (/* binding */ getContext),
/* harmony export */   "getElement": () => (/* binding */ getElement),
/* harmony export */   "getHostRef": () => (/* binding */ getHostRef),
/* harmony export */   "getMode": () => (/* binding */ getMode),
/* harmony export */   "getRenderingRef": () => (/* binding */ getRenderingRef),
/* harmony export */   "getValue": () => (/* binding */ getValue),
/* harmony export */   "h": () => (/* binding */ h),
/* harmony export */   "insertVdomAnnotations": () => (/* binding */ insertVdomAnnotations),
/* harmony export */   "isMemberInElement": () => (/* binding */ isMemberInElement),
/* harmony export */   "loadModule": () => (/* binding */ loadModule),
/* harmony export */   "modeResolutionChain": () => (/* binding */ modeResolutionChain),
/* harmony export */   "nextTick": () => (/* binding */ nextTick),
/* harmony export */   "parsePropertyValue": () => (/* binding */ parsePropertyValue),
/* harmony export */   "plt": () => (/* binding */ plt),
/* harmony export */   "postUpdateComponent": () => (/* binding */ postUpdateComponent),
/* harmony export */   "promiseResolve": () => (/* binding */ promiseResolve),
/* harmony export */   "proxyComponent": () => (/* binding */ proxyComponent),
/* harmony export */   "proxyCustomElement": () => (/* binding */ proxyCustomElement),
/* harmony export */   "readTask": () => (/* binding */ readTask),
/* harmony export */   "registerHost": () => (/* binding */ registerHost),
/* harmony export */   "registerInstance": () => (/* binding */ registerInstance),
/* harmony export */   "renderVdom": () => (/* binding */ renderVdom),
/* harmony export */   "setAssetPath": () => (/* binding */ setAssetPath),
/* harmony export */   "setErrorHandler": () => (/* binding */ setErrorHandler),
/* harmony export */   "setMode": () => (/* binding */ setMode),
/* harmony export */   "setNonce": () => (/* binding */ setNonce),
/* harmony export */   "setPlatformHelpers": () => (/* binding */ setPlatformHelpers),
/* harmony export */   "setPlatformOptions": () => (/* binding */ setPlatformOptions),
/* harmony export */   "setValue": () => (/* binding */ setValue),
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "supportsConstructableStylesheets": () => (/* binding */ supportsConstructableStylesheets),
/* harmony export */   "supportsListenerOptions": () => (/* binding */ supportsListenerOptions),
/* harmony export */   "supportsShadow": () => (/* binding */ supportsShadow),
/* harmony export */   "win": () => (/* binding */ win),
/* harmony export */   "writeTask": () => (/* binding */ writeTask)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/app-data */ "./node_modules/@stencil/core/internal/app-data/index.js");
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 *
 * Modified for Stencil's renderer and slot projection
 */
let scopeId;
let contentRef;
let hostTagName;
let customError;
let i = 0;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
let isSvgMode = false;
let renderingRef = null;
let queueCongestion = 0;
let queuePending = false;
/*
 Stencil Client Platform v2.22.3 | MIT Licensed | https://stenciljs.com
 */

const Build = {
    isDev: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev ? true : false,
    isBrowser: true,
    isServer: false,
    isTesting: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isTesting ? true : false,
};
const Context = {};
const getAssetPath = (path) => {
    const assetUrl = new URL(path, plt.$resourcesUrl$);
    return assetUrl.origin !== win.location.origin ? assetUrl.href : assetUrl.pathname;
};
const setAssetPath = (path) => (plt.$resourcesUrl$ = path);
const createTime = (fnName, tagName = '') => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile && performance.mark) {
        const key = `st:${fnName}:${tagName}:${i++}`;
        // Start
        performance.mark(key);
        // End
        return () => performance.measure(`[Stencil] ${fnName}() <${tagName}>`, key);
    }
    else {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile && performance.mark) {
        if (performance.getEntriesByName(key, 'mark').length === 0) {
            performance.mark(key);
        }
        return () => {
            if (performance.getEntriesByName(measureText, 'measure').length === 0) {
                performance.measure(measureText, key);
            }
        };
    }
    else {
        return () => {
            return;
        };
    }
};
const inspect = (ref) => {
    const hostRef = getHostRef(ref);
    if (!hostRef) {
        return undefined;
    }
    const flags = hostRef.$flags$;
    const hostElement = hostRef.$hostElement$;
    return {
        renderCount: hostRef.$renderCount$,
        flags: {
            hasRendered: !!(flags & 2 /* HOST_FLAGS.hasRendered */),
            hasConnected: !!(flags & 1 /* HOST_FLAGS.hasConnected */),
            isWaitingForChildren: !!(flags & 4 /* HOST_FLAGS.isWaitingForChildren */),
            isConstructingInstance: !!(flags & 8 /* HOST_FLAGS.isConstructingInstance */),
            isQueuedForUpdate: !!(flags & 16 /* HOST_FLAGS.isQueuedForUpdate */),
            hasInitializedComponent: !!(flags & 32 /* HOST_FLAGS.hasInitializedComponent */),
            hasLoadedComponent: !!(flags & 64 /* HOST_FLAGS.hasLoadedComponent */),
            isWatchReady: !!(flags & 128 /* HOST_FLAGS.isWatchReady */),
            isListenReady: !!(flags & 256 /* HOST_FLAGS.isListenReady */),
            needsRerender: !!(flags & 512 /* HOST_FLAGS.needsRerender */),
        },
        instanceValues: hostRef.$instanceValues$,
        ancestorComponent: hostRef.$ancestorComponent$,
        hostElement,
        lazyInstance: hostRef.$lazyInstance$,
        vnode: hostRef.$vnode$,
        modeName: hostRef.$modeName$,
        onReadyPromise: hostRef.$onReadyPromise$,
        onReadyResolve: hostRef.$onReadyResolve$,
        onInstancePromise: hostRef.$onInstancePromise$,
        onInstanceResolve: hostRef.$onInstanceResolve$,
        onRenderResolve: hostRef.$onRenderResolve$,
        queuedListeners: hostRef.$queuedListeners$,
        rmListeners: hostRef.$rmListeners$,
        ['s-id']: hostElement['s-id'],
        ['s-cr']: hostElement['s-cr'],
        ['s-lr']: hostElement['s-lr'],
        ['s-p']: hostElement['s-p'],
        ['s-rc']: hostElement['s-rc'],
        ['s-sc']: hostElement['s-sc'],
    };
};
const installDevTools = () => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.devTools) {
        const stencil = (win.stencil = win.stencil || {});
        const originalInspect = stencil.inspect;
        stencil.inspect = (ref) => {
            let result = inspect(ref);
            if (!result && typeof originalInspect === 'function') {
                result = originalInspect(ref);
            }
            return result;
        };
    }
};
const CONTENT_REF_ID = 'r';
const ORG_LOCATION_ID = 'o';
const SLOT_NODE_ID = 's';
const TEXT_NODE_ID = 't';
const HYDRATE_ID = 's-id';
const HYDRATED_STYLE_ID = 'sty-id';
const HYDRATE_CHILD_ID = 'c-id';
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
/**
 * Namespaces
 */
const SVG_NS = 'http://www.w3.org/2000/svg';
const HTML_NS = 'http://www.w3.org/1999/xhtml';
const isDef = (v) => v != null;
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
/**
 * Helper method for querying a `meta` tag that contains a nonce value
 * out of a DOM's head.
 *
 * @param doc The DOM containing the `head` to query against
 * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag
 * exists or the tag has no content.
 */
function queryNonceMetaTagContent(doc) {
    var _a, _b, _c;
    return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('content')) !== null && _c !== void 0 ? _c : undefined;
}
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let key = null;
    let slotName = null;
    let simple = false;
    let lastSimple = false;
    const vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if ((simple = typeof nodeName !== 'function' && !isComplexType(child))) {
                    child = String(child);
                }
                else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && typeof nodeName !== 'function' && child.$flags$ === undefined) {
                    consoleDevError(`vNode passed as children has unexpected type.
Make sure it's using the correct h() function.
Empty objects can also be the cause, look for JSX comments that became objects.`);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && nodeName === 'input') {
            validateInputProperties(vnodeData);
        }
        // normalize class / classname attributes
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey && vnodeData.key) {
            key = vnodeData.key;
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && vnodeData.name) {
            slotName = vnodeData.name;
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomClass) {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class =
                    typeof classData !== 'object'
                        ? classData
                        : Object.keys(classData)
                            .filter((k) => classData[k])
                            .join(' ');
            }
        }
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && vNodeChildren.some(isHost)) {
        consoleDevError(`The <Host> must be the single root component. Make sure:
- You are NOT using hostData() and <Host> in the same component.
- <Host> is used once, and it's the single root component of the render() function.`);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomFunctional && typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey) {
        vnode.$key$ = key;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
        vnode.$name$ = slotName;
    }
    return vnode;
};
/**
 * A utility function for creating a virtual DOM node from a tag and some
 * possible text content.
 *
 * @param tag the tag for this element
 * @param text possible text content for the node
 * @returns a newly-minted virtual DOM node
 */
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null,
    };
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomAttribute) {
        vnode.$attrs$ = null;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey) {
        vnode.$key$ = null;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
        vnode.$name$ = null;
    }
    return vnode;
};
const Host = {};
/**
 * Check whether a given node is a Host node or not
 *
 * @param node the virtual DOM node to check
 * @returns whether it's a Host node or not
 */
const isHost = (node) => node && node.$tag$ === Host;
/**
 * Implementation of {@link d.FunctionalUtilities} for Stencil's VDom.
 *
 * Note that these functions convert from {@link d.VNode} to
 * {@link d.ChildNode} to give functional component developers a friendly
 * interface.
 */
const vdomFnUtils = {
    forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
    map: (children, cb) => children.map(convertToPublic).map(cb).map(convertToPrivate),
};
/**
 * Convert a {@link d.VNode} to a {@link d.ChildNode} in order to present a
 * friendlier public interface (hence, 'convertToPublic').
 *
 * @param node the virtual DOM node to convert
 * @returns a converted child node
 */
const convertToPublic = (node) => ({
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$,
});
/**
 * Convert a {@link d.ChildNode} back to an equivalent {@link d.VNode} in
 * order to use the resulting object in the virtual DOM. The initial object was
 * likely created as part of presenting a public API, so converting it back
 * involved making it 'private' again (hence, `convertToPrivate`).
 *
 * @param node the child node to convert
 * @returns a converted virtual DOM node
 */
const convertToPrivate = (node) => {
    if (typeof node.vtag === 'function') {
        const vnodeData = Object.assign({}, node.vattrs);
        if (node.vkey) {
            vnodeData.key = node.vkey;
        }
        if (node.vname) {
            vnodeData.name = node.vname;
        }
        return h(node.vtag, vnodeData, ...(node.vchildren || []));
    }
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
/**
 * Validates the ordering of attributes on an input element
 *
 * @param inputElm the element to validate
 */
const validateInputProperties = (inputElm) => {
    const props = Object.keys(inputElm);
    const value = props.indexOf('value');
    if (value === -1) {
        return;
    }
    const typeIndex = props.indexOf('type');
    const minIndex = props.indexOf('min');
    const maxIndex = props.indexOf('max');
    const stepIndex = props.indexOf('step');
    if (value < typeIndex || value < minIndex || value < maxIndex || value < stepIndex) {
        consoleDevWarn(`The "value" prop of <input> should be set after "min", "max", "type" and "step"`);
    }
};
const initializeClientHydrate = (hostElm, tagName, hostId, hostRef) => {
    const endHydrate = createTime('hydrateClient', tagName);
    const shadowRoot = hostElm.shadowRoot;
    const childRenderNodes = [];
    const slotNodes = [];
    const shadowRootNodes = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && shadowRoot ? [] : null;
    const vnode = (hostRef.$vnode$ = newVNode(tagName, null));
    if (!plt.$orgLocNodes$) {
        initializeDocumentHydrate(doc.body, (plt.$orgLocNodes$ = new Map()));
    }
    hostElm[HYDRATE_ID] = hostId;
    hostElm.removeAttribute(HYDRATE_ID);
    clientHydrate(vnode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, hostElm, hostId);
    childRenderNodes.map((c) => {
        const orgLocationId = c.$hostId$ + '.' + c.$nodeId$;
        const orgLocationNode = plt.$orgLocNodes$.get(orgLocationId);
        const node = c.$elm$;
        if (orgLocationNode && supportsShadow && orgLocationNode['s-en'] === '') {
            orgLocationNode.parentNode.insertBefore(node, orgLocationNode.nextSibling);
        }
        if (!shadowRoot) {
            node['s-hn'] = tagName;
            if (orgLocationNode) {
                node['s-ol'] = orgLocationNode;
                node['s-ol']['s-nr'] = node;
            }
        }
        plt.$orgLocNodes$.delete(orgLocationId);
    });
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && shadowRoot) {
        shadowRootNodes.map((shadowRootNode) => {
            if (shadowRootNode) {
                shadowRoot.appendChild(shadowRootNode);
            }
        });
    }
    endHydrate();
};
const clientHydrate = (parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node, hostId) => {
    let childNodeType;
    let childIdSplt;
    let childVNode;
    let i;
    if (node.nodeType === 1 /* NODE_TYPE.ElementNode */) {
        childNodeType = node.getAttribute(HYDRATE_CHILD_ID);
        if (childNodeType) {
            // got the node data from the element's attribute
            // `${hostId}.${nodeId}.${depth}.${index}`
            childIdSplt = childNodeType.split('.');
            if (childIdSplt[0] === hostId || childIdSplt[0] === '0') {
                childVNode = {
                    $flags$: 0,
                    $hostId$: childIdSplt[0],
                    $nodeId$: childIdSplt[1],
                    $depth$: childIdSplt[2],
                    $index$: childIdSplt[3],
                    $tag$: node.tagName.toLowerCase(),
                    $elm$: node,
                    $attrs$: null,
                    $children$: null,
                    $key$: null,
                    $name$: null,
                    $text$: null,
                };
                childRenderNodes.push(childVNode);
                node.removeAttribute(HYDRATE_CHILD_ID);
                // this is a new child vnode
                // so ensure its parent vnode has the vchildren array
                if (!parentVNode.$children$) {
                    parentVNode.$children$ = [];
                }
                // add our child vnode to a specific index of the vnode's children
                parentVNode.$children$[childVNode.$index$] = childVNode;
                // this is now the new parent vnode for all the next child checks
                parentVNode = childVNode;
                if (shadowRootNodes && childVNode.$depth$ === '0') {
                    shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                }
            }
        }
        // recursively drill down, end to start so we can remove nodes
        for (i = node.childNodes.length - 1; i >= 0; i--) {
            clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.childNodes[i], hostId);
        }
        if (node.shadowRoot) {
            // keep drilling down through the shadow root nodes
            for (i = node.shadowRoot.childNodes.length - 1; i >= 0; i--) {
                clientHydrate(parentVNode, childRenderNodes, slotNodes, shadowRootNodes, hostElm, node.shadowRoot.childNodes[i], hostId);
            }
        }
    }
    else if (node.nodeType === 8 /* NODE_TYPE.CommentNode */) {
        // `${COMMENT_TYPE}.${hostId}.${nodeId}.${depth}.${index}`
        childIdSplt = node.nodeValue.split('.');
        if (childIdSplt[1] === hostId || childIdSplt[1] === '0') {
            // comment node for either the host id or a 0 host id
            childNodeType = childIdSplt[0];
            childVNode = {
                $flags$: 0,
                $hostId$: childIdSplt[1],
                $nodeId$: childIdSplt[2],
                $depth$: childIdSplt[3],
                $index$: childIdSplt[4],
                $elm$: node,
                $attrs$: null,
                $children$: null,
                $key$: null,
                $name$: null,
                $tag$: null,
                $text$: null,
            };
            if (childNodeType === TEXT_NODE_ID) {
                childVNode.$elm$ = node.nextSibling;
                if (childVNode.$elm$ && childVNode.$elm$.nodeType === 3 /* NODE_TYPE.TextNode */) {
                    childVNode.$text$ = childVNode.$elm$.textContent;
                    childRenderNodes.push(childVNode);
                    // remove the text comment since it's no longer needed
                    node.remove();
                    if (!parentVNode.$children$) {
                        parentVNode.$children$ = [];
                    }
                    parentVNode.$children$[childVNode.$index$] = childVNode;
                    if (shadowRootNodes && childVNode.$depth$ === '0') {
                        shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                    }
                }
            }
            else if (childVNode.$hostId$ === hostId) {
                // this comment node is specifcally for this host id
                if (childNodeType === SLOT_NODE_ID) {
                    // `${SLOT_NODE_ID}.${hostId}.${nodeId}.${depth}.${index}.${slotName}`;
                    childVNode.$tag$ = 'slot';
                    if (childIdSplt[5]) {
                        node['s-sn'] = childVNode.$name$ = childIdSplt[5];
                    }
                    else {
                        node['s-sn'] = '';
                    }
                    node['s-sr'] = true;
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && shadowRootNodes) {
                        // browser support shadowRoot and this is a shadow dom component
                        // create an actual slot element
                        childVNode.$elm$ = doc.createElement(childVNode.$tag$);
                        if (childVNode.$name$) {
                            // add the slot name attribute
                            childVNode.$elm$.setAttribute('name', childVNode.$name$);
                        }
                        // insert the new slot element before the slot comment
                        node.parentNode.insertBefore(childVNode.$elm$, node);
                        // remove the slot comment since it's not needed for shadow
                        node.remove();
                        if (childVNode.$depth$ === '0') {
                            shadowRootNodes[childVNode.$index$] = childVNode.$elm$;
                        }
                    }
                    slotNodes.push(childVNode);
                    if (!parentVNode.$children$) {
                        parentVNode.$children$ = [];
                    }
                    parentVNode.$children$[childVNode.$index$] = childVNode;
                }
                else if (childNodeType === CONTENT_REF_ID) {
                    // `${CONTENT_REF_ID}.${hostId}`;
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && shadowRootNodes) {
                        // remove the content ref comment since it's not needed for shadow
                        node.remove();
                    }
                    else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
                        hostElm['s-cr'] = node;
                        node['s-cn'] = true;
                    }
                }
            }
        }
    }
    else if (parentVNode && parentVNode.$tag$ === 'style') {
        const vnode = newVNode(null, node.textContent);
        vnode.$elm$ = node;
        vnode.$index$ = '0';
        parentVNode.$children$ = [vnode];
    }
};
const initializeDocumentHydrate = (node, orgLocNodes) => {
    if (node.nodeType === 1 /* NODE_TYPE.ElementNode */) {
        let i = 0;
        for (; i < node.childNodes.length; i++) {
            initializeDocumentHydrate(node.childNodes[i], orgLocNodes);
        }
        if (node.shadowRoot) {
            for (i = 0; i < node.shadowRoot.childNodes.length; i++) {
                initializeDocumentHydrate(node.shadowRoot.childNodes[i], orgLocNodes);
            }
        }
    }
    else if (node.nodeType === 8 /* NODE_TYPE.CommentNode */) {
        const childIdSplt = node.nodeValue.split('.');
        if (childIdSplt[0] === ORG_LOCATION_ID) {
            orgLocNodes.set(childIdSplt[1] + '.' + childIdSplt[2], node);
            node.nodeValue = '';
            // useful to know if the original location is
            // the root light-dom of a shadow dom component
            node['s-en'] = childIdSplt[3];
        }
    }
};
// Private
const computeMode = (elm) => modeResolutionChain.map((h) => h(elm)).find((m) => !!m);
// Public
const setMode = (handler) => modeResolutionChain.push(handler);
const getMode = (ref) => getHostRef(ref).$modeName$;
/**
 * Parse a new property value for a given property type.
 *
 * While the prop value can reasonably be expected to be of `any` type as far as TypeScript's type checker is concerned,
 * it is not safe to assume that the string returned by evaluating `typeof propValue` matches:
 *   1. `any`, the type given to `propValue` in the function signature
 *   2. the type stored from `propType`.
 *
 * This function provides the capability to parse/coerce a property's value to potentially any other JavaScript type.
 *
 * Property values represented in TSX preserve their type information. In the example below, the number 0 is passed to
 * a component. This `propValue` will preserve its type information (`typeof propValue === 'number'`). Note that is
 * based on the type of the value being passed in, not the type declared of the class member decorated with `@Prop`.
 * ```tsx
 * <my-cmp prop-val={0}></my-cmp>
 * ```
 *
 * HTML prop values on the other hand, will always a string
 *
 * @param propValue the new value to coerce to some type
 * @param propType the type of the prop, expressed as a binary number
 * @returns the parsed/coerced value
 */
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.propBoolean && propType & 4 /* MEMBER_FLAGS.Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return propValue === 'false' ? false : propValue === '' || !!propValue;
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.propNumber && propType & 2 /* MEMBER_FLAGS.Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.propString && propType & 1 /* MEMBER_FLAGS.String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getElement = (ref) => (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? getHostRef(ref).$hostElement$ : ref);
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && !elm.isConnected) {
                consoleDevWarn(`The "${name}" event was emitted, but the dispatcher node is no longer connected to the dom.`);
            }
            return emitEvent(elm, name, {
                bubbles: !!(flags & 4 /* EVENT_FLAGS.Bubbles */),
                composed: !!(flags & 2 /* EVENT_FLAGS.Composed */),
                cancelable: !!(flags & 1 /* EVENT_FLAGS.Cancellable */),
                detail,
            });
        },
    };
};
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */
const emitEvent = (elm, name, opts) => {
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const rootAppliedStyles = /*@__PURE__*/ new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructableStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        if (typeof style === 'string') {
            style = cssText;
        }
        else {
            style.replaceSync(cssText);
        }
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    var _a;
    let scopeId = getScopeId(cmpMeta, mode);
    const style = styles.get(scopeId);
    if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.attachStyles) {
        return scopeId;
    }
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* NODE_TYPE.DocumentFragment */ ? styleContainerNode : doc;
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
            }
            if (!appliedStyles.has(scopeId)) {
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide &&
                    styleContainerNode.host &&
                    (styleElm = styleContainerNode.querySelector(`[${HYDRATED_STYLE_ID}="${scopeId}"]`))) {
                    // This is only happening on native shadow-dom, do not needs CSS var shim
                    styleElm.innerHTML = style;
                }
                else {
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssVarShim && plt.$cssShim$) {
                        styleElm = plt.$cssShim$.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* CMP_FLAGS.needsScopedEncapsulation */));
                        const newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    // Apply CSP nonce to the style tag if it exists
                    const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
                    if (nonce != null) {
                        styleElm.setAttribute('nonce', nonce);
                    }
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement) {
                        styleElm.setAttribute(HYDRATED_STYLE_ID, scopeId);
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.constructableCSS && !styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const flags = cmpMeta.$flags$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle(_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && supportsShadow && elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta, hostRef.$modeName$, elm);
    if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped) && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssAnnotations && flags & 10 /* CMP_FLAGS.needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped && flags & 2 /* CMP_FLAGS.scopedCssEncapsulation */) {
            elm.classList.add(scopeId + '-s');
        }
    }
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.mode && mode && cmp.$flags$ & 32 /* CMP_FLAGS.hasMode */ ? cmp.$tagName$ + '-' + mode : cmp.$tagName$);
const convertScopedToShadow = (css) => css.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{');
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomClass && memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
        }
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomStyle && memberName === 'style') {
            // update style attribute, css properties and values
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable) {
                for (const prop in oldValue) {
                    if (!newValue || newValue[prop] == null) {
                        if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && prop.includes('-')) {
                            elm.style.removeProperty(prop);
                        }
                        else {
                            elm.style[prop] = '';
                        }
                    }
                }
            }
            for (const prop in newValue) {
                if (!oldValue || newValue[prop] !== oldValue[prop]) {
                    if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && prop.includes('-')) {
                        elm.style.setProperty(prop, newValue[prop]);
                    }
                    else {
                        elm.style[prop] = newValue[prop];
                    }
                }
            }
        }
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey && memberName === 'key')
            ;
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomRef && memberName === 'ref') {
            // minifier will clean this up
            if (newValue) {
                newValue(elm);
            }
        }
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomListener &&
            (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? !isProp : !elm.__lookupSetter__(memberName)) &&
            memberName[0] === 'o' &&
            memberName[1] === 'n') {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === '-') {
                // on- prefixed events
                // allows to be explicit about the dom event to listen without any magic
                // under the hood:
                // <my-cmp on-click> // listens for "click"
                // <my-cmp on-Click> // listens for "Click"
                // <my-cmp on-ionChange> // listens for "ionChange"
                // <my-cmp on-EVENTS> // listens for "EVENTS"
                memberName = memberName.slice(3);
            }
            else if (isMemberInElement(win, ln)) {
                // standard event
                // the JSX attribute could have been "onMouseOver" and the
                // member name "onmouseover" is on the window's prototype
                // so let's add the listener "mouseover", which is all lowercased
                memberName = ln.slice(2);
            }
            else {
                // custom event
                // the JSX attribute could have been "onMyCustomEvent"
                // so let's trim off the "on" prefix and lowercase the first character
                // and add the listener "myCustomEvent"
                // except for the first character, we keep the event name case
                memberName = ln[2] + memberName.slice(3);
            }
            if (oldValue) {
                plt.rel(elm, memberName, oldValue, false);
            }
            if (newValue) {
                plt.ael(elm, memberName, newValue, false);
            }
        }
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomPropOrAttr) {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                try {
                    if (!elm.tagName.includes('-')) {
                        const n = newValue == null ? '' : newValue;
                        // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                        if (memberName === 'list') {
                            isProp = false;
                        }
                        else if (oldValue == null || elm[memberName] != n) {
                            elm[memberName] = n;
                        }
                    }
                    else {
                        elm[memberName] = newValue;
                    }
                }
                catch (e) { }
            }
            /**
             * Need to manually update attribute if:
             * - memberName is not an attribute
             * - if we are rendering the host element in order to reflect attribute
             * - if it's a SVG, since properties might not work in <svg>
             * - if the newValue is null/undefined or 'false'.
             */
            let xlink = false;
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomXlink) {
                if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                    memberName = ln;
                    xlink = true;
                }
            }
            if (newValue == null || newValue === false) {
                if (newValue !== false || elm.getAttribute(memberName) === '') {
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomXlink && xlink) {
                        elm.removeAttributeNS(XLINK_NS, memberName);
                    }
                    else {
                        elm.removeAttribute(memberName);
                    }
                }
            }
            else if ((!isProp || flags & 4 /* VNODE_FLAGS.isHost */ || isSvg) && !isComplex) {
                newValue = newValue === true ? '' : newValue;
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomXlink && xlink) {
                    elm.setAttributeNS(XLINK_NS, memberName, newValue);
                }
                else {
                    elm.setAttribute(memberName, newValue);
                }
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value ? [] : value.split(parseClassListRegex));
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = newVnode.$elm$.nodeType === 11 /* NODE_TYPE.DocumentFragment */ && newVnode.$elm$.host
        ? newVnode.$elm$.host
        : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable) {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
/**
 * Create a DOM Node corresponding to one of the children of a given VNode.
 *
 * @param oldParentVNode the parent VNode from the previous render
 * @param newParentVNode the parent VNode from the current render
 * @param childIndex the index of the VNode, in the _new_ parent node's
 * children, for which we will create a new DOM node
 * @param parentElm the parent DOM node which our new node will be a child of
 * @returns the newly created node
 */
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    const newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    let oldVNode;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && !useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            newVNode.$flags$ |= newVNode.$children$
                ? // slot element has fallback content
                    2 /* VNODE_FLAGS.isSlotFallback */
                : // slot element does not have fallback content
                    1 /* VNODE_FLAGS.isSlotReference */;
        }
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && newVNode.$elm$) {
        consoleDevError(`The JSX ${newVNode.$text$ !== null ? `"${newVNode.$text$}" text` : `"${newVNode.$tag$}" element`} node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes`);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText && newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && newVNode.$flags$ & 1 /* VNODE_FLAGS.isSlotReference */) {
        // create a slot reference node
        elm = newVNode.$elm$ =
            _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDebug || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide ? slotReferenceDebugNode(newVNode) : doc.createTextNode('');
    }
    else {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg && !isSvgMode) {
            isSvgMode = newVNode.$tag$ === 'svg';
        }
        // create element
        elm = newVNode.$elm$ = (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg
            ? doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && newVNode.$flags$ & 2 /* VNODE_FLAGS.isSlotFallback */
                ? 'slot-fb'
                : newVNode.$tag$)
            : doc.createElement(_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && newVNode.$flags$ & 2 /* VNODE_FLAGS.isSlotFallback */
                ? 'slot-fb'
                : newVNode.$tag$));
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg && isSvgMode && newVNode.$tag$ === 'foreignObject') {
            isSvgMode = false;
        }
        // add css classes, attrs, props, listeners, etc.
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomAttribute) {
            updateElement(null, newVNode, isSvgMode);
        }
        if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped) && isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg) {
            if (newVNode.$tag$ === 'svg') {
                // Only reset the SVG context when we're exiting <svg> element
                isSvgMode = false;
            }
            else if (elm.tagName === 'foreignObject') {
                // Reenter SVG context when we're exiting <foreignObject> element
                isSvgMode = true;
            }
        }
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
        elm['s-hn'] = hostTagName;
        if (newVNode.$flags$ & (2 /* VNODE_FLAGS.isSlotFallback */ | 1 /* VNODE_FLAGS.isSlotReference */)) {
            // remember the content reference comment
            elm['s-sr'] = true;
            // remember the content reference comment
            elm['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            elm['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                // we've got an old slot vnode and the wrapper is being replaced
                // so let's move the old slot content back to it's original location
                putBackInOriginalLocation(oldParentVNode.$elm$, false);
            }
        }
    }
    return elm;
};
const putBackInOriginalLocation = (parentElm, recursive) => {
    plt.$flags$ |= 1 /* PLATFORM_FLAGS.isTmpDisconnected */;
    const oldSlotChildNodes = parentElm.childNodes;
    for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        const childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // // this child node in the old element is from another component
            // // remove this node from the old slot's parent
            // childNode.remove();
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot in need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* PLATFORM_FLAGS.isTmpDisconnected */;
};
/**
 * Create DOM nodes corresponding to a list of {@link d.Vnode} objects and
 * add them to the DOM in the appropriate place.
 *
 * @param parentElm the DOM node which should be used as a parent for the new
 * DOM nodes
 * @param before a child of the `parentElm` which the new children should be
 * inserted before (optional)
 * @param parentVNode the parent virtual DOM node
 * @param vnodes the new child virtual DOM nodes to produce DOM nodes for
 * @param startIdx the index in the child virtual DOM nodes at which to start
 * creating DOM nodes (inclusive)
 * @param endIdx the index in the child virtual DOM nodes at which to stop
 * creating DOM nodes (inclusive)
 */
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    let childNode;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation ? referenceNode(before) : before);
            }
        }
    }
};
/**
 * Remove the DOM elements corresponding to a list of {@link d.VNode} objects.
 * This can be used to, for instance, clean up after a list of children which
 * should no longer be shown.
 *
 * This function also handles some of Stencil's slot relocation logic.
 *
 * @param vnodes a list of virtual DOM nodes to remove
 * @param startIdx the index at which to start removing nodes (inclusive)
 * @param endIdx the index at which to stop removing nodes (inclusive)
 * @param vnode a VNode
 * @param elm an element
 */
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if ((vnode = vnodes[startIdx])) {
            elm = vnode.$elm$;
            callNodeRefs(vnode);
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
                // we're removing this element
                // so it's possible we need to show slot fallback content now
                checkSlotFallbackVisibility = true;
                if (elm['s-ol']) {
                    // remove the original location comment
                    elm['s-ol'].remove();
                }
                else {
                    // it's possible that child nodes of the node
                    // that's being removed are slot nodes
                    putBackInOriginalLocation(elm, true);
                }
            }
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
/**
 * Reconcile the children of a new VNode with the children of an old VNode by
 * traversing the two collections of children, identifying nodes that are
 * conserved or changed, calling out to `patch` to make any necessary
 * updates to the DOM, and rearranging DOM nodes as needed.
 *
 * The algorithm for reconciling children works by analyzing two 'windows' onto
 * the two arrays of children (`oldCh` and `newCh`). We keep track of the
 * 'windows' by storing start and end indices and references to the
 * corresponding array entries. Initially the two 'windows' are basically equal
 * to the entire array, but we progressively narrow the windows until there are
 * no children left to update by doing the following:
 *
 * 1. Skip any `null` entries at the beginning or end of the two arrays, so
 *    that if we have an initial array like the following we'll end up dealing
 *    only with a window bounded by the highlighted elements:
 *
 *    [null, null, VNode1 , ... , VNode2, null, null]
 *                 ^^^^^^         ^^^^^^
 *
 * 2. Check to see if the elements at the head and tail positions are equal
 *    across the windows. This will basically detect elements which haven't
 *    been added, removed, or changed position, i.e. if you had the following
 *    VNode elements (represented as HTML):
 *
 *    oldVNode: `<div><p><span>HEY</span></p></div>`
 *    newVNode: `<div><p><span>THERE</span></p></div>`
 *
 *    Then when comparing the children of the `<div>` tag we check the equality
 *    of the VNodes corresponding to the `<p>` tags and, since they are the
 *    same tag in the same position, we'd be able to avoid completely
 *    re-rendering the subtree under them with a new DOM element and would just
 *    call out to `patch` to handle reconciling their children and so on.
 *
 * 3. Check, for both windows, to see if the element at the beginning of the
 *    window corresponds to the element at the end of the other window. This is
 *    a heuristic which will let us identify _some_ situations in which
 *    elements have changed position, for instance it _should_ detect that the
 *    children nodes themselves have not changed but merely moved in the
 *    following example:
 *
 *    oldVNode: `<div><element-one /><element-two /></div>`
 *    newVNode: `<div><element-two /><element-one /></div>`
 *
 *    If we find cases like this then we also need to move the concrete DOM
 *    elements corresponding to the moved children to write the re-order to the
 *    DOM.
 *
 * 4. Finally, if VNodes have the `key` attribute set on them we check for any
 *    nodes in the old children which have the same key as the first element in
 *    our window on the new children. If we find such a node we handle calling
 *    out to `patch`, moving relevant DOM nodes, and so on, in accordance with
 *    what we find.
 *
 * Finally, once we've narrowed our 'windows' to the point that either of them
 * collapse (i.e. they have length 0) we then handle any remaining VNode
 * insertion or deletion that needs to happen to get a DOM state that correctly
 * reflects the new child VNodes. If, for instance, after our window on the old
 * children has collapsed we still have more nodes on the new children that
 * we haven't dealt with yet then we need to add them, or if the new children
 * collapse but we still have unhandled _old_ children then we need to make
 * sure the corresponding DOM nodes are removed.
 *
 * @param parentElm the node into which the parent VNode is rendered
 * @param oldCh the old children of the parent node
 * @param newVNode the new VNode which will replace the parent
 * @param newCh the new children of the parent node
 */
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // VNode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            // if the start nodes are the same then we should patch the new VNode
            // onto the old one, and increment our `newStartIdx` and `oldStartIdx`
            // indices to reflect that. We don't need to move any DOM Nodes around
            // since things are matched up in order.
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            // likewise, if the end nodes are the same we patch new onto old and
            // decrement our end indices, and also likewise in this case we don't
            // need to move any DOM Nodes.
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            // case: "Vnode moved right"
            //
            // We've found that the last node in our window on the new children is
            // the same VNode as the _first_ node in our window on the old children
            // we're dealing with now. Visually, this is the layout of these two
            // nodes:
            //
            // newCh: [..., newStartVnode , ... , newEndVnode , ...]
            //                                    ^^^^^^^^^^^
            // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
            //              ^^^^^^^^^^^^^
            //
            // In this situation we need to patch `newEndVnode` onto `oldStartVnode`
            // and move the DOM element for `oldStartVnode`.
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode);
            // We need to move the element for `oldStartVnode` into a position which
            // will be appropriate for `newEndVnode`. For this we can use
            // `.insertBefore` and `oldEndVnode.$elm$.nextSibling`. If there is a
            // sibling for `oldEndVnode.$elm$` then we want to move the DOM node for
            // `oldStartVnode` between `oldEndVnode` and it's sibling, like so:
            //
            // <old-start-node />
            // <some-intervening-node />
            // <old-end-node />
            // <!-- ->              <-- `oldStartVnode.$elm$` should be inserted here
            // <next-sibling />
            //
            // If instead `oldEndVnode.$elm$` has no sibling then we just want to put
            // the node for `oldStartVnode` at the end of the children of
            // `parentElm`. Luckily, `Node.nextSibling` will return `null` if there
            // aren't any siblings, and passing `null` to `Node.insertBefore` will
            // append it to the children of the parent element.
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            // case: "Vnode moved left"
            //
            // We've found that the first node in our window on the new children is
            // the same VNode as the _last_ node in our window on the old children.
            // Visually, this is the layout of these two nodes:
            //
            // newCh: [..., newStartVnode , ... , newEndVnode , ...]
            //              ^^^^^^^^^^^^^
            // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
            //                                    ^^^^^^^^^^^
            //
            // In this situation we need to patch `newStartVnode` onto `oldEndVnode`
            // (which will handle updating any changed attributes, reconciling their
            // children etc) but we also need to move the DOM node to which
            // `oldEndVnode` corresponds.
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && (oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode);
            // We've already checked above if `oldStartVnode` and `newStartVnode` are
            // the same node, so since we're here we know that they are not. Thus we
            // can move the element for `oldEndVnode` _before_ the element for
            // `oldStartVnode`, leaving `oldStartVnode` to be reconciled in the
            // future.
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // Here we do some checks to match up old and new nodes based on the
            // `$key$` attribute, which is set by putting a `key="my-key"` attribute
            // in the JSX for a DOM element in the implementation of a Stencil
            // component.
            //
            // First we check to see if there are any nodes in the array of old
            // children which have the same key as the first node in the new
            // children.
            idxInOld = -1;
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey) {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey && idxInOld >= 0) {
                // We found a node in the old children which matches up with the first
                // node in the new children! So let's deal with that
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    // the tag doesn't match so we'll need a new DOM element
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode);
                    // invalidate the matching old node so that we won't try to update it
                    // again later on
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // We either didn't find an element in the old children that matches
                // the key of the first new child OR the build is not using `key`
                // attributes at all. In either case we need to create a new element
                // for the new node.
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                // if we created a new node then handle inserting it to the DOM
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
                else {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        // we have some more new nodes to add which don't match up with old nodes
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && newStartIdx > newEndIdx) {
        // there are nodes in the `oldCh` array which no longer correspond to nodes
        // in the new array, so lets remove them (which entails cleaning up the
        // relevant DOM nodes)
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
/**
 * Compare two VNodes to determine if they are the same
 *
 * **NB**: This function is an equality _heuristic_ based on the available
 * information set on the two VNodes and can be misleading under certain
 * circumstances. In particular, if the two nodes do not have `key` attrs
 * (available under `$key$` on VNodes) then the function falls back on merely
 * checking that they have the same tag.
 *
 * So, in other words, if `key` attrs are not set on VNodes which may be
 * changing order within a `children` array or something along those lines then
 * we could obtain a false negative and then have to do needless re-rendering
 * (i.e. we'd say two VNodes aren't equal when in fact they should be).
 *
 * @param leftVNode the first VNode to check
 * @param rightVNode the second VNode to check
 * @returns whether they're equal or not
 */
const isSameVnode = (leftVNode, rightVNode) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (leftVNode.$tag$ === rightVNode.$tag$) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && leftVNode.$tag$ === 'slot') {
            return leftVNode.$name$ === rightVNode.$name$;
        }
        // this will be set if components in the build have `key` attrs set on them
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomKey) {
            return leftVNode.$key$ === rightVNode.$key$;
        }
        return true;
    }
    return false;
};
const referenceNode = (node) => {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
const parentReferenceNode = (node) => (node['s-ol'] ? node['s-ol'] : node).parentNode;
/**
 * Handle reconciling an outdated VNode with a new one which corresponds to
 * it. This function handles flushing updates to the DOM and reconciling the
 * children of the two nodes (if any).
 *
 * @param oldVNode an old VNode whose DOM element and children we want to update
 * @param newVNode a new VNode representing an updated version of the old one
 */
const patch = (oldVNode, newVNode) => {
    const elm = (newVNode.$elm$ = oldVNode.$elm$);
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const tag = newVNode.$tag$;
    const text = newVNode.$text$;
    let defaultHolder;
    if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText || text === null) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg) {
            // test if we're rendering an svg element, or still rendering nodes inside of one
            // only add this to the when the compiler sees we're using an svg somewhere
            isSvgMode = tag === 'svg' ? true : tag === 'foreignObject' ? false : isSvgMode;
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomAttribute || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slot && tag === 'slot')
                ;
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            // so we need to call `updateChildren` to reconcile them
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText && oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable && oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.svg && isSvgMode && tag === 'svg') {
            isSvgMode = false;
        }
    }
    else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && (defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = text;
    }
    else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomText && oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
    }
};
const updateFallbackSlotVisibility = (elm) => {
    // tslint:disable-next-line: prefer-const
    const childNodes = elm.childNodes;
    let childNode;
    let i;
    let ilen;
    let j;
    let slotNameAttr;
    let nodeType;
    for (i = 0, ilen = childNodes.length; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode.nodeType === 1 /* NODE_TYPE.ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                slotNameAttr = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                for (j = 0; j < ilen; j++) {
                    nodeType = childNodes[j].nodeType;
                    if (childNodes[j]['s-hn'] !== childNode['s-hn'] || slotNameAttr !== '') {
                        // this sibling node is from a different component OR is a named fallback slot node
                        if (nodeType === 1 /* NODE_TYPE.ElementNode */ && slotNameAttr === childNodes[j].getAttribute('slot')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                    else {
                        // this is a default fallback slot node
                        // any element or text node (with content)
                        // should hide the default fallback slot node
                        if (nodeType === 1 /* NODE_TYPE.ElementNode */ ||
                            (nodeType === 3 /* NODE_TYPE.TextNode */ && childNodes[j].textContent.trim() !== '')) {
                            childNode.hidden = true;
                            break;
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
const relocateNodes = [];
const relocateSlotContent = (elm) => {
    // tslint:disable-next-line: prefer-const
    let childNode;
    let node;
    let hostContentNodes;
    let slotNameAttr;
    let relocateNodeData;
    let j;
    let i = 0;
    const childNodes = elm.childNodes;
    const ilen = childNodes.length;
    for (; i < ilen; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && (node = childNode['s-cr']) && node.parentNode) {
            // first got the content reference comment node
            // then we got it's parent, which is where all the host content is in now
            hostContentNodes = node.parentNode.childNodes;
            slotNameAttr = childNode['s-sn'];
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                if (!node['s-cn'] && !node['s-nr'] && node['s-hn'] !== childNode['s-hn']) {
                    // let's do some relocating to its new home
                    // but never relocate a content reference node
                    // that is suppose to always represent the original content location
                    if (isNodeLocatedInSlot(node, slotNameAttr)) {
                        // it's possible we've already decided to relocate this node
                        relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                        // made some changes to slots
                        // let's make sure we also double check
                        // fallbacks are correctly hidden or shown
                        checkSlotFallbackVisibility = true;
                        node['s-sn'] = node['s-sn'] || slotNameAttr;
                        if (relocateNodeData) {
                            // previously we never found a slot home for this node
                            // but turns out we did, so let's remember it now
                            relocateNodeData.$slotRefNode$ = childNode;
                        }
                        else {
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                $slotRefNode$: childNode,
                                $nodeToRelocate$: node,
                            });
                        }
                        if (node['s-sr']) {
                            relocateNodes.map((relocateNode) => {
                                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node['s-sn'])) {
                                    relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                                    if (relocateNodeData && !relocateNode.$slotRefNode$) {
                                        relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                                    }
                                }
                            });
                        }
                    }
                    else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
                        // so far this element does not have a slot home, not setting slotRefNode on purpose
                        // if we never find a home for this element then we'll need to hide it
                        relocateNodes.push({
                            $nodeToRelocate$: node,
                        });
                    }
                }
            }
        }
        if (childNode.nodeType === 1 /* NODE_TYPE.ElementNode */) {
            relocateSlotContent(childNode);
        }
    }
};
const isNodeLocatedInSlot = (nodeToRelocate, slotNameAttr) => {
    if (nodeToRelocate.nodeType === 1 /* NODE_TYPE.ElementNode */) {
        if (nodeToRelocate.getAttribute('slot') === null && slotNameAttr === '') {
            return true;
        }
        if (nodeToRelocate.getAttribute('slot') === slotNameAttr) {
            return true;
        }
        return false;
    }
    if (nodeToRelocate['s-sn'] === slotNameAttr) {
        return true;
    }
    return slotNameAttr === '';
};
const callNodeRefs = (vNode) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomRef) {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(callNodeRefs);
    }
};
/**
 * The main entry point for Stencil's virtual DOM-based rendering engine
 *
 * Given a {@link d.HostRef} container and some virtual DOM nodes, this
 * function will handle creating a virtual DOM tree with a single root, patching
 * the current virtual DOM tree onto an old one (if any), dealing with slot
 * relocation, and reflecting attributes.
 *
 * @param hostRef data needed to root and render the virtual DOM tree, such as
 * the DOM node into which it should be rendered.
 * @param renderFnResults the virtual DOM nodes to be rendered
 */
const renderVdom = (hostRef, renderFnResults) => {
    const hostElm = hostRef.$hostElement$;
    const cmpMeta = hostRef.$cmpMeta$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    hostTagName = hostElm.tagName;
    // <Host> runtime check
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && Array.isArray(renderFnResults) && renderFnResults.some(isHost)) {
        throw new Error(`The <Host> must be the single root component.
Looks like the render() function of "${hostTagName.toLowerCase()}" is returning an array that contains the <Host>.

The render() function should look like this instead:

render() {
  // Do not return an array
  return (
    <Host>{content}</Host>
  );
}
  `);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect && cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.map(([propName, attribute]) => (rootVnode.$attrs$[attribute] = hostElm[propName]));
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* VNODE_FLAGS.isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom ? hostElm.shadowRoot || hostElm : hostElm);
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom) {
        scopeId = hostElm['s-sc'];
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
        contentRef = hostElm['s-cr'];
        useNativeShadowDom = supportsShadow && (cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) !== 0;
        // always reset
        checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation) {
        // while we're moving nodes around existing nodes, temporarily disable
        // the disconnectCallback from working
        plt.$flags$ |= 1 /* PLATFORM_FLAGS.isTmpDisconnected */;
        if (checkSlotRelocate) {
            relocateSlotContent(rootVnode.$elm$);
            let relocateData;
            let nodeToRelocate;
            let orgLocationNode;
            let parentNodeRef;
            let insertBeforeNode;
            let refNode;
            let i = 0;
            for (; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (!nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    orgLocationNode =
                        _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDebug || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide
                            ? originalLocationDebugNode(nodeToRelocate)
                            : doc.createTextNode('');
                    orgLocationNode['s-nr'] = nodeToRelocate;
                    nodeToRelocate.parentNode.insertBefore((nodeToRelocate['s-ol'] = orgLocationNode), nodeToRelocate);
                }
            }
            for (i = 0; i < relocateNodes.length; i++) {
                relocateData = relocateNodes[i];
                nodeToRelocate = relocateData.$nodeToRelocate$;
                if (relocateData.$slotRefNode$) {
                    // by default we're just going to insert it directly
                    // after the slot reference node
                    parentNodeRef = relocateData.$slotRefNode$.parentNode;
                    insertBeforeNode = relocateData.$slotRefNode$.nextSibling;
                    orgLocationNode = nodeToRelocate['s-ol'];
                    while ((orgLocationNode = orgLocationNode.previousSibling)) {
                        refNode = orgLocationNode['s-nr'];
                        if (refNode && refNode['s-sn'] === nodeToRelocate['s-sn'] && parentNodeRef === refNode.parentNode) {
                            refNode = refNode.nextSibling;
                            if (!refNode || !refNode['s-nr']) {
                                insertBeforeNode = refNode;
                                break;
                            }
                        }
                    }
                    if ((!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode) ||
                        nodeToRelocate.nextSibling !== insertBeforeNode) {
                        // we've checked that it's worth while to relocate
                        // since that the node to relocate
                        // has a different next sibling or parent relocated
                        if (nodeToRelocate !== insertBeforeNode) {
                            if (!nodeToRelocate['s-hn'] && nodeToRelocate['s-ol']) {
                                // probably a component in the index.html that doesn't have it's hostname set
                                nodeToRelocate['s-hn'] = nodeToRelocate['s-ol'].parentNode.nodeName;
                            }
                            // add it back to the dom but in its new home
                            parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
                        }
                    }
                }
                else {
                    // this node doesn't have a slot home to go to, so let's hide it
                    if (nodeToRelocate.nodeType === 1 /* NODE_TYPE.ElementNode */) {
                        nodeToRelocate.hidden = true;
                    }
                }
            }
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // done moving nodes around
        // allow the disconnect callback to work again
        plt.$flags$ &= ~1 /* PLATFORM_FLAGS.isTmpDisconnected */;
        // always reset
        relocateNodes.length = 0;
    }
};
// slot comment debug nodes only created with the `--debug` flag
// otherwise these nodes are text nodes w/out content
const slotReferenceDebugNode = (slotVNode) => doc.createComment(`<slot${slotVNode.$name$ ? ' name="' + slotVNode.$name$ + '"' : ''}> (host=${hostTagName.toLowerCase()})`);
const originalLocationDebugNode = (nodeToRelocate) => doc.createComment(`org-location for ` +
    (nodeToRelocate.localName
        ? `<${nodeToRelocate.localName}> (host=${nodeToRelocate['s-hn']})`
        : `[${nodeToRelocate.textContent}]`));
const attachToAncestor = (hostRef, ancestorComponent) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise((r) => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.taskQueue && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable) {
        hostRef.$flags$ |= 16 /* HOST_FLAGS.isQueuedForUpdate */;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && hostRef.$flags$ & 4 /* HOST_FLAGS.isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* HOST_FLAGS.needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.taskQueue ? writeTask(dispatch) : dispatch();
};
const dispatchHooks = (hostRef, isInitialLoad) => {
    const elm = hostRef.$hostElement$;
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
    let promise;
    if (isInitialLoad) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener) {
            hostRef.$flags$ |= 256 /* HOST_FLAGS.isListenReady */;
            if (hostRef.$queuedListeners$) {
                hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
                hostRef.$queuedListeners$ = null;
            }
        }
        emitLifecycleEvent(elm, 'componentWillLoad');
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpWillLoad) {
            promise = safeCall(instance, 'componentWillLoad');
        }
    }
    else {
        emitLifecycleEvent(elm, 'componentWillUpdate');
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpWillUpdate) {
            promise = safeCall(instance, 'componentWillUpdate');
        }
    }
    emitLifecycleEvent(elm, 'componentWillRender');
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpWillRender) {
        promise = then(promise, () => safeCall(instance, 'componentWillRender'));
    }
    endSchedule();
    return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = async (hostRef, instance, isInitialLoad) => {
    // updateComponent
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.style && isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
        hostRef.$flags$ |= 1024 /* HOST_FLAGS.devOnRender */;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide) {
        await callRender(hostRef, instance, elm);
    }
    else {
        callRender(hostRef, instance, elm);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssVarShim && plt.$cssShim$) {
        plt.$cssShim$.updateHost(elm);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
        hostRef.$renderCount$++;
        hostRef.$flags$ &= ~1024 /* HOST_FLAGS.devOnRender */;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide) {
        try {
            // manually connected child components during server-side hydrate
            serverSideConnected(elm);
            if (isInitialLoad) {
                // using only during server-side hydrate
                if (hostRef.$cmpMeta$.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
                    elm['s-en'] = '';
                }
                else if (hostRef.$cmpMeta$.$flags$ & 2 /* CMP_FLAGS.scopedCssEncapsulation */) {
                    elm['s-en'] = 'c';
                }
            }
        }
        catch (e) {
            consoleError(e, elm);
        }
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb) => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* HOST_FLAGS.isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
    else {
        postUpdateComponent(hostRef);
    }
};
const callRender = (hostRef, instance, elm) => {
    // in order for bundlers to correctly treeshake the BUILD object
    // we need to ensure BUILD is not deoptimized within a try/catch
    // https://rollupjs.org/guide/en/#treeshake tryCatchDeoptimization
    const allRenderFn = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.allRenderFn ? true : false;
    const lazyLoad = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? true : false;
    const taskQueue = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.taskQueue ? true : false;
    const updatable = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable ? true : false;
    try {
        renderingRef = instance;
        instance = allRenderFn ? instance.render() : instance.render && instance.render();
        if (updatable && taskQueue) {
            hostRef.$flags$ &= ~16 /* HOST_FLAGS.isQueuedForUpdate */;
        }
        if (updatable || lazyLoad) {
            hostRef.$flags$ |= 2 /* HOST_FLAGS.hasRendered */;
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hasRenderFn || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.vdomRender || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide) {
                    return Promise.resolve(instance).then((value) => renderVdom(hostRef, value));
                }
                else {
                    renderVdom(hostRef, instance);
                }
            }
            else {
                elm.textContent = instance;
            }
        }
    }
    catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    renderingRef = null;
    return null;
};
const getRenderingRef = () => renderingRef;
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
    const ancestorComponent = hostRef.$ancestorComponent$;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpDidRender) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
            hostRef.$flags$ |= 1024 /* HOST_FLAGS.devOnRender */;
        }
        safeCall(instance, 'componentDidRender');
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
            hostRef.$flags$ &= ~1024 /* HOST_FLAGS.devOnRender */;
        }
    }
    emitLifecycleEvent(elm, 'componentDidRender');
    if (!(hostRef.$flags$ & 64 /* HOST_FLAGS.hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* HOST_FLAGS.hasLoadedComponent */;
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssAnnotations) {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpDidLoad) {
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
                hostRef.$flags$ |= 2048 /* HOST_FLAGS.devOnDidLoad */;
            }
            safeCall(instance, 'componentDidLoad');
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
                hostRef.$flags$ &= ~2048 /* HOST_FLAGS.devOnDidLoad */;
            }
        }
        emitLifecycleEvent(elm, 'componentDidLoad');
        endPostUpdate();
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad(tagName);
            }
        }
    }
    else {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpDidUpdate) {
            // we've already loaded this component
            // fire off the user's componentDidUpdate method (if one was provided)
            // componentDidUpdate runs AFTER render() has been called
            // and all child components have finished updating
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
                hostRef.$flags$ |= 1024 /* HOST_FLAGS.devOnRender */;
            }
            safeCall(instance, 'componentDidUpdate');
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
                hostRef.$flags$ &= ~1024 /* HOST_FLAGS.devOnRender */;
            }
        }
        emitLifecycleEvent(elm, 'componentDidUpdate');
        endPostUpdate();
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement) {
        elm['s-hmr-load'] && elm['s-hmr-load']();
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.method && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad) {
        hostRef.$onInstanceResolve$(elm);
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* HOST_FLAGS.needsRerender */) {
            nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(4 /* HOST_FLAGS.isWaitingForChildren */ | 512 /* HOST_FLAGS.needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const forceUpdate = (ref) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable) {
        const hostRef = getHostRef(ref);
        const isConnected = hostRef.$hostElement$.isConnected;
        if (isConnected &&
            (hostRef.$flags$ & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
            scheduleUpdate(hostRef, false);
        }
        // Returns "true" when the forced update was successfully scheduled
        return isConnected;
    }
    return false;
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssAnnotations) {
        addHydratedFlag(doc.documentElement);
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncQueue) {
        plt.$flags$ |= 2 /* PLATFORM_FLAGS.appLoaded */;
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE } }));
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile && performance.measure) {
        performance.measure(`[Stencil] ${_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE} initial load (by ${who})`, 'st:app:start');
    }
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const emitLifecycleEvent = (elm, lifecycleName) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lifecycleDOMEvents) {
        emitEvent(elm, 'stencil_' + lifecycleName, {
            bubbles: true,
            composed: true,
            detail: {
                namespace: _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.NAMESPACE,
            },
        });
    }
};
const addHydratedFlag = (elm) => _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedClass
    ? elm.classList.add('hydrated')
    : _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedAttribute
        ? elm.setAttribute('hydrated', '')
        : undefined;
const serverSideConnected = (elm) => {
    const children = elm.children;
    if (children != null) {
        for (let i = 0, ii = children.length; i < ii; i++) {
            const childElm = children[i];
            if (typeof childElm.connectedCallback === 'function') {
                childElm.connectedCallback();
            }
            serverSideConnected(childElm);
        }
    }
};
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$hostElement$ : ref;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    // explicitly check for NaN on both sides, as `NaN === NaN` is always false
    const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
    const didValueChange = newVal !== oldVal && !areBothNaN;
    if ((!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || !(flags & 8 /* HOST_FLAGS.isConstructingInstance */) || oldVal === undefined) && didValueChange) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
            if (hostRef.$flags$ & 1024 /* HOST_FLAGS.devOnRender */) {
                consoleDevWarn(`The state/prop "${propName}" changed during rendering. This can potentially lead to infinite-loops and other bugs.`, '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
            }
            else if (hostRef.$flags$ & 2048 /* HOST_FLAGS.devOnDidLoad */) {
                consoleDevWarn(`The state/prop "${propName}" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"`, '\nElement', elm, '\nNew value', newVal, '\nOld value', oldVal);
            }
        }
        if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || instance) {
            // get an array of method names of watch functions to call
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback && cmpMeta.$watchers$ && flags & 128 /* HOST_FLAGS.isWatchReady */) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.map((watchMethodName) => {
                        try {
                            // fire off each of the watch methods that are watching this property
                            instance[watchMethodName](newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e, elm);
                        }
                    });
                }
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.updatable &&
                (flags & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpShouldUpdate && instance.componentShouldUpdate) {
                    if (instance.componentShouldUpdate(newVal, oldVal, propName) === false) {
                        return;
                    }
                }
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
/**
 * Attach a series of runtime constructs to a compiled Stencil component
 * constructor, including getters and setters for the `@Prop` and `@State`
 * decorators, callbacks for when attributes change, and so on.
 *
 * @param Cstr the constructor for a component that we need to process
 * @param cmpMeta metadata collected previously about the component
 * @param flags a number used to store a series of bit flags
 * @returns a reference to the same constructor passed in (but now mutated)
 */
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member && cmpMeta.$members$) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback && Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
            if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.prop || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.state) &&
                (memberFlags & 31 /* MEMBER_FLAGS.Prop */ ||
                    ((!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || flags & 2 /* PROXY_FLAGS.proxyState */) && memberFlags & 32 /* MEMBER_FLAGS.State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // only during dev time
                        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
                            const ref = getHostRef(this);
                            if (
                            // we are proxying the instance (not element)
                            (flags & 1 /* PROXY_FLAGS.isElementConstructor */) === 0 &&
                                // the element is not constructing
                                (ref.$flags$ & 8 /* HOST_FLAGS.isConstructingInstance */) === 0 &&
                                // the member is a prop
                                (memberFlags & 31 /* MEMBER_FLAGS.Prop */) !== 0 &&
                                // the member is not mutable
                                (memberFlags & 1024 /* MEMBER_FLAGS.Mutable */) === 0) {
                                consoleDevWarn(`@Prop() "${memberName}" on <${cmpMeta.$tagName$}> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability`);
                            }
                        }
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
            else if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad &&
                _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.method &&
                flags & 1 /* PROXY_FLAGS.isElementConstructor */ &&
                memberFlags & 64 /* MEMBER_FLAGS.Method */) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        const ref = getHostRef(this);
                        return ref.$onInstancePromise$.then(() => ref.$lazyInstance$[memberName](...args));
                    },
                });
            }
        });
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.observeAttribute && (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || flags & 1 /* PROXY_FLAGS.isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    //  In a web component lifecycle the attributeChangedCallback runs prior to connectedCallback
                    //  in the case where an attribute was set inline.
                    //  ```html
                    //    <my-component some-attribute="some-value"></my-component>
                    //  ```
                    //
                    //  There is an edge case where a developer sets the attribute inline on a custom element and then
                    //  programmatically changes it before it has been upgraded as shown below:
                    //
                    //  ```html
                    //    <!-- this component has _not_ been upgraded yet -->
                    //    <my-component id="test" some-attribute="some-value"></my-component>
                    //    <script>
                    //      // grab non-upgraded component
                    //      el = document.querySelector("#test");
                    //      el.someAttribute = "another-value";
                    //      // upgrade component
                    //      customElements.define('my-component', MyComponent);
                    //    </script>
                    //  ```
                    //  In this case if we do not unshadow here and use the value of the shadowing property, attributeChangedCallback
                    //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
                    //  to the value that was set inline i.e. "some-value" from above example. When
                    //  the connectedCallback attempts to unshadow it will use "some-value" as the initial value rather than "another-value"
                    //
                    //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/unshadowed
                    //  by connectedCallback as this attributeChangedCallback will not fire.
                    //
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                    //
                    //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
                    //  properties here given that this goes against best practices outlined here
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy
                    if (this.hasOwnProperty(propName)) {
                        newValue = this[propName];
                        delete this[propName];
                    }
                    else if (prototype.hasOwnProperty(propName) &&
                        typeof this[propName] === 'number' &&
                        this[propName] == newValue) {
                        // if the propName exists on the prototype of `Cstr`, this update may be a result of Stencil using native
                        // APIs to reflect props as attributes. Calls to `setAttribute(someElement, propName)` will result in
                        // `propName` to be converted to a `DOMString`, which may not be what we want for other primitive props.
                        return;
                    }
                    this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* MEMBER_FLAGS.HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect && m[0] & 512 /* MEMBER_FLAGS.ReflectAttr */) {
                    cmpMeta.$attrsToReflect$.push([propName, attrName]);
                }
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.style) &&
        (hostRef.$flags$ & 32 /* HOST_FLAGS.hasInitializedComponent */) === 0) {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide) {
            // we haven't initialized this element yet
            hostRef.$flags$ |= 32 /* HOST_FLAGS.hasInitializedComponent */;
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta, hostRef, hmrVersionId);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime(`st:load:${cmpMeta.$tagName$}:${hostRef.$modeName$}`, `[Stencil] Load module for <${cmpMeta.$tagName$}>`);
                Cstr = await Cstr;
                endLoad();
            }
            if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDebug) && !Cstr) {
                throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member && !Cstr.isProxied) {
                // we've never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback) {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* PROXY_FLAGS.proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member) {
                hostRef.$flags$ |= 8 /* HOST_FLAGS.isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member) {
                hostRef.$flags$ &= ~8 /* HOST_FLAGS.isConstructingInstance */;
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback) {
                hostRef.$flags$ |= 128 /* HOST_FLAGS.isWatchReady */;
            }
            endNewInstance();
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        else {
            // sync constructor component
            Cstr = elm.constructor;
            hostRef.$flags$ |= 32 /* HOST_FLAGS.hasInitializedComponent */;
            // wait for the CustomElementRegistry to mark the component as ready before setting `isWatchReady`. Otherwise,
            // watchers may fire prematurely if `customElements.get()`/`customElements.whenDefined()` resolves _before_
            // Stencil has completed instantiating the component.
            customElements.whenDefined(cmpMeta.$tagName$).then(() => (hostRef.$flags$ |= 128 /* HOST_FLAGS.isWatchReady */));
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.style && Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.mode && typeof style !== 'string') {
                style = style[(hostRef.$modeName$ = computeMode(elm))];
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && hostRef.$modeName$) {
                    elm.setAttribute('s-mode', hostRef.$modeName$);
                }
            }
            const scopeId = getScopeId(cmpMeta, hostRef.$modeName$);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide &&
                    _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom &&
                    _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDomShim &&
                    cmpMeta.$flags$ & 8 /* CMP_FLAGS.needsShadowDomShim */) {
                    style = await __webpack_require__.e(/*! import() */ "vendors-node_modules_stencil_core_internal_client_shadow-css_js").then(__webpack_require__.bind(__webpack_require__, /*! ./shadow-css.js */ "./node_modules/@stencil/core/internal/client/shadow-css.js")).then((m) => m.scopeCss(style, scopeId, false));
                }
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading && ancestorComponent && ancestorComponent['s-rc']) {
        // this is the initial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const fireConnectedCallback = (instance) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.connectedCallback) {
        safeCall(instance, 'connectedCallback');
    }
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetParent) {
            // only run if we have listeners being attached to a parent
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, true);
        }
        if (!(hostRef.$flags$ & 1 /* HOST_FLAGS.hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* HOST_FLAGS.hasConnected */;
            let hostId;
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide) {
                hostId = elm.getAttribute(HYDRATE_ID);
                if (hostId) {
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && supportsShadow && cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
                        const scopeId = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.mode
                            ? addStyle(elm.shadowRoot, cmpMeta, elm.getAttribute('s-mode'))
                            : addStyle(elm.shadowRoot, cmpMeta);
                        elm.classList.remove(scopeId + '-h', scopeId + '-s');
                    }
                    initializeClientHydrate(elm, cmpMeta.$tagName$, hostId, hostRef);
                }
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotRelocation && !hostId) {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide ||
                    ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slot || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom) &&
                        cmpMeta.$flags$ & (4 /* CMP_FLAGS.hasSlotRelocation */ | 8 /* CMP_FLAGS.needsShadowDomShim */))) {
                    setContentReference(elm);
                }
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if ((_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide &&
                        ancestorComponent.nodeType === 1 /* NODE_TYPE.ElementNode */ &&
                        ancestorComponent.hasAttribute('s-id') &&
                        ancestorComponent['s-p']) ||
                        ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.prop && !_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* MEMBER_FLAGS.Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.initializeNextTick) {
                // connectedCallback, taskQueue, initialLoad
                // angular sets attribute AFTER connectCallback
                // https://github.com/angular/angular/issues/18909
                // https://github.com/angular/angular/issues/19940
                nextTick(() => initializeComponent(elm, hostRef, cmpMeta));
            }
            else {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        else {
            // not the first time this has connected
            // reattach any event listeners to the host
            // since they would have been removed when disconnected
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, false);
            // fire off connectedCallback() on component instance
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        endConnected();
    }
};
const setContentReference = (elm) => {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    const contentRefElm = (elm['s-cr'] = doc.createComment(_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDebug ? `content-ref (host=${elm.localName})` : ''));
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const instance = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad ? hostRef.$lazyInstance$ : elm;
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener) {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$.map((rmListener) => rmListener());
                hostRef.$rmListeners$ = undefined;
            }
        }
        // clear CSS var-shim tracking
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssVarShim && plt.$cssShim$) {
            plt.$cssShim$.removeHost(elm);
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.disconnectedCallback) {
            safeCall(instance, 'disconnectedCallback');
        }
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cmpDidUnload) {
            safeCall(instance, 'componentDidUnload');
        }
    }
};
const defineCustomElement = (Cstr, compactMeta) => {
    customElements.define(compactMeta[1], proxyCustomElement(Cstr, compactMeta));
};
const proxyCustomElement = (Cstr, compactMeta) => {
    const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
    };
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member) {
        cmpMeta.$members$ = compactMeta[2];
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener) {
        cmpMeta.$listeners$ = compactMeta[3];
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback) {
        cmpMeta.$watchers$ = Cstr.$watchers$;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
        cmpMeta.$attrsToReflect$ = [];
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
        cmpMeta.$flags$ |= 8 /* CMP_FLAGS.needsShadowDomShim */;
    }
    const originalConnectedCallback = Cstr.prototype.connectedCallback;
    const originalDisconnectedCallback = Cstr.prototype.disconnectedCallback;
    Object.assign(Cstr.prototype, {
        __registerHost() {
            registerHost(this, cmpMeta);
        },
        connectedCallback() {
            connectedCallback(this);
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.connectedCallback && originalConnectedCallback) {
                originalConnectedCallback.call(this);
            }
        },
        disconnectedCallback() {
            disconnectedCallback(this);
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.disconnectedCallback && originalDisconnectedCallback) {
                originalDisconnectedCallback.call(this);
            }
        },
        __attachShadow() {
            if (supportsShadow) {
                if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDelegatesFocus) {
                    this.attachShadow({
                        mode: 'open',
                        delegatesFocus: !!(cmpMeta.$flags$ & 16 /* CMP_FLAGS.shadowDelegatesFocus */),
                    });
                }
                else {
                    this.attachShadow({ mode: 'open' });
                }
            }
            else {
                this.shadowRoot = this;
            }
        },
    });
    Cstr.is = cmpMeta.$tagName$;
    return proxyComponent(Cstr, cmpMeta, 1 /* PROXY_FLAGS.isElementConstructor */ | 2 /* PROXY_FLAGS.proxyState */);
};
const forceModeUpdate = (elm) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.style && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.mode && !_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad) {
        const mode = computeMode(elm);
        const hostRef = getHostRef(elm);
        if (hostRef.$modeName$ !== mode) {
            const cmpMeta = hostRef.$cmpMeta$;
            const oldScopeId = elm['s-sc'];
            const scopeId = getScopeId(cmpMeta, mode);
            const style = elm.constructor.style[mode];
            const flags = cmpMeta.$flags$;
            if (style) {
                if (!styles.has(scopeId)) {
                    registerStyle(scopeId, style, !!(flags & 1 /* CMP_FLAGS.shadowDomEncapsulation */));
                }
                hostRef.$modeName$ = mode;
                elm.classList.remove(oldScopeId + '-h', oldScopeId + '-s');
                attachStyles(hostRef);
                forceUpdate(elm);
            }
        }
    }
};
const patchCloneNode = (HostElementPrototype) => {
    const orgCloneNode = HostElementPrototype.cloneNode;
    HostElementPrototype.cloneNode = function (deep) {
        const srcNode = this;
        const isShadowDom = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom ? srcNode.shadowRoot && supportsShadow : false;
        const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slot && !isShadowDom && deep) {
            let i = 0;
            let slotted, nonStencilNode;
            const stencilPrivates = [
                's-id',
                's-cr',
                's-lr',
                's-rc',
                's-sc',
                's-p',
                's-cn',
                's-sr',
                's-sn',
                's-hn',
                's-ol',
                's-nr',
                's-si',
            ];
            for (; i < srcNode.childNodes.length; i++) {
                slotted = srcNode.childNodes[i]['s-nr'];
                nonStencilNode = stencilPrivates.every((privateField) => !srcNode.childNodes[i][privateField]);
                if (slotted) {
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.appendChildSlotFix && clonedNode.__appendChild) {
                        clonedNode.__appendChild(slotted.cloneNode(true));
                    }
                    else {
                        clonedNode.appendChild(slotted.cloneNode(true));
                    }
                }
                if (nonStencilNode) {
                    clonedNode.appendChild(srcNode.childNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};
const patchSlotAppendChild = (HostElementPrototype) => {
    HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
    HostElementPrototype.appendChild = function (newChild) {
        const slotName = (newChild['s-sn'] = getSlotName(newChild));
        const slotNode = getHostSlotNode(this.childNodes, slotName);
        if (slotNode) {
            const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
            const appendAfter = slotChildNodes[slotChildNodes.length - 1];
            return appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling);
        }
        return this.__appendChild(newChild);
    };
};
/**
 * Patches the text content of an unnamed slotted node inside a scoped component
 * @param hostElementPrototype the `Element` to be patched
 * @param cmpMeta component runtime metadata used to determine if the component should be patched or not
 */
const patchTextContent = (hostElementPrototype, cmpMeta) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scoped && cmpMeta.$flags$ & 2 /* CMP_FLAGS.scopedCssEncapsulation */) {
        const descriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent');
        Object.defineProperty(hostElementPrototype, '__textContent', descriptor);
        Object.defineProperty(hostElementPrototype, 'textContent', {
            get() {
                var _a;
                // get the 'default slot', which would be the first slot in a shadow tree (if we were using one), whose name is
                // the empty string
                const slotNode = getHostSlotNode(this.childNodes, '');
                // when a slot node is found, the textContent _may_ be found in the next sibling (text) node, depending on how
                // nodes were reordered during the vdom render. first try to get the text content from the sibling.
                if (((_a = slotNode === null || slotNode === void 0 ? void 0 : slotNode.nextSibling) === null || _a === void 0 ? void 0 : _a.nodeType) === 3 /* NODE_TYPES.TEXT_NODE */) {
                    return slotNode.nextSibling.textContent;
                }
                else if (slotNode) {
                    return slotNode.textContent;
                }
                else {
                    // fallback to the original implementation
                    return this.__textContent;
                }
            },
            set(value) {
                var _a;
                // get the 'default slot', which would be the first slot in a shadow tree (if we were using one), whose name is
                // the empty string
                const slotNode = getHostSlotNode(this.childNodes, '');
                // when a slot node is found, the textContent _may_ need to be placed in the next sibling (text) node,
                // depending on how nodes were reordered during the vdom render. first try to set the text content on the
                // sibling.
                if (((_a = slotNode === null || slotNode === void 0 ? void 0 : slotNode.nextSibling) === null || _a === void 0 ? void 0 : _a.nodeType) === 3 /* NODE_TYPES.TEXT_NODE */) {
                    slotNode.nextSibling.textContent = value;
                }
                else if (slotNode) {
                    slotNode.textContent = value;
                }
                else {
                    // we couldn't find a slot, but that doesn't mean that there isn't one. if this check ran before the DOM
                    // loaded, we could have missed it. check for a content reference element on the scoped component and insert
                    // it there
                    this.__textContent = value;
                    const contentRefElm = this['s-cr'];
                    if (contentRefElm) {
                        this.insertBefore(contentRefElm, this.firstChild);
                    }
                }
            },
        });
    }
};
const patchChildSlotNodes = (elm, cmpMeta) => {
    class FakeNodeList extends Array {
        item(n) {
            return this[n];
        }
    }
    if (cmpMeta.$flags$ & 8 /* CMP_FLAGS.needsShadowDomShim */) {
        const childNodesFn = elm.__lookupGetter__('childNodes');
        Object.defineProperty(elm, 'children', {
            get() {
                return this.childNodes.map((n) => n.nodeType === 1);
            },
        });
        Object.defineProperty(elm, 'childElementCount', {
            get() {
                return elm.children.length;
            },
        });
        Object.defineProperty(elm, 'childNodes', {
            get() {
                const childNodes = childNodesFn.call(this);
                if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0 &&
                    getHostRef(this).$flags$ & 2 /* HOST_FLAGS.hasRendered */) {
                    const result = new FakeNodeList();
                    for (let i = 0; i < childNodes.length; i++) {
                        const slot = childNodes[i]['s-nr'];
                        if (slot) {
                            result.push(slot);
                        }
                    }
                    return result;
                }
                return FakeNodeList.from(childNodes);
            },
        });
    }
};
const getSlotName = (node) => node['s-sn'] || (node.nodeType === 1 && node.getAttribute('slot')) || '';
/**
 * Recursively searches a series of child nodes for a slot with the provided name.
 * @param childNodes the nodes to search for a slot with a specific name.
 * @param slotName the name of the slot to match on.
 * @returns a reference to the slot node that matches the provided name, `null` otherwise
 */
const getHostSlotNode = (childNodes, slotName) => {
    let i = 0;
    let childNode;
    for (; i < childNodes.length; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && childNode['s-sn'] === slotName) {
            return childNode;
        }
        childNode = getHostSlotNode(childNode.childNodes, slotName);
        if (childNode) {
            return childNode;
        }
    }
    return null;
};
const getHostSlotChildNodes = (n, slotName) => {
    const childNodes = [n];
    while ((n = n.nextSibling) && n['s-sn'] === slotName) {
        childNodes.push(n);
    }
    return childNodes;
};
const hmrStart = (elm, cmpMeta, hmrVersionId) => {
    // ¯\_(ツ)_/¯
    const hostRef = getHostRef(elm);
    // reset state flags to only have been connected
    hostRef.$flags$ = 1 /* HOST_FLAGS.hasConnected */;
    // TODO
    // detatch any event listeners that may have been added
    // because we're not passing an exact event name it'll
    // remove all of this element's event, which is good
    // create a callback for when this component finishes hmr
    elm['s-hmr-load'] = () => {
        // finished hmr for this element
        delete elm['s-hmr-load'];
    };
    // re-initialize the component
    initializeComponent(elm, hostRef, cmpMeta, hmrVersionId);
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    var _a;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile && performance.mark) {
        performance.mark('st:app:start');
    }
    installDevTools();
    const endBootstrap = createTime('bootstrapLazy');
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    const deferredConnectedCallbacks = [];
    const styles = /*@__PURE__*/ doc.querySelectorAll(`[${HYDRATED_STYLE_ID}]`);
    let appLoadFallback;
    let isBootstrapping = true;
    let i = 0;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncQueue) {
        if (options.syncQueue) {
            plt.$flags$ |= 4 /* PLATFORM_FLAGS.queueSync */;
        }
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide) {
        // If the app is already hydrated there is not point to disable the
        // async queue. This will improve the first input delay
        plt.$flags$ |= 2 /* PLATFORM_FLAGS.appLoaded */;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateClientSide && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom) {
        for (; i < styles.length; i++) {
            registerStyle(styles[i].getAttribute(HYDRATED_STYLE_ID), convertScopedToShadow(styles[i].innerHTML), true);
        }
    }
    lazyBundles.map((lazyBundle) => {
        lazyBundle[1].map((compactMeta) => {
            const cmpMeta = {
                $flags$: compactMeta[0],
                $tagName$: compactMeta[1],
                $members$: compactMeta[2],
                $listeners$: compactMeta[3],
            };
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.member) {
                cmpMeta.$members$ = compactMeta[2];
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener) {
                cmpMeta.$listeners$ = compactMeta[3];
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.reflect) {
                cmpMeta.$attrsToReflect$ = [];
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.watchCallback) {
                cmpMeta.$watchers$ = {};
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && !supportsShadow && cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
                cmpMeta.$flags$ |= 8 /* CMP_FLAGS.needsShadowDomShim */;
            }
            const tagName = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.transformTagName && options.transformTagName
                ? options.transformTagName(cmpMeta.$tagName$)
                : cmpMeta.$tagName$;
            const HostElement = class extends HTMLElement {
                // StencilLazyHost
                constructor(self) {
                    // @ts-ignore
                    super(self);
                    self = this;
                    registerHost(self, cmpMeta);
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom && cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
                        // this component is using shadow dom
                        // and this browser supports shadow dom
                        // add the read-only property "shadowRoot" to the host element
                        // adding the shadow root build conditionals to minimize runtime
                        if (supportsShadow) {
                            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDelegatesFocus) {
                                self.attachShadow({
                                    mode: 'open',
                                    delegatesFocus: !!(cmpMeta.$flags$ & 16 /* CMP_FLAGS.shadowDelegatesFocus */),
                                });
                            }
                            else {
                                self.attachShadow({ mode: 'open' });
                            }
                        }
                        else if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide && !('shadowRoot' in self)) {
                            self.shadowRoot = self;
                        }
                    }
                    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.slotChildNodesFix) {
                        patchChildSlotNodes(self, cmpMeta);
                    }
                }
                connectedCallback() {
                    if (appLoadFallback) {
                        clearTimeout(appLoadFallback);
                        appLoadFallback = null;
                    }
                    if (isBootstrapping) {
                        // connectedCallback will be processed once all components have been registered
                        deferredConnectedCallbacks.push(this);
                    }
                    else {
                        plt.jmp(() => connectedCallback(this));
                    }
                }
                disconnectedCallback() {
                    plt.jmp(() => disconnectedCallback(this));
                }
                componentOnReady() {
                    return getHostRef(this).$onReadyPromise$;
                }
            };
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cloneNodeFix) {
                patchCloneNode(HostElement.prototype);
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.appendChildSlotFix) {
                patchSlotAppendChild(HostElement.prototype);
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement) {
                HostElement.prototype['s-hmr'] = function (hmrVersionId) {
                    hmrStart(this, cmpMeta, hmrVersionId);
                };
            }
            if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.scopedSlotTextContentFix) {
                patchTextContent(HostElement.prototype, cmpMeta);
            }
            cmpMeta.$lazyBundleId$ = lazyBundle[0];
            if (!exclude.includes(tagName) && !customElements.get(tagName)) {
                cmpTags.push(tagName);
                customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* PROXY_FLAGS.isElementConstructor */));
            }
        });
    });
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.invisiblePrehydration && (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedClass || _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydratedAttribute)) {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute('data-styles', '');
        // Apply CSP nonce to the style tag if it exists
        const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
        if (nonce != null) {
            visibilityStyle.setAttribute('nonce', nonce);
        }
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map((host) => host.connectedCallback());
    }
    else {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.profile) {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30, 'timeout')));
        }
        else {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
const getConnect = (_ref, tagName) => {
    const componentOnReady = () => {
        let elm = doc.querySelector(tagName);
        if (!elm) {
            elm = doc.createElement(tagName);
            doc.body.appendChild(elm);
        }
        return typeof elm.componentOnReady === 'function' ? elm.componentOnReady() : Promise.resolve(elm);
    };
    const create = (...args) => {
        return componentOnReady().then((el) => el.create(...args));
    };
    return {
        create,
        componentOnReady,
    };
};
const getContext = (_elm, context) => {
    if (context in Context) {
        return Context[context];
    }
    else if (context === 'window') {
        return win;
    }
    else if (context === 'document') {
        return doc;
    }
    else if (context === 'isServer' || context === 'isPrerender') {
        return _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide ? true : false;
    }
    else if (context === 'isClient') {
        return _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hydrateServerSide ? false : true;
    }
    else if (context === 'resourcesUrl' || context === 'publicPath') {
        return getAssetPath('.');
    }
    else if (context === 'queue') {
        return {
            write: writeTask,
            read: readTask,
            tick: {
                then(cb) {
                    return nextTick(cb);
                },
            },
        };
    }
    return undefined;
};
const Fragment = (_, children) => children;
const addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListener && listeners) {
        // this is called immediately within the element's constructor
        // initialize our event listeners on the host element
        // we do this now so that we can listen to events that may
        // have fired even before the instance is ready
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetParent) {
            // this component may have event listeners that should be attached to the parent
            if (attachParentListeners) {
                // this is being ran from within the connectedCallback
                // which is important so that we know the host element actually has a parent element
                // filter out the listeners to only have the ones that ARE being attached to the parent
                listeners = listeners.filter(([flags]) => flags & 32 /* LISTENER_FLAGS.TargetParent */);
            }
            else {
                // this is being ran from within the component constructor
                // everything BUT the parent element listeners should be attached at this time
                // filter out the listeners that are NOT being attached to the parent
                listeners = listeners.filter(([flags]) => !(flags & 32 /* LISTENER_FLAGS.TargetParent */));
            }
        }
        listeners.map(([flags, name, method]) => {
            const target = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTarget ? getHostListenerTarget(elm, flags) : elm;
            const handler = hostListenerProxy(hostRef, method);
            const opts = hostListenerOpts(flags);
            plt.ael(target, name, handler, opts);
            (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
        });
    }
};
const hostListenerProxy = (hostRef, methodName) => (ev) => {
    try {
        if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad) {
            if (hostRef.$flags$ & 256 /* HOST_FLAGS.isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
            }
        }
        else {
            hostRef.$hostElement$[methodName](ev);
        }
    }
    catch (e) {
        consoleError(e);
    }
};
const getHostListenerTarget = (elm, flags) => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetDocument && flags & 4 /* LISTENER_FLAGS.TargetDocument */)
        return doc;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetWindow && flags & 8 /* LISTENER_FLAGS.TargetWindow */)
        return win;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetBody && flags & 16 /* LISTENER_FLAGS.TargetBody */)
        return doc.body;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hostListenerTargetParent && flags & 32 /* LISTENER_FLAGS.TargetParent */)
        return elm.parentElement;
    return elm;
};
// prettier-ignore
const hostListenerOpts = (flags) => supportsListenerOptions
    ? ({
        passive: (flags & 1 /* LISTENER_FLAGS.Passive */) !== 0,
        capture: (flags & 2 /* LISTENER_FLAGS.Capture */) !== 0,
    })
    : (flags & 2 /* LISTENER_FLAGS.Capture */) !== 0;
/**
 * Assigns the given value to the nonce property on the runtime platform object.
 * During runtime, this value is used to set the nonce attribute on all dynamically created script and style tags.
 * @param nonce The value to be assigned to the platform nonce property.
 * @returns void
 */
const setNonce = (nonce) => (plt.$nonce$ = nonce);
const setPlatformOptions = (opts) => Object.assign(plt, opts);
const insertVdomAnnotations = (doc, staticComponents) => {
    if (doc != null) {
        const docData = {
            hostIds: 0,
            rootLevelIds: 0,
            staticComponents: new Set(staticComponents),
        };
        const orgLocationNodes = [];
        parseVNodeAnnotations(doc, doc.body, docData, orgLocationNodes);
        orgLocationNodes.forEach((orgLocationNode) => {
            if (orgLocationNode != null) {
                const nodeRef = orgLocationNode['s-nr'];
                let hostId = nodeRef['s-host-id'];
                let nodeId = nodeRef['s-node-id'];
                let childId = `${hostId}.${nodeId}`;
                if (hostId == null) {
                    hostId = 0;
                    docData.rootLevelIds++;
                    nodeId = docData.rootLevelIds;
                    childId = `${hostId}.${nodeId}`;
                    if (nodeRef.nodeType === 1 /* NODE_TYPE.ElementNode */) {
                        nodeRef.setAttribute(HYDRATE_CHILD_ID, childId);
                    }
                    else if (nodeRef.nodeType === 3 /* NODE_TYPE.TextNode */) {
                        if (hostId === 0) {
                            const textContent = nodeRef.nodeValue.trim();
                            if (textContent === '') {
                                // useless whitespace node at the document root
                                orgLocationNode.remove();
                                return;
                            }
                        }
                        const commentBeforeTextNode = doc.createComment(childId);
                        commentBeforeTextNode.nodeValue = `${TEXT_NODE_ID}.${childId}`;
                        nodeRef.parentNode.insertBefore(commentBeforeTextNode, nodeRef);
                    }
                }
                let orgLocationNodeId = `${ORG_LOCATION_ID}.${childId}`;
                const orgLocationParentNode = orgLocationNode.parentElement;
                if (orgLocationParentNode) {
                    if (orgLocationParentNode['s-en'] === '') {
                        // ending with a "." means that the parent element
                        // of this node's original location is a SHADOW dom element
                        // and this node is apart of the root level light dom
                        orgLocationNodeId += `.`;
                    }
                    else if (orgLocationParentNode['s-en'] === 'c') {
                        // ending with a ".c" means that the parent element
                        // of this node's original location is a SCOPED element
                        // and this node is apart of the root level light dom
                        orgLocationNodeId += `.c`;
                    }
                }
                orgLocationNode.nodeValue = orgLocationNodeId;
            }
        });
    }
};
const parseVNodeAnnotations = (doc, node, docData, orgLocationNodes) => {
    if (node == null) {
        return;
    }
    if (node['s-nr'] != null) {
        orgLocationNodes.push(node);
    }
    if (node.nodeType === 1 /* NODE_TYPE.ElementNode */) {
        node.childNodes.forEach((childNode) => {
            const hostRef = getHostRef(childNode);
            if (hostRef != null && !docData.staticComponents.has(childNode.nodeName.toLowerCase())) {
                const cmpData = {
                    nodeIds: 0,
                };
                insertVNodeAnnotations(doc, childNode, hostRef.$vnode$, docData, cmpData);
            }
            parseVNodeAnnotations(doc, childNode, docData, orgLocationNodes);
        });
    }
};
const insertVNodeAnnotations = (doc, hostElm, vnode, docData, cmpData) => {
    if (vnode != null) {
        const hostId = ++docData.hostIds;
        hostElm.setAttribute(HYDRATE_ID, hostId);
        if (hostElm['s-cr'] != null) {
            hostElm['s-cr'].nodeValue = `${CONTENT_REF_ID}.${hostId}`;
        }
        if (vnode.$children$ != null) {
            const depth = 0;
            vnode.$children$.forEach((vnodeChild, index) => {
                insertChildVNodeAnnotations(doc, vnodeChild, cmpData, hostId, depth, index);
            });
        }
        if (hostElm && vnode && vnode.$elm$ && !hostElm.hasAttribute('c-id')) {
            const parent = hostElm.parentElement;
            if (parent && parent.childNodes) {
                const parentChildNodes = Array.from(parent.childNodes);
                const comment = parentChildNodes.find((node) => node.nodeType === 8 /* NODE_TYPE.CommentNode */ && node['s-sr']);
                if (comment) {
                    const index = parentChildNodes.indexOf(hostElm) - 1;
                    vnode.$elm$.setAttribute(HYDRATE_CHILD_ID, `${comment['s-host-id']}.${comment['s-node-id']}.0.${index}`);
                }
            }
        }
    }
};
const insertChildVNodeAnnotations = (doc, vnodeChild, cmpData, hostId, depth, index) => {
    const childElm = vnodeChild.$elm$;
    if (childElm == null) {
        return;
    }
    const nodeId = cmpData.nodeIds++;
    const childId = `${hostId}.${nodeId}.${depth}.${index}`;
    childElm['s-host-id'] = hostId;
    childElm['s-node-id'] = nodeId;
    if (childElm.nodeType === 1 /* NODE_TYPE.ElementNode */) {
        childElm.setAttribute(HYDRATE_CHILD_ID, childId);
    }
    else if (childElm.nodeType === 3 /* NODE_TYPE.TextNode */) {
        const parentNode = childElm.parentNode;
        const nodeName = parentNode.nodeName;
        if (nodeName !== 'STYLE' && nodeName !== 'SCRIPT') {
            const textNodeId = `${TEXT_NODE_ID}.${childId}`;
            const commentBeforeTextNode = doc.createComment(textNodeId);
            parentNode.insertBefore(commentBeforeTextNode, childElm);
        }
    }
    else if (childElm.nodeType === 8 /* NODE_TYPE.CommentNode */) {
        if (childElm['s-sr']) {
            const slotName = childElm['s-sn'] || '';
            const slotNodeId = `${SLOT_NODE_ID}.${childId}.${slotName}`;
            childElm.nodeValue = slotNodeId;
        }
    }
    if (vnodeChild.$children$ != null) {
        const childDepth = depth + 1;
        vnodeChild.$children$.forEach((vnode, index) => {
            insertChildVNodeAnnotations(doc, vnode, cmpData, hostId, childDepth, index);
        });
    }
};
const hostRefs = /*@__PURE__*/ new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
const registerHost = (elm, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev) {
        hostRef.$renderCount$ = 0;
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.method && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.lazyLoad) {
        hostRef.$onInstancePromise$ = new Promise((r) => (hostRef.$onInstanceResolve$ = r));
    }
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncLoading) {
        hostRef.$onReadyPromise$ = new Promise((r) => (hostRef.$onReadyResolve$ = r));
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    addHostEventListeners(elm, hostRef, cmpMeta.$listeners$, false);
    return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (customError || console.error)(e, el);
const STENCIL_DEV_MODE = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isTesting
    ? ['STENCIL:'] // E2E testing
    : [
        '%cstencil',
        'color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px',
    ];
const consoleDevError = (...m) => console.error(...STENCIL_DEV_MODE, ...m);
const consoleDevWarn = (...m) => console.warn(...STENCIL_DEV_MODE, ...m);
const consoleDevInfo = (...m) => console.info(...STENCIL_DEV_MODE, ...m);
const setErrorHandler = (handler) => (customError = handler);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.isDev && typeof bundleId !== 'string') {
        consoleDevError(`Trying to lazily load component <${cmpMeta.$tagName$}> with style mode "${hostRef.$modeName$}", but it does not exist.`);
        return undefined;
    }
    const module = !_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement ? cmpModules.get(bundleId) : false;
    if (module) {
        return module[exportName];
    }
    /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
    return __webpack_require__("./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")(`./${bundleId}.entry.js${_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement && hmrVersionId ? '?s-hmr=' + hmrVersionId : ''}`).then((importedModule) => {
        if (!_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.hotModuleReplacement) {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = /*@__PURE__*/ new Map();
const modeResolutionChain = [];
const win = typeof window !== 'undefined' ? window : {};
const CSS = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.cssVarShim ? win.CSS : null;
const doc = win.document || { head: {} };
const H = (win.HTMLElement || class {
});
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const setPlatformHelpers = (helpers) => {
    Object.assign(plt, helpers);
};
const supportsShadow = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDomShim && _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.shadowDom
    ? /*@__PURE__*/ (() => (doc.head.attachShadow + '').indexOf('[native') > -1)()
    : true;
const supportsListenerOptions = /*@__PURE__*/ (() => {
    let supportsListenerOptions = false;
    try {
        doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
            get() {
                supportsListenerOptions = true;
            },
        }));
    }
    catch (e) { }
    return supportsListenerOptions;
})();
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructableStylesheets = _stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.constructableCSS
    ? /*@__PURE__*/ (() => {
        try {
            new CSSStyleSheet();
            return typeof new CSSStyleSheet().replaceSync === 'function';
        }
        catch (e) { }
        return false;
    })()
    : false;
const queueDomReads = [];
const queueDomWrites = [];
const queueDomWritesLow = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* PLATFORM_FLAGS.queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const consumeTimeout = (queue, timeout) => {
    let i = 0;
    let ts = 0;
    while (i < queue.length && (ts = performance.now()) < timeout) {
        try {
            queue[i++](ts);
        }
        catch (e) {
            consoleError(e);
        }
    }
    if (i === queue.length) {
        queue.length = 0;
    }
    else if (i !== 0) {
        queue.splice(0, i);
    }
};
const flush = () => {
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncQueue) {
        queueCongestion++;
    }
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    if (_stencil_core_internal_app_data__WEBPACK_IMPORTED_MODULE_0__.BUILD.asyncQueue) {
        const timeout = (plt.$flags$ & 6 /* PLATFORM_FLAGS.queueMask */) === 2 /* PLATFORM_FLAGS.appLoaded */
            ? performance.now() + 14 * Math.ceil(queueCongestion * (1.0 / 10.0))
            : Infinity;
        consumeTimeout(queueDomWrites, timeout);
        consumeTimeout(queueDomWritesLow, timeout);
        if (queueDomWrites.length > 0) {
            queueDomWritesLow.push(...queueDomWrites);
            queueDomWrites.length = 0;
        }
        if ((queuePending = queueDomReads.length + queueDomWrites.length + queueDomWritesLow.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
        else {
            queueCongestion = 0;
        }
    }
    else {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
const readTask = /*@__PURE__*/ queueTask(queueDomReads, false);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);




/***/ }),

/***/ "./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@stencil/core/internal/client lazy recursive ^\\.\\/.*\\.entry\\.js.*$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDefaultOptions": () => (/* binding */ getDefaultOptions),
/* harmony export */   "setDefaultOptions": () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */
var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};

var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};

var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;

  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];

    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || _typeof(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/wc-datepicker/dist/themes/dark.css":
/*!*********************************************************!*\
  !*** ./node_modules/wc-datepicker/dist/themes/dark.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/wc-datepicker/dist/components/wc-datepicker.js":
/*!*********************************************************************!*\
  !*** ./node_modules/wc-datepicker/dist/components/wc-datepicker.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WcDatepicker": () => (/* binding */ WcDatepicker),
/* harmony export */   "defineCustomElement": () => (/* binding */ defineCustomElement)
/* harmony export */ });
/* harmony import */ var _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stencil/core/internal/client */ "./node_modules/@stencil/core/internal/client/index.js");


function addDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}
function getDaysOfMonth(date, padded, firstDayOfWeek) {
  const days = [];
  const firstOfMonth = getFirstOfMonth(date);
  const firstDayMonth = firstOfMonth.getDay() === 0 ? 7 : firstOfMonth.getDay();
  const lastOfMonth = getLastOfMonth(date);
  const lastDayOfMonth = lastOfMonth.getDay() === 0 ? 7 : lastOfMonth.getDay();
  const lastDayOfWeek = firstDayOfWeek === 1 ? 7 : firstDayOfWeek - 1;
  const leftPaddingDays = [];
  const rightPaddingDays = [];
  if (padded) {
    const leftPadding = (7 - firstDayOfWeek + firstDayMonth) % 7;
    let leftPaddingAmount = leftPadding;
    let leftPaddingDay = getPreviousDay(firstOfMonth);
    while (leftPaddingAmount > 0) {
      leftPaddingDays.push(leftPaddingDay);
      leftPaddingDay = getPreviousDay(leftPaddingDay);
      leftPaddingAmount -= 1;
    }
    leftPaddingDays.reverse();
    const rightPadding = (7 - lastDayOfMonth + lastDayOfWeek) % 7;
    let rightPaddingAmount = rightPadding;
    let rightPaddingDay = getNextDay(lastOfMonth);
    while (rightPaddingAmount > 0) {
      rightPaddingDays.push(rightPaddingDay);
      rightPaddingDay = getNextDay(rightPaddingDay);
      rightPaddingAmount -= 1;
    }
  }
  let currentDay = firstOfMonth;
  while (currentDay.getMonth() === date.getMonth()) {
    days.push(currentDay);
    currentDay = getNextDay(currentDay);
  }
  return [...leftPaddingDays, ...days, ...rightPaddingDays];
}
function getFirstOfMonth(date) {
  const firstOfMonth = removeTimezoneOffset(new Date(`${String(getYear(date)).padStart(4, '0')}-${String(getMonth(date)).padStart(2, '0')}-01`));
  return firstOfMonth;
}
function getISODateString(date) {
  if (!(date instanceof Date)) {
    return;
  }
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}
function getLastOfMonth(date) {
  const newDate = getFirstOfMonth(date);
  newDate.setMonth(newDate.getMonth() + 1);
  newDate.setDate(newDate.getDate() - 1);
  return newDate;
}
function getMonth(date) {
  return date.getMonth() + 1;
}
function getMonths(locale) {
  return new Array(12).fill(undefined).map((_, month) => {
    const date = removeTimezoneOffset(new Date(`2006-${String(month + 1).padStart(2, '0')}-01`));
    return Intl.DateTimeFormat(locale, {
      month: 'long'
    }).format(date);
  });
}
function getNextDay(date) {
  return addDays(date, 1);
}
function getNextMonth(date) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
}
function getNextYear(date) {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + 1);
  return newDate;
}
function getPreviousDay(date) {
  return subDays(date, 1);
}
function getPreviousMonth(date) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() - 1);
  return newDate;
}
function getPreviousYear(date) {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() - 1);
  return newDate;
}
function getWeekDays(firstDayOfWeek, locale) {
  return new Array(7)
    .fill(undefined)
    .map((_, index) => ((firstDayOfWeek + index) % 7) + 1)
    .map((day) => {
    const date = removeTimezoneOffset(new Date(`2006-01-0${day}`));
    return [
      Intl.DateTimeFormat(locale, {
        weekday: 'short'
      }).format(date),
      Intl.DateTimeFormat(locale, {
        weekday: 'long'
      }).format(date)
    ];
  });
}
function getYear(date) {
  return date.getFullYear();
}
function isDateInRange(date, range) {
  if (!date || !range || !range.from || !range.to) {
    return false;
  }
  const earlyDate = range.from < range.to ? range.from : range.to;
  const laterDate = range.from < range.to ? range.to : range.from;
  return date >= earlyDate && date <= laterDate;
}
function isSameDay(date1, date2) {
  if (!date1 || !date2) {
    return false;
  }
  return (date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate());
}
function removeTimezoneOffset(date) {
  const newDate = new Date(date);
  newDate.setMinutes(newDate.getMinutes() + newDate.getTimezoneOffset());
  return newDate;
}
function subDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() - days);
  return newDate;
}

const wcDatepickerCss = ".visually-hidden.sc-wc-datepicker{position:absolute;overflow:hidden;width:1px;height:1px;white-space:nowrap;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%)}";

const defaultLabels = {
  clearButton: 'Clear value',
  monthSelect: 'Select month',
  nextMonthButton: 'Next month',
  nextYearButton: 'Next year',
  picker: 'Choose date',
  previousMonthButton: 'Previous month',
  previousYearButton: 'Previous year',
  todayButton: 'Show today',
  yearSelect: 'Select year'
};
const WCDatepicker = /*@__PURE__*/ (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.proxyCustomElement)(class extends _stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.selectDate = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.createEvent)(this, "selectDate", 7);
    this.changeMonth = (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.createEvent)(this, "changeMonth", 7);
    this.disabled = false;
    this.disableDate = () => false;
    this.elementClassName = 'wc-datepicker';
    this.firstDayOfWeek = 0;
    this.labels = defaultLabels;
    this.locale = (navigator === null || navigator === void 0 ? void 0 : navigator.language) || 'en-US';
    this.showClearButton = false;
    this.showMonthStepper = true;
    this.showTodayButton = false;
    this.showYearStepper = false;
    this.startDate = getISODateString(new Date());
    this.init = () => {
      this.currentDate = this.startDate
        ? removeTimezoneOffset(new Date(this.startDate))
        : new Date();
      this.updateWeekdays();
    };
    this.nextMonth = () => {
      this.updateCurrentDate(getNextMonth(this.currentDate));
    };
    this.nextYear = () => {
      this.updateCurrentDate(getNextYear(this.currentDate));
    };
    this.previousMonth = () => {
      this.updateCurrentDate(getPreviousMonth(this.currentDate));
    };
    this.previousYear = () => {
      this.updateCurrentDate(getPreviousYear(this.currentDate));
    };
    this.showToday = () => {
      this.updateCurrentDate(new Date());
    };
    this.clear = () => {
      this.value = undefined;
      this.selectDate.emit(undefined);
    };
    this.onClick = (event) => {
      if (this.disabled) {
        return;
      }
      const target = event.target.closest('[data-date]');
      if (!Boolean(target)) {
        return;
      }
      const date = removeTimezoneOffset(new Date(target.dataset.date));
      this.updateCurrentDate(date);
      this.onSelectDate(date);
    };
    this.onMonthSelect = (event) => {
      const month = +event.target.value - 1;
      const date = new Date(this.currentDate);
      date.setMonth(month);
      this.updateCurrentDate(date);
    };
    this.onYearSelect = (event) => {
      let year = +event.target.value;
      const input = event.target;
      if (isNaN(year)) {
        year = new Date().getFullYear();
        input.value = String(year);
      }
      else if (year < 0) {
        year = 0;
        input.value = String(year);
      }
      else if (year > 9999) {
        year = 9999;
        input.value = String(year);
      }
      const date = new Date(this.currentDate);
      date.setFullYear(year);
      this.updateCurrentDate(date);
    };
    this.onKeyDown = (event) => {
      if (this.disabled) {
        return;
      }
      if (event.code === 'ArrowLeft') {
        event.preventDefault();
        this.updateCurrentDate(getPreviousDay(this.currentDate), true);
      }
      else if (event.code === 'ArrowRight') {
        event.preventDefault();
        this.updateCurrentDate(getNextDay(this.currentDate), true);
      }
      else if (event.code === 'ArrowUp') {
        event.preventDefault();
        this.updateCurrentDate(subDays(this.currentDate, 7), true);
      }
      else if (event.code === 'ArrowDown') {
        event.preventDefault();
        this.updateCurrentDate(addDays(this.currentDate, 7), true);
      }
      else if (event.code === 'PageUp') {
        event.preventDefault();
        if (event.shiftKey) {
          this.updateCurrentDate(getPreviousYear(this.currentDate), true);
        }
        else {
          this.updateCurrentDate(getPreviousMonth(this.currentDate), true);
        }
      }
      else if (event.code === 'PageDown') {
        event.preventDefault();
        if (event.shiftKey) {
          this.updateCurrentDate(getNextYear(this.currentDate), true);
        }
        else {
          this.updateCurrentDate(getNextMonth(this.currentDate), true);
        }
      }
      else if (event.code === 'Home') {
        event.preventDefault();
        this.updateCurrentDate(getFirstOfMonth(this.currentDate), true);
      }
      else if (event.code === 'End') {
        event.preventDefault();
        this.updateCurrentDate(getLastOfMonth(this.currentDate), true);
      }
      else if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
        this.onSelectDate(this.currentDate);
      }
    };
    this.onMouseEnter = (event) => {
      if (this.disabled) {
        return;
      }
      const date = removeTimezoneOffset(new Date(event.target.closest('td').dataset.date));
      this.hoveredDate = date;
    };
    this.onMouseLeave = () => {
      this.hoveredDate = undefined;
    };
  }
  componentWillLoad() {
    this.init();
  }
  watchFirstDayOfWeek() {
    this.updateWeekdays();
  }
  watchLocale() {
    if (!Boolean(this.locale)) {
      this.locale = (navigator === null || navigator === void 0 ? void 0 : navigator.language) || 'en-US';
    }
    this.updateWeekdays();
  }
  watchRange() {
    this.value = undefined;
    this.selectDate.emit(undefined);
  }
  watchStartDate() {
    this.currentDate = this.startDate
      ? removeTimezoneOffset(new Date(this.startDate))
      : new Date();
  }
  watchValue() {
    if (Boolean(this.value)) {
      if (Array.isArray(this.value) && this.value.length >= 1) {
        this.currentDate = this.value[0];
      }
      else if (this.value instanceof Date) {
        this.currentDate = this.value;
      }
    }
  }
  componentDidRender() {
    if (this.moveFocusAfterMonthChanged) {
      this.focusDate(this.currentDate);
      this.moveFocusAfterMonthChanged = false;
    }
  }
  updateWeekdays() {
    this.weekdays = getWeekDays(this.firstDayOfWeek === 0 ? 7 : this.firstDayOfWeek, this.locale);
  }
  getClassName(element) {
    return Boolean(element)
      ? `${this.elementClassName}__${element}`
      : this.elementClassName;
  }
  getCalendarRows() {
    const daysOfMonth = getDaysOfMonth(this.currentDate, true, this.firstDayOfWeek === 0 ? 7 : this.firstDayOfWeek);
    const calendarRows = [];
    for (let i = 0; i < daysOfMonth.length; i += 7) {
      const row = daysOfMonth.slice(i, i + 7);
      calendarRows.push(row);
    }
    return calendarRows;
  }
  getTitle() {
    if (!Boolean(this.currentDate)) {
      return;
    }
    return Intl.DateTimeFormat(this.locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(this.currentDate);
  }
  focusDate(date) {
    var _a;
    (_a = this.el
      .querySelector(`[data-date="${getISODateString(date)}"]`)) === null || _a === void 0 ? void 0 : _a.focus();
  }
  updateCurrentDate(date, moveFocus) {
    const month = date.getMonth();
    const year = date.getFullYear();
    if (year > 9999 || year < 0) {
      return;
    }
    const monthChanged = month !== this.currentDate.getMonth() ||
      year !== this.currentDate.getFullYear();
    if (monthChanged) {
      this.changeMonth.emit({ month: getMonth(date), year: getYear(date) });
      if (moveFocus) {
        this.moveFocusAfterMonthChanged = true;
      }
    }
    this.currentDate = date;
    if (moveFocus) {
      this.focusDate(this.currentDate);
    }
  }
  onSelectDate(date) {
    var _a, _b;
    if (this.disableDate(date)) {
      return;
    }
    if (this.isRangeValue(this.value)) {
      const newValue = ((_a = this.value) === null || _a === void 0 ? void 0 : _a[0]) === undefined || this.value.length === 2
        ? [date]
        : [this.value[0], date];
      if (newValue.length === 2 && newValue[0] > newValue[1]) {
        newValue.reverse();
      }
      const isoValue = newValue[1] === undefined
        ? [getISODateString(newValue[0])]
        : [getISODateString(newValue[0]), getISODateString(newValue[1])];
      this.value = newValue;
      this.selectDate.emit(isoValue);
    }
    else {
      if (((_b = this.value) === null || _b === void 0 ? void 0 : _b.getTime()) === date.getTime()) {
        return;
      }
      this.value = date;
      this.selectDate.emit(getISODateString(date));
    }
  }
  // @ts-ignore
  isRangeValue(value) {
    return this.range;
  }
  render() {
    const showFooter = this.showTodayButton || this.showClearButton;
    return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)(_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.Host, null, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("div", { "aria-disabled": String(this.disabled), "aria-label": this.labels.picker, class: {
        [this.getClassName()]: true,
        [`${this.getClassName()}--disabled`]: this.disabled
      }, role: "group" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getClassName('header') }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("span", { "aria-atomic": "true", "aria-live": "polite", class: "visually-hidden" }, this.getTitle()), this.showYearStepper && ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.labels.previousYearButton, class: this.getClassName('previous-year-button'), disabled: this.disabled, innerHTML: this.previousYearButtonContent || undefined, onClick: this.previousYear, type: "button" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("polyline", { points: "11 17 6 12 11 7" }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("polyline", { points: "18 17 13 12 18 7" })))), this.showMonthStepper && ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.labels.previousMonthButton, class: this.getClassName('previous-month-button'), disabled: this.disabled, innerHTML: this.previousMonthButtonContent || undefined, onClick: this.previousMonth, type: "button" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("polyline", { points: "15 18 9 12 15 6" })))), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: this.getClassName('current-month') }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("select", { "aria-label": this.labels.monthSelect, class: this.getClassName('month-select'), disabled: this.disabled, name: "month", onChange: this.onMonthSelect }, getMonths(this.locale).map((month, index) => ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("option", { key: month, selected: this.currentDate.getMonth() === index, value: index + 1 }, month)))), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("input", { "aria-label": this.labels.yearSelect, class: this.getClassName('year-select'), disabled: this.disabled, max: 9999, maxLength: 4, min: 1, name: "year", onChange: this.onYearSelect, type: "number", value: this.currentDate.getFullYear() })), this.showMonthStepper && ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.labels.nextMonthButton, class: this.getClassName('next-month-button'), disabled: this.disabled, innerHTML: this.nextMonthButtonContent || undefined, onClick: this.nextMonth, type: "button" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("polyline", { points: "9 18 15 12 9 6" })))), this.showYearStepper && ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("button", { "aria-label": this.labels.nextYearButton, class: this.getClassName('next-year-button'), disabled: this.disabled, innerHTML: this.nextYearButtonContent || undefined, onClick: this.nextYear, type: "button" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("polyline", { points: "13 17 18 12 13 7" }), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("polyline", { points: "6 17 11 12 6 7" }))))), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getClassName('body') }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("table", { class: this.getClassName('calendar'), onKeyDown: this.onKeyDown, role: "grid" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("thead", { class: this.getClassName('calendar-header') }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("tr", { class: this.getClassName('weekday-row') }, this.weekdays.map((weekday) => ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("th", { abbr: weekday[1], class: this.getClassName('weekday'), key: weekday[0], scope: "col" }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("span", null, weekday[0])))))), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("tbody", null, this.getCalendarRows().map((calendarRow) => {
      const rowKey = `row-${calendarRow[0].getMonth()}-${calendarRow[0].getDate()}`;
      return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("tr", { class: this.getClassName('calendar-row'), key: rowKey }, calendarRow.map((day) => {
        var _a, _b, _c, _d, _e;
        const isCurrent = isSameDay(day, this.currentDate);
        const isOverflowing = day.getMonth() !== this.currentDate.getMonth();
        const isSelected = Array.isArray(this.value)
          ? isSameDay(day, this.value[0]) ||
            isSameDay(day, this.value[1])
          : isSameDay(day, this.value);
        const isInRange = !this.isRangeValue
          ? false
          : isDateInRange(day, {
            from: (_a = this.value) === null || _a === void 0 ? void 0 : _a[0],
            to: ((_b = this.value) === null || _b === void 0 ? void 0 : _b[1]) ||
              this.hoveredDate ||
              this.currentDate
          });
        const orderedValues = Boolean((_c = this.value) === null || _c === void 0 ? void 0 : _c[0])
          ? [
            (_d = this.value) === null || _d === void 0 ? void 0 : _d[0],
            ((_e = this.value) === null || _e === void 0 ? void 0 : _e[1]) || this.hoveredDate
          ].sort((a, b) => a - b)
          : [];
        const isStart = this.range && isSameDay(orderedValues[0], day);
        const isEnd = this.range && isSameDay(orderedValues[1], day);
        const isToday = isSameDay(day, new Date());
        const isDisabled = this.disableDate(day);
        const cellKey = `cell-${day.getMonth()}-${day.getDate()}`;
        const className = {
          [this.getClassName('date')]: true,
          [this.getClassName('date--current')]: isCurrent,
          [this.getClassName('date--disabled')]: isDisabled,
          [this.getClassName('date--overflowing')]: isOverflowing,
          [this.getClassName('date--today')]: isToday,
          [this.getClassName('date--selected')]: isSelected,
          [this.getClassName('date--in-range')]: isInRange,
          [this.getClassName('date--start')]: isStart,
          [this.getClassName('date--end')]: isEnd
        };
        const Tag = isSelected
          ? 'strong'
          : isToday
            ? 'em'
            : 'span';
        return ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("td", { "aria-disabled": String(isDisabled), "aria-selected": isSelected ? 'true' : undefined, class: className, "data-date": getISODateString(day), key: cellKey, onClick: this.onClick, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, role: "gridcell", tabIndex: isSameDay(day, this.currentDate) && !this.disabled
            ? 0
            : -1 }, (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)(Tag, { "aria-hidden": "true" }, day.getDate()), (0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("span", { class: "visually-hidden" }, Intl.DateTimeFormat(this.locale, {
          day: 'numeric',
          month: 'long'
        }).format(day))));
      })));
    })))), showFooter && ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: this.getClassName('footer') }, this.showTodayButton && ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: this.getClassName('today-button'), disabled: this.disabled, innerHTML: this.todayButtonContent || undefined, onClick: this.showToday, type: "button" }, this.labels.todayButton)), this.showClearButton && ((0,_stencil_core_internal_client__WEBPACK_IMPORTED_MODULE_0__.h)("button", { class: this.getClassName('clear-button'), disabled: this.disabled, innerHTML: this.clearButtonContent || undefined, onClick: this.clear, type: "button" }, this.labels.clearButton)))))));
  }
  get el() { return this; }
  static get watchers() { return {
    "firstDayOfWeek": ["watchFirstDayOfWeek"],
    "locale": ["watchLocale"],
    "range": ["watchRange"],
    "startDate": ["watchStartDate"],
    "value": ["watchValue"]
  }; }
  static get style() { return wcDatepickerCss; }
}, [2, "wc-datepicker", {
    "clearButtonContent": [1, "clear-button-content"],
    "disabled": [4],
    "disableDate": [16],
    "elementClassName": [1, "element-class-name"],
    "firstDayOfWeek": [2, "first-day-of-week"],
    "range": [4],
    "labels": [16],
    "locale": [1],
    "nextMonthButtonContent": [1, "next-month-button-content"],
    "nextYearButtonContent": [1, "next-year-button-content"],
    "previousMonthButtonContent": [1, "previous-month-button-content"],
    "previousYearButtonContent": [1, "previous-year-button-content"],
    "showClearButton": [4, "show-clear-button"],
    "showMonthStepper": [4, "show-month-stepper"],
    "showTodayButton": [4, "show-today-button"],
    "showYearStepper": [4, "show-year-stepper"],
    "startDate": [1, "start-date"],
    "todayButtonContent": [1, "today-button-content"],
    "value": [1040],
    "currentDate": [32],
    "hoveredDate": [32],
    "weekdays": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["wc-datepicker"];
  components.forEach(tagName => { switch (tagName) {
    case "wc-datepicker":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, WCDatepicker);
      }
      break;
  } });
}

const WcDatepicker = WCDatepicker;
const defineCustomElement = defineCustomElement$1;




/***/ }),

/***/ "./src/controlDueDateChange.js":
/*!*************************************!*\
  !*** ./src/controlDueDateChange.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controlDueDateChange)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var wc_datepicker_dist_components_wc_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wc-datepicker/dist/components/wc-datepicker */ "./node_modules/wc-datepicker/dist/components/wc-datepicker.js");
/* harmony import */ var wc_datepicker_dist_themes_dark_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wc-datepicker/dist/themes/dark.css */ "./node_modules/wc-datepicker/dist/themes/dark.css");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");






// customElements.define("wc-datepicker", WcDatepicker);


function controlDueDateChange(element, index){
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_5__.getFromLocalStorage)('todos')
    // const buttons = ['low', 'medium', 'high'];
    const correctIndex = todos.findIndex(item => item.order == index)
    const { top, left, width } = element.getBoundingClientRect()

    
    const datePicker = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('wc-datepicker', 'new-due-date', 'datepicker')
    datePicker.classList.add('edit-due-date')
    const currentDate = todos[correctIndex].dueDate 
    datePicker.setAttribute('start-date', `${currentDate}`)
    // datePicker.setAttribute('value', `${Date('2024-01-04')}`)
    datePicker.value = new Date(`${currentDate.replaceAll('-', '/')}`)

    datePicker.style.position = 'absolute'
    datePicker.style.display = 'flex'
    datePicker.style.top = `${top}px`;
    datePicker.style.left = `${left - (238-width)}px`; 
    document.body.appendChild(datePicker);
    
    document.addEventListener('mousedown', e =>{
        if(!e.target.closest('.new-due-date'))
           datePicker.remove()
    })
    //function handleDateChange(){
        datePicker.addEventListener('selectDate', function(event) {
            console.log(event)
            const datepicked = event.detail
            ;(0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyDueDate)(index, datepicked)
            datePicker.remove()
            // displayTasks(todos)
            console.log(todos)
        });
    //}
    
    // datePicker.addEventListener('mousedown', e => {
    //     e.preventDefault()
    //     e.stopPropagation()
    //     handleDateChange()
    // })    
    
}

/***/ }),

/***/ "./src/controlListChange.js":
/*!**********************************!*\
  !*** ./src/controlListChange.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "controlListChange": () => (/* binding */ controlListChange),
/* harmony export */   "updateListOptions": () => (/* binding */ updateListOptions)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");






function updateListOptions(lists){
    const listInput = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('listInput')
    
    while (listInput.firstChild) {
        listInput.removeChild(listInput.firstChild);
    }
    const listArray = lists.map( list => list.listName)
    listArray.forEach(item => {
        const optionElement = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])(). createElementWithClassAndId('option', 'option-input', `list${listArray.indexOf(item)}`)
        optionElement.value = item
        optionElement.textContent = item
        listInput.appendChild(optionElement)
})
}




function controlListChange(element, index){
    const todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)('todos')
    const lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)('lists')
    const buttons = lists.map( list => list.listName);
    const { top, left } = element.getBoundingClientRect()
    const changeList = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().generateListOptions({top, left}, buttons, 'list')
    
    document.addEventListener('mousedown', e =>{
        changeList.remove()
        
    })
    
    // changePriority.addEventListener('mouseleave', e => {
    //     setInterval( function() {changePriority.remove()}, 500)
    // })
    changeList.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-list-button')){
             console.log(e.target.value);
             (0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyList)(index, `${e.target.value}`)
            //  interactDOM().hide(changeStatus);
            changeList.remove()
            //  displayTasks(todos)  
        }
     })
}



/***/ }),

/***/ "./src/controlPriorityChange.js":
/*!**************************************!*\
  !*** ./src/controlPriorityChange.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controlPriorityChange)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");





function controlPriorityChange(element, index){
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)('todos')
    const buttons = ['low', 'medium', 'high'];
    const { top, left } = element.getBoundingClientRect()
    const changePriority = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().generateListOptions({top, left}, buttons, 'priority')
    
    document.addEventListener('mousedown', e =>{
        changePriority.remove()
        
    })
    
    // changePriority.addEventListener('mouseleave', e => {
    //     setInterval( function() {changePriority.remove()}, 500)
    // })
    changePriority.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-priority-button')){
             console.log(e.target.value);
             (0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyPriority)(index, `${e.target.value}`)
            //  interactDOM().hide(changeStatus);
            // changePriority.remove()
            //  displayTasks(todos)  
        }
     })
}

/***/ }),

/***/ "./src/controlStatusChange.js":
/*!************************************!*\
  !*** ./src/controlStatusChange.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controlStatusChange)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");





function controlStatusChange(element, index){
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)('todos')
    const buttons = ['to-do', 'doing', 'done', 'wont do'];
    const { top, left } = element.getBoundingClientRect()

    const changeStatus = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().generateListOptions({top, left}, buttons, 'status')
    // const changeStatus = interactDOM().hookDOMelement('changeStatus')
    // const changeStatus = interactDOM().createElementWithClassAndId('div', 'change-status', 'changeStatus')
    //     buttons.forEach((button) => {
    //       const buttonElement = interactDOM().createElementWithClassAndId('button', 'change-status-button', `${buttons[buttons.indexOf(button)]}#id`)
    //       buttonElement.value = button;
    //       buttonElement.textContent = button;
    //       changeStatus.appendChild(buttonElement);
    //     });
    // // interactDOM().toggleElementDisplay(changeStatus)
    // changeStatus.style.position = 'absolute'
    // changeStatus.style.display = 'flex'
    // changeStatus.style.top = `${top}px`;
    // changeStatus.style.left = `${left}px`; 
    // document.body.appendChild(changeStatus);


    document.addEventListener('mousedown', e =>{
        changeStatus.remove()
        
    })
    
    // changeStatus.addEventListener('mouseleave', e => {
    //     setInterval( function() {changeStatus.remove()}, 500)
    // })


    changeStatus.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-status-button')){
             console.log(e.target.value);
             (0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyStatus)(index, `${e.target.value}`)
            //  interactDOM().hide(changeStatus);
            changeStatus.remove()
            //  displayTasks(todos)  
        }
     })
}

/***/ }),

/***/ "./src/controlTaskChange.js":
/*!**********************************!*\
  !*** ./src/controlTaskChange.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ controlTaskChange)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");






function controlTaskChange(element, index){
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)('todos')
    // const buttons = ['low', 'medium', 'high'];
    const correctIndex = todos.findIndex(item => item.order == index)
    const { top, left } = element.getBoundingClientRect()
    const changeTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('input', 'change-task-input', 'changeTaskInput')
    changeTask.type = 'text'
    const taskValue = `${todos[correctIndex].task}`
    changeTask.value = taskValue
    
    changeTask.style.position = 'absolute'
    changeTask.style.display = 'flex'
    changeTask.style.top = `${top}px`;
    changeTask.style.left = `${left}px`; 
    document.body.appendChild(changeTask);
    
    document.addEventListener('mousedown', e =>{
        if(!e.target.classList.contains('change-task-input') && document.contains(changeTask)){
            (0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyTask)(index, `${changeTask.value}`)
            changeTask.remove()
            // displayTasks(todos)
        }
    })
    
    changeTask.addEventListener('keydown', e => {
        if(e.keyCode == 13){
            (0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyTask)(index, `${changeTask.value}`)
            changeTask.remove()
            // displayTasks(todos) 
        }
    })



    // changePriority.addEventListener('mouseleave', e => {
    //     setInterval( function() {changePriority.remove()}, 500)
    // })
    // changePriority.addEventListener('mousedown', e =>{
    //     if (e.target.classList.contains('change-priority-button')){
    //          console.log(e.target.value);
    //          modifyPriority(index, `${e.target.value}`, todos)
    //         //  interactDOM().hide(changeStatus);
    //         changePriority.remove()
    //          displayTasks(todos)  
    //     }
    //  })
}

/***/ }),

/***/ "./src/createList.js":
/*!***************************!*\
  !*** ./src/createList.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList),
/* harmony export */   "createNewList": () => (/* binding */ createNewList),
/* harmony export */   "deleteList": () => (/* binding */ deleteList),
/* harmony export */   "modifyList": () => (/* binding */ modifyList)
/* harmony export */ });
/* harmony import */ var _displayLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayLists */ "./src/displayLists.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");
/* harmony import */ var _controlListChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controlListChange */ "./src/controlListChange.js");





const lists = []


const deleteList = (index) => {
    let lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('lists')
    lists.splice(index, 1)
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(lists, 'lists')
    ;(0,_displayLists__WEBPACK_IMPORTED_MODULE_0__["default"])(lists)
    ;(0,_controlListChange__WEBPACK_IMPORTED_MODULE_2__.updateListOptions)(lists)
}


function modifyList (index, listValue, lists) {
    const list = createList(`${listValue}`)
    
    lists.splice(index, 1, list)

    ;(0,_displayLists__WEBPACK_IMPORTED_MODULE_0__["default"])(lists)
}

function createList (listName){
    let list = {
        listName
    }
    return Object.assign({}, list)
}


const createNewList = (listName) => {
    const lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('lists')
    const list = createList(listName)
    lists.push(list)
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(lists, 'lists')
}

// const list1 = createList('general')
// const list2 = createList('Nemo')
// const list3 = createList('Project')
// const list4 = createList('daily')
// lists.push(list1)
// lists.push(list2)
// lists.push(list3)
// lists.push(list4)
// console.log(lists.map( list => list.listName))

// displayLists(lists)

// updateListOptions(lists)









/***/ }),

/***/ "./src/displayLists.js":
/*!*****************************!*\
  !*** ./src/displayLists.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayLists)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _remove_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove.png */ "./src/remove.png");



function displayLists(array){
    const listsView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('listsView')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('lists').forEach(e => e.remove())
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('delete-list').forEach(e => e.remove())
    for(let i = 0; i < array.length; i++){
        let container = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('section', 'lists', `list${i}`)
        let deleteList = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'delete-list', `deleteList#${i}`)
        // let checkTask = interactDOM().createElementWithClassAndId('button', 'check-task', `checktask#${i}`)
        // let deleteTask = interactDOM().createElementWithClassAndId('button', 'delete-task', `${i}`)
        let deleteImage = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'delete-list-img', `deleteListImage#${i}`)
        deleteImage.src = _remove_png__WEBPACK_IMPORTED_MODULE_1__
        deleteList.appendChild(deleteImage)
        // container.appendChild(checkTask)
        ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendListElementandDefineContent(container, array[i], i)
        listsView.appendChild(container)
        container.appendChild(deleteList)
    }
}

/***/ }),

/***/ "./src/displayTasks.js":
/*!*****************************!*\
  !*** ./src/displayTasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _crossed_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crossed.png */ "./src/crossed.png");

// import loopTodos from "./loopTodos"


function displayTasks(array){
    const todosView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('todosView')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('todos').forEach(e => e.remove())
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('delete-task').forEach(e => e.remove())
    for(let i = 0; i < array.length; i++){
        let container = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'todos', `todo${array[i].order}`)
        let checkTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'check-task', `checktask#${i}`)
        let deleteTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'delete-task', `${i}`)
        let deleteImage = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'delete-image', 'deleteImage')
        deleteImage.src = _crossed_png__WEBPACK_IMPORTED_MODULE_1__
        deleteTask.appendChild(deleteImage)
        container.appendChild(checkTask)
        ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendElementAndDefineContent(container, array[i], array[i].order)
        todosView.appendChild(container)
        container.appendChild(deleteTask)
    }
}

/***/ }),

/***/ "./src/filterByDate.js":
/*!*****************************!*\
  !*** ./src/filterByDate.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filterByDate)
/* harmony export */ });
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");



function filterByDate (dateValue, todos){
    
    // console.log(lists[index].listName)
    const filteredTodos = todos.filter(todo => todo.dueDate == dateValue )
    console.log(filteredTodos)
    
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(filteredTodos)
} 

/***/ }),

/***/ "./src/filterByList.js":
/*!*****************************!*\
  !*** ./src/filterByList.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filterByList)
/* harmony export */ });
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");



function filterByList (element, lists, todos){
    const index = +`${element.id}`.replace("list", "")
    // console.log(lists[index].listName)
    const listValue = lists.map( list => list.listName)[index] == undefined ? element.value : lists.map( list => list.listName)[index]
    const filteredTodos = todos.filter(todo => todo.list == listValue )
    console.log(filteredTodos)
    
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(filteredTodos)
} 

/***/ }),

/***/ "./src/filterByPriority.js":
/*!*********************************!*\
  !*** ./src/filterByPriority.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filterByPriority)
/* harmony export */ });
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");



function filterByPriority (element, todos){
    
    // console.log(lists[index].listName)
    const priorityValue =  element.value
    const filteredTodos = todos.filter(todo => todo.priority == priorityValue )
    console.log(filteredTodos)
    
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(filteredTodos)
} 

/***/ }),

/***/ "./src/filterByStatus.js":
/*!*******************************!*\
  !*** ./src/filterByStatus.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filterByStatus)
/* harmony export */ });
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");



function filterByStatus (element, todos){
    
    // console.log(lists[index].listName)
    const statusValue =  element.value
    const filteredTodos = todos.filter(todo => todo.status == statusValue )
    console.log(filteredTodos)
    
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(filteredTodos)
} 

/***/ }),

/***/ "./src/handleFilterOrder.js":
/*!**********************************!*\
  !*** ./src/handleFilterOrder.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleFilterOrder)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _right_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./right.png */ "./src/right.png");
/* harmony import */ var _filterByList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filterByList */ "./src/filterByList.js");
/* harmony import */ var _filterByStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterByStatus */ "./src/filterByStatus.js");
/* harmony import */ var _filterByPriority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filterByPriority */ "./src/filterByPriority.js");
/* harmony import */ var _filterByDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filterByDate */ "./src/filterByDate.js");
/* harmony import */ var _sortByTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sortByTitle */ "./src/sortByTitle.js");
/* harmony import */ var wc_datepicker_dist_components_wc_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wc-datepicker/dist/components/wc-datepicker */ "./node_modules/wc-datepicker/dist/components/wc-datepicker.js");
/* harmony import */ var wc_datepicker_dist_themes_dark_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wc-datepicker/dist/themes/dark.css */ "./node_modules/wc-datepicker/dist/themes/dark.css");
/* harmony import */ var _down_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./down.png */ "./src/down.png");











customElements.define("wc-datepicker", wc_datepicker_dist_components_wc_datepicker__WEBPACK_IMPORTED_MODULE_7__.WcDatepicker);


function populateFilter (parentElement, array){
    array.forEach((option) => {
        const optionElement = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'filter-sort-expanded', `filterSortExpandedId#${array.indexOf(option)}`)
        optionElement.textContent = option
        optionElement.value = option;
        // optionElement.textContent = option;
        parentElement.appendChild(optionElement);
    });
}

function inputElementIcons(parentElement, icon){
    const image = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'expand-icon', `${parentElement}-icon` )
    image.src = icon
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement(parentElement).appendChild(image)
}

inputElementIcons('todosTitleTasks', _down_png__WEBPACK_IMPORTED_MODULE_9__)
inputElementIcons('todosTitleStatus', _down_png__WEBPACK_IMPORTED_MODULE_9__)
inputElementIcons('todosTitleLists', _down_png__WEBPACK_IMPORTED_MODULE_9__)
inputElementIcons('todosTitlePriorities', _down_png__WEBPACK_IMPORTED_MODULE_9__)
inputElementIcons('todosTitleDueDates', _down_png__WEBPACK_IMPORTED_MODULE_9__)


function handleFilterOrder (lists, todos){
    const todosGeneralTitles = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('todosGeneralTitles')
    todosGeneralTitles.addEventListener('click', e => {
        
            if(e.target.classList.contains('expand-icon')){
                const currentGeneralTitle = e.target.parentNode
                // console.log(currentGeneralTitle)
                // console.log(e.target.getBoundingClientRect())
                let { top, left } = e.target.parentNode.getBoundingClientRect()
                const expandedMenu = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'expanded-menu', 'expandedMenu')
    
                const options = currentGeneralTitle.id == 'todosTitleTasks' ? ['Sort'] : ['Filter', 'Sort']
                options.forEach((option) => {
                    const optionElement = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'filter-sort', `filterSortId#${options.indexOf(option)}`)
                    const textElement = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('p', 'filter-sort-text', `filterSortText#${options.indexOf(option)}`)
                    const rightArrow = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'right-arrow', `rightArrow#${options.indexOf(option)}`)
                    rightArrow.src = _right_png__WEBPACK_IMPORTED_MODULE_1__
                    textElement.textContent = option
                    optionElement.value = option;
                    // optionElement.textContent = option;
                    expandedMenu.appendChild(optionElement);
                    optionElement.appendChild(textElement);
    
                    optionElement.appendChild(rightArrow)
                });
    
                expandedMenu.style.position = 'absolute'
                expandedMenu.style.display = 'flex'
                expandedMenu.style.top = `${top + 26}px`;
                expandedMenu.style.left = `${left}px`;
                document.body.appendChild(expandedMenu);
    
                document.addEventListener('mousedown', e => {
                    if(!e.target.parentNode.classList.contains('filter-sort')){
                        // console.log(e.target)
                        expandedMenu.remove()
                    }
                    
    
            })
    
                expandedMenu.addEventListener('click', e  => {
                    if(e.target.parentNode.classList.contains('filter-sort')){
                        if(e.target.parentNode.value == 'Filter'){
                            const { right } = e.target.parentNode.getBoundingClientRect()  
                            const expandedFilterMenu = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'expanded-filter-menu', "expandedFilterMenu")
                            // const todoTitle = `${currentGeneralTitle.id}`.replace("todosTitle", "")
                            let todoTitle = currentGeneralTitle.id.slice(10)
                            // console.log(todoTitle)
                            let options
                            switch (todoTitle) {
                                case 'Status':
                                    options = ['to-do', 'doing', 'done', 'wont do']
                                    console.log(options)
                                    populateFilter (expandedFilterMenu, options)
                                    break
                                case 'Lists':
                                    options = lists.map( list => list.listName)
                                    console.log(options)
                                    populateFilter (expandedFilterMenu, options)
                                    break
                                case 'Priorities':
                                    options = ['low', 'medium', 'high']
                                    console.log(options)
                                    populateFilter (expandedFilterMenu, options)
                                    break
                                case 'DueDates':
                                expandedFilterMenu.classList.add('filter-dueDate')
                                const datePicker = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('wc-datepicker', 'date-picker', 'datepicker')
                                expandedFilterMenu.appendChild(datePicker)
                               

                                

                                
                                    break
                                default:
                                    options = []
                                    break;
                            }
                            
                            // options.forEach((option) => {
                            //     const optionElement = interactDOM().createElementWithClassAndId('button', 'filter-sort-expanded', `filterSortExpandedId#${options.indexOf(option)}`)
                            //     optionElement.textContent = option
                            //     optionElement.value = option;
                            //     // optionElement.textContent = option;
                            //     expandedFilterMenu.appendChild(optionElement);
                            // });

                            expandedFilterMenu.style.position = 'absolute'
                            expandedFilterMenu.style.display = 'flex'
                            expandedFilterMenu.style.top = `${top + 26}px`;
                            if(todoTitle == 'DueDates'){
                                console.log(e.target.parentNode.getBoundingClientRect())
                                expandedFilterMenu.style.left = `${right - 420}px`;
                            } else {
                                expandedFilterMenu.style.left = `${right + 1}px`;
                            }
                            document.body.appendChild(expandedFilterMenu);

                            document.addEventListener('mousedown', e => {
                                    expandedFilterMenu.remove()

                                }
                            )
     
                            expandedFilterMenu.addEventListener('mousedown', e =>{
                                e.stopPropagation()
                                if (e.target.parentNode.classList.contains('expanded-filter-menu') || e.target.parentNode.classList.contains('wc-datepicker__date'))  {
                                    console.log(e.target.value)
                                    console.log(todoTitle)
                                    switch (todoTitle) {
                                        case 'Status':
                                            ;(0,_filterByStatus__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target, todos)
                                            expandedMenu.remove()
                                            expandedFilterMenu.remove()
                                            break
                                        case 'Lists':
                                            // console.log(e.target)    
                                            ;(0,_filterByList__WEBPACK_IMPORTED_MODULE_2__["default"])(e.target, lists, todos)
                                            expandedMenu.remove()
                                            expandedFilterMenu.remove()
                                            break
                                        case 'Priorities':
                                            ;(0,_filterByPriority__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target, todos)
                                            expandedMenu.remove()
                                            expandedFilterMenu.remove()
                                            break
                                        case 'DueDates':
                                            // console.log('teste')
                                            const datepicker = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('datepicker')
                                            datepicker.addEventListener('selectDate', function(event) {
                                                const datepicked = event.detail
                                                console.log(datepicked == todos[0].dueDate);
                                                (0,_filterByDate__WEBPACK_IMPORTED_MODULE_5__["default"])(datepicked, todos)
                                                expandedMenu.remove()
                                                expandedFilterMenu.remove()
                                              });
                                            break
                                    }
                                   
                                }
                            })
                            

                            // console.log(e.target.parentNode.value)
                        } else if(e.target.parentNode.value == 'Sort'){
                            const { right, top } = e.target.parentNode.getBoundingClientRect()
                            const expandedSortMenu = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'expanded-sort-menu', "expandedSortMenu")
                            let todoTitle = currentGeneralTitle.id.slice(10)
                            const options = todoTitle == 'DueDates' ? ['Newest to oldest', 'Oldest to newest'] : ['Alphabetical', 'Reverse alphabetical']
                            
                            options.forEach((option) => {
                                const optionElement = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'filter-sort-expanded', `filterSortExpandedId#${options.indexOf(option)}`)
                                optionElement.textContent = option
                                optionElement.value = option;
                                // optionElement.textContent = option;
                                expandedSortMenu.appendChild(optionElement);
                            });
                            
                            expandedSortMenu.style.position = 'absolute'
                            expandedSortMenu.style.display = 'flex'
                            expandedSortMenu.style.top = `${top}px`;
                            // expandedSortMenu.style.left = `${right + 1}px`;
                            if(todoTitle == 'DueDates'){
                                console.log(e.target.parentNode.getBoundingClientRect())
                                expandedSortMenu.style.left = `${right - 301}px`;
                            } else {
                                expandedSortMenu.style.left = `${right + 1}px`;
                            }


                            document.body.appendChild(expandedSortMenu);

                            document.addEventListener('mousedown', e => {
                                expandedSortMenu.remove()
                            })

                            expandedSortMenu.addEventListener('mousedown', e => {
                                if (e.target.parentNode.classList.contains('expanded-sort-menu')){
                                    switch (todoTitle) {
                                        case 'Status':
                                            (0,_sortByTitle__WEBPACK_IMPORTED_MODULE_6__["default"])(e.target, todos, 'status')
                                            break
                                        case 'Lists':
                                            console.log(e.target)    
                                            ;(0,_sortByTitle__WEBPACK_IMPORTED_MODULE_6__["default"])(e.target, todos, 'list')
                                            break
                                        case 'Priorities':
                                            ;(0,_sortByTitle__WEBPACK_IMPORTED_MODULE_6__["default"])(e.target, todos, 'priority')
                                            break
                                        case 'DueDates':
                                            console.log(e.target)
                                            ;(0,_sortByTitle__WEBPACK_IMPORTED_MODULE_6__["default"])(e.target, todos, 'dueDate')
                                            break
                                        case 'Tasks':
                                            ;(0,_sortByTitle__WEBPACK_IMPORTED_MODULE_6__["default"])(e.target, todos, 'task')
                                            break;
                                        default:
                                            break;
                                    }
                                }
                            })
                        }
                    }
                })
    
                
    
    
    
            }
            
    
    
    
        
        
    })
    

}



/***/ }),

/***/ "./src/handleNewListForm.js":
/*!**********************************!*\
  !*** ./src/handleNewListForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleNewListForm)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");


function handleNewListForm (e){
    e.preventDefault()
    const newListForm = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('newListForm')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().toggleElementDisplay(newListForm)
    const mainContainer = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('mainContainer')
    mainContainer.classList.add('blur')
    document.body.addEventListener('mousedown', e => {
        if(!e.target.parentNode.classList.contains('new-list-form') 
        && !e.target.parentNode.classList.contains('add-list-form')
        && !e.target.parentNode.classList.contains('label-input-name')
        && !e.target.parentNode.classList.contains('label-input-description')
        && !e.target.parentNode.classList.contains('new-list-buttons')
        && !e.target.classList.contains('new-list-form')
        && !e.target.parentNode.classList.contains('new-list')
        || e.target.classList.contains('cancel-list-add')){
            // console.log(e.target)
            (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hide(newListForm)
            // newTask.remove()
        }
    })
}

/***/ }),

/***/ "./src/handleNewTaskForm.js":
/*!**********************************!*\
  !*** ./src/handleNewTaskForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleNewTaskForm)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");





function handleNewTaskForm (){
    const openTaskForm = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('openTaskForm')
    const newTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('newTask')
    openTaskForm.addEventListener('mousedown', e =>{
        e.preventDefault()
        e.stopPropagation()
        ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().toggleElementDisplay(newTask, 'grid');
    })
    const dueDateInput = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('dueDateInput')
    const datePicker = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('wc-datepicker', 'new-due-date', 'datepicker')
    dueDateInput.addEventListener('mousedown', e => {
        e.stopPropagation()
        const { top, left, width } = e.target.getBoundingClientRect()
        datePicker.style.position = 'absolute'
        datePicker.style.display = 'flex'
        datePicker.style.top = `${top + 26}px`;
        datePicker.style.left = `${left -(236-width)}px`;
        document.body.appendChild(datePicker)
        datePicker.addEventListener('selectDate', function(event) {
            const datepicked = event.detail
            dueDateInput.textContent = datepicked
            dueDateInput.value = datepicked
            datePicker.remove()
          });
    })

    document.body.addEventListener('mousedown', e => {
        // e.stopPropagation()
        if(!e.target.parentNode.classList.contains('new-task') 
        && !e.target.parentNode.classList.contains('open-task-form') 
        && !e.target.closest('.new-due-date')){
            (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hide(newTask)
            datePicker.remove()
        } 
    })
    document.body.addEventListener('mousedown', e=>{
        if(!e.target.closest('.new-due-date')){
            datePicker.remove()
        }
    })
}





/***/ }),

/***/ "./src/handleSaveLogic.js":
/*!********************************!*\
  !*** ./src/handleSaveLogic.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToLocalStorage": () => (/* binding */ addToLocalStorage),
/* harmony export */   "getFromLocalStorage": () => (/* binding */ getFromLocalStorage),
/* harmony export */   "handleSaveLogic": () => (/* binding */ handleSaveLogic)
/* harmony export */ });
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");


function addToLocalStorage(array, keyWord) {
    window.localStorage.setItem(keyWord, JSON.stringify(array));
  }


function getFromLocalStorage(keyWord) {
    const reference = window.localStorage.getItem(keyWord);
    // if reference exists
    if (reference) {
      // converts back to array and store it in todos array
      return JSON.parse(reference);
    //   displayTasks(todos);
    } else {
        return []
    }
  }





function handleSaveLogic(todos, lists){
    localStorage.setItem('todos', JSON.stringify(todos))
    const parsedTodos = JSON.parse(localStorage.getItem('todos') || [])
    console.log(parsedTodos)


}



/***/ }),

/***/ "./src/interactDom.js":
/*!****************************!*\
  !*** ./src/interactDom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");


const interactDOM = function(){
    const mainContent = document.getElementById('mainContent')


    const createElementWithClassAndId = function(type, className, idName){
        const element = document.createElement(type)
        element.classList.add(`${className}`)
        element.id = `${idName}`
        return element
    }

    const hookDOMelement = function (idName){
        const elem = document.getElementById(`${idName}`)
        return elem
    }

    const returnAllMatchingElements = function(className){
        return document.querySelectorAll(`.${className}`)
    }

    const getInputValue = function(idName){
        return interactDOM().hookDOMelement(idName).value
    }

    const toggleElementDisplay = function(element, displayValue){
        if(arguments.length > 1){
            element.style.display == displayValue ? element.style.display = 'none' : element.style.display = displayValue
        } else if (arguments.length == 1){
            element.style.display == 'flex' ? element.style.display = 'none' : element.style.display = 'flex'
        }
        
        
        // if(element.style.display == 'flex'){
        //     element.style.display = 'none'
        // } else {
        //     element.style.display = 'flex'
        // }
    }

   

    const hide = function(element){
        element.style.display = 'none'
    }

    const show = function(element){
        element.style.display = 'flex'
    }

    const appendElementAndDefineContent = function (container, obj, index) {
        let task = interactDOM().createElementWithClassAndId('p', 'todo-tasks', `task${index}`)
        let status = interactDOM().createElementWithClassAndId('p', 'todo-status', `status${index}`)
        let list = interactDOM().createElementWithClassAndId('p', 'todo-lists', `list${index}`)
        let priority = interactDOM().createElementWithClassAndId('p', 'todo-priority', `priority${index}`)
        let dueDate = interactDOM().createElementWithClassAndId('p', 'todo-due-date', `dueDate${index}`)
        container.appendChild(task)
        container.appendChild(status)
        container.appendChild(list)
        container.appendChild(priority)
        container.appendChild(dueDate)
        task.textContent = `${obj.task}`
        status.textContent = `${obj.status}`
        list.textContent = `${obj.list}`
        priority.textContent = `${obj.priority}`
        dueDate.textContent = `${(0,date_fns_format__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(obj.dueDate.replaceAll('-', '/')), "MMM dd',' yy")}`
    }

    const appendListElementandDefineContent = function(container, obj, index){
        let list = interactDOM().createElementWithClassAndId('p', 'list-item', `list${index}`)
        container.appendChild(list)
        list.textContent = `${obj.listName}`
    }


    const generateListOptions = function ({top, left}, array, property){
        
        const element = interactDOM().createElementWithClassAndId('div', `change-${property}`, `change${property}Id`)
        // const buttons = ['to-do', 'doing', 'done', 'wont do'];
        const buttons = array;
        buttons.forEach((button) => {
          const buttonElement = interactDOM().createElementWithClassAndId('button', `change-${property}-button`, `${property}change${buttons.indexOf(button)}#id`)
          buttonElement.value = button;
          buttonElement.textContent = button;
          element.appendChild(buttonElement);
        });
    
   
    element.style.position = 'absolute'
    element.style.display = 'flex'
    element.style.top = `${top}px`;
    element.style.left = `${left}px`; 
    document.body.appendChild(element);

    return element
    }

    const formReset = function(formId){
    const form = interactDOM().hookDOMelement(`${formId}`)
    form.reset()    
    }
    
    return { 
        mainContent, 
        createElementWithClassAndId, 
        hookDOMelement, 
        returnAllMatchingElements, 
        getInputValue, 
        appendElementAndDefineContent,
        appendListElementandDefineContent, 
        toggleElementDisplay,
        hide,
        show,
        generateListOptions,
        formReset 
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (interactDOM);

/***/ }),

/***/ "./src/sortByTitle.js":
/*!****************************!*\
  !*** ./src/sortByTitle.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortByTitle)
/* harmony export */ });
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");


function sortByTitle(element, todos, title){
    const sortType =  element.value
    let sortedArray
    switch (sortType) {
        case 'Alphabetical':
            sortedArray = todos.sort((a, b) => a[title].toLowerCase() > b[title].toLowerCase() ? 1 : -1)
            break;
        case 'Reverse alphabetical':
            sortedArray = todos.sort((a, b) => a[title].toLowerCase() < b[title].toLowerCase() ? 1 : -1)
            break;
        case 'Newest to oldest':
            sortedArray = todos.sort((a, b) => new Date(a[title]) > new Date(b[title]) ? 1 : -1)
            break;
        case 'Oldest to newest':
            sortedArray = todos.sort((a, b) => new Date(a[title]) < new Date(b[title]) ? 1 : -1)
            break;
    }


    console.log(sortedArray)
    
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(sortedArray)
}



/***/ }),

/***/ "./src/todoCreator.js":
/*!****************************!*\
  !*** ./src/todoCreator.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewTask": () => (/* binding */ createNewTask),
/* harmony export */   "defineTaskId": () => (/* binding */ defineTaskId),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "modifyDueDate": () => (/* binding */ modifyDueDate),
/* harmony export */   "modifyList": () => (/* binding */ modifyList),
/* harmony export */   "modifyPriority": () => (/* binding */ modifyPriority),
/* harmony export */   "modifyStatus": () => (/* binding */ modifyStatus),
/* harmony export */   "modifyTask": () => (/* binding */ modifyTask),
/* harmony export */   "todoCreator": () => (/* binding */ todoCreator)
/* harmony export */ });
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");




// function addToLocalStorage(todos) {
//     // conver the array to string then store it.
//     localStorage.setItem('todos', JSON.stringify(todos));
   
//     displayTasks(todos);
//   }


const deleteTask = (index) => {
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    todos.splice(index, 1)
    todos.forEach(todo => todo.order = todos.indexOf(todo))
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos, 'todos')
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}


function defineTaskId (todos) {
    todos.forEach( todo => { 
        todo.order = todos.indexOf(todo)
    });
}

function modifyTask (index, taskValue) {
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    // const todo = createNewTask(`${taskValue}`, `${todos[index].status}`, `${todos[index].list}`, `${todos[index].priority}`, `${todos[index].dueDate}`, todos)
    // const todo = todoCreator(`${taskValue}`, `${todos[index].status}`, `${todos[index].list}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    
    // todos.splice(index, 1, todo)
    const correctIndex = todos.findIndex(item => item.order == index)
    todos[correctIndex].task = `${taskValue}`
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos, 'todos')
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}


function modifyStatus (index, statusValue) {
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    // const todo = todoCreator(`${todos[index].task}`, `${statusValue}`, `${todos[index].list}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    const correctIndex = todos.findIndex(item => item.order == index)
    // todos.splice(index, 1, todo)
    todos[correctIndex].status = `${statusValue}`
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos, 'todos')
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}

function modifyPriority (index, priorityValue) {
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    // const todo = todoCreator(`${todos[index].task}`, `${todos[index].status}` , `${todos[index].list}`, `${priorityValue}`, `${todos[index].dueDate}`)
    const correctIndex = todos.findIndex(item => item.order == index)
    // todos.splice(index, 1, todo)
    todos[correctIndex].priority = `${priorityValue}`
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos, 'todos')
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}

function modifyList (index, listValue) {
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    // const todo = todoCreator(`${todos[index].task}`, `${todos[index].status}` , `${listValue}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    const correctIndex = todos.findIndex(item => item.order == index)
    // todos.splice(index, 1, todo)
    todos[correctIndex].list = `${listValue}`
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos, 'todos')
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}


function modifyDueDate (index, dueDateValue){
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    const correctIndex = todos.findIndex(item => item.order == index)
    todos[correctIndex].dueDate = `${dueDateValue}`
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos, 'todos')
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}

function todoCreator(task, status, list, priority, dueDate){
    let todo = {
        task,
        status,
        list,
        priority,
        dueDate,
        order: null
    }

    return Object.assign(todo)
}




const createNewTask = (task, status, list, priority, dueDate) => {
    const todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    // displayTasks(todos)
    console.log(todos)
    const todo = todoCreator(task, status, list, priority, dueDate)
    // const newTodos = todos
    todos.push(todo)
    todo.order = todos.length - 1
    console.log(todos)
    
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos, 'todos')
    
    // const tempObj = newTodos[newTodos.indexOf(todo)]
    // console.log(tempObj)
    // const tempTodos = JSON.parse(localStorage.getItem('todos') || '[]')
    
    // if(tempTodos.indexOf(tempObj) == -1){
    //     localStorage.setItem('todos', JSON.stringify(newTodos))
    // }
    return todo
} 



/***/ }),

/***/ "./src/crossed.png":
/*!*************************!*\
  !*** ./src/crossed.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a91a6cb8bc28dc1d6402.png";

/***/ }),

/***/ "./src/down.png":
/*!**********************!*\
  !*** ./src/down.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2c3be0fcb72c5efb0f56.png";

/***/ }),

/***/ "./src/remove.png":
/*!************************!*\
  !*** ./src/remove.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0cce43713a210a058e3f.png";

/***/ }),

/***/ "./src/right.png":
/*!***********************!*\
  !*** ./src/right.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e79ec4889835b5b4d4a4.png";

/***/ }),

/***/ "./node_modules/@stencil/core/internal/app-data/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/app-data/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BUILD": () => (/* binding */ BUILD),
/* harmony export */   "Env": () => (/* binding */ Env),
/* harmony export */   "NAMESPACE": () => (/* binding */ NAMESPACE)
/* harmony export */ });
const BUILD = {
    allRenderFn: false,
    cmpDidLoad: true,
    cmpDidUnload: false,
    cmpDidUpdate: true,
    cmpDidRender: true,
    cmpWillLoad: true,
    cmpWillUpdate: true,
    cmpWillRender: true,
    connectedCallback: true,
    disconnectedCallback: true,
    element: true,
    event: true,
    hasRenderFn: true,
    lifecycle: true,
    hostListener: true,
    hostListenerTargetWindow: true,
    hostListenerTargetDocument: true,
    hostListenerTargetBody: true,
    hostListenerTargetParent: false,
    hostListenerTarget: true,
    member: true,
    method: true,
    mode: true,
    observeAttribute: true,
    prop: true,
    propMutable: true,
    reflect: true,
    scoped: true,
    shadowDom: true,
    slot: true,
    cssAnnotations: true,
    state: true,
    style: true,
    svg: true,
    updatable: true,
    vdomAttribute: true,
    vdomXlink: true,
    vdomClass: true,
    vdomFunctional: true,
    vdomKey: true,
    vdomListener: true,
    vdomRef: true,
    vdomPropOrAttr: true,
    vdomRender: true,
    vdomStyle: true,
    vdomText: true,
    watchCallback: true,
    taskQueue: true,
    hotModuleReplacement: false,
    isDebug: false,
    isDev: false,
    isTesting: false,
    hydrateServerSide: false,
    hydrateClientSide: false,
    lifecycleDOMEvents: false,
    lazyLoad: false,
    profile: false,
    slotRelocation: true,
    appendChildSlotFix: false,
    cloneNodeFix: false,
    hydratedAttribute: false,
    hydratedClass: true,
    safari10: false,
    scriptDataOpts: false,
    scopedSlotTextContentFix: false,
    shadowDomShim: false,
    slotChildNodesFix: false,
    invisiblePrehydration: true,
    propBoolean: true,
    propNumber: true,
    propString: true,
    cssVarShim: false,
    constructableCSS: true,
    cmpShouldUpdate: true,
    devTools: false,
    dynamicImportShim: false,
    shadowDelegatesFocus: true,
    initializeNextTick: false,
    asyncLoading: false,
    asyncQueue: false,
    transformTagName: false,
    attachStyles: true,
};
const Env = {};
const NAMESPACE = /* default */ 'app';




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "todo-list:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var _controlTaskChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controlTaskChange */ "./src/controlTaskChange.js");
/* harmony import */ var _controlStatusChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controlStatusChange */ "./src/controlStatusChange.js");
/* harmony import */ var _controlPriorityChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controlPriorityChange */ "./src/controlPriorityChange.js");
/* harmony import */ var _controlDueDateChange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controlDueDateChange */ "./src/controlDueDateChange.js");
/* harmony import */ var _controlListChange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controlListChange */ "./src/controlListChange.js");
/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createList */ "./src/createList.js");
/* harmony import */ var _displayLists__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./displayLists */ "./src/displayLists.js");
/* harmony import */ var _handleNewListForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./handleNewListForm */ "./src/handleNewListForm.js");
/* harmony import */ var _handleNewTaskForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./handleNewTaskForm */ "./src/handleNewTaskForm.js");
/* harmony import */ var _filterByList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./filterByList */ "./src/filterByList.js");
/* harmony import */ var _handleFilterOrder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./handleFilterOrder */ "./src/handleFilterOrder.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");
/* harmony import */ var _right_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./right.png */ "./src/right.png");
/* harmony import */ var wc_datepicker_dist_components_wc_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! wc-datepicker/dist/components/wc-datepicker */ "./node_modules/wc-datepicker/dist/components/wc-datepicker.js");




























// import "../node_modules/wc-datepicker/dist/themes/dark.css"


// const todos = JSON.parse(localStorage.getItem('todos') || '[]')
// const todos = []
let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_15__.getFromLocalStorage)('todos') || []
let lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_15__.getFromLocalStorage)('lists') || []
// const lists = []




// function getFromLocalStorage() {
//     const reference = localStorage.getItem('todos');
//     // if reference exists
//     if (reference) {
//       // converts back to array and store it in todos array
//       todos = JSON.parse(reference);
      
//     }
// }

;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)

// const deleteTask = index => {
//     todos.splice(index, 1)
//     displayTasks(todos)
// }


// const todo1 = createNewTask('walk with Manchinha', 'to-do', 'daily', 'high', '04/03/2023', todos)

// const todo1 = createNewTask('walk with Manchinha', 'to-do', 'daily', 'high', '2023-04-03', todos)
// const todo2 = createNewTask('play Ravendawn', 'to-do', 'daily', 'high', '2023-04-03', todos)
// const todo3 = createNewTask('study math', 'to-do', 'daily', 'medium', '2023-06-04', todos)
// const todo4 = createNewTask('play guitar', 'doing', 'general', 'low', '2023-07-02', todos)
// const todo5 = createNewTask('look for beavers', 'to-do', 'general', 'high', '2023-04-12', todos)
// const todo6 = createNewTask('try to catch a squirrel', 'to-do', 'general', 'low', '2023-12-06', todos)
// const todo7 = createNewTask('watch tv', 'doing', 'Nemo', 'medium', '2022-05-05', todos)
// const todo8 = createNewTask('take a shower', 'to-do', 'Project', 'high', '2024-05-17', todos)
// const todo9 = createNewTask('born', 'done', 'Nemo', 'high', '1993-01-04', todos)
// const todo10 = createNewTask('graduate at fanshawe', 'wont do', 'Project', 'medium', '2023-12-11', todos)

// todos.push(todo1)
// todos.push(todo2)
// todos.push(todo3)
// todos.push(todo4)
// todos.push(todo5)
// todos.push(todo6)
// todos.push(todo7)
// todos.push(todo8)
// todos.push(todo9)
// todos.push(todo10)
// console.log(todos)

// todos.forEach(todo => todo.order = todos.indexOf(todo))
// document.addEventListener('click', e =>{
//     todos.forEach(todo => todo.order = todos.indexOf(todo))
// })


const addTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('addTask')
addTask.addEventListener('click', e =>{
    const newTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('newTask')
    e.preventDefault()
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hide(newTask)
    addTasks()
    // displayTasks(todos)
})


const addTasks = function(){
    let task = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('taskInput')
    let status = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('statusInput')
    let list = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('listInput')
    let priority = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('priorityInput')
    let dueDate = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('dueDateInput')
    // const todo = todoCreator(`${task}`,`${status}`,`${list}`,`${priority}`,`${dueDate}`)
    ;(0,_todoCreator__WEBPACK_IMPORTED_MODULE_3__.createNewTask)(`${task}`,`${status}`,`${list}`,`${priority}`,`${dueDate}`)
    const todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_15__.getFromLocalStorage)('todos')
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)
    console.log(todos)
    // todos.push(todo)
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().formReset('newTask')
}

// displayTasks(todos)

// =============== edit tasks logic, soon will be a module
const todosView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('todosView')
todosView.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('delete-task')) {
        // console.log(e.target.id)
        (0,_todoCreator__WEBPACK_IMPORTED_MODULE_3__.deleteTask)(e.target.parentNode.id)
        
    } else if (e.target.classList.contains('todo-status')) {
        const index = +`${e.target.id}`.replace("status", "")
        // console.log(index)
        // handleStatusChange (e.target, index)
        ;(0,_controlStatusChange__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target, index, todos)
    } else if (e.target.classList.contains('todo-priority')){
        const index = +`${e.target.id}`.replace("priority", "")
        // console.log(index)
        ;(0,_controlPriorityChange__WEBPACK_IMPORTED_MODULE_6__["default"])(e.target, index, todos) 
    } else if (e.target.classList.contains('check-task')){
        
        e.target.classList.toggle('clicked')
        setInterval(function(){
            if(e.target.classList.contains('clicked')){
                completeTask(e.target)
            }    
        }, 2000)
        
        console.log(e.target)
        

    } else if (e.target.classList.contains('todo-lists')){
        const index = +`${e.target.id}`.replace("list", "")
        ;(0,_controlListChange__WEBPACK_IMPORTED_MODULE_8__.controlListChange)(e.target, index, lists, todos)
    } else if(e.target.classList.contains('todo-tasks')){
        const index = +`${e.target.id}`.replace("task", "")
        ;(0,_controlTaskChange__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target, index, todos)
    } else if(e.target.classList.contains('todo-due-date')){
        const index = +`${e.target.id}`.replace("dueDate", "")
        ;(0,_controlDueDateChange__WEBPACK_IMPORTED_MODULE_7__["default"])(e.target, index, todos)
    }
    
    // else {
    //     displayTasks(todos)
    // }
});
// =============== edit tasks logic, soon will be a module

// document.addEventListener('mousedown', e=> {
//     console.log(e.target)
// })

(0,_handleNewTaskForm__WEBPACK_IMPORTED_MODULE_12__["default"])()




// ======================= list add logic, soon will be a new module  


// const list1 = createList('general')
// const list2 = createList('Nemo')
// const list3 = createList('Project')
// const list4 = createList('daily')
// lists.push(list1)
// lists.push(list2)
// lists.push(list3)
// lists.push(list4)
// console.log(lists.map( list => list.listName))
// displayLists(lists)

// updateListOptions(lists)



  
const newList = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('newList')

newList.addEventListener('click', e => {
    ;(0,_handleNewListForm__WEBPACK_IMPORTED_MODULE_11__["default"])(e)
})


const addNewList = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('addNewList')

const addList = function (){
    const list = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('listName')
    const newList = (0,_createList__WEBPACK_IMPORTED_MODULE_9__.createNewList)(list)
    const lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_15__.getFromLocalStorage)('lists')
    ;(0,_displayLists__WEBPACK_IMPORTED_MODULE_10__["default"])(lists)
    ;(0,_controlListChange__WEBPACK_IMPORTED_MODULE_8__.updateListOptions)(lists)
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().formReset('addListForm')
}

addNewList.addEventListener('click', e =>{
    const newListForm = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('newListForm')
    e.preventDefault()
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hide(newListForm)
    addList()
    // displayLists(lists)
    // updateListOptions(lists)
})

;(0,_displayLists__WEBPACK_IMPORTED_MODULE_10__["default"])(lists)
;(0,_controlListChange__WEBPACK_IMPORTED_MODULE_8__.updateListOptions)(lists)

// ======================= list add logic, soon will be a new module


// =============== checkbox 'done' logic
function completeTask(element) {
    const index = +`${element.id}`.replace("checktask#", "")
    // console.log(element)
    ;(0,_todoCreator__WEBPACK_IMPORTED_MODULE_3__.modifyStatus)(index, 'done', todos) 
}
// =============== checkbox 'done' logic

// ======================== filter tasks by list

const listsView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('listsView')

listsView.addEventListener('click', e => {
    e.preventDefault()
    e.stopPropagation()
    if(e.target.classList.contains('list-item')){
        console.log(e.target)
        ;(0,_filterByList__WEBPACK_IMPORTED_MODULE_13__["default"])(e.target, lists, todos)
    } else if(e.target.parentNode.classList.contains('delete-list')){
        const index = +`${e.target.parentNode.id}`.replace("deleteList#", "")
        console.log(index)
        ;(0,_createList__WEBPACK_IMPORTED_MODULE_9__.deleteList)(index)
    }
})

// ======================== filter tasks by list

const removeFilter = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('removeFilter')
removeFilter.addEventListener('mousedown', e => {
    e.preventDefault()
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)
})


;(0,_handleFilterOrder__WEBPACK_IMPORTED_MODULE_14__["default"])(lists, todos)

console.log(todos)

document.body.addEventListener('mousedown', e =>{
    console.log(e.target.getBoundingClientRect())
})


// document.body.addEventListener('mouseover', e => {
//     if(e.target.classList.contains('delete-list-img')){
//         console.log('entered!')
//         e.target.style.cursor = 'pointer'
//         e.target.style.transform = 'scale(1.1)'
//     }
// })

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUZBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlGQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpRkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMEVBQWE7QUFDN0Isc0NBQXNDLGdCQUFnQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMEVBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpRkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0RUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUZBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFlBQVksMEVBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkVBQWM7QUFDdkIsWUFBWSxzRUFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0ZBQW1CLElBQUksMEVBQWE7QUFDaEQsZ0JBQWdCLHVFQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDRFQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0RUFBZSxJQUFJLDJFQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0RUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxZQUFZLHNFQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMkVBQWMsSUFBSSxpRkFBb0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyRUFBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFFBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQkFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBVztBQUNuQjtBQUNBLHVDQUF1QywwQkFBMEI7O0FBRWpFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMEVBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDRFQUFlO0FBQ3ZELFFBQVEseUVBQVksSUFBSSw0RUFBZTtBQUN2QztBQUNBO0FBQ0EsUUFBUSxpRkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlGQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwRUFBYSxJQUFJLG9GQUF1QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsMkRBQTJELFVBQVUsMEJBQTBCO0FBQ3ZLO0FBQ0E7QUFDQSxjQUFjLHlCQUF5QixVQUFVLHVCQUF1QjtBQUN4RSxjQUFjLDJCQUEyQjtBQUN6QztBQUNBLFFBQVEsK0VBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0RUFBZSxJQUFJLDRFQUFlO0FBQzFDO0FBQ0E7QUFDQSxRQUFRLCtFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyRUFBYztBQUNuQztBQUNBO0FBQ0EsWUFBWSwyRUFBYyxJQUFJLCtFQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOEVBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdGQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0ZBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsb0ZBQXVCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUFnQjtBQUN4QjtBQUNBO0FBQ0EsUUFBUSx3RUFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9GQUF1QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrRUFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0VBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhFQUFpQjtBQUN6QyxxQkFBcUIsMkVBQWM7QUFDbkMsc0JBQXNCLDRFQUFlO0FBQ3JDLHNCQUFzQiw0RUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhFQUFpQixJQUFJLDBFQUFhO0FBQzlDLGdCQUFnQiw2RUFBZ0IsSUFBSSwwRUFBYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0ZBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJFQUFjO0FBQ25DO0FBQ0EsUUFBUSwrRUFBa0I7QUFDMUIsWUFBWSx3RUFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdFQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0VBQWtCLElBQUksaUZBQW9CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkVBQWdCO0FBQzVCLGdCQUFnQix3RUFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0VBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0VBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrRUFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0VBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdFQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUZBQTBCO0FBQ2xDO0FBQ0E7QUFDQSxRQUFRLHlFQUFZLElBQUksMkVBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0RUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRkFBb0I7QUFDNUI7QUFDQTtBQUNBLFFBQVEsNkVBQWdCO0FBQ3hCO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVSxXQUFXLHNFQUFTLElBQUk7QUFDakYsUUFBUSwwRUFBYTtBQUNyQix5Q0FBeUMsc0VBQVMsRUFBRSxtQkFBbUIsSUFBSTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRkFBd0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0VBQVM7QUFDcEMsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUNBQWlDLGdGQUFtQjtBQUNwRDtBQUNBLE1BQU0sb0ZBQXVCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkVBQWM7QUFDOUI7QUFDQTtBQUNBLHFCQUFxQiwyRUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkVBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3RUFBVztBQUN2QjtBQUNBLGtEQUFrRCxTQUFTO0FBQzNEO0FBQ0E7QUFDQSxrREFBa0QsU0FBUztBQUMzRDtBQUNBO0FBQ0EsYUFBYSwyRUFBYztBQUMzQjtBQUNBLGdCQUFnQixnRkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCLDRFQUFlO0FBQy9CO0FBQ0Esb0JBQW9CLGtGQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlFQUFZO0FBQ3BCLFlBQVksZ0ZBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1RUFBVSxJQUFJLHdFQUFXO0FBQzFDO0FBQ0EsdUJBQXVCLDJFQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLDRCQUE0Qix3RUFBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxXQUFXLFFBQVEsa0JBQWtCO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxxQkFBcUIsMkVBQWM7QUFDbkMsZ0JBQWdCLHlFQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVCxZQUFZLG1GQUFzQixNQUFNLDJFQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwRUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyRUFBYyxJQUFJLG9GQUF1QixJQUFJLHdFQUFXO0FBQ2pFO0FBQ0EsWUFBWSwyRUFBYyxJQUFJLG9GQUF1QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGtCQUFrQixHQUFHLG1CQUFtQixpQ0FBaUMsa0JBQWtCO0FBQ2pKO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3RUFBVyxJQUFJLDBFQUFhO0FBQzdDLG9EQUFvRCxrQkFBa0IsR0FBRyxtQkFBbUI7QUFDNUY7QUFDQSxnQkFBZ0IseUVBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdGQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUVBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFZO0FBQzVCO0FBQ0E7QUFDQSxnQkFBZ0IsZ0ZBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdFQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxnQkFBZ0IsdUVBQVU7QUFDMUI7QUFDQSxvQkFBb0Isb0ZBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvRkFBdUI7QUFDNUMsb0JBQW9CLDRFQUFlO0FBQ25DLG9CQUFvQixnRkFBbUI7QUFDdkM7QUFDQSxrQ0FBa0MsaVBBQXlCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0VBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyRUFBYyxJQUFJLG9GQUF1QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyRkFBOEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0ZBQXVCO0FBQ3ZDO0FBQ0E7QUFDQSx3QkFBd0IsNEVBQWU7QUFDdkMsd0NBQXdDLHVFQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlGQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvRkFBdUI7QUFDM0Msc0JBQXNCLHVFQUFVLElBQUksNEVBQWU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0VBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvRkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUVBQVUsS0FBSyxvRkFBdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsZ0JBQWdCLHFGQUF3QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCwwRUFBYSx3QkFBd0IsY0FBYztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkVBQWM7QUFDdkMsWUFBWSwrRUFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2RUFBZ0I7QUFDNUI7QUFDQTtBQUNBLFlBQVksMkVBQWMsSUFBSSx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBLFlBQVksK0VBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUVBQVk7QUFDcEI7QUFDQTtBQUNBLFFBQVEsK0VBQWtCO0FBQzFCO0FBQ0E7QUFDQSxRQUFRLGdGQUFtQjtBQUMzQjtBQUNBO0FBQ0EsUUFBUSwwRUFBYTtBQUNyQjtBQUNBO0FBQ0EsUUFBUSw0RUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZ0JBQWdCLG9GQUF1QjtBQUN2QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxnQkFBZ0IsdUZBQTBCO0FBQzFDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQix1RkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQVcsSUFBSSx1RUFBVSxLQUFLLDJFQUFjO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0RUFBZTtBQUMzQztBQUNBLFlBQVksdUVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrQkFBK0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFGQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlFQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUJBQXVCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQSxRQUFRLDBFQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsa0JBQWtCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0ZBQXVCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRkFBdUIsSUFBSSw0RUFBZTtBQUNsRCxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFZO0FBQzVCO0FBQ0E7QUFDQSxnQkFBZ0IsK0VBQWtCO0FBQ2xDO0FBQ0E7QUFDQSxnQkFBZ0IsMEVBQWE7QUFDN0I7QUFDQTtBQUNBLGdCQUFnQixnRkFBbUI7QUFDbkM7QUFDQTtBQUNBLGdCQUFnQiw0RUFBZTtBQUMvQjtBQUNBO0FBQ0EsNEJBQTRCLG1GQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1RkFBMEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxvREFBb0QsY0FBYztBQUNsRTtBQUNBO0FBQ0Esa0NBQWtDLG9GQUF1QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0ZBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0VBQWtCO0FBQ2xDO0FBQ0E7QUFDQSxnQkFBZ0IscUZBQXdCO0FBQ3hDO0FBQ0E7QUFDQSxnQkFBZ0IsdUZBQTBCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJGQUE4QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsUUFBUSx3RkFBMkIsS0FBSyxnRkFBbUIsSUFBSSxvRkFBdUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwRUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0ZBQXVCO0FBQ3RDO0FBQ0E7QUFDQSxlQUFlLG9GQUF1QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkZBQThCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxRkFBd0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZGQUFnQztBQUN4QztBQUNBLFFBQVEsMkZBQThCO0FBQ3RDO0FBQ0EsUUFBUSx5RkFBNEI7QUFDcEM7QUFDQSxRQUFRLDJGQUE4QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTyxHQUFHLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTyxHQUFHLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsYUFBYSxHQUFHLFFBQVE7QUFDckY7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQixHQUFHLFFBQVE7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxlQUFlLEdBQUcsT0FBTztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UscUJBQXFCLEdBQUcscUJBQXFCLEtBQUssTUFBTTtBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU8sR0FBRyxPQUFPLEdBQUcsTUFBTSxHQUFHLE1BQU07QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGFBQWEsR0FBRyxRQUFRO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGFBQWEsR0FBRyxRQUFRLEdBQUcsU0FBUztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUFXO0FBQ25CO0FBQ0E7QUFDQSxRQUFRLHlFQUFZLElBQUksMkVBQWM7QUFDdEM7QUFDQTtBQUNBLFFBQVEsK0VBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0RUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CLG1CQUFtQixnQkFBZ0IsaUJBQWlCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBVztBQUNuQiw0REFBNEQsa0JBQWtCLHFCQUFxQixtQkFBbUI7QUFDdEg7QUFDQTtBQUNBLG9CQUFvQix1RkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNLQUtQLEdBQUcsRUFBRSxTQUFTLFdBQVcsdUZBQTBCLGlEQUFpRCxDQUFDLENBQUM7QUFDMUcsYUFBYSx1RkFBMEI7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2RUFBZ0I7QUFDNUIsOEJBQThCO0FBQzlCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnRkFBbUIsSUFBSSw0RUFBZTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDQUF5QyxtRkFBc0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3RTtBQUNzd0I7Ozs7Ozs7Ozs7O0FDMXlHOTBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1plO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1R3RDtBQUN4RCxpRUFBZSw4REFBYTs7Ozs7Ozs7Ozs7Ozs7OztBQ0Q1QjtBQUNPO0FBQ1A7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xRTtBQUNKO0FBQ1E7QUFDZDtBQUNRO0FBQ047QUFDSDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5Qix3RUFBYyxpQkFBaUI7O0FBRXhELDZFQUE2RTs7QUFFN0U7QUFDQTtBQUNBLGFBQWEscUVBQWU7QUFDNUIsTUFBTTs7O0FBR047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07OztBQUdOLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsMkVBQWlCLFFBQVE7O0FBRS9DLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtRUFBaUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLG9FQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBLHdCQUF3Qix3REFBVztBQUNuQztBQUNBLElBQUkseURBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyREFBWTtBQUNaLHNFQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsV0FBVztBQUNqQztBQUNBLElBQUksMkRBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3REFBVztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFZO0FBQ3BCLE1BQU07QUFDTiwwQkFBMEIsdUJBQXVCO0FBQ2pEO0FBQ0EsUUFBUSx3REFBVTtBQUNsQjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQVc7QUFDaEM7QUFDQTtBQUNBLElBQUksMERBQVk7QUFDaEIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxnRUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvIGxhenkgXlxcLlxcLy4qXFwuZW50cnlcXC5qcy4qJCBpbmNsdWRlOiBcXC5lbnRyeVxcLmpzJCBleGNsdWRlOiBcXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJCBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3djLWRhdGVwaWNrZXIvZGlzdC90aGVtZXMvZGFyay5jc3M/ZGE1NSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzM1OTciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3djLWRhdGVwaWNrZXIvZGlzdC9jb21wb25lbnRzL3djLWRhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xEdWVEYXRlQ2hhbmdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sTGlzdENoYW5nZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbFByaW9yaXR5Q2hhbmdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sU3RhdHVzQ2hhbmdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sVGFza0NoYW5nZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUxpc3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZpbHRlckJ5RGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmlsdGVyQnlMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9maWx0ZXJCeVByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9maWx0ZXJCeVN0YXR1cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlRmlsdGVyT3JkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZU5ld0xpc3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVOZXdUYXNrRm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlU2F2ZUxvZ2ljLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbnRlcmFjdERvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc29ydEJ5VGl0bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9DcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFZpcnR1YWwgRE9NIHBhdGNoaW5nIGFsZ29yaXRobSBiYXNlZCBvbiBTbmFiYmRvbSBieVxuICogU2ltb24gRnJpaXMgVmluZHVtIChAcGFsZGVwaW5kKVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc25hYmJkb20vc25hYmJkb20vYmxvYi9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIE1vZGlmaWVkIGZvciBTdGVuY2lsJ3MgcmVuZGVyZXIgYW5kIHNsb3QgcHJvamVjdGlvblxuICovXG5sZXQgc2NvcGVJZDtcbmxldCBjb250ZW50UmVmO1xubGV0IGhvc3RUYWdOYW1lO1xubGV0IGN1c3RvbUVycm9yO1xubGV0IGkgPSAwO1xubGV0IHVzZU5hdGl2ZVNoYWRvd0RvbSA9IGZhbHNlO1xubGV0IGNoZWNrU2xvdEZhbGxiYWNrVmlzaWJpbGl0eSA9IGZhbHNlO1xubGV0IGNoZWNrU2xvdFJlbG9jYXRlID0gZmFsc2U7XG5sZXQgaXNTdmdNb2RlID0gZmFsc2U7XG5sZXQgcmVuZGVyaW5nUmVmID0gbnVsbDtcbmxldCBxdWV1ZUNvbmdlc3Rpb24gPSAwO1xubGV0IHF1ZXVlUGVuZGluZyA9IGZhbHNlO1xuLypcbiBTdGVuY2lsIENsaWVudCBQbGF0Zm9ybSB2Mi4yMi4zIHwgTUlUIExpY2Vuc2VkIHwgaHR0cHM6Ly9zdGVuY2lsanMuY29tXG4gKi9cbmltcG9ydCB7IEJVSUxELCBOQU1FU1BBQ0UgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhJztcbmNvbnN0IEJ1aWxkID0ge1xuICAgIGlzRGV2OiBCVUlMRC5pc0RldiA/IHRydWUgOiBmYWxzZSxcbiAgICBpc0Jyb3dzZXI6IHRydWUsXG4gICAgaXNTZXJ2ZXI6IGZhbHNlLFxuICAgIGlzVGVzdGluZzogQlVJTEQuaXNUZXN0aW5nID8gdHJ1ZSA6IGZhbHNlLFxufTtcbmNvbnN0IENvbnRleHQgPSB7fTtcbmNvbnN0IGdldEFzc2V0UGF0aCA9IChwYXRoKSA9PiB7XG4gICAgY29uc3QgYXNzZXRVcmwgPSBuZXcgVVJMKHBhdGgsIHBsdC4kcmVzb3VyY2VzVXJsJCk7XG4gICAgcmV0dXJuIGFzc2V0VXJsLm9yaWdpbiAhPT0gd2luLmxvY2F0aW9uLm9yaWdpbiA/IGFzc2V0VXJsLmhyZWYgOiBhc3NldFVybC5wYXRobmFtZTtcbn07XG5jb25zdCBzZXRBc3NldFBhdGggPSAocGF0aCkgPT4gKHBsdC4kcmVzb3VyY2VzVXJsJCA9IHBhdGgpO1xuY29uc3QgY3JlYXRlVGltZSA9IChmbk5hbWUsIHRhZ05hbWUgPSAnJykgPT4ge1xuICAgIGlmIChCVUlMRC5wcm9maWxlICYmIHBlcmZvcm1hbmNlLm1hcmspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYHN0OiR7Zm5OYW1lfToke3RhZ05hbWV9OiR7aSsrfWA7XG4gICAgICAgIC8vIFN0YXJ0XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoa2V5KTtcbiAgICAgICAgLy8gRW5kXG4gICAgICAgIHJldHVybiAoKSA9PiBwZXJmb3JtYW5jZS5tZWFzdXJlKGBbU3RlbmNpbF0gJHtmbk5hbWV9KCkgPCR7dGFnTmFtZX0+YCwga2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IHVuaXF1ZVRpbWUgPSAoa2V5LCBtZWFzdXJlVGV4dCkgPT4ge1xuICAgIGlmIChCVUlMRC5wcm9maWxlICYmIHBlcmZvcm1hbmNlLm1hcmspIHtcbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUoa2V5LCAnbWFyaycpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyayhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZShtZWFzdXJlVGV4dCwgJ21lYXN1cmUnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tZWFzdXJlKG1lYXN1cmVUZXh0LCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuY29uc3QgaW5zcGVjdCA9IChyZWYpID0+IHtcbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihyZWYpO1xuICAgIGlmICghaG9zdFJlZikge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBmbGFncyA9IGhvc3RSZWYuJGZsYWdzJDtcbiAgICBjb25zdCBob3N0RWxlbWVudCA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJDb3VudDogaG9zdFJlZi4kcmVuZGVyQ291bnQkLFxuICAgICAgICBmbGFnczoge1xuICAgICAgICAgICAgaGFzUmVuZGVyZWQ6ICEhKGZsYWdzICYgMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovKSxcbiAgICAgICAgICAgIGhhc0Nvbm5lY3RlZDogISEoZmxhZ3MgJiAxIC8qIEhPU1RfRkxBR1MuaGFzQ29ubmVjdGVkICovKSxcbiAgICAgICAgICAgIGlzV2FpdGluZ0ZvckNoaWxkcmVuOiAhIShmbGFncyAmIDQgLyogSE9TVF9GTEFHUy5pc1dhaXRpbmdGb3JDaGlsZHJlbiAqLyksXG4gICAgICAgICAgICBpc0NvbnN0cnVjdGluZ0luc3RhbmNlOiAhIShmbGFncyAmIDggLyogSE9TVF9GTEFHUy5pc0NvbnN0cnVjdGluZ0luc3RhbmNlICovKSxcbiAgICAgICAgICAgIGlzUXVldWVkRm9yVXBkYXRlOiAhIShmbGFncyAmIDE2IC8qIEhPU1RfRkxBR1MuaXNRdWV1ZWRGb3JVcGRhdGUgKi8pLFxuICAgICAgICAgICAgaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQ6ICEhKGZsYWdzICYgMzIgLyogSE9TVF9GTEFHUy5oYXNJbml0aWFsaXplZENvbXBvbmVudCAqLyksXG4gICAgICAgICAgICBoYXNMb2FkZWRDb21wb25lbnQ6ICEhKGZsYWdzICYgNjQgLyogSE9TVF9GTEFHUy5oYXNMb2FkZWRDb21wb25lbnQgKi8pLFxuICAgICAgICAgICAgaXNXYXRjaFJlYWR5OiAhIShmbGFncyAmIDEyOCAvKiBIT1NUX0ZMQUdTLmlzV2F0Y2hSZWFkeSAqLyksXG4gICAgICAgICAgICBpc0xpc3RlblJlYWR5OiAhIShmbGFncyAmIDI1NiAvKiBIT1NUX0ZMQUdTLmlzTGlzdGVuUmVhZHkgKi8pLFxuICAgICAgICAgICAgbmVlZHNSZXJlbmRlcjogISEoZmxhZ3MgJiA1MTIgLyogSE9TVF9GTEFHUy5uZWVkc1JlcmVuZGVyICovKSxcbiAgICAgICAgfSxcbiAgICAgICAgaW5zdGFuY2VWYWx1ZXM6IGhvc3RSZWYuJGluc3RhbmNlVmFsdWVzJCxcbiAgICAgICAgYW5jZXN0b3JDb21wb25lbnQ6IGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JCxcbiAgICAgICAgaG9zdEVsZW1lbnQsXG4gICAgICAgIGxhenlJbnN0YW5jZTogaG9zdFJlZi4kbGF6eUluc3RhbmNlJCxcbiAgICAgICAgdm5vZGU6IGhvc3RSZWYuJHZub2RlJCxcbiAgICAgICAgbW9kZU5hbWU6IGhvc3RSZWYuJG1vZGVOYW1lJCxcbiAgICAgICAgb25SZWFkeVByb21pc2U6IGhvc3RSZWYuJG9uUmVhZHlQcm9taXNlJCxcbiAgICAgICAgb25SZWFkeVJlc29sdmU6IGhvc3RSZWYuJG9uUmVhZHlSZXNvbHZlJCxcbiAgICAgICAgb25JbnN0YW5jZVByb21pc2U6IGhvc3RSZWYuJG9uSW5zdGFuY2VQcm9taXNlJCxcbiAgICAgICAgb25JbnN0YW5jZVJlc29sdmU6IGhvc3RSZWYuJG9uSW5zdGFuY2VSZXNvbHZlJCxcbiAgICAgICAgb25SZW5kZXJSZXNvbHZlOiBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkLFxuICAgICAgICBxdWV1ZWRMaXN0ZW5lcnM6IGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQsXG4gICAgICAgIHJtTGlzdGVuZXJzOiBob3N0UmVmLiRybUxpc3RlbmVycyQsXG4gICAgICAgIFsncy1pZCddOiBob3N0RWxlbWVudFsncy1pZCddLFxuICAgICAgICBbJ3MtY3InXTogaG9zdEVsZW1lbnRbJ3MtY3InXSxcbiAgICAgICAgWydzLWxyJ106IGhvc3RFbGVtZW50WydzLWxyJ10sXG4gICAgICAgIFsncy1wJ106IGhvc3RFbGVtZW50WydzLXAnXSxcbiAgICAgICAgWydzLXJjJ106IGhvc3RFbGVtZW50WydzLXJjJ10sXG4gICAgICAgIFsncy1zYyddOiBob3N0RWxlbWVudFsncy1zYyddLFxuICAgIH07XG59O1xuY29uc3QgaW5zdGFsbERldlRvb2xzID0gKCkgPT4ge1xuICAgIGlmIChCVUlMRC5kZXZUb29scykge1xuICAgICAgICBjb25zdCBzdGVuY2lsID0gKHdpbi5zdGVuY2lsID0gd2luLnN0ZW5jaWwgfHwge30pO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEluc3BlY3QgPSBzdGVuY2lsLmluc3BlY3Q7XG4gICAgICAgIHN0ZW5jaWwuaW5zcGVjdCA9IChyZWYpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBpbnNwZWN0KHJlZik7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCAmJiB0eXBlb2Ygb3JpZ2luYWxJbnNwZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gb3JpZ2luYWxJbnNwZWN0KHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgIH1cbn07XG5jb25zdCBDT05URU5UX1JFRl9JRCA9ICdyJztcbmNvbnN0IE9SR19MT0NBVElPTl9JRCA9ICdvJztcbmNvbnN0IFNMT1RfTk9ERV9JRCA9ICdzJztcbmNvbnN0IFRFWFRfTk9ERV9JRCA9ICd0JztcbmNvbnN0IEhZRFJBVEVfSUQgPSAncy1pZCc7XG5jb25zdCBIWURSQVRFRF9TVFlMRV9JRCA9ICdzdHktaWQnO1xuY29uc3QgSFlEUkFURV9DSElMRF9JRCA9ICdjLWlkJztcbmNvbnN0IEhZRFJBVEVEX0NTUyA9ICd7dmlzaWJpbGl0eTpoaWRkZW59Lmh5ZHJhdGVke3Zpc2liaWxpdHk6aW5oZXJpdH0nO1xuY29uc3QgWExJTktfTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG4vKipcbiAqIERlZmF1bHQgc3R5bGUgbW9kZSBpZFxuICovXG4vKipcbiAqIFJldXNhYmxlIGVtcHR5IG9iai9hcnJheVxuICogRG9uJ3QgYWRkIHZhbHVlcyB0byB0aGVzZSEhXG4gKi9cbmNvbnN0IEVNUFRZX09CSiA9IHt9O1xuLyoqXG4gKiBOYW1lc3BhY2VzXG4gKi9cbmNvbnN0IFNWR19OUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5jb25zdCBIVE1MX05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuY29uc3QgaXNEZWYgPSAodikgPT4gdiAhPSBudWxsO1xuY29uc3QgaXNDb21wbGV4VHlwZSA9IChvKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9qc3BlcmYuY29tL3R5cGVvZi1mbi1vYmplY3QvNVxuICAgIG8gPSB0eXBlb2YgbztcbiAgICByZXR1cm4gbyA9PT0gJ29iamVjdCcgfHwgbyA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vKipcbiAqIEhlbHBlciBtZXRob2QgZm9yIHF1ZXJ5aW5nIGEgYG1ldGFgIHRhZyB0aGF0IGNvbnRhaW5zIGEgbm9uY2UgdmFsdWVcbiAqIG91dCBvZiBhIERPTSdzIGhlYWQuXG4gKlxuICogQHBhcmFtIGRvYyBUaGUgRE9NIGNvbnRhaW5pbmcgdGhlIGBoZWFkYCB0byBxdWVyeSBhZ2FpbnN0XG4gKiBAcmV0dXJucyBUaGUgY29udGVudCBvZiB0aGUgbWV0YSB0YWcgcmVwcmVzZW50aW5nIHRoZSBub25jZSB2YWx1ZSwgb3IgYHVuZGVmaW5lZGAgaWYgbm8gdGFnXG4gKiBleGlzdHMgb3IgdGhlIHRhZyBoYXMgbm8gY29udGVudC5cbiAqL1xuZnVuY3Rpb24gcXVlcnlOb25jZU1ldGFUYWdDb250ZW50KGRvYykge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHJldHVybiAoX2MgPSAoX2IgPSAoX2EgPSBkb2MuaGVhZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcC1ub25jZVwiXScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IHVuZGVmaW5lZDtcbn1cbi8qKlxuICogUHJvZHVjdGlvbiBoKCkgZnVuY3Rpb24gYmFzZWQgb24gUHJlYWN0IGJ5XG4gKiBKYXNvbiBNaWxsZXIgKEBkZXZlbG9waXQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIGNvbXBpbGVyIGFuZCB2ZG9tXG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBoKG5vZGVOYW1lOiBzdHJpbmcgfCBkLkZ1bmN0aW9uYWxDb21wb25lbnQsIHZub2RlRGF0YTogZC5Qcm9wc1R5cGUsIGNoaWxkPzogZC5DaGlsZFR5cGUpOiBkLlZOb2RlO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGgobm9kZU5hbWU6IHN0cmluZyB8IGQuRnVuY3Rpb25hbENvbXBvbmVudCwgdm5vZGVEYXRhOiBkLlByb3BzVHlwZSwgLi4uY2hpbGRyZW46IGQuQ2hpbGRUeXBlW10pOiBkLlZOb2RlO1xuY29uc3QgaCA9IChub2RlTmFtZSwgdm5vZGVEYXRhLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGxldCBjaGlsZCA9IG51bGw7XG4gICAgbGV0IGtleSA9IG51bGw7XG4gICAgbGV0IHNsb3ROYW1lID0gbnVsbDtcbiAgICBsZXQgc2ltcGxlID0gZmFsc2U7XG4gICAgbGV0IGxhc3RTaW1wbGUgPSBmYWxzZTtcbiAgICBjb25zdCB2Tm9kZUNoaWxkcmVuID0gW107XG4gICAgY29uc3Qgd2FsayA9IChjKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2hpbGQgPSBjW2ldO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgd2FsayhjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZCAhPSBudWxsICYmIHR5cGVvZiBjaGlsZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgaWYgKChzaW1wbGUgPSB0eXBlb2Ygbm9kZU5hbWUgIT09ICdmdW5jdGlvbicgJiYgIWlzQ29tcGxleFR5cGUoY2hpbGQpKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IFN0cmluZyhjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKEJVSUxELmlzRGV2ICYmIHR5cGVvZiBub2RlTmFtZSAhPT0gJ2Z1bmN0aW9uJyAmJiBjaGlsZC4kZmxhZ3MkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZURldkVycm9yKGB2Tm9kZSBwYXNzZWQgYXMgY2hpbGRyZW4gaGFzIHVuZXhwZWN0ZWQgdHlwZS5cbk1ha2Ugc3VyZSBpdCdzIHVzaW5nIHRoZSBjb3JyZWN0IGgoKSBmdW5jdGlvbi5cbkVtcHR5IG9iamVjdHMgY2FuIGFsc28gYmUgdGhlIGNhdXNlLCBsb29rIGZvciBKU1ggY29tbWVudHMgdGhhdCBiZWNhbWUgb2JqZWN0cy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNpbXBsZSAmJiBsYXN0U2ltcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBwcmV2aW91cyBjaGlsZCB3YXMgc2ltcGxlIChzdHJpbmcpLCB3ZSBtZXJnZSBib3RoXG4gICAgICAgICAgICAgICAgICAgIHZOb2RlQ2hpbGRyZW5bdk5vZGVDaGlsZHJlbi5sZW5ndGggLSAxXS4kdGV4dCQgKz0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBBcHBlbmQgYSBuZXcgdk5vZGUsIGlmIGl0J3MgdGV4dCwgd2UgY3JlYXRlIGEgdGV4dCB2Tm9kZVxuICAgICAgICAgICAgICAgICAgICB2Tm9kZUNoaWxkcmVuLnB1c2goc2ltcGxlID8gbmV3Vk5vZGUobnVsbCwgY2hpbGQpIDogY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0U2ltcGxlID0gc2ltcGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB3YWxrKGNoaWxkcmVuKTtcbiAgICBpZiAodm5vZGVEYXRhKSB7XG4gICAgICAgIGlmIChCVUlMRC5pc0RldiAmJiBub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgdmFsaWRhdGVJbnB1dFByb3BlcnRpZXModm5vZGVEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBub3JtYWxpemUgY2xhc3MgLyBjbGFzc25hbWUgYXR0cmlidXRlc1xuICAgICAgICBpZiAoQlVJTEQudmRvbUtleSAmJiB2bm9kZURhdGEua2V5KSB7XG4gICAgICAgICAgICBrZXkgPSB2bm9kZURhdGEua2V5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiB2bm9kZURhdGEubmFtZSkge1xuICAgICAgICAgICAgc2xvdE5hbWUgPSB2bm9kZURhdGEubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQudmRvbUNsYXNzKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc0RhdGEgPSB2bm9kZURhdGEuY2xhc3NOYW1lIHx8IHZub2RlRGF0YS5jbGFzcztcbiAgICAgICAgICAgIGlmIChjbGFzc0RhdGEpIHtcbiAgICAgICAgICAgICAgICB2bm9kZURhdGEuY2xhc3MgPVxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY2xhc3NEYXRhICE9PSAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBjbGFzc0RhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmtleXMoY2xhc3NEYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGspID0+IGNsYXNzRGF0YVtrXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChCVUlMRC5pc0RldiAmJiB2Tm9kZUNoaWxkcmVuLnNvbWUoaXNIb3N0KSkge1xuICAgICAgICBjb25zb2xlRGV2RXJyb3IoYFRoZSA8SG9zdD4gbXVzdCBiZSB0aGUgc2luZ2xlIHJvb3QgY29tcG9uZW50LiBNYWtlIHN1cmU6XG4tIFlvdSBhcmUgTk9UIHVzaW5nIGhvc3REYXRhKCkgYW5kIDxIb3N0PiBpbiB0aGUgc2FtZSBjb21wb25lbnQuXG4tIDxIb3N0PiBpcyB1c2VkIG9uY2UsIGFuZCBpdCdzIHRoZSBzaW5nbGUgcm9vdCBjb21wb25lbnQgb2YgdGhlIHJlbmRlcigpIGZ1bmN0aW9uLmApO1xuICAgIH1cbiAgICBpZiAoQlVJTEQudmRvbUZ1bmN0aW9uYWwgJiYgdHlwZW9mIG5vZGVOYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vZGVOYW1lIGlzIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbiAgICAgICAgcmV0dXJuIG5vZGVOYW1lKHZub2RlRGF0YSA9PT0gbnVsbCA/IHt9IDogdm5vZGVEYXRhLCB2Tm9kZUNoaWxkcmVuLCB2ZG9tRm5VdGlscyk7XG4gICAgfVxuICAgIGNvbnN0IHZub2RlID0gbmV3Vk5vZGUobm9kZU5hbWUsIG51bGwpO1xuICAgIHZub2RlLiRhdHRycyQgPSB2bm9kZURhdGE7XG4gICAgaWYgKHZOb2RlQ2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB2bm9kZS4kY2hpbGRyZW4kID0gdk5vZGVDaGlsZHJlbjtcbiAgICB9XG4gICAgaWYgKEJVSUxELnZkb21LZXkpIHtcbiAgICAgICAgdm5vZGUuJGtleSQgPSBrZXk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICB2bm9kZS4kbmFtZSQgPSBzbG90TmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlO1xufTtcbi8qKlxuICogQSB1dGlsaXR5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIHZpcnR1YWwgRE9NIG5vZGUgZnJvbSBhIHRhZyBhbmQgc29tZVxuICogcG9zc2libGUgdGV4dCBjb250ZW50LlxuICpcbiAqIEBwYXJhbSB0YWcgdGhlIHRhZyBmb3IgdGhpcyBlbGVtZW50XG4gKiBAcGFyYW0gdGV4dCBwb3NzaWJsZSB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBub2RlXG4gKiBAcmV0dXJucyBhIG5ld2x5LW1pbnRlZCB2aXJ0dWFsIERPTSBub2RlXG4gKi9cbmNvbnN0IG5ld1ZOb2RlID0gKHRhZywgdGV4dCkgPT4ge1xuICAgIGNvbnN0IHZub2RlID0ge1xuICAgICAgICAkZmxhZ3MkOiAwLFxuICAgICAgICAkdGFnJDogdGFnLFxuICAgICAgICAkdGV4dCQ6IHRleHQsXG4gICAgICAgICRlbG0kOiBudWxsLFxuICAgICAgICAkY2hpbGRyZW4kOiBudWxsLFxuICAgIH07XG4gICAgaWYgKEJVSUxELnZkb21BdHRyaWJ1dGUpIHtcbiAgICAgICAgdm5vZGUuJGF0dHJzJCA9IG51bGw7XG4gICAgfVxuICAgIGlmIChCVUlMRC52ZG9tS2V5KSB7XG4gICAgICAgIHZub2RlLiRrZXkkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uKSB7XG4gICAgICAgIHZub2RlLiRuYW1lJCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB2bm9kZTtcbn07XG5jb25zdCBIb3N0ID0ge307XG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBnaXZlbiBub2RlIGlzIGEgSG9zdCBub2RlIG9yIG5vdFxuICpcbiAqIEBwYXJhbSBub2RlIHRoZSB2aXJ0dWFsIERPTSBub2RlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB3aGV0aGVyIGl0J3MgYSBIb3N0IG5vZGUgb3Igbm90XG4gKi9cbmNvbnN0IGlzSG9zdCA9IChub2RlKSA9PiBub2RlICYmIG5vZGUuJHRhZyQgPT09IEhvc3Q7XG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHtAbGluayBkLkZ1bmN0aW9uYWxVdGlsaXRpZXN9IGZvciBTdGVuY2lsJ3MgVkRvbS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlc2UgZnVuY3Rpb25zIGNvbnZlcnQgZnJvbSB7QGxpbmsgZC5WTm9kZX0gdG9cbiAqIHtAbGluayBkLkNoaWxkTm9kZX0gdG8gZ2l2ZSBmdW5jdGlvbmFsIGNvbXBvbmVudCBkZXZlbG9wZXJzIGEgZnJpZW5kbHlcbiAqIGludGVyZmFjZS5cbiAqL1xuY29uc3QgdmRvbUZuVXRpbHMgPSB7XG4gICAgZm9yRWFjaDogKGNoaWxkcmVuLCBjYikgPT4gY2hpbGRyZW4ubWFwKGNvbnZlcnRUb1B1YmxpYykuZm9yRWFjaChjYiksXG4gICAgbWFwOiAoY2hpbGRyZW4sIGNiKSA9PiBjaGlsZHJlbi5tYXAoY29udmVydFRvUHVibGljKS5tYXAoY2IpLm1hcChjb252ZXJ0VG9Qcml2YXRlKSxcbn07XG4vKipcbiAqIENvbnZlcnQgYSB7QGxpbmsgZC5WTm9kZX0gdG8gYSB7QGxpbmsgZC5DaGlsZE5vZGV9IGluIG9yZGVyIHRvIHByZXNlbnQgYVxuICogZnJpZW5kbGllciBwdWJsaWMgaW50ZXJmYWNlIChoZW5jZSwgJ2NvbnZlcnRUb1B1YmxpYycpLlxuICpcbiAqIEBwYXJhbSBub2RlIHRoZSB2aXJ0dWFsIERPTSBub2RlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIGEgY29udmVydGVkIGNoaWxkIG5vZGVcbiAqL1xuY29uc3QgY29udmVydFRvUHVibGljID0gKG5vZGUpID0+ICh7XG4gICAgdmF0dHJzOiBub2RlLiRhdHRycyQsXG4gICAgdmNoaWxkcmVuOiBub2RlLiRjaGlsZHJlbiQsXG4gICAgdmtleTogbm9kZS4ka2V5JCxcbiAgICB2bmFtZTogbm9kZS4kbmFtZSQsXG4gICAgdnRhZzogbm9kZS4kdGFnJCxcbiAgICB2dGV4dDogbm9kZS4kdGV4dCQsXG59KTtcbi8qKlxuICogQ29udmVydCBhIHtAbGluayBkLkNoaWxkTm9kZX0gYmFjayB0byBhbiBlcXVpdmFsZW50IHtAbGluayBkLlZOb2RlfSBpblxuICogb3JkZXIgdG8gdXNlIHRoZSByZXN1bHRpbmcgb2JqZWN0IGluIHRoZSB2aXJ0dWFsIERPTS4gVGhlIGluaXRpYWwgb2JqZWN0IHdhc1xuICogbGlrZWx5IGNyZWF0ZWQgYXMgcGFydCBvZiBwcmVzZW50aW5nIGEgcHVibGljIEFQSSwgc28gY29udmVydGluZyBpdCBiYWNrXG4gKiBpbnZvbHZlZCBtYWtpbmcgaXQgJ3ByaXZhdGUnIGFnYWluIChoZW5jZSwgYGNvbnZlcnRUb1ByaXZhdGVgKS5cbiAqXG4gKiBAcGFyYW0gbm9kZSB0aGUgY2hpbGQgbm9kZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyBhIGNvbnZlcnRlZCB2aXJ0dWFsIERPTSBub2RlXG4gKi9cbmNvbnN0IGNvbnZlcnRUb1ByaXZhdGUgPSAobm9kZSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygbm9kZS52dGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHZub2RlRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIG5vZGUudmF0dHJzKTtcbiAgICAgICAgaWYgKG5vZGUudmtleSkge1xuICAgICAgICAgICAgdm5vZGVEYXRhLmtleSA9IG5vZGUudmtleTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS52bmFtZSkge1xuICAgICAgICAgICAgdm5vZGVEYXRhLm5hbWUgPSBub2RlLnZuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoKG5vZGUudnRhZywgdm5vZGVEYXRhLCAuLi4obm9kZS52Y2hpbGRyZW4gfHwgW10pKTtcbiAgICB9XG4gICAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShub2RlLnZ0YWcsIG5vZGUudnRleHQpO1xuICAgIHZub2RlLiRhdHRycyQgPSBub2RlLnZhdHRycztcbiAgICB2bm9kZS4kY2hpbGRyZW4kID0gbm9kZS52Y2hpbGRyZW47XG4gICAgdm5vZGUuJGtleSQgPSBub2RlLnZrZXk7XG4gICAgdm5vZGUuJG5hbWUkID0gbm9kZS52bmFtZTtcbiAgICByZXR1cm4gdm5vZGU7XG59O1xuLyoqXG4gKiBWYWxpZGF0ZXMgdGhlIG9yZGVyaW5nIG9mIGF0dHJpYnV0ZXMgb24gYW4gaW5wdXQgZWxlbWVudFxuICpcbiAqIEBwYXJhbSBpbnB1dEVsbSB0aGUgZWxlbWVudCB0byB2YWxpZGF0ZVxuICovXG5jb25zdCB2YWxpZGF0ZUlucHV0UHJvcGVydGllcyA9IChpbnB1dEVsbSkgPT4ge1xuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoaW5wdXRFbG0pO1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMuaW5kZXhPZigndmFsdWUnKTtcbiAgICBpZiAodmFsdWUgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdHlwZUluZGV4ID0gcHJvcHMuaW5kZXhPZigndHlwZScpO1xuICAgIGNvbnN0IG1pbkluZGV4ID0gcHJvcHMuaW5kZXhPZignbWluJyk7XG4gICAgY29uc3QgbWF4SW5kZXggPSBwcm9wcy5pbmRleE9mKCdtYXgnKTtcbiAgICBjb25zdCBzdGVwSW5kZXggPSBwcm9wcy5pbmRleE9mKCdzdGVwJyk7XG4gICAgaWYgKHZhbHVlIDwgdHlwZUluZGV4IHx8IHZhbHVlIDwgbWluSW5kZXggfHwgdmFsdWUgPCBtYXhJbmRleCB8fCB2YWx1ZSA8IHN0ZXBJbmRleCkge1xuICAgICAgICBjb25zb2xlRGV2V2FybihgVGhlIFwidmFsdWVcIiBwcm9wIG9mIDxpbnB1dD4gc2hvdWxkIGJlIHNldCBhZnRlciBcIm1pblwiLCBcIm1heFwiLCBcInR5cGVcIiBhbmQgXCJzdGVwXCJgKTtcbiAgICB9XG59O1xuY29uc3QgaW5pdGlhbGl6ZUNsaWVudEh5ZHJhdGUgPSAoaG9zdEVsbSwgdGFnTmFtZSwgaG9zdElkLCBob3N0UmVmKSA9PiB7XG4gICAgY29uc3QgZW5kSHlkcmF0ZSA9IGNyZWF0ZVRpbWUoJ2h5ZHJhdGVDbGllbnQnLCB0YWdOYW1lKTtcbiAgICBjb25zdCBzaGFkb3dSb290ID0gaG9zdEVsbS5zaGFkb3dSb290O1xuICAgIGNvbnN0IGNoaWxkUmVuZGVyTm9kZXMgPSBbXTtcbiAgICBjb25zdCBzbG90Tm9kZXMgPSBbXTtcbiAgICBjb25zdCBzaGFkb3dSb290Tm9kZXMgPSBCVUlMRC5zaGFkb3dEb20gJiYgc2hhZG93Um9vdCA/IFtdIDogbnVsbDtcbiAgICBjb25zdCB2bm9kZSA9IChob3N0UmVmLiR2bm9kZSQgPSBuZXdWTm9kZSh0YWdOYW1lLCBudWxsKSk7XG4gICAgaWYgKCFwbHQuJG9yZ0xvY05vZGVzJCkge1xuICAgICAgICBpbml0aWFsaXplRG9jdW1lbnRIeWRyYXRlKGRvYy5ib2R5LCAocGx0LiRvcmdMb2NOb2RlcyQgPSBuZXcgTWFwKCkpKTtcbiAgICB9XG4gICAgaG9zdEVsbVtIWURSQVRFX0lEXSA9IGhvc3RJZDtcbiAgICBob3N0RWxtLnJlbW92ZUF0dHJpYnV0ZShIWURSQVRFX0lEKTtcbiAgICBjbGllbnRIeWRyYXRlKHZub2RlLCBjaGlsZFJlbmRlck5vZGVzLCBzbG90Tm9kZXMsIHNoYWRvd1Jvb3ROb2RlcywgaG9zdEVsbSwgaG9zdEVsbSwgaG9zdElkKTtcbiAgICBjaGlsZFJlbmRlck5vZGVzLm1hcCgoYykgPT4ge1xuICAgICAgICBjb25zdCBvcmdMb2NhdGlvbklkID0gYy4kaG9zdElkJCArICcuJyArIGMuJG5vZGVJZCQ7XG4gICAgICAgIGNvbnN0IG9yZ0xvY2F0aW9uTm9kZSA9IHBsdC4kb3JnTG9jTm9kZXMkLmdldChvcmdMb2NhdGlvbklkKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGMuJGVsbSQ7XG4gICAgICAgIGlmIChvcmdMb2NhdGlvbk5vZGUgJiYgc3VwcG9ydHNTaGFkb3cgJiYgb3JnTG9jYXRpb25Ob2RlWydzLWVuJ10gPT09ICcnKSB7XG4gICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgb3JnTG9jYXRpb25Ob2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgIG5vZGVbJ3MtaG4nXSA9IHRhZ05hbWU7XG4gICAgICAgICAgICBpZiAob3JnTG9jYXRpb25Ob2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZVsncy1vbCddID0gb3JnTG9jYXRpb25Ob2RlO1xuICAgICAgICAgICAgICAgIG5vZGVbJ3Mtb2wnXVsncy1uciddID0gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwbHQuJG9yZ0xvY05vZGVzJC5kZWxldGUob3JnTG9jYXRpb25JZCk7XG4gICAgfSk7XG4gICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiBzaGFkb3dSb290KSB7XG4gICAgICAgIHNoYWRvd1Jvb3ROb2Rlcy5tYXAoKHNoYWRvd1Jvb3ROb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hhZG93Um9vdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBzaGFkb3dSb290LmFwcGVuZENoaWxkKHNoYWRvd1Jvb3ROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVuZEh5ZHJhdGUoKTtcbn07XG5jb25zdCBjbGllbnRIeWRyYXRlID0gKHBhcmVudFZOb2RlLCBjaGlsZFJlbmRlck5vZGVzLCBzbG90Tm9kZXMsIHNoYWRvd1Jvb3ROb2RlcywgaG9zdEVsbSwgbm9kZSwgaG9zdElkKSA9PiB7XG4gICAgbGV0IGNoaWxkTm9kZVR5cGU7XG4gICAgbGV0IGNoaWxkSWRTcGx0O1xuICAgIGxldCBjaGlsZFZOb2RlO1xuICAgIGxldCBpO1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLykge1xuICAgICAgICBjaGlsZE5vZGVUeXBlID0gbm9kZS5nZXRBdHRyaWJ1dGUoSFlEUkFURV9DSElMRF9JRCk7XG4gICAgICAgIGlmIChjaGlsZE5vZGVUeXBlKSB7XG4gICAgICAgICAgICAvLyBnb3QgdGhlIG5vZGUgZGF0YSBmcm9tIHRoZSBlbGVtZW50J3MgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBgJHtob3N0SWR9LiR7bm9kZUlkfS4ke2RlcHRofS4ke2luZGV4fWBcbiAgICAgICAgICAgIGNoaWxkSWRTcGx0ID0gY2hpbGROb2RlVHlwZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgaWYgKGNoaWxkSWRTcGx0WzBdID09PSBob3N0SWQgfHwgY2hpbGRJZFNwbHRbMF0gPT09ICcwJykge1xuICAgICAgICAgICAgICAgIGNoaWxkVk5vZGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICRmbGFncyQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICRob3N0SWQkOiBjaGlsZElkU3BsdFswXSxcbiAgICAgICAgICAgICAgICAgICAgJG5vZGVJZCQ6IGNoaWxkSWRTcGx0WzFdLFxuICAgICAgICAgICAgICAgICAgICAkZGVwdGgkOiBjaGlsZElkU3BsdFsyXSxcbiAgICAgICAgICAgICAgICAgICAgJGluZGV4JDogY2hpbGRJZFNwbHRbM10sXG4gICAgICAgICAgICAgICAgICAgICR0YWckOiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgJGVsbSQ6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICRhdHRycyQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICRjaGlsZHJlbiQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICRrZXkkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAkbmFtZSQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICR0ZXh0JDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNoaWxkUmVuZGVyTm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShIWURSQVRFX0NISUxEX0lEKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgbmV3IGNoaWxkIHZub2RlXG4gICAgICAgICAgICAgICAgLy8gc28gZW5zdXJlIGl0cyBwYXJlbnQgdm5vZGUgaGFzIHRoZSB2Y2hpbGRyZW4gYXJyYXlcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudFZOb2RlLiRjaGlsZHJlbiQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhZGQgb3VyIGNoaWxkIHZub2RlIHRvIGEgc3BlY2lmaWMgaW5kZXggb2YgdGhlIHZub2RlJ3MgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgbm93IHRoZSBuZXcgcGFyZW50IHZub2RlIGZvciBhbGwgdGhlIG5leHQgY2hpbGQgY2hlY2tzXG4gICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUgPSBjaGlsZFZOb2RlO1xuICAgICAgICAgICAgICAgIGlmIChzaGFkb3dSb290Tm9kZXMgJiYgY2hpbGRWTm9kZS4kZGVwdGgkID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Um9vdE5vZGVzW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlLiRlbG0kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZWN1cnNpdmVseSBkcmlsbCBkb3duLCBlbmQgdG8gc3RhcnQgc28gd2UgY2FuIHJlbW92ZSBub2Rlc1xuICAgICAgICBmb3IgKGkgPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNsaWVudEh5ZHJhdGUocGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBob3N0RWxtLCBub2RlLmNoaWxkTm9kZXNbaV0sIGhvc3RJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgLy8ga2VlcCBkcmlsbGluZyBkb3duIHRocm91Z2ggdGhlIHNoYWRvdyByb290IG5vZGVzXG4gICAgICAgICAgICBmb3IgKGkgPSBub2RlLnNoYWRvd1Jvb3QuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNsaWVudEh5ZHJhdGUocGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBob3N0RWxtLCBub2RlLnNoYWRvd1Jvb3QuY2hpbGROb2Rlc1tpXSwgaG9zdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIE5PREVfVFlQRS5Db21tZW50Tm9kZSAqLykge1xuICAgICAgICAvLyBgJHtDT01NRU5UX1RZUEV9LiR7aG9zdElkfS4ke25vZGVJZH0uJHtkZXB0aH0uJHtpbmRleH1gXG4gICAgICAgIGNoaWxkSWRTcGx0ID0gbm9kZS5ub2RlVmFsdWUuc3BsaXQoJy4nKTtcbiAgICAgICAgaWYgKGNoaWxkSWRTcGx0WzFdID09PSBob3N0SWQgfHwgY2hpbGRJZFNwbHRbMV0gPT09ICcwJykge1xuICAgICAgICAgICAgLy8gY29tbWVudCBub2RlIGZvciBlaXRoZXIgdGhlIGhvc3QgaWQgb3IgYSAwIGhvc3QgaWRcbiAgICAgICAgICAgIGNoaWxkTm9kZVR5cGUgPSBjaGlsZElkU3BsdFswXTtcbiAgICAgICAgICAgIGNoaWxkVk5vZGUgPSB7XG4gICAgICAgICAgICAgICAgJGZsYWdzJDogMCxcbiAgICAgICAgICAgICAgICAkaG9zdElkJDogY2hpbGRJZFNwbHRbMV0sXG4gICAgICAgICAgICAgICAgJG5vZGVJZCQ6IGNoaWxkSWRTcGx0WzJdLFxuICAgICAgICAgICAgICAgICRkZXB0aCQ6IGNoaWxkSWRTcGx0WzNdLFxuICAgICAgICAgICAgICAgICRpbmRleCQ6IGNoaWxkSWRTcGx0WzRdLFxuICAgICAgICAgICAgICAgICRlbG0kOiBub2RlLFxuICAgICAgICAgICAgICAgICRhdHRycyQ6IG51bGwsXG4gICAgICAgICAgICAgICAgJGNoaWxkcmVuJDogbnVsbCxcbiAgICAgICAgICAgICAgICAka2V5JDogbnVsbCxcbiAgICAgICAgICAgICAgICAkbmFtZSQ6IG51bGwsXG4gICAgICAgICAgICAgICAgJHRhZyQ6IG51bGwsXG4gICAgICAgICAgICAgICAgJHRleHQkOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVUeXBlID09PSBURVhUX05PREVfSUQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFZOb2RlLiRlbG0kID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRWTm9kZS4kZWxtJCAmJiBjaGlsZFZOb2RlLiRlbG0kLm5vZGVUeXBlID09PSAzIC8qIE5PREVfVFlQRS5UZXh0Tm9kZSAqLykge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZOb2RlLiR0ZXh0JCA9IGNoaWxkVk5vZGUuJGVsbSQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkUmVuZGVyTm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSB0ZXh0IGNvbW1lbnQgc2luY2UgaXQncyBubyBsb25nZXIgbmVlZGVkXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiRbY2hpbGRWTm9kZS4kaW5kZXgkXSA9IGNoaWxkVk5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dSb290Tm9kZXMgJiYgY2hpbGRWTm9kZS4kZGVwdGgkID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3ROb2Rlc1tjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZS4kZWxtJDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkVk5vZGUuJGhvc3RJZCQgPT09IGhvc3RJZCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29tbWVudCBub2RlIGlzIHNwZWNpZmNhbGx5IGZvciB0aGlzIGhvc3QgaWRcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlVHlwZSA9PT0gU0xPVF9OT0RFX0lEKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGAke1NMT1RfTk9ERV9JRH0uJHtob3N0SWR9LiR7bm9kZUlkfS4ke2RlcHRofS4ke2luZGV4fS4ke3Nsb3ROYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVk5vZGUuJHRhZyQgPSAnc2xvdCc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZElkU3BsdFs1XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsncy1zbiddID0gY2hpbGRWTm9kZS4kbmFtZSQgPSBjaGlsZElkU3BsdFs1XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ3Mtc24nXSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vZGVbJ3Mtc3InXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zaGFkb3dEb20gJiYgc2hhZG93Um9vdE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBicm93c2VyIHN1cHBvcnQgc2hhZG93Um9vdCBhbmQgdGhpcyBpcyBhIHNoYWRvdyBkb20gY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW4gYWN0dWFsIHNsb3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWTm9kZS4kZWxtJCA9IGRvYy5jcmVhdGVFbGVtZW50KGNoaWxkVk5vZGUuJHRhZyQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkVk5vZGUuJG5hbWUkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoZSBzbG90IG5hbWUgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWTm9kZS4kZWxtJC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBjaGlsZFZOb2RlLiRuYW1lJCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnNlcnQgdGhlIG5ldyBzbG90IGVsZW1lbnQgYmVmb3JlIHRoZSBzbG90IGNvbW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2hpbGRWTm9kZS4kZWxtJCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIHNsb3QgY29tbWVudCBzaW5jZSBpdCdzIG5vdCBuZWVkZWQgZm9yIHNoYWRvd1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZFZOb2RlLiRkZXB0aCQgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3ROb2Rlc1tjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZS4kZWxtJDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbG90Tm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRWTm9kZS4kY2hpbGRyZW4kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGROb2RlVHlwZSA9PT0gQ09OVEVOVF9SRUZfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYCR7Q09OVEVOVF9SRUZfSUR9LiR7aG9zdElkfWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zaGFkb3dEb20gJiYgc2hhZG93Um9vdE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGNvbnRlbnQgcmVmIGNvbW1lbnQgc2luY2UgaXQncyBub3QgbmVlZGVkIGZvciBzaGFkb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RFbG1bJ3MtY3InXSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlWydzLWNuJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcmVudFZOb2RlICYmIHBhcmVudFZOb2RlLiR0YWckID09PSAnc3R5bGUnKSB7XG4gICAgICAgIGNvbnN0IHZub2RlID0gbmV3Vk5vZGUobnVsbCwgbm9kZS50ZXh0Q29udGVudCk7XG4gICAgICAgIHZub2RlLiRlbG0kID0gbm9kZTtcbiAgICAgICAgdm5vZGUuJGluZGV4JCA9ICcwJztcbiAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFt2bm9kZV07XG4gICAgfVxufTtcbmNvbnN0IGluaXRpYWxpemVEb2N1bWVudEh5ZHJhdGUgPSAobm9kZSwgb3JnTG9jTm9kZXMpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZURvY3VtZW50SHlkcmF0ZShub2RlLmNoaWxkTm9kZXNbaV0sIG9yZ0xvY05vZGVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5zaGFkb3dSb290KSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbm9kZS5zaGFkb3dSb290LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplRG9jdW1lbnRIeWRyYXRlKG5vZGUuc2hhZG93Um9vdC5jaGlsZE5vZGVzW2ldLCBvcmdMb2NOb2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOT0RFX1RZUEUuQ29tbWVudE5vZGUgKi8pIHtcbiAgICAgICAgY29uc3QgY2hpbGRJZFNwbHQgPSBub2RlLm5vZGVWYWx1ZS5zcGxpdCgnLicpO1xuICAgICAgICBpZiAoY2hpbGRJZFNwbHRbMF0gPT09IE9SR19MT0NBVElPTl9JRCkge1xuICAgICAgICAgICAgb3JnTG9jTm9kZXMuc2V0KGNoaWxkSWRTcGx0WzFdICsgJy4nICsgY2hpbGRJZFNwbHRbMl0sIG5vZGUpO1xuICAgICAgICAgICAgbm9kZS5ub2RlVmFsdWUgPSAnJztcbiAgICAgICAgICAgIC8vIHVzZWZ1bCB0byBrbm93IGlmIHRoZSBvcmlnaW5hbCBsb2NhdGlvbiBpc1xuICAgICAgICAgICAgLy8gdGhlIHJvb3QgbGlnaHQtZG9tIG9mIGEgc2hhZG93IGRvbSBjb21wb25lbnRcbiAgICAgICAgICAgIG5vZGVbJ3MtZW4nXSA9IGNoaWxkSWRTcGx0WzNdO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFByaXZhdGVcbmNvbnN0IGNvbXB1dGVNb2RlID0gKGVsbSkgPT4gbW9kZVJlc29sdXRpb25DaGFpbi5tYXAoKGgpID0+IGgoZWxtKSkuZmluZCgobSkgPT4gISFtKTtcbi8vIFB1YmxpY1xuY29uc3Qgc2V0TW9kZSA9IChoYW5kbGVyKSA9PiBtb2RlUmVzb2x1dGlvbkNoYWluLnB1c2goaGFuZGxlcik7XG5jb25zdCBnZXRNb2RlID0gKHJlZikgPT4gZ2V0SG9zdFJlZihyZWYpLiRtb2RlTmFtZSQ7XG4vKipcbiAqIFBhcnNlIGEgbmV3IHByb3BlcnR5IHZhbHVlIGZvciBhIGdpdmVuIHByb3BlcnR5IHR5cGUuXG4gKlxuICogV2hpbGUgdGhlIHByb3AgdmFsdWUgY2FuIHJlYXNvbmFibHkgYmUgZXhwZWN0ZWQgdG8gYmUgb2YgYGFueWAgdHlwZSBhcyBmYXIgYXMgVHlwZVNjcmlwdCdzIHR5cGUgY2hlY2tlciBpcyBjb25jZXJuZWQsXG4gKiBpdCBpcyBub3Qgc2FmZSB0byBhc3N1bWUgdGhhdCB0aGUgc3RyaW5nIHJldHVybmVkIGJ5IGV2YWx1YXRpbmcgYHR5cGVvZiBwcm9wVmFsdWVgIG1hdGNoZXM6XG4gKiAgIDEuIGBhbnlgLCB0aGUgdHlwZSBnaXZlbiB0byBgcHJvcFZhbHVlYCBpbiB0aGUgZnVuY3Rpb24gc2lnbmF0dXJlXG4gKiAgIDIuIHRoZSB0eXBlIHN0b3JlZCBmcm9tIGBwcm9wVHlwZWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBwcm92aWRlcyB0aGUgY2FwYWJpbGl0eSB0byBwYXJzZS9jb2VyY2UgYSBwcm9wZXJ0eSdzIHZhbHVlIHRvIHBvdGVudGlhbGx5IGFueSBvdGhlciBKYXZhU2NyaXB0IHR5cGUuXG4gKlxuICogUHJvcGVydHkgdmFsdWVzIHJlcHJlc2VudGVkIGluIFRTWCBwcmVzZXJ2ZSB0aGVpciB0eXBlIGluZm9ybWF0aW9uLiBJbiB0aGUgZXhhbXBsZSBiZWxvdywgdGhlIG51bWJlciAwIGlzIHBhc3NlZCB0b1xuICogYSBjb21wb25lbnQuIFRoaXMgYHByb3BWYWx1ZWAgd2lsbCBwcmVzZXJ2ZSBpdHMgdHlwZSBpbmZvcm1hdGlvbiAoYHR5cGVvZiBwcm9wVmFsdWUgPT09ICdudW1iZXInYCkuIE5vdGUgdGhhdCBpc1xuICogYmFzZWQgb24gdGhlIHR5cGUgb2YgdGhlIHZhbHVlIGJlaW5nIHBhc3NlZCBpbiwgbm90IHRoZSB0eXBlIGRlY2xhcmVkIG9mIHRoZSBjbGFzcyBtZW1iZXIgZGVjb3JhdGVkIHdpdGggYEBQcm9wYC5cbiAqIGBgYHRzeFxuICogPG15LWNtcCBwcm9wLXZhbD17MH0+PC9teS1jbXA+XG4gKiBgYGBcbiAqXG4gKiBIVE1MIHByb3AgdmFsdWVzIG9uIHRoZSBvdGhlciBoYW5kLCB3aWxsIGFsd2F5cyBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSBwcm9wVmFsdWUgdGhlIG5ldyB2YWx1ZSB0byBjb2VyY2UgdG8gc29tZSB0eXBlXG4gKiBAcGFyYW0gcHJvcFR5cGUgdGhlIHR5cGUgb2YgdGhlIHByb3AsIGV4cHJlc3NlZCBhcyBhIGJpbmFyeSBudW1iZXJcbiAqIEByZXR1cm5zIHRoZSBwYXJzZWQvY29lcmNlZCB2YWx1ZVxuICovXG5jb25zdCBwYXJzZVByb3BlcnR5VmFsdWUgPSAocHJvcFZhbHVlLCBwcm9wVHlwZSkgPT4ge1xuICAgIC8vIGVuc3VyZSB0aGlzIHZhbHVlIGlzIG9mIHRoZSBjb3JyZWN0IHByb3AgdHlwZVxuICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiAhaXNDb21wbGV4VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIGlmIChCVUlMRC5wcm9wQm9vbGVhbiAmJiBwcm9wVHlwZSAmIDQgLyogTUVNQkVSX0ZMQUdTLkJvb2xlYW4gKi8pIHtcbiAgICAgICAgICAgIC8vIHBlciB0aGUgSFRNTCBzcGVjLCBhbnkgc3RyaW5nIHZhbHVlIG1lYW5zIGl0IGlzIGEgYm9vbGVhbiB0cnVlIHZhbHVlXG4gICAgICAgICAgICAvLyBidXQgd2UnbGwgY2hlYXQgaGVyZSBhbmQgc2F5IHRoYXQgdGhlIHN0cmluZyBcImZhbHNlXCIgaXMgdGhlIGJvb2xlYW4gZmFsc2VcbiAgICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHByb3BWYWx1ZSA9PT0gJycgfHwgISFwcm9wVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELnByb3BOdW1iZXIgJiYgcHJvcFR5cGUgJiAyIC8qIE1FTUJFUl9GTEFHUy5OdW1iZXIgKi8pIHtcbiAgICAgICAgICAgIC8vIGZvcmNlIGl0IHRvIGJlIGEgbnVtYmVyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChwcm9wVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5wcm9wU3RyaW5nICYmIHByb3BUeXBlICYgMSAvKiBNRU1CRVJfRkxBR1MuU3RyaW5nICovKSB7XG4gICAgICAgICAgICAvLyBjb3VsZCBoYXZlIGJlZW4gcGFzc2VkIGFzIGEgbnVtYmVyIG9yIGJvb2xlYW5cbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBzdGlsbCB3YW50IGl0IGFzIGEgc3RyaW5nXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHByb3BWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVkdW5kYW50IHJldHVybiBoZXJlIGZvciBiZXR0ZXIgbWluaWZpY2F0aW9uXG4gICAgICAgIHJldHVybiBwcm9wVmFsdWU7XG4gICAgfVxuICAgIC8vIG5vdCBzdXJlIGV4YWN0bHkgd2hhdCB0eXBlIHdlIHdhbnRcbiAgICAvLyBzbyBubyBuZWVkIHRvIGNoYW5nZSB0byBhIGRpZmZlcmVudCB0eXBlXG4gICAgcmV0dXJuIHByb3BWYWx1ZTtcbn07XG5jb25zdCBnZXRFbGVtZW50ID0gKHJlZikgPT4gKEJVSUxELmxhenlMb2FkID8gZ2V0SG9zdFJlZihyZWYpLiRob3N0RWxlbWVudCQgOiByZWYpO1xuY29uc3QgY3JlYXRlRXZlbnQgPSAocmVmLCBuYW1lLCBmbGFncykgPT4ge1xuICAgIGNvbnN0IGVsbSA9IGdldEVsZW1lbnQocmVmKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBlbWl0OiAoZGV0YWlsKSA9PiB7XG4gICAgICAgICAgICBpZiAoQlVJTEQuaXNEZXYgJiYgIWVsbS5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGVEZXZXYXJuKGBUaGUgXCIke25hbWV9XCIgZXZlbnQgd2FzIGVtaXR0ZWQsIGJ1dCB0aGUgZGlzcGF0Y2hlciBub2RlIGlzIG5vIGxvbmdlciBjb25uZWN0ZWQgdG8gdGhlIGRvbS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbWl0RXZlbnQoZWxtLCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogISEoZmxhZ3MgJiA0IC8qIEVWRU5UX0ZMQUdTLkJ1YmJsZXMgKi8pLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAhIShmbGFncyAmIDIgLyogRVZFTlRfRkxBR1MuQ29tcG9zZWQgKi8pLFxuICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6ICEhKGZsYWdzICYgMSAvKiBFVkVOVF9GTEFHUy5DYW5jZWxsYWJsZSAqLyksXG4gICAgICAgICAgICAgICAgZGV0YWlsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgJiBkaXNwYXRjaCBhIGN1c3RvbSBFdmVudCBvbiBhIHByb3ZpZGVkIHRhcmdldFxuICogQHBhcmFtIGVsbSB0aGUgdGFyZ2V0IG9mIHRoZSBFdmVudFxuICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgdG8gZ2l2ZSB0aGUgY3VzdG9tIEV2ZW50XG4gKiBAcGFyYW0gb3B0cyBvcHRpb25zIGZvciBjb25maWd1cmluZyBhIGN1c3RvbSBFdmVudFxuICogQHJldHVybnMgdGhlIGN1c3RvbSBFdmVudFxuICovXG5jb25zdCBlbWl0RXZlbnQgPSAoZWxtLCBuYW1lLCBvcHRzKSA9PiB7XG4gICAgY29uc3QgZXYgPSBwbHQuY2UobmFtZSwgb3B0cyk7XG4gICAgZWxtLmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgIHJldHVybiBldjtcbn07XG5jb25zdCByb290QXBwbGllZFN0eWxlcyA9IC8qQF9fUFVSRV9fKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJlZ2lzdGVyU3R5bGUgPSAoc2NvcGVJZCwgY3NzVGV4dCwgYWxsb3dDUykgPT4ge1xuICAgIGxldCBzdHlsZSA9IHN0eWxlcy5nZXQoc2NvcGVJZCk7XG4gICAgaWYgKHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXRzICYmIGFsbG93Q1MpIHtcbiAgICAgICAgc3R5bGUgPSAoc3R5bGUgfHwgbmV3IENTU1N0eWxlU2hlZXQoKSk7XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzdHlsZSA9IGNzc1RleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5yZXBsYWNlU3luYyhjc3NUZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSBjc3NUZXh0O1xuICAgIH1cbiAgICBzdHlsZXMuc2V0KHNjb3BlSWQsIHN0eWxlKTtcbn07XG5jb25zdCBhZGRTdHlsZSA9IChzdHlsZUNvbnRhaW5lck5vZGUsIGNtcE1ldGEsIG1vZGUsIGhvc3RFbG0pID0+IHtcbiAgICB2YXIgX2E7XG4gICAgbGV0IHNjb3BlSWQgPSBnZXRTY29wZUlkKGNtcE1ldGEsIG1vZGUpO1xuICAgIGNvbnN0IHN0eWxlID0gc3R5bGVzLmdldChzY29wZUlkKTtcbiAgICBpZiAoIUJVSUxELmF0dGFjaFN0eWxlcykge1xuICAgICAgICByZXR1cm4gc2NvcGVJZDtcbiAgICB9XG4gICAgLy8gaWYgYW4gZWxlbWVudCBpcyBOT1QgY29ubmVjdGVkIHRoZW4gZ2V0Um9vdE5vZGUoKSB3aWxsIHJldHVybiB0aGUgd3Jvbmcgcm9vdCBub2RlXG4gICAgLy8gc28gdGhlIGZhbGxiYWNrIGlzIHRvIGFsd2F5cyB1c2UgdGhlIGRvY3VtZW50IGZvciB0aGUgcm9vdCBub2RlIGluIHRob3NlIGNhc2VzXG4gICAgc3R5bGVDb250YWluZXJOb2RlID0gc3R5bGVDb250YWluZXJOb2RlLm5vZGVUeXBlID09PSAxMSAvKiBOT0RFX1RZUEUuRG9jdW1lbnRGcmFnbWVudCAqLyA/IHN0eWxlQ29udGFpbmVyTm9kZSA6IGRvYztcbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZSA9IHN0eWxlQ29udGFpbmVyTm9kZS5oZWFkIHx8IHN0eWxlQ29udGFpbmVyTm9kZTtcbiAgICAgICAgICAgIGxldCBhcHBsaWVkU3R5bGVzID0gcm9vdEFwcGxpZWRTdHlsZXMuZ2V0KHN0eWxlQ29udGFpbmVyTm9kZSk7XG4gICAgICAgICAgICBsZXQgc3R5bGVFbG07XG4gICAgICAgICAgICBpZiAoIWFwcGxpZWRTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICByb290QXBwbGllZFN0eWxlcy5zZXQoc3R5bGVDb250YWluZXJOb2RlLCAoYXBwbGllZFN0eWxlcyA9IG5ldyBTZXQoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhcHBsaWVkU3R5bGVzLmhhcyhzY29wZUlkKSkge1xuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlQ2xpZW50U2lkZSAmJlxuICAgICAgICAgICAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuaG9zdCAmJlxuICAgICAgICAgICAgICAgICAgICAoc3R5bGVFbG0gPSBzdHlsZUNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcihgWyR7SFlEUkFURURfU1RZTEVfSUR9PVwiJHtzY29wZUlkfVwiXWApKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG9ubHkgaGFwcGVuaW5nIG9uIG5hdGl2ZSBzaGFkb3ctZG9tLCBkbyBub3QgbmVlZHMgQ1NTIHZhciBzaGltXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtLmlubmVySFRNTCA9IHN0eWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELmNzc1ZhclNoaW0gJiYgcGx0LiRjc3NTaGltJCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0gPSBwbHQuJGNzc1NoaW0kLmNyZWF0ZUhvc3RTdHlsZShob3N0RWxtLCBzY29wZUlkLCBzdHlsZSwgISEoY21wTWV0YS4kZmxhZ3MkICYgMTAgLyogQ01QX0ZMQUdTLm5lZWRzU2NvcGVkRW5jYXBzdWxhdGlvbiAqLykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2NvcGVJZCA9IHN0eWxlRWxtWydzLXNjJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3U2NvcGVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlSWQgPSBuZXdTY29wZUlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gYWRkIHRoaXMgc3R5bGVJRCB0byB0aGUgYXBwbGllZFN0eWxlcyBTZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGUgY3NzVmFyU2hpbSBtaWdodCBuZWVkIHRvIGFwcGx5IHNldmVyYWwgZGlmZmVyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGVzaGVldHMgZm9yIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWRTdHlsZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0gPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtLmlubmVySFRNTCA9IHN0eWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGx5IENTUCBub25jZSB0byB0aGUgc3R5bGUgdGFnIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub25jZSA9IChfYSA9IHBsdC4kbm9uY2UkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBxdWVyeU5vbmNlTWV0YVRhZ0NvbnRlbnQoZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vbmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBub25jZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlIHx8IEJVSUxELmhvdE1vZHVsZVJlcGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUVsbS5zZXRBdHRyaWJ1dGUoSFlEUkFURURfU1RZTEVfSUQsIHNjb3BlSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5pbnNlcnRCZWZvcmUoc3R5bGVFbG0sIHN0eWxlQ29udGFpbmVyTm9kZS5xdWVyeVNlbGVjdG9yKCdsaW5rJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXBwbGllZFN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWVkU3R5bGVzLmFkZChzY29wZUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQuY29uc3RydWN0YWJsZUNTUyAmJiAhc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzdHlsZSkpIHtcbiAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgPSBbLi4uc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cywgc3R5bGVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzY29wZUlkO1xufTtcbmNvbnN0IGF0dGFjaFN0eWxlcyA9IChob3N0UmVmKSA9PiB7XG4gICAgY29uc3QgY21wTWV0YSA9IGhvc3RSZWYuJGNtcE1ldGEkO1xuICAgIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBmbGFncyA9IGNtcE1ldGEuJGZsYWdzJDtcbiAgICBjb25zdCBlbmRBdHRhY2hTdHlsZXMgPSBjcmVhdGVUaW1lKCdhdHRhY2hTdHlsZXMnLCBjbXBNZXRhLiR0YWdOYW1lJCk7XG4gICAgY29uc3Qgc2NvcGVJZCA9IGFkZFN0eWxlKEJVSUxELnNoYWRvd0RvbSAmJiBzdXBwb3J0c1NoYWRvdyAmJiBlbG0uc2hhZG93Um9vdCA/IGVsbS5zaGFkb3dSb290IDogZWxtLmdldFJvb3ROb2RlKCksIGNtcE1ldGEsIGhvc3RSZWYuJG1vZGVOYW1lJCwgZWxtKTtcbiAgICBpZiAoKEJVSUxELnNoYWRvd0RvbSB8fCBCVUlMRC5zY29wZWQpICYmIEJVSUxELmNzc0Fubm90YXRpb25zICYmIGZsYWdzICYgMTAgLyogQ01QX0ZMQUdTLm5lZWRzU2NvcGVkRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAvLyBvbmx5IHJlcXVpcmVkIHdoZW4gd2UncmUgTk9UIHVzaW5nIG5hdGl2ZSBzaGFkb3cgZG9tIChzbG90KVxuICAgICAgICAvLyBvciB0aGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZSBzaGFkb3cgZG9tXG4gICAgICAgIC8vIGFuZCB0aGlzIGhvc3QgZWxlbWVudCB3YXMgTk9UIGNyZWF0ZWQgd2l0aCBTU1JcbiAgICAgICAgLy8gbGV0J3MgcGljayBvdXQgdGhlIGlubmVyIGNvbnRlbnQgZm9yIHNsb3QgcHJvamVjdGlvblxuICAgICAgICAvLyBjcmVhdGUgYSBub2RlIHRvIHJlcHJlc2VudCB3aGVyZSB0aGUgb3JpZ2luYWxcbiAgICAgICAgLy8gY29udGVudCB3YXMgZmlyc3QgcGxhY2VkLCB3aGljaCBpcyB1c2VmdWwgbGF0ZXIgb25cbiAgICAgICAgLy8gRE9NIFdSSVRFISFcbiAgICAgICAgZWxtWydzLXNjJ10gPSBzY29wZUlkO1xuICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1oJyk7XG4gICAgICAgIGlmIChCVUlMRC5zY29wZWQgJiYgZmxhZ3MgJiAyIC8qIENNUF9GTEFHUy5zY29wZWRDc3NFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1zJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW5kQXR0YWNoU3R5bGVzKCk7XG59O1xuY29uc3QgZ2V0U2NvcGVJZCA9IChjbXAsIG1vZGUpID0+ICdzYy0nICsgKEJVSUxELm1vZGUgJiYgbW9kZSAmJiBjbXAuJGZsYWdzJCAmIDMyIC8qIENNUF9GTEFHUy5oYXNNb2RlICovID8gY21wLiR0YWdOYW1lJCArICctJyArIG1vZGUgOiBjbXAuJHRhZ05hbWUkKTtcbmNvbnN0IGNvbnZlcnRTY29wZWRUb1NoYWRvdyA9IChjc3MpID0+IGNzcy5yZXBsYWNlKC9cXC9cXCohQChbXlxcL10rKVxcKlxcL1teXFx7XStcXHsvZywgJyQxeycpO1xuLyoqXG4gKiBQcm9kdWN0aW9uIHNldEFjY2Vzc29yKCkgZnVuY3Rpb24gYmFzZWQgb24gUHJlYWN0IGJ5XG4gKiBKYXNvbiBNaWxsZXIgKEBkZXZlbG9waXQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIGNvbXBpbGVyIGFuZCB2ZG9tXG4gKi9cbmNvbnN0IHNldEFjY2Vzc29yID0gKGVsbSwgbWVtYmVyTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBpc1N2ZywgZmxhZ3MpID0+IHtcbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIGxldCBpc1Byb3AgPSBpc01lbWJlckluRWxlbWVudChlbG0sIG1lbWJlck5hbWUpO1xuICAgICAgICBsZXQgbG4gPSBtZW1iZXJOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChCVUlMRC52ZG9tQ2xhc3MgJiYgbWVtYmVyTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWxtLmNsYXNzTGlzdDtcbiAgICAgICAgICAgIGNvbnN0IG9sZENsYXNzZXMgPSBwYXJzZUNsYXNzTGlzdChvbGRWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBuZXdDbGFzc2VzID0gcGFyc2VDbGFzc0xpc3QobmV3VmFsdWUpO1xuICAgICAgICAgICAgY2xhc3NMaXN0LnJlbW92ZSguLi5vbGRDbGFzc2VzLmZpbHRlcigoYykgPT4gYyAmJiAhbmV3Q2xhc3Nlcy5pbmNsdWRlcyhjKSkpO1xuICAgICAgICAgICAgY2xhc3NMaXN0LmFkZCguLi5uZXdDbGFzc2VzLmZpbHRlcigoYykgPT4gYyAmJiAhb2xkQ2xhc3Nlcy5pbmNsdWRlcyhjKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEJVSUxELnZkb21TdHlsZSAmJiBtZW1iZXJOYW1lID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgc3R5bGUgYXR0cmlidXRlLCBjc3MgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAgICAgICAgICBpZiAoQlVJTEQudXBkYXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUgfHwgbmV3VmFsdWVbcHJvcF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSAmJiBwcm9wLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0uc3R5bGVbcHJvcF0gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICghb2xkVmFsdWUgfHwgbmV3VmFsdWVbcHJvcF0gIT09IG9sZFZhbHVlW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgJiYgcHJvcC5pbmNsdWRlcygnLScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0uc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgbmV3VmFsdWVbcHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnN0eWxlW3Byb3BdID0gbmV3VmFsdWVbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudmRvbUtleSAmJiBtZW1iZXJOYW1lID09PSAna2V5JylcbiAgICAgICAgICAgIDtcbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudmRvbVJlZiAmJiBtZW1iZXJOYW1lID09PSAncmVmJykge1xuICAgICAgICAgICAgLy8gbWluaWZpZXIgd2lsbCBjbGVhbiB0aGlzIHVwXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZShlbG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEJVSUxELnZkb21MaXN0ZW5lciAmJlxuICAgICAgICAgICAgKEJVSUxELmxhenlMb2FkID8gIWlzUHJvcCA6ICFlbG0uX19sb29rdXBTZXR0ZXJfXyhtZW1iZXJOYW1lKSkgJiZcbiAgICAgICAgICAgIG1lbWJlck5hbWVbMF0gPT09ICdvJyAmJlxuICAgICAgICAgICAgbWVtYmVyTmFtZVsxXSA9PT0gJ24nKSB7XG4gICAgICAgICAgICAvLyBFdmVudCBIYW5kbGVyc1xuICAgICAgICAgICAgLy8gc28gaWYgdGhlIG1lbWJlciBuYW1lIHN0YXJ0cyB3aXRoIFwib25cIiBhbmQgdGhlIDNyZCBjaGFyYWN0ZXJzIGlzXG4gICAgICAgICAgICAvLyBhIGNhcGl0YWwgbGV0dGVyLCBhbmQgaXQncyBub3QgYWxyZWFkeSBhIG1lbWJlciBvbiB0aGUgZWxlbWVudCxcbiAgICAgICAgICAgIC8vIHRoZW4gd2UncmUgYXNzdW1pbmcgaXQncyBhbiBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgaWYgKG1lbWJlck5hbWVbMl0gPT09ICctJykge1xuICAgICAgICAgICAgICAgIC8vIG9uLSBwcmVmaXhlZCBldmVudHNcbiAgICAgICAgICAgICAgICAvLyBhbGxvd3MgdG8gYmUgZXhwbGljaXQgYWJvdXQgdGhlIGRvbSBldmVudCB0byBsaXN0ZW4gd2l0aG91dCBhbnkgbWFnaWNcbiAgICAgICAgICAgICAgICAvLyB1bmRlciB0aGUgaG9vZDpcbiAgICAgICAgICAgICAgICAvLyA8bXktY21wIG9uLWNsaWNrPiAvLyBsaXN0ZW5zIGZvciBcImNsaWNrXCJcbiAgICAgICAgICAgICAgICAvLyA8bXktY21wIG9uLUNsaWNrPiAvLyBsaXN0ZW5zIGZvciBcIkNsaWNrXCJcbiAgICAgICAgICAgICAgICAvLyA8bXktY21wIG9uLWlvbkNoYW5nZT4gLy8gbGlzdGVucyBmb3IgXCJpb25DaGFuZ2VcIlxuICAgICAgICAgICAgICAgIC8vIDxteS1jbXAgb24tRVZFTlRTPiAvLyBsaXN0ZW5zIGZvciBcIkVWRU5UU1wiXG4gICAgICAgICAgICAgICAgbWVtYmVyTmFtZSA9IG1lbWJlck5hbWUuc2xpY2UoMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc01lbWJlckluRWxlbWVudCh3aW4sIGxuKSkge1xuICAgICAgICAgICAgICAgIC8vIHN0YW5kYXJkIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gdGhlIEpTWCBhdHRyaWJ1dGUgY291bGQgaGF2ZSBiZWVuIFwib25Nb3VzZU92ZXJcIiBhbmQgdGhlXG4gICAgICAgICAgICAgICAgLy8gbWVtYmVyIG5hbWUgXCJvbm1vdXNlb3ZlclwiIGlzIG9uIHRoZSB3aW5kb3cncyBwcm90b3R5cGVcbiAgICAgICAgICAgICAgICAvLyBzbyBsZXQncyBhZGQgdGhlIGxpc3RlbmVyIFwibW91c2VvdmVyXCIsIHdoaWNoIGlzIGFsbCBsb3dlcmNhc2VkXG4gICAgICAgICAgICAgICAgbWVtYmVyTmFtZSA9IGxuLnNsaWNlKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY3VzdG9tIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gdGhlIEpTWCBhdHRyaWJ1dGUgY291bGQgaGF2ZSBiZWVuIFwib25NeUN1c3RvbUV2ZW50XCJcbiAgICAgICAgICAgICAgICAvLyBzbyBsZXQncyB0cmltIG9mZiB0aGUgXCJvblwiIHByZWZpeCBhbmQgbG93ZXJjYXNlIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICAvLyBhbmQgYWRkIHRoZSBsaXN0ZW5lciBcIm15Q3VzdG9tRXZlbnRcIlxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdCBmb3IgdGhlIGZpcnN0IGNoYXJhY3Rlciwgd2Uga2VlcCB0aGUgZXZlbnQgbmFtZSBjYXNlXG4gICAgICAgICAgICAgICAgbWVtYmVyTmFtZSA9IGxuWzJdICsgbWVtYmVyTmFtZS5zbGljZSgzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBsdC5yZWwoZWxtLCBtZW1iZXJOYW1lLCBvbGRWYWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcGx0LmFlbChlbG0sIG1lbWJlck5hbWUsIG5ld1ZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudmRvbVByb3BPckF0dHIpIHtcbiAgICAgICAgICAgIC8vIFNldCBwcm9wZXJ0eSBpZiBpdCBleGlzdHMgYW5kIGl0J3Mgbm90IGEgU1ZHXG4gICAgICAgICAgICBjb25zdCBpc0NvbXBsZXggPSBpc0NvbXBsZXhUeXBlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGlmICgoaXNQcm9wIHx8IChpc0NvbXBsZXggJiYgbmV3VmFsdWUgIT09IG51bGwpKSAmJiAhaXNTdmcpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsbS50YWdOYW1lLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG4gPSBuZXdWYWx1ZSA9PSBudWxsID8gJycgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIFNhZmFyaSwgbW92aW5nIHRoZSA8aW5wdXQ+IGNhcmV0IHdoZW4gcmUtYXNzaWduaW5nIHRoZSBzYW1lIHZhbHVlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lbWJlck5hbWUgPT09ICdsaXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob2xkVmFsdWUgPT0gbnVsbCB8fCBlbG1bbWVtYmVyTmFtZV0gIT0gbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG1bbWVtYmVyTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE5lZWQgdG8gbWFudWFsbHkgdXBkYXRlIGF0dHJpYnV0ZSBpZjpcbiAgICAgICAgICAgICAqIC0gbWVtYmVyTmFtZSBpcyBub3QgYW4gYXR0cmlidXRlXG4gICAgICAgICAgICAgKiAtIGlmIHdlIGFyZSByZW5kZXJpbmcgdGhlIGhvc3QgZWxlbWVudCBpbiBvcmRlciB0byByZWZsZWN0IGF0dHJpYnV0ZVxuICAgICAgICAgICAgICogLSBpZiBpdCdzIGEgU1ZHLCBzaW5jZSBwcm9wZXJ0aWVzIG1pZ2h0IG5vdCB3b3JrIGluIDxzdmc+XG4gICAgICAgICAgICAgKiAtIGlmIHRoZSBuZXdWYWx1ZSBpcyBudWxsL3VuZGVmaW5lZCBvciAnZmFsc2UnLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBsZXQgeGxpbmsgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChCVUlMRC52ZG9tWGxpbmspIHtcbiAgICAgICAgICAgICAgICBpZiAobG4gIT09IChsbiA9IGxuLnJlcGxhY2UoL154bGlua1xcOj8vLCAnJykpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbWJlck5hbWUgPSBsbjtcbiAgICAgICAgICAgICAgICAgICAgeGxpbmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZmFsc2UgfHwgZWxtLmdldEF0dHJpYnV0ZShtZW1iZXJOYW1lKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELnZkb21YbGluayAmJiB4bGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZU5TKFhMSU5LX05TLCBtZW1iZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUobWVtYmVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgoIWlzUHJvcCB8fCBmbGFncyAmIDQgLyogVk5PREVfRkxBR1MuaXNIb3N0ICovIHx8IGlzU3ZnKSAmJiAhaXNDb21wbGV4KSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBuZXdWYWx1ZSA9PT0gdHJ1ZSA/ICcnIDogbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELnZkb21YbGluayAmJiB4bGluaykge1xuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlTlMoWExJTktfTlMsIG1lbWJlck5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUobWVtYmVyTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBwYXJzZUNsYXNzTGlzdFJlZ2V4ID0gL1xccy87XG5jb25zdCBwYXJzZUNsYXNzTGlzdCA9ICh2YWx1ZSkgPT4gKCF2YWx1ZSA/IFtdIDogdmFsdWUuc3BsaXQocGFyc2VDbGFzc0xpc3RSZWdleCkpO1xuY29uc3QgdXBkYXRlRWxlbWVudCA9IChvbGRWbm9kZSwgbmV3Vm5vZGUsIGlzU3ZnTW9kZSwgbWVtYmVyTmFtZSkgPT4ge1xuICAgIC8vIGlmIHRoZSBlbGVtZW50IHBhc3NlZCBpbiBpcyBhIHNoYWRvdyByb290LCB3aGljaCBpcyBhIGRvY3VtZW50IGZyYWdtZW50XG4gICAgLy8gdGhlbiB3ZSB3YW50IHRvIGJlIGFkZGluZyBhdHRycy9wcm9wcyB0byB0aGUgc2hhZG93IHJvb3QncyBcImhvc3RcIiBlbGVtZW50XG4gICAgLy8gaWYgaXQncyBub3QgYSBzaGFkb3cgcm9vdCwgdGhlbiB3ZSBhZGQgYXR0cnMvcHJvcHMgdG8gdGhlIHNhbWUgZWxlbWVudFxuICAgIGNvbnN0IGVsbSA9IG5ld1Zub2RlLiRlbG0kLm5vZGVUeXBlID09PSAxMSAvKiBOT0RFX1RZUEUuRG9jdW1lbnRGcmFnbWVudCAqLyAmJiBuZXdWbm9kZS4kZWxtJC5ob3N0XG4gICAgICAgID8gbmV3Vm5vZGUuJGVsbSQuaG9zdFxuICAgICAgICA6IG5ld1Zub2RlLiRlbG0kO1xuICAgIGNvbnN0IG9sZFZub2RlQXR0cnMgPSAob2xkVm5vZGUgJiYgb2xkVm5vZGUuJGF0dHJzJCkgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IG5ld1Zub2RlQXR0cnMgPSBuZXdWbm9kZS4kYXR0cnMkIHx8IEVNUFRZX09CSjtcbiAgICBpZiAoQlVJTEQudXBkYXRhYmxlKSB7XG4gICAgICAgIC8vIHJlbW92ZSBhdHRyaWJ1dGVzIG5vIGxvbmdlciBwcmVzZW50IG9uIHRoZSB2bm9kZSBieSBzZXR0aW5nIHRoZW0gdG8gdW5kZWZpbmVkXG4gICAgICAgIGZvciAobWVtYmVyTmFtZSBpbiBvbGRWbm9kZUF0dHJzKSB7XG4gICAgICAgICAgICBpZiAoIShtZW1iZXJOYW1lIGluIG5ld1Zub2RlQXR0cnMpKSB7XG4gICAgICAgICAgICAgICAgc2V0QWNjZXNzb3IoZWxtLCBtZW1iZXJOYW1lLCBvbGRWbm9kZUF0dHJzW21lbWJlck5hbWVdLCB1bmRlZmluZWQsIGlzU3ZnTW9kZSwgbmV3Vm5vZGUuJGZsYWdzJCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gYWRkIG5ldyAmIHVwZGF0ZSBjaGFuZ2VkIGF0dHJpYnV0ZXNcbiAgICBmb3IgKG1lbWJlck5hbWUgaW4gbmV3Vm5vZGVBdHRycykge1xuICAgICAgICBzZXRBY2Nlc3NvcihlbG0sIG1lbWJlck5hbWUsIG9sZFZub2RlQXR0cnNbbWVtYmVyTmFtZV0sIG5ld1Zub2RlQXR0cnNbbWVtYmVyTmFtZV0sIGlzU3ZnTW9kZSwgbmV3Vm5vZGUuJGZsYWdzJCk7XG4gICAgfVxufTtcbi8qKlxuICogQ3JlYXRlIGEgRE9NIE5vZGUgY29ycmVzcG9uZGluZyB0byBvbmUgb2YgdGhlIGNoaWxkcmVuIG9mIGEgZ2l2ZW4gVk5vZGUuXG4gKlxuICogQHBhcmFtIG9sZFBhcmVudFZOb2RlIHRoZSBwYXJlbnQgVk5vZGUgZnJvbSB0aGUgcHJldmlvdXMgcmVuZGVyXG4gKiBAcGFyYW0gbmV3UGFyZW50Vk5vZGUgdGhlIHBhcmVudCBWTm9kZSBmcm9tIHRoZSBjdXJyZW50IHJlbmRlclxuICogQHBhcmFtIGNoaWxkSW5kZXggdGhlIGluZGV4IG9mIHRoZSBWTm9kZSwgaW4gdGhlIF9uZXdfIHBhcmVudCBub2RlJ3NcbiAqIGNoaWxkcmVuLCBmb3Igd2hpY2ggd2Ugd2lsbCBjcmVhdGUgYSBuZXcgRE9NIG5vZGVcbiAqIEBwYXJhbSBwYXJlbnRFbG0gdGhlIHBhcmVudCBET00gbm9kZSB3aGljaCBvdXIgbmV3IG5vZGUgd2lsbCBiZSBhIGNoaWxkIG9mXG4gKiBAcmV0dXJucyB0aGUgbmV3bHkgY3JlYXRlZCBub2RlXG4gKi9cbmNvbnN0IGNyZWF0ZUVsbSA9IChvbGRQYXJlbnRWTm9kZSwgbmV3UGFyZW50Vk5vZGUsIGNoaWxkSW5kZXgsIHBhcmVudEVsbSkgPT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XG4gICAgY29uc3QgbmV3Vk5vZGUgPSBuZXdQYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkSW5kZXhdO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZWxtO1xuICAgIGxldCBjaGlsZE5vZGU7XG4gICAgbGV0IG9sZFZOb2RlO1xuICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiAhdXNlTmF0aXZlU2hhZG93RG9tKSB7XG4gICAgICAgIC8vIHJlbWVtYmVyIGZvciBsYXRlciB3ZSBuZWVkIHRvIGNoZWNrIHRvIHJlbG9jYXRlIG5vZGVzXG4gICAgICAgIGNoZWNrU2xvdFJlbG9jYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKG5ld1ZOb2RlLiR0YWckID09PSAnc2xvdCcpIHtcbiAgICAgICAgICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgICAgICAgICAgLy8gc2NvcGVkIGNzcyBuZWVkcyB0byBhZGQgaXRzIHNjb3BlZCBpZCB0byB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBwYXJlbnRFbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1zJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWTm9kZS4kZmxhZ3MkIHw9IG5ld1ZOb2RlLiRjaGlsZHJlbiRcbiAgICAgICAgICAgICAgICA/IC8vIHNsb3QgZWxlbWVudCBoYXMgZmFsbGJhY2sgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAyIC8qIFZOT0RFX0ZMQUdTLmlzU2xvdEZhbGxiYWNrICovXG4gICAgICAgICAgICAgICAgOiAvLyBzbG90IGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBmYWxsYmFjayBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIDEgLyogVk5PREVfRkxBR1MuaXNTbG90UmVmZXJlbmNlICovO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChCVUlMRC5pc0RldiAmJiBuZXdWTm9kZS4kZWxtJCkge1xuICAgICAgICBjb25zb2xlRGV2RXJyb3IoYFRoZSBKU1ggJHtuZXdWTm9kZS4kdGV4dCQgIT09IG51bGwgPyBgXCIke25ld1ZOb2RlLiR0ZXh0JH1cIiB0ZXh0YCA6IGBcIiR7bmV3Vk5vZGUuJHRhZyR9XCIgZWxlbWVudGB9IG5vZGUgc2hvdWxkIG5vdCBiZSBzaGFyZWQgd2l0aGluIHRoZSBzYW1lIHJlbmRlcmVyLiBUaGUgcmVuZGVyZXIgY2FjaGVzIGVsZW1lbnQgbG9va3VwcyBpbiBvcmRlciB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLiBIb3dldmVyLCBhIHNpZGUgZWZmZWN0IGZyb20gdGhpcyBpcyB0aGF0IHRoZSBleGFjdCBzYW1lIEpTWCBub2RlIHNob3VsZCBub3QgYmUgcmV1c2VkLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBwbGVhc2Ugc2VlIGh0dHBzOi8vc3RlbmNpbGpzLmNvbS9kb2NzL3RlbXBsYXRpbmctanN4I2F2b2lkLXNoYXJlZC1qc3gtbm9kZXNgKTtcbiAgICB9XG4gICAgaWYgKEJVSUxELnZkb21UZXh0ICYmIG5ld1ZOb2RlLiR0ZXh0JCAhPT0gbnVsbCkge1xuICAgICAgICAvLyBjcmVhdGUgdGV4dCBub2RlXG4gICAgICAgIGVsbSA9IG5ld1ZOb2RlLiRlbG0kID0gZG9jLmNyZWF0ZVRleHROb2RlKG5ld1ZOb2RlLiR0ZXh0JCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIG5ld1ZOb2RlLiRmbGFncyQgJiAxIC8qIFZOT0RFX0ZMQUdTLmlzU2xvdFJlZmVyZW5jZSAqLykge1xuICAgICAgICAvLyBjcmVhdGUgYSBzbG90IHJlZmVyZW5jZSBub2RlXG4gICAgICAgIGVsbSA9IG5ld1ZOb2RlLiRlbG0kID1cbiAgICAgICAgICAgIEJVSUxELmlzRGVidWcgfHwgQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgPyBzbG90UmVmZXJlbmNlRGVidWdOb2RlKG5ld1ZOb2RlKSA6IGRvYy5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoQlVJTEQuc3ZnICYmICFpc1N2Z01vZGUpIHtcbiAgICAgICAgICAgIGlzU3ZnTW9kZSA9IG5ld1ZOb2RlLiR0YWckID09PSAnc3ZnJztcbiAgICAgICAgfVxuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudFxuICAgICAgICBlbG0gPSBuZXdWTm9kZS4kZWxtJCA9IChCVUlMRC5zdmdcbiAgICAgICAgICAgID8gZG9jLmNyZWF0ZUVsZW1lbnROUyhpc1N2Z01vZGUgPyBTVkdfTlMgOiBIVE1MX05TLCBCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiBuZXdWTm9kZS4kZmxhZ3MkICYgMiAvKiBWTk9ERV9GTEFHUy5pc1Nsb3RGYWxsYmFjayAqL1xuICAgICAgICAgICAgICAgID8gJ3Nsb3QtZmInXG4gICAgICAgICAgICAgICAgOiBuZXdWTm9kZS4kdGFnJClcbiAgICAgICAgICAgIDogZG9jLmNyZWF0ZUVsZW1lbnQoQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgbmV3Vk5vZGUuJGZsYWdzJCAmIDIgLyogVk5PREVfRkxBR1MuaXNTbG90RmFsbGJhY2sgKi9cbiAgICAgICAgICAgICAgICA/ICdzbG90LWZiJ1xuICAgICAgICAgICAgICAgIDogbmV3Vk5vZGUuJHRhZyQpKTtcbiAgICAgICAgaWYgKEJVSUxELnN2ZyAmJiBpc1N2Z01vZGUgJiYgbmV3Vk5vZGUuJHRhZyQgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgICAgICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIGNzcyBjbGFzc2VzLCBhdHRycywgcHJvcHMsIGxpc3RlbmVycywgZXRjLlxuICAgICAgICBpZiAoQlVJTEQudmRvbUF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdXBkYXRlRWxlbWVudChudWxsLCBuZXdWTm9kZSwgaXNTdmdNb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKEJVSUxELnNoYWRvd0RvbSB8fCBCVUlMRC5zY29wZWQpICYmIGlzRGVmKHNjb3BlSWQpICYmIGVsbVsncy1zaSddICE9PSBzY29wZUlkKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHNjb3BlSWQgYW5kIHRoaXMgaXMgdGhlIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyB0aGVuIGxldCdzIGFkZCB0aGUgc2NvcGVJZCBhcyBhIGNzcyBjbGFzc1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoKGVsbVsncy1zaSddID0gc2NvcGVJZCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWTm9kZS4kY2hpbGRyZW4kKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbmV3Vk5vZGUuJGNoaWxkcmVuJC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgbm9kZVxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNyZWF0ZUVsbShvbGRQYXJlbnRWTm9kZSwgbmV3Vk5vZGUsIGksIGVsbSk7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIG5vZGUgY291bGQgaGF2ZSBiZWVuIG51bGxcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBvdXIgbmV3IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgZWxtLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5zdmcpIHtcbiAgICAgICAgICAgIGlmIChuZXdWTm9kZS4kdGFnJCA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHJlc2V0IHRoZSBTVkcgY29udGV4dCB3aGVuIHdlJ3JlIGV4aXRpbmcgPHN2Zz4gZWxlbWVudFxuICAgICAgICAgICAgICAgIGlzU3ZnTW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWxtLnRhZ05hbWUgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIC8vIFJlZW50ZXIgU1ZHIGNvbnRleHQgd2hlbiB3ZSdyZSBleGl0aW5nIDxmb3JlaWduT2JqZWN0PiBlbGVtZW50XG4gICAgICAgICAgICAgICAgaXNTdmdNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgZWxtWydzLWhuJ10gPSBob3N0VGFnTmFtZTtcbiAgICAgICAgaWYgKG5ld1ZOb2RlLiRmbGFncyQgJiAoMiAvKiBWTk9ERV9GTEFHUy5pc1Nsb3RGYWxsYmFjayAqLyB8IDEgLyogVk5PREVfRkxBR1MuaXNTbG90UmVmZXJlbmNlICovKSkge1xuICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhlIGNvbnRlbnQgcmVmZXJlbmNlIGNvbW1lbnRcbiAgICAgICAgICAgIGVsbVsncy1zciddID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHJlbWVtYmVyIHRoZSBjb250ZW50IHJlZmVyZW5jZSBjb21tZW50XG4gICAgICAgICAgICBlbG1bJ3MtY3InXSA9IGNvbnRlbnRSZWY7XG4gICAgICAgICAgICAvLyByZW1lbWJlciB0aGUgc2xvdCBuYW1lLCBvciBlbXB0eSBzdHJpbmcgZm9yIGRlZmF1bHQgc2xvdFxuICAgICAgICAgICAgZWxtWydzLXNuJ10gPSBuZXdWTm9kZS4kbmFtZSQgfHwgJyc7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB3ZSd2ZSBnb3QgYW4gb2xkIHZub2RlIGZvciB0aGlzIHNsb3RcbiAgICAgICAgICAgIG9sZFZOb2RlID0gb2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuJGNoaWxkcmVuJCAmJiBvbGRQYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkSW5kZXhdO1xuICAgICAgICAgICAgaWYgKG9sZFZOb2RlICYmIG9sZFZOb2RlLiR0YWckID09PSBuZXdWTm9kZS4kdGFnJCAmJiBvbGRQYXJlbnRWTm9kZS4kZWxtJCkge1xuICAgICAgICAgICAgICAgIC8vIHdlJ3ZlIGdvdCBhbiBvbGQgc2xvdCB2bm9kZSBhbmQgdGhlIHdyYXBwZXIgaXMgYmVpbmcgcmVwbGFjZWRcbiAgICAgICAgICAgICAgICAvLyBzbyBsZXQncyBtb3ZlIHRoZSBvbGQgc2xvdCBjb250ZW50IGJhY2sgdG8gaXQncyBvcmlnaW5hbCBsb2NhdGlvblxuICAgICAgICAgICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24ob2xkUGFyZW50Vk5vZGUuJGVsbSQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxtO1xufTtcbmNvbnN0IHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24gPSAocGFyZW50RWxtLCByZWN1cnNpdmUpID0+IHtcbiAgICBwbHQuJGZsYWdzJCB8PSAxIC8qIFBMQVRGT1JNX0ZMQUdTLmlzVG1wRGlzY29ubmVjdGVkICovO1xuICAgIGNvbnN0IG9sZFNsb3RDaGlsZE5vZGVzID0gcGFyZW50RWxtLmNoaWxkTm9kZXM7XG4gICAgZm9yIChsZXQgaSA9IG9sZFNsb3RDaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IG9sZFNsb3RDaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiAoY2hpbGROb2RlWydzLWhuJ10gIT09IGhvc3RUYWdOYW1lICYmIGNoaWxkTm9kZVsncy1vbCddKSB7XG4gICAgICAgICAgICAvLyAvLyB0aGlzIGNoaWxkIG5vZGUgaW4gdGhlIG9sZCBlbGVtZW50IGlzIGZyb20gYW5vdGhlciBjb21wb25lbnRcbiAgICAgICAgICAgIC8vIC8vIHJlbW92ZSB0aGlzIG5vZGUgZnJvbSB0aGUgb2xkIHNsb3QncyBwYXJlbnRcbiAgICAgICAgICAgIC8vIGNoaWxkTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIGFuZCByZWxvY2F0ZSBpdCBiYWNrIHRvIGl0J3Mgb3JpZ2luYWwgbG9jYXRpb25cbiAgICAgICAgICAgIHBhcmVudFJlZmVyZW5jZU5vZGUoY2hpbGROb2RlKS5pbnNlcnRCZWZvcmUoY2hpbGROb2RlLCByZWZlcmVuY2VOb2RlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBvbGQgb3JpZ2luYWwgbG9jYXRpb24gY29tbWVudCBlbnRpcmVseVxuICAgICAgICAgICAgLy8gbGF0ZXIgb24gdGhlIHBhdGNoIGZ1bmN0aW9uIHdpbGwga25vdyB3aGF0IHRvIGRvXG4gICAgICAgICAgICAvLyBhbmQgbW92ZSB0aGlzIHRvIHRoZSBjb3JyZWN0IHNwb3QgaW4gbmVlZCBiZVxuICAgICAgICAgICAgY2hpbGROb2RlWydzLW9sJ10ucmVtb3ZlKCk7XG4gICAgICAgICAgICBjaGlsZE5vZGVbJ3Mtb2wnXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNoZWNrU2xvdFJlbG9jYXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVjdXJzaXZlKSB7XG4gICAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKGNoaWxkTm9kZSwgcmVjdXJzaXZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbHQuJGZsYWdzJCAmPSB+MSAvKiBQTEFURk9STV9GTEFHUy5pc1RtcERpc2Nvbm5lY3RlZCAqLztcbn07XG4vKipcbiAqIENyZWF0ZSBET00gbm9kZXMgY29ycmVzcG9uZGluZyB0byBhIGxpc3Qgb2Yge0BsaW5rIGQuVm5vZGV9IG9iamVjdHMgYW5kXG4gKiBhZGQgdGhlbSB0byB0aGUgRE9NIGluIHRoZSBhcHByb3ByaWF0ZSBwbGFjZS5cbiAqXG4gKiBAcGFyYW0gcGFyZW50RWxtIHRoZSBET00gbm9kZSB3aGljaCBzaG91bGQgYmUgdXNlZCBhcyBhIHBhcmVudCBmb3IgdGhlIG5ld1xuICogRE9NIG5vZGVzXG4gKiBAcGFyYW0gYmVmb3JlIGEgY2hpbGQgb2YgdGhlIGBwYXJlbnRFbG1gIHdoaWNoIHRoZSBuZXcgY2hpbGRyZW4gc2hvdWxkIGJlXG4gKiBpbnNlcnRlZCBiZWZvcmUgKG9wdGlvbmFsKVxuICogQHBhcmFtIHBhcmVudFZOb2RlIHRoZSBwYXJlbnQgdmlydHVhbCBET00gbm9kZVxuICogQHBhcmFtIHZub2RlcyB0aGUgbmV3IGNoaWxkIHZpcnR1YWwgRE9NIG5vZGVzIHRvIHByb2R1Y2UgRE9NIG5vZGVzIGZvclxuICogQHBhcmFtIHN0YXJ0SWR4IHRoZSBpbmRleCBpbiB0aGUgY2hpbGQgdmlydHVhbCBET00gbm9kZXMgYXQgd2hpY2ggdG8gc3RhcnRcbiAqIGNyZWF0aW5nIERPTSBub2RlcyAoaW5jbHVzaXZlKVxuICogQHBhcmFtIGVuZElkeCB0aGUgaW5kZXggaW4gdGhlIGNoaWxkIHZpcnR1YWwgRE9NIG5vZGVzIGF0IHdoaWNoIHRvIHN0b3BcbiAqIGNyZWF0aW5nIERPTSBub2RlcyAoaW5jbHVzaXZlKVxuICovXG5jb25zdCBhZGRWbm9kZXMgPSAocGFyZW50RWxtLCBiZWZvcmUsIHBhcmVudFZOb2RlLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgpID0+IHtcbiAgICBsZXQgY29udGFpbmVyRWxtID0gKChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiBwYXJlbnRFbG1bJ3MtY3InXSAmJiBwYXJlbnRFbG1bJ3MtY3InXS5wYXJlbnROb2RlKSB8fCBwYXJlbnRFbG0pO1xuICAgIGxldCBjaGlsZE5vZGU7XG4gICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiBjb250YWluZXJFbG0uc2hhZG93Um9vdCAmJiBjb250YWluZXJFbG0udGFnTmFtZSA9PT0gaG9zdFRhZ05hbWUpIHtcbiAgICAgICAgY29udGFpbmVyRWxtID0gY29udGFpbmVyRWxtLnNoYWRvd1Jvb3Q7XG4gICAgfVxuICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgICAgaWYgKHZub2Rlc1tzdGFydElkeF0pIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNyZWF0ZUVsbShudWxsLCBwYXJlbnRWTm9kZSwgc3RhcnRJZHgsIHBhcmVudEVsbSk7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgdm5vZGVzW3N0YXJ0SWR4XS4kZWxtJCA9IGNoaWxkTm9kZTtcbiAgICAgICAgICAgICAgICBjb250YWluZXJFbG0uaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZSwgQlVJTEQuc2xvdFJlbG9jYXRpb24gPyByZWZlcmVuY2VOb2RlKGJlZm9yZSkgOiBiZWZvcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogUmVtb3ZlIHRoZSBET00gZWxlbWVudHMgY29ycmVzcG9uZGluZyB0byBhIGxpc3Qgb2Yge0BsaW5rIGQuVk5vZGV9IG9iamVjdHMuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvLCBmb3IgaW5zdGFuY2UsIGNsZWFuIHVwIGFmdGVyIGEgbGlzdCBvZiBjaGlsZHJlbiB3aGljaFxuICogc2hvdWxkIG5vIGxvbmdlciBiZSBzaG93bi5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFsc28gaGFuZGxlcyBzb21lIG9mIFN0ZW5jaWwncyBzbG90IHJlbG9jYXRpb24gbG9naWMuXG4gKlxuICogQHBhcmFtIHZub2RlcyBhIGxpc3Qgb2YgdmlydHVhbCBET00gbm9kZXMgdG8gcmVtb3ZlXG4gKiBAcGFyYW0gc3RhcnRJZHggdGhlIGluZGV4IGF0IHdoaWNoIHRvIHN0YXJ0IHJlbW92aW5nIG5vZGVzIChpbmNsdXNpdmUpXG4gKiBAcGFyYW0gZW5kSWR4IHRoZSBpbmRleCBhdCB3aGljaCB0byBzdG9wIHJlbW92aW5nIG5vZGVzIChpbmNsdXNpdmUpXG4gKiBAcGFyYW0gdm5vZGUgYSBWTm9kZVxuICogQHBhcmFtIGVsbSBhbiBlbGVtZW50XG4gKi9cbmNvbnN0IHJlbW92ZVZub2RlcyA9ICh2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgsIHZub2RlLCBlbG0pID0+IHtcbiAgICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XG4gICAgICAgIGlmICgodm5vZGUgPSB2bm9kZXNbc3RhcnRJZHhdKSkge1xuICAgICAgICAgICAgZWxtID0gdm5vZGUuJGVsbSQ7XG4gICAgICAgICAgICBjYWxsTm9kZVJlZnModm5vZGUpO1xuICAgICAgICAgICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UncmUgcmVtb3ZpbmcgdGhpcyBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gc28gaXQncyBwb3NzaWJsZSB3ZSBuZWVkIHRvIHNob3cgc2xvdCBmYWxsYmFjayBjb250ZW50IG5vd1xuICAgICAgICAgICAgICAgIGNoZWNrU2xvdEZhbGxiYWNrVmlzaWJpbGl0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGVsbVsncy1vbCddKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgb3JpZ2luYWwgbG9jYXRpb24gY29tbWVudFxuICAgICAgICAgICAgICAgICAgICBlbG1bJ3Mtb2wnXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBjaGlsZCBub2RlcyBvZiB0aGUgbm9kZVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGF0J3MgYmVpbmcgcmVtb3ZlZCBhcmUgc2xvdCBub2Rlc1xuICAgICAgICAgICAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKGVsbSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSB2bm9kZSdzIGVsZW1lbnQgZnJvbSB0aGUgZG9tXG4gICAgICAgICAgICBlbG0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gKiBSZWNvbmNpbGUgdGhlIGNoaWxkcmVuIG9mIGEgbmV3IFZOb2RlIHdpdGggdGhlIGNoaWxkcmVuIG9mIGFuIG9sZCBWTm9kZSBieVxuICogdHJhdmVyc2luZyB0aGUgdHdvIGNvbGxlY3Rpb25zIG9mIGNoaWxkcmVuLCBpZGVudGlmeWluZyBub2RlcyB0aGF0IGFyZVxuICogY29uc2VydmVkIG9yIGNoYW5nZWQsIGNhbGxpbmcgb3V0IHRvIGBwYXRjaGAgdG8gbWFrZSBhbnkgbmVjZXNzYXJ5XG4gKiB1cGRhdGVzIHRvIHRoZSBET00sIGFuZCByZWFycmFuZ2luZyBET00gbm9kZXMgYXMgbmVlZGVkLlxuICpcbiAqIFRoZSBhbGdvcml0aG0gZm9yIHJlY29uY2lsaW5nIGNoaWxkcmVuIHdvcmtzIGJ5IGFuYWx5emluZyB0d28gJ3dpbmRvd3MnIG9udG9cbiAqIHRoZSB0d28gYXJyYXlzIG9mIGNoaWxkcmVuIChgb2xkQ2hgIGFuZCBgbmV3Q2hgKS4gV2Uga2VlcCB0cmFjayBvZiB0aGVcbiAqICd3aW5kb3dzJyBieSBzdG9yaW5nIHN0YXJ0IGFuZCBlbmQgaW5kaWNlcyBhbmQgcmVmZXJlbmNlcyB0byB0aGVcbiAqIGNvcnJlc3BvbmRpbmcgYXJyYXkgZW50cmllcy4gSW5pdGlhbGx5IHRoZSB0d28gJ3dpbmRvd3MnIGFyZSBiYXNpY2FsbHkgZXF1YWxcbiAqIHRvIHRoZSBlbnRpcmUgYXJyYXksIGJ1dCB3ZSBwcm9ncmVzc2l2ZWx5IG5hcnJvdyB0aGUgd2luZG93cyB1bnRpbCB0aGVyZSBhcmVcbiAqIG5vIGNoaWxkcmVuIGxlZnQgdG8gdXBkYXRlIGJ5IGRvaW5nIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogMS4gU2tpcCBhbnkgYG51bGxgIGVudHJpZXMgYXQgdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIHR3byBhcnJheXMsIHNvXG4gKiAgICB0aGF0IGlmIHdlIGhhdmUgYW4gaW5pdGlhbCBhcnJheSBsaWtlIHRoZSBmb2xsb3dpbmcgd2UnbGwgZW5kIHVwIGRlYWxpbmdcbiAqICAgIG9ubHkgd2l0aCBhIHdpbmRvdyBib3VuZGVkIGJ5IHRoZSBoaWdobGlnaHRlZCBlbGVtZW50czpcbiAqXG4gKiAgICBbbnVsbCwgbnVsbCwgVk5vZGUxICwgLi4uICwgVk5vZGUyLCBudWxsLCBudWxsXVxuICogICAgICAgICAgICAgICAgIF5eXl5eXiAgICAgICAgIF5eXl5eXlxuICpcbiAqIDIuIENoZWNrIHRvIHNlZSBpZiB0aGUgZWxlbWVudHMgYXQgdGhlIGhlYWQgYW5kIHRhaWwgcG9zaXRpb25zIGFyZSBlcXVhbFxuICogICAgYWNyb3NzIHRoZSB3aW5kb3dzLiBUaGlzIHdpbGwgYmFzaWNhbGx5IGRldGVjdCBlbGVtZW50cyB3aGljaCBoYXZlbid0XG4gKiAgICBiZWVuIGFkZGVkLCByZW1vdmVkLCBvciBjaGFuZ2VkIHBvc2l0aW9uLCBpLmUuIGlmIHlvdSBoYWQgdGhlIGZvbGxvd2luZ1xuICogICAgVk5vZGUgZWxlbWVudHMgKHJlcHJlc2VudGVkIGFzIEhUTUwpOlxuICpcbiAqICAgIG9sZFZOb2RlOiBgPGRpdj48cD48c3Bhbj5IRVk8L3NwYW4+PC9wPjwvZGl2PmBcbiAqICAgIG5ld1ZOb2RlOiBgPGRpdj48cD48c3Bhbj5USEVSRTwvc3Bhbj48L3A+PC9kaXY+YFxuICpcbiAqICAgIFRoZW4gd2hlbiBjb21wYXJpbmcgdGhlIGNoaWxkcmVuIG9mIHRoZSBgPGRpdj5gIHRhZyB3ZSBjaGVjayB0aGUgZXF1YWxpdHlcbiAqICAgIG9mIHRoZSBWTm9kZXMgY29ycmVzcG9uZGluZyB0byB0aGUgYDxwPmAgdGFncyBhbmQsIHNpbmNlIHRoZXkgYXJlIHRoZVxuICogICAgc2FtZSB0YWcgaW4gdGhlIHNhbWUgcG9zaXRpb24sIHdlJ2QgYmUgYWJsZSB0byBhdm9pZCBjb21wbGV0ZWx5XG4gKiAgICByZS1yZW5kZXJpbmcgdGhlIHN1YnRyZWUgdW5kZXIgdGhlbSB3aXRoIGEgbmV3IERPTSBlbGVtZW50IGFuZCB3b3VsZCBqdXN0XG4gKiAgICBjYWxsIG91dCB0byBgcGF0Y2hgIHRvIGhhbmRsZSByZWNvbmNpbGluZyB0aGVpciBjaGlsZHJlbiBhbmQgc28gb24uXG4gKlxuICogMy4gQ2hlY2ssIGZvciBib3RoIHdpbmRvd3MsIHRvIHNlZSBpZiB0aGUgZWxlbWVudCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZVxuICogICAgd2luZG93IGNvcnJlc3BvbmRzIHRvIHRoZSBlbGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIG90aGVyIHdpbmRvdy4gVGhpcyBpc1xuICogICAgYSBoZXVyaXN0aWMgd2hpY2ggd2lsbCBsZXQgdXMgaWRlbnRpZnkgX3NvbWVfIHNpdHVhdGlvbnMgaW4gd2hpY2hcbiAqICAgIGVsZW1lbnRzIGhhdmUgY2hhbmdlZCBwb3NpdGlvbiwgZm9yIGluc3RhbmNlIGl0IF9zaG91bGRfIGRldGVjdCB0aGF0IHRoZVxuICogICAgY2hpbGRyZW4gbm9kZXMgdGhlbXNlbHZlcyBoYXZlIG5vdCBjaGFuZ2VkIGJ1dCBtZXJlbHkgbW92ZWQgaW4gdGhlXG4gKiAgICBmb2xsb3dpbmcgZXhhbXBsZTpcbiAqXG4gKiAgICBvbGRWTm9kZTogYDxkaXY+PGVsZW1lbnQtb25lIC8+PGVsZW1lbnQtdHdvIC8+PC9kaXY+YFxuICogICAgbmV3Vk5vZGU6IGA8ZGl2PjxlbGVtZW50LXR3byAvPjxlbGVtZW50LW9uZSAvPjwvZGl2PmBcbiAqXG4gKiAgICBJZiB3ZSBmaW5kIGNhc2VzIGxpa2UgdGhpcyB0aGVuIHdlIGFsc28gbmVlZCB0byBtb3ZlIHRoZSBjb25jcmV0ZSBET01cbiAqICAgIGVsZW1lbnRzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG1vdmVkIGNoaWxkcmVuIHRvIHdyaXRlIHRoZSByZS1vcmRlciB0byB0aGVcbiAqICAgIERPTS5cbiAqXG4gKiA0LiBGaW5hbGx5LCBpZiBWTm9kZXMgaGF2ZSB0aGUgYGtleWAgYXR0cmlidXRlIHNldCBvbiB0aGVtIHdlIGNoZWNrIGZvciBhbnlcbiAqICAgIG5vZGVzIGluIHRoZSBvbGQgY2hpbGRyZW4gd2hpY2ggaGF2ZSB0aGUgc2FtZSBrZXkgYXMgdGhlIGZpcnN0IGVsZW1lbnQgaW5cbiAqICAgIG91ciB3aW5kb3cgb24gdGhlIG5ldyBjaGlsZHJlbi4gSWYgd2UgZmluZCBzdWNoIGEgbm9kZSB3ZSBoYW5kbGUgY2FsbGluZ1xuICogICAgb3V0IHRvIGBwYXRjaGAsIG1vdmluZyByZWxldmFudCBET00gbm9kZXMsIGFuZCBzbyBvbiwgaW4gYWNjb3JkYW5jZSB3aXRoXG4gKiAgICB3aGF0IHdlIGZpbmQuXG4gKlxuICogRmluYWxseSwgb25jZSB3ZSd2ZSBuYXJyb3dlZCBvdXIgJ3dpbmRvd3MnIHRvIHRoZSBwb2ludCB0aGF0IGVpdGhlciBvZiB0aGVtXG4gKiBjb2xsYXBzZSAoaS5lLiB0aGV5IGhhdmUgbGVuZ3RoIDApIHdlIHRoZW4gaGFuZGxlIGFueSByZW1haW5pbmcgVk5vZGVcbiAqIGluc2VydGlvbiBvciBkZWxldGlvbiB0aGF0IG5lZWRzIHRvIGhhcHBlbiB0byBnZXQgYSBET00gc3RhdGUgdGhhdCBjb3JyZWN0bHlcbiAqIHJlZmxlY3RzIHRoZSBuZXcgY2hpbGQgVk5vZGVzLiBJZiwgZm9yIGluc3RhbmNlLCBhZnRlciBvdXIgd2luZG93IG9uIHRoZSBvbGRcbiAqIGNoaWxkcmVuIGhhcyBjb2xsYXBzZWQgd2Ugc3RpbGwgaGF2ZSBtb3JlIG5vZGVzIG9uIHRoZSBuZXcgY2hpbGRyZW4gdGhhdFxuICogd2UgaGF2ZW4ndCBkZWFsdCB3aXRoIHlldCB0aGVuIHdlIG5lZWQgdG8gYWRkIHRoZW0sIG9yIGlmIHRoZSBuZXcgY2hpbGRyZW5cbiAqIGNvbGxhcHNlIGJ1dCB3ZSBzdGlsbCBoYXZlIHVuaGFuZGxlZCBfb2xkXyBjaGlsZHJlbiB0aGVuIHdlIG5lZWQgdG8gbWFrZVxuICogc3VyZSB0aGUgY29ycmVzcG9uZGluZyBET00gbm9kZXMgYXJlIHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHBhcmVudEVsbSB0aGUgbm9kZSBpbnRvIHdoaWNoIHRoZSBwYXJlbnQgVk5vZGUgaXMgcmVuZGVyZWRcbiAqIEBwYXJhbSBvbGRDaCB0aGUgb2xkIGNoaWxkcmVuIG9mIHRoZSBwYXJlbnQgbm9kZVxuICogQHBhcmFtIG5ld1ZOb2RlIHRoZSBuZXcgVk5vZGUgd2hpY2ggd2lsbCByZXBsYWNlIHRoZSBwYXJlbnRcbiAqIEBwYXJhbSBuZXdDaCB0aGUgbmV3IGNoaWxkcmVuIG9mIHRoZSBwYXJlbnQgbm9kZVxuICovXG5jb25zdCB1cGRhdGVDaGlsZHJlbiA9IChwYXJlbnRFbG0sIG9sZENoLCBuZXdWTm9kZSwgbmV3Q2gpID0+IHtcbiAgICBsZXQgb2xkU3RhcnRJZHggPSAwO1xuICAgIGxldCBuZXdTdGFydElkeCA9IDA7XG4gICAgbGV0IGlkeEluT2xkID0gMDtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IG9sZEVuZElkeCA9IG9sZENoLmxlbmd0aCAtIDE7XG4gICAgbGV0IG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFswXTtcbiAgICBsZXQgb2xkRW5kVm5vZGUgPSBvbGRDaFtvbGRFbmRJZHhdO1xuICAgIGxldCBuZXdFbmRJZHggPSBuZXdDaC5sZW5ndGggLSAxO1xuICAgIGxldCBuZXdTdGFydFZub2RlID0gbmV3Q2hbMF07XG4gICAgbGV0IG5ld0VuZFZub2RlID0gbmV3Q2hbbmV3RW5kSWR4XTtcbiAgICBsZXQgbm9kZTtcbiAgICBsZXQgZWxtVG9Nb3ZlO1xuICAgIHdoaWxlIChvbGRTdGFydElkeCA8PSBvbGRFbmRJZHggJiYgbmV3U3RhcnRJZHggPD0gbmV3RW5kSWR4KSB7XG4gICAgICAgIGlmIChvbGRTdGFydFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFZOb2RlIG1pZ2h0IGhhdmUgYmVlbiBtb3ZlZCBsZWZ0XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2xkRW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3U3RhcnRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3RW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdGFydCBub2RlcyBhcmUgdGhlIHNhbWUgdGhlbiB3ZSBzaG91bGQgcGF0Y2ggdGhlIG5ldyBWTm9kZVxuICAgICAgICAgICAgLy8gb250byB0aGUgb2xkIG9uZSwgYW5kIGluY3JlbWVudCBvdXIgYG5ld1N0YXJ0SWR4YCBhbmQgYG9sZFN0YXJ0SWR4YFxuICAgICAgICAgICAgLy8gaW5kaWNlcyB0byByZWZsZWN0IHRoYXQuIFdlIGRvbid0IG5lZWQgdG8gbW92ZSBhbnkgRE9NIE5vZGVzIGFyb3VuZFxuICAgICAgICAgICAgLy8gc2luY2UgdGhpbmdzIGFyZSBtYXRjaGVkIHVwIGluIG9yZGVyLlxuICAgICAgICAgICAgcGF0Y2gob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSk7XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlKSkge1xuICAgICAgICAgICAgLy8gbGlrZXdpc2UsIGlmIHRoZSBlbmQgbm9kZXMgYXJlIHRoZSBzYW1lIHdlIHBhdGNoIG5ldyBvbnRvIG9sZCBhbmRcbiAgICAgICAgICAgIC8vIGRlY3JlbWVudCBvdXIgZW5kIGluZGljZXMsIGFuZCBhbHNvIGxpa2V3aXNlIGluIHRoaXMgY2FzZSB3ZSBkb24ndFxuICAgICAgICAgICAgLy8gbmVlZCB0byBtb3ZlIGFueSBET00gTm9kZXMuXG4gICAgICAgICAgICBwYXRjaChvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUpO1xuICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgICAgIC8vIGNhc2U6IFwiVm5vZGUgbW92ZWQgcmlnaHRcIlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFdlJ3ZlIGZvdW5kIHRoYXQgdGhlIGxhc3Qgbm9kZSBpbiBvdXIgd2luZG93IG9uIHRoZSBuZXcgY2hpbGRyZW4gaXNcbiAgICAgICAgICAgIC8vIHRoZSBzYW1lIFZOb2RlIGFzIHRoZSBfZmlyc3RfIG5vZGUgaW4gb3VyIHdpbmRvdyBvbiB0aGUgb2xkIGNoaWxkcmVuXG4gICAgICAgICAgICAvLyB3ZSdyZSBkZWFsaW5nIHdpdGggbm93LiBWaXN1YWxseSwgdGhpcyBpcyB0aGUgbGF5b3V0IG9mIHRoZXNlIHR3b1xuICAgICAgICAgICAgLy8gbm9kZXM6XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gbmV3Q2g6IFsuLi4sIG5ld1N0YXJ0Vm5vZGUgLCAuLi4gLCBuZXdFbmRWbm9kZSAsIC4uLl1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXl5eXl5eXl5eXl5cbiAgICAgICAgICAgIC8vIG9sZENoOiBbLi4uLCBvbGRTdGFydFZub2RlICwgLi4uICwgb2xkRW5kVm5vZGUgLCAuLi5dXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgXl5eXl5eXl5eXl5eXlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEluIHRoaXMgc2l0dWF0aW9uIHdlIG5lZWQgdG8gcGF0Y2ggYG5ld0VuZFZub2RlYCBvbnRvIGBvbGRTdGFydFZub2RlYFxuICAgICAgICAgICAgLy8gYW5kIG1vdmUgdGhlIERPTSBlbGVtZW50IGZvciBgb2xkU3RhcnRWbm9kZWAuXG4gICAgICAgICAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgKG9sZFN0YXJ0Vm5vZGUuJHRhZyQgPT09ICdzbG90JyB8fCBuZXdFbmRWbm9kZS4kdGFnJCA9PT0gJ3Nsb3QnKSkge1xuICAgICAgICAgICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24ob2xkU3RhcnRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRjaChvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSk7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIG1vdmUgdGhlIGVsZW1lbnQgZm9yIGBvbGRTdGFydFZub2RlYCBpbnRvIGEgcG9zaXRpb24gd2hpY2hcbiAgICAgICAgICAgIC8vIHdpbGwgYmUgYXBwcm9wcmlhdGUgZm9yIGBuZXdFbmRWbm9kZWAuIEZvciB0aGlzIHdlIGNhbiB1c2VcbiAgICAgICAgICAgIC8vIGAuaW5zZXJ0QmVmb3JlYCBhbmQgYG9sZEVuZFZub2RlLiRlbG0kLm5leHRTaWJsaW5nYC4gSWYgdGhlcmUgaXMgYVxuICAgICAgICAgICAgLy8gc2libGluZyBmb3IgYG9sZEVuZFZub2RlLiRlbG0kYCB0aGVuIHdlIHdhbnQgdG8gbW92ZSB0aGUgRE9NIG5vZGUgZm9yXG4gICAgICAgICAgICAvLyBgb2xkU3RhcnRWbm9kZWAgYmV0d2VlbiBgb2xkRW5kVm5vZGVgIGFuZCBpdCdzIHNpYmxpbmcsIGxpa2Ugc286XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPG9sZC1zdGFydC1ub2RlIC8+XG4gICAgICAgICAgICAvLyA8c29tZS1pbnRlcnZlbmluZy1ub2RlIC8+XG4gICAgICAgICAgICAvLyA8b2xkLWVuZC1ub2RlIC8+XG4gICAgICAgICAgICAvLyA8IS0tIC0+ICAgICAgICAgICAgICA8LS0gYG9sZFN0YXJ0Vm5vZGUuJGVsbSRgIHNob3VsZCBiZSBpbnNlcnRlZCBoZXJlXG4gICAgICAgICAgICAvLyA8bmV4dC1zaWJsaW5nIC8+XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSWYgaW5zdGVhZCBgb2xkRW5kVm5vZGUuJGVsbSRgIGhhcyBubyBzaWJsaW5nIHRoZW4gd2UganVzdCB3YW50IHRvIHB1dFxuICAgICAgICAgICAgLy8gdGhlIG5vZGUgZm9yIGBvbGRTdGFydFZub2RlYCBhdCB0aGUgZW5kIG9mIHRoZSBjaGlsZHJlbiBvZlxuICAgICAgICAgICAgLy8gYHBhcmVudEVsbWAuIEx1Y2tpbHksIGBOb2RlLm5leHRTaWJsaW5nYCB3aWxsIHJldHVybiBgbnVsbGAgaWYgdGhlcmVcbiAgICAgICAgICAgIC8vIGFyZW4ndCBhbnkgc2libGluZ3MsIGFuZCBwYXNzaW5nIGBudWxsYCB0byBgTm9kZS5pbnNlcnRCZWZvcmVgIHdpbGxcbiAgICAgICAgICAgIC8vIGFwcGVuZCBpdCB0byB0aGUgY2hpbGRyZW4gb2YgdGhlIHBhcmVudCBlbGVtZW50LlxuICAgICAgICAgICAgcGFyZW50RWxtLmluc2VydEJlZm9yZShvbGRTdGFydFZub2RlLiRlbG0kLCBvbGRFbmRWbm9kZS4kZWxtJC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgIC8vIGNhc2U6IFwiVm5vZGUgbW92ZWQgbGVmdFwiXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gV2UndmUgZm91bmQgdGhhdCB0aGUgZmlyc3Qgbm9kZSBpbiBvdXIgd2luZG93IG9uIHRoZSBuZXcgY2hpbGRyZW4gaXNcbiAgICAgICAgICAgIC8vIHRoZSBzYW1lIFZOb2RlIGFzIHRoZSBfbGFzdF8gbm9kZSBpbiBvdXIgd2luZG93IG9uIHRoZSBvbGQgY2hpbGRyZW4uXG4gICAgICAgICAgICAvLyBWaXN1YWxseSwgdGhpcyBpcyB0aGUgbGF5b3V0IG9mIHRoZXNlIHR3byBub2RlczpcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBuZXdDaDogWy4uLiwgbmV3U3RhcnRWbm9kZSAsIC4uLiAsIG5ld0VuZFZub2RlICwgLi4uXVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgIF5eXl5eXl5eXl5eXl5cbiAgICAgICAgICAgIC8vIG9sZENoOiBbLi4uLCBvbGRTdGFydFZub2RlICwgLi4uICwgb2xkRW5kVm5vZGUgLCAuLi5dXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF5eXl5eXl5eXl5eXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSW4gdGhpcyBzaXR1YXRpb24gd2UgbmVlZCB0byBwYXRjaCBgbmV3U3RhcnRWbm9kZWAgb250byBgb2xkRW5kVm5vZGVgXG4gICAgICAgICAgICAvLyAod2hpY2ggd2lsbCBoYW5kbGUgdXBkYXRpbmcgYW55IGNoYW5nZWQgYXR0cmlidXRlcywgcmVjb25jaWxpbmcgdGhlaXJcbiAgICAgICAgICAgIC8vIGNoaWxkcmVuIGV0YykgYnV0IHdlIGFsc28gbmVlZCB0byBtb3ZlIHRoZSBET00gbm9kZSB0byB3aGljaFxuICAgICAgICAgICAgLy8gYG9sZEVuZFZub2RlYCBjb3JyZXNwb25kcy5cbiAgICAgICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiAob2xkU3RhcnRWbm9kZS4kdGFnJCA9PT0gJ3Nsb3QnIHx8IG5ld0VuZFZub2RlLiR0YWckID09PSAnc2xvdCcpKSB7XG4gICAgICAgICAgICAgICAgcHV0QmFja0luT3JpZ2luYWxMb2NhdGlvbihvbGRFbmRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRjaChvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSk7XG4gICAgICAgICAgICAvLyBXZSd2ZSBhbHJlYWR5IGNoZWNrZWQgYWJvdmUgaWYgYG9sZFN0YXJ0Vm5vZGVgIGFuZCBgbmV3U3RhcnRWbm9kZWAgYXJlXG4gICAgICAgICAgICAvLyB0aGUgc2FtZSBub2RlLCBzbyBzaW5jZSB3ZSdyZSBoZXJlIHdlIGtub3cgdGhhdCB0aGV5IGFyZSBub3QuIFRodXMgd2VcbiAgICAgICAgICAgIC8vIGNhbiBtb3ZlIHRoZSBlbGVtZW50IGZvciBgb2xkRW5kVm5vZGVgIF9iZWZvcmVfIHRoZSBlbGVtZW50IGZvclxuICAgICAgICAgICAgLy8gYG9sZFN0YXJ0Vm5vZGVgLCBsZWF2aW5nIGBvbGRTdGFydFZub2RlYCB0byBiZSByZWNvbmNpbGVkIGluIHRoZVxuICAgICAgICAgICAgLy8gZnV0dXJlLlxuICAgICAgICAgICAgcGFyZW50RWxtLmluc2VydEJlZm9yZShvbGRFbmRWbm9kZS4kZWxtJCwgb2xkU3RhcnRWbm9kZS4kZWxtJCk7XG4gICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhlcmUgd2UgZG8gc29tZSBjaGVja3MgdG8gbWF0Y2ggdXAgb2xkIGFuZCBuZXcgbm9kZXMgYmFzZWQgb24gdGhlXG4gICAgICAgICAgICAvLyBgJGtleSRgIGF0dHJpYnV0ZSwgd2hpY2ggaXMgc2V0IGJ5IHB1dHRpbmcgYSBga2V5PVwibXkta2V5XCJgIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gaW4gdGhlIEpTWCBmb3IgYSBET00gZWxlbWVudCBpbiB0aGUgaW1wbGVtZW50YXRpb24gb2YgYSBTdGVuY2lsXG4gICAgICAgICAgICAvLyBjb21wb25lbnQuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnkgbm9kZXMgaW4gdGhlIGFycmF5IG9mIG9sZFxuICAgICAgICAgICAgLy8gY2hpbGRyZW4gd2hpY2ggaGF2ZSB0aGUgc2FtZSBrZXkgYXMgdGhlIGZpcnN0IG5vZGUgaW4gdGhlIG5ld1xuICAgICAgICAgICAgLy8gY2hpbGRyZW4uXG4gICAgICAgICAgICBpZHhJbk9sZCA9IC0xO1xuICAgICAgICAgICAgaWYgKEJVSUxELnZkb21LZXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBvbGRTdGFydElkeDsgaSA8PSBvbGRFbmRJZHg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkQ2hbaV0gJiYgb2xkQ2hbaV0uJGtleSQgIT09IG51bGwgJiYgb2xkQ2hbaV0uJGtleSQgPT09IG5ld1N0YXJ0Vm5vZGUuJGtleSQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeEluT2xkID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELnZkb21LZXkgJiYgaWR4SW5PbGQgPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGZvdW5kIGEgbm9kZSBpbiB0aGUgb2xkIGNoaWxkcmVuIHdoaWNoIG1hdGNoZXMgdXAgd2l0aCB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAvLyBub2RlIGluIHRoZSBuZXcgY2hpbGRyZW4hIFNvIGxldCdzIGRlYWwgd2l0aCB0aGF0XG4gICAgICAgICAgICAgICAgZWxtVG9Nb3ZlID0gb2xkQ2hbaWR4SW5PbGRdO1xuICAgICAgICAgICAgICAgIGlmIChlbG1Ub01vdmUuJHRhZyQgIT09IG5ld1N0YXJ0Vm5vZGUuJHRhZyQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHRhZyBkb2Vzbid0IG1hdGNoIHNvIHdlJ2xsIG5lZWQgYSBuZXcgRE9NIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNyZWF0ZUVsbShvbGRDaCAmJiBvbGRDaFtuZXdTdGFydElkeF0sIG5ld1ZOb2RlLCBpZHhJbk9sZCwgcGFyZW50RWxtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoKGVsbVRvTW92ZSwgbmV3U3RhcnRWbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGludmFsaWRhdGUgdGhlIG1hdGNoaW5nIG9sZCBub2RlIHNvIHRoYXQgd2Ugd29uJ3QgdHJ5IHRvIHVwZGF0ZSBpdFxuICAgICAgICAgICAgICAgICAgICAvLyBhZ2FpbiBsYXRlciBvblxuICAgICAgICAgICAgICAgICAgICBvbGRDaFtpZHhJbk9sZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBlbG1Ub01vdmUuJGVsbSQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFdlIGVpdGhlciBkaWRuJ3QgZmluZCBhbiBlbGVtZW50IGluIHRoZSBvbGQgY2hpbGRyZW4gdGhhdCBtYXRjaGVzXG4gICAgICAgICAgICAgICAgLy8gdGhlIGtleSBvZiB0aGUgZmlyc3QgbmV3IGNoaWxkIE9SIHRoZSBidWlsZCBpcyBub3QgdXNpbmcgYGtleWBcbiAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGF0IGFsbC4gSW4gZWl0aGVyIGNhc2Ugd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGZvciB0aGUgbmV3IG5vZGUuXG4gICAgICAgICAgICAgICAgbm9kZSA9IGNyZWF0ZUVsbShvbGRDaCAmJiBvbGRDaFtuZXdTdGFydElkeF0sIG5ld1ZOb2RlLCBuZXdTdGFydElkeCwgcGFyZW50RWxtKTtcbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGNyZWF0ZWQgYSBuZXcgbm9kZSB0aGVuIGhhbmRsZSBpbnNlcnRpbmcgaXQgdG8gdGhlIERPTVxuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRSZWZlcmVuY2VOb2RlKG9sZFN0YXJ0Vm5vZGUuJGVsbSQpLmluc2VydEJlZm9yZShub2RlLCByZWZlcmVuY2VOb2RlKG9sZFN0YXJ0Vm5vZGUuJGVsbSQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUuJGVsbSQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgb2xkU3RhcnRWbm9kZS4kZWxtJCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvbGRTdGFydElkeCA+IG9sZEVuZElkeCkge1xuICAgICAgICAvLyB3ZSBoYXZlIHNvbWUgbW9yZSBuZXcgbm9kZXMgdG8gYWRkIHdoaWNoIGRvbid0IG1hdGNoIHVwIHdpdGggb2xkIG5vZGVzXG4gICAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIG5ld0NoW25ld0VuZElkeCArIDFdID09IG51bGwgPyBudWxsIDogbmV3Q2hbbmV3RW5kSWR4ICsgMV0uJGVsbSQsIG5ld1ZOb2RlLCBuZXdDaCwgbmV3U3RhcnRJZHgsIG5ld0VuZElkeCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKEJVSUxELnVwZGF0YWJsZSAmJiBuZXdTdGFydElkeCA+IG5ld0VuZElkeCkge1xuICAgICAgICAvLyB0aGVyZSBhcmUgbm9kZXMgaW4gdGhlIGBvbGRDaGAgYXJyYXkgd2hpY2ggbm8gbG9uZ2VyIGNvcnJlc3BvbmQgdG8gbm9kZXNcbiAgICAgICAgLy8gaW4gdGhlIG5ldyBhcnJheSwgc28gbGV0cyByZW1vdmUgdGhlbSAod2hpY2ggZW50YWlscyBjbGVhbmluZyB1cCB0aGVcbiAgICAgICAgLy8gcmVsZXZhbnQgRE9NIG5vZGVzKVxuICAgICAgICByZW1vdmVWbm9kZXMob2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgIH1cbn07XG4vKipcbiAqIENvbXBhcmUgdHdvIFZOb2RlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgdGhlIHNhbWVcbiAqXG4gKiAqKk5CKio6IFRoaXMgZnVuY3Rpb24gaXMgYW4gZXF1YWxpdHkgX2hldXJpc3RpY18gYmFzZWQgb24gdGhlIGF2YWlsYWJsZVxuICogaW5mb3JtYXRpb24gc2V0IG9uIHRoZSB0d28gVk5vZGVzIGFuZCBjYW4gYmUgbWlzbGVhZGluZyB1bmRlciBjZXJ0YWluXG4gKiBjaXJjdW1zdGFuY2VzLiBJbiBwYXJ0aWN1bGFyLCBpZiB0aGUgdHdvIG5vZGVzIGRvIG5vdCBoYXZlIGBrZXlgIGF0dHJzXG4gKiAoYXZhaWxhYmxlIHVuZGVyIGAka2V5JGAgb24gVk5vZGVzKSB0aGVuIHRoZSBmdW5jdGlvbiBmYWxscyBiYWNrIG9uIG1lcmVseVxuICogY2hlY2tpbmcgdGhhdCB0aGV5IGhhdmUgdGhlIHNhbWUgdGFnLlxuICpcbiAqIFNvLCBpbiBvdGhlciB3b3JkcywgaWYgYGtleWAgYXR0cnMgYXJlIG5vdCBzZXQgb24gVk5vZGVzIHdoaWNoIG1heSBiZVxuICogY2hhbmdpbmcgb3JkZXIgd2l0aGluIGEgYGNoaWxkcmVuYCBhcnJheSBvciBzb21ldGhpbmcgYWxvbmcgdGhvc2UgbGluZXMgdGhlblxuICogd2UgY291bGQgb2J0YWluIGEgZmFsc2UgbmVnYXRpdmUgYW5kIHRoZW4gaGF2ZSB0byBkbyBuZWVkbGVzcyByZS1yZW5kZXJpbmdcbiAqIChpLmUuIHdlJ2Qgc2F5IHR3byBWTm9kZXMgYXJlbid0IGVxdWFsIHdoZW4gaW4gZmFjdCB0aGV5IHNob3VsZCBiZSkuXG4gKlxuICogQHBhcmFtIGxlZnRWTm9kZSB0aGUgZmlyc3QgVk5vZGUgdG8gY2hlY2tcbiAqIEBwYXJhbSByaWdodFZOb2RlIHRoZSBzZWNvbmQgVk5vZGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhleSdyZSBlcXVhbCBvciBub3RcbiAqL1xuY29uc3QgaXNTYW1lVm5vZGUgPSAobGVmdFZOb2RlLCByaWdodFZOb2RlKSA9PiB7XG4gICAgLy8gY29tcGFyZSBpZiB0d28gdm5vZGUgdG8gc2VlIGlmIHRoZXkncmUgXCJ0ZWNobmljYWxseVwiIHRoZSBzYW1lXG4gICAgLy8gbmVlZCB0byBoYXZlIHRoZSBzYW1lIGVsZW1lbnQgdGFnLCBhbmQgc2FtZSBrZXkgdG8gYmUgdGhlIHNhbWVcbiAgICBpZiAobGVmdFZOb2RlLiR0YWckID09PSByaWdodFZOb2RlLiR0YWckKSB7XG4gICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiBsZWZ0Vk5vZGUuJHRhZyQgPT09ICdzbG90Jykge1xuICAgICAgICAgICAgcmV0dXJuIGxlZnRWTm9kZS4kbmFtZSQgPT09IHJpZ2h0Vk5vZGUuJG5hbWUkO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMgd2lsbCBiZSBzZXQgaWYgY29tcG9uZW50cyBpbiB0aGUgYnVpbGQgaGF2ZSBga2V5YCBhdHRycyBzZXQgb24gdGhlbVxuICAgICAgICBpZiAoQlVJTEQudmRvbUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGxlZnRWTm9kZS4ka2V5JCA9PT0gcmlnaHRWTm9kZS4ka2V5JDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IHJlZmVyZW5jZU5vZGUgPSAobm9kZSkgPT4ge1xuICAgIC8vIHRoaXMgbm9kZSB3YXMgcmVsb2NhdGVkIHRvIGEgbmV3IGxvY2F0aW9uIGluIHRoZSBkb21cbiAgICAvLyBiZWNhdXNlIG9mIHNvbWUgb3RoZXIgY29tcG9uZW50J3Mgc2xvdFxuICAgIC8vIGJ1dCB3ZSBzdGlsbCBoYXZlIGFuIGh0bWwgY29tbWVudCBpbiBwbGFjZSBvZiB3aGVyZVxuICAgIC8vIGl0J3Mgb3JpZ2luYWwgbG9jYXRpb24gd2FzIGFjY29yZGluZyB0byBpdCdzIG9yaWdpbmFsIHZkb21cbiAgICByZXR1cm4gKG5vZGUgJiYgbm9kZVsncy1vbCddKSB8fCBub2RlO1xufTtcbmNvbnN0IHBhcmVudFJlZmVyZW5jZU5vZGUgPSAobm9kZSkgPT4gKG5vZGVbJ3Mtb2wnXSA/IG5vZGVbJ3Mtb2wnXSA6IG5vZGUpLnBhcmVudE5vZGU7XG4vKipcbiAqIEhhbmRsZSByZWNvbmNpbGluZyBhbiBvdXRkYXRlZCBWTm9kZSB3aXRoIGEgbmV3IG9uZSB3aGljaCBjb3JyZXNwb25kcyB0b1xuICogaXQuIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyBmbHVzaGluZyB1cGRhdGVzIHRvIHRoZSBET00gYW5kIHJlY29uY2lsaW5nIHRoZVxuICogY2hpbGRyZW4gb2YgdGhlIHR3byBub2RlcyAoaWYgYW55KS5cbiAqXG4gKiBAcGFyYW0gb2xkVk5vZGUgYW4gb2xkIFZOb2RlIHdob3NlIERPTSBlbGVtZW50IGFuZCBjaGlsZHJlbiB3ZSB3YW50IHRvIHVwZGF0ZVxuICogQHBhcmFtIG5ld1ZOb2RlIGEgbmV3IFZOb2RlIHJlcHJlc2VudGluZyBhbiB1cGRhdGVkIHZlcnNpb24gb2YgdGhlIG9sZCBvbmVcbiAqL1xuY29uc3QgcGF0Y2ggPSAob2xkVk5vZGUsIG5ld1ZOb2RlKSA9PiB7XG4gICAgY29uc3QgZWxtID0gKG5ld1ZOb2RlLiRlbG0kID0gb2xkVk5vZGUuJGVsbSQpO1xuICAgIGNvbnN0IG9sZENoaWxkcmVuID0gb2xkVk5vZGUuJGNoaWxkcmVuJDtcbiAgICBjb25zdCBuZXdDaGlsZHJlbiA9IG5ld1ZOb2RlLiRjaGlsZHJlbiQ7XG4gICAgY29uc3QgdGFnID0gbmV3Vk5vZGUuJHRhZyQ7XG4gICAgY29uc3QgdGV4dCA9IG5ld1ZOb2RlLiR0ZXh0JDtcbiAgICBsZXQgZGVmYXVsdEhvbGRlcjtcbiAgICBpZiAoIUJVSUxELnZkb21UZXh0IHx8IHRleHQgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKEJVSUxELnN2Zykge1xuICAgICAgICAgICAgLy8gdGVzdCBpZiB3ZSdyZSByZW5kZXJpbmcgYW4gc3ZnIGVsZW1lbnQsIG9yIHN0aWxsIHJlbmRlcmluZyBub2RlcyBpbnNpZGUgb2Ygb25lXG4gICAgICAgICAgICAvLyBvbmx5IGFkZCB0aGlzIHRvIHRoZSB3aGVuIHRoZSBjb21waWxlciBzZWVzIHdlJ3JlIHVzaW5nIGFuIHN2ZyBzb21ld2hlcmVcbiAgICAgICAgICAgIGlzU3ZnTW9kZSA9IHRhZyA9PT0gJ3N2ZycgPyB0cnVlIDogdGFnID09PSAnZm9yZWlnbk9iamVjdCcgPyBmYWxzZSA6IGlzU3ZnTW9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQudmRvbUF0dHJpYnV0ZSB8fCBCVUlMRC5yZWZsZWN0KSB7XG4gICAgICAgICAgICBpZiAoQlVJTEQuc2xvdCAmJiB0YWcgPT09ICdzbG90JylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBlaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgcmVuZGVyIG9mIGFuIGVsZW1lbnQgT1IgaXQncyBhbiB1cGRhdGVcbiAgICAgICAgICAgICAgICAvLyBBTkQgd2UgYWxyZWFkeSBrbm93IGl0J3MgcG9zc2libGUgaXQgY291bGQgaGF2ZSBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgLy8gdGhpcyB1cGRhdGVzIHRoZSBlbGVtZW50J3MgY3NzIGNsYXNzZXMsIGF0dHJzLCBwcm9wcywgbGlzdGVuZXJzLCBldGMuXG4gICAgICAgICAgICAgICAgdXBkYXRlRWxlbWVudChvbGRWTm9kZSwgbmV3Vk5vZGUsIGlzU3ZnTW9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELnVwZGF0YWJsZSAmJiBvbGRDaGlsZHJlbiAhPT0gbnVsbCAmJiBuZXdDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbG9va3MgbGlrZSB0aGVyZSdzIGNoaWxkIHZub2RlcyBmb3IgYm90aCB0aGUgb2xkIGFuZCBuZXcgdm5vZGVzXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGNhbGwgYHVwZGF0ZUNoaWxkcmVuYCB0byByZWNvbmNpbGUgdGhlbVxuICAgICAgICAgICAgdXBkYXRlQ2hpbGRyZW4oZWxtLCBvbGRDaGlsZHJlbiwgbmV3Vk5vZGUsIG5ld0NoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbm8gb2xkIGNoaWxkIHZub2RlcywgYnV0IHRoZXJlIGFyZSBuZXcgY2hpbGQgdm5vZGVzIHRvIGFkZFxuICAgICAgICAgICAgaWYgKEJVSUxELnVwZGF0YWJsZSAmJiBCVUlMRC52ZG9tVGV4dCAmJiBvbGRWTm9kZS4kdGV4dCQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgb2xkIHZub2RlIHdhcyB0ZXh0LCBzbyBiZSBzdXJlIHRvIGNsZWFyIGl0IG91dFxuICAgICAgICAgICAgICAgIGVsbS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWRkIHRoZSBuZXcgdm5vZGUgY2hpbGRyZW5cbiAgICAgICAgICAgIGFkZFZub2RlcyhlbG0sIG51bGwsIG5ld1ZOb2RlLCBuZXdDaGlsZHJlbiwgMCwgbmV3Q2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudXBkYXRhYmxlICYmIG9sZENoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBubyBuZXcgY2hpbGQgdm5vZGVzLCBidXQgdGhlcmUgYXJlIG9sZCBjaGlsZCB2bm9kZXMgdG8gcmVtb3ZlXG4gICAgICAgICAgICByZW1vdmVWbm9kZXMob2xkQ2hpbGRyZW4sIDAsIG9sZENoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5zdmcgJiYgaXNTdmdNb2RlICYmIHRhZyA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICAgIGlzU3ZnTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKEJVSUxELnZkb21UZXh0ICYmIEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIChkZWZhdWx0SG9sZGVyID0gZWxtWydzLWNyJ10pKSB7XG4gICAgICAgIC8vIHRoaXMgZWxlbWVudCBoYXMgc2xvdHRlZCBjb250ZW50XG4gICAgICAgIGRlZmF1bHRIb2xkZXIucGFyZW50Tm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKEJVSUxELnZkb21UZXh0ICYmIG9sZFZOb2RlLiR0ZXh0JCAhPT0gdGV4dCkge1xuICAgICAgICAvLyB1cGRhdGUgdGhlIHRleHQgY29udGVudCBmb3IgdGhlIHRleHQgb25seSB2bm9kZVxuICAgICAgICAvLyBhbmQgYWxzbyBvbmx5IGlmIHRoZSB0ZXh0IGlzIGRpZmZlcmVudCB0aGFuIGJlZm9yZVxuICAgICAgICBlbG0uZGF0YSA9IHRleHQ7XG4gICAgfVxufTtcbmNvbnN0IHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkgPSAoZWxtKSA9PiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItY29uc3RcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gZWxtLmNoaWxkTm9kZXM7XG4gICAgbGV0IGNoaWxkTm9kZTtcbiAgICBsZXQgaTtcbiAgICBsZXQgaWxlbjtcbiAgICBsZXQgajtcbiAgICBsZXQgc2xvdE5hbWVBdHRyO1xuICAgIGxldCBub2RlVHlwZTtcbiAgICBmb3IgKGkgPSAwLCBpbGVuID0gY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBpbGVuOyBpKyspIHtcbiAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVbJ3Mtc3InXSkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBzbG90IGZhbGxiYWNrIG5vZGVcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHNsb3QgbmFtZSBmb3IgdGhpcyBzbG90IHJlZmVyZW5jZSBub2RlXG4gICAgICAgICAgICAgICAgc2xvdE5hbWVBdHRyID0gY2hpbGROb2RlWydzLXNuJ107XG4gICAgICAgICAgICAgICAgLy8gYnkgZGVmYXVsdCBhbHdheXMgc2hvdyBhIGZhbGxiYWNrIHNsb3Qgbm9kZVxuICAgICAgICAgICAgICAgIC8vIHRoZW4gaGlkZSBpdCBpZiB0aGVyZSBhcmUgb3RoZXIgc2xvdHMgaW4gdGhlIGxpZ2h0IGRvbVxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaWxlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVUeXBlID0gY2hpbGROb2Rlc1tqXS5ub2RlVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNbal1bJ3MtaG4nXSAhPT0gY2hpbGROb2RlWydzLWhuJ10gfHwgc2xvdE5hbWVBdHRyICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBzaWJsaW5nIG5vZGUgaXMgZnJvbSBhIGRpZmZlcmVudCBjb21wb25lbnQgT1IgaXMgYSBuYW1lZCBmYWxsYmFjayBzbG90IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8gJiYgc2xvdE5hbWVBdHRyID09PSBjaGlsZE5vZGVzW2pdLmdldEF0dHJpYnV0ZSgnc2xvdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgZGVmYXVsdCBmYWxsYmFjayBzbG90IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFueSBlbGVtZW50IG9yIHRleHQgbm9kZSAod2l0aCBjb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIGhpZGUgdGhlIGRlZmF1bHQgZmFsbGJhY2sgc2xvdCBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5vZGVUeXBlID09PSAzIC8qIE5PREVfVFlQRS5UZXh0Tm9kZSAqLyAmJiBjaGlsZE5vZGVzW2pdLnRleHRDb250ZW50LnRyaW0oKSAhPT0gJycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBrZWVwIGRyaWxsaW5nIGRvd25cbiAgICAgICAgICAgIHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkoY2hpbGROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCByZWxvY2F0ZU5vZGVzID0gW107XG5jb25zdCByZWxvY2F0ZVNsb3RDb250ZW50ID0gKGVsbSkgPT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XG4gICAgbGV0IGNoaWxkTm9kZTtcbiAgICBsZXQgbm9kZTtcbiAgICBsZXQgaG9zdENvbnRlbnROb2RlcztcbiAgICBsZXQgc2xvdE5hbWVBdHRyO1xuICAgIGxldCByZWxvY2F0ZU5vZGVEYXRhO1xuICAgIGxldCBqO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gZWxtLmNoaWxkTm9kZXM7XG4gICAgY29uc3QgaWxlbiA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICAgIGZvciAoOyBpIDwgaWxlbjsgaSsrKSB7XG4gICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaV07XG4gICAgICAgIGlmIChjaGlsZE5vZGVbJ3Mtc3InXSAmJiAobm9kZSA9IGNoaWxkTm9kZVsncy1jciddKSAmJiBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IGdvdCB0aGUgY29udGVudCByZWZlcmVuY2UgY29tbWVudCBub2RlXG4gICAgICAgICAgICAvLyB0aGVuIHdlIGdvdCBpdCdzIHBhcmVudCwgd2hpY2ggaXMgd2hlcmUgYWxsIHRoZSBob3N0IGNvbnRlbnQgaXMgaW4gbm93XG4gICAgICAgICAgICBob3N0Q29udGVudE5vZGVzID0gbm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICBzbG90TmFtZUF0dHIgPSBjaGlsZE5vZGVbJ3Mtc24nXTtcbiAgICAgICAgICAgIGZvciAoaiA9IGhvc3RDb250ZW50Tm9kZXMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBub2RlID0gaG9zdENvbnRlbnROb2Rlc1tqXTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVbJ3MtY24nXSAmJiAhbm9kZVsncy1uciddICYmIG5vZGVbJ3MtaG4nXSAhPT0gY2hpbGROb2RlWydzLWhuJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgZG8gc29tZSByZWxvY2F0aW5nIHRvIGl0cyBuZXcgaG9tZVxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgbmV2ZXIgcmVsb2NhdGUgYSBjb250ZW50IHJlZmVyZW5jZSBub2RlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgaXMgc3VwcG9zZSB0byBhbHdheXMgcmVwcmVzZW50IHRoZSBvcmlnaW5hbCBjb250ZW50IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05vZGVMb2NhdGVkSW5TbG90KG5vZGUsIHNsb3ROYW1lQXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3MgcG9zc2libGUgd2UndmUgYWxyZWFkeSBkZWNpZGVkIHRvIHJlbG9jYXRlIHRoaXMgbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2NhdGVOb2RlRGF0YSA9IHJlbG9jYXRlTm9kZXMuZmluZCgocikgPT4gci4kbm9kZVRvUmVsb2NhdGUkID09PSBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hZGUgc29tZSBjaGFuZ2VzIHRvIHNsb3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQncyBtYWtlIHN1cmUgd2UgYWxzbyBkb3VibGUgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrcyBhcmUgY29ycmVjdGx5IGhpZGRlbiBvciBzaG93blxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ3Mtc24nXSA9IG5vZGVbJ3Mtc24nXSB8fCBzbG90TmFtZUF0dHI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsb2NhdGVOb2RlRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzbHkgd2UgbmV2ZXIgZm91bmQgYSBzbG90IGhvbWUgZm9yIHRoaXMgbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB0dXJucyBvdXQgd2UgZGlkLCBzbyBsZXQncyByZW1lbWJlciBpdCBub3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVEYXRhLiRzbG90UmVmTm9kZSQgPSBjaGlsZE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gb3VyIGxpc3Qgb2Ygbm9kZXMgdG8gcmVsb2NhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2xvdFJlZk5vZGUkOiBjaGlsZE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRub2RlVG9SZWxvY2F0ZSQ6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVsncy1zciddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2NhdGVOb2Rlcy5tYXAoKHJlbG9jYXRlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOb2RlTG9jYXRlZEluU2xvdChyZWxvY2F0ZU5vZGUuJG5vZGVUb1JlbG9jYXRlJCwgbm9kZVsncy1zbiddKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2NhdGVOb2RlRGF0YSA9IHJlbG9jYXRlTm9kZXMuZmluZCgocikgPT4gci4kbm9kZVRvUmVsb2NhdGUkID09PSBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxvY2F0ZU5vZGVEYXRhICYmICFyZWxvY2F0ZU5vZGUuJHNsb3RSZWZOb2RlJCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZS4kc2xvdFJlZk5vZGUkID0gcmVsb2NhdGVOb2RlRGF0YS4kc2xvdFJlZk5vZGUkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlbG9jYXRlTm9kZXMuc29tZSgocikgPT4gci4kbm9kZVRvUmVsb2NhdGUkID09PSBub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gZmFyIHRoaXMgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGEgc2xvdCBob21lLCBub3Qgc2V0dGluZyBzbG90UmVmTm9kZSBvbiBwdXJwb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBuZXZlciBmaW5kIGEgaG9tZSBmb3IgdGhpcyBlbGVtZW50IHRoZW4gd2UnbGwgbmVlZCB0byBoaWRlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRub2RlVG9SZWxvY2F0ZSQ6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLykge1xuICAgICAgICAgICAgcmVsb2NhdGVTbG90Q29udGVudChjaGlsZE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGlzTm9kZUxvY2F0ZWRJblNsb3QgPSAobm9kZVRvUmVsb2NhdGUsIHNsb3ROYW1lQXR0cikgPT4ge1xuICAgIGlmIChub2RlVG9SZWxvY2F0ZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgaWYgKG5vZGVUb1JlbG9jYXRlLmdldEF0dHJpYnV0ZSgnc2xvdCcpID09PSBudWxsICYmIHNsb3ROYW1lQXR0ciA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlVG9SZWxvY2F0ZS5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKSA9PT0gc2xvdE5hbWVBdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChub2RlVG9SZWxvY2F0ZVsncy1zbiddID09PSBzbG90TmFtZUF0dHIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzbG90TmFtZUF0dHIgPT09ICcnO1xufTtcbmNvbnN0IGNhbGxOb2RlUmVmcyA9ICh2Tm9kZSkgPT4ge1xuICAgIGlmIChCVUlMRC52ZG9tUmVmKSB7XG4gICAgICAgIHZOb2RlLiRhdHRycyQgJiYgdk5vZGUuJGF0dHJzJC5yZWYgJiYgdk5vZGUuJGF0dHJzJC5yZWYobnVsbCk7XG4gICAgICAgIHZOb2RlLiRjaGlsZHJlbiQgJiYgdk5vZGUuJGNoaWxkcmVuJC5tYXAoY2FsbE5vZGVSZWZzKTtcbiAgICB9XG59O1xuLyoqXG4gKiBUaGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgU3RlbmNpbCdzIHZpcnR1YWwgRE9NLWJhc2VkIHJlbmRlcmluZyBlbmdpbmVcbiAqXG4gKiBHaXZlbiBhIHtAbGluayBkLkhvc3RSZWZ9IGNvbnRhaW5lciBhbmQgc29tZSB2aXJ0dWFsIERPTSBub2RlcywgdGhpc1xuICogZnVuY3Rpb24gd2lsbCBoYW5kbGUgY3JlYXRpbmcgYSB2aXJ0dWFsIERPTSB0cmVlIHdpdGggYSBzaW5nbGUgcm9vdCwgcGF0Y2hpbmdcbiAqIHRoZSBjdXJyZW50IHZpcnR1YWwgRE9NIHRyZWUgb250byBhbiBvbGQgb25lIChpZiBhbnkpLCBkZWFsaW5nIHdpdGggc2xvdFxuICogcmVsb2NhdGlvbiwgYW5kIHJlZmxlY3RpbmcgYXR0cmlidXRlcy5cbiAqXG4gKiBAcGFyYW0gaG9zdFJlZiBkYXRhIG5lZWRlZCB0byByb290IGFuZCByZW5kZXIgdGhlIHZpcnR1YWwgRE9NIHRyZWUsIHN1Y2ggYXNcbiAqIHRoZSBET00gbm9kZSBpbnRvIHdoaWNoIGl0IHNob3VsZCBiZSByZW5kZXJlZC5cbiAqIEBwYXJhbSByZW5kZXJGblJlc3VsdHMgdGhlIHZpcnR1YWwgRE9NIG5vZGVzIHRvIGJlIHJlbmRlcmVkXG4gKi9cbmNvbnN0IHJlbmRlclZkb20gPSAoaG9zdFJlZiwgcmVuZGVyRm5SZXN1bHRzKSA9PiB7XG4gICAgY29uc3QgaG9zdEVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gICAgY29uc3Qgb2xkVk5vZGUgPSBob3N0UmVmLiR2bm9kZSQgfHwgbmV3Vk5vZGUobnVsbCwgbnVsbCk7XG4gICAgY29uc3Qgcm9vdFZub2RlID0gaXNIb3N0KHJlbmRlckZuUmVzdWx0cykgPyByZW5kZXJGblJlc3VsdHMgOiBoKG51bGwsIG51bGwsIHJlbmRlckZuUmVzdWx0cyk7XG4gICAgaG9zdFRhZ05hbWUgPSBob3N0RWxtLnRhZ05hbWU7XG4gICAgLy8gPEhvc3Q+IHJ1bnRpbWUgY2hlY2tcbiAgICBpZiAoQlVJTEQuaXNEZXYgJiYgQXJyYXkuaXNBcnJheShyZW5kZXJGblJlc3VsdHMpICYmIHJlbmRlckZuUmVzdWx0cy5zb21lKGlzSG9zdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgPEhvc3Q+IG11c3QgYmUgdGhlIHNpbmdsZSByb290IGNvbXBvbmVudC5cbkxvb2tzIGxpa2UgdGhlIHJlbmRlcigpIGZ1bmN0aW9uIG9mIFwiJHtob3N0VGFnTmFtZS50b0xvd2VyQ2FzZSgpfVwiIGlzIHJldHVybmluZyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSA8SG9zdD4uXG5cblRoZSByZW5kZXIoKSBmdW5jdGlvbiBzaG91bGQgbG9vayBsaWtlIHRoaXMgaW5zdGVhZDpcblxucmVuZGVyKCkge1xuICAvLyBEbyBub3QgcmV0dXJuIGFuIGFycmF5XG4gIHJldHVybiAoXG4gICAgPEhvc3Q+e2NvbnRlbnR9PC9Ib3N0PlxuICApO1xufVxuICBgKTtcbiAgICB9XG4gICAgaWYgKEJVSUxELnJlZmxlY3QgJiYgY21wTWV0YS4kYXR0cnNUb1JlZmxlY3QkKSB7XG4gICAgICAgIHJvb3RWbm9kZS4kYXR0cnMkID0gcm9vdFZub2RlLiRhdHRycyQgfHwge307XG4gICAgICAgIGNtcE1ldGEuJGF0dHJzVG9SZWZsZWN0JC5tYXAoKFtwcm9wTmFtZSwgYXR0cmlidXRlXSkgPT4gKHJvb3RWbm9kZS4kYXR0cnMkW2F0dHJpYnV0ZV0gPSBob3N0RWxtW3Byb3BOYW1lXSkpO1xuICAgIH1cbiAgICByb290Vm5vZGUuJHRhZyQgPSBudWxsO1xuICAgIHJvb3RWbm9kZS4kZmxhZ3MkIHw9IDQgLyogVk5PREVfRkxBR1MuaXNIb3N0ICovO1xuICAgIGhvc3RSZWYuJHZub2RlJCA9IHJvb3RWbm9kZTtcbiAgICByb290Vm5vZGUuJGVsbSQgPSBvbGRWTm9kZS4kZWxtJCA9IChCVUlMRC5zaGFkb3dEb20gPyBob3N0RWxtLnNoYWRvd1Jvb3QgfHwgaG9zdEVsbSA6IGhvc3RFbG0pO1xuICAgIGlmIChCVUlMRC5zY29wZWQgfHwgQlVJTEQuc2hhZG93RG9tKSB7XG4gICAgICAgIHNjb3BlSWQgPSBob3N0RWxtWydzLXNjJ107XG4gICAgfVxuICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICBjb250ZW50UmVmID0gaG9zdEVsbVsncy1jciddO1xuICAgICAgICB1c2VOYXRpdmVTaGFkb3dEb20gPSBzdXBwb3J0c1NoYWRvdyAmJiAoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBDTVBfRkxBR1Muc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykgIT09IDA7XG4gICAgICAgIC8vIGFsd2F5cyByZXNldFxuICAgICAgICBjaGVja1Nsb3RGYWxsYmFja1Zpc2liaWxpdHkgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gc3luY2hyb25vdXMgcGF0Y2hcbiAgICBwYXRjaChvbGRWTm9kZSwgcm9vdFZub2RlKTtcbiAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgLy8gd2hpbGUgd2UncmUgbW92aW5nIG5vZGVzIGFyb3VuZCBleGlzdGluZyBub2RlcywgdGVtcG9yYXJpbHkgZGlzYWJsZVxuICAgICAgICAvLyB0aGUgZGlzY29ubmVjdENhbGxiYWNrIGZyb20gd29ya2luZ1xuICAgICAgICBwbHQuJGZsYWdzJCB8PSAxIC8qIFBMQVRGT1JNX0ZMQUdTLmlzVG1wRGlzY29ubmVjdGVkICovO1xuICAgICAgICBpZiAoY2hlY2tTbG90UmVsb2NhdGUpIHtcbiAgICAgICAgICAgIHJlbG9jYXRlU2xvdENvbnRlbnQocm9vdFZub2RlLiRlbG0kKTtcbiAgICAgICAgICAgIGxldCByZWxvY2F0ZURhdGE7XG4gICAgICAgICAgICBsZXQgbm9kZVRvUmVsb2NhdGU7XG4gICAgICAgICAgICBsZXQgb3JnTG9jYXRpb25Ob2RlO1xuICAgICAgICAgICAgbGV0IHBhcmVudE5vZGVSZWY7XG4gICAgICAgICAgICBsZXQgaW5zZXJ0QmVmb3JlTm9kZTtcbiAgICAgICAgICAgIGxldCByZWZOb2RlO1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgZm9yICg7IGkgPCByZWxvY2F0ZU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVsb2NhdGVEYXRhID0gcmVsb2NhdGVOb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICBub2RlVG9SZWxvY2F0ZSA9IHJlbG9jYXRlRGF0YS4kbm9kZVRvUmVsb2NhdGUkO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZVRvUmVsb2NhdGVbJ3Mtb2wnXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgYSByZWZlcmVuY2Ugbm9kZSBtYXJraW5nIHRoaXMgbm9kZSdzIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhpcyBub2RlIGZvciBsYXRlciBsb29rdXBzXG4gICAgICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBCVUlMRC5pc0RlYnVnIHx8IEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvcmlnaW5hbExvY2F0aW9uRGVidWdOb2RlKG5vZGVUb1JlbG9jYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZG9jLmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlWydzLW5yJ10gPSBub2RlVG9SZWxvY2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZVRvUmVsb2NhdGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoKG5vZGVUb1JlbG9jYXRlWydzLW9sJ10gPSBvcmdMb2NhdGlvbk5vZGUpLCBub2RlVG9SZWxvY2F0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlbG9jYXRlTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZWxvY2F0ZURhdGEgPSByZWxvY2F0ZU5vZGVzW2ldO1xuICAgICAgICAgICAgICAgIG5vZGVUb1JlbG9jYXRlID0gcmVsb2NhdGVEYXRhLiRub2RlVG9SZWxvY2F0ZSQ7XG4gICAgICAgICAgICAgICAgaWYgKHJlbG9jYXRlRGF0YS4kc2xvdFJlZk5vZGUkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ5IGRlZmF1bHQgd2UncmUganVzdCBnb2luZyB0byBpbnNlcnQgaXQgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhlIHNsb3QgcmVmZXJlbmNlIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZVJlZiA9IHJlbG9jYXRlRGF0YS4kc2xvdFJlZk5vZGUkLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydEJlZm9yZU5vZGUgPSByZWxvY2F0ZURhdGEuJHNsb3RSZWZOb2RlJC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlID0gbm9kZVRvUmVsb2NhdGVbJ3Mtb2wnXTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChvcmdMb2NhdGlvbk5vZGUgPSBvcmdMb2NhdGlvbk5vZGUucHJldmlvdXNTaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmTm9kZSA9IG9yZ0xvY2F0aW9uTm9kZVsncy1uciddO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZk5vZGUgJiYgcmVmTm9kZVsncy1zbiddID09PSBub2RlVG9SZWxvY2F0ZVsncy1zbiddICYmIHBhcmVudE5vZGVSZWYgPT09IHJlZk5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZk5vZGUgPSByZWZOb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVmTm9kZSB8fCAhcmVmTm9kZVsncy1uciddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydEJlZm9yZU5vZGUgPSByZWZOb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCghaW5zZXJ0QmVmb3JlTm9kZSAmJiBwYXJlbnROb2RlUmVmICE9PSBub2RlVG9SZWxvY2F0ZS5wYXJlbnROb2RlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvUmVsb2NhdGUubmV4dFNpYmxpbmcgIT09IGluc2VydEJlZm9yZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlJ3ZlIGNoZWNrZWQgdGhhdCBpdCdzIHdvcnRoIHdoaWxlIHRvIHJlbG9jYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGF0IHRoZSBub2RlIHRvIHJlbG9jYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoYXMgYSBkaWZmZXJlbnQgbmV4dCBzaWJsaW5nIG9yIHBhcmVudCByZWxvY2F0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlVG9SZWxvY2F0ZSAhPT0gaW5zZXJ0QmVmb3JlTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm9kZVRvUmVsb2NhdGVbJ3MtaG4nXSAmJiBub2RlVG9SZWxvY2F0ZVsncy1vbCddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2JhYmx5IGEgY29tcG9uZW50IGluIHRoZSBpbmRleC5odG1sIHRoYXQgZG9lc24ndCBoYXZlIGl0J3MgaG9zdG5hbWUgc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb1JlbG9jYXRlWydzLWhuJ10gPSBub2RlVG9SZWxvY2F0ZVsncy1vbCddLnBhcmVudE5vZGUubm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBpdCBiYWNrIHRvIHRoZSBkb20gYnV0IGluIGl0cyBuZXcgaG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGVSZWYuaW5zZXJ0QmVmb3JlKG5vZGVUb1JlbG9jYXRlLCBpbnNlcnRCZWZvcmVOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBub2RlIGRvZXNuJ3QgaGF2ZSBhIHNsb3QgaG9tZSB0byBnbyB0bywgc28gbGV0J3MgaGlkZSBpdFxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVRvUmVsb2NhdGUubm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9SZWxvY2F0ZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGVja1Nsb3RGYWxsYmFja1Zpc2liaWxpdHkpIHtcbiAgICAgICAgICAgIHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkocm9vdFZub2RlLiRlbG0kKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkb25lIG1vdmluZyBub2RlcyBhcm91bmRcbiAgICAgICAgLy8gYWxsb3cgdGhlIGRpc2Nvbm5lY3QgY2FsbGJhY2sgdG8gd29yayBhZ2FpblxuICAgICAgICBwbHQuJGZsYWdzJCAmPSB+MSAvKiBQTEFURk9STV9GTEFHUy5pc1RtcERpc2Nvbm5lY3RlZCAqLztcbiAgICAgICAgLy8gYWx3YXlzIHJlc2V0XG4gICAgICAgIHJlbG9jYXRlTm9kZXMubGVuZ3RoID0gMDtcbiAgICB9XG59O1xuLy8gc2xvdCBjb21tZW50IGRlYnVnIG5vZGVzIG9ubHkgY3JlYXRlZCB3aXRoIHRoZSBgLS1kZWJ1Z2AgZmxhZ1xuLy8gb3RoZXJ3aXNlIHRoZXNlIG5vZGVzIGFyZSB0ZXh0IG5vZGVzIHcvb3V0IGNvbnRlbnRcbmNvbnN0IHNsb3RSZWZlcmVuY2VEZWJ1Z05vZGUgPSAoc2xvdFZOb2RlKSA9PiBkb2MuY3JlYXRlQ29tbWVudChgPHNsb3Qke3Nsb3RWTm9kZS4kbmFtZSQgPyAnIG5hbWU9XCInICsgc2xvdFZOb2RlLiRuYW1lJCArICdcIicgOiAnJ30+IChob3N0PSR7aG9zdFRhZ05hbWUudG9Mb3dlckNhc2UoKX0pYCk7XG5jb25zdCBvcmlnaW5hbExvY2F0aW9uRGVidWdOb2RlID0gKG5vZGVUb1JlbG9jYXRlKSA9PiBkb2MuY3JlYXRlQ29tbWVudChgb3JnLWxvY2F0aW9uIGZvciBgICtcbiAgICAobm9kZVRvUmVsb2NhdGUubG9jYWxOYW1lXG4gICAgICAgID8gYDwke25vZGVUb1JlbG9jYXRlLmxvY2FsTmFtZX0+IChob3N0PSR7bm9kZVRvUmVsb2NhdGVbJ3MtaG4nXX0pYFxuICAgICAgICA6IGBbJHtub2RlVG9SZWxvY2F0ZS50ZXh0Q29udGVudH1dYCkpO1xuY29uc3QgYXR0YWNoVG9BbmNlc3RvciA9IChob3N0UmVmLCBhbmNlc3RvckNvbXBvbmVudCkgPT4ge1xuICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcgJiYgYW5jZXN0b3JDb21wb25lbnQgJiYgIWhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQgJiYgYW5jZXN0b3JDb21wb25lbnRbJ3MtcCddKSB7XG4gICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXS5wdXNoKG5ldyBQcm9taXNlKChyKSA9PiAoaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCA9IHIpKSk7XG4gICAgfVxufTtcbmNvbnN0IHNjaGVkdWxlVXBkYXRlID0gKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgICBpZiAoQlVJTEQudGFza1F1ZXVlICYmIEJVSUxELnVwZGF0YWJsZSkge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMTYgLyogSE9TVF9GTEFHUy5pc1F1ZXVlZEZvclVwZGF0ZSAqLztcbiAgICB9XG4gICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZyAmJiBob3N0UmVmLiRmbGFncyQgJiA0IC8qIEhPU1RfRkxBR1MuaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8pIHtcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDUxMiAvKiBIT1NUX0ZMQUdTLm5lZWRzUmVyZW5kZXIgKi87XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXR0YWNoVG9BbmNlc3Rvcihob3N0UmVmLCBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQpO1xuICAgIC8vIHRoZXJlIGlzIG5vIGFuY2VzdG9yIGNvbXBvbmVudCBvciB0aGUgYW5jZXN0b3IgY29tcG9uZW50XG4gICAgLy8gaGFzIGFscmVhZHkgZmlyZWQgb2ZmIGl0cyBsaWZlY3ljbGUgdXBkYXRlIHRoZW5cbiAgICAvLyBmaXJlIG9mZiB0aGUgaW5pdGlhbCB1cGRhdGVcbiAgICBjb25zdCBkaXNwYXRjaCA9ICgpID0+IGRpc3BhdGNoSG9va3MoaG9zdFJlZiwgaXNJbml0aWFsTG9hZCk7XG4gICAgcmV0dXJuIEJVSUxELnRhc2tRdWV1ZSA/IHdyaXRlVGFzayhkaXNwYXRjaCkgOiBkaXNwYXRjaCgpO1xufTtcbmNvbnN0IGRpc3BhdGNoSG9va3MgPSAoaG9zdFJlZiwgaXNJbml0aWFsTG9hZCkgPT4ge1xuICAgIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBlbmRTY2hlZHVsZSA9IGNyZWF0ZVRpbWUoJ3NjaGVkdWxlVXBkYXRlJywgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IEJVSUxELmxhenlMb2FkID8gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA6IGVsbTtcbiAgICBsZXQgcHJvbWlzZTtcbiAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgICAgICBpZiAoQlVJTEQubGF6eUxvYWQgJiYgQlVJTEQuaG9zdExpc3RlbmVyKSB7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMjU2IC8qIEhPU1RfRkxBR1MuaXNMaXN0ZW5SZWFkeSAqLztcbiAgICAgICAgICAgIGlmIChob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkKSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJC5tYXAoKFttZXRob2ROYW1lLCBldmVudF0pID0+IHNhZmVDYWxsKGluc3RhbmNlLCBtZXRob2ROYW1lLCBldmVudCkpO1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sICdjb21wb25lbnRXaWxsTG9hZCcpO1xuICAgICAgICBpZiAoQlVJTEQuY21wV2lsbExvYWQpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudFdpbGxMb2FkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sICdjb21wb25lbnRXaWxsVXBkYXRlJyk7XG4gICAgICAgIGlmIChCVUlMRC5jbXBXaWxsVXBkYXRlKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gc2FmZUNhbGwoaW5zdGFuY2UsICdjb21wb25lbnRXaWxsVXBkYXRlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgJ2NvbXBvbmVudFdpbGxSZW5kZXInKTtcbiAgICBpZiAoQlVJTEQuY21wV2lsbFJlbmRlcikge1xuICAgICAgICBwcm9taXNlID0gdGhlbihwcm9taXNlLCAoKSA9PiBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudFdpbGxSZW5kZXInKSk7XG4gICAgfVxuICAgIGVuZFNjaGVkdWxlKCk7XG4gICAgcmV0dXJuIHRoZW4ocHJvbWlzZSwgKCkgPT4gdXBkYXRlQ29tcG9uZW50KGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSk7XG59O1xuY29uc3QgdXBkYXRlQ29tcG9uZW50ID0gYXN5bmMgKGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gICAgLy8gdXBkYXRlQ29tcG9uZW50XG4gICAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICAgIGNvbnN0IGVuZFVwZGF0ZSA9IGNyZWF0ZVRpbWUoJ3VwZGF0ZScsIGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJCk7XG4gICAgY29uc3QgcmMgPSBlbG1bJ3MtcmMnXTtcbiAgICBpZiAoQlVJTEQuc3R5bGUgJiYgaXNJbml0aWFsTG9hZCkge1xuICAgICAgICAvLyBET00gV1JJVEUhXG4gICAgICAgIGF0dGFjaFN0eWxlcyhob3N0UmVmKTtcbiAgICB9XG4gICAgY29uc3QgZW5kUmVuZGVyID0gY3JlYXRlVGltZSgncmVuZGVyJywgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDEwMjQgLyogSE9TVF9GTEFHUy5kZXZPblJlbmRlciAqLztcbiAgICB9XG4gICAgaWYgKEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIGF3YWl0IGNhbGxSZW5kZXIoaG9zdFJlZiwgaW5zdGFuY2UsIGVsbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjYWxsUmVuZGVyKGhvc3RSZWYsIGluc3RhbmNlLCBlbG0pO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuY3NzVmFyU2hpbSAmJiBwbHQuJGNzc1NoaW0kKSB7XG4gICAgICAgIHBsdC4kY3NzU2hpbSQudXBkYXRlSG9zdChlbG0pO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgaG9zdFJlZi4kcmVuZGVyQ291bnQkKys7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MTAyNCAvKiBIT1NUX0ZMQUdTLmRldk9uUmVuZGVyICovO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIG1hbnVhbGx5IGNvbm5lY3RlZCBjaGlsZCBjb21wb25lbnRzIGR1cmluZyBzZXJ2ZXItc2lkZSBoeWRyYXRlXG4gICAgICAgICAgICBzZXJ2ZXJTaWRlQ29ubmVjdGVkKGVsbSk7XG4gICAgICAgICAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgICAgICAgICAgICAgIC8vIHVzaW5nIG9ubHkgZHVyaW5nIHNlcnZlci1zaWRlIGh5ZHJhdGVcbiAgICAgICAgICAgICAgICBpZiAoaG9zdFJlZi4kY21wTWV0YSQuJGZsYWdzJCAmIDEgLyogQ01QX0ZMQUdTLnNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtWydzLWVuJ10gPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaG9zdFJlZi4kY21wTWV0YSQuJGZsYWdzJCAmIDIgLyogQ01QX0ZMQUdTLnNjb3BlZENzc0VuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtWydzLWVuJ10gPSAnYyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlRXJyb3IoZSwgZWxtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nICYmIHJjKSB7XG4gICAgICAgIC8vIG9rLCBzbyB0dXJucyBvdXQgdGhlcmUgYXJlIHNvbWUgY2hpbGQgaG9zdCBlbGVtZW50c1xuICAgICAgICAvLyB3YWl0aW5nIG9uIHRoaXMgcGFyZW50IGVsZW1lbnQgdG8gbG9hZFxuICAgICAgICAvLyBsZXQncyBmaXJlIG9mZiBhbGwgdXBkYXRlIGNhbGxiYWNrcyB3YWl0aW5nXG4gICAgICAgIHJjLm1hcCgoY2IpID0+IGNiKCkpO1xuICAgICAgICBlbG1bJ3MtcmMnXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZW5kUmVuZGVyKCk7XG4gICAgZW5kVXBkYXRlKCk7XG4gICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZykge1xuICAgICAgICBjb25zdCBjaGlsZHJlblByb21pc2VzID0gZWxtWydzLXAnXTtcbiAgICAgICAgY29uc3QgcG9zdFVwZGF0ZSA9ICgpID0+IHBvc3RVcGRhdGVDb21wb25lbnQoaG9zdFJlZik7XG4gICAgICAgIGlmIChjaGlsZHJlblByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcG9zdFVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY2hpbGRyZW5Qcm9taXNlcykudGhlbihwb3N0VXBkYXRlKTtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA0IC8qIEhPU1RfRkxBR1MuaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi87XG4gICAgICAgICAgICBjaGlsZHJlblByb21pc2VzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBvc3RVcGRhdGVDb21wb25lbnQoaG9zdFJlZik7XG4gICAgfVxufTtcbmNvbnN0IGNhbGxSZW5kZXIgPSAoaG9zdFJlZiwgaW5zdGFuY2UsIGVsbSkgPT4ge1xuICAgIC8vIGluIG9yZGVyIGZvciBidW5kbGVycyB0byBjb3JyZWN0bHkgdHJlZXNoYWtlIHRoZSBCVUlMRCBvYmplY3RcbiAgICAvLyB3ZSBuZWVkIHRvIGVuc3VyZSBCVUlMRCBpcyBub3QgZGVvcHRpbWl6ZWQgd2l0aGluIGEgdHJ5L2NhdGNoXG4gICAgLy8gaHR0cHM6Ly9yb2xsdXBqcy5vcmcvZ3VpZGUvZW4vI3RyZWVzaGFrZSB0cnlDYXRjaERlb3B0aW1pemF0aW9uXG4gICAgY29uc3QgYWxsUmVuZGVyRm4gPSBCVUlMRC5hbGxSZW5kZXJGbiA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCBsYXp5TG9hZCA9IEJVSUxELmxhenlMb2FkID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IHRhc2tRdWV1ZSA9IEJVSUxELnRhc2tRdWV1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCB1cGRhdGFibGUgPSBCVUlMRC51cGRhdGFibGUgPyB0cnVlIDogZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVuZGVyaW5nUmVmID0gaW5zdGFuY2U7XG4gICAgICAgIGluc3RhbmNlID0gYWxsUmVuZGVyRm4gPyBpbnN0YW5jZS5yZW5kZXIoKSA6IGluc3RhbmNlLnJlbmRlciAmJiBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICAgICAgaWYgKHVwZGF0YWJsZSAmJiB0YXNrUXVldWUpIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MTYgLyogSE9TVF9GTEFHUy5pc1F1ZXVlZEZvclVwZGF0ZSAqLztcbiAgICAgICAgfVxuICAgICAgICBpZiAodXBkYXRhYmxlIHx8IGxhenlMb2FkKSB7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5oYXNSZW5kZXJGbiB8fCBCVUlMRC5yZWZsZWN0KSB7XG4gICAgICAgICAgICBpZiAoQlVJTEQudmRvbVJlbmRlciB8fCBCVUlMRC5yZWZsZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gbG9va3MgbGlrZSB3ZSd2ZSBnb3QgY2hpbGQgbm9kZXMgdG8gcmVuZGVyIGludG8gdGhpcyBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBvciB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgY3NzIGNsYXNzL2F0dHJzIG9uIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBET00gV1JJVEUhXG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaW5zdGFuY2UpLnRoZW4oKHZhbHVlKSA9PiByZW5kZXJWZG9tKGhvc3RSZWYsIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJWZG9tKGhvc3RSZWYsIGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbG0udGV4dENvbnRlbnQgPSBpbnN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlRXJyb3IoZSwgaG9zdFJlZi4kaG9zdEVsZW1lbnQkKTtcbiAgICB9XG4gICAgcmVuZGVyaW5nUmVmID0gbnVsbDtcbiAgICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBnZXRSZW5kZXJpbmdSZWYgPSAoKSA9PiByZW5kZXJpbmdSZWY7XG5jb25zdCBwb3N0VXBkYXRlQ29tcG9uZW50ID0gKGhvc3RSZWYpID0+IHtcbiAgICBjb25zdCB0YWdOYW1lID0gaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkO1xuICAgIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBlbmRQb3N0VXBkYXRlID0gY3JlYXRlVGltZSgncG9zdFVwZGF0ZScsIHRhZ05hbWUpO1xuICAgIGNvbnN0IGluc3RhbmNlID0gQlVJTEQubGF6eUxvYWQgPyBob3N0UmVmLiRsYXp5SW5zdGFuY2UkIDogZWxtO1xuICAgIGNvbnN0IGFuY2VzdG9yQ29tcG9uZW50ID0gaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkO1xuICAgIGlmIChCVUlMRC5jbXBEaWRSZW5kZXIpIHtcbiAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMTAyNCAvKiBIT1NUX0ZMQUdTLmRldk9uUmVuZGVyICovO1xuICAgICAgICB9XG4gICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50RGlkUmVuZGVyJyk7XG4gICAgICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4xMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi87XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgJ2NvbXBvbmVudERpZFJlbmRlcicpO1xuICAgIGlmICghKGhvc3RSZWYuJGZsYWdzJCAmIDY0IC8qIEhPU1RfRkxBR1MuaGFzTG9hZGVkQ29tcG9uZW50ICovKSkge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gNjQgLyogSE9TVF9GTEFHUy5oYXNMb2FkZWRDb21wb25lbnQgKi87XG4gICAgICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcgJiYgQlVJTEQuY3NzQW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIERPTSBXUklURSFcbiAgICAgICAgICAgIGFkZEh5ZHJhdGVkRmxhZyhlbG0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5jbXBEaWRMb2FkKSB7XG4gICAgICAgICAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMjA0OCAvKiBIT1NUX0ZMQUdTLmRldk9uRGlkTG9hZCAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50RGlkTG9hZCcpO1xuICAgICAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4yMDQ4IC8qIEhPU1RfRkxBR1MuZGV2T25EaWRMb2FkICovO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sICdjb21wb25lbnREaWRMb2FkJyk7XG4gICAgICAgIGVuZFBvc3RVcGRhdGUoKTtcbiAgICAgICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZykge1xuICAgICAgICAgICAgaG9zdFJlZi4kb25SZWFkeVJlc29sdmUkKGVsbSk7XG4gICAgICAgICAgICBpZiAoIWFuY2VzdG9yQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgYXBwRGlkTG9hZCh0YWdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKEJVSUxELmNtcERpZFVwZGF0ZSkge1xuICAgICAgICAgICAgLy8gd2UndmUgYWxyZWFkeSBsb2FkZWQgdGhpcyBjb21wb25lbnRcbiAgICAgICAgICAgIC8vIGZpcmUgb2ZmIHRoZSB1c2VyJ3MgY29tcG9uZW50RGlkVXBkYXRlIG1ldGhvZCAoaWYgb25lIHdhcyBwcm92aWRlZClcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudERpZFVwZGF0ZSBydW5zIEFGVEVSIHJlbmRlcigpIGhhcyBiZWVuIGNhbGxlZFxuICAgICAgICAgICAgLy8gYW5kIGFsbCBjaGlsZCBjb21wb25lbnRzIGhhdmUgZmluaXNoZWQgdXBkYXRpbmdcbiAgICAgICAgICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudERpZFVwZGF0ZScpO1xuICAgICAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4xMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgJ2NvbXBvbmVudERpZFVwZGF0ZScpO1xuICAgICAgICBlbmRQb3N0VXBkYXRlKCk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5ob3RNb2R1bGVSZXBsYWNlbWVudCkge1xuICAgICAgICBlbG1bJ3MtaG1yLWxvYWQnXSAmJiBlbG1bJ3MtaG1yLWxvYWQnXSgpO1xuICAgIH1cbiAgICBpZiAoQlVJTEQubWV0aG9kICYmIEJVSUxELmxhenlMb2FkKSB7XG4gICAgICAgIGhvc3RSZWYuJG9uSW5zdGFuY2VSZXNvbHZlJChlbG0pO1xuICAgIH1cbiAgICAvLyBsb2FkIGV2ZW50cyBmaXJlIGZyb20gYm90dG9tIHRvIHRvcFxuICAgIC8vIHRoZSBkZWVwZXN0IGVsZW1lbnRzIGxvYWQgZmlyc3QgdGhlbiBidWJibGVzIHVwXG4gICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZykge1xuICAgICAgICBpZiAoaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCkge1xuICAgICAgICAgICAgaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCgpO1xuICAgICAgICAgICAgaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgNTEyIC8qIEhPU1RfRkxBR1MubmVlZHNSZXJlbmRlciAqLykge1xuICAgICAgICAgICAgbmV4dFRpY2soKCkgPT4gc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgZmFsc2UpKTtcbiAgICAgICAgfVxuICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfig0IC8qIEhPU1RfRkxBR1MuaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8gfCA1MTIgLyogSE9TVF9GTEFHUy5uZWVkc1JlcmVuZGVyICovKTtcbiAgICB9XG4gICAgLy8gKCDigKJf4oCiKVxuICAgIC8vICgg4oCiX+KAoik+4oyQ4pagLeKWoFxuICAgIC8vICjijJDilqBf4pagKVxufTtcbmNvbnN0IGZvcmNlVXBkYXRlID0gKHJlZikgPT4ge1xuICAgIGlmIChCVUlMRC51cGRhdGFibGUpIHtcbiAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYocmVmKTtcbiAgICAgICAgY29uc3QgaXNDb25uZWN0ZWQgPSBob3N0UmVmLiRob3N0RWxlbWVudCQuaXNDb25uZWN0ZWQ7XG4gICAgICAgIGlmIChpc0Nvbm5lY3RlZCAmJlxuICAgICAgICAgICAgKGhvc3RSZWYuJGZsYWdzJCAmICgyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi8gfCAxNiAvKiBIT1NUX0ZMQUdTLmlzUXVldWVkRm9yVXBkYXRlICovKSkgPT09IDIgLyogSE9TVF9GTEFHUy5oYXNSZW5kZXJlZCAqLykge1xuICAgICAgICAgICAgc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHVybnMgXCJ0cnVlXCIgd2hlbiB0aGUgZm9yY2VkIHVwZGF0ZSB3YXMgc3VjY2Vzc2Z1bGx5IHNjaGVkdWxlZFxuICAgICAgICByZXR1cm4gaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBhcHBEaWRMb2FkID0gKHdobykgPT4ge1xuICAgIC8vIG9uIGFwcGxvYWRcbiAgICAvLyB3ZSBoYXZlIGZpbmlzaCB0aGUgZmlyc3QgYmlnIGluaXRpYWwgcmVuZGVyXG4gICAgaWYgKEJVSUxELmNzc0Fubm90YXRpb25zKSB7XG4gICAgICAgIGFkZEh5ZHJhdGVkRmxhZyhkb2MuZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKEJVSUxELmFzeW5jUXVldWUpIHtcbiAgICAgICAgcGx0LiRmbGFncyQgfD0gMiAvKiBQTEFURk9STV9GTEFHUy5hcHBMb2FkZWQgKi87XG4gICAgfVxuICAgIG5leHRUaWNrKCgpID0+IGVtaXRFdmVudCh3aW4sICdhcHBsb2FkJywgeyBkZXRhaWw6IHsgbmFtZXNwYWNlOiBOQU1FU1BBQ0UgfSB9KSk7XG4gICAgaWYgKEJVSUxELnByb2ZpbGUgJiYgcGVyZm9ybWFuY2UubWVhc3VyZSkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tZWFzdXJlKGBbU3RlbmNpbF0gJHtOQU1FU1BBQ0V9IGluaXRpYWwgbG9hZCAoYnkgJHt3aG99KWAsICdzdDphcHA6c3RhcnQnKTtcbiAgICB9XG59O1xuY29uc3Qgc2FmZUNhbGwgPSAoaW5zdGFuY2UsIG1ldGhvZCwgYXJnKSA9PiB7XG4gICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlW21ldGhvZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZVttZXRob2RdKGFyZyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbmNvbnN0IHRoZW4gPSAocHJvbWlzZSwgdGhlbkZuKSA9PiB7XG4gICAgcmV0dXJuIHByb21pc2UgJiYgcHJvbWlzZS50aGVuID8gcHJvbWlzZS50aGVuKHRoZW5GbikgOiB0aGVuRm4oKTtcbn07XG5jb25zdCBlbWl0TGlmZWN5Y2xlRXZlbnQgPSAoZWxtLCBsaWZlY3ljbGVOYW1lKSA9PiB7XG4gICAgaWYgKEJVSUxELmxpZmVjeWNsZURPTUV2ZW50cykge1xuICAgICAgICBlbWl0RXZlbnQoZWxtLCAnc3RlbmNpbF8nICsgbGlmZWN5Y2xlTmFtZSwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBOQU1FU1BBQ0UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgYWRkSHlkcmF0ZWRGbGFnID0gKGVsbSkgPT4gQlVJTEQuaHlkcmF0ZWRDbGFzc1xuICAgID8gZWxtLmNsYXNzTGlzdC5hZGQoJ2h5ZHJhdGVkJylcbiAgICA6IEJVSUxELmh5ZHJhdGVkQXR0cmlidXRlXG4gICAgICAgID8gZWxtLnNldEF0dHJpYnV0ZSgnaHlkcmF0ZWQnLCAnJylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5jb25zdCBzZXJ2ZXJTaWRlQ29ubmVjdGVkID0gKGVsbSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxtLmNoaWxkcmVuO1xuICAgIGlmIChjaGlsZHJlbiAhPSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxtID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkRWxtLmNvbm5lY3RlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRFbG0uY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlcnZlclNpZGVDb25uZWN0ZWQoY2hpbGRFbG0pO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGdldFZhbHVlID0gKHJlZiwgcHJvcE5hbWUpID0+IGdldEhvc3RSZWYocmVmKS4kaW5zdGFuY2VWYWx1ZXMkLmdldChwcm9wTmFtZSk7XG5jb25zdCBzZXRWYWx1ZSA9IChyZWYsIHByb3BOYW1lLCBuZXdWYWwsIGNtcE1ldGEpID0+IHtcbiAgICAvLyBjaGVjayBvdXIgbmV3IHByb3BlcnR5IHZhbHVlIGFnYWluc3Qgb3VyIGludGVybmFsIHZhbHVlXG4gICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYocmVmKTtcbiAgICBjb25zdCBlbG0gPSBCVUlMRC5sYXp5TG9hZCA/IGhvc3RSZWYuJGhvc3RFbGVtZW50JCA6IHJlZjtcbiAgICBjb25zdCBvbGRWYWwgPSBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KHByb3BOYW1lKTtcbiAgICBjb25zdCBmbGFncyA9IGhvc3RSZWYuJGZsYWdzJDtcbiAgICBjb25zdCBpbnN0YW5jZSA9IEJVSUxELmxhenlMb2FkID8gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA6IGVsbTtcbiAgICBuZXdWYWwgPSBwYXJzZVByb3BlcnR5VmFsdWUobmV3VmFsLCBjbXBNZXRhLiRtZW1iZXJzJFtwcm9wTmFtZV1bMF0pO1xuICAgIC8vIGV4cGxpY2l0bHkgY2hlY2sgZm9yIE5hTiBvbiBib3RoIHNpZGVzLCBhcyBgTmFOID09PSBOYU5gIGlzIGFsd2F5cyBmYWxzZVxuICAgIGNvbnN0IGFyZUJvdGhOYU4gPSBOdW1iZXIuaXNOYU4ob2xkVmFsKSAmJiBOdW1iZXIuaXNOYU4obmV3VmFsKTtcbiAgICBjb25zdCBkaWRWYWx1ZUNoYW5nZSA9IG5ld1ZhbCAhPT0gb2xkVmFsICYmICFhcmVCb3RoTmFOO1xuICAgIGlmICgoIUJVSUxELmxhenlMb2FkIHx8ICEoZmxhZ3MgJiA4IC8qIEhPU1RfRkxBR1MuaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLykgfHwgb2xkVmFsID09PSB1bmRlZmluZWQpICYmIGRpZFZhbHVlQ2hhbmdlKSB7XG4gICAgICAgIC8vIGdhZHpvb2tzISB0aGUgcHJvcGVydHkncyB2YWx1ZSBoYXMgY2hhbmdlZCEhXG4gICAgICAgIC8vIHNldCBvdXIgbmV3IHZhbHVlIVxuICAgICAgICBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQuc2V0KHByb3BOYW1lLCBuZXdWYWwpO1xuICAgICAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgICAgIGlmIChob3N0UmVmLiRmbGFncyQgJiAxMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlRGV2V2FybihgVGhlIHN0YXRlL3Byb3AgXCIke3Byb3BOYW1lfVwiIGNoYW5nZWQgZHVyaW5nIHJlbmRlcmluZy4gVGhpcyBjYW4gcG90ZW50aWFsbHkgbGVhZCB0byBpbmZpbml0ZS1sb29wcyBhbmQgb3RoZXIgYnVncy5gLCAnXFxuRWxlbWVudCcsIGVsbSwgJ1xcbk5ldyB2YWx1ZScsIG5ld1ZhbCwgJ1xcbk9sZCB2YWx1ZScsIG9sZFZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChob3N0UmVmLiRmbGFncyQgJiAyMDQ4IC8qIEhPU1RfRkxBR1MuZGV2T25EaWRMb2FkICovKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZURldldhcm4oYFRoZSBzdGF0ZS9wcm9wIFwiJHtwcm9wTmFtZX1cIiBjaGFuZ2VkIGR1cmluZyBcImNvbXBvbmVudERpZExvYWQoKVwiLCB0aGlzIHRyaWdnZXJzIGV4dHJhIHJlLXJlbmRlcnMsIHRyeSB0byBzZXR1cCBvbiBcImNvbXBvbmVudFdpbGxMb2FkKClcImAsICdcXG5FbGVtZW50JywgZWxtLCAnXFxuTmV3IHZhbHVlJywgbmV3VmFsLCAnXFxuT2xkIHZhbHVlJywgb2xkVmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIUJVSUxELmxhenlMb2FkIHx8IGluc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBnZXQgYW4gYXJyYXkgb2YgbWV0aG9kIG5hbWVzIG9mIHdhdGNoIGZ1bmN0aW9ucyB0byBjYWxsXG4gICAgICAgICAgICBpZiAoQlVJTEQud2F0Y2hDYWxsYmFjayAmJiBjbXBNZXRhLiR3YXRjaGVycyQgJiYgZmxhZ3MgJiAxMjggLyogSE9TVF9GTEFHUy5pc1dhdGNoUmVhZHkgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YXRjaE1ldGhvZHMgPSBjbXBNZXRhLiR3YXRjaGVycyRbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh3YXRjaE1ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpbnN0YW5jZSBpcyB3YXRjaGluZyBmb3Igd2hlbiB0aGlzIHByb3BlcnR5IGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hNZXRob2RzLm1hcCgod2F0Y2hNZXRob2ROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpcmUgb2ZmIGVhY2ggb2YgdGhlIHdhdGNoIG1ldGhvZHMgdGhhdCBhcmUgd2F0Y2hpbmcgdGhpcyBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW3dhdGNoTWV0aG9kTmFtZV0obmV3VmFsLCBvbGRWYWwsIHByb3BOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZUVycm9yKGUsIGVsbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC51cGRhdGFibGUgJiZcbiAgICAgICAgICAgICAgICAoZmxhZ3MgJiAoMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovIHwgMTYgLyogSE9TVF9GTEFHUy5pc1F1ZXVlZEZvclVwZGF0ZSAqLykpID09PSAyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAoQlVJTEQuY21wU2hvdWxkVXBkYXRlICYmIGluc3RhbmNlLmNvbXBvbmVudFNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuY29tcG9uZW50U2hvdWxkVXBkYXRlKG5ld1ZhbCwgb2xkVmFsLCBwcm9wTmFtZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbG9va3MgbGlrZSB0aGlzIHZhbHVlIGFjdHVhbGx5IGNoYW5nZWQsIHNvIHdlJ3ZlIGdvdCB3b3JrIHRvIGRvIVxuICAgICAgICAgICAgICAgIC8vIGJ1dCBvbmx5IGlmIHdlJ3ZlIGFscmVhZHkgcmVuZGVyZWQsIG90aGVyd2lzZSBqdXN0IGNoaWxsIG91dFxuICAgICAgICAgICAgICAgIC8vIHF1ZXVlIHRoYXQgd2UgbmVlZCB0byBkbyBhbiB1cGRhdGUsIGJ1dCBkb24ndCB3b3JyeSBhYm91dCBxdWV1aW5nXG4gICAgICAgICAgICAgICAgLy8gdXAgbWlsbGlvbnMgY3V6IHRoaXMgZnVuY3Rpb24gZW5zdXJlcyBpdCBvbmx5IHJ1bnMgb25jZVxuICAgICAgICAgICAgICAgIHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIEF0dGFjaCBhIHNlcmllcyBvZiBydW50aW1lIGNvbnN0cnVjdHMgdG8gYSBjb21waWxlZCBTdGVuY2lsIGNvbXBvbmVudFxuICogY29uc3RydWN0b3IsIGluY2x1ZGluZyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIGZvciB0aGUgYEBQcm9wYCBhbmQgYEBTdGF0ZWBcbiAqIGRlY29yYXRvcnMsIGNhbGxiYWNrcyBmb3Igd2hlbiBhdHRyaWJ1dGVzIGNoYW5nZSwgYW5kIHNvIG9uLlxuICpcbiAqIEBwYXJhbSBDc3RyIHRoZSBjb25zdHJ1Y3RvciBmb3IgYSBjb21wb25lbnQgdGhhdCB3ZSBuZWVkIHRvIHByb2Nlc3NcbiAqIEBwYXJhbSBjbXBNZXRhIG1ldGFkYXRhIGNvbGxlY3RlZCBwcmV2aW91c2x5IGFib3V0IHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSBmbGFncyBhIG51bWJlciB1c2VkIHRvIHN0b3JlIGEgc2VyaWVzIG9mIGJpdCBmbGFnc1xuICogQHJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIHNhbWUgY29uc3RydWN0b3IgcGFzc2VkIGluIChidXQgbm93IG11dGF0ZWQpXG4gKi9cbmNvbnN0IHByb3h5Q29tcG9uZW50ID0gKENzdHIsIGNtcE1ldGEsIGZsYWdzKSA9PiB7XG4gICAgaWYgKEJVSUxELm1lbWJlciAmJiBjbXBNZXRhLiRtZW1iZXJzJCkge1xuICAgICAgICBpZiAoQlVJTEQud2F0Y2hDYWxsYmFjayAmJiBDc3RyLndhdGNoZXJzKSB7XG4gICAgICAgICAgICBjbXBNZXRhLiR3YXRjaGVycyQgPSBDc3RyLndhdGNoZXJzO1xuICAgICAgICB9XG4gICAgICAgIC8vIEl0J3MgYmV0dGVyIHRvIGhhdmUgYSBjb25zdCB0aGFuIHR3byBPYmplY3QuZW50cmllcygpXG4gICAgICAgIGNvbnN0IG1lbWJlcnMgPSBPYmplY3QuZW50cmllcyhjbXBNZXRhLiRtZW1iZXJzJCk7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IENzdHIucHJvdG90eXBlO1xuICAgICAgICBtZW1iZXJzLm1hcCgoW21lbWJlck5hbWUsIFttZW1iZXJGbGFnc11dKSA9PiB7XG4gICAgICAgICAgICBpZiAoKEJVSUxELnByb3AgfHwgQlVJTEQuc3RhdGUpICYmXG4gICAgICAgICAgICAgICAgKG1lbWJlckZsYWdzICYgMzEgLyogTUVNQkVSX0ZMQUdTLlByb3AgKi8gfHxcbiAgICAgICAgICAgICAgICAgICAgKCghQlVJTEQubGF6eUxvYWQgfHwgZmxhZ3MgJiAyIC8qIFBST1hZX0ZMQUdTLnByb3h5U3RhdGUgKi8pICYmIG1lbWJlckZsYWdzICYgMzIgLyogTUVNQkVSX0ZMQUdTLlN0YXRlICovKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBwcm94eUNvbXBvbmVudCAtIHByb3BcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCBtZW1iZXJOYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb3h5Q29tcG9uZW50LCBnZXQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZSh0aGlzLCBtZW1iZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGR1cmluZyBkZXYgdGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmID0gZ2V0SG9zdFJlZih0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgYXJlIHByb3h5aW5nIHRoZSBpbnN0YW5jZSAobm90IGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZsYWdzICYgMSAvKiBQUk9YWV9GTEFHUy5pc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykgPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGVsZW1lbnQgaXMgbm90IGNvbnN0cnVjdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVmLiRmbGFncyQgJiA4IC8qIEhPU1RfRkxBR1MuaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLykgPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG1lbWJlciBpcyBhIHByb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1lbWJlckZsYWdzICYgMzEgLyogTUVNQkVSX0ZMQUdTLlByb3AgKi8pICE9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBtZW1iZXIgaXMgbm90IG11dGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1lbWJlckZsYWdzICYgMTAyNCAvKiBNRU1CRVJfRkxBR1MuTXV0YWJsZSAqLykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZURldldhcm4oYEBQcm9wKCkgXCIke21lbWJlck5hbWV9XCIgb24gPCR7Y21wTWV0YS4kdGFnTmFtZSR9PiBpcyBpbW11dGFibGUgYnV0IHdhcyBtb2RpZmllZCBmcm9tIHdpdGhpbiB0aGUgY29tcG9uZW50Llxcbk1vcmUgaW5mb3JtYXRpb246IGh0dHBzOi8vc3RlbmNpbGpzLmNvbS9kb2NzL3Byb3BlcnRpZXMjcHJvcC1tdXRhYmlsaXR5YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJveHlDb21wb25lbnQsIHNldCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSwgbmV3VmFsdWUsIGNtcE1ldGEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChCVUlMRC5sYXp5TG9hZCAmJlxuICAgICAgICAgICAgICAgIEJVSUxELm1ldGhvZCAmJlxuICAgICAgICAgICAgICAgIGZsYWdzICYgMSAvKiBQUk9YWV9GTEFHUy5pc0VsZW1lbnRDb25zdHJ1Y3RvciAqLyAmJlxuICAgICAgICAgICAgICAgIG1lbWJlckZsYWdzICYgNjQgLyogTUVNQkVSX0ZMQUdTLk1ldGhvZCAqLykge1xuICAgICAgICAgICAgICAgIC8vIHByb3h5Q29tcG9uZW50IC0gbWV0aG9kXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgbWVtYmVyTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBnZXRIb3N0UmVmKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZi4kb25JbnN0YW5jZVByb21pc2UkLnRoZW4oKCkgPT4gcmVmLiRsYXp5SW5zdGFuY2UkW21lbWJlck5hbWVdKC4uLmFyZ3MpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChCVUlMRC5vYnNlcnZlQXR0cmlidXRlICYmICghQlVJTEQubGF6eUxvYWQgfHwgZmxhZ3MgJiAxIC8qIFBST1hZX0ZMQUdTLmlzRWxlbWVudENvbnN0cnVjdG9yICovKSkge1xuICAgICAgICAgICAgY29uc3QgYXR0ck5hbWVUb1Byb3BOYW1lID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgcHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChhdHRyTmFtZSwgX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGF0dHJOYW1lVG9Qcm9wTmFtZS5nZXQoYXR0ck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgSW4gYSB3ZWIgY29tcG9uZW50IGxpZmVjeWNsZSB0aGUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIHJ1bnMgcHJpb3IgdG8gY29ubmVjdGVkQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgLy8gIGluIHRoZSBjYXNlIHdoZXJlIGFuIGF0dHJpYnV0ZSB3YXMgc2V0IGlubGluZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYGh0bWxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgPG15LWNvbXBvbmVudCBzb21lLWF0dHJpYnV0ZT1cInNvbWUtdmFsdWVcIj48L215LWNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYFxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgVGhlcmUgaXMgYW4gZWRnZSBjYXNlIHdoZXJlIGEgZGV2ZWxvcGVyIHNldHMgdGhlIGF0dHJpYnV0ZSBpbmxpbmUgb24gYSBjdXN0b20gZWxlbWVudCBhbmQgdGhlblxuICAgICAgICAgICAgICAgICAgICAvLyAgcHJvZ3JhbW1hdGljYWxseSBjaGFuZ2VzIGl0IGJlZm9yZSBpdCBoYXMgYmVlbiB1cGdyYWRlZCBhcyBzaG93biBiZWxvdzpcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYGh0bWxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgPCEtLSB0aGlzIGNvbXBvbmVudCBoYXMgX25vdF8gYmVlbiB1cGdyYWRlZCB5ZXQgLS0+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDxteS1jb21wb25lbnQgaWQ9XCJ0ZXN0XCIgc29tZS1hdHRyaWJ1dGU9XCJzb21lLXZhbHVlXCI+PC9teS1jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgLy8gZ3JhYiBub24tdXBncmFkZWQgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rlc3RcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgZWwuc29tZUF0dHJpYnV0ZSA9IFwiYW5vdGhlci12YWx1ZVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIC8vIHVwZ3JhZGUgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1jb21wb25lbnQnLCBNeUNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICAvLyAgYGBgXG4gICAgICAgICAgICAgICAgICAgIC8vICBJbiB0aGlzIGNhc2UgaWYgd2UgZG8gbm90IHVuc2hhZG93IGhlcmUgYW5kIHVzZSB0aGUgdmFsdWUgb2YgdGhlIHNoYWRvd2luZyBwcm9wZXJ0eSwgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIC8vICB3aWxsIGJlIGNhbGxlZCB3aXRoIGBuZXdWYWx1ZSA9IFwic29tZS12YWx1ZVwiYCBhbmQgd2lsbCBzZXQgdGhlIHNoYWRvd2VkIHByb3BlcnR5ICh0aGlzLnNvbWVBdHRyaWJ1dGUgPSBcImFub3RoZXItdmFsdWVcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gIHRvIHRoZSB2YWx1ZSB0aGF0IHdhcyBzZXQgaW5saW5lIGkuZS4gXCJzb21lLXZhbHVlXCIgZnJvbSBhYm92ZSBleGFtcGxlLiBXaGVuXG4gICAgICAgICAgICAgICAgICAgIC8vICB0aGUgY29ubmVjdGVkQ2FsbGJhY2sgYXR0ZW1wdHMgdG8gdW5zaGFkb3cgaXQgd2lsbCB1c2UgXCJzb21lLXZhbHVlXCIgYXMgdGhlIGluaXRpYWwgdmFsdWUgcmF0aGVyIHRoYW4gXCJhbm90aGVyLXZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIFRoZSBjYXNlIHdoZXJlIHRoZSBhdHRyaWJ1dGUgd2FzIE5PVCBzZXQgaW5saW5lIGJ1dCB3YXMgbm90IHNldCBwcm9ncmFtbWF0aWNhbGx5IHNoYWxsIGJlIGhhbmRsZWQvdW5zaGFkb3dlZFxuICAgICAgICAgICAgICAgICAgICAvLyAgYnkgY29ubmVjdGVkQ2FsbGJhY2sgYXMgdGhpcyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgd2lsbCBub3QgZmlyZS5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvYmVzdC1wcmFjdGljZXMjbGF6eS1wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICBUT0RPKFNURU5DSUwtMTYpIHdlIHNob3VsZCB0aGluayBhYm91dCB3aGV0aGVyIG9yIG5vdCB3ZSBhY3R1YWxseSB3YW50IHRvIGJlIHJlZmxlY3RpbmcgdGhlIGF0dHJpYnV0ZXMgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gIHByb3BlcnRpZXMgaGVyZSBnaXZlbiB0aGF0IHRoaXMgZ29lcyBhZ2FpbnN0IGJlc3QgcHJhY3RpY2VzIG91dGxpbmVkIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvYmVzdC1wcmFjdGljZXMjYXZvaWQtcmVlbnRyYW5jeVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvdG90eXBlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHRoaXNbcHJvcE5hbWVdID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcm9wTmFtZSBleGlzdHMgb24gdGhlIHByb3RvdHlwZSBvZiBgQ3N0cmAsIHRoaXMgdXBkYXRlIG1heSBiZSBhIHJlc3VsdCBvZiBTdGVuY2lsIHVzaW5nIG5hdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQVBJcyB0byByZWZsZWN0IHByb3BzIGFzIGF0dHJpYnV0ZXMuIENhbGxzIHRvIGBzZXRBdHRyaWJ1dGUoc29tZUVsZW1lbnQsIHByb3BOYW1lKWAgd2lsbCByZXN1bHQgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBwcm9wTmFtZWAgdG8gYmUgY29udmVydGVkIHRvIGEgYERPTVN0cmluZ2AsIHdoaWNoIG1heSBub3QgYmUgd2hhdCB3ZSB3YW50IGZvciBvdGhlciBwcmltaXRpdmUgcHJvcHMuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPSBuZXdWYWx1ZSA9PT0gbnVsbCAmJiB0eXBlb2YgdGhpc1twcm9wTmFtZV0gPT09ICdib29sZWFuJyA/IGZhbHNlIDogbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGF0dHJpYnV0ZXMgdG8gb2JzZXJ2ZVxuICAgICAgICAgICAgLy8gYW5kIGFsc28gY3JlYXRlIGEgbWFwIG9mIGh0bWwgYXR0cmlidXRlIG5hbWUgdG8ganMgcHJvcGVydHkgbmFtZVxuICAgICAgICAgICAgQ3N0ci5vYnNlcnZlZEF0dHJpYnV0ZXMgPSBtZW1iZXJzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoW18sIG1dKSA9PiBtWzBdICYgMTUgLyogTUVNQkVSX0ZMQUdTLkhhc0F0dHJpYnV0ZSAqLykgLy8gZmlsdGVyIHRvIG9ubHkga2VlcCBwcm9wcyB0aGF0IHNob3VsZCBtYXRjaCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgLm1hcCgoW3Byb3BOYW1lLCBtXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gbVsxXSB8fCBwcm9wTmFtZTtcbiAgICAgICAgICAgICAgICBhdHRyTmFtZVRvUHJvcE5hbWUuc2V0KGF0dHJOYW1lLCBwcm9wTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELnJlZmxlY3QgJiYgbVswXSAmIDUxMiAvKiBNRU1CRVJfRkxBR1MuUmVmbGVjdEF0dHIgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgY21wTWV0YS4kYXR0cnNUb1JlZmxlY3QkLnB1c2goW3Byb3BOYW1lLCBhdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ck5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQ3N0cjtcbn07XG5jb25zdCBpbml0aWFsaXplQ29tcG9uZW50ID0gYXN5bmMgKGVsbSwgaG9zdFJlZiwgY21wTWV0YSwgaG1yVmVyc2lvbklkLCBDc3RyKSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZUNvbXBvbmVudFxuICAgIGlmICgoQlVJTEQubGF6eUxvYWQgfHwgQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgfHwgQlVJTEQuc3R5bGUpICYmXG4gICAgICAgIChob3N0UmVmLiRmbGFncyQgJiAzMiAvKiBIT1NUX0ZMQUdTLmhhc0luaXRpYWxpemVkQ29tcG9uZW50ICovKSA9PT0gMCkge1xuICAgICAgICBpZiAoQlVJTEQubGF6eUxvYWQgfHwgQlVJTEQuaHlkcmF0ZUNsaWVudFNpZGUpIHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmVuJ3QgaW5pdGlhbGl6ZWQgdGhpcyBlbGVtZW50IHlldFxuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDMyIC8qIEhPU1RfRkxBR1MuaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQgKi87XG4gICAgICAgICAgICAvLyBsYXp5IGxvYWRlZCBjb21wb25lbnRzXG4gICAgICAgICAgICAvLyByZXF1ZXN0IHRoZSBjb21wb25lbnQncyBpbXBsZW1lbnRhdGlvbiB0byBiZVxuICAgICAgICAgICAgLy8gd2lyZWQgdXAgd2l0aCB0aGUgaG9zdCBlbGVtZW50XG4gICAgICAgICAgICBDc3RyID0gbG9hZE1vZHVsZShjbXBNZXRhLCBob3N0UmVmLCBobXJWZXJzaW9uSWQpO1xuICAgICAgICAgICAgaWYgKENzdHIudGhlbikge1xuICAgICAgICAgICAgICAgIC8vIEF3YWl0IGNyZWF0ZXMgYSBtaWNyby10YXNrIGF2b2lkIGlmIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kTG9hZCA9IHVuaXF1ZVRpbWUoYHN0OmxvYWQ6JHtjbXBNZXRhLiR0YWdOYW1lJH06JHtob3N0UmVmLiRtb2RlTmFtZSR9YCwgYFtTdGVuY2lsXSBMb2FkIG1vZHVsZSBmb3IgPCR7Y21wTWV0YS4kdGFnTmFtZSR9PmApO1xuICAgICAgICAgICAgICAgIENzdHIgPSBhd2FpdCBDc3RyO1xuICAgICAgICAgICAgICAgIGVuZExvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoQlVJTEQuaXNEZXYgfHwgQlVJTEQuaXNEZWJ1ZykgJiYgIUNzdHIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbnN0cnVjdG9yIGZvciBcIiR7Y21wTWV0YS4kdGFnTmFtZSR9IyR7aG9zdFJlZi4kbW9kZU5hbWUkfVwiIHdhcyBub3QgZm91bmRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5tZW1iZXIgJiYgIUNzdHIuaXNQcm94aWVkKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UndmUgbmV2ZXIgcHJveGllZCB0aGlzIENvbnN0cnVjdG9yIGJlZm9yZVxuICAgICAgICAgICAgICAgIC8vIGxldCdzIGFkZCB0aGUgZ2V0dGVycy9zZXR0ZXJzIHRvIGl0cyBwcm90b3R5cGUgYmVmb3JlXG4gICAgICAgICAgICAgICAgLy8gdGhlIGZpcnN0IHRpbWUgd2UgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgICAgICAgIGlmIChCVUlMRC53YXRjaENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNtcE1ldGEuJHdhdGNoZXJzJCA9IENzdHIud2F0Y2hlcnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3h5Q29tcG9uZW50KENzdHIsIGNtcE1ldGEsIDIgLyogUFJPWFlfRkxBR1MucHJveHlTdGF0ZSAqLyk7XG4gICAgICAgICAgICAgICAgQ3N0ci5pc1Byb3hpZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZW5kTmV3SW5zdGFuY2UgPSBjcmVhdGVUaW1lKCdjcmVhdGVJbnN0YW5jZScsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgICAgICAgIC8vIG9rLCB0aW1lIHRvIGNvbnN0cnVjdCB0aGUgaW5zdGFuY2VcbiAgICAgICAgICAgIC8vIGJ1dCBsZXQncyBrZWVwIHRyYWNrIG9mIHdoZW4gd2Ugc3RhcnQgYW5kIHN0b3BcbiAgICAgICAgICAgIC8vIHNvIHRoYXQgdGhlIGdldHRlcnMvc2V0dGVycyBkb24ndCBpbmNvcnJlY3RseSBzdGVwIG9uIGRhdGFcbiAgICAgICAgICAgIGlmIChCVUlMRC5tZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gOCAvKiBIT1NUX0ZMQUdTLmlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3QgdGhlIGxhenktbG9hZGVkIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgICAgLy8gcGFzc2luZyB0aGUgaG9zdFJlZiBpcyB2ZXJ5IGltcG9ydGFudCBkdXJpbmdcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdGlvbiBpbiBvcmRlciB0byBkaXJlY3RseSB3aXJlIHRvZ2V0aGVyIHRoZVxuICAgICAgICAgICAgLy8gaG9zdCBlbGVtZW50IGFuZCB0aGUgbGF6eS1sb2FkZWQgaW5zdGFuY2VcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbmV3IENzdHIoaG9zdFJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5tZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfjggLyogSE9TVF9GTEFHUy5pc0NvbnN0cnVjdGluZ0luc3RhbmNlICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELndhdGNoQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMTI4IC8qIEhPU1RfRkxBR1MuaXNXYXRjaFJlYWR5ICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5kTmV3SW5zdGFuY2UoKTtcbiAgICAgICAgICAgIGZpcmVDb25uZWN0ZWRDYWxsYmFjayhob3N0UmVmLiRsYXp5SW5zdGFuY2UkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHN5bmMgY29uc3RydWN0b3IgY29tcG9uZW50XG4gICAgICAgICAgICBDc3RyID0gZWxtLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDMyIC8qIEhPU1RfRkxBR1MuaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQgKi87XG4gICAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5IHRvIG1hcmsgdGhlIGNvbXBvbmVudCBhcyByZWFkeSBiZWZvcmUgc2V0dGluZyBgaXNXYXRjaFJlYWR5YC4gT3RoZXJ3aXNlLFxuICAgICAgICAgICAgLy8gd2F0Y2hlcnMgbWF5IGZpcmUgcHJlbWF0dXJlbHkgaWYgYGN1c3RvbUVsZW1lbnRzLmdldCgpYC9gY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoKWAgcmVzb2x2ZXMgX2JlZm9yZV9cbiAgICAgICAgICAgIC8vIFN0ZW5jaWwgaGFzIGNvbXBsZXRlZCBpbnN0YW50aWF0aW5nIHRoZSBjb21wb25lbnQuXG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZChjbXBNZXRhLiR0YWdOYW1lJCkudGhlbigoKSA9PiAoaG9zdFJlZi4kZmxhZ3MkIHw9IDEyOCAvKiBIT1NUX0ZMQUdTLmlzV2F0Y2hSZWFkeSAqLykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5zdHlsZSAmJiBDc3RyLnN0eWxlKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGNvbXBvbmVudCBoYXMgc3R5bGVzIGJ1dCB3ZSBoYXZlbid0IHJlZ2lzdGVyZWQgdGhlbSB5ZXRcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IENzdHIuc3R5bGU7XG4gICAgICAgICAgICBpZiAoQlVJTEQubW9kZSAmJiB0eXBlb2Ygc3R5bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBzdHlsZVsoaG9zdFJlZi4kbW9kZU5hbWUkID0gY29tcHV0ZU1vZGUoZWxtKSldO1xuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSAmJiBob3N0UmVmLiRtb2RlTmFtZSQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSgncy1tb2RlJywgaG9zdFJlZi4kbW9kZU5hbWUkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzY29wZUlkID0gZ2V0U2NvcGVJZChjbXBNZXRhLCBob3N0UmVmLiRtb2RlTmFtZSQpO1xuICAgICAgICAgICAgaWYgKCFzdHlsZXMuaGFzKHNjb3BlSWQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kUmVnaXN0ZXJTdHlsZXMgPSBjcmVhdGVUaW1lKCdyZWdpc3RlclN0eWxlcycsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgICAgICAgICAgICBpZiAoIUJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlICYmXG4gICAgICAgICAgICAgICAgICAgIEJVSUxELnNoYWRvd0RvbSAmJlxuICAgICAgICAgICAgICAgICAgICBCVUlMRC5zaGFkb3dEb21TaGltICYmXG4gICAgICAgICAgICAgICAgICAgIGNtcE1ldGEuJGZsYWdzJCAmIDggLyogQ01QX0ZMQUdTLm5lZWRzU2hhZG93RG9tU2hpbSAqLykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IGF3YWl0IGltcG9ydCgnLi9zaGFkb3ctY3NzLmpzJykudGhlbigobSkgPT4gbS5zY29wZUNzcyhzdHlsZSwgc2NvcGVJZCwgZmFsc2UpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJTdHlsZShzY29wZUlkLCBzdHlsZSwgISEoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBDTVBfRkxBR1Muc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykpO1xuICAgICAgICAgICAgICAgIGVuZFJlZ2lzdGVyU3R5bGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2UndmUgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYSBsYXp5IGluc3RhbmNlXG4gICAgY29uc3QgYW5jZXN0b3JDb21wb25lbnQgPSBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQ7XG4gICAgY29uc3Qgc2NoZWR1bGUgPSAoKSA9PiBzY2hlZHVsZVVwZGF0ZShob3N0UmVmLCB0cnVlKTtcbiAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nICYmIGFuY2VzdG9yQ29tcG9uZW50ICYmIGFuY2VzdG9yQ29tcG9uZW50WydzLXJjJ10pIHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgaW5pdGlhbCBsb2FkIGFuZCB0aGlzIGNvbXBvbmVudCBpdCBoYXMgYW4gYW5jZXN0b3IgY29tcG9uZW50XG4gICAgICAgIC8vIGJ1dCB0aGUgYW5jZXN0b3IgY29tcG9uZW50IGhhcyBOT1QgZmlyZWQgaXRzIHdpbGwgdXBkYXRlIGxpZmVjeWNsZSB5ZXRcbiAgICAgICAgLy8gc28gbGV0J3MganVzdCBjb29sIG91ciBqZXRzIGFuZCB3YWl0IGZvciB0aGUgYW5jZXN0b3IgdG8gY29udGludWUgZmlyc3RcbiAgICAgICAgLy8gdGhpcyB3aWxsIGdldCBmaXJlZCBvZmYgd2hlbiB0aGUgYW5jZXN0b3IgY29tcG9uZW50XG4gICAgICAgIC8vIGZpbmFsbHkgZ2V0cyBhcm91bmQgdG8gcmVuZGVyaW5nIGl0cyBsYXp5IHNlbGZcbiAgICAgICAgLy8gZmlyZSBvZmYgdGhlIGluaXRpYWwgdXBkYXRlXG4gICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXJjJ10ucHVzaChzY2hlZHVsZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzY2hlZHVsZSgpO1xuICAgIH1cbn07XG5jb25zdCBmaXJlQ29ubmVjdGVkQ2FsbGJhY2sgPSAoaW5zdGFuY2UpID0+IHtcbiAgICBpZiAoQlVJTEQubGF6eUxvYWQgJiYgQlVJTEQuY29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgICAgc2FmZUNhbGwoaW5zdGFuY2UsICdjb25uZWN0ZWRDYWxsYmFjaycpO1xuICAgIH1cbn07XG5jb25zdCBjb25uZWN0ZWRDYWxsYmFjayA9IChlbG0pID0+IHtcbiAgICBpZiAoKHBsdC4kZmxhZ3MkICYgMSAvKiBQTEFURk9STV9GTEFHUy5pc1RtcERpc2Nvbm5lY3RlZCAqLykgPT09IDApIHtcbiAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoZWxtKTtcbiAgICAgICAgY29uc3QgY21wTWV0YSA9IGhvc3RSZWYuJGNtcE1ldGEkO1xuICAgICAgICBjb25zdCBlbmRDb25uZWN0ZWQgPSBjcmVhdGVUaW1lKCdjb25uZWN0ZWRDYWxsYmFjaycsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldFBhcmVudCkge1xuICAgICAgICAgICAgLy8gb25seSBydW4gaWYgd2UgaGF2ZSBsaXN0ZW5lcnMgYmVpbmcgYXR0YWNoZWQgdG8gYSBwYXJlbnRcbiAgICAgICAgICAgIGFkZEhvc3RFdmVudExpc3RlbmVycyhlbG0sIGhvc3RSZWYsIGNtcE1ldGEuJGxpc3RlbmVycyQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGhvc3RSZWYuJGZsYWdzJCAmIDEgLyogSE9TVF9GTEFHUy5oYXNDb25uZWN0ZWQgKi8pKSB7XG4gICAgICAgICAgICAvLyBmaXJzdCB0aW1lIHRoaXMgY29tcG9uZW50IGhhcyBjb25uZWN0ZWRcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxIC8qIEhPU1RfRkxBR1MuaGFzQ29ubmVjdGVkICovO1xuICAgICAgICAgICAgbGV0IGhvc3RJZDtcbiAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlQ2xpZW50U2lkZSkge1xuICAgICAgICAgICAgICAgIGhvc3RJZCA9IGVsbS5nZXRBdHRyaWJ1dGUoSFlEUkFURV9JRCk7XG4gICAgICAgICAgICAgICAgaWYgKGhvc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmIHN1cHBvcnRzU2hhZG93ICYmIGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogQ01QX0ZMQUdTLnNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjb3BlSWQgPSBCVUlMRC5tb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhZGRTdHlsZShlbG0uc2hhZG93Um9vdCwgY21wTWV0YSwgZWxtLmdldEF0dHJpYnV0ZSgncy1tb2RlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhZGRTdHlsZShlbG0uc2hhZG93Um9vdCwgY21wTWV0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZShzY29wZUlkICsgJy1oJywgc2NvcGVJZCArICctcycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemVDbGllbnRIeWRyYXRlKGVsbSwgY21wTWV0YS4kdGFnTmFtZSQsIGhvc3RJZCwgaG9zdFJlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uICYmICFob3N0SWQpIHtcbiAgICAgICAgICAgICAgICAvLyBpbml0VXBkYXRlXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHNsb3QgcG9seWZpbGwgaXMgcmVxdWlyZWQgd2UnbGwgbmVlZCB0byBwdXQgc29tZSBub2Rlc1xuICAgICAgICAgICAgICAgIC8vIGluIGhlcmUgdG8gYWN0IGFzIG9yaWdpbmFsIGNvbnRlbnQgYW5jaG9ycyBhcyB3ZSBtb3ZlIG5vZGVzIGFyb3VuZFxuICAgICAgICAgICAgICAgIC8vIGhvc3QgZWxlbWVudCBoYXMgYmVlbiBjb25uZWN0ZWQgdG8gdGhlIERPTVxuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSB8fFxuICAgICAgICAgICAgICAgICAgICAoKEJVSUxELnNsb3QgfHwgQlVJTEQuc2hhZG93RG9tKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgY21wTWV0YS4kZmxhZ3MkICYgKDQgLyogQ01QX0ZMQUdTLmhhc1Nsb3RSZWxvY2F0aW9uICovIHwgOCAvKiBDTVBfRkxBR1MubmVlZHNTaGFkb3dEb21TaGltICovKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudFJlZmVyZW5jZShlbG0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBmaXJzdCBhbmNlc3RvciBjb21wb25lbnQgKGlmIHRoZXJlIGlzIG9uZSkgYW5kIHJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb21wb25lbnQgYXMgb25lIG9mIHRoZSBhY3RpdmVseSBsb2FkaW5nIGNoaWxkIGNvbXBvbmVudHMgZm9yIGl0cyBhbmNlc3RvclxuICAgICAgICAgICAgICAgIGxldCBhbmNlc3RvckNvbXBvbmVudCA9IGVsbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoKGFuY2VzdG9yQ29tcG9uZW50ID0gYW5jZXN0b3JDb21wb25lbnQucGFyZW50Tm9kZSB8fCBhbmNlc3RvckNvbXBvbmVudC5ob3N0KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGltYiB1cCB0aGUgYW5jZXN0b3JzIGxvb2tpbmcgZm9yIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAvLyBjb21wb25lbnQgdGhhdCBoYXNuJ3QgZmluaXNoZWQgaXRzIGxpZmVjeWNsZSB1cGRhdGUgeWV0XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQlVJTEQuaHlkcmF0ZUNsaWVudFNpZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2VzdG9yQ29tcG9uZW50Lm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jZXN0b3JDb21wb25lbnQuaGFzQXR0cmlidXRlKCdzLWlkJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgdGhpcyBjb21wb25lbnRzIGZpcnN0IGFuY2VzdG9yIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGlzIGNvbXBvbmVudCdzIGFuY2VzdG9yIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoVG9BbmNlc3Rvcihob3N0UmVmLCAoaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkID0gYW5jZXN0b3JDb21wb25lbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTGF6eSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3dlYi1jb21wb25lbnRzL2Jlc3QtcHJhY3RpY2VzI2xhenktcHJvcGVydGllc1xuICAgICAgICAgICAgaWYgKEJVSUxELnByb3AgJiYgIUJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlICYmIGNtcE1ldGEuJG1lbWJlcnMkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY21wTWV0YS4kbWVtYmVycyQpLm1hcCgoW21lbWJlck5hbWUsIFttZW1iZXJGbGFnc11dKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZW1iZXJGbGFncyAmIDMxIC8qIE1FTUJFUl9GTEFHUy5Qcm9wICovICYmIGVsbS5oYXNPd25Qcm9wZXJ0eShtZW1iZXJOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbG1bbWVtYmVyTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZWxtW21lbWJlck5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtW21lbWJlck5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5pbml0aWFsaXplTmV4dFRpY2spIHtcbiAgICAgICAgICAgICAgICAvLyBjb25uZWN0ZWRDYWxsYmFjaywgdGFza1F1ZXVlLCBpbml0aWFsTG9hZFxuICAgICAgICAgICAgICAgIC8vIGFuZ3VsYXIgc2V0cyBhdHRyaWJ1dGUgQUZURVIgY29ubmVjdENhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTg5MDlcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xOTk0MFxuICAgICAgICAgICAgICAgIG5leHRUaWNrKCgpID0+IGluaXRpYWxpemVDb21wb25lbnQoZWxtLCBob3N0UmVmLCBjbXBNZXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplQ29tcG9uZW50KGVsbSwgaG9zdFJlZiwgY21wTWV0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBub3QgdGhlIGZpcnN0IHRpbWUgdGhpcyBoYXMgY29ubmVjdGVkXG4gICAgICAgICAgICAvLyByZWF0dGFjaCBhbnkgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBob3N0XG4gICAgICAgICAgICAvLyBzaW5jZSB0aGV5IHdvdWxkIGhhdmUgYmVlbiByZW1vdmVkIHdoZW4gZGlzY29ubmVjdGVkXG4gICAgICAgICAgICBhZGRIb3N0RXZlbnRMaXN0ZW5lcnMoZWxtLCBob3N0UmVmLCBjbXBNZXRhLiRsaXN0ZW5lcnMkLCBmYWxzZSk7XG4gICAgICAgICAgICAvLyBmaXJlIG9mZiBjb25uZWN0ZWRDYWxsYmFjaygpIG9uIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgICAgICAgICAgZmlyZUNvbm5lY3RlZENhbGxiYWNrKGhvc3RSZWYuJGxhenlJbnN0YW5jZSQpO1xuICAgICAgICB9XG4gICAgICAgIGVuZENvbm5lY3RlZCgpO1xuICAgIH1cbn07XG5jb25zdCBzZXRDb250ZW50UmVmZXJlbmNlID0gKGVsbSkgPT4ge1xuICAgIC8vIG9ubHkgcmVxdWlyZWQgd2hlbiB3ZSdyZSBOT1QgdXNpbmcgbmF0aXZlIHNoYWRvdyBkb20gKHNsb3QpXG4gICAgLy8gb3IgdGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmUgc2hhZG93IGRvbVxuICAgIC8vIGFuZCB0aGlzIGhvc3QgZWxlbWVudCB3YXMgTk9UIGNyZWF0ZWQgd2l0aCBTU1JcbiAgICAvLyBsZXQncyBwaWNrIG91dCB0aGUgaW5uZXIgY29udGVudCBmb3Igc2xvdCBwcm9qZWN0aW9uXG4gICAgLy8gY3JlYXRlIGEgbm9kZSB0byByZXByZXNlbnQgd2hlcmUgdGhlIG9yaWdpbmFsXG4gICAgLy8gY29udGVudCB3YXMgZmlyc3QgcGxhY2VkLCB3aGljaCBpcyB1c2VmdWwgbGF0ZXIgb25cbiAgICBjb25zdCBjb250ZW50UmVmRWxtID0gKGVsbVsncy1jciddID0gZG9jLmNyZWF0ZUNvbW1lbnQoQlVJTEQuaXNEZWJ1ZyA/IGBjb250ZW50LXJlZiAoaG9zdD0ke2VsbS5sb2NhbE5hbWV9KWAgOiAnJykpO1xuICAgIGNvbnRlbnRSZWZFbG1bJ3MtY24nXSA9IHRydWU7XG4gICAgZWxtLmluc2VydEJlZm9yZShjb250ZW50UmVmRWxtLCBlbG0uZmlyc3RDaGlsZCk7XG59O1xuY29uc3QgZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSAoZWxtKSA9PiB7XG4gICAgaWYgKChwbHQuJGZsYWdzJCAmIDEgLyogUExBVEZPUk1fRkxBR1MuaXNUbXBEaXNjb25uZWN0ZWQgKi8pID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKGVsbSk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gQlVJTEQubGF6eUxvYWQgPyBob3N0UmVmLiRsYXp5SW5zdGFuY2UkIDogZWxtO1xuICAgICAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyKSB7XG4gICAgICAgICAgICBpZiAoaG9zdFJlZi4kcm1MaXN0ZW5lcnMkKSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kcm1MaXN0ZW5lcnMkLm1hcCgocm1MaXN0ZW5lcikgPT4gcm1MaXN0ZW5lcigpKTtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRybUxpc3RlbmVycyQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xlYXIgQ1NTIHZhci1zaGltIHRyYWNraW5nXG4gICAgICAgIGlmIChCVUlMRC5jc3NWYXJTaGltICYmIHBsdC4kY3NzU2hpbSQpIHtcbiAgICAgICAgICAgIHBsdC4kY3NzU2hpbSQucmVtb3ZlSG9zdChlbG0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5sYXp5TG9hZCAmJiBCVUlMRC5kaXNjb25uZWN0ZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgc2FmZUNhbGwoaW5zdGFuY2UsICdkaXNjb25uZWN0ZWRDYWxsYmFjaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5jbXBEaWRVbmxvYWQpIHtcbiAgICAgICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50RGlkVW5sb2FkJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IChDc3RyLCBjb21wYWN0TWV0YSkgPT4ge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShjb21wYWN0TWV0YVsxXSwgcHJveHlDdXN0b21FbGVtZW50KENzdHIsIGNvbXBhY3RNZXRhKSk7XG59O1xuY29uc3QgcHJveHlDdXN0b21FbGVtZW50ID0gKENzdHIsIGNvbXBhY3RNZXRhKSA9PiB7XG4gICAgY29uc3QgY21wTWV0YSA9IHtcbiAgICAgICAgJGZsYWdzJDogY29tcGFjdE1ldGFbMF0sXG4gICAgICAgICR0YWdOYW1lJDogY29tcGFjdE1ldGFbMV0sXG4gICAgfTtcbiAgICBpZiAoQlVJTEQubWVtYmVyKSB7XG4gICAgICAgIGNtcE1ldGEuJG1lbWJlcnMkID0gY29tcGFjdE1ldGFbMl07XG4gICAgfVxuICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXIpIHtcbiAgICAgICAgY21wTWV0YS4kbGlzdGVuZXJzJCA9IGNvbXBhY3RNZXRhWzNdO1xuICAgIH1cbiAgICBpZiAoQlVJTEQud2F0Y2hDYWxsYmFjaykge1xuICAgICAgICBjbXBNZXRhLiR3YXRjaGVycyQgPSBDc3RyLiR3YXRjaGVycyQ7XG4gICAgfVxuICAgIGlmIChCVUlMRC5yZWZsZWN0KSB7XG4gICAgICAgIGNtcE1ldGEuJGF0dHJzVG9SZWZsZWN0JCA9IFtdO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmICFzdXBwb3J0c1NoYWRvdyAmJiBjbXBNZXRhLiRmbGFncyQgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgIGNtcE1ldGEuJGZsYWdzJCB8PSA4IC8qIENNUF9GTEFHUy5uZWVkc1NoYWRvd0RvbVNoaW0gKi87XG4gICAgfVxuICAgIGNvbnN0IG9yaWdpbmFsQ29ubmVjdGVkQ2FsbGJhY2sgPSBDc3RyLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaztcbiAgICBjb25zdCBvcmlnaW5hbERpc2Nvbm5lY3RlZENhbGxiYWNrID0gQ3N0ci5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2s7XG4gICAgT2JqZWN0LmFzc2lnbihDc3RyLnByb3RvdHlwZSwge1xuICAgICAgICBfX3JlZ2lzdGVySG9zdCgpIHtcbiAgICAgICAgICAgIHJlZ2lzdGVySG9zdCh0aGlzLCBjbXBNZXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFjayh0aGlzKTtcbiAgICAgICAgICAgIGlmIChCVUlMRC5jb25uZWN0ZWRDYWxsYmFjayAmJiBvcmlnaW5hbENvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxDb25uZWN0ZWRDYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKHRoaXMpO1xuICAgICAgICAgICAgaWYgKEJVSUxELmRpc2Nvbm5lY3RlZENhbGxiYWNrICYmIG9yaWdpbmFsRGlzY29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbERpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9fYXR0YWNoU2hhZG93KCkge1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRzU2hhZG93KSB7XG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELnNoYWRvd0RlbGVnYXRlc0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdvcGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYXRlc0ZvY3VzOiAhIShjbXBNZXRhLiRmbGFncyQgJiAxNiAvKiBDTVBfRkxBR1Muc2hhZG93RGVsZWdhdGVzRm9jdXMgKi8pLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhZG93Um9vdCA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgQ3N0ci5pcyA9IGNtcE1ldGEuJHRhZ05hbWUkO1xuICAgIHJldHVybiBwcm94eUNvbXBvbmVudChDc3RyLCBjbXBNZXRhLCAxIC8qIFBST1hZX0ZMQUdTLmlzRWxlbWVudENvbnN0cnVjdG9yICovIHwgMiAvKiBQUk9YWV9GTEFHUy5wcm94eVN0YXRlICovKTtcbn07XG5jb25zdCBmb3JjZU1vZGVVcGRhdGUgPSAoZWxtKSA9PiB7XG4gICAgaWYgKEJVSUxELnN0eWxlICYmIEJVSUxELm1vZGUgJiYgIUJVSUxELmxhenlMb2FkKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBjb21wdXRlTW9kZShlbG0pO1xuICAgICAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihlbG0pO1xuICAgICAgICBpZiAoaG9zdFJlZi4kbW9kZU5hbWUkICE9PSBtb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gICAgICAgICAgICBjb25zdCBvbGRTY29wZUlkID0gZWxtWydzLXNjJ107XG4gICAgICAgICAgICBjb25zdCBzY29wZUlkID0gZ2V0U2NvcGVJZChjbXBNZXRhLCBtb2RlKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZWxtLmNvbnN0cnVjdG9yLnN0eWxlW21vZGVdO1xuICAgICAgICAgICAgY29uc3QgZmxhZ3MgPSBjbXBNZXRhLiRmbGFncyQ7XG4gICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0eWxlcy5oYXMoc2NvcGVJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJTdHlsZShzY29wZUlkLCBzdHlsZSwgISEoZmxhZ3MgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvc3RSZWYuJG1vZGVOYW1lJCA9IG1vZGU7XG4gICAgICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUob2xkU2NvcGVJZCArICctaCcsIG9sZFNjb3BlSWQgKyAnLXMnKTtcbiAgICAgICAgICAgICAgICBhdHRhY2hTdHlsZXMoaG9zdFJlZik7XG4gICAgICAgICAgICAgICAgZm9yY2VVcGRhdGUoZWxtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBwYXRjaENsb25lTm9kZSA9IChIb3N0RWxlbWVudFByb3RvdHlwZSkgPT4ge1xuICAgIGNvbnN0IG9yZ0Nsb25lTm9kZSA9IEhvc3RFbGVtZW50UHJvdG90eXBlLmNsb25lTm9kZTtcbiAgICBIb3N0RWxlbWVudFByb3RvdHlwZS5jbG9uZU5vZGUgPSBmdW5jdGlvbiAoZGVlcCkge1xuICAgICAgICBjb25zdCBzcmNOb2RlID0gdGhpcztcbiAgICAgICAgY29uc3QgaXNTaGFkb3dEb20gPSBCVUlMRC5zaGFkb3dEb20gPyBzcmNOb2RlLnNoYWRvd1Jvb3QgJiYgc3VwcG9ydHNTaGFkb3cgOiBmYWxzZTtcbiAgICAgICAgY29uc3QgY2xvbmVkTm9kZSA9IG9yZ0Nsb25lTm9kZS5jYWxsKHNyY05vZGUsIGlzU2hhZG93RG9tID8gZGVlcCA6IGZhbHNlKTtcbiAgICAgICAgaWYgKEJVSUxELnNsb3QgJiYgIWlzU2hhZG93RG9tICYmIGRlZXApIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGxldCBzbG90dGVkLCBub25TdGVuY2lsTm9kZTtcbiAgICAgICAgICAgIGNvbnN0IHN0ZW5jaWxQcml2YXRlcyA9IFtcbiAgICAgICAgICAgICAgICAncy1pZCcsXG4gICAgICAgICAgICAgICAgJ3MtY3InLFxuICAgICAgICAgICAgICAgICdzLWxyJyxcbiAgICAgICAgICAgICAgICAncy1yYycsXG4gICAgICAgICAgICAgICAgJ3Mtc2MnLFxuICAgICAgICAgICAgICAgICdzLXAnLFxuICAgICAgICAgICAgICAgICdzLWNuJyxcbiAgICAgICAgICAgICAgICAncy1zcicsXG4gICAgICAgICAgICAgICAgJ3Mtc24nLFxuICAgICAgICAgICAgICAgICdzLWhuJyxcbiAgICAgICAgICAgICAgICAncy1vbCcsXG4gICAgICAgICAgICAgICAgJ3MtbnInLFxuICAgICAgICAgICAgICAgICdzLXNpJyxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNyY05vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNsb3R0ZWQgPSBzcmNOb2RlLmNoaWxkTm9kZXNbaV1bJ3MtbnInXTtcbiAgICAgICAgICAgICAgICBub25TdGVuY2lsTm9kZSA9IHN0ZW5jaWxQcml2YXRlcy5ldmVyeSgocHJpdmF0ZUZpZWxkKSA9PiAhc3JjTm9kZS5jaGlsZE5vZGVzW2ldW3ByaXZhdGVGaWVsZF0pO1xuICAgICAgICAgICAgICAgIGlmIChzbG90dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5hcHBlbmRDaGlsZFNsb3RGaXggJiYgY2xvbmVkTm9kZS5fX2FwcGVuZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWROb2RlLl9fYXBwZW5kQ2hpbGQoc2xvdHRlZC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkTm9kZS5hcHBlbmRDaGlsZChzbG90dGVkLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vblN0ZW5jaWxOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb25lZE5vZGUuYXBwZW5kQ2hpbGQoc3JjTm9kZS5jaGlsZE5vZGVzW2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG9uZWROb2RlO1xuICAgIH07XG59O1xuY29uc3QgcGF0Y2hTbG90QXBwZW5kQ2hpbGQgPSAoSG9zdEVsZW1lbnRQcm90b3R5cGUpID0+IHtcbiAgICBIb3N0RWxlbWVudFByb3RvdHlwZS5fX2FwcGVuZENoaWxkID0gSG9zdEVsZW1lbnRQcm90b3R5cGUuYXBwZW5kQ2hpbGQ7XG4gICAgSG9zdEVsZW1lbnRQcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAobmV3Q2hpbGQpIHtcbiAgICAgICAgY29uc3Qgc2xvdE5hbWUgPSAobmV3Q2hpbGRbJ3Mtc24nXSA9IGdldFNsb3ROYW1lKG5ld0NoaWxkKSk7XG4gICAgICAgIGNvbnN0IHNsb3ROb2RlID0gZ2V0SG9zdFNsb3ROb2RlKHRoaXMuY2hpbGROb2Rlcywgc2xvdE5hbWUpO1xuICAgICAgICBpZiAoc2xvdE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3RDaGlsZE5vZGVzID0gZ2V0SG9zdFNsb3RDaGlsZE5vZGVzKHNsb3ROb2RlLCBzbG90TmFtZSk7XG4gICAgICAgICAgICBjb25zdCBhcHBlbmRBZnRlciA9IHNsb3RDaGlsZE5vZGVzW3Nsb3RDaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgcmV0dXJuIGFwcGVuZEFmdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBhcHBlbmRBZnRlci5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX19hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgfTtcbn07XG4vKipcbiAqIFBhdGNoZXMgdGhlIHRleHQgY29udGVudCBvZiBhbiB1bm5hbWVkIHNsb3R0ZWQgbm9kZSBpbnNpZGUgYSBzY29wZWQgY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdEVsZW1lbnRQcm90b3R5cGUgdGhlIGBFbGVtZW50YCB0byBiZSBwYXRjaGVkXG4gKiBAcGFyYW0gY21wTWV0YSBjb21wb25lbnQgcnVudGltZSBtZXRhZGF0YSB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBiZSBwYXRjaGVkIG9yIG5vdFxuICovXG5jb25zdCBwYXRjaFRleHRDb250ZW50ID0gKGhvc3RFbGVtZW50UHJvdG90eXBlLCBjbXBNZXRhKSA9PiB7XG4gICAgaWYgKEJVSUxELnNjb3BlZCAmJiBjbXBNZXRhLiRmbGFncyQgJiAyIC8qIENNUF9GTEFHUy5zY29wZWRDc3NFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLCAndGV4dENvbnRlbnQnKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGhvc3RFbGVtZW50UHJvdG90eXBlLCAnX190ZXh0Q29udGVudCcsIGRlc2NyaXB0b3IpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaG9zdEVsZW1lbnRQcm90b3R5cGUsICd0ZXh0Q29udGVudCcsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSAnZGVmYXVsdCBzbG90Jywgd2hpY2ggd291bGQgYmUgdGhlIGZpcnN0IHNsb3QgaW4gYSBzaGFkb3cgdHJlZSAoaWYgd2Ugd2VyZSB1c2luZyBvbmUpLCB3aG9zZSBuYW1lIGlzXG4gICAgICAgICAgICAgICAgLy8gdGhlIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3ROb2RlID0gZ2V0SG9zdFNsb3ROb2RlKHRoaXMuY2hpbGROb2RlcywgJycpO1xuICAgICAgICAgICAgICAgIC8vIHdoZW4gYSBzbG90IG5vZGUgaXMgZm91bmQsIHRoZSB0ZXh0Q29udGVudCBfbWF5XyBiZSBmb3VuZCBpbiB0aGUgbmV4dCBzaWJsaW5nICh0ZXh0KSBub2RlLCBkZXBlbmRpbmcgb24gaG93XG4gICAgICAgICAgICAgICAgLy8gbm9kZXMgd2VyZSByZW9yZGVyZWQgZHVyaW5nIHRoZSB2ZG9tIHJlbmRlci4gZmlyc3QgdHJ5IHRvIGdldCB0aGUgdGV4dCBjb250ZW50IGZyb20gdGhlIHNpYmxpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCgoX2EgPSBzbG90Tm9kZSA9PT0gbnVsbCB8fCBzbG90Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xvdE5vZGUubmV4dFNpYmxpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub2RlVHlwZSkgPT09IDMgLyogTk9ERV9UWVBFUy5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNsb3ROb2RlLm5leHRTaWJsaW5nLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzbG90Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2xvdE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWxsYmFjayB0byB0aGUgb3JpZ2luYWwgaW1wbGVtZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX190ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgJ2RlZmF1bHQgc2xvdCcsIHdoaWNoIHdvdWxkIGJlIHRoZSBmaXJzdCBzbG90IGluIGEgc2hhZG93IHRyZWUgKGlmIHdlIHdlcmUgdXNpbmcgb25lKSwgd2hvc2UgbmFtZSBpc1xuICAgICAgICAgICAgICAgIC8vIHRoZSBlbXB0eSBzdHJpbmdcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90Tm9kZSA9IGdldEhvc3RTbG90Tm9kZSh0aGlzLmNoaWxkTm9kZXMsICcnKTtcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGEgc2xvdCBub2RlIGlzIGZvdW5kLCB0aGUgdGV4dENvbnRlbnQgX21heV8gbmVlZCB0byBiZSBwbGFjZWQgaW4gdGhlIG5leHQgc2libGluZyAodGV4dCkgbm9kZSxcbiAgICAgICAgICAgICAgICAvLyBkZXBlbmRpbmcgb24gaG93IG5vZGVzIHdlcmUgcmVvcmRlcmVkIGR1cmluZyB0aGUgdmRvbSByZW5kZXIuIGZpcnN0IHRyeSB0byBzZXQgdGhlIHRleHQgY29udGVudCBvbiB0aGVcbiAgICAgICAgICAgICAgICAvLyBzaWJsaW5nLlxuICAgICAgICAgICAgICAgIGlmICgoKF9hID0gc2xvdE5vZGUgPT09IG51bGwgfHwgc2xvdE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsb3ROb2RlLm5leHRTaWJsaW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZVR5cGUpID09PSAzIC8qIE5PREVfVFlQRVMuVEVYVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3ROb2RlLm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNsb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3ROb2RlLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjb3VsZG4ndCBmaW5kIGEgc2xvdCwgYnV0IHRoYXQgZG9lc24ndCBtZWFuIHRoYXQgdGhlcmUgaXNuJ3Qgb25lLiBpZiB0aGlzIGNoZWNrIHJhbiBiZWZvcmUgdGhlIERPTVxuICAgICAgICAgICAgICAgICAgICAvLyBsb2FkZWQsIHdlIGNvdWxkIGhhdmUgbWlzc2VkIGl0LiBjaGVjayBmb3IgYSBjb250ZW50IHJlZmVyZW5jZSBlbGVtZW50IG9uIHRoZSBzY29wZWQgY29tcG9uZW50IGFuZCBpbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRSZWZFbG0gPSB0aGlzWydzLWNyJ107XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50UmVmRWxtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydEJlZm9yZShjb250ZW50UmVmRWxtLCB0aGlzLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IHBhdGNoQ2hpbGRTbG90Tm9kZXMgPSAoZWxtLCBjbXBNZXRhKSA9PiB7XG4gICAgY2xhc3MgRmFrZU5vZGVMaXN0IGV4dGVuZHMgQXJyYXkge1xuICAgICAgICBpdGVtKG4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW25dO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjbXBNZXRhLiRmbGFncyQgJiA4IC8qIENNUF9GTEFHUy5uZWVkc1NoYWRvd0RvbVNoaW0gKi8pIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2Rlc0ZuID0gZWxtLl9fbG9va3VwR2V0dGVyX18oJ2NoaWxkTm9kZXMnKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsbSwgJ2NoaWxkcmVuJywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKChuKSA9PiBuLm5vZGVUeXBlID09PSAxKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxtLCAnY2hpbGRFbGVtZW50Q291bnQnLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsbSwgJ2NoaWxkTm9kZXMnLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNGbi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICgocGx0LiRmbGFncyQgJiAxIC8qIFBMQVRGT1JNX0ZMQUdTLmlzVG1wRGlzY29ubmVjdGVkICovKSA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICBnZXRIb3N0UmVmKHRoaXMpLiRmbGFncyQgJiAyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZha2VOb2RlTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBjaGlsZE5vZGVzW2ldWydzLW5yJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNsb3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBGYWtlTm9kZUxpc3QuZnJvbShjaGlsZE5vZGVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBnZXRTbG90TmFtZSA9IChub2RlKSA9PiBub2RlWydzLXNuJ10gfHwgKG5vZGUubm9kZVR5cGUgPT09IDEgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKSkgfHwgJyc7XG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHNlYXJjaGVzIGEgc2VyaWVzIG9mIGNoaWxkIG5vZGVzIGZvciBhIHNsb3Qgd2l0aCB0aGUgcHJvdmlkZWQgbmFtZS5cbiAqIEBwYXJhbSBjaGlsZE5vZGVzIHRoZSBub2RlcyB0byBzZWFyY2ggZm9yIGEgc2xvdCB3aXRoIGEgc3BlY2lmaWMgbmFtZS5cbiAqIEBwYXJhbSBzbG90TmFtZSB0aGUgbmFtZSBvZiB0aGUgc2xvdCB0byBtYXRjaCBvbi5cbiAqIEByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBzbG90IG5vZGUgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCBuYW1lLCBgbnVsbGAgb3RoZXJ3aXNlXG4gKi9cbmNvbnN0IGdldEhvc3RTbG90Tm9kZSA9IChjaGlsZE5vZGVzLCBzbG90TmFtZSkgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgY2hpbGROb2RlO1xuICAgIGZvciAoOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiAoY2hpbGROb2RlWydzLXNyJ10gJiYgY2hpbGROb2RlWydzLXNuJ10gPT09IHNsb3ROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkTm9kZSA9IGdldEhvc3RTbG90Tm9kZShjaGlsZE5vZGUuY2hpbGROb2Rlcywgc2xvdE5hbWUpO1xuICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGdldEhvc3RTbG90Q2hpbGROb2RlcyA9IChuLCBzbG90TmFtZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBbbl07XG4gICAgd2hpbGUgKChuID0gbi5uZXh0U2libGluZykgJiYgblsncy1zbiddID09PSBzbG90TmFtZSkge1xuICAgICAgICBjaGlsZE5vZGVzLnB1c2gobik7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZE5vZGVzO1xufTtcbmNvbnN0IGhtclN0YXJ0ID0gKGVsbSwgY21wTWV0YSwgaG1yVmVyc2lvbklkKSA9PiB7XG4gICAgLy8gwq9cXF8o44OEKV8vwq9cbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihlbG0pO1xuICAgIC8vIHJlc2V0IHN0YXRlIGZsYWdzIHRvIG9ubHkgaGF2ZSBiZWVuIGNvbm5lY3RlZFxuICAgIGhvc3RSZWYuJGZsYWdzJCA9IDEgLyogSE9TVF9GTEFHUy5oYXNDb25uZWN0ZWQgKi87XG4gICAgLy8gVE9ET1xuICAgIC8vIGRldGF0Y2ggYW55IGV2ZW50IGxpc3RlbmVycyB0aGF0IG1heSBoYXZlIGJlZW4gYWRkZWRcbiAgICAvLyBiZWNhdXNlIHdlJ3JlIG5vdCBwYXNzaW5nIGFuIGV4YWN0IGV2ZW50IG5hbWUgaXQnbGxcbiAgICAvLyByZW1vdmUgYWxsIG9mIHRoaXMgZWxlbWVudCdzIGV2ZW50LCB3aGljaCBpcyBnb29kXG4gICAgLy8gY3JlYXRlIGEgY2FsbGJhY2sgZm9yIHdoZW4gdGhpcyBjb21wb25lbnQgZmluaXNoZXMgaG1yXG4gICAgZWxtWydzLWhtci1sb2FkJ10gPSAoKSA9PiB7XG4gICAgICAgIC8vIGZpbmlzaGVkIGhtciBmb3IgdGhpcyBlbGVtZW50XG4gICAgICAgIGRlbGV0ZSBlbG1bJ3MtaG1yLWxvYWQnXTtcbiAgICB9O1xuICAgIC8vIHJlLWluaXRpYWxpemUgdGhlIGNvbXBvbmVudFxuICAgIGluaXRpYWxpemVDb21wb25lbnQoZWxtLCBob3N0UmVmLCBjbXBNZXRhLCBobXJWZXJzaW9uSWQpO1xufTtcbmNvbnN0IGJvb3RzdHJhcExhenkgPSAobGF6eUJ1bmRsZXMsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBpZiAoQlVJTEQucHJvZmlsZSAmJiBwZXJmb3JtYW5jZS5tYXJrKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3N0OmFwcDpzdGFydCcpO1xuICAgIH1cbiAgICBpbnN0YWxsRGV2VG9vbHMoKTtcbiAgICBjb25zdCBlbmRCb290c3RyYXAgPSBjcmVhdGVUaW1lKCdib290c3RyYXBMYXp5Jyk7XG4gICAgY29uc3QgY21wVGFncyA9IFtdO1xuICAgIGNvbnN0IGV4Y2x1ZGUgPSBvcHRpb25zLmV4Y2x1ZGUgfHwgW107XG4gICAgY29uc3QgY3VzdG9tRWxlbWVudHMgPSB3aW4uY3VzdG9tRWxlbWVudHM7XG4gICAgY29uc3QgaGVhZCA9IGRvYy5oZWFkO1xuICAgIGNvbnN0IG1ldGFDaGFyc2V0ID0gLypAX19QVVJFX18qLyBoZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbY2hhcnNldF0nKTtcbiAgICBjb25zdCB2aXNpYmlsaXR5U3R5bGUgPSAvKkBfX1BVUkVfXyovIGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzID0gW107XG4gICAgY29uc3Qgc3R5bGVzID0gLypAX19QVVJFX18qLyBkb2MucXVlcnlTZWxlY3RvckFsbChgWyR7SFlEUkFURURfU1RZTEVfSUR9XWApO1xuICAgIGxldCBhcHBMb2FkRmFsbGJhY2s7XG4gICAgbGV0IGlzQm9vdHN0cmFwcGluZyA9IHRydWU7XG4gICAgbGV0IGkgPSAwO1xuICAgIE9iamVjdC5hc3NpZ24ocGx0LCBvcHRpb25zKTtcbiAgICBwbHQuJHJlc291cmNlc1VybCQgPSBuZXcgVVJMKG9wdGlvbnMucmVzb3VyY2VzVXJsIHx8ICcuLycsIGRvYy5iYXNlVVJJKS5ocmVmO1xuICAgIGlmIChCVUlMRC5hc3luY1F1ZXVlKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnN5bmNRdWV1ZSkge1xuICAgICAgICAgICAgcGx0LiRmbGFncyQgfD0gNCAvKiBQTEFURk9STV9GTEFHUy5xdWV1ZVN5bmMgKi87XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKEJVSUxELmh5ZHJhdGVDbGllbnRTaWRlKSB7XG4gICAgICAgIC8vIElmIHRoZSBhcHAgaXMgYWxyZWFkeSBoeWRyYXRlZCB0aGVyZSBpcyBub3QgcG9pbnQgdG8gZGlzYWJsZSB0aGVcbiAgICAgICAgLy8gYXN5bmMgcXVldWUuIFRoaXMgd2lsbCBpbXByb3ZlIHRoZSBmaXJzdCBpbnB1dCBkZWxheVxuICAgICAgICBwbHQuJGZsYWdzJCB8PSAyIC8qIFBMQVRGT1JNX0ZMQUdTLmFwcExvYWRlZCAqLztcbiAgICB9XG4gICAgaWYgKEJVSUxELmh5ZHJhdGVDbGllbnRTaWRlICYmIEJVSUxELnNoYWRvd0RvbSkge1xuICAgICAgICBmb3IgKDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVnaXN0ZXJTdHlsZShzdHlsZXNbaV0uZ2V0QXR0cmlidXRlKEhZRFJBVEVEX1NUWUxFX0lEKSwgY29udmVydFNjb3BlZFRvU2hhZG93KHN0eWxlc1tpXS5pbm5lckhUTUwpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsYXp5QnVuZGxlcy5tYXAoKGxhenlCdW5kbGUpID0+IHtcbiAgICAgICAgbGF6eUJ1bmRsZVsxXS5tYXAoKGNvbXBhY3RNZXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbXBNZXRhID0ge1xuICAgICAgICAgICAgICAgICRmbGFncyQ6IGNvbXBhY3RNZXRhWzBdLFxuICAgICAgICAgICAgICAgICR0YWdOYW1lJDogY29tcGFjdE1ldGFbMV0sXG4gICAgICAgICAgICAgICAgJG1lbWJlcnMkOiBjb21wYWN0TWV0YVsyXSxcbiAgICAgICAgICAgICAgICAkbGlzdGVuZXJzJDogY29tcGFjdE1ldGFbM10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKEJVSUxELm1lbWJlcikge1xuICAgICAgICAgICAgICAgIGNtcE1ldGEuJG1lbWJlcnMkID0gY29tcGFjdE1ldGFbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgY21wTWV0YS4kbGlzdGVuZXJzJCA9IGNvbXBhY3RNZXRhWzNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELnJlZmxlY3QpIHtcbiAgICAgICAgICAgICAgICBjbXBNZXRhLiRhdHRyc1RvUmVmbGVjdCQgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC53YXRjaENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY21wTWV0YS4kd2F0Y2hlcnMkID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmICFzdXBwb3J0c1NoYWRvdyAmJiBjbXBNZXRhLiRmbGFncyQgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgY21wTWV0YS4kZmxhZ3MkIHw9IDggLyogQ01QX0ZMQUdTLm5lZWRzU2hhZG93RG9tU2hpbSAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSBCVUlMRC50cmFuc2Zvcm1UYWdOYW1lICYmIG9wdGlvbnMudHJhbnNmb3JtVGFnTmFtZVxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy50cmFuc2Zvcm1UYWdOYW1lKGNtcE1ldGEuJHRhZ05hbWUkKVxuICAgICAgICAgICAgICAgIDogY21wTWV0YS4kdGFnTmFtZSQ7XG4gICAgICAgICAgICBjb25zdCBIb3N0RWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICAgICAgICAgIC8vIFN0ZW5jaWxMYXp5SG9zdFxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yKHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBzdXBlcihzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVySG9zdChzZWxmLCBjbXBNZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiBjbXBNZXRhLiRmbGFncyQgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGNvbXBvbmVudCBpcyB1c2luZyBzaGFkb3cgZG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhpcyBicm93c2VyIHN1cHBvcnRzIHNoYWRvdyBkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgcmVhZC1vbmx5IHByb3BlcnR5IFwic2hhZG93Um9vdFwiIHRvIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZGluZyB0aGUgc2hhZG93IHJvb3QgYnVpbGQgY29uZGl0aW9uYWxzIHRvIG1pbmltaXplIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c1NoYWRvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zaGFkb3dEZWxlZ2F0ZXNGb2N1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0dGFjaFNoYWRvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAnb3BlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0ZXNGb2N1czogISEoY21wTWV0YS4kZmxhZ3MkICYgMTYgLyogQ01QX0ZMQUdTLnNoYWRvd0RlbGVnYXRlc0ZvY3VzICovKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgJiYgISgnc2hhZG93Um9vdCcgaW4gc2VsZikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNoYWRvd1Jvb3QgPSBzZWxmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zbG90Q2hpbGROb2Rlc0ZpeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hDaGlsZFNsb3ROb2RlcyhzZWxmLCBjbXBNZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwcExvYWRGYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFwcExvYWRGYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBMb2FkRmFsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Jvb3RzdHJhcHBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbm5lY3RlZENhbGxiYWNrIHdpbGwgYmUgcHJvY2Vzc2VkIG9uY2UgYWxsIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzLnB1c2godGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHQuam1wKCgpID0+IGNvbm5lY3RlZENhbGxiYWNrKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICAgICAgcGx0LmptcCgoKSA9PiBkaXNjb25uZWN0ZWRDYWxsYmFjayh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudE9uUmVhZHkoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRIb3N0UmVmKHRoaXMpLiRvblJlYWR5UHJvbWlzZSQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChCVUlMRC5jbG9uZU5vZGVGaXgpIHtcbiAgICAgICAgICAgICAgICBwYXRjaENsb25lTm9kZShIb3N0RWxlbWVudC5wcm90b3R5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELmFwcGVuZENoaWxkU2xvdEZpeCkge1xuICAgICAgICAgICAgICAgIHBhdGNoU2xvdEFwcGVuZENoaWxkKEhvc3RFbGVtZW50LnByb3RvdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuaG90TW9kdWxlUmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBIb3N0RWxlbWVudC5wcm90b3R5cGVbJ3MtaG1yJ10gPSBmdW5jdGlvbiAoaG1yVmVyc2lvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhtclN0YXJ0KHRoaXMsIGNtcE1ldGEsIGhtclZlcnNpb25JZCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5zY29wZWRTbG90VGV4dENvbnRlbnRGaXgpIHtcbiAgICAgICAgICAgICAgICBwYXRjaFRleHRDb250ZW50KEhvc3RFbGVtZW50LnByb3RvdHlwZSwgY21wTWV0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbXBNZXRhLiRsYXp5QnVuZGxlSWQkID0gbGF6eUJ1bmRsZVswXTtcbiAgICAgICAgICAgIGlmICghZXhjbHVkZS5pbmNsdWRlcyh0YWdOYW1lKSAmJiAhY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgY21wVGFncy5wdXNoKHRhZ05hbWUpO1xuICAgICAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBwcm94eUNvbXBvbmVudChIb3N0RWxlbWVudCwgY21wTWV0YSwgMSAvKiBQUk9YWV9GTEFHUy5pc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoQlVJTEQuaW52aXNpYmxlUHJlaHlkcmF0aW9uICYmIChCVUlMRC5oeWRyYXRlZENsYXNzIHx8IEJVSUxELmh5ZHJhdGVkQXR0cmlidXRlKSkge1xuICAgICAgICB2aXNpYmlsaXR5U3R5bGUuaW5uZXJIVE1MID0gY21wVGFncyArIEhZRFJBVEVEX0NTUztcbiAgICAgICAgdmlzaWJpbGl0eVN0eWxlLnNldEF0dHJpYnV0ZSgnZGF0YS1zdHlsZXMnLCAnJyk7XG4gICAgICAgIC8vIEFwcGx5IENTUCBub25jZSB0byB0aGUgc3R5bGUgdGFnIGlmIGl0IGV4aXN0c1xuICAgICAgICBjb25zdCBub25jZSA9IChfYSA9IHBsdC4kbm9uY2UkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBxdWVyeU5vbmNlTWV0YVRhZ0NvbnRlbnQoZG9jKTtcbiAgICAgICAgaWYgKG5vbmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHZpc2liaWxpdHlTdHlsZSwgbWV0YUNoYXJzZXQgPyBtZXRhQ2hhcnNldC5uZXh0U2libGluZyA6IGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIFByb2Nlc3MgZGVmZXJyZWQgY29ubmVjdGVkQ2FsbGJhY2tzIG5vdyBhbGwgY29tcG9uZW50cyBoYXZlIGJlZW4gcmVnaXN0ZXJlZFxuICAgIGlzQm9vdHN0cmFwcGluZyA9IGZhbHNlO1xuICAgIGlmIChkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MubWFwKChob3N0KSA9PiBob3N0LmNvbm5lY3RlZENhbGxiYWNrKCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKEJVSUxELnByb2ZpbGUpIHtcbiAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4gKGFwcExvYWRGYWxsYmFjayA9IHNldFRpbWVvdXQoYXBwRGlkTG9hZCwgMzAsICd0aW1lb3V0JykpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4gKGFwcExvYWRGYWxsYmFjayA9IHNldFRpbWVvdXQoYXBwRGlkTG9hZCwgMzApKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRmFsbGJhY2sgYXBwTG9hZCBldmVudFxuICAgIGVuZEJvb3RzdHJhcCgpO1xufTtcbmNvbnN0IGdldENvbm5lY3QgPSAoX3JlZiwgdGFnTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudE9uUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbG0gPSBkb2MucXVlcnlTZWxlY3Rvcih0YWdOYW1lKTtcbiAgICAgICAgaWYgKCFlbG0pIHtcbiAgICAgICAgICAgIGVsbSA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoZWxtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIGVsbS5jb21wb25lbnRPblJlYWR5ID09PSAnZnVuY3Rpb24nID8gZWxtLmNvbXBvbmVudE9uUmVhZHkoKSA6IFByb21pc2UucmVzb2x2ZShlbG0pO1xuICAgIH07XG4gICAgY29uc3QgY3JlYXRlID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudE9uUmVhZHkoKS50aGVuKChlbCkgPT4gZWwuY3JlYXRlKC4uLmFyZ3MpKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZSxcbiAgICAgICAgY29tcG9uZW50T25SZWFkeSxcbiAgICB9O1xufTtcbmNvbnN0IGdldENvbnRleHQgPSAoX2VsbSwgY29udGV4dCkgPT4ge1xuICAgIGlmIChjb250ZXh0IGluIENvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIENvbnRleHRbY29udGV4dF07XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICd3aW5kb3cnKSB7XG4gICAgICAgIHJldHVybiB3aW47XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgICAgcmV0dXJuIGRvYztcbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGV4dCA9PT0gJ2lzU2VydmVyJyB8fCBjb250ZXh0ID09PSAnaXNQcmVyZW5kZXInKSB7XG4gICAgICAgIHJldHVybiBCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGV4dCA9PT0gJ2lzQ2xpZW50Jykge1xuICAgICAgICByZXR1cm4gQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICdyZXNvdXJjZXNVcmwnIHx8IGNvbnRleHQgPT09ICdwdWJsaWNQYXRoJykge1xuICAgICAgICByZXR1cm4gZ2V0QXNzZXRQYXRoKCcuJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICdxdWV1ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdyaXRlOiB3cml0ZVRhc2ssXG4gICAgICAgICAgICByZWFkOiByZWFkVGFzayxcbiAgICAgICAgICAgIHRpY2s6IHtcbiAgICAgICAgICAgICAgICB0aGVuKGNiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0VGljayhjYik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuY29uc3QgRnJhZ21lbnQgPSAoXywgY2hpbGRyZW4pID0+IGNoaWxkcmVuO1xuY29uc3QgYWRkSG9zdEV2ZW50TGlzdGVuZXJzID0gKGVsbSwgaG9zdFJlZiwgbGlzdGVuZXJzLCBhdHRhY2hQYXJlbnRMaXN0ZW5lcnMpID0+IHtcbiAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyICYmIGxpc3RlbmVycykge1xuICAgICAgICAvLyB0aGlzIGlzIGNhbGxlZCBpbW1lZGlhdGVseSB3aXRoaW4gdGhlIGVsZW1lbnQncyBjb25zdHJ1Y3RvclxuICAgICAgICAvLyBpbml0aWFsaXplIG91ciBldmVudCBsaXN0ZW5lcnMgb24gdGhlIGhvc3QgZWxlbWVudFxuICAgICAgICAvLyB3ZSBkbyB0aGlzIG5vdyBzbyB0aGF0IHdlIGNhbiBsaXN0ZW4gdG8gZXZlbnRzIHRoYXQgbWF5XG4gICAgICAgIC8vIGhhdmUgZmlyZWQgZXZlbiBiZWZvcmUgdGhlIGluc3RhbmNlIGlzIHJlYWR5XG4gICAgICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXJUYXJnZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgY29tcG9uZW50IG1heSBoYXZlIGV2ZW50IGxpc3RlbmVycyB0aGF0IHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGUgcGFyZW50XG4gICAgICAgICAgICBpZiAoYXR0YWNoUGFyZW50TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZWluZyByYW4gZnJvbSB3aXRoaW4gdGhlIGNvbm5lY3RlZENhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggaXMgaW1wb3J0YW50IHNvIHRoYXQgd2Uga25vdyB0aGUgaG9zdCBlbGVtZW50IGFjdHVhbGx5IGhhcyBhIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gZmlsdGVyIG91dCB0aGUgbGlzdGVuZXJzIHRvIG9ubHkgaGF2ZSB0aGUgb25lcyB0aGF0IEFSRSBiZWluZyBhdHRhY2hlZCB0byB0aGUgcGFyZW50XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigoW2ZsYWdzXSkgPT4gZmxhZ3MgJiAzMiAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRQYXJlbnQgKi8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZWluZyByYW4gZnJvbSB3aXRoaW4gdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgQlVUIHRoZSBwYXJlbnQgZWxlbWVudCBsaXN0ZW5lcnMgc2hvdWxkIGJlIGF0dGFjaGVkIGF0IHRoaXMgdGltZVxuICAgICAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgdGhlIGxpc3RlbmVycyB0aGF0IGFyZSBOT1QgYmVpbmcgYXR0YWNoZWQgdG8gdGhlIHBhcmVudFxuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKFtmbGFnc10pID0+ICEoZmxhZ3MgJiAzMiAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRQYXJlbnQgKi8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lcnMubWFwKChbZmxhZ3MsIG5hbWUsIG1ldGhvZF0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldCA/IGdldEhvc3RMaXN0ZW5lclRhcmdldChlbG0sIGZsYWdzKSA6IGVsbTtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBob3N0TGlzdGVuZXJQcm94eShob3N0UmVmLCBtZXRob2QpO1xuICAgICAgICAgICAgY29uc3Qgb3B0cyA9IGhvc3RMaXN0ZW5lck9wdHMoZmxhZ3MpO1xuICAgICAgICAgICAgcGx0LmFlbCh0YXJnZXQsIG5hbWUsIGhhbmRsZXIsIG9wdHMpO1xuICAgICAgICAgICAgKGhvc3RSZWYuJHJtTGlzdGVuZXJzJCA9IGhvc3RSZWYuJHJtTGlzdGVuZXJzJCB8fCBbXSkucHVzaCgoKSA9PiBwbHQucmVsKHRhcmdldCwgbmFtZSwgaGFuZGxlciwgb3B0cykpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgaG9zdExpc3RlbmVyUHJveHkgPSAoaG9zdFJlZiwgbWV0aG9kTmFtZSkgPT4gKGV2KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKEJVSUxELmxhenlMb2FkKSB7XG4gICAgICAgICAgICBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgMjU2IC8qIEhPU1RfRkxBR1MuaXNMaXN0ZW5SZWFkeSAqLykge1xuICAgICAgICAgICAgICAgIC8vIGluc3RhbmNlIGlzIHJlYWR5LCBsZXQncyBjYWxsIGl0J3MgbWVtYmVyIG1ldGhvZCBmb3IgdGhpcyBldmVudFxuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGxhenlJbnN0YW5jZSRbbWV0aG9kTmFtZV0oZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgKGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQgPSBob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkIHx8IFtdKS5wdXNoKFttZXRob2ROYW1lLCBldl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaG9zdFJlZi4kaG9zdEVsZW1lbnQkW21ldGhvZE5hbWVdKGV2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgfVxufTtcbmNvbnN0IGdldEhvc3RMaXN0ZW5lclRhcmdldCA9IChlbG0sIGZsYWdzKSA9PiB7XG4gICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldERvY3VtZW50ICYmIGZsYWdzICYgNCAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXREb2N1bWVudCAqLylcbiAgICAgICAgcmV0dXJuIGRvYztcbiAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyVGFyZ2V0V2luZG93ICYmIGZsYWdzICYgOCAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRXaW5kb3cgKi8pXG4gICAgICAgIHJldHVybiB3aW47XG4gICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldEJvZHkgJiYgZmxhZ3MgJiAxNiAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRCb2R5ICovKVxuICAgICAgICByZXR1cm4gZG9jLmJvZHk7XG4gICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldFBhcmVudCAmJiBmbGFncyAmIDMyIC8qIExJU1RFTkVSX0ZMQUdTLlRhcmdldFBhcmVudCAqLylcbiAgICAgICAgcmV0dXJuIGVsbS5wYXJlbnRFbGVtZW50O1xuICAgIHJldHVybiBlbG07XG59O1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBob3N0TGlzdGVuZXJPcHRzID0gKGZsYWdzKSA9PiBzdXBwb3J0c0xpc3RlbmVyT3B0aW9uc1xuICAgID8gKHtcbiAgICAgICAgcGFzc2l2ZTogKGZsYWdzICYgMSAvKiBMSVNURU5FUl9GTEFHUy5QYXNzaXZlICovKSAhPT0gMCxcbiAgICAgICAgY2FwdHVyZTogKGZsYWdzICYgMiAvKiBMSVNURU5FUl9GTEFHUy5DYXB0dXJlICovKSAhPT0gMCxcbiAgICB9KVxuICAgIDogKGZsYWdzICYgMiAvKiBMSVNURU5FUl9GTEFHUy5DYXB0dXJlICovKSAhPT0gMDtcbi8qKlxuICogQXNzaWducyB0aGUgZ2l2ZW4gdmFsdWUgdG8gdGhlIG5vbmNlIHByb3BlcnR5IG9uIHRoZSBydW50aW1lIHBsYXRmb3JtIG9iamVjdC5cbiAqIER1cmluZyBydW50aW1lLCB0aGlzIHZhbHVlIGlzIHVzZWQgdG8gc2V0IHRoZSBub25jZSBhdHRyaWJ1dGUgb24gYWxsIGR5bmFtaWNhbGx5IGNyZWF0ZWQgc2NyaXB0IGFuZCBzdHlsZSB0YWdzLlxuICogQHBhcmFtIG5vbmNlIFRoZSB2YWx1ZSB0byBiZSBhc3NpZ25lZCB0byB0aGUgcGxhdGZvcm0gbm9uY2UgcHJvcGVydHkuXG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmNvbnN0IHNldE5vbmNlID0gKG5vbmNlKSA9PiAocGx0LiRub25jZSQgPSBub25jZSk7XG5jb25zdCBzZXRQbGF0Zm9ybU9wdGlvbnMgPSAob3B0cykgPT4gT2JqZWN0LmFzc2lnbihwbHQsIG9wdHMpO1xuY29uc3QgaW5zZXJ0VmRvbUFubm90YXRpb25zID0gKGRvYywgc3RhdGljQ29tcG9uZW50cykgPT4ge1xuICAgIGlmIChkb2MgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkb2NEYXRhID0ge1xuICAgICAgICAgICAgaG9zdElkczogMCxcbiAgICAgICAgICAgIHJvb3RMZXZlbElkczogMCxcbiAgICAgICAgICAgIHN0YXRpY0NvbXBvbmVudHM6IG5ldyBTZXQoc3RhdGljQ29tcG9uZW50cyksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9yZ0xvY2F0aW9uTm9kZXMgPSBbXTtcbiAgICAgICAgcGFyc2VWTm9kZUFubm90YXRpb25zKGRvYywgZG9jLmJvZHksIGRvY0RhdGEsIG9yZ0xvY2F0aW9uTm9kZXMpO1xuICAgICAgICBvcmdMb2NhdGlvbk5vZGVzLmZvckVhY2goKG9yZ0xvY2F0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG9yZ0xvY2F0aW9uTm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZVJlZiA9IG9yZ0xvY2F0aW9uTm9kZVsncy1uciddO1xuICAgICAgICAgICAgICAgIGxldCBob3N0SWQgPSBub2RlUmVmWydzLWhvc3QtaWQnXTtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZUlkID0gbm9kZVJlZlsncy1ub2RlLWlkJ107XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkSWQgPSBgJHtob3N0SWR9LiR7bm9kZUlkfWA7XG4gICAgICAgICAgICAgICAgaWYgKGhvc3RJZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3RJZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGRvY0RhdGEucm9vdExldmVsSWRzKys7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVJZCA9IGRvY0RhdGEucm9vdExldmVsSWRzO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZElkID0gYCR7aG9zdElkfS4ke25vZGVJZH1gO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVJlZi5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVSZWYuc2V0QXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQsIGNoaWxkSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGVSZWYubm9kZVR5cGUgPT09IDMgLyogTk9ERV9UWVBFLlRleHROb2RlICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaG9zdElkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBub2RlUmVmLm5vZGVWYWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRDb250ZW50ID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2VsZXNzIHdoaXRlc3BhY2Ugbm9kZSBhdCB0aGUgZG9jdW1lbnQgcm9vdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50QmVmb3JlVGV4dE5vZGUgPSBkb2MuY3JlYXRlQ29tbWVudChjaGlsZElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRCZWZvcmVUZXh0Tm9kZS5ub2RlVmFsdWUgPSBgJHtURVhUX05PREVfSUR9LiR7Y2hpbGRJZH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVJlZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb21tZW50QmVmb3JlVGV4dE5vZGUsIG5vZGVSZWYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBvcmdMb2NhdGlvbk5vZGVJZCA9IGAke09SR19MT0NBVElPTl9JRH0uJHtjaGlsZElkfWA7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JnTG9jYXRpb25QYXJlbnROb2RlID0gb3JnTG9jYXRpb25Ob2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKG9yZ0xvY2F0aW9uUGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3JnTG9jYXRpb25QYXJlbnROb2RlWydzLWVuJ10gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbmRpbmcgd2l0aCBhIFwiLlwiIG1lYW5zIHRoYXQgdGhlIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvZiB0aGlzIG5vZGUncyBvcmlnaW5hbCBsb2NhdGlvbiBpcyBhIFNIQURPVyBkb20gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoaXMgbm9kZSBpcyBhcGFydCBvZiB0aGUgcm9vdCBsZXZlbCBsaWdodCBkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZUlkICs9IGAuYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvcmdMb2NhdGlvblBhcmVudE5vZGVbJ3MtZW4nXSA9PT0gJ2MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbmRpbmcgd2l0aCBhIFwiLmNcIiBtZWFucyB0aGF0IHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2YgdGhpcyBub2RlJ3Mgb3JpZ2luYWwgbG9jYXRpb24gaXMgYSBTQ09QRUQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoaXMgbm9kZSBpcyBhcGFydCBvZiB0aGUgcm9vdCBsZXZlbCBsaWdodCBkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZUlkICs9IGAuY2A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlLm5vZGVWYWx1ZSA9IG9yZ0xvY2F0aW9uTm9kZUlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgcGFyc2VWTm9kZUFubm90YXRpb25zID0gKGRvYywgbm9kZSwgZG9jRGF0YSwgb3JnTG9jYXRpb25Ob2RlcykgPT4ge1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZVsncy1uciddICE9IG51bGwpIHtcbiAgICAgICAgb3JnTG9jYXRpb25Ob2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgbm9kZS5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoY2hpbGROb2RlKTtcbiAgICAgICAgICAgIGlmIChob3N0UmVmICE9IG51bGwgJiYgIWRvY0RhdGEuc3RhdGljQ29tcG9uZW50cy5oYXMoY2hpbGROb2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY21wRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUlkczogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGluc2VydFZOb2RlQW5ub3RhdGlvbnMoZG9jLCBjaGlsZE5vZGUsIGhvc3RSZWYuJHZub2RlJCwgZG9jRGF0YSwgY21wRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZVZOb2RlQW5ub3RhdGlvbnMoZG9jLCBjaGlsZE5vZGUsIGRvY0RhdGEsIG9yZ0xvY2F0aW9uTm9kZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgaW5zZXJ0Vk5vZGVBbm5vdGF0aW9ucyA9IChkb2MsIGhvc3RFbG0sIHZub2RlLCBkb2NEYXRhLCBjbXBEYXRhKSA9PiB7XG4gICAgaWYgKHZub2RlICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgaG9zdElkID0gKytkb2NEYXRhLmhvc3RJZHM7XG4gICAgICAgIGhvc3RFbG0uc2V0QXR0cmlidXRlKEhZRFJBVEVfSUQsIGhvc3RJZCk7XG4gICAgICAgIGlmIChob3N0RWxtWydzLWNyJ10gIT0gbnVsbCkge1xuICAgICAgICAgICAgaG9zdEVsbVsncy1jciddLm5vZGVWYWx1ZSA9IGAke0NPTlRFTlRfUkVGX0lEfS4ke2hvc3RJZH1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2bm9kZS4kY2hpbGRyZW4kICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlcHRoID0gMDtcbiAgICAgICAgICAgIHZub2RlLiRjaGlsZHJlbiQuZm9yRWFjaCgodm5vZGVDaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpbnNlcnRDaGlsZFZOb2RlQW5ub3RhdGlvbnMoZG9jLCB2bm9kZUNoaWxkLCBjbXBEYXRhLCBob3N0SWQsIGRlcHRoLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9zdEVsbSAmJiB2bm9kZSAmJiB2bm9kZS4kZWxtJCAmJiAhaG9zdEVsbS5oYXNBdHRyaWJ1dGUoJ2MtaWQnKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gaG9zdEVsbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudENoaWxkTm9kZXMgPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50ID0gcGFyZW50Q2hpbGROb2Rlcy5maW5kKChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSA4IC8qIE5PREVfVFlQRS5Db21tZW50Tm9kZSAqLyAmJiBub2RlWydzLXNyJ10pO1xuICAgICAgICAgICAgICAgIGlmIChjb21tZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKGhvc3RFbG0pIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdm5vZGUuJGVsbSQuc2V0QXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQsIGAke2NvbW1lbnRbJ3MtaG9zdC1pZCddfS4ke2NvbW1lbnRbJ3Mtbm9kZS1pZCddfS4wLiR7aW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGluc2VydENoaWxkVk5vZGVBbm5vdGF0aW9ucyA9IChkb2MsIHZub2RlQ2hpbGQsIGNtcERhdGEsIGhvc3RJZCwgZGVwdGgsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2hpbGRFbG0gPSB2bm9kZUNoaWxkLiRlbG0kO1xuICAgIGlmIChjaGlsZEVsbSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgbm9kZUlkID0gY21wRGF0YS5ub2RlSWRzKys7XG4gICAgY29uc3QgY2hpbGRJZCA9IGAke2hvc3RJZH0uJHtub2RlSWR9LiR7ZGVwdGh9LiR7aW5kZXh9YDtcbiAgICBjaGlsZEVsbVsncy1ob3N0LWlkJ10gPSBob3N0SWQ7XG4gICAgY2hpbGRFbG1bJ3Mtbm9kZS1pZCddID0gbm9kZUlkO1xuICAgIGlmIChjaGlsZEVsbS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgY2hpbGRFbG0uc2V0QXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQsIGNoaWxkSWQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGlsZEVsbS5ub2RlVHlwZSA9PT0gMyAvKiBOT0RFX1RZUEUuVGV4dE5vZGUgKi8pIHtcbiAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IGNoaWxkRWxtLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IG5vZGVOYW1lID0gcGFyZW50Tm9kZS5ub2RlTmFtZTtcbiAgICAgICAgaWYgKG5vZGVOYW1lICE9PSAnU1RZTEUnICYmIG5vZGVOYW1lICE9PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgY29uc3QgdGV4dE5vZGVJZCA9IGAke1RFWFRfTk9ERV9JRH0uJHtjaGlsZElkfWA7XG4gICAgICAgICAgICBjb25zdCBjb21tZW50QmVmb3JlVGV4dE5vZGUgPSBkb2MuY3JlYXRlQ29tbWVudCh0ZXh0Tm9kZUlkKTtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbW1lbnRCZWZvcmVUZXh0Tm9kZSwgY2hpbGRFbG0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoaWxkRWxtLm5vZGVUeXBlID09PSA4IC8qIE5PREVfVFlQRS5Db21tZW50Tm9kZSAqLykge1xuICAgICAgICBpZiAoY2hpbGRFbG1bJ3Mtc3InXSkge1xuICAgICAgICAgICAgY29uc3Qgc2xvdE5hbWUgPSBjaGlsZEVsbVsncy1zbiddIHx8ICcnO1xuICAgICAgICAgICAgY29uc3Qgc2xvdE5vZGVJZCA9IGAke1NMT1RfTk9ERV9JRH0uJHtjaGlsZElkfS4ke3Nsb3ROYW1lfWA7XG4gICAgICAgICAgICBjaGlsZEVsbS5ub2RlVmFsdWUgPSBzbG90Tm9kZUlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh2bm9kZUNoaWxkLiRjaGlsZHJlbiQgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjaGlsZERlcHRoID0gZGVwdGggKyAxO1xuICAgICAgICB2bm9kZUNoaWxkLiRjaGlsZHJlbiQuZm9yRWFjaCgodm5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpbnNlcnRDaGlsZFZOb2RlQW5ub3RhdGlvbnMoZG9jLCB2bm9kZSwgY21wRGF0YSwgaG9zdElkLCBjaGlsZERlcHRoLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBob3N0UmVmcyA9IC8qQF9fUFVSRV9fKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGdldEhvc3RSZWYgPSAocmVmKSA9PiBob3N0UmVmcy5nZXQocmVmKTtcbmNvbnN0IHJlZ2lzdGVySW5zdGFuY2UgPSAobGF6eUluc3RhbmNlLCBob3N0UmVmKSA9PiBob3N0UmVmcy5zZXQoKGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgPSBsYXp5SW5zdGFuY2UpLCBob3N0UmVmKTtcbmNvbnN0IHJlZ2lzdGVySG9zdCA9IChlbG0sIGNtcE1ldGEpID0+IHtcbiAgICBjb25zdCBob3N0UmVmID0ge1xuICAgICAgICAkZmxhZ3MkOiAwLFxuICAgICAgICAkaG9zdEVsZW1lbnQkOiBlbG0sXG4gICAgICAgICRjbXBNZXRhJDogY21wTWV0YSxcbiAgICAgICAgJGluc3RhbmNlVmFsdWVzJDogbmV3IE1hcCgpLFxuICAgIH07XG4gICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgIGhvc3RSZWYuJHJlbmRlckNvdW50JCA9IDA7XG4gICAgfVxuICAgIGlmIChCVUlMRC5tZXRob2QgJiYgQlVJTEQubGF6eUxvYWQpIHtcbiAgICAgICAgaG9zdFJlZi4kb25JbnN0YW5jZVByb21pc2UkID0gbmV3IFByb21pc2UoKHIpID0+IChob3N0UmVmLiRvbkluc3RhbmNlUmVzb2x2ZSQgPSByKSk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcpIHtcbiAgICAgICAgaG9zdFJlZi4kb25SZWFkeVByb21pc2UkID0gbmV3IFByb21pc2UoKHIpID0+IChob3N0UmVmLiRvblJlYWR5UmVzb2x2ZSQgPSByKSk7XG4gICAgICAgIGVsbVsncy1wJ10gPSBbXTtcbiAgICAgICAgZWxtWydzLXJjJ10gPSBbXTtcbiAgICB9XG4gICAgYWRkSG9zdEV2ZW50TGlzdGVuZXJzKGVsbSwgaG9zdFJlZiwgY21wTWV0YS4kbGlzdGVuZXJzJCwgZmFsc2UpO1xuICAgIHJldHVybiBob3N0UmVmcy5zZXQoZWxtLCBob3N0UmVmKTtcbn07XG5jb25zdCBpc01lbWJlckluRWxlbWVudCA9IChlbG0sIG1lbWJlck5hbWUpID0+IG1lbWJlck5hbWUgaW4gZWxtO1xuY29uc3QgY29uc29sZUVycm9yID0gKGUsIGVsKSA9PiAoY3VzdG9tRXJyb3IgfHwgY29uc29sZS5lcnJvcikoZSwgZWwpO1xuY29uc3QgU1RFTkNJTF9ERVZfTU9ERSA9IEJVSUxELmlzVGVzdGluZ1xuICAgID8gWydTVEVOQ0lMOiddIC8vIEUyRSB0ZXN0aW5nXG4gICAgOiBbXG4gICAgICAgICclY3N0ZW5jaWwnLFxuICAgICAgICAnY29sb3I6IHdoaXRlO2JhY2tncm91bmQ6IzRjNDdmZjtmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOjEwcHg7IHBhZGRpbmc6MnB4IDZweDsgYm9yZGVyLXJhZGl1czogNXB4JyxcbiAgICBdO1xuY29uc3QgY29uc29sZURldkVycm9yID0gKC4uLm0pID0+IGNvbnNvbGUuZXJyb3IoLi4uU1RFTkNJTF9ERVZfTU9ERSwgLi4ubSk7XG5jb25zdCBjb25zb2xlRGV2V2FybiA9ICguLi5tKSA9PiBjb25zb2xlLndhcm4oLi4uU1RFTkNJTF9ERVZfTU9ERSwgLi4ubSk7XG5jb25zdCBjb25zb2xlRGV2SW5mbyA9ICguLi5tKSA9PiBjb25zb2xlLmluZm8oLi4uU1RFTkNJTF9ERVZfTU9ERSwgLi4ubSk7XG5jb25zdCBzZXRFcnJvckhhbmRsZXIgPSAoaGFuZGxlcikgPT4gKGN1c3RvbUVycm9yID0gaGFuZGxlcik7XG5jb25zdCBjbXBNb2R1bGVzID0gLypAX19QVVJFX18qLyBuZXcgTWFwKCk7XG5jb25zdCBsb2FkTW9kdWxlID0gKGNtcE1ldGEsIGhvc3RSZWYsIGhtclZlcnNpb25JZCkgPT4ge1xuICAgIC8vIGxvYWRNb2R1bGVJbXBvcnRcbiAgICBjb25zdCBleHBvcnROYW1lID0gY21wTWV0YS4kdGFnTmFtZSQucmVwbGFjZSgvLS9nLCAnXycpO1xuICAgIGNvbnN0IGJ1bmRsZUlkID0gY21wTWV0YS4kbGF6eUJ1bmRsZUlkJDtcbiAgICBpZiAoQlVJTEQuaXNEZXYgJiYgdHlwZW9mIGJ1bmRsZUlkICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlRGV2RXJyb3IoYFRyeWluZyB0byBsYXppbHkgbG9hZCBjb21wb25lbnQgPCR7Y21wTWV0YS4kdGFnTmFtZSR9PiB3aXRoIHN0eWxlIG1vZGUgXCIke2hvc3RSZWYuJG1vZGVOYW1lJH1cIiwgYnV0IGl0IGRvZXMgbm90IGV4aXN0LmApO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBtb2R1bGUgPSAhQlVJTEQuaG90TW9kdWxlUmVwbGFjZW1lbnQgPyBjbXBNb2R1bGVzLmdldChidW5kbGVJZCkgOiBmYWxzZTtcbiAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGVbZXhwb3J0TmFtZV07XG4gICAgfVxuICAgIC8qIV9fU1RFTkNJTF9TVEFUSUNfSU1QT1JUX1NXSVRDSF9fKi9cbiAgICByZXR1cm4gaW1wb3J0KFxuICAgIC8qIEB2aXRlLWlnbm9yZSAqL1xuICAgIC8qIHdlYnBhY2tJbmNsdWRlOiAvXFwuZW50cnlcXC5qcyQvICovXG4gICAgLyogd2VicGFja0V4Y2x1ZGU6IC9cXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJC8gKi9cbiAgICAvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cbiAgICBgLi8ke2J1bmRsZUlkfS5lbnRyeS5qcyR7QlVJTEQuaG90TW9kdWxlUmVwbGFjZW1lbnQgJiYgaG1yVmVyc2lvbklkID8gJz9zLWhtcj0nICsgaG1yVmVyc2lvbklkIDogJyd9YCkudGhlbigoaW1wb3J0ZWRNb2R1bGUpID0+IHtcbiAgICAgICAgaWYgKCFCVUlMRC5ob3RNb2R1bGVSZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgY21wTW9kdWxlcy5zZXQoYnVuZGxlSWQsIGltcG9ydGVkTW9kdWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1wb3J0ZWRNb2R1bGVbZXhwb3J0TmFtZV07XG4gICAgfSwgY29uc29sZUVycm9yKTtcbn07XG5jb25zdCBzdHlsZXMgPSAvKkBfX1BVUkVfXyovIG5ldyBNYXAoKTtcbmNvbnN0IG1vZGVSZXNvbHV0aW9uQ2hhaW4gPSBbXTtcbmNvbnN0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG5jb25zdCBDU1MgPSBCVUlMRC5jc3NWYXJTaGltID8gd2luLkNTUyA6IG51bGw7XG5jb25zdCBkb2MgPSB3aW4uZG9jdW1lbnQgfHwgeyBoZWFkOiB7fSB9O1xuY29uc3QgSCA9ICh3aW4uSFRNTEVsZW1lbnQgfHwgY2xhc3Mge1xufSk7XG5jb25zdCBwbHQgPSB7XG4gICAgJGZsYWdzJDogMCxcbiAgICAkcmVzb3VyY2VzVXJsJDogJycsXG4gICAgam1wOiAoaCkgPT4gaCgpLFxuICAgIHJhZjogKGgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShoKSxcbiAgICBhZWw6IChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cykgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSxcbiAgICByZWw6IChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cykgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSxcbiAgICBjZTogKGV2ZW50TmFtZSwgb3B0cykgPT4gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgb3B0cyksXG59O1xuY29uc3Qgc2V0UGxhdGZvcm1IZWxwZXJzID0gKGhlbHBlcnMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKHBsdCwgaGVscGVycyk7XG59O1xuY29uc3Qgc3VwcG9ydHNTaGFkb3cgPSBCVUlMRC5zaGFkb3dEb21TaGltICYmIEJVSUxELnNoYWRvd0RvbVxuICAgID8gLypAX19QVVJFX18qLyAoKCkgPT4gKGRvYy5oZWFkLmF0dGFjaFNoYWRvdyArICcnKS5pbmRleE9mKCdbbmF0aXZlJykgPiAtMSkoKVxuICAgIDogdHJ1ZTtcbmNvbnN0IHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zID0gLypAX19QVVJFX18qLyAoKCkgPT4ge1xuICAgIGxldCBzdXBwb3J0c0xpc3RlbmVyT3B0aW9ucyA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdlJywgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0c0xpc3RlbmVyT3B0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7IH1cbiAgICByZXR1cm4gc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnM7XG59KSgpO1xuY29uc3QgcHJvbWlzZVJlc29sdmUgPSAodikgPT4gUHJvbWlzZS5yZXNvbHZlKHYpO1xuY29uc3Qgc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMgPSBCVUlMRC5jb25zdHJ1Y3RhYmxlQ1NTXG4gICAgPyAvKkBfX1BVUkVfXyovICgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBuZXcgQ1NTU3R5bGVTaGVldCgpLnJlcGxhY2VTeW5jID09PSAnZnVuY3Rpb24nO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKClcbiAgICA6IGZhbHNlO1xuY29uc3QgcXVldWVEb21SZWFkcyA9IFtdO1xuY29uc3QgcXVldWVEb21Xcml0ZXMgPSBbXTtcbmNvbnN0IHF1ZXVlRG9tV3JpdGVzTG93ID0gW107XG5jb25zdCBxdWV1ZVRhc2sgPSAocXVldWUsIHdyaXRlKSA9PiAoY2IpID0+IHtcbiAgICBxdWV1ZS5wdXNoKGNiKTtcbiAgICBpZiAoIXF1ZXVlUGVuZGluZykge1xuICAgICAgICBxdWV1ZVBlbmRpbmcgPSB0cnVlO1xuICAgICAgICBpZiAod3JpdGUgJiYgcGx0LiRmbGFncyQgJiA0IC8qIFBMQVRGT1JNX0ZMQUdTLnF1ZXVlU3luYyAqLykge1xuICAgICAgICAgICAgbmV4dFRpY2soZmx1c2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGx0LnJhZihmbHVzaCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgY29uc3VtZSA9IChxdWV1ZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHF1ZXVlW2ldKHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG59O1xuY29uc3QgY29uc3VtZVRpbWVvdXQgPSAocXVldWUsIHRpbWVvdXQpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHRzID0gMDtcbiAgICB3aGlsZSAoaSA8IHF1ZXVlLmxlbmd0aCAmJiAodHMgPSBwZXJmb3JtYW5jZS5ub3coKSkgPCB0aW1lb3V0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBxdWV1ZVtpKytdKHRzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpID09PSBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaSAhPT0gMCkge1xuICAgICAgICBxdWV1ZS5zcGxpY2UoMCwgaSk7XG4gICAgfVxufTtcbmNvbnN0IGZsdXNoID0gKCkgPT4ge1xuICAgIGlmIChCVUlMRC5hc3luY1F1ZXVlKSB7XG4gICAgICAgIHF1ZXVlQ29uZ2VzdGlvbisrO1xuICAgIH1cbiAgICAvLyBhbHdheXMgZm9yY2UgYSBidW5jaCBvZiBtZWRpdW0gY2FsbGJhY2tzIHRvIHJ1biwgYnV0IHN0aWxsIGhhdmVcbiAgICAvLyBhIHRocm90dGxlIG9uIGhvdyBtYW55IGNhbiBydW4gaW4gYSBjZXJ0YWluIHRpbWVcbiAgICAvLyBET00gUkVBRFMhISFcbiAgICBjb25zdW1lKHF1ZXVlRG9tUmVhZHMpO1xuICAgIC8vIERPTSBXUklURVMhISFcbiAgICBpZiAoQlVJTEQuYXN5bmNRdWV1ZSkge1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gKHBsdC4kZmxhZ3MkICYgNiAvKiBQTEFURk9STV9GTEFHUy5xdWV1ZU1hc2sgKi8pID09PSAyIC8qIFBMQVRGT1JNX0ZMQUdTLmFwcExvYWRlZCAqL1xuICAgICAgICAgICAgPyBwZXJmb3JtYW5jZS5ub3coKSArIDE0ICogTWF0aC5jZWlsKHF1ZXVlQ29uZ2VzdGlvbiAqICgxLjAgLyAxMC4wKSlcbiAgICAgICAgICAgIDogSW5maW5pdHk7XG4gICAgICAgIGNvbnN1bWVUaW1lb3V0KHF1ZXVlRG9tV3JpdGVzLCB0aW1lb3V0KTtcbiAgICAgICAgY29uc3VtZVRpbWVvdXQocXVldWVEb21Xcml0ZXNMb3csIHRpbWVvdXQpO1xuICAgICAgICBpZiAocXVldWVEb21Xcml0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcXVldWVEb21Xcml0ZXNMb3cucHVzaCguLi5xdWV1ZURvbVdyaXRlcyk7XG4gICAgICAgICAgICBxdWV1ZURvbVdyaXRlcy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgocXVldWVQZW5kaW5nID0gcXVldWVEb21SZWFkcy5sZW5ndGggKyBxdWV1ZURvbVdyaXRlcy5sZW5ndGggKyBxdWV1ZURvbVdyaXRlc0xvdy5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgLy8gc3RpbGwgbW9yZSB0byBkbyB5ZXQsIGJ1dCB3ZSd2ZSBydW4gb3V0IG9mIHRpbWVcbiAgICAgICAgICAgIC8vIGxldCdzIGxldCB0aGlzIHRoaW5nIGNvb2wgb2ZmIGFuZCB0cnkgYWdhaW4gaW4gdGhlIG5leHQgdGlja1xuICAgICAgICAgICAgcGx0LnJhZihmbHVzaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBxdWV1ZUNvbmdlc3Rpb24gPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdW1lKHF1ZXVlRG9tV3JpdGVzKTtcbiAgICAgICAgaWYgKChxdWV1ZVBlbmRpbmcgPSBxdWV1ZURvbVJlYWRzLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAvLyBzdGlsbCBtb3JlIHRvIGRvIHlldCwgYnV0IHdlJ3ZlIHJ1biBvdXQgb2YgdGltZVxuICAgICAgICAgICAgLy8gbGV0J3MgbGV0IHRoaXMgdGhpbmcgY29vbCBvZmYgYW5kIHRyeSBhZ2FpbiBpbiB0aGUgbmV4dCB0aWNrXG4gICAgICAgICAgICBwbHQucmFmKGZsdXNoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBuZXh0VGljayA9IC8qQF9fUFVSRV9fKi8gKGNiKSA9PiBwcm9taXNlUmVzb2x2ZSgpLnRoZW4oY2IpO1xuY29uc3QgcmVhZFRhc2sgPSAvKkBfX1BVUkVfXyovIHF1ZXVlVGFzayhxdWV1ZURvbVJlYWRzLCBmYWxzZSk7XG5jb25zdCB3cml0ZVRhc2sgPSAvKkBfX1BVUkVfXyovIHF1ZXVlVGFzayhxdWV1ZURvbVdyaXRlcywgdHJ1ZSk7XG5leHBvcnQgeyBCVUlMRCwgRW52LCBOQU1FU1BBQ0UgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhJztcbmV4cG9ydCB7IEJ1aWxkLCBDU1MsIENvbnRleHQsIEZyYWdtZW50LCBILCBIIGFzIEhUTUxFbGVtZW50LCBIb3N0LCBTVEVOQ0lMX0RFVl9NT0RFLCBhZGRIb3N0RXZlbnRMaXN0ZW5lcnMsIGJvb3RzdHJhcExhenksIGNtcE1vZHVsZXMsIGNvbm5lY3RlZENhbGxiYWNrLCBjb25zb2xlRGV2RXJyb3IsIGNvbnNvbGVEZXZJbmZvLCBjb25zb2xlRGV2V2FybiwgY29uc29sZUVycm9yLCBjcmVhdGVFdmVudCwgZGVmaW5lQ3VzdG9tRWxlbWVudCwgZGlzY29ubmVjdGVkQ2FsbGJhY2ssIGRvYywgZm9yY2VNb2RlVXBkYXRlLCBmb3JjZVVwZGF0ZSwgZ2V0QXNzZXRQYXRoLCBnZXRDb25uZWN0LCBnZXRDb250ZXh0LCBnZXRFbGVtZW50LCBnZXRIb3N0UmVmLCBnZXRNb2RlLCBnZXRSZW5kZXJpbmdSZWYsIGdldFZhbHVlLCBoLCBpbnNlcnRWZG9tQW5ub3RhdGlvbnMsIGlzTWVtYmVySW5FbGVtZW50LCBsb2FkTW9kdWxlLCBtb2RlUmVzb2x1dGlvbkNoYWluLCBuZXh0VGljaywgcGFyc2VQcm9wZXJ0eVZhbHVlLCBwbHQsIHBvc3RVcGRhdGVDb21wb25lbnQsIHByb21pc2VSZXNvbHZlLCBwcm94eUNvbXBvbmVudCwgcHJveHlDdXN0b21FbGVtZW50LCByZWFkVGFzaywgcmVnaXN0ZXJIb3N0LCByZWdpc3Rlckluc3RhbmNlLCByZW5kZXJWZG9tLCBzZXRBc3NldFBhdGgsIHNldEVycm9ySGFuZGxlciwgc2V0TW9kZSwgc2V0Tm9uY2UsIHNldFBsYXRmb3JtSGVscGVycywgc2V0UGxhdGZvcm1PcHRpb25zLCBzZXRWYWx1ZSwgc3R5bGVzLCBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0cywgc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnMsIHN1cHBvcnRzU2hhZG93LCB3aW4sIHdyaXRlVGFzayB9O1xuIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50IGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmVudHJ5XFxcXC5qcy4qJCBpbmNsdWRlOiBcXFxcLmVudHJ5XFxcXC5qcyQgZXhjbHVkZTogXFxcXC5zeXN0ZW1cXFxcLmVudHJ5XFxcXC5qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG5cbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59IiwiaW1wb3J0IGlzRGF0ZSBmcm9tIFwiLi4vaXNEYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG5cbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oTnVtYmVyKGRhdGUpKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgIC8vIFRPRE86IFJlbW92ZSBTdHJpbmcoKVxuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBvcHRpb25zKSB7XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4OyAvLyBAdHMtaWdub3JlOiBGb3Igc29tZSByZWFzb24gVHlwZVNjcmlwdCBqdXN0IGRvbid0IHdhbnQgdG8gbWF0Y2ggaXQsIG5vIG1hdHRlciBob3cgaGFyZCB3ZSB0cnkuIEkgY2hhbGxlbmdlIHlvdSB0byB0cnkgdG8gcmVtb3ZlIGl0IVxuXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIga2V5ID0gQXJyYXkuaXNBcnJheShwYXJzZVBhdHRlcm5zKSA/IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KSA6IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlO1xuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKGtleSkgOiBrZXk7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5cbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuXG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGAuXG4gIC8vXG4gIC8vIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnLlxuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHByb3h5Q3VzdG9tRWxlbWVudCwgSFRNTEVsZW1lbnQsIGNyZWF0ZUV2ZW50LCBoLCBIb3N0IH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQnO1xuXG5mdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBuZXdEYXRlLnNldERhdGUobmV3RGF0ZS5nZXREYXRlKCkgKyBkYXlzKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59XG5mdW5jdGlvbiBnZXREYXlzT2ZNb250aChkYXRlLCBwYWRkZWQsIGZpcnN0RGF5T2ZXZWVrKSB7XG4gIGNvbnN0IGRheXMgPSBbXTtcbiAgY29uc3QgZmlyc3RPZk1vbnRoID0gZ2V0Rmlyc3RPZk1vbnRoKGRhdGUpO1xuICBjb25zdCBmaXJzdERheU1vbnRoID0gZmlyc3RPZk1vbnRoLmdldERheSgpID09PSAwID8gNyA6IGZpcnN0T2ZNb250aC5nZXREYXkoKTtcbiAgY29uc3QgbGFzdE9mTW9udGggPSBnZXRMYXN0T2ZNb250aChkYXRlKTtcbiAgY29uc3QgbGFzdERheU9mTW9udGggPSBsYXN0T2ZNb250aC5nZXREYXkoKSA9PT0gMCA/IDcgOiBsYXN0T2ZNb250aC5nZXREYXkoKTtcbiAgY29uc3QgbGFzdERheU9mV2VlayA9IGZpcnN0RGF5T2ZXZWVrID09PSAxID8gNyA6IGZpcnN0RGF5T2ZXZWVrIC0gMTtcbiAgY29uc3QgbGVmdFBhZGRpbmdEYXlzID0gW107XG4gIGNvbnN0IHJpZ2h0UGFkZGluZ0RheXMgPSBbXTtcbiAgaWYgKHBhZGRlZCkge1xuICAgIGNvbnN0IGxlZnRQYWRkaW5nID0gKDcgLSBmaXJzdERheU9mV2VlayArIGZpcnN0RGF5TW9udGgpICUgNztcbiAgICBsZXQgbGVmdFBhZGRpbmdBbW91bnQgPSBsZWZ0UGFkZGluZztcbiAgICBsZXQgbGVmdFBhZGRpbmdEYXkgPSBnZXRQcmV2aW91c0RheShmaXJzdE9mTW9udGgpO1xuICAgIHdoaWxlIChsZWZ0UGFkZGluZ0Ftb3VudCA+IDApIHtcbiAgICAgIGxlZnRQYWRkaW5nRGF5cy5wdXNoKGxlZnRQYWRkaW5nRGF5KTtcbiAgICAgIGxlZnRQYWRkaW5nRGF5ID0gZ2V0UHJldmlvdXNEYXkobGVmdFBhZGRpbmdEYXkpO1xuICAgICAgbGVmdFBhZGRpbmdBbW91bnQgLT0gMTtcbiAgICB9XG4gICAgbGVmdFBhZGRpbmdEYXlzLnJldmVyc2UoKTtcbiAgICBjb25zdCByaWdodFBhZGRpbmcgPSAoNyAtIGxhc3REYXlPZk1vbnRoICsgbGFzdERheU9mV2VlaykgJSA3O1xuICAgIGxldCByaWdodFBhZGRpbmdBbW91bnQgPSByaWdodFBhZGRpbmc7XG4gICAgbGV0IHJpZ2h0UGFkZGluZ0RheSA9IGdldE5leHREYXkobGFzdE9mTW9udGgpO1xuICAgIHdoaWxlIChyaWdodFBhZGRpbmdBbW91bnQgPiAwKSB7XG4gICAgICByaWdodFBhZGRpbmdEYXlzLnB1c2gocmlnaHRQYWRkaW5nRGF5KTtcbiAgICAgIHJpZ2h0UGFkZGluZ0RheSA9IGdldE5leHREYXkocmlnaHRQYWRkaW5nRGF5KTtcbiAgICAgIHJpZ2h0UGFkZGluZ0Ftb3VudCAtPSAxO1xuICAgIH1cbiAgfVxuICBsZXQgY3VycmVudERheSA9IGZpcnN0T2ZNb250aDtcbiAgd2hpbGUgKGN1cnJlbnREYXkuZ2V0TW9udGgoKSA9PT0gZGF0ZS5nZXRNb250aCgpKSB7XG4gICAgZGF5cy5wdXNoKGN1cnJlbnREYXkpO1xuICAgIGN1cnJlbnREYXkgPSBnZXROZXh0RGF5KGN1cnJlbnREYXkpO1xuICB9XG4gIHJldHVybiBbLi4ubGVmdFBhZGRpbmdEYXlzLCAuLi5kYXlzLCAuLi5yaWdodFBhZGRpbmdEYXlzXTtcbn1cbmZ1bmN0aW9uIGdldEZpcnN0T2ZNb250aChkYXRlKSB7XG4gIGNvbnN0IGZpcnN0T2ZNb250aCA9IHJlbW92ZVRpbWV6b25lT2Zmc2V0KG5ldyBEYXRlKGAke1N0cmluZyhnZXRZZWFyKGRhdGUpKS5wYWRTdGFydCg0LCAnMCcpfS0ke1N0cmluZyhnZXRNb250aChkYXRlKSkucGFkU3RhcnQoMiwgJzAnKX0tMDFgKSk7XG4gIHJldHVybiBmaXJzdE9mTW9udGg7XG59XG5mdW5jdGlvbiBnZXRJU09EYXRlU3RyaW5nKGRhdGUpIHtcbiAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7U3RyaW5nKGRhdGUuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyl9LSR7U3RyaW5nKGRhdGUuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpfWA7XG59XG5mdW5jdGlvbiBnZXRMYXN0T2ZNb250aChkYXRlKSB7XG4gIGNvbnN0IG5ld0RhdGUgPSBnZXRGaXJzdE9mTW9udGgoZGF0ZSk7XG4gIG5ld0RhdGUuc2V0TW9udGgobmV3RGF0ZS5nZXRNb250aCgpICsgMSk7XG4gIG5ld0RhdGUuc2V0RGF0ZShuZXdEYXRlLmdldERhdGUoKSAtIDEpO1xuICByZXR1cm4gbmV3RGF0ZTtcbn1cbmZ1bmN0aW9uIGdldE1vbnRoKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKSArIDE7XG59XG5mdW5jdGlvbiBnZXRNb250aHMobG9jYWxlKSB7XG4gIHJldHVybiBuZXcgQXJyYXkoMTIpLmZpbGwodW5kZWZpbmVkKS5tYXAoKF8sIG1vbnRoKSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IHJlbW92ZVRpbWV6b25lT2Zmc2V0KG5ldyBEYXRlKGAyMDA2LSR7U3RyaW5nKG1vbnRoICsgMSkucGFkU3RhcnQoMiwgJzAnKX0tMDFgKSk7XG4gICAgcmV0dXJuIEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgICBtb250aDogJ2xvbmcnXG4gICAgfSkuZm9ybWF0KGRhdGUpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldE5leHREYXkoZGF0ZSkge1xuICByZXR1cm4gYWRkRGF5cyhkYXRlLCAxKTtcbn1cbmZ1bmN0aW9uIGdldE5leHRNb250aChkYXRlKSB7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV3RGF0ZS5zZXRNb250aChuZXdEYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59XG5mdW5jdGlvbiBnZXROZXh0WWVhcihkYXRlKSB7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV3RGF0ZS5zZXRGdWxsWWVhcihuZXdEYXRlLmdldEZ1bGxZZWFyKCkgKyAxKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59XG5mdW5jdGlvbiBnZXRQcmV2aW91c0RheShkYXRlKSB7XG4gIHJldHVybiBzdWJEYXlzKGRhdGUsIDEpO1xufVxuZnVuY3Rpb24gZ2V0UHJldmlvdXNNb250aChkYXRlKSB7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV3RGF0ZS5zZXRNb250aChuZXdEYXRlLmdldE1vbnRoKCkgLSAxKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59XG5mdW5jdGlvbiBnZXRQcmV2aW91c1llYXIoZGF0ZSkge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIG5ld0RhdGUuc2V0RnVsbFllYXIobmV3RGF0ZS5nZXRGdWxsWWVhcigpIC0gMSk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuZnVuY3Rpb24gZ2V0V2Vla0RheXMoZmlyc3REYXlPZldlZWssIGxvY2FsZSkge1xuICByZXR1cm4gbmV3IEFycmF5KDcpXG4gICAgLmZpbGwodW5kZWZpbmVkKVxuICAgIC5tYXAoKF8sIGluZGV4KSA9PiAoKGZpcnN0RGF5T2ZXZWVrICsgaW5kZXgpICUgNykgKyAxKVxuICAgIC5tYXAoKGRheSkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSByZW1vdmVUaW1lem9uZU9mZnNldChuZXcgRGF0ZShgMjAwNi0wMS0wJHtkYXl9YCkpO1xuICAgIHJldHVybiBbXG4gICAgICBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgICB3ZWVrZGF5OiAnc2hvcnQnXG4gICAgICB9KS5mb3JtYXQoZGF0ZSksXG4gICAgICBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgICB3ZWVrZGF5OiAnbG9uZydcbiAgICAgIH0pLmZvcm1hdChkYXRlKVxuICAgIF07XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0WWVhcihkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7XG59XG5mdW5jdGlvbiBpc0RhdGVJblJhbmdlKGRhdGUsIHJhbmdlKSB7XG4gIGlmICghZGF0ZSB8fCAhcmFuZ2UgfHwgIXJhbmdlLmZyb20gfHwgIXJhbmdlLnRvKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGNvbnN0IGVhcmx5RGF0ZSA9IHJhbmdlLmZyb20gPCByYW5nZS50byA/IHJhbmdlLmZyb20gOiByYW5nZS50bztcbiAgY29uc3QgbGF0ZXJEYXRlID0gcmFuZ2UuZnJvbSA8IHJhbmdlLnRvID8gcmFuZ2UudG8gOiByYW5nZS5mcm9tO1xuICByZXR1cm4gZGF0ZSA+PSBlYXJseURhdGUgJiYgZGF0ZSA8PSBsYXRlckRhdGU7XG59XG5mdW5jdGlvbiBpc1NhbWVEYXkoZGF0ZTEsIGRhdGUyKSB7XG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoZGF0ZTEuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZTIuZ2V0RnVsbFllYXIoKSAmJlxuICAgIGRhdGUxLmdldE1vbnRoKCkgPT09IGRhdGUyLmdldE1vbnRoKCkgJiZcbiAgICBkYXRlMS5nZXREYXRlKCkgPT09IGRhdGUyLmdldERhdGUoKSk7XG59XG5mdW5jdGlvbiByZW1vdmVUaW1lem9uZU9mZnNldChkYXRlKSB7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV3RGF0ZS5zZXRNaW51dGVzKG5ld0RhdGUuZ2V0TWludXRlcygpICsgbmV3RGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59XG5mdW5jdGlvbiBzdWJEYXlzKGRhdGUsIGRheXMpIHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBuZXdEYXRlLnNldERhdGUobmV3RGF0ZS5nZXREYXRlKCkgLSBkYXlzKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59XG5cbmNvbnN0IHdjRGF0ZXBpY2tlckNzcyA9IFwiLnZpc3VhbGx5LWhpZGRlbi5zYy13Yy1kYXRlcGlja2Vye3Bvc2l0aW9uOmFic29sdXRlO292ZXJmbG93OmhpZGRlbjt3aWR0aDoxcHg7aGVpZ2h0OjFweDt3aGl0ZS1zcGFjZTpub3dyYXA7Y2xpcDpyZWN0KDAgMCAwIDApOy13ZWJraXQtY2xpcC1wYXRoOmluc2V0KDUwJSk7Y2xpcC1wYXRoOmluc2V0KDUwJSl9XCI7XG5cbmNvbnN0IGRlZmF1bHRMYWJlbHMgPSB7XG4gIGNsZWFyQnV0dG9uOiAnQ2xlYXIgdmFsdWUnLFxuICBtb250aFNlbGVjdDogJ1NlbGVjdCBtb250aCcsXG4gIG5leHRNb250aEJ1dHRvbjogJ05leHQgbW9udGgnLFxuICBuZXh0WWVhckJ1dHRvbjogJ05leHQgeWVhcicsXG4gIHBpY2tlcjogJ0Nob29zZSBkYXRlJyxcbiAgcHJldmlvdXNNb250aEJ1dHRvbjogJ1ByZXZpb3VzIG1vbnRoJyxcbiAgcHJldmlvdXNZZWFyQnV0dG9uOiAnUHJldmlvdXMgeWVhcicsXG4gIHRvZGF5QnV0dG9uOiAnU2hvdyB0b2RheScsXG4gIHllYXJTZWxlY3Q6ICdTZWxlY3QgeWVhcidcbn07XG5jb25zdCBXQ0RhdGVwaWNrZXIgPSAvKkBfX1BVUkVfXyovIHByb3h5Q3VzdG9tRWxlbWVudChjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9fcmVnaXN0ZXJIb3N0KCk7XG4gICAgdGhpcy5zZWxlY3REYXRlID0gY3JlYXRlRXZlbnQodGhpcywgXCJzZWxlY3REYXRlXCIsIDcpO1xuICAgIHRoaXMuY2hhbmdlTW9udGggPSBjcmVhdGVFdmVudCh0aGlzLCBcImNoYW5nZU1vbnRoXCIsIDcpO1xuICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmRpc2FibGVEYXRlID0gKCkgPT4gZmFsc2U7XG4gICAgdGhpcy5lbGVtZW50Q2xhc3NOYW1lID0gJ3djLWRhdGVwaWNrZXInO1xuICAgIHRoaXMuZmlyc3REYXlPZldlZWsgPSAwO1xuICAgIHRoaXMubGFiZWxzID0gZGVmYXVsdExhYmVscztcbiAgICB0aGlzLmxvY2FsZSA9IChuYXZpZ2F0b3IgPT09IG51bGwgfHwgbmF2aWdhdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYXZpZ2F0b3IubGFuZ3VhZ2UpIHx8ICdlbi1VUyc7XG4gICAgdGhpcy5zaG93Q2xlYXJCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dNb250aFN0ZXBwZXIgPSB0cnVlO1xuICAgIHRoaXMuc2hvd1RvZGF5QnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5zaG93WWVhclN0ZXBwZXIgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXJ0RGF0ZSA9IGdldElTT0RhdGVTdHJpbmcobmV3IERhdGUoKSk7XG4gICAgdGhpcy5pbml0ID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IHRoaXMuc3RhcnREYXRlXG4gICAgICAgID8gcmVtb3ZlVGltZXpvbmVPZmZzZXQobmV3IERhdGUodGhpcy5zdGFydERhdGUpKVxuICAgICAgICA6IG5ldyBEYXRlKCk7XG4gICAgICB0aGlzLnVwZGF0ZVdlZWtkYXlzKCk7XG4gICAgfTtcbiAgICB0aGlzLm5leHRNb250aCA9ICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZ2V0TmV4dE1vbnRoKHRoaXMuY3VycmVudERhdGUpKTtcbiAgICB9O1xuICAgIHRoaXMubmV4dFllYXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldE5leHRZZWFyKHRoaXMuY3VycmVudERhdGUpKTtcbiAgICB9O1xuICAgIHRoaXMucHJldmlvdXNNb250aCA9ICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZ2V0UHJldmlvdXNNb250aCh0aGlzLmN1cnJlbnREYXRlKSk7XG4gICAgfTtcbiAgICB0aGlzLnByZXZpb3VzWWVhciA9ICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZ2V0UHJldmlvdXNZZWFyKHRoaXMuY3VycmVudERhdGUpKTtcbiAgICB9O1xuICAgIHRoaXMuc2hvd1RvZGF5ID0gKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShuZXcgRGF0ZSgpKTtcbiAgICB9O1xuICAgIHRoaXMuY2xlYXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5zZWxlY3REYXRlLmVtaXQodW5kZWZpbmVkKTtcbiAgICB9O1xuICAgIHRoaXMub25DbGljayA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLWRhdGVdJyk7XG4gICAgICBpZiAoIUJvb2xlYW4odGFyZ2V0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRlID0gcmVtb3ZlVGltZXpvbmVPZmZzZXQobmV3IERhdGUodGFyZ2V0LmRhdGFzZXQuZGF0ZSkpO1xuICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShkYXRlKTtcbiAgICAgIHRoaXMub25TZWxlY3REYXRlKGRhdGUpO1xuICAgIH07XG4gICAgdGhpcy5vbk1vbnRoU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBtb250aCA9ICtldmVudC50YXJnZXQudmFsdWUgLSAxO1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgZGF0ZS5zZXRNb250aChtb250aCk7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGRhdGUpO1xuICAgIH07XG4gICAgdGhpcy5vblllYXJTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICAgIGxldCB5ZWFyID0gK2V2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKGlzTmFOKHllYXIpKSB7XG4gICAgICAgIHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gU3RyaW5nKHllYXIpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoeWVhciA8IDApIHtcbiAgICAgICAgeWVhciA9IDA7XG4gICAgICAgIGlucHV0LnZhbHVlID0gU3RyaW5nKHllYXIpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoeWVhciA+IDk5OTkpIHtcbiAgICAgICAgeWVhciA9IDk5OTk7XG4gICAgICAgIGlucHV0LnZhbHVlID0gU3RyaW5nKHllYXIpO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyKTtcbiAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZGF0ZSk7XG4gICAgfTtcbiAgICB0aGlzLm9uS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZ2V0UHJldmlvdXNEYXkodGhpcy5jdXJyZW50RGF0ZSksIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZ2V0TmV4dERheSh0aGlzLmN1cnJlbnREYXRlKSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShzdWJEYXlzKHRoaXMuY3VycmVudERhdGUsIDcpLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoYWRkRGF5cyh0aGlzLmN1cnJlbnREYXRlLCA3KSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5jb2RlID09PSAnUGFnZVVwJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldFByZXZpb3VzWWVhcih0aGlzLmN1cnJlbnREYXRlKSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXRQcmV2aW91c01vbnRoKHRoaXMuY3VycmVudERhdGUpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ1BhZ2VEb3duJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldE5leHRZZWFyKHRoaXMuY3VycmVudERhdGUpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldE5leHRNb250aCh0aGlzLmN1cnJlbnREYXRlKSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdIb21lJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldEZpcnN0T2ZNb250aCh0aGlzLmN1cnJlbnREYXRlKSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5jb2RlID09PSAnRW5kJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldExhc3RPZk1vbnRoKHRoaXMuY3VycmVudERhdGUpLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdTcGFjZScgfHwgZXZlbnQuY29kZSA9PT0gJ0VudGVyJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLm9uU2VsZWN0RGF0ZSh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25Nb3VzZUVudGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRlID0gcmVtb3ZlVGltZXpvbmVPZmZzZXQobmV3IERhdGUoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ3RkJykuZGF0YXNldC5kYXRlKSk7XG4gICAgICB0aGlzLmhvdmVyZWREYXRlID0gZGF0ZTtcbiAgICB9O1xuICAgIHRoaXMub25Nb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgICAgdGhpcy5ob3ZlcmVkRGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9O1xuICB9XG4gIGNvbXBvbmVudFdpbGxMb2FkKCkge1xuICAgIHRoaXMuaW5pdCgpO1xuICB9XG4gIHdhdGNoRmlyc3REYXlPZldlZWsoKSB7XG4gICAgdGhpcy51cGRhdGVXZWVrZGF5cygpO1xuICB9XG4gIHdhdGNoTG9jYWxlKCkge1xuICAgIGlmICghQm9vbGVhbih0aGlzLmxvY2FsZSkpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gKG5hdmlnYXRvciA9PT0gbnVsbCB8fCBuYXZpZ2F0b3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdmlnYXRvci5sYW5ndWFnZSkgfHwgJ2VuLVVTJztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVXZWVrZGF5cygpO1xuICB9XG4gIHdhdGNoUmFuZ2UoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlbGVjdERhdGUuZW1pdCh1bmRlZmluZWQpO1xuICB9XG4gIHdhdGNoU3RhcnREYXRlKCkge1xuICAgIHRoaXMuY3VycmVudERhdGUgPSB0aGlzLnN0YXJ0RGF0ZVxuICAgICAgPyByZW1vdmVUaW1lem9uZU9mZnNldChuZXcgRGF0ZSh0aGlzLnN0YXJ0RGF0ZSkpXG4gICAgICA6IG5ldyBEYXRlKCk7XG4gIH1cbiAgd2F0Y2hWYWx1ZSgpIHtcbiAgICBpZiAoQm9vbGVhbih0aGlzLnZhbHVlKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkgJiYgdGhpcy52YWx1ZS5sZW5ndGggPj0gMSkge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gdGhpcy52YWx1ZVswXTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHRoaXMudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGUgPSB0aGlzLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRSZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMubW92ZUZvY3VzQWZ0ZXJNb250aENoYW5nZWQpIHtcbiAgICAgIHRoaXMuZm9jdXNEYXRlKHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgdGhpcy5tb3ZlRm9jdXNBZnRlck1vbnRoQ2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICB1cGRhdGVXZWVrZGF5cygpIHtcbiAgICB0aGlzLndlZWtkYXlzID0gZ2V0V2Vla0RheXModGhpcy5maXJzdERheU9mV2VlayA9PT0gMCA/IDcgOiB0aGlzLmZpcnN0RGF5T2ZXZWVrLCB0aGlzLmxvY2FsZSk7XG4gIH1cbiAgZ2V0Q2xhc3NOYW1lKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gQm9vbGVhbihlbGVtZW50KVxuICAgICAgPyBgJHt0aGlzLmVsZW1lbnRDbGFzc05hbWV9X18ke2VsZW1lbnR9YFxuICAgICAgOiB0aGlzLmVsZW1lbnRDbGFzc05hbWU7XG4gIH1cbiAgZ2V0Q2FsZW5kYXJSb3dzKCkge1xuICAgIGNvbnN0IGRheXNPZk1vbnRoID0gZ2V0RGF5c09mTW9udGgodGhpcy5jdXJyZW50RGF0ZSwgdHJ1ZSwgdGhpcy5maXJzdERheU9mV2VlayA9PT0gMCA/IDcgOiB0aGlzLmZpcnN0RGF5T2ZXZWVrKTtcbiAgICBjb25zdCBjYWxlbmRhclJvd3MgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRheXNPZk1vbnRoLmxlbmd0aDsgaSArPSA3KSB7XG4gICAgICBjb25zdCByb3cgPSBkYXlzT2ZNb250aC5zbGljZShpLCBpICsgNyk7XG4gICAgICBjYWxlbmRhclJvd3MucHVzaChyb3cpO1xuICAgIH1cbiAgICByZXR1cm4gY2FsZW5kYXJSb3dzO1xuICB9XG4gIGdldFRpdGxlKCkge1xuICAgIGlmICghQm9vbGVhbih0aGlzLmN1cnJlbnREYXRlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLmxvY2FsZSwge1xuICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgeWVhcjogJ251bWVyaWMnXG4gICAgfSkuZm9ybWF0KHRoaXMuY3VycmVudERhdGUpO1xuICB9XG4gIGZvY3VzRGF0ZShkYXRlKSB7XG4gICAgdmFyIF9hO1xuICAgIChfYSA9IHRoaXMuZWxcbiAgICAgIC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1kYXRlPVwiJHtnZXRJU09EYXRlU3RyaW5nKGRhdGUpfVwiXWApKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9jdXMoKTtcbiAgfVxuICB1cGRhdGVDdXJyZW50RGF0ZShkYXRlLCBtb3ZlRm9jdXMpIHtcbiAgICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGlmICh5ZWFyID4gOTk5OSB8fCB5ZWFyIDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtb250aENoYW5nZWQgPSBtb250aCAhPT0gdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpIHx8XG4gICAgICB5ZWFyICE9PSB0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgaWYgKG1vbnRoQ2hhbmdlZCkge1xuICAgICAgdGhpcy5jaGFuZ2VNb250aC5lbWl0KHsgbW9udGg6IGdldE1vbnRoKGRhdGUpLCB5ZWFyOiBnZXRZZWFyKGRhdGUpIH0pO1xuICAgICAgaWYgKG1vdmVGb2N1cykge1xuICAgICAgICB0aGlzLm1vdmVGb2N1c0FmdGVyTW9udGhDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IGRhdGU7XG4gICAgaWYgKG1vdmVGb2N1cykge1xuICAgICAgdGhpcy5mb2N1c0RhdGUodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgfVxuICB9XG4gIG9uU2VsZWN0RGF0ZShkYXRlKSB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICBpZiAodGhpcy5kaXNhYmxlRGF0ZShkYXRlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1JhbmdlVmFsdWUodGhpcy52YWx1ZSkpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gKChfYSA9IHRoaXMudmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSkgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMlxuICAgICAgICA/IFtkYXRlXVxuICAgICAgICA6IFt0aGlzLnZhbHVlWzBdLCBkYXRlXTtcbiAgICAgIGlmIChuZXdWYWx1ZS5sZW5ndGggPT09IDIgJiYgbmV3VmFsdWVbMF0gPiBuZXdWYWx1ZVsxXSkge1xuICAgICAgICBuZXdWYWx1ZS5yZXZlcnNlKCk7XG4gICAgICB9XG4gICAgICBjb25zdCBpc29WYWx1ZSA9IG5ld1ZhbHVlWzFdID09PSB1bmRlZmluZWRcbiAgICAgICAgPyBbZ2V0SVNPRGF0ZVN0cmluZyhuZXdWYWx1ZVswXSldXG4gICAgICAgIDogW2dldElTT0RhdGVTdHJpbmcobmV3VmFsdWVbMF0pLCBnZXRJU09EYXRlU3RyaW5nKG5ld1ZhbHVlWzFdKV07XG4gICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLnNlbGVjdERhdGUuZW1pdChpc29WYWx1ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKCgoX2IgPSB0aGlzLnZhbHVlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0VGltZSgpKSA9PT0gZGF0ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IGRhdGU7XG4gICAgICB0aGlzLnNlbGVjdERhdGUuZW1pdChnZXRJU09EYXRlU3RyaW5nKGRhdGUpKTtcbiAgICB9XG4gIH1cbiAgLy8gQHRzLWlnbm9yZVxuICBpc1JhbmdlVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5yYW5nZTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc2hvd0Zvb3RlciA9IHRoaXMuc2hvd1RvZGF5QnV0dG9uIHx8IHRoaXMuc2hvd0NsZWFyQnV0dG9uO1xuICAgIHJldHVybiAoaChIb3N0LCBudWxsLCBoKFwiZGl2XCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IFN0cmluZyh0aGlzLmRpc2FibGVkKSwgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWxzLnBpY2tlciwgY2xhc3M6IHtcbiAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCldOiB0cnVlLFxuICAgICAgICBbYCR7dGhpcy5nZXRDbGFzc05hbWUoKX0tLWRpc2FibGVkYF06IHRoaXMuZGlzYWJsZWRcbiAgICAgIH0sIHJvbGU6IFwiZ3JvdXBcIiB9LCBoKFwiZGl2XCIsIHsgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCdoZWFkZXInKSB9LCBoKFwic3BhblwiLCB7IFwiYXJpYS1hdG9taWNcIjogXCJ0cnVlXCIsIFwiYXJpYS1saXZlXCI6IFwicG9saXRlXCIsIGNsYXNzOiBcInZpc3VhbGx5LWhpZGRlblwiIH0sIHRoaXMuZ2V0VGl0bGUoKSksIHRoaXMuc2hvd1llYXJTdGVwcGVyICYmIChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWxzLnByZXZpb3VzWWVhckJ1dHRvbiwgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCdwcmV2aW91cy15ZWFyLWJ1dHRvbicpLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgaW5uZXJIVE1MOiB0aGlzLnByZXZpb3VzWWVhckJ1dHRvbkNvbnRlbnQgfHwgdW5kZWZpbmVkLCBvbkNsaWNrOiB0aGlzLnByZXZpb3VzWWVhciwgdHlwZTogXCJidXR0b25cIiB9LCBoKFwic3ZnXCIsIHsgZmlsbDogXCJub25lXCIsIGhlaWdodDogXCIyNFwiLCBcInN0cm9rZS1saW5lY2FwXCI6IFwicm91bmRcIiwgXCJzdHJva2UtbGluZWpvaW5cIjogXCJyb3VuZFwiLCBcInN0cm9rZS13aWR0aFwiOiBcIjJcIiwgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCB3aWR0aDogXCIyNFwiIH0sIGgoXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCIxMSAxNyA2IDEyIDExIDdcIiB9KSwgaChcInBvbHlsaW5lXCIsIHsgcG9pbnRzOiBcIjE4IDE3IDEzIDEyIDE4IDdcIiB9KSkpKSwgdGhpcy5zaG93TW9udGhTdGVwcGVyICYmIChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWxzLnByZXZpb3VzTW9udGhCdXR0b24sIGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgncHJldmlvdXMtbW9udGgtYnV0dG9uJyksIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBpbm5lckhUTUw6IHRoaXMucHJldmlvdXNNb250aEJ1dHRvbkNvbnRlbnQgfHwgdW5kZWZpbmVkLCBvbkNsaWNrOiB0aGlzLnByZXZpb3VzTW9udGgsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcInN2Z1wiLCB7IGZpbGw6IFwibm9uZVwiLCBoZWlnaHQ6IFwiMjRcIiwgXCJzdHJva2UtbGluZWNhcFwiOiBcInJvdW5kXCIsIFwic3Ryb2tlLWxpbmVqb2luXCI6IFwicm91bmRcIiwgXCJzdHJva2Utd2lkdGhcIjogXCIyXCIsIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIiwgdmlld0JveDogXCIwIDAgMjQgMjRcIiwgd2lkdGg6IFwiMjRcIiB9LCBoKFwicG9seWxpbmVcIiwgeyBwb2ludHM6IFwiMTUgMTggOSAxMiAxNSA2XCIgfSkpKSksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCdjdXJyZW50LW1vbnRoJykgfSwgaChcInNlbGVjdFwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVscy5tb250aFNlbGVjdCwgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCdtb250aC1zZWxlY3QnKSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIG5hbWU6IFwibW9udGhcIiwgb25DaGFuZ2U6IHRoaXMub25Nb250aFNlbGVjdCB9LCBnZXRNb250aHModGhpcy5sb2NhbGUpLm1hcCgobW9udGgsIGluZGV4KSA9PiAoaChcIm9wdGlvblwiLCB7IGtleTogbW9udGgsIHNlbGVjdGVkOiB0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCkgPT09IGluZGV4LCB2YWx1ZTogaW5kZXggKyAxIH0sIG1vbnRoKSkpKSwgaChcImlucHV0XCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWxzLnllYXJTZWxlY3QsIGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgneWVhci1zZWxlY3QnKSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIG1heDogOTk5OSwgbWF4TGVuZ3RoOiA0LCBtaW46IDEsIG5hbWU6IFwieWVhclwiLCBvbkNoYW5nZTogdGhpcy5vblllYXJTZWxlY3QsIHR5cGU6IFwibnVtYmVyXCIsIHZhbHVlOiB0aGlzLmN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkgfSkpLCB0aGlzLnNob3dNb250aFN0ZXBwZXIgJiYgKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5sYWJlbHMubmV4dE1vbnRoQnV0dG9uLCBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ25leHQtbW9udGgtYnV0dG9uJyksIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBpbm5lckhUTUw6IHRoaXMubmV4dE1vbnRoQnV0dG9uQ29udGVudCB8fCB1bmRlZmluZWQsIG9uQ2xpY2s6IHRoaXMubmV4dE1vbnRoLCB0eXBlOiBcImJ1dHRvblwiIH0sIGgoXCJzdmdcIiwgeyBmaWxsOiBcIm5vbmVcIiwgaGVpZ2h0OiBcIjI0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIjogXCJyb3VuZFwiLCBcInN0cm9rZS1saW5lam9pblwiOiBcInJvdW5kXCIsIFwic3Ryb2tlLXdpZHRoXCI6IFwiMlwiLCBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsIHdpZHRoOiBcIjI0XCIgfSwgaChcInBvbHlsaW5lXCIsIHsgcG9pbnRzOiBcIjkgMTggMTUgMTIgOSA2XCIgfSkpKSksIHRoaXMuc2hvd1llYXJTdGVwcGVyICYmIChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWxzLm5leHRZZWFyQnV0dG9uLCBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ25leHQteWVhci1idXR0b24nKSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIGlubmVySFRNTDogdGhpcy5uZXh0WWVhckJ1dHRvbkNvbnRlbnQgfHwgdW5kZWZpbmVkLCBvbkNsaWNrOiB0aGlzLm5leHRZZWFyLCB0eXBlOiBcImJ1dHRvblwiIH0sIGgoXCJzdmdcIiwgeyBmaWxsOiBcIm5vbmVcIiwgaGVpZ2h0OiBcIjI0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIjogXCJyb3VuZFwiLCBcInN0cm9rZS1saW5lam9pblwiOiBcInJvdW5kXCIsIFwic3Ryb2tlLXdpZHRoXCI6IFwiMlwiLCBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsIHdpZHRoOiBcIjI0XCIgfSwgaChcInBvbHlsaW5lXCIsIHsgcG9pbnRzOiBcIjEzIDE3IDE4IDEyIDEzIDdcIiB9KSwgaChcInBvbHlsaW5lXCIsIHsgcG9pbnRzOiBcIjYgMTcgMTEgMTIgNiA3XCIgfSkpKSkpLCBoKFwiZGl2XCIsIHsgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCdib2R5JykgfSwgaChcInRhYmxlXCIsIHsgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCdjYWxlbmRhcicpLCBvbktleURvd246IHRoaXMub25LZXlEb3duLCByb2xlOiBcImdyaWRcIiB9LCBoKFwidGhlYWRcIiwgeyBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ2NhbGVuZGFyLWhlYWRlcicpIH0sIGgoXCJ0clwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnd2Vla2RheS1yb3cnKSB9LCB0aGlzLndlZWtkYXlzLm1hcCgod2Vla2RheSkgPT4gKGgoXCJ0aFwiLCB7IGFiYnI6IHdlZWtkYXlbMV0sIGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnd2Vla2RheScpLCBrZXk6IHdlZWtkYXlbMF0sIHNjb3BlOiBcImNvbFwiIH0sIGgoXCJzcGFuXCIsIG51bGwsIHdlZWtkYXlbMF0pKSkpKSksIGgoXCJ0Ym9keVwiLCBudWxsLCB0aGlzLmdldENhbGVuZGFyUm93cygpLm1hcCgoY2FsZW5kYXJSb3cpID0+IHtcbiAgICAgIGNvbnN0IHJvd0tleSA9IGByb3ctJHtjYWxlbmRhclJvd1swXS5nZXRNb250aCgpfS0ke2NhbGVuZGFyUm93WzBdLmdldERhdGUoKX1gO1xuICAgICAgcmV0dXJuIChoKFwidHJcIiwgeyBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ2NhbGVuZGFyLXJvdycpLCBrZXk6IHJvd0tleSB9LCBjYWxlbmRhclJvdy5tYXAoKGRheSkgPT4ge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuICAgICAgICBjb25zdCBpc0N1cnJlbnQgPSBpc1NhbWVEYXkoZGF5LCB0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgICAgY29uc3QgaXNPdmVyZmxvd2luZyA9IGRheS5nZXRNb250aCgpICE9PSB0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCk7XG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpXG4gICAgICAgICAgPyBpc1NhbWVEYXkoZGF5LCB0aGlzLnZhbHVlWzBdKSB8fFxuICAgICAgICAgICAgaXNTYW1lRGF5KGRheSwgdGhpcy52YWx1ZVsxXSlcbiAgICAgICAgICA6IGlzU2FtZURheShkYXksIHRoaXMudmFsdWUpO1xuICAgICAgICBjb25zdCBpc0luUmFuZ2UgPSAhdGhpcy5pc1JhbmdlVmFsdWVcbiAgICAgICAgICA/IGZhbHNlXG4gICAgICAgICAgOiBpc0RhdGVJblJhbmdlKGRheSwge1xuICAgICAgICAgICAgZnJvbTogKF9hID0gdGhpcy52YWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdLFxuICAgICAgICAgICAgdG86ICgoX2IgPSB0aGlzLnZhbHVlKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbMV0pIHx8XG4gICAgICAgICAgICAgIHRoaXMuaG92ZXJlZERhdGUgfHxcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RGF0ZVxuICAgICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvcmRlcmVkVmFsdWVzID0gQm9vbGVhbigoX2MgPSB0aGlzLnZhbHVlKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NbMF0pXG4gICAgICAgICAgPyBbXG4gICAgICAgICAgICAoX2QgPSB0aGlzLnZhbHVlKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RbMF0sXG4gICAgICAgICAgICAoKF9lID0gdGhpcy52YWx1ZSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lWzFdKSB8fCB0aGlzLmhvdmVyZWREYXRlXG4gICAgICAgICAgXS5zb3J0KChhLCBiKSA9PiBhIC0gYilcbiAgICAgICAgICA6IFtdO1xuICAgICAgICBjb25zdCBpc1N0YXJ0ID0gdGhpcy5yYW5nZSAmJiBpc1NhbWVEYXkob3JkZXJlZFZhbHVlc1swXSwgZGF5KTtcbiAgICAgICAgY29uc3QgaXNFbmQgPSB0aGlzLnJhbmdlICYmIGlzU2FtZURheShvcmRlcmVkVmFsdWVzWzFdLCBkYXkpO1xuICAgICAgICBjb25zdCBpc1RvZGF5ID0gaXNTYW1lRGF5KGRheSwgbmV3IERhdGUoKSk7XG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmRpc2FibGVEYXRlKGRheSk7XG4gICAgICAgIGNvbnN0IGNlbGxLZXkgPSBgY2VsbC0ke2RheS5nZXRNb250aCgpfS0ke2RheS5nZXREYXRlKCl9YDtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lID0ge1xuICAgICAgICAgIFt0aGlzLmdldENsYXNzTmFtZSgnZGF0ZScpXTogdHJ1ZSxcbiAgICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoJ2RhdGUtLWN1cnJlbnQnKV06IGlzQ3VycmVudCxcbiAgICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoJ2RhdGUtLWRpc2FibGVkJyldOiBpc0Rpc2FibGVkLFxuICAgICAgICAgIFt0aGlzLmdldENsYXNzTmFtZSgnZGF0ZS0tb3ZlcmZsb3dpbmcnKV06IGlzT3ZlcmZsb3dpbmcsXG4gICAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCdkYXRlLS10b2RheScpXTogaXNUb2RheSxcbiAgICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoJ2RhdGUtLXNlbGVjdGVkJyldOiBpc1NlbGVjdGVkLFxuICAgICAgICAgIFt0aGlzLmdldENsYXNzTmFtZSgnZGF0ZS0taW4tcmFuZ2UnKV06IGlzSW5SYW5nZSxcbiAgICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoJ2RhdGUtLXN0YXJ0JyldOiBpc1N0YXJ0LFxuICAgICAgICAgIFt0aGlzLmdldENsYXNzTmFtZSgnZGF0ZS0tZW5kJyldOiBpc0VuZFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBUYWcgPSBpc1NlbGVjdGVkXG4gICAgICAgICAgPyAnc3Ryb25nJ1xuICAgICAgICAgIDogaXNUb2RheVxuICAgICAgICAgICAgPyAnZW0nXG4gICAgICAgICAgICA6ICdzcGFuJztcbiAgICAgICAgcmV0dXJuIChoKFwidGRcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogU3RyaW5nKGlzRGlzYWJsZWQpLCBcImFyaWEtc2VsZWN0ZWRcIjogaXNTZWxlY3RlZCA/ICd0cnVlJyA6IHVuZGVmaW5lZCwgY2xhc3M6IGNsYXNzTmFtZSwgXCJkYXRhLWRhdGVcIjogZ2V0SVNPRGF0ZVN0cmluZyhkYXkpLCBrZXk6IGNlbGxLZXksIG9uQ2xpY2s6IHRoaXMub25DbGljaywgb25Nb3VzZUVudGVyOiB0aGlzLm9uTW91c2VFbnRlciwgb25Nb3VzZUxlYXZlOiB0aGlzLm9uTW91c2VMZWF2ZSwgcm9sZTogXCJncmlkY2VsbFwiLCB0YWJJbmRleDogaXNTYW1lRGF5KGRheSwgdGhpcy5jdXJyZW50RGF0ZSkgJiYgIXRoaXMuZGlzYWJsZWRcbiAgICAgICAgICAgID8gMFxuICAgICAgICAgICAgOiAtMSB9LCBoKFRhZywgeyBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiIH0sIGRheS5nZXREYXRlKCkpLCBoKFwic3BhblwiLCB7IGNsYXNzOiBcInZpc3VhbGx5LWhpZGRlblwiIH0sIEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5sb2NhbGUsIHtcbiAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICBtb250aDogJ2xvbmcnXG4gICAgICAgIH0pLmZvcm1hdChkYXkpKSkpO1xuICAgICAgfSkpKTtcbiAgICB9KSkpKSwgc2hvd0Zvb3RlciAmJiAoaChcImRpdlwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnZm9vdGVyJykgfSwgdGhpcy5zaG93VG9kYXlCdXR0b24gJiYgKGgoXCJidXR0b25cIiwgeyBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ3RvZGF5LWJ1dHRvbicpLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgaW5uZXJIVE1MOiB0aGlzLnRvZGF5QnV0dG9uQ29udGVudCB8fCB1bmRlZmluZWQsIG9uQ2xpY2s6IHRoaXMuc2hvd1RvZGF5LCB0eXBlOiBcImJ1dHRvblwiIH0sIHRoaXMubGFiZWxzLnRvZGF5QnV0dG9uKSksIHRoaXMuc2hvd0NsZWFyQnV0dG9uICYmIChoKFwiYnV0dG9uXCIsIHsgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCdjbGVhci1idXR0b24nKSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIGlubmVySFRNTDogdGhpcy5jbGVhckJ1dHRvbkNvbnRlbnQgfHwgdW5kZWZpbmVkLCBvbkNsaWNrOiB0aGlzLmNsZWFyLCB0eXBlOiBcImJ1dHRvblwiIH0sIHRoaXMubGFiZWxzLmNsZWFyQnV0dG9uKSkpKSkpKTtcbiAgfVxuICBnZXQgZWwoKSB7IHJldHVybiB0aGlzOyB9XG4gIHN0YXRpYyBnZXQgd2F0Y2hlcnMoKSB7IHJldHVybiB7XG4gICAgXCJmaXJzdERheU9mV2Vla1wiOiBbXCJ3YXRjaEZpcnN0RGF5T2ZXZWVrXCJdLFxuICAgIFwibG9jYWxlXCI6IFtcIndhdGNoTG9jYWxlXCJdLFxuICAgIFwicmFuZ2VcIjogW1wid2F0Y2hSYW5nZVwiXSxcbiAgICBcInN0YXJ0RGF0ZVwiOiBbXCJ3YXRjaFN0YXJ0RGF0ZVwiXSxcbiAgICBcInZhbHVlXCI6IFtcIndhdGNoVmFsdWVcIl1cbiAgfTsgfVxuICBzdGF0aWMgZ2V0IHN0eWxlKCkgeyByZXR1cm4gd2NEYXRlcGlja2VyQ3NzOyB9XG59LCBbMiwgXCJ3Yy1kYXRlcGlja2VyXCIsIHtcbiAgICBcImNsZWFyQnV0dG9uQ29udGVudFwiOiBbMSwgXCJjbGVhci1idXR0b24tY29udGVudFwiXSxcbiAgICBcImRpc2FibGVkXCI6IFs0XSxcbiAgICBcImRpc2FibGVEYXRlXCI6IFsxNl0sXG4gICAgXCJlbGVtZW50Q2xhc3NOYW1lXCI6IFsxLCBcImVsZW1lbnQtY2xhc3MtbmFtZVwiXSxcbiAgICBcImZpcnN0RGF5T2ZXZWVrXCI6IFsyLCBcImZpcnN0LWRheS1vZi13ZWVrXCJdLFxuICAgIFwicmFuZ2VcIjogWzRdLFxuICAgIFwibGFiZWxzXCI6IFsxNl0sXG4gICAgXCJsb2NhbGVcIjogWzFdLFxuICAgIFwibmV4dE1vbnRoQnV0dG9uQ29udGVudFwiOiBbMSwgXCJuZXh0LW1vbnRoLWJ1dHRvbi1jb250ZW50XCJdLFxuICAgIFwibmV4dFllYXJCdXR0b25Db250ZW50XCI6IFsxLCBcIm5leHQteWVhci1idXR0b24tY29udGVudFwiXSxcbiAgICBcInByZXZpb3VzTW9udGhCdXR0b25Db250ZW50XCI6IFsxLCBcInByZXZpb3VzLW1vbnRoLWJ1dHRvbi1jb250ZW50XCJdLFxuICAgIFwicHJldmlvdXNZZWFyQnV0dG9uQ29udGVudFwiOiBbMSwgXCJwcmV2aW91cy15ZWFyLWJ1dHRvbi1jb250ZW50XCJdLFxuICAgIFwic2hvd0NsZWFyQnV0dG9uXCI6IFs0LCBcInNob3ctY2xlYXItYnV0dG9uXCJdLFxuICAgIFwic2hvd01vbnRoU3RlcHBlclwiOiBbNCwgXCJzaG93LW1vbnRoLXN0ZXBwZXJcIl0sXG4gICAgXCJzaG93VG9kYXlCdXR0b25cIjogWzQsIFwic2hvdy10b2RheS1idXR0b25cIl0sXG4gICAgXCJzaG93WWVhclN0ZXBwZXJcIjogWzQsIFwic2hvdy15ZWFyLXN0ZXBwZXJcIl0sXG4gICAgXCJzdGFydERhdGVcIjogWzEsIFwic3RhcnQtZGF0ZVwiXSxcbiAgICBcInRvZGF5QnV0dG9uQ29udGVudFwiOiBbMSwgXCJ0b2RheS1idXR0b24tY29udGVudFwiXSxcbiAgICBcInZhbHVlXCI6IFsxMDQwXSxcbiAgICBcImN1cnJlbnREYXRlXCI6IFszMl0sXG4gICAgXCJob3ZlcmVkRGF0ZVwiOiBbMzJdLFxuICAgIFwid2Vla2RheXNcIjogWzMyXVxuICB9XSk7XG5mdW5jdGlvbiBkZWZpbmVDdXN0b21FbGVtZW50JDEoKSB7XG4gIGlmICh0eXBlb2YgY3VzdG9tRWxlbWVudHMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgY29tcG9uZW50cyA9IFtcIndjLWRhdGVwaWNrZXJcIl07XG4gIGNvbXBvbmVudHMuZm9yRWFjaCh0YWdOYW1lID0+IHsgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgY2FzZSBcIndjLWRhdGVwaWNrZXJcIjpcbiAgICAgIGlmICghY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBXQ0RhdGVwaWNrZXIpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH0gfSk7XG59XG5cbmNvbnN0IFdjRGF0ZXBpY2tlciA9IFdDRGF0ZXBpY2tlcjtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSBkZWZpbmVDdXN0b21FbGVtZW50JDE7XG5cbmV4cG9ydCB7IFdjRGF0ZXBpY2tlciwgZGVmaW5lQ3VzdG9tRWxlbWVudCB9O1xuIiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCI7XHJcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcbmltcG9ydCB7IG1vZGlmeUR1ZURhdGV9ICBmcm9tIFwiLi90b2RvQ3JlYXRvclwiO1xyXG5pbXBvcnQgeyBXY0RhdGVwaWNrZXIgfSBmcm9tIFwid2MtZGF0ZXBpY2tlci9kaXN0L2NvbXBvbmVudHMvd2MtZGF0ZXBpY2tlclwiXHJcbmltcG9ydCBcIndjLWRhdGVwaWNrZXIvZGlzdC90aGVtZXMvZGFyay5jc3NcIjtcclxuaW1wb3J0IHsgZWFjaFdlZWtPZkludGVydmFsIH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbi8vIGN1c3RvbUVsZW1lbnRzLmRlZmluZShcIndjLWRhdGVwaWNrZXJcIiwgV2NEYXRlcGlja2VyKTtcclxuaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hhbmRsZVNhdmVMb2dpY1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbER1ZURhdGVDaGFuZ2UoZWxlbWVudCwgaW5kZXgpe1xyXG4gICAgbGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgLy8gY29uc3QgYnV0dG9ucyA9IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ107XHJcbiAgICBjb25zdCBjb3JyZWN0SW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm9yZGVyID09IGluZGV4KVxyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIHdpZHRoIH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBkYXRlUGlja2VyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3djLWRhdGVwaWNrZXInLCAnbmV3LWR1ZS1kYXRlJywgJ2RhdGVwaWNrZXInKVxyXG4gICAgZGF0ZVBpY2tlci5jbGFzc0xpc3QuYWRkKCdlZGl0LWR1ZS1kYXRlJylcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gdG9kb3NbY29ycmVjdEluZGV4XS5kdWVEYXRlIFxyXG4gICAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoJ3N0YXJ0LWRhdGUnLCBgJHtjdXJyZW50RGF0ZX1gKVxyXG4gICAgLy8gZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgYCR7RGF0ZSgnMjAyNC0wMS0wNCcpfWApXHJcbiAgICBkYXRlUGlja2VyLnZhbHVlID0gbmV3IERhdGUoYCR7Y3VycmVudERhdGUucmVwbGFjZUFsbCgnLScsICcvJyl9YClcclxuXHJcbiAgICBkYXRlUGlja2VyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgZGF0ZVBpY2tlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICBkYXRlUGlja2VyLnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XHJcbiAgICBkYXRlUGlja2VyLnN0eWxlLmxlZnQgPSBgJHtsZWZ0IC0gKDIzOC13aWR0aCl9cHhgOyBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcik7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgaWYoIWUudGFyZ2V0LmNsb3Nlc3QoJy5uZXctZHVlLWRhdGUnKSlcclxuICAgICAgICAgICBkYXRlUGlja2VyLnJlbW92ZSgpXHJcbiAgICB9KVxyXG4gICAgLy9mdW5jdGlvbiBoYW5kbGVEYXRlQ2hhbmdlKCl7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3REYXRlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVwaWNrZWQgPSBldmVudC5kZXRhaWxcclxuICAgICAgICAgICAgbW9kaWZ5RHVlRGF0ZShpbmRleCwgZGF0ZXBpY2tlZClcclxuICAgICAgICAgICAgZGF0ZVBpY2tlci5yZW1vdmUoKVxyXG4gICAgICAgICAgICAvLyBkaXNwbGF5VGFza3ModG9kb3MpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9zKVxyXG4gICAgICAgIH0pO1xyXG4gICAgLy99XHJcbiAgICBcclxuICAgIC8vIGRhdGVQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAvLyAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgLy8gICAgIGhhbmRsZURhdGVDaGFuZ2UoKVxyXG4gICAgLy8gfSkgICAgXHJcbiAgICBcclxufSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiO1xyXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5pbXBvcnQgeyBtb2RpZnlMaXN0IH0gZnJvbSBcIi4vdG9kb0NyZWF0b3JcIlxyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGlzdE9wdGlvbnMobGlzdHMpe1xyXG4gICAgY29uc3QgbGlzdElucHV0ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbGlzdElucHV0JylcclxuICAgIFxyXG4gICAgd2hpbGUgKGxpc3RJbnB1dC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgbGlzdElucHV0LnJlbW92ZUNoaWxkKGxpc3RJbnB1dC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGxpc3RBcnJheSA9IGxpc3RzLm1hcCggbGlzdCA9PiBsaXN0Lmxpc3ROYW1lKVxyXG4gICAgbGlzdEFycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnb3B0aW9uJywgJ29wdGlvbi1pbnB1dCcsIGBsaXN0JHtsaXN0QXJyYXkuaW5kZXhPZihpdGVtKX1gKVxyXG4gICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBpdGVtXHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW1cclxuICAgICAgICBsaXN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudClcclxufSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udHJvbExpc3RDaGFuZ2UoZWxlbWVudCwgaW5kZXgpe1xyXG4gICAgY29uc3QgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICBjb25zdCBsaXN0cyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ2xpc3RzJylcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBsaXN0cy5tYXAoIGxpc3QgPT4gbGlzdC5saXN0TmFtZSk7XHJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgY29uc3QgY2hhbmdlTGlzdCA9IGludGVyYWN0RE9NKCkuZ2VuZXJhdGVMaXN0T3B0aW9ucyh7dG9wLCBsZWZ0fSwgYnV0dG9ucywgJ2xpc3QnKVxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGNoYW5nZUxpc3QucmVtb3ZlKClcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIGNoYW5nZVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgIC8vICAgICBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7Y2hhbmdlUHJpb3JpdHkucmVtb3ZlKCl9LCA1MDApXHJcbiAgICAvLyB9KVxyXG4gICAgY2hhbmdlTGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoYW5nZS1saXN0LWJ1dHRvbicpKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgIG1vZGlmeUxpc3QoaW5kZXgsIGAke2UudGFyZ2V0LnZhbHVlfWApXHJcbiAgICAgICAgICAgIC8vICBpbnRlcmFjdERPTSgpLmhpZGUoY2hhbmdlU3RhdHVzKTtcclxuICAgICAgICAgICAgY2hhbmdlTGlzdC5yZW1vdmUoKVxyXG4gICAgICAgICAgICAvLyAgZGlzcGxheVRhc2tzKHRvZG9zKSAgXHJcbiAgICAgICAgfVxyXG4gICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7IHVwZGF0ZUxpc3RPcHRpb25zLCBjb250cm9sTGlzdENoYW5nZSB9IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCI7XHJcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcbmltcG9ydCB7IG1vZGlmeVByaW9yaXR5IH0gIGZyb20gXCIuL3RvZG9DcmVhdG9yXCI7XHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xQcmlvcml0eUNoYW5nZShlbGVtZW50LCBpbmRleCl7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICBjb25zdCBidXR0b25zID0gWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXTtcclxuICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IGludGVyYWN0RE9NKCkuZ2VuZXJhdGVMaXN0T3B0aW9ucyh7dG9wLCBsZWZ0fSwgYnV0dG9ucywgJ3ByaW9yaXR5JylcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBjaGFuZ2VQcmlvcml0eS5yZW1vdmUoKVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgLy8gY2hhbmdlUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xyXG4gICAgLy8gICAgIHNldEludGVydmFsKCBmdW5jdGlvbigpIHtjaGFuZ2VQcmlvcml0eS5yZW1vdmUoKX0sIDUwMClcclxuICAgIC8vIH0pXHJcbiAgICBjaGFuZ2VQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoYW5nZS1wcmlvcml0eS1idXR0b24nKSl7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICBtb2RpZnlQcmlvcml0eShpbmRleCwgYCR7ZS50YXJnZXQudmFsdWV9YClcclxuICAgICAgICAgICAgLy8gIGludGVyYWN0RE9NKCkuaGlkZShjaGFuZ2VTdGF0dXMpO1xyXG4gICAgICAgICAgICAvLyBjaGFuZ2VQcmlvcml0eS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAvLyAgZGlzcGxheVRhc2tzKHRvZG9zKSAgXHJcbiAgICAgICAgfVxyXG4gICAgIH0pXHJcbn0iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIjtcclxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuaW1wb3J0IHsgbW9kaWZ5U3RhdHVzIH0gIGZyb20gXCIuL3RvZG9DcmVhdG9yXCI7XHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xTdGF0dXNDaGFuZ2UoZWxlbWVudCwgaW5kZXgpe1xyXG4gICAgbGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgY29uc3QgYnV0dG9ucyA9IFsndG8tZG8nLCAnZG9pbmcnLCAnZG9uZScsICd3b250IGRvJ107XHJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVN0YXR1cyA9IGludGVyYWN0RE9NKCkuZ2VuZXJhdGVMaXN0T3B0aW9ucyh7dG9wLCBsZWZ0fSwgYnV0dG9ucywgJ3N0YXR1cycpXHJcbiAgICAvLyBjb25zdCBjaGFuZ2VTdGF0dXMgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdjaGFuZ2VTdGF0dXMnKVxyXG4gICAgLy8gY29uc3QgY2hhbmdlU3RhdHVzID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdjaGFuZ2Utc3RhdHVzJywgJ2NoYW5nZVN0YXR1cycpXHJcbiAgICAvLyAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIC8vICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2NoYW5nZS1zdGF0dXMtYnV0dG9uJywgYCR7YnV0dG9uc1tidXR0b25zLmluZGV4T2YoYnV0dG9uKV19I2lkYClcclxuICAgIC8vICAgICAgIGJ1dHRvbkVsZW1lbnQudmFsdWUgPSBidXR0b247XHJcbiAgICAvLyAgICAgICBidXR0b25FbGVtZW50LnRleHRDb250ZW50ID0gYnV0dG9uO1xyXG4gICAgLy8gICAgICAgY2hhbmdlU3RhdHVzLmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gLy8gaW50ZXJhY3RET00oKS50b2dnbGVFbGVtZW50RGlzcGxheShjaGFuZ2VTdGF0dXMpXHJcbiAgICAvLyBjaGFuZ2VTdGF0dXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICAvLyBjaGFuZ2VTdGF0dXMuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgLy8gY2hhbmdlU3RhdHVzLnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XHJcbiAgICAvLyBjaGFuZ2VTdGF0dXMuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgOyBcclxuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2hhbmdlU3RhdHVzKTtcclxuXHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBjaGFuZ2VTdGF0dXMucmVtb3ZlKClcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIGNoYW5nZVN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XHJcbiAgICAvLyAgICAgc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCkge2NoYW5nZVN0YXR1cy5yZW1vdmUoKX0sIDUwMClcclxuICAgIC8vIH0pXHJcblxyXG5cclxuICAgIGNoYW5nZVN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoYW5nZS1zdGF0dXMtYnV0dG9uJykpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgbW9kaWZ5U3RhdHVzKGluZGV4LCBgJHtlLnRhcmdldC52YWx1ZX1gKVxyXG4gICAgICAgICAgICAvLyAgaW50ZXJhY3RET00oKS5oaWRlKGNoYW5nZVN0YXR1cyk7XHJcbiAgICAgICAgICAgIGNoYW5nZVN0YXR1cy5yZW1vdmUoKVxyXG4gICAgICAgICAgICAvLyAgZGlzcGxheVRhc2tzKHRvZG9zKSAgXHJcbiAgICAgICAgfVxyXG4gICAgIH0pXHJcbn0iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIjtcclxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuaW1wb3J0IHsgbW9kaWZ5VGFza30gIGZyb20gXCIuL3RvZG9DcmVhdG9yXCI7XHJcbmltcG9ydCB7IGFkZFRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xUYXNrQ2hhbmdlKGVsZW1lbnQsIGluZGV4KXtcclxuICAgIGxldCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvZG9zJylcclxuICAgIC8vIGNvbnN0IGJ1dHRvbnMgPSBbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddO1xyXG4gICAgY29uc3QgY29ycmVjdEluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5vcmRlciA9PSBpbmRleClcclxuICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICBjb25zdCBjaGFuZ2VUYXNrID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2lucHV0JywgJ2NoYW5nZS10YXNrLWlucHV0JywgJ2NoYW5nZVRhc2tJbnB1dCcpXHJcbiAgICBjaGFuZ2VUYXNrLnR5cGUgPSAndGV4dCdcclxuICAgIGNvbnN0IHRhc2tWYWx1ZSA9IGAke3RvZG9zW2NvcnJlY3RJbmRleF0udGFza31gXHJcbiAgICBjaGFuZ2VUYXNrLnZhbHVlID0gdGFza1ZhbHVlXHJcbiAgICBcclxuICAgIGNoYW5nZVRhc2suc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICBjaGFuZ2VUYXNrLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGNoYW5nZVRhc2suc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcclxuICAgIGNoYW5nZVRhc2suc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgOyBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2hhbmdlVGFzayk7XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgaWYoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hhbmdlLXRhc2staW5wdXQnKSAmJiBkb2N1bWVudC5jb250YWlucyhjaGFuZ2VUYXNrKSl7XHJcbiAgICAgICAgICAgIG1vZGlmeVRhc2soaW5kZXgsIGAke2NoYW5nZVRhc2sudmFsdWV9YClcclxuICAgICAgICAgICAgY2hhbmdlVGFzay5yZW1vdmUoKVxyXG4gICAgICAgICAgICAvLyBkaXNwbGF5VGFza3ModG9kb3MpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY2hhbmdlVGFzay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcbiAgICAgICAgaWYoZS5rZXlDb2RlID09IDEzKXtcclxuICAgICAgICAgICAgbW9kaWZ5VGFzayhpbmRleCwgYCR7Y2hhbmdlVGFzay52YWx1ZX1gKVxyXG4gICAgICAgICAgICBjaGFuZ2VUYXNrLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXlUYXNrcyh0b2RvcykgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcblxyXG5cclxuICAgIC8vIGNoYW5nZVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgIC8vICAgICBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7Y2hhbmdlUHJpb3JpdHkucmVtb3ZlKCl9LCA1MDApXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gY2hhbmdlUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgIC8vICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2UtcHJpb3JpdHktYnV0dG9uJykpe1xyXG4gICAgLy8gICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gICAgICAgICAgbW9kaWZ5UHJpb3JpdHkoaW5kZXgsIGAke2UudGFyZ2V0LnZhbHVlfWAsIHRvZG9zKVxyXG4gICAgLy8gICAgICAgICAvLyAgaW50ZXJhY3RET00oKS5oaWRlKGNoYW5nZVN0YXR1cyk7XHJcbiAgICAvLyAgICAgICAgIGNoYW5nZVByaW9yaXR5LnJlbW92ZSgpXHJcbiAgICAvLyAgICAgICAgICBkaXNwbGF5VGFza3ModG9kb3MpICBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgfSlcclxufSIsImltcG9ydCBkaXNwbGF5TGlzdHMgZnJvbSBcIi4vZGlzcGxheUxpc3RzXCJcclxuaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hhbmRsZVNhdmVMb2dpY1wiO1xyXG5pbXBvcnQgeyBhZGRUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hhbmRsZVNhdmVMb2dpY1wiO1xyXG5pbXBvcnQgeyB1cGRhdGVMaXN0T3B0aW9ucyB9IGZyb20gXCIuL2NvbnRyb2xMaXN0Q2hhbmdlXCI7XHJcblxyXG5jb25zdCBsaXN0cyA9IFtdXHJcblxyXG5cclxuY29uc3QgZGVsZXRlTGlzdCA9IChpbmRleCkgPT4ge1xyXG4gICAgbGV0IGxpc3RzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgnbGlzdHMnKVxyXG4gICAgbGlzdHMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UobGlzdHMsICdsaXN0cycpXHJcbiAgICBkaXNwbGF5TGlzdHMobGlzdHMpXHJcbiAgICB1cGRhdGVMaXN0T3B0aW9ucyhsaXN0cylcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeUxpc3QgKGluZGV4LCBsaXN0VmFsdWUsIGxpc3RzKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdChgJHtsaXN0VmFsdWV9YClcclxuICAgIFxyXG4gICAgbGlzdHMuc3BsaWNlKGluZGV4LCAxLCBsaXN0KVxyXG5cclxuICAgIGRpc3BsYXlMaXN0cyhsaXN0cylcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlzdCAobGlzdE5hbWUpe1xyXG4gICAgbGV0IGxpc3QgPSB7XHJcbiAgICAgICAgbGlzdE5hbWVcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBsaXN0KVxyXG59XHJcblxyXG5cclxuY29uc3QgY3JlYXRlTmV3TGlzdCA9IChsaXN0TmFtZSkgPT4ge1xyXG4gICAgY29uc3QgbGlzdHMgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdsaXN0cycpXHJcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdChsaXN0TmFtZSlcclxuICAgIGxpc3RzLnB1c2gobGlzdClcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKGxpc3RzLCAnbGlzdHMnKVxyXG59XHJcblxyXG4vLyBjb25zdCBsaXN0MSA9IGNyZWF0ZUxpc3QoJ2dlbmVyYWwnKVxyXG4vLyBjb25zdCBsaXN0MiA9IGNyZWF0ZUxpc3QoJ05lbW8nKVxyXG4vLyBjb25zdCBsaXN0MyA9IGNyZWF0ZUxpc3QoJ1Byb2plY3QnKVxyXG4vLyBjb25zdCBsaXN0NCA9IGNyZWF0ZUxpc3QoJ2RhaWx5JylcclxuLy8gbGlzdHMucHVzaChsaXN0MSlcclxuLy8gbGlzdHMucHVzaChsaXN0MilcclxuLy8gbGlzdHMucHVzaChsaXN0MylcclxuLy8gbGlzdHMucHVzaChsaXN0NClcclxuLy8gY29uc29sZS5sb2cobGlzdHMubWFwKCBsaXN0ID0+IGxpc3QubGlzdE5hbWUpKVxyXG5cclxuLy8gZGlzcGxheUxpc3RzKGxpc3RzKVxyXG5cclxuLy8gdXBkYXRlTGlzdE9wdGlvbnMobGlzdHMpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkZWxldGVMaXN0LCBtb2RpZnlMaXN0LCBjcmVhdGVMaXN0LCBjcmVhdGVOZXdMaXN0IH0iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIlxyXG5pbXBvcnQgcmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5wbmdcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUxpc3RzKGFycmF5KXtcclxuICAgIGNvbnN0IGxpc3RzVmlldyA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2xpc3RzVmlldycpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2xpc3RzJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2RlbGV0ZS1saXN0JykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnc2VjdGlvbicsICdsaXN0cycsIGBsaXN0JHtpfWApXHJcbiAgICAgICAgbGV0IGRlbGV0ZUxpc3QgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2RlbGV0ZS1saXN0JywgYGRlbGV0ZUxpc3QjJHtpfWApXHJcbiAgICAgICAgLy8gbGV0IGNoZWNrVGFzayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnY2hlY2stdGFzaycsIGBjaGVja3Rhc2sjJHtpfWApXHJcbiAgICAgICAgLy8gbGV0IGRlbGV0ZVRhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2RlbGV0ZS10YXNrJywgYCR7aX1gKVxyXG4gICAgICAgIGxldCBkZWxldGVJbWFnZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnZGVsZXRlLWxpc3QtaW1nJywgYGRlbGV0ZUxpc3RJbWFnZSMke2l9YClcclxuICAgICAgICBkZWxldGVJbWFnZS5zcmMgPSByZW1vdmVcclxuICAgICAgICBkZWxldGVMaXN0LmFwcGVuZENoaWxkKGRlbGV0ZUltYWdlKVxyXG4gICAgICAgIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja1Rhc2spXHJcbiAgICAgICAgaW50ZXJhY3RET00oKS5hcHBlbmRMaXN0RWxlbWVudGFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyLCBhcnJheVtpXSwgaSlcclxuICAgICAgICBsaXN0c1ZpZXcuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVMaXN0KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuLy8gaW1wb3J0IGxvb3BUb2RvcyBmcm9tIFwiLi9sb29wVG9kb3NcIlxyXG5pbXBvcnQgeCBmcm9tICcuL2Nyb3NzZWQucG5nJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVRhc2tzKGFycmF5KXtcclxuICAgIGNvbnN0IHRvZG9zVmlldyA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ3RvZG9zVmlldycpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ3RvZG9zJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2RlbGV0ZS10YXNrJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ3RvZG9zJywgYHRvZG8ke2FycmF5W2ldLm9yZGVyfWApXHJcbiAgICAgICAgbGV0IGNoZWNrVGFzayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnY2hlY2stdGFzaycsIGBjaGVja3Rhc2sjJHtpfWApXHJcbiAgICAgICAgbGV0IGRlbGV0ZVRhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2RlbGV0ZS10YXNrJywgYCR7aX1gKVxyXG4gICAgICAgIGxldCBkZWxldGVJbWFnZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnZGVsZXRlLWltYWdlJywgJ2RlbGV0ZUltYWdlJylcclxuICAgICAgICBkZWxldGVJbWFnZS5zcmMgPSB4XHJcbiAgICAgICAgZGVsZXRlVGFzay5hcHBlbmRDaGlsZChkZWxldGVJbWFnZSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tUYXNrKVxyXG4gICAgICAgIGludGVyYWN0RE9NKCkuYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyLCBhcnJheVtpXSwgYXJyYXlbaV0ub3JkZXIpXHJcbiAgICAgICAgdG9kb3NWaWV3LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzaylcclxuICAgIH1cclxufSIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyQnlEYXRlIChkYXRlVmFsdWUsIHRvZG9zKXtcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cobGlzdHNbaW5kZXhdLmxpc3ROYW1lKVxyXG4gICAgY29uc3QgZmlsdGVyZWRUb2RvcyA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uZHVlRGF0ZSA9PSBkYXRlVmFsdWUgKVxyXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRUb2RvcylcclxuICAgIFxyXG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVG9kb3MpXHJcbn0gIiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWx0ZXJCeUxpc3QgKGVsZW1lbnQsIGxpc3RzLCB0b2Rvcyl7XHJcbiAgICBjb25zdCBpbmRleCA9ICtgJHtlbGVtZW50LmlkfWAucmVwbGFjZShcImxpc3RcIiwgXCJcIilcclxuICAgIC8vIGNvbnNvbGUubG9nKGxpc3RzW2luZGV4XS5saXN0TmFtZSlcclxuICAgIGNvbnN0IGxpc3RWYWx1ZSA9IGxpc3RzLm1hcCggbGlzdCA9PiBsaXN0Lmxpc3ROYW1lKVtpbmRleF0gPT0gdW5kZWZpbmVkID8gZWxlbWVudC52YWx1ZSA6IGxpc3RzLm1hcCggbGlzdCA9PiBsaXN0Lmxpc3ROYW1lKVtpbmRleF1cclxuICAgIGNvbnN0IGZpbHRlcmVkVG9kb3MgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmxpc3QgPT0gbGlzdFZhbHVlIClcclxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkVG9kb3MpXHJcbiAgICBcclxuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRvZG9zKVxyXG59ICIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyQnlQcmlvcml0eSAoZWxlbWVudCwgdG9kb3Mpe1xyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhsaXN0c1tpbmRleF0ubGlzdE5hbWUpXHJcbiAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gIGVsZW1lbnQudmFsdWVcclxuICAgIGNvbnN0IGZpbHRlcmVkVG9kb3MgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLnByaW9yaXR5ID09IHByaW9yaXR5VmFsdWUgKVxyXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRUb2RvcylcclxuICAgIFxyXG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVG9kb3MpXHJcbn0gIiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWx0ZXJCeVN0YXR1cyAoZWxlbWVudCwgdG9kb3Mpe1xyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhsaXN0c1tpbmRleF0ubGlzdE5hbWUpXHJcbiAgICBjb25zdCBzdGF0dXNWYWx1ZSA9ICBlbGVtZW50LnZhbHVlXHJcbiAgICBjb25zdCBmaWx0ZXJlZFRvZG9zID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5zdGF0dXMgPT0gc3RhdHVzVmFsdWUgKVxyXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRUb2RvcylcclxuICAgIFxyXG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVG9kb3MpXHJcbn0gIiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuaW1wb3J0IGFycm93UmlnaHQgIGZyb20gJy4vcmlnaHQucG5nJ1xyXG5pbXBvcnQgZmlsdGVyQnlMaXN0IGZyb20gXCIuL2ZpbHRlckJ5TGlzdFwiXHJcbmltcG9ydCBmaWx0ZXJCeVN0YXR1cyBmcm9tIFwiLi9maWx0ZXJCeVN0YXR1c1wiXHJcbmltcG9ydCBmaWx0ZXJCeVByaW9yaXR5IGZyb20gXCIuL2ZpbHRlckJ5UHJpb3JpdHlcIlxyXG5pbXBvcnQgZmlsdGVyQnlEYXRlIGZyb20gXCIuL2ZpbHRlckJ5RGF0ZVwiXHJcbmltcG9ydCBzb3J0QnlUaXRsZSBmcm9tIFwiLi9zb3J0QnlUaXRsZVwiXHJcbmltcG9ydCB7IFdjRGF0ZXBpY2tlciB9IGZyb20gXCJ3Yy1kYXRlcGlja2VyL2Rpc3QvY29tcG9uZW50cy93Yy1kYXRlcGlja2VyXCJcclxuaW1wb3J0IFwid2MtZGF0ZXBpY2tlci9kaXN0L3RoZW1lcy9kYXJrLmNzc1wiO1xyXG5pbXBvcnQgZG93bkljb24gZnJvbSBcIi4vZG93bi5wbmdcIlxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwid2MtZGF0ZXBpY2tlclwiLCBXY0RhdGVwaWNrZXIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlRmlsdGVyIChwYXJlbnRFbGVtZW50LCBhcnJheSl7XHJcbiAgICBhcnJheS5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdmaWx0ZXItc29ydC1leHBhbmRlZCcsIGBmaWx0ZXJTb3J0RXhwYW5kZWRJZCMke2FycmF5LmluZGV4T2Yob3B0aW9uKX1gKVxyXG4gICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb25cclxuICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uO1xyXG4gICAgICAgIC8vIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb247XHJcbiAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnB1dEVsZW1lbnRJY29ucyhwYXJlbnRFbGVtZW50LCBpY29uKXtcclxuICAgIGNvbnN0IGltYWdlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2ltZycsICdleHBhbmQtaWNvbicsIGAke3BhcmVudEVsZW1lbnR9LWljb25gIClcclxuICAgIGltYWdlLnNyYyA9IGljb25cclxuICAgIGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQocGFyZW50RWxlbWVudCkuYXBwZW5kQ2hpbGQoaW1hZ2UpXHJcbn1cclxuXHJcbmlucHV0RWxlbWVudEljb25zKCd0b2Rvc1RpdGxlVGFza3MnLCBkb3duSWNvbilcclxuaW5wdXRFbGVtZW50SWNvbnMoJ3RvZG9zVGl0bGVTdGF0dXMnLCBkb3duSWNvbilcclxuaW5wdXRFbGVtZW50SWNvbnMoJ3RvZG9zVGl0bGVMaXN0cycsIGRvd25JY29uKVxyXG5pbnB1dEVsZW1lbnRJY29ucygndG9kb3NUaXRsZVByaW9yaXRpZXMnLCBkb3duSWNvbilcclxuaW5wdXRFbGVtZW50SWNvbnMoJ3RvZG9zVGl0bGVEdWVEYXRlcycsIGRvd25JY29uKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUZpbHRlck9yZGVyIChsaXN0cywgdG9kb3Mpe1xyXG4gICAgY29uc3QgdG9kb3NHZW5lcmFsVGl0bGVzID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgndG9kb3NHZW5lcmFsVGl0bGVzJylcclxuICAgIHRvZG9zR2VuZXJhbFRpdGxlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZC1pY29uJykpe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEdlbmVyYWxUaXRsZSA9IGUudGFyZ2V0LnBhcmVudE5vZGVcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRHZW5lcmFsVGl0bGUpXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSlcclxuICAgICAgICAgICAgICAgIGxldCB7IHRvcCwgbGVmdCB9ID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXhwYW5kZWRNZW51ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdleHBhbmRlZC1tZW51JywgJ2V4cGFuZGVkTWVudScpXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjdXJyZW50R2VuZXJhbFRpdGxlLmlkID09ICd0b2Rvc1RpdGxlVGFza3MnID8gWydTb3J0J10gOiBbJ0ZpbHRlcicsICdTb3J0J11cclxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnZmlsdGVyLXNvcnQnLCBgZmlsdGVyU29ydElkIyR7b3B0aW9ucy5pbmRleE9mKG9wdGlvbil9YClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2ZpbHRlci1zb3J0LXRleHQnLCBgZmlsdGVyU29ydFRleHQjJHtvcHRpb25zLmluZGV4T2Yob3B0aW9uKX1gKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0QXJyb3cgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaW1nJywgJ3JpZ2h0LWFycm93JywgYHJpZ2h0QXJyb3cjJHtvcHRpb25zLmluZGV4T2Yob3B0aW9uKX1gKVxyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0QXJyb3cuc3JjID0gYXJyb3dSaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LmFwcGVuZENoaWxkKHRleHRFbGVtZW50KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQuYXBwZW5kQ2hpbGQocmlnaHRBcnJvdylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBleHBhbmRlZE1lbnUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICAgICAgICAgICAgICBleHBhbmRlZE1lbnUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kZWRNZW51LnN0eWxlLnRvcCA9IGAke3RvcCArIDI2fXB4YDtcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGV4cGFuZGVkTWVudSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZmlsdGVyLXNvcnQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZE1lbnUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZXhwYW5kZWRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSAgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaWx0ZXItc29ydCcpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQucGFyZW50Tm9kZS52YWx1ZSA9PSAnRmlsdGVyJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHJpZ2h0IH0gPSBlLnRhcmdldC5wYXJlbnROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkRmlsdGVyTWVudSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnZXhwYW5kZWQtZmlsdGVyLW1lbnUnLCBcImV4cGFuZGVkRmlsdGVyTWVudVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdG9kb1RpdGxlID0gYCR7Y3VycmVudEdlbmVyYWxUaXRsZS5pZH1gLnJlcGxhY2UoXCJ0b2Rvc1RpdGxlXCIsIFwiXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb1RpdGxlID0gY3VycmVudEdlbmVyYWxUaXRsZS5pZC5zbGljZSgxMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvZG9UaXRsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRvZG9UaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1N0YXR1cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBbJ3RvLWRvJywgJ2RvaW5nJywgJ2RvbmUnLCAnd29udCBkbyddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlRmlsdGVyIChleHBhbmRlZEZpbHRlck1lbnUsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnTGlzdHMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gbGlzdHMubWFwKCBsaXN0ID0+IGxpc3QubGlzdE5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlRmlsdGVyIChleHBhbmRlZEZpbHRlck1lbnUsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnUHJpb3JpdGllcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcHVsYXRlRmlsdGVyIChleHBhbmRlZEZpbHRlck1lbnUsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnRHVlRGF0ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5jbGFzc0xpc3QuYWRkKCdmaWx0ZXItZHVlRGF0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZVBpY2tlciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCd3Yy1kYXRlcGlja2VyJywgJ2RhdGUtcGlja2VyJywgJ2RhdGVwaWNrZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5hcHBlbmRDaGlsZChkYXRlUGlja2VyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnZmlsdGVyLXNvcnQtZXhwYW5kZWQnLCBgZmlsdGVyU29ydEV4cGFuZGVkSWQjJHtvcHRpb25zLmluZGV4T2Yob3B0aW9uKX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5zdHlsZS50b3AgPSBgJHt0b3AgKyAyNn1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0b2RvVGl0bGUgPT0gJ0R1ZURhdGVzJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUuc3R5bGUubGVmdCA9IGAke3JpZ2h0IC0gNDIwfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnN0eWxlLmxlZnQgPSBgJHtyaWdodCArIDF9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChleHBhbmRlZEZpbHRlck1lbnUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUucmVtb3ZlKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQtZmlsdGVyLW1lbnUnKSB8fCBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnd2MtZGF0ZXBpY2tlcl9fZGF0ZScpKSAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kb1RpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRvZG9UaXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnU3RhdHVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeVN0YXR1cyhlLnRhcmdldCwgdG9kb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0xpc3RzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldCkgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlMaXN0KGUudGFyZ2V0LCBsaXN0cywgdG9kb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1ByaW9yaXRpZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5UHJpb3JpdHkoZS50YXJnZXQsIHRvZG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdEdWVEYXRlcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Rlc3RlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlcGlja2VyID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnZGF0ZXBpY2tlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdzZWxlY3REYXRlJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZXBpY2tlZCA9IGV2ZW50LmRldGFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRlcGlja2VkID09IHRvZG9zWzBdLmR1ZURhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeURhdGUoZGF0ZXBpY2tlZCwgdG9kb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQucGFyZW50Tm9kZS52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGUudGFyZ2V0LnBhcmVudE5vZGUudmFsdWUgPT0gJ1NvcnQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmlnaHQsIHRvcCB9ID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwYW5kZWRTb3J0TWVudSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnZXhwYW5kZWQtc29ydC1tZW51JywgXCJleHBhbmRlZFNvcnRNZW51XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb1RpdGxlID0gY3VycmVudEdlbmVyYWxUaXRsZS5pZC5zbGljZSgxMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0b2RvVGl0bGUgPT0gJ0R1ZURhdGVzJyA/IFsnTmV3ZXN0IHRvIG9sZGVzdCcsICdPbGRlc3QgdG8gbmV3ZXN0J10gOiBbJ0FscGhhYmV0aWNhbCcsICdSZXZlcnNlIGFscGhhYmV0aWNhbCddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnZmlsdGVyLXNvcnQtZXhwYW5kZWQnLCBgZmlsdGVyU29ydEV4cGFuZGVkSWQjJHtvcHRpb25zLmluZGV4T2Yob3B0aW9uKX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRTb3J0TWVudS5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZFNvcnRNZW51LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRTb3J0TWVudS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZFNvcnRNZW51LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBleHBhbmRlZFNvcnRNZW51LnN0eWxlLmxlZnQgPSBgJHtyaWdodCArIDF9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodG9kb1RpdGxlID09ICdEdWVEYXRlcycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRTb3J0TWVudS5zdHlsZS5sZWZ0ID0gYCR7cmlnaHQgLSAzMDF9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZFNvcnRNZW51LnN0eWxlLmxlZnQgPSBgJHtyaWdodCArIDF9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGV4cGFuZGVkU29ydE1lbnUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkU29ydE1lbnUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRTb3J0TWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkLXNvcnQtbWVudScpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0b2RvVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1N0YXR1cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5VGl0bGUoZS50YXJnZXQsIHRvZG9zLCAnc3RhdHVzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnTGlzdHMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KSAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0QnlUaXRsZShlLnRhcmdldCwgdG9kb3MsICdsaXN0JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnUHJpb3JpdGllcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5VGl0bGUoZS50YXJnZXQsIHRvZG9zLCAncHJpb3JpdHknKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdEdWVEYXRlcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5VGl0bGUoZS50YXJnZXQsIHRvZG9zLCAnZHVlRGF0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1Rhc2tzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0QnlUaXRsZShlLnRhcmdldCwgdG9kb3MsICd0YXNrJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgXHJcblxyXG59XHJcblxyXG4iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlTmV3TGlzdEZvcm0gKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBuZXdMaXN0Rm9ybSA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ25ld0xpc3RGb3JtJylcclxuICAgIGludGVyYWN0RE9NKCkudG9nZ2xlRWxlbWVudERpc3BsYXkobmV3TGlzdEZvcm0pXHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbWFpbkNvbnRhaW5lcicpXHJcbiAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JsdXInKVxyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICBpZighZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy1saXN0LWZvcm0nKSBcclxuICAgICAgICAmJiAhZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZC1saXN0LWZvcm0nKVxyXG4gICAgICAgICYmICFlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnbGFiZWwtaW5wdXQtbmFtZScpXHJcbiAgICAgICAgJiYgIWUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdsYWJlbC1pbnB1dC1kZXNjcmlwdGlvbicpXHJcbiAgICAgICAgJiYgIWUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctbGlzdC1idXR0b25zJylcclxuICAgICAgICAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctbGlzdC1mb3JtJylcclxuICAgICAgICAmJiAhZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy1saXN0JylcclxuICAgICAgICB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbmNlbC1saXN0LWFkZCcpKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAgICAgICAgIGludGVyYWN0RE9NKCkuaGlkZShuZXdMaXN0Rm9ybSlcclxuICAgICAgICAgICAgLy8gbmV3VGFzay5yZW1vdmUoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIlxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlTmV3VGFza0Zvcm0gKCl7XHJcbiAgICBjb25zdCBvcGVuVGFza0Zvcm0gPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdvcGVuVGFza0Zvcm0nKVxyXG4gICAgY29uc3QgbmV3VGFzayA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ25ld1Rhc2snKVxyXG4gICAgb3BlblRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGludGVyYWN0RE9NKCkudG9nZ2xlRWxlbWVudERpc3BsYXkobmV3VGFzaywgJ2dyaWQnKTtcclxuICAgIH0pXHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdkdWVEYXRlSW5wdXQnKVxyXG4gICAgY29uc3QgZGF0ZVBpY2tlciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCd3Yy1kYXRlcGlja2VyJywgJ25ldy1kdWUtZGF0ZScsICdkYXRlcGlja2VyJylcclxuICAgIGR1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgY29uc3QgeyB0b3AsIGxlZnQsIHdpZHRoIH0gPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgIGRhdGVQaWNrZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICAgICAgZGF0ZVBpY2tlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgZGF0ZVBpY2tlci5zdHlsZS50b3AgPSBgJHt0b3AgKyAyNn1weGA7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5zdHlsZS5sZWZ0ID0gYCR7bGVmdCAtKDIzNi13aWR0aCl9cHhgO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcilcclxuICAgICAgICBkYXRlUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdERhdGUnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlcGlja2VkID0gZXZlbnQuZGV0YWlsXHJcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC50ZXh0Q29udGVudCA9IGRhdGVwaWNrZWRcclxuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZGF0ZXBpY2tlZFxyXG4gICAgICAgICAgICBkYXRlUGlja2VyLnJlbW92ZSgpXHJcbiAgICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICAvLyBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgaWYoIWUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctdGFzaycpIFxyXG4gICAgICAgICYmICFlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnb3Blbi10YXNrLWZvcm0nKSBcclxuICAgICAgICAmJiAhZS50YXJnZXQuY2xvc2VzdCgnLm5ldy1kdWUtZGF0ZScpKXtcclxuICAgICAgICAgICAgaW50ZXJhY3RET00oKS5oaWRlKG5ld1Rhc2spXHJcbiAgICAgICAgICAgIGRhdGVQaWNrZXIucmVtb3ZlKClcclxuICAgICAgICB9IFxyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZT0+e1xyXG4gICAgICAgIGlmKCFlLnRhcmdldC5jbG9zZXN0KCcubmV3LWR1ZS1kYXRlJykpe1xyXG4gICAgICAgICAgICBkYXRlUGlja2VyLnJlbW92ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5cclxuZnVuY3Rpb24gYWRkVG9Mb2NhbFN0b3JhZ2UoYXJyYXksIGtleVdvcmQpIHtcclxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXlXb3JkLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xyXG4gIH1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRGcm9tTG9jYWxTdG9yYWdlKGtleVdvcmQpIHtcclxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXlXb3JkKTtcclxuICAgIC8vIGlmIHJlZmVyZW5jZSBleGlzdHNcclxuICAgIGlmIChyZWZlcmVuY2UpIHtcclxuICAgICAgLy8gY29udmVydHMgYmFjayB0byBhcnJheSBhbmQgc3RvcmUgaXQgaW4gdG9kb3MgYXJyYXlcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UocmVmZXJlbmNlKTtcclxuICAgIC8vICAgZGlzcGxheVRhc2tzKHRvZG9zKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFtdXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVNhdmVMb2dpYyh0b2RvcywgbGlzdHMpe1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKVxyXG4gICAgY29uc3QgcGFyc2VkVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpIHx8IFtdKVxyXG4gICAgY29uc29sZS5sb2cocGFyc2VkVG9kb3MpXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgYWRkVG9Mb2NhbFN0b3JhZ2UsIGdldEZyb21Mb2NhbFN0b3JhZ2UsIGhhbmRsZVNhdmVMb2dpYyB9IiwiaW1wb3J0IGZvcm1hdCAgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiXHJcblxyXG5jb25zdCBpbnRlcmFjdERPTSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGVudCcpXHJcblxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCA9IGZ1bmN0aW9uKHR5cGUsIGNsYXNzTmFtZSwgaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChgJHtjbGFzc05hbWV9YClcclxuICAgICAgICBlbGVtZW50LmlkID0gYCR7aWROYW1lfWBcclxuICAgICAgICByZXR1cm4gZWxlbWVudFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhvb2tET01lbGVtZW50ID0gZnVuY3Rpb24gKGlkTmFtZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkTmFtZX1gKVxyXG4gICAgICAgIHJldHVybiBlbGVtXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cyA9IGZ1bmN0aW9uKGNsYXNzTmFtZSl7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2NsYXNzTmFtZX1gKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldElucHV0VmFsdWUgPSBmdW5jdGlvbihpZE5hbWUpe1xyXG4gICAgICAgIHJldHVybiBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KGlkTmFtZSkudmFsdWVcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0b2dnbGVFbGVtZW50RGlzcGxheSA9IGZ1bmN0aW9uKGVsZW1lbnQsIGRpc3BsYXlWYWx1ZSl7XHJcbiAgICAgICAgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpe1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT0gZGlzcGxheVZhbHVlID8gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIDogZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheVZhbHVlXHJcbiAgICAgICAgfSBlbHNlIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDEpe1xyXG4gICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnID8gZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnIDogZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmKGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcpe1xyXG4gICAgICAgIC8vICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICBjb25zdCBoaWRlID0gZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvdyA9IGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgb2JqLCBpbmRleCkge1xyXG4gICAgICAgIGxldCB0YXNrID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby10YXNrcycsIGB0YXNrJHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBzdGF0dXMgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLXN0YXR1cycsIGBzdGF0dXMke2luZGV4fWApXHJcbiAgICAgICAgbGV0IGxpc3QgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLWxpc3RzJywgYGxpc3Qke2luZGV4fWApXHJcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1wcmlvcml0eScsIGBwcmlvcml0eSR7aW5kZXh9YClcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tZHVlLWRhdGUnLCBgZHVlRGF0ZSR7aW5kZXh9YClcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzaylcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdHVzKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcclxuICAgICAgICB0YXNrLnRleHRDb250ZW50ID0gYCR7b2JqLnRhc2t9YFxyXG4gICAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGAke29iai5zdGF0dXN9YFxyXG4gICAgICAgIGxpc3QudGV4dENvbnRlbnQgPSBgJHtvYmoubGlzdH1gXHJcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHtvYmoucHJpb3JpdHl9YFxyXG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtmb3JtYXQobmV3IERhdGUob2JqLmR1ZURhdGUucmVwbGFjZUFsbCgnLScsICcvJykpLCBcIk1NTSBkZCcsJyB5eVwiKX1gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kTGlzdEVsZW1lbnRhbmREZWZpbmVDb250ZW50ID0gZnVuY3Rpb24oY29udGFpbmVyLCBvYmosIGluZGV4KXtcclxuICAgICAgICBsZXQgbGlzdCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2xpc3QtaXRlbScsIGBsaXN0JHtpbmRleH1gKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KVxyXG4gICAgICAgIGxpc3QudGV4dENvbnRlbnQgPSBgJHtvYmoubGlzdE5hbWV9YFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBnZW5lcmF0ZUxpc3RPcHRpb25zID0gZnVuY3Rpb24gKHt0b3AsIGxlZnR9LCBhcnJheSwgcHJvcGVydHkpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgYGNoYW5nZS0ke3Byb3BlcnR5fWAsIGBjaGFuZ2Uke3Byb3BlcnR5fUlkYClcclxuICAgICAgICAvLyBjb25zdCBidXR0b25zID0gWyd0by1kbycsICdkb2luZycsICdkb25lJywgJ3dvbnQgZG8nXTtcclxuICAgICAgICBjb25zdCBidXR0b25zID0gYXJyYXk7XHJcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgYGNoYW5nZS0ke3Byb3BlcnR5fS1idXR0b25gLCBgJHtwcm9wZXJ0eX1jaGFuZ2Uke2J1dHRvbnMuaW5kZXhPZihidXR0b24pfSNpZGApXHJcbiAgICAgICAgICBidXR0b25FbGVtZW50LnZhbHVlID0gYnV0dG9uO1xyXG4gICAgICAgICAgYnV0dG9uRWxlbWVudC50ZXh0Q29udGVudCA9IGJ1dHRvbjtcclxuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgXHJcbiAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XHJcbiAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDsgXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybVJlc2V0ID0gZnVuY3Rpb24oZm9ybUlkKXtcclxuICAgIGNvbnN0IGZvcm0gPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KGAke2Zvcm1JZH1gKVxyXG4gICAgZm9ybS5yZXNldCgpICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBtYWluQ29udGVudCwgXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkLCBcclxuICAgICAgICBob29rRE9NZWxlbWVudCwgXHJcbiAgICAgICAgcmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cywgXHJcbiAgICAgICAgZ2V0SW5wdXRWYWx1ZSwgXHJcbiAgICAgICAgYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQsXHJcbiAgICAgICAgYXBwZW5kTGlzdEVsZW1lbnRhbmREZWZpbmVDb250ZW50LCBcclxuICAgICAgICB0b2dnbGVFbGVtZW50RGlzcGxheSxcclxuICAgICAgICBoaWRlLFxyXG4gICAgICAgIHNob3csXHJcbiAgICAgICAgZ2VuZXJhdGVMaXN0T3B0aW9ucyxcclxuICAgICAgICBmb3JtUmVzZXQgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyYWN0RE9NIiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRCeVRpdGxlKGVsZW1lbnQsIHRvZG9zLCB0aXRsZSl7XHJcbiAgICBjb25zdCBzb3J0VHlwZSA9ICBlbGVtZW50LnZhbHVlXHJcbiAgICBsZXQgc29ydGVkQXJyYXlcclxuICAgIHN3aXRjaCAoc29ydFR5cGUpIHtcclxuICAgICAgICBjYXNlICdBbHBoYWJldGljYWwnOlxyXG4gICAgICAgICAgICBzb3J0ZWRBcnJheSA9IHRvZG9zLnNvcnQoKGEsIGIpID0+IGFbdGl0bGVdLnRvTG93ZXJDYXNlKCkgPiBiW3RpdGxlXS50b0xvd2VyQ2FzZSgpID8gMSA6IC0xKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdSZXZlcnNlIGFscGhhYmV0aWNhbCc6XHJcbiAgICAgICAgICAgIHNvcnRlZEFycmF5ID0gdG9kb3Muc29ydCgoYSwgYikgPT4gYVt0aXRsZV0udG9Mb3dlckNhc2UoKSA8IGJbdGl0bGVdLnRvTG93ZXJDYXNlKCkgPyAxIDogLTEpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ05ld2VzdCB0byBvbGRlc3QnOlxyXG4gICAgICAgICAgICBzb3J0ZWRBcnJheSA9IHRvZG9zLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGFbdGl0bGVdKSA+IG5ldyBEYXRlKGJbdGl0bGVdKSA/IDEgOiAtMSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnT2xkZXN0IHRvIG5ld2VzdCc6XHJcbiAgICAgICAgICAgIHNvcnRlZEFycmF5ID0gdG9kb3Muc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYVt0aXRsZV0pIDwgbmV3IERhdGUoYlt0aXRsZV0pID8gMSA6IC0xKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2coc29ydGVkQXJyYXkpXHJcbiAgICBcclxuICAgIGRpc3BsYXlUYXNrcyhzb3J0ZWRBcnJheSlcclxufVxyXG5cclxuIiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIlxyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcbmltcG9ydCB7IGFkZFRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcblxyXG4vLyBmdW5jdGlvbiBhZGRUb0xvY2FsU3RvcmFnZSh0b2Rvcykge1xyXG4vLyAgICAgLy8gY29udmVyIHRoZSBhcnJheSB0byBzdHJpbmcgdGhlbiBzdG9yZSBpdC5cclxuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XHJcbiAgIFxyXG4vLyAgICAgZGlzcGxheVRhc2tzKHRvZG9zKTtcclxuLy8gICB9XHJcblxyXG5cclxuY29uc3QgZGVsZXRlVGFzayA9IChpbmRleCkgPT4ge1xyXG4gICAgbGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHRvZG8ub3JkZXIgPSB0b2Rvcy5pbmRleE9mKHRvZG8pKVxyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UodG9kb3MsICd0b2RvcycpXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkZWZpbmVUYXNrSWQgKHRvZG9zKSB7XHJcbiAgICB0b2Rvcy5mb3JFYWNoKCB0b2RvID0+IHsgXHJcbiAgICAgICAgdG9kby5vcmRlciA9IHRvZG9zLmluZGV4T2YodG9kbylcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlUYXNrIChpbmRleCwgdGFza1ZhbHVlKSB7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICAvLyBjb25zdCB0b2RvID0gY3JlYXRlTmV3VGFzayhgJHt0YXNrVmFsdWV9YCwgYCR7dG9kb3NbaW5kZXhdLnN0YXR1c31gLCBgJHt0b2Rvc1tpbmRleF0ubGlzdH1gLCBgJHt0b2Rvc1tpbmRleF0ucHJpb3JpdHl9YCwgYCR7dG9kb3NbaW5kZXhdLmR1ZURhdGV9YCwgdG9kb3MpXHJcbiAgICAvLyBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dGFza1ZhbHVlfWAsIGAke3RvZG9zW2luZGV4XS5zdGF0dXN9YCwgYCR7dG9kb3NbaW5kZXhdLmxpc3R9YCwgYCR7dG9kb3NbaW5kZXhdLnByaW9yaXR5fWAsIGAke3RvZG9zW2luZGV4XS5kdWVEYXRlfWApXHJcbiAgICBcclxuICAgIC8vIHRvZG9zLnNwbGljZShpbmRleCwgMSwgdG9kbylcclxuICAgIGNvbnN0IGNvcnJlY3RJbmRleCA9IHRvZG9zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ub3JkZXIgPT0gaW5kZXgpXHJcbiAgICB0b2Rvc1tjb3JyZWN0SW5kZXhdLnRhc2sgPSBgJHt0YXNrVmFsdWV9YFxyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UodG9kb3MsICd0b2RvcycpXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtb2RpZnlTdGF0dXMgKGluZGV4LCBzdGF0dXNWYWx1ZSkge1xyXG4gICAgbGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgLy8gY29uc3QgdG9kbyA9IHRvZG9DcmVhdG9yKGAke3RvZG9zW2luZGV4XS50YXNrfWAsIGAke3N0YXR1c1ZhbHVlfWAsIGAke3RvZG9zW2luZGV4XS5saXN0fWAsIGAke3RvZG9zW2luZGV4XS5wcmlvcml0eX1gLCBgJHt0b2Rvc1tpbmRleF0uZHVlRGF0ZX1gKVxyXG4gICAgY29uc3QgY29ycmVjdEluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5vcmRlciA9PSBpbmRleClcclxuICAgIC8vIHRvZG9zLnNwbGljZShpbmRleCwgMSwgdG9kbylcclxuICAgIHRvZG9zW2NvcnJlY3RJbmRleF0uc3RhdHVzID0gYCR7c3RhdHVzVmFsdWV9YFxyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UodG9kb3MsICd0b2RvcycpXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVByaW9yaXR5IChpbmRleCwgcHJpb3JpdHlWYWx1ZSkge1xyXG4gICAgbGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgLy8gY29uc3QgdG9kbyA9IHRvZG9DcmVhdG9yKGAke3RvZG9zW2luZGV4XS50YXNrfWAsIGAke3RvZG9zW2luZGV4XS5zdGF0dXN9YCAsIGAke3RvZG9zW2luZGV4XS5saXN0fWAsIGAke3ByaW9yaXR5VmFsdWV9YCwgYCR7dG9kb3NbaW5kZXhdLmR1ZURhdGV9YClcclxuICAgIGNvbnN0IGNvcnJlY3RJbmRleCA9IHRvZG9zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ub3JkZXIgPT0gaW5kZXgpXHJcbiAgICAvLyB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEsIHRvZG8pXHJcbiAgICB0b2Rvc1tjb3JyZWN0SW5kZXhdLnByaW9yaXR5ID0gYCR7cHJpb3JpdHlWYWx1ZX1gXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZSh0b2RvcywgJ3RvZG9zJylcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5TGlzdCAoaW5kZXgsIGxpc3RWYWx1ZSkge1xyXG4gICAgbGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgLy8gY29uc3QgdG9kbyA9IHRvZG9DcmVhdG9yKGAke3RvZG9zW2luZGV4XS50YXNrfWAsIGAke3RvZG9zW2luZGV4XS5zdGF0dXN9YCAsIGAke2xpc3RWYWx1ZX1gLCBgJHt0b2Rvc1tpbmRleF0ucHJpb3JpdHl9YCwgYCR7dG9kb3NbaW5kZXhdLmR1ZURhdGV9YClcclxuICAgIGNvbnN0IGNvcnJlY3RJbmRleCA9IHRvZG9zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ub3JkZXIgPT0gaW5kZXgpXHJcbiAgICAvLyB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEsIHRvZG8pXHJcbiAgICB0b2Rvc1tjb3JyZWN0SW5kZXhdLmxpc3QgPSBgJHtsaXN0VmFsdWV9YFxyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UodG9kb3MsICd0b2RvcycpXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtb2RpZnlEdWVEYXRlIChpbmRleCwgZHVlRGF0ZVZhbHVlKXtcclxuICAgIGxldCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvZG9zJylcclxuICAgIGNvbnN0IGNvcnJlY3RJbmRleCA9IHRvZG9zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ub3JkZXIgPT0gaW5kZXgpXHJcbiAgICB0b2Rvc1tjb3JyZWN0SW5kZXhdLmR1ZURhdGUgPSBgJHtkdWVEYXRlVmFsdWV9YFxyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UodG9kb3MsICd0b2RvcycpXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZG9DcmVhdG9yKHRhc2ssIHN0YXR1cywgbGlzdCwgcHJpb3JpdHksIGR1ZURhdGUpe1xyXG4gICAgbGV0IHRvZG8gPSB7XHJcbiAgICAgICAgdGFzayxcclxuICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgbGlzdCxcclxuICAgICAgICBwcmlvcml0eSxcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIG9yZGVyOiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odG9kbylcclxufVxyXG5cclxuXHJcblxyXG5cclxuY29uc3QgY3JlYXRlTmV3VGFzayA9ICh0YXNrLCBzdGF0dXMsIGxpc3QsIHByaW9yaXR5LCBkdWVEYXRlKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvZG9zJylcclxuICAgIC8vIGRpc3BsYXlUYXNrcyh0b2RvcylcclxuICAgIGNvbnNvbGUubG9nKHRvZG9zKVxyXG4gICAgY29uc3QgdG9kbyA9IHRvZG9DcmVhdG9yKHRhc2ssIHN0YXR1cywgbGlzdCwgcHJpb3JpdHksIGR1ZURhdGUpXHJcbiAgICAvLyBjb25zdCBuZXdUb2RvcyA9IHRvZG9zXHJcbiAgICB0b2Rvcy5wdXNoKHRvZG8pXHJcbiAgICB0b2RvLm9yZGVyID0gdG9kb3MubGVuZ3RoIC0gMVxyXG4gICAgY29uc29sZS5sb2codG9kb3MpXHJcbiAgICBcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKHRvZG9zLCAndG9kb3MnKVxyXG4gICAgXHJcbiAgICAvLyBjb25zdCB0ZW1wT2JqID0gbmV3VG9kb3NbbmV3VG9kb3MuaW5kZXhPZih0b2RvKV1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRlbXBPYmopXHJcbiAgICAvLyBjb25zdCB0ZW1wVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpIHx8ICdbXScpXHJcbiAgICBcclxuICAgIC8vIGlmKHRlbXBUb2Rvcy5pbmRleE9mKHRlbXBPYmopID09IC0xKXtcclxuICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShuZXdUb2RvcykpXHJcbiAgICAvLyB9XHJcbiAgICByZXR1cm4gdG9kb1xyXG59IFxyXG5cclxuZXhwb3J0IHsgZGVmaW5lVGFza0lkLCBkZWxldGVUYXNrLCBtb2RpZnlUYXNrLCBtb2RpZnlTdGF0dXMsIG1vZGlmeVByaW9yaXR5LCBtb2RpZnlMaXN0LCBtb2RpZnlEdWVEYXRlLCB0b2RvQ3JlYXRvciwgY3JlYXRlTmV3VGFzayB9IiwiY29uc3QgQlVJTEQgPSB7XG4gICAgYWxsUmVuZGVyRm46IGZhbHNlLFxuICAgIGNtcERpZExvYWQ6IHRydWUsXG4gICAgY21wRGlkVW5sb2FkOiBmYWxzZSxcbiAgICBjbXBEaWRVcGRhdGU6IHRydWUsXG4gICAgY21wRGlkUmVuZGVyOiB0cnVlLFxuICAgIGNtcFdpbGxMb2FkOiB0cnVlLFxuICAgIGNtcFdpbGxVcGRhdGU6IHRydWUsXG4gICAgY21wV2lsbFJlbmRlcjogdHJ1ZSxcbiAgICBjb25uZWN0ZWRDYWxsYmFjazogdHJ1ZSxcbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjazogdHJ1ZSxcbiAgICBlbGVtZW50OiB0cnVlLFxuICAgIGV2ZW50OiB0cnVlLFxuICAgIGhhc1JlbmRlckZuOiB0cnVlLFxuICAgIGxpZmVjeWNsZTogdHJ1ZSxcbiAgICBob3N0TGlzdGVuZXI6IHRydWUsXG4gICAgaG9zdExpc3RlbmVyVGFyZ2V0V2luZG93OiB0cnVlLFxuICAgIGhvc3RMaXN0ZW5lclRhcmdldERvY3VtZW50OiB0cnVlLFxuICAgIGhvc3RMaXN0ZW5lclRhcmdldEJvZHk6IHRydWUsXG4gICAgaG9zdExpc3RlbmVyVGFyZ2V0UGFyZW50OiBmYWxzZSxcbiAgICBob3N0TGlzdGVuZXJUYXJnZXQ6IHRydWUsXG4gICAgbWVtYmVyOiB0cnVlLFxuICAgIG1ldGhvZDogdHJ1ZSxcbiAgICBtb2RlOiB0cnVlLFxuICAgIG9ic2VydmVBdHRyaWJ1dGU6IHRydWUsXG4gICAgcHJvcDogdHJ1ZSxcbiAgICBwcm9wTXV0YWJsZTogdHJ1ZSxcbiAgICByZWZsZWN0OiB0cnVlLFxuICAgIHNjb3BlZDogdHJ1ZSxcbiAgICBzaGFkb3dEb206IHRydWUsXG4gICAgc2xvdDogdHJ1ZSxcbiAgICBjc3NBbm5vdGF0aW9uczogdHJ1ZSxcbiAgICBzdGF0ZTogdHJ1ZSxcbiAgICBzdHlsZTogdHJ1ZSxcbiAgICBzdmc6IHRydWUsXG4gICAgdXBkYXRhYmxlOiB0cnVlLFxuICAgIHZkb21BdHRyaWJ1dGU6IHRydWUsXG4gICAgdmRvbVhsaW5rOiB0cnVlLFxuICAgIHZkb21DbGFzczogdHJ1ZSxcbiAgICB2ZG9tRnVuY3Rpb25hbDogdHJ1ZSxcbiAgICB2ZG9tS2V5OiB0cnVlLFxuICAgIHZkb21MaXN0ZW5lcjogdHJ1ZSxcbiAgICB2ZG9tUmVmOiB0cnVlLFxuICAgIHZkb21Qcm9wT3JBdHRyOiB0cnVlLFxuICAgIHZkb21SZW5kZXI6IHRydWUsXG4gICAgdmRvbVN0eWxlOiB0cnVlLFxuICAgIHZkb21UZXh0OiB0cnVlLFxuICAgIHdhdGNoQ2FsbGJhY2s6IHRydWUsXG4gICAgdGFza1F1ZXVlOiB0cnVlLFxuICAgIGhvdE1vZHVsZVJlcGxhY2VtZW50OiBmYWxzZSxcbiAgICBpc0RlYnVnOiBmYWxzZSxcbiAgICBpc0RldjogZmFsc2UsXG4gICAgaXNUZXN0aW5nOiBmYWxzZSxcbiAgICBoeWRyYXRlU2VydmVyU2lkZTogZmFsc2UsXG4gICAgaHlkcmF0ZUNsaWVudFNpZGU6IGZhbHNlLFxuICAgIGxpZmVjeWNsZURPTUV2ZW50czogZmFsc2UsXG4gICAgbGF6eUxvYWQ6IGZhbHNlLFxuICAgIHByb2ZpbGU6IGZhbHNlLFxuICAgIHNsb3RSZWxvY2F0aW9uOiB0cnVlLFxuICAgIGFwcGVuZENoaWxkU2xvdEZpeDogZmFsc2UsXG4gICAgY2xvbmVOb2RlRml4OiBmYWxzZSxcbiAgICBoeWRyYXRlZEF0dHJpYnV0ZTogZmFsc2UsXG4gICAgaHlkcmF0ZWRDbGFzczogdHJ1ZSxcbiAgICBzYWZhcmkxMDogZmFsc2UsXG4gICAgc2NyaXB0RGF0YU9wdHM6IGZhbHNlLFxuICAgIHNjb3BlZFNsb3RUZXh0Q29udGVudEZpeDogZmFsc2UsXG4gICAgc2hhZG93RG9tU2hpbTogZmFsc2UsXG4gICAgc2xvdENoaWxkTm9kZXNGaXg6IGZhbHNlLFxuICAgIGludmlzaWJsZVByZWh5ZHJhdGlvbjogdHJ1ZSxcbiAgICBwcm9wQm9vbGVhbjogdHJ1ZSxcbiAgICBwcm9wTnVtYmVyOiB0cnVlLFxuICAgIHByb3BTdHJpbmc6IHRydWUsXG4gICAgY3NzVmFyU2hpbTogZmFsc2UsXG4gICAgY29uc3RydWN0YWJsZUNTUzogdHJ1ZSxcbiAgICBjbXBTaG91bGRVcGRhdGU6IHRydWUsXG4gICAgZGV2VG9vbHM6IGZhbHNlLFxuICAgIGR5bmFtaWNJbXBvcnRTaGltOiBmYWxzZSxcbiAgICBzaGFkb3dEZWxlZ2F0ZXNGb2N1czogdHJ1ZSxcbiAgICBpbml0aWFsaXplTmV4dFRpY2s6IGZhbHNlLFxuICAgIGFzeW5jTG9hZGluZzogZmFsc2UsXG4gICAgYXN5bmNRdWV1ZTogZmFsc2UsXG4gICAgdHJhbnNmb3JtVGFnTmFtZTogZmFsc2UsXG4gICAgYXR0YWNoU3R5bGVzOiB0cnVlLFxufTtcbmNvbnN0IEVudiA9IHt9O1xuY29uc3QgTkFNRVNQQUNFID0gLyogZGVmYXVsdCAqLyAnYXBwJztcblxuZXhwb3J0IHsgQlVJTEQsIEVudiwgTkFNRVNQQUNFIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5tYWluLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRiA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gdW5kZWZpbmVkO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJ2YXIgaW5Qcm9ncmVzcyA9IHt9O1xudmFyIGRhdGFXZWJwYWNrUHJlZml4ID0gXCJ0b2RvLWxpc3Q6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuaiA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgPyBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gOiB1bmRlZmluZWQ7XG5cdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSB7IC8vIDAgbWVhbnMgXCJhbHJlYWR5IGluc3RhbGxlZFwiLlxuXG5cdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmKHRydWUpIHsgLy8gYWxsIGNodW5rcyBoYXZlIEpTXG5cdFx0XHRcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gKGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdKSk7XG5cdFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGNodW5rIGxvYWRpbmdcblx0XHRcdFx0XHR2YXIgdXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgX193ZWJwYWNrX3JlcXVpcmVfXy51KGNodW5rSWQpO1xuXHRcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcblx0XHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcblx0XHRcdFx0XHR2YXIgbG9hZGluZ0VuZGVkID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSkge1xuXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YVsxXShlcnJvcik7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubCh1cmwsIGxvYWRpbmdFbmRlZCwgXCJjaHVuay1cIiArIGNodW5rSWQsIGNodW5rSWQpO1xuXHRcdFx0XHR9IGVsc2UgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0XHRcdH1cblx0XHR9XG59O1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9kb19saXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9fbGlzdFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIlxyXG5pbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIlxyXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiXHJcbmltcG9ydCB7IHRvZG9DcmVhdG9yIH0gZnJvbSBcIi4vdG9kb0NyZWF0b3JcIlxyXG5pbXBvcnQgeyBtb2RpZnlTdGF0dXMgfSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiXHJcbmltcG9ydCBjb250cm9sVGFza0NoYW5nZSBmcm9tIFwiLi9jb250cm9sVGFza0NoYW5nZVwiXHJcbmltcG9ydCBjb250cm9sU3RhdHVzQ2hhbmdlIGZyb20gXCIuL2NvbnRyb2xTdGF0dXNDaGFuZ2VcIlxyXG5pbXBvcnQgY29udHJvbFByaW9yaXR5Q2hhbmdlIGZyb20gXCIuL2NvbnRyb2xQcmlvcml0eUNoYW5nZVwiXHJcbmltcG9ydCBjb250cm9sRHVlRGF0ZUNoYW5nZSBmcm9tIFwiLi9jb250cm9sRHVlRGF0ZUNoYW5nZVwiXHJcbmltcG9ydCB7IGNvbnRyb2xMaXN0Q2hhbmdlIH0gZnJvbSBcIi4vY29udHJvbExpc3RDaGFuZ2VcIlxyXG5pbXBvcnQgeyB1cGRhdGVMaXN0T3B0aW9ucyB9IGZyb20gXCIuL2NvbnRyb2xMaXN0Q2hhbmdlXCJcclxuaW1wb3J0IHsgY3JlYXRlTGlzdCB9IGZyb20gXCIuL2NyZWF0ZUxpc3RcIlxyXG5pbXBvcnQgeyBjcmVhdGVOZXdMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTGlzdFwiXHJcbmltcG9ydCB7IGRlbGV0ZUxpc3QgfSBmcm9tIFwiLi9jcmVhdGVMaXN0XCJcclxuaW1wb3J0IGRpc3BsYXlMaXN0cyBmcm9tIFwiLi9kaXNwbGF5TGlzdHNcIlxyXG5pbXBvcnQgaGFuZGxlTmV3TGlzdEZvcm0gZnJvbSBcIi4vaGFuZGxlTmV3TGlzdEZvcm1cIlxyXG5pbXBvcnQgaGFuZGxlTmV3VGFza0Zvcm0gZnJvbSBcIi4vaGFuZGxlTmV3VGFza0Zvcm1cIlxyXG5pbXBvcnQgZmlsdGVyQnlMaXN0IGZyb20gXCIuL2ZpbHRlckJ5TGlzdFwiXHJcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiXHJcbmltcG9ydCB7IGRlZmluZVRhc2tJZCB9IGZyb20gXCIuL3RvZG9DcmVhdG9yXCJcclxuaW1wb3J0IGhhbmRsZUZpbHRlck9yZGVyIGZyb20gXCIuL2hhbmRsZUZpbHRlck9yZGVyXCJcclxuaW1wb3J0IGhhbmRsZVNhdmVMb2dpYyBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIlxyXG5pbXBvcnQgeyBkZWxldGVUYXNrIH0gZnJvbSBcIi4vdG9kb0NyZWF0b3JcIlxyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCJcclxuXHJcbmltcG9ydCBhcnJvd1JpZ2h0ICBmcm9tICcuL3JpZ2h0LnBuZydcclxuXHJcbmltcG9ydCB7IFdjRGF0ZXBpY2tlciB9IGZyb20gXCJ3Yy1kYXRlcGlja2VyL2Rpc3QvY29tcG9uZW50cy93Yy1kYXRlcGlja2VyXCI7XHJcbi8vIGltcG9ydCBcIi4uL25vZGVfbW9kdWxlcy93Yy1kYXRlcGlja2VyL2Rpc3QvdGhlbWVzL2RhcmsuY3NzXCJcclxuXHJcblxyXG4vLyBjb25zdCB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykgfHwgJ1tdJylcclxuLy8gY29uc3QgdG9kb3MgPSBbXVxyXG5sZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpIHx8IFtdXHJcbmxldCBsaXN0cyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ2xpc3RzJykgfHwgW11cclxuLy8gY29uc3QgbGlzdHMgPSBbXVxyXG5cclxuXHJcblxyXG5cclxuLy8gZnVuY3Rpb24gZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuLy8gICAgIGNvbnN0IHJlZmVyZW5jZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpO1xyXG4vLyAgICAgLy8gaWYgcmVmZXJlbmNlIGV4aXN0c1xyXG4vLyAgICAgaWYgKHJlZmVyZW5jZSkge1xyXG4vLyAgICAgICAvLyBjb252ZXJ0cyBiYWNrIHRvIGFycmF5IGFuZCBzdG9yZSBpdCBpbiB0b2RvcyBhcnJheVxyXG4vLyAgICAgICB0b2RvcyA9IEpTT04ucGFyc2UocmVmZXJlbmNlKTtcclxuICAgICAgXHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmRpc3BsYXlUYXNrcyh0b2RvcylcclxuXHJcbi8vIGNvbnN0IGRlbGV0ZVRhc2sgPSBpbmRleCA9PiB7XHJcbi8vICAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpXHJcbi8vICAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbi8vIH1cclxuXHJcblxyXG4vLyBjb25zdCB0b2RvMSA9IGNyZWF0ZU5ld1Rhc2soJ3dhbGsgd2l0aCBNYW5jaGluaGEnLCAndG8tZG8nLCAnZGFpbHknLCAnaGlnaCcsICcwNC8wMy8yMDIzJywgdG9kb3MpXHJcblxyXG4vLyBjb25zdCB0b2RvMSA9IGNyZWF0ZU5ld1Rhc2soJ3dhbGsgd2l0aCBNYW5jaGluaGEnLCAndG8tZG8nLCAnZGFpbHknLCAnaGlnaCcsICcyMDIzLTA0LTAzJywgdG9kb3MpXHJcbi8vIGNvbnN0IHRvZG8yID0gY3JlYXRlTmV3VGFzaygncGxheSBSYXZlbmRhd24nLCAndG8tZG8nLCAnZGFpbHknLCAnaGlnaCcsICcyMDIzLTA0LTAzJywgdG9kb3MpXHJcbi8vIGNvbnN0IHRvZG8zID0gY3JlYXRlTmV3VGFzaygnc3R1ZHkgbWF0aCcsICd0by1kbycsICdkYWlseScsICdtZWRpdW0nLCAnMjAyMy0wNi0wNCcsIHRvZG9zKVxyXG4vLyBjb25zdCB0b2RvNCA9IGNyZWF0ZU5ld1Rhc2soJ3BsYXkgZ3VpdGFyJywgJ2RvaW5nJywgJ2dlbmVyYWwnLCAnbG93JywgJzIwMjMtMDctMDInLCB0b2RvcylcclxuLy8gY29uc3QgdG9kbzUgPSBjcmVhdGVOZXdUYXNrKCdsb29rIGZvciBiZWF2ZXJzJywgJ3RvLWRvJywgJ2dlbmVyYWwnLCAnaGlnaCcsICcyMDIzLTA0LTEyJywgdG9kb3MpXHJcbi8vIGNvbnN0IHRvZG82ID0gY3JlYXRlTmV3VGFzaygndHJ5IHRvIGNhdGNoIGEgc3F1aXJyZWwnLCAndG8tZG8nLCAnZ2VuZXJhbCcsICdsb3cnLCAnMjAyMy0xMi0wNicsIHRvZG9zKVxyXG4vLyBjb25zdCB0b2RvNyA9IGNyZWF0ZU5ld1Rhc2soJ3dhdGNoIHR2JywgJ2RvaW5nJywgJ05lbW8nLCAnbWVkaXVtJywgJzIwMjItMDUtMDUnLCB0b2RvcylcclxuLy8gY29uc3QgdG9kbzggPSBjcmVhdGVOZXdUYXNrKCd0YWtlIGEgc2hvd2VyJywgJ3RvLWRvJywgJ1Byb2plY3QnLCAnaGlnaCcsICcyMDI0LTA1LTE3JywgdG9kb3MpXHJcbi8vIGNvbnN0IHRvZG85ID0gY3JlYXRlTmV3VGFzaygnYm9ybicsICdkb25lJywgJ05lbW8nLCAnaGlnaCcsICcxOTkzLTAxLTA0JywgdG9kb3MpXHJcbi8vIGNvbnN0IHRvZG8xMCA9IGNyZWF0ZU5ld1Rhc2soJ2dyYWR1YXRlIGF0IGZhbnNoYXdlJywgJ3dvbnQgZG8nLCAnUHJvamVjdCcsICdtZWRpdW0nLCAnMjAyMy0xMi0xMScsIHRvZG9zKVxyXG5cclxuLy8gdG9kb3MucHVzaCh0b2RvMSlcclxuLy8gdG9kb3MucHVzaCh0b2RvMilcclxuLy8gdG9kb3MucHVzaCh0b2RvMylcclxuLy8gdG9kb3MucHVzaCh0b2RvNClcclxuLy8gdG9kb3MucHVzaCh0b2RvNSlcclxuLy8gdG9kb3MucHVzaCh0b2RvNilcclxuLy8gdG9kb3MucHVzaCh0b2RvNylcclxuLy8gdG9kb3MucHVzaCh0b2RvOClcclxuLy8gdG9kb3MucHVzaCh0b2RvOSlcclxuLy8gdG9kb3MucHVzaCh0b2RvMTApXHJcbi8vIGNvbnNvbGUubG9nKHRvZG9zKVxyXG5cclxuLy8gdG9kb3MuZm9yRWFjaCh0b2RvID0+IHRvZG8ub3JkZXIgPSB0b2Rvcy5pbmRleE9mKHRvZG8pKVxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbi8vICAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4gdG9kby5vcmRlciA9IHRvZG9zLmluZGV4T2YodG9kbykpXHJcbi8vIH0pXHJcblxyXG5cclxuY29uc3QgYWRkVGFzayA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2FkZFRhc2snKVxyXG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCduZXdUYXNrJylcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgaW50ZXJhY3RET00oKS5oaWRlKG5ld1Rhc2spXHJcbiAgICBhZGRUYXNrcygpXHJcbiAgICAvLyBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn0pXHJcblxyXG5cclxuY29uc3QgYWRkVGFza3MgPSBmdW5jdGlvbigpe1xyXG4gICAgbGV0IHRhc2sgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ3Rhc2tJbnB1dCcpXHJcbiAgICBsZXQgc3RhdHVzID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCdzdGF0dXNJbnB1dCcpXHJcbiAgICBsZXQgbGlzdCA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnbGlzdElucHV0JylcclxuICAgIGxldCBwcmlvcml0eSA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgncHJpb3JpdHlJbnB1dCcpXHJcbiAgICBsZXQgZHVlRGF0ZSA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnZHVlRGF0ZUlucHV0JylcclxuICAgIC8vIGNvbnN0IHRvZG8gPSB0b2RvQ3JlYXRvcihgJHt0YXNrfWAsYCR7c3RhdHVzfWAsYCR7bGlzdH1gLGAke3ByaW9yaXR5fWAsYCR7ZHVlRGF0ZX1gKVxyXG4gICAgY3JlYXRlTmV3VGFzayhgJHt0YXNrfWAsYCR7c3RhdHVzfWAsYCR7bGlzdH1gLGAke3ByaW9yaXR5fWAsYCR7ZHVlRGF0ZX1gKVxyXG4gICAgY29uc3QgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbiAgICBjb25zb2xlLmxvZyh0b2RvcylcclxuICAgIC8vIHRvZG9zLnB1c2godG9kbylcclxuICAgIGludGVyYWN0RE9NKCkuZm9ybVJlc2V0KCduZXdUYXNrJylcclxufVxyXG5cclxuLy8gZGlzcGxheVRhc2tzKHRvZG9zKVxyXG5cclxuLy8gPT09PT09PT09PT09PT09IGVkaXQgdGFza3MgbG9naWMsIHNvb24gd2lsbCBiZSBhIG1vZHVsZVxyXG5jb25zdCB0b2Rvc1ZpZXcgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCd0b2Rvc1ZpZXcnKVxyXG50b2Rvc1ZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtdGFzaycpKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuaWQpXHJcbiAgICAgICAgZGVsZXRlVGFzayhlLnRhcmdldC5wYXJlbnROb2RlLmlkKVxyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tc3RhdHVzJykpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9ICtgJHtlLnRhcmdldC5pZH1gLnJlcGxhY2UoXCJzdGF0dXNcIiwgXCJcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICAvLyBoYW5kbGVTdGF0dXNDaGFuZ2UgKGUudGFyZ2V0LCBpbmRleClcclxuICAgICAgICBjb250cm9sU3RhdHVzQ2hhbmdlKGUudGFyZ2V0LCBpbmRleCwgdG9kb3MpXHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9kby1wcmlvcml0eScpKXtcclxuICAgICAgICBjb25zdCBpbmRleCA9ICtgJHtlLnRhcmdldC5pZH1gLnJlcGxhY2UoXCJwcmlvcml0eVwiLCBcIlwiKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIGNvbnRyb2xQcmlvcml0eUNoYW5nZShlLnRhcmdldCwgaW5kZXgsIHRvZG9zKSBcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjay10YXNrJykpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NsaWNrZWQnKVxyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKXtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlVGFzayhlLnRhcmdldClcclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgICAgIFxyXG5cclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLWxpc3RzJykpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcImxpc3RcIiwgXCJcIilcclxuICAgICAgICBjb250cm9sTGlzdENoYW5nZShlLnRhcmdldCwgaW5kZXgsIGxpc3RzLCB0b2RvcylcclxuICAgIH0gZWxzZSBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tdGFza3MnKSl7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSArYCR7ZS50YXJnZXQuaWR9YC5yZXBsYWNlKFwidGFza1wiLCBcIlwiKVxyXG4gICAgICAgIGNvbnRyb2xUYXNrQ2hhbmdlKGUudGFyZ2V0LCBpbmRleCwgdG9kb3MpXHJcbiAgICB9IGVsc2UgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLWR1ZS1kYXRlJykpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcImR1ZURhdGVcIiwgXCJcIilcclxuICAgICAgICBjb250cm9sRHVlRGF0ZUNoYW5nZShlLnRhcmdldCwgaW5kZXgsIHRvZG9zKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBlbHNlIHtcclxuICAgIC8vICAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbiAgICAvLyB9XHJcbn0pO1xyXG4vLyA9PT09PT09PT09PT09PT0gZWRpdCB0YXNrcyBsb2dpYywgc29vbiB3aWxsIGJlIGEgbW9kdWxlXHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbi8vIH0pXHJcblxyXG5oYW5kbGVOZXdUYXNrRm9ybSgpXHJcblxyXG5cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PSBsaXN0IGFkZCBsb2dpYywgc29vbiB3aWxsIGJlIGEgbmV3IG1vZHVsZSAgXHJcblxyXG5cclxuLy8gY29uc3QgbGlzdDEgPSBjcmVhdGVMaXN0KCdnZW5lcmFsJylcclxuLy8gY29uc3QgbGlzdDIgPSBjcmVhdGVMaXN0KCdOZW1vJylcclxuLy8gY29uc3QgbGlzdDMgPSBjcmVhdGVMaXN0KCdQcm9qZWN0JylcclxuLy8gY29uc3QgbGlzdDQgPSBjcmVhdGVMaXN0KCdkYWlseScpXHJcbi8vIGxpc3RzLnB1c2gobGlzdDEpXHJcbi8vIGxpc3RzLnB1c2gobGlzdDIpXHJcbi8vIGxpc3RzLnB1c2gobGlzdDMpXHJcbi8vIGxpc3RzLnB1c2gobGlzdDQpXHJcbi8vIGNvbnNvbGUubG9nKGxpc3RzLm1hcCggbGlzdCA9PiBsaXN0Lmxpc3ROYW1lKSlcclxuLy8gZGlzcGxheUxpc3RzKGxpc3RzKVxyXG5cclxuLy8gdXBkYXRlTGlzdE9wdGlvbnMobGlzdHMpXHJcblxyXG5cclxuXHJcbiAgXHJcbmNvbnN0IG5ld0xpc3QgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCduZXdMaXN0JylcclxuXHJcbm5ld0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGhhbmRsZU5ld0xpc3RGb3JtKGUpXHJcbn0pXHJcblxyXG5cclxuY29uc3QgYWRkTmV3TGlzdCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2FkZE5ld0xpc3QnKVxyXG5cclxuY29uc3QgYWRkTGlzdCA9IGZ1bmN0aW9uICgpe1xyXG4gICAgY29uc3QgbGlzdCA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnbGlzdE5hbWUnKVxyXG4gICAgY29uc3QgbmV3TGlzdCA9IGNyZWF0ZU5ld0xpc3QobGlzdClcclxuICAgIGNvbnN0IGxpc3RzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgnbGlzdHMnKVxyXG4gICAgZGlzcGxheUxpc3RzKGxpc3RzKVxyXG4gICAgdXBkYXRlTGlzdE9wdGlvbnMobGlzdHMpXHJcbiAgICBpbnRlcmFjdERPTSgpLmZvcm1SZXNldCgnYWRkTGlzdEZvcm0nKVxyXG59XHJcblxyXG5hZGROZXdMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgIGNvbnN0IG5ld0xpc3RGb3JtID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbmV3TGlzdEZvcm0nKVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBpbnRlcmFjdERPTSgpLmhpZGUobmV3TGlzdEZvcm0pXHJcbiAgICBhZGRMaXN0KClcclxuICAgIC8vIGRpc3BsYXlMaXN0cyhsaXN0cylcclxuICAgIC8vIHVwZGF0ZUxpc3RPcHRpb25zKGxpc3RzKVxyXG59KVxyXG5cclxuZGlzcGxheUxpc3RzKGxpc3RzKVxyXG51cGRhdGVMaXN0T3B0aW9ucyhsaXN0cylcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09IGxpc3QgYWRkIGxvZ2ljLCBzb29uIHdpbGwgYmUgYSBuZXcgbW9kdWxlXHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09IGNoZWNrYm94ICdkb25lJyBsb2dpY1xyXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2soZWxlbWVudCkge1xyXG4gICAgY29uc3QgaW5kZXggPSArYCR7ZWxlbWVudC5pZH1gLnJlcGxhY2UoXCJjaGVja3Rhc2sjXCIsIFwiXCIpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KVxyXG4gICAgbW9kaWZ5U3RhdHVzKGluZGV4LCAnZG9uZScsIHRvZG9zKSBcclxufVxyXG4vLyA9PT09PT09PT09PT09PT0gY2hlY2tib3ggJ2RvbmUnIGxvZ2ljXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT0gZmlsdGVyIHRhc2tzIGJ5IGxpc3RcclxuXHJcbmNvbnN0IGxpc3RzVmlldyA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2xpc3RzVmlldycpXHJcblxyXG5saXN0c1ZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdsaXN0LWl0ZW0nKSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbiAgICAgICAgZmlsdGVyQnlMaXN0KGUudGFyZ2V0LCBsaXN0cywgdG9kb3MpXHJcbiAgICB9IGVsc2UgaWYoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1saXN0Jykpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LnBhcmVudE5vZGUuaWR9YC5yZXBsYWNlKFwiZGVsZXRlTGlzdCNcIiwgXCJcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICBkZWxldGVMaXN0KGluZGV4KVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09IGZpbHRlciB0YXNrcyBieSBsaXN0XHJcblxyXG5jb25zdCByZW1vdmVGaWx0ZXIgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdyZW1vdmVGaWx0ZXInKVxyXG5yZW1vdmVGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufSlcclxuXHJcblxyXG5oYW5kbGVGaWx0ZXJPcmRlcihsaXN0cywgdG9kb3MpXHJcblxyXG5jb25zb2xlLmxvZyh0b2RvcylcclxuXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKVxyXG59KVxyXG5cclxuXHJcbi8vIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZSA9PiB7XHJcbi8vICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1saXN0LWltZycpKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnZW50ZXJlZCEnKVxyXG4vLyAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJ1xyXG4vLyAgICAgICAgIGUudGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJ1xyXG4vLyAgICAgfVxyXG4vLyB9KVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=