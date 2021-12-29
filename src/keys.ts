import {BindingKey, CoreBindings} from '@loopback/core';
import {LoopbackMqComponent} from './component';

/**
 * Binding keys used by this component.
 */
export namespace LoopbackMqComponentBindings {
  export const COMPONENT = BindingKey.create<LoopbackMqComponent>(
    `${CoreBindings.COMPONENTS}.LoopbackMqComponent`,
  );
}
