import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GhostTestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [GhostTestSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [GhostTestSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GhostTestSharedModule {
  static forRoot() {
    return {
      ngModule: GhostTestSharedModule
    };
  }
}
