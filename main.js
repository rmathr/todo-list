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
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");






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
            ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_6__.handleEffects)()
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
    
    // changePriority.addEventListener('mouseleave', e => {
    //     setInterval( function() {changePriority.remove()}, 500)
    // })
    changeList.addEventListener('mousedown', e =>{
        if (e.target.classList.contains('change-list-button')){
             console.log(e.target.value);
             (0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyList)(index, `${e.target.value}`)
            //  interactDOM().hide(changeStatus);
            ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_4__.handleEffects)()
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
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");






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
             ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_4__.handleEffects)() 
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
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");






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
            ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_4__.handleEffects)()
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
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");







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
            ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_4__.handleEffects)()
            // displayTasks(todos)
        }
    })
    
    changeTask.addEventListener('keydown', e => {
        if(e.keyCode == 13){
            (0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyTask)(index, `${changeTask.value}`)
            changeTask.remove()
            ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_4__.handleEffects)()
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



function hex2rgba (hex, alpha) {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };



function handleEffects(){
    const titles = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('todos-titles')
    titles.forEach(title => {
        title.addEventListener('mouseenter', e => {
    //    console.log(titles)
       
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

    const lists = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('lists')
    lists.forEach(list => {
        
        list.addEventListener('mouseenter', e => {
            const listIndex = +`${e.target.id}`.replace("list", "")
            const imageIndex = 'deleteListImage#' + listIndex
            ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement(imageIndex).classList.add('image-visible')
        })
        list.addEventListener('mouseleave', e => {
            const listIndex = +`${e.target.id}`.replace("list", "")
            const imageIndex = 'deleteListImage#' + listIndex
            ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement(imageIndex).classList.remove('image-visible')
        })
    })

    const todoLists = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('todo-lists')
    todoLists.forEach(list => {
        const lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)('lists')
        const color = lists.filter(item => item.listName == list.textContent).map(item => item.color)
        // list.style.backgroundColor = `${color[0]}`
        list.style.backgroundColor = `${hex2rgba(color[0], 0.3)}`
    })



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
        if((!e.target.closest('.new-list-form')) || e.target.classList.contains('cancel-list-add')){
            (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hide(newListForm)
        }


        // if(!e.target.parentNode.classList.contains('new-list-form') 
        // && !e.target.parentNode.classList.contains('add-list-form')
        // && !e.target.parentNode.classList.contains('label-input-name')
        // && !e.target.parentNode.classList.contains('label-input-description')
        // && !e.target.parentNode.classList.contains('new-list-buttons')
        // && !e.target.classList.contains('new-list-form')
        // && !e.target.parentNode.classList.contains('new-list')
        // || e.target.classList.contains('cancel-list-add')){
        //     // console.log(e.target)
        //     interactDOM().hide(newListForm)
        //     // newTask.remove()
        // }
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
/* harmony import */ var _handleEffects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./handleEffects */ "./src/handleEffects.js");
/* harmony import */ var _right_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./right.png */ "./src/right.png");
/* harmony import */ var wc_datepicker_dist_components_wc_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! wc-datepicker/dist/components/wc-datepicker */ "./node_modules/wc-datepicker/dist/components/wc-datepicker.js");





























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
    ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_16__.handleEffects)()
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
        ;(0,_controlStatusChange__WEBPACK_IMPORTED_MODULE_5__["default"])(e.target, index)
    } else if (e.target.classList.contains('todo-priority')){
        const index = +`${e.target.id}`.replace("priority", "")
        // console.log(index)
        ;(0,_controlPriorityChange__WEBPACK_IMPORTED_MODULE_6__["default"])(e.target, index)
        
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
        ;(0,_controlListChange__WEBPACK_IMPORTED_MODULE_8__.controlListChange)(e.target, index)
    } else if(e.target.classList.contains('todo-tasks')){
        const index = +`${e.target.id}`.replace("task", "")
        ;(0,_controlTaskChange__WEBPACK_IMPORTED_MODULE_4__["default"])(e.target, index)
    } else if(e.target.classList.contains('todo-due-date')){
        const index = +`${e.target.id}`.replace("dueDate", "")
        ;(0,_controlDueDateChange__WEBPACK_IMPORTED_MODULE_7__["default"])(e.target, index)
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
    let listName = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('listName')
    let color = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('listColor')
    let description = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('listDescription')
    ;(0,_createList__WEBPACK_IMPORTED_MODULE_9__.createNewList)(`${listName}`, `${color}`, `${description}`)
    const lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_15__.getFromLocalStorage)('lists')
    ;(0,_displayLists__WEBPACK_IMPORTED_MODULE_10__["default"])(lists)
    ;(0,_controlListChange__WEBPACK_IMPORTED_MODULE_8__.updateListOptions)(lists)
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().formReset('addListForm')
    ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_16__.handleEffects)()
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
        const todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_15__.getFromLocalStorage)('todos')
        const lists = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_15__.getFromLocalStorage)('lists')
        console.log(e.target)
        ;(0,_filterByList__WEBPACK_IMPORTED_MODULE_13__["default"])(e.target, lists, todos)
    } else if(e.target.parentNode.classList.contains('delete-list')){
        const index = +`${e.target.parentNode.id}`.replace("deleteList#", "")
        console.log(index)
        ;(0,_createList__WEBPACK_IMPORTED_MODULE_9__.deleteList)(index)
        ;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_16__.handleEffects)()
    }
})

// ======================== filter tasks by list

// const removeFilter = interactDOM().hookDOMelement('removeFilter')
// removeFilter.addEventListener('mousedown', e => {
//     e.preventDefault()
//     displayTasks(todos)
// })


;(0,_handleFilterOrder__WEBPACK_IMPORTED_MODULE_14__["default"])(lists, todos)

console.log(todos)

// document.body.addEventListener('mousedown', e =>{
//     console.log(e.target.getBoundingClientRect())
// })


// document.body.addEventListener('mouseover', e => {
//     if(e.target.classList.contains('delete-list-img')){
//         console.log('entered!')
//         e.target.style.cursor = 'pointer'
//         e.target.style.transform = 'scale(1.1)'
//     }
// })

;(0,_handleEffects__WEBPACK_IMPORTED_MODULE_16__.handleEffects)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUZBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlGQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNQLE1BQU07OztBQUdOLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsMkVBQWlCLFFBQVE7O0FBRS9DLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtRUFBaUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLG9FQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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QUFJLHlEQUFXO0FBQ2YsSUFBSSwrREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQVc7QUFDbkM7QUFDQSxJQUFJLHlEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsMkRBQVk7QUFDWixzRUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFdBQVc7QUFDakM7QUFDQSxJQUFJLDJEQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0RBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzRUFBbUI7QUFDekMsc0JBQXNCLHNFQUFtQjtBQUN6QztBQUNBLFFBQVEsMkRBQVk7QUFDcEIsTUFBTTtBQUNOLDBCQUEwQix1QkFBdUI7QUFDakQ7QUFDQSxRQUFRLHdEQUFVO0FBQ2xCLFFBQVEsK0RBQWE7QUFDckI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLGdFQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSwrREFBYSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudC8gbGF6eSBeXFwuXFwvLipcXC5lbnRyeVxcLmpzLiokIGluY2x1ZGU6IFxcLmVudHJ5XFwuanMkIGV4Y2x1ZGU6IFxcLnN5c3RlbVxcLmVudHJ5XFwuanMkIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvd2MtZGF0ZXBpY2tlci9kaXN0L3RoZW1lcy9kYXJrLmNzcz9kYTU1Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/MzU5NyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvd2MtZGF0ZXBpY2tlci9kaXN0L2NvbXBvbmVudHMvd2MtZGF0ZXBpY2tlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbER1ZURhdGVDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xMaXN0Q2hhbmdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sUHJpb3JpdHlDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xTdGF0dXNDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xUYXNrQ2hhbmdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVMaXN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kaXNwbGF5TGlzdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlUYXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmlsdGVyQnlEYXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9maWx0ZXJCeUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZpbHRlckJ5UHJpb3JpdHkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZpbHRlckJ5U3RhdHVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVFZmZlY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVGaWx0ZXJPcmRlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlTmV3TGlzdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZU5ld1Rhc2tGb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVTYXZlTG9naWMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ludGVyYWN0RG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zb3J0QnlUaXRsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb0NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvYXBwLWRhdGEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2xvYWQgc2NyaXB0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVmlydHVhbCBET00gcGF0Y2hpbmcgYWxnb3JpdGhtIGJhc2VkIG9uIFNuYWJiZG9tIGJ5XG4gKiBTaW1vbiBGcmlpcyBWaW5kdW0gKEBwYWxkZXBpbmQpXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zbmFiYmRvbS9zbmFiYmRvbS9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKlxuICogTW9kaWZpZWQgZm9yIFN0ZW5jaWwncyByZW5kZXJlciBhbmQgc2xvdCBwcm9qZWN0aW9uXG4gKi9cbmxldCBzY29wZUlkO1xubGV0IGNvbnRlbnRSZWY7XG5sZXQgaG9zdFRhZ05hbWU7XG5sZXQgY3VzdG9tRXJyb3I7XG5sZXQgaSA9IDA7XG5sZXQgdXNlTmF0aXZlU2hhZG93RG9tID0gZmFsc2U7XG5sZXQgY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5ID0gZmFsc2U7XG5sZXQgY2hlY2tTbG90UmVsb2NhdGUgPSBmYWxzZTtcbmxldCBpc1N2Z01vZGUgPSBmYWxzZTtcbmxldCByZW5kZXJpbmdSZWYgPSBudWxsO1xubGV0IHF1ZXVlQ29uZ2VzdGlvbiA9IDA7XG5sZXQgcXVldWVQZW5kaW5nID0gZmFsc2U7XG4vKlxuIFN0ZW5jaWwgQ2xpZW50IFBsYXRmb3JtIHYyLjIyLjMgfCBNSVQgTGljZW5zZWQgfCBodHRwczovL3N0ZW5jaWxqcy5jb21cbiAqL1xuaW1wb3J0IHsgQlVJTEQsIE5BTUVTUEFDRSB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvYXBwLWRhdGEnO1xuY29uc3QgQnVpbGQgPSB7XG4gICAgaXNEZXY6IEJVSUxELmlzRGV2ID8gdHJ1ZSA6IGZhbHNlLFxuICAgIGlzQnJvd3NlcjogdHJ1ZSxcbiAgICBpc1NlcnZlcjogZmFsc2UsXG4gICAgaXNUZXN0aW5nOiBCVUlMRC5pc1Rlc3RpbmcgPyB0cnVlIDogZmFsc2UsXG59O1xuY29uc3QgQ29udGV4dCA9IHt9O1xuY29uc3QgZ2V0QXNzZXRQYXRoID0gKHBhdGgpID0+IHtcbiAgICBjb25zdCBhc3NldFVybCA9IG5ldyBVUkwocGF0aCwgcGx0LiRyZXNvdXJjZXNVcmwkKTtcbiAgICByZXR1cm4gYXNzZXRVcmwub3JpZ2luICE9PSB3aW4ubG9jYXRpb24ub3JpZ2luID8gYXNzZXRVcmwuaHJlZiA6IGFzc2V0VXJsLnBhdGhuYW1lO1xufTtcbmNvbnN0IHNldEFzc2V0UGF0aCA9IChwYXRoKSA9PiAocGx0LiRyZXNvdXJjZXNVcmwkID0gcGF0aCk7XG5jb25zdCBjcmVhdGVUaW1lID0gKGZuTmFtZSwgdGFnTmFtZSA9ICcnKSA9PiB7XG4gICAgaWYgKEJVSUxELnByb2ZpbGUgJiYgcGVyZm9ybWFuY2UubWFyaykge1xuICAgICAgICBjb25zdCBrZXkgPSBgc3Q6JHtmbk5hbWV9OiR7dGFnTmFtZX06JHtpKyt9YDtcbiAgICAgICAgLy8gU3RhcnRcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyayhrZXkpO1xuICAgICAgICAvLyBFbmRcbiAgICAgICAgcmV0dXJuICgpID0+IHBlcmZvcm1hbmNlLm1lYXN1cmUoYFtTdGVuY2lsXSAke2ZuTmFtZX0oKSA8JHt0YWdOYW1lfT5gLCBrZXkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuY29uc3QgdW5pcXVlVGltZSA9IChrZXksIG1lYXN1cmVUZXh0KSA9PiB7XG4gICAgaWYgKEJVSUxELnByb2ZpbGUgJiYgcGVyZm9ybWFuY2UubWFyaykge1xuICAgICAgICBpZiAocGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZShrZXksICdtYXJrJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGlmIChwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKG1lYXN1cmVUZXh0LCAnbWVhc3VyZScpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1lYXN1cmUobWVhc3VyZVRleHQsIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5jb25zdCBpbnNwZWN0ID0gKHJlZikgPT4ge1xuICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKHJlZik7XG4gICAgaWYgKCFob3N0UmVmKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IGZsYWdzID0gaG9zdFJlZi4kZmxhZ3MkO1xuICAgIGNvbnN0IGhvc3RFbGVtZW50ID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlckNvdW50OiBob3N0UmVmLiRyZW5kZXJDb3VudCQsXG4gICAgICAgIGZsYWdzOiB7XG4gICAgICAgICAgICBoYXNSZW5kZXJlZDogISEoZmxhZ3MgJiAyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi8pLFxuICAgICAgICAgICAgaGFzQ29ubmVjdGVkOiAhIShmbGFncyAmIDEgLyogSE9TVF9GTEFHUy5oYXNDb25uZWN0ZWQgKi8pLFxuICAgICAgICAgICAgaXNXYWl0aW5nRm9yQ2hpbGRyZW46ICEhKGZsYWdzICYgNCAvKiBIT1NUX0ZMQUdTLmlzV2FpdGluZ0ZvckNoaWxkcmVuICovKSxcbiAgICAgICAgICAgIGlzQ29uc3RydWN0aW5nSW5zdGFuY2U6ICEhKGZsYWdzICYgOCAvKiBIT1NUX0ZMQUdTLmlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi8pLFxuICAgICAgICAgICAgaXNRdWV1ZWRGb3JVcGRhdGU6ICEhKGZsYWdzICYgMTYgLyogSE9TVF9GTEFHUy5pc1F1ZXVlZEZvclVwZGF0ZSAqLyksXG4gICAgICAgICAgICBoYXNJbml0aWFsaXplZENvbXBvbmVudDogISEoZmxhZ3MgJiAzMiAvKiBIT1NUX0ZMQUdTLmhhc0luaXRpYWxpemVkQ29tcG9uZW50ICovKSxcbiAgICAgICAgICAgIGhhc0xvYWRlZENvbXBvbmVudDogISEoZmxhZ3MgJiA2NCAvKiBIT1NUX0ZMQUdTLmhhc0xvYWRlZENvbXBvbmVudCAqLyksXG4gICAgICAgICAgICBpc1dhdGNoUmVhZHk6ICEhKGZsYWdzICYgMTI4IC8qIEhPU1RfRkxBR1MuaXNXYXRjaFJlYWR5ICovKSxcbiAgICAgICAgICAgIGlzTGlzdGVuUmVhZHk6ICEhKGZsYWdzICYgMjU2IC8qIEhPU1RfRkxBR1MuaXNMaXN0ZW5SZWFkeSAqLyksXG4gICAgICAgICAgICBuZWVkc1JlcmVuZGVyOiAhIShmbGFncyAmIDUxMiAvKiBIT1NUX0ZMQUdTLm5lZWRzUmVyZW5kZXIgKi8pLFxuICAgICAgICB9LFxuICAgICAgICBpbnN0YW5jZVZhbHVlczogaG9zdFJlZi4kaW5zdGFuY2VWYWx1ZXMkLFxuICAgICAgICBhbmNlc3RvckNvbXBvbmVudDogaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkLFxuICAgICAgICBob3N0RWxlbWVudCxcbiAgICAgICAgbGF6eUluc3RhbmNlOiBob3N0UmVmLiRsYXp5SW5zdGFuY2UkLFxuICAgICAgICB2bm9kZTogaG9zdFJlZi4kdm5vZGUkLFxuICAgICAgICBtb2RlTmFtZTogaG9zdFJlZi4kbW9kZU5hbWUkLFxuICAgICAgICBvblJlYWR5UHJvbWlzZTogaG9zdFJlZi4kb25SZWFkeVByb21pc2UkLFxuICAgICAgICBvblJlYWR5UmVzb2x2ZTogaG9zdFJlZi4kb25SZWFkeVJlc29sdmUkLFxuICAgICAgICBvbkluc3RhbmNlUHJvbWlzZTogaG9zdFJlZi4kb25JbnN0YW5jZVByb21pc2UkLFxuICAgICAgICBvbkluc3RhbmNlUmVzb2x2ZTogaG9zdFJlZi4kb25JbnN0YW5jZVJlc29sdmUkLFxuICAgICAgICBvblJlbmRlclJlc29sdmU6IGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQsXG4gICAgICAgIHF1ZXVlZExpc3RlbmVyczogaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJCxcbiAgICAgICAgcm1MaXN0ZW5lcnM6IGhvc3RSZWYuJHJtTGlzdGVuZXJzJCxcbiAgICAgICAgWydzLWlkJ106IGhvc3RFbGVtZW50WydzLWlkJ10sXG4gICAgICAgIFsncy1jciddOiBob3N0RWxlbWVudFsncy1jciddLFxuICAgICAgICBbJ3MtbHInXTogaG9zdEVsZW1lbnRbJ3MtbHInXSxcbiAgICAgICAgWydzLXAnXTogaG9zdEVsZW1lbnRbJ3MtcCddLFxuICAgICAgICBbJ3MtcmMnXTogaG9zdEVsZW1lbnRbJ3MtcmMnXSxcbiAgICAgICAgWydzLXNjJ106IGhvc3RFbGVtZW50WydzLXNjJ10sXG4gICAgfTtcbn07XG5jb25zdCBpbnN0YWxsRGV2VG9vbHMgPSAoKSA9PiB7XG4gICAgaWYgKEJVSUxELmRldlRvb2xzKSB7XG4gICAgICAgIGNvbnN0IHN0ZW5jaWwgPSAod2luLnN0ZW5jaWwgPSB3aW4uc3RlbmNpbCB8fCB7fSk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsSW5zcGVjdCA9IHN0ZW5jaWwuaW5zcGVjdDtcbiAgICAgICAgc3RlbmNpbC5pbnNwZWN0ID0gKHJlZikgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGluc3BlY3QocmVmKTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0ICYmIHR5cGVvZiBvcmlnaW5hbEluc3BlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBvcmlnaW5hbEluc3BlY3QocmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IENPTlRFTlRfUkVGX0lEID0gJ3InO1xuY29uc3QgT1JHX0xPQ0FUSU9OX0lEID0gJ28nO1xuY29uc3QgU0xPVF9OT0RFX0lEID0gJ3MnO1xuY29uc3QgVEVYVF9OT0RFX0lEID0gJ3QnO1xuY29uc3QgSFlEUkFURV9JRCA9ICdzLWlkJztcbmNvbnN0IEhZRFJBVEVEX1NUWUxFX0lEID0gJ3N0eS1pZCc7XG5jb25zdCBIWURSQVRFX0NISUxEX0lEID0gJ2MtaWQnO1xuY29uc3QgSFlEUkFURURfQ1NTID0gJ3t2aXNpYmlsaXR5OmhpZGRlbn0uaHlkcmF0ZWR7dmlzaWJpbGl0eTppbmhlcml0fSc7XG5jb25zdCBYTElOS19OUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJztcbi8qKlxuICogRGVmYXVsdCBzdHlsZSBtb2RlIGlkXG4gKi9cbi8qKlxuICogUmV1c2FibGUgZW1wdHkgb2JqL2FycmF5XG4gKiBEb24ndCBhZGQgdmFsdWVzIHRvIHRoZXNlISFcbiAqL1xuY29uc3QgRU1QVFlfT0JKID0ge307XG4vKipcbiAqIE5hbWVzcGFjZXNcbiAqL1xuY29uc3QgU1ZHX05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbmNvbnN0IEhUTUxfTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCc7XG5jb25zdCBpc0RlZiA9ICh2KSA9PiB2ICE9IG51bGw7XG5jb25zdCBpc0NvbXBsZXhUeXBlID0gKG8pID0+IHtcbiAgICAvLyBodHRwczovL2pzcGVyZi5jb20vdHlwZW9mLWZuLW9iamVjdC81XG4gICAgbyA9IHR5cGVvZiBvO1xuICAgIHJldHVybiBvID09PSAnb2JqZWN0JyB8fCBvID09PSAnZnVuY3Rpb24nO1xufTtcbi8qKlxuICogSGVscGVyIG1ldGhvZCBmb3IgcXVlcnlpbmcgYSBgbWV0YWAgdGFnIHRoYXQgY29udGFpbnMgYSBub25jZSB2YWx1ZVxuICogb3V0IG9mIGEgRE9NJ3MgaGVhZC5cbiAqXG4gKiBAcGFyYW0gZG9jIFRoZSBET00gY29udGFpbmluZyB0aGUgYGhlYWRgIHRvIHF1ZXJ5IGFnYWluc3RcbiAqIEByZXR1cm5zIFRoZSBjb250ZW50IG9mIHRoZSBtZXRhIHRhZyByZXByZXNlbnRpbmcgdGhlIG5vbmNlIHZhbHVlLCBvciBgdW5kZWZpbmVkYCBpZiBubyB0YWdcbiAqIGV4aXN0cyBvciB0aGUgdGFnIGhhcyBubyBjb250ZW50LlxuICovXG5mdW5jdGlvbiBxdWVyeU5vbmNlTWV0YVRhZ0NvbnRlbnQoZG9jKSB7XG4gICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgcmV0dXJuIChfYyA9IChfYiA9IChfYSA9IGRvYy5oZWFkKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwiY3NwLW5vbmNlXCJdJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogdW5kZWZpbmVkO1xufVxuLyoqXG4gKiBQcm9kdWN0aW9uIGgoKSBmdW5jdGlvbiBiYXNlZCBvbiBQcmVhY3QgYnlcbiAqIEphc29uIE1pbGxlciAoQGRldmVsb3BpdClcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9wcmVhY3QvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIE1vZGlmaWVkIGZvciBTdGVuY2lsJ3MgY29tcGlsZXIgYW5kIHZkb21cbiAqL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIGgobm9kZU5hbWU6IHN0cmluZyB8IGQuRnVuY3Rpb25hbENvbXBvbmVudCwgdm5vZGVEYXRhOiBkLlByb3BzVHlwZSwgY2hpbGQ/OiBkLkNoaWxkVHlwZSk6IGQuVk5vZGU7XG4vLyBleHBvcnQgZnVuY3Rpb24gaChub2RlTmFtZTogc3RyaW5nIHwgZC5GdW5jdGlvbmFsQ29tcG9uZW50LCB2bm9kZURhdGE6IGQuUHJvcHNUeXBlLCAuLi5jaGlsZHJlbjogZC5DaGlsZFR5cGVbXSk6IGQuVk5vZGU7XG5jb25zdCBoID0gKG5vZGVOYW1lLCB2bm9kZURhdGEsIC4uLmNoaWxkcmVuKSA9PiB7XG4gICAgbGV0IGNoaWxkID0gbnVsbDtcbiAgICBsZXQga2V5ID0gbnVsbDtcbiAgICBsZXQgc2xvdE5hbWUgPSBudWxsO1xuICAgIGxldCBzaW1wbGUgPSBmYWxzZTtcbiAgICBsZXQgbGFzdFNpbXBsZSA9IGZhbHNlO1xuICAgIGNvbnN0IHZOb2RlQ2hpbGRyZW4gPSBbXTtcbiAgICBjb25zdCB3YWxrID0gKGMpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjaGlsZCA9IGNbaV07XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICB3YWxrKGNoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkICE9IG51bGwgJiYgdHlwZW9mIGNoaWxkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoKHNpbXBsZSA9IHR5cGVvZiBub2RlTmFtZSAhPT0gJ2Z1bmN0aW9uJyAmJiAhaXNDb21wbGV4VHlwZShjaGlsZCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkID0gU3RyaW5nKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoQlVJTEQuaXNEZXYgJiYgdHlwZW9mIG5vZGVOYW1lICE9PSAnZnVuY3Rpb24nICYmIGNoaWxkLiRmbGFncyQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlRGV2RXJyb3IoYHZOb2RlIHBhc3NlZCBhcyBjaGlsZHJlbiBoYXMgdW5leHBlY3RlZCB0eXBlLlxuTWFrZSBzdXJlIGl0J3MgdXNpbmcgdGhlIGNvcnJlY3QgaCgpIGZ1bmN0aW9uLlxuRW1wdHkgb2JqZWN0cyBjYW4gYWxzbyBiZSB0aGUgY2F1c2UsIGxvb2sgZm9yIEpTWCBjb21tZW50cyB0aGF0IGJlY2FtZSBvYmplY3RzLmApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc2ltcGxlICYmIGxhc3RTaW1wbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIHByZXZpb3VzIGNoaWxkIHdhcyBzaW1wbGUgKHN0cmluZyksIHdlIG1lcmdlIGJvdGhcbiAgICAgICAgICAgICAgICAgICAgdk5vZGVDaGlsZHJlblt2Tm9kZUNoaWxkcmVuLmxlbmd0aCAtIDFdLiR0ZXh0JCArPSBjaGlsZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBhIG5ldyB2Tm9kZSwgaWYgaXQncyB0ZXh0LCB3ZSBjcmVhdGUgYSB0ZXh0IHZOb2RlXG4gICAgICAgICAgICAgICAgICAgIHZOb2RlQ2hpbGRyZW4ucHVzaChzaW1wbGUgPyBuZXdWTm9kZShudWxsLCBjaGlsZCkgOiBjaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhc3RTaW1wbGUgPSBzaW1wbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHdhbGsoY2hpbGRyZW4pO1xuICAgIGlmICh2bm9kZURhdGEpIHtcbiAgICAgICAgaWYgKEJVSUxELmlzRGV2ICYmIG5vZGVOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUlucHV0UHJvcGVydGllcyh2bm9kZURhdGEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5vcm1hbGl6ZSBjbGFzcyAvIGNsYXNzbmFtZSBhdHRyaWJ1dGVzXG4gICAgICAgIGlmIChCVUlMRC52ZG9tS2V5ICYmIHZub2RlRGF0YS5rZXkpIHtcbiAgICAgICAgICAgIGtleSA9IHZub2RlRGF0YS5rZXk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIHZub2RlRGF0YS5uYW1lKSB7XG4gICAgICAgICAgICBzbG90TmFtZSA9IHZub2RlRGF0YS5uYW1lO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC52ZG9tQ2xhc3MpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzRGF0YSA9IHZub2RlRGF0YS5jbGFzc05hbWUgfHwgdm5vZGVEYXRhLmNsYXNzO1xuICAgICAgICAgICAgaWYgKGNsYXNzRGF0YSkge1xuICAgICAgICAgICAgICAgIHZub2RlRGF0YS5jbGFzcyA9XG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjbGFzc0RhdGEgIT09ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNsYXNzRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cyhjbGFzc0RhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaykgPT4gY2xhc3NEYXRhW2tdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKEJVSUxELmlzRGV2ICYmIHZOb2RlQ2hpbGRyZW4uc29tZShpc0hvc3QpKSB7XG4gICAgICAgIGNvbnNvbGVEZXZFcnJvcihgVGhlIDxIb3N0PiBtdXN0IGJlIHRoZSBzaW5nbGUgcm9vdCBjb21wb25lbnQuIE1ha2Ugc3VyZTpcbi0gWW91IGFyZSBOT1QgdXNpbmcgaG9zdERhdGEoKSBhbmQgPEhvc3Q+IGluIHRoZSBzYW1lIGNvbXBvbmVudC5cbi0gPEhvc3Q+IGlzIHVzZWQgb25jZSwgYW5kIGl0J3MgdGhlIHNpbmdsZSByb290IGNvbXBvbmVudCBvZiB0aGUgcmVuZGVyKCkgZnVuY3Rpb24uYCk7XG4gICAgfVxuICAgIGlmIChCVUlMRC52ZG9tRnVuY3Rpb25hbCAmJiB0eXBlb2Ygbm9kZU5hbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gbm9kZU5hbWUgaXMgYSBmdW5jdGlvbmFsIGNvbXBvbmVudFxuICAgICAgICByZXR1cm4gbm9kZU5hbWUodm5vZGVEYXRhID09PSBudWxsID8ge30gOiB2bm9kZURhdGEsIHZOb2RlQ2hpbGRyZW4sIHZkb21GblV0aWxzKTtcbiAgICB9XG4gICAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShub2RlTmFtZSwgbnVsbCk7XG4gICAgdm5vZGUuJGF0dHJzJCA9IHZub2RlRGF0YTtcbiAgICBpZiAodk5vZGVDaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZub2RlLiRjaGlsZHJlbiQgPSB2Tm9kZUNoaWxkcmVuO1xuICAgIH1cbiAgICBpZiAoQlVJTEQudmRvbUtleSkge1xuICAgICAgICB2bm9kZS4ka2V5JCA9IGtleTtcbiAgICB9XG4gICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uKSB7XG4gICAgICAgIHZub2RlLiRuYW1lJCA9IHNsb3ROYW1lO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGU7XG59O1xuLyoqXG4gKiBBIHV0aWxpdHkgZnVuY3Rpb24gZm9yIGNyZWF0aW5nIGEgdmlydHVhbCBET00gbm9kZSBmcm9tIGEgdGFnIGFuZCBzb21lXG4gKiBwb3NzaWJsZSB0ZXh0IGNvbnRlbnQuXG4gKlxuICogQHBhcmFtIHRhZyB0aGUgdGFnIGZvciB0aGlzIGVsZW1lbnRcbiAqIEBwYXJhbSB0ZXh0IHBvc3NpYmxlIHRleHQgY29udGVudCBmb3IgdGhlIG5vZGVcbiAqIEByZXR1cm5zIGEgbmV3bHktbWludGVkIHZpcnR1YWwgRE9NIG5vZGVcbiAqL1xuY29uc3QgbmV3Vk5vZGUgPSAodGFnLCB0ZXh0KSA9PiB7XG4gICAgY29uc3Qgdm5vZGUgPSB7XG4gICAgICAgICRmbGFncyQ6IDAsXG4gICAgICAgICR0YWckOiB0YWcsXG4gICAgICAgICR0ZXh0JDogdGV4dCxcbiAgICAgICAgJGVsbSQ6IG51bGwsXG4gICAgICAgICRjaGlsZHJlbiQ6IG51bGwsXG4gICAgfTtcbiAgICBpZiAoQlVJTEQudmRvbUF0dHJpYnV0ZSkge1xuICAgICAgICB2bm9kZS4kYXR0cnMkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKEJVSUxELnZkb21LZXkpIHtcbiAgICAgICAgdm5vZGUuJGtleSQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgdm5vZGUuJG5hbWUkID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHZub2RlO1xufTtcbmNvbnN0IEhvc3QgPSB7fTtcbi8qKlxuICogQ2hlY2sgd2hldGhlciBhIGdpdmVuIG5vZGUgaXMgYSBIb3N0IG5vZGUgb3Igbm90XG4gKlxuICogQHBhcmFtIG5vZGUgdGhlIHZpcnR1YWwgRE9NIG5vZGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHdoZXRoZXIgaXQncyBhIEhvc3Qgbm9kZSBvciBub3RcbiAqL1xuY29uc3QgaXNIb3N0ID0gKG5vZGUpID0+IG5vZGUgJiYgbm9kZS4kdGFnJCA9PT0gSG9zdDtcbi8qKlxuICogSW1wbGVtZW50YXRpb24gb2Yge0BsaW5rIGQuRnVuY3Rpb25hbFV0aWxpdGllc30gZm9yIFN0ZW5jaWwncyBWRG9tLlxuICpcbiAqIE5vdGUgdGhhdCB0aGVzZSBmdW5jdGlvbnMgY29udmVydCBmcm9tIHtAbGluayBkLlZOb2RlfSB0b1xuICoge0BsaW5rIGQuQ2hpbGROb2RlfSB0byBnaXZlIGZ1bmN0aW9uYWwgY29tcG9uZW50IGRldmVsb3BlcnMgYSBmcmllbmRseVxuICogaW50ZXJmYWNlLlxuICovXG5jb25zdCB2ZG9tRm5VdGlscyA9IHtcbiAgICBmb3JFYWNoOiAoY2hpbGRyZW4sIGNiKSA9PiBjaGlsZHJlbi5tYXAoY29udmVydFRvUHVibGljKS5mb3JFYWNoKGNiKSxcbiAgICBtYXA6IChjaGlsZHJlbiwgY2IpID0+IGNoaWxkcmVuLm1hcChjb252ZXJ0VG9QdWJsaWMpLm1hcChjYikubWFwKGNvbnZlcnRUb1ByaXZhdGUpLFxufTtcbi8qKlxuICogQ29udmVydCBhIHtAbGluayBkLlZOb2RlfSB0byBhIHtAbGluayBkLkNoaWxkTm9kZX0gaW4gb3JkZXIgdG8gcHJlc2VudCBhXG4gKiBmcmllbmRsaWVyIHB1YmxpYyBpbnRlcmZhY2UgKGhlbmNlLCAnY29udmVydFRvUHVibGljJykuXG4gKlxuICogQHBhcmFtIG5vZGUgdGhlIHZpcnR1YWwgRE9NIG5vZGUgdG8gY29udmVydFxuICogQHJldHVybnMgYSBjb252ZXJ0ZWQgY2hpbGQgbm9kZVxuICovXG5jb25zdCBjb252ZXJ0VG9QdWJsaWMgPSAobm9kZSkgPT4gKHtcbiAgICB2YXR0cnM6IG5vZGUuJGF0dHJzJCxcbiAgICB2Y2hpbGRyZW46IG5vZGUuJGNoaWxkcmVuJCxcbiAgICB2a2V5OiBub2RlLiRrZXkkLFxuICAgIHZuYW1lOiBub2RlLiRuYW1lJCxcbiAgICB2dGFnOiBub2RlLiR0YWckLFxuICAgIHZ0ZXh0OiBub2RlLiR0ZXh0JCxcbn0pO1xuLyoqXG4gKiBDb252ZXJ0IGEge0BsaW5rIGQuQ2hpbGROb2RlfSBiYWNrIHRvIGFuIGVxdWl2YWxlbnQge0BsaW5rIGQuVk5vZGV9IGluXG4gKiBvcmRlciB0byB1c2UgdGhlIHJlc3VsdGluZyBvYmplY3QgaW4gdGhlIHZpcnR1YWwgRE9NLiBUaGUgaW5pdGlhbCBvYmplY3Qgd2FzXG4gKiBsaWtlbHkgY3JlYXRlZCBhcyBwYXJ0IG9mIHByZXNlbnRpbmcgYSBwdWJsaWMgQVBJLCBzbyBjb252ZXJ0aW5nIGl0IGJhY2tcbiAqIGludm9sdmVkIG1ha2luZyBpdCAncHJpdmF0ZScgYWdhaW4gKGhlbmNlLCBgY29udmVydFRvUHJpdmF0ZWApLlxuICpcbiAqIEBwYXJhbSBub2RlIHRoZSBjaGlsZCBub2RlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIGEgY29udmVydGVkIHZpcnR1YWwgRE9NIG5vZGVcbiAqL1xuY29uc3QgY29udmVydFRvUHJpdmF0ZSA9IChub2RlKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBub2RlLnZ0YWcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3Qgdm5vZGVEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgbm9kZS52YXR0cnMpO1xuICAgICAgICBpZiAobm9kZS52a2V5KSB7XG4gICAgICAgICAgICB2bm9kZURhdGEua2V5ID0gbm9kZS52a2V5O1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnZuYW1lKSB7XG4gICAgICAgICAgICB2bm9kZURhdGEubmFtZSA9IG5vZGUudm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGgobm9kZS52dGFnLCB2bm9kZURhdGEsIC4uLihub2RlLnZjaGlsZHJlbiB8fCBbXSkpO1xuICAgIH1cbiAgICBjb25zdCB2bm9kZSA9IG5ld1ZOb2RlKG5vZGUudnRhZywgbm9kZS52dGV4dCk7XG4gICAgdm5vZGUuJGF0dHJzJCA9IG5vZGUudmF0dHJzO1xuICAgIHZub2RlLiRjaGlsZHJlbiQgPSBub2RlLnZjaGlsZHJlbjtcbiAgICB2bm9kZS4ka2V5JCA9IG5vZGUudmtleTtcbiAgICB2bm9kZS4kbmFtZSQgPSBub2RlLnZuYW1lO1xuICAgIHJldHVybiB2bm9kZTtcbn07XG4vKipcbiAqIFZhbGlkYXRlcyB0aGUgb3JkZXJpbmcgb2YgYXR0cmlidXRlcyBvbiBhbiBpbnB1dCBlbGVtZW50XG4gKlxuICogQHBhcmFtIGlucHV0RWxtIHRoZSBlbGVtZW50IHRvIHZhbGlkYXRlXG4gKi9cbmNvbnN0IHZhbGlkYXRlSW5wdXRQcm9wZXJ0aWVzID0gKGlucHV0RWxtKSA9PiB7XG4gICAgY29uc3QgcHJvcHMgPSBPYmplY3Qua2V5cyhpbnB1dEVsbSk7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wcy5pbmRleE9mKCd2YWx1ZScpO1xuICAgIGlmICh2YWx1ZSA9PT0gLTEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0eXBlSW5kZXggPSBwcm9wcy5pbmRleE9mKCd0eXBlJyk7XG4gICAgY29uc3QgbWluSW5kZXggPSBwcm9wcy5pbmRleE9mKCdtaW4nKTtcbiAgICBjb25zdCBtYXhJbmRleCA9IHByb3BzLmluZGV4T2YoJ21heCcpO1xuICAgIGNvbnN0IHN0ZXBJbmRleCA9IHByb3BzLmluZGV4T2YoJ3N0ZXAnKTtcbiAgICBpZiAodmFsdWUgPCB0eXBlSW5kZXggfHwgdmFsdWUgPCBtaW5JbmRleCB8fCB2YWx1ZSA8IG1heEluZGV4IHx8IHZhbHVlIDwgc3RlcEluZGV4KSB7XG4gICAgICAgIGNvbnNvbGVEZXZXYXJuKGBUaGUgXCJ2YWx1ZVwiIHByb3Agb2YgPGlucHV0PiBzaG91bGQgYmUgc2V0IGFmdGVyIFwibWluXCIsIFwibWF4XCIsIFwidHlwZVwiIGFuZCBcInN0ZXBcImApO1xuICAgIH1cbn07XG5jb25zdCBpbml0aWFsaXplQ2xpZW50SHlkcmF0ZSA9IChob3N0RWxtLCB0YWdOYW1lLCBob3N0SWQsIGhvc3RSZWYpID0+IHtcbiAgICBjb25zdCBlbmRIeWRyYXRlID0gY3JlYXRlVGltZSgnaHlkcmF0ZUNsaWVudCcsIHRhZ05hbWUpO1xuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBob3N0RWxtLnNoYWRvd1Jvb3Q7XG4gICAgY29uc3QgY2hpbGRSZW5kZXJOb2RlcyA9IFtdO1xuICAgIGNvbnN0IHNsb3ROb2RlcyA9IFtdO1xuICAgIGNvbnN0IHNoYWRvd1Jvb3ROb2RlcyA9IEJVSUxELnNoYWRvd0RvbSAmJiBzaGFkb3dSb290ID8gW10gOiBudWxsO1xuICAgIGNvbnN0IHZub2RlID0gKGhvc3RSZWYuJHZub2RlJCA9IG5ld1ZOb2RlKHRhZ05hbWUsIG51bGwpKTtcbiAgICBpZiAoIXBsdC4kb3JnTG9jTm9kZXMkKSB7XG4gICAgICAgIGluaXRpYWxpemVEb2N1bWVudEh5ZHJhdGUoZG9jLmJvZHksIChwbHQuJG9yZ0xvY05vZGVzJCA9IG5ldyBNYXAoKSkpO1xuICAgIH1cbiAgICBob3N0RWxtW0hZRFJBVEVfSURdID0gaG9zdElkO1xuICAgIGhvc3RFbG0ucmVtb3ZlQXR0cmlidXRlKEhZRFJBVEVfSUQpO1xuICAgIGNsaWVudEh5ZHJhdGUodm5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBob3N0RWxtLCBob3N0RWxtLCBob3N0SWQpO1xuICAgIGNoaWxkUmVuZGVyTm9kZXMubWFwKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yZ0xvY2F0aW9uSWQgPSBjLiRob3N0SWQkICsgJy4nICsgYy4kbm9kZUlkJDtcbiAgICAgICAgY29uc3Qgb3JnTG9jYXRpb25Ob2RlID0gcGx0LiRvcmdMb2NOb2RlcyQuZ2V0KG9yZ0xvY2F0aW9uSWQpO1xuICAgICAgICBjb25zdCBub2RlID0gYy4kZWxtJDtcbiAgICAgICAgaWYgKG9yZ0xvY2F0aW9uTm9kZSAmJiBzdXBwb3J0c1NoYWRvdyAmJiBvcmdMb2NhdGlvbk5vZGVbJ3MtZW4nXSA9PT0gJycpIHtcbiAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBvcmdMb2NhdGlvbk5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgbm9kZVsncy1obiddID0gdGFnTmFtZTtcbiAgICAgICAgICAgIGlmIChvcmdMb2NhdGlvbk5vZGUpIHtcbiAgICAgICAgICAgICAgICBub2RlWydzLW9sJ10gPSBvcmdMb2NhdGlvbk5vZGU7XG4gICAgICAgICAgICAgICAgbm9kZVsncy1vbCddWydzLW5yJ10gPSBub2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHBsdC4kb3JnTG9jTm9kZXMkLmRlbGV0ZShvcmdMb2NhdGlvbklkKTtcbiAgICB9KTtcbiAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmIHNoYWRvd1Jvb3QpIHtcbiAgICAgICAgc2hhZG93Um9vdE5vZGVzLm1hcCgoc2hhZG93Um9vdE5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChzaGFkb3dSb290Tm9kZSkge1xuICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc2hhZG93Um9vdE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW5kSHlkcmF0ZSgpO1xufTtcbmNvbnN0IGNsaWVudEh5ZHJhdGUgPSAocGFyZW50Vk5vZGUsIGNoaWxkUmVuZGVyTm9kZXMsIHNsb3ROb2Rlcywgc2hhZG93Um9vdE5vZGVzLCBob3N0RWxtLCBub2RlLCBob3N0SWQpID0+IHtcbiAgICBsZXQgY2hpbGROb2RlVHlwZTtcbiAgICBsZXQgY2hpbGRJZFNwbHQ7XG4gICAgbGV0IGNoaWxkVk5vZGU7XG4gICAgbGV0IGk7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovKSB7XG4gICAgICAgIGNoaWxkTm9kZVR5cGUgPSBub2RlLmdldEF0dHJpYnV0ZShIWURSQVRFX0NISUxEX0lEKTtcbiAgICAgICAgaWYgKGNoaWxkTm9kZVR5cGUpIHtcbiAgICAgICAgICAgIC8vIGdvdCB0aGUgbm9kZSBkYXRhIGZyb20gdGhlIGVsZW1lbnQncyBhdHRyaWJ1dGVcbiAgICAgICAgICAgIC8vIGAke2hvc3RJZH0uJHtub2RlSWR9LiR7ZGVwdGh9LiR7aW5kZXh9YFxuICAgICAgICAgICAgY2hpbGRJZFNwbHQgPSBjaGlsZE5vZGVUeXBlLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBpZiAoY2hpbGRJZFNwbHRbMF0gPT09IGhvc3RJZCB8fCBjaGlsZElkU3BsdFswXSA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRWTm9kZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgJGZsYWdzJDogMCxcbiAgICAgICAgICAgICAgICAgICAgJGhvc3RJZCQ6IGNoaWxkSWRTcGx0WzBdLFxuICAgICAgICAgICAgICAgICAgICAkbm9kZUlkJDogY2hpbGRJZFNwbHRbMV0sXG4gICAgICAgICAgICAgICAgICAgICRkZXB0aCQ6IGNoaWxkSWRTcGx0WzJdLFxuICAgICAgICAgICAgICAgICAgICAkaW5kZXgkOiBjaGlsZElkU3BsdFszXSxcbiAgICAgICAgICAgICAgICAgICAgJHRhZyQ6IG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAkZWxtJDogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgJGF0dHJzJDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJGNoaWxkcmVuJDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJGtleSQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICRuYW1lJDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJHRleHQkOiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2hpbGRSZW5kZXJOb2Rlcy5wdXNoKGNoaWxkVk5vZGUpO1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBuZXcgY2hpbGQgdm5vZGVcbiAgICAgICAgICAgICAgICAvLyBzbyBlbnN1cmUgaXRzIHBhcmVudCB2bm9kZSBoYXMgdGhlIHZjaGlsZHJlbiBhcnJheVxuICAgICAgICAgICAgICAgIGlmICghcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGFkZCBvdXIgY2hpbGQgdm5vZGUgdG8gYSBzcGVjaWZpYyBpbmRleCBvZiB0aGUgdm5vZGUncyBjaGlsZHJlblxuICAgICAgICAgICAgICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiRbY2hpbGRWTm9kZS4kaW5kZXgkXSA9IGNoaWxkVk5vZGU7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBub3cgdGhlIG5ldyBwYXJlbnQgdm5vZGUgZm9yIGFsbCB0aGUgbmV4dCBjaGlsZCBjaGVja3NcbiAgICAgICAgICAgICAgICBwYXJlbnRWTm9kZSA9IGNoaWxkVk5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKHNoYWRvd1Jvb3ROb2RlcyAmJiBjaGlsZFZOb2RlLiRkZXB0aCQgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICBzaGFkb3dSb290Tm9kZXNbY2hpbGRWTm9kZS4kaW5kZXgkXSA9IGNoaWxkVk5vZGUuJGVsbSQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHJlY3Vyc2l2ZWx5IGRyaWxsIGRvd24sIGVuZCB0byBzdGFydCBzbyB3ZSBjYW4gcmVtb3ZlIG5vZGVzXG4gICAgICAgIGZvciAoaSA9IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY2xpZW50SHlkcmF0ZShwYXJlbnRWTm9kZSwgY2hpbGRSZW5kZXJOb2Rlcywgc2xvdE5vZGVzLCBzaGFkb3dSb290Tm9kZXMsIGhvc3RFbG0sIG5vZGUuY2hpbGROb2Rlc1tpXSwgaG9zdElkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5zaGFkb3dSb290KSB7XG4gICAgICAgICAgICAvLyBrZWVwIGRyaWxsaW5nIGRvd24gdGhyb3VnaCB0aGUgc2hhZG93IHJvb3Qgbm9kZXNcbiAgICAgICAgICAgIGZvciAoaSA9IG5vZGUuc2hhZG93Um9vdC5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgY2xpZW50SHlkcmF0ZShwYXJlbnRWTm9kZSwgY2hpbGRSZW5kZXJOb2Rlcywgc2xvdE5vZGVzLCBzaGFkb3dSb290Tm9kZXMsIGhvc3RFbG0sIG5vZGUuc2hhZG93Um9vdC5jaGlsZE5vZGVzW2ldLCBob3N0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogTk9ERV9UWVBFLkNvbW1lbnROb2RlICovKSB7XG4gICAgICAgIC8vIGAke0NPTU1FTlRfVFlQRX0uJHtob3N0SWR9LiR7bm9kZUlkfS4ke2RlcHRofS4ke2luZGV4fWBcbiAgICAgICAgY2hpbGRJZFNwbHQgPSBub2RlLm5vZGVWYWx1ZS5zcGxpdCgnLicpO1xuICAgICAgICBpZiAoY2hpbGRJZFNwbHRbMV0gPT09IGhvc3RJZCB8fCBjaGlsZElkU3BsdFsxXSA9PT0gJzAnKSB7XG4gICAgICAgICAgICAvLyBjb21tZW50IG5vZGUgZm9yIGVpdGhlciB0aGUgaG9zdCBpZCBvciBhIDAgaG9zdCBpZFxuICAgICAgICAgICAgY2hpbGROb2RlVHlwZSA9IGNoaWxkSWRTcGx0WzBdO1xuICAgICAgICAgICAgY2hpbGRWTm9kZSA9IHtcbiAgICAgICAgICAgICAgICAkZmxhZ3MkOiAwLFxuICAgICAgICAgICAgICAgICRob3N0SWQkOiBjaGlsZElkU3BsdFsxXSxcbiAgICAgICAgICAgICAgICAkbm9kZUlkJDogY2hpbGRJZFNwbHRbMl0sXG4gICAgICAgICAgICAgICAgJGRlcHRoJDogY2hpbGRJZFNwbHRbM10sXG4gICAgICAgICAgICAgICAgJGluZGV4JDogY2hpbGRJZFNwbHRbNF0sXG4gICAgICAgICAgICAgICAgJGVsbSQ6IG5vZGUsXG4gICAgICAgICAgICAgICAgJGF0dHJzJDogbnVsbCxcbiAgICAgICAgICAgICAgICAkY2hpbGRyZW4kOiBudWxsLFxuICAgICAgICAgICAgICAgICRrZXkkOiBudWxsLFxuICAgICAgICAgICAgICAgICRuYW1lJDogbnVsbCxcbiAgICAgICAgICAgICAgICAkdGFnJDogbnVsbCxcbiAgICAgICAgICAgICAgICAkdGV4dCQ6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZVR5cGUgPT09IFRFWFRfTk9ERV9JRCkge1xuICAgICAgICAgICAgICAgIGNoaWxkVk5vZGUuJGVsbSQgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZFZOb2RlLiRlbG0kICYmIGNoaWxkVk5vZGUuJGVsbSQubm9kZVR5cGUgPT09IDMgLyogTk9ERV9UWVBFLlRleHROb2RlICovKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkVk5vZGUuJHRleHQkID0gY2hpbGRWTm9kZS4kZWxtJC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRSZW5kZXJOb2Rlcy5wdXNoKGNoaWxkVk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIHRleHQgY29tbWVudCBzaW5jZSBpdCdzIG5vIGxvbmdlciBuZWVkZWRcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRWTm9kZS4kY2hpbGRyZW4kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kID0gW107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoYWRvd1Jvb3ROb2RlcyAmJiBjaGlsZFZOb2RlLiRkZXB0aCQgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93Um9vdE5vZGVzW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlLiRlbG0kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGRWTm9kZS4kaG9zdElkJCA9PT0gaG9zdElkKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjb21tZW50IG5vZGUgaXMgc3BlY2lmY2FsbHkgZm9yIHRoaXMgaG9zdCBpZFxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVUeXBlID09PSBTTE9UX05PREVfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYCR7U0xPVF9OT0RFX0lEfS4ke2hvc3RJZH0uJHtub2RlSWR9LiR7ZGVwdGh9LiR7aW5kZXh9LiR7c2xvdE5hbWV9YDtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRWTm9kZS4kdGFnJCA9ICdzbG90JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkSWRTcGx0WzVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlWydzLXNuJ10gPSBjaGlsZFZOb2RlLiRuYW1lJCA9IGNoaWxkSWRTcGx0WzVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsncy1zbiddID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbm9kZVsncy1zciddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiBzaGFkb3dSb290Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyb3dzZXIgc3VwcG9ydCBzaGFkb3dSb290IGFuZCB0aGlzIGlzIGEgc2hhZG93IGRvbSBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBhY3R1YWwgc2xvdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZOb2RlLiRlbG0kID0gZG9jLmNyZWF0ZUVsZW1lbnQoY2hpbGRWTm9kZS4kdGFnJCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRWTm9kZS4kbmFtZSQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHNsb3QgbmFtZSBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZFZOb2RlLiRlbG0kLnNldEF0dHJpYnV0ZSgnbmFtZScsIGNoaWxkVk5vZGUuJG5hbWUkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluc2VydCB0aGUgbmV3IHNsb3QgZWxlbWVudCBiZWZvcmUgdGhlIHNsb3QgY29tbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjaGlsZFZOb2RlLiRlbG0kLCBub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgc2xvdCBjb21tZW50IHNpbmNlIGl0J3Mgbm90IG5lZWRlZCBmb3Igc2hhZG93XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkVk5vZGUuJGRlcHRoJCA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93Um9vdE5vZGVzW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlLiRlbG0kO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNsb3ROb2Rlcy5wdXNoKGNoaWxkVk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudFZOb2RlLiRjaGlsZHJlbiQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZE5vZGVUeXBlID09PSBDT05URU5UX1JFRl9JRCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBgJHtDT05URU5UX1JFRl9JRH0uJHtob3N0SWR9YDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiBzaGFkb3dSb290Tm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgY29udGVudCByZWYgY29tbWVudCBzaW5jZSBpdCdzIG5vdCBuZWVkZWQgZm9yIHNoYWRvd1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdEVsbVsncy1jciddID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ3MtY24nXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAocGFyZW50Vk5vZGUgJiYgcGFyZW50Vk5vZGUuJHRhZyQgPT09ICdzdHlsZScpIHtcbiAgICAgICAgY29uc3Qgdm5vZGUgPSBuZXdWTm9kZShudWxsLCBub2RlLnRleHRDb250ZW50KTtcbiAgICAgICAgdm5vZGUuJGVsbSQgPSBub2RlO1xuICAgICAgICB2bm9kZS4kaW5kZXgkID0gJzAnO1xuICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kID0gW3Zub2RlXTtcbiAgICB9XG59O1xuY29uc3QgaW5pdGlhbGl6ZURvY3VtZW50SHlkcmF0ZSA9IChub2RlLCBvcmdMb2NOb2RlcykgPT4ge1xuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLykge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpbml0aWFsaXplRG9jdW1lbnRIeWRyYXRlKG5vZGUuY2hpbGROb2Rlc1tpXSwgb3JnTG9jTm9kZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBub2RlLnNoYWRvd1Jvb3QuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGluaXRpYWxpemVEb2N1bWVudEh5ZHJhdGUobm9kZS5zaGFkb3dSb290LmNoaWxkTm9kZXNbaV0sIG9yZ0xvY05vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChub2RlLm5vZGVUeXBlID09PSA4IC8qIE5PREVfVFlQRS5Db21tZW50Tm9kZSAqLykge1xuICAgICAgICBjb25zdCBjaGlsZElkU3BsdCA9IG5vZGUubm9kZVZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICAgIGlmIChjaGlsZElkU3BsdFswXSA9PT0gT1JHX0xPQ0FUSU9OX0lEKSB7XG4gICAgICAgICAgICBvcmdMb2NOb2Rlcy5zZXQoY2hpbGRJZFNwbHRbMV0gKyAnLicgKyBjaGlsZElkU3BsdFsyXSwgbm9kZSk7XG4gICAgICAgICAgICBub2RlLm5vZGVWYWx1ZSA9ICcnO1xuICAgICAgICAgICAgLy8gdXNlZnVsIHRvIGtub3cgaWYgdGhlIG9yaWdpbmFsIGxvY2F0aW9uIGlzXG4gICAgICAgICAgICAvLyB0aGUgcm9vdCBsaWdodC1kb20gb2YgYSBzaGFkb3cgZG9tIGNvbXBvbmVudFxuICAgICAgICAgICAgbm9kZVsncy1lbiddID0gY2hpbGRJZFNwbHRbM107XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gUHJpdmF0ZVxuY29uc3QgY29tcHV0ZU1vZGUgPSAoZWxtKSA9PiBtb2RlUmVzb2x1dGlvbkNoYWluLm1hcCgoaCkgPT4gaChlbG0pKS5maW5kKChtKSA9PiAhIW0pO1xuLy8gUHVibGljXG5jb25zdCBzZXRNb2RlID0gKGhhbmRsZXIpID0+IG1vZGVSZXNvbHV0aW9uQ2hhaW4ucHVzaChoYW5kbGVyKTtcbmNvbnN0IGdldE1vZGUgPSAocmVmKSA9PiBnZXRIb3N0UmVmKHJlZikuJG1vZGVOYW1lJDtcbi8qKlxuICogUGFyc2UgYSBuZXcgcHJvcGVydHkgdmFsdWUgZm9yIGEgZ2l2ZW4gcHJvcGVydHkgdHlwZS5cbiAqXG4gKiBXaGlsZSB0aGUgcHJvcCB2YWx1ZSBjYW4gcmVhc29uYWJseSBiZSBleHBlY3RlZCB0byBiZSBvZiBgYW55YCB0eXBlIGFzIGZhciBhcyBUeXBlU2NyaXB0J3MgdHlwZSBjaGVja2VyIGlzIGNvbmNlcm5lZCxcbiAqIGl0IGlzIG5vdCBzYWZlIHRvIGFzc3VtZSB0aGF0IHRoZSBzdHJpbmcgcmV0dXJuZWQgYnkgZXZhbHVhdGluZyBgdHlwZW9mIHByb3BWYWx1ZWAgbWF0Y2hlczpcbiAqICAgMS4gYGFueWAsIHRoZSB0eXBlIGdpdmVuIHRvIGBwcm9wVmFsdWVgIGluIHRoZSBmdW5jdGlvbiBzaWduYXR1cmVcbiAqICAgMi4gdGhlIHR5cGUgc3RvcmVkIGZyb20gYHByb3BUeXBlYC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHByb3ZpZGVzIHRoZSBjYXBhYmlsaXR5IHRvIHBhcnNlL2NvZXJjZSBhIHByb3BlcnR5J3MgdmFsdWUgdG8gcG90ZW50aWFsbHkgYW55IG90aGVyIEphdmFTY3JpcHQgdHlwZS5cbiAqXG4gKiBQcm9wZXJ0eSB2YWx1ZXMgcmVwcmVzZW50ZWQgaW4gVFNYIHByZXNlcnZlIHRoZWlyIHR5cGUgaW5mb3JtYXRpb24uIEluIHRoZSBleGFtcGxlIGJlbG93LCB0aGUgbnVtYmVyIDAgaXMgcGFzc2VkIHRvXG4gKiBhIGNvbXBvbmVudC4gVGhpcyBgcHJvcFZhbHVlYCB3aWxsIHByZXNlcnZlIGl0cyB0eXBlIGluZm9ybWF0aW9uIChgdHlwZW9mIHByb3BWYWx1ZSA9PT0gJ251bWJlcidgKS4gTm90ZSB0aGF0IGlzXG4gKiBiYXNlZCBvbiB0aGUgdHlwZSBvZiB0aGUgdmFsdWUgYmVpbmcgcGFzc2VkIGluLCBub3QgdGhlIHR5cGUgZGVjbGFyZWQgb2YgdGhlIGNsYXNzIG1lbWJlciBkZWNvcmF0ZWQgd2l0aCBgQFByb3BgLlxuICogYGBgdHN4XG4gKiA8bXktY21wIHByb3AtdmFsPXswfT48L215LWNtcD5cbiAqIGBgYFxuICpcbiAqIEhUTUwgcHJvcCB2YWx1ZXMgb24gdGhlIG90aGVyIGhhbmQsIHdpbGwgYWx3YXlzIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHByb3BWYWx1ZSB0aGUgbmV3IHZhbHVlIHRvIGNvZXJjZSB0byBzb21lIHR5cGVcbiAqIEBwYXJhbSBwcm9wVHlwZSB0aGUgdHlwZSBvZiB0aGUgcHJvcCwgZXhwcmVzc2VkIGFzIGEgYmluYXJ5IG51bWJlclxuICogQHJldHVybnMgdGhlIHBhcnNlZC9jb2VyY2VkIHZhbHVlXG4gKi9cbmNvbnN0IHBhcnNlUHJvcGVydHlWYWx1ZSA9IChwcm9wVmFsdWUsIHByb3BUeXBlKSA9PiB7XG4gICAgLy8gZW5zdXJlIHRoaXMgdmFsdWUgaXMgb2YgdGhlIGNvcnJlY3QgcHJvcCB0eXBlXG4gICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmICFpc0NvbXBsZXhUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgaWYgKEJVSUxELnByb3BCb29sZWFuICYmIHByb3BUeXBlICYgNCAvKiBNRU1CRVJfRkxBR1MuQm9vbGVhbiAqLykge1xuICAgICAgICAgICAgLy8gcGVyIHRoZSBIVE1MIHNwZWMsIGFueSBzdHJpbmcgdmFsdWUgbWVhbnMgaXQgaXMgYSBib29sZWFuIHRydWUgdmFsdWVcbiAgICAgICAgICAgIC8vIGJ1dCB3ZSdsbCBjaGVhdCBoZXJlIGFuZCBzYXkgdGhhdCB0aGUgc3RyaW5nIFwiZmFsc2VcIiBpcyB0aGUgYm9vbGVhbiBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogcHJvcFZhbHVlID09PSAnJyB8fCAhIXByb3BWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQucHJvcE51bWJlciAmJiBwcm9wVHlwZSAmIDIgLyogTUVNQkVSX0ZMQUdTLk51bWJlciAqLykge1xuICAgICAgICAgICAgLy8gZm9yY2UgaXQgdG8gYmUgYSBudW1iZXJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHByb3BWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELnByb3BTdHJpbmcgJiYgcHJvcFR5cGUgJiAxIC8qIE1FTUJFUl9GTEFHUy5TdHJpbmcgKi8pIHtcbiAgICAgICAgICAgIC8vIGNvdWxkIGhhdmUgYmVlbiBwYXNzZWQgYXMgYSBudW1iZXIgb3IgYm9vbGVhblxuICAgICAgICAgICAgLy8gYnV0IHdlIHN0aWxsIHdhbnQgaXQgYXMgYSBzdHJpbmdcbiAgICAgICAgICAgIHJldHVybiBTdHJpbmcocHJvcFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWR1bmRhbnQgcmV0dXJuIGhlcmUgZm9yIGJldHRlciBtaW5pZmljYXRpb25cbiAgICAgICAgcmV0dXJuIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgLy8gbm90IHN1cmUgZXhhY3RseSB3aGF0IHR5cGUgd2Ugd2FudFxuICAgIC8vIHNvIG5vIG5lZWQgdG8gY2hhbmdlIHRvIGEgZGlmZmVyZW50IHR5cGVcbiAgICByZXR1cm4gcHJvcFZhbHVlO1xufTtcbmNvbnN0IGdldEVsZW1lbnQgPSAocmVmKSA9PiAoQlVJTEQubGF6eUxvYWQgPyBnZXRIb3N0UmVmKHJlZikuJGhvc3RFbGVtZW50JCA6IHJlZik7XG5jb25zdCBjcmVhdGVFdmVudCA9IChyZWYsIG5hbWUsIGZsYWdzKSA9PiB7XG4gICAgY29uc3QgZWxtID0gZ2V0RWxlbWVudChyZWYpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGVtaXQ6IChkZXRhaWwpID0+IHtcbiAgICAgICAgICAgIGlmIChCVUlMRC5pc0RldiAmJiAhZWxtLmlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZURldldhcm4oYFRoZSBcIiR7bmFtZX1cIiBldmVudCB3YXMgZW1pdHRlZCwgYnV0IHRoZSBkaXNwYXRjaGVyIG5vZGUgaXMgbm8gbG9uZ2VyIGNvbm5lY3RlZCB0byB0aGUgZG9tLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVtaXRFdmVudChlbG0sIG5hbWUsIHtcbiAgICAgICAgICAgICAgICBidWJibGVzOiAhIShmbGFncyAmIDQgLyogRVZFTlRfRkxBR1MuQnViYmxlcyAqLyksXG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6ICEhKGZsYWdzICYgMiAvKiBFVkVOVF9GTEFHUy5Db21wb3NlZCAqLyksXG4gICAgICAgICAgICAgICAgY2FuY2VsYWJsZTogISEoZmxhZ3MgJiAxIC8qIEVWRU5UX0ZMQUdTLkNhbmNlbGxhYmxlICovKSxcbiAgICAgICAgICAgICAgICBkZXRhaWwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufTtcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNyZWF0ZSAmIGRpc3BhdGNoIGEgY3VzdG9tIEV2ZW50IG9uIGEgcHJvdmlkZWQgdGFyZ2V0XG4gKiBAcGFyYW0gZWxtIHRoZSB0YXJnZXQgb2YgdGhlIEV2ZW50XG4gKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSB0byBnaXZlIHRoZSBjdXN0b20gRXZlbnRcbiAqIEBwYXJhbSBvcHRzIG9wdGlvbnMgZm9yIGNvbmZpZ3VyaW5nIGEgY3VzdG9tIEV2ZW50XG4gKiBAcmV0dXJucyB0aGUgY3VzdG9tIEV2ZW50XG4gKi9cbmNvbnN0IGVtaXRFdmVudCA9IChlbG0sIG5hbWUsIG9wdHMpID0+IHtcbiAgICBjb25zdCBldiA9IHBsdC5jZShuYW1lLCBvcHRzKTtcbiAgICBlbG0uZGlzcGF0Y2hFdmVudChldik7XG4gICAgcmV0dXJuIGV2O1xufTtcbmNvbnN0IHJvb3RBcHBsaWVkU3R5bGVzID0gLypAX19QVVJFX18qLyBuZXcgV2Vha01hcCgpO1xuY29uc3QgcmVnaXN0ZXJTdHlsZSA9IChzY29wZUlkLCBjc3NUZXh0LCBhbGxvd0NTKSA9PiB7XG4gICAgbGV0IHN0eWxlID0gc3R5bGVzLmdldChzY29wZUlkKTtcbiAgICBpZiAoc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMgJiYgYWxsb3dDUykge1xuICAgICAgICBzdHlsZSA9IChzdHlsZSB8fCBuZXcgQ1NTU3R5bGVTaGVldCgpKTtcbiAgICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHN0eWxlID0gY3NzVGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlLnJlcGxhY2VTeW5jKGNzc1RleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdHlsZSA9IGNzc1RleHQ7XG4gICAgfVxuICAgIHN0eWxlcy5zZXQoc2NvcGVJZCwgc3R5bGUpO1xufTtcbmNvbnN0IGFkZFN0eWxlID0gKHN0eWxlQ29udGFpbmVyTm9kZSwgY21wTWV0YSwgbW9kZSwgaG9zdEVsbSkgPT4ge1xuICAgIHZhciBfYTtcbiAgICBsZXQgc2NvcGVJZCA9IGdldFNjb3BlSWQoY21wTWV0YSwgbW9kZSk7XG4gICAgY29uc3Qgc3R5bGUgPSBzdHlsZXMuZ2V0KHNjb3BlSWQpO1xuICAgIGlmICghQlVJTEQuYXR0YWNoU3R5bGVzKSB7XG4gICAgICAgIHJldHVybiBzY29wZUlkO1xuICAgIH1cbiAgICAvLyBpZiBhbiBlbGVtZW50IGlzIE5PVCBjb25uZWN0ZWQgdGhlbiBnZXRSb290Tm9kZSgpIHdpbGwgcmV0dXJuIHRoZSB3cm9uZyByb290IG5vZGVcbiAgICAvLyBzbyB0aGUgZmFsbGJhY2sgaXMgdG8gYWx3YXlzIHVzZSB0aGUgZG9jdW1lbnQgZm9yIHRoZSByb290IG5vZGUgaW4gdGhvc2UgY2FzZXNcbiAgICBzdHlsZUNvbnRhaW5lck5vZGUgPSBzdHlsZUNvbnRhaW5lck5vZGUubm9kZVR5cGUgPT09IDExIC8qIE5PREVfVFlQRS5Eb2N1bWVudEZyYWdtZW50ICovID8gc3R5bGVDb250YWluZXJOb2RlIDogZG9jO1xuICAgIGlmIChzdHlsZSkge1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc3R5bGVDb250YWluZXJOb2RlID0gc3R5bGVDb250YWluZXJOb2RlLmhlYWQgfHwgc3R5bGVDb250YWluZXJOb2RlO1xuICAgICAgICAgICAgbGV0IGFwcGxpZWRTdHlsZXMgPSByb290QXBwbGllZFN0eWxlcy5nZXQoc3R5bGVDb250YWluZXJOb2RlKTtcbiAgICAgICAgICAgIGxldCBzdHlsZUVsbTtcbiAgICAgICAgICAgIGlmICghYXBwbGllZFN0eWxlcykge1xuICAgICAgICAgICAgICAgIHJvb3RBcHBsaWVkU3R5bGVzLnNldChzdHlsZUNvbnRhaW5lck5vZGUsIChhcHBsaWVkU3R5bGVzID0gbmV3IFNldCgpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFwcGxpZWRTdHlsZXMuaGFzKHNjb3BlSWQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELmh5ZHJhdGVDbGllbnRTaWRlICYmXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlQ29udGFpbmVyTm9kZS5ob3N0ICYmXG4gICAgICAgICAgICAgICAgICAgIChzdHlsZUVsbSA9IHN0eWxlQ29udGFpbmVyTm9kZS5xdWVyeVNlbGVjdG9yKGBbJHtIWURSQVRFRF9TVFlMRV9JRH09XCIke3Njb3BlSWR9XCJdYCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgb25seSBoYXBwZW5pbmcgb24gbmF0aXZlIHNoYWRvdy1kb20sIGRvIG5vdCBuZWVkcyBDU1MgdmFyIHNoaW1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0uaW5uZXJIVE1MID0gc3R5bGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQlVJTEQuY3NzVmFyU2hpbSAmJiBwbHQuJGNzc1NoaW0kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUVsbSA9IHBsdC4kY3NzU2hpbSQuY3JlYXRlSG9zdFN0eWxlKGhvc3RFbG0sIHNjb3BlSWQsIHN0eWxlLCAhIShjbXBNZXRhLiRmbGFncyQgJiAxMCAvKiBDTVBfRkxBR1MubmVlZHNTY29wZWRFbmNhcHN1bGF0aW9uICovKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTY29wZUlkID0gc3R5bGVFbG1bJ3Mtc2MnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdTY29wZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVJZCA9IG5ld1Njb3BlSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBhZGQgdGhpcyBzdHlsZUlEIHRvIHRoZSBhcHBsaWVkU3R5bGVzIFNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIHRoZSBjc3NWYXJTaGltIG1pZ2h0IG5lZWQgdG8gYXBwbHkgc2V2ZXJhbCBkaWZmZXJlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHlsZXNoZWV0cyBmb3IgdGhlIHNhbWUgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwbGllZFN0eWxlcyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUVsbSA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0uaW5uZXJIVE1MID0gc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgQ1NQIG5vbmNlIHRvIHRoZSBzdHlsZSB0YWcgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vbmNlID0gKF9hID0gcGx0LiRub25jZSQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHF1ZXJ5Tm9uY2VNZXRhVGFnQ29udGVudChkb2MpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9uY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0uc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgfHwgQlVJTEQuaG90TW9kdWxlUmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtLnNldEF0dHJpYnV0ZShIWURSQVRFRF9TVFlMRV9JRCwgc2NvcGVJZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGVDb250YWluZXJOb2RlLmluc2VydEJlZm9yZShzdHlsZUVsbSwgc3R5bGVDb250YWluZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoJ2xpbmsnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhcHBsaWVkU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGxpZWRTdHlsZXMuYWRkKHNjb3BlSWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChCVUlMRC5jb25zdHJ1Y3RhYmxlQ1NTICYmICFzdHlsZUNvbnRhaW5lck5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLmluY2x1ZGVzKHN0eWxlKSkge1xuICAgICAgICAgICAgc3R5bGVDb250YWluZXJOb2RlLmFkb3B0ZWRTdHlsZVNoZWV0cyA9IFsuLi5zdHlsZUNvbnRhaW5lck5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzLCBzdHlsZV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNjb3BlSWQ7XG59O1xuY29uc3QgYXR0YWNoU3R5bGVzID0gKGhvc3RSZWYpID0+IHtcbiAgICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gICAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICAgIGNvbnN0IGZsYWdzID0gY21wTWV0YS4kZmxhZ3MkO1xuICAgIGNvbnN0IGVuZEF0dGFjaFN0eWxlcyA9IGNyZWF0ZVRpbWUoJ2F0dGFjaFN0eWxlcycsIGNtcE1ldGEuJHRhZ05hbWUkKTtcbiAgICBjb25zdCBzY29wZUlkID0gYWRkU3R5bGUoQlVJTEQuc2hhZG93RG9tICYmIHN1cHBvcnRzU2hhZG93ICYmIGVsbS5zaGFkb3dSb290ID8gZWxtLnNoYWRvd1Jvb3QgOiBlbG0uZ2V0Um9vdE5vZGUoKSwgY21wTWV0YSwgaG9zdFJlZi4kbW9kZU5hbWUkLCBlbG0pO1xuICAgIGlmICgoQlVJTEQuc2hhZG93RG9tIHx8IEJVSUxELnNjb3BlZCkgJiYgQlVJTEQuY3NzQW5ub3RhdGlvbnMgJiYgZmxhZ3MgJiAxMCAvKiBDTVBfRkxBR1MubmVlZHNTY29wZWRFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgIC8vIG9ubHkgcmVxdWlyZWQgd2hlbiB3ZSdyZSBOT1QgdXNpbmcgbmF0aXZlIHNoYWRvdyBkb20gKHNsb3QpXG4gICAgICAgIC8vIG9yIHRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlIHNoYWRvdyBkb21cbiAgICAgICAgLy8gYW5kIHRoaXMgaG9zdCBlbGVtZW50IHdhcyBOT1QgY3JlYXRlZCB3aXRoIFNTUlxuICAgICAgICAvLyBsZXQncyBwaWNrIG91dCB0aGUgaW5uZXIgY29udGVudCBmb3Igc2xvdCBwcm9qZWN0aW9uXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5vZGUgdG8gcmVwcmVzZW50IHdoZXJlIHRoZSBvcmlnaW5hbFxuICAgICAgICAvLyBjb250ZW50IHdhcyBmaXJzdCBwbGFjZWQsIHdoaWNoIGlzIHVzZWZ1bCBsYXRlciBvblxuICAgICAgICAvLyBET00gV1JJVEUhIVxuICAgICAgICBlbG1bJ3Mtc2MnXSA9IHNjb3BlSWQ7XG4gICAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKHNjb3BlSWQgKyAnLWgnKTtcbiAgICAgICAgaWYgKEJVSUxELnNjb3BlZCAmJiBmbGFncyAmIDIgLyogQ01QX0ZMQUdTLnNjb3BlZENzc0VuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKHNjb3BlSWQgKyAnLXMnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbmRBdHRhY2hTdHlsZXMoKTtcbn07XG5jb25zdCBnZXRTY29wZUlkID0gKGNtcCwgbW9kZSkgPT4gJ3NjLScgKyAoQlVJTEQubW9kZSAmJiBtb2RlICYmIGNtcC4kZmxhZ3MkICYgMzIgLyogQ01QX0ZMQUdTLmhhc01vZGUgKi8gPyBjbXAuJHRhZ05hbWUkICsgJy0nICsgbW9kZSA6IGNtcC4kdGFnTmFtZSQpO1xuY29uc3QgY29udmVydFNjb3BlZFRvU2hhZG93ID0gKGNzcykgPT4gY3NzLnJlcGxhY2UoL1xcL1xcKiFAKFteXFwvXSspXFwqXFwvW15cXHtdK1xcey9nLCAnJDF7Jyk7XG4vKipcbiAqIFByb2R1Y3Rpb24gc2V0QWNjZXNzb3IoKSBmdW5jdGlvbiBiYXNlZCBvbiBQcmVhY3QgYnlcbiAqIEphc29uIE1pbGxlciAoQGRldmVsb3BpdClcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9wcmVhY3QvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIE1vZGlmaWVkIGZvciBTdGVuY2lsJ3MgY29tcGlsZXIgYW5kIHZkb21cbiAqL1xuY29uc3Qgc2V0QWNjZXNzb3IgPSAoZWxtLCBtZW1iZXJOYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUsIGlzU3ZnLCBmbGFncykgPT4ge1xuICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgbGV0IGlzUHJvcCA9IGlzTWVtYmVySW5FbGVtZW50KGVsbSwgbWVtYmVyTmFtZSk7XG4gICAgICAgIGxldCBsbiA9IG1lbWJlck5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKEJVSUxELnZkb21DbGFzcyAmJiBtZW1iZXJOYW1lID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc0xpc3QgPSBlbG0uY2xhc3NMaXN0O1xuICAgICAgICAgICAgY29uc3Qgb2xkQ2xhc3NlcyA9IHBhcnNlQ2xhc3NMaXN0KG9sZFZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NsYXNzZXMgPSBwYXJzZUNsYXNzTGlzdChuZXdWYWx1ZSk7XG4gICAgICAgICAgICBjbGFzc0xpc3QucmVtb3ZlKC4uLm9sZENsYXNzZXMuZmlsdGVyKChjKSA9PiBjICYmICFuZXdDbGFzc2VzLmluY2x1ZGVzKGMpKSk7XG4gICAgICAgICAgICBjbGFzc0xpc3QuYWRkKC4uLm5ld0NsYXNzZXMuZmlsdGVyKChjKSA9PiBjICYmICFvbGRDbGFzc2VzLmluY2x1ZGVzKGMpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudmRvbVN0eWxlICYmIG1lbWJlck5hbWUgPT09ICdzdHlsZScpIHtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBzdHlsZSBhdHRyaWJ1dGUsIGNzcyBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXNcbiAgICAgICAgICAgIGlmIChCVUlMRC51cGRhdGFibGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdWYWx1ZSB8fCBuZXdWYWx1ZVtwcm9wXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIUJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlICYmIHByb3AuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5zdHlsZS5yZW1vdmVQcm9wZXJ0eShwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5zdHlsZVtwcm9wXSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wIGluIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFvbGRWYWx1ZSB8fCBuZXdWYWx1ZVtwcm9wXSAhPT0gb2xkVmFsdWVbcHJvcF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSAmJiBwcm9wLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCBuZXdWYWx1ZVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0uc3R5bGVbcHJvcF0gPSBuZXdWYWx1ZVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChCVUlMRC52ZG9tS2V5ICYmIG1lbWJlck5hbWUgPT09ICdrZXknKVxuICAgICAgICAgICAgO1xuICAgICAgICBlbHNlIGlmIChCVUlMRC52ZG9tUmVmICYmIG1lbWJlck5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgICAgICAvLyBtaW5pZmllciB3aWxsIGNsZWFuIHRoaXMgdXBcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlKGVsbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQlVJTEQudmRvbUxpc3RlbmVyICYmXG4gICAgICAgICAgICAoQlVJTEQubGF6eUxvYWQgPyAhaXNQcm9wIDogIWVsbS5fX2xvb2t1cFNldHRlcl9fKG1lbWJlck5hbWUpKSAmJlxuICAgICAgICAgICAgbWVtYmVyTmFtZVswXSA9PT0gJ28nICYmXG4gICAgICAgICAgICBtZW1iZXJOYW1lWzFdID09PSAnbicpIHtcbiAgICAgICAgICAgIC8vIEV2ZW50IEhhbmRsZXJzXG4gICAgICAgICAgICAvLyBzbyBpZiB0aGUgbWVtYmVyIG5hbWUgc3RhcnRzIHdpdGggXCJvblwiIGFuZCB0aGUgM3JkIGNoYXJhY3RlcnMgaXNcbiAgICAgICAgICAgIC8vIGEgY2FwaXRhbCBsZXR0ZXIsIGFuZCBpdCdzIG5vdCBhbHJlYWR5IGEgbWVtYmVyIG9uIHRoZSBlbGVtZW50LFxuICAgICAgICAgICAgLy8gdGhlbiB3ZSdyZSBhc3N1bWluZyBpdCdzIGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgICAgICBpZiAobWVtYmVyTmFtZVsyXSA9PT0gJy0nKSB7XG4gICAgICAgICAgICAgICAgLy8gb24tIHByZWZpeGVkIGV2ZW50c1xuICAgICAgICAgICAgICAgIC8vIGFsbG93cyB0byBiZSBleHBsaWNpdCBhYm91dCB0aGUgZG9tIGV2ZW50IHRvIGxpc3RlbiB3aXRob3V0IGFueSBtYWdpY1xuICAgICAgICAgICAgICAgIC8vIHVuZGVyIHRoZSBob29kOlxuICAgICAgICAgICAgICAgIC8vIDxteS1jbXAgb24tY2xpY2s+IC8vIGxpc3RlbnMgZm9yIFwiY2xpY2tcIlxuICAgICAgICAgICAgICAgIC8vIDxteS1jbXAgb24tQ2xpY2s+IC8vIGxpc3RlbnMgZm9yIFwiQ2xpY2tcIlxuICAgICAgICAgICAgICAgIC8vIDxteS1jbXAgb24taW9uQ2hhbmdlPiAvLyBsaXN0ZW5zIGZvciBcImlvbkNoYW5nZVwiXG4gICAgICAgICAgICAgICAgLy8gPG15LWNtcCBvbi1FVkVOVFM+IC8vIGxpc3RlbnMgZm9yIFwiRVZFTlRTXCJcbiAgICAgICAgICAgICAgICBtZW1iZXJOYW1lID0gbWVtYmVyTmFtZS5zbGljZSgzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGlzTWVtYmVySW5FbGVtZW50KHdpbiwgbG4pKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RhbmRhcmQgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB0aGUgSlNYIGF0dHJpYnV0ZSBjb3VsZCBoYXZlIGJlZW4gXCJvbk1vdXNlT3ZlclwiIGFuZCB0aGVcbiAgICAgICAgICAgICAgICAvLyBtZW1iZXIgbmFtZSBcIm9ubW91c2VvdmVyXCIgaXMgb24gdGhlIHdpbmRvdydzIHByb3RvdHlwZVxuICAgICAgICAgICAgICAgIC8vIHNvIGxldCdzIGFkZCB0aGUgbGlzdGVuZXIgXCJtb3VzZW92ZXJcIiwgd2hpY2ggaXMgYWxsIGxvd2VyY2FzZWRcbiAgICAgICAgICAgICAgICBtZW1iZXJOYW1lID0gbG4uc2xpY2UoMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBjdXN0b20gZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB0aGUgSlNYIGF0dHJpYnV0ZSBjb3VsZCBoYXZlIGJlZW4gXCJvbk15Q3VzdG9tRXZlbnRcIlxuICAgICAgICAgICAgICAgIC8vIHNvIGxldCdzIHRyaW0gb2ZmIHRoZSBcIm9uXCIgcHJlZml4IGFuZCBsb3dlcmNhc2UgdGhlIGZpcnN0IGNoYXJhY3RlclxuICAgICAgICAgICAgICAgIC8vIGFuZCBhZGQgdGhlIGxpc3RlbmVyIFwibXlDdXN0b21FdmVudFwiXG4gICAgICAgICAgICAgICAgLy8gZXhjZXB0IGZvciB0aGUgZmlyc3QgY2hhcmFjdGVyLCB3ZSBrZWVwIHRoZSBldmVudCBuYW1lIGNhc2VcbiAgICAgICAgICAgICAgICBtZW1iZXJOYW1lID0gbG5bMl0gKyBtZW1iZXJOYW1lLnNsaWNlKDMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcGx0LnJlbChlbG0sIG1lbWJlck5hbWUsIG9sZFZhbHVlLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwbHQuYWVsKGVsbSwgbWVtYmVyTmFtZSwgbmV3VmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChCVUlMRC52ZG9tUHJvcE9yQXR0cikge1xuICAgICAgICAgICAgLy8gU2V0IHByb3BlcnR5IGlmIGl0IGV4aXN0cyBhbmQgaXQncyBub3QgYSBTVkdcbiAgICAgICAgICAgIGNvbnN0IGlzQ29tcGxleCA9IGlzQ29tcGxleFR5cGUobmV3VmFsdWUpO1xuICAgICAgICAgICAgaWYgKChpc1Byb3AgfHwgKGlzQ29tcGxleCAmJiBuZXdWYWx1ZSAhPT0gbnVsbCkpICYmICFpc1N2Zykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZWxtLnRhZ05hbWUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbiA9IG5ld1ZhbHVlID09IG51bGwgPyAnJyA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgU2FmYXJpLCBtb3ZpbmcgdGhlIDxpbnB1dD4gY2FyZXQgd2hlbiByZS1hc3NpZ25pbmcgdGhlIHNhbWUgdmFsdWVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVtYmVyTmFtZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNQcm9wID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChvbGRWYWx1ZSA9PSBudWxsIHx8IGVsbVttZW1iZXJOYW1lXSAhPSBuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxtW21lbWJlck5hbWVdID0gbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTmVlZCB0byBtYW51YWxseSB1cGRhdGUgYXR0cmlidXRlIGlmOlxuICAgICAgICAgICAgICogLSBtZW1iZXJOYW1lIGlzIG5vdCBhbiBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAqIC0gaWYgd2UgYXJlIHJlbmRlcmluZyB0aGUgaG9zdCBlbGVtZW50IGluIG9yZGVyIHRvIHJlZmxlY3QgYXR0cmlidXRlXG4gICAgICAgICAgICAgKiAtIGlmIGl0J3MgYSBTVkcsIHNpbmNlIHByb3BlcnRpZXMgbWlnaHQgbm90IHdvcmsgaW4gPHN2Zz5cbiAgICAgICAgICAgICAqIC0gaWYgdGhlIG5ld1ZhbHVlIGlzIG51bGwvdW5kZWZpbmVkIG9yICdmYWxzZScuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGxldCB4bGluayA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKEJVSUxELnZkb21YbGluaykge1xuICAgICAgICAgICAgICAgIGlmIChsbiAhPT0gKGxuID0gbG4ucmVwbGFjZSgvXnhsaW5rXFw6Py8sICcnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVtYmVyTmFtZSA9IGxuO1xuICAgICAgICAgICAgICAgICAgICB4bGluayA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09IG51bGwgfHwgbmV3VmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld1ZhbHVlICE9PSBmYWxzZSB8fCBlbG0uZ2V0QXR0cmlidXRlKG1lbWJlck5hbWUpID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQlVJTEQudmRvbVhsaW5rICYmIHhsaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlTlMoWExJTktfTlMsIG1lbWJlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZShtZW1iZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKCghaXNQcm9wIHx8IGZsYWdzICYgNCAvKiBWTk9ERV9GTEFHUy5pc0hvc3QgKi8gfHwgaXNTdmcpICYmICFpc0NvbXBsZXgpIHtcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IG5ld1ZhbHVlID09PSB0cnVlID8gJycgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoQlVJTEQudmRvbVhsaW5rICYmIHhsaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGVOUyhYTElOS19OUywgbWVtYmVyTmFtZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShtZW1iZXJOYW1lLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IHBhcnNlQ2xhc3NMaXN0UmVnZXggPSAvXFxzLztcbmNvbnN0IHBhcnNlQ2xhc3NMaXN0ID0gKHZhbHVlKSA9PiAoIXZhbHVlID8gW10gOiB2YWx1ZS5zcGxpdChwYXJzZUNsYXNzTGlzdFJlZ2V4KSk7XG5jb25zdCB1cGRhdGVFbGVtZW50ID0gKG9sZFZub2RlLCBuZXdWbm9kZSwgaXNTdmdNb2RlLCBtZW1iZXJOYW1lKSA9PiB7XG4gICAgLy8gaWYgdGhlIGVsZW1lbnQgcGFzc2VkIGluIGlzIGEgc2hhZG93IHJvb3QsIHdoaWNoIGlzIGEgZG9jdW1lbnQgZnJhZ21lbnRcbiAgICAvLyB0aGVuIHdlIHdhbnQgdG8gYmUgYWRkaW5nIGF0dHJzL3Byb3BzIHRvIHRoZSBzaGFkb3cgcm9vdCdzIFwiaG9zdFwiIGVsZW1lbnRcbiAgICAvLyBpZiBpdCdzIG5vdCBhIHNoYWRvdyByb290LCB0aGVuIHdlIGFkZCBhdHRycy9wcm9wcyB0byB0aGUgc2FtZSBlbGVtZW50XG4gICAgY29uc3QgZWxtID0gbmV3Vm5vZGUuJGVsbSQubm9kZVR5cGUgPT09IDExIC8qIE5PREVfVFlQRS5Eb2N1bWVudEZyYWdtZW50ICovICYmIG5ld1Zub2RlLiRlbG0kLmhvc3RcbiAgICAgICAgPyBuZXdWbm9kZS4kZWxtJC5ob3N0XG4gICAgICAgIDogbmV3Vm5vZGUuJGVsbSQ7XG4gICAgY29uc3Qgb2xkVm5vZGVBdHRycyA9IChvbGRWbm9kZSAmJiBvbGRWbm9kZS4kYXR0cnMkKSB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgbmV3Vm5vZGVBdHRycyA9IG5ld1Zub2RlLiRhdHRycyQgfHwgRU1QVFlfT0JKO1xuICAgIGlmIChCVUlMRC51cGRhdGFibGUpIHtcbiAgICAgICAgLy8gcmVtb3ZlIGF0dHJpYnV0ZXMgbm8gbG9uZ2VyIHByZXNlbnQgb24gdGhlIHZub2RlIGJ5IHNldHRpbmcgdGhlbSB0byB1bmRlZmluZWRcbiAgICAgICAgZm9yIChtZW1iZXJOYW1lIGluIG9sZFZub2RlQXR0cnMpIHtcbiAgICAgICAgICAgIGlmICghKG1lbWJlck5hbWUgaW4gbmV3Vm5vZGVBdHRycykpIHtcbiAgICAgICAgICAgICAgICBzZXRBY2Nlc3NvcihlbG0sIG1lbWJlck5hbWUsIG9sZFZub2RlQXR0cnNbbWVtYmVyTmFtZV0sIHVuZGVmaW5lZCwgaXNTdmdNb2RlLCBuZXdWbm9kZS4kZmxhZ3MkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBhZGQgbmV3ICYgdXBkYXRlIGNoYW5nZWQgYXR0cmlidXRlc1xuICAgIGZvciAobWVtYmVyTmFtZSBpbiBuZXdWbm9kZUF0dHJzKSB7XG4gICAgICAgIHNldEFjY2Vzc29yKGVsbSwgbWVtYmVyTmFtZSwgb2xkVm5vZGVBdHRyc1ttZW1iZXJOYW1lXSwgbmV3Vm5vZGVBdHRyc1ttZW1iZXJOYW1lXSwgaXNTdmdNb2RlLCBuZXdWbm9kZS4kZmxhZ3MkKTtcbiAgICB9XG59O1xuLyoqXG4gKiBDcmVhdGUgYSBET00gTm9kZSBjb3JyZXNwb25kaW5nIHRvIG9uZSBvZiB0aGUgY2hpbGRyZW4gb2YgYSBnaXZlbiBWTm9kZS5cbiAqXG4gKiBAcGFyYW0gb2xkUGFyZW50Vk5vZGUgdGhlIHBhcmVudCBWTm9kZSBmcm9tIHRoZSBwcmV2aW91cyByZW5kZXJcbiAqIEBwYXJhbSBuZXdQYXJlbnRWTm9kZSB0aGUgcGFyZW50IFZOb2RlIGZyb20gdGhlIGN1cnJlbnQgcmVuZGVyXG4gKiBAcGFyYW0gY2hpbGRJbmRleCB0aGUgaW5kZXggb2YgdGhlIFZOb2RlLCBpbiB0aGUgX25ld18gcGFyZW50IG5vZGUnc1xuICogY2hpbGRyZW4sIGZvciB3aGljaCB3ZSB3aWxsIGNyZWF0ZSBhIG5ldyBET00gbm9kZVxuICogQHBhcmFtIHBhcmVudEVsbSB0aGUgcGFyZW50IERPTSBub2RlIHdoaWNoIG91ciBuZXcgbm9kZSB3aWxsIGJlIGEgY2hpbGQgb2ZcbiAqIEByZXR1cm5zIHRoZSBuZXdseSBjcmVhdGVkIG5vZGVcbiAqL1xuY29uc3QgY3JlYXRlRWxtID0gKG9sZFBhcmVudFZOb2RlLCBuZXdQYXJlbnRWTm9kZSwgY2hpbGRJbmRleCwgcGFyZW50RWxtKSA9PiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItY29uc3RcbiAgICBjb25zdCBuZXdWTm9kZSA9IG5ld1BhcmVudFZOb2RlLiRjaGlsZHJlbiRbY2hpbGRJbmRleF07XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBlbG07XG4gICAgbGV0IGNoaWxkTm9kZTtcbiAgICBsZXQgb2xkVk5vZGU7XG4gICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uICYmICF1c2VOYXRpdmVTaGFkb3dEb20pIHtcbiAgICAgICAgLy8gcmVtZW1iZXIgZm9yIGxhdGVyIHdlIG5lZWQgdG8gY2hlY2sgdG8gcmVsb2NhdGUgbm9kZXNcbiAgICAgICAgY2hlY2tTbG90UmVsb2NhdGUgPSB0cnVlO1xuICAgICAgICBpZiAobmV3Vk5vZGUuJHRhZyQgPT09ICdzbG90Jykge1xuICAgICAgICAgICAgaWYgKHNjb3BlSWQpIHtcbiAgICAgICAgICAgICAgICAvLyBzY29wZWQgY3NzIG5lZWRzIHRvIGFkZCBpdHMgc2NvcGVkIGlkIHRvIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgICAgIHBhcmVudEVsbS5jbGFzc0xpc3QuYWRkKHNjb3BlSWQgKyAnLXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld1ZOb2RlLiRmbGFncyQgfD0gbmV3Vk5vZGUuJGNoaWxkcmVuJFxuICAgICAgICAgICAgICAgID8gLy8gc2xvdCBlbGVtZW50IGhhcyBmYWxsYmFjayBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgIDIgLyogVk5PREVfRkxBR1MuaXNTbG90RmFsbGJhY2sgKi9cbiAgICAgICAgICAgICAgICA6IC8vIHNsb3QgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGZhbGxiYWNrIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgMSAvKiBWTk9ERV9GTEFHUy5pc1Nsb3RSZWZlcmVuY2UgKi87XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKEJVSUxELmlzRGV2ICYmIG5ld1ZOb2RlLiRlbG0kKSB7XG4gICAgICAgIGNvbnNvbGVEZXZFcnJvcihgVGhlIEpTWCAke25ld1ZOb2RlLiR0ZXh0JCAhPT0gbnVsbCA/IGBcIiR7bmV3Vk5vZGUuJHRleHQkfVwiIHRleHRgIDogYFwiJHtuZXdWTm9kZS4kdGFnJH1cIiBlbGVtZW50YH0gbm9kZSBzaG91bGQgbm90IGJlIHNoYXJlZCB3aXRoaW4gdGhlIHNhbWUgcmVuZGVyZXIuIFRoZSByZW5kZXJlciBjYWNoZXMgZWxlbWVudCBsb29rdXBzIGluIG9yZGVyIHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuIEhvd2V2ZXIsIGEgc2lkZSBlZmZlY3QgZnJvbSB0aGlzIGlzIHRoYXQgdGhlIGV4YWN0IHNhbWUgSlNYIG5vZGUgc2hvdWxkIG5vdCBiZSByZXVzZWQuIEZvciBtb3JlIGluZm9ybWF0aW9uIHBsZWFzZSBzZWUgaHR0cHM6Ly9zdGVuY2lsanMuY29tL2RvY3MvdGVtcGxhdGluZy1qc3gjYXZvaWQtc2hhcmVkLWpzeC1ub2Rlc2ApO1xuICAgIH1cbiAgICBpZiAoQlVJTEQudmRvbVRleHQgJiYgbmV3Vk5vZGUuJHRleHQkICE9PSBudWxsKSB7XG4gICAgICAgIC8vIGNyZWF0ZSB0ZXh0IG5vZGVcbiAgICAgICAgZWxtID0gbmV3Vk5vZGUuJGVsbSQgPSBkb2MuY3JlYXRlVGV4dE5vZGUobmV3Vk5vZGUuJHRleHQkKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgbmV3Vk5vZGUuJGZsYWdzJCAmIDEgLyogVk5PREVfRkxBR1MuaXNTbG90UmVmZXJlbmNlICovKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIHNsb3QgcmVmZXJlbmNlIG5vZGVcbiAgICAgICAgZWxtID0gbmV3Vk5vZGUuJGVsbSQgPVxuICAgICAgICAgICAgQlVJTEQuaXNEZWJ1ZyB8fCBCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSA/IHNsb3RSZWZlcmVuY2VEZWJ1Z05vZGUobmV3Vk5vZGUpIDogZG9jLmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChCVUlMRC5zdmcgJiYgIWlzU3ZnTW9kZSkge1xuICAgICAgICAgICAgaXNTdmdNb2RlID0gbmV3Vk5vZGUuJHRhZyQgPT09ICdzdmcnO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50XG4gICAgICAgIGVsbSA9IG5ld1ZOb2RlLiRlbG0kID0gKEJVSUxELnN2Z1xuICAgICAgICAgICAgPyBkb2MuY3JlYXRlRWxlbWVudE5TKGlzU3ZnTW9kZSA/IFNWR19OUyA6IEhUTUxfTlMsIEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIG5ld1ZOb2RlLiRmbGFncyQgJiAyIC8qIFZOT0RFX0ZMQUdTLmlzU2xvdEZhbGxiYWNrICovXG4gICAgICAgICAgICAgICAgPyAnc2xvdC1mYidcbiAgICAgICAgICAgICAgICA6IG5ld1ZOb2RlLiR0YWckKVxuICAgICAgICAgICAgOiBkb2MuY3JlYXRlRWxlbWVudChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiBuZXdWTm9kZS4kZmxhZ3MkICYgMiAvKiBWTk9ERV9GTEFHUy5pc1Nsb3RGYWxsYmFjayAqL1xuICAgICAgICAgICAgICAgID8gJ3Nsb3QtZmInXG4gICAgICAgICAgICAgICAgOiBuZXdWTm9kZS4kdGFnJCkpO1xuICAgICAgICBpZiAoQlVJTEQuc3ZnICYmIGlzU3ZnTW9kZSAmJiBuZXdWTm9kZS4kdGFnJCA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgICAgICAgICBpc1N2Z01vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhZGQgY3NzIGNsYXNzZXMsIGF0dHJzLCBwcm9wcywgbGlzdGVuZXJzLCBldGMuXG4gICAgICAgIGlmIChCVUlMRC52ZG9tQXR0cmlidXRlKSB7XG4gICAgICAgICAgICB1cGRhdGVFbGVtZW50KG51bGwsIG5ld1ZOb2RlLCBpc1N2Z01vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoQlVJTEQuc2hhZG93RG9tIHx8IEJVSUxELnNjb3BlZCkgJiYgaXNEZWYoc2NvcGVJZCkgJiYgZWxtWydzLXNpJ10gIT09IHNjb3BlSWQpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgc2NvcGVJZCBhbmQgdGhpcyBpcyB0aGUgaW5pdGlhbCByZW5kZXJcbiAgICAgICAgICAgIC8vIHRoZW4gbGV0J3MgYWRkIHRoZSBzY29wZUlkIGFzIGEgY3NzIGNsYXNzXG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZCgoZWxtWydzLXNpJ10gPSBzY29wZUlkKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1ZOb2RlLiRjaGlsZHJlbiQpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBuZXdWTm9kZS4kY2hpbGRyZW4kLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBub2RlXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlID0gY3JlYXRlRWxtKG9sZFBhcmVudFZOb2RlLCBuZXdWTm9kZSwgaSwgZWxtKTtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gbm9kZSBjb3VsZCBoYXZlIGJlZW4gbnVsbFxuICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwZW5kIG91ciBuZXcgbm9kZVxuICAgICAgICAgICAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELnN2Zykge1xuICAgICAgICAgICAgaWYgKG5ld1ZOb2RlLiR0YWckID09PSAnc3ZnJykge1xuICAgICAgICAgICAgICAgIC8vIE9ubHkgcmVzZXQgdGhlIFNWRyBjb250ZXh0IHdoZW4gd2UncmUgZXhpdGluZyA8c3ZnPiBlbGVtZW50XG4gICAgICAgICAgICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlbG0udGFnTmFtZSA9PT0gJ2ZvcmVpZ25PYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVlbnRlciBTVkcgY29udGV4dCB3aGVuIHdlJ3JlIGV4aXRpbmcgPGZvcmVpZ25PYmplY3Q+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBpc1N2Z01vZGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICBlbG1bJ3MtaG4nXSA9IGhvc3RUYWdOYW1lO1xuICAgICAgICBpZiAobmV3Vk5vZGUuJGZsYWdzJCAmICgyIC8qIFZOT0RFX0ZMQUdTLmlzU2xvdEZhbGxiYWNrICovIHwgMSAvKiBWTk9ERV9GTEFHUy5pc1Nsb3RSZWZlcmVuY2UgKi8pKSB7XG4gICAgICAgICAgICAvLyByZW1lbWJlciB0aGUgY29udGVudCByZWZlcmVuY2UgY29tbWVudFxuICAgICAgICAgICAgZWxtWydzLXNyJ10gPSB0cnVlO1xuICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhlIGNvbnRlbnQgcmVmZXJlbmNlIGNvbW1lbnRcbiAgICAgICAgICAgIGVsbVsncy1jciddID0gY29udGVudFJlZjtcbiAgICAgICAgICAgIC8vIHJlbWVtYmVyIHRoZSBzbG90IG5hbWUsIG9yIGVtcHR5IHN0cmluZyBmb3IgZGVmYXVsdCBzbG90XG4gICAgICAgICAgICBlbG1bJ3Mtc24nXSA9IG5ld1ZOb2RlLiRuYW1lJCB8fCAnJztcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHdlJ3ZlIGdvdCBhbiBvbGQgdm5vZGUgZm9yIHRoaXMgc2xvdFxuICAgICAgICAgICAgb2xkVk5vZGUgPSBvbGRQYXJlbnRWTm9kZSAmJiBvbGRQYXJlbnRWTm9kZS4kY2hpbGRyZW4kICYmIG9sZFBhcmVudFZOb2RlLiRjaGlsZHJlbiRbY2hpbGRJbmRleF07XG4gICAgICAgICAgICBpZiAob2xkVk5vZGUgJiYgb2xkVk5vZGUuJHRhZyQgPT09IG5ld1ZOb2RlLiR0YWckICYmIG9sZFBhcmVudFZOb2RlLiRlbG0kKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UndmUgZ290IGFuIG9sZCBzbG90IHZub2RlIGFuZCB0aGUgd3JhcHBlciBpcyBiZWluZyByZXBsYWNlZFxuICAgICAgICAgICAgICAgIC8vIHNvIGxldCdzIG1vdmUgdGhlIG9sZCBzbG90IGNvbnRlbnQgYmFjayB0byBpdCdzIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgcHV0QmFja0luT3JpZ2luYWxMb2NhdGlvbihvbGRQYXJlbnRWTm9kZS4kZWxtJCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbG07XG59O1xuY29uc3QgcHV0QmFja0luT3JpZ2luYWxMb2NhdGlvbiA9IChwYXJlbnRFbG0sIHJlY3Vyc2l2ZSkgPT4ge1xuICAgIHBsdC4kZmxhZ3MkIHw9IDEgLyogUExBVEZPUk1fRkxBR1MuaXNUbXBEaXNjb25uZWN0ZWQgKi87XG4gICAgY29uc3Qgb2xkU2xvdENoaWxkTm9kZXMgPSBwYXJlbnRFbG0uY2hpbGROb2RlcztcbiAgICBmb3IgKGxldCBpID0gb2xkU2xvdENoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgY29uc3QgY2hpbGROb2RlID0gb2xkU2xvdENoaWxkTm9kZXNbaV07XG4gICAgICAgIGlmIChjaGlsZE5vZGVbJ3MtaG4nXSAhPT0gaG9zdFRhZ05hbWUgJiYgY2hpbGROb2RlWydzLW9sJ10pIHtcbiAgICAgICAgICAgIC8vIC8vIHRoaXMgY2hpbGQgbm9kZSBpbiB0aGUgb2xkIGVsZW1lbnQgaXMgZnJvbSBhbm90aGVyIGNvbXBvbmVudFxuICAgICAgICAgICAgLy8gLy8gcmVtb3ZlIHRoaXMgbm9kZSBmcm9tIHRoZSBvbGQgc2xvdCdzIHBhcmVudFxuICAgICAgICAgICAgLy8gY2hpbGROb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgLy8gYW5kIHJlbG9jYXRlIGl0IGJhY2sgdG8gaXQncyBvcmlnaW5hbCBsb2NhdGlvblxuICAgICAgICAgICAgcGFyZW50UmVmZXJlbmNlTm9kZShjaGlsZE5vZGUpLmluc2VydEJlZm9yZShjaGlsZE5vZGUsIHJlZmVyZW5jZU5vZGUoY2hpbGROb2RlKSk7XG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIG9sZCBvcmlnaW5hbCBsb2NhdGlvbiBjb21tZW50IGVudGlyZWx5XG4gICAgICAgICAgICAvLyBsYXRlciBvbiB0aGUgcGF0Y2ggZnVuY3Rpb24gd2lsbCBrbm93IHdoYXQgdG8gZG9cbiAgICAgICAgICAgIC8vIGFuZCBtb3ZlIHRoaXMgdG8gdGhlIGNvcnJlY3Qgc3BvdCBpbiBuZWVkIGJlXG4gICAgICAgICAgICBjaGlsZE5vZGVbJ3Mtb2wnXS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGNoaWxkTm9kZVsncy1vbCddID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgY2hlY2tTbG90UmVsb2NhdGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZWN1cnNpdmUpIHtcbiAgICAgICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24oY2hpbGROb2RlLCByZWN1cnNpdmUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBsdC4kZmxhZ3MkICY9IH4xIC8qIFBMQVRGT1JNX0ZMQUdTLmlzVG1wRGlzY29ubmVjdGVkICovO1xufTtcbi8qKlxuICogQ3JlYXRlIERPTSBub2RlcyBjb3JyZXNwb25kaW5nIHRvIGEgbGlzdCBvZiB7QGxpbmsgZC5Wbm9kZX0gb2JqZWN0cyBhbmRcbiAqIGFkZCB0aGVtIHRvIHRoZSBET00gaW4gdGhlIGFwcHJvcHJpYXRlIHBsYWNlLlxuICpcbiAqIEBwYXJhbSBwYXJlbnRFbG0gdGhlIERPTSBub2RlIHdoaWNoIHNob3VsZCBiZSB1c2VkIGFzIGEgcGFyZW50IGZvciB0aGUgbmV3XG4gKiBET00gbm9kZXNcbiAqIEBwYXJhbSBiZWZvcmUgYSBjaGlsZCBvZiB0aGUgYHBhcmVudEVsbWAgd2hpY2ggdGhlIG5ldyBjaGlsZHJlbiBzaG91bGQgYmVcbiAqIGluc2VydGVkIGJlZm9yZSAob3B0aW9uYWwpXG4gKiBAcGFyYW0gcGFyZW50Vk5vZGUgdGhlIHBhcmVudCB2aXJ0dWFsIERPTSBub2RlXG4gKiBAcGFyYW0gdm5vZGVzIHRoZSBuZXcgY2hpbGQgdmlydHVhbCBET00gbm9kZXMgdG8gcHJvZHVjZSBET00gbm9kZXMgZm9yXG4gKiBAcGFyYW0gc3RhcnRJZHggdGhlIGluZGV4IGluIHRoZSBjaGlsZCB2aXJ0dWFsIERPTSBub2RlcyBhdCB3aGljaCB0byBzdGFydFxuICogY3JlYXRpbmcgRE9NIG5vZGVzIChpbmNsdXNpdmUpXG4gKiBAcGFyYW0gZW5kSWR4IHRoZSBpbmRleCBpbiB0aGUgY2hpbGQgdmlydHVhbCBET00gbm9kZXMgYXQgd2hpY2ggdG8gc3RvcFxuICogY3JlYXRpbmcgRE9NIG5vZGVzIChpbmNsdXNpdmUpXG4gKi9cbmNvbnN0IGFkZFZub2RlcyA9IChwYXJlbnRFbG0sIGJlZm9yZSwgcGFyZW50Vk5vZGUsIHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCkgPT4ge1xuICAgIGxldCBjb250YWluZXJFbG0gPSAoKEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIHBhcmVudEVsbVsncy1jciddICYmIHBhcmVudEVsbVsncy1jciddLnBhcmVudE5vZGUpIHx8IHBhcmVudEVsbSk7XG4gICAgbGV0IGNoaWxkTm9kZTtcbiAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmIGNvbnRhaW5lckVsbS5zaGFkb3dSb290ICYmIGNvbnRhaW5lckVsbS50YWdOYW1lID09PSBob3N0VGFnTmFtZSkge1xuICAgICAgICBjb250YWluZXJFbG0gPSBjb250YWluZXJFbG0uc2hhZG93Um9vdDtcbiAgICB9XG4gICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICBpZiAodm5vZGVzW3N0YXJ0SWR4XSkge1xuICAgICAgICAgICAgY2hpbGROb2RlID0gY3JlYXRlRWxtKG51bGwsIHBhcmVudFZOb2RlLCBzdGFydElkeCwgcGFyZW50RWxtKTtcbiAgICAgICAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICB2bm9kZXNbc3RhcnRJZHhdLiRlbG0kID0gY2hpbGROb2RlO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lckVsbS5pbnNlcnRCZWZvcmUoY2hpbGROb2RlLCBCVUlMRC5zbG90UmVsb2NhdGlvbiA/IHJlZmVyZW5jZU5vZGUoYmVmb3JlKSA6IGJlZm9yZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gKiBSZW1vdmUgdGhlIERPTSBlbGVtZW50cyBjb3JyZXNwb25kaW5nIHRvIGEgbGlzdCBvZiB7QGxpbmsgZC5WTm9kZX0gb2JqZWN0cy5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8sIGZvciBpbnN0YW5jZSwgY2xlYW4gdXAgYWZ0ZXIgYSBsaXN0IG9mIGNoaWxkcmVuIHdoaWNoXG4gKiBzaG91bGQgbm8gbG9uZ2VyIGJlIHNob3duLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYWxzbyBoYW5kbGVzIHNvbWUgb2YgU3RlbmNpbCdzIHNsb3QgcmVsb2NhdGlvbiBsb2dpYy5cbiAqXG4gKiBAcGFyYW0gdm5vZGVzIGEgbGlzdCBvZiB2aXJ0dWFsIERPTSBub2RlcyB0byByZW1vdmVcbiAqIEBwYXJhbSBzdGFydElkeCB0aGUgaW5kZXggYXQgd2hpY2ggdG8gc3RhcnQgcmVtb3Zpbmcgbm9kZXMgKGluY2x1c2l2ZSlcbiAqIEBwYXJhbSBlbmRJZHggdGhlIGluZGV4IGF0IHdoaWNoIHRvIHN0b3AgcmVtb3Zpbmcgbm9kZXMgKGluY2x1c2l2ZSlcbiAqIEBwYXJhbSB2bm9kZSBhIFZOb2RlXG4gKiBAcGFyYW0gZWxtIGFuIGVsZW1lbnRcbiAqL1xuY29uc3QgcmVtb3ZlVm5vZGVzID0gKHZub2Rlcywgc3RhcnRJZHgsIGVuZElkeCwgdm5vZGUsIGVsbSkgPT4ge1xuICAgIGZvciAoOyBzdGFydElkeCA8PSBlbmRJZHg7ICsrc3RhcnRJZHgpIHtcbiAgICAgICAgaWYgKCh2bm9kZSA9IHZub2Rlc1tzdGFydElkeF0pKSB7XG4gICAgICAgICAgICBlbG0gPSB2bm9kZS4kZWxtJDtcbiAgICAgICAgICAgIGNhbGxOb2RlUmVmcyh2bm9kZSk7XG4gICAgICAgICAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSdyZSByZW1vdmluZyB0aGlzIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBzbyBpdCdzIHBvc3NpYmxlIHdlIG5lZWQgdG8gc2hvdyBzbG90IGZhbGxiYWNrIGNvbnRlbnQgbm93XG4gICAgICAgICAgICAgICAgY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoZWxtWydzLW9sJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBvcmlnaW5hbCBsb2NhdGlvbiBjb21tZW50XG4gICAgICAgICAgICAgICAgICAgIGVsbVsncy1vbCddLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IGNoaWxkIG5vZGVzIG9mIHRoZSBub2RlXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoYXQncyBiZWluZyByZW1vdmVkIGFyZSBzbG90IG5vZGVzXG4gICAgICAgICAgICAgICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24oZWxtLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIHZub2RlJ3MgZWxlbWVudCBmcm9tIHRoZSBkb21cbiAgICAgICAgICAgIGVsbS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIFJlY29uY2lsZSB0aGUgY2hpbGRyZW4gb2YgYSBuZXcgVk5vZGUgd2l0aCB0aGUgY2hpbGRyZW4gb2YgYW4gb2xkIFZOb2RlIGJ5XG4gKiB0cmF2ZXJzaW5nIHRoZSB0d28gY29sbGVjdGlvbnMgb2YgY2hpbGRyZW4sIGlkZW50aWZ5aW5nIG5vZGVzIHRoYXQgYXJlXG4gKiBjb25zZXJ2ZWQgb3IgY2hhbmdlZCwgY2FsbGluZyBvdXQgdG8gYHBhdGNoYCB0byBtYWtlIGFueSBuZWNlc3NhcnlcbiAqIHVwZGF0ZXMgdG8gdGhlIERPTSwgYW5kIHJlYXJyYW5naW5nIERPTSBub2RlcyBhcyBuZWVkZWQuXG4gKlxuICogVGhlIGFsZ29yaXRobSBmb3IgcmVjb25jaWxpbmcgY2hpbGRyZW4gd29ya3MgYnkgYW5hbHl6aW5nIHR3byAnd2luZG93cycgb250b1xuICogdGhlIHR3byBhcnJheXMgb2YgY2hpbGRyZW4gKGBvbGRDaGAgYW5kIGBuZXdDaGApLiBXZSBrZWVwIHRyYWNrIG9mIHRoZVxuICogJ3dpbmRvd3MnIGJ5IHN0b3Jpbmcgc3RhcnQgYW5kIGVuZCBpbmRpY2VzIGFuZCByZWZlcmVuY2VzIHRvIHRoZVxuICogY29ycmVzcG9uZGluZyBhcnJheSBlbnRyaWVzLiBJbml0aWFsbHkgdGhlIHR3byAnd2luZG93cycgYXJlIGJhc2ljYWxseSBlcXVhbFxuICogdG8gdGhlIGVudGlyZSBhcnJheSwgYnV0IHdlIHByb2dyZXNzaXZlbHkgbmFycm93IHRoZSB3aW5kb3dzIHVudGlsIHRoZXJlIGFyZVxuICogbm8gY2hpbGRyZW4gbGVmdCB0byB1cGRhdGUgYnkgZG9pbmcgdGhlIGZvbGxvd2luZzpcbiAqXG4gKiAxLiBTa2lwIGFueSBgbnVsbGAgZW50cmllcyBhdCB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiB0aGUgdHdvIGFycmF5cywgc29cbiAqICAgIHRoYXQgaWYgd2UgaGF2ZSBhbiBpbml0aWFsIGFycmF5IGxpa2UgdGhlIGZvbGxvd2luZyB3ZSdsbCBlbmQgdXAgZGVhbGluZ1xuICogICAgb25seSB3aXRoIGEgd2luZG93IGJvdW5kZWQgYnkgdGhlIGhpZ2hsaWdodGVkIGVsZW1lbnRzOlxuICpcbiAqICAgIFtudWxsLCBudWxsLCBWTm9kZTEgLCAuLi4gLCBWTm9kZTIsIG51bGwsIG51bGxdXG4gKiAgICAgICAgICAgICAgICAgXl5eXl5eICAgICAgICAgXl5eXl5eXG4gKlxuICogMi4gQ2hlY2sgdG8gc2VlIGlmIHRoZSBlbGVtZW50cyBhdCB0aGUgaGVhZCBhbmQgdGFpbCBwb3NpdGlvbnMgYXJlIGVxdWFsXG4gKiAgICBhY3Jvc3MgdGhlIHdpbmRvd3MuIFRoaXMgd2lsbCBiYXNpY2FsbHkgZGV0ZWN0IGVsZW1lbnRzIHdoaWNoIGhhdmVuJ3RcbiAqICAgIGJlZW4gYWRkZWQsIHJlbW92ZWQsIG9yIGNoYW5nZWQgcG9zaXRpb24sIGkuZS4gaWYgeW91IGhhZCB0aGUgZm9sbG93aW5nXG4gKiAgICBWTm9kZSBlbGVtZW50cyAocmVwcmVzZW50ZWQgYXMgSFRNTCk6XG4gKlxuICogICAgb2xkVk5vZGU6IGA8ZGl2PjxwPjxzcGFuPkhFWTwvc3Bhbj48L3A+PC9kaXY+YFxuICogICAgbmV3Vk5vZGU6IGA8ZGl2PjxwPjxzcGFuPlRIRVJFPC9zcGFuPjwvcD48L2Rpdj5gXG4gKlxuICogICAgVGhlbiB3aGVuIGNvbXBhcmluZyB0aGUgY2hpbGRyZW4gb2YgdGhlIGA8ZGl2PmAgdGFnIHdlIGNoZWNrIHRoZSBlcXVhbGl0eVxuICogICAgb2YgdGhlIFZOb2RlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBgPHA+YCB0YWdzIGFuZCwgc2luY2UgdGhleSBhcmUgdGhlXG4gKiAgICBzYW1lIHRhZyBpbiB0aGUgc2FtZSBwb3NpdGlvbiwgd2UnZCBiZSBhYmxlIHRvIGF2b2lkIGNvbXBsZXRlbHlcbiAqICAgIHJlLXJlbmRlcmluZyB0aGUgc3VidHJlZSB1bmRlciB0aGVtIHdpdGggYSBuZXcgRE9NIGVsZW1lbnQgYW5kIHdvdWxkIGp1c3RcbiAqICAgIGNhbGwgb3V0IHRvIGBwYXRjaGAgdG8gaGFuZGxlIHJlY29uY2lsaW5nIHRoZWlyIGNoaWxkcmVuIGFuZCBzbyBvbi5cbiAqXG4gKiAzLiBDaGVjaywgZm9yIGJvdGggd2luZG93cywgdG8gc2VlIGlmIHRoZSBlbGVtZW50IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlXG4gKiAgICB3aW5kb3cgY29ycmVzcG9uZHMgdG8gdGhlIGVsZW1lbnQgYXQgdGhlIGVuZCBvZiB0aGUgb3RoZXIgd2luZG93LiBUaGlzIGlzXG4gKiAgICBhIGhldXJpc3RpYyB3aGljaCB3aWxsIGxldCB1cyBpZGVudGlmeSBfc29tZV8gc2l0dWF0aW9ucyBpbiB3aGljaFxuICogICAgZWxlbWVudHMgaGF2ZSBjaGFuZ2VkIHBvc2l0aW9uLCBmb3IgaW5zdGFuY2UgaXQgX3Nob3VsZF8gZGV0ZWN0IHRoYXQgdGhlXG4gKiAgICBjaGlsZHJlbiBub2RlcyB0aGVtc2VsdmVzIGhhdmUgbm90IGNoYW5nZWQgYnV0IG1lcmVseSBtb3ZlZCBpbiB0aGVcbiAqICAgIGZvbGxvd2luZyBleGFtcGxlOlxuICpcbiAqICAgIG9sZFZOb2RlOiBgPGRpdj48ZWxlbWVudC1vbmUgLz48ZWxlbWVudC10d28gLz48L2Rpdj5gXG4gKiAgICBuZXdWTm9kZTogYDxkaXY+PGVsZW1lbnQtdHdvIC8+PGVsZW1lbnQtb25lIC8+PC9kaXY+YFxuICpcbiAqICAgIElmIHdlIGZpbmQgY2FzZXMgbGlrZSB0aGlzIHRoZW4gd2UgYWxzbyBuZWVkIHRvIG1vdmUgdGhlIGNvbmNyZXRlIERPTVxuICogICAgZWxlbWVudHMgY29ycmVzcG9uZGluZyB0byB0aGUgbW92ZWQgY2hpbGRyZW4gdG8gd3JpdGUgdGhlIHJlLW9yZGVyIHRvIHRoZVxuICogICAgRE9NLlxuICpcbiAqIDQuIEZpbmFsbHksIGlmIFZOb2RlcyBoYXZlIHRoZSBga2V5YCBhdHRyaWJ1dGUgc2V0IG9uIHRoZW0gd2UgY2hlY2sgZm9yIGFueVxuICogICAgbm9kZXMgaW4gdGhlIG9sZCBjaGlsZHJlbiB3aGljaCBoYXZlIHRoZSBzYW1lIGtleSBhcyB0aGUgZmlyc3QgZWxlbWVudCBpblxuICogICAgb3VyIHdpbmRvdyBvbiB0aGUgbmV3IGNoaWxkcmVuLiBJZiB3ZSBmaW5kIHN1Y2ggYSBub2RlIHdlIGhhbmRsZSBjYWxsaW5nXG4gKiAgICBvdXQgdG8gYHBhdGNoYCwgbW92aW5nIHJlbGV2YW50IERPTSBub2RlcywgYW5kIHNvIG9uLCBpbiBhY2NvcmRhbmNlIHdpdGhcbiAqICAgIHdoYXQgd2UgZmluZC5cbiAqXG4gKiBGaW5hbGx5LCBvbmNlIHdlJ3ZlIG5hcnJvd2VkIG91ciAnd2luZG93cycgdG8gdGhlIHBvaW50IHRoYXQgZWl0aGVyIG9mIHRoZW1cbiAqIGNvbGxhcHNlIChpLmUuIHRoZXkgaGF2ZSBsZW5ndGggMCkgd2UgdGhlbiBoYW5kbGUgYW55IHJlbWFpbmluZyBWTm9kZVxuICogaW5zZXJ0aW9uIG9yIGRlbGV0aW9uIHRoYXQgbmVlZHMgdG8gaGFwcGVuIHRvIGdldCBhIERPTSBzdGF0ZSB0aGF0IGNvcnJlY3RseVxuICogcmVmbGVjdHMgdGhlIG5ldyBjaGlsZCBWTm9kZXMuIElmLCBmb3IgaW5zdGFuY2UsIGFmdGVyIG91ciB3aW5kb3cgb24gdGhlIG9sZFxuICogY2hpbGRyZW4gaGFzIGNvbGxhcHNlZCB3ZSBzdGlsbCBoYXZlIG1vcmUgbm9kZXMgb24gdGhlIG5ldyBjaGlsZHJlbiB0aGF0XG4gKiB3ZSBoYXZlbid0IGRlYWx0IHdpdGggeWV0IHRoZW4gd2UgbmVlZCB0byBhZGQgdGhlbSwgb3IgaWYgdGhlIG5ldyBjaGlsZHJlblxuICogY29sbGFwc2UgYnV0IHdlIHN0aWxsIGhhdmUgdW5oYW5kbGVkIF9vbGRfIGNoaWxkcmVuIHRoZW4gd2UgbmVlZCB0byBtYWtlXG4gKiBzdXJlIHRoZSBjb3JyZXNwb25kaW5nIERPTSBub2RlcyBhcmUgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0gcGFyZW50RWxtIHRoZSBub2RlIGludG8gd2hpY2ggdGhlIHBhcmVudCBWTm9kZSBpcyByZW5kZXJlZFxuICogQHBhcmFtIG9sZENoIHRoZSBvbGQgY2hpbGRyZW4gb2YgdGhlIHBhcmVudCBub2RlXG4gKiBAcGFyYW0gbmV3Vk5vZGUgdGhlIG5ldyBWTm9kZSB3aGljaCB3aWxsIHJlcGxhY2UgdGhlIHBhcmVudFxuICogQHBhcmFtIG5ld0NoIHRoZSBuZXcgY2hpbGRyZW4gb2YgdGhlIHBhcmVudCBub2RlXG4gKi9cbmNvbnN0IHVwZGF0ZUNoaWxkcmVuID0gKHBhcmVudEVsbSwgb2xkQ2gsIG5ld1ZOb2RlLCBuZXdDaCkgPT4ge1xuICAgIGxldCBvbGRTdGFydElkeCA9IDA7XG4gICAgbGV0IG5ld1N0YXJ0SWR4ID0gMDtcbiAgICBsZXQgaWR4SW5PbGQgPSAwO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgb2xkRW5kSWR4ID0gb2xkQ2gubGVuZ3RoIC0gMTtcbiAgICBsZXQgb2xkU3RhcnRWbm9kZSA9IG9sZENoWzBdO1xuICAgIGxldCBvbGRFbmRWbm9kZSA9IG9sZENoW29sZEVuZElkeF07XG4gICAgbGV0IG5ld0VuZElkeCA9IG5ld0NoLmxlbmd0aCAtIDE7XG4gICAgbGV0IG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFswXTtcbiAgICBsZXQgbmV3RW5kVm5vZGUgPSBuZXdDaFtuZXdFbmRJZHhdO1xuICAgIGxldCBub2RlO1xuICAgIGxldCBlbG1Ub01vdmU7XG4gICAgd2hpbGUgKG9sZFN0YXJ0SWR4IDw9IG9sZEVuZElkeCAmJiBuZXdTdGFydElkeCA8PSBuZXdFbmRJZHgpIHtcbiAgICAgICAgaWYgKG9sZFN0YXJ0Vm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gVk5vZGUgbWlnaHQgaGF2ZSBiZWVuIG1vdmVkIGxlZnRcbiAgICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvbGRFbmRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdTdGFydFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXdFbmRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBuZXdFbmRWbm9kZSA9IG5ld0NoWy0tbmV3RW5kSWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0YXJ0IG5vZGVzIGFyZSB0aGUgc2FtZSB0aGVuIHdlIHNob3VsZCBwYXRjaCB0aGUgbmV3IFZOb2RlXG4gICAgICAgICAgICAvLyBvbnRvIHRoZSBvbGQgb25lLCBhbmQgaW5jcmVtZW50IG91ciBgbmV3U3RhcnRJZHhgIGFuZCBgb2xkU3RhcnRJZHhgXG4gICAgICAgICAgICAvLyBpbmRpY2VzIHRvIHJlZmxlY3QgdGhhdC4gV2UgZG9uJ3QgbmVlZCB0byBtb3ZlIGFueSBET00gTm9kZXMgYXJvdW5kXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGluZ3MgYXJlIG1hdGNoZWQgdXAgaW4gb3JkZXIuXG4gICAgICAgICAgICBwYXRjaChvbGRTdGFydFZub2RlLCBuZXdTdGFydFZub2RlKTtcbiAgICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1NhbWVWbm9kZShvbGRFbmRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICAgICAgICAvLyBsaWtld2lzZSwgaWYgdGhlIGVuZCBub2RlcyBhcmUgdGhlIHNhbWUgd2UgcGF0Y2ggbmV3IG9udG8gb2xkIGFuZFxuICAgICAgICAgICAgLy8gZGVjcmVtZW50IG91ciBlbmQgaW5kaWNlcywgYW5kIGFsc28gbGlrZXdpc2UgaW4gdGhpcyBjYXNlIHdlIGRvbid0XG4gICAgICAgICAgICAvLyBuZWVkIHRvIG1vdmUgYW55IERPTSBOb2Rlcy5cbiAgICAgICAgICAgIHBhdGNoKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSk7XG4gICAgICAgICAgICBvbGRFbmRWbm9kZSA9IG9sZENoWy0tb2xkRW5kSWR4XTtcbiAgICAgICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlKSkge1xuICAgICAgICAgICAgLy8gY2FzZTogXCJWbm9kZSBtb3ZlZCByaWdodFwiXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gV2UndmUgZm91bmQgdGhhdCB0aGUgbGFzdCBub2RlIGluIG91ciB3aW5kb3cgb24gdGhlIG5ldyBjaGlsZHJlbiBpc1xuICAgICAgICAgICAgLy8gdGhlIHNhbWUgVk5vZGUgYXMgdGhlIF9maXJzdF8gbm9kZSBpbiBvdXIgd2luZG93IG9uIHRoZSBvbGQgY2hpbGRyZW5cbiAgICAgICAgICAgIC8vIHdlJ3JlIGRlYWxpbmcgd2l0aCBub3cuIFZpc3VhbGx5LCB0aGlzIGlzIHRoZSBsYXlvdXQgb2YgdGhlc2UgdHdvXG4gICAgICAgICAgICAvLyBub2RlczpcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBuZXdDaDogWy4uLiwgbmV3U3RhcnRWbm9kZSAsIC4uLiAsIG5ld0VuZFZub2RlICwgLi4uXVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBeXl5eXl5eXl5eXlxuICAgICAgICAgICAgLy8gb2xkQ2g6IFsuLi4sIG9sZFN0YXJ0Vm5vZGUgLCAuLi4gLCBvbGRFbmRWbm9kZSAsIC4uLl1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICBeXl5eXl5eXl5eXl5eXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gSW4gdGhpcyBzaXR1YXRpb24gd2UgbmVlZCB0byBwYXRjaCBgbmV3RW5kVm5vZGVgIG9udG8gYG9sZFN0YXJ0Vm5vZGVgXG4gICAgICAgICAgICAvLyBhbmQgbW92ZSB0aGUgRE9NIGVsZW1lbnQgZm9yIGBvbGRTdGFydFZub2RlYC5cbiAgICAgICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiAob2xkU3RhcnRWbm9kZS4kdGFnJCA9PT0gJ3Nsb3QnIHx8IG5ld0VuZFZub2RlLiR0YWckID09PSAnc2xvdCcpKSB7XG4gICAgICAgICAgICAgICAgcHV0QmFja0luT3JpZ2luYWxMb2NhdGlvbihvbGRTdGFydFZub2RlLiRlbG0kLnBhcmVudE5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGNoKG9sZFN0YXJ0Vm5vZGUsIG5ld0VuZFZub2RlKTtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gbW92ZSB0aGUgZWxlbWVudCBmb3IgYG9sZFN0YXJ0Vm5vZGVgIGludG8gYSBwb3NpdGlvbiB3aGljaFxuICAgICAgICAgICAgLy8gd2lsbCBiZSBhcHByb3ByaWF0ZSBmb3IgYG5ld0VuZFZub2RlYC4gRm9yIHRoaXMgd2UgY2FuIHVzZVxuICAgICAgICAgICAgLy8gYC5pbnNlcnRCZWZvcmVgIGFuZCBgb2xkRW5kVm5vZGUuJGVsbSQubmV4dFNpYmxpbmdgLiBJZiB0aGVyZSBpcyBhXG4gICAgICAgICAgICAvLyBzaWJsaW5nIGZvciBgb2xkRW5kVm5vZGUuJGVsbSRgIHRoZW4gd2Ugd2FudCB0byBtb3ZlIHRoZSBET00gbm9kZSBmb3JcbiAgICAgICAgICAgIC8vIGBvbGRTdGFydFZub2RlYCBiZXR3ZWVuIGBvbGRFbmRWbm9kZWAgYW5kIGl0J3Mgc2libGluZywgbGlrZSBzbzpcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA8b2xkLXN0YXJ0LW5vZGUgLz5cbiAgICAgICAgICAgIC8vIDxzb21lLWludGVydmVuaW5nLW5vZGUgLz5cbiAgICAgICAgICAgIC8vIDxvbGQtZW5kLW5vZGUgLz5cbiAgICAgICAgICAgIC8vIDwhLS0gLT4gICAgICAgICAgICAgIDwtLSBgb2xkU3RhcnRWbm9kZS4kZWxtJGAgc2hvdWxkIGJlIGluc2VydGVkIGhlcmVcbiAgICAgICAgICAgIC8vIDxuZXh0LXNpYmxpbmcgLz5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBJZiBpbnN0ZWFkIGBvbGRFbmRWbm9kZS4kZWxtJGAgaGFzIG5vIHNpYmxpbmcgdGhlbiB3ZSBqdXN0IHdhbnQgdG8gcHV0XG4gICAgICAgICAgICAvLyB0aGUgbm9kZSBmb3IgYG9sZFN0YXJ0Vm5vZGVgIGF0IHRoZSBlbmQgb2YgdGhlIGNoaWxkcmVuIG9mXG4gICAgICAgICAgICAvLyBgcGFyZW50RWxtYC4gTHVja2lseSwgYE5vZGUubmV4dFNpYmxpbmdgIHdpbGwgcmV0dXJuIGBudWxsYCBpZiB0aGVyZVxuICAgICAgICAgICAgLy8gYXJlbid0IGFueSBzaWJsaW5ncywgYW5kIHBhc3NpbmcgYG51bGxgIHRvIGBOb2RlLmluc2VydEJlZm9yZWAgd2lsbFxuICAgICAgICAgICAgLy8gYXBwZW5kIGl0IHRvIHRoZSBjaGlsZHJlbiBvZiB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICBwYXJlbnRFbG0uaW5zZXJ0QmVmb3JlKG9sZFN0YXJ0Vm5vZGUuJGVsbSQsIG9sZEVuZFZub2RlLiRlbG0kLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIG9sZFN0YXJ0Vm5vZGUgPSBvbGRDaFsrK29sZFN0YXJ0SWR4XTtcbiAgICAgICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKSkge1xuICAgICAgICAgICAgLy8gY2FzZTogXCJWbm9kZSBtb3ZlZCBsZWZ0XCJcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBXZSd2ZSBmb3VuZCB0aGF0IHRoZSBmaXJzdCBub2RlIGluIG91ciB3aW5kb3cgb24gdGhlIG5ldyBjaGlsZHJlbiBpc1xuICAgICAgICAgICAgLy8gdGhlIHNhbWUgVk5vZGUgYXMgdGhlIF9sYXN0XyBub2RlIGluIG91ciB3aW5kb3cgb24gdGhlIG9sZCBjaGlsZHJlbi5cbiAgICAgICAgICAgIC8vIFZpc3VhbGx5LCB0aGlzIGlzIHRoZSBsYXlvdXQgb2YgdGhlc2UgdHdvIG5vZGVzOlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIG5ld0NoOiBbLi4uLCBuZXdTdGFydFZub2RlICwgLi4uICwgbmV3RW5kVm5vZGUgLCAuLi5dXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgXl5eXl5eXl5eXl5eXlxuICAgICAgICAgICAgLy8gb2xkQ2g6IFsuLi4sIG9sZFN0YXJ0Vm5vZGUgLCAuLi4gLCBvbGRFbmRWbm9kZSAsIC4uLl1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXl5eXl5eXl5eXl5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBJbiB0aGlzIHNpdHVhdGlvbiB3ZSBuZWVkIHRvIHBhdGNoIGBuZXdTdGFydFZub2RlYCBvbnRvIGBvbGRFbmRWbm9kZWBcbiAgICAgICAgICAgIC8vICh3aGljaCB3aWxsIGhhbmRsZSB1cGRhdGluZyBhbnkgY2hhbmdlZCBhdHRyaWJ1dGVzLCByZWNvbmNpbGluZyB0aGVpclxuICAgICAgICAgICAgLy8gY2hpbGRyZW4gZXRjKSBidXQgd2UgYWxzbyBuZWVkIHRvIG1vdmUgdGhlIERPTSBub2RlIHRvIHdoaWNoXG4gICAgICAgICAgICAvLyBgb2xkRW5kVm5vZGVgIGNvcnJlc3BvbmRzLlxuICAgICAgICAgICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIChvbGRTdGFydFZub2RlLiR0YWckID09PSAnc2xvdCcgfHwgbmV3RW5kVm5vZGUuJHRhZyQgPT09ICdzbG90JykpIHtcbiAgICAgICAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKG9sZEVuZFZub2RlLiRlbG0kLnBhcmVudE5vZGUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGNoKG9sZEVuZFZub2RlLCBuZXdTdGFydFZub2RlKTtcbiAgICAgICAgICAgIC8vIFdlJ3ZlIGFscmVhZHkgY2hlY2tlZCBhYm92ZSBpZiBgb2xkU3RhcnRWbm9kZWAgYW5kIGBuZXdTdGFydFZub2RlYCBhcmVcbiAgICAgICAgICAgIC8vIHRoZSBzYW1lIG5vZGUsIHNvIHNpbmNlIHdlJ3JlIGhlcmUgd2Uga25vdyB0aGF0IHRoZXkgYXJlIG5vdC4gVGh1cyB3ZVxuICAgICAgICAgICAgLy8gY2FuIG1vdmUgdGhlIGVsZW1lbnQgZm9yIGBvbGRFbmRWbm9kZWAgX2JlZm9yZV8gdGhlIGVsZW1lbnQgZm9yXG4gICAgICAgICAgICAvLyBgb2xkU3RhcnRWbm9kZWAsIGxlYXZpbmcgYG9sZFN0YXJ0Vm5vZGVgIHRvIGJlIHJlY29uY2lsZWQgaW4gdGhlXG4gICAgICAgICAgICAvLyBmdXR1cmUuXG4gICAgICAgICAgICBwYXJlbnRFbG0uaW5zZXJ0QmVmb3JlKG9sZEVuZFZub2RlLiRlbG0kLCBvbGRTdGFydFZub2RlLiRlbG0kKTtcbiAgICAgICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSGVyZSB3ZSBkbyBzb21lIGNoZWNrcyB0byBtYXRjaCB1cCBvbGQgYW5kIG5ldyBub2RlcyBiYXNlZCBvbiB0aGVcbiAgICAgICAgICAgIC8vIGAka2V5JGAgYXR0cmlidXRlLCB3aGljaCBpcyBzZXQgYnkgcHV0dGluZyBhIGBrZXk9XCJteS1rZXlcImAgYXR0cmlidXRlXG4gICAgICAgICAgICAvLyBpbiB0aGUgSlNYIGZvciBhIERPTSBlbGVtZW50IGluIHRoZSBpbXBsZW1lbnRhdGlvbiBvZiBhIFN0ZW5jaWxcbiAgICAgICAgICAgIC8vIGNvbXBvbmVudC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayB0byBzZWUgaWYgdGhlcmUgYXJlIGFueSBub2RlcyBpbiB0aGUgYXJyYXkgb2Ygb2xkXG4gICAgICAgICAgICAvLyBjaGlsZHJlbiB3aGljaCBoYXZlIHRoZSBzYW1lIGtleSBhcyB0aGUgZmlyc3Qgbm9kZSBpbiB0aGUgbmV3XG4gICAgICAgICAgICAvLyBjaGlsZHJlbi5cbiAgICAgICAgICAgIGlkeEluT2xkID0gLTE7XG4gICAgICAgICAgICBpZiAoQlVJTEQudmRvbUtleSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IG9sZFN0YXJ0SWR4OyBpIDw9IG9sZEVuZElkeDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbGRDaFtpXSAmJiBvbGRDaFtpXS4ka2V5JCAhPT0gbnVsbCAmJiBvbGRDaFtpXS4ka2V5JCA9PT0gbmV3U3RhcnRWbm9kZS4ka2V5JCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4SW5PbGQgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQudmRvbUtleSAmJiBpZHhJbk9sZCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZm91bmQgYSBub2RlIGluIHRoZSBvbGQgY2hpbGRyZW4gd2hpY2ggbWF0Y2hlcyB1cCB3aXRoIHRoZSBmaXJzdFxuICAgICAgICAgICAgICAgIC8vIG5vZGUgaW4gdGhlIG5ldyBjaGlsZHJlbiEgU28gbGV0J3MgZGVhbCB3aXRoIHRoYXRcbiAgICAgICAgICAgICAgICBlbG1Ub01vdmUgPSBvbGRDaFtpZHhJbk9sZF07XG4gICAgICAgICAgICAgICAgaWYgKGVsbVRvTW92ZS4kdGFnJCAhPT0gbmV3U3RhcnRWbm9kZS4kdGFnJCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgdGFnIGRvZXNuJ3QgbWF0Y2ggc28gd2UnbGwgbmVlZCBhIG5ldyBET00gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBub2RlID0gY3JlYXRlRWxtKG9sZENoICYmIG9sZENoW25ld1N0YXJ0SWR4XSwgbmV3Vk5vZGUsIGlkeEluT2xkLCBwYXJlbnRFbG0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2goZWxtVG9Nb3ZlLCBuZXdTdGFydFZub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW52YWxpZGF0ZSB0aGUgbWF0Y2hpbmcgb2xkIG5vZGUgc28gdGhhdCB3ZSB3b24ndCB0cnkgdG8gdXBkYXRlIGl0XG4gICAgICAgICAgICAgICAgICAgIC8vIGFnYWluIGxhdGVyIG9uXG4gICAgICAgICAgICAgICAgICAgIG9sZENoW2lkeEluT2xkXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGVsbVRvTW92ZS4kZWxtJDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZWl0aGVyIGRpZG4ndCBmaW5kIGFuIGVsZW1lbnQgaW4gdGhlIG9sZCBjaGlsZHJlbiB0aGF0IG1hdGNoZXNcbiAgICAgICAgICAgICAgICAvLyB0aGUga2V5IG9mIHRoZSBmaXJzdCBuZXcgY2hpbGQgT1IgdGhlIGJ1aWxkIGlzIG5vdCB1c2luZyBga2V5YFxuICAgICAgICAgICAgICAgIC8vIGF0dHJpYnV0ZXMgYXQgYWxsLiBJbiBlaXRoZXIgY2FzZSB3ZSBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gZm9yIHRoZSBuZXcgbm9kZS5cbiAgICAgICAgICAgICAgICBub2RlID0gY3JlYXRlRWxtKG9sZENoICYmIG9sZENoW25ld1N0YXJ0SWR4XSwgbmV3Vk5vZGUsIG5ld1N0YXJ0SWR4LCBwYXJlbnRFbG0pO1xuICAgICAgICAgICAgICAgIG5ld1N0YXJ0Vm5vZGUgPSBuZXdDaFsrK25ld1N0YXJ0SWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgY3JlYXRlZCBhIG5ldyBub2RlIHRoZW4gaGFuZGxlIGluc2VydGluZyBpdCB0byB0aGUgRE9NXG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFJlZmVyZW5jZU5vZGUob2xkU3RhcnRWbm9kZS4kZWxtJCkuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZmVyZW5jZU5vZGUob2xkU3RhcnRWbm9kZS4kZWxtJCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb2xkU3RhcnRWbm9kZS4kZWxtJC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShub2RlLCBvbGRTdGFydFZub2RlLiRlbG0kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9sZFN0YXJ0SWR4ID4gb2xkRW5kSWR4KSB7XG4gICAgICAgIC8vIHdlIGhhdmUgc29tZSBtb3JlIG5ldyBub2RlcyB0byBhZGQgd2hpY2ggZG9uJ3QgbWF0Y2ggdXAgd2l0aCBvbGQgbm9kZXNcbiAgICAgICAgYWRkVm5vZGVzKHBhcmVudEVsbSwgbmV3Q2hbbmV3RW5kSWR4ICsgMV0gPT0gbnVsbCA/IG51bGwgOiBuZXdDaFtuZXdFbmRJZHggKyAxXS4kZWxtJCwgbmV3Vk5vZGUsIG5ld0NoLCBuZXdTdGFydElkeCwgbmV3RW5kSWR4KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoQlVJTEQudXBkYXRhYmxlICYmIG5ld1N0YXJ0SWR4ID4gbmV3RW5kSWR4KSB7XG4gICAgICAgIC8vIHRoZXJlIGFyZSBub2RlcyBpbiB0aGUgYG9sZENoYCBhcnJheSB3aGljaCBubyBsb25nZXIgY29ycmVzcG9uZCB0byBub2Rlc1xuICAgICAgICAvLyBpbiB0aGUgbmV3IGFycmF5LCBzbyBsZXRzIHJlbW92ZSB0aGVtICh3aGljaCBlbnRhaWxzIGNsZWFuaW5nIHVwIHRoZVxuICAgICAgICAvLyByZWxldmFudCBET00gbm9kZXMpXG4gICAgICAgIHJlbW92ZVZub2RlcyhvbGRDaCwgb2xkU3RhcnRJZHgsIG9sZEVuZElkeCk7XG4gICAgfVxufTtcbi8qKlxuICogQ29tcGFyZSB0d28gVk5vZGVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSB0aGUgc2FtZVxuICpcbiAqICoqTkIqKjogVGhpcyBmdW5jdGlvbiBpcyBhbiBlcXVhbGl0eSBfaGV1cmlzdGljXyBiYXNlZCBvbiB0aGUgYXZhaWxhYmxlXG4gKiBpbmZvcm1hdGlvbiBzZXQgb24gdGhlIHR3byBWTm9kZXMgYW5kIGNhbiBiZSBtaXNsZWFkaW5nIHVuZGVyIGNlcnRhaW5cbiAqIGNpcmN1bXN0YW5jZXMuIEluIHBhcnRpY3VsYXIsIGlmIHRoZSB0d28gbm9kZXMgZG8gbm90IGhhdmUgYGtleWAgYXR0cnNcbiAqIChhdmFpbGFibGUgdW5kZXIgYCRrZXkkYCBvbiBWTm9kZXMpIHRoZW4gdGhlIGZ1bmN0aW9uIGZhbGxzIGJhY2sgb24gbWVyZWx5XG4gKiBjaGVja2luZyB0aGF0IHRoZXkgaGF2ZSB0aGUgc2FtZSB0YWcuXG4gKlxuICogU28sIGluIG90aGVyIHdvcmRzLCBpZiBga2V5YCBhdHRycyBhcmUgbm90IHNldCBvbiBWTm9kZXMgd2hpY2ggbWF5IGJlXG4gKiBjaGFuZ2luZyBvcmRlciB3aXRoaW4gYSBgY2hpbGRyZW5gIGFycmF5IG9yIHNvbWV0aGluZyBhbG9uZyB0aG9zZSBsaW5lcyB0aGVuXG4gKiB3ZSBjb3VsZCBvYnRhaW4gYSBmYWxzZSBuZWdhdGl2ZSBhbmQgdGhlbiBoYXZlIHRvIGRvIG5lZWRsZXNzIHJlLXJlbmRlcmluZ1xuICogKGkuZS4gd2UnZCBzYXkgdHdvIFZOb2RlcyBhcmVuJ3QgZXF1YWwgd2hlbiBpbiBmYWN0IHRoZXkgc2hvdWxkIGJlKS5cbiAqXG4gKiBAcGFyYW0gbGVmdFZOb2RlIHRoZSBmaXJzdCBWTm9kZSB0byBjaGVja1xuICogQHBhcmFtIHJpZ2h0Vk5vZGUgdGhlIHNlY29uZCBWTm9kZSB0byBjaGVja1xuICogQHJldHVybnMgd2hldGhlciB0aGV5J3JlIGVxdWFsIG9yIG5vdFxuICovXG5jb25zdCBpc1NhbWVWbm9kZSA9IChsZWZ0Vk5vZGUsIHJpZ2h0Vk5vZGUpID0+IHtcbiAgICAvLyBjb21wYXJlIGlmIHR3byB2bm9kZSB0byBzZWUgaWYgdGhleSdyZSBcInRlY2huaWNhbGx5XCIgdGhlIHNhbWVcbiAgICAvLyBuZWVkIHRvIGhhdmUgdGhlIHNhbWUgZWxlbWVudCB0YWcsIGFuZCBzYW1lIGtleSB0byBiZSB0aGUgc2FtZVxuICAgIGlmIChsZWZ0Vk5vZGUuJHRhZyQgPT09IHJpZ2h0Vk5vZGUuJHRhZyQpIHtcbiAgICAgICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIGxlZnRWTm9kZS4kdGFnJCA9PT0gJ3Nsb3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gbGVmdFZOb2RlLiRuYW1lJCA9PT0gcmlnaHRWTm9kZS4kbmFtZSQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcyB3aWxsIGJlIHNldCBpZiBjb21wb25lbnRzIGluIHRoZSBidWlsZCBoYXZlIGBrZXlgIGF0dHJzIHNldCBvbiB0aGVtXG4gICAgICAgIGlmIChCVUlMRC52ZG9tS2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gbGVmdFZOb2RlLiRrZXkkID09PSByaWdodFZOb2RlLiRrZXkkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgcmVmZXJlbmNlTm9kZSA9IChub2RlKSA9PiB7XG4gICAgLy8gdGhpcyBub2RlIHdhcyByZWxvY2F0ZWQgdG8gYSBuZXcgbG9jYXRpb24gaW4gdGhlIGRvbVxuICAgIC8vIGJlY2F1c2Ugb2Ygc29tZSBvdGhlciBjb21wb25lbnQncyBzbG90XG4gICAgLy8gYnV0IHdlIHN0aWxsIGhhdmUgYW4gaHRtbCBjb21tZW50IGluIHBsYWNlIG9mIHdoZXJlXG4gICAgLy8gaXQncyBvcmlnaW5hbCBsb2NhdGlvbiB3YXMgYWNjb3JkaW5nIHRvIGl0J3Mgb3JpZ2luYWwgdmRvbVxuICAgIHJldHVybiAobm9kZSAmJiBub2RlWydzLW9sJ10pIHx8IG5vZGU7XG59O1xuY29uc3QgcGFyZW50UmVmZXJlbmNlTm9kZSA9IChub2RlKSA9PiAobm9kZVsncy1vbCddID8gbm9kZVsncy1vbCddIDogbm9kZSkucGFyZW50Tm9kZTtcbi8qKlxuICogSGFuZGxlIHJlY29uY2lsaW5nIGFuIG91dGRhdGVkIFZOb2RlIHdpdGggYSBuZXcgb25lIHdoaWNoIGNvcnJlc3BvbmRzIHRvXG4gKiBpdC4gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIGZsdXNoaW5nIHVwZGF0ZXMgdG8gdGhlIERPTSBhbmQgcmVjb25jaWxpbmcgdGhlXG4gKiBjaGlsZHJlbiBvZiB0aGUgdHdvIG5vZGVzIChpZiBhbnkpLlxuICpcbiAqIEBwYXJhbSBvbGRWTm9kZSBhbiBvbGQgVk5vZGUgd2hvc2UgRE9NIGVsZW1lbnQgYW5kIGNoaWxkcmVuIHdlIHdhbnQgdG8gdXBkYXRlXG4gKiBAcGFyYW0gbmV3Vk5vZGUgYSBuZXcgVk5vZGUgcmVwcmVzZW50aW5nIGFuIHVwZGF0ZWQgdmVyc2lvbiBvZiB0aGUgb2xkIG9uZVxuICovXG5jb25zdCBwYXRjaCA9IChvbGRWTm9kZSwgbmV3Vk5vZGUpID0+IHtcbiAgICBjb25zdCBlbG0gPSAobmV3Vk5vZGUuJGVsbSQgPSBvbGRWTm9kZS4kZWxtJCk7XG4gICAgY29uc3Qgb2xkQ2hpbGRyZW4gPSBvbGRWTm9kZS4kY2hpbGRyZW4kO1xuICAgIGNvbnN0IG5ld0NoaWxkcmVuID0gbmV3Vk5vZGUuJGNoaWxkcmVuJDtcbiAgICBjb25zdCB0YWcgPSBuZXdWTm9kZS4kdGFnJDtcbiAgICBjb25zdCB0ZXh0ID0gbmV3Vk5vZGUuJHRleHQkO1xuICAgIGxldCBkZWZhdWx0SG9sZGVyO1xuICAgIGlmICghQlVJTEQudmRvbVRleHQgfHwgdGV4dCA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoQlVJTEQuc3ZnKSB7XG4gICAgICAgICAgICAvLyB0ZXN0IGlmIHdlJ3JlIHJlbmRlcmluZyBhbiBzdmcgZWxlbWVudCwgb3Igc3RpbGwgcmVuZGVyaW5nIG5vZGVzIGluc2lkZSBvZiBvbmVcbiAgICAgICAgICAgIC8vIG9ubHkgYWRkIHRoaXMgdG8gdGhlIHdoZW4gdGhlIGNvbXBpbGVyIHNlZXMgd2UncmUgdXNpbmcgYW4gc3ZnIHNvbWV3aGVyZVxuICAgICAgICAgICAgaXNTdmdNb2RlID0gdGFnID09PSAnc3ZnJyA/IHRydWUgOiB0YWcgPT09ICdmb3JlaWduT2JqZWN0JyA/IGZhbHNlIDogaXNTdmdNb2RlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC52ZG9tQXR0cmlidXRlIHx8IEJVSUxELnJlZmxlY3QpIHtcbiAgICAgICAgICAgIGlmIChCVUlMRC5zbG90ICYmIHRhZyA9PT0gJ3Nsb3QnKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCByZW5kZXIgb2YgYW4gZWxlbWVudCBPUiBpdCdzIGFuIHVwZGF0ZVxuICAgICAgICAgICAgICAgIC8vIEFORCB3ZSBhbHJlYWR5IGtub3cgaXQncyBwb3NzaWJsZSBpdCBjb3VsZCBoYXZlIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAvLyB0aGlzIHVwZGF0ZXMgdGhlIGVsZW1lbnQncyBjc3MgY2xhc3NlcywgYXR0cnMsIHByb3BzLCBsaXN0ZW5lcnMsIGV0Yy5cbiAgICAgICAgICAgICAgICB1cGRhdGVFbGVtZW50KG9sZFZOb2RlLCBuZXdWTm9kZSwgaXNTdmdNb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQudXBkYXRhYmxlICYmIG9sZENoaWxkcmVuICE9PSBudWxsICYmIG5ld0NoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBsb29rcyBsaWtlIHRoZXJlJ3MgY2hpbGQgdm5vZGVzIGZvciBib3RoIHRoZSBvbGQgYW5kIG5ldyB2bm9kZXNcbiAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gY2FsbCBgdXBkYXRlQ2hpbGRyZW5gIHRvIHJlY29uY2lsZSB0aGVtXG4gICAgICAgICAgICB1cGRhdGVDaGlsZHJlbihlbG0sIG9sZENoaWxkcmVuLCBuZXdWTm9kZSwgbmV3Q2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld0NoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBubyBvbGQgY2hpbGQgdm5vZGVzLCBidXQgdGhlcmUgYXJlIG5ldyBjaGlsZCB2bm9kZXMgdG8gYWRkXG4gICAgICAgICAgICBpZiAoQlVJTEQudXBkYXRhYmxlICYmIEJVSUxELnZkb21UZXh0ICYmIG9sZFZOb2RlLiR0ZXh0JCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBvbGQgdm5vZGUgd2FzIHRleHQsIHNvIGJlIHN1cmUgdG8gY2xlYXIgaXQgb3V0XG4gICAgICAgICAgICAgICAgZWxtLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhZGQgdGhlIG5ldyB2bm9kZSBjaGlsZHJlblxuICAgICAgICAgICAgYWRkVm5vZGVzKGVsbSwgbnVsbCwgbmV3Vk5vZGUsIG5ld0NoaWxkcmVuLCAwLCBuZXdDaGlsZHJlbi5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChCVUlMRC51cGRhdGFibGUgJiYgb2xkQ2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG5vIG5ldyBjaGlsZCB2bm9kZXMsIGJ1dCB0aGVyZSBhcmUgb2xkIGNoaWxkIHZub2RlcyB0byByZW1vdmVcbiAgICAgICAgICAgIHJlbW92ZVZub2RlcyhvbGRDaGlsZHJlbiwgMCwgb2xkQ2hpbGRyZW4ubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELnN2ZyAmJiBpc1N2Z01vZGUgJiYgdGFnID09PSAnc3ZnJykge1xuICAgICAgICAgICAgaXNTdmdNb2RlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoQlVJTEQudmRvbVRleHQgJiYgQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgKGRlZmF1bHRIb2xkZXIgPSBlbG1bJ3MtY3InXSkpIHtcbiAgICAgICAgLy8gdGhpcyBlbGVtZW50IGhhcyBzbG90dGVkIGNvbnRlbnRcbiAgICAgICAgZGVmYXVsdEhvbGRlci5wYXJlbnROb2RlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gICAgZWxzZSBpZiAoQlVJTEQudmRvbVRleHQgJiYgb2xkVk5vZGUuJHRleHQkICE9PSB0ZXh0KSB7XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgdGV4dCBjb250ZW50IGZvciB0aGUgdGV4dCBvbmx5IHZub2RlXG4gICAgICAgIC8vIGFuZCBhbHNvIG9ubHkgaWYgdGhlIHRleHQgaXMgZGlmZmVyZW50IHRoYW4gYmVmb3JlXG4gICAgICAgIGVsbS5kYXRhID0gdGV4dDtcbiAgICB9XG59O1xuY29uc3QgdXBkYXRlRmFsbGJhY2tTbG90VmlzaWJpbGl0eSA9IChlbG0pID0+IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1jb25zdFxuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBlbG0uY2hpbGROb2RlcztcbiAgICBsZXQgY2hpbGROb2RlO1xuICAgIGxldCBpO1xuICAgIGxldCBpbGVuO1xuICAgIGxldCBqO1xuICAgIGxldCBzbG90TmFtZUF0dHI7XG4gICAgbGV0IG5vZGVUeXBlO1xuICAgIGZvciAoaSA9IDAsIGlsZW4gPSBjaGlsZE5vZGVzLmxlbmd0aDsgaSA8IGlsZW47IGkrKykge1xuICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiAoY2hpbGROb2RlLm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLykge1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZVsncy1zciddKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhIHNsb3QgZmFsbGJhY2sgbm9kZVxuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgc2xvdCBuYW1lIGZvciB0aGlzIHNsb3QgcmVmZXJlbmNlIG5vZGVcbiAgICAgICAgICAgICAgICBzbG90TmFtZUF0dHIgPSBjaGlsZE5vZGVbJ3Mtc24nXTtcbiAgICAgICAgICAgICAgICAvLyBieSBkZWZhdWx0IGFsd2F5cyBzaG93IGEgZmFsbGJhY2sgc2xvdCBub2RlXG4gICAgICAgICAgICAgICAgLy8gdGhlbiBoaWRlIGl0IGlmIHRoZXJlIGFyZSBvdGhlciBzbG90cyBpbiB0aGUgbGlnaHQgZG9tXG4gICAgICAgICAgICAgICAgY2hpbGROb2RlLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBpbGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZVR5cGUgPSBjaGlsZE5vZGVzW2pdLm5vZGVUeXBlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2Rlc1tqXVsncy1obiddICE9PSBjaGlsZE5vZGVbJ3MtaG4nXSB8fCBzbG90TmFtZUF0dHIgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHNpYmxpbmcgbm9kZSBpcyBmcm9tIGEgZGlmZmVyZW50IGNvbXBvbmVudCBPUiBpcyBhIG5hbWVkIGZhbGxiYWNrIHNsb3Qgbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLyAmJiBzbG90TmFtZUF0dHIgPT09IGNoaWxkTm9kZXNbal0uZ2V0QXR0cmlidXRlKCdzbG90JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGUuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYSBkZWZhdWx0IGZhbGxiYWNrIHNsb3Qgbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW55IGVsZW1lbnQgb3IgdGV4dCBub2RlICh3aXRoIGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgaGlkZSB0aGUgZGVmYXVsdCBmYWxsYmFjayBzbG90IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobm9kZVR5cGUgPT09IDMgLyogTk9ERV9UWVBFLlRleHROb2RlICovICYmIGNoaWxkTm9kZXNbal0udGV4dENvbnRlbnQudHJpbSgpICE9PSAnJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGUuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGtlZXAgZHJpbGxpbmcgZG93blxuICAgICAgICAgICAgdXBkYXRlRmFsbGJhY2tTbG90VmlzaWJpbGl0eShjaGlsZE5vZGUpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IHJlbG9jYXRlTm9kZXMgPSBbXTtcbmNvbnN0IHJlbG9jYXRlU2xvdENvbnRlbnQgPSAoZWxtKSA9PiB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItY29uc3RcbiAgICBsZXQgY2hpbGROb2RlO1xuICAgIGxldCBub2RlO1xuICAgIGxldCBob3N0Q29udGVudE5vZGVzO1xuICAgIGxldCBzbG90TmFtZUF0dHI7XG4gICAgbGV0IHJlbG9jYXRlTm9kZURhdGE7XG4gICAgbGV0IGo7XG4gICAgbGV0IGkgPSAwO1xuICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBlbG0uY2hpbGROb2RlcztcbiAgICBjb25zdCBpbGVuID0gY2hpbGROb2Rlcy5sZW5ndGg7XG4gICAgZm9yICg7IGkgPCBpbGVuOyBpKyspIHtcbiAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgaWYgKGNoaWxkTm9kZVsncy1zciddICYmIChub2RlID0gY2hpbGROb2RlWydzLWNyJ10pICYmIG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgLy8gZmlyc3QgZ290IHRoZSBjb250ZW50IHJlZmVyZW5jZSBjb21tZW50IG5vZGVcbiAgICAgICAgICAgIC8vIHRoZW4gd2UgZ290IGl0J3MgcGFyZW50LCB3aGljaCBpcyB3aGVyZSBhbGwgdGhlIGhvc3QgY29udGVudCBpcyBpbiBub3dcbiAgICAgICAgICAgIGhvc3RDb250ZW50Tm9kZXMgPSBub2RlLnBhcmVudE5vZGUuY2hpbGROb2RlcztcbiAgICAgICAgICAgIHNsb3ROYW1lQXR0ciA9IGNoaWxkTm9kZVsncy1zbiddO1xuICAgICAgICAgICAgZm9yIChqID0gaG9zdENvbnRlbnROb2Rlcy5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBob3N0Q29udGVudE5vZGVzW2pdO1xuICAgICAgICAgICAgICAgIGlmICghbm9kZVsncy1jbiddICYmICFub2RlWydzLW5yJ10gJiYgbm9kZVsncy1obiddICE9PSBjaGlsZE5vZGVbJ3MtaG4nXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQncyBkbyBzb21lIHJlbG9jYXRpbmcgdG8gaXRzIG5ldyBob21lXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBuZXZlciByZWxvY2F0ZSBhIGNvbnRlbnQgcmVmZXJlbmNlIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhhdCBpcyBzdXBwb3NlIHRvIGFsd2F5cyByZXByZXNlbnQgdGhlIG9yaWdpbmFsIGNvbnRlbnQgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTm9kZUxvY2F0ZWRJblNsb3Qobm9kZSwgc2xvdE5hbWVBdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBwb3NzaWJsZSB3ZSd2ZSBhbHJlYWR5IGRlY2lkZWQgdG8gcmVsb2NhdGUgdGhpcyBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVEYXRhID0gcmVsb2NhdGVOb2Rlcy5maW5kKChyKSA9PiByLiRub2RlVG9SZWxvY2F0ZSQgPT09IG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWFkZSBzb21lIGNoYW5nZXMgdG8gc2xvdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCdzIG1ha2Ugc3VyZSB3ZSBhbHNvIGRvdWJsZSBjaGVja1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGJhY2tzIGFyZSBjb3JyZWN0bHkgaGlkZGVuIG9yIHNob3duXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja1Nsb3RGYWxsYmFja1Zpc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsncy1zbiddID0gbm9kZVsncy1zbiddIHx8IHNsb3ROYW1lQXR0cjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWxvY2F0ZU5vZGVEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJldmlvdXNseSB3ZSBuZXZlciBmb3VuZCBhIHNsb3QgaG9tZSBmb3IgdGhpcyBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnV0IHR1cm5zIG91dCB3ZSBkaWQsIHNvIGxldCdzIHJlbWVtYmVyIGl0IG5vd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZURhdGEuJHNsb3RSZWZOb2RlJCA9IGNoaWxkTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0byBvdXIgbGlzdCBvZiBub2RlcyB0byByZWxvY2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzbG90UmVmTm9kZSQ6IGNoaWxkTm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJG5vZGVUb1JlbG9jYXRlJDogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlWydzLXNyJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVzLm1hcCgocmVsb2NhdGVOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc05vZGVMb2NhdGVkSW5TbG90KHJlbG9jYXRlTm9kZS4kbm9kZVRvUmVsb2NhdGUkLCBub2RlWydzLXNuJ10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGVEYXRhID0gcmVsb2NhdGVOb2Rlcy5maW5kKChyKSA9PiByLiRub2RlVG9SZWxvY2F0ZSQgPT09IG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbG9jYXRlTm9kZURhdGEgJiYgIXJlbG9jYXRlTm9kZS4kc2xvdFJlZk5vZGUkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2NhdGVOb2RlLiRzbG90UmVmTm9kZSQgPSByZWxvY2F0ZU5vZGVEYXRhLiRzbG90UmVmTm9kZSQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghcmVsb2NhdGVOb2Rlcy5zb21lKChyKSA9PiByLiRub2RlVG9SZWxvY2F0ZSQgPT09IG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyBmYXIgdGhpcyBlbGVtZW50IGRvZXMgbm90IGhhdmUgYSBzbG90IGhvbWUsIG5vdCBzZXR0aW5nIHNsb3RSZWZOb2RlIG9uIHB1cnBvc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHdlIG5ldmVyIGZpbmQgYSBob21lIGZvciB0aGlzIGVsZW1lbnQgdGhlbiB3ZSdsbCBuZWVkIHRvIGhpZGUgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG5vZGVUb1JlbG9jYXRlJDogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovKSB7XG4gICAgICAgICAgICByZWxvY2F0ZVNsb3RDb250ZW50KGNoaWxkTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgaXNOb2RlTG9jYXRlZEluU2xvdCA9IChub2RlVG9SZWxvY2F0ZSwgc2xvdE5hbWVBdHRyKSA9PiB7XG4gICAgaWYgKG5vZGVUb1JlbG9jYXRlLm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLykge1xuICAgICAgICBpZiAobm9kZVRvUmVsb2NhdGUuZ2V0QXR0cmlidXRlKCdzbG90JykgPT09IG51bGwgJiYgc2xvdE5hbWVBdHRyID09PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGVUb1JlbG9jYXRlLmdldEF0dHJpYnV0ZSgnc2xvdCcpID09PSBzbG90TmFtZUF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG5vZGVUb1JlbG9jYXRlWydzLXNuJ10gPT09IHNsb3ROYW1lQXR0cikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHNsb3ROYW1lQXR0ciA9PT0gJyc7XG59O1xuY29uc3QgY2FsbE5vZGVSZWZzID0gKHZOb2RlKSA9PiB7XG4gICAgaWYgKEJVSUxELnZkb21SZWYpIHtcbiAgICAgICAgdk5vZGUuJGF0dHJzJCAmJiB2Tm9kZS4kYXR0cnMkLnJlZiAmJiB2Tm9kZS4kYXR0cnMkLnJlZihudWxsKTtcbiAgICAgICAgdk5vZGUuJGNoaWxkcmVuJCAmJiB2Tm9kZS4kY2hpbGRyZW4kLm1hcChjYWxsTm9kZVJlZnMpO1xuICAgIH1cbn07XG4vKipcbiAqIFRoZSBtYWluIGVudHJ5IHBvaW50IGZvciBTdGVuY2lsJ3MgdmlydHVhbCBET00tYmFzZWQgcmVuZGVyaW5nIGVuZ2luZVxuICpcbiAqIEdpdmVuIGEge0BsaW5rIGQuSG9zdFJlZn0gY29udGFpbmVyIGFuZCBzb21lIHZpcnR1YWwgRE9NIG5vZGVzLCB0aGlzXG4gKiBmdW5jdGlvbiB3aWxsIGhhbmRsZSBjcmVhdGluZyBhIHZpcnR1YWwgRE9NIHRyZWUgd2l0aCBhIHNpbmdsZSByb290LCBwYXRjaGluZ1xuICogdGhlIGN1cnJlbnQgdmlydHVhbCBET00gdHJlZSBvbnRvIGFuIG9sZCBvbmUgKGlmIGFueSksIGRlYWxpbmcgd2l0aCBzbG90XG4gKiByZWxvY2F0aW9uLCBhbmQgcmVmbGVjdGluZyBhdHRyaWJ1dGVzLlxuICpcbiAqIEBwYXJhbSBob3N0UmVmIGRhdGEgbmVlZGVkIHRvIHJvb3QgYW5kIHJlbmRlciB0aGUgdmlydHVhbCBET00gdHJlZSwgc3VjaCBhc1xuICogdGhlIERPTSBub2RlIGludG8gd2hpY2ggaXQgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICogQHBhcmFtIHJlbmRlckZuUmVzdWx0cyB0aGUgdmlydHVhbCBET00gbm9kZXMgdG8gYmUgcmVuZGVyZWRcbiAqL1xuY29uc3QgcmVuZGVyVmRvbSA9IChob3N0UmVmLCByZW5kZXJGblJlc3VsdHMpID0+IHtcbiAgICBjb25zdCBob3N0RWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICAgIGNvbnN0IGNtcE1ldGEgPSBob3N0UmVmLiRjbXBNZXRhJDtcbiAgICBjb25zdCBvbGRWTm9kZSA9IGhvc3RSZWYuJHZub2RlJCB8fCBuZXdWTm9kZShudWxsLCBudWxsKTtcbiAgICBjb25zdCByb290Vm5vZGUgPSBpc0hvc3QocmVuZGVyRm5SZXN1bHRzKSA/IHJlbmRlckZuUmVzdWx0cyA6IGgobnVsbCwgbnVsbCwgcmVuZGVyRm5SZXN1bHRzKTtcbiAgICBob3N0VGFnTmFtZSA9IGhvc3RFbG0udGFnTmFtZTtcbiAgICAvLyA8SG9zdD4gcnVudGltZSBjaGVja1xuICAgIGlmIChCVUlMRC5pc0RldiAmJiBBcnJheS5pc0FycmF5KHJlbmRlckZuUmVzdWx0cykgJiYgcmVuZGVyRm5SZXN1bHRzLnNvbWUoaXNIb3N0KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSA8SG9zdD4gbXVzdCBiZSB0aGUgc2luZ2xlIHJvb3QgY29tcG9uZW50LlxuTG9va3MgbGlrZSB0aGUgcmVuZGVyKCkgZnVuY3Rpb24gb2YgXCIke2hvc3RUYWdOYW1lLnRvTG93ZXJDYXNlKCl9XCIgaXMgcmV0dXJuaW5nIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIDxIb3N0Pi5cblxuVGhlIHJlbmRlcigpIGZ1bmN0aW9uIHNob3VsZCBsb29rIGxpa2UgdGhpcyBpbnN0ZWFkOlxuXG5yZW5kZXIoKSB7XG4gIC8vIERvIG5vdCByZXR1cm4gYW4gYXJyYXlcbiAgcmV0dXJuIChcbiAgICA8SG9zdD57Y29udGVudH08L0hvc3Q+XG4gICk7XG59XG4gIGApO1xuICAgIH1cbiAgICBpZiAoQlVJTEQucmVmbGVjdCAmJiBjbXBNZXRhLiRhdHRyc1RvUmVmbGVjdCQpIHtcbiAgICAgICAgcm9vdFZub2RlLiRhdHRycyQgPSByb290Vm5vZGUuJGF0dHJzJCB8fCB7fTtcbiAgICAgICAgY21wTWV0YS4kYXR0cnNUb1JlZmxlY3QkLm1hcCgoW3Byb3BOYW1lLCBhdHRyaWJ1dGVdKSA9PiAocm9vdFZub2RlLiRhdHRycyRbYXR0cmlidXRlXSA9IGhvc3RFbG1bcHJvcE5hbWVdKSk7XG4gICAgfVxuICAgIHJvb3RWbm9kZS4kdGFnJCA9IG51bGw7XG4gICAgcm9vdFZub2RlLiRmbGFncyQgfD0gNCAvKiBWTk9ERV9GTEFHUy5pc0hvc3QgKi87XG4gICAgaG9zdFJlZi4kdm5vZGUkID0gcm9vdFZub2RlO1xuICAgIHJvb3RWbm9kZS4kZWxtJCA9IG9sZFZOb2RlLiRlbG0kID0gKEJVSUxELnNoYWRvd0RvbSA/IGhvc3RFbG0uc2hhZG93Um9vdCB8fCBob3N0RWxtIDogaG9zdEVsbSk7XG4gICAgaWYgKEJVSUxELnNjb3BlZCB8fCBCVUlMRC5zaGFkb3dEb20pIHtcbiAgICAgICAgc2NvcGVJZCA9IGhvc3RFbG1bJ3Mtc2MnXTtcbiAgICB9XG4gICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uKSB7XG4gICAgICAgIGNvbnRlbnRSZWYgPSBob3N0RWxtWydzLWNyJ107XG4gICAgICAgIHVzZU5hdGl2ZVNoYWRvd0RvbSA9IHN1cHBvcnRzU2hhZG93ICYmIChjbXBNZXRhLiRmbGFncyQgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSAhPT0gMDtcbiAgICAgICAgLy8gYWx3YXlzIHJlc2V0XG4gICAgICAgIGNoZWNrU2xvdEZhbGxiYWNrVmlzaWJpbGl0eSA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBzeW5jaHJvbm91cyBwYXRjaFxuICAgIHBhdGNoKG9sZFZOb2RlLCByb290Vm5vZGUpO1xuICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICAvLyB3aGlsZSB3ZSdyZSBtb3Zpbmcgbm9kZXMgYXJvdW5kIGV4aXN0aW5nIG5vZGVzLCB0ZW1wb3JhcmlseSBkaXNhYmxlXG4gICAgICAgIC8vIHRoZSBkaXNjb25uZWN0Q2FsbGJhY2sgZnJvbSB3b3JraW5nXG4gICAgICAgIHBsdC4kZmxhZ3MkIHw9IDEgLyogUExBVEZPUk1fRkxBR1MuaXNUbXBEaXNjb25uZWN0ZWQgKi87XG4gICAgICAgIGlmIChjaGVja1Nsb3RSZWxvY2F0ZSkge1xuICAgICAgICAgICAgcmVsb2NhdGVTbG90Q29udGVudChyb290Vm5vZGUuJGVsbSQpO1xuICAgICAgICAgICAgbGV0IHJlbG9jYXRlRGF0YTtcbiAgICAgICAgICAgIGxldCBub2RlVG9SZWxvY2F0ZTtcbiAgICAgICAgICAgIGxldCBvcmdMb2NhdGlvbk5vZGU7XG4gICAgICAgICAgICBsZXQgcGFyZW50Tm9kZVJlZjtcbiAgICAgICAgICAgIGxldCBpbnNlcnRCZWZvcmVOb2RlO1xuICAgICAgICAgICAgbGV0IHJlZk5vZGU7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICBmb3IgKDsgaSA8IHJlbG9jYXRlTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZWxvY2F0ZURhdGEgPSByZWxvY2F0ZU5vZGVzW2ldO1xuICAgICAgICAgICAgICAgIG5vZGVUb1JlbG9jYXRlID0gcmVsb2NhdGVEYXRhLiRub2RlVG9SZWxvY2F0ZSQ7XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlVG9SZWxvY2F0ZVsncy1vbCddKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGFkZCBhIHJlZmVyZW5jZSBub2RlIG1hcmtpbmcgdGhpcyBub2RlJ3Mgb3JpZ2luYWwgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLy8ga2VlcCBhIHJlZmVyZW5jZSB0byB0aGlzIG5vZGUgZm9yIGxhdGVyIGxvb2t1cHNcbiAgICAgICAgICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIEJVSUxELmlzRGVidWcgfHwgQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG9yaWdpbmFsTG9jYXRpb25EZWJ1Z05vZGUobm9kZVRvUmVsb2NhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBkb2MuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICAgICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGVbJ3MtbnInXSA9IG5vZGVUb1JlbG9jYXRlO1xuICAgICAgICAgICAgICAgICAgICBub2RlVG9SZWxvY2F0ZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSgobm9kZVRvUmVsb2NhdGVbJ3Mtb2wnXSA9IG9yZ0xvY2F0aW9uTm9kZSksIG5vZGVUb1JlbG9jYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcmVsb2NhdGVOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlbG9jYXRlRGF0YSA9IHJlbG9jYXRlTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgbm9kZVRvUmVsb2NhdGUgPSByZWxvY2F0ZURhdGEuJG5vZGVUb1JlbG9jYXRlJDtcbiAgICAgICAgICAgICAgICBpZiAocmVsb2NhdGVEYXRhLiRzbG90UmVmTm9kZSQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYnkgZGVmYXVsdCB3ZSdyZSBqdXN0IGdvaW5nIHRvIGluc2VydCBpdCBkaXJlY3RseVxuICAgICAgICAgICAgICAgICAgICAvLyBhZnRlciB0aGUgc2xvdCByZWZlcmVuY2Ugbm9kZVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlUmVmID0gcmVsb2NhdGVEYXRhLiRzbG90UmVmTm9kZSQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0QmVmb3JlTm9kZSA9IHJlbG9jYXRlRGF0YS4kc2xvdFJlZk5vZGUkLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGUgPSBub2RlVG9SZWxvY2F0ZVsncy1vbCddO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKG9yZ0xvY2F0aW9uTm9kZSA9IG9yZ0xvY2F0aW9uTm9kZS5wcmV2aW91c1NpYmxpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZOb2RlID0gb3JnTG9jYXRpb25Ob2RlWydzLW5yJ107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVmTm9kZSAmJiByZWZOb2RlWydzLXNuJ10gPT09IG5vZGVUb1JlbG9jYXRlWydzLXNuJ10gJiYgcGFyZW50Tm9kZVJlZiA9PT0gcmVmTm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmTm9kZSA9IHJlZk5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWZOb2RlIHx8ICFyZWZOb2RlWydzLW5yJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0QmVmb3JlTm9kZSA9IHJlZk5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoKCFpbnNlcnRCZWZvcmVOb2RlICYmIHBhcmVudE5vZGVSZWYgIT09IG5vZGVUb1JlbG9jYXRlLnBhcmVudE5vZGUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9SZWxvY2F0ZS5uZXh0U2libGluZyAhPT0gaW5zZXJ0QmVmb3JlTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UndmUgY2hlY2tlZCB0aGF0IGl0J3Mgd29ydGggd2hpbGUgdG8gcmVsb2NhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNpbmNlIHRoYXQgdGhlIG5vZGUgdG8gcmVsb2NhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhhcyBhIGRpZmZlcmVudCBuZXh0IHNpYmxpbmcgb3IgcGFyZW50IHJlbG9jYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVUb1JlbG9jYXRlICE9PSBpbnNlcnRCZWZvcmVOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFub2RlVG9SZWxvY2F0ZVsncy1obiddICYmIG5vZGVUb1JlbG9jYXRlWydzLW9sJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvYmFibHkgYSBjb21wb25lbnQgaW4gdGhlIGluZGV4Lmh0bWwgdGhhdCBkb2Vzbid0IGhhdmUgaXQncyBob3N0bmFtZSBzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvUmVsb2NhdGVbJ3MtaG4nXSA9IG5vZGVUb1JlbG9jYXRlWydzLW9sJ10ucGFyZW50Tm9kZS5ub2RlTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGl0IGJhY2sgdG8gdGhlIGRvbSBidXQgaW4gaXRzIG5ldyBob21lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Tm9kZVJlZi5pbnNlcnRCZWZvcmUobm9kZVRvUmVsb2NhdGUsIGluc2VydEJlZm9yZU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIG5vZGUgZG9lc24ndCBoYXZlIGEgc2xvdCBob21lIHRvIGdvIHRvLCBzbyBsZXQncyBoaWRlIGl0XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlVG9SZWxvY2F0ZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb1JlbG9jYXRlLmhpZGRlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoZWNrU2xvdEZhbGxiYWNrVmlzaWJpbGl0eSkge1xuICAgICAgICAgICAgdXBkYXRlRmFsbGJhY2tTbG90VmlzaWJpbGl0eShyb290Vm5vZGUuJGVsbSQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRvbmUgbW92aW5nIG5vZGVzIGFyb3VuZFxuICAgICAgICAvLyBhbGxvdyB0aGUgZGlzY29ubmVjdCBjYWxsYmFjayB0byB3b3JrIGFnYWluXG4gICAgICAgIHBsdC4kZmxhZ3MkICY9IH4xIC8qIFBMQVRGT1JNX0ZMQUdTLmlzVG1wRGlzY29ubmVjdGVkICovO1xuICAgICAgICAvLyBhbHdheXMgcmVzZXRcbiAgICAgICAgcmVsb2NhdGVOb2Rlcy5sZW5ndGggPSAwO1xuICAgIH1cbn07XG4vLyBzbG90IGNvbW1lbnQgZGVidWcgbm9kZXMgb25seSBjcmVhdGVkIHdpdGggdGhlIGAtLWRlYnVnYCBmbGFnXG4vLyBvdGhlcndpc2UgdGhlc2Ugbm9kZXMgYXJlIHRleHQgbm9kZXMgdy9vdXQgY29udGVudFxuY29uc3Qgc2xvdFJlZmVyZW5jZURlYnVnTm9kZSA9IChzbG90Vk5vZGUpID0+IGRvYy5jcmVhdGVDb21tZW50KGA8c2xvdCR7c2xvdFZOb2RlLiRuYW1lJCA/ICcgbmFtZT1cIicgKyBzbG90Vk5vZGUuJG5hbWUkICsgJ1wiJyA6ICcnfT4gKGhvc3Q9JHtob3N0VGFnTmFtZS50b0xvd2VyQ2FzZSgpfSlgKTtcbmNvbnN0IG9yaWdpbmFsTG9jYXRpb25EZWJ1Z05vZGUgPSAobm9kZVRvUmVsb2NhdGUpID0+IGRvYy5jcmVhdGVDb21tZW50KGBvcmctbG9jYXRpb24gZm9yIGAgK1xuICAgIChub2RlVG9SZWxvY2F0ZS5sb2NhbE5hbWVcbiAgICAgICAgPyBgPCR7bm9kZVRvUmVsb2NhdGUubG9jYWxOYW1lfT4gKGhvc3Q9JHtub2RlVG9SZWxvY2F0ZVsncy1obiddfSlgXG4gICAgICAgIDogYFske25vZGVUb1JlbG9jYXRlLnRleHRDb250ZW50fV1gKSk7XG5jb25zdCBhdHRhY2hUb0FuY2VzdG9yID0gKGhvc3RSZWYsIGFuY2VzdG9yQ29tcG9uZW50KSA9PiB7XG4gICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZyAmJiBhbmNlc3RvckNvbXBvbmVudCAmJiAhaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCAmJiBhbmNlc3RvckNvbXBvbmVudFsncy1wJ10pIHtcbiAgICAgICAgYW5jZXN0b3JDb21wb25lbnRbJ3MtcCddLnB1c2gobmV3IFByb21pc2UoKHIpID0+IChob3N0UmVmLiRvblJlbmRlclJlc29sdmUkID0gcikpKTtcbiAgICB9XG59O1xuY29uc3Qgc2NoZWR1bGVVcGRhdGUgPSAoaG9zdFJlZiwgaXNJbml0aWFsTG9hZCkgPT4ge1xuICAgIGlmIChCVUlMRC50YXNrUXVldWUgJiYgQlVJTEQudXBkYXRhYmxlKSB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxNiAvKiBIT1NUX0ZMQUdTLmlzUXVldWVkRm9yVXBkYXRlICovO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nICYmIGhvc3RSZWYuJGZsYWdzJCAmIDQgLyogSE9TVF9GTEFHUy5pc1dhaXRpbmdGb3JDaGlsZHJlbiAqLykge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gNTEyIC8qIEhPU1RfRkxBR1MubmVlZHNSZXJlbmRlciAqLztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhdHRhY2hUb0FuY2VzdG9yKGhvc3RSZWYsIGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JCk7XG4gICAgLy8gdGhlcmUgaXMgbm8gYW5jZXN0b3IgY29tcG9uZW50IG9yIHRoZSBhbmNlc3RvciBjb21wb25lbnRcbiAgICAvLyBoYXMgYWxyZWFkeSBmaXJlZCBvZmYgaXRzIGxpZmVjeWNsZSB1cGRhdGUgdGhlblxuICAgIC8vIGZpcmUgb2ZmIHRoZSBpbml0aWFsIHVwZGF0ZVxuICAgIGNvbnN0IGRpc3BhdGNoID0gKCkgPT4gZGlzcGF0Y2hIb29rcyhob3N0UmVmLCBpc0luaXRpYWxMb2FkKTtcbiAgICByZXR1cm4gQlVJTEQudGFza1F1ZXVlID8gd3JpdGVUYXNrKGRpc3BhdGNoKSA6IGRpc3BhdGNoKCk7XG59O1xuY29uc3QgZGlzcGF0Y2hIb29rcyA9IChob3N0UmVmLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gICAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICAgIGNvbnN0IGVuZFNjaGVkdWxlID0gY3JlYXRlVGltZSgnc2NoZWR1bGVVcGRhdGUnLCBob3N0UmVmLiRjbXBNZXRhJC4kdGFnTmFtZSQpO1xuICAgIGNvbnN0IGluc3RhbmNlID0gQlVJTEQubGF6eUxvYWQgPyBob3N0UmVmLiRsYXp5SW5zdGFuY2UkIDogZWxtO1xuICAgIGxldCBwcm9taXNlO1xuICAgIGlmIChpc0luaXRpYWxMb2FkKSB7XG4gICAgICAgIGlmIChCVUlMRC5sYXp5TG9hZCAmJiBCVUlMRC5ob3N0TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAyNTYgLyogSE9TVF9GTEFHUy5pc0xpc3RlblJlYWR5ICovO1xuICAgICAgICAgICAgaWYgKGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkLm1hcCgoW21ldGhvZE5hbWUsIGV2ZW50XSkgPT4gc2FmZUNhbGwoaW5zdGFuY2UsIG1ldGhvZE5hbWUsIGV2ZW50KSk7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgJ2NvbXBvbmVudFdpbGxMb2FkJyk7XG4gICAgICAgIGlmIChCVUlMRC5jbXBXaWxsTG9hZCkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50V2lsbExvYWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgJ2NvbXBvbmVudFdpbGxVcGRhdGUnKTtcbiAgICAgICAgaWYgKEJVSUxELmNtcFdpbGxVcGRhdGUpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudFdpbGxVcGRhdGUnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0TGlmZWN5Y2xlRXZlbnQoZWxtLCAnY29tcG9uZW50V2lsbFJlbmRlcicpO1xuICAgIGlmIChCVUlMRC5jbXBXaWxsUmVuZGVyKSB7XG4gICAgICAgIHByb21pc2UgPSB0aGVuKHByb21pc2UsICgpID0+IHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50V2lsbFJlbmRlcicpKTtcbiAgICB9XG4gICAgZW5kU2NoZWR1bGUoKTtcbiAgICByZXR1cm4gdGhlbihwcm9taXNlLCAoKSA9PiB1cGRhdGVDb21wb25lbnQoaG9zdFJlZiwgaW5zdGFuY2UsIGlzSW5pdGlhbExvYWQpKTtcbn07XG5jb25zdCB1cGRhdGVDb21wb25lbnQgPSBhc3luYyAoaG9zdFJlZiwgaW5zdGFuY2UsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgICAvLyB1cGRhdGVDb21wb25lbnRcbiAgICBjb25zdCBlbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gICAgY29uc3QgZW5kVXBkYXRlID0gY3JlYXRlVGltZSgndXBkYXRlJywgaG9zdFJlZi4kY21wTWV0YSQuJHRhZ05hbWUkKTtcbiAgICBjb25zdCByYyA9IGVsbVsncy1yYyddO1xuICAgIGlmIChCVUlMRC5zdHlsZSAmJiBpc0luaXRpYWxMb2FkKSB7XG4gICAgICAgIC8vIERPTSBXUklURSFcbiAgICAgICAgYXR0YWNoU3R5bGVzKGhvc3RSZWYpO1xuICAgIH1cbiAgICBjb25zdCBlbmRSZW5kZXIgPSBjcmVhdGVUaW1lKCdyZW5kZXInLCBob3N0UmVmLiRjbXBNZXRhJC4kdGFnTmFtZSQpO1xuICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMTAyNCAvKiBIT1NUX0ZMQUdTLmRldk9uUmVuZGVyICovO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUpIHtcbiAgICAgICAgYXdhaXQgY2FsbFJlbmRlcihob3N0UmVmLCBpbnN0YW5jZSwgZWxtKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNhbGxSZW5kZXIoaG9zdFJlZiwgaW5zdGFuY2UsIGVsbSk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5jc3NWYXJTaGltICYmIHBsdC4kY3NzU2hpbSQpIHtcbiAgICAgICAgcGx0LiRjc3NTaGltJC51cGRhdGVIb3N0KGVsbSk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICBob3N0UmVmLiRyZW5kZXJDb3VudCQrKztcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4xMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi87XG4gICAgfVxuICAgIGlmIChCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gbWFudWFsbHkgY29ubmVjdGVkIGNoaWxkIGNvbXBvbmVudHMgZHVyaW5nIHNlcnZlci1zaWRlIGh5ZHJhdGVcbiAgICAgICAgICAgIHNlcnZlclNpZGVDb25uZWN0ZWQoZWxtKTtcbiAgICAgICAgICAgIGlmIChpc0luaXRpYWxMb2FkKSB7XG4gICAgICAgICAgICAgICAgLy8gdXNpbmcgb25seSBkdXJpbmcgc2VydmVyLXNpZGUgaHlkcmF0ZVxuICAgICAgICAgICAgICAgIGlmIChob3N0UmVmLiRjbXBNZXRhJC4kZmxhZ3MkICYgMSAvKiBDTVBfRkxBR1Muc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAgICAgICAgICAgICBlbG1bJ3MtZW4nXSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChob3N0UmVmLiRjbXBNZXRhJC4kZmxhZ3MkICYgMiAvKiBDTVBfRkxBR1Muc2NvcGVkQ3NzRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAgICAgICAgICAgICBlbG1bJ3MtZW4nXSA9ICdjJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlLCBlbG0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcgJiYgcmMpIHtcbiAgICAgICAgLy8gb2ssIHNvIHR1cm5zIG91dCB0aGVyZSBhcmUgc29tZSBjaGlsZCBob3N0IGVsZW1lbnRzXG4gICAgICAgIC8vIHdhaXRpbmcgb24gdGhpcyBwYXJlbnQgZWxlbWVudCB0byBsb2FkXG4gICAgICAgIC8vIGxldCdzIGZpcmUgb2ZmIGFsbCB1cGRhdGUgY2FsbGJhY2tzIHdhaXRpbmdcbiAgICAgICAgcmMubWFwKChjYikgPT4gY2IoKSk7XG4gICAgICAgIGVsbVsncy1yYyddID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbmRSZW5kZXIoKTtcbiAgICBlbmRVcGRhdGUoKTtcbiAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuUHJvbWlzZXMgPSBlbG1bJ3MtcCddO1xuICAgICAgICBjb25zdCBwb3N0VXBkYXRlID0gKCkgPT4gcG9zdFVwZGF0ZUNvbXBvbmVudChob3N0UmVmKTtcbiAgICAgICAgaWYgKGNoaWxkcmVuUHJvbWlzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBwb3N0VXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChjaGlsZHJlblByb21pc2VzKS50aGVuKHBvc3RVcGRhdGUpO1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDQgLyogSE9TVF9GTEFHUy5pc1dhaXRpbmdGb3JDaGlsZHJlbiAqLztcbiAgICAgICAgICAgIGNoaWxkcmVuUHJvbWlzZXMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcG9zdFVwZGF0ZUNvbXBvbmVudChob3N0UmVmKTtcbiAgICB9XG59O1xuY29uc3QgY2FsbFJlbmRlciA9IChob3N0UmVmLCBpbnN0YW5jZSwgZWxtKSA9PiB7XG4gICAgLy8gaW4gb3JkZXIgZm9yIGJ1bmRsZXJzIHRvIGNvcnJlY3RseSB0cmVlc2hha2UgdGhlIEJVSUxEIG9iamVjdFxuICAgIC8vIHdlIG5lZWQgdG8gZW5zdXJlIEJVSUxEIGlzIG5vdCBkZW9wdGltaXplZCB3aXRoaW4gYSB0cnkvY2F0Y2hcbiAgICAvLyBodHRwczovL3JvbGx1cGpzLm9yZy9ndWlkZS9lbi8jdHJlZXNoYWtlIHRyeUNhdGNoRGVvcHRpbWl6YXRpb25cbiAgICBjb25zdCBhbGxSZW5kZXJGbiA9IEJVSUxELmFsbFJlbmRlckZuID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IGxhenlMb2FkID0gQlVJTEQubGF6eUxvYWQgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc3QgdGFza1F1ZXVlID0gQlVJTEQudGFza1F1ZXVlID8gdHJ1ZSA6IGZhbHNlO1xuICAgIGNvbnN0IHVwZGF0YWJsZSA9IEJVSUxELnVwZGF0YWJsZSA/IHRydWUgOiBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICByZW5kZXJpbmdSZWYgPSBpbnN0YW5jZTtcbiAgICAgICAgaW5zdGFuY2UgPSBhbGxSZW5kZXJGbiA/IGluc3RhbmNlLnJlbmRlcigpIDogaW5zdGFuY2UucmVuZGVyICYmIGluc3RhbmNlLnJlbmRlcigpO1xuICAgICAgICBpZiAodXBkYXRhYmxlICYmIHRhc2tRdWV1ZSkge1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4xNiAvKiBIT1NUX0ZMQUdTLmlzUXVldWVkRm9yVXBkYXRlICovO1xuICAgICAgICB9XG4gICAgICAgIGlmICh1cGRhdGFibGUgfHwgbGF6eUxvYWQpIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELmhhc1JlbmRlckZuIHx8IEJVSUxELnJlZmxlY3QpIHtcbiAgICAgICAgICAgIGlmIChCVUlMRC52ZG9tUmVuZGVyIHx8IEJVSUxELnJlZmxlY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBsb29rcyBsaWtlIHdlJ3ZlIGdvdCBjaGlsZCBub2RlcyB0byByZW5kZXIgaW50byB0aGlzIGhvc3QgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIG9yIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBjc3MgY2xhc3MvYXR0cnMgb24gdGhlIGhvc3QgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIERPTSBXUklURSFcbiAgICAgICAgICAgICAgICBpZiAoQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpbnN0YW5jZSkudGhlbigodmFsdWUpID0+IHJlbmRlclZkb20oaG9zdFJlZiwgdmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclZkb20oaG9zdFJlZiwgaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbS50ZXh0Q29udGVudCA9IGluc3RhbmNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGVFcnJvcihlLCBob3N0UmVmLiRob3N0RWxlbWVudCQpO1xuICAgIH1cbiAgICByZW5kZXJpbmdSZWYgPSBudWxsO1xuICAgIHJldHVybiBudWxsO1xufTtcbmNvbnN0IGdldFJlbmRlcmluZ1JlZiA9ICgpID0+IHJlbmRlcmluZ1JlZjtcbmNvbnN0IHBvc3RVcGRhdGVDb21wb25lbnQgPSAoaG9zdFJlZikgPT4ge1xuICAgIGNvbnN0IHRhZ05hbWUgPSBob3N0UmVmLiRjbXBNZXRhJC4kdGFnTmFtZSQ7XG4gICAgY29uc3QgZWxtID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkO1xuICAgIGNvbnN0IGVuZFBvc3RVcGRhdGUgPSBjcmVhdGVUaW1lKCdwb3N0VXBkYXRlJywgdGFnTmFtZSk7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBCVUlMRC5sYXp5TG9hZCA/IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgOiBlbG07XG4gICAgY29uc3QgYW5jZXN0b3JDb21wb25lbnQgPSBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQ7XG4gICAgaWYgKEJVSUxELmNtcERpZFJlbmRlcikge1xuICAgICAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi87XG4gICAgICAgIH1cbiAgICAgICAgc2FmZUNhbGwoaW5zdGFuY2UsICdjb21wb25lbnREaWRSZW5kZXInKTtcbiAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfjEwMjQgLyogSE9TVF9GTEFHUy5kZXZPblJlbmRlciAqLztcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbWl0TGlmZWN5Y2xlRXZlbnQoZWxtLCAnY29tcG9uZW50RGlkUmVuZGVyJyk7XG4gICAgaWYgKCEoaG9zdFJlZi4kZmxhZ3MkICYgNjQgLyogSE9TVF9GTEFHUy5oYXNMb2FkZWRDb21wb25lbnQgKi8pKSB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA2NCAvKiBIT1NUX0ZMQUdTLmhhc0xvYWRlZENvbXBvbmVudCAqLztcbiAgICAgICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZyAmJiBCVUlMRC5jc3NBbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgLy8gRE9NIFdSSVRFIVxuICAgICAgICAgICAgYWRkSHlkcmF0ZWRGbGFnKGVsbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELmNtcERpZExvYWQpIHtcbiAgICAgICAgICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAyMDQ4IC8qIEhPU1RfRkxBR1MuZGV2T25EaWRMb2FkICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2FmZUNhbGwoaW5zdGFuY2UsICdjb21wb25lbnREaWRMb2FkJyk7XG4gICAgICAgICAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfjIwNDggLyogSE9TVF9GTEFHUy5kZXZPbkRpZExvYWQgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZW1pdExpZmVjeWNsZUV2ZW50KGVsbSwgJ2NvbXBvbmVudERpZExvYWQnKTtcbiAgICAgICAgZW5kUG9zdFVwZGF0ZSgpO1xuICAgICAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nKSB7XG4gICAgICAgICAgICBob3N0UmVmLiRvblJlYWR5UmVzb2x2ZSQoZWxtKTtcbiAgICAgICAgICAgIGlmICghYW5jZXN0b3JDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBhcHBEaWRMb2FkKHRhZ05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoQlVJTEQuY21wRGlkVXBkYXRlKSB7XG4gICAgICAgICAgICAvLyB3ZSd2ZSBhbHJlYWR5IGxvYWRlZCB0aGlzIGNvbXBvbmVudFxuICAgICAgICAgICAgLy8gZmlyZSBvZmYgdGhlIHVzZXIncyBjb21wb25lbnREaWRVcGRhdGUgbWV0aG9kIChpZiBvbmUgd2FzIHByb3ZpZGVkKVxuICAgICAgICAgICAgLy8gY29tcG9uZW50RGlkVXBkYXRlIHJ1bnMgQUZURVIgcmVuZGVyKCkgaGFzIGJlZW4gY2FsbGVkXG4gICAgICAgICAgICAvLyBhbmQgYWxsIGNoaWxkIGNvbXBvbmVudHMgaGF2ZSBmaW5pc2hlZCB1cGRhdGluZ1xuICAgICAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDEwMjQgLyogSE9TVF9GTEFHUy5kZXZPblJlbmRlciAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50RGlkVXBkYXRlJyk7XG4gICAgICAgICAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfjEwMjQgLyogSE9TVF9GTEFHUy5kZXZPblJlbmRlciAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbWl0TGlmZWN5Y2xlRXZlbnQoZWxtLCAnY29tcG9uZW50RGlkVXBkYXRlJyk7XG4gICAgICAgIGVuZFBvc3RVcGRhdGUoKTtcbiAgICB9XG4gICAgaWYgKEJVSUxELmhvdE1vZHVsZVJlcGxhY2VtZW50KSB7XG4gICAgICAgIGVsbVsncy1obXItbG9hZCddICYmIGVsbVsncy1obXItbG9hZCddKCk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5tZXRob2QgJiYgQlVJTEQubGF6eUxvYWQpIHtcbiAgICAgICAgaG9zdFJlZi4kb25JbnN0YW5jZVJlc29sdmUkKGVsbSk7XG4gICAgfVxuICAgIC8vIGxvYWQgZXZlbnRzIGZpcmUgZnJvbSBib3R0b20gdG8gdG9wXG4gICAgLy8gdGhlIGRlZXBlc3QgZWxlbWVudHMgbG9hZCBmaXJzdCB0aGVuIGJ1YmJsZXMgdXBcbiAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nKSB7XG4gICAgICAgIGlmIChob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKSB7XG4gICAgICAgICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkKCk7XG4gICAgICAgICAgICBob3N0UmVmLiRvblJlbmRlclJlc29sdmUkID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChob3N0UmVmLiRmbGFncyQgJiA1MTIgLyogSE9TVF9GTEFHUy5uZWVkc1JlcmVuZGVyICovKSB7XG4gICAgICAgICAgICBuZXh0VGljaygoKSA9PiBzY2hlZHVsZVVwZGF0ZShob3N0UmVmLCBmYWxzZSkpO1xuICAgICAgICB9XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+KDQgLyogSE9TVF9GTEFHUy5pc1dhaXRpbmdGb3JDaGlsZHJlbiAqLyB8IDUxMiAvKiBIT1NUX0ZMQUdTLm5lZWRzUmVyZW5kZXIgKi8pO1xuICAgIH1cbiAgICAvLyAoIOKAol/igKIpXG4gICAgLy8gKCDigKJf4oCiKT7ijJDilqAt4pagXG4gICAgLy8gKOKMkOKWoF/ilqApXG59O1xuY29uc3QgZm9yY2VVcGRhdGUgPSAocmVmKSA9PiB7XG4gICAgaWYgKEJVSUxELnVwZGF0YWJsZSkge1xuICAgICAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihyZWYpO1xuICAgICAgICBjb25zdCBpc0Nvbm5lY3RlZCA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JC5pc0Nvbm5lY3RlZDtcbiAgICAgICAgaWYgKGlzQ29ubmVjdGVkICYmXG4gICAgICAgICAgICAoaG9zdFJlZi4kZmxhZ3MkICYgKDIgLyogSE9TVF9GTEFHUy5oYXNSZW5kZXJlZCAqLyB8IDE2IC8qIEhPU1RfRkxBR1MuaXNRdWV1ZWRGb3JVcGRhdGUgKi8pKSA9PT0gMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovKSB7XG4gICAgICAgICAgICBzY2hlZHVsZVVwZGF0ZShob3N0UmVmLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmV0dXJucyBcInRydWVcIiB3aGVuIHRoZSBmb3JjZWQgdXBkYXRlIHdhcyBzdWNjZXNzZnVsbHkgc2NoZWR1bGVkXG4gICAgICAgIHJldHVybiBpc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbmNvbnN0IGFwcERpZExvYWQgPSAod2hvKSA9PiB7XG4gICAgLy8gb24gYXBwbG9hZFxuICAgIC8vIHdlIGhhdmUgZmluaXNoIHRoZSBmaXJzdCBiaWcgaW5pdGlhbCByZW5kZXJcbiAgICBpZiAoQlVJTEQuY3NzQW5ub3RhdGlvbnMpIHtcbiAgICAgICAgYWRkSHlkcmF0ZWRGbGFnKGRvYy5kb2N1bWVudEVsZW1lbnQpO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuYXN5bmNRdWV1ZSkge1xuICAgICAgICBwbHQuJGZsYWdzJCB8PSAyIC8qIFBMQVRGT1JNX0ZMQUdTLmFwcExvYWRlZCAqLztcbiAgICB9XG4gICAgbmV4dFRpY2soKCkgPT4gZW1pdEV2ZW50KHdpbiwgJ2FwcGxvYWQnLCB7IGRldGFpbDogeyBuYW1lc3BhY2U6IE5BTUVTUEFDRSB9IH0pKTtcbiAgICBpZiAoQlVJTEQucHJvZmlsZSAmJiBwZXJmb3JtYW5jZS5tZWFzdXJlKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1lYXN1cmUoYFtTdGVuY2lsXSAke05BTUVTUEFDRX0gaW5pdGlhbCBsb2FkIChieSAke3dob30pYCwgJ3N0OmFwcDpzdGFydCcpO1xuICAgIH1cbn07XG5jb25zdCBzYWZlQ2FsbCA9IChpbnN0YW5jZSwgbWV0aG9kLCBhcmcpID0+IHtcbiAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2VbbWV0aG9kXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlW21ldGhvZF0oYXJnKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59O1xuY29uc3QgdGhlbiA9IChwcm9taXNlLCB0aGVuRm4pID0+IHtcbiAgICByZXR1cm4gcHJvbWlzZSAmJiBwcm9taXNlLnRoZW4gPyBwcm9taXNlLnRoZW4odGhlbkZuKSA6IHRoZW5GbigpO1xufTtcbmNvbnN0IGVtaXRMaWZlY3ljbGVFdmVudCA9IChlbG0sIGxpZmVjeWNsZU5hbWUpID0+IHtcbiAgICBpZiAoQlVJTEQubGlmZWN5Y2xlRE9NRXZlbnRzKSB7XG4gICAgICAgIGVtaXRFdmVudChlbG0sICdzdGVuY2lsXycgKyBsaWZlY3ljbGVOYW1lLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2U6IE5BTUVTUEFDRSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBhZGRIeWRyYXRlZEZsYWcgPSAoZWxtKSA9PiBCVUlMRC5oeWRyYXRlZENsYXNzXG4gICAgPyBlbG0uY2xhc3NMaXN0LmFkZCgnaHlkcmF0ZWQnKVxuICAgIDogQlVJTEQuaHlkcmF0ZWRBdHRyaWJ1dGVcbiAgICAgICAgPyBlbG0uc2V0QXR0cmlidXRlKCdoeWRyYXRlZCcsICcnKVxuICAgICAgICA6IHVuZGVmaW5lZDtcbmNvbnN0IHNlcnZlclNpZGVDb25uZWN0ZWQgPSAoZWxtKSA9PiB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBlbG0uY2hpbGRyZW47XG4gICAgaWYgKGNoaWxkcmVuICE9IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRFbG0gPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRFbG0uY29ubmVjdGVkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjaGlsZEVsbS5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VydmVyU2lkZUNvbm5lY3RlZChjaGlsZEVsbSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgZ2V0VmFsdWUgPSAocmVmLCBwcm9wTmFtZSkgPT4gZ2V0SG9zdFJlZihyZWYpLiRpbnN0YW5jZVZhbHVlcyQuZ2V0KHByb3BOYW1lKTtcbmNvbnN0IHNldFZhbHVlID0gKHJlZiwgcHJvcE5hbWUsIG5ld1ZhbCwgY21wTWV0YSkgPT4ge1xuICAgIC8vIGNoZWNrIG91ciBuZXcgcHJvcGVydHkgdmFsdWUgYWdhaW5zdCBvdXIgaW50ZXJuYWwgdmFsdWVcbiAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihyZWYpO1xuICAgIGNvbnN0IGVsbSA9IEJVSUxELmxhenlMb2FkID8gaG9zdFJlZi4kaG9zdEVsZW1lbnQkIDogcmVmO1xuICAgIGNvbnN0IG9sZFZhbCA9IGhvc3RSZWYuJGluc3RhbmNlVmFsdWVzJC5nZXQocHJvcE5hbWUpO1xuICAgIGNvbnN0IGZsYWdzID0gaG9zdFJlZi4kZmxhZ3MkO1xuICAgIGNvbnN0IGluc3RhbmNlID0gQlVJTEQubGF6eUxvYWQgPyBob3N0UmVmLiRsYXp5SW5zdGFuY2UkIDogZWxtO1xuICAgIG5ld1ZhbCA9IHBhcnNlUHJvcGVydHlWYWx1ZShuZXdWYWwsIGNtcE1ldGEuJG1lbWJlcnMkW3Byb3BOYW1lXVswXSk7XG4gICAgLy8gZXhwbGljaXRseSBjaGVjayBmb3IgTmFOIG9uIGJvdGggc2lkZXMsIGFzIGBOYU4gPT09IE5hTmAgaXMgYWx3YXlzIGZhbHNlXG4gICAgY29uc3QgYXJlQm90aE5hTiA9IE51bWJlci5pc05hTihvbGRWYWwpICYmIE51bWJlci5pc05hTihuZXdWYWwpO1xuICAgIGNvbnN0IGRpZFZhbHVlQ2hhbmdlID0gbmV3VmFsICE9PSBvbGRWYWwgJiYgIWFyZUJvdGhOYU47XG4gICAgaWYgKCghQlVJTEQubGF6eUxvYWQgfHwgIShmbGFncyAmIDggLyogSE9TVF9GTEFHUy5pc0NvbnN0cnVjdGluZ0luc3RhbmNlICovKSB8fCBvbGRWYWwgPT09IHVuZGVmaW5lZCkgJiYgZGlkVmFsdWVDaGFuZ2UpIHtcbiAgICAgICAgLy8gZ2Fkem9va3MhIHRoZSBwcm9wZXJ0eSdzIHZhbHVlIGhhcyBjaGFuZ2VkISFcbiAgICAgICAgLy8gc2V0IG91ciBuZXcgdmFsdWUhXG4gICAgICAgIGhvc3RSZWYuJGluc3RhbmNlVmFsdWVzJC5zZXQocHJvcE5hbWUsIG5ld1ZhbCk7XG4gICAgICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICAgICAgaWYgKGhvc3RSZWYuJGZsYWdzJCAmIDEwMjQgLyogSE9TVF9GTEFHUy5kZXZPblJlbmRlciAqLykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGVEZXZXYXJuKGBUaGUgc3RhdGUvcHJvcCBcIiR7cHJvcE5hbWV9XCIgY2hhbmdlZCBkdXJpbmcgcmVuZGVyaW5nLiBUaGlzIGNhbiBwb3RlbnRpYWxseSBsZWFkIHRvIGluZmluaXRlLWxvb3BzIGFuZCBvdGhlciBidWdzLmAsICdcXG5FbGVtZW50JywgZWxtLCAnXFxuTmV3IHZhbHVlJywgbmV3VmFsLCAnXFxuT2xkIHZhbHVlJywgb2xkVmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhvc3RSZWYuJGZsYWdzJCAmIDIwNDggLyogSE9TVF9GTEFHUy5kZXZPbkRpZExvYWQgKi8pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlRGV2V2FybihgVGhlIHN0YXRlL3Byb3AgXCIke3Byb3BOYW1lfVwiIGNoYW5nZWQgZHVyaW5nIFwiY29tcG9uZW50RGlkTG9hZCgpXCIsIHRoaXMgdHJpZ2dlcnMgZXh0cmEgcmUtcmVuZGVycywgdHJ5IHRvIHNldHVwIG9uIFwiY29tcG9uZW50V2lsbExvYWQoKVwiYCwgJ1xcbkVsZW1lbnQnLCBlbG0sICdcXG5OZXcgdmFsdWUnLCBuZXdWYWwsICdcXG5PbGQgdmFsdWUnLCBvbGRWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghQlVJTEQubGF6eUxvYWQgfHwgaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIC8vIGdldCBhbiBhcnJheSBvZiBtZXRob2QgbmFtZXMgb2Ygd2F0Y2ggZnVuY3Rpb25zIHRvIGNhbGxcbiAgICAgICAgICAgIGlmIChCVUlMRC53YXRjaENhbGxiYWNrICYmIGNtcE1ldGEuJHdhdGNoZXJzJCAmJiBmbGFncyAmIDEyOCAvKiBIT1NUX0ZMQUdTLmlzV2F0Y2hSZWFkeSAqLykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdhdGNoTWV0aG9kcyA9IGNtcE1ldGEuJHdhdGNoZXJzJFtwcm9wTmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKHdhdGNoTWV0aG9kcykge1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIGluc3RhbmNlIGlzIHdhdGNoaW5nIGZvciB3aGVuIHRoaXMgcHJvcGVydHkgY2hhbmdlZFxuICAgICAgICAgICAgICAgICAgICB3YXRjaE1ldGhvZHMubWFwKCh3YXRjaE1ldGhvZE5hbWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmlyZSBvZmYgZWFjaCBvZiB0aGUgd2F0Y2ggbWV0aG9kcyB0aGF0IGFyZSB3YXRjaGluZyB0aGlzIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2Vbd2F0Y2hNZXRob2ROYW1lXShuZXdWYWwsIG9sZFZhbCwgcHJvcE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlRXJyb3IoZSwgZWxtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELnVwZGF0YWJsZSAmJlxuICAgICAgICAgICAgICAgIChmbGFncyAmICgyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi8gfCAxNiAvKiBIT1NUX0ZMQUdTLmlzUXVldWVkRm9yVXBkYXRlICovKSkgPT09IDIgLyogSE9TVF9GTEFHUy5oYXNSZW5kZXJlZCAqLykge1xuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5jbXBTaG91bGRVcGRhdGUgJiYgaW5zdGFuY2UuY29tcG9uZW50U2hvdWxkVXBkYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5jb21wb25lbnRTaG91bGRVcGRhdGUobmV3VmFsLCBvbGRWYWwsIHByb3BOYW1lKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsb29rcyBsaWtlIHRoaXMgdmFsdWUgYWN0dWFsbHkgY2hhbmdlZCwgc28gd2UndmUgZ290IHdvcmsgdG8gZG8hXG4gICAgICAgICAgICAgICAgLy8gYnV0IG9ubHkgaWYgd2UndmUgYWxyZWFkeSByZW5kZXJlZCwgb3RoZXJ3aXNlIGp1c3QgY2hpbGwgb3V0XG4gICAgICAgICAgICAgICAgLy8gcXVldWUgdGhhdCB3ZSBuZWVkIHRvIGRvIGFuIHVwZGF0ZSwgYnV0IGRvbid0IHdvcnJ5IGFib3V0IHF1ZXVpbmdcbiAgICAgICAgICAgICAgICAvLyB1cCBtaWxsaW9ucyBjdXogdGhpcyBmdW5jdGlvbiBlbnN1cmVzIGl0IG9ubHkgcnVucyBvbmNlXG4gICAgICAgICAgICAgICAgc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogQXR0YWNoIGEgc2VyaWVzIG9mIHJ1bnRpbWUgY29uc3RydWN0cyB0byBhIGNvbXBpbGVkIFN0ZW5jaWwgY29tcG9uZW50XG4gKiBjb25zdHJ1Y3RvciwgaW5jbHVkaW5nIGdldHRlcnMgYW5kIHNldHRlcnMgZm9yIHRoZSBgQFByb3BgIGFuZCBgQFN0YXRlYFxuICogZGVjb3JhdG9ycywgY2FsbGJhY2tzIGZvciB3aGVuIGF0dHJpYnV0ZXMgY2hhbmdlLCBhbmQgc28gb24uXG4gKlxuICogQHBhcmFtIENzdHIgdGhlIGNvbnN0cnVjdG9yIGZvciBhIGNvbXBvbmVudCB0aGF0IHdlIG5lZWQgdG8gcHJvY2Vzc1xuICogQHBhcmFtIGNtcE1ldGEgbWV0YWRhdGEgY29sbGVjdGVkIHByZXZpb3VzbHkgYWJvdXQgdGhlIGNvbXBvbmVudFxuICogQHBhcmFtIGZsYWdzIGEgbnVtYmVyIHVzZWQgdG8gc3RvcmUgYSBzZXJpZXMgb2YgYml0IGZsYWdzXG4gKiBAcmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgc2FtZSBjb25zdHJ1Y3RvciBwYXNzZWQgaW4gKGJ1dCBub3cgbXV0YXRlZClcbiAqL1xuY29uc3QgcHJveHlDb21wb25lbnQgPSAoQ3N0ciwgY21wTWV0YSwgZmxhZ3MpID0+IHtcbiAgICBpZiAoQlVJTEQubWVtYmVyICYmIGNtcE1ldGEuJG1lbWJlcnMkKSB7XG4gICAgICAgIGlmIChCVUlMRC53YXRjaENhbGxiYWNrICYmIENzdHIud2F0Y2hlcnMpIHtcbiAgICAgICAgICAgIGNtcE1ldGEuJHdhdGNoZXJzJCA9IENzdHIud2F0Y2hlcnM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSXQncyBiZXR0ZXIgdG8gaGF2ZSBhIGNvbnN0IHRoYW4gdHdvIE9iamVjdC5lbnRyaWVzKClcbiAgICAgICAgY29uc3QgbWVtYmVycyA9IE9iamVjdC5lbnRyaWVzKGNtcE1ldGEuJG1lbWJlcnMkKTtcbiAgICAgICAgY29uc3QgcHJvdG90eXBlID0gQ3N0ci5wcm90b3R5cGU7XG4gICAgICAgIG1lbWJlcnMubWFwKChbbWVtYmVyTmFtZSwgW21lbWJlckZsYWdzXV0pID0+IHtcbiAgICAgICAgICAgIGlmICgoQlVJTEQucHJvcCB8fCBCVUlMRC5zdGF0ZSkgJiZcbiAgICAgICAgICAgICAgICAobWVtYmVyRmxhZ3MgJiAzMSAvKiBNRU1CRVJfRkxBR1MuUHJvcCAqLyB8fFxuICAgICAgICAgICAgICAgICAgICAoKCFCVUlMRC5sYXp5TG9hZCB8fCBmbGFncyAmIDIgLyogUFJPWFlfRkxBR1MucHJveHlTdGF0ZSAqLykgJiYgbWVtYmVyRmxhZ3MgJiAzMiAvKiBNRU1CRVJfRkxBR1MuU3RhdGUgKi8pKSkge1xuICAgICAgICAgICAgICAgIC8vIHByb3h5Q29tcG9uZW50IC0gcHJvcFxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsIG1lbWJlck5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJveHlDb21wb25lbnQsIGdldCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFZhbHVlKHRoaXMsIG1lbWJlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBzZXQobmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgZHVyaW5nIGRldiB0aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWYgPSBnZXRIb3N0UmVmKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBhcmUgcHJveHlpbmcgdGhlIGluc3RhbmNlIChub3QgZWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZmxhZ3MgJiAxIC8qIFBST1hZX0ZMQUdTLmlzRWxlbWVudENvbnN0cnVjdG9yICovKSA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgZWxlbWVudCBpcyBub3QgY29uc3RydWN0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWYuJGZsYWdzJCAmIDggLyogSE9TVF9GTEFHUy5pc0NvbnN0cnVjdGluZ0luc3RhbmNlICovKSA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbWVtYmVyIGlzIGEgcHJvcFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWVtYmVyRmxhZ3MgJiAzMSAvKiBNRU1CRVJfRkxBR1MuUHJvcCAqLykgIT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG1lbWJlciBpcyBub3QgbXV0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWVtYmVyRmxhZ3MgJiAxMDI0IC8qIE1FTUJFUl9GTEFHUy5NdXRhYmxlICovKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlRGV2V2FybihgQFByb3AoKSBcIiR7bWVtYmVyTmFtZX1cIiBvbiA8JHtjbXBNZXRhLiR0YWdOYW1lJH0+IGlzIGltbXV0YWJsZSBidXQgd2FzIG1vZGlmaWVkIGZyb20gd2l0aGluIHRoZSBjb21wb25lbnQuXFxuTW9yZSBpbmZvcm1hdGlvbjogaHR0cHM6Ly9zdGVuY2lsanMuY29tL2RvY3MvcHJvcGVydGllcyNwcm9wLW11dGFiaWxpdHlgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm94eUNvbXBvbmVudCwgc2V0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh0aGlzLCBtZW1iZXJOYW1lLCBuZXdWYWx1ZSwgY21wTWV0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKEJVSUxELmxhenlMb2FkICYmXG4gICAgICAgICAgICAgICAgQlVJTEQubWV0aG9kICYmXG4gICAgICAgICAgICAgICAgZmxhZ3MgJiAxIC8qIFBST1hZX0ZMQUdTLmlzRWxlbWVudENvbnN0cnVjdG9yICovICYmXG4gICAgICAgICAgICAgICAgbWVtYmVyRmxhZ3MgJiA2NCAvKiBNRU1CRVJfRkxBR1MuTWV0aG9kICovKSB7XG4gICAgICAgICAgICAgICAgLy8gcHJveHlDb21wb25lbnQgLSBtZXRob2RcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG90eXBlLCBtZW1iZXJOYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IGdldEhvc3RSZWYodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmLiRvbkluc3RhbmNlUHJvbWlzZSQudGhlbigoKSA9PiByZWYuJGxhenlJbnN0YW5jZSRbbWVtYmVyTmFtZV0oLi4uYXJncykpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKEJVSUxELm9ic2VydmVBdHRyaWJ1dGUgJiYgKCFCVUlMRC5sYXp5TG9hZCB8fCBmbGFncyAmIDEgLyogUFJPWFlfRkxBR1MuaXNFbGVtZW50Q29uc3RydWN0b3IgKi8pKSB7XG4gICAgICAgICAgICBjb25zdCBhdHRyTmFtZVRvUHJvcE5hbWUgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICBwcm90b3R5cGUuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrID0gZnVuY3Rpb24gKGF0dHJOYW1lLCBfb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcGx0LmptcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BOYW1lID0gYXR0ck5hbWVUb1Byb3BOYW1lLmdldChhdHRyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICBJbiBhIHdlYiBjb21wb25lbnQgbGlmZWN5Y2xlIHRoZSBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgcnVucyBwcmlvciB0byBjb25uZWN0ZWRDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAvLyAgaW4gdGhlIGNhc2Ugd2hlcmUgYW4gYXR0cmlidXRlIHdhcyBzZXQgaW5saW5lLlxuICAgICAgICAgICAgICAgICAgICAvLyAgYGBgaHRtbFxuICAgICAgICAgICAgICAgICAgICAvLyAgICA8bXktY29tcG9uZW50IHNvbWUtYXR0cmlidXRlPVwic29tZS12YWx1ZVwiPjwvbXktY29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAvLyAgYGBgXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICBUaGVyZSBpcyBhbiBlZGdlIGNhc2Ugd2hlcmUgYSBkZXZlbG9wZXIgc2V0cyB0aGUgYXR0cmlidXRlIGlubGluZSBvbiBhIGN1c3RvbSBlbGVtZW50IGFuZCB0aGVuXG4gICAgICAgICAgICAgICAgICAgIC8vICBwcm9ncmFtbWF0aWNhbGx5IGNoYW5nZXMgaXQgYmVmb3JlIGl0IGhhcyBiZWVuIHVwZ3JhZGVkIGFzIHNob3duIGJlbG93OlxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgYGBgaHRtbFxuICAgICAgICAgICAgICAgICAgICAvLyAgICA8IS0tIHRoaXMgY29tcG9uZW50IGhhcyBfbm90XyBiZWVuIHVwZ3JhZGVkIHlldCAtLT5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgPG15LWNvbXBvbmVudCBpZD1cInRlc3RcIiBzb21lLWF0dHJpYnV0ZT1cInNvbWUtdmFsdWVcIj48L215LWNvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgPHNjcmlwdD5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAvLyBncmFiIG5vbi11cGdyYWRlZCBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGVzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICBlbC5zb21lQXR0cmlidXRlID0gXCJhbm90aGVyLXZhbHVlXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgLy8gdXBncmFkZSBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ215LWNvbXBvbmVudCcsIE15Q29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgPC9zY3JpcHQ+XG4gICAgICAgICAgICAgICAgICAgIC8vICBgYGBcbiAgICAgICAgICAgICAgICAgICAgLy8gIEluIHRoaXMgY2FzZSBpZiB3ZSBkbyBub3QgdW5zaGFkb3cgaGVyZSBhbmQgdXNlIHRoZSB2YWx1ZSBvZiB0aGUgc2hhZG93aW5nIHByb3BlcnR5LCBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgLy8gIHdpbGwgYmUgY2FsbGVkIHdpdGggYG5ld1ZhbHVlID0gXCJzb21lLXZhbHVlXCJgIGFuZCB3aWxsIHNldCB0aGUgc2hhZG93ZWQgcHJvcGVydHkgKHRoaXMuc29tZUF0dHJpYnV0ZSA9IFwiYW5vdGhlci12YWx1ZVwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAgdG8gdGhlIHZhbHVlIHRoYXQgd2FzIHNldCBpbmxpbmUgaS5lLiBcInNvbWUtdmFsdWVcIiBmcm9tIGFib3ZlIGV4YW1wbGUuIFdoZW5cbiAgICAgICAgICAgICAgICAgICAgLy8gIHRoZSBjb25uZWN0ZWRDYWxsYmFjayBhdHRlbXB0cyB0byB1bnNoYWRvdyBpdCB3aWxsIHVzZSBcInNvbWUtdmFsdWVcIiBhcyB0aGUgaW5pdGlhbCB2YWx1ZSByYXRoZXIgdGhhbiBcImFub3RoZXItdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgVGhlIGNhc2Ugd2hlcmUgdGhlIGF0dHJpYnV0ZSB3YXMgTk9UIHNldCBpbmxpbmUgYnV0IHdhcyBub3Qgc2V0IHByb2dyYW1tYXRpY2FsbHkgc2hhbGwgYmUgaGFuZGxlZC91bnNoYWRvd2VkXG4gICAgICAgICAgICAgICAgICAgIC8vICBieSBjb25uZWN0ZWRDYWxsYmFjayBhcyB0aGlzIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayB3aWxsIG5vdCBmaXJlLlxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy93ZWItY29tcG9uZW50cy9iZXN0LXByYWN0aWNlcyNsYXp5LXByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIFRPRE8oU1RFTkNJTC0xNikgd2Ugc2hvdWxkIHRoaW5rIGFib3V0IHdoZXRoZXIgb3Igbm90IHdlIGFjdHVhbGx5IHdhbnQgdG8gYmUgcmVmbGVjdGluZyB0aGUgYXR0cmlidXRlcyB0b1xuICAgICAgICAgICAgICAgICAgICAvLyAgcHJvcGVydGllcyBoZXJlIGdpdmVuIHRoYXQgdGhpcyBnb2VzIGFnYWluc3QgYmVzdCBwcmFjdGljZXMgb3V0bGluZWQgaGVyZVxuICAgICAgICAgICAgICAgICAgICAvLyAgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy93ZWItY29tcG9uZW50cy9iZXN0LXByYWN0aWNlcyNhdm9pZC1yZWVudHJhbmN5XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm90b3R5cGUuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgdGhpc1twcm9wTmFtZV0gPT09ICdudW1iZXInICYmXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW3Byb3BOYW1lXSA9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIHByb3BOYW1lIGV4aXN0cyBvbiB0aGUgcHJvdG90eXBlIG9mIGBDc3RyYCwgdGhpcyB1cGRhdGUgbWF5IGJlIGEgcmVzdWx0IG9mIFN0ZW5jaWwgdXNpbmcgbmF0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBUElzIHRvIHJlZmxlY3QgcHJvcHMgYXMgYXR0cmlidXRlcy4gQ2FsbHMgdG8gYHNldEF0dHJpYnV0ZShzb21lRWxlbWVudCwgcHJvcE5hbWUpYCB3aWxsIHJlc3VsdCBpblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYHByb3BOYW1lYCB0byBiZSBjb252ZXJ0ZWQgdG8gYSBgRE9NU3RyaW5nYCwgd2hpY2ggbWF5IG5vdCBiZSB3aGF0IHdlIHdhbnQgZm9yIG90aGVyIHByaW1pdGl2ZSBwcm9wcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzW3Byb3BOYW1lXSA9IG5ld1ZhbHVlID09PSBudWxsICYmIHR5cGVvZiB0aGlzW3Byb3BOYW1lXSA9PT0gJ2Jvb2xlYW4nID8gZmFsc2UgOiBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgYXR0cmlidXRlcyB0byBvYnNlcnZlXG4gICAgICAgICAgICAvLyBhbmQgYWxzbyBjcmVhdGUgYSBtYXAgb2YgaHRtbCBhdHRyaWJ1dGUgbmFtZSB0byBqcyBwcm9wZXJ0eSBuYW1lXG4gICAgICAgICAgICBDc3RyLm9ic2VydmVkQXR0cmlidXRlcyA9IG1lbWJlcnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKChbXywgbV0pID0+IG1bMF0gJiAxNSAvKiBNRU1CRVJfRkxBR1MuSGFzQXR0cmlidXRlICovKSAvLyBmaWx0ZXIgdG8gb25seSBrZWVwIHByb3BzIHRoYXQgc2hvdWxkIG1hdGNoIGF0dHJpYnV0ZXNcbiAgICAgICAgICAgICAgICAubWFwKChbcHJvcE5hbWUsIG1dKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0ck5hbWUgPSBtWzFdIHx8IHByb3BOYW1lO1xuICAgICAgICAgICAgICAgIGF0dHJOYW1lVG9Qcm9wTmFtZS5zZXQoYXR0ck5hbWUsIHByb3BOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoQlVJTEQucmVmbGVjdCAmJiBtWzBdICYgNTEyIC8qIE1FTUJFUl9GTEFHUy5SZWZsZWN0QXR0ciAqLykge1xuICAgICAgICAgICAgICAgICAgICBjbXBNZXRhLiRhdHRyc1RvUmVmbGVjdCQucHVzaChbcHJvcE5hbWUsIGF0dHJOYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyTmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBDc3RyO1xufTtcbmNvbnN0IGluaXRpYWxpemVDb21wb25lbnQgPSBhc3luYyAoZWxtLCBob3N0UmVmLCBjbXBNZXRhLCBobXJWZXJzaW9uSWQsIENzdHIpID0+IHtcbiAgICAvLyBpbml0aWFsaXplQ29tcG9uZW50XG4gICAgaWYgKChCVUlMRC5sYXp5TG9hZCB8fCBCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSB8fCBCVUlMRC5zdHlsZSkgJiZcbiAgICAgICAgKGhvc3RSZWYuJGZsYWdzJCAmIDMyIC8qIEhPU1RfRkxBR1MuaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQgKi8pID09PSAwKSB7XG4gICAgICAgIGlmIChCVUlMRC5sYXp5TG9hZCB8fCBCVUlMRC5oeWRyYXRlQ2xpZW50U2lkZSkge1xuICAgICAgICAgICAgLy8gd2UgaGF2ZW4ndCBpbml0aWFsaXplZCB0aGlzIGVsZW1lbnQgeWV0XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMzIgLyogSE9TVF9GTEFHUy5oYXNJbml0aWFsaXplZENvbXBvbmVudCAqLztcbiAgICAgICAgICAgIC8vIGxhenkgbG9hZGVkIGNvbXBvbmVudHNcbiAgICAgICAgICAgIC8vIHJlcXVlc3QgdGhlIGNvbXBvbmVudCdzIGltcGxlbWVudGF0aW9uIHRvIGJlXG4gICAgICAgICAgICAvLyB3aXJlZCB1cCB3aXRoIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgICAgICAgIENzdHIgPSBsb2FkTW9kdWxlKGNtcE1ldGEsIGhvc3RSZWYsIGhtclZlcnNpb25JZCk7XG4gICAgICAgICAgICBpZiAoQ3N0ci50aGVuKSB7XG4gICAgICAgICAgICAgICAgLy8gQXdhaXQgY3JlYXRlcyBhIG1pY3JvLXRhc2sgYXZvaWQgaWYgcG9zc2libGVcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRMb2FkID0gdW5pcXVlVGltZShgc3Q6bG9hZDoke2NtcE1ldGEuJHRhZ05hbWUkfToke2hvc3RSZWYuJG1vZGVOYW1lJH1gLCBgW1N0ZW5jaWxdIExvYWQgbW9kdWxlIGZvciA8JHtjbXBNZXRhLiR0YWdOYW1lJH0+YCk7XG4gICAgICAgICAgICAgICAgQ3N0ciA9IGF3YWl0IENzdHI7XG4gICAgICAgICAgICAgICAgZW5kTG9hZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKChCVUlMRC5pc0RldiB8fCBCVUlMRC5pc0RlYnVnKSAmJiAhQ3N0cikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29uc3RydWN0b3IgZm9yIFwiJHtjbXBNZXRhLiR0YWdOYW1lJH0jJHtob3N0UmVmLiRtb2RlTmFtZSR9XCIgd2FzIG5vdCBmb3VuZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELm1lbWJlciAmJiAhQ3N0ci5pc1Byb3hpZWQpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSd2ZSBuZXZlciBwcm94aWVkIHRoaXMgQ29uc3RydWN0b3IgYmVmb3JlXG4gICAgICAgICAgICAgICAgLy8gbGV0J3MgYWRkIHRoZSBnZXR0ZXJzL3NldHRlcnMgdG8gaXRzIHByb3RvdHlwZSBiZWZvcmVcbiAgICAgICAgICAgICAgICAvLyB0aGUgZmlyc3QgdGltZSB3ZSBjcmVhdGUgYW4gaW5zdGFuY2Ugb2YgdGhlIGltcGxlbWVudGF0aW9uXG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELndhdGNoQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY21wTWV0YS4kd2F0Y2hlcnMkID0gQ3N0ci53YXRjaGVycztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJveHlDb21wb25lbnQoQ3N0ciwgY21wTWV0YSwgMiAvKiBQUk9YWV9GTEFHUy5wcm94eVN0YXRlICovKTtcbiAgICAgICAgICAgICAgICBDc3RyLmlzUHJveGllZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlbmROZXdJbnN0YW5jZSA9IGNyZWF0ZVRpbWUoJ2NyZWF0ZUluc3RhbmNlJywgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgICAgICAgICAgLy8gb2ssIHRpbWUgdG8gY29uc3RydWN0IHRoZSBpbnN0YW5jZVxuICAgICAgICAgICAgLy8gYnV0IGxldCdzIGtlZXAgdHJhY2sgb2Ygd2hlbiB3ZSBzdGFydCBhbmQgc3RvcFxuICAgICAgICAgICAgLy8gc28gdGhhdCB0aGUgZ2V0dGVycy9zZXR0ZXJzIGRvbid0IGluY29ycmVjdGx5IHN0ZXAgb24gZGF0YVxuICAgICAgICAgICAgaWYgKEJVSUxELm1lbWJlcikge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA4IC8qIEhPU1RfRkxBR1MuaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnN0cnVjdCB0aGUgbGF6eS1sb2FkZWQgY29tcG9uZW50IGltcGxlbWVudGF0aW9uXG4gICAgICAgICAgICAvLyBwYXNzaW5nIHRoZSBob3N0UmVmIGlzIHZlcnkgaW1wb3J0YW50IGR1cmluZ1xuICAgICAgICAgICAgLy8gY29uc3RydWN0aW9uIGluIG9yZGVyIHRvIGRpcmVjdGx5IHdpcmUgdG9nZXRoZXIgdGhlXG4gICAgICAgICAgICAvLyBob3N0IGVsZW1lbnQgYW5kIHRoZSBsYXp5LWxvYWRlZCBpbnN0YW5jZVxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBuZXcgQ3N0cihob3N0UmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELm1lbWJlcikge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+OCAvKiBIT1NUX0ZMQUdTLmlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQud2F0Y2hDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxMjggLyogSE9TVF9GTEFHUy5pc1dhdGNoUmVhZHkgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbmROZXdJbnN0YW5jZSgpO1xuICAgICAgICAgICAgZmlyZUNvbm5lY3RlZENhbGxiYWNrKGhvc3RSZWYuJGxhenlJbnN0YW5jZSQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gc3luYyBjb25zdHJ1Y3RvciBjb21wb25lbnRcbiAgICAgICAgICAgIENzdHIgPSBlbG0uY29uc3RydWN0b3I7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMzIgLyogSE9TVF9GTEFHUy5oYXNJbml0aWFsaXplZENvbXBvbmVudCAqLztcbiAgICAgICAgICAgIC8vIHdhaXQgZm9yIHRoZSBDdXN0b21FbGVtZW50UmVnaXN0cnkgdG8gbWFyayB0aGUgY29tcG9uZW50IGFzIHJlYWR5IGJlZm9yZSBzZXR0aW5nIGBpc1dhdGNoUmVhZHlgLiBPdGhlcndpc2UsXG4gICAgICAgICAgICAvLyB3YXRjaGVycyBtYXkgZmlyZSBwcmVtYXR1cmVseSBpZiBgY3VzdG9tRWxlbWVudHMuZ2V0KClgL2BjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZCgpYCByZXNvbHZlcyBfYmVmb3JlX1xuICAgICAgICAgICAgLy8gU3RlbmNpbCBoYXMgY29tcGxldGVkIGluc3RhbnRpYXRpbmcgdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICAgIGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKGNtcE1ldGEuJHRhZ05hbWUkKS50aGVuKCgpID0+IChob3N0UmVmLiRmbGFncyQgfD0gMTI4IC8qIEhPU1RfRkxBR1MuaXNXYXRjaFJlYWR5ICovKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELnN0eWxlICYmIENzdHIuc3R5bGUpIHtcbiAgICAgICAgICAgIC8vIHRoaXMgY29tcG9uZW50IGhhcyBzdHlsZXMgYnV0IHdlIGhhdmVuJ3QgcmVnaXN0ZXJlZCB0aGVtIHlldFxuICAgICAgICAgICAgbGV0IHN0eWxlID0gQ3N0ci5zdHlsZTtcbiAgICAgICAgICAgIGlmIChCVUlMRC5tb2RlICYmIHR5cGVvZiBzdHlsZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHN0eWxlWyhob3N0UmVmLiRtb2RlTmFtZSQgPSBjb21wdXRlTW9kZShlbG0pKV07XG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlICYmIGhvc3RSZWYuJG1vZGVOYW1lJCkge1xuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKCdzLW1vZGUnLCBob3N0UmVmLiRtb2RlTmFtZSQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNjb3BlSWQgPSBnZXRTY29wZUlkKGNtcE1ldGEsIGhvc3RSZWYuJG1vZGVOYW1lJCk7XG4gICAgICAgICAgICBpZiAoIXN0eWxlcy5oYXMoc2NvcGVJZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbmRSZWdpc3RlclN0eWxlcyA9IGNyZWF0ZVRpbWUoJ3JlZ2lzdGVyU3R5bGVzJywgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgICAgICAgICAgICAgIGlmICghQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgQlVJTEQuc2hhZG93RG9tICYmXG4gICAgICAgICAgICAgICAgICAgIEJVSUxELnNoYWRvd0RvbVNoaW0gJiZcbiAgICAgICAgICAgICAgICAgICAgY21wTWV0YS4kZmxhZ3MkICYgOCAvKiBDTVBfRkxBR1MubmVlZHNTaGFkb3dEb21TaGltICovKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0gYXdhaXQgaW1wb3J0KCcuL3NoYWRvdy1jc3MuanMnKS50aGVuKChtKSA9PiBtLnNjb3BlQ3NzKHN0eWxlLCBzY29wZUlkLCBmYWxzZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZWdpc3RlclN0eWxlKHNjb3BlSWQsIHN0eWxlLCAhIShjbXBNZXRhLiRmbGFncyQgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSk7XG4gICAgICAgICAgICAgICAgZW5kUmVnaXN0ZXJTdHlsZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3ZSd2ZSBzdWNjZXNzZnVsbHkgY3JlYXRlZCBhIGxhenkgaW5zdGFuY2VcbiAgICBjb25zdCBhbmNlc3RvckNvbXBvbmVudCA9IGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JDtcbiAgICBjb25zdCBzY2hlZHVsZSA9ICgpID0+IHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIHRydWUpO1xuICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcgJiYgYW5jZXN0b3JDb21wb25lbnQgJiYgYW5jZXN0b3JDb21wb25lbnRbJ3MtcmMnXSkge1xuICAgICAgICAvLyB0aGlzIGlzIHRoZSBpbml0aWFsIGxvYWQgYW5kIHRoaXMgY29tcG9uZW50IGl0IGhhcyBhbiBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgLy8gYnV0IHRoZSBhbmNlc3RvciBjb21wb25lbnQgaGFzIE5PVCBmaXJlZCBpdHMgd2lsbCB1cGRhdGUgbGlmZWN5Y2xlIHlldFxuICAgICAgICAvLyBzbyBsZXQncyBqdXN0IGNvb2wgb3VyIGpldHMgYW5kIHdhaXQgZm9yIHRoZSBhbmNlc3RvciB0byBjb250aW51ZSBmaXJzdFxuICAgICAgICAvLyB0aGlzIHdpbGwgZ2V0IGZpcmVkIG9mZiB3aGVuIHRoZSBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgLy8gZmluYWxseSBnZXRzIGFyb3VuZCB0byByZW5kZXJpbmcgaXRzIGxhenkgc2VsZlxuICAgICAgICAvLyBmaXJlIG9mZiB0aGUgaW5pdGlhbCB1cGRhdGVcbiAgICAgICAgYW5jZXN0b3JDb21wb25lbnRbJ3MtcmMnXS5wdXNoKHNjaGVkdWxlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNjaGVkdWxlKCk7XG4gICAgfVxufTtcbmNvbnN0IGZpcmVDb25uZWN0ZWRDYWxsYmFjayA9IChpbnN0YW5jZSkgPT4ge1xuICAgIGlmIChCVUlMRC5sYXp5TG9hZCAmJiBCVUlMRC5jb25uZWN0ZWRDYWxsYmFjaykge1xuICAgICAgICBzYWZlQ2FsbChpbnN0YW5jZSwgJ2Nvbm5lY3RlZENhbGxiYWNrJyk7XG4gICAgfVxufTtcbmNvbnN0IGNvbm5lY3RlZENhbGxiYWNrID0gKGVsbSkgPT4ge1xuICAgIGlmICgocGx0LiRmbGFncyQgJiAxIC8qIFBMQVRGT1JNX0ZMQUdTLmlzVG1wRGlzY29ubmVjdGVkICovKSA9PT0gMCkge1xuICAgICAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihlbG0pO1xuICAgICAgICBjb25zdCBjbXBNZXRhID0gaG9zdFJlZi4kY21wTWV0YSQ7XG4gICAgICAgIGNvbnN0IGVuZENvbm5lY3RlZCA9IGNyZWF0ZVRpbWUoJ2Nvbm5lY3RlZENhbGxiYWNrJywgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgICAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyVGFyZ2V0UGFyZW50KSB7XG4gICAgICAgICAgICAvLyBvbmx5IHJ1biBpZiB3ZSBoYXZlIGxpc3RlbmVycyBiZWluZyBhdHRhY2hlZCB0byBhIHBhcmVudFxuICAgICAgICAgICAgYWRkSG9zdEV2ZW50TGlzdGVuZXJzKGVsbSwgaG9zdFJlZiwgY21wTWV0YS4kbGlzdGVuZXJzJCwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoaG9zdFJlZi4kZmxhZ3MkICYgMSAvKiBIT1NUX0ZMQUdTLmhhc0Nvbm5lY3RlZCAqLykpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IHRpbWUgdGhpcyBjb21wb25lbnQgaGFzIGNvbm5lY3RlZFxuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDEgLyogSE9TVF9GTEFHUy5oYXNDb25uZWN0ZWQgKi87XG4gICAgICAgICAgICBsZXQgaG9zdElkO1xuICAgICAgICAgICAgaWYgKEJVSUxELmh5ZHJhdGVDbGllbnRTaWRlKSB7XG4gICAgICAgICAgICAgICAgaG9zdElkID0gZWxtLmdldEF0dHJpYnV0ZShIWURSQVRFX0lEKTtcbiAgICAgICAgICAgICAgICBpZiAoaG9zdElkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zaGFkb3dEb20gJiYgc3VwcG9ydHNTaGFkb3cgJiYgY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBDTVBfRkxBR1Muc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NvcGVJZCA9IEJVSUxELm1vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGFkZFN0eWxlKGVsbS5zaGFkb3dSb290LCBjbXBNZXRhLCBlbG0uZ2V0QXR0cmlidXRlKCdzLW1vZGUnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFkZFN0eWxlKGVsbS5zaGFkb3dSb290LCBjbXBNZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKHNjb3BlSWQgKyAnLWgnLCBzY29wZUlkICsgJy1zJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6ZUNsaWVudEh5ZHJhdGUoZWxtLCBjbXBNZXRhLiR0YWdOYW1lJCwgaG9zdElkLCBob3N0UmVmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgIWhvc3RJZCkge1xuICAgICAgICAgICAgICAgIC8vIGluaXRVcGRhdGVcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgc2xvdCBwb2x5ZmlsbCBpcyByZXF1aXJlZCB3ZSdsbCBuZWVkIHRvIHB1dCBzb21lIG5vZGVzXG4gICAgICAgICAgICAgICAgLy8gaW4gaGVyZSB0byBhY3QgYXMgb3JpZ2luYWwgY29udGVudCBhbmNob3JzIGFzIHdlIG1vdmUgbm9kZXMgYXJvdW5kXG4gICAgICAgICAgICAgICAgLy8gaG9zdCBlbGVtZW50IGhhcyBiZWVuIGNvbm5lY3RlZCB0byB0aGUgRE9NXG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlIHx8XG4gICAgICAgICAgICAgICAgICAgICgoQlVJTEQuc2xvdCB8fCBCVUlMRC5zaGFkb3dEb20pICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjbXBNZXRhLiRmbGFncyQgJiAoNCAvKiBDTVBfRkxBR1MuaGFzU2xvdFJlbG9jYXRpb24gKi8gfCA4IC8qIENNUF9GTEFHUy5uZWVkc1NoYWRvd0RvbVNoaW0gKi8pKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRDb250ZW50UmVmZXJlbmNlKGVsbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZykge1xuICAgICAgICAgICAgICAgIC8vIGZpbmQgdGhlIGZpcnN0IGFuY2VzdG9yIGNvbXBvbmVudCAoaWYgdGhlcmUgaXMgb25lKSBhbmQgcmVnaXN0ZXJcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvbXBvbmVudCBhcyBvbmUgb2YgdGhlIGFjdGl2ZWx5IGxvYWRpbmcgY2hpbGQgY29tcG9uZW50cyBmb3IgaXRzIGFuY2VzdG9yXG4gICAgICAgICAgICAgICAgbGV0IGFuY2VzdG9yQ29tcG9uZW50ID0gZWxtO1xuICAgICAgICAgICAgICAgIHdoaWxlICgoYW5jZXN0b3JDb21wb25lbnQgPSBhbmNlc3RvckNvbXBvbmVudC5wYXJlbnROb2RlIHx8IGFuY2VzdG9yQ29tcG9uZW50Lmhvc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaW1iIHVwIHRoZSBhbmNlc3RvcnMgbG9va2luZyBmb3IgdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbXBvbmVudCB0aGF0IGhhc24ndCBmaW5pc2hlZCBpdHMgbGlmZWN5Y2xlIHVwZGF0ZSB5ZXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKChCVUlMRC5oeWRyYXRlQ2xpZW50U2lkZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jZXN0b3JDb21wb25lbnQubm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNlc3RvckNvbXBvbmVudC5oYXNBdHRyaWJ1dGUoJ3MtaWQnKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jZXN0b3JDb21wb25lbnRbJ3MtcCddKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5jZXN0b3JDb21wb25lbnRbJ3MtcCddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBmb3VuZCB0aGlzIGNvbXBvbmVudHMgZmlyc3QgYW5jZXN0b3IgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoaXMgY29tcG9uZW50J3MgYW5jZXN0b3IgY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hUb0FuY2VzdG9yKGhvc3RSZWYsIChob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQgPSBhbmNlc3RvckNvbXBvbmVudCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBMYXp5IHByb3BlcnRpZXNcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3dlYi9mdW5kYW1lbnRhbHMvd2ViLWNvbXBvbmVudHMvYmVzdC1wcmFjdGljZXMjbGF6eS1wcm9wZXJ0aWVzXG4gICAgICAgICAgICBpZiAoQlVJTEQucHJvcCAmJiAhQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgJiYgY21wTWV0YS4kbWVtYmVycyQpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyhjbXBNZXRhLiRtZW1iZXJzJCkubWFwKChbbWVtYmVyTmFtZSwgW21lbWJlckZsYWdzXV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lbWJlckZsYWdzICYgMzEgLyogTUVNQkVSX0ZMQUdTLlByb3AgKi8gJiYgZWxtLmhhc093blByb3BlcnR5KG1lbWJlck5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsbVttZW1iZXJOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlbG1bbWVtYmVyTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG1bbWVtYmVyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELmluaXRpYWxpemVOZXh0VGljaykge1xuICAgICAgICAgICAgICAgIC8vIGNvbm5lY3RlZENhbGxiYWNrLCB0YXNrUXVldWUsIGluaXRpYWxMb2FkXG4gICAgICAgICAgICAgICAgLy8gYW5ndWxhciBzZXRzIGF0dHJpYnV0ZSBBRlRFUiBjb25uZWN0Q2FsbGJhY2tcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xODkwOVxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE5OTQwXG4gICAgICAgICAgICAgICAgbmV4dFRpY2soKCkgPT4gaW5pdGlhbGl6ZUNvbXBvbmVudChlbG0sIGhvc3RSZWYsIGNtcE1ldGEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluaXRpYWxpemVDb21wb25lbnQoZWxtLCBob3N0UmVmLCBjbXBNZXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vdCB0aGUgZmlyc3QgdGltZSB0aGlzIGhhcyBjb25uZWN0ZWRcbiAgICAgICAgICAgIC8vIHJlYXR0YWNoIGFueSBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIGhvc3RcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZXkgd291bGQgaGF2ZSBiZWVuIHJlbW92ZWQgd2hlbiBkaXNjb25uZWN0ZWRcbiAgICAgICAgICAgIGFkZEhvc3RFdmVudExpc3RlbmVycyhlbG0sIGhvc3RSZWYsIGNtcE1ldGEuJGxpc3RlbmVycyQsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vIGZpcmUgb2ZmIGNvbm5lY3RlZENhbGxiYWNrKCkgb24gY29tcG9uZW50IGluc3RhbmNlXG4gICAgICAgICAgICBmaXJlQ29ubmVjdGVkQ2FsbGJhY2soaG9zdFJlZi4kbGF6eUluc3RhbmNlJCk7XG4gICAgICAgIH1cbiAgICAgICAgZW5kQ29ubmVjdGVkKCk7XG4gICAgfVxufTtcbmNvbnN0IHNldENvbnRlbnRSZWZlcmVuY2UgPSAoZWxtKSA9PiB7XG4gICAgLy8gb25seSByZXF1aXJlZCB3aGVuIHdlJ3JlIE5PVCB1c2luZyBuYXRpdmUgc2hhZG93IGRvbSAoc2xvdClcbiAgICAvLyBvciB0aGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IG5hdGl2ZSBzaGFkb3cgZG9tXG4gICAgLy8gYW5kIHRoaXMgaG9zdCBlbGVtZW50IHdhcyBOT1QgY3JlYXRlZCB3aXRoIFNTUlxuICAgIC8vIGxldCdzIHBpY2sgb3V0IHRoZSBpbm5lciBjb250ZW50IGZvciBzbG90IHByb2plY3Rpb25cbiAgICAvLyBjcmVhdGUgYSBub2RlIHRvIHJlcHJlc2VudCB3aGVyZSB0aGUgb3JpZ2luYWxcbiAgICAvLyBjb250ZW50IHdhcyBmaXJzdCBwbGFjZWQsIHdoaWNoIGlzIHVzZWZ1bCBsYXRlciBvblxuICAgIGNvbnN0IGNvbnRlbnRSZWZFbG0gPSAoZWxtWydzLWNyJ10gPSBkb2MuY3JlYXRlQ29tbWVudChCVUlMRC5pc0RlYnVnID8gYGNvbnRlbnQtcmVmIChob3N0PSR7ZWxtLmxvY2FsTmFtZX0pYCA6ICcnKSk7XG4gICAgY29udGVudFJlZkVsbVsncy1jbiddID0gdHJ1ZTtcbiAgICBlbG0uaW5zZXJ0QmVmb3JlKGNvbnRlbnRSZWZFbG0sIGVsbS5maXJzdENoaWxkKTtcbn07XG5jb25zdCBkaXNjb25uZWN0ZWRDYWxsYmFjayA9IChlbG0pID0+IHtcbiAgICBpZiAoKHBsdC4kZmxhZ3MkICYgMSAvKiBQTEFURk9STV9GTEFHUy5pc1RtcERpc2Nvbm5lY3RlZCAqLykgPT09IDApIHtcbiAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoZWxtKTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBCVUlMRC5sYXp5TG9hZCA/IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgOiBlbG07XG4gICAgICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGlmIChob3N0UmVmLiRybUxpc3RlbmVycyQpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRybUxpc3RlbmVycyQubWFwKChybUxpc3RlbmVyKSA9PiBybUxpc3RlbmVyKCkpO1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJHJtTGlzdGVuZXJzJCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjbGVhciBDU1MgdmFyLXNoaW0gdHJhY2tpbmdcbiAgICAgICAgaWYgKEJVSUxELmNzc1ZhclNoaW0gJiYgcGx0LiRjc3NTaGltJCkge1xuICAgICAgICAgICAgcGx0LiRjc3NTaGltJC5yZW1vdmVIb3N0KGVsbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELmxhenlMb2FkICYmIEJVSUxELmRpc2Nvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICBzYWZlQ2FsbChpbnN0YW5jZSwgJ2Rpc2Nvbm5lY3RlZENhbGxiYWNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELmNtcERpZFVubG9hZCkge1xuICAgICAgICAgICAgc2FmZUNhbGwoaW5zdGFuY2UsICdjb21wb25lbnREaWRVbmxvYWQnKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gKENzdHIsIGNvbXBhY3RNZXRhKSA9PiB7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKGNvbXBhY3RNZXRhWzFdLCBwcm94eUN1c3RvbUVsZW1lbnQoQ3N0ciwgY29tcGFjdE1ldGEpKTtcbn07XG5jb25zdCBwcm94eUN1c3RvbUVsZW1lbnQgPSAoQ3N0ciwgY29tcGFjdE1ldGEpID0+IHtcbiAgICBjb25zdCBjbXBNZXRhID0ge1xuICAgICAgICAkZmxhZ3MkOiBjb21wYWN0TWV0YVswXSxcbiAgICAgICAgJHRhZ05hbWUkOiBjb21wYWN0TWV0YVsxXSxcbiAgICB9O1xuICAgIGlmIChCVUlMRC5tZW1iZXIpIHtcbiAgICAgICAgY21wTWV0YS4kbWVtYmVycyQgPSBjb21wYWN0TWV0YVsyXTtcbiAgICB9XG4gICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lcikge1xuICAgICAgICBjbXBNZXRhLiRsaXN0ZW5lcnMkID0gY29tcGFjdE1ldGFbM107XG4gICAgfVxuICAgIGlmIChCVUlMRC53YXRjaENhbGxiYWNrKSB7XG4gICAgICAgIGNtcE1ldGEuJHdhdGNoZXJzJCA9IENzdHIuJHdhdGNoZXJzJDtcbiAgICB9XG4gICAgaWYgKEJVSUxELnJlZmxlY3QpIHtcbiAgICAgICAgY21wTWV0YS4kYXR0cnNUb1JlZmxlY3QkID0gW107XG4gICAgfVxuICAgIGlmIChCVUlMRC5zaGFkb3dEb20gJiYgIXN1cHBvcnRzU2hhZG93ICYmIGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogQ01QX0ZMQUdTLnNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgY21wTWV0YS4kZmxhZ3MkIHw9IDggLyogQ01QX0ZMQUdTLm5lZWRzU2hhZG93RG9tU2hpbSAqLztcbiAgICB9XG4gICAgY29uc3Qgb3JpZ2luYWxDb25uZWN0ZWRDYWxsYmFjayA9IENzdHIucHJvdG90eXBlLmNvbm5lY3RlZENhbGxiYWNrO1xuICAgIGNvbnN0IG9yaWdpbmFsRGlzY29ubmVjdGVkQ2FsbGJhY2sgPSBDc3RyLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaztcbiAgICBPYmplY3QuYXNzaWduKENzdHIucHJvdG90eXBlLCB7XG4gICAgICAgIF9fcmVnaXN0ZXJIb3N0KCkge1xuICAgICAgICAgICAgcmVnaXN0ZXJIb3N0KHRoaXMsIGNtcE1ldGEpO1xuICAgICAgICB9LFxuICAgICAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKHRoaXMpO1xuICAgICAgICAgICAgaWYgKEJVSUxELmNvbm5lY3RlZENhbGxiYWNrICYmIG9yaWdpbmFsQ29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbENvbm5lY3RlZENhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2sodGhpcyk7XG4gICAgICAgICAgICBpZiAoQlVJTEQuZGlzY29ubmVjdGVkQ2FsbGJhY2sgJiYgb3JpZ2luYWxEaXNjb25uZWN0ZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRGlzY29ubmVjdGVkQ2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgX19hdHRhY2hTaGFkb3coKSB7XG4gICAgICAgICAgICBpZiAoc3VwcG9ydHNTaGFkb3cpIHtcbiAgICAgICAgICAgICAgICBpZiAoQlVJTEQuc2hhZG93RGVsZWdhdGVzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJ29wZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGVzRm9jdXM6ICEhKGNtcE1ldGEuJGZsYWdzJCAmIDE2IC8qIENNUF9GTEFHUy5zaGFkb3dEZWxlZ2F0ZXNGb2N1cyAqLyksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGFkb3dSb290ID0gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBDc3RyLmlzID0gY21wTWV0YS4kdGFnTmFtZSQ7XG4gICAgcmV0dXJuIHByb3h5Q29tcG9uZW50KENzdHIsIGNtcE1ldGEsIDEgLyogUFJPWFlfRkxBR1MuaXNFbGVtZW50Q29uc3RydWN0b3IgKi8gfCAyIC8qIFBST1hZX0ZMQUdTLnByb3h5U3RhdGUgKi8pO1xufTtcbmNvbnN0IGZvcmNlTW9kZVVwZGF0ZSA9IChlbG0pID0+IHtcbiAgICBpZiAoQlVJTEQuc3R5bGUgJiYgQlVJTEQubW9kZSAmJiAhQlVJTEQubGF6eUxvYWQpIHtcbiAgICAgICAgY29uc3QgbW9kZSA9IGNvbXB1dGVNb2RlKGVsbSk7XG4gICAgICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKGVsbSk7XG4gICAgICAgIGlmIChob3N0UmVmLiRtb2RlTmFtZSQgIT09IG1vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNtcE1ldGEgPSBob3N0UmVmLiRjbXBNZXRhJDtcbiAgICAgICAgICAgIGNvbnN0IG9sZFNjb3BlSWQgPSBlbG1bJ3Mtc2MnXTtcbiAgICAgICAgICAgIGNvbnN0IHNjb3BlSWQgPSBnZXRTY29wZUlkKGNtcE1ldGEsIG1vZGUpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBlbG0uY29uc3RydWN0b3Iuc3R5bGVbbW9kZV07XG4gICAgICAgICAgICBjb25zdCBmbGFncyA9IGNtcE1ldGEuJGZsYWdzJDtcbiAgICAgICAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICAgICAgICAgIGlmICghc3R5bGVzLmhhcyhzY29wZUlkKSkge1xuICAgICAgICAgICAgICAgICAgICByZWdpc3RlclN0eWxlKHNjb3BlSWQsIHN0eWxlLCAhIShmbGFncyAmIDEgLyogQ01QX0ZMQUdTLnNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kbW9kZU5hbWUkID0gbW9kZTtcbiAgICAgICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZShvbGRTY29wZUlkICsgJy1oJywgb2xkU2NvcGVJZCArICctcycpO1xuICAgICAgICAgICAgICAgIGF0dGFjaFN0eWxlcyhob3N0UmVmKTtcbiAgICAgICAgICAgICAgICBmb3JjZVVwZGF0ZShlbG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IHBhdGNoQ2xvbmVOb2RlID0gKEhvc3RFbGVtZW50UHJvdG90eXBlKSA9PiB7XG4gICAgY29uc3Qgb3JnQ2xvbmVOb2RlID0gSG9zdEVsZW1lbnRQcm90b3R5cGUuY2xvbmVOb2RlO1xuICAgIEhvc3RFbGVtZW50UHJvdG90eXBlLmNsb25lTm9kZSA9IGZ1bmN0aW9uIChkZWVwKSB7XG4gICAgICAgIGNvbnN0IHNyY05vZGUgPSB0aGlzO1xuICAgICAgICBjb25zdCBpc1NoYWRvd0RvbSA9IEJVSUxELnNoYWRvd0RvbSA/IHNyY05vZGUuc2hhZG93Um9vdCAmJiBzdXBwb3J0c1NoYWRvdyA6IGZhbHNlO1xuICAgICAgICBjb25zdCBjbG9uZWROb2RlID0gb3JnQ2xvbmVOb2RlLmNhbGwoc3JjTm9kZSwgaXNTaGFkb3dEb20gPyBkZWVwIDogZmFsc2UpO1xuICAgICAgICBpZiAoQlVJTEQuc2xvdCAmJiAhaXNTaGFkb3dEb20gJiYgZGVlcCkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgbGV0IHNsb3R0ZWQsIG5vblN0ZW5jaWxOb2RlO1xuICAgICAgICAgICAgY29uc3Qgc3RlbmNpbFByaXZhdGVzID0gW1xuICAgICAgICAgICAgICAgICdzLWlkJyxcbiAgICAgICAgICAgICAgICAncy1jcicsXG4gICAgICAgICAgICAgICAgJ3MtbHInLFxuICAgICAgICAgICAgICAgICdzLXJjJyxcbiAgICAgICAgICAgICAgICAncy1zYycsXG4gICAgICAgICAgICAgICAgJ3MtcCcsXG4gICAgICAgICAgICAgICAgJ3MtY24nLFxuICAgICAgICAgICAgICAgICdzLXNyJyxcbiAgICAgICAgICAgICAgICAncy1zbicsXG4gICAgICAgICAgICAgICAgJ3MtaG4nLFxuICAgICAgICAgICAgICAgICdzLW9sJyxcbiAgICAgICAgICAgICAgICAncy1ucicsXG4gICAgICAgICAgICAgICAgJ3Mtc2knLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgc3JjTm9kZS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc2xvdHRlZCA9IHNyY05vZGUuY2hpbGROb2Rlc1tpXVsncy1uciddO1xuICAgICAgICAgICAgICAgIG5vblN0ZW5jaWxOb2RlID0gc3RlbmNpbFByaXZhdGVzLmV2ZXJ5KChwcml2YXRlRmllbGQpID0+ICFzcmNOb2RlLmNoaWxkTm9kZXNbaV1bcHJpdmF0ZUZpZWxkXSk7XG4gICAgICAgICAgICAgICAgaWYgKHNsb3R0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELmFwcGVuZENoaWxkU2xvdEZpeCAmJiBjbG9uZWROb2RlLl9fYXBwZW5kQ2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lZE5vZGUuX19hcHBlbmRDaGlsZChzbG90dGVkLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWROb2RlLmFwcGVuZENoaWxkKHNsb3R0ZWQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobm9uU3RlbmNpbE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xvbmVkTm9kZS5hcHBlbmRDaGlsZChzcmNOb2RlLmNoaWxkTm9kZXNbaV0uY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsb25lZE5vZGU7XG4gICAgfTtcbn07XG5jb25zdCBwYXRjaFNsb3RBcHBlbmRDaGlsZCA9IChIb3N0RWxlbWVudFByb3RvdHlwZSkgPT4ge1xuICAgIEhvc3RFbGVtZW50UHJvdG90eXBlLl9fYXBwZW5kQ2hpbGQgPSBIb3N0RWxlbWVudFByb3RvdHlwZS5hcHBlbmRDaGlsZDtcbiAgICBIb3N0RWxlbWVudFByb3RvdHlwZS5hcHBlbmRDaGlsZCA9IGZ1bmN0aW9uIChuZXdDaGlsZCkge1xuICAgICAgICBjb25zdCBzbG90TmFtZSA9IChuZXdDaGlsZFsncy1zbiddID0gZ2V0U2xvdE5hbWUobmV3Q2hpbGQpKTtcbiAgICAgICAgY29uc3Qgc2xvdE5vZGUgPSBnZXRIb3N0U2xvdE5vZGUodGhpcy5jaGlsZE5vZGVzLCBzbG90TmFtZSk7XG4gICAgICAgIGlmIChzbG90Tm9kZSkge1xuICAgICAgICAgICAgY29uc3Qgc2xvdENoaWxkTm9kZXMgPSBnZXRIb3N0U2xvdENoaWxkTm9kZXMoc2xvdE5vZGUsIHNsb3ROYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGFwcGVuZEFmdGVyID0gc2xvdENoaWxkTm9kZXNbc2xvdENoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICByZXR1cm4gYXBwZW5kQWZ0ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIGFwcGVuZEFmdGVyLm5leHRTaWJsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fX2FwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICB9O1xufTtcbi8qKlxuICogUGF0Y2hlcyB0aGUgdGV4dCBjb250ZW50IG9mIGFuIHVubmFtZWQgc2xvdHRlZCBub2RlIGluc2lkZSBhIHNjb3BlZCBjb21wb25lbnRcbiAqIEBwYXJhbSBob3N0RWxlbWVudFByb3RvdHlwZSB0aGUgYEVsZW1lbnRgIHRvIGJlIHBhdGNoZWRcbiAqIEBwYXJhbSBjbXBNZXRhIGNvbXBvbmVudCBydW50aW1lIG1ldGFkYXRhIHVzZWQgdG8gZGV0ZXJtaW5lIGlmIHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIHBhdGNoZWQgb3Igbm90XG4gKi9cbmNvbnN0IHBhdGNoVGV4dENvbnRlbnQgPSAoaG9zdEVsZW1lbnRQcm90b3R5cGUsIGNtcE1ldGEpID0+IHtcbiAgICBpZiAoQlVJTEQuc2NvcGVkICYmIGNtcE1ldGEuJGZsYWdzJCAmIDIgLyogQ01QX0ZMQUdTLnNjb3BlZENzc0VuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTm9kZS5wcm90b3R5cGUsICd0ZXh0Q29udGVudCcpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaG9zdEVsZW1lbnRQcm90b3R5cGUsICdfX3RleHRDb250ZW50JywgZGVzY3JpcHRvcik7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShob3N0RWxlbWVudFByb3RvdHlwZSwgJ3RleHRDb250ZW50Jywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlICdkZWZhdWx0IHNsb3QnLCB3aGljaCB3b3VsZCBiZSB0aGUgZmlyc3Qgc2xvdCBpbiBhIHNoYWRvdyB0cmVlIChpZiB3ZSB3ZXJlIHVzaW5nIG9uZSksIHdob3NlIG5hbWUgaXNcbiAgICAgICAgICAgICAgICAvLyB0aGUgZW1wdHkgc3RyaW5nXG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdE5vZGUgPSBnZXRIb3N0U2xvdE5vZGUodGhpcy5jaGlsZE5vZGVzLCAnJyk7XG4gICAgICAgICAgICAgICAgLy8gd2hlbiBhIHNsb3Qgbm9kZSBpcyBmb3VuZCwgdGhlIHRleHRDb250ZW50IF9tYXlfIGJlIGZvdW5kIGluIHRoZSBuZXh0IHNpYmxpbmcgKHRleHQpIG5vZGUsIGRlcGVuZGluZyBvbiBob3dcbiAgICAgICAgICAgICAgICAvLyBub2RlcyB3ZXJlIHJlb3JkZXJlZCBkdXJpbmcgdGhlIHZkb20gcmVuZGVyLiBmaXJzdCB0cnkgdG8gZ2V0IHRoZSB0ZXh0IGNvbnRlbnQgZnJvbSB0aGUgc2libGluZy5cbiAgICAgICAgICAgICAgICBpZiAoKChfYSA9IHNsb3ROb2RlID09PSBudWxsIHx8IHNsb3ROb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbG90Tm9kZS5uZXh0U2libGluZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5vZGVUeXBlKSA9PT0gMyAvKiBOT0RFX1RZUEVTLlRFWFRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2xvdE5vZGUubmV4dFNpYmxpbmcudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNsb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbG90Tm9kZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrIHRvIHRoZSBvcmlnaW5hbCBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fX3RleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSAnZGVmYXVsdCBzbG90Jywgd2hpY2ggd291bGQgYmUgdGhlIGZpcnN0IHNsb3QgaW4gYSBzaGFkb3cgdHJlZSAoaWYgd2Ugd2VyZSB1c2luZyBvbmUpLCB3aG9zZSBuYW1lIGlzXG4gICAgICAgICAgICAgICAgLy8gdGhlIGVtcHR5IHN0cmluZ1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsb3ROb2RlID0gZ2V0SG9zdFNsb3ROb2RlKHRoaXMuY2hpbGROb2RlcywgJycpO1xuICAgICAgICAgICAgICAgIC8vIHdoZW4gYSBzbG90IG5vZGUgaXMgZm91bmQsIHRoZSB0ZXh0Q29udGVudCBfbWF5XyBuZWVkIHRvIGJlIHBsYWNlZCBpbiB0aGUgbmV4dCBzaWJsaW5nICh0ZXh0KSBub2RlLFxuICAgICAgICAgICAgICAgIC8vIGRlcGVuZGluZyBvbiBob3cgbm9kZXMgd2VyZSByZW9yZGVyZWQgZHVyaW5nIHRoZSB2ZG9tIHJlbmRlci4gZmlyc3QgdHJ5IHRvIHNldCB0aGUgdGV4dCBjb250ZW50IG9uIHRoZVxuICAgICAgICAgICAgICAgIC8vIHNpYmxpbmcuXG4gICAgICAgICAgICAgICAgaWYgKCgoX2EgPSBzbG90Tm9kZSA9PT0gbnVsbCB8fCBzbG90Tm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2xvdE5vZGUubmV4dFNpYmxpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ub2RlVHlwZSkgPT09IDMgLyogTk9ERV9UWVBFUy5URVhUX05PREUgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvdE5vZGUubmV4dFNpYmxpbmcudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2xvdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvdE5vZGUudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNvdWxkbid0IGZpbmQgYSBzbG90LCBidXQgdGhhdCBkb2Vzbid0IG1lYW4gdGhhdCB0aGVyZSBpc24ndCBvbmUuIGlmIHRoaXMgY2hlY2sgcmFuIGJlZm9yZSB0aGUgRE9NXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvYWRlZCwgd2UgY291bGQgaGF2ZSBtaXNzZWQgaXQuIGNoZWNrIGZvciBhIGNvbnRlbnQgcmVmZXJlbmNlIGVsZW1lbnQgb24gdGhlIHNjb3BlZCBjb21wb25lbnQgYW5kIGluc2VydFxuICAgICAgICAgICAgICAgICAgICAvLyBpdCB0aGVyZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fdGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudFJlZkVsbSA9IHRoaXNbJ3MtY3InXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRSZWZFbG0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zZXJ0QmVmb3JlKGNvbnRlbnRSZWZFbG0sIHRoaXMuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgcGF0Y2hDaGlsZFNsb3ROb2RlcyA9IChlbG0sIGNtcE1ldGEpID0+IHtcbiAgICBjbGFzcyBGYWtlTm9kZUxpc3QgZXh0ZW5kcyBBcnJheSB7XG4gICAgICAgIGl0ZW0obikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbbl07XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNtcE1ldGEuJGZsYWdzJCAmIDggLyogQ01QX0ZMQUdTLm5lZWRzU2hhZG93RG9tU2hpbSAqLykge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzRm4gPSBlbG0uX19sb29rdXBHZXR0ZXJfXygnY2hpbGROb2RlcycpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxtLCAnY2hpbGRyZW4nLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoKG4pID0+IG4ubm9kZVR5cGUgPT09IDEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbG0sICdjaGlsZEVsZW1lbnRDb3VudCcsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxtLCAnY2hpbGROb2RlcycsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gY2hpbGROb2Rlc0ZuLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKChwbHQuJGZsYWdzJCAmIDEgLyogUExBVEZPUk1fRkxBR1MuaXNUbXBEaXNjb25uZWN0ZWQgKi8pID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgIGdldEhvc3RSZWYodGhpcykuJGZsYWdzJCAmIDIgLyogSE9TVF9GTEFHUy5oYXNSZW5kZXJlZCAqLykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBuZXcgRmFrZU5vZGVMaXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xvdCA9IGNoaWxkTm9kZXNbaV1bJ3MtbnInXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzbG90KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goc2xvdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZha2VOb2RlTGlzdC5mcm9tKGNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IGdldFNsb3ROYW1lID0gKG5vZGUpID0+IG5vZGVbJ3Mtc24nXSB8fCAobm9kZS5ub2RlVHlwZSA9PT0gMSAmJiBub2RlLmdldEF0dHJpYnV0ZSgnc2xvdCcpKSB8fCAnJztcbi8qKlxuICogUmVjdXJzaXZlbHkgc2VhcmNoZXMgYSBzZXJpZXMgb2YgY2hpbGQgbm9kZXMgZm9yIGEgc2xvdCB3aXRoIHRoZSBwcm92aWRlZCBuYW1lLlxuICogQHBhcmFtIGNoaWxkTm9kZXMgdGhlIG5vZGVzIHRvIHNlYXJjaCBmb3IgYSBzbG90IHdpdGggYSBzcGVjaWZpYyBuYW1lLlxuICogQHBhcmFtIHNsb3ROYW1lIHRoZSBuYW1lIG9mIHRoZSBzbG90IHRvIG1hdGNoIG9uLlxuICogQHJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIHNsb3Qgbm9kZSB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIG5hbWUsIGBudWxsYCBvdGhlcndpc2VcbiAqL1xuY29uc3QgZ2V0SG9zdFNsb3ROb2RlID0gKGNoaWxkTm9kZXMsIHNsb3ROYW1lKSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBjaGlsZE5vZGU7XG4gICAgZm9yICg7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaV07XG4gICAgICAgIGlmIChjaGlsZE5vZGVbJ3Mtc3InXSAmJiBjaGlsZE5vZGVbJ3Mtc24nXSA9PT0gc2xvdE5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGROb2RlID0gZ2V0SG9zdFNsb3ROb2RlKGNoaWxkTm9kZS5jaGlsZE5vZGVzLCBzbG90TmFtZSk7XG4gICAgICAgIGlmIChjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZE5vZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuY29uc3QgZ2V0SG9zdFNsb3RDaGlsZE5vZGVzID0gKG4sIHNsb3ROYW1lKSA9PiB7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IFtuXTtcbiAgICB3aGlsZSAoKG4gPSBuLm5leHRTaWJsaW5nKSAmJiBuWydzLXNuJ10gPT09IHNsb3ROYW1lKSB7XG4gICAgICAgIGNoaWxkTm9kZXMucHVzaChuKTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkTm9kZXM7XG59O1xuY29uc3QgaG1yU3RhcnQgPSAoZWxtLCBjbXBNZXRhLCBobXJWZXJzaW9uSWQpID0+IHtcbiAgICAvLyDCr1xcXyjjg4QpXy/Cr1xuICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKGVsbSk7XG4gICAgLy8gcmVzZXQgc3RhdGUgZmxhZ3MgdG8gb25seSBoYXZlIGJlZW4gY29ubmVjdGVkXG4gICAgaG9zdFJlZi4kZmxhZ3MkID0gMSAvKiBIT1NUX0ZMQUdTLmhhc0Nvbm5lY3RlZCAqLztcbiAgICAvLyBUT0RPXG4gICAgLy8gZGV0YXRjaCBhbnkgZXZlbnQgbGlzdGVuZXJzIHRoYXQgbWF5IGhhdmUgYmVlbiBhZGRlZFxuICAgIC8vIGJlY2F1c2Ugd2UncmUgbm90IHBhc3NpbmcgYW4gZXhhY3QgZXZlbnQgbmFtZSBpdCdsbFxuICAgIC8vIHJlbW92ZSBhbGwgb2YgdGhpcyBlbGVtZW50J3MgZXZlbnQsIHdoaWNoIGlzIGdvb2RcbiAgICAvLyBjcmVhdGUgYSBjYWxsYmFjayBmb3Igd2hlbiB0aGlzIGNvbXBvbmVudCBmaW5pc2hlcyBobXJcbiAgICBlbG1bJ3MtaG1yLWxvYWQnXSA9ICgpID0+IHtcbiAgICAgICAgLy8gZmluaXNoZWQgaG1yIGZvciB0aGlzIGVsZW1lbnRcbiAgICAgICAgZGVsZXRlIGVsbVsncy1obXItbG9hZCddO1xuICAgIH07XG4gICAgLy8gcmUtaW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50XG4gICAgaW5pdGlhbGl6ZUNvbXBvbmVudChlbG0sIGhvc3RSZWYsIGNtcE1ldGEsIGhtclZlcnNpb25JZCk7XG59O1xuY29uc3QgYm9vdHN0cmFwTGF6eSA9IChsYXp5QnVuZGxlcywgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChCVUlMRC5wcm9maWxlICYmIHBlcmZvcm1hbmNlLm1hcmspIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygnc3Q6YXBwOnN0YXJ0Jyk7XG4gICAgfVxuICAgIGluc3RhbGxEZXZUb29scygpO1xuICAgIGNvbnN0IGVuZEJvb3RzdHJhcCA9IGNyZWF0ZVRpbWUoJ2Jvb3RzdHJhcExhenknKTtcbiAgICBjb25zdCBjbXBUYWdzID0gW107XG4gICAgY29uc3QgZXhjbHVkZSA9IG9wdGlvbnMuZXhjbHVkZSB8fCBbXTtcbiAgICBjb25zdCBjdXN0b21FbGVtZW50cyA9IHdpbi5jdXN0b21FbGVtZW50cztcbiAgICBjb25zdCBoZWFkID0gZG9jLmhlYWQ7XG4gICAgY29uc3QgbWV0YUNoYXJzZXQgPSAvKkBfX1BVUkVfXyovIGhlYWQucXVlcnlTZWxlY3RvcignbWV0YVtjaGFyc2V0XScpO1xuICAgIGNvbnN0IHZpc2liaWxpdHlTdHlsZSA9IC8qQF9fUFVSRV9fKi8gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY29uc3QgZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MgPSBbXTtcbiAgICBjb25zdCBzdHlsZXMgPSAvKkBfX1BVUkVfXyovIGRvYy5xdWVyeVNlbGVjdG9yQWxsKGBbJHtIWURSQVRFRF9TVFlMRV9JRH1dYCk7XG4gICAgbGV0IGFwcExvYWRGYWxsYmFjaztcbiAgICBsZXQgaXNCb290c3RyYXBwaW5nID0gdHJ1ZTtcbiAgICBsZXQgaSA9IDA7XG4gICAgT2JqZWN0LmFzc2lnbihwbHQsIG9wdGlvbnMpO1xuICAgIHBsdC4kcmVzb3VyY2VzVXJsJCA9IG5ldyBVUkwob3B0aW9ucy5yZXNvdXJjZXNVcmwgfHwgJy4vJywgZG9jLmJhc2VVUkkpLmhyZWY7XG4gICAgaWYgKEJVSUxELmFzeW5jUXVldWUpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc3luY1F1ZXVlKSB7XG4gICAgICAgICAgICBwbHQuJGZsYWdzJCB8PSA0IC8qIFBMQVRGT1JNX0ZMQUdTLnF1ZXVlU3luYyAqLztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoQlVJTEQuaHlkcmF0ZUNsaWVudFNpZGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGFwcCBpcyBhbHJlYWR5IGh5ZHJhdGVkIHRoZXJlIGlzIG5vdCBwb2ludCB0byBkaXNhYmxlIHRoZVxuICAgICAgICAvLyBhc3luYyBxdWV1ZS4gVGhpcyB3aWxsIGltcHJvdmUgdGhlIGZpcnN0IGlucHV0IGRlbGF5XG4gICAgICAgIHBsdC4kZmxhZ3MkIHw9IDIgLyogUExBVEZPUk1fRkxBR1MuYXBwTG9hZGVkICovO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuaHlkcmF0ZUNsaWVudFNpZGUgJiYgQlVJTEQuc2hhZG93RG9tKSB7XG4gICAgICAgIGZvciAoOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZWdpc3RlclN0eWxlKHN0eWxlc1tpXS5nZXRBdHRyaWJ1dGUoSFlEUkFURURfU1RZTEVfSUQpLCBjb252ZXJ0U2NvcGVkVG9TaGFkb3coc3R5bGVzW2ldLmlubmVySFRNTCksIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxhenlCdW5kbGVzLm1hcCgobGF6eUJ1bmRsZSkgPT4ge1xuICAgICAgICBsYXp5QnVuZGxlWzFdLm1hcCgoY29tcGFjdE1ldGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNtcE1ldGEgPSB7XG4gICAgICAgICAgICAgICAgJGZsYWdzJDogY29tcGFjdE1ldGFbMF0sXG4gICAgICAgICAgICAgICAgJHRhZ05hbWUkOiBjb21wYWN0TWV0YVsxXSxcbiAgICAgICAgICAgICAgICAkbWVtYmVycyQ6IGNvbXBhY3RNZXRhWzJdLFxuICAgICAgICAgICAgICAgICRsaXN0ZW5lcnMkOiBjb21wYWN0TWV0YVszXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoQlVJTEQubWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY21wTWV0YS4kbWVtYmVycyQgPSBjb21wYWN0TWV0YVsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBjbXBNZXRhLiRsaXN0ZW5lcnMkID0gY29tcGFjdE1ldGFbM107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQucmVmbGVjdCkge1xuICAgICAgICAgICAgICAgIGNtcE1ldGEuJGF0dHJzVG9SZWZsZWN0JCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELndhdGNoQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjbXBNZXRhLiR3YXRjaGVycyQgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5zaGFkb3dEb20gJiYgIXN1cHBvcnRzU2hhZG93ICYmIGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogQ01QX0ZMQUdTLnNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICBjbXBNZXRhLiRmbGFncyQgfD0gOCAvKiBDTVBfRkxBR1MubmVlZHNTaGFkb3dEb21TaGltICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGFnTmFtZSA9IEJVSUxELnRyYW5zZm9ybVRhZ05hbWUgJiYgb3B0aW9ucy50cmFuc2Zvcm1UYWdOYW1lXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLnRyYW5zZm9ybVRhZ05hbWUoY21wTWV0YS4kdGFnTmFtZSQpXG4gICAgICAgICAgICAgICAgOiBjbXBNZXRhLiR0YWdOYW1lJDtcbiAgICAgICAgICAgIGNvbnN0IEhvc3RFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgICAgICAgICAgICAgLy8gU3RlbmNpbExhenlIb3N0XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3Ioc2VsZikge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIHN1cGVyKHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJIb3N0KHNlbGYsIGNtcE1ldGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmIGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogQ01QX0ZMQUdTLnNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgY29tcG9uZW50IGlzIHVzaW5nIHNoYWRvdyBkb21cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgc2hhZG93IGRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRoZSByZWFkLW9ubHkgcHJvcGVydHkgXCJzaGFkb3dSb290XCIgdG8gdGhlIGhvc3QgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkaW5nIHRoZSBzaGFkb3cgcm9vdCBidWlsZCBjb25kaXRpb25hbHMgdG8gbWluaW1pemUgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN1cHBvcnRzU2hhZG93KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELnNoYWRvd0RlbGVnYXRlc0ZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXR0YWNoU2hhZG93KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdvcGVuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYXRlc0ZvY3VzOiAhIShjbXBNZXRhLiRmbGFncyQgJiAxNiAvKiBDTVBfRkxBR1Muc2hhZG93RGVsZWdhdGVzRm9jdXMgKi8pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSAmJiAhKCdzaGFkb3dSb290JyBpbiBzZWxmKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2hhZG93Um9vdCA9IHNlbGY7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELnNsb3RDaGlsZE5vZGVzRml4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaENoaWxkU2xvdE5vZGVzKHNlbGYsIGNtcE1ldGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXBwTG9hZEZhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoYXBwTG9hZEZhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcExvYWRGYWxsYmFjayA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQm9vdHN0cmFwcGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29ubmVjdGVkQ2FsbGJhY2sgd2lsbCBiZSBwcm9jZXNzZWQgb25jZSBhbGwgY29tcG9uZW50cyBoYXZlIGJlZW4gcmVnaXN0ZXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MucHVzaCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4gY29ubmVjdGVkQ2FsbGJhY2sodGhpcykpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgICAgICAgICBwbHQuam1wKCgpID0+IGRpc2Nvbm5lY3RlZENhbGxiYWNrKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50T25SZWFkeSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEhvc3RSZWYodGhpcykuJG9uUmVhZHlQcm9taXNlJDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKEJVSUxELmNsb25lTm9kZUZpeCkge1xuICAgICAgICAgICAgICAgIHBhdGNoQ2xvbmVOb2RlKEhvc3RFbGVtZW50LnByb3RvdHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuYXBwZW5kQ2hpbGRTbG90Rml4KSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hTbG90QXBwZW5kQ2hpbGQoSG9zdEVsZW1lbnQucHJvdG90eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5ob3RNb2R1bGVSZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgIEhvc3RFbGVtZW50LnByb3RvdHlwZVsncy1obXInXSA9IGZ1bmN0aW9uIChobXJWZXJzaW9uSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaG1yU3RhcnQodGhpcywgY21wTWV0YSwgaG1yVmVyc2lvbklkKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELnNjb3BlZFNsb3RUZXh0Q29udGVudEZpeCkge1xuICAgICAgICAgICAgICAgIHBhdGNoVGV4dENvbnRlbnQoSG9zdEVsZW1lbnQucHJvdG90eXBlLCBjbXBNZXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNtcE1ldGEuJGxhenlCdW5kbGVJZCQgPSBsYXp5QnVuZGxlWzBdO1xuICAgICAgICAgICAgaWYgKCFleGNsdWRlLmluY2x1ZGVzKHRhZ05hbWUpICYmICFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgICAgICAgICBjbXBUYWdzLnB1c2godGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIHByb3h5Q29tcG9uZW50KEhvc3RFbGVtZW50LCBjbXBNZXRhLCAxIC8qIFBST1hZX0ZMQUdTLmlzRWxlbWVudENvbnN0cnVjdG9yICovKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChCVUlMRC5pbnZpc2libGVQcmVoeWRyYXRpb24gJiYgKEJVSUxELmh5ZHJhdGVkQ2xhc3MgfHwgQlVJTEQuaHlkcmF0ZWRBdHRyaWJ1dGUpKSB7XG4gICAgICAgIHZpc2liaWxpdHlTdHlsZS5pbm5lckhUTUwgPSBjbXBUYWdzICsgSFlEUkFURURfQ1NTO1xuICAgICAgICB2aXNpYmlsaXR5U3R5bGUuc2V0QXR0cmlidXRlKCdkYXRhLXN0eWxlcycsICcnKTtcbiAgICAgICAgLy8gQXBwbHkgQ1NQIG5vbmNlIHRvIHRoZSBzdHlsZSB0YWcgaWYgaXQgZXhpc3RzXG4gICAgICAgIGNvbnN0IG5vbmNlID0gKF9hID0gcGx0LiRub25jZSQpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHF1ZXJ5Tm9uY2VNZXRhVGFnQ29udGVudChkb2MpO1xuICAgICAgICBpZiAobm9uY2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgdmlzaWJpbGl0eVN0eWxlLnNldEF0dHJpYnV0ZSgnbm9uY2UnLCBub25jZSk7XG4gICAgICAgIH1cbiAgICAgICAgaGVhZC5pbnNlcnRCZWZvcmUodmlzaWJpbGl0eVN0eWxlLCBtZXRhQ2hhcnNldCA/IG1ldGFDaGFyc2V0Lm5leHRTaWJsaW5nIDogaGVhZC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgLy8gUHJvY2VzcyBkZWZlcnJlZCBjb25uZWN0ZWRDYWxsYmFja3Mgbm93IGFsbCBjb21wb25lbnRzIGhhdmUgYmVlbiByZWdpc3RlcmVkXG4gICAgaXNCb290c3RyYXBwaW5nID0gZmFsc2U7XG4gICAgaWYgKGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5tYXAoKGhvc3QpID0+IGhvc3QuY29ubmVjdGVkQ2FsbGJhY2soKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoQlVJTEQucHJvZmlsZSkge1xuICAgICAgICAgICAgcGx0LmptcCgoKSA9PiAoYXBwTG9hZEZhbGxiYWNrID0gc2V0VGltZW91dChhcHBEaWRMb2FkLCAzMCwgJ3RpbWVvdXQnKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGx0LmptcCgoKSA9PiAoYXBwTG9hZEZhbGxiYWNrID0gc2V0VGltZW91dChhcHBEaWRMb2FkLCAzMCkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBGYWxsYmFjayBhcHBMb2FkIGV2ZW50XG4gICAgZW5kQm9vdHN0cmFwKCk7XG59O1xuY29uc3QgZ2V0Q29ubmVjdCA9IChfcmVmLCB0YWdOYW1lKSA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50T25SZWFkeSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGVsbSA9IGRvYy5xdWVyeVNlbGVjdG9yKHRhZ05hbWUpO1xuICAgICAgICBpZiAoIWVsbSkge1xuICAgICAgICAgICAgZWxtID0gZG9jLmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG4gICAgICAgICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChlbG0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlb2YgZWxtLmNvbXBvbmVudE9uUmVhZHkgPT09ICdmdW5jdGlvbicgPyBlbG0uY29tcG9uZW50T25SZWFkeSgpIDogUHJvbWlzZS5yZXNvbHZlKGVsbSk7XG4gICAgfTtcbiAgICBjb25zdCBjcmVhdGUgPSAoLi4uYXJncykgPT4ge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50T25SZWFkeSgpLnRoZW4oKGVsKSA9PiBlbC5jcmVhdGUoLi4uYXJncykpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlLFxuICAgICAgICBjb21wb25lbnRPblJlYWR5LFxuICAgIH07XG59O1xuY29uc3QgZ2V0Q29udGV4dCA9IChfZWxtLCBjb250ZXh0KSA9PiB7XG4gICAgaWYgKGNvbnRleHQgaW4gQ29udGV4dCkge1xuICAgICAgICByZXR1cm4gQ29udGV4dFtjb250ZXh0XTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGV4dCA9PT0gJ3dpbmRvdycpIHtcbiAgICAgICAgcmV0dXJuIHdpbjtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGV4dCA9PT0gJ2RvY3VtZW50Jykge1xuICAgICAgICByZXR1cm4gZG9jO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb250ZXh0ID09PSAnaXNTZXJ2ZXInIHx8IGNvbnRleHQgPT09ICdpc1ByZXJlbmRlcicpIHtcbiAgICAgICAgcmV0dXJuIEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb250ZXh0ID09PSAnaXNDbGllbnQnKSB7XG4gICAgICAgIHJldHVybiBCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSA/IGZhbHNlIDogdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGV4dCA9PT0gJ3Jlc291cmNlc1VybCcgfHwgY29udGV4dCA9PT0gJ3B1YmxpY1BhdGgnKSB7XG4gICAgICAgIHJldHVybiBnZXRBc3NldFBhdGgoJy4nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGV4dCA9PT0gJ3F1ZXVlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd3JpdGU6IHdyaXRlVGFzayxcbiAgICAgICAgICAgIHJlYWQ6IHJlYWRUYXNrLFxuICAgICAgICAgICAgdGljazoge1xuICAgICAgICAgICAgICAgIHRoZW4oY2IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHRUaWNrKGNiKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5jb25zdCBGcmFnbWVudCA9IChfLCBjaGlsZHJlbikgPT4gY2hpbGRyZW47XG5jb25zdCBhZGRIb3N0RXZlbnRMaXN0ZW5lcnMgPSAoZWxtLCBob3N0UmVmLCBsaXN0ZW5lcnMsIGF0dGFjaFBhcmVudExpc3RlbmVycykgPT4ge1xuICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXIgJiYgbGlzdGVuZXJzKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgY2FsbGVkIGltbWVkaWF0ZWx5IHdpdGhpbiB0aGUgZWxlbWVudCdzIGNvbnN0cnVjdG9yXG4gICAgICAgIC8vIGluaXRpYWxpemUgb3VyIGV2ZW50IGxpc3RlbmVycyBvbiB0aGUgaG9zdCBlbGVtZW50XG4gICAgICAgIC8vIHdlIGRvIHRoaXMgbm93IHNvIHRoYXQgd2UgY2FuIGxpc3RlbiB0byBldmVudHMgdGhhdCBtYXlcbiAgICAgICAgLy8gaGF2ZSBmaXJlZCBldmVuIGJlZm9yZSB0aGUgaW5zdGFuY2UgaXMgcmVhZHlcbiAgICAgICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldFBhcmVudCkge1xuICAgICAgICAgICAgLy8gdGhpcyBjb21wb25lbnQgbWF5IGhhdmUgZXZlbnQgbGlzdGVuZXJzIHRoYXQgc2hvdWxkIGJlIGF0dGFjaGVkIHRvIHRoZSBwYXJlbnRcbiAgICAgICAgICAgIGlmIChhdHRhY2hQYXJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGJlaW5nIHJhbiBmcm9tIHdpdGhpbiB0aGUgY29ubmVjdGVkQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAvLyB3aGljaCBpcyBpbXBvcnRhbnQgc28gdGhhdCB3ZSBrbm93IHRoZSBob3N0IGVsZW1lbnQgYWN0dWFsbHkgaGFzIGEgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBmaWx0ZXIgb3V0IHRoZSBsaXN0ZW5lcnMgdG8gb25seSBoYXZlIHRoZSBvbmVzIHRoYXQgQVJFIGJlaW5nIGF0dGFjaGVkIHRvIHRoZSBwYXJlbnRcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChbZmxhZ3NdKSA9PiBmbGFncyAmIDMyIC8qIExJU1RFTkVSX0ZMQUdTLlRhcmdldFBhcmVudCAqLyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGJlaW5nIHJhbiBmcm9tIHdpdGhpbiB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yXG4gICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBCVVQgdGhlIHBhcmVudCBlbGVtZW50IGxpc3RlbmVycyBzaG91bGQgYmUgYXR0YWNoZWQgYXQgdGhpcyB0aW1lXG4gICAgICAgICAgICAgICAgLy8gZmlsdGVyIG91dCB0aGUgbGlzdGVuZXJzIHRoYXQgYXJlIE5PVCBiZWluZyBhdHRhY2hlZCB0byB0aGUgcGFyZW50XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzID0gbGlzdGVuZXJzLmZpbHRlcigoW2ZsYWdzXSkgPT4gIShmbGFncyAmIDMyIC8qIExJU1RFTkVSX0ZMQUdTLlRhcmdldFBhcmVudCAqLykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxpc3RlbmVycy5tYXAoKFtmbGFncywgbmFtZSwgbWV0aG9kXSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gQlVJTEQuaG9zdExpc3RlbmVyVGFyZ2V0ID8gZ2V0SG9zdExpc3RlbmVyVGFyZ2V0KGVsbSwgZmxhZ3MpIDogZWxtO1xuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IGhvc3RMaXN0ZW5lclByb3h5KGhvc3RSZWYsIG1ldGhvZCk7XG4gICAgICAgICAgICBjb25zdCBvcHRzID0gaG9zdExpc3RlbmVyT3B0cyhmbGFncyk7XG4gICAgICAgICAgICBwbHQuYWVsKHRhcmdldCwgbmFtZSwgaGFuZGxlciwgb3B0cyk7XG4gICAgICAgICAgICAoaG9zdFJlZi4kcm1MaXN0ZW5lcnMkID0gaG9zdFJlZi4kcm1MaXN0ZW5lcnMkIHx8IFtdKS5wdXNoKCgpID0+IHBsdC5yZWwodGFyZ2V0LCBuYW1lLCBoYW5kbGVyLCBvcHRzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBob3N0TGlzdGVuZXJQcm94eSA9IChob3N0UmVmLCBtZXRob2ROYW1lKSA9PiAoZXYpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBpZiAoQlVJTEQubGF6eUxvYWQpIHtcbiAgICAgICAgICAgIGlmIChob3N0UmVmLiRmbGFncyQgJiAyNTYgLyogSE9TVF9GTEFHUy5pc0xpc3RlblJlYWR5ICovKSB7XG4gICAgICAgICAgICAgICAgLy8gaW5zdGFuY2UgaXMgcmVhZHksIGxldCdzIGNhbGwgaXQncyBtZW1iZXIgbWV0aG9kIGZvciB0aGlzIGV2ZW50XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kbGF6eUluc3RhbmNlJFttZXRob2ROYW1lXShldik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAoaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJCA9IGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQgfHwgW10pLnB1c2goW21ldGhvZE5hbWUsIGV2XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBob3N0UmVmLiRob3N0RWxlbWVudCRbbWV0aG9kTmFtZV0oZXYpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICB9XG59O1xuY29uc3QgZ2V0SG9zdExpc3RlbmVyVGFyZ2V0ID0gKGVsbSwgZmxhZ3MpID0+IHtcbiAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyVGFyZ2V0RG9jdW1lbnQgJiYgZmxhZ3MgJiA0IC8qIExJU1RFTkVSX0ZMQUdTLlRhcmdldERvY3VtZW50ICovKVxuICAgICAgICByZXR1cm4gZG9jO1xuICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXJUYXJnZXRXaW5kb3cgJiYgZmxhZ3MgJiA4IC8qIExJU1RFTkVSX0ZMQUdTLlRhcmdldFdpbmRvdyAqLylcbiAgICAgICAgcmV0dXJuIHdpbjtcbiAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyVGFyZ2V0Qm9keSAmJiBmbGFncyAmIDE2IC8qIExJU1RFTkVSX0ZMQUdTLlRhcmdldEJvZHkgKi8pXG4gICAgICAgIHJldHVybiBkb2MuYm9keTtcbiAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyVGFyZ2V0UGFyZW50ICYmIGZsYWdzICYgMzIgLyogTElTVEVORVJfRkxBR1MuVGFyZ2V0UGFyZW50ICovKVxuICAgICAgICByZXR1cm4gZWxtLnBhcmVudEVsZW1lbnQ7XG4gICAgcmV0dXJuIGVsbTtcbn07XG4vLyBwcmV0dGllci1pZ25vcmVcbmNvbnN0IGhvc3RMaXN0ZW5lck9wdHMgPSAoZmxhZ3MpID0+IHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zXG4gICAgPyAoe1xuICAgICAgICBwYXNzaXZlOiAoZmxhZ3MgJiAxIC8qIExJU1RFTkVSX0ZMQUdTLlBhc3NpdmUgKi8pICE9PSAwLFxuICAgICAgICBjYXB0dXJlOiAoZmxhZ3MgJiAyIC8qIExJU1RFTkVSX0ZMQUdTLkNhcHR1cmUgKi8pICE9PSAwLFxuICAgIH0pXG4gICAgOiAoZmxhZ3MgJiAyIC8qIExJU1RFTkVSX0ZMQUdTLkNhcHR1cmUgKi8pICE9PSAwO1xuLyoqXG4gKiBBc3NpZ25zIHRoZSBnaXZlbiB2YWx1ZSB0byB0aGUgbm9uY2UgcHJvcGVydHkgb24gdGhlIHJ1bnRpbWUgcGxhdGZvcm0gb2JqZWN0LlxuICogRHVyaW5nIHJ1bnRpbWUsIHRoaXMgdmFsdWUgaXMgdXNlZCB0byBzZXQgdGhlIG5vbmNlIGF0dHJpYnV0ZSBvbiBhbGwgZHluYW1pY2FsbHkgY3JlYXRlZCBzY3JpcHQgYW5kIHN0eWxlIHRhZ3MuXG4gKiBAcGFyYW0gbm9uY2UgVGhlIHZhbHVlIHRvIGJlIGFzc2lnbmVkIHRvIHRoZSBwbGF0Zm9ybSBub25jZSBwcm9wZXJ0eS5cbiAqIEByZXR1cm5zIHZvaWRcbiAqL1xuY29uc3Qgc2V0Tm9uY2UgPSAobm9uY2UpID0+IChwbHQuJG5vbmNlJCA9IG5vbmNlKTtcbmNvbnN0IHNldFBsYXRmb3JtT3B0aW9ucyA9IChvcHRzKSA9PiBPYmplY3QuYXNzaWduKHBsdCwgb3B0cyk7XG5jb25zdCBpbnNlcnRWZG9tQW5ub3RhdGlvbnMgPSAoZG9jLCBzdGF0aWNDb21wb25lbnRzKSA9PiB7XG4gICAgaWYgKGRvYyAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGRvY0RhdGEgPSB7XG4gICAgICAgICAgICBob3N0SWRzOiAwLFxuICAgICAgICAgICAgcm9vdExldmVsSWRzOiAwLFxuICAgICAgICAgICAgc3RhdGljQ29tcG9uZW50czogbmV3IFNldChzdGF0aWNDb21wb25lbnRzKSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgb3JnTG9jYXRpb25Ob2RlcyA9IFtdO1xuICAgICAgICBwYXJzZVZOb2RlQW5ub3RhdGlvbnMoZG9jLCBkb2MuYm9keSwgZG9jRGF0YSwgb3JnTG9jYXRpb25Ob2Rlcyk7XG4gICAgICAgIG9yZ0xvY2F0aW9uTm9kZXMuZm9yRWFjaCgob3JnTG9jYXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBpZiAob3JnTG9jYXRpb25Ob2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBub2RlUmVmID0gb3JnTG9jYXRpb25Ob2RlWydzLW5yJ107XG4gICAgICAgICAgICAgICAgbGV0IGhvc3RJZCA9IG5vZGVSZWZbJ3MtaG9zdC1pZCddO1xuICAgICAgICAgICAgICAgIGxldCBub2RlSWQgPSBub2RlUmVmWydzLW5vZGUtaWQnXTtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRJZCA9IGAke2hvc3RJZH0uJHtub2RlSWR9YDtcbiAgICAgICAgICAgICAgICBpZiAoaG9zdElkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdElkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgZG9jRGF0YS5yb290TGV2ZWxJZHMrKztcbiAgICAgICAgICAgICAgICAgICAgbm9kZUlkID0gZG9jRGF0YS5yb290TGV2ZWxJZHM7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkSWQgPSBgJHtob3N0SWR9LiR7bm9kZUlkfWA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlUmVmLm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVJlZi5zZXRBdHRyaWJ1dGUoSFlEUkFURV9DSElMRF9JRCwgY2hpbGRJZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZVJlZi5ub2RlVHlwZSA9PT0gMyAvKiBOT0RFX1RZUEUuVGV4dE5vZGUgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChob3N0SWQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Q29udGVudCA9IG5vZGVSZWYubm9kZVZhbHVlLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dENvbnRlbnQgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVzZWxlc3Mgd2hpdGVzcGFjZSBub2RlIGF0IHRoZSBkb2N1bWVudCByb290XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRCZWZvcmVUZXh0Tm9kZSA9IGRvYy5jcmVhdGVDb21tZW50KGNoaWxkSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudEJlZm9yZVRleHROb2RlLm5vZGVWYWx1ZSA9IGAke1RFWFRfTk9ERV9JRH0uJHtjaGlsZElkfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlUmVmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNvbW1lbnRCZWZvcmVUZXh0Tm9kZSwgbm9kZVJlZik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG9yZ0xvY2F0aW9uTm9kZUlkID0gYCR7T1JHX0xPQ0FUSU9OX0lEfS4ke2NoaWxkSWR9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBvcmdMb2NhdGlvblBhcmVudE5vZGUgPSBvcmdMb2NhdGlvbk5vZGUucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAob3JnTG9jYXRpb25QYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcmdMb2NhdGlvblBhcmVudE5vZGVbJ3MtZW4nXSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuZGluZyB3aXRoIGEgXCIuXCIgbWVhbnMgdGhhdCB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIHRoaXMgbm9kZSdzIG9yaWdpbmFsIGxvY2F0aW9uIGlzIGEgU0hBRE9XIGRvbSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhpcyBub2RlIGlzIGFwYXJ0IG9mIHRoZSByb290IGxldmVsIGxpZ2h0IGRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlSWQgKz0gYC5gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9yZ0xvY2F0aW9uUGFyZW50Tm9kZVsncy1lbiddID09PSAnYycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuZGluZyB3aXRoIGEgXCIuY1wiIG1lYW5zIHRoYXQgdGhlIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvZiB0aGlzIG5vZGUncyBvcmlnaW5hbCBsb2NhdGlvbiBpcyBhIFNDT1BFRCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgdGhpcyBub2RlIGlzIGFwYXJ0IG9mIHRoZSByb290IGxldmVsIGxpZ2h0IGRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlSWQgKz0gYC5jYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGUubm9kZVZhbHVlID0gb3JnTG9jYXRpb25Ob2RlSWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBwYXJzZVZOb2RlQW5ub3RhdGlvbnMgPSAoZG9jLCBub2RlLCBkb2NEYXRhLCBvcmdMb2NhdGlvbk5vZGVzKSA9PiB7XG4gICAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlWydzLW5yJ10gIT0gbnVsbCkge1xuICAgICAgICBvcmdMb2NhdGlvbk5vZGVzLnB1c2gobm9kZSk7XG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLykge1xuICAgICAgICBub2RlLmNoaWxkTm9kZXMuZm9yRWFjaCgoY2hpbGROb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihjaGlsZE5vZGUpO1xuICAgICAgICAgICAgaWYgKGhvc3RSZWYgIT0gbnVsbCAmJiAhZG9jRGF0YS5zdGF0aWNDb21wb25lbnRzLmhhcyhjaGlsZE5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjbXBEYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBub2RlSWRzOiAwLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaW5zZXJ0Vk5vZGVBbm5vdGF0aW9ucyhkb2MsIGNoaWxkTm9kZSwgaG9zdFJlZi4kdm5vZGUkLCBkb2NEYXRhLCBjbXBEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhcnNlVk5vZGVBbm5vdGF0aW9ucyhkb2MsIGNoaWxkTm9kZSwgZG9jRGF0YSwgb3JnTG9jYXRpb25Ob2Rlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBpbnNlcnRWTm9kZUFubm90YXRpb25zID0gKGRvYywgaG9zdEVsbSwgdm5vZGUsIGRvY0RhdGEsIGNtcERhdGEpID0+IHtcbiAgICBpZiAodm5vZGUgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBob3N0SWQgPSArK2RvY0RhdGEuaG9zdElkcztcbiAgICAgICAgaG9zdEVsbS5zZXRBdHRyaWJ1dGUoSFlEUkFURV9JRCwgaG9zdElkKTtcbiAgICAgICAgaWYgKGhvc3RFbG1bJ3MtY3InXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBob3N0RWxtWydzLWNyJ10ubm9kZVZhbHVlID0gYCR7Q09OVEVOVF9SRUZfSUR9LiR7aG9zdElkfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZub2RlLiRjaGlsZHJlbiQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGVwdGggPSAwO1xuICAgICAgICAgICAgdm5vZGUuJGNoaWxkcmVuJC5mb3JFYWNoKCh2bm9kZUNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGluc2VydENoaWxkVk5vZGVBbm5vdGF0aW9ucyhkb2MsIHZub2RlQ2hpbGQsIGNtcERhdGEsIGhvc3RJZCwgZGVwdGgsIGluZGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChob3N0RWxtICYmIHZub2RlICYmIHZub2RlLiRlbG0kICYmICFob3N0RWxtLmhhc0F0dHJpYnV0ZSgnYy1pZCcpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBob3N0RWxtLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50Q2hpbGROb2RlcyA9IEFycmF5LmZyb20ocGFyZW50LmNoaWxkTm9kZXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1lbnQgPSBwYXJlbnRDaGlsZE5vZGVzLmZpbmQoKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDggLyogTk9ERV9UWVBFLkNvbW1lbnROb2RlICovICYmIG5vZGVbJ3Mtc3InXSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBwYXJlbnRDaGlsZE5vZGVzLmluZGV4T2YoaG9zdEVsbSkgLSAxO1xuICAgICAgICAgICAgICAgICAgICB2bm9kZS4kZWxtJC5zZXRBdHRyaWJ1dGUoSFlEUkFURV9DSElMRF9JRCwgYCR7Y29tbWVudFsncy1ob3N0LWlkJ119LiR7Y29tbWVudFsncy1ub2RlLWlkJ119LjAuJHtpbmRleH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgaW5zZXJ0Q2hpbGRWTm9kZUFubm90YXRpb25zID0gKGRvYywgdm5vZGVDaGlsZCwgY21wRGF0YSwgaG9zdElkLCBkZXB0aCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjaGlsZEVsbSA9IHZub2RlQ2hpbGQuJGVsbSQ7XG4gICAgaWYgKGNoaWxkRWxtID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBub2RlSWQgPSBjbXBEYXRhLm5vZGVJZHMrKztcbiAgICBjb25zdCBjaGlsZElkID0gYCR7aG9zdElkfS4ke25vZGVJZH0uJHtkZXB0aH0uJHtpbmRleH1gO1xuICAgIGNoaWxkRWxtWydzLWhvc3QtaWQnXSA9IGhvc3RJZDtcbiAgICBjaGlsZEVsbVsncy1ub2RlLWlkJ10gPSBub2RlSWQ7XG4gICAgaWYgKGNoaWxkRWxtLm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLykge1xuICAgICAgICBjaGlsZEVsbS5zZXRBdHRyaWJ1dGUoSFlEUkFURV9DSElMRF9JRCwgY2hpbGRJZCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoaWxkRWxtLm5vZGVUeXBlID09PSAzIC8qIE5PREVfVFlQRS5UZXh0Tm9kZSAqLykge1xuICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gY2hpbGRFbG0ucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3Qgbm9kZU5hbWUgPSBwYXJlbnROb2RlLm5vZGVOYW1lO1xuICAgICAgICBpZiAobm9kZU5hbWUgIT09ICdTVFlMRScgJiYgbm9kZU5hbWUgIT09ICdTQ1JJUFQnKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0Tm9kZUlkID0gYCR7VEVYVF9OT0RFX0lEfS4ke2NoaWxkSWR9YDtcbiAgICAgICAgICAgIGNvbnN0IGNvbW1lbnRCZWZvcmVUZXh0Tm9kZSA9IGRvYy5jcmVhdGVDb21tZW50KHRleHROb2RlSWQpO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29tbWVudEJlZm9yZVRleHROb2RlLCBjaGlsZEVsbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoY2hpbGRFbG0ubm9kZVR5cGUgPT09IDggLyogTk9ERV9UWVBFLkNvbW1lbnROb2RlICovKSB7XG4gICAgICAgIGlmIChjaGlsZEVsbVsncy1zciddKSB7XG4gICAgICAgICAgICBjb25zdCBzbG90TmFtZSA9IGNoaWxkRWxtWydzLXNuJ10gfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBzbG90Tm9kZUlkID0gYCR7U0xPVF9OT0RFX0lEfS4ke2NoaWxkSWR9LiR7c2xvdE5hbWV9YDtcbiAgICAgICAgICAgIGNoaWxkRWxtLm5vZGVWYWx1ZSA9IHNsb3ROb2RlSWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZub2RlQ2hpbGQuJGNoaWxkcmVuJCAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkRGVwdGggPSBkZXB0aCArIDE7XG4gICAgICAgIHZub2RlQ2hpbGQuJGNoaWxkcmVuJC5mb3JFYWNoKCh2bm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGluc2VydENoaWxkVk5vZGVBbm5vdGF0aW9ucyhkb2MsIHZub2RlLCBjbXBEYXRhLCBob3N0SWQsIGNoaWxkRGVwdGgsIGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IGhvc3RSZWZzID0gLypAX19QVVJFX18qLyBuZXcgV2Vha01hcCgpO1xuY29uc3QgZ2V0SG9zdFJlZiA9IChyZWYpID0+IGhvc3RSZWZzLmdldChyZWYpO1xuY29uc3QgcmVnaXN0ZXJJbnN0YW5jZSA9IChsYXp5SW5zdGFuY2UsIGhvc3RSZWYpID0+IGhvc3RSZWZzLnNldCgoaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA9IGxhenlJbnN0YW5jZSksIGhvc3RSZWYpO1xuY29uc3QgcmVnaXN0ZXJIb3N0ID0gKGVsbSwgY21wTWV0YSkgPT4ge1xuICAgIGNvbnN0IGhvc3RSZWYgPSB7XG4gICAgICAgICRmbGFncyQ6IDAsXG4gICAgICAgICRob3N0RWxlbWVudCQ6IGVsbSxcbiAgICAgICAgJGNtcE1ldGEkOiBjbXBNZXRhLFxuICAgICAgICAkaW5zdGFuY2VWYWx1ZXMkOiBuZXcgTWFwKCksXG4gICAgfTtcbiAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgaG9zdFJlZi4kcmVuZGVyQ291bnQkID0gMDtcbiAgICB9XG4gICAgaWYgKEJVSUxELm1ldGhvZCAmJiBCVUlMRC5sYXp5TG9hZCkge1xuICAgICAgICBob3N0UmVmLiRvbkluc3RhbmNlUHJvbWlzZSQgPSBuZXcgUHJvbWlzZSgocikgPT4gKGhvc3RSZWYuJG9uSW5zdGFuY2VSZXNvbHZlJCA9IHIpKTtcbiAgICB9XG4gICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZykge1xuICAgICAgICBob3N0UmVmLiRvblJlYWR5UHJvbWlzZSQgPSBuZXcgUHJvbWlzZSgocikgPT4gKGhvc3RSZWYuJG9uUmVhZHlSZXNvbHZlJCA9IHIpKTtcbiAgICAgICAgZWxtWydzLXAnXSA9IFtdO1xuICAgICAgICBlbG1bJ3MtcmMnXSA9IFtdO1xuICAgIH1cbiAgICBhZGRIb3N0RXZlbnRMaXN0ZW5lcnMoZWxtLCBob3N0UmVmLCBjbXBNZXRhLiRsaXN0ZW5lcnMkLCBmYWxzZSk7XG4gICAgcmV0dXJuIGhvc3RSZWZzLnNldChlbG0sIGhvc3RSZWYpO1xufTtcbmNvbnN0IGlzTWVtYmVySW5FbGVtZW50ID0gKGVsbSwgbWVtYmVyTmFtZSkgPT4gbWVtYmVyTmFtZSBpbiBlbG07XG5jb25zdCBjb25zb2xlRXJyb3IgPSAoZSwgZWwpID0+IChjdXN0b21FcnJvciB8fCBjb25zb2xlLmVycm9yKShlLCBlbCk7XG5jb25zdCBTVEVOQ0lMX0RFVl9NT0RFID0gQlVJTEQuaXNUZXN0aW5nXG4gICAgPyBbJ1NURU5DSUw6J10gLy8gRTJFIHRlc3RpbmdcbiAgICA6IFtcbiAgICAgICAgJyVjc3RlbmNpbCcsXG4gICAgICAgICdjb2xvcjogd2hpdGU7YmFja2dyb3VuZDojNGM0N2ZmO2ZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6MTBweDsgcGFkZGluZzoycHggNnB4OyBib3JkZXItcmFkaXVzOiA1cHgnLFxuICAgIF07XG5jb25zdCBjb25zb2xlRGV2RXJyb3IgPSAoLi4ubSkgPT4gY29uc29sZS5lcnJvciguLi5TVEVOQ0lMX0RFVl9NT0RFLCAuLi5tKTtcbmNvbnN0IGNvbnNvbGVEZXZXYXJuID0gKC4uLm0pID0+IGNvbnNvbGUud2FybiguLi5TVEVOQ0lMX0RFVl9NT0RFLCAuLi5tKTtcbmNvbnN0IGNvbnNvbGVEZXZJbmZvID0gKC4uLm0pID0+IGNvbnNvbGUuaW5mbyguLi5TVEVOQ0lMX0RFVl9NT0RFLCAuLi5tKTtcbmNvbnN0IHNldEVycm9ySGFuZGxlciA9IChoYW5kbGVyKSA9PiAoY3VzdG9tRXJyb3IgPSBoYW5kbGVyKTtcbmNvbnN0IGNtcE1vZHVsZXMgPSAvKkBfX1BVUkVfXyovIG5ldyBNYXAoKTtcbmNvbnN0IGxvYWRNb2R1bGUgPSAoY21wTWV0YSwgaG9zdFJlZiwgaG1yVmVyc2lvbklkKSA9PiB7XG4gICAgLy8gbG9hZE1vZHVsZUltcG9ydFxuICAgIGNvbnN0IGV4cG9ydE5hbWUgPSBjbXBNZXRhLiR0YWdOYW1lJC5yZXBsYWNlKC8tL2csICdfJyk7XG4gICAgY29uc3QgYnVuZGxlSWQgPSBjbXBNZXRhLiRsYXp5QnVuZGxlSWQkO1xuICAgIGlmIChCVUlMRC5pc0RldiAmJiB0eXBlb2YgYnVuZGxlSWQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbnNvbGVEZXZFcnJvcihgVHJ5aW5nIHRvIGxhemlseSBsb2FkIGNvbXBvbmVudCA8JHtjbXBNZXRhLiR0YWdOYW1lJH0+IHdpdGggc3R5bGUgbW9kZSBcIiR7aG9zdFJlZi4kbW9kZU5hbWUkfVwiLCBidXQgaXQgZG9lcyBub3QgZXhpc3QuYCk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IG1vZHVsZSA9ICFCVUlMRC5ob3RNb2R1bGVSZXBsYWNlbWVudCA/IGNtcE1vZHVsZXMuZ2V0KGJ1bmRsZUlkKSA6IGZhbHNlO1xuICAgIGlmIChtb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZVtleHBvcnROYW1lXTtcbiAgICB9XG4gICAgLyohX19TVEVOQ0lMX1NUQVRJQ19JTVBPUlRfU1dJVENIX18qL1xuICAgIHJldHVybiBpbXBvcnQoXG4gICAgLyogQHZpdGUtaWdub3JlICovXG4gICAgLyogd2VicGFja0luY2x1ZGU6IC9cXC5lbnRyeVxcLmpzJC8gKi9cbiAgICAvKiB3ZWJwYWNrRXhjbHVkZTogL1xcLnN5c3RlbVxcLmVudHJ5XFwuanMkLyAqL1xuICAgIC8qIHdlYnBhY2tNb2RlOiBcImxhenlcIiAqL1xuICAgIGAuLyR7YnVuZGxlSWR9LmVudHJ5LmpzJHtCVUlMRC5ob3RNb2R1bGVSZXBsYWNlbWVudCAmJiBobXJWZXJzaW9uSWQgPyAnP3MtaG1yPScgKyBobXJWZXJzaW9uSWQgOiAnJ31gKS50aGVuKChpbXBvcnRlZE1vZHVsZSkgPT4ge1xuICAgICAgICBpZiAoIUJVSUxELmhvdE1vZHVsZVJlcGxhY2VtZW50KSB7XG4gICAgICAgICAgICBjbXBNb2R1bGVzLnNldChidW5kbGVJZCwgaW1wb3J0ZWRNb2R1bGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbXBvcnRlZE1vZHVsZVtleHBvcnROYW1lXTtcbiAgICB9LCBjb25zb2xlRXJyb3IpO1xufTtcbmNvbnN0IHN0eWxlcyA9IC8qQF9fUFVSRV9fKi8gbmV3IE1hcCgpO1xuY29uc3QgbW9kZVJlc29sdXRpb25DaGFpbiA9IFtdO1xuY29uc3Qgd2luID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB7fTtcbmNvbnN0IENTUyA9IEJVSUxELmNzc1ZhclNoaW0gPyB3aW4uQ1NTIDogbnVsbDtcbmNvbnN0IGRvYyA9IHdpbi5kb2N1bWVudCB8fCB7IGhlYWQ6IHt9IH07XG5jb25zdCBIID0gKHdpbi5IVE1MRWxlbWVudCB8fCBjbGFzcyB7XG59KTtcbmNvbnN0IHBsdCA9IHtcbiAgICAkZmxhZ3MkOiAwLFxuICAgICRyZXNvdXJjZXNVcmwkOiAnJyxcbiAgICBqbXA6IChoKSA9PiBoKCksXG4gICAgcmFmOiAoaCkgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGgpLFxuICAgIGFlbDogKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSA9PiBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpLFxuICAgIHJlbDogKGVsLCBldmVudE5hbWUsIGxpc3RlbmVyLCBvcHRzKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpLFxuICAgIGNlOiAoZXZlbnROYW1lLCBvcHRzKSA9PiBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCBvcHRzKSxcbn07XG5jb25zdCBzZXRQbGF0Zm9ybUhlbHBlcnMgPSAoaGVscGVycykgPT4ge1xuICAgIE9iamVjdC5hc3NpZ24ocGx0LCBoZWxwZXJzKTtcbn07XG5jb25zdCBzdXBwb3J0c1NoYWRvdyA9IEJVSUxELnNoYWRvd0RvbVNoaW0gJiYgQlVJTEQuc2hhZG93RG9tXG4gICAgPyAvKkBfX1BVUkVfXyovICgoKSA9PiAoZG9jLmhlYWQuYXR0YWNoU2hhZG93ICsgJycpLmluZGV4T2YoJ1tuYXRpdmUnKSA+IC0xKSgpXG4gICAgOiB0cnVlO1xuY29uc3Qgc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnMgPSAvKkBfX1BVUkVfXyovICgoKSA9PiB7XG4gICAgbGV0IHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2UnLCBudWxsLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdwYXNzaXZlJywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHsgfVxuICAgIHJldHVybiBzdXBwb3J0c0xpc3RlbmVyT3B0aW9ucztcbn0pKCk7XG5jb25zdCBwcm9taXNlUmVzb2x2ZSA9ICh2KSA9PiBQcm9taXNlLnJlc29sdmUodik7XG5jb25zdCBzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0cyA9IEJVSUxELmNvbnN0cnVjdGFibGVDU1NcbiAgICA/IC8qQF9fUFVSRV9fKi8gKCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ldyBDU1NTdHlsZVNoZWV0KCk7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIG5ldyBDU1NTdHlsZVNoZWV0KCkucmVwbGFjZVN5bmMgPT09ICdmdW5jdGlvbic7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSkoKVxuICAgIDogZmFsc2U7XG5jb25zdCBxdWV1ZURvbVJlYWRzID0gW107XG5jb25zdCBxdWV1ZURvbVdyaXRlcyA9IFtdO1xuY29uc3QgcXVldWVEb21Xcml0ZXNMb3cgPSBbXTtcbmNvbnN0IHF1ZXVlVGFzayA9IChxdWV1ZSwgd3JpdGUpID0+IChjYikgPT4ge1xuICAgIHF1ZXVlLnB1c2goY2IpO1xuICAgIGlmICghcXVldWVQZW5kaW5nKSB7XG4gICAgICAgIHF1ZXVlUGVuZGluZyA9IHRydWU7XG4gICAgICAgIGlmICh3cml0ZSAmJiBwbHQuJGZsYWdzJCAmIDQgLyogUExBVEZPUk1fRkxBR1MucXVldWVTeW5jICovKSB7XG4gICAgICAgICAgICBuZXh0VGljayhmbHVzaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwbHQucmFmKGZsdXNoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBjb25zdW1lID0gKHF1ZXVlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcXVldWVbaV0ocGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUubGVuZ3RoID0gMDtcbn07XG5jb25zdCBjb25zdW1lVGltZW91dCA9IChxdWV1ZSwgdGltZW91dCkgPT4ge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgdHMgPSAwO1xuICAgIHdoaWxlIChpIDwgcXVldWUubGVuZ3RoICYmICh0cyA9IHBlcmZvcm1hbmNlLm5vdygpKSA8IHRpbWVvdXQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHF1ZXVlW2krK10odHMpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGkgPT09IHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZS5sZW5ndGggPSAwO1xuICAgIH1cbiAgICBlbHNlIGlmIChpICE9PSAwKSB7XG4gICAgICAgIHF1ZXVlLnNwbGljZSgwLCBpKTtcbiAgICB9XG59O1xuY29uc3QgZmx1c2ggPSAoKSA9PiB7XG4gICAgaWYgKEJVSUxELmFzeW5jUXVldWUpIHtcbiAgICAgICAgcXVldWVDb25nZXN0aW9uKys7XG4gICAgfVxuICAgIC8vIGFsd2F5cyBmb3JjZSBhIGJ1bmNoIG9mIG1lZGl1bSBjYWxsYmFja3MgdG8gcnVuLCBidXQgc3RpbGwgaGF2ZVxuICAgIC8vIGEgdGhyb3R0bGUgb24gaG93IG1hbnkgY2FuIHJ1biBpbiBhIGNlcnRhaW4gdGltZVxuICAgIC8vIERPTSBSRUFEUyEhIVxuICAgIGNvbnN1bWUocXVldWVEb21SZWFkcyk7XG4gICAgLy8gRE9NIFdSSVRFUyEhIVxuICAgIGlmIChCVUlMRC5hc3luY1F1ZXVlKSB7XG4gICAgICAgIGNvbnN0IHRpbWVvdXQgPSAocGx0LiRmbGFncyQgJiA2IC8qIFBMQVRGT1JNX0ZMQUdTLnF1ZXVlTWFzayAqLykgPT09IDIgLyogUExBVEZPUk1fRkxBR1MuYXBwTG9hZGVkICovXG4gICAgICAgICAgICA/IHBlcmZvcm1hbmNlLm5vdygpICsgMTQgKiBNYXRoLmNlaWwocXVldWVDb25nZXN0aW9uICogKDEuMCAvIDEwLjApKVxuICAgICAgICAgICAgOiBJbmZpbml0eTtcbiAgICAgICAgY29uc3VtZVRpbWVvdXQocXVldWVEb21Xcml0ZXMsIHRpbWVvdXQpO1xuICAgICAgICBjb25zdW1lVGltZW91dChxdWV1ZURvbVdyaXRlc0xvdywgdGltZW91dCk7XG4gICAgICAgIGlmIChxdWV1ZURvbVdyaXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBxdWV1ZURvbVdyaXRlc0xvdy5wdXNoKC4uLnF1ZXVlRG9tV3JpdGVzKTtcbiAgICAgICAgICAgIHF1ZXVlRG9tV3JpdGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChxdWV1ZVBlbmRpbmcgPSBxdWV1ZURvbVJlYWRzLmxlbmd0aCArIHF1ZXVlRG9tV3JpdGVzLmxlbmd0aCArIHF1ZXVlRG9tV3JpdGVzTG93Lmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAvLyBzdGlsbCBtb3JlIHRvIGRvIHlldCwgYnV0IHdlJ3ZlIHJ1biBvdXQgb2YgdGltZVxuICAgICAgICAgICAgLy8gbGV0J3MgbGV0IHRoaXMgdGhpbmcgY29vbCBvZmYgYW5kIHRyeSBhZ2FpbiBpbiB0aGUgbmV4dCB0aWNrXG4gICAgICAgICAgICBwbHQucmFmKGZsdXNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHF1ZXVlQ29uZ2VzdGlvbiA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN1bWUocXVldWVEb21Xcml0ZXMpO1xuICAgICAgICBpZiAoKHF1ZXVlUGVuZGluZyA9IHF1ZXVlRG9tUmVhZHMubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIC8vIHN0aWxsIG1vcmUgdG8gZG8geWV0LCBidXQgd2UndmUgcnVuIG91dCBvZiB0aW1lXG4gICAgICAgICAgICAvLyBsZXQncyBsZXQgdGhpcyB0aGluZyBjb29sIG9mZiBhbmQgdHJ5IGFnYWluIGluIHRoZSBuZXh0IHRpY2tcbiAgICAgICAgICAgIHBsdC5yYWYoZmx1c2gpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IG5leHRUaWNrID0gLypAX19QVVJFX18qLyAoY2IpID0+IHByb21pc2VSZXNvbHZlKCkudGhlbihjYik7XG5jb25zdCByZWFkVGFzayA9IC8qQF9fUFVSRV9fKi8gcXVldWVUYXNrKHF1ZXVlRG9tUmVhZHMsIGZhbHNlKTtcbmNvbnN0IHdyaXRlVGFzayA9IC8qQF9fUFVSRV9fKi8gcXVldWVUYXNrKHF1ZXVlRG9tV3JpdGVzLCB0cnVlKTtcbmV4cG9ydCB7IEJVSUxELCBFbnYsIE5BTUVTUEFDRSB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvYXBwLWRhdGEnO1xuZXhwb3J0IHsgQnVpbGQsIENTUywgQ29udGV4dCwgRnJhZ21lbnQsIEgsIEggYXMgSFRNTEVsZW1lbnQsIEhvc3QsIFNURU5DSUxfREVWX01PREUsIGFkZEhvc3RFdmVudExpc3RlbmVycywgYm9vdHN0cmFwTGF6eSwgY21wTW9kdWxlcywgY29ubmVjdGVkQ2FsbGJhY2ssIGNvbnNvbGVEZXZFcnJvciwgY29uc29sZURldkluZm8sIGNvbnNvbGVEZXZXYXJuLCBjb25zb2xlRXJyb3IsIGNyZWF0ZUV2ZW50LCBkZWZpbmVDdXN0b21FbGVtZW50LCBkaXNjb25uZWN0ZWRDYWxsYmFjaywgZG9jLCBmb3JjZU1vZGVVcGRhdGUsIGZvcmNlVXBkYXRlLCBnZXRBc3NldFBhdGgsIGdldENvbm5lY3QsIGdldENvbnRleHQsIGdldEVsZW1lbnQsIGdldEhvc3RSZWYsIGdldE1vZGUsIGdldFJlbmRlcmluZ1JlZiwgZ2V0VmFsdWUsIGgsIGluc2VydFZkb21Bbm5vdGF0aW9ucywgaXNNZW1iZXJJbkVsZW1lbnQsIGxvYWRNb2R1bGUsIG1vZGVSZXNvbHV0aW9uQ2hhaW4sIG5leHRUaWNrLCBwYXJzZVByb3BlcnR5VmFsdWUsIHBsdCwgcG9zdFVwZGF0ZUNvbXBvbmVudCwgcHJvbWlzZVJlc29sdmUsIHByb3h5Q29tcG9uZW50LCBwcm94eUN1c3RvbUVsZW1lbnQsIHJlYWRUYXNrLCByZWdpc3Rlckhvc3QsIHJlZ2lzdGVySW5zdGFuY2UsIHJlbmRlclZkb20sIHNldEFzc2V0UGF0aCwgc2V0RXJyb3JIYW5kbGVyLCBzZXRNb2RlLCBzZXROb25jZSwgc2V0UGxhdGZvcm1IZWxwZXJzLCBzZXRQbGF0Zm9ybU9wdGlvbnMsIHNldFZhbHVlLCBzdHlsZXMsIHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXRzLCBzdXBwb3J0c0xpc3RlbmVyT3B0aW9ucywgc3VwcG9ydHNTaGFkb3csIHdpbiwgd3JpdGVUYXNrIH07XG4iLCJmdW5jdGlvbiB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQocmVxKSB7XG5cdC8vIEhlcmUgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigpIGlzIHVzZWQgaW5zdGVhZCBvZiBuZXcgUHJvbWlzZSgpIHRvIHByZXZlbnRcblx0Ly8gdW5jYXVnaHQgZXhjZXB0aW9uIHBvcHBpbmcgdXAgaW4gZGV2dG9vbHNcblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fSk7XG59XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQua2V5cyA9ICgpID0+IChbXSk7XG53ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQgbGF6eSByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuZW50cnlcXFxcLmpzLiokIGluY2x1ZGU6IFxcXFwuZW50cnlcXFxcLmpzJCBleGNsdWRlOiBcXFxcLnN5c3RlbVxcXFwuZW50cnlcXFxcLmpzJFwiO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcblxuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuXG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG5cbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSAtIHRoZSB2YWx1ZSB0byBjaGVja1xuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGEgZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKCkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZShOYU4pKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBzb21lIHZhbHVlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKCcyMDE0LTAyLTMxJylcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGFuIG9iamVjdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSh7fSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7IC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG5cbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0UmVsYXRpdmU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIGFyZ3VtZW50Q2FsbGJhY2socXVhcnRlcikge1xuICAgICAgcmV0dXJuIHF1YXJ0ZXIgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2sodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayhpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZihhcmd1bWVudCkgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNzdHJpbmctYXJndW1lbnRzXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHsgcHJveHlDdXN0b21FbGVtZW50LCBIVE1MRWxlbWVudCwgY3JlYXRlRXZlbnQsIGgsIEhvc3QgfSBmcm9tICdAc3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudCc7XG5cbmZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgZGF5cykge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIG5ld0RhdGUuc2V0RGF0ZShuZXdEYXRlLmdldERhdGUoKSArIGRheXMpO1xuICByZXR1cm4gbmV3RGF0ZTtcbn1cbmZ1bmN0aW9uIGdldERheXNPZk1vbnRoKGRhdGUsIHBhZGRlZCwgZmlyc3REYXlPZldlZWspIHtcbiAgY29uc3QgZGF5cyA9IFtdO1xuICBjb25zdCBmaXJzdE9mTW9udGggPSBnZXRGaXJzdE9mTW9udGgoZGF0ZSk7XG4gIGNvbnN0IGZpcnN0RGF5TW9udGggPSBmaXJzdE9mTW9udGguZ2V0RGF5KCkgPT09IDAgPyA3IDogZmlyc3RPZk1vbnRoLmdldERheSgpO1xuICBjb25zdCBsYXN0T2ZNb250aCA9IGdldExhc3RPZk1vbnRoKGRhdGUpO1xuICBjb25zdCBsYXN0RGF5T2ZNb250aCA9IGxhc3RPZk1vbnRoLmdldERheSgpID09PSAwID8gNyA6IGxhc3RPZk1vbnRoLmdldERheSgpO1xuICBjb25zdCBsYXN0RGF5T2ZXZWVrID0gZmlyc3REYXlPZldlZWsgPT09IDEgPyA3IDogZmlyc3REYXlPZldlZWsgLSAxO1xuICBjb25zdCBsZWZ0UGFkZGluZ0RheXMgPSBbXTtcbiAgY29uc3QgcmlnaHRQYWRkaW5nRGF5cyA9IFtdO1xuICBpZiAocGFkZGVkKSB7XG4gICAgY29uc3QgbGVmdFBhZGRpbmcgPSAoNyAtIGZpcnN0RGF5T2ZXZWVrICsgZmlyc3REYXlNb250aCkgJSA3O1xuICAgIGxldCBsZWZ0UGFkZGluZ0Ftb3VudCA9IGxlZnRQYWRkaW5nO1xuICAgIGxldCBsZWZ0UGFkZGluZ0RheSA9IGdldFByZXZpb3VzRGF5KGZpcnN0T2ZNb250aCk7XG4gICAgd2hpbGUgKGxlZnRQYWRkaW5nQW1vdW50ID4gMCkge1xuICAgICAgbGVmdFBhZGRpbmdEYXlzLnB1c2gobGVmdFBhZGRpbmdEYXkpO1xuICAgICAgbGVmdFBhZGRpbmdEYXkgPSBnZXRQcmV2aW91c0RheShsZWZ0UGFkZGluZ0RheSk7XG4gICAgICBsZWZ0UGFkZGluZ0Ftb3VudCAtPSAxO1xuICAgIH1cbiAgICBsZWZ0UGFkZGluZ0RheXMucmV2ZXJzZSgpO1xuICAgIGNvbnN0IHJpZ2h0UGFkZGluZyA9ICg3IC0gbGFzdERheU9mTW9udGggKyBsYXN0RGF5T2ZXZWVrKSAlIDc7XG4gICAgbGV0IHJpZ2h0UGFkZGluZ0Ftb3VudCA9IHJpZ2h0UGFkZGluZztcbiAgICBsZXQgcmlnaHRQYWRkaW5nRGF5ID0gZ2V0TmV4dERheShsYXN0T2ZNb250aCk7XG4gICAgd2hpbGUgKHJpZ2h0UGFkZGluZ0Ftb3VudCA+IDApIHtcbiAgICAgIHJpZ2h0UGFkZGluZ0RheXMucHVzaChyaWdodFBhZGRpbmdEYXkpO1xuICAgICAgcmlnaHRQYWRkaW5nRGF5ID0gZ2V0TmV4dERheShyaWdodFBhZGRpbmdEYXkpO1xuICAgICAgcmlnaHRQYWRkaW5nQW1vdW50IC09IDE7XG4gICAgfVxuICB9XG4gIGxldCBjdXJyZW50RGF5ID0gZmlyc3RPZk1vbnRoO1xuICB3aGlsZSAoY3VycmVudERheS5nZXRNb250aCgpID09PSBkYXRlLmdldE1vbnRoKCkpIHtcbiAgICBkYXlzLnB1c2goY3VycmVudERheSk7XG4gICAgY3VycmVudERheSA9IGdldE5leHREYXkoY3VycmVudERheSk7XG4gIH1cbiAgcmV0dXJuIFsuLi5sZWZ0UGFkZGluZ0RheXMsIC4uLmRheXMsIC4uLnJpZ2h0UGFkZGluZ0RheXNdO1xufVxuZnVuY3Rpb24gZ2V0Rmlyc3RPZk1vbnRoKGRhdGUpIHtcbiAgY29uc3QgZmlyc3RPZk1vbnRoID0gcmVtb3ZlVGltZXpvbmVPZmZzZXQobmV3IERhdGUoYCR7U3RyaW5nKGdldFllYXIoZGF0ZSkpLnBhZFN0YXJ0KDQsICcwJyl9LSR7U3RyaW5nKGdldE1vbnRoKGRhdGUpKS5wYWRTdGFydCgyLCAnMCcpfS0wMWApKTtcbiAgcmV0dXJuIGZpcnN0T2ZNb250aDtcbn1cbmZ1bmN0aW9uIGdldElTT0RhdGVTdHJpbmcoZGF0ZSkge1xuICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtTdHJpbmcoZGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKX0tJHtTdHJpbmcoZGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyl9YDtcbn1cbmZ1bmN0aW9uIGdldExhc3RPZk1vbnRoKGRhdGUpIHtcbiAgY29uc3QgbmV3RGF0ZSA9IGdldEZpcnN0T2ZNb250aChkYXRlKTtcbiAgbmV3RGF0ZS5zZXRNb250aChuZXdEYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgbmV3RGF0ZS5zZXREYXRlKG5ld0RhdGUuZ2V0RGF0ZSgpIC0gMSk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuZnVuY3Rpb24gZ2V0TW9udGgoZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRNb250aCgpICsgMTtcbn1cbmZ1bmN0aW9uIGdldE1vbnRocyhsb2NhbGUpIHtcbiAgcmV0dXJuIG5ldyBBcnJheSgxMikuZmlsbCh1bmRlZmluZWQpLm1hcCgoXywgbW9udGgpID0+IHtcbiAgICBjb25zdCBkYXRlID0gcmVtb3ZlVGltZXpvbmVPZmZzZXQobmV3IERhdGUoYDIwMDYtJHtTdHJpbmcobW9udGggKyAxKS5wYWRTdGFydCgyLCAnMCcpfS0wMWApKTtcbiAgICByZXR1cm4gSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICAgIG1vbnRoOiAnbG9uZydcbiAgICB9KS5mb3JtYXQoZGF0ZSk7XG4gIH0pO1xufVxuZnVuY3Rpb24gZ2V0TmV4dERheShkYXRlKSB7XG4gIHJldHVybiBhZGREYXlzKGRhdGUsIDEpO1xufVxuZnVuY3Rpb24gZ2V0TmV4dE1vbnRoKGRhdGUpIHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBuZXdEYXRlLnNldE1vbnRoKG5ld0RhdGUuZ2V0TW9udGgoKSArIDEpO1xuICByZXR1cm4gbmV3RGF0ZTtcbn1cbmZ1bmN0aW9uIGdldE5leHRZZWFyKGRhdGUpIHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBuZXdEYXRlLnNldEZ1bGxZZWFyKG5ld0RhdGUuZ2V0RnVsbFllYXIoKSArIDEpO1xuICByZXR1cm4gbmV3RGF0ZTtcbn1cbmZ1bmN0aW9uIGdldFByZXZpb3VzRGF5KGRhdGUpIHtcbiAgcmV0dXJuIHN1YkRheXMoZGF0ZSwgMSk7XG59XG5mdW5jdGlvbiBnZXRQcmV2aW91c01vbnRoKGRhdGUpIHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBuZXdEYXRlLnNldE1vbnRoKG5ld0RhdGUuZ2V0TW9udGgoKSAtIDEpO1xuICByZXR1cm4gbmV3RGF0ZTtcbn1cbmZ1bmN0aW9uIGdldFByZXZpb3VzWWVhcihkYXRlKSB7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV3RGF0ZS5zZXRGdWxsWWVhcihuZXdEYXRlLmdldEZ1bGxZZWFyKCkgLSAxKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59XG5mdW5jdGlvbiBnZXRXZWVrRGF5cyhmaXJzdERheU9mV2VlaywgbG9jYWxlKSB7XG4gIHJldHVybiBuZXcgQXJyYXkoNylcbiAgICAuZmlsbCh1bmRlZmluZWQpXG4gICAgLm1hcCgoXywgaW5kZXgpID0+ICgoZmlyc3REYXlPZldlZWsgKyBpbmRleCkgJSA3KSArIDEpXG4gICAgLm1hcCgoZGF5KSA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IHJlbW92ZVRpbWV6b25lT2Zmc2V0KG5ldyBEYXRlKGAyMDA2LTAxLTAke2RheX1gKSk7XG4gICAgcmV0dXJuIFtcbiAgICAgIEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgICAgIHdlZWtkYXk6ICdzaG9ydCdcbiAgICAgIH0pLmZvcm1hdChkYXRlKSxcbiAgICAgIEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgICAgIHdlZWtkYXk6ICdsb25nJ1xuICAgICAgfSkuZm9ybWF0KGRhdGUpXG4gICAgXTtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXRZZWFyKGRhdGUpIHtcbiAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTtcbn1cbmZ1bmN0aW9uIGlzRGF0ZUluUmFuZ2UoZGF0ZSwgcmFuZ2UpIHtcbiAgaWYgKCFkYXRlIHx8ICFyYW5nZSB8fCAhcmFuZ2UuZnJvbSB8fCAhcmFuZ2UudG8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgY29uc3QgZWFybHlEYXRlID0gcmFuZ2UuZnJvbSA8IHJhbmdlLnRvID8gcmFuZ2UuZnJvbSA6IHJhbmdlLnRvO1xuICBjb25zdCBsYXRlckRhdGUgPSByYW5nZS5mcm9tIDwgcmFuZ2UudG8gPyByYW5nZS50byA6IHJhbmdlLmZyb207XG4gIHJldHVybiBkYXRlID49IGVhcmx5RGF0ZSAmJiBkYXRlIDw9IGxhdGVyRGF0ZTtcbn1cbmZ1bmN0aW9uIGlzU2FtZURheShkYXRlMSwgZGF0ZTIpIHtcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChkYXRlMS5nZXRGdWxsWWVhcigpID09PSBkYXRlMi5nZXRGdWxsWWVhcigpICYmXG4gICAgZGF0ZTEuZ2V0TW9udGgoKSA9PT0gZGF0ZTIuZ2V0TW9udGgoKSAmJlxuICAgIGRhdGUxLmdldERhdGUoKSA9PT0gZGF0ZTIuZ2V0RGF0ZSgpKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVRpbWV6b25lT2Zmc2V0KGRhdGUpIHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBuZXdEYXRlLnNldE1pbnV0ZXMobmV3RGF0ZS5nZXRNaW51dGVzKCkgKyBuZXdEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuICByZXR1cm4gbmV3RGF0ZTtcbn1cbmZ1bmN0aW9uIHN1YkRheXMoZGF0ZSwgZGF5cykge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIG5ld0RhdGUuc2V0RGF0ZShuZXdEYXRlLmdldERhdGUoKSAtIGRheXMpO1xuICByZXR1cm4gbmV3RGF0ZTtcbn1cblxuY29uc3Qgd2NEYXRlcGlja2VyQ3NzID0gXCIudmlzdWFsbHktaGlkZGVuLnNjLXdjLWRhdGVwaWNrZXJ7cG9zaXRpb246YWJzb2x1dGU7b3ZlcmZsb3c6aGlkZGVuO3dpZHRoOjFweDtoZWlnaHQ6MXB4O3doaXRlLXNwYWNlOm5vd3JhcDtjbGlwOnJlY3QoMCAwIDAgMCk7LXdlYmtpdC1jbGlwLXBhdGg6aW5zZXQoNTAlKTtjbGlwLXBhdGg6aW5zZXQoNTAlKX1cIjtcblxuY29uc3QgZGVmYXVsdExhYmVscyA9IHtcbiAgY2xlYXJCdXR0b246ICdDbGVhciB2YWx1ZScsXG4gIG1vbnRoU2VsZWN0OiAnU2VsZWN0IG1vbnRoJyxcbiAgbmV4dE1vbnRoQnV0dG9uOiAnTmV4dCBtb250aCcsXG4gIG5leHRZZWFyQnV0dG9uOiAnTmV4dCB5ZWFyJyxcbiAgcGlja2VyOiAnQ2hvb3NlIGRhdGUnLFxuICBwcmV2aW91c01vbnRoQnV0dG9uOiAnUHJldmlvdXMgbW9udGgnLFxuICBwcmV2aW91c1llYXJCdXR0b246ICdQcmV2aW91cyB5ZWFyJyxcbiAgdG9kYXlCdXR0b246ICdTaG93IHRvZGF5JyxcbiAgeWVhclNlbGVjdDogJ1NlbGVjdCB5ZWFyJ1xufTtcbmNvbnN0IFdDRGF0ZXBpY2tlciA9IC8qQF9fUFVSRV9fKi8gcHJveHlDdXN0b21FbGVtZW50KGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX19yZWdpc3Rlckhvc3QoKTtcbiAgICB0aGlzLnNlbGVjdERhdGUgPSBjcmVhdGVFdmVudCh0aGlzLCBcInNlbGVjdERhdGVcIiwgNyk7XG4gICAgdGhpcy5jaGFuZ2VNb250aCA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwiY2hhbmdlTW9udGhcIiwgNyk7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMuZGlzYWJsZURhdGUgPSAoKSA9PiBmYWxzZTtcbiAgICB0aGlzLmVsZW1lbnRDbGFzc05hbWUgPSAnd2MtZGF0ZXBpY2tlcic7XG4gICAgdGhpcy5maXJzdERheU9mV2VlayA9IDA7XG4gICAgdGhpcy5sYWJlbHMgPSBkZWZhdWx0TGFiZWxzO1xuICAgIHRoaXMubG9jYWxlID0gKG5hdmlnYXRvciA9PT0gbnVsbCB8fCBuYXZpZ2F0b3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG5hdmlnYXRvci5sYW5ndWFnZSkgfHwgJ2VuLVVTJztcbiAgICB0aGlzLnNob3dDbGVhckJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd01vbnRoU3RlcHBlciA9IHRydWU7XG4gICAgdGhpcy5zaG93VG9kYXlCdXR0b24gPSBmYWxzZTtcbiAgICB0aGlzLnNob3dZZWFyU3RlcHBlciA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnREYXRlID0gZ2V0SVNPRGF0ZVN0cmluZyhuZXcgRGF0ZSgpKTtcbiAgICB0aGlzLmluaXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnREYXRlID0gdGhpcy5zdGFydERhdGVcbiAgICAgICAgPyByZW1vdmVUaW1lem9uZU9mZnNldChuZXcgRGF0ZSh0aGlzLnN0YXJ0RGF0ZSkpXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICAgIHRoaXMudXBkYXRlV2Vla2RheXMoKTtcbiAgICB9O1xuICAgIHRoaXMubmV4dE1vbnRoID0gKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXROZXh0TW9udGgodGhpcy5jdXJyZW50RGF0ZSkpO1xuICAgIH07XG4gICAgdGhpcy5uZXh0WWVhciA9ICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZ2V0TmV4dFllYXIodGhpcy5jdXJyZW50RGF0ZSkpO1xuICAgIH07XG4gICAgdGhpcy5wcmV2aW91c01vbnRoID0gKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXRQcmV2aW91c01vbnRoKHRoaXMuY3VycmVudERhdGUpKTtcbiAgICB9O1xuICAgIHRoaXMucHJldmlvdXNZZWFyID0gKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXRQcmV2aW91c1llYXIodGhpcy5jdXJyZW50RGF0ZSkpO1xuICAgIH07XG4gICAgdGhpcy5zaG93VG9kYXkgPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKG5ldyBEYXRlKCkpO1xuICAgIH07XG4gICAgdGhpcy5jbGVhciA9ICgpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLnNlbGVjdERhdGUuZW1pdCh1bmRlZmluZWQpO1xuICAgIH07XG4gICAgdGhpcy5vbkNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnW2RhdGEtZGF0ZV0nKTtcbiAgICAgIGlmICghQm9vbGVhbih0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGUgPSByZW1vdmVUaW1lem9uZU9mZnNldChuZXcgRGF0ZSh0YXJnZXQuZGF0YXNldC5kYXRlKSk7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGRhdGUpO1xuICAgICAgdGhpcy5vblNlbGVjdERhdGUoZGF0ZSk7XG4gICAgfTtcbiAgICB0aGlzLm9uTW9udGhTZWxlY3QgPSAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IG1vbnRoID0gK2V2ZW50LnRhcmdldC52YWx1ZSAtIDE7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICBkYXRlLnNldE1vbnRoKG1vbnRoKTtcbiAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZGF0ZSk7XG4gICAgfTtcbiAgICB0aGlzLm9uWWVhclNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgICAgbGV0IHllYXIgPSArZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQ7XG4gICAgICBpZiAoaXNOYU4oeWVhcikpIHtcbiAgICAgICAgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBTdHJpbmcoeWVhcik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh5ZWFyIDwgMCkge1xuICAgICAgICB5ZWFyID0gMDtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBTdHJpbmcoeWVhcik7XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh5ZWFyID4gOTk5OSkge1xuICAgICAgICB5ZWFyID0gOTk5OTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBTdHJpbmcoeWVhcik7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICBkYXRlLnNldEZ1bGxZZWFyKHllYXIpO1xuICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShkYXRlKTtcbiAgICB9O1xuICAgIHRoaXMub25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXRQcmV2aW91c0RheSh0aGlzLmN1cnJlbnREYXRlKSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXROZXh0RGF5KHRoaXMuY3VycmVudERhdGUpLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1VwJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKHN1YkRheXModGhpcy5jdXJyZW50RGF0ZSwgNyksIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShhZGREYXlzKHRoaXMuY3VycmVudERhdGUsIDcpLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdQYWdlVXAnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZ2V0UHJldmlvdXNZZWFyKHRoaXMuY3VycmVudERhdGUpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldFByZXZpb3VzTW9udGgodGhpcy5jdXJyZW50RGF0ZSksIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5jb2RlID09PSAnUGFnZURvd24nKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZ2V0TmV4dFllYXIodGhpcy5jdXJyZW50RGF0ZSksIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZ2V0TmV4dE1vbnRoKHRoaXMuY3VycmVudERhdGUpLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ0hvbWUnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZ2V0Rmlyc3RPZk1vbnRoKHRoaXMuY3VycmVudERhdGUpLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdFbmQnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZ2V0TGFzdE9mTW9udGgodGhpcy5jdXJyZW50RGF0ZSksIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ1NwYWNlJyB8fCBldmVudC5jb2RlID09PSAnRW50ZXInKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMub25TZWxlY3REYXRlKHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5vbk1vdXNlRW50ZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGUgPSByZW1vdmVUaW1lem9uZU9mZnNldChuZXcgRGF0ZShldmVudC50YXJnZXQuY2xvc2VzdCgndGQnKS5kYXRhc2V0LmRhdGUpKTtcbiAgICAgIHRoaXMuaG92ZXJlZERhdGUgPSBkYXRlO1xuICAgIH07XG4gICAgdGhpcy5vbk1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgICB0aGlzLmhvdmVyZWREYXRlID0gdW5kZWZpbmVkO1xuICAgIH07XG4gIH1cbiAgY29tcG9uZW50V2lsbExvYWQoKSB7XG4gICAgdGhpcy5pbml0KCk7XG4gIH1cbiAgd2F0Y2hGaXJzdERheU9mV2VlaygpIHtcbiAgICB0aGlzLnVwZGF0ZVdlZWtkYXlzKCk7XG4gIH1cbiAgd2F0Y2hMb2NhbGUoKSB7XG4gICAgaWYgKCFCb29sZWFuKHRoaXMubG9jYWxlKSkge1xuICAgICAgdGhpcy5sb2NhbGUgPSAobmF2aWdhdG9yID09PSBudWxsIHx8IG5hdmlnYXRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2aWdhdG9yLmxhbmd1YWdlKSB8fCAnZW4tVVMnO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVdlZWtkYXlzKCk7XG4gIH1cbiAgd2F0Y2hSYW5nZSgpIHtcbiAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHVuZGVmaW5lZCk7XG4gIH1cbiAgd2F0Y2hTdGFydERhdGUoKSB7XG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IHRoaXMuc3RhcnREYXRlXG4gICAgICA/IHJlbW92ZVRpbWV6b25lT2Zmc2V0KG5ldyBEYXRlKHRoaXMuc3RhcnREYXRlKSlcbiAgICAgIDogbmV3IERhdGUoKTtcbiAgfVxuICB3YXRjaFZhbHVlKCkge1xuICAgIGlmIChCb29sZWFuKHRoaXMudmFsdWUpKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSAmJiB0aGlzLnZhbHVlLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIHRoaXMuY3VycmVudERhdGUgPSB0aGlzLnZhbHVlWzBdO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy52YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IHRoaXMudmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZFJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5tb3ZlRm9jdXNBZnRlck1vbnRoQ2hhbmdlZCkge1xuICAgICAgdGhpcy5mb2N1c0RhdGUodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICB0aGlzLm1vdmVGb2N1c0FmdGVyTW9udGhDaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHVwZGF0ZVdlZWtkYXlzKCkge1xuICAgIHRoaXMud2Vla2RheXMgPSBnZXRXZWVrRGF5cyh0aGlzLmZpcnN0RGF5T2ZXZWVrID09PSAwID8gNyA6IHRoaXMuZmlyc3REYXlPZldlZWssIHRoaXMubG9jYWxlKTtcbiAgfVxuICBnZXRDbGFzc05hbWUoZWxlbWVudCkge1xuICAgIHJldHVybiBCb29sZWFuKGVsZW1lbnQpXG4gICAgICA/IGAke3RoaXMuZWxlbWVudENsYXNzTmFtZX1fXyR7ZWxlbWVudH1gXG4gICAgICA6IHRoaXMuZWxlbWVudENsYXNzTmFtZTtcbiAgfVxuICBnZXRDYWxlbmRhclJvd3MoKSB7XG4gICAgY29uc3QgZGF5c09mTW9udGggPSBnZXREYXlzT2ZNb250aCh0aGlzLmN1cnJlbnREYXRlLCB0cnVlLCB0aGlzLmZpcnN0RGF5T2ZXZWVrID09PSAwID8gNyA6IHRoaXMuZmlyc3REYXlPZldlZWspO1xuICAgIGNvbnN0IGNhbGVuZGFyUm93cyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5c09mTW9udGgubGVuZ3RoOyBpICs9IDcpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRheXNPZk1vbnRoLnNsaWNlKGksIGkgKyA3KTtcbiAgICAgIGNhbGVuZGFyUm93cy5wdXNoKHJvdyk7XG4gICAgfVxuICAgIHJldHVybiBjYWxlbmRhclJvd3M7XG4gIH1cbiAgZ2V0VGl0bGUoKSB7XG4gICAgaWYgKCFCb29sZWFuKHRoaXMuY3VycmVudERhdGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMubG9jYWxlLCB7XG4gICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICB5ZWFyOiAnbnVtZXJpYydcbiAgICB9KS5mb3JtYXQodGhpcy5jdXJyZW50RGF0ZSk7XG4gIH1cbiAgZm9jdXNEYXRlKGRhdGUpIHtcbiAgICB2YXIgX2E7XG4gICAgKF9hID0gdGhpcy5lbFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRhdGU9XCIke2dldElTT0RhdGVTdHJpbmcoZGF0ZSl9XCJdYCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICB9XG4gIHVwZGF0ZUN1cnJlbnREYXRlKGRhdGUsIG1vdmVGb2N1cykge1xuICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgaWYgKHllYXIgPiA5OTk5IHx8IHllYXIgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1vbnRoQ2hhbmdlZCA9IG1vbnRoICE9PSB0aGlzLmN1cnJlbnREYXRlLmdldE1vbnRoKCkgfHxcbiAgICAgIHllYXIgIT09IHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBpZiAobW9udGhDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNoYW5nZU1vbnRoLmVtaXQoeyBtb250aDogZ2V0TW9udGgoZGF0ZSksIHllYXI6IGdldFllYXIoZGF0ZSkgfSk7XG4gICAgICBpZiAobW92ZUZvY3VzKSB7XG4gICAgICAgIHRoaXMubW92ZUZvY3VzQWZ0ZXJNb250aENoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmN1cnJlbnREYXRlID0gZGF0ZTtcbiAgICBpZiAobW92ZUZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzRGF0ZSh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICB9XG4gIH1cbiAgb25TZWxlY3REYXRlKGRhdGUpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIGlmICh0aGlzLmRpc2FibGVEYXRlKGRhdGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzUmFuZ2VWYWx1ZSh0aGlzLnZhbHVlKSkge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSAoKF9hID0gdGhpcy52YWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hWzBdKSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMudmFsdWUubGVuZ3RoID09PSAyXG4gICAgICAgID8gW2RhdGVdXG4gICAgICAgIDogW3RoaXMudmFsdWVbMF0sIGRhdGVdO1xuICAgICAgaWYgKG5ld1ZhbHVlLmxlbmd0aCA9PT0gMiAmJiBuZXdWYWx1ZVswXSA+IG5ld1ZhbHVlWzFdKSB7XG4gICAgICAgIG5ld1ZhbHVlLnJldmVyc2UoKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzb1ZhbHVlID0gbmV3VmFsdWVbMV0gPT09IHVuZGVmaW5lZFxuICAgICAgICA/IFtnZXRJU09EYXRlU3RyaW5nKG5ld1ZhbHVlWzBdKV1cbiAgICAgICAgOiBbZ2V0SVNPRGF0ZVN0cmluZyhuZXdWYWx1ZVswXSksIGdldElTT0RhdGVTdHJpbmcobmV3VmFsdWVbMV0pXTtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KGlzb1ZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAoKChfYiA9IHRoaXMudmFsdWUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZXRUaW1lKCkpID09PSBkYXRlLmdldFRpbWUoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnZhbHVlID0gZGF0ZTtcbiAgICAgIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KGdldElTT0RhdGVTdHJpbmcoZGF0ZSkpO1xuICAgIH1cbiAgfVxuICAvLyBAdHMtaWdub3JlXG4gIGlzUmFuZ2VWYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLnJhbmdlO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzaG93Rm9vdGVyID0gdGhpcy5zaG93VG9kYXlCdXR0b24gfHwgdGhpcy5zaG93Q2xlYXJCdXR0b247XG4gICAgcmV0dXJuIChoKEhvc3QsIG51bGwsIGgoXCJkaXZcIiwgeyBcImFyaWEtZGlzYWJsZWRcIjogU3RyaW5nKHRoaXMuZGlzYWJsZWQpLCBcImFyaWEtbGFiZWxcIjogdGhpcy5sYWJlbHMucGlja2VyLCBjbGFzczoge1xuICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoKV06IHRydWUsXG4gICAgICAgIFtgJHt0aGlzLmdldENsYXNzTmFtZSgpfS0tZGlzYWJsZWRgXTogdGhpcy5kaXNhYmxlZFxuICAgICAgfSwgcm9sZTogXCJncm91cFwiIH0sIGgoXCJkaXZcIiwgeyBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ2hlYWRlcicpIH0sIGgoXCJzcGFuXCIsIHsgXCJhcmlhLWF0b21pY1wiOiBcInRydWVcIiwgXCJhcmlhLWxpdmVcIjogXCJwb2xpdGVcIiwgY2xhc3M6IFwidmlzdWFsbHktaGlkZGVuXCIgfSwgdGhpcy5nZXRUaXRsZSgpKSwgdGhpcy5zaG93WWVhclN0ZXBwZXIgJiYgKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5sYWJlbHMucHJldmlvdXNZZWFyQnV0dG9uLCBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ3ByZXZpb3VzLXllYXItYnV0dG9uJyksIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBpbm5lckhUTUw6IHRoaXMucHJldmlvdXNZZWFyQnV0dG9uQ29udGVudCB8fCB1bmRlZmluZWQsIG9uQ2xpY2s6IHRoaXMucHJldmlvdXNZZWFyLCB0eXBlOiBcImJ1dHRvblwiIH0sIGgoXCJzdmdcIiwgeyBmaWxsOiBcIm5vbmVcIiwgaGVpZ2h0OiBcIjI0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIjogXCJyb3VuZFwiLCBcInN0cm9rZS1saW5lam9pblwiOiBcInJvdW5kXCIsIFwic3Ryb2tlLXdpZHRoXCI6IFwiMlwiLCBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsIHdpZHRoOiBcIjI0XCIgfSwgaChcInBvbHlsaW5lXCIsIHsgcG9pbnRzOiBcIjExIDE3IDYgMTIgMTEgN1wiIH0pLCBoKFwicG9seWxpbmVcIiwgeyBwb2ludHM6IFwiMTggMTcgMTMgMTIgMTggN1wiIH0pKSkpLCB0aGlzLnNob3dNb250aFN0ZXBwZXIgJiYgKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5sYWJlbHMucHJldmlvdXNNb250aEJ1dHRvbiwgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCdwcmV2aW91cy1tb250aC1idXR0b24nKSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIGlubmVySFRNTDogdGhpcy5wcmV2aW91c01vbnRoQnV0dG9uQ29udGVudCB8fCB1bmRlZmluZWQsIG9uQ2xpY2s6IHRoaXMucHJldmlvdXNNb250aCwgdHlwZTogXCJidXR0b25cIiB9LCBoKFwic3ZnXCIsIHsgZmlsbDogXCJub25lXCIsIGhlaWdodDogXCIyNFwiLCBcInN0cm9rZS1saW5lY2FwXCI6IFwicm91bmRcIiwgXCJzdHJva2UtbGluZWpvaW5cIjogXCJyb3VuZFwiLCBcInN0cm9rZS13aWR0aFwiOiBcIjJcIiwgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCB3aWR0aDogXCIyNFwiIH0sIGgoXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCIxNSAxOCA5IDEyIDE1IDZcIiB9KSkpKSwgaChcInNwYW5cIiwgeyBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ2N1cnJlbnQtbW9udGgnKSB9LCBoKFwic2VsZWN0XCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWxzLm1vbnRoU2VsZWN0LCBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ21vbnRoLXNlbGVjdCcpLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgbmFtZTogXCJtb250aFwiLCBvbkNoYW5nZTogdGhpcy5vbk1vbnRoU2VsZWN0IH0sIGdldE1vbnRocyh0aGlzLmxvY2FsZSkubWFwKChtb250aCwgaW5kZXgpID0+IChoKFwib3B0aW9uXCIsIHsga2V5OiBtb250aCwgc2VsZWN0ZWQ6IHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSA9PT0gaW5kZXgsIHZhbHVlOiBpbmRleCArIDEgfSwgbW9udGgpKSkpLCBoKFwiaW5wdXRcIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5sYWJlbHMueWVhclNlbGVjdCwgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCd5ZWFyLXNlbGVjdCcpLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgbWF4OiA5OTk5LCBtYXhMZW5ndGg6IDQsIG1pbjogMSwgbmFtZTogXCJ5ZWFyXCIsIG9uQ2hhbmdlOiB0aGlzLm9uWWVhclNlbGVjdCwgdHlwZTogXCJudW1iZXJcIiwgdmFsdWU6IHRoaXMuY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSB9KSksIHRoaXMuc2hvd01vbnRoU3RlcHBlciAmJiAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVscy5uZXh0TW9udGhCdXR0b24sIGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnbmV4dC1tb250aC1idXR0b24nKSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIGlubmVySFRNTDogdGhpcy5uZXh0TW9udGhCdXR0b25Db250ZW50IHx8IHVuZGVmaW5lZCwgb25DbGljazogdGhpcy5uZXh0TW9udGgsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcInN2Z1wiLCB7IGZpbGw6IFwibm9uZVwiLCBoZWlnaHQ6IFwiMjRcIiwgXCJzdHJva2UtbGluZWNhcFwiOiBcInJvdW5kXCIsIFwic3Ryb2tlLWxpbmVqb2luXCI6IFwicm91bmRcIiwgXCJzdHJva2Utd2lkdGhcIjogXCIyXCIsIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIiwgdmlld0JveDogXCIwIDAgMjQgMjRcIiwgd2lkdGg6IFwiMjRcIiB9LCBoKFwicG9seWxpbmVcIiwgeyBwb2ludHM6IFwiOSAxOCAxNSAxMiA5IDZcIiB9KSkpKSwgdGhpcy5zaG93WWVhclN0ZXBwZXIgJiYgKGgoXCJidXR0b25cIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5sYWJlbHMubmV4dFllYXJCdXR0b24sIGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnbmV4dC15ZWFyLWJ1dHRvbicpLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgaW5uZXJIVE1MOiB0aGlzLm5leHRZZWFyQnV0dG9uQ29udGVudCB8fCB1bmRlZmluZWQsIG9uQ2xpY2s6IHRoaXMubmV4dFllYXIsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcInN2Z1wiLCB7IGZpbGw6IFwibm9uZVwiLCBoZWlnaHQ6IFwiMjRcIiwgXCJzdHJva2UtbGluZWNhcFwiOiBcInJvdW5kXCIsIFwic3Ryb2tlLWxpbmVqb2luXCI6IFwicm91bmRcIiwgXCJzdHJva2Utd2lkdGhcIjogXCIyXCIsIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIiwgdmlld0JveDogXCIwIDAgMjQgMjRcIiwgd2lkdGg6IFwiMjRcIiB9LCBoKFwicG9seWxpbmVcIiwgeyBwb2ludHM6IFwiMTMgMTcgMTggMTIgMTMgN1wiIH0pLCBoKFwicG9seWxpbmVcIiwgeyBwb2ludHM6IFwiNiAxNyAxMSAxMiA2IDdcIiB9KSkpKSksIGgoXCJkaXZcIiwgeyBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ2JvZHknKSB9LCBoKFwidGFibGVcIiwgeyBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ2NhbGVuZGFyJyksIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sIHJvbGU6IFwiZ3JpZFwiIH0sIGgoXCJ0aGVhZFwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnY2FsZW5kYXItaGVhZGVyJykgfSwgaChcInRyXCIsIHsgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCd3ZWVrZGF5LXJvdycpIH0sIHRoaXMud2Vla2RheXMubWFwKCh3ZWVrZGF5KSA9PiAoaChcInRoXCIsIHsgYWJicjogd2Vla2RheVsxXSwgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCd3ZWVrZGF5JyksIGtleTogd2Vla2RheVswXSwgc2NvcGU6IFwiY29sXCIgfSwgaChcInNwYW5cIiwgbnVsbCwgd2Vla2RheVswXSkpKSkpKSwgaChcInRib2R5XCIsIG51bGwsIHRoaXMuZ2V0Q2FsZW5kYXJSb3dzKCkubWFwKChjYWxlbmRhclJvdykgPT4ge1xuICAgICAgY29uc3Qgcm93S2V5ID0gYHJvdy0ke2NhbGVuZGFyUm93WzBdLmdldE1vbnRoKCl9LSR7Y2FsZW5kYXJSb3dbMF0uZ2V0RGF0ZSgpfWA7XG4gICAgICByZXR1cm4gKGgoXCJ0clwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnY2FsZW5kYXItcm93JyksIGtleTogcm93S2V5IH0sIGNhbGVuZGFyUm93Lm1hcCgoZGF5KSA9PiB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG4gICAgICAgIGNvbnN0IGlzQ3VycmVudCA9IGlzU2FtZURheShkYXksIHRoaXMuY3VycmVudERhdGUpO1xuICAgICAgICBjb25zdCBpc092ZXJmbG93aW5nID0gZGF5LmdldE1vbnRoKCkgIT09IHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKTtcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSlcbiAgICAgICAgICA/IGlzU2FtZURheShkYXksIHRoaXMudmFsdWVbMF0pIHx8XG4gICAgICAgICAgICBpc1NhbWVEYXkoZGF5LCB0aGlzLnZhbHVlWzFdKVxuICAgICAgICAgIDogaXNTYW1lRGF5KGRheSwgdGhpcy52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGlzSW5SYW5nZSA9ICF0aGlzLmlzUmFuZ2VWYWx1ZVxuICAgICAgICAgID8gZmFsc2VcbiAgICAgICAgICA6IGlzRGF0ZUluUmFuZ2UoZGF5LCB7XG4gICAgICAgICAgICBmcm9tOiAoX2EgPSB0aGlzLnZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF0sXG4gICAgICAgICAgICB0bzogKChfYiA9IHRoaXMudmFsdWUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYlsxXSkgfHxcbiAgICAgICAgICAgICAgdGhpcy5ob3ZlcmVkRGF0ZSB8fFxuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnREYXRlXG4gICAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG9yZGVyZWRWYWx1ZXMgPSBCb29sZWFuKChfYyA9IHRoaXMudmFsdWUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY1swXSlcbiAgICAgICAgICA/IFtcbiAgICAgICAgICAgIChfZCA9IHRoaXMudmFsdWUpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZFswXSxcbiAgICAgICAgICAgICgoX2UgPSB0aGlzLnZhbHVlKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2VbMV0pIHx8IHRoaXMuaG92ZXJlZERhdGVcbiAgICAgICAgICBdLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuICAgICAgICAgIDogW107XG4gICAgICAgIGNvbnN0IGlzU3RhcnQgPSB0aGlzLnJhbmdlICYmIGlzU2FtZURheShvcmRlcmVkVmFsdWVzWzBdLCBkYXkpO1xuICAgICAgICBjb25zdCBpc0VuZCA9IHRoaXMucmFuZ2UgJiYgaXNTYW1lRGF5KG9yZGVyZWRWYWx1ZXNbMV0sIGRheSk7XG4gICAgICAgIGNvbnN0IGlzVG9kYXkgPSBpc1NhbWVEYXkoZGF5LCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgY29uc3QgaXNEaXNhYmxlZCA9IHRoaXMuZGlzYWJsZURhdGUoZGF5KTtcbiAgICAgICAgY29uc3QgY2VsbEtleSA9IGBjZWxsLSR7ZGF5LmdldE1vbnRoKCl9LSR7ZGF5LmdldERhdGUoKX1gO1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB7XG4gICAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCdkYXRlJyldOiB0cnVlLFxuICAgICAgICAgIFt0aGlzLmdldENsYXNzTmFtZSgnZGF0ZS0tY3VycmVudCcpXTogaXNDdXJyZW50LFxuICAgICAgICAgIFt0aGlzLmdldENsYXNzTmFtZSgnZGF0ZS0tZGlzYWJsZWQnKV06IGlzRGlzYWJsZWQsXG4gICAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCdkYXRlLS1vdmVyZmxvd2luZycpXTogaXNPdmVyZmxvd2luZyxcbiAgICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoJ2RhdGUtLXRvZGF5JyldOiBpc1RvZGF5LFxuICAgICAgICAgIFt0aGlzLmdldENsYXNzTmFtZSgnZGF0ZS0tc2VsZWN0ZWQnKV06IGlzU2VsZWN0ZWQsXG4gICAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCdkYXRlLS1pbi1yYW5nZScpXTogaXNJblJhbmdlLFxuICAgICAgICAgIFt0aGlzLmdldENsYXNzTmFtZSgnZGF0ZS0tc3RhcnQnKV06IGlzU3RhcnQsXG4gICAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCdkYXRlLS1lbmQnKV06IGlzRW5kXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IFRhZyA9IGlzU2VsZWN0ZWRcbiAgICAgICAgICA/ICdzdHJvbmcnXG4gICAgICAgICAgOiBpc1RvZGF5XG4gICAgICAgICAgICA/ICdlbSdcbiAgICAgICAgICAgIDogJ3NwYW4nO1xuICAgICAgICByZXR1cm4gKGgoXCJ0ZFwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiBTdHJpbmcoaXNEaXNhYmxlZCksIFwiYXJpYS1zZWxlY3RlZFwiOiBpc1NlbGVjdGVkID8gJ3RydWUnIDogdW5kZWZpbmVkLCBjbGFzczogY2xhc3NOYW1lLCBcImRhdGEtZGF0ZVwiOiBnZXRJU09EYXRlU3RyaW5nKGRheSksIGtleTogY2VsbEtleSwgb25DbGljazogdGhpcy5vbkNsaWNrLCBvbk1vdXNlRW50ZXI6IHRoaXMub25Nb3VzZUVudGVyLCBvbk1vdXNlTGVhdmU6IHRoaXMub25Nb3VzZUxlYXZlLCByb2xlOiBcImdyaWRjZWxsXCIsIHRhYkluZGV4OiBpc1NhbWVEYXkoZGF5LCB0aGlzLmN1cnJlbnREYXRlKSAmJiAhdGhpcy5kaXNhYmxlZFxuICAgICAgICAgICAgPyAwXG4gICAgICAgICAgICA6IC0xIH0sIGgoVGFnLCB7IFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIgfSwgZGF5LmdldERhdGUoKSksIGgoXCJzcGFuXCIsIHsgY2xhc3M6IFwidmlzdWFsbHktaGlkZGVuXCIgfSwgSW50bC5EYXRlVGltZUZvcm1hdCh0aGlzLmxvY2FsZSwge1xuICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgIG1vbnRoOiAnbG9uZydcbiAgICAgICAgfSkuZm9ybWF0KGRheSkpKSk7XG4gICAgICB9KSkpO1xuICAgIH0pKSkpLCBzaG93Rm9vdGVyICYmIChoKFwiZGl2XCIsIHsgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCdmb290ZXInKSB9LCB0aGlzLnNob3dUb2RheUJ1dHRvbiAmJiAoaChcImJ1dHRvblwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgndG9kYXktYnV0dG9uJyksIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBpbm5lckhUTUw6IHRoaXMudG9kYXlCdXR0b25Db250ZW50IHx8IHVuZGVmaW5lZCwgb25DbGljazogdGhpcy5zaG93VG9kYXksIHR5cGU6IFwiYnV0dG9uXCIgfSwgdGhpcy5sYWJlbHMudG9kYXlCdXR0b24pKSwgdGhpcy5zaG93Q2xlYXJCdXR0b24gJiYgKGgoXCJidXR0b25cIiwgeyBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ2NsZWFyLWJ1dHRvbicpLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgaW5uZXJIVE1MOiB0aGlzLmNsZWFyQnV0dG9uQ29udGVudCB8fCB1bmRlZmluZWQsIG9uQ2xpY2s6IHRoaXMuY2xlYXIsIHR5cGU6IFwiYnV0dG9uXCIgfSwgdGhpcy5sYWJlbHMuY2xlYXJCdXR0b24pKSkpKSkpO1xuICB9XG4gIGdldCBlbCgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgc3RhdGljIGdldCB3YXRjaGVycygpIHsgcmV0dXJuIHtcbiAgICBcImZpcnN0RGF5T2ZXZWVrXCI6IFtcIndhdGNoRmlyc3REYXlPZldlZWtcIl0sXG4gICAgXCJsb2NhbGVcIjogW1wid2F0Y2hMb2NhbGVcIl0sXG4gICAgXCJyYW5nZVwiOiBbXCJ3YXRjaFJhbmdlXCJdLFxuICAgIFwic3RhcnREYXRlXCI6IFtcIndhdGNoU3RhcnREYXRlXCJdLFxuICAgIFwidmFsdWVcIjogW1wid2F0Y2hWYWx1ZVwiXVxuICB9OyB9XG4gIHN0YXRpYyBnZXQgc3R5bGUoKSB7IHJldHVybiB3Y0RhdGVwaWNrZXJDc3M7IH1cbn0sIFsyLCBcIndjLWRhdGVwaWNrZXJcIiwge1xuICAgIFwiY2xlYXJCdXR0b25Db250ZW50XCI6IFsxLCBcImNsZWFyLWJ1dHRvbi1jb250ZW50XCJdLFxuICAgIFwiZGlzYWJsZWRcIjogWzRdLFxuICAgIFwiZGlzYWJsZURhdGVcIjogWzE2XSxcbiAgICBcImVsZW1lbnRDbGFzc05hbWVcIjogWzEsIFwiZWxlbWVudC1jbGFzcy1uYW1lXCJdLFxuICAgIFwiZmlyc3REYXlPZldlZWtcIjogWzIsIFwiZmlyc3QtZGF5LW9mLXdlZWtcIl0sXG4gICAgXCJyYW5nZVwiOiBbNF0sXG4gICAgXCJsYWJlbHNcIjogWzE2XSxcbiAgICBcImxvY2FsZVwiOiBbMV0sXG4gICAgXCJuZXh0TW9udGhCdXR0b25Db250ZW50XCI6IFsxLCBcIm5leHQtbW9udGgtYnV0dG9uLWNvbnRlbnRcIl0sXG4gICAgXCJuZXh0WWVhckJ1dHRvbkNvbnRlbnRcIjogWzEsIFwibmV4dC15ZWFyLWJ1dHRvbi1jb250ZW50XCJdLFxuICAgIFwicHJldmlvdXNNb250aEJ1dHRvbkNvbnRlbnRcIjogWzEsIFwicHJldmlvdXMtbW9udGgtYnV0dG9uLWNvbnRlbnRcIl0sXG4gICAgXCJwcmV2aW91c1llYXJCdXR0b25Db250ZW50XCI6IFsxLCBcInByZXZpb3VzLXllYXItYnV0dG9uLWNvbnRlbnRcIl0sXG4gICAgXCJzaG93Q2xlYXJCdXR0b25cIjogWzQsIFwic2hvdy1jbGVhci1idXR0b25cIl0sXG4gICAgXCJzaG93TW9udGhTdGVwcGVyXCI6IFs0LCBcInNob3ctbW9udGgtc3RlcHBlclwiXSxcbiAgICBcInNob3dUb2RheUJ1dHRvblwiOiBbNCwgXCJzaG93LXRvZGF5LWJ1dHRvblwiXSxcbiAgICBcInNob3dZZWFyU3RlcHBlclwiOiBbNCwgXCJzaG93LXllYXItc3RlcHBlclwiXSxcbiAgICBcInN0YXJ0RGF0ZVwiOiBbMSwgXCJzdGFydC1kYXRlXCJdLFxuICAgIFwidG9kYXlCdXR0b25Db250ZW50XCI6IFsxLCBcInRvZGF5LWJ1dHRvbi1jb250ZW50XCJdLFxuICAgIFwidmFsdWVcIjogWzEwNDBdLFxuICAgIFwiY3VycmVudERhdGVcIjogWzMyXSxcbiAgICBcImhvdmVyZWREYXRlXCI6IFszMl0sXG4gICAgXCJ3ZWVrZGF5c1wiOiBbMzJdXG4gIH1dKTtcbmZ1bmN0aW9uIGRlZmluZUN1c3RvbUVsZW1lbnQkMSgpIHtcbiAgaWYgKHR5cGVvZiBjdXN0b21FbGVtZW50cyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBjb21wb25lbnRzID0gW1wid2MtZGF0ZXBpY2tlclwiXTtcbiAgY29tcG9uZW50cy5mb3JFYWNoKHRhZ05hbWUgPT4geyBzd2l0Y2ggKHRhZ05hbWUpIHtcbiAgICBjYXNlIFwid2MtZGF0ZXBpY2tlclwiOlxuICAgICAgaWYgKCFjdXN0b21FbGVtZW50cy5nZXQodGFnTmFtZSkpIHtcbiAgICAgICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKHRhZ05hbWUsIFdDRGF0ZXBpY2tlcik7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgfSB9KTtcbn1cblxuY29uc3QgV2NEYXRlcGlja2VyID0gV0NEYXRlcGlja2VyO1xuY29uc3QgZGVmaW5lQ3VzdG9tRWxlbWVudCA9IGRlZmluZUN1c3RvbUVsZW1lbnQkMTtcblxuZXhwb3J0IHsgV2NEYXRlcGlja2VyLCBkZWZpbmVDdXN0b21FbGVtZW50IH07XG4iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIjtcclxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuaW1wb3J0IHsgbW9kaWZ5RHVlRGF0ZX0gIGZyb20gXCIuL3RvZG9DcmVhdG9yXCI7XHJcbmltcG9ydCB7IFdjRGF0ZXBpY2tlciB9IGZyb20gXCJ3Yy1kYXRlcGlja2VyL2Rpc3QvY29tcG9uZW50cy93Yy1kYXRlcGlja2VyXCJcclxuaW1wb3J0IFwid2MtZGF0ZXBpY2tlci9kaXN0L3RoZW1lcy9kYXJrLmNzc1wiO1xyXG5pbXBvcnQgeyBlYWNoV2Vla09mSW50ZXJ2YWwgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuLy8gY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwid2MtZGF0ZXBpY2tlclwiLCBXY0RhdGVwaWNrZXIpO1xyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVmZmVjdHMgfSBmcm9tIFwiLi9oYW5kbGVFZmZlY3RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sRHVlRGF0ZUNoYW5nZShlbGVtZW50LCBpbmRleCl7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICAvLyBjb25zdCBidXR0b25zID0gWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXTtcclxuICAgIGNvbnN0IGNvcnJlY3RJbmRleCA9IHRvZG9zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ub3JkZXIgPT0gaW5kZXgpXHJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCwgd2lkdGggfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGRhdGVQaWNrZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnd2MtZGF0ZXBpY2tlcicsICduZXctZHVlLWRhdGUnLCAnZGF0ZXBpY2tlcicpXHJcbiAgICBkYXRlUGlja2VyLmNsYXNzTGlzdC5hZGQoJ2VkaXQtZHVlLWRhdGUnKVxyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSB0b2Rvc1tjb3JyZWN0SW5kZXhdLmR1ZURhdGUgXHJcbiAgICBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZSgnc3RhcnQtZGF0ZScsIGAke2N1cnJlbnREYXRlfWApXHJcbiAgICAvLyBkYXRlUGlja2VyLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtEYXRlKCcyMDI0LTAxLTA0Jyl9YClcclxuICAgIGRhdGVQaWNrZXIudmFsdWUgPSBuZXcgRGF0ZShgJHtjdXJyZW50RGF0ZS5yZXBsYWNlQWxsKCctJywgJy8nKX1gKVxyXG5cclxuICAgIGRhdGVQaWNrZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICBkYXRlUGlja2VyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGRhdGVQaWNrZXIuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcclxuICAgIGRhdGVQaWNrZXIuc3R5bGUubGVmdCA9IGAke2xlZnQgLSAoMjM4LXdpZHRoKX1weGA7IFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBpZighZS50YXJnZXQuY2xvc2VzdCgnLm5ldy1kdWUtZGF0ZScpKVxyXG4gICAgICAgICAgIGRhdGVQaWNrZXIucmVtb3ZlKClcclxuICAgIH0pXHJcbiAgICAvL2Z1bmN0aW9uIGhhbmRsZURhdGVDaGFuZ2UoKXtcclxuICAgICAgICBkYXRlUGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdERhdGUnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcclxuICAgICAgICAgICAgY29uc3QgZGF0ZXBpY2tlZCA9IGV2ZW50LmRldGFpbFxyXG4gICAgICAgICAgICBtb2RpZnlEdWVEYXRlKGluZGV4LCBkYXRlcGlja2VkKVxyXG4gICAgICAgICAgICBkYXRlUGlja2VyLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIGhhbmRsZUVmZmVjdHMoKVxyXG4gICAgICAgICAgICAvLyBkaXNwbGF5VGFza3ModG9kb3MpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9zKVxyXG4gICAgICAgIH0pO1xyXG4gICAgLy99XHJcbiAgICBcclxuICAgIC8vIGRhdGVQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAvLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAvLyAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgLy8gICAgIGhhbmRsZURhdGVDaGFuZ2UoKVxyXG4gICAgLy8gfSkgICAgXHJcbiAgICBcclxufSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiO1xyXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5pbXBvcnQgeyBtb2RpZnlMaXN0IH0gZnJvbSBcIi4vdG9kb0NyZWF0b3JcIlxyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVmZmVjdHMgfSBmcm9tIFwiLi9oYW5kbGVFZmZlY3RzXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGlzdE9wdGlvbnMobGlzdHMpe1xyXG4gICAgY29uc3QgbGlzdElucHV0ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbGlzdElucHV0JylcclxuICAgIFxyXG4gICAgd2hpbGUgKGxpc3RJbnB1dC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgbGlzdElucHV0LnJlbW92ZUNoaWxkKGxpc3RJbnB1dC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGxpc3RBcnJheSA9IGxpc3RzLm1hcCggbGlzdCA9PiBsaXN0Lmxpc3ROYW1lKVxyXG4gICAgbGlzdEFycmF5LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuIGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnb3B0aW9uJywgJ29wdGlvbi1pbnB1dCcsIGBsaXN0JHtsaXN0QXJyYXkuaW5kZXhPZihpdGVtKX1gKVxyXG4gICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBpdGVtXHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW1cclxuICAgICAgICBsaXN0SW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudClcclxufSlcclxufVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gY29udHJvbExpc3RDaGFuZ2UoZWxlbWVudCwgaW5kZXgpe1xyXG4gICAgY29uc3QgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICBjb25zdCBsaXN0cyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ2xpc3RzJylcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBsaXN0cy5tYXAoIGxpc3QgPT4gbGlzdC5saXN0TmFtZSk7XHJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgY29uc3QgY2hhbmdlTGlzdCA9IGludGVyYWN0RE9NKCkuZ2VuZXJhdGVMaXN0T3B0aW9ucyh7dG9wLCBsZWZ0fSwgYnV0dG9ucywgJ2xpc3QnKVxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGNoYW5nZUxpc3QucmVtb3ZlKClcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIGNoYW5nZVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgIC8vICAgICBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7Y2hhbmdlUHJpb3JpdHkucmVtb3ZlKCl9LCA1MDApXHJcbiAgICAvLyB9KVxyXG4gICAgY2hhbmdlTGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoYW5nZS1saXN0LWJ1dHRvbicpKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgIG1vZGlmeUxpc3QoaW5kZXgsIGAke2UudGFyZ2V0LnZhbHVlfWApXHJcbiAgICAgICAgICAgIC8vICBpbnRlcmFjdERPTSgpLmhpZGUoY2hhbmdlU3RhdHVzKTtcclxuICAgICAgICAgICAgaGFuZGxlRWZmZWN0cygpXHJcbiAgICAgICAgICAgIGNoYW5nZUxpc3QucmVtb3ZlKClcclxuICAgICAgICAgICAgLy8gIGRpc3BsYXlUYXNrcyh0b2RvcykgIFxyXG4gICAgICAgIH1cclxuICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgeyB1cGRhdGVMaXN0T3B0aW9ucywgY29udHJvbExpc3RDaGFuZ2UgfSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiO1xyXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5pbXBvcnQgeyBtb2RpZnlQcmlvcml0eSB9ICBmcm9tIFwiLi90b2RvQ3JlYXRvclwiO1xyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVmZmVjdHMgfSBmcm9tIFwiLi9oYW5kbGVFZmZlY3RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sUHJpb3JpdHlDaGFuZ2UoZWxlbWVudCwgaW5kZXgpe1xyXG4gICAgbGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgY29uc3QgYnV0dG9ucyA9IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ107XHJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSBpbnRlcmFjdERPTSgpLmdlbmVyYXRlTGlzdE9wdGlvbnMoe3RvcCwgbGVmdH0sIGJ1dHRvbnMsICdwcmlvcml0eScpXHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgY2hhbmdlUHJpb3JpdHkucmVtb3ZlKClcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIGNoYW5nZVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgIC8vICAgICBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7Y2hhbmdlUHJpb3JpdHkucmVtb3ZlKCl9LCA1MDApXHJcbiAgICAvLyB9KVxyXG4gICAgY2hhbmdlUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2UtcHJpb3JpdHktYnV0dG9uJykpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgbW9kaWZ5UHJpb3JpdHkoaW5kZXgsIGAke2UudGFyZ2V0LnZhbHVlfWApXHJcbiAgICAgICAgICAgICBoYW5kbGVFZmZlY3RzKCkgXHJcbiAgICAgICAgICAgIC8vICBpbnRlcmFjdERPTSgpLmhpZGUoY2hhbmdlU3RhdHVzKTtcclxuICAgICAgICAgICAgLy8gY2hhbmdlUHJpb3JpdHkucmVtb3ZlKClcclxuICAgICAgICAgICAgLy8gIGRpc3BsYXlUYXNrcyh0b2RvcykgIFxyXG4gICAgICAgIH1cclxuICAgICB9KVxyXG59IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCI7XHJcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcbmltcG9ydCB7IG1vZGlmeVN0YXR1cyB9ICBmcm9tIFwiLi90b2RvQ3JlYXRvclwiO1xyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcbmltcG9ydCB7IGhhbmRsZUVmZmVjdHMgfSBmcm9tIFwiLi9oYW5kbGVFZmZlY3RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sU3RhdHVzQ2hhbmdlKGVsZW1lbnQsIGluZGV4KXtcclxuICAgIGxldCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvZG9zJylcclxuICAgIGNvbnN0IGJ1dHRvbnMgPSBbJ3RvLWRvJywgJ2RvaW5nJywgJ2RvbmUnLCAnd29udCBkbyddO1xyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbiAgICBjb25zdCBjaGFuZ2VTdGF0dXMgPSBpbnRlcmFjdERPTSgpLmdlbmVyYXRlTGlzdE9wdGlvbnMoe3RvcCwgbGVmdH0sIGJ1dHRvbnMsICdzdGF0dXMnKVxyXG4gICAgLy8gY29uc3QgY2hhbmdlU3RhdHVzID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnY2hhbmdlU3RhdHVzJylcclxuICAgIC8vIGNvbnN0IGNoYW5nZVN0YXR1cyA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnY2hhbmdlLXN0YXR1cycsICdjaGFuZ2VTdGF0dXMnKVxyXG4gICAgLy8gICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XHJcbiAgICAvLyAgICAgICBjb25zdCBidXR0b25FbGVtZW50ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdjaGFuZ2Utc3RhdHVzLWJ1dHRvbicsIGAke2J1dHRvbnNbYnV0dG9ucy5pbmRleE9mKGJ1dHRvbildfSNpZGApXHJcbiAgICAvLyAgICAgICBidXR0b25FbGVtZW50LnZhbHVlID0gYnV0dG9uO1xyXG4gICAgLy8gICAgICAgYnV0dG9uRWxlbWVudC50ZXh0Q29udGVudCA9IGJ1dHRvbjtcclxuICAgIC8vICAgICAgIGNoYW5nZVN0YXR1cy5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIC8vIGludGVyYWN0RE9NKCkudG9nZ2xlRWxlbWVudERpc3BsYXkoY2hhbmdlU3RhdHVzKVxyXG4gICAgLy8gY2hhbmdlU3RhdHVzLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgLy8gY2hhbmdlU3RhdHVzLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIC8vIGNoYW5nZVN0YXR1cy5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4gICAgLy8gY2hhbmdlU3RhdHVzLnN0eWxlLmxlZnQgPSBgJHtsZWZ0fXB4YDsgXHJcbiAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNoYW5nZVN0YXR1cyk7XHJcblxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgY2hhbmdlU3RhdHVzLnJlbW92ZSgpXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAvLyBjaGFuZ2VTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xyXG4gICAgLy8gICAgIHNldEludGVydmFsKCBmdW5jdGlvbigpIHtjaGFuZ2VTdGF0dXMucmVtb3ZlKCl9LCA1MDApXHJcbiAgICAvLyB9KVxyXG5cclxuXHJcbiAgICBjaGFuZ2VTdGF0dXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2Utc3RhdHVzLWJ1dHRvbicpKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgIG1vZGlmeVN0YXR1cyhpbmRleCwgYCR7ZS50YXJnZXQudmFsdWV9YClcclxuICAgICAgICAgICAgLy8gIGludGVyYWN0RE9NKCkuaGlkZShjaGFuZ2VTdGF0dXMpO1xyXG4gICAgICAgICAgICBjaGFuZ2VTdGF0dXMucmVtb3ZlKClcclxuICAgICAgICAgICAgaGFuZGxlRWZmZWN0cygpXHJcbiAgICAgICAgICAgIC8vICBkaXNwbGF5VGFza3ModG9kb3MpICBcclxuICAgICAgICB9XHJcbiAgICAgfSlcclxufSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiO1xyXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5pbXBvcnQgeyBtb2RpZnlUYXNrfSAgZnJvbSBcIi4vdG9kb0NyZWF0b3JcIjtcclxuaW1wb3J0IHsgYWRkVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hhbmRsZVNhdmVMb2dpY1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVFZmZlY3RzIH0gZnJvbSBcIi4vaGFuZGxlRWZmZWN0c1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbFRhc2tDaGFuZ2UoZWxlbWVudCwgaW5kZXgpe1xyXG4gICAgbGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgLy8gY29uc3QgYnV0dG9ucyA9IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ107XHJcbiAgICBjb25zdCBjb3JyZWN0SW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm9yZGVyID09IGluZGV4KVxyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IGNoYW5nZVRhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaW5wdXQnLCAnY2hhbmdlLXRhc2staW5wdXQnLCAnY2hhbmdlVGFza0lucHV0JylcclxuICAgIGNoYW5nZVRhc2sudHlwZSA9ICd0ZXh0J1xyXG4gICAgY29uc3QgdGFza1ZhbHVlID0gYCR7dG9kb3NbY29ycmVjdEluZGV4XS50YXNrfWBcclxuICAgIGNoYW5nZVRhc2sudmFsdWUgPSB0YXNrVmFsdWVcclxuICAgIFxyXG4gICAgY2hhbmdlVGFzay5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgIGNoYW5nZVRhc2suc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgY2hhbmdlVGFzay5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4gICAgY2hhbmdlVGFzay5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7IFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjaGFuZ2VUYXNrKTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2UtdGFzay1pbnB1dCcpICYmIGRvY3VtZW50LmNvbnRhaW5zKGNoYW5nZVRhc2spKXtcclxuICAgICAgICAgICAgbW9kaWZ5VGFzayhpbmRleCwgYCR7Y2hhbmdlVGFzay52YWx1ZX1gKVxyXG4gICAgICAgICAgICBjaGFuZ2VUYXNrLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIGhhbmRsZUVmZmVjdHMoKVxyXG4gICAgICAgICAgICAvLyBkaXNwbGF5VGFza3ModG9kb3MpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY2hhbmdlVGFzay5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XHJcbiAgICAgICAgaWYoZS5rZXlDb2RlID09IDEzKXtcclxuICAgICAgICAgICAgbW9kaWZ5VGFzayhpbmRleCwgYCR7Y2hhbmdlVGFzay52YWx1ZX1gKVxyXG4gICAgICAgICAgICBjaGFuZ2VUYXNrLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIGhhbmRsZUVmZmVjdHMoKVxyXG4gICAgICAgICAgICAvLyBkaXNwbGF5VGFza3ModG9kb3MpIFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAvLyBjaGFuZ2VQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XHJcbiAgICAvLyAgICAgc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCkge2NoYW5nZVByaW9yaXR5LnJlbW92ZSgpfSwgNTAwKVxyXG4gICAgLy8gfSlcclxuICAgIC8vIGNoYW5nZVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAvLyAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2hhbmdlLXByaW9yaXR5LWJ1dHRvbicpKXtcclxuICAgIC8vICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vICAgICAgICAgIG1vZGlmeVByaW9yaXR5KGluZGV4LCBgJHtlLnRhcmdldC52YWx1ZX1gLCB0b2RvcylcclxuICAgIC8vICAgICAgICAgLy8gIGludGVyYWN0RE9NKCkuaGlkZShjaGFuZ2VTdGF0dXMpO1xyXG4gICAgLy8gICAgICAgICBjaGFuZ2VQcmlvcml0eS5yZW1vdmUoKVxyXG4gICAgLy8gICAgICAgICAgZGlzcGxheVRhc2tzKHRvZG9zKSAgXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gIH0pXHJcbn0iLCJpbXBvcnQgZGlzcGxheUxpc3RzIGZyb20gXCIuL2Rpc3BsYXlMaXN0c1wiXHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuaW1wb3J0IHsgYWRkVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuaW1wb3J0IHsgdXBkYXRlTGlzdE9wdGlvbnMgfSBmcm9tIFwiLi9jb250cm9sTGlzdENoYW5nZVwiO1xyXG5cclxuXHJcbmNvbnN0IGRlbGV0ZUxpc3QgPSAoaW5kZXgpID0+IHtcclxuICAgIGxldCBsaXN0cyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ2xpc3RzJylcclxuICAgIGxpc3RzLnNwbGljZShpbmRleCwgMSlcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKGxpc3RzLCAnbGlzdHMnKVxyXG4gICAgZGlzcGxheUxpc3RzKGxpc3RzKVxyXG4gICAgdXBkYXRlTGlzdE9wdGlvbnMobGlzdHMpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtb2RpZnlMaXN0IChpbmRleCwgbGlzdFZhbHVlLCBsaXN0cykge1xyXG4gICAgY29uc3QgbGlzdCA9IGNyZWF0ZUxpc3QoYCR7bGlzdFZhbHVlfWApXHJcbiAgICBcclxuICAgIGxpc3RzLnNwbGljZShpbmRleCwgMSwgbGlzdClcclxuXHJcbiAgICBkaXNwbGF5TGlzdHMobGlzdHMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpc3QgKGxpc3ROYW1lLCBjb2xvciwgZGVzY3JpcHRpb24pe1xyXG4gICAgbGV0IGxpc3QgPSB7XHJcbiAgICAgICAgbGlzdE5hbWUsXHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBsaXN0KVxyXG59XHJcblxyXG5cclxuY29uc3QgY3JlYXRlTmV3TGlzdCA9IChsaXN0TmFtZSwgY29sb3IsIGRlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0cyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ2xpc3RzJylcclxuICAgIGNvbnN0IGxpc3QgPSBjcmVhdGVMaXN0KGxpc3ROYW1lLCBjb2xvciwgZGVzY3JpcHRpb24pXHJcbiAgICBsaXN0cy5wdXNoKGxpc3QpXHJcbiAgICBjb25zb2xlLmxvZyhsaXN0cylcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKGxpc3RzLCAnbGlzdHMnKVxyXG59XHJcblxyXG4vLyBjb25zdCBsaXN0MSA9IGNyZWF0ZUxpc3QoJ2dlbmVyYWwnKVxyXG4vLyBjb25zdCBsaXN0MiA9IGNyZWF0ZUxpc3QoJ05lbW8nKVxyXG4vLyBjb25zdCBsaXN0MyA9IGNyZWF0ZUxpc3QoJ1Byb2plY3QnKVxyXG4vLyBjb25zdCBsaXN0NCA9IGNyZWF0ZUxpc3QoJ2RhaWx5JylcclxuLy8gbGlzdHMucHVzaChsaXN0MSlcclxuLy8gbGlzdHMucHVzaChsaXN0MilcclxuLy8gbGlzdHMucHVzaChsaXN0MylcclxuLy8gbGlzdHMucHVzaChsaXN0NClcclxuLy8gY29uc29sZS5sb2cobGlzdHMubWFwKCBsaXN0ID0+IGxpc3QubGlzdE5hbWUpKVxyXG5cclxuLy8gZGlzcGxheUxpc3RzKGxpc3RzKVxyXG5cclxuLy8gdXBkYXRlTGlzdE9wdGlvbnMobGlzdHMpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBkZWxldGVMaXN0LCBtb2RpZnlMaXN0LCBjcmVhdGVMaXN0LCBjcmVhdGVOZXdMaXN0IH0iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIlxyXG5pbXBvcnQgcmVtb3ZlIGZyb20gXCIuL3JlbW92ZS5wbmdcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUxpc3RzKGFycmF5KXtcclxuICAgIGNvbnN0IGxpc3RzVmlldyA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2xpc3RzVmlldycpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2xpc3RzJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2RlbGV0ZS1saXN0JykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnc2VjdGlvbicsICdsaXN0cycsIGBsaXN0JHtpfWApXHJcbiAgICAgICAgbGV0IGRlbGV0ZUxpc3QgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2RlbGV0ZS1saXN0JywgYGRlbGV0ZUxpc3QjJHtpfWApXHJcbiAgICAgICAgLy8gbGV0IGNoZWNrVGFzayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnY2hlY2stdGFzaycsIGBjaGVja3Rhc2sjJHtpfWApXHJcbiAgICAgICAgLy8gbGV0IGRlbGV0ZVRhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2RlbGV0ZS10YXNrJywgYCR7aX1gKVxyXG4gICAgICAgIGxldCBkZWxldGVJbWFnZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnZGVsZXRlLWxpc3QtaW1nJywgYGRlbGV0ZUxpc3RJbWFnZSMke2l9YClcclxuICAgICAgICBkZWxldGVJbWFnZS5zcmMgPSByZW1vdmVcclxuICAgICAgICBkZWxldGVMaXN0LmFwcGVuZENoaWxkKGRlbGV0ZUltYWdlKVxyXG4gICAgICAgIC8vIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja1Rhc2spXHJcbiAgICAgICAgaW50ZXJhY3RET00oKS5hcHBlbmRMaXN0RWxlbWVudGFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyLCBhcnJheVtpXSwgaSlcclxuICAgICAgICBsaXN0c1ZpZXcuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVMaXN0KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuLy8gaW1wb3J0IGxvb3BUb2RvcyBmcm9tIFwiLi9sb29wVG9kb3NcIlxyXG5pbXBvcnQgeCBmcm9tICcuL2Nyb3NzZWQucG5nJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheVRhc2tzKGFycmF5KXtcclxuICAgIGNvbnN0IHRvZG9zVmlldyA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ3RvZG9zVmlldycpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ3RvZG9zJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2RlbGV0ZS10YXNrJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ3RvZG9zJywgYHRvZG8ke2FycmF5W2ldLm9yZGVyfWApXHJcbiAgICAgICAgbGV0IGNoZWNrVGFzayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnY2hlY2stdGFzaycsIGBjaGVja3Rhc2sjJHtpfWApXHJcbiAgICAgICAgbGV0IGRlbGV0ZVRhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2RlbGV0ZS10YXNrJywgYCR7aX1gKVxyXG4gICAgICAgIGxldCBkZWxldGVJbWFnZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnZGVsZXRlLWltYWdlJywgJ2RlbGV0ZUltYWdlJylcclxuICAgICAgICBkZWxldGVJbWFnZS5zcmMgPSB4XHJcbiAgICAgICAgZGVsZXRlVGFzay5hcHBlbmRDaGlsZChkZWxldGVJbWFnZSlcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tUYXNrKVxyXG4gICAgICAgIGludGVyYWN0RE9NKCkuYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQoY29udGFpbmVyLCBhcnJheVtpXSwgYXJyYXlbaV0ub3JkZXIpXHJcbiAgICAgICAgdG9kb3NWaWV3LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzaylcclxuICAgIH1cclxufSIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyQnlEYXRlIChkYXRlVmFsdWUsIHRvZG9zKXtcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cobGlzdHNbaW5kZXhdLmxpc3ROYW1lKVxyXG4gICAgY29uc3QgZmlsdGVyZWRUb2RvcyA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uZHVlRGF0ZSA9PSBkYXRlVmFsdWUgKVxyXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRUb2RvcylcclxuICAgIFxyXG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVG9kb3MpXHJcbn0gIiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWx0ZXJCeUxpc3QgKGVsZW1lbnQsIGxpc3RzLCB0b2Rvcyl7XHJcbiAgICBjb25zdCBpbmRleCA9ICtgJHtlbGVtZW50LmlkfWAucmVwbGFjZShcImxpc3RcIiwgXCJcIilcclxuICAgIC8vIGNvbnNvbGUubG9nKGxpc3RzW2luZGV4XS5saXN0TmFtZSlcclxuICAgIGNvbnN0IGxpc3RWYWx1ZSA9IGxpc3RzLm1hcCggbGlzdCA9PiBsaXN0Lmxpc3ROYW1lKVtpbmRleF0gPT0gdW5kZWZpbmVkID8gZWxlbWVudC52YWx1ZSA6IGxpc3RzLm1hcCggbGlzdCA9PiBsaXN0Lmxpc3ROYW1lKVtpbmRleF1cclxuICAgIGNvbnN0IGZpbHRlcmVkVG9kb3MgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmxpc3QgPT0gbGlzdFZhbHVlIClcclxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkVG9kb3MpXHJcbiAgICBcclxuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRvZG9zKVxyXG59ICIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyQnlQcmlvcml0eSAoZWxlbWVudCwgdG9kb3Mpe1xyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhsaXN0c1tpbmRleF0ubGlzdE5hbWUpXHJcbiAgICBjb25zdCBwcmlvcml0eVZhbHVlID0gIGVsZW1lbnQudmFsdWVcclxuICAgIGNvbnN0IGZpbHRlcmVkVG9kb3MgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLnByaW9yaXR5ID09IHByaW9yaXR5VmFsdWUgKVxyXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRUb2RvcylcclxuICAgIFxyXG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVG9kb3MpXHJcbn0gIiwiaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWx0ZXJCeVN0YXR1cyAoZWxlbWVudCwgdG9kb3Mpe1xyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhsaXN0c1tpbmRleF0ubGlzdE5hbWUpXHJcbiAgICBjb25zdCBzdGF0dXNWYWx1ZSA9ICBlbGVtZW50LnZhbHVlXHJcbiAgICBjb25zdCBmaWx0ZXJlZFRvZG9zID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5zdGF0dXMgPT0gc3RhdHVzVmFsdWUgKVxyXG4gICAgY29uc29sZS5sb2coZmlsdGVyZWRUb2RvcylcclxuICAgIFxyXG4gICAgZGlzcGxheVRhc2tzKGZpbHRlcmVkVG9kb3MpXHJcbn0gIiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCI7XHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuXHJcbmZ1bmN0aW9uIGhleDJyZ2JhIChoZXgsIGFscGhhKSB7XHJcbiAgICBjb25zdCBbciwgZywgYl0gPSBoZXgubWF0Y2goL1xcd1xcdy9nKS5tYXAoeCA9PiBwYXJzZUludCh4LCAxNikpO1xyXG4gICAgcmV0dXJuIGByZ2JhKCR7cn0sJHtnfSwke2J9LCR7YWxwaGF9KWA7XHJcbiAgfTtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRWZmZWN0cygpe1xyXG4gICAgY29uc3QgdGl0bGVzID0gaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCd0b2Rvcy10aXRsZXMnKVxyXG4gICAgdGl0bGVzLmZvckVhY2godGl0bGUgPT4ge1xyXG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBlID0+IHtcclxuICAgIC8vICAgIGNvbnNvbGUubG9nKHRpdGxlcylcclxuICAgICAgIFxyXG4gICAgICAgIHRpdGxlcy5mb3JFYWNoKHRpdGxlID0+IHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2JvcmRlci1yaWdodC10aXRsZXMnKSkgXHJcbiAgICB9KVxyXG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgICAgICB0aXRsZXMuZm9yRWFjaCh0aXRsZSA9PiB0aXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdib3JkZXItcmlnaHQtdGl0bGVzJykpXHJcbiAgICAgICAgfSlcclxufVxyXG4gICAgKVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUxpc3RJY29ucyA9IGludGVyYWN0RE9NKCkucmV0dXJuQWxsTWF0Y2hpbmdFbGVtZW50cygnZGVsZXRlLWxpc3QtaW1nJylcclxuICAgIGRlbGV0ZUxpc3RJY29ucy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGUgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pbWFnZS1pbWctaG92ZXInKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZGVsZXRlLWltYWdlLWltZy1ob3ZlcicpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgbGlzdHMgPSBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2xpc3RzJylcclxuICAgIGxpc3RzLmZvckVhY2gobGlzdCA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpc3RJbmRleCA9ICtgJHtlLnRhcmdldC5pZH1gLnJlcGxhY2UoXCJsaXN0XCIsIFwiXCIpXHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlSW5kZXggPSAnZGVsZXRlTGlzdEltYWdlIycgKyBsaXN0SW5kZXhcclxuICAgICAgICAgICAgaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudChpbWFnZUluZGV4KS5jbGFzc0xpc3QuYWRkKCdpbWFnZS12aXNpYmxlJylcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0SW5kZXggPSArYCR7ZS50YXJnZXQuaWR9YC5yZXBsYWNlKFwibGlzdFwiLCBcIlwiKVxyXG4gICAgICAgICAgICBjb25zdCBpbWFnZUluZGV4ID0gJ2RlbGV0ZUxpc3RJbWFnZSMnICsgbGlzdEluZGV4XHJcbiAgICAgICAgICAgIGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoaW1hZ2VJbmRleCkuY2xhc3NMaXN0LnJlbW92ZSgnaW1hZ2UtdmlzaWJsZScpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdG9kb0xpc3RzID0gaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCd0b2RvLWxpc3RzJylcclxuICAgIHRvZG9MaXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3RzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgnbGlzdHMnKVxyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gbGlzdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5saXN0TmFtZSA9PSBsaXN0LnRleHRDb250ZW50KS5tYXAoaXRlbSA9PiBpdGVtLmNvbG9yKVxyXG4gICAgICAgIC8vIGxpc3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYCR7Y29sb3JbMF19YFxyXG4gICAgICAgIGxpc3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYCR7aGV4MnJnYmEoY29sb3JbMF0sIDAuMyl9YFxyXG4gICAgfSlcclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGhleDJyZ2JhLCBoYW5kbGVFZmZlY3RzIH1cclxuXHJcbiIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiXHJcbmltcG9ydCBhcnJvd1JpZ2h0ICBmcm9tICcuL3JpZ2h0LnBuZydcclxuaW1wb3J0IGZpbHRlckJ5TGlzdCBmcm9tIFwiLi9maWx0ZXJCeUxpc3RcIlxyXG5pbXBvcnQgZmlsdGVyQnlTdGF0dXMgZnJvbSBcIi4vZmlsdGVyQnlTdGF0dXNcIlxyXG5pbXBvcnQgZmlsdGVyQnlQcmlvcml0eSBmcm9tIFwiLi9maWx0ZXJCeVByaW9yaXR5XCJcclxuaW1wb3J0IGZpbHRlckJ5RGF0ZSBmcm9tIFwiLi9maWx0ZXJCeURhdGVcIlxyXG5pbXBvcnQgc29ydEJ5VGl0bGUgZnJvbSBcIi4vc29ydEJ5VGl0bGVcIlxyXG5pbXBvcnQgeyBXY0RhdGVwaWNrZXIgfSBmcm9tIFwid2MtZGF0ZXBpY2tlci9kaXN0L2NvbXBvbmVudHMvd2MtZGF0ZXBpY2tlclwiXHJcbmltcG9ydCBcIndjLWRhdGVwaWNrZXIvZGlzdC90aGVtZXMvZGFyay5jc3NcIjtcclxuaW1wb3J0IGRvd25JY29uIGZyb20gXCIuL2Rvd24ucG5nXCJcclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIndjLWRhdGVwaWNrZXJcIiwgV2NEYXRlcGlja2VyKTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUZpbHRlciAocGFyZW50RWxlbWVudCwgYXJyYXkpe1xyXG4gICAgYXJyYXkuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnZmlsdGVyLXNvcnQtZXhwYW5kZWQnLCBgZmlsdGVyU29ydEV4cGFuZGVkSWQjJHthcnJheS5pbmRleE9mKG9wdGlvbil9YClcclxuICAgICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uXHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbjtcclxuICAgICAgICAvLyBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uO1xyXG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5wdXRFbGVtZW50SWNvbnMocGFyZW50RWxlbWVudCwgaWNvbil7XHJcbiAgICBjb25zdCBpbWFnZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnZXhwYW5kLWljb24nLCBgJHtwYXJlbnRFbGVtZW50fS1pY29uYCApXHJcbiAgICBpbWFnZS5zcmMgPSBpY29uXHJcbiAgICBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KHBhcmVudEVsZW1lbnQpLmFwcGVuZENoaWxkKGltYWdlKVxyXG59XHJcblxyXG5pbnB1dEVsZW1lbnRJY29ucygndG9kb3NUaXRsZVRhc2tzJywgZG93bkljb24pXHJcbmlucHV0RWxlbWVudEljb25zKCd0b2Rvc1RpdGxlU3RhdHVzJywgZG93bkljb24pXHJcbmlucHV0RWxlbWVudEljb25zKCd0b2Rvc1RpdGxlTGlzdHMnLCBkb3duSWNvbilcclxuaW5wdXRFbGVtZW50SWNvbnMoJ3RvZG9zVGl0bGVQcmlvcml0aWVzJywgZG93bkljb24pXHJcbmlucHV0RWxlbWVudEljb25zKCd0b2Rvc1RpdGxlRHVlRGF0ZXMnLCBkb3duSWNvbilcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVGaWx0ZXJPcmRlciAobGlzdHMsIHRvZG9zKXtcclxuICAgIGNvbnN0IHRvZG9zR2VuZXJhbFRpdGxlcyA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ3RvZG9zR2VuZXJhbFRpdGxlcycpXHJcbiAgICB0b2Rvc0dlbmVyYWxUaXRsZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmQtaWNvbicpKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRHZW5lcmFsVGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50R2VuZXJhbFRpdGxlKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpXHJcbiAgICAgICAgICAgICAgICBsZXQgeyB0b3AsIGxlZnQgfSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkTWVudSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnZXhwYW5kZWQtbWVudScsICdleHBhbmRlZE1lbnUnKVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gY3VycmVudEdlbmVyYWxUaXRsZS5pZCA9PSAndG9kb3NUaXRsZVRhc2tzJyA/IFsnU29ydCddIDogWydGaWx0ZXInLCAnU29ydCddXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2ZpbHRlci1zb3J0JywgYGZpbHRlclNvcnRJZCMke29wdGlvbnMuaW5kZXhPZihvcHRpb24pfWApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdmaWx0ZXItc29ydC10ZXh0JywgYGZpbHRlclNvcnRUZXh0IyR7b3B0aW9ucy5pbmRleE9mKG9wdGlvbil9YClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWdodEFycm93ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2ltZycsICdyaWdodC1hcnJvdycsIGByaWdodEFycm93IyR7b3B0aW9ucy5pbmRleE9mKG9wdGlvbil9YClcclxuICAgICAgICAgICAgICAgICAgICByaWdodEFycm93LnNyYyA9IGFycm93UmlnaHRcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZE1lbnUuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZXhwYW5kZWRNZW51LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kZWRNZW51LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5zdHlsZS50b3AgPSBgJHt0b3AgKyAyNn1weGA7XHJcbiAgICAgICAgICAgICAgICBleHBhbmRlZE1lbnUuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChleHBhbmRlZE1lbnUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbHRlci1zb3J0Jykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZmlsdGVyLXNvcnQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LnBhcmVudE5vZGUudmFsdWUgPT0gJ0ZpbHRlcicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByaWdodCB9ID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBhbmRlZEZpbHRlck1lbnUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2V4cGFuZGVkLWZpbHRlci1tZW51JywgXCJleHBhbmRlZEZpbHRlck1lbnVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9UaXRsZSA9IGAke2N1cnJlbnRHZW5lcmFsVGl0bGUuaWR9YC5yZXBsYWNlKFwidG9kb3NUaXRsZVwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9UaXRsZSA9IGN1cnJlbnRHZW5lcmFsVGl0bGUuaWQuc2xpY2UoMTApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2RvVGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0b2RvVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdTdGF0dXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gWyd0by1kbycsICdkb2luZycsICdkb25lJywgJ3dvbnQgZG8nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUZpbHRlciAoZXhwYW5kZWRGaWx0ZXJNZW51LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0xpc3RzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IGxpc3RzLm1hcCggbGlzdCA9PiBsaXN0Lmxpc3ROYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUZpbHRlciAoZXhwYW5kZWRGaWx0ZXJNZW51LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1ByaW9yaXRpZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUZpbHRlciAoZXhwYW5kZWRGaWx0ZXJNZW51LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0R1ZURhdGVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWR1ZURhdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVQaWNrZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnd2MtZGF0ZXBpY2tlcicsICdkYXRlLXBpY2tlcicsICdkYXRlcGlja2VyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2ZpbHRlci1zb3J0LWV4cGFuZGVkJywgYGZpbHRlclNvcnRFeHBhbmRlZElkIyR7b3B0aW9ucy5pbmRleE9mKG9wdGlvbil9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGV4cGFuZGVkRmlsdGVyTWVudS5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUuc3R5bGUudG9wID0gYCR7dG9wICsgMjZ9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodG9kb1RpdGxlID09ICdEdWVEYXRlcycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnN0eWxlLmxlZnQgPSBgJHtyaWdodCAtIDQyMH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5zdHlsZS5sZWZ0ID0gYCR7cmlnaHQgKyAxfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZXhwYW5kZWRGaWx0ZXJNZW51KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnJlbW92ZSgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkLWZpbHRlci1tZW51JykgfHwgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3djLWRhdGVwaWNrZXJfX2RhdGUnKSkgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9UaXRsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0b2RvVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1N0YXR1cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlTdGF0dXMoZS50YXJnZXQsIHRvZG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdMaXN0cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5TGlzdChlLnRhcmdldCwgbGlzdHMsIHRvZG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdQcmlvcml0aWVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeVByaW9yaXR5KGUudGFyZ2V0LCB0b2RvcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZE1lbnUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnRHVlRGF0ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZXN0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZXBpY2tlciA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2RhdGVwaWNrZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVwaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0RGF0ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVwaWNrZWQgPSBldmVudC5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0ZXBpY2tlZCA9PSB0b2Rvc1swXS5kdWVEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlEYXRlKGRhdGVwaWNrZWQsIHRvZG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZE1lbnUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlLnRhcmdldC5wYXJlbnROb2RlLnZhbHVlID09ICdTb3J0Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHJpZ2h0LCB0b3AgfSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkU29ydE1lbnUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2V4cGFuZGVkLXNvcnQtbWVudScsIFwiZXhwYW5kZWRTb3J0TWVudVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9UaXRsZSA9IGN1cnJlbnRHZW5lcmFsVGl0bGUuaWQuc2xpY2UoMTApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdG9kb1RpdGxlID09ICdEdWVEYXRlcycgPyBbJ05ld2VzdCB0byBvbGRlc3QnLCAnT2xkZXN0IHRvIG5ld2VzdCddIDogWydBbHBoYWJldGljYWwnLCAnUmV2ZXJzZSBhbHBoYWJldGljYWwnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2ZpbHRlci1zb3J0LWV4cGFuZGVkJywgYGZpbHRlclNvcnRFeHBhbmRlZElkIyR7b3B0aW9ucy5pbmRleE9mKG9wdGlvbil9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkU29ydE1lbnUuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRTb3J0TWVudS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkU29ydE1lbnUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRTb3J0TWVudS5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwYW5kZWRTb3J0TWVudS5zdHlsZS5sZWZ0ID0gYCR7cmlnaHQgKyAxfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRvZG9UaXRsZSA9PSAnRHVlRGF0ZXMnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkU29ydE1lbnUuc3R5bGUubGVmdCA9IGAke3JpZ2h0IC0gMzAxfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRTb3J0TWVudS5zdHlsZS5sZWZ0ID0gYCR7cmlnaHQgKyAxfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChleHBhbmRlZFNvcnRNZW51KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZFNvcnRNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkU29ydE1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZC1zb3J0LW1lbnUnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodG9kb1RpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdTdGF0dXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeVRpdGxlKGUudGFyZ2V0LCB0b2RvcywgJ3N0YXR1cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0xpc3RzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCkgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5VGl0bGUoZS50YXJnZXQsIHRvZG9zLCAnbGlzdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1ByaW9yaXRpZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeVRpdGxlKGUudGFyZ2V0LCB0b2RvcywgJ3ByaW9yaXR5JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnRHVlRGF0ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeVRpdGxlKGUudGFyZ2V0LCB0b2RvcywgJ2R1ZURhdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdUYXNrcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5VGl0bGUoZS50YXJnZXQsIHRvZG9zLCAndGFzaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIFxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZU5ld0xpc3RGb3JtIChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgbmV3TGlzdEZvcm0gPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCduZXdMaXN0Rm9ybScpXHJcbiAgICBpbnRlcmFjdERPTSgpLnRvZ2dsZUVsZW1lbnREaXNwbGF5KG5ld0xpc3RGb3JtKVxyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ21haW5Db250YWluZXInKVxyXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdibHVyJylcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgaWYoKCFlLnRhcmdldC5jbG9zZXN0KCcubmV3LWxpc3QtZm9ybScpKSB8fCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbmNlbC1saXN0LWFkZCcpKXtcclxuICAgICAgICAgICAgaW50ZXJhY3RET00oKS5oaWRlKG5ld0xpc3RGb3JtKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vIGlmKCFlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnbmV3LWxpc3QtZm9ybScpIFxyXG4gICAgICAgIC8vICYmICFlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnYWRkLWxpc3QtZm9ybScpXHJcbiAgICAgICAgLy8gJiYgIWUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdsYWJlbC1pbnB1dC1uYW1lJylcclxuICAgICAgICAvLyAmJiAhZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2xhYmVsLWlucHV0LWRlc2NyaXB0aW9uJylcclxuICAgICAgICAvLyAmJiAhZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy1saXN0LWJ1dHRvbnMnKVxyXG4gICAgICAgIC8vICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy1saXN0LWZvcm0nKVxyXG4gICAgICAgIC8vICYmICFlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnbmV3LWxpc3QnKVxyXG4gICAgICAgIC8vIHx8IGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FuY2VsLWxpc3QtYWRkJykpe1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgICAgICAvLyAgICAgaW50ZXJhY3RET00oKS5oaWRlKG5ld0xpc3RGb3JtKVxyXG4gICAgICAgIC8vICAgICAvLyBuZXdUYXNrLnJlbW92ZSgpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSlcclxufSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiXHJcbmltcG9ydCBmb3JtYXQgZnJvbSBcImRhdGUtZm5zL2Zvcm1hdFwiXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVOZXdUYXNrRm9ybSAoKXtcclxuICAgIGNvbnN0IG9wZW5UYXNrRm9ybSA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ29wZW5UYXNrRm9ybScpXHJcbiAgICBjb25zdCBuZXdUYXNrID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbmV3VGFzaycpXHJcbiAgICBvcGVuVGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaW50ZXJhY3RET00oKS50b2dnbGVFbGVtZW50RGlzcGxheShuZXdUYXNrLCAnZ3JpZCcpO1xyXG4gICAgICAgIH0sIDIwMCkgICBcclxuICAgIH0pXHJcbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdkdWVEYXRlSW5wdXQnKVxyXG4gICAgY29uc3QgZGF0ZVBpY2tlciA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCd3Yy1kYXRlcGlja2VyJywgJ25ldy1kdWUtZGF0ZScsICdkYXRlcGlja2VyJylcclxuICAgIGR1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgY29uc3QgeyB0b3AsIGxlZnQsIHdpZHRoIH0gPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gZm9ybWF0KG5ldyBEYXRlKCksIFwiUFwiKVxyXG4gICAgICAgIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKCdzdGFydC1kYXRlJywgYCR7Y3VycmVudERhdGV9YClcclxuICAgICAgICBkYXRlUGlja2VyLnZhbHVlID0gbmV3IERhdGUoYCR7Y3VycmVudERhdGUucmVwbGFjZUFsbCgnLScsICcvJyl9YClcclxuXHJcbiAgICAgICAgZGF0ZVBpY2tlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgICAgICBkYXRlUGlja2VyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICBkYXRlUGlja2VyLnN0eWxlLnRvcCA9IGAke3RvcCArIDI2fXB4YDtcclxuICAgICAgICBkYXRlUGlja2VyLnN0eWxlLmxlZnQgPSBgJHtsZWZ0IC0oMjM2LXdpZHRoKX1weGA7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkYXRlUGlja2VyKVxyXG4gICAgICAgIGRhdGVQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0RGF0ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVwaWNrZWQgPSBldmVudC5kZXRhaWxcclxuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnRleHRDb250ZW50ID0gZGF0ZXBpY2tlZFxyXG4gICAgICAgICAgICBkdWVEYXRlSW5wdXQudmFsdWUgPSBkYXRlcGlja2VkXHJcbiAgICAgICAgICAgIGRhdGVQaWNrZXIucmVtb3ZlKClcclxuICAgICAgICAgIH0pO1xyXG4gICAgfSlcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgICAgIC8vIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICBpZighZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ25ldy10YXNrJykgXHJcbiAgICAgICAgJiYgIWUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGVuLXRhc2stZm9ybScpIFxyXG4gICAgICAgICYmICFlLnRhcmdldC5jbG9zZXN0KCcubmV3LWR1ZS1kYXRlJykpe1xyXG4gICAgICAgICAgICBpbnRlcmFjdERPTSgpLmhpZGUobmV3VGFzaylcclxuICAgICAgICAgICAgZGF0ZVBpY2tlci5yZW1vdmUoKVxyXG4gICAgICAgIH0gXHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlPT57XHJcbiAgICAgICAgaWYoIWUudGFyZ2V0LmNsb3Nlc3QoJy5uZXctZHVlLWRhdGUnKSl7XHJcbiAgICAgICAgICAgIGRhdGVQaWNrZXIucmVtb3ZlKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRUb0xvY2FsU3RvcmFnZShhcnJheSwga2V5V29yZCkge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleVdvcmQsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XHJcbiAgfVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2Uoa2V5V29yZCkge1xyXG4gICAgY29uc3QgcmVmZXJlbmNlID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleVdvcmQpO1xyXG4gICAgLy8gaWYgcmVmZXJlbmNlIGV4aXN0c1xyXG4gICAgaWYgKHJlZmVyZW5jZSkge1xyXG4gICAgICAvLyBjb252ZXJ0cyBiYWNrIHRvIGFycmF5IGFuZCBzdG9yZSBpdCBpbiB0b2RvcyBhcnJheVxyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShyZWZlcmVuY2UpO1xyXG4gICAgLy8gICBkaXNwbGF5VGFza3ModG9kb3MpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gW11cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU2F2ZUxvZ2ljKHRvZG9zLCBsaXN0cyl7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpXHJcbiAgICBjb25zdCBwYXJzZWRUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykgfHwgW10pXHJcbiAgICBjb25zb2xlLmxvZyhwYXJzZWRUb2RvcylcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBhZGRUb0xvY2FsU3RvcmFnZSwgZ2V0RnJvbUxvY2FsU3RvcmFnZSwgaGFuZGxlU2F2ZUxvZ2ljIH0iLCJpbXBvcnQgZm9ybWF0ICBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCJcclxuXHJcbmNvbnN0IGludGVyYWN0RE9NID0gZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250ZW50JylcclxuXHJcblxyXG4gICAgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkID0gZnVuY3Rpb24odHlwZSwgY2xhc3NOYW1lLCBpZE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpXHJcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGAke2NsYXNzTmFtZX1gKVxyXG4gICAgICAgIGVsZW1lbnQuaWQgPSBgJHtpZE5hbWV9YFxyXG4gICAgICAgIHJldHVybiBlbGVtZW50XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaG9va0RPTWVsZW1lbnQgPSBmdW5jdGlvbiAoaWROYW1lKXtcclxuICAgICAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aWROYW1lfWApXHJcbiAgICAgICAgcmV0dXJuIGVsZW1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzID0gZnVuY3Rpb24oY2xhc3NOYW1lKXtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y2xhc3NOYW1lfWApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uKGlkTmFtZSl7XHJcbiAgICAgICAgcmV0dXJuIGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoaWROYW1lKS52YWx1ZVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZUVsZW1lbnREaXNwbGF5ID0gZnVuY3Rpb24oZWxlbWVudCwgZGlzcGxheVZhbHVlKXtcclxuICAgICAgICBpZihhcmd1bWVudHMubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSBkaXNwbGF5VmFsdWUgPyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgOiBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5VmFsdWVcclxuICAgICAgICB9IGVsc2UgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMSl7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9PSAnZmxleCcgPyBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgOiBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYoZWxlbWVudC5zdHlsZS5kaXNwbGF5ID09ICdmbGV4Jyl7XHJcbiAgICAgICAgLy8gICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgIFxyXG5cclxuICAgIGNvbnN0IGhpZGUgPSBmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93ID0gZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBvYmosIGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHRhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLXRhc2tzJywgYHRhc2ske2luZGV4fWApXHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tc3RhdHVzJywgYHN0YXR1cyR7aW5kZXh9YClcclxuICAgICAgICBsZXQgbGlzdCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tbGlzdHMnLCBgbGlzdCR7aW5kZXh9YClcclxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLXByaW9yaXR5JywgYHByaW9yaXR5JHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBkdWVEYXRlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1kdWUtZGF0ZScsIGBkdWVEYXRlJHtpbmRleH1gKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0dXMpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKVxyXG4gICAgICAgIHRhc2sudGV4dENvbnRlbnQgPSBgJHtvYmoudGFza31gXHJcbiAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gYCR7b2JqLnN0YXR1c31gXHJcbiAgICAgICAgbGlzdC50ZXh0Q29udGVudCA9IGAke29iai5saXN0fWBcclxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGAke29iai5wcmlvcml0eX1gXHJcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdChuZXcgRGF0ZShvYmouZHVlRGF0ZS5yZXBsYWNlQWxsKCctJywgJy8nKSksIFwiTU1NIGRkJywnIHl5XCIpfWBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRMaXN0RWxlbWVudGFuZERlZmluZUNvbnRlbnQgPSBmdW5jdGlvbihjb250YWluZXIsIG9iaiwgaW5kZXgpe1xyXG4gICAgICAgIGxldCBsaXN0ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnbGlzdC1pdGVtJywgYGxpc3Qke2luZGV4fWApXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXHJcbiAgICAgICAgbGlzdC50ZXh0Q29udGVudCA9IGAke29iai5saXN0TmFtZX1gXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGdlbmVyYXRlTGlzdE9wdGlvbnMgPSBmdW5jdGlvbiAoe3RvcCwgbGVmdH0sIGFycmF5LCBwcm9wZXJ0eSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCBgY2hhbmdlLSR7cHJvcGVydHl9YCwgYGNoYW5nZSR7cHJvcGVydHl9SWRgKVxyXG4gICAgICAgIC8vIGNvbnN0IGJ1dHRvbnMgPSBbJ3RvLWRvJywgJ2RvaW5nJywgJ2RvbmUnLCAnd29udCBkbyddO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBhcnJheTtcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCBgY2hhbmdlLSR7cHJvcGVydHl9LWJ1dHRvbmAsIGAke3Byb3BlcnR5fWNoYW5nZSR7YnV0dG9ucy5pbmRleE9mKGJ1dHRvbil9I2lkYClcclxuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQudmFsdWUgPSBidXR0b247XHJcbiAgICAgICAgICBidXR0b25FbGVtZW50LnRleHRDb250ZW50ID0gYnV0dG9uO1xyXG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICBcclxuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgOyBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtUmVzZXQgPSBmdW5jdGlvbihmb3JtSWQpe1xyXG4gICAgY29uc3QgZm9ybSA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoYCR7Zm9ybUlkfWApXHJcbiAgICBmb3JtLnJlc2V0KCkgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIG1haW5Db250ZW50LCBcclxuICAgICAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQsIFxyXG4gICAgICAgIGhvb2tET01lbGVtZW50LCBcclxuICAgICAgICByZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzLCBcclxuICAgICAgICBnZXRJbnB1dFZhbHVlLCBcclxuICAgICAgICBhcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudCxcclxuICAgICAgICBhcHBlbmRMaXN0RWxlbWVudGFuZERlZmluZUNvbnRlbnQsIFxyXG4gICAgICAgIHRvZ2dsZUVsZW1lbnREaXNwbGF5LFxyXG4gICAgICAgIGhpZGUsXHJcbiAgICAgICAgc2hvdyxcclxuICAgICAgICBnZW5lcmF0ZUxpc3RPcHRpb25zLFxyXG4gICAgICAgIGZvcm1SZXNldCBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJhY3RET00iLCJpbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydEJ5VGl0bGUoZWxlbWVudCwgdG9kb3MsIHRpdGxlKXtcclxuICAgIGNvbnN0IHNvcnRUeXBlID0gIGVsZW1lbnQudmFsdWVcclxuICAgIGxldCBzb3J0ZWRBcnJheVxyXG4gICAgc3dpdGNoIChzb3J0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0FscGhhYmV0aWNhbCc6XHJcbiAgICAgICAgICAgIHNvcnRlZEFycmF5ID0gdG9kb3Muc29ydCgoYSwgYikgPT4gYVt0aXRsZV0udG9Mb3dlckNhc2UoKSA+IGJbdGl0bGVdLnRvTG93ZXJDYXNlKCkgPyAxIDogLTEpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1JldmVyc2UgYWxwaGFiZXRpY2FsJzpcclxuICAgICAgICAgICAgc29ydGVkQXJyYXkgPSB0b2Rvcy5zb3J0KChhLCBiKSA9PiBhW3RpdGxlXS50b0xvd2VyQ2FzZSgpIDwgYlt0aXRsZV0udG9Mb3dlckNhc2UoKSA/IDEgOiAtMSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnTmV3ZXN0IHRvIG9sZGVzdCc6XHJcbiAgICAgICAgICAgIHNvcnRlZEFycmF5ID0gdG9kb3Muc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYVt0aXRsZV0pID4gbmV3IERhdGUoYlt0aXRsZV0pID8gMSA6IC0xKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdPbGRlc3QgdG8gbmV3ZXN0JzpcclxuICAgICAgICAgICAgc29ydGVkQXJyYXkgPSB0b2Rvcy5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhW3RpdGxlXSkgPCBuZXcgRGF0ZShiW3RpdGxlXSkgPyAxIDogLTEpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhzb3J0ZWRBcnJheSlcclxuICAgIFxyXG4gICAgZGlzcGxheVRhc2tzKHNvcnRlZEFycmF5KVxyXG59XHJcblxyXG4iLCJpbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiXHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuaW1wb3J0IHsgYWRkVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIGFkZFRvTG9jYWxTdG9yYWdlKHRvZG9zKSB7XHJcbi8vICAgICAvLyBjb252ZXIgdGhlIGFycmF5IHRvIHN0cmluZyB0aGVuIHN0b3JlIGl0LlxyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcclxuICAgXHJcbi8vICAgICBkaXNwbGF5VGFza3ModG9kb3MpO1xyXG4vLyAgIH1cclxuXHJcblxyXG5jb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4gdG9kby5vcmRlciA9IHRvZG9zLmluZGV4T2YodG9kbykpXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZSh0b2RvcywgJ3RvZG9zJylcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRlZmluZVRhc2tJZCAodG9kb3MpIHtcclxuICAgIHRvZG9zLmZvckVhY2goIHRvZG8gPT4geyBcclxuICAgICAgICB0b2RvLm9yZGVyID0gdG9kb3MuaW5kZXhPZih0b2RvKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVRhc2sgKGluZGV4LCB0YXNrVmFsdWUpIHtcclxuICAgIGxldCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvZG9zJylcclxuICAgIC8vIGNvbnN0IHRvZG8gPSBjcmVhdGVOZXdUYXNrKGAke3Rhc2tWYWx1ZX1gLCBgJHt0b2Rvc1tpbmRleF0uc3RhdHVzfWAsIGAke3RvZG9zW2luZGV4XS5saXN0fWAsIGAke3RvZG9zW2luZGV4XS5wcmlvcml0eX1gLCBgJHt0b2Rvc1tpbmRleF0uZHVlRGF0ZX1gLCB0b2RvcylcclxuICAgIC8vIGNvbnN0IHRvZG8gPSB0b2RvQ3JlYXRvcihgJHt0YXNrVmFsdWV9YCwgYCR7dG9kb3NbaW5kZXhdLnN0YXR1c31gLCBgJHt0b2Rvc1tpbmRleF0ubGlzdH1gLCBgJHt0b2Rvc1tpbmRleF0ucHJpb3JpdHl9YCwgYCR7dG9kb3NbaW5kZXhdLmR1ZURhdGV9YClcclxuICAgIFxyXG4gICAgLy8gdG9kb3Muc3BsaWNlKGluZGV4LCAxLCB0b2RvKVxyXG4gICAgY29uc3QgY29ycmVjdEluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5vcmRlciA9PSBpbmRleClcclxuICAgIHRvZG9zW2NvcnJlY3RJbmRleF0udGFzayA9IGAke3Rhc2tWYWx1ZX1gXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZSh0b2RvcywgJ3RvZG9zJylcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeVN0YXR1cyAoaW5kZXgsIHN0YXR1c1ZhbHVlKSB7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICAvLyBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dG9kb3NbaW5kZXhdLnRhc2t9YCwgYCR7c3RhdHVzVmFsdWV9YCwgYCR7dG9kb3NbaW5kZXhdLmxpc3R9YCwgYCR7dG9kb3NbaW5kZXhdLnByaW9yaXR5fWAsIGAke3RvZG9zW2luZGV4XS5kdWVEYXRlfWApXHJcbiAgICBjb25zdCBjb3JyZWN0SW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm9yZGVyID09IGluZGV4KVxyXG4gICAgLy8gdG9kb3Muc3BsaWNlKGluZGV4LCAxLCB0b2RvKVxyXG4gICAgdG9kb3NbY29ycmVjdEluZGV4XS5zdGF0dXMgPSBgJHtzdGF0dXNWYWx1ZX1gXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZSh0b2RvcywgJ3RvZG9zJylcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5UHJpb3JpdHkgKGluZGV4LCBwcmlvcml0eVZhbHVlKSB7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICAvLyBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dG9kb3NbaW5kZXhdLnRhc2t9YCwgYCR7dG9kb3NbaW5kZXhdLnN0YXR1c31gICwgYCR7dG9kb3NbaW5kZXhdLmxpc3R9YCwgYCR7cHJpb3JpdHlWYWx1ZX1gLCBgJHt0b2Rvc1tpbmRleF0uZHVlRGF0ZX1gKVxyXG4gICAgY29uc3QgY29ycmVjdEluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5vcmRlciA9PSBpbmRleClcclxuICAgIC8vIHRvZG9zLnNwbGljZShpbmRleCwgMSwgdG9kbylcclxuICAgIHRvZG9zW2NvcnJlY3RJbmRleF0ucHJpb3JpdHkgPSBgJHtwcmlvcml0eVZhbHVlfWBcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKHRvZG9zLCAndG9kb3MnKVxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb2RpZnlMaXN0IChpbmRleCwgbGlzdFZhbHVlKSB7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCd0b2RvcycpXHJcbiAgICAvLyBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dG9kb3NbaW5kZXhdLnRhc2t9YCwgYCR7dG9kb3NbaW5kZXhdLnN0YXR1c31gICwgYCR7bGlzdFZhbHVlfWAsIGAke3RvZG9zW2luZGV4XS5wcmlvcml0eX1gLCBgJHt0b2Rvc1tpbmRleF0uZHVlRGF0ZX1gKVxyXG4gICAgY29uc3QgY29ycmVjdEluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5vcmRlciA9PSBpbmRleClcclxuICAgIC8vIHRvZG9zLnNwbGljZShpbmRleCwgMSwgdG9kbylcclxuICAgIHRvZG9zW2NvcnJlY3RJbmRleF0ubGlzdCA9IGAke2xpc3RWYWx1ZX1gXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZSh0b2RvcywgJ3RvZG9zJylcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeUR1ZURhdGUgKGluZGV4LCBkdWVEYXRlVmFsdWUpe1xyXG4gICAgbGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgY29uc3QgY29ycmVjdEluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5vcmRlciA9PSBpbmRleClcclxuICAgIHRvZG9zW2NvcnJlY3RJbmRleF0uZHVlRGF0ZSA9IGAke2R1ZURhdGVWYWx1ZX1gXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZSh0b2RvcywgJ3RvZG9zJylcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuZnVuY3Rpb24gdG9kb0NyZWF0b3IodGFzaywgc3RhdHVzLCBsaXN0LCBwcmlvcml0eSwgZHVlRGF0ZSl7XHJcbiAgICBsZXQgdG9kbyA9IHtcclxuICAgICAgICB0YXNrLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBsaXN0LFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgb3JkZXI6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0b2RvKVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBjcmVhdGVOZXdUYXNrID0gKHRhc2ssIHN0YXR1cywgbGlzdCwgcHJpb3JpdHksIGR1ZURhdGUpID0+IHtcclxuICAgIGNvbnN0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgLy8gZGlzcGxheVRhc2tzKHRvZG9zKVxyXG4gICAgY29uc29sZS5sb2codG9kb3MpXHJcbiAgICBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IodGFzaywgc3RhdHVzLCBsaXN0LCBwcmlvcml0eSwgZHVlRGF0ZSlcclxuICAgIC8vIGNvbnN0IG5ld1RvZG9zID0gdG9kb3NcclxuICAgIHRvZG9zLnB1c2godG9kbylcclxuICAgIHRvZG8ub3JkZXIgPSB0b2Rvcy5sZW5ndGggLSAxXHJcbiAgICBjb25zb2xlLmxvZyh0b2RvcylcclxuICAgIFxyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UodG9kb3MsICd0b2RvcycpXHJcbiAgICBcclxuICAgIC8vIGNvbnN0IHRlbXBPYmogPSBuZXdUb2Rvc1tuZXdUb2Rvcy5pbmRleE9mKHRvZG8pXVxyXG4gICAgLy8gY29uc29sZS5sb2codGVtcE9iailcclxuICAgIC8vIGNvbnN0IHRlbXBUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykgfHwgJ1tdJylcclxuICAgIFxyXG4gICAgLy8gaWYodGVtcFRvZG9zLmluZGV4T2YodGVtcE9iaikgPT0gLTEpe1xyXG4gICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KG5ld1RvZG9zKSlcclxuICAgIC8vIH1cclxuICAgIHJldHVybiB0b2RvXHJcbn0gXHJcblxyXG5leHBvcnQgeyBkZWZpbmVUYXNrSWQsIGRlbGV0ZVRhc2ssIG1vZGlmeVRhc2ssIG1vZGlmeVN0YXR1cywgbW9kaWZ5UHJpb3JpdHksIG1vZGlmeUxpc3QsIG1vZGlmeUR1ZURhdGUsIHRvZG9DcmVhdG9yLCBjcmVhdGVOZXdUYXNrIH0iLCJjb25zdCBCVUlMRCA9IHtcbiAgICBhbGxSZW5kZXJGbjogZmFsc2UsXG4gICAgY21wRGlkTG9hZDogdHJ1ZSxcbiAgICBjbXBEaWRVbmxvYWQ6IGZhbHNlLFxuICAgIGNtcERpZFVwZGF0ZTogdHJ1ZSxcbiAgICBjbXBEaWRSZW5kZXI6IHRydWUsXG4gICAgY21wV2lsbExvYWQ6IHRydWUsXG4gICAgY21wV2lsbFVwZGF0ZTogdHJ1ZSxcbiAgICBjbXBXaWxsUmVuZGVyOiB0cnVlLFxuICAgIGNvbm5lY3RlZENhbGxiYWNrOiB0cnVlLFxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrOiB0cnVlLFxuICAgIGVsZW1lbnQ6IHRydWUsXG4gICAgZXZlbnQ6IHRydWUsXG4gICAgaGFzUmVuZGVyRm46IHRydWUsXG4gICAgbGlmZWN5Y2xlOiB0cnVlLFxuICAgIGhvc3RMaXN0ZW5lcjogdHJ1ZSxcbiAgICBob3N0TGlzdGVuZXJUYXJnZXRXaW5kb3c6IHRydWUsXG4gICAgaG9zdExpc3RlbmVyVGFyZ2V0RG9jdW1lbnQ6IHRydWUsXG4gICAgaG9zdExpc3RlbmVyVGFyZ2V0Qm9keTogdHJ1ZSxcbiAgICBob3N0TGlzdGVuZXJUYXJnZXRQYXJlbnQ6IGZhbHNlLFxuICAgIGhvc3RMaXN0ZW5lclRhcmdldDogdHJ1ZSxcbiAgICBtZW1iZXI6IHRydWUsXG4gICAgbWV0aG9kOiB0cnVlLFxuICAgIG1vZGU6IHRydWUsXG4gICAgb2JzZXJ2ZUF0dHJpYnV0ZTogdHJ1ZSxcbiAgICBwcm9wOiB0cnVlLFxuICAgIHByb3BNdXRhYmxlOiB0cnVlLFxuICAgIHJlZmxlY3Q6IHRydWUsXG4gICAgc2NvcGVkOiB0cnVlLFxuICAgIHNoYWRvd0RvbTogdHJ1ZSxcbiAgICBzbG90OiB0cnVlLFxuICAgIGNzc0Fubm90YXRpb25zOiB0cnVlLFxuICAgIHN0YXRlOiB0cnVlLFxuICAgIHN0eWxlOiB0cnVlLFxuICAgIHN2ZzogdHJ1ZSxcbiAgICB1cGRhdGFibGU6IHRydWUsXG4gICAgdmRvbUF0dHJpYnV0ZTogdHJ1ZSxcbiAgICB2ZG9tWGxpbms6IHRydWUsXG4gICAgdmRvbUNsYXNzOiB0cnVlLFxuICAgIHZkb21GdW5jdGlvbmFsOiB0cnVlLFxuICAgIHZkb21LZXk6IHRydWUsXG4gICAgdmRvbUxpc3RlbmVyOiB0cnVlLFxuICAgIHZkb21SZWY6IHRydWUsXG4gICAgdmRvbVByb3BPckF0dHI6IHRydWUsXG4gICAgdmRvbVJlbmRlcjogdHJ1ZSxcbiAgICB2ZG9tU3R5bGU6IHRydWUsXG4gICAgdmRvbVRleHQ6IHRydWUsXG4gICAgd2F0Y2hDYWxsYmFjazogdHJ1ZSxcbiAgICB0YXNrUXVldWU6IHRydWUsXG4gICAgaG90TW9kdWxlUmVwbGFjZW1lbnQ6IGZhbHNlLFxuICAgIGlzRGVidWc6IGZhbHNlLFxuICAgIGlzRGV2OiBmYWxzZSxcbiAgICBpc1Rlc3Rpbmc6IGZhbHNlLFxuICAgIGh5ZHJhdGVTZXJ2ZXJTaWRlOiBmYWxzZSxcbiAgICBoeWRyYXRlQ2xpZW50U2lkZTogZmFsc2UsXG4gICAgbGlmZWN5Y2xlRE9NRXZlbnRzOiBmYWxzZSxcbiAgICBsYXp5TG9hZDogZmFsc2UsXG4gICAgcHJvZmlsZTogZmFsc2UsXG4gICAgc2xvdFJlbG9jYXRpb246IHRydWUsXG4gICAgYXBwZW5kQ2hpbGRTbG90Rml4OiBmYWxzZSxcbiAgICBjbG9uZU5vZGVGaXg6IGZhbHNlLFxuICAgIGh5ZHJhdGVkQXR0cmlidXRlOiBmYWxzZSxcbiAgICBoeWRyYXRlZENsYXNzOiB0cnVlLFxuICAgIHNhZmFyaTEwOiBmYWxzZSxcbiAgICBzY3JpcHREYXRhT3B0czogZmFsc2UsXG4gICAgc2NvcGVkU2xvdFRleHRDb250ZW50Rml4OiBmYWxzZSxcbiAgICBzaGFkb3dEb21TaGltOiBmYWxzZSxcbiAgICBzbG90Q2hpbGROb2Rlc0ZpeDogZmFsc2UsXG4gICAgaW52aXNpYmxlUHJlaHlkcmF0aW9uOiB0cnVlLFxuICAgIHByb3BCb29sZWFuOiB0cnVlLFxuICAgIHByb3BOdW1iZXI6IHRydWUsXG4gICAgcHJvcFN0cmluZzogdHJ1ZSxcbiAgICBjc3NWYXJTaGltOiBmYWxzZSxcbiAgICBjb25zdHJ1Y3RhYmxlQ1NTOiB0cnVlLFxuICAgIGNtcFNob3VsZFVwZGF0ZTogdHJ1ZSxcbiAgICBkZXZUb29sczogZmFsc2UsXG4gICAgZHluYW1pY0ltcG9ydFNoaW06IGZhbHNlLFxuICAgIHNoYWRvd0RlbGVnYXRlc0ZvY3VzOiB0cnVlLFxuICAgIGluaXRpYWxpemVOZXh0VGljazogZmFsc2UsXG4gICAgYXN5bmNMb2FkaW5nOiBmYWxzZSxcbiAgICBhc3luY1F1ZXVlOiBmYWxzZSxcbiAgICB0cmFuc2Zvcm1UYWdOYW1lOiBmYWxzZSxcbiAgICBhdHRhY2hTdHlsZXM6IHRydWUsXG59O1xuY29uc3QgRW52ID0ge307XG5jb25zdCBOQU1FU1BBQ0UgPSAvKiBkZWZhdWx0ICovICdhcHAnO1xuXG5leHBvcnQgeyBCVUlMRCwgRW52LCBOQU1FU1BBQ0UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLm1haW4uanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInRvZG8tbGlzdDpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvX2xpc3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdG9kb19saXN0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiXHJcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCJcclxuaW1wb3J0IHsgdG9kb0NyZWF0b3IgfSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiXHJcbmltcG9ydCB7IG1vZGlmeVN0YXR1cyB9IGZyb20gXCIuL3RvZG9DcmVhdG9yXCJcclxuaW1wb3J0IGNvbnRyb2xUYXNrQ2hhbmdlIGZyb20gXCIuL2NvbnRyb2xUYXNrQ2hhbmdlXCJcclxuaW1wb3J0IGNvbnRyb2xTdGF0dXNDaGFuZ2UgZnJvbSBcIi4vY29udHJvbFN0YXR1c0NoYW5nZVwiXHJcbmltcG9ydCBjb250cm9sUHJpb3JpdHlDaGFuZ2UgZnJvbSBcIi4vY29udHJvbFByaW9yaXR5Q2hhbmdlXCJcclxuaW1wb3J0IGNvbnRyb2xEdWVEYXRlQ2hhbmdlIGZyb20gXCIuL2NvbnRyb2xEdWVEYXRlQ2hhbmdlXCJcclxuaW1wb3J0IHsgY29udHJvbExpc3RDaGFuZ2UgfSBmcm9tIFwiLi9jb250cm9sTGlzdENoYW5nZVwiXHJcbmltcG9ydCB7IHVwZGF0ZUxpc3RPcHRpb25zIH0gZnJvbSBcIi4vY29udHJvbExpc3RDaGFuZ2VcIlxyXG5pbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTGlzdFwiXHJcbmltcG9ydCB7IGNyZWF0ZU5ld0xpc3QgfSBmcm9tIFwiLi9jcmVhdGVMaXN0XCJcclxuaW1wb3J0IHsgZGVsZXRlTGlzdCB9IGZyb20gXCIuL2NyZWF0ZUxpc3RcIlxyXG5pbXBvcnQgZGlzcGxheUxpc3RzIGZyb20gXCIuL2Rpc3BsYXlMaXN0c1wiXHJcbmltcG9ydCBoYW5kbGVOZXdMaXN0Rm9ybSBmcm9tIFwiLi9oYW5kbGVOZXdMaXN0Rm9ybVwiXHJcbmltcG9ydCBoYW5kbGVOZXdUYXNrRm9ybSBmcm9tIFwiLi9oYW5kbGVOZXdUYXNrRm9ybVwiXHJcbmltcG9ydCBmaWx0ZXJCeUxpc3QgZnJvbSBcIi4vZmlsdGVyQnlMaXN0XCJcclxuaW1wb3J0IHsgY3JlYXRlTmV3VGFzayB9IGZyb20gXCIuL3RvZG9DcmVhdG9yXCJcclxuaW1wb3J0IHsgZGVmaW5lVGFza0lkIH0gZnJvbSBcIi4vdG9kb0NyZWF0b3JcIlxyXG5pbXBvcnQgaGFuZGxlRmlsdGVyT3JkZXIgZnJvbSBcIi4vaGFuZGxlRmlsdGVyT3JkZXJcIlxyXG5pbXBvcnQgaGFuZGxlU2F2ZUxvZ2ljIGZyb20gXCIuL2hhbmRsZVNhdmVMb2dpY1wiXHJcbmltcG9ydCB7IGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiXHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIlxyXG5pbXBvcnQgeyBoYW5kbGVFZmZlY3RzIH0gZnJvbSBcIi4vaGFuZGxlRWZmZWN0c1wiXHJcblxyXG5pbXBvcnQgYXJyb3dSaWdodCAgZnJvbSAnLi9yaWdodC5wbmcnXHJcblxyXG5pbXBvcnQgeyBXY0RhdGVwaWNrZXIgfSBmcm9tIFwid2MtZGF0ZXBpY2tlci9kaXN0L2NvbXBvbmVudHMvd2MtZGF0ZXBpY2tlclwiO1xyXG4vLyBpbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvd2MtZGF0ZXBpY2tlci9kaXN0L3RoZW1lcy9kYXJrLmNzc1wiXHJcblxyXG5cclxuLy8gY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpIHx8ICdbXScpXHJcbi8vIGNvbnN0IHRvZG9zID0gW11cclxubGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKSB8fCBbXVxyXG5sZXQgbGlzdHMgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKCdsaXN0cycpIHx8IFtdXHJcbi8vIGNvbnN0IGxpc3RzID0gW11cclxuXHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbi8vICAgICBjb25zdCByZWZlcmVuY2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcclxuLy8gICAgIC8vIGlmIHJlZmVyZW5jZSBleGlzdHNcclxuLy8gICAgIGlmIChyZWZlcmVuY2UpIHtcclxuLy8gICAgICAgLy8gY29udmVydHMgYmFjayB0byBhcnJheSBhbmQgc3RvcmUgaXQgaW4gdG9kb3MgYXJyYXlcclxuLy8gICAgICAgdG9kb3MgPSBKU09OLnBhcnNlKHJlZmVyZW5jZSk7XHJcbiAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5kaXNwbGF5VGFza3ModG9kb3MpXHJcblxyXG4vLyBjb25zdCBkZWxldGVUYXNrID0gaW5kZXggPT4ge1xyXG4vLyAgICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKVxyXG4vLyAgICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG4vLyB9XHJcblxyXG5cclxuLy8gY29uc3QgdG9kbzEgPSBjcmVhdGVOZXdUYXNrKCd3YWxrIHdpdGggTWFuY2hpbmhhJywgJ3RvLWRvJywgJ2RhaWx5JywgJ2hpZ2gnLCAnMDQvMDMvMjAyMycsIHRvZG9zKVxyXG5cclxuLy8gY29uc3QgdG9kbzEgPSBjcmVhdGVOZXdUYXNrKCd3YWxrIHdpdGggTWFuY2hpbmhhJywgJ3RvLWRvJywgJ2RhaWx5JywgJ2hpZ2gnLCAnMjAyMy0wNC0wMycsIHRvZG9zKVxyXG4vLyBjb25zdCB0b2RvMiA9IGNyZWF0ZU5ld1Rhc2soJ3BsYXkgUmF2ZW5kYXduJywgJ3RvLWRvJywgJ2RhaWx5JywgJ2hpZ2gnLCAnMjAyMy0wNC0wMycsIHRvZG9zKVxyXG4vLyBjb25zdCB0b2RvMyA9IGNyZWF0ZU5ld1Rhc2soJ3N0dWR5IG1hdGgnLCAndG8tZG8nLCAnZGFpbHknLCAnbWVkaXVtJywgJzIwMjMtMDYtMDQnLCB0b2RvcylcclxuLy8gY29uc3QgdG9kbzQgPSBjcmVhdGVOZXdUYXNrKCdwbGF5IGd1aXRhcicsICdkb2luZycsICdnZW5lcmFsJywgJ2xvdycsICcyMDIzLTA3LTAyJywgdG9kb3MpXHJcbi8vIGNvbnN0IHRvZG81ID0gY3JlYXRlTmV3VGFzaygnbG9vayBmb3IgYmVhdmVycycsICd0by1kbycsICdnZW5lcmFsJywgJ2hpZ2gnLCAnMjAyMy0wNC0xMicsIHRvZG9zKVxyXG4vLyBjb25zdCB0b2RvNiA9IGNyZWF0ZU5ld1Rhc2soJ3RyeSB0byBjYXRjaCBhIHNxdWlycmVsJywgJ3RvLWRvJywgJ2dlbmVyYWwnLCAnbG93JywgJzIwMjMtMTItMDYnLCB0b2RvcylcclxuLy8gY29uc3QgdG9kbzcgPSBjcmVhdGVOZXdUYXNrKCd3YXRjaCB0dicsICdkb2luZycsICdOZW1vJywgJ21lZGl1bScsICcyMDIyLTA1LTA1JywgdG9kb3MpXHJcbi8vIGNvbnN0IHRvZG84ID0gY3JlYXRlTmV3VGFzaygndGFrZSBhIHNob3dlcicsICd0by1kbycsICdQcm9qZWN0JywgJ2hpZ2gnLCAnMjAyNC0wNS0xNycsIHRvZG9zKVxyXG4vLyBjb25zdCB0b2RvOSA9IGNyZWF0ZU5ld1Rhc2soJ2Jvcm4nLCAnZG9uZScsICdOZW1vJywgJ2hpZ2gnLCAnMTk5My0wMS0wNCcsIHRvZG9zKVxyXG4vLyBjb25zdCB0b2RvMTAgPSBjcmVhdGVOZXdUYXNrKCdncmFkdWF0ZSBhdCBmYW5zaGF3ZScsICd3b250IGRvJywgJ1Byb2plY3QnLCAnbWVkaXVtJywgJzIwMjMtMTItMTEnLCB0b2RvcylcclxuXHJcbi8vIHRvZG9zLnB1c2godG9kbzEpXHJcbi8vIHRvZG9zLnB1c2godG9kbzIpXHJcbi8vIHRvZG9zLnB1c2godG9kbzMpXHJcbi8vIHRvZG9zLnB1c2godG9kbzQpXHJcbi8vIHRvZG9zLnB1c2godG9kbzUpXHJcbi8vIHRvZG9zLnB1c2godG9kbzYpXHJcbi8vIHRvZG9zLnB1c2godG9kbzcpXHJcbi8vIHRvZG9zLnB1c2godG9kbzgpXHJcbi8vIHRvZG9zLnB1c2godG9kbzkpXHJcbi8vIHRvZG9zLnB1c2godG9kbzEwKVxyXG4vLyBjb25zb2xlLmxvZyh0b2RvcylcclxuXHJcbi8vIHRvZG9zLmZvckVhY2godG9kbyA9PiB0b2RvLm9yZGVyID0gdG9kb3MuaW5kZXhPZih0b2RvKSlcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4vLyAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHRvZG8ub3JkZXIgPSB0b2Rvcy5pbmRleE9mKHRvZG8pKVxyXG4vLyB9KVxyXG5cclxuXHJcbmNvbnN0IGFkZFRhc2sgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdhZGRUYXNrJylcclxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbiAgICBjb25zdCBuZXdUYXNrID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbmV3VGFzaycpXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGludGVyYWN0RE9NKCkuaGlkZShuZXdUYXNrKVxyXG4gICAgYWRkVGFza3MoKVxyXG4gICAgLy8gZGlzcGxheVRhc2tzKHRvZG9zKVxyXG59KVxyXG5cclxuXHJcbmNvbnN0IGFkZFRhc2tzID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCB0YXNrID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCd0YXNrSW5wdXQnKVxyXG4gICAgbGV0IHN0YXR1cyA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnc3RhdHVzSW5wdXQnKVxyXG4gICAgbGV0IGxpc3QgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ2xpc3RJbnB1dCcpXHJcbiAgICBsZXQgcHJpb3JpdHkgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ3ByaW9yaXR5SW5wdXQnKVxyXG4gICAgbGV0IGR1ZURhdGUgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ2R1ZURhdGVJbnB1dCcpXHJcbiAgICAvLyBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dGFza31gLGAke3N0YXR1c31gLGAke2xpc3R9YCxgJHtwcmlvcml0eX1gLGAke2R1ZURhdGV9YClcclxuICAgIGNyZWF0ZU5ld1Rhc2soYCR7dGFza31gLGAke3N0YXR1c31gLGAke2xpc3R9YCxgJHtwcmlvcml0eX1gLGAke2R1ZURhdGV9YClcclxuICAgIGNvbnN0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgndG9kb3MnKVxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG4gICAgY29uc29sZS5sb2codG9kb3MpXHJcbiAgICAvLyB0b2Rvcy5wdXNoKHRvZG8pXHJcbiAgICBpbnRlcmFjdERPTSgpLmZvcm1SZXNldCgnbmV3VGFzaycpXHJcbiAgICBoYW5kbGVFZmZlY3RzKClcclxufVxyXG5cclxuLy8gZGlzcGxheVRhc2tzKHRvZG9zKVxyXG5cclxuLy8gPT09PT09PT09PT09PT09IGVkaXQgdGFza3MgbG9naWMsIHNvb24gd2lsbCBiZSBhIG1vZHVsZVxyXG5jb25zdCB0b2Rvc1ZpZXcgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCd0b2Rvc1ZpZXcnKVxyXG50b2Rvc1ZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtdGFzaycpKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuaWQpXHJcbiAgICAgICAgZGVsZXRlVGFzayhlLnRhcmdldC5wYXJlbnROb2RlLmlkKVxyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tc3RhdHVzJykpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9ICtgJHtlLnRhcmdldC5pZH1gLnJlcGxhY2UoXCJzdGF0dXNcIiwgXCJcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICAvLyBoYW5kbGVTdGF0dXNDaGFuZ2UgKGUudGFyZ2V0LCBpbmRleClcclxuICAgICAgICBjb250cm9sU3RhdHVzQ2hhbmdlKGUudGFyZ2V0LCBpbmRleClcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLXByaW9yaXR5Jykpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcInByaW9yaXR5XCIsIFwiXCIpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgY29udHJvbFByaW9yaXR5Q2hhbmdlKGUudGFyZ2V0LCBpbmRleClcclxuICAgICAgICBcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjay10YXNrJykpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NsaWNrZWQnKVxyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKXtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlVGFzayhlLnRhcmdldClcclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgICAgIFxyXG5cclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLWxpc3RzJykpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcImxpc3RcIiwgXCJcIilcclxuICAgICAgICBjb250cm9sTGlzdENoYW5nZShlLnRhcmdldCwgaW5kZXgpXHJcbiAgICB9IGVsc2UgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLXRhc2tzJykpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcInRhc2tcIiwgXCJcIilcclxuICAgICAgICBjb250cm9sVGFza0NoYW5nZShlLnRhcmdldCwgaW5kZXgpXHJcbiAgICB9IGVsc2UgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLWR1ZS1kYXRlJykpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcImR1ZURhdGVcIiwgXCJcIilcclxuICAgICAgICBjb250cm9sRHVlRGF0ZUNoYW5nZShlLnRhcmdldCwgaW5kZXgpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIGVsc2Uge1xyXG4gICAgLy8gICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxuICAgIC8vIH1cclxufSk7XHJcbi8vID09PT09PT09PT09PT09PSBlZGl0IHRhc2tzIGxvZ2ljLCBzb29uIHdpbGwgYmUgYSBtb2R1bGVcclxuXHJcbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGU9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuLy8gfSlcclxuXHJcbmhhbmRsZU5ld1Rhc2tGb3JtKClcclxuXHJcblxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09IGxpc3QgYWRkIGxvZ2ljLCBzb29uIHdpbGwgYmUgYSBuZXcgbW9kdWxlICBcclxuXHJcblxyXG4vLyBjb25zdCBsaXN0MSA9IGNyZWF0ZUxpc3QoJ2dlbmVyYWwnKVxyXG4vLyBjb25zdCBsaXN0MiA9IGNyZWF0ZUxpc3QoJ05lbW8nKVxyXG4vLyBjb25zdCBsaXN0MyA9IGNyZWF0ZUxpc3QoJ1Byb2plY3QnKVxyXG4vLyBjb25zdCBsaXN0NCA9IGNyZWF0ZUxpc3QoJ2RhaWx5JylcclxuLy8gbGlzdHMucHVzaChsaXN0MSlcclxuLy8gbGlzdHMucHVzaChsaXN0MilcclxuLy8gbGlzdHMucHVzaChsaXN0MylcclxuLy8gbGlzdHMucHVzaChsaXN0NClcclxuLy8gY29uc29sZS5sb2cobGlzdHMubWFwKCBsaXN0ID0+IGxpc3QubGlzdE5hbWUpKVxyXG4vLyBkaXNwbGF5TGlzdHMobGlzdHMpXHJcblxyXG4vLyB1cGRhdGVMaXN0T3B0aW9ucyhsaXN0cylcclxuXHJcblxyXG5cclxuICBcclxuY29uc3QgbmV3TGlzdCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ25ld0xpc3QnKVxyXG5cclxubmV3TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgaGFuZGxlTmV3TGlzdEZvcm0oZSlcclxufSlcclxuXHJcblxyXG5jb25zdCBhZGROZXdMaXN0ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnYWRkTmV3TGlzdCcpXHJcblxyXG5jb25zdCBhZGRMaXN0ID0gZnVuY3Rpb24gKCl7XHJcbiAgICBsZXQgbGlzdE5hbWUgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ2xpc3ROYW1lJylcclxuICAgIGxldCBjb2xvciA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnbGlzdENvbG9yJylcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnbGlzdERlc2NyaXB0aW9uJylcclxuICAgIGNyZWF0ZU5ld0xpc3QoYCR7bGlzdE5hbWV9YCwgYCR7Y29sb3J9YCwgYCR7ZGVzY3JpcHRpb259YClcclxuICAgIGNvbnN0IGxpc3RzID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgnbGlzdHMnKVxyXG4gICAgZGlzcGxheUxpc3RzKGxpc3RzKVxyXG4gICAgdXBkYXRlTGlzdE9wdGlvbnMobGlzdHMpXHJcbiAgICBpbnRlcmFjdERPTSgpLmZvcm1SZXNldCgnYWRkTGlzdEZvcm0nKVxyXG4gICAgaGFuZGxlRWZmZWN0cygpXHJcbn1cclxuXHJcbmFkZE5ld0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4gICAgY29uc3QgbmV3TGlzdEZvcm0gPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCduZXdMaXN0Rm9ybScpXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGludGVyYWN0RE9NKCkuaGlkZShuZXdMaXN0Rm9ybSlcclxuICAgIGFkZExpc3QoKVxyXG4gICAgLy8gZGlzcGxheUxpc3RzKGxpc3RzKVxyXG4gICAgLy8gdXBkYXRlTGlzdE9wdGlvbnMobGlzdHMpXHJcbn0pXHJcblxyXG5kaXNwbGF5TGlzdHMobGlzdHMpXHJcbnVwZGF0ZUxpc3RPcHRpb25zKGxpc3RzKVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT0gbGlzdCBhZGQgbG9naWMsIHNvb24gd2lsbCBiZSBhIG5ldyBtb2R1bGVcclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT0gY2hlY2tib3ggJ2RvbmUnIGxvZ2ljXHJcbmZ1bmN0aW9uIGNvbXBsZXRlVGFzayhlbGVtZW50KSB7XHJcbiAgICBjb25zdCBpbmRleCA9ICtgJHtlbGVtZW50LmlkfWAucmVwbGFjZShcImNoZWNrdGFzayNcIiwgXCJcIilcclxuICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQpXHJcbiAgICBtb2RpZnlTdGF0dXMoaW5kZXgsICdkb25lJywgdG9kb3MpIFxyXG59XHJcbi8vID09PT09PT09PT09PT09PSBjaGVja2JveCAnZG9uZScgbG9naWNcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PSBmaWx0ZXIgdGFza3MgYnkgbGlzdFxyXG5cclxuY29uc3QgbGlzdHNWaWV3ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbGlzdHNWaWV3JylcclxuXHJcbmxpc3RzVmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpc3QtaXRlbScpKXtcclxuICAgICAgICBjb25zdCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ3RvZG9zJylcclxuICAgICAgICBjb25zdCBsaXN0cyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoJ2xpc3RzJylcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgICAgICBmaWx0ZXJCeUxpc3QoZS50YXJnZXQsIGxpc3RzLCB0b2RvcylcclxuICAgIH0gZWxzZSBpZihlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWxpc3QnKSl7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSArYCR7ZS50YXJnZXQucGFyZW50Tm9kZS5pZH1gLnJlcGxhY2UoXCJkZWxldGVMaXN0I1wiLCBcIlwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIGRlbGV0ZUxpc3QoaW5kZXgpXHJcbiAgICAgICAgaGFuZGxlRWZmZWN0cygpXHJcbiAgICB9XHJcbn0pXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT0gZmlsdGVyIHRhc2tzIGJ5IGxpc3RcclxuXHJcbi8vIGNvbnN0IHJlbW92ZUZpbHRlciA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ3JlbW92ZUZpbHRlcicpXHJcbi8vIHJlbW92ZUZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuLy8gICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4vLyAgICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG4vLyB9KVxyXG5cclxuXHJcbmhhbmRsZUZpbHRlck9yZGVyKGxpc3RzLCB0b2RvcylcclxuXHJcbmNvbnNvbGUubG9nKHRvZG9zKVxyXG5cclxuLy8gZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4vLyAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpXHJcbi8vIH0pXHJcblxyXG5cclxuLy8gZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBlID0+IHtcclxuLy8gICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlLWxpc3QtaW1nJykpe1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdlbnRlcmVkIScpXHJcbi8vICAgICAgICAgZS50YXJnZXQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInXHJcbi8vICAgICAgICAgZS50YXJnZXQuc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEuMSknXHJcbi8vICAgICB9XHJcbi8vIH0pXHJcblxyXG5oYW5kbGVFZmZlY3RzKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=