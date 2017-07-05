export function transition(transitionStyle) {
  return {
    WebkitTransition: transitionStyle,
    MozTransition: transitionStyle,
    OTransition: transitionStyle,
    transition: transitionStyle,
  };
}

export function transform(transformStyle) {
  return {
    WebkitTransform: transformStyle,
    MozTransform: transformStyle,
    OTransform: transformStyle,
    transform: transformStyle,
  };
}
