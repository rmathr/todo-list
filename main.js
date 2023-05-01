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

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, object) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  for (var property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;
      target[property] = object[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(object) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, object);
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

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceStrict/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceStrict/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceStrict)
/* harmony export */ });
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MILLISECONDS_IN_MINUTE = 1000 * 60;
var MINUTES_IN_DAY = 60 * 24;
var MINUTES_IN_MONTH = MINUTES_IN_DAY * 30;
var MINUTES_IN_YEAR = MINUTES_IN_DAY * 365;
/**
 * @name formatDistanceStrict
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.roundingMethod` must be 'floor', 'ceil' or 'round'
 * @throws {RangeError} `options.unit` must be 'second', 'minute', 'hour', 'day', 'month' or 'year'
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistanceStrict(new Date(2014, 6, 2), new Date(2015, 0, 2))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * const result = formatDistanceStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistanceStrict(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * const result = formatDistanceStrict(new Date(2016, 0, 1), new Date(2015, 0, 1), {
 *   unit: 'minute'
 * })
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2015
 * // to 28 January 2015, in months, rounded up?
 * const result = formatDistanceStrict(new Date(2015, 0, 28), new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistanceStrict(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> '1 jaro'
 */

function formatDistanceStrict(dirtyDate, dirtyBaseDate, options) {
  var _ref, _options$locale, _options$roundingMeth;

  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain localize.formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_assign_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(options), {
    addSuffix: Boolean(options === null || options === void 0 ? void 0 : options.addSuffix),
    comparison: comparison
  });
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dirtyBaseDate);
  }

  var roundingMethod = String((_options$roundingMeth = options === null || options === void 0 ? void 0 : options.roundingMethod) !== null && _options$roundingMeth !== void 0 ? _options$roundingMeth : 'round');
  var roundingMethodFn;

  if (roundingMethod === 'floor') {
    roundingMethodFn = Math.floor;
  } else if (roundingMethod === 'ceil') {
    roundingMethodFn = Math.ceil;
  } else if (roundingMethod === 'round') {
    roundingMethodFn = Math.round;
  } else {
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");
  }

  var milliseconds = dateRight.getTime() - dateLeft.getTime();
  var minutes = milliseconds / MILLISECONDS_IN_MINUTE;
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateLeft); // Use DST-normalized difference in minutes for years, months and days;
  // use regular difference in minutes for hours, minutes and seconds.

  var dstNormalizedMinutes = (milliseconds - timezoneOffset) / MILLISECONDS_IN_MINUTE;
  var defaultUnit = options === null || options === void 0 ? void 0 : options.unit;
  var unit;

  if (!defaultUnit) {
    if (minutes < 1) {
      unit = 'second';
    } else if (minutes < 60) {
      unit = 'minute';
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'hour';
    } else if (dstNormalizedMinutes < MINUTES_IN_MONTH) {
      unit = 'day';
    } else if (dstNormalizedMinutes < MINUTES_IN_YEAR) {
      unit = 'month';
    } else {
      unit = 'year';
    }
  } else {
    unit = String(defaultUnit);
  } // 0 up to 60 seconds


  if (unit === 'second') {
    var seconds = roundingMethodFn(milliseconds / 1000);
    return locale.formatDistance('xSeconds', seconds, localizeOptions); // 1 up to 60 mins
  } else if (unit === 'minute') {
    var roundedMinutes = roundingMethodFn(minutes);
    return locale.formatDistance('xMinutes', roundedMinutes, localizeOptions); // 1 up to 24 hours
  } else if (unit === 'hour') {
    var hours = roundingMethodFn(minutes / 60);
    return locale.formatDistance('xHours', hours, localizeOptions); // 1 up to 30 days
  } else if (unit === 'day') {
    var days = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 up to 12 months
  } else if (unit === 'month') {
    var months = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_MONTH);
    return months === 12 && defaultUnit !== 'month' ? locale.formatDistance('xYears', 1, localizeOptions) : locale.formatDistance('xMonths', months, localizeOptions); // 1 year up to max Date
  } else if (unit === 'year') {
    var years = roundingMethodFn(dstNormalizedMinutes / MINUTES_IN_YEAR);
    return locale.formatDistance('xYears', years, localizeOptions);
  }

  throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistanceToNowStrict)
/* harmony export */ });
/* harmony import */ var _formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../formatDistanceStrict/index.js */ "./node_modules/date-fns/esm/formatDistanceStrict/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name formatDistanceToNowStrict
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 * @pure false
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `formatDistance`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|Number} date - the given date
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'second'|'minute'|'hour'|'day'|'month'|'year'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.roundingMethod='round'] - which way to round partial units
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * const result = formatDistanceToNowStrict(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * const result = formatDistanceToNowStrict(
 *   new Date(2015, 0, 1, 0, 0, 15)
 * )
 * //=> '15 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * const result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in 1 year'
 *
 * @example
 * // If today is 28 January 2015,
 * // what is the distance to 1 January 2015, in months, rounded up??
 * const result = formatDistanceToNowStrict(new Date(2015, 0, 1), {
 *   unit: 'month',
 *   roundingMethod: 'ceil'
 * })
 * //=> '1 month'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016 in Esperanto?
 * const eoLocale = require('date-fns/locale/eo')
 * const result = formatDistanceToNowStrict(
 *   new Date(2016, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */

function formatDistanceToNowStrict(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_formatDistanceStrict_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
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
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var wc_datepicker_dist_themes_dark_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wc-datepicker/dist/themes/dark.css */ "./node_modules/wc-datepicker/dist/themes/dark.css");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");






function controlDueDateChange(element, index){
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)('todos')
    const correctIndex = todos.findIndex(item => item.order == index)
    const { top, left, width } = element.getBoundingClientRect()

    
    const datePicker = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('wc-datepicker', 'new-due-date', 'datepicker')
    datePicker.classList.add('edit-due-date')
    const currentDate = todos[correctIndex].dueDate 
    datePicker.setAttribute('start-date', `${currentDate}`)
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
        datePicker.addEventListener('selectDate', function(event) {
            const datepicked = event.detail
            ;(0,_todoCreator__WEBPACK_IMPORTED_MODULE_1__.modifyDueDate)(index, datepicked)
            datePicker.remove()
            ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_4__.handleEffects)()
        });
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
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");







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
    
    changeList.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-list-button')){
             (0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyList)(index, `${e.target.value}`)
            ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_4__.handleEffects)()
            changeList.remove() 
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
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");





function controlPriorityChange(element, index){
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_2__.getFromLocalStorage)('todos')
    const buttons = ['low', 'medium', 'high'];
    const { top, left } = element.getBoundingClientRect()
    const changePriority = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().generateListOptions({top, left}, buttons, 'priority')
    
    document.addEventListener('mousedown', e =>{
        changePriority.remove()
        
    })
    changePriority.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-priority-button')){
             (0,_todoCreator__WEBPACK_IMPORTED_MODULE_1__.modifyPriority)(index, `${e.target.value}`)
             ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_3__.handleEffects)() 
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
/* harmony export */   "completeTask": () => (/* binding */ completeTask),
/* harmony export */   "controlStatusChange": () => (/* binding */ controlStatusChange)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");






function completeTask(element) {
    const index = +`${element.id}`.replace("checktask#", "")
    const todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_2__.getFromLocalStorage)('todos')
    ;(0,_todoCreator__WEBPACK_IMPORTED_MODULE_1__.modifyStatus)(index, 'done', todos) 
    ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_3__.handleEffects)()
}



function controlStatusChange(element, index){
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_2__.getFromLocalStorage)('todos')
    const buttons = ['to-do', 'doing', 'done', 'wont do'];
    const { top, left } = element.getBoundingClientRect()

    const changeStatus = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().generateListOptions({top, left}, buttons, 'status')
    

    document.addEventListener('mousedown', e =>{
        changeStatus.remove()
        
    })
    changeStatus.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-status-button')){
             (0,_todoCreator__WEBPACK_IMPORTED_MODULE_1__.modifyStatus)(index, `${e.target.value}`)
            changeStatus.remove()
            ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_3__.handleEffects)()
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
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");





function controlTaskChange(element, index){
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_2__.getFromLocalStorage)('todos')
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
            (0,_todoCreator__WEBPACK_IMPORTED_MODULE_1__.modifyTask)(index, `${changeTask.value}`)
            changeTask.remove()
            ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_3__.handleEffects)()
        }
    })
    
    changeTask.addEventListener('keydown', e => {
        if(e.keyCode == 13){
            (0,_todoCreator__WEBPACK_IMPORTED_MODULE_1__.modifyTask)(index, `${changeTask.value}`)
            changeTask.remove()
            ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_3__.handleEffects)()
        }
    })
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

function createList (listName, color, description){
    let list = {
        listName,
        color,
        description
    }
    return Object.assign({}, list)
}

const createNewList = (listName, color, description) => {
    const lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('lists')
    const list = createList(listName, color, description)
    lists.push(list)
    console.log(lists)
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(lists, 'lists')
}



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
        let deleteImage = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'delete-list-img', `deleteListImage#${i}`)
        deleteImage.src = _remove_png__WEBPACK_IMPORTED_MODULE_1__
        deleteList.appendChild(deleteImage)
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



function displayTasks(array){
    const todosView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('todosView')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('todos').forEach(e => e.remove())
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('delete-task').forEach(e => e.remove())
    for(let i = 0; i < array.length; i++){
        let container = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'todos', `todo${array[i].order}`)
        let checkTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'check-task', `checktask#${i}`)
        let deleteTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'delete-task', `${i}`)
        let deleteImage = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'delete-image', `deleteImage#${i}`)
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
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");




function filterByDate (dateValue){
    const todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    const filteredTodos = todos.filter(todo => todo.dueDate == dateValue )
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(filteredTodos)
    ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_2__.handleEffects)()
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
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");






function filterByList (element){
    const lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('lists')
    const todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    const index = +`${element.id}`.replace("list", "")
    const listValue = lists.map( list => list.listName)[index] == undefined ? element.value : lists.map( list => list.listName)[index]
    const filteredTodos = todos.filter(todo => todo.list == listValue )
    
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(filteredTodos)
    ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_2__.handleEffects)()
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
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");




function filterByPriority (element){
    const todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    const priorityValue =  element.value
    const filteredTodos = todos.filter(todo => todo.priority == priorityValue )
    
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(filteredTodos)
    ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_2__.handleEffects)()
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
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");





function filterByStatus (element){
    const todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    const statusValue =  element.value
    const filteredTodos = todos.filter(todo => todo.status == statusValue )
    
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(filteredTodos)
    ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_2__.handleEffects)()
} 

/***/ }),

/***/ "./src/handleEffects.js":
/*!******************************!*\
  !*** ./src/handleEffects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleEffects": () => (/* binding */ handleEffects),
/* harmony export */   "hex2rgba": () => (/* binding */ hex2rgba)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js");




function hex2rgba (hex, alpha) {
    if(hex === undefined){
        hex = '#205295'
    }
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };


function handleEffects(){
    const titles = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('todos-titles')
    titles.forEach(title => {
        title.addEventListener('mouseenter', e => {
       
        titles.forEach(title => title.classList.add('border-right-titles')) 
    })
        title.addEventListener('mouseleave', e => {
        titles.forEach(title => title.classList.remove('border-right-titles'))
        })
}
    )

    const deleteListIcons = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('delete-list-img')
    deleteListIcons.forEach(item => {
        item.addEventListener('mouseenter', e => {
            item.classList.add('delete-image-img-hover')
        })
        item.addEventListener('mouseleave', e => {
            item.classList.remove('delete-image-img-hover')
        })
    })

    const expandedIcons = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('expand-icon')
    expandedIcons.forEach(icon => {
        icon.addEventListener('mouseenter', e => {
            icon.classList.add('expand-icon-effect')
        })
        icon.addEventListener('mouseleave', e => {
            icon.classList.remove('expand-icon-effect')
        })

    })

    const todosTitles = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('todos-titles')
    todosTitles.forEach(title => {
        title.addEventListener('mouseenter', e => {
            const imageIndex = e.target.id + "-icon"
            ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement(imageIndex).classList.add('image-visible')
        })
        title.addEventListener('mouseleave', e => {
            const imageIndex = e.target.id + "-icon"
            ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement(imageIndex).classList.remove('image-visible')
        })


    })

    const lists = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('lists')
    lists.forEach(list => {
        
        list.addEventListener('mouseenter', e => {
            const listIndex = +`${e.target.id}`.replace("list", "")
            const imageIndex = 'deleteListImage#' + listIndex
            ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement(imageIndex).classList.add('image-visible')
            const lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('lists')
            const color = lists.filter(item => item.listName == list.textContent).map(item => item.color)
            list.style.backgroundColor = `${hex2rgba(color[0], 0.3)}`
        })
        list.addEventListener('mouseleave', e => {
            const listIndex = +`${e.target.id}`.replace("list", "")
            const imageIndex = 'deleteListImage#' + listIndex
            ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement(imageIndex).classList.remove('image-visible')
            list.style.backgroundColor = `transparent`
        })
    })

    const todos = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('todos')
    todos.forEach(todo => {

        todo.addEventListener('mouseenter', e=> {
           const imageIndex = "deleteImage#" + todo.id.match(/\d+/)[0]
           ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement(imageIndex).classList.add('image-visible')
        })

        todo.addEventListener('mouseleave', e => {
            const imageIndex = "deleteImage#" + todo.id.match(/\d+/)[0]
            ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement(imageIndex).classList.remove('image-visible')
        })



    })


    const listItem = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('list-item')
    listItem.forEach(list => {
        list.addEventListener('mousedown', e => {
                for(let i = 0; i < listItem.length; i++){
                    listItem[i].style.backgroundColor = 'transparent'
                }
                const lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('lists')
                const color = lists.filter(item => item.listName == list.textContent).map(item => item.color)
                list.style.backgroundColor = `${hex2rgba(color[0], 0.3)}`    
    })
    })
    
    const todoLists = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('todo-lists')
    todoLists.forEach(list => {
        const lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('lists')
        const color = lists.filter(item => item.listName == list.textContent).map(item => item.color)
        list.style.backgroundColor = `${hex2rgba(color[0], 0.3)}`
    })

    const todoStatus = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('todo-status')
    todoStatus.forEach(status => {
        if(status.textContent == 'done'){
            status.style.backgroundColor = 'var(--done-background-color)'
            status.style.color = 'var(--background-main-content)'
            const index = +`${status.id}`.replace("status", "")
            const taskIndex = 'task' + index
            const priorityIndex = 'priority' + index
            const dueDateIndex = 'dueDate' + index
            status.classList.add('done')
            ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement(taskIndex).classList.add('done')
            ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement(priorityIndex).classList.add('done')
            ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement(dueDateIndex).classList.add('done')
        }
    })

    const todoDueDate = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('todo-due-date')
    todoDueDate.forEach(duedate => {
        if(new Date(duedate.textContent) <= new Date()){
            duedate.style.color = 'var(--due-date-red)'
        } else if((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(duedate.textContent)) == '1 day' || 
        (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(duedate.textContent)) == '2 days' ||
        (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(duedate.textContent)) == '3 days' || 
        (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(duedate.textContent)) == '4 days' || 
        (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(duedate.textContent)) == '5 days' ||
        (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(duedate.textContent)).includes('seconds') ||
        (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(duedate.textContent)).includes('minutes') ||
        (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(duedate.textContent)).includes('hours')
        ){
            duedate.style.color = 'var(--due-date-yellow)'
        }
    })
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().handleMouseMovementEffect('openTaskForm')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().handleMouseMovementEffect('cancelListAdd')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().handleMouseMovementEffect('addNewList')
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


function populateFilter(parentElement, array) {
    array.forEach((option) => {
        const optionElement = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'filter-sort-expanded', `filterSortExpandedId#${array.indexOf(option)}`)
        optionElement.textContent = option
        optionElement.value = option;
        parentElement.appendChild(optionElement);
    });
}

function inputElementIcons(parentElement, icon) {
    const image = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('img', 'expand-icon', `${parentElement}-icon`)
    image.src = icon
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement(parentElement).appendChild(image)
}

inputElementIcons('todosTitleTasks', _down_png__WEBPACK_IMPORTED_MODULE_9__)
inputElementIcons('todosTitleStatus', _down_png__WEBPACK_IMPORTED_MODULE_9__)
inputElementIcons('todosTitleLists', _down_png__WEBPACK_IMPORTED_MODULE_9__)
inputElementIcons('todosTitlePriorities', _down_png__WEBPACK_IMPORTED_MODULE_9__)
inputElementIcons('todosTitleDueDates', _down_png__WEBPACK_IMPORTED_MODULE_9__)


function handleFilterOrder(lists, todos) {
    const todosGeneralTitles = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('todosGeneralTitles')
    todosGeneralTitles.addEventListener('click', e => {

        if (e.target.classList.contains('expand-icon')) {
            const currentGeneralTitle = e.target.parentNode
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
                if (!e.target.parentNode.classList.contains('filter-sort')) {
                    expandedMenu.remove()
                }


            })

            expandedMenu.addEventListener('click', e => {
                if (e.target.parentNode.classList.contains('filter-sort')) {
                    if (e.target.parentNode.value == 'Filter') {
                        const { right } = e.target.parentNode.getBoundingClientRect()
                        const expandedFilterMenu = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'expanded-filter-menu', "expandedFilterMenu")
                        let todoTitle = currentGeneralTitle.id.slice(10)
                        let options
                        switch (todoTitle) {
                            case 'Status':
                                options = ['to-do', 'doing', 'done', 'wont do']
                                populateFilter(expandedFilterMenu, options)
                                break
                            case 'Lists':
                                options = lists.map(list => list.listName)
                                populateFilter(expandedFilterMenu, options)
                                break
                            case 'Priorities':
                                options = ['low', 'medium', 'high']
                                populateFilter(expandedFilterMenu, options)
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
                        expandedFilterMenu.style.position = 'absolute'
                        expandedFilterMenu.style.display = 'flex'
                        expandedFilterMenu.style.top = `${top + 26}px`;
                        if (todoTitle == 'DueDates') {
                            expandedFilterMenu.style.left = `${right - 420}px`;
                        } else {
                            expandedFilterMenu.style.left = `${right + 1}px`;
                        }
                        document.body.appendChild(expandedFilterMenu);
                        document.addEventListener('mousedown', e => {
                            expandedFilterMenu.remove()
                        }
                        )
                        expandedFilterMenu.addEventListener('mousedown', e => {
                            e.stopPropagation()
                            if (e.target.parentNode.classList.contains('expanded-filter-menu') || e.target.parentNode.classList.contains('wc-datepicker__date')) {
                                switch (todoTitle) {
                                    case 'Status':
                                        (0,_filterByStatus__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target, todos)
                                        expandedMenu.remove()
                                        expandedFilterMenu.remove()
                                        break
                                    case 'Lists':
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
                                        const datepicker = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('datepicker')
                                        datepicker.addEventListener('selectDate', function (event) {
                                            const datepicked = event.detail
                                            ;(0,_filterByDate__WEBPACK_IMPORTED_MODULE_5__["default"])(datepicked, todos)
                                            expandedMenu.remove()
                                            expandedFilterMenu.remove()
                                        });
                                        break
                                }

                            }
                        })
                    } else if (e.target.parentNode.value == 'Sort') {
                        const { right, top } = e.target.parentNode.getBoundingClientRect()
                        const expandedSortMenu = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('div', 'expanded-sort-menu', "expandedSortMenu")
                        let todoTitle = currentGeneralTitle.id.slice(10)
                        const options = todoTitle == 'DueDates' ? ['Newest to oldest', 'Oldest to newest'] : ['Alphabetical', 'Reverse alphabetical']

                        options.forEach((option) => {
                            const optionElement = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('button', 'filter-sort-expanded', `filterSortExpandedId#${options.indexOf(option)}`)
                            optionElement.textContent = option
                            optionElement.value = option;
                            expandedSortMenu.appendChild(optionElement);
                        });

                        expandedSortMenu.style.position = 'absolute'
                        expandedSortMenu.style.display = 'flex'
                        expandedSortMenu.style.top = `${top}px`;
                        if (todoTitle == 'DueDates') {
                            expandedSortMenu.style.left = `${right - 301}px`;
                        } else {
                            expandedSortMenu.style.left = `${right + 1}px`;
                        }
                        document.body.appendChild(expandedSortMenu);

                        document.addEventListener('mousedown', e => {
                            expandedSortMenu.remove()
                        })

                        expandedSortMenu.addEventListener('mousedown', e => {
                            if (e.target.parentNode.classList.contains('expanded-sort-menu')) {
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
/* harmony import */ var _handleNewListLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleNewListLogic */ "./src/handleNewListLogic.js");



function handleNewListForm (e){
    e.preventDefault()
    const newListForm = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('newListForm')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().toggleElementDisplay(newListForm)
    document.body.addEventListener('mousedown', e => {
        if((!e.target.closest('.new-list-form')) || e.target.closest('.cancel-list-add')){
            (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hide(newListForm)
        }
    })

    document.body.addEventListener('keydown', e => {
        if(e.key == 'Escape'){
            (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hide(newListForm)             
        } else if(e.key == 'Enter'){
            const newListForm = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('newListForm')
            ;(0,_handleNewListLogic__WEBPACK_IMPORTED_MODULE_1__.addList)()
            _interactDom__WEBPACK_IMPORTED_MODULE_0__["default"].hide(newListForm)
        }
    })
}

/***/ }),

/***/ "./src/handleNewListLogic.js":
/*!***********************************!*\
  !*** ./src/handleNewListLogic.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addList": () => (/* binding */ addList),
/* harmony export */   "handleNewListLogic": () => (/* binding */ handleNewListLogic)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createList */ "./src/createList.js");
/* harmony import */ var _displayLists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayLists */ "./src/displayLists.js");
/* harmony import */ var _controlListChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controlListChange */ "./src/controlListChange.js");
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");
/* harmony import */ var _handleNewListForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleNewListForm */ "./src/handleNewListForm.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");








function addList (){
    let listName = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().getInputValue('listName')
    let color = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().getInputValue('listColor')
    let description = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().getInputValue('listDescription')
    ;(0,_createList__WEBPACK_IMPORTED_MODULE_1__.createNewList)(`${listName}`, `${color}`, `${description}`)
    const lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_6__.getFromLocalStorage)('lists')
    ;(0,_displayLists__WEBPACK_IMPORTED_MODULE_2__["default"])(lists)
    ;(0,_controlListChange__WEBPACK_IMPORTED_MODULE_3__.updateListOptions)(lists)
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().formReset('addListForm')
    ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_4__.handleEffects)()
}

function handleNewListLogic (){
    const newList = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('newList')

    newList.addEventListener('click', e => {
        ;(0,_handleNewListForm__WEBPACK_IMPORTED_MODULE_5__["default"])(e)
    })
    
    const addNewList = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('addNewList')
    
    addNewList.addEventListener('click', e =>{
        const newListForm = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('newListForm')
        e.preventDefault()
        ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hide(newListForm)
        addList()
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
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");



function handleNewTaskForm (){
    const openTaskForm = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('openTaskForm')
    const newTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('newTask')
    openTaskForm.addEventListener('mousedown', e =>{
        e.preventDefault()
            e.stopPropagation()
        setTimeout(function(){
            ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().toggleElementDisplay(newTask, 'grid');
        }, 200)   
    })
    const dueDateInput = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('dueDateInput')
    const datePicker = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('wc-datepicker', 'new-due-date', 'datepicker')
    dueDateInput.addEventListener('mousedown', e => {
        e.stopPropagation()
        const { top, left, width } = e.target.getBoundingClientRect()
        const currentDate = (0,date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(), "P")
        datePicker.setAttribute('start-date', `${currentDate}`)
        datePicker.value = new Date(`${currentDate.replaceAll('-', '/')}`)
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

/***/ "./src/handleNewTaskLogic.js":
/*!***********************************!*\
  !*** ./src/handleNewTaskLogic.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleNewTaskLogic)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");






const handleNewTaskFormValidation = function(){
    const taskValue = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().getInputValue('taskInput')
    const statusValue = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().getInputValue('statusInput')
    const listValue = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().getInputValue('listInput')
    const priorityValue = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().getInputValue('priorityInput')
    const dueDateValue = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().getInputValue('dueDateInput')
    if(taskValue != '' && statusValue != '' && listValue != '' && priorityValue != '' && dueDateValue != ''){
        return true
    }else {
        return false
    }
}

const addTasks = function(){
    let task = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().getInputValue('taskInput')
    let status = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().getInputValue('statusInput')
    let list = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().getInputValue('listInput')
    let priority = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().getInputValue('priorityInput')
    let dueDate = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().getInputValue('dueDateInput')
    ;(0,_todoCreator__WEBPACK_IMPORTED_MODULE_1__.createNewTask)(`${task}`,`${status}`,`${list}`,`${priority}`,`${dueDate}`)
    const todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_2__.getFromLocalStorage)('todos')
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_3__["default"])(todos)
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().formReset('newTask')
    ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_4__.handleEffects)()
}
function handleNewTaskLogic(){
    const addTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('addTask')
    addTask.addEventListener('click', e =>{
        const newTask = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('newTask')
        e.preventDefault()
        ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hide(newTask)
        if(handleNewTaskFormValidation()){
            addTasks()
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
/* harmony export */   "getFromLocalStorage": () => (/* binding */ getFromLocalStorage)
/* harmony export */ });
function addToLocalStorage(array, keyWord) {
    window.localStorage.setItem(keyWord, JSON.stringify(array));
  }


function getFromLocalStorage(keyWord) {
    const reference = window.localStorage.getItem(keyWord);
    if (reference) {
      return JSON.parse(reference);
    } else {
        return []
    }
  }



/***/ }),

/***/ "./src/handleTasksAndListsEdits.js":
/*!*****************************************!*\
  !*** ./src/handleTasksAndListsEdits.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleTasksAndListsEdits)
/* harmony export */ });
/* harmony import */ var _interactDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactDom */ "./src/interactDom.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var _controlStatusChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controlStatusChange */ "./src/controlStatusChange.js");
/* harmony import */ var _controlPriorityChange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controlPriorityChange */ "./src/controlPriorityChange.js");
/* harmony import */ var _controlDueDateChange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controlDueDateChange */ "./src/controlDueDateChange.js");
/* harmony import */ var _controlTaskChange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controlTaskChange */ "./src/controlTaskChange.js");
/* harmony import */ var _controlListChange__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controlListChange */ "./src/controlListChange.js");
/* harmony import */ var _filterByList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./filterByList */ "./src/filterByList.js");
/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createList */ "./src/createList.js");
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");















function handleTasksAndListsEdits(){
    const todosView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('todosView')
    todosView.addEventListener('click', (e) => {
        if (e.target.parentNode.classList.contains('delete-task')) {
            (0,_todoCreator__WEBPACK_IMPORTED_MODULE_1__.deleteTask)(e.target.parentNode.id)
        } else if (e.target.classList.contains('todo-status')) {
            const index = +`${e.target.id}`.replace("status", "")
            ;(0,_controlStatusChange__WEBPACK_IMPORTED_MODULE_2__.controlStatusChange)(e.target, index)
        } else if (e.target.classList.contains('todo-priority')){
            const index = +`${e.target.id}`.replace("priority", "")
            ;(0,_controlPriorityChange__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target, index)
        } else if (e.target.classList.contains('check-task')){
            e.target.classList.toggle('clicked')
            setInterval(function(){
                if(e.target.classList.contains('clicked')){
                    (0,_controlStatusChange__WEBPACK_IMPORTED_MODULE_2__.completeTask)(e.target)
                }    
            }, 2000)
        } else if (e.target.classList.contains('todo-lists')){
            const index = +`${e.target.id}`.replace("list", "")
            ;(0,_controlListChange__WEBPACK_IMPORTED_MODULE_6__.controlListChange)(e.target, index)
        } else if(e.target.classList.contains('todo-tasks')){
            const index = +`${e.target.id}`.replace("task", "")
            ;(0,_controlTaskChange__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target, index)
        } else if(e.target.classList.contains('todo-due-date')){
            const index = +`${e.target.id}`.replace("dueDate", "")
            ;(0,_controlDueDateChange__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target, index)
        }
    });
    const listsView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('listsView')
    
    listsView.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        if(e.target.classList.contains('list-item')){
            const todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_10__.getFromLocalStorage)('todos')
            const lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_10__.getFromLocalStorage)('lists')
            ;(0,_filterByList__WEBPACK_IMPORTED_MODULE_7__["default"])(e.target, lists, todos)
        } else if(e.target.parentNode.classList.contains('delete-list')){
            const index = +`${e.target.parentNode.id}`.replace("deleteList#", "")
            console.log(index)
            ;(0,_createList__WEBPACK_IMPORTED_MODULE_8__.deleteList)(index)
            ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_9__.handleEffects)()
        }
    })
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
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _tasks_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.png */ "./src/tasks.png");



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
    }

   

    const hide = function(element){
        element.style.display = 'none'
    }

    const show = function(element){
        element.style.display = 'flex'
    }

    const appendElementAndDefineContent = function (container, obj, index) {
        let task = interactDOM().createElementWithClassAndId('p', 'todo-tasks', `task${index}`)
        let statusContainer = interactDOM().createElementWithClassAndId('span', 'status-container', `statusContainer${index}`)
        let status = interactDOM().createElementWithClassAndId('p', 'todo-status', `status${index}`)
        let listContainer = interactDOM().createElementWithClassAndId('span', 'list-container', `listContainer${index}`)
        let list = interactDOM().createElementWithClassAndId('p', 'todo-lists', `list${index}`)
        let priorityContainer = interactDOM().createElementWithClassAndId('span', 'priority-container', `priorityContainer${index}`)
        let priority = interactDOM().createElementWithClassAndId('p', 'todo-priority', `priority${index}`)
        let dueDate = interactDOM().createElementWithClassAndId('p', 'todo-due-date', `dueDate${index}`)
        container.appendChild(task)
        container.appendChild(statusContainer)
        container.appendChild(listContainer)
        container.appendChild(priorityContainer)
        container.appendChild(dueDate)
        statusContainer.appendChild(status)
        listContainer.appendChild(list)
        priorityContainer.appendChild(priority)
        task.textContent = `${obj.task}`
        status.textContent = `${obj.status}`
        list.textContent = `${obj.list}`
        priority.textContent = `${obj.priority}`
        dueDate.textContent = `${(0,date_fns_format__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(obj.dueDate.replaceAll('-', '/')), "MMM dd',' yy")}`
    }

    const appendListElementandDefineContent = function(container, obj, index){
        let list = interactDOM().createElementWithClassAndId('p', 'list-item', `list${index}`)
        container.appendChild(list)
        list.textContent = `${obj.listName}`
    }


    const generateListOptions = function ({ top, left }, array, property) {

        const element = interactDOM().createElementWithClassAndId('div', `change-${property}`, `change${property}Id`)
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
    
    const handleMouseMovementEffect = function(elementId){
        const element = interactDOM().hookDOMelement(elementId)
    element.addEventListener('mousemove', e=> {
        const { x, y } = element.getBoundingClientRect();
        element.style.setProperty("--x", e.clientX - x);
        element.style.setProperty("--y", e.clientY - y);
    })
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
        formReset,
        handleMouseMovementEffect 
    }
}

const handleImageBrand = (function(){
    const imageBrand = interactDOM().createElementWithClassAndId('img', 'image-brand', 'imageBrand')
    imageBrand.src = _tasks_png__WEBPACK_IMPORTED_MODULE_0__
    const sidebarBrand = interactDOM().hookDOMelement('sidebarBrand')
    sidebarBrand.insertAdjacentElement("afterbegin", imageBrand)
    
    
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'shortcut icon';
    link.href = _tasks_png__WEBPACK_IMPORTED_MODULE_0__;
    document.getElementsByTagName('head')[0].appendChild(link);
})()

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

    (0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(sortedArray)
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
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");






const deleteTask = (index) => {
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    todos.splice(index, 1)
    todos.forEach(todo => todo.order = todos.indexOf(todo))
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos, 'todos')
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
    ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_2__.handleEffects)()
}


function defineTaskId (todos) {
    todos.forEach( todo => { 
        todo.order = todos.indexOf(todo)
    });
}

function modifyTask (index, taskValue) {
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    const correctIndex = todos.findIndex(item => item.order == index)
    todos[correctIndex].task = `${taskValue}`
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos, 'todos')
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}


function modifyStatus (index, statusValue) {
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    const correctIndex = todos.findIndex(item => item.order == index)
    todos[correctIndex].status = `${statusValue}`
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos, 'todos')
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}

function modifyPriority (index, priorityValue) {
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    const correctIndex = todos.findIndex(item => item.order == index)
    todos[correctIndex].priority = `${priorityValue}`
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos, 'todos')
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}

function modifyList (index, listValue) {
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('todos')
    const correctIndex = todos.findIndex(item => item.order == index)
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
    console.log(todos)
    const todo = todoCreator(task, status, list, priority, dueDate)
    todos.push(todo)
    todo.order = todos.length - 1
    console.log(todos)
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos, 'todos')
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

/***/ "./src/tasks.png":
/*!***********************!*\
  !*** ./src/tasks.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "187d41f3175e16ecd678.png";

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
/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks */ "./src/displayTasks.js");
/* harmony import */ var _controlListChange__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controlListChange */ "./src/controlListChange.js");
/* harmony import */ var _createList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createList */ "./src/createList.js");
/* harmony import */ var _displayLists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayLists */ "./src/displayLists.js");
/* harmony import */ var _handleNewTaskForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./handleNewTaskForm */ "./src/handleNewTaskForm.js");
/* harmony import */ var _todoCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todoCreator */ "./src/todoCreator.js");
/* harmony import */ var _handleFilterOrder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./handleFilterOrder */ "./src/handleFilterOrder.js");
/* harmony import */ var _handleSaveLogic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./handleSaveLogic */ "./src/handleSaveLogic.js");
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");
/* harmony import */ var _handleNewListLogic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./handleNewListLogic */ "./src/handleNewListLogic.js");
/* harmony import */ var _handleNewTaskLogic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./handleNewTaskLogic */ "./src/handleNewTaskLogic.js");
/* harmony import */ var _handleTasksAndListsEdits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./handleTasksAndListsEdits */ "./src/handleTasksAndListsEdits.js");














let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_8__.getFromLocalStorage)('todos') || []
let lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_8__.getFromLocalStorage)('lists') || []


;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(todos)

if(lists.length == 0){
    (0,_createList__WEBPACK_IMPORTED_MODULE_3__.createNewList)('general', '#205295')
}

if(todos.length == 0){
    (0,_todoCreator__WEBPACK_IMPORTED_MODULE_6__.createNewTask)('walk with my dog', 'to-do', 'general', 'high', '2023-04-03')
    ;(0,_todoCreator__WEBPACK_IMPORTED_MODULE_6__.createNewTask)('study math', 'doing', 'general', 'medium', '2023-12-12')
    ;(0,_todoCreator__WEBPACK_IMPORTED_MODULE_6__.createNewTask)('travel to Mars', 'to-do', 'general', 'high', '2043-05-31')
}

(0,_handleNewTaskLogic__WEBPACK_IMPORTED_MODULE_11__["default"])()

;(0,_handleTasksAndListsEdits__WEBPACK_IMPORTED_MODULE_12__["default"])()

;(0,_handleNewTaskForm__WEBPACK_IMPORTED_MODULE_5__["default"])()

;(0,_handleNewListLogic__WEBPACK_IMPORTED_MODULE_10__.handleNewListLogic)()

;(0,_displayLists__WEBPACK_IMPORTED_MODULE_4__["default"])(lists)
;(0,_controlListChange__WEBPACK_IMPORTED_MODULE_2__.updateListOptions)(lists)

;(0,_handleFilterOrder__WEBPACK_IMPORTED_MODULE_7__["default"])(lists, todos)

;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_9__.handleEffects)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUZBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlGQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpRkFBb0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMEVBQWE7QUFDN0Isc0NBQXNDLGdCQUFnQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMEVBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpRkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw0RUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUZBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFlBQVksMEVBQWE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkVBQWM7QUFDdkIsWUFBWSxzRUFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0ZBQW1CLElBQUksMEVBQWE7QUFDaEQsZ0JBQWdCLHVFQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDRFQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw0RUFBZSxJQUFJLDJFQUFjO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0RUFBZTtBQUNoQztBQUNBO0FBQ0E7QUFDQSxZQUFZLHNFQUFTO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsMkVBQWMsSUFBSSxpRkFBb0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSwyRUFBYztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFVBQVU7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFVBQVU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFFBQVE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQkFBaUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBVztBQUNuQjtBQUNBLHVDQUF1QywwQkFBMEI7O0FBRWpFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMEVBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDRFQUFlO0FBQ3ZELFFBQVEseUVBQVksSUFBSSw0RUFBZTtBQUN2QztBQUNBO0FBQ0EsUUFBUSxpRkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlGQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwRUFBYSxJQUFJLG9GQUF1QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsMkRBQTJELFVBQVUsMEJBQTBCO0FBQ3ZLO0FBQ0E7QUFDQSxjQUFjLHlCQUF5QixVQUFVLHVCQUF1QjtBQUN4RSxjQUFjLDJCQUEyQjtBQUN6QztBQUNBLFFBQVEsK0VBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0RUFBZSxJQUFJLDRFQUFlO0FBQzFDO0FBQ0E7QUFDQSxRQUFRLCtFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw0RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyRUFBYztBQUNuQztBQUNBO0FBQ0EsWUFBWSwyRUFBYyxJQUFJLCtFQUFrQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOEVBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdGQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0ZBQW1CO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQVc7QUFDbkI7QUFDQTtBQUNBLFFBQVEsb0ZBQXVCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUFnQjtBQUN4QjtBQUNBO0FBQ0EsUUFBUSx3RUFBVztBQUNuQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9GQUF1QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrRUFBa0I7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0VBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhFQUFpQjtBQUN6QyxxQkFBcUIsMkVBQWM7QUFDbkMsc0JBQXNCLDRFQUFlO0FBQ3JDLHNCQUFzQiw0RUFBZTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhFQUFpQixJQUFJLDBFQUFhO0FBQzlDLGdCQUFnQiw2RUFBZ0IsSUFBSSwwRUFBYTtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0ZBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDJFQUFjO0FBQ25DO0FBQ0EsUUFBUSwrRUFBa0I7QUFDMUIsWUFBWSx3RUFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdFQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0VBQWtCLElBQUksaUZBQW9CO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkVBQWdCO0FBQzVCLGdCQUFnQix3RUFBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0VBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0VBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrRUFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0VBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdFQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUZBQTBCO0FBQ2xDO0FBQ0E7QUFDQSxRQUFRLHlFQUFZLElBQUksMkVBQWM7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0RUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRkFBb0I7QUFDNUI7QUFDQTtBQUNBLFFBQVEsNkVBQWdCO0FBQ3hCO0FBQ0E7QUFDQSwrQ0FBK0MsVUFBVSxXQUFXLHNFQUFTLElBQUk7QUFDakYsUUFBUSwwRUFBYTtBQUNyQix5Q0FBeUMsc0VBQVMsRUFBRSxtQkFBbUIsSUFBSTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRkFBd0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsc0VBQVM7QUFDcEMsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsaUNBQWlDLGdGQUFtQjtBQUNwRDtBQUNBLE1BQU0sb0ZBQXVCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMkVBQWM7QUFDOUI7QUFDQTtBQUNBLHFCQUFxQiwyRUFBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsMkVBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3RUFBVztBQUN2QjtBQUNBLGtEQUFrRCxTQUFTO0FBQzNEO0FBQ0E7QUFDQSxrREFBa0QsU0FBUztBQUMzRDtBQUNBO0FBQ0EsYUFBYSwyRUFBYztBQUMzQjtBQUNBLGdCQUFnQixnRkFBbUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsZ0JBQWdCLDRFQUFlO0FBQy9CO0FBQ0Esb0JBQW9CLGtGQUFxQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlFQUFZO0FBQ3BCLFlBQVksZ0ZBQW1CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1RUFBVSxJQUFJLHdFQUFXO0FBQzFDO0FBQ0EsdUJBQXVCLDJFQUFjO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLDRCQUE0Qix3RUFBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxXQUFXLFFBQVEsa0JBQWtCO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxxQkFBcUIsMkVBQWM7QUFDbkMsZ0JBQWdCLHlFQUFZO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVCxZQUFZLG1GQUFzQixNQUFNLDJFQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwRUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywyRUFBYyxJQUFJLG9GQUF1QixJQUFJLHdFQUFXO0FBQ2pFO0FBQ0EsWUFBWSwyRUFBYyxJQUFJLG9GQUF1QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGtCQUFrQixHQUFHLG1CQUFtQixpQ0FBaUMsa0JBQWtCO0FBQ2pKO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix3RUFBVyxJQUFJLDBFQUFhO0FBQzdDLG9EQUFvRCxrQkFBa0IsR0FBRyxtQkFBbUI7QUFDNUY7QUFDQSxnQkFBZ0IseUVBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdGQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IseUVBQVk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFZO0FBQzVCO0FBQ0E7QUFDQSxnQkFBZ0IsZ0ZBQW1CO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdFQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxnQkFBZ0IsdUVBQVU7QUFDMUI7QUFDQSxvQkFBb0Isb0ZBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvRkFBdUI7QUFDNUMsb0JBQW9CLDRFQUFlO0FBQ25DLG9CQUFvQixnRkFBbUI7QUFDdkM7QUFDQSxrQ0FBa0MsaVBBQXlCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0VBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyRUFBYyxJQUFJLG9GQUF1QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyRkFBOEI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isb0ZBQXVCO0FBQ3ZDO0FBQ0E7QUFDQSx3QkFBd0IsNEVBQWU7QUFDdkMsd0NBQXdDLHVFQUFVO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlGQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvRkFBdUI7QUFDM0Msc0JBQXNCLHVFQUFVLElBQUksNEVBQWU7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0VBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvRkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsdUVBQVUsS0FBSyxvRkFBdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsZ0JBQWdCLHFGQUF3QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCwwRUFBYSx3QkFBd0IsY0FBYztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkVBQWM7QUFDdkMsWUFBWSwrRUFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2RUFBZ0I7QUFDNUI7QUFDQTtBQUNBLFlBQVksMkVBQWMsSUFBSSx1RkFBMEI7QUFDeEQ7QUFDQTtBQUNBLFlBQVksK0VBQWtCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUVBQVk7QUFDcEI7QUFDQTtBQUNBLFFBQVEsK0VBQWtCO0FBQzFCO0FBQ0E7QUFDQSxRQUFRLGdGQUFtQjtBQUMzQjtBQUNBO0FBQ0EsUUFBUSwwRUFBYTtBQUNyQjtBQUNBO0FBQ0EsUUFBUSw0RUFBZTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsZ0JBQWdCLG9GQUF1QjtBQUN2QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxnQkFBZ0IsdUZBQTBCO0FBQzFDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9CQUFvQix1RkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSx3Q0FBd0MsY0FBYztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQVcsSUFBSSx1RUFBVSxLQUFLLDJFQUFjO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw0RUFBZTtBQUMzQztBQUNBLFlBQVksdUVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwrQkFBK0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFGQUF3QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlFQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsdUJBQXVCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQSxRQUFRLDBFQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsa0JBQWtCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0ZBQXVCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRkFBdUIsSUFBSSw0RUFBZTtBQUNsRCxlQUFlLG1CQUFtQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFZO0FBQzVCO0FBQ0E7QUFDQSxnQkFBZ0IsK0VBQWtCO0FBQ2xDO0FBQ0E7QUFDQSxnQkFBZ0IsMEVBQWE7QUFDN0I7QUFDQTtBQUNBLGdCQUFnQixnRkFBbUI7QUFDbkM7QUFDQTtBQUNBLGdCQUFnQiw0RUFBZTtBQUMvQjtBQUNBO0FBQ0EsNEJBQTRCLG1GQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsNEVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1RkFBMEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxvREFBb0QsY0FBYztBQUNsRTtBQUNBO0FBQ0Esa0NBQWtDLG9GQUF1QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0ZBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsK0VBQWtCO0FBQ2xDO0FBQ0E7QUFDQSxnQkFBZ0IscUZBQXdCO0FBQ3hDO0FBQ0E7QUFDQSxnQkFBZ0IsdUZBQTBCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDJGQUE4QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsUUFBUSx3RkFBMkIsS0FBSyxnRkFBbUIsSUFBSSxvRkFBdUI7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwRUFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0ZBQXVCO0FBQ3RDO0FBQ0E7QUFDQSxlQUFlLG9GQUF1QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtFQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkZBQThCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixxRkFBd0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJFQUFjO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZGQUFnQztBQUN4QztBQUNBLFFBQVEsMkZBQThCO0FBQ3RDO0FBQ0EsUUFBUSx5RkFBNEI7QUFDcEM7QUFDQSxRQUFRLDJGQUE4QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTyxHQUFHLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTyxHQUFHLE9BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsYUFBYSxHQUFHLFFBQVE7QUFDckY7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQixHQUFHLFFBQVE7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxlQUFlLEdBQUcsT0FBTztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UscUJBQXFCLEdBQUcscUJBQXFCLEtBQUssTUFBTTtBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU8sR0FBRyxPQUFPLEdBQUcsTUFBTSxHQUFHLE1BQU07QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGFBQWEsR0FBRyxRQUFRO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGFBQWEsR0FBRyxRQUFRLEdBQUcsU0FBUztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUFXO0FBQ25CO0FBQ0E7QUFDQSxRQUFRLHlFQUFZLElBQUksMkVBQWM7QUFDdEM7QUFDQTtBQUNBLFFBQVEsK0VBQWtCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw0RUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CLG1CQUFtQixnQkFBZ0IsaUJBQWlCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBVztBQUNuQiw0REFBNEQsa0JBQWtCLHFCQUFxQixtQkFBbUI7QUFDdEg7QUFDQTtBQUNBLG9CQUFvQix1RkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNLQUtQLEdBQUcsRUFBRSxTQUFTLFdBQVcsdUZBQTBCLGlEQUFpRCxDQUFDLENBQUM7QUFDMUcsYUFBYSx1RkFBMEI7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSw2RUFBZ0I7QUFDNUIsOEJBQThCO0FBQzlCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnRkFBbUIsSUFBSSw0RUFBZTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDQUF5QyxtRkFBc0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUFnQjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQWdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN3RTtBQUNzd0I7Ozs7Ozs7Ozs7O0FDMXlHOTBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1plO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVGU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNid0M7QUFDekI7QUFDZixTQUFTLDREQUFNLEdBQUc7QUFDbEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNId0Q7QUFDeEQsaUVBQWUsOERBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNENUI7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUU7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNOO0FBQ0g7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSx5QkFBeUIsd0VBQWMsaUJBQWlCOztBQUV4RCw2RUFBNkU7O0FBRTdFO0FBQ0E7QUFDQSxhQUFhLHFFQUFlO0FBQzVCLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNOzs7QUFHTixXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLDJFQUFpQixRQUFROztBQUUvQyxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUVBQWlCO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxvRUFBVTs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxrQkFBa0IsdUVBQWE7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLHlFQUFlOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FB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Q007QUFDVztBQUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0ZBQXNGO0FBQ3RGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRLGlFQUFpRTtBQUNwRixXQUFXLGVBQWU7QUFDMUIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsU0FBUztBQUNwQjtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBLGFBQWEsUUFBUTtBQUNyQixZQUFZLFdBQVc7QUFDdkIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVk7QUFDeEIsWUFBWSxZQUFZO0FBQ3hCLFlBQVksWUFBWTtBQUN4QixZQUFZLFlBQVkseUdBQXlHO0FBQ2pJLFlBQVksWUFBWSxxR0FBcUc7QUFDN0gsWUFBWSxZQUFZLCtHQUErRztBQUN2SSxZQUFZLFlBQVksaUhBQWlIO0FBQ3pJLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQSxFQUFFLHNFQUFZO0FBQ2Q7QUFDQSx1QkFBdUIsK0VBQWlCO0FBQ3hDLG1PQUFtTyxtRUFBYTtBQUNoUCw4QkFBOEIsbUVBQVMscTVCQUFxNUI7O0FBRTU3QjtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLG1FQUFTLG8zQkFBbzNCOztBQUVsNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLDREQUFNOztBQUUzQixPQUFPLDZEQUFPO0FBQ2Q7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7O0FBR0EsdUJBQXVCLHlGQUErQjtBQUN0RCxnQkFBZ0IscUVBQWU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwyRUFBYztBQUN4QztBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsdUVBQVU7O0FBRTlCO0FBQ0EsOEZBQThGLHdGQUF3QjtBQUN0SCxRQUFRLG1GQUFtQjtBQUMzQjs7QUFFQSwrRkFBK0YseUZBQXlCO0FBQ3hILFFBQVEsbUZBQW1CO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2phQSx3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFM1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLGFBQWEsU0FBUztBQUN0QixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkN3QztBQUNBO0FBQ2lCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsYUFBYSxTQUFTO0FBQ3RCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7O0FBRWQsT0FBTyw0REFBTTtBQUNiO0FBQ0E7O0FBRUEsYUFBYSw0REFBTTtBQUNuQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM1Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLHdGQUF3Rjs7QUFFeEY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0NlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQyxHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG9CQUFvQixRQUFRO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixHQUFHO0FBQ0g7QUFDQTtBQUNBLG1CQUFtQixRQUFRO0FBQzNCLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUJBQXFCLFFBQVE7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSix5Q0FBeUMsT0FBTztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGNEM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU8sT0FBTyxNQUFNO0FBQy9CLFdBQVcsT0FBTyxPQUFPLE1BQU07QUFDL0IsYUFBYSxNQUFNLElBQUksTUFBTTtBQUM3QixZQUFZLE1BQU0sSUFBSSxNQUFNO0FBQzVCO0FBQ0E7QUFDQSxRQUFRLDJFQUFpQjtBQUN6QjtBQUNBO0FBQ0EsR0FBRztBQUNILFFBQVEsMkVBQWlCO0FBQ3pCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsWUFBWSwyRUFBaUI7QUFDN0I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7OztBQ2pDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztBQ2J3QztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyx5RUFBZTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFNBQVMseUVBQWU7QUFDeEI7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLHlFQUFlO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsYUFBYSx5RUFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakp3QztBQUNjO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2RUFBbUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLHNFQUFZO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILFdBQVcsc0VBQVk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsU0FBUyxzRUFBWTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxPQUFPLHNFQUFZO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGFBQWEsc0VBQVk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpRUFBZSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHd0M7QUFDUjtBQUNRO0FBQ1o7QUFDTjs7QUFFMUM7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixvRUFBYztBQUNoQyxjQUFjLGdFQUFVO0FBQ3hCLGtCQUFrQixvRUFBYztBQUNoQyxZQUFZLDhEQUFRO0FBQ3BCLFNBQVMsMkRBQUs7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCcUM7QUFDRDtBQUNOO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGVBQWUsbUVBQVM7QUFDeEIsU0FBUyxxRUFBZTtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQSx3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFM1M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsYUFBYSxNQUFNO0FBQ25CLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLHlEQUF5RDs7QUFFekQ7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSwwT0FBME87O0FBRTFPO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyREE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXNHOztBQUV0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELHVDQUF1QyxHQUFHLHdDQUF3QztBQUMxSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQixHQUFHLDZDQUE2QyxHQUFHLHdDQUF3QztBQUMxSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsbUNBQW1DO0FBQzFGO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsSUFBSTtBQUMvRDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkRBQTJELGtCQUFrQixnQkFBZ0IsVUFBVSxXQUFXLG1CQUFtQixtQkFBbUIsNkJBQTZCLHFCQUFxQjs7QUFFMU07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxpRkFBa0IsZUFBZSxzRUFBVztBQUMvRTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMEVBQVc7QUFDakMsdUJBQXVCLDBFQUFXO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O1dBQ0wsZUFBZTtXQUNmO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTTtXQUNOO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckZvQjtBQUNxQjtBQUNjO0FBQ1g7QUFDSDtBQUNVO0FBQ047QUFDTTtBQUNJO0FBQ1I7QUFDVTtBQUNKO0FBQ1k7QUFDakU7QUFDQSxZQUFZLHFFQUFtQjtBQUMvQixZQUFZLHFFQUFtQjtBQUMvQjtBQUNBO0FBQ0EsMERBQVk7QUFDWjtBQUNBO0FBQ0EsSUFBSSwwREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFhO0FBQ2pCLElBQUksNERBQWE7QUFDakIsSUFBSSw0REFBYTtBQUNqQjtBQUNBO0FBQ0EsZ0VBQWtCO0FBQ2xCO0FBQ0EsdUVBQXdCO0FBQ3hCO0FBQ0EsK0RBQWlCO0FBQ2pCO0FBQ0EseUVBQWtCO0FBQ2xCO0FBQ0EsMERBQVk7QUFDWixzRUFBaUI7QUFDakI7QUFDQSwrREFBaUI7QUFDakI7QUFDQSw4REFBYSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC8gbGF6eSBeXFwuXFwvLipcXC5lbnRyeVxcLmpzLiokIGluY2x1ZGU6IFxcLmVudHJ5XFwuanMkIGV4Y2x1ZGU6IFxcLnN5c3RlbVxcLmVudHJ5XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYXNzaWduL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdERpc3RhbmNlU3RyaWN0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2xvY2FsaXplL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdWJNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3djLWRhdGVwaWNrZXIvZGlzdC90aGVtZXMvZGFyay5jc3M/ZGE1NSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzM1OTciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3djLWRhdGVwaWNrZXIvZGlzdC9jb21wb25lbnRzL3djLWRhdGVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xEdWVEYXRlQ2hhbmdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sTGlzdENoYW5nZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbFByaW9yaXR5Q2hhbmdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sU3RhdHVzQ2hhbmdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sVGFza0NoYW5nZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlTGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheUxpc3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZpbHRlckJ5RGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmlsdGVyQnlMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9maWx0ZXJCeVByaW9yaXR5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9maWx0ZXJCeVN0YXR1cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlRWZmZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlRmlsdGVyT3JkZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZU5ld0xpc3RGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVOZXdMaXN0TG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZU5ld1Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVOZXdUYXNrTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZVNhdmVMb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlVGFza3NBbmRMaXN0c0VkaXRzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbnRlcmFjdERvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc29ydEJ5VGl0bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9DcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZW5zdXJlIGNodW5rIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nZXQgbWluaS1jc3MgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFZpcnR1YWwgRE9NIHBhdGNoaW5nIGFsZ29yaXRobSBiYXNlZCBvbiBTbmFiYmRvbSBieVxuICogU2ltb24gRnJpaXMgVmluZHVtIChAcGFsZGVwaW5kKVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc25hYmJkb20vc25hYmJkb20vYmxvYi9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIE1vZGlmaWVkIGZvciBTdGVuY2lsJ3MgcmVuZGVyZXIgYW5kIHNsb3QgcHJvamVjdGlvblxuICovXG5sZXQgc2NvcGVJZDtcbmxldCBjb250ZW50UmVmO1xubGV0IGhvc3RUYWdOYW1lO1xubGV0IGN1c3RvbUVycm9yO1xubGV0IGkgPSAwO1xubGV0IHVzZU5hdGl2ZVNoYWRvd0RvbSA9IGZhbHNlO1xubGV0IGNoZWNrU2xvdEZhbGxiYWNrVmlzaWJpbGl0eSA9IGZhbHNlO1xubGV0IGNoZWNrU2xvdFJlbG9jYXRlID0gZmFsc2U7XG5sZXQgaXNTdmdNb2RlID0gZmFsc2U7XG5sZXQgcmVuZGVyaW5nUmVmID0gbnVsbDtcbmxldCBxdWV1ZUNvbmdlc3Rpb24gPSAwO1xubGV0IHF1ZXVlUGVuZGluZyA9IGZhbHNlO1xuLypcbiBTdGVuY2lsIENsaWVudCBQbGF0Zm9ybSB2Mi4yMi4zIHwgTUlUIExpY2Vuc2VkIHwgaHR0cHM6Ly9zdGVuY2lsanMuY29tXG4gKi9cbmltcG9ydCB7IEJVSUxELCBOQU1FU1BBQ0UgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhJztcbmNvbnN0IEJ1aWxkID0ge1xuICAgIGlzRGV2OiBCVUlMRC5pc0RldiA/IHRydWUgOiBmYWxzZSxcbiAgICBpc0Jyb3dzZXI6IHRydWUsXG4gICAgaXNTZXJ2ZXI6IGZhbHNlLFxuICAgIGlzVGVzdGluZzogQlVJTEQuaXNUZXN0aW5nID8gdHJ1ZSA6IGZhbHNlLFxufTtcbmNvbnN0IENvbnRleHQgPSB7fTtcbmNvbnN0IGdldEFzc2V0UGF0aCA9IChwYXRoKSA9PiB7XG4gICAgY29uc3QgYXNzZXRVcmwgPSBuZXcgVVJMKHBhdGgsIHBsdC4kcmVzb3VyY2VzVXJsJCk7XG4gICAgcmV0dXJuIGFzc2V0VXJsLm9yaWdpbiAhPT0gd2luLmxvY2F0aW9uLm9yaWdpbiA/IGFzc2V0VXJsLmhyZWYgOiBhc3NldFVybC5wYXRobmFtZTtcbn07XG5jb25zdCBzZXRBc3NldFBhdGggPSAocGF0aCkgPT4gKHBsdC4kcmVzb3VyY2VzVXJsJCA9IHBhdGgpO1xuY29uc3QgY3JlYXRlVGltZSA9IChmbk5hbWUsIHRhZ05hbWUgPSAnJykgPT4ge1xuICAgIGlmIChCVUlMRC5wcm9maWxlICYmIHBlcmZvcm1hbmNlLm1hcmspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYHN0OiR7Zm5OYW1lfToke3RhZ05hbWV9OiR7aSsrfWA7XG4gICAgICAgIC8vIFN0YXJ0XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoa2V5KTtcbiAgICAgICAgLy8gRW5kXG4gICAgICAgIHJldHVybiAoKSA9PiBwZXJmb3JtYW5jZS5tZWFzdXJlKGBbU3RlbmNpbF0gJHtmbk5hbWV9KCkgPCR7dGFnTmFtZX0+YCwga2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IHVuaXF1ZVRpbWUgPSAoa2V5LCBtZWFzdXJlVGV4dCkgPT4ge1xuICAgIGlmIChCVUlMRC5wcm9maWxlICYmIHBlcmZvcm1hbmNlLm1hcmspIHtcbiAgICAgICAgaWYgKHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUoa2V5LCAnbWFyaycpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyayhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZShtZWFzdXJlVGV4dCwgJ21lYXN1cmUnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tZWFzdXJlKG1lYXN1cmVUZXh0LCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuY29uc3QgaW5zcGVjdCA9IChyZWYpID0+IHtcbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihyZWYpO1xuICAgIGlmICghaG9zdFJlZikge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBmbGFncyA9IGhvc3RSZWYuJGZsYWdzJDtcbiAgICBjb25zdCBob3N0RWxlbWVudCA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICByZXR1cm4ge1xuICAgICAgICByZW5kZXJDb3VudDogaG9zdFJlZi4kcmVuZGVyQ291bnQkLFxuICAgICAgICBmbGFnczoge1xuICAgICAgICAgICAgaGFzUmVuZGVyZWQ6ICEhKGZsYWdzICYgMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovKSxcbiAgICAgICAgICAgIGhhc0Nvbm5lY3RlZDogISEoZmxhZ3MgJiAxIC8qIEhPU1RfRkxBR1MuaGFzQ29ubmVjdGVkICovKSxcbiAgICAgICAgICAgIGlzV2FpdGluZ0ZvckNoaWxkcmVuOiAhIShmbGFncyAmIDQgLyogSE9TVF9GTEFHUy5pc1dhaXRpbmdGb3JDaGlsZHJlbiAqLyksXG4gICAgICAgICAgICBpc0NvbnN0cnVjdGluZ0luc3RhbmNlOiAhIShmbGFncyAmIDggLyogSE9TVF9GTEFHUy5pc0NvbnN0cnVjdGluZ0luc3RhbmNlICovKSxcbiAgICAgICAgICAgIGlzUXVldWVkRm9yVXBkYXRlOiAhIShmbGFncyAmIDE2IC8qIEhPU1RfRkxBR1MuaXNRdWV1ZWRGb3JVcGRhdGUgKi8pLFxuICAgICAgICAgICAgaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQ6ICEhKGZsYWdzICYgMzIgLyogSE9TVF9GTEFHUy5oYXNJbml0aWFsaXplZENvbXBvbmVudCAqLyksXG4gICAgICAgICAgICBoYXNMb2FkZWRDb21wb25lbnQ6ICEhKGZsYWdzICYgNjQgLyogSE9TVF9GTEFHUy5oYXNMb2FkZWRDb21wb25lbnQgKi8pLFxuICAgICAgICAgICAgaXNXYXRjaFJlYWR5OiAhIShmbGFncyAmIDEyOCAvKiBIT1NUX0ZMQUdTLmlzV2F0Y2hSZWFkeSAqLyksXG4gICAgICAgICAgICBpc0xpc3RlblJlYWR5OiAhIShmbGFncyAmIDI1NiAvKiBIT1NUX0ZMQUdTLmlzTGlzdGVuUmVhZHkgKi8pLFxuICAgICAgICAgICAgbmVlZHNSZXJlbmRlcjogISEoZmxhZ3MgJiA1MTIgLyogSE9TVF9GTEFHUy5uZWVkc1JlcmVuZGVyICovKSxcbiAgICAgICAgfSxcbiAgICAgICAgaW5zdGFuY2VWYWx1ZXM6IGhvc3RSZWYuJGluc3RhbmNlVmFsdWVzJCxcbiAgICAgICAgYW5jZXN0b3JDb21wb25lbnQ6IGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JCxcbiAgICAgICAgaG9zdEVsZW1lbnQsXG4gICAgICAgIGxhenlJbnN0YW5jZTogaG9zdFJlZi4kbGF6eUluc3RhbmNlJCxcbiAgICAgICAgdm5vZGU6IGhvc3RSZWYuJHZub2RlJCxcbiAgICAgICAgbW9kZU5hbWU6IGhvc3RSZWYuJG1vZGVOYW1lJCxcbiAgICAgICAgb25SZWFkeVByb21pc2U6IGhvc3RSZWYuJG9uUmVhZHlQcm9taXNlJCxcbiAgICAgICAgb25SZWFkeVJlc29sdmU6IGhvc3RSZWYuJG9uUmVhZHlSZXNvbHZlJCxcbiAgICAgICAgb25JbnN0YW5jZVByb21pc2U6IGhvc3RSZWYuJG9uSW5zdGFuY2VQcm9taXNlJCxcbiAgICAgICAgb25JbnN0YW5jZVJlc29sdmU6IGhvc3RSZWYuJG9uSW5zdGFuY2VSZXNvbHZlJCxcbiAgICAgICAgb25SZW5kZXJSZXNvbHZlOiBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkLFxuICAgICAgICBxdWV1ZWRMaXN0ZW5lcnM6IGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQsXG4gICAgICAgIHJtTGlzdGVuZXJzOiBob3N0UmVmLiRybUxpc3RlbmVycyQsXG4gICAgICAgIFsncy1pZCddOiBob3N0RWxlbWVudFsncy1pZCddLFxuICAgICAgICBbJ3MtY3InXTogaG9zdEVsZW1lbnRbJ3MtY3InXSxcbiAgICAgICAgWydzLWxyJ106IGhvc3RFbGVtZW50WydzLWxyJ10sXG4gICAgICAgIFsncy1wJ106IGhvc3RFbGVtZW50WydzLXAnXSxcbiAgICAgICAgWydzLXJjJ106IGhvc3RFbGVtZW50WydzLXJjJ10sXG4gICAgICAgIFsncy1zYyddOiBob3N0RWxlbWVudFsncy1zYyddLFxuICAgIH07XG59O1xuY29uc3QgaW5zdGFsbERldlRvb2xzID0gKCkgPT4ge1xuICAgIGlmIChCVUlMRC5kZXZUb29scykge1xuICAgICAgICBjb25zdCBzdGVuY2lsID0gKHdpbi5zdGVuY2lsID0gd2luLnN0ZW5jaWwgfHwge30pO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEluc3BlY3QgPSBzdGVuY2lsLmluc3BlY3Q7XG4gICAgICAgIHN0ZW5jaWwuaW5zcGVjdCA9IChyZWYpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBpbnNwZWN0KHJlZik7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdCAmJiB0eXBlb2Ygb3JpZ2luYWxJbnNwZWN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gb3JpZ2luYWxJbnNwZWN0KHJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgIH1cbn07XG5jb25zdCBDT05URU5UX1JFRl9JRCA9ICdyJztcbmNvbnN0IE9SR19MT0NBVElPTl9JRCA9ICdvJztcbmNvbnN0IFNMT1RfTk9ERV9JRCA9ICdzJztcbmNvbnN0IFRFWFRfTk9ERV9JRCA9ICd0JztcbmNvbnN0IEhZRFJBVEVfSUQgPSAncy1pZCc7XG5jb25zdCBIWURSQVRFRF9TVFlMRV9JRCA9ICdzdHktaWQnO1xuY29uc3QgSFlEUkFURV9DSElMRF9JRCA9ICdjLWlkJztcbmNvbnN0IEhZRFJBVEVEX0NTUyA9ICd7dmlzaWJpbGl0eTpoaWRkZW59Lmh5ZHJhdGVke3Zpc2liaWxpdHk6aW5oZXJpdH0nO1xuY29uc3QgWExJTktfTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG4vKipcbiAqIERlZmF1bHQgc3R5bGUgbW9kZSBpZFxuICovXG4vKipcbiAqIFJldXNhYmxlIGVtcHR5IG9iai9hcnJheVxuICogRG9uJ3QgYWRkIHZhbHVlcyB0byB0aGVzZSEhXG4gKi9cbmNvbnN0IEVNUFRZX09CSiA9IHt9O1xuLyoqXG4gKiBOYW1lc3BhY2VzXG4gKi9cbmNvbnN0IFNWR19OUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5jb25zdCBIVE1MX05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnO1xuY29uc3QgaXNEZWYgPSAodikgPT4gdiAhPSBudWxsO1xuY29uc3QgaXNDb21wbGV4VHlwZSA9IChvKSA9PiB7XG4gICAgLy8gaHR0cHM6Ly9qc3BlcmYuY29tL3R5cGVvZi1mbi1vYmplY3QvNVxuICAgIG8gPSB0eXBlb2YgbztcbiAgICByZXR1cm4gbyA9PT0gJ29iamVjdCcgfHwgbyA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vKipcbiAqIEhlbHBlciBtZXRob2QgZm9yIHF1ZXJ5aW5nIGEgYG1ldGFgIHRhZyB0aGF0IGNvbnRhaW5zIGEgbm9uY2UgdmFsdWVcbiAqIG91dCBvZiBhIERPTSdzIGhlYWQuXG4gKlxuICogQHBhcmFtIGRvYyBUaGUgRE9NIGNvbnRhaW5pbmcgdGhlIGBoZWFkYCB0byBxdWVyeSBhZ2FpbnN0XG4gKiBAcmV0dXJucyBUaGUgY29udGVudCBvZiB0aGUgbWV0YSB0YWcgcmVwcmVzZW50aW5nIHRoZSBub25jZSB2YWx1ZSwgb3IgYHVuZGVmaW5lZGAgaWYgbm8gdGFnXG4gKiBleGlzdHMgb3IgdGhlIHRhZyBoYXMgbm8gY29udGVudC5cbiAqL1xuZnVuY3Rpb24gcXVlcnlOb25jZU1ldGFUYWdDb250ZW50KGRvYykge1xuICAgIHZhciBfYSwgX2IsIF9jO1xuICAgIHJldHVybiAoX2MgPSAoX2IgPSAoX2EgPSBkb2MuaGVhZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcC1ub25jZVwiXScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0QXR0cmlidXRlKCdjb250ZW50JykpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IHVuZGVmaW5lZDtcbn1cbi8qKlxuICogUHJvZHVjdGlvbiBoKCkgZnVuY3Rpb24gYmFzZWQgb24gUHJlYWN0IGJ5XG4gKiBKYXNvbiBNaWxsZXIgKEBkZXZlbG9waXQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIGNvbXBpbGVyIGFuZCB2ZG9tXG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBoKG5vZGVOYW1lOiBzdHJpbmcgfCBkLkZ1bmN0aW9uYWxDb21wb25lbnQsIHZub2RlRGF0YTogZC5Qcm9wc1R5cGUsIGNoaWxkPzogZC5DaGlsZFR5cGUpOiBkLlZOb2RlO1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGgobm9kZU5hbWU6IHN0cmluZyB8IGQuRnVuY3Rpb25hbENvbXBvbmVudCwgdm5vZGVEYXRhOiBkLlByb3BzVHlwZSwgLi4uY2hpbGRyZW46IGQuQ2hpbGRUeXBlW10pOiBkLlZOb2RlO1xuY29uc3QgaCA9IChub2RlTmFtZSwgdm5vZGVEYXRhLCAuLi5jaGlsZHJlbikgPT4ge1xuICAgIGxldCBjaGlsZCA9IG51bGw7XG4gICAgbGV0IGtleSA9IG51bGw7XG4gICAgbGV0IHNsb3ROYW1lID0gbnVsbDtcbiAgICBsZXQgc2ltcGxlID0gZmFsc2U7XG4gICAgbGV0IGxhc3RTaW1wbGUgPSBmYWxzZTtcbiAgICBjb25zdCB2Tm9kZUNoaWxkcmVuID0gW107XG4gICAgY29uc3Qgd2FsayA9IChjKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2hpbGQgPSBjW2ldO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgd2FsayhjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZCAhPSBudWxsICYmIHR5cGVvZiBjaGlsZCAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgaWYgKChzaW1wbGUgPSB0eXBlb2Ygbm9kZU5hbWUgIT09ICdmdW5jdGlvbicgJiYgIWlzQ29tcGxleFR5cGUoY2hpbGQpKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IFN0cmluZyhjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKEJVSUxELmlzRGV2ICYmIHR5cGVvZiBub2RlTmFtZSAhPT0gJ2Z1bmN0aW9uJyAmJiBjaGlsZC4kZmxhZ3MkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZURldkVycm9yKGB2Tm9kZSBwYXNzZWQgYXMgY2hpbGRyZW4gaGFzIHVuZXhwZWN0ZWQgdHlwZS5cbk1ha2Ugc3VyZSBpdCdzIHVzaW5nIHRoZSBjb3JyZWN0IGgoKSBmdW5jdGlvbi5cbkVtcHR5IG9iamVjdHMgY2FuIGFsc28gYmUgdGhlIGNhdXNlLCBsb29rIGZvciBKU1ggY29tbWVudHMgdGhhdCBiZWNhbWUgb2JqZWN0cy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHNpbXBsZSAmJiBsYXN0U2ltcGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBwcmV2aW91cyBjaGlsZCB3YXMgc2ltcGxlIChzdHJpbmcpLCB3ZSBtZXJnZSBib3RoXG4gICAgICAgICAgICAgICAgICAgIHZOb2RlQ2hpbGRyZW5bdk5vZGVDaGlsZHJlbi5sZW5ndGggLSAxXS4kdGV4dCQgKz0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBBcHBlbmQgYSBuZXcgdk5vZGUsIGlmIGl0J3MgdGV4dCwgd2UgY3JlYXRlIGEgdGV4dCB2Tm9kZVxuICAgICAgICAgICAgICAgICAgICB2Tm9kZUNoaWxkcmVuLnB1c2goc2ltcGxlID8gbmV3Vk5vZGUobnVsbCwgY2hpbGQpIDogY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYXN0U2ltcGxlID0gc2ltcGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB3YWxrKGNoaWxkcmVuKTtcbiAgICBpZiAodm5vZGVEYXRhKSB7XG4gICAgICAgIGlmIChCVUlMRC5pc0RldiAmJiBub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgdmFsaWRhdGVJbnB1dFByb3BlcnRpZXModm5vZGVEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBub3JtYWxpemUgY2xhc3MgLyBjbGFzc25hbWUgYXR0cmlidXRlc1xuICAgICAgICBpZiAoQlVJTEQudmRvbUtleSAmJiB2bm9kZURhdGEua2V5KSB7XG4gICAgICAgICAgICBrZXkgPSB2bm9kZURhdGEua2V5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiB2bm9kZURhdGEubmFtZSkge1xuICAgICAgICAgICAgc2xvdE5hbWUgPSB2bm9kZURhdGEubmFtZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQudmRvbUNsYXNzKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc0RhdGEgPSB2bm9kZURhdGEuY2xhc3NOYW1lIHx8IHZub2RlRGF0YS5jbGFzcztcbiAgICAgICAgICAgIGlmIChjbGFzc0RhdGEpIHtcbiAgICAgICAgICAgICAgICB2bm9kZURhdGEuY2xhc3MgPVxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY2xhc3NEYXRhICE9PSAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBjbGFzc0RhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgIDogT2JqZWN0LmtleXMoY2xhc3NEYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGspID0+IGNsYXNzRGF0YVtrXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChCVUlMRC5pc0RldiAmJiB2Tm9kZUNoaWxkcmVuLnNvbWUoaXNIb3N0KSkge1xuICAgICAgICBjb25zb2xlRGV2RXJyb3IoYFRoZSA8SG9zdD4gbXVzdCBiZSB0aGUgc2luZ2xlIHJvb3QgY29tcG9uZW50LiBNYWtlIHN1cmU6XG4tIFlvdSBhcmUgTk9UIHVzaW5nIGhvc3REYXRhKCkgYW5kIDxIb3N0PiBpbiB0aGUgc2FtZSBjb21wb25lbnQuXG4tIDxIb3N0PiBpcyB1c2VkIG9uY2UsIGFuZCBpdCdzIHRoZSBzaW5nbGUgcm9vdCBjb21wb25lbnQgb2YgdGhlIHJlbmRlcigpIGZ1bmN0aW9uLmApO1xuICAgIH1cbiAgICBpZiAoQlVJTEQudmRvbUZ1bmN0aW9uYWwgJiYgdHlwZW9mIG5vZGVOYW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIG5vZGVOYW1lIGlzIGEgZnVuY3Rpb25hbCBjb21wb25lbnRcbiAgICAgICAgcmV0dXJuIG5vZGVOYW1lKHZub2RlRGF0YSA9PT0gbnVsbCA/IHt9IDogdm5vZGVEYXRhLCB2Tm9kZUNoaWxkcmVuLCB2ZG9tRm5VdGlscyk7XG4gICAgfVxuICAgIGNvbnN0IHZub2RlID0gbmV3Vk5vZGUobm9kZU5hbWUsIG51bGwpO1xuICAgIHZub2RlLiRhdHRycyQgPSB2bm9kZURhdGE7XG4gICAgaWYgKHZOb2RlQ2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICB2bm9kZS4kY2hpbGRyZW4kID0gdk5vZGVDaGlsZHJlbjtcbiAgICB9XG4gICAgaWYgKEJVSUxELnZkb21LZXkpIHtcbiAgICAgICAgdm5vZGUuJGtleSQgPSBrZXk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICB2bm9kZS4kbmFtZSQgPSBzbG90TmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlO1xufTtcbi8qKlxuICogQSB1dGlsaXR5IGZ1bmN0aW9uIGZvciBjcmVhdGluZyBhIHZpcnR1YWwgRE9NIG5vZGUgZnJvbSBhIHRhZyBhbmQgc29tZVxuICogcG9zc2libGUgdGV4dCBjb250ZW50LlxuICpcbiAqIEBwYXJhbSB0YWcgdGhlIHRhZyBmb3IgdGhpcyBlbGVtZW50XG4gKiBAcGFyYW0gdGV4dCBwb3NzaWJsZSB0ZXh0IGNvbnRlbnQgZm9yIHRoZSBub2RlXG4gKiBAcmV0dXJucyBhIG5ld2x5LW1pbnRlZCB2aXJ0dWFsIERPTSBub2RlXG4gKi9cbmNvbnN0IG5ld1ZOb2RlID0gKHRhZywgdGV4dCkgPT4ge1xuICAgIGNvbnN0IHZub2RlID0ge1xuICAgICAgICAkZmxhZ3MkOiAwLFxuICAgICAgICAkdGFnJDogdGFnLFxuICAgICAgICAkdGV4dCQ6IHRleHQsXG4gICAgICAgICRlbG0kOiBudWxsLFxuICAgICAgICAkY2hpbGRyZW4kOiBudWxsLFxuICAgIH07XG4gICAgaWYgKEJVSUxELnZkb21BdHRyaWJ1dGUpIHtcbiAgICAgICAgdm5vZGUuJGF0dHJzJCA9IG51bGw7XG4gICAgfVxuICAgIGlmIChCVUlMRC52ZG9tS2V5KSB7XG4gICAgICAgIHZub2RlLiRrZXkkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uKSB7XG4gICAgICAgIHZub2RlLiRuYW1lJCA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB2bm9kZTtcbn07XG5jb25zdCBIb3N0ID0ge307XG4vKipcbiAqIENoZWNrIHdoZXRoZXIgYSBnaXZlbiBub2RlIGlzIGEgSG9zdCBub2RlIG9yIG5vdFxuICpcbiAqIEBwYXJhbSBub2RlIHRoZSB2aXJ0dWFsIERPTSBub2RlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB3aGV0aGVyIGl0J3MgYSBIb3N0IG5vZGUgb3Igbm90XG4gKi9cbmNvbnN0IGlzSG9zdCA9IChub2RlKSA9PiBub2RlICYmIG5vZGUuJHRhZyQgPT09IEhvc3Q7XG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHtAbGluayBkLkZ1bmN0aW9uYWxVdGlsaXRpZXN9IGZvciBTdGVuY2lsJ3MgVkRvbS5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlc2UgZnVuY3Rpb25zIGNvbnZlcnQgZnJvbSB7QGxpbmsgZC5WTm9kZX0gdG9cbiAqIHtAbGluayBkLkNoaWxkTm9kZX0gdG8gZ2l2ZSBmdW5jdGlvbmFsIGNvbXBvbmVudCBkZXZlbG9wZXJzIGEgZnJpZW5kbHlcbiAqIGludGVyZmFjZS5cbiAqL1xuY29uc3QgdmRvbUZuVXRpbHMgPSB7XG4gICAgZm9yRWFjaDogKGNoaWxkcmVuLCBjYikgPT4gY2hpbGRyZW4ubWFwKGNvbnZlcnRUb1B1YmxpYykuZm9yRWFjaChjYiksXG4gICAgbWFwOiAoY2hpbGRyZW4sIGNiKSA9PiBjaGlsZHJlbi5tYXAoY29udmVydFRvUHVibGljKS5tYXAoY2IpLm1hcChjb252ZXJ0VG9Qcml2YXRlKSxcbn07XG4vKipcbiAqIENvbnZlcnQgYSB7QGxpbmsgZC5WTm9kZX0gdG8gYSB7QGxpbmsgZC5DaGlsZE5vZGV9IGluIG9yZGVyIHRvIHByZXNlbnQgYVxuICogZnJpZW5kbGllciBwdWJsaWMgaW50ZXJmYWNlIChoZW5jZSwgJ2NvbnZlcnRUb1B1YmxpYycpLlxuICpcbiAqIEBwYXJhbSBub2RlIHRoZSB2aXJ0dWFsIERPTSBub2RlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIGEgY29udmVydGVkIGNoaWxkIG5vZGVcbiAqL1xuY29uc3QgY29udmVydFRvUHVibGljID0gKG5vZGUpID0+ICh7XG4gICAgdmF0dHJzOiBub2RlLiRhdHRycyQsXG4gICAgdmNoaWxkcmVuOiBub2RlLiRjaGlsZHJlbiQsXG4gICAgdmtleTogbm9kZS4ka2V5JCxcbiAgICB2bmFtZTogbm9kZS4kbmFtZSQsXG4gICAgdnRhZzogbm9kZS4kdGFnJCxcbiAgICB2dGV4dDogbm9kZS4kdGV4dCQsXG59KTtcbi8qKlxuICogQ29udmVydCBhIHtAbGluayBkLkNoaWxkTm9kZX0gYmFjayB0byBhbiBlcXVpdmFsZW50IHtAbGluayBkLlZOb2RlfSBpblxuICogb3JkZXIgdG8gdXNlIHRoZSByZXN1bHRpbmcgb2JqZWN0IGluIHRoZSB2aXJ0dWFsIERPTS4gVGhlIGluaXRpYWwgb2JqZWN0IHdhc1xuICogbGlrZWx5IGNyZWF0ZWQgYXMgcGFydCBvZiBwcmVzZW50aW5nIGEgcHVibGljIEFQSSwgc28gY29udmVydGluZyBpdCBiYWNrXG4gKiBpbnZvbHZlZCBtYWtpbmcgaXQgJ3ByaXZhdGUnIGFnYWluIChoZW5jZSwgYGNvbnZlcnRUb1ByaXZhdGVgKS5cbiAqXG4gKiBAcGFyYW0gbm9kZSB0aGUgY2hpbGQgbm9kZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyBhIGNvbnZlcnRlZCB2aXJ0dWFsIERPTSBub2RlXG4gKi9cbmNvbnN0IGNvbnZlcnRUb1ByaXZhdGUgPSAobm9kZSkgPT4ge1xuICAgIGlmICh0eXBlb2Ygbm9kZS52dGFnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHZub2RlRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIG5vZGUudmF0dHJzKTtcbiAgICAgICAgaWYgKG5vZGUudmtleSkge1xuICAgICAgICAgICAgdm5vZGVEYXRhLmtleSA9IG5vZGUudmtleTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS52bmFtZSkge1xuICAgICAgICAgICAgdm5vZGVEYXRhLm5hbWUgPSBub2RlLnZuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoKG5vZGUudnRhZywgdm5vZGVEYXRhLCAuLi4obm9kZS52Y2hpbGRyZW4gfHwgW10pKTtcbiAgICB9XG4gICAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShub2RlLnZ0YWcsIG5vZGUudnRleHQpO1xuICAgIHZub2RlLiRhdHRycyQgPSBub2RlLnZhdHRycztcbiAgICB2bm9kZS4kY2hpbGRyZW4kID0gbm9kZS52Y2hpbGRyZW47XG4gICAgdm5vZGUuJGtleSQgPSBub2RlLnZrZXk7XG4gICAgdm5vZGUuJG5hbWUkID0gbm9kZS52bmFtZTtcbiAgICByZXR1cm4gdm5vZGU7XG59O1xuLyoqXG4gKiBWYWxpZGF0ZXMgdGhlIG9yZGVyaW5nIG9mIGF0dHJpYnV0ZXMgb24gYW4gaW5wdXQgZWxlbWVudFxuICpcbiAqIEBwYXJhbSBpbnB1dEVsbSB0aGUgZWxlbWVudCB0byB2YWxpZGF0ZVxuICovXG5jb25zdCB2YWxpZGF0ZUlucHV0UHJvcGVydGllcyA9IChpbnB1dEVsbSkgPT4ge1xuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmtleXMoaW5wdXRFbG0pO1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMuaW5kZXhPZigndmFsdWUnKTtcbiAgICBpZiAodmFsdWUgPT09IC0xKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdHlwZUluZGV4ID0gcHJvcHMuaW5kZXhPZigndHlwZScpO1xuICAgIGNvbnN0IG1pbkluZGV4ID0gcHJvcHMuaW5kZXhPZignbWluJyk7XG4gICAgY29uc3QgbWF4SW5kZXggPSBwcm9wcy5pbmRleE9mKCdtYXgnKTtcbiAgICBjb25zdCBzdGVwSW5kZXggPSBwcm9wcy5pbmRleE9mKCdzdGVwJyk7XG4gICAgaWYgKHZhbHVlIDwgdHlwZUluZGV4IHx8IHZhbHVlIDwgbWluSW5kZXggfHwgdmFsdWUgPCBtYXhJbmRleCB8fCB2YWx1ZSA8IHN0ZXBJbmRleCkge1xuICAgICAgICBjb25zb2xlRGV2V2FybihgVGhlIFwidmFsdWVcIiBwcm9wIG9mIDxpbnB1dD4gc2hvdWxkIGJlIHNldCBhZnRlciBcIm1pblwiLCBcIm1heFwiLCBcInR5cGVcIiBhbmQgXCJzdGVwXCJgKTtcbiAgICB9XG59O1xuY29uc3QgaW5pdGlhbGl6ZUNsaWVudEh5ZHJhdGUgPSAoaG9zdEVsbSwgdGFnTmFtZSwgaG9zdElkLCBob3N0UmVmKSA9PiB7XG4gICAgY29uc3QgZW5kSHlkcmF0ZSA9IGNyZWF0ZVRpbWUoJ2h5ZHJhdGVDbGllbnQnLCB0YWdOYW1lKTtcbiAgICBjb25zdCBzaGFkb3dSb290ID0gaG9zdEVsbS5zaGFkb3dSb290O1xuICAgIGNvbnN0IGNoaWxkUmVuZGVyTm9kZXMgPSBbXTtcbiAgICBjb25zdCBzbG90Tm9kZXMgPSBbXTtcbiAgICBjb25zdCBzaGFkb3dSb290Tm9kZXMgPSBCVUlMRC5zaGFkb3dEb20gJiYgc2hhZG93Um9vdCA/IFtdIDogbnVsbDtcbiAgICBjb25zdCB2bm9kZSA9IChob3N0UmVmLiR2bm9kZSQgPSBuZXdWTm9kZSh0YWdOYW1lLCBudWxsKSk7XG4gICAgaWYgKCFwbHQuJG9yZ0xvY05vZGVzJCkge1xuICAgICAgICBpbml0aWFsaXplRG9jdW1lbnRIeWRyYXRlKGRvYy5ib2R5LCAocGx0LiRvcmdMb2NOb2RlcyQgPSBuZXcgTWFwKCkpKTtcbiAgICB9XG4gICAgaG9zdEVsbVtIWURSQVRFX0lEXSA9IGhvc3RJZDtcbiAgICBob3N0RWxtLnJlbW92ZUF0dHJpYnV0ZShIWURSQVRFX0lEKTtcbiAgICBjbGllbnRIeWRyYXRlKHZub2RlLCBjaGlsZFJlbmRlck5vZGVzLCBzbG90Tm9kZXMsIHNoYWRvd1Jvb3ROb2RlcywgaG9zdEVsbSwgaG9zdEVsbSwgaG9zdElkKTtcbiAgICBjaGlsZFJlbmRlck5vZGVzLm1hcCgoYykgPT4ge1xuICAgICAgICBjb25zdCBvcmdMb2NhdGlvbklkID0gYy4kaG9zdElkJCArICcuJyArIGMuJG5vZGVJZCQ7XG4gICAgICAgIGNvbnN0IG9yZ0xvY2F0aW9uTm9kZSA9IHBsdC4kb3JnTG9jTm9kZXMkLmdldChvcmdMb2NhdGlvbklkKTtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGMuJGVsbSQ7XG4gICAgICAgIGlmIChvcmdMb2NhdGlvbk5vZGUgJiYgc3VwcG9ydHNTaGFkb3cgJiYgb3JnTG9jYXRpb25Ob2RlWydzLWVuJ10gPT09ICcnKSB7XG4gICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgb3JnTG9jYXRpb25Ob2RlLm5leHRTaWJsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgIG5vZGVbJ3MtaG4nXSA9IHRhZ05hbWU7XG4gICAgICAgICAgICBpZiAob3JnTG9jYXRpb25Ob2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZVsncy1vbCddID0gb3JnTG9jYXRpb25Ob2RlO1xuICAgICAgICAgICAgICAgIG5vZGVbJ3Mtb2wnXVsncy1uciddID0gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBwbHQuJG9yZ0xvY05vZGVzJC5kZWxldGUob3JnTG9jYXRpb25JZCk7XG4gICAgfSk7XG4gICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiBzaGFkb3dSb290KSB7XG4gICAgICAgIHNoYWRvd1Jvb3ROb2Rlcy5tYXAoKHNoYWRvd1Jvb3ROb2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2hhZG93Um9vdE5vZGUpIHtcbiAgICAgICAgICAgICAgICBzaGFkb3dSb290LmFwcGVuZENoaWxkKHNoYWRvd1Jvb3ROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVuZEh5ZHJhdGUoKTtcbn07XG5jb25zdCBjbGllbnRIeWRyYXRlID0gKHBhcmVudFZOb2RlLCBjaGlsZFJlbmRlck5vZGVzLCBzbG90Tm9kZXMsIHNoYWRvd1Jvb3ROb2RlcywgaG9zdEVsbSwgbm9kZSwgaG9zdElkKSA9PiB7XG4gICAgbGV0IGNoaWxkTm9kZVR5cGU7XG4gICAgbGV0IGNoaWxkSWRTcGx0O1xuICAgIGxldCBjaGlsZFZOb2RlO1xuICAgIGxldCBpO1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLykge1xuICAgICAgICBjaGlsZE5vZGVUeXBlID0gbm9kZS5nZXRBdHRyaWJ1dGUoSFlEUkFURV9DSElMRF9JRCk7XG4gICAgICAgIGlmIChjaGlsZE5vZGVUeXBlKSB7XG4gICAgICAgICAgICAvLyBnb3QgdGhlIG5vZGUgZGF0YSBmcm9tIHRoZSBlbGVtZW50J3MgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBgJHtob3N0SWR9LiR7bm9kZUlkfS4ke2RlcHRofS4ke2luZGV4fWBcbiAgICAgICAgICAgIGNoaWxkSWRTcGx0ID0gY2hpbGROb2RlVHlwZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgaWYgKGNoaWxkSWRTcGx0WzBdID09PSBob3N0SWQgfHwgY2hpbGRJZFNwbHRbMF0gPT09ICcwJykge1xuICAgICAgICAgICAgICAgIGNoaWxkVk5vZGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICRmbGFncyQ6IDAsXG4gICAgICAgICAgICAgICAgICAgICRob3N0SWQkOiBjaGlsZElkU3BsdFswXSxcbiAgICAgICAgICAgICAgICAgICAgJG5vZGVJZCQ6IGNoaWxkSWRTcGx0WzFdLFxuICAgICAgICAgICAgICAgICAgICAkZGVwdGgkOiBjaGlsZElkU3BsdFsyXSxcbiAgICAgICAgICAgICAgICAgICAgJGluZGV4JDogY2hpbGRJZFNwbHRbM10sXG4gICAgICAgICAgICAgICAgICAgICR0YWckOiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgJGVsbSQ6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICRhdHRycyQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICRjaGlsZHJlbiQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICRrZXkkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAkbmFtZSQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICR0ZXh0JDogbnVsbCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNoaWxkUmVuZGVyTm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShIWURSQVRFX0NISUxEX0lEKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgbmV3IGNoaWxkIHZub2RlXG4gICAgICAgICAgICAgICAgLy8gc28gZW5zdXJlIGl0cyBwYXJlbnQgdm5vZGUgaGFzIHRoZSB2Y2hpbGRyZW4gYXJyYXlcbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudFZOb2RlLiRjaGlsZHJlbiQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhZGQgb3VyIGNoaWxkIHZub2RlIHRvIGEgc3BlY2lmaWMgaW5kZXggb2YgdGhlIHZub2RlJ3MgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgbm93IHRoZSBuZXcgcGFyZW50IHZub2RlIGZvciBhbGwgdGhlIG5leHQgY2hpbGQgY2hlY2tzXG4gICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUgPSBjaGlsZFZOb2RlO1xuICAgICAgICAgICAgICAgIGlmIChzaGFkb3dSb290Tm9kZXMgJiYgY2hpbGRWTm9kZS4kZGVwdGgkID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hhZG93Um9vdE5vZGVzW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlLiRlbG0kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyByZWN1cnNpdmVseSBkcmlsbCBkb3duLCBlbmQgdG8gc3RhcnQgc28gd2UgY2FuIHJlbW92ZSBub2Rlc1xuICAgICAgICBmb3IgKGkgPSBub2RlLmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNsaWVudEh5ZHJhdGUocGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBob3N0RWxtLCBub2RlLmNoaWxkTm9kZXNbaV0sIGhvc3RJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgLy8ga2VlcCBkcmlsbGluZyBkb3duIHRocm91Z2ggdGhlIHNoYWRvdyByb290IG5vZGVzXG4gICAgICAgICAgICBmb3IgKGkgPSBub2RlLnNoYWRvd1Jvb3QuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNsaWVudEh5ZHJhdGUocGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBob3N0RWxtLCBub2RlLnNoYWRvd1Jvb3QuY2hpbGROb2Rlc1tpXSwgaG9zdElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIE5PREVfVFlQRS5Db21tZW50Tm9kZSAqLykge1xuICAgICAgICAvLyBgJHtDT01NRU5UX1RZUEV9LiR7aG9zdElkfS4ke25vZGVJZH0uJHtkZXB0aH0uJHtpbmRleH1gXG4gICAgICAgIGNoaWxkSWRTcGx0ID0gbm9kZS5ub2RlVmFsdWUuc3BsaXQoJy4nKTtcbiAgICAgICAgaWYgKGNoaWxkSWRTcGx0WzFdID09PSBob3N0SWQgfHwgY2hpbGRJZFNwbHRbMV0gPT09ICcwJykge1xuICAgICAgICAgICAgLy8gY29tbWVudCBub2RlIGZvciBlaXRoZXIgdGhlIGhvc3QgaWQgb3IgYSAwIGhvc3QgaWRcbiAgICAgICAgICAgIGNoaWxkTm9kZVR5cGUgPSBjaGlsZElkU3BsdFswXTtcbiAgICAgICAgICAgIGNoaWxkVk5vZGUgPSB7XG4gICAgICAgICAgICAgICAgJGZsYWdzJDogMCxcbiAgICAgICAgICAgICAgICAkaG9zdElkJDogY2hpbGRJZFNwbHRbMV0sXG4gICAgICAgICAgICAgICAgJG5vZGVJZCQ6IGNoaWxkSWRTcGx0WzJdLFxuICAgICAgICAgICAgICAgICRkZXB0aCQ6IGNoaWxkSWRTcGx0WzNdLFxuICAgICAgICAgICAgICAgICRpbmRleCQ6IGNoaWxkSWRTcGx0WzRdLFxuICAgICAgICAgICAgICAgICRlbG0kOiBub2RlLFxuICAgICAgICAgICAgICAgICRhdHRycyQ6IG51bGwsXG4gICAgICAgICAgICAgICAgJGNoaWxkcmVuJDogbnVsbCxcbiAgICAgICAgICAgICAgICAka2V5JDogbnVsbCxcbiAgICAgICAgICAgICAgICAkbmFtZSQ6IG51bGwsXG4gICAgICAgICAgICAgICAgJHRhZyQ6IG51bGwsXG4gICAgICAgICAgICAgICAgJHRleHQkOiBudWxsLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVUeXBlID09PSBURVhUX05PREVfSUQpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFZOb2RlLiRlbG0kID0gbm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRWTm9kZS4kZWxtJCAmJiBjaGlsZFZOb2RlLiRlbG0kLm5vZGVUeXBlID09PSAzIC8qIE5PREVfVFlQRS5UZXh0Tm9kZSAqLykge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZOb2RlLiR0ZXh0JCA9IGNoaWxkVk5vZGUuJGVsbSQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkUmVuZGVyTm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSB0ZXh0IGNvbW1lbnQgc2luY2UgaXQncyBubyBsb25nZXIgbmVlZGVkXG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiRbY2hpbGRWTm9kZS4kaW5kZXgkXSA9IGNoaWxkVk5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGFkb3dSb290Tm9kZXMgJiYgY2hpbGRWTm9kZS4kZGVwdGgkID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3ROb2Rlc1tjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZS4kZWxtJDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkVk5vZGUuJGhvc3RJZCQgPT09IGhvc3RJZCkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29tbWVudCBub2RlIGlzIHNwZWNpZmNhbGx5IGZvciB0aGlzIGhvc3QgaWRcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlVHlwZSA9PT0gU0xPVF9OT0RFX0lEKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGAke1NMT1RfTk9ERV9JRH0uJHtob3N0SWR9LiR7bm9kZUlkfS4ke2RlcHRofS4ke2luZGV4fS4ke3Nsb3ROYW1lfWA7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVk5vZGUuJHRhZyQgPSAnc2xvdCc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZElkU3BsdFs1XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsncy1zbiddID0gY2hpbGRWTm9kZS4kbmFtZSQgPSBjaGlsZElkU3BsdFs1XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ3Mtc24nXSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5vZGVbJ3Mtc3InXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zaGFkb3dEb20gJiYgc2hhZG93Um9vdE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBicm93c2VyIHN1cHBvcnQgc2hhZG93Um9vdCBhbmQgdGhpcyBpcyBhIHNoYWRvdyBkb20gY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYW4gYWN0dWFsIHNsb3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWTm9kZS4kZWxtJCA9IGRvYy5jcmVhdGVFbGVtZW50KGNoaWxkVk5vZGUuJHRhZyQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkVk5vZGUuJG5hbWUkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoZSBzbG90IG5hbWUgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRWTm9kZS4kZWxtJC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBjaGlsZFZOb2RlLiRuYW1lJCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnNlcnQgdGhlIG5ldyBzbG90IGVsZW1lbnQgYmVmb3JlIHRoZSBzbG90IGNvbW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2hpbGRWTm9kZS4kZWxtJCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIHNsb3QgY29tbWVudCBzaW5jZSBpdCdzIG5vdCBuZWVkZWQgZm9yIHNoYWRvd1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZFZOb2RlLiRkZXB0aCQgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3ROb2Rlc1tjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZS4kZWxtJDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzbG90Tm9kZXMucHVzaChjaGlsZFZOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRWTm9kZS4kY2hpbGRyZW4kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGROb2RlVHlwZSA9PT0gQ09OVEVOVF9SRUZfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYCR7Q09OVEVOVF9SRUZfSUR9LiR7aG9zdElkfWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zaGFkb3dEb20gJiYgc2hhZG93Um9vdE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGNvbnRlbnQgcmVmIGNvbW1lbnQgc2luY2UgaXQncyBub3QgbmVlZGVkIGZvciBzaGFkb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3RFbG1bJ3MtY3InXSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlWydzLWNuJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcmVudFZOb2RlICYmIHBhcmVudFZOb2RlLiR0YWckID09PSAnc3R5bGUnKSB7XG4gICAgICAgIGNvbnN0IHZub2RlID0gbmV3Vk5vZGUobnVsbCwgbm9kZS50ZXh0Q29udGVudCk7XG4gICAgICAgIHZub2RlLiRlbG0kID0gbm9kZTtcbiAgICAgICAgdm5vZGUuJGluZGV4JCA9ICcwJztcbiAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFt2bm9kZV07XG4gICAgfVxufTtcbmNvbnN0IGluaXRpYWxpemVEb2N1bWVudEh5ZHJhdGUgPSAobm9kZSwgb3JnTG9jTm9kZXMpID0+IHtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaW5pdGlhbGl6ZURvY3VtZW50SHlkcmF0ZShub2RlLmNoaWxkTm9kZXNbaV0sIG9yZ0xvY05vZGVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5zaGFkb3dSb290KSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbm9kZS5zaGFkb3dSb290LmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplRG9jdW1lbnRIeWRyYXRlKG5vZGUuc2hhZG93Um9vdC5jaGlsZE5vZGVzW2ldLCBvcmdMb2NOb2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOT0RFX1RZUEUuQ29tbWVudE5vZGUgKi8pIHtcbiAgICAgICAgY29uc3QgY2hpbGRJZFNwbHQgPSBub2RlLm5vZGVWYWx1ZS5zcGxpdCgnLicpO1xuICAgICAgICBpZiAoY2hpbGRJZFNwbHRbMF0gPT09IE9SR19MT0NBVElPTl9JRCkge1xuICAgICAgICAgICAgb3JnTG9jTm9kZXMuc2V0KGNoaWxkSWRTcGx0WzFdICsgJy4nICsgY2hpbGRJZFNwbHRbMl0sIG5vZGUpO1xuICAgICAgICAgICAgbm9kZS5ub2RlVmFsdWUgPSAnJztcbiAgICAgICAgICAgIC8vIHVzZWZ1bCB0byBrbm93IGlmIHRoZSBvcmlnaW5hbCBsb2NhdGlvbiBpc1xuICAgICAgICAgICAgLy8gdGhlIHJvb3QgbGlnaHQtZG9tIG9mIGEgc2hhZG93IGRvbSBjb21wb25lbnRcbiAgICAgICAgICAgIG5vZGVbJ3MtZW4nXSA9IGNoaWxkSWRTcGx0WzNdO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFByaXZhdGVcbmNvbnN0IGNvbXB1dGVNb2RlID0gKGVsbSkgPT4gbW9kZVJlc29sdXRpb25DaGFpbi5tYXAoKGgpID0+IGgoZWxtKSkuZmluZCgobSkgPT4gISFtKTtcbi8vIFB1YmxpY1xuY29uc3Qgc2V0TW9kZSA9IChoYW5kbGVyKSA9PiBtb2RlUmVzb2x1dGlvbkNoYWluLnB1c2goaGFuZGxlcik7XG5jb25zdCBnZXRNb2RlID0gKHJlZikgPT4gZ2V0SG9zdFJlZihyZWYpLiRtb2RlTmFtZSQ7XG4vKipcbiAqIFBhcnNlIGEgbmV3IHByb3BlcnR5IHZhbHVlIGZvciBhIGdpdmVuIHByb3BlcnR5IHR5cGUuXG4gKlxuICogV2hpbGUgdGhlIHByb3AgdmFsdWUgY2FuIHJlYXNvbmFibHkgYmUgZXhwZWN0ZWQgdG8gYmUgb2YgYGFueWAgdHlwZSBhcyBmYXIgYXMgVHlwZVNjcmlwdCdzIHR5cGUgY2hlY2tlciBpcyBjb25jZXJuZWQsXG4gKiBpdCBpcyBub3Qgc2FmZSB0byBhc3N1bWUgdGhhdCB0aGUgc3RyaW5nIHJldHVybmVkIGJ5IGV2YWx1YXRpbmcgYHR5cGVvZiBwcm9wVmFsdWVgIG1hdGNoZXM6XG4gKiAgIDEuIGBhbnlgLCB0aGUgdHlwZSBnaXZlbiB0byBgcHJvcFZhbHVlYCBpbiB0aGUgZnVuY3Rpb24gc2lnbmF0dXJlXG4gKiAgIDIuIHRoZSB0eXBlIHN0b3JlZCBmcm9tIGBwcm9wVHlwZWAuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBwcm92aWRlcyB0aGUgY2FwYWJpbGl0eSB0byBwYXJzZS9jb2VyY2UgYSBwcm9wZXJ0eSdzIHZhbHVlIHRvIHBvdGVudGlhbGx5IGFueSBvdGhlciBKYXZhU2NyaXB0IHR5cGUuXG4gKlxuICogUHJvcGVydHkgdmFsdWVzIHJlcHJlc2VudGVkIGluIFRTWCBwcmVzZXJ2ZSB0aGVpciB0eXBlIGluZm9ybWF0aW9uLiBJbiB0aGUgZXhhbXBsZSBiZWxvdywgdGhlIG51bWJlciAwIGlzIHBhc3NlZCB0b1xuICogYSBjb21wb25lbnQuIFRoaXMgYHByb3BWYWx1ZWAgd2lsbCBwcmVzZXJ2ZSBpdHMgdHlwZSBpbmZvcm1hdGlvbiAoYHR5cGVvZiBwcm9wVmFsdWUgPT09ICdudW1iZXInYCkuIE5vdGUgdGhhdCBpc1xuICogYmFzZWQgb24gdGhlIHR5cGUgb2YgdGhlIHZhbHVlIGJlaW5nIHBhc3NlZCBpbiwgbm90IHRoZSB0eXBlIGRlY2xhcmVkIG9mIHRoZSBjbGFzcyBtZW1iZXIgZGVjb3JhdGVkIHdpdGggYEBQcm9wYC5cbiAqIGBgYHRzeFxuICogPG15LWNtcCBwcm9wLXZhbD17MH0+PC9teS1jbXA+XG4gKiBgYGBcbiAqXG4gKiBIVE1MIHByb3AgdmFsdWVzIG9uIHRoZSBvdGhlciBoYW5kLCB3aWxsIGFsd2F5cyBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSBwcm9wVmFsdWUgdGhlIG5ldyB2YWx1ZSB0byBjb2VyY2UgdG8gc29tZSB0eXBlXG4gKiBAcGFyYW0gcHJvcFR5cGUgdGhlIHR5cGUgb2YgdGhlIHByb3AsIGV4cHJlc3NlZCBhcyBhIGJpbmFyeSBudW1iZXJcbiAqIEByZXR1cm5zIHRoZSBwYXJzZWQvY29lcmNlZCB2YWx1ZVxuICovXG5jb25zdCBwYXJzZVByb3BlcnR5VmFsdWUgPSAocHJvcFZhbHVlLCBwcm9wVHlwZSkgPT4ge1xuICAgIC8vIGVuc3VyZSB0aGlzIHZhbHVlIGlzIG9mIHRoZSBjb3JyZWN0IHByb3AgdHlwZVxuICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiAhaXNDb21wbGV4VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIGlmIChCVUlMRC5wcm9wQm9vbGVhbiAmJiBwcm9wVHlwZSAmIDQgLyogTUVNQkVSX0ZMQUdTLkJvb2xlYW4gKi8pIHtcbiAgICAgICAgICAgIC8vIHBlciB0aGUgSFRNTCBzcGVjLCBhbnkgc3RyaW5nIHZhbHVlIG1lYW5zIGl0IGlzIGEgYm9vbGVhbiB0cnVlIHZhbHVlXG4gICAgICAgICAgICAvLyBidXQgd2UnbGwgY2hlYXQgaGVyZSBhbmQgc2F5IHRoYXQgdGhlIHN0cmluZyBcImZhbHNlXCIgaXMgdGhlIGJvb2xlYW4gZmFsc2VcbiAgICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHByb3BWYWx1ZSA9PT0gJycgfHwgISFwcm9wVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELnByb3BOdW1iZXIgJiYgcHJvcFR5cGUgJiAyIC8qIE1FTUJFUl9GTEFHUy5OdW1iZXIgKi8pIHtcbiAgICAgICAgICAgIC8vIGZvcmNlIGl0IHRvIGJlIGEgbnVtYmVyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChwcm9wVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5wcm9wU3RyaW5nICYmIHByb3BUeXBlICYgMSAvKiBNRU1CRVJfRkxBR1MuU3RyaW5nICovKSB7XG4gICAgICAgICAgICAvLyBjb3VsZCBoYXZlIGJlZW4gcGFzc2VkIGFzIGEgbnVtYmVyIG9yIGJvb2xlYW5cbiAgICAgICAgICAgIC8vIGJ1dCB3ZSBzdGlsbCB3YW50IGl0IGFzIGEgc3RyaW5nXG4gICAgICAgICAgICByZXR1cm4gU3RyaW5nKHByb3BWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVkdW5kYW50IHJldHVybiBoZXJlIGZvciBiZXR0ZXIgbWluaWZpY2F0aW9uXG4gICAgICAgIHJldHVybiBwcm9wVmFsdWU7XG4gICAgfVxuICAgIC8vIG5vdCBzdXJlIGV4YWN0bHkgd2hhdCB0eXBlIHdlIHdhbnRcbiAgICAvLyBzbyBubyBuZWVkIHRvIGNoYW5nZSB0byBhIGRpZmZlcmVudCB0eXBlXG4gICAgcmV0dXJuIHByb3BWYWx1ZTtcbn07XG5jb25zdCBnZXRFbGVtZW50ID0gKHJlZikgPT4gKEJVSUxELmxhenlMb2FkID8gZ2V0SG9zdFJlZihyZWYpLiRob3N0RWxlbWVudCQgOiByZWYpO1xuY29uc3QgY3JlYXRlRXZlbnQgPSAocmVmLCBuYW1lLCBmbGFncykgPT4ge1xuICAgIGNvbnN0IGVsbSA9IGdldEVsZW1lbnQocmVmKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBlbWl0OiAoZGV0YWlsKSA9PiB7XG4gICAgICAgICAgICBpZiAoQlVJTEQuaXNEZXYgJiYgIWVsbS5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGVEZXZXYXJuKGBUaGUgXCIke25hbWV9XCIgZXZlbnQgd2FzIGVtaXR0ZWQsIGJ1dCB0aGUgZGlzcGF0Y2hlciBub2RlIGlzIG5vIGxvbmdlciBjb25uZWN0ZWQgdG8gdGhlIGRvbS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBlbWl0RXZlbnQoZWxtLCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogISEoZmxhZ3MgJiA0IC8qIEVWRU5UX0ZMQUdTLkJ1YmJsZXMgKi8pLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiAhIShmbGFncyAmIDIgLyogRVZFTlRfRkxBR1MuQ29tcG9zZWQgKi8pLFxuICAgICAgICAgICAgICAgIGNhbmNlbGFibGU6ICEhKGZsYWdzICYgMSAvKiBFVkVOVF9GTEFHUy5DYW5jZWxsYWJsZSAqLyksXG4gICAgICAgICAgICAgICAgZGV0YWlsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfTtcbn07XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgJiBkaXNwYXRjaCBhIGN1c3RvbSBFdmVudCBvbiBhIHByb3ZpZGVkIHRhcmdldFxuICogQHBhcmFtIGVsbSB0aGUgdGFyZ2V0IG9mIHRoZSBFdmVudFxuICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgdG8gZ2l2ZSB0aGUgY3VzdG9tIEV2ZW50XG4gKiBAcGFyYW0gb3B0cyBvcHRpb25zIGZvciBjb25maWd1cmluZyBhIGN1c3RvbSBFdmVudFxuICogQHJldHVybnMgdGhlIGN1c3RvbSBFdmVudFxuICovXG5jb25zdCBlbWl0RXZlbnQgPSAoZWxtLCBuYW1lLCBvcHRzKSA9PiB7XG4gICAgY29uc3QgZXYgPSBwbHQuY2UobmFtZSwgb3B0cyk7XG4gICAgZWxtLmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgIHJldHVybiBldjtcbn07XG5jb25zdCByb290QXBwbGllZFN0eWxlcyA9IC8qQF9fUFVSRV9fKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJlZ2lzdGVyU3R5bGUgPSAoc2NvcGVJZCwgY3NzVGV4dCwgYWxsb3dDUykgPT4ge1xuICAgIGxldCBzdHlsZSA9IHN0eWxlcy5nZXQoc2NvcGVJZCk7XG4gICAgaWYgKHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXRzICYmIGFsbG93Q1MpIHtcbiAgICAgICAgc3R5bGUgPSAoc3R5bGUgfHwgbmV3IENTU1N0eWxlU2hlZXQoKSk7XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzdHlsZSA9IGNzc1RleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdHlsZS5yZXBsYWNlU3luYyhjc3NUZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc3R5bGUgPSBjc3NUZXh0O1xuICAgIH1cbiAgICBzdHlsZXMuc2V0KHNjb3BlSWQsIHN0eWxlKTtcbn07XG5jb25zdCBhZGRTdHlsZSA9IChzdHlsZUNvbnRhaW5lck5vZGUsIGNtcE1ldGEsIG1vZGUsIGhvc3RFbG0pID0+IHtcbiAgICB2YXIgX2E7XG4gICAgbGV0IHNjb3BlSWQgPSBnZXRTY29wZUlkKGNtcE1ldGEsIG1vZGUpO1xuICAgIGNvbnN0IHN0eWxlID0gc3R5bGVzLmdldChzY29wZUlkKTtcbiAgICBpZiAoIUJVSUxELmF0dGFjaFN0eWxlcykge1xuICAgICAgICByZXR1cm4gc2NvcGVJZDtcbiAgICB9XG4gICAgLy8gaWYgYW4gZWxlbWVudCBpcyBOT1QgY29ubmVjdGVkIHRoZW4gZ2V0Um9vdE5vZGUoKSB3aWxsIHJldHVybiB0aGUgd3Jvbmcgcm9vdCBub2RlXG4gICAgLy8gc28gdGhlIGZhbGxiYWNrIGlzIHRvIGFsd2F5cyB1c2UgdGhlIGRvY3VtZW50IGZvciB0aGUgcm9vdCBub2RlIGluIHRob3NlIGNhc2VzXG4gICAgc3R5bGVDb250YWluZXJOb2RlID0gc3R5bGVDb250YWluZXJOb2RlLm5vZGVUeXBlID09PSAxMSAvKiBOT0RFX1RZUEUuRG9jdW1lbnRGcmFnbWVudCAqLyA/IHN0eWxlQ29udGFpbmVyTm9kZSA6IGRvYztcbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZSA9IHN0eWxlQ29udGFpbmVyTm9kZS5oZWFkIHx8IHN0eWxlQ29udGFpbmVyTm9kZTtcbiAgICAgICAgICAgIGxldCBhcHBsaWVkU3R5bGVzID0gcm9vdEFwcGxpZWRTdHlsZXMuZ2V0KHN0eWxlQ29udGFpbmVyTm9kZSk7XG4gICAgICAgICAgICBsZXQgc3R5bGVFbG07XG4gICAgICAgICAgICBpZiAoIWFwcGxpZWRTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICByb290QXBwbGllZFN0eWxlcy5zZXQoc3R5bGVDb250YWluZXJOb2RlLCAoYXBwbGllZFN0eWxlcyA9IG5ldyBTZXQoKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhcHBsaWVkU3R5bGVzLmhhcyhzY29wZUlkKSkge1xuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlQ2xpZW50U2lkZSAmJlxuICAgICAgICAgICAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuaG9zdCAmJlxuICAgICAgICAgICAgICAgICAgICAoc3R5bGVFbG0gPSBzdHlsZUNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcihgWyR7SFlEUkFURURfU1RZTEVfSUR9PVwiJHtzY29wZUlkfVwiXWApKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIG9ubHkgaGFwcGVuaW5nIG9uIG5hdGl2ZSBzaGFkb3ctZG9tLCBkbyBub3QgbmVlZHMgQ1NTIHZhciBzaGltXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtLmlubmVySFRNTCA9IHN0eWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELmNzc1ZhclNoaW0gJiYgcGx0LiRjc3NTaGltJCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0gPSBwbHQuJGNzc1NoaW0kLmNyZWF0ZUhvc3RTdHlsZShob3N0RWxtLCBzY29wZUlkLCBzdHlsZSwgISEoY21wTWV0YS4kZmxhZ3MkICYgMTAgLyogQ01QX0ZMQUdTLm5lZWRzU2NvcGVkRW5jYXBzdWxhdGlvbiAqLykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2NvcGVJZCA9IHN0eWxlRWxtWydzLXNjJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3U2NvcGVJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlSWQgPSBuZXdTY29wZUlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gYWRkIHRoaXMgc3R5bGVJRCB0byB0aGUgYXBwbGllZFN0eWxlcyBTZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGUgY3NzVmFyU2hpbSBtaWdodCBuZWVkIHRvIGFwcGx5IHNldmVyYWwgZGlmZmVyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGVzaGVldHMgZm9yIHRoZSBzYW1lIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpZWRTdHlsZXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0gPSBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtLmlubmVySFRNTCA9IHN0eWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGx5IENTUCBub25jZSB0byB0aGUgc3R5bGUgdGFnIGlmIGl0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBub25jZSA9IChfYSA9IHBsdC4kbm9uY2UkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBxdWVyeU5vbmNlTWV0YVRhZ0NvbnRlbnQoZG9jKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vbmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBub25jZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlIHx8IEJVSUxELmhvdE1vZHVsZVJlcGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUVsbS5zZXRBdHRyaWJ1dGUoSFlEUkFURURfU1RZTEVfSUQsIHNjb3BlSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5pbnNlcnRCZWZvcmUoc3R5bGVFbG0sIHN0eWxlQ29udGFpbmVyTm9kZS5xdWVyeVNlbGVjdG9yKCdsaW5rJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYXBwbGllZFN0eWxlcykge1xuICAgICAgICAgICAgICAgICAgICBhcHBsaWVkU3R5bGVzLmFkZChzY29wZUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQuY29uc3RydWN0YWJsZUNTUyAmJiAhc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cy5pbmNsdWRlcyhzdHlsZSkpIHtcbiAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMgPSBbLi4uc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cywgc3R5bGVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzY29wZUlkO1xufTtcbmNvbnN0IGF0dGFjaFN0eWxlcyA9IChob3N0UmVmKSA9PiB7XG4gICAgY29uc3QgY21wTWV0YSA9IGhvc3RSZWYuJGNtcE1ldGEkO1xuICAgIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBmbGFncyA9IGNtcE1ldGEuJGZsYWdzJDtcbiAgICBjb25zdCBlbmRBdHRhY2hTdHlsZXMgPSBjcmVhdGVUaW1lKCdhdHRhY2hTdHlsZXMnLCBjbXBNZXRhLiR0YWdOYW1lJCk7XG4gICAgY29uc3Qgc2NvcGVJZCA9IGFkZFN0eWxlKEJVSUxELnNoYWRvd0RvbSAmJiBzdXBwb3J0c1NoYWRvdyAmJiBlbG0uc2hhZG93Um9vdCA/IGVsbS5zaGFkb3dSb290IDogZWxtLmdldFJvb3ROb2RlKCksIGNtcE1ldGEsIGhvc3RSZWYuJG1vZGVOYW1lJCwgZWxtKTtcbiAgICBpZiAoKEJVSUxELnNoYWRvd0RvbSB8fCBCVUlMRC5zY29wZWQpICYmIEJVSUxELmNzc0Fubm90YXRpb25zICYmIGZsYWdzICYgMTAgLyogQ01QX0ZMQUdTLm5lZWRzU2NvcGVkRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAvLyBvbmx5IHJlcXVpcmVkIHdoZW4gd2UncmUgTk9UIHVzaW5nIG5hdGl2ZSBzaGFkb3cgZG9tIChzbG90KVxuICAgICAgICAvLyBvciB0aGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZSBzaGFkb3cgZG9tXG4gICAgICAgIC8vIGFuZCB0aGlzIGhvc3QgZWxlbWVudCB3YXMgTk9UIGNyZWF0ZWQgd2l0aCBTU1JcbiAgICAgICAgLy8gbGV0J3MgcGljayBvdXQgdGhlIGlubmVyIGNvbnRlbnQgZm9yIHNsb3QgcHJvamVjdGlvblxuICAgICAgICAvLyBjcmVhdGUgYSBub2RlIHRvIHJlcHJlc2VudCB3aGVyZSB0aGUgb3JpZ2luYWxcbiAgICAgICAgLy8gY29udGVudCB3YXMgZmlyc3QgcGxhY2VkLCB3aGljaCBpcyB1c2VmdWwgbGF0ZXIgb25cbiAgICAgICAgLy8gRE9NIFdSSVRFISFcbiAgICAgICAgZWxtWydzLXNjJ10gPSBzY29wZUlkO1xuICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1oJyk7XG4gICAgICAgIGlmIChCVUlMRC5zY29wZWQgJiYgZmxhZ3MgJiAyIC8qIENNUF9GTEFHUy5zY29wZWRDc3NFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1zJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW5kQXR0YWNoU3R5bGVzKCk7XG59O1xuY29uc3QgZ2V0U2NvcGVJZCA9IChjbXAsIG1vZGUpID0+ICdzYy0nICsgKEJVSUxELm1vZGUgJiYgbW9kZSAmJiBjbXAuJGZsYWdzJCAmIDMyIC8qIENNUF9GTEFHUy5oYXNNb2RlICovID8gY21wLiR0YWdOYW1lJCArICctJyArIG1vZGUgOiBjbXAuJHRhZ05hbWUkKTtcbmNvbnN0IGNvbnZlcnRTY29wZWRUb1NoYWRvdyA9IChjc3MpID0+IGNzcy5yZXBsYWNlKC9cXC9cXCohQChbXlxcL10rKVxcKlxcL1teXFx7XStcXHsvZywgJyQxeycpO1xuLyoqXG4gKiBQcm9kdWN0aW9uIHNldEFjY2Vzc29yKCkgZnVuY3Rpb24gYmFzZWQgb24gUHJlYWN0IGJ5XG4gKiBKYXNvbiBNaWxsZXIgKEBkZXZlbG9waXQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvcHJlYWN0L2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIGNvbXBpbGVyIGFuZCB2ZG9tXG4gKi9cbmNvbnN0IHNldEFjY2Vzc29yID0gKGVsbSwgbWVtYmVyTmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlLCBpc1N2ZywgZmxhZ3MpID0+IHtcbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIGxldCBpc1Byb3AgPSBpc01lbWJlckluRWxlbWVudChlbG0sIG1lbWJlck5hbWUpO1xuICAgICAgICBsZXQgbG4gPSBtZW1iZXJOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChCVUlMRC52ZG9tQ2xhc3MgJiYgbWVtYmVyTmFtZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gZWxtLmNsYXNzTGlzdDtcbiAgICAgICAgICAgIGNvbnN0IG9sZENsYXNzZXMgPSBwYXJzZUNsYXNzTGlzdChvbGRWYWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBuZXdDbGFzc2VzID0gcGFyc2VDbGFzc0xpc3QobmV3VmFsdWUpO1xuICAgICAgICAgICAgY2xhc3NMaXN0LnJlbW92ZSguLi5vbGRDbGFzc2VzLmZpbHRlcigoYykgPT4gYyAmJiAhbmV3Q2xhc3Nlcy5pbmNsdWRlcyhjKSkpO1xuICAgICAgICAgICAgY2xhc3NMaXN0LmFkZCguLi5uZXdDbGFzc2VzLmZpbHRlcigoYykgPT4gYyAmJiAhb2xkQ2xhc3Nlcy5pbmNsdWRlcyhjKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEJVSUxELnZkb21TdHlsZSAmJiBtZW1iZXJOYW1lID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgc3R5bGUgYXR0cmlidXRlLCBjc3MgcHJvcGVydGllcyBhbmQgdmFsdWVzXG4gICAgICAgICAgICBpZiAoQlVJTEQudXBkYXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbmV3VmFsdWUgfHwgbmV3VmFsdWVbcHJvcF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSAmJiBwcm9wLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG0uc3R5bGVbcHJvcF0gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICghb2xkVmFsdWUgfHwgbmV3VmFsdWVbcHJvcF0gIT09IG9sZFZhbHVlW3Byb3BdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgJiYgcHJvcC5pbmNsdWRlcygnLScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0uc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgbmV3VmFsdWVbcHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnN0eWxlW3Byb3BdID0gbmV3VmFsdWVbcHJvcF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudmRvbUtleSAmJiBtZW1iZXJOYW1lID09PSAna2V5JylcbiAgICAgICAgICAgIDtcbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudmRvbVJlZiAmJiBtZW1iZXJOYW1lID09PSAncmVmJykge1xuICAgICAgICAgICAgLy8gbWluaWZpZXIgd2lsbCBjbGVhbiB0aGlzIHVwXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZShlbG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEJVSUxELnZkb21MaXN0ZW5lciAmJlxuICAgICAgICAgICAgKEJVSUxELmxhenlMb2FkID8gIWlzUHJvcCA6ICFlbG0uX19sb29rdXBTZXR0ZXJfXyhtZW1iZXJOYW1lKSkgJiZcbiAgICAgICAgICAgIG1lbWJlck5hbWVbMF0gPT09ICdvJyAmJlxuICAgICAgICAgICAgbWVtYmVyTmFtZVsxXSA9PT0gJ24nKSB7XG4gICAgICAgICAgICAvLyBFdmVudCBIYW5kbGVyc1xuICAgICAgICAgICAgLy8gc28gaWYgdGhlIG1lbWJlciBuYW1lIHN0YXJ0cyB3aXRoIFwib25cIiBhbmQgdGhlIDNyZCBjaGFyYWN0ZXJzIGlzXG4gICAgICAgICAgICAvLyBhIGNhcGl0YWwgbGV0dGVyLCBhbmQgaXQncyBub3QgYWxyZWFkeSBhIG1lbWJlciBvbiB0aGUgZWxlbWVudCxcbiAgICAgICAgICAgIC8vIHRoZW4gd2UncmUgYXNzdW1pbmcgaXQncyBhbiBldmVudCBsaXN0ZW5lclxuICAgICAgICAgICAgaWYgKG1lbWJlck5hbWVbMl0gPT09ICctJykge1xuICAgICAgICAgICAgICAgIC8vIG9uLSBwcmVmaXhlZCBldmVudHNcbiAgICAgICAgICAgICAgICAvLyBhbGxvd3MgdG8gYmUgZXhwbGljaXQgYWJvdXQgdGhlIGRvbSBldmVudCB0byBsaXN0ZW4gd2l0aG91dCBhbnkgbWFnaWNcbiAgICAgICAgICAgICAgICAvLyB1bmRlciB0aGUgaG9vZDpcbiAgICAgICAgICAgICAgICAvLyA8bXktY21wIG9uLWNsaWNrPiAvLyBsaXN0ZW5zIGZvciBcImNsaWNrXCJcbiAgICAgICAgICAgICAgICAvLyA8bXktY21wIG9uLUNsaWNrPiAvLyBsaXN0ZW5zIGZvciBcIkNsaWNrXCJcbiAgICAgICAgICAgICAgICAvLyA8bXktY21wIG9uLWlvbkNoYW5nZT4gLy8gbGlzdGVucyBmb3IgXCJpb25DaGFuZ2VcIlxuICAgICAgICAgICAgICAgIC8vIDxteS1jbXAgb24tRVZFTlRTPiAvLyBsaXN0ZW5zIGZvciBcIkVWRU5UU1wiXG4gICAgICAgICAgICAgICAgbWVtYmVyTmFtZSA9IG1lbWJlck5hbWUuc2xpY2UoMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpc01lbWJlckluRWxlbWVudCh3aW4sIGxuKSkge1xuICAgICAgICAgICAgICAgIC8vIHN0YW5kYXJkIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gdGhlIEpTWCBhdHRyaWJ1dGUgY291bGQgaGF2ZSBiZWVuIFwib25Nb3VzZU92ZXJcIiBhbmQgdGhlXG4gICAgICAgICAgICAgICAgLy8gbWVtYmVyIG5hbWUgXCJvbm1vdXNlb3ZlclwiIGlzIG9uIHRoZSB3aW5kb3cncyBwcm90b3R5cGVcbiAgICAgICAgICAgICAgICAvLyBzbyBsZXQncyBhZGQgdGhlIGxpc3RlbmVyIFwibW91c2VvdmVyXCIsIHdoaWNoIGlzIGFsbCBsb3dlcmNhc2VkXG4gICAgICAgICAgICAgICAgbWVtYmVyTmFtZSA9IGxuLnNsaWNlKDIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gY3VzdG9tIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gdGhlIEpTWCBhdHRyaWJ1dGUgY291bGQgaGF2ZSBiZWVuIFwib25NeUN1c3RvbUV2ZW50XCJcbiAgICAgICAgICAgICAgICAvLyBzbyBsZXQncyB0cmltIG9mZiB0aGUgXCJvblwiIHByZWZpeCBhbmQgbG93ZXJjYXNlIHRoZSBmaXJzdCBjaGFyYWN0ZXJcbiAgICAgICAgICAgICAgICAvLyBhbmQgYWRkIHRoZSBsaXN0ZW5lciBcIm15Q3VzdG9tRXZlbnRcIlxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdCBmb3IgdGhlIGZpcnN0IGNoYXJhY3Rlciwgd2Uga2VlcCB0aGUgZXZlbnQgbmFtZSBjYXNlXG4gICAgICAgICAgICAgICAgbWVtYmVyTmFtZSA9IGxuWzJdICsgbWVtYmVyTmFtZS5zbGljZSgzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBsdC5yZWwoZWxtLCBtZW1iZXJOYW1lLCBvbGRWYWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcGx0LmFlbChlbG0sIG1lbWJlck5hbWUsIG5ld1ZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudmRvbVByb3BPckF0dHIpIHtcbiAgICAgICAgICAgIC8vIFNldCBwcm9wZXJ0eSBpZiBpdCBleGlzdHMgYW5kIGl0J3Mgbm90IGEgU1ZHXG4gICAgICAgICAgICBjb25zdCBpc0NvbXBsZXggPSBpc0NvbXBsZXhUeXBlKG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGlmICgoaXNQcm9wIHx8IChpc0NvbXBsZXggJiYgbmV3VmFsdWUgIT09IG51bGwpKSAmJiAhaXNTdmcpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsbS50YWdOYW1lLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG4gPSBuZXdWYWx1ZSA9PSBudWxsID8gJycgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIFNhZmFyaSwgbW92aW5nIHRoZSA8aW5wdXQ+IGNhcmV0IHdoZW4gcmUtYXNzaWduaW5nIHRoZSBzYW1lIHZhbHVlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lbWJlck5hbWUgPT09ICdsaXN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob2xkVmFsdWUgPT0gbnVsbCB8fCBlbG1bbWVtYmVyTmFtZV0gIT0gbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IG47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG1bbWVtYmVyTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE5lZWQgdG8gbWFudWFsbHkgdXBkYXRlIGF0dHJpYnV0ZSBpZjpcbiAgICAgICAgICAgICAqIC0gbWVtYmVyTmFtZSBpcyBub3QgYW4gYXR0cmlidXRlXG4gICAgICAgICAgICAgKiAtIGlmIHdlIGFyZSByZW5kZXJpbmcgdGhlIGhvc3QgZWxlbWVudCBpbiBvcmRlciB0byByZWZsZWN0IGF0dHJpYnV0ZVxuICAgICAgICAgICAgICogLSBpZiBpdCdzIGEgU1ZHLCBzaW5jZSBwcm9wZXJ0aWVzIG1pZ2h0IG5vdCB3b3JrIGluIDxzdmc+XG4gICAgICAgICAgICAgKiAtIGlmIHRoZSBuZXdWYWx1ZSBpcyBudWxsL3VuZGVmaW5lZCBvciAnZmFsc2UnLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBsZXQgeGxpbmsgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChCVUlMRC52ZG9tWGxpbmspIHtcbiAgICAgICAgICAgICAgICBpZiAobG4gIT09IChsbiA9IGxuLnJlcGxhY2UoL154bGlua1xcOj8vLCAnJykpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbWJlck5hbWUgPSBsbjtcbiAgICAgICAgICAgICAgICAgICAgeGxpbmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA9PSBudWxsIHx8IG5ld1ZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gZmFsc2UgfHwgZWxtLmdldEF0dHJpYnV0ZShtZW1iZXJOYW1lKSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELnZkb21YbGluayAmJiB4bGluaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZU5TKFhMSU5LX05TLCBtZW1iZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUobWVtYmVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgoIWlzUHJvcCB8fCBmbGFncyAmIDQgLyogVk5PREVfRkxBR1MuaXNIb3N0ICovIHx8IGlzU3ZnKSAmJiAhaXNDb21wbGV4KSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBuZXdWYWx1ZSA9PT0gdHJ1ZSA/ICcnIDogbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELnZkb21YbGluayAmJiB4bGluaykge1xuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlTlMoWExJTktfTlMsIG1lbWJlck5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUobWVtYmVyTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBwYXJzZUNsYXNzTGlzdFJlZ2V4ID0gL1xccy87XG5jb25zdCBwYXJzZUNsYXNzTGlzdCA9ICh2YWx1ZSkgPT4gKCF2YWx1ZSA/IFtdIDogdmFsdWUuc3BsaXQocGFyc2VDbGFzc0xpc3RSZWdleCkpO1xuY29uc3QgdXBkYXRlRWxlbWVudCA9IChvbGRWbm9kZSwgbmV3Vm5vZGUsIGlzU3ZnTW9kZSwgbWVtYmVyTmFtZSkgPT4ge1xuICAgIC8vIGlmIHRoZSBlbGVtZW50IHBhc3NlZCBpbiBpcyBhIHNoYWRvdyByb290LCB3aGljaCBpcyBhIGRvY3VtZW50IGZyYWdtZW50XG4gICAgLy8gdGhlbiB3ZSB3YW50IHRvIGJlIGFkZGluZyBhdHRycy9wcm9wcyB0byB0aGUgc2hhZG93IHJvb3QncyBcImhvc3RcIiBlbGVtZW50XG4gICAgLy8gaWYgaXQncyBub3QgYSBzaGFkb3cgcm9vdCwgdGhlbiB3ZSBhZGQgYXR0cnMvcHJvcHMgdG8gdGhlIHNhbWUgZWxlbWVudFxuICAgIGNvbnN0IGVsbSA9IG5ld1Zub2RlLiRlbG0kLm5vZGVUeXBlID09PSAxMSAvKiBOT0RFX1RZUEUuRG9jdW1lbnRGcmFnbWVudCAqLyAmJiBuZXdWbm9kZS4kZWxtJC5ob3N0XG4gICAgICAgID8gbmV3Vm5vZGUuJGVsbSQuaG9zdFxuICAgICAgICA6IG5ld1Zub2RlLiRlbG0kO1xuICAgIGNvbnN0IG9sZFZub2RlQXR0cnMgPSAob2xkVm5vZGUgJiYgb2xkVm5vZGUuJGF0dHJzJCkgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IG5ld1Zub2RlQXR0cnMgPSBuZXdWbm9kZS4kYXR0cnMkIHx8IEVNUFRZX09CSjtcbiAgICBpZiAoQlVJTEQudXBkYXRhYmxlKSB7XG4gICAgICAgIC8vIHJlbW92ZSBhdHRyaWJ1dGVzIG5vIGxvbmdlciBwcmVzZW50IG9uIHRoZSB2bm9kZSBieSBzZXR0aW5nIHRoZW0gdG8gdW5kZWZpbmVkXG4gICAgICAgIGZvciAobWVtYmVyTmFtZSBpbiBvbGRWbm9kZUF0dHJzKSB7XG4gICAgICAgICAgICBpZiAoIShtZW1iZXJOYW1lIGluIG5ld1Zub2RlQXR0cnMpKSB7XG4gICAgICAgICAgICAgICAgc2V0QWNjZXNzb3IoZWxtLCBtZW1iZXJOYW1lLCBvbGRWbm9kZUF0dHJzW21lbWJlck5hbWVdLCB1bmRlZmluZWQsIGlzU3ZnTW9kZSwgbmV3Vm5vZGUuJGZsYWdzJCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gYWRkIG5ldyAmIHVwZGF0ZSBjaGFuZ2VkIGF0dHJpYnV0ZXNcbiAgICBmb3IgKG1lbWJlck5hbWUgaW4gbmV3Vm5vZGVBdHRycykge1xuICAgICAgICBzZXRBY2Nlc3NvcihlbG0sIG1lbWJlck5hbWUsIG9sZFZub2RlQXR0cnNbbWVtYmVyTmFtZV0sIG5ld1Zub2RlQXR0cnNbbWVtYmVyTmFtZV0sIGlzU3ZnTW9kZSwgbmV3Vm5vZGUuJGZsYWdzJCk7XG4gICAgfVxufTtcbi8qKlxuICogQ3JlYXRlIGEgRE9NIE5vZGUgY29ycmVzcG9uZGluZyB0byBvbmUgb2YgdGhlIGNoaWxkcmVuIG9mIGEgZ2l2ZW4gVk5vZGUuXG4gKlxuICogQHBhcmFtIG9sZFBhcmVudFZOb2RlIHRoZSBwYXJlbnQgVk5vZGUgZnJvbSB0aGUgcHJldmlvdXMgcmVuZGVyXG4gKiBAcGFyYW0gbmV3UGFyZW50Vk5vZGUgdGhlIHBhcmVudCBWTm9kZSBmcm9tIHRoZSBjdXJyZW50IHJlbmRlclxuICogQHBhcmFtIGNoaWxkSW5kZXggdGhlIGluZGV4IG9mIHRoZSBWTm9kZSwgaW4gdGhlIF9uZXdfIHBhcmVudCBub2RlJ3NcbiAqIGNoaWxkcmVuLCBmb3Igd2hpY2ggd2Ugd2lsbCBjcmVhdGUgYSBuZXcgRE9NIG5vZGVcbiAqIEBwYXJhbSBwYXJlbnRFbG0gdGhlIHBhcmVudCBET00gbm9kZSB3aGljaCBvdXIgbmV3IG5vZGUgd2lsbCBiZSBhIGNoaWxkIG9mXG4gKiBAcmV0dXJucyB0aGUgbmV3bHkgY3JlYXRlZCBub2RlXG4gKi9cbmNvbnN0IGNyZWF0ZUVsbSA9IChvbGRQYXJlbnRWTm9kZSwgbmV3UGFyZW50Vk5vZGUsIGNoaWxkSW5kZXgsIHBhcmVudEVsbSkgPT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XG4gICAgY29uc3QgbmV3Vk5vZGUgPSBuZXdQYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkSW5kZXhdO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgZWxtO1xuICAgIGxldCBjaGlsZE5vZGU7XG4gICAgbGV0IG9sZFZOb2RlO1xuICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiAhdXNlTmF0aXZlU2hhZG93RG9tKSB7XG4gICAgICAgIC8vIHJlbWVtYmVyIGZvciBsYXRlciB3ZSBuZWVkIHRvIGNoZWNrIHRvIHJlbG9jYXRlIG5vZGVzXG4gICAgICAgIGNoZWNrU2xvdFJlbG9jYXRlID0gdHJ1ZTtcbiAgICAgICAgaWYgKG5ld1ZOb2RlLiR0YWckID09PSAnc2xvdCcpIHtcbiAgICAgICAgICAgIGlmIChzY29wZUlkKSB7XG4gICAgICAgICAgICAgICAgLy8gc2NvcGVkIGNzcyBuZWVkcyB0byBhZGQgaXRzIHNjb3BlZCBpZCB0byB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBwYXJlbnRFbG0uY2xhc3NMaXN0LmFkZChzY29wZUlkICsgJy1zJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWTm9kZS4kZmxhZ3MkIHw9IG5ld1ZOb2RlLiRjaGlsZHJlbiRcbiAgICAgICAgICAgICAgICA/IC8vIHNsb3QgZWxlbWVudCBoYXMgZmFsbGJhY2sgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAyIC8qIFZOT0RFX0ZMQUdTLmlzU2xvdEZhbGxiYWNrICovXG4gICAgICAgICAgICAgICAgOiAvLyBzbG90IGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBmYWxsYmFjayBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIDEgLyogVk5PREVfRkxBR1MuaXNTbG90UmVmZXJlbmNlICovO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChCVUlMRC5pc0RldiAmJiBuZXdWTm9kZS4kZWxtJCkge1xuICAgICAgICBjb25zb2xlRGV2RXJyb3IoYFRoZSBKU1ggJHtuZXdWTm9kZS4kdGV4dCQgIT09IG51bGwgPyBgXCIke25ld1ZOb2RlLiR0ZXh0JH1cIiB0ZXh0YCA6IGBcIiR7bmV3Vk5vZGUuJHRhZyR9XCIgZWxlbWVudGB9IG5vZGUgc2hvdWxkIG5vdCBiZSBzaGFyZWQgd2l0aGluIHRoZSBzYW1lIHJlbmRlcmVyLiBUaGUgcmVuZGVyZXIgY2FjaGVzIGVsZW1lbnQgbG9va3VwcyBpbiBvcmRlciB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLiBIb3dldmVyLCBhIHNpZGUgZWZmZWN0IGZyb20gdGhpcyBpcyB0aGF0IHRoZSBleGFjdCBzYW1lIEpTWCBub2RlIHNob3VsZCBub3QgYmUgcmV1c2VkLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBwbGVhc2Ugc2VlIGh0dHBzOi8vc3RlbmNpbGpzLmNvbS9kb2NzL3RlbXBsYXRpbmctanN4I2F2b2lkLXNoYXJlZC1qc3gtbm9kZXNgKTtcbiAgICB9XG4gICAgaWYgKEJVSUxELnZkb21UZXh0ICYmIG5ld1ZOb2RlLiR0ZXh0JCAhPT0gbnVsbCkge1xuICAgICAgICAvLyBjcmVhdGUgdGV4dCBub2RlXG4gICAgICAgIGVsbSA9IG5ld1ZOb2RlLiRlbG0kID0gZG9jLmNyZWF0ZVRleHROb2RlKG5ld1ZOb2RlLiR0ZXh0JCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIG5ld1ZOb2RlLiRmbGFncyQgJiAxIC8qIFZOT0RFX0ZMQUdTLmlzU2xvdFJlZmVyZW5jZSAqLykge1xuICAgICAgICAvLyBjcmVhdGUgYSBzbG90IHJlZmVyZW5jZSBub2RlXG4gICAgICAgIGVsbSA9IG5ld1ZOb2RlLiRlbG0kID1cbiAgICAgICAgICAgIEJVSUxELmlzRGVidWcgfHwgQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgPyBzbG90UmVmZXJlbmNlRGVidWdOb2RlKG5ld1ZOb2RlKSA6IGRvYy5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoQlVJTEQuc3ZnICYmICFpc1N2Z01vZGUpIHtcbiAgICAgICAgICAgIGlzU3ZnTW9kZSA9IG5ld1ZOb2RlLiR0YWckID09PSAnc3ZnJztcbiAgICAgICAgfVxuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudFxuICAgICAgICBlbG0gPSBuZXdWTm9kZS4kZWxtJCA9IChCVUlMRC5zdmdcbiAgICAgICAgICAgID8gZG9jLmNyZWF0ZUVsZW1lbnROUyhpc1N2Z01vZGUgPyBTVkdfTlMgOiBIVE1MX05TLCBCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiBuZXdWTm9kZS4kZmxhZ3MkICYgMiAvKiBWTk9ERV9GTEFHUy5pc1Nsb3RGYWxsYmFjayAqL1xuICAgICAgICAgICAgICAgID8gJ3Nsb3QtZmInXG4gICAgICAgICAgICAgICAgOiBuZXdWTm9kZS4kdGFnJClcbiAgICAgICAgICAgIDogZG9jLmNyZWF0ZUVsZW1lbnQoQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgbmV3Vk5vZGUuJGZsYWdzJCAmIDIgLyogVk5PREVfRkxBR1MuaXNTbG90RmFsbGJhY2sgKi9cbiAgICAgICAgICAgICAgICA/ICdzbG90LWZiJ1xuICAgICAgICAgICAgICAgIDogbmV3Vk5vZGUuJHRhZyQpKTtcbiAgICAgICAgaWYgKEJVSUxELnN2ZyAmJiBpc1N2Z01vZGUgJiYgbmV3Vk5vZGUuJHRhZyQgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgICAgICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIGNzcyBjbGFzc2VzLCBhdHRycywgcHJvcHMsIGxpc3RlbmVycywgZXRjLlxuICAgICAgICBpZiAoQlVJTEQudmRvbUF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdXBkYXRlRWxlbWVudChudWxsLCBuZXdWTm9kZSwgaXNTdmdNb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKEJVSUxELnNoYWRvd0RvbSB8fCBCVUlMRC5zY29wZWQpICYmIGlzRGVmKHNjb3BlSWQpICYmIGVsbVsncy1zaSddICE9PSBzY29wZUlkKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHNjb3BlSWQgYW5kIHRoaXMgaXMgdGhlIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICAvLyB0aGVuIGxldCdzIGFkZCB0aGUgc2NvcGVJZCBhcyBhIGNzcyBjbGFzc1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoKGVsbVsncy1zaSddID0gc2NvcGVJZCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdWTm9kZS4kY2hpbGRyZW4kKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbmV3Vk5vZGUuJGNoaWxkcmVuJC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgbm9kZVxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNyZWF0ZUVsbShvbGRQYXJlbnRWTm9kZSwgbmV3Vk5vZGUsIGksIGVsbSk7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIG5vZGUgY291bGQgaGF2ZSBiZWVuIG51bGxcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBvdXIgbmV3IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgZWxtLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5zdmcpIHtcbiAgICAgICAgICAgIGlmIChuZXdWTm9kZS4kdGFnJCA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHJlc2V0IHRoZSBTVkcgY29udGV4dCB3aGVuIHdlJ3JlIGV4aXRpbmcgPHN2Zz4gZWxlbWVudFxuICAgICAgICAgICAgICAgIGlzU3ZnTW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZWxtLnRhZ05hbWUgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIC8vIFJlZW50ZXIgU1ZHIGNvbnRleHQgd2hlbiB3ZSdyZSBleGl0aW5nIDxmb3JlaWduT2JqZWN0PiBlbGVtZW50XG4gICAgICAgICAgICAgICAgaXNTdmdNb2RlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgZWxtWydzLWhuJ10gPSBob3N0VGFnTmFtZTtcbiAgICAgICAgaWYgKG5ld1ZOb2RlLiRmbGFncyQgJiAoMiAvKiBWTk9ERV9GTEFHUy5pc1Nsb3RGYWxsYmFjayAqLyB8IDEgLyogVk5PREVfRkxBR1MuaXNTbG90UmVmZXJlbmNlICovKSkge1xuICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhlIGNvbnRlbnQgcmVmZXJlbmNlIGNvbW1lbnRcbiAgICAgICAgICAgIGVsbVsncy1zciddID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIHJlbWVtYmVyIHRoZSBjb250ZW50IHJlZmVyZW5jZSBjb21tZW50XG4gICAgICAgICAgICBlbG1bJ3MtY3InXSA9IGNvbnRlbnRSZWY7XG4gICAgICAgICAgICAvLyByZW1lbWJlciB0aGUgc2xvdCBuYW1lLCBvciBlbXB0eSBzdHJpbmcgZm9yIGRlZmF1bHQgc2xvdFxuICAgICAgICAgICAgZWxtWydzLXNuJ10gPSBuZXdWTm9kZS4kbmFtZSQgfHwgJyc7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB3ZSd2ZSBnb3QgYW4gb2xkIHZub2RlIGZvciB0aGlzIHNsb3RcbiAgICAgICAgICAgIG9sZFZOb2RlID0gb2xkUGFyZW50Vk5vZGUgJiYgb2xkUGFyZW50Vk5vZGUuJGNoaWxkcmVuJCAmJiBvbGRQYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkSW5kZXhdO1xuICAgICAgICAgICAgaWYgKG9sZFZOb2RlICYmIG9sZFZOb2RlLiR0YWckID09PSBuZXdWTm9kZS4kdGFnJCAmJiBvbGRQYXJlbnRWTm9kZS4kZWxtJCkge1xuICAgICAgICAgICAgICAgIC8vIHdlJ3ZlIGdvdCBhbiBvbGQgc2xvdCB2bm9kZSBhbmQgdGhlIHdyYXBwZXIgaXMgYmVpbmcgcmVwbGFjZWRcbiAgICAgICAgICAgICAgICAvLyBzbyBsZXQncyBtb3ZlIHRoZSBvbGQgc2xvdCBjb250ZW50IGJhY2sgdG8gaXQncyBvcmlnaW5hbCBsb2NhdGlvblxuICAgICAgICAgICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24ob2xkUGFyZW50Vk5vZGUuJGVsbSQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxtO1xufTtcbmNvbnN0IHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24gPSAocGFyZW50RWxtLCByZWN1cnNpdmUpID0+IHtcbiAgICBwbHQuJGZsYWdzJCB8PSAxIC8qIFBMQVRGT1JNX0ZMQUdTLmlzVG1wRGlzY29ubmVjdGVkICovO1xuICAgIGNvbnN0IG9sZFNsb3RDaGlsZE5vZGVzID0gcGFyZW50RWxtLmNoaWxkTm9kZXM7XG4gICAgZm9yIChsZXQgaSA9IG9sZFNsb3RDaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IG9sZFNsb3RDaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiAoY2hpbGROb2RlWydzLWhuJ10gIT09IGhvc3RUYWdOYW1lICYmIGNoaWxkTm9kZVsncy1vbCddKSB7XG4gICAgICAgICAgICAvLyAvLyB0aGlzIGNoaWxkIG5vZGUgaW4gdGhlIG9sZCBlbGVtZW50IGlzIGZyb20gYW5vdGhlciBjb21wb25lbnRcbiAgICAgICAgICAgIC8vIC8vIHJlbW92ZSB0aGlzIG5vZGUgZnJvbSB0aGUgb2xkIHNsb3QncyBwYXJlbnRcbiAgICAgICAgICAgIC8vIGNoaWxkTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIC8vIGFuZCByZWxvY2F0ZSBpdCBiYWNrIHRvIGl0J3Mgb3JpZ2luYWwgbG9jYXRpb25cbiAgICAgICAgICAgIHBhcmVudFJlZmVyZW5jZU5vZGUoY2hpbGROb2RlKS5pbnNlcnRCZWZvcmUoY2hpbGROb2RlLCByZWZlcmVuY2VOb2RlKGNoaWxkTm9kZSkpO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBvbGQgb3JpZ2luYWwgbG9jYXRpb24gY29tbWVudCBlbnRpcmVseVxuICAgICAgICAgICAgLy8gbGF0ZXIgb24gdGhlIHBhdGNoIGZ1bmN0aW9uIHdpbGwga25vdyB3aGF0IHRvIGRvXG4gICAgICAgICAgICAvLyBhbmQgbW92ZSB0aGlzIHRvIHRoZSBjb3JyZWN0IHNwb3QgaW4gbmVlZCBiZVxuICAgICAgICAgICAgY2hpbGROb2RlWydzLW9sJ10ucmVtb3ZlKCk7XG4gICAgICAgICAgICBjaGlsZE5vZGVbJ3Mtb2wnXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGNoZWNrU2xvdFJlbG9jYXRlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVjdXJzaXZlKSB7XG4gICAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKGNoaWxkTm9kZSwgcmVjdXJzaXZlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbHQuJGZsYWdzJCAmPSB+MSAvKiBQTEFURk9STV9GTEFHUy5pc1RtcERpc2Nvbm5lY3RlZCAqLztcbn07XG4vKipcbiAqIENyZWF0ZSBET00gbm9kZXMgY29ycmVzcG9uZGluZyB0byBhIGxpc3Qgb2Yge0BsaW5rIGQuVm5vZGV9IG9iamVjdHMgYW5kXG4gKiBhZGQgdGhlbSB0byB0aGUgRE9NIGluIHRoZSBhcHByb3ByaWF0ZSBwbGFjZS5cbiAqXG4gKiBAcGFyYW0gcGFyZW50RWxtIHRoZSBET00gbm9kZSB3aGljaCBzaG91bGQgYmUgdXNlZCBhcyBhIHBhcmVudCBmb3IgdGhlIG5ld1xuICogRE9NIG5vZGVzXG4gKiBAcGFyYW0gYmVmb3JlIGEgY2hpbGQgb2YgdGhlIGBwYXJlbnRFbG1gIHdoaWNoIHRoZSBuZXcgY2hpbGRyZW4gc2hvdWxkIGJlXG4gKiBpbnNlcnRlZCBiZWZvcmUgKG9wdGlvbmFsKVxuICogQHBhcmFtIHBhcmVudFZOb2RlIHRoZSBwYXJlbnQgdmlydHVhbCBET00gbm9kZVxuICogQHBhcmFtIHZub2RlcyB0aGUgbmV3IGNoaWxkIHZpcnR1YWwgRE9NIG5vZGVzIHRvIHByb2R1Y2UgRE9NIG5vZGVzIGZvclxuICogQHBhcmFtIHN0YXJ0SWR4IHRoZSBpbmRleCBpbiB0aGUgY2hpbGQgdmlydHVhbCBET00gbm9kZXMgYXQgd2hpY2ggdG8gc3RhcnRcbiAqIGNyZWF0aW5nIERPTSBub2RlcyAoaW5jbHVzaXZlKVxuICogQHBhcmFtIGVuZElkeCB0aGUgaW5kZXggaW4gdGhlIGNoaWxkIHZpcnR1YWwgRE9NIG5vZGVzIGF0IHdoaWNoIHRvIHN0b3BcbiAqIGNyZWF0aW5nIERPTSBub2RlcyAoaW5jbHVzaXZlKVxuICovXG5jb25zdCBhZGRWbm9kZXMgPSAocGFyZW50RWxtLCBiZWZvcmUsIHBhcmVudFZOb2RlLCB2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgpID0+IHtcbiAgICBsZXQgY29udGFpbmVyRWxtID0gKChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiBwYXJlbnRFbG1bJ3MtY3InXSAmJiBwYXJlbnRFbG1bJ3MtY3InXS5wYXJlbnROb2RlKSB8fCBwYXJlbnRFbG0pO1xuICAgIGxldCBjaGlsZE5vZGU7XG4gICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiBjb250YWluZXJFbG0uc2hhZG93Um9vdCAmJiBjb250YWluZXJFbG0udGFnTmFtZSA9PT0gaG9zdFRhZ05hbWUpIHtcbiAgICAgICAgY29udGFpbmVyRWxtID0gY29udGFpbmVyRWxtLnNoYWRvd1Jvb3Q7XG4gICAgfVxuICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgICAgaWYgKHZub2Rlc1tzdGFydElkeF0pIHtcbiAgICAgICAgICAgIGNoaWxkTm9kZSA9IGNyZWF0ZUVsbShudWxsLCBwYXJlbnRWTm9kZSwgc3RhcnRJZHgsIHBhcmVudEVsbSk7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICAgICAgdm5vZGVzW3N0YXJ0SWR4XS4kZWxtJCA9IGNoaWxkTm9kZTtcbiAgICAgICAgICAgICAgICBjb250YWluZXJFbG0uaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZSwgQlVJTEQuc2xvdFJlbG9jYXRpb24gPyByZWZlcmVuY2VOb2RlKGJlZm9yZSkgOiBiZWZvcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogUmVtb3ZlIHRoZSBET00gZWxlbWVudHMgY29ycmVzcG9uZGluZyB0byBhIGxpc3Qgb2Yge0BsaW5rIGQuVk5vZGV9IG9iamVjdHMuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvLCBmb3IgaW5zdGFuY2UsIGNsZWFuIHVwIGFmdGVyIGEgbGlzdCBvZiBjaGlsZHJlbiB3aGljaFxuICogc2hvdWxkIG5vIGxvbmdlciBiZSBzaG93bi5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFsc28gaGFuZGxlcyBzb21lIG9mIFN0ZW5jaWwncyBzbG90IHJlbG9jYXRpb24gbG9naWMuXG4gKlxuICogQHBhcmFtIHZub2RlcyBhIGxpc3Qgb2YgdmlydHVhbCBET00gbm9kZXMgdG8gcmVtb3ZlXG4gKiBAcGFyYW0gc3RhcnRJZHggdGhlIGluZGV4IGF0IHdoaWNoIHRvIHN0YXJ0IHJlbW92aW5nIG5vZGVzIChpbmNsdXNpdmUpXG4gKiBAcGFyYW0gZW5kSWR4IHRoZSBpbmRleCBhdCB3aGljaCB0byBzdG9wIHJlbW92aW5nIG5vZGVzIChpbmNsdXNpdmUpXG4gKiBAcGFyYW0gdm5vZGUgYSBWTm9kZVxuICogQHBhcmFtIGVsbSBhbiBlbGVtZW50XG4gKi9cbmNvbnN0IHJlbW92ZVZub2RlcyA9ICh2bm9kZXMsIHN0YXJ0SWR4LCBlbmRJZHgsIHZub2RlLCBlbG0pID0+IHtcbiAgICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XG4gICAgICAgIGlmICgodm5vZGUgPSB2bm9kZXNbc3RhcnRJZHhdKSkge1xuICAgICAgICAgICAgZWxtID0gdm5vZGUuJGVsbSQ7XG4gICAgICAgICAgICBjYWxsTm9kZVJlZnModm5vZGUpO1xuICAgICAgICAgICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UncmUgcmVtb3ZpbmcgdGhpcyBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gc28gaXQncyBwb3NzaWJsZSB3ZSBuZWVkIHRvIHNob3cgc2xvdCBmYWxsYmFjayBjb250ZW50IG5vd1xuICAgICAgICAgICAgICAgIGNoZWNrU2xvdEZhbGxiYWNrVmlzaWJpbGl0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGVsbVsncy1vbCddKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgb3JpZ2luYWwgbG9jYXRpb24gY29tbWVudFxuICAgICAgICAgICAgICAgICAgICBlbG1bJ3Mtb2wnXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGl0J3MgcG9zc2libGUgdGhhdCBjaGlsZCBub2RlcyBvZiB0aGUgbm9kZVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGF0J3MgYmVpbmcgcmVtb3ZlZCBhcmUgc2xvdCBub2Rlc1xuICAgICAgICAgICAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKGVsbSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSB2bm9kZSdzIGVsZW1lbnQgZnJvbSB0aGUgZG9tXG4gICAgICAgICAgICBlbG0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gKiBSZWNvbmNpbGUgdGhlIGNoaWxkcmVuIG9mIGEgbmV3IFZOb2RlIHdpdGggdGhlIGNoaWxkcmVuIG9mIGFuIG9sZCBWTm9kZSBieVxuICogdHJhdmVyc2luZyB0aGUgdHdvIGNvbGxlY3Rpb25zIG9mIGNoaWxkcmVuLCBpZGVudGlmeWluZyBub2RlcyB0aGF0IGFyZVxuICogY29uc2VydmVkIG9yIGNoYW5nZWQsIGNhbGxpbmcgb3V0IHRvIGBwYXRjaGAgdG8gbWFrZSBhbnkgbmVjZXNzYXJ5XG4gKiB1cGRhdGVzIHRvIHRoZSBET00sIGFuZCByZWFycmFuZ2luZyBET00gbm9kZXMgYXMgbmVlZGVkLlxuICpcbiAqIFRoZSBhbGdvcml0aG0gZm9yIHJlY29uY2lsaW5nIGNoaWxkcmVuIHdvcmtzIGJ5IGFuYWx5emluZyB0d28gJ3dpbmRvd3MnIG9udG9cbiAqIHRoZSB0d28gYXJyYXlzIG9mIGNoaWxkcmVuIChgb2xkQ2hgIGFuZCBgbmV3Q2hgKS4gV2Uga2VlcCB0cmFjayBvZiB0aGVcbiAqICd3aW5kb3dzJyBieSBzdG9yaW5nIHN0YXJ0IGFuZCBlbmQgaW5kaWNlcyBhbmQgcmVmZXJlbmNlcyB0byB0aGVcbiAqIGNvcnJlc3BvbmRpbmcgYXJyYXkgZW50cmllcy4gSW5pdGlhbGx5IHRoZSB0d28gJ3dpbmRvd3MnIGFyZSBiYXNpY2FsbHkgZXF1YWxcbiAqIHRvIHRoZSBlbnRpcmUgYXJyYXksIGJ1dCB3ZSBwcm9ncmVzc2l2ZWx5IG5hcnJvdyB0aGUgd2luZG93cyB1bnRpbCB0aGVyZSBhcmVcbiAqIG5vIGNoaWxkcmVuIGxlZnQgdG8gdXBkYXRlIGJ5IGRvaW5nIHRoZSBmb2xsb3dpbmc6XG4gKlxuICogMS4gU2tpcCBhbnkgYG51bGxgIGVudHJpZXMgYXQgdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIHR3byBhcnJheXMsIHNvXG4gKiAgICB0aGF0IGlmIHdlIGhhdmUgYW4gaW5pdGlhbCBhcnJheSBsaWtlIHRoZSBmb2xsb3dpbmcgd2UnbGwgZW5kIHVwIGRlYWxpbmdcbiAqICAgIG9ubHkgd2l0aCBhIHdpbmRvdyBib3VuZGVkIGJ5IHRoZSBoaWdobGlnaHRlZCBlbGVtZW50czpcbiAqXG4gKiAgICBbbnVsbCwgbnVsbCwgVk5vZGUxICwgLi4uICwgVk5vZGUyLCBudWxsLCBudWxsXVxuICogICAgICAgICAgICAgICAgIF5eXl5eXiAgICAgICAgIF5eXl5eXlxuICpcbiAqIDIuIENoZWNrIHRvIHNlZSBpZiB0aGUgZWxlbWVudHMgYXQgdGhlIGhlYWQgYW5kIHRhaWwgcG9zaXRpb25zIGFyZSBlcXVhbFxuICogICAgYWNyb3NzIHRoZSB3aW5kb3dzLiBUaGlzIHdpbGwgYmFzaWNhbGx5IGRldGVjdCBlbGVtZW50cyB3aGljaCBoYXZlbid0XG4gKiAgICBiZWVuIGFkZGVkLCByZW1vdmVkLCBvciBjaGFuZ2VkIHBvc2l0aW9uLCBpLmUuIGlmIHlvdSBoYWQgdGhlIGZvbGxvd2luZ1xuICogICAgVk5vZGUgZWxlbWVudHMgKHJlcHJlc2VudGVkIGFzIEhUTUwpOlxuICpcbiAqICAgIG9sZFZOb2RlOiBgPGRpdj48cD48c3Bhbj5IRVk8L3NwYW4+PC9wPjwvZGl2PmBcbiAqICAgIG5ld1ZOb2RlOiBgPGRpdj48cD48c3Bhbj5USEVSRTwvc3Bhbj48L3A+PC9kaXY+YFxuICpcbiAqICAgIFRoZW4gd2hlbiBjb21wYXJpbmcgdGhlIGNoaWxkcmVuIG9mIHRoZSBgPGRpdj5gIHRhZyB3ZSBjaGVjayB0aGUgZXF1YWxpdHlcbiAqICAgIG9mIHRoZSBWTm9kZXMgY29ycmVzcG9uZGluZyB0byB0aGUgYDxwPmAgdGFncyBhbmQsIHNpbmNlIHRoZXkgYXJlIHRoZVxuICogICAgc2FtZSB0YWcgaW4gdGhlIHNhbWUgcG9zaXRpb24sIHdlJ2QgYmUgYWJsZSB0byBhdm9pZCBjb21wbGV0ZWx5XG4gKiAgICByZS1yZW5kZXJpbmcgdGhlIHN1YnRyZWUgdW5kZXIgdGhlbSB3aXRoIGEgbmV3IERPTSBlbGVtZW50IGFuZCB3b3VsZCBqdXN0XG4gKiAgICBjYWxsIG91dCB0byBgcGF0Y2hgIHRvIGhhbmRsZSByZWNvbmNpbGluZyB0aGVpciBjaGlsZHJlbiBhbmQgc28gb24uXG4gKlxuICogMy4gQ2hlY2ssIGZvciBib3RoIHdpbmRvd3MsIHRvIHNlZSBpZiB0aGUgZWxlbWVudCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZVxuICogICAgd2luZG93IGNvcnJlc3BvbmRzIHRvIHRoZSBlbGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIG90aGVyIHdpbmRvdy4gVGhpcyBpc1xuICogICAgYSBoZXVyaXN0aWMgd2hpY2ggd2lsbCBsZXQgdXMgaWRlbnRpZnkgX3NvbWVfIHNpdHVhdGlvbnMgaW4gd2hpY2hcbiAqICAgIGVsZW1lbnRzIGhhdmUgY2hhbmdlZCBwb3NpdGlvbiwgZm9yIGluc3RhbmNlIGl0IF9zaG91bGRfIGRldGVjdCB0aGF0IHRoZVxuICogICAgY2hpbGRyZW4gbm9kZXMgdGhlbXNlbHZlcyBoYXZlIG5vdCBjaGFuZ2VkIGJ1dCBtZXJlbHkgbW92ZWQgaW4gdGhlXG4gKiAgICBmb2xsb3dpbmcgZXhhbXBsZTpcbiAqXG4gKiAgICBvbGRWTm9kZTogYDxkaXY+PGVsZW1lbnQtb25lIC8+PGVsZW1lbnQtdHdvIC8+PC9kaXY+YFxuICogICAgbmV3Vk5vZGU6IGA8ZGl2PjxlbGVtZW50LXR3byAvPjxlbGVtZW50LW9uZSAvPjwvZGl2PmBcbiAqXG4gKiAgICBJZiB3ZSBmaW5kIGNhc2VzIGxpa2UgdGhpcyB0aGVuIHdlIGFsc28gbmVlZCB0byBtb3ZlIHRoZSBjb25jcmV0ZSBET01cbiAqICAgIGVsZW1lbnRzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIG1vdmVkIGNoaWxkcmVuIHRvIHdyaXRlIHRoZSByZS1vcmRlciB0byB0aGVcbiAqICAgIERPTS5cbiAqXG4gKiA0LiBGaW5hbGx5LCBpZiBWTm9kZXMgaGF2ZSB0aGUgYGtleWAgYXR0cmlidXRlIHNldCBvbiB0aGVtIHdlIGNoZWNrIGZvciBhbnlcbiAqICAgIG5vZGVzIGluIHRoZSBvbGQgY2hpbGRyZW4gd2hpY2ggaGF2ZSB0aGUgc2FtZSBrZXkgYXMgdGhlIGZpcnN0IGVsZW1lbnQgaW5cbiAqICAgIG91ciB3aW5kb3cgb24gdGhlIG5ldyBjaGlsZHJlbi4gSWYgd2UgZmluZCBzdWNoIGEgbm9kZSB3ZSBoYW5kbGUgY2FsbGluZ1xuICogICAgb3V0IHRvIGBwYXRjaGAsIG1vdmluZyByZWxldmFudCBET00gbm9kZXMsIGFuZCBzbyBvbiwgaW4gYWNjb3JkYW5jZSB3aXRoXG4gKiAgICB3aGF0IHdlIGZpbmQuXG4gKlxuICogRmluYWxseSwgb25jZSB3ZSd2ZSBuYXJyb3dlZCBvdXIgJ3dpbmRvd3MnIHRvIHRoZSBwb2ludCB0aGF0IGVpdGhlciBvZiB0aGVtXG4gKiBjb2xsYXBzZSAoaS5lLiB0aGV5IGhhdmUgbGVuZ3RoIDApIHdlIHRoZW4gaGFuZGxlIGFueSByZW1haW5pbmcgVk5vZGVcbiAqIGluc2VydGlvbiBvciBkZWxldGlvbiB0aGF0IG5lZWRzIHRvIGhhcHBlbiB0byBnZXQgYSBET00gc3RhdGUgdGhhdCBjb3JyZWN0bHlcbiAqIHJlZmxlY3RzIHRoZSBuZXcgY2hpbGQgVk5vZGVzLiBJZiwgZm9yIGluc3RhbmNlLCBhZnRlciBvdXIgd2luZG93IG9uIHRoZSBvbGRcbiAqIGNoaWxkcmVuIGhhcyBjb2xsYXBzZWQgd2Ugc3RpbGwgaGF2ZSBtb3JlIG5vZGVzIG9uIHRoZSBuZXcgY2hpbGRyZW4gdGhhdFxuICogd2UgaGF2ZW4ndCBkZWFsdCB3aXRoIHlldCB0aGVuIHdlIG5lZWQgdG8gYWRkIHRoZW0sIG9yIGlmIHRoZSBuZXcgY2hpbGRyZW5cbiAqIGNvbGxhcHNlIGJ1dCB3ZSBzdGlsbCBoYXZlIHVuaGFuZGxlZCBfb2xkXyBjaGlsZHJlbiB0aGVuIHdlIG5lZWQgdG8gbWFrZVxuICogc3VyZSB0aGUgY29ycmVzcG9uZGluZyBET00gbm9kZXMgYXJlIHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHBhcmVudEVsbSB0aGUgbm9kZSBpbnRvIHdoaWNoIHRoZSBwYXJlbnQgVk5vZGUgaXMgcmVuZGVyZWRcbiAqIEBwYXJhbSBvbGRDaCB0aGUgb2xkIGNoaWxkcmVuIG9mIHRoZSBwYXJlbnQgbm9kZVxuICogQHBhcmFtIG5ld1ZOb2RlIHRoZSBuZXcgVk5vZGUgd2hpY2ggd2lsbCByZXBsYWNlIHRoZSBwYXJlbnRcbiAqIEBwYXJhbSBuZXdDaCB0aGUgbmV3IGNoaWxkcmVuIG9mIHRoZSBwYXJlbnQgbm9kZVxuICovXG5jb25zdCB1cGRhdGVDaGlsZHJlbiA9IChwYXJlbnRFbG0sIG9sZENoLCBuZXdWTm9kZSwgbmV3Q2gpID0+IHtcbiAgICBsZXQgb2xkU3RhcnRJZHggPSAwO1xuICAgIGxldCBuZXdTdGFydElkeCA9IDA7XG4gICAgbGV0IGlkeEluT2xkID0gMDtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IG9sZEVuZElkeCA9IG9sZENoLmxlbmd0aCAtIDE7XG4gICAgbGV0IG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFswXTtcbiAgICBsZXQgb2xkRW5kVm5vZGUgPSBvbGRDaFtvbGRFbmRJZHhdO1xuICAgIGxldCBuZXdFbmRJZHggPSBuZXdDaC5sZW5ndGggLSAxO1xuICAgIGxldCBuZXdTdGFydFZub2RlID0gbmV3Q2hbMF07XG4gICAgbGV0IG5ld0VuZFZub2RlID0gbmV3Q2hbbmV3RW5kSWR4XTtcbiAgICBsZXQgbm9kZTtcbiAgICBsZXQgZWxtVG9Nb3ZlO1xuICAgIHdoaWxlIChvbGRTdGFydElkeCA8PSBvbGRFbmRJZHggJiYgbmV3U3RhcnRJZHggPD0gbmV3RW5kSWR4KSB7XG4gICAgICAgIGlmIChvbGRTdGFydFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFZOb2RlIG1pZ2h0IGhhdmUgYmVlbiBtb3ZlZCBsZWZ0XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2xkRW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3U3RhcnRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3RW5kVm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzdGFydCBub2RlcyBhcmUgdGhlIHNhbWUgdGhlbiB3ZSBzaG91bGQgcGF0Y2ggdGhlIG5ldyBWTm9kZVxuICAgICAgICAgICAgLy8gb250byB0aGUgb2xkIG9uZSwgYW5kIGluY3JlbWVudCBvdXIgYG5ld1N0YXJ0SWR4YCBhbmQgYG9sZFN0YXJ0SWR4YFxuICAgICAgICAgICAgLy8gaW5kaWNlcyB0byByZWZsZWN0IHRoYXQuIFdlIGRvbid0IG5lZWQgdG8gbW92ZSBhbnkgRE9NIE5vZGVzIGFyb3VuZFxuICAgICAgICAgICAgLy8gc2luY2UgdGhpbmdzIGFyZSBtYXRjaGVkIHVwIGluIG9yZGVyLlxuICAgICAgICAgICAgcGF0Y2gob2xkU3RhcnRWbm9kZSwgbmV3U3RhcnRWbm9kZSk7XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlKSkge1xuICAgICAgICAgICAgLy8gbGlrZXdpc2UsIGlmIHRoZSBlbmQgbm9kZXMgYXJlIHRoZSBzYW1lIHdlIHBhdGNoIG5ldyBvbnRvIG9sZCBhbmRcbiAgICAgICAgICAgIC8vIGRlY3JlbWVudCBvdXIgZW5kIGluZGljZXMsIGFuZCBhbHNvIGxpa2V3aXNlIGluIHRoaXMgY2FzZSB3ZSBkb24ndFxuICAgICAgICAgICAgLy8gbmVlZCB0byBtb3ZlIGFueSBET00gTm9kZXMuXG4gICAgICAgICAgICBwYXRjaChvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUpO1xuICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgICAgIC8vIGNhc2U6IFwiVm5vZGUgbW92ZWQgcmlnaHRcIlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFdlJ3ZlIGZvdW5kIHRoYXQgdGhlIGxhc3Qgbm9kZSBpbiBvdXIgd2luZG93IG9uIHRoZSBuZXcgY2hpbGRyZW4gaXNcbiAgICAgICAgICAgIC8vIHRoZSBzYW1lIFZOb2RlIGFzIHRoZSBfZmlyc3RfIG5vZGUgaW4gb3VyIHdpbmRvdyBvbiB0aGUgb2xkIGNoaWxkcmVuXG4gICAgICAgICAgICAvLyB3ZSdyZSBkZWFsaW5nIHdpdGggbm93LiBWaXN1YWxseSwgdGhpcyBpcyB0aGUgbGF5b3V0IG9mIHRoZXNlIHR3b1xuICAgICAgICAgICAgLy8gbm9kZXM6XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gbmV3Q2g6IFsuLi4sIG5ld1N0YXJ0Vm5vZGUgLCAuLi4gLCBuZXdFbmRWbm9kZSAsIC4uLl1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXl5eXl5eXl5eXl5cbiAgICAgICAgICAgIC8vIG9sZENoOiBbLi4uLCBvbGRTdGFydFZub2RlICwgLi4uICwgb2xkRW5kVm5vZGUgLCAuLi5dXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgXl5eXl5eXl5eXl5eXlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEluIHRoaXMgc2l0dWF0aW9uIHdlIG5lZWQgdG8gcGF0Y2ggYG5ld0VuZFZub2RlYCBvbnRvIGBvbGRTdGFydFZub2RlYFxuICAgICAgICAgICAgLy8gYW5kIG1vdmUgdGhlIERPTSBlbGVtZW50IGZvciBgb2xkU3RhcnRWbm9kZWAuXG4gICAgICAgICAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgKG9sZFN0YXJ0Vm5vZGUuJHRhZyQgPT09ICdzbG90JyB8fCBuZXdFbmRWbm9kZS4kdGFnJCA9PT0gJ3Nsb3QnKSkge1xuICAgICAgICAgICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24ob2xkU3RhcnRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRjaChvbGRTdGFydFZub2RlLCBuZXdFbmRWbm9kZSk7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIG1vdmUgdGhlIGVsZW1lbnQgZm9yIGBvbGRTdGFydFZub2RlYCBpbnRvIGEgcG9zaXRpb24gd2hpY2hcbiAgICAgICAgICAgIC8vIHdpbGwgYmUgYXBwcm9wcmlhdGUgZm9yIGBuZXdFbmRWbm9kZWAuIEZvciB0aGlzIHdlIGNhbiB1c2VcbiAgICAgICAgICAgIC8vIGAuaW5zZXJ0QmVmb3JlYCBhbmQgYG9sZEVuZFZub2RlLiRlbG0kLm5leHRTaWJsaW5nYC4gSWYgdGhlcmUgaXMgYVxuICAgICAgICAgICAgLy8gc2libGluZyBmb3IgYG9sZEVuZFZub2RlLiRlbG0kYCB0aGVuIHdlIHdhbnQgdG8gbW92ZSB0aGUgRE9NIG5vZGUgZm9yXG4gICAgICAgICAgICAvLyBgb2xkU3RhcnRWbm9kZWAgYmV0d2VlbiBgb2xkRW5kVm5vZGVgIGFuZCBpdCdzIHNpYmxpbmcsIGxpa2Ugc286XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gPG9sZC1zdGFydC1ub2RlIC8+XG4gICAgICAgICAgICAvLyA8c29tZS1pbnRlcnZlbmluZy1ub2RlIC8+XG4gICAgICAgICAgICAvLyA8b2xkLWVuZC1ub2RlIC8+XG4gICAgICAgICAgICAvLyA8IS0tIC0+ICAgICAgICAgICAgICA8LS0gYG9sZFN0YXJ0Vm5vZGUuJGVsbSRgIHNob3VsZCBiZSBpbnNlcnRlZCBoZXJlXG4gICAgICAgICAgICAvLyA8bmV4dC1zaWJsaW5nIC8+XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSWYgaW5zdGVhZCBgb2xkRW5kVm5vZGUuJGVsbSRgIGhhcyBubyBzaWJsaW5nIHRoZW4gd2UganVzdCB3YW50IHRvIHB1dFxuICAgICAgICAgICAgLy8gdGhlIG5vZGUgZm9yIGBvbGRTdGFydFZub2RlYCBhdCB0aGUgZW5kIG9mIHRoZSBjaGlsZHJlbiBvZlxuICAgICAgICAgICAgLy8gYHBhcmVudEVsbWAuIEx1Y2tpbHksIGBOb2RlLm5leHRTaWJsaW5nYCB3aWxsIHJldHVybiBgbnVsbGAgaWYgdGhlcmVcbiAgICAgICAgICAgIC8vIGFyZW4ndCBhbnkgc2libGluZ3MsIGFuZCBwYXNzaW5nIGBudWxsYCB0byBgTm9kZS5pbnNlcnRCZWZvcmVgIHdpbGxcbiAgICAgICAgICAgIC8vIGFwcGVuZCBpdCB0byB0aGUgY2hpbGRyZW4gb2YgdGhlIHBhcmVudCBlbGVtZW50LlxuICAgICAgICAgICAgcGFyZW50RWxtLmluc2VydEJlZm9yZShvbGRTdGFydFZub2RlLiRlbG0kLCBvbGRFbmRWbm9kZS4kZWxtJC5uZXh0U2libGluZyk7XG4gICAgICAgICAgICBvbGRTdGFydFZub2RlID0gb2xkQ2hbKytvbGRTdGFydElkeF07XG4gICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSkpIHtcbiAgICAgICAgICAgIC8vIGNhc2U6IFwiVm5vZGUgbW92ZWQgbGVmdFwiXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gV2UndmUgZm91bmQgdGhhdCB0aGUgZmlyc3Qgbm9kZSBpbiBvdXIgd2luZG93IG9uIHRoZSBuZXcgY2hpbGRyZW4gaXNcbiAgICAgICAgICAgIC8vIHRoZSBzYW1lIFZOb2RlIGFzIHRoZSBfbGFzdF8gbm9kZSBpbiBvdXIgd2luZG93IG9uIHRoZSBvbGQgY2hpbGRyZW4uXG4gICAgICAgICAgICAvLyBWaXN1YWxseSwgdGhpcyBpcyB0aGUgbGF5b3V0IG9mIHRoZXNlIHR3byBub2RlczpcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBuZXdDaDogWy4uLiwgbmV3U3RhcnRWbm9kZSAsIC4uLiAsIG5ld0VuZFZub2RlICwgLi4uXVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgIF5eXl5eXl5eXl5eXl5cbiAgICAgICAgICAgIC8vIG9sZENoOiBbLi4uLCBvbGRTdGFydFZub2RlICwgLi4uICwgb2xkRW5kVm5vZGUgLCAuLi5dXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF5eXl5eXl5eXl5eXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSW4gdGhpcyBzaXR1YXRpb24gd2UgbmVlZCB0byBwYXRjaCBgbmV3U3RhcnRWbm9kZWAgb250byBgb2xkRW5kVm5vZGVgXG4gICAgICAgICAgICAvLyAod2hpY2ggd2lsbCBoYW5kbGUgdXBkYXRpbmcgYW55IGNoYW5nZWQgYXR0cmlidXRlcywgcmVjb25jaWxpbmcgdGhlaXJcbiAgICAgICAgICAgIC8vIGNoaWxkcmVuIGV0YykgYnV0IHdlIGFsc28gbmVlZCB0byBtb3ZlIHRoZSBET00gbm9kZSB0byB3aGljaFxuICAgICAgICAgICAgLy8gYG9sZEVuZFZub2RlYCBjb3JyZXNwb25kcy5cbiAgICAgICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiAob2xkU3RhcnRWbm9kZS4kdGFnJCA9PT0gJ3Nsb3QnIHx8IG5ld0VuZFZub2RlLiR0YWckID09PSAnc2xvdCcpKSB7XG4gICAgICAgICAgICAgICAgcHV0QmFja0luT3JpZ2luYWxMb2NhdGlvbihvbGRFbmRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXRjaChvbGRFbmRWbm9kZSwgbmV3U3RhcnRWbm9kZSk7XG4gICAgICAgICAgICAvLyBXZSd2ZSBhbHJlYWR5IGNoZWNrZWQgYWJvdmUgaWYgYG9sZFN0YXJ0Vm5vZGVgIGFuZCBgbmV3U3RhcnRWbm9kZWAgYXJlXG4gICAgICAgICAgICAvLyB0aGUgc2FtZSBub2RlLCBzbyBzaW5jZSB3ZSdyZSBoZXJlIHdlIGtub3cgdGhhdCB0aGV5IGFyZSBub3QuIFRodXMgd2VcbiAgICAgICAgICAgIC8vIGNhbiBtb3ZlIHRoZSBlbGVtZW50IGZvciBgb2xkRW5kVm5vZGVgIF9iZWZvcmVfIHRoZSBlbGVtZW50IGZvclxuICAgICAgICAgICAgLy8gYG9sZFN0YXJ0Vm5vZGVgLCBsZWF2aW5nIGBvbGRTdGFydFZub2RlYCB0byBiZSByZWNvbmNpbGVkIGluIHRoZVxuICAgICAgICAgICAgLy8gZnV0dXJlLlxuICAgICAgICAgICAgcGFyZW50RWxtLmluc2VydEJlZm9yZShvbGRFbmRWbm9kZS4kZWxtJCwgb2xkU3RhcnRWbm9kZS4kZWxtJCk7XG4gICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEhlcmUgd2UgZG8gc29tZSBjaGVja3MgdG8gbWF0Y2ggdXAgb2xkIGFuZCBuZXcgbm9kZXMgYmFzZWQgb24gdGhlXG4gICAgICAgICAgICAvLyBgJGtleSRgIGF0dHJpYnV0ZSwgd2hpY2ggaXMgc2V0IGJ5IHB1dHRpbmcgYSBga2V5PVwibXkta2V5XCJgIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gaW4gdGhlIEpTWCBmb3IgYSBET00gZWxlbWVudCBpbiB0aGUgaW1wbGVtZW50YXRpb24gb2YgYSBTdGVuY2lsXG4gICAgICAgICAgICAvLyBjb21wb25lbnQuXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgdG8gc2VlIGlmIHRoZXJlIGFyZSBhbnkgbm9kZXMgaW4gdGhlIGFycmF5IG9mIG9sZFxuICAgICAgICAgICAgLy8gY2hpbGRyZW4gd2hpY2ggaGF2ZSB0aGUgc2FtZSBrZXkgYXMgdGhlIGZpcnN0IG5vZGUgaW4gdGhlIG5ld1xuICAgICAgICAgICAgLy8gY2hpbGRyZW4uXG4gICAgICAgICAgICBpZHhJbk9sZCA9IC0xO1xuICAgICAgICAgICAgaWYgKEJVSUxELnZkb21LZXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBvbGRTdGFydElkeDsgaSA8PSBvbGRFbmRJZHg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob2xkQ2hbaV0gJiYgb2xkQ2hbaV0uJGtleSQgIT09IG51bGwgJiYgb2xkQ2hbaV0uJGtleSQgPT09IG5ld1N0YXJ0Vm5vZGUuJGtleSQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeEluT2xkID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELnZkb21LZXkgJiYgaWR4SW5PbGQgPj0gMCkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGZvdW5kIGEgbm9kZSBpbiB0aGUgb2xkIGNoaWxkcmVuIHdoaWNoIG1hdGNoZXMgdXAgd2l0aCB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAvLyBub2RlIGluIHRoZSBuZXcgY2hpbGRyZW4hIFNvIGxldCdzIGRlYWwgd2l0aCB0aGF0XG4gICAgICAgICAgICAgICAgZWxtVG9Nb3ZlID0gb2xkQ2hbaWR4SW5PbGRdO1xuICAgICAgICAgICAgICAgIGlmIChlbG1Ub01vdmUuJHRhZyQgIT09IG5ld1N0YXJ0Vm5vZGUuJHRhZyQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHRhZyBkb2Vzbid0IG1hdGNoIHNvIHdlJ2xsIG5lZWQgYSBuZXcgRE9NIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNyZWF0ZUVsbShvbGRDaCAmJiBvbGRDaFtuZXdTdGFydElkeF0sIG5ld1ZOb2RlLCBpZHhJbk9sZCwgcGFyZW50RWxtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGNoKGVsbVRvTW92ZSwgbmV3U3RhcnRWbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGludmFsaWRhdGUgdGhlIG1hdGNoaW5nIG9sZCBub2RlIHNvIHRoYXQgd2Ugd29uJ3QgdHJ5IHRvIHVwZGF0ZSBpdFxuICAgICAgICAgICAgICAgICAgICAvLyBhZ2FpbiBsYXRlciBvblxuICAgICAgICAgICAgICAgICAgICBvbGRDaFtpZHhJbk9sZF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBlbG1Ub01vdmUuJGVsbSQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFdlIGVpdGhlciBkaWRuJ3QgZmluZCBhbiBlbGVtZW50IGluIHRoZSBvbGQgY2hpbGRyZW4gdGhhdCBtYXRjaGVzXG4gICAgICAgICAgICAgICAgLy8gdGhlIGtleSBvZiB0aGUgZmlyc3QgbmV3IGNoaWxkIE9SIHRoZSBidWlsZCBpcyBub3QgdXNpbmcgYGtleWBcbiAgICAgICAgICAgICAgICAvLyBhdHRyaWJ1dGVzIGF0IGFsbC4gSW4gZWl0aGVyIGNhc2Ugd2UgbmVlZCB0byBjcmVhdGUgYSBuZXcgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGZvciB0aGUgbmV3IG5vZGUuXG4gICAgICAgICAgICAgICAgbm9kZSA9IGNyZWF0ZUVsbShvbGRDaCAmJiBvbGRDaFtuZXdTdGFydElkeF0sIG5ld1ZOb2RlLCBuZXdTdGFydElkeCwgcGFyZW50RWxtKTtcbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGNyZWF0ZWQgYSBuZXcgbm9kZSB0aGVuIGhhbmRsZSBpbnNlcnRpbmcgaXQgdG8gdGhlIERPTVxuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRSZWZlcmVuY2VOb2RlKG9sZFN0YXJ0Vm5vZGUuJGVsbSQpLmluc2VydEJlZm9yZShub2RlLCByZWZlcmVuY2VOb2RlKG9sZFN0YXJ0Vm5vZGUuJGVsbSQpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUuJGVsbSQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobm9kZSwgb2xkU3RhcnRWbm9kZS4kZWxtJCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChvbGRTdGFydElkeCA+IG9sZEVuZElkeCkge1xuICAgICAgICAvLyB3ZSBoYXZlIHNvbWUgbW9yZSBuZXcgbm9kZXMgdG8gYWRkIHdoaWNoIGRvbid0IG1hdGNoIHVwIHdpdGggb2xkIG5vZGVzXG4gICAgICAgIGFkZFZub2RlcyhwYXJlbnRFbG0sIG5ld0NoW25ld0VuZElkeCArIDFdID09IG51bGwgPyBudWxsIDogbmV3Q2hbbmV3RW5kSWR4ICsgMV0uJGVsbSQsIG5ld1ZOb2RlLCBuZXdDaCwgbmV3U3RhcnRJZHgsIG5ld0VuZElkeCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKEJVSUxELnVwZGF0YWJsZSAmJiBuZXdTdGFydElkeCA+IG5ld0VuZElkeCkge1xuICAgICAgICAvLyB0aGVyZSBhcmUgbm9kZXMgaW4gdGhlIGBvbGRDaGAgYXJyYXkgd2hpY2ggbm8gbG9uZ2VyIGNvcnJlc3BvbmQgdG8gbm9kZXNcbiAgICAgICAgLy8gaW4gdGhlIG5ldyBhcnJheSwgc28gbGV0cyByZW1vdmUgdGhlbSAod2hpY2ggZW50YWlscyBjbGVhbmluZyB1cCB0aGVcbiAgICAgICAgLy8gcmVsZXZhbnQgRE9NIG5vZGVzKVxuICAgICAgICByZW1vdmVWbm9kZXMob2xkQ2gsIG9sZFN0YXJ0SWR4LCBvbGRFbmRJZHgpO1xuICAgIH1cbn07XG4vKipcbiAqIENvbXBhcmUgdHdvIFZOb2RlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgdGhlIHNhbWVcbiAqXG4gKiAqKk5CKio6IFRoaXMgZnVuY3Rpb24gaXMgYW4gZXF1YWxpdHkgX2hldXJpc3RpY18gYmFzZWQgb24gdGhlIGF2YWlsYWJsZVxuICogaW5mb3JtYXRpb24gc2V0IG9uIHRoZSB0d28gVk5vZGVzIGFuZCBjYW4gYmUgbWlzbGVhZGluZyB1bmRlciBjZXJ0YWluXG4gKiBjaXJjdW1zdGFuY2VzLiBJbiBwYXJ0aWN1bGFyLCBpZiB0aGUgdHdvIG5vZGVzIGRvIG5vdCBoYXZlIGBrZXlgIGF0dHJzXG4gKiAoYXZhaWxhYmxlIHVuZGVyIGAka2V5JGAgb24gVk5vZGVzKSB0aGVuIHRoZSBmdW5jdGlvbiBmYWxscyBiYWNrIG9uIG1lcmVseVxuICogY2hlY2tpbmcgdGhhdCB0aGV5IGhhdmUgdGhlIHNhbWUgdGFnLlxuICpcbiAqIFNvLCBpbiBvdGhlciB3b3JkcywgaWYgYGtleWAgYXR0cnMgYXJlIG5vdCBzZXQgb24gVk5vZGVzIHdoaWNoIG1heSBiZVxuICogY2hhbmdpbmcgb3JkZXIgd2l0aGluIGEgYGNoaWxkcmVuYCBhcnJheSBvciBzb21ldGhpbmcgYWxvbmcgdGhvc2UgbGluZXMgdGhlblxuICogd2UgY291bGQgb2J0YWluIGEgZmFsc2UgbmVnYXRpdmUgYW5kIHRoZW4gaGF2ZSB0byBkbyBuZWVkbGVzcyByZS1yZW5kZXJpbmdcbiAqIChpLmUuIHdlJ2Qgc2F5IHR3byBWTm9kZXMgYXJlbid0IGVxdWFsIHdoZW4gaW4gZmFjdCB0aGV5IHNob3VsZCBiZSkuXG4gKlxuICogQHBhcmFtIGxlZnRWTm9kZSB0aGUgZmlyc3QgVk5vZGUgdG8gY2hlY2tcbiAqIEBwYXJhbSByaWdodFZOb2RlIHRoZSBzZWNvbmQgVk5vZGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHdoZXRoZXIgdGhleSdyZSBlcXVhbCBvciBub3RcbiAqL1xuY29uc3QgaXNTYW1lVm5vZGUgPSAobGVmdFZOb2RlLCByaWdodFZOb2RlKSA9PiB7XG4gICAgLy8gY29tcGFyZSBpZiB0d28gdm5vZGUgdG8gc2VlIGlmIHRoZXkncmUgXCJ0ZWNobmljYWxseVwiIHRoZSBzYW1lXG4gICAgLy8gbmVlZCB0byBoYXZlIHRoZSBzYW1lIGVsZW1lbnQgdGFnLCBhbmQgc2FtZSBrZXkgdG8gYmUgdGhlIHNhbWVcbiAgICBpZiAobGVmdFZOb2RlLiR0YWckID09PSByaWdodFZOb2RlLiR0YWckKSB7XG4gICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiBsZWZ0Vk5vZGUuJHRhZyQgPT09ICdzbG90Jykge1xuICAgICAgICAgICAgcmV0dXJuIGxlZnRWTm9kZS4kbmFtZSQgPT09IHJpZ2h0Vk5vZGUuJG5hbWUkO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMgd2lsbCBiZSBzZXQgaWYgY29tcG9uZW50cyBpbiB0aGUgYnVpbGQgaGF2ZSBga2V5YCBhdHRycyBzZXQgb24gdGhlbVxuICAgICAgICBpZiAoQlVJTEQudmRvbUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGxlZnRWTm9kZS4ka2V5JCA9PT0gcmlnaHRWTm9kZS4ka2V5JDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IHJlZmVyZW5jZU5vZGUgPSAobm9kZSkgPT4ge1xuICAgIC8vIHRoaXMgbm9kZSB3YXMgcmVsb2NhdGVkIHRvIGEgbmV3IGxvY2F0aW9uIGluIHRoZSBkb21cbiAgICAvLyBiZWNhdXNlIG9mIHNvbWUgb3RoZXIgY29tcG9uZW50J3Mgc2xvdFxuICAgIC8vIGJ1dCB3ZSBzdGlsbCBoYXZlIGFuIGh0bWwgY29tbWVudCBpbiBwbGFjZSBvZiB3aGVyZVxuICAgIC8vIGl0J3Mgb3JpZ2luYWwgbG9jYXRpb24gd2FzIGFjY29yZGluZyB0byBpdCdzIG9yaWdpbmFsIHZkb21cbiAgICByZXR1cm4gKG5vZGUgJiYgbm9kZVsncy1vbCddKSB8fCBub2RlO1xufTtcbmNvbnN0IHBhcmVudFJlZmVyZW5jZU5vZGUgPSAobm9kZSkgPT4gKG5vZGVbJ3Mtb2wnXSA/IG5vZGVbJ3Mtb2wnXSA6IG5vZGUpLnBhcmVudE5vZGU7XG4vKipcbiAqIEhhbmRsZSByZWNvbmNpbGluZyBhbiBvdXRkYXRlZCBWTm9kZSB3aXRoIGEgbmV3IG9uZSB3aGljaCBjb3JyZXNwb25kcyB0b1xuICogaXQuIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyBmbHVzaGluZyB1cGRhdGVzIHRvIHRoZSBET00gYW5kIHJlY29uY2lsaW5nIHRoZVxuICogY2hpbGRyZW4gb2YgdGhlIHR3byBub2RlcyAoaWYgYW55KS5cbiAqXG4gKiBAcGFyYW0gb2xkVk5vZGUgYW4gb2xkIFZOb2RlIHdob3NlIERPTSBlbGVtZW50IGFuZCBjaGlsZHJlbiB3ZSB3YW50IHRvIHVwZGF0ZVxuICogQHBhcmFtIG5ld1ZOb2RlIGEgbmV3IFZOb2RlIHJlcHJlc2VudGluZyBhbiB1cGRhdGVkIHZlcnNpb24gb2YgdGhlIG9sZCBvbmVcbiAqL1xuY29uc3QgcGF0Y2ggPSAob2xkVk5vZGUsIG5ld1ZOb2RlKSA9PiB7XG4gICAgY29uc3QgZWxtID0gKG5ld1ZOb2RlLiRlbG0kID0gb2xkVk5vZGUuJGVsbSQpO1xuICAgIGNvbnN0IG9sZENoaWxkcmVuID0gb2xkVk5vZGUuJGNoaWxkcmVuJDtcbiAgICBjb25zdCBuZXdDaGlsZHJlbiA9IG5ld1ZOb2RlLiRjaGlsZHJlbiQ7XG4gICAgY29uc3QgdGFnID0gbmV3Vk5vZGUuJHRhZyQ7XG4gICAgY29uc3QgdGV4dCA9IG5ld1ZOb2RlLiR0ZXh0JDtcbiAgICBsZXQgZGVmYXVsdEhvbGRlcjtcbiAgICBpZiAoIUJVSUxELnZkb21UZXh0IHx8IHRleHQgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKEJVSUxELnN2Zykge1xuICAgICAgICAgICAgLy8gdGVzdCBpZiB3ZSdyZSByZW5kZXJpbmcgYW4gc3ZnIGVsZW1lbnQsIG9yIHN0aWxsIHJlbmRlcmluZyBub2RlcyBpbnNpZGUgb2Ygb25lXG4gICAgICAgICAgICAvLyBvbmx5IGFkZCB0aGlzIHRvIHRoZSB3aGVuIHRoZSBjb21waWxlciBzZWVzIHdlJ3JlIHVzaW5nIGFuIHN2ZyBzb21ld2hlcmVcbiAgICAgICAgICAgIGlzU3ZnTW9kZSA9IHRhZyA9PT0gJ3N2ZycgPyB0cnVlIDogdGFnID09PSAnZm9yZWlnbk9iamVjdCcgPyBmYWxzZSA6IGlzU3ZnTW9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQudmRvbUF0dHJpYnV0ZSB8fCBCVUlMRC5yZWZsZWN0KSB7XG4gICAgICAgICAgICBpZiAoQlVJTEQuc2xvdCAmJiB0YWcgPT09ICdzbG90JylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBlaXRoZXIgdGhpcyBpcyB0aGUgZmlyc3QgcmVuZGVyIG9mIGFuIGVsZW1lbnQgT1IgaXQncyBhbiB1cGRhdGVcbiAgICAgICAgICAgICAgICAvLyBBTkQgd2UgYWxyZWFkeSBrbm93IGl0J3MgcG9zc2libGUgaXQgY291bGQgaGF2ZSBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgLy8gdGhpcyB1cGRhdGVzIHRoZSBlbGVtZW50J3MgY3NzIGNsYXNzZXMsIGF0dHJzLCBwcm9wcywgbGlzdGVuZXJzLCBldGMuXG4gICAgICAgICAgICAgICAgdXBkYXRlRWxlbWVudChvbGRWTm9kZSwgbmV3Vk5vZGUsIGlzU3ZnTW9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELnVwZGF0YWJsZSAmJiBvbGRDaGlsZHJlbiAhPT0gbnVsbCAmJiBuZXdDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbG9va3MgbGlrZSB0aGVyZSdzIGNoaWxkIHZub2RlcyBmb3IgYm90aCB0aGUgb2xkIGFuZCBuZXcgdm5vZGVzXG4gICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGNhbGwgYHVwZGF0ZUNoaWxkcmVuYCB0byByZWNvbmNpbGUgdGhlbVxuICAgICAgICAgICAgdXBkYXRlQ2hpbGRyZW4oZWxtLCBvbGRDaGlsZHJlbiwgbmV3Vk5vZGUsIG5ld0NoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbm8gb2xkIGNoaWxkIHZub2RlcywgYnV0IHRoZXJlIGFyZSBuZXcgY2hpbGQgdm5vZGVzIHRvIGFkZFxuICAgICAgICAgICAgaWYgKEJVSUxELnVwZGF0YWJsZSAmJiBCVUlMRC52ZG9tVGV4dCAmJiBvbGRWTm9kZS4kdGV4dCQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgb2xkIHZub2RlIHdhcyB0ZXh0LCBzbyBiZSBzdXJlIHRvIGNsZWFyIGl0IG91dFxuICAgICAgICAgICAgICAgIGVsbS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWRkIHRoZSBuZXcgdm5vZGUgY2hpbGRyZW5cbiAgICAgICAgICAgIGFkZFZub2RlcyhlbG0sIG51bGwsIG5ld1ZOb2RlLCBuZXdDaGlsZHJlbiwgMCwgbmV3Q2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudXBkYXRhYmxlICYmIG9sZENoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBubyBuZXcgY2hpbGQgdm5vZGVzLCBidXQgdGhlcmUgYXJlIG9sZCBjaGlsZCB2bm9kZXMgdG8gcmVtb3ZlXG4gICAgICAgICAgICByZW1vdmVWbm9kZXMob2xkQ2hpbGRyZW4sIDAsIG9sZENoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5zdmcgJiYgaXNTdmdNb2RlICYmIHRhZyA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICAgIGlzU3ZnTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKEJVSUxELnZkb21UZXh0ICYmIEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIChkZWZhdWx0SG9sZGVyID0gZWxtWydzLWNyJ10pKSB7XG4gICAgICAgIC8vIHRoaXMgZWxlbWVudCBoYXMgc2xvdHRlZCBjb250ZW50XG4gICAgICAgIGRlZmF1bHRIb2xkZXIucGFyZW50Tm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKEJVSUxELnZkb21UZXh0ICYmIG9sZFZOb2RlLiR0ZXh0JCAhPT0gdGV4dCkge1xuICAgICAgICAvLyB1cGRhdGUgdGhlIHRleHQgY29udGVudCBmb3IgdGhlIHRleHQgb25seSB2bm9kZVxuICAgICAgICAvLyBhbmQgYWxzbyBvbmx5IGlmIHRoZSB0ZXh0IGlzIGRpZmZlcmVudCB0aGFuIGJlZm9yZVxuICAgICAgICBlbG0uZGF0YSA9IHRleHQ7XG4gICAgfVxufTtcbmNvbnN0IHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkgPSAoZWxtKSA9PiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItY29uc3RcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gZWxtLmNoaWxkTm9kZXM7XG4gICAgbGV0IGNoaWxkTm9kZTtcbiAgICBsZXQgaTtcbiAgICBsZXQgaWxlbjtcbiAgICBsZXQgajtcbiAgICBsZXQgc2xvdE5hbWVBdHRyO1xuICAgIGxldCBub2RlVHlwZTtcbiAgICBmb3IgKGkgPSAwLCBpbGVuID0gY2hpbGROb2Rlcy5sZW5ndGg7IGkgPCBpbGVuOyBpKyspIHtcbiAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGVbJ3Mtc3InXSkge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBzbG90IGZhbGxiYWNrIG5vZGVcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIHNsb3QgbmFtZSBmb3IgdGhpcyBzbG90IHJlZmVyZW5jZSBub2RlXG4gICAgICAgICAgICAgICAgc2xvdE5hbWVBdHRyID0gY2hpbGROb2RlWydzLXNuJ107XG4gICAgICAgICAgICAgICAgLy8gYnkgZGVmYXVsdCBhbHdheXMgc2hvdyBhIGZhbGxiYWNrIHNsb3Qgbm9kZVxuICAgICAgICAgICAgICAgIC8vIHRoZW4gaGlkZSBpdCBpZiB0aGVyZSBhcmUgb3RoZXIgc2xvdHMgaW4gdGhlIGxpZ2h0IGRvbVxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgaWxlbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVUeXBlID0gY2hpbGROb2Rlc1tqXS5ub2RlVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZXNbal1bJ3MtaG4nXSAhPT0gY2hpbGROb2RlWydzLWhuJ10gfHwgc2xvdE5hbWVBdHRyICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBzaWJsaW5nIG5vZGUgaXMgZnJvbSBhIGRpZmZlcmVudCBjb21wb25lbnQgT1IgaXMgYSBuYW1lZCBmYWxsYmFjayBzbG90IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8gJiYgc2xvdE5hbWVBdHRyID09PSBjaGlsZE5vZGVzW2pdLmdldEF0dHJpYnV0ZSgnc2xvdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgZGVmYXVsdCBmYWxsYmFjayBzbG90IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFueSBlbGVtZW50IG9yIHRleHQgbm9kZSAod2l0aCBjb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdWxkIGhpZGUgdGhlIGRlZmF1bHQgZmFsbGJhY2sgc2xvdCBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5vZGVUeXBlID09PSAzIC8qIE5PREVfVFlQRS5UZXh0Tm9kZSAqLyAmJiBjaGlsZE5vZGVzW2pdLnRleHRDb250ZW50LnRyaW0oKSAhPT0gJycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBrZWVwIGRyaWxsaW5nIGRvd25cbiAgICAgICAgICAgIHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkoY2hpbGROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCByZWxvY2F0ZU5vZGVzID0gW107XG5jb25zdCByZWxvY2F0ZVNsb3RDb250ZW50ID0gKGVsbSkgPT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XG4gICAgbGV0IGNoaWxkTm9kZTtcbiAgICBsZXQgbm9kZTtcbiAgICBsZXQgaG9zdENvbnRlbnROb2RlcztcbiAgICBsZXQgc2xvdE5hbWVBdHRyO1xuICAgIGxldCByZWxvY2F0ZU5vZGVEYXRhO1xuICAgIGxldCBqO1xuICAgIGxldCBpID0gMDtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gZWxtLmNoaWxkTm9kZXM7XG4gICAgY29uc3QgaWxlbiA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuICAgIGZvciAoOyBpIDwgaWxlbjsgaSsrKSB7XG4gICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaV07XG4gICAgICAgIGlmIChjaGlsZE5vZGVbJ3Mtc3InXSAmJiAobm9kZSA9IGNoaWxkTm9kZVsncy1jciddKSAmJiBub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IGdvdCB0aGUgY29udGVudCByZWZlcmVuY2UgY29tbWVudCBub2RlXG4gICAgICAgICAgICAvLyB0aGVuIHdlIGdvdCBpdCdzIHBhcmVudCwgd2hpY2ggaXMgd2hlcmUgYWxsIHRoZSBob3N0IGNvbnRlbnQgaXMgaW4gbm93XG4gICAgICAgICAgICBob3N0Q29udGVudE5vZGVzID0gbm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXM7XG4gICAgICAgICAgICBzbG90TmFtZUF0dHIgPSBjaGlsZE5vZGVbJ3Mtc24nXTtcbiAgICAgICAgICAgIGZvciAoaiA9IGhvc3RDb250ZW50Tm9kZXMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBub2RlID0gaG9zdENvbnRlbnROb2Rlc1tqXTtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVbJ3MtY24nXSAmJiAhbm9kZVsncy1uciddICYmIG5vZGVbJ3MtaG4nXSAhPT0gY2hpbGROb2RlWydzLWhuJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgZG8gc29tZSByZWxvY2F0aW5nIHRvIGl0cyBuZXcgaG9tZVxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgbmV2ZXIgcmVsb2NhdGUgYSBjb250ZW50IHJlZmVyZW5jZSBub2RlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQgaXMgc3VwcG9zZSB0byBhbHdheXMgcmVwcmVzZW50IHRoZSBvcmlnaW5hbCBjb250ZW50IGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc05vZGVMb2NhdGVkSW5TbG90KG5vZGUsIHNsb3ROYW1lQXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGl0J3MgcG9zc2libGUgd2UndmUgYWxyZWFkeSBkZWNpZGVkIHRvIHJlbG9jYXRlIHRoaXMgbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2NhdGVOb2RlRGF0YSA9IHJlbG9jYXRlTm9kZXMuZmluZCgocikgPT4gci4kbm9kZVRvUmVsb2NhdGUkID09PSBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1hZGUgc29tZSBjaGFuZ2VzIHRvIHNsb3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZXQncyBtYWtlIHN1cmUgd2UgYWxzbyBkb3VibGUgY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrcyBhcmUgY29ycmVjdGx5IGhpZGRlbiBvciBzaG93blxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ3Mtc24nXSA9IG5vZGVbJ3Mtc24nXSB8fCBzbG90TmFtZUF0dHI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsb2NhdGVOb2RlRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzbHkgd2UgbmV2ZXIgZm91bmQgYSBzbG90IGhvbWUgZm9yIHRoaXMgbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB0dXJucyBvdXQgd2UgZGlkLCBzbyBsZXQncyByZW1lbWJlciBpdCBub3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVEYXRhLiRzbG90UmVmTm9kZSQgPSBjaGlsZE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gb3VyIGxpc3Qgb2Ygbm9kZXMgdG8gcmVsb2NhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkc2xvdFJlZk5vZGUkOiBjaGlsZE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRub2RlVG9SZWxvY2F0ZSQ6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVsncy1zciddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2NhdGVOb2Rlcy5tYXAoKHJlbG9jYXRlTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNOb2RlTG9jYXRlZEluU2xvdChyZWxvY2F0ZU5vZGUuJG5vZGVUb1JlbG9jYXRlJCwgbm9kZVsncy1zbiddKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2NhdGVOb2RlRGF0YSA9IHJlbG9jYXRlTm9kZXMuZmluZCgocikgPT4gci4kbm9kZVRvUmVsb2NhdGUkID09PSBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxvY2F0ZU5vZGVEYXRhICYmICFyZWxvY2F0ZU5vZGUuJHNsb3RSZWZOb2RlJCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZS4kc2xvdFJlZk5vZGUkID0gcmVsb2NhdGVOb2RlRGF0YS4kc2xvdFJlZk5vZGUkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIXJlbG9jYXRlTm9kZXMuc29tZSgocikgPT4gci4kbm9kZVRvUmVsb2NhdGUkID09PSBub2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gZmFyIHRoaXMgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGEgc2xvdCBob21lLCBub3Qgc2V0dGluZyBzbG90UmVmTm9kZSBvbiBwdXJwb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB3ZSBuZXZlciBmaW5kIGEgaG9tZSBmb3IgdGhpcyBlbGVtZW50IHRoZW4gd2UnbGwgbmVlZCB0byBoaWRlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRub2RlVG9SZWxvY2F0ZSQ6IG5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLykge1xuICAgICAgICAgICAgcmVsb2NhdGVTbG90Q29udGVudChjaGlsZE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGlzTm9kZUxvY2F0ZWRJblNsb3QgPSAobm9kZVRvUmVsb2NhdGUsIHNsb3ROYW1lQXR0cikgPT4ge1xuICAgIGlmIChub2RlVG9SZWxvY2F0ZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgaWYgKG5vZGVUb1JlbG9jYXRlLmdldEF0dHJpYnV0ZSgnc2xvdCcpID09PSBudWxsICYmIHNsb3ROYW1lQXR0ciA9PT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlVG9SZWxvY2F0ZS5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKSA9PT0gc2xvdE5hbWVBdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChub2RlVG9SZWxvY2F0ZVsncy1zbiddID09PSBzbG90TmFtZUF0dHIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBzbG90TmFtZUF0dHIgPT09ICcnO1xufTtcbmNvbnN0IGNhbGxOb2RlUmVmcyA9ICh2Tm9kZSkgPT4ge1xuICAgIGlmIChCVUlMRC52ZG9tUmVmKSB7XG4gICAgICAgIHZOb2RlLiRhdHRycyQgJiYgdk5vZGUuJGF0dHJzJC5yZWYgJiYgdk5vZGUuJGF0dHJzJC5yZWYobnVsbCk7XG4gICAgICAgIHZOb2RlLiRjaGlsZHJlbiQgJiYgdk5vZGUuJGNoaWxkcmVuJC5tYXAoY2FsbE5vZGVSZWZzKTtcbiAgICB9XG59O1xuLyoqXG4gKiBUaGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgU3RlbmNpbCdzIHZpcnR1YWwgRE9NLWJhc2VkIHJlbmRlcmluZyBlbmdpbmVcbiAqXG4gKiBHaXZlbiBhIHtAbGluayBkLkhvc3RSZWZ9IGNvbnRhaW5lciBhbmQgc29tZSB2aXJ0dWFsIERPTSBub2RlcywgdGhpc1xuICogZnVuY3Rpb24gd2lsbCBoYW5kbGUgY3JlYXRpbmcgYSB2aXJ0dWFsIERPTSB0cmVlIHdpdGggYSBzaW5nbGUgcm9vdCwgcGF0Y2hpbmdcbiAqIHRoZSBjdXJyZW50IHZpcnR1YWwgRE9NIHRyZWUgb250byBhbiBvbGQgb25lIChpZiBhbnkpLCBkZWFsaW5nIHdpdGggc2xvdFxuICogcmVsb2NhdGlvbiwgYW5kIHJlZmxlY3RpbmcgYXR0cmlidXRlcy5cbiAqXG4gKiBAcGFyYW0gaG9zdFJlZiBkYXRhIG5lZWRlZCB0byByb290IGFuZCByZW5kZXIgdGhlIHZpcnR1YWwgRE9NIHRyZWUsIHN1Y2ggYXNcbiAqIHRoZSBET00gbm9kZSBpbnRvIHdoaWNoIGl0IHNob3VsZCBiZSByZW5kZXJlZC5cbiAqIEBwYXJhbSByZW5kZXJGblJlc3VsdHMgdGhlIHZpcnR1YWwgRE9NIG5vZGVzIHRvIGJlIHJlbmRlcmVkXG4gKi9cbmNvbnN0IHJlbmRlclZkb20gPSAoaG9zdFJlZiwgcmVuZGVyRm5SZXN1bHRzKSA9PiB7XG4gICAgY29uc3QgaG9zdEVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gICAgY29uc3Qgb2xkVk5vZGUgPSBob3N0UmVmLiR2bm9kZSQgfHwgbmV3Vk5vZGUobnVsbCwgbnVsbCk7XG4gICAgY29uc3Qgcm9vdFZub2RlID0gaXNIb3N0KHJlbmRlckZuUmVzdWx0cykgPyByZW5kZXJGblJlc3VsdHMgOiBoKG51bGwsIG51bGwsIHJlbmRlckZuUmVzdWx0cyk7XG4gICAgaG9zdFRhZ05hbWUgPSBob3N0RWxtLnRhZ05hbWU7XG4gICAgLy8gPEhvc3Q+IHJ1bnRpbWUgY2hlY2tcbiAgICBpZiAoQlVJTEQuaXNEZXYgJiYgQXJyYXkuaXNBcnJheShyZW5kZXJGblJlc3VsdHMpICYmIHJlbmRlckZuUmVzdWx0cy5zb21lKGlzSG9zdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgPEhvc3Q+IG11c3QgYmUgdGhlIHNpbmdsZSByb290IGNvbXBvbmVudC5cbkxvb2tzIGxpa2UgdGhlIHJlbmRlcigpIGZ1bmN0aW9uIG9mIFwiJHtob3N0VGFnTmFtZS50b0xvd2VyQ2FzZSgpfVwiIGlzIHJldHVybmluZyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSA8SG9zdD4uXG5cblRoZSByZW5kZXIoKSBmdW5jdGlvbiBzaG91bGQgbG9vayBsaWtlIHRoaXMgaW5zdGVhZDpcblxucmVuZGVyKCkge1xuICAvLyBEbyBub3QgcmV0dXJuIGFuIGFycmF5XG4gIHJldHVybiAoXG4gICAgPEhvc3Q+e2NvbnRlbnR9PC9Ib3N0PlxuICApO1xufVxuICBgKTtcbiAgICB9XG4gICAgaWYgKEJVSUxELnJlZmxlY3QgJiYgY21wTWV0YS4kYXR0cnNUb1JlZmxlY3QkKSB7XG4gICAgICAgIHJvb3RWbm9kZS4kYXR0cnMkID0gcm9vdFZub2RlLiRhdHRycyQgfHwge307XG4gICAgICAgIGNtcE1ldGEuJGF0dHJzVG9SZWZsZWN0JC5tYXAoKFtwcm9wTmFtZSwgYXR0cmlidXRlXSkgPT4gKHJvb3RWbm9kZS4kYXR0cnMkW2F0dHJpYnV0ZV0gPSBob3N0RWxtW3Byb3BOYW1lXSkpO1xuICAgIH1cbiAgICByb290Vm5vZGUuJHRhZyQgPSBudWxsO1xuICAgIHJvb3RWbm9kZS4kZmxhZ3MkIHw9IDQgLyogVk5PREVfRkxBR1MuaXNIb3N0ICovO1xuICAgIGhvc3RSZWYuJHZub2RlJCA9IHJvb3RWbm9kZTtcbiAgICByb290Vm5vZGUuJGVsbSQgPSBvbGRWTm9kZS4kZWxtJCA9IChCVUlMRC5zaGFkb3dEb20gPyBob3N0RWxtLnNoYWRvd1Jvb3QgfHwgaG9zdEVsbSA6IGhvc3RFbG0pO1xuICAgIGlmIChCVUlMRC5zY29wZWQgfHwgQlVJTEQuc2hhZG93RG9tKSB7XG4gICAgICAgIHNjb3BlSWQgPSBob3N0RWxtWydzLXNjJ107XG4gICAgfVxuICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICBjb250ZW50UmVmID0gaG9zdEVsbVsncy1jciddO1xuICAgICAgICB1c2VOYXRpdmVTaGFkb3dEb20gPSBzdXBwb3J0c1NoYWRvdyAmJiAoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBDTVBfRkxBR1Muc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykgIT09IDA7XG4gICAgICAgIC8vIGFsd2F5cyByZXNldFxuICAgICAgICBjaGVja1Nsb3RGYWxsYmFja1Zpc2liaWxpdHkgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gc3luY2hyb25vdXMgcGF0Y2hcbiAgICBwYXRjaChvbGRWTm9kZSwgcm9vdFZub2RlKTtcbiAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgLy8gd2hpbGUgd2UncmUgbW92aW5nIG5vZGVzIGFyb3VuZCBleGlzdGluZyBub2RlcywgdGVtcG9yYXJpbHkgZGlzYWJsZVxuICAgICAgICAvLyB0aGUgZGlzY29ubmVjdENhbGxiYWNrIGZyb20gd29ya2luZ1xuICAgICAgICBwbHQuJGZsYWdzJCB8PSAxIC8qIFBMQVRGT1JNX0ZMQUdTLmlzVG1wRGlzY29ubmVjdGVkICovO1xuICAgICAgICBpZiAoY2hlY2tTbG90UmVsb2NhdGUpIHtcbiAgICAgICAgICAgIHJlbG9jYXRlU2xvdENvbnRlbnQocm9vdFZub2RlLiRlbG0kKTtcbiAgICAgICAgICAgIGxldCByZWxvY2F0ZURhdGE7XG4gICAgICAgICAgICBsZXQgbm9kZVRvUmVsb2NhdGU7XG4gICAgICAgICAgICBsZXQgb3JnTG9jYXRpb25Ob2RlO1xuICAgICAgICAgICAgbGV0IHBhcmVudE5vZGVSZWY7XG4gICAgICAgICAgICBsZXQgaW5zZXJ0QmVmb3JlTm9kZTtcbiAgICAgICAgICAgIGxldCByZWZOb2RlO1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgZm9yICg7IGkgPCByZWxvY2F0ZU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVsb2NhdGVEYXRhID0gcmVsb2NhdGVOb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICBub2RlVG9SZWxvY2F0ZSA9IHJlbG9jYXRlRGF0YS4kbm9kZVRvUmVsb2NhdGUkO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZVRvUmVsb2NhdGVbJ3Mtb2wnXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgYSByZWZlcmVuY2Ugbm9kZSBtYXJraW5nIHRoaXMgbm9kZSdzIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhpcyBub2RlIGZvciBsYXRlciBsb29rdXBzXG4gICAgICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBCVUlMRC5pc0RlYnVnIHx8IEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBvcmlnaW5hbExvY2F0aW9uRGVidWdOb2RlKG5vZGVUb1JlbG9jYXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZG9jLmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlWydzLW5yJ10gPSBub2RlVG9SZWxvY2F0ZTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZVRvUmVsb2NhdGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoKG5vZGVUb1JlbG9jYXRlWydzLW9sJ10gPSBvcmdMb2NhdGlvbk5vZGUpLCBub2RlVG9SZWxvY2F0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHJlbG9jYXRlTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZWxvY2F0ZURhdGEgPSByZWxvY2F0ZU5vZGVzW2ldO1xuICAgICAgICAgICAgICAgIG5vZGVUb1JlbG9jYXRlID0gcmVsb2NhdGVEYXRhLiRub2RlVG9SZWxvY2F0ZSQ7XG4gICAgICAgICAgICAgICAgaWYgKHJlbG9jYXRlRGF0YS4kc2xvdFJlZk5vZGUkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGJ5IGRlZmF1bHQgd2UncmUganVzdCBnb2luZyB0byBpbnNlcnQgaXQgZGlyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhlIHNsb3QgcmVmZXJlbmNlIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZVJlZiA9IHJlbG9jYXRlRGF0YS4kc2xvdFJlZk5vZGUkLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydEJlZm9yZU5vZGUgPSByZWxvY2F0ZURhdGEuJHNsb3RSZWZOb2RlJC5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlID0gbm9kZVRvUmVsb2NhdGVbJ3Mtb2wnXTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChvcmdMb2NhdGlvbk5vZGUgPSBvcmdMb2NhdGlvbk5vZGUucHJldmlvdXNTaWJsaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVmTm9kZSA9IG9yZ0xvY2F0aW9uTm9kZVsncy1uciddO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZk5vZGUgJiYgcmVmTm9kZVsncy1zbiddID09PSBub2RlVG9SZWxvY2F0ZVsncy1zbiddICYmIHBhcmVudE5vZGVSZWYgPT09IHJlZk5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZk5vZGUgPSByZWZOb2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVmTm9kZSB8fCAhcmVmTm9kZVsncy1uciddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydEJlZm9yZU5vZGUgPSByZWZOb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCghaW5zZXJ0QmVmb3JlTm9kZSAmJiBwYXJlbnROb2RlUmVmICE9PSBub2RlVG9SZWxvY2F0ZS5wYXJlbnROb2RlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvUmVsb2NhdGUubmV4dFNpYmxpbmcgIT09IGluc2VydEJlZm9yZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlJ3ZlIGNoZWNrZWQgdGhhdCBpdCdzIHdvcnRoIHdoaWxlIHRvIHJlbG9jYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSB0aGF0IHRoZSBub2RlIHRvIHJlbG9jYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBoYXMgYSBkaWZmZXJlbnQgbmV4dCBzaWJsaW5nIG9yIHBhcmVudCByZWxvY2F0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlVG9SZWxvY2F0ZSAhPT0gaW5zZXJ0QmVmb3JlTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbm9kZVRvUmVsb2NhdGVbJ3MtaG4nXSAmJiBub2RlVG9SZWxvY2F0ZVsncy1vbCddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2JhYmx5IGEgY29tcG9uZW50IGluIHRoZSBpbmRleC5odG1sIHRoYXQgZG9lc24ndCBoYXZlIGl0J3MgaG9zdG5hbWUgc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb1JlbG9jYXRlWydzLWhuJ10gPSBub2RlVG9SZWxvY2F0ZVsncy1vbCddLnBhcmVudE5vZGUubm9kZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCBpdCBiYWNrIHRvIHRoZSBkb20gYnV0IGluIGl0cyBuZXcgaG9tZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGVSZWYuaW5zZXJ0QmVmb3JlKG5vZGVUb1JlbG9jYXRlLCBpbnNlcnRCZWZvcmVOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBub2RlIGRvZXNuJ3QgaGF2ZSBhIHNsb3QgaG9tZSB0byBnbyB0bywgc28gbGV0J3MgaGlkZSBpdFxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVRvUmVsb2NhdGUubm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9SZWxvY2F0ZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGVja1Nsb3RGYWxsYmFja1Zpc2liaWxpdHkpIHtcbiAgICAgICAgICAgIHVwZGF0ZUZhbGxiYWNrU2xvdFZpc2liaWxpdHkocm9vdFZub2RlLiRlbG0kKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBkb25lIG1vdmluZyBub2RlcyBhcm91bmRcbiAgICAgICAgLy8gYWxsb3cgdGhlIGRpc2Nvbm5lY3QgY2FsbGJhY2sgdG8gd29yayBhZ2FpblxuICAgICAgICBwbHQuJGZsYWdzJCAmPSB+MSAvKiBQTEFURk9STV9GTEFHUy5pc1RtcERpc2Nvbm5lY3RlZCAqLztcbiAgICAgICAgLy8gYWx3YXlzIHJlc2V0XG4gICAgICAgIHJlbG9jYXRlTm9kZXMubGVuZ3RoID0gMDtcbiAgICB9XG59O1xuLy8gc2xvdCBjb21tZW50IGRlYnVnIG5vZGVzIG9ubHkgY3JlYXRlZCB3aXRoIHRoZSBgLS1kZWJ1Z2AgZmxhZ1xuLy8gb3RoZXJ3aXNlIHRoZXNlIG5vZGVzIGFyZSB0ZXh0IG5vZGVzIHcvb3V0IGNvbnRlbnRcbmNvbnN0IHNsb3RSZWZlcmVuY2VEZWJ1Z05vZGUgPSAoc2xvdFZOb2RlKSA9PiBkb2MuY3JlYXRlQ29tbWVudChgPHNsb3Qke3Nsb3RWTm9kZS4kbmFtZSQgPyAnIG5hbWU9XCInICsgc2xvdFZOb2RlLiRuYW1lJCArICdcIicgOiAnJ30+IChob3N0PSR7aG9zdFRhZ05hbWUudG9Mb3dlckNhc2UoKX0pYCk7XG5jb25zdCBvcmlnaW5hbExvY2F0aW9uRGVidWdOb2RlID0gKG5vZGVUb1JlbG9jYXRlKSA9PiBkb2MuY3JlYXRlQ29tbWVudChgb3JnLWxvY2F0aW9uIGZvciBgICtcbiAgICAobm9kZVRvUmVsb2NhdGUubG9jYWxOYW1lXG4gICAgICAgID8gYDwke25vZGVUb1JlbG9jYXRlLmxvY2FsTmFtZX0+IChob3N0PSR7bm9kZVRvUmVsb2NhdGVbJ3MtaG4nXX0pYFxuICAgICAgICA6IGBbJHtub2RlVG9SZWxvY2F0ZS50ZXh0Q29udGVudH1dYCkpO1xuY29uc3QgYXR0YWNoVG9BbmNlc3RvciA9IChob3N0UmVmLCBhbmNlc3RvckNvbXBvbmVudCkgPT4ge1xuICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcgJiYgYW5jZXN0b3JDb21wb25lbnQgJiYgIWhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQgJiYgYW5jZXN0b3JDb21wb25lbnRbJ3MtcCddKSB7XG4gICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXS5wdXNoKG5ldyBQcm9taXNlKChyKSA9PiAoaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCA9IHIpKSk7XG4gICAgfVxufTtcbmNvbnN0IHNjaGVkdWxlVXBkYXRlID0gKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgICBpZiAoQlVJTEQudGFza1F1ZXVlICYmIEJVSUxELnVwZGF0YWJsZSkge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMTYgLyogSE9TVF9GTEFHUy5pc1F1ZXVlZEZvclVwZGF0ZSAqLztcbiAgICB9XG4gICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZyAmJiBob3N0UmVmLiRmbGFncyQgJiA0IC8qIEhPU1RfRkxBR1MuaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8pIHtcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDUxMiAvKiBIT1NUX0ZMQUdTLm5lZWRzUmVyZW5kZXIgKi87XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXR0YWNoVG9BbmNlc3Rvcihob3N0UmVmLCBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQpO1xuICAgIC8vIHRoZXJlIGlzIG5vIGFuY2VzdG9yIGNvbXBvbmVudCBvciB0aGUgYW5jZXN0b3IgY29tcG9uZW50XG4gICAgLy8gaGFzIGFscmVhZHkgZmlyZWQgb2ZmIGl0cyBsaWZlY3ljbGUgdXBkYXRlIHRoZW5cbiAgICAvLyBmaXJlIG9mZiB0aGUgaW5pdGlhbCB1cGRhdGVcbiAgICBjb25zdCBkaXNwYXRjaCA9ICgpID0+IGRpc3BhdGNoSG9va3MoaG9zdFJlZiwgaXNJbml0aWFsTG9hZCk7XG4gICAgcmV0dXJuIEJVSUxELnRhc2tRdWV1ZSA/IHdyaXRlVGFzayhkaXNwYXRjaCkgOiBkaXNwYXRjaCgpO1xufTtcbmNvbnN0IGRpc3BhdGNoSG9va3MgPSAoaG9zdFJlZiwgaXNJbml0aWFsTG9hZCkgPT4ge1xuICAgIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBlbmRTY2hlZHVsZSA9IGNyZWF0ZVRpbWUoJ3NjaGVkdWxlVXBkYXRlJywgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IEJVSUxELmxhenlMb2FkID8gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA6IGVsbTtcbiAgICBsZXQgcHJvbWlzZTtcbiAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgICAgICBpZiAoQlVJTEQubGF6eUxvYWQgJiYgQlVJTEQuaG9zdExpc3RlbmVyKSB7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMjU2IC8qIEhPU1RfRkxBR1MuaXNMaXN0ZW5SZWFkeSAqLztcbiAgICAgICAgICAgIGlmIChob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkKSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJC5tYXAoKFttZXRob2ROYW1lLCBldmVudF0pID0+IHNhZmVDYWxsKGluc3RhbmNlLCBtZXRob2ROYW1lLCBldmVudCkpO1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sICdjb21wb25lbnRXaWxsTG9hZCcpO1xuICAgICAgICBpZiAoQlVJTEQuY21wV2lsbExvYWQpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudFdpbGxMb2FkJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sICdjb21wb25lbnRXaWxsVXBkYXRlJyk7XG4gICAgICAgIGlmIChCVUlMRC5jbXBXaWxsVXBkYXRlKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gc2FmZUNhbGwoaW5zdGFuY2UsICdjb21wb25lbnRXaWxsVXBkYXRlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgJ2NvbXBvbmVudFdpbGxSZW5kZXInKTtcbiAgICBpZiAoQlVJTEQuY21wV2lsbFJlbmRlcikge1xuICAgICAgICBwcm9taXNlID0gdGhlbihwcm9taXNlLCAoKSA9PiBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudFdpbGxSZW5kZXInKSk7XG4gICAgfVxuICAgIGVuZFNjaGVkdWxlKCk7XG4gICAgcmV0dXJuIHRoZW4ocHJvbWlzZSwgKCkgPT4gdXBkYXRlQ29tcG9uZW50KGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSk7XG59O1xuY29uc3QgdXBkYXRlQ29tcG9uZW50ID0gYXN5bmMgKGhvc3RSZWYsIGluc3RhbmNlLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gICAgLy8gdXBkYXRlQ29tcG9uZW50XG4gICAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICAgIGNvbnN0IGVuZFVwZGF0ZSA9IGNyZWF0ZVRpbWUoJ3VwZGF0ZScsIGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJCk7XG4gICAgY29uc3QgcmMgPSBlbG1bJ3MtcmMnXTtcbiAgICBpZiAoQlVJTEQuc3R5bGUgJiYgaXNJbml0aWFsTG9hZCkge1xuICAgICAgICAvLyBET00gV1JJVEUhXG4gICAgICAgIGF0dGFjaFN0eWxlcyhob3N0UmVmKTtcbiAgICB9XG4gICAgY29uc3QgZW5kUmVuZGVyID0gY3JlYXRlVGltZSgncmVuZGVyJywgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDEwMjQgLyogSE9TVF9GTEFHUy5kZXZPblJlbmRlciAqLztcbiAgICB9XG4gICAgaWYgKEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIGF3YWl0IGNhbGxSZW5kZXIoaG9zdFJlZiwgaW5zdGFuY2UsIGVsbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjYWxsUmVuZGVyKGhvc3RSZWYsIGluc3RhbmNlLCBlbG0pO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuY3NzVmFyU2hpbSAmJiBwbHQuJGNzc1NoaW0kKSB7XG4gICAgICAgIHBsdC4kY3NzU2hpbSQudXBkYXRlSG9zdChlbG0pO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgaG9zdFJlZi4kcmVuZGVyQ291bnQkKys7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MTAyNCAvKiBIT1NUX0ZMQUdTLmRldk9uUmVuZGVyICovO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIG1hbnVhbGx5IGNvbm5lY3RlZCBjaGlsZCBjb21wb25lbnRzIGR1cmluZyBzZXJ2ZXItc2lkZSBoeWRyYXRlXG4gICAgICAgICAgICBzZXJ2ZXJTaWRlQ29ubmVjdGVkKGVsbSk7XG4gICAgICAgICAgICBpZiAoaXNJbml0aWFsTG9hZCkge1xuICAgICAgICAgICAgICAgIC8vIHVzaW5nIG9ubHkgZHVyaW5nIHNlcnZlci1zaWRlIGh5ZHJhdGVcbiAgICAgICAgICAgICAgICBpZiAoaG9zdFJlZi4kY21wTWV0YSQuJGZsYWdzJCAmIDEgLyogQ01QX0ZMQUdTLnNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtWydzLWVuJ10gPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaG9zdFJlZi4kY21wTWV0YSQuJGZsYWdzJCAmIDIgLyogQ01QX0ZMQUdTLnNjb3BlZENzc0VuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtWydzLWVuJ10gPSAnYyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlRXJyb3IoZSwgZWxtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nICYmIHJjKSB7XG4gICAgICAgIC8vIG9rLCBzbyB0dXJucyBvdXQgdGhlcmUgYXJlIHNvbWUgY2hpbGQgaG9zdCBlbGVtZW50c1xuICAgICAgICAvLyB3YWl0aW5nIG9uIHRoaXMgcGFyZW50IGVsZW1lbnQgdG8gbG9hZFxuICAgICAgICAvLyBsZXQncyBmaXJlIG9mZiBhbGwgdXBkYXRlIGNhbGxiYWNrcyB3YWl0aW5nXG4gICAgICAgIHJjLm1hcCgoY2IpID0+IGNiKCkpO1xuICAgICAgICBlbG1bJ3MtcmMnXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZW5kUmVuZGVyKCk7XG4gICAgZW5kVXBkYXRlKCk7XG4gICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZykge1xuICAgICAgICBjb25zdCBjaGlsZHJlblByb21pc2VzID0gZWxtWydzLXAnXTtcbiAgICAgICAgY29uc3QgcG9zdFVwZGF0ZSA9ICgpID0+IHBvc3RVcGRhdGVDb21wb25lbnQoaG9zdFJlZik7XG4gICAgICAgIGlmIChjaGlsZHJlblByb21pc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcG9zdFVwZGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY2hpbGRyZW5Qcm9taXNlcykudGhlbihwb3N0VXBkYXRlKTtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA0IC8qIEhPU1RfRkxBR1MuaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi87XG4gICAgICAgICAgICBjaGlsZHJlblByb21pc2VzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBvc3RVcGRhdGVDb21wb25lbnQoaG9zdFJlZik7XG4gICAgfVxufTtcbmNvbnN0IGNhbGxSZW5kZXIgPSAoaG9zdFJlZiwgaW5zdGFuY2UsIGVsbSkgPT4ge1xuICAgIC8vIGluIG9yZGVyIGZvciBidW5kbGVycyB0byBjb3JyZWN0bHkgdHJlZXNoYWtlIHRoZSBCVUlMRCBvYmplY3RcbiAgICAvLyB3ZSBuZWVkIHRvIGVuc3VyZSBCVUlMRCBpcyBub3QgZGVvcHRpbWl6ZWQgd2l0aGluIGEgdHJ5L2NhdGNoXG4gICAgLy8gaHR0cHM6Ly9yb2xsdXBqcy5vcmcvZ3VpZGUvZW4vI3RyZWVzaGFrZSB0cnlDYXRjaERlb3B0aW1pemF0aW9uXG4gICAgY29uc3QgYWxsUmVuZGVyRm4gPSBCVUlMRC5hbGxSZW5kZXJGbiA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCBsYXp5TG9hZCA9IEJVSUxELmxhenlMb2FkID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IHRhc2tRdWV1ZSA9IEJVSUxELnRhc2tRdWV1ZSA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCB1cGRhdGFibGUgPSBCVUlMRC51cGRhdGFibGUgPyB0cnVlIDogZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVuZGVyaW5nUmVmID0gaW5zdGFuY2U7XG4gICAgICAgIGluc3RhbmNlID0gYWxsUmVuZGVyRm4gPyBpbnN0YW5jZS5yZW5kZXIoKSA6IGluc3RhbmNlLnJlbmRlciAmJiBpbnN0YW5jZS5yZW5kZXIoKTtcbiAgICAgICAgaWYgKHVwZGF0YWJsZSAmJiB0YXNrUXVldWUpIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MTYgLyogSE9TVF9GTEFHUy5pc1F1ZXVlZEZvclVwZGF0ZSAqLztcbiAgICAgICAgfVxuICAgICAgICBpZiAodXBkYXRhYmxlIHx8IGxhenlMb2FkKSB7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5oYXNSZW5kZXJGbiB8fCBCVUlMRC5yZWZsZWN0KSB7XG4gICAgICAgICAgICBpZiAoQlVJTEQudmRvbVJlbmRlciB8fCBCVUlMRC5yZWZsZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gbG9va3MgbGlrZSB3ZSd2ZSBnb3QgY2hpbGQgbm9kZXMgdG8gcmVuZGVyIGludG8gdGhpcyBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBvciB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgY3NzIGNsYXNzL2F0dHJzIG9uIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBET00gV1JJVEUhXG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoaW5zdGFuY2UpLnRoZW4oKHZhbHVlKSA9PiByZW5kZXJWZG9tKGhvc3RSZWYsIHZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW5kZXJWZG9tKGhvc3RSZWYsIGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbG0udGV4dENvbnRlbnQgPSBpbnN0YW5jZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlRXJyb3IoZSwgaG9zdFJlZi4kaG9zdEVsZW1lbnQkKTtcbiAgICB9XG4gICAgcmVuZGVyaW5nUmVmID0gbnVsbDtcbiAgICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBnZXRSZW5kZXJpbmdSZWYgPSAoKSA9PiByZW5kZXJpbmdSZWY7XG5jb25zdCBwb3N0VXBkYXRlQ29tcG9uZW50ID0gKGhvc3RSZWYpID0+IHtcbiAgICBjb25zdCB0YWdOYW1lID0gaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkO1xuICAgIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBlbmRQb3N0VXBkYXRlID0gY3JlYXRlVGltZSgncG9zdFVwZGF0ZScsIHRhZ05hbWUpO1xuICAgIGNvbnN0IGluc3RhbmNlID0gQlVJTEQubGF6eUxvYWQgPyBob3N0UmVmLiRsYXp5SW5zdGFuY2UkIDogZWxtO1xuICAgIGNvbnN0IGFuY2VzdG9yQ29tcG9uZW50ID0gaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkO1xuICAgIGlmIChCVUlMRC5jbXBEaWRSZW5kZXIpIHtcbiAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMTAyNCAvKiBIT1NUX0ZMQUdTLmRldk9uUmVuZGVyICovO1xuICAgICAgICB9XG4gICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50RGlkUmVuZGVyJyk7XG4gICAgICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4xMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi87XG4gICAgICAgIH1cbiAgICB9XG4gICAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgJ2NvbXBvbmVudERpZFJlbmRlcicpO1xuICAgIGlmICghKGhvc3RSZWYuJGZsYWdzJCAmIDY0IC8qIEhPU1RfRkxBR1MuaGFzTG9hZGVkQ29tcG9uZW50ICovKSkge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gNjQgLyogSE9TVF9GTEFHUy5oYXNMb2FkZWRDb21wb25lbnQgKi87XG4gICAgICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcgJiYgQlVJTEQuY3NzQW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIERPTSBXUklURSFcbiAgICAgICAgICAgIGFkZEh5ZHJhdGVkRmxhZyhlbG0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5jbXBEaWRMb2FkKSB7XG4gICAgICAgICAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMjA0OCAvKiBIT1NUX0ZMQUdTLmRldk9uRGlkTG9hZCAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50RGlkTG9hZCcpO1xuICAgICAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4yMDQ4IC8qIEhPU1RfRkxBR1MuZGV2T25EaWRMb2FkICovO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sICdjb21wb25lbnREaWRMb2FkJyk7XG4gICAgICAgIGVuZFBvc3RVcGRhdGUoKTtcbiAgICAgICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZykge1xuICAgICAgICAgICAgaG9zdFJlZi4kb25SZWFkeVJlc29sdmUkKGVsbSk7XG4gICAgICAgICAgICBpZiAoIWFuY2VzdG9yQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgYXBwRGlkTG9hZCh0YWdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKEJVSUxELmNtcERpZFVwZGF0ZSkge1xuICAgICAgICAgICAgLy8gd2UndmUgYWxyZWFkeSBsb2FkZWQgdGhpcyBjb21wb25lbnRcbiAgICAgICAgICAgIC8vIGZpcmUgb2ZmIHRoZSB1c2VyJ3MgY29tcG9uZW50RGlkVXBkYXRlIG1ldGhvZCAoaWYgb25lIHdhcyBwcm92aWRlZClcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudERpZFVwZGF0ZSBydW5zIEFGVEVSIHJlbmRlcigpIGhhcyBiZWVuIGNhbGxlZFxuICAgICAgICAgICAgLy8gYW5kIGFsbCBjaGlsZCBjb21wb25lbnRzIGhhdmUgZmluaXNoZWQgdXBkYXRpbmdcbiAgICAgICAgICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudERpZFVwZGF0ZScpO1xuICAgICAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4xMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgJ2NvbXBvbmVudERpZFVwZGF0ZScpO1xuICAgICAgICBlbmRQb3N0VXBkYXRlKCk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5ob3RNb2R1bGVSZXBsYWNlbWVudCkge1xuICAgICAgICBlbG1bJ3MtaG1yLWxvYWQnXSAmJiBlbG1bJ3MtaG1yLWxvYWQnXSgpO1xuICAgIH1cbiAgICBpZiAoQlVJTEQubWV0aG9kICYmIEJVSUxELmxhenlMb2FkKSB7XG4gICAgICAgIGhvc3RSZWYuJG9uSW5zdGFuY2VSZXNvbHZlJChlbG0pO1xuICAgIH1cbiAgICAvLyBsb2FkIGV2ZW50cyBmaXJlIGZyb20gYm90dG9tIHRvIHRvcFxuICAgIC8vIHRoZSBkZWVwZXN0IGVsZW1lbnRzIGxvYWQgZmlyc3QgdGhlbiBidWJibGVzIHVwXG4gICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZykge1xuICAgICAgICBpZiAoaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCkge1xuICAgICAgICAgICAgaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCgpO1xuICAgICAgICAgICAgaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgNTEyIC8qIEhPU1RfRkxBR1MubmVlZHNSZXJlbmRlciAqLykge1xuICAgICAgICAgICAgbmV4dFRpY2soKCkgPT4gc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgZmFsc2UpKTtcbiAgICAgICAgfVxuICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfig0IC8qIEhPU1RfRkxBR1MuaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8gfCA1MTIgLyogSE9TVF9GTEFHUy5uZWVkc1JlcmVuZGVyICovKTtcbiAgICB9XG4gICAgLy8gKCDigKJf4oCiKVxuICAgIC8vICgg4oCiX+KAoik+4oyQ4pagLeKWoFxuICAgIC8vICjijJDilqBf4pagKVxufTtcbmNvbnN0IGZvcmNlVXBkYXRlID0gKHJlZikgPT4ge1xuICAgIGlmIChCVUlMRC51cGRhdGFibGUpIHtcbiAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYocmVmKTtcbiAgICAgICAgY29uc3QgaXNDb25uZWN0ZWQgPSBob3N0UmVmLiRob3N0RWxlbWVudCQuaXNDb25uZWN0ZWQ7XG4gICAgICAgIGlmIChpc0Nvbm5lY3RlZCAmJlxuICAgICAgICAgICAgKGhvc3RSZWYuJGZsYWdzJCAmICgyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi8gfCAxNiAvKiBIT1NUX0ZMQUdTLmlzUXVldWVkRm9yVXBkYXRlICovKSkgPT09IDIgLyogSE9TVF9GTEFHUy5oYXNSZW5kZXJlZCAqLykge1xuICAgICAgICAgICAgc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJldHVybnMgXCJ0cnVlXCIgd2hlbiB0aGUgZm9yY2VkIHVwZGF0ZSB3YXMgc3VjY2Vzc2Z1bGx5IHNjaGVkdWxlZFxuICAgICAgICByZXR1cm4gaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCBhcHBEaWRMb2FkID0gKHdobykgPT4ge1xuICAgIC8vIG9uIGFwcGxvYWRcbiAgICAvLyB3ZSBoYXZlIGZpbmlzaCB0aGUgZmlyc3QgYmlnIGluaXRpYWwgcmVuZGVyXG4gICAgaWYgKEJVSUxELmNzc0Fubm90YXRpb25zKSB7XG4gICAgICAgIGFkZEh5ZHJhdGVkRmxhZyhkb2MuZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gICAgaWYgKEJVSUxELmFzeW5jUXVldWUpIHtcbiAgICAgICAgcGx0LiRmbGFncyQgfD0gMiAvKiBQTEFURk9STV9GTEFHUy5hcHBMb2FkZWQgKi87XG4gICAgfVxuICAgIG5leHRUaWNrKCgpID0+IGVtaXRFdmVudCh3aW4sICdhcHBsb2FkJywgeyBkZXRhaWw6IHsgbmFtZXNwYWNlOiBOQU1FU1BBQ0UgfSB9KSk7XG4gICAgaWYgKEJVSUxELnByb2ZpbGUgJiYgcGVyZm9ybWFuY2UubWVhc3VyZSkge1xuICAgICAgICBwZXJmb3JtYW5jZS5tZWFzdXJlKGBbU3RlbmNpbF0gJHtOQU1FU1BBQ0V9IGluaXRpYWwgbG9hZCAoYnkgJHt3aG99KWAsICdzdDphcHA6c3RhcnQnKTtcbiAgICB9XG59O1xuY29uc3Qgc2FmZUNhbGwgPSAoaW5zdGFuY2UsIG1ldGhvZCwgYXJnKSA9PiB7XG4gICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlW21ldGhvZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZVttZXRob2RdKGFyZyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbmNvbnN0IHRoZW4gPSAocHJvbWlzZSwgdGhlbkZuKSA9PiB7XG4gICAgcmV0dXJuIHByb21pc2UgJiYgcHJvbWlzZS50aGVuID8gcHJvbWlzZS50aGVuKHRoZW5GbikgOiB0aGVuRm4oKTtcbn07XG5jb25zdCBlbWl0TGlmZWN5Y2xlRXZlbnQgPSAoZWxtLCBsaWZlY3ljbGVOYW1lKSA9PiB7XG4gICAgaWYgKEJVSUxELmxpZmVjeWNsZURPTUV2ZW50cykge1xuICAgICAgICBlbWl0RXZlbnQoZWxtLCAnc3RlbmNpbF8nICsgbGlmZWN5Y2xlTmFtZSwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlOiBOQU1FU1BBQ0UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgYWRkSHlkcmF0ZWRGbGFnID0gKGVsbSkgPT4gQlVJTEQuaHlkcmF0ZWRDbGFzc1xuICAgID8gZWxtLmNsYXNzTGlzdC5hZGQoJ2h5ZHJhdGVkJylcbiAgICA6IEJVSUxELmh5ZHJhdGVkQXR0cmlidXRlXG4gICAgICAgID8gZWxtLnNldEF0dHJpYnV0ZSgnaHlkcmF0ZWQnLCAnJylcbiAgICAgICAgOiB1bmRlZmluZWQ7XG5jb25zdCBzZXJ2ZXJTaWRlQ29ubmVjdGVkID0gKGVsbSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gZWxtLmNoaWxkcmVuO1xuICAgIGlmIChjaGlsZHJlbiAhPSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkRWxtID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkRWxtLmNvbm5lY3RlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRFbG0uY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlcnZlclNpZGVDb25uZWN0ZWQoY2hpbGRFbG0pO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGdldFZhbHVlID0gKHJlZiwgcHJvcE5hbWUpID0+IGdldEhvc3RSZWYocmVmKS4kaW5zdGFuY2VWYWx1ZXMkLmdldChwcm9wTmFtZSk7XG5jb25zdCBzZXRWYWx1ZSA9IChyZWYsIHByb3BOYW1lLCBuZXdWYWwsIGNtcE1ldGEpID0+IHtcbiAgICAvLyBjaGVjayBvdXIgbmV3IHByb3BlcnR5IHZhbHVlIGFnYWluc3Qgb3VyIGludGVybmFsIHZhbHVlXG4gICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYocmVmKTtcbiAgICBjb25zdCBlbG0gPSBCVUlMRC5sYXp5TG9hZCA/IGhvc3RSZWYuJGhvc3RFbGVtZW50JCA6IHJlZjtcbiAgICBjb25zdCBvbGRWYWwgPSBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KHByb3BOYW1lKTtcbiAgICBjb25zdCBmbGFncyA9IGhvc3RSZWYuJGZsYWdzJDtcbiAgICBjb25zdCBpbnN0YW5jZSA9IEJVSUxELmxhenlMb2FkID8gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA6IGVsbTtcbiAgICBuZXdWYWwgPSBwYXJzZVByb3BlcnR5VmFsdWUobmV3VmFsLCBjbXBNZXRhLiRtZW1iZXJzJFtwcm9wTmFtZV1bMF0pO1xuICAgIC8vIGV4cGxpY2l0bHkgY2hlY2sgZm9yIE5hTiBvbiBib3RoIHNpZGVzLCBhcyBgTmFOID09PSBOYU5gIGlzIGFsd2F5cyBmYWxzZVxuICAgIGNvbnN0IGFyZUJvdGhOYU4gPSBOdW1iZXIuaXNOYU4ob2xkVmFsKSAmJiBOdW1iZXIuaXNOYU4obmV3VmFsKTtcbiAgICBjb25zdCBkaWRWYWx1ZUNoYW5nZSA9IG5ld1ZhbCAhPT0gb2xkVmFsICYmICFhcmVCb3RoTmFOO1xuICAgIGlmICgoIUJVSUxELmxhenlMb2FkIHx8ICEoZmxhZ3MgJiA4IC8qIEhPU1RfRkxBR1MuaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLykgfHwgb2xkVmFsID09PSB1bmRlZmluZWQpICYmIGRpZFZhbHVlQ2hhbmdlKSB7XG4gICAgICAgIC8vIGdhZHpvb2tzISB0aGUgcHJvcGVydHkncyB2YWx1ZSBoYXMgY2hhbmdlZCEhXG4gICAgICAgIC8vIHNldCBvdXIgbmV3IHZhbHVlIVxuICAgICAgICBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQuc2V0KHByb3BOYW1lLCBuZXdWYWwpO1xuICAgICAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgICAgIGlmIChob3N0UmVmLiRmbGFncyQgJiAxMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlRGV2V2FybihgVGhlIHN0YXRlL3Byb3AgXCIke3Byb3BOYW1lfVwiIGNoYW5nZWQgZHVyaW5nIHJlbmRlcmluZy4gVGhpcyBjYW4gcG90ZW50aWFsbHkgbGVhZCB0byBpbmZpbml0ZS1sb29wcyBhbmQgb3RoZXIgYnVncy5gLCAnXFxuRWxlbWVudCcsIGVsbSwgJ1xcbk5ldyB2YWx1ZScsIG5ld1ZhbCwgJ1xcbk9sZCB2YWx1ZScsIG9sZFZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChob3N0UmVmLiRmbGFncyQgJiAyMDQ4IC8qIEhPU1RfRkxBR1MuZGV2T25EaWRMb2FkICovKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZURldldhcm4oYFRoZSBzdGF0ZS9wcm9wIFwiJHtwcm9wTmFtZX1cIiBjaGFuZ2VkIGR1cmluZyBcImNvbXBvbmVudERpZExvYWQoKVwiLCB0aGlzIHRyaWdnZXJzIGV4dHJhIHJlLXJlbmRlcnMsIHRyeSB0byBzZXR1cCBvbiBcImNvbXBvbmVudFdpbGxMb2FkKClcImAsICdcXG5FbGVtZW50JywgZWxtLCAnXFxuTmV3IHZhbHVlJywgbmV3VmFsLCAnXFxuT2xkIHZhbHVlJywgb2xkVmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIUJVSUxELmxhenlMb2FkIHx8IGluc3RhbmNlKSB7XG4gICAgICAgICAgICAvLyBnZXQgYW4gYXJyYXkgb2YgbWV0aG9kIG5hbWVzIG9mIHdhdGNoIGZ1bmN0aW9ucyB0byBjYWxsXG4gICAgICAgICAgICBpZiAoQlVJTEQud2F0Y2hDYWxsYmFjayAmJiBjbXBNZXRhLiR3YXRjaGVycyQgJiYgZmxhZ3MgJiAxMjggLyogSE9TVF9GTEFHUy5pc1dhdGNoUmVhZHkgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YXRjaE1ldGhvZHMgPSBjbXBNZXRhLiR3YXRjaGVycyRbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgIGlmICh3YXRjaE1ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpbnN0YW5jZSBpcyB3YXRjaGluZyBmb3Igd2hlbiB0aGlzIHByb3BlcnR5IGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hNZXRob2RzLm1hcCgod2F0Y2hNZXRob2ROYW1lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpcmUgb2ZmIGVhY2ggb2YgdGhlIHdhdGNoIG1ldGhvZHMgdGhhdCBhcmUgd2F0Y2hpbmcgdGhpcyBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW3dhdGNoTWV0aG9kTmFtZV0obmV3VmFsLCBvbGRWYWwsIHByb3BOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZUVycm9yKGUsIGVsbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC51cGRhdGFibGUgJiZcbiAgICAgICAgICAgICAgICAoZmxhZ3MgJiAoMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovIHwgMTYgLyogSE9TVF9GTEFHUy5pc1F1ZXVlZEZvclVwZGF0ZSAqLykpID09PSAyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi8pIHtcbiAgICAgICAgICAgICAgICBpZiAoQlVJTEQuY21wU2hvdWxkVXBkYXRlICYmIGluc3RhbmNlLmNvbXBvbmVudFNob3VsZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UuY29tcG9uZW50U2hvdWxkVXBkYXRlKG5ld1ZhbCwgb2xkVmFsLCBwcm9wTmFtZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbG9va3MgbGlrZSB0aGlzIHZhbHVlIGFjdHVhbGx5IGNoYW5nZWQsIHNvIHdlJ3ZlIGdvdCB3b3JrIHRvIGRvIVxuICAgICAgICAgICAgICAgIC8vIGJ1dCBvbmx5IGlmIHdlJ3ZlIGFscmVhZHkgcmVuZGVyZWQsIG90aGVyd2lzZSBqdXN0IGNoaWxsIG91dFxuICAgICAgICAgICAgICAgIC8vIHF1ZXVlIHRoYXQgd2UgbmVlZCB0byBkbyBhbiB1cGRhdGUsIGJ1dCBkb24ndCB3b3JyeSBhYm91dCBxdWV1aW5nXG4gICAgICAgICAgICAgICAgLy8gdXAgbWlsbGlvbnMgY3V6IHRoaXMgZnVuY3Rpb24gZW5zdXJlcyBpdCBvbmx5IHJ1bnMgb25jZVxuICAgICAgICAgICAgICAgIHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIEF0dGFjaCBhIHNlcmllcyBvZiBydW50aW1lIGNvbnN0cnVjdHMgdG8gYSBjb21waWxlZCBTdGVuY2lsIGNvbXBvbmVudFxuICogY29uc3RydWN0b3IsIGluY2x1ZGluZyBnZXR0ZXJzIGFuZCBzZXR0ZXJzIGZvciB0aGUgYEBQcm9wYCBhbmQgYEBTdGF0ZWBcbiAqIGRlY29yYXRvcnMsIGNhbGxiYWNrcyBmb3Igd2hlbiBhdHRyaWJ1dGVzIGNoYW5nZSwgYW5kIHNvIG9uLlxuICpcbiAqIEBwYXJhbSBDc3RyIHRoZSBjb25zdHJ1Y3RvciBmb3IgYSBjb21wb25lbnQgdGhhdCB3ZSBuZWVkIHRvIHByb2Nlc3NcbiAqIEBwYXJhbSBjbXBNZXRhIG1ldGFkYXRhIGNvbGxlY3RlZCBwcmV2aW91c2x5IGFib3V0IHRoZSBjb21wb25lbnRcbiAqIEBwYXJhbSBmbGFncyBhIG51bWJlciB1c2VkIHRvIHN0b3JlIGEgc2VyaWVzIG9mIGJpdCBmbGFnc1xuICogQHJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIHNhbWUgY29uc3RydWN0b3IgcGFzc2VkIGluIChidXQgbm93IG11dGF0ZWQpXG4gKi9cbmNvbnN0IHByb3h5Q29tcG9uZW50ID0gKENzdHIsIGNtcE1ldGEsIGZsYWdzKSA9PiB7XG4gICAgaWYgKEJVSUxELm1lbWJlciAmJiBjbXBNZXRhLiRtZW1iZXJzJCkge1xuICAgICAgICBpZiAoQlVJTEQud2F0Y2hDYWxsYmFjayAmJiBDc3RyLndhdGNoZXJzKSB7XG4gICAgICAgICAgICBjbXBNZXRhLiR3YXRjaGVycyQgPSBDc3RyLndhdGNoZXJzO1xuICAgICAgICB9XG4gICAgICAgIC8vIEl0J3MgYmV0dGVyIHRvIGhhdmUgYSBjb25zdCB0aGFuIHR3byBPYmplY3QuZW50cmllcygpXG4gICAgICAgIGNvbnN0IG1lbWJlcnMgPSBPYmplY3QuZW50cmllcyhjbXBNZXRhLiRtZW1iZXJzJCk7XG4gICAgICAgIGNvbnN0IHByb3RvdHlwZSA9IENzdHIucHJvdG90eXBlO1xuICAgICAgICBtZW1iZXJzLm1hcCgoW21lbWJlck5hbWUsIFttZW1iZXJGbGFnc11dKSA9PiB7XG4gICAgICAgICAgICBpZiAoKEJVSUxELnByb3AgfHwgQlVJTEQuc3RhdGUpICYmXG4gICAgICAgICAgICAgICAgKG1lbWJlckZsYWdzICYgMzEgLyogTUVNQkVSX0ZMQUdTLlByb3AgKi8gfHxcbiAgICAgICAgICAgICAgICAgICAgKCghQlVJTEQubGF6eUxvYWQgfHwgZmxhZ3MgJiAyIC8qIFBST1hZX0ZMQUdTLnByb3h5U3RhdGUgKi8pICYmIG1lbWJlckZsYWdzICYgMzIgLyogTUVNQkVSX0ZMQUdTLlN0YXRlICovKSkpIHtcbiAgICAgICAgICAgICAgICAvLyBwcm94eUNvbXBvbmVudCAtIHByb3BcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCBtZW1iZXJOYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb3h5Q29tcG9uZW50LCBnZXQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRWYWx1ZSh0aGlzLCBtZW1iZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0KG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGR1cmluZyBkZXYgdGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmID0gZ2V0SG9zdFJlZih0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgYXJlIHByb3h5aW5nIHRoZSBpbnN0YW5jZSAobm90IGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZsYWdzICYgMSAvKiBQUk9YWV9GTEFHUy5pc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykgPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGVsZW1lbnQgaXMgbm90IGNvbnN0cnVjdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVmLiRmbGFncyQgJiA4IC8qIEhPU1RfRkxBR1MuaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLykgPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG1lbWJlciBpcyBhIHByb3BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1lbWJlckZsYWdzICYgMzEgLyogTUVNQkVSX0ZMQUdTLlByb3AgKi8pICE9PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBtZW1iZXIgaXMgbm90IG11dGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1lbWJlckZsYWdzICYgMTAyNCAvKiBNRU1CRVJfRkxBR1MuTXV0YWJsZSAqLykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZURldldhcm4oYEBQcm9wKCkgXCIke21lbWJlck5hbWV9XCIgb24gPCR7Y21wTWV0YS4kdGFnTmFtZSR9PiBpcyBpbW11dGFibGUgYnV0IHdhcyBtb2RpZmllZCBmcm9tIHdpdGhpbiB0aGUgY29tcG9uZW50Llxcbk1vcmUgaW5mb3JtYXRpb246IGh0dHBzOi8vc3RlbmNpbGpzLmNvbS9kb2NzL3Byb3BlcnRpZXMjcHJvcC1tdXRhYmlsaXR5YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJveHlDb21wb25lbnQsIHNldCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSwgbmV3VmFsdWUsIGNtcE1ldGEpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChCVUlMRC5sYXp5TG9hZCAmJlxuICAgICAgICAgICAgICAgIEJVSUxELm1ldGhvZCAmJlxuICAgICAgICAgICAgICAgIGZsYWdzICYgMSAvKiBQUk9YWV9GTEFHUy5pc0VsZW1lbnRDb25zdHJ1Y3RvciAqLyAmJlxuICAgICAgICAgICAgICAgIG1lbWJlckZsYWdzICYgNjQgLyogTUVNQkVSX0ZMQUdTLk1ldGhvZCAqLykge1xuICAgICAgICAgICAgICAgIC8vIHByb3h5Q29tcG9uZW50IC0gbWV0aG9kXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgbWVtYmVyTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBnZXRIb3N0UmVmKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZi4kb25JbnN0YW5jZVByb21pc2UkLnRoZW4oKCkgPT4gcmVmLiRsYXp5SW5zdGFuY2UkW21lbWJlck5hbWVdKC4uLmFyZ3MpKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChCVUlMRC5vYnNlcnZlQXR0cmlidXRlICYmICghQlVJTEQubGF6eUxvYWQgfHwgZmxhZ3MgJiAxIC8qIFBST1hZX0ZMQUdTLmlzRWxlbWVudENvbnN0cnVjdG9yICovKSkge1xuICAgICAgICAgICAgY29uc3QgYXR0ck5hbWVUb1Byb3BOYW1lID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgcHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayA9IGZ1bmN0aW9uIChhdHRyTmFtZSwgX29sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wTmFtZSA9IGF0dHJOYW1lVG9Qcm9wTmFtZS5nZXQoYXR0ck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgSW4gYSB3ZWIgY29tcG9uZW50IGxpZmVjeWNsZSB0aGUgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIHJ1bnMgcHJpb3IgdG8gY29ubmVjdGVkQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgLy8gIGluIHRoZSBjYXNlIHdoZXJlIGFuIGF0dHJpYnV0ZSB3YXMgc2V0IGlubGluZS5cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYGh0bWxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgPG15LWNvbXBvbmVudCBzb21lLWF0dHJpYnV0ZT1cInNvbWUtdmFsdWVcIj48L215LWNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYFxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgVGhlcmUgaXMgYW4gZWRnZSBjYXNlIHdoZXJlIGEgZGV2ZWxvcGVyIHNldHMgdGhlIGF0dHJpYnV0ZSBpbmxpbmUgb24gYSBjdXN0b20gZWxlbWVudCBhbmQgdGhlblxuICAgICAgICAgICAgICAgICAgICAvLyAgcHJvZ3JhbW1hdGljYWxseSBjaGFuZ2VzIGl0IGJlZm9yZSBpdCBoYXMgYmVlbiB1cGdyYWRlZCBhcyBzaG93biBiZWxvdzpcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYGh0bWxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgPCEtLSB0aGlzIGNvbXBvbmVudCBoYXMgX25vdF8gYmVlbiB1cGdyYWRlZCB5ZXQgLS0+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDxteS1jb21wb25lbnQgaWQ9XCJ0ZXN0XCIgc29tZS1hdHRyaWJ1dGU9XCJzb21lLXZhbHVlXCI+PC9teS1jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDxzY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgLy8gZ3JhYiBub24tdXBncmFkZWQgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rlc3RcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgZWwuc29tZUF0dHJpYnV0ZSA9IFwiYW5vdGhlci12YWx1ZVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIC8vIHVwZ3JhZGUgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdteS1jb21wb25lbnQnLCBNeUNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDwvc2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICAvLyAgYGBgXG4gICAgICAgICAgICAgICAgICAgIC8vICBJbiB0aGlzIGNhc2UgaWYgd2UgZG8gbm90IHVuc2hhZG93IGhlcmUgYW5kIHVzZSB0aGUgdmFsdWUgb2YgdGhlIHNoYWRvd2luZyBwcm9wZXJ0eSwgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIC8vICB3aWxsIGJlIGNhbGxlZCB3aXRoIGBuZXdWYWx1ZSA9IFwic29tZS12YWx1ZVwiYCBhbmQgd2lsbCBzZXQgdGhlIHNoYWRvd2VkIHByb3BlcnR5ICh0aGlzLnNvbWVBdHRyaWJ1dGUgPSBcImFub3RoZXItdmFsdWVcIilcbiAgICAgICAgICAgICAgICAgICAgLy8gIHRvIHRoZSB2YWx1ZSB0aGF0IHdhcyBzZXQgaW5saW5lIGkuZS4gXCJzb21lLXZhbHVlXCIgZnJvbSBhYm92ZSBleGFtcGxlLiBXaGVuXG4gICAgICAgICAgICAgICAgICAgIC8vICB0aGUgY29ubmVjdGVkQ2FsbGJhY2sgYXR0ZW1wdHMgdG8gdW5zaGFkb3cgaXQgd2lsbCB1c2UgXCJzb21lLXZhbHVlXCIgYXMgdGhlIGluaXRpYWwgdmFsdWUgcmF0aGVyIHRoYW4gXCJhbm90aGVyLXZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIFRoZSBjYXNlIHdoZXJlIHRoZSBhdHRyaWJ1dGUgd2FzIE5PVCBzZXQgaW5saW5lIGJ1dCB3YXMgbm90IHNldCBwcm9ncmFtbWF0aWNhbGx5IHNoYWxsIGJlIGhhbmRsZWQvdW5zaGFkb3dlZFxuICAgICAgICAgICAgICAgICAgICAvLyAgYnkgY29ubmVjdGVkQ2FsbGJhY2sgYXMgdGhpcyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgd2lsbCBub3QgZmlyZS5cbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvYmVzdC1wcmFjdGljZXMjbGF6eS1wcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICBUT0RPKFNURU5DSUwtMTYpIHdlIHNob3VsZCB0aGluayBhYm91dCB3aGV0aGVyIG9yIG5vdCB3ZSBhY3R1YWxseSB3YW50IHRvIGJlIHJlZmxlY3RpbmcgdGhlIGF0dHJpYnV0ZXMgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gIHByb3BlcnRpZXMgaGVyZSBnaXZlbiB0aGF0IHRoaXMgZ29lcyBhZ2FpbnN0IGJlc3QgcHJhY3RpY2VzIG91dGxpbmVkIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvYmVzdC1wcmFjdGljZXMjYXZvaWQtcmVlbnRyYW5jeVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpc1twcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvdG90eXBlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHRoaXNbcHJvcE5hbWVdID09PSAnbnVtYmVyJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBwcm9wTmFtZSBleGlzdHMgb24gdGhlIHByb3RvdHlwZSBvZiBgQ3N0cmAsIHRoaXMgdXBkYXRlIG1heSBiZSBhIHJlc3VsdCBvZiBTdGVuY2lsIHVzaW5nIG5hdGl2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQVBJcyB0byByZWZsZWN0IHByb3BzIGFzIGF0dHJpYnV0ZXMuIENhbGxzIHRvIGBzZXRBdHRyaWJ1dGUoc29tZUVsZW1lbnQsIHByb3BOYW1lKWAgd2lsbCByZXN1bHQgaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBwcm9wTmFtZWAgdG8gYmUgY29udmVydGVkIHRvIGEgYERPTVN0cmluZ2AsIHdoaWNoIG1heSBub3QgYmUgd2hhdCB3ZSB3YW50IGZvciBvdGhlciBwcmltaXRpdmUgcHJvcHMuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wTmFtZV0gPSBuZXdWYWx1ZSA9PT0gbnVsbCAmJiB0eXBlb2YgdGhpc1twcm9wTmFtZV0gPT09ICdib29sZWFuJyA/IGZhbHNlIDogbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGF0dHJpYnV0ZXMgdG8gb2JzZXJ2ZVxuICAgICAgICAgICAgLy8gYW5kIGFsc28gY3JlYXRlIGEgbWFwIG9mIGh0bWwgYXR0cmlidXRlIG5hbWUgdG8ganMgcHJvcGVydHkgbmFtZVxuICAgICAgICAgICAgQ3N0ci5vYnNlcnZlZEF0dHJpYnV0ZXMgPSBtZW1iZXJzXG4gICAgICAgICAgICAgICAgLmZpbHRlcigoW18sIG1dKSA9PiBtWzBdICYgMTUgLyogTUVNQkVSX0ZMQUdTLkhhc0F0dHJpYnV0ZSAqLykgLy8gZmlsdGVyIHRvIG9ubHkga2VlcCBwcm9wcyB0aGF0IHNob3VsZCBtYXRjaCBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgLm1hcCgoW3Byb3BOYW1lLCBtXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gbVsxXSB8fCBwcm9wTmFtZTtcbiAgICAgICAgICAgICAgICBhdHRyTmFtZVRvUHJvcE5hbWUuc2V0KGF0dHJOYW1lLCBwcm9wTmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELnJlZmxlY3QgJiYgbVswXSAmIDUxMiAvKiBNRU1CRVJfRkxBR1MuUmVmbGVjdEF0dHIgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgY21wTWV0YS4kYXR0cnNUb1JlZmxlY3QkLnB1c2goW3Byb3BOYW1lLCBhdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ck5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gQ3N0cjtcbn07XG5jb25zdCBpbml0aWFsaXplQ29tcG9uZW50ID0gYXN5bmMgKGVsbSwgaG9zdFJlZiwgY21wTWV0YSwgaG1yVmVyc2lvbklkLCBDc3RyKSA9PiB7XG4gICAgLy8gaW5pdGlhbGl6ZUNvbXBvbmVudFxuICAgIGlmICgoQlVJTEQubGF6eUxvYWQgfHwgQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgfHwgQlVJTEQuc3R5bGUpICYmXG4gICAgICAgIChob3N0UmVmLiRmbGFncyQgJiAzMiAvKiBIT1NUX0ZMQUdTLmhhc0luaXRpYWxpemVkQ29tcG9uZW50ICovKSA9PT0gMCkge1xuICAgICAgICBpZiAoQlVJTEQubGF6eUxvYWQgfHwgQlVJTEQuaHlkcmF0ZUNsaWVudFNpZGUpIHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmVuJ3QgaW5pdGlhbGl6ZWQgdGhpcyBlbGVtZW50IHlldFxuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDMyIC8qIEhPU1RfRkxBR1MuaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQgKi87XG4gICAgICAgICAgICAvLyBsYXp5IGxvYWRlZCBjb21wb25lbnRzXG4gICAgICAgICAgICAvLyByZXF1ZXN0IHRoZSBjb21wb25lbnQncyBpbXBsZW1lbnRhdGlvbiB0byBiZVxuICAgICAgICAgICAgLy8gd2lyZWQgdXAgd2l0aCB0aGUgaG9zdCBlbGVtZW50XG4gICAgICAgICAgICBDc3RyID0gbG9hZE1vZHVsZShjbXBNZXRhLCBob3N0UmVmLCBobXJWZXJzaW9uSWQpO1xuICAgICAgICAgICAgaWYgKENzdHIudGhlbikge1xuICAgICAgICAgICAgICAgIC8vIEF3YWl0IGNyZWF0ZXMgYSBtaWNyby10YXNrIGF2b2lkIGlmIHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kTG9hZCA9IHVuaXF1ZVRpbWUoYHN0OmxvYWQ6JHtjbXBNZXRhLiR0YWdOYW1lJH06JHtob3N0UmVmLiRtb2RlTmFtZSR9YCwgYFtTdGVuY2lsXSBMb2FkIG1vZHVsZSBmb3IgPCR7Y21wTWV0YS4kdGFnTmFtZSR9PmApO1xuICAgICAgICAgICAgICAgIENzdHIgPSBhd2FpdCBDc3RyO1xuICAgICAgICAgICAgICAgIGVuZExvYWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoQlVJTEQuaXNEZXYgfHwgQlVJTEQuaXNEZWJ1ZykgJiYgIUNzdHIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvbnN0cnVjdG9yIGZvciBcIiR7Y21wTWV0YS4kdGFnTmFtZSR9IyR7aG9zdFJlZi4kbW9kZU5hbWUkfVwiIHdhcyBub3QgZm91bmRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5tZW1iZXIgJiYgIUNzdHIuaXNQcm94aWVkKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UndmUgbmV2ZXIgcHJveGllZCB0aGlzIENvbnN0cnVjdG9yIGJlZm9yZVxuICAgICAgICAgICAgICAgIC8vIGxldCdzIGFkZCB0aGUgZ2V0dGVycy9zZXR0ZXJzIHRvIGl0cyBwcm90b3R5cGUgYmVmb3JlXG4gICAgICAgICAgICAgICAgLy8gdGhlIGZpcnN0IHRpbWUgd2UgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgICAgICAgIGlmIChCVUlMRC53YXRjaENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNtcE1ldGEuJHdhdGNoZXJzJCA9IENzdHIud2F0Y2hlcnM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3h5Q29tcG9uZW50KENzdHIsIGNtcE1ldGEsIDIgLyogUFJPWFlfRkxBR1MucHJveHlTdGF0ZSAqLyk7XG4gICAgICAgICAgICAgICAgQ3N0ci5pc1Byb3hpZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZW5kTmV3SW5zdGFuY2UgPSBjcmVhdGVUaW1lKCdjcmVhdGVJbnN0YW5jZScsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgICAgICAgIC8vIG9rLCB0aW1lIHRvIGNvbnN0cnVjdCB0aGUgaW5zdGFuY2VcbiAgICAgICAgICAgIC8vIGJ1dCBsZXQncyBrZWVwIHRyYWNrIG9mIHdoZW4gd2Ugc3RhcnQgYW5kIHN0b3BcbiAgICAgICAgICAgIC8vIHNvIHRoYXQgdGhlIGdldHRlcnMvc2V0dGVycyBkb24ndCBpbmNvcnJlY3RseSBzdGVwIG9uIGRhdGFcbiAgICAgICAgICAgIGlmIChCVUlMRC5tZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gOCAvKiBIT1NUX0ZMQUdTLmlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3QgdGhlIGxhenktbG9hZGVkIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgICAgLy8gcGFzc2luZyB0aGUgaG9zdFJlZiBpcyB2ZXJ5IGltcG9ydGFudCBkdXJpbmdcbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdGlvbiBpbiBvcmRlciB0byBkaXJlY3RseSB3aXJlIHRvZ2V0aGVyIHRoZVxuICAgICAgICAgICAgLy8gaG9zdCBlbGVtZW50IGFuZCB0aGUgbGF6eS1sb2FkZWQgaW5zdGFuY2VcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbmV3IENzdHIoaG9zdFJlZik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5tZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfjggLyogSE9TVF9GTEFHUy5pc0NvbnN0cnVjdGluZ0luc3RhbmNlICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELndhdGNoQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMTI4IC8qIEhPU1RfRkxBR1MuaXNXYXRjaFJlYWR5ICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW5kTmV3SW5zdGFuY2UoKTtcbiAgICAgICAgICAgIGZpcmVDb25uZWN0ZWRDYWxsYmFjayhob3N0UmVmLiRsYXp5SW5zdGFuY2UkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIHN5bmMgY29uc3RydWN0b3IgY29tcG9uZW50XG4gICAgICAgICAgICBDc3RyID0gZWxtLmNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDMyIC8qIEhPU1RfRkxBR1MuaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQgKi87XG4gICAgICAgICAgICAvLyB3YWl0IGZvciB0aGUgQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5IHRvIG1hcmsgdGhlIGNvbXBvbmVudCBhcyByZWFkeSBiZWZvcmUgc2V0dGluZyBgaXNXYXRjaFJlYWR5YC4gT3RoZXJ3aXNlLFxuICAgICAgICAgICAgLy8gd2F0Y2hlcnMgbWF5IGZpcmUgcHJlbWF0dXJlbHkgaWYgYGN1c3RvbUVsZW1lbnRzLmdldCgpYC9gY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoKWAgcmVzb2x2ZXMgX2JlZm9yZV9cbiAgICAgICAgICAgIC8vIFN0ZW5jaWwgaGFzIGNvbXBsZXRlZCBpbnN0YW50aWF0aW5nIHRoZSBjb21wb25lbnQuXG4gICAgICAgICAgICBjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZChjbXBNZXRhLiR0YWdOYW1lJCkudGhlbigoKSA9PiAoaG9zdFJlZi4kZmxhZ3MkIHw9IDEyOCAvKiBIT1NUX0ZMQUdTLmlzV2F0Y2hSZWFkeSAqLykpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5zdHlsZSAmJiBDc3RyLnN0eWxlKSB7XG4gICAgICAgICAgICAvLyB0aGlzIGNvbXBvbmVudCBoYXMgc3R5bGVzIGJ1dCB3ZSBoYXZlbid0IHJlZ2lzdGVyZWQgdGhlbSB5ZXRcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IENzdHIuc3R5bGU7XG4gICAgICAgICAgICBpZiAoQlVJTEQubW9kZSAmJiB0eXBlb2Ygc3R5bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgPSBzdHlsZVsoaG9zdFJlZi4kbW9kZU5hbWUkID0gY29tcHV0ZU1vZGUoZWxtKSldO1xuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSAmJiBob3N0UmVmLiRtb2RlTmFtZSQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSgncy1tb2RlJywgaG9zdFJlZi4kbW9kZU5hbWUkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzY29wZUlkID0gZ2V0U2NvcGVJZChjbXBNZXRhLCBob3N0UmVmLiRtb2RlTmFtZSQpO1xuICAgICAgICAgICAgaWYgKCFzdHlsZXMuaGFzKHNjb3BlSWQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW5kUmVnaXN0ZXJTdHlsZXMgPSBjcmVhdGVUaW1lKCdyZWdpc3RlclN0eWxlcycsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgICAgICAgICAgICBpZiAoIUJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlICYmXG4gICAgICAgICAgICAgICAgICAgIEJVSUxELnNoYWRvd0RvbSAmJlxuICAgICAgICAgICAgICAgICAgICBCVUlMRC5zaGFkb3dEb21TaGltICYmXG4gICAgICAgICAgICAgICAgICAgIGNtcE1ldGEuJGZsYWdzJCAmIDggLyogQ01QX0ZMQUdTLm5lZWRzU2hhZG93RG9tU2hpbSAqLykge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IGF3YWl0IGltcG9ydCgnLi9zaGFkb3ctY3NzLmpzJykudGhlbigobSkgPT4gbS5zY29wZUNzcyhzdHlsZSwgc2NvcGVJZCwgZmFsc2UpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJTdHlsZShzY29wZUlkLCBzdHlsZSwgISEoY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBDTVBfRkxBR1Muc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykpO1xuICAgICAgICAgICAgICAgIGVuZFJlZ2lzdGVyU3R5bGVzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gd2UndmUgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgYSBsYXp5IGluc3RhbmNlXG4gICAgY29uc3QgYW5jZXN0b3JDb21wb25lbnQgPSBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQ7XG4gICAgY29uc3Qgc2NoZWR1bGUgPSAoKSA9PiBzY2hlZHVsZVVwZGF0ZShob3N0UmVmLCB0cnVlKTtcbiAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nICYmIGFuY2VzdG9yQ29tcG9uZW50ICYmIGFuY2VzdG9yQ29tcG9uZW50WydzLXJjJ10pIHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgaW5pdGlhbCBsb2FkIGFuZCB0aGlzIGNvbXBvbmVudCBpdCBoYXMgYW4gYW5jZXN0b3IgY29tcG9uZW50XG4gICAgICAgIC8vIGJ1dCB0aGUgYW5jZXN0b3IgY29tcG9uZW50IGhhcyBOT1QgZmlyZWQgaXRzIHdpbGwgdXBkYXRlIGxpZmVjeWNsZSB5ZXRcbiAgICAgICAgLy8gc28gbGV0J3MganVzdCBjb29sIG91ciBqZXRzIGFuZCB3YWl0IGZvciB0aGUgYW5jZXN0b3IgdG8gY29udGludWUgZmlyc3RcbiAgICAgICAgLy8gdGhpcyB3aWxsIGdldCBmaXJlZCBvZmYgd2hlbiB0aGUgYW5jZXN0b3IgY29tcG9uZW50XG4gICAgICAgIC8vIGZpbmFsbHkgZ2V0cyBhcm91bmQgdG8gcmVuZGVyaW5nIGl0cyBsYXp5IHNlbGZcbiAgICAgICAgLy8gZmlyZSBvZmYgdGhlIGluaXRpYWwgdXBkYXRlXG4gICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXJjJ10ucHVzaChzY2hlZHVsZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzY2hlZHVsZSgpO1xuICAgIH1cbn07XG5jb25zdCBmaXJlQ29ubmVjdGVkQ2FsbGJhY2sgPSAoaW5zdGFuY2UpID0+IHtcbiAgICBpZiAoQlVJTEQubGF6eUxvYWQgJiYgQlVJTEQuY29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgICAgc2FmZUNhbGwoaW5zdGFuY2UsICdjb25uZWN0ZWRDYWxsYmFjaycpO1xuICAgIH1cbn07XG5jb25zdCBjb25uZWN0ZWRDYWxsYmFjayA9IChlbG0pID0+IHtcbiAgICBpZiAoKHBsdC4kZmxhZ3MkICYgMSAvKiBQTEFURk9STV9GTEFHUy5pc1RtcERpc2Nvbm5lY3RlZCAqLykgPT09IDApIHtcbiAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoZWxtKTtcbiAgICAgICAgY29uc3QgY21wTWV0YSA9IGhvc3RSZWYuJGNtcE1ldGEkO1xuICAgICAgICBjb25zdCBlbmRDb25uZWN0ZWQgPSBjcmVhdGVUaW1lKCdjb25uZWN0ZWRDYWxsYmFjaycsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICAgICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldFBhcmVudCkge1xuICAgICAgICAgICAgLy8gb25seSBydW4gaWYgd2UgaGF2ZSBsaXN0ZW5lcnMgYmVpbmcgYXR0YWNoZWQgdG8gYSBwYXJlbnRcbiAgICAgICAgICAgIGFkZEhvc3RFdmVudExpc3RlbmVycyhlbG0sIGhvc3RSZWYsIGNtcE1ldGEuJGxpc3RlbmVycyQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGhvc3RSZWYuJGZsYWdzJCAmIDEgLyogSE9TVF9GTEFHUy5oYXNDb25uZWN0ZWQgKi8pKSB7XG4gICAgICAgICAgICAvLyBmaXJzdCB0aW1lIHRoaXMgY29tcG9uZW50IGhhcyBjb25uZWN0ZWRcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxIC8qIEhPU1RfRkxBR1MuaGFzQ29ubmVjdGVkICovO1xuICAgICAgICAgICAgbGV0IGhvc3RJZDtcbiAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlQ2xpZW50U2lkZSkge1xuICAgICAgICAgICAgICAgIGhvc3RJZCA9IGVsbS5nZXRBdHRyaWJ1dGUoSFlEUkFURV9JRCk7XG4gICAgICAgICAgICAgICAgaWYgKGhvc3RJZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmIHN1cHBvcnRzU2hhZG93ICYmIGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogQ01QX0ZMQUdTLnNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjb3BlSWQgPSBCVUlMRC5tb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhZGRTdHlsZShlbG0uc2hhZG93Um9vdCwgY21wTWV0YSwgZWxtLmdldEF0dHJpYnV0ZSgncy1tb2RlJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhZGRTdHlsZShlbG0uc2hhZG93Um9vdCwgY21wTWV0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZShzY29wZUlkICsgJy1oJywgc2NvcGVJZCArICctcycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemVDbGllbnRIeWRyYXRlKGVsbSwgY21wTWV0YS4kdGFnTmFtZSQsIGhvc3RJZCwgaG9zdFJlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uICYmICFob3N0SWQpIHtcbiAgICAgICAgICAgICAgICAvLyBpbml0VXBkYXRlXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHNsb3QgcG9seWZpbGwgaXMgcmVxdWlyZWQgd2UnbGwgbmVlZCB0byBwdXQgc29tZSBub2Rlc1xuICAgICAgICAgICAgICAgIC8vIGluIGhlcmUgdG8gYWN0IGFzIG9yaWdpbmFsIGNvbnRlbnQgYW5jaG9ycyBhcyB3ZSBtb3ZlIG5vZGVzIGFyb3VuZFxuICAgICAgICAgICAgICAgIC8vIGhvc3QgZWxlbWVudCBoYXMgYmVlbiBjb25uZWN0ZWQgdG8gdGhlIERPTVxuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSB8fFxuICAgICAgICAgICAgICAgICAgICAoKEJVSUxELnNsb3QgfHwgQlVJTEQuc2hhZG93RG9tKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgY21wTWV0YS4kZmxhZ3MkICYgKDQgLyogQ01QX0ZMQUdTLmhhc1Nsb3RSZWxvY2F0aW9uICovIHwgOCAvKiBDTVBfRkxBR1MubmVlZHNTaGFkb3dEb21TaGltICovKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q29udGVudFJlZmVyZW5jZShlbG0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBmaXJzdCBhbmNlc3RvciBjb21wb25lbnQgKGlmIHRoZXJlIGlzIG9uZSkgYW5kIHJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb21wb25lbnQgYXMgb25lIG9mIHRoZSBhY3RpdmVseSBsb2FkaW5nIGNoaWxkIGNvbXBvbmVudHMgZm9yIGl0cyBhbmNlc3RvclxuICAgICAgICAgICAgICAgIGxldCBhbmNlc3RvckNvbXBvbmVudCA9IGVsbTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoKGFuY2VzdG9yQ29tcG9uZW50ID0gYW5jZXN0b3JDb21wb25lbnQucGFyZW50Tm9kZSB8fCBhbmNlc3RvckNvbXBvbmVudC5ob3N0KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbGltYiB1cCB0aGUgYW5jZXN0b3JzIGxvb2tpbmcgZm9yIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgICAgICAvLyBjb21wb25lbnQgdGhhdCBoYXNuJ3QgZmluaXNoZWQgaXRzIGxpZmVjeWNsZSB1cGRhdGUgeWV0XG4gICAgICAgICAgICAgICAgICAgIGlmICgoQlVJTEQuaHlkcmF0ZUNsaWVudFNpZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2VzdG9yQ29tcG9uZW50Lm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jZXN0b3JDb21wb25lbnQuaGFzQXR0cmlidXRlKCdzLWlkJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgdGhpcyBjb21wb25lbnRzIGZpcnN0IGFuY2VzdG9yIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGlzIGNvbXBvbmVudCdzIGFuY2VzdG9yIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoVG9BbmNlc3Rvcihob3N0UmVmLCAoaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkID0gYW5jZXN0b3JDb21wb25lbnQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTGF6eSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3dlYi1jb21wb25lbnRzL2Jlc3QtcHJhY3RpY2VzI2xhenktcHJvcGVydGllc1xuICAgICAgICAgICAgaWYgKEJVSUxELnByb3AgJiYgIUJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlICYmIGNtcE1ldGEuJG1lbWJlcnMkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXMoY21wTWV0YS4kbWVtYmVycyQpLm1hcCgoW21lbWJlck5hbWUsIFttZW1iZXJGbGFnc11dKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZW1iZXJGbGFncyAmIDMxIC8qIE1FTUJFUl9GTEFHUy5Qcm9wICovICYmIGVsbS5oYXNPd25Qcm9wZXJ0eShtZW1iZXJOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbG1bbWVtYmVyTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZWxtW21lbWJlck5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtW21lbWJlck5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5pbml0aWFsaXplTmV4dFRpY2spIHtcbiAgICAgICAgICAgICAgICAvLyBjb25uZWN0ZWRDYWxsYmFjaywgdGFza1F1ZXVlLCBpbml0aWFsTG9hZFxuICAgICAgICAgICAgICAgIC8vIGFuZ3VsYXIgc2V0cyBhdHRyaWJ1dGUgQUZURVIgY29ubmVjdENhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTg5MDlcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xOTk0MFxuICAgICAgICAgICAgICAgIG5leHRUaWNrKCgpID0+IGluaXRpYWxpemVDb21wb25lbnQoZWxtLCBob3N0UmVmLCBjbXBNZXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsaXplQ29tcG9uZW50KGVsbSwgaG9zdFJlZiwgY21wTWV0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBub3QgdGhlIGZpcnN0IHRpbWUgdGhpcyBoYXMgY29ubmVjdGVkXG4gICAgICAgICAgICAvLyByZWF0dGFjaCBhbnkgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBob3N0XG4gICAgICAgICAgICAvLyBzaW5jZSB0aGV5IHdvdWxkIGhhdmUgYmVlbiByZW1vdmVkIHdoZW4gZGlzY29ubmVjdGVkXG4gICAgICAgICAgICBhZGRIb3N0RXZlbnRMaXN0ZW5lcnMoZWxtLCBob3N0UmVmLCBjbXBNZXRhLiRsaXN0ZW5lcnMkLCBmYWxzZSk7XG4gICAgICAgICAgICAvLyBmaXJlIG9mZiBjb25uZWN0ZWRDYWxsYmFjaygpIG9uIGNvbXBvbmVudCBpbnN0YW5jZVxuICAgICAgICAgICAgZmlyZUNvbm5lY3RlZENhbGxiYWNrKGhvc3RSZWYuJGxhenlJbnN0YW5jZSQpO1xuICAgICAgICB9XG4gICAgICAgIGVuZENvbm5lY3RlZCgpO1xuICAgIH1cbn07XG5jb25zdCBzZXRDb250ZW50UmVmZXJlbmNlID0gKGVsbSkgPT4ge1xuICAgIC8vIG9ubHkgcmVxdWlyZWQgd2hlbiB3ZSdyZSBOT1QgdXNpbmcgbmF0aXZlIHNoYWRvdyBkb20gKHNsb3QpXG4gICAgLy8gb3IgdGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmUgc2hhZG93IGRvbVxuICAgIC8vIGFuZCB0aGlzIGhvc3QgZWxlbWVudCB3YXMgTk9UIGNyZWF0ZWQgd2l0aCBTU1JcbiAgICAvLyBsZXQncyBwaWNrIG91dCB0aGUgaW5uZXIgY29udGVudCBmb3Igc2xvdCBwcm9qZWN0aW9uXG4gICAgLy8gY3JlYXRlIGEgbm9kZSB0byByZXByZXNlbnQgd2hlcmUgdGhlIG9yaWdpbmFsXG4gICAgLy8gY29udGVudCB3YXMgZmlyc3QgcGxhY2VkLCB3aGljaCBpcyB1c2VmdWwgbGF0ZXIgb25cbiAgICBjb25zdCBjb250ZW50UmVmRWxtID0gKGVsbVsncy1jciddID0gZG9jLmNyZWF0ZUNvbW1lbnQoQlVJTEQuaXNEZWJ1ZyA/IGBjb250ZW50LXJlZiAoaG9zdD0ke2VsbS5sb2NhbE5hbWV9KWAgOiAnJykpO1xuICAgIGNvbnRlbnRSZWZFbG1bJ3MtY24nXSA9IHRydWU7XG4gICAgZWxtLmluc2VydEJlZm9yZShjb250ZW50UmVmRWxtLCBlbG0uZmlyc3RDaGlsZCk7XG59O1xuY29uc3QgZGlzY29ubmVjdGVkQ2FsbGJhY2sgPSAoZWxtKSA9PiB7XG4gICAgaWYgKChwbHQuJGZsYWdzJCAmIDEgLyogUExBVEZPUk1fRkxBR1MuaXNUbXBEaXNjb25uZWN0ZWQgKi8pID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKGVsbSk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gQlVJTEQubGF6eUxvYWQgPyBob3N0UmVmLiRsYXp5SW5zdGFuY2UkIDogZWxtO1xuICAgICAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyKSB7XG4gICAgICAgICAgICBpZiAoaG9zdFJlZi4kcm1MaXN0ZW5lcnMkKSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kcm1MaXN0ZW5lcnMkLm1hcCgocm1MaXN0ZW5lcikgPT4gcm1MaXN0ZW5lcigpKTtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRybUxpc3RlbmVycyQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2xlYXIgQ1NTIHZhci1zaGltIHRyYWNraW5nXG4gICAgICAgIGlmIChCVUlMRC5jc3NWYXJTaGltICYmIHBsdC4kY3NzU2hpbSQpIHtcbiAgICAgICAgICAgIHBsdC4kY3NzU2hpbSQucmVtb3ZlSG9zdChlbG0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5sYXp5TG9hZCAmJiBCVUlMRC5kaXNjb25uZWN0ZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgc2FmZUNhbGwoaW5zdGFuY2UsICdkaXNjb25uZWN0ZWRDYWxsYmFjaycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5jbXBEaWRVbmxvYWQpIHtcbiAgICAgICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50RGlkVW5sb2FkJyk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IChDc3RyLCBjb21wYWN0TWV0YSkgPT4ge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZShjb21wYWN0TWV0YVsxXSwgcHJveHlDdXN0b21FbGVtZW50KENzdHIsIGNvbXBhY3RNZXRhKSk7XG59O1xuY29uc3QgcHJveHlDdXN0b21FbGVtZW50ID0gKENzdHIsIGNvbXBhY3RNZXRhKSA9PiB7XG4gICAgY29uc3QgY21wTWV0YSA9IHtcbiAgICAgICAgJGZsYWdzJDogY29tcGFjdE1ldGFbMF0sXG4gICAgICAgICR0YWdOYW1lJDogY29tcGFjdE1ldGFbMV0sXG4gICAgfTtcbiAgICBpZiAoQlVJTEQubWVtYmVyKSB7XG4gICAgICAgIGNtcE1ldGEuJG1lbWJlcnMkID0gY29tcGFjdE1ldGFbMl07XG4gICAgfVxuICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXIpIHtcbiAgICAgICAgY21wTWV0YS4kbGlzdGVuZXJzJCA9IGNvbXBhY3RNZXRhWzNdO1xuICAgIH1cbiAgICBpZiAoQlVJTEQud2F0Y2hDYWxsYmFjaykge1xuICAgICAgICBjbXBNZXRhLiR3YXRjaGVycyQgPSBDc3RyLiR3YXRjaGVycyQ7XG4gICAgfVxuICAgIGlmIChCVUlMRC5yZWZsZWN0KSB7XG4gICAgICAgIGNtcE1ldGEuJGF0dHJzVG9SZWZsZWN0JCA9IFtdO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmICFzdXBwb3J0c1NoYWRvdyAmJiBjbXBNZXRhLiRmbGFncyQgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgIGNtcE1ldGEuJGZsYWdzJCB8PSA4IC8qIENNUF9GTEFHUy5uZWVkc1NoYWRvd0RvbVNoaW0gKi87XG4gICAgfVxuICAgIGNvbnN0IG9yaWdpbmFsQ29ubmVjdGVkQ2FsbGJhY2sgPSBDc3RyLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaztcbiAgICBjb25zdCBvcmlnaW5hbERpc2Nvbm5lY3RlZENhbGxiYWNrID0gQ3N0ci5wcm90b3R5cGUuZGlzY29ubmVjdGVkQ2FsbGJhY2s7XG4gICAgT2JqZWN0LmFzc2lnbihDc3RyLnByb3RvdHlwZSwge1xuICAgICAgICBfX3JlZ2lzdGVySG9zdCgpIHtcbiAgICAgICAgICAgIHJlZ2lzdGVySG9zdCh0aGlzLCBjbXBNZXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFjayh0aGlzKTtcbiAgICAgICAgICAgIGlmIChCVUlMRC5jb25uZWN0ZWRDYWxsYmFjayAmJiBvcmlnaW5hbENvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxDb25uZWN0ZWRDYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKHRoaXMpO1xuICAgICAgICAgICAgaWYgKEJVSUxELmRpc2Nvbm5lY3RlZENhbGxiYWNrICYmIG9yaWdpbmFsRGlzY29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbERpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF9fYXR0YWNoU2hhZG93KCkge1xuICAgICAgICAgICAgaWYgKHN1cHBvcnRzU2hhZG93KSB7XG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELnNoYWRvd0RlbGVnYXRlc0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdvcGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYXRlc0ZvY3VzOiAhIShjbXBNZXRhLiRmbGFncyQgJiAxNiAvKiBDTVBfRkxBR1Muc2hhZG93RGVsZWdhdGVzRm9jdXMgKi8pLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhZG93Um9vdCA9IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgQ3N0ci5pcyA9IGNtcE1ldGEuJHRhZ05hbWUkO1xuICAgIHJldHVybiBwcm94eUNvbXBvbmVudChDc3RyLCBjbXBNZXRhLCAxIC8qIFBST1hZX0ZMQUdTLmlzRWxlbWVudENvbnN0cnVjdG9yICovIHwgMiAvKiBQUk9YWV9GTEFHUy5wcm94eVN0YXRlICovKTtcbn07XG5jb25zdCBmb3JjZU1vZGVVcGRhdGUgPSAoZWxtKSA9PiB7XG4gICAgaWYgKEJVSUxELnN0eWxlICYmIEJVSUxELm1vZGUgJiYgIUJVSUxELmxhenlMb2FkKSB7XG4gICAgICAgIGNvbnN0IG1vZGUgPSBjb21wdXRlTW9kZShlbG0pO1xuICAgICAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihlbG0pO1xuICAgICAgICBpZiAoaG9zdFJlZi4kbW9kZU5hbWUkICE9PSBtb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gICAgICAgICAgICBjb25zdCBvbGRTY29wZUlkID0gZWxtWydzLXNjJ107XG4gICAgICAgICAgICBjb25zdCBzY29wZUlkID0gZ2V0U2NvcGVJZChjbXBNZXRhLCBtb2RlKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZWxtLmNvbnN0cnVjdG9yLnN0eWxlW21vZGVdO1xuICAgICAgICAgICAgY29uc3QgZmxhZ3MgPSBjbXBNZXRhLiRmbGFncyQ7XG4gICAgICAgICAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXN0eWxlcy5oYXMoc2NvcGVJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJTdHlsZShzY29wZUlkLCBzdHlsZSwgISEoZmxhZ3MgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvc3RSZWYuJG1vZGVOYW1lJCA9IG1vZGU7XG4gICAgICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUob2xkU2NvcGVJZCArICctaCcsIG9sZFNjb3BlSWQgKyAnLXMnKTtcbiAgICAgICAgICAgICAgICBhdHRhY2hTdHlsZXMoaG9zdFJlZik7XG4gICAgICAgICAgICAgICAgZm9yY2VVcGRhdGUoZWxtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBwYXRjaENsb25lTm9kZSA9IChIb3N0RWxlbWVudFByb3RvdHlwZSkgPT4ge1xuICAgIGNvbnN0IG9yZ0Nsb25lTm9kZSA9IEhvc3RFbGVtZW50UHJvdG90eXBlLmNsb25lTm9kZTtcbiAgICBIb3N0RWxlbWVudFByb3RvdHlwZS5jbG9uZU5vZGUgPSBmdW5jdGlvbiAoZGVlcCkge1xuICAgICAgICBjb25zdCBzcmNOb2RlID0gdGhpcztcbiAgICAgICAgY29uc3QgaXNTaGFkb3dEb20gPSBCVUlMRC5zaGFkb3dEb20gPyBzcmNOb2RlLnNoYWRvd1Jvb3QgJiYgc3VwcG9ydHNTaGFkb3cgOiBmYWxzZTtcbiAgICAgICAgY29uc3QgY2xvbmVkTm9kZSA9IG9yZ0Nsb25lTm9kZS5jYWxsKHNyY05vZGUsIGlzU2hhZG93RG9tID8gZGVlcCA6IGZhbHNlKTtcbiAgICAgICAgaWYgKEJVSUxELnNsb3QgJiYgIWlzU2hhZG93RG9tICYmIGRlZXApIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGxldCBzbG90dGVkLCBub25TdGVuY2lsTm9kZTtcbiAgICAgICAgICAgIGNvbnN0IHN0ZW5jaWxQcml2YXRlcyA9IFtcbiAgICAgICAgICAgICAgICAncy1pZCcsXG4gICAgICAgICAgICAgICAgJ3MtY3InLFxuICAgICAgICAgICAgICAgICdzLWxyJyxcbiAgICAgICAgICAgICAgICAncy1yYycsXG4gICAgICAgICAgICAgICAgJ3Mtc2MnLFxuICAgICAgICAgICAgICAgICdzLXAnLFxuICAgICAgICAgICAgICAgICdzLWNuJyxcbiAgICAgICAgICAgICAgICAncy1zcicsXG4gICAgICAgICAgICAgICAgJ3Mtc24nLFxuICAgICAgICAgICAgICAgICdzLWhuJyxcbiAgICAgICAgICAgICAgICAncy1vbCcsXG4gICAgICAgICAgICAgICAgJ3MtbnInLFxuICAgICAgICAgICAgICAgICdzLXNpJyxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBmb3IgKDsgaSA8IHNyY05vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNsb3R0ZWQgPSBzcmNOb2RlLmNoaWxkTm9kZXNbaV1bJ3MtbnInXTtcbiAgICAgICAgICAgICAgICBub25TdGVuY2lsTm9kZSA9IHN0ZW5jaWxQcml2YXRlcy5ldmVyeSgocHJpdmF0ZUZpZWxkKSA9PiAhc3JjTm9kZS5jaGlsZE5vZGVzW2ldW3ByaXZhdGVGaWVsZF0pO1xuICAgICAgICAgICAgICAgIGlmIChzbG90dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5hcHBlbmRDaGlsZFNsb3RGaXggJiYgY2xvbmVkTm9kZS5fX2FwcGVuZENoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWROb2RlLl9fYXBwZW5kQ2hpbGQoc2xvdHRlZC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkTm9kZS5hcHBlbmRDaGlsZChzbG90dGVkLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vblN0ZW5jaWxOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb25lZE5vZGUuYXBwZW5kQ2hpbGQoc3JjTm9kZS5jaGlsZE5vZGVzW2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbG9uZWROb2RlO1xuICAgIH07XG59O1xuY29uc3QgcGF0Y2hTbG90QXBwZW5kQ2hpbGQgPSAoSG9zdEVsZW1lbnRQcm90b3R5cGUpID0+IHtcbiAgICBIb3N0RWxlbWVudFByb3RvdHlwZS5fX2FwcGVuZENoaWxkID0gSG9zdEVsZW1lbnRQcm90b3R5cGUuYXBwZW5kQ2hpbGQ7XG4gICAgSG9zdEVsZW1lbnRQcm90b3R5cGUuYXBwZW5kQ2hpbGQgPSBmdW5jdGlvbiAobmV3Q2hpbGQpIHtcbiAgICAgICAgY29uc3Qgc2xvdE5hbWUgPSAobmV3Q2hpbGRbJ3Mtc24nXSA9IGdldFNsb3ROYW1lKG5ld0NoaWxkKSk7XG4gICAgICAgIGNvbnN0IHNsb3ROb2RlID0gZ2V0SG9zdFNsb3ROb2RlKHRoaXMuY2hpbGROb2Rlcywgc2xvdE5hbWUpO1xuICAgICAgICBpZiAoc2xvdE5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3RDaGlsZE5vZGVzID0gZ2V0SG9zdFNsb3RDaGlsZE5vZGVzKHNsb3ROb2RlLCBzbG90TmFtZSk7XG4gICAgICAgICAgICBjb25zdCBhcHBlbmRBZnRlciA9IHNsb3RDaGlsZE5vZGVzW3Nsb3RDaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgcmV0dXJuIGFwcGVuZEFmdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0NoaWxkLCBhcHBlbmRBZnRlci5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX19hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgfTtcbn07XG4vKipcbiAqIFBhdGNoZXMgdGhlIHRleHQgY29udGVudCBvZiBhbiB1bm5hbWVkIHNsb3R0ZWQgbm9kZSBpbnNpZGUgYSBzY29wZWQgY29tcG9uZW50XG4gKiBAcGFyYW0gaG9zdEVsZW1lbnRQcm90b3R5cGUgdGhlIGBFbGVtZW50YCB0byBiZSBwYXRjaGVkXG4gKiBAcGFyYW0gY21wTWV0YSBjb21wb25lbnQgcnVudGltZSBtZXRhZGF0YSB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgY29tcG9uZW50IHNob3VsZCBiZSBwYXRjaGVkIG9yIG5vdFxuICovXG5jb25zdCBwYXRjaFRleHRDb250ZW50ID0gKGhvc3RFbGVtZW50UHJvdG90eXBlLCBjbXBNZXRhKSA9PiB7XG4gICAgaWYgKEJVSUxELnNjb3BlZCAmJiBjbXBNZXRhLiRmbGFncyQgJiAyIC8qIENNUF9GTEFHUy5zY29wZWRDc3NFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLCAndGV4dENvbnRlbnQnKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGhvc3RFbGVtZW50UHJvdG90eXBlLCAnX190ZXh0Q29udGVudCcsIGRlc2NyaXB0b3IpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaG9zdEVsZW1lbnRQcm90b3R5cGUsICd0ZXh0Q29udGVudCcsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSAnZGVmYXVsdCBzbG90Jywgd2hpY2ggd291bGQgYmUgdGhlIGZpcnN0IHNsb3QgaW4gYSBzaGFkb3cgdHJlZSAoaWYgd2Ugd2VyZSB1c2luZyBvbmUpLCB3aG9zZSBuYW1lIGlzXG4gICAgICAgICAgICAgICAgLy8gdGhlIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3ROb2RlID0gZ2V0SG9zdFNsb3ROb2RlKHRoaXMuY2hpbGROb2RlcywgJycpO1xuICAgICAgICAgICAgICAgIC8vIHdoZW4gYSBzbG90IG5vZGUgaXMgZm91bmQsIHRoZSB0ZXh0Q29udGVudCBfbWF5XyBiZSBmb3VuZCBpbiB0aGUgbmV4dCBzaWJsaW5nICh0ZXh0KSBub2RlLCBkZXBlbmRpbmcgb24gaG93XG4gICAgICAgICAgICAgICAgLy8gbm9kZXMgd2VyZSByZW9yZGVyZWQgZHVyaW5nIHRoZSB2ZG9tIHJlbmRlci4gZmlyc3QgdHJ5IHRvIGdldCB0aGUgdGV4dCBjb250ZW50IGZyb20gdGhlIHNpYmxpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCgoX2EgPSBzbG90Tm9kZSA9PT0gbnVsbCB8fCBzbG90Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xvdE5vZGUubmV4dFNpYmxpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub2RlVHlwZSkgPT09IDMgLyogTk9ERV9UWVBFUy5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNsb3ROb2RlLm5leHRTaWJsaW5nLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzbG90Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2xvdE5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWxsYmFjayB0byB0aGUgb3JpZ2luYWwgaW1wbGVtZW50YXRpb25cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX190ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgJ2RlZmF1bHQgc2xvdCcsIHdoaWNoIHdvdWxkIGJlIHRoZSBmaXJzdCBzbG90IGluIGEgc2hhZG93IHRyZWUgKGlmIHdlIHdlcmUgdXNpbmcgb25lKSwgd2hvc2UgbmFtZSBpc1xuICAgICAgICAgICAgICAgIC8vIHRoZSBlbXB0eSBzdHJpbmdcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90Tm9kZSA9IGdldEhvc3RTbG90Tm9kZSh0aGlzLmNoaWxkTm9kZXMsICcnKTtcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGEgc2xvdCBub2RlIGlzIGZvdW5kLCB0aGUgdGV4dENvbnRlbnQgX21heV8gbmVlZCB0byBiZSBwbGFjZWQgaW4gdGhlIG5leHQgc2libGluZyAodGV4dCkgbm9kZSxcbiAgICAgICAgICAgICAgICAvLyBkZXBlbmRpbmcgb24gaG93IG5vZGVzIHdlcmUgcmVvcmRlcmVkIGR1cmluZyB0aGUgdmRvbSByZW5kZXIuIGZpcnN0IHRyeSB0byBzZXQgdGhlIHRleHQgY29udGVudCBvbiB0aGVcbiAgICAgICAgICAgICAgICAvLyBzaWJsaW5nLlxuICAgICAgICAgICAgICAgIGlmICgoKF9hID0gc2xvdE5vZGUgPT09IG51bGwgfHwgc2xvdE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsb3ROb2RlLm5leHRTaWJsaW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZVR5cGUpID09PSAzIC8qIE5PREVfVFlQRVMuVEVYVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3ROb2RlLm5leHRTaWJsaW5nLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNsb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3ROb2RlLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBjb3VsZG4ndCBmaW5kIGEgc2xvdCwgYnV0IHRoYXQgZG9lc24ndCBtZWFuIHRoYXQgdGhlcmUgaXNuJ3Qgb25lLiBpZiB0aGlzIGNoZWNrIHJhbiBiZWZvcmUgdGhlIERPTVxuICAgICAgICAgICAgICAgICAgICAvLyBsb2FkZWQsIHdlIGNvdWxkIGhhdmUgbWlzc2VkIGl0LiBjaGVjayBmb3IgYSBjb250ZW50IHJlZmVyZW5jZSBlbGVtZW50IG9uIHRoZSBzY29wZWQgY29tcG9uZW50IGFuZCBpbnNlcnRcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX3RleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRSZWZFbG0gPSB0aGlzWydzLWNyJ107XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50UmVmRWxtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc2VydEJlZm9yZShjb250ZW50UmVmRWxtLCB0aGlzLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IHBhdGNoQ2hpbGRTbG90Tm9kZXMgPSAoZWxtLCBjbXBNZXRhKSA9PiB7XG4gICAgY2xhc3MgRmFrZU5vZGVMaXN0IGV4dGVuZHMgQXJyYXkge1xuICAgICAgICBpdGVtKG4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW25dO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjbXBNZXRhLiRmbGFncyQgJiA4IC8qIENNUF9GTEFHUy5uZWVkc1NoYWRvd0RvbVNoaW0gKi8pIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2Rlc0ZuID0gZWxtLl9fbG9va3VwR2V0dGVyX18oJ2NoaWxkTm9kZXMnKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsbSwgJ2NoaWxkcmVuJywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKChuKSA9PiBuLm5vZGVUeXBlID09PSAxKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxtLCAnY2hpbGRFbGVtZW50Q291bnQnLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsbSwgJ2NoaWxkTm9kZXMnLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGROb2RlcyA9IGNoaWxkTm9kZXNGbi5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIGlmICgocGx0LiRmbGFncyQgJiAxIC8qIFBMQVRGT1JNX0ZMQUdTLmlzVG1wRGlzY29ubmVjdGVkICovKSA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICBnZXRIb3N0UmVmKHRoaXMpLiRmbGFncyQgJiAyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IEZha2VOb2RlTGlzdCgpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNsb3QgPSBjaGlsZE5vZGVzW2ldWydzLW5yJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2xvdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHNsb3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBGYWtlTm9kZUxpc3QuZnJvbShjaGlsZE5vZGVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBnZXRTbG90TmFtZSA9IChub2RlKSA9PiBub2RlWydzLXNuJ10gfHwgKG5vZGUubm9kZVR5cGUgPT09IDEgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKSkgfHwgJyc7XG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHNlYXJjaGVzIGEgc2VyaWVzIG9mIGNoaWxkIG5vZGVzIGZvciBhIHNsb3Qgd2l0aCB0aGUgcHJvdmlkZWQgbmFtZS5cbiAqIEBwYXJhbSBjaGlsZE5vZGVzIHRoZSBub2RlcyB0byBzZWFyY2ggZm9yIGEgc2xvdCB3aXRoIGEgc3BlY2lmaWMgbmFtZS5cbiAqIEBwYXJhbSBzbG90TmFtZSB0aGUgbmFtZSBvZiB0aGUgc2xvdCB0byBtYXRjaCBvbi5cbiAqIEByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBzbG90IG5vZGUgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCBuYW1lLCBgbnVsbGAgb3RoZXJ3aXNlXG4gKi9cbmNvbnN0IGdldEhvc3RTbG90Tm9kZSA9IChjaGlsZE5vZGVzLCBzbG90TmFtZSkgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgY2hpbGROb2RlO1xuICAgIGZvciAoOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiAoY2hpbGROb2RlWydzLXNyJ10gJiYgY2hpbGROb2RlWydzLXNuJ10gPT09IHNsb3ROYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkTm9kZSA9IGdldEhvc3RTbG90Tm9kZShjaGlsZE5vZGUuY2hpbGROb2Rlcywgc2xvdE5hbWUpO1xuICAgICAgICBpZiAoY2hpbGROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGROb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGdldEhvc3RTbG90Q2hpbGROb2RlcyA9IChuLCBzbG90TmFtZSkgPT4ge1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBbbl07XG4gICAgd2hpbGUgKChuID0gbi5uZXh0U2libGluZykgJiYgblsncy1zbiddID09PSBzbG90TmFtZSkge1xuICAgICAgICBjaGlsZE5vZGVzLnB1c2gobik7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZE5vZGVzO1xufTtcbmNvbnN0IGhtclN0YXJ0ID0gKGVsbSwgY21wTWV0YSwgaG1yVmVyc2lvbklkKSA9PiB7XG4gICAgLy8gwq9cXF8o44OEKV8vwq9cbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihlbG0pO1xuICAgIC8vIHJlc2V0IHN0YXRlIGZsYWdzIHRvIG9ubHkgaGF2ZSBiZWVuIGNvbm5lY3RlZFxuICAgIGhvc3RSZWYuJGZsYWdzJCA9IDEgLyogSE9TVF9GTEFHUy5oYXNDb25uZWN0ZWQgKi87XG4gICAgLy8gVE9ET1xuICAgIC8vIGRldGF0Y2ggYW55IGV2ZW50IGxpc3RlbmVycyB0aGF0IG1heSBoYXZlIGJlZW4gYWRkZWRcbiAgICAvLyBiZWNhdXNlIHdlJ3JlIG5vdCBwYXNzaW5nIGFuIGV4YWN0IGV2ZW50IG5hbWUgaXQnbGxcbiAgICAvLyByZW1vdmUgYWxsIG9mIHRoaXMgZWxlbWVudCdzIGV2ZW50LCB3aGljaCBpcyBnb29kXG4gICAgLy8gY3JlYXRlIGEgY2FsbGJhY2sgZm9yIHdoZW4gdGhpcyBjb21wb25lbnQgZmluaXNoZXMgaG1yXG4gICAgZWxtWydzLWhtci1sb2FkJ10gPSAoKSA9PiB7XG4gICAgICAgIC8vIGZpbmlzaGVkIGhtciBmb3IgdGhpcyBlbGVtZW50XG4gICAgICAgIGRlbGV0ZSBlbG1bJ3MtaG1yLWxvYWQnXTtcbiAgICB9O1xuICAgIC8vIHJlLWluaXRpYWxpemUgdGhlIGNvbXBvbmVudFxuICAgIGluaXRpYWxpemVDb21wb25lbnQoZWxtLCBob3N0UmVmLCBjbXBNZXRhLCBobXJWZXJzaW9uSWQpO1xufTtcbmNvbnN0IGJvb3RzdHJhcExhenkgPSAobGF6eUJ1bmRsZXMsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBpZiAoQlVJTEQucHJvZmlsZSAmJiBwZXJmb3JtYW5jZS5tYXJrKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3N0OmFwcDpzdGFydCcpO1xuICAgIH1cbiAgICBpbnN0YWxsRGV2VG9vbHMoKTtcbiAgICBjb25zdCBlbmRCb290c3RyYXAgPSBjcmVhdGVUaW1lKCdib290c3RyYXBMYXp5Jyk7XG4gICAgY29uc3QgY21wVGFncyA9IFtdO1xuICAgIGNvbnN0IGV4Y2x1ZGUgPSBvcHRpb25zLmV4Y2x1ZGUgfHwgW107XG4gICAgY29uc3QgY3VzdG9tRWxlbWVudHMgPSB3aW4uY3VzdG9tRWxlbWVudHM7XG4gICAgY29uc3QgaGVhZCA9IGRvYy5oZWFkO1xuICAgIGNvbnN0IG1ldGFDaGFyc2V0ID0gLypAX19QVVJFX18qLyBoZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbY2hhcnNldF0nKTtcbiAgICBjb25zdCB2aXNpYmlsaXR5U3R5bGUgPSAvKkBfX1BVUkVfXyovIGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGNvbnN0IGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzID0gW107XG4gICAgY29uc3Qgc3R5bGVzID0gLypAX19QVVJFX18qLyBkb2MucXVlcnlTZWxlY3RvckFsbChgWyR7SFlEUkFURURfU1RZTEVfSUR9XWApO1xuICAgIGxldCBhcHBMb2FkRmFsbGJhY2s7XG4gICAgbGV0IGlzQm9vdHN0cmFwcGluZyA9IHRydWU7XG4gICAgbGV0IGkgPSAwO1xuICAgIE9iamVjdC5hc3NpZ24ocGx0LCBvcHRpb25zKTtcbiAgICBwbHQuJHJlc291cmNlc1VybCQgPSBuZXcgVVJMKG9wdGlvbnMucmVzb3VyY2VzVXJsIHx8ICcuLycsIGRvYy5iYXNlVVJJKS5ocmVmO1xuICAgIGlmIChCVUlMRC5hc3luY1F1ZXVlKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnN5bmNRdWV1ZSkge1xuICAgICAgICAgICAgcGx0LiRmbGFncyQgfD0gNCAvKiBQTEFURk9STV9GTEFHUy5xdWV1ZVN5bmMgKi87XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKEJVSUxELmh5ZHJhdGVDbGllbnRTaWRlKSB7XG4gICAgICAgIC8vIElmIHRoZSBhcHAgaXMgYWxyZWFkeSBoeWRyYXRlZCB0aGVyZSBpcyBub3QgcG9pbnQgdG8gZGlzYWJsZSB0aGVcbiAgICAgICAgLy8gYXN5bmMgcXVldWUuIFRoaXMgd2lsbCBpbXByb3ZlIHRoZSBmaXJzdCBpbnB1dCBkZWxheVxuICAgICAgICBwbHQuJGZsYWdzJCB8PSAyIC8qIFBMQVRGT1JNX0ZMQUdTLmFwcExvYWRlZCAqLztcbiAgICB9XG4gICAgaWYgKEJVSUxELmh5ZHJhdGVDbGllbnRTaWRlICYmIEJVSUxELnNoYWRvd0RvbSkge1xuICAgICAgICBmb3IgKDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVnaXN0ZXJTdHlsZShzdHlsZXNbaV0uZ2V0QXR0cmlidXRlKEhZRFJBVEVEX1NUWUxFX0lEKSwgY29udmVydFNjb3BlZFRvU2hhZG93KHN0eWxlc1tpXS5pbm5lckhUTUwpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsYXp5QnVuZGxlcy5tYXAoKGxhenlCdW5kbGUpID0+IHtcbiAgICAgICAgbGF6eUJ1bmRsZVsxXS5tYXAoKGNvbXBhY3RNZXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbXBNZXRhID0ge1xuICAgICAgICAgICAgICAgICRmbGFncyQ6IGNvbXBhY3RNZXRhWzBdLFxuICAgICAgICAgICAgICAgICR0YWdOYW1lJDogY29tcGFjdE1ldGFbMV0sXG4gICAgICAgICAgICAgICAgJG1lbWJlcnMkOiBjb21wYWN0TWV0YVsyXSxcbiAgICAgICAgICAgICAgICAkbGlzdGVuZXJzJDogY29tcGFjdE1ldGFbM10sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKEJVSUxELm1lbWJlcikge1xuICAgICAgICAgICAgICAgIGNtcE1ldGEuJG1lbWJlcnMkID0gY29tcGFjdE1ldGFbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgY21wTWV0YS4kbGlzdGVuZXJzJCA9IGNvbXBhY3RNZXRhWzNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELnJlZmxlY3QpIHtcbiAgICAgICAgICAgICAgICBjbXBNZXRhLiRhdHRyc1RvUmVmbGVjdCQgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC53YXRjaENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY21wTWV0YS4kd2F0Y2hlcnMkID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmICFzdXBwb3J0c1NoYWRvdyAmJiBjbXBNZXRhLiRmbGFncyQgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgY21wTWV0YS4kZmxhZ3MkIHw9IDggLyogQ01QX0ZMQUdTLm5lZWRzU2hhZG93RG9tU2hpbSAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSBCVUlMRC50cmFuc2Zvcm1UYWdOYW1lICYmIG9wdGlvbnMudHJhbnNmb3JtVGFnTmFtZVxuICAgICAgICAgICAgICAgID8gb3B0aW9ucy50cmFuc2Zvcm1UYWdOYW1lKGNtcE1ldGEuJHRhZ05hbWUkKVxuICAgICAgICAgICAgICAgIDogY21wTWV0YS4kdGFnTmFtZSQ7XG4gICAgICAgICAgICBjb25zdCBIb3N0RWxlbWVudCA9IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgICAgICAgICAgICAgIC8vIFN0ZW5jaWxMYXp5SG9zdFxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yKHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICBzdXBlcihzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVySG9zdChzZWxmLCBjbXBNZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiBjbXBNZXRhLiRmbGFncyQgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGNvbXBvbmVudCBpcyB1c2luZyBzaGFkb3cgZG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhpcyBicm93c2VyIHN1cHBvcnRzIHNoYWRvdyBkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgcmVhZC1vbmx5IHByb3BlcnR5IFwic2hhZG93Um9vdFwiIHRvIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZGluZyB0aGUgc2hhZG93IHJvb3QgYnVpbGQgY29uZGl0aW9uYWxzIHRvIG1pbmltaXplIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0c1NoYWRvdykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zaGFkb3dEZWxlZ2F0ZXNGb2N1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0dGFjaFNoYWRvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAnb3BlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0ZXNGb2N1czogISEoY21wTWV0YS4kZmxhZ3MkICYgMTYgLyogQ01QX0ZMQUdTLnNoYWRvd0RlbGVnYXRlc0ZvY3VzICovKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgJiYgISgnc2hhZG93Um9vdCcgaW4gc2VsZikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNoYWRvd1Jvb3QgPSBzZWxmO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zbG90Q2hpbGROb2Rlc0ZpeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hDaGlsZFNsb3ROb2RlcyhzZWxmLCBjbXBNZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwcExvYWRGYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFwcExvYWRGYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBMb2FkRmFsbGJhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0Jvb3RzdHJhcHBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbm5lY3RlZENhbGxiYWNrIHdpbGwgYmUgcHJvY2Vzc2VkIG9uY2UgYWxsIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHJlZ2lzdGVyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzLnB1c2godGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHQuam1wKCgpID0+IGNvbm5lY3RlZENhbGxiYWNrKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgICAgICAgICAgcGx0LmptcCgoKSA9PiBkaXNjb25uZWN0ZWRDYWxsYmFjayh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbXBvbmVudE9uUmVhZHkoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRIb3N0UmVmKHRoaXMpLiRvblJlYWR5UHJvbWlzZSQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChCVUlMRC5jbG9uZU5vZGVGaXgpIHtcbiAgICAgICAgICAgICAgICBwYXRjaENsb25lTm9kZShIb3N0RWxlbWVudC5wcm90b3R5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELmFwcGVuZENoaWxkU2xvdEZpeCkge1xuICAgICAgICAgICAgICAgIHBhdGNoU2xvdEFwcGVuZENoaWxkKEhvc3RFbGVtZW50LnByb3RvdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuaG90TW9kdWxlUmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBIb3N0RWxlbWVudC5wcm90b3R5cGVbJ3MtaG1yJ10gPSBmdW5jdGlvbiAoaG1yVmVyc2lvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgIGhtclN0YXJ0KHRoaXMsIGNtcE1ldGEsIGhtclZlcnNpb25JZCk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5zY29wZWRTbG90VGV4dENvbnRlbnRGaXgpIHtcbiAgICAgICAgICAgICAgICBwYXRjaFRleHRDb250ZW50KEhvc3RFbGVtZW50LnByb3RvdHlwZSwgY21wTWV0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbXBNZXRhLiRsYXp5QnVuZGxlSWQkID0gbGF6eUJ1bmRsZVswXTtcbiAgICAgICAgICAgIGlmICghZXhjbHVkZS5pbmNsdWRlcyh0YWdOYW1lKSAmJiAhY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKSB7XG4gICAgICAgICAgICAgICAgY21wVGFncy5wdXNoKHRhZ05hbWUpO1xuICAgICAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSh0YWdOYW1lLCBwcm94eUNvbXBvbmVudChIb3N0RWxlbWVudCwgY21wTWV0YSwgMSAvKiBQUk9YWV9GTEFHUy5pc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAoQlVJTEQuaW52aXNpYmxlUHJlaHlkcmF0aW9uICYmIChCVUlMRC5oeWRyYXRlZENsYXNzIHx8IEJVSUxELmh5ZHJhdGVkQXR0cmlidXRlKSkge1xuICAgICAgICB2aXNpYmlsaXR5U3R5bGUuaW5uZXJIVE1MID0gY21wVGFncyArIEhZRFJBVEVEX0NTUztcbiAgICAgICAgdmlzaWJpbGl0eVN0eWxlLnNldEF0dHJpYnV0ZSgnZGF0YS1zdHlsZXMnLCAnJyk7XG4gICAgICAgIC8vIEFwcGx5IENTUCBub25jZSB0byB0aGUgc3R5bGUgdGFnIGlmIGl0IGV4aXN0c1xuICAgICAgICBjb25zdCBub25jZSA9IChfYSA9IHBsdC4kbm9uY2UkKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBxdWVyeU5vbmNlTWV0YVRhZ0NvbnRlbnQoZG9jKTtcbiAgICAgICAgaWYgKG5vbmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICAgICAgICB9XG4gICAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHZpc2liaWxpdHlTdHlsZSwgbWV0YUNoYXJzZXQgPyBtZXRhQ2hhcnNldC5uZXh0U2libGluZyA6IGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIFByb2Nlc3MgZGVmZXJyZWQgY29ubmVjdGVkQ2FsbGJhY2tzIG5vdyBhbGwgY29tcG9uZW50cyBoYXZlIGJlZW4gcmVnaXN0ZXJlZFxuICAgIGlzQm9vdHN0cmFwcGluZyA9IGZhbHNlO1xuICAgIGlmIChkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MubWFwKChob3N0KSA9PiBob3N0LmNvbm5lY3RlZENhbGxiYWNrKCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKEJVSUxELnByb2ZpbGUpIHtcbiAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4gKGFwcExvYWRGYWxsYmFjayA9IHNldFRpbWVvdXQoYXBwRGlkTG9hZCwgMzAsICd0aW1lb3V0JykpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4gKGFwcExvYWRGYWxsYmFjayA9IHNldFRpbWVvdXQoYXBwRGlkTG9hZCwgMzApKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRmFsbGJhY2sgYXBwTG9hZCBldmVudFxuICAgIGVuZEJvb3RzdHJhcCgpO1xufTtcbmNvbnN0IGdldENvbm5lY3QgPSAoX3JlZiwgdGFnTmFtZSkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudE9uUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgIGxldCBlbG0gPSBkb2MucXVlcnlTZWxlY3Rvcih0YWdOYW1lKTtcbiAgICAgICAgaWYgKCFlbG0pIHtcbiAgICAgICAgICAgIGVsbSA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICAgICAgZG9jLmJvZHkuYXBwZW5kQ2hpbGQoZWxtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIGVsbS5jb21wb25lbnRPblJlYWR5ID09PSAnZnVuY3Rpb24nID8gZWxtLmNvbXBvbmVudE9uUmVhZHkoKSA6IFByb21pc2UucmVzb2x2ZShlbG0pO1xuICAgIH07XG4gICAgY29uc3QgY3JlYXRlID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudE9uUmVhZHkoKS50aGVuKChlbCkgPT4gZWwuY3JlYXRlKC4uLmFyZ3MpKTtcbiAgICB9O1xuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZSxcbiAgICAgICAgY29tcG9uZW50T25SZWFkeSxcbiAgICB9O1xufTtcbmNvbnN0IGdldENvbnRleHQgPSAoX2VsbSwgY29udGV4dCkgPT4ge1xuICAgIGlmIChjb250ZXh0IGluIENvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIENvbnRleHRbY29udGV4dF07XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICd3aW5kb3cnKSB7XG4gICAgICAgIHJldHVybiB3aW47XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICdkb2N1bWVudCcpIHtcbiAgICAgICAgcmV0dXJuIGRvYztcbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGV4dCA9PT0gJ2lzU2VydmVyJyB8fCBjb250ZXh0ID09PSAnaXNQcmVyZW5kZXInKSB7XG4gICAgICAgIHJldHVybiBCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGV4dCA9PT0gJ2lzQ2xpZW50Jykge1xuICAgICAgICByZXR1cm4gQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgPyBmYWxzZSA6IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICdyZXNvdXJjZXNVcmwnIHx8IGNvbnRleHQgPT09ICdwdWJsaWNQYXRoJykge1xuICAgICAgICByZXR1cm4gZ2V0QXNzZXRQYXRoKCcuJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICdxdWV1ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdyaXRlOiB3cml0ZVRhc2ssXG4gICAgICAgICAgICByZWFkOiByZWFkVGFzayxcbiAgICAgICAgICAgIHRpY2s6IHtcbiAgICAgICAgICAgICAgICB0aGVuKGNiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0VGljayhjYik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuY29uc3QgRnJhZ21lbnQgPSAoXywgY2hpbGRyZW4pID0+IGNoaWxkcmVuO1xuY29uc3QgYWRkSG9zdEV2ZW50TGlzdGVuZXJzID0gKGVsbSwgaG9zdFJlZiwgbGlzdGVuZXJzLCBhdHRhY2hQYXJlbnRMaXN0ZW5lcnMpID0+IHtcbiAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyICYmIGxpc3RlbmVycykge1xuICAgICAgICAvLyB0aGlzIGlzIGNhbGxlZCBpbW1lZGlhdGVseSB3aXRoaW4gdGhlIGVsZW1lbnQncyBjb25zdHJ1Y3RvclxuICAgICAgICAvLyBpbml0aWFsaXplIG91ciBldmVudCBsaXN0ZW5lcnMgb24gdGhlIGhvc3QgZWxlbWVudFxuICAgICAgICAvLyB3ZSBkbyB0aGlzIG5vdyBzbyB0aGF0IHdlIGNhbiBsaXN0ZW4gdG8gZXZlbnRzIHRoYXQgbWF5XG4gICAgICAgIC8vIGhhdmUgZmlyZWQgZXZlbiBiZWZvcmUgdGhlIGluc3RhbmNlIGlzIHJlYWR5XG4gICAgICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXJUYXJnZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgY29tcG9uZW50IG1heSBoYXZlIGV2ZW50IGxpc3RlbmVycyB0aGF0IHNob3VsZCBiZSBhdHRhY2hlZCB0byB0aGUgcGFyZW50XG4gICAgICAgICAgICBpZiAoYXR0YWNoUGFyZW50TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZWluZyByYW4gZnJvbSB3aXRoaW4gdGhlIGNvbm5lY3RlZENhbGxiYWNrXG4gICAgICAgICAgICAgICAgLy8gd2hpY2ggaXMgaW1wb3J0YW50IHNvIHRoYXQgd2Uga25vdyB0aGUgaG9zdCBlbGVtZW50IGFjdHVhbGx5IGhhcyBhIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gZmlsdGVyIG91dCB0aGUgbGlzdGVuZXJzIHRvIG9ubHkgaGF2ZSB0aGUgb25lcyB0aGF0IEFSRSBiZWluZyBhdHRhY2hlZCB0byB0aGUgcGFyZW50XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigoW2ZsYWdzXSkgPT4gZmxhZ3MgJiAzMiAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRQYXJlbnQgKi8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZWluZyByYW4gZnJvbSB3aXRoaW4gdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgQlVUIHRoZSBwYXJlbnQgZWxlbWVudCBsaXN0ZW5lcnMgc2hvdWxkIGJlIGF0dGFjaGVkIGF0IHRoaXMgdGltZVxuICAgICAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgdGhlIGxpc3RlbmVycyB0aGF0IGFyZSBOT1QgYmVpbmcgYXR0YWNoZWQgdG8gdGhlIHBhcmVudFxuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKFtmbGFnc10pID0+ICEoZmxhZ3MgJiAzMiAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRQYXJlbnQgKi8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsaXN0ZW5lcnMubWFwKChbZmxhZ3MsIG5hbWUsIG1ldGhvZF0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldCA/IGdldEhvc3RMaXN0ZW5lclRhcmdldChlbG0sIGZsYWdzKSA6IGVsbTtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZXIgPSBob3N0TGlzdGVuZXJQcm94eShob3N0UmVmLCBtZXRob2QpO1xuICAgICAgICAgICAgY29uc3Qgb3B0cyA9IGhvc3RMaXN0ZW5lck9wdHMoZmxhZ3MpO1xuICAgICAgICAgICAgcGx0LmFlbCh0YXJnZXQsIG5hbWUsIGhhbmRsZXIsIG9wdHMpO1xuICAgICAgICAgICAgKGhvc3RSZWYuJHJtTGlzdGVuZXJzJCA9IGhvc3RSZWYuJHJtTGlzdGVuZXJzJCB8fCBbXSkucHVzaCgoKSA9PiBwbHQucmVsKHRhcmdldCwgbmFtZSwgaGFuZGxlciwgb3B0cykpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgaG9zdExpc3RlbmVyUHJveHkgPSAoaG9zdFJlZiwgbWV0aG9kTmFtZSkgPT4gKGV2KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKEJVSUxELmxhenlMb2FkKSB7XG4gICAgICAgICAgICBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgMjU2IC8qIEhPU1RfRkxBR1MuaXNMaXN0ZW5SZWFkeSAqLykge1xuICAgICAgICAgICAgICAgIC8vIGluc3RhbmNlIGlzIHJlYWR5LCBsZXQncyBjYWxsIGl0J3MgbWVtYmVyIG1ldGhvZCBmb3IgdGhpcyBldmVudFxuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGxhenlJbnN0YW5jZSRbbWV0aG9kTmFtZV0oZXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgKGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQgPSBob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkIHx8IFtdKS5wdXNoKFttZXRob2ROYW1lLCBldl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaG9zdFJlZi4kaG9zdEVsZW1lbnQkW21ldGhvZE5hbWVdKGV2KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgfVxufTtcbmNvbnN0IGdldEhvc3RMaXN0ZW5lclRhcmdldCA9IChlbG0sIGZsYWdzKSA9PiB7XG4gICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldERvY3VtZW50ICYmIGZsYWdzICYgNCAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXREb2N1bWVudCAqLylcbiAgICAgICAgcmV0dXJuIGRvYztcbiAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyVGFyZ2V0V2luZG93ICYmIGZsYWdzICYgOCAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRXaW5kb3cgKi8pXG4gICAgICAgIHJldHVybiB3aW47XG4gICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldEJvZHkgJiYgZmxhZ3MgJiAxNiAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRCb2R5ICovKVxuICAgICAgICByZXR1cm4gZG9jLmJvZHk7XG4gICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldFBhcmVudCAmJiBmbGFncyAmIDMyIC8qIExJU1RFTkVSX0ZMQUdTLlRhcmdldFBhcmVudCAqLylcbiAgICAgICAgcmV0dXJuIGVsbS5wYXJlbnRFbGVtZW50O1xuICAgIHJldHVybiBlbG07XG59O1xuLy8gcHJldHRpZXItaWdub3JlXG5jb25zdCBob3N0TGlzdGVuZXJPcHRzID0gKGZsYWdzKSA9PiBzdXBwb3J0c0xpc3RlbmVyT3B0aW9uc1xuICAgID8gKHtcbiAgICAgICAgcGFzc2l2ZTogKGZsYWdzICYgMSAvKiBMSVNURU5FUl9GTEFHUy5QYXNzaXZlICovKSAhPT0gMCxcbiAgICAgICAgY2FwdHVyZTogKGZsYWdzICYgMiAvKiBMSVNURU5FUl9GTEFHUy5DYXB0dXJlICovKSAhPT0gMCxcbiAgICB9KVxuICAgIDogKGZsYWdzICYgMiAvKiBMSVNURU5FUl9GTEFHUy5DYXB0dXJlICovKSAhPT0gMDtcbi8qKlxuICogQXNzaWducyB0aGUgZ2l2ZW4gdmFsdWUgdG8gdGhlIG5vbmNlIHByb3BlcnR5IG9uIHRoZSBydW50aW1lIHBsYXRmb3JtIG9iamVjdC5cbiAqIER1cmluZyBydW50aW1lLCB0aGlzIHZhbHVlIGlzIHVzZWQgdG8gc2V0IHRoZSBub25jZSBhdHRyaWJ1dGUgb24gYWxsIGR5bmFtaWNhbGx5IGNyZWF0ZWQgc2NyaXB0IGFuZCBzdHlsZSB0YWdzLlxuICogQHBhcmFtIG5vbmNlIFRoZSB2YWx1ZSB0byBiZSBhc3NpZ25lZCB0byB0aGUgcGxhdGZvcm0gbm9uY2UgcHJvcGVydHkuXG4gKiBAcmV0dXJucyB2b2lkXG4gKi9cbmNvbnN0IHNldE5vbmNlID0gKG5vbmNlKSA9PiAocGx0LiRub25jZSQgPSBub25jZSk7XG5jb25zdCBzZXRQbGF0Zm9ybU9wdGlvbnMgPSAob3B0cykgPT4gT2JqZWN0LmFzc2lnbihwbHQsIG9wdHMpO1xuY29uc3QgaW5zZXJ0VmRvbUFubm90YXRpb25zID0gKGRvYywgc3RhdGljQ29tcG9uZW50cykgPT4ge1xuICAgIGlmIChkb2MgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBkb2NEYXRhID0ge1xuICAgICAgICAgICAgaG9zdElkczogMCxcbiAgICAgICAgICAgIHJvb3RMZXZlbElkczogMCxcbiAgICAgICAgICAgIHN0YXRpY0NvbXBvbmVudHM6IG5ldyBTZXQoc3RhdGljQ29tcG9uZW50cyksXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9yZ0xvY2F0aW9uTm9kZXMgPSBbXTtcbiAgICAgICAgcGFyc2VWTm9kZUFubm90YXRpb25zKGRvYywgZG9jLmJvZHksIGRvY0RhdGEsIG9yZ0xvY2F0aW9uTm9kZXMpO1xuICAgICAgICBvcmdMb2NhdGlvbk5vZGVzLmZvckVhY2goKG9yZ0xvY2F0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKG9yZ0xvY2F0aW9uTm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgbm9kZVJlZiA9IG9yZ0xvY2F0aW9uTm9kZVsncy1uciddO1xuICAgICAgICAgICAgICAgIGxldCBob3N0SWQgPSBub2RlUmVmWydzLWhvc3QtaWQnXTtcbiAgICAgICAgICAgICAgICBsZXQgbm9kZUlkID0gbm9kZVJlZlsncy1ub2RlLWlkJ107XG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkSWQgPSBgJHtob3N0SWR9LiR7bm9kZUlkfWA7XG4gICAgICAgICAgICAgICAgaWYgKGhvc3RJZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3RJZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGRvY0RhdGEucm9vdExldmVsSWRzKys7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVJZCA9IGRvY0RhdGEucm9vdExldmVsSWRzO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZElkID0gYCR7aG9zdElkfS4ke25vZGVJZH1gO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVJlZi5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVSZWYuc2V0QXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQsIGNoaWxkSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5vZGVSZWYubm9kZVR5cGUgPT09IDMgLyogTk9ERV9UWVBFLlRleHROb2RlICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaG9zdElkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dENvbnRlbnQgPSBub2RlUmVmLm5vZGVWYWx1ZS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRDb250ZW50ID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1c2VsZXNzIHdoaXRlc3BhY2Ugbm9kZSBhdCB0aGUgZG9jdW1lbnQgcm9vdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50QmVmb3JlVGV4dE5vZGUgPSBkb2MuY3JlYXRlQ29tbWVudChjaGlsZElkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRCZWZvcmVUZXh0Tm9kZS5ub2RlVmFsdWUgPSBgJHtURVhUX05PREVfSUR9LiR7Y2hpbGRJZH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVJlZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb21tZW50QmVmb3JlVGV4dE5vZGUsIG5vZGVSZWYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBvcmdMb2NhdGlvbk5vZGVJZCA9IGAke09SR19MT0NBVElPTl9JRH0uJHtjaGlsZElkfWA7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JnTG9jYXRpb25QYXJlbnROb2RlID0gb3JnTG9jYXRpb25Ob2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgaWYgKG9yZ0xvY2F0aW9uUGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3JnTG9jYXRpb25QYXJlbnROb2RlWydzLWVuJ10gPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbmRpbmcgd2l0aCBhIFwiLlwiIG1lYW5zIHRoYXQgdGhlIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvZiB0aGlzIG5vZGUncyBvcmlnaW5hbCBsb2NhdGlvbiBpcyBhIFNIQURPVyBkb20gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoaXMgbm9kZSBpcyBhcGFydCBvZiB0aGUgcm9vdCBsZXZlbCBsaWdodCBkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZUlkICs9IGAuYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvcmdMb2NhdGlvblBhcmVudE5vZGVbJ3MtZW4nXSA9PT0gJ2MnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlbmRpbmcgd2l0aCBhIFwiLmNcIiBtZWFucyB0aGF0IHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2YgdGhpcyBub2RlJ3Mgb3JpZ2luYWwgbG9jYXRpb24gaXMgYSBTQ09QRUQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoaXMgbm9kZSBpcyBhcGFydCBvZiB0aGUgcm9vdCBsZXZlbCBsaWdodCBkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZUlkICs9IGAuY2A7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlLm5vZGVWYWx1ZSA9IG9yZ0xvY2F0aW9uTm9kZUlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgcGFyc2VWTm9kZUFubm90YXRpb25zID0gKGRvYywgbm9kZSwgZG9jRGF0YSwgb3JnTG9jYXRpb25Ob2RlcykgPT4ge1xuICAgIGlmIChub2RlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobm9kZVsncy1uciddICE9IG51bGwpIHtcbiAgICAgICAgb3JnTG9jYXRpb25Ob2Rlcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgbm9kZS5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoY2hpbGROb2RlKTtcbiAgICAgICAgICAgIGlmIChob3N0UmVmICE9IG51bGwgJiYgIWRvY0RhdGEuc3RhdGljQ29tcG9uZW50cy5oYXMoY2hpbGROb2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY21wRGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZUlkczogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGluc2VydFZOb2RlQW5ub3RhdGlvbnMoZG9jLCBjaGlsZE5vZGUsIGhvc3RSZWYuJHZub2RlJCwgZG9jRGF0YSwgY21wRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJzZVZOb2RlQW5ub3RhdGlvbnMoZG9jLCBjaGlsZE5vZGUsIGRvY0RhdGEsIG9yZ0xvY2F0aW9uTm9kZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgaW5zZXJ0Vk5vZGVBbm5vdGF0aW9ucyA9IChkb2MsIGhvc3RFbG0sIHZub2RlLCBkb2NEYXRhLCBjbXBEYXRhKSA9PiB7XG4gICAgaWYgKHZub2RlICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgaG9zdElkID0gKytkb2NEYXRhLmhvc3RJZHM7XG4gICAgICAgIGhvc3RFbG0uc2V0QXR0cmlidXRlKEhZRFJBVEVfSUQsIGhvc3RJZCk7XG4gICAgICAgIGlmIChob3N0RWxtWydzLWNyJ10gIT0gbnVsbCkge1xuICAgICAgICAgICAgaG9zdEVsbVsncy1jciddLm5vZGVWYWx1ZSA9IGAke0NPTlRFTlRfUkVGX0lEfS4ke2hvc3RJZH1gO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2bm9kZS4kY2hpbGRyZW4kICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlcHRoID0gMDtcbiAgICAgICAgICAgIHZub2RlLiRjaGlsZHJlbiQuZm9yRWFjaCgodm5vZGVDaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpbnNlcnRDaGlsZFZOb2RlQW5ub3RhdGlvbnMoZG9jLCB2bm9kZUNoaWxkLCBjbXBEYXRhLCBob3N0SWQsIGRlcHRoLCBpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9zdEVsbSAmJiB2bm9kZSAmJiB2bm9kZS4kZWxtJCAmJiAhaG9zdEVsbS5oYXNBdHRyaWJ1dGUoJ2MtaWQnKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gaG9zdEVsbS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudENoaWxkTm9kZXMgPSBBcnJheS5mcm9tKHBhcmVudC5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb21tZW50ID0gcGFyZW50Q2hpbGROb2Rlcy5maW5kKChub2RlKSA9PiBub2RlLm5vZGVUeXBlID09PSA4IC8qIE5PREVfVFlQRS5Db21tZW50Tm9kZSAqLyAmJiBub2RlWydzLXNyJ10pO1xuICAgICAgICAgICAgICAgIGlmIChjb21tZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyZW50Q2hpbGROb2Rlcy5pbmRleE9mKGhvc3RFbG0pIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgdm5vZGUuJGVsbSQuc2V0QXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQsIGAke2NvbW1lbnRbJ3MtaG9zdC1pZCddfS4ke2NvbW1lbnRbJ3Mtbm9kZS1pZCddfS4wLiR7aW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGluc2VydENoaWxkVk5vZGVBbm5vdGF0aW9ucyA9IChkb2MsIHZub2RlQ2hpbGQsIGNtcERhdGEsIGhvc3RJZCwgZGVwdGgsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgY2hpbGRFbG0gPSB2bm9kZUNoaWxkLiRlbG0kO1xuICAgIGlmIChjaGlsZEVsbSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgbm9kZUlkID0gY21wRGF0YS5ub2RlSWRzKys7XG4gICAgY29uc3QgY2hpbGRJZCA9IGAke2hvc3RJZH0uJHtub2RlSWR9LiR7ZGVwdGh9LiR7aW5kZXh9YDtcbiAgICBjaGlsZEVsbVsncy1ob3N0LWlkJ10gPSBob3N0SWQ7XG4gICAgY2hpbGRFbG1bJ3Mtbm9kZS1pZCddID0gbm9kZUlkO1xuICAgIGlmIChjaGlsZEVsbS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgY2hpbGRFbG0uc2V0QXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQsIGNoaWxkSWQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaGlsZEVsbS5ub2RlVHlwZSA9PT0gMyAvKiBOT0RFX1RZUEUuVGV4dE5vZGUgKi8pIHtcbiAgICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IGNoaWxkRWxtLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IG5vZGVOYW1lID0gcGFyZW50Tm9kZS5ub2RlTmFtZTtcbiAgICAgICAgaWYgKG5vZGVOYW1lICE9PSAnU1RZTEUnICYmIG5vZGVOYW1lICE9PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgY29uc3QgdGV4dE5vZGVJZCA9IGAke1RFWFRfTk9ERV9JRH0uJHtjaGlsZElkfWA7XG4gICAgICAgICAgICBjb25zdCBjb21tZW50QmVmb3JlVGV4dE5vZGUgPSBkb2MuY3JlYXRlQ29tbWVudCh0ZXh0Tm9kZUlkKTtcbiAgICAgICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbW1lbnRCZWZvcmVUZXh0Tm9kZSwgY2hpbGRFbG0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoaWxkRWxtLm5vZGVUeXBlID09PSA4IC8qIE5PREVfVFlQRS5Db21tZW50Tm9kZSAqLykge1xuICAgICAgICBpZiAoY2hpbGRFbG1bJ3Mtc3InXSkge1xuICAgICAgICAgICAgY29uc3Qgc2xvdE5hbWUgPSBjaGlsZEVsbVsncy1zbiddIHx8ICcnO1xuICAgICAgICAgICAgY29uc3Qgc2xvdE5vZGVJZCA9IGAke1NMT1RfTk9ERV9JRH0uJHtjaGlsZElkfS4ke3Nsb3ROYW1lfWA7XG4gICAgICAgICAgICBjaGlsZEVsbS5ub2RlVmFsdWUgPSBzbG90Tm9kZUlkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh2bm9kZUNoaWxkLiRjaGlsZHJlbiQgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjaGlsZERlcHRoID0gZGVwdGggKyAxO1xuICAgICAgICB2bm9kZUNoaWxkLiRjaGlsZHJlbiQuZm9yRWFjaCgodm5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpbnNlcnRDaGlsZFZOb2RlQW5ub3RhdGlvbnMoZG9jLCB2bm9kZSwgY21wRGF0YSwgaG9zdElkLCBjaGlsZERlcHRoLCBpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBob3N0UmVmcyA9IC8qQF9fUFVSRV9fKi8gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGdldEhvc3RSZWYgPSAocmVmKSA9PiBob3N0UmVmcy5nZXQocmVmKTtcbmNvbnN0IHJlZ2lzdGVySW5zdGFuY2UgPSAobGF6eUluc3RhbmNlLCBob3N0UmVmKSA9PiBob3N0UmVmcy5zZXQoKGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgPSBsYXp5SW5zdGFuY2UpLCBob3N0UmVmKTtcbmNvbnN0IHJlZ2lzdGVySG9zdCA9IChlbG0sIGNtcE1ldGEpID0+IHtcbiAgICBjb25zdCBob3N0UmVmID0ge1xuICAgICAgICAkZmxhZ3MkOiAwLFxuICAgICAgICAkaG9zdEVsZW1lbnQkOiBlbG0sXG4gICAgICAgICRjbXBNZXRhJDogY21wTWV0YSxcbiAgICAgICAgJGluc3RhbmNlVmFsdWVzJDogbmV3IE1hcCgpLFxuICAgIH07XG4gICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgIGhvc3RSZWYuJHJlbmRlckNvdW50JCA9IDA7XG4gICAgfVxuICAgIGlmIChCVUlMRC5tZXRob2QgJiYgQlVJTEQubGF6eUxvYWQpIHtcbiAgICAgICAgaG9zdFJlZi4kb25JbnN0YW5jZVByb21pc2UkID0gbmV3IFByb21pc2UoKHIpID0+IChob3N0UmVmLiRvbkluc3RhbmNlUmVzb2x2ZSQgPSByKSk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcpIHtcbiAgICAgICAgaG9zdFJlZi4kb25SZWFkeVByb21pc2UkID0gbmV3IFByb21pc2UoKHIpID0+IChob3N0UmVmLiRvblJlYWR5UmVzb2x2ZSQgPSByKSk7XG4gICAgICAgIGVsbVsncy1wJ10gPSBbXTtcbiAgICAgICAgZWxtWydzLXJjJ10gPSBbXTtcbiAgICB9XG4gICAgYWRkSG9zdEV2ZW50TGlzdGVuZXJzKGVsbSwgaG9zdFJlZiwgY21wTWV0YS4kbGlzdGVuZXJzJCwgZmFsc2UpO1xuICAgIHJldHVybiBob3N0UmVmcy5zZXQoZWxtLCBob3N0UmVmKTtcbn07XG5jb25zdCBpc01lbWJlckluRWxlbWVudCA9IChlbG0sIG1lbWJlck5hbWUpID0+IG1lbWJlck5hbWUgaW4gZWxtO1xuY29uc3QgY29uc29sZUVycm9yID0gKGUsIGVsKSA9PiAoY3VzdG9tRXJyb3IgfHwgY29uc29sZS5lcnJvcikoZSwgZWwpO1xuY29uc3QgU1RFTkNJTF9ERVZfTU9ERSA9IEJVSUxELmlzVGVzdGluZ1xuICAgID8gWydTVEVOQ0lMOiddIC8vIEUyRSB0ZXN0aW5nXG4gICAgOiBbXG4gICAgICAgICclY3N0ZW5jaWwnLFxuICAgICAgICAnY29sb3I6IHdoaXRlO2JhY2tncm91bmQ6IzRjNDdmZjtmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOjEwcHg7IHBhZGRpbmc6MnB4IDZweDsgYm9yZGVyLXJhZGl1czogNXB4JyxcbiAgICBdO1xuY29uc3QgY29uc29sZURldkVycm9yID0gKC4uLm0pID0+IGNvbnNvbGUuZXJyb3IoLi4uU1RFTkNJTF9ERVZfTU9ERSwgLi4ubSk7XG5jb25zdCBjb25zb2xlRGV2V2FybiA9ICguLi5tKSA9PiBjb25zb2xlLndhcm4oLi4uU1RFTkNJTF9ERVZfTU9ERSwgLi4ubSk7XG5jb25zdCBjb25zb2xlRGV2SW5mbyA9ICguLi5tKSA9PiBjb25zb2xlLmluZm8oLi4uU1RFTkNJTF9ERVZfTU9ERSwgLi4ubSk7XG5jb25zdCBzZXRFcnJvckhhbmRsZXIgPSAoaGFuZGxlcikgPT4gKGN1c3RvbUVycm9yID0gaGFuZGxlcik7XG5jb25zdCBjbXBNb2R1bGVzID0gLypAX19QVVJFX18qLyBuZXcgTWFwKCk7XG5jb25zdCBsb2FkTW9kdWxlID0gKGNtcE1ldGEsIGhvc3RSZWYsIGhtclZlcnNpb25JZCkgPT4ge1xuICAgIC8vIGxvYWRNb2R1bGVJbXBvcnRcbiAgICBjb25zdCBleHBvcnROYW1lID0gY21wTWV0YS4kdGFnTmFtZSQucmVwbGFjZSgvLS9nLCAnXycpO1xuICAgIGNvbnN0IGJ1bmRsZUlkID0gY21wTWV0YS4kbGF6eUJ1bmRsZUlkJDtcbiAgICBpZiAoQlVJTEQuaXNEZXYgJiYgdHlwZW9mIGJ1bmRsZUlkICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlRGV2RXJyb3IoYFRyeWluZyB0byBsYXppbHkgbG9hZCBjb21wb25lbnQgPCR7Y21wTWV0YS4kdGFnTmFtZSR9PiB3aXRoIHN0eWxlIG1vZGUgXCIke2hvc3RSZWYuJG1vZGVOYW1lJH1cIiwgYnV0IGl0IGRvZXMgbm90IGV4aXN0LmApO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBtb2R1bGUgPSAhQlVJTEQuaG90TW9kdWxlUmVwbGFjZW1lbnQgPyBjbXBNb2R1bGVzLmdldChidW5kbGVJZCkgOiBmYWxzZTtcbiAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGVbZXhwb3J0TmFtZV07XG4gICAgfVxuICAgIC8qIV9fU1RFTkNJTF9TVEFUSUNfSU1QT1JUX1NXSVRDSF9fKi9cbiAgICByZXR1cm4gaW1wb3J0KFxuICAgIC8qIEB2aXRlLWlnbm9yZSAqL1xuICAgIC8qIHdlYnBhY2tJbmNsdWRlOiAvXFwuZW50cnlcXC5qcyQvICovXG4gICAgLyogd2VicGFja0V4Y2x1ZGU6IC9cXC5zeXN0ZW1cXC5lbnRyeVxcLmpzJC8gKi9cbiAgICAvKiB3ZWJwYWNrTW9kZTogXCJsYXp5XCIgKi9cbiAgICBgLi8ke2J1bmRsZUlkfS5lbnRyeS5qcyR7QlVJTEQuaG90TW9kdWxlUmVwbGFjZW1lbnQgJiYgaG1yVmVyc2lvbklkID8gJz9zLWhtcj0nICsgaG1yVmVyc2lvbklkIDogJyd9YCkudGhlbigoaW1wb3J0ZWRNb2R1bGUpID0+IHtcbiAgICAgICAgaWYgKCFCVUlMRC5ob3RNb2R1bGVSZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgY21wTW9kdWxlcy5zZXQoYnVuZGxlSWQsIGltcG9ydGVkTW9kdWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW1wb3J0ZWRNb2R1bGVbZXhwb3J0TmFtZV07XG4gICAgfSwgY29uc29sZUVycm9yKTtcbn07XG5jb25zdCBzdHlsZXMgPSAvKkBfX1BVUkVfXyovIG5ldyBNYXAoKTtcbmNvbnN0IG1vZGVSZXNvbHV0aW9uQ2hhaW4gPSBbXTtcbmNvbnN0IHdpbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge307XG5jb25zdCBDU1MgPSBCVUlMRC5jc3NWYXJTaGltID8gd2luLkNTUyA6IG51bGw7XG5jb25zdCBkb2MgPSB3aW4uZG9jdW1lbnQgfHwgeyBoZWFkOiB7fSB9O1xuY29uc3QgSCA9ICh3aW4uSFRNTEVsZW1lbnQgfHwgY2xhc3Mge1xufSk7XG5jb25zdCBwbHQgPSB7XG4gICAgJGZsYWdzJDogMCxcbiAgICAkcmVzb3VyY2VzVXJsJDogJycsXG4gICAgam1wOiAoaCkgPT4gaCgpLFxuICAgIHJhZjogKGgpID0+IHJlcXVlc3RBbmltYXRpb25GcmFtZShoKSxcbiAgICBhZWw6IChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cykgPT4gZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSxcbiAgICByZWw6IChlbCwgZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cykgPT4gZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSxcbiAgICBjZTogKGV2ZW50TmFtZSwgb3B0cykgPT4gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwgb3B0cyksXG59O1xuY29uc3Qgc2V0UGxhdGZvcm1IZWxwZXJzID0gKGhlbHBlcnMpID0+IHtcbiAgICBPYmplY3QuYXNzaWduKHBsdCwgaGVscGVycyk7XG59O1xuY29uc3Qgc3VwcG9ydHNTaGFkb3cgPSBCVUlMRC5zaGFkb3dEb21TaGltICYmIEJVSUxELnNoYWRvd0RvbVxuICAgID8gLypAX19QVVJFX18qLyAoKCkgPT4gKGRvYy5oZWFkLmF0dGFjaFNoYWRvdyArICcnKS5pbmRleE9mKCdbbmF0aXZlJykgPiAtMSkoKVxuICAgIDogdHJ1ZTtcbmNvbnN0IHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zID0gLypAX19QVVJFX18qLyAoKCkgPT4ge1xuICAgIGxldCBzdXBwb3J0c0xpc3RlbmVyT3B0aW9ucyA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdlJywgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0c0xpc3RlbmVyT3B0aW9ucyA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7IH1cbiAgICByZXR1cm4gc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnM7XG59KSgpO1xuY29uc3QgcHJvbWlzZVJlc29sdmUgPSAodikgPT4gUHJvbWlzZS5yZXNvbHZlKHYpO1xuY29uc3Qgc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMgPSBCVUlMRC5jb25zdHJ1Y3RhYmxlQ1NTXG4gICAgPyAvKkBfX1BVUkVfXyovICgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBuZXcgQ1NTU3R5bGVTaGVldCgpLnJlcGxhY2VTeW5jID09PSAnZnVuY3Rpb24nO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pKClcbiAgICA6IGZhbHNlO1xuY29uc3QgcXVldWVEb21SZWFkcyA9IFtdO1xuY29uc3QgcXVldWVEb21Xcml0ZXMgPSBbXTtcbmNvbnN0IHF1ZXVlRG9tV3JpdGVzTG93ID0gW107XG5jb25zdCBxdWV1ZVRhc2sgPSAocXVldWUsIHdyaXRlKSA9PiAoY2IpID0+IHtcbiAgICBxdWV1ZS5wdXNoKGNiKTtcbiAgICBpZiAoIXF1ZXVlUGVuZGluZykge1xuICAgICAgICBxdWV1ZVBlbmRpbmcgPSB0cnVlO1xuICAgICAgICBpZiAod3JpdGUgJiYgcGx0LiRmbGFncyQgJiA0IC8qIFBMQVRGT1JNX0ZMQUdTLnF1ZXVlU3luYyAqLykge1xuICAgICAgICAgICAgbmV4dFRpY2soZmx1c2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGx0LnJhZihmbHVzaCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgY29uc3VtZSA9IChxdWV1ZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHF1ZXVlW2ldKHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG59O1xuY29uc3QgY29uc3VtZVRpbWVvdXQgPSAocXVldWUsIHRpbWVvdXQpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IHRzID0gMDtcbiAgICB3aGlsZSAoaSA8IHF1ZXVlLmxlbmd0aCAmJiAodHMgPSBwZXJmb3JtYW5jZS5ub3coKSkgPCB0aW1lb3V0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBxdWV1ZVtpKytdKHRzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpID09PSBxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAoaSAhPT0gMCkge1xuICAgICAgICBxdWV1ZS5zcGxpY2UoMCwgaSk7XG4gICAgfVxufTtcbmNvbnN0IGZsdXNoID0gKCkgPT4ge1xuICAgIGlmIChCVUlMRC5hc3luY1F1ZXVlKSB7XG4gICAgICAgIHF1ZXVlQ29uZ2VzdGlvbisrO1xuICAgIH1cbiAgICAvLyBhbHdheXMgZm9yY2UgYSBidW5jaCBvZiBtZWRpdW0gY2FsbGJhY2tzIHRvIHJ1biwgYnV0IHN0aWxsIGhhdmVcbiAgICAvLyBhIHRocm90dGxlIG9uIGhvdyBtYW55IGNhbiBydW4gaW4gYSBjZXJ0YWluIHRpbWVcbiAgICAvLyBET00gUkVBRFMhISFcbiAgICBjb25zdW1lKHF1ZXVlRG9tUmVhZHMpO1xuICAgIC8vIERPTSBXUklURVMhISFcbiAgICBpZiAoQlVJTEQuYXN5bmNRdWV1ZSkge1xuICAgICAgICBjb25zdCB0aW1lb3V0ID0gKHBsdC4kZmxhZ3MkICYgNiAvKiBQTEFURk9STV9GTEFHUy5xdWV1ZU1hc2sgKi8pID09PSAyIC8qIFBMQVRGT1JNX0ZMQUdTLmFwcExvYWRlZCAqL1xuICAgICAgICAgICAgPyBwZXJmb3JtYW5jZS5ub3coKSArIDE0ICogTWF0aC5jZWlsKHF1ZXVlQ29uZ2VzdGlvbiAqICgxLjAgLyAxMC4wKSlcbiAgICAgICAgICAgIDogSW5maW5pdHk7XG4gICAgICAgIGNvbnN1bWVUaW1lb3V0KHF1ZXVlRG9tV3JpdGVzLCB0aW1lb3V0KTtcbiAgICAgICAgY29uc3VtZVRpbWVvdXQocXVldWVEb21Xcml0ZXNMb3csIHRpbWVvdXQpO1xuICAgICAgICBpZiAocXVldWVEb21Xcml0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcXVldWVEb21Xcml0ZXNMb3cucHVzaCguLi5xdWV1ZURvbVdyaXRlcyk7XG4gICAgICAgICAgICBxdWV1ZURvbVdyaXRlcy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICgocXVldWVQZW5kaW5nID0gcXVldWVEb21SZWFkcy5sZW5ndGggKyBxdWV1ZURvbVdyaXRlcy5sZW5ndGggKyBxdWV1ZURvbVdyaXRlc0xvdy5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgLy8gc3RpbGwgbW9yZSB0byBkbyB5ZXQsIGJ1dCB3ZSd2ZSBydW4gb3V0IG9mIHRpbWVcbiAgICAgICAgICAgIC8vIGxldCdzIGxldCB0aGlzIHRoaW5nIGNvb2wgb2ZmIGFuZCB0cnkgYWdhaW4gaW4gdGhlIG5leHQgdGlja1xuICAgICAgICAgICAgcGx0LnJhZihmbHVzaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBxdWV1ZUNvbmdlc3Rpb24gPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdW1lKHF1ZXVlRG9tV3JpdGVzKTtcbiAgICAgICAgaWYgKChxdWV1ZVBlbmRpbmcgPSBxdWV1ZURvbVJlYWRzLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAvLyBzdGlsbCBtb3JlIHRvIGRvIHlldCwgYnV0IHdlJ3ZlIHJ1biBvdXQgb2YgdGltZVxuICAgICAgICAgICAgLy8gbGV0J3MgbGV0IHRoaXMgdGhpbmcgY29vbCBvZmYgYW5kIHRyeSBhZ2FpbiBpbiB0aGUgbmV4dCB0aWNrXG4gICAgICAgICAgICBwbHQucmFmKGZsdXNoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBuZXh0VGljayA9IC8qQF9fUFVSRV9fKi8gKGNiKSA9PiBwcm9taXNlUmVzb2x2ZSgpLnRoZW4oY2IpO1xuY29uc3QgcmVhZFRhc2sgPSAvKkBfX1BVUkVfXyovIHF1ZXVlVGFzayhxdWV1ZURvbVJlYWRzLCBmYWxzZSk7XG5jb25zdCB3cml0ZVRhc2sgPSAvKkBfX1BVUkVfXyovIHF1ZXVlVGFzayhxdWV1ZURvbVdyaXRlcywgdHJ1ZSk7XG5leHBvcnQgeyBCVUlMRCwgRW52LCBOQU1FU1BBQ0UgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2FwcC1kYXRhJztcbmV4cG9ydCB7IEJ1aWxkLCBDU1MsIENvbnRleHQsIEZyYWdtZW50LCBILCBIIGFzIEhUTUxFbGVtZW50LCBIb3N0LCBTVEVOQ0lMX0RFVl9NT0RFLCBhZGRIb3N0RXZlbnRMaXN0ZW5lcnMsIGJvb3RzdHJhcExhenksIGNtcE1vZHVsZXMsIGNvbm5lY3RlZENhbGxiYWNrLCBjb25zb2xlRGV2RXJyb3IsIGNvbnNvbGVEZXZJbmZvLCBjb25zb2xlRGV2V2FybiwgY29uc29sZUVycm9yLCBjcmVhdGVFdmVudCwgZGVmaW5lQ3VzdG9tRWxlbWVudCwgZGlzY29ubmVjdGVkQ2FsbGJhY2ssIGRvYywgZm9yY2VNb2RlVXBkYXRlLCBmb3JjZVVwZGF0ZSwgZ2V0QXNzZXRQYXRoLCBnZXRDb25uZWN0LCBnZXRDb250ZXh0LCBnZXRFbGVtZW50LCBnZXRIb3N0UmVmLCBnZXRNb2RlLCBnZXRSZW5kZXJpbmdSZWYsIGdldFZhbHVlLCBoLCBpbnNlcnRWZG9tQW5ub3RhdGlvbnMsIGlzTWVtYmVySW5FbGVtZW50LCBsb2FkTW9kdWxlLCBtb2RlUmVzb2x1dGlvbkNoYWluLCBuZXh0VGljaywgcGFyc2VQcm9wZXJ0eVZhbHVlLCBwbHQsIHBvc3RVcGRhdGVDb21wb25lbnQsIHByb21pc2VSZXNvbHZlLCBwcm94eUNvbXBvbmVudCwgcHJveHlDdXN0b21FbGVtZW50LCByZWFkVGFzaywgcmVnaXN0ZXJIb3N0LCByZWdpc3Rlckluc3RhbmNlLCByZW5kZXJWZG9tLCBzZXRBc3NldFBhdGgsIHNldEVycm9ySGFuZGxlciwgc2V0TW9kZSwgc2V0Tm9uY2UsIHNldFBsYXRmb3JtSGVscGVycywgc2V0UGxhdGZvcm1PcHRpb25zLCBzZXRWYWx1ZSwgc3R5bGVzLCBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0cywgc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnMsIHN1cHBvcnRzU2hhZG93LCB3aW4sIHdyaXRlVGFzayB9O1xuIiwiZnVuY3Rpb24gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0KHJlcSkge1xuXHQvLyBIZXJlIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKSBpcyB1c2VkIGluc3RlYWQgb2YgbmV3IFByb21pc2UoKSB0byBwcmV2ZW50XG5cdC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiBwb3BwaW5nIHVwIGluIGRldnRvb2xzXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSAoKSA9PiAoW10pO1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50IGxhenkgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmVudHJ5XFxcXC5qcy4qJCBpbmNsdWRlOiBcXFxcLmVudHJ5XFxcXC5qcyQgZXhjbHVkZTogXFxcXC5zeXN0ZW1cXFxcLmVudHJ5XFxcXC5qcyRcIjtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIG9iamVjdCkge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhc3NpZ24gcmVxdWlyZXMgdGhhdCBpbnB1dCBwYXJhbWV0ZXIgbm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cblxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpKSB7XG4gICAgICA7XG4gICAgICB0YXJnZXRbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL2Fzc2lnbi9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVPYmplY3Qob2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIG9iamVjdCk7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgY2xvbmVPYmplY3QgZnJvbSBcIi4uL19saWIvY2xvbmVPYmplY3QvaW5kZXguanNcIjtcbmltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL19saWIvYXNzaWduL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSAxMDAwICogNjA7XG52YXIgTUlOVVRFU19JTl9EQVkgPSA2MCAqIDI0O1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSBNSU5VVEVTX0lOX0RBWSAqIDMwO1xudmFyIE1JTlVURVNfSU5fWUVBUiA9IE1JTlVURVNfSU5fREFZICogMzY1O1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVN0cmljdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3JkcywgdXNpbmcgc3RyaWN0IHVuaXRzLlxuICogVGhpcyBpcyBsaWtlIGBmb3JtYXREaXN0YW5jZWAsIGJ1dCBkb2VzIG5vdCB1c2UgaGVscGVycyBsaWtlICdhbG1vc3QnLCAnb3ZlcicsXG4gKiAnbGVzcyB0aGFuJyBhbmQgdGhlIGxpa2UuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gNTkgc2VjcyAgICAgICAgICB8IFswLi41OV0gc2Vjb25kcyAgICAgfFxuICogfCAxIC4uLiA1OSBtaW5zICAgICAgICAgIHwgWzEuLjU5XSBtaW51dGVzICAgICB8XG4gKiB8IDEgLi4uIDIzIGhycyAgICAgICAgICAgfCBbMS4uMjNdIGhvdXJzICAgICAgIHxcbiAqIHwgMSAuLi4gMjkgZGF5cyAgICAgICAgICB8IFsxLi4yOV0gZGF5cyAgICAgICAgfFxuICogfCAxIC4uLiAxMSBtb250aHMgICAgICAgIHwgWzEuLjExXSBtb250aHMgICAgICB8XG4gKiB8IDEgLi4uIE4geWVhcnMgICAgICAgICAgfCBbMS4uTl0gIHllYXJzICAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7J3NlY29uZCd8J21pbnV0ZSd8J2hvdXInfCdkYXknfCdtb250aCd8J3llYXInfSBbb3B0aW9ucy51bml0XSAtIGlmIHNwZWNpZmllZCwgd2lsbCBmb3JjZSBhIHVuaXRcbiAqIEBwYXJhbSB7J2Zsb29yJ3wnY2VpbCd8J3JvdW5kJ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3JvdW5kJ10gLSB3aGljaCB3YXkgdG8gcm91bmQgcGFydGlhbCB1bml0c1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5yb3VuZGluZ01ldGhvZGAgbXVzdCBiZSAnZmxvb3InLCAnY2VpbCcgb3IgJ3JvdW5kJ1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMudW5pdGAgbXVzdCBiZSAnc2Vjb25kJywgJ21pbnV0ZScsICdob3VyJywgJ2RheScsICdtb250aCcgb3IgJ3llYXInXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBKdWx5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VTdHJpY3QobmV3IERhdGUoMjAxNCwgNiwgMiksIG5ldyBEYXRlKDIwMTUsIDAsIDIpKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTVcbiAqIC8vIGFuZCAxIEphbnVhcnkgMjAxNSAwMDowMDowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApXG4gKiApXG4gKiAvLz0+ICcxNSBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICcxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgaW4gbWludXRlcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICB1bml0OiAnbWludXRlJ1xuICogfSlcbiAqIC8vPT4gJzUyNTYwMCBtaW51dGVzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE1XG4gKiAvLyB0byAyOCBKYW51YXJ5IDIwMTUsIGluIG1vbnRocywgcm91bmRlZCB1cD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlU3RyaWN0KG5ldyBEYXRlKDIwMTUsIDAsIDI4KSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgdW5pdDogJ21vbnRoJyxcbiAqICAgcm91bmRpbmdNZXRob2Q6ICdjZWlsJ1xuICogfSlcbiAqIC8vPT4gJzEgbW9udGgnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVN0cmljdChuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZVN0cmljdChkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkcm91bmRpbmdNZXRoO1xuXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuXG4gIGlmICghbG9jYWxlLmZvcm1hdERpc3RhbmNlKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUuZm9ybWF0RGlzdGFuY2UgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFzYyhkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpO1xuXG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIHZhciBsb2NhbGl6ZU9wdGlvbnMgPSBhc3NpZ24oY2xvbmVPYmplY3Qob3B0aW9ucyksIHtcbiAgICBhZGRTdWZmaXg6IEJvb2xlYW4ob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZFN1ZmZpeCksXG4gICAgY29tcGFyaXNvbjogY29tcGFyaXNvblxuICB9KTtcbiAgdmFyIGRhdGVMZWZ0O1xuICB2YXIgZGF0ZVJpZ2h0O1xuXG4gIGlmIChjb21wYXJpc29uID4gMCkge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICB9XG5cbiAgdmFyIHJvdW5kaW5nTWV0aG9kID0gU3RyaW5nKChfb3B0aW9ucyRyb3VuZGluZ01ldGggPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMucm91bmRpbmdNZXRob2QpICE9PSBudWxsICYmIF9vcHRpb25zJHJvdW5kaW5nTWV0aCAhPT0gdm9pZCAwID8gX29wdGlvbnMkcm91bmRpbmdNZXRoIDogJ3JvdW5kJyk7XG4gIHZhciByb3VuZGluZ01ldGhvZEZuO1xuXG4gIGlmIChyb3VuZGluZ01ldGhvZCA9PT0gJ2Zsb29yJykge1xuICAgIHJvdW5kaW5nTWV0aG9kRm4gPSBNYXRoLmZsb29yO1xuICB9IGVsc2UgaWYgKHJvdW5kaW5nTWV0aG9kID09PSAnY2VpbCcpIHtcbiAgICByb3VuZGluZ01ldGhvZEZuID0gTWF0aC5jZWlsO1xuICB9IGVsc2UgaWYgKHJvdW5kaW5nTWV0aG9kID09PSAncm91bmQnKSB7XG4gICAgcm91bmRpbmdNZXRob2RGbiA9IE1hdGgucm91bmQ7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJyb3VuZGluZ01ldGhvZCBtdXN0IGJlICdmbG9vcicsICdjZWlsJyBvciAncm91bmQnXCIpO1xuICB9XG5cbiAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGVSaWdodC5nZXRUaW1lKCkgLSBkYXRlTGVmdC5nZXRUaW1lKCk7XG4gIHZhciBtaW51dGVzID0gbWlsbGlzZWNvbmRzIC8gTUlMTElTRUNPTkRTX0lOX01JTlVURTtcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCk7IC8vIFVzZSBEU1Qtbm9ybWFsaXplZCBkaWZmZXJlbmNlIGluIG1pbnV0ZXMgZm9yIHllYXJzLCBtb250aHMgYW5kIGRheXM7XG4gIC8vIHVzZSByZWd1bGFyIGRpZmZlcmVuY2UgaW4gbWludXRlcyBmb3IgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHMuXG5cbiAgdmFyIGRzdE5vcm1hbGl6ZWRNaW51dGVzID0gKG1pbGxpc2Vjb25kcyAtIHRpbWV6b25lT2Zmc2V0KSAvIE1JTExJU0VDT05EU19JTl9NSU5VVEU7XG4gIHZhciBkZWZhdWx0VW5pdCA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy51bml0O1xuICB2YXIgdW5pdDtcblxuICBpZiAoIWRlZmF1bHRVbml0KSB7XG4gICAgaWYgKG1pbnV0ZXMgPCAxKSB7XG4gICAgICB1bml0ID0gJ3NlY29uZCc7XG4gICAgfSBlbHNlIGlmIChtaW51dGVzIDwgNjApIHtcbiAgICAgIHVuaXQgPSAnbWludXRlJztcbiAgICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0RBWSkge1xuICAgICAgdW5pdCA9ICdob3VyJztcbiAgICB9IGVsc2UgaWYgKGRzdE5vcm1hbGl6ZWRNaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgICAgdW5pdCA9ICdkYXknO1xuICAgIH0gZWxzZSBpZiAoZHN0Tm9ybWFsaXplZE1pbnV0ZXMgPCBNSU5VVEVTX0lOX1lFQVIpIHtcbiAgICAgIHVuaXQgPSAnbW9udGgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gJ3llYXInO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB1bml0ID0gU3RyaW5nKGRlZmF1bHRVbml0KTtcbiAgfSAvLyAwIHVwIHRvIDYwIHNlY29uZHNcblxuXG4gIGlmICh1bml0ID09PSAnc2Vjb25kJykge1xuICAgIHZhciBzZWNvbmRzID0gcm91bmRpbmdNZXRob2RGbihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4U2Vjb25kcycsIHNlY29uZHMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgdXAgdG8gNjAgbWluc1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtaW51dGUnKSB7XG4gICAgdmFyIHJvdW5kZWRNaW51dGVzID0gcm91bmRpbmdNZXRob2RGbihtaW51dGVzKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIHJvdW5kZWRNaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHVwIHRvIDI0IGhvdXJzXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ2hvdXInKSB7XG4gICAgdmFyIGhvdXJzID0gcm91bmRpbmdNZXRob2RGbihtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hIb3VycycsIGhvdXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnZGF5Jykge1xuICAgIHZhciBkYXlzID0gcm91bmRpbmdNZXRob2RGbihkc3ROb3JtYWxpemVkTWludXRlcyAvIE1JTlVURVNfSU5fREFZKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIGRheXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgdXAgdG8gMTIgbW9udGhzXG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ21vbnRoJykge1xuICAgIHZhciBtb250aHMgPSByb3VuZGluZ01ldGhvZEZuKGRzdE5vcm1hbGl6ZWRNaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIG1vbnRocyA9PT0gMTIgJiYgZGVmYXVsdFVuaXQgIT09ICdtb250aCcgPyBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hZZWFycycsIDEsIGxvY2FsaXplT3B0aW9ucykgOiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgeWVhciB1cCB0byBtYXggRGF0ZVxuICB9IGVsc2UgaWYgKHVuaXQgPT09ICd5ZWFyJykge1xuICAgIHZhciB5ZWFycyA9IHJvdW5kaW5nTWV0aG9kRm4oZHN0Tm9ybWFsaXplZE1pbnV0ZXMgLyBNSU5VVEVTX0lOX1lFQVIpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG5cbiAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJ1bml0IG11c3QgYmUgJ3NlY29uZCcsICdtaW51dGUnLCAnaG91cicsICdkYXknLCAnbW9udGgnIG9yICd5ZWFyJ1wiKTtcbn0iLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2VTdHJpY3QgZnJvbSBcIi4uL2Zvcm1hdERpc3RhbmNlU3RyaWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMsIHVzaW5nIHN0cmljdCB1bml0cy5cbiAqIFRoaXMgaXMgbGlrZSBgZm9ybWF0RGlzdGFuY2VgLCBidXQgZG9lcyBub3QgdXNlIGhlbHBlcnMgbGlrZSAnYWxtb3N0JywgJ292ZXInLFxuICogJ2xlc3MgdGhhbicgYW5kIHRoZSBsaWtlLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDU5IHNlY3MgICAgICAgICAgfCBbMC4uNTldIHNlY29uZHMgICAgIHxcbiAqIHwgMSAuLi4gNTkgbWlucyAgICAgICAgICB8IFsxLi41OV0gbWludXRlcyAgICAgfFxuICogfCAxIC4uLiAyMyBocnMgICAgICAgICAgIHwgWzEuLjIzXSBob3VycyAgICAgICB8XG4gKiB8IDEgLi4uIDI5IGRheXMgICAgICAgICAgfCBbMS4uMjldIGRheXMgICAgICAgIHxcbiAqIHwgMSAuLi4gMTEgbW9udGhzICAgICAgICB8IFsxLi4xMV0gbW9udGhzICAgICAgfFxuICogfCAxIC4uLiBOIHllYXJzICAgICAgICAgIHwgWzEuLk5dICB5ZWFycyAgICAgICB8XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7J3NlY29uZCd8J21pbnV0ZSd8J2hvdXInfCdkYXknfCdtb250aCd8J3llYXInfSBbb3B0aW9ucy51bml0XSAtIGlmIHNwZWNpZmllZCwgd2lsbCBmb3JjZSBhIHVuaXRcbiAqIEBwYXJhbSB7J2Zsb29yJ3wnY2VpbCd8J3JvdW5kJ30gW29wdGlvbnMucm91bmRpbmdNZXRob2Q9J3JvdW5kJ10gLSB3aGljaCB3YXkgdG8gcm91bmQgcGFydGlhbCB1bml0c1xuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSwgd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMiBKdWx5IDIwMTQ/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyKVxuICogKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIG5vdyBpcyAxIEphbnVhcnkgMjAxNSAwMDowMDowMCxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1LCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KVxuICogKVxuICogLy89PiAnMTUgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNiwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QoXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDAsIDEpLFxuICogICB7YWRkU3VmZml4OiB0cnVlfVxuICogKVxuICogLy89PiAnaW4gMSB5ZWFyJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyOCBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEphbnVhcnkgMjAxNSwgaW4gbW9udGhzLCByb3VuZGVkIHVwPz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QobmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgdW5pdDogJ21vbnRoJyxcbiAqICAgcm91bmRpbmdNZXRob2Q6ICdjZWlsJ1xuICogfSlcbiAqIC8vPT4gJzEgbW9udGgnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDEgSmFudWFyeSAyMDE1LFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTYgaW4gRXNwZXJhbnRvP1xuICogY29uc3QgZW9Mb2NhbGUgPSByZXF1aXJlKCdkYXRlLWZucy9sb2NhbGUvZW8nKVxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChcbiAqICAgbmV3IERhdGUoMjAxNiwgMCwgMSksXG4gKiAgIHtsb2NhbGU6IGVvTG9jYWxlfVxuICogKVxuICogLy89PiAnMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gZm9ybWF0RGlzdGFuY2VTdHJpY3QoZGlydHlEYXRlLCBEYXRlLm5vdygpLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50JztcblxuZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV3RGF0ZS5zZXREYXRlKG5ld0RhdGUuZ2V0RGF0ZSgpICsgZGF5cyk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuZnVuY3Rpb24gZ2V0RGF5c09mTW9udGgoZGF0ZSwgcGFkZGVkLCBmaXJzdERheU9mV2Vlaykge1xuICBjb25zdCBkYXlzID0gW107XG4gIGNvbnN0IGZpcnN0T2ZNb250aCA9IGdldEZpcnN0T2ZNb250aChkYXRlKTtcbiAgY29uc3QgZmlyc3REYXlNb250aCA9IGZpcnN0T2ZNb250aC5nZXREYXkoKSA9PT0gMCA/IDcgOiBmaXJzdE9mTW9udGguZ2V0RGF5KCk7XG4gIGNvbnN0IGxhc3RPZk1vbnRoID0gZ2V0TGFzdE9mTW9udGgoZGF0ZSk7XG4gIGNvbnN0IGxhc3REYXlPZk1vbnRoID0gbGFzdE9mTW9udGguZ2V0RGF5KCkgPT09IDAgPyA3IDogbGFzdE9mTW9udGguZ2V0RGF5KCk7XG4gIGNvbnN0IGxhc3REYXlPZldlZWsgPSBmaXJzdERheU9mV2VlayA9PT0gMSA/IDcgOiBmaXJzdERheU9mV2VlayAtIDE7XG4gIGNvbnN0IGxlZnRQYWRkaW5nRGF5cyA9IFtdO1xuICBjb25zdCByaWdodFBhZGRpbmdEYXlzID0gW107XG4gIGlmIChwYWRkZWQpIHtcbiAgICBjb25zdCBsZWZ0UGFkZGluZyA9ICg3IC0gZmlyc3REYXlPZldlZWsgKyBmaXJzdERheU1vbnRoKSAlIDc7XG4gICAgbGV0IGxlZnRQYWRkaW5nQW1vdW50ID0gbGVmdFBhZGRpbmc7XG4gICAgbGV0IGxlZnRQYWRkaW5nRGF5ID0gZ2V0UHJldmlvdXNEYXkoZmlyc3RPZk1vbnRoKTtcbiAgICB3aGlsZSAobGVmdFBhZGRpbmdBbW91bnQgPiAwKSB7XG4gICAgICBsZWZ0UGFkZGluZ0RheXMucHVzaChsZWZ0UGFkZGluZ0RheSk7XG4gICAgICBsZWZ0UGFkZGluZ0RheSA9IGdldFByZXZpb3VzRGF5KGxlZnRQYWRkaW5nRGF5KTtcbiAgICAgIGxlZnRQYWRkaW5nQW1vdW50IC09IDE7XG4gICAgfVxuICAgIGxlZnRQYWRkaW5nRGF5cy5yZXZlcnNlKCk7XG4gICAgY29uc3QgcmlnaHRQYWRkaW5nID0gKDcgLSBsYXN0RGF5T2ZNb250aCArIGxhc3REYXlPZldlZWspICUgNztcbiAgICBsZXQgcmlnaHRQYWRkaW5nQW1vdW50ID0gcmlnaHRQYWRkaW5nO1xuICAgIGxldCByaWdodFBhZGRpbmdEYXkgPSBnZXROZXh0RGF5KGxhc3RPZk1vbnRoKTtcbiAgICB3aGlsZSAocmlnaHRQYWRkaW5nQW1vdW50ID4gMCkge1xuICAgICAgcmlnaHRQYWRkaW5nRGF5cy5wdXNoKHJpZ2h0UGFkZGluZ0RheSk7XG4gICAgICByaWdodFBhZGRpbmdEYXkgPSBnZXROZXh0RGF5KHJpZ2h0UGFkZGluZ0RheSk7XG4gICAgICByaWdodFBhZGRpbmdBbW91bnQgLT0gMTtcbiAgICB9XG4gIH1cbiAgbGV0IGN1cnJlbnREYXkgPSBmaXJzdE9mTW9udGg7XG4gIHdoaWxlIChjdXJyZW50RGF5LmdldE1vbnRoKCkgPT09IGRhdGUuZ2V0TW9udGgoKSkge1xuICAgIGRheXMucHVzaChjdXJyZW50RGF5KTtcbiAgICBjdXJyZW50RGF5ID0gZ2V0TmV4dERheShjdXJyZW50RGF5KTtcbiAgfVxuICByZXR1cm4gWy4uLmxlZnRQYWRkaW5nRGF5cywgLi4uZGF5cywgLi4ucmlnaHRQYWRkaW5nRGF5c107XG59XG5mdW5jdGlvbiBnZXRGaXJzdE9mTW9udGgoZGF0ZSkge1xuICBjb25zdCBmaXJzdE9mTW9udGggPSByZW1vdmVUaW1lem9uZU9mZnNldChuZXcgRGF0ZShgJHtTdHJpbmcoZ2V0WWVhcihkYXRlKSkucGFkU3RhcnQoNCwgJzAnKX0tJHtTdHJpbmcoZ2V0TW9udGgoZGF0ZSkpLnBhZFN0YXJ0KDIsICcwJyl9LTAxYCkpO1xuICByZXR1cm4gZmlyc3RPZk1vbnRoO1xufVxuZnVuY3Rpb24gZ2V0SVNPRGF0ZVN0cmluZyhkYXRlKSB7XG4gIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke1N0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpfS0ke1N0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKX1gO1xufVxuZnVuY3Rpb24gZ2V0TGFzdE9mTW9udGgoZGF0ZSkge1xuICBjb25zdCBuZXdEYXRlID0gZ2V0Rmlyc3RPZk1vbnRoKGRhdGUpO1xuICBuZXdEYXRlLnNldE1vbnRoKG5ld0RhdGUuZ2V0TW9udGgoKSArIDEpO1xuICBuZXdEYXRlLnNldERhdGUobmV3RGF0ZS5nZXREYXRlKCkgLSAxKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59XG5mdW5jdGlvbiBnZXRNb250aChkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxO1xufVxuZnVuY3Rpb24gZ2V0TW9udGhzKGxvY2FsZSkge1xuICByZXR1cm4gbmV3IEFycmF5KDEyKS5maWxsKHVuZGVmaW5lZCkubWFwKChfLCBtb250aCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSByZW1vdmVUaW1lem9uZU9mZnNldChuZXcgRGF0ZShgMjAwNi0ke1N0cmluZyhtb250aCArIDEpLnBhZFN0YXJ0KDIsICcwJyl9LTAxYCkpO1xuICAgIHJldHVybiBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgbW9udGg6ICdsb25nJ1xuICAgIH0pLmZvcm1hdChkYXRlKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXROZXh0RGF5KGRhdGUpIHtcbiAgcmV0dXJuIGFkZERheXMoZGF0ZSwgMSk7XG59XG5mdW5jdGlvbiBnZXROZXh0TW9udGgoZGF0ZSkge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIG5ld0RhdGUuc2V0TW9udGgobmV3RGF0ZS5nZXRNb250aCgpICsgMSk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuZnVuY3Rpb24gZ2V0TmV4dFllYXIoZGF0ZSkge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIG5ld0RhdGUuc2V0RnVsbFllYXIobmV3RGF0ZS5nZXRGdWxsWWVhcigpICsgMSk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuZnVuY3Rpb24gZ2V0UHJldmlvdXNEYXkoZGF0ZSkge1xuICByZXR1cm4gc3ViRGF5cyhkYXRlLCAxKTtcbn1cbmZ1bmN0aW9uIGdldFByZXZpb3VzTW9udGgoZGF0ZSkge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIG5ld0RhdGUuc2V0TW9udGgobmV3RGF0ZS5nZXRNb250aCgpIC0gMSk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuZnVuY3Rpb24gZ2V0UHJldmlvdXNZZWFyKGRhdGUpIHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBuZXdEYXRlLnNldEZ1bGxZZWFyKG5ld0RhdGUuZ2V0RnVsbFllYXIoKSAtIDEpO1xuICByZXR1cm4gbmV3RGF0ZTtcbn1cbmZ1bmN0aW9uIGdldFdlZWtEYXlzKGZpcnN0RGF5T2ZXZWVrLCBsb2NhbGUpIHtcbiAgcmV0dXJuIG5ldyBBcnJheSg3KVxuICAgIC5maWxsKHVuZGVmaW5lZClcbiAgICAubWFwKChfLCBpbmRleCkgPT4gKChmaXJzdERheU9mV2VlayArIGluZGV4KSAlIDcpICsgMSlcbiAgICAubWFwKChkYXkpID0+IHtcbiAgICBjb25zdCBkYXRlID0gcmVtb3ZlVGltZXpvbmVPZmZzZXQobmV3IERhdGUoYDIwMDYtMDEtMCR7ZGF5fWApKTtcbiAgICByZXR1cm4gW1xuICAgICAgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICAgICAgd2Vla2RheTogJ3Nob3J0J1xuICAgICAgfSkuZm9ybWF0KGRhdGUpLFxuICAgICAgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICAgICAgd2Vla2RheTogJ2xvbmcnXG4gICAgICB9KS5mb3JtYXQoZGF0ZSlcbiAgICBdO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldFllYXIoZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xufVxuZnVuY3Rpb24gaXNEYXRlSW5SYW5nZShkYXRlLCByYW5nZSkge1xuICBpZiAoIWRhdGUgfHwgIXJhbmdlIHx8ICFyYW5nZS5mcm9tIHx8ICFyYW5nZS50bykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBlYXJseURhdGUgPSByYW5nZS5mcm9tIDwgcmFuZ2UudG8gPyByYW5nZS5mcm9tIDogcmFuZ2UudG87XG4gIGNvbnN0IGxhdGVyRGF0ZSA9IHJhbmdlLmZyb20gPCByYW5nZS50byA/IHJhbmdlLnRvIDogcmFuZ2UuZnJvbTtcbiAgcmV0dXJuIGRhdGUgPj0gZWFybHlEYXRlICYmIGRhdGUgPD0gbGF0ZXJEYXRlO1xufVxuZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGUxLCBkYXRlMikge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKGRhdGUxLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUyLmdldEZ1bGxZZWFyKCkgJiZcbiAgICBkYXRlMS5nZXRNb250aCgpID09PSBkYXRlMi5nZXRNb250aCgpICYmXG4gICAgZGF0ZTEuZ2V0RGF0ZSgpID09PSBkYXRlMi5nZXREYXRlKCkpO1xufVxuZnVuY3Rpb24gcmVtb3ZlVGltZXpvbmVPZmZzZXQoZGF0ZSkge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIG5ld0RhdGUuc2V0TWludXRlcyhuZXdEYXRlLmdldE1pbnV0ZXMoKSArIG5ld0RhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuZnVuY3Rpb24gc3ViRGF5cyhkYXRlLCBkYXlzKSB7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV3RGF0ZS5zZXREYXRlKG5ld0RhdGUuZ2V0RGF0ZSgpIC0gZGF5cyk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuXG5jb25zdCB3Y0RhdGVwaWNrZXJDc3MgPSBcIi52aXN1YWxseS1oaWRkZW4uc2Mtd2MtZGF0ZXBpY2tlcntwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47d2lkdGg6MXB4O2hlaWdodDoxcHg7d2hpdGUtc3BhY2U6bm93cmFwO2NsaXA6cmVjdCgwIDAgMCAwKTstd2Via2l0LWNsaXAtcGF0aDppbnNldCg1MCUpO2NsaXAtcGF0aDppbnNldCg1MCUpfVwiO1xuXG5jb25zdCBkZWZhdWx0TGFiZWxzID0ge1xuICBjbGVhckJ1dHRvbjogJ0NsZWFyIHZhbHVlJyxcbiAgbW9udGhTZWxlY3Q6ICdTZWxlY3QgbW9udGgnLFxuICBuZXh0TW9udGhCdXR0b246ICdOZXh0IG1vbnRoJyxcbiAgbmV4dFllYXJCdXR0b246ICdOZXh0IHllYXInLFxuICBwaWNrZXI6ICdDaG9vc2UgZGF0ZScsXG4gIHByZXZpb3VzTW9udGhCdXR0b246ICdQcmV2aW91cyBtb250aCcsXG4gIHByZXZpb3VzWWVhckJ1dHRvbjogJ1ByZXZpb3VzIHllYXInLFxuICB0b2RheUJ1dHRvbjogJ1Nob3cgdG9kYXknLFxuICB5ZWFyU2VsZWN0OiAnU2VsZWN0IHllYXInXG59O1xuY29uc3QgV0NEYXRlcGlja2VyID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuc2VsZWN0RGF0ZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwic2VsZWN0RGF0ZVwiLCA3KTtcbiAgICB0aGlzLmNoYW5nZU1vbnRoID0gY3JlYXRlRXZlbnQodGhpcywgXCJjaGFuZ2VNb250aFwiLCA3KTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlRGF0ZSA9ICgpID0+IGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudENsYXNzTmFtZSA9ICd3Yy1kYXRlcGlja2VyJztcbiAgICB0aGlzLmZpcnN0RGF5T2ZXZWVrID0gMDtcbiAgICB0aGlzLmxhYmVscyA9IGRlZmF1bHRMYWJlbHM7XG4gICAgdGhpcy5sb2NhbGUgPSAobmF2aWdhdG9yID09PSBudWxsIHx8IG5hdmlnYXRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2aWdhdG9yLmxhbmd1YWdlKSB8fCAnZW4tVVMnO1xuICAgIHRoaXMuc2hvd0NsZWFyQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5zaG93TW9udGhTdGVwcGVyID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dUb2RheUJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd1llYXJTdGVwcGVyID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydERhdGUgPSBnZXRJU09EYXRlU3RyaW5nKG5ldyBEYXRlKCkpO1xuICAgIHRoaXMuaW5pdCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudERhdGUgPSB0aGlzLnN0YXJ0RGF0ZVxuICAgICAgICA/IHJlbW92ZVRpbWV6b25lT2Zmc2V0KG5ldyBEYXRlKHRoaXMuc3RhcnREYXRlKSlcbiAgICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgICAgdGhpcy51cGRhdGVXZWVrZGF5cygpO1xuICAgIH07XG4gICAgdGhpcy5uZXh0TW9udGggPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldE5leHRNb250aCh0aGlzLmN1cnJlbnREYXRlKSk7XG4gICAgfTtcbiAgICB0aGlzLm5leHRZZWFyID0gKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXROZXh0WWVhcih0aGlzLmN1cnJlbnREYXRlKSk7XG4gICAgfTtcbiAgICB0aGlzLnByZXZpb3VzTW9udGggPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldFByZXZpb3VzTW9udGgodGhpcy5jdXJyZW50RGF0ZSkpO1xuICAgIH07XG4gICAgdGhpcy5wcmV2aW91c1llYXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldFByZXZpb3VzWWVhcih0aGlzLmN1cnJlbnREYXRlKSk7XG4gICAgfTtcbiAgICB0aGlzLnNob3dUb2RheSA9ICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUobmV3IERhdGUoKSk7XG4gICAgfTtcbiAgICB0aGlzLmNsZWFyID0gKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICB0aGlzLm9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1kYXRlXScpO1xuICAgICAgaWYgKCFCb29sZWFuKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0ZSA9IHJlbW92ZVRpbWV6b25lT2Zmc2V0KG5ldyBEYXRlKHRhcmdldC5kYXRhc2V0LmRhdGUpKTtcbiAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZGF0ZSk7XG4gICAgICB0aGlzLm9uU2VsZWN0RGF0ZShkYXRlKTtcbiAgICB9O1xuICAgIHRoaXMub25Nb250aFNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbW9udGggPSArZXZlbnQudGFyZ2V0LnZhbHVlIC0gMTtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgIGRhdGUuc2V0TW9udGgobW9udGgpO1xuICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShkYXRlKTtcbiAgICB9O1xuICAgIHRoaXMub25ZZWFyU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBsZXQgeWVhciA9ICtldmVudC50YXJnZXQudmFsdWU7XG4gICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmIChpc05hTih5ZWFyKSkge1xuICAgICAgICB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFN0cmluZyh5ZWFyKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHllYXIgPCAwKSB7XG4gICAgICAgIHllYXIgPSAwO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFN0cmluZyh5ZWFyKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHllYXIgPiA5OTk5KSB7XG4gICAgICAgIHllYXIgPSA5OTk5O1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFN0cmluZyh5ZWFyKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhcik7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGRhdGUpO1xuICAgIH07XG4gICAgdGhpcy5vbktleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldFByZXZpb3VzRGF5KHRoaXMuY3VycmVudERhdGUpLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldE5leHREYXkodGhpcy5jdXJyZW50RGF0ZSksIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoc3ViRGF5cyh0aGlzLmN1cnJlbnREYXRlLCA3KSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGFkZERheXModGhpcy5jdXJyZW50RGF0ZSwgNyksIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ1BhZ2VVcCcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXRQcmV2aW91c1llYXIodGhpcy5jdXJyZW50RGF0ZSksIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZ2V0UHJldmlvdXNNb250aCh0aGlzLmN1cnJlbnREYXRlKSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdQYWdlRG93bicpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXROZXh0WWVhcih0aGlzLmN1cnJlbnREYXRlKSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXROZXh0TW9udGgodGhpcy5jdXJyZW50RGF0ZSksIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5jb2RlID09PSAnSG9tZScpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXRGaXJzdE9mTW9udGgodGhpcy5jdXJyZW50RGF0ZSksIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ0VuZCcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXRMYXN0T2ZNb250aCh0aGlzLmN1cnJlbnREYXRlKSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5jb2RlID09PSAnU3BhY2UnIHx8IGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vblNlbGVjdERhdGUodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uTW91c2VFbnRlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0ZSA9IHJlbW92ZVRpbWV6b25lT2Zmc2V0KG5ldyBEYXRlKGV2ZW50LnRhcmdldC5jbG9zZXN0KCd0ZCcpLmRhdGFzZXQuZGF0ZSkpO1xuICAgICAgdGhpcy5ob3ZlcmVkRGF0ZSA9IGRhdGU7XG4gICAgfTtcbiAgICB0aGlzLm9uTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuaG92ZXJlZERhdGUgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICB3YXRjaEZpcnN0RGF5T2ZXZWVrKCkge1xuICAgIHRoaXMudXBkYXRlV2Vla2RheXMoKTtcbiAgfVxuICB3YXRjaExvY2FsZSgpIHtcbiAgICBpZiAoIUJvb2xlYW4odGhpcy5sb2NhbGUpKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IChuYXZpZ2F0b3IgPT09IG51bGwgfHwgbmF2aWdhdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYXZpZ2F0b3IubGFuZ3VhZ2UpIHx8ICdlbi1VUyc7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlV2Vla2RheXMoKTtcbiAgfVxuICB3YXRjaFJhbmdlKCkge1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3REYXRlLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxuICB3YXRjaFN0YXJ0RGF0ZSgpIHtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gdGhpcy5zdGFydERhdGVcbiAgICAgID8gcmVtb3ZlVGltZXpvbmVPZmZzZXQobmV3IERhdGUodGhpcy5zdGFydERhdGUpKVxuICAgICAgOiBuZXcgRGF0ZSgpO1xuICB9XG4gIHdhdGNoVmFsdWUoKSB7XG4gICAgaWYgKEJvb2xlYW4odGhpcy52YWx1ZSkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpICYmIHRoaXMudmFsdWUubGVuZ3RoID49IDEpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IHRoaXMudmFsdWVbMF07XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLnZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gdGhpcy52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIGlmICh0aGlzLm1vdmVGb2N1c0FmdGVyTW9udGhDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmZvY3VzRGF0ZSh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgIHRoaXMubW92ZUZvY3VzQWZ0ZXJNb250aENoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlV2Vla2RheXMoKSB7XG4gICAgdGhpcy53ZWVrZGF5cyA9IGdldFdlZWtEYXlzKHRoaXMuZmlyc3REYXlPZldlZWsgPT09IDAgPyA3IDogdGhpcy5maXJzdERheU9mV2VlaywgdGhpcy5sb2NhbGUpO1xuICB9XG4gIGdldENsYXNzTmFtZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oZWxlbWVudClcbiAgICAgID8gYCR7dGhpcy5lbGVtZW50Q2xhc3NOYW1lfV9fJHtlbGVtZW50fWBcbiAgICAgIDogdGhpcy5lbGVtZW50Q2xhc3NOYW1lO1xuICB9XG4gIGdldENhbGVuZGFyUm93cygpIHtcbiAgICBjb25zdCBkYXlzT2ZNb250aCA9IGdldERheXNPZk1vbnRoKHRoaXMuY3VycmVudERhdGUsIHRydWUsIHRoaXMuZmlyc3REYXlPZldlZWsgPT09IDAgPyA3IDogdGhpcy5maXJzdERheU9mV2Vlayk7XG4gICAgY29uc3QgY2FsZW5kYXJSb3dzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlzT2ZNb250aC5sZW5ndGg7IGkgKz0gNykge1xuICAgICAgY29uc3Qgcm93ID0gZGF5c09mTW9udGguc2xpY2UoaSwgaSArIDcpO1xuICAgICAgY2FsZW5kYXJSb3dzLnB1c2gocm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGVuZGFyUm93cztcbiAgfVxuICBnZXRUaXRsZSgpIHtcbiAgICBpZiAoIUJvb2xlYW4odGhpcy5jdXJyZW50RGF0ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5sb2NhbGUsIHtcbiAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgIHllYXI6ICdudW1lcmljJ1xuICAgIH0pLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgfVxuICBmb2N1c0RhdGUoZGF0ZSkge1xuICAgIHZhciBfYTtcbiAgICAoX2EgPSB0aGlzLmVsXG4gICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtZGF0ZT1cIiR7Z2V0SVNPRGF0ZVN0cmluZyhkYXRlKX1cIl1gKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gIH1cbiAgdXBkYXRlQ3VycmVudERhdGUoZGF0ZSwgbW92ZUZvY3VzKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBpZiAoeWVhciA+IDk5OTkgfHwgeWVhciA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbW9udGhDaGFuZ2VkID0gbW9udGggIT09IHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSB8fFxuICAgICAgeWVhciAhPT0gdGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGlmIChtb250aENoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlTW9udGguZW1pdCh7IG1vbnRoOiBnZXRNb250aChkYXRlKSwgeWVhcjogZ2V0WWVhcihkYXRlKSB9KTtcbiAgICAgIGlmIChtb3ZlRm9jdXMpIHtcbiAgICAgICAgdGhpcy5tb3ZlRm9jdXNBZnRlck1vbnRoQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY3VycmVudERhdGUgPSBkYXRlO1xuICAgIGlmIChtb3ZlRm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXNEYXRlKHRoaXMuY3VycmVudERhdGUpO1xuICAgIH1cbiAgfVxuICBvblNlbGVjdERhdGUoZGF0ZSkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKHRoaXMuZGlzYWJsZURhdGUoZGF0ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNSYW5nZVZhbHVlKHRoaXMudmFsdWUpKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9ICgoX2EgPSB0aGlzLnZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF0pID09PSB1bmRlZmluZWQgfHwgdGhpcy52YWx1ZS5sZW5ndGggPT09IDJcbiAgICAgICAgPyBbZGF0ZV1cbiAgICAgICAgOiBbdGhpcy52YWx1ZVswXSwgZGF0ZV07XG4gICAgICBpZiAobmV3VmFsdWUubGVuZ3RoID09PSAyICYmIG5ld1ZhbHVlWzBdID4gbmV3VmFsdWVbMV0pIHtcbiAgICAgICAgbmV3VmFsdWUucmV2ZXJzZSgpO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNvVmFsdWUgPSBuZXdWYWx1ZVsxXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gW2dldElTT0RhdGVTdHJpbmcobmV3VmFsdWVbMF0pXVxuICAgICAgICA6IFtnZXRJU09EYXRlU3RyaW5nKG5ld1ZhbHVlWzBdKSwgZ2V0SVNPRGF0ZVN0cmluZyhuZXdWYWx1ZVsxXSldO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5zZWxlY3REYXRlLmVtaXQoaXNvVmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICgoKF9iID0gdGhpcy52YWx1ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldFRpbWUoKSkgPT09IGRhdGUuZ2V0VGltZSgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUgPSBkYXRlO1xuICAgICAgdGhpcy5zZWxlY3REYXRlLmVtaXQoZ2V0SVNPRGF0ZVN0cmluZyhkYXRlKSk7XG4gICAgfVxuICB9XG4gIC8vIEB0cy1pZ25vcmVcbiAgaXNSYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMucmFuZ2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNob3dGb290ZXIgPSB0aGlzLnNob3dUb2RheUJ1dHRvbiB8fCB0aGlzLnNob3dDbGVhckJ1dHRvbjtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImRpdlwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiBTdHJpbmcodGhpcy5kaXNhYmxlZCksIFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVscy5waWNrZXIsIGNsYXNzOiB7XG4gICAgICAgIFt0aGlzLmdldENsYXNzTmFtZSgpXTogdHJ1ZSxcbiAgICAgICAgW2Ake3RoaXMuZ2V0Q2xhc3NOYW1lKCl9LS1kaXNhYmxlZGBdOiB0aGlzLmRpc2FibGVkXG4gICAgICB9LCByb2xlOiBcImdyb3VwXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnaGVhZGVyJykgfSwgaChcInNwYW5cIiwgeyBcImFyaWEtYXRvbWljXCI6IFwidHJ1ZVwiLCBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLCBjbGFzczogXCJ2aXN1YWxseS1oaWRkZW5cIiB9LCB0aGlzLmdldFRpdGxlKCkpLCB0aGlzLnNob3dZZWFyU3RlcHBlciAmJiAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVscy5wcmV2aW91c1llYXJCdXR0b24sIGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgncHJldmlvdXMteWVhci1idXR0b24nKSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIGlubmVySFRNTDogdGhpcy5wcmV2aW91c1llYXJCdXR0b25Db250ZW50IHx8IHVuZGVmaW5lZCwgb25DbGljazogdGhpcy5wcmV2aW91c1llYXIsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcInN2Z1wiLCB7IGZpbGw6IFwibm9uZVwiLCBoZWlnaHQ6IFwiMjRcIiwgXCJzdHJva2UtbGluZWNhcFwiOiBcInJvdW5kXCIsIFwic3Ryb2tlLWxpbmVqb2luXCI6IFwicm91bmRcIiwgXCJzdHJva2Utd2lkdGhcIjogXCIyXCIsIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIiwgdmlld0JveDogXCIwIDAgMjQgMjRcIiwgd2lkdGg6IFwiMjRcIiB9LCBoKFwicG9seWxpbmVcIiwgeyBwb2ludHM6IFwiMTEgMTcgNiAxMiAxMSA3XCIgfSksIGgoXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCIxOCAxNyAxMyAxMiAxOCA3XCIgfSkpKSksIHRoaXMuc2hvd01vbnRoU3RlcHBlciAmJiAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVscy5wcmV2aW91c01vbnRoQnV0dG9uLCBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ3ByZXZpb3VzLW1vbnRoLWJ1dHRvbicpLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgaW5uZXJIVE1MOiB0aGlzLnByZXZpb3VzTW9udGhCdXR0b25Db250ZW50IHx8IHVuZGVmaW5lZCwgb25DbGljazogdGhpcy5wcmV2aW91c01vbnRoLCB0eXBlOiBcImJ1dHRvblwiIH0sIGgoXCJzdmdcIiwgeyBmaWxsOiBcIm5vbmVcIiwgaGVpZ2h0OiBcIjI0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIjogXCJyb3VuZFwiLCBcInN0cm9rZS1saW5lam9pblwiOiBcInJvdW5kXCIsIFwic3Ryb2tlLXdpZHRoXCI6IFwiMlwiLCBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsIHdpZHRoOiBcIjI0XCIgfSwgaChcInBvbHlsaW5lXCIsIHsgcG9pbnRzOiBcIjE1IDE4IDkgMTIgMTUgNlwiIH0pKSkpLCBoKFwic3BhblwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnY3VycmVudC1tb250aCcpIH0sIGgoXCJzZWxlY3RcIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5sYWJlbHMubW9udGhTZWxlY3QsIGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnbW9udGgtc2VsZWN0JyksIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBuYW1lOiBcIm1vbnRoXCIsIG9uQ2hhbmdlOiB0aGlzLm9uTW9udGhTZWxlY3QgfSwgZ2V0TW9udGhzKHRoaXMubG9jYWxlKS5tYXAoKG1vbnRoLCBpbmRleCkgPT4gKGgoXCJvcHRpb25cIiwgeyBrZXk6IG1vbnRoLCBzZWxlY3RlZDogdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpID09PSBpbmRleCwgdmFsdWU6IGluZGV4ICsgMSB9LCBtb250aCkpKSksIGgoXCJpbnB1dFwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVscy55ZWFyU2VsZWN0LCBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ3llYXItc2VsZWN0JyksIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBtYXg6IDk5OTksIG1heExlbmd0aDogNCwgbWluOiAxLCBuYW1lOiBcInllYXJcIiwgb25DaGFuZ2U6IHRoaXMub25ZZWFyU2VsZWN0LCB0eXBlOiBcIm51bWJlclwiLCB2YWx1ZTogdGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpIH0pKSwgdGhpcy5zaG93TW9udGhTdGVwcGVyICYmIChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWxzLm5leHRNb250aEJ1dHRvbiwgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCduZXh0LW1vbnRoLWJ1dHRvbicpLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgaW5uZXJIVE1MOiB0aGlzLm5leHRNb250aEJ1dHRvbkNvbnRlbnQgfHwgdW5kZWZpbmVkLCBvbkNsaWNrOiB0aGlzLm5leHRNb250aCwgdHlwZTogXCJidXR0b25cIiB9LCBoKFwic3ZnXCIsIHsgZmlsbDogXCJub25lXCIsIGhlaWdodDogXCIyNFwiLCBcInN0cm9rZS1saW5lY2FwXCI6IFwicm91bmRcIiwgXCJzdHJva2UtbGluZWpvaW5cIjogXCJyb3VuZFwiLCBcInN0cm9rZS13aWR0aFwiOiBcIjJcIiwgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCB3aWR0aDogXCIyNFwiIH0sIGgoXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCI5IDE4IDE1IDEyIDkgNlwiIH0pKSkpLCB0aGlzLnNob3dZZWFyU3RlcHBlciAmJiAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVscy5uZXh0WWVhckJ1dHRvbiwgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCduZXh0LXllYXItYnV0dG9uJyksIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBpbm5lckhUTUw6IHRoaXMubmV4dFllYXJCdXR0b25Db250ZW50IHx8IHVuZGVmaW5lZCwgb25DbGljazogdGhpcy5uZXh0WWVhciwgdHlwZTogXCJidXR0b25cIiB9LCBoKFwic3ZnXCIsIHsgZmlsbDogXCJub25lXCIsIGhlaWdodDogXCIyNFwiLCBcInN0cm9rZS1saW5lY2FwXCI6IFwicm91bmRcIiwgXCJzdHJva2UtbGluZWpvaW5cIjogXCJyb3VuZFwiLCBcInN0cm9rZS13aWR0aFwiOiBcIjJcIiwgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCB3aWR0aDogXCIyNFwiIH0sIGgoXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCIxMyAxNyAxOCAxMiAxMyA3XCIgfSksIGgoXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCI2IDE3IDExIDEyIDYgN1wiIH0pKSkpKSwgaChcImRpdlwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnYm9keScpIH0sIGgoXCJ0YWJsZVwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnY2FsZW5kYXInKSwgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93biwgcm9sZTogXCJncmlkXCIgfSwgaChcInRoZWFkXCIsIHsgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCdjYWxlbmRhci1oZWFkZXInKSB9LCBoKFwidHJcIiwgeyBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ3dlZWtkYXktcm93JykgfSwgdGhpcy53ZWVrZGF5cy5tYXAoKHdlZWtkYXkpID0+IChoKFwidGhcIiwgeyBhYmJyOiB3ZWVrZGF5WzFdLCBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ3dlZWtkYXknKSwga2V5OiB3ZWVrZGF5WzBdLCBzY29wZTogXCJjb2xcIiB9LCBoKFwic3BhblwiLCBudWxsLCB3ZWVrZGF5WzBdKSkpKSkpLCBoKFwidGJvZHlcIiwgbnVsbCwgdGhpcy5nZXRDYWxlbmRhclJvd3MoKS5tYXAoKGNhbGVuZGFyUm93KSA9PiB7XG4gICAgICBjb25zdCByb3dLZXkgPSBgcm93LSR7Y2FsZW5kYXJSb3dbMF0uZ2V0TW9udGgoKX0tJHtjYWxlbmRhclJvd1swXS5nZXREYXRlKCl9YDtcbiAgICAgIHJldHVybiAoaChcInRyXCIsIHsgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCdjYWxlbmRhci1yb3cnKSwga2V5OiByb3dLZXkgfSwgY2FsZW5kYXJSb3cubWFwKChkYXkpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICAgICAgY29uc3QgaXNDdXJyZW50ID0gaXNTYW1lRGF5KGRheSwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSBkYXkuZ2V0TW9udGgoKSAhPT0gdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKVxuICAgICAgICAgID8gaXNTYW1lRGF5KGRheSwgdGhpcy52YWx1ZVswXSkgfHxcbiAgICAgICAgICAgIGlzU2FtZURheShkYXksIHRoaXMudmFsdWVbMV0pXG4gICAgICAgICAgOiBpc1NhbWVEYXkoZGF5LCB0aGlzLnZhbHVlKTtcbiAgICAgICAgY29uc3QgaXNJblJhbmdlID0gIXRoaXMuaXNSYW5nZVZhbHVlXG4gICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgIDogaXNEYXRlSW5SYW5nZShkYXksIHtcbiAgICAgICAgICAgIGZyb206IChfYSA9IHRoaXMudmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSxcbiAgICAgICAgICAgIHRvOiAoKF9iID0gdGhpcy52YWx1ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iWzFdKSB8fFxuICAgICAgICAgICAgICB0aGlzLmhvdmVyZWREYXRlIHx8XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb3JkZXJlZFZhbHVlcyA9IEJvb2xlYW4oKF9jID0gdGhpcy52YWx1ZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jWzBdKVxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgKF9kID0gdGhpcy52YWx1ZSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kWzBdLFxuICAgICAgICAgICAgKChfZSA9IHRoaXMudmFsdWUpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZVsxXSkgfHwgdGhpcy5ob3ZlcmVkRGF0ZVxuICAgICAgICAgIF0uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gICAgICAgICAgOiBbXTtcbiAgICAgICAgY29uc3QgaXNTdGFydCA9IHRoaXMucmFuZ2UgJiYgaXNTYW1lRGF5KG9yZGVyZWRWYWx1ZXNbMF0sIGRheSk7XG4gICAgICAgIGNvbnN0IGlzRW5kID0gdGhpcy5yYW5nZSAmJiBpc1NhbWVEYXkob3JkZXJlZFZhbHVlc1sxXSwgZGF5KTtcbiAgICAgICAgY29uc3QgaXNUb2RheSA9IGlzU2FtZURheShkYXksIG5ldyBEYXRlKCkpO1xuICAgICAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy5kaXNhYmxlRGF0ZShkYXkpO1xuICAgICAgICBjb25zdCBjZWxsS2V5ID0gYGNlbGwtJHtkYXkuZ2V0TW9udGgoKX0tJHtkYXkuZ2V0RGF0ZSgpfWA7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHtcbiAgICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoJ2RhdGUnKV06IHRydWUsXG4gICAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCdkYXRlLS1jdXJyZW50JyldOiBpc0N1cnJlbnQsXG4gICAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCdkYXRlLS1kaXNhYmxlZCcpXTogaXNEaXNhYmxlZCxcbiAgICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoJ2RhdGUtLW92ZXJmbG93aW5nJyldOiBpc092ZXJmbG93aW5nLFxuICAgICAgICAgIFt0aGlzLmdldENsYXNzTmFtZSgnZGF0ZS0tdG9kYXknKV06IGlzVG9kYXksXG4gICAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCdkYXRlLS1zZWxlY3RlZCcpXTogaXNTZWxlY3RlZCxcbiAgICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoJ2RhdGUtLWluLXJhbmdlJyldOiBpc0luUmFuZ2UsXG4gICAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCdkYXRlLS1zdGFydCcpXTogaXNTdGFydCxcbiAgICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoJ2RhdGUtLWVuZCcpXTogaXNFbmRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgVGFnID0gaXNTZWxlY3RlZFxuICAgICAgICAgID8gJ3N0cm9uZydcbiAgICAgICAgICA6IGlzVG9kYXlcbiAgICAgICAgICAgID8gJ2VtJ1xuICAgICAgICAgICAgOiAnc3Bhbic7XG4gICAgICAgIHJldHVybiAoaChcInRkXCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IFN0cmluZyhpc0Rpc2FibGVkKSwgXCJhcmlhLXNlbGVjdGVkXCI6IGlzU2VsZWN0ZWQgPyAndHJ1ZScgOiB1bmRlZmluZWQsIGNsYXNzOiBjbGFzc05hbWUsIFwiZGF0YS1kYXRlXCI6IGdldElTT0RhdGVTdHJpbmcoZGF5KSwga2V5OiBjZWxsS2V5LCBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIG9uTW91c2VFbnRlcjogdGhpcy5vbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZTogdGhpcy5vbk1vdXNlTGVhdmUsIHJvbGU6IFwiZ3JpZGNlbGxcIiwgdGFiSW5kZXg6IGlzU2FtZURheShkYXksIHRoaXMuY3VycmVudERhdGUpICYmICF0aGlzLmRpc2FibGVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogLTEgfSwgaChUYWcsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LCBkYXkuZ2V0RGF0ZSgpKSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJ2aXN1YWxseS1oaWRkZW5cIiB9LCBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMubG9jYWxlLCB7XG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgbW9udGg6ICdsb25nJ1xuICAgICAgICB9KS5mb3JtYXQoZGF5KSkpKTtcbiAgICAgIH0pKSk7XG4gICAgfSkpKSksIHNob3dGb290ZXIgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ2Zvb3RlcicpIH0sIHRoaXMuc2hvd1RvZGF5QnV0dG9uICYmIChoKFwiYnV0dG9uXCIsIHsgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCd0b2RheS1idXR0b24nKSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIGlubmVySFRNTDogdGhpcy50b2RheUJ1dHRvbkNvbnRlbnQgfHwgdW5kZWZpbmVkLCBvbkNsaWNrOiB0aGlzLnNob3dUb2RheSwgdHlwZTogXCJidXR0b25cIiB9LCB0aGlzLmxhYmVscy50b2RheUJ1dHRvbikpLCB0aGlzLnNob3dDbGVhckJ1dHRvbiAmJiAoaChcImJ1dHRvblwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnY2xlYXItYnV0dG9uJyksIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBpbm5lckhUTUw6IHRoaXMuY2xlYXJCdXR0b25Db250ZW50IHx8IHVuZGVmaW5lZCwgb25DbGljazogdGhpcy5jbGVhciwgdHlwZTogXCJidXR0b25cIiB9LCB0aGlzLmxhYmVscy5jbGVhckJ1dHRvbikpKSkpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZmlyc3REYXlPZldlZWtcIjogW1wid2F0Y2hGaXJzdERheU9mV2Vla1wiXSxcbiAgICBcImxvY2FsZVwiOiBbXCJ3YXRjaExvY2FsZVwiXSxcbiAgICBcInJhbmdlXCI6IFtcIndhdGNoUmFuZ2VcIl0sXG4gICAgXCJzdGFydERhdGVcIjogW1wid2F0Y2hTdGFydERhdGVcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJ3YXRjaFZhbHVlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHdjRGF0ZXBpY2tlckNzczsgfVxufSwgWzIsIFwid2MtZGF0ZXBpY2tlclwiLCB7XG4gICAgXCJjbGVhckJ1dHRvbkNvbnRlbnRcIjogWzEsIFwiY2xlYXItYnV0dG9uLWNvbnRlbnRcIl0sXG4gICAgXCJkaXNhYmxlZFwiOiBbNF0sXG4gICAgXCJkaXNhYmxlRGF0ZVwiOiBbMTZdLFxuICAgIFwiZWxlbWVudENsYXNzTmFtZVwiOiBbMSwgXCJlbGVtZW50LWNsYXNzLW5hbWVcIl0sXG4gICAgXCJmaXJzdERheU9mV2Vla1wiOiBbMiwgXCJmaXJzdC1kYXktb2Ytd2Vla1wiXSxcbiAgICBcInJhbmdlXCI6IFs0XSxcbiAgICBcImxhYmVsc1wiOiBbMTZdLFxuICAgIFwibG9jYWxlXCI6IFsxXSxcbiAgICBcIm5leHRNb250aEJ1dHRvbkNvbnRlbnRcIjogWzEsIFwibmV4dC1tb250aC1idXR0b24tY29udGVudFwiXSxcbiAgICBcIm5leHRZZWFyQnV0dG9uQ29udGVudFwiOiBbMSwgXCJuZXh0LXllYXItYnV0dG9uLWNvbnRlbnRcIl0sXG4gICAgXCJwcmV2aW91c01vbnRoQnV0dG9uQ29udGVudFwiOiBbMSwgXCJwcmV2aW91cy1tb250aC1idXR0b24tY29udGVudFwiXSxcbiAgICBcInByZXZpb3VzWWVhckJ1dHRvbkNvbnRlbnRcIjogWzEsIFwicHJldmlvdXMteWVhci1idXR0b24tY29udGVudFwiXSxcbiAgICBcInNob3dDbGVhckJ1dHRvblwiOiBbNCwgXCJzaG93LWNsZWFyLWJ1dHRvblwiXSxcbiAgICBcInNob3dNb250aFN0ZXBwZXJcIjogWzQsIFwic2hvdy1tb250aC1zdGVwcGVyXCJdLFxuICAgIFwic2hvd1RvZGF5QnV0dG9uXCI6IFs0LCBcInNob3ctdG9kYXktYnV0dG9uXCJdLFxuICAgIFwic2hvd1llYXJTdGVwcGVyXCI6IFs0LCBcInNob3cteWVhci1zdGVwcGVyXCJdLFxuICAgIFwic3RhcnREYXRlXCI6IFsxLCBcInN0YXJ0LWRhdGVcIl0sXG4gICAgXCJ0b2RheUJ1dHRvbkNvbnRlbnRcIjogWzEsIFwidG9kYXktYnV0dG9uLWNvbnRlbnRcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbMTA0MF0sXG4gICAgXCJjdXJyZW50RGF0ZVwiOiBbMzJdLFxuICAgIFwiaG92ZXJlZERhdGVcIjogWzMyXSxcbiAgICBcIndlZWtkYXlzXCI6IFszMl1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJ3Yy1kYXRlcGlja2VyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJ3Yy1kYXRlcGlja2VyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgV0NEYXRlcGlja2VyKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuXG5jb25zdCBXY0RhdGVwaWNrZXIgPSBXQ0RhdGVwaWNrZXI7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBXY0RhdGVwaWNrZXIsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiO1xyXG5pbXBvcnQgeyBtb2RpZnlEdWVEYXRlfSAgZnJvbSBcIi4vdG9kb0NyZWF0b3JcIjtcclxuaW1wb3J0IFwid2MtZGF0ZXBpY2tlci9kaXN0L3RoZW1lcy9kYXJrLmNzc1wiO1xyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVmZmVjdHMgfSBmcm9tIFwiLi9oYW5kbGVFZmZlY3RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sRHVlRGF0ZUNoYW5nZShlbGVtZW50LCBpbmRleCl7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICBjb25zdCBjb3JyZWN0SW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm9yZGVyID09IGluZGV4KVxyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQsIHdpZHRoIH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBkYXRlUGlja2VyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3djLWRhdGVwaWNrZXInLCAnbmV3LWR1ZS1kYXRlJywgJ2RhdGVwaWNrZXInKVxyXG4gICAgZGF0ZVBpY2tlci5jbGFzc0xpc3QuYWRkKCdlZGl0LWR1ZS1kYXRlJylcclxuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gdG9kb3NbY29ycmVjdEluZGV4XS5kdWVEYXRlIFxyXG4gICAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoJ3N0YXJ0LWRhdGUnLCBgJHtjdXJyZW50RGF0ZX1gKVxyXG4gICAgZGF0ZVBpY2tlci52YWx1ZSA9IG5ldyBEYXRlKGAke2N1cnJlbnREYXRlLnJlcGxhY2VBbGwoJy0nLCAnLycpfWApXHJcblxyXG4gICAgZGF0ZVBpY2tlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgIGRhdGVQaWNrZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgZGF0ZVBpY2tlci5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4gICAgZGF0ZVBpY2tlci5zdHlsZS5sZWZ0ID0gYCR7bGVmdCAtICgyMzgtd2lkdGgpfXB4YDsgXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpO1xyXG4gICAgXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGlmKCFlLnRhcmdldC5jbG9zZXN0KCcubmV3LWR1ZS1kYXRlJykpXHJcbiAgICAgICAgICAgZGF0ZVBpY2tlci5yZW1vdmUoKVxyXG4gICAgfSlcclxuICAgICAgICBkYXRlUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdERhdGUnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlcGlja2VkID0gZXZlbnQuZGV0YWlsXHJcbiAgICAgICAgICAgIG1vZGlmeUR1ZURhdGUoaW5kZXgsIGRhdGVwaWNrZWQpXHJcbiAgICAgICAgICAgIGRhdGVQaWNrZXIucmVtb3ZlKClcclxuICAgICAgICAgICAgaGFuZGxlRWZmZWN0cygpXHJcbiAgICAgICAgfSk7XHJcbn0iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIjtcclxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuaW1wb3J0IHsgbW9kaWZ5TGlzdCB9IGZyb20gXCIuL3RvZG9DcmVhdG9yXCJcclxuaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hhbmRsZVNhdmVMb2dpY1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVFZmZlY3RzIH0gZnJvbSBcIi4vaGFuZGxlRWZmZWN0c1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpc3RPcHRpb25zKGxpc3RzKXtcclxuICAgIGNvbnN0IGxpc3RJbnB1dCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2xpc3RJbnB1dCcpXHJcbiAgICBcclxuICAgIHdoaWxlIChsaXN0SW5wdXQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGxpc3RJbnB1dC5yZW1vdmVDaGlsZChsaXN0SW5wdXQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaXN0QXJyYXkgPSBsaXN0cy5tYXAoIGxpc3QgPT4gbGlzdC5saXN0TmFtZSlcclxuICAgIGxpc3RBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLiBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ29wdGlvbicsICdvcHRpb24taW5wdXQnLCBgbGlzdCR7bGlzdEFycmF5LmluZGV4T2YoaXRlbSl9YClcclxuICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gaXRlbVxyXG4gICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtXHJcbiAgICAgICAgbGlzdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXHJcbn0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRyb2xMaXN0Q2hhbmdlKGVsZW1lbnQsIGluZGV4KXtcclxuICAgIGNvbnN0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgY29uc3QgbGlzdHMgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdsaXN0cycpXHJcbiAgICBjb25zdCBidXR0b25zID0gbGlzdHMubWFwKCBsaXN0ID0+IGxpc3QubGlzdE5hbWUpO1xyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IGNoYW5nZUxpc3QgPSBpbnRlcmFjdERPTSgpLmdlbmVyYXRlTGlzdE9wdGlvbnMoe3RvcCwgbGVmdH0sIGJ1dHRvbnMsICdsaXN0JylcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBjaGFuZ2VMaXN0LnJlbW92ZSgpXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjaGFuZ2VMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hhbmdlLWxpc3QtYnV0dG9uJykpe1xyXG4gICAgICAgICAgICAgbW9kaWZ5TGlzdChpbmRleCwgYCR7ZS50YXJnZXQudmFsdWV9YClcclxuICAgICAgICAgICAgaGFuZGxlRWZmZWN0cygpXHJcbiAgICAgICAgICAgIGNoYW5nZUxpc3QucmVtb3ZlKCkgXHJcbiAgICAgICAgfVxyXG4gICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7IHVwZGF0ZUxpc3RPcHRpb25zLCBjb250cm9sTGlzdENoYW5nZSB9IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCI7XHJcbmltcG9ydCB7IG1vZGlmeVByaW9yaXR5IH0gIGZyb20gXCIuL3RvZG9DcmVhdG9yXCI7XHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuaW1wb3J0IHsgaGFuZGxlRWZmZWN0cyB9IGZyb20gXCIuL2hhbmRsZUVmZmVjdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xQcmlvcml0eUNoYW5nZShlbGVtZW50LCBpbmRleCl7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICBjb25zdCBidXR0b25zID0gWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXTtcclxuICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICBjb25zdCBjaGFuZ2VQcmlvcml0eSA9IGludGVyYWN0RE9NKCkuZ2VuZXJhdGVMaXN0T3B0aW9ucyh7dG9wLCBsZWZ0fSwgYnV0dG9ucywgJ3ByaW9yaXR5JylcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBjaGFuZ2VQcmlvcml0eS5yZW1vdmUoKVxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIGNoYW5nZVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hhbmdlLXByaW9yaXR5LWJ1dHRvbicpKXtcclxuICAgICAgICAgICAgIG1vZGlmeVByaW9yaXR5KGluZGV4LCBgJHtlLnRhcmdldC52YWx1ZX1gKVxyXG4gICAgICAgICAgICAgaGFuZGxlRWZmZWN0cygpIFxyXG4gICAgICAgIH1cclxuICAgICB9KVxyXG59IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCI7XHJcbmltcG9ydCB7IG1vZGlmeVN0YXR1cyB9ICBmcm9tIFwiLi90b2RvQ3JlYXRvclwiO1xyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVmZmVjdHMgfSBmcm9tIFwiLi9oYW5kbGVFZmZlY3RzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gY29tcGxldGVUYXNrKGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gK2Ake2VsZW1lbnQuaWR9YC5yZXBsYWNlKFwiY2hlY2t0YXNrI1wiLCBcIlwiKVxyXG4gICAgY29uc3QgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICBtb2RpZnlTdGF0dXMoaW5kZXgsICdkb25lJywgdG9kb3MpIFxyXG4gICAgaGFuZGxlRWZmZWN0cygpXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udHJvbFN0YXR1c0NoYW5nZShlbGVtZW50LCBpbmRleCl7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICBjb25zdCBidXR0b25zID0gWyd0by1kbycsICdkb2luZycsICdkb25lJywgJ3dvbnQgZG8nXTtcclxuICAgIGNvbnN0IHsgdG9wLCBsZWZ0IH0gPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblxyXG4gICAgY29uc3QgY2hhbmdlU3RhdHVzID0gaW50ZXJhY3RET00oKS5nZW5lcmF0ZUxpc3RPcHRpb25zKHt0b3AsIGxlZnR9LCBidXR0b25zLCAnc3RhdHVzJylcclxuICAgIFxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgY2hhbmdlU3RhdHVzLnJlbW92ZSgpXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgY2hhbmdlU3RhdHVzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hhbmdlLXN0YXR1cy1idXR0b24nKSl7XHJcbiAgICAgICAgICAgICBtb2RpZnlTdGF0dXMoaW5kZXgsIGAke2UudGFyZ2V0LnZhbHVlfWApXHJcbiAgICAgICAgICAgIGNoYW5nZVN0YXR1cy5yZW1vdmUoKVxyXG4gICAgICAgICAgICBoYW5kbGVFZmZlY3RzKClcclxuICAgICAgICB9XHJcbiAgICAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGNvbXBsZXRlVGFzaywgY29udHJvbFN0YXR1c0NoYW5nZSB9IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCI7XHJcbmltcG9ydCB7IG1vZGlmeVRhc2t9ICBmcm9tIFwiLi90b2RvQ3JlYXRvclwiO1xyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVmZmVjdHMgfSBmcm9tIFwiLi9oYW5kbGVFZmZlY3RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sVGFza0NoYW5nZShlbGVtZW50LCBpbmRleCl7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICBjb25zdCBjb3JyZWN0SW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm9yZGVyID09IGluZGV4KVxyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IGNoYW5nZVRhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaW5wdXQnLCAnY2hhbmdlLXRhc2staW5wdXQnLCAnY2hhbmdlVGFza0lucHV0JylcclxuICAgIGNoYW5nZVRhc2sudHlwZSA9ICd0ZXh0J1xyXG4gICAgY29uc3QgdGFza1ZhbHVlID0gYCR7dG9kb3NbY29ycmVjdEluZGV4XS50YXNrfWBcclxuICAgIGNoYW5nZVRhc2sudmFsdWUgPSB0YXNrVmFsdWVcclxuICAgIFxyXG4gICAgY2hhbmdlVGFzay5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgIGNoYW5nZVRhc2suc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgY2hhbmdlVGFzay5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4gICAgY2hhbmdlVGFzay5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7IFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjaGFuZ2VUYXNrKTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2UtdGFzay1pbnB1dCcpICYmIGRvY3VtZW50LmNvbnRhaW5zKGNoYW5nZVRhc2spKXtcclxuICAgICAgICAgICAgbW9kaWZ5VGFzayhpbmRleCwgYCR7Y2hhbmdlVGFzay52YWx1ZX1gKVxyXG4gICAgICAgICAgICBjaGFuZ2VUYXNrLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIGhhbmRsZUVmZmVjdHMoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNoYW5nZVRhc2suYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG4gICAgICAgIGlmKGUua2V5Q29kZSA9PSAxMyl7XHJcbiAgICAgICAgICAgIG1vZGlmeVRhc2soaW5kZXgsIGAke2NoYW5nZVRhc2sudmFsdWV9YClcclxuICAgICAgICAgICAgY2hhbmdlVGFzay5yZW1vdmUoKVxyXG4gICAgICAgICAgICBoYW5kbGVFZmZlY3RzKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IGRpc3BsYXlMaXN0cyBmcm9tIFwiLi9kaXNwbGF5TGlzdHNcIlxyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcbmltcG9ydCB7IGFkZFRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcbmltcG9ydCB7IHVwZGF0ZUxpc3RPcHRpb25zIH0gZnJvbSBcIi4vY29udHJvbExpc3RDaGFuZ2VcIjtcclxuXHJcblxyXG5jb25zdCBkZWxldGVMaXN0ID0gKGluZGV4KSA9PiB7XHJcbiAgICBsZXQgbGlzdHMgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdsaXN0cycpXHJcbiAgICBsaXN0cy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZShsaXN0cywgJ2xpc3RzJylcclxuICAgIGRpc3BsYXlMaXN0cyhsaXN0cylcclxuICAgIHVwZGF0ZUxpc3RPcHRpb25zKGxpc3RzKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5TGlzdCAoaW5kZXgsIGxpc3RWYWx1ZSwgbGlzdHMpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVMaXN0KGAke2xpc3RWYWx1ZX1gKVxyXG4gICAgXHJcbiAgICBsaXN0cy5zcGxpY2UoaW5kZXgsIDEsIGxpc3QpXHJcblxyXG4gICAgZGlzcGxheUxpc3RzKGxpc3RzKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaXN0IChsaXN0TmFtZSwgY29sb3IsIGRlc2NyaXB0aW9uKXtcclxuICAgIGxldCBsaXN0ID0ge1xyXG4gICAgICAgIGxpc3ROYW1lLFxyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgbGlzdClcclxufVxyXG5cclxuY29uc3QgY3JlYXRlTmV3TGlzdCA9IChsaXN0TmFtZSwgY29sb3IsIGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0cyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ2xpc3RzJylcclxuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVMaXN0KGxpc3ROYW1lLCBjb2xvciwgZGVzY3JpcHRpb24pXHJcbiAgICBsaXN0cy5wdXNoKGxpc3QpXHJcbiAgICBjb25zb2xlLmxvZyhsaXN0cylcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKGxpc3RzLCAnbGlzdHMnKVxyXG59XHJcblxyXG5leHBvcnQgeyBkZWxldGVMaXN0LCBtb2RpZnlMaXN0LCBjcmVhdGVMaXN0LCBjcmVhdGVOZXdMaXN0IH0iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIlxyXG5pbXBvcnQgcmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5wbmdcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUxpc3RzKGFycmF5KXtcclxuICAgIGNvbnN0IGxpc3RzVmlldyA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2xpc3RzVmlldycpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2xpc3RzJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2RlbGV0ZS1saXN0JykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnc2VjdGlvbicsICdsaXN0cycsIGBsaXN0JHtpfWApXHJcbiAgICAgICAgbGV0IGRlbGV0ZUxpc3QgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2RlbGV0ZS1saXN0JywgYGRlbGV0ZUxpc3QjJHtpfWApXHJcbiAgICAgICAgbGV0IGRlbGV0ZUltYWdlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2ltZycsICdkZWxldGUtbGlzdC1pbWcnLCBgZGVsZXRlTGlzdEltYWdlIyR7aX1gKVxyXG4gICAgICAgIGRlbGV0ZUltYWdlLnNyYyA9IHJlbW92ZVxyXG4gICAgICAgIGRlbGV0ZUxpc3QuYXBwZW5kQ2hpbGQoZGVsZXRlSW1hZ2UpXHJcbiAgICAgICAgaW50ZXJhY3RET00oKS5hcHBlbmRMaXN0RWxlbWVudGFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyLCBhcnJheVtpXSwgaSlcclxuICAgICAgICBsaXN0c1ZpZXcuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVMaXN0KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuaW1wb3J0IHggZnJvbSAnLi9jcm9zc2VkLnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhhcnJheSl7XHJcbiAgICBjb25zdCB0b2Rvc1ZpZXcgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCd0b2Rvc1ZpZXcnKVxyXG4gICAgaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCd0b2RvcycpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKVxyXG4gICAgaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCdkZWxldGUtdGFzaycpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICd0b2RvcycsIGB0b2RvJHthcnJheVtpXS5vcmRlcn1gKVxyXG4gICAgICAgIGxldCBjaGVja1Rhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2NoZWNrLXRhc2snLCBgY2hlY2t0YXNrIyR7aX1gKVxyXG4gICAgICAgIGxldCBkZWxldGVUYXNrID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdkZWxldGUtdGFzaycsIGAke2l9YClcclxuICAgICAgICBsZXQgZGVsZXRlSW1hZ2UgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaW1nJywgJ2RlbGV0ZS1pbWFnZScsIGBkZWxldGVJbWFnZSMke2l9YClcclxuICAgICAgICBkZWxldGVJbWFnZS5zcmMgPSB4XHJcbiAgICAgICAgZGVsZXRlVGFzay5hcHBlbmRDaGlsZChkZWxldGVJbWFnZSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tUYXNrKVxyXG4gICAgICAgIGludGVyYWN0RE9NKCkuYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyLCBhcnJheVtpXSwgYXJyYXlbaV0ub3JkZXIpXHJcbiAgICAgICAgdG9kb3NWaWV3LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzaylcclxuICAgIH1cclxufSIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuaW1wb3J0IHsgaGFuZGxlRWZmZWN0cyB9IGZyb20gXCIuL2hhbmRsZUVmZmVjdHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlckJ5RGF0ZSAoZGF0ZVZhbHVlKXtcclxuICAgIGNvbnN0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgY29uc3QgZmlsdGVyZWRUb2RvcyA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uZHVlRGF0ZSA9PSBkYXRlVmFsdWUgKVxyXG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVG9kb3MpXHJcbiAgICBoYW5kbGVFZmZlY3RzKClcclxufSAiLCJpbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVmZmVjdHMgfSBmcm9tIFwiLi9oYW5kbGVFZmZlY3RzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlckJ5TGlzdCAoZWxlbWVudCl7XHJcbiAgICBjb25zdCBsaXN0cyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ2xpc3RzJylcclxuICAgIGNvbnN0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgY29uc3QgaW5kZXggPSArYCR7ZWxlbWVudC5pZH1gLnJlcGxhY2UoXCJsaXN0XCIsIFwiXCIpXHJcbiAgICBjb25zdCBsaXN0VmFsdWUgPSBsaXN0cy5tYXAoIGxpc3QgPT4gbGlzdC5saXN0TmFtZSlbaW5kZXhdID09IHVuZGVmaW5lZCA/IGVsZW1lbnQudmFsdWUgOiBsaXN0cy5tYXAoIGxpc3QgPT4gbGlzdC5saXN0TmFtZSlbaW5kZXhdXHJcbiAgICBjb25zdCBmaWx0ZXJlZFRvZG9zID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5saXN0ID09IGxpc3RWYWx1ZSApXHJcbiAgICBcclxuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRvZG9zKVxyXG4gICAgaGFuZGxlRWZmZWN0cygpXHJcbn0gIiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hhbmRsZVNhdmVMb2dpY1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVFZmZlY3RzIH0gZnJvbSBcIi4vaGFuZGxlRWZmZWN0c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyQnlQcmlvcml0eSAoZWxlbWVudCl7XHJcbiAgICBjb25zdCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvZG9zJylcclxuICAgIGNvbnN0IHByaW9yaXR5VmFsdWUgPSAgZWxlbWVudC52YWx1ZVxyXG4gICAgY29uc3QgZmlsdGVyZWRUb2RvcyA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8ucHJpb3JpdHkgPT0gcHJpb3JpdHlWYWx1ZSApXHJcbiAgICBcclxuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRvZG9zKVxyXG4gICAgaGFuZGxlRWZmZWN0cygpXHJcbn0gIiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hhbmRsZVNhdmVMb2dpY1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVFZmZlY3RzIH0gZnJvbSBcIi4vaGFuZGxlRWZmZWN0c1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlckJ5U3RhdHVzIChlbGVtZW50KXtcclxuICAgIGNvbnN0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgY29uc3Qgc3RhdHVzVmFsdWUgPSAgZWxlbWVudC52YWx1ZVxyXG4gICAgY29uc3QgZmlsdGVyZWRUb2RvcyA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uc3RhdHVzID09IHN0YXR1c1ZhbHVlIClcclxuICAgIFxyXG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVG9kb3MpXHJcbiAgICBoYW5kbGVFZmZlY3RzKClcclxufSAiLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIjtcclxuaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hhbmRsZVNhdmVMb2dpY1wiO1xyXG5pbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0IH0gZnJvbSAnZGF0ZS1mbnMnXHJcblxyXG5mdW5jdGlvbiBoZXgycmdiYSAoaGV4LCBhbHBoYSkge1xyXG4gICAgaWYoaGV4ID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIGhleCA9ICcjMjA1Mjk1J1xyXG4gICAgfVxyXG4gICAgY29uc3QgW3IsIGcsIGJdID0gaGV4Lm1hdGNoKC9cXHdcXHcvZykubWFwKHggPT4gcGFyc2VJbnQoeCwgMTYpKTtcclxuICAgIHJldHVybiBgcmdiYSgke3J9LCR7Z30sJHtifSwke2FscGhhfSlgO1xyXG4gIH07XHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRWZmZWN0cygpe1xyXG4gICAgY29uc3QgdGl0bGVzID0gaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCd0b2Rvcy10aXRsZXMnKVxyXG4gICAgdGl0bGVzLmZvckVhY2godGl0bGUgPT4ge1xyXG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBlID0+IHtcclxuICAgICAgIFxyXG4gICAgICAgIHRpdGxlcy5mb3JFYWNoKHRpdGxlID0+IHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2JvcmRlci1yaWdodC10aXRsZXMnKSkgXHJcbiAgICB9KVxyXG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgICAgICB0aXRsZXMuZm9yRWFjaCh0aXRsZSA9PiB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdib3JkZXItcmlnaHQtdGl0bGVzJykpXHJcbiAgICAgICAgfSlcclxufVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUxpc3RJY29ucyA9IGludGVyYWN0RE9NKCkucmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cygnZGVsZXRlLWxpc3QtaW1nJylcclxuICAgIGRlbGV0ZUxpc3RJY29ucy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGUgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pbWFnZS1pbWctaG92ZXInKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZGVsZXRlLWltYWdlLWltZy1ob3ZlcicpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZXhwYW5kZWRJY29ucyA9IGludGVyYWN0RE9NKCkucmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cygnZXhwYW5kLWljb24nKVxyXG4gICAgZXhwYW5kZWRJY29ucy5mb3JFYWNoKGljb24gPT4ge1xyXG4gICAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGUgPT4ge1xyXG4gICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1pY29uLWVmZmVjdCcpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmQtaWNvbi1lZmZlY3QnKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB0b2Rvc1RpdGxlcyA9IGludGVyYWN0RE9NKCkucmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cygndG9kb3MtdGl0bGVzJylcclxuICAgIHRvZG9zVGl0bGVzLmZvckVhY2godGl0bGUgPT4ge1xyXG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VJbmRleCA9IGUudGFyZ2V0LmlkICsgXCItaWNvblwiXHJcbiAgICAgICAgICAgIGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoaW1hZ2VJbmRleCkuY2xhc3NMaXN0LmFkZCgnaW1hZ2UtdmlzaWJsZScpXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlSW5kZXggPSBlLnRhcmdldC5pZCArIFwiLWljb25cIlxyXG4gICAgICAgICAgICBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KGltYWdlSW5kZXgpLmNsYXNzTGlzdC5yZW1vdmUoJ2ltYWdlLXZpc2libGUnKVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgbGlzdHMgPSBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2xpc3RzJylcclxuICAgIGxpc3RzLmZvckVhY2gobGlzdCA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICtgJHtlLnRhcmdldC5pZH1gLnJlcGxhY2UoXCJsaXN0XCIsIFwiXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlSW5kZXggPSAnZGVsZXRlTGlzdEltYWdlIycgKyBsaXN0SW5kZXhcclxuICAgICAgICAgICAgaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudChpbWFnZUluZGV4KS5jbGFzc0xpc3QuYWRkKCdpbWFnZS12aXNpYmxlJylcclxuICAgICAgICAgICAgY29uc3QgbGlzdHMgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdsaXN0cycpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gbGlzdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5saXN0TmFtZSA9PSBsaXN0LnRleHRDb250ZW50KS5tYXAoaXRlbSA9PiBpdGVtLmNvbG9yKVxyXG4gICAgICAgICAgICBsaXN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAke2hleDJyZ2JhKGNvbG9yWzBdLCAwLjMpfWBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0SW5kZXggPSArYCR7ZS50YXJnZXQuaWR9YC5yZXBsYWNlKFwibGlzdFwiLCBcIlwiKVxyXG4gICAgICAgICAgICBjb25zdCBpbWFnZUluZGV4ID0gJ2RlbGV0ZUxpc3RJbWFnZSMnICsgbGlzdEluZGV4XHJcbiAgICAgICAgICAgIGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoaW1hZ2VJbmRleCkuY2xhc3NMaXN0LnJlbW92ZSgnaW1hZ2UtdmlzaWJsZScpXHJcbiAgICAgICAgICAgIGxpc3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHRyYW5zcGFyZW50YFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHRvZG9zID0gaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCd0b2RvcycpXHJcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4ge1xyXG5cclxuICAgICAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBlPT4ge1xyXG4gICAgICAgICAgIGNvbnN0IGltYWdlSW5kZXggPSBcImRlbGV0ZUltYWdlI1wiICsgdG9kby5pZC5tYXRjaCgvXFxkKy8pWzBdXHJcbiAgICAgICAgICAgaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudChpbWFnZUluZGV4KS5jbGFzc0xpc3QuYWRkKCdpbWFnZS12aXNpYmxlJylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1hZ2VJbmRleCA9IFwiZGVsZXRlSW1hZ2UjXCIgKyB0b2RvLmlkLm1hdGNoKC9cXGQrLylbMF1cclxuICAgICAgICAgICAgaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudChpbWFnZUluZGV4KS5jbGFzc0xpc3QucmVtb3ZlKCdpbWFnZS12aXNpYmxlJylcclxuICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgfSlcclxuXHJcblxyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2xpc3QtaXRlbScpXHJcbiAgICBsaXN0SXRlbS5mb3JFYWNoKGxpc3QgPT4ge1xyXG4gICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlzdEl0ZW0ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgnbGlzdHMnKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBsaXN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmxpc3ROYW1lID09IGxpc3QudGV4dENvbnRlbnQpLm1hcChpdGVtID0+IGl0ZW0uY29sb3IpXHJcbiAgICAgICAgICAgICAgICBsaXN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGAke2hleDJyZ2JhKGNvbG9yWzBdLCAwLjMpfWAgICAgXHJcbiAgICB9KVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgdG9kb0xpc3RzID0gaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCd0b2RvLWxpc3RzJylcclxuICAgIHRvZG9MaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgnbGlzdHMnKVxyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gbGlzdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5saXN0TmFtZSA9PSBsaXN0LnRleHRDb250ZW50KS5tYXAoaXRlbSA9PiBpdGVtLmNvbG9yKVxyXG4gICAgICAgIGxpc3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYCR7aGV4MnJnYmEoY29sb3JbMF0sIDAuMyl9YFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB0b2RvU3RhdHVzID0gaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCd0b2RvLXN0YXR1cycpXHJcbiAgICB0b2RvU3RhdHVzLmZvckVhY2goc3RhdHVzID0+IHtcclxuICAgICAgICBpZihzdGF0dXMudGV4dENvbnRlbnQgPT0gJ2RvbmUnKXtcclxuICAgICAgICAgICAgc3RhdHVzLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd2YXIoLS1kb25lLWJhY2tncm91bmQtY29sb3IpJ1xyXG4gICAgICAgICAgICBzdGF0dXMuc3R5bGUuY29sb3IgPSAndmFyKC0tYmFja2dyb3VuZC1tYWluLWNvbnRlbnQpJ1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICtgJHtzdGF0dXMuaWR9YC5yZXBsYWNlKFwic3RhdHVzXCIsIFwiXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJbmRleCA9ICd0YXNrJyArIGluZGV4XHJcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5SW5kZXggPSAncHJpb3JpdHknICsgaW5kZXhcclxuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZUluZGV4ID0gJ2R1ZURhdGUnICsgaW5kZXhcclxuICAgICAgICAgICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2RvbmUnKVxyXG4gICAgICAgICAgICBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KHRhc2tJbmRleCkuY2xhc3NMaXN0LmFkZCgnZG9uZScpXHJcbiAgICAgICAgICAgIGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQocHJpb3JpdHlJbmRleCkuY2xhc3NMaXN0LmFkZCgnZG9uZScpXHJcbiAgICAgICAgICAgIGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoZHVlRGF0ZUluZGV4KS5jbGFzc0xpc3QuYWRkKCdkb25lJylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCd0b2RvLWR1ZS1kYXRlJylcclxuICAgIHRvZG9EdWVEYXRlLmZvckVhY2goZHVlZGF0ZSA9PiB7XHJcbiAgICAgICAgaWYobmV3IERhdGUoZHVlZGF0ZS50ZXh0Q29udGVudCkgPD0gbmV3IERhdGUoKSl7XHJcbiAgICAgICAgICAgIGR1ZWRhdGUuc3R5bGUuY29sb3IgPSAndmFyKC0tZHVlLWRhdGUtcmVkKSdcclxuICAgICAgICB9IGVsc2UgaWYoZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChuZXcgRGF0ZShkdWVkYXRlLnRleHRDb250ZW50KSkgPT0gJzEgZGF5JyB8fCBcclxuICAgICAgICBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KG5ldyBEYXRlKGR1ZWRhdGUudGV4dENvbnRlbnQpKSA9PSAnMiBkYXlzJyB8fFxyXG4gICAgICAgIGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QobmV3IERhdGUoZHVlZGF0ZS50ZXh0Q29udGVudCkpID09ICczIGRheXMnIHx8IFxyXG4gICAgICAgIGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QobmV3IERhdGUoZHVlZGF0ZS50ZXh0Q29udGVudCkpID09ICc0IGRheXMnIHx8IFxyXG4gICAgICAgIGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QobmV3IERhdGUoZHVlZGF0ZS50ZXh0Q29udGVudCkpID09ICc1IGRheXMnIHx8XHJcbiAgICAgICAgZm9ybWF0RGlzdGFuY2VUb05vd1N0cmljdChuZXcgRGF0ZShkdWVkYXRlLnRleHRDb250ZW50KSkuaW5jbHVkZXMoJ3NlY29uZHMnKSB8fFxyXG4gICAgICAgIGZvcm1hdERpc3RhbmNlVG9Ob3dTdHJpY3QobmV3IERhdGUoZHVlZGF0ZS50ZXh0Q29udGVudCkpLmluY2x1ZGVzKCdtaW51dGVzJykgfHxcclxuICAgICAgICBmb3JtYXREaXN0YW5jZVRvTm93U3RyaWN0KG5ldyBEYXRlKGR1ZWRhdGUudGV4dENvbnRlbnQpKS5pbmNsdWRlcygnaG91cnMnKVxyXG4gICAgICAgICl7XHJcbiAgICAgICAgICAgIGR1ZWRhdGUuc3R5bGUuY29sb3IgPSAndmFyKC0tZHVlLWRhdGUteWVsbG93KSdcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgaW50ZXJhY3RET00oKS5oYW5kbGVNb3VzZU1vdmVtZW50RWZmZWN0KCdvcGVuVGFza0Zvcm0nKVxyXG4gICAgaW50ZXJhY3RET00oKS5oYW5kbGVNb3VzZU1vdmVtZW50RWZmZWN0KCdjYW5jZWxMaXN0QWRkJylcclxuICAgIGludGVyYWN0RE9NKCkuaGFuZGxlTW91c2VNb3ZlbWVudEVmZmVjdCgnYWRkTmV3TGlzdCcpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBoZXgycmdiYSwgaGFuZGxlRWZmZWN0cyB9XHJcblxyXG4iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIlxyXG5pbXBvcnQgYXJyb3dSaWdodCAgZnJvbSAnLi9yaWdodC5wbmcnXHJcbmltcG9ydCBmaWx0ZXJCeUxpc3QgZnJvbSBcIi4vZmlsdGVyQnlMaXN0XCJcclxuaW1wb3J0IGZpbHRlckJ5U3RhdHVzIGZyb20gXCIuL2ZpbHRlckJ5U3RhdHVzXCJcclxuaW1wb3J0IGZpbHRlckJ5UHJpb3JpdHkgZnJvbSBcIi4vZmlsdGVyQnlQcmlvcml0eVwiXHJcbmltcG9ydCBmaWx0ZXJCeURhdGUgZnJvbSBcIi4vZmlsdGVyQnlEYXRlXCJcclxuaW1wb3J0IHNvcnRCeVRpdGxlIGZyb20gXCIuL3NvcnRCeVRpdGxlXCJcclxuaW1wb3J0IHsgV2NEYXRlcGlja2VyIH0gZnJvbSBcIndjLWRhdGVwaWNrZXIvZGlzdC9jb21wb25lbnRzL3djLWRhdGVwaWNrZXJcIlxyXG5pbXBvcnQgXCJ3Yy1kYXRlcGlja2VyL2Rpc3QvdGhlbWVzL2RhcmsuY3NzXCI7XHJcbmltcG9ydCBkb3duSWNvbiBmcm9tIFwiLi9kb3duLnBuZ1wiXHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ3Yy1kYXRlcGlja2VyXCIsIFdjRGF0ZXBpY2tlcik7XHJcblxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVGaWx0ZXIocGFyZW50RWxlbWVudCwgYXJyYXkpIHtcclxuICAgIGFycmF5LmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2ZpbHRlci1zb3J0LWV4cGFuZGVkJywgYGZpbHRlclNvcnRFeHBhbmRlZElkIyR7YXJyYXkuaW5kZXhPZihvcHRpb24pfWApXHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvblxyXG4gICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb247XHJcbiAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnB1dEVsZW1lbnRJY29ucyhwYXJlbnRFbGVtZW50LCBpY29uKSB7XHJcbiAgICBjb25zdCBpbWFnZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnZXhwYW5kLWljb24nLCBgJHtwYXJlbnRFbGVtZW50fS1pY29uYClcclxuICAgIGltYWdlLnNyYyA9IGljb25cclxuICAgIGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQocGFyZW50RWxlbWVudCkuYXBwZW5kQ2hpbGQoaW1hZ2UpXHJcbn1cclxuXHJcbmlucHV0RWxlbWVudEljb25zKCd0b2Rvc1RpdGxlVGFza3MnLCBkb3duSWNvbilcclxuaW5wdXRFbGVtZW50SWNvbnMoJ3RvZG9zVGl0bGVTdGF0dXMnLCBkb3duSWNvbilcclxuaW5wdXRFbGVtZW50SWNvbnMoJ3RvZG9zVGl0bGVMaXN0cycsIGRvd25JY29uKVxyXG5pbnB1dEVsZW1lbnRJY29ucygndG9kb3NUaXRsZVByaW9yaXRpZXMnLCBkb3duSWNvbilcclxuaW5wdXRFbGVtZW50SWNvbnMoJ3RvZG9zVGl0bGVEdWVEYXRlcycsIGRvd25JY29uKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUZpbHRlck9yZGVyKGxpc3RzLCB0b2Rvcykge1xyXG4gICAgY29uc3QgdG9kb3NHZW5lcmFsVGl0bGVzID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgndG9kb3NHZW5lcmFsVGl0bGVzJylcclxuICAgIHRvZG9zR2VuZXJhbFRpdGxlcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG5cclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmQtaWNvbicpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRHZW5lcmFsVGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgICAgICAgIGxldCB7IHRvcCwgbGVmdCB9ID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICBjb25zdCBleHBhbmRlZE1lbnUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2V4cGFuZGVkLW1lbnUnLCAnZXhwYW5kZWRNZW51JylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSBjdXJyZW50R2VuZXJhbFRpdGxlLmlkID09ICd0b2Rvc1RpdGxlVGFza3MnID8gWydTb3J0J10gOiBbJ0ZpbHRlcicsICdTb3J0J11cclxuICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2ZpbHRlci1zb3J0JywgYGZpbHRlclNvcnRJZCMke29wdGlvbnMuaW5kZXhPZihvcHRpb24pfWApXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2ZpbHRlci1zb3J0LXRleHQnLCBgZmlsdGVyU29ydFRleHQjJHtvcHRpb25zLmluZGV4T2Yob3B0aW9uKX1gKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRBcnJvdyA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAncmlnaHQtYXJyb3cnLCBgcmlnaHRBcnJvdyMke29wdGlvbnMuaW5kZXhPZihvcHRpb24pfWApXHJcbiAgICAgICAgICAgICAgICByaWdodEFycm93LnNyYyA9IGFycm93UmlnaHRcclxuICAgICAgICAgICAgICAgIHRleHRFbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gb3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kZWRNZW51LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZXhwYW5kZWRNZW51LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgICAgICAgICBleHBhbmRlZE1lbnUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgICAgICBleHBhbmRlZE1lbnUuc3R5bGUudG9wID0gYCR7dG9wICsgMjZ9cHhgO1xyXG4gICAgICAgICAgICBleHBhbmRlZE1lbnUuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGV4cGFuZGVkTWVudSk7XHJcblxyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbHRlci1zb3J0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZE1lbnUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgZXhwYW5kZWRNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbHRlci1zb3J0JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS52YWx1ZSA9PSAnRmlsdGVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHJpZ2h0IH0gPSBlLnRhcmdldC5wYXJlbnROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkRmlsdGVyTWVudSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnZXhwYW5kZWQtZmlsdGVyLW1lbnUnLCBcImV4cGFuZGVkRmlsdGVyTWVudVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb1RpdGxlID0gY3VycmVudEdlbmVyYWxUaXRsZS5pZC5zbGljZSgxMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0b2RvVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1N0YXR1cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IFsndG8tZG8nLCAnZG9pbmcnLCAnZG9uZScsICd3b250IGRvJ11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUZpbHRlcihleHBhbmRlZEZpbHRlck1lbnUsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0xpc3RzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gbGlzdHMubWFwKGxpc3QgPT4gbGlzdC5saXN0TmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUZpbHRlcihleHBhbmRlZEZpbHRlck1lbnUsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1ByaW9yaXRpZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhdGVGaWx0ZXIoZXhwYW5kZWRGaWx0ZXJNZW51LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdEdWVEYXRlcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlci1kdWVEYXRlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlUGlja2VyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3djLWRhdGVwaWNrZXInLCAnZGF0ZS1waWNrZXInLCAnZGF0ZXBpY2tlcicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUuc3R5bGUudG9wID0gYCR7dG9wICsgMjZ9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kb1RpdGxlID09ICdEdWVEYXRlcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5zdHlsZS5sZWZ0ID0gYCR7cmlnaHQgLSA0MjB9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnN0eWxlLmxlZnQgPSBgJHtyaWdodCArIDF9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZXhwYW5kZWRGaWx0ZXJNZW51KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQtZmlsdGVyLW1lbnUnKSB8fCBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnd2MtZGF0ZXBpY2tlcl9fZGF0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0b2RvVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnU3RhdHVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5U3RhdHVzKGUudGFyZ2V0LCB0b2RvcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdMaXN0cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeUxpc3QoZS50YXJnZXQsIGxpc3RzLCB0b2RvcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdQcmlvcml0aWVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5UHJpb3JpdHkoZS50YXJnZXQsIHRvZG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0R1ZURhdGVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVwaWNrZXIgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdkYXRlcGlja2VyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVwaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0RGF0ZScsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVwaWNrZWQgPSBldmVudC5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeURhdGUoZGF0ZXBpY2tlZCwgdG9kb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUudmFsdWUgPT0gJ1NvcnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcmlnaHQsIHRvcCB9ID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBhbmRlZFNvcnRNZW51ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdleHBhbmRlZC1zb3J0LW1lbnUnLCBcImV4cGFuZGVkU29ydE1lbnVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9UaXRsZSA9IGN1cnJlbnRHZW5lcmFsVGl0bGUuaWQuc2xpY2UoMTApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0b2RvVGl0bGUgPT0gJ0R1ZURhdGVzJyA/IFsnTmV3ZXN0IHRvIG9sZGVzdCcsICdPbGRlc3QgdG8gbmV3ZXN0J10gOiBbJ0FscGhhYmV0aWNhbCcsICdSZXZlcnNlIGFscGhhYmV0aWNhbCddXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnZmlsdGVyLXNvcnQtZXhwYW5kZWQnLCBgZmlsdGVyU29ydEV4cGFuZGVkSWQjJHtvcHRpb25zLmluZGV4T2Yob3B0aW9uKX1gKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkU29ydE1lbnUuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRTb3J0TWVudS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRTb3J0TWVudS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkU29ydE1lbnUuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvZG9UaXRsZSA9PSAnRHVlRGF0ZXMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZFNvcnRNZW51LnN0eWxlLmxlZnQgPSBgJHtyaWdodCAtIDMwMX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZFNvcnRNZW51LnN0eWxlLmxlZnQgPSBgJHtyaWdodCArIDF9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZXhwYW5kZWRTb3J0TWVudSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkU29ydE1lbnUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkU29ydE1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkLXNvcnQtbWVudScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0b2RvVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnU3RhdHVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeVRpdGxlKGUudGFyZ2V0LCB0b2RvcywgJ3N0YXR1cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdMaXN0cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeVRpdGxlKGUudGFyZ2V0LCB0b2RvcywgJ2xpc3QnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnUHJpb3JpdGllcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3J0QnlUaXRsZShlLnRhcmdldCwgdG9kb3MsICdwcmlvcml0eScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdEdWVEYXRlcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeVRpdGxlKGUudGFyZ2V0LCB0b2RvcywgJ2R1ZURhdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnVGFza3MnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5VGl0bGUoZS50YXJnZXQsIHRvZG9zLCAndGFzaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuIiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuaW1wb3J0IHsgYWRkTGlzdCB9IGZyb20gXCIuL2hhbmRsZU5ld0xpc3RMb2dpY1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVOZXdMaXN0Rm9ybSAoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGNvbnN0IG5ld0xpc3RGb3JtID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbmV3TGlzdEZvcm0nKVxyXG4gICAgaW50ZXJhY3RET00oKS50b2dnbGVFbGVtZW50RGlzcGxheShuZXdMaXN0Rm9ybSlcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgaWYoKCFlLnRhcmdldC5jbG9zZXN0KCcubmV3LWxpc3QtZm9ybScpKSB8fCBlLnRhcmdldC5jbG9zZXN0KCcuY2FuY2VsLWxpc3QtYWRkJykpe1xyXG4gICAgICAgICAgICBpbnRlcmFjdERPTSgpLmhpZGUobmV3TGlzdEZvcm0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcclxuICAgICAgICBpZihlLmtleSA9PSAnRXNjYXBlJyl7XHJcbiAgICAgICAgICAgIGludGVyYWN0RE9NKCkuaGlkZShuZXdMaXN0Rm9ybSkgICAgICAgICAgICAgXHJcbiAgICAgICAgfSBlbHNlIGlmKGUua2V5ID09ICdFbnRlcicpe1xyXG4gICAgICAgICAgICBjb25zdCBuZXdMaXN0Rm9ybSA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ25ld0xpc3RGb3JtJylcclxuICAgICAgICAgICAgYWRkTGlzdCgpXHJcbiAgICAgICAgICAgIGludGVyYWN0RE9NLmhpZGUobmV3TGlzdEZvcm0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiXHJcbmltcG9ydCB7IGNyZWF0ZU5ld0xpc3QgfSBmcm9tIFwiLi9jcmVhdGVMaXN0XCJcclxuaW1wb3J0IGRpc3BsYXlMaXN0cyBmcm9tIFwiLi9kaXNwbGF5TGlzdHNcIlxyXG5pbXBvcnQgeyB1cGRhdGVMaXN0T3B0aW9ucyB9IGZyb20gXCIuL2NvbnRyb2xMaXN0Q2hhbmdlXCJcclxuaW1wb3J0IHsgaGFuZGxlRWZmZWN0cyB9IGZyb20gXCIuL2hhbmRsZUVmZmVjdHNcIlxyXG5pbXBvcnQgaGFuZGxlTmV3TGlzdEZvcm0gZnJvbSBcIi4vaGFuZGxlTmV3TGlzdEZvcm1cIlxyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCJcclxuXHJcbmZ1bmN0aW9uIGFkZExpc3QgKCl7XHJcbiAgICBsZXQgbGlzdE5hbWUgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ2xpc3ROYW1lJylcclxuICAgIGxldCBjb2xvciA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnbGlzdENvbG9yJylcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnbGlzdERlc2NyaXB0aW9uJylcclxuICAgIGNyZWF0ZU5ld0xpc3QoYCR7bGlzdE5hbWV9YCwgYCR7Y29sb3J9YCwgYCR7ZGVzY3JpcHRpb259YClcclxuICAgIGNvbnN0IGxpc3RzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgnbGlzdHMnKVxyXG4gICAgZGlzcGxheUxpc3RzKGxpc3RzKVxyXG4gICAgdXBkYXRlTGlzdE9wdGlvbnMobGlzdHMpXHJcbiAgICBpbnRlcmFjdERPTSgpLmZvcm1SZXNldCgnYWRkTGlzdEZvcm0nKVxyXG4gICAgaGFuZGxlRWZmZWN0cygpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU5ld0xpc3RMb2dpYyAoKXtcclxuICAgIGNvbnN0IG5ld0xpc3QgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCduZXdMaXN0JylcclxuXHJcbiAgICBuZXdMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgaGFuZGxlTmV3TGlzdEZvcm0oZSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGNvbnN0IGFkZE5ld0xpc3QgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdhZGROZXdMaXN0JylcclxuICAgIFxyXG4gICAgYWRkTmV3TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbiAgICAgICAgY29uc3QgbmV3TGlzdEZvcm0gPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCduZXdMaXN0Rm9ybScpXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaW50ZXJhY3RET00oKS5oaWRlKG5ld0xpc3RGb3JtKVxyXG4gICAgICAgIGFkZExpc3QoKVxyXG4gICAgfSlcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBoYW5kbGVOZXdMaXN0TG9naWMsIGFkZExpc3R9IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZU5ld1Rhc2tGb3JtICgpe1xyXG4gICAgY29uc3Qgb3BlblRhc2tGb3JtID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnb3BlblRhc2tGb3JtJylcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCduZXdUYXNrJylcclxuICAgIG9wZW5UYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpbnRlcmFjdERPTSgpLnRvZ2dsZUVsZW1lbnREaXNwbGF5KG5ld1Rhc2ssICdncmlkJyk7XHJcbiAgICAgICAgfSwgMjAwKSAgIFxyXG4gICAgfSlcclxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2R1ZURhdGVJbnB1dCcpXHJcbiAgICBjb25zdCBkYXRlUGlja2VyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3djLWRhdGVwaWNrZXInLCAnbmV3LWR1ZS1kYXRlJywgJ2RhdGVwaWNrZXInKVxyXG4gICAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICBjb25zdCB7IHRvcCwgbGVmdCwgd2lkdGggfSA9IGUudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBmb3JtYXQobmV3IERhdGUoKSwgXCJQXCIpXHJcbiAgICAgICAgZGF0ZVBpY2tlci5zZXRBdHRyaWJ1dGUoJ3N0YXJ0LWRhdGUnLCBgJHtjdXJyZW50RGF0ZX1gKVxyXG4gICAgICAgIGRhdGVQaWNrZXIudmFsdWUgPSBuZXcgRGF0ZShgJHtjdXJyZW50RGF0ZS5yZXBsYWNlQWxsKCctJywgJy8nKX1gKVxyXG4gICAgICAgIGRhdGVQaWNrZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICAgICAgZGF0ZVBpY2tlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgZGF0ZVBpY2tlci5zdHlsZS50b3AgPSBgJHt0b3AgKyAyNn1weGA7XHJcbiAgICAgICAgZGF0ZVBpY2tlci5zdHlsZS5sZWZ0ID0gYCR7bGVmdCAtKDIzNi13aWR0aCl9cHhgO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcilcclxuICAgICAgICBkYXRlUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdERhdGUnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlcGlja2VkID0gZXZlbnQuZGV0YWlsXHJcbiAgICAgICAgICAgIGR1ZURhdGVJbnB1dC50ZXh0Q29udGVudCA9IGRhdGVwaWNrZWRcclxuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gZGF0ZXBpY2tlZFxyXG4gICAgICAgICAgICBkYXRlUGlja2VyLnJlbW92ZSgpXHJcbiAgICAgICAgICB9KTtcclxuICAgIH0pXHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICBpZighZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy10YXNrJykgXHJcbiAgICAgICAgJiYgIWUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuLXRhc2stZm9ybScpIFxyXG4gICAgICAgICYmICFlLnRhcmdldC5jbG9zZXN0KCcubmV3LWR1ZS1kYXRlJykpe1xyXG4gICAgICAgICAgICBpbnRlcmFjdERPTSgpLmhpZGUobmV3VGFzaylcclxuICAgICAgICAgICAgZGF0ZVBpY2tlci5yZW1vdmUoKVxyXG4gICAgICAgIH0gXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlPT57XHJcbiAgICAgICAgaWYoIWUudGFyZ2V0LmNsb3Nlc3QoJy5uZXctZHVlLWRhdGUnKSl7XHJcbiAgICAgICAgICAgIGRhdGVQaWNrZXIucmVtb3ZlKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiXHJcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiXHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIlxyXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiXHJcbmltcG9ydCB7IGhhbmRsZUVmZmVjdHMgfSBmcm9tIFwiLi9oYW5kbGVFZmZlY3RzXCJcclxuXHJcbmNvbnN0IGhhbmRsZU5ld1Rhc2tGb3JtVmFsaWRhdGlvbiA9IGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCB0YXNrVmFsdWUgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ3Rhc2tJbnB1dCcpXHJcbiAgICBjb25zdCBzdGF0dXNWYWx1ZSA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnc3RhdHVzSW5wdXQnKVxyXG4gICAgY29uc3QgbGlzdFZhbHVlID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCdsaXN0SW5wdXQnKVxyXG4gICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgncHJpb3JpdHlJbnB1dCcpXHJcbiAgICBjb25zdCBkdWVEYXRlVmFsdWUgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ2R1ZURhdGVJbnB1dCcpXHJcbiAgICBpZih0YXNrVmFsdWUgIT0gJycgJiYgc3RhdHVzVmFsdWUgIT0gJycgJiYgbGlzdFZhbHVlICE9ICcnICYmIHByaW9yaXR5VmFsdWUgIT0gJycgJiYgZHVlRGF0ZVZhbHVlICE9ICcnKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhZGRUYXNrcyA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdGFzayA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgndGFza0lucHV0JylcclxuICAgIGxldCBzdGF0dXMgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ3N0YXR1c0lucHV0JylcclxuICAgIGxldCBsaXN0ID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCdsaXN0SW5wdXQnKVxyXG4gICAgbGV0IHByaW9yaXR5ID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCdwcmlvcml0eUlucHV0JylcclxuICAgIGxldCBkdWVEYXRlID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCdkdWVEYXRlSW5wdXQnKVxyXG4gICAgY3JlYXRlTmV3VGFzayhgJHt0YXNrfWAsYCR7c3RhdHVzfWAsYCR7bGlzdH1gLGAke3ByaW9yaXR5fWAsYCR7ZHVlRGF0ZX1gKVxyXG4gICAgY29uc3QgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbiAgICBpbnRlcmFjdERPTSgpLmZvcm1SZXNldCgnbmV3VGFzaycpXHJcbiAgICBoYW5kbGVFZmZlY3RzKClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVOZXdUYXNrTG9naWMoKXtcclxuICAgIGNvbnN0IGFkZFRhc2sgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdhZGRUYXNrJylcclxuICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCduZXdUYXNrJylcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpbnRlcmFjdERPTSgpLmhpZGUobmV3VGFzaylcclxuICAgICAgICBpZihoYW5kbGVOZXdUYXNrRm9ybVZhbGlkYXRpb24oKSl7XHJcbiAgICAgICAgICAgIGFkZFRhc2tzKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCJmdW5jdGlvbiBhZGRUb0xvY2FsU3RvcmFnZShhcnJheSwga2V5V29yZCkge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleVdvcmQsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XHJcbiAgfVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5V29yZCkge1xyXG4gICAgY29uc3QgcmVmZXJlbmNlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleVdvcmQpO1xyXG4gICAgaWYgKHJlZmVyZW5jZSkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShyZWZlcmVuY2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICB9XHJcblxyXG5leHBvcnQgeyBhZGRUb0xvY2FsU3RvcmFnZSwgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCI7XHJcbmltcG9ydCB7IGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiO1xyXG5pbXBvcnQgeyBjb250cm9sU3RhdHVzQ2hhbmdlIH0gZnJvbSBcIi4vY29udHJvbFN0YXR1c0NoYW5nZVwiO1xyXG5pbXBvcnQgY29udHJvbFByaW9yaXR5Q2hhbmdlIGZyb20gXCIuL2NvbnRyb2xQcmlvcml0eUNoYW5nZVwiO1xyXG5pbXBvcnQgY29udHJvbER1ZURhdGVDaGFuZ2UgZnJvbSBcIi4vY29udHJvbER1ZURhdGVDaGFuZ2VcIjtcclxuaW1wb3J0IGNvbnRyb2xUYXNrQ2hhbmdlIGZyb20gXCIuL2NvbnRyb2xUYXNrQ2hhbmdlXCI7XHJcbmltcG9ydCB7IGNvbXBsZXRlVGFzayB9IGZyb20gXCIuL2NvbnRyb2xTdGF0dXNDaGFuZ2VcIjtcclxuaW1wb3J0IHsgY29udHJvbExpc3RDaGFuZ2UgfSBmcm9tIFwiLi9jb250cm9sTGlzdENoYW5nZVwiO1xyXG5pbXBvcnQgZmlsdGVyQnlMaXN0IGZyb20gXCIuL2ZpbHRlckJ5TGlzdFwiO1xyXG5pbXBvcnQgeyBkZWxldGVMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTGlzdFwiO1xyXG5pbXBvcnQgeyBoYW5kbGVFZmZlY3RzIH0gZnJvbSBcIi4vaGFuZGxlRWZmZWN0c1wiO1xyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVRhc2tzQW5kTGlzdHNFZGl0cygpe1xyXG4gICAgY29uc3QgdG9kb3NWaWV3ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgndG9kb3NWaWV3JylcclxuICAgIHRvZG9zVmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtdGFzaycpKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZVRhc2soZS50YXJnZXQucGFyZW50Tm9kZS5pZClcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9kby1zdGF0dXMnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICtgJHtlLnRhcmdldC5pZH1gLnJlcGxhY2UoXCJzdGF0dXNcIiwgXCJcIilcclxuICAgICAgICAgICAgY29udHJvbFN0YXR1c0NoYW5nZShlLnRhcmdldCwgaW5kZXgpXHJcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tcHJpb3JpdHknKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcInByaW9yaXR5XCIsIFwiXCIpXHJcbiAgICAgICAgICAgIGNvbnRyb2xQcmlvcml0eUNoYW5nZShlLnRhcmdldCwgaW5kZXgpXHJcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoZWNrLXRhc2snKSl7XHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NsaWNrZWQnKVxyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjbGlja2VkJykpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlVGFzayhlLnRhcmdldClcclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgIH0sIDIwMDApXHJcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tbGlzdHMnKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcImxpc3RcIiwgXCJcIilcclxuICAgICAgICAgICAgY29udHJvbExpc3RDaGFuZ2UoZS50YXJnZXQsIGluZGV4KVxyXG4gICAgICAgIH0gZWxzZSBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tdGFza3MnKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcInRhc2tcIiwgXCJcIilcclxuICAgICAgICAgICAgY29udHJvbFRhc2tDaGFuZ2UoZS50YXJnZXQsIGluZGV4KVxyXG4gICAgICAgIH0gZWxzZSBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tZHVlLWRhdGUnKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcImR1ZURhdGVcIiwgXCJcIilcclxuICAgICAgICAgICAgY29udHJvbER1ZURhdGVDaGFuZ2UoZS50YXJnZXQsIGluZGV4KVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgbGlzdHNWaWV3ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbGlzdHNWaWV3JylcclxuICAgIFxyXG4gICAgbGlzdHNWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbGlzdC1pdGVtJykpe1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvZG9zJylcclxuICAgICAgICAgICAgY29uc3QgbGlzdHMgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdsaXN0cycpXHJcbiAgICAgICAgICAgIGZpbHRlckJ5TGlzdChlLnRhcmdldCwgbGlzdHMsIHRvZG9zKVxyXG4gICAgICAgIH0gZWxzZSBpZihlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWxpc3QnKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LnBhcmVudE5vZGUuaWR9YC5yZXBsYWNlKFwiZGVsZXRlTGlzdCNcIiwgXCJcIilcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgICAgIGRlbGV0ZUxpc3QoaW5kZXgpXHJcbiAgICAgICAgICAgIGhhbmRsZUVmZmVjdHMoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuIiwiaW1wb3J0IGZvcm1hdCAgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiXHJcbmltcG9ydCB0YXNrcyBmcm9tICcuL3Rhc2tzLnBuZydcclxuXHJcbmNvbnN0IGludGVyYWN0RE9NID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50JylcclxuXHJcblxyXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkID0gZnVuY3Rpb24odHlwZSwgY2xhc3NOYW1lLCBpZE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKVxyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBgJHtpZE5hbWV9YFxyXG4gICAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaG9va0RPTWVsZW1lbnQgPSBmdW5jdGlvbiAoaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWROYW1lfWApXHJcbiAgICAgICAgcmV0dXJuIGVsZW1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzID0gZnVuY3Rpb24oY2xhc3NOYW1lKXtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uKGlkTmFtZSl7XHJcbiAgICAgICAgcmV0dXJuIGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoaWROYW1lKS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUVsZW1lbnREaXNwbGF5ID0gZnVuY3Rpb24oZWxlbWVudCwgZGlzcGxheVZhbHVlKXtcclxuICAgICAgICBpZihhcmd1bWVudHMubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSBkaXNwbGF5VmFsdWUgPyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgOiBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5VmFsdWVcclxuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSl7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcgPyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgOiBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICBjb25zdCBoaWRlID0gZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvdyA9IGZ1bmN0aW9uKGVsZW1lbnQpe1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50ID0gZnVuY3Rpb24gKGNvbnRhaW5lciwgb2JqLCBpbmRleCkge1xyXG4gICAgICAgIGxldCB0YXNrID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby10YXNrcycsIGB0YXNrJHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBzdGF0dXNDb250YWluZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnc3BhbicsICdzdGF0dXMtY29udGFpbmVyJywgYHN0YXR1c0NvbnRhaW5lciR7aW5kZXh9YClcclxuICAgICAgICBsZXQgc3RhdHVzID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1zdGF0dXMnLCBgc3RhdHVzJHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBsaXN0Q29udGFpbmVyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3NwYW4nLCAnbGlzdC1jb250YWluZXInLCBgbGlzdENvbnRhaW5lciR7aW5kZXh9YClcclxuICAgICAgICBsZXQgbGlzdCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tbGlzdHMnLCBgbGlzdCR7aW5kZXh9YClcclxuICAgICAgICBsZXQgcHJpb3JpdHlDb250YWluZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnc3BhbicsICdwcmlvcml0eS1jb250YWluZXInLCBgcHJpb3JpdHlDb250YWluZXIke2luZGV4fWApXHJcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1wcmlvcml0eScsIGBwcmlvcml0eSR7aW5kZXh9YClcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tZHVlLWRhdGUnLCBgZHVlRGF0ZSR7aW5kZXh9YClcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFzaylcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdHVzQ29udGFpbmVyKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcilcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcclxuICAgICAgICBzdGF0dXNDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhdHVzKVxyXG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdClcclxuICAgICAgICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eSlcclxuICAgICAgICB0YXNrLnRleHRDb250ZW50ID0gYCR7b2JqLnRhc2t9YFxyXG4gICAgICAgIHN0YXR1cy50ZXh0Q29udGVudCA9IGAke29iai5zdGF0dXN9YFxyXG4gICAgICAgIGxpc3QudGV4dENvbnRlbnQgPSBgJHtvYmoubGlzdH1gXHJcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHtvYmoucHJpb3JpdHl9YFxyXG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtmb3JtYXQobmV3IERhdGUob2JqLmR1ZURhdGUucmVwbGFjZUFsbCgnLScsICcvJykpLCBcIk1NTSBkZCcsJyB5eVwiKX1gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kTGlzdEVsZW1lbnRhbmREZWZpbmVDb250ZW50ID0gZnVuY3Rpb24oY29udGFpbmVyLCBvYmosIGluZGV4KXtcclxuICAgICAgICBsZXQgbGlzdCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ2xpc3QtaXRlbScsIGBsaXN0JHtpbmRleH1gKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0KVxyXG4gICAgICAgIGxpc3QudGV4dENvbnRlbnQgPSBgJHtvYmoubGlzdE5hbWV9YFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBnZW5lcmF0ZUxpc3RPcHRpb25zID0gZnVuY3Rpb24gKHsgdG9wLCBsZWZ0IH0sIGFycmF5LCBwcm9wZXJ0eSkge1xyXG5cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsIGBjaGFuZ2UtJHtwcm9wZXJ0eX1gLCBgY2hhbmdlJHtwcm9wZXJ0eX1JZGApXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IGFycmF5O1xyXG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgYGNoYW5nZS0ke3Byb3BlcnR5fS1idXR0b25gLCBgJHtwcm9wZXJ0eX1jaGFuZ2Uke2J1dHRvbnMuaW5kZXhPZihidXR0b24pfSNpZGApXHJcbiAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnQudmFsdWUgPSBidXR0b247XHJcbiAgICAgICAgICAgIGJ1dHRvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBidXR0b247XHJcbiAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uRWxlbWVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtUmVzZXQgPSBmdW5jdGlvbihmb3JtSWQpe1xyXG4gICAgY29uc3QgZm9ybSA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoYCR7Zm9ybUlkfWApXHJcbiAgICBmb3JtLnJlc2V0KCkgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZU1vdXNlTW92ZW1lbnRFZmZlY3QgPSBmdW5jdGlvbihlbGVtZW50SWQpe1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KGVsZW1lbnRJZClcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZT0+IHtcclxuICAgICAgICBjb25zdCB7IHgsIHkgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0teFwiLCBlLmNsaWVudFggLSB4KTtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFwiLS15XCIsIGUuY2xpZW50WSAtIHkpO1xyXG4gICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBcclxuICAgICAgICBtYWluQ29udGVudCwgXHJcbiAgICAgICAgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkLCBcclxuICAgICAgICBob29rRE9NZWxlbWVudCwgXHJcbiAgICAgICAgcmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cywgXHJcbiAgICAgICAgZ2V0SW5wdXRWYWx1ZSwgXHJcbiAgICAgICAgYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQsXHJcbiAgICAgICAgYXBwZW5kTGlzdEVsZW1lbnRhbmREZWZpbmVDb250ZW50LCBcclxuICAgICAgICB0b2dnbGVFbGVtZW50RGlzcGxheSxcclxuICAgICAgICBoaWRlLFxyXG4gICAgICAgIHNob3csXHJcbiAgICAgICAgZ2VuZXJhdGVMaXN0T3B0aW9ucyxcclxuICAgICAgICBmb3JtUmVzZXQsXHJcbiAgICAgICAgaGFuZGxlTW91c2VNb3ZlbWVudEVmZmVjdCBcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlSW1hZ2VCcmFuZCA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgaW1hZ2VCcmFuZCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnaW1hZ2UtYnJhbmQnLCAnaW1hZ2VCcmFuZCcpXHJcbiAgICBpbWFnZUJyYW5kLnNyYyA9IHRhc2tzXHJcbiAgICBjb25zdCBzaWRlYmFyQnJhbmQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdzaWRlYmFyQnJhbmQnKVxyXG4gICAgc2lkZWJhckJyYW5kLmluc2VydEFkamFjZW50RWxlbWVudChcImFmdGVyYmVnaW5cIiwgaW1hZ2VCcmFuZClcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpbmtbcmVsKj0naWNvbiddXCIpIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcclxuICAgIGxpbmsudHlwZSA9ICdpbWFnZS9wbmcnO1xyXG4gICAgbGluay5yZWwgPSAnc2hvcnRjdXQgaWNvbic7XHJcbiAgICBsaW5rLmhyZWYgPSB0YXNrcztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQobGluayk7XHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludGVyYWN0RE9NIiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNvcnRCeVRpdGxlKGVsZW1lbnQsIHRvZG9zLCB0aXRsZSl7XHJcbiAgICBjb25zdCBzb3J0VHlwZSA9ICBlbGVtZW50LnZhbHVlXHJcbiAgICBsZXQgc29ydGVkQXJyYXlcclxuICAgIHN3aXRjaCAoc29ydFR5cGUpIHtcclxuICAgICAgICBjYXNlICdBbHBoYWJldGljYWwnOlxyXG4gICAgICAgICAgICBzb3J0ZWRBcnJheSA9IHRvZG9zLnNvcnQoKGEsIGIpID0+IGFbdGl0bGVdLnRvTG93ZXJDYXNlKCkgPiBiW3RpdGxlXS50b0xvd2VyQ2FzZSgpID8gMSA6IC0xKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdSZXZlcnNlIGFscGhhYmV0aWNhbCc6XHJcbiAgICAgICAgICAgIHNvcnRlZEFycmF5ID0gdG9kb3Muc29ydCgoYSwgYikgPT4gYVt0aXRsZV0udG9Mb3dlckNhc2UoKSA8IGJbdGl0bGVdLnRvTG93ZXJDYXNlKCkgPyAxIDogLTEpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ05ld2VzdCB0byBvbGRlc3QnOlxyXG4gICAgICAgICAgICBzb3J0ZWRBcnJheSA9IHRvZG9zLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGFbdGl0bGVdKSA+IG5ldyBEYXRlKGJbdGl0bGVdKSA/IDEgOiAtMSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnT2xkZXN0IHRvIG5ld2VzdCc6XHJcbiAgICAgICAgICAgIHNvcnRlZEFycmF5ID0gdG9kb3Muc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYVt0aXRsZV0pIDwgbmV3IERhdGUoYlt0aXRsZV0pID8gMSA6IC0xKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICBkaXNwbGF5VGFza3Moc29ydGVkQXJyYXkpXHJcbn1cclxuXHJcbiIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCJcclxuaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hhbmRsZVNhdmVMb2dpY1wiO1xyXG5pbXBvcnQgeyBhZGRUb0xvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hhbmRsZVNhdmVMb2dpY1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVFZmZlY3RzIH0gZnJvbSBcIi4vaGFuZGxlRWZmZWN0c1wiO1xyXG5cclxuXHJcbmNvbnN0IGRlbGV0ZVRhc2sgPSAoaW5kZXgpID0+IHtcclxuICAgIGxldCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvZG9zJylcclxuICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSlcclxuICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB0b2RvLm9yZGVyID0gdG9kb3MuaW5kZXhPZih0b2RvKSlcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKHRvZG9zLCAndG9kb3MnKVxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG4gICAgaGFuZGxlRWZmZWN0cygpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkZWZpbmVUYXNrSWQgKHRvZG9zKSB7XHJcbiAgICB0b2Rvcy5mb3JFYWNoKCB0b2RvID0+IHsgXHJcbiAgICAgICAgdG9kby5vcmRlciA9IHRvZG9zLmluZGV4T2YodG9kbylcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlUYXNrIChpbmRleCwgdGFza1ZhbHVlKSB7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICBjb25zdCBjb3JyZWN0SW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm9yZGVyID09IGluZGV4KVxyXG4gICAgdG9kb3NbY29ycmVjdEluZGV4XS50YXNrID0gYCR7dGFza1ZhbHVlfWBcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKHRvZG9zLCAndG9kb3MnKVxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5U3RhdHVzIChpbmRleCwgc3RhdHVzVmFsdWUpIHtcclxuICAgIGxldCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvZG9zJylcclxuICAgIGNvbnN0IGNvcnJlY3RJbmRleCA9IHRvZG9zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ub3JkZXIgPT0gaW5kZXgpXHJcbiAgICB0b2Rvc1tjb3JyZWN0SW5kZXhdLnN0YXR1cyA9IGAke3N0YXR1c1ZhbHVlfWBcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKHRvZG9zLCAndG9kb3MnKVxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlQcmlvcml0eSAoaW5kZXgsIHByaW9yaXR5VmFsdWUpIHtcclxuICAgIGxldCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvZG9zJylcclxuICAgIGNvbnN0IGNvcnJlY3RJbmRleCA9IHRvZG9zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ub3JkZXIgPT0gaW5kZXgpXHJcbiAgICB0b2Rvc1tjb3JyZWN0SW5kZXhdLnByaW9yaXR5ID0gYCR7cHJpb3JpdHlWYWx1ZX1gXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZSh0b2RvcywgJ3RvZG9zJylcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5TGlzdCAoaW5kZXgsIGxpc3RWYWx1ZSkge1xyXG4gICAgbGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgY29uc3QgY29ycmVjdEluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5vcmRlciA9PSBpbmRleClcclxuICAgIHRvZG9zW2NvcnJlY3RJbmRleF0ubGlzdCA9IGAke2xpc3RWYWx1ZX1gXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZSh0b2RvcywgJ3RvZG9zJylcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeUR1ZURhdGUgKGluZGV4LCBkdWVEYXRlVmFsdWUpe1xyXG4gICAgbGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgY29uc3QgY29ycmVjdEluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5vcmRlciA9PSBpbmRleClcclxuICAgIHRvZG9zW2NvcnJlY3RJbmRleF0uZHVlRGF0ZSA9IGAke2R1ZURhdGVWYWx1ZX1gXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZSh0b2RvcywgJ3RvZG9zJylcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuZnVuY3Rpb24gdG9kb0NyZWF0b3IodGFzaywgc3RhdHVzLCBsaXN0LCBwcmlvcml0eSwgZHVlRGF0ZSl7XHJcbiAgICBsZXQgdG9kbyA9IHtcclxuICAgICAgICB0YXNrLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBsaXN0LFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgb3JkZXI6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0b2RvKVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVOZXdUYXNrID0gKHRhc2ssIHN0YXR1cywgbGlzdCwgcHJpb3JpdHksIGR1ZURhdGUpID0+IHtcclxuICAgIGNvbnN0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgY29uc29sZS5sb2codG9kb3MpXHJcbiAgICBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IodGFzaywgc3RhdHVzLCBsaXN0LCBwcmlvcml0eSwgZHVlRGF0ZSlcclxuICAgIHRvZG9zLnB1c2godG9kbylcclxuICAgIHRvZG8ub3JkZXIgPSB0b2Rvcy5sZW5ndGggLSAxXHJcbiAgICBjb25zb2xlLmxvZyh0b2RvcylcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKHRvZG9zLCAndG9kb3MnKVxyXG4gICAgcmV0dXJuIHRvZG9cclxufSBcclxuXHJcbmV4cG9ydCB7IGRlZmluZVRhc2tJZCwgZGVsZXRlVGFzaywgbW9kaWZ5VGFzaywgbW9kaWZ5U3RhdHVzLCBtb2RpZnlQcmlvcml0eSwgbW9kaWZ5TGlzdCwgbW9kaWZ5RHVlRGF0ZSwgdG9kb0NyZWF0b3IsIGNyZWF0ZU5ld1Rhc2sgfSIsImNvbnN0IEJVSUxEID0ge1xuICAgIGFsbFJlbmRlckZuOiBmYWxzZSxcbiAgICBjbXBEaWRMb2FkOiB0cnVlLFxuICAgIGNtcERpZFVubG9hZDogZmFsc2UsXG4gICAgY21wRGlkVXBkYXRlOiB0cnVlLFxuICAgIGNtcERpZFJlbmRlcjogdHJ1ZSxcbiAgICBjbXBXaWxsTG9hZDogdHJ1ZSxcbiAgICBjbXBXaWxsVXBkYXRlOiB0cnVlLFxuICAgIGNtcFdpbGxSZW5kZXI6IHRydWUsXG4gICAgY29ubmVjdGVkQ2FsbGJhY2s6IHRydWUsXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2s6IHRydWUsXG4gICAgZWxlbWVudDogdHJ1ZSxcbiAgICBldmVudDogdHJ1ZSxcbiAgICBoYXNSZW5kZXJGbjogdHJ1ZSxcbiAgICBsaWZlY3ljbGU6IHRydWUsXG4gICAgaG9zdExpc3RlbmVyOiB0cnVlLFxuICAgIGhvc3RMaXN0ZW5lclRhcmdldFdpbmRvdzogdHJ1ZSxcbiAgICBob3N0TGlzdGVuZXJUYXJnZXREb2N1bWVudDogdHJ1ZSxcbiAgICBob3N0TGlzdGVuZXJUYXJnZXRCb2R5OiB0cnVlLFxuICAgIGhvc3RMaXN0ZW5lclRhcmdldFBhcmVudDogZmFsc2UsXG4gICAgaG9zdExpc3RlbmVyVGFyZ2V0OiB0cnVlLFxuICAgIG1lbWJlcjogdHJ1ZSxcbiAgICBtZXRob2Q6IHRydWUsXG4gICAgbW9kZTogdHJ1ZSxcbiAgICBvYnNlcnZlQXR0cmlidXRlOiB0cnVlLFxuICAgIHByb3A6IHRydWUsXG4gICAgcHJvcE11dGFibGU6IHRydWUsXG4gICAgcmVmbGVjdDogdHJ1ZSxcbiAgICBzY29wZWQ6IHRydWUsXG4gICAgc2hhZG93RG9tOiB0cnVlLFxuICAgIHNsb3Q6IHRydWUsXG4gICAgY3NzQW5ub3RhdGlvbnM6IHRydWUsXG4gICAgc3RhdGU6IHRydWUsXG4gICAgc3R5bGU6IHRydWUsXG4gICAgc3ZnOiB0cnVlLFxuICAgIHVwZGF0YWJsZTogdHJ1ZSxcbiAgICB2ZG9tQXR0cmlidXRlOiB0cnVlLFxuICAgIHZkb21YbGluazogdHJ1ZSxcbiAgICB2ZG9tQ2xhc3M6IHRydWUsXG4gICAgdmRvbUZ1bmN0aW9uYWw6IHRydWUsXG4gICAgdmRvbUtleTogdHJ1ZSxcbiAgICB2ZG9tTGlzdGVuZXI6IHRydWUsXG4gICAgdmRvbVJlZjogdHJ1ZSxcbiAgICB2ZG9tUHJvcE9yQXR0cjogdHJ1ZSxcbiAgICB2ZG9tUmVuZGVyOiB0cnVlLFxuICAgIHZkb21TdHlsZTogdHJ1ZSxcbiAgICB2ZG9tVGV4dDogdHJ1ZSxcbiAgICB3YXRjaENhbGxiYWNrOiB0cnVlLFxuICAgIHRhc2tRdWV1ZTogdHJ1ZSxcbiAgICBob3RNb2R1bGVSZXBsYWNlbWVudDogZmFsc2UsXG4gICAgaXNEZWJ1ZzogZmFsc2UsXG4gICAgaXNEZXY6IGZhbHNlLFxuICAgIGlzVGVzdGluZzogZmFsc2UsXG4gICAgaHlkcmF0ZVNlcnZlclNpZGU6IGZhbHNlLFxuICAgIGh5ZHJhdGVDbGllbnRTaWRlOiBmYWxzZSxcbiAgICBsaWZlY3ljbGVET01FdmVudHM6IGZhbHNlLFxuICAgIGxhenlMb2FkOiBmYWxzZSxcbiAgICBwcm9maWxlOiBmYWxzZSxcbiAgICBzbG90UmVsb2NhdGlvbjogdHJ1ZSxcbiAgICBhcHBlbmRDaGlsZFNsb3RGaXg6IGZhbHNlLFxuICAgIGNsb25lTm9kZUZpeDogZmFsc2UsXG4gICAgaHlkcmF0ZWRBdHRyaWJ1dGU6IGZhbHNlLFxuICAgIGh5ZHJhdGVkQ2xhc3M6IHRydWUsXG4gICAgc2FmYXJpMTA6IGZhbHNlLFxuICAgIHNjcmlwdERhdGFPcHRzOiBmYWxzZSxcbiAgICBzY29wZWRTbG90VGV4dENvbnRlbnRGaXg6IGZhbHNlLFxuICAgIHNoYWRvd0RvbVNoaW06IGZhbHNlLFxuICAgIHNsb3RDaGlsZE5vZGVzRml4OiBmYWxzZSxcbiAgICBpbnZpc2libGVQcmVoeWRyYXRpb246IHRydWUsXG4gICAgcHJvcEJvb2xlYW46IHRydWUsXG4gICAgcHJvcE51bWJlcjogdHJ1ZSxcbiAgICBwcm9wU3RyaW5nOiB0cnVlLFxuICAgIGNzc1ZhclNoaW06IGZhbHNlLFxuICAgIGNvbnN0cnVjdGFibGVDU1M6IHRydWUsXG4gICAgY21wU2hvdWxkVXBkYXRlOiB0cnVlLFxuICAgIGRldlRvb2xzOiBmYWxzZSxcbiAgICBkeW5hbWljSW1wb3J0U2hpbTogZmFsc2UsXG4gICAgc2hhZG93RGVsZWdhdGVzRm9jdXM6IHRydWUsXG4gICAgaW5pdGlhbGl6ZU5leHRUaWNrOiBmYWxzZSxcbiAgICBhc3luY0xvYWRpbmc6IGZhbHNlLFxuICAgIGFzeW5jUXVldWU6IGZhbHNlLFxuICAgIHRyYW5zZm9ybVRhZ05hbWU6IGZhbHNlLFxuICAgIGF0dGFjaFN0eWxlczogdHJ1ZSxcbn07XG5jb25zdCBFbnYgPSB7fTtcbmNvbnN0IE5BTUVTUEFDRSA9IC8qIGRlZmF1bHQgKi8gJ2FwcCc7XG5cbmV4cG9ydCB7IEJVSUxELCBFbnYsIE5BTUVTUEFDRSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIubWFpbi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhc3luYyBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwidG9kby1saXN0OlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fSBlbHNlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdFx0XHR9XG5cdFx0fVxufTtcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblxufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9fbGlzdFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvX2xpc3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcclxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIlxyXG5pbXBvcnQgeyB1cGRhdGVMaXN0T3B0aW9ucyB9IGZyb20gXCIuL2NvbnRyb2xMaXN0Q2hhbmdlXCJcclxuaW1wb3J0IHsgY3JlYXRlTmV3TGlzdCB9IGZyb20gXCIuL2NyZWF0ZUxpc3RcIlxyXG5pbXBvcnQgZGlzcGxheUxpc3RzIGZyb20gXCIuL2Rpc3BsYXlMaXN0c1wiXHJcbmltcG9ydCBoYW5kbGVOZXdUYXNrRm9ybSBmcm9tIFwiLi9oYW5kbGVOZXdUYXNrRm9ybVwiXHJcbmltcG9ydCB7IGNyZWF0ZU5ld1Rhc2sgfSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiXHJcbmltcG9ydCBoYW5kbGVGaWx0ZXJPcmRlciBmcm9tIFwiLi9oYW5kbGVGaWx0ZXJPcmRlclwiXHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIlxyXG5pbXBvcnQgeyBoYW5kbGVFZmZlY3RzIH0gZnJvbSBcIi4vaGFuZGxlRWZmZWN0c1wiXHJcbmltcG9ydCB7IGhhbmRsZU5ld0xpc3RMb2dpYyB9IGZyb20gXCIuL2hhbmRsZU5ld0xpc3RMb2dpY1wiXHJcbmltcG9ydCBoYW5kbGVOZXdUYXNrTG9naWMgZnJvbSBcIi4vaGFuZGxlTmV3VGFza0xvZ2ljXCJcclxuaW1wb3J0IGhhbmRsZVRhc2tzQW5kTGlzdHNFZGl0cyBmcm9tIFwiLi9oYW5kbGVUYXNrc0FuZExpc3RzRWRpdHNcIlxyXG5cclxubGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKSB8fCBbXVxyXG5sZXQgbGlzdHMgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdsaXN0cycpIHx8IFtdXHJcblxyXG5cclxuZGlzcGxheVRhc2tzKHRvZG9zKVxyXG5cclxuaWYobGlzdHMubGVuZ3RoID09IDApe1xyXG4gICAgY3JlYXRlTmV3TGlzdCgnZ2VuZXJhbCcsICcjMjA1Mjk1JylcclxufVxyXG5cclxuaWYodG9kb3MubGVuZ3RoID09IDApe1xyXG4gICAgY3JlYXRlTmV3VGFzaygnd2FsayB3aXRoIG15IGRvZycsICd0by1kbycsICdnZW5lcmFsJywgJ2hpZ2gnLCAnMjAyMy0wNC0wMycpXHJcbiAgICBjcmVhdGVOZXdUYXNrKCdzdHVkeSBtYXRoJywgJ2RvaW5nJywgJ2dlbmVyYWwnLCAnbWVkaXVtJywgJzIwMjMtMTItMTInKVxyXG4gICAgY3JlYXRlTmV3VGFzaygndHJhdmVsIHRvIE1hcnMnLCAndG8tZG8nLCAnZ2VuZXJhbCcsICdoaWdoJywgJzIwNDMtMDUtMzEnKVxyXG59XHJcblxyXG5oYW5kbGVOZXdUYXNrTG9naWMoKVxyXG5cclxuaGFuZGxlVGFza3NBbmRMaXN0c0VkaXRzKClcclxuXHJcbmhhbmRsZU5ld1Rhc2tGb3JtKClcclxuXHJcbmhhbmRsZU5ld0xpc3RMb2dpYygpXHJcblxyXG5kaXNwbGF5TGlzdHMobGlzdHMpXHJcbnVwZGF0ZUxpc3RPcHRpb25zKGxpc3RzKVxyXG5cclxuaGFuZGxlRmlsdGVyT3JkZXIobGlzdHMsIHRvZG9zKVxyXG5cclxuaGFuZGxlRWZmZWN0cygpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9