import {
  Application,
  injectable,
  Component,
  config,
  ContextTags,
  CoreBindings,
  inject,
} from '@loopback/core';
import {LoopbackMqComponentBindings} from './keys'
import {DEFAULT_LOOPBACK_MQ_OPTIONS, LoopbackMqComponentOptions} from './types';

// Configure the binding for LoopbackMqComponent
@injectable({tags: {[ContextTags.KEY]: LoopbackMqComponentBindings.COMPONENT}})
export class LoopbackMqComponent implements Component {
  constructor(
    @inject(CoreBindings.APPLICATION_INSTANCE)
    private application: Application,
    @config()
    private options: LoopbackMqComponentOptions = DEFAULT_LOOPBACK_MQ_OPTIONS,
  ) {}
}
