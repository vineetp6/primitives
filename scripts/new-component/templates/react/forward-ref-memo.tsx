import * as React from 'react';
import { forwardRef } from '@interop-ui/react-utils';

const DEFAULT_TAG = 'div';

type COMPONENT_NAMEDOMProps = React.ComponentPropsWithoutRef<typeof DEFAULT_TAG>;
type COMPONENT_NAMEOwnProps = {};
type COMPONENT_NAMEProps = COMPONENT_NAMEDOMProps & COMPONENT_NAMEOwnProps;

const COMPONENT_NAMEImpl = forwardRef<typeof DEFAULT_TAG, COMPONENT_NAMEProps>(
  function COMPONENT_NAME(props, forwardedRef) {
    const { as: Comp = DEFAULT_TAG, ...domProps } = props;
    return <Comp ref={forwardedRef} {...domProps} />;
  }
);

COMPONENT_NAMEImpl.displayName = 'COMPONENT_NAME';

const COMPONENT_NAME = React.memo(COMPONENT_NAMEImpl);

export { COMPONENT_NAME };
export type { COMPONENT_NAMEProps };