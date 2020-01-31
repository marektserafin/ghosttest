import { NgModule } from '@angular/core';

import { GhostTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [GhostTestSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [GhostTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GhostTestSharedCommonModule {}
