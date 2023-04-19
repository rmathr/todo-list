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
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_5__.getFromLocalStorage)()
    // const buttons = ['low', 'medium', 'high'];
    const correctIndex = todos.findIndex(item => item.order == index)
    const { top, left } = element.getBoundingClientRect()

    
    const datePicker = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('wc-datepicker', 'date-picker', 'datepicker')
    datePicker.classList.add('edit-due-date')
    const currentDate = todos[correctIndex].dueDate 
    datePicker.setAttribute('start-date', `${currentDate}`)
    // datePicker.setAttribute('value', `${Date('2024-01-04')}`)
    datePicker.value = new Date(`${currentDate.replaceAll('-', '/')}`)

    datePicker.style.position = 'absolute'
    datePicker.style.display = 'flex'
    datePicker.style.top = `${top}px`;
    datePicker.style.left = `${left}px`; 
    document.body.appendChild(datePicker);
    
    document.addEventListener('mousedown', e =>{
           datePicker.remove()
    })
    function handleDateChange(){
        datePicker.addEventListener('selectDate', function(event) {
            console.log(event)
            const datepicked = event.detail
            ;(0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyDueDate)(index, datepicked)
            datePicker.remove()
            // displayTasks(todos)
            console.log(todos)
        });
    }
    datePicker.addEventListener('mousedown', e => {
        e.preventDefault()
        e.stopPropagation()
        handleDateChange()
    })    
    
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




function controlListChange(element, index, lists, todos){
    
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
             (0,_todoCreator__WEBPACK_IMPORTED_MODULE_2__.modifyList)(index, `${e.target.value}`, todos)
            //  interactDOM().hide(changeStatus);
            changeList.remove()
             ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_1__["default"])(todos)  
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
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)()
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
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)()
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
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_3__.getFromLocalStorage)()
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
/* harmony export */   "modifyList": () => (/* binding */ modifyList)
/* harmony export */ });
/* harmony import */ var _displayLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayLists */ "./src/displayLists.js");


const lists = []


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


function displayLists(array){
    const listsView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hookDOMelement('listsView')
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().returnAllMatchingElements('lists').forEach(e => e.remove())
    // interactDOM().returnAllMatchingElements('delete-task').forEach(e => e.remove())
    for(let i = 0; i < array.length; i++){
        let container = (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().createElementWithClassAndId('section', 'lists', `list${i}`)
        // let checkTask = interactDOM().createElementWithClassAndId('button', 'check-task', `checktask#${i}`)
        // let deleteTask = interactDOM().createElementWithClassAndId('button', 'delete-task', `${i}`)
        // let deleteImage = interactDOM().createElementWithClassAndId('img', 'delete-image', 'deleteImage')
        // deleteImage.src = x
        // deleteTask.appendChild(deleteImage)
        // container.appendChild(checkTask)
        ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().appendListElementandDefineContent(container, array[i], i)
        listsView.appendChild(container)
        // container.appendChild(deleteTask)
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
        ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().toggleElementDisplay(newTask);
    })
    document.body.addEventListener('mousedown', e => {
        if(!e.target.parentNode.classList.contains('new-task') && !e.target.parentNode.classList.contains('open-task-form')){
            (0,_interactDom__WEBPACK_IMPORTED_MODULE_0__["default"])().hide(newTask)
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


function addToLocalStorage(array) {
    
    localStorage.setItem('todos', JSON.stringify(array));
   
    (0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(array);
  }


function getFromLocalStorage() {
    let todos
    const reference = localStorage.getItem('todos');
    // if reference exists
    if (reference) {
      // converts back to array and store it in todos array
      return todos = JSON.parse(reference);
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

    const toggleElementDisplay = function(element){
        if(element.style.display == 'flex'){
            element.style.display = 'none'
        } else {
            element.style.display = 'flex'
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
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)()
    todos.splice(index, 1)
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos)
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}


function defineTaskId (todos) {
    todos.forEach( todo => { 
        todo.order = todos.indexOf(todo)
    });
}

function modifyTask (index, taskValue) {
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)()
    // const todo = createNewTask(`${taskValue}`, `${todos[index].status}`, `${todos[index].list}`, `${todos[index].priority}`, `${todos[index].dueDate}`, todos)
    // const todo = todoCreator(`${taskValue}`, `${todos[index].status}`, `${todos[index].list}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    
    // todos.splice(index, 1, todo)
    const correctIndex = todos.findIndex(item => item.order == index)
    todos[correctIndex].task = `${taskValue}`
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos)
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}


function modifyStatus (index, statusValue) {
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)()
    // const todo = todoCreator(`${todos[index].task}`, `${statusValue}`, `${todos[index].list}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    const correctIndex = todos.findIndex(item => item.order == index)
    // todos.splice(index, 1, todo)
    todos[correctIndex].status = `${statusValue}`
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos)
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}

function modifyPriority (index, priorityValue) {
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)()
    // const todo = todoCreator(`${todos[index].task}`, `${todos[index].status}` , `${todos[index].list}`, `${priorityValue}`, `${todos[index].dueDate}`)
    const correctIndex = todos.findIndex(item => item.order == index)
    // todos.splice(index, 1, todo)
    todos[correctIndex].priority = `${priorityValue}`
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos)
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}

function modifyList (index, listValue, todos) {
    // const todo = todoCreator(`${todos[index].task}`, `${todos[index].status}` , `${listValue}`, `${todos[index].priority}`, `${todos[index].dueDate}`)
    const correctIndex = todos.findIndex(item => item.order == index)
    // todos.splice(index, 1, todo)
    todos[correctIndex].list = `${listValue}`
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__["default"])(todos)
}


function modifyDueDate (index, dueDateValue){
    let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.getFromLocalStorage)()
    const correctIndex = todos.findIndex(item => item.order == index)
    todos[correctIndex].dueDate = `${dueDateValue}`
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos)
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

const createNewTask = (task, status, list, priority, dueDate, todos) => {
    const todo = todoCreator(task, status, list, priority, dueDate)
    // const newTodos = todos
    todos.push(todo)
    todo.order = todos.indexOf(todo)
    ;(0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_1__.addToLocalStorage)(todos)
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
let todos = (0,_handleSaveLogic__WEBPACK_IMPORTED_MODULE_15__.getFromLocalStorage)() || []
const lists = []




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
    ;(0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__["default"])(todos)
})


const addTasks = function(){
    let task = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('taskInput')
    let status = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('statusInput')
    let list = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('listInput')
    let priority = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('priorityInput')
    let dueDate = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('dueDateInput')
    // const todo = todoCreator(`${task}`,`${status}`,`${list}`,`${priority}`,`${dueDate}`)
    const todo = (0,_todoCreator__WEBPACK_IMPORTED_MODULE_3__.createNewTask)(`${task}`,`${status}`,`${list}`,`${priority}`,`${dueDate}`, todos)
    console.log(dueDate)
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
const list1 = (0,_createList__WEBPACK_IMPORTED_MODULE_9__.createList)('general')
const list2 = (0,_createList__WEBPACK_IMPORTED_MODULE_9__.createList)('Nemo')
const list3 = (0,_createList__WEBPACK_IMPORTED_MODULE_9__.createList)('Project')
const list4 = (0,_createList__WEBPACK_IMPORTED_MODULE_9__.createList)('daily')
lists.push(list1)
lists.push(list2)
lists.push(list3)
lists.push(list4)
console.log(lists.map( list => list.listName))
;(0,_displayLists__WEBPACK_IMPORTED_MODULE_10__["default"])(lists)

// const listInput = interactDOM().hookDOMelement('listInput')
// const listArray = lists.map( list => list.listName)
// listArray.forEach(item => {
//         const optionElement = interactDOM(). createElementWithClassAndId('option', 'option-input', `list${listArray.indexOf(item)}`)
//         optionElement.value = item
//         optionElement.textContent = item
//         listInput.appendChild(optionElement)
// })
;(0,_controlListChange__WEBPACK_IMPORTED_MODULE_8__.updateListOptions)(lists)



  
const newList = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('newList')

newList.addEventListener('click', e => {
    ;(0,_handleNewListForm__WEBPACK_IMPORTED_MODULE_11__["default"])(e)
})


const addNewList = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('addNewList')

const addList = function (){
    const list = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().getInputValue('listName')
    const newList = (0,_createList__WEBPACK_IMPORTED_MODULE_9__.createList)(list)
    lists.push(newList)
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().formReset('addListForm')
}

addNewList.addEventListener('click', e =>{
    const newListForm = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('newListForm')
    e.preventDefault()
    ;(0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hide(newListForm)
    addList()
    ;(0,_displayLists__WEBPACK_IMPORTED_MODULE_10__["default"])(lists)
    ;(0,_controlListChange__WEBPACK_IMPORTED_MODULE_8__.updateListOptions)(lists)
})

// ======================= list add logic, soon will be a new module

function completeTask(element) {
    const index = +`${element.id}`.replace("checktask#", "")
    // console.log(element)
    ;(0,_todoCreator__WEBPACK_IMPORTED_MODULE_3__.modifyStatus)(index, 'done', todos)
   
}

// ======================== filter tasks by list

const listsView = (0,_interactDom__WEBPACK_IMPORTED_MODULE_1__["default"])().hookDOMelement('listsView')

listsView.addEventListener('click', e => {
    if(e.target.classList.contains('list-item')){
        console.log(e.target)
        ;(0,_filterByList__WEBPACK_IMPORTED_MODULE_13__["default"])(e.target, lists, todos)
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

// handleSaveLogic(todos, lists)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9CQUFvQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUZBQW9CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlGQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNQLE1BQU07OztBQUdOLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0IsMkVBQWlCLFFBQVE7O0FBRS9DLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtRUFBaUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLG9FQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQix1RUFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0IseUVBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxtRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQSxJQUFJLGdFQUFpQjtBQUNyQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLG1CQUFtQix3REFBVztBQUM5QjtBQUNBO0FBQ0EsaUJBQWlCLHdEQUFXO0FBQzVCLG9CQUFvQix1REFBVTtBQUM5QjtBQUNBLElBQUkseURBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQVc7QUFDbkM7QUFDQSxJQUFJLHlEQUFXO0FBQ2Y7QUFDQSxJQUFJLDJEQUFZO0FBQ2hCLElBQUksc0VBQWlCO0FBQ3JCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXO0FBQ2pDO0FBQ0EsSUFBSSwyREFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdEQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBWTtBQUNwQjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsd0RBQVc7QUFDaEM7QUFDQTtBQUNBLElBQUksMERBQVk7QUFDaEIsQ0FBQztBQUNEO0FBQ0E7QUFDQSxnRUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9jbGllbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50LyBsYXp5IF5cXC5cXC8uKlxcLmVudHJ5XFwuanMuKiQgaW5jbHVkZTogXFwuZW50cnlcXC5qcyQgZXhjbHVkZTogXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy93Yy1kYXRlcGlja2VyL2Rpc3QvdGhlbWVzL2RhcmsuY3NzP2RhNTUiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz8zNTk3Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy93Yy1kYXRlcGlja2VyL2Rpc3QvY29tcG9uZW50cy93Yy1kYXRlcGlja2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250cm9sRHVlRGF0ZUNoYW5nZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbExpc3RDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRyb2xQcmlvcml0eUNoYW5nZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbFN0YXR1c0NoYW5nZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udHJvbFRhc2tDaGFuZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NyZWF0ZUxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Rpc3BsYXlMaXN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZGlzcGxheVRhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9maWx0ZXJCeURhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2ZpbHRlckJ5TGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmlsdGVyQnlQcmlvcml0eS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZmlsdGVyQnlTdGF0dXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZUZpbHRlck9yZGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9oYW5kbGVOZXdMaXN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaGFuZGxlTmV3VGFza0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2hhbmRsZVNhdmVMb2dpYy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW50ZXJhY3REb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3NvcnRCeVRpdGxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvQ3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBWaXJ0dWFsIERPTSBwYXRjaGluZyBhbGdvcml0aG0gYmFzZWQgb24gU25hYmJkb20gYnlcbiAqIFNpbW9uIEZyaWlzIFZpbmR1bSAoQHBhbGRlcGluZClcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL3NuYWJiZG9tL3NuYWJiZG9tL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqXG4gKiBNb2RpZmllZCBmb3IgU3RlbmNpbCdzIHJlbmRlcmVyIGFuZCBzbG90IHByb2plY3Rpb25cbiAqL1xubGV0IHNjb3BlSWQ7XG5sZXQgY29udGVudFJlZjtcbmxldCBob3N0VGFnTmFtZTtcbmxldCBjdXN0b21FcnJvcjtcbmxldCBpID0gMDtcbmxldCB1c2VOYXRpdmVTaGFkb3dEb20gPSBmYWxzZTtcbmxldCBjaGVja1Nsb3RGYWxsYmFja1Zpc2liaWxpdHkgPSBmYWxzZTtcbmxldCBjaGVja1Nsb3RSZWxvY2F0ZSA9IGZhbHNlO1xubGV0IGlzU3ZnTW9kZSA9IGZhbHNlO1xubGV0IHJlbmRlcmluZ1JlZiA9IG51bGw7XG5sZXQgcXVldWVDb25nZXN0aW9uID0gMDtcbmxldCBxdWV1ZVBlbmRpbmcgPSBmYWxzZTtcbi8qXG4gU3RlbmNpbCBDbGllbnQgUGxhdGZvcm0gdjIuMjIuMyB8IE1JVCBMaWNlbnNlZCB8IGh0dHBzOi8vc3RlbmNpbGpzLmNvbVxuICovXG5pbXBvcnQgeyBCVUlMRCwgTkFNRVNQQUNFIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YSc7XG5jb25zdCBCdWlsZCA9IHtcbiAgICBpc0RldjogQlVJTEQuaXNEZXYgPyB0cnVlIDogZmFsc2UsXG4gICAgaXNCcm93c2VyOiB0cnVlLFxuICAgIGlzU2VydmVyOiBmYWxzZSxcbiAgICBpc1Rlc3Rpbmc6IEJVSUxELmlzVGVzdGluZyA/IHRydWUgOiBmYWxzZSxcbn07XG5jb25zdCBDb250ZXh0ID0ge307XG5jb25zdCBnZXRBc3NldFBhdGggPSAocGF0aCkgPT4ge1xuICAgIGNvbnN0IGFzc2V0VXJsID0gbmV3IFVSTChwYXRoLCBwbHQuJHJlc291cmNlc1VybCQpO1xuICAgIHJldHVybiBhc3NldFVybC5vcmlnaW4gIT09IHdpbi5sb2NhdGlvbi5vcmlnaW4gPyBhc3NldFVybC5ocmVmIDogYXNzZXRVcmwucGF0aG5hbWU7XG59O1xuY29uc3Qgc2V0QXNzZXRQYXRoID0gKHBhdGgpID0+IChwbHQuJHJlc291cmNlc1VybCQgPSBwYXRoKTtcbmNvbnN0IGNyZWF0ZVRpbWUgPSAoZm5OYW1lLCB0YWdOYW1lID0gJycpID0+IHtcbiAgICBpZiAoQlVJTEQucHJvZmlsZSAmJiBwZXJmb3JtYW5jZS5tYXJrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGBzdDoke2ZuTmFtZX06JHt0YWdOYW1lfToke2krK31gO1xuICAgICAgICAvLyBTdGFydFxuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKGtleSk7XG4gICAgICAgIC8vIEVuZFxuICAgICAgICByZXR1cm4gKCkgPT4gcGVyZm9ybWFuY2UubWVhc3VyZShgW1N0ZW5jaWxdICR7Zm5OYW1lfSgpIDwke3RhZ05hbWV9PmAsIGtleSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5jb25zdCB1bmlxdWVUaW1lID0gKGtleSwgbWVhc3VyZVRleHQpID0+IHtcbiAgICBpZiAoQlVJTEQucHJvZmlsZSAmJiBwZXJmb3JtYW5jZS5tYXJrKSB7XG4gICAgICAgIGlmIChwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKGtleSwgJ21hcmsnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBlcmZvcm1hbmNlLmdldEVudHJpZXNCeU5hbWUobWVhc3VyZVRleHQsICdtZWFzdXJlJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcGVyZm9ybWFuY2UubWVhc3VyZShtZWFzdXJlVGV4dCwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgfVxufTtcbmNvbnN0IGluc3BlY3QgPSAocmVmKSA9PiB7XG4gICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYocmVmKTtcbiAgICBpZiAoIWhvc3RSZWYpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgZmxhZ3MgPSBob3N0UmVmLiRmbGFncyQ7XG4gICAgY29uc3QgaG9zdEVsZW1lbnQgPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVuZGVyQ291bnQ6IGhvc3RSZWYuJHJlbmRlckNvdW50JCxcbiAgICAgICAgZmxhZ3M6IHtcbiAgICAgICAgICAgIGhhc1JlbmRlcmVkOiAhIShmbGFncyAmIDIgLyogSE9TVF9GTEFHUy5oYXNSZW5kZXJlZCAqLyksXG4gICAgICAgICAgICBoYXNDb25uZWN0ZWQ6ICEhKGZsYWdzICYgMSAvKiBIT1NUX0ZMQUdTLmhhc0Nvbm5lY3RlZCAqLyksXG4gICAgICAgICAgICBpc1dhaXRpbmdGb3JDaGlsZHJlbjogISEoZmxhZ3MgJiA0IC8qIEhPU1RfRkxBR1MuaXNXYWl0aW5nRm9yQ2hpbGRyZW4gKi8pLFxuICAgICAgICAgICAgaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZTogISEoZmxhZ3MgJiA4IC8qIEhPU1RfRkxBR1MuaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLyksXG4gICAgICAgICAgICBpc1F1ZXVlZEZvclVwZGF0ZTogISEoZmxhZ3MgJiAxNiAvKiBIT1NUX0ZMQUdTLmlzUXVldWVkRm9yVXBkYXRlICovKSxcbiAgICAgICAgICAgIGhhc0luaXRpYWxpemVkQ29tcG9uZW50OiAhIShmbGFncyAmIDMyIC8qIEhPU1RfRkxBR1MuaGFzSW5pdGlhbGl6ZWRDb21wb25lbnQgKi8pLFxuICAgICAgICAgICAgaGFzTG9hZGVkQ29tcG9uZW50OiAhIShmbGFncyAmIDY0IC8qIEhPU1RfRkxBR1MuaGFzTG9hZGVkQ29tcG9uZW50ICovKSxcbiAgICAgICAgICAgIGlzV2F0Y2hSZWFkeTogISEoZmxhZ3MgJiAxMjggLyogSE9TVF9GTEFHUy5pc1dhdGNoUmVhZHkgKi8pLFxuICAgICAgICAgICAgaXNMaXN0ZW5SZWFkeTogISEoZmxhZ3MgJiAyNTYgLyogSE9TVF9GTEFHUy5pc0xpc3RlblJlYWR5ICovKSxcbiAgICAgICAgICAgIG5lZWRzUmVyZW5kZXI6ICEhKGZsYWdzICYgNTEyIC8qIEhPU1RfRkxBR1MubmVlZHNSZXJlbmRlciAqLyksXG4gICAgICAgIH0sXG4gICAgICAgIGluc3RhbmNlVmFsdWVzOiBob3N0UmVmLiRpbnN0YW5jZVZhbHVlcyQsXG4gICAgICAgIGFuY2VzdG9yQ29tcG9uZW50OiBob3N0UmVmLiRhbmNlc3RvckNvbXBvbmVudCQsXG4gICAgICAgIGhvc3RFbGVtZW50LFxuICAgICAgICBsYXp5SW5zdGFuY2U6IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQsXG4gICAgICAgIHZub2RlOiBob3N0UmVmLiR2bm9kZSQsXG4gICAgICAgIG1vZGVOYW1lOiBob3N0UmVmLiRtb2RlTmFtZSQsXG4gICAgICAgIG9uUmVhZHlQcm9taXNlOiBob3N0UmVmLiRvblJlYWR5UHJvbWlzZSQsXG4gICAgICAgIG9uUmVhZHlSZXNvbHZlOiBob3N0UmVmLiRvblJlYWR5UmVzb2x2ZSQsXG4gICAgICAgIG9uSW5zdGFuY2VQcm9taXNlOiBob3N0UmVmLiRvbkluc3RhbmNlUHJvbWlzZSQsXG4gICAgICAgIG9uSW5zdGFuY2VSZXNvbHZlOiBob3N0UmVmLiRvbkluc3RhbmNlUmVzb2x2ZSQsXG4gICAgICAgIG9uUmVuZGVyUmVzb2x2ZTogaG9zdFJlZi4kb25SZW5kZXJSZXNvbHZlJCxcbiAgICAgICAgcXVldWVkTGlzdGVuZXJzOiBob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkLFxuICAgICAgICBybUxpc3RlbmVyczogaG9zdFJlZi4kcm1MaXN0ZW5lcnMkLFxuICAgICAgICBbJ3MtaWQnXTogaG9zdEVsZW1lbnRbJ3MtaWQnXSxcbiAgICAgICAgWydzLWNyJ106IGhvc3RFbGVtZW50WydzLWNyJ10sXG4gICAgICAgIFsncy1sciddOiBob3N0RWxlbWVudFsncy1sciddLFxuICAgICAgICBbJ3MtcCddOiBob3N0RWxlbWVudFsncy1wJ10sXG4gICAgICAgIFsncy1yYyddOiBob3N0RWxlbWVudFsncy1yYyddLFxuICAgICAgICBbJ3Mtc2MnXTogaG9zdEVsZW1lbnRbJ3Mtc2MnXSxcbiAgICB9O1xufTtcbmNvbnN0IGluc3RhbGxEZXZUb29scyA9ICgpID0+IHtcbiAgICBpZiAoQlVJTEQuZGV2VG9vbHMpIHtcbiAgICAgICAgY29uc3Qgc3RlbmNpbCA9ICh3aW4uc3RlbmNpbCA9IHdpbi5zdGVuY2lsIHx8IHt9KTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxJbnNwZWN0ID0gc3RlbmNpbC5pbnNwZWN0O1xuICAgICAgICBzdGVuY2lsLmluc3BlY3QgPSAocmVmKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gaW5zcGVjdChyZWYpO1xuICAgICAgICAgICAgaWYgKCFyZXN1bHQgJiYgdHlwZW9mIG9yaWdpbmFsSW5zcGVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG9yaWdpbmFsSW5zcGVjdChyZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuY29uc3QgQ09OVEVOVF9SRUZfSUQgPSAncic7XG5jb25zdCBPUkdfTE9DQVRJT05fSUQgPSAnbyc7XG5jb25zdCBTTE9UX05PREVfSUQgPSAncyc7XG5jb25zdCBURVhUX05PREVfSUQgPSAndCc7XG5jb25zdCBIWURSQVRFX0lEID0gJ3MtaWQnO1xuY29uc3QgSFlEUkFURURfU1RZTEVfSUQgPSAnc3R5LWlkJztcbmNvbnN0IEhZRFJBVEVfQ0hJTERfSUQgPSAnYy1pZCc7XG5jb25zdCBIWURSQVRFRF9DU1MgPSAne3Zpc2liaWxpdHk6aGlkZGVufS5oeWRyYXRlZHt2aXNpYmlsaXR5OmluaGVyaXR9JztcbmNvbnN0IFhMSU5LX05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnO1xuLyoqXG4gKiBEZWZhdWx0IHN0eWxlIG1vZGUgaWRcbiAqL1xuLyoqXG4gKiBSZXVzYWJsZSBlbXB0eSBvYmovYXJyYXlcbiAqIERvbid0IGFkZCB2YWx1ZXMgdG8gdGhlc2UhIVxuICovXG5jb25zdCBFTVBUWV9PQkogPSB7fTtcbi8qKlxuICogTmFtZXNwYWNlc1xuICovXG5jb25zdCBTVkdfTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuY29uc3QgSFRNTF9OUyA9ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJztcbmNvbnN0IGlzRGVmID0gKHYpID0+IHYgIT0gbnVsbDtcbmNvbnN0IGlzQ29tcGxleFR5cGUgPSAobykgPT4ge1xuICAgIC8vIGh0dHBzOi8vanNwZXJmLmNvbS90eXBlb2YtZm4tb2JqZWN0LzVcbiAgICBvID0gdHlwZW9mIG87XG4gICAgcmV0dXJuIG8gPT09ICdvYmplY3QnIHx8IG8gPT09ICdmdW5jdGlvbic7XG59O1xuLyoqXG4gKiBIZWxwZXIgbWV0aG9kIGZvciBxdWVyeWluZyBhIGBtZXRhYCB0YWcgdGhhdCBjb250YWlucyBhIG5vbmNlIHZhbHVlXG4gKiBvdXQgb2YgYSBET00ncyBoZWFkLlxuICpcbiAqIEBwYXJhbSBkb2MgVGhlIERPTSBjb250YWluaW5nIHRoZSBgaGVhZGAgdG8gcXVlcnkgYWdhaW5zdFxuICogQHJldHVybnMgVGhlIGNvbnRlbnQgb2YgdGhlIG1ldGEgdGFnIHJlcHJlc2VudGluZyB0aGUgbm9uY2UgdmFsdWUsIG9yIGB1bmRlZmluZWRgIGlmIG5vIHRhZ1xuICogZXhpc3RzIG9yIHRoZSB0YWcgaGFzIG5vIGNvbnRlbnQuXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5Tm9uY2VNZXRhVGFnQ29udGVudChkb2MpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICByZXR1cm4gKF9jID0gKF9iID0gKF9hID0gZG9jLmhlYWQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJjc3Atbm9uY2VcIl0nKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldEF0dHJpYnV0ZSgnY29udGVudCcpKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiB1bmRlZmluZWQ7XG59XG4vKipcbiAqIFByb2R1Y3Rpb24gaCgpIGZ1bmN0aW9uIGJhc2VkIG9uIFByZWFjdCBieVxuICogSmFzb24gTWlsbGVyIChAZGV2ZWxvcGl0KVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3ByZWFjdC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKlxuICogTW9kaWZpZWQgZm9yIFN0ZW5jaWwncyBjb21waWxlciBhbmQgdmRvbVxuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gaChub2RlTmFtZTogc3RyaW5nIHwgZC5GdW5jdGlvbmFsQ29tcG9uZW50LCB2bm9kZURhdGE6IGQuUHJvcHNUeXBlLCBjaGlsZD86IGQuQ2hpbGRUeXBlKTogZC5WTm9kZTtcbi8vIGV4cG9ydCBmdW5jdGlvbiBoKG5vZGVOYW1lOiBzdHJpbmcgfCBkLkZ1bmN0aW9uYWxDb21wb25lbnQsIHZub2RlRGF0YTogZC5Qcm9wc1R5cGUsIC4uLmNoaWxkcmVuOiBkLkNoaWxkVHlwZVtdKTogZC5WTm9kZTtcbmNvbnN0IGggPSAobm9kZU5hbWUsIHZub2RlRGF0YSwgLi4uY2hpbGRyZW4pID0+IHtcbiAgICBsZXQgY2hpbGQgPSBudWxsO1xuICAgIGxldCBrZXkgPSBudWxsO1xuICAgIGxldCBzbG90TmFtZSA9IG51bGw7XG4gICAgbGV0IHNpbXBsZSA9IGZhbHNlO1xuICAgIGxldCBsYXN0U2ltcGxlID0gZmFsc2U7XG4gICAgY29uc3Qgdk5vZGVDaGlsZHJlbiA9IFtdO1xuICAgIGNvbnN0IHdhbGsgPSAoYykgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNoaWxkID0gY1tpXTtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIHdhbGsoY2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQgIT0gbnVsbCAmJiB0eXBlb2YgY2hpbGQgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIGlmICgoc2ltcGxlID0gdHlwZW9mIG5vZGVOYW1lICE9PSAnZnVuY3Rpb24nICYmICFpc0NvbXBsZXhUeXBlKGNoaWxkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQgPSBTdHJpbmcoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChCVUlMRC5pc0RldiAmJiB0eXBlb2Ygbm9kZU5hbWUgIT09ICdmdW5jdGlvbicgJiYgY2hpbGQuJGZsYWdzJCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGVEZXZFcnJvcihgdk5vZGUgcGFzc2VkIGFzIGNoaWxkcmVuIGhhcyB1bmV4cGVjdGVkIHR5cGUuXG5NYWtlIHN1cmUgaXQncyB1c2luZyB0aGUgY29ycmVjdCBoKCkgZnVuY3Rpb24uXG5FbXB0eSBvYmplY3RzIGNhbiBhbHNvIGJlIHRoZSBjYXVzZSwgbG9vayBmb3IgSlNYIGNvbW1lbnRzIHRoYXQgYmVjYW1lIG9iamVjdHMuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzaW1wbGUgJiYgbGFzdFNpbXBsZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcHJldmlvdXMgY2hpbGQgd2FzIHNpbXBsZSAoc3RyaW5nKSwgd2UgbWVyZ2UgYm90aFxuICAgICAgICAgICAgICAgICAgICB2Tm9kZUNoaWxkcmVuW3ZOb2RlQ2hpbGRyZW4ubGVuZ3RoIC0gMV0uJHRleHQkICs9IGNoaWxkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQXBwZW5kIGEgbmV3IHZOb2RlLCBpZiBpdCdzIHRleHQsIHdlIGNyZWF0ZSBhIHRleHQgdk5vZGVcbiAgICAgICAgICAgICAgICAgICAgdk5vZGVDaGlsZHJlbi5wdXNoKHNpbXBsZSA/IG5ld1ZOb2RlKG51bGwsIGNoaWxkKSA6IGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFzdFNpbXBsZSA9IHNpbXBsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgd2FsayhjaGlsZHJlbik7XG4gICAgaWYgKHZub2RlRGF0YSkge1xuICAgICAgICBpZiAoQlVJTEQuaXNEZXYgJiYgbm9kZU5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlSW5wdXRQcm9wZXJ0aWVzKHZub2RlRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbm9ybWFsaXplIGNsYXNzIC8gY2xhc3NuYW1lIGF0dHJpYnV0ZXNcbiAgICAgICAgaWYgKEJVSUxELnZkb21LZXkgJiYgdm5vZGVEYXRhLmtleSkge1xuICAgICAgICAgICAga2V5ID0gdm5vZGVEYXRhLmtleTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgdm5vZGVEYXRhLm5hbWUpIHtcbiAgICAgICAgICAgIHNsb3ROYW1lID0gdm5vZGVEYXRhLm5hbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELnZkb21DbGFzcykge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NEYXRhID0gdm5vZGVEYXRhLmNsYXNzTmFtZSB8fCB2bm9kZURhdGEuY2xhc3M7XG4gICAgICAgICAgICBpZiAoY2xhc3NEYXRhKSB7XG4gICAgICAgICAgICAgICAgdm5vZGVEYXRhLmNsYXNzID1cbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGNsYXNzRGF0YSAhPT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2xhc3NEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5rZXlzKGNsYXNzRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChrKSA9PiBjbGFzc0RhdGFba10pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoQlVJTEQuaXNEZXYgJiYgdk5vZGVDaGlsZHJlbi5zb21lKGlzSG9zdCkpIHtcbiAgICAgICAgY29uc29sZURldkVycm9yKGBUaGUgPEhvc3Q+IG11c3QgYmUgdGhlIHNpbmdsZSByb290IGNvbXBvbmVudC4gTWFrZSBzdXJlOlxuLSBZb3UgYXJlIE5PVCB1c2luZyBob3N0RGF0YSgpIGFuZCA8SG9zdD4gaW4gdGhlIHNhbWUgY29tcG9uZW50LlxuLSA8SG9zdD4gaXMgdXNlZCBvbmNlLCBhbmQgaXQncyB0aGUgc2luZ2xlIHJvb3QgY29tcG9uZW50IG9mIHRoZSByZW5kZXIoKSBmdW5jdGlvbi5gKTtcbiAgICB9XG4gICAgaWYgKEJVSUxELnZkb21GdW5jdGlvbmFsICYmIHR5cGVvZiBub2RlTmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBub2RlTmFtZSBpcyBhIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4gICAgICAgIHJldHVybiBub2RlTmFtZSh2bm9kZURhdGEgPT09IG51bGwgPyB7fSA6IHZub2RlRGF0YSwgdk5vZGVDaGlsZHJlbiwgdmRvbUZuVXRpbHMpO1xuICAgIH1cbiAgICBjb25zdCB2bm9kZSA9IG5ld1ZOb2RlKG5vZGVOYW1lLCBudWxsKTtcbiAgICB2bm9kZS4kYXR0cnMkID0gdm5vZGVEYXRhO1xuICAgIGlmICh2Tm9kZUNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdm5vZGUuJGNoaWxkcmVuJCA9IHZOb2RlQ2hpbGRyZW47XG4gICAgfVxuICAgIGlmIChCVUlMRC52ZG9tS2V5KSB7XG4gICAgICAgIHZub2RlLiRrZXkkID0ga2V5O1xuICAgIH1cbiAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgdm5vZGUuJG5hbWUkID0gc2xvdE5hbWU7XG4gICAgfVxuICAgIHJldHVybiB2bm9kZTtcbn07XG4vKipcbiAqIEEgdXRpbGl0eSBmdW5jdGlvbiBmb3IgY3JlYXRpbmcgYSB2aXJ0dWFsIERPTSBub2RlIGZyb20gYSB0YWcgYW5kIHNvbWVcbiAqIHBvc3NpYmxlIHRleHQgY29udGVudC5cbiAqXG4gKiBAcGFyYW0gdGFnIHRoZSB0YWcgZm9yIHRoaXMgZWxlbWVudFxuICogQHBhcmFtIHRleHQgcG9zc2libGUgdGV4dCBjb250ZW50IGZvciB0aGUgbm9kZVxuICogQHJldHVybnMgYSBuZXdseS1taW50ZWQgdmlydHVhbCBET00gbm9kZVxuICovXG5jb25zdCBuZXdWTm9kZSA9ICh0YWcsIHRleHQpID0+IHtcbiAgICBjb25zdCB2bm9kZSA9IHtcbiAgICAgICAgJGZsYWdzJDogMCxcbiAgICAgICAgJHRhZyQ6IHRhZyxcbiAgICAgICAgJHRleHQkOiB0ZXh0LFxuICAgICAgICAkZWxtJDogbnVsbCxcbiAgICAgICAgJGNoaWxkcmVuJDogbnVsbCxcbiAgICB9O1xuICAgIGlmIChCVUlMRC52ZG9tQXR0cmlidXRlKSB7XG4gICAgICAgIHZub2RlLiRhdHRycyQgPSBudWxsO1xuICAgIH1cbiAgICBpZiAoQlVJTEQudmRvbUtleSkge1xuICAgICAgICB2bm9kZS4ka2V5JCA9IG51bGw7XG4gICAgfVxuICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICB2bm9kZS4kbmFtZSQgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGU7XG59O1xuY29uc3QgSG9zdCA9IHt9O1xuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGEgZ2l2ZW4gbm9kZSBpcyBhIEhvc3Qgbm9kZSBvciBub3RcbiAqXG4gKiBAcGFyYW0gbm9kZSB0aGUgdmlydHVhbCBET00gbm9kZSB0byBjaGVja1xuICogQHJldHVybnMgd2hldGhlciBpdCdzIGEgSG9zdCBub2RlIG9yIG5vdFxuICovXG5jb25zdCBpc0hvc3QgPSAobm9kZSkgPT4gbm9kZSAmJiBub2RlLiR0YWckID09PSBIb3N0O1xuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB7QGxpbmsgZC5GdW5jdGlvbmFsVXRpbGl0aWVzfSBmb3IgU3RlbmNpbCdzIFZEb20uXG4gKlxuICogTm90ZSB0aGF0IHRoZXNlIGZ1bmN0aW9ucyBjb252ZXJ0IGZyb20ge0BsaW5rIGQuVk5vZGV9IHRvXG4gKiB7QGxpbmsgZC5DaGlsZE5vZGV9IHRvIGdpdmUgZnVuY3Rpb25hbCBjb21wb25lbnQgZGV2ZWxvcGVycyBhIGZyaWVuZGx5XG4gKiBpbnRlcmZhY2UuXG4gKi9cbmNvbnN0IHZkb21GblV0aWxzID0ge1xuICAgIGZvckVhY2g6IChjaGlsZHJlbiwgY2IpID0+IGNoaWxkcmVuLm1hcChjb252ZXJ0VG9QdWJsaWMpLmZvckVhY2goY2IpLFxuICAgIG1hcDogKGNoaWxkcmVuLCBjYikgPT4gY2hpbGRyZW4ubWFwKGNvbnZlcnRUb1B1YmxpYykubWFwKGNiKS5tYXAoY29udmVydFRvUHJpdmF0ZSksXG59O1xuLyoqXG4gKiBDb252ZXJ0IGEge0BsaW5rIGQuVk5vZGV9IHRvIGEge0BsaW5rIGQuQ2hpbGROb2RlfSBpbiBvcmRlciB0byBwcmVzZW50IGFcbiAqIGZyaWVuZGxpZXIgcHVibGljIGludGVyZmFjZSAoaGVuY2UsICdjb252ZXJ0VG9QdWJsaWMnKS5cbiAqXG4gKiBAcGFyYW0gbm9kZSB0aGUgdmlydHVhbCBET00gbm9kZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyBhIGNvbnZlcnRlZCBjaGlsZCBub2RlXG4gKi9cbmNvbnN0IGNvbnZlcnRUb1B1YmxpYyA9IChub2RlKSA9PiAoe1xuICAgIHZhdHRyczogbm9kZS4kYXR0cnMkLFxuICAgIHZjaGlsZHJlbjogbm9kZS4kY2hpbGRyZW4kLFxuICAgIHZrZXk6IG5vZGUuJGtleSQsXG4gICAgdm5hbWU6IG5vZGUuJG5hbWUkLFxuICAgIHZ0YWc6IG5vZGUuJHRhZyQsXG4gICAgdnRleHQ6IG5vZGUuJHRleHQkLFxufSk7XG4vKipcbiAqIENvbnZlcnQgYSB7QGxpbmsgZC5DaGlsZE5vZGV9IGJhY2sgdG8gYW4gZXF1aXZhbGVudCB7QGxpbmsgZC5WTm9kZX0gaW5cbiAqIG9yZGVyIHRvIHVzZSB0aGUgcmVzdWx0aW5nIG9iamVjdCBpbiB0aGUgdmlydHVhbCBET00uIFRoZSBpbml0aWFsIG9iamVjdCB3YXNcbiAqIGxpa2VseSBjcmVhdGVkIGFzIHBhcnQgb2YgcHJlc2VudGluZyBhIHB1YmxpYyBBUEksIHNvIGNvbnZlcnRpbmcgaXQgYmFja1xuICogaW52b2x2ZWQgbWFraW5nIGl0ICdwcml2YXRlJyBhZ2FpbiAoaGVuY2UsIGBjb252ZXJ0VG9Qcml2YXRlYCkuXG4gKlxuICogQHBhcmFtIG5vZGUgdGhlIGNoaWxkIG5vZGUgdG8gY29udmVydFxuICogQHJldHVybnMgYSBjb252ZXJ0ZWQgdmlydHVhbCBET00gbm9kZVxuICovXG5jb25zdCBjb252ZXJ0VG9Qcml2YXRlID0gKG5vZGUpID0+IHtcbiAgICBpZiAodHlwZW9mIG5vZGUudnRhZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCB2bm9kZURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBub2RlLnZhdHRycyk7XG4gICAgICAgIGlmIChub2RlLnZrZXkpIHtcbiAgICAgICAgICAgIHZub2RlRGF0YS5rZXkgPSBub2RlLnZrZXk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUudm5hbWUpIHtcbiAgICAgICAgICAgIHZub2RlRGF0YS5uYW1lID0gbm9kZS52bmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaChub2RlLnZ0YWcsIHZub2RlRGF0YSwgLi4uKG5vZGUudmNoaWxkcmVuIHx8IFtdKSk7XG4gICAgfVxuICAgIGNvbnN0IHZub2RlID0gbmV3Vk5vZGUobm9kZS52dGFnLCBub2RlLnZ0ZXh0KTtcbiAgICB2bm9kZS4kYXR0cnMkID0gbm9kZS52YXR0cnM7XG4gICAgdm5vZGUuJGNoaWxkcmVuJCA9IG5vZGUudmNoaWxkcmVuO1xuICAgIHZub2RlLiRrZXkkID0gbm9kZS52a2V5O1xuICAgIHZub2RlLiRuYW1lJCA9IG5vZGUudm5hbWU7XG4gICAgcmV0dXJuIHZub2RlO1xufTtcbi8qKlxuICogVmFsaWRhdGVzIHRoZSBvcmRlcmluZyBvZiBhdHRyaWJ1dGVzIG9uIGFuIGlucHV0IGVsZW1lbnRcbiAqXG4gKiBAcGFyYW0gaW5wdXRFbG0gdGhlIGVsZW1lbnQgdG8gdmFsaWRhdGVcbiAqL1xuY29uc3QgdmFsaWRhdGVJbnB1dFByb3BlcnRpZXMgPSAoaW5wdXRFbG0pID0+IHtcbiAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5rZXlzKGlucHV0RWxtKTtcbiAgICBjb25zdCB2YWx1ZSA9IHByb3BzLmluZGV4T2YoJ3ZhbHVlJyk7XG4gICAgaWYgKHZhbHVlID09PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHR5cGVJbmRleCA9IHByb3BzLmluZGV4T2YoJ3R5cGUnKTtcbiAgICBjb25zdCBtaW5JbmRleCA9IHByb3BzLmluZGV4T2YoJ21pbicpO1xuICAgIGNvbnN0IG1heEluZGV4ID0gcHJvcHMuaW5kZXhPZignbWF4Jyk7XG4gICAgY29uc3Qgc3RlcEluZGV4ID0gcHJvcHMuaW5kZXhPZignc3RlcCcpO1xuICAgIGlmICh2YWx1ZSA8IHR5cGVJbmRleCB8fCB2YWx1ZSA8IG1pbkluZGV4IHx8IHZhbHVlIDwgbWF4SW5kZXggfHwgdmFsdWUgPCBzdGVwSW5kZXgpIHtcbiAgICAgICAgY29uc29sZURldldhcm4oYFRoZSBcInZhbHVlXCIgcHJvcCBvZiA8aW5wdXQ+IHNob3VsZCBiZSBzZXQgYWZ0ZXIgXCJtaW5cIiwgXCJtYXhcIiwgXCJ0eXBlXCIgYW5kIFwic3RlcFwiYCk7XG4gICAgfVxufTtcbmNvbnN0IGluaXRpYWxpemVDbGllbnRIeWRyYXRlID0gKGhvc3RFbG0sIHRhZ05hbWUsIGhvc3RJZCwgaG9zdFJlZikgPT4ge1xuICAgIGNvbnN0IGVuZEh5ZHJhdGUgPSBjcmVhdGVUaW1lKCdoeWRyYXRlQ2xpZW50JywgdGFnTmFtZSk7XG4gICAgY29uc3Qgc2hhZG93Um9vdCA9IGhvc3RFbG0uc2hhZG93Um9vdDtcbiAgICBjb25zdCBjaGlsZFJlbmRlck5vZGVzID0gW107XG4gICAgY29uc3Qgc2xvdE5vZGVzID0gW107XG4gICAgY29uc3Qgc2hhZG93Um9vdE5vZGVzID0gQlVJTEQuc2hhZG93RG9tICYmIHNoYWRvd1Jvb3QgPyBbXSA6IG51bGw7XG4gICAgY29uc3Qgdm5vZGUgPSAoaG9zdFJlZi4kdm5vZGUkID0gbmV3Vk5vZGUodGFnTmFtZSwgbnVsbCkpO1xuICAgIGlmICghcGx0LiRvcmdMb2NOb2RlcyQpIHtcbiAgICAgICAgaW5pdGlhbGl6ZURvY3VtZW50SHlkcmF0ZShkb2MuYm9keSwgKHBsdC4kb3JnTG9jTm9kZXMkID0gbmV3IE1hcCgpKSk7XG4gICAgfVxuICAgIGhvc3RFbG1bSFlEUkFURV9JRF0gPSBob3N0SWQ7XG4gICAgaG9zdEVsbS5yZW1vdmVBdHRyaWJ1dGUoSFlEUkFURV9JRCk7XG4gICAgY2xpZW50SHlkcmF0ZSh2bm9kZSwgY2hpbGRSZW5kZXJOb2Rlcywgc2xvdE5vZGVzLCBzaGFkb3dSb290Tm9kZXMsIGhvc3RFbG0sIGhvc3RFbG0sIGhvc3RJZCk7XG4gICAgY2hpbGRSZW5kZXJOb2Rlcy5tYXAoKGMpID0+IHtcbiAgICAgICAgY29uc3Qgb3JnTG9jYXRpb25JZCA9IGMuJGhvc3RJZCQgKyAnLicgKyBjLiRub2RlSWQkO1xuICAgICAgICBjb25zdCBvcmdMb2NhdGlvbk5vZGUgPSBwbHQuJG9yZ0xvY05vZGVzJC5nZXQob3JnTG9jYXRpb25JZCk7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBjLiRlbG0kO1xuICAgICAgICBpZiAob3JnTG9jYXRpb25Ob2RlICYmIHN1cHBvcnRzU2hhZG93ICYmIG9yZ0xvY2F0aW9uTm9kZVsncy1lbiddID09PSAnJykge1xuICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG9yZ0xvY2F0aW9uTm9kZS5uZXh0U2libGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzaGFkb3dSb290KSB7XG4gICAgICAgICAgICBub2RlWydzLWhuJ10gPSB0YWdOYW1lO1xuICAgICAgICAgICAgaWYgKG9yZ0xvY2F0aW9uTm9kZSkge1xuICAgICAgICAgICAgICAgIG5vZGVbJ3Mtb2wnXSA9IG9yZ0xvY2F0aW9uTm9kZTtcbiAgICAgICAgICAgICAgICBub2RlWydzLW9sJ11bJ3MtbnInXSA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcGx0LiRvcmdMb2NOb2RlcyQuZGVsZXRlKG9yZ0xvY2F0aW9uSWQpO1xuICAgIH0pO1xuICAgIGlmIChCVUlMRC5zaGFkb3dEb20gJiYgc2hhZG93Um9vdCkge1xuICAgICAgICBzaGFkb3dSb290Tm9kZXMubWFwKChzaGFkb3dSb290Tm9kZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNoYWRvd1Jvb3ROb2RlKSB7XG4gICAgICAgICAgICAgICAgc2hhZG93Um9vdC5hcHBlbmRDaGlsZChzaGFkb3dSb290Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbmRIeWRyYXRlKCk7XG59O1xuY29uc3QgY2xpZW50SHlkcmF0ZSA9IChwYXJlbnRWTm9kZSwgY2hpbGRSZW5kZXJOb2Rlcywgc2xvdE5vZGVzLCBzaGFkb3dSb290Tm9kZXMsIGhvc3RFbG0sIG5vZGUsIGhvc3RJZCkgPT4ge1xuICAgIGxldCBjaGlsZE5vZGVUeXBlO1xuICAgIGxldCBjaGlsZElkU3BsdDtcbiAgICBsZXQgY2hpbGRWTm9kZTtcbiAgICBsZXQgaTtcbiAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgY2hpbGROb2RlVHlwZSA9IG5vZGUuZ2V0QXR0cmlidXRlKEhZRFJBVEVfQ0hJTERfSUQpO1xuICAgICAgICBpZiAoY2hpbGROb2RlVHlwZSkge1xuICAgICAgICAgICAgLy8gZ290IHRoZSBub2RlIGRhdGEgZnJvbSB0aGUgZWxlbWVudCdzIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gYCR7aG9zdElkfS4ke25vZGVJZH0uJHtkZXB0aH0uJHtpbmRleH1gXG4gICAgICAgICAgICBjaGlsZElkU3BsdCA9IGNoaWxkTm9kZVR5cGUuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGlmIChjaGlsZElkU3BsdFswXSA9PT0gaG9zdElkIHx8IGNoaWxkSWRTcGx0WzBdID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFZOb2RlID0ge1xuICAgICAgICAgICAgICAgICAgICAkZmxhZ3MkOiAwLFxuICAgICAgICAgICAgICAgICAgICAkaG9zdElkJDogY2hpbGRJZFNwbHRbMF0sXG4gICAgICAgICAgICAgICAgICAgICRub2RlSWQkOiBjaGlsZElkU3BsdFsxXSxcbiAgICAgICAgICAgICAgICAgICAgJGRlcHRoJDogY2hpbGRJZFNwbHRbMl0sXG4gICAgICAgICAgICAgICAgICAgICRpbmRleCQ6IGNoaWxkSWRTcGx0WzNdLFxuICAgICAgICAgICAgICAgICAgICAkdGFnJDogbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICRlbG0kOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICAkYXR0cnMkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAkY2hpbGRyZW4kOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAka2V5JDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJG5hbWUkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAkdGV4dCQ6IG51bGwsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjaGlsZFJlbmRlck5vZGVzLnB1c2goY2hpbGRWTm9kZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoSFlEUkFURV9DSElMRF9JRCk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhIG5ldyBjaGlsZCB2bm9kZVxuICAgICAgICAgICAgICAgIC8vIHNvIGVuc3VyZSBpdHMgcGFyZW50IHZub2RlIGhhcyB0aGUgdmNoaWxkcmVuIGFycmF5XG4gICAgICAgICAgICAgICAgaWYgKCFwYXJlbnRWTm9kZS4kY2hpbGRyZW4kKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiQgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYWRkIG91ciBjaGlsZCB2bm9kZSB0byBhIHNwZWNpZmljIGluZGV4IG9mIHRoZSB2bm9kZSdzIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIG5vdyB0aGUgbmV3IHBhcmVudCB2bm9kZSBmb3IgYWxsIHRoZSBuZXh0IGNoaWxkIGNoZWNrc1xuICAgICAgICAgICAgICAgIHBhcmVudFZOb2RlID0gY2hpbGRWTm9kZTtcbiAgICAgICAgICAgICAgICBpZiAoc2hhZG93Um9vdE5vZGVzICYmIGNoaWxkVk5vZGUuJGRlcHRoJCA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYWRvd1Jvb3ROb2Rlc1tjaGlsZFZOb2RlLiRpbmRleCRdID0gY2hpbGRWTm9kZS4kZWxtJDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVjdXJzaXZlbHkgZHJpbGwgZG93biwgZW5kIHRvIHN0YXJ0IHNvIHdlIGNhbiByZW1vdmUgbm9kZXNcbiAgICAgICAgZm9yIChpID0gbm9kZS5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBjbGllbnRIeWRyYXRlKHBhcmVudFZOb2RlLCBjaGlsZFJlbmRlck5vZGVzLCBzbG90Tm9kZXMsIHNoYWRvd1Jvb3ROb2RlcywgaG9zdEVsbSwgbm9kZS5jaGlsZE5vZGVzW2ldLCBob3N0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgIC8vIGtlZXAgZHJpbGxpbmcgZG93biB0aHJvdWdoIHRoZSBzaGFkb3cgcm9vdCBub2Rlc1xuICAgICAgICAgICAgZm9yIChpID0gbm9kZS5zaGFkb3dSb290LmNoaWxkTm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBjbGllbnRIeWRyYXRlKHBhcmVudFZOb2RlLCBjaGlsZFJlbmRlck5vZGVzLCBzbG90Tm9kZXMsIHNoYWRvd1Jvb3ROb2RlcywgaG9zdEVsbSwgbm9kZS5zaGFkb3dSb290LmNoaWxkTm9kZXNbaV0sIGhvc3RJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAobm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOT0RFX1RZUEUuQ29tbWVudE5vZGUgKi8pIHtcbiAgICAgICAgLy8gYCR7Q09NTUVOVF9UWVBFfS4ke2hvc3RJZH0uJHtub2RlSWR9LiR7ZGVwdGh9LiR7aW5kZXh9YFxuICAgICAgICBjaGlsZElkU3BsdCA9IG5vZGUubm9kZVZhbHVlLnNwbGl0KCcuJyk7XG4gICAgICAgIGlmIChjaGlsZElkU3BsdFsxXSA9PT0gaG9zdElkIHx8IGNoaWxkSWRTcGx0WzFdID09PSAnMCcpIHtcbiAgICAgICAgICAgIC8vIGNvbW1lbnQgbm9kZSBmb3IgZWl0aGVyIHRoZSBob3N0IGlkIG9yIGEgMCBob3N0IGlkXG4gICAgICAgICAgICBjaGlsZE5vZGVUeXBlID0gY2hpbGRJZFNwbHRbMF07XG4gICAgICAgICAgICBjaGlsZFZOb2RlID0ge1xuICAgICAgICAgICAgICAgICRmbGFncyQ6IDAsXG4gICAgICAgICAgICAgICAgJGhvc3RJZCQ6IGNoaWxkSWRTcGx0WzFdLFxuICAgICAgICAgICAgICAgICRub2RlSWQkOiBjaGlsZElkU3BsdFsyXSxcbiAgICAgICAgICAgICAgICAkZGVwdGgkOiBjaGlsZElkU3BsdFszXSxcbiAgICAgICAgICAgICAgICAkaW5kZXgkOiBjaGlsZElkU3BsdFs0XSxcbiAgICAgICAgICAgICAgICAkZWxtJDogbm9kZSxcbiAgICAgICAgICAgICAgICAkYXR0cnMkOiBudWxsLFxuICAgICAgICAgICAgICAgICRjaGlsZHJlbiQ6IG51bGwsXG4gICAgICAgICAgICAgICAgJGtleSQ6IG51bGwsXG4gICAgICAgICAgICAgICAgJG5hbWUkOiBudWxsLFxuICAgICAgICAgICAgICAgICR0YWckOiBudWxsLFxuICAgICAgICAgICAgICAgICR0ZXh0JDogbnVsbCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlVHlwZSA9PT0gVEVYVF9OT0RFX0lEKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRWTm9kZS4kZWxtJCA9IG5vZGUubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkVk5vZGUuJGVsbSQgJiYgY2hpbGRWTm9kZS4kZWxtJC5ub2RlVHlwZSA9PT0gMyAvKiBOT0RFX1RZUEUuVGV4dE5vZGUgKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRWTm9kZS4kdGV4dCQgPSBjaGlsZFZOb2RlLiRlbG0kLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFJlbmRlck5vZGVzLnB1c2goY2hpbGRWTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgdGV4dCBjb21tZW50IHNpbmNlIGl0J3Mgbm8gbG9uZ2VyIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudFZOb2RlLiRjaGlsZHJlbiQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiQgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRWTm9kZS4kY2hpbGRyZW4kW2NoaWxkVk5vZGUuJGluZGV4JF0gPSBjaGlsZFZOb2RlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hhZG93Um9vdE5vZGVzICYmIGNoaWxkVk5vZGUuJGRlcHRoJCA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dSb290Tm9kZXNbY2hpbGRWTm9kZS4kaW5kZXgkXSA9IGNoaWxkVk5vZGUuJGVsbSQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZFZOb2RlLiRob3N0SWQkID09PSBob3N0SWQpIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNvbW1lbnQgbm9kZSBpcyBzcGVjaWZjYWxseSBmb3IgdGhpcyBob3N0IGlkXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZVR5cGUgPT09IFNMT1RfTk9ERV9JRCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBgJHtTTE9UX05PREVfSUR9LiR7aG9zdElkfS4ke25vZGVJZH0uJHtkZXB0aH0uJHtpbmRleH0uJHtzbG90TmFtZX1gO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZFZOb2RlLiR0YWckID0gJ3Nsb3QnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRJZFNwbHRbNV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVbJ3Mtc24nXSA9IGNoaWxkVk5vZGUuJG5hbWUkID0gY2hpbGRJZFNwbHRbNV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlWydzLXNuJ10gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBub2RlWydzLXNyJ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmIHNoYWRvd1Jvb3ROb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnJvd3NlciBzdXBwb3J0IHNoYWRvd1Jvb3QgYW5kIHRoaXMgaXMgYSBzaGFkb3cgZG9tIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGFjdHVhbCBzbG90IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVk5vZGUuJGVsbSQgPSBkb2MuY3JlYXRlRWxlbWVudChjaGlsZFZOb2RlLiR0YWckKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZFZOb2RlLiRuYW1lJCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgc2xvdCBuYW1lIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkVk5vZGUuJGVsbSQuc2V0QXR0cmlidXRlKCduYW1lJywgY2hpbGRWTm9kZS4kbmFtZSQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zZXJ0IHRoZSBuZXcgc2xvdCBlbGVtZW50IGJlZm9yZSB0aGUgc2xvdCBjb21tZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNoaWxkVk5vZGUuJGVsbSQsIG5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBzbG90IGNvbW1lbnQgc2luY2UgaXQncyBub3QgbmVlZGVkIGZvciBzaGFkb3dcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRWTm9kZS4kZGVwdGgkID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFkb3dSb290Tm9kZXNbY2hpbGRWTm9kZS4kaW5kZXgkXSA9IGNoaWxkVk5vZGUuJGVsbSQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2xvdE5vZGVzLnB1c2goY2hpbGRWTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Vk5vZGUuJGNoaWxkcmVuJCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiRbY2hpbGRWTm9kZS4kaW5kZXgkXSA9IGNoaWxkVk5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkTm9kZVR5cGUgPT09IENPTlRFTlRfUkVGX0lEKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGAke0NPTlRFTlRfUkVGX0lEfS4ke2hvc3RJZH1gO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQlVJTEQuc2hhZG93RG9tICYmIHNoYWRvd1Jvb3ROb2Rlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBjb250ZW50IHJlZiBjb21tZW50IHNpbmNlIGl0J3Mgbm90IG5lZWRlZCBmb3Igc2hhZG93XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBob3N0RWxtWydzLWNyJ10gPSBub2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVsncy1jbiddID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChwYXJlbnRWTm9kZSAmJiBwYXJlbnRWTm9kZS4kdGFnJCA9PT0gJ3N0eWxlJykge1xuICAgICAgICBjb25zdCB2bm9kZSA9IG5ld1ZOb2RlKG51bGwsIG5vZGUudGV4dENvbnRlbnQpO1xuICAgICAgICB2bm9kZS4kZWxtJCA9IG5vZGU7XG4gICAgICAgIHZub2RlLiRpbmRleCQgPSAnMCc7XG4gICAgICAgIHBhcmVudFZOb2RlLiRjaGlsZHJlbiQgPSBbdm5vZGVdO1xuICAgIH1cbn07XG5jb25zdCBpbml0aWFsaXplRG9jdW1lbnRIeWRyYXRlID0gKG5vZGUsIG9yZ0xvY05vZGVzKSA9PiB7XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yICg7IGkgPCBub2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGluaXRpYWxpemVEb2N1bWVudEh5ZHJhdGUobm9kZS5jaGlsZE5vZGVzW2ldLCBvcmdMb2NOb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuc2hhZG93Um9vdCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5vZGUuc2hhZG93Um9vdC5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZURvY3VtZW50SHlkcmF0ZShub2RlLnNoYWRvd1Jvb3QuY2hpbGROb2Rlc1tpXSwgb3JnTG9jTm9kZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IDggLyogTk9ERV9UWVBFLkNvbW1lbnROb2RlICovKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkSWRTcGx0ID0gbm9kZS5ub2RlVmFsdWUuc3BsaXQoJy4nKTtcbiAgICAgICAgaWYgKGNoaWxkSWRTcGx0WzBdID09PSBPUkdfTE9DQVRJT05fSUQpIHtcbiAgICAgICAgICAgIG9yZ0xvY05vZGVzLnNldChjaGlsZElkU3BsdFsxXSArICcuJyArIGNoaWxkSWRTcGx0WzJdLCBub2RlKTtcbiAgICAgICAgICAgIG5vZGUubm9kZVZhbHVlID0gJyc7XG4gICAgICAgICAgICAvLyB1c2VmdWwgdG8ga25vdyBpZiB0aGUgb3JpZ2luYWwgbG9jYXRpb24gaXNcbiAgICAgICAgICAgIC8vIHRoZSByb290IGxpZ2h0LWRvbSBvZiBhIHNoYWRvdyBkb20gY29tcG9uZW50XG4gICAgICAgICAgICBub2RlWydzLWVuJ10gPSBjaGlsZElkU3BsdFszXTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBQcml2YXRlXG5jb25zdCBjb21wdXRlTW9kZSA9IChlbG0pID0+IG1vZGVSZXNvbHV0aW9uQ2hhaW4ubWFwKChoKSA9PiBoKGVsbSkpLmZpbmQoKG0pID0+ICEhbSk7XG4vLyBQdWJsaWNcbmNvbnN0IHNldE1vZGUgPSAoaGFuZGxlcikgPT4gbW9kZVJlc29sdXRpb25DaGFpbi5wdXNoKGhhbmRsZXIpO1xuY29uc3QgZ2V0TW9kZSA9IChyZWYpID0+IGdldEhvc3RSZWYocmVmKS4kbW9kZU5hbWUkO1xuLyoqXG4gKiBQYXJzZSBhIG5ldyBwcm9wZXJ0eSB2YWx1ZSBmb3IgYSBnaXZlbiBwcm9wZXJ0eSB0eXBlLlxuICpcbiAqIFdoaWxlIHRoZSBwcm9wIHZhbHVlIGNhbiByZWFzb25hYmx5IGJlIGV4cGVjdGVkIHRvIGJlIG9mIGBhbnlgIHR5cGUgYXMgZmFyIGFzIFR5cGVTY3JpcHQncyB0eXBlIGNoZWNrZXIgaXMgY29uY2VybmVkLFxuICogaXQgaXMgbm90IHNhZmUgdG8gYXNzdW1lIHRoYXQgdGhlIHN0cmluZyByZXR1cm5lZCBieSBldmFsdWF0aW5nIGB0eXBlb2YgcHJvcFZhbHVlYCBtYXRjaGVzOlxuICogICAxLiBgYW55YCwgdGhlIHR5cGUgZ2l2ZW4gdG8gYHByb3BWYWx1ZWAgaW4gdGhlIGZ1bmN0aW9uIHNpZ25hdHVyZVxuICogICAyLiB0aGUgdHlwZSBzdG9yZWQgZnJvbSBgcHJvcFR5cGVgLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcHJvdmlkZXMgdGhlIGNhcGFiaWxpdHkgdG8gcGFyc2UvY29lcmNlIGEgcHJvcGVydHkncyB2YWx1ZSB0byBwb3RlbnRpYWxseSBhbnkgb3RoZXIgSmF2YVNjcmlwdCB0eXBlLlxuICpcbiAqIFByb3BlcnR5IHZhbHVlcyByZXByZXNlbnRlZCBpbiBUU1ggcHJlc2VydmUgdGhlaXIgdHlwZSBpbmZvcm1hdGlvbi4gSW4gdGhlIGV4YW1wbGUgYmVsb3csIHRoZSBudW1iZXIgMCBpcyBwYXNzZWQgdG9cbiAqIGEgY29tcG9uZW50LiBUaGlzIGBwcm9wVmFsdWVgIHdpbGwgcHJlc2VydmUgaXRzIHR5cGUgaW5mb3JtYXRpb24gKGB0eXBlb2YgcHJvcFZhbHVlID09PSAnbnVtYmVyJ2ApLiBOb3RlIHRoYXQgaXNcbiAqIGJhc2VkIG9uIHRoZSB0eXBlIG9mIHRoZSB2YWx1ZSBiZWluZyBwYXNzZWQgaW4sIG5vdCB0aGUgdHlwZSBkZWNsYXJlZCBvZiB0aGUgY2xhc3MgbWVtYmVyIGRlY29yYXRlZCB3aXRoIGBAUHJvcGAuXG4gKiBgYGB0c3hcbiAqIDxteS1jbXAgcHJvcC12YWw9ezB9PjwvbXktY21wPlxuICogYGBgXG4gKlxuICogSFRNTCBwcm9wIHZhbHVlcyBvbiB0aGUgb3RoZXIgaGFuZCwgd2lsbCBhbHdheXMgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0gcHJvcFZhbHVlIHRoZSBuZXcgdmFsdWUgdG8gY29lcmNlIHRvIHNvbWUgdHlwZVxuICogQHBhcmFtIHByb3BUeXBlIHRoZSB0eXBlIG9mIHRoZSBwcm9wLCBleHByZXNzZWQgYXMgYSBiaW5hcnkgbnVtYmVyXG4gKiBAcmV0dXJucyB0aGUgcGFyc2VkL2NvZXJjZWQgdmFsdWVcbiAqL1xuY29uc3QgcGFyc2VQcm9wZXJ0eVZhbHVlID0gKHByb3BWYWx1ZSwgcHJvcFR5cGUpID0+IHtcbiAgICAvLyBlbnN1cmUgdGhpcyB2YWx1ZSBpcyBvZiB0aGUgY29ycmVjdCBwcm9wIHR5cGVcbiAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgIWlzQ29tcGxleFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICBpZiAoQlVJTEQucHJvcEJvb2xlYW4gJiYgcHJvcFR5cGUgJiA0IC8qIE1FTUJFUl9GTEFHUy5Cb29sZWFuICovKSB7XG4gICAgICAgICAgICAvLyBwZXIgdGhlIEhUTUwgc3BlYywgYW55IHN0cmluZyB2YWx1ZSBtZWFucyBpdCBpcyBhIGJvb2xlYW4gdHJ1ZSB2YWx1ZVxuICAgICAgICAgICAgLy8gYnV0IHdlJ2xsIGNoZWF0IGhlcmUgYW5kIHNheSB0aGF0IHRoZSBzdHJpbmcgXCJmYWxzZVwiIGlzIHRoZSBib29sZWFuIGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlID09PSAnZmFsc2UnID8gZmFsc2UgOiBwcm9wVmFsdWUgPT09ICcnIHx8ICEhcHJvcFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC5wcm9wTnVtYmVyICYmIHByb3BUeXBlICYgMiAvKiBNRU1CRVJfRkxBR1MuTnVtYmVyICovKSB7XG4gICAgICAgICAgICAvLyBmb3JjZSBpdCB0byBiZSBhIG51bWJlclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQocHJvcFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQucHJvcFN0cmluZyAmJiBwcm9wVHlwZSAmIDEgLyogTUVNQkVSX0ZMQUdTLlN0cmluZyAqLykge1xuICAgICAgICAgICAgLy8gY291bGQgaGF2ZSBiZWVuIHBhc3NlZCBhcyBhIG51bWJlciBvciBib29sZWFuXG4gICAgICAgICAgICAvLyBidXQgd2Ugc3RpbGwgd2FudCBpdCBhcyBhIHN0cmluZ1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhwcm9wVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlZHVuZGFudCByZXR1cm4gaGVyZSBmb3IgYmV0dGVyIG1pbmlmaWNhdGlvblxuICAgICAgICByZXR1cm4gcHJvcFZhbHVlO1xuICAgIH1cbiAgICAvLyBub3Qgc3VyZSBleGFjdGx5IHdoYXQgdHlwZSB3ZSB3YW50XG4gICAgLy8gc28gbm8gbmVlZCB0byBjaGFuZ2UgdG8gYSBkaWZmZXJlbnQgdHlwZVxuICAgIHJldHVybiBwcm9wVmFsdWU7XG59O1xuY29uc3QgZ2V0RWxlbWVudCA9IChyZWYpID0+IChCVUlMRC5sYXp5TG9hZCA/IGdldEhvc3RSZWYocmVmKS4kaG9zdEVsZW1lbnQkIDogcmVmKTtcbmNvbnN0IGNyZWF0ZUV2ZW50ID0gKHJlZiwgbmFtZSwgZmxhZ3MpID0+IHtcbiAgICBjb25zdCBlbG0gPSBnZXRFbGVtZW50KHJlZik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZW1pdDogKGRldGFpbCkgPT4ge1xuICAgICAgICAgICAgaWYgKEJVSUxELmlzRGV2ICYmICFlbG0uaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlRGV2V2FybihgVGhlIFwiJHtuYW1lfVwiIGV2ZW50IHdhcyBlbWl0dGVkLCBidXQgdGhlIGRpc3BhdGNoZXIgbm9kZSBpcyBubyBsb25nZXIgY29ubmVjdGVkIHRvIHRoZSBkb20uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZW1pdEV2ZW50KGVsbSwgbmFtZSwge1xuICAgICAgICAgICAgICAgIGJ1YmJsZXM6ICEhKGZsYWdzICYgNCAvKiBFVkVOVF9GTEFHUy5CdWJibGVzICovKSxcbiAgICAgICAgICAgICAgICBjb21wb3NlZDogISEoZmxhZ3MgJiAyIC8qIEVWRU5UX0ZMQUdTLkNvbXBvc2VkICovKSxcbiAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiAhIShmbGFncyAmIDEgLyogRVZFTlRfRkxBR1MuQ2FuY2VsbGFibGUgKi8pLFxuICAgICAgICAgICAgICAgIGRldGFpbCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59O1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gY3JlYXRlICYgZGlzcGF0Y2ggYSBjdXN0b20gRXZlbnQgb24gYSBwcm92aWRlZCB0YXJnZXRcbiAqIEBwYXJhbSBlbG0gdGhlIHRhcmdldCBvZiB0aGUgRXZlbnRcbiAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIHRvIGdpdmUgdGhlIGN1c3RvbSBFdmVudFxuICogQHBhcmFtIG9wdHMgb3B0aW9ucyBmb3IgY29uZmlndXJpbmcgYSBjdXN0b20gRXZlbnRcbiAqIEByZXR1cm5zIHRoZSBjdXN0b20gRXZlbnRcbiAqL1xuY29uc3QgZW1pdEV2ZW50ID0gKGVsbSwgbmFtZSwgb3B0cykgPT4ge1xuICAgIGNvbnN0IGV2ID0gcGx0LmNlKG5hbWUsIG9wdHMpO1xuICAgIGVsbS5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICByZXR1cm4gZXY7XG59O1xuY29uc3Qgcm9vdEFwcGxpZWRTdHlsZXMgPSAvKkBfX1BVUkVfXyovIG5ldyBXZWFrTWFwKCk7XG5jb25zdCByZWdpc3RlclN0eWxlID0gKHNjb3BlSWQsIGNzc1RleHQsIGFsbG93Q1MpID0+IHtcbiAgICBsZXQgc3R5bGUgPSBzdHlsZXMuZ2V0KHNjb3BlSWQpO1xuICAgIGlmIChzdXBwb3J0c0NvbnN0cnVjdGFibGVTdHlsZXNoZWV0cyAmJiBhbGxvd0NTKSB7XG4gICAgICAgIHN0eWxlID0gKHN0eWxlIHx8IG5ldyBDU1NTdHlsZVNoZWV0KCkpO1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc3R5bGUgPSBjc3NUZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3R5bGUucmVwbGFjZVN5bmMoY3NzVGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0eWxlID0gY3NzVGV4dDtcbiAgICB9XG4gICAgc3R5bGVzLnNldChzY29wZUlkLCBzdHlsZSk7XG59O1xuY29uc3QgYWRkU3R5bGUgPSAoc3R5bGVDb250YWluZXJOb2RlLCBjbXBNZXRhLCBtb2RlLCBob3N0RWxtKSA9PiB7XG4gICAgdmFyIF9hO1xuICAgIGxldCBzY29wZUlkID0gZ2V0U2NvcGVJZChjbXBNZXRhLCBtb2RlKTtcbiAgICBjb25zdCBzdHlsZSA9IHN0eWxlcy5nZXQoc2NvcGVJZCk7XG4gICAgaWYgKCFCVUlMRC5hdHRhY2hTdHlsZXMpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlSWQ7XG4gICAgfVxuICAgIC8vIGlmIGFuIGVsZW1lbnQgaXMgTk9UIGNvbm5lY3RlZCB0aGVuIGdldFJvb3ROb2RlKCkgd2lsbCByZXR1cm4gdGhlIHdyb25nIHJvb3Qgbm9kZVxuICAgIC8vIHNvIHRoZSBmYWxsYmFjayBpcyB0byBhbHdheXMgdXNlIHRoZSBkb2N1bWVudCBmb3IgdGhlIHJvb3Qgbm9kZSBpbiB0aG9zZSBjYXNlc1xuICAgIHN0eWxlQ29udGFpbmVyTm9kZSA9IHN0eWxlQ29udGFpbmVyTm9kZS5ub2RlVHlwZSA9PT0gMTEgLyogTk9ERV9UWVBFLkRvY3VtZW50RnJhZ21lbnQgKi8gPyBzdHlsZUNvbnRhaW5lck5vZGUgOiBkb2M7XG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUgPSBzdHlsZUNvbnRhaW5lck5vZGUuaGVhZCB8fCBzdHlsZUNvbnRhaW5lck5vZGU7XG4gICAgICAgICAgICBsZXQgYXBwbGllZFN0eWxlcyA9IHJvb3RBcHBsaWVkU3R5bGVzLmdldChzdHlsZUNvbnRhaW5lck5vZGUpO1xuICAgICAgICAgICAgbGV0IHN0eWxlRWxtO1xuICAgICAgICAgICAgaWYgKCFhcHBsaWVkU3R5bGVzKSB7XG4gICAgICAgICAgICAgICAgcm9vdEFwcGxpZWRTdHlsZXMuc2V0KHN0eWxlQ29udGFpbmVyTm9kZSwgKGFwcGxpZWRTdHlsZXMgPSBuZXcgU2V0KCkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYXBwbGllZFN0eWxlcy5oYXMoc2NvcGVJZCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoQlVJTEQuaHlkcmF0ZUNsaWVudFNpZGUgJiZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVDb250YWluZXJOb2RlLmhvc3QgJiZcbiAgICAgICAgICAgICAgICAgICAgKHN0eWxlRWxtID0gc3R5bGVDb250YWluZXJOb2RlLnF1ZXJ5U2VsZWN0b3IoYFske0hZRFJBVEVEX1NUWUxFX0lEfT1cIiR7c2NvcGVJZH1cIl1gKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBvbmx5IGhhcHBlbmluZyBvbiBuYXRpdmUgc2hhZG93LWRvbSwgZG8gbm90IG5lZWRzIENTUyB2YXIgc2hpbVxuICAgICAgICAgICAgICAgICAgICBzdHlsZUVsbS5pbm5lckhUTUwgPSBzdHlsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5jc3NWYXJTaGltICYmIHBsdC4kY3NzU2hpbSQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtID0gcGx0LiRjc3NTaGltJC5jcmVhdGVIb3N0U3R5bGUoaG9zdEVsbSwgc2NvcGVJZCwgc3R5bGUsICEhKGNtcE1ldGEuJGZsYWdzJCAmIDEwIC8qIENNUF9GTEFHUy5uZWVkc1Njb3BlZEVuY2Fwc3VsYXRpb24gKi8pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Njb3BlSWQgPSBzdHlsZUVsbVsncy1zYyddO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1Njb3BlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZUlkID0gbmV3U2NvcGVJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBkb24ndCB3YW50IHRvIGFkZCB0aGlzIHN0eWxlSUQgdG8gdGhlIGFwcGxpZWRTdHlsZXMgU2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgdGhlIGNzc1ZhclNoaW0gbWlnaHQgbmVlZCB0byBhcHBseSBzZXZlcmFsIGRpZmZlcmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0eWxlc2hlZXRzIGZvciB0aGUgc2FtZSBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWVkU3R5bGVzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlRWxtID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUVsbS5pbm5lckhUTUwgPSBzdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBBcHBseSBDU1Agbm9uY2UgdG8gdGhlIHN0eWxlIHRhZyBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9uY2UgPSAoX2EgPSBwbHQuJG5vbmNlJCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogcXVlcnlOb25jZU1ldGFUYWdDb250ZW50KGRvYyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub25jZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZUVsbS5zZXRBdHRyaWJ1dGUoJ25vbmNlJywgbm9uY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSB8fCBCVUlMRC5ob3RNb2R1bGVSZXBsYWNlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVFbG0uc2V0QXR0cmlidXRlKEhZRFJBVEVEX1NUWUxFX0lELCBzY29wZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuaW5zZXJ0QmVmb3JlKHN0eWxlRWxtLCBzdHlsZUNvbnRhaW5lck5vZGUucXVlcnlTZWxlY3RvcignbGluaycpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFwcGxpZWRTdHlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbGllZFN0eWxlcy5hZGQoc2NvcGVJZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEJVSUxELmNvbnN0cnVjdGFibGVDU1MgJiYgIXN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMuaW5jbHVkZXMoc3R5bGUpKSB7XG4gICAgICAgICAgICBzdHlsZUNvbnRhaW5lck5vZGUuYWRvcHRlZFN0eWxlU2hlZXRzID0gWy4uLnN0eWxlQ29udGFpbmVyTm9kZS5hZG9wdGVkU3R5bGVTaGVldHMsIHN0eWxlXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2NvcGVJZDtcbn07XG5jb25zdCBhdHRhY2hTdHlsZXMgPSAoaG9zdFJlZikgPT4ge1xuICAgIGNvbnN0IGNtcE1ldGEgPSBob3N0UmVmLiRjbXBNZXRhJDtcbiAgICBjb25zdCBlbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gICAgY29uc3QgZmxhZ3MgPSBjbXBNZXRhLiRmbGFncyQ7XG4gICAgY29uc3QgZW5kQXR0YWNoU3R5bGVzID0gY3JlYXRlVGltZSgnYXR0YWNoU3R5bGVzJywgY21wTWV0YS4kdGFnTmFtZSQpO1xuICAgIGNvbnN0IHNjb3BlSWQgPSBhZGRTdHlsZShCVUlMRC5zaGFkb3dEb20gJiYgc3VwcG9ydHNTaGFkb3cgJiYgZWxtLnNoYWRvd1Jvb3QgPyBlbG0uc2hhZG93Um9vdCA6IGVsbS5nZXRSb290Tm9kZSgpLCBjbXBNZXRhLCBob3N0UmVmLiRtb2RlTmFtZSQsIGVsbSk7XG4gICAgaWYgKChCVUlMRC5zaGFkb3dEb20gfHwgQlVJTEQuc2NvcGVkKSAmJiBCVUlMRC5jc3NBbm5vdGF0aW9ucyAmJiBmbGFncyAmIDEwIC8qIENNUF9GTEFHUy5uZWVkc1Njb3BlZEVuY2Fwc3VsYXRpb24gKi8pIHtcbiAgICAgICAgLy8gb25seSByZXF1aXJlZCB3aGVuIHdlJ3JlIE5PVCB1c2luZyBuYXRpdmUgc2hhZG93IGRvbSAoc2xvdClcbiAgICAgICAgLy8gb3IgdGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBuYXRpdmUgc2hhZG93IGRvbVxuICAgICAgICAvLyBhbmQgdGhpcyBob3N0IGVsZW1lbnQgd2FzIE5PVCBjcmVhdGVkIHdpdGggU1NSXG4gICAgICAgIC8vIGxldCdzIHBpY2sgb3V0IHRoZSBpbm5lciBjb250ZW50IGZvciBzbG90IHByb2plY3Rpb25cbiAgICAgICAgLy8gY3JlYXRlIGEgbm9kZSB0byByZXByZXNlbnQgd2hlcmUgdGhlIG9yaWdpbmFsXG4gICAgICAgIC8vIGNvbnRlbnQgd2FzIGZpcnN0IHBsYWNlZCwgd2hpY2ggaXMgdXNlZnVsIGxhdGVyIG9uXG4gICAgICAgIC8vIERPTSBXUklURSEhXG4gICAgICAgIGVsbVsncy1zYyddID0gc2NvcGVJZDtcbiAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoc2NvcGVJZCArICctaCcpO1xuICAgICAgICBpZiAoQlVJTEQuc2NvcGVkICYmIGZsYWdzICYgMiAvKiBDTVBfRkxBR1Muc2NvcGVkQ3NzRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoc2NvcGVJZCArICctcycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVuZEF0dGFjaFN0eWxlcygpO1xufTtcbmNvbnN0IGdldFNjb3BlSWQgPSAoY21wLCBtb2RlKSA9PiAnc2MtJyArIChCVUlMRC5tb2RlICYmIG1vZGUgJiYgY21wLiRmbGFncyQgJiAzMiAvKiBDTVBfRkxBR1MuaGFzTW9kZSAqLyA/IGNtcC4kdGFnTmFtZSQgKyAnLScgKyBtb2RlIDogY21wLiR0YWdOYW1lJCk7XG5jb25zdCBjb252ZXJ0U2NvcGVkVG9TaGFkb3cgPSAoY3NzKSA9PiBjc3MucmVwbGFjZSgvXFwvXFwqIUAoW15cXC9dKylcXCpcXC9bXlxce10rXFx7L2csICckMXsnKTtcbi8qKlxuICogUHJvZHVjdGlvbiBzZXRBY2Nlc3NvcigpIGZ1bmN0aW9uIGJhc2VkIG9uIFByZWFjdCBieVxuICogSmFzb24gTWlsbGVyIChAZGV2ZWxvcGl0KVxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3ByZWFjdC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKlxuICogTW9kaWZpZWQgZm9yIFN0ZW5jaWwncyBjb21waWxlciBhbmQgdmRvbVxuICovXG5jb25zdCBzZXRBY2Nlc3NvciA9IChlbG0sIG1lbWJlck5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSwgaXNTdmcsIGZsYWdzKSA9PiB7XG4gICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICBsZXQgaXNQcm9wID0gaXNNZW1iZXJJbkVsZW1lbnQoZWxtLCBtZW1iZXJOYW1lKTtcbiAgICAgICAgbGV0IGxuID0gbWVtYmVyTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoQlVJTEQudmRvbUNsYXNzICYmIG1lbWJlck5hbWUgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzTGlzdCA9IGVsbS5jbGFzc0xpc3Q7XG4gICAgICAgICAgICBjb25zdCBvbGRDbGFzc2VzID0gcGFyc2VDbGFzc0xpc3Qob2xkVmFsdWUpO1xuICAgICAgICAgICAgY29uc3QgbmV3Q2xhc3NlcyA9IHBhcnNlQ2xhc3NMaXN0KG5ld1ZhbHVlKTtcbiAgICAgICAgICAgIGNsYXNzTGlzdC5yZW1vdmUoLi4ub2xkQ2xhc3Nlcy5maWx0ZXIoKGMpID0+IGMgJiYgIW5ld0NsYXNzZXMuaW5jbHVkZXMoYykpKTtcbiAgICAgICAgICAgIGNsYXNzTGlzdC5hZGQoLi4ubmV3Q2xhc3Nlcy5maWx0ZXIoKGMpID0+IGMgJiYgIW9sZENsYXNzZXMuaW5jbHVkZXMoYykpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChCVUlMRC52ZG9tU3R5bGUgJiYgbWVtYmVyTmFtZSA9PT0gJ3N0eWxlJykge1xuICAgICAgICAgICAgLy8gdXBkYXRlIHN0eWxlIGF0dHJpYnV0ZSwgY3NzIHByb3BlcnRpZXMgYW5kIHZhbHVlc1xuICAgICAgICAgICAgaWYgKEJVSUxELnVwZGF0YWJsZSkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbHVlIHx8IG5ld1ZhbHVlW3Byb3BdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgJiYgcHJvcC5pbmNsdWRlcygnLScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3ApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnN0eWxlW3Byb3BdID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHByb3AgaW4gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW9sZFZhbHVlIHx8IG5ld1ZhbHVlW3Byb3BdICE9PSBvbGRWYWx1ZVtwcm9wXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlICYmIHByb3AuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnN0eWxlLnNldFByb3BlcnR5KHByb3AsIG5ld1ZhbHVlW3Byb3BdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5zdHlsZVtwcm9wXSA9IG5ld1ZhbHVlW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEJVSUxELnZkb21LZXkgJiYgbWVtYmVyTmFtZSA9PT0gJ2tleScpXG4gICAgICAgICAgICA7XG4gICAgICAgIGVsc2UgaWYgKEJVSUxELnZkb21SZWYgJiYgbWVtYmVyTmFtZSA9PT0gJ3JlZicpIHtcbiAgICAgICAgICAgIC8vIG1pbmlmaWVyIHdpbGwgY2xlYW4gdGhpcyB1cFxuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbmV3VmFsdWUoZWxtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChCVUlMRC52ZG9tTGlzdGVuZXIgJiZcbiAgICAgICAgICAgIChCVUlMRC5sYXp5TG9hZCA/ICFpc1Byb3AgOiAhZWxtLl9fbG9va3VwU2V0dGVyX18obWVtYmVyTmFtZSkpICYmXG4gICAgICAgICAgICBtZW1iZXJOYW1lWzBdID09PSAnbycgJiZcbiAgICAgICAgICAgIG1lbWJlck5hbWVbMV0gPT09ICduJykge1xuICAgICAgICAgICAgLy8gRXZlbnQgSGFuZGxlcnNcbiAgICAgICAgICAgIC8vIHNvIGlmIHRoZSBtZW1iZXIgbmFtZSBzdGFydHMgd2l0aCBcIm9uXCIgYW5kIHRoZSAzcmQgY2hhcmFjdGVycyBpc1xuICAgICAgICAgICAgLy8gYSBjYXBpdGFsIGxldHRlciwgYW5kIGl0J3Mgbm90IGFscmVhZHkgYSBtZW1iZXIgb24gdGhlIGVsZW1lbnQsXG4gICAgICAgICAgICAvLyB0aGVuIHdlJ3JlIGFzc3VtaW5nIGl0J3MgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgICAgICAgIGlmIChtZW1iZXJOYW1lWzJdID09PSAnLScpIHtcbiAgICAgICAgICAgICAgICAvLyBvbi0gcHJlZml4ZWQgZXZlbnRzXG4gICAgICAgICAgICAgICAgLy8gYWxsb3dzIHRvIGJlIGV4cGxpY2l0IGFib3V0IHRoZSBkb20gZXZlbnQgdG8gbGlzdGVuIHdpdGhvdXQgYW55IG1hZ2ljXG4gICAgICAgICAgICAgICAgLy8gdW5kZXIgdGhlIGhvb2Q6XG4gICAgICAgICAgICAgICAgLy8gPG15LWNtcCBvbi1jbGljaz4gLy8gbGlzdGVucyBmb3IgXCJjbGlja1wiXG4gICAgICAgICAgICAgICAgLy8gPG15LWNtcCBvbi1DbGljaz4gLy8gbGlzdGVucyBmb3IgXCJDbGlja1wiXG4gICAgICAgICAgICAgICAgLy8gPG15LWNtcCBvbi1pb25DaGFuZ2U+IC8vIGxpc3RlbnMgZm9yIFwiaW9uQ2hhbmdlXCJcbiAgICAgICAgICAgICAgICAvLyA8bXktY21wIG9uLUVWRU5UUz4gLy8gbGlzdGVucyBmb3IgXCJFVkVOVFNcIlxuICAgICAgICAgICAgICAgIG1lbWJlck5hbWUgPSBtZW1iZXJOYW1lLnNsaWNlKDMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaXNNZW1iZXJJbkVsZW1lbnQod2luLCBsbikpIHtcbiAgICAgICAgICAgICAgICAvLyBzdGFuZGFyZCBldmVudFxuICAgICAgICAgICAgICAgIC8vIHRoZSBKU1ggYXR0cmlidXRlIGNvdWxkIGhhdmUgYmVlbiBcIm9uTW91c2VPdmVyXCIgYW5kIHRoZVxuICAgICAgICAgICAgICAgIC8vIG1lbWJlciBuYW1lIFwib25tb3VzZW92ZXJcIiBpcyBvbiB0aGUgd2luZG93J3MgcHJvdG90eXBlXG4gICAgICAgICAgICAgICAgLy8gc28gbGV0J3MgYWRkIHRoZSBsaXN0ZW5lciBcIm1vdXNlb3ZlclwiLCB3aGljaCBpcyBhbGwgbG93ZXJjYXNlZFxuICAgICAgICAgICAgICAgIG1lbWJlck5hbWUgPSBsbi5zbGljZSgyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGN1c3RvbSBldmVudFxuICAgICAgICAgICAgICAgIC8vIHRoZSBKU1ggYXR0cmlidXRlIGNvdWxkIGhhdmUgYmVlbiBcIm9uTXlDdXN0b21FdmVudFwiXG4gICAgICAgICAgICAgICAgLy8gc28gbGV0J3MgdHJpbSBvZmYgdGhlIFwib25cIiBwcmVmaXggYW5kIGxvd2VyY2FzZSB0aGUgZmlyc3QgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgLy8gYW5kIGFkZCB0aGUgbGlzdGVuZXIgXCJteUN1c3RvbUV2ZW50XCJcbiAgICAgICAgICAgICAgICAvLyBleGNlcHQgZm9yIHRoZSBmaXJzdCBjaGFyYWN0ZXIsIHdlIGtlZXAgdGhlIGV2ZW50IG5hbWUgY2FzZVxuICAgICAgICAgICAgICAgIG1lbWJlck5hbWUgPSBsblsyXSArIG1lbWJlck5hbWUuc2xpY2UoMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwbHQucmVsKGVsbSwgbWVtYmVyTmFtZSwgb2xkVmFsdWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHBsdC5hZWwoZWxtLCBtZW1iZXJOYW1lLCBuZXdWYWx1ZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEJVSUxELnZkb21Qcm9wT3JBdHRyKSB7XG4gICAgICAgICAgICAvLyBTZXQgcHJvcGVydHkgaWYgaXQgZXhpc3RzIGFuZCBpdCdzIG5vdCBhIFNWR1xuICAgICAgICAgICAgY29uc3QgaXNDb21wbGV4ID0gaXNDb21wbGV4VHlwZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoKGlzUHJvcCB8fCAoaXNDb21wbGV4ICYmIG5ld1ZhbHVlICE9PSBudWxsKSkgJiYgIWlzU3ZnKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFlbG0udGFnTmFtZS5pbmNsdWRlcygnLScpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuID0gbmV3VmFsdWUgPT0gbnVsbCA/ICcnIDogbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBTYWZhcmksIG1vdmluZyB0aGUgPGlucHV0PiBjYXJldCB3aGVuIHJlLWFzc2lnbmluZyB0aGUgc2FtZSB2YWx1ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZW1iZXJOYW1lID09PSAnbGlzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Byb3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9sZFZhbHVlID09IG51bGwgfHwgZWxtW21lbWJlck5hbWVdICE9IG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbG1bbWVtYmVyTmFtZV0gPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtW21lbWJlck5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBOZWVkIHRvIG1hbnVhbGx5IHVwZGF0ZSBhdHRyaWJ1dGUgaWY6XG4gICAgICAgICAgICAgKiAtIG1lbWJlck5hbWUgaXMgbm90IGFuIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICogLSBpZiB3ZSBhcmUgcmVuZGVyaW5nIHRoZSBob3N0IGVsZW1lbnQgaW4gb3JkZXIgdG8gcmVmbGVjdCBhdHRyaWJ1dGVcbiAgICAgICAgICAgICAqIC0gaWYgaXQncyBhIFNWRywgc2luY2UgcHJvcGVydGllcyBtaWdodCBub3Qgd29yayBpbiA8c3ZnPlxuICAgICAgICAgICAgICogLSBpZiB0aGUgbmV3VmFsdWUgaXMgbnVsbC91bmRlZmluZWQgb3IgJ2ZhbHNlJy5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbGV0IHhsaW5rID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoQlVJTEQudmRvbVhsaW5rKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxuICE9PSAobG4gPSBsbi5yZXBsYWNlKC9eeGxpbmtcXDo/LywgJycpKSkge1xuICAgICAgICAgICAgICAgICAgICBtZW1iZXJOYW1lID0gbG47XG4gICAgICAgICAgICAgICAgICAgIHhsaW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPT0gbnVsbCB8fCBuZXdWYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAobmV3VmFsdWUgIT09IGZhbHNlIHx8IGVsbS5nZXRBdHRyaWJ1dGUobWVtYmVyTmFtZSkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC52ZG9tWGxpbmsgJiYgeGxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGVOUyhYTElOS19OUywgbWVtYmVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKG1lbWJlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoKCFpc1Byb3AgfHwgZmxhZ3MgJiA0IC8qIFZOT0RFX0ZMQUdTLmlzSG9zdCAqLyB8fCBpc1N2ZykgJiYgIWlzQ29tcGxleCkge1xuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gbmV3VmFsdWUgPT09IHRydWUgPyAnJyA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChCVUlMRC52ZG9tWGxpbmsgJiYgeGxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZU5TKFhMSU5LX05TLCBtZW1iZXJOYW1lLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKG1lbWJlck5hbWUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgcGFyc2VDbGFzc0xpc3RSZWdleCA9IC9cXHMvO1xuY29uc3QgcGFyc2VDbGFzc0xpc3QgPSAodmFsdWUpID0+ICghdmFsdWUgPyBbXSA6IHZhbHVlLnNwbGl0KHBhcnNlQ2xhc3NMaXN0UmVnZXgpKTtcbmNvbnN0IHVwZGF0ZUVsZW1lbnQgPSAob2xkVm5vZGUsIG5ld1Zub2RlLCBpc1N2Z01vZGUsIG1lbWJlck5hbWUpID0+IHtcbiAgICAvLyBpZiB0aGUgZWxlbWVudCBwYXNzZWQgaW4gaXMgYSBzaGFkb3cgcm9vdCwgd2hpY2ggaXMgYSBkb2N1bWVudCBmcmFnbWVudFxuICAgIC8vIHRoZW4gd2Ugd2FudCB0byBiZSBhZGRpbmcgYXR0cnMvcHJvcHMgdG8gdGhlIHNoYWRvdyByb290J3MgXCJob3N0XCIgZWxlbWVudFxuICAgIC8vIGlmIGl0J3Mgbm90IGEgc2hhZG93IHJvb3QsIHRoZW4gd2UgYWRkIGF0dHJzL3Byb3BzIHRvIHRoZSBzYW1lIGVsZW1lbnRcbiAgICBjb25zdCBlbG0gPSBuZXdWbm9kZS4kZWxtJC5ub2RlVHlwZSA9PT0gMTEgLyogTk9ERV9UWVBFLkRvY3VtZW50RnJhZ21lbnQgKi8gJiYgbmV3Vm5vZGUuJGVsbSQuaG9zdFxuICAgICAgICA/IG5ld1Zub2RlLiRlbG0kLmhvc3RcbiAgICAgICAgOiBuZXdWbm9kZS4kZWxtJDtcbiAgICBjb25zdCBvbGRWbm9kZUF0dHJzID0gKG9sZFZub2RlICYmIG9sZFZub2RlLiRhdHRycyQpIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBuZXdWbm9kZUF0dHJzID0gbmV3Vm5vZGUuJGF0dHJzJCB8fCBFTVBUWV9PQko7XG4gICAgaWYgKEJVSUxELnVwZGF0YWJsZSkge1xuICAgICAgICAvLyByZW1vdmUgYXR0cmlidXRlcyBubyBsb25nZXIgcHJlc2VudCBvbiB0aGUgdm5vZGUgYnkgc2V0dGluZyB0aGVtIHRvIHVuZGVmaW5lZFxuICAgICAgICBmb3IgKG1lbWJlck5hbWUgaW4gb2xkVm5vZGVBdHRycykge1xuICAgICAgICAgICAgaWYgKCEobWVtYmVyTmFtZSBpbiBuZXdWbm9kZUF0dHJzKSkge1xuICAgICAgICAgICAgICAgIHNldEFjY2Vzc29yKGVsbSwgbWVtYmVyTmFtZSwgb2xkVm5vZGVBdHRyc1ttZW1iZXJOYW1lXSwgdW5kZWZpbmVkLCBpc1N2Z01vZGUsIG5ld1Zub2RlLiRmbGFncyQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGFkZCBuZXcgJiB1cGRhdGUgY2hhbmdlZCBhdHRyaWJ1dGVzXG4gICAgZm9yIChtZW1iZXJOYW1lIGluIG5ld1Zub2RlQXR0cnMpIHtcbiAgICAgICAgc2V0QWNjZXNzb3IoZWxtLCBtZW1iZXJOYW1lLCBvbGRWbm9kZUF0dHJzW21lbWJlck5hbWVdLCBuZXdWbm9kZUF0dHJzW21lbWJlck5hbWVdLCBpc1N2Z01vZGUsIG5ld1Zub2RlLiRmbGFncyQpO1xuICAgIH1cbn07XG4vKipcbiAqIENyZWF0ZSBhIERPTSBOb2RlIGNvcnJlc3BvbmRpbmcgdG8gb25lIG9mIHRoZSBjaGlsZHJlbiBvZiBhIGdpdmVuIFZOb2RlLlxuICpcbiAqIEBwYXJhbSBvbGRQYXJlbnRWTm9kZSB0aGUgcGFyZW50IFZOb2RlIGZyb20gdGhlIHByZXZpb3VzIHJlbmRlclxuICogQHBhcmFtIG5ld1BhcmVudFZOb2RlIHRoZSBwYXJlbnQgVk5vZGUgZnJvbSB0aGUgY3VycmVudCByZW5kZXJcbiAqIEBwYXJhbSBjaGlsZEluZGV4IHRoZSBpbmRleCBvZiB0aGUgVk5vZGUsIGluIHRoZSBfbmV3XyBwYXJlbnQgbm9kZSdzXG4gKiBjaGlsZHJlbiwgZm9yIHdoaWNoIHdlIHdpbGwgY3JlYXRlIGEgbmV3IERPTSBub2RlXG4gKiBAcGFyYW0gcGFyZW50RWxtIHRoZSBwYXJlbnQgRE9NIG5vZGUgd2hpY2ggb3VyIG5ldyBub2RlIHdpbGwgYmUgYSBjaGlsZCBvZlxuICogQHJldHVybnMgdGhlIG5ld2x5IGNyZWF0ZWQgbm9kZVxuICovXG5jb25zdCBjcmVhdGVFbG0gPSAob2xkUGFyZW50Vk5vZGUsIG5ld1BhcmVudFZOb2RlLCBjaGlsZEluZGV4LCBwYXJlbnRFbG0pID0+IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1jb25zdFxuICAgIGNvbnN0IG5ld1ZOb2RlID0gbmV3UGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZEluZGV4XTtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGVsbTtcbiAgICBsZXQgY2hpbGROb2RlO1xuICAgIGxldCBvbGRWTm9kZTtcbiAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgIXVzZU5hdGl2ZVNoYWRvd0RvbSkge1xuICAgICAgICAvLyByZW1lbWJlciBmb3IgbGF0ZXIgd2UgbmVlZCB0byBjaGVjayB0byByZWxvY2F0ZSBub2Rlc1xuICAgICAgICBjaGVja1Nsb3RSZWxvY2F0ZSA9IHRydWU7XG4gICAgICAgIGlmIChuZXdWTm9kZS4kdGFnJCA9PT0gJ3Nsb3QnKSB7XG4gICAgICAgICAgICBpZiAoc2NvcGVJZCkge1xuICAgICAgICAgICAgICAgIC8vIHNjb3BlZCBjc3MgbmVlZHMgdG8gYWRkIGl0cyBzY29wZWQgaWQgdG8gdGhlIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAgICAgICAgcGFyZW50RWxtLmNsYXNzTGlzdC5hZGQoc2NvcGVJZCArICctcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3Vk5vZGUuJGZsYWdzJCB8PSBuZXdWTm9kZS4kY2hpbGRyZW4kXG4gICAgICAgICAgICAgICAgPyAvLyBzbG90IGVsZW1lbnQgaGFzIGZhbGxiYWNrIGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgMiAvKiBWTk9ERV9GTEFHUy5pc1Nsb3RGYWxsYmFjayAqL1xuICAgICAgICAgICAgICAgIDogLy8gc2xvdCBlbGVtZW50IGRvZXMgbm90IGhhdmUgZmFsbGJhY2sgY29udGVudFxuICAgICAgICAgICAgICAgICAgICAxIC8qIFZOT0RFX0ZMQUdTLmlzU2xvdFJlZmVyZW5jZSAqLztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoQlVJTEQuaXNEZXYgJiYgbmV3Vk5vZGUuJGVsbSQpIHtcbiAgICAgICAgY29uc29sZURldkVycm9yKGBUaGUgSlNYICR7bmV3Vk5vZGUuJHRleHQkICE9PSBudWxsID8gYFwiJHtuZXdWTm9kZS4kdGV4dCR9XCIgdGV4dGAgOiBgXCIke25ld1ZOb2RlLiR0YWckfVwiIGVsZW1lbnRgfSBub2RlIHNob3VsZCBub3QgYmUgc2hhcmVkIHdpdGhpbiB0aGUgc2FtZSByZW5kZXJlci4gVGhlIHJlbmRlcmVyIGNhY2hlcyBlbGVtZW50IGxvb2t1cHMgaW4gb3JkZXIgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS4gSG93ZXZlciwgYSBzaWRlIGVmZmVjdCBmcm9tIHRoaXMgaXMgdGhhdCB0aGUgZXhhY3Qgc2FtZSBKU1ggbm9kZSBzaG91bGQgbm90IGJlIHJldXNlZC4gRm9yIG1vcmUgaW5mb3JtYXRpb24gcGxlYXNlIHNlZSBodHRwczovL3N0ZW5jaWxqcy5jb20vZG9jcy90ZW1wbGF0aW5nLWpzeCNhdm9pZC1zaGFyZWQtanN4LW5vZGVzYCk7XG4gICAgfVxuICAgIGlmIChCVUlMRC52ZG9tVGV4dCAmJiBuZXdWTm9kZS4kdGV4dCQgIT09IG51bGwpIHtcbiAgICAgICAgLy8gY3JlYXRlIHRleHQgbm9kZVxuICAgICAgICBlbG0gPSBuZXdWTm9kZS4kZWxtJCA9IGRvYy5jcmVhdGVUZXh0Tm9kZShuZXdWTm9kZS4kdGV4dCQpO1xuICAgIH1cbiAgICBlbHNlIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiBuZXdWTm9kZS4kZmxhZ3MkICYgMSAvKiBWTk9ERV9GTEFHUy5pc1Nsb3RSZWZlcmVuY2UgKi8pIHtcbiAgICAgICAgLy8gY3JlYXRlIGEgc2xvdCByZWZlcmVuY2Ugbm9kZVxuICAgICAgICBlbG0gPSBuZXdWTm9kZS4kZWxtJCA9XG4gICAgICAgICAgICBCVUlMRC5pc0RlYnVnIHx8IEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlID8gc2xvdFJlZmVyZW5jZURlYnVnTm9kZShuZXdWTm9kZSkgOiBkb2MuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKEJVSUxELnN2ZyAmJiAhaXNTdmdNb2RlKSB7XG4gICAgICAgICAgICBpc1N2Z01vZGUgPSBuZXdWTm9kZS4kdGFnJCA9PT0gJ3N2Zyc7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRcbiAgICAgICAgZWxtID0gbmV3Vk5vZGUuJGVsbSQgPSAoQlVJTEQuc3ZnXG4gICAgICAgICAgICA/IGRvYy5jcmVhdGVFbGVtZW50TlMoaXNTdmdNb2RlID8gU1ZHX05TIDogSFRNTF9OUywgQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgbmV3Vk5vZGUuJGZsYWdzJCAmIDIgLyogVk5PREVfRkxBR1MuaXNTbG90RmFsbGJhY2sgKi9cbiAgICAgICAgICAgICAgICA/ICdzbG90LWZiJ1xuICAgICAgICAgICAgICAgIDogbmV3Vk5vZGUuJHRhZyQpXG4gICAgICAgICAgICA6IGRvYy5jcmVhdGVFbGVtZW50KEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIG5ld1ZOb2RlLiRmbGFncyQgJiAyIC8qIFZOT0RFX0ZMQUdTLmlzU2xvdEZhbGxiYWNrICovXG4gICAgICAgICAgICAgICAgPyAnc2xvdC1mYidcbiAgICAgICAgICAgICAgICA6IG5ld1ZOb2RlLiR0YWckKSk7XG4gICAgICAgIGlmIChCVUlMRC5zdmcgJiYgaXNTdmdNb2RlICYmIG5ld1ZOb2RlLiR0YWckID09PSAnZm9yZWlnbk9iamVjdCcpIHtcbiAgICAgICAgICAgIGlzU3ZnTW9kZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFkZCBjc3MgY2xhc3NlcywgYXR0cnMsIHByb3BzLCBsaXN0ZW5lcnMsIGV0Yy5cbiAgICAgICAgaWYgKEJVSUxELnZkb21BdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHVwZGF0ZUVsZW1lbnQobnVsbCwgbmV3Vk5vZGUsIGlzU3ZnTW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChCVUlMRC5zaGFkb3dEb20gfHwgQlVJTEQuc2NvcGVkKSAmJiBpc0RlZihzY29wZUlkKSAmJiBlbG1bJ3Mtc2knXSAhPT0gc2NvcGVJZCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgYSBzY29wZUlkIGFuZCB0aGlzIGlzIHRoZSBpbml0aWFsIHJlbmRlclxuICAgICAgICAgICAgLy8gdGhlbiBsZXQncyBhZGQgdGhlIHNjb3BlSWQgYXMgYSBjc3MgY2xhc3NcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKChlbG1bJ3Mtc2knXSA9IHNjb3BlSWQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Vk5vZGUuJGNoaWxkcmVuJCkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG5ld1ZOb2RlLiRjaGlsZHJlbiQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIG5vZGVcbiAgICAgICAgICAgICAgICBjaGlsZE5vZGUgPSBjcmVhdGVFbG0ob2xkUGFyZW50Vk5vZGUsIG5ld1ZOb2RlLCBpLCBlbG0pO1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBub2RlIGNvdWxkIGhhdmUgYmVlbiBudWxsXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBhcHBlbmQgb3VyIG5ldyBub2RlXG4gICAgICAgICAgICAgICAgICAgIGVsbS5hcHBlbmRDaGlsZChjaGlsZE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQuc3ZnKSB7XG4gICAgICAgICAgICBpZiAobmV3Vk5vZGUuJHRhZyQgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSByZXNldCB0aGUgU1ZHIGNvbnRleHQgd2hlbiB3ZSdyZSBleGl0aW5nIDxzdmc+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICBpc1N2Z01vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsbS50YWdOYW1lID09PSAnZm9yZWlnbk9iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAvLyBSZWVudGVyIFNWRyBjb250ZXh0IHdoZW4gd2UncmUgZXhpdGluZyA8Zm9yZWlnbk9iamVjdD4gZWxlbWVudFxuICAgICAgICAgICAgICAgIGlzU3ZnTW9kZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uKSB7XG4gICAgICAgIGVsbVsncy1obiddID0gaG9zdFRhZ05hbWU7XG4gICAgICAgIGlmIChuZXdWTm9kZS4kZmxhZ3MkICYgKDIgLyogVk5PREVfRkxBR1MuaXNTbG90RmFsbGJhY2sgKi8gfCAxIC8qIFZOT0RFX0ZMQUdTLmlzU2xvdFJlZmVyZW5jZSAqLykpIHtcbiAgICAgICAgICAgIC8vIHJlbWVtYmVyIHRoZSBjb250ZW50IHJlZmVyZW5jZSBjb21tZW50XG4gICAgICAgICAgICBlbG1bJ3Mtc3InXSA9IHRydWU7XG4gICAgICAgICAgICAvLyByZW1lbWJlciB0aGUgY29udGVudCByZWZlcmVuY2UgY29tbWVudFxuICAgICAgICAgICAgZWxtWydzLWNyJ10gPSBjb250ZW50UmVmO1xuICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhlIHNsb3QgbmFtZSwgb3IgZW1wdHkgc3RyaW5nIGZvciBkZWZhdWx0IHNsb3RcbiAgICAgICAgICAgIGVsbVsncy1zbiddID0gbmV3Vk5vZGUuJG5hbWUkIHx8ICcnO1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgd2UndmUgZ290IGFuIG9sZCB2bm9kZSBmb3IgdGhpcyBzbG90XG4gICAgICAgICAgICBvbGRWTm9kZSA9IG9sZFBhcmVudFZOb2RlICYmIG9sZFBhcmVudFZOb2RlLiRjaGlsZHJlbiQgJiYgb2xkUGFyZW50Vk5vZGUuJGNoaWxkcmVuJFtjaGlsZEluZGV4XTtcbiAgICAgICAgICAgIGlmIChvbGRWTm9kZSAmJiBvbGRWTm9kZS4kdGFnJCA9PT0gbmV3Vk5vZGUuJHRhZyQgJiYgb2xkUGFyZW50Vk5vZGUuJGVsbSQpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZSd2ZSBnb3QgYW4gb2xkIHNsb3Qgdm5vZGUgYW5kIHRoZSB3cmFwcGVyIGlzIGJlaW5nIHJlcGxhY2VkXG4gICAgICAgICAgICAgICAgLy8gc28gbGV0J3MgbW92ZSB0aGUgb2xkIHNsb3QgY29udGVudCBiYWNrIHRvIGl0J3Mgb3JpZ2luYWwgbG9jYXRpb25cbiAgICAgICAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKG9sZFBhcmVudFZOb2RlLiRlbG0kLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsbTtcbn07XG5jb25zdCBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uID0gKHBhcmVudEVsbSwgcmVjdXJzaXZlKSA9PiB7XG4gICAgcGx0LiRmbGFncyQgfD0gMSAvKiBQTEFURk9STV9GTEFHUy5pc1RtcERpc2Nvbm5lY3RlZCAqLztcbiAgICBjb25zdCBvbGRTbG90Q2hpbGROb2RlcyA9IHBhcmVudEVsbS5jaGlsZE5vZGVzO1xuICAgIGZvciAobGV0IGkgPSBvbGRTbG90Q2hpbGROb2Rlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGUgPSBvbGRTbG90Q2hpbGROb2Rlc1tpXTtcbiAgICAgICAgaWYgKGNoaWxkTm9kZVsncy1obiddICE9PSBob3N0VGFnTmFtZSAmJiBjaGlsZE5vZGVbJ3Mtb2wnXSkge1xuICAgICAgICAgICAgLy8gLy8gdGhpcyBjaGlsZCBub2RlIGluIHRoZSBvbGQgZWxlbWVudCBpcyBmcm9tIGFub3RoZXIgY29tcG9uZW50XG4gICAgICAgICAgICAvLyAvLyByZW1vdmUgdGhpcyBub2RlIGZyb20gdGhlIG9sZCBzbG90J3MgcGFyZW50XG4gICAgICAgICAgICAvLyBjaGlsZE5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyBhbmQgcmVsb2NhdGUgaXQgYmFjayB0byBpdCdzIG9yaWdpbmFsIGxvY2F0aW9uXG4gICAgICAgICAgICBwYXJlbnRSZWZlcmVuY2VOb2RlKGNoaWxkTm9kZSkuaW5zZXJ0QmVmb3JlKGNoaWxkTm9kZSwgcmVmZXJlbmNlTm9kZShjaGlsZE5vZGUpKTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgb2xkIG9yaWdpbmFsIGxvY2F0aW9uIGNvbW1lbnQgZW50aXJlbHlcbiAgICAgICAgICAgIC8vIGxhdGVyIG9uIHRoZSBwYXRjaCBmdW5jdGlvbiB3aWxsIGtub3cgd2hhdCB0byBkb1xuICAgICAgICAgICAgLy8gYW5kIG1vdmUgdGhpcyB0byB0aGUgY29ycmVjdCBzcG90IGluIG5lZWQgYmVcbiAgICAgICAgICAgIGNoaWxkTm9kZVsncy1vbCddLnJlbW92ZSgpO1xuICAgICAgICAgICAgY2hpbGROb2RlWydzLW9sJ10gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjaGVja1Nsb3RSZWxvY2F0ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgcHV0QmFja0luT3JpZ2luYWxMb2NhdGlvbihjaGlsZE5vZGUsIHJlY3Vyc2l2ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcGx0LiRmbGFncyQgJj0gfjEgLyogUExBVEZPUk1fRkxBR1MuaXNUbXBEaXNjb25uZWN0ZWQgKi87XG59O1xuLyoqXG4gKiBDcmVhdGUgRE9NIG5vZGVzIGNvcnJlc3BvbmRpbmcgdG8gYSBsaXN0IG9mIHtAbGluayBkLlZub2RlfSBvYmplY3RzIGFuZFxuICogYWRkIHRoZW0gdG8gdGhlIERPTSBpbiB0aGUgYXBwcm9wcmlhdGUgcGxhY2UuXG4gKlxuICogQHBhcmFtIHBhcmVudEVsbSB0aGUgRE9NIG5vZGUgd2hpY2ggc2hvdWxkIGJlIHVzZWQgYXMgYSBwYXJlbnQgZm9yIHRoZSBuZXdcbiAqIERPTSBub2Rlc1xuICogQHBhcmFtIGJlZm9yZSBhIGNoaWxkIG9mIHRoZSBgcGFyZW50RWxtYCB3aGljaCB0aGUgbmV3IGNoaWxkcmVuIHNob3VsZCBiZVxuICogaW5zZXJ0ZWQgYmVmb3JlIChvcHRpb25hbClcbiAqIEBwYXJhbSBwYXJlbnRWTm9kZSB0aGUgcGFyZW50IHZpcnR1YWwgRE9NIG5vZGVcbiAqIEBwYXJhbSB2bm9kZXMgdGhlIG5ldyBjaGlsZCB2aXJ0dWFsIERPTSBub2RlcyB0byBwcm9kdWNlIERPTSBub2RlcyBmb3JcbiAqIEBwYXJhbSBzdGFydElkeCB0aGUgaW5kZXggaW4gdGhlIGNoaWxkIHZpcnR1YWwgRE9NIG5vZGVzIGF0IHdoaWNoIHRvIHN0YXJ0XG4gKiBjcmVhdGluZyBET00gbm9kZXMgKGluY2x1c2l2ZSlcbiAqIEBwYXJhbSBlbmRJZHggdGhlIGluZGV4IGluIHRoZSBjaGlsZCB2aXJ0dWFsIERPTSBub2RlcyBhdCB3aGljaCB0byBzdG9wXG4gKiBjcmVhdGluZyBET00gbm9kZXMgKGluY2x1c2l2ZSlcbiAqL1xuY29uc3QgYWRkVm5vZGVzID0gKHBhcmVudEVsbSwgYmVmb3JlLCBwYXJlbnRWTm9kZSwgdm5vZGVzLCBzdGFydElkeCwgZW5kSWR4KSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lckVsbSA9ICgoQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgcGFyZW50RWxtWydzLWNyJ10gJiYgcGFyZW50RWxtWydzLWNyJ10ucGFyZW50Tm9kZSkgfHwgcGFyZW50RWxtKTtcbiAgICBsZXQgY2hpbGROb2RlO1xuICAgIGlmIChCVUlMRC5zaGFkb3dEb20gJiYgY29udGFpbmVyRWxtLnNoYWRvd1Jvb3QgJiYgY29udGFpbmVyRWxtLnRhZ05hbWUgPT09IGhvc3RUYWdOYW1lKSB7XG4gICAgICAgIGNvbnRhaW5lckVsbSA9IGNvbnRhaW5lckVsbS5zaGFkb3dSb290O1xuICAgIH1cbiAgICBmb3IgKDsgc3RhcnRJZHggPD0gZW5kSWR4OyArK3N0YXJ0SWR4KSB7XG4gICAgICAgIGlmICh2bm9kZXNbc3RhcnRJZHhdKSB7XG4gICAgICAgICAgICBjaGlsZE5vZGUgPSBjcmVhdGVFbG0obnVsbCwgcGFyZW50Vk5vZGUsIHN0YXJ0SWR4LCBwYXJlbnRFbG0pO1xuICAgICAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgICAgIHZub2Rlc1tzdGFydElkeF0uJGVsbSQgPSBjaGlsZE5vZGU7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyRWxtLmluc2VydEJlZm9yZShjaGlsZE5vZGUsIEJVSUxELnNsb3RSZWxvY2F0aW9uID8gcmVmZXJlbmNlTm9kZShiZWZvcmUpIDogYmVmb3JlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAqIFJlbW92ZSB0aGUgRE9NIGVsZW1lbnRzIGNvcnJlc3BvbmRpbmcgdG8gYSBsaXN0IG9mIHtAbGluayBkLlZOb2RlfSBvYmplY3RzLlxuICogVGhpcyBjYW4gYmUgdXNlZCB0bywgZm9yIGluc3RhbmNlLCBjbGVhbiB1cCBhZnRlciBhIGxpc3Qgb2YgY2hpbGRyZW4gd2hpY2hcbiAqIHNob3VsZCBubyBsb25nZXIgYmUgc2hvd24uXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhbHNvIGhhbmRsZXMgc29tZSBvZiBTdGVuY2lsJ3Mgc2xvdCByZWxvY2F0aW9uIGxvZ2ljLlxuICpcbiAqIEBwYXJhbSB2bm9kZXMgYSBsaXN0IG9mIHZpcnR1YWwgRE9NIG5vZGVzIHRvIHJlbW92ZVxuICogQHBhcmFtIHN0YXJ0SWR4IHRoZSBpbmRleCBhdCB3aGljaCB0byBzdGFydCByZW1vdmluZyBub2RlcyAoaW5jbHVzaXZlKVxuICogQHBhcmFtIGVuZElkeCB0aGUgaW5kZXggYXQgd2hpY2ggdG8gc3RvcCByZW1vdmluZyBub2RlcyAoaW5jbHVzaXZlKVxuICogQHBhcmFtIHZub2RlIGEgVk5vZGVcbiAqIEBwYXJhbSBlbG0gYW4gZWxlbWVudFxuICovXG5jb25zdCByZW1vdmVWbm9kZXMgPSAodm5vZGVzLCBzdGFydElkeCwgZW5kSWR4LCB2bm9kZSwgZWxtKSA9PiB7XG4gICAgZm9yICg7IHN0YXJ0SWR4IDw9IGVuZElkeDsgKytzdGFydElkeCkge1xuICAgICAgICBpZiAoKHZub2RlID0gdm5vZGVzW3N0YXJ0SWR4XSkpIHtcbiAgICAgICAgICAgIGVsbSA9IHZub2RlLiRlbG0kO1xuICAgICAgICAgICAgY2FsbE5vZGVSZWZzKHZub2RlKTtcbiAgICAgICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIHdlJ3JlIHJlbW92aW5nIHRoaXMgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIHNvIGl0J3MgcG9zc2libGUgd2UgbmVlZCB0byBzaG93IHNsb3QgZmFsbGJhY2sgY29udGVudCBub3dcbiAgICAgICAgICAgICAgICBjaGVja1Nsb3RGYWxsYmFja1Zpc2liaWxpdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChlbG1bJ3Mtb2wnXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIG9yaWdpbmFsIGxvY2F0aW9uIGNvbW1lbnRcbiAgICAgICAgICAgICAgICAgICAgZWxtWydzLW9sJ10ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgY2hpbGQgbm9kZXMgb2YgdGhlIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhhdCdzIGJlaW5nIHJlbW92ZWQgYXJlIHNsb3Qgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgcHV0QmFja0luT3JpZ2luYWxMb2NhdGlvbihlbG0sIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgdm5vZGUncyBlbGVtZW50IGZyb20gdGhlIGRvbVxuICAgICAgICAgICAgZWxtLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICogUmVjb25jaWxlIHRoZSBjaGlsZHJlbiBvZiBhIG5ldyBWTm9kZSB3aXRoIHRoZSBjaGlsZHJlbiBvZiBhbiBvbGQgVk5vZGUgYnlcbiAqIHRyYXZlcnNpbmcgdGhlIHR3byBjb2xsZWN0aW9ucyBvZiBjaGlsZHJlbiwgaWRlbnRpZnlpbmcgbm9kZXMgdGhhdCBhcmVcbiAqIGNvbnNlcnZlZCBvciBjaGFuZ2VkLCBjYWxsaW5nIG91dCB0byBgcGF0Y2hgIHRvIG1ha2UgYW55IG5lY2Vzc2FyeVxuICogdXBkYXRlcyB0byB0aGUgRE9NLCBhbmQgcmVhcnJhbmdpbmcgRE9NIG5vZGVzIGFzIG5lZWRlZC5cbiAqXG4gKiBUaGUgYWxnb3JpdGhtIGZvciByZWNvbmNpbGluZyBjaGlsZHJlbiB3b3JrcyBieSBhbmFseXppbmcgdHdvICd3aW5kb3dzJyBvbnRvXG4gKiB0aGUgdHdvIGFycmF5cyBvZiBjaGlsZHJlbiAoYG9sZENoYCBhbmQgYG5ld0NoYCkuIFdlIGtlZXAgdHJhY2sgb2YgdGhlXG4gKiAnd2luZG93cycgYnkgc3RvcmluZyBzdGFydCBhbmQgZW5kIGluZGljZXMgYW5kIHJlZmVyZW5jZXMgdG8gdGhlXG4gKiBjb3JyZXNwb25kaW5nIGFycmF5IGVudHJpZXMuIEluaXRpYWxseSB0aGUgdHdvICd3aW5kb3dzJyBhcmUgYmFzaWNhbGx5IGVxdWFsXG4gKiB0byB0aGUgZW50aXJlIGFycmF5LCBidXQgd2UgcHJvZ3Jlc3NpdmVseSBuYXJyb3cgdGhlIHdpbmRvd3MgdW50aWwgdGhlcmUgYXJlXG4gKiBubyBjaGlsZHJlbiBsZWZ0IHRvIHVwZGF0ZSBieSBkb2luZyB0aGUgZm9sbG93aW5nOlxuICpcbiAqIDEuIFNraXAgYW55IGBudWxsYCBlbnRyaWVzIGF0IHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSB0d28gYXJyYXlzLCBzb1xuICogICAgdGhhdCBpZiB3ZSBoYXZlIGFuIGluaXRpYWwgYXJyYXkgbGlrZSB0aGUgZm9sbG93aW5nIHdlJ2xsIGVuZCB1cCBkZWFsaW5nXG4gKiAgICBvbmx5IHdpdGggYSB3aW5kb3cgYm91bmRlZCBieSB0aGUgaGlnaGxpZ2h0ZWQgZWxlbWVudHM6XG4gKlxuICogICAgW251bGwsIG51bGwsIFZOb2RlMSAsIC4uLiAsIFZOb2RlMiwgbnVsbCwgbnVsbF1cbiAqICAgICAgICAgICAgICAgICBeXl5eXl4gICAgICAgICBeXl5eXl5cbiAqXG4gKiAyLiBDaGVjayB0byBzZWUgaWYgdGhlIGVsZW1lbnRzIGF0IHRoZSBoZWFkIGFuZCB0YWlsIHBvc2l0aW9ucyBhcmUgZXF1YWxcbiAqICAgIGFjcm9zcyB0aGUgd2luZG93cy4gVGhpcyB3aWxsIGJhc2ljYWxseSBkZXRlY3QgZWxlbWVudHMgd2hpY2ggaGF2ZW4ndFxuICogICAgYmVlbiBhZGRlZCwgcmVtb3ZlZCwgb3IgY2hhbmdlZCBwb3NpdGlvbiwgaS5lLiBpZiB5b3UgaGFkIHRoZSBmb2xsb3dpbmdcbiAqICAgIFZOb2RlIGVsZW1lbnRzIChyZXByZXNlbnRlZCBhcyBIVE1MKTpcbiAqXG4gKiAgICBvbGRWTm9kZTogYDxkaXY+PHA+PHNwYW4+SEVZPC9zcGFuPjwvcD48L2Rpdj5gXG4gKiAgICBuZXdWTm9kZTogYDxkaXY+PHA+PHNwYW4+VEhFUkU8L3NwYW4+PC9wPjwvZGl2PmBcbiAqXG4gKiAgICBUaGVuIHdoZW4gY29tcGFyaW5nIHRoZSBjaGlsZHJlbiBvZiB0aGUgYDxkaXY+YCB0YWcgd2UgY2hlY2sgdGhlIGVxdWFsaXR5XG4gKiAgICBvZiB0aGUgVk5vZGVzIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGA8cD5gIHRhZ3MgYW5kLCBzaW5jZSB0aGV5IGFyZSB0aGVcbiAqICAgIHNhbWUgdGFnIGluIHRoZSBzYW1lIHBvc2l0aW9uLCB3ZSdkIGJlIGFibGUgdG8gYXZvaWQgY29tcGxldGVseVxuICogICAgcmUtcmVuZGVyaW5nIHRoZSBzdWJ0cmVlIHVuZGVyIHRoZW0gd2l0aCBhIG5ldyBET00gZWxlbWVudCBhbmQgd291bGQganVzdFxuICogICAgY2FsbCBvdXQgdG8gYHBhdGNoYCB0byBoYW5kbGUgcmVjb25jaWxpbmcgdGhlaXIgY2hpbGRyZW4gYW5kIHNvIG9uLlxuICpcbiAqIDMuIENoZWNrLCBmb3IgYm90aCB3aW5kb3dzLCB0byBzZWUgaWYgdGhlIGVsZW1lbnQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGVcbiAqICAgIHdpbmRvdyBjb3JyZXNwb25kcyB0byB0aGUgZWxlbWVudCBhdCB0aGUgZW5kIG9mIHRoZSBvdGhlciB3aW5kb3cuIFRoaXMgaXNcbiAqICAgIGEgaGV1cmlzdGljIHdoaWNoIHdpbGwgbGV0IHVzIGlkZW50aWZ5IF9zb21lXyBzaXR1YXRpb25zIGluIHdoaWNoXG4gKiAgICBlbGVtZW50cyBoYXZlIGNoYW5nZWQgcG9zaXRpb24sIGZvciBpbnN0YW5jZSBpdCBfc2hvdWxkXyBkZXRlY3QgdGhhdCB0aGVcbiAqICAgIGNoaWxkcmVuIG5vZGVzIHRoZW1zZWx2ZXMgaGF2ZSBub3QgY2hhbmdlZCBidXQgbWVyZWx5IG1vdmVkIGluIHRoZVxuICogICAgZm9sbG93aW5nIGV4YW1wbGU6XG4gKlxuICogICAgb2xkVk5vZGU6IGA8ZGl2PjxlbGVtZW50LW9uZSAvPjxlbGVtZW50LXR3byAvPjwvZGl2PmBcbiAqICAgIG5ld1ZOb2RlOiBgPGRpdj48ZWxlbWVudC10d28gLz48ZWxlbWVudC1vbmUgLz48L2Rpdj5gXG4gKlxuICogICAgSWYgd2UgZmluZCBjYXNlcyBsaWtlIHRoaXMgdGhlbiB3ZSBhbHNvIG5lZWQgdG8gbW92ZSB0aGUgY29uY3JldGUgRE9NXG4gKiAgICBlbGVtZW50cyBjb3JyZXNwb25kaW5nIHRvIHRoZSBtb3ZlZCBjaGlsZHJlbiB0byB3cml0ZSB0aGUgcmUtb3JkZXIgdG8gdGhlXG4gKiAgICBET00uXG4gKlxuICogNC4gRmluYWxseSwgaWYgVk5vZGVzIGhhdmUgdGhlIGBrZXlgIGF0dHJpYnV0ZSBzZXQgb24gdGhlbSB3ZSBjaGVjayBmb3IgYW55XG4gKiAgICBub2RlcyBpbiB0aGUgb2xkIGNoaWxkcmVuIHdoaWNoIGhhdmUgdGhlIHNhbWUga2V5IGFzIHRoZSBmaXJzdCBlbGVtZW50IGluXG4gKiAgICBvdXIgd2luZG93IG9uIHRoZSBuZXcgY2hpbGRyZW4uIElmIHdlIGZpbmQgc3VjaCBhIG5vZGUgd2UgaGFuZGxlIGNhbGxpbmdcbiAqICAgIG91dCB0byBgcGF0Y2hgLCBtb3ZpbmcgcmVsZXZhbnQgRE9NIG5vZGVzLCBhbmQgc28gb24sIGluIGFjY29yZGFuY2Ugd2l0aFxuICogICAgd2hhdCB3ZSBmaW5kLlxuICpcbiAqIEZpbmFsbHksIG9uY2Ugd2UndmUgbmFycm93ZWQgb3VyICd3aW5kb3dzJyB0byB0aGUgcG9pbnQgdGhhdCBlaXRoZXIgb2YgdGhlbVxuICogY29sbGFwc2UgKGkuZS4gdGhleSBoYXZlIGxlbmd0aCAwKSB3ZSB0aGVuIGhhbmRsZSBhbnkgcmVtYWluaW5nIFZOb2RlXG4gKiBpbnNlcnRpb24gb3IgZGVsZXRpb24gdGhhdCBuZWVkcyB0byBoYXBwZW4gdG8gZ2V0IGEgRE9NIHN0YXRlIHRoYXQgY29ycmVjdGx5XG4gKiByZWZsZWN0cyB0aGUgbmV3IGNoaWxkIFZOb2Rlcy4gSWYsIGZvciBpbnN0YW5jZSwgYWZ0ZXIgb3VyIHdpbmRvdyBvbiB0aGUgb2xkXG4gKiBjaGlsZHJlbiBoYXMgY29sbGFwc2VkIHdlIHN0aWxsIGhhdmUgbW9yZSBub2RlcyBvbiB0aGUgbmV3IGNoaWxkcmVuIHRoYXRcbiAqIHdlIGhhdmVuJ3QgZGVhbHQgd2l0aCB5ZXQgdGhlbiB3ZSBuZWVkIHRvIGFkZCB0aGVtLCBvciBpZiB0aGUgbmV3IGNoaWxkcmVuXG4gKiBjb2xsYXBzZSBidXQgd2Ugc3RpbGwgaGF2ZSB1bmhhbmRsZWQgX29sZF8gY2hpbGRyZW4gdGhlbiB3ZSBuZWVkIHRvIG1ha2VcbiAqIHN1cmUgdGhlIGNvcnJlc3BvbmRpbmcgRE9NIG5vZGVzIGFyZSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSBwYXJlbnRFbG0gdGhlIG5vZGUgaW50byB3aGljaCB0aGUgcGFyZW50IFZOb2RlIGlzIHJlbmRlcmVkXG4gKiBAcGFyYW0gb2xkQ2ggdGhlIG9sZCBjaGlsZHJlbiBvZiB0aGUgcGFyZW50IG5vZGVcbiAqIEBwYXJhbSBuZXdWTm9kZSB0aGUgbmV3IFZOb2RlIHdoaWNoIHdpbGwgcmVwbGFjZSB0aGUgcGFyZW50XG4gKiBAcGFyYW0gbmV3Q2ggdGhlIG5ldyBjaGlsZHJlbiBvZiB0aGUgcGFyZW50IG5vZGVcbiAqL1xuY29uc3QgdXBkYXRlQ2hpbGRyZW4gPSAocGFyZW50RWxtLCBvbGRDaCwgbmV3Vk5vZGUsIG5ld0NoKSA9PiB7XG4gICAgbGV0IG9sZFN0YXJ0SWR4ID0gMDtcbiAgICBsZXQgbmV3U3RhcnRJZHggPSAwO1xuICAgIGxldCBpZHhJbk9sZCA9IDA7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBvbGRFbmRJZHggPSBvbGRDaC5sZW5ndGggLSAxO1xuICAgIGxldCBvbGRTdGFydFZub2RlID0gb2xkQ2hbMF07XG4gICAgbGV0IG9sZEVuZFZub2RlID0gb2xkQ2hbb2xkRW5kSWR4XTtcbiAgICBsZXQgbmV3RW5kSWR4ID0gbmV3Q2gubGVuZ3RoIC0gMTtcbiAgICBsZXQgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWzBdO1xuICAgIGxldCBuZXdFbmRWbm9kZSA9IG5ld0NoW25ld0VuZElkeF07XG4gICAgbGV0IG5vZGU7XG4gICAgbGV0IGVsbVRvTW92ZTtcbiAgICB3aGlsZSAob2xkU3RhcnRJZHggPD0gb2xkRW5kSWR4ICYmIG5ld1N0YXJ0SWR4IDw9IG5ld0VuZElkeCkge1xuICAgICAgICBpZiAob2xkU3RhcnRWbm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBWTm9kZSBtaWdodCBoYXZlIGJlZW4gbW92ZWQgbGVmdFxuICAgICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9sZEVuZFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld1N0YXJ0Vm5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5ld0VuZFZub2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0VuZFZub2RlID0gbmV3Q2hbLS1uZXdFbmRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgc3RhcnQgbm9kZXMgYXJlIHRoZSBzYW1lIHRoZW4gd2Ugc2hvdWxkIHBhdGNoIHRoZSBuZXcgVk5vZGVcbiAgICAgICAgICAgIC8vIG9udG8gdGhlIG9sZCBvbmUsIGFuZCBpbmNyZW1lbnQgb3VyIGBuZXdTdGFydElkeGAgYW5kIGBvbGRTdGFydElkeGBcbiAgICAgICAgICAgIC8vIGluZGljZXMgdG8gcmVmbGVjdCB0aGF0LiBXZSBkb24ndCBuZWVkIHRvIG1vdmUgYW55IERPTSBOb2RlcyBhcm91bmRcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoaW5ncyBhcmUgbWF0Y2hlZCB1cCBpbiBvcmRlci5cbiAgICAgICAgICAgIHBhdGNoKG9sZFN0YXJ0Vm5vZGUsIG5ld1N0YXJ0Vm5vZGUpO1xuICAgICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU2FtZVZub2RlKG9sZEVuZFZub2RlLCBuZXdFbmRWbm9kZSkpIHtcbiAgICAgICAgICAgIC8vIGxpa2V3aXNlLCBpZiB0aGUgZW5kIG5vZGVzIGFyZSB0aGUgc2FtZSB3ZSBwYXRjaCBuZXcgb250byBvbGQgYW5kXG4gICAgICAgICAgICAvLyBkZWNyZW1lbnQgb3VyIGVuZCBpbmRpY2VzLCBhbmQgYWxzbyBsaWtld2lzZSBpbiB0aGlzIGNhc2Ugd2UgZG9uJ3RcbiAgICAgICAgICAgIC8vIG5lZWQgdG8gbW92ZSBhbnkgRE9NIE5vZGVzLlxuICAgICAgICAgICAgcGF0Y2gob2xkRW5kVm5vZGUsIG5ld0VuZFZub2RlKTtcbiAgICAgICAgICAgIG9sZEVuZFZub2RlID0gb2xkQ2hbLS1vbGRFbmRJZHhdO1xuICAgICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpKSB7XG4gICAgICAgICAgICAvLyBjYXNlOiBcIlZub2RlIG1vdmVkIHJpZ2h0XCJcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBXZSd2ZSBmb3VuZCB0aGF0IHRoZSBsYXN0IG5vZGUgaW4gb3VyIHdpbmRvdyBvbiB0aGUgbmV3IGNoaWxkcmVuIGlzXG4gICAgICAgICAgICAvLyB0aGUgc2FtZSBWTm9kZSBhcyB0aGUgX2ZpcnN0XyBub2RlIGluIG91ciB3aW5kb3cgb24gdGhlIG9sZCBjaGlsZHJlblxuICAgICAgICAgICAgLy8gd2UncmUgZGVhbGluZyB3aXRoIG5vdy4gVmlzdWFsbHksIHRoaXMgaXMgdGhlIGxheW91dCBvZiB0aGVzZSB0d29cbiAgICAgICAgICAgIC8vIG5vZGVzOlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIG5ld0NoOiBbLi4uLCBuZXdTdGFydFZub2RlICwgLi4uICwgbmV3RW5kVm5vZGUgLCAuLi5dXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF5eXl5eXl5eXl5eXG4gICAgICAgICAgICAvLyBvbGRDaDogWy4uLiwgb2xkU3RhcnRWbm9kZSAsIC4uLiAsIG9sZEVuZFZub2RlICwgLi4uXVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgIF5eXl5eXl5eXl5eXl5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBJbiB0aGlzIHNpdHVhdGlvbiB3ZSBuZWVkIHRvIHBhdGNoIGBuZXdFbmRWbm9kZWAgb250byBgb2xkU3RhcnRWbm9kZWBcbiAgICAgICAgICAgIC8vIGFuZCBtb3ZlIHRoZSBET00gZWxlbWVudCBmb3IgYG9sZFN0YXJ0Vm5vZGVgLlxuICAgICAgICAgICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uICYmIChvbGRTdGFydFZub2RlLiR0YWckID09PSAnc2xvdCcgfHwgbmV3RW5kVm5vZGUuJHRhZyQgPT09ICdzbG90JykpIHtcbiAgICAgICAgICAgICAgICBwdXRCYWNrSW5PcmlnaW5hbExvY2F0aW9uKG9sZFN0YXJ0Vm5vZGUuJGVsbSQucGFyZW50Tm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0Y2gob2xkU3RhcnRWbm9kZSwgbmV3RW5kVm5vZGUpO1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBtb3ZlIHRoZSBlbGVtZW50IGZvciBgb2xkU3RhcnRWbm9kZWAgaW50byBhIHBvc2l0aW9uIHdoaWNoXG4gICAgICAgICAgICAvLyB3aWxsIGJlIGFwcHJvcHJpYXRlIGZvciBgbmV3RW5kVm5vZGVgLiBGb3IgdGhpcyB3ZSBjYW4gdXNlXG4gICAgICAgICAgICAvLyBgLmluc2VydEJlZm9yZWAgYW5kIGBvbGRFbmRWbm9kZS4kZWxtJC5uZXh0U2libGluZ2AuIElmIHRoZXJlIGlzIGFcbiAgICAgICAgICAgIC8vIHNpYmxpbmcgZm9yIGBvbGRFbmRWbm9kZS4kZWxtJGAgdGhlbiB3ZSB3YW50IHRvIG1vdmUgdGhlIERPTSBub2RlIGZvclxuICAgICAgICAgICAgLy8gYG9sZFN0YXJ0Vm5vZGVgIGJldHdlZW4gYG9sZEVuZFZub2RlYCBhbmQgaXQncyBzaWJsaW5nLCBsaWtlIHNvOlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIDxvbGQtc3RhcnQtbm9kZSAvPlxuICAgICAgICAgICAgLy8gPHNvbWUtaW50ZXJ2ZW5pbmctbm9kZSAvPlxuICAgICAgICAgICAgLy8gPG9sZC1lbmQtbm9kZSAvPlxuICAgICAgICAgICAgLy8gPCEtLSAtPiAgICAgICAgICAgICAgPC0tIGBvbGRTdGFydFZub2RlLiRlbG0kYCBzaG91bGQgYmUgaW5zZXJ0ZWQgaGVyZVxuICAgICAgICAgICAgLy8gPG5leHQtc2libGluZyAvPlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIElmIGluc3RlYWQgYG9sZEVuZFZub2RlLiRlbG0kYCBoYXMgbm8gc2libGluZyB0aGVuIHdlIGp1c3Qgd2FudCB0byBwdXRcbiAgICAgICAgICAgIC8vIHRoZSBub2RlIGZvciBgb2xkU3RhcnRWbm9kZWAgYXQgdGhlIGVuZCBvZiB0aGUgY2hpbGRyZW4gb2ZcbiAgICAgICAgICAgIC8vIGBwYXJlbnRFbG1gLiBMdWNraWx5LCBgTm9kZS5uZXh0U2libGluZ2Agd2lsbCByZXR1cm4gYG51bGxgIGlmIHRoZXJlXG4gICAgICAgICAgICAvLyBhcmVuJ3QgYW55IHNpYmxpbmdzLCBhbmQgcGFzc2luZyBgbnVsbGAgdG8gYE5vZGUuaW5zZXJ0QmVmb3JlYCB3aWxsXG4gICAgICAgICAgICAvLyBhcHBlbmQgaXQgdG8gdGhlIGNoaWxkcmVuIG9mIHRoZSBwYXJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHBhcmVudEVsbS5pbnNlcnRCZWZvcmUob2xkU3RhcnRWbm9kZS4kZWxtJCwgb2xkRW5kVm5vZGUuJGVsbSQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgb2xkU3RhcnRWbm9kZSA9IG9sZENoWysrb2xkU3RhcnRJZHhdO1xuICAgICAgICAgICAgbmV3RW5kVm5vZGUgPSBuZXdDaFstLW5ld0VuZElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNTYW1lVm5vZGUob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUpKSB7XG4gICAgICAgICAgICAvLyBjYXNlOiBcIlZub2RlIG1vdmVkIGxlZnRcIlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFdlJ3ZlIGZvdW5kIHRoYXQgdGhlIGZpcnN0IG5vZGUgaW4gb3VyIHdpbmRvdyBvbiB0aGUgbmV3IGNoaWxkcmVuIGlzXG4gICAgICAgICAgICAvLyB0aGUgc2FtZSBWTm9kZSBhcyB0aGUgX2xhc3RfIG5vZGUgaW4gb3VyIHdpbmRvdyBvbiB0aGUgb2xkIGNoaWxkcmVuLlxuICAgICAgICAgICAgLy8gVmlzdWFsbHksIHRoaXMgaXMgdGhlIGxheW91dCBvZiB0aGVzZSB0d28gbm9kZXM6XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gbmV3Q2g6IFsuLi4sIG5ld1N0YXJ0Vm5vZGUgLCAuLi4gLCBuZXdFbmRWbm9kZSAsIC4uLl1cbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICBeXl5eXl5eXl5eXl5eXG4gICAgICAgICAgICAvLyBvbGRDaDogWy4uLiwgb2xkU3RhcnRWbm9kZSAsIC4uLiAsIG9sZEVuZFZub2RlICwgLi4uXVxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBeXl5eXl5eXl5eXlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEluIHRoaXMgc2l0dWF0aW9uIHdlIG5lZWQgdG8gcGF0Y2ggYG5ld1N0YXJ0Vm5vZGVgIG9udG8gYG9sZEVuZFZub2RlYFxuICAgICAgICAgICAgLy8gKHdoaWNoIHdpbGwgaGFuZGxlIHVwZGF0aW5nIGFueSBjaGFuZ2VkIGF0dHJpYnV0ZXMsIHJlY29uY2lsaW5nIHRoZWlyXG4gICAgICAgICAgICAvLyBjaGlsZHJlbiBldGMpIGJ1dCB3ZSBhbHNvIG5lZWQgdG8gbW92ZSB0aGUgRE9NIG5vZGUgdG8gd2hpY2hcbiAgICAgICAgICAgIC8vIGBvbGRFbmRWbm9kZWAgY29ycmVzcG9uZHMuXG4gICAgICAgICAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgKG9sZFN0YXJ0Vm5vZGUuJHRhZyQgPT09ICdzbG90JyB8fCBuZXdFbmRWbm9kZS4kdGFnJCA9PT0gJ3Nsb3QnKSkge1xuICAgICAgICAgICAgICAgIHB1dEJhY2tJbk9yaWdpbmFsTG9jYXRpb24ob2xkRW5kVm5vZGUuJGVsbSQucGFyZW50Tm9kZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGF0Y2gob2xkRW5kVm5vZGUsIG5ld1N0YXJ0Vm5vZGUpO1xuICAgICAgICAgICAgLy8gV2UndmUgYWxyZWFkeSBjaGVja2VkIGFib3ZlIGlmIGBvbGRTdGFydFZub2RlYCBhbmQgYG5ld1N0YXJ0Vm5vZGVgIGFyZVxuICAgICAgICAgICAgLy8gdGhlIHNhbWUgbm9kZSwgc28gc2luY2Ugd2UncmUgaGVyZSB3ZSBrbm93IHRoYXQgdGhleSBhcmUgbm90LiBUaHVzIHdlXG4gICAgICAgICAgICAvLyBjYW4gbW92ZSB0aGUgZWxlbWVudCBmb3IgYG9sZEVuZFZub2RlYCBfYmVmb3JlXyB0aGUgZWxlbWVudCBmb3JcbiAgICAgICAgICAgIC8vIGBvbGRTdGFydFZub2RlYCwgbGVhdmluZyBgb2xkU3RhcnRWbm9kZWAgdG8gYmUgcmVjb25jaWxlZCBpbiB0aGVcbiAgICAgICAgICAgIC8vIGZ1dHVyZS5cbiAgICAgICAgICAgIHBhcmVudEVsbS5pbnNlcnRCZWZvcmUob2xkRW5kVm5vZGUuJGVsbSQsIG9sZFN0YXJ0Vm5vZGUuJGVsbSQpO1xuICAgICAgICAgICAgb2xkRW5kVm5vZGUgPSBvbGRDaFstLW9sZEVuZElkeF07XG4gICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBIZXJlIHdlIGRvIHNvbWUgY2hlY2tzIHRvIG1hdGNoIHVwIG9sZCBhbmQgbmV3IG5vZGVzIGJhc2VkIG9uIHRoZVxuICAgICAgICAgICAgLy8gYCRrZXkkYCBhdHRyaWJ1dGUsIHdoaWNoIGlzIHNldCBieSBwdXR0aW5nIGEgYGtleT1cIm15LWtleVwiYCBhdHRyaWJ1dGVcbiAgICAgICAgICAgIC8vIGluIHRoZSBKU1ggZm9yIGEgRE9NIGVsZW1lbnQgaW4gdGhlIGltcGxlbWVudGF0aW9uIG9mIGEgU3RlbmNpbFxuICAgICAgICAgICAgLy8gY29tcG9uZW50LlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgYW55IG5vZGVzIGluIHRoZSBhcnJheSBvZiBvbGRcbiAgICAgICAgICAgIC8vIGNoaWxkcmVuIHdoaWNoIGhhdmUgdGhlIHNhbWUga2V5IGFzIHRoZSBmaXJzdCBub2RlIGluIHRoZSBuZXdcbiAgICAgICAgICAgIC8vIGNoaWxkcmVuLlxuICAgICAgICAgICAgaWR4SW5PbGQgPSAtMTtcbiAgICAgICAgICAgIGlmIChCVUlMRC52ZG9tS2V5KSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gb2xkU3RhcnRJZHg7IGkgPD0gb2xkRW5kSWR4OyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZENoW2ldICYmIG9sZENoW2ldLiRrZXkkICE9PSBudWxsICYmIG9sZENoW2ldLiRrZXkkID09PSBuZXdTdGFydFZub2RlLiRrZXkkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZHhJbk9sZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC52ZG9tS2V5ICYmIGlkeEluT2xkID49IDApIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBmb3VuZCBhIG5vZGUgaW4gdGhlIG9sZCBjaGlsZHJlbiB3aGljaCBtYXRjaGVzIHVwIHdpdGggdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgLy8gbm9kZSBpbiB0aGUgbmV3IGNoaWxkcmVuISBTbyBsZXQncyBkZWFsIHdpdGggdGhhdFxuICAgICAgICAgICAgICAgIGVsbVRvTW92ZSA9IG9sZENoW2lkeEluT2xkXTtcbiAgICAgICAgICAgICAgICBpZiAoZWxtVG9Nb3ZlLiR0YWckICE9PSBuZXdTdGFydFZub2RlLiR0YWckKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSB0YWcgZG9lc24ndCBtYXRjaCBzbyB3ZSdsbCBuZWVkIGEgbmV3IERPTSBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBjcmVhdGVFbG0ob2xkQ2ggJiYgb2xkQ2hbbmV3U3RhcnRJZHhdLCBuZXdWTm9kZSwgaWR4SW5PbGQsIHBhcmVudEVsbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaChlbG1Ub01vdmUsIG5ld1N0YXJ0Vm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICAvLyBpbnZhbGlkYXRlIHRoZSBtYXRjaGluZyBvbGQgbm9kZSBzbyB0aGF0IHdlIHdvbid0IHRyeSB0byB1cGRhdGUgaXRcbiAgICAgICAgICAgICAgICAgICAgLy8gYWdhaW4gbGF0ZXIgb25cbiAgICAgICAgICAgICAgICAgICAgb2xkQ2hbaWR4SW5PbGRdID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBub2RlID0gZWxtVG9Nb3ZlLiRlbG0kO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXdTdGFydFZub2RlID0gbmV3Q2hbKytuZXdTdGFydElkeF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBlaXRoZXIgZGlkbid0IGZpbmQgYW4gZWxlbWVudCBpbiB0aGUgb2xkIGNoaWxkcmVuIHRoYXQgbWF0Y2hlc1xuICAgICAgICAgICAgICAgIC8vIHRoZSBrZXkgb2YgdGhlIGZpcnN0IG5ldyBjaGlsZCBPUiB0aGUgYnVpbGQgaXMgbm90IHVzaW5nIGBrZXlgXG4gICAgICAgICAgICAgICAgLy8gYXR0cmlidXRlcyBhdCBhbGwuIEluIGVpdGhlciBjYXNlIHdlIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAvLyBmb3IgdGhlIG5ldyBub2RlLlxuICAgICAgICAgICAgICAgIG5vZGUgPSBjcmVhdGVFbG0ob2xkQ2ggJiYgb2xkQ2hbbmV3U3RhcnRJZHhdLCBuZXdWTm9kZSwgbmV3U3RhcnRJZHgsIHBhcmVudEVsbSk7XG4gICAgICAgICAgICAgICAgbmV3U3RhcnRWbm9kZSA9IG5ld0NoWysrbmV3U3RhcnRJZHhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBjcmVhdGVkIGEgbmV3IG5vZGUgdGhlbiBoYW5kbGUgaW5zZXJ0aW5nIGl0IHRvIHRoZSBET01cbiAgICAgICAgICAgICAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50UmVmZXJlbmNlTm9kZShvbGRTdGFydFZub2RlLiRlbG0kKS5pbnNlcnRCZWZvcmUobm9kZSwgcmVmZXJlbmNlTm9kZShvbGRTdGFydFZub2RlLiRlbG0kKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvbGRTdGFydFZub2RlLiRlbG0kLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIG9sZFN0YXJ0Vm5vZGUuJGVsbSQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAob2xkU3RhcnRJZHggPiBvbGRFbmRJZHgpIHtcbiAgICAgICAgLy8gd2UgaGF2ZSBzb21lIG1vcmUgbmV3IG5vZGVzIHRvIGFkZCB3aGljaCBkb24ndCBtYXRjaCB1cCB3aXRoIG9sZCBub2Rlc1xuICAgICAgICBhZGRWbm9kZXMocGFyZW50RWxtLCBuZXdDaFtuZXdFbmRJZHggKyAxXSA9PSBudWxsID8gbnVsbCA6IG5ld0NoW25ld0VuZElkeCArIDFdLiRlbG0kLCBuZXdWTm9kZSwgbmV3Q2gsIG5ld1N0YXJ0SWR4LCBuZXdFbmRJZHgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChCVUlMRC51cGRhdGFibGUgJiYgbmV3U3RhcnRJZHggPiBuZXdFbmRJZHgpIHtcbiAgICAgICAgLy8gdGhlcmUgYXJlIG5vZGVzIGluIHRoZSBgb2xkQ2hgIGFycmF5IHdoaWNoIG5vIGxvbmdlciBjb3JyZXNwb25kIHRvIG5vZGVzXG4gICAgICAgIC8vIGluIHRoZSBuZXcgYXJyYXksIHNvIGxldHMgcmVtb3ZlIHRoZW0gKHdoaWNoIGVudGFpbHMgY2xlYW5pbmcgdXAgdGhlXG4gICAgICAgIC8vIHJlbGV2YW50IERPTSBub2RlcylcbiAgICAgICAgcmVtb3ZlVm5vZGVzKG9sZENoLCBvbGRTdGFydElkeCwgb2xkRW5kSWR4KTtcbiAgICB9XG59O1xuLyoqXG4gKiBDb21wYXJlIHR3byBWTm9kZXMgdG8gZGV0ZXJtaW5lIGlmIHRoZXkgYXJlIHRoZSBzYW1lXG4gKlxuICogKipOQioqOiBUaGlzIGZ1bmN0aW9uIGlzIGFuIGVxdWFsaXR5IF9oZXVyaXN0aWNfIGJhc2VkIG9uIHRoZSBhdmFpbGFibGVcbiAqIGluZm9ybWF0aW9uIHNldCBvbiB0aGUgdHdvIFZOb2RlcyBhbmQgY2FuIGJlIG1pc2xlYWRpbmcgdW5kZXIgY2VydGFpblxuICogY2lyY3Vtc3RhbmNlcy4gSW4gcGFydGljdWxhciwgaWYgdGhlIHR3byBub2RlcyBkbyBub3QgaGF2ZSBga2V5YCBhdHRyc1xuICogKGF2YWlsYWJsZSB1bmRlciBgJGtleSRgIG9uIFZOb2RlcykgdGhlbiB0aGUgZnVuY3Rpb24gZmFsbHMgYmFjayBvbiBtZXJlbHlcbiAqIGNoZWNraW5nIHRoYXQgdGhleSBoYXZlIHRoZSBzYW1lIHRhZy5cbiAqXG4gKiBTbywgaW4gb3RoZXIgd29yZHMsIGlmIGBrZXlgIGF0dHJzIGFyZSBub3Qgc2V0IG9uIFZOb2RlcyB3aGljaCBtYXkgYmVcbiAqIGNoYW5naW5nIG9yZGVyIHdpdGhpbiBhIGBjaGlsZHJlbmAgYXJyYXkgb3Igc29tZXRoaW5nIGFsb25nIHRob3NlIGxpbmVzIHRoZW5cbiAqIHdlIGNvdWxkIG9idGFpbiBhIGZhbHNlIG5lZ2F0aXZlIGFuZCB0aGVuIGhhdmUgdG8gZG8gbmVlZGxlc3MgcmUtcmVuZGVyaW5nXG4gKiAoaS5lLiB3ZSdkIHNheSB0d28gVk5vZGVzIGFyZW4ndCBlcXVhbCB3aGVuIGluIGZhY3QgdGhleSBzaG91bGQgYmUpLlxuICpcbiAqIEBwYXJhbSBsZWZ0Vk5vZGUgdGhlIGZpcnN0IFZOb2RlIHRvIGNoZWNrXG4gKiBAcGFyYW0gcmlnaHRWTm9kZSB0aGUgc2Vjb25kIFZOb2RlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB3aGV0aGVyIHRoZXkncmUgZXF1YWwgb3Igbm90XG4gKi9cbmNvbnN0IGlzU2FtZVZub2RlID0gKGxlZnRWTm9kZSwgcmlnaHRWTm9kZSkgPT4ge1xuICAgIC8vIGNvbXBhcmUgaWYgdHdvIHZub2RlIHRvIHNlZSBpZiB0aGV5J3JlIFwidGVjaG5pY2FsbHlcIiB0aGUgc2FtZVxuICAgIC8vIG5lZWQgdG8gaGF2ZSB0aGUgc2FtZSBlbGVtZW50IHRhZywgYW5kIHNhbWUga2V5IHRvIGJlIHRoZSBzYW1lXG4gICAgaWYgKGxlZnRWTm9kZS4kdGFnJCA9PT0gcmlnaHRWTm9kZS4kdGFnJCkge1xuICAgICAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24gJiYgbGVmdFZOb2RlLiR0YWckID09PSAnc2xvdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWZ0Vk5vZGUuJG5hbWUkID09PSByaWdodFZOb2RlLiRuYW1lJDtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzIHdpbGwgYmUgc2V0IGlmIGNvbXBvbmVudHMgaW4gdGhlIGJ1aWxkIGhhdmUgYGtleWAgYXR0cnMgc2V0IG9uIHRoZW1cbiAgICAgICAgaWYgKEJVSUxELnZkb21LZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBsZWZ0Vk5vZGUuJGtleSQgPT09IHJpZ2h0Vk5vZGUuJGtleSQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5jb25zdCByZWZlcmVuY2VOb2RlID0gKG5vZGUpID0+IHtcbiAgICAvLyB0aGlzIG5vZGUgd2FzIHJlbG9jYXRlZCB0byBhIG5ldyBsb2NhdGlvbiBpbiB0aGUgZG9tXG4gICAgLy8gYmVjYXVzZSBvZiBzb21lIG90aGVyIGNvbXBvbmVudCdzIHNsb3RcbiAgICAvLyBidXQgd2Ugc3RpbGwgaGF2ZSBhbiBodG1sIGNvbW1lbnQgaW4gcGxhY2Ugb2Ygd2hlcmVcbiAgICAvLyBpdCdzIG9yaWdpbmFsIGxvY2F0aW9uIHdhcyBhY2NvcmRpbmcgdG8gaXQncyBvcmlnaW5hbCB2ZG9tXG4gICAgcmV0dXJuIChub2RlICYmIG5vZGVbJ3Mtb2wnXSkgfHwgbm9kZTtcbn07XG5jb25zdCBwYXJlbnRSZWZlcmVuY2VOb2RlID0gKG5vZGUpID0+IChub2RlWydzLW9sJ10gPyBub2RlWydzLW9sJ10gOiBub2RlKS5wYXJlbnROb2RlO1xuLyoqXG4gKiBIYW5kbGUgcmVjb25jaWxpbmcgYW4gb3V0ZGF0ZWQgVk5vZGUgd2l0aCBhIG5ldyBvbmUgd2hpY2ggY29ycmVzcG9uZHMgdG9cbiAqIGl0LiBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgZmx1c2hpbmcgdXBkYXRlcyB0byB0aGUgRE9NIGFuZCByZWNvbmNpbGluZyB0aGVcbiAqIGNoaWxkcmVuIG9mIHRoZSB0d28gbm9kZXMgKGlmIGFueSkuXG4gKlxuICogQHBhcmFtIG9sZFZOb2RlIGFuIG9sZCBWTm9kZSB3aG9zZSBET00gZWxlbWVudCBhbmQgY2hpbGRyZW4gd2Ugd2FudCB0byB1cGRhdGVcbiAqIEBwYXJhbSBuZXdWTm9kZSBhIG5ldyBWTm9kZSByZXByZXNlbnRpbmcgYW4gdXBkYXRlZCB2ZXJzaW9uIG9mIHRoZSBvbGQgb25lXG4gKi9cbmNvbnN0IHBhdGNoID0gKG9sZFZOb2RlLCBuZXdWTm9kZSkgPT4ge1xuICAgIGNvbnN0IGVsbSA9IChuZXdWTm9kZS4kZWxtJCA9IG9sZFZOb2RlLiRlbG0kKTtcbiAgICBjb25zdCBvbGRDaGlsZHJlbiA9IG9sZFZOb2RlLiRjaGlsZHJlbiQ7XG4gICAgY29uc3QgbmV3Q2hpbGRyZW4gPSBuZXdWTm9kZS4kY2hpbGRyZW4kO1xuICAgIGNvbnN0IHRhZyA9IG5ld1ZOb2RlLiR0YWckO1xuICAgIGNvbnN0IHRleHQgPSBuZXdWTm9kZS4kdGV4dCQ7XG4gICAgbGV0IGRlZmF1bHRIb2xkZXI7XG4gICAgaWYgKCFCVUlMRC52ZG9tVGV4dCB8fCB0ZXh0ID09PSBudWxsKSB7XG4gICAgICAgIGlmIChCVUlMRC5zdmcpIHtcbiAgICAgICAgICAgIC8vIHRlc3QgaWYgd2UncmUgcmVuZGVyaW5nIGFuIHN2ZyBlbGVtZW50LCBvciBzdGlsbCByZW5kZXJpbmcgbm9kZXMgaW5zaWRlIG9mIG9uZVxuICAgICAgICAgICAgLy8gb25seSBhZGQgdGhpcyB0byB0aGUgd2hlbiB0aGUgY29tcGlsZXIgc2VlcyB3ZSdyZSB1c2luZyBhbiBzdmcgc29tZXdoZXJlXG4gICAgICAgICAgICBpc1N2Z01vZGUgPSB0YWcgPT09ICdzdmcnID8gdHJ1ZSA6IHRhZyA9PT0gJ2ZvcmVpZ25PYmplY3QnID8gZmFsc2UgOiBpc1N2Z01vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEJVSUxELnZkb21BdHRyaWJ1dGUgfHwgQlVJTEQucmVmbGVjdCkge1xuICAgICAgICAgICAgaWYgKEJVSUxELnNsb3QgJiYgdGFnID09PSAnc2xvdCcpXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gZWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IHJlbmRlciBvZiBhbiBlbGVtZW50IE9SIGl0J3MgYW4gdXBkYXRlXG4gICAgICAgICAgICAgICAgLy8gQU5EIHdlIGFscmVhZHkga25vdyBpdCdzIHBvc3NpYmxlIGl0IGNvdWxkIGhhdmUgY2hhbmdlZFxuICAgICAgICAgICAgICAgIC8vIHRoaXMgdXBkYXRlcyB0aGUgZWxlbWVudCdzIGNzcyBjbGFzc2VzLCBhdHRycywgcHJvcHMsIGxpc3RlbmVycywgZXRjLlxuICAgICAgICAgICAgICAgIHVwZGF0ZUVsZW1lbnQob2xkVk5vZGUsIG5ld1ZOb2RlLCBpc1N2Z01vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChCVUlMRC51cGRhdGFibGUgJiYgb2xkQ2hpbGRyZW4gIT09IG51bGwgJiYgbmV3Q2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGxvb2tzIGxpa2UgdGhlcmUncyBjaGlsZCB2bm9kZXMgZm9yIGJvdGggdGhlIG9sZCBhbmQgbmV3IHZub2Rlc1xuICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBjYWxsIGB1cGRhdGVDaGlsZHJlbmAgdG8gcmVjb25jaWxlIHRoZW1cbiAgICAgICAgICAgIHVwZGF0ZUNoaWxkcmVuKGVsbSwgb2xkQ2hpbGRyZW4sIG5ld1ZOb2RlLCBuZXdDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3Q2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIG5vIG9sZCBjaGlsZCB2bm9kZXMsIGJ1dCB0aGVyZSBhcmUgbmV3IGNoaWxkIHZub2RlcyB0byBhZGRcbiAgICAgICAgICAgIGlmIChCVUlMRC51cGRhdGFibGUgJiYgQlVJTEQudmRvbVRleHQgJiYgb2xkVk5vZGUuJHRleHQkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIG9sZCB2bm9kZSB3YXMgdGV4dCwgc28gYmUgc3VyZSB0byBjbGVhciBpdCBvdXRcbiAgICAgICAgICAgICAgICBlbG0udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgbmV3IHZub2RlIGNoaWxkcmVuXG4gICAgICAgICAgICBhZGRWbm9kZXMoZWxtLCBudWxsLCBuZXdWTm9kZSwgbmV3Q2hpbGRyZW4sIDAsIG5ld0NoaWxkcmVuLmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEJVSUxELnVwZGF0YWJsZSAmJiBvbGRDaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gbm8gbmV3IGNoaWxkIHZub2RlcywgYnV0IHRoZXJlIGFyZSBvbGQgY2hpbGQgdm5vZGVzIHRvIHJlbW92ZVxuICAgICAgICAgICAgcmVtb3ZlVm5vZGVzKG9sZENoaWxkcmVuLCAwLCBvbGRDaGlsZHJlbi5sZW5ndGggLSAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQuc3ZnICYmIGlzU3ZnTW9kZSAmJiB0YWcgPT09ICdzdmcnKSB7XG4gICAgICAgICAgICBpc1N2Z01vZGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChCVUlMRC52ZG9tVGV4dCAmJiBCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiAoZGVmYXVsdEhvbGRlciA9IGVsbVsncy1jciddKSkge1xuICAgICAgICAvLyB0aGlzIGVsZW1lbnQgaGFzIHNsb3R0ZWQgY29udGVudFxuICAgICAgICBkZWZhdWx0SG9sZGVyLnBhcmVudE5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBlbHNlIGlmIChCVUlMRC52ZG9tVGV4dCAmJiBvbGRWTm9kZS4kdGV4dCQgIT09IHRleHQpIHtcbiAgICAgICAgLy8gdXBkYXRlIHRoZSB0ZXh0IGNvbnRlbnQgZm9yIHRoZSB0ZXh0IG9ubHkgdm5vZGVcbiAgICAgICAgLy8gYW5kIGFsc28gb25seSBpZiB0aGUgdGV4dCBpcyBkaWZmZXJlbnQgdGhhbiBiZWZvcmVcbiAgICAgICAgZWxtLmRhdGEgPSB0ZXh0O1xuICAgIH1cbn07XG5jb25zdCB1cGRhdGVGYWxsYmFja1Nsb3RWaXNpYmlsaXR5ID0gKGVsbSkgPT4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcHJlZmVyLWNvbnN0XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGVsbS5jaGlsZE5vZGVzO1xuICAgIGxldCBjaGlsZE5vZGU7XG4gICAgbGV0IGk7XG4gICAgbGV0IGlsZW47XG4gICAgbGV0IGo7XG4gICAgbGV0IHNsb3ROYW1lQXR0cjtcbiAgICBsZXQgbm9kZVR5cGU7XG4gICAgZm9yIChpID0gMCwgaWxlbiA9IGNoaWxkTm9kZXMubGVuZ3RoOyBpIDwgaWxlbjsgaSsrKSB7XG4gICAgICAgIGNoaWxkTm9kZSA9IGNoaWxkTm9kZXNbaV07XG4gICAgICAgIGlmIChjaGlsZE5vZGUubm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGROb2RlWydzLXNyJ10pIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGlzIGEgc2xvdCBmYWxsYmFjayBub2RlXG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBzbG90IG5hbWUgZm9yIHRoaXMgc2xvdCByZWZlcmVuY2Ugbm9kZVxuICAgICAgICAgICAgICAgIHNsb3ROYW1lQXR0ciA9IGNoaWxkTm9kZVsncy1zbiddO1xuICAgICAgICAgICAgICAgIC8vIGJ5IGRlZmF1bHQgYWx3YXlzIHNob3cgYSBmYWxsYmFjayBzbG90IG5vZGVcbiAgICAgICAgICAgICAgICAvLyB0aGVuIGhpZGUgaXQgaWYgdGhlcmUgYXJlIG90aGVyIHNsb3RzIGluIHRoZSBsaWdodCBkb21cbiAgICAgICAgICAgICAgICBjaGlsZE5vZGUuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGlsZW47IGorKykge1xuICAgICAgICAgICAgICAgICAgICBub2RlVHlwZSA9IGNoaWxkTm9kZXNbal0ubm9kZVR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzW2pdWydzLWhuJ10gIT09IGNoaWxkTm9kZVsncy1obiddIHx8IHNsb3ROYW1lQXR0ciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgc2libGluZyBub2RlIGlzIGZyb20gYSBkaWZmZXJlbnQgY29tcG9uZW50IE9SIGlzIGEgbmFtZWQgZmFsbGJhY2sgc2xvdCBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovICYmIHNsb3ROYW1lQXR0ciA9PT0gY2hpbGROb2Rlc1tqXS5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBhIGRlZmF1bHQgZmFsbGJhY2sgc2xvdCBub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbnkgZWxlbWVudCBvciB0ZXh0IG5vZGUgKHdpdGggY29udGVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3VsZCBoaWRlIHRoZSBkZWZhdWx0IGZhbGxiYWNrIHNsb3Qgbm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChub2RlVHlwZSA9PT0gMyAvKiBOT0RFX1RZUEUuVGV4dE5vZGUgKi8gJiYgY2hpbGROb2Rlc1tqXS50ZXh0Q29udGVudC50cmltKCkgIT09ICcnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkTm9kZS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8ga2VlcCBkcmlsbGluZyBkb3duXG4gICAgICAgICAgICB1cGRhdGVGYWxsYmFja1Nsb3RWaXNpYmlsaXR5KGNoaWxkTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgcmVsb2NhdGVOb2RlcyA9IFtdO1xuY29uc3QgcmVsb2NhdGVTbG90Q29udGVudCA9IChlbG0pID0+IHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1jb25zdFxuICAgIGxldCBjaGlsZE5vZGU7XG4gICAgbGV0IG5vZGU7XG4gICAgbGV0IGhvc3RDb250ZW50Tm9kZXM7XG4gICAgbGV0IHNsb3ROYW1lQXR0cjtcbiAgICBsZXQgcmVsb2NhdGVOb2RlRGF0YTtcbiAgICBsZXQgajtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgY2hpbGROb2RlcyA9IGVsbS5jaGlsZE5vZGVzO1xuICAgIGNvbnN0IGlsZW4gPSBjaGlsZE5vZGVzLmxlbmd0aDtcbiAgICBmb3IgKDsgaSA8IGlsZW47IGkrKykge1xuICAgICAgICBjaGlsZE5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuICAgICAgICBpZiAoY2hpbGROb2RlWydzLXNyJ10gJiYgKG5vZGUgPSBjaGlsZE5vZGVbJ3MtY3InXSkgJiYgbm9kZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBnb3QgdGhlIGNvbnRlbnQgcmVmZXJlbmNlIGNvbW1lbnQgbm9kZVxuICAgICAgICAgICAgLy8gdGhlbiB3ZSBnb3QgaXQncyBwYXJlbnQsIHdoaWNoIGlzIHdoZXJlIGFsbCB0aGUgaG9zdCBjb250ZW50IGlzIGluIG5vd1xuICAgICAgICAgICAgaG9zdENvbnRlbnROb2RlcyA9IG5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzO1xuICAgICAgICAgICAgc2xvdE5hbWVBdHRyID0gY2hpbGROb2RlWydzLXNuJ107XG4gICAgICAgICAgICBmb3IgKGogPSBob3N0Q29udGVudE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICAgICAgbm9kZSA9IGhvc3RDb250ZW50Tm9kZXNbal07XG4gICAgICAgICAgICAgICAgaWYgKCFub2RlWydzLWNuJ10gJiYgIW5vZGVbJ3MtbnInXSAmJiBub2RlWydzLWhuJ10gIT09IGNoaWxkTm9kZVsncy1obiddKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCdzIGRvIHNvbWUgcmVsb2NhdGluZyB0byBpdHMgbmV3IGhvbWVcbiAgICAgICAgICAgICAgICAgICAgLy8gYnV0IG5ldmVyIHJlbG9jYXRlIGEgY29udGVudCByZWZlcmVuY2Ugbm9kZVxuICAgICAgICAgICAgICAgICAgICAvLyB0aGF0IGlzIHN1cHBvc2UgdG8gYWx3YXlzIHJlcHJlc2VudCB0aGUgb3JpZ2luYWwgY29udGVudCBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOb2RlTG9jYXRlZEluU2xvdChub2RlLCBzbG90TmFtZUF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIHdlJ3ZlIGFscmVhZHkgZGVjaWRlZCB0byByZWxvY2F0ZSB0aGlzIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZURhdGEgPSByZWxvY2F0ZU5vZGVzLmZpbmQoKHIpID0+IHIuJG5vZGVUb1JlbG9jYXRlJCA9PT0gbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBtYWRlIHNvbWUgY2hhbmdlcyB0byBzbG90c1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0J3MgbWFrZSBzdXJlIHdlIGFsc28gZG91YmxlIGNoZWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmYWxsYmFja3MgYXJlIGNvcnJlY3RseSBoaWRkZW4gb3Igc2hvd25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrU2xvdEZhbGxiYWNrVmlzaWJpbGl0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlWydzLXNuJ10gPSBub2RlWydzLXNuJ10gfHwgc2xvdE5hbWVBdHRyO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlbG9jYXRlTm9kZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcmV2aW91c2x5IHdlIG5ldmVyIGZvdW5kIGEgc2xvdCBob21lIGZvciB0aGlzIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBidXQgdHVybnMgb3V0IHdlIGRpZCwgc28gbGV0J3MgcmVtZW1iZXIgaXQgbm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2NhdGVOb2RlRGF0YS4kc2xvdFJlZk5vZGUkID0gY2hpbGROb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWRkIHRvIG91ciBsaXN0IG9mIG5vZGVzIHRvIHJlbG9jYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2NhdGVOb2Rlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNsb3RSZWZOb2RlJDogY2hpbGROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbm9kZVRvUmVsb2NhdGUkOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVbJ3Mtc3InXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZXMubWFwKChyZWxvY2F0ZU5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzTm9kZUxvY2F0ZWRJblNsb3QocmVsb2NhdGVOb2RlLiRub2RlVG9SZWxvY2F0ZSQsIG5vZGVbJ3Mtc24nXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbG9jYXRlTm9kZURhdGEgPSByZWxvY2F0ZU5vZGVzLmZpbmQoKHIpID0+IHIuJG5vZGVUb1JlbG9jYXRlJCA9PT0gbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsb2NhdGVOb2RlRGF0YSAmJiAhcmVsb2NhdGVOb2RlLiRzbG90UmVmTm9kZSQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxvY2F0ZU5vZGUuJHNsb3RSZWZOb2RlJCA9IHJlbG9jYXRlTm9kZURhdGEuJHNsb3RSZWZOb2RlJDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFyZWxvY2F0ZU5vZGVzLnNvbWUoKHIpID0+IHIuJG5vZGVUb1JlbG9jYXRlJCA9PT0gbm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIGZhciB0aGlzIGVsZW1lbnQgZG9lcyBub3QgaGF2ZSBhIHNsb3QgaG9tZSwgbm90IHNldHRpbmcgc2xvdFJlZk5vZGUgb24gcHVycG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2UgbmV2ZXIgZmluZCBhIGhvbWUgZm9yIHRoaXMgZWxlbWVudCB0aGVuIHdlJ2xsIG5lZWQgdG8gaGlkZSBpdFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsb2NhdGVOb2Rlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbm9kZVRvUmVsb2NhdGUkOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkTm9kZS5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8pIHtcbiAgICAgICAgICAgIHJlbG9jYXRlU2xvdENvbnRlbnQoY2hpbGROb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBpc05vZGVMb2NhdGVkSW5TbG90ID0gKG5vZGVUb1JlbG9jYXRlLCBzbG90TmFtZUF0dHIpID0+IHtcbiAgICBpZiAobm9kZVRvUmVsb2NhdGUubm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovKSB7XG4gICAgICAgIGlmIChub2RlVG9SZWxvY2F0ZS5nZXRBdHRyaWJ1dGUoJ3Nsb3QnKSA9PT0gbnVsbCAmJiBzbG90TmFtZUF0dHIgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZVRvUmVsb2NhdGUuZ2V0QXR0cmlidXRlKCdzbG90JykgPT09IHNsb3ROYW1lQXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAobm9kZVRvUmVsb2NhdGVbJ3Mtc24nXSA9PT0gc2xvdE5hbWVBdHRyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gc2xvdE5hbWVBdHRyID09PSAnJztcbn07XG5jb25zdCBjYWxsTm9kZVJlZnMgPSAodk5vZGUpID0+IHtcbiAgICBpZiAoQlVJTEQudmRvbVJlZikge1xuICAgICAgICB2Tm9kZS4kYXR0cnMkICYmIHZOb2RlLiRhdHRycyQucmVmICYmIHZOb2RlLiRhdHRycyQucmVmKG51bGwpO1xuICAgICAgICB2Tm9kZS4kY2hpbGRyZW4kICYmIHZOb2RlLiRjaGlsZHJlbiQubWFwKGNhbGxOb2RlUmVmcyk7XG4gICAgfVxufTtcbi8qKlxuICogVGhlIG1haW4gZW50cnkgcG9pbnQgZm9yIFN0ZW5jaWwncyB2aXJ0dWFsIERPTS1iYXNlZCByZW5kZXJpbmcgZW5naW5lXG4gKlxuICogR2l2ZW4gYSB7QGxpbmsgZC5Ib3N0UmVmfSBjb250YWluZXIgYW5kIHNvbWUgdmlydHVhbCBET00gbm9kZXMsIHRoaXNcbiAqIGZ1bmN0aW9uIHdpbGwgaGFuZGxlIGNyZWF0aW5nIGEgdmlydHVhbCBET00gdHJlZSB3aXRoIGEgc2luZ2xlIHJvb3QsIHBhdGNoaW5nXG4gKiB0aGUgY3VycmVudCB2aXJ0dWFsIERPTSB0cmVlIG9udG8gYW4gb2xkIG9uZSAoaWYgYW55KSwgZGVhbGluZyB3aXRoIHNsb3RcbiAqIHJlbG9jYXRpb24sIGFuZCByZWZsZWN0aW5nIGF0dHJpYnV0ZXMuXG4gKlxuICogQHBhcmFtIGhvc3RSZWYgZGF0YSBuZWVkZWQgdG8gcm9vdCBhbmQgcmVuZGVyIHRoZSB2aXJ0dWFsIERPTSB0cmVlLCBzdWNoIGFzXG4gKiB0aGUgRE9NIG5vZGUgaW50byB3aGljaCBpdCBzaG91bGQgYmUgcmVuZGVyZWQuXG4gKiBAcGFyYW0gcmVuZGVyRm5SZXN1bHRzIHRoZSB2aXJ0dWFsIERPTSBub2RlcyB0byBiZSByZW5kZXJlZFxuICovXG5jb25zdCByZW5kZXJWZG9tID0gKGhvc3RSZWYsIHJlbmRlckZuUmVzdWx0cykgPT4ge1xuICAgIGNvbnN0IGhvc3RFbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gICAgY29uc3QgY21wTWV0YSA9IGhvc3RSZWYuJGNtcE1ldGEkO1xuICAgIGNvbnN0IG9sZFZOb2RlID0gaG9zdFJlZi4kdm5vZGUkIHx8IG5ld1ZOb2RlKG51bGwsIG51bGwpO1xuICAgIGNvbnN0IHJvb3RWbm9kZSA9IGlzSG9zdChyZW5kZXJGblJlc3VsdHMpID8gcmVuZGVyRm5SZXN1bHRzIDogaChudWxsLCBudWxsLCByZW5kZXJGblJlc3VsdHMpO1xuICAgIGhvc3RUYWdOYW1lID0gaG9zdEVsbS50YWdOYW1lO1xuICAgIC8vIDxIb3N0PiBydW50aW1lIGNoZWNrXG4gICAgaWYgKEJVSUxELmlzRGV2ICYmIEFycmF5LmlzQXJyYXkocmVuZGVyRm5SZXN1bHRzKSAmJiByZW5kZXJGblJlc3VsdHMuc29tZShpc0hvc3QpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIDxIb3N0PiBtdXN0IGJlIHRoZSBzaW5nbGUgcm9vdCBjb21wb25lbnQuXG5Mb29rcyBsaWtlIHRoZSByZW5kZXIoKSBmdW5jdGlvbiBvZiBcIiR7aG9zdFRhZ05hbWUudG9Mb3dlckNhc2UoKX1cIiBpcyByZXR1cm5pbmcgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgPEhvc3Q+LlxuXG5UaGUgcmVuZGVyKCkgZnVuY3Rpb24gc2hvdWxkIGxvb2sgbGlrZSB0aGlzIGluc3RlYWQ6XG5cbnJlbmRlcigpIHtcbiAgLy8gRG8gbm90IHJldHVybiBhbiBhcnJheVxuICByZXR1cm4gKFxuICAgIDxIb3N0Pntjb250ZW50fTwvSG9zdD5cbiAgKTtcbn1cbiAgYCk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5yZWZsZWN0ICYmIGNtcE1ldGEuJGF0dHJzVG9SZWZsZWN0JCkge1xuICAgICAgICByb290Vm5vZGUuJGF0dHJzJCA9IHJvb3RWbm9kZS4kYXR0cnMkIHx8IHt9O1xuICAgICAgICBjbXBNZXRhLiRhdHRyc1RvUmVmbGVjdCQubWFwKChbcHJvcE5hbWUsIGF0dHJpYnV0ZV0pID0+IChyb290Vm5vZGUuJGF0dHJzJFthdHRyaWJ1dGVdID0gaG9zdEVsbVtwcm9wTmFtZV0pKTtcbiAgICB9XG4gICAgcm9vdFZub2RlLiR0YWckID0gbnVsbDtcbiAgICByb290Vm5vZGUuJGZsYWdzJCB8PSA0IC8qIFZOT0RFX0ZMQUdTLmlzSG9zdCAqLztcbiAgICBob3N0UmVmLiR2bm9kZSQgPSByb290Vm5vZGU7XG4gICAgcm9vdFZub2RlLiRlbG0kID0gb2xkVk5vZGUuJGVsbSQgPSAoQlVJTEQuc2hhZG93RG9tID8gaG9zdEVsbS5zaGFkb3dSb290IHx8IGhvc3RFbG0gOiBob3N0RWxtKTtcbiAgICBpZiAoQlVJTEQuc2NvcGVkIHx8IEJVSUxELnNoYWRvd0RvbSkge1xuICAgICAgICBzY29wZUlkID0gaG9zdEVsbVsncy1zYyddO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuc2xvdFJlbG9jYXRpb24pIHtcbiAgICAgICAgY29udGVudFJlZiA9IGhvc3RFbG1bJ3MtY3InXTtcbiAgICAgICAgdXNlTmF0aXZlU2hhZG93RG9tID0gc3VwcG9ydHNTaGFkb3cgJiYgKGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogQ01QX0ZMQUdTLnNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pICE9PSAwO1xuICAgICAgICAvLyBhbHdheXMgcmVzZXRcbiAgICAgICAgY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5ID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHN5bmNocm9ub3VzIHBhdGNoXG4gICAgcGF0Y2gob2xkVk5vZGUsIHJvb3RWbm9kZSk7XG4gICAgaWYgKEJVSUxELnNsb3RSZWxvY2F0aW9uKSB7XG4gICAgICAgIC8vIHdoaWxlIHdlJ3JlIG1vdmluZyBub2RlcyBhcm91bmQgZXhpc3Rpbmcgbm9kZXMsIHRlbXBvcmFyaWx5IGRpc2FibGVcbiAgICAgICAgLy8gdGhlIGRpc2Nvbm5lY3RDYWxsYmFjayBmcm9tIHdvcmtpbmdcbiAgICAgICAgcGx0LiRmbGFncyQgfD0gMSAvKiBQTEFURk9STV9GTEFHUy5pc1RtcERpc2Nvbm5lY3RlZCAqLztcbiAgICAgICAgaWYgKGNoZWNrU2xvdFJlbG9jYXRlKSB7XG4gICAgICAgICAgICByZWxvY2F0ZVNsb3RDb250ZW50KHJvb3RWbm9kZS4kZWxtJCk7XG4gICAgICAgICAgICBsZXQgcmVsb2NhdGVEYXRhO1xuICAgICAgICAgICAgbGV0IG5vZGVUb1JlbG9jYXRlO1xuICAgICAgICAgICAgbGV0IG9yZ0xvY2F0aW9uTm9kZTtcbiAgICAgICAgICAgIGxldCBwYXJlbnROb2RlUmVmO1xuICAgICAgICAgICAgbGV0IGluc2VydEJlZm9yZU5vZGU7XG4gICAgICAgICAgICBsZXQgcmVmTm9kZTtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGZvciAoOyBpIDwgcmVsb2NhdGVOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHJlbG9jYXRlRGF0YSA9IHJlbG9jYXRlTm9kZXNbaV07XG4gICAgICAgICAgICAgICAgbm9kZVRvUmVsb2NhdGUgPSByZWxvY2F0ZURhdGEuJG5vZGVUb1JlbG9jYXRlJDtcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGVUb1JlbG9jYXRlWydzLW9sJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGEgcmVmZXJlbmNlIG5vZGUgbWFya2luZyB0aGlzIG5vZGUncyBvcmlnaW5hbCBsb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIGEgcmVmZXJlbmNlIHRvIHRoaXMgbm9kZSBmb3IgbGF0ZXIgbG9va3Vwc1xuICAgICAgICAgICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgQlVJTEQuaXNEZWJ1ZyB8fCBCVUlMRC5oeWRyYXRlU2VydmVyU2lkZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gb3JpZ2luYWxMb2NhdGlvbkRlYnVnTm9kZShub2RlVG9SZWxvY2F0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRvYy5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZVsncy1uciddID0gbm9kZVRvUmVsb2NhdGU7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVUb1JlbG9jYXRlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKChub2RlVG9SZWxvY2F0ZVsncy1vbCddID0gb3JnTG9jYXRpb25Ob2RlKSwgbm9kZVRvUmVsb2NhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCByZWxvY2F0ZU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmVsb2NhdGVEYXRhID0gcmVsb2NhdGVOb2Rlc1tpXTtcbiAgICAgICAgICAgICAgICBub2RlVG9SZWxvY2F0ZSA9IHJlbG9jYXRlRGF0YS4kbm9kZVRvUmVsb2NhdGUkO1xuICAgICAgICAgICAgICAgIGlmIChyZWxvY2F0ZURhdGEuJHNsb3RSZWZOb2RlJCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBieSBkZWZhdWx0IHdlJ3JlIGp1c3QgZ29pbmcgdG8gaW5zZXJ0IGl0IGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgICAgIC8vIGFmdGVyIHRoZSBzbG90IHJlZmVyZW5jZSBub2RlXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE5vZGVSZWYgPSByZWxvY2F0ZURhdGEuJHNsb3RSZWZOb2RlJC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRCZWZvcmVOb2RlID0gcmVsb2NhdGVEYXRhLiRzbG90UmVmTm9kZSQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZSA9IG5vZGVUb1JlbG9jYXRlWydzLW9sJ107XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgob3JnTG9jYXRpb25Ob2RlID0gb3JnTG9jYXRpb25Ob2RlLnByZXZpb3VzU2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZk5vZGUgPSBvcmdMb2NhdGlvbk5vZGVbJ3MtbnInXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWZOb2RlICYmIHJlZk5vZGVbJ3Mtc24nXSA9PT0gbm9kZVRvUmVsb2NhdGVbJ3Mtc24nXSAmJiBwYXJlbnROb2RlUmVmID09PSByZWZOb2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZOb2RlID0gcmVmTm9kZS5uZXh0U2libGluZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlZk5vZGUgfHwgIXJlZk5vZGVbJ3MtbnInXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRCZWZvcmVOb2RlID0gcmVmTm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgoIWluc2VydEJlZm9yZU5vZGUgJiYgcGFyZW50Tm9kZVJlZiAhPT0gbm9kZVRvUmVsb2NhdGUucGFyZW50Tm9kZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVUb1JlbG9jYXRlLm5leHRTaWJsaW5nICE9PSBpbnNlcnRCZWZvcmVOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSd2ZSBjaGVja2VkIHRoYXQgaXQncyB3b3J0aCB3aGlsZSB0byByZWxvY2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2luY2UgdGhhdCB0aGUgbm9kZSB0byByZWxvY2F0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaGFzIGEgZGlmZmVyZW50IG5leHQgc2libGluZyBvciBwYXJlbnQgcmVsb2NhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVRvUmVsb2NhdGUgIT09IGluc2VydEJlZm9yZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGVUb1JlbG9jYXRlWydzLWhuJ10gJiYgbm9kZVRvUmVsb2NhdGVbJ3Mtb2wnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9iYWJseSBhIGNvbXBvbmVudCBpbiB0aGUgaW5kZXguaHRtbCB0aGF0IGRvZXNuJ3QgaGF2ZSBpdCdzIGhvc3RuYW1lIHNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlVG9SZWxvY2F0ZVsncy1obiddID0gbm9kZVRvUmVsb2NhdGVbJ3Mtb2wnXS5wYXJlbnROb2RlLm5vZGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgaXQgYmFjayB0byB0aGUgZG9tIGJ1dCBpbiBpdHMgbmV3IGhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnROb2RlUmVmLmluc2VydEJlZm9yZShub2RlVG9SZWxvY2F0ZSwgaW5zZXJ0QmVmb3JlTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgbm9kZSBkb2Vzbid0IGhhdmUgYSBzbG90IGhvbWUgdG8gZ28gdG8sIHNvIGxldCdzIGhpZGUgaXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVUb1JlbG9jYXRlLm5vZGVUeXBlID09PSAxIC8qIE5PREVfVFlQRS5FbGVtZW50Tm9kZSAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZVRvUmVsb2NhdGUuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hlY2tTbG90RmFsbGJhY2tWaXNpYmlsaXR5KSB7XG4gICAgICAgICAgICB1cGRhdGVGYWxsYmFja1Nsb3RWaXNpYmlsaXR5KHJvb3RWbm9kZS4kZWxtJCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZG9uZSBtb3Zpbmcgbm9kZXMgYXJvdW5kXG4gICAgICAgIC8vIGFsbG93IHRoZSBkaXNjb25uZWN0IGNhbGxiYWNrIHRvIHdvcmsgYWdhaW5cbiAgICAgICAgcGx0LiRmbGFncyQgJj0gfjEgLyogUExBVEZPUk1fRkxBR1MuaXNUbXBEaXNjb25uZWN0ZWQgKi87XG4gICAgICAgIC8vIGFsd2F5cyByZXNldFxuICAgICAgICByZWxvY2F0ZU5vZGVzLmxlbmd0aCA9IDA7XG4gICAgfVxufTtcbi8vIHNsb3QgY29tbWVudCBkZWJ1ZyBub2RlcyBvbmx5IGNyZWF0ZWQgd2l0aCB0aGUgYC0tZGVidWdgIGZsYWdcbi8vIG90aGVyd2lzZSB0aGVzZSBub2RlcyBhcmUgdGV4dCBub2RlcyB3L291dCBjb250ZW50XG5jb25zdCBzbG90UmVmZXJlbmNlRGVidWdOb2RlID0gKHNsb3RWTm9kZSkgPT4gZG9jLmNyZWF0ZUNvbW1lbnQoYDxzbG90JHtzbG90Vk5vZGUuJG5hbWUkID8gJyBuYW1lPVwiJyArIHNsb3RWTm9kZS4kbmFtZSQgKyAnXCInIDogJyd9PiAoaG9zdD0ke2hvc3RUYWdOYW1lLnRvTG93ZXJDYXNlKCl9KWApO1xuY29uc3Qgb3JpZ2luYWxMb2NhdGlvbkRlYnVnTm9kZSA9IChub2RlVG9SZWxvY2F0ZSkgPT4gZG9jLmNyZWF0ZUNvbW1lbnQoYG9yZy1sb2NhdGlvbiBmb3IgYCArXG4gICAgKG5vZGVUb1JlbG9jYXRlLmxvY2FsTmFtZVxuICAgICAgICA/IGA8JHtub2RlVG9SZWxvY2F0ZS5sb2NhbE5hbWV9PiAoaG9zdD0ke25vZGVUb1JlbG9jYXRlWydzLWhuJ119KWBcbiAgICAgICAgOiBgWyR7bm9kZVRvUmVsb2NhdGUudGV4dENvbnRlbnR9XWApKTtcbmNvbnN0IGF0dGFjaFRvQW5jZXN0b3IgPSAoaG9zdFJlZiwgYW5jZXN0b3JDb21wb25lbnQpID0+IHtcbiAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nICYmIGFuY2VzdG9yQ29tcG9uZW50ICYmICFob3N0UmVmLiRvblJlbmRlclJlc29sdmUkICYmIGFuY2VzdG9yQ29tcG9uZW50WydzLXAnXSkge1xuICAgICAgICBhbmNlc3RvckNvbXBvbmVudFsncy1wJ10ucHVzaChuZXcgUHJvbWlzZSgocikgPT4gKGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQgPSByKSkpO1xuICAgIH1cbn07XG5jb25zdCBzY2hlZHVsZVVwZGF0ZSA9IChob3N0UmVmLCBpc0luaXRpYWxMb2FkKSA9PiB7XG4gICAgaWYgKEJVSUxELnRhc2tRdWV1ZSAmJiBCVUlMRC51cGRhdGFibGUpIHtcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDE2IC8qIEhPU1RfRkxBR1MuaXNRdWV1ZWRGb3JVcGRhdGUgKi87XG4gICAgfVxuICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcgJiYgaG9zdFJlZi4kZmxhZ3MkICYgNCAvKiBIT1NUX0ZMQUdTLmlzV2FpdGluZ0ZvckNoaWxkcmVuICovKSB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSA1MTIgLyogSE9TVF9GTEFHUy5uZWVkc1JlcmVuZGVyICovO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGF0dGFjaFRvQW5jZXN0b3IoaG9zdFJlZiwgaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkKTtcbiAgICAvLyB0aGVyZSBpcyBubyBhbmNlc3RvciBjb21wb25lbnQgb3IgdGhlIGFuY2VzdG9yIGNvbXBvbmVudFxuICAgIC8vIGhhcyBhbHJlYWR5IGZpcmVkIG9mZiBpdHMgbGlmZWN5Y2xlIHVwZGF0ZSB0aGVuXG4gICAgLy8gZmlyZSBvZmYgdGhlIGluaXRpYWwgdXBkYXRlXG4gICAgY29uc3QgZGlzcGF0Y2ggPSAoKSA9PiBkaXNwYXRjaEhvb2tzKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpO1xuICAgIHJldHVybiBCVUlMRC50YXNrUXVldWUgPyB3cml0ZVRhc2soZGlzcGF0Y2gpIDogZGlzcGF0Y2goKTtcbn07XG5jb25zdCBkaXNwYXRjaEhvb2tzID0gKGhvc3RSZWYsIGlzSW5pdGlhbExvYWQpID0+IHtcbiAgICBjb25zdCBlbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gICAgY29uc3QgZW5kU2NoZWR1bGUgPSBjcmVhdGVUaW1lKCdzY2hlZHVsZVVwZGF0ZScsIGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJCk7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBCVUlMRC5sYXp5TG9hZCA/IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgOiBlbG07XG4gICAgbGV0IHByb21pc2U7XG4gICAgaWYgKGlzSW5pdGlhbExvYWQpIHtcbiAgICAgICAgaWYgKEJVSUxELmxhenlMb2FkICYmIEJVSUxELmhvc3RMaXN0ZW5lcikge1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDI1NiAvKiBIT1NUX0ZMQUdTLmlzTGlzdGVuUmVhZHkgKi87XG4gICAgICAgICAgICBpZiAoaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJCkge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJHF1ZXVlZExpc3RlbmVycyQubWFwKChbbWV0aG9kTmFtZSwgZXZlbnRdKSA9PiBzYWZlQ2FsbChpbnN0YW5jZSwgbWV0aG9kTmFtZSwgZXZlbnQpKTtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbWl0TGlmZWN5Y2xlRXZlbnQoZWxtLCAnY29tcG9uZW50V2lsbExvYWQnKTtcbiAgICAgICAgaWYgKEJVSUxELmNtcFdpbGxMb2FkKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gc2FmZUNhbGwoaW5zdGFuY2UsICdjb21wb25lbnRXaWxsTG9hZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBlbWl0TGlmZWN5Y2xlRXZlbnQoZWxtLCAnY29tcG9uZW50V2lsbFVwZGF0ZScpO1xuICAgICAgICBpZiAoQlVJTEQuY21wV2lsbFVwZGF0ZSkge1xuICAgICAgICAgICAgcHJvbWlzZSA9IHNhZmVDYWxsKGluc3RhbmNlLCAnY29tcG9uZW50V2lsbFVwZGF0ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sICdjb21wb25lbnRXaWxsUmVuZGVyJyk7XG4gICAgaWYgKEJVSUxELmNtcFdpbGxSZW5kZXIpIHtcbiAgICAgICAgcHJvbWlzZSA9IHRoZW4ocHJvbWlzZSwgKCkgPT4gc2FmZUNhbGwoaW5zdGFuY2UsICdjb21wb25lbnRXaWxsUmVuZGVyJykpO1xuICAgIH1cbiAgICBlbmRTY2hlZHVsZSgpO1xuICAgIHJldHVybiB0aGVuKHByb21pc2UsICgpID0+IHVwZGF0ZUNvbXBvbmVudChob3N0UmVmLCBpbnN0YW5jZSwgaXNJbml0aWFsTG9hZCkpO1xufTtcbmNvbnN0IHVwZGF0ZUNvbXBvbmVudCA9IGFzeW5jIChob3N0UmVmLCBpbnN0YW5jZSwgaXNJbml0aWFsTG9hZCkgPT4ge1xuICAgIC8vIHVwZGF0ZUNvbXBvbmVudFxuICAgIGNvbnN0IGVsbSA9IGhvc3RSZWYuJGhvc3RFbGVtZW50JDtcbiAgICBjb25zdCBlbmRVcGRhdGUgPSBjcmVhdGVUaW1lKCd1cGRhdGUnLCBob3N0UmVmLiRjbXBNZXRhJC4kdGFnTmFtZSQpO1xuICAgIGNvbnN0IHJjID0gZWxtWydzLXJjJ107XG4gICAgaWYgKEJVSUxELnN0eWxlICYmIGlzSW5pdGlhbExvYWQpIHtcbiAgICAgICAgLy8gRE9NIFdSSVRFIVxuICAgICAgICBhdHRhY2hTdHlsZXMoaG9zdFJlZik7XG4gICAgfVxuICAgIGNvbnN0IGVuZFJlbmRlciA9IGNyZWF0ZVRpbWUoJ3JlbmRlcicsIGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJCk7XG4gICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAxMDI0IC8qIEhPU1RfRkxBR1MuZGV2T25SZW5kZXIgKi87XG4gICAgfVxuICAgIGlmIChCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSkge1xuICAgICAgICBhd2FpdCBjYWxsUmVuZGVyKGhvc3RSZWYsIGluc3RhbmNlLCBlbG0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY2FsbFJlbmRlcihob3N0UmVmLCBpbnN0YW5jZSwgZWxtKTtcbiAgICB9XG4gICAgaWYgKEJVSUxELmNzc1ZhclNoaW0gJiYgcGx0LiRjc3NTaGltJCkge1xuICAgICAgICBwbHQuJGNzc1NoaW0kLnVwZGF0ZUhvc3QoZWxtKTtcbiAgICB9XG4gICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgIGhvc3RSZWYuJHJlbmRlckNvdW50JCsrO1xuICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfjEwMjQgLyogSE9TVF9GTEFHUy5kZXZPblJlbmRlciAqLztcbiAgICB9XG4gICAgaWYgKEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBtYW51YWxseSBjb25uZWN0ZWQgY2hpbGQgY29tcG9uZW50cyBkdXJpbmcgc2VydmVyLXNpZGUgaHlkcmF0ZVxuICAgICAgICAgICAgc2VydmVyU2lkZUNvbm5lY3RlZChlbG0pO1xuICAgICAgICAgICAgaWYgKGlzSW5pdGlhbExvYWQpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBvbmx5IGR1cmluZyBzZXJ2ZXItc2lkZSBoeWRyYXRlXG4gICAgICAgICAgICAgICAgaWYgKGhvc3RSZWYuJGNtcE1ldGEkLiRmbGFncyQgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbVsncy1lbiddID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGhvc3RSZWYuJGNtcE1ldGEkLiRmbGFncyQgJiAyIC8qIENNUF9GTEFHUy5zY29wZWRDc3NFbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbVsncy1lbiddID0gJ2MnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZUVycm9yKGUsIGVsbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZyAmJiByYykge1xuICAgICAgICAvLyBvaywgc28gdHVybnMgb3V0IHRoZXJlIGFyZSBzb21lIGNoaWxkIGhvc3QgZWxlbWVudHNcbiAgICAgICAgLy8gd2FpdGluZyBvbiB0aGlzIHBhcmVudCBlbGVtZW50IHRvIGxvYWRcbiAgICAgICAgLy8gbGV0J3MgZmlyZSBvZmYgYWxsIHVwZGF0ZSBjYWxsYmFja3Mgd2FpdGluZ1xuICAgICAgICByYy5tYXAoKGNiKSA9PiBjYigpKTtcbiAgICAgICAgZWxtWydzLXJjJ10gPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVuZFJlbmRlcigpO1xuICAgIGVuZFVwZGF0ZSgpO1xuICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW5Qcm9taXNlcyA9IGVsbVsncy1wJ107XG4gICAgICAgIGNvbnN0IHBvc3RVcGRhdGUgPSAoKSA9PiBwb3N0VXBkYXRlQ29tcG9uZW50KGhvc3RSZWYpO1xuICAgICAgICBpZiAoY2hpbGRyZW5Qcm9taXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHBvc3RVcGRhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNoaWxkcmVuUHJvbWlzZXMpLnRoZW4ocG9zdFVwZGF0ZSk7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gNCAvKiBIT1NUX0ZMQUdTLmlzV2FpdGluZ0ZvckNoaWxkcmVuICovO1xuICAgICAgICAgICAgY2hpbGRyZW5Qcm9taXNlcy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwb3N0VXBkYXRlQ29tcG9uZW50KGhvc3RSZWYpO1xuICAgIH1cbn07XG5jb25zdCBjYWxsUmVuZGVyID0gKGhvc3RSZWYsIGluc3RhbmNlLCBlbG0pID0+IHtcbiAgICAvLyBpbiBvcmRlciBmb3IgYnVuZGxlcnMgdG8gY29ycmVjdGx5IHRyZWVzaGFrZSB0aGUgQlVJTEQgb2JqZWN0XG4gICAgLy8gd2UgbmVlZCB0byBlbnN1cmUgQlVJTEQgaXMgbm90IGRlb3B0aW1pemVkIHdpdGhpbiBhIHRyeS9jYXRjaFxuICAgIC8vIGh0dHBzOi8vcm9sbHVwanMub3JnL2d1aWRlL2VuLyN0cmVlc2hha2UgdHJ5Q2F0Y2hEZW9wdGltaXphdGlvblxuICAgIGNvbnN0IGFsbFJlbmRlckZuID0gQlVJTEQuYWxsUmVuZGVyRm4gPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc3QgbGF6eUxvYWQgPSBCVUlMRC5sYXp5TG9hZCA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCB0YXNrUXVldWUgPSBCVUlMRC50YXNrUXVldWUgPyB0cnVlIDogZmFsc2U7XG4gICAgY29uc3QgdXBkYXRhYmxlID0gQlVJTEQudXBkYXRhYmxlID8gdHJ1ZSA6IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIHJlbmRlcmluZ1JlZiA9IGluc3RhbmNlO1xuICAgICAgICBpbnN0YW5jZSA9IGFsbFJlbmRlckZuID8gaW5zdGFuY2UucmVuZGVyKCkgOiBpbnN0YW5jZS5yZW5kZXIgJiYgaW5zdGFuY2UucmVuZGVyKCk7XG4gICAgICAgIGlmICh1cGRhdGFibGUgJiYgdGFza1F1ZXVlKSB7XG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgJj0gfjE2IC8qIEhPU1RfRkxBR1MuaXNRdWV1ZWRGb3JVcGRhdGUgKi87XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVwZGF0YWJsZSB8fCBsYXp5TG9hZCkge1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDIgLyogSE9TVF9GTEFHUy5oYXNSZW5kZXJlZCAqLztcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQuaGFzUmVuZGVyRm4gfHwgQlVJTEQucmVmbGVjdCkge1xuICAgICAgICAgICAgaWYgKEJVSUxELnZkb21SZW5kZXIgfHwgQlVJTEQucmVmbGVjdCkge1xuICAgICAgICAgICAgICAgIC8vIGxvb2tzIGxpa2Ugd2UndmUgZ290IGNoaWxkIG5vZGVzIHRvIHJlbmRlciBpbnRvIHRoaXMgaG9zdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gb3Igd2UgbmVlZCB0byB1cGRhdGUgdGhlIGNzcyBjbGFzcy9hdHRycyBvbiB0aGUgaG9zdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgLy8gRE9NIFdSSVRFIVxuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGluc3RhbmNlKS50aGVuKCh2YWx1ZSkgPT4gcmVuZGVyVmRvbShob3N0UmVmLCB2YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyVmRvbShob3N0UmVmLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtLnRleHRDb250ZW50ID0gaW5zdGFuY2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZUVycm9yKGUsIGhvc3RSZWYuJGhvc3RFbGVtZW50JCk7XG4gICAgfVxuICAgIHJlbmRlcmluZ1JlZiA9IG51bGw7XG4gICAgcmV0dXJuIG51bGw7XG59O1xuY29uc3QgZ2V0UmVuZGVyaW5nUmVmID0gKCkgPT4gcmVuZGVyaW5nUmVmO1xuY29uc3QgcG9zdFVwZGF0ZUNvbXBvbmVudCA9IChob3N0UmVmKSA9PiB7XG4gICAgY29uc3QgdGFnTmFtZSA9IGhvc3RSZWYuJGNtcE1ldGEkLiR0YWdOYW1lJDtcbiAgICBjb25zdCBlbG0gPSBob3N0UmVmLiRob3N0RWxlbWVudCQ7XG4gICAgY29uc3QgZW5kUG9zdFVwZGF0ZSA9IGNyZWF0ZVRpbWUoJ3Bvc3RVcGRhdGUnLCB0YWdOYW1lKTtcbiAgICBjb25zdCBpbnN0YW5jZSA9IEJVSUxELmxhenlMb2FkID8gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA6IGVsbTtcbiAgICBjb25zdCBhbmNlc3RvckNvbXBvbmVudCA9IGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JDtcbiAgICBpZiAoQlVJTEQuY21wRGlkUmVuZGVyKSB7XG4gICAgICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDEwMjQgLyogSE9TVF9GTEFHUy5kZXZPblJlbmRlciAqLztcbiAgICAgICAgfVxuICAgICAgICBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudERpZFJlbmRlcicpO1xuICAgICAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MTAyNCAvKiBIT1NUX0ZMQUdTLmRldk9uUmVuZGVyICovO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sICdjb21wb25lbnREaWRSZW5kZXInKTtcbiAgICBpZiAoIShob3N0UmVmLiRmbGFncyQgJiA2NCAvKiBIT1NUX0ZMQUdTLmhhc0xvYWRlZENvbXBvbmVudCAqLykpIHtcbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDY0IC8qIEhPU1RfRkxBR1MuaGFzTG9hZGVkQ29tcG9uZW50ICovO1xuICAgICAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nICYmIEJVSUxELmNzc0Fubm90YXRpb25zKSB7XG4gICAgICAgICAgICAvLyBET00gV1JJVEUhXG4gICAgICAgICAgICBhZGRIeWRyYXRlZEZsYWcoZWxtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQuY21wRGlkTG9hZCkge1xuICAgICAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDIwNDggLyogSE9TVF9GTEFHUy5kZXZPbkRpZExvYWQgKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudERpZExvYWQnKTtcbiAgICAgICAgICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MjA0OCAvKiBIT1NUX0ZMQUdTLmRldk9uRGlkTG9hZCAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbWl0TGlmZWN5Y2xlRXZlbnQoZWxtLCAnY29tcG9uZW50RGlkTG9hZCcpO1xuICAgICAgICBlbmRQb3N0VXBkYXRlKCk7XG4gICAgICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcpIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJG9uUmVhZHlSZXNvbHZlJChlbG0pO1xuICAgICAgICAgICAgaWYgKCFhbmNlc3RvckNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGFwcERpZExvYWQodGFnTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChCVUlMRC5jbXBEaWRVcGRhdGUpIHtcbiAgICAgICAgICAgIC8vIHdlJ3ZlIGFscmVhZHkgbG9hZGVkIHRoaXMgY29tcG9uZW50XG4gICAgICAgICAgICAvLyBmaXJlIG9mZiB0aGUgdXNlcidzIGNvbXBvbmVudERpZFVwZGF0ZSBtZXRob2QgKGlmIG9uZSB3YXMgcHJvdmlkZWQpXG4gICAgICAgICAgICAvLyBjb21wb25lbnREaWRVcGRhdGUgcnVucyBBRlRFUiByZW5kZXIoKSBoYXMgYmVlbiBjYWxsZWRcbiAgICAgICAgICAgIC8vIGFuZCBhbGwgY2hpbGQgY29tcG9uZW50cyBoYXZlIGZpbmlzaGVkIHVwZGF0aW5nXG4gICAgICAgICAgICBpZiAoQlVJTEQuaXNEZXYpIHtcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMTAyNCAvKiBIT1NUX0ZMQUdTLmRldk9uUmVuZGVyICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2FmZUNhbGwoaW5zdGFuY2UsICdjb21wb25lbnREaWRVcGRhdGUnKTtcbiAgICAgICAgICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCAmPSB+MTAyNCAvKiBIT1NUX0ZMQUdTLmRldk9uUmVuZGVyICovO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVtaXRMaWZlY3ljbGVFdmVudChlbG0sICdjb21wb25lbnREaWRVcGRhdGUnKTtcbiAgICAgICAgZW5kUG9zdFVwZGF0ZSgpO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuaG90TW9kdWxlUmVwbGFjZW1lbnQpIHtcbiAgICAgICAgZWxtWydzLWhtci1sb2FkJ10gJiYgZWxtWydzLWhtci1sb2FkJ10oKTtcbiAgICB9XG4gICAgaWYgKEJVSUxELm1ldGhvZCAmJiBCVUlMRC5sYXp5TG9hZCkge1xuICAgICAgICBob3N0UmVmLiRvbkluc3RhbmNlUmVzb2x2ZSQoZWxtKTtcbiAgICB9XG4gICAgLy8gbG9hZCBldmVudHMgZmlyZSBmcm9tIGJvdHRvbSB0byB0b3BcbiAgICAvLyB0aGUgZGVlcGVzdCBlbGVtZW50cyBsb2FkIGZpcnN0IHRoZW4gYnViYmxlcyB1cFxuICAgIGlmIChCVUlMRC5hc3luY0xvYWRpbmcpIHtcbiAgICAgICAgaWYgKGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQpIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQoKTtcbiAgICAgICAgICAgIGhvc3RSZWYuJG9uUmVuZGVyUmVzb2x2ZSQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvc3RSZWYuJGZsYWdzJCAmIDUxMiAvKiBIT1NUX0ZMQUdTLm5lZWRzUmVyZW5kZXIgKi8pIHtcbiAgICAgICAgICAgIG5leHRUaWNrKCgpID0+IHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKSk7XG4gICAgICAgIH1cbiAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH4oNCAvKiBIT1NUX0ZMQUdTLmlzV2FpdGluZ0ZvckNoaWxkcmVuICovIHwgNTEyIC8qIEhPU1RfRkxBR1MubmVlZHNSZXJlbmRlciAqLyk7XG4gICAgfVxuICAgIC8vICgg4oCiX+KAoilcbiAgICAvLyAoIOKAol/igKIpPuKMkOKWoC3ilqBcbiAgICAvLyAo4oyQ4pagX+KWoClcbn07XG5jb25zdCBmb3JjZVVwZGF0ZSA9IChyZWYpID0+IHtcbiAgICBpZiAoQlVJTEQudXBkYXRhYmxlKSB7XG4gICAgICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKHJlZik7XG4gICAgICAgIGNvbnN0IGlzQ29ubmVjdGVkID0gaG9zdFJlZi4kaG9zdEVsZW1lbnQkLmlzQ29ubmVjdGVkO1xuICAgICAgICBpZiAoaXNDb25uZWN0ZWQgJiZcbiAgICAgICAgICAgIChob3N0UmVmLiRmbGFncyQgJiAoMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovIHwgMTYgLyogSE9TVF9GTEFHUy5pc1F1ZXVlZEZvclVwZGF0ZSAqLykpID09PSAyIC8qIEhPU1RfRkxBR1MuaGFzUmVuZGVyZWQgKi8pIHtcbiAgICAgICAgICAgIHNjaGVkdWxlVXBkYXRlKGhvc3RSZWYsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZXR1cm5zIFwidHJ1ZVwiIHdoZW4gdGhlIGZvcmNlZCB1cGRhdGUgd2FzIHN1Y2Nlc3NmdWxseSBzY2hlZHVsZWRcbiAgICAgICAgcmV0dXJuIGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuY29uc3QgYXBwRGlkTG9hZCA9ICh3aG8pID0+IHtcbiAgICAvLyBvbiBhcHBsb2FkXG4gICAgLy8gd2UgaGF2ZSBmaW5pc2ggdGhlIGZpcnN0IGJpZyBpbml0aWFsIHJlbmRlclxuICAgIGlmIChCVUlMRC5jc3NBbm5vdGF0aW9ucykge1xuICAgICAgICBhZGRIeWRyYXRlZEZsYWcoZG9jLmRvY3VtZW50RWxlbWVudCk7XG4gICAgfVxuICAgIGlmIChCVUlMRC5hc3luY1F1ZXVlKSB7XG4gICAgICAgIHBsdC4kZmxhZ3MkIHw9IDIgLyogUExBVEZPUk1fRkxBR1MuYXBwTG9hZGVkICovO1xuICAgIH1cbiAgICBuZXh0VGljaygoKSA9PiBlbWl0RXZlbnQod2luLCAnYXBwbG9hZCcsIHsgZGV0YWlsOiB7IG5hbWVzcGFjZTogTkFNRVNQQUNFIH0gfSkpO1xuICAgIGlmIChCVUlMRC5wcm9maWxlICYmIHBlcmZvcm1hbmNlLm1lYXN1cmUpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWVhc3VyZShgW1N0ZW5jaWxdICR7TkFNRVNQQUNFfSBpbml0aWFsIGxvYWQgKGJ5ICR7d2hvfSlgLCAnc3Q6YXBwOnN0YXJ0Jyk7XG4gICAgfVxufTtcbmNvbnN0IHNhZmVDYWxsID0gKGluc3RhbmNlLCBtZXRob2QsIGFyZykgPT4ge1xuICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZVttZXRob2RdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbbWV0aG9kXShhcmcpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5jb25zdCB0aGVuID0gKHByb21pc2UsIHRoZW5GbikgPT4ge1xuICAgIHJldHVybiBwcm9taXNlICYmIHByb21pc2UudGhlbiA/IHByb21pc2UudGhlbih0aGVuRm4pIDogdGhlbkZuKCk7XG59O1xuY29uc3QgZW1pdExpZmVjeWNsZUV2ZW50ID0gKGVsbSwgbGlmZWN5Y2xlTmFtZSkgPT4ge1xuICAgIGlmIChCVUlMRC5saWZlY3ljbGVET01FdmVudHMpIHtcbiAgICAgICAgZW1pdEV2ZW50KGVsbSwgJ3N0ZW5jaWxfJyArIGxpZmVjeWNsZU5hbWUsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogTkFNRVNQQUNFLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IGFkZEh5ZHJhdGVkRmxhZyA9IChlbG0pID0+IEJVSUxELmh5ZHJhdGVkQ2xhc3NcbiAgICA/IGVsbS5jbGFzc0xpc3QuYWRkKCdoeWRyYXRlZCcpXG4gICAgOiBCVUlMRC5oeWRyYXRlZEF0dHJpYnV0ZVxuICAgICAgICA/IGVsbS5zZXRBdHRyaWJ1dGUoJ2h5ZHJhdGVkJywgJycpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuY29uc3Qgc2VydmVyU2lkZUNvbm5lY3RlZCA9IChlbG0pID0+IHtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGVsbS5jaGlsZHJlbjtcbiAgICBpZiAoY2hpbGRyZW4gIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZEVsbSA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZEVsbS5jb25uZWN0ZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkRWxtLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXJ2ZXJTaWRlQ29ubmVjdGVkKGNoaWxkRWxtKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBnZXRWYWx1ZSA9IChyZWYsIHByb3BOYW1lKSA9PiBnZXRIb3N0UmVmKHJlZikuJGluc3RhbmNlVmFsdWVzJC5nZXQocHJvcE5hbWUpO1xuY29uc3Qgc2V0VmFsdWUgPSAocmVmLCBwcm9wTmFtZSwgbmV3VmFsLCBjbXBNZXRhKSA9PiB7XG4gICAgLy8gY2hlY2sgb3VyIG5ldyBwcm9wZXJ0eSB2YWx1ZSBhZ2FpbnN0IG91ciBpbnRlcm5hbCB2YWx1ZVxuICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKHJlZik7XG4gICAgY29uc3QgZWxtID0gQlVJTEQubGF6eUxvYWQgPyBob3N0UmVmLiRob3N0RWxlbWVudCQgOiByZWY7XG4gICAgY29uc3Qgb2xkVmFsID0gaG9zdFJlZi4kaW5zdGFuY2VWYWx1ZXMkLmdldChwcm9wTmFtZSk7XG4gICAgY29uc3QgZmxhZ3MgPSBob3N0UmVmLiRmbGFncyQ7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBCVUlMRC5sYXp5TG9hZCA/IGhvc3RSZWYuJGxhenlJbnN0YW5jZSQgOiBlbG07XG4gICAgbmV3VmFsID0gcGFyc2VQcm9wZXJ0eVZhbHVlKG5ld1ZhbCwgY21wTWV0YS4kbWVtYmVycyRbcHJvcE5hbWVdWzBdKTtcbiAgICAvLyBleHBsaWNpdGx5IGNoZWNrIGZvciBOYU4gb24gYm90aCBzaWRlcywgYXMgYE5hTiA9PT0gTmFOYCBpcyBhbHdheXMgZmFsc2VcbiAgICBjb25zdCBhcmVCb3RoTmFOID0gTnVtYmVyLmlzTmFOKG9sZFZhbCkgJiYgTnVtYmVyLmlzTmFOKG5ld1ZhbCk7XG4gICAgY29uc3QgZGlkVmFsdWVDaGFuZ2UgPSBuZXdWYWwgIT09IG9sZFZhbCAmJiAhYXJlQm90aE5hTjtcbiAgICBpZiAoKCFCVUlMRC5sYXp5TG9hZCB8fCAhKGZsYWdzICYgOCAvKiBIT1NUX0ZMQUdTLmlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi8pIHx8IG9sZFZhbCA9PT0gdW5kZWZpbmVkKSAmJiBkaWRWYWx1ZUNoYW5nZSkge1xuICAgICAgICAvLyBnYWR6b29rcyEgdGhlIHByb3BlcnR5J3MgdmFsdWUgaGFzIGNoYW5nZWQhIVxuICAgICAgICAvLyBzZXQgb3VyIG5ldyB2YWx1ZSFcbiAgICAgICAgaG9zdFJlZi4kaW5zdGFuY2VWYWx1ZXMkLnNldChwcm9wTmFtZSwgbmV3VmFsKTtcbiAgICAgICAgaWYgKEJVSUxELmlzRGV2KSB7XG4gICAgICAgICAgICBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgMTAyNCAvKiBIT1NUX0ZMQUdTLmRldk9uUmVuZGVyICovKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZURldldhcm4oYFRoZSBzdGF0ZS9wcm9wIFwiJHtwcm9wTmFtZX1cIiBjaGFuZ2VkIGR1cmluZyByZW5kZXJpbmcuIFRoaXMgY2FuIHBvdGVudGlhbGx5IGxlYWQgdG8gaW5maW5pdGUtbG9vcHMgYW5kIG90aGVyIGJ1Z3MuYCwgJ1xcbkVsZW1lbnQnLCBlbG0sICdcXG5OZXcgdmFsdWUnLCBuZXdWYWwsICdcXG5PbGQgdmFsdWUnLCBvbGRWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaG9zdFJlZi4kZmxhZ3MkICYgMjA0OCAvKiBIT1NUX0ZMQUdTLmRldk9uRGlkTG9hZCAqLykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGVEZXZXYXJuKGBUaGUgc3RhdGUvcHJvcCBcIiR7cHJvcE5hbWV9XCIgY2hhbmdlZCBkdXJpbmcgXCJjb21wb25lbnREaWRMb2FkKClcIiwgdGhpcyB0cmlnZ2VycyBleHRyYSByZS1yZW5kZXJzLCB0cnkgdG8gc2V0dXAgb24gXCJjb21wb25lbnRXaWxsTG9hZCgpXCJgLCAnXFxuRWxlbWVudCcsIGVsbSwgJ1xcbk5ldyB2YWx1ZScsIG5ld1ZhbCwgJ1xcbk9sZCB2YWx1ZScsIG9sZFZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFCVUlMRC5sYXp5TG9hZCB8fCBpbnN0YW5jZSkge1xuICAgICAgICAgICAgLy8gZ2V0IGFuIGFycmF5IG9mIG1ldGhvZCBuYW1lcyBvZiB3YXRjaCBmdW5jdGlvbnMgdG8gY2FsbFxuICAgICAgICAgICAgaWYgKEJVSUxELndhdGNoQ2FsbGJhY2sgJiYgY21wTWV0YS4kd2F0Y2hlcnMkICYmIGZsYWdzICYgMTI4IC8qIEhPU1RfRkxBR1MuaXNXYXRjaFJlYWR5ICovKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2F0Y2hNZXRob2RzID0gY21wTWV0YS4kd2F0Y2hlcnMkW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAod2F0Y2hNZXRob2RzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgaW5zdGFuY2UgaXMgd2F0Y2hpbmcgZm9yIHdoZW4gdGhpcyBwcm9wZXJ0eSBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICAgIHdhdGNoTWV0aG9kcy5tYXAoKHdhdGNoTWV0aG9kTmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmaXJlIG9mZiBlYWNoIG9mIHRoZSB3YXRjaCBtZXRob2RzIHRoYXQgYXJlIHdhdGNoaW5nIHRoaXMgcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZVt3YXRjaE1ldGhvZE5hbWVdKG5ld1ZhbCwgb2xkVmFsLCBwcm9wTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlLCBlbG0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQudXBkYXRhYmxlICYmXG4gICAgICAgICAgICAgICAgKGZsYWdzICYgKDIgLyogSE9TVF9GTEFHUy5oYXNSZW5kZXJlZCAqLyB8IDE2IC8qIEhPU1RfRkxBR1MuaXNRdWV1ZWRGb3JVcGRhdGUgKi8pKSA9PT0gMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovKSB7XG4gICAgICAgICAgICAgICAgaWYgKEJVSUxELmNtcFNob3VsZFVwZGF0ZSAmJiBpbnN0YW5jZS5jb21wb25lbnRTaG91bGRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLmNvbXBvbmVudFNob3VsZFVwZGF0ZShuZXdWYWwsIG9sZFZhbCwgcHJvcE5hbWUpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxvb2tzIGxpa2UgdGhpcyB2YWx1ZSBhY3R1YWxseSBjaGFuZ2VkLCBzbyB3ZSd2ZSBnb3Qgd29yayB0byBkbyFcbiAgICAgICAgICAgICAgICAvLyBidXQgb25seSBpZiB3ZSd2ZSBhbHJlYWR5IHJlbmRlcmVkLCBvdGhlcndpc2UganVzdCBjaGlsbCBvdXRcbiAgICAgICAgICAgICAgICAvLyBxdWV1ZSB0aGF0IHdlIG5lZWQgdG8gZG8gYW4gdXBkYXRlLCBidXQgZG9uJ3Qgd29ycnkgYWJvdXQgcXVldWluZ1xuICAgICAgICAgICAgICAgIC8vIHVwIG1pbGxpb25zIGN1eiB0aGlzIGZ1bmN0aW9uIGVuc3VyZXMgaXQgb25seSBydW5zIG9uY2VcbiAgICAgICAgICAgICAgICBzY2hlZHVsZVVwZGF0ZShob3N0UmVmLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gKiBBdHRhY2ggYSBzZXJpZXMgb2YgcnVudGltZSBjb25zdHJ1Y3RzIHRvIGEgY29tcGlsZWQgU3RlbmNpbCBjb21wb25lbnRcbiAqIGNvbnN0cnVjdG9yLCBpbmNsdWRpbmcgZ2V0dGVycyBhbmQgc2V0dGVycyBmb3IgdGhlIGBAUHJvcGAgYW5kIGBAU3RhdGVgXG4gKiBkZWNvcmF0b3JzLCBjYWxsYmFja3MgZm9yIHdoZW4gYXR0cmlidXRlcyBjaGFuZ2UsIGFuZCBzbyBvbi5cbiAqXG4gKiBAcGFyYW0gQ3N0ciB0aGUgY29uc3RydWN0b3IgZm9yIGEgY29tcG9uZW50IHRoYXQgd2UgbmVlZCB0byBwcm9jZXNzXG4gKiBAcGFyYW0gY21wTWV0YSBtZXRhZGF0YSBjb2xsZWN0ZWQgcHJldmlvdXNseSBhYm91dCB0aGUgY29tcG9uZW50XG4gKiBAcGFyYW0gZmxhZ3MgYSBudW1iZXIgdXNlZCB0byBzdG9yZSBhIHNlcmllcyBvZiBiaXQgZmxhZ3NcbiAqIEByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBzYW1lIGNvbnN0cnVjdG9yIHBhc3NlZCBpbiAoYnV0IG5vdyBtdXRhdGVkKVxuICovXG5jb25zdCBwcm94eUNvbXBvbmVudCA9IChDc3RyLCBjbXBNZXRhLCBmbGFncykgPT4ge1xuICAgIGlmIChCVUlMRC5tZW1iZXIgJiYgY21wTWV0YS4kbWVtYmVycyQpIHtcbiAgICAgICAgaWYgKEJVSUxELndhdGNoQ2FsbGJhY2sgJiYgQ3N0ci53YXRjaGVycykge1xuICAgICAgICAgICAgY21wTWV0YS4kd2F0Y2hlcnMkID0gQ3N0ci53YXRjaGVycztcbiAgICAgICAgfVxuICAgICAgICAvLyBJdCdzIGJldHRlciB0byBoYXZlIGEgY29uc3QgdGhhbiB0d28gT2JqZWN0LmVudHJpZXMoKVxuICAgICAgICBjb25zdCBtZW1iZXJzID0gT2JqZWN0LmVudHJpZXMoY21wTWV0YS4kbWVtYmVycyQpO1xuICAgICAgICBjb25zdCBwcm90b3R5cGUgPSBDc3RyLnByb3RvdHlwZTtcbiAgICAgICAgbWVtYmVycy5tYXAoKFttZW1iZXJOYW1lLCBbbWVtYmVyRmxhZ3NdXSkgPT4ge1xuICAgICAgICAgICAgaWYgKChCVUlMRC5wcm9wIHx8IEJVSUxELnN0YXRlKSAmJlxuICAgICAgICAgICAgICAgIChtZW1iZXJGbGFncyAmIDMxIC8qIE1FTUJFUl9GTEFHUy5Qcm9wICovIHx8XG4gICAgICAgICAgICAgICAgICAgICgoIUJVSUxELmxhenlMb2FkIHx8IGZsYWdzICYgMiAvKiBQUk9YWV9GTEFHUy5wcm94eVN0YXRlICovKSAmJiBtZW1iZXJGbGFncyAmIDMyIC8qIE1FTUJFUl9GTEFHUy5TdGF0ZSAqLykpKSB7XG4gICAgICAgICAgICAgICAgLy8gcHJveHlDb21wb25lbnQgLSBwcm9wXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3RvdHlwZSwgbWVtYmVyTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm94eUNvbXBvbmVudCwgZ2V0IHZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0VmFsdWUodGhpcywgbWVtYmVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25seSBkdXJpbmcgZGV2IHRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZiA9IGdldEhvc3RSZWYodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGFyZSBwcm94eWluZyB0aGUgaW5zdGFuY2UgKG5vdCBlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmbGFncyAmIDEgLyogUFJPWFlfRkxBR1MuaXNFbGVtZW50Q29uc3RydWN0b3IgKi8pID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBlbGVtZW50IGlzIG5vdCBjb25zdHJ1Y3RpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlZi4kZmxhZ3MkICYgOCAvKiBIT1NUX0ZMQUdTLmlzQ29uc3RydWN0aW5nSW5zdGFuY2UgKi8pID09PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBtZW1iZXIgaXMgYSBwcm9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtZW1iZXJGbGFncyAmIDMxIC8qIE1FTUJFUl9GTEFHUy5Qcm9wICovKSAhPT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbWVtYmVyIGlzIG5vdCBtdXRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtZW1iZXJGbGFncyAmIDEwMjQgLyogTUVNQkVSX0ZMQUdTLk11dGFibGUgKi8pID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGVEZXZXYXJuKGBAUHJvcCgpIFwiJHttZW1iZXJOYW1lfVwiIG9uIDwke2NtcE1ldGEuJHRhZ05hbWUkfT4gaXMgaW1tdXRhYmxlIGJ1dCB3YXMgbW9kaWZpZWQgZnJvbSB3aXRoaW4gdGhlIGNvbXBvbmVudC5cXG5Nb3JlIGluZm9ybWF0aW9uOiBodHRwczovL3N0ZW5jaWxqcy5jb20vZG9jcy9wcm9wZXJ0aWVzI3Byb3AtbXV0YWJpbGl0eWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb3h5Q29tcG9uZW50LCBzZXQgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHRoaXMsIG1lbWJlck5hbWUsIG5ld1ZhbHVlLCBjbXBNZXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoQlVJTEQubGF6eUxvYWQgJiZcbiAgICAgICAgICAgICAgICBCVUlMRC5tZXRob2QgJiZcbiAgICAgICAgICAgICAgICBmbGFncyAmIDEgLyogUFJPWFlfRkxBR1MuaXNFbGVtZW50Q29uc3RydWN0b3IgKi8gJiZcbiAgICAgICAgICAgICAgICBtZW1iZXJGbGFncyAmIDY0IC8qIE1FTUJFUl9GTEFHUy5NZXRob2QgKi8pIHtcbiAgICAgICAgICAgICAgICAvLyBwcm94eUNvbXBvbmVudCAtIG1ldGhvZFxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm90b3R5cGUsIG1lbWJlck5hbWUsIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUoLi4uYXJncykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmID0gZ2V0SG9zdFJlZih0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWYuJG9uSW5zdGFuY2VQcm9taXNlJC50aGVuKCgpID0+IHJlZi4kbGF6eUluc3RhbmNlJFttZW1iZXJOYW1lXSguLi5hcmdzKSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoQlVJTEQub2JzZXJ2ZUF0dHJpYnV0ZSAmJiAoIUJVSUxELmxhenlMb2FkIHx8IGZsYWdzICYgMSAvKiBQUk9YWV9GTEFHUy5pc0VsZW1lbnRDb25zdHJ1Y3RvciAqLykpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lVG9Qcm9wTmFtZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgIHByb3RvdHlwZS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiAoYXR0ck5hbWUsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBwbHQuam1wKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcE5hbWUgPSBhdHRyTmFtZVRvUHJvcE5hbWUuZ2V0KGF0dHJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gIEluIGEgd2ViIGNvbXBvbmVudCBsaWZlY3ljbGUgdGhlIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayBydW5zIHByaW9yIHRvIGNvbm5lY3RlZENhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIC8vICBpbiB0aGUgY2FzZSB3aGVyZSBhbiBhdHRyaWJ1dGUgd2FzIHNldCBpbmxpbmUuXG4gICAgICAgICAgICAgICAgICAgIC8vICBgYGBodG1sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDxteS1jb21wb25lbnQgc29tZS1hdHRyaWJ1dGU9XCJzb21lLXZhbHVlXCI+PC9teS1jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgIC8vICBgYGBcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gIFRoZXJlIGlzIGFuIGVkZ2UgY2FzZSB3aGVyZSBhIGRldmVsb3BlciBzZXRzIHRoZSBhdHRyaWJ1dGUgaW5saW5lIG9uIGEgY3VzdG9tIGVsZW1lbnQgYW5kIHRoZW5cbiAgICAgICAgICAgICAgICAgICAgLy8gIHByb2dyYW1tYXRpY2FsbHkgY2hhbmdlcyBpdCBiZWZvcmUgaXQgaGFzIGJlZW4gdXBncmFkZWQgYXMgc2hvd24gYmVsb3c6XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICBgYGBodG1sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgIDwhLS0gdGhpcyBjb21wb25lbnQgaGFzIF9ub3RfIGJlZW4gdXBncmFkZWQgeWV0IC0tPlxuICAgICAgICAgICAgICAgICAgICAvLyAgICA8bXktY29tcG9uZW50IGlkPVwidGVzdFwiIHNvbWUtYXR0cmlidXRlPVwic29tZS12YWx1ZVwiPjwvbXktY29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICA8c2NyaXB0PlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIC8vIGdyYWIgbm9uLXVwZ3JhZGVkIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0ZXN0XCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIGVsLnNvbWVBdHRyaWJ1dGUgPSBcImFub3RoZXItdmFsdWVcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAvLyB1cGdyYWRlIGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbXktY29tcG9uZW50JywgTXlDb21wb25lbnQpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICA8L3NjcmlwdD5cbiAgICAgICAgICAgICAgICAgICAgLy8gIGBgYFxuICAgICAgICAgICAgICAgICAgICAvLyAgSW4gdGhpcyBjYXNlIGlmIHdlIGRvIG5vdCB1bnNoYWRvdyBoZXJlIGFuZCB1c2UgdGhlIHZhbHVlIG9mIHRoZSBzaGFkb3dpbmcgcHJvcGVydHksIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAvLyAgd2lsbCBiZSBjYWxsZWQgd2l0aCBgbmV3VmFsdWUgPSBcInNvbWUtdmFsdWVcImAgYW5kIHdpbGwgc2V0IHRoZSBzaGFkb3dlZCBwcm9wZXJ0eSAodGhpcy5zb21lQXR0cmlidXRlID0gXCJhbm90aGVyLXZhbHVlXCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICB0byB0aGUgdmFsdWUgdGhhdCB3YXMgc2V0IGlubGluZSBpLmUuIFwic29tZS12YWx1ZVwiIGZyb20gYWJvdmUgZXhhbXBsZS4gV2hlblxuICAgICAgICAgICAgICAgICAgICAvLyAgdGhlIGNvbm5lY3RlZENhbGxiYWNrIGF0dGVtcHRzIHRvIHVuc2hhZG93IGl0IHdpbGwgdXNlIFwic29tZS12YWx1ZVwiIGFzIHRoZSBpbml0aWFsIHZhbHVlIHJhdGhlciB0aGFuIFwiYW5vdGhlci12YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICBUaGUgY2FzZSB3aGVyZSB0aGUgYXR0cmlidXRlIHdhcyBOT1Qgc2V0IGlubGluZSBidXQgd2FzIG5vdCBzZXQgcHJvZ3JhbW1hdGljYWxseSBzaGFsbCBiZSBoYW5kbGVkL3Vuc2hhZG93ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gIGJ5IGNvbm5lY3RlZENhbGxiYWNrIGFzIHRoaXMgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrIHdpbGwgbm90IGZpcmUuXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vICBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3dlYi1jb21wb25lbnRzL2Jlc3QtcHJhY3RpY2VzI2xhenktcHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgVE9ETyhTVEVOQ0lMLTE2KSB3ZSBzaG91bGQgdGhpbmsgYWJvdXQgd2hldGhlciBvciBub3Qgd2UgYWN0dWFsbHkgd2FudCB0byBiZSByZWZsZWN0aW5nIHRoZSBhdHRyaWJ1dGVzIHRvXG4gICAgICAgICAgICAgICAgICAgIC8vICBwcm9wZXJ0aWVzIGhlcmUgZ2l2ZW4gdGhhdCB0aGlzIGdvZXMgYWdhaW5zdCBiZXN0IHByYWN0aWNlcyBvdXRsaW5lZCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIC8vICBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS93ZWIvZnVuZGFtZW50YWxzL3dlYi1jb21wb25lbnRzL2Jlc3QtcHJhY3RpY2VzI2F2b2lkLXJlZW50cmFuY3lcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXNbcHJvcE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzW3Byb3BOYW1lXSA9PT0gJ251bWJlcicgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcHJvcE5hbWUgZXhpc3RzIG9uIHRoZSBwcm90b3R5cGUgb2YgYENzdHJgLCB0aGlzIHVwZGF0ZSBtYXkgYmUgYSByZXN1bHQgb2YgU3RlbmNpbCB1c2luZyBuYXRpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFQSXMgdG8gcmVmbGVjdCBwcm9wcyBhcyBhdHRyaWJ1dGVzLiBDYWxscyB0byBgc2V0QXR0cmlidXRlKHNvbWVFbGVtZW50LCBwcm9wTmFtZSlgIHdpbGwgcmVzdWx0IGluXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBgcHJvcE5hbWVgIHRvIGJlIGNvbnZlcnRlZCB0byBhIGBET01TdHJpbmdgLCB3aGljaCBtYXkgbm90IGJlIHdoYXQgd2Ugd2FudCBmb3Igb3RoZXIgcHJpbWl0aXZlIHByb3BzLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbcHJvcE5hbWVdID0gbmV3VmFsdWUgPT09IG51bGwgJiYgdHlwZW9mIHRoaXNbcHJvcE5hbWVdID09PSAnYm9vbGVhbicgPyBmYWxzZSA6IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSBvZiBhdHRyaWJ1dGVzIHRvIG9ic2VydmVcbiAgICAgICAgICAgIC8vIGFuZCBhbHNvIGNyZWF0ZSBhIG1hcCBvZiBodG1sIGF0dHJpYnV0ZSBuYW1lIHRvIGpzIHByb3BlcnR5IG5hbWVcbiAgICAgICAgICAgIENzdHIub2JzZXJ2ZWRBdHRyaWJ1dGVzID0gbWVtYmVyc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoKFtfLCBtXSkgPT4gbVswXSAmIDE1IC8qIE1FTUJFUl9GTEFHUy5IYXNBdHRyaWJ1dGUgKi8pIC8vIGZpbHRlciB0byBvbmx5IGtlZXAgcHJvcHMgdGhhdCBzaG91bGQgbWF0Y2ggYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIC5tYXAoKFtwcm9wTmFtZSwgbV0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyTmFtZSA9IG1bMV0gfHwgcHJvcE5hbWU7XG4gICAgICAgICAgICAgICAgYXR0ck5hbWVUb1Byb3BOYW1lLnNldChhdHRyTmFtZSwgcHJvcE5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5yZWZsZWN0ICYmIG1bMF0gJiA1MTIgLyogTUVNQkVSX0ZMQUdTLlJlZmxlY3RBdHRyICovKSB7XG4gICAgICAgICAgICAgICAgICAgIGNtcE1ldGEuJGF0dHJzVG9SZWZsZWN0JC5wdXNoKFtwcm9wTmFtZSwgYXR0ck5hbWVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHJOYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIENzdHI7XG59O1xuY29uc3QgaW5pdGlhbGl6ZUNvbXBvbmVudCA9IGFzeW5jIChlbG0sIGhvc3RSZWYsIGNtcE1ldGEsIGhtclZlcnNpb25JZCwgQ3N0cikgPT4ge1xuICAgIC8vIGluaXRpYWxpemVDb21wb25lbnRcbiAgICBpZiAoKEJVSUxELmxhenlMb2FkIHx8IEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlIHx8IEJVSUxELnN0eWxlKSAmJlxuICAgICAgICAoaG9zdFJlZi4kZmxhZ3MkICYgMzIgLyogSE9TVF9GTEFHUy5oYXNJbml0aWFsaXplZENvbXBvbmVudCAqLykgPT09IDApIHtcbiAgICAgICAgaWYgKEJVSUxELmxhenlMb2FkIHx8IEJVSUxELmh5ZHJhdGVDbGllbnRTaWRlKSB7XG4gICAgICAgICAgICAvLyB3ZSBoYXZlbid0IGluaXRpYWxpemVkIHRoaXMgZWxlbWVudCB5ZXRcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAzMiAvKiBIT1NUX0ZMQUdTLmhhc0luaXRpYWxpemVkQ29tcG9uZW50ICovO1xuICAgICAgICAgICAgLy8gbGF6eSBsb2FkZWQgY29tcG9uZW50c1xuICAgICAgICAgICAgLy8gcmVxdWVzdCB0aGUgY29tcG9uZW50J3MgaW1wbGVtZW50YXRpb24gdG8gYmVcbiAgICAgICAgICAgIC8vIHdpcmVkIHVwIHdpdGggdGhlIGhvc3QgZWxlbWVudFxuICAgICAgICAgICAgQ3N0ciA9IGxvYWRNb2R1bGUoY21wTWV0YSwgaG9zdFJlZiwgaG1yVmVyc2lvbklkKTtcbiAgICAgICAgICAgIGlmIChDc3RyLnRoZW4pIHtcbiAgICAgICAgICAgICAgICAvLyBBd2FpdCBjcmVhdGVzIGEgbWljcm8tdGFzayBhdm9pZCBpZiBwb3NzaWJsZVxuICAgICAgICAgICAgICAgIGNvbnN0IGVuZExvYWQgPSB1bmlxdWVUaW1lKGBzdDpsb2FkOiR7Y21wTWV0YS4kdGFnTmFtZSR9OiR7aG9zdFJlZi4kbW9kZU5hbWUkfWAsIGBbU3RlbmNpbF0gTG9hZCBtb2R1bGUgZm9yIDwke2NtcE1ldGEuJHRhZ05hbWUkfT5gKTtcbiAgICAgICAgICAgICAgICBDc3RyID0gYXdhaXQgQ3N0cjtcbiAgICAgICAgICAgICAgICBlbmRMb2FkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKEJVSUxELmlzRGV2IHx8IEJVSUxELmlzRGVidWcpICYmICFDc3RyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb25zdHJ1Y3RvciBmb3IgXCIke2NtcE1ldGEuJHRhZ05hbWUkfSMke2hvc3RSZWYuJG1vZGVOYW1lJH1cIiB3YXMgbm90IGZvdW5kYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQubWVtYmVyICYmICFDc3RyLmlzUHJveGllZCkge1xuICAgICAgICAgICAgICAgIC8vIHdlJ3ZlIG5ldmVyIHByb3hpZWQgdGhpcyBDb25zdHJ1Y3RvciBiZWZvcmVcbiAgICAgICAgICAgICAgICAvLyBsZXQncyBhZGQgdGhlIGdldHRlcnMvc2V0dGVycyB0byBpdHMgcHJvdG90eXBlIGJlZm9yZVxuICAgICAgICAgICAgICAgIC8vIHRoZSBmaXJzdCB0aW1lIHdlIGNyZWF0ZSBhbiBpbnN0YW5jZSBvZiB0aGUgaW1wbGVtZW50YXRpb25cbiAgICAgICAgICAgICAgICBpZiAoQlVJTEQud2F0Y2hDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjbXBNZXRhLiR3YXRjaGVycyQgPSBDc3RyLndhdGNoZXJzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm94eUNvbXBvbmVudChDc3RyLCBjbXBNZXRhLCAyIC8qIFBST1hZX0ZMQUdTLnByb3h5U3RhdGUgKi8pO1xuICAgICAgICAgICAgICAgIENzdHIuaXNQcm94aWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGVuZE5ld0luc3RhbmNlID0gY3JlYXRlVGltZSgnY3JlYXRlSW5zdGFuY2UnLCBjbXBNZXRhLiR0YWdOYW1lJCk7XG4gICAgICAgICAgICAvLyBvaywgdGltZSB0byBjb25zdHJ1Y3QgdGhlIGluc3RhbmNlXG4gICAgICAgICAgICAvLyBidXQgbGV0J3Mga2VlcCB0cmFjayBvZiB3aGVuIHdlIHN0YXJ0IGFuZCBzdG9wXG4gICAgICAgICAgICAvLyBzbyB0aGF0IHRoZSBnZXR0ZXJzL3NldHRlcnMgZG9uJ3QgaW5jb3JyZWN0bHkgc3RlcCBvbiBkYXRhXG4gICAgICAgICAgICBpZiAoQlVJTEQubWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDggLyogSE9TVF9GTEFHUy5pc0NvbnN0cnVjdGluZ0luc3RhbmNlICovO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc3RydWN0IHRoZSBsYXp5LWxvYWRlZCBjb21wb25lbnQgaW1wbGVtZW50YXRpb25cbiAgICAgICAgICAgIC8vIHBhc3NpbmcgdGhlIGhvc3RSZWYgaXMgdmVyeSBpbXBvcnRhbnQgZHVyaW5nXG4gICAgICAgICAgICAvLyBjb25zdHJ1Y3Rpb24gaW4gb3JkZXIgdG8gZGlyZWN0bHkgd2lyZSB0b2dldGhlciB0aGVcbiAgICAgICAgICAgIC8vIGhvc3QgZWxlbWVudCBhbmQgdGhlIGxhenktbG9hZGVkIGluc3RhbmNlXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIG5ldyBDc3RyKGhvc3RSZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlRXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQubWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkICY9IH44IC8qIEhPU1RfRkxBR1MuaXNDb25zdHJ1Y3RpbmdJbnN0YW5jZSAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC53YXRjaENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kZmxhZ3MkIHw9IDEyOCAvKiBIT1NUX0ZMQUdTLmlzV2F0Y2hSZWFkeSAqLztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVuZE5ld0luc3RhbmNlKCk7XG4gICAgICAgICAgICBmaXJlQ29ubmVjdGVkQ2FsbGJhY2soaG9zdFJlZi4kbGF6eUluc3RhbmNlJCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBzeW5jIGNvbnN0cnVjdG9yIGNvbXBvbmVudFxuICAgICAgICAgICAgQ3N0ciA9IGVsbS5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGhvc3RSZWYuJGZsYWdzJCB8PSAzMiAvKiBIT1NUX0ZMQUdTLmhhc0luaXRpYWxpemVkQ29tcG9uZW50ICovO1xuICAgICAgICAgICAgLy8gd2FpdCBmb3IgdGhlIEN1c3RvbUVsZW1lbnRSZWdpc3RyeSB0byBtYXJrIHRoZSBjb21wb25lbnQgYXMgcmVhZHkgYmVmb3JlIHNldHRpbmcgYGlzV2F0Y2hSZWFkeWAuIE90aGVyd2lzZSxcbiAgICAgICAgICAgIC8vIHdhdGNoZXJzIG1heSBmaXJlIHByZW1hdHVyZWx5IGlmIGBjdXN0b21FbGVtZW50cy5nZXQoKWAvYGN1c3RvbUVsZW1lbnRzLndoZW5EZWZpbmVkKClgIHJlc29sdmVzIF9iZWZvcmVfXG4gICAgICAgICAgICAvLyBTdGVuY2lsIGhhcyBjb21wbGV0ZWQgaW5zdGFudGlhdGluZyB0aGUgY29tcG9uZW50LlxuICAgICAgICAgICAgY3VzdG9tRWxlbWVudHMud2hlbkRlZmluZWQoY21wTWV0YS4kdGFnTmFtZSQpLnRoZW4oKCkgPT4gKGhvc3RSZWYuJGZsYWdzJCB8PSAxMjggLyogSE9TVF9GTEFHUy5pc1dhdGNoUmVhZHkgKi8pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQuc3R5bGUgJiYgQ3N0ci5zdHlsZSkge1xuICAgICAgICAgICAgLy8gdGhpcyBjb21wb25lbnQgaGFzIHN0eWxlcyBidXQgd2UgaGF2ZW4ndCByZWdpc3RlcmVkIHRoZW0geWV0XG4gICAgICAgICAgICBsZXQgc3R5bGUgPSBDc3RyLnN0eWxlO1xuICAgICAgICAgICAgaWYgKEJVSUxELm1vZGUgJiYgdHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHN0eWxlID0gc3R5bGVbKGhvc3RSZWYuJG1vZGVOYW1lJCA9IGNvbXB1dGVNb2RlKGVsbSkpXTtcbiAgICAgICAgICAgICAgICBpZiAoQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgJiYgaG9zdFJlZi4kbW9kZU5hbWUkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ3MtbW9kZScsIGhvc3RSZWYuJG1vZGVOYW1lJCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2NvcGVJZCA9IGdldFNjb3BlSWQoY21wTWV0YSwgaG9zdFJlZi4kbW9kZU5hbWUkKTtcbiAgICAgICAgICAgIGlmICghc3R5bGVzLmhhcyhzY29wZUlkKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVuZFJlZ2lzdGVyU3R5bGVzID0gY3JlYXRlVGltZSgncmVnaXN0ZXJTdHlsZXMnLCBjbXBNZXRhLiR0YWdOYW1lJCk7XG4gICAgICAgICAgICAgICAgaWYgKCFCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSAmJlxuICAgICAgICAgICAgICAgICAgICBCVUlMRC5zaGFkb3dEb20gJiZcbiAgICAgICAgICAgICAgICAgICAgQlVJTEQuc2hhZG93RG9tU2hpbSAmJlxuICAgICAgICAgICAgICAgICAgICBjbXBNZXRhLiRmbGFncyQgJiA4IC8qIENNUF9GTEFHUy5uZWVkc1NoYWRvd0RvbVNoaW0gKi8pIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSBhd2FpdCBpbXBvcnQoJy4vc2hhZG93LWNzcy5qcycpLnRoZW4oKG0pID0+IG0uc2NvcGVDc3Moc3R5bGUsIHNjb3BlSWQsIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyU3R5bGUoc2NvcGVJZCwgc3R5bGUsICEhKGNtcE1ldGEuJGZsYWdzJCAmIDEgLyogQ01QX0ZMQUdTLnNoYWRvd0RvbUVuY2Fwc3VsYXRpb24gKi8pKTtcbiAgICAgICAgICAgICAgICBlbmRSZWdpc3RlclN0eWxlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdlJ3ZlIHN1Y2Nlc3NmdWxseSBjcmVhdGVkIGEgbGF6eSBpbnN0YW5jZVxuICAgIGNvbnN0IGFuY2VzdG9yQ29tcG9uZW50ID0gaG9zdFJlZi4kYW5jZXN0b3JDb21wb25lbnQkO1xuICAgIGNvbnN0IHNjaGVkdWxlID0gKCkgPT4gc2NoZWR1bGVVcGRhdGUoaG9zdFJlZiwgdHJ1ZSk7XG4gICAgaWYgKEJVSUxELmFzeW5jTG9hZGluZyAmJiBhbmNlc3RvckNvbXBvbmVudCAmJiBhbmNlc3RvckNvbXBvbmVudFsncy1yYyddKSB7XG4gICAgICAgIC8vIHRoaXMgaXMgdGhlIGluaXRpYWwgbG9hZCBhbmQgdGhpcyBjb21wb25lbnQgaXQgaGFzIGFuIGFuY2VzdG9yIGNvbXBvbmVudFxuICAgICAgICAvLyBidXQgdGhlIGFuY2VzdG9yIGNvbXBvbmVudCBoYXMgTk9UIGZpcmVkIGl0cyB3aWxsIHVwZGF0ZSBsaWZlY3ljbGUgeWV0XG4gICAgICAgIC8vIHNvIGxldCdzIGp1c3QgY29vbCBvdXIgamV0cyBhbmQgd2FpdCBmb3IgdGhlIGFuY2VzdG9yIHRvIGNvbnRpbnVlIGZpcnN0XG4gICAgICAgIC8vIHRoaXMgd2lsbCBnZXQgZmlyZWQgb2ZmIHdoZW4gdGhlIGFuY2VzdG9yIGNvbXBvbmVudFxuICAgICAgICAvLyBmaW5hbGx5IGdldHMgYXJvdW5kIHRvIHJlbmRlcmluZyBpdHMgbGF6eSBzZWxmXG4gICAgICAgIC8vIGZpcmUgb2ZmIHRoZSBpbml0aWFsIHVwZGF0ZVxuICAgICAgICBhbmNlc3RvckNvbXBvbmVudFsncy1yYyddLnB1c2goc2NoZWR1bGUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc2NoZWR1bGUoKTtcbiAgICB9XG59O1xuY29uc3QgZmlyZUNvbm5lY3RlZENhbGxiYWNrID0gKGluc3RhbmNlKSA9PiB7XG4gICAgaWYgKEJVSUxELmxhenlMb2FkICYmIEJVSUxELmNvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnY29ubmVjdGVkQ2FsbGJhY2snKTtcbiAgICB9XG59O1xuY29uc3QgY29ubmVjdGVkQ2FsbGJhY2sgPSAoZWxtKSA9PiB7XG4gICAgaWYgKChwbHQuJGZsYWdzJCAmIDEgLyogUExBVEZPUk1fRkxBR1MuaXNUbXBEaXNjb25uZWN0ZWQgKi8pID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKGVsbSk7XG4gICAgICAgIGNvbnN0IGNtcE1ldGEgPSBob3N0UmVmLiRjbXBNZXRhJDtcbiAgICAgICAgY29uc3QgZW5kQ29ubmVjdGVkID0gY3JlYXRlVGltZSgnY29ubmVjdGVkQ2FsbGJhY2snLCBjbXBNZXRhLiR0YWdOYW1lJCk7XG4gICAgICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXJUYXJnZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIC8vIG9ubHkgcnVuIGlmIHdlIGhhdmUgbGlzdGVuZXJzIGJlaW5nIGF0dGFjaGVkIHRvIGEgcGFyZW50XG4gICAgICAgICAgICBhZGRIb3N0RXZlbnRMaXN0ZW5lcnMoZWxtLCBob3N0UmVmLCBjbXBNZXRhLiRsaXN0ZW5lcnMkLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShob3N0UmVmLiRmbGFncyQgJiAxIC8qIEhPU1RfRkxBR1MuaGFzQ29ubmVjdGVkICovKSkge1xuICAgICAgICAgICAgLy8gZmlyc3QgdGltZSB0aGlzIGNvbXBvbmVudCBoYXMgY29ubmVjdGVkXG4gICAgICAgICAgICBob3N0UmVmLiRmbGFncyQgfD0gMSAvKiBIT1NUX0ZMQUdTLmhhc0Nvbm5lY3RlZCAqLztcbiAgICAgICAgICAgIGxldCBob3N0SWQ7XG4gICAgICAgICAgICBpZiAoQlVJTEQuaHlkcmF0ZUNsaWVudFNpZGUpIHtcbiAgICAgICAgICAgICAgICBob3N0SWQgPSBlbG0uZ2V0QXR0cmlidXRlKEhZRFJBVEVfSUQpO1xuICAgICAgICAgICAgICAgIGlmIChob3N0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiBzdXBwb3J0c1NoYWRvdyAmJiBjbXBNZXRhLiRmbGFncyQgJiAxIC8qIENNUF9GTEFHUy5zaGFkb3dEb21FbmNhcHN1bGF0aW9uICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY29wZUlkID0gQlVJTEQubW9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWRkU3R5bGUoZWxtLnNoYWRvd1Jvb3QsIGNtcE1ldGEsIGVsbS5nZXRBdHRyaWJ1dGUoJ3MtbW9kZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWRkU3R5bGUoZWxtLnNoYWRvd1Jvb3QsIGNtcE1ldGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUoc2NvcGVJZCArICctaCcsIHNjb3BlSWQgKyAnLXMnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsaXplQ2xpZW50SHlkcmF0ZShlbG0sIGNtcE1ldGEuJHRhZ05hbWUkLCBob3N0SWQsIGhvc3RSZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5zbG90UmVsb2NhdGlvbiAmJiAhaG9zdElkKSB7XG4gICAgICAgICAgICAgICAgLy8gaW5pdFVwZGF0ZVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBzbG90IHBvbHlmaWxsIGlzIHJlcXVpcmVkIHdlJ2xsIG5lZWQgdG8gcHV0IHNvbWUgbm9kZXNcbiAgICAgICAgICAgICAgICAvLyBpbiBoZXJlIHRvIGFjdCBhcyBvcmlnaW5hbCBjb250ZW50IGFuY2hvcnMgYXMgd2UgbW92ZSBub2RlcyBhcm91bmRcbiAgICAgICAgICAgICAgICAvLyBob3N0IGVsZW1lbnQgaGFzIGJlZW4gY29ubmVjdGVkIHRvIHRoZSBET01cbiAgICAgICAgICAgICAgICBpZiAoQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgfHxcbiAgICAgICAgICAgICAgICAgICAgKChCVUlMRC5zbG90IHx8IEJVSUxELnNoYWRvd0RvbSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNtcE1ldGEuJGZsYWdzJCAmICg0IC8qIENNUF9GTEFHUy5oYXNTbG90UmVsb2NhdGlvbiAqLyB8IDggLyogQ01QX0ZMQUdTLm5lZWRzU2hhZG93RG9tU2hpbSAqLykpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldENvbnRlbnRSZWZlcmVuY2UoZWxtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgZmlyc3QgYW5jZXN0b3IgY29tcG9uZW50IChpZiB0aGVyZSBpcyBvbmUpIGFuZCByZWdpc3RlclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY29tcG9uZW50IGFzIG9uZSBvZiB0aGUgYWN0aXZlbHkgbG9hZGluZyBjaGlsZCBjb21wb25lbnRzIGZvciBpdHMgYW5jZXN0b3JcbiAgICAgICAgICAgICAgICBsZXQgYW5jZXN0b3JDb21wb25lbnQgPSBlbG07XG4gICAgICAgICAgICAgICAgd2hpbGUgKChhbmNlc3RvckNvbXBvbmVudCA9IGFuY2VzdG9yQ29tcG9uZW50LnBhcmVudE5vZGUgfHwgYW5jZXN0b3JDb21wb25lbnQuaG9zdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpbWIgdXAgdGhlIGFuY2VzdG9ycyBsb29raW5nIGZvciB0aGUgZmlyc3RcbiAgICAgICAgICAgICAgICAgICAgLy8gY29tcG9uZW50IHRoYXQgaGFzbid0IGZpbmlzaGVkIGl0cyBsaWZlY3ljbGUgdXBkYXRlIHlldFxuICAgICAgICAgICAgICAgICAgICBpZiAoKEJVSUxELmh5ZHJhdGVDbGllbnRTaWRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNlc3RvckNvbXBvbmVudC5ub2RlVHlwZSA9PT0gMSAvKiBOT0RFX1RZUEUuRWxlbWVudE5vZGUgKi8gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuY2VzdG9yQ29tcG9uZW50Lmhhc0F0dHJpYnV0ZSgncy1pZCcpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNlc3RvckNvbXBvbmVudFsncy1wJ10pIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmNlc3RvckNvbXBvbmVudFsncy1wJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGZvdW5kIHRoaXMgY29tcG9uZW50cyBmaXJzdCBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhpcyBjb21wb25lbnQncyBhbmNlc3RvciBjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaFRvQW5jZXN0b3IoaG9zdFJlZiwgKGhvc3RSZWYuJGFuY2VzdG9yQ29tcG9uZW50JCA9IGFuY2VzdG9yQ29tcG9uZW50KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIExhenkgcHJvcGVydGllc1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL2Z1bmRhbWVudGFscy93ZWItY29tcG9uZW50cy9iZXN0LXByYWN0aWNlcyNsYXp5LXByb3BlcnRpZXNcbiAgICAgICAgICAgIGlmIChCVUlMRC5wcm9wICYmICFCVUlMRC5oeWRyYXRlU2VydmVyU2lkZSAmJiBjbXBNZXRhLiRtZW1iZXJzJCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNtcE1ldGEuJG1lbWJlcnMkKS5tYXAoKFttZW1iZXJOYW1lLCBbbWVtYmVyRmxhZ3NdXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVtYmVyRmxhZ3MgJiAzMSAvKiBNRU1CRVJfRkxBR1MuUHJvcCAqLyAmJiBlbG0uaGFzT3duUHJvcGVydHkobWVtYmVyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWxtW21lbWJlck5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGVsbVttZW1iZXJOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsbVttZW1iZXJOYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuaW5pdGlhbGl6ZU5leHRUaWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29ubmVjdGVkQ2FsbGJhY2ssIHRhc2tRdWV1ZSwgaW5pdGlhbExvYWRcbiAgICAgICAgICAgICAgICAvLyBhbmd1bGFyIHNldHMgYXR0cmlidXRlIEFGVEVSIGNvbm5lY3RDYWxsYmFja1xuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE4OTA5XG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTk5NDBcbiAgICAgICAgICAgICAgICBuZXh0VGljaygoKSA9PiBpbml0aWFsaXplQ29tcG9uZW50KGVsbSwgaG9zdFJlZiwgY21wTWV0YSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZUNvbXBvbmVudChlbG0sIGhvc3RSZWYsIGNtcE1ldGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gbm90IHRoZSBmaXJzdCB0aW1lIHRoaXMgaGFzIGNvbm5lY3RlZFxuICAgICAgICAgICAgLy8gcmVhdHRhY2ggYW55IGV2ZW50IGxpc3RlbmVycyB0byB0aGUgaG9zdFxuICAgICAgICAgICAgLy8gc2luY2UgdGhleSB3b3VsZCBoYXZlIGJlZW4gcmVtb3ZlZCB3aGVuIGRpc2Nvbm5lY3RlZFxuICAgICAgICAgICAgYWRkSG9zdEV2ZW50TGlzdGVuZXJzKGVsbSwgaG9zdFJlZiwgY21wTWV0YS4kbGlzdGVuZXJzJCwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gZmlyZSBvZmYgY29ubmVjdGVkQ2FsbGJhY2soKSBvbiBjb21wb25lbnQgaW5zdGFuY2VcbiAgICAgICAgICAgIGZpcmVDb25uZWN0ZWRDYWxsYmFjayhob3N0UmVmLiRsYXp5SW5zdGFuY2UkKTtcbiAgICAgICAgfVxuICAgICAgICBlbmRDb25uZWN0ZWQoKTtcbiAgICB9XG59O1xuY29uc3Qgc2V0Q29udGVudFJlZmVyZW5jZSA9IChlbG0pID0+IHtcbiAgICAvLyBvbmx5IHJlcXVpcmVkIHdoZW4gd2UncmUgTk9UIHVzaW5nIG5hdGl2ZSBzaGFkb3cgZG9tIChzbG90KVxuICAgIC8vIG9yIHRoaXMgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgbmF0aXZlIHNoYWRvdyBkb21cbiAgICAvLyBhbmQgdGhpcyBob3N0IGVsZW1lbnQgd2FzIE5PVCBjcmVhdGVkIHdpdGggU1NSXG4gICAgLy8gbGV0J3MgcGljayBvdXQgdGhlIGlubmVyIGNvbnRlbnQgZm9yIHNsb3QgcHJvamVjdGlvblxuICAgIC8vIGNyZWF0ZSBhIG5vZGUgdG8gcmVwcmVzZW50IHdoZXJlIHRoZSBvcmlnaW5hbFxuICAgIC8vIGNvbnRlbnQgd2FzIGZpcnN0IHBsYWNlZCwgd2hpY2ggaXMgdXNlZnVsIGxhdGVyIG9uXG4gICAgY29uc3QgY29udGVudFJlZkVsbSA9IChlbG1bJ3MtY3InXSA9IGRvYy5jcmVhdGVDb21tZW50KEJVSUxELmlzRGVidWcgPyBgY29udGVudC1yZWYgKGhvc3Q9JHtlbG0ubG9jYWxOYW1lfSlgIDogJycpKTtcbiAgICBjb250ZW50UmVmRWxtWydzLWNuJ10gPSB0cnVlO1xuICAgIGVsbS5pbnNlcnRCZWZvcmUoY29udGVudFJlZkVsbSwgZWxtLmZpcnN0Q2hpbGQpO1xufTtcbmNvbnN0IGRpc2Nvbm5lY3RlZENhbGxiYWNrID0gKGVsbSkgPT4ge1xuICAgIGlmICgocGx0LiRmbGFncyQgJiAxIC8qIFBMQVRGT1JNX0ZMQUdTLmlzVG1wRGlzY29ubmVjdGVkICovKSA9PT0gMCkge1xuICAgICAgICBjb25zdCBob3N0UmVmID0gZ2V0SG9zdFJlZihlbG0pO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IEJVSUxELmxhenlMb2FkID8gaG9zdFJlZi4kbGF6eUluc3RhbmNlJCA6IGVsbTtcbiAgICAgICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lcikge1xuICAgICAgICAgICAgaWYgKGhvc3RSZWYuJHJtTGlzdGVuZXJzJCkge1xuICAgICAgICAgICAgICAgIGhvc3RSZWYuJHJtTGlzdGVuZXJzJC5tYXAoKHJtTGlzdGVuZXIpID0+IHJtTGlzdGVuZXIoKSk7XG4gICAgICAgICAgICAgICAgaG9zdFJlZi4kcm1MaXN0ZW5lcnMkID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNsZWFyIENTUyB2YXItc2hpbSB0cmFja2luZ1xuICAgICAgICBpZiAoQlVJTEQuY3NzVmFyU2hpbSAmJiBwbHQuJGNzc1NoaW0kKSB7XG4gICAgICAgICAgICBwbHQuJGNzc1NoaW0kLnJlbW92ZUhvc3QoZWxtKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQubGF6eUxvYWQgJiYgQlVJTEQuZGlzY29ubmVjdGVkQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHNhZmVDYWxsKGluc3RhbmNlLCAnZGlzY29ubmVjdGVkQ2FsbGJhY2snKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoQlVJTEQuY21wRGlkVW5sb2FkKSB7XG4gICAgICAgICAgICBzYWZlQ2FsbChpbnN0YW5jZSwgJ2NvbXBvbmVudERpZFVubG9hZCcpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGRlZmluZUN1c3RvbUVsZW1lbnQgPSAoQ3N0ciwgY29tcGFjdE1ldGEpID0+IHtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoY29tcGFjdE1ldGFbMV0sIHByb3h5Q3VzdG9tRWxlbWVudChDc3RyLCBjb21wYWN0TWV0YSkpO1xufTtcbmNvbnN0IHByb3h5Q3VzdG9tRWxlbWVudCA9IChDc3RyLCBjb21wYWN0TWV0YSkgPT4ge1xuICAgIGNvbnN0IGNtcE1ldGEgPSB7XG4gICAgICAgICRmbGFncyQ6IGNvbXBhY3RNZXRhWzBdLFxuICAgICAgICAkdGFnTmFtZSQ6IGNvbXBhY3RNZXRhWzFdLFxuICAgIH07XG4gICAgaWYgKEJVSUxELm1lbWJlcikge1xuICAgICAgICBjbXBNZXRhLiRtZW1iZXJzJCA9IGNvbXBhY3RNZXRhWzJdO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyKSB7XG4gICAgICAgIGNtcE1ldGEuJGxpc3RlbmVycyQgPSBjb21wYWN0TWV0YVszXTtcbiAgICB9XG4gICAgaWYgKEJVSUxELndhdGNoQ2FsbGJhY2spIHtcbiAgICAgICAgY21wTWV0YS4kd2F0Y2hlcnMkID0gQ3N0ci4kd2F0Y2hlcnMkO1xuICAgIH1cbiAgICBpZiAoQlVJTEQucmVmbGVjdCkge1xuICAgICAgICBjbXBNZXRhLiRhdHRyc1RvUmVmbGVjdCQgPSBbXTtcbiAgICB9XG4gICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiAhc3VwcG9ydHNTaGFkb3cgJiYgY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBDTVBfRkxBR1Muc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICBjbXBNZXRhLiRmbGFncyQgfD0gOCAvKiBDTVBfRkxBR1MubmVlZHNTaGFkb3dEb21TaGltICovO1xuICAgIH1cbiAgICBjb25zdCBvcmlnaW5hbENvbm5lY3RlZENhbGxiYWNrID0gQ3N0ci5wcm90b3R5cGUuY29ubmVjdGVkQ2FsbGJhY2s7XG4gICAgY29uc3Qgb3JpZ2luYWxEaXNjb25uZWN0ZWRDYWxsYmFjayA9IENzdHIucHJvdG90eXBlLmRpc2Nvbm5lY3RlZENhbGxiYWNrO1xuICAgIE9iamVjdC5hc3NpZ24oQ3N0ci5wcm90b3R5cGUsIHtcbiAgICAgICAgX19yZWdpc3Rlckhvc3QoKSB7XG4gICAgICAgICAgICByZWdpc3Rlckhvc3QodGhpcywgY21wTWV0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2sodGhpcyk7XG4gICAgICAgICAgICBpZiAoQlVJTEQuY29ubmVjdGVkQ2FsbGJhY2sgJiYgb3JpZ2luYWxDb25uZWN0ZWRDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29ubmVjdGVkQ2FsbGJhY2suY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICBkaXNjb25uZWN0ZWRDYWxsYmFjayh0aGlzKTtcbiAgICAgICAgICAgIGlmIChCVUlMRC5kaXNjb25uZWN0ZWRDYWxsYmFjayAmJiBvcmlnaW5hbERpc2Nvbm5lY3RlZENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxEaXNjb25uZWN0ZWRDYWxsYmFjay5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBfX2F0dGFjaFNoYWRvdygpIHtcbiAgICAgICAgICAgIGlmIChzdXBwb3J0c1NoYWRvdykge1xuICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zaGFkb3dEZWxlZ2F0ZXNGb2N1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlOiAnb3BlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2F0ZXNGb2N1czogISEoY21wTWV0YS4kZmxhZ3MkICYgMTYgLyogQ01QX0ZMQUdTLnNoYWRvd0RlbGVnYXRlc0ZvY3VzICovKSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoYWRvd1Jvb3QgPSB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIENzdHIuaXMgPSBjbXBNZXRhLiR0YWdOYW1lJDtcbiAgICByZXR1cm4gcHJveHlDb21wb25lbnQoQ3N0ciwgY21wTWV0YSwgMSAvKiBQUk9YWV9GTEFHUy5pc0VsZW1lbnRDb25zdHJ1Y3RvciAqLyB8IDIgLyogUFJPWFlfRkxBR1MucHJveHlTdGF0ZSAqLyk7XG59O1xuY29uc3QgZm9yY2VNb2RlVXBkYXRlID0gKGVsbSkgPT4ge1xuICAgIGlmIChCVUlMRC5zdHlsZSAmJiBCVUlMRC5tb2RlICYmICFCVUlMRC5sYXp5TG9hZCkge1xuICAgICAgICBjb25zdCBtb2RlID0gY29tcHV0ZU1vZGUoZWxtKTtcbiAgICAgICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoZWxtKTtcbiAgICAgICAgaWYgKGhvc3RSZWYuJG1vZGVOYW1lJCAhPT0gbW9kZSkge1xuICAgICAgICAgICAgY29uc3QgY21wTWV0YSA9IGhvc3RSZWYuJGNtcE1ldGEkO1xuICAgICAgICAgICAgY29uc3Qgb2xkU2NvcGVJZCA9IGVsbVsncy1zYyddO1xuICAgICAgICAgICAgY29uc3Qgc2NvcGVJZCA9IGdldFNjb3BlSWQoY21wTWV0YSwgbW9kZSk7XG4gICAgICAgICAgICBjb25zdCBzdHlsZSA9IGVsbS5jb25zdHJ1Y3Rvci5zdHlsZVttb2RlXTtcbiAgICAgICAgICAgIGNvbnN0IGZsYWdzID0gY21wTWV0YS4kZmxhZ3MkO1xuICAgICAgICAgICAgaWYgKHN0eWxlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdHlsZXMuaGFzKHNjb3BlSWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyU3R5bGUoc2NvcGVJZCwgc3R5bGUsICEhKGZsYWdzICYgMSAvKiBDTVBfRkxBR1Muc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob3N0UmVmLiRtb2RlTmFtZSQgPSBtb2RlO1xuICAgICAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKG9sZFNjb3BlSWQgKyAnLWgnLCBvbGRTY29wZUlkICsgJy1zJyk7XG4gICAgICAgICAgICAgICAgYXR0YWNoU3R5bGVzKGhvc3RSZWYpO1xuICAgICAgICAgICAgICAgIGZvcmNlVXBkYXRlKGVsbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgcGF0Y2hDbG9uZU5vZGUgPSAoSG9zdEVsZW1lbnRQcm90b3R5cGUpID0+IHtcbiAgICBjb25zdCBvcmdDbG9uZU5vZGUgPSBIb3N0RWxlbWVudFByb3RvdHlwZS5jbG9uZU5vZGU7XG4gICAgSG9zdEVsZW1lbnRQcm90b3R5cGUuY2xvbmVOb2RlID0gZnVuY3Rpb24gKGRlZXApIHtcbiAgICAgICAgY29uc3Qgc3JjTm9kZSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGlzU2hhZG93RG9tID0gQlVJTEQuc2hhZG93RG9tID8gc3JjTm9kZS5zaGFkb3dSb290ICYmIHN1cHBvcnRzU2hhZG93IDogZmFsc2U7XG4gICAgICAgIGNvbnN0IGNsb25lZE5vZGUgPSBvcmdDbG9uZU5vZGUuY2FsbChzcmNOb2RlLCBpc1NoYWRvd0RvbSA/IGRlZXAgOiBmYWxzZSk7XG4gICAgICAgIGlmIChCVUlMRC5zbG90ICYmICFpc1NoYWRvd0RvbSAmJiBkZWVwKSB7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICBsZXQgc2xvdHRlZCwgbm9uU3RlbmNpbE5vZGU7XG4gICAgICAgICAgICBjb25zdCBzdGVuY2lsUHJpdmF0ZXMgPSBbXG4gICAgICAgICAgICAgICAgJ3MtaWQnLFxuICAgICAgICAgICAgICAgICdzLWNyJyxcbiAgICAgICAgICAgICAgICAncy1scicsXG4gICAgICAgICAgICAgICAgJ3MtcmMnLFxuICAgICAgICAgICAgICAgICdzLXNjJyxcbiAgICAgICAgICAgICAgICAncy1wJyxcbiAgICAgICAgICAgICAgICAncy1jbicsXG4gICAgICAgICAgICAgICAgJ3Mtc3InLFxuICAgICAgICAgICAgICAgICdzLXNuJyxcbiAgICAgICAgICAgICAgICAncy1obicsXG4gICAgICAgICAgICAgICAgJ3Mtb2wnLFxuICAgICAgICAgICAgICAgICdzLW5yJyxcbiAgICAgICAgICAgICAgICAncy1zaScsXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgZm9yICg7IGkgPCBzcmNOb2RlLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzbG90dGVkID0gc3JjTm9kZS5jaGlsZE5vZGVzW2ldWydzLW5yJ107XG4gICAgICAgICAgICAgICAgbm9uU3RlbmNpbE5vZGUgPSBzdGVuY2lsUHJpdmF0ZXMuZXZlcnkoKHByaXZhdGVGaWVsZCkgPT4gIXNyY05vZGUuY2hpbGROb2Rlc1tpXVtwcml2YXRlRmllbGRdKTtcbiAgICAgICAgICAgICAgICBpZiAoc2xvdHRlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoQlVJTEQuYXBwZW5kQ2hpbGRTbG90Rml4ICYmIGNsb25lZE5vZGUuX19hcHBlbmRDaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkTm9kZS5fX2FwcGVuZENoaWxkKHNsb3R0ZWQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb25lZE5vZGUuYXBwZW5kQ2hpbGQoc2xvdHRlZC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChub25TdGVuY2lsTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBjbG9uZWROb2RlLmFwcGVuZENoaWxkKHNyY05vZGUuY2hpbGROb2Rlc1tpXS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xvbmVkTm9kZTtcbiAgICB9O1xufTtcbmNvbnN0IHBhdGNoU2xvdEFwcGVuZENoaWxkID0gKEhvc3RFbGVtZW50UHJvdG90eXBlKSA9PiB7XG4gICAgSG9zdEVsZW1lbnRQcm90b3R5cGUuX19hcHBlbmRDaGlsZCA9IEhvc3RFbGVtZW50UHJvdG90eXBlLmFwcGVuZENoaWxkO1xuICAgIEhvc3RFbGVtZW50UHJvdG90eXBlLmFwcGVuZENoaWxkID0gZnVuY3Rpb24gKG5ld0NoaWxkKSB7XG4gICAgICAgIGNvbnN0IHNsb3ROYW1lID0gKG5ld0NoaWxkWydzLXNuJ10gPSBnZXRTbG90TmFtZShuZXdDaGlsZCkpO1xuICAgICAgICBjb25zdCBzbG90Tm9kZSA9IGdldEhvc3RTbG90Tm9kZSh0aGlzLmNoaWxkTm9kZXMsIHNsb3ROYW1lKTtcbiAgICAgICAgaWYgKHNsb3ROb2RlKSB7XG4gICAgICAgICAgICBjb25zdCBzbG90Q2hpbGROb2RlcyA9IGdldEhvc3RTbG90Q2hpbGROb2RlcyhzbG90Tm9kZSwgc2xvdE5hbWUpO1xuICAgICAgICAgICAgY29uc3QgYXBwZW5kQWZ0ZXIgPSBzbG90Q2hpbGROb2Rlc1tzbG90Q2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHJldHVybiBhcHBlbmRBZnRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdDaGlsZCwgYXBwZW5kQWZ0ZXIubmV4dFNpYmxpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9fYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgIH07XG59O1xuLyoqXG4gKiBQYXRjaGVzIHRoZSB0ZXh0IGNvbnRlbnQgb2YgYW4gdW5uYW1lZCBzbG90dGVkIG5vZGUgaW5zaWRlIGEgc2NvcGVkIGNvbXBvbmVudFxuICogQHBhcmFtIGhvc3RFbGVtZW50UHJvdG90eXBlIHRoZSBgRWxlbWVudGAgdG8gYmUgcGF0Y2hlZFxuICogQHBhcmFtIGNtcE1ldGEgY29tcG9uZW50IHJ1bnRpbWUgbWV0YWRhdGEgdXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgcGF0Y2hlZCBvciBub3RcbiAqL1xuY29uc3QgcGF0Y2hUZXh0Q29udGVudCA9IChob3N0RWxlbWVudFByb3RvdHlwZSwgY21wTWV0YSkgPT4ge1xuICAgIGlmIChCVUlMRC5zY29wZWQgJiYgY21wTWV0YS4kZmxhZ3MkICYgMiAvKiBDTVBfRkxBR1Muc2NvcGVkQ3NzRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICBjb25zdCBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihOb2RlLnByb3RvdHlwZSwgJ3RleHRDb250ZW50Jyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShob3N0RWxlbWVudFByb3RvdHlwZSwgJ19fdGV4dENvbnRlbnQnLCBkZXNjcmlwdG9yKTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGhvc3RFbGVtZW50UHJvdG90eXBlLCAndGV4dENvbnRlbnQnLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgJ2RlZmF1bHQgc2xvdCcsIHdoaWNoIHdvdWxkIGJlIHRoZSBmaXJzdCBzbG90IGluIGEgc2hhZG93IHRyZWUgKGlmIHdlIHdlcmUgdXNpbmcgb25lKSwgd2hvc2UgbmFtZSBpc1xuICAgICAgICAgICAgICAgIC8vIHRoZSBlbXB0eSBzdHJpbmdcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90Tm9kZSA9IGdldEhvc3RTbG90Tm9kZSh0aGlzLmNoaWxkTm9kZXMsICcnKTtcbiAgICAgICAgICAgICAgICAvLyB3aGVuIGEgc2xvdCBub2RlIGlzIGZvdW5kLCB0aGUgdGV4dENvbnRlbnQgX21heV8gYmUgZm91bmQgaW4gdGhlIG5leHQgc2libGluZyAodGV4dCkgbm9kZSwgZGVwZW5kaW5nIG9uIGhvd1xuICAgICAgICAgICAgICAgIC8vIG5vZGVzIHdlcmUgcmVvcmRlcmVkIGR1cmluZyB0aGUgdmRvbSByZW5kZXIuIGZpcnN0IHRyeSB0byBnZXQgdGhlIHRleHQgY29udGVudCBmcm9tIHRoZSBzaWJsaW5nLlxuICAgICAgICAgICAgICAgIGlmICgoKF9hID0gc2xvdE5vZGUgPT09IG51bGwgfHwgc2xvdE5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHNsb3ROb2RlLm5leHRTaWJsaW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eubm9kZVR5cGUpID09PSAzIC8qIE5PREVfVFlQRVMuVEVYVF9OT0RFICovKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbG90Tm9kZS5uZXh0U2libGluZy50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc2xvdE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNsb3ROb2RlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGJhY2sgdG8gdGhlIG9yaWdpbmFsIGltcGxlbWVudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9fdGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlICdkZWZhdWx0IHNsb3QnLCB3aGljaCB3b3VsZCBiZSB0aGUgZmlyc3Qgc2xvdCBpbiBhIHNoYWRvdyB0cmVlIChpZiB3ZSB3ZXJlIHVzaW5nIG9uZSksIHdob3NlIG5hbWUgaXNcbiAgICAgICAgICAgICAgICAvLyB0aGUgZW1wdHkgc3RyaW5nXG4gICAgICAgICAgICAgICAgY29uc3Qgc2xvdE5vZGUgPSBnZXRIb3N0U2xvdE5vZGUodGhpcy5jaGlsZE5vZGVzLCAnJyk7XG4gICAgICAgICAgICAgICAgLy8gd2hlbiBhIHNsb3Qgbm9kZSBpcyBmb3VuZCwgdGhlIHRleHRDb250ZW50IF9tYXlfIG5lZWQgdG8gYmUgcGxhY2VkIGluIHRoZSBuZXh0IHNpYmxpbmcgKHRleHQpIG5vZGUsXG4gICAgICAgICAgICAgICAgLy8gZGVwZW5kaW5nIG9uIGhvdyBub2RlcyB3ZXJlIHJlb3JkZXJlZCBkdXJpbmcgdGhlIHZkb20gcmVuZGVyLiBmaXJzdCB0cnkgdG8gc2V0IHRoZSB0ZXh0IGNvbnRlbnQgb24gdGhlXG4gICAgICAgICAgICAgICAgLy8gc2libGluZy5cbiAgICAgICAgICAgICAgICBpZiAoKChfYSA9IHNsb3ROb2RlID09PSBudWxsIHx8IHNsb3ROb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzbG90Tm9kZS5uZXh0U2libGluZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5vZGVUeXBlKSA9PT0gMyAvKiBOT0RFX1RZUEVTLlRFWFRfTk9ERSAqLykge1xuICAgICAgICAgICAgICAgICAgICBzbG90Tm9kZS5uZXh0U2libGluZy50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzbG90Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBzbG90Tm9kZS50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgY291bGRuJ3QgZmluZCBhIHNsb3QsIGJ1dCB0aGF0IGRvZXNuJ3QgbWVhbiB0aGF0IHRoZXJlIGlzbid0IG9uZS4gaWYgdGhpcyBjaGVjayByYW4gYmVmb3JlIHRoZSBET01cbiAgICAgICAgICAgICAgICAgICAgLy8gbG9hZGVkLCB3ZSBjb3VsZCBoYXZlIG1pc3NlZCBpdC4gY2hlY2sgZm9yIGEgY29udGVudCByZWZlcmVuY2UgZWxlbWVudCBvbiB0aGUgc2NvcGVkIGNvbXBvbmVudCBhbmQgaW5zZXJ0XG4gICAgICAgICAgICAgICAgICAgIC8vIGl0IHRoZXJlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX190ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50UmVmRWxtID0gdGhpc1sncy1jciddO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudFJlZkVsbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnNlcnRCZWZvcmUoY29udGVudFJlZkVsbSwgdGhpcy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBwYXRjaENoaWxkU2xvdE5vZGVzID0gKGVsbSwgY21wTWV0YSkgPT4ge1xuICAgIGNsYXNzIEZha2VOb2RlTGlzdCBleHRlbmRzIEFycmF5IHtcbiAgICAgICAgaXRlbShuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tuXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoY21wTWV0YS4kZmxhZ3MkICYgOCAvKiBDTVBfRkxBR1MubmVlZHNTaGFkb3dEb21TaGltICovKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXNGbiA9IGVsbS5fX2xvb2t1cEdldHRlcl9fKCdjaGlsZE5vZGVzJyk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbG0sICdjaGlsZHJlbicsIHtcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcCgobikgPT4gbi5ub2RlVHlwZSA9PT0gMSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsbSwgJ2NoaWxkRWxlbWVudENvdW50Jywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbG0uY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbG0sICdjaGlsZE5vZGVzJywge1xuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBjaGlsZE5vZGVzRm4uY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICBpZiAoKHBsdC4kZmxhZ3MkICYgMSAvKiBQTEFURk9STV9GTEFHUy5pc1RtcERpc2Nvbm5lY3RlZCAqLykgPT09IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgZ2V0SG9zdFJlZih0aGlzKS4kZmxhZ3MkICYgMiAvKiBIT1NUX0ZMQUdTLmhhc1JlbmRlcmVkICovKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBGYWtlTm9kZUxpc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzbG90ID0gY2hpbGROb2Rlc1tpXVsncy1uciddO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChzbG90KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gRmFrZU5vZGVMaXN0LmZyb20oY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgZ2V0U2xvdE5hbWUgPSAobm9kZSkgPT4gbm9kZVsncy1zbiddIHx8IChub2RlLm5vZGVUeXBlID09PSAxICYmIG5vZGUuZ2V0QXR0cmlidXRlKCdzbG90JykpIHx8ICcnO1xuLyoqXG4gKiBSZWN1cnNpdmVseSBzZWFyY2hlcyBhIHNlcmllcyBvZiBjaGlsZCBub2RlcyBmb3IgYSBzbG90IHdpdGggdGhlIHByb3ZpZGVkIG5hbWUuXG4gKiBAcGFyYW0gY2hpbGROb2RlcyB0aGUgbm9kZXMgdG8gc2VhcmNoIGZvciBhIHNsb3Qgd2l0aCBhIHNwZWNpZmljIG5hbWUuXG4gKiBAcGFyYW0gc2xvdE5hbWUgdGhlIG5hbWUgb2YgdGhlIHNsb3QgdG8gbWF0Y2ggb24uXG4gKiBAcmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgc2xvdCBub2RlIHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgbmFtZSwgYG51bGxgIG90aGVyd2lzZVxuICovXG5jb25zdCBnZXRIb3N0U2xvdE5vZGUgPSAoY2hpbGROb2Rlcywgc2xvdE5hbWUpID0+IHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGNoaWxkTm9kZTtcbiAgICBmb3IgKDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2hpbGROb2RlID0gY2hpbGROb2Rlc1tpXTtcbiAgICAgICAgaWYgKGNoaWxkTm9kZVsncy1zciddICYmIGNoaWxkTm9kZVsncy1zbiddID09PSBzbG90TmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZE5vZGUgPSBnZXRIb3N0U2xvdE5vZGUoY2hpbGROb2RlLmNoaWxkTm9kZXMsIHNsb3ROYW1lKTtcbiAgICAgICAgaWYgKGNoaWxkTm9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkTm9kZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5jb25zdCBnZXRIb3N0U2xvdENoaWxkTm9kZXMgPSAobiwgc2xvdE5hbWUpID0+IHtcbiAgICBjb25zdCBjaGlsZE5vZGVzID0gW25dO1xuICAgIHdoaWxlICgobiA9IG4ubmV4dFNpYmxpbmcpICYmIG5bJ3Mtc24nXSA9PT0gc2xvdE5hbWUpIHtcbiAgICAgICAgY2hpbGROb2Rlcy5wdXNoKG4pO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGROb2Rlcztcbn07XG5jb25zdCBobXJTdGFydCA9IChlbG0sIGNtcE1ldGEsIGhtclZlcnNpb25JZCkgPT4ge1xuICAgIC8vIMKvXFxfKOODhClfL8KvXG4gICAgY29uc3QgaG9zdFJlZiA9IGdldEhvc3RSZWYoZWxtKTtcbiAgICAvLyByZXNldCBzdGF0ZSBmbGFncyB0byBvbmx5IGhhdmUgYmVlbiBjb25uZWN0ZWRcbiAgICBob3N0UmVmLiRmbGFncyQgPSAxIC8qIEhPU1RfRkxBR1MuaGFzQ29ubmVjdGVkICovO1xuICAgIC8vIFRPRE9cbiAgICAvLyBkZXRhdGNoIGFueSBldmVudCBsaXN0ZW5lcnMgdGhhdCBtYXkgaGF2ZSBiZWVuIGFkZGVkXG4gICAgLy8gYmVjYXVzZSB3ZSdyZSBub3QgcGFzc2luZyBhbiBleGFjdCBldmVudCBuYW1lIGl0J2xsXG4gICAgLy8gcmVtb3ZlIGFsbCBvZiB0aGlzIGVsZW1lbnQncyBldmVudCwgd2hpY2ggaXMgZ29vZFxuICAgIC8vIGNyZWF0ZSBhIGNhbGxiYWNrIGZvciB3aGVuIHRoaXMgY29tcG9uZW50IGZpbmlzaGVzIGhtclxuICAgIGVsbVsncy1obXItbG9hZCddID0gKCkgPT4ge1xuICAgICAgICAvLyBmaW5pc2hlZCBobXIgZm9yIHRoaXMgZWxlbWVudFxuICAgICAgICBkZWxldGUgZWxtWydzLWhtci1sb2FkJ107XG4gICAgfTtcbiAgICAvLyByZS1pbml0aWFsaXplIHRoZSBjb21wb25lbnRcbiAgICBpbml0aWFsaXplQ29tcG9uZW50KGVsbSwgaG9zdFJlZiwgY21wTWV0YSwgaG1yVmVyc2lvbklkKTtcbn07XG5jb25zdCBib290c3RyYXBMYXp5ID0gKGxhenlCdW5kbGVzLCBvcHRpb25zID0ge30pID0+IHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKEJVSUxELnByb2ZpbGUgJiYgcGVyZm9ybWFuY2UubWFyaykge1xuICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdzdDphcHA6c3RhcnQnKTtcbiAgICB9XG4gICAgaW5zdGFsbERldlRvb2xzKCk7XG4gICAgY29uc3QgZW5kQm9vdHN0cmFwID0gY3JlYXRlVGltZSgnYm9vdHN0cmFwTGF6eScpO1xuICAgIGNvbnN0IGNtcFRhZ3MgPSBbXTtcbiAgICBjb25zdCBleGNsdWRlID0gb3B0aW9ucy5leGNsdWRlIHx8IFtdO1xuICAgIGNvbnN0IGN1c3RvbUVsZW1lbnRzID0gd2luLmN1c3RvbUVsZW1lbnRzO1xuICAgIGNvbnN0IGhlYWQgPSBkb2MuaGVhZDtcbiAgICBjb25zdCBtZXRhQ2hhcnNldCA9IC8qQF9fUFVSRV9fKi8gaGVhZC5xdWVyeVNlbGVjdG9yKCdtZXRhW2NoYXJzZXRdJyk7XG4gICAgY29uc3QgdmlzaWJpbGl0eVN0eWxlID0gLypAX19QVVJFX18qLyBkb2MuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBjb25zdCBkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcyA9IFtdO1xuICAgIGNvbnN0IHN0eWxlcyA9IC8qQF9fUFVSRV9fKi8gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoYFske0hZRFJBVEVEX1NUWUxFX0lEfV1gKTtcbiAgICBsZXQgYXBwTG9hZEZhbGxiYWNrO1xuICAgIGxldCBpc0Jvb3RzdHJhcHBpbmcgPSB0cnVlO1xuICAgIGxldCBpID0gMDtcbiAgICBPYmplY3QuYXNzaWduKHBsdCwgb3B0aW9ucyk7XG4gICAgcGx0LiRyZXNvdXJjZXNVcmwkID0gbmV3IFVSTChvcHRpb25zLnJlc291cmNlc1VybCB8fCAnLi8nLCBkb2MuYmFzZVVSSSkuaHJlZjtcbiAgICBpZiAoQlVJTEQuYXN5bmNRdWV1ZSkge1xuICAgICAgICBpZiAob3B0aW9ucy5zeW5jUXVldWUpIHtcbiAgICAgICAgICAgIHBsdC4kZmxhZ3MkIHw9IDQgLyogUExBVEZPUk1fRkxBR1MucXVldWVTeW5jICovO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChCVUlMRC5oeWRyYXRlQ2xpZW50U2lkZSkge1xuICAgICAgICAvLyBJZiB0aGUgYXBwIGlzIGFscmVhZHkgaHlkcmF0ZWQgdGhlcmUgaXMgbm90IHBvaW50IHRvIGRpc2FibGUgdGhlXG4gICAgICAgIC8vIGFzeW5jIHF1ZXVlLiBUaGlzIHdpbGwgaW1wcm92ZSB0aGUgZmlyc3QgaW5wdXQgZGVsYXlcbiAgICAgICAgcGx0LiRmbGFncyQgfD0gMiAvKiBQTEFURk9STV9GTEFHUy5hcHBMb2FkZWQgKi87XG4gICAgfVxuICAgIGlmIChCVUlMRC5oeWRyYXRlQ2xpZW50U2lkZSAmJiBCVUlMRC5zaGFkb3dEb20pIHtcbiAgICAgICAgZm9yICg7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlZ2lzdGVyU3R5bGUoc3R5bGVzW2ldLmdldEF0dHJpYnV0ZShIWURSQVRFRF9TVFlMRV9JRCksIGNvbnZlcnRTY29wZWRUb1NoYWRvdyhzdHlsZXNbaV0uaW5uZXJIVE1MKSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGF6eUJ1bmRsZXMubWFwKChsYXp5QnVuZGxlKSA9PiB7XG4gICAgICAgIGxhenlCdW5kbGVbMV0ubWFwKChjb21wYWN0TWV0YSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY21wTWV0YSA9IHtcbiAgICAgICAgICAgICAgICAkZmxhZ3MkOiBjb21wYWN0TWV0YVswXSxcbiAgICAgICAgICAgICAgICAkdGFnTmFtZSQ6IGNvbXBhY3RNZXRhWzFdLFxuICAgICAgICAgICAgICAgICRtZW1iZXJzJDogY29tcGFjdE1ldGFbMl0sXG4gICAgICAgICAgICAgICAgJGxpc3RlbmVycyQ6IGNvbXBhY3RNZXRhWzNdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChCVUlMRC5tZW1iZXIpIHtcbiAgICAgICAgICAgICAgICBjbXBNZXRhLiRtZW1iZXJzJCA9IGNvbXBhY3RNZXRhWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGNtcE1ldGEuJGxpc3RlbmVycyQgPSBjb21wYWN0TWV0YVszXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5yZWZsZWN0KSB7XG4gICAgICAgICAgICAgICAgY21wTWV0YS4kYXR0cnNUb1JlZmxlY3QkID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQud2F0Y2hDYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNtcE1ldGEuJHdhdGNoZXJzJCA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELnNoYWRvd0RvbSAmJiAhc3VwcG9ydHNTaGFkb3cgJiYgY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBDTVBfRkxBR1Muc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAgICAgICAgIGNtcE1ldGEuJGZsYWdzJCB8PSA4IC8qIENNUF9GTEFHUy5uZWVkc1NoYWRvd0RvbVNoaW0gKi87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0YWdOYW1lID0gQlVJTEQudHJhbnNmb3JtVGFnTmFtZSAmJiBvcHRpb25zLnRyYW5zZm9ybVRhZ05hbWVcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMudHJhbnNmb3JtVGFnTmFtZShjbXBNZXRhLiR0YWdOYW1lJClcbiAgICAgICAgICAgICAgICA6IGNtcE1ldGEuJHRhZ05hbWUkO1xuICAgICAgICAgICAgY29uc3QgSG9zdEVsZW1lbnQgPSBjbGFzcyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICAgICAgICAgICAgICAvLyBTdGVuY2lsTGF6eUhvc3RcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3RvcihzZWxmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgc3VwZXIoc2VsZik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICByZWdpc3Rlckhvc3Qoc2VsZiwgY21wTWV0YSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChCVUlMRC5zaGFkb3dEb20gJiYgY21wTWV0YS4kZmxhZ3MkICYgMSAvKiBDTVBfRkxBR1Muc2hhZG93RG9tRW5jYXBzdWxhdGlvbiAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyBjb21wb25lbnQgaXMgdXNpbmcgc2hhZG93IGRvbVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHRoaXMgYnJvd3NlciBzdXBwb3J0cyBzaGFkb3cgZG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIHJlYWQtb25seSBwcm9wZXJ0eSBcInNoYWRvd1Jvb3RcIiB0byB0aGUgaG9zdCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGRpbmcgdGhlIHNoYWRvdyByb290IGJ1aWxkIGNvbmRpdGlvbmFscyB0byBtaW5pbWl6ZSBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VwcG9ydHNTaGFkb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQlVJTEQuc2hhZG93RGVsZWdhdGVzRm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdHRhY2hTaGFkb3coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJ29wZW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhdGVzRm9jdXM6ICEhKGNtcE1ldGEuJGZsYWdzJCAmIDE2IC8qIENNUF9GTEFHUy5zaGFkb3dEZWxlZ2F0ZXNGb2N1cyAqLyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIUJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlICYmICEoJ3NoYWRvd1Jvb3QnIGluIHNlbGYpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zaGFkb3dSb290ID0gc2VsZjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoQlVJTEQuc2xvdENoaWxkTm9kZXNGaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoQ2hpbGRTbG90Tm9kZXMoc2VsZiwgY21wTWV0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcHBMb2FkRmFsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChhcHBMb2FkRmFsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwTG9hZEZhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCb290c3RyYXBwaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25uZWN0ZWRDYWxsYmFjayB3aWxsIGJlIHByb2Nlc3NlZCBvbmNlIGFsbCBjb21wb25lbnRzIGhhdmUgYmVlbiByZWdpc3RlcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZENvbm5lY3RlZENhbGxiYWNrcy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx0LmptcCgoKSA9PiBjb25uZWN0ZWRDYWxsYmFjayh0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdC5qbXAoKCkgPT4gZGlzY29ubmVjdGVkQ2FsbGJhY2sodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnRPblJlYWR5KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0SG9zdFJlZih0aGlzKS4kb25SZWFkeVByb21pc2UkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoQlVJTEQuY2xvbmVOb2RlRml4KSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hDbG9uZU5vZGUoSG9zdEVsZW1lbnQucHJvdG90eXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChCVUlMRC5hcHBlbmRDaGlsZFNsb3RGaXgpIHtcbiAgICAgICAgICAgICAgICBwYXRjaFNsb3RBcHBlbmRDaGlsZChIb3N0RWxlbWVudC5wcm90b3R5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKEJVSUxELmhvdE1vZHVsZVJlcGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgSG9zdEVsZW1lbnQucHJvdG90eXBlWydzLWhtciddID0gZnVuY3Rpb24gKGhtclZlcnNpb25JZCkge1xuICAgICAgICAgICAgICAgICAgICBobXJTdGFydCh0aGlzLCBjbXBNZXRhLCBobXJWZXJzaW9uSWQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQlVJTEQuc2NvcGVkU2xvdFRleHRDb250ZW50Rml4KSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hUZXh0Q29udGVudChIb3N0RWxlbWVudC5wcm90b3R5cGUsIGNtcE1ldGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY21wTWV0YS4kbGF6eUJ1bmRsZUlkJCA9IGxhenlCdW5kbGVbMF07XG4gICAgICAgICAgICBpZiAoIWV4Y2x1ZGUuaW5jbHVkZXModGFnTmFtZSkgJiYgIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICAgICAgICAgIGNtcFRhZ3MucHVzaCh0YWdOYW1lKTtcbiAgICAgICAgICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgcHJveHlDb21wb25lbnQoSG9zdEVsZW1lbnQsIGNtcE1ldGEsIDEgLyogUFJPWFlfRkxBR1MuaXNFbGVtZW50Q29uc3RydWN0b3IgKi8pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKEJVSUxELmludmlzaWJsZVByZWh5ZHJhdGlvbiAmJiAoQlVJTEQuaHlkcmF0ZWRDbGFzcyB8fCBCVUlMRC5oeWRyYXRlZEF0dHJpYnV0ZSkpIHtcbiAgICAgICAgdmlzaWJpbGl0eVN0eWxlLmlubmVySFRNTCA9IGNtcFRhZ3MgKyBIWURSQVRFRF9DU1M7XG4gICAgICAgIHZpc2liaWxpdHlTdHlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3R5bGVzJywgJycpO1xuICAgICAgICAvLyBBcHBseSBDU1Agbm9uY2UgdG8gdGhlIHN0eWxlIHRhZyBpZiBpdCBleGlzdHNcbiAgICAgICAgY29uc3Qgbm9uY2UgPSAoX2EgPSBwbHQuJG5vbmNlJCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogcXVlcnlOb25jZU1ldGFUYWdDb250ZW50KGRvYyk7XG4gICAgICAgIGlmIChub25jZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5U3R5bGUuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBoZWFkLmluc2VydEJlZm9yZSh2aXNpYmlsaXR5U3R5bGUsIG1ldGFDaGFyc2V0ID8gbWV0YUNoYXJzZXQubmV4dFNpYmxpbmcgOiBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICAvLyBQcm9jZXNzIGRlZmVycmVkIGNvbm5lY3RlZENhbGxiYWNrcyBub3cgYWxsIGNvbXBvbmVudHMgaGF2ZSBiZWVuIHJlZ2lzdGVyZWRcbiAgICBpc0Jvb3RzdHJhcHBpbmcgPSBmYWxzZTtcbiAgICBpZiAoZGVmZXJyZWRDb25uZWN0ZWRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICAgIGRlZmVycmVkQ29ubmVjdGVkQ2FsbGJhY2tzLm1hcCgoaG9zdCkgPT4gaG9zdC5jb25uZWN0ZWRDYWxsYmFjaygpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChCVUlMRC5wcm9maWxlKSB7XG4gICAgICAgICAgICBwbHQuam1wKCgpID0+IChhcHBMb2FkRmFsbGJhY2sgPSBzZXRUaW1lb3V0KGFwcERpZExvYWQsIDMwLCAndGltZW91dCcpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwbHQuam1wKCgpID0+IChhcHBMb2FkRmFsbGJhY2sgPSBzZXRUaW1lb3V0KGFwcERpZExvYWQsIDMwKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEZhbGxiYWNrIGFwcExvYWQgZXZlbnRcbiAgICBlbmRCb290c3RyYXAoKTtcbn07XG5jb25zdCBnZXRDb25uZWN0ID0gKF9yZWYsIHRhZ05hbWUpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnRPblJlYWR5ID0gKCkgPT4ge1xuICAgICAgICBsZXQgZWxtID0gZG9jLnF1ZXJ5U2VsZWN0b3IodGFnTmFtZSk7XG4gICAgICAgIGlmICghZWxtKSB7XG4gICAgICAgICAgICBlbG0gPSBkb2MuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgICAgIGRvYy5ib2R5LmFwcGVuZENoaWxkKGVsbSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlbG0uY29tcG9uZW50T25SZWFkeSA9PT0gJ2Z1bmN0aW9uJyA/IGVsbS5jb21wb25lbnRPblJlYWR5KCkgOiBQcm9taXNlLnJlc29sdmUoZWxtKTtcbiAgICB9O1xuICAgIGNvbnN0IGNyZWF0ZSA9ICguLi5hcmdzKSA9PiB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRPblJlYWR5KCkudGhlbigoZWwpID0+IGVsLmNyZWF0ZSguLi5hcmdzKSk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGUsXG4gICAgICAgIGNvbXBvbmVudE9uUmVhZHksXG4gICAgfTtcbn07XG5jb25zdCBnZXRDb250ZXh0ID0gKF9lbG0sIGNvbnRleHQpID0+IHtcbiAgICBpZiAoY29udGV4dCBpbiBDb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBDb250ZXh0W2NvbnRleHRdO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb250ZXh0ID09PSAnd2luZG93Jykge1xuICAgICAgICByZXR1cm4gd2luO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb250ZXh0ID09PSAnZG9jdW1lbnQnKSB7XG4gICAgICAgIHJldHVybiBkb2M7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICdpc1NlcnZlcicgfHwgY29udGV4dCA9PT0gJ2lzUHJlcmVuZGVyJykge1xuICAgICAgICByZXR1cm4gQlVJTEQuaHlkcmF0ZVNlcnZlclNpZGUgPyB0cnVlIDogZmFsc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNvbnRleHQgPT09ICdpc0NsaWVudCcpIHtcbiAgICAgICAgcmV0dXJuIEJVSUxELmh5ZHJhdGVTZXJ2ZXJTaWRlID8gZmFsc2UgOiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb250ZXh0ID09PSAncmVzb3VyY2VzVXJsJyB8fCBjb250ZXh0ID09PSAncHVibGljUGF0aCcpIHtcbiAgICAgICAgcmV0dXJuIGdldEFzc2V0UGF0aCgnLicpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb250ZXh0ID09PSAncXVldWUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3cml0ZTogd3JpdGVUYXNrLFxuICAgICAgICAgICAgcmVhZDogcmVhZFRhc2ssXG4gICAgICAgICAgICB0aWNrOiB7XG4gICAgICAgICAgICAgICAgdGhlbihjYikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV4dFRpY2soY2IpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufTtcbmNvbnN0IEZyYWdtZW50ID0gKF8sIGNoaWxkcmVuKSA9PiBjaGlsZHJlbjtcbmNvbnN0IGFkZEhvc3RFdmVudExpc3RlbmVycyA9IChlbG0sIGhvc3RSZWYsIGxpc3RlbmVycywgYXR0YWNoUGFyZW50TGlzdGVuZXJzKSA9PiB7XG4gICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lciAmJiBsaXN0ZW5lcnMpIHtcbiAgICAgICAgLy8gdGhpcyBpcyBjYWxsZWQgaW1tZWRpYXRlbHkgd2l0aGluIHRoZSBlbGVtZW50J3MgY29uc3RydWN0b3JcbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBvdXIgZXZlbnQgbGlzdGVuZXJzIG9uIHRoZSBob3N0IGVsZW1lbnRcbiAgICAgICAgLy8gd2UgZG8gdGhpcyBub3cgc28gdGhhdCB3ZSBjYW4gbGlzdGVuIHRvIGV2ZW50cyB0aGF0IG1heVxuICAgICAgICAvLyBoYXZlIGZpcmVkIGV2ZW4gYmVmb3JlIHRoZSBpbnN0YW5jZSBpcyByZWFkeVxuICAgICAgICBpZiAoQlVJTEQuaG9zdExpc3RlbmVyVGFyZ2V0UGFyZW50KSB7XG4gICAgICAgICAgICAvLyB0aGlzIGNvbXBvbmVudCBtYXkgaGF2ZSBldmVudCBsaXN0ZW5lcnMgdGhhdCBzaG91bGQgYmUgYXR0YWNoZWQgdG8gdGhlIHBhcmVudFxuICAgICAgICAgICAgaWYgKGF0dGFjaFBhcmVudExpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYmVpbmcgcmFuIGZyb20gd2l0aGluIHRoZSBjb25uZWN0ZWRDYWxsYmFja1xuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGlzIGltcG9ydGFudCBzbyB0aGF0IHdlIGtub3cgdGhlIGhvc3QgZWxlbWVudCBhY3R1YWxseSBoYXMgYSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgdGhlIGxpc3RlbmVycyB0byBvbmx5IGhhdmUgdGhlIG9uZXMgdGhhdCBBUkUgYmVpbmcgYXR0YWNoZWQgdG8gdGhlIHBhcmVudFxuICAgICAgICAgICAgICAgIGxpc3RlbmVycyA9IGxpc3RlbmVycy5maWx0ZXIoKFtmbGFnc10pID0+IGZsYWdzICYgMzIgLyogTElTVEVORVJfRkxBR1MuVGFyZ2V0UGFyZW50ICovKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHRoaXMgaXMgYmVpbmcgcmFuIGZyb20gd2l0aGluIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAvLyBldmVyeXRoaW5nIEJVVCB0aGUgcGFyZW50IGVsZW1lbnQgbGlzdGVuZXJzIHNob3VsZCBiZSBhdHRhY2hlZCBhdCB0aGlzIHRpbWVcbiAgICAgICAgICAgICAgICAvLyBmaWx0ZXIgb3V0IHRoZSBsaXN0ZW5lcnMgdGhhdCBhcmUgTk9UIGJlaW5nIGF0dGFjaGVkIHRvIHRoZSBwYXJlbnRcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChbZmxhZ3NdKSA9PiAhKGZsYWdzICYgMzIgLyogTElTVEVORVJfRkxBR1MuVGFyZ2V0UGFyZW50ICovKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGlzdGVuZXJzLm1hcCgoW2ZsYWdzLCBuYW1lLCBtZXRob2RdKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBCVUlMRC5ob3N0TGlzdGVuZXJUYXJnZXQgPyBnZXRIb3N0TGlzdGVuZXJUYXJnZXQoZWxtLCBmbGFncykgOiBlbG07XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyID0gaG9zdExpc3RlbmVyUHJveHkoaG9zdFJlZiwgbWV0aG9kKTtcbiAgICAgICAgICAgIGNvbnN0IG9wdHMgPSBob3N0TGlzdGVuZXJPcHRzKGZsYWdzKTtcbiAgICAgICAgICAgIHBsdC5hZWwodGFyZ2V0LCBuYW1lLCBoYW5kbGVyLCBvcHRzKTtcbiAgICAgICAgICAgIChob3N0UmVmLiRybUxpc3RlbmVycyQgPSBob3N0UmVmLiRybUxpc3RlbmVycyQgfHwgW10pLnB1c2goKCkgPT4gcGx0LnJlbCh0YXJnZXQsIG5hbWUsIGhhbmRsZXIsIG9wdHMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IGhvc3RMaXN0ZW5lclByb3h5ID0gKGhvc3RSZWYsIG1ldGhvZE5hbWUpID0+IChldikgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChCVUlMRC5sYXp5TG9hZCkge1xuICAgICAgICAgICAgaWYgKGhvc3RSZWYuJGZsYWdzJCAmIDI1NiAvKiBIT1NUX0ZMQUdTLmlzTGlzdGVuUmVhZHkgKi8pIHtcbiAgICAgICAgICAgICAgICAvLyBpbnN0YW5jZSBpcyByZWFkeSwgbGV0J3MgY2FsbCBpdCdzIG1lbWJlciBtZXRob2QgZm9yIHRoaXMgZXZlbnRcbiAgICAgICAgICAgICAgICBob3N0UmVmLiRsYXp5SW5zdGFuY2UkW21ldGhvZE5hbWVdKGV2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIChob3N0UmVmLiRxdWV1ZWRMaXN0ZW5lcnMkID0gaG9zdFJlZi4kcXVldWVkTGlzdGVuZXJzJCB8fCBbXSkucHVzaChbbWV0aG9kTmFtZSwgZXZdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhvc3RSZWYuJGhvc3RFbGVtZW50JFttZXRob2ROYW1lXShldik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZUVycm9yKGUpO1xuICAgIH1cbn07XG5jb25zdCBnZXRIb3N0TGlzdGVuZXJUYXJnZXQgPSAoZWxtLCBmbGFncykgPT4ge1xuICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXJUYXJnZXREb2N1bWVudCAmJiBmbGFncyAmIDQgLyogTElTVEVORVJfRkxBR1MuVGFyZ2V0RG9jdW1lbnQgKi8pXG4gICAgICAgIHJldHVybiBkb2M7XG4gICAgaWYgKEJVSUxELmhvc3RMaXN0ZW5lclRhcmdldFdpbmRvdyAmJiBmbGFncyAmIDggLyogTElTVEVORVJfRkxBR1MuVGFyZ2V0V2luZG93ICovKVxuICAgICAgICByZXR1cm4gd2luO1xuICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXJUYXJnZXRCb2R5ICYmIGZsYWdzICYgMTYgLyogTElTVEVORVJfRkxBR1MuVGFyZ2V0Qm9keSAqLylcbiAgICAgICAgcmV0dXJuIGRvYy5ib2R5O1xuICAgIGlmIChCVUlMRC5ob3N0TGlzdGVuZXJUYXJnZXRQYXJlbnQgJiYgZmxhZ3MgJiAzMiAvKiBMSVNURU5FUl9GTEFHUy5UYXJnZXRQYXJlbnQgKi8pXG4gICAgICAgIHJldHVybiBlbG0ucGFyZW50RWxlbWVudDtcbiAgICByZXR1cm4gZWxtO1xufTtcbi8vIHByZXR0aWVyLWlnbm9yZVxuY29uc3QgaG9zdExpc3RlbmVyT3B0cyA9IChmbGFncykgPT4gc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnNcbiAgICA/ICh7XG4gICAgICAgIHBhc3NpdmU6IChmbGFncyAmIDEgLyogTElTVEVORVJfRkxBR1MuUGFzc2l2ZSAqLykgIT09IDAsXG4gICAgICAgIGNhcHR1cmU6IChmbGFncyAmIDIgLyogTElTVEVORVJfRkxBR1MuQ2FwdHVyZSAqLykgIT09IDAsXG4gICAgfSlcbiAgICA6IChmbGFncyAmIDIgLyogTElTVEVORVJfRkxBR1MuQ2FwdHVyZSAqLykgIT09IDA7XG4vKipcbiAqIEFzc2lnbnMgdGhlIGdpdmVuIHZhbHVlIHRvIHRoZSBub25jZSBwcm9wZXJ0eSBvbiB0aGUgcnVudGltZSBwbGF0Zm9ybSBvYmplY3QuXG4gKiBEdXJpbmcgcnVudGltZSwgdGhpcyB2YWx1ZSBpcyB1c2VkIHRvIHNldCB0aGUgbm9uY2UgYXR0cmlidXRlIG9uIGFsbCBkeW5hbWljYWxseSBjcmVhdGVkIHNjcmlwdCBhbmQgc3R5bGUgdGFncy5cbiAqIEBwYXJhbSBub25jZSBUaGUgdmFsdWUgdG8gYmUgYXNzaWduZWQgdG8gdGhlIHBsYXRmb3JtIG5vbmNlIHByb3BlcnR5LlxuICogQHJldHVybnMgdm9pZFxuICovXG5jb25zdCBzZXROb25jZSA9IChub25jZSkgPT4gKHBsdC4kbm9uY2UkID0gbm9uY2UpO1xuY29uc3Qgc2V0UGxhdGZvcm1PcHRpb25zID0gKG9wdHMpID0+IE9iamVjdC5hc3NpZ24ocGx0LCBvcHRzKTtcbmNvbnN0IGluc2VydFZkb21Bbm5vdGF0aW9ucyA9IChkb2MsIHN0YXRpY0NvbXBvbmVudHMpID0+IHtcbiAgICBpZiAoZG9jICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgZG9jRGF0YSA9IHtcbiAgICAgICAgICAgIGhvc3RJZHM6IDAsXG4gICAgICAgICAgICByb290TGV2ZWxJZHM6IDAsXG4gICAgICAgICAgICBzdGF0aWNDb21wb25lbnRzOiBuZXcgU2V0KHN0YXRpY0NvbXBvbmVudHMpLFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcmdMb2NhdGlvbk5vZGVzID0gW107XG4gICAgICAgIHBhcnNlVk5vZGVBbm5vdGF0aW9ucyhkb2MsIGRvYy5ib2R5LCBkb2NEYXRhLCBvcmdMb2NhdGlvbk5vZGVzKTtcbiAgICAgICAgb3JnTG9jYXRpb25Ob2Rlcy5mb3JFYWNoKChvcmdMb2NhdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGlmIChvcmdMb2NhdGlvbk5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5vZGVSZWYgPSBvcmdMb2NhdGlvbk5vZGVbJ3MtbnInXTtcbiAgICAgICAgICAgICAgICBsZXQgaG9zdElkID0gbm9kZVJlZlsncy1ob3N0LWlkJ107XG4gICAgICAgICAgICAgICAgbGV0IG5vZGVJZCA9IG5vZGVSZWZbJ3Mtbm9kZS1pZCddO1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZElkID0gYCR7aG9zdElkfS4ke25vZGVJZH1gO1xuICAgICAgICAgICAgICAgIGlmIChob3N0SWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBob3N0SWQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBkb2NEYXRhLnJvb3RMZXZlbElkcysrO1xuICAgICAgICAgICAgICAgICAgICBub2RlSWQgPSBkb2NEYXRhLnJvb3RMZXZlbElkcztcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRJZCA9IGAke2hvc3RJZH0uJHtub2RlSWR9YDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVSZWYubm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlUmVmLnNldEF0dHJpYnV0ZShIWURSQVRFX0NISUxEX0lELCBjaGlsZElkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChub2RlUmVmLm5vZGVUeXBlID09PSAzIC8qIE5PREVfVFlQRS5UZXh0Tm9kZSAqLykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvc3RJZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRDb250ZW50ID0gbm9kZVJlZi5ub2RlVmFsdWUudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0Q29udGVudCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXNlbGVzcyB3aGl0ZXNwYWNlIG5vZGUgYXQgdGhlIGRvY3VtZW50IHJvb3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JnTG9jYXRpb25Ob2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29tbWVudEJlZm9yZVRleHROb2RlID0gZG9jLmNyZWF0ZUNvbW1lbnQoY2hpbGRJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50QmVmb3JlVGV4dE5vZGUubm9kZVZhbHVlID0gYCR7VEVYVF9OT0RFX0lEfS4ke2NoaWxkSWR9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVSZWYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY29tbWVudEJlZm9yZVRleHROb2RlLCBub2RlUmVmKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgb3JnTG9jYXRpb25Ob2RlSWQgPSBgJHtPUkdfTE9DQVRJT05fSUR9LiR7Y2hpbGRJZH1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yZ0xvY2F0aW9uUGFyZW50Tm9kZSA9IG9yZ0xvY2F0aW9uTm9kZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIGlmIChvcmdMb2NhdGlvblBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9yZ0xvY2F0aW9uUGFyZW50Tm9kZVsncy1lbiddID09PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW5kaW5nIHdpdGggYSBcIi5cIiBtZWFucyB0aGF0IHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2YgdGhpcyBub2RlJ3Mgb3JpZ2luYWwgbG9jYXRpb24gaXMgYSBTSEFET1cgZG9tIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGlzIG5vZGUgaXMgYXBhcnQgb2YgdGhlIHJvb3QgbGV2ZWwgbGlnaHQgZG9tXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGVJZCArPSBgLmA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob3JnTG9jYXRpb25QYXJlbnROb2RlWydzLWVuJ10gPT09ICdjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW5kaW5nIHdpdGggYSBcIi5jXCIgbWVhbnMgdGhhdCB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIHRoaXMgbm9kZSdzIG9yaWdpbmFsIGxvY2F0aW9uIGlzIGEgU0NPUEVEIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCB0aGlzIG5vZGUgaXMgYXBhcnQgb2YgdGhlIHJvb3QgbGV2ZWwgbGlnaHQgZG9tXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmdMb2NhdGlvbk5vZGVJZCArPSBgLmNgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9yZ0xvY2F0aW9uTm9kZS5ub2RlVmFsdWUgPSBvcmdMb2NhdGlvbk5vZGVJZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IHBhcnNlVk5vZGVBbm5vdGF0aW9ucyA9IChkb2MsIG5vZGUsIGRvY0RhdGEsIG9yZ0xvY2F0aW9uTm9kZXMpID0+IHtcbiAgICBpZiAobm9kZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG5vZGVbJ3MtbnInXSAhPSBudWxsKSB7XG4gICAgICAgIG9yZ0xvY2F0aW9uTm9kZXMucHVzaChub2RlKTtcbiAgICB9XG4gICAgaWYgKG5vZGUubm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovKSB7XG4gICAgICAgIG5vZGUuY2hpbGROb2Rlcy5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhvc3RSZWYgPSBnZXRIb3N0UmVmKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICBpZiAoaG9zdFJlZiAhPSBudWxsICYmICFkb2NEYXRhLnN0YXRpY0NvbXBvbmVudHMuaGFzKGNoaWxkTm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNtcERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVJZHM6IDAsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpbnNlcnRWTm9kZUFubm90YXRpb25zKGRvYywgY2hpbGROb2RlLCBob3N0UmVmLiR2bm9kZSQsIGRvY0RhdGEsIGNtcERhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyc2VWTm9kZUFubm90YXRpb25zKGRvYywgY2hpbGROb2RlLCBkb2NEYXRhLCBvcmdMb2NhdGlvbk5vZGVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmNvbnN0IGluc2VydFZOb2RlQW5ub3RhdGlvbnMgPSAoZG9jLCBob3N0RWxtLCB2bm9kZSwgZG9jRGF0YSwgY21wRGF0YSkgPT4ge1xuICAgIGlmICh2bm9kZSAhPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGhvc3RJZCA9ICsrZG9jRGF0YS5ob3N0SWRzO1xuICAgICAgICBob3N0RWxtLnNldEF0dHJpYnV0ZShIWURSQVRFX0lELCBob3N0SWQpO1xuICAgICAgICBpZiAoaG9zdEVsbVsncy1jciddICE9IG51bGwpIHtcbiAgICAgICAgICAgIGhvc3RFbG1bJ3MtY3InXS5ub2RlVmFsdWUgPSBgJHtDT05URU5UX1JFRl9JRH0uJHtob3N0SWR9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodm5vZGUuJGNoaWxkcmVuJCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBkZXB0aCA9IDA7XG4gICAgICAgICAgICB2bm9kZS4kY2hpbGRyZW4kLmZvckVhY2goKHZub2RlQ2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaW5zZXJ0Q2hpbGRWTm9kZUFubm90YXRpb25zKGRvYywgdm5vZGVDaGlsZCwgY21wRGF0YSwgaG9zdElkLCBkZXB0aCwgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvc3RFbG0gJiYgdm5vZGUgJiYgdm5vZGUuJGVsbSQgJiYgIWhvc3RFbG0uaGFzQXR0cmlidXRlKCdjLWlkJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGhvc3RFbG0ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgIGlmIChwYXJlbnQgJiYgcGFyZW50LmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnRDaGlsZE5vZGVzID0gQXJyYXkuZnJvbShwYXJlbnQuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWVudCA9IHBhcmVudENoaWxkTm9kZXMuZmluZCgobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gOCAvKiBOT0RFX1RZUEUuQ29tbWVudE5vZGUgKi8gJiYgbm9kZVsncy1zciddKTtcbiAgICAgICAgICAgICAgICBpZiAoY29tbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHBhcmVudENoaWxkTm9kZXMuaW5kZXhPZihob3N0RWxtKSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHZub2RlLiRlbG0kLnNldEF0dHJpYnV0ZShIWURSQVRFX0NISUxEX0lELCBgJHtjb21tZW50WydzLWhvc3QtaWQnXX0uJHtjb21tZW50WydzLW5vZGUtaWQnXX0uMC4ke2luZGV4fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5jb25zdCBpbnNlcnRDaGlsZFZOb2RlQW5ub3RhdGlvbnMgPSAoZG9jLCB2bm9kZUNoaWxkLCBjbXBEYXRhLCBob3N0SWQsIGRlcHRoLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNoaWxkRWxtID0gdm5vZGVDaGlsZC4kZWxtJDtcbiAgICBpZiAoY2hpbGRFbG0gPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG5vZGVJZCA9IGNtcERhdGEubm9kZUlkcysrO1xuICAgIGNvbnN0IGNoaWxkSWQgPSBgJHtob3N0SWR9LiR7bm9kZUlkfS4ke2RlcHRofS4ke2luZGV4fWA7XG4gICAgY2hpbGRFbG1bJ3MtaG9zdC1pZCddID0gaG9zdElkO1xuICAgIGNoaWxkRWxtWydzLW5vZGUtaWQnXSA9IG5vZGVJZDtcbiAgICBpZiAoY2hpbGRFbG0ubm9kZVR5cGUgPT09IDEgLyogTk9ERV9UWVBFLkVsZW1lbnROb2RlICovKSB7XG4gICAgICAgIGNoaWxkRWxtLnNldEF0dHJpYnV0ZShIWURSQVRFX0NISUxEX0lELCBjaGlsZElkKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoY2hpbGRFbG0ubm9kZVR5cGUgPT09IDMgLyogTk9ERV9UWVBFLlRleHROb2RlICovKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudE5vZGUgPSBjaGlsZEVsbS5wYXJlbnROb2RlO1xuICAgICAgICBjb25zdCBub2RlTmFtZSA9IHBhcmVudE5vZGUubm9kZU5hbWU7XG4gICAgICAgIGlmIChub2RlTmFtZSAhPT0gJ1NUWUxFJyAmJiBub2RlTmFtZSAhPT0gJ1NDUklQVCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRleHROb2RlSWQgPSBgJHtURVhUX05PREVfSUR9LiR7Y2hpbGRJZH1gO1xuICAgICAgICAgICAgY29uc3QgY29tbWVudEJlZm9yZVRleHROb2RlID0gZG9jLmNyZWF0ZUNvbW1lbnQodGV4dE5vZGVJZCk7XG4gICAgICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShjb21tZW50QmVmb3JlVGV4dE5vZGUsIGNoaWxkRWxtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChjaGlsZEVsbS5ub2RlVHlwZSA9PT0gOCAvKiBOT0RFX1RZUEUuQ29tbWVudE5vZGUgKi8pIHtcbiAgICAgICAgaWYgKGNoaWxkRWxtWydzLXNyJ10pIHtcbiAgICAgICAgICAgIGNvbnN0IHNsb3ROYW1lID0gY2hpbGRFbG1bJ3Mtc24nXSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IHNsb3ROb2RlSWQgPSBgJHtTTE9UX05PREVfSUR9LiR7Y2hpbGRJZH0uJHtzbG90TmFtZX1gO1xuICAgICAgICAgICAgY2hpbGRFbG0ubm9kZVZhbHVlID0gc2xvdE5vZGVJZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodm5vZGVDaGlsZC4kY2hpbGRyZW4kICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgY2hpbGREZXB0aCA9IGRlcHRoICsgMTtcbiAgICAgICAgdm5vZGVDaGlsZC4kY2hpbGRyZW4kLmZvckVhY2goKHZub2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaW5zZXJ0Q2hpbGRWTm9kZUFubm90YXRpb25zKGRvYywgdm5vZGUsIGNtcERhdGEsIGhvc3RJZCwgY2hpbGREZXB0aCwgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG59O1xuY29uc3QgaG9zdFJlZnMgPSAvKkBfX1BVUkVfXyovIG5ldyBXZWFrTWFwKCk7XG5jb25zdCBnZXRIb3N0UmVmID0gKHJlZikgPT4gaG9zdFJlZnMuZ2V0KHJlZik7XG5jb25zdCByZWdpc3Rlckluc3RhbmNlID0gKGxhenlJbnN0YW5jZSwgaG9zdFJlZikgPT4gaG9zdFJlZnMuc2V0KChob3N0UmVmLiRsYXp5SW5zdGFuY2UkID0gbGF6eUluc3RhbmNlKSwgaG9zdFJlZik7XG5jb25zdCByZWdpc3Rlckhvc3QgPSAoZWxtLCBjbXBNZXRhKSA9PiB7XG4gICAgY29uc3QgaG9zdFJlZiA9IHtcbiAgICAgICAgJGZsYWdzJDogMCxcbiAgICAgICAgJGhvc3RFbGVtZW50JDogZWxtLFxuICAgICAgICAkY21wTWV0YSQ6IGNtcE1ldGEsXG4gICAgICAgICRpbnN0YW5jZVZhbHVlcyQ6IG5ldyBNYXAoKSxcbiAgICB9O1xuICAgIGlmIChCVUlMRC5pc0Rldikge1xuICAgICAgICBob3N0UmVmLiRyZW5kZXJDb3VudCQgPSAwO1xuICAgIH1cbiAgICBpZiAoQlVJTEQubWV0aG9kICYmIEJVSUxELmxhenlMb2FkKSB7XG4gICAgICAgIGhvc3RSZWYuJG9uSW5zdGFuY2VQcm9taXNlJCA9IG5ldyBQcm9taXNlKChyKSA9PiAoaG9zdFJlZi4kb25JbnN0YW5jZVJlc29sdmUkID0gcikpO1xuICAgIH1cbiAgICBpZiAoQlVJTEQuYXN5bmNMb2FkaW5nKSB7XG4gICAgICAgIGhvc3RSZWYuJG9uUmVhZHlQcm9taXNlJCA9IG5ldyBQcm9taXNlKChyKSA9PiAoaG9zdFJlZi4kb25SZWFkeVJlc29sdmUkID0gcikpO1xuICAgICAgICBlbG1bJ3MtcCddID0gW107XG4gICAgICAgIGVsbVsncy1yYyddID0gW107XG4gICAgfVxuICAgIGFkZEhvc3RFdmVudExpc3RlbmVycyhlbG0sIGhvc3RSZWYsIGNtcE1ldGEuJGxpc3RlbmVycyQsIGZhbHNlKTtcbiAgICByZXR1cm4gaG9zdFJlZnMuc2V0KGVsbSwgaG9zdFJlZik7XG59O1xuY29uc3QgaXNNZW1iZXJJbkVsZW1lbnQgPSAoZWxtLCBtZW1iZXJOYW1lKSA9PiBtZW1iZXJOYW1lIGluIGVsbTtcbmNvbnN0IGNvbnNvbGVFcnJvciA9IChlLCBlbCkgPT4gKGN1c3RvbUVycm9yIHx8IGNvbnNvbGUuZXJyb3IpKGUsIGVsKTtcbmNvbnN0IFNURU5DSUxfREVWX01PREUgPSBCVUlMRC5pc1Rlc3RpbmdcbiAgICA/IFsnU1RFTkNJTDonXSAvLyBFMkUgdGVzdGluZ1xuICAgIDogW1xuICAgICAgICAnJWNzdGVuY2lsJyxcbiAgICAgICAgJ2NvbG9yOiB3aGl0ZTtiYWNrZ3JvdW5kOiM0YzQ3ZmY7Zm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZToxMHB4OyBwYWRkaW5nOjJweCA2cHg7IGJvcmRlci1yYWRpdXM6IDVweCcsXG4gICAgXTtcbmNvbnN0IGNvbnNvbGVEZXZFcnJvciA9ICguLi5tKSA9PiBjb25zb2xlLmVycm9yKC4uLlNURU5DSUxfREVWX01PREUsIC4uLm0pO1xuY29uc3QgY29uc29sZURldldhcm4gPSAoLi4ubSkgPT4gY29uc29sZS53YXJuKC4uLlNURU5DSUxfREVWX01PREUsIC4uLm0pO1xuY29uc3QgY29uc29sZURldkluZm8gPSAoLi4ubSkgPT4gY29uc29sZS5pbmZvKC4uLlNURU5DSUxfREVWX01PREUsIC4uLm0pO1xuY29uc3Qgc2V0RXJyb3JIYW5kbGVyID0gKGhhbmRsZXIpID0+IChjdXN0b21FcnJvciA9IGhhbmRsZXIpO1xuY29uc3QgY21wTW9kdWxlcyA9IC8qQF9fUFVSRV9fKi8gbmV3IE1hcCgpO1xuY29uc3QgbG9hZE1vZHVsZSA9IChjbXBNZXRhLCBob3N0UmVmLCBobXJWZXJzaW9uSWQpID0+IHtcbiAgICAvLyBsb2FkTW9kdWxlSW1wb3J0XG4gICAgY29uc3QgZXhwb3J0TmFtZSA9IGNtcE1ldGEuJHRhZ05hbWUkLnJlcGxhY2UoLy0vZywgJ18nKTtcbiAgICBjb25zdCBidW5kbGVJZCA9IGNtcE1ldGEuJGxhenlCdW5kbGVJZCQ7XG4gICAgaWYgKEJVSUxELmlzRGV2ICYmIHR5cGVvZiBidW5kbGVJZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc29sZURldkVycm9yKGBUcnlpbmcgdG8gbGF6aWx5IGxvYWQgY29tcG9uZW50IDwke2NtcE1ldGEuJHRhZ05hbWUkfT4gd2l0aCBzdHlsZSBtb2RlIFwiJHtob3N0UmVmLiRtb2RlTmFtZSR9XCIsIGJ1dCBpdCBkb2VzIG5vdCBleGlzdC5gKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgbW9kdWxlID0gIUJVSUxELmhvdE1vZHVsZVJlcGxhY2VtZW50ID8gY21wTW9kdWxlcy5nZXQoYnVuZGxlSWQpIDogZmFsc2U7XG4gICAgaWYgKG1vZHVsZSkge1xuICAgICAgICByZXR1cm4gbW9kdWxlW2V4cG9ydE5hbWVdO1xuICAgIH1cbiAgICAvKiFfX1NURU5DSUxfU1RBVElDX0lNUE9SVF9TV0lUQ0hfXyovXG4gICAgcmV0dXJuIGltcG9ydChcbiAgICAvKiBAdml0ZS1pZ25vcmUgKi9cbiAgICAvKiB3ZWJwYWNrSW5jbHVkZTogL1xcLmVudHJ5XFwuanMkLyAqL1xuICAgIC8qIHdlYnBhY2tFeGNsdWRlOiAvXFwuc3lzdGVtXFwuZW50cnlcXC5qcyQvICovXG4gICAgLyogd2VicGFja01vZGU6IFwibGF6eVwiICovXG4gICAgYC4vJHtidW5kbGVJZH0uZW50cnkuanMke0JVSUxELmhvdE1vZHVsZVJlcGxhY2VtZW50ICYmIGhtclZlcnNpb25JZCA/ICc/cy1obXI9JyArIGhtclZlcnNpb25JZCA6ICcnfWApLnRoZW4oKGltcG9ydGVkTW9kdWxlKSA9PiB7XG4gICAgICAgIGlmICghQlVJTEQuaG90TW9kdWxlUmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgIGNtcE1vZHVsZXMuc2V0KGJ1bmRsZUlkLCBpbXBvcnRlZE1vZHVsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGltcG9ydGVkTW9kdWxlW2V4cG9ydE5hbWVdO1xuICAgIH0sIGNvbnNvbGVFcnJvcik7XG59O1xuY29uc3Qgc3R5bGVzID0gLypAX19QVVJFX18qLyBuZXcgTWFwKCk7XG5jb25zdCBtb2RlUmVzb2x1dGlvbkNoYWluID0gW107XG5jb25zdCB3aW4gPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHt9O1xuY29uc3QgQ1NTID0gQlVJTEQuY3NzVmFyU2hpbSA/IHdpbi5DU1MgOiBudWxsO1xuY29uc3QgZG9jID0gd2luLmRvY3VtZW50IHx8IHsgaGVhZDoge30gfTtcbmNvbnN0IEggPSAod2luLkhUTUxFbGVtZW50IHx8IGNsYXNzIHtcbn0pO1xuY29uc3QgcGx0ID0ge1xuICAgICRmbGFncyQ6IDAsXG4gICAgJHJlc291cmNlc1VybCQ6ICcnLFxuICAgIGptcDogKGgpID0+IGgoKSxcbiAgICByYWY6IChoKSA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaCksXG4gICAgYWVsOiAoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpID0+IGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cyksXG4gICAgcmVsOiAoZWwsIGV2ZW50TmFtZSwgbGlzdGVuZXIsIG9wdHMpID0+IGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBsaXN0ZW5lciwgb3B0cyksXG4gICAgY2U6IChldmVudE5hbWUsIG9wdHMpID0+IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIG9wdHMpLFxufTtcbmNvbnN0IHNldFBsYXRmb3JtSGVscGVycyA9IChoZWxwZXJzKSA9PiB7XG4gICAgT2JqZWN0LmFzc2lnbihwbHQsIGhlbHBlcnMpO1xufTtcbmNvbnN0IHN1cHBvcnRzU2hhZG93ID0gQlVJTEQuc2hhZG93RG9tU2hpbSAmJiBCVUlMRC5zaGFkb3dEb21cbiAgICA/IC8qQF9fUFVSRV9fKi8gKCgpID0+IChkb2MuaGVhZC5hdHRhY2hTaGFkb3cgKyAnJykuaW5kZXhPZignW25hdGl2ZScpID4gLTEpKClcbiAgICA6IHRydWU7XG5jb25zdCBzdXBwb3J0c0xpc3RlbmVyT3B0aW9ucyA9IC8qQF9fUFVSRV9fKi8gKCgpID0+IHtcbiAgICBsZXQgc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnMgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZScsIG51bGwsIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgc3VwcG9ydHNMaXN0ZW5lck9wdGlvbnMgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkgeyB9XG4gICAgcmV0dXJuIHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zO1xufSkoKTtcbmNvbnN0IHByb21pc2VSZXNvbHZlID0gKHYpID0+IFByb21pc2UucmVzb2x2ZSh2KTtcbmNvbnN0IHN1cHBvcnRzQ29uc3RydWN0YWJsZVN0eWxlc2hlZXRzID0gQlVJTEQuY29uc3RydWN0YWJsZUNTU1xuICAgID8gLypAX19QVVJFX18qLyAoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbmV3IENTU1N0eWxlU2hlZXQoKTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgbmV3IENTU1N0eWxlU2hlZXQoKS5yZXBsYWNlU3luYyA9PT0gJ2Z1bmN0aW9uJztcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkgeyB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KSgpXG4gICAgOiBmYWxzZTtcbmNvbnN0IHF1ZXVlRG9tUmVhZHMgPSBbXTtcbmNvbnN0IHF1ZXVlRG9tV3JpdGVzID0gW107XG5jb25zdCBxdWV1ZURvbVdyaXRlc0xvdyA9IFtdO1xuY29uc3QgcXVldWVUYXNrID0gKHF1ZXVlLCB3cml0ZSkgPT4gKGNiKSA9PiB7XG4gICAgcXVldWUucHVzaChjYik7XG4gICAgaWYgKCFxdWV1ZVBlbmRpbmcpIHtcbiAgICAgICAgcXVldWVQZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgaWYgKHdyaXRlICYmIHBsdC4kZmxhZ3MkICYgNCAvKiBQTEFURk9STV9GTEFHUy5xdWV1ZVN5bmMgKi8pIHtcbiAgICAgICAgICAgIG5leHRUaWNrKGZsdXNoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBsdC5yYWYoZmx1c2gpO1xuICAgICAgICB9XG4gICAgfVxufTtcbmNvbnN0IGNvbnN1bWUgPSAocXVldWUpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBxdWV1ZVtpXShwZXJmb3JtYW5jZS5ub3coKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5sZW5ndGggPSAwO1xufTtcbmNvbnN0IGNvbnN1bWVUaW1lb3V0ID0gKHF1ZXVlLCB0aW1lb3V0KSA9PiB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCB0cyA9IDA7XG4gICAgd2hpbGUgKGkgPCBxdWV1ZS5sZW5ndGggJiYgKHRzID0gcGVyZm9ybWFuY2Uubm93KCkpIDwgdGltZW91dCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcXVldWVbaSsrXSh0cyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGVFcnJvcihlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaSA9PT0gcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKGkgIT09IDApIHtcbiAgICAgICAgcXVldWUuc3BsaWNlKDAsIGkpO1xuICAgIH1cbn07XG5jb25zdCBmbHVzaCA9ICgpID0+IHtcbiAgICBpZiAoQlVJTEQuYXN5bmNRdWV1ZSkge1xuICAgICAgICBxdWV1ZUNvbmdlc3Rpb24rKztcbiAgICB9XG4gICAgLy8gYWx3YXlzIGZvcmNlIGEgYnVuY2ggb2YgbWVkaXVtIGNhbGxiYWNrcyB0byBydW4sIGJ1dCBzdGlsbCBoYXZlXG4gICAgLy8gYSB0aHJvdHRsZSBvbiBob3cgbWFueSBjYW4gcnVuIGluIGEgY2VydGFpbiB0aW1lXG4gICAgLy8gRE9NIFJFQURTISEhXG4gICAgY29uc3VtZShxdWV1ZURvbVJlYWRzKTtcbiAgICAvLyBET00gV1JJVEVTISEhXG4gICAgaWYgKEJVSUxELmFzeW5jUXVldWUpIHtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IChwbHQuJGZsYWdzJCAmIDYgLyogUExBVEZPUk1fRkxBR1MucXVldWVNYXNrICovKSA9PT0gMiAvKiBQTEFURk9STV9GTEFHUy5hcHBMb2FkZWQgKi9cbiAgICAgICAgICAgID8gcGVyZm9ybWFuY2Uubm93KCkgKyAxNCAqIE1hdGguY2VpbChxdWV1ZUNvbmdlc3Rpb24gKiAoMS4wIC8gMTAuMCkpXG4gICAgICAgICAgICA6IEluZmluaXR5O1xuICAgICAgICBjb25zdW1lVGltZW91dChxdWV1ZURvbVdyaXRlcywgdGltZW91dCk7XG4gICAgICAgIGNvbnN1bWVUaW1lb3V0KHF1ZXVlRG9tV3JpdGVzTG93LCB0aW1lb3V0KTtcbiAgICAgICAgaWYgKHF1ZXVlRG9tV3JpdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHF1ZXVlRG9tV3JpdGVzTG93LnB1c2goLi4ucXVldWVEb21Xcml0ZXMpO1xuICAgICAgICAgICAgcXVldWVEb21Xcml0ZXMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKHF1ZXVlUGVuZGluZyA9IHF1ZXVlRG9tUmVhZHMubGVuZ3RoICsgcXVldWVEb21Xcml0ZXMubGVuZ3RoICsgcXVldWVEb21Xcml0ZXNMb3cubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIC8vIHN0aWxsIG1vcmUgdG8gZG8geWV0LCBidXQgd2UndmUgcnVuIG91dCBvZiB0aW1lXG4gICAgICAgICAgICAvLyBsZXQncyBsZXQgdGhpcyB0aGluZyBjb29sIG9mZiBhbmQgdHJ5IGFnYWluIGluIHRoZSBuZXh0IHRpY2tcbiAgICAgICAgICAgIHBsdC5yYWYoZmx1c2gpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcXVldWVDb25nZXN0aW9uID0gMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3VtZShxdWV1ZURvbVdyaXRlcyk7XG4gICAgICAgIGlmICgocXVldWVQZW5kaW5nID0gcXVldWVEb21SZWFkcy5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgLy8gc3RpbGwgbW9yZSB0byBkbyB5ZXQsIGJ1dCB3ZSd2ZSBydW4gb3V0IG9mIHRpbWVcbiAgICAgICAgICAgIC8vIGxldCdzIGxldCB0aGlzIHRoaW5nIGNvb2wgb2ZmIGFuZCB0cnkgYWdhaW4gaW4gdGhlIG5leHQgdGlja1xuICAgICAgICAgICAgcGx0LnJhZihmbHVzaCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuY29uc3QgbmV4dFRpY2sgPSAvKkBfX1BVUkVfXyovIChjYikgPT4gcHJvbWlzZVJlc29sdmUoKS50aGVuKGNiKTtcbmNvbnN0IHJlYWRUYXNrID0gLypAX19QVVJFX18qLyBxdWV1ZVRhc2socXVldWVEb21SZWFkcywgZmFsc2UpO1xuY29uc3Qgd3JpdGVUYXNrID0gLypAX19QVVJFX18qLyBxdWV1ZVRhc2socXVldWVEb21Xcml0ZXMsIHRydWUpO1xuZXhwb3J0IHsgQlVJTEQsIEVudiwgTkFNRVNQQUNFIH0gZnJvbSAnQHN0ZW5jaWwvY29yZS9pbnRlcm5hbC9hcHAtZGF0YSc7XG5leHBvcnQgeyBCdWlsZCwgQ1NTLCBDb250ZXh0LCBGcmFnbWVudCwgSCwgSCBhcyBIVE1MRWxlbWVudCwgSG9zdCwgU1RFTkNJTF9ERVZfTU9ERSwgYWRkSG9zdEV2ZW50TGlzdGVuZXJzLCBib290c3RyYXBMYXp5LCBjbXBNb2R1bGVzLCBjb25uZWN0ZWRDYWxsYmFjaywgY29uc29sZURldkVycm9yLCBjb25zb2xlRGV2SW5mbywgY29uc29sZURldldhcm4sIGNvbnNvbGVFcnJvciwgY3JlYXRlRXZlbnQsIGRlZmluZUN1c3RvbUVsZW1lbnQsIGRpc2Nvbm5lY3RlZENhbGxiYWNrLCBkb2MsIGZvcmNlTW9kZVVwZGF0ZSwgZm9yY2VVcGRhdGUsIGdldEFzc2V0UGF0aCwgZ2V0Q29ubmVjdCwgZ2V0Q29udGV4dCwgZ2V0RWxlbWVudCwgZ2V0SG9zdFJlZiwgZ2V0TW9kZSwgZ2V0UmVuZGVyaW5nUmVmLCBnZXRWYWx1ZSwgaCwgaW5zZXJ0VmRvbUFubm90YXRpb25zLCBpc01lbWJlckluRWxlbWVudCwgbG9hZE1vZHVsZSwgbW9kZVJlc29sdXRpb25DaGFpbiwgbmV4dFRpY2ssIHBhcnNlUHJvcGVydHlWYWx1ZSwgcGx0LCBwb3N0VXBkYXRlQ29tcG9uZW50LCBwcm9taXNlUmVzb2x2ZSwgcHJveHlDb21wb25lbnQsIHByb3h5Q3VzdG9tRWxlbWVudCwgcmVhZFRhc2ssIHJlZ2lzdGVySG9zdCwgcmVnaXN0ZXJJbnN0YW5jZSwgcmVuZGVyVmRvbSwgc2V0QXNzZXRQYXRoLCBzZXRFcnJvckhhbmRsZXIsIHNldE1vZGUsIHNldE5vbmNlLCBzZXRQbGF0Zm9ybUhlbHBlcnMsIHNldFBsYXRmb3JtT3B0aW9ucywgc2V0VmFsdWUsIHN0eWxlcywgc3VwcG9ydHNDb25zdHJ1Y3RhYmxlU3R5bGVzaGVldHMsIHN1cHBvcnRzTGlzdGVuZXJPcHRpb25zLCBzdXBwb3J0c1NoYWRvdywgd2luLCB3cml0ZVRhc2sgfTtcbiIsImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9KTtcbn1cbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5rZXlzID0gKCkgPT4gKFtdKTtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0VtcHR5QXN5bmNDb250ZXh0O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy9Ac3RlbmNpbC9jb3JlL2ludGVybmFsL2NsaWVudCBsYXp5IHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qXFxcXC5lbnRyeVxcXFwuanMuKiQgaW5jbHVkZTogXFxcXC5lbnRyeVxcXFwuanMkIGV4Y2x1ZGU6IFxcXFwuc3lzdGVtXFxcXC5lbnRyeVxcXFwuanMkXCI7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xuXG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG5cbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuXG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG5cbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcblxuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG5cbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiAmJiBvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcblxudmFyIGZvcm1hdFJlbGF0aXZlID0gZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07IC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxudmFyIG9yZGluYWxOdW1iZXIgPSBmdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcblxuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgeyBwcm94eUN1c3RvbUVsZW1lbnQsIEhUTUxFbGVtZW50LCBjcmVhdGVFdmVudCwgaCwgSG9zdCB9IGZyb20gJ0BzdGVuY2lsL2NvcmUvaW50ZXJuYWwvY2xpZW50JztcblxuZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV3RGF0ZS5zZXREYXRlKG5ld0RhdGUuZ2V0RGF0ZSgpICsgZGF5cyk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuZnVuY3Rpb24gZ2V0RGF5c09mTW9udGgoZGF0ZSwgcGFkZGVkLCBmaXJzdERheU9mV2Vlaykge1xuICBjb25zdCBkYXlzID0gW107XG4gIGNvbnN0IGZpcnN0T2ZNb250aCA9IGdldEZpcnN0T2ZNb250aChkYXRlKTtcbiAgY29uc3QgZmlyc3REYXlNb250aCA9IGZpcnN0T2ZNb250aC5nZXREYXkoKSA9PT0gMCA/IDcgOiBmaXJzdE9mTW9udGguZ2V0RGF5KCk7XG4gIGNvbnN0IGxhc3RPZk1vbnRoID0gZ2V0TGFzdE9mTW9udGgoZGF0ZSk7XG4gIGNvbnN0IGxhc3REYXlPZk1vbnRoID0gbGFzdE9mTW9udGguZ2V0RGF5KCkgPT09IDAgPyA3IDogbGFzdE9mTW9udGguZ2V0RGF5KCk7XG4gIGNvbnN0IGxhc3REYXlPZldlZWsgPSBmaXJzdERheU9mV2VlayA9PT0gMSA/IDcgOiBmaXJzdERheU9mV2VlayAtIDE7XG4gIGNvbnN0IGxlZnRQYWRkaW5nRGF5cyA9IFtdO1xuICBjb25zdCByaWdodFBhZGRpbmdEYXlzID0gW107XG4gIGlmIChwYWRkZWQpIHtcbiAgICBjb25zdCBsZWZ0UGFkZGluZyA9ICg3IC0gZmlyc3REYXlPZldlZWsgKyBmaXJzdERheU1vbnRoKSAlIDc7XG4gICAgbGV0IGxlZnRQYWRkaW5nQW1vdW50ID0gbGVmdFBhZGRpbmc7XG4gICAgbGV0IGxlZnRQYWRkaW5nRGF5ID0gZ2V0UHJldmlvdXNEYXkoZmlyc3RPZk1vbnRoKTtcbiAgICB3aGlsZSAobGVmdFBhZGRpbmdBbW91bnQgPiAwKSB7XG4gICAgICBsZWZ0UGFkZGluZ0RheXMucHVzaChsZWZ0UGFkZGluZ0RheSk7XG4gICAgICBsZWZ0UGFkZGluZ0RheSA9IGdldFByZXZpb3VzRGF5KGxlZnRQYWRkaW5nRGF5KTtcbiAgICAgIGxlZnRQYWRkaW5nQW1vdW50IC09IDE7XG4gICAgfVxuICAgIGxlZnRQYWRkaW5nRGF5cy5yZXZlcnNlKCk7XG4gICAgY29uc3QgcmlnaHRQYWRkaW5nID0gKDcgLSBsYXN0RGF5T2ZNb250aCArIGxhc3REYXlPZldlZWspICUgNztcbiAgICBsZXQgcmlnaHRQYWRkaW5nQW1vdW50ID0gcmlnaHRQYWRkaW5nO1xuICAgIGxldCByaWdodFBhZGRpbmdEYXkgPSBnZXROZXh0RGF5KGxhc3RPZk1vbnRoKTtcbiAgICB3aGlsZSAocmlnaHRQYWRkaW5nQW1vdW50ID4gMCkge1xuICAgICAgcmlnaHRQYWRkaW5nRGF5cy5wdXNoKHJpZ2h0UGFkZGluZ0RheSk7XG4gICAgICByaWdodFBhZGRpbmdEYXkgPSBnZXROZXh0RGF5KHJpZ2h0UGFkZGluZ0RheSk7XG4gICAgICByaWdodFBhZGRpbmdBbW91bnQgLT0gMTtcbiAgICB9XG4gIH1cbiAgbGV0IGN1cnJlbnREYXkgPSBmaXJzdE9mTW9udGg7XG4gIHdoaWxlIChjdXJyZW50RGF5LmdldE1vbnRoKCkgPT09IGRhdGUuZ2V0TW9udGgoKSkge1xuICAgIGRheXMucHVzaChjdXJyZW50RGF5KTtcbiAgICBjdXJyZW50RGF5ID0gZ2V0TmV4dERheShjdXJyZW50RGF5KTtcbiAgfVxuICByZXR1cm4gWy4uLmxlZnRQYWRkaW5nRGF5cywgLi4uZGF5cywgLi4ucmlnaHRQYWRkaW5nRGF5c107XG59XG5mdW5jdGlvbiBnZXRGaXJzdE9mTW9udGgoZGF0ZSkge1xuICBjb25zdCBmaXJzdE9mTW9udGggPSByZW1vdmVUaW1lem9uZU9mZnNldChuZXcgRGF0ZShgJHtTdHJpbmcoZ2V0WWVhcihkYXRlKSkucGFkU3RhcnQoNCwgJzAnKX0tJHtTdHJpbmcoZ2V0TW9udGgoZGF0ZSkpLnBhZFN0YXJ0KDIsICcwJyl9LTAxYCkpO1xuICByZXR1cm4gZmlyc3RPZk1vbnRoO1xufVxuZnVuY3Rpb24gZ2V0SVNPRGF0ZVN0cmluZyhkYXRlKSB7XG4gIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHJldHVybjtcbiAgfVxuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke1N0cmluZyhkYXRlLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpfS0ke1N0cmluZyhkYXRlLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKX1gO1xufVxuZnVuY3Rpb24gZ2V0TGFzdE9mTW9udGgoZGF0ZSkge1xuICBjb25zdCBuZXdEYXRlID0gZ2V0Rmlyc3RPZk1vbnRoKGRhdGUpO1xuICBuZXdEYXRlLnNldE1vbnRoKG5ld0RhdGUuZ2V0TW9udGgoKSArIDEpO1xuICBuZXdEYXRlLnNldERhdGUobmV3RGF0ZS5nZXREYXRlKCkgLSAxKTtcbiAgcmV0dXJuIG5ld0RhdGU7XG59XG5mdW5jdGlvbiBnZXRNb250aChkYXRlKSB7XG4gIHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxO1xufVxuZnVuY3Rpb24gZ2V0TW9udGhzKGxvY2FsZSkge1xuICByZXR1cm4gbmV3IEFycmF5KDEyKS5maWxsKHVuZGVmaW5lZCkubWFwKChfLCBtb250aCkgPT4ge1xuICAgIGNvbnN0IGRhdGUgPSByZW1vdmVUaW1lem9uZU9mZnNldChuZXcgRGF0ZShgMjAwNi0ke1N0cmluZyhtb250aCArIDEpLnBhZFN0YXJ0KDIsICcwJyl9LTAxYCkpO1xuICAgIHJldHVybiBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgbW9udGg6ICdsb25nJ1xuICAgIH0pLmZvcm1hdChkYXRlKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBnZXROZXh0RGF5KGRhdGUpIHtcbiAgcmV0dXJuIGFkZERheXMoZGF0ZSwgMSk7XG59XG5mdW5jdGlvbiBnZXROZXh0TW9udGgoZGF0ZSkge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIG5ld0RhdGUuc2V0TW9udGgobmV3RGF0ZS5nZXRNb250aCgpICsgMSk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuZnVuY3Rpb24gZ2V0TmV4dFllYXIoZGF0ZSkge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIG5ld0RhdGUuc2V0RnVsbFllYXIobmV3RGF0ZS5nZXRGdWxsWWVhcigpICsgMSk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuZnVuY3Rpb24gZ2V0UHJldmlvdXNEYXkoZGF0ZSkge1xuICByZXR1cm4gc3ViRGF5cyhkYXRlLCAxKTtcbn1cbmZ1bmN0aW9uIGdldFByZXZpb3VzTW9udGgoZGF0ZSkge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIG5ld0RhdGUuc2V0TW9udGgobmV3RGF0ZS5nZXRNb250aCgpIC0gMSk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuZnVuY3Rpb24gZ2V0UHJldmlvdXNZZWFyKGRhdGUpIHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBuZXdEYXRlLnNldEZ1bGxZZWFyKG5ld0RhdGUuZ2V0RnVsbFllYXIoKSAtIDEpO1xuICByZXR1cm4gbmV3RGF0ZTtcbn1cbmZ1bmN0aW9uIGdldFdlZWtEYXlzKGZpcnN0RGF5T2ZXZWVrLCBsb2NhbGUpIHtcbiAgcmV0dXJuIG5ldyBBcnJheSg3KVxuICAgIC5maWxsKHVuZGVmaW5lZClcbiAgICAubWFwKChfLCBpbmRleCkgPT4gKChmaXJzdERheU9mV2VlayArIGluZGV4KSAlIDcpICsgMSlcbiAgICAubWFwKChkYXkpID0+IHtcbiAgICBjb25zdCBkYXRlID0gcmVtb3ZlVGltZXpvbmVPZmZzZXQobmV3IERhdGUoYDIwMDYtMDEtMCR7ZGF5fWApKTtcbiAgICByZXR1cm4gW1xuICAgICAgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICAgICAgd2Vla2RheTogJ3Nob3J0J1xuICAgICAgfSkuZm9ybWF0KGRhdGUpLFxuICAgICAgSW50bC5EYXRlVGltZUZvcm1hdChsb2NhbGUsIHtcbiAgICAgICAgd2Vla2RheTogJ2xvbmcnXG4gICAgICB9KS5mb3JtYXQoZGF0ZSlcbiAgICBdO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGdldFllYXIoZGF0ZSkge1xuICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpO1xufVxuZnVuY3Rpb24gaXNEYXRlSW5SYW5nZShkYXRlLCByYW5nZSkge1xuICBpZiAoIWRhdGUgfHwgIXJhbmdlIHx8ICFyYW5nZS5mcm9tIHx8ICFyYW5nZS50bykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBlYXJseURhdGUgPSByYW5nZS5mcm9tIDwgcmFuZ2UudG8gPyByYW5nZS5mcm9tIDogcmFuZ2UudG87XG4gIGNvbnN0IGxhdGVyRGF0ZSA9IHJhbmdlLmZyb20gPCByYW5nZS50byA/IHJhbmdlLnRvIDogcmFuZ2UuZnJvbTtcbiAgcmV0dXJuIGRhdGUgPj0gZWFybHlEYXRlICYmIGRhdGUgPD0gbGF0ZXJEYXRlO1xufVxuZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGUxLCBkYXRlMikge1xuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKGRhdGUxLmdldEZ1bGxZZWFyKCkgPT09IGRhdGUyLmdldEZ1bGxZZWFyKCkgJiZcbiAgICBkYXRlMS5nZXRNb250aCgpID09PSBkYXRlMi5nZXRNb250aCgpICYmXG4gICAgZGF0ZTEuZ2V0RGF0ZSgpID09PSBkYXRlMi5nZXREYXRlKCkpO1xufVxuZnVuY3Rpb24gcmVtb3ZlVGltZXpvbmVPZmZzZXQoZGF0ZSkge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIG5ld0RhdGUuc2V0TWludXRlcyhuZXdEYXRlLmdldE1pbnV0ZXMoKSArIG5ld0RhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuZnVuY3Rpb24gc3ViRGF5cyhkYXRlLCBkYXlzKSB7XG4gIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcbiAgbmV3RGF0ZS5zZXREYXRlKG5ld0RhdGUuZ2V0RGF0ZSgpIC0gZGF5cyk7XG4gIHJldHVybiBuZXdEYXRlO1xufVxuXG5jb25zdCB3Y0RhdGVwaWNrZXJDc3MgPSBcIi52aXN1YWxseS1oaWRkZW4uc2Mtd2MtZGF0ZXBpY2tlcntwb3NpdGlvbjphYnNvbHV0ZTtvdmVyZmxvdzpoaWRkZW47d2lkdGg6MXB4O2hlaWdodDoxcHg7d2hpdGUtc3BhY2U6bm93cmFwO2NsaXA6cmVjdCgwIDAgMCAwKTstd2Via2l0LWNsaXAtcGF0aDppbnNldCg1MCUpO2NsaXAtcGF0aDppbnNldCg1MCUpfVwiO1xuXG5jb25zdCBkZWZhdWx0TGFiZWxzID0ge1xuICBjbGVhckJ1dHRvbjogJ0NsZWFyIHZhbHVlJyxcbiAgbW9udGhTZWxlY3Q6ICdTZWxlY3QgbW9udGgnLFxuICBuZXh0TW9udGhCdXR0b246ICdOZXh0IG1vbnRoJyxcbiAgbmV4dFllYXJCdXR0b246ICdOZXh0IHllYXInLFxuICBwaWNrZXI6ICdDaG9vc2UgZGF0ZScsXG4gIHByZXZpb3VzTW9udGhCdXR0b246ICdQcmV2aW91cyBtb250aCcsXG4gIHByZXZpb3VzWWVhckJ1dHRvbjogJ1ByZXZpb3VzIHllYXInLFxuICB0b2RheUJ1dHRvbjogJ1Nob3cgdG9kYXknLFxuICB5ZWFyU2VsZWN0OiAnU2VsZWN0IHllYXInXG59O1xuY29uc3QgV0NEYXRlcGlja2VyID0gLypAX19QVVJFX18qLyBwcm94eUN1c3RvbUVsZW1lbnQoY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fX3JlZ2lzdGVySG9zdCgpO1xuICAgIHRoaXMuc2VsZWN0RGF0ZSA9IGNyZWF0ZUV2ZW50KHRoaXMsIFwic2VsZWN0RGF0ZVwiLCA3KTtcbiAgICB0aGlzLmNoYW5nZU1vbnRoID0gY3JlYXRlRXZlbnQodGhpcywgXCJjaGFuZ2VNb250aFwiLCA3KTtcbiAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5kaXNhYmxlRGF0ZSA9ICgpID0+IGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudENsYXNzTmFtZSA9ICd3Yy1kYXRlcGlja2VyJztcbiAgICB0aGlzLmZpcnN0RGF5T2ZXZWVrID0gMDtcbiAgICB0aGlzLmxhYmVscyA9IGRlZmF1bHRMYWJlbHM7XG4gICAgdGhpcy5sb2NhbGUgPSAobmF2aWdhdG9yID09PSBudWxsIHx8IG5hdmlnYXRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmF2aWdhdG9yLmxhbmd1YWdlKSB8fCAnZW4tVVMnO1xuICAgIHRoaXMuc2hvd0NsZWFyQnV0dG9uID0gZmFsc2U7XG4gICAgdGhpcy5zaG93TW9udGhTdGVwcGVyID0gdHJ1ZTtcbiAgICB0aGlzLnNob3dUb2RheUJ1dHRvbiA9IGZhbHNlO1xuICAgIHRoaXMuc2hvd1llYXJTdGVwcGVyID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydERhdGUgPSBnZXRJU09EYXRlU3RyaW5nKG5ldyBEYXRlKCkpO1xuICAgIHRoaXMuaW5pdCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3VycmVudERhdGUgPSB0aGlzLnN0YXJ0RGF0ZVxuICAgICAgICA/IHJlbW92ZVRpbWV6b25lT2Zmc2V0KG5ldyBEYXRlKHRoaXMuc3RhcnREYXRlKSlcbiAgICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgICAgdGhpcy51cGRhdGVXZWVrZGF5cygpO1xuICAgIH07XG4gICAgdGhpcy5uZXh0TW9udGggPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldE5leHRNb250aCh0aGlzLmN1cnJlbnREYXRlKSk7XG4gICAgfTtcbiAgICB0aGlzLm5leHRZZWFyID0gKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXROZXh0WWVhcih0aGlzLmN1cnJlbnREYXRlKSk7XG4gICAgfTtcbiAgICB0aGlzLnByZXZpb3VzTW9udGggPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldFByZXZpb3VzTW9udGgodGhpcy5jdXJyZW50RGF0ZSkpO1xuICAgIH07XG4gICAgdGhpcy5wcmV2aW91c1llYXIgPSAoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldFByZXZpb3VzWWVhcih0aGlzLmN1cnJlbnREYXRlKSk7XG4gICAgfTtcbiAgICB0aGlzLnNob3dUb2RheSA9ICgpID0+IHtcbiAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUobmV3IERhdGUoKSk7XG4gICAgfTtcbiAgICB0aGlzLmNsZWFyID0gKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHVuZGVmaW5lZCk7XG4gICAgfTtcbiAgICB0aGlzLm9uQ2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1kYXRlXScpO1xuICAgICAgaWYgKCFCb29sZWFuKHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0ZSA9IHJlbW92ZVRpbWV6b25lT2Zmc2V0KG5ldyBEYXRlKHRhcmdldC5kYXRhc2V0LmRhdGUpKTtcbiAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZGF0ZSk7XG4gICAgICB0aGlzLm9uU2VsZWN0RGF0ZShkYXRlKTtcbiAgICB9O1xuICAgIHRoaXMub25Nb250aFNlbGVjdCA9IChldmVudCkgPT4ge1xuICAgICAgY29uc3QgbW9udGggPSArZXZlbnQudGFyZ2V0LnZhbHVlIC0gMTtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgIGRhdGUuc2V0TW9udGgobW9udGgpO1xuICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShkYXRlKTtcbiAgICB9O1xuICAgIHRoaXMub25ZZWFyU2VsZWN0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBsZXQgeWVhciA9ICtldmVudC50YXJnZXQudmFsdWU7XG4gICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGlmIChpc05hTih5ZWFyKSkge1xuICAgICAgICB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFN0cmluZyh5ZWFyKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHllYXIgPCAwKSB7XG4gICAgICAgIHllYXIgPSAwO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFN0cmluZyh5ZWFyKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHllYXIgPiA5OTk5KSB7XG4gICAgICAgIHllYXIgPSA5OTk5O1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFN0cmluZyh5ZWFyKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhcik7XG4gICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGRhdGUpO1xuICAgIH07XG4gICAgdGhpcy5vbktleURvd24gPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldFByZXZpb3VzRGF5KHRoaXMuY3VycmVudERhdGUpLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGdldE5leHREYXkodGhpcy5jdXJyZW50RGF0ZSksIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoc3ViRGF5cyh0aGlzLmN1cnJlbnREYXRlLCA3KSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5jb2RlID09PSAnQXJyb3dEb3duJykge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUN1cnJlbnREYXRlKGFkZERheXModGhpcy5jdXJyZW50RGF0ZSwgNyksIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ1BhZ2VVcCcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXRQcmV2aW91c1llYXIodGhpcy5jdXJyZW50RGF0ZSksIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMudXBkYXRlQ3VycmVudERhdGUoZ2V0UHJldmlvdXNNb250aCh0aGlzLmN1cnJlbnREYXRlKSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGV2ZW50LmNvZGUgPT09ICdQYWdlRG93bicpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXROZXh0WWVhcih0aGlzLmN1cnJlbnREYXRlKSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXROZXh0TW9udGgodGhpcy5jdXJyZW50RGF0ZSksIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5jb2RlID09PSAnSG9tZScpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXRGaXJzdE9mTW9udGgodGhpcy5jdXJyZW50RGF0ZSksIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZXZlbnQuY29kZSA9PT0gJ0VuZCcpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDdXJyZW50RGF0ZShnZXRMYXN0T2ZNb250aCh0aGlzLmN1cnJlbnREYXRlKSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChldmVudC5jb2RlID09PSAnU3BhY2UnIHx8IGV2ZW50LmNvZGUgPT09ICdFbnRlcicpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5vblNlbGVjdERhdGUodGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLm9uTW91c2VFbnRlciA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0ZSA9IHJlbW92ZVRpbWV6b25lT2Zmc2V0KG5ldyBEYXRlKGV2ZW50LnRhcmdldC5jbG9zZXN0KCd0ZCcpLmRhdGFzZXQuZGF0ZSkpO1xuICAgICAgdGhpcy5ob3ZlcmVkRGF0ZSA9IGRhdGU7XG4gICAgfTtcbiAgICB0aGlzLm9uTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuaG92ZXJlZERhdGUgPSB1bmRlZmluZWQ7XG4gICAgfTtcbiAgfVxuICBjb21wb25lbnRXaWxsTG9hZCgpIHtcbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICB3YXRjaEZpcnN0RGF5T2ZXZWVrKCkge1xuICAgIHRoaXMudXBkYXRlV2Vla2RheXMoKTtcbiAgfVxuICB3YXRjaExvY2FsZSgpIHtcbiAgICBpZiAoIUJvb2xlYW4odGhpcy5sb2NhbGUpKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IChuYXZpZ2F0b3IgPT09IG51bGwgfHwgbmF2aWdhdG9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYXZpZ2F0b3IubGFuZ3VhZ2UpIHx8ICdlbi1VUyc7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlV2Vla2RheXMoKTtcbiAgfVxuICB3YXRjaFJhbmdlKCkge1xuICAgIHRoaXMudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5zZWxlY3REYXRlLmVtaXQodW5kZWZpbmVkKTtcbiAgfVxuICB3YXRjaFN0YXJ0RGF0ZSgpIHtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gdGhpcy5zdGFydERhdGVcbiAgICAgID8gcmVtb3ZlVGltZXpvbmVPZmZzZXQobmV3IERhdGUodGhpcy5zdGFydERhdGUpKVxuICAgICAgOiBuZXcgRGF0ZSgpO1xuICB9XG4gIHdhdGNoVmFsdWUoKSB7XG4gICAgaWYgKEJvb2xlYW4odGhpcy52YWx1ZSkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpICYmIHRoaXMudmFsdWUubGVuZ3RoID49IDEpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RGF0ZSA9IHRoaXMudmFsdWVbMF07XG4gICAgICB9XG4gICAgICBlbHNlIGlmICh0aGlzLnZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICB0aGlzLmN1cnJlbnREYXRlID0gdGhpcy52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkUmVuZGVyKCkge1xuICAgIGlmICh0aGlzLm1vdmVGb2N1c0FmdGVyTW9udGhDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmZvY3VzRGF0ZSh0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgIHRoaXMubW92ZUZvY3VzQWZ0ZXJNb250aENoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgdXBkYXRlV2Vla2RheXMoKSB7XG4gICAgdGhpcy53ZWVrZGF5cyA9IGdldFdlZWtEYXlzKHRoaXMuZmlyc3REYXlPZldlZWsgPT09IDAgPyA3IDogdGhpcy5maXJzdERheU9mV2VlaywgdGhpcy5sb2NhbGUpO1xuICB9XG4gIGdldENsYXNzTmFtZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oZWxlbWVudClcbiAgICAgID8gYCR7dGhpcy5lbGVtZW50Q2xhc3NOYW1lfV9fJHtlbGVtZW50fWBcbiAgICAgIDogdGhpcy5lbGVtZW50Q2xhc3NOYW1lO1xuICB9XG4gIGdldENhbGVuZGFyUm93cygpIHtcbiAgICBjb25zdCBkYXlzT2ZNb250aCA9IGdldERheXNPZk1vbnRoKHRoaXMuY3VycmVudERhdGUsIHRydWUsIHRoaXMuZmlyc3REYXlPZldlZWsgPT09IDAgPyA3IDogdGhpcy5maXJzdERheU9mV2Vlayk7XG4gICAgY29uc3QgY2FsZW5kYXJSb3dzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlzT2ZNb250aC5sZW5ndGg7IGkgKz0gNykge1xuICAgICAgY29uc3Qgcm93ID0gZGF5c09mTW9udGguc2xpY2UoaSwgaSArIDcpO1xuICAgICAgY2FsZW5kYXJSb3dzLnB1c2gocm93KTtcbiAgICB9XG4gICAgcmV0dXJuIGNhbGVuZGFyUm93cztcbiAgfVxuICBnZXRUaXRsZSgpIHtcbiAgICBpZiAoIUJvb2xlYW4odGhpcy5jdXJyZW50RGF0ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIEludGwuRGF0ZVRpbWVGb3JtYXQodGhpcy5sb2NhbGUsIHtcbiAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgbW9udGg6ICdsb25nJyxcbiAgICAgIHllYXI6ICdudW1lcmljJ1xuICAgIH0pLmZvcm1hdCh0aGlzLmN1cnJlbnREYXRlKTtcbiAgfVxuICBmb2N1c0RhdGUoZGF0ZSkge1xuICAgIHZhciBfYTtcbiAgICAoX2EgPSB0aGlzLmVsXG4gICAgICAucXVlcnlTZWxlY3RvcihgW2RhdGEtZGF0ZT1cIiR7Z2V0SVNPRGF0ZVN0cmluZyhkYXRlKX1cIl1gKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZvY3VzKCk7XG4gIH1cbiAgdXBkYXRlQ3VycmVudERhdGUoZGF0ZSwgbW92ZUZvY3VzKSB7XG4gICAgY29uc3QgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICBpZiAoeWVhciA+IDk5OTkgfHwgeWVhciA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbW9udGhDaGFuZ2VkID0gbW9udGggIT09IHRoaXMuY3VycmVudERhdGUuZ2V0TW9udGgoKSB8fFxuICAgICAgeWVhciAhPT0gdGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGlmIChtb250aENoYW5nZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlTW9udGguZW1pdCh7IG1vbnRoOiBnZXRNb250aChkYXRlKSwgeWVhcjogZ2V0WWVhcihkYXRlKSB9KTtcbiAgICAgIGlmIChtb3ZlRm9jdXMpIHtcbiAgICAgICAgdGhpcy5tb3ZlRm9jdXNBZnRlck1vbnRoQ2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY3VycmVudERhdGUgPSBkYXRlO1xuICAgIGlmIChtb3ZlRm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXNEYXRlKHRoaXMuY3VycmVudERhdGUpO1xuICAgIH1cbiAgfVxuICBvblNlbGVjdERhdGUoZGF0ZSkge1xuICAgIHZhciBfYSwgX2I7XG4gICAgaWYgKHRoaXMuZGlzYWJsZURhdGUoZGF0ZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNSYW5nZVZhbHVlKHRoaXMudmFsdWUpKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9ICgoX2EgPSB0aGlzLnZhbHVlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF0pID09PSB1bmRlZmluZWQgfHwgdGhpcy52YWx1ZS5sZW5ndGggPT09IDJcbiAgICAgICAgPyBbZGF0ZV1cbiAgICAgICAgOiBbdGhpcy52YWx1ZVswXSwgZGF0ZV07XG4gICAgICBpZiAobmV3VmFsdWUubGVuZ3RoID09PSAyICYmIG5ld1ZhbHVlWzBdID4gbmV3VmFsdWVbMV0pIHtcbiAgICAgICAgbmV3VmFsdWUucmV2ZXJzZSgpO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNvVmFsdWUgPSBuZXdWYWx1ZVsxXSA9PT0gdW5kZWZpbmVkXG4gICAgICAgID8gW2dldElTT0RhdGVTdHJpbmcobmV3VmFsdWVbMF0pXVxuICAgICAgICA6IFtnZXRJU09EYXRlU3RyaW5nKG5ld1ZhbHVlWzBdKSwgZ2V0SVNPRGF0ZVN0cmluZyhuZXdWYWx1ZVsxXSldO1xuICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgdGhpcy5zZWxlY3REYXRlLmVtaXQoaXNvVmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmICgoKF9iID0gdGhpcy52YWx1ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmdldFRpbWUoKSkgPT09IGRhdGUuZ2V0VGltZSgpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUgPSBkYXRlO1xuICAgICAgdGhpcy5zZWxlY3REYXRlLmVtaXQoZ2V0SVNPRGF0ZVN0cmluZyhkYXRlKSk7XG4gICAgfVxuICB9XG4gIC8vIEB0cy1pZ25vcmVcbiAgaXNSYW5nZVZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMucmFuZ2U7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNob3dGb290ZXIgPSB0aGlzLnNob3dUb2RheUJ1dHRvbiB8fCB0aGlzLnNob3dDbGVhckJ1dHRvbjtcbiAgICByZXR1cm4gKGgoSG9zdCwgbnVsbCwgaChcImRpdlwiLCB7IFwiYXJpYS1kaXNhYmxlZFwiOiBTdHJpbmcodGhpcy5kaXNhYmxlZCksIFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVscy5waWNrZXIsIGNsYXNzOiB7XG4gICAgICAgIFt0aGlzLmdldENsYXNzTmFtZSgpXTogdHJ1ZSxcbiAgICAgICAgW2Ake3RoaXMuZ2V0Q2xhc3NOYW1lKCl9LS1kaXNhYmxlZGBdOiB0aGlzLmRpc2FibGVkXG4gICAgICB9LCByb2xlOiBcImdyb3VwXCIgfSwgaChcImRpdlwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnaGVhZGVyJykgfSwgaChcInNwYW5cIiwgeyBcImFyaWEtYXRvbWljXCI6IFwidHJ1ZVwiLCBcImFyaWEtbGl2ZVwiOiBcInBvbGl0ZVwiLCBjbGFzczogXCJ2aXN1YWxseS1oaWRkZW5cIiB9LCB0aGlzLmdldFRpdGxlKCkpLCB0aGlzLnNob3dZZWFyU3RlcHBlciAmJiAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVscy5wcmV2aW91c1llYXJCdXR0b24sIGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgncHJldmlvdXMteWVhci1idXR0b24nKSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIGlubmVySFRNTDogdGhpcy5wcmV2aW91c1llYXJCdXR0b25Db250ZW50IHx8IHVuZGVmaW5lZCwgb25DbGljazogdGhpcy5wcmV2aW91c1llYXIsIHR5cGU6IFwiYnV0dG9uXCIgfSwgaChcInN2Z1wiLCB7IGZpbGw6IFwibm9uZVwiLCBoZWlnaHQ6IFwiMjRcIiwgXCJzdHJva2UtbGluZWNhcFwiOiBcInJvdW5kXCIsIFwic3Ryb2tlLWxpbmVqb2luXCI6IFwicm91bmRcIiwgXCJzdHJva2Utd2lkdGhcIjogXCIyXCIsIHN0cm9rZTogXCJjdXJyZW50Q29sb3JcIiwgdmlld0JveDogXCIwIDAgMjQgMjRcIiwgd2lkdGg6IFwiMjRcIiB9LCBoKFwicG9seWxpbmVcIiwgeyBwb2ludHM6IFwiMTEgMTcgNiAxMiAxMSA3XCIgfSksIGgoXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCIxOCAxNyAxMyAxMiAxOCA3XCIgfSkpKSksIHRoaXMuc2hvd01vbnRoU3RlcHBlciAmJiAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVscy5wcmV2aW91c01vbnRoQnV0dG9uLCBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ3ByZXZpb3VzLW1vbnRoLWJ1dHRvbicpLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgaW5uZXJIVE1MOiB0aGlzLnByZXZpb3VzTW9udGhCdXR0b25Db250ZW50IHx8IHVuZGVmaW5lZCwgb25DbGljazogdGhpcy5wcmV2aW91c01vbnRoLCB0eXBlOiBcImJ1dHRvblwiIH0sIGgoXCJzdmdcIiwgeyBmaWxsOiBcIm5vbmVcIiwgaGVpZ2h0OiBcIjI0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIjogXCJyb3VuZFwiLCBcInN0cm9rZS1saW5lam9pblwiOiBcInJvdW5kXCIsIFwic3Ryb2tlLXdpZHRoXCI6IFwiMlwiLCBzdHJva2U6IFwiY3VycmVudENvbG9yXCIsIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsIHdpZHRoOiBcIjI0XCIgfSwgaChcInBvbHlsaW5lXCIsIHsgcG9pbnRzOiBcIjE1IDE4IDkgMTIgMTUgNlwiIH0pKSkpLCBoKFwic3BhblwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnY3VycmVudC1tb250aCcpIH0sIGgoXCJzZWxlY3RcIiwgeyBcImFyaWEtbGFiZWxcIjogdGhpcy5sYWJlbHMubW9udGhTZWxlY3QsIGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnbW9udGgtc2VsZWN0JyksIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBuYW1lOiBcIm1vbnRoXCIsIG9uQ2hhbmdlOiB0aGlzLm9uTW9udGhTZWxlY3QgfSwgZ2V0TW9udGhzKHRoaXMubG9jYWxlKS5tYXAoKG1vbnRoLCBpbmRleCkgPT4gKGgoXCJvcHRpb25cIiwgeyBrZXk6IG1vbnRoLCBzZWxlY3RlZDogdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpID09PSBpbmRleCwgdmFsdWU6IGluZGV4ICsgMSB9LCBtb250aCkpKSksIGgoXCJpbnB1dFwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVscy55ZWFyU2VsZWN0LCBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ3llYXItc2VsZWN0JyksIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBtYXg6IDk5OTksIG1heExlbmd0aDogNCwgbWluOiAxLCBuYW1lOiBcInllYXJcIiwgb25DaGFuZ2U6IHRoaXMub25ZZWFyU2VsZWN0LCB0eXBlOiBcIm51bWJlclwiLCB2YWx1ZTogdGhpcy5jdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpIH0pKSwgdGhpcy5zaG93TW9udGhTdGVwcGVyICYmIChoKFwiYnV0dG9uXCIsIHsgXCJhcmlhLWxhYmVsXCI6IHRoaXMubGFiZWxzLm5leHRNb250aEJ1dHRvbiwgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCduZXh0LW1vbnRoLWJ1dHRvbicpLCBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCwgaW5uZXJIVE1MOiB0aGlzLm5leHRNb250aEJ1dHRvbkNvbnRlbnQgfHwgdW5kZWZpbmVkLCBvbkNsaWNrOiB0aGlzLm5leHRNb250aCwgdHlwZTogXCJidXR0b25cIiB9LCBoKFwic3ZnXCIsIHsgZmlsbDogXCJub25lXCIsIGhlaWdodDogXCIyNFwiLCBcInN0cm9rZS1saW5lY2FwXCI6IFwicm91bmRcIiwgXCJzdHJva2UtbGluZWpvaW5cIjogXCJyb3VuZFwiLCBcInN0cm9rZS13aWR0aFwiOiBcIjJcIiwgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCB3aWR0aDogXCIyNFwiIH0sIGgoXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCI5IDE4IDE1IDEyIDkgNlwiIH0pKSkpLCB0aGlzLnNob3dZZWFyU3RlcHBlciAmJiAoaChcImJ1dHRvblwiLCB7IFwiYXJpYS1sYWJlbFwiOiB0aGlzLmxhYmVscy5uZXh0WWVhckJ1dHRvbiwgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCduZXh0LXllYXItYnV0dG9uJyksIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBpbm5lckhUTUw6IHRoaXMubmV4dFllYXJCdXR0b25Db250ZW50IHx8IHVuZGVmaW5lZCwgb25DbGljazogdGhpcy5uZXh0WWVhciwgdHlwZTogXCJidXR0b25cIiB9LCBoKFwic3ZnXCIsIHsgZmlsbDogXCJub25lXCIsIGhlaWdodDogXCIyNFwiLCBcInN0cm9rZS1saW5lY2FwXCI6IFwicm91bmRcIiwgXCJzdHJva2UtbGluZWpvaW5cIjogXCJyb3VuZFwiLCBcInN0cm9rZS13aWR0aFwiOiBcIjJcIiwgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLCB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLCB3aWR0aDogXCIyNFwiIH0sIGgoXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCIxMyAxNyAxOCAxMiAxMyA3XCIgfSksIGgoXCJwb2x5bGluZVwiLCB7IHBvaW50czogXCI2IDE3IDExIDEyIDYgN1wiIH0pKSkpKSwgaChcImRpdlwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnYm9keScpIH0sIGgoXCJ0YWJsZVwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnY2FsZW5kYXInKSwgb25LZXlEb3duOiB0aGlzLm9uS2V5RG93biwgcm9sZTogXCJncmlkXCIgfSwgaChcInRoZWFkXCIsIHsgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCdjYWxlbmRhci1oZWFkZXInKSB9LCBoKFwidHJcIiwgeyBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ3dlZWtkYXktcm93JykgfSwgdGhpcy53ZWVrZGF5cy5tYXAoKHdlZWtkYXkpID0+IChoKFwidGhcIiwgeyBhYmJyOiB3ZWVrZGF5WzFdLCBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ3dlZWtkYXknKSwga2V5OiB3ZWVrZGF5WzBdLCBzY29wZTogXCJjb2xcIiB9LCBoKFwic3BhblwiLCBudWxsLCB3ZWVrZGF5WzBdKSkpKSkpLCBoKFwidGJvZHlcIiwgbnVsbCwgdGhpcy5nZXRDYWxlbmRhclJvd3MoKS5tYXAoKGNhbGVuZGFyUm93KSA9PiB7XG4gICAgICBjb25zdCByb3dLZXkgPSBgcm93LSR7Y2FsZW5kYXJSb3dbMF0uZ2V0TW9udGgoKX0tJHtjYWxlbmRhclJvd1swXS5nZXREYXRlKCl9YDtcbiAgICAgIHJldHVybiAoaChcInRyXCIsIHsgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCdjYWxlbmRhci1yb3cnKSwga2V5OiByb3dLZXkgfSwgY2FsZW5kYXJSb3cubWFwKChkYXkpID0+IHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZTtcbiAgICAgICAgY29uc3QgaXNDdXJyZW50ID0gaXNTYW1lRGF5KGRheSwgdGhpcy5jdXJyZW50RGF0ZSk7XG4gICAgICAgIGNvbnN0IGlzT3ZlcmZsb3dpbmcgPSBkYXkuZ2V0TW9udGgoKSAhPT0gdGhpcy5jdXJyZW50RGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKVxuICAgICAgICAgID8gaXNTYW1lRGF5KGRheSwgdGhpcy52YWx1ZVswXSkgfHxcbiAgICAgICAgICAgIGlzU2FtZURheShkYXksIHRoaXMudmFsdWVbMV0pXG4gICAgICAgICAgOiBpc1NhbWVEYXkoZGF5LCB0aGlzLnZhbHVlKTtcbiAgICAgICAgY29uc3QgaXNJblJhbmdlID0gIXRoaXMuaXNSYW5nZVZhbHVlXG4gICAgICAgICAgPyBmYWxzZVxuICAgICAgICAgIDogaXNEYXRlSW5SYW5nZShkYXksIHtcbiAgICAgICAgICAgIGZyb206IChfYSA9IHRoaXMudmFsdWUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXSxcbiAgICAgICAgICAgIHRvOiAoKF9iID0gdGhpcy52YWx1ZSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iWzFdKSB8fFxuICAgICAgICAgICAgICB0aGlzLmhvdmVyZWREYXRlIHx8XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudERhdGVcbiAgICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb3JkZXJlZFZhbHVlcyA9IEJvb2xlYW4oKF9jID0gdGhpcy52YWx1ZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jWzBdKVxuICAgICAgICAgID8gW1xuICAgICAgICAgICAgKF9kID0gdGhpcy52YWx1ZSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kWzBdLFxuICAgICAgICAgICAgKChfZSA9IHRoaXMudmFsdWUpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZVsxXSkgfHwgdGhpcy5ob3ZlcmVkRGF0ZVxuICAgICAgICAgIF0uc29ydCgoYSwgYikgPT4gYSAtIGIpXG4gICAgICAgICAgOiBbXTtcbiAgICAgICAgY29uc3QgaXNTdGFydCA9IHRoaXMucmFuZ2UgJiYgaXNTYW1lRGF5KG9yZGVyZWRWYWx1ZXNbMF0sIGRheSk7XG4gICAgICAgIGNvbnN0IGlzRW5kID0gdGhpcy5yYW5nZSAmJiBpc1NhbWVEYXkob3JkZXJlZFZhbHVlc1sxXSwgZGF5KTtcbiAgICAgICAgY29uc3QgaXNUb2RheSA9IGlzU2FtZURheShkYXksIG5ldyBEYXRlKCkpO1xuICAgICAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy5kaXNhYmxlRGF0ZShkYXkpO1xuICAgICAgICBjb25zdCBjZWxsS2V5ID0gYGNlbGwtJHtkYXkuZ2V0TW9udGgoKX0tJHtkYXkuZ2V0RGF0ZSgpfWA7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IHtcbiAgICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoJ2RhdGUnKV06IHRydWUsXG4gICAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCdkYXRlLS1jdXJyZW50JyldOiBpc0N1cnJlbnQsXG4gICAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCdkYXRlLS1kaXNhYmxlZCcpXTogaXNEaXNhYmxlZCxcbiAgICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoJ2RhdGUtLW92ZXJmbG93aW5nJyldOiBpc092ZXJmbG93aW5nLFxuICAgICAgICAgIFt0aGlzLmdldENsYXNzTmFtZSgnZGF0ZS0tdG9kYXknKV06IGlzVG9kYXksXG4gICAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCdkYXRlLS1zZWxlY3RlZCcpXTogaXNTZWxlY3RlZCxcbiAgICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoJ2RhdGUtLWluLXJhbmdlJyldOiBpc0luUmFuZ2UsXG4gICAgICAgICAgW3RoaXMuZ2V0Q2xhc3NOYW1lKCdkYXRlLS1zdGFydCcpXTogaXNTdGFydCxcbiAgICAgICAgICBbdGhpcy5nZXRDbGFzc05hbWUoJ2RhdGUtLWVuZCcpXTogaXNFbmRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgVGFnID0gaXNTZWxlY3RlZFxuICAgICAgICAgID8gJ3N0cm9uZydcbiAgICAgICAgICA6IGlzVG9kYXlcbiAgICAgICAgICAgID8gJ2VtJ1xuICAgICAgICAgICAgOiAnc3Bhbic7XG4gICAgICAgIHJldHVybiAoaChcInRkXCIsIHsgXCJhcmlhLWRpc2FibGVkXCI6IFN0cmluZyhpc0Rpc2FibGVkKSwgXCJhcmlhLXNlbGVjdGVkXCI6IGlzU2VsZWN0ZWQgPyAndHJ1ZScgOiB1bmRlZmluZWQsIGNsYXNzOiBjbGFzc05hbWUsIFwiZGF0YS1kYXRlXCI6IGdldElTT0RhdGVTdHJpbmcoZGF5KSwga2V5OiBjZWxsS2V5LCBvbkNsaWNrOiB0aGlzLm9uQ2xpY2ssIG9uTW91c2VFbnRlcjogdGhpcy5vbk1vdXNlRW50ZXIsIG9uTW91c2VMZWF2ZTogdGhpcy5vbk1vdXNlTGVhdmUsIHJvbGU6IFwiZ3JpZGNlbGxcIiwgdGFiSW5kZXg6IGlzU2FtZURheShkYXksIHRoaXMuY3VycmVudERhdGUpICYmICF0aGlzLmRpc2FibGVkXG4gICAgICAgICAgICA/IDBcbiAgICAgICAgICAgIDogLTEgfSwgaChUYWcsIHsgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIiB9LCBkYXkuZ2V0RGF0ZSgpKSwgaChcInNwYW5cIiwgeyBjbGFzczogXCJ2aXN1YWxseS1oaWRkZW5cIiB9LCBJbnRsLkRhdGVUaW1lRm9ybWF0KHRoaXMubG9jYWxlLCB7XG4gICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgbW9udGg6ICdsb25nJ1xuICAgICAgICB9KS5mb3JtYXQoZGF5KSkpKTtcbiAgICAgIH0pKSk7XG4gICAgfSkpKSksIHNob3dGb290ZXIgJiYgKGgoXCJkaXZcIiwgeyBjbGFzczogdGhpcy5nZXRDbGFzc05hbWUoJ2Zvb3RlcicpIH0sIHRoaXMuc2hvd1RvZGF5QnV0dG9uICYmIChoKFwiYnV0dG9uXCIsIHsgY2xhc3M6IHRoaXMuZ2V0Q2xhc3NOYW1lKCd0b2RheS1idXR0b24nKSwgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsIGlubmVySFRNTDogdGhpcy50b2RheUJ1dHRvbkNvbnRlbnQgfHwgdW5kZWZpbmVkLCBvbkNsaWNrOiB0aGlzLnNob3dUb2RheSwgdHlwZTogXCJidXR0b25cIiB9LCB0aGlzLmxhYmVscy50b2RheUJ1dHRvbikpLCB0aGlzLnNob3dDbGVhckJ1dHRvbiAmJiAoaChcImJ1dHRvblwiLCB7IGNsYXNzOiB0aGlzLmdldENsYXNzTmFtZSgnY2xlYXItYnV0dG9uJyksIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLCBpbm5lckhUTUw6IHRoaXMuY2xlYXJCdXR0b25Db250ZW50IHx8IHVuZGVmaW5lZCwgb25DbGljazogdGhpcy5jbGVhciwgdHlwZTogXCJidXR0b25cIiB9LCB0aGlzLmxhYmVscy5jbGVhckJ1dHRvbikpKSkpKSk7XG4gIH1cbiAgZ2V0IGVsKCkgeyByZXR1cm4gdGhpczsgfVxuICBzdGF0aWMgZ2V0IHdhdGNoZXJzKCkgeyByZXR1cm4ge1xuICAgIFwiZmlyc3REYXlPZldlZWtcIjogW1wid2F0Y2hGaXJzdERheU9mV2Vla1wiXSxcbiAgICBcImxvY2FsZVwiOiBbXCJ3YXRjaExvY2FsZVwiXSxcbiAgICBcInJhbmdlXCI6IFtcIndhdGNoUmFuZ2VcIl0sXG4gICAgXCJzdGFydERhdGVcIjogW1wid2F0Y2hTdGFydERhdGVcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbXCJ3YXRjaFZhbHVlXCJdXG4gIH07IH1cbiAgc3RhdGljIGdldCBzdHlsZSgpIHsgcmV0dXJuIHdjRGF0ZXBpY2tlckNzczsgfVxufSwgWzIsIFwid2MtZGF0ZXBpY2tlclwiLCB7XG4gICAgXCJjbGVhckJ1dHRvbkNvbnRlbnRcIjogWzEsIFwiY2xlYXItYnV0dG9uLWNvbnRlbnRcIl0sXG4gICAgXCJkaXNhYmxlZFwiOiBbNF0sXG4gICAgXCJkaXNhYmxlRGF0ZVwiOiBbMTZdLFxuICAgIFwiZWxlbWVudENsYXNzTmFtZVwiOiBbMSwgXCJlbGVtZW50LWNsYXNzLW5hbWVcIl0sXG4gICAgXCJmaXJzdERheU9mV2Vla1wiOiBbMiwgXCJmaXJzdC1kYXktb2Ytd2Vla1wiXSxcbiAgICBcInJhbmdlXCI6IFs0XSxcbiAgICBcImxhYmVsc1wiOiBbMTZdLFxuICAgIFwibG9jYWxlXCI6IFsxXSxcbiAgICBcIm5leHRNb250aEJ1dHRvbkNvbnRlbnRcIjogWzEsIFwibmV4dC1tb250aC1idXR0b24tY29udGVudFwiXSxcbiAgICBcIm5leHRZZWFyQnV0dG9uQ29udGVudFwiOiBbMSwgXCJuZXh0LXllYXItYnV0dG9uLWNvbnRlbnRcIl0sXG4gICAgXCJwcmV2aW91c01vbnRoQnV0dG9uQ29udGVudFwiOiBbMSwgXCJwcmV2aW91cy1tb250aC1idXR0b24tY29udGVudFwiXSxcbiAgICBcInByZXZpb3VzWWVhckJ1dHRvbkNvbnRlbnRcIjogWzEsIFwicHJldmlvdXMteWVhci1idXR0b24tY29udGVudFwiXSxcbiAgICBcInNob3dDbGVhckJ1dHRvblwiOiBbNCwgXCJzaG93LWNsZWFyLWJ1dHRvblwiXSxcbiAgICBcInNob3dNb250aFN0ZXBwZXJcIjogWzQsIFwic2hvdy1tb250aC1zdGVwcGVyXCJdLFxuICAgIFwic2hvd1RvZGF5QnV0dG9uXCI6IFs0LCBcInNob3ctdG9kYXktYnV0dG9uXCJdLFxuICAgIFwic2hvd1llYXJTdGVwcGVyXCI6IFs0LCBcInNob3cteWVhci1zdGVwcGVyXCJdLFxuICAgIFwic3RhcnREYXRlXCI6IFsxLCBcInN0YXJ0LWRhdGVcIl0sXG4gICAgXCJ0b2RheUJ1dHRvbkNvbnRlbnRcIjogWzEsIFwidG9kYXktYnV0dG9uLWNvbnRlbnRcIl0sXG4gICAgXCJ2YWx1ZVwiOiBbMTA0MF0sXG4gICAgXCJjdXJyZW50RGF0ZVwiOiBbMzJdLFxuICAgIFwiaG92ZXJlZERhdGVcIjogWzMyXSxcbiAgICBcIndlZWtkYXlzXCI6IFszMl1cbiAgfV0pO1xuZnVuY3Rpb24gZGVmaW5lQ3VzdG9tRWxlbWVudCQxKCkge1xuICBpZiAodHlwZW9mIGN1c3RvbUVsZW1lbnRzID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGNvbXBvbmVudHMgPSBbXCJ3Yy1kYXRlcGlja2VyXCJdO1xuICBjb21wb25lbnRzLmZvckVhY2godGFnTmFtZSA9PiB7IHN3aXRjaCAodGFnTmFtZSkge1xuICAgIGNhc2UgXCJ3Yy1kYXRlcGlja2VyXCI6XG4gICAgICBpZiAoIWN1c3RvbUVsZW1lbnRzLmdldCh0YWdOYW1lKSkge1xuICAgICAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUodGFnTmFtZSwgV0NEYXRlcGlja2VyKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9IH0pO1xufVxuXG5jb25zdCBXY0RhdGVwaWNrZXIgPSBXQ0RhdGVwaWNrZXI7XG5jb25zdCBkZWZpbmVDdXN0b21FbGVtZW50ID0gZGVmaW5lQ3VzdG9tRWxlbWVudCQxO1xuXG5leHBvcnQgeyBXY0RhdGVwaWNrZXIsIGRlZmluZUN1c3RvbUVsZW1lbnQgfTtcbiIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiO1xyXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5pbXBvcnQgeyBtb2RpZnlEdWVEYXRlfSAgZnJvbSBcIi4vdG9kb0NyZWF0b3JcIjtcclxuaW1wb3J0IHsgV2NEYXRlcGlja2VyIH0gZnJvbSBcIndjLWRhdGVwaWNrZXIvZGlzdC9jb21wb25lbnRzL3djLWRhdGVwaWNrZXJcIlxyXG5pbXBvcnQgXCJ3Yy1kYXRlcGlja2VyL2Rpc3QvdGhlbWVzL2RhcmsuY3NzXCI7XHJcbmltcG9ydCB7IGVhY2hXZWVrT2ZJbnRlcnZhbCB9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG4vLyBjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ3Yy1kYXRlcGlja2VyXCIsIFdjRGF0ZXBpY2tlcik7XHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xEdWVEYXRlQ2hhbmdlKGVsZW1lbnQsIGluZGV4KXtcclxuICAgIGxldCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgLy8gY29uc3QgYnV0dG9ucyA9IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ107XHJcbiAgICBjb25zdCBjb3JyZWN0SW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm9yZGVyID09IGluZGV4KVxyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGRhdGVQaWNrZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnd2MtZGF0ZXBpY2tlcicsICdkYXRlLXBpY2tlcicsICdkYXRlcGlja2VyJylcclxuICAgIGRhdGVQaWNrZXIuY2xhc3NMaXN0LmFkZCgnZWRpdC1kdWUtZGF0ZScpXHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IHRvZG9zW2NvcnJlY3RJbmRleF0uZHVlRGF0ZSBcclxuICAgIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKCdzdGFydC1kYXRlJywgYCR7Y3VycmVudERhdGV9YClcclxuICAgIC8vIGRhdGVQaWNrZXIuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke0RhdGUoJzIwMjQtMDEtMDQnKX1gKVxyXG4gICAgZGF0ZVBpY2tlci52YWx1ZSA9IG5ldyBEYXRlKGAke2N1cnJlbnREYXRlLnJlcGxhY2VBbGwoJy0nLCAnLycpfWApXHJcblxyXG4gICAgZGF0ZVBpY2tlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgIGRhdGVQaWNrZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgZGF0ZVBpY2tlci5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4gICAgZGF0ZVBpY2tlci5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7IFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICAgICBkYXRlUGlja2VyLnJlbW92ZSgpXHJcbiAgICB9KVxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGF0ZUNoYW5nZSgpe1xyXG4gICAgICAgIGRhdGVQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0RGF0ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxyXG4gICAgICAgICAgICBjb25zdCBkYXRlcGlja2VkID0gZXZlbnQuZGV0YWlsXHJcbiAgICAgICAgICAgIG1vZGlmeUR1ZURhdGUoaW5kZXgsIGRhdGVwaWNrZWQpXHJcbiAgICAgICAgICAgIGRhdGVQaWNrZXIucmVtb3ZlKClcclxuICAgICAgICAgICAgLy8gZGlzcGxheVRhc2tzKHRvZG9zKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvcylcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRhdGVQaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIGhhbmRsZURhdGVDaGFuZ2UoKVxyXG4gICAgfSkgICAgXHJcbiAgICBcclxufSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiO1xyXG5pbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5pbXBvcnQgeyBtb2RpZnlMaXN0IH0gZnJvbSBcIi4vdG9kb0NyZWF0b3JcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpc3RPcHRpb25zKGxpc3RzKXtcclxuICAgIGNvbnN0IGxpc3RJbnB1dCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2xpc3RJbnB1dCcpXHJcbiAgICBcclxuICAgIHdoaWxlIChsaXN0SW5wdXQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGxpc3RJbnB1dC5yZW1vdmVDaGlsZChsaXN0SW5wdXQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaXN0QXJyYXkgPSBsaXN0cy5tYXAoIGxpc3QgPT4gbGlzdC5saXN0TmFtZSlcclxuICAgIGxpc3RBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLiBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ29wdGlvbicsICdvcHRpb24taW5wdXQnLCBgbGlzdCR7bGlzdEFycmF5LmluZGV4T2YoaXRlbSl9YClcclxuICAgICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0gaXRlbVxyXG4gICAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtXHJcbiAgICAgICAgbGlzdElucHV0LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXHJcbn0pXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNvbnRyb2xMaXN0Q2hhbmdlKGVsZW1lbnQsIGluZGV4LCBsaXN0cywgdG9kb3Mpe1xyXG4gICAgXHJcbiAgICBjb25zdCBidXR0b25zID0gbGlzdHMubWFwKCBsaXN0ID0+IGxpc3QubGlzdE5hbWUpO1xyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IGNoYW5nZUxpc3QgPSBpbnRlcmFjdERPTSgpLmdlbmVyYXRlTGlzdE9wdGlvbnMoe3RvcCwgbGVmdH0sIGJ1dHRvbnMsICdsaXN0JylcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBjaGFuZ2VMaXN0LnJlbW92ZSgpXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICAvLyBjaGFuZ2VQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XHJcbiAgICAvLyAgICAgc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCkge2NoYW5nZVByaW9yaXR5LnJlbW92ZSgpfSwgNTAwKVxyXG4gICAgLy8gfSlcclxuICAgIGNoYW5nZUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2UtbGlzdC1idXR0b24nKSl7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICBtb2RpZnlMaXN0KGluZGV4LCBgJHtlLnRhcmdldC52YWx1ZX1gLCB0b2RvcylcclxuICAgICAgICAgICAgLy8gIGludGVyYWN0RE9NKCkuaGlkZShjaGFuZ2VTdGF0dXMpO1xyXG4gICAgICAgICAgICBjaGFuZ2VMaXN0LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICBkaXNwbGF5VGFza3ModG9kb3MpICBcclxuICAgICAgICB9XHJcbiAgICAgfSlcclxufVxyXG5cclxuZXhwb3J0IHsgdXBkYXRlTGlzdE9wdGlvbnMsIGNvbnRyb2xMaXN0Q2hhbmdlIH0iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIjtcclxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuaW1wb3J0IHsgbW9kaWZ5UHJpb3JpdHkgfSAgZnJvbSBcIi4vdG9kb0NyZWF0b3JcIjtcclxuaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hhbmRsZVNhdmVMb2dpY1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udHJvbFByaW9yaXR5Q2hhbmdlKGVsZW1lbnQsIGluZGV4KXtcclxuICAgIGxldCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgY29uc3QgYnV0dG9ucyA9IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ107XHJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgY29uc3QgY2hhbmdlUHJpb3JpdHkgPSBpbnRlcmFjdERPTSgpLmdlbmVyYXRlTGlzdE9wdGlvbnMoe3RvcCwgbGVmdH0sIGJ1dHRvbnMsICdwcmlvcml0eScpXHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT57XHJcbiAgICAgICAgY2hhbmdlUHJpb3JpdHkucmVtb3ZlKClcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIGNoYW5nZVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBlID0+IHtcclxuICAgIC8vICAgICBzZXRJbnRlcnZhbCggZnVuY3Rpb24oKSB7Y2hhbmdlUHJpb3JpdHkucmVtb3ZlKCl9LCA1MDApXHJcbiAgICAvLyB9KVxyXG4gICAgY2hhbmdlUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2UtcHJpb3JpdHktYnV0dG9uJykpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgbW9kaWZ5UHJpb3JpdHkoaW5kZXgsIGAke2UudGFyZ2V0LnZhbHVlfWApXHJcbiAgICAgICAgICAgIC8vICBpbnRlcmFjdERPTSgpLmhpZGUoY2hhbmdlU3RhdHVzKTtcclxuICAgICAgICAgICAgLy8gY2hhbmdlUHJpb3JpdHkucmVtb3ZlKClcclxuICAgICAgICAgICAgLy8gIGRpc3BsYXlUYXNrcyh0b2RvcykgIFxyXG4gICAgICAgIH1cclxuICAgICB9KVxyXG59IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCI7XHJcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcbmltcG9ydCB7IG1vZGlmeVN0YXR1cyB9ICBmcm9tIFwiLi90b2RvQ3JlYXRvclwiO1xyXG5pbXBvcnQgeyBnZXRGcm9tTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250cm9sU3RhdHVzQ2hhbmdlKGVsZW1lbnQsIGluZGV4KXtcclxuICAgIGxldCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgY29uc3QgYnV0dG9ucyA9IFsndG8tZG8nLCAnZG9pbmcnLCAnZG9uZScsICd3b250IGRvJ107XHJcbiAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVN0YXR1cyA9IGludGVyYWN0RE9NKCkuZ2VuZXJhdGVMaXN0T3B0aW9ucyh7dG9wLCBsZWZ0fSwgYnV0dG9ucywgJ3N0YXR1cycpXHJcbiAgICAvLyBjb25zdCBjaGFuZ2VTdGF0dXMgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdjaGFuZ2VTdGF0dXMnKVxyXG4gICAgLy8gY29uc3QgY2hhbmdlU3RhdHVzID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICdjaGFuZ2Utc3RhdHVzJywgJ2NoYW5nZVN0YXR1cycpXHJcbiAgICAvLyAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcclxuICAgIC8vICAgICAgIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2NoYW5nZS1zdGF0dXMtYnV0dG9uJywgYCR7YnV0dG9uc1tidXR0b25zLmluZGV4T2YoYnV0dG9uKV19I2lkYClcclxuICAgIC8vICAgICAgIGJ1dHRvbkVsZW1lbnQudmFsdWUgPSBidXR0b247XHJcbiAgICAvLyAgICAgICBidXR0b25FbGVtZW50LnRleHRDb250ZW50ID0gYnV0dG9uO1xyXG4gICAgLy8gICAgICAgY2hhbmdlU3RhdHVzLmFwcGVuZENoaWxkKGJ1dHRvbkVsZW1lbnQpO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gLy8gaW50ZXJhY3RET00oKS50b2dnbGVFbGVtZW50RGlzcGxheShjaGFuZ2VTdGF0dXMpXHJcbiAgICAvLyBjaGFuZ2VTdGF0dXMuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICAvLyBjaGFuZ2VTdGF0dXMuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgLy8gY2hhbmdlU3RhdHVzLnN0eWxlLnRvcCA9IGAke3RvcH1weGA7XHJcbiAgICAvLyBjaGFuZ2VTdGF0dXMuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgOyBcclxuICAgIC8vIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2hhbmdlU3RhdHVzKTtcclxuXHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBjaGFuZ2VTdGF0dXMucmVtb3ZlKClcclxuICAgICAgICBcclxuICAgIH0pXHJcbiAgICBcclxuICAgIC8vIGNoYW5nZVN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZSA9PiB7XHJcbiAgICAvLyAgICAgc2V0SW50ZXJ2YWwoIGZ1bmN0aW9uKCkge2NoYW5nZVN0YXR1cy5yZW1vdmUoKX0sIDUwMClcclxuICAgIC8vIH0pXHJcblxyXG5cclxuICAgIGNoYW5nZVN0YXR1cy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoYW5nZS1zdGF0dXMtYnV0dG9uJykpe1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgbW9kaWZ5U3RhdHVzKGluZGV4LCBgJHtlLnRhcmdldC52YWx1ZX1gKVxyXG4gICAgICAgICAgICAvLyAgaW50ZXJhY3RET00oKS5oaWRlKGNoYW5nZVN0YXR1cyk7XHJcbiAgICAgICAgICAgIGNoYW5nZVN0YXR1cy5yZW1vdmUoKVxyXG4gICAgICAgICAgICAvLyAgZGlzcGxheVRhc2tzKHRvZG9zKSAgXHJcbiAgICAgICAgfVxyXG4gICAgIH0pXHJcbn0iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIjtcclxuaW1wb3J0IGRpc3BsYXlUYXNrcyBmcm9tIFwiLi9kaXNwbGF5VGFza3NcIjtcclxuaW1wb3J0IHsgbW9kaWZ5VGFza30gIGZyb20gXCIuL3RvZG9DcmVhdG9yXCI7XHJcbmltcG9ydCB7IGFkZFRvTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCI7XHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRyb2xUYXNrQ2hhbmdlKGVsZW1lbnQsIGluZGV4KXtcclxuICAgIGxldCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgLy8gY29uc3QgYnV0dG9ucyA9IFsnbG93JywgJ21lZGl1bScsICdoaWdoJ107XHJcbiAgICBjb25zdCBjb3JyZWN0SW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm9yZGVyID09IGluZGV4KVxyXG4gICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgIGNvbnN0IGNoYW5nZVRhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaW5wdXQnLCAnY2hhbmdlLXRhc2staW5wdXQnLCAnY2hhbmdlVGFza0lucHV0JylcclxuICAgIGNoYW5nZVRhc2sudHlwZSA9ICd0ZXh0J1xyXG4gICAgY29uc3QgdGFza1ZhbHVlID0gYCR7dG9kb3NbY29ycmVjdEluZGV4XS50YXNrfWBcclxuICAgIGNoYW5nZVRhc2sudmFsdWUgPSB0YXNrVmFsdWVcclxuICAgIFxyXG4gICAgY2hhbmdlVGFzay5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgIGNoYW5nZVRhc2suc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgY2hhbmdlVGFzay5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4gICAgY2hhbmdlVGFzay5zdHlsZS5sZWZ0ID0gYCR7bGVmdH1weGA7IFxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjaGFuZ2VUYXNrKTtcclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PntcclxuICAgICAgICBpZighZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGFuZ2UtdGFzay1pbnB1dCcpICYmIGRvY3VtZW50LmNvbnRhaW5zKGNoYW5nZVRhc2spKXtcclxuICAgICAgICAgICAgbW9kaWZ5VGFzayhpbmRleCwgYCR7Y2hhbmdlVGFzay52YWx1ZX1gKVxyXG4gICAgICAgICAgICBjaGFuZ2VUYXNrLnJlbW92ZSgpXHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXlUYXNrcyh0b2RvcylcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICBjaGFuZ2VUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcclxuICAgICAgICBpZihlLmtleUNvZGUgPT0gMTMpe1xyXG4gICAgICAgICAgICBtb2RpZnlUYXNrKGluZGV4LCBgJHtjaGFuZ2VUYXNrLnZhbHVlfWApXHJcbiAgICAgICAgICAgIGNoYW5nZVRhc2sucmVtb3ZlKClcclxuICAgICAgICAgICAgLy8gZGlzcGxheVRhc2tzKHRvZG9zKSBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgLy8gY2hhbmdlUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGUgPT4ge1xyXG4gICAgLy8gICAgIHNldEludGVydmFsKCBmdW5jdGlvbigpIHtjaGFuZ2VQcmlvcml0eS5yZW1vdmUoKX0sIDUwMClcclxuICAgIC8vIH0pXHJcbiAgICAvLyBjaGFuZ2VQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgLy8gICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NoYW5nZS1wcmlvcml0eS1idXR0b24nKSl7XHJcbiAgICAvLyAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyAgICAgICAgICBtb2RpZnlQcmlvcml0eShpbmRleCwgYCR7ZS50YXJnZXQudmFsdWV9YCwgdG9kb3MpXHJcbiAgICAvLyAgICAgICAgIC8vICBpbnRlcmFjdERPTSgpLmhpZGUoY2hhbmdlU3RhdHVzKTtcclxuICAgIC8vICAgICAgICAgY2hhbmdlUHJpb3JpdHkucmVtb3ZlKClcclxuICAgIC8vICAgICAgICAgIGRpc3BsYXlUYXNrcyh0b2RvcykgIFxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICB9KVxyXG59IiwiaW1wb3J0IGRpc3BsYXlMaXN0cyBmcm9tIFwiLi9kaXNwbGF5TGlzdHNcIlxyXG5cclxuY29uc3QgbGlzdHMgPSBbXVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeUxpc3QgKGluZGV4LCBsaXN0VmFsdWUsIGxpc3RzKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gY3JlYXRlTGlzdChgJHtsaXN0VmFsdWV9YClcclxuICAgIFxyXG4gICAgbGlzdHMuc3BsaWNlKGluZGV4LCAxLCBsaXN0KVxyXG5cclxuICAgIGRpc3BsYXlMaXN0cyhsaXN0cylcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGlzdCAobGlzdE5hbWUpe1xyXG4gICAgbGV0IGxpc3QgPSB7XHJcbiAgICAgICAgbGlzdE5hbWVcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBsaXN0KVxyXG59XHJcblxyXG5leHBvcnQgeyBtb2RpZnlMaXN0LCBjcmVhdGVMaXN0IH0iLCJpbXBvcnQgaW50ZXJhY3RET00gZnJvbSBcIi4vaW50ZXJhY3REb21cIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUxpc3RzKGFycmF5KXtcclxuICAgIGNvbnN0IGxpc3RzVmlldyA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2xpc3RzVmlldycpXHJcbiAgICBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2xpc3RzJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICAvLyBpbnRlcmFjdERPTSgpLnJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMoJ2RlbGV0ZS10YXNrJykuZm9yRWFjaChlID0+IGUucmVtb3ZlKCkpXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnc2VjdGlvbicsICdsaXN0cycsIGBsaXN0JHtpfWApXHJcbiAgICAgICAgLy8gbGV0IGNoZWNrVGFzayA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnY2hlY2stdGFzaycsIGBjaGVja3Rhc2sjJHtpfWApXHJcbiAgICAgICAgLy8gbGV0IGRlbGV0ZVRhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2RlbGV0ZS10YXNrJywgYCR7aX1gKVxyXG4gICAgICAgIC8vIGxldCBkZWxldGVJbWFnZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnZGVsZXRlLWltYWdlJywgJ2RlbGV0ZUltYWdlJylcclxuICAgICAgICAvLyBkZWxldGVJbWFnZS5zcmMgPSB4XHJcbiAgICAgICAgLy8gZGVsZXRlVGFzay5hcHBlbmRDaGlsZChkZWxldGVJbWFnZSlcclxuICAgICAgICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tUYXNrKVxyXG4gICAgICAgIGludGVyYWN0RE9NKCkuYXBwZW5kTGlzdEVsZW1lbnRhbmREZWZpbmVDb250ZW50KGNvbnRhaW5lciwgYXJyYXlbaV0sIGkpXHJcbiAgICAgICAgbGlzdHNWaWV3LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuICAgICAgICAvLyBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzaylcclxuICAgIH1cclxufSIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiXHJcbi8vIGltcG9ydCBsb29wVG9kb3MgZnJvbSBcIi4vbG9vcFRvZG9zXCJcclxuaW1wb3J0IHggZnJvbSAnLi9jcm9zc2VkLnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrcyhhcnJheSl7XHJcbiAgICBjb25zdCB0b2Rvc1ZpZXcgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCd0b2Rvc1ZpZXcnKVxyXG4gICAgaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCd0b2RvcycpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKVxyXG4gICAgaW50ZXJhY3RET00oKS5yZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzKCdkZWxldGUtdGFzaycpLmZvckVhY2goZSA9PiBlLnJlbW92ZSgpKVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICBsZXQgY29udGFpbmVyID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2RpdicsICd0b2RvcycsIGB0b2RvJHthcnJheVtpXS5vcmRlcn1gKVxyXG4gICAgICAgIGxldCBjaGVja1Rhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2NoZWNrLXRhc2snLCBgY2hlY2t0YXNrIyR7aX1gKVxyXG4gICAgICAgIGxldCBkZWxldGVUYXNrID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2J1dHRvbicsICdkZWxldGUtdGFzaycsIGAke2l9YClcclxuICAgICAgICBsZXQgZGVsZXRlSW1hZ2UgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnaW1nJywgJ2RlbGV0ZS1pbWFnZScsICdkZWxldGVJbWFnZScpXHJcbiAgICAgICAgZGVsZXRlSW1hZ2Uuc3JjID0geFxyXG4gICAgICAgIGRlbGV0ZVRhc2suYXBwZW5kQ2hpbGQoZGVsZXRlSW1hZ2UpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrVGFzaylcclxuICAgICAgICBpbnRlcmFjdERPTSgpLmFwcGVuZEVsZW1lbnRBbmREZWZpbmVDb250ZW50KGNvbnRhaW5lciwgYXJyYXlbaV0sIGFycmF5W2ldLm9yZGVyKVxyXG4gICAgICAgIHRvZG9zVmlldy5hcHBlbmRDaGlsZChjb250YWluZXIpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlckJ5RGF0ZSAoZGF0ZVZhbHVlLCB0b2Rvcyl7XHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKGxpc3RzW2luZGV4XS5saXN0TmFtZSlcclxuICAgIGNvbnN0IGZpbHRlcmVkVG9kb3MgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmR1ZURhdGUgPT0gZGF0ZVZhbHVlIClcclxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkVG9kb3MpXHJcbiAgICBcclxuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRvZG9zKVxyXG59ICIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyQnlMaXN0IChlbGVtZW50LCBsaXN0cywgdG9kb3Mpe1xyXG4gICAgY29uc3QgaW5kZXggPSArYCR7ZWxlbWVudC5pZH1gLnJlcGxhY2UoXCJsaXN0XCIsIFwiXCIpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhsaXN0c1tpbmRleF0ubGlzdE5hbWUpXHJcbiAgICBjb25zdCBsaXN0VmFsdWUgPSBsaXN0cy5tYXAoIGxpc3QgPT4gbGlzdC5saXN0TmFtZSlbaW5kZXhdID09IHVuZGVmaW5lZCA/IGVsZW1lbnQudmFsdWUgOiBsaXN0cy5tYXAoIGxpc3QgPT4gbGlzdC5saXN0TmFtZSlbaW5kZXhdXHJcbiAgICBjb25zdCBmaWx0ZXJlZFRvZG9zID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5saXN0ID09IGxpc3RWYWx1ZSApXHJcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJlZFRvZG9zKVxyXG4gICAgXHJcbiAgICBkaXNwbGF5VGFza3MoZmlsdGVyZWRUb2RvcylcclxufSAiLCJpbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlckJ5UHJpb3JpdHkgKGVsZW1lbnQsIHRvZG9zKXtcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cobGlzdHNbaW5kZXhdLmxpc3ROYW1lKVxyXG4gICAgY29uc3QgcHJpb3JpdHlWYWx1ZSA9ICBlbGVtZW50LnZhbHVlXHJcbiAgICBjb25zdCBmaWx0ZXJlZFRvZG9zID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5wcmlvcml0eSA9PSBwcmlvcml0eVZhbHVlIClcclxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkVG9kb3MpXHJcbiAgICBcclxuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRvZG9zKVxyXG59ICIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyQnlTdGF0dXMgKGVsZW1lbnQsIHRvZG9zKXtcclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cobGlzdHNbaW5kZXhdLmxpc3ROYW1lKVxyXG4gICAgY29uc3Qgc3RhdHVzVmFsdWUgPSAgZWxlbWVudC52YWx1ZVxyXG4gICAgY29uc3QgZmlsdGVyZWRUb2RvcyA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uc3RhdHVzID09IHN0YXR1c1ZhbHVlIClcclxuICAgIGNvbnNvbGUubG9nKGZpbHRlcmVkVG9kb3MpXHJcbiAgICBcclxuICAgIGRpc3BsYXlUYXNrcyhmaWx0ZXJlZFRvZG9zKVxyXG59ICIsImltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiXHJcbmltcG9ydCBhcnJvd1JpZ2h0ICBmcm9tICcuL3JpZ2h0LnBuZydcclxuaW1wb3J0IGZpbHRlckJ5TGlzdCBmcm9tIFwiLi9maWx0ZXJCeUxpc3RcIlxyXG5pbXBvcnQgZmlsdGVyQnlTdGF0dXMgZnJvbSBcIi4vZmlsdGVyQnlTdGF0dXNcIlxyXG5pbXBvcnQgZmlsdGVyQnlQcmlvcml0eSBmcm9tIFwiLi9maWx0ZXJCeVByaW9yaXR5XCJcclxuaW1wb3J0IGZpbHRlckJ5RGF0ZSBmcm9tIFwiLi9maWx0ZXJCeURhdGVcIlxyXG5pbXBvcnQgc29ydEJ5VGl0bGUgZnJvbSBcIi4vc29ydEJ5VGl0bGVcIlxyXG5pbXBvcnQgeyBXY0RhdGVwaWNrZXIgfSBmcm9tIFwid2MtZGF0ZXBpY2tlci9kaXN0L2NvbXBvbmVudHMvd2MtZGF0ZXBpY2tlclwiXHJcbmltcG9ydCBcIndjLWRhdGVwaWNrZXIvZGlzdC90aGVtZXMvZGFyay5jc3NcIjtcclxuaW1wb3J0IGRvd25JY29uIGZyb20gXCIuL2Rvd24ucG5nXCJcclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIndjLWRhdGVwaWNrZXJcIiwgV2NEYXRlcGlja2VyKTtcclxuXHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZUZpbHRlciAocGFyZW50RWxlbWVudCwgYXJyYXkpe1xyXG4gICAgYXJyYXkuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCAnZmlsdGVyLXNvcnQtZXhwYW5kZWQnLCBgZmlsdGVyU29ydEV4cGFuZGVkSWQjJHthcnJheS5pbmRleE9mKG9wdGlvbil9YClcclxuICAgICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uXHJcbiAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbjtcclxuICAgICAgICAvLyBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uO1xyXG4gICAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5wdXRFbGVtZW50SWNvbnMocGFyZW50RWxlbWVudCwgaWNvbil7XHJcbiAgICBjb25zdCBpbWFnZSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdpbWcnLCAnZXhwYW5kLWljb24nLCBgJHtwYXJlbnRFbGVtZW50fS1pY29uYCApXHJcbiAgICBpbWFnZS5zcmMgPSBpY29uXHJcbiAgICBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KHBhcmVudEVsZW1lbnQpLmFwcGVuZENoaWxkKGltYWdlKVxyXG59XHJcblxyXG5pbnB1dEVsZW1lbnRJY29ucygndG9kb3NUaXRsZVRhc2tzJywgZG93bkljb24pXHJcbmlucHV0RWxlbWVudEljb25zKCd0b2Rvc1RpdGxlU3RhdHVzJywgZG93bkljb24pXHJcbmlucHV0RWxlbWVudEljb25zKCd0b2Rvc1RpdGxlTGlzdHMnLCBkb3duSWNvbilcclxuaW5wdXRFbGVtZW50SWNvbnMoJ3RvZG9zVGl0bGVQcmlvcml0aWVzJywgZG93bkljb24pXHJcbmlucHV0RWxlbWVudEljb25zKCd0b2Rvc1RpdGxlRHVlRGF0ZXMnLCBkb3duSWNvbilcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVGaWx0ZXJPcmRlciAobGlzdHMsIHRvZG9zKXtcclxuICAgIGNvbnN0IHRvZG9zR2VuZXJhbFRpdGxlcyA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ3RvZG9zR2VuZXJhbFRpdGxlcycpXHJcbiAgICB0b2Rvc0dlbmVyYWxUaXRsZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmQtaWNvbicpKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRHZW5lcmFsVGl0bGUgPSBlLnRhcmdldC5wYXJlbnROb2RlXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjdXJyZW50R2VuZXJhbFRpdGxlKVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpXHJcbiAgICAgICAgICAgICAgICBsZXQgeyB0b3AsIGxlZnQgfSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkTWVudSA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCAnZXhwYW5kZWQtbWVudScsICdleHBhbmRlZE1lbnUnKVxyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gY3VycmVudEdlbmVyYWxUaXRsZS5pZCA9PSAndG9kb3NUaXRsZVRhc2tzJyA/IFsnU29ydCddIDogWydGaWx0ZXInLCAnU29ydCddXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2ZpbHRlci1zb3J0JywgYGZpbHRlclNvcnRJZCMke29wdGlvbnMuaW5kZXhPZihvcHRpb24pfWApXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dEVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICdmaWx0ZXItc29ydC10ZXh0JywgYGZpbHRlclNvcnRUZXh0IyR7b3B0aW9ucy5pbmRleE9mKG9wdGlvbil9YClcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWdodEFycm93ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ2ltZycsICdyaWdodC1hcnJvdycsIGByaWdodEFycm93IyR7b3B0aW9ucy5pbmRleE9mKG9wdGlvbil9YClcclxuICAgICAgICAgICAgICAgICAgICByaWdodEFycm93LnNyYyA9IGFycm93UmlnaHRcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbkVsZW1lbnQudmFsdWUgPSBvcHRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZE1lbnUuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LmFwcGVuZENoaWxkKHJpZ2h0QXJyb3cpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZXhwYW5kZWRNZW51LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kZWRNZW51LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5zdHlsZS50b3AgPSBgJHt0b3AgKyAyNn1weGA7XHJcbiAgICAgICAgICAgICAgICBleHBhbmRlZE1lbnUuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChleHBhbmRlZE1lbnUpO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZighZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpbHRlci1zb3J0Jykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnZmlsdGVyLXNvcnQnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LnBhcmVudE5vZGUudmFsdWUgPT0gJ0ZpbHRlcicpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByaWdodCB9ID0gZS50YXJnZXQucGFyZW50Tm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHBhbmRlZEZpbHRlck1lbnUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2V4cGFuZGVkLWZpbHRlci1tZW51JywgXCJleHBhbmRlZEZpbHRlck1lbnVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IHRvZG9UaXRsZSA9IGAke2N1cnJlbnRHZW5lcmFsVGl0bGUuaWR9YC5yZXBsYWNlKFwidG9kb3NUaXRsZVwiLCBcIlwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9UaXRsZSA9IGN1cnJlbnRHZW5lcmFsVGl0bGUuaWQuc2xpY2UoMTApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b2RvVGl0bGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0b2RvVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdTdGF0dXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gWyd0by1kbycsICdkb2luZycsICdkb25lJywgJ3dvbnQgZG8nXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUZpbHRlciAoZXhwYW5kZWRGaWx0ZXJNZW51LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0xpc3RzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IGxpc3RzLm1hcCggbGlzdCA9PiBsaXN0Lmxpc3ROYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUZpbHRlciAoZXhwYW5kZWRGaWx0ZXJNZW51LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1ByaW9yaXRpZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zID0gWydsb3cnLCAnbWVkaXVtJywgJ2hpZ2gnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3B1bGF0ZUZpbHRlciAoZXhwYW5kZWRGaWx0ZXJNZW51LCBvcHRpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0R1ZURhdGVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUuY2xhc3NMaXN0LmFkZCgnZmlsdGVyLWR1ZURhdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVQaWNrZXIgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnd2MtZGF0ZXBpY2tlcicsICdkYXRlLXBpY2tlcicsICdkYXRlcGlja2VyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUuYXBwZW5kQ2hpbGQoZGF0ZVBpY2tlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2ZpbHRlci1zb3J0LWV4cGFuZGVkJywgYGZpbHRlclNvcnRFeHBhbmRlZElkIyR7b3B0aW9ucy5pbmRleE9mKG9wdGlvbil9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAvLyBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGV4cGFuZGVkRmlsdGVyTWVudS5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUuc3R5bGUudG9wID0gYCR7dG9wICsgMjZ9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodG9kb1RpdGxlID09ICdEdWVEYXRlcycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnN0eWxlLmxlZnQgPSBgJHtyaWdodCAtIDQyMH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5zdHlsZS5sZWZ0ID0gYCR7cmlnaHQgKyAxfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZXhwYW5kZWRGaWx0ZXJNZW51KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnJlbW92ZSgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkLWZpbHRlci1tZW51JykgfHwgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3djLWRhdGVwaWNrZXJfX2RhdGUnKSkgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9UaXRsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0b2RvVGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1N0YXR1cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlTdGF0dXMoZS50YXJnZXQsIHRvZG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdMaXN0cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQpICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckJ5TGlzdChlLnRhcmdldCwgbGlzdHMsIHRvZG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkTWVudS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkRmlsdGVyTWVudS5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdQcmlvcml0aWVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJCeVByaW9yaXR5KGUudGFyZ2V0LCB0b2RvcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZE1lbnUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZEZpbHRlck1lbnUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnRHVlRGF0ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZXN0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0ZXBpY2tlciA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2RhdGVwaWNrZXInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVwaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcignc2VsZWN0RGF0ZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVwaWNrZWQgPSBldmVudC5kZXRhaWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0ZXBpY2tlZCA9PSB0b2Rvc1swXS5kdWVEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyQnlEYXRlKGRhdGVwaWNrZWQsIHRvZG9zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZE1lbnUucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRGaWx0ZXJNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LnBhcmVudE5vZGUudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlLnRhcmdldC5wYXJlbnROb2RlLnZhbHVlID09ICdTb3J0Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHJpZ2h0LCB0b3AgfSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGFuZGVkU29ydE1lbnUgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnZGl2JywgJ2V4cGFuZGVkLXNvcnQtbWVudScsIFwiZXhwYW5kZWRTb3J0TWVudVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9UaXRsZSA9IGN1cnJlbnRHZW5lcmFsVGl0bGUuaWQuc2xpY2UoMTApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0gdG9kb1RpdGxlID09ICdEdWVEYXRlcycgPyBbJ05ld2VzdCB0byBvbGRlc3QnLCAnT2xkZXN0IHRvIG5ld2VzdCddIDogWydBbHBoYWJldGljYWwnLCAnUmV2ZXJzZSBhbHBoYWJldGljYWwnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbkVsZW1lbnQgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgnYnV0dG9uJywgJ2ZpbHRlci1zb3J0LWV4cGFuZGVkJywgYGZpbHRlclNvcnRFeHBhbmRlZElkIyR7b3B0aW9ucy5pbmRleE9mKG9wdGlvbil9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkU29ydE1lbnUuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRTb3J0TWVudS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkU29ydE1lbnUuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRTb3J0TWVudS5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXhwYW5kZWRTb3J0TWVudS5zdHlsZS5sZWZ0ID0gYCR7cmlnaHQgKyAxfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRvZG9UaXRsZSA9PSAnRHVlRGF0ZXMnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5wYXJlbnROb2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkU29ydE1lbnUuc3R5bGUubGVmdCA9IGAke3JpZ2h0IC0gMzAxfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwYW5kZWRTb3J0TWVudS5zdHlsZS5sZWZ0ID0gYCR7cmlnaHQgKyAxfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChleHBhbmRlZFNvcnRNZW51KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZFNvcnRNZW51LnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkU29ydE1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZC1zb3J0LW1lbnUnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodG9kb1RpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdTdGF0dXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeVRpdGxlKGUudGFyZ2V0LCB0b2RvcywgJ3N0YXR1cycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0xpc3RzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldCkgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5VGl0bGUoZS50YXJnZXQsIHRvZG9zLCAnbGlzdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1ByaW9yaXRpZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeVRpdGxlKGUudGFyZ2V0LCB0b2RvcywgJ3ByaW9yaXR5JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnRHVlRGF0ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRCeVRpdGxlKGUudGFyZ2V0LCB0b2RvcywgJ2R1ZURhdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdUYXNrcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydEJ5VGl0bGUoZS50YXJnZXQsIHRvZG9zLCAndGFzaycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSlcclxuICAgIFxyXG5cclxufVxyXG5cclxuIiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZU5ld0xpc3RGb3JtIChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3QgbmV3TGlzdEZvcm0gPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCduZXdMaXN0Rm9ybScpXHJcbiAgICBpbnRlcmFjdERPTSgpLnRvZ2dsZUVsZW1lbnREaXNwbGF5KG5ld0xpc3RGb3JtKVxyXG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ21haW5Db250YWluZXInKVxyXG4gICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdibHVyJylcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgaWYoIWUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctbGlzdC1mb3JtJykgXHJcbiAgICAgICAgJiYgIWUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtbGlzdC1mb3JtJylcclxuICAgICAgICAmJiAhZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2xhYmVsLWlucHV0LW5hbWUnKVxyXG4gICAgICAgICYmICFlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnbGFiZWwtaW5wdXQtZGVzY3JpcHRpb24nKVxyXG4gICAgICAgICYmICFlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnbmV3LWxpc3QtYnV0dG9ucycpXHJcbiAgICAgICAgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmV3LWxpc3QtZm9ybScpXHJcbiAgICAgICAgJiYgIWUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctbGlzdCcpXHJcbiAgICAgICAgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWwtbGlzdC1hZGQnKSl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgICAgICAgICBpbnRlcmFjdERPTSgpLmhpZGUobmV3TGlzdEZvcm0pXHJcbiAgICAgICAgICAgIC8vIG5ld1Rhc2sucmVtb3ZlKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59IiwiaW1wb3J0IGludGVyYWN0RE9NIGZyb20gXCIuL2ludGVyYWN0RG9tXCJcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZU5ld1Rhc2tGb3JtICgpe1xyXG4gICAgY29uc3Qgb3BlblRhc2tGb3JtID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnb3BlblRhc2tGb3JtJylcclxuICAgIGNvbnN0IG5ld1Rhc2sgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCduZXdUYXNrJylcclxuICAgIG9wZW5UYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+e1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICBpbnRlcmFjdERPTSgpLnRvZ2dsZUVsZW1lbnREaXNwbGF5KG5ld1Rhc2spO1xyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XHJcbiAgICAgICAgaWYoIWUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCduZXctdGFzaycpICYmICFlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnb3Blbi10YXNrLWZvcm0nKSl7XHJcbiAgICAgICAgICAgIGludGVyYWN0RE9NKCkuaGlkZShuZXdUYXNrKVxyXG4gICAgICAgIH0gXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCI7XHJcblxyXG5mdW5jdGlvbiBhZGRUb0xvY2FsU3RvcmFnZShhcnJheSkge1xyXG4gICAgXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xyXG4gICBcclxuICAgIGRpc3BsYXlUYXNrcyhhcnJheSk7XHJcbiAgfVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgdG9kb3NcclxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpO1xyXG4gICAgLy8gaWYgcmVmZXJlbmNlIGV4aXN0c1xyXG4gICAgaWYgKHJlZmVyZW5jZSkge1xyXG4gICAgICAvLyBjb252ZXJ0cyBiYWNrIHRvIGFycmF5IGFuZCBzdG9yZSBpdCBpbiB0b2RvcyBhcnJheVxyXG4gICAgICByZXR1cm4gdG9kb3MgPSBKU09OLnBhcnNlKHJlZmVyZW5jZSk7XHJcbiAgICAvLyAgIGRpc3BsYXlUYXNrcyh0b2Rvcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBoYW5kbGVTYXZlTG9naWModG9kb3MsIGxpc3RzKXtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcclxuICAgIGNvbnN0IHBhcnNlZFRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSB8fCBbXSlcclxuICAgIGNvbnNvbGUubG9nKHBhcnNlZFRvZG9zKVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGFkZFRvTG9jYWxTdG9yYWdlLCBnZXRGcm9tTG9jYWxTdG9yYWdlLCBoYW5kbGVTYXZlTG9naWMgfSIsImltcG9ydCBmb3JtYXQgIGZyb20gXCJkYXRlLWZucy9mb3JtYXRcIlxyXG5cclxuY29uc3QgaW50ZXJhY3RET00gPSBmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRlbnQnKVxyXG5cclxuXHJcbiAgICBjb25zdCBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQgPSBmdW5jdGlvbih0eXBlLCBjbGFzc05hbWUsIGlkTmFtZSl7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYCR7Y2xhc3NOYW1lfWApXHJcbiAgICAgICAgZWxlbWVudC5pZCA9IGAke2lkTmFtZX1gXHJcbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBob29rRE9NZWxlbWVudCA9IGZ1bmN0aW9uIChpZE5hbWUpe1xyXG4gICAgICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZE5hbWV9YClcclxuICAgICAgICByZXR1cm4gZWxlbVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHVybkFsbE1hdGNoaW5nRWxlbWVudHMgPSBmdW5jdGlvbihjbGFzc05hbWUpe1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjbGFzc05hbWV9YClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRJbnB1dFZhbHVlID0gZnVuY3Rpb24oaWROYW1lKXtcclxuICAgICAgICByZXR1cm4gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudChpZE5hbWUpLnZhbHVlXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlRWxlbWVudERpc3BsYXkgPSBmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICBpZihlbGVtZW50LnN0eWxlLmRpc3BsYXkgPT0gJ2ZsZXgnKXtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhpZGUgPSBmdW5jdGlvbihlbGVtZW50KXtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93ID0gZnVuY3Rpb24oZWxlbWVudCl7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXBwZW5kRWxlbWVudEFuZERlZmluZUNvbnRlbnQgPSBmdW5jdGlvbiAoY29udGFpbmVyLCBvYmosIGluZGV4KSB7XHJcbiAgICAgICAgbGV0IHRhc2sgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLXRhc2tzJywgYHRhc2ske2luZGV4fWApXHJcbiAgICAgICAgbGV0IHN0YXR1cyA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tc3RhdHVzJywgYHN0YXR1cyR7aW5kZXh9YClcclxuICAgICAgICBsZXQgbGlzdCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdwJywgJ3RvZG8tbGlzdHMnLCBgbGlzdCR7aW5kZXh9YClcclxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBpbnRlcmFjdERPTSgpLmNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NBbmRJZCgncCcsICd0b2RvLXByaW9yaXR5JywgYHByaW9yaXR5JHtpbmRleH1gKVxyXG4gICAgICAgIGxldCBkdWVEYXRlID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAndG9kby1kdWUtZGF0ZScsIGBkdWVEYXRlJHtpbmRleH1gKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrKVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdGF0dXMpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5KVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKVxyXG4gICAgICAgIHRhc2sudGV4dENvbnRlbnQgPSBgJHtvYmoudGFza31gXHJcbiAgICAgICAgc3RhdHVzLnRleHRDb250ZW50ID0gYCR7b2JqLnN0YXR1c31gXHJcbiAgICAgICAgbGlzdC50ZXh0Q29udGVudCA9IGAke29iai5saXN0fWBcclxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudCA9IGAke29iai5wcmlvcml0eX1gXHJcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdChuZXcgRGF0ZShvYmouZHVlRGF0ZS5yZXBsYWNlQWxsKCctJywgJy8nKSksIFwiTU1NIGRkJywnIHl5XCIpfWBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhcHBlbmRMaXN0RWxlbWVudGFuZERlZmluZUNvbnRlbnQgPSBmdW5jdGlvbihjb250YWluZXIsIG9iaiwgaW5kZXgpe1xyXG4gICAgICAgIGxldCBsaXN0ID0gaW50ZXJhY3RET00oKS5jcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQoJ3AnLCAnbGlzdC1pdGVtJywgYGxpc3Qke2luZGV4fWApXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3QpXHJcbiAgICAgICAgbGlzdC50ZXh0Q29udGVudCA9IGAke29iai5saXN0TmFtZX1gXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGdlbmVyYXRlTGlzdE9wdGlvbnMgPSBmdW5jdGlvbiAoe3RvcCwgbGVmdH0sIGFycmF5LCBwcm9wZXJ0eSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdkaXYnLCBgY2hhbmdlLSR7cHJvcGVydHl9YCwgYGNoYW5nZSR7cHJvcGVydHl9SWRgKVxyXG4gICAgICAgIC8vIGNvbnN0IGJ1dHRvbnMgPSBbJ3RvLWRvJywgJ2RvaW5nJywgJ2RvbmUnLCAnd29udCBkbyddO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBhcnJheTtcclxuICAgICAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xyXG4gICAgICAgICAgY29uc3QgYnV0dG9uRWxlbWVudCA9IGludGVyYWN0RE9NKCkuY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdidXR0b24nLCBgY2hhbmdlLSR7cHJvcGVydHl9LWJ1dHRvbmAsIGAke3Byb3BlcnR5fWNoYW5nZSR7YnV0dG9ucy5pbmRleE9mKGJ1dHRvbil9I2lkYClcclxuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQudmFsdWUgPSBidXR0b247XHJcbiAgICAgICAgICBidXR0b25FbGVtZW50LnRleHRDb250ZW50ID0gYnV0dG9uO1xyXG4gICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b25FbGVtZW50KTtcclxuICAgICAgICB9KTtcclxuICAgIFxyXG4gICBcclxuICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7dG9wfXB4YDtcclxuICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgOyBcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JtUmVzZXQgPSBmdW5jdGlvbihmb3JtSWQpe1xyXG4gICAgY29uc3QgZm9ybSA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoYCR7Zm9ybUlkfWApXHJcbiAgICBmb3JtLnJlc2V0KCkgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIG1haW5Db250ZW50LCBcclxuICAgICAgICBjcmVhdGVFbGVtZW50V2l0aENsYXNzQW5kSWQsIFxyXG4gICAgICAgIGhvb2tET01lbGVtZW50LCBcclxuICAgICAgICByZXR1cm5BbGxNYXRjaGluZ0VsZW1lbnRzLCBcclxuICAgICAgICBnZXRJbnB1dFZhbHVlLCBcclxuICAgICAgICBhcHBlbmRFbGVtZW50QW5kRGVmaW5lQ29udGVudCxcclxuICAgICAgICBhcHBlbmRMaXN0RWxlbWVudGFuZERlZmluZUNvbnRlbnQsIFxyXG4gICAgICAgIHRvZ2dsZUVsZW1lbnREaXNwbGF5LFxyXG4gICAgICAgIGhpZGUsXHJcbiAgICAgICAgc2hvdyxcclxuICAgICAgICBnZW5lcmF0ZUxpc3RPcHRpb25zLFxyXG4gICAgICAgIGZvcm1SZXNldCBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW50ZXJhY3RET00iLCJpbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc29ydEJ5VGl0bGUoZWxlbWVudCwgdG9kb3MsIHRpdGxlKXtcclxuICAgIGNvbnN0IHNvcnRUeXBlID0gIGVsZW1lbnQudmFsdWVcclxuICAgIGxldCBzb3J0ZWRBcnJheVxyXG4gICAgc3dpdGNoIChzb3J0VHlwZSkge1xyXG4gICAgICAgIGNhc2UgJ0FscGhhYmV0aWNhbCc6XHJcbiAgICAgICAgICAgIHNvcnRlZEFycmF5ID0gdG9kb3Muc29ydCgoYSwgYikgPT4gYVt0aXRsZV0udG9Mb3dlckNhc2UoKSA+IGJbdGl0bGVdLnRvTG93ZXJDYXNlKCkgPyAxIDogLTEpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ1JldmVyc2UgYWxwaGFiZXRpY2FsJzpcclxuICAgICAgICAgICAgc29ydGVkQXJyYXkgPSB0b2Rvcy5zb3J0KChhLCBiKSA9PiBhW3RpdGxlXS50b0xvd2VyQ2FzZSgpIDwgYlt0aXRsZV0udG9Mb3dlckNhc2UoKSA/IDEgOiAtMSlcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnTmV3ZXN0IHRvIG9sZGVzdCc6XHJcbiAgICAgICAgICAgIHNvcnRlZEFycmF5ID0gdG9kb3Muc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYVt0aXRsZV0pID4gbmV3IERhdGUoYlt0aXRsZV0pID8gMSA6IC0xKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdPbGRlc3QgdG8gbmV3ZXN0JzpcclxuICAgICAgICAgICAgc29ydGVkQXJyYXkgPSB0b2Rvcy5zb3J0KChhLCBiKSA9PiBuZXcgRGF0ZShhW3RpdGxlXSkgPCBuZXcgRGF0ZShiW3RpdGxlXSkgPyAxIDogLTEpXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhzb3J0ZWRBcnJheSlcclxuICAgIFxyXG4gICAgZGlzcGxheVRhc2tzKHNvcnRlZEFycmF5KVxyXG59XHJcblxyXG4iLCJpbXBvcnQgZGlzcGxheVRhc2tzIGZyb20gXCIuL2Rpc3BsYXlUYXNrc1wiXHJcbmltcG9ydCB7IGdldEZyb21Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuaW1wb3J0IHsgYWRkVG9Mb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9oYW5kbGVTYXZlTG9naWNcIjtcclxuXHJcbi8vIGZ1bmN0aW9uIGFkZFRvTG9jYWxTdG9yYWdlKHRvZG9zKSB7XHJcbi8vICAgICAvLyBjb252ZXIgdGhlIGFycmF5IHRvIHN0cmluZyB0aGVuIHN0b3JlIGl0LlxyXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkodG9kb3MpKTtcclxuICAgXHJcbi8vICAgICBkaXNwbGF5VGFza3ModG9kb3MpO1xyXG4vLyAgIH1cclxuXHJcblxyXG5jb25zdCBkZWxldGVUYXNrID0gKGluZGV4KSA9PiB7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKClcclxuICAgIHRvZG9zLnNwbGljZShpbmRleCwgMSlcclxuICAgIGFkZFRvTG9jYWxTdG9yYWdlKHRvZG9zKVxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGVmaW5lVGFza0lkICh0b2Rvcykge1xyXG4gICAgdG9kb3MuZm9yRWFjaCggdG9kbyA9PiB7IFxyXG4gICAgICAgIHRvZG8ub3JkZXIgPSB0b2Rvcy5pbmRleE9mKHRvZG8pXHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5VGFzayAoaW5kZXgsIHRhc2tWYWx1ZSkge1xyXG4gICAgbGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgpXHJcbiAgICAvLyBjb25zdCB0b2RvID0gY3JlYXRlTmV3VGFzayhgJHt0YXNrVmFsdWV9YCwgYCR7dG9kb3NbaW5kZXhdLnN0YXR1c31gLCBgJHt0b2Rvc1tpbmRleF0ubGlzdH1gLCBgJHt0b2Rvc1tpbmRleF0ucHJpb3JpdHl9YCwgYCR7dG9kb3NbaW5kZXhdLmR1ZURhdGV9YCwgdG9kb3MpXHJcbiAgICAvLyBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dGFza1ZhbHVlfWAsIGAke3RvZG9zW2luZGV4XS5zdGF0dXN9YCwgYCR7dG9kb3NbaW5kZXhdLmxpc3R9YCwgYCR7dG9kb3NbaW5kZXhdLnByaW9yaXR5fWAsIGAke3RvZG9zW2luZGV4XS5kdWVEYXRlfWApXHJcbiAgICBcclxuICAgIC8vIHRvZG9zLnNwbGljZShpbmRleCwgMSwgdG9kbylcclxuICAgIGNvbnN0IGNvcnJlY3RJbmRleCA9IHRvZG9zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0ub3JkZXIgPT0gaW5kZXgpXHJcbiAgICB0b2Rvc1tjb3JyZWN0SW5kZXhdLnRhc2sgPSBgJHt0YXNrVmFsdWV9YFxyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UodG9kb3MpXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtb2RpZnlTdGF0dXMgKGluZGV4LCBzdGF0dXNWYWx1ZSkge1xyXG4gICAgbGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgpXHJcbiAgICAvLyBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dG9kb3NbaW5kZXhdLnRhc2t9YCwgYCR7c3RhdHVzVmFsdWV9YCwgYCR7dG9kb3NbaW5kZXhdLmxpc3R9YCwgYCR7dG9kb3NbaW5kZXhdLnByaW9yaXR5fWAsIGAke3RvZG9zW2luZGV4XS5kdWVEYXRlfWApXHJcbiAgICBjb25zdCBjb3JyZWN0SW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm9yZGVyID09IGluZGV4KVxyXG4gICAgLy8gdG9kb3Muc3BsaWNlKGluZGV4LCAxLCB0b2RvKVxyXG4gICAgdG9kb3NbY29ycmVjdEluZGV4XS5zdGF0dXMgPSBgJHtzdGF0dXNWYWx1ZX1gXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZSh0b2RvcylcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuZnVuY3Rpb24gbW9kaWZ5UHJpb3JpdHkgKGluZGV4LCBwcmlvcml0eVZhbHVlKSB7XHJcbiAgICBsZXQgdG9kb3MgPSBnZXRGcm9tTG9jYWxTdG9yYWdlKClcclxuICAgIC8vIGNvbnN0IHRvZG8gPSB0b2RvQ3JlYXRvcihgJHt0b2Rvc1tpbmRleF0udGFza31gLCBgJHt0b2Rvc1tpbmRleF0uc3RhdHVzfWAgLCBgJHt0b2Rvc1tpbmRleF0ubGlzdH1gLCBgJHtwcmlvcml0eVZhbHVlfWAsIGAke3RvZG9zW2luZGV4XS5kdWVEYXRlfWApXHJcbiAgICBjb25zdCBjb3JyZWN0SW5kZXggPSB0b2Rvcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm9yZGVyID09IGluZGV4KVxyXG4gICAgLy8gdG9kb3Muc3BsaWNlKGluZGV4LCAxLCB0b2RvKVxyXG4gICAgdG9kb3NbY29ycmVjdEluZGV4XS5wcmlvcml0eSA9IGAke3ByaW9yaXR5VmFsdWV9YFxyXG4gICAgYWRkVG9Mb2NhbFN0b3JhZ2UodG9kb3MpXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vZGlmeUxpc3QgKGluZGV4LCBsaXN0VmFsdWUsIHRvZG9zKSB7XHJcbiAgICAvLyBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dG9kb3NbaW5kZXhdLnRhc2t9YCwgYCR7dG9kb3NbaW5kZXhdLnN0YXR1c31gICwgYCR7bGlzdFZhbHVlfWAsIGAke3RvZG9zW2luZGV4XS5wcmlvcml0eX1gLCBgJHt0b2Rvc1tpbmRleF0uZHVlRGF0ZX1gKVxyXG4gICAgY29uc3QgY29ycmVjdEluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5vcmRlciA9PSBpbmRleClcclxuICAgIC8vIHRvZG9zLnNwbGljZShpbmRleCwgMSwgdG9kbylcclxuICAgIHRvZG9zW2NvcnJlY3RJbmRleF0ubGlzdCA9IGAke2xpc3RWYWx1ZX1gXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBtb2RpZnlEdWVEYXRlIChpbmRleCwgZHVlRGF0ZVZhbHVlKXtcclxuICAgIGxldCB0b2RvcyA9IGdldEZyb21Mb2NhbFN0b3JhZ2UoKVxyXG4gICAgY29uc3QgY29ycmVjdEluZGV4ID0gdG9kb3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5vcmRlciA9PSBpbmRleClcclxuICAgIHRvZG9zW2NvcnJlY3RJbmRleF0uZHVlRGF0ZSA9IGAke2R1ZURhdGVWYWx1ZX1gXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZSh0b2RvcylcclxuICAgIGRpc3BsYXlUYXNrcyh0b2RvcylcclxufVxyXG5cclxuZnVuY3Rpb24gdG9kb0NyZWF0b3IodGFzaywgc3RhdHVzLCBsaXN0LCBwcmlvcml0eSwgZHVlRGF0ZSl7XHJcbiAgICBsZXQgdG9kbyA9IHtcclxuICAgICAgICB0YXNrLFxyXG4gICAgICAgIHN0YXR1cyxcclxuICAgICAgICBsaXN0LFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgb3JkZXI6IG51bGxcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0b2RvKVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVOZXdUYXNrID0gKHRhc2ssIHN0YXR1cywgbGlzdCwgcHJpb3JpdHksIGR1ZURhdGUsIHRvZG9zKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IodGFzaywgc3RhdHVzLCBsaXN0LCBwcmlvcml0eSwgZHVlRGF0ZSlcclxuICAgIC8vIGNvbnN0IG5ld1RvZG9zID0gdG9kb3NcclxuICAgIHRvZG9zLnB1c2godG9kbylcclxuICAgIHRvZG8ub3JkZXIgPSB0b2Rvcy5pbmRleE9mKHRvZG8pXHJcbiAgICBhZGRUb0xvY2FsU3RvcmFnZSh0b2RvcylcclxuICAgIC8vIGNvbnN0IHRlbXBPYmogPSBuZXdUb2Rvc1tuZXdUb2Rvcy5pbmRleE9mKHRvZG8pXVxyXG4gICAgLy8gY29uc29sZS5sb2codGVtcE9iailcclxuICAgIC8vIGNvbnN0IHRlbXBUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykgfHwgJ1tdJylcclxuICAgIFxyXG4gICAgLy8gaWYodGVtcFRvZG9zLmluZGV4T2YodGVtcE9iaikgPT0gLTEpe1xyXG4gICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KG5ld1RvZG9zKSlcclxuICAgIC8vIH1cclxuICAgIHJldHVybiB0b2RvXHJcbn0gXHJcblxyXG5leHBvcnQgeyBkZWZpbmVUYXNrSWQsIGRlbGV0ZVRhc2ssIG1vZGlmeVRhc2ssIG1vZGlmeVN0YXR1cywgbW9kaWZ5UHJpb3JpdHksIG1vZGlmeUxpc3QsIG1vZGlmeUR1ZURhdGUsIHRvZG9DcmVhdG9yLCBjcmVhdGVOZXdUYXNrIH0iLCJjb25zdCBCVUlMRCA9IHtcbiAgICBhbGxSZW5kZXJGbjogZmFsc2UsXG4gICAgY21wRGlkTG9hZDogdHJ1ZSxcbiAgICBjbXBEaWRVbmxvYWQ6IGZhbHNlLFxuICAgIGNtcERpZFVwZGF0ZTogdHJ1ZSxcbiAgICBjbXBEaWRSZW5kZXI6IHRydWUsXG4gICAgY21wV2lsbExvYWQ6IHRydWUsXG4gICAgY21wV2lsbFVwZGF0ZTogdHJ1ZSxcbiAgICBjbXBXaWxsUmVuZGVyOiB0cnVlLFxuICAgIGNvbm5lY3RlZENhbGxiYWNrOiB0cnVlLFxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrOiB0cnVlLFxuICAgIGVsZW1lbnQ6IHRydWUsXG4gICAgZXZlbnQ6IHRydWUsXG4gICAgaGFzUmVuZGVyRm46IHRydWUsXG4gICAgbGlmZWN5Y2xlOiB0cnVlLFxuICAgIGhvc3RMaXN0ZW5lcjogdHJ1ZSxcbiAgICBob3N0TGlzdGVuZXJUYXJnZXRXaW5kb3c6IHRydWUsXG4gICAgaG9zdExpc3RlbmVyVGFyZ2V0RG9jdW1lbnQ6IHRydWUsXG4gICAgaG9zdExpc3RlbmVyVGFyZ2V0Qm9keTogdHJ1ZSxcbiAgICBob3N0TGlzdGVuZXJUYXJnZXRQYXJlbnQ6IGZhbHNlLFxuICAgIGhvc3RMaXN0ZW5lclRhcmdldDogdHJ1ZSxcbiAgICBtZW1iZXI6IHRydWUsXG4gICAgbWV0aG9kOiB0cnVlLFxuICAgIG1vZGU6IHRydWUsXG4gICAgb2JzZXJ2ZUF0dHJpYnV0ZTogdHJ1ZSxcbiAgICBwcm9wOiB0cnVlLFxuICAgIHByb3BNdXRhYmxlOiB0cnVlLFxuICAgIHJlZmxlY3Q6IHRydWUsXG4gICAgc2NvcGVkOiB0cnVlLFxuICAgIHNoYWRvd0RvbTogdHJ1ZSxcbiAgICBzbG90OiB0cnVlLFxuICAgIGNzc0Fubm90YXRpb25zOiB0cnVlLFxuICAgIHN0YXRlOiB0cnVlLFxuICAgIHN0eWxlOiB0cnVlLFxuICAgIHN2ZzogdHJ1ZSxcbiAgICB1cGRhdGFibGU6IHRydWUsXG4gICAgdmRvbUF0dHJpYnV0ZTogdHJ1ZSxcbiAgICB2ZG9tWGxpbms6IHRydWUsXG4gICAgdmRvbUNsYXNzOiB0cnVlLFxuICAgIHZkb21GdW5jdGlvbmFsOiB0cnVlLFxuICAgIHZkb21LZXk6IHRydWUsXG4gICAgdmRvbUxpc3RlbmVyOiB0cnVlLFxuICAgIHZkb21SZWY6IHRydWUsXG4gICAgdmRvbVByb3BPckF0dHI6IHRydWUsXG4gICAgdmRvbVJlbmRlcjogdHJ1ZSxcbiAgICB2ZG9tU3R5bGU6IHRydWUsXG4gICAgdmRvbVRleHQ6IHRydWUsXG4gICAgd2F0Y2hDYWxsYmFjazogdHJ1ZSxcbiAgICB0YXNrUXVldWU6IHRydWUsXG4gICAgaG90TW9kdWxlUmVwbGFjZW1lbnQ6IGZhbHNlLFxuICAgIGlzRGVidWc6IGZhbHNlLFxuICAgIGlzRGV2OiBmYWxzZSxcbiAgICBpc1Rlc3Rpbmc6IGZhbHNlLFxuICAgIGh5ZHJhdGVTZXJ2ZXJTaWRlOiBmYWxzZSxcbiAgICBoeWRyYXRlQ2xpZW50U2lkZTogZmFsc2UsXG4gICAgbGlmZWN5Y2xlRE9NRXZlbnRzOiBmYWxzZSxcbiAgICBsYXp5TG9hZDogZmFsc2UsXG4gICAgcHJvZmlsZTogZmFsc2UsXG4gICAgc2xvdFJlbG9jYXRpb246IHRydWUsXG4gICAgYXBwZW5kQ2hpbGRTbG90Rml4OiBmYWxzZSxcbiAgICBjbG9uZU5vZGVGaXg6IGZhbHNlLFxuICAgIGh5ZHJhdGVkQXR0cmlidXRlOiBmYWxzZSxcbiAgICBoeWRyYXRlZENsYXNzOiB0cnVlLFxuICAgIHNhZmFyaTEwOiBmYWxzZSxcbiAgICBzY3JpcHREYXRhT3B0czogZmFsc2UsXG4gICAgc2NvcGVkU2xvdFRleHRDb250ZW50Rml4OiBmYWxzZSxcbiAgICBzaGFkb3dEb21TaGltOiBmYWxzZSxcbiAgICBzbG90Q2hpbGROb2Rlc0ZpeDogZmFsc2UsXG4gICAgaW52aXNpYmxlUHJlaHlkcmF0aW9uOiB0cnVlLFxuICAgIHByb3BCb29sZWFuOiB0cnVlLFxuICAgIHByb3BOdW1iZXI6IHRydWUsXG4gICAgcHJvcFN0cmluZzogdHJ1ZSxcbiAgICBjc3NWYXJTaGltOiBmYWxzZSxcbiAgICBjb25zdHJ1Y3RhYmxlQ1NTOiB0cnVlLFxuICAgIGNtcFNob3VsZFVwZGF0ZTogdHJ1ZSxcbiAgICBkZXZUb29sczogZmFsc2UsXG4gICAgZHluYW1pY0ltcG9ydFNoaW06IGZhbHNlLFxuICAgIHNoYWRvd0RlbGVnYXRlc0ZvY3VzOiB0cnVlLFxuICAgIGluaXRpYWxpemVOZXh0VGljazogZmFsc2UsXG4gICAgYXN5bmNMb2FkaW5nOiBmYWxzZSxcbiAgICBhc3luY1F1ZXVlOiBmYWxzZSxcbiAgICB0cmFuc2Zvcm1UYWdOYW1lOiBmYWxzZSxcbiAgICBhdHRhY2hTdHlsZXM6IHRydWUsXG59O1xuY29uc3QgRW52ID0ge307XG5jb25zdCBOQU1FU1BBQ0UgPSAvKiBkZWZhdWx0ICovICdhcHAnO1xuXG5leHBvcnQgeyBCVUlMRCwgRW52LCBOQU1FU1BBQ0UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFzeW5jIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy51ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLm1haW4uanNcIjtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiB1bmRlZmluZWQ7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcInRvZG8tbGlzdDpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uZi5qID0gKGNodW5rSWQsIHByb21pc2VzKSA9PiB7XG5cdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSA/IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA6IHVuZGVmaW5lZDtcblx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cblx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcblx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodHJ1ZSkgeyAvLyBhbGwgY2h1bmtzIGhhdmUgSlNcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvX2xpc3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdG9kb19saXN0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiXHJcbmltcG9ydCBpbnRlcmFjdERPTSBmcm9tIFwiLi9pbnRlcmFjdERvbVwiXHJcbmltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSBcIi4vZGlzcGxheVRhc2tzXCJcclxuaW1wb3J0IHsgdG9kb0NyZWF0b3IgfSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiXHJcbmltcG9ydCB7IG1vZGlmeVN0YXR1cyB9IGZyb20gXCIuL3RvZG9DcmVhdG9yXCJcclxuaW1wb3J0IGNvbnRyb2xUYXNrQ2hhbmdlIGZyb20gXCIuL2NvbnRyb2xUYXNrQ2hhbmdlXCJcclxuaW1wb3J0IGNvbnRyb2xTdGF0dXNDaGFuZ2UgZnJvbSBcIi4vY29udHJvbFN0YXR1c0NoYW5nZVwiXHJcbmltcG9ydCBjb250cm9sUHJpb3JpdHlDaGFuZ2UgZnJvbSBcIi4vY29udHJvbFByaW9yaXR5Q2hhbmdlXCJcclxuaW1wb3J0IGNvbnRyb2xEdWVEYXRlQ2hhbmdlIGZyb20gXCIuL2NvbnRyb2xEdWVEYXRlQ2hhbmdlXCJcclxuaW1wb3J0IHsgY29udHJvbExpc3RDaGFuZ2UgfSBmcm9tIFwiLi9jb250cm9sTGlzdENoYW5nZVwiXHJcbmltcG9ydCB7IHVwZGF0ZUxpc3RPcHRpb25zIH0gZnJvbSBcIi4vY29udHJvbExpc3RDaGFuZ2VcIlxyXG5pbXBvcnQgeyBjcmVhdGVMaXN0IH0gZnJvbSBcIi4vY3JlYXRlTGlzdFwiXHJcbmltcG9ydCBkaXNwbGF5TGlzdHMgZnJvbSBcIi4vZGlzcGxheUxpc3RzXCJcclxuaW1wb3J0IGhhbmRsZU5ld0xpc3RGb3JtIGZyb20gXCIuL2hhbmRsZU5ld0xpc3RGb3JtXCJcclxuaW1wb3J0IGhhbmRsZU5ld1Rhc2tGb3JtIGZyb20gXCIuL2hhbmRsZU5ld1Rhc2tGb3JtXCJcclxuaW1wb3J0IGZpbHRlckJ5TGlzdCBmcm9tIFwiLi9maWx0ZXJCeUxpc3RcIlxyXG5pbXBvcnQgeyBjcmVhdGVOZXdUYXNrIH0gZnJvbSBcIi4vdG9kb0NyZWF0b3JcIlxyXG5pbXBvcnQgeyBkZWZpbmVUYXNrSWQgfSBmcm9tIFwiLi90b2RvQ3JlYXRvclwiXHJcbmltcG9ydCBoYW5kbGVGaWx0ZXJPcmRlciBmcm9tIFwiLi9oYW5kbGVGaWx0ZXJPcmRlclwiXHJcbmltcG9ydCBoYW5kbGVTYXZlTG9naWMgZnJvbSBcIi4vaGFuZGxlU2F2ZUxvZ2ljXCJcclxuaW1wb3J0IHsgZGVsZXRlVGFzayB9IGZyb20gXCIuL3RvZG9DcmVhdG9yXCJcclxuaW1wb3J0IHsgZ2V0RnJvbUxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2hhbmRsZVNhdmVMb2dpY1wiXHJcblxyXG5pbXBvcnQgYXJyb3dSaWdodCAgZnJvbSAnLi9yaWdodC5wbmcnXHJcblxyXG5pbXBvcnQgeyBXY0RhdGVwaWNrZXIgfSBmcm9tIFwid2MtZGF0ZXBpY2tlci9kaXN0L2NvbXBvbmVudHMvd2MtZGF0ZXBpY2tlclwiO1xyXG4vLyBpbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvd2MtZGF0ZXBpY2tlci9kaXN0L3RoZW1lcy9kYXJrLmNzc1wiXHJcblxyXG5cclxuLy8gY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpIHx8ICdbXScpXHJcbi8vIGNvbnN0IHRvZG9zID0gW11cclxubGV0IHRvZG9zID0gZ2V0RnJvbUxvY2FsU3RvcmFnZSgpIHx8IFtdXHJcbmNvbnN0IGxpc3RzID0gW11cclxuXHJcblxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGdldEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbi8vICAgICBjb25zdCByZWZlcmVuY2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKTtcclxuLy8gICAgIC8vIGlmIHJlZmVyZW5jZSBleGlzdHNcclxuLy8gICAgIGlmIChyZWZlcmVuY2UpIHtcclxuLy8gICAgICAgLy8gY29udmVydHMgYmFjayB0byBhcnJheSBhbmQgc3RvcmUgaXQgaW4gdG9kb3MgYXJyYXlcclxuLy8gICAgICAgdG9kb3MgPSBKU09OLnBhcnNlKHJlZmVyZW5jZSk7XHJcbiAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5kaXNwbGF5VGFza3ModG9kb3MpXHJcblxyXG4vLyBjb25zdCBkZWxldGVUYXNrID0gaW5kZXggPT4ge1xyXG4vLyAgICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKVxyXG4vLyAgICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG4vLyB9XHJcblxyXG5cclxuLy8gY29uc3QgdG9kbzEgPSBjcmVhdGVOZXdUYXNrKCd3YWxrIHdpdGggTWFuY2hpbmhhJywgJ3RvLWRvJywgJ2RhaWx5JywgJ2hpZ2gnLCAnMDQvMDMvMjAyMycsIHRvZG9zKVxyXG5cclxuLy8gY29uc3QgdG9kbzEgPSBjcmVhdGVOZXdUYXNrKCd3YWxrIHdpdGggTWFuY2hpbmhhJywgJ3RvLWRvJywgJ2RhaWx5JywgJ2hpZ2gnLCAnMjAyMy0wNC0wMycsIHRvZG9zKVxyXG4vLyBjb25zdCB0b2RvMiA9IGNyZWF0ZU5ld1Rhc2soJ3BsYXkgUmF2ZW5kYXduJywgJ3RvLWRvJywgJ2RhaWx5JywgJ2hpZ2gnLCAnMjAyMy0wNC0wMycsIHRvZG9zKVxyXG4vLyBjb25zdCB0b2RvMyA9IGNyZWF0ZU5ld1Rhc2soJ3N0dWR5IG1hdGgnLCAndG8tZG8nLCAnZGFpbHknLCAnbWVkaXVtJywgJzIwMjMtMDYtMDQnLCB0b2RvcylcclxuLy8gY29uc3QgdG9kbzQgPSBjcmVhdGVOZXdUYXNrKCdwbGF5IGd1aXRhcicsICdkb2luZycsICdnZW5lcmFsJywgJ2xvdycsICcyMDIzLTA3LTAyJywgdG9kb3MpXHJcbi8vIGNvbnN0IHRvZG81ID0gY3JlYXRlTmV3VGFzaygnbG9vayBmb3IgYmVhdmVycycsICd0by1kbycsICdnZW5lcmFsJywgJ2hpZ2gnLCAnMjAyMy0wNC0xMicsIHRvZG9zKVxyXG4vLyBjb25zdCB0b2RvNiA9IGNyZWF0ZU5ld1Rhc2soJ3RyeSB0byBjYXRjaCBhIHNxdWlycmVsJywgJ3RvLWRvJywgJ2dlbmVyYWwnLCAnbG93JywgJzIwMjMtMTItMDYnLCB0b2RvcylcclxuLy8gY29uc3QgdG9kbzcgPSBjcmVhdGVOZXdUYXNrKCd3YXRjaCB0dicsICdkb2luZycsICdOZW1vJywgJ21lZGl1bScsICcyMDIyLTA1LTA1JywgdG9kb3MpXHJcbi8vIGNvbnN0IHRvZG84ID0gY3JlYXRlTmV3VGFzaygndGFrZSBhIHNob3dlcicsICd0by1kbycsICdQcm9qZWN0JywgJ2hpZ2gnLCAnMjAyNC0wNS0xNycsIHRvZG9zKVxyXG4vLyBjb25zdCB0b2RvOSA9IGNyZWF0ZU5ld1Rhc2soJ2Jvcm4nLCAnZG9uZScsICdOZW1vJywgJ2hpZ2gnLCAnMTk5My0wMS0wNCcsIHRvZG9zKVxyXG4vLyBjb25zdCB0b2RvMTAgPSBjcmVhdGVOZXdUYXNrKCdncmFkdWF0ZSBhdCBmYW5zaGF3ZScsICd3b250IGRvJywgJ1Byb2plY3QnLCAnbWVkaXVtJywgJzIwMjMtMTItMTEnLCB0b2RvcylcclxuXHJcbi8vIHRvZG9zLnB1c2godG9kbzEpXHJcbi8vIHRvZG9zLnB1c2godG9kbzIpXHJcbi8vIHRvZG9zLnB1c2godG9kbzMpXHJcbi8vIHRvZG9zLnB1c2godG9kbzQpXHJcbi8vIHRvZG9zLnB1c2godG9kbzUpXHJcbi8vIHRvZG9zLnB1c2godG9kbzYpXHJcbi8vIHRvZG9zLnB1c2godG9kbzcpXHJcbi8vIHRvZG9zLnB1c2godG9kbzgpXHJcbi8vIHRvZG9zLnB1c2godG9kbzkpXHJcbi8vIHRvZG9zLnB1c2godG9kbzEwKVxyXG4vLyBjb25zb2xlLmxvZyh0b2RvcylcclxuXHJcbi8vIHRvZG9zLmZvckVhY2godG9kbyA9PiB0b2RvLm9yZGVyID0gdG9kb3MuaW5kZXhPZih0b2RvKSlcclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xyXG4vLyAgICAgdG9kb3MuZm9yRWFjaCh0b2RvID0+IHRvZG8ub3JkZXIgPSB0b2Rvcy5pbmRleE9mKHRvZG8pKVxyXG4vLyB9KVxyXG5cclxuXHJcbmNvbnN0IGFkZFRhc2sgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdhZGRUYXNrJylcclxuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbiAgICBjb25zdCBuZXdUYXNrID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnbmV3VGFzaycpXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIGludGVyYWN0RE9NKCkuaGlkZShuZXdUYXNrKVxyXG4gICAgYWRkVGFza3MoKVxyXG4gICAgZGlzcGxheVRhc2tzKHRvZG9zKVxyXG59KVxyXG5cclxuXHJcbmNvbnN0IGFkZFRhc2tzID0gZnVuY3Rpb24oKXtcclxuICAgIGxldCB0YXNrID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCd0YXNrSW5wdXQnKVxyXG4gICAgbGV0IHN0YXR1cyA9IGludGVyYWN0RE9NKCkuZ2V0SW5wdXRWYWx1ZSgnc3RhdHVzSW5wdXQnKVxyXG4gICAgbGV0IGxpc3QgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ2xpc3RJbnB1dCcpXHJcbiAgICBsZXQgcHJpb3JpdHkgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ3ByaW9yaXR5SW5wdXQnKVxyXG4gICAgbGV0IGR1ZURhdGUgPSBpbnRlcmFjdERPTSgpLmdldElucHV0VmFsdWUoJ2R1ZURhdGVJbnB1dCcpXHJcbiAgICAvLyBjb25zdCB0b2RvID0gdG9kb0NyZWF0b3IoYCR7dGFza31gLGAke3N0YXR1c31gLGAke2xpc3R9YCxgJHtwcmlvcml0eX1gLGAke2R1ZURhdGV9YClcclxuICAgIGNvbnN0IHRvZG8gPSBjcmVhdGVOZXdUYXNrKGAke3Rhc2t9YCxgJHtzdGF0dXN9YCxgJHtsaXN0fWAsYCR7cHJpb3JpdHl9YCxgJHtkdWVEYXRlfWAsIHRvZG9zKVxyXG4gICAgY29uc29sZS5sb2coZHVlRGF0ZSlcclxuICAgIC8vIHRvZG9zLnB1c2godG9kbylcclxuICAgIGludGVyYWN0RE9NKCkuZm9ybVJlc2V0KCduZXdUYXNrJylcclxufVxyXG5cclxuLy8gZGlzcGxheVRhc2tzKHRvZG9zKVxyXG5cclxuLy8gPT09PT09PT09PT09PT09IGVkaXQgdGFza3MgbG9naWMsIHNvb24gd2lsbCBiZSBhIG1vZHVsZVxyXG5jb25zdCB0b2Rvc1ZpZXcgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCd0b2Rvc1ZpZXcnKVxyXG50b2Rvc1ZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUtdGFzaycpKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuaWQpXHJcbiAgICAgICAgZGVsZXRlVGFzayhlLnRhcmdldC5wYXJlbnROb2RlLmlkKVxyXG4gICAgICAgIFxyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tc3RhdHVzJykpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9ICtgJHtlLnRhcmdldC5pZH1gLnJlcGxhY2UoXCJzdGF0dXNcIiwgXCJcIilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICAvLyBoYW5kbGVTdGF0dXNDaGFuZ2UgKGUudGFyZ2V0LCBpbmRleClcclxuICAgICAgICBjb250cm9sU3RhdHVzQ2hhbmdlKGUudGFyZ2V0LCBpbmRleCwgdG9kb3MpXHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygndG9kby1wcmlvcml0eScpKXtcclxuICAgICAgICBjb25zdCBpbmRleCA9ICtgJHtlLnRhcmdldC5pZH1gLnJlcGxhY2UoXCJwcmlvcml0eVwiLCBcIlwiKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIGNvbnRyb2xQcmlvcml0eUNoYW5nZShlLnRhcmdldCwgaW5kZXgsIHRvZG9zKSBcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaGVjay10YXNrJykpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NsaWNrZWQnKVxyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2xpY2tlZCcpKXtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlVGFzayhlLnRhcmdldClcclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICB9LCAyMDAwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KVxyXG4gICAgICAgIFxyXG5cclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLWxpc3RzJykpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcImxpc3RcIiwgXCJcIilcclxuICAgICAgICBjb250cm9sTGlzdENoYW5nZShlLnRhcmdldCwgaW5kZXgsIGxpc3RzLCB0b2RvcylcclxuICAgIH0gZWxzZSBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8tdGFza3MnKSl7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSArYCR7ZS50YXJnZXQuaWR9YC5yZXBsYWNlKFwidGFza1wiLCBcIlwiKVxyXG4gICAgICAgIGNvbnRyb2xUYXNrQ2hhbmdlKGUudGFyZ2V0LCBpbmRleCwgdG9kb3MpXHJcbiAgICB9IGVsc2UgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RvLWR1ZS1kYXRlJykpe1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gK2Ake2UudGFyZ2V0LmlkfWAucmVwbGFjZShcImR1ZURhdGVcIiwgXCJcIilcclxuICAgICAgICBjb250cm9sRHVlRGF0ZUNoYW5nZShlLnRhcmdldCwgaW5kZXgsIHRvZG9zKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBlbHNlIHtcclxuICAgIC8vICAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbiAgICAvLyB9XHJcbn0pO1xyXG4vLyA9PT09PT09PT09PT09PT0gZWRpdCB0YXNrcyBsb2dpYywgc29vbiB3aWxsIGJlIGEgbW9kdWxlXHJcblxyXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coZS50YXJnZXQpXHJcbi8vIH0pXHJcblxyXG5oYW5kbGVOZXdUYXNrRm9ybSgpXHJcblxyXG5cclxuXHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PSBsaXN0IGFkZCBsb2dpYywgc29vbiB3aWxsIGJlIGEgbmV3IG1vZHVsZSAgXHJcbmNvbnN0IGxpc3QxID0gY3JlYXRlTGlzdCgnZ2VuZXJhbCcpXHJcbmNvbnN0IGxpc3QyID0gY3JlYXRlTGlzdCgnTmVtbycpXHJcbmNvbnN0IGxpc3QzID0gY3JlYXRlTGlzdCgnUHJvamVjdCcpXHJcbmNvbnN0IGxpc3Q0ID0gY3JlYXRlTGlzdCgnZGFpbHknKVxyXG5saXN0cy5wdXNoKGxpc3QxKVxyXG5saXN0cy5wdXNoKGxpc3QyKVxyXG5saXN0cy5wdXNoKGxpc3QzKVxyXG5saXN0cy5wdXNoKGxpc3Q0KVxyXG5jb25zb2xlLmxvZyhsaXN0cy5tYXAoIGxpc3QgPT4gbGlzdC5saXN0TmFtZSkpXHJcbmRpc3BsYXlMaXN0cyhsaXN0cylcclxuXHJcbi8vIGNvbnN0IGxpc3RJbnB1dCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ2xpc3RJbnB1dCcpXHJcbi8vIGNvbnN0IGxpc3RBcnJheSA9IGxpc3RzLm1hcCggbGlzdCA9PiBsaXN0Lmxpc3ROYW1lKVxyXG4vLyBsaXN0QXJyYXkuZm9yRWFjaChpdGVtID0+IHtcclxuLy8gICAgICAgICBjb25zdCBvcHRpb25FbGVtZW50ID0gaW50ZXJhY3RET00oKS4gY3JlYXRlRWxlbWVudFdpdGhDbGFzc0FuZElkKCdvcHRpb24nLCAnb3B0aW9uLWlucHV0JywgYGxpc3Qke2xpc3RBcnJheS5pbmRleE9mKGl0ZW0pfWApXHJcbi8vICAgICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IGl0ZW1cclxuLy8gICAgICAgICBvcHRpb25FbGVtZW50LnRleHRDb250ZW50ID0gaXRlbVxyXG4vLyAgICAgICAgIGxpc3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxyXG4vLyB9KVxyXG51cGRhdGVMaXN0T3B0aW9ucyhsaXN0cylcclxuXHJcblxyXG5cclxuICBcclxuY29uc3QgbmV3TGlzdCA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ25ld0xpc3QnKVxyXG5cclxubmV3TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgaGFuZGxlTmV3TGlzdEZvcm0oZSlcclxufSlcclxuXHJcblxyXG5jb25zdCBhZGROZXdMaXN0ID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgnYWRkTmV3TGlzdCcpXHJcblxyXG5jb25zdCBhZGRMaXN0ID0gZnVuY3Rpb24gKCl7XHJcbiAgICBjb25zdCBsaXN0ID0gaW50ZXJhY3RET00oKS5nZXRJbnB1dFZhbHVlKCdsaXN0TmFtZScpXHJcbiAgICBjb25zdCBuZXdMaXN0ID0gY3JlYXRlTGlzdChsaXN0KVxyXG4gICAgbGlzdHMucHVzaChuZXdMaXN0KVxyXG4gICAgaW50ZXJhY3RET00oKS5mb3JtUmVzZXQoJ2FkZExpc3RGb3JtJylcclxufVxyXG5cclxuYWRkTmV3TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT57XHJcbiAgICBjb25zdCBuZXdMaXN0Rm9ybSA9IGludGVyYWN0RE9NKCkuaG9va0RPTWVsZW1lbnQoJ25ld0xpc3RGb3JtJylcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgaW50ZXJhY3RET00oKS5oaWRlKG5ld0xpc3RGb3JtKVxyXG4gICAgYWRkTGlzdCgpXHJcbiAgICBkaXNwbGF5TGlzdHMobGlzdHMpXHJcbiAgICB1cGRhdGVMaXN0T3B0aW9ucyhsaXN0cylcclxufSlcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09IGxpc3QgYWRkIGxvZ2ljLCBzb29uIHdpbGwgYmUgYSBuZXcgbW9kdWxlXHJcblxyXG5mdW5jdGlvbiBjb21wbGV0ZVRhc2soZWxlbWVudCkge1xyXG4gICAgY29uc3QgaW5kZXggPSArYCR7ZWxlbWVudC5pZH1gLnJlcGxhY2UoXCJjaGVja3Rhc2sjXCIsIFwiXCIpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhlbGVtZW50KVxyXG4gICAgbW9kaWZ5U3RhdHVzKGluZGV4LCAnZG9uZScsIHRvZG9zKVxyXG4gICBcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09IGZpbHRlciB0YXNrcyBieSBsaXN0XHJcblxyXG5jb25zdCBsaXN0c1ZpZXcgPSBpbnRlcmFjdERPTSgpLmhvb2tET01lbGVtZW50KCdsaXN0c1ZpZXcnKVxyXG5cclxubGlzdHNWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2xpc3QtaXRlbScpKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldClcclxuICAgICAgICBmaWx0ZXJCeUxpc3QoZS50YXJnZXQsIGxpc3RzLCB0b2RvcylcclxuICAgIH1cclxufSlcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PSBmaWx0ZXIgdGFza3MgYnkgbGlzdFxyXG5cclxuY29uc3QgcmVtb3ZlRmlsdGVyID0gaW50ZXJhY3RET00oKS5ob29rRE9NZWxlbWVudCgncmVtb3ZlRmlsdGVyJylcclxucmVtb3ZlRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBkaXNwbGF5VGFza3ModG9kb3MpXHJcbn0pXHJcblxyXG5cclxuaGFuZGxlRmlsdGVyT3JkZXIobGlzdHMsIHRvZG9zKVxyXG5cclxuY29uc29sZS5sb2codG9kb3MpXHJcblxyXG4vLyBoYW5kbGVTYXZlTG9naWModG9kb3MsIGxpc3RzKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=