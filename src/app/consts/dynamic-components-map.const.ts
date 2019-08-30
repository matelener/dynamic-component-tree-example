import {DynamicComponentType} from '../enums/dynamic-component-type.enum';
import {DynamicComponentsUnion} from '../types/dynamic-components-union.type';

export const dynamicComponentMap = new Map<DynamicComponentType, DynamicComponentsUnion>();

export function DynamicComponent(type: DynamicComponentType): (component: DynamicComponentsUnion) => void {
  return (component: DynamicComponentsUnion) => {
    dynamicComponentMap.set(type, component);
  };
}
