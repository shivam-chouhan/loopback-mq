# loopback-mq

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

## Installation

Install LoopbackMqComponent using `npm`;

```sh
$ [npm install | yarn add] loopback-mq
```

## Basic Use

Configure and load LoopbackMqComponent in the application constructor
as shown below.

```ts
import {LoopbackMqComponent, LoopbackMqComponentOptions, DEFAULT_LOOPBACK_MQ_OPTIONS} from 'loopback-mq';
// ...
export class MyApplication extends BootMixin(ServiceMixin(RepositoryMixin(RestApplication))) {
  constructor(options: ApplicationConfig = {}) {
    const opts: LoopbackMqComponentOptions = DEFAULT_LOOPBACK_MQ_OPTIONS;
    this.configure(LoopbackMqComponentBindings.COMPONENT).to(opts);
      // Put the configuration options here
    });
    this.component(LoopbackMqComponent);
    // ...
  }
  // ...
}
```
