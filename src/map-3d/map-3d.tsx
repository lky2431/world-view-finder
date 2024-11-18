import {useMapsLibrary} from '@vis.gl/react-google-maps';
import React, {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
    useRef,
  useState
} from 'react';
import {useMap3DCameraEvents} from './use-map-3d-camera-events';
import {useCallbackRef, useDeepCompareEffect} from '../util/utility-hooks';


import './map-3d-types';

export type Map3DProps = google.maps.maps3d.Map3DElementOptions & {
  onCameraChange?: (cameraProps: Map3DCameraProps) => void;
  lineCoordinates:Iterable<google.maps.LatLngLiteral>;
  boundary?:google.maps.LatLngBoundsLiteral;
};

export type Map3DCameraProps = {
  center: google.maps.LatLngAltitudeLiteral;
  range: number;
  heading: number;
  tilt: number;
  roll: number;
};

export const Map3D = forwardRef(
  (
    props: Map3DProps,
    forwardedRef: ForwardedRef<google.maps.maps3d.Map3DElement | null>
  ) => {
    useMapsLibrary('maps3d');

    const [map3DElement, map3dRef] =
      useCallbackRef<google.maps.maps3d.Map3DElement>();

    useMap3DCameraEvents(map3DElement, p => {

      if (!props.onCameraChange) return;
      props.onCameraChange(p);
    });

    const lineRef= useRef<google.maps.maps3d.Polyline3DElement>(null)

    useEffect(() => {
      if(Array.from(props.lineCoordinates).length>0){
        setTimeout(()=>{
          lineRef.current!.coordinates=props.lineCoordinates
        },200)
      }
    }, [props.lineCoordinates]);

    const [customElementsReady, setCustomElementsReady] = useState(false);

    useEffect(()=>{
      if(map3DElement!=null){
        map3DElement.bounds=props.boundary
      }
    },[customElementsReady, props.boundary,map3DElement])


    useEffect(() => {
      customElements.whenDefined('gmp-map-3d').then(() => {
        setCustomElementsReady(true);
      });
    }, []);

    const {center, heading, tilt, range, roll, ...map3dOptions} = props;

    useDeepCompareEffect(() => {
      if (!map3DElement) return;

      // copy all values from map3dOptions to the map3D element itself
      Object.assign(map3DElement, map3dOptions);
    }, [map3DElement, map3dOptions]);

    useImperativeHandle<
      google.maps.maps3d.Map3DElement | null,
      google.maps.maps3d.Map3DElement | null
    >(forwardedRef, () => map3DElement, [map3DElement]);

    const centerString = useMemo(() => {
      const lat = center?.lat ?? 0.0;
      const lng = center?.lng ?? 0.0;
      const altitude = center?.altitude ?? 0.0;

      return [lat, lng, altitude].join(',');
    }, [center?.lat, center?.lng, center?.altitude]);

    if (!customElementsReady) return null;

    return (
          <gmp-map-3d
              ref={map3dRef}
              center={centerString}
              range={String(props.range)}
              heading={String(props.heading)}
              tilt={String(props.tilt)}
              roll={String(props.roll)}>
            <gmp-polyline-3d altitude-mode="relative_to_mesh" stroke-color="rgba(255, 102, 10, 1.0)"
                             stroke-width="10" ref={lineRef}></gmp-polyline-3d>
          </gmp-map-3d>


    );
  }
);
