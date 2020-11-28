import Reconciler from 'react-reconciler';

// Create instance
const createInstance = (type, props) => {
  console.log('createInstance()');
  const instance = document.createElement(type);
  instance.className = props.className || '';
  instance.onclick = props.onClick;
  return instance;
}

// Create text instance
// Text instances are elements which are
// (typeof === 'string' || typeof === 'number')
const createTextInstance = (text) => {
  console.log('createTextInstance()');
  const instance = document.createTextNode(text);
  return instance;
}

// update instance
const commitUpdate = (
  instance,
  updatePayload,
  type,
  oldProps,
  newProps,
) => {
  console.log('commitUpdate()');
  instance.className = newProps.className || '';
  instance.onclick = newProps.onClick;
}

// update text instance
const commitTextUpdate = (instance, oldText, newText) => {
  console.log('commitTextUpdate()');
  instance.textContent = newText;
}

// add new child instance to parent
const appendChild = (parent, child) => {
  console.log('appendChild()');
  parent.appendChild(child);
}
// add (first) child instance to parent
const appendInitialChild = appendChild;
// add new child instance to root
const appendChildToContainer = appendChild;

// insert new child before another child
const insertBefore = (parent, child, beforeChild) => {
  console.log('insertBefore()');
  parent.insertBefore(child, beforeChild);
}
// insert new child before another child (in root)
const insertInContainerBefore = insertBefore;

// remove child instance from parent
const removeChild = (parent, child) => {
  console.log('removeChild()');
  parent.removeChild(child);
}
// remove child instance from root
const removeChildFromContainer = removeChild;










// required config stuff which is ignored by this example
const HOST_CONTEXT = { HOST_CONTEXT: true };
const UPDATE_CONTEXT = { UPDATE_CONTEXT: true };

function prepareForCommit() {}
function resetAfterCommit() {}
function finalizeInitialChildren() {}
function getRootHostContext() {
  return HOST_CONTEXT;
}
function getChildHostContext() {
  return HOST_CONTEXT;
}
// Returns true if component's children should be treated purely as text.
// For the sake of simpler example, this function always returns false,
// meaning text children will always be created with createTextInstance()
function shouldSetTextContent(type, props) {
  // return typeof props.children === 'string' || typeof props.children === 'number';
  return false;
}
function prepareUpdate(instance, type, oldProps, newProps) {
  return UPDATE_CONTEXT;
}

const HostConfig = {
  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,

  createInstance,
  createTextInstance,
  commitUpdate,
  commitTextUpdate,
  appendInitialChild,
  appendChild,
  appendChildToContainer,
  insertBefore,
  insertInContainerBefore,
  removeChild,
  removeChildFromContainer,

  // ignored functions
  getRootHostContext,
  getChildHostContext,
  shouldSetTextContent,
  prepareForCommit,
  resetAfterCommit,
  finalizeInitialChildren,
  prepareUpdate,
};

const ReconcilerInstance = Reconciler(HostConfig);

const CustomReactRenderer = {
  render: (reactElement, root) => {
    console.log('CustomReactRenderer.render()');
    const rootContainer = ReconcilerInstance.createContainer(root, false);
    ReconcilerInstance.updateContainer(reactElement, rootContainer, null);
  }
};

export default CustomReactRenderer;
