export class EventHelper {
    
  static _fireEvent(target, name, detail = {}, opts = {}) {
    const { bubbles = true, composed = true, cancelable = false } = opts;
    const event = new CustomEvent(name, { detail, bubbles, composed, cancelable });
    if (target && typeof target.dispatchEvent === 'function') {
      return target.dispatchEvent(event);
    }
    return false;
  }
}