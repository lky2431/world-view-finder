import {DOMAttributes, RefAttributes} from 'react';

// add an overload signature for the useMapsLibrary hook, so typescript
// knows what the 'maps3d' library is.
declare module '@vis.gl/react-google-maps' {
  export function useMapsLibrary(
    name: 'maps3d'
  ): typeof google.maps.maps3d | null;
}

// add the <gmp-map-3d> custom-element to the JSX.IntrinsicElements
// interface, so it can be used in jsx
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ['gmp-map-3d']: CustomElement<
        google.maps.maps3d.Map3DElement,
        {
          [key in GmpMap3DAttributeNames]?: string;
        }
      >;
      ['gmp-polyline-3d']:CustomElement<google.maps.maps3d.Polyline3DElement, {
          [key in keyof google.maps.maps3d.Polyline3DElementOptions]?:string
      }>
    }
  }


}



type GmpMap3DAttributeNames = keyof Omit<
  google.maps.maps3d.Map3DElementOptions,
  'bounds'
>;

// a helper type for CustomElement definitions
type CustomElement<TElem, TAttr> = Partial<
  TAttr &
    DOMAttributes<TElem> &
    RefAttributes<TElem> & {
      // for whatever reason, anything else doesn't work as children
      // of a custom element, so we allow `any` here
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      children: any;
    }
>;


