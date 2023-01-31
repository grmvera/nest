import { DataSource } from 'typeorm';


// import { DataSourceEnum, RepositoryEnum } from '@shared/enums';
// import { RequirementRequestEntity } from '../entities/requirement-request.entity';

import { PersonaEntity } from 'src/modules/persona/entities/persona.entity';
import { ProductEntity } from 'src/modules/sales/entities';

export const personaProviders = [
  {
    // provide: RepositoryEnum.PRODUCT_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ProductEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },
  {
    // provide: RepositoryEnum.persona_REPOSITORY,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PersonaEntity),
    // inject: [DataSourceEnum.PG_DATA_SOURCE],
  },

]