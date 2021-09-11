import { NgModule } from '@angular/core';

import { ClientModule } from './client/client.module';
import { EnterpriseModule } from './enterprise/enterprise.module';
import {ClientDetailsModule} from 'src/app/pages/client-details/client-details.module';

@NgModule({
  imports: [ClientModule, EnterpriseModule, ClientDetailsModule],
})
export class PagesModule {}
